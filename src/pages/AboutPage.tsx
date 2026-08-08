// CIDG_GOOGLE_COMPLIANCE_ABOUT_v1
import React from "react";
import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";
import { Helmet } from "react-helmet-async";

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
              CoreIdentity Development Group Inc. operates through two dedicated subsidiaries,
              structured for institutional-grade operations:
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
Our Governance Ecosystem is engineered to perform under continuous adversarial conditions, maintaining institutional control, verifiable accountability, and execution integrity as autonomous systems operate at machine speed.
              across Security, Post-Quantum, Compliance, Disaster Recovery, and Adversarial suites.
            </p>
          </div>
        </Card>
      </section>

      {/* Autonomous Operations */}
      <section className="space-y-5">
        <SectionTitle>Autonomous Operations</SectionTitle>
        <Card>
          <p className="text-white/75 leading-relaxed">
            CoreIdentity uses governed autonomous agents to assist in corporate operations —
            the same infrastructure we deploy for enterprise clients. Every agent operates
            under the same policy enforcement, identity management, and audit trail
            requirements we deliver to our clients. This is strategic dogfooding: we run our
            own governance stack at scale so we understand exactly what our customers face.
          </p>
        </Card>
      </section>
</div>
  );
}
