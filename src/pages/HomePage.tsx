import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import globalAIGovernanceHero from "../assets/images/global-ai-governance-hero.webp";
import { Helmet } from "react-helmet-async";

// CIDG_POSITIONING_V2_HOME
import { DemoRequestBanner } from "../components/DemoRequestBanner";
import { PlatformStatsSection } from "../components/PlatformStatsSection";

export default function HomePage() {
  const [liveData, setLiveData] = useState(null);

  useEffect(() => {
    fetch('/api/live-metrics')
      .then(r => r.json())
      .then(d => { if (d.success) setLiveData(d.data); })
      .catch(() => {});
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <Helmet>
        <title>CoreIdentity | Institutional Trust Infrastructure for Autonomous Systems</title>
        <meta name="description" content="When organizations delegate consequential authority to AI, they need institutional-grade proof that agents acted correctly. CoreIdentity makes every AI decision provable — authorized, attributed, and auditable — and hardened against both current and future threats." />
        <meta property="og:title" content="CoreIdentity — Institutional Trust Infrastructure for Autonomous Systems" />
        <meta property="og:description" content="You delegated authority to AI. CoreIdentity is how you prove it acted correctly — authorized before execution, attributed to a verified identity, recorded in evidence a regulator will accept." />
        <meta property="og:image" content="https://coreidentitygroup.com/og-blog.png" />
        <meta property="og:url" content="https://coreidentitygroup.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="CoreIdentity Development Group" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="CoreIdentity — Institutional Trust Infrastructure for Autonomous Systems" />
        <meta name="twitter:description" content="You delegated authority to AI. CoreIdentity is how you prove it acted correctly." />
        <meta name="twitter:image" content="https://coreidentitygroup.com/og-blog.png" />
      </Helmet>

      {/* VISUAL — top of page */}
      <section className="mb-16">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <img
            src={globalAIGovernanceHero}
            alt="CoreIdentity — institutional trust infrastructure for autonomous systems"
            className="w-full object-cover"
          />
          <div className="px-6 py-4 text-sm text-white/50 text-center">
            <span className="mx-auto block max-w-md">
              Every agent decision — authorized before it executes, attributed to a verified identity, provable to a regulator.
            </span>
          </div>
        </div>
      </section>

      {/* HERO */}
      <section className="max-w-4xl">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-6">
          INSTITUTIONAL TRUST INFRASTRUCTURE FOR AUTONOMOUS SYSTEMS
        </div>
        <h1 className="text-5xl font-semibold tracking-tight leading-tight">
          You delegated authority to AI.
          <br />
          Can you prove it acted correctly?
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
          Autonomous agents are already making consequential decisions across your
          enterprise. When a regulator, auditor, or board asks what an agent did —
          and whether it was allowed to — most organizations cannot answer.
          CoreIdentity is the institutional trust infrastructure that makes every AI
          decision provable: authorized before it executes, attributed to a verified
          identity, and recorded in evidence built to be accepted.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/governance-infrastructure"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            See the Infrastructure
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
          >
            Request a Briefing
          </Link>
        </div>
      </section>

      {/* THE THESIS */}
      <section className="mt-16 max-w-3xl">
        <div className="border-l-2 border-teal-500/40 pl-5 space-y-3">
          <p className="text-xl leading-relaxed text-white/85">
            The market does not have an AI problem. It has a trust deficit problem.
          </p>
          <p className="text-base leading-relaxed text-white/60">
            The technology works. What is missing is proof that it can be trusted with
            authority — proof that an autonomous system acted inside its mandate, and a
            record that holds up when someone with subpoena power asks. That gap is not a
            model problem. It is an infrastructure problem. CoreIdentity builds the
            infrastructure.
          </p>
        </div>
      </section>

      {/* MARKET VALIDATION */}
      <section className="mt-12">
        <div className="rounded-2xl border border-white/10 bg-black/20 px-8 py-6 flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x sm:divide-white/10 max-w-4xl">
          <div className="flex-1 sm:pr-8">
            <div className="text-2xl font-bold text-amber-400">77%</div>
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">of IT managers say AI agents are out of control (ZDNet, 2026)</div>
          </div>
          <div className="flex-1 sm:px-8">
            <div className="text-2xl font-bold text-amber-400">82%</div>
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">of enterprises have unknown AI agents operating without proof of authority (CSA, Jan 2026)</div>
          </div>
        </div>
      </section>

      {/* POSITIONING STRIP */}
      <section className="mt-8">
        <div className="rounded-2xl border border-white/10 bg-black/20 px-8 py-6 flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x sm:divide-white/10 max-w-4xl">
          <div className="flex-1 sm:pr-8">
            <div className="text-2xl font-bold">Provable by Design</div>
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">Every agent action authorized, attributed, and recorded — before it executes</div>
          </div>
          <div className="flex-1 sm:px-8">
            <div className="text-2xl font-bold">FIPS 203 / 204 / 205</div>
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">Hardened against both current and future threats across the full enforcement chain</div>
          </div>
          <div className="flex-1 sm:pl-8">
            <div className="text-2xl font-bold text-teal-400">Fail-Closed</div>
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">If the system cannot authorize an action, the action does not happen</div>
          </div>
        </div>
      </section>

      {/* THE WEDGE */}
      <section className="mt-20">
        <div className="max-w-3xl">
          <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-4">
            THE NEAR-TERM WEDGE
          </div>
          <h2 className="text-3xl font-semibold tracking-tight mb-6">
            Provable AI Decision Governance
          </h2>
          <p className="text-white/70 leading-relaxed text-lg">
            Before an organization can scale autonomous AI, it has to prove — to
            regulators, auditors, courts, and its own board — that every consequential
            decision was authorized, bounded, and attributable. Provable AI Decision
            Governance is that capability: deterministic authorization at execution time,
            cryptographic attribution to a verified agent identity, and a tamper-evident
            record of what happened and why. It is the wedge that turns AI liability into
            AI accountability.
          </p>
        </div>
      </section>

      {/* THE SIX QUESTIONS */}
      <section className="mt-20">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-8">
          WHAT EVERY DEPLOYMENT MUST ANSWER
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">CATASTROPHE</div>
            <p className="text-white/70 text-sm leading-relaxed">An agent takes an irreversible action it was never authorized to take. SAL fails closed — if it cannot authorize, execution stops before damage is done.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">LIABILITY</div>
            <p className="text-white/70 text-sm leading-relaxed">"We didn't know what the AI did" is not a legal defense. Every action is attributed to a verified identity and a tamper-evident record of the authority it acted under.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">COST</div>
            <p className="text-white/70 text-sm leading-relaxed">Reconstructing what an AI fleet did after the fact is expensive and incomplete. Evidence is generated automatically, at execution time — not assembled under deadline.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">REGULATOR</div>
            <p className="text-white/70 text-sm leading-relaxed">EU AI Act, NIST AI RMF, HIPAA, SOX, SEC — exportable, machine-verifiable proof artifacts mapped to the controls examiners actually ask for.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">BOTTLENECK</div>
            <p className="text-white/70 text-sm leading-relaxed">Manual governance reviews gate every AI deployment. Codified policy enforced inline lets teams ship inside the guardrails instead of routing around them.</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">FUTURE RISK</div>
            <p className="text-white/70 text-sm leading-relaxed">Harvest-now-decrypt-later and the post-quantum transition. The full enforcement chain is hardened against both current and future threats — before regulators require it.</p>
          </div>
        </div>
      </section>

      {/* ENFORCEMENT ARCHITECTURE */}
      <section className="mt-20">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-8">
          THE ENFORCEMENT ARCHITECTURE
        </div>
        <div className="grid gap-4 md:grid-cols-2">

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">AUTHORIZATION</div>
            <div className="text-lg font-semibold mb-3">SAL Enforcement Kernel</div>
            <p className="text-white/60 text-sm leading-relaxed">
              The deterministic pre-execution gateway. Every agent request is
              evaluated across five dimensions before execution is permitted.
              Fail-closed by design — if SAL cannot authorize, execution stops.
            </p>
            <Link to="/layer-b" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              SAL Kernel →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">GOVERNANCE</div>
            <div className="text-lg font-semibold mb-3">Sentinel</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Policy enforcement, identity boundaries, approval gates, and
              evidence capture. The reason your AI fleet cannot make a decision
              your legal team did not authorize.
            </p>
            <Link to="/layer-d" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              Sentinel →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">ORCHESTRATION</div>
            <div className="text-lg font-semibold mb-3">Nexus</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Controlled multi-agent execution. Workflows, integrations,
              retries, and recovery — coordinated inside defined governance
              constraints with structured operational traces at every step.
            </p>
            <Link to="/layer-c" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              Nexus →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">IDENTITY</div>
            <div className="text-lg font-semibold mb-3">Agent Identity Systems</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Every agent needs an identity it can prove. Post-quantum authentication,
              authorization, provenance, and attribution — enforced at the
              execution layer, not bolted on after the fact.
            </p>
            <Link to="/layer-a" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              Agent Identity Systems →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">AUTONOMOUS OPERATIONS</div>
            <div className="text-lg font-semibold mb-3">AGO — Autonomous Governance Orchestrator</div>
            <p className="text-white/60 text-sm leading-relaxed">
              The operating agent running under full CoreIdentity enforcement —
              and the validated pilot pattern for every enterprise deployment that follows.
              Governance demonstrated, not just described.
            </p>
            <Link to="/layer-c" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              AGO →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">DIGITAL LABOR</div>
            <div className="text-lg font-semibold mb-3">SmartNation AI</div>
            <p className="text-white/60 text-sm leading-relaxed">
              10,000 governed agents across twelve verticals. Pre-built,
              compliance-ready digital labor — deployed under full CoreIdentity
              enforcement from day one.
            </p>
            <Link to="/smartnation-ai" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              SmartNation AI →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">GOVERNANCE INTERFACE</div>
            <div className="text-lg font-semibold mb-3">MCP Protocol</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Eleven live governance tools through a production MCP server.
              Any MCP-compatible AI client, agent, or orchestration framework
              queries the CoreIdentity enforcement architecture with full policy
              enforcement, namespace isolation, and audit logging on every call.
            </p>
            <Link to="/layer-d" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              MCP Protocol →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">CRYPTOGRAPHIC POSTURE</div>
            <div className="text-lg font-semibold mb-3">Quantum Hardening</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Hardened against both current and future threats. Post-quantum
              cryptography runs across the full enforcement chain — every surface,
              not just the perimeter. NIST FIPS 203, 204, and 205 in production.
            </p>
            <Link to="/layer-d" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              Quantum Hardening →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">FORMAL VERIFICATION</div>
            <div className="text-lg font-semibold mb-3">FGRE — Formal Governance Reasoning Engine</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Mathematical assurance for governance policy integrity. Z3 SMT
              formal verification detects policy contradictions, validates
              execution paths, and generates machine-verifiable proof artifacts
              before any policy activates.
            </p>
            <Link to="/layer-b" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              Formal Governance Verification →
            </Link>
          </div>

        </div>
      </section>


      {/* LIVE IN PRODUCTION */}
      <section className="mt-20">
        <PlatformStatsSection />
      </section>

      {/* PARTNERSHIPS & CERTIFICATIONS */}
      <section className="mt-20">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-6">
          PARTNERSHIPS &amp; CERTIFICATIONS
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#0d1117',
            border: '1px solid rgba(66, 133, 244, 0.35)',
            borderRadius: '10px',
            padding: '10px 18px',
          }}>
            <svg width="22" height="18" viewBox="0 0 272 92" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M115.75 46.5c0 12.76-9.99 22.18-22.25 22.18S71.25 59.26 71.25 46.5s9.99-22.18 22.25-22.18 22.25 9.42 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S81 38.52 81 46.5s5.79 13.44 12.51 13.44 12.5-5.46 12.5-13.44z" fill="#EA4335"/>
              <path d="M163.75 46.5c0 12.76-9.99 22.18-22.25 22.18S119.25 59.26 119.25 46.5s9.99-22.18 22.25-22.18 22.25 9.42 22.25 22.18zm-9.74 0c0-7.98-5.79-13.44-12.51-13.44S129 38.52 129 46.5s5.79 13.44 12.51 13.44 12.5-5.46 12.5-13.44z" fill="#FBBC05"/>
              <path d="M209.75 25.32v39.36c0 16.21-9.57 22.84-20.88 22.84-10.65 0-17.04-7.12-19.46-12.95l8.48-3.53c1.49 3.56 5.14 7.76 11 7.76 7.2 0 11.66-4.44 11.66-12.82v-3.14h-.34c-2.15 2.65-6.29 4.97-11.52 4.97-10.94 0-20.95-9.53-20.95-21.8 0-12.36 10.01-22.02 20.95-22.02 5.21 0 9.35 2.32 11.52 4.89h.34v-3.56h9.2zm-8.52 21.17c0-7.71-5.14-13.35-11.69-13.35-6.63 0-12.19 5.64-12.19 13.35 0 7.63 5.56 13.18 12.19 13.18 6.55 0 11.69-5.55 11.69-13.18z" fill="#4285F4"/>
              <path d="M224 4h9.74v63h-9.74z" fill="#34A853"/>
              <path d="M262.02 54.48l7.56 5.04c-2.44 3.61-8.32 9.84-18.48 9.84-12.6 0-22.01-9.74-22.01-22.18 0-13.19 9.49-22.18 20.92-22.18 11.5 0 17.13 9.15 18.96 14.1l1.01 2.52-29.65 12.27c2.27 4.44 5.8 6.71 10.77 6.71 4.98 0 8.43-2.44 10.92-6.12zm-23.27-7.98l19.82-8.23c-1.09-2.77-4.37-4.7-8.23-4.7-4.95 0-11.84 4.36-11.59 12.93z" fill="#EA4335"/>
              <path d="M35.29 41.41V32h31.91c.31 1.64.47 3.58.47 5.68 0 7.06-1.93 15.79-8.15 22.01-6.05 6.3-13.78 9.65-24.02 9.65C16.32 69.34.36 53.89.36 34.67.36 15.45 16.32 0 35.5 0c10.49 0 17.96 4.12 23.58 9.49l-6.64 6.64c-4.02-3.78-9.48-6.72-16.94-6.72-13.84 0-24.66 11.15-24.66 25.26 0 14.11 10.82 25.26 24.66 25.26 8.97 0 14.08-3.61 17.36-6.89 2.66-2.66 4.41-6.46 5.1-11.65H35.29z" fill="#4285F4"/>
            </svg>
            <span style={{ fontSize: '12px', fontWeight: 600, color: '#9aa0a6', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Cloud Partner
            </span>
          </div>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#0d1117',
            border: '1px solid rgba(20,184,166,0.3)',
            borderRadius: '10px',
            padding: '10px 18px',
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="#14b8a6" strokeWidth="1.5" strokeLinejoin="round"/>
            </svg>
            <span style={{ fontSize: '13px', fontWeight: 600, color: '#e8eaed', letterSpacing: '0.02em' }}>
              Implements NIST FIPS 203 / 204 / 205
            </span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-20">
        <DemoRequestBanner />
      </section>

    </div>
  );
}
