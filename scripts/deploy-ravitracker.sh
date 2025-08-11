#!/usr/bin/env bash
set -euo pipefail

REPO_DIR=/root/ravitracker-mdt
cd "$REPO_DIR"

# Avoid noisy diffs from exec-bit flips
git config --local core.filemode false

# Always sync cleanly to origin/main
git fetch origin main
git reset --hard origin/main
git clean -fdx

# Build & (re)run
if docker image inspect ravitracker-frontend >/dev/null 2>&1; then
  CACHE_FROM="--cache-from=ravitracker-frontend"
else
  CACHE_FROM=""
fi
docker build --pull $CACHE_FROM -t ravitracker-frontend .
docker rm -f ravitracker-frontend 2>/dev/null || true

# Retain Docker cache to speed up subsequent builds.
# Prune images/containers manually if disk space becomes an issue.

docker run -d \
  --name ravitracker-frontend \
  --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  ravitracker-frontend

# Uncomment only if you change /etc/caddy/Caddyfile
# caddy reload --config /etc/caddy/Caddyfile
