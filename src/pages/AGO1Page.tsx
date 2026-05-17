import { PageHero, Section, SectionTitle, Card, CardTitle, CardText, ButtonLink } from "../components/ui";
import { Helmet } from "react-helmet-async";

export function AGO1Page() {
  return (
    <div>
      <Helmet>
        <title>AGO — Autonomous Governance Orchestrator | CoreIdentity</title>
        <meta name="description" content="AGO is CoreIdentity's Autonomous Governance Orchestrator — the operating agent that validates the enforcement stack in real conditions, produces repeatable governance evidence, and serves as the verified pilot pattern for enterprise deployments." />
        <script type="application/ld+json">{`{"@context":"https://schema.org","@type":"SoftwareApplication","name":"AGO — Autonomous Governance Orchestrator","applicationCategory":"BusinessApplication","operatingSystem":"Cloud","offers":{"@type":"Offer","price":"0","priceCurrency":"USD"},"provider":{"@type":"Organization","name":"CoreIdentity Development Group Inc."}}`}</script>
      </Helmet>

      <PageHero
        title="AGO — Autonomous Governance Orchestrator"
        subtitle="The operating agent that governs CoreIdentity's own operations — and serves as the validated pilot pattern for every enterprise deployment that follows."
      />

      <Section>
        <SectionTitle>What AGO Is</SectionTitle>
        <Card>
          <CardText>
            AGO is CoreIdentity's Autonomous Governance Orchestrator — an operating agent that runs
            under <strong>Sentinel</strong> (policy enforcement, approvals, audit trails) and{" "}
            <strong>Nexus</strong> (workflow orchestration and recovery). AGO validates the
            CoreIdentity enforcement stack in real operational conditions, producing cryptographically
            signed governance evidence on every workflow it executes. Every AGO deployment follows
            the same governance architecture available to enterprise clients.
          </CardText>
        </Card>
      </Section>

      <Section>
        <SectionTitle>Why It Matters</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardTitle>Hardens Governance in Practice</CardTitle>
            <CardText>
              Governance concepts become operational only when exercised. AGO creates repeatable evidence:
              approvals, traces, outputs, and exceptions — all cryptographically signed and auditable.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Validates Fail-Closed Controls</CardTitle>
            <CardText>
              AGO is designed to stop safely when policy is ambiguous or data is incomplete —
              escalating to a human operator rather than guessing. Every fail-closed event is logged.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Produces Reusable Pilot Patterns</CardTitle>
            <CardText>
              Each workflow becomes a governed template: scope boundaries, data inputs, controls,
              and measurable outcomes ready for enterprise deployment.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Autonomous DPO Function</CardTitle>
            <CardText>
              AGO operates as an autonomous Data Protection Officer function — continuously monitoring
              all agent activity for policy drift, data access scope violations, and compliance gaps.
              When drift is detected, AGO initiates an intervention automatically: suspending the
              agent, restricting its scope, or escalating for human review. Every intervention
              produces an immutable DPO audit record.
            </CardText>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionTitle>Operating Boundaries</SectionTitle>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardTitle>Included Task Classes</CardTitle>
            <CardText>
              Repetitive coordination, structured data capture, document drafting from provided inputs,
              compliance tracking, reporting, operational monitoring, and governance evidence generation.
            </CardText>
          </Card>
          <Card>
            <CardTitle>Explicit Exclusions</CardTitle>
            <CardText>
              Human-judgment decisions (ethical determinations, legal conclusions, hiring decisions),
              relational work, and any action requiring accountability beyond auditable human approval.
            </CardText>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionTitle>Where AGO Fits in the Stack</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardTitle>Sentinel</CardTitle>
            <CardText>Policy enforcement, approvals, identity, evidence capture, and escalation logic.</CardText>
            <ButtonLink to="/sentinel">View Sentinel</ButtonLink>
          </Card>
          <Card>
            <CardTitle>Nexus</CardTitle>
            <CardText>Workflow orchestration, integrations, retries, recovery, and controlled execution.</CardText>
            <ButtonLink to="/nexus">View Nexus</ButtonLink>
          </Card>
          <Card>
            <CardTitle>SmartNation AI</CardTitle>
            <CardText>Delivery surface for governed digital labor deployments and operational catalogs.</CardText>
            <ButtonLink to="/smartnation-ai">View SmartNation AI</ButtonLink>
          </Card>
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-amber-400/20 bg-amber-400/5 p-6">
          <div className="flex items-center gap-3 mb-3">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-amber-400" aria-hidden="true">
              <path d="M12 2l8 4v6c0 5-3.2 9.4-8 10-4.8-.6-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            </svg>
            <span className="text-sm font-semibold tracking-wide text-amber-400 uppercase">Governance Guaranteed by SAL</span>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            AGO operates under the SAL Enforcement Kernel — ensuring every autonomous action is
            evaluated against the IIAAC model (Identity, Intent, Asset, Action, Context) before
            execution. No AGO task can exceed its delegated authority, export unauthorized data,
            or trigger unvalidated transactions. AGO's Autonomous DPO function monitors all
            governed agents continuously — detecting policy drift, data access anomalies, and
            compliance gaps before they become incidents. Interventions are logged as immutable
            DPO audit records.
          </p>
          <a href="/sal" className="mt-3 inline-flex items-center gap-1 text-sm text-amber-400/80 hover:text-amber-400 transition">
            Learn how SAL enforces boundaries →
          </a>
        </div>
      </Section>
    </div>
  );
}
