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
