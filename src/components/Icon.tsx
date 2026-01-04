import sentinel from "../icons/sentinel.svg";
import nexus from "../icons/nexus.svg";
import smartnation from "../icons/smartnation.svg";

export type IconName = "sentinel" | "nexus" | "smartnation";

const ICON_MAP: Record<IconName, string> = {
  sentinel,
  nexus,
  smartnation,
};

interface IconProps {
  name: IconName;
  size?: number;
}

export default function Icon({ name, size = 32 }: IconProps) {
  return (
    <img
      src={ICON_MAP[name]}
      alt={name}
      width={size}
      height={size}
      style={{ display: "block" }}
    />
  );
}
