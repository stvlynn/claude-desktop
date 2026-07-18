// Restored from ref/.vite/build/index.pre.js
// Infrastructure: factory for creating any Claude renderer window.

import { BrowserWindow } from "electron";
import path from "node:path";
import type { ClaudeWindowKind } from "../../shared/contracts/window-entry";
import type { FindInPageService } from "../application/find-in-page-service";

export type CreateClaudeWindowOptions = {
  kind: ClaudeWindowKind;
  preloadScriptPath: string;
  rendererUrl: string;
  findInPageService?: FindInPageService;
};

const windowConfigs: Record<
  ClaudeWindowKind,
  {
    fileName: string;
    width: number;
    height: number;
    titleBarStyle?: "hiddenInset" | "default";
    resizable: boolean;
    transparent?: boolean;
    alwaysOnTop?: boolean;
    frame?: boolean;
  }
> = {
  main: {
    fileName: "index.html",
    width: 1200,
    height: 800,
    titleBarStyle: "hiddenInset",
    resizable: true,
    transparent: true,
  },
  about: {
    fileName: "about.html",
    width: 420,
    height: 520,
    resizable: false,
  },
  buddy: {
    fileName: "buddy.html",
    width: 720,
    height: 420,
    resizable: true,
  },
  "find-in-page": {
    fileName: "find-in-page.html",
    width: 420,
    height: 64,
    titleBarStyle: "hiddenInset",
    resizable: false,
    transparent: true,
    frame: false,
  },
  quick: {
    fileName: "quick.html",
    width: 720,
    height: 120,
    titleBarStyle: "hiddenInset",
    resizable: true,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
  },
};

export function createClaudeWindow(
  options: CreateClaudeWindowOptions,
): BrowserWindow {
  const config = windowConfigs[options.kind];
  const pageUrl = new URL(config.fileName, options.rendererUrl).toString();
  const preloadDirectory = path.dirname(options.preloadScriptPath);
  const preloadScriptPath =
    options.kind === "about"
      ? path.join(preloadDirectory, "about-window.cjs")
      : options.kind === "quick"
        ? path.join(preloadDirectory, "quick-window.cjs")
        : options.kind === "buddy"
          ? path.join(preloadDirectory, "buddy.cjs")
          : options.kind === "find-in-page"
            ? path.join(preloadDirectory, "find-in-page.cjs")
            : options.preloadScriptPath;

  const window = new BrowserWindow({
    width: config.width,
    height: config.height,
    titleBarStyle: config.titleBarStyle,
    resizable: config.resizable,
    transparent: config.transparent,
    frame: config.frame,
    alwaysOnTop: config.alwaysOnTop,
    webPreferences: {
      preload: preloadScriptPath,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  if (options.kind === "find-in-page" && options.findInPageService) {
    options.findInPageService.registerController(window.webContents);
  }

  void window.loadURL(pageUrl);

  return window;
}
