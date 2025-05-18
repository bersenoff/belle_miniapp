import type { EIconName } from "../Icon/types";

export type ButtonProps = {
  color: "green" | "yellow" | "blue" | "red" | "sand";
  size?: "sm" | "md" | "lg";
  icon?: EIconName;
  isFullWidth?: boolean;
  onClick: () => void;
  text: string;
};
