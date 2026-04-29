#!/usr/bin/env python3
"""
Idempotent patch: insert "What We Haven't Finished Yet" section into the
quantum vulnerability article in src/data/blogPosts.ts, before "Next Steps".
"""
import sys

TARGET = 'src/data/blogPosts.ts'
GUARD  = "What We Haven't Finished Yet"  # idempotency check

FIND = '<h2>Next Steps</h2>'

INSERT = '''<h2>What We Haven\'t Finished Yet</h2>
<p>
  ML-KEM-768 key encapsulation is live as a software layer — the algorithm is quantum-resistant
  but the underlying key material is protected by classical AWS KMS at rest, pending native PQC
  support from AWS KMS (targeted Q3 2026). ML-DSA-65 signing across all audit and identity
  surfaces is fully hardened. We name this gap because precision is the standard — and because
  closing it on a documented timeline is more defensible than pretending it doesn\'t exist.
</p>

<h2>Next Steps</h2>'''

with open(TARGET, 'r') as f:
    content = f.read()

if GUARD in content:
    print(f'[SKIP] {TARGET} — "What We Haven\'t Finished Yet" section already present.')
    sys.exit(0)

if FIND not in content:
    print(f'[ERROR] {TARGET} — anchor "<h2>Next Steps</h2>" not found in quantum article.')
    sys.exit(1)

# Replace only the first occurrence (inside the quantum vulnerability article)
patched = content.replace(FIND, INSERT, 1)

with open(TARGET, 'w') as f:
    f.write(patched)

print(f'[OK] {TARGET} — ML-KEM interim disclosure section inserted before Next Steps.')
