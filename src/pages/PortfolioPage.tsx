import React from "react";
import { Card, PageTitle, SectionTitle } from "../components/ui";

const INTRO =
  "CoreIdentity Development Group Inc. is the parent organization that governs a portfolio of systems and operating capabilities built to enable safe, auditable agentic digital labor. The portfolio is structured to keep governance and control at the center: Sentinel OS defines the rules and evidence requirements, Nexus OS orchestrates controlled execution, and SmartNation AI packages governed deployment patterns. AGO‑1 is our internal operating agent used to harden the stack in real workflows before client exposure.";

function PortfolioCard(props: { title: string; body: string; href: string }) {
  return (
    <Card>
      <div className="space-y-3">
        <div className="text-xl font-semibold">{props.title}</div>
        <p className="text-white/70 leading-relaxed">{props.body}</p>
        <a className="text-blue-100 hover:text-blue-200" href={props.href}>
          Learn More
        </a>
      </div>
    </Card>
  );
}

export function PortfolioPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <PageTitle>Portfolio</PageTitle>
        <p className="text-white/70 max-w-3xl">{INTRO}</p>
      </div>

      <section className="space-y-5">
        <SectionTitle>Core systems and operating capabilities</SectionTitle>

        <div className="grid gap-5 md:grid-cols-2">
          <PortfolioCard
            title="CoreIdentity Technologies"
            href="/coreidentity-technologies"
            body="Platform company that owns and monetizes governed digital labor. Houses product R&D and the execution stack. CoreIdentity is where delivery becomes repeatable."
          />

          <PortfolioCard
            title="Sentinel OS"
            href="/sentinel-os"
            body="Governance layer enforcing policy, approvals, identity boundaries, auditability, and evidence capture. Designed to be fail‑closed when authority or data is missing."
          />

          <PortfolioCard
            title="Nexus OS"
            href="/nexus-os"
            body="Orchestration layer coordinating workflows, integrations, retries, and recovery. Ensures tasks run inside defined controls and produces structured operational traces."
          />

          <PortfolioCard
            title="SmartNation AI"
            href="/smartnation-ai"
            body="Governed deployment surface for packaging and delivering digital labor patterns by industry and use case. Turns hard‑won pilot learnings into reusable catalogs."
          />

          <PortfolioCard
            title="AGO‑1"
            href="/ago-1"
            body="Internal operating agent (non‑client‑facing). Used to augment CoreIdentity Advisory Group operations and to serve as a controlled first pilot pattern for hospitality workflows (starting with Cole Hospitality). Runs under Sentinel + Nexus controls."
          />

          <PortfolioCard
            title="CoreIdentity AI Advisory Group"
            href="/coreidentity-ai-advisory-group"
            body="Advisory capability used to drive early revenue, validate real operational needs, and deliver governance‑first assessments. Feeds learnings back into CoreIdentity’s platform roadmap without becoming the product."
          />

          {/* CHC-MCP-PORTFOLIO-v1 */}
          <PortfolioCard
            title="MCP Protocol"
            href="/mcp"
            body="Production MCP server exposing eleven live governance tools across four tenant namespaces. Any MCP-compatible AI client, agent, or orchestration framework can query the CoreIdentity platform with full policy enforcement, namespace isolation, and audit logging on every call."
          />

          <PortfolioCard
            title="AgentIdentity Systems"
            href="/agentidentity-systems"
            body="Identity and governance-focused system component intended for regulated environments. Designed to be separable as an acquisition-grade capability while remaining compatible with Sentinel OS."
          />
        </div>
      </section>
    </div>
  );
}
