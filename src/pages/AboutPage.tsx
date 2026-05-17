// CIDG_GOOGLE_COMPLIANCE_ABOUT_v1
import React from "react";
import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";

/**
 * AboutPage (About Us)
 * Google Compliance Sprint — Gap 4: Team & Organizational Depth
 * Establishes: Mission, Vision, corporate structure, leadership credentials,
 * autonomous agent operations, and infrastructure partner ecosystem.
 */
export function AboutPage() {
  return (
    <div className="space-y-10">

      {/* Header */}
      <div className="space-y-3">
        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>
        <PageTitle>About Us</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          CoreIdentity Development Group Inc. is the governance infrastructure company
          for the agentic AI era — building the control plane that enterprises need to
          deploy autonomous AI at scale without losing compliance, accountability, or control.
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
                  across AWS ECS, GKE, and Cloudflare.
                </p>
              </div>
            </div>
            <p className="text-xs text-white/45 pt-1">
              The platform is live in production with 734/734 Platinum-grade tests passing
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
                  Todd founded CoreIdentity Development Group Inc. to close the governance gap
                  in agentic AI deployment — ensuring autonomous systems operate inside policy,
                  identity, and accountability boundaries at enterprise scale.
                </p>
                <p>
                  He brings over 20 years of leadership experience managing a $65M+ federal
                  contract portfolio spanning national intelligence and DoD sectors. His
                  background in mission-critical operational environments — FBI, TSA, FEMA,
                  and DoD — directly informs CoreIdentity's infrastructure-grade,
                  compliance-first architecture.
                </p>
                <p>
                  Todd is building CoreIdentity as a category-defining, generational company
                  — not for acquisition, but to establish Autonomous Execution Governance as
                  permanent infrastructure for the agentic AI era.
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

    </div>
  );
}
