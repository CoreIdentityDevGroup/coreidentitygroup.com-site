/* CHC_TECHNOLOGIES_LAYOUT_ROUTE */
import * as React from "react";
import { Outlet } from "@tanstack/react-router";

export function CoreIdentityTechnologiesComposed() {
  return (
    <>
      <Outlet />
      
/* CHC_GOVERNANCE_VERTICALS_START */
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
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">LegalOps Digital Workforce</h3>
                <p className="text-sm text-white/70">Policy-controlled contract review, regulatory mapping, evidence capture, audit-ready reporting.</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Contract intake → review → redlines</li><li>• Regulatory obligations mapping</li><li>• Evidence & attestation packs</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">HospitalityOps Governance Workforce</h3>
                <p className="text-sm text-white/70">Governed operational workflows for property ops, vendor compliance, and incident response.</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Vendor onboarding & compliance</li><li>• Policy-driven incident triage</li><li>• SOP execution verification</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">LaborOps Governance Workforce</h3>
                <p className="text-sm text-white/70">Shift, credential, and policy compliance automation across frontline operations.</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Credential validation</li><li>• Policy-based scheduling checks</li><li>• Training & recertification tracking</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">Procurement & Tariff Governance</h3>
                <p className="text-sm text-white/70">Controlled sourcing workflows with tariff logic, documentation trails, and exception handling.</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Tariff impact tracking</li><li>• Supplier risk/compliance scoring</li><li>• Exception approvals with evidence</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">Cyber GRC Governance Workforce</h3>
                <p className="text-sm text-white/70">Continuous controls monitoring, policy enforcement workflows, and audit artifact generation.</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Control testing orchestration</li><li>• Evidence collection</li><li>• Audit readiness dashboards</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">Finance & Controls Governance</h3>
                <p className="text-sm text-white/70">SOX-aligned workflow controls, approvals, reconciliation governance, and anomaly escalation.</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Approval chains with segregation</li><li>• Reconciliation governance</li><li>• Exception routing & logging</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">HR & People Compliance</h3>
                <p className="text-sm text-white/70">Policy enforcement for onboarding, access governance handoffs, and training compliance.</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Onboarding controls</li><li>• Access-request governance</li><li>• Training & attestations</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">Supply Chain Governance</h3>
                <p className="text-sm text-white/70">End-to-end visibility with governed exception handling for logistics, inventory, and vendor SLAs.</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• SLA compliance monitoring</li><li>• Exception triage</li><li>• Vendor performance evidence packs</li>
                </ul>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <div className="flex flex-col gap-2">
                <h3 className="text-base font-semibold">AI Governance & Model Risk</h3>
                <p className="text-sm text-white/70">Model lifecycle governance, policy gates, risk registers, and traceable approvals.</p>
                <ul className="mt-2 space-y-1 text-sm text-white/70">
                  <li>• Use-case intake & approval</li><li>• Risk register workflows</li><li>• Monitoring & incident playbooks</li>
                </ul>
              </div>
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
/* CHC_GOVERNANCE_VERTICALS_END */
<section style={{ marginTop: 32 }}>
        {/* additive content goes here */}
      </section>
    </>
  );
}
