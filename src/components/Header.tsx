import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";

type NavItem = {
  to: string;
  label: string;
};

const PRIMARY_NAV: NavItem[] = [
  { to: "/trust-infrastructure", label: "Trust Infrastructure" },
  { to: "/intelligence", label: "Intelligence" },
  { to: "/assurance", label: "Assurance" },
  { to: "/trust", label: "Trust" },
  { to: "/resources", label: "Research" },
  { to: "/leadership", label: "Leadership" },
  { to: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : previousOverflow;

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    if (open) window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <header className="cidg-brand-header">
        <div className="cidg-brand-shell">
          <Link to="/" className="cidg-brand-lockup" onClick={() => setOpen(false)}>
            <span className="cidg-brand-mark-wrap" aria-hidden="true">
              <img src="/logo-mark.png" alt="" className="cidg-brand-mark" />
            </span>

            <span className="cidg-brand-wordmark" aria-label="CoreIdentity">
              COREIDENTITY
            </span>
          </Link>

          <nav className="cidg-brand-nav" aria-label="Primary navigation">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={isActive(item.to) ? "is-active" : undefined}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact" className="cidg-brand-contact">Contact</Link>
          </nav>

          <button
            type="button"
            className="cidg-brand-menu-button"
            aria-expanded={open}
            aria-controls="cidg-mobile-navigation"
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </header>

      <div
        id="cidg-mobile-navigation"
        className={open ? "cidg-mobile-sheet is-open" : "cidg-mobile-sheet"}
        aria-hidden={!open}
      >
        <div className="cidg-mobile-sheet-inner">
          <nav aria-label="Mobile navigation">
            {PRIMARY_NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={isActive(item.to) ? "is-active" : undefined}
                tabIndex={open ? 0 : -1}
              >
                <span>{item.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            ))}
          </nav>

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="cidg-mobile-sheet-contact"
            tabIndex={open ? 0 : -1}
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
}
