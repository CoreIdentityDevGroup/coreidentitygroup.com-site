import { Helmet } from "react-helmet-async";
import heroImg from "../assets/images/coreidentity-governance-hero.webp";

// CIDG_POSITIONING_V2_COREIDENTITY
export function CoreIdentityPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <Helmet>
        <title>CoreIdentity | Institutional Trust Infrastructure for Autonomous Systems</title>
        <meta name="description" content="CoreIdentity is institutional trust infrastructure for autonomous systems — making every AI decision provable: authorized before execution, attributed to a verified identity, and auditable." />
      </Helmet>

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          CoreIdentity
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-white/70">
          Institutional trust infrastructure for autonomous systems — making every AI decision
          provable from policy definition through execution and outcome: authorized before it
          runs, attributed to a verified identity, and recorded in evidence built to be accepted.
        </p>

        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img
            src={heroImg}
            alt="CoreIdentity — autonomous systems operating under provable trust"
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Enforcement chain */}
      <section className="mb-12">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">The enforcement chain</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            CoreIdentity is a vertically integrated enforcement chain. Each layer has a distinct
            job, a clear boundary, and a clean contract — so trust scales across industries
            without losing control.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Governance</div>
            <div className="mt-1 text-xl font-semibold text-white">Sentinel</div>
            <div className="mt-2 text-white/70">
              Policy, identity, permissions, audit logging, and enforcement at the execution layer.
              Humans lead; machines execute — Sentinel keeps that authority explicit and provable.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Policy + controls at the execution layer</li>
              <li>Authorization boundaries + traceability</li>
              <li>Risk containment + compliance posture</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Orchestration</div>
            <div className="mt-1 text-xl font-semibold text-white">Nexus</div>
            <div className="mt-2 text-white/70">
              Coordinates workflows, tools, agents, approvals, and handoffs — while staying inside
              Sentinel's enforced boundaries.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Workflow routing + escalation</li>
              <li>Agent orchestration + tool use</li>
              <li>Human-in-the-loop checkpoints</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Digital Labor</div>
            <div className="mt-1 text-xl font-semibold text-white">SmartNation AI</div>
            <div className="mt-2 text-white/70">
              Packaged, governed digital labor — vertical agents and workflows that operate in real
              environments with controls that survive production.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Vertical "digital workforce" packages</li>
              <li>Integration-ready delivery patterns</li>
              <li>Measured outcomes + reporting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Operating principle */}
      <section>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-semibold text-white">Operating principle</h3>
          <p className="mt-2 text-white/70">
            We do not sell "AI." We sell provable trust: every autonomous decision authorized,
            attributed, and auditable — with the evidence to prove it.
          </p>
        </div>
      </section>
    </div>
  );
}

export default CoreIdentityPage;
