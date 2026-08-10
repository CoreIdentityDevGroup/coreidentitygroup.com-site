import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function TrustPage() {
  return (
    <div className="cidg-framework-page cidg-framework-expanded">
      <Helmet>
        <title>Institutional Trust | CoreIdentity Development Group</title>
        <meta name="description" content="Institutional Trust is a condition established when an institution possesses sufficient intelligence, assurance, evidence, and accountability to justify reliance on autonomous execution within legitimate authority and governed boundaries." />
      </Helmet>

      <section className="cidg-framework-hero">
        <p className="cidg-framework-kicker">Institutional outcome</p>
        <h1>Institutional Trust</h1>
        <p className="cidg-framework-lead">Trust is not assumed. It is established through evidence.</p>
        <p className="cidg-framework-support">Autonomous systems should not be trusted merely because they perform successfully.</p>
        <p className="cidg-framework-support">Institutional Trust emerges when organizations possess sufficient intelligence, assurance, evidence, and accountability to establish that autonomous execution occurred within legitimate authority and governed boundaries.</p>
      </section>

      <section className="cidg-framework-architecture">
        <p className="cidg-framework-kicker">From execution to warranted confidence</p>
        <div className="cidg-framework-vertical-flow cidg-framework-vertical-flow--trust" aria-label="Institutional Authority to Institutional Trust">
          {["Institutional Authority", "Governed Execution", "Institutional Intelligence", "Institutional Assurance", "Institutional Trust"].map((item, index) => (
            <div key={item}><strong>{item}</strong>{index < 4 ? <span aria-hidden="true">↓</span> : null}</div>
          ))}
        </div>
        <p className="cidg-framework-proposition">Trust becomes warranted when the institution can understand, verify, and account for autonomous execution.</p>
      </section>

      <section className="cidg-framework-behaviors">
        <p className="cidg-framework-kicker">The foundations of Institutional Trust</p>
        <dl className="cidg-framework-definition-list cidg-framework-definition-list--four">
          <div><dt>Confidence</dt><dd>The institution possesses sufficient understanding of execution, its context, and its governing conditions to support informed reliance.</dd></div>
          <div><dt>Integrity</dt><dd>Execution remained consistent with established authority and governance requirements.</dd></div>
          <div><dt>Accountability</dt><dd>Material actions remain attributable to accountable institutional authority.</dd></div>
          <div><dt>Verifiability</dt><dd>Evidence exists to substantiate institutional assertions about execution.</dd></div>
        </dl>
        <p className="cidg-framework-evidence-note">These foundations describe the intended institutional trust condition; specific technical assertions remain subject to evidence validation.</p>
      </section>

      <section className="cidg-framework-statement">
        <p className="cidg-framework-kicker">Trust is an institutional state</p>
        <h2>Institutional Trust is not a characteristic assigned to an AI system.</h2>
        <p>It is a condition established when an institution possesses sufficient evidence to justify reliance on autonomous execution within legitimate authority and governed boundaries.</p>
        <p>Trust is therefore established by the relationship between authority, governance, execution, intelligence, evidence, assurance, and accountability—not by assigning a generalized label of &ldquo;trusted AI.&rdquo;</p>
      </section>

      <section className="cidg-framework-outcome">
        <p className="cidg-framework-kicker">The institutional outcome</p>
        <div className="cidg-framework-outcome-lines">
          <p><strong>Trust Infrastructure</strong><span>establishes the foundation.</span></p>
          <p><strong>Institutional Intelligence</strong><span>establishes understanding.</span></p>
          <p><strong>Institutional Assurance</strong><span>establishes evidence.</span></p>
          <p><strong>Institutional Trust</strong><span>establishes warranted confidence.</span></p>
        </div>
        <p className="cidg-framework-doctrine">Delegate Execution. Never Surrender Control.</p>
      </section>

      <section className="cidg-framework-next">
        <p>Together, these institutional layers operate as an integrated expression of the Governance Ecosystem.</p>
        <Link to="/governance-ecosystem">Explore the Governance Ecosystem →</Link>
      </section>
    </div>
  );
}
