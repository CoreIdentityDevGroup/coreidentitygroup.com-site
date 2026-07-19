import React from "react";
import { Card, PageTitle, SectionTitle, PulseDot, Eyebrow } from "../components/ui";
import { Helmet } from "react-helmet-async";

export function QuantumHardeningPage() {
 return (
 <div className="space-y-12">
      <Helmet>
        <title>Quantum Hardening — Current & Future Threat Protection | CoreIdentity</title>
        <meta name="description" content="CoreIdentity is hardened against both current and future threats — post-quantum cryptography across the full enforcement chain. NIST FIPS 203, 204, and 205. Every surface, not just the perimeter." />
      </Helmet>

 <div className="space-y-4 cidg-fadein">
 <Eyebrow>GOVERNANCE INFRASTRUCTURE</Eyebrow>
 <PageTitle>Hardened Against Current and Future Threats</PageTitle>
 <p className="text-white/70 max-w-3xl leading-relaxed text-lg">
 CoreIdentity is hardened against both current and future threats.
 Post-Quantum Cryptography (PQC) runs across the full enforcement
 chain — every cryptographic surface, not just the
 perimeter. </p>
 </div>

 <Card accent="teal" className="cidg-fadein cidg-fadein-delay-1">
 <div className="space-y-4">
 <div className="flex items-center gap-3">
 <PulseDot color="#14b8a6" />
 <span className="text-xs font-mono tracking-[0.15em] text-teal-400">
 VERIFIED — ENFORCEMENT STACK HARDENED
 </span>
 </div>
 <p className="text-white/70 text-sm leading-relaxed">
 The complete CoreIdentity enforcement chain has been migrated to
 NIST-approved post-quantum algorithms and verified under rigorous
 adversarial soak conditions. Every cryptographic surface —
 authorization tokens, audit signatures, identity credentials, and
 orchestration proofs — is quantum-resistant.
 </p>
 <div className="flex flex-wrap gap-2 pt-1">
 {['ML-KEM-768','ML-DSA-65','SLH-DSA-128s','SHA-3-512','AES-256-GCM'].map(function(a) {
 return (
 <span key={a} className="text-xs font-mono px-2 py-1 rounded border border-teal-500/30 text-teal-300" style={{background:'rgba(20,184,166,0.05)'}}>
 {a}
 </span>
 );
 })}
 </div>
 </div>
 </Card>



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

  {/* CRYPTOGRAPHIC POSTURE */}
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
            ['Stateless hash signing',    'SLH-DSA-128s (FIPS 205)', 'Live — Persistent HSM-backed keypair'],
            ['FGRE proof attestation',    'SLH-DSA-128s (FIPS 205)', 'Live — Machine-verifiable'],
          ].map(function([surface, algo, status]) {
            const isInterim = (status as string).includes('software layer');
            return (
              <tr key={surface as string}>
                <td className="py-3 pr-6 text-white/80">{surface}</td>
                <td className="py-3 pr-6 font-mono text-teal-300 text-xs">{algo}</td>
                <td className={`py-3 text-xs font-medium ${isInterim ? 'text-accent-purple/80' : 'text-teal-400'}`}>{status}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  </div>

  <div className="space-y-4 cidg-fadein cidg-fadein-delay-2">
 <SectionTitle>Why Post-Quantum Cryptography matters now</SectionTitle>
 </div>

 <div className="grid gap-5 md:grid-cols-2 cidg-fadein cidg-fadein-delay-3">
 <Card accent="teal">
 <div className="font-semibold text-white mb-2">Harvest now, decrypt later</div>
 <p className="text-sm text-white/60 leading-relaxed">
 Adversaries are collecting encrypted data today with the intent
 to decrypt it once quantum computers become capable. Governance
 audit trails encrypted with classical cryptography are already
 at risk.
 </p>
 </Card>
 <Card accent="teal">
 <div className="font-semibold text-white mb-2">Regulatory pressure is accelerating</div>
 <p className="text-sm text-white/60 leading-relaxed">
 NIST finalized FIPS 203, 204, and 205 in 2024. Federal agencies
 and their contractors face hard migration deadlines. Enterprise
 governance infrastructure must meet the same bar.
 </p>
 </Card>
 <Card accent="teal">
 <div className="font-semibold text-white mb-2">Identity credentials are the highest-value target</div>
 <p className="text-sm text-white/60 leading-relaxed">
 Agent identity tokens, capability certificates, and authorization
 proofs are exactly what adversaries want. PQC protects the most
 sensitive layer of your enforcement chain.
 </p>
 </Card>
 <Card accent="teal">
 <div className="font-semibold text-white mb-2">First-mover credibility with institutional buyers</div>
 <p className="text-sm text-white/60 leading-relaxed">
 Being hardened against both current and future threats across the
 full enforcement chain is a durable competitive position. It signals
 institutional-grade security posture before regulators require it.
 </p>
 </Card>
 </div>

 <div
 className="rounded-2xl p-6 cidg-fadein cidg-fadein-delay-4"
 style={{border:'1px solid rgba(20,184,166,0.2)', background:'rgba(20,184,166,0.04)'}}
 >
 <div className="text-xs font-medium tracking-widest text-teal-400 uppercase mb-3">
 Full Enforcement Stack Hardened
 </div>
 <p className="text-sm text-white/70 leading-relaxed mb-5">
 PQC hardening covers the complete CoreIdentity enforcement chain.
 Every cryptographic surface across the platform has been migrated
 to post-quantum algorithms and verified under adversarial conditions.
 </p>
 <div className="grid grid-cols-2 gap-3">
 {[
 {name:'SAL Kernel', detail:'Authorization tokens and capability proofs'},
 {name:'Sentinel', detail:'Audit signatures and governance records'},
 {name:'Agent Identity Systems', detail:'Identity credentials and certificates'},
 {name:'Nexus', detail:'Orchestration proofs and execution records'},
 ].map(function(p) {
 return (
 <div key={p.name} className="rounded-xl p-4 border border-teal-500/15" style={{background:'rgba(20,184,166,0.04)'}}>
 <div className="text-sm font-medium text-teal-300 mb-1">{p.name}</div>
 <div className="text-xs text-white/50">{p.detail}</div>
 </div>
 );
 })}
 </div>
 </div>

 </div>
 );
}
