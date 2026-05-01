import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import globalAIGovernanceHero from "../assets/images/global-ai-governance-hero.webp";
import { Helmet } from "react-helmet-async";

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
        <title>CoreIdentity — Agentic AI Governance Ecosystem | The Control Layer for Governed AI</title>
        <meta name="description" content="CoreIdentity is the complete Agentic AI Governance Ecosystem. The infrastructure layer governing how autonomous AI agents are deployed, operated, audited, and controlled at enterprise scale." />
      </Helmet>

      {/* HERO */}
      <section className="max-w-4xl">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-6">
          AGENTIC EXECUTION GOVERNANCE
        </div>
        <h1 className="text-5xl font-semibold tracking-tight leading-tight">
          The control plane
          <br />
          for autonomous enterprise AI.
        </h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-white/70">
          Autonomous agents are executing consequential decisions across your
          enterprise right now — without a control plane designed to govern them.
          CoreIdentity is that control plane. Identity enforcement, policy
          arbitration, and immutable audit — operating at machine speed, before
          something goes wrong.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            Explore the Platform
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
          >
            Request a Briefing
          </Link>
        </div>
      </section>

      {/* QUANTUM BOUNDARY STATEMENT */}
      <section className="mt-10 max-w-3xl">
        <p className="text-base leading-relaxed text-white/55 border-l-2 border-teal-500/40 pl-5 italic">
          CoreIdentity is the only governance infrastructure platform that operates at the quantum boundary
          — hardening the enforcement stack against quantum-era threats while providing enterprises the
          diagnostic and remediation tooling required to govern their own agentic ecosystems through the
          post-quantum transition. The moat is not any single algorithm — it is the only
          platform where post-quantum cryptography, sovereign agent identity, inline policy
          enforcement, and immutable audit trails operate as a single integrated enforcement chain.
        </p>
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
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">of enterprises have unknown AI agents — CoreIdentity closes the gap (CSA, 2026)</div>
          </div>
          <div className="flex-1 sm:pl-8">
            <div className="text-2xl font-bold text-blue-400">706-Point</div>
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">Platinum Assurance Framework — continuously passing. The governance standard we hold ourselves to.</div>
          </div>
        </div>
      </section>

      {/* ENTERPRISE POSITIONING */}
      <section className="mt-8">
        <div className="rounded-2xl border border-white/10 bg-black/20 px-8 py-6 flex flex-col sm:flex-row gap-8 sm:gap-0 sm:divide-x sm:divide-white/10 max-w-4xl">
          <div className="flex-1 sm:pr-8">
            <div className="text-2xl font-bold">BAA-Ready</div>
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">HIPAA-compliant PHI agent governance for regulated enterprise deployments</div>
          </div>
          <div className="flex-1 sm:px-8">
            <div className="text-2xl font-bold">FIPS 204 Compliant</div>
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">ML-DSA-65 cryptographic audit trail — every agent action signed and verifiable</div>
          </div>
          <div className="flex-1 sm:px-8">
            <div className="text-2xl font-bold text-teal-400">Enforcement-First</div>
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">Governance that runs before the API call — not after the audit</div>
          </div>
          <div className="flex-1 sm:pl-8">
            <div className="text-2xl font-bold text-amber-400">82%</div>
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">of enterprises have unknown AI agents — CoreIdentity closes the gap (CSA, Jan 2026)</div>
          </div>
        </div>
      </section>

      {/* VISUAL */}
      <section className="mt-20">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <img
            src={globalAIGovernanceHero}
            alt="Agentic Execution Governance — CoreIdentity"
            className="w-full object-cover"
          />
          <div className="px-6 py-4 text-sm text-white/50 text-center">
            <span className="mx-auto block max-w-md">
              Every agent action. Every policy boundary. Every audit trail. Governed at machine speed.
            </span>
          </div>
        </div>
      </section>

      {/* AEG CATEGORY DEFINITION */}
      <section className="mt-20">
        <div className="max-w-3xl">
          <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-4">
            DEFINING THE CATEGORY
          </div>
          <h2 className="text-3xl font-semibold tracking-tight mb-6">
            Agentic Execution Governance
          </h2>
          <p className="text-white/70 leading-relaxed text-lg">
            AEG is the infrastructure discipline that governs autonomous AI at the
            execution layer — not through dashboards or after-the-fact monitoring,
            but through deterministic enforcement embedded in the execution chain
            itself. Every agent action is authorized before it executes, attributed
            to a verified identity, bounded by codified policy, and recorded in an
            immutable audit trail. CoreIdentity builds and operates the AEG stack.
          </p>
        </div>
      </section>

      {/* ENFORCEMENT STACK */}
      <section className="mt-20">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-8">
          THE ENFORCEMENT STACK
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
            <Link to="/sal" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
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
            <Link to="/sentinel" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              Sentinel →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">IDENTITY</div>
            <div className="text-lg font-semibold mb-3">Agent Identity Systems</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Every agent needs an identity it can prove. Authentication,
              authorization, provenance, and attribution — enforced at the
              execution layer, not bolted on after the fact.
            </p>
            <Link to="/agentidentity-systems" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              Agent Identity Systems →
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
            <Link to="/nexus" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              Nexus →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">DIGITAL LABOR</div>
            <div className="text-lg font-semibold mb-3">SmartNation AI</div>
            <p className="text-white/60 text-sm leading-relaxed">
              10,000 governed agents across eight verticals. Pre-built,
              compliance-ready digital labor — deployed under full AEG
              enforcement from day one.
            </p>
            <Link to="/smartnation-ai" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              SmartNation AI →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">CRYPTOGRAPHIC POSTURE</div>
            <div className="text-lg font-semibold mb-3">Quantum Hardening</div>
            <p className="text-white/60 text-sm leading-relaxed">
              The first AI governance platform to complete post-quantum
              cryptographic hardening across the full enforcement stack.
              FIPS 203, 204, and 205. Every surface — not just the perimeter.
            </p>
            <Link to="/quantum-hardening" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              Quantum Hardening →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">AUTONOMOUS OPERATIONS</div>
            <div className="text-lg font-semibold mb-3">AGO — Autonomous Governance Orchestrator</div>
            <p className="text-white/60 text-sm leading-relaxed">
              The internal operating agent running under full AEG enforcement —
              and the validated pilot pattern for every enterprise deployment that follows.
              Governance demonstrated, not just described.
            </p>
            <Link to="/ago-1" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              AGO →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widests mb-2">ADVISORY</div>
            <div className="text-lg font-semibold mb-3">CoreIdentity Advisory Group</div>
            <p className="text-white/60 text-sm leading-relaxed">
              AI governance frameworks, regulatory compliance roadmaps, and enterprise
              implementation strategy for organizations navigating the agentic AI
              regulatory landscape.
            </p>
            <Link to="/coreidentity-ai-advisory-group" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              CIAG →
            </Link>
          </div>

        </div>
      </section>

      {/* ENTRY-LEVEL PRODUCTS */}
      <section className="mt-20">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-8">
          ENTRY-LEVEL PRODUCTS
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">THREAT VISIBILITY</div>
            <a href="https://shadowscan.coreidentitygroup.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold mb-3 hover:text-blue-400 transition block">ShadowScan →</a>
            <p className="text-white/60 text-sm leading-relaxed">
              Autonomous discovery of unsanctioned AI activity across your enterprise environment.
              Identify agents, models, and integrations operating without governance coverage —
              before they create liability.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">CRYPTOGRAPHIC HYGIENE</div>
            <a href="https://clearshield.coreidentitygroup.com" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold mb-3 hover:text-blue-400 transition block">ClearShield →</a>
            <p className="text-white/60 text-sm leading-relaxed">
              Cryptographic posture assessment and remediation for enterprise AI deployments.
              Identify classical algorithm exposure, map quantum-vulnerable surfaces, and
              receive a prioritized hardening roadmap aligned to NIST FIPS 203, 204, and 205.
            </p>
          </div>
        </div>
      </section>

      {/* PARTNERSHIPS & CERTIFICATIONS */}
      <section className="mt-20">
        <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-6">
          PARTNERSHIPS &amp; CERTIFICATIONS
        </div>
        <div className="flex flex-wrap gap-4 items-center">
          {/* Google Cloud Partner Network — placeholder until Partner Marketing Studio access */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            background: '#0d1117',
            border: '1px solid rgba(66, 133, 244, 0.35)',
            borderRadius: '10px',
            padding: '10px 18px',
          }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" fill="#4285F4"/>
            </svg>
            <div>
              <div style={{ color: '#4285F4', fontSize: '11px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Google Cloud Partner Network
              </div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '10px', marginTop: '2px' }}>
                Official badge pending Partner Marketing Studio access
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING STATEMENT */}
      <section className="mt-20">
        <div className="rounded-2xl border border-white/10 bg-black/30 p-10 max-w-3xl">
          <p className="text-xl text-white/80 leading-relaxed font-light">
            Autonomous AI is not a future risk. It is a present operational
            reality. The enterprises that govern it correctly today will be the
            ones that scale it with confidence tomorrow. CoreIdentity is the
            infrastructure that makes that possible.
          </p>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
            >
              Request a Briefing
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
