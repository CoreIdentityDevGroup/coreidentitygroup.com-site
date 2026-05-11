#!/usr/bin/env python3
"""
Idempotent transforms for Sanity CMS integration — package.json and .gitignore.
Safe to run multiple times.
"""

import json
from pathlib import Path

ROOT = Path.home() / 'coreidentity/integrations/coreholdingcorp-site-v2'
results = {}


def apply(path, old, new, label, guard=None):
    content = path.read_text(encoding='utf-8')
    sentinel = guard if guard else new
    if sentinel in content:
        print(f'  SKIP {label}')
        return False
    if old not in content:
        print(f'  FAIL {label}: anchor not found')
        return False
    content = content.replace(old, new, 1)
    path.write_text(content, encoding='utf-8')
    print(f'  DONE {label}')
    results.setdefault(path.name, []).append(label)
    return True


# ── package.json ─────────────────────────────────────────────────────
print('\n=== package.json ===')
p = ROOT / 'package.json'

# Add @portabletext/react and @sanity/client to dependencies
# Insert alphabetically after @tailwindcss/typography, before @tanstack
apply(p,
    label='add @portabletext/react dependency',
    guard='"@portabletext/react"',
    old='"@tailwindcss/typography": "^0.5.19",',
    new=(
        '"@portabletext/react": "^3.0.0",\n'
        '    "@sanity/client": "^6.0.0",\n'
        '    "@tailwindcss/typography": "^0.5.19",'
    ),
)


# ── .gitignore ───────────────────────────────────────────────────────
print('\n=== .gitignore ===')
p = ROOT / '.gitignore'

apply(p,
    label='add studio/node_modules to .gitignore',
    guard='studio/node_modules',
    old='node_modules',
    new='node_modules\nstudio/node_modules',
)

apply(p,
    label='add studio/.sanity to .gitignore',
    guard='studio/.sanity',
    old='dist',
    new='dist\nstudio/.sanity',
)


# ── Summary ───────────────────────────────────────────────────────────
print('\n=== Summary ===')
if results:
    for fname, labels in results.items():
        print(f'  {fname}: {len(labels)} change(s)')
        for l in labels:
            print(f'    - {l}')
else:
    print('  No changes applied (all already done).')
