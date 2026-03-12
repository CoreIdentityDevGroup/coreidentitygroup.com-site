/* CHC_PAGE_EXPORT_REPAIRED */
/* CHC_PAGE_SANITIZED */
/* CHC_COMPOSED_TECHNOLOGIES_PATCH */
import { Link } from "@tanstack/react-router";
import heroImg from "../assets/images/coreidentity-governance-hero.webp";

import OperationalVerticalsSection from "../components/OperationalVerticalsSection";
type Vertical = {
  name: string;
  oneLiner: string;
  outcomes: string[];
  launchOrder: "Now" | "Next" | "Planned";
};

const verticals: Vertical[] = [
  {
    name: "LegalOps",
    oneLiner:
      "Governed AI workers for legal operations: intake, drafting, review workflows, and policy controls.",
    outcomes: [
      "Faster contract intake and triage",
      "Standardized drafting and review playbooks",
      "Audit-ready decision trails and approvals",
    ],
    launchOrder: "Now",
  },
  {
    name: "ComplianceOps",
    oneLiner:
      "Continuous compliance execution: evidence collection, control testing, reporting, and remediation tasking.",
    outcomes: [
      "Automated evidence gathering and mapping",
      "Control testing workflows with approvals",
      "Remediation tasking with measurable closure",
    ],
    launchOrder: "Now",
  },
  {
    name: "HospitalityOps",
    oneLiner:
      "Operational execution in hospitality environments: vendor coordination, tariff impacts, and pilot automation.",
    outcomes: [
      "Structured POC execution and reporting",
      "Operational task automation with governance",
      "Measured ROI via tracked outcomes",
    ],
    launchOrder: "Next",
  },
  {
    name: "LaborOps",
    oneLiner:
      "Governed digital labor for back-office operations: intake, routing, and execution across repeatable workflows.",
    outcomes: [
      "Reduced cycle time for routine operations",
      "Improved consistency across workflows",
      "Governed automation with human oversight",
    ],
    launchOrder: "Planned",
  },
];

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
      {children}
    </span>
  );
}

function Pill({
  children,
  tone = "neutral",
}: {
  children: React.ReactNode;
  tone?: "neutral" | "green" | "amber";
}) {
  const toneClasses =
    tone === "green"
      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
      : tone === "amber"
        ? "border-amber-400/20 bg-amber-400/10 text-amber-200"
        : "border-white/15 bg-white/5 text-white/80";

  return (
    <span
      className={[
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
        toneClasses,
      ].join(" ")}
    >
      {children}
    </span>
  );
}

function PrimaryButton({
  to,
  children,
  color = "emerald",
}: {
  to: string;
  children: React.ReactNode;
  color?: "emerald" | "orange" | "blue";
}) {
  const colorClasses =
    color === "orange"
      ? "bg-orange-600 hover:bg-orange-500 focus:ring-orange-400/30"
      : color === "blue"
        ? "bg-sky-600 hover:bg-sky-500 focus:ring-sky-400/30"
        : "bg-emerald-700 hover:bg-emerald-600 focus:ring-emerald-400/30";

  return (
    <Link
      to={to}
      className={[
        "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white",
        "shadow-lg shadow-black/20 transition",
        "focus:outline-none focus:ring-4",
        colorClasses,
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

function Card({
  title,
  children,
  icon,
}: {
  title: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20">
      <div className="mb-3 flex items-center gap-3">
        {icon ? (
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-black/20">
            {icon}
          </div>
        ) : null}
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <div className="text-sm leading-6 text-white/75">{children}</div>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-emerald-300"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-white/80"
      aria-hidden="true"
    >
      <path
        d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-white/80"
      aria-hidden="true"
    >
      <path
        d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 0a4 4 0 1 0 4 4 4 4 0 0 0-4-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 8.5l-3-3M15.5 15.5l3 3M15.5 8.5l3-3M8.5 15.5l-3 3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      className="text-white/80"
      aria-hidden="true"
    >
      <path
        d="M12 3v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 8h10a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 14h.01M15 14h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M9 18h6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// CHC-COREIDENTITY-PAGE-EXPORT-v1
export function CoreIdentityTechnologiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          CoreIdentity Technologies
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-white/70">
          Governance infrastructure for agentic execution — defining authority, enforcing
          constraints, and preserving auditability from policy definition through execution
          and outcome.
        </p>
      </div>

      <section className="mb-12">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">The governed execution stack</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            CoreIdentity is organized as a three-layer platform. Each layer has a distinct job,
            a clear boundary, and a clean contract — so we can scale across industries without
            losing control.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Layer 1</div>
            <div className="mt-1 text-xl font-semibold text-white">Sentinel OS</div>
            <div className="mt-2 text-white/70">
              Governance, policy, identity, permissions, audit logging, constraints, and enforcement.
              Humans lead; machines execute — Sentinel keeps that authority explicit.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Policy + controls at the execution layer</li>
              <li>Authorization boundaries + traceability</li>
              <li>Risk containment + compliance posture</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Layer 2</div>
            <div className="mt-1 text-xl font-semibold text-white">Nexus OS</div>
            <div className="mt-2 text-white/70">
              Orchestration and tasking. Nexus coordinates workflows, tools, agents, approvals,
              and handoffs — while staying inside Sentinel's rules.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Workflow routing + escalation</li>
              <li>Agent orchestration + tool use</li>
              <li>Human-in-the-loop checkpoints</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm font-semibold tracking-wide text-white/80">Layer 3</div>
            <div className="mt-1 text-xl font-semibold text-white">SmartNation AI</div>
            <div className="mt-2 text-white/70">
              Deployment layer: packaged, governed digital labor offerings that operate in
              real environments with controls that survive production.
            </div>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-white/60">
              <li>Vertical digital workforce packages</li>
              <li>Integration-ready delivery patterns</li>
              <li>Measured outcomes + reporting</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">MCP Protocol layer</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            CoreIdentity exposes eleven live governance tools through a production MCP server
            running on GCP Cloud Run — making the platform queryable by any MCP-compatible
            AI client with full policy enforcement and audit logging on every call.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="grid gap-4 md:grid-cols-3">
            <div>
              <div className="text-base font-semibold text-white mb-1">Identity enforcement</div>
              <p className="text-sm text-white/70">Every call validated against tenant, actor, purpose, classification, and traceId before any tool executes.</p>
            </div>
            <div>
              <div className="text-base font-semibold text-white mb-1">Namespace isolation</div>
              <p className="text-sm text-white/70">Default-deny namespace allowlist per tenant. Cross-tenant access is structurally impossible.</p>
            </div>
            <div>
              <div className="text-base font-semibold text-white mb-1">Contract versioning</div>
              <p className="text-sm text-white/70">Per-tool minimum contract version enforcement. Outdated callers receive a structured rejection.</p>
            </div>
          </div>
          <div className="mt-4 text-sm text-white/50">
            <a href="/mcp" className="text-white/70 hover:text-white transition">View full MCP Protocol documentation →</a>
          </div>
        </div>
      </section>

      <section>
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <h3 className="text-xl font-semibold text-white">Operating principle</h3>
          <p className="mt-2 text-white/70">
            We do not sell AI. We sell governed execution: measurable outcomes with explicit
            authority, enforced constraints, and auditability built in.
          </p>
        </div>
      </section>
    </div>
  );
}

export default CoreIdentityTechnologiesPage;
