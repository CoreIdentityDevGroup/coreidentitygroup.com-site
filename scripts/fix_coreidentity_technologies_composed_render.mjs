import fs from "node:fs";
import path from "node:path";
import { execSync } from "node:child_process";

const ROOT = process.cwd();
const TARGET = path.join(ROOT, "src/components/CoreIdentityTechnologiesComposed.tsx");

const next = `/* CHC_TECHNOLOGIES_COMPOSED_LOCK */
/* CHC_GOVERNANCE_VERTICALS_START */
/* CHC_GOVERNANCE_VERTICALS_END */

import * as React from "react";

// We do NOT import a specific symbol.
// We load the module and render: default OR CoreIdentityTechnologiesPage OR first exported value.
const Page = React.lazy(() =>
  import("../pages/CoreIdentityTechnologiesPage").then((m: any) => {
    const candidate =
      m?.default ??
      m?.CoreIdentityTechnologiesPage ??
      m?.Route ??
      (m ? Object.values(m)[0] : null);

    return { default: candidate ?? (() => null) };
  })
);

export function CoreIdentityTechnologiesComposed() {
  return (
    <>
      <React.Suspense fallback={null}>
        <Page />
      </React.Suspense>

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
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h3 className="text-base font-semibold">LegalOps Digital Workforce</h3>
              <p className="text-sm text-white/70 mt-2">
                Policy-controlled contract review, regulatory mapping, evidence capture, audit-ready reporting.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-white/70">
                <li>• Contract intake → review → redlines</li>
                <li>• Regulatory obligations mapping</li>
                <li>• Evidence &amp; attestation packs</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h3 className="text-base font-semibold">HospitalityOps Governance Workforce</h3>
              <p className="text-sm text-white/70 mt-2">
                Governed operational workflows for property ops, vendor compliance, and incident response.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-white/70">
                <li>• Vendor onboarding &amp; compliance</li>
                <li>• Policy-driven incident triage</li>
                <li>• SOP execution verification</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h3 className="text-base font-semibold">LaborOps Governance Workforce</h3>
              <p className="text-sm text-white/70 mt-2">
                Shift, credential, and policy compliance automation across frontline operations.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-white/70">
                <li>• Credential validation</li>
                <li>• Policy-based scheduling checks</li>
                <li>• Training &amp; recertification tracking</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h3 className="text-base font-semibold">Procurement &amp; Tariff Governance</h3>
              <p className="text-sm text-white/70 mt-2">
                Controlled sourcing workflows with tariff logic, documentation trails, and exception handling.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-white/70">
                <li>• Tariff impact tracking</li>
                <li>• Supplier risk/compliance scoring</li>
                <li>• Exception approvals with evidence</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h3 className="text-base font-semibold">Cyber GRC Governance Workforce</h3>
              <p className="text-sm text-white/70 mt-2">
                Continuous controls monitoring, policy enforcement workflows, and audit artifact generation.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-white/70">
                <li>• Control testing orchestration</li>
                <li>• Evidence collection</li>
                <li>• Audit readiness dashboards</li>
              </ul>
            </div>

            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <h3 className="text-base font-semibold">AI Governance &amp; Model Risk</h3>
              <p className="text-sm text-white/70 mt-2">
                Model lifecycle governance, policy gates, risk registers, and traceable approvals.
              </p>
              <ul className="mt-3 space-y-1 text-sm text-white/70">
                <li>• Use-case intake &amp; approval</li>
                <li>• Risk register workflows</li>
                <li>• Monitoring &amp; incident playbooks</li>
              </ul>
            </div>
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
    </>
  );
}
`;

const prev = fs.existsSync(TARGET) ? fs.readFileSync(TARGET, "utf8") : null;
if (prev !== next) {
  fs.mkdirSync(path.dirname(TARGET), { recursive: true });
  fs.writeFileSync(TARGET, next, "utf8");
  console.log("Fixed CoreIdentityTechnologiesComposed: renders original page + governance verticals (idempotent).");
} else {
  console.log("CoreIdentityTechnologiesComposed already fixed (idempotent).");
}

execSync("npm run build", { stdio: "inherit" });
