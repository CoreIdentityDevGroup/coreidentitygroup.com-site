#!/usr/bin/env python3
"""
deploy_quantum_boundary_content.py
Idempotent content transforms for quantum boundary positioning across four pages.
"""

import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).parent.parent
SRC  = ROOT / "src"

# ─────────────────────────────────────────────────────────────────────────────
# 1. HomePage.tsx — quantum boundary statement below hero headline
# ─────────────────────────────────────────────────────────────────────────────

QUANTUM_BOUNDARY_SENTINEL = "quantum boundary"  # guard string for idempotency

QUANTUM_BOUNDARY_BLOCK = '''\n
      {/* QUANTUM BOUNDARY STATEMENT */}
      <section className="mt-10 max-w-3xl">
        <p className="text-base leading-relaxed text-white/55 border-l-2 border-teal-500/40 pl-5 italic">
          CoreIdentity is the only governance infrastructure platform that operates at the quantum boundary
          — hardening the enforcement stack against quantum-era threats while providing enterprises the
          diagnostic and remediation tooling required to govern their own agentic ecosystems through the
          post-quantum transition.
        </p>
      </section>'''

# Insert after the hero CTA buttons closing tag (</div> after the two Link buttons)
HOME_INSERT_ANCHOR = '      </section>\n\n      {/* VISUAL */}'

HOME_REPLACEMENT = f'      </section>{QUANTUM_BOUNDARY_BLOCK}\n\n      {{/* VISUAL */}}'

def patch_home():
    path = SRC / "pages" / "HomePage.tsx"
    text = path.read_text()
    if QUANTUM_BOUNDARY_SENTINEL in text:
        print("[home] quantum boundary statement already present — skip")
        return
    if HOME_INSERT_ANCHOR not in text:
        print("[home] ERROR: anchor not found — skipping", file=sys.stderr)
        return
    patched = text.replace(HOME_INSERT_ANCHOR, HOME_REPLACEMENT, 1)
    path.write_text(patched)
    print("[home] quantum boundary statement inserted")


# ─────────────────────────────────────────────────────────────────────────────
# 2. QuantumHardeningPage.tsx — reflect deployed PQ-CA + QRNG
# ─────────────────────────────────────────────────────────────────────────────

QUANTUM_DEPLOYED_SENTINEL = "PQ-CA: ML-DSA-65"

QUANTUM_DEPLOYED_BLOCK = '''\n
 <div className="space-y-4 cidg-fadein cidg-fadein-delay-2">
 <SectionTitle>What was built and deployed</SectionTitle>
 </div>

 <div className="grid gap-5 md:grid-cols-2 cidg-fadein cidg-fadein-delay-3">
 <Card accent="teal">
 <div className="font-semibold text-white mb-2">PQ-CA: ML-DSA-65 (FIPS 204) Certificate Authority</div>
 <p className="text-sm text-white/60 leading-relaxed">
 A two-tier post-quantum Certificate Authority is embedded directly in the Agent Identity Systems
 API. The Root CA is cold-stored in AWS Secrets Manager and signs only the Issuing CA certificate
 — its private key is immediately zeroed after bootstrap. The Issuing CA is online, issues and
 verifies ML-DSA-65 agent identity certificates, and operates under a FIPS 204 compliant signing
 stack. All four CA endpoints are live: <span className="font-mono text-teal-300 text-xs">GET /ca/crl</span>,{" "}
 <span className="font-mono text-teal-300 text-xs">POST /ca/issue</span>,{" "}
 <span className="font-mono text-teal-300 text-xs">POST /ca/verify</span>, and{" "}
 <span className="font-mono text-teal-300 text-xs">POST /ca/revoke</span>.
 Revocation is structurally blocked from automation — the{" "}
 <span className="font-mono text-teal-300 text-xs">X-Manual-Override: true</span> header is
 required, making automated revocation architecturally impossible.
 </p>
 </Card>
 <Card accent="teal">
 <div className="font-semibold text-white mb-2">QRNG Entropy Pool — Quantum Photon Vacuum Fluctuation</div>
 <p className="text-sm text-white/60 leading-relaxed">
 Every agent identity credential is anchored to quantum entropy. The primary entropy source is the
 ANU Quantum Random Number Generator — a photon vacuum fluctuation measurement apparatus — accessed
 via the ANU QRNG API. On every refresh cycle, 1,024 quantum-sourced hex values are fetched,
 XOR-mixed with OS CSPRNG output, and loaded into a 16 KB circular entropy pool. If the ANU API
 is unavailable, the system degrades gracefully to OS CSPRNG fallback (DEGRADED status) without
 halting credential issuance. The pool refreshes every 30 seconds in production. QUANTUM status is
 reported only when photon-sourced entropy is actively contributing to the pool.
 </p>
 </Card>
 </div>
'''

QUANTUM_INSERT_ANCHOR = ' <div className="space-y-4 cidg-fadein cidg-fadein-delay-2">\n <SectionTitle>Why Post-Quantum Cryptography matters now</SectionTitle>'

QUANTUM_REPLACEMENT = QUANTUM_DEPLOYED_BLOCK + '\n ' + ' <div className="space-y-4 cidg-fadein cidg-fadein-delay-2">\n <SectionTitle>Why Post-Quantum Cryptography matters now</SectionTitle>'

def patch_quantum():
    path = SRC / "pages" / "QuantumHardeningPage.tsx"
    text = path.read_text()
    if QUANTUM_DEPLOYED_SENTINEL in text:
        print("[quantum] deployed block already present — skip")
        return
    if QUANTUM_INSERT_ANCHOR not in text:
        print("[quantum] ERROR: anchor not found — skipping", file=sys.stderr)
        return
    patched = text.replace(QUANTUM_INSERT_ANCHOR, QUANTUM_REPLACEMENT, 1)
    path.write_text(patched)
    print("[quantum] PQ-CA + QRNG deployed block inserted")


# ─────────────────────────────────────────────────────────────────────────────
# 3. AgentIdentitySystemsPage.tsx — sovereign PQ-CA trust authority section
# ─────────────────────────────────────────────────────────────────────────────

AIS_TRUST_SENTINEL = "Sovereign PQ-CA Trust Authority"

AIS_TRUST_BLOCK = '''
      <div
        className="rounded-2xl p-6 cidg-fadein cidg-fadein-delay-2"
        style={{border:'1px solid rgba(20,184,166,0.3)', background:'rgba(20,184,166,0.05)'}}
      >
        <div className="text-xs font-medium tracking-widest text-teal-400 uppercase mb-3">
          Sovereign PQ-CA Trust Authority
        </div>
        <div className="font-semibold text-white mb-3">
          AIS is no longer just an identity registry — it is a sovereign post-quantum Certificate Authority.
        </div>
        <p className="text-sm text-white/70 leading-relaxed mb-5">
          Agent credentials issued by AIS are ML-DSA-65 signed, FIPS 204 compliant, and anchored to quantum
          entropy sourced from photon vacuum fluctuation measurements. The AIS PQ-CA operates a two-tier
          trust hierarchy: a Root CA cold-stored in AWS Secrets Manager signs the Issuing CA certificate,
          then its key is immediately zeroed. The online Issuing CA signs every agent identity credential.
          No classical cryptographic signature algorithm is in the credential chain.
        </p>
        <div className="grid grid-cols-2 gap-3 mb-5">
          {[
            {label:'Algorithm', value:'ML-DSA-65 (FIPS 204)'},
            {label:'Entropy source', value:'ANU QRNG — photon vacuum fluctuation'},
            {label:'Root CA storage', value:'AWS Secrets Manager — key zeroed after use'},
            {label:'Revocation guard', value:'X-Manual-Override header required'},
          ].map(function(item) {
            return (
              <div key={item.label} className="rounded-xl p-3 border border-teal-500/15" style={{background:'rgba(20,184,166,0.04)'}}>
                <div className="text-xs text-teal-400 font-medium mb-1">{item.label}</div>
                <div className="text-xs text-white/70 font-mono">{item.value}</div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-wrap gap-2">
          {['GET /ca/crl','POST /ca/issue','POST /ca/verify','POST /ca/revoke'].map(function(ep) {
            return (
              <span key={ep} className="text-xs font-mono px-2 py-1 rounded border border-teal-500/30 text-teal-300" style={{background:'rgba(20,184,166,0.05)'}}>
                {ep}
              </span>
            );
          })}
        </div>
      </div>

'''

# Insert before the identity infrastructure cards grid
AIS_INSERT_ANCHOR = '      <div className="space-y-4 cidg-fadein cidg-fadein-delay-3">\n        <SectionTitle>Identity infrastructure for the agentic era</SectionTitle>'

AIS_REPLACEMENT = AIS_TRUST_BLOCK + '      <div className="space-y-4 cidg-fadein cidg-fadein-delay-3">\n        <SectionTitle>Identity infrastructure for the agentic era</SectionTitle>'

def patch_ais():
    path = SRC / "pages" / "AgentIdentitySystemsPage.tsx"
    text = path.read_text()
    if AIS_TRUST_SENTINEL in text:
        print("[ais] trust authority section already present — skip")
        return
    if AIS_INSERT_ANCHOR not in text:
        print("[ais] ERROR: anchor not found — skipping", file=sys.stderr)
        return
    patched = text.replace(AIS_INSERT_ANCHOR, AIS_REPLACEMENT, 1)
    path.write_text(patched)
    print("[ais] sovereign PQ-CA trust authority section inserted")


# ─────────────────────────────────────────────────────────────────────────────
# 4. FAQPage.tsx — replace existing quantum FAQ + add 3 new PQ-CA entries
# ─────────────────────────────────────────────────────────────────────────────

FAQ_SENTINEL = "What is the PQ-CA?"

# Replace the existing shallow quantum FAQ entry
OLD_QUANTUM_FAQ = '''        <FAQCard q="What is quantum hardening and why does it matter?">
          <p>
            CoreIdentity is the first AI governance platform to complete
            post-quantum cryptographic hardening across its full enforcement
            stack — SAL Kernel, Sentinel OS, AIS, and Nexus OS. This means
            every cryptographic surface has been migrated to FIPS 203, 204,
            and 205 post-quantum algorithms. Adversaries are collecting
            encrypted data today to decrypt once quantum computers become
            capable. Governance audit trails and agent identity credentials
            require the same protection as any other sensitive institutional
            infrastructure.
          </p>
        </FAQCard>'''

NEW_QUANTUM_FAQS = '''        <FAQCard q="What is quantum hardening and why does it matter?">
          <div className="space-y-3">
            <p>
              CoreIdentity is the first AI governance platform to complete post-quantum cryptographic (PQC)
              hardening across its full enforcement stack — SAL Kernel, Sentinel OS, Agent Identity Systems,
              and Nexus OS. Every cryptographic surface has been migrated to NIST-finalized post-quantum
              algorithms (FIPS 203, 204, and 205). This matters now for two reasons:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="text-white/80 font-medium">Harvest Now, Decrypt Later (HNDL).</span>{" "}
                Adversaries are collecting encrypted data today with the intent to decrypt it once
                cryptographically relevant quantum computers become available. Governance audit trails
                and agent identity credentials signed with classical algorithms are already at risk.
              </li>
              <li>
                <span className="text-white/80 font-medium">NIST finalized in August 2024.</span>{" "}
                FIPS 203 (ML-KEM), FIPS 204 (ML-DSA), and FIPS 205 (SLH-DSA) are the official
                post-quantum standards. Federal agencies and their contractors face migration deadlines.
                Enterprise governance infrastructure must meet the same bar.
              </li>
            </ul>
          </div>
        </FAQCard>

        <FAQCard q="What is the PQ-CA?">
          <p>
            The PQ-CA (Post-Quantum Certificate Authority) is a two-tier cryptographic trust authority
            embedded in Agent Identity Systems. It issues and verifies ML-DSA-65 signed agent identity
            certificates. The Root CA is cold-stored in AWS Secrets Manager — its private key signs only
            the Issuing CA certificate, after which it is immediately zeroed and never loaded into memory
            again. The Issuing CA is online, signs every agent credential, and is the trust anchor for
            the entire AIS identity chain. Four CA endpoints are live: GET /ca/crl, POST /ca/issue,
            POST /ca/verify, and POST /ca/revoke. The /ca/revoke endpoint requires an{" "}
            <span className="font-mono text-white/80">X-Manual-Override: true</span> header, making automated
            revocation architecturally impossible.
          </p>
        </FAQCard>

        <FAQCard q="What algorithm does the PQ-CA use?">
          <div className="space-y-3">
            <p>
              ML-DSA-65, defined in NIST FIPS 204 (finalized August 2024). ML-DSA-65 is a lattice-based
              digital signature algorithm in the Module-Lattice-Digital Signature Algorithm family —
              designed specifically to resist attacks from cryptographically relevant quantum computers.
              It produces signatures that are mathematically unforgeable without solving the Module
              Learning With Errors (MLWE) problem, which is believed to be hard for both classical and
              quantum adversaries.
            </p>
            <p>
              ML-DSA-65 provides NIST security level 3, equivalent to 192-bit classical security — the
              same level used in many high-assurance government and defense applications. CoreIdentity
              selected ML-DSA-65 for agent identity credentials because identity certificates are the
              highest-value cryptographic artifact in the enforcement chain.
            </p>
          </div>
        </FAQCard>

        <FAQCard q="What is quantum entropy anchoring?">
          <p>
            Quantum entropy anchoring means that the randomness used to generate every agent identity
            credential is sourced from a physical quantum process — not from a purely deterministic
            algorithmic source. The primary entropy source is the ANU Quantum Random Number Generator,
            which measures photon vacuum fluctuations: an inherently non-deterministic quantum-mechanical
            event that cannot be predicted or reproduced. On each refresh cycle, 1,024 quantum-sourced
            values from the ANU QRNG API are XOR-mixed with OS CSPRNG output and loaded into a 16 KB
            entropy pool. If the ANU QRNG API is unavailable, the system degrades to OS CSPRNG fallback
            (DEGRADED status). QUANTUM status is only reported when photon-sourced entropy is actively
            contributing to the pool. The result: every agent credential derives its key material from
            a physically random quantum source, not a software approximation.
          </p>
        </FAQCard>'''

def patch_faq():
    path = SRC / "pages" / "FAQPage.tsx"
    text = path.read_text()
    if FAQ_SENTINEL in text:
        print("[faq] PQ-CA FAQ entries already present — skip")
        return
    if OLD_QUANTUM_FAQ not in text:
        print("[faq] ERROR: existing quantum FAQ anchor not found — skipping", file=sys.stderr)
        return
    patched = text.replace(OLD_QUANTUM_FAQ, NEW_QUANTUM_FAQS, 1)
    path.write_text(patched)
    print("[faq] quantum FAQ expanded with PQ-CA, ML-DSA-65, entropy anchoring entries")


# ─────────────────────────────────────────────────────────────────────────────
# Main
# ─────────────────────────────────────────────────────────────────────────────

def main():
    patch_home()
    patch_quantum()
    patch_ais()
    patch_faq()

    print("\n[build] running npm run build...")
    result = subprocess.run(
        ["npm", "run", "build"],
        cwd=ROOT,
        capture_output=False,
    )
    sys.exit(result.returncode)

if __name__ == "__main__":
    main()
