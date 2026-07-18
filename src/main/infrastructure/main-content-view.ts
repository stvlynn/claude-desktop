// Restored from ref/.vite/build/mainView.js
// Infrastructure: the WebContentsView that loads claude.ai as the main app surface.

import { WebContentsView, type View } from "electron";

const MAIN_CONTENT_URL = "https://claude.ai";

export type MainContentHealth = {
  isHealthy: () => boolean;
};

export type MainContentView = {
  view: WebContentsView;
  reload: () => void;
  fitToParent: (parent: View) => void;
} & MainContentHealth;

export function createMainContentView(
  preloadScriptPath: string,
): MainContentView {
  const view = new WebContentsView({
    webPreferences: {
      preload: preloadScriptPath,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  let healthy = false;

  view.webContents.on("did-finish-load", () => {
    healthy = true;
  });

  view.webContents.on("did-fail-load", () => {
    healthy = false;
  });

  view.webContents.on("did-fail-provisional-load", () => {
    healthy = false;
  });

  function fitToParent(parent: View) {
    const bounds = parent.getBounds();
    view.setBounds({
      x: 0,
      y: 0,
      width: bounds.width,
      height: bounds.height,
    });
  }

  void view.webContents.loadURL(MAIN_CONTENT_URL);

  return {
    view,
    reload: () => {
      view.webContents.reload();
    },
    fitToParent,
    isHealthy: () => healthy,
  };
}
