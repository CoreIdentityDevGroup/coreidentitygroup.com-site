import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { GOVERNANCE_GROUPS } from "../data/governanceNav";

type NavLink = { to: string; label: string };

const ARCHITECTURE_MENU: NavLink[] = [
  { to: "/trust-infrastructure", label: "Trust Infrastructure" },
  { to: "/intelligence", label: "Intelligence" },
  { to: "/assurance", label: "Assurance" },
  { to: "/trust", label: "Trust" },
  { to: "/platform", label: "Technical Architecture" },
];

function Chevron() {
  return (
    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="opacity-60">
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DesktopMenu({ label, items }: { label: string; items: NavLink[] }) {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 py-2 text-[#5f6674] transition hover:text-[#1f2430]">
        {label}
        <Chevron />
      </button>
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="min-w-[252px] rounded-xl border border-[#d8d1c6] bg-white/95 p-2 shadow-[0_20px_55px_rgba(31,36,48,0.14)] backdrop-blur">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="block rounded-lg px-3 py-2 text-sm text-[#5f6674] transition hover:bg-[#f1ede5] hover:text-[#8b6f47]"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function IndustriesMenu() {
  return (
    <div className="group relative">
      <button className="inline-flex items-center gap-1 py-2 text-[#5f6674] transition hover:text-[#1f2430]">
        Industries
        <Chevron />
      </button>
      <div className="invisible absolute left-0 top-full z-50 pt-2 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
        <div className="min-w-[284px] rounded-xl border border-[#d8d1c6] bg-white/95 p-2 shadow-[0_20px_55px_rgba(31,36,48,0.14)] backdrop-blur">
          {GOVERNANCE_GROUPS.map((group) => (
            <div key={group.to} className="py-1">
              <Link
                to={group.to}
                className="block rounded-lg px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#8b6f47] transition hover:bg-[#f1ede5]"
              >
                {group.label}
              </Link>
              {group.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block rounded-lg px-3 py-1.5 pl-5 text-sm text-[#5f6674] transition hover:bg-[#f1ede5] hover:text-[#8b6f47]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[#ddd6cb] bg-[#f8f6f1]/95 backdrop-blur">
      <div className="mx-auto container-max px-4">
        <div className="flex h-24 items-center justify-between gap-4 py-3">
          <Link to="/" className="flex min-w-0 items-center gap-4 no-underline">
            <div className="cidg-v602b-mark-shell flex h-[68px] w-[68px] flex-shrink-0 items-center justify-center rounded-full">
              <img src="/logo-mark.png" alt="CoreIdentity CI Sphere" className="h-[58px] w-[58px] object-contain" />
            </div>
            <div>
              <div className="text-lg font-semibold uppercase leading-tight tracking-[0.18em] text-[#1f2430]">
                COREIDENTITY DEVELOPMENT GROUP
              </div>
              <div className="text-sm leading-tight text-[#6c7380]">
                Trust Infrastructure · Intelligence · Assurance · Trust
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm lg:flex">
            <DesktopMenu label="Trust Infrastructure" items={ARCHITECTURE_MENU} />
            <IndustriesMenu />
            <Link to="/resources" className="py-2 text-[#5f6674] transition hover:text-[#1f2430]">
              Research
            </Link>
            <Link to="/ciag" className="py-2 text-[#5f6674] transition hover:text-[#1f2430]">
              Advisory
            </Link>
            <Link to="/about" className="py-2 text-[#5f6674] transition hover:text-[#1f2430]">
              About
            </Link>
            <Link
              to="/contact"
              className="ml-1 inline-flex items-center rounded-full bg-[#1f2430] px-4 py-2 font-medium text-white transition hover:bg-[#303744]"
            >
              Contact
            </Link>
          </nav>

          <button
            className="inline-flex items-center rounded-full border border-[#d4cdc1] bg-white px-4 py-2 text-sm text-[#1f2430] transition hover:border-[#8b6f47] lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={["border-t border-[#ddd6cb] bg-[#f8f6f1] lg:hidden", open ? "block" : "hidden"].join(" ")}>
        <div className="mx-auto container-max grid gap-1 px-4 py-4 text-sm">
          <div className="px-1 pb-1 pt-1 text-xs uppercase tracking-widest text-[#7a818f]">CoreIdentity</div>
          {[
            ["/", "Home"],
            ["/about", "About"],
            ["/leadership", "Leadership"],
            ["/resources", "Research"],
            ["/ciag", "Advisory"],
          ].map(([to, label]) => (
            <Link key={to} to={to} onClick={close} className="rounded-lg px-3 py-2 text-[#5f6674] hover:bg-white hover:text-[#8b6f47]">
              {label}
            </Link>
          ))}

          <div className="mt-2 border-t border-[#ddd6cb] px-1 pb-1 pt-3 text-xs uppercase tracking-widest text-[#7a818f]">
            Trust Infrastructure
          </div>
          {ARCHITECTURE_MENU.map((item) => (
            <Link key={item.to} to={item.to} onClick={close} className="rounded-lg px-3 py-2 text-[#5f6674] hover:bg-white hover:text-[#8b6f47]">
              {item.label}
            </Link>
          ))}

          <div className="mt-2 border-t border-[#ddd6cb] px-1 pb-1 pt-3 text-xs uppercase tracking-widest text-[#7a818f]">
            Industries
          </div>
          {GOVERNANCE_GROUPS.map((group) => (
            <div key={group.to} className="grid gap-1">
              <Link
                to={group.to}
                onClick={close}
                className="rounded-lg px-3 py-2 text-xs font-semibold uppercase tracking-widest text-[#8b6f47] hover:bg-white"
              >
                {group.label}
              </Link>
              {group.items.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={close}
                  className="rounded-lg px-3 py-1.5 pl-5 text-[#5f6674] hover:bg-white hover:text-[#8b6f47]"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          ))}

          <div className="mt-2 border-t border-[#ddd6cb] pt-2" />
          <Link
            to="/contact"
            onClick={close}
            className="mt-2 inline-flex items-center justify-center rounded-full bg-[#1f2430] px-4 py-2 font-medium text-white"
          >
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
}
