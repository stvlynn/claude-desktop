// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// @ts-nocheck
// Type stubs for app-shell-slots boundary.
import type { ReactNode } from "react";

export type AppShellSlotProps = {
  children?: ReactNode;
  className?: string;
};

export type HeaderActionPosition = "start" | "center" | "end";

export type HeaderEntrySignalGroup = {
  byId: unknown;
  ids$: unknown;
};

export type AppShellHeaderActionProps = AppShellSlotProps & {
  actionId: string;
  align?: string;
  order?: number;
  slotPosition?: HeaderActionPosition;
};

export type AppShellHeaderContextMenuItem = {
  id: string;
  [key: string]: unknown;
};

export type AppShellMainContentLayoutProps = {
  layout: string;
};

export type AppShellRightPanelOutletProps = AppShellSlotProps & {
  defaultWidth?: number;
  widthStorageKey?: string;
};
