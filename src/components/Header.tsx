import React, { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";

type NavItem = { to: string; label: string; section?: "platform" };

export function Header() {
  const [open, setOpen] = useState(false);

  const navItems: NavItem[] = useMemo(
    () => [
      { to: "/", label: "Home" },
      { to: "/about", label: "About Us" },
      { to: "/leadership", label: "Leadership" },
      { to: "/ciag", label: "CoreIdentity Advisory Group" },
      { to: "/coreidentity-technologies", label: "CoreIdentity Technologies" },
      { to: "/portfolio", label: "Portfolio" },
      // Platform — workflow order
      { to: "/sal", label: "SAL Enforcement Kernel", section: "platform" },
      { to: "/sentinel", label: "Sentinel", section: "platform" },
      { to: "/nexus", label: "Nexus", section: "platform" },
      { to: "/agentidentity-systems", label: "Agent Identity Systems", section: "platform" },
      { to: "/ago", label: "AGO", section: "platform" },
      { to: "/smartnation-ai", label: "SmartNation AI", section: "platform" },
      { to: "/mcp", label: "MCP Protocol", section: "platform" },
      { to: "/quantum-hardening", label: "Quantum Hardening", section: "platform" },
      { to: "/fgre", label: "Formal Governance Verification", section: "platform" },
      // Company
      { to: "/blog", label: "Blog" },
      { to: "/faq", label: "FAQ" },
      { to: "/contact", label: "Contact" },
    ],
    [],
  );

  const desktopItems = navItems.filter(i => !i.section);
  const platformItems = navItems.filter(i => i.section === "platform");

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="mx-auto container-max px-4">
        <div className="h-16 py-3 flex items-center justify-between gap-4">
          <Link to="/" className="min-w-0 no-underline text-inherit">
            <div>
              <div className="text-sm font-semibold tracking-[0.22em] uppercase leading-tight">
                COREIDENTITY DEVELOPMENT GROUP
              </div>
              <div className="text-xs text-white/60 leading-tight">The Control Layer for Governed AI</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 text-sm text-white/70">
            {desktopItems.map((item) => (
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
          {navItems.filter(i => !i.section).slice(0, 6).map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-white/80 hover:text-white transition"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="text-white/30 text-xs tracking-widest uppercase pt-1 pb-0.5">Platform</div>
          {platformItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-white/70 hover:text-white transition pl-2"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <div className="border-t border-white/10 pt-1" />
          {navItems.filter(i => !i.section).slice(6).map((item) => (
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
