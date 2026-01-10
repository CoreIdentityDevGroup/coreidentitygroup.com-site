// src/assets/stackIcons.ts

import sentinel from "../icons/sentinel.svg";
import nexus from "../icons/nexus.svg";

// SmartNation should be vector now.
// If SmartNation still looks wrong after this change, the issue is CSS rendering (object-fit/filter/mix-blend)
// in the component that renders the icon — not this import.
import smartnation from "../icons/smartnation.svg";

export const stackIcons = {
  sentinel,
  nexus,
  smartnation,
} as const;

export type StackIconKey = keyof typeof stackIcons;
