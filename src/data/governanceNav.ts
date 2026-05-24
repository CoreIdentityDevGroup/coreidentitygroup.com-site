// Shared governance navigation — single source of truth so the Header
// (desktop dropdown + mobile menu) and the Footer render an identical
// structure and identical links. Edit verticals here only.
export type GovLink = { to: string; label: string };
export type GovGroup = { label: string; to: string; items: GovLink[] };

export const GOVERNANCE_GROUPS: GovGroup[] = [
  {
    label: "Regulated Industries",
    to: "/governance/regulated",
    items: [
      { to: "/governance/bfsi", label: "BFSI" },
      { to: "/governance/education", label: "EducationOps" },
      { to: "/governance/finance", label: "FinanceOps" },
      { to: "/governance/healthcare", label: "HealthcareOps" },
      { to: "/governance/hospitality", label: "HospitalityOps" },
      { to: "/governance/legal", label: "LegalOps" },
      { to: "/governance/logistics", label: "LogisticsOps" },
      { to: "/governance/manufacturing", label: "ManufacturingOps" },
      { to: "/governance/private-capital", label: "PrivateCapitalOps" },
      { to: "/governance/real-estate", label: "RealEstateOps" },
      { to: "/governance/retail", label: "RetailOps" },
    ],
  },
  {
    label: "Sovereign & Government",
    to: "/governance/sovereign",
    items: [
      { to: "/governance/sovereign", label: "SovereignOps" },
    ],
  },
];
