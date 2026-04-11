// src/pages/HomePage.tsx
import { Link } from "@tanstack/react-router";
import globalAIGovernanceHero from "../assets/images/global-ai-governance-hero.webp";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      {/* HERO */}
      <section className="max-w-4xl">
        <h1 className="text-5xl font-semibold tracking-tight">
          Governance infrastructure
          <br />
          for agentic execution.
        </h1>



          {/* Governance Portal CTA */}
          <a
            href="https://portal.coreidentitygroup.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.35)',
              borderRadius: '8px',
              color: '#d4af37',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.02em',
              marginTop: '16px',
              transition: 'all 0.15s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            CoreIdentity Governance Portal →
          </a>        {/* Kicker tagline (non-duplicate) */}
        <div className="mt-8 text-xs font-medium tracking-[0.22em] text-white/50">
          GOVERNANCE AT THE EXECUTION LAYER
        </div>

        {/* Main paragraph (updated to lead into the image below) */}
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
          Your AI agents are making consequential decisions across your business right now. CoreIdentity is the enforcement infrastructure that ensures every agent action stays within the boundaries your organization authorized — and generates the audit trail your regulators and board require. Before something goes wrong.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            to="/coreidentity-technologies"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            Explore CoreIdentity Technologies
          </Link>

          <Link
  to="/contact"
  className="inline-flex items-center justify-center rounded-xl border border-white/15 px-6 py-3 text-sm font-medium hover:bg-white/5 transition"
>
  Request additional Information
</Link>
        </div>
      </section>

      {/* GLOBAL GOVERNANCE VISUAL (image overlay text stays untouched) */}
      <section className="mt-20">
        <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/30">
          <img
            src={globalAIGovernanceHero}
            alt="Global AI governance and controlled agentic execution"
            className="w-full object-cover"
          />
          <div className="px-6 py-4 text-sm text-white/60 text-center">
  <span className="mx-auto block max-w-md">
    Every agent action. Every policy boundary. Every audit trail. Governed at machine speed.
  </span>
</div>
        </div>
      </section>

      {/* RESTORED: Section list/cards below the image */}
      <section className="mt-14">
        <div className="grid gap-6">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="text-lg font-semibold">Policy-first</div>
              <p className="mt-3 text-white/70 leading-relaxed">
                Define what AI can and cannot do—then enforce it with explicit
                constraints, approvals, and guardrails.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="text-lg font-semibold">Audit-ready</div>
              <p className="mt-3 text-white/70 leading-relaxed">
                Capture traceable evidence of inputs, actions, approvals, and
                outcomes—built for review, compliance, and trust.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
              <div className="text-lg font-semibold">Operational</div>
              <p className="mt-3 text-white/70 leading-relaxed">
                Move from demos to real execution with controls that survive
                production complexity, incidents, and change.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
            <div className="text-lg font-semibold">Next step</div>
            <p className="mt-3 text-white/70 leading-relaxed">
              Start with the governed execution stack—Sentinel OS (governance),
              Nexus OS (orchestration), and SmartNation AI (deployment). We keep
              authority explicit: humans lead, machines execute, governance
              protects both.
            </p>
          </div>
        </div>
      </section>

      {/* AIS + PQC highlights */}
      <section className="mt-14">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-indigo-400/20 bg-indigo-400/5 p-6">
            <div className="text-xs font-medium tracking-widest text-indigo-400 mb-3">LIVE — 30-DAY SOAK TEST</div>
            <div className="text-lg font-semibold mb-2">Agent Identity Systems</div>
            <p className="text-white/70 leading-relaxed text-sm mb-3">Every agent needs an identity it can prove. AIS delivers authentication, authorization, provenance, and attribution — enforced at the execution layer.</p>
            <div className="flex gap-6 mb-3">
              <div><div className="text-xl font-bold text-indigo-300">32,784+</div><div className="text-xs text-white/50">soak cycles</div></div>
              <div><div className="text-xl font-bold text-indigo-300">100%</div><div className="text-xs text-white/50">pass rate</div></div>
              <div><div className="text-xl font-bold text-indigo-300">99ms</div><div className="text-xs text-white/50">p95 latency</div></div>
            </div>
            <a href="/agentidentity-systems" className="text-sm text-indigo-400 hover:text-indigo-300 transition">Explore AIS →</a>
          </div>

          <div className="rounded-2xl border border-teal-400/20 bg-teal-400/5 p-6">
            <div className="text-xs font-medium tracking-widest text-teal-400 mb-3">VERIFIED — FIPS 203/204/205</div>
            <div className="text-lg font-semibold mb-2">Quantum Hardening</div>
            <p className="text-white/70 leading-relaxed text-sm mb-3">First AI governance platform to complete post-quantum cryptographic hardening across the full enforcement stack. Every cryptographic surface — not just the perimeter.</p>
            <div className="flex gap-6 mb-3">
              <div><div className="text-xl font-bold text-teal-300">100,000</div><div className="text-xs text-white/50">soak cycles</div></div>
              <div><div className="text-xl font-bold text-teal-300">376/376</div><div className="text-xs text-white/50">tests passed</div></div>
              <div><div className="text-xl font-bold text-teal-300">Jul 2026</div><div className="text-xs text-white/50">declaration</div></div>
            </div>
            <a href="/quantum-hardening" className="text-sm text-teal-400 hover:text-teal-300 transition">Explore PQC →</a>
          </div>
        </div>
      </section>
    </div>
  );
}
