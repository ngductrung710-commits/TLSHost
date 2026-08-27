#!/usr/bin/env bash
#
# TLSHost — pull, build and reload on the Hostinger VPS.
#
#   ssh root@<vps-ip>
#   cd /var/www/tlshost && ./deploy/deploy.sh
#
# The build runs before the reload, so a broken build leaves the running
# version untouched.

set -euo pipefail

APP_DIR="${APP_DIR:-/var/www/tlshost}"
BRANCH="${BRANCH:-main}"
APP_NAME="tlshost"

cd "$APP_DIR"

echo "==> Fetching $BRANCH"
git fetch --prune origin
git checkout "$BRANCH"
git reset --hard "origin/$BRANCH"

echo "==> Installing dependencies"
# npm ci needs the lockfile to match package.json exactly; it also wipes
# node_modules, which keeps removed packages from lingering.
npm ci --omit=dev --ignore-scripts=false

echo "==> Building"
# A failure here exits before PM2 is touched, so the live site keeps serving
# the previous build.
npm run build

echo "==> Reloading PM2"
if pm2 describe "$APP_NAME" > /dev/null 2>&1; then
  pm2 reload ecosystem.config.cjs --update-env
else
  pm2 start ecosystem.config.cjs
fi

pm2 save

echo "==> Waiting for the app to answer"
for i in $(seq 1 20); do
  if curl -fsS -o /dev/null "http://127.0.0.1:3000/vi"; then
    echo "==> Live"
    exit 0
  fi
  sleep 1
done

echo "!! The app did not answer on port 3000 within 20s" >&2
pm2 logs "$APP_NAME" --lines 40 --nostream >&2
exit 1
