import React from "react";

export type BrandIconProps = {
  src: string;
  alt: string;
  size?: number;
  className?: string;
};

export function BrandIcon({ src, alt, size, className }: BrandIconProps) {
  const px = size ?? 64;
  return (
    <div
      className={[
        "flex items-center justify-center rounded-xl bg-white/5 border border-white/10",
        className ?? "",
      ].join(" ")}
      style={{ width: px, height: px }}
    >
      <img src={src} alt={alt} className="w-full h-full object-contain p-2" />
    </div>
  );
}
