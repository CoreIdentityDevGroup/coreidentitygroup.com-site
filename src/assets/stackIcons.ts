// src/assets/stackIcons.ts

import sentinel from "./icons/sentinel.svg";
import nexus from "./icons/nexus.svg";

// SmartNation is illustration artwork (raster) for fidelity.
// Do NOT embed base64 webp inside svg; it degrades on mobile.
import smartnation from "./icons/smartnation.png";

export const stackIcons = {
  sentinel,
  nexus,
  smartnation,
} as const;

export type StackIconKey = keyof typeof stackIcons;
