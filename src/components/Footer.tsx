import { Link } from "@tanstack/react-router";

const FOOTER_GROUPS = [
  {
    title: "Framework",
    links: [
      ["/trust-infrastructure", "Trust Infrastructure"],
      ["/intelligence", "Intelligence"],
      ["/assurance", "Assurance"],
      ["/trust", "Trust"],
    ],
  },
  {
    title: "Company",
    links: [
      ["/about", "About"],
      ["/leadership", "Leadership"],
      ["/ciag", "Advisory"],
      ["/contact", "Contact"],
    ],
  },
  {
    title: "Knowledge",
    links: [
      ["/resources", "Research"],
      ["/blog", "Insights"],
      ["/faq", "FAQ"],
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="cidg-brand-footer">
      <div className="cidg-brand-footer-main">
        <div className="cidg-brand-footer-identity">
          <div className="cidg-brand-footer-lockup">
            <span className="cidg-brand-footer-mark-wrap" aria-hidden="true">
              <img src="/logo-mark.png" alt="" />
            </span>
            <span>
              <strong>COREIDENTITY</strong>
              <small>Development Group</small>
            </span>
          </div>

          <p>
            Establishing the Trust Infrastructure that enables institutions to deploy Intelligence with continuous Assurance—creating Trust while ensuring they remain in control.
          </p>
        </div>

        <div className="cidg-brand-footer-groups">
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              {group.links.map(([to, label]) => (
                <Link key={to} to={to}>
                  {label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="cidg-brand-footer-bottom">
        <span>© {new Date().getFullYear()} CoreIdentity Development Group</span>
        <div>
          <Link to="/privacy">Privacy</Link>
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
}
