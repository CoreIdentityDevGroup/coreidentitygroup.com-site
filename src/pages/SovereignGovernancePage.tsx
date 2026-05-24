// CIDG_VERTICAL_SOVEREIGN_v1
import React from "react";
import { Card, Section, SectionTitle, ButtonLink } from "../components/ui";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function SovereignGovernancePage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Sovereign AI Governance | CoreIdentity</title>
        <meta
          name="description"
          content="When an AI agent acts on behalf of a government ministry or sovereign institution, accountability is not merely regulatory — it is constitutional. CoreIdentity's post-quantum infrastructure was built for this requirement."
        />
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-white/50">
          Sovereign Institutions · National AI Strategy · Post-Quantum Infrastructure
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          When an AI Agent Acts on Behalf of a Nation, Accountability Is Constitutional.
        </h1>
        <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
          Sovereign AI deployments — national ministries, central banks, sovereign wealth
          funds, and critical infrastructure operators — face a governance challenge that
          no commercial compliance framework fully addresses. The question is not whether
          the agent followed a policy. It is whether the nation can prove it.
        </p>
        <div className="flex gap-3 pt-2">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition"
          >
            Request a Sovereign Briefing →
          </Link>
          <Link
            to="/layer-d"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
          >
            View Post-Quantum Posture
          </Link>
        </div>
      </div>

      {/* ── The Sovereign Mandate ───────────────────────────────────────── */}
      <Section>
        <SectionTitle>The Sovereign AI Governance Mandate</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-2">Constitutional Accountability</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Government AI agents acting on policy, allocating resources, or making
              enforcement decisions create accountability obligations no private company
              faces. Governance infrastructure must be defensible at the constitutional
              level — not just the regulatory one.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-2">NIST AI RMF + EO 14110</div>
            <p className="text-white/70 text-sm leading-relaxed">
              The NIST AI Risk Management Framework and Executive Order 14110 establish
              the baseline governance requirements for AI in government contexts. CoreIdentity's
              enforcement stack maps directly to the GOVERN, MAP, MEASURE, and MANAGE
              functions of the AI RMF.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-purple-400 uppercase tracking-wide mb-2">Geopolitical Data Sovereignty</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Sovereign nations deploying national AI infrastructure require governance
              that operates within their jurisdictional boundaries — not subject to
              foreign cloud provider terms, third-party data access, or extraterritorial
              legal exposure.
            </p>
          </Card>
        </div>
      </Section>

      {/* ── Post-Quantum ────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
        <div className="flex items-center gap-3 mb-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-amber-400" aria-hidden="true">
            <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="text-sm font-semibold tracking-wide text-amber-400 uppercase">Post-Quantum Cryptographic Infrastructure</span>
        </div>
        <p className="text-sm text-white/70 leading-relaxed mb-2">
          Sovereign AI infrastructure has a 10-20 year deployment horizon. Classical
          cryptography will not survive that window. CoreIdentity is hardened against both
          current and future threats — the only enforcement chain that has implemented all three
          NIST FIPS post-quantum standards in production simultaneously:
        </p>
        <div className="grid gap-2 md:grid-cols-3 mt-3 text-sm">
          <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-3">
            <div className="font-semibold text-amber-400">ML-DSA-65</div>
            <div className="text-white/60">FIPS 204 · Agent identity signing · HSM-backed</div>
          </div>
          <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-3">
            <div className="font-semibold text-amber-400">ML-KEM-768</div>
            <div className="text-white/60">FIPS 203 · Key encapsulation · Live</div>
          </div>
          <div className="rounded-lg border border-amber-400/20 bg-amber-400/5 p-3">
            <div className="font-semibold text-amber-400">SLH-DSA-128s</div>
            <div className="text-white/60">FIPS 205 · Hash-based signatures · Live</div>
          </div>
        </div>
        <Link to="/layer-d" className="mt-4 inline-flex items-center gap-1 text-sm text-amber-400/80 hover:text-amber-400 transition">
          View full cryptographic posture →
        </Link>
      </div>

      {/* ── What CoreIdentity Enforces ──────────────────────────────────── */}
      <Section>
        <SectionTitle>What CoreIdentity Enforces</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-lg font-semibold mb-2">Sovereign Agent Identity</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Every AI agent deployed in a sovereign context receives a post-quantum
              cryptographic identity credential through AIS. No agent operates without
              a traceable, revocable identity — regardless of which LLM or orchestration
              system underlies it.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold mb-2">Policy Enforcement at Constitutional Scale</div>
            <p className="text-white/70 text-sm leading-relaxed">
              SAL enforces policy at the execution layer — not the document layer.
              Governance mandates, ministerial boundaries, and national AI policy
              frameworks are operationalized as deterministic enforcement constraints,
              not aspirational guidelines.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold mb-2">Cross-Ministry Audit Infrastructure</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Every agent action across every ministry deployment generates a signed,
              tamper-evident proof artifact. Parliaments, courts, and oversight bodies
              get a machine-verifiable record — not a narrative reconstruction.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold mb-2">Jurisdictional Data Boundaries</div>
            <p className="text-white/70 text-sm leading-relaxed">
              CoreIdentity's enforcement architecture supports air-gapped and sovereign
              cloud deployments. Data sovereignty is not a configuration option — it is
              an architectural guarantee enforced at the agent execution layer.
            </p>
          </Card>
        </div>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <Section>
        <Card>
          <div className="text-center space-y-4 py-4">
            <div className="text-xl font-semibold">Request a Sovereign AI Governance Briefing</div>
            <p className="text-white/70 text-sm max-w-xl mx-auto">
              CoreIdentity Advisory Group conducts confidential governance briefings for
              sovereign institutions, national AI strategy teams, and critical infrastructure
              operators. Engagements are scoped to your jurisdictional framework and
              constitutional accountability requirements.
            </p>
            <ButtonLink to="/ciag">Request a Briefing</ButtonLink>
          </div>
        </Card>
      </Section>
    </div>
  );
}
