# scripts/deploy-ravitracker.sh
#!/usr/bin/env bash
set -euo pipefail

cd /root/ravitracker-mdt           # code already cloned on the VPS
git pull origin main               # grab newest commit

docker build -t ravitracker-frontend .
docker rm -f ravitracker-frontend 2>/dev/null || true

docker run -d \
  --name ravitracker-frontend \
  --restart unless-stopped \
  -p 127.0.0.1:3000:3000 \
  ravitracker-frontend

# Uncomment only if you change /etc/caddy/Caddyfile
# caddy reload --config /etc/caddy/Caddyfile
