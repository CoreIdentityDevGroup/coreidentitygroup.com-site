import React from "react";
import { Card, PageTitle } from "../components/ui";

export function AgentIdentitySystemsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <PageTitle>AgentIdentity Systems</PageTitle>
        <div className="text-sm text-white/60">A CoreIdentity Development Group Inc. company.</div>
        <p className="text-white/70 max-w-3xl">Identity and accountability R&D advancing authentication, authorization, provenance, and attribution frameworks for AI agents.</p>
      </div>
      <Card>
        <ul className="list-disc pl-5 space-y-2 text-white/75">
          <li>Agent authentication</li><li>Agent authorization</li><li>Provenance and traceability</li><li>Attribution and accountability</li><li>Policy-linked identity boundaries</li>
        </ul>
      </Card>
    </div>
  );
}
