import React from "react";
import { Card, PageHero, Section, SectionTitle, ButtonLink } from "../components/ui";
import { Helmet } from "react-helmet-async";

export function CoreIdentityAdvisoryGroupPage() {
  return (
    <div>
      <Helmet>
        <title>CIAG — AI Governance Advisory | CoreIdentity</title>
        <meta
          name="description"
          content="CoreIdentity Advisory Group delivers AI governance frameworks, regulatory compliance roadmaps, and enterprise implementation strategy for regulated organizations deploying agentic AI at scale."
        />
      </Helmet>

      <p className="text-xs uppercase tracking-wide text-white/60 mb-3">
        CoreIdentity Advisory Group
      </p>
      <PageHero
        title="AI Governance Advisory for Regulated Enterprises"
        subtitle="CIAG works with regulated enterprises deploying agentic AI at scale — from initial governance assessment through enterprise deployment. Every engagement is scoped, evidence-based, and designed to produce defensible outcomes."
      />

      {/* ── What We Do ─────────────────────────────────────────── */}
      <Section>
        <SectionTitle>What We Do</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Executive AI Readiness and Risk Review</div>
              <p className="text-white/70 leading-relaxed">
                A governance-first assessment that clarifies where AI creates leverage, where it creates legal, regulatory, and reputational exposure, and what should not be automated. Produces a practical decision framework with executive-ready deliverables.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Governance-Only Deployment</div>
              <p className="text-white/70 leading-relaxed">
                For organizations that already operate AI systems but lack governance controls: Sentinel and Nexus deploy as a control wrapper restoring policy enforcement, auditability, evidence capture, and safe escalation — without replatforming existing systems.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Pilot Readiness and Control Blueprint</div>
              <p className="text-white/70 leading-relaxed">
                A structured engagement that defines scope boundaries, success metrics, evidence requirements, escalation triggers, and termination thresholds — so AI pilots are operationally safe, audit-ready, and executive-readable from day one.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Regulatory Evidence Automation</div>
              <p className="text-white/70 leading-relaxed">
                Every governed agent action produces a cryptographically signed audit record. CIAG engagements include evidence architecture design so that governance artifacts satisfy EU AI Act, NIST AI RMF, HIPAA, SOX, and SEC reporting requirements automatically.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* ── Engagement Model ────────────────────────────────────── */}
      <Section>
        <SectionTitle>Engagement Model</SectionTitle>
        <p className="text-white/70 mb-6 max-w-2xl">
          Every CIAG engagement follows a structured progression. Each phase builds on the last — establishing governance foundation before expanding to platform deployment and enterprise scale.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-blue-400">PHASE 0</span>
              </div>
              <div className="text-xl font-semibold">Governance Diagnostic</div>
              <p className="text-white/70 leading-relaxed text-sm">
                90-day advisory engagement. AI risk assessment, regulatory gap analysis, governance architecture design, and a deployment roadmap with prioritized controls.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-blue-400">PHASE 1</span>
              </div>
              <div className="text-xl font-semibold">Platform Deployment</div>
              <p className="text-white/70 leading-relaxed text-sm">
                Full deployment of the CoreIdentity governance stack across your AI fleet. Live enforcement, real-time audit trails, and regulatory evidence automation.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-blue-400">PHASE 2</span>
              </div>
              <div className="text-xl font-semibold">Enterprise Scale</div>
              <p className="text-white/70 leading-relaxed text-sm">
                Autonomous governance orchestration across enterprise AI infrastructure. Board-level reporting, continuous compliance monitoring, and regulatory evidence packages.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* ── Who We Work With ────────────────────────────────────── */}
      <Section>
        <SectionTitle>Who We Work With</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Regulated Enterprises</div>
              <p className="text-white/70 leading-relaxed">
                Organizations operating under EU AI Act, HIPAA, SOX, GDPR, SEC AI guidance, or CMMC requirements where AI governance is a compliance obligation — not a preference.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">AI-Accelerating Organizations</div>
              <p className="text-white/70 leading-relaxed">
                Enterprises deploying multi-agent systems, autonomous workflows, or agentic AI at scale who need governance infrastructure that moves as fast as deployment does.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Boards and Executive Teams</div>
              <p className="text-white/70 leading-relaxed">
                Leadership teams seeking defensible AI oversight frameworks, board-level reporting structures, and the audit evidence needed to satisfy investors, regulators, and counsel.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Post-Incident Organizations</div>
              <p className="text-white/70 leading-relaxed">
                Organizations that have experienced an AI-related incident, audit finding, or regulatory inquiry and need to establish governed AI operations before the next enforcement action.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <Section>
        <div className="rounded-2xl bg-gradient-to-br from-blue-950 via-blue-900/60 to-slate-900 border border-blue-800/40 p-8 md:p-12 text-center">
          <p className="text-xs font-bold tracking-widest text-blue-400 mb-3 uppercase">
            Advisory Intake — August 2026
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
            Request a Discovery Session
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
            CoreIdentity is currently scheduling Phase 0 discovery sessions beginning August 2026. Complete the advisory intake to reserve your place and receive a recommended engagement path based on your organization's AI landscape and regulatory environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://advisory.coreidentitygroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25"
            >
              Begin Advisory Intake
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="mailto:advisory@coreidentitygroup.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold text-sm tracking-wide transition-all duration-200"
            >
              advisory@coreidentitygroup.com
            </a>
          </div>
        </div>
      </Section>

    </div>
  );
}
