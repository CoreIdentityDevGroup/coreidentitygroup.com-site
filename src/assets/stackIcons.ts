// src/assets/stackIcons.ts

import sentinel from "./icons/sentinel.svg";
import nexus from "./icons/nexus.svg";
import smartnation from "./icons/smartnation.svg";

export const stackIcons = {
  sentinel,
  nexus,
  smartnation,
} as const;

export type StackIconKey = keyof typeof stackIcons;
