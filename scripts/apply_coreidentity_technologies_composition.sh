#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

node scripts/fix-coreidentity-technologies-route.mjs
node scripts/normalize_coreidentity_technologies_router_import.mjs

npm run build
