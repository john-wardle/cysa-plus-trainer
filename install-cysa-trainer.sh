#!/usr/bin/env bash
set -euo pipefail

project_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"

cd "$project_dir"

if ! command -v npm >/dev/null 2>&1 || ! command -v ollama >/dev/null 2>&1; then
  echo "npm and ollama are required. Install them before running this setup." >&2
  exit 1
fi

if command -v systemctl >/dev/null 2>&1 && systemctl list-unit-files ollama.service >/dev/null 2>&1; then
  if systemctl is-active --quiet ollama || systemctl is-enabled --quiet ollama; then
    echo "Disabling the system Ollama service so the trainer launcher owns its Ollama process..."
    sudo systemctl disable --now ollama.service
  fi
fi

chmod +x "$project_dir/launch-cysa-trainer.sh"
npm ci

applications_dir="${XDG_DATA_HOME:-$HOME/.local/share}/applications"
desktop_file="$applications_dir/cysa-plus-trainer.desktop"
mkdir -p "$applications_dir"
sed "s|@PROJECT_DIR@|$project_dir|g" "$project_dir/cysa-plus-trainer.desktop.in" > "$desktop_file"
if command -v update-desktop-database >/dev/null 2>&1; then
  update-desktop-database "$applications_dir" >/dev/null 2>&1 || true
fi

echo
echo "Setup complete. Start the trainer with:"
echo "  $project_dir/launch-cysa-trainer.sh"
echo "The CySA+ Trainer app entry was installed in:"
echo "  $desktop_file"
