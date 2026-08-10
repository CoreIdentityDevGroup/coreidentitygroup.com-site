import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function IntelligencePage() {
  return (
    <div className="cidg-framework-page cidg-framework-expanded">
      <Helmet>
        <title>Institutional Intelligence | CoreIdentity Development Group</title>
        <meta name="description" content="Institutional Intelligence establishes governed understanding of autonomous execution in the context of institutional authority, governance requirements, operating conditions, and risk." />
      </Helmet>

      <section className="cidg-framework-hero">
        <p className="cidg-framework-kicker">Understanding</p>
        <h1>Institutional Intelligence</h1>
        <p className="cidg-framework-lead">Governed understanding for autonomous execution.</p>
        <p className="cidg-framework-support">Autonomous execution produces enormous quantities of activity, signals, decisions, interactions, and evidence. Visibility alone is insufficient.</p>
        <p className="cidg-framework-support">Institutional Intelligence enables organizations to understand autonomous execution in the context of institutional authority, governance requirements, operational conditions, and risk.</p>
      </section>

      <section className="cidg-framework-statement">
        <p className="cidg-framework-kicker">From visibility to institutional understanding</p>
        <h2>Institutional Intelligence is not business intelligence, analytics, or generative AI.</h2>
        <div className="cidg-framework-distinction">
          <p><strong>Telemetry</strong><span>tells us what happened.</span></p>
          <p><strong>Analytics</strong><span>identifies patterns.</span></p>
          <p><strong>Institutional Intelligence</strong><span>establishes what execution means within the institution&apos;s governed environment.</span></p>
        </div>
      </section>

      <section className="cidg-framework-architecture">
        <p className="cidg-framework-kicker">The intelligence continuum</p>
        <div className="cidg-framework-flow cidg-framework-flow--four" aria-label="Observe Contextualize Interpret Inform">
          {[
            ["Observe", "Establish visibility into governed execution and relevant institutional conditions."],
            ["Contextualize", "Associate execution with authority, policy, obligations, operational context, and institutional boundaries."],
            ["Interpret", "Establish the institutional significance of execution, deviations, conditions, and emerging risk."],
            ["Inform", "Provide actionable intelligence supporting governance, intervention, assurance, and accountable decision-making."],
          ].map(([title, copy], index) => (
            <div className="cidg-framework-flow-step cidg-framework-flow-step--detail" key={title}>
              <strong>{title}</strong>
              <small>{copy}</small>
              {index < 3 ? <span aria-hidden="true">→</span> : null}
            </div>
          ))}
        </div>
      </section>

      <section className="cidg-framework-convergence">
        <p className="cidg-framework-kicker">Intelligence with institutional context</p>
        <h2>Execution becomes meaningful when signals are evaluated against institutional context.</h2>
        <div className="cidg-framework-convergence-grid">
          <div className="cidg-framework-signal-stack">
            {["Delegated authority", "Operating boundaries", "Institutional policy", "Applicable obligations", "Execution state", "Risk conditions", "Exceptions & escalation"].map((item) => <span key={item}>{item}</span>)}
          </div>
          <div className="cidg-framework-convergence-arrow" aria-hidden="true">→</div>
          <div className="cidg-framework-convergence-outcome">
            <strong>Institutional Intelligence</strong>
            <span>Governed understanding of autonomous execution</span>
          </div>
        </div>
      </section>

      <section className="cidg-framework-statement">
        <p className="cidg-framework-kicker">Intelligence serves governance</p>
        <h2>Understanding execution is valuable only when it strengthens institutional control.</h2>
        <p>Institutional Intelligence does not exist merely to describe autonomous execution. It enables institutions to govern it—supporting intervention, assurance, accountability, and informed decision-making.</p>
      </section>

      <section className="cidg-framework-next">
        <p>Understanding execution is necessary. Demonstrating that execution remained governed requires something further.</p>
        <Link to="/assurance">Explore Institutional Assurance →</Link>
      </section>
    </div>
  );
}
