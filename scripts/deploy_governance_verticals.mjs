import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const TARGET = path.join(ROOT, "src/components/CoreIdentityTechnologiesComposed.tsx");

if (!fs.existsSync(TARGET)) {
  throw new Error("Missing target: src/components/CoreIdentityTechnologiesComposed.tsx");
}

const START = "/* CHC_GOVERNANCE_VERTICALS_START */";
const END   = "/* CHC_GOVERNANCE_VERTICALS_END */";

const section = `
${START}
      <section className="mt-10">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-semibold tracking-tight">Governance Verticals</h2>
            <p className="text-sm text-white/70">
              Each vertical is delivered as a governed digital workforce built on Sentinel (governance),
              Nexus (orchestration), and SmartNation (catalog). We ship verticals as composable capability packs
              — policy, controls, workflows, and agent roles — with measurable compliance outcomes.
            </p>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            ${[
              {
                name: "LegalOps Digital Workforce",
                outcome: "Policy-controlled contract review, regulatory mapping, evidence capture, audit-ready reporting.",
                examples: ["Contract intake → review → redlines", "Regulatory obligations mapping", "Evidence & attestation packs"],
              },
              {
                name: "HospitalityOps Governance Workforce",
                outcome: "Governed operational workflows for property ops, vendor compliance, and incident response.",
                examples: ["Vendor onboarding & compliance", "Policy-driven incident triage", "SOP execution verification"],
              },
              {
                name: "LaborOps Governance Workforce",
                outcome: "Shift, credential, and policy compliance automation across frontline operations.",
                examples: ["Credential validation", "Policy-based scheduling checks", "Training & recertification tracking"],
              },
              {
                name: "Procurement & Tariff Governance",
                outcome: "Controlled sourcing workflows with tariff logic, documentation trails, and exception handling.",
                examples: ["Tariff impact tracking", "Supplier risk/compliance scoring", "Exception approvals with evidence"],
              },
              {
                name: "Cyber GRC Governance Workforce",
                outcome: "Continuous controls monitoring, policy enforcement workflows, and audit artifact generation.",
                examples: ["Control testing orchestration", "Evidence collection", "Audit readiness dashboards"],
              },
              {
                name: "Finance & Controls Governance",
                outcome: "SOX-aligned workflow controls, approvals, reconciliation governance, and anomaly escalation.",
                examples: ["Approval chains with segregation", "Reconciliation governance", "Exception routing & logging"],
              },
              {
                name: "HR & People Compliance",
                outcome: "Policy enforcement for onboarding, access governance handoffs, and training compliance.",
                examples: ["Onboarding controls", "Access-request governance", "Training & attestations"],
              },
              {
                name: "Supply Chain Governance",
                outcome: "End-to-end visibility with governed exception handling for logistics, inventory, and vendor SLAs.",
                examples: ["SLA compliance monitoring", "Exception triage", "Vendor performance evidence packs"],
              },
              {
                name: "AI Governance & Model Risk",
                outcome: "Model lifecycle governance, policy gates, risk registers, and traceable approvals.",
                examples: ["Use-case intake & approval", "Risk register workflows", "Monitoring & incident playbooks"],
              },
            ]
              .map(
                (v) => `
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">${v.name}</h3>
                <p className="text-sm text-white/70">${v.outcome}</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  ${v.examples.map((x) => `<li>• ${x}</li>`).join("")}
                </ul>
              </div>
            </div>`
              )
              .join("")}
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-black/20 p-4">
            <p className="text-sm text-white/70">
              Deployment model: we launch each vertical with (1) a governance baseline, (2) control-to-workflow mapping,
              (3) role-based agent policies, and (4) evidence automation. This keeps scope tight, outcomes measurable,
              and expansion predictable.
            </p>
          </div>
        </div>
      </section>
${END}
`;

let src = fs.readFileSync(TARGET, "utf8");

// Ensure file already has an Outlet layout — we refuse to proceed if not.
if (!src.includes("<Outlet")) {
  throw new Error("Target file does not appear to be an Outlet-based layout. Refusing to mutate.");
}

// Insert or replace between markers
if (src.includes(START) && src.includes(END)) {
  const re = new RegExp(`${START}[\\s\\S]*?${END}`, "m");
  src = src.replace(re, section.trim());
} else {
  // Insert after <Outlet /> line (safe, deterministic)
  const outletLineRe = /<Outlet\s*\/>\s*/m;
  if (!outletLineRe.test(src)) {
    throw new Error("Could not find <Outlet /> in layout. Refusing to mutate.");
  }
  src = src.replace(outletLineRe, (m) => `${m}\n${section.trim()}\n`);
}

// Idempotent write
const prev = fs.readFileSync(TARGET, "utf8");
if (prev !== src) {
  fs.writeFileSync(TARGET, src, "utf8");
  console.log("Governance verticals deployed into CoreIdentityTechnologiesComposed.");
} else {
  console.log("Governance verticals already deployed (idempotent).");
}

// Build-gate
execSync("npm run build", { stdio: "inherit" });
