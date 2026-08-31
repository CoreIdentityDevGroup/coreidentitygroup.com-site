#!/usr/bin/env python3
"""Idempotently implement the CoreIdentity Advisory sub-site and shared navigation fixes."""

from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]


def write(path: str, content: str) -> None:
    target = ROOT / path
    normalized = content.strip() + "\n"
    if target.exists() and target.read_text() == normalized:
        return
    target.parent.mkdir(parents=True, exist_ok=True)
    target.write_text(normalized)


def replace_once(path: str, old: str, new: str) -> None:
    target = ROOT / path
    content = target.read_text()
    if new in content:
        return
    if old not in content:
        raise RuntimeError(f"Expected transform anchor missing in {path}: {old[:80]!r}")
    target.write_text(content.replace(old, new, 1))


write("src/data/siteNavigation.ts", r'''
export type NavigationItem = {
  to: string;
  label: string;
  description?: string;
};

export type NavigationGroup = {
  label: string;
  items: readonly NavigationItem[];
  columns?: 1 | 2;
};

export const NAVIGATION_GROUPS: readonly NavigationGroup[] = [
  {
    label: "CoreIdentity",
    columns: 2,
    items: [
      { to: "/trust-infrastructure", label: "Trust Infrastructure" },
      { to: "/intelligence", label: "Institutional Intelligence" },
      { to: "/assurance", label: "Institutional Assurance" },
      { to: "/trust", label: "Institutional Trust" },
      { to: "/governance-ecosystem", label: "Governance Ecosystem" },
      { to: "/platform", label: "Governance Architecture" },
      { to: "/execution-integrity", label: "Execution Integrity" },
      { to: "/verification-at-scale", label: "Verification at Scale" },
      { to: "/sovereign-assurance", label: "Sovereign Assurance" },
    ],
  },
  {
    label: "Markets",
    columns: 2,
    items: [
      { to: "/markets-we-serve", label: "Markets We Serve" },
      { to: "/governance/regulated", label: "Regulated Industries" },
      { to: "/governance/private-capital", label: "Private Capital" },
      { to: "/governance/bfsi", label: "Banking & Financial Services" },
      { to: "/governance/sovereign", label: "Sovereign Nations" },
      { to: "/governance/healthcare", label: "Healthcare" },
      { to: "/governance/legal", label: "Legal & Professional Services" },
      { to: "/governance/finance", label: "Corporate Finance" },
      { to: "/governance/manufacturing", label: "Manufacturing" },
      { to: "/governance/logistics", label: "Logistics & Supply Chain" },
      { to: "/governance/real-estate", label: "Real Estate" },
      { to: "/governance/retail", label: "Retail" },
      { to: "/governance/hospitality", label: "Hospitality" },
      { to: "/governance/education", label: "Education" },
    ],
  },
  {
    label: "Company",
    columns: 2,
    items: [
      { to: "/about", label: "About" },
      { to: "/leadership", label: "Leadership" },
      { to: "/portfolio", label: "Portfolio" },
      { to: "/smartnation-ai", label: "SmartNation AI" },
      { to: "/governance-console", label: "Governance Console" },
      { to: "/contact", label: "Contact" },
      { to: "/advisory", label: "Advisory Group" },
      { to: "/advisory/executive-ai-governance", label: "Executive AI Governance" },
      { to: "/advisory/readiness", label: "Readiness & Assurance" },
      { to: "/advisory/governance-implementation", label: "Governance Implementation" },
      { to: "/advisory/fractional-ai-governance", label: "Fractional Governance Office" },
      { to: "/advisory/autonomous-ai-governance", label: "Autonomous AI Governance" },
      { to: "/advisory/industries", label: "Advisory Industries" },
      { to: "/advisory/insights", label: "Advisory Insights" },
      { to: "/advisory/engage", label: "Engage Advisory" },
    ],
  },
  {
    label: "Insights",
    items: [
      { to: "/resources", label: "Resources" },
      { to: "/blog", label: "Insights" },
      { to: "/faq", label: "FAQ" },
    ],
  },
] as const;
''')

write("src/components/Header.tsx", r'''
import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NAVIGATION_GROUPS } from "../data/siteNavigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    document.documentElement.classList.toggle("cidg-menu-open", mobileOpen);
    return () => document.documentElement.classList.remove("cidg-menu-open");
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setDesktopOpen(null);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setDesktopOpen(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopOpen(null);
  }, [pathname]);

  return (
    <header className="cidg-platinum-header" ref={headerRef}>
      <div className="cidg-platinum-masthead">
        <Link to="/" className="cidg-platinum-brand" aria-label="CoreIdentity home">
          <span className="cidg-platinum-mark"><img src="/logo-mark.png" alt="" /></span>
          <span className="cidg-platinum-wordmark">COREIDENTITY</span>
        </Link>

        <nav className="cidg-platinum-desktop-nav" aria-label="Primary navigation">
          {NAVIGATION_GROUPS.map((group) => {
            const isOpen = desktopOpen === group.label;
            const isActive = group.items.some((item) => pathname === item.to || pathname.startsWith(`${item.to}/`));
            return (
              <div className="cidg-nav-dropdown" key={group.label} onMouseEnter={() => setDesktopOpen(group.label)} onMouseLeave={() => setDesktopOpen(null)}>
                <button type="button" className={isActive ? "is-active" : ""} aria-expanded={isOpen} aria-controls={`nav-${group.label.toLowerCase()}`} onClick={() => setDesktopOpen(group.label)}>
                  {group.label}<span aria-hidden="true">⌄</span>
                </button>
                <div id={`nav-${group.label.toLowerCase()}`} className={`cidg-nav-dropdown-panel ${group.columns === 2 ? "has-two-columns" : ""}`} hidden={!isOpen}>
                  {group.items.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
                </div>
              </div>
            );
          })}
          <Link to="/contact" className="cidg-platinum-contact">Contact</Link>
        </nav>

        <button type="button" className="cidg-platinum-menu-button" aria-expanded={mobileOpen} aria-controls="cidg-platinum-menu" onClick={() => setMobileOpen((value) => !value)}>
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div id="cidg-platinum-menu" className={`cidg-platinum-menu ${mobileOpen ? "is-open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="cidg-platinum-menu-inner">
          {NAVIGATION_GROUPS.map((group) => (
            <section key={group.label} className="cidg-platinum-menu-group">
              <p>{group.label}</p>
              {group.items.map((item) => <Link key={item.to} to={item.to}><span>{item.label}</span><b aria-hidden="true">→</b></Link>)}
            </section>
          ))}
          <Link to="/contact" className="cidg-platinum-menu-cta">Begin an Institutional Conversation</Link>
        </div>
      </div>
    </header>
  );
}
''')

write("src/components/Layout.tsx", r'''
import { useEffect } from "react";
import { Outlet, useRouterState } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";
import { Header } from "./Header";
import Footer from "./Footer";

const FRAMED_ROUTES = new Set(["/about", "/leadership", "/governance-console", "/contact"]);

export function Layout() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const hash = useRouterState({ select: (state) => state.location.hash });
  const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/+$/, "");
  const canonical = `https://coreidentitygroup.com${canonicalPath}`;
  const framed = FRAMED_ROUTES.has(canonicalPath);

  useEffect(() => {
    if (hash?.startsWith("#")) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);

  return (
    <div className="cidg-platinum-site">
      <Helmet>
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
      </Helmet>
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <Header />
      <main className={`cidg-platinum-main ${framed ? "cidg-platinum-main--framed" : ""}`} id="main-content">
        {framed ? <div className="cidg-interior-frame"><Outlet /></div> : <Outlet />}
      </main>
      <Footer />
    </div>
  );
}
''')

write("src/pages/AdvisoryPages.tsx", r'''
import { FormEvent, ReactNode, useMemo, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Helmet } from "react-helmet-async";

const advisoryNav = [
  ["/advisory", "Advisory"],
  ["/advisory/executive-ai-governance", "Executive AI Governance"],
  ["/advisory/readiness", "Readiness"],
  ["/advisory/governance-implementation", "Implementation"],
  ["/advisory/fractional-ai-governance", "Fractional Office"],
  ["/advisory/autonomous-ai-governance", "Autonomous AI"],
  ["/advisory/industries", "Industries"],
  ["/advisory/insights", "Insights"],
  ["/advisory/engage", "Engage"],
] as const;

function Meta({ title, description }: { title: string; description: string }) {
  return <Helmet><title>{title} | CoreIdentity Advisory Group</title><meta name="description" content={description} /><meta property="og:title" content={`${title} | CoreIdentity Advisory Group`} /><meta property="og:description" content={description} /></Helmet>;
}

function AdvisoryShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return <div className="advisory-site">
    <div className="advisory-lockup"><Link to="/advisory"><strong>COREIDENTITY</strong><span>ADVISORY GROUP</span></Link></div>
    <nav className="advisory-nav" aria-label="Advisory navigation">
      {advisoryNav.map(([to, label]) => <Link key={to} to={to} className={pathname === to ? "is-active" : ""}>{label}</Link>)}
    </nav>
    {children}
  </div>;
}

function Hero({ eyebrow, title, lead, actions = true }: { eyebrow: string; title: string; lead: string; actions?: boolean }) {
  return <header className="advisory-hero"><p className="advisory-eyebrow">{eyebrow}</p><h1>{title}</h1><p className="advisory-lead">{lead}</p>{actions && <div className="advisory-actions"><Link to="/advisory/engage" className="advisory-primary">Discuss Your Governance Requirements</Link><Link to="/advisory/executive-ai-governance" className="advisory-secondary">Explore the Practice</Link></div>}</header>;
}

function Section({ eyebrow, title, children, dark = false }: { eyebrow?: string; title: string; children: ReactNode; dark?: boolean }) {
  return <section className={`advisory-section ${dark ? "is-dark" : ""}`}><div className="advisory-section-inner">{eyebrow && <p className="advisory-eyebrow">{eyebrow}</p>}<h2>{title}</h2>{children}</div></section>;
}

function Cards({ items }: { items: Array<{ title: string; text: string }> }) {
  return <div className="advisory-cards">{items.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.text}</p></article>)}</div>;
}

function Closing({ title = "Establish the governance required for what comes next." }: { title?: string }) {
  return <section className="advisory-closing"><h2>{title}</h2><Link to="/advisory/engage" className="advisory-primary">Discuss Your Governance Requirements</Link></section>;
}

export function AdvisoryHomePage() {
  return <AdvisoryShell><Meta title="Executive AI Governance" description="CoreIdentity Advisory Group helps institutions establish the governance required to adopt, scale, and govern AI from assisted decisions through autonomous execution." /><Hero eyebrow="CoreIdentity Advisory Group" title="Executive AI Governance" lead="From AI adoption to autonomous execution, we help institutions establish the governance required to remain in control." />
    <Section eyebrow="The Governance Imperative" title="AI capability is advancing faster than institutional governance."><p>AI can influence decisions, interact with institutional systems, process sensitive information, initiate workflows, and increasingly execute actions on behalf of organizations. Yet responsibility remains with the institution.</p><p>Effective AI governance makes authority, accountability, requirements, controls, monitoring, and assurance operational.</p></Section>
    <Section eyebrow="The Advisory Journey" title="Governance that evolves with AI capability." dark><Cards items={[
      {title:"Understand",text:"Establish the AI landscape, governance maturity, material exposures, and priority gaps."},
      {title:"Establish",text:"Define authority, accountability, decision rights, structures, policies, and control requirements."},
      {title:"Operationalize",text:"Translate governance requirements into functioning processes, oversight, escalation, reporting, and assurance."},
      {title:"Govern",text:"Provide continuing executive governance capability where ongoing leadership and coordination are required."},
      {title:"Advance",text:"Extend governance as AI moves from assisting human decisions toward agentic and increasingly autonomous execution."},
    ]} /></Section>
    <Section eyebrow="Institutional Consequence" title="Governance for environments where AI decisions and actions matter."><p>Governance becomes particularly important where AI interacts with sensitive information, consequential decisions, regulatory obligations, complex operations, or institutional authority.</p><div className="advisory-inline-links"><Link to="/advisory/industries">Explore institutional environments →</Link><Link to="/advisory/autonomous-ai-governance">Explore autonomous AI governance →</Link></div></Section><Closing /></AdvisoryShell>;
}

export function ExecutiveAIGovernancePage() {
  return <AdvisoryShell><Meta title="Executive AI Governance" description="Make AI governance an executive operating capability connecting strategy, authority, risk, controls, assurance, and accountability." /><Hero eyebrow="The Practice" title="AI governance must become an executive operating capability." lead="Governance must extend beyond principles and policy. It must establish how AI is authorized, evaluated, deployed, monitored, governed, and held accountable within the institution." />
    <Section title="Enablement and control are not competing objectives."><p>Strong governance gives leadership a reliable basis for adopting and scaling AI. It connects institutional objectives with responsible execution across strategy, governance, risk, authority, controls, assurance, and accountability.</p></Section>
    <Section eyebrow="Cross-functional by design" title="Leadership remains accountable across organizational boundaries." dark><Cards items={[{title:"Executive Leadership",text:"Sets institutional objectives, risk posture, and accountability."},{title:"Technology & Data",text:"Translates requirements into architecture, deployment, and operating controls."},{title:"Legal, Risk & Compliance",text:"Interprets obligations and tests whether governance is defensible."},{title:"Business Functions",text:"Own the outcomes, decisions, and operational consequences of AI use."}]} /></Section>
    <Section title="Framework-aligned. Institution-specific."><p>We work with established frameworks and regulatory expectations as useful reference points. The objective is not framework theater; it is a governance capability that functions inside the institution and produces evidence leadership can rely upon.</p></Section><Closing /></AdvisoryShell>;
}

export function AdvisoryReadinessPage() {
  return <AdvisoryShell><Meta title="AI Governance Readiness & Assurance" description="Establish an executive baseline of AI governance maturity, exposure, gaps, and priority actions." /><Hero eyebrow="Understand" title="AI Governance Readiness & Assurance" lead="Establish where AI is being used, where material exposure exists, how governance is functioning, and what leadership should prioritize next." />
    <Section title="A decision-ready baseline, not a generic maturity score."><div className="advisory-steps"><span>Discover</span><b>→</b><span>Assess</span><b>→</b><span>Map</span><b>→</b><span>Prioritize</span></div><p>The review can examine AI inventory, approved and unapproved use, accountability, decision rights, policies, controls, third-party exposure, risk classification, regulatory obligations, agentic-system exposure, and assurance.</p></Section>
    <Section eyebrow="Executive AI Governance Baseline" title="Clarity on exposure, priority, and the path forward." dark><Cards items={[{title:"Governance maturity",text:"A practical view of current capability and operating gaps."},{title:"Risk and exposure",text:"Material AI uses, dependencies, and governance weaknesses requiring attention."},{title:"Priority findings",text:"Executive-level decisions organized by consequence and urgency."},{title:"90-day roadmap",text:"Sequenced actions to strengthen governance without stalling responsible adoption."}]} /></Section><Closing title="Begin with a clear view of where governance stands." /></AdvisoryShell>;
}

export function GovernanceImplementationPage() {
  return <AdvisoryShell><Meta title="AI Governance Design & Implementation" description="Turn AI governance principles into an operating lifecycle with clear authority, controls, evidence, and assurance." /><Hero eyebrow="Establish + Operationalize" title="AI Governance Design & Implementation" lead="Governance that exists only in policy does not govern execution. We help institutions translate governance requirements into structures, processes, controls, evidence, and assurance." />
    <Section title="A governance lifecycle that operates."><div className="advisory-lifecycle">{["Propose","Classify","Review","Authorize","Deploy","Monitor","Assure"].map((x,i)=><span key={x}>{i+1}<strong>{x}</strong></span>)}</div></Section>
    <Section title="Designed around institutional decision-making." dark><Cards items={[{title:"Authority & accountability",text:"Charters, ownership, decision rights, committees, and escalation."},{title:"Policy & classification",text:"Requirements proportionate to use, capability, exposure, and consequence."},{title:"Controls & evidence",text:"Review gates, human oversight, documentation, monitoring, and recordkeeping."},{title:"Reporting & assurance",text:"Executive visibility and testing that governance functions as intended."}]} /></Section><Closing /></AdvisoryShell>;
}

export function FractionalGovernancePage() {
  return <AdvisoryShell><Meta title="Fractional AI Governance Office" description="Embedded executive AI governance leadership for institutions that need continuing capability while building their permanent model." /><Hero eyebrow="Govern" title="Fractional AI Governance Office" lead="An embedded executive governance capability for institutions that require continuing leadership, coordination, oversight, and assurance while building the capability internally." />
    <Section title="A five-part mandate."><Cards items={[{title:"Lead",text:"Provide executive governance leadership and counsel."},{title:"Govern",text:"Lead established processes and support review of material initiatives, risks, exceptions, and decisions."},{title:"Coordinate",text:"Connect leadership, technology, risk, legal, security, compliance, and business functions."},{title:"Assure",text:"Monitor whether governance requirements are being followed and remain effective."},{title:"Report",text:"Provide executive and board-level visibility into governance activity, decisions, and exposure."}]} /></Section>
    <Section eyebrow="30 / 60 / 90" title="Establish, operate, and transition deliberately." dark><Cards items={[{title:"First 30 days",text:"Confirm mandate, stakeholders, inventory, immediate exposures, and decision cadence."},{title:"By 60 days",text:"Operate priority processes, clarify decision rights, and establish executive reporting."},{title:"By 90 days",text:"Stabilize the operating model and define the path to enduring internal capability."}]} /><p className="advisory-note"><strong>Institutional authority remains with the client.</strong> CoreIdentity Advisory Group leads and coordinates the governance function and supports institutional decision-makers; fiduciary, statutory, and institutional authority is not transferred.</p></Section><Closing /></AdvisoryShell>;
}

export function AutonomousAIGovernancePage() {
  return <AdvisoryShell><Meta title="Autonomous & Agentic AI Governance" description="Extend AI governance to delegated machine authority, execution boundaries, continuous assurance, and institutional accountability." /><Hero eyebrow="Advance" title="When AI begins to act, governance changes." lead="Agentic systems introduce a dimension that conventional AI governance often leaves implicit: authority. Institutions must govern what a system can do, on whose behalf, under what constraints, and with what evidence." />
    <Section title="The governance question becomes one of delegated execution."><div className="advisory-questions">{["What can the system do?","Who authorized it?","Under what constraints?","On whose behalf?","What changes its authority?","How is execution verified?","Who remains accountable?"].map(q=><p key={q}>{q}</p>)}</div></Section>
    <Section eyebrow="The CoreIdentity progression" title="From organizational governance to governance through execution." dark><div className="advisory-progression"><span>Executive AI Governance</span><b>↓</b><span>Autonomous Execution Governance</span><b>↓</b><span>Trust Infrastructure</span><b>↓</b><span>Governance Ecosystem for the Autonomous Era</span></div><p>CoreIdentity Advisory Group helps leadership prepare for this transition without forcing infrastructure into problems that can still be solved through sound organizational governance.</p></Section><Closing /></AdvisoryShell>;
}

export function AdvisoryIndustriesPage() {
  return <AdvisoryShell><Meta title="Institutional & Regulated Environments" description="Executive AI governance for environments where AI decisions and actions carry material institutional consequence." /><Hero eyebrow="Where governance matters most" title="Institutional & Regulated Environments" lead="AI governance becomes essential where sensitive information, consequential decisions, complex operations, regulatory obligations, or delegated authority create material institutional exposure." />
    <Section title="One governance discipline, adapted to institutional context."><Cards items={[{title:"Financial Services & Insurance",text:"Consequential decisions, customer obligations, model risk, third parties, and complex accountability."},{title:"Healthcare",text:"Sensitive information, clinical and administrative uses, safety, oversight, and institutional trust."},{title:"Professional Services",text:"Confidentiality, privilege, client obligations, work quality, and professional accountability."},{title:"Enterprise Technology",text:"Rapid adoption across platforms, workflows, vendors, data, and distributed business ownership."},{title:"Critical Infrastructure",text:"Operational resilience, security, safety, continuity, and clear boundaries on machine authority."},{title:"Private Capital & Portfolio Companies",text:"Governance across varied operating environments, investment oversight, and enterprise transformation."}]} /><p className="advisory-note">Sector context informs governance design. It does not replace legal advice, regulatory interpretation, or an institution’s own accountable decision-making.</p></Section><Closing /></AdvisoryShell>;
}

export function AdvisoryInsightsPage() {
  return <AdvisoryShell><Meta title="Executive AI Governance Insights" description="Executive perspectives on AI governance operating models, accountability, assurance, agentic systems, and autonomous execution." /><Hero eyebrow="Knowledge center" title="Executive AI Governance Insights" lead="A focused collection of perspectives for leaders responsible for AI adoption, institutional accountability, governance operating models, assurance, and the transition toward autonomous execution." />
    <Section title="Current areas of inquiry."><Cards items={[{title:"Governance operating models",text:"How decision rights, committees, ownership, escalation, and evidence work in practice."},{title:"Board & executive oversight",text:"What leadership must know, decide, monitor, and be able to demonstrate."},{title:"AI risk & assurance",text:"How institutions classify exposure and test whether governance is functioning."},{title:"Agentic governance",text:"How authority, identity, boundaries, and accountability change when machines act."}]} /><div className="advisory-inline-links"><Link to="/blog">Explore CoreIdentity Insights →</Link><Link to="/resources">View CoreIdentity Resources →</Link></div></Section><Closing title="Bring the governance question into focus." /></AdvisoryShell>;
}

type EngageForm = { organization:string; role:string; industry:string; size:string; adoption:string; concern:string; structure:string; autonomous:string; engagement:string; timing:string; name:string; email:string };
const initialForm: EngageForm = { organization:"",role:"",industry:"",size:"",adoption:"",concern:"",structure:"",autonomous:"",engagement:"",timing:"",name:"",email:"" };

export function AdvisoryEngagePage() {
  const [form,setForm]=useState(initialForm); const [status,setStatus]=useState("idle");
  const valid=useMemo(()=>form.organization.trim().length>1 && form.role.trim().length>1 && form.concern.trim().length>9 && form.name.trim().length>1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email),[form]);
  const set=(key:keyof EngageForm,value:string)=>setForm(v=>({...v,[key]:value}));
  async function submit(event:FormEvent){event.preventDefault();if(!valid||status==="submitting")return;setStatus("submitting");const message=[`Role: ${form.role}`,`Industry: ${form.industry||"Not specified"}`,`Organization size: ${form.size||"Not specified"}`,`AI adoption: ${form.adoption||"Not specified"}`,`Primary concern: ${form.concern}`,`Current governance structure: ${form.structure||"Not specified"}`,`Agentic/autonomous AI: ${form.autonomous||"Not specified"}`,`Desired engagement: ${form.engagement||"Not specified"}`,`Timing: ${form.timing||"Not specified"}`].join("\n");try{const res=await fetch("/api/contact",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({name:form.name,email:form.email,company:form.organization,interest:"Advisory governance requirements",message})});if(!res.ok)throw new Error();setStatus("success");setForm(initialForm)}catch{setStatus("error")}}
  return <AdvisoryShell><Meta title="Engage Advisory" description="Start with the governance problem and discuss your institution's AI governance requirements with CoreIdentity Advisory Group." /><Hero eyebrow="Engage" title="Start with the governance problem." lead="Tell us enough about the institutional context to make the first conversation useful. Commercial terms are handled privately through the formal engagement process." actions={false} />
    <section className="advisory-form-section"><form onSubmit={submit} className="advisory-form"><div className="advisory-form-grid">
      <Field label="Organization" name="organization" value={form.organization} onChange={v=>set("organization",v)} required /><Field label="Your role" name="role" value={form.role} onChange={v=>set("role",v)} required />
      <Field label="Industry" name="industry" value={form.industry} onChange={v=>set("industry",v)} /><Select label="Organization size" name="size" value={form.size} onChange={v=>set("size",v)} options={["Under 250","250–999","1,000–4,999","5,000+"]} />
      <Select label="Current AI adoption stage" name="adoption" value={form.adoption} onChange={v=>set("adoption",v)} options={["Exploring","Piloting","Scaling","Enterprise-wide"]} /><Select label="Agentic or autonomous AI" name="autonomous" value={form.autonomous} onChange={v=>set("autonomous",v)} options={["Not planned","Planned","In pilot","Deployed"]} />
      <Field label="Current governance structure" name="structure" value={form.structure} onChange={v=>set("structure",v)} /><Select label="Desired engagement" name="engagement" value={form.engagement} onChange={v=>set("engagement",v)} options={["Readiness & assurance","Governance implementation","Fractional governance office","Autonomous AI governance","Not yet determined"]} />
      <Field label="Timing" name="timing" value={form.timing} onChange={v=>set("timing",v)} /><Field label="Name" name="name" value={form.name} onChange={v=>set("name",v)} required />
      <Field label="Email" name="email" type="email" value={form.email} onChange={v=>set("email",v)} required />
    </div><label className="advisory-field advisory-field-wide"><span>Primary governance concern</span><textarea name="concern" value={form.concern} onChange={e=>set("concern",e.target.value)} required rows={5} /></label>
    <div className="advisory-form-footer"><p aria-live="polite">{status==="success"?"Thank you. Your governance requirements were received.":status==="error"?"The message could not be sent. Please try again.":"We use this information only to prepare for the engagement discussion."}</p><button disabled={!valid||status==="submitting"}>{status==="submitting"?"Sending…":"Discuss Your Governance Requirements"}</button></div></form></section></AdvisoryShell>;
}

function Field({label,name,value,onChange,required=false,type="text"}:{label:string;name:string;value:string;onChange:(v:string)=>void;required?:boolean;type?:string}){return <label className="advisory-field"><span>{label}</span><input name={name} type={type} value={value} onChange={e=>onChange(e.target.value)} required={required} /></label>}
function Select({label,name,value,onChange,options}:{label:string;name:string;value:string;onChange:(v:string)=>void;options:string[]}){return <label className="advisory-field"><span>{label}</span><select name={name} value={value} onChange={e=>onChange(e.target.value)}><option value="">Select</option>{options.map(x=><option key={x}>{x}</option>)}</select></label>}
''')

replace_once("src/router.tsx", 'import MarketsWeServePage from "./pages/MarketsWeServePage";', '''import MarketsWeServePage from "./pages/MarketsWeServePage";
import {
  AdvisoryHomePage,
  ExecutiveAIGovernancePage,
  AdvisoryReadinessPage,
  GovernanceImplementationPage,
  FractionalGovernancePage,
  AutonomousAIGovernancePage,
  AdvisoryIndustriesPage,
  AdvisoryInsightsPage,
  AdvisoryEngagePage,
} from "./pages/AdvisoryPages";''')

replace_once("src/router.tsx", '// ── Advisory (canonical + aliases) ──────────────────────────────────────', '''// ── Advisory sub-site ──────────────────────────────────────────────────
const advisoryHomeRoute = createRoute({ getParentRoute: () => rootRoute, path: "/advisory", component: AdvisoryHomePage });
const advisoryExecutiveRoute = createRoute({ getParentRoute: () => rootRoute, path: "/advisory/executive-ai-governance", component: ExecutiveAIGovernancePage });
const advisoryReadinessRoute = createRoute({ getParentRoute: () => rootRoute, path: "/advisory/readiness", component: AdvisoryReadinessPage });
const advisoryImplementationRoute = createRoute({ getParentRoute: () => rootRoute, path: "/advisory/governance-implementation", component: GovernanceImplementationPage });
const advisoryFractionalRoute = createRoute({ getParentRoute: () => rootRoute, path: "/advisory/fractional-ai-governance", component: FractionalGovernancePage });
const advisoryAutonomousRoute = createRoute({ getParentRoute: () => rootRoute, path: "/advisory/autonomous-ai-governance", component: AutonomousAIGovernancePage });
const advisoryIndustriesRoute = createRoute({ getParentRoute: () => rootRoute, path: "/advisory/industries", component: AdvisoryIndustriesPage });
const advisoryInsightsRoute = createRoute({ getParentRoute: () => rootRoute, path: "/advisory/insights", component: AdvisoryInsightsPage });
const advisoryEngageRoute = createRoute({ getParentRoute: () => rootRoute, path: "/advisory/engage", component: AdvisoryEngagePage });

// ── Advisory legacy aliases ────────────────────────────────────────────''')

replace_once("src/router.tsx", '  // Advisory: canonical first, aliases second\n  ciagRoute,', '''  // Advisory sub-site and legacy aliases
  advisoryHomeRoute,
  advisoryExecutiveRoute,
  advisoryReadinessRoute,
  advisoryImplementationRoute,
  advisoryFractionalRoute,
  advisoryAutonomousRoute,
  advisoryIndustriesRoute,
  advisoryInsightsRoute,
  advisoryEngageRoute,
  ciagRoute,''')

for route_path in ["/ciag", "/coreidentity-ai-advisory-group", "/coreidentity-advisory-group"]:
    old = f"  path: \"{route_path}\",\n  component: CoreIdentityAdvisoryGroupPage,"
    new = f"  path: \"{route_path}\",\n  component: AdvisoryHomePage,"
    replace_once("src/router.tsx", old, new)

replace_once("src/pages/ContactPage.tsx", 'import { PageTitle } from "../components/ui";', 'import { PageTitle } from "../components/ui";\nimport { Helmet } from "react-helmet-async";')
replace_once("src/pages/ContactPage.tsx", '    <div className="space-y-8">\n      <div className="space-y-3">', '''    <div className="space-y-8">
      <Helmet><title>Contact | CoreIdentity</title><meta name="description" content="Contact CoreIdentity to discuss Trust Infrastructure, governed autonomous execution, institutional advisory services, strategic partnerships, or deployment pathways." /></Helmet>
      <div className="space-y-3">''')
replace_once("src/pages/ContactPage.tsx", '                id="name"\n                value={form.name}', '                id="name"\n                name="name"\n                value={form.name}')
replace_once("src/pages/ContactPage.tsx", '                id="email"\n                value={form.email}', '                id="email"\n                name="email"\n                type="email"\n                value={form.email}')
replace_once("src/pages/ContactPage.tsx", '                id="company"\n                value={form.company}', '                id="company"\n                name="company"\n                value={form.company}')
replace_once("src/pages/ContactPage.tsx", '                id="interest"\n                value={form.interest}', '                id="interest"\n                name="interest"\n                value={form.interest}')
replace_once("src/pages/ContactPage.tsx", '              id="message"\n              value={form.message}', '              id="message"\n              name="message"\n              value={form.message}')

# Route-level Helmet metadata owns these values. Leaving static homepage values
# in index.html creates duplicate canonicals and OG URLs on every SPA route.
index_path = ROOT / "index.html"
index_content = index_path.read_text()
index_content = index_content.replace('      <meta property="og:url" content="https://coreidentitygroup.com/" />\n', '')
index_content = index_content.replace('      <link rel="canonical" href="https://coreidentitygroup.com/" />\n', '')
index_path.write_text(index_content)

write("public/_redirects", r'''
# Canonical Advisory sub-site
/ciag                              /advisory 301
/coreidentity-ai-advisory-group    /advisory 301
/coreidentity-advisory-group       /advisory 301
/advisory/                         /advisory 301

# Retired surfaces
/sal                     /verification-at-scale 301
/fgre                    /verification-at-scale 301
/sentinel                /platform 301
/nexus                   /sovereign-assurance 301
/agentidentity-systems   /execution-integrity 301
/mcp                     /platform 301
/ago                     /sovereign-assurance 301
/ago-1                   /sovereign-assurance 301
/sentinel-os             /platform 301
/nexus-os                /sovereign-assurance 301
/quantum-hardening       /platform 301
/coreidentity-technologies /platform 301
/portal                  /contact 301
/layer-a                 /execution-integrity 301
/layer-b                 /verification-at-scale 301
/layer-c                 /sovereign-assurance 301
/layer-d                 /platform 301

# SPA fallback
/* /index.html 200
''')

write("public/sitemap.xml", r'''
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://coreidentitygroup.com/</loc><lastmod>2026-08-31</lastmod><priority>1.0</priority></url>
  <url><loc>https://coreidentitygroup.com/trust-infrastructure</loc><lastmod>2026-08-31</lastmod><priority>0.9</priority></url>
  <url><loc>https://coreidentitygroup.com/intelligence</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/assurance</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/trust</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/governance-ecosystem</loc><lastmod>2026-08-31</lastmod><priority>0.9</priority></url>
  <url><loc>https://coreidentitygroup.com/platform</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/execution-integrity</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/verification-at-scale</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/sovereign-assurance</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/markets-we-serve</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/regulated</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/private-capital</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/bfsi</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/sovereign</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/healthcare</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/legal</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/finance</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/manufacturing</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/logistics</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/real-estate</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/retail</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/hospitality</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance/education</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/portfolio</loc><lastmod>2026-08-31</lastmod><priority>0.6</priority></url>
  <url><loc>https://coreidentitygroup.com/smartnation-ai</loc><lastmod>2026-08-31</lastmod><priority>0.6</priority></url>
  <url><loc>https://coreidentitygroup.com/about</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/leadership</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/governance-console</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/resources</loc><lastmod>2026-08-31</lastmod><priority>0.6</priority></url>
  <url><loc>https://coreidentitygroup.com/blog</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/faq</loc><lastmod>2026-08-31</lastmod><priority>0.6</priority></url>
  <url><loc>https://coreidentitygroup.com/contact</loc><lastmod>2026-08-31</lastmod><priority>0.6</priority></url>
  <url><loc>https://coreidentitygroup.com/advisory</loc><lastmod>2026-08-31</lastmod><priority>0.9</priority></url>
  <url><loc>https://coreidentitygroup.com/advisory/executive-ai-governance</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/advisory/readiness</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/advisory/governance-implementation</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/advisory/fractional-ai-governance</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/advisory/autonomous-ai-governance</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/advisory/industries</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/advisory/insights</loc><lastmod>2026-08-31</lastmod><priority>0.7</priority></url>
  <url><loc>https://coreidentitygroup.com/advisory/engage</loc><lastmod>2026-08-31</lastmod><priority>0.8</priority></url>
  <url><loc>https://coreidentitygroup.com/privacy</loc><lastmod>2026-08-31</lastmod><priority>0.3</priority></url>
  <url><loc>https://coreidentitygroup.com/terms</loc><lastmod>2026-08-31</lastmod><priority>0.3</priority></url>
</urlset>
''')

middleware_marker = '  "/advisory": {'
middleware_path = ROOT / "functions/_middleware.js"
middleware = middleware_path.read_text()
if middleware_marker not in middleware:
    middleware = middleware.replace('const PAGES = {', '''const PAGES = {
  "/advisory": { title: "Executive AI Governance | CoreIdentity Advisory Group", desc: "CoreIdentity Advisory Group helps institutions establish the governance required to adopt, scale, and govern AI from assisted decisions through autonomous execution." },
  "/advisory/executive-ai-governance": { title: "Executive AI Governance | CoreIdentity Advisory Group", desc: "Make AI governance an executive operating capability connecting strategy, authority, risk, controls, assurance, and accountability." },
  "/advisory/readiness": { title: "AI Governance Readiness & Assurance | CoreIdentity Advisory Group", desc: "Establish an executive baseline of AI governance maturity, exposure, gaps, and priority actions." },
  "/advisory/governance-implementation": { title: "AI Governance Design & Implementation | CoreIdentity Advisory Group", desc: "Turn AI governance principles into an operating lifecycle with clear authority, controls, evidence, and assurance." },
  "/advisory/fractional-ai-governance": { title: "Fractional AI Governance Office | CoreIdentity Advisory Group", desc: "Embedded executive AI governance leadership for institutions that need continuing capability while building their permanent model." },
  "/advisory/autonomous-ai-governance": { title: "Autonomous & Agentic AI Governance | CoreIdentity Advisory Group", desc: "Extend AI governance to delegated machine authority, execution boundaries, continuous assurance, and institutional accountability." },
  "/advisory/industries": { title: "Institutional & Regulated Environments | CoreIdentity Advisory Group", desc: "Executive AI governance for environments where AI decisions and actions carry material institutional consequence." },
  "/advisory/insights": { title: "Executive AI Governance Insights | CoreIdentity Advisory Group", desc: "Executive perspectives on AI governance operating models, accountability, assurance, agentic systems, and autonomous execution." },
  "/advisory/engage": { title: "Engage Advisory | CoreIdentity Advisory Group", desc: "Discuss your institution's AI governance requirements with CoreIdentity Advisory Group." },''', 1)
    middleware_path.write_text(middleware)

css_marker = "/* >>> coreidentity:advisory-subsite-v1 >>> */"
css = r'''

/* >>> coreidentity:advisory-subsite-v1 >>> */
.cidg-interior-frame{width:min(1180px,calc(100% - 2.5rem));margin:0 auto;padding:clamp(2rem,4vw,4.5rem) 0 clamp(4rem,7vw,7rem);box-sizing:border-box}.cidg-platinum-main--framed{overflow-x:clip}.cidg-platinum-main--framed .cidg-interior-frame>*{min-width:0}
.cidg-platinum-desktop-nav{gap:clamp(8px,1vw,18px)}.cidg-nav-dropdown{position:relative}.cidg-nav-dropdown>button{min-height:44px;display:flex;align-items:center;gap:.4rem;padding:0 .5rem;border:0;color:#d7d7d7;background:transparent;font:inherit;font-size:.82rem;font-weight:750;cursor:pointer}.cidg-nav-dropdown>button span{font-size:.9rem;transition:transform .18s ease}.cidg-nav-dropdown>button[aria-expanded="true"] span{transform:rotate(180deg)}.cidg-nav-dropdown>button.is-active{color:#fff}.cidg-nav-dropdown-panel{position:absolute;top:calc(100% + 14px);left:50%;width:280px;max-height:min(66vh,560px);padding:.8rem;display:grid;overflow-y:auto;border:1px solid rgba(230,230,230,.16);border-radius:16px;background:#0a0a0a;box-shadow:0 24px 60px rgba(0,0,0,.28);transform:translateX(-50%)}.cidg-nav-dropdown-panel.has-two-columns{width:min(620px,78vw);grid-template-columns:1fr 1fr;column-gap:.5rem}.cidg-nav-dropdown-panel a{min-height:42px;display:flex;align-items:center;padding:.55rem .7rem;border-radius:9px;color:#d7d7d7;font-size:.82rem;line-height:1.25}.cidg-nav-dropdown-panel a:hover,.cidg-nav-dropdown-panel a:focus-visible{color:#fff;background:rgba(255,255,255,.08);outline:none}.cidg-platinum-footer-grid{grid-template-columns:minmax(250px,1.35fr) repeat(4,minmax(130px,.55fr));gap:clamp(1.5rem,3vw,3rem)}
.advisory-site{--ad-ink:#151a22;--ad-copy:#4e5662;--ad-line:rgba(21,26,34,.14);--ad-platinum:#d9d9d6;--ad-warm:#9a682a;background:#fff;color:var(--ad-ink)}.advisory-lockup{padding:1.4rem clamp(1.25rem,5vw,5rem) 1rem;border-bottom:1px solid var(--ad-line)}.advisory-lockup a{display:inline-grid;text-decoration:none}.advisory-lockup strong{font-size:1rem;letter-spacing:.18em}.advisory-lockup span{margin-top:.3rem;color:#6b7280;font-size:.72rem;font-weight:750;letter-spacing:.2em}.advisory-nav{position:sticky;top:110px;z-index:30;display:flex;gap:.2rem;padding:.65rem clamp(1rem,4vw,4rem);overflow-x:auto;border-bottom:1px solid var(--ad-line);background:rgba(255,255,255,.96);backdrop-filter:blur(12px);scrollbar-width:none}.advisory-nav a{flex:0 0 auto;padding:.65rem .75rem;border-radius:7px;color:#515967;font-size:.76rem;font-weight:750;text-decoration:none;white-space:nowrap}.advisory-nav a:hover,.advisory-nav a.is-active{color:#111827;background:#f0f1f3}.advisory-hero{padding:clamp(4.5rem,8vw,8rem) clamp(1.25rem,7vw,7rem);background:linear-gradient(135deg,#fff 0%,#fff 64%,#f2f0eb 100%)}.advisory-eyebrow{margin:0 0 1.2rem;color:var(--ad-warm)!important;font-size:.75rem;font-weight:850;letter-spacing:.18em;text-transform:uppercase}.advisory-hero h1{max-width:1040px;margin:0;color:var(--ad-ink);font-size:clamp(3rem,7vw,7rem);font-weight:500;line-height:.96;letter-spacing:-.05em}.advisory-lead{max-width:850px;margin:2rem 0 0;color:var(--ad-copy)!important;font-size:clamp(1.15rem,1.7vw,1.45rem);line-height:1.7}.advisory-actions{display:flex;flex-wrap:wrap;gap:.8rem;margin-top:2.5rem}.advisory-primary,.advisory-secondary{min-height:54px;display:inline-flex;align-items:center;justify-content:center;padding:0 1.25rem;border:1px solid #172131;border-radius:6px;font-size:.76rem;font-weight:850;letter-spacing:.06em;text-decoration:none;text-transform:uppercase}.advisory-primary{color:#fff!important;background:#172131}.advisory-secondary{color:#172131!important;background:#fff}.advisory-section{padding:clamp(4rem,7vw,7rem) clamp(1.25rem,7vw,7rem);border-top:1px solid var(--ad-line);background:#fff}.advisory-section.is-dark{background:#171d26}.advisory-section-inner{width:min(1180px,100%);margin:0 auto}.advisory-section h2,.advisory-closing h2{max-width:980px;margin:0 0 1.8rem;color:var(--ad-ink);font-size:clamp(2.3rem,4.6vw,4.8rem);font-weight:500;line-height:1.03;letter-spacing:-.04em}.advisory-section p{max-width:850px;color:var(--ad-copy)!important;font-size:1.04rem;line-height:1.8}.advisory-section.is-dark h2,.advisory-section.is-dark h3{color:#fff}.advisory-section.is-dark p{color:#c8ced7!important}.advisory-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1px;margin-top:2.5rem;background:var(--ad-line)}.advisory-cards article{padding:clamp(1.5rem,3vw,2.5rem);background:#fff}.advisory-cards h3{margin:0 0 .85rem;color:var(--ad-ink);font:750 clamp(1.15rem,2vw,1.55rem)/1.2 theme('fontFamily.sans')}.advisory-cards p{margin:0;font-size:.96rem;line-height:1.7}.advisory-section.is-dark .advisory-cards{background:rgba(255,255,255,.12)}.advisory-section.is-dark .advisory-cards article{background:#1d2531}.advisory-inline-links{display:flex;flex-wrap:wrap;gap:1.5rem;margin-top:2rem}.advisory-inline-links a{color:#172131;font-weight:800;text-decoration:none}.advisory-steps,.advisory-progression{display:flex;flex-wrap:wrap;align-items:center;gap:1rem;margin:2rem 0 2.5rem}.advisory-steps span,.advisory-progression span{padding:1rem 1.2rem;border:1px solid var(--ad-line);font-weight:800}.advisory-progression{flex-direction:column;align-items:stretch;max-width:760px}.advisory-progression span{text-align:center;border-color:rgba(255,255,255,.16);color:#fff}.advisory-progression b{text-align:center;color:#aeb6c2}.advisory-lifecycle{display:grid;grid-template-columns:repeat(7,1fr);gap:.5rem}.advisory-lifecycle span{min-height:130px;display:flex;flex-direction:column;justify-content:space-between;padding:1rem;border-top:2px solid var(--ad-warm);background:#f4f5f6;color:#8b5e27;font-size:.72rem;font-weight:850}.advisory-lifecycle strong{color:#1b2330;font-size:.92rem}.advisory-questions{display:grid;grid-template-columns:repeat(2,1fr);gap:0 2rem;border-top:1px solid var(--ad-line)}.advisory-questions p{margin:0;padding:1rem 0;border-bottom:1px solid var(--ad-line);font-weight:750}.advisory-note{max-width:none!important;margin-top:2rem;padding:1.2rem 1.4rem;border-left:3px solid var(--ad-warm);background:rgba(154,104,42,.08)}.advisory-closing{min-height:420px;display:grid;place-items:center;align-content:center;padding:4rem 1.25rem;text-align:center;background:#f1f2f4}.advisory-closing h2{max-width:980px}.advisory-form-section{padding:0 clamp(1.25rem,7vw,7rem) clamp(5rem,8vw,8rem)}.advisory-form{width:min(1080px,100%);margin:0 auto;padding:clamp(1.3rem,3vw,2.5rem);border:1px solid var(--ad-line);background:#fafafa}.advisory-form-grid{display:grid;grid-template-columns:1fr 1fr;gap:1rem}.advisory-field{display:grid;gap:.45rem;color:#374151;font-size:.78rem;font-weight:800}.advisory-field span{letter-spacing:.04em}.advisory-field input,.advisory-field select,.advisory-field textarea{width:100%;min-height:50px;padding:.75rem;border:1px solid rgba(17,24,39,.18);border-radius:5px;background:#fff;color:#111827;font:inherit;font-size:.95rem;box-sizing:border-box}.advisory-field textarea{resize:vertical}.advisory-field-wide{margin-top:1rem}.advisory-form-footer{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-top:1.25rem}.advisory-form-footer p{margin:0;color:#687181;font-size:.78rem}.advisory-form-footer button{min-height:52px;padding:0 1.2rem;border:0;border-radius:5px;background:#172131;color:#fff;font-weight:800}.advisory-form-footer button:disabled{opacity:.45}
@media(max-width:1080px){.cidg-platinum-footer-grid{grid-template-columns:repeat(2,1fr)}.cidg-platinum-footer-brand{grid-column:1/-1}}@media(max-width:720px){.cidg-interior-frame{width:min(100% - 1.5rem,1180px);padding-top:1.5rem}.advisory-nav{top:96px}.advisory-hero{padding-top:3.5rem}.advisory-actions{display:grid}.advisory-primary,.advisory-secondary{width:100%;box-sizing:border-box}.advisory-cards,.advisory-form-grid,.advisory-questions{grid-template-columns:1fr}.advisory-lifecycle{grid-template-columns:1fr 1fr}.advisory-form-footer{align-items:stretch;flex-direction:column}.advisory-form-footer button{width:100%}}@media(max-width:460px){.cidg-platinum-footer-grid{grid-template-columns:1fr}.cidg-platinum-footer-brand{grid-column:auto}.advisory-hero h1{font-size:clamp(2.7rem,14vw,4rem)}}
/* <<< coreidentity:advisory-subsite-v1 <<< */
'''
styles = (ROOT / "src/styles.css").read_text()
if css_marker not in styles:
    styles = styles.rstrip() + css.rstrip() + "\n"
else:
    styles = styles.rstrip() + "\n"
(ROOT / "src/styles.css").write_text(styles)

print("Advisory sub-site transform complete.")
