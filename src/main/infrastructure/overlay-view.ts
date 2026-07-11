// @ts-nocheck
// Restored from ref/.vite/build/mainWindow.js
// Infrastructure: the top-level renderer overlay WebContentsView.

import { WebContentsView, type View } from "electron";

export type CreateOverlayViewOptions = {
  preloadScriptPath: string;
  rendererUrl: string;
};

export type OverlayView = {
  view: WebContentsView;
  reload: () => void;
};

export function createOverlayView(options: CreateOverlayViewOptions): OverlayView {
  const view = new WebContentsView({
    webPreferences: {
      preload: options.preloadScriptPath,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
      transparent: true,
    },
  });

  void view.webContents.loadURL(options.rendererUrl);

  return {
    view,
    reload: () => {
      view.webContents.reload();
    },
  };
}

export function fitViewToParent(view: View, parent: View): void {
  const bounds = parent.getBounds();
  view.setBounds({ x: 0, y: 0, width: bounds.width, height: bounds.height });
}
