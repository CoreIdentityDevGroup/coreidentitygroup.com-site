import React from "react";
import { Card, PageTitle } from "../components/ui";

export function SentinelOSPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>Sentinel OS</PageTitle>
        <div className="text-sm text-white/60">A Core Holding Corporation company.</div>
        <p className="text-white/70 max-w-3xl">Governance layer enforcing policy, approvals, identity boundaries, and audit-ready evidence for autonomous systems.</p>
      </div>
      <Card>
        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Policy enforcement</li><li>Identity + permissions</li><li>Approval gates</li><li>Evidence + audit trails</li><li>Fail-closed controls</li>
        </ul>
      </Card>
    </div>
  );
}
