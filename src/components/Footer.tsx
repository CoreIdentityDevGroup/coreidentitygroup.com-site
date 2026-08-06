import { Link } from "@tanstack/react-router";

type NavLink = { to: string; label: string };

const COMPANY: NavLink[] = [
  { to: "/about", label: "About" },
  { to: "/leadership", label: "Leadership" },
  { to: "/ciag", label: "Advisory" },
  { to: "/contact", label: "Contact" },
];

const DISCIPLINE: NavLink[] = [
  { to: "/trust-infrastructure", label: "Trust Infrastructure" },
  { to: "/intelligence", label: "Intelligence" },
  { to: "/assurance", label: "Assurance" },
  { to: "/trust", label: "Trust" },
  { to: "/platform", label: "Technical Architecture" },
];

const KNOWLEDGE: NavLink[] = [
  { to: "/resources", label: "Research" },
  { to: "/blog", label: "Insights" },
  { to: "/faq", label: "FAQ" },
];

function Column({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="space-y-3">
      <div className="text-xs font-medium uppercase tracking-widest text-ink-muted">{title}</div>
      <ul className="space-y-2">
        {links.map((link) => (
          <li key={link.to}>
            <Link to={link.to} className="text-ink-secondary transition hover:text-platinum">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-line px-6 py-12 text-sm text-ink-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="max-w-sm space-y-3">
          <div className="flex items-center gap-3">
            <img src="/logo-mark.png" alt="CoreIdentity" className="h-9 w-9 flex-shrink-0" />
            <div className="font-medium tracking-wide text-ink">CoreIdentity Development Group</div>
          </div>
          <div className="text-xs uppercase tracking-[0.16em] text-platinum">
            Trust Infrastructure · Intelligence · Assurance · Trust
          </div>
          <div className="cidg-separator mt-4" />
          <p className="pt-2 text-xs leading-relaxed text-ink-muted">
            Establishing the institutional foundation that enables organizations to deploy Intelligence with continuous Assurance—creating Trust while ensuring they remain in control.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <Column title="Company" links={COMPANY} />
          <Column title="Discipline" links={DISCIPLINE} />
          <Column title="Knowledge" links={KNOWLEDGE} />
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
        <div className="text-xs text-ink-muted">
          © {new Date().getFullYear()} CoreIdentity Development Group. All rights reserved.
        </div>
        <div className="flex gap-6">
          <Link to="/privacy" className="text-xs text-ink-muted transition hover:text-ink-secondary">
            Privacy Policy
          </Link>
          <Link to="/terms" className="text-xs text-ink-muted transition hover:text-ink-secondary">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
