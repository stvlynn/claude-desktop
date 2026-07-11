// @ts-nocheck
// Restored from ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js
//
// Root application shell for the main renderer window.
// Wires app-level providers and runtime side-effects that must happen before
// any page renders.

import { type ReactNode } from "react";
import { LocaleProvider } from "./providers/locale-provider";
import { applyInitialTheme } from "../shared/runtime/theme";

export type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return <LocaleProvider>{children}</LocaleProvider>;
}

/**
 * One-time renderer bootstrap: theme class on <body>.
 * Call this before mounting React.
 */
export function runAppSideEffects(): void {
  applyInitialTheme();
}
