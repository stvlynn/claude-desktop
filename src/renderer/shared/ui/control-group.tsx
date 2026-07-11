// @ts-nocheck
// Restored from ref/webview/assets/control-group-g0j1uRO5.js
// Also matches ref/webview/assets/control-group-B8InwDgE.js.
// Current B8InwDgE source rechecked as the flex control group wrapper.
// control-group-D6VRtZJR chunk restored from the Codex webview bundle.
import type { ReactNode } from "react";
import { classNames } from "../lib/class-names";

export type ControlGroupProps = {
  children?: ReactNode;
  className?: string;
};

export function ControlGroup({
  children,
  className,
}: ControlGroupProps): JSX.Element {
  return (
    <div className={classNames("flex items-center gap-2", className)}>
      {children}
    </div>
  );
}
