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
// CIDG_CONTENT_ALIGNMENT_V730_R9
export function AboutPage() {
  return (
    <div className="space-y-10">
      <Helmet>
        <title>About | CoreIdentity</title>
        <meta name="description" content="CoreIdentity Development Group is the architect of the Governance Ecosystem for the Autonomous Era and the Trust Infrastructure that enables institutions to safely delegate autonomous execution while preserving authority, accountability, trust, and control." />
      </Helmet>

      {/* Header */}
      <div className="space-y-3">
        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>
        <PageTitle>About Us</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          CoreIdentity Development Group Inc. is the architect of the Governance Ecosystem for the
          Autonomous Era. We build the Trust Infrastructure that enables institutions to embrace
          autonomous execution while preserving authority, accountability, trust, and control.
        </p>
      </div>

      {/* Mission */}
      <section className="space-y-5">
        <SectionTitle>Our Mission</SectionTitle>
        <Card>
          <p className="text-white/85 leading-relaxed">
            Our mission is to establish Trust Infrastructure as foundational infrastructure for the
            Autonomous Era—enabling institutions worldwide to increase autonomy without surrendering control.
          </p>
        </Card>
      </section>

      {/* Vision */}
      <section className="space-y-5">
        <SectionTitle>Our Vision</SectionTitle>
        <Card>
          <p className="text-white/85 leading-relaxed">
            An autonomous era in which institutions can expand machine execution without surrendering
            human authority, institutional accountability, or control. Governance must operate
            continuously through execution, not remain upstream from it.
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
                <div className="text-xs text-blue-400">Governance Architecture & IP</div>
                <p className="text-xs text-white/55 mt-1">
                  Governance architecture, intellectual property, and the technical systems
                  that support production Trust Infrastructure.
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
            CoreIdentity applies its governance principles to autonomous operations: authority,
            policy, identity, execution boundaries, evidence, and accountability remain connected
            throughout the execution lifecycle. This operating discipline informs how we design
            Trust Infrastructure for institutional environments.
          </p>
        </Card>
      </section>
</div>
  );
}
