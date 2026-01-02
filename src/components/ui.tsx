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

export function ButtonLink({
  to,
  children,
  variant = "primary",
  className,
}: {
  to: string;
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
    <a href={to} className={[base, v, className ?? ""].join(" ")}>
      {children}
    </a>
  );
}
