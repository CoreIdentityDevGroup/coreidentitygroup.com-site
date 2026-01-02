import React from "react";
import { Card, PageHero, Section, SectionTitle, ButtonLink } from "../components/ui";

export function CoreIdentityAdvisoryGroupPage() {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-white/60 mb-3">
  Advisory capability
</p>

<h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
  CoreIdentity AI Advisory Group
</h1>

<p className="mt-4 text-lg text-white/70 max-w-3xl">
  {/* keep your existing subtitle sentence here (copy it from the old prop) */}
</p>

      <Section>
        <SectionTitle>What we do</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Executive AI Readiness & Risk Review</div>
              <p className="text-white/70 leading-relaxed">
                A governance-first assessment that clarifies where AI creates leverage now, where it creates legal/regulatory/reputational risk, and what
                should not be automated. Produces a practical “do / don’t / defer” decision framework.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Governance-Only Deployment Mode</div>
              <p className="text-white/70 leading-relaxed">
                For organizations that already have agents but lack governance: Sentinel OS and Nexus OS can be deployed as a control wrapper to restore
                policy enforcement, auditability, evidence capture, and safe escalation—without replatforming everything.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Pilot Readiness & Control Blueprint</div>
              <p className="text-white/70 leading-relaxed">
                A controlled engagement that defines scope boundaries, success metrics, evidence requirements, escalation triggers, and termination
                thresholds—so pilots are operationally safe and executive-readable.
              </p>
            </div>
          </Card>

          <Card>
            <div className="space-y-2">
              <div className="text-xl font-semibold">Evidence-driven iteration</div>
              <p className="text-white/70 leading-relaxed">
                Advisory work is a learning loop. Every engagement produces reusable governance patterns, decision templates, and controls that harden the
                CoreIdentity platform strategy.
              </p>
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionTitle>How AGO‑1 is used</SectionTitle>
        <Card>
          <div className="space-y-3">
            <p className="text-white/70 leading-relaxed">
              AGO‑1 is an internal operating agent used to augment advisory and CHC operations while remaining non-client-facing. AGO‑1 runs under Sentinel
              OS and Nexus OS controls and is used to validate fail-closed behaviors, produce audit evidence, and operationalize governance patterns in real
              workflows.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/ago-1">View AGO‑1</ButtonLink>
              <ButtonLink href="/sentinel-os">Sentinel OS</ButtonLink>
              <ButtonLink href="/nexus-os">Nexus OS</ButtonLink>
            </div>
          </div>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Positioning</SectionTitle>
        <Card>
          <p className="text-white/70 leading-relaxed">
            Advisory is not the product. It is a controlled on-ramp that generates early revenue and credibility while validating the operating realities
            required to deploy governed digital labor safely at scale.
          </p>
        </Card>
      </Section>
    </div>
  );
}
