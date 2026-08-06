import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function AssurancePage() {
  return (
    <div className="cidg-framework-page">
      <Helmet>
        <title>Assurance | CoreIdentity Development Group</title>
        <meta
          name="description"
          content="Assurance provides continuous evidence that delegated execution remains legitimate, governed, attributable, and capable of surviving scrutiny."
        />
      </Helmet>

      <section className="cidg-framework-hero">
        <p className="cidg-framework-kicker">Continuous proof</p>
        <h1>Assurance</h1>
        <p className="cidg-framework-lead">
          Assurance provides continuous evidence that delegated execution remains legitimate, governed, attributable, and capable of surviving scrutiny.
        </p>
      </section>

      <section className="cidg-framework-statement">
        <p className="cidg-framework-kicker">Operational requirement</p>
        <h2>Governance must remain visible during execution.</h2>
        <p>
          Periodic review is insufficient when autonomous systems operate continuously. Institutions require persistent evidence that authority, policy, identity, and accountability remained intact.
        </p>
      </section>

      <section className="cidg-framework-principles">
        {[
          ["Verification", "Controls are tested and enforced before and during execution."],
          ["Attribution", "Actions remain linked to verified identities and delegated authority."],
          ["Evidence", "Proof artifacts remain durable, exportable, and independently reviewable."],
        ].map(([title, copy]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="cidg-framework-next">
        <p>Next in the framework</p>
        <Link to="/trust">Trust →</Link>
      </section>
    </div>
  );
}
