#!/usr/bin/env bash
# studio_add_react_is.sh
# Fix the Sanity Studio CI build failure: react-is fails to resolve inside
# studio/node_modules/@sanity/ui. @sanity/ui needs react-is, but it is not
# present in the studio install. Adding react-is as a direct dependency of
# studio/package.json makes it resolvable.
#
# The deploy-studio.yml workflow runs `npm install` (not `npm ci`) in studio/,
# so the new dependency is picked up without a lockfile rewrite.
#
# Idempotent: safe to run multiple times (no-op once react-is is present).
set -euo pipefail

SITE_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$SITE_DIR"
echo "[studio react-is] target: studio/package.json"

REACT_IS_RANGE="^18.2.0"  # track React 18 (matches react / react-dom in studio)

REACT_IS_RANGE="$REACT_IS_RANGE" python3 << 'PYEOF'
import json, os, collections

path = "studio/package.json"
rng = os.environ["REACT_IS_RANGE"]

with open(path) as f:
    pkg = json.load(f, object_pairs_hook=collections.OrderedDict)

deps = pkg.get("dependencies")
if deps is None:
    deps = collections.OrderedDict()
    pkg["dependencies"] = deps

if "react-is" in deps:
    print(f"  react-is already present ({deps['react-is']}) — no change (idempotent)")
else:
    deps["react-is"] = rng
    # keep dependencies alphabetically ordered for a tidy diff
    pkg["dependencies"] = collections.OrderedDict(sorted(deps.items()))
    with open(path, "w") as f:
        json.dump(pkg, f, indent=2)
        f.write("\n")
    print(f"  added react-is {rng} to studio dependencies")

# safety assertion
with open(path) as f:
    final = json.load(f)
assert "react-is" in final.get("dependencies", {}), "ERROR: react-is not present after transform"
print("  verified: react-is in studio/package.json dependencies")
PYEOF

echo "[studio react-is] done"
