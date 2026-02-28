#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

cd "$(git rev-parse --show-toplevel)"

node scripts/deploy_governance_verticals.mjs

npm run build
