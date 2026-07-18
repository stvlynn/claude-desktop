// Restored from ref/webview/assets/app-shell-tab-controller-CVKUvgYM.js
// Barrel for app-shell tab controller DOM helpers and types.
export type {
  AppShellPanelId,
  AppShellTabComponent,
  AppShellTabController,
  AppShellTabDirection,
  AppShellTabInsertionPlacement,
  AppShellTabMovePatch,
  AppShellTabRecord,
  AppShellTabState,
  AppShellStore,
  MovedAppShellTab,
  OpenAppShellTabOptions,
  ReceiveMovedTabOptions,
} from "./types";
export {
  createTabDndId,
  exitFullscreenForTabPanel,
  filterActivationHistory,
  focusTabPanel,
  getAdjacentTabId,
  getNeighborTabId,
  getTabInsertionIndex,
  getTabPanelElement,
  resolveComponentTabId,
  scrollTabButtonIntoView,
  tabStillOwnsFocus,
} from "./dom";
