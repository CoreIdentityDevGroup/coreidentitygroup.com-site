import { Helmet } from "react-helmet-async";

const stages = [
  { label: "01", title: "Institutional Authority", text: "Execution begins from a legitimate source of authority with an explicit mandate, accountable owner, and defined scope." },
  { label: "02", title: "Delegated Scope", text: "Identity, policy, context, and risk boundaries determine what an autonomous system may do before execution begins." },
  { label: "03", title: "Runtime Enforcement", text: "Governance remains active while execution occurs, enforcing boundaries and escalating actions that exceed delegated authority." },
  { label: "04", title: "Evidence & Accountability", text: "Consequential actions remain attributable, reviewable, and supported by durable evidence that can survive institutional scrutiny." },
];

export function GovernanceConsolePage() {
  return (
    <div className="cidg-console-page">
      <Helmet>
        <title>Governance Console | CoreIdentity</title>
        <meta name="description" content="A public view of how CoreIdentity governance carries institutional authority through autonomous execution without exposing operational systems." />
      </Helmet>

      <section className="cidg-console-hero">
        <p className="cidg-framework-kicker">Governance Console</p>
        <h1>See how institutional authority persists through autonomous execution.</h1>
        <p>This public governance view illustrates the control sequence behind Autonomous Execution Governance. It demonstrates the operating model without exposing production systems, credentials, APIs, or customer environments.</p>
      </section>

      <section className="cidg-console-sequence" aria-label="Governance sequence">
        {stages.map((stage) => (
          <article key={stage.label}>
            <span>{stage.label}</span>
            <h2>{stage.title}</h2>
            <p>{stage.text}</p>
          </article>
        ))}
      </section>

      <section className="cidg-console-proof">
        <div>
          <p className="cidg-framework-kicker">Continuous Governance State</p>
          <h2>Authorized. Bounded. Enforced. Evidenced.</h2>
          <p>The objective is not to make autonomous systems merely observable. The objective is to ensure that delegated execution remains legitimate, constrained, attributable, and defensible from authorization through completion.</p>
        </div>
        <div className="cidg-console-state" aria-label="Illustrative governance state">
          <div><span>Authority</span><strong>Verified</strong></div>
          <div><span>Policy</span><strong>Enforced</strong></div>
          <div><span>Execution</span><strong>Bounded</strong></div>
          <div><span>Evidence</span><strong>Preserved</strong></div>
        </div>
      </section>

      <section className="cidg-console-note">
        <strong>Public demonstration only.</strong>
        <span>Operational governance environments remain institutionally controlled and access-restricted.</span>
      </section>
    </div>
  );
}
