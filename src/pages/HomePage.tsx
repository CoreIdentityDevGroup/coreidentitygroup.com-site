import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import globalAIGovernanceHero from "../assets/images/global-ai-governance-hero.webp";
import { Helmet } from "react-helmet-async";

// CIDG_GOOGLE_COMPLIANCE_HOMEPAGE_INJECT_v1
// CIDG_SPRINT02_STATS_REMOVED
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
        <title>CoreIdentity — Agentic AI Governance Infrastructure | The Control Layer for Governed AI</title>
        <meta name="description" content="CoreIdentity is the governance infrastructure for the agentic AI era. The enforcement layer governing how autonomous AI agents are deployed, operated, audited, and controlled at enterprise scale." />
      </Helmet>

      {/* VISUAL — top of page */}
      <section className="mb-16">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <img
            src={globalAIGovernanceHero}
            alt="CoreIdentity — Governance Infrastructure for Agentic AI"
            className="w-full object-cover"
          />
          <div className="px-6 py-4 text-sm text-white/50 text-center">
            <span className="mx-auto block max-w-md">
              Every agent action. Every policy boundary. Every audit trail. Governed at machine speed.
            </span>
          </div>
        </div>
      </section>

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
          authorization, and immutable audit — operating at machine speed, before
          something goes wrong.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/governance-infrastructure"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            Governance Infrastructure
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
        <div className="border-l-2 border-teal-500/40 pl-5 space-y-3">
          <p className="text-base leading-relaxed text-white/55 italic">
            CoreIdentity is the only governance infrastructure where post-quantum cryptography,
            formal mathematical policy verification, post-quantum agent identity, deterministic inline
            enforcement, and immutable audit trails operate as a single integrated chain — not assembled
            from components, not layered onto existing systems, but engineered as a unified enforcement
            architecture from the ground up.
          </p>
          <p className="text-base leading-relaxed text-white/55 italic">
            The moat is not any single element. It is the combination no other platform has assembled:
            all three NIST FIPS post-quantum standards (FIPS 203, 204, 205) in production across the
            full enforcement stack. Z3 SMT formal verification detecting policy contradictions and
            generating machine-verifiable proof artifacts before any policy activates. Post-quantum
            agent identity credentials issued by a two-tier PQ-CA. Deterministic pre-execution
            authorization at sub-3ms latency. Cryptographically signed, append-only audit trails
            anchored to a tamper-evident ledger.
          </p>
          <p className="text-base leading-relaxed text-white/55 italic">
            No other platform combines all five. That integration is the infrastructure layer regulated
            enterprises need when the standard is not eventual compliance — it is provable compliance
            at execution time.
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
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">of enterprises have unknown AI agents — CoreIdentity closes the gap (CSA, Jan 2026)</div>
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
          <div className="flex-1 sm:pl-8">
            <div className="text-2xl font-bold text-teal-400">Enforcement-First</div>
            <div className="text-xs text-white/45 tracking-widest mt-1 uppercase">Governance that runs before the API call — not after the audit</div>
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
            immutable audit trail. CoreIdentity builds and operates the AEG
            enforcement architecture.
          </p>
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
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">IDENTITY</div>
            <div className="text-lg font-semibold mb-3">Agent Identity Systems</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Every agent needs an identity it can prove. Post-quantum authentication,
              authorization, provenance, and attribution — enforced at the
              execution layer, not bolted on after the fact.
            </p>
            <Link to="/agentidentity-systems" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              Agent Identity Systems →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">AUTONOMOUS OPERATIONS</div>
            <div className="text-lg font-semibold mb-3">AGO — Autonomous Governance Orchestrator</div>
            <p className="text-white/60 text-sm leading-relaxed">
              The operating agent running under full AEG enforcement —
              and the validated pilot pattern for every enterprise deployment that follows.
              Governance demonstrated, not just described.
            </p>
            <Link to="/ago" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              AGO →
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
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">GOVERNANCE INTERFACE</div>
            <div className="text-lg font-semibold mb-3">MCP Protocol</div>
            <p className="text-white/60 text-sm leading-relaxed">
              Eleven live governance tools through a production MCP server.
              Any MCP-compatible AI client, agent, or orchestration framework
              queries the CoreIdentity enforcement architecture with full policy
              enforcement, namespace isolation, and audit logging on every call.
            </p>
            <Link to="/mcp" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              MCP Protocol →
            </Link>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-sm font-medium text-white/40 tracking-widest mb-2">CRYPTOGRAPHIC POSTURE</div>
            <div className="text-lg font-semibold mb-3">Quantum Hardening</div>
            <p className="text-white/60 text-sm leading-relaxed">
              The first AI governance platform to complete post-quantum
              cryptographic hardening across the full enforcement architecture.
              FIPS 203, 204, and 205. Every surface — not just the perimeter.
            </p>
            <Link to="/quantum-hardening" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
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
            <Link to="/fgre" className="mt-4 inline-flex text-sm text-white/50 hover:text-white transition">
              Formal Governance Verification →
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
          {/* Google Cloud Partner — placeholder until official badge retrieved from Partner Marketing Studio */}
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

    </div>
  );
}
