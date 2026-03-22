import React from "react";
import { Card, PageTitle } from "../components/ui";

export function NexusOSPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>Nexus OS</PageTitle>
        <div className="text-sm text-white/60">A CoreIdentity Development Group Inc. company.</div>
        <p className="text-white/70 max-w-3xl">Your agent workforce, operating as a governed fleet — not a collection of independent actors with no accountability chain. Nexus OS orchestrates multi-agent workflows under governance constraints, ensuring every task, integration, and recovery action stays within the boundaries Sentinel OS enforces.</p>
      </div>
      <Card>
        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Workflow orchestration — governed execution across every agent in the fleet</li><li>Systems integration — enterprise connections that inherit policy boundaries automatically</li><li>Task routing — the right agent, the right task, within authorized scope</li><li>Reliability + recovery — failure handled within governance constraints, not around them</li><li>Exception handling — escalation to humans when policy is ambiguous, not silent failure</li>
        </ul>
      </Card>
    </div>
  );
}
