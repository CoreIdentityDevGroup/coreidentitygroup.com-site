import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

export function ResourcesPage() {
  return (
    <div className="cidg-resources-page">
      <Helmet>
        <title>Resources | CoreIdentity</title>
        <meta name="description" content="CoreIdentity resources on Trust Infrastructure, Autonomous Execution Governance, institutional assurance, and governance for the Autonomous Era." />
      </Helmet>

      <section className="cidg-resources-hero">
        <p className="cidg-framework-kicker">Thought Leadership</p>
        <h1>Resources</h1>
        <p>Research, institutional perspectives, governance frameworks, and practical guidance for organizations preparing to delegate consequential execution to autonomous systems.</p>
      </section>

      <section className="cidg-resources-grid" aria-label="CoreIdentity resources">
        <article>
          <p className="cidg-framework-kicker">Foundational Architecture</p>
          <h2>Trust Infrastructure</h2>
          <p>Explore the institutional architecture required to preserve authority, accountability, identity, policy, and evidence through autonomous execution.</p>
          <Link to="/trust-infrastructure">Explore Trust Infrastructure →</Link>
        </article>
        <article>
          <p className="cidg-framework-kicker">Institutional System</p>
          <h2>Governance Ecosystem</h2>
          <p>Understand how architectural discipline, operational doctrine, and institutional legitimacy operate together as one governance system.</p>
          <Link to="/governance-ecosystem">Explore the Governance Ecosystem →</Link>
        </article>
        <article>
          <p className="cidg-framework-kicker">Perspectives</p>
          <h2>Insights</h2>
          <p>Read CoreIdentity analysis on autonomous execution, governance architecture, institutional assurance, and emerging AI governance requirements.</p>
          <Link to="/blog">View Insights →</Link>
        </article>
        <article>
          <p className="cidg-framework-kicker">Reference</p>
          <h2>Frequently Asked Questions</h2>
          <p>Review concise explanations of CoreIdentity terminology, governance concepts, engagement models, and the institutional problem we address.</p>
          <Link to="/faq">View FAQ →</Link>
        </article>
      </section>

      <section className="cidg-resources-engage">
        <div>
          <p className="cidg-framework-kicker">Institutional Evaluation</p>
          <h2>Need a deeper governance briefing?</h2>
          <p>Organizations evaluating governance architecture, advisory support, or strategic collaboration can begin a direct conversation with CoreIdentity.</p>
        </div>
        <Link to="/contact">Contact CoreIdentity →</Link>
      </section>
    </div>
  );
}
