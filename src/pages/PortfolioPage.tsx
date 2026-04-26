import React from "react";
import { Card, PageTitle, SectionTitle } from "../components/ui";

const INTRO =
 "CoreIdentity Development Group Inc. governs a portfolio of systems and operating capabilities built to enable safe, auditable agentic digital labor. At the foundation is the Semantic Arbitration Layer (SAL) — the deterministic enforcement kernel that authorizes every agent execution before it reaches the stack. Above it, Sentinel defines policy, Nexus orchestrates controlled execution, and SmartNation AI packages governed deployment patterns. CoreIdentity Advisory Group and AGO-1 translate the platform into commercial engagements.";

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
 <SectionTitle>Foundational Infrastructure</SectionTitle>
 <p className="text-white/60 text-sm max-w-2xl">The enforcement kernel that underpins every product in the stack. Every agent execution passes through SAL before reaching Sentinel, Nexus, or any downstream system.</p>
 <div className="grid gap-5 md:grid-cols-1 max-w-2xl">
 <PortfolioCard
 title="Semantic Arbitration Layer (SAL)"
 href="/sal"
 body="The deterministic pre-execution authorization kernel at the core of every CoreIdentity deployment. SAL evaluates every agent request across five dimensions — Identity, Intent, Asset, Action, and Context (IIAAC) — before execution is permitted. Every decision generates an immutable Proof Pack anchored to a cryptographic ledger. Fail-closed by design: if SAL is unreachable, execution is blocked. SAL is the enforcement primitive that makes the rest of the stack governable."
 />
 <PortfolioCard
 title="Quantum Hardening — FIPS 203/204/205"
 href="/quantum-hardening"
 body="CoreIdentity is the first AI governance platform to complete post-quantum cryptographic hardening across its full enforcement stack. 100,000 soak cycles. 376/376 sprint tests. Zero failures. ML-KEM-768, ML-DSA-65, SLH-DSA-128s deployed across SAL Kernel, Sentinel, AIS, and Nexus. "
 />
 </div>
 </section>

 <section className="space-y-5">
 <SectionTitle>Core systems and operating capabilities</SectionTitle>
 <div className="grid gap-5 md:grid-cols-2">
 <PortfolioCard
 title="CoreIdentity Technologies"
 href="/coreidentity-technologies"
 body="Platform company that owns and monetizes governed digital labor. Houses product R&D and the execution stack. CoreIdentity is where delivery becomes repeatable."
 />

 <PortfolioCard
 title="Sentinel"
 href="/sentinel"
 body="Governance layer enforcing policy, approvals, identity boundaries, auditability, and evidence capture. Designed to be fail‑closed when authority or data is missing."
 />

 <PortfolioCard
 title="Nexus"
 href="/nexus"
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
 body="The identity and accountability infrastructure for autonomous AI. AIS provides agent authentication, authorization boundaries, provenance tracking, and attribution — enforced at the execution layer. Live: 32,784+ soak cycles at 100% pass rate. Acquisition-grade and natively integrated with the CoreIdentity enforcement stack."
 />
 </div>
 </section>
 </div>
 );
}
