import { Link } from "@tanstack/react-router";
import { FOOTER_NAVIGATION_GROUPS } from "../data/siteNavigation";

export default function Footer() {
  return (
    <footer className="cidg-platinum-footer">
      <div className="cidg-platinum-footer-grid">
        <div className="cidg-platinum-footer-brand">
          <Link to="/" className="cidg-platinum-footer-lockup">
            <span className="cidg-platinum-footer-mark">
              <img src="/images/brand/coreidentity-logo-optimized.webp" width="1254" height="1254" loading="lazy" alt="" />
            </span>
            <span><strong>COREIDENTITY</strong></span>
          </Link>

          <p>
            Establishing the Trust Infrastructure that enables institutions to
            safely delegate autonomous execution while ensuring they remain in control.
          </p>
        </div>

        {FOOTER_NAVIGATION_GROUPS.map((group) => (
          <nav key={group.label} aria-label={`${group.label} navigation`}>
            <h2>{group.label}</h2>
            {group.items.map((item) => (
              <Link key={item.to} to={item.to}>{item.label}</Link>
            ))}
          </nav>
        ))}
      </div>

      <div className="cidg-platinum-footer-legal">
        <span>© {new Date().getFullYear()} CoreIdentity Development Group</span>
        <span>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </span>
      </div>
    </footer>
  );
}
