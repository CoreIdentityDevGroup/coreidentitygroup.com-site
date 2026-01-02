import React from "react";
import { Card, PageTitle, SectionTitle } from "../components/ui";

export function AboutPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <PageTitle>About</PageTitle>
        <p className="text-white/70 max-w-3xl">
          Core Holding Corporation is the parent organization that builds and governs infrastructure for agentic digital labor through CoreIdentity Technologies—a platform delivering a three-layer governed execution stack consisting of Sentinel OS, Nexus OS, and SmartNation AI, supported by CoreIdentity AI Advisory Group and AgentIdentity Systems.
        </p>
      </div>

      <section className="space-y-5">
        <SectionTitle>Our Mission</SectionTitle>
        <Card>
          Build the infrastructure for governed AI execution—so organizations can deploy agentic digital labor without losing control.
        </Card>
      </section>

      <section className="space-y-5">
        <SectionTitle>Founder &amp; CEO</SectionTitle>
        <Card>
          <div className="text-lg font-semibold">Todd Morgan</div>
          <div className="mt-2 text-white/75 leading-relaxed">
            Todd founded Core Holding Corporation to address the governance gap in AI deployment—ensuring autonomous systems operate inside policy,
            approvals, identity boundaries, and evidence requirements. His focus is making governed execution deployable in regulated and mission-critical environments.
          </div>
        </Card>
      </section>
    </div>
  );
}
