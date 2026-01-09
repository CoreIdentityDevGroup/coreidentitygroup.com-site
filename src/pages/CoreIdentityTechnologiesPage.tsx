import { Link } from "@tanstack/react-router";

import heroImg from "../assets/images/coreidentity-governance-hero.webp";
import sentinelImg from "../assets/images/sentinel.webp";
import nexusImg from "../assets/images/nexus.webp";
import smartnationImg from "../assets/images/smartnation.webp";

export function CoreIdentityTechnologiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          CoreIdentity
          <br />
          Technologies
        </h1>

        <p className="mt-4 text-sm text-white/70">A Core Holding Corporation company.</p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70">
          CoreIdentity Technologies is the platform company delivering the governance-first execution
          stack for safe, auditable AI operations.
        </p>
      </div>

      {/* Hero image */}
      <div className="mb-12 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img
          src={heroImg}
          alt="AI operates under governance"
          className="h-auto w-full"
          loading="lazy"
        />
      </div>

      {/* Stack section */}
      <div className="mb-6">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Three-layer governed
          <br />
          execution stack
        </h2>
      </div>

      <div className="grid gap-6">
        {/* Sentinel */}
        <div className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <img src={sentinelImg} alt="Sentinel OS" className="h-9 w-9" loading="lazy" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">Sentinel OS</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Governance layer enforcing policy, approvals, identity boundaries, and evidence capture.
            </p>

            <div className="mt-4">
              <Link
                to="/sentinel-os"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 hover:bg-white/10"
              >
                View Sentinel OS
              </Link>
            </div>
          </div>
        </div>

        {/* Nexus */}
        <div className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <img src={nexusImg} alt="Nexus OS" className="h-9 w-9" loading="lazy" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">Nexus OS</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Orchestration layer coordinating workflows, integrations, retries, and recovery under
              constraints.
            </p>

            <div className="mt-4">
              <Link
                to="/nexus-os"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 hover:bg-white/10"
              >
                View Nexus OS
              </Link>
            </div>
          </div>
        </div>

        {/* SmartNation */}
        <div className="flex items-center gap-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-black/20">
            <img src={smartnationImg} alt="SmartNation AI" className="h-9 w-9" loading="lazy" />
          </div>

          <div className="flex-1">
            <h3 className="text-xl font-semibold text-white">SmartNation AI</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              Deployment layer delivering governed AI workers executing real operational work with
              measurable outcomes.
            </p>

            <div className="mt-4">
              <Link
                to="/smartnation-ai"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 hover:bg-white/10"
              >
                View SmartNation AI
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreIdentityTechnologiesPage;
