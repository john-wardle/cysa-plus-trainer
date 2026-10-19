# Self-hosted LLM tutor

This branch adds a local tutor to the existing trainer. The quiz and PBQ scoring paths remain deterministic. The tutor retrieves relevant chunks from `src/data/` and sends those chunks to Ollama for an explanation.

## Run it locally

Install Ollama and pull a model that fits your hardware. Then, from the repository root:

```bash
ollama serve
```

In a second terminal, set the model name if you do not want the default:

```bash
export OLLAMA_MODEL=llama3.2:3b
ollama pull "$OLLAMA_MODEL"
```

Start the API in a third terminal:

```bash
npm run api
```

Start the Vite frontend in another terminal:

```bash
npm run dev
```

Open the local URL printed by Vite, select `AI Tutor`, and ask a question.

The AI Tutor model selector is populated from the models installed in Ollama. Select a different model before sending the next prompt, or install one from a terminal with `ollama pull <model-name>` and use the in-app refresh control.

For one-time setup, run the installer. It disables the systemd Ollama service
so the trainer launcher can own Ollama and stop it when the trainer session
closes. It also installs the locked frontend dependencies:

```bash
./install-cysa-trainer.sh
```

For one-command startup, run the launcher:

```bash
./launch-cysa-trainer.sh
```

The launcher starts only services that are not already running, opens the trainer with a session heartbeat, and watches for the tab to close. It then stops the Ollama, tutor API, and Vite processes that it started itself. If a systemd-managed Ollama service is active, the launcher stops and explains the required one-time setup instead of reusing a process it cannot clean up.

At startup, the launcher checks the local hardware. It enables Ollama's
Vulkan integrated-GPU backend for Intel graphics, leaves Ollama's native
backend selection automatic for NVIDIA and AMD graphics, and falls back to
CPU when no supported GPU is detected. If Ollama is already running as a
systemd service, the launcher does not restart or reconfigure that service;
the same backend settings must be persisted in the service configuration
during installation on that machine.

## Optional hosted OpenCode mode

The trainer defaults to Local Ollama. For faster or higher-capability hosted
inference, configure OpenCode before launching the trainer:

```bash
export OPENCODE_API_KEY='your-key'
export OPENCODE_MODEL='nemotron-3.5-super-vl-free'
./launch-cysa-trainer.sh
```

For desktop-launcher use, store the settings in
`~/.config/cysa-plus-trainer/environment` instead:

```bash
mkdir -p ~/.config/cysa-plus-trainer
cat > ~/.config/cysa-plus-trainer/environment <<'EOF'
OPENCODE_API_KEY='your-go-api-key'
OPENCODE_API_URL='https://opencode.ai/inference/go/openai/v1/chat/completions'
OPENCODE_MODELS_URL='https://opencode.ai/inference/go/v1/models'
OPENCODE_MODEL='deepseek-v4.1-flash'
EOF
chmod 600 ~/.config/cysa-plus-trainer/environment
```

The launcher loads this file automatically, cleans up stale Cysa Trainer API
and Vite processes before starting, and stops the processes it owns when the
trainer tab closes.

The server uses OpenCode's OpenAI-compatible inference endpoint by default:
`https://opencode.ai/inference/openai/v1/chat/completions`. At startup, the
server fetches the models available to the service account from
`https://opencode.ai/inference/v1/models` and fills the hosted-model selector
automatically. Override that URL with `OPENCODE_MODELS_URL` if your account or
deployment uses another endpoint. If discovery fails, the server falls back to
`OPENCODE_MODELS`, or `OPENCODE_MODEL` when neither is set.

Hosted mode is opt-in in the trainer UI and is visibly marked remote. The API
key stays on the server and is never sent to the browser. Hosted mode sends the
question, conversation, and retrieved trainer context to OpenCode, so do not
include private or sensitive data. Local Ollama remains the default and keeps
those requests on the machine.

The API listens on `127.0.0.1:8787`. Vite proxies `/api` requests to it. Confirm it is healthy with:

```bash
curl http://127.0.0.1:8787/api/health
```

## Configuration

Environment variables:

- `OLLAMA_URL` — defaults to `http://127.0.0.1:11434`
- `OLLAMA_MODEL` — defaults to `llama3.2:3b`
- `API_HOST` — defaults to `127.0.0.1`
- `API_PORT` — defaults to `8787`

The current retriever is intentionally dependency-free lexical retrieval. It indexes the TypeScript training data at API startup, ranks chunks by token overlap and certification match, and passes the best six chunks to the model. This gives us a working RAG seam without changing the existing question bank.

The next upgrade should replace lexical retrieval with Ollama embeddings plus a persistent vector store. The API contract can remain the same.

## Safety boundaries

- The LLM does not grade answers or change the question bank.
- The tutor is instructed to use retrieved repository context and disclose when context is insufficient.
- No credentials are stored by this feature.
- Keep the API bound to localhost unless authentication and network controls are added.
