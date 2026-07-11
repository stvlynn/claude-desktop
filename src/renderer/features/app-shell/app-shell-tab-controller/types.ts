// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~oc6ebzsr-DX7Jokr-.js
// @ts-nocheck
// App shell tab controller type definitions.

export type AppShellPanelId = "left" | "right" | "bottom" | string;

export type AppShellStore = unknown;

export type AppShellTabComponent = unknown;

export type AppShellTabController = {
  panelId: AppShellPanelId;
  openTab: (_options: OpenAppShellTabOptions) => unknown;
  closeTab: (_tabId: string) => unknown;
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
  tabId?: string;
  component?: AppShellTabComponent;
  kind?: string;
  activate?: boolean;
};

export type ReceiveMovedTabOptions = {
  tab: AppShellTabRecord;
  sourcePanelId: AppShellPanelId;
  targetIndex?: number;
};
// Added to satisfy relative import checks.
export const AppShellTabInsertionPlacement = undefined as never;
