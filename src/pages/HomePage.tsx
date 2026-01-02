import React from "react";
import { Card, PageTitle, SectionTitle, ButtonLink } from "../components/ui";

const CANONICAL = "Core Holding Corporation is the parent organization that builds and governs infrastructure for agentic digital labor through CoreIdentity Technologies\u2014a platform delivering a three-layer governed execution stack consisting of Sentinel OS, Nexus OS, and SmartNation AI, supported by CoreIdentity AI Advisory Group and AgentIdentity Systems.";

export function HomePage() {
  return (
    <div className="space-y-14">
      <section className="space-y-8">
        <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
          Core Holding Corporation • Parent organization • Governance-first execution infrastructure
        </div>

        <PageTitle>
          Governance-first infrastructure for agentic digital labor in regulated and high-stakes operations.
        </PageTitle>

        <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-3xl">
          {CANONICAL}
        </p>

        <div className="flex flex-wrap gap-3">
          <ButtonLink to="/contact" variant="primary">Request a Briefing</ButtonLink>
          <ButtonLink to="/portfolio" variant="secondary">Explore the Portfolio</ButtonLink>
          <ButtonLink to="#stack" variant="secondary">Explore the stack</ButtonLink>
        </div>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        <Card>
          <div className="text-sm font-semibold tracking-wide text-white/80">Our Mission</div>
          <div className="mt-3 text-white/80">
            Build the infrastructure for governed AI execution—so organizations can deploy agentic digital labor without losing control.
          </div>
        </Card>
        <Card>
          <div className="text-sm font-semibold tracking-wide text-white/80">Vision</div>
          <div className="mt-3 text-white/80">
            To establish governed autonomy as a standard operating capability across regulated and mission-critical industries, where digital workers operate with clear policy, accountability, and fail-closed safeguards.
          </div>
        </Card>
      </section>

      <section className="space-y-5">
        <SectionTitle>Value</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <div className="text-xl font-semibold">Governance by design</div>
            <div className="mt-2 text-white/70">Policy, approvals, and accountability built in.</div>
          </Card>
          <Card>
            <div className="text-xl font-semibold">Orchestrated execution</div>
            <div className="mt-2 text-white/70">Reliable workflows under constraints.</div>
          </Card>
          <Card>
            <div className="text-xl font-semibold">Digital workers that do real work</div>
            <div className="mt-2 text-white/70">Production-grade execution.</div>
          </Card>
          <Card>
            <div className="text-xl font-semibold">Evidence is a deliverable</div>
            <div className="mt-2 text-white/70">Audit-ready outputs by default.</div>
          </Card>
        </div>
      </section>

      <section id="stack" className="space-y-5">
        <SectionTitle>Three-layer governed execution stack</SectionTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">
          The stack is intentionally layered so governance precedes orchestration, and orchestration precedes digital labor. Each layer produces
          audit-ready evidence and enforces explicit operating boundaries.
        </p>
        <div className="grid gap-5 md:grid-cols-3">
          <Card>
            <div className="text-xl font-semibold">Sentinel OS</div>
            <div className="mt-2 text-white/70">Governance layer enforcing policy, approvals, identity boundaries, and evidence capture.</div>
            <div className="mt-4">
              <ButtonLink to="/sentinel-os" variant="secondary">View Sentinel OS</ButtonLink>
            </div>
          </Card>
          <Card>
            <div className="text-xl font-semibold">Nexus OS</div>
            <div className="mt-2 text-white/70">Orchestration layer coordinating workflows, integrations, retries, and recovery under constraints.</div>
            <div className="mt-4">
              <ButtonLink to="/nexus-os" variant="secondary">View Nexus OS</ButtonLink>
            </div>
          </Card>
          <Card>
            <div className="text-xl font-semibold">SmartNation AI</div>
            <div className="mt-2 text-white/70">Deployment layer delivering governed AI workers executing real operational work with measurable outcomes.</div>
            <div className="mt-4">
              <ButtonLink to="/smartnation-ai" variant="secondary">View SmartNation AI</ButtonLink>
            </div>
          </Card>

          <Card className="md:col-span-3">
            <div className="text-xl font-semibold">AGO‑1 (internal pilot operator)</div>
            <div className="mt-2 text-white/70">
              A non-client-facing operating agent used to augment internal advisory and operational workflows and to harden the stack before client exposure.
              AGO‑1 runs under Sentinel + Nexus controls and provides a controlled pathway into hospitality pilot patterns.
            </div>
            <div className="mt-4">
              <ButtonLink to="/ago-1" variant="secondary">View AGO‑1</ButtonLink>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
