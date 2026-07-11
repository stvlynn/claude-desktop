// @ts-nocheck
// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Minimal cross-platform application menu for the restored desktop shell.

import { BrowserWindow, Menu, type MenuItemConstructorOptions } from "electron";

export type ApplicationMenuCallbacks = {
  onFindInPage?(): void;
  onOpenBuddy?(): void;
};

export type ApplicationMenuService = {
  setMenu(callbacks?: ApplicationMenuCallbacks): void;
  refresh(callbacks?: ApplicationMenuCallbacks): void;
};

function sendToFocusedWindow(channel: string, ...args: unknown[]): void {
  const focused = BrowserWindow.getFocusedWindow();
  if (focused && !focused.webContents.isDestroyed()) {
    focused.webContents.send(channel, ...args);
  }
}

export function createApplicationMenuService(): ApplicationMenuService {
  const isMacOS = process.platform === "darwin";

  function buildTemplate(
    callbacks: ApplicationMenuCallbacks = {},
  ): MenuItemConstructorOptions[] {
    const appName = "Claude";

    const fileMenu: MenuItemConstructorOptions = {
      label: "File",
      submenu: [
        {
          label: "New Window",
          accelerator: "CmdOrCtrl+N",
          click: () => {
            sendToFocusedWindow("claude:menu:new-window");
          },
        },
        { type: "separator" },
        isMacOS ? { role: "close" } : { role: "quit" },
      ],
    };

    const editMenu: MenuItemConstructorOptions = {
      label: "Edit",
      submenu: [
        { role: "undo" },
        { role: "redo" },
        { type: "separator" },
        { role: "cut" },
        { role: "copy" },
        { role: "paste" },
        { role: "pasteAndMatchStyle" },
        { role: "delete" },
        { role: "selectAll" },
        { type: "separator" },
        {
          label: "Find in Page",
          accelerator: "CmdOrCtrl+F",
          click: () => {
            callbacks.onFindInPage?.();
          },
        },
      ],
    };

    const viewMenu: MenuItemConstructorOptions = {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { role: "toggleDevTools" },
        { type: "separator" },
        { role: "resetZoom" },
        { role: "zoomIn" },
        { role: "zoomOut" },
        { type: "separator" },
        { role: "togglefullscreen" },
      ],
    };

    const windowMenu: MenuItemConstructorOptions = {
      label: "Window",
      submenu: [
        { role: "minimize" },
        { role: "zoom" },
        ...(isMacOS
          ? [
              { type: "separator" as const },
              { role: "front" as const },
              { type: "separator" as const },
              { role: "window" as const },
            ]
          : [{ role: "close" as const }]),
      ],
    };

    const helpMenu: MenuItemConstructorOptions = {
      label: "Help",
      submenu: [
        {
          label: `Learn More About ${appName}`,
          click: () => {
            sendToFocusedWindow("claude:menu:help");
          },
        },
        { type: "separator" },
        {
          label: "Hardware Buddy & Maker Devices",
          accelerator: "CmdOrCtrl+Shift+B",
          click: () => {
            callbacks.onOpenBuddy?.();
          },
        },
      ],
    };

    if (isMacOS) {
      return [
        {
          label: appName,
          submenu: [
            { role: "about" },
            { type: "separator" },
            { role: "services" },
            { type: "separator" },
            { role: "hide" },
            { role: "hideOthers" },
            { role: "unhide" },
            { type: "separator" },
            { role: "quit" },
          ],
        },
        fileMenu,
        editMenu,
        viewMenu,
        windowMenu,
        helpMenu,
      ];
    }

    return [fileMenu, editMenu, viewMenu, windowMenu, helpMenu];
  }

  function setMenu(callbacks?: ApplicationMenuCallbacks) {
    Menu.setApplicationMenu(Menu.buildFromTemplate(buildTemplate(callbacks)));
  }

  function refresh(callbacks?: ApplicationMenuCallbacks) {
    setMenu(callbacks);
  }

  return { setMenu, refresh };
}
