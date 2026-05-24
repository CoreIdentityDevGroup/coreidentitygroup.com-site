#!/usr/bin/env bash
# security_00_credential_to_env.sh
# STEP 0 — remove the hardcoded live-metrics credential from source and read it
# from a Cloudflare Worker secret binding (env.API_PASS / env.API_EMAIL).
#
# NOTE: This is a Cloudflare *Module* Worker (export default { fetch(request, env) }).
# Module Workers do NOT expose process.env — secrets are read from the `env`
# argument passed to fetch(). Using process.env here would throw "process is not
# defined" at runtime (no nodejs_compat flag), so we thread `env` through getToken().
#
# Idempotent: safe to run multiple times.
# Ends with: npm run build
set -euo pipefail

SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$SITE_DIR"
echo "[STEP 0] credential -> env in: $SITE_DIR"

python3 << 'PYEOF'
path = "workers/live-metrics.js"
with open(path) as f:
    c = f.read()

orig = c

# 1) Remove the hardcoded credential constants (keep API_BASE).
old_consts = (
    "const API_EMAIL = 'tmorgan@coreidentitygroup.com';\n"
    "const API_PASS = 'CoreIdentity2026!'; // Store in Worker env var in production\n"
)
new_consts = (
    "// Credentials are read from Cloudflare Worker secrets at runtime:\n"
    "//   wrangler secret put API_PASS        (required)\n"
    "//   wrangler secret put API_EMAIL       (optional; defaults below)\n"
)
if old_consts in c:
    c = c.replace(old_consts, new_consts)

# 2) getToken() -> getToken(env), reading credentials from env with a guard.
old_fn = (
    "async function getToken() {\n"
    "  const r = await fetch(`${API_BASE}/api/auth/login`, {\n"
    "    method: 'POST',\n"
    "    headers: { 'Content-Type': 'application/json' },\n"
    "    body: JSON.stringify({ email: API_EMAIL, password: API_PASS }),\n"
    "  });\n"
    "  const d = await r.json();\n"
    "  return d.data?.token;\n"
    "}"
)
new_fn = (
    "async function getToken(env) {\n"
    "  const email = env.API_EMAIL || 'tmorgan@coreidentitygroup.com';\n"
    "  const password = env.API_PASS;\n"
    "  if (!password) {\n"
    "    throw new Error('live-metrics: API_PASS not configured (run `wrangler secret put API_PASS`)');\n"
    "  }\n"
    "  const r = await fetch(`${API_BASE}/api/auth/login`, {\n"
    "    method: 'POST',\n"
    "    headers: { 'Content-Type': 'application/json' },\n"
    "    body: JSON.stringify({ email, password }),\n"
    "  });\n"
    "  const d = await r.json();\n"
    "  return d.data?.token;\n"
    "}"
)
if old_fn in c:
    c = c.replace(old_fn, new_fn)

# 3) Call site: getToken() -> getToken(env).
c = c.replace("const token = await getToken();", "const token = await getToken(env);")

if c != orig:
    with open(path, "w") as f:
        f.write(c)
    print("  workers/live-metrics.js: migrated to env-based credentials")
else:
    if "CoreIdentity2026!" in c:
        raise SystemExit("  ERROR: expected markers not found and credential still present")
    print("  already migrated — no changes")

# Safety assertion: the plaintext credential must be gone.
with open(path) as f:
    final = f.read()
assert "CoreIdentity2026!" not in final, "ERROR: hardcoded credential still present after transform"
assert "getToken(env)" in final, "ERROR: getToken(env) call site not wired"
print("  verified: no hardcoded credential; env threaded through")
PYEOF

echo "[STEP 0] npm run build"
# Cap V8 heap to avoid OOM on small instances (912MB RAM + 2GB swap).
# Respect an externally-provided NODE_OPTIONS if the caller set one.
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=512}"
echo "[STEP 0]   NODE_OPTIONS=$NODE_OPTIONS"
npm run build
echo "[STEP 0] done"
