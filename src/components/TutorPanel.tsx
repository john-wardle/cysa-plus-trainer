import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { BookOpen, Bot, LoaderCircle, RefreshCw, Send } from 'lucide-react'
import type { Certification } from '../data/questionBank'

type Message = {
  role: 'user' | 'assistant'
  content: string
}

type TutorPanelProps = {
  certification: Certification
}

type ModelStatus = 'idle' | 'loading' | 'ready' | 'error'
type TutorProvider = 'ollama' | 'opencode'

const starterQuestions = [
  'Explain how to prioritize a vulnerability when there is an active exploit.',
  'Help me understand the difference between containment and eradication.',
  'Quiz me on the most important ideas in Security Operations.',
]

async function readJsonResponse(response: Response) {
  const text = await response.text()

  if (!text.trim()) {
    throw new Error(
      `The tutor returned an empty response (HTTP ${response.status}). Start it with ./launch-cysa-trainer.sh, then refresh this page.`,
    )
  }

  try {
    return JSON.parse(text) as Record<string, unknown>
  } catch {
    throw new Error(
      `The tutor returned an invalid response (HTTP ${response.status}). Restart it with ./launch-cysa-trainer.sh.`,
    )
  }
}

function TutorPanel({ certification }: TutorPanelProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const sessionIdRef = useRef(`cysa-plus-trainer-${crypto.randomUUID()}`)
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: `I am your local ${certification} tutor. Ask for an explanation, a hint, or a short quiz. I will ground my answer in the trainer's indexed material.`,
    },
  ])
  const [prompt, setPrompt] = useState('')
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [sources, setSources] = useState<string[]>([])
  const [provider, setProvider] = useState<TutorProvider>('ollama')
  const [hostedAvailable, setHostedAvailable] = useState(false)
  const [models, setModels] = useState<string[]>([])
  const [selectedModel, setSelectedModel] = useState('')
  const [modelsLoading, setModelsLoading] = useState(true)
  const [modelStatus, setModelStatus] = useState<ModelStatus>('idle')

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
  }, [messages, busy])

  async function loadSelectedModel(model: string, selectedProvider = provider) {
    if (!model) return

    setModelStatus('loading')
    setError(null)
    try {
      const response = await fetch('/api/model/load', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, provider: selectedProvider }),
      })
      const payload = await readJsonResponse(response)
      if (!response.ok) throw new Error(String(payload.error ?? 'The selected model could not be loaded.'))
      setModelStatus('ready')
    } catch (modelError) {
      setModelStatus('error')
      setError(modelError instanceof Error ? modelError.message : 'The selected model could not be loaded.')
    }
  }

  async function loadModels(selectedProvider = provider) {
    setModelsLoading(true)
    try {
      const response = await fetch(`/api/models?provider=${selectedProvider}`)
      const payload = await readJsonResponse(response)
      if (!response.ok) throw new Error(String(payload.error ?? 'Unable to list installed models.'))
      const installedModels = Array.isArray(payload.models) ? payload.models as string[] : []
      setModels(installedModels)
      const nextModel = selectedModel && installedModels.includes(selectedModel) ? selectedModel : installedModels[0] ?? ''
      setSelectedModel(nextModel)
      setError(null)
      void loadSelectedModel(nextModel, selectedProvider)
    } catch (modelError) {
      setError(modelError instanceof Error ? modelError.message : 'Unable to list installed models.')
    } finally {
      setModelsLoading(false)
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(async () => {
      try {
        const response = await fetch('/api/providers')
        const payload = await readJsonResponse(response)
        if (!response.ok) throw new Error(String(payload.error ?? 'Unable to list tutor providers.'))
        const availableProviders = Array.isArray(payload.providers) ? payload.providers as Array<{ id?: unknown; available?: unknown }> : []
        setHostedAvailable(availableProviders.some((entry) => entry.id === 'opencode' && entry.available === true))
      } catch (providerError) {
        setError(providerError instanceof Error ? providerError.message : 'Unable to list tutor providers.')
      }
      void loadModels('ollama')
    }, 0)
    return () => window.clearTimeout(timer)
  }, [])

  function changeProvider(nextProvider: TutorProvider) {
    setProvider(nextProvider)
    setModels([])
    setSelectedModel('')
    setModelStatus('idle')
    setError(null)
    void loadModels(nextProvider)
  }

  async function submit(event: FormEvent) {
    event.preventDefault()
    const content = prompt.trim()
    if (!content || busy) return

    const nextMessages = [...messages, { role: 'user' as const, content }]
    setMessages(nextMessages)
    setPrompt('')
    setBusy(true)
    setError(null)

    try {
      const response = await fetch('/api/tutor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certification, messages: nextMessages, model: selectedModel, provider, sessionId: sessionIdRef.current }),
      })
      const payload = await readJsonResponse(response)
      if (!response.ok) throw new Error(String(payload.error ?? 'The local tutor is unavailable.'))

      setMessages([...nextMessages, { role: 'assistant', content: String(payload.answer ?? 'The local model returned no answer.') }])
      setSources(Array.isArray(payload.sources) ? payload.sources.map((source) => String((source as { id?: unknown }).id ?? 'Unknown source')) : [])
    } catch (submissionError) {
      setError(submissionError instanceof Error ? submissionError.message : 'The selected tutor is unavailable.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="w-full min-w-0 space-y-6">
      <div>
        <p className="mb-2 text-sm font-medium text-cyan-300">AI TUTOR</p>
        <h2 className="text-3xl font-bold tracking-tight">Study with the right model for the job.</h2>
        <p className="mt-2 max-w-2xl text-slate-400">
          Retrieval uses the trainer's local question bank and PBQ material. Choose private local inference or the faster hosted OpenCode path.
        </p>
      </div>

      <section className="w-full min-w-0 rounded-2xl border border-cyan-400/25 bg-slate-900 p-6">
        <div className="mb-5 flex items-center gap-3">
          <div className="rounded-xl bg-cyan-400/15 p-2 text-cyan-300"><Bot size={22} /></div>
          <div>
            <h3 className="font-semibold">{certification} tutor</h3>
            <p className="text-xs text-slate-400">{provider === 'opencode' ? 'Hosted OpenCode · repository-grounded retrieval' : 'Local Ollama · repository-grounded retrieval'}</p>
          </div>
        </div>

        <div className="mb-5 rounded-xl border border-slate-800 bg-slate-950/70 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <label className="text-sm font-medium text-slate-200" htmlFor="tutor-provider">Inference provider</label>
            <button className="inline-flex items-center gap-2 text-xs text-slate-400 transition hover:text-cyan-200 disabled:cursor-not-allowed disabled:opacity-50" disabled={modelsLoading} onClick={() => void loadModels()} type="button">
              <RefreshCw className={modelsLoading ? 'animate-spin' : ''} size={14} />
              Refresh models
            </button>
          </div>
          <select
            className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400"
            id="tutor-provider"
            onChange={(event) => changeProvider(event.target.value as TutorProvider)}
            value={provider}
          >
            <option value="ollama">Local Ollama (private)</option>
            <option disabled={!hostedAvailable} value="opencode">Hosted OpenCode (remote){hostedAvailable ? '' : ' — not configured'}</option>
          </select>
          {!hostedAvailable && <div className="mt-3 rounded-lg border border-amber-400/30 bg-amber-400/10 p-3 text-xs leading-5 text-amber-100">
            <p className="font-medium text-amber-200">Hosted OpenCode is not configured</p>
            <p className="mt-1">Create an OpenCode account, subscribe to OpenCode Go or use another authorized API plan, then add your key to <code className="rounded bg-slate-800 px-1.5 py-0.5 text-cyan-200">~/.config/cysa-plus-trainer/environment</code> and restart the trainer.</p>
            <p className="mt-2 flex flex-wrap gap-x-3 gap-y-1"><a className="text-cyan-300 underline hover:text-cyan-200" href="https://opencode.ai/v2/docs/console/go/" rel="noreferrer" target="_blank">Go plan and limits</a><a className="text-cyan-300 underline hover:text-cyan-200" href="https://dev.opencode.ai/v2/docs/console/api/inference" rel="noreferrer" target="_blank">Inference API</a><a className="text-cyan-300 underline hover:text-cyan-200" href="https://opencode.ai/console" rel="noreferrer" target="_blank">Console and API keys</a></p>
            <p className="mt-2 text-slate-300">Free models may be limited to the OpenCode application. Local Ollama works without an OpenCode account.</p>
            <p className="mt-2 text-slate-300">Other provider API pages:</p>
            <p className="flex flex-wrap gap-x-3 gap-y-1"><a className="text-cyan-300 underline hover:text-cyan-200" href="https://platform.openai.com/" rel="noreferrer" target="_blank">OpenAI / ChatGPT API</a><a className="text-cyan-300 underline hover:text-cyan-200" href="https://console.anthropic.com/" rel="noreferrer" target="_blank">Anthropic API</a><a className="text-cyan-300 underline hover:text-cyan-200" href="https://docs.x.ai/developers/quickstart" rel="noreferrer" target="_blank">xAI / Grok API</a><a className="text-cyan-300 underline hover:text-cyan-200" href="https://ai.google.dev/aistudio" rel="noreferrer" target="_blank">Google Gemini API</a></p>
          </div>}
          {provider === 'opencode' && <p className="mt-3 rounded-lg border border-amber-400/30 bg-amber-400/10 p-3 text-xs leading-5 text-amber-100">Remote mode sends your question, conversation, and retrieved trainer context to OpenCode. Do not include private or sensitive data.</p>}
          <label className="mt-4 block text-sm font-medium text-slate-200" htmlFor="tutor-model">{provider === 'opencode' ? 'Hosted model' : 'Local model'}</label>
          <select
            className="mt-3 w-full rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none transition focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={modelsLoading || models.length === 0}
            id="tutor-model"
            onChange={(event) => {
              const nextModel = event.target.value
              setSelectedModel(nextModel)
              void loadSelectedModel(nextModel)
            }}
            value={selectedModel}
          >
            {models.length === 0 ? <option value="">No installed models found</option> : models.map((model) => <option key={model} value={model}>{model}</option>)}
          </select>
          <div className="mt-3 flex items-center gap-2 text-xs" role="status" aria-live="polite">
            {modelStatus === 'loading' && <><LoaderCircle className="animate-spin text-amber-300" size={14} /><span className="text-amber-200">Loading {selectedModel}…</span></>}
            {modelStatus === 'ready' && <><span className="size-2 rounded-full bg-emerald-400" /><span className="text-emerald-300">{selectedModel} loaded and ready</span></>}
            {modelStatus === 'error' && <><span className="size-2 rounded-full bg-rose-400" /><span className="text-rose-300">Model failed to load</span></>}
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            {provider === 'opencode' ? 'Hosted models are configured with OPENCODE_MODEL or OPENCODE_MODELS before startup. Free-tier models may not be available through the API.' : <>Add another local model from a terminal with{' '}<code className="rounded bg-slate-800 px-1.5 py-0.5 text-cyan-200">ollama pull &lt;model-name&gt;</code>, then click Refresh models.</>}
          </p>
        </div>

        <div className="tutor-messages min-h-[18rem] h-[min(55vh,32rem)] space-y-4 overflow-y-auto pr-2">
          {messages.map((message, index) => (
            <div className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`} key={`${message.role}-${index}`}>
              <div className={`max-w-3xl whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === 'user' ? 'bg-cyan-400 text-slate-950' : 'bg-slate-950 text-slate-200'}`}>
                {message.content}
              </div>
            </div>
          ))}
          {busy && <div className="flex items-center gap-2 text-sm text-slate-400"><LoaderCircle className="animate-spin" size={16} /> Thinking {provider === 'opencode' ? 'with OpenCode' : 'locally'}…</div>}
          <div ref={messagesEndRef} />
        </div>

        {error && <p className="mt-4 rounded-lg border border-rose-400/30 bg-rose-400/10 p-3 text-sm text-rose-200">{error}</p>}

        <form className="mt-5 flex gap-3" onSubmit={submit}>
          <textarea
            className="min-h-12 flex-1 resize-y rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none transition focus:border-cyan-400"
            onChange={(event) => setPrompt(event.target.value)}
            placeholder={`Ask your ${provider === 'opencode' ? 'hosted' : 'local'} tutor…`}
            value={prompt}
          />
          <button className="self-end rounded-xl bg-cyan-400 p-3 text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-40" disabled={busy || modelStatus !== 'ready' || !prompt.trim()} type="submit">
            <Send size={18} />
          </button>
        </form>

        <div className="mt-4 flex flex-wrap gap-2">
          {starterQuestions.map((question) => (
            <button className="rounded-full border border-slate-700 px-3 py-1.5 text-left text-xs text-slate-300 transition hover:border-cyan-400/60 hover:text-cyan-200" key={question} onClick={() => setPrompt(question)} type="button">
              {question}
            </button>
          ))}
        </div>

        {sources.length > 0 && (
          <div className="mt-5 border-t border-slate-800 pt-4 text-xs text-slate-400">
            <div className="mb-2 flex items-center gap-2 font-medium text-slate-300"><BookOpen size={14} /> Retrieved sources</div>
            <div className="space-y-1">{sources.map((source) => <div key={source}>{source}</div>)}</div>
          </div>
        )}
      </section>
    </div>
  )
}

export default TutorPanel
