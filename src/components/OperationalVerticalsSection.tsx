import React from "react";

type Vertical = {
  name: string;
  launchOrder: "Now" | "Next";
  oneLiner: string;
  outcomes: string[];
};

const VERTICALS: Vertical[] = [
  {
    name: "LegalOps",
    launchOrder: "Now",
    oneLiner:
      "Governed AI workers for legal operations: intake, drafting, review workflows, and policy controls.",
    outcomes: [
      "Faster contract intake and triage",
      "Standardized drafting and review playbooks",
      "Audit-ready decision trails and approvals",
    ],
  },
  {
    name: "ComplianceOps",
    launchOrder: "Now",
    oneLiner:
      "Continuous compliance execution across regulated workflows with enforced controls and evidence capture.",
    outcomes: [
      "Policy-aligned execution in regulated environments",
      "Continuous monitoring and exception handling",
      "Regulator-ready reporting and audit trails",
    ],
  },
  {
    name: "HospitalityOps",
    launchOrder: "Next",
    oneLiner:
      "Operational AI workers for hospitality workflows, piloted as a controlled POC stream.",
    outcomes: [
      "Workflow automation under governance constraints",
      "Operational efficiency without compliance drift",
      "Measured pilot outcomes before scale",
    ],
  },
];

export default function OperationalVerticalsSection() {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-white mb-4">
        Initial operational verticals
      </h2>
      <p className="text-white/70 mb-8">
        We are launching governed execution in specific markets with clear
        workflows, constraints, and measurable outcomes.
      </p>

      <div className="grid gap-6">
        {VERTICALS.map((v) => (
          <div
            key={v.name}
            className="rounded-2xl border border-white/10 bg-black/30 p-6"
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-white">{v.name}</h3>
              <span className="text-xs rounded-full px-3 py-1 bg-white/10 text-white">
                {v.launchOrder}
              </span>
            </div>

            <p className="text-white/70 mb-4">{v.oneLiner}</p>

            <ul className="list-disc list-inside space-y-1 text-white/80">
              {v.outcomes.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
