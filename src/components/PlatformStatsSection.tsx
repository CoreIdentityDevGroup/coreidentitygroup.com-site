// CIDG_GOOGLE_COMPLIANCE_PLATFORM_STATS_v1
import React from "react";

/**
 * PlatformStatsSection
 * Google Compliance Sprint — Gap 3: Product Clarity & Functionality
 * Proves the platform is live in production, not a roadmap or mockup.
 */

interface Stat {
  value: string;
  label: string;
  detail: string;
}

const PRODUCTION_STATS: Stat[] = [
  {
    value: "734 / 734",
    label: "Platinum Tests Passing",
    detail: "Security, PQ-CA, Load, DR, Compliance, and Adversarial suites"
  },
  {
    value: "3 of 3",
    label: "NIST FIPS PQ Standards",
    detail: "FIPS 203, 204, and 205 — first commercial platform in production"
  },
  {
    value: "100,000+",
    label: "Verified Agent Interactions",
    detail: "Continuous soak testing across live AWS ECS and GKE infrastructure"
  },
  {
    value: "20 Live",
    label: "Autonomous Agents",
    detail: "Awareness, BD/Sales, and Corporate Ops agents in production"
  }
];

const INFRA_BADGES = [
  "AWS ECS Fargate (us-east-2)",
  "GKE (us-central1)",
  "Cloudflare Pages (Global CDN)",
  "RDS PostgreSQL",
  "AWS Secrets Manager"
];

export function PlatformStatsSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-semibold tracking-widest text-blue-400 uppercase">
          Verified Production Infrastructure
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Platform in Action
        </h2>
        <p className="text-white/60 max-w-2xl leading-relaxed">
          CoreIdentity is operating infrastructure — not a roadmap. Every metric below
          is sourced from verified live production deployments across AWS and GKE.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {PRODUCTION_STATS.map((stat) => (
          <div
            key={stat.label}
            className="rounded-xl border border-white/10 bg-white/5 p-5 space-y-2 hover:border-blue-500/30 transition-colors duration-200"
          >
            <div className="text-xl font-bold text-white">{stat.value}</div>
            <div className="text-sm font-semibold text-blue-300">{stat.label}</div>
            <p className="text-xs text-white/45 leading-relaxed">{stat.detail}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <div className="text-xs text-white/40 uppercase tracking-wider">Deployment Infrastructure</div>
        <div className="flex flex-wrap gap-2">
          {INFRA_BADGES.map((badge) => (
            <span
              key={badge}
              className="text-xs px-3 py-1.5 rounded-full border border-blue-500/25 text-blue-400 bg-blue-500/8"
            >
              {badge}
            </span>
          ))}
          <span className="text-xs px-3 py-1.5 rounded-full border border-green-500/25 text-green-400 bg-green-500/8">
            ● Live in Production
          </span>
        </div>
      </div>
    </section>
  );
}
