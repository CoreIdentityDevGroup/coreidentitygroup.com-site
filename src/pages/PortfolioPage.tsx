import React from "react";
import { Card, PageTitle, SectionTitle } from "../components/ui";

const CANONICAL = "Core Holding Corporation is the parent organization that builds and governs infrastructure for agentic digital labor through CoreIdentity Technologies\u2014a platform delivering a three-layer governed execution stack consisting of Sentinel OS, Nexus OS, and SmartNation AI, supported by CoreIdentity Advisory Group and AgentIdentity Systems.";

export function PortfolioPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <PageTitle>Portfolio</PageTitle>
        <p className="text-white/70 max-w-3xl">{CANONICAL}</p>
      </div>

      <section className="space-y-5">
        <SectionTitle>Corporate Portfolio</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          <Card><div className="text-xl font-semibold">CoreIdentity Technologies</div><div className="mt-2 text-white/70">Platform company delivering the governance-first execution stack for safe, auditable AI operations.</div><a className="mt-4 inline-block text-blue-300 hover:text-blue-200" href="/coreidentity-technologies">Learn More</a></Card>
          <Card><div className="text-xl font-semibold">Sentinel OS</div><div className="mt-2 text-white/70">Governance layer enforcing policy, approvals, and evidence capture for autonomous systems.</div><a className="mt-4 inline-block text-blue-300 hover:text-blue-200" href="/sentinel-os">Learn More</a></Card>
          <Card><div className="text-xl font-semibold">Nexus OS</div><div className="mt-2 text-white/70">Orchestration layer coordinating workflows, integrations, and recovery under governance constraints.</div><a className="mt-4 inline-block text-blue-300 hover:text-blue-200" href="/nexus-os">Learn More</a></Card>
          <Card><div className="text-xl font-semibold">SmartNation AI</div><div className="mt-2 text-white/70">Digital labor layer deploying governed AI workers executing real-world operational processes.</div><a className="mt-4 inline-block text-blue-300 hover:text-blue-200" href="/smartnation-ai">Learn More</a></Card>
          <Card><div className="text-xl font-semibold">CoreIdentity Advisory Group</div><div className="mt-2 text-white/70">Advisory arm providing readiness assessment, pilot design, and governance deployment strategies.</div><a className="mt-4 inline-block text-blue-300 hover:text-blue-200" href="/coreidentity-advisory-group">Learn More</a></Card>
          <Card><div className="text-xl font-semibold">AgentIdentity Systems</div><div className="mt-2 text-white/70">Identity and accountability R&amp;D.</div><a className="mt-4 inline-block text-blue-300 hover:text-blue-200" href="/agentidentity-systems">Learn More</a></Card>
        </div>
      </section>
    </div>
  );
}
