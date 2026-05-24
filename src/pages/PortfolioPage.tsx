import React from "react";
import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";
import { Helmet } from "react-helmet-async";

const INTRO =
  "CoreIdentity Development Group Inc. builds and operates institutional trust infrastructure for autonomous systems — the systems and operating capabilities that make agentic execution safe, authorized, and auditable. At the foundation is the Semantic Authorization Layer (SAL) — the deterministic enforcement kernel that authorizes every agent execution before it reaches the stack. Above it, Sentinel defines policy, Nexus orchestrates controlled execution, and Agent Identity Systems verifies every agent. AGO validates the governance stack in real operational conditions, and SmartNation AI packages governed deployment patterns for enterprise delivery. CoreIdentity Advisory Group translates the platform into commercial engagements.";

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
      <Helmet>
        <title>Governance Infrastructure | CoreIdentity</title>
        <meta name="description" content="The CoreIdentity enforcement chain — SAL, Sentinel, Nexus, Agent Identity Systems, FGRE, and quantum hardening — that makes every autonomous AI decision provable." />
      </Helmet>
      <div className="space-y-4">
        <Eyebrow>COREIDENTITY DEVELOPMENT GROUP</Eyebrow>
        <PageTitle>Governance Infrastructure</PageTitle>
        <p className="text-white/70 max-w-3xl">{INTRO}</p>
      </div>

      <section className="space-y-5">
        <SectionTitle>Foundational Infrastructure</SectionTitle>
        <p className="text-white/60 text-sm max-w-2xl">The enforcement kernel and cryptographic infrastructure that underpins every system in the stack. Every agent execution passes through SAL before reaching any downstream system.</p>
        <div className="grid gap-5 md:grid-cols-1 max-w-2xl">
          <PortfolioCard
            title="Semantic Authorization Layer (SAL)"
            href="/layer-b"
            body="The deterministic pre-execution authorization kernel at the core of every CoreIdentity deployment. SAL evaluates every agent request across five dimensions — Identity, Intent, Asset, Action, and Context (IIAAC) — before execution is permitted. Every decision generates an immutable Proof Pack anchored to a cryptographic ledger. Fail-closed by design: if SAL is unreachable, execution is blocked."
          />
          <PortfolioCard
            title="Quantum Hardening — FIPS 203/204/205"
            href="/layer-d"
            body="Hardened against both current and future threats. Post-quantum cryptography — ML-KEM-768, ML-DSA-65, and SLH-DSA-128s — runs across SAL, Sentinel, Agent Identity Systems, and Nexus. 100,000 soak cycles. Zero failures."
          />
          <PortfolioCard
            title="Formal Governance Verification (FGRE)"
            href="/layer-b"
            body="The first commercial implementation of formal mathematical governance verification. Z3 SMT solver detects policy contradictions, validates execution paths, and generates SLH-DSA-128s signed proof artifacts before any policy activates. Machine-verifiable. Exportable for regulatory submission and sovereign audit."
          />
        </div>
      </section>

      <section className="space-y-5">
        <SectionTitle>Platform Systems — Execution Workflow</SectionTitle>
        <p className="text-white/60 text-sm max-w-2xl">Systems listed in execution workflow order — the sequence an agent request traverses from authorization through delivery.</p>
        <div className="grid gap-5 md:grid-cols-2">
          <PortfolioCard
            title="Sentinel"
            href="/layer-d"
            body="Governance layer enforcing policy, approvals, identity boundaries, auditability, and evidence capture. Operates above SAL in the enforcement chain. Designed to be fail-closed when authority or data is missing."
          />
          <PortfolioCard
            title="Nexus"
            href="/layer-c"
            body="Orchestration layer coordinating workflows, integrations, retries, and recovery. Ensures tasks run inside defined controls and produces structured operational traces for every execution."
          />
          <PortfolioCard
            title="Agent Identity Systems"
            href="/layer-a"
            body="The identity and accountability infrastructure for autonomous AI. AIS provides cryptographically verifiable agent authentication, policy-linked authorization boundaries, provenance tracking, and audit-grade attribution — enforced at the execution layer. Production-stable with 100,000+ governed endpoint calls validated."
          />
          <PortfolioCard
            title="AGO — Autonomous Governance Orchestrator"
            href="/layer-c"
            body="The operating agent that runs CoreIdentity's governance workflows under full Sentinel and Nexus enforcement. AGO validates fail-closed controls in real operational conditions, produces repeatable governance evidence, and serves as the verified pilot pattern for enterprise deployments."
          />
          <PortfolioCard
            title="SmartNation AI"
            href="/smartnation-ai"
            body="Governed deployment surface for packaging and delivering digital labor patterns across industry verticals. Turns validated governance patterns into reusable catalogs — 10,000 agents across twelve verticals under full CoreIdentity enforcement."
          />
          <PortfolioCard
            title="MCP Protocol"
            href="/layer-d"
            body="Production MCP server exposing eleven live governance tools across four tenant namespaces. Any MCP-compatible AI client, agent, or orchestration framework can query the CoreIdentity platform with full policy enforcement, namespace isolation, and audit logging on every call."
          />
        </div>
      </section>

      <section className="space-y-5">
        <SectionTitle>Operating Capabilities</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          <PortfolioCard
            title="CoreIdentity Technologies"
            href="/platform"
            body="Platform company that owns and monetizes governed digital labor. Houses product R&D and the execution stack. CoreIdentity Technologies is where delivery becomes repeatable and where platform IP is developed."
          />
          <PortfolioCard
            title="CoreIdentity Advisory Group"
            href="/ciag"
            body="Advisory capability delivering AI governance frameworks, regulatory compliance roadmaps, and enterprise implementation strategy. Phase 0 through Phase 2 engagements scoped for regulated enterprises deploying agentic AI at scale."
          />
        </div>
      </section>
    </div>
  );
}
