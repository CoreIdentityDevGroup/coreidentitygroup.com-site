// src/pages/CoreIdentityTechnologiesPage.tsx
import heroImg from "../assets/images/coreidentity-governance-hero.webp";

import sentinelIcon from "../assets/images/sentinel.webp";
import nexusIcon from "../assets/images/nexus.webp";
import smartnationIcon from "../assets/images/smartnation.webp";

export default function CoreIdentityTechnologiesPage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-20 pt-10">
      <header className="mb-10">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          CoreIdentity Technologies
        </h1>
        <p className="mt-3 text-base text-white/60 sm:text-lg">
          A Core Holding Corporation company.
        </p>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70">
          CoreIdentity Technologies is the platform company delivering the governance-first execution
          stack for safe, auditable AI operations.
        </p>
      </header>

      {/* HERO */}
      <section className="mb-14">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img
            src={heroImg}
            alt="CoreIdentity — AI operates under governance"
            className="h-auto w-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* STACK */}
      <section className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          Three-layer governed execution stack
        </h2>

        <div className="mt-8 space-y-6">
          {/* Sentinel */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <img
                src={sentinelIcon}
                alt="Sentinel OS"
                className="h-10 w-10"
                loading="lazy"
              />
            </div>

            <div className="min-w-0">
              <div className="text-lg font-semibold text-white">Sentinel OS</div>
              <div className="mt-1 text-sm leading-relaxed text-white/65">
                Governance layer enforcing policy, approvals, and evidence capture.
              </div>
            </div>
          </div>

          {/* Nexus */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <img src={nexusIcon} alt="Nexus OS" className="h-10 w-10" loading="lazy" />
            </div>

            <div className="min-w-0">
              <div className="text-lg font-semibold text-white">Nexus OS</div>
              <div className="mt-1 text-sm leading-relaxed text-white/65">
                Orchestration layer coordinating workflows, integrations, and recovery.
              </div>
            </div>
          </div>

          {/* SmartNation */}
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-black/20">
              <img
                src={smartnationIcon}
                alt="SmartNation AI"
                className="h-10 w-10"
                loading="lazy"
              />
            </div>

            <div className="min-w-0">
              <div className="text-lg font-semibold text-white">SmartNation AI</div>
              <div className="mt-1 text-sm leading-relaxed text-white/65">
                Digital labor catalog layer defining tasks, controls, and operating constraints.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mt-14 rounded-2xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-xl font-semibold text-white">Governance-first, by design</h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-white/70">
          We do not optimize for autonomy first. We optimize for control, auditability, and human
          accountability—then we scale execution within those guardrails.
        </p>
      </section>
    </main>
  );
}
