// CIDG_GOOGLE_COMPLIANCE_ABOUT_v1
import React from "react";
import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";
import { Helmet } from "react-helmet-async";
import InstitutionalVisual from "../components/InstitutionalVisual";

/**
 * AboutPage (About Us)
 * Google Compliance Sprint — Gap 4: Team & Organizational Depth
 * Establishes: Mission, Vision, corporate structure, leadership credentials,
 * autonomous agent operations, and infrastructure partner ecosystem.
 */
export function AboutPage() {
  return (
    <div className="space-y-10">
      <Helmet>
        <title>About | CoreIdentity</title>
        <meta name="description" content="CoreIdentity Development Group builds institutional trust infrastructure for autonomous systems — making every AI decision provable for regulated enterprises and sovereign institutions." />
      </Helmet>

      {/* Header */}
      <div className="space-y-3">
        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>
        <PageTitle>About Us</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          CoreIdentity Development Group Inc. builds institutional trust infrastructure for
          autonomous systems — the infrastructure organizations need to prove their AI agents
          acted correctly: authorized, attributed, and auditable, without losing compliance or control.
        </p>
      </div>

      {/* Mission */}
      <section className="space-y-5">
        <SectionTitle>Our Mission</SectionTitle>
        <Card>
          <p className="text-white/85 leading-relaxed">
            To make governed autonomous execution the standard — not the exception. We build
            infrastructure that ensures every AI agent decision is authorized, auditable, and
            defensible under the regulatory frameworks our clients operate in.
          </p>
        </Card>
      </section>

      {/* Vision */}
      <section className="space-y-5">
        <SectionTitle>Our Vision</SectionTitle>
        <Card>
          <p className="text-white/85 leading-relaxed">
            A world where enterprises deploy autonomous AI at the speed of business — with
            full confidence that agents operate inside policy, identity, and accountability
            boundaries. CoreIdentity is building the foundational layer that makes that world
            possible at institutional scale.
          </p>
        </Card>
      </section>

      {/* Corporate Structure */}
      <section className="space-y-5">
        <SectionTitle>Corporate Structure</SectionTitle>
        <Card>
          <div className="space-y-4 text-white/75 leading-relaxed">
            <p>
              CoreIdentity Development Group Inc. is a Wyoming C-Corporation with two
              Virginia operating subsidiaries structured for institutional-grade operations:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
              <div className="p-4 rounded-lg border border-white/10 bg-white/3 space-y-1">
                <div className="text-sm font-semibold text-white">CoreIdentity Advisory Group</div>
                <div className="text-xs text-blue-400">Advisory Services</div>
                <p className="text-xs text-white/55 mt-1">
                  Governance advisory, CIAG engagements, and enterprise consulting for
                  regulated and mission-critical AI deployments.
                </p>
              </div>
              <div className="p-4 rounded-lg border border-white/10 bg-white/3 space-y-1">
                <div className="text-sm font-semibold text-white">CoreIdentity Technologies</div>
                <div className="text-xs text-blue-400">Platform Engineering & IP</div>
                <p className="text-xs text-white/55 mt-1">
                  Platform engineering, intellectual property, and production infrastructure
                  across AWS ECS Fargate and Cloudflare.
                </p>
              </div>
            </div>
            <p className="text-xs text-white/45 pt-1">
              The platform is live in production with a Platinum Test Suite under continuous adversarial validation
              across Security, Post-Quantum, Compliance, Disaster Recovery, and Adversarial suites.
            </p>
          </div>
        </Card>
      </section>

      {/* Leadership */}
      <section className="space-y-5">
        <SectionTitle>Leadership</SectionTitle>
        <Card>
          <div className="space-y-5">
            <div>
              <div className="text-lg font-bold text-white">Todd Morgan</div>
              <div className="text-sm text-blue-400 mt-0.5">Founder &amp; Chief Executive Officer</div>
              <div className="mt-4 space-y-3 text-white/72 leading-relaxed">
                <p>
                  CoreIdentity Development Group Inc. was founded to solve a problem most
                  organizations don't yet know they have — and that no existing platform is
                  built to address.
                </p>
                <p>
                  Founder and CEO Todd Morgan brings a career spanning more than 30 years,
                  including extensive support to the National Intelligence Community and the
                  Department of Defense across a variety of roles — including the management of
                  a multi-million dollar portfolio of federal contracts. That experience
                  produced a direct understanding of what institutional accountability actually
                  requires in environments where governance is not optional.
                </p>
                <p>
                  CoreIdentity reflects that understanding. It was built from the inside out —
                  by someone who has operated within the institutions that need this
                  infrastructure, to meet the standards those institutions actually enforce.
                </p>
                <p>
                  The gaps CoreIdentity addresses are not theoretical. They are gaps Todd
                  encountered firsthand — in environments where the absence of proper governance
                  infrastructure carries real consequences.
                </p>
                <p>
                  The company is building for the long term — establishing institutional trust
                  infrastructure for autonomous systems as a permanent and essential layer of
                  the agentic era.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* Autonomous Operations */}
      <section className="space-y-5">
        <SectionTitle>Autonomous Operations</SectionTitle>
        <Card>
          <div className="space-y-4">
            <p className="text-white/75 leading-relaxed">
              CoreIdentity operates a production fleet of 20 autonomous agents — governed by
              the same infrastructure we deploy for enterprise clients. This is strategic
              dogfooding: we run our own governance stack at scale so we understand exactly
              what our customers face.
            </p>
            <div className="grid grid-cols-3 gap-3 mt-2">
              <div className="text-center p-3 rounded-lg border border-white/10 bg-white/4">
                <div className="text-2xl font-bold text-blue-400">6</div>
                <div className="text-xs text-white/55 mt-1 leading-tight">Awareness<br/>Agents</div>
              </div>
              <div className="text-center p-3 rounded-lg border border-white/10 bg-white/4">
                <div className="text-2xl font-bold text-blue-400">6</div>
                <div className="text-xs text-white/55 mt-1 leading-tight">BD / Sales<br/>Agents</div>
              </div>
              <div className="text-center p-3 rounded-lg border border-white/10 bg-white/4">
                <div className="text-2xl font-bold text-blue-400">8</div>
                <div className="text-xs text-white/55 mt-1 leading-tight">Corporate Ops<br/>Agents</div>
              </div>
            </div>
            <p className="text-xs text-white/45 leading-relaxed">
              All 20 agents operate under the same policy enforcement, identity management,
              and audit trail requirements we deliver to enterprise clients.
            </p>
          </div>
        </Card>
      </section>

      {/* Infrastructure Partners */}
      <section className="space-y-5">
        <SectionTitle>Infrastructure Partners</SectionTitle>
        <Card>
          <p className="text-white/65 leading-relaxed mb-4">
            CoreIdentity's production platform is built on enterprise-grade cloud infrastructure
            — the same platforms our clients depend on at scale.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Amazon Web Services", "Google Cloud Platform", "Cloudflare", "Stripe"].map(
              (partner) => (
                <span
                  key={partner}
                  className="px-4 py-2 rounded-lg border border-white/10 bg-white/4 text-white/65 text-sm"
                >
                  {partner}
                </span>
              )
            )}
          </div>
        </Card>
      </section>

      <section className="cidg-platinum-visual-section" aria-label="Governance Ecosystem architecture">
        <InstitutionalVisual src="/images/visuals/governance-ecosystem-3d.webp" alt="CoreIdentity Governance Ecosystem integrating Trust Infrastructure, Autonomous Execution Governance, the Institutional Chain of Legitimacy and Autonomous Governed Execution." className="cidg-platinum-visual--ecosystem" />
      </section>

    </div>
  );
}
