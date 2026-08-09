import React from "react";
import { Card, PageHero, Section, SectionTitle, ButtonLink } from "../components/ui";
import { Helmet } from "react-helmet-async";

export function CoreIdentityAdvisoryGroupPage() {
  return (
    <div>
      <Helmet>
        <title>CIAG — Provable AI Decision Governance Advisory | CoreIdentity</title>
        <meta
          name="description"
          content="CoreIdentity Advisory Group delivers AI governance frameworks, regulatory compliance roadmaps, and enterprise implementation strategy for regulated organizations deploying agentic AI at scale."
        />
      </Helmet>

      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent mb-3">
        CoreIdentity Advisory Group
      </p>
      <PageHero
        title="Your Agents Are Acting. Can You Prove They Acted Within Bounds?"
        subtitle="When a regulator, auditor, or board asks what your AI agents did — and why — CIAG ensures you have a defensible answer. We work with regulated enterprises to close enforcement gaps, architect governance frameworks, and deploy the audit infrastructure that turns AI liability into AI accountability."
      />

      {/* ── What We Do ─────────────────────────────────────────── */}
      <Section>
        <SectionTitle>What We Do</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Executive AI Readiness and Risk Review</div>
              <p className="text-ink-secondary leading-relaxed">
                A governance-first assessment that clarifies where AI creates leverage, where it creates legal, regulatory, and reputational exposure, and what should not be automated. Produces a practical decision framework with executive-ready deliverables.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Govern Your Existing AI Fleet</div>
              <p className="text-ink-secondary leading-relaxed">
                For organizations already operating AI agents: CIAG deploys the complete CoreIdentity Governance Infrastructure around your existing fleet — enforcing policy, establishing cryptographic agent identity, and generating the audit evidence your regulators and board require. No replatforming. No agent replacement. Complete governance from day one.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Pilot Readiness and Control Blueprint</div>
              <p className="text-ink-secondary leading-relaxed">
                A structured engagement that defines scope boundaries, success metrics, evidence requirements, escalation triggers, and termination thresholds — so AI pilots are operationally safe, audit-ready, and executive-readable from day one.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Regulatory Evidence Automation</div>
              <p className="text-ink-secondary leading-relaxed">
                Every governed agent action produces a cryptographically signed audit record. CIAG engagements include evidence architecture design so that governance artifacts satisfy EU AI Act, NIST AI RMF, HIPAA, SOX, and SEC reporting requirements automatically.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* ── Engagement Model ────────────────────────────────────── */}
      <Section>
<SectionTitle>Engagement Model</SectionTitle>
        <p className="text-ink-secondary mb-6 max-w-2xl">
          Every CIAG engagement follows a structured progression. Each phase builds on the last — establishing governance foundation before expanding to platform deployment and enterprise scale.
        </p>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-accent">PHASE 0</span>
              </div>
              <div className="text-xl font-semibold">Governance Diagnostic</div>
              <p className="text-ink-secondary leading-relaxed text-sm">
                90-day advisory engagement. AI risk assessment, regulatory gap analysis, governance architecture design, and a deployment roadmap with prioritized controls.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-accent">PHASE 1</span>
              </div>
              <div className="text-xl font-semibold">Platform Deployment</div>
              <p className="text-ink-secondary leading-relaxed text-sm">
                Full deployment of the CoreIdentity governance stack across your AI fleet. Live enforcement, real-time audit trails, and regulatory evidence automation.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-accent">PHASE 2</span>
              </div>
              <div className="text-xl font-semibold">Enterprise Scale</div>
              <p className="text-ink-secondary leading-relaxed text-sm">
                Autonomous governance orchestration across enterprise AI infrastructure. Board-level reporting, continuous compliance monitoring, and regulatory evidence packages.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold tracking-widest text-accent">PHASE 3</span>
              </div>
              <div className="text-xl font-semibold">Governance Retainer</div>
              <p className="text-ink-secondary leading-relaxed text-sm">
                Ongoing executive governance support to maintain institutional controls, address emerging autonomous-execution risks, and keep governance architecture aligned with operational and regulatory change.
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
              <p className="text-ink-secondary leading-relaxed">
                Organizations operating under EU AI Act, HIPAA, SOX, GDPR, SEC AI guidance, or CMMC requirements where AI governance is a compliance obligation — not a preference.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">AI-Accelerating Organizations</div>
              <p className="text-ink-secondary leading-relaxed">
                Enterprises deploying multi-agent systems, autonomous workflows, or agentic AI at scale who need governance infrastructure that moves as fast as deployment does.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Boards and Executive Teams</div>
              <p className="text-ink-secondary leading-relaxed">
                Leadership teams seeking defensible AI oversight frameworks, board-level reporting structures, and the audit evidence needed to satisfy investors, regulators, and counsel.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Post-Incident Organizations</div>
              <p className="text-ink-secondary leading-relaxed">
                Organizations that have experienced an AI-related incident, audit finding, or regulatory inquiry and need to establish governed AI operations before the next enforcement action.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <Section>
        <div className="rounded-3xl border border-accent/20 bg-accent/5 p-8 md:p-12 text-center">
          <p className="text-xs font-bold tracking-widest text-accent mb-3 uppercase">
            Advisory Intake — August 2026
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink mb-4">
            Request a Discovery Session
          </h2>
          <p className="text-ink-secondary max-w-xl mx-auto mb-8 leading-relaxed">
            CoreIdentity is currently scheduling Phase 0 discovery sessions beginning August 2026. Complete the advisory intake to reserve your place and receive a recommended engagement path based on your organization's AI landscape and regulatory environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://advisory.coreidentitygroup.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent-strong text-carbon font-semibold text-sm tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/25"
            >
              Begin Advisory Intake
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </Section>

    </div>
  );
}
