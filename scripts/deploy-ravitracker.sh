# scripts/deploy-ravitracker.sh
#!/usr/bin/env bash
set -euo pipefail

REPO_DIR=/root/ravitracker-mdt
cd "$REPO_DIR"

# Make Git ignore executable-bit noise (common on VPS)
git config --local core.filemode false

# Always sync cleanly to origin/main (won’t fail on local edits)
git fetch origin main
git reset --hard origin/main
git clean -fdx

# Build & (re)run
docker build --pull -t ravitracker-frontend .
docker rm -f ravitracker-frontend 2>/dev/null || true

# Free space (safe defaults)
docker container prune -f
docker image prune -f
# If disk is tight, consider:
# docker system prune -af --volumes

docker run -d \
  --name ravitracker-frontend \
  --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  ravitracker-frontend

# Uncomment only if you change /etc/caddy/Caddyfile
# caddy reload --config /etc/caddy/Caddyfile
