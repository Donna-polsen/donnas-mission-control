#!/bin/bash
# watch_and_sync.sh
# Described in the architecture spec.
# This script monitors the dashboard and workspace for changes, copies latest markdown data for Vercel deployment, and auto-commits them.

TARGET_DIR="/home/ubuntu/.openclaw/canvas/dashboard"
WORKSPACE_DIR="/home/ubuntu/.openclaw/workspace"
CONTENT_DIR="$TARGET_DIR/src/content"

cd "$TARGET_DIR" || exit 1

echo "Initializing watch and sync loop..."

# Ensure content directory exists
mkdir -p "$CONTENT_DIR"

while true; do
  # Sync workspace markdown files into the local content directory for Vercel edge/static deployment
  # using cp (or rsync) so it triggers git changes if modified
  cp "$WORKSPACE_DIR"/*.md "$CONTENT_DIR/" 2>/dev/null
  
  # Check if there are changes
  if [[ $(git status --porcelain) ]]; then
    echo "Changes detected, syncing..."
    git add .
    git commit -m "chore: auto-sync dashboard state [$(date +'%Y-%m-%dT%H:%M:%S%z')]"
    GIT_SSH_COMMAND="ssh -i /home/ubuntu/.ssh/github_donna_ed25519 -o StrictHostKeyChecking=no" git push origin main
  fi
  
  # Sleep for 30 seconds before checking again
  sleep 30
done
