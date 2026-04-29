#!/usr/bin/env python3
"""
Idempotent patch: add Cryptographic Posture section to QuantumHardeningPage.tsx
after the "What was built and deployed" grid, before "Why Post-Quantum..." section.
"""
import sys

TARGET = 'src/pages/QuantumHardeningPage.tsx'
GUARD  = 'Cryptographic Posture'  # idempotency check

FIND = '''  <div className="space-y-4 cidg-fadein cidg-fadein-delay-2">
 <SectionTitle>Why Post-Quantum Cryptography matters now</SectionTitle>
 </div>'''

INSERT = '''  {/* CRYPTOGRAPHIC POSTURE */}
  <div className="space-y-6 cidg-fadein cidg-fadein-delay-2">
    <SectionTitle>Cryptographic Posture</SectionTitle>
    <p className="text-white/70 max-w-3xl leading-relaxed">
      Precision matters. We distinguish between surfaces that are fully hardened under HSM-backed
      key protection and those operating under a software interim layer pending AWS KMS native PQC
      support. This is not a weakness disclosure — it is the standard of transparency we hold
      ourselves to and the standard we deliver for clients.
    </p>
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left py-3 pr-6 text-white/50 font-medium tracking-wide">Surface</th>
            <th className="text-left py-3 pr-6 text-white/50 font-medium tracking-wide">Algorithm</th>
            <th className="text-left py-3 text-white/50 font-medium tracking-wide">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5">
          {[
            ['Agent identity signing',    'ML-DSA-65 (FIPS 204)',    'Live — HSM-backed'],
            ['Governance audit signing',  'ML-DSA-65 (FIPS 204)',    'Live — HSM-backed'],
            ['CA trust chain',            'ML-DSA-65 (FIPS 204)',    'Live — HSM-backed'],
            ['Key encapsulation',         'ML-KEM-768 (FIPS 203)',   'Live — software layer, HSM pending AWS KMS PQC support'],
            ['Entropy source',            'ANU QRNG + OS CSPRNG',   'Live'],
          ].map(function([surface, algo, status]) {
            const isInterim = (status as string).includes('software layer');
            return (
              <tr key={surface as string}>
                <td className="py-3 pr-6 text-white/80">{surface}</td>
                <td className="py-3 pr-6 font-mono text-teal-300 text-xs">{algo}</td>
                <td className={`py-3 text-xs font-medium ${isInterim ? 'text-amber-400/80' : 'text-teal-400'}`}>{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>

  <div className="space-y-4 cidg-fadein cidg-fadein-delay-2">
 <SectionTitle>Why Post-Quantum Cryptography matters now</SectionTitle>
 </div>'''

with open(TARGET, 'r') as f:
    content = f.read()

if GUARD in content:
    print(f'[SKIP] {TARGET} — Cryptographic Posture section already present.')
    sys.exit(0)

if FIND not in content:
    print(f'[ERROR] {TARGET} — anchor text not found. File may have changed.')
    print('Expected anchor:')
    print(repr(FIND))
    sys.exit(1)

patched = content.replace(FIND, INSERT, 1)

with open(TARGET, 'w') as f:
    f.write(patched)

print(f'[OK] {TARGET} — Cryptographic Posture section inserted.')
