import { useEffect, useRef, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { NAVIGATION_GROUPS } from "../data/siteNavigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    document.documentElement.classList.toggle("cidg-menu-open", mobileOpen);
    return () => document.documentElement.classList.remove("cidg-menu-open");
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileOpen(false);
        setDesktopOpen(null);
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (headerRef.current && !headerRef.current.contains(event.target as Node)) setDesktopOpen(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopOpen(null);
  }, [pathname]);

  return (
    <header className="cidg-platinum-header" ref={headerRef}>
      <div className="cidg-platinum-masthead">
        <Link to="/" className="cidg-platinum-brand" aria-label="CoreIdentity home">
          <span className="cidg-platinum-mark"><img src="/logo-mark.png" alt="" /></span>
          <span className="cidg-platinum-wordmark">COREIDENTITY</span>
        </Link>

        <nav className="cidg-platinum-desktop-nav" aria-label="Primary navigation">
          {NAVIGATION_GROUPS.map((group) => {
            const isOpen = desktopOpen === group.label;
            const isActive = group.items.some((item) => pathname === item.to || pathname.startsWith(`${item.to}/`));
            return (
              <div className="cidg-nav-dropdown" key={group.label} onMouseEnter={() => setDesktopOpen(group.label)} onMouseLeave={() => setDesktopOpen(null)}>
                <button type="button" className={isActive ? "is-active" : ""} aria-expanded={isOpen} aria-controls={`nav-${group.label.toLowerCase()}`} onClick={() => setDesktopOpen(group.label)}>
                  {group.label}<span aria-hidden="true">⌄</span>
                </button>
                <div id={`nav-${group.label.toLowerCase()}`} className={`cidg-nav-dropdown-panel ${group.columns === 2 ? "has-two-columns" : ""}`} hidden={!isOpen}>
                  {group.items.map((item) => <Link key={item.to} to={item.to}>{item.label}</Link>)}
                </div>
              </div>
            );
          })}
          <Link to="/contact" className="cidg-platinum-contact">Contact</Link>
        </nav>

        <button type="button" className="cidg-platinum-menu-button" aria-expanded={mobileOpen} aria-controls="cidg-platinum-menu" onClick={() => setMobileOpen((value) => !value)}>
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div id="cidg-platinum-menu" className={`cidg-platinum-menu ${mobileOpen ? "is-open" : ""}`} aria-hidden={!mobileOpen}>
        <div className="cidg-platinum-menu-inner">
          {NAVIGATION_GROUPS.map((group) => (
            <section key={group.label} className="cidg-platinum-menu-group">
              <p>{group.label}</p>
              {group.items.map((item) => <Link key={item.to} to={item.to}><span>{item.label}</span><b aria-hidden="true">→</b></Link>)}
            </section>
          ))}
          <Link to="/contact" className="cidg-platinum-menu-cta">Begin an Institutional Conversation</Link>
        </div>
      </div>
    </header>
  );
}
