#!/usr/bin/env python3
"""
feat: strengthen metrics — proof not projection.

1. HomePage.tsx renders TWO stat blocks — a hardcoded "Traction stats" section
   (ProofStat) AND <PlatformStatsSection/>. Remove the hardcoded duplicate and
   drop the now-unused ProofStat import (SectionHead stays — still used above).
2. Rewrite PlatformStatsSection.tsx with proof-oriented messaging and the
   Institutional Carbon palette (deterministic overwrite).
"""
import sys

HOMEPAGE = "src/pages/HomePage.tsx"

HOME_SECTION_FIND = '''      {/* 5 — Traction stats */}
      <section>
        <SectionHead title="Operating infrastructure, not a roadmap" intro="Every figure below is sourced from live production deployments." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <ProofStat value="25" label="Governance tables" detail="Codified policy, controls, and evidence schemas" />
          <ProofStat value="734 / 734" label="Tests passing" detail="Security, PQ-CA, load, DR, compliance, adversarial" />
          <ProofStat value="14" label="Agents fingerprinted" detail="Live runtime behavioral profiles under monitoring" />
          <ProofStat value="3 of 3" label="NIST FIPS PQ standards" detail="FIPS 203, 204, and 205 — first in production" />
        </div>
      </section>

      {/* Live enforcement — fed by the secured /api/live-metrics Worker (Step 0) */}'''

HOME_SECTION_REPLACE = '''      {/* Live enforcement — fed by the secured /api/live-metrics Worker (Step 0) */}'''

HOME_IMPORT_FIND = 'import { SectionHead, ProofStat } from "../components/institutional";'
HOME_IMPORT_REPLACE = 'import { SectionHead } from "../components/institutional";'

STATS = '''// CIDG_GOOGLE_COMPLIANCE_PLATFORM_STATS_v2
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
'''


def main():
    ok = True

    # 1) HomePage — remove hardcoded duplicate + unused import
    with open(HOMEPAGE, "r", encoding="utf-8") as f:
        content = f.read()
    if "{/* 5 — Traction stats */}" not in content:
        print(f"[SKIP] {HOMEPAGE} — duplicate stats already removed.")
    elif HOME_SECTION_FIND in content:
        content = content.replace(HOME_SECTION_FIND, HOME_SECTION_REPLACE, 1)
        print(f"[OK] {HOMEPAGE} — hardcoded duplicate stats removed.")
    else:
        print(f"[ERROR] {HOMEPAGE} — traction-stats anchor not found.")
        ok = False
    if HOME_IMPORT_FIND in content:
        content = content.replace(HOME_IMPORT_FIND, HOME_IMPORT_REPLACE, 1)
        print(f"[OK] {HOMEPAGE} — dropped unused ProofStat import.")
    else:
        print(f"[SKIP] {HOMEPAGE} — ProofStat import already dropped.")
    with open(HOMEPAGE, "w", encoding="utf-8") as f:
        f.write(content)

    # 2) PlatformStatsSection — deterministic rewrite
    with open("src/components/PlatformStatsSection.tsx", "w", encoding="utf-8") as f:
        f.write(STATS)
    print("[OK] src/components/PlatformStatsSection.tsx — rewritten (proof-oriented).")

    sys.exit(0 if ok else 1)


if __name__ == "__main__":
    main()
