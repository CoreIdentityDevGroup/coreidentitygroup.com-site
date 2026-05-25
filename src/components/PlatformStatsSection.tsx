// CIDG_GOOGLE_COMPLIANCE_PLATFORM_STATS_v2
import React from "react";
import { PlatinumProof } from "./institutional";

/**
 * PlatformStatsSection
 * Proof-oriented production metrics — every number is a proof, not a projection.
 * Sourced from verified live production deployments across AWS and GKE.
 */

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
          Proof, not projection.
        </h2>
      </div>

      <PlatinumProof />

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
