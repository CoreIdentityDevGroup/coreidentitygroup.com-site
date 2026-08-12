import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import InstitutionalVisual from "../components/InstitutionalVisual";

export function TrustInfrastructurePage() {
  return (
    <div className="cidg-framework-page cidg-framework-expanded">
      <Helmet>
        <title>Trust Infrastructure | CoreIdentity Development Group</title>
        <meta name="description" content="Trust Infrastructure is the operational institutional foundation through which authority can be established, delegated, constrained, exercised, verified, and preserved throughout autonomous execution." />
      </Helmet>

      <section className="cidg-framework-hero">
        <p className="cidg-framework-kicker">Foundation</p>
        <h1>Trust Infrastructure</h1>
        <p className="cidg-framework-lead">The institutional foundation for governed autonomous execution.</p>
        <p className="cidg-framework-support">As autonomous systems move from generating information to making decisions and executing actions, institutions require infrastructure capable of governing not only the technology, but the authority under which it operates.</p>
        <p className="cidg-framework-support">CoreIdentity defines Trust Infrastructure as the operational institutional foundation through which authority can be established, delegated, constrained, exercised, verified, and preserved throughout autonomous execution.</p>
        <p className="cidg-framework-doctrine">Delegate Execution. Never Surrender Control.</p>
      </section>

      <section className="cidg-framework-statement">
        <p className="cidg-framework-kicker">The delegation problem</p>
        <h2>Autonomous execution changes what institutions must govern.</h2>
        <p>Traditional infrastructure was designed to govern users, applications, data, transactions, and systems. Autonomous execution introduces something materially different: machines exercising delegated institutional authority.</p>
        <blockquote className="cidg-framework-question">What is the system authorized to do, on whose authority, under what conditions, within what boundaries, and how does the institution remain in control throughout execution?</blockquote>
        <p>This is where Trust Infrastructure begins.</p>
      </section>

      <section className="cidg-framework-architecture">
        <p className="cidg-framework-kicker">Authority must travel with execution</p>
        <h2>Governance cannot remain upstream from the action.</h2>
        <div className="cidg-framework-flow cidg-framework-flow--five" aria-label="Institutional Authority to Accountability">
          {["Institutional Authority", "Delegation", "Governed Execution", "Verification", "Accountability"].map((item, index) => (
            <div className="cidg-framework-flow-step" key={item}>
              <strong>{item}</strong>
              {index < 4 ? <span aria-hidden="true">→</span> : null}
            </div>
          ))}
        </div>
        <p>Institutional authority and its constraints must remain connected to execution. Governance therefore has to operate through the execution lifecycle—not only through policy, approvals, or retrospective review.</p>
      </section>

      <div className="cidg-trust-production-stage" aria-label="Trust Infrastructure">
        <InstitutionalVisual src="/images/visuals/trust-infrastructure-3d.webp" alt="CoreIdentity Trust Infrastructure supporting governed autonomous execution through institutional Intelligence, Governance, Assurance, and Trust." className="cidg-trust-production-visual cidg-trust-production-visual--infrastructure" />
      </div>

      <section className="cidg-framework-behaviors">
          <p className="cidg-framework-kicker">The operating foundation</p>
          <h2>Trust Infrastructure makes the Autonomous Governance Ecosystem operational.</h2>
          <p className="cidg-framework-support">It provides the production institutional infrastructure through which governance is established, autonomous execution is constrained, assurance is continuous, and trust becomes demonstrable rather than assumed.</p>
          <dl className="cidg-framework-definition-list cidg-framework-definition-list--four">
            <div><dt>Intelligence</dt><dd>Establishes institutional context, identity, policy, obligations, risk, and operational awareness to inform governed decisions.</dd></div>
            <div><dt>Governance</dt><dd>Establishes authority, determines policy, sets boundaries, and governs autonomous execution.</dd></div>
            <div><dt>Assurance</dt><dd>Continuously verifies compliance, control, and performance so execution remains authorized and within institutional requirements.</dd></div>
            <div><dt>Trust</dt><dd>The resulting state of confidence that authority, control, and oversight are maintained through governed execution and verifiable evidence.</dd></div>
          </dl>
          <p className="cidg-framework-cycle">Intelligence informs Governance. Governance controls autonomous execution. Assurance continuously verifies it. Trust is established through verifiable governed execution.</p>
        </section>

      <section className="cidg-framework-next">
          <p>Trust Infrastructure operates across Intelligence, Governance, Assurance, and Trust to preserve institutional authority throughout autonomous execution.</p>
          <Link to="/intelligence">Explore Institutional Intelligence →</Link>
        </section>
    </div>
  );
}
