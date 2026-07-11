// @ts-nocheck
// Restored from ref/.vite/build/index.pre.js
// Infrastructure: factory for creating any Claude renderer window.

import { BrowserWindow } from "electron";
import path from "node:path";
import type { ClaudeWindowKind } from "../../shared/contracts/window-entry";
import type { FindInPageService } from "../application/find-in-page-service";
import type { BuddyService } from "../application/buddy-service";

export type CreateClaudeWindowOptions = {
  kind: ClaudeWindowKind;
  preloadScriptPath: string;
  rendererUrl: string;
  findInPageService?: FindInPageService;
  buddyService?: BuddyService;
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

  const window = new BrowserWindow({
    width: config.width,
    height: config.height,
    titleBarStyle: config.titleBarStyle,
    resizable: config.resizable,
    transparent: config.transparent,
    frame: config.frame,
    alwaysOnTop: config.alwaysOnTop,
    webPreferences: {
      preload: options.preloadScriptPath,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
  });

  if (options.kind === "find-in-page" && options.findInPageService) {
    options.findInPageService.registerController(window.webContents);
  }

  if (options.kind === "buddy" && options.buddyService) {
    options.buddyService.registerWindow(window.webContents);
  }

  void window.loadURL(pageUrl);

  return window;
}
