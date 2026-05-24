#!/usr/bin/env bash
# step_02_normalize_naming.sh
# STEP 2 — Normalize naming.
#
#   1. Remove the homepage "ENTRY-LEVEL PRODUCTS" section, whose only two
#      cards are ShadowScan and ClearShield. Per the brief these survive
#      only as one mention each in PortfolioPage's "Commercial Products"
#      section (added in Step 6) — not in nav, homepage, or content pages.
#      (Header/Footer already contain no references to them.)
#
#   2. Normalize any user-facing "SentinelOS"/"NexusOS" (and the spaced
#      "Sentinel OS"/"Nexus OS") to "Sentinel"/"Nexus" in site content.
#      The COMPONENT identifiers SentinelOSPage / NexusOSPage are left
#      untouched on purpose — their routes are removed in Step 4 and the
#      page files deleted in Step 8. The (?!Page) guard protects them, so
#      this transform never renames code identifiers or import paths.
#
# Idempotent: safe to run multiple times.
# Ends with: NODE_OPTIONS=--max-old-space-size=512 npm run build
set -euo pipefail

SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$SITE_DIR"
echo "[STEP 2] normalize naming in: $SITE_DIR"

python3 << 'PYEOF'
import re, glob

# ── 1) Remove ShadowScan + ClearShield from the homepage ────────────────
hp = "src/pages/HomePage.tsx"
with open(hp) as f:
    c = f.read()
orig = c
# The section has no nested <section>, so the first </section> after the
# comment marker is its closing tag. Non-greedy + DOTALL removes the block.
c, n = re.subn(
    r"\n[ \t]*\{/\* ENTRY-LEVEL PRODUCTS \*/\}.*?</section>\n",
    "\n",
    c, count=0, flags=re.DOTALL)
if n:
    print(f"  HomePage.tsx: removed ENTRY-LEVEL PRODUCTS section ({n} block)")
else:
    print("  HomePage.tsx: ENTRY-LEVEL PRODUCTS section already absent (idempotent)")
if c != orig:
    with open(hp, "w") as f:
        f.write(c)

# ── 2) Normalize SentinelOS/NexusOS in site content (never identifiers) ──
content_files = sorted(set(
    glob.glob("src/**/*.tsx", recursive=True)
    + glob.glob("src/**/*.ts", recursive=True)
    + ["index.html"]
))
changed = []
for path in content_files:
    with open(path) as f:
        c = f.read()
    o = c
    c = re.sub(r"SentinelOS(?!Page)", "Sentinel", c)  # not SentinelOSPage
    c = re.sub(r"NexusOS(?!Page)",   "Nexus",    c)    # not NexusOSPage
    c = re.sub(r"\bSentinel OS\b",   "Sentinel", c)
    c = re.sub(r"\bNexus OS\b",      "Nexus",    c)
    if c != o:
        with open(path, "w") as f:
            f.write(c)
        changed.append(path)
print("  normalized SentinelOS/NexusOS in: " + (", ".join(changed) if changed
      else "(no content references — nothing to normalize)"))

# ── verification ────────────────────────────────────────────────────────
with open(hp) as f:
    hp_final = f.read()
for token in ("ClearShield", "ShadowScan",
              "shadowscan.coreidentitygroup.com",
              "clearshield.coreidentitygroup.com"):
    assert token not in hp_final, f"ERROR: {token} still present on homepage"

# Any remaining SentinelOS/NexusOS must be the *Page identifiers only.
for path in content_files:
    with open(path) as f:
        c = f.read()
    for m in re.finditer(r"SentinelOS|NexusOS", c):
        tail = c[m.start():m.start() + 14]
        assert tail.startswith(("SentinelOSPage", "NexusOSPage")), \
            f"ERROR: stray naming reference in {path}: {tail!r}"
print("  verified: ClearShield/ShadowScan off homepage; SentinelOS/NexusOS "
      "naming normalized (only *Page identifiers remain, deleted in Step 8)")
PYEOF

echo "[STEP 2] npm run build"
export NODE_OPTIONS="${NODE_OPTIONS:---max-old-space-size=512}"
echo "[STEP 2]   NODE_OPTIONS=$NODE_OPTIONS"
npm run build
echo "[STEP 2] done"
