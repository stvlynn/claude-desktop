// @ts-nocheck
// Restored from ref/.vite/build/mainWindow.js
// Infrastructure: creation of the main renderer BrowserWindow.
//
// The main window uses two stacked WebContentsViews:
//   1. Main content view: loads https://claude.ai
//   2. Overlay view: loads the restored renderer HTML for error UI

import { BrowserWindow, WebContentsView } from "electron";
import path from "node:path";
import { createMainContentView } from "./main-content-view";
import { createOverlayView, fitViewToParent } from "./overlay-view";

export type CreateMainWindowOptions = {
  preloadScriptPath: string;
  rendererUrl: string;
};

export type MainWindow = {
  window: BrowserWindow;
  mainContentWebContents: Electron.WebContents;
  isMainContentHealthy: () => boolean;
  overlayView: WebContentsView;
  overlayWebContents: Electron.WebContents;
  reloadMainView: () => void;
  setOverlayActive: (active: boolean) => void;
};

export function createMainWindow(options: CreateMainWindowOptions): MainWindow {
  const window = new BrowserWindow({
    width: 1200,
    height: 800,
    titleBarStyle: "hiddenInset",
    transparent: true,
    backgroundColor: "#00000000",
    webPreferences: {
      // The BrowserWindow itself does not load content; the overlay view does.
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  const mainContent = createMainContentView();
  const overlay = createOverlayView({
    preloadScriptPath: options.preloadScriptPath,
    rendererUrl: options.rendererUrl,
  });

  // Stack: main content at the bottom, renderer overlay on top.
  window.contentView = mainContent.view;
  mainContent.view.addChildView(overlay.view);

  const parentBounds = () => mainContent.view.getBounds();

  function fitChildren() {
    fitViewToParent(mainContent.view, window.contentView);
    setOverlayActive(false);
  }

  function setOverlayActive(active: boolean) {
    const bounds = parentBounds();
    if (active) {
      // Full-window overlay when the error UI is visible.
      overlay.view.setBounds({
        x: 0,
        y: 0,
        width: bounds.width,
        height: bounds.height,
      });
    } else {
      // Minimized to a 1px strip so the main content (claude.ai) receives
      // mouse/keyboard events. The view cannot be 0x0, so we collapse it to
      // a single pixel and set pointer-events none in the renderer.
      overlay.view.setBounds({
        x: 0,
        y: 0,
        width: 1,
        height: 1,
      });
    }
  }

  window.on("resize", fitChildren);
  window.on("maximize", fitChildren);
  window.on("unmaximize", fitChildren);
  window.on("show", fitChildren);
  fitChildren();

  return {
    window,
    mainContentWebContents: mainContent.view.webContents,
    isMainContentHealthy: mainContent.isHealthy,
    overlayView: overlay.view,
    overlayWebContents: overlay.view.webContents,
    reloadMainView: () => {
      overlay.reload();
    },
    setOverlayActive,
  };
}
