import { Link } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { SectionHead } from "../components/institutional";
export function TrustInfrastructurePage() {
  return <div className="space-y-20">
    <Helmet><title>Trust Infrastructure | CoreIdentity Development Group</title><meta name="description" content="Trust Infrastructure preserves authority, accountability, identity, policy, and evidence as execution becomes autonomous." /></Helmet>
    <section className="pt-4 md:pt-8"><div className="text-xs font-semibold uppercase tracking-[0.22em] text-platinum">Foundational discipline</div><h1 className="mt-5 max-w-4xl font-serif text-display-xl tracking-tight text-ink md:text-display-2xl">Trust Infrastructure</h1><p className="mt-6 max-w-3xl text-lg leading-relaxed text-ink-secondary md:text-xl">Trust Infrastructure is the institutional architecture required to preserve authority, accountability, identity, policy, and evidence as intelligent systems move from assisting decisions to executing them.</p></section>
    <section><SectionHead eyebrow="Why it exists" title="Autonomous execution creates an architectural problem" intro="Traditional governance assumes that people remain in the execution loop. Autonomous systems change that assumption. Governance must move from documentation and periodic review into the live execution environment." /></section>
    <section className="rounded-3xl border border-platinum/20 bg-platinum/[0.04] p-8 text-center md:p-10"><h2 className="font-serif text-display-md text-ink">Trust is not assumed. It is architected.</h2><p className="mx-auto mt-4 max-w-2xl leading-relaxed text-ink-secondary">CoreIdentity establishes the architecture required to make governed execution continuously verifiable.</p><Link to="/contact" className="mt-7 inline-flex rounded-xl bg-platinum px-6 py-3 text-sm font-semibold text-carbon">Begin an Institutional Conversation</Link></section>
  </div>;
}
