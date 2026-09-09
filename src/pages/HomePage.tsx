import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import InstitutionalVisual from "../components/InstitutionalVisual";

// ECOSYSTEM_JOURNEY_20260909
const journey = [
  { title: "Establish direction and accountability", owner: "CIAG · Executive AI Governance", text: "Start with institutional objectives, AI readiness, risk, decision rights, and accountable leadership. Define what should be delegated and what must remain under human control.", to: "/advisory/executive-ai-governance", link: "Explore Executive AI Governance" },
  { title: "Identify and evaluate the opportunity", owner: "Governed Autonomous Transformation · Venture Engine", text: "Identify valuable workflows, document the current operating baseline, and evaluate readiness and economics. Make assumptions, delivery costs, and expected value explicit before committing to a solution.", to: "/advisory", link: "Explore the transformation practice" },
  { title: "Design the workforce", owner: "SmartNation AI Workforce", text: "Match required capabilities with catalog candidates. Compose versioned Workforce Packs, validate suitability with evidence, and assign human owners for judgment, exceptions, and oversight.", to: "/smartnation-ai", link: "Explore SmartNation AI" },
  { title: "Establish authority and controls", owner: "Trust Infrastructure", text: "Define identity, delegated authority, policy boundaries, approvals, escalation, and evidence requirements. Carry those requirements into the operating environment before authorizing deployment.", to: "/trust-infrastructure", link: "Explore Trust Infrastructure" },
  { title: "Deploy within approved boundaries", owner: "Implementation · Governed execution", text: "Connect the selected workforce to the institution’s systems and workflows. Validate the required operating integrations and controls, record deployment evidence, and maintain accountable human oversight.", to: "/advisory/governance-implementation", link: "Explore implementation" },
  { title: "Assure, measure, and improve", owner: "Ongoing governance · Institutional Assurance", text: "Review control evidence and recorded operating outcomes. Compare results with the business case, address exceptions, and renew or revise authority and workforce design as conditions change.", to: "/assurance", link: "Explore Institutional Assurance" },
] as const;

export default function HomePage() {
  return (
    <div className="cidg-platinum-home cidg-home-page cidg-home-trust-sequence">
      <Helmet>
        <title>CoreIdentity | Executive AI Governance, Workforce Transformation &amp; Trust Infrastructure</title>
        <meta name="description" content="CoreIdentity connects CIAG executive advisory, SmartNation AI workforce intelligence, governed transformation, and Trust Infrastructure—from institutional strategy through accountable execution and ongoing assurance." />
        <meta property="og:title" content="CoreIdentity — Making Autonomy Trustworthy" />
        <meta property="og:description" content="An integrated ecosystem for Executive AI Governance, Autonomous Workforce Transformation, and Trust Infrastructure." />
      </Helmet>
      <section className="cidg-platinum-hero" aria-labelledby="cidg-platinum-title">
        <div className="cidg-platinum-hero-copy">
          <p className="cidg-platinum-kicker">The CoreIdentity Ecosystem</p>
          <h1 id="cidg-platinum-title">Making Autonomy Trustworthy</h1>
          <p>From executive strategy to workforce transformation and governed execution, we help institutions adopt AI while preserving authority, accountability, and control.</p>
          <div className="cidg-platinum-hero-sequence" aria-label="Connected ecosystem capabilities">
            <div className="cidg-platinum-eyebrow"><strong>CoreIdentity Advisory Group · Executive AI Governance</strong></div>
            <div className="cidg-platinum-eyebrow-aeg"><strong>SmartNation AI Workforce · Trust Infrastructure</strong></div>
            <div className="cidg-platinum-eyebrow-terms">One institutional journey. Governance throughout.</div>
          </div>
          <div className="cidg-platinum-hero-actions"><Link to="/advisory/engage" className="cidg-platinum-primary">Discuss Your Institutional Priorities <span aria-hidden="true">→</span></Link></div>
        </div>
        <div className="cidg-platinum-hero-visual-col">
          <InstitutionalVisual src="/images/visuals/trust-infrastructure-3d.webp" alt="CoreIdentity Trust Infrastructure connects institutional authority, governed execution, and accountability." className="cidg-platinum-visual--hero" priority />
          <p className="cidg-platinum-hero-architecture-note">CoreIdentity Advisory Group (CIAG) brings executive direction and governance into the transformation process. SmartNation helps design the workforce. Trust Infrastructure connects institutional authority with the controls and evidence required for accountable execution.</p>
        </div>
      </section>
      <section className="cidg-platinum-shift cidg-journey" aria-labelledby="journey-title">
        <p className="cidg-platinum-kicker">Governed Autonomous Transformation</p>
        <h2 id="journey-title">From institutional intent to accountable outcomes.</h2>
        <p className="cidg-journey-intro">Executive AI Governance is CIAG’s operating discipline. It establishes the direction for transformation and continues through workforce design, deployment, and ongoing oversight. Institutions can enter at the stage that reflects their current maturity.</p>
        <ol className="cidg-journey-grid">
          {journey.map((step, index) => <li key={step.title}>
            <span className="cidg-journey-number" aria-hidden="true">0{index + 1}</span>
            <p className="cidg-journey-owner">{step.owner}</p>
            <h3>{step.title}</h3><p>{step.text}</p>
            <Link to={step.to}>{step.link} <span aria-hidden="true">→</span></Link>
          </li>)}
        </ol>
        <p className="cidg-journey-feedback">Evidence closes the loop: operating results inform the next assessment, workforce design, and authorization decision. Projected value becomes an observed outcome only when supported by measured evidence.</p>
      </section>
      <section className="cidg-platinum-ecosystem" aria-labelledby="ecosystem-foundation-title">
        <div>
          <p className="cidg-platinum-kicker">A connected institutional system</p>
          <h2 id="ecosystem-foundation-title">Authority and accountability travel with the work.</h2>
          <p>Trust Infrastructure is the foundation for establishing, delegating, constraining, exercising, verifying, and preserving authority. Autonomous Execution Governance (AEG) provides the doctrine for governing execution in motion. The Institutional Chain of Legitimacy connects institutional authority, delegated action, evidence, and accountability.</p>
          <Link to="/trust-infrastructure">Understand the foundation →</Link>
        </div>
        <div className="cidg-journey-support">
          <h3>How the ecosystem works together</h3>
          <p><strong>CIAG</strong> connects executive advisory, implementation planning, and continuing governance.</p>
          <p><strong>SmartNation</strong> owns workforce intelligence and composition. The <strong>Venture Engine</strong> owns opportunity economics and lifecycle coordination.</p>
          <p><strong>BD Ops</strong> supports the commercial account and engagement process. Operating platforms, including <strong>CoreG</strong>, provide the business context for domain-specific workflows.</p>
          <p><strong>CoreIdentity governance</strong> establishes authority and control requirements. Deployment depends on the relevant operating integrations; a catalog selection or approved business case alone does not constitute a live deployment.</p>
          <Link to="/about">Explore CoreIdentity →</Link>
        </div>
      </section>
      <section className="cidg-platinum-closing">
        <p className="cidg-platinum-kicker">Humans lead. Machines execute. Governance protects both.</p>
        <h2>Delegate Execution. Never Surrender Control.</h2>
        <p>Start with your institution’s priorities. Build the workforce and governance required to advance them.</p>
        <Link to="/advisory/engage" className="cidg-platinum-primary">Begin an Institutional Conversation</Link>
      </section>
    </div>
  );
}
