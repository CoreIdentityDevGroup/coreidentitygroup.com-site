import React from "react";
import { Card, PageTitle } from "../components/ui";

export function ResourcesPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>Resources</PageTitle>
        <p className="text-white/70 max-w-3xl">
          Reference materials to support governance-first deployment and executive decision-making.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {[
          { title: "Executive Summary", desc: "High-level overview of the governed execution portfolio and deployment posture." },
          { title: "Governance Primer", desc: "Core concepts: policy, approvals, identity boundaries, evidence, and fail-closed controls." },
          { title: "Pilot Blueprint", desc: "A controlled path from assessment to pilot to production deployment." },
          { title: "Operating Model Checklist", desc: "Governance and operating controls for deploying autonomous execution in high-stakes operations." },
        ].map((r) => (
          <Card key={r.title}>
            <div className="text-xl font-semibold">{r.title}</div>
            <div className="mt-2 text-white/70">{r.desc}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
