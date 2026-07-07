// Restored from ref/.vite/renderer/quick_window/assets/main-CMY67unU.js

export const preloadGlobalNamespaces = [
  "claude.internal.ui",
  "claude.internal.findInPage",
  "claude.buddy",
  "claude.hybrid",
] as const;

export type PreloadGlobalNamespace = (typeof preloadGlobalNamespaces)[number];

export const claudeInternalUiContracts = [
  "AboutWindow",
  "MainWindowTitleBar",
  "QuickWindow",
] as const;

export const claudeFindInPageContracts = ["FindInPage"] as const;

export const claudeBuddyContracts = ["Buddy"] as const;
