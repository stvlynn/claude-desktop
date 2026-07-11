// @ts-nocheck
// Restored from ref/.vite/renderer/main_window/index.html

export const claudeWindowKinds = [
  "main",
  "about",
  "buddy",
  "find-in-page",
  "quick",
] as const;

export type ClaudeWindowKind = (typeof claudeWindowKinds)[number];

export type RendererWindowEntry = {
  htmlPath: string;
  kind: ClaudeWindowKind;
  primaryScript: string;
  restoredPage?: string;
};

export const rendererWindowEntries = [
  {
    htmlPath: "ref/.vite/renderer/main_window/index.html",
    kind: "main",
    primaryScript: "ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js",
    restoredPage: "src/renderer/pages/main-window/page.tsx",
  },
  {
    htmlPath: "ref/.vite/renderer/about_window/about.html",
    kind: "about",
    primaryScript: "ref/.vite/renderer/about_window/assets/main-TllbX7l6.js",
    restoredPage: "src/renderer/pages/about-window/page.tsx",
  },
  {
    htmlPath: "ref/.vite/renderer/buddy_window/buddy.html",
    kind: "buddy",
    primaryScript: "ref/.vite/renderer/buddy_window/assets/main-C0ouus01.js",
    restoredPage: "src/renderer/pages/buddy-window/page.tsx",
  },
  {
    htmlPath: "ref/.vite/renderer/find_in_page/find-in-page.html",
    kind: "find-in-page",
    primaryScript: "ref/.vite/renderer/find_in_page/assets/main-DwbzDdQh.js",
    restoredPage: "src/renderer/pages/find-in-page/page.tsx",
  },
  {
    htmlPath: "ref/.vite/renderer/quick_window/quick-window.html",
    kind: "quick",
    primaryScript: "ref/.vite/renderer/quick_window/assets/main-CMY67unU.js",
    restoredPage: "src/renderer/pages/quick-window/page.tsx",
  },
] satisfies RendererWindowEntry[];
