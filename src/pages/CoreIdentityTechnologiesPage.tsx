// src/pages/CoreIdentityTechnologiesPage.tsx

import heroImg from "../assets/images/coreidentity-governance-hero.webp";
import { stackIcons } from "../assets/stackIcons";
import { ButtonLink } from "../components/ui";

export function CoreIdentityTechnologiesPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight">
          CoreIdentity
          <br />
          Technologies
        </h1>

        <p className="mt-4 text-sm text-white/70">A Core Holding Corporation company.</p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80">
          CoreIdentity Technologies is the platform company delivering the governance-first execution stack for safe,
          auditable AI operations.
        </p>
      </div>

      {/* Hero image */}
      <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <img
          src={heroImg}
          alt="CoreIdentity — AI doesn’t replace leadership. It operates under governance."
          className="h-auto w-full"
          loading="lazy"
        />
      </div>

      {/* Stack section */}
      <h2 className="mb-6 text-3xl font-semibold tracking-tight">
        Three-layer governed
        <br />
        execution stack
      </h2>

      <div className="space-y-6">
        {/* Sentinel */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-4">
            {/* ICON (bigger, no frame/box) */}
            <img
              src={stackIcons.sentinel}
              alt="Sentinel OS"
              className="h-14 w-14 shrink-0"
              loading="lazy"
            />

            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Sentinel OS</h3>
              <p className="mt-2 text-white/70">
                Governance layer enforcing policy, approvals, identity boundaries, and evidence capture.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <ButtonLink to="/sentinel-os" variant="sentinel">
              View Sentinel OS
            </ButtonLink>
          </div>
        </div>

        {/* Nexus */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-4">
            {/* ICON (bigger, no frame/box) */}
            <img
              src={stackIcons.nexus}
              alt="Nexus OS"
              className="h-14 w-14 shrink-0"
              loading="lazy"
            />

            <div className="flex-1">
              <h3 className="text-2xl font-semibold">Nexus OS</h3>
              <p className="mt-2 text-white/70">
                Orchestration layer coordinating workflows, integrations, retries, and recovery under constraints.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <ButtonLink to="/nexus-os" variant="nexus">
              View Nexus OS
            </ButtonLink>
          </div>
        </div>

        {/* SmartNation */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-4">
            {/* ICON (bigger, no frame/box) */}
            <img
              src={stackIcons.smartnation}
              alt="SmartNation AI"
              className="h-14 w-14 shrink-0"
              loading="lazy"
            />

            <div className="flex-1">
              <h3 className="text-2xl font-semibold">SmartNation AI</h3>
              <p className="mt-2 text-white/70">
                Deployment layer delivering governed AI workers executing real operational work with measurable outcomes.
              </p>
            </div>
          </div>

          <div className="mt-6">
            <ButtonLink to="/smartnation-ai" variant="smartnation">
              View SmartNation AI
            </ButtonLink>
          </div>
        </div>
      </div>
    </div>
  );
}
