// CIDG_VERTICAL_BFSI_v1
import React from "react";
import { Card, Section, SectionTitle, ButtonLink } from "../components/ui";
import { Helmet } from "react-helmet-async";
import { Link } from "@tanstack/react-router";

export function BFSIGovernancePage() {
  return (
    <div className="space-y-12">
      <Helmet>
        <title>Financial Services AI Governance | CoreIdentity</title>
        <meta
          name="description"
          content="CoreIdentity ensures every financial transaction executed by an AI agent is authorized, logged, and auditable — before your SOX auditors, FINRA examiners, or OCC reviewers ask."
        />
      </Helmet>

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-widest text-white/50">
          Financial Services · SOX · FINRA · OCC · PCI-DSS
        </p>
        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
          Financial AI Agents Are Making Decisions Your Auditors Will Eventually Ask About.
        </h1>
        <p className="text-lg text-white/70 max-w-3xl leading-relaxed">
          SOX, FINRA, OCC model risk management, and PCI-DSS were written assuming humans
          make consequential financial decisions. Your AI agents do not get an exemption.
          CoreIdentity ensures every agent-driven financial action has an authorization
          chain, an audit trail, and a defensible record — before the examination begins.
        </p>
        <div className="flex gap-3 pt-2">
          <Link
            to="/ciag"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-5 py-2.5 text-sm font-medium hover:bg-white/15 transition"
          >
            Schedule a Governance Assessment →
          </Link>
          <Link
            to="/platform"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 px-5 py-2.5 text-sm font-medium hover:bg-white/5 transition"
          >
            View Platform Stack
          </Link>
        </div>
      </div>

      {/* ── Regulatory Reality ──────────────────────────────────────────── */}
      <Section>
        <SectionTitle>The Regulatory Exposure</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <div className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">SOX / Internal Controls</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Section 404 requires that material financial decisions have documented
              controls. An AI agent executing financial workflows without a traceable
              authorization record is a material weakness waiting to be found.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">OCC Model Risk</div>
            <p className="text-white/70 text-sm leading-relaxed">
              OCC Bulletin 2011-12 and its 2021 updates require that AI models in
              financial decision-making are validated, monitored, and governed. Autonomous
              agents operating without enforcement boundaries are an examination finding.
            </p>
          </Card>
          <Card>
            <div className="text-sm font-semibold text-blue-400 uppercase tracking-wide mb-2">FINRA / SEC Oversight</div>
            <p className="text-white/70 text-sm leading-relaxed">
              FINRA's AI guidance and the SEC's cybersecurity disclosure rules create a
              clear obligation: if AI agents are material to your operations, you must
              be able to demonstrate they operated within sanctioned boundaries.
            </p>
          </Card>
        </div>
      </Section>

      {/* ── CoreG Reference Deployment ──────────────────────────────────── */}
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm font-semibold uppercase tracking-wide text-white/60 mb-2">Live Reference Deployment</div>
        <div className="text-xl font-semibold mb-2">CoreG — Private Capital Markets</div>
        <p className="text-white/70 text-sm leading-relaxed mb-3">
          CoreG (CoreGenesis) is CoreIdentity's first governed platform client — a live
          Private Capital Markets platform governing agentic workflows for hard asset
          transactions across four institutional banking jurisdictions. Every deal intake,
          compliance screen, and agent handoff is Sentinel-enforced and SAL-authorized.
          This is not a proof of concept. It is production governance.
        </p>
        <div className="flex gap-6 text-sm text-white/50">
          <span>DBS Bank · Singapore</span>
          <span>UBS · Switzerland</span>
          <span>HSBC/Barclays · UK</span>
          <span>JPMorgan/Citi · US</span>
        </div>
      </div>

      {/* ── What CoreIdentity Enforces ──────────────────────────────────── */}
      <Section>
        <SectionTitle>What CoreIdentity Enforces</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="text-lg font-semibold mb-2">Transaction Authorization</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Every financial transaction initiated or influenced by an AI agent is
              evaluated against a codified policy before execution. No agent exceeds
              its delegated transaction authority — mathematically, not aspirationally.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold mb-2">SOX-Ready Audit Trails</div>
            <p className="text-white/70 text-sm leading-relaxed">
              SAL generates cryptographically signed proof artifacts for every agent
              decision. Your internal audit team has a complete, tamper-evident record
              of what the AI did, when, and under what authority — without manual logging.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold mb-2">Model Risk Governance</div>
            <p className="text-white/70 text-sm leading-relaxed">
              CoreIdentity's enforcement chain separates AI reasoning from AI authorization.
              Your models reason freely. SAL arbitrates what they are permitted to execute.
              This is the architectural answer to OCC model risk requirements.
            </p>
          </Card>
          <Card>
            <div className="text-lg font-semibold mb-2">AML / KYC Workflow Governance</div>
            <p className="text-white/70 text-sm leading-relaxed">
              Agentic AML and KYC workflows require the same authorization discipline as
              human analysts. CoreIdentity governs the agent-level decision chain — ensuring
              every customer risk decision has an auditable, defensible record.
            </p>
          </Card>
        </div>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────────────── */}
      <Section>
        <Card>
          <div className="text-center space-y-4 py-4">
            <div className="text-xl font-semibold">Close Your Financial Services Governance Gap</div>
            <p className="text-white/70 text-sm max-w-xl mx-auto">
              CIAG Phase 0 maps your AI agent exposure against SOX, FINRA, OCC, and
              PCI-DSS requirements — and delivers a prioritized enforcement roadmap
              your CISO and General Counsel can act on.
            </p>
            <ButtonLink to="/ciag">Schedule a Phase 0 Assessment</ButtonLink>
          </div>
        </Card>
      </Section>
    </div>
  );
}
