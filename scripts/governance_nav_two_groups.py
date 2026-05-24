#!/usr/bin/env python3
"""
feat: governance nav — two groups, 12 verticals.

Replaces the flat governance dropdown with two groups sourced from a single
shared module so Header (desktop + mobile) and Footer stay in exact sync:

  Group 1: Regulated Industries  -> /governance/regulated   (11 verticals)
  Group 2: Sovereign & Government -> /governance/sovereign   (SovereignOps)

Also updates the Footer tagline:
  "Provable proof that autonomous systems acted within authority."
  -> "Proof that autonomous systems acted within authority."

Deterministic file generation (idempotent: a re-run rewrites identical bytes).
"""

GOV_NAV = '''// Shared governance navigation — single source of truth so the Header
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
'''

HEADER = '''import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { GOVERNANCE_GROUPS } from "../data/governanceNav";

type NavLink = { to: string; label: string };

const PLATFORM_MENU: NavLink[] = [
  { to: "/platform", label: "Platform Architecture" },
  { to: "/layer-a", label: "Execution Integrity" },
  { to: "/layer-b", label: "Verification at Scale" },
  { to: "/layer-c", label: "Sovereign Assurance" },
  { to: "/layer-d", label: "Cryptographic Hardening" },
];

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-60">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopMenu({ label, items }: { label: string; items: NavLink[] }) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 py-2 text-ink-secondary transition hover:text-ink">
        {label}
        <Chevron />
      </button>
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="min-w-[248px] rounded-xl border border-line bg-carbon-panel/95 p-2 shadow-2xl backdrop-blur">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-lg px-3 py-2 text-sm text-ink-secondary transition hover:bg-accent/10 hover:text-accent"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function GovernanceDesktopMenu() {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 py-2 text-ink-secondary transition hover:text-ink">
        Governance
        <Chevron />
      </button>
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="min-w-[280px] rounded-xl border border-line bg-carbon-panel/95 p-2 shadow-2xl backdrop-blur">
          {GOVERNANCE_GROUPS.map((group) => (
            <div key={group.to} className="py-1">
              <Link
                to={group.to}
                className="block rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent transition hover:bg-accent/10"
              >
                {group.label}
              </Link>
              {group.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-lg px-3 py-1.5 pl-5 text-sm text-ink-secondary transition hover:bg-accent/10 hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-line bg-carbon backdrop-blur">
      <div className="mx-auto container-max px-4">
        <div className="flex h-16 items-center justify-between gap-4 py-3">
          <Link to="/" className="min-w-0 no-underline text-inherit">
            <div className="text-sm font-semibold uppercase leading-tight tracking-[0.22em] text-ink">
              COREIDENTITY DEVELOPMENT GROUP
            </div>
            <div className="text-xs leading-tight text-ink-muted">
              Institutional Trust Infrastructure for Autonomous Systems
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm lg:flex">
            <DesktopMenu label="Platform" items={PLATFORM_MENU} />
            <GovernanceDesktopMenu />
            <Link to="/ciag" className="py-2 text-ink-secondary transition hover:text-ink">
              Advisory
            </Link>
            <Link to="/about" className="py-2 text-ink-secondary transition hover:text-ink">
              About
            </Link>
            <Link
              to="/contact"
              className="ml-1 inline-flex items-center rounded-full bg-accent px-4 py-2 font-medium text-carbon transition hover:bg-accent-strong"
            >
              Contact
            </Link>
          </nav>

          <button
            className="inline-flex items-center rounded-full border border-line bg-carbon-panel px-4 py-2 text-sm text-ink transition hover:border-accent/40 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={["border-t border-line bg-carbon lg:hidden", open ? "block" : "hidden"].join(" ")}>
        <div className="mx-auto container-max grid gap-1 px-4 py-4 text-sm">
          <div className="px-1 pb-1 pt-1 text-xs uppercase tracking-widest text-ink-muted">Platform</div>
          {PLATFORM_MENU.map((item) => (
            <Link key={item.to} to={item.to} onClick={close} className="rounded-lg px-3 py-2 text-ink-secondary transition hover:bg-accent/10 hover:text-accent">
              {item.label}
            </Link>
          ))}
          <div className="mt-2 border-t border-line px-1 pb-1 pt-3 text-xs uppercase tracking-widest text-ink-muted">Governance</div>
          {GOVERNANCE_GROUPS.map((group) => (
            <div key={group.to} className="grid gap-1">
              <Link
                to={group.to}
                onClick={close}
                className="rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest text-accent transition hover:bg-accent/10"
              >
                {group.label}
              </Link>
              {group.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={close}
                  className="rounded-lg px-3 py-1.5 pl-5 text-ink-secondary transition hover:bg-accent/10 hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="mt-2 border-t border-line pt-2" />
          <Link to="/ciag" onClick={close} className="rounded-lg px-3 py-2 text-ink-secondary transition hover:bg-accent/10 hover:text-accent">
            Advisory
          </Link>
          <Link to="/about" onClick={close} className="rounded-lg px-3 py-2 text-ink-secondary transition hover:bg-accent/10 hover:text-accent">
            About
          </Link>
          <Link
            to="/contact"
            onClick={close}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-accent px-4 py-2 font-medium text-carbon transition hover:bg-accent-strong"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
'''

FOOTER = '''import { Link } from "@tanstack/react-router";
import { GOVERNANCE_GROUPS } from "../data/governanceNav";

type NavLink = { to: string; label: string };

const COMPANY: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/leadership", label: "Leadership" },
  { to: "/ciag", label: "CoreIdentity Advisory Group" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const LAYERS: NavLink[] = [
  { to: "/platform", label: "Platform Architecture" },
  { to: "/layer-a", label: "Execution Integrity" },
  { to: "/layer-b", label: "Verification at Scale" },
  { to: "/layer-c", label: "Sovereign Assurance" },
  { to: "/layer-d", label: "Cryptographic Hardening" },
];

function Column({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="space-y-3">
      <div className="text-xs font-medium uppercase tracking-widest text-ink-muted">{title}</div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-ink-secondary transition hover:text-ink">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Governance column mirrors the Header governance menu exactly — same shared
// GOVERNANCE_GROUPS source, same two-group structure, same links.
function GovernanceColumn() {
  return (
    <div className="space-y-3">
      <div className="text-xs font-medium uppercase tracking-widest text-ink-muted">Governance</div>
      <div className="space-y-4">
        {GOVERNANCE_GROUPS.map((group) => (
          <div key={group.to} className="space-y-2">
            <Link
              to={group.to}
              className="block text-xs font-semibold uppercase tracking-widest text-accent transition hover:text-accent-strong"
            >
              {group.label}
            </Link>
            <ul className="space-y-2 pl-3">
              {group.items.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ink-secondary transition hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-line px-6 py-10 text-sm text-ink-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs space-y-2">
          <div className="font-medium tracking-wide text-ink">CoreIdentity Development Group</div>
          <div className="text-xs uppercase tracking-[0.12em] text-ink-muted">
            Institutional Trust Infrastructure
          </div>
          <div className="cidg-separator mt-3" />
          <div className="pt-1 text-xs leading-relaxed text-ink-muted">
            Proof that autonomous systems acted within authority.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <Column title="Company" links={COMPANY} />
          <Column title="Governance Layers" links={LAYERS} />
          <GovernanceColumn />
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <div className="text-xs text-ink-muted">
          © {new Date().getFullYear()} CoreIdentity Development Group. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-xs text-ink-muted transition hover:text-ink-secondary">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-xs text-ink-muted transition hover:text-ink-secondary">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
'''

FILES = [
    ("src/data/governanceNav.ts", GOV_NAV),
    ("src/components/Header.tsx", HEADER),
    ("src/components/Footer.tsx", FOOTER),
]


def main():
    for path, content in FILES:
        with open(path, "w", encoding="utf-8") as f:
            f.write(content)
        print(f"[OK] {path} — written ({len(content)} bytes).")


if __name__ == "__main__":
    main()
