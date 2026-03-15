import React, { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

type NavItem = { to: string; label: string };

export function Header() {
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/portfolio", label: "Portfolio" },
      { to: "/coreidentity-technologies", label: "CoreIdentity Technologies" },
      { to: "/sal", label: "SAL Enforcement Kernel" },
      { to: "/sentinel-os", label: "Sentinel OS" },
      { to: "/nexus-os", label: "Nexus OS" },
      { to: "/smartnation-ai", label: "SmartNation AI" },
  { to: "/ago-1", label: "AGO‑1" },
      // CHC-MCP-NAV-v1
      { to: "/mcp", label: "MCP Protocol" },
  { to: "/coreidentity-ai-advisory-group", label: "CoreIdentity AI Advisory Group" },
      { to: "/agentidentity-systems", label: "AgentIdentity Systems" },
      { to: "/resources", label: "Resources" },
      { to: "/faq", label: "FAQ" },
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
    ],
    [],
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto container-max px-4">
        <div className="h-16 py-3 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <div className="text-sm font-semibold tracking-[0.22em] uppercase leading-tight">
              COREIDENTITY DEVELOPMENT GROUP
            </div>
            <div className="text-xs text-white/60 leading-tight">The Control Layer for Governed AI</div>
          </div>

          <nav className="hidden lg:flex items-center gap-5 text-sm text-white/70">
            {navItems.map((item) => (
              <Link key={item.to} to={item.to} className="hover:text-white transition">
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="ml-2 inline-flex items-center rounded-full px-4 py-2 bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition text-white"
            >
              Request a Briefing
            </Link>
          </nav>

          <button
            className="lg:hidden inline-flex items-center rounded-full px-4 py-2 bg-white/5 border border-white/10 hover:bg-white/10 transition"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            Menu
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={["lg:hidden border-t border-white/10", open ? "block" : "hidden"].join(" ")}>
        <div className="mx-auto container-max px-4 py-4 grid gap-3 text-sm">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-white/80 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-2 inline-flex items-center justify-center rounded-full px-4 py-2 bg-white/5 border border-white/10 hover:border-white/25 hover:bg-white/10 transition text-white"
            onClick={() => setOpen(false)}
          >
            Request a Briefing
          </Link>
        </div>
      </div>
    </header>
  );
}