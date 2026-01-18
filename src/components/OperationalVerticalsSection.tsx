import * as React from "react";

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

export default function OperationalVerticalsSection() {
  return (
    <div className="mb-10">
      <div className="mb-3 flex items-center justify-between gap-4">
        <h2 className="text-2xl font-semibold text-white">
          Initial operational verticals
        </h2>
      </div>

      <p className="mb-6 max-w-3xl text-sm leading-6 text-white/70">
        We’re not launching “general AI.” We’re launching governed execution in
        specific markets with clear workflows, constraints, and measurable
        outcomes. LegalOps and ComplianceOps are first for revenue velocity;
        HospitalityOps runs in parallel as a targeted POC stream.
      </p>

      <div className="grid gap-5 md:grid-cols-2">
        {verticals.map((v) => {
          const tone =
            v.launchOrder === "Now"
              ? "green"
              : v.launchOrder === "Next"
                ? "amber"
                : "neutral";

          return (
            <div
              key={v.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-xl shadow-black/20"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{v.name}</h3>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    {v.oneLiner}
                  </p>
                </div>
                <Pill tone={tone}>{v.launchOrder}</Pill>
              </div>

              <div className="mt-4">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/50">
                  Target outcomes
                </div>
                <ul className="mt-2 space-y-2 text-sm text-white/75">
                  {v.outcomes.map((o) => (
                    <li key={o} className="flex gap-2">
                      <CheckIcon />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
