import { useState } from "react";
import { Link } from "@tanstack/react-router";

type NavLink = { to: string; label: string };

const PLATFORM_MENU: NavLink[] = [
  { to: "/platform", label: "Platform Architecture" },
  { to: "/layer-a", label: "Execution Integrity" },
  { to: "/layer-b", label: "Verification at Scale" },
  { to: "/layer-c", label: "Sovereign Assurance" },
  { to: "/layer-d", label: "Cryptographic Hardening" },
];

const GOVERNANCE_MENU: NavLink[] = [
  { to: "/governance/healthcare", label: "Healthcare" },
  { to: "/governance/bfsi", label: "BFSI" },
  { to: "/governance/sovereign", label: "Sovereign" },
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

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-carbon backdrop-blur">
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
            <DesktopMenu label="Governance" items={GOVERNANCE_MENU} />
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
          {GOVERNANCE_MENU.map((item) => (
            <Link key={item.to} to={item.to} onClick={close} className="rounded-lg px-3 py-2 text-ink-secondary transition hover:bg-accent/10 hover:text-accent">
              {item.label}
            </Link>
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
