import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

type NavItem = {
  label: string;
  to: string;
};

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { label: "Home", to: "/" },
      { label: "Portfolio", to: "/portfolio" },
      { label: "CoreIdentity Technologies", to: "/coreidentitytechnologies" },
      { label: "Sentinel OS", to: "/sentinel-os" },
      { label: "Nexus OS", to: "/nexus-os" },
      { label: "SmartNation AI", to: "/smartnationai" },
      { label: "CoreIdentity AI Advisory Group", to: "/coreidentityaiadvisorygroup" },
      { label: "AgentIdentity Systems", to: "/agentidentitysystems" },
      { label: "Resources", to: "/resources" },
      { label: "FAQ", to: "/faq" },
      { label: "Contact", to: "/contact" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#06080d]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-base font-semibold tracking-tight text-white"
            onClick={() => setMobileOpen(false)}
          >
            Core Holding Corporation
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-3 py-2 text-sm text-white hover:bg-white/10 transition-colors"
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="font-medium">Menu</span>
          <span aria-hidden="true" className="text-white/70">
            {mobileOpen ? "✕" : "☰"}
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/10">
          <nav id="mobile-nav" className="mx-auto max-w-6xl px-4 py-3">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="rounded-md px-3 py-2 text-sm text-white/85 hover:text-white hover:bg-white/5 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
