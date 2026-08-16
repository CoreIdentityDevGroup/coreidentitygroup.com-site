import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import InstitutionalVisual from "../components/InstitutionalVisual";

// CIDG_CONTENT_ALIGNMENT_V730_R8
export default function HomePage() {
  return (
    <div className="cidg-platinum-home cidg-home-page cidg-home-trust-sequence">
      <Helmet>
        <title>CoreIdentity Development Group | Trust Infrastructure</title>
        <meta
          name="description"
          content="CoreIdentity establishes the Trust Infrastructure that enables institutions to safely delegate autonomous execution while ensuring they remain in control."
        />
      </Helmet>

      <section className="cidg-platinum-hero" aria-labelledby="cidg-platinum-title">
        <div className="cidg-platinum-hero-copy">
          <h1 id="cidg-platinum-title">Making Autonomy Trustworthy.</h1>

          <p>
            We build the Trust Infrastructure that enables institutions to embrace autonomous execution while preserving authority, accountability, trust, and control.
          </p>

          <div className="cidg-platinum-hero-sequence" aria-label="CoreIdentity institutional governance architecture">
            <div className="cidg-platinum-eyebrow">
              <strong>Governance Ecosystem for the Autonomous Era</strong>
            </div>
            <div className="cidg-platinum-eyebrow-aeg"><strong>Trust Infrastructure</strong></div>
            <div className="cidg-platinum-eyebrow-terms">Governance • Intelligence • Assurance • Trust</div>
            <div className="cidg-platinum-eyebrow-aeg"><strong>Autonomous Execution Governance</strong></div>
            <div className="cidg-platinum-eyebrow-terms">Operational doctrine for governing execution in motion</div>
          </div>
        </div>

        <div className="cidg-platinum-hero-visual-col">
          <InstitutionalVisual
            src="/images/visuals/trust-infrastructure-3d.webp"
            alt="CoreIdentity Governance Ecosystem and Trust Infrastructure for governed autonomous execution."
            className="cidg-platinum-visual--hero"
            priority
          />
          <p className="cidg-platinum-hero-architecture-note">
            Trust Infrastructure is the institutional infrastructure through which authority can be established, delegated,
            constrained, exercised, verified, and preserved throughout autonomous execution. The Institutional Chain of
            Legitimacy preserves continuity between institutional authority, delegated execution, evidence, and accountability across the system.
          </p>
          <div className="cidg-platinum-hero-actions">
            <Link to="/trust-infrastructure" className="cidg-platinum-primary">
              Explore Trust Infrastructure <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="cidg-platinum-shift">
        <p className="cidg-platinum-kicker">The Institutional Shift</p>
        <h2>Execution is becoming autonomous. Governance must become infrastructure.</h2>
        <p>
          Policies designed for human-speed oversight cannot govern machine-speed execution.
          Authority, identity, accountability, and evidence must remain enforceable while execution occurs.
        </p>
      </section>

      <section className="cidg-platinum-ecosystem" aria-labelledby="cidg-platinum-ecosystem-title">
        <div>
          <p className="cidg-platinum-kicker">The Governance Ecosystem</p>
          <h2 id="cidg-platinum-ecosystem-title">
            Architecture, doctrine, and legitimacy—operating as one institutional system.
          </h2>
          <p>
            The Governance Ecosystem integrates Trust Infrastructure, Autonomous Execution Governance,
            and the Institutional Chain of Legitimacy as one operational institutional system. Trust Infrastructure
            provides the production infrastructure, AEG governs execution in motion, and the Institutional Chain of
            Legitimacy preserves continuity between authority, delegated execution, evidence, and accountability.
          </p>
          <Link to="/about">Understand CoreIdentity →</Link>
        </div>
      </section>

      <section className="cidg-platinum-closing">
        <p className="cidg-platinum-kicker">Our Operating Principle</p>
        <h2>Humans lead. Machines execute. Governance protects both.</h2>
        <p>Delegate Execution. Never Surrender Control.</p>
        <Link to="/contact" className="cidg-platinum-primary">
          Begin an Institutional Conversation
        </Link>
      </section>
    </div>
  );
}
