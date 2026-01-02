import React from "react";

export function PageTitle({ children }: { children: React.ReactNode }) {
  return <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">{children}</h1>;
}

export function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{children}</h2>;
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={[
        "rounded-3xl bg-white/5 border border-white/10 p-6 md:p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/**
 * Standard hero block used at the top of interior pages.
 */
export function PageHero({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <section className="pt-10 md:pt-16 pb-8 md:pb-12">
      <div className="max-w-4xl">
        <PageTitle>{title}</PageTitle>
        {subtitle ? <div className="mt-5 text-lg md:text-xl text-white/70 leading-relaxed">{subtitle}</div> : null}
        {children ? <div className="mt-7">{children}</div> : null}
      </div>
    </section>
  );
}

/**
 * Consistent vertical rhythm wrapper for page sections.
 */
export function Section({
  title,
  eyebrow,
  children,
  className,
}: {
  title?: string;
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={["py-8 md:py-12", className ?? ""].join(" ")}>
      {(eyebrow || title) ? (
        <div className="mb-6">
          {eyebrow ? <div className="text-xs tracking-[0.2em] uppercase text-white/50">{eyebrow}</div> : null}
          {title ? <h2 className="mt-2 text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

export function CardTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="text-lg md:text-xl font-semibold tracking-tight">{children}</h3>;
}

export function CardText({ children }: { children: React.ReactNode }) {
  return <p className="mt-2 text-white/70 leading-relaxed">{children}</p>;
}

export function ButtonLink({
  to,
  href,
  children,
  variant = "primary",
  className,
}: {
  /** Preferred prop for consistency across the codebase. */
  to?: string;
  /** Back-compat for older page implementations. */
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition border";
  const v =
    variant === "primary"
      ? "bg-blue-600/90 border-blue-400/20 hover:bg-blue-600 text-white"
      : "bg-transparent border-white/15 hover:border-white/30 text-white/90 hover:text-white";
  return (
    <a href={href ?? to ?? "#"} className={[base, v, className ?? ""].join(" ")}>
      {children}
    </a>
  );
}
