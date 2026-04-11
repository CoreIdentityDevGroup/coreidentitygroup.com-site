import React from "react";

export function AgentIdentitySystemsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 space-y-20">

      {/* Hero */}
      <div className="space-y-6 max-w-4xl">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40">
          A COREIDENTITY DEVELOPMENT GROUP COMPANY
        </div>
        <h1 className="text-5xl font-semibold tracking-tight leading-tight">
          Every agent needs
          <br />
          an identity it can prove.
        </h1>
        <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
          Agent Identity Systems is the identity and accountability infrastructure
          for autonomous AI. Authentication, authorization, provenance, and
          attribution — enforced at the execution layer, not bolted on after the fact.
        </p>
        <div className="flex flex-wrap gap-4 pt-2">
          <a
            href="https://agentidentity.systems"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 24px', background: 'rgba(99,102,241,0.1)',
              border: '1px solid rgba(99,102,241,0.35)', borderRadius: '8px',
              color: '#818cf8', fontSize: '15px', fontWeight: 600,
              textDecoration: 'none', letterSpacing: '0.02em', transition: 'all 0.15s',
            }}
          >
            Visit agentidentity.systems →
          </a>
        </div>
      </div>

      {/* Live Status Panel */}
      <div style={{
        background: 'linear-gradient(135deg,rgba(99,102,241,0.08),rgba(99,102,241,0.03))',
        border: '1px solid rgba(99,102,241,0.25)', borderRadius: '16px', padding: '32px',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '24px' }}>
          <div style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#6366f1', boxShadow: '0 0 8px #818cf8',
          }} />
          <span style={{ fontSize: '11px', fontFamily: 'monospace', letterSpacing: '0.15em', color: '#6366f1' }}>
            LIVE — 30-DAY SOAK TEST RUNNING
          </span>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '24px', marginBottom: '24px' }}>
          {[
            { label: 'SOAK CYCLES', value: '32,784+', sub: '100% pass rate' },
            { label: 'AVG LATENCY', value: '99ms', sub: 'identity verify p95' },
            { label: 'UPTIME', value: '100%', sub: '30-day soak window' },
          ].map(s => (
            <div key={s.label}>
              <div style={{ fontSize: '10px', fontFamily: 'monospace', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', marginBottom: '6px' }}>{s.label}</div>
              <div style={{ fontSize: '28px', fontWeight: 700, color: '#a5b4fc', marginBottom: '4px' }}>{s.value}</div>
              <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>{s.sub}</div>
            </div>
          ))}
        </div>
        <a
          href="https://agentidentity.systems"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '13px', color: '#818cf8', textDecoration: 'none' }}
        >
          View live portal at agentidentity.systems →
        </a>
      </div>

      {/* Core Capabilities */}
      <div className="space-y-8">
        <h2 className="text-3xl font-semibold tracking-tight">
          Identity infrastructure for the agentic era
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: 'Agent Authentication',
              body: 'Cryptographically verifiable identity for every agent. Not session tokens — persistent, auditable credentials that prove who the agent is and who authorized it to act.',
            },
            {
              title: 'Authorization Boundaries',
              body: 'Policy-linked identity boundaries that constrain what each agent can do, where it can do it, and under what conditions — enforced at runtime, not in configuration files.',
            },
            {
              title: 'Provenance and Traceability',
              body: 'Every action an agent takes is traceable back to its identity, its authorization chain, and the human or system that initiated it. Full lineage with no gaps.',
            },
            {
              title: 'Attribution and Accountability',
              body: 'When something goes wrong, you know exactly which agent acted, under which authorization, and what policy governed the decision. Audit-grade accountability built in.',
            },
          ].map(c => (
            <div key={c.title} style={{
              border: '1px solid rgba(255,255,255,0.08)', borderRadius: '12px',
              padding: '24px', transition: 'border-color 0.15s',
            }}>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>{c.title}</h3>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* The problem */}
      <div style={{
        border: '1px solid rgba(255,255,255,0.08)', borderRadius: '16px', padding: '32px',
      }}>
        <h2 style={{ fontSize: '22px', fontWeight: 600, marginBottom: '16px' }}>
          The problem every enterprise is about to face
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, maxWidth: '720px' }}>
          Your agents are making consequential decisions right now. Most organizations
          cannot answer three basic questions: Which agent did this? Was it authorized
          to act? Can you prove it to a regulator? AIS makes those questions answerable —
          before an incident forces them.
        </p>
      </div>

      {/* Stack integration */}
      <div className="space-y-6">
        <h2 className="text-3xl font-semibold tracking-tight">
          Native to the CoreIdentity enforcement stack
        </h2>
        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.7)', maxWidth: '720px', lineHeight: 1.8 }}>
          AIS integrates natively with Sentinel OS for policy enforcement,
          SAL Kernel for semantic authorization, and Nexus OS for multi-agent
          orchestration. Identity is not a feature — it is the foundation
          every other control depends on.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', paddingTop: '8px' }}>
          {['Sentinel OS', 'SAL Kernel', 'Nexus OS', 'AGO'].map(p => (
            <span key={p} style={{
              fontSize: '13px', padding: '6px 16px',
              border: '1px solid rgba(99,102,241,0.3)', borderRadius: '6px',
              color: '#a5b4fc', background: 'rgba(99,102,241,0.05)',
            }}>{p}</span>
          ))}
        </div>
      </div>

    </div>
  );
}
