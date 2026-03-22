/* CHC_PAGE_EXPORT_REPAIRED */
/* CHC_PAGE_SANITIZED */
/* CHC_COMPOSED_TECHNOLOGIES_PATCH */
import React from "react";
import { Link } from "@tanstack/react-router";
import heroImg from "../assets/images/coreidentity-governance-hero.webp";
import OperationalVerticalsSection from "../components/OperationalVerticalsSection";

type Vertical = {
  name: string;
  oneLiner: string;
  outcomes: string[];
  launchOrder: "Now" | "Next" | "Planned";
};

// CHC-VERTICALS-REORDER-v1
const verticals: Vertical[] = [
  {
    name: "FinanceOps",
    oneLiner: "Every financial transaction executed by an AI agent is authorized, logged, and auditable. FinanceOps ensures your autonomous finance layer meets SOX, PCI-DSS, and internal controls — before your auditors ask.",
    outcomes: [
      "Automated transaction monitoring and flagging",
      "Regulatory reporting with full evidence trails",
      "Audit-ready approvals and escalation workflows",
    ],
    launchOrder: "Now",
  },
  {
    name: "LegalOps",
    oneLiner: "Privileged information stays privileged, even when AI handles it. LegalOps enforces access boundaries and creates defensible audit trails for every agent interaction with sensitive legal data.",
    outcomes: [
      "Faster contract intake and triage",
      "Standardized drafting and review playbooks",
      "Audit-ready decision trails and approvals",
    ],
    launchOrder: "Now",
  },
  {
    name: "HealthcareOps",
    oneLiner: "PHI never touches an unauthorized agent. HealthcareOps enforces HIPAA-compliant agent governance across your entire autonomous workforce — so your compliance team is not discovering violations after the fact.",
    outcomes: [
      "HIPAA and HITECH compliant workflow execution",
      "Clinical documentation with full audit trails",
      "Regulatory evidence capture and reporting",
    ],
    launchOrder: "Now",
  },
  {
    name: "RetailOps",
    oneLiner: "Customer data, pricing decisions, inventory actions — all governed. RetailOps ensures your retail AI agents operate within policy boundaries that protect margin, brand, and compliance simultaneously.",
    outcomes: [
      "Inventory and procurement governance",
      "Vendor onboarding and compliance tracking",
      "Policy-driven exception handling",
    ],
    launchOrder: "Now",
  },
  {
    name: "HospitalityOps",
    oneLiner: "Guest data, operational decisions, revenue management — governed at the agent level. HospitalityOps brings enterprise-grade AI governance to hospitality operations without creating operational friction.",
    outcomes: [
      "Structured POC execution and reporting",
      "Operational task automation with governance",
      "Measured ROI via tracked outcomes",
    ],
    launchOrder: "Now",
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
    <span className={["inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold", toneClasses].join(" ")}>
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
        "shadow-lg shadow-black/20 transition focus:outline-none focus:ring-4",
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
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-emerald-300" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/80" aria-hidden="true">
      <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/80" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm0 0a4 4 0 1 0 4 4 4 4 0 0 0-4-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8.5 8.5l-3-3M15.5 15.5l3 3M15.5 8.5l3-3M8.5 15.5l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function BotIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/80" aria-hidden="true">
      <path d="M12 3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 8h10a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M9 14h.01M15 14h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M9 18h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// CHC-COREIDENTITY-PAGE-EXPORT-v1
export function CoreIdentityTechnologiesPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 lg:px-8">

      {/* Hero */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          CoreIdentity Technologies
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-white/70">
          Governance infrastructure for agentic execution — defining authority, enforcing
          constraints, and preserving auditability from policy definition through execution
          and outcome.
        </p>
        <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img
            src={heroImg}
            alt="CoreIdentity — AI operates under governance"
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
      </div>

      {/* Three-layer governance stack */}
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
          <Card title="Sentinel OS" icon={<ShieldIcon />}>
            <div className="mb-1 text-xs font-semibold tracking-wide text-white/50 uppercase">Layer 1</div>
            <p>Governance, policy, identity, permissions, audit logging, constraints, and enforcement. Humans lead; machines execute — Sentinel keeps that authority explicit.</p>
            <ul className="mt-3 space-y-1">
              <li className="flex items-center gap-2"><CheckIcon /><span>Policy + controls at the execution layer</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span>Authorization boundaries + traceability</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span>Risk containment + compliance posture</span></li>
            </ul>
            <div className="mt-4"><PrimaryButton to="/sentinel-os" color="blue">Sentinel OS →</PrimaryButton></div>
          </Card>

          <Card title="Nexus OS" icon={<NetworkIcon />}>
            <div className="mb-1 text-xs font-semibold tracking-wide text-white/50 uppercase">Layer 2</div>
            <p>Orchestration and tasking. Nexus coordinates workflows, tools, agents, approvals, and handoffs — while staying inside Sentinel's rules.</p>
            <ul className="mt-3 space-y-1">
              <li className="flex items-center gap-2"><CheckIcon /><span>Workflow routing + escalation</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span>Agent orchestration + tool use</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span>Human-in-the-loop checkpoints</span></li>
            </ul>
            <div className="mt-4"><PrimaryButton to="/nexus-os" color="orange">Nexus OS →</PrimaryButton></div>
          </Card>

          <Card title="SmartNation AI" icon={<BotIcon />}>
            <div className="mb-1 text-xs font-semibold tracking-wide text-white/50 uppercase">Layer 3</div>
            <p>Deployment layer: packaged, governed digital labor offerings that operate in real environments with controls that survive production.</p>
            <ul className="mt-3 space-y-1">
              <li className="flex items-center gap-2"><CheckIcon /><span>Vertical digital workforce packages</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span>Integration-ready delivery patterns</span></li>
              <li className="flex items-center gap-2"><CheckIcon /><span>Measured outcomes + reporting</span></li>
            </ul>
            <div className="mt-4"><PrimaryButton to="/smartnation-ai">SmartNation AI →</PrimaryButton></div>
          </Card>
        </div>
      </section>

      {/* Operational verticals */}
      <section className="mb-12">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">Operational governance verticals</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            These are the initial markets served through SmartNation AI packages, governed by
            Sentinel and orchestrated by Nexus.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {verticals.map((v) => (
            <div key={v.name} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 mb-2">
                <div className="text-lg font-semibold text-white">{v.name}</div>
                <Pill tone="green">{v.launchOrder}</Pill>
              </div>
              <p className="text-sm text-white/70 mb-3">{v.oneLiner}</p>
              <ul className="space-y-1">
                {v.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm text-white/60">
                    <CheckIcon /><span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="rounded-2xl border border-dashed border-white/15 bg-white/[0.02] p-5 flex flex-col justify-center">
            <div className="text-base font-semibold text-white/50">Additional verticals in development</div>
            <p className="mt-2 text-sm text-white/40">
              New industry verticals are continuously being validated through internal
              operations and advisory engagements. Availability is driven by client demand
              and regulatory readiness.
            </p>
          </div>
        </div>
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4">
          <p className="text-sm text-white/60">
            Deployment model: we launch each vertical with (1) a governance baseline,
            (2) control-to-workflow mapping, (3) role-based agent policies, and
            (4) evidence automation. This keeps scope tight, outcomes measurable,
            and expansion predictable.
          </p>
        </div>
      </section>


      {/* SAL Enforcement Kernel */}
      <section className="mb-12">
        <div className="mb-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-400 mb-3">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
            </svg>
            THE ENFORCEMENT KERNEL
          </div>
          <h2 className="text-2xl font-semibold text-white">SAL Enforcement Kernel</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            The Semantic Arbitration Layer (SAL) is the deterministic enforcement kernel powering the entire CoreIdentity ecosystem. It is the architectural guarantee that transforms probabilistic AI into institutional-grade digital labor.
          </p>
        </div>
        <div className="rounded-2xl border border-amber-400/15 bg-amber-400/5 p-6 mb-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-base font-semibold text-white mb-2">The Delegated Authority Problem</div>
              <p className="text-sm text-white/70 leading-relaxed">
                Traditional security (RBAC/IAM) governs <em>who</em> can access a resource. SAL governs <em>why</em> (intent) and <em>how much</em> (behavioral guardrails) — providing a deterministic chokepoint that mathematically prevents any machine action violating codified business logic or safety thresholds.
              </p>
            </div>
            <div>
              <div className="text-base font-semibold text-white mb-2">The IIAAC Validation Model</div>
              <p className="text-sm text-white/70 leading-relaxed">
                Every machine-initiated action is evaluated across five dimensions before execution: <strong className="text-white/90">Identity</strong> (who), <strong className="text-white/90">Intent</strong> (why), <strong className="text-white/90">Asset</strong> (what), <strong className="text-white/90">Action</strong> (how), and <strong className="text-white/90">Context</strong> (when/where). All five must pass.
              </p>
            </div>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold tracking-wide text-white/50 uppercase mb-2">Northbound</div>
              <div className="text-sm font-medium text-white mb-1">The Agent</div>
              <p className="text-xs text-white/60">SAL intercepts all tool calls and intents generated by any LLM or autonomous system before they reach enterprise infrastructure.</p>
            </div>
            <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-4 flex flex-col items-center justify-center text-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-400 mb-2" aria-hidden="true">
                <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
              </svg>
              <div className="text-sm font-semibold text-amber-400">SAL Kernel</div>
              <div className="text-xs text-amber-400/70 mt-1">Arbitration Layer</div>
              <div className="text-xs text-white/50 mt-1">sub-3ms latency</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="text-xs font-semibold tracking-wide text-white/50 uppercase mb-2">Southbound</div>
              <div className="text-sm font-medium text-white mb-1">SAL-Certified Rails</div>
              <p className="text-xs text-white/60">SAL communicates with SAL-Certified Execution Rails — databases, APIs, payment gateways — to authorize or deny raw command execution.</p>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-3">
            <a href="/sal" className="inline-flex items-center gap-1 text-sm text-amber-400/80 hover:text-amber-400 transition font-medium">
              View SAL Enforcement Specification →
            </a>
          </div>
        </div>
      </section>

      {/* MCP Protocol */}
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
          <div className="mt-4">
            <a href="/mcp" className="text-white/70 hover:text-white transition text-sm">View full MCP Protocol documentation →</a>
          </div>
        </div>
      </section>

      {/* Operating principle */}
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
