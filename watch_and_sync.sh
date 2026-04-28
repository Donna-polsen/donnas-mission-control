#!/bin/bash
# watch_and_sync.sh
# Described in the architecture spec.
# This script monitors the dashboard and workspace for changes, and auto-commits them.

TARGET_DIR="/home/ubuntu/.openclaw/canvas/dashboard"

cd "$TARGET_DIR" || exit 1

echo "Initializing watch and sync loop..."

while true; do
  # Check if there are changes
  if [[ $(git status --porcelain) ]]; then
    echo "Changes detected, syncing..."
    git add .
    git commit -m "chore: auto-sync dashboard state [$(date +'%Y-%m-%dT%H:%M:%S%z')]"
    # git push origin main # Uncomment when remote is configured
  fi
  
  # Sleep for 30 seconds before checking again
  sleep 30
done
