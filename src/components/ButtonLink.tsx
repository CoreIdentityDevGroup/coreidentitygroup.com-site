import { Link } from "@tanstack/react-router";
import React from "react";

type ButtonLinkProps = {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
};

export function ButtonLink({
  to,
  children,
  variant = "primary",
}: ButtonLinkProps) {
  const base =
    "inline-flex items-center px-5 py-3 rounded-md font-medium transition";

  const styles =
    variant === "primary"
      ? "bg-blue-600 text-white hover:bg-blue-700"
      : "border border-blue-500 text-blue-400 hover:bg-blue-900/30";

  return (
    <Link to={to} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
