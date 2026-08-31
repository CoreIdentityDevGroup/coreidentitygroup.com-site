import { FormEvent, ReactNode, useEffect, useMemo, useRef, useState } from "react";
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
  const advisoryNavRef = useRef<HTMLElement>(null);
  const activeLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const nav = advisoryNavRef.current;
    const active = activeLinkRef.current;
    if (!nav || !active) return;
    nav.scrollLeft = Math.max(0, active.offsetLeft - (nav.clientWidth - active.clientWidth) / 2);
  }, [pathname]);

  return <div className="advisory-site">
    <div className="advisory-lockup"><Link to="/advisory"><strong>COREIDENTITY</strong><span>ADVISORY GROUP</span></Link></div>
    <nav ref={advisoryNavRef} className="advisory-nav" aria-label="Advisory navigation">
      {advisoryNav.map(([to, label]) => <Link key={to} ref={pathname === to ? activeLinkRef : undefined} to={to} className={pathname === to ? "is-active" : ""}>{label}</Link>)}
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
