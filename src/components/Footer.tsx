import { Link } from "@tanstack/react-router";
import { GOVERNANCE_GROUPS } from "../data/governanceNav";

type NavLink = { to: string; label: string };

const COMPANY: NavLink[] = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/leadership", label: "Leadership" },
  { to: "/ciag", label: "CoreIdentity Advisory Group" },
  { to: "/governance-console", label: "Console" },
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

// Governance column mirrors the Header governance menu exactly — same shared
// GOVERNANCE_GROUPS source, same two-group structure, same links.
function GovernanceColumn() {
  return (
    <div className="space-y-3">
      <div className="text-xs font-medium uppercase tracking-widest text-ink-muted">Governance</div>
      <div className="space-y-4">
        {GOVERNANCE_GROUPS.map((group) => (
          <div key={group.to} className="space-y-2">
            <Link
              to={group.to}
              className="block text-xs font-semibold uppercase tracking-widest text-accent transition hover:text-accent-strong"
            >
              {group.label}
            </Link>
            <ul className="space-y-2 pl-3">
              {group.items.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-ink-secondary transition hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-line px-6 py-10 text-sm text-ink-secondary">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs space-y-2">
          <div className="flex items-center gap-2">
            <img src="/logo-mark.png" alt="CoreIdentity" className="h-6 w-6 flex-shrink-0" />
            <div className="font-medium tracking-wide text-ink">CoreIdentity Development Group</div>
          </div>
          <div className="text-xs uppercase tracking-[0.12em] text-ink-muted">
            Institutional Trust Infrastructure
          </div>
          <div className="cidg-separator mt-3" />
          <div className="pt-1 text-xs leading-relaxed text-ink-muted">
            Proof that autonomous systems acted within authority.
          </div>
        </div>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          <Column title="Company" links={COMPANY} />
          <Column title="Governance Layers" links={LAYERS} />
          <GovernanceColumn />
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
