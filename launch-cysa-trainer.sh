#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
host="127.0.0.1"
web_port="${CYSA_WEB_PORT:-5173}"
api_port="${API_PORT:-8787}"
ollama_url="${OLLAMA_URL:-http://127.0.0.1:11434}"
ollama_model="${OLLAMA_MODEL:-llama3.2:3b}"
web_url="http://${host}:${web_port}/"
runtime_root="${XDG_RUNTIME_DIR:-/tmp}"

notify() {
  notify-send "CySA+ Trainer" "$1" 2>/dev/null || true
}

is_ready() {
  curl --silent --fail --max-time 2 "$1" >/dev/null 2>&1
}

wait_for() {
  local url="$1"
  for _ in {1..60}; do
    if is_ready "$url"; then return 0; fi
    sleep 0.25
  done
  return 1
}

start_group() {
  local log_file="$1"
  shift
  setsid "$@" >"$log_file" 2>&1 &
  echo "$!"
}

stop_group() {
  local pid="$1"
  if [[ -n "$pid" ]] && kill -0 "$pid" 2>/dev/null; then
    kill -- "-$pid" 2>/dev/null || kill "$pid" 2>/dev/null || true
  fi
}

watch_session() {
  local session_dir="$1"
  local session_token="$2"
  local api_pid="$3"
  local web_pid="$4"
  local ollama_pid="$5"
  local status_url="http://${host}:${api_port}/api/session/status?token=${session_token}"

  for _ in {1..60}; do
    if curl --silent --fail --max-time 2 "$status_url" | grep -q '"active":true'; then
      break
    fi
    sleep 1
  done

  while true; do
    if curl --silent --fail --max-time 2 "$status_url" | grep -q '"active":true'; then
      sleep 5
      continue
    fi

    sleep 8
    if ! curl --silent --fail --max-time 2 "$status_url" | grep -q '"active":true'; then
      stop_group "$api_pid"
      stop_group "$web_pid"
      stop_group "$ollama_pid"
      rm -rf -- "$session_dir"
      exit 0
    fi
  done
}

if [[ "${1:-}" == "--watch" ]]; then
  watch_session "$2" "$3" "$4" "$5" "$6"
  exit 0
fi

cd "$project_dir"

if ! command -v npm >/dev/null 2>&1 || ! command -v curl >/dev/null 2>&1; then
  notify "npm and curl are required to launch the trainer."
  exit 1
fi

session_dir="$(mktemp -d "${runtime_root%/}/cysa-plus-trainer.XXXXXX")"
session_token="$(date +%s)-$$-${RANDOM}"
api_pid=""
web_pid=""
ollama_pid=""

if ! is_ready "${ollama_url}/api/tags"; then
  if ! command -v ollama >/dev/null 2>&1; then
    notify "Ollama is not installed or is not on PATH."
    rm -rf -- "$session_dir"
    exit 1
  fi
  ollama_pid="$(start_group "${session_dir}/ollama.log" ollama serve)"
  if ! wait_for "${ollama_url}/api/tags"; then
    notify "Ollama did not become ready. Check ${session_dir}/ollama.log."
    stop_group "$ollama_pid"
    rm -rf -- "$session_dir"
    exit 1
  fi
fi

if ! ollama list 2>/dev/null | awk 'NR > 1 { print $1 }' | grep -Fxq "$ollama_model"; then
  if ! ollama pull "$ollama_model" >"${session_dir}/ollama-pull.log" 2>&1; then
    notify "Could not pull ${ollama_model}. Check ${session_dir}/ollama-pull.log."
    stop_group "$ollama_pid"
    rm -rf -- "$session_dir"
    exit 1
  fi
fi

if ! is_ready "http://${host}:${api_port}/api/health"; then
  api_pid="$(start_group "${session_dir}/api.log" env API_HOST="$host" API_PORT="$api_port" OLLAMA_URL="$ollama_url" OLLAMA_MODEL="$ollama_model" npm run api)"
  if ! wait_for "http://${host}:${api_port}/api/health"; then
    notify "The tutor API did not become ready. Check ${session_dir}/api.log."
    stop_group "$api_pid"
    stop_group "$ollama_pid"
    rm -rf -- "$session_dir"
    exit 1
  fi
fi

if ! is_ready "$web_url"; then
  web_pid="$(start_group "${session_dir}/web.log" npm run dev -- --host "$host" --port "$web_port")"
  if ! wait_for "$web_url"; then
    notify "The trainer frontend did not become ready. Check ${session_dir}/web.log."
    stop_group "$web_pid"
    stop_group "$api_pid"
    stop_group "$ollama_pid"
    rm -rf -- "$session_dir"
    exit 1
  fi
fi

session_url="${web_url}?session=${session_token}"
if ! command -v xdg-open >/dev/null 2>&1; then
  notify "Trainer is ready at ${session_url}, but xdg-open is unavailable."
else
  xdg-open "$session_url" >/dev/null 2>&1 &
fi

nohup "$0" --watch "$session_dir" "$session_token" "$api_pid" "$web_pid" "$ollama_pid" \
  >"${session_dir}/watcher.log" 2>&1 &
disown || true

notify "Trainer ready. Closing its browser tab will stop processes started by this launcher."
