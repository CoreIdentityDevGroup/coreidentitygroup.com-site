import React from "react";
import { Card, PageTitle } from "../components/ui";

export function NexusOSPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>Nexus OS</PageTitle>
        <div className="text-sm text-white/60">A Core Holding Corporation company.</div>
        <p className="text-white/70 max-w-3xl">Orchestration layer coordinating workflows, integrations, routing, recovery, and state management under governance constraints.</p>
      </div>
      <Card>
        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Workflow orchestration</li><li>Systems integration</li><li>Task routing</li><li>Reliability + recovery</li><li>Exception handling</li>
        </ul>
      </Card>
    </div>
  );
}
