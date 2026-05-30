#!/usr/bin/env python3
"""
decommission_remove_shadowscan_clearshield.py — Idempotent content transform.

Removes the ClearShield and ShadowScan entries from the PRODUCTS array in
src/pages/PortfolioPage.tsx, as part of the ShadowScan/ClearShield product
decommission. SmartNation AI and CoreG PCM are left intact.

Zero hand edits — all changes via scripted transforms. Safe to re-run.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PATH = os.path.join(ROOT, "src", "pages", "PortfolioPage.tsx")
TARGETS = ("ClearShield", "ShadowScan")

# A LAYERS/PRODUCTS entry is a 2-space-indented object literal with only
# 4-space-indented property lines and no nested braces:
#   "  {\n    name: ...,\n    ...,\n  },\n"
BLOCK = re.compile(r"  \{\n(?:    [^\n]*\n)*  \},\n")


def main() -> None:
    with open(PATH) as f:
        text = f.read()

    removed = []

    def drop(m):
        blk = m.group(0)
        for name in TARGETS:
            if f'name: "{name}"' in blk:
                removed.append(name)
                return ""
        return blk

    new = BLOCK.sub(drop, text)

    if not removed:
        if all(f'name: "{n}"' not in new for n in TARGETS):
            print("  SKIP   already removed (PortfolioPage.tsx clean)")
            return
        print("  ERROR  product entries still referenced but not matched", file=sys.stderr)
        sys.exit(1)

    if set(removed) != set(TARGETS):
        print(f"  ERROR  expected to remove {sorted(TARGETS)}, removed {sorted(set(removed))}", file=sys.stderr)
        sys.exit(1)

    leftovers = sorted({t for t in TARGETS if t.lower() in new.lower()})
    if leftovers:
        print(f"  ERROR  residual references remain: {leftovers}", file=sys.stderr)
        sys.exit(1)

    with open(PATH, "w") as f:
        f.write(new)
    print(f"  PATCH  removed {sorted(set(removed))} from PRODUCTS array")


if __name__ == "__main__":
    main()
