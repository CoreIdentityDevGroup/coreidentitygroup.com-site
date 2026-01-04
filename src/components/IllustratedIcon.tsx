import * as React from "react";

type IllustratedIconProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export function IllustratedIcon({
  src,
  alt,
  size = 56,
  className = "",
}: IllustratedIconProps) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      loading="lazy"
      decoding="async"
      className={`shrink-0 rounded-2xl ${className}`}
    />
  );
}
