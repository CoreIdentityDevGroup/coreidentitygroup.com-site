import React from "react";
import { Card, PageTitle, SectionTitle } from "../components/ui";

type Resource = { title: string; description: string; status?: string };

const resources: Resource[] = [
  {
    title: "Executive Summary",
    description:
      "A concise orientation to CoreIdentity’s governance-first posture, portfolio structure, and the three-layer governed execution stack. Useful for executives who need clarity quickly.",
    status: "Reference",
  },
  {
    title: "Governance Primer",
    description:
      "Core concepts: policy enforcement, approvals, identity boundaries, evidence capture, auditability, and fail-closed controls. Defines what should and should not be delegated to automation.",
    status: "Reference",
  },
  {
    title: "Pilot Blueprint",
    description:
      "A controlled path from assessment → pilot → production. Defines scope boundaries, success metrics, evidence requirements, escalation triggers, and termination thresholds.",
    status: "Reference",
  },
  {
    title: "Operating Model Checklist",
    description:
      "A practical checklist for governance and operating controls: decision rights, human-in-the-loop requirements, logging and retention, exception handling, and change management.",
    status: "Reference",
  },
  {
    title: "Security & Compliance Posture (High-Level)",
    description:
      "A non-technical overview of how CoreIdentity approaches secure operations: least privilege, auditability, data minimization, and conservative defaults. Details are provided during engagement.",
    status: "Reference",
  },
  {
    title: "AGO‑1 Operator Brief",
    description:
      "How AGO‑1 is used internally to harden the execution stack in real workflows, produce repeatable evidence, and validate fail-closed controls—before client-facing deployments.",
    status: "Reference",
  },
];

export function ResourcesPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <PageTitle>Resources</PageTitle>
        <p className="text-white/70 max-w-3xl">
          Reference materials to support governance-first deployment and executive decision-making. These resources are written to be
          practical: they explain boundaries, controls, and what “safe to deploy” means in operational terms.
        </p>
      </div>

      <section className="space-y-5">
        <SectionTitle>Reference library</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          {resources.map((r) => (
            <Card key={r.title}>
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xl font-semibold">{r.title}</div>
                  {r.status && <span className="text-xs text-white/50">{r.status}</span>}
                </div>
                <p className="text-white/70 leading-relaxed">{r.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <SectionTitle>Next publish targets</SectionTitle>
        <div className="grid gap-5 md:grid-cols-2">
          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Hospitality Pilot Pattern</div>
              <p className="text-white/70 leading-relaxed">
                A reusable pattern derived from the Cole Hospitality pilot: workflow scope, controls, evidence requirements, and measurable outcomes.
              </p>
            </div>
          </Card>
          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Governance-Only Deployment Mode</div>
              <p className="text-white/70 leading-relaxed">
                When a client has agents but lacks governance: how Sentinel OS and Nexus OS can be deployed as a governance-first wrapper to restore control,
                auditability, and safety without replatforming everything.
              </p>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
