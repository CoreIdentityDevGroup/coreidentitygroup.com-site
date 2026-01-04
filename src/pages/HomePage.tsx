import React from "react";
import { ButtonLink } from "../components/ButtonLink";

export function HomePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight max-w-3xl">
        Governed Digital Labor for the Enterprise
      </h1>

      <p className="mt-6 max-w-3xl opacity-80">
        Core Holding Corporation builds and governs digital labor systems that
        augment human teams while maintaining compliance, auditability, and
        executive control.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <ButtonLink to="/contact" variant="primary">
          Request a Briefing
        </ButtonLink>

        <ButtonLink to="/portfolio" variant="secondary">
          Explore the Portfolio
        </ButtonLink>
      </div>

      <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <ButtonLink to="/sentinelos" variant="secondary">
          Sentinel OS
        </ButtonLink>

        <ButtonLink to="/nexusos" variant="secondary">
          Nexus OS
        </ButtonLink>

        <ButtonLink to="/smartnationai" variant="secondary">
          SmartNation AI
        </ButtonLink>

        <ButtonLink to="/coreidentitytechnologies" variant="secondary">
          CoreIdentity Technologies
        </ButtonLink>

        <ButtonLink to="/coreidentityaiadvisorygroup" variant="secondary">
          Advisory Group
        </ButtonLink>

        <ButtonLink to="/ago1" variant="secondary">
          AGO-1 Digital Labor Agent
        </ButtonLink>
      </div>
    </main>
  );
}
