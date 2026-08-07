import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import InstitutionalVisual from "../components/InstitutionalVisual";

export function TrustInfrastructurePage() {
  return (
    <div className="cidg-framework-page">
      <Helmet>
        <title>Trust Infrastructure | CoreIdentity Development Group</title>
        <meta
          name="description"
          content="Trust Infrastructure is the institutional architecture that preserves authority, accountability, identity, policy, and evidence as execution becomes autonomous."
        />
      </Helmet>

      <section className="cidg-framework-hero">
        <p className="cidg-framework-kicker">Foundation</p>
        <h1>Trust Infrastructure</h1>
        <p className="cidg-framework-lead">
          The institutional architecture required to preserve authority, accountability, identity, policy, and evidence as intelligent systems move from assisting decisions to executing them.
        </p>
      </section>

      <section className="cidg-framework-statement">
        <p className="cidg-framework-kicker">Why it exists</p>
        <h2>Autonomous execution creates an architectural problem.</h2>
        <p>
          Traditional governance assumes people remain in the execution loop. Autonomous systems change that assumption. Governance must therefore move from documentation and periodic review into the live execution environment.
        </p>
      </section>

      <section className="cidg-framework-principles">
        {[
          ["Authority", "Every action remains traceable to legitimate institutional authority."],
          ["Boundaries", "Policy remains enforceable at the moment execution occurs."],
          ["Evidence", "Institutions retain durable proof that execution remained governed."],
        ].map(([title, copy]) => (
          <article key={title}>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </section>

      <section className="cidg-framework-next">
        <p>Next in the framework</p>
        <Link to="/intelligence">Intelligence →</Link>
      </section>
      <section className="cidg-platinum-visual-section" aria-label="Institutional control">
        <InstitutionalVisual src="/images/visuals/institutional-control-3d.webp" alt="Institutional control remains continuous through Intelligence, Assurance, Trust and Governed Execution." className="cidg-platinum-visual--control" />
      </section>

    </div>
  );
}
