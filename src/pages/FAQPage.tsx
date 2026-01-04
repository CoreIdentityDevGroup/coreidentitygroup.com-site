import React from "react";
import { Link } from "@tanstack/react-router";

export function FAQPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-semibold tracking-tight">FAQ</h1>
      <p className="mt-3 text-base opacity-80">
        Quick answers and direct navigation to the most requested pages.
      </p>

      <section className="mt-10 space-y-6">
        <div>
          <h2 className="text-xl font-semibold">Where can I learn about Sentinel OS?</h2>
          <p className="mt-2 opacity-80">
            Sentinel OS is the governance and compliance layer across the CHC stack.
          </p>
          <Link to="/sentinelos" className="inline-block mt-2 underline">
            Go to Sentinel OS
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Where can I learn about Nexus OS?</h2>
          <p className="mt-2 opacity-80">
            Nexus OS is the execution and orchestration layer for digital labor workflows.
          </p>
          <Link to="/nexusos" className="inline-block mt-2 underline">
            Go to Nexus OS
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Where is SmartNation AI?</h2>
          <p className="mt-2 opacity-80">
            SmartNation AI represents packaged solutions built on top of the platform stack.
          </p>
          <Link to="/smartnationai" className="inline-block mt-2 underline">
            Go to SmartNation AI
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Where is CoreIdentity Technologies?</h2>
          <p className="mt-2 opacity-80">
            CoreIdentity Technologies is the platform and product foundation.
          </p>
          <Link to="/coreidentitytechnologies" className="inline-block mt-2 underline">
            Go to CoreIdentity Technologies
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Where is the Advisory Group page?</h2>
          <p className="mt-2 opacity-80">
            CoreIdentity AI Advisory Group is the services and enterprise entry arm.
          </p>
          <Link to="/coreidentityaiadvisorygroup" className="inline-block mt-2 underline">
            Go to CoreIdentity AI Advisory Group
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Where is AgentIdentity Systems?</h2>
          <p className="mt-2 opacity-80">
            AgentIdentity Systems focuses on identity, governance, and guardrails for agents.
          </p>
          <Link to="/agentidentitysystems" className="inline-block mt-2 underline">
            Go to AgentIdentity Systems
          </Link>
        </div>

        <div>
          <h2 className="text-xl font-semibold">How do I contact CHC?</h2>
          <p className="mt-2 opacity-80">
            Use the contact page to request a briefing or share partnership inquiries.
          </p>
          <Link to="/contact" className="inline-block mt-2 underline">
            Go to Contact
          </Link>
        </div>
      </section>
    </main>
  );
}
