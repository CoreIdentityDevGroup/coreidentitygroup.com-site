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
    label: "Framework",
    items: [
      { to: "/trust-infrastructure", label: "Trust Infrastructure" },
      { to: "/intelligence", label: "Intelligence" },
      { to: "/assurance", label: "Assurance" },
      { to: "/trust", label: "Trust" },
    ],
  },
  {
    label: "Company",
    items: [
      { to: "/about", label: "About" },
      { to: "/leadership", label: "Leadership" },
      { to: "/ciag", label: "Advisory" },
      { to: "/contact", label: "Contact" },
    ],
  },
  {
    label: "Knowledge",
    items: [
      { to: "/resources", label: "Research" },
      { to: "/blog", label: "Insights" },
      { to: "/faq", label: "FAQ" },
    ],
  },
] as const;

export const PRIMARY_NAVIGATION: readonly NavigationItem[] = [
  ...NAVIGATION_GROUPS[0].items,
  { to: "/resources", label: "Research" },
  { to: "/about", label: "About" },
] as const;

