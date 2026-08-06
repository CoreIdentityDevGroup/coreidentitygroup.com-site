import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function IntelligencePage() {
  return (
    <div className="cidg-framework-page">
      <Helmet>
        <title>Intelligence | CoreIdentity Development Group</title>
        <meta
          name="description"
          content="Intelligence becomes institutional when capability operates through legitimate authority, enforceable boundaries, and organizational intent."
        />
      </Helmet>

      <section className="cidg-framework-hero">
        <p className="cidg-framework-kicker">Capability</p>
        <h1>Intelligence</h1>
        <p className="cidg-framework-lead">
          Intelligence becomes institutional when human and artificial capability operates through legitimate authority, enforceable boundaries, and organizational intent.
        </p>
      </section>

      <section className="cidg-framework-statement">
        <p className="cidg-framework-kicker">The distinction</p>
        <h2>Capability is not the same as legitimacy.</h2>
        <p>
          An intelligent system may be capable of acting. That does not establish that it is authorized to act, that its boundaries are enforceable, or that the institution can defend the result.
        </p>
      </section>

      <section className="cidg-framework-principles">
        {[
          ["Authorized", "Execution originates from a defined and legitimate source of authority."],
          ["Bounded", "Capability remains constrained by policy, identity, context, and risk."],
          ["Accountable", "Every consequential action remains attributable and reviewable."],
        ].map(([title, copy]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="cidg-framework-next">
        <p>Next in the framework</p>
        <Link to="/assurance">Assurance →</Link>
      </section>
    </div>
  );
}
