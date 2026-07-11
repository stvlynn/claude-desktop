// @ts-nocheck
// Restored from ref/.vite/build/index.pre.js

import type { ClaudeWindowKind } from "../../shared/contracts/window-entry";

export type RestorationStatus = "restored" | "planned" | "mechanical";

export type RestorationFrontier = {
  sourcePath: string;
  status: RestorationStatus;
  targetPath?: string;
  windowKind?: ClaudeWindowKind;
};

export const rendererRestorationFrontier = [
  {
    sourcePath:
      "ref/.vite/renderer/main_window/assets/MainWindowPage-LqDynGsb.js",
    status: "restored",
    targetPath: "src/renderer/pages/main-window/page.tsx",
    windowKind: "main",
  },
  {
    sourcePath:
      "ref/.vite/renderer/about_window/assets/AboutWindow-DJTf96rn.js",
    status: "restored",
    targetPath: "src/renderer/pages/about-window/page.tsx",
    windowKind: "about",
  },
  {
    sourcePath:
      "ref/.vite/renderer/buddy_window/assets/BuddyWindow-CzbBlukH.js",
    status: "restored",
    targetPath: "src/renderer/pages/buddy-window/page.tsx",
    windowKind: "buddy",
  },
  {
    sourcePath: "ref/.vite/renderer/find_in_page/assets/FindInPage-BE9M4xe7.js",
    status: "restored",
    targetPath: "src/renderer/pages/find-in-page/page.tsx",
    windowKind: "find-in-page",
  },
  {
    sourcePath: "ref/.vite/renderer/quick_window/assets/main-CMY67unU.js",
    status: "restored",
    targetPath: "src/renderer/pages/quick-window/page.tsx",
    windowKind: "quick",
  },
] satisfies RestorationFrontier[];

export const mainProcessRestorationFrontier = [
  {
    sourcePath: "ref/.vite/build/index.pre.js",
    status: "mechanical",
    targetPath: "src/main/application/bootstrap-application.ts",
  },
  {
    sourcePath: "ref/.vite/build/index.js",
    status: "planned",
    targetPath: "src/main/application",
  },
] satisfies RestorationFrontier[];
