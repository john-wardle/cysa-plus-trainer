import { createServer } from 'node:http'
import { readFileSync, readdirSync } from 'node:fs'
import { join, relative, extname } from 'node:path'

const host = process.env.API_HOST ?? '127.0.0.1'
const port = Number(process.env.API_PORT ?? 8787)
const ollamaUrl = (process.env.OLLAMA_URL ?? 'http://127.0.0.1:11434').replace(/\/$/, '')
const model = process.env.OLLAMA_MODEL ?? 'llama3.2:3b'
const projectRoot = process.cwd()
const dataRoot = join(projectRoot, 'src', 'data')
const sessions = new Map()
const sessionTimeoutMs = 15_000

const stopWords = new Set([
  'a', 'an', 'and', 'are', 'as', 'at', 'be', 'by', 'for', 'from', 'how',
  'i', 'in', 'is', 'it', 'me', 'of', 'on', 'or', 'the', 'to', 'what',
  'when', 'which', 'why', 'with', 'you',
])

function tokenize(value) {
  return new Set(
    value
      .toLowerCase()
      .replace(/[^a-z0-9+#-]+/g, ' ')
      .split(/\s+/)
      .filter((token) => token.length > 2 && !stopWords.has(token)),
  )
}

function listTypeScriptFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name)
    if (entry.isDirectory()) return listTypeScriptFiles(path)
    return extname(entry.name) === '.ts' ? [path] : []
  })
}

function buildKnowledgeBase() {
  return listTypeScriptFiles(dataRoot).flatMap((filePath) => {
    const source = readFileSync(filePath, 'utf8')
    const chunks = source
      .split(/\n  \{(?=\n\s*id:)/)
      .map((chunk, index) => (index === 0 ? chunk : `{${chunk}`))
      .filter((chunk) => chunk.trim().length > 80)
    return chunks.map((content, index) => ({
      id: `${relative(projectRoot, filePath)}#${index + 1}`,
      file: relative(projectRoot, filePath),
      content: content.trim(),
      tokens: tokenize(content),
    }))
  })
}

const knowledgeBase = buildKnowledgeBase()

function retrieve(query, certification) {
  const queryTokens = tokenize(`${certification} ${query}`)
  return knowledgeBase
    .map((chunk) => {
      const overlap = [...queryTokens].filter((token) => chunk.tokens.has(token)).length
      const certificationBoost = chunk.content.includes(certification) ? 2 : 0
      const phraseBoost = query.length > 12 && chunk.content.toLowerCase().includes(query.toLowerCase()) ? 5 : 0
      return { ...chunk, score: overlap + certificationBoost + phraseBoost }
    })
    .filter((chunk) => chunk.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 6)
}

function sendJson(response, status, payload) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
  })
  response.end(JSON.stringify(payload))
}

function pruneSessions() {
  const cutoff = Date.now() - sessionTimeoutMs
  for (const [token, lastSeen] of sessions) {
    if (lastSeen < cutoff) sessions.delete(token)
  }
}

function readJson(request) {
  return new Promise((resolve, reject) => {
    let body = ''
    request.on('data', (chunk) => {
      body += chunk
      if (body.length > 256_000) reject(new Error('Request body is too large.'))
    })
    request.on('end', () => {
      try {
        resolve(JSON.parse(body || '{}'))
      } catch {
        reject(new Error('Request body must be valid JSON.'))
      }
    })
    request.on('error', reject)
  })
}

async function askOllama(messages, context, selectedModel) {
  const system = `You are the local AI tutor inside a CySA+ and PenTest+ training application.
Use the retrieved repository context as your primary source. Explain concepts clearly, distinguish facts from inference, and say when the context is insufficient.
Do not reveal answer keys unless the user has already submitted the question. Do not invent citations.
This is defensive education: keep guidance safe, authorized, and lab-oriented.

Retrieved repository context:
${context.map((chunk, index) => `[Source ${index + 1}: ${chunk.id}]\n${chunk.content}`).join('\n\n')}`

  const response = await fetch(`${ollamaUrl}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: selectedModel,
      stream: false,
      messages: [{ role: 'system', content: system }, ...messages.slice(-8)],
      options: { temperature: 0.2 },
    }),
  })

  if (!response.ok) {
    throw new Error(`Ollama returned HTTP ${response.status}. Is the model installed and running?`)
  }

  const payload = await response.json()
  return payload.message?.content ?? 'The local model returned an empty response.'
}

async function listOllamaModels() {
  const response = await fetch(`${ollamaUrl}/api/tags`)
  if (!response.ok) throw new Error(`Ollama returned HTTP ${response.status} while listing models.`)
  const payload = await response.json()
  return (payload.models ?? [])
    .map((entry) => entry.name)
    .filter((name) => typeof name === 'string')
}

async function loadOllamaModel(selectedModel) {
  const response = await fetch(`${ollamaUrl}/api/generate`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      model: selectedModel,
      prompt: '',
      stream: false,
      keep_alive: '5m',
    }),
  })

  if (!response.ok) {
    throw new Error(`Ollama returned HTTP ${response.status} while loading ${selectedModel}.`)
  }

  await response.json()
}

const server = createServer(async (request, response) => {
  if (request.method === 'OPTIONS') {
    response.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
    })
    response.end()
    return
  }

  const requestUrl = new URL(request.url ?? '/', 'http://127.0.0.1')

  if (request.method === 'GET' && requestUrl.pathname === '/api/health') {
    sendJson(response, 200, { ok: true, model, chunks: knowledgeBase.length })
    return
  }

  if (request.method === 'GET' && requestUrl.pathname === '/api/models') {
    try {
      sendJson(response, 200, { models: await listOllamaModels(), defaultModel: model })
    } catch (error) {
      sendJson(response, 503, {
        error: error instanceof Error ? error.message : 'Unable to list local models.',
      })
    }
    return
  }

  if (request.method === 'POST' && requestUrl.pathname === '/api/model/load') {
    try {
      const body = await readJson(request)
      const selectedModel = typeof body.model === 'string' ? body.model.trim() : ''
      const installedModels = await listOllamaModels()

      if (!selectedModel || !installedModels.includes(selectedModel)) {
        sendJson(response, 400, {
          error: `Model "${selectedModel || 'unknown'}" is not installed. Pull it with: ollama pull ${selectedModel || '<model-name>'}`,
        })
        return
      }

      await loadOllamaModel(selectedModel)
      sendJson(response, 200, { ok: true, model: selectedModel, status: 'ready' })
    } catch (error) {
      sendJson(response, 503, {
        error: error instanceof Error ? error.message : 'The selected local model could not be loaded.',
      })
    }
    return
  }

  if (request.method === 'GET' && requestUrl.pathname === '/api/session/status') {
    pruneSessions()
    const token = requestUrl.searchParams.get('token')
    sendJson(response, 200, { active: Boolean(token && sessions.has(token)) })
    return
  }

  if (request.method === 'POST' && (
    requestUrl.pathname === '/api/session/heartbeat' ||
    requestUrl.pathname === '/api/session/close'
  )) {
    try {
      const body = await readJson(request)
      const token = typeof body.token === 'string' ? body.token : ''
      if (token) {
        if (requestUrl.pathname.endsWith('/close')) sessions.delete(token)
        else sessions.set(token, Date.now())
      }
      sendJson(response, 200, { ok: true })
    } catch (error) {
      sendJson(response, 400, { error: error instanceof Error ? error.message : 'Invalid session request.' })
    }
    return
  }

  if (request.method === 'POST' && requestUrl.pathname === '/api/tutor') {
    try {
      const body = await readJson(request)
      const messages = Array.isArray(body.messages) ? body.messages : []
      const question = messages.at(-1)?.content?.trim()
      const certification = body.certification === 'PenTest+' ? 'PenTest+' : 'CySA+'
      const selectedModel = typeof body.model === 'string' && body.model.trim() ? body.model.trim() : model

      if (!question) {
        sendJson(response, 400, { error: 'A question is required.' })
        return
      }

      const installedModels = await listOllamaModels()
      if (!installedModels.includes(selectedModel)) {
        sendJson(response, 400, {
          error: `Model "${selectedModel}" is not installed. Pull it with: ollama pull ${selectedModel}`,
        })
        return
      }

      const context = retrieve(question, certification)
      const answer = await askOllama(messages, context, selectedModel)
      sendJson(response, 200, {
        answer,
        model: selectedModel,
        sources: context.map(({ id, file, score }) => ({ id, file, score })),
      })
    } catch (error) {
      sendJson(response, 503, {
        error: error instanceof Error ? error.message : 'The local tutor is unavailable.',
      })
    }
    return
  }

  sendJson(response, 404, { error: 'Not found.' })
})

server.listen(port, host, () => {
  console.log(`Self-hosted tutor API listening at http://${host}:${port}`)
  console.log(`Model: ${model}; indexed chunks: ${knowledgeBase.length}`)
})
