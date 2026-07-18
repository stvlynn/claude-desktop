// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-DX7Jokr-.js
// App shell tab controller type definitions.

import type { ComponentType, ReactNode } from "react";

export type AppShellPanelId = "left" | "right" | "bottom" | string;

export type AppShellStore = {
  get(signal: unknown, key?: unknown): unknown;
  set?(signal: unknown, ...args: unknown[]): void;
};

export type AppShellTabComponent = ComponentType<any>;

export type AppShellTabController = {
  activeTab$: unknown;
  panelId: AppShellPanelId;
  openTab: (
    store: AppShellStore,
    component: AppShellTabComponent,
    options: OpenAppShellTabOptions,
  ) => string;
  closeTab: (store: AppShellStore, tabId: string) => unknown;
  moveTab: (_tabId: string, _targetIndex: number) => unknown;
  receiveMovedTab: (_options: ReceiveMovedTabOptions) => unknown;
};

export type AppShellTabRecord = {
  id: string;
  kind: string;
  component?: AppShellTabComponent;
};

export type AppShellTabState = {
  tabs: AppShellTabRecord[];
  activeTabId?: string | null;
};

export type MovedAppShellTab = {
  tab: AppShellTabRecord;
  sourcePanelId: AppShellPanelId;
};

export type OpenAppShellTabOptions = {
  activate?: boolean;
  contextMenuItems?: unknown;
  defaultState?: () => unknown;
  hasExternalFocus?: boolean;
  highlightedIcon?: ReactNode;
  icon?: ReactNode;
  id?: string;
  insertAfterTabId?: string | null;
  isClosable?: boolean;
  isHighlighted?: boolean;
  isLabel?: boolean;
  isPreview?: boolean;
  kind?: string;
  onActivate?: (store: AppShellStore) => void;
  onBeforeClose?: (store: AppShellStore) => boolean | void;
  onClose?: (store: AppShellStore) => void;
  onMove?: (store: AppShellStore) => void;
  props?: Record<string, unknown>;
  title?: ReactNode;
  tooltip?: ReactNode;
  trailingContent?: ReactNode;
};

export type ReceiveMovedTabOptions = {
  tab: AppShellTabRecord;
  sourcePanelId: AppShellPanelId;
  targetIndex?: number;
};
export type AppShellTabInsertionPlacement = "before" | "after" | "end";
