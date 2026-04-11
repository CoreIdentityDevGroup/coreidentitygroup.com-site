import React from "react";

export function QuantumHardeningPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 space-y-20">

      {/* Hero */}
      <div className="space-y-6 max-w-4xl">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40">
          QUANTUM HARDENING — FIPS 203 / 204 / 205
        </div>
        <h1 className="text-5xl font-semibold tracking-tight leading-tight">
          Your governance infrastructure,
          <br />
          quantum-resistant by design.
        </h1>
        <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
          CoreIdentity is the first AI governance platform to complete
          post-quantum cryptographic hardening across its full enforcement
          stack. Every cryptographic surface — not just the perimeter.
          Declaration date: July 1, 2026.
        </p>
      </div>

      {/* Verified stats */}
      <div style={{
        background: 'linear-gradient(135deg,rgba(20,184,166,0.08),rgba(20,184,166,0.03))',
        border: '1px solid rgba(20,184,166,0.25)', borderRadius: '16px', padding: '32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#14b8a6', boxShadow: '0 0 8px #2dd4bf',
          }} />
          <span style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.15em', color: '#14b8a6' }}>
            VERIFIED — SOAK COMPLETE
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', marginBottom: '24px' }}>
          {[
            { label: 'SOAK CYCLES', value: '100,000', sub: '100.00% pass rate' },
            { label: 'SPRINT TESTS', value: '376 / 376', sub: 'zero failures' },
            { label: 'DECLARATION', value: 'JUL 1 2026', sub: 'first in class' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', marginBottom: '6px' }}>{s.label}</div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#2dd4bf', marginBottom: '4px' }}>{s.value}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['ML-KEM-768','ML-DSA-65','SLH-DSA-128s','SHA-3-512','AES-256-GCM'].map(a => (
            <span key={a} style={{
              fontSize: '11px', fontFamily: 'monospace', padding: '4px 12px',
              border: '1px solid rgba(20,184,166,0.3)', borderRadius: '4px',
              color: '#5eead4', background: 'rgba(20,184,166,0.05)',
            }}>{a}</span>
          ))}
        </div>
      </div>

      {/* Why now */}
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight">
          Why post-quantum cryptography matters now
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Harvest now, decrypt later',
              body: 'Adversaries are collecting encrypted data today with the intent to decrypt it once quantum computers become capable. Governance audit trails encrypted with classical cryptography are already at risk.',
            },
            {
              title: 'Regulatory pressure is accelerating',
              body: 'NIST finalized FIPS 203, 204, and 205 in 2024. Federal agencies and their contractors face hard migration deadlines. Enterprise governance infrastructure must meet the same bar.',
            },
            {
              title: 'Identity credentials are the highest-value target',
              body: 'Agent identity tokens, capability certificates, and authorization proofs are exactly what adversaries want. Quantum-resistant cryptography protects the most sensitive layer of your control plane.',
            },
            {
              title: 'First-mover credibility with institutional buyers',
              body: 'Being the first AI governance platform to complete PQC hardening is a durable competitive position. It signals institutional-grade security posture before regulators require it.',
            },
          ].map(c => (
            <div key={c.title} style={{
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px',
              padding: '24px',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>{c.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What we hardened */}
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight">
          Full enforcement stack hardened
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '720px', lineHeight: 1.8 }}>
          PQC hardening covers the complete CoreIdentity enforcement chain.
          Every cryptographic surface across the platform — not just the network
          perimeter — has been migrated to post-quantum algorithms and verified
          under adversarial soak conditions.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '12px', maxWidth: '600px' }}>
          {[
            { name: 'SAL Kernel', detail: 'Authorization tokens and capability proofs' },
            { name: 'Sentinel OS', detail: 'Audit signatures and governance records' },
            { name: 'Agent Identity Systems', detail: 'Identity credentials and certificates' },
            { name: 'Nexus OS', detail: 'Orchestration proofs and execution records' },
          ].map(p => (
            <div key={p.name} style={{
              border: '1px solid rgba(20,184,166,0.2)', borderRadius: '10px',
              padding: '16px',
            }}>
              <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '4px' }}>{p.name}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{p.detail}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
