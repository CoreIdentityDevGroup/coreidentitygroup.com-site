// CIDG_VERTICAL_HEALTHCARE_v1
import React from "react";
import { Card, Section, SectionTitle, ButtonLink } from "../components/ui";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function HealthcareGovernancePage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Healthcare AI Governance | CoreIdentity</title>
        <meta
          name="description"
          content="CoreIdentity enforces HIPAA-compliant agent governance across your entire autonomous workforce — so your compliance team is not discovering PHI violations after the fact."
        />
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-white/50">
          Healthcare · HIPAA · HITECH · OCR Enforcement
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          PHI Never Touches an Unauthorized Agent.
        </h1>
        <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
          When OCR investigates a breach, the first question is not what system failed —
          it is what the AI agent was authorized to access, why it accessed it, and
          whether there is a cryptographic record proving it stayed within bounds.
          CoreIdentity answers all three before the investigation begins.
        </p>
        <div className="flex gap-3 pt-2">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition"
          >
            Schedule a Governance Assessment →
          </Link>
          <Link
            to="/quantum-hardening"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
          >
            View Post-Quantum Posture
          </Link>
        </div>
      </div>

      {/* ── Regulatory Reality ──────────────────────────────────────────── */}
      <Section>
        <SectionTitle>The Regulatory Reality</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold text-amber-400 uppercase tracking-wide mb-2">HIPAA / HITECH</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Every agent that touches PHI must operate under a documented authorization chain.
              A missing audit trail is not a gap — it is prima facie evidence of a violation.
              OCR civil monetary penalties reached $135M in 2024.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-amber-400 uppercase tracking-wide mb-2">FDA AI/ML Guidance</div>
            <p className="text-white/70 text-sm leading-relaxed">
              The FDA's predetermined change control plan framework requires that autonomous
              clinical AI systems demonstrate bounded behavior, traceable decisions, and
              human oversight at defined escalation thresholds.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-amber-400 uppercase tracking-wide mb-2">42 CFR / Substance Use</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Substance use disorder records carry stricter protections than standard PHI.
              An AI agent that accesses, routes, or acts on 42 CFR data without explicit
              patient authorization creates immediate federal exposure.
            </p>
          </Card>
        </div>
      </Section>

      {/* ── What CoreIdentity Enforces ──────────────────────────────────── */}
      <Section>
        <SectionTitle>What CoreIdentity Enforces</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-lg font-semibold mb-2">PHI Access Boundaries</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Sentinel OS enforces data classification at the agent level. No agent accesses
              PHI without an active, scoped authorization — regardless of what the underlying
              model was prompted to do.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold mb-2">Cryptographic Audit Trails</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Every agent action involving protected data generates a SAL-signed proof artifact.
              ML-DSA-65 (FIPS 204) post-quantum signatures ensure the audit record is
              tamper-evident and regulator-ready.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold mb-2">Fail-Closed on Ambiguity</div>
            <p className="text-white/70 text-sm leading-relaxed">
              When an agent encounters an access scenario outside its authorized policy scope,
              Sentinel OS stops the action and escalates to a human operator. The agent does
              not guess. It does not proceed. It stops.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold mb-2">HIPAA-Ready Evidence Packages</div>
            <p className="text-white/70 text-sm leading-relaxed">
              CIAG Phase 0 produces a governance gap analysis mapped to HIPAA administrative,
              physical, and technical safeguard requirements — with a prioritized remediation
              roadmap your compliance team can take directly to legal.
            </p>
          </Card>
        </div>
      </Section>

      {/* ── SAL Trust ───────────────────────────────────────────────────── */}
      <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
        <div className="flex items-center gap-3 mb-3">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-amber-400" aria-hidden="true">
            <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
          <span className="text-sm font-semibold tracking-wide text-amber-400 uppercase">Post-Quantum Cryptographic Infrastructure</span>
        </div>
        <p className="text-sm text-white/70 leading-relaxed">
          CoreIdentity is the first AI governance platform to implement all three NIST FIPS
          post-quantum standards — ML-DSA-65 (FIPS 204), ML-KEM-768 (FIPS 203), and
          SLH-DSA-128s (FIPS 205) — in production. Healthcare organizations planning
          5-year infrastructure commitments can deploy CoreIdentity with confidence that
          the cryptographic surface is already quantum-hardened.
        </p>
        <Link to="/quantum-hardening" className="mt-3 inline-flex items-center gap-1 text-sm text-amber-400/80 hover:text-amber-400 transition">
          View full quantum hardening posture →
        </Link>
      </div>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <Section>
        <Card>
          <div className="text-center space-y-4 py-4">
            <div className="text-xl font-semibold">Ready to Close Your Healthcare Governance Gap?</div>
            <p className="text-white/70 text-sm max-w-xl mx-auto">
              CIAG Phase 0 delivers a HIPAA-mapped governance gap analysis, regulatory
              exposure assessment, and prioritized enforcement roadmap — scoped to your
              AI fleet, not a generic framework.
            </p>
            <ButtonLink to="/ciag">Schedule a Phase 0 Assessment</ButtonLink>
          </div>
        </Card>
      </Section>
    </div>
  );
}
