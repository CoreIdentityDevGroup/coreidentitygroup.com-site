// src/pages/HomePage.tsx
import { Link } from "@tanstack/react-router";

import heroImg from "../assets/images/global-ai-governance-hero.webp";

export function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Hero */}
      <div className="mb-10">
        <div className="mb-8">
          <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
            CORE HOLDING CORPORATION
          </div>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Governance-first infrastructure
            <br />
            for safe, auditable agentic execution.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70">
            We build the control plane that keeps AI operations constrained, observable, and
            accountable—so organizations can deploy agentic capability without losing policy,
            approvals, and traceable evidence.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/coreidentity-technologies"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-white/15"
            >
              Explore CoreIdentity Technologies
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-transparent px-5 py-3 text-sm font-medium text-white/80 transition hover:bg-white/5 hover:text-white"
            >
              Talk to us
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img
            src={heroImg}
            alt="Global AI governance—Earth from space with secure, auditable network overlays"
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Value pillars */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">Policy-first</div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Define what AI can and cannot do—then enforce it with explicit constraints, approvals,
            and guardrails.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">Audit-ready</div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Capture traceable evidence of inputs, actions, approvals, and outcomes—built for review,
            compliance, and trust.
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-sm font-semibold text-white">Operational</div>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            Move from demos to real execution with controls that survive production complexity,
            incidents, and change.
          </p>
        </div>
      </div>

      {/* Next step */}
      <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-6">
        <div className="text-sm font-semibold text-white">Next step</div>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/70">
          Start with the governed execution stack—Sentinel OS (governance), Nexus OS (orchestration),
          and SmartNation AI (deployment). We keep authority explicit: humans lead, machines execute,
          governance protects both.
        </p>

        <div className="mt-5">
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-white/15"
          >
            View the portfolio
          </Link>
        </div>
      </div>
    </div>
  );
}
