import React from "react";
import { ButtonLink } from "../components/ButtonLink";

export function AGO1Page() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">
        AGO-1 Digital Labor Agent
      </h1>

      <p className="mt-4 opacity-80 max-w-3xl">
        AGO-1 is the internal and enterprise-facing digital labor agent designed
        to operate under strict governance, auditability, and human oversight.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <ButtonLink to="/sentinelos" variant="secondary">
          View Sentinel OS
        </ButtonLink>

        <ButtonLink to="/nexusos" variant="secondary">
          View Nexus OS
        </ButtonLink>

        <ButtonLink to="/smartnationai" variant="secondary">
          View SmartNation AI
        </ButtonLink>

        <ButtonLink to="/coreidentitytechnologies" variant="secondary">
          CoreIdentity Technologies
        </ButtonLink>

        <ButtonLink to="/coreidentityaiadvisorygroup" variant="secondary">
          Advisory Group
        </ButtonLink>
      </div>
    </main>
  );
}
