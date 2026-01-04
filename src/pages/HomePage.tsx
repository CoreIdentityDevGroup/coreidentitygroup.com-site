import * as React from "react";
import { Link } from "@tanstack/react-router";

export const HomePage = () => {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
      {/* Hero */}
      <header className="pt-2">
        <div className="text-sm font-medium tracking-wide text-white/60">
          Core Holding Corporation
        </div>

        <h1 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl">
          Three-layer governed
          <br />
          execution stack
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-7 text-white/70">
          Governance-first execution: policy enforcement (Sentinel), orchestration
          (Nexus), and digital labor deployment (SmartNation AI).
        </p>
      </header>

      {/* Platform Cards */}
      <section className="mt-10 space-y-5">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-start gap-4">
            <img
              src="/assets/icons/sentinel.webp"
              alt="Sentinel OS"
              className="h-14 w-14"
            />
            <div>
              <h2 className="text-xl font-semibold text-white">Sentinel OS</h2>
              <p className="mt-1 text-sm text-white/70">
                Governance layer enforcing policy, approvals, identity boundaries,
                and evidence capture.
              </p>
              <Link
                to="/sentinel-os"
                className="mt-3 inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-white/90"
              >
                View Sentinel OS
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-start gap-4">
            <img
              src="/assets/icons/nexus.webp"
              alt="Nexus OS"
              className="h-14 w-14"
            />
            <div>
              <h2 className="text-xl font-semibold text-white">Nexus OS</h2>
              <p className="mt-1 text-sm text-white/70">
                Orchestration layer coordinating workflows, integrations, retries,
                and recovery under constraints.
              </p>
              <Link
                to="/nexus-os"
                className="mt-3 inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-white/90"
              >
                View Nexus OS
              </Link>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
          <div className="flex items-start gap-4">
            <img
              src="/assets/icons/smartnation.webp"
              alt="SmartNation AI"
              className="h-14 w-14"
            />
            <div>
              <h2 className="text-xl font-semibold text-white">
                SmartNation AI
              </h2>
              <p className="mt-1 text-sm text-white/70">
                Deployment layer delivering governed AI workers executing real
                operational work with measurable outcomes.
              </p>
              <Link
                to="/smartnation-ai"
                className="mt-3 inline-block rounded-full border border-white/20 px-4 py-2 text-sm text-white/90"
              >
                View SmartNation AI
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
