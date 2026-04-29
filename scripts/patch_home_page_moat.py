#!/usr/bin/env python3
"""
Idempotent patch: append integrated-stack moat sentence to the quantum
boundary statement block in HomePage.tsx.
"""
import sys

TARGET = 'src/pages/HomePage.tsx'
GUARD  = 'The moat is not any single algorithm'  # idempotency check

FIND = (
    '          diagnostic and remediation tooling required to govern their own agentic ecosystems through the\n'
    '          post-quantum transition.\n'
    '        </p>'
)

REPLACE = (
    '          diagnostic and remediation tooling required to govern their own agentic ecosystems through the\n'
    '          post-quantum transition. The moat is not any single algorithm — it is the only\n'
    '          platform where post-quantum cryptography, sovereign agent identity, inline policy\n'
    '          enforcement, and immutable audit trails operate as a single integrated enforcement chain.\n'
    '        </p>'
)

with open(TARGET, 'r') as f:
    content = f.read()

if GUARD in content:
    print(f'[SKIP] {TARGET} — moat sentence already present.')
    sys.exit(0)

if FIND not in content:
    print(f'[ERROR] {TARGET} — anchor text not found. File may have changed.')
    print('Expected anchor:')
    print(repr(FIND))
    sys.exit(1)

patched = content.replace(FIND, REPLACE, 1)

with open(TARGET, 'w') as f:
    f.write(patched)

print(f'[OK] {TARGET} — moat sentence appended to quantum boundary statement.')
