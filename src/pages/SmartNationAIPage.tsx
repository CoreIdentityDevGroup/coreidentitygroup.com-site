import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Card, PageTitle, SectionTitle, Eyebrow } from "../components/ui";

// GOVERNED_TRANSFORMATION_RELEASE_20260909
export function SmartNationAIPage() {
  return (
    <div className="space-y-12">
      <Helmet><title>SmartNation AI — Workforce Intelligence | CoreIdentity</title><meta name="description" content="Explore workforce capabilities and compose versioned Workforce Packs for Governed Autonomous Transformation." /></Helmet>
      <div className="space-y-3">
        <Eyebrow>WORKFORCE INTELLIGENCE</Eyebrow>
        <PageTitle>SmartNation AI</PageTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">SmartNation is the workforce intelligence layer of the CoreIdentity ecosystem. Its catalog helps teams identify capability candidates and compose Workforce Packs that connect selected digital workers with accountable human owners.</p>
      </div>
      <section className="space-y-5">
        <SectionTitle>From business requirement to workforce composition</SectionTitle>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {title:"Capability matching",text:"Compare workflow requirements with catalog capabilities. Candidate matches support assessment; suitability is confirmed with evidence."},
            {title:"Versioned Workforce Packs",text:"Record selected agent versions, assignment evidence, and human responsibilities in a preserved workforce composition."},
            {title:"Governance context",text:"Carry workforce composition into opportunity approval with accountable ownership, defined scope, boundaries, and expiry."},
          ].map(item => <Card key={item.title}><h3 className="text-lg font-semibold">{item.title}</h3><p className="text-white/70 mt-3 leading-relaxed">{item.text}</p></Card>)}
        </div>
      </section>
      <section className="space-y-5">
        <SectionTitle>Part of Governed Autonomous Transformation</SectionTitle>
        <p className="text-white/70 max-w-3xl leading-relaxed">SmartNation supplies workforce intelligence. The Venture Engine evaluates opportunity economics and coordinates the transformation lifecycle. BD Ops manages commercial execution. CoreIdentity governance establishes authority and control requirements.</p>
        <p className="text-white/70 max-w-3xl leading-relaxed">Catalog entries are capability records, not proof of a live deployment, certification, or measured performance. Deployment and operating results require their own evidence.</p>
        <div className="flex flex-wrap gap-5"><Link to="/advisory" className="text-blue-300 underline">Explore the transformation practice</Link><a href="https://portal.coreidentitygroup.com/#/smartnation" className="text-blue-300 underline">Open the SmartNation catalog</a></div>
      </section>
    </div>
  );
}
