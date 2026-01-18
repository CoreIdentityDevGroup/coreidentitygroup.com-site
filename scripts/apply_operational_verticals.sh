#!/usr/bin/env bash
set -euo pipefail

node scripts/append_operational_verticals.mjs

# required gate: every script ends with build
npm run build
