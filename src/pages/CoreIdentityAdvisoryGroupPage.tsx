import React from "react";
import { ButtonLink } from "../components/ButtonLink";

export function CoreIdentityAdvisoryGroupPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">
        CoreIdentity AI Advisory Group
      </h1>

      <p className="mt-4 opacity-80 max-w-3xl">
        The Advisory Group provides executive AI readiness, governance strategy,
        and controlled enterprise adoption pathways into the CHC platform stack.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <ButtonLink to="/ago1" variant="secondary">
          View AGO-1
        </ButtonLink>

        <ButtonLink to="/sentinelos" variant="secondary">
          Sentinel OS
        </ButtonLink>

        <ButtonLink to="/nexusos" variant="secondary">
          Nexus OS
        </ButtonLink>

        <ButtonLink to="/agentidentitysystems" variant="secondary">
          AgentIdentity Systems
        </ButtonLink>
      </div>
    </main>
 );
}
