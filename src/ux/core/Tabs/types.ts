import type { ERoute } from "../../../data/routes";
import type { EIconName } from "../Icon/types";

export type Tab<T = string> = {
  text: string;
  value: T;
  icon?: EIconName;
  route?: ERoute;
};
