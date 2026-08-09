import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function TrustPage() {
  return (
    <div className="cidg-framework-page">
      <Helmet>
        <title>Trust | CoreIdentity Development Group</title>
        <meta
          name="description"
          content="Trust is the institutional confidence required to delegate consequential execution while preserving control, accountability, and legitimacy."
        />
      </Helmet>

      <section className="cidg-framework-hero">
        <p className="cidg-framework-kicker">Institutional outcome</p>
        <h1>Trust</h1>
        <p className="cidg-framework-lead">
          Trust is the institutional confidence required to delegate consequential execution while preserving control, accountability, and legitimacy.
        </p>
      </section>

      <section className="cidg-framework-statement">
        <p className="cidg-framework-kicker">The outcome</p>
        <h2>Trust emerges from evidence, not optimism.</h2>
        <p>
          Institutions can delegate execution responsibly only when they can demonstrate that Intelligence operated under legitimate authority, within enforceable boundaries, and with evidence that survives scrutiny.
        </p>
      </section>

      <section className="cidg-framework-principles">
        {[
          ["Executive confidence", "Leadership can delegate without surrendering institutional control."],
          ["Regulatory defensibility", "Governance claims are supported by operational evidence."],
          ["Stakeholder legitimacy", "Customers, counterparties, and the public can rely on accountable execution."],
        ].map(([title, copy]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="cidg-framework-next">
        <p>Operational Doctrine</p>
        <Link to="/governance-ecosystem">Autonomous Execution Governance (AEG) →</Link>
      </section>
    </div>
  );
}
