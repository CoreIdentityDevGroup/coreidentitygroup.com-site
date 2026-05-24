import { Link } from "@tanstack/react-router";

type NavLink = { to: string; label: string };

const COMPANY: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/leadership", label: "Leadership" },
  { to: "/ciag", label: "CoreIdentity Advisory Group" },
  { to: "/blog", label: "Blog" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const LAYERS: NavLink[] = [
  { to: "/platform", label: "Platform Architecture" },
  { to: "/layer-a", label: "Execution Integrity" },
  { to: "/layer-b", label: "Verification at Scale" },
  { to: "/layer-c", label: "Sovereign Assurance" },
  { to: "/layer-d", label: "Cryptographic Hardening" },
];

const GOVERNANCE: NavLink[] = [
  { to: "/governance/healthcare", label: "Healthcare" },
  { to: "/governance/bfsi", label: "BFSI" },
  { to: "/governance/sovereign", label: "Sovereign" },
];

function Column({ title, links }: { title: string; links: NavLink[] }) {
  return (
    <div className="space-y-3">
      <div className="text-xs font-medium uppercase tracking-widest text-ink-muted">{title}</div>
      <ul className="space-y-2">
        {links.map((l) => (
          <li key={l.to}>
            <Link to={l.to} className="text-ink-secondary transition hover:text-ink">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-line px-6 py-10 text-sm text-ink-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs space-y-2">
          <div className="font-medium tracking-wide text-ink">CoreIdentity Development Group</div>
          <div className="text-xs uppercase tracking-[0.12em] text-ink-muted">
            Institutional Trust Infrastructure
          </div>
          <div className="cidg-separator mt-3" />
          <div className="pt-1 text-xs leading-relaxed text-ink-muted">
            Provable proof that autonomous systems acted within authority.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <Column title="Company" links={COMPANY} />
          <Column title="Governance Layers" links={LAYERS} />
          <Column title="Governance" links={GOVERNANCE} />
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
