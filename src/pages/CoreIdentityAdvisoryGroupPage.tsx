import React from "react";
import { Card, PageTitle } from "../components/ui";

export function CoreIdentityAdvisoryGroupPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>CoreIdentity Advisory Group</PageTitle>
        <div className="text-sm text-white/60">A Core Holding Corporation company.</div>
        <p className="text-white/70 max-w-3xl">Advisory arm providing readiness assessment, pilot design, and governance deployment strategies for regulated environments.</p>
      </div>
      <Card>
        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Executive AI Readiness & Risk Review</li><li>Governance-Only Deployment Mode</li><li>Pilot Blueprint & Controls</li><li>Controlled Rollout Strategy</li>
        </ul>
      </Card>
    </div>
  );
}
