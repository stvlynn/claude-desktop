// Restored from ref/webview/assets/settings-empty-state-DoYKl5S1.js
// Shared empty-state container for settings pages.

import type { ReactNode } from "react";
import clsx from "clsx";
import { once } from "../runtime/commonjs-interop";
import {
  BV as getJsxRuntime,
  VP as initClassNameRuntime,
  qV as getChunkModuleExports,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export type SettingsEmptyStateProps = {
  children?: ReactNode;
  className?: string;
};

export const initSettingsEmptyStateChunk = once(() => {
  getChunkModuleExports();
  initClassNameRuntime();
  getJsxRuntime();
});

export function SettingsEmptyState({
  children,
  className,
}: SettingsEmptyStateProps): JSX.Element {
  return (
    <div
      className={clsx(
        "flex min-h-[62px] items-center justify-center px-4 text-center text-sm text-token-text-secondary",
        className,
      )}
    >
      {children}
    </div>
  );
}

export default SettingsEmptyState;
