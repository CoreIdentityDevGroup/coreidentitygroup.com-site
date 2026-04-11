import React from "react";
import { Card, PageTitle, SectionTitle, PulseDot, StatBlock, Eyebrow } from "../components/ui";

export function QuantumHardeningPage() {
  return (
    <div className="space-y-12">

      <div className="space-y-4 cidg-fadein">
        <Eyebrow>QUANTUM HARDENING — FIPS 203 / 204 / 205</Eyebrow>
        <PageTitle>Quantum-Resistant by Design</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed text-lg">
          CoreIdentity is the first AI governance platform to complete
          post-quantum cryptographic hardening across its full enforcement
          stack. Every cryptographic surface — not just the perimeter.
          Declaration date: July 1, 2026.
        </p>
      </div>

      <Card accent="teal" className="cidg-fadein cidg-fadein-delay-1">
        <div className="space-y-5">
          <div className="flex items-center gap-3">
            <PulseDot color="#14b8a6" />
            <span className="text-xs font-mono tracking-[0.15em] text-teal-400">
              VERIFIED — SOAK COMPLETE
            </span>
          </div>
          <div className="grid grid-cols-3 gap-6">
            <StatBlock label="SOAK CYCLES" value="100,000" sub="100.00% pass rate" color="#2dd4bf" />
            <StatBlock label="SPRINT TESTS" value="376 / 376" sub="zero failures" color="#2dd4bf" />
            <StatBlock label="DECLARATION" value="JUL 1 2026" sub="first in class" color="#2dd4bf" />
          </div>
          <div className="flex flex-wrap gap-2">
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
        <SectionTitle>Why post-quantum cryptography matters now</SectionTitle>
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
            proofs are exactly what adversaries want. Quantum-resistant
            cryptography protects the most sensitive layer of your control plane.
          </p>
        </Card>
        <Card accent="teal">
          <div className="font-semibold text-white mb-2">First-mover credibility with institutional buyers</div>
          <p className="text-sm text-white/60 leading-relaxed">
            Being the first AI governance platform to complete PQC hardening
            is a durable competitive position. It signals institutional-grade
            security posture before regulators require it.
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
          to post-quantum algorithms and verified under adversarial soak conditions.
        </p>
        <div className="grid grid-cols-2 gap-3">
          {[
            {name:'SAL Kernel', detail:'Authorization tokens and capability proofs'},
            {name:'Sentinel OS', detail:'Audit signatures and governance records'},
            {name:'Agent Identity Systems', detail:'Identity credentials and certificates'},
            {name:'Nexus OS', detail:'Orchestration proofs and execution records'},
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
