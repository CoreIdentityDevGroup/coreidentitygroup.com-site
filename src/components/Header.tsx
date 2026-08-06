import { useState } from "react";
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
  { to: "/about", label: "About" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);

  return (
    <header className="cidg-brand-header">
      <div className="cidg-brand-shell">
        <Link to="/" className="cidg-brand-lockup" onClick={() => setOpen(false)}>
          <span className="cidg-brand-mark-wrap" aria-hidden="true">
            <img src="/logo-mark.png" alt="" className="cidg-brand-mark" />
          </span>

          <span className="cidg-brand-wordmark">
            <strong>COREIDENTITY</strong>
            <small>Development Group</small>
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

          <Link to="/contact" className="cidg-brand-contact">
            Contact
          </Link>
        </nav>

        <button
          type="button"
          className="cidg-brand-menu-button"
          aria-expanded={open}
          aria-controls="cidg-mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span>{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      <div
        id="cidg-mobile-navigation"
        className={open ? "cidg-brand-mobile is-open" : "cidg-brand-mobile"}
      >
        <div>
          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={isActive(item.to) ? "is-active" : undefined}
            >
              {item.label}
            </Link>
          ))}

          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="cidg-brand-mobile-contact"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
