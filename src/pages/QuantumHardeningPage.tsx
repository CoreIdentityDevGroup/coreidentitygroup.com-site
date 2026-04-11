import React from "react";
import { Card, PageTitle } from "../components/ui";

export function QuantumHardeningPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40">QUANTUM HARDENING — FIPS 203 / 204 / 205</div>
        <PageTitle>Quantum-Resistant by Design</PageTitle>
        <p className="text-white/70 max-w-3xl">CoreIdentity is the first AI governance platform to complete post-quantum cryptographic hardening across its full enforcement stack. Every cryptographic surface — not just the perimeter. Declaration date: July 1, 2026.</p>
      </div>

      <Card>
        <div className="space-y-2">
          <div className="text-xs font-medium tracking-[0.15em] text-teal-400 mb-3">VERIFIED — SOAK COMPLETE</div>
          <div className="grid grid-cols-3 gap-4">
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">SOAK CYCLES</div>
              <div className="text-2xl font-bold text-teal-300">100,000</div>
              <div className="text-xs text-white/50">100.00% pass rate</div>
            </div>
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">SPRINT TESTS</div>
              <div className="text-2xl font-bold text-teal-300">376 / 376</div>
              <div className="text-xs text-white/50">zero failures</div>
            </div>
            <div>
              <div className="text-xs text-white/40 tracking-widest mb-1">DECLARATION</div>
              <div className="text-2xl font-bold text-teal-300">JUL 1 2026</div>
              <div className="text-xs text-white/50">first in class</div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <span className="text-xs font-mono px-2 py-1 rounded border border-teal-500/30 text-teal-300 bg-teal-500/5">ML-KEM-768</span>
            <span className="text-xs font-mono px-2 py-1 rounded border border-teal-500/30 text-teal-300 bg-teal-500/5">ML-DSA-65</span>
            <span className="text-xs font-mono px-2 py-1 rounded border border-teal-500/30 text-teal-300 bg-teal-500/5">SLH-DSA-128s</span>
            <span className="text-xs font-mono px-2 py-1 rounded border border-teal-500/30 text-teal-300 bg-teal-500/5">SHA-3-512</span>
            <span className="text-xs font-mono px-2 py-1 rounded border border-teal-500/30 text-teal-300 bg-teal-500/5">AES-256-GCM</span>
          </div>
        </div>
      </Card>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold">Why post-quantum cryptography matters now</h2>
      </div>

      <Card>
        <div className="space-y-4">
          <div>
            <div className="font-semibold text-white mb-1">Harvest now, decrypt later</div>
            <p className="text-sm text-white/60 leading-relaxed">Adversaries are collecting encrypted data today with the intent to decrypt it once quantum computers become capable. Governance audit trails encrypted with classical cryptography are already at risk.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">Regulatory pressure is accelerating</div>
            <p className="text-sm text-white/60 leading-relaxed">NIST finalized FIPS 203, 204, and 205 in 2024. Federal agencies and their contractors face hard migration deadlines. Enterprise governance infrastructure must meet the same bar.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">Identity credentials are the highest-value target</div>
            <p className="text-sm text-white/60 leading-relaxed">Agent identity tokens, capability certificates, and authorization proofs are exactly what adversaries want. Quantum-resistant cryptography protects the most sensitive layer of your control plane.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">First-mover credibility with institutional buyers</div>
            <p className="text-sm text-white/60 leading-relaxed">Being the first AI governance platform to complete PQC hardening is a durable competitive position. It signals institutional-grade security posture before regulators require it.</p>
          </div>
        </div>
      </Card>

      <div className="rounded-2xl border border-teal-400/20 bg-teal-400/5 p-6">
        <div className="text-sm font-semibold tracking-wide text-teal-400 uppercase mb-3">Full Enforcement Stack Hardened</div>
        <p className="text-sm text-white/70 leading-relaxed mb-4">PQC hardening covers the complete CoreIdentity enforcement chain — SAL Kernel authorization tokens, Sentinel OS audit signatures, AIS identity credentials, and Nexus OS orchestration proofs. Every cryptographic surface, not just the perimeter.</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="text-sm text-white/60"><span className="text-teal-400 font-medium">SAL Kernel</span> — Authorization tokens and capability proofs</div>
          <div className="text-sm text-white/60"><span className="text-teal-400 font-medium">Sentinel OS</span> — Audit signatures and governance records</div>
          <div className="text-sm text-white/60"><span className="text-teal-400 font-medium">AIS</span> — Identity credentials and certificates</div>
          <div className="text-sm text-white/60"><span className="text-teal-400 font-medium">Nexus OS</span> — Orchestration proofs and execution records</div>
        </div>
      </div>
    </div>
  );
}
