import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { NAVIGATION_GROUPS, PRIMARY_NAVIGATION } from "../data/siteNavigation";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("cidg-menu-open", open);
    return () => document.documentElement.classList.remove("cidg-menu-open");
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="cidg-platinum-header">
      <div className="cidg-platinum-masthead">
        <Link to="/" onClick={close} className="cidg-platinum-brand" aria-label="CoreIdentity home">
          <span className="cidg-platinum-mark">
            <img src="/logo-mark.png" alt="" />
          </span>
          <span className="cidg-platinum-wordmark">COREIDENTITY</span>
        </Link>

        <nav className="cidg-platinum-desktop-nav" aria-label="Primary navigation">
          {PRIMARY_NAVIGATION.map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
          <Link to="/contact" className="cidg-platinum-contact">Contact</Link>
        </nav>

        <button
          type="button"
          className="cidg-platinum-menu-button"
          aria-expanded={open}
          aria-controls="cidg-platinum-menu"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="cidg-platinum-menu"
        className={`cidg-platinum-menu ${open ? "is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="cidg-platinum-menu-inner">
          {NAVIGATION_GROUPS.map((group) => (
            <section key={group.label} className="cidg-platinum-menu-group">
              <p>{group.label}</p>
              {group.items.map((item) => (
                <Link key={item.to} to={item.to} onClick={close}>
                  <span>{item.label}</span>
                  <b aria-hidden="true">→</b>
                </Link>
              ))}
            </section>
          ))}

          <Link to="/contact" onClick={close} className="cidg-platinum-menu-cta">
            Begin an Institutional Conversation
          </Link>
        </div>
      </div>
    </header>
  );
}

