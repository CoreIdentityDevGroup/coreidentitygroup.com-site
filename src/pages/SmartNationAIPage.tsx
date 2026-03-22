import React from "react";
import { Card, PageTitle } from "../components/ui";

export function SmartNationAIPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>SmartNation AI</PageTitle>
        <div className="text-sm text-white/60">A CoreIdentity Development Group Inc. company.</div>
        <p className="text-white/70 max-w-3xl">Digital labor layer deploying role-based AI workers executing real operational work under policy constraints with evidence by default.</p>
      </div>
      <Card>
        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Role-based digital workers</li><li>Operational task execution</li><li>Evidence-by-default outputs</li><li>Escalation to humans</li><li>Production monitoring</li>
        </ul>
      </Card>
    </div>
  );
}
