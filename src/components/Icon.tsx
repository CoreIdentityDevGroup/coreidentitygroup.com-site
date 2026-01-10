// src/components/Icon.tsx

import React from "react";
import { stackIcons, StackIconKey } from "../assets/stackIcons";

type IconProps = {
  name: StackIconKey;
  size?: number;
  className?: string;
  alt?: string;
};

export function Icon({
  name,
  size = 48,
  className = "",
  alt = "",
}: IconProps) {
  const src = stackIcons[name];

  // Raster image (PNG, WebP, etc.)
  if (typeof src === "string" && !src.endsWith(".svg")) {
    return (
      <img
        src={src}
        alt={alt || name}
        width={size}
        height={size}
        className={`object-contain ${className}`}
        draggable={false}
      />
    );
  }

  // SVG (inline-safe)
  return (
    <img
      src={src}
      alt={alt || name}
      width={size}
      height={size}
      className={className}
      draggable={false}
    />
  );
}
