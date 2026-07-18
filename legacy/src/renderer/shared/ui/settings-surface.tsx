// Restored from ref/webview/assets/settings-surface-BUMhVkdc.js

import type { CSSProperties, ReactNode } from "react";
import { classNames } from "../lib/class-names";

export type SettingsSurfaceProps = {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "secondary";
};

export function SettingsSurface({
  children,
  className,
  variant = "default",
}: SettingsSurfaceProps): JSX.Element {
  const style: CSSProperties | undefined =
    variant === "default"
      ? {
          backgroundColor:
            "var(--color-background-panel, var(--color-token-bg-fog))",
        }
      : undefined;
  return (
    <div
      className={classNames(
        "flex flex-col divide-y-[0.5px] divide-token-border overflow-hidden rounded-lg",
        variant === "default"
          ? "border border-token-border"
          : "bg-token-bg-secondary",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
}
