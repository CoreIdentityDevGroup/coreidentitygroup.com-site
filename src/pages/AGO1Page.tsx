import { PageHero, Section, SectionTitle, Card, CardTitle, CardText, ButtonLink } from "../components/ui";

export function AGO1Page() {
  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-white/60 mb-3">
  Internal operating agent (non-client-facing)
</p>

<h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
  AGO-1
</h1>

<p className="mt-4 text-lg text-white/70 max-w-3xl">
  {/* keep your existing subtitle sentence here (copy it from the old prop) */}
</p>

      <Section>
        <SectionTitle>What AGO‑1 is</SectionTitle>
        <Card>
          <CardText>
            AGO‑1 is an internal operating agent that runs under <strong>Sentinel OS</strong> (policy, approvals, audit trails) and
            <strong> Nexus OS</strong> (workflow orchestration and recovery). It is deliberately <strong>non‑client‑facing</strong> and is used to
            (1) augment Core Holding Corporation and CoreIdentity AI Advisory Group operations, and (2) serve as a controlled first pilot pattern for
            hospitality workflows (beginning with the Cole Hospitality pilot).
          </CardText>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Why it matters</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardTitle>Hardens governance in practice</CardTitle>
            <CardText>
              Governance concepts become operational only when exercised. AGO‑1 creates repeatable evidence: approvals, traces, outputs, and exceptions.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Validates “fail‑closed” controls</CardTitle>
            <CardText>
              AGO‑1 is designed to stop safely when policy is ambiguous or data is incomplete—escalating to a human operator rather than guessing.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Produces reusable pilot patterns</CardTitle>
            <CardText>
              Each workflow becomes a governed template: scope boundaries, data inputs, controls, and measurable outcomes.
            </CardText>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionTitle>Operating boundaries (high level)</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardTitle>Included task classes</CardTitle>
            <CardText>
              Repetitive coordination, structured data capture, document drafting from provided inputs, compliance tracking, inventory/tariff monitoring,
              reporting, and operational monitoring.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Explicit exclusions</CardTitle>
            <CardText>
              Human‑judgment decisions (ethical, legal conclusions, hiring/firing), relational work, and any action requiring accountability beyond
              auditable human approval.
            </CardText>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionTitle>Where it fits in the stack</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardTitle>Sentinel OS</CardTitle>
            <CardText>Policy enforcement, approvals, identity, evidence capture, and escalation logic.</CardText>
            <ButtonLink href="/sentinel-os">View Sentinel OS</ButtonLink>
          </Card>
          <Card>
            <CardTitle>Nexus OS</CardTitle>
            <CardText>Workflow orchestration, integrations, retries, recovery, and controlled execution.</CardText>
            <ButtonLink href="/nexus-os">View Nexus OS</ButtonLink>
          </Card>
          <Card>
            <CardTitle>SmartNation AI</CardTitle>
            <CardText>Delivery surface for governed digital labor deployments and operational catalogs.</CardText>
            <ButtonLink href="/smartnation-ai">View SmartNation AI</ButtonLink>
          </Card>
        </div>
      </Section>
    </div>
  );
}
