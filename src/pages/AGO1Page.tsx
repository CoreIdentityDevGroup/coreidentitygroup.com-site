import React from "react";
import { ButtonLink } from "../components/ButtonLink";

export function AGO1Page() {
  return (
    <section className="max-w-4xl mx-auto py-16">
      <h1 className="text-4xl font-bold mb-6">AGO-1</h1>

      <p className="text-lg text-gray-300 mb-8">
        AGO-1 is Core Holding Corporation’s first operational digital labor
        agent, designed to demonstrate governed autonomy, compliance-first
        execution, and real enterprise utility.
      </p>

      <div className="flex flex-wrap gap-4">
        <ButtonLink to="/sentinel" variant="secondary">
          View Sentinel
        </ButtonLink>

        <ButtonLink to="/nexus" variant="secondary">
          View Nexus
        </ButtonLink>

        <ButtonLink to="/smartnation" variant="secondary">
          View SmartNation
        </ButtonLink>
      </div>
    </section>
  );
}
