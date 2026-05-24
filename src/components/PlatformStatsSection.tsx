// CIDG_GOOGLE_COMPLIANCE_PLATFORM_STATS_v2
import React from "react";

/**
 * PlatformStatsSection
 * Proof-oriented production metrics — every number is a proof, not a projection.
 * Sourced from verified live production deployments across AWS and GKE.
 */

interface Stat {
  value: string;
  label: string;
  proof: string;
}

const PRODUCTION_STATS: Stat[] = [
  {
    value: "25",
    label: "Governance Tables",
    proof: "Every agent action has a defined accountability boundary — schema-enforced, not policy-documented.",
  },
  {
    value: "734/734",
    label: "Tests Passing",
    proof: "Adversarial, compliance, load, and disaster recovery — all suites, simultaneously, all green.",
  },
  {
    value: "14",
    label: "Agents Fingerprinted",
    proof: "Real agents. Real executions. Every action cryptographically signed, attributed, and permanently recorded.",
  },
  {
    value: "3 of 3",
    label: "NIST FIPS PQ Standards",
    proof: "The only platform hardened against both current threats and future quantum decryption — FIPS 203, 204, and 205.",
  },
];

const INFRA_BADGES = [
  "AWS ECS Fargate (us-east-2)",
  "GKE (us-central1)",
  "Cloudflare Pages (Global CDN)",
  "RDS PostgreSQL",
  "AWS Secrets Manager",
];

export function PlatformStatsSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <div className="text-xs font-medium uppercase tracking-widest text-accent">
          Verified Production Infrastructure
        </div>
        <h2 className="font-serif text-display-md md:text-display-lg tracking-tight text-ink">
          Every number below is a proof, not a projection.
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PRODUCTION_STATS.map((stat) => (
          <div
            key={stat.label}
            className="cidg-card space-y-2 rounded-2xl border border-line bg-carbon-panel p-5 transition hover:border-accent/40"
          >
            <div className="tabular-figures text-3xl font-semibold leading-none text-ink">{stat.value}</div>
            <div className="text-sm font-medium text-accent">{stat.label}</div>
            <p className="text-xs leading-relaxed text-ink-secondary">{stat.proof}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2">
        <div className="text-xs uppercase tracking-widest text-ink-muted">Deployment Infrastructure</div>
        <div className="flex flex-wrap gap-2">
          {INFRA_BADGES.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 text-xs text-accent"
            >
              {badge}
            </span>
          ))}
          <span className="rounded-full border border-accent/25 bg-accent/5 px-3 py-1.5 text-xs text-accent">
            ● Live in Production
          </span>
        </div>
      </div>
    </section>
  );
}
