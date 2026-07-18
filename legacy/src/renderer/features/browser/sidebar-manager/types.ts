// Restored from ref/webview/assets/browser-sidebar-manager-DZM0wpKX.js
// Stub types for browser sidebar manager.

export type BrowserSidebarBounds = {
  x: number;
  y: number;
  width: number;
  height: number;
};

export type BrowserSidebarSize = {
  width: number;
  height: number;
};

export type BrowserSidebarHostKind = "bottom-panel" | "right-panel" | "hidden-browser-use";

export type BrowserSidebarWebviewElement = HTMLElement & {
  destroy?: () => void;
};

export type BrowserSidebarWebviewRef = {
  current: BrowserSidebarWebviewElement | null;
};
