export type NavigationItem = {
  to: string;
  label: string;
};

export type NavigationGroup = {
  label: string;
  items: readonly NavigationItem[];
};

export const NAVIGATION_GROUPS: readonly NavigationGroup[] = [
  {
    label: "Governance Framework",
    items: [
      { to: "/trust-infrastructure", label: "Trust Infrastructure" },
      { to: "/intelligence", label: "Intelligence" },
      { to: "/assurance", label: "Assurance" },
      { to: "/trust", label: "Trust" },
      { to: "/governance-ecosystem", label: "Governance Ecosystem" },
    ],
  },
  {
    label: "Governance",
    items: [
      { to: "/platform", label: "Governance Architecture" },
      { to: "/execution-integrity", label: "Execution Integrity" },
      { to: "/verification-at-scale", label: "Verification at Scale" },
      { to: "/sovereign-assurance", label: "Sovereign Assurance" },
    ],
  },
  {
    label: "Company",
    items: [
      { to: "/about", label: "About" },
      { to: "/leadership", label: "Leadership" },
      { to: "/markets-we-serve", label: "Markets We Serve" },
      { to: "/ciag", label: "Advisory" },
      { to: "/governance-console", label: "Governance Console" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    label: "Thought Leadership",
    items: [
      { to: "/resources", label: "Resources" },
      { to: "/blog", label: "Insights" },
      { to: "/faq", label: "FAQ" },
    ],
  },
] as const;

export const PRIMARY_NAVIGATION: readonly NavigationItem[] = [
  ...NAVIGATION_GROUPS[0].items,
  { to: "/resources", label: "Resources" },
  { to: "/about", label: "About" },
  { to: "/governance-console", label: "Governance Console" },
] as const;

