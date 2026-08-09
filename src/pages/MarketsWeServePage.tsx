import { Helmet } from "react-helmet-async";

const markets = [
  { title: "Private Capital Markets", body: "Govern autonomous transaction workflows, participant authority, verification, evidence, and execution controls across institutional private capital activity." },
  { title: "Banking & Financial Services", body: "Enable governed autonomous execution where fiduciary duty, regulatory accountability, auditability, operational resilience, and institutional trust are non-negotiable." },
  { title: "Sovereign Nations", body: "Establish national-scale Trust Infrastructure for sovereign AI, digital government, public services, and autonomous institutional operations while preserving legitimate authority and control." },
  { title: "Healthcare", body: "Govern autonomous clinical and administrative workflows where identity, privacy, authorization, accountability, evidence, and patient trust must remain continuously verifiable." },
  { title: "Critical Infrastructure", body: "Preserve institutional authority and operational resilience across high-consequence systems where autonomous execution must remain bounded, attributable, and continuously assured." },
  { title: "Energy & Utilities", body: "Apply enforceable authority, continuous assurance, and verifiable accountability to autonomous operations across energy generation, distribution, utilities, and grid environments." },
  { title: "Manufacturing", body: "Govern autonomous factories, industrial intelligence, robotics, and machine-speed operational decisions without surrendering human authority, safety, or accountability." },
  { title: "Smart Cities & Digital Government", body: "Create governed digital ecosystems in which intelligent infrastructure and autonomous public services operate under explicit institutional authority and continuous oversight." },
  { title: "Autonomous Enterprise", body: "Give enterprises a common governance architecture for AI agents and autonomous workflows across business functions while preserving accountability, evidence, and executive control." }
];

export default function MarketsWeServePage(){
 return <><Helmet><title>Markets We Serve | CoreIdentity Development Group</title><meta name="description" content="One Governance Ecosystem across institutional environments where autonomous execution carries material consequence."/></Helmet>
 <main className="cidg-markets-page">
  <section className="cidg-markets-hero"><div className="cidg-markets-shell"><p className="cidg-markets-kicker">Markets We Serve</p><h1>One architecture. Many institutional environments.</h1><p className="cidg-markets-lede">The Governance Ecosystem is designed for institutions operating under regulatory, fiduciary, sovereign, safety, and operational obligations—where autonomous execution must expand capability without diminishing institutional control.</p></div></section>
  <section className="cidg-markets-intro"><div className="cidg-markets-shell cidg-markets-intro-grid"><p className="cidg-markets-kicker">Institutional Application</p><div><h2>The governance requirement is horizontal.</h2><p>Across markets, the underlying requirement remains the same: establish legitimate authority, enforce boundaries during execution, preserve evidence, and continuously prove that autonomous systems remain governed.</p></div></div></section>
  <section className="cidg-markets-list"><div className="cidg-markets-shell">{markets.map((m,i)=><article className="cidg-market-row" key={m.title}><div className="cidg-market-number">{String(i+1).padStart(2,"0")}</div><div className="cidg-market-copy"><h2>{m.title}</h2><p>{m.body}</p></div></article>)}</div></section>
  <section className="cidg-markets-close"><div className="cidg-markets-shell"><p className="cidg-markets-kicker">The Institutional Standard</p><h2>Delegate Execution.<br/>Never Surrender Control.</h2><p>CoreIdentity establishes the Trust Infrastructure required to make autonomous execution continuously governable, verifiable, and institutionally accountable.</p></div></section>
 </main></>;
}
