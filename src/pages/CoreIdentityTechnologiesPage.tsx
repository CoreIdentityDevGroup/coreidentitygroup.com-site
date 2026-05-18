/* CHC_PAGE_EXPORT_REPAIRED */
/* CHC_PAGE_SANITIZED */
/* CHC_COMPOSED_TECHNOLOGIES_PATCH */
import React from "react";
import { Eyebrow } from "../components/ui";
import { Link } from "@tanstack/react-router";
import heroImg from "../assets/images/coreidentity-governance-hero.webp";
import OperationalVerticalsSection from "../components/OperationalVerticalsSection";

type Vertical = {
  name: string;
  oneLiner: string;
  outcomes: string[];
  launchOrder: "Now" | "Next" | "Planned";
  accent?: string;
  accentBorder?: string;
};

// VERTICALS-v2 — Full 12-vertical AEG catalog
const verticals: Vertical[] = [
  // CIDG_SPRINT02_PCM_VERTICAL
  {
    name: "PrivateCapitalOps",
    accent: "rgba(79,70,229,0.06)",
    accentBorder: "rgba(79,70,229,0.2)",
    oneLiner: "CoreIdentity is live in the Private Capital Markets vertical, governing agentic workflows for a PCM platform managing deal intake, asset pipeline, and compliance screening — where a single unauthorized agent action carries regulatory and fiduciary consequence.",
    outcomes: [
      "Deal intake and pipeline governance with full audit trails",
      "SEC, FINRA, and fiduciary compliance enforcement at the agent level",
      "Agentic workflow authorization across fund operations and LP communications",
    ],
    launchOrder: "Now",
  },
  // CIDG_SPRINT03_SOVEREIGN_VERTICAL
  {
    name: "SovereignOps",
    accent: "rgba(217,119,6,0.06)",
    accentBorder: "rgba(217,119,6,0.25)",
    oneLiner: "Sovereign nations deploying agentic AI at national scale face a governance gap no policy document closes. SovereignOps brings execution-layer control to national AI programs — ensuring every autonomous action is authorized, auditable, and contained within jurisdictional and regulatory boundaries before it executes.",
    outcomes: [
      "National AI policy enforcement at the agent execution layer",
      "Digital sovereignty — agents operate within defined jurisdictional boundaries",
      "Multi-ministry orchestration with full governance enforcement and audit trails",
    ],
    launchOrder: "Now",
  },
  {
    name: "HealthcareOps",
    accent: "rgba(20,184,166,0.06)",
    accentBorder: "rgba(20,184,166,0.2)",
    oneLiner: "PHI never touches an unauthorized agent. HealthcareOps enforces HIPAA-compliant agent governance across your entire autonomous workforce — so your compliance team is not discovering violations after the fact.",
    outcomes: [
      "HIPAA and HITECH compliant workflow execution",
      "Clinical documentation with full audit trails",
      "Regulatory evidence capture and reporting",
    ],
    launchOrder: "Now",
  },
  {
    name: "FinanceOps",
    accent: "rgba(212,175,55,0.06)",
    accentBorder: "rgba(212,175,55,0.2)",
    oneLiner: "Every financial transaction executed by an AI agent is authorized, logged, and auditable. FinanceOps ensures your autonomous finance layer meets SOX, PCI-DSS, and internal controls — before your auditors ask.",
    outcomes: [
      "Automated transaction monitoring and flagging",
      "Regulatory reporting with full evidence trails",
      "Audit-ready approvals and escalation workflows",
    ],
    launchOrder: "Now",
  },
  {
    name: "BFSI",
    accent: "rgba(99,102,241,0.06)",
    accentBorder: "rgba(99,102,241,0.2)",
    oneLiner: "Banking, financial services, and insurance operate under the most demanding regulatory environments. BFSI brings AEG enforcement to every autonomous decision — loan processing, claims handling, fraud detection — with full auditability.",
    outcomes: [
      "GLBA, SOX, and Basel III compliant agent execution",
      "Real-time fraud detection with evidence trails",
      "Audit-ready loan and claims workflow governance",
    ],
    launchOrder: "Now",
  },
  {
    name: "ManufacturingOps",
    accent: "rgba(59,130,246,0.06)",
    accentBorder: "rgba(59,130,246,0.2)",
    oneLiner: "Production decisions, supply chain actions, and quality control — governed at the agent level. ManufacturingOps ensures autonomous manufacturing agents operate within safety, compliance, and operational boundaries.",
    outcomes: [
      "ISO and OSHA compliant workflow execution",
      "Supply chain governance with full traceability",
      "Quality control decision trails and escalation",
    ],
    launchOrder: "Now",
  },
  {
    name: "LogisticsOps",
    accent: "rgba(59,130,246,0.06)",
    accentBorder: "rgba(59,130,246,0.2)",
    oneLiner: "Every routing decision, shipment authorization, and carrier action — enforced and auditable. LogisticsOps brings AEG to autonomous logistics networks operating across complex regulatory and contractual environments.",
    outcomes: [
      "DOT and CTPAT compliant agent execution",
      "Carrier and vendor governance with audit trails",
      "Real-time exception handling and escalation",
    ],
    launchOrder: "Now",
  },
  {
    name: "LegalOps",
    accent: "rgba(168,85,247,0.06)",
    accentBorder: "rgba(168,85,247,0.2)",
    oneLiner: "Privileged information stays privileged, even when AI handles it. LegalOps enforces access boundaries and creates defensible audit trails for every agent interaction with sensitive legal data.",
    outcomes: [
      "Faster contract intake and triage",
      "Standardized drafting and review playbooks",
      "Audit-ready decision trails and approvals",
    ],
    launchOrder: "Now",
  },
  {
    name: "HospitalityOps",
    accent: "rgba(251,146,60,0.06)",
    accentBorder: "rgba(251,146,60,0.2)",
    oneLiner: "Guest data, operational decisions, revenue management — governed at the agent level. HospitalityOps brings enterprise-grade AI governance to hospitality operations without creating operational friction.",
    outcomes: [
      "Guest data governance with full compliance trails",
      "Revenue management decisions with policy enforcement",
      "Operational task automation with measured ROI",
    ],
    launchOrder: "Now",
  },
  {
    name: "RetailOps",
    accent: "rgba(34,197,94,0.06)",
    accentBorder: "rgba(34,197,94,0.2)",
    oneLiner: "Customer data, pricing decisions, inventory actions — all governed. RetailOps ensures your retail AI agents operate within policy boundaries that protect margin, brand, and compliance simultaneously.",
    outcomes: [
      "Inventory and procurement governance",
      "Vendor onboarding and compliance tracking",
      "Policy-driven exception handling",
    ],
    launchOrder: "Now",
  },
  {
    name: "RealEstateOps",
    accent: "rgba(212,175,55,0.06)",
    accentBorder: "rgba(212,175,55,0.2)",
    oneLiner: "Property transactions, tenant management, and investment decisions involve significant regulatory and fiduciary obligations. RealEstateOps governs every autonomous action with the audit trail institutional real estate demands.",
    outcomes: [
      "Transaction governance with full evidence trails",
      "Tenant and vendor compliance tracking",
      "Investment decision audit and escalation workflows",
    ],
    launchOrder: "Now",
  },
  {
    name: "EducationOps",
    accent: "rgba(20,184,166,0.06)",
    accentBorder: "rgba(20,184,166,0.2)",
    oneLiner: "Student data, academic decisions, and institutional operations require the same governance rigor as any regulated enterprise. EducationOps enforces FERPA-compliant agent boundaries across your autonomous education infrastructure.",
    outcomes: [
      "FERPA compliant student data governance",
      "Academic workflow execution with audit trails",
      "Institutional decision traceability and reporting",
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
        <div className="mb-6">
          <div className="text-xs font-medium tracking-[0.22em] text-white/40 mb-3">THE ENFORCEMENT CHAIN</div>
          <h2 className="text-2xl font-semibold text-white">The AEG Enforcement Stack</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            Every agent action passes through a vertically integrated enforcement chain before execution is permitted. Authorization, governance, identity, orchestration, and governed deployment — each layer with a distinct job and a clear boundary.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-5 cidg-card">
            <div className="text-xs font-semibold tracking-wide text-amber-400 uppercase mb-2">Authorization</div>
            <div className="text-lg font-semibold text-white mb-2">SAL Kernel</div>
            <p className="text-sm text-white/65 leading-relaxed mb-3">The deterministic pre-execution gateway. Every agent request is evaluated across five dimensions — Identity, Intent, Asset, Action, and Context — before execution is permitted. Fail-closed by design.</p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>IIAAC five-dimension validation</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Immutable Proof Pack on every decision</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Sub-3ms enforcement latency</span></li>
            </ul>
            <Link to="/sal" className="text-sm text-amber-400/80 hover:text-amber-400 transition">SAL Kernel →</Link>
          </div>

          <div className="rounded-2xl border border-blue-400/20 bg-blue-400/5 p-5 cidg-card">
            <div className="text-xs font-semibold tracking-wide text-blue-400 uppercase mb-2">Governance</div>
            <div className="text-lg font-semibold text-white mb-2">Sentinel</div>
            <p className="text-sm text-white/65 leading-relaxed mb-3">Policy enforcement, identity boundaries, approval gates, and evidence capture. The reason your AI fleet cannot make a decision your legal team did not authorize.</p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Policy + controls at the execution layer</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Authorization boundaries + traceability</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Risk containment + compliance posture</span></li>
            </ul>
            <Link to="/sentinel" className="text-sm text-blue-400/80 hover:text-blue-400 transition">Sentinel →</Link>
          </div>

          <div className="rounded-2xl border border-indigo-400/20 bg-indigo-400/5 p-5 cidg-card">
            <div className="text-xs font-semibold tracking-wide text-indigo-400 uppercase mb-2">Identity</div>
            <div className="text-lg font-semibold text-white mb-2">Agent Identity Systems</div>
            <p className="text-sm text-white/65 leading-relaxed mb-3">Cryptographically verifiable identity for every agent. Authentication, authorization boundaries, provenance tracking, and attribution — enforced at the execution layer.</p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Persistent, auditable agent credentials</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Policy-linked identity boundaries</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Full provenance with no gaps</span></li>
            </ul>
            <Link to="/agentidentity-systems" className="text-sm text-indigo-400/80 hover:text-indigo-400 transition">Agent Identity Systems →</Link>
          </div>

          <div className="rounded-2xl border border-orange-400/20 bg-orange-400/5 p-5 cidg-card">
            <div className="text-xs font-semibold tracking-wide text-orange-400 uppercase mb-2">Orchestration</div>
            <div className="text-lg font-semibold text-white mb-2">Nexus</div>
            <p className="text-sm text-white/65 leading-relaxed mb-3">Controlled multi-agent execution. Workflows, integrations, retries, and recovery — coordinated inside defined governance constraints with structured operational traces.</p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Workflow routing + escalation</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Agent orchestration + tool use</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Human-in-the-loop checkpoints</span></li>
            </ul>
            <Link to="/nexus" className="text-sm text-orange-400/80 hover:text-orange-400 transition">Nexus →</Link>
          </div>

          <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-5 cidg-card md:col-span-2">
            <div className="text-xs font-semibold tracking-wide text-emerald-400 uppercase mb-2">Digital Labor</div>
            <div className="text-lg font-semibold text-white mb-2">SmartNation AI</div>
            <p className="text-sm text-white/65 leading-relaxed mb-3">10,000 governed agents across 12 industry verticals. Pre-built, compliance-ready digital labor — deployed under full AEG enforcement from day one. Every agent has a real labor position, a governance profile, and a SAL audit trail.</p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>10,000 agents across 12 verticals</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Integration-ready governed delivery patterns</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Measured outcomes with full audit trails</span></li>
            </ul>
            <Link to="/smartnation-ai" className="text-sm text-emerald-400/80 hover:text-emerald-400 transition">SmartNation AI →</Link>
          </div>

          <div className="rounded-2xl border border-violet-400/20 bg-violet-400/5 p-5 cidg-card md:col-span-2">
            <div className="text-xs font-semibold tracking-wide text-violet-400 uppercase mb-2">Formal Verification</div>
            <div className="text-lg font-semibold text-white mb-2">FGRE — Formal Governance Reasoning Engine</div>
            <p className="text-sm text-white/65 leading-relaxed mb-3">Mathematical assurance for governance policy integrity. Z3 SMT formal verification detects policy contradictions, validates execution paths, and generates machine-verifiable proof artifacts before any policy activates.</p>
            <ul className="space-y-1 mb-4">
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Z3 SMT formal verification engine</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>SLH-DSA-128s signed proof artifacts (FIPS 205)</span></li>
              <li className="flex items-center gap-2 text-sm text-white/60"><CheckIcon /><span>Exportable for regulatory submission</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Operational verticals */}
      <section className="mb-12 cidg-fadein">
        <div className="mb-4">
          <h2 className="text-2xl font-semibold text-white">Agentic Execution Governance — 10 Industry Verticals</h2>
          <p className="mt-2 max-w-3xl text-white/70">
            Ten governed industry verticals. Each deploys under full AEG enforcement — SAL authorization, Sentinel policy, Nexus orchestration, and AIS identity verification — from day one.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {verticals.map((v) => (
            <div key={v.name} className="cidg-card rounded-2xl p-5" style={{border: `1px solid ${v.accentBorder || "rgba(255,255,255,0.1)"}`, background: v.accent || "rgba(255,255,255,0.03)"}}>
              <div className="flex items-center gap-3 mb-3">
                <div className="text-lg font-semibold text-white">{v.name}</div>
                <Pill tone="green">{v.launchOrder}</Pill>
              </div>
              <p className="text-sm text-white/70 mb-4 leading-relaxed">{v.oneLiner}</p>
              <ul className="space-y-2">
                {v.outcomes.map((o) => (
                  <li key={o} className="flex items-center gap-2 text-sm text-white/60">
                    <CheckIcon /><span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/30 p-6">
          <div className="text-xs font-medium tracking-widest text-white/40 uppercase mb-3">Deployment Model</div>
          <p className="text-sm text-white/60 leading-relaxed">Each vertical launches with a governance baseline, control-to-workflow mapping, role-based agent policies, and evidence automation. Scope stays tight, outcomes stay measurable, and expansion stays predictable.</p>
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
        <div className="rounded-2xl border border-white/10 bg-black/30 p-8">
          <Eyebrow>OPERATING PRINCIPLE</Eyebrow>
          <h3 className="text-2xl font-semibold text-white mb-4">We do not sell AI.</h3>
          <p className="text-white/70 leading-relaxed max-w-2xl mb-6">
            CoreIdentity sells governed execution — measurable outcomes with explicit authority,
            enforced constraints, and auditability built in. Every vertical. Every agent.
            Every decision. Governed at the execution layer before something goes wrong.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-medium hover:bg-white/15 transition"
          >
            Request a Briefing →
          </Link>
        </div>
      </section>

    </div>
  );
}

export default CoreIdentityTechnologiesPage;
