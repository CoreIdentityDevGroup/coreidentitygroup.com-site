import * as React from "react";
import { Link } from "@tanstack/react-router";
import { IllustratedIcon } from "../components/IllustratedIcon";

const CANONICAL =
  "Core Holding Corporation is the parent organization that builds and governs infrastructure for agentic digital labor through CoreIdentity Technologies—a platform delivering a three-layer governed execution stack consisting of Sentinel OS, Nexus OS, and SmartNation AI, supported by CoreIdentity AI Advisory Group and AgentIdentity Systems.";

type StackCardProps = {
  title: string;
  description: string;
  to: string;
  iconSrc: string;
  iconAlt: string;
  buttonLabel: string;
};

function StackCard({
  title,
  description,
  to,
  iconSrc,
  iconAlt,
  buttonLabel,
}: StackCardProps) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)]">
      <div className="flex items-start gap-4">
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          <IllustratedIcon
            src={iconSrc}
            alt={iconAlt}
            size={56}
            className="opacity-95"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="text-xl font-semibold tracking-tight text-white">
            {title}
          </div>
          <p className="mt-2 text-base leading-relaxed text-white/70">
            {description}
          </p>

          <div className="mt-4">
            <Link
              to={to}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] px-5 py-2.5 text-sm font-medium text-white/90 backdrop-blur transition hover:bg-white/[0.10] hover:text-white"
            >
              {buttonLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export function HomePage() {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pb-20 pt-10">
      {/* HERO */}
      <header className="mb-10">
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Three-layer governed execution stack
        </h1>



          {/* Governance Portal CTA */}
          <a
            href="https://portal.coreholdingcorp.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              background: 'rgba(212,175,55,0.1)',
              border: '1px solid rgba(212,175,55,0.35)',
              borderRadius: '8px',
              color: '#d4af37',
              fontSize: '15px',
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: '0.02em',
              marginTop: '16px',
              transition: 'all 0.15s',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            </svg>
            CoreIdentity Governance Portal →
          </a>        <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-white/70 md:text-lg">
          Governance-first execution: policy enforcement (Sentinel), orchestration
          (Nexus), and digital labor deployment (SmartNation AI).
        </p>

        {/* Canonical / SEO-safe statement (kept as plain text for stability) */}
        <p className="mt-4 max-w-3xl text-pretty text-sm leading-relaxed text-white/55">
          {CANONICAL}
        </p>
      </header>

      {/* STACK CARDS */}
      <section className="grid grid-cols-1 gap-6">
        <StackCard
          title="Sentinel OS"
          description="Governance layer enforcing policy, approvals, identity boundaries, and evidence capture."
          to="/sentinel-os"
          iconSrc="/assets/icons/sentinel.webp"
          iconAlt="Sentinel OS"
          buttonLabel="View Sentinel OS"
        />

        <StackCard
          title="Nexus OS"
          description="Orchestration layer coordinating workflows, integrations, retries, and recovery under constraints."
          to="/nexus-os"
          iconSrc="/assets/icons/nexus.webp"
          iconAlt="Nexus OS"
          buttonLabel="View Nexus OS"
        />

        <StackCard
          title="SmartNation AI"
          description="Deployment layer delivering governed AI workers executing real operational work with measurable outcomes."
          to="/smartnation-ai"
          iconSrc="/assets/icons/smartnation.webp"
          iconAlt="SmartNation AI"
          buttonLabel="View SmartNation AI"
        />
      </section>
    </main>
  );
}
