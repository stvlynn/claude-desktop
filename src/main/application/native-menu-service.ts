// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Native application-menu and context-menu IPC handlers for the renderer bridge.

import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import {
  BrowserWindow,
  Menu,
  ipcMain,
  nativeImage,
  type IpcMainInvokeEvent,
  type MenuItemConstructorOptions,
  type NativeImage,
} from "electron";
import { menuIpcChannels } from "../../shared/contracts/preload-api";
import type {
  NativeContextMenuItem,
  NativeContextMenuResult,
  ShowApplicationMenuRequest,
} from "../../renderer/shared/api/claude-desktop-api";

export type TrustedIpcEventPredicate = (event: IpcMainInvokeEvent) => boolean;
export type DisposableIpcRegistration = () => void;

export function registerShowApplicationMenuIpc(
  isTrustedIpcEvent: TrustedIpcEventPredicate,
): DisposableIpcRegistration {
  ipcMain.handle(
    menuIpcChannels.showApplicationMenu,
    async (event, request: ShowApplicationMenuRequest) => {
      if (!isTrustedIpcEvent(event)) return;
      const ownerWindow = BrowserWindow.fromWebContents(event.sender);
      const submenu = Menu.getApplicationMenu()?.getMenuItemById(
        request.menuId,
      )?.submenu;
      if (!submenu) return;
      return new Promise<void>((resolve) => {
        submenu.popup({
          window: ownerWindow ?? undefined,
          x: Math.round(request.x),
          y: Math.round(request.y),
          callback: resolve,
        });
      });
    },
  );

  return () => {
    ipcMain.removeHandler(menuIpcChannels.showApplicationMenu);
  };
}

export function resizeNativeContextMenuIcon(icon: NativeImage): NativeImage {
  const { width, height } = icon.getSize();
  if (!width || !height || (width <= 16 && height <= 16)) return icon;
  return icon.resize({
    width: 16,
    height: 16,
    quality: "best",
  });
}

export function resolveNativeContextMenuIcon(
  iconSource: string | null | undefined,
  iconSearchRoots: readonly string[],
): NativeImage | undefined {
  if (!iconSource) return undefined;
  try {
    if (iconSource.startsWith("data:")) {
      return resizeNativeContextMenuIcon(
        nativeImage.createFromDataURL(iconSource),
      );
    }
    if (iconSource.startsWith("file://")) {
      return resizeNativeContextMenuIcon(
        nativeImage.createFromPath(fileURLToPath(iconSource)),
      );
    }
    if (iconSource.startsWith("/")) {
      return resizeNativeContextMenuIcon(
        nativeImage.createFromPath(iconSource),
      );
    }

    for (const iconSearchRoot of iconSearchRoots) {
      const candidatePath = new URL(
        iconSource,
        `file://${iconSearchRoot.endsWith("/") ? iconSearchRoot : `${iconSearchRoot}/`}`,
      ).pathname;
      if (!existsSync(candidatePath)) continue;
      const icon = nativeImage.createFromPath(candidatePath);
      if (!icon.isEmpty()) return resizeNativeContextMenuIcon(icon);
    }
  } catch {}
  return undefined;
}

export function buildNativeContextMenuTemplate({
  iconSearchRoots,
  items,
  onSelect,
}: {
  items: readonly NativeContextMenuItem[];
  iconSearchRoots: readonly string[];
  onSelect(id: string): void;
}): MenuItemConstructorOptions[] {
  return items.map((item) => {
    if (item.type === "separator") {
      return { type: "separator" };
    }
    return {
      id: item.id,
      label: item.label,
      role: item.role,
      enabled: item.enabled ?? true,
      icon: resolveNativeContextMenuIcon(item.icon, iconSearchRoots),
      toolTip: item.toolTip,
      click: () => {
        onSelect(item.id);
      },
      submenu: item.submenu
        ? buildNativeContextMenuTemplate({
            iconSearchRoots,
            items: item.submenu,
            onSelect,
          })
        : undefined,
    };
  });
}

export function registerShowContextMenuIpc(
  iconSearchRoots: readonly string[],
  isTrustedIpcEvent: TrustedIpcEventPredicate,
): DisposableIpcRegistration {
  ipcMain.handle(
    menuIpcChannels.showContextMenu,
    async (
      event,
      items: readonly NativeContextMenuItem[],
    ): Promise<NativeContextMenuResult> => {
      if (!isTrustedIpcEvent(event)) {
        return { id: null };
      }

      const ownerWindow = BrowserWindow.fromWebContents(event.sender);
      return new Promise<NativeContextMenuResult>((resolve) => {
        let didResolve = false;
        const resolveOnce = (id: string | null) => {
          if (didResolve) return;
          didResolve = true;
          resolve({ id });
        };

        Menu.buildFromTemplate(
          buildNativeContextMenuTemplate({
            iconSearchRoots,
            items,
            onSelect: resolveOnce,
          }),
        ).popup({
          window: ownerWindow ?? undefined,
          callback: () => {
            resolveOnce(null);
          },
        });
      });
    },
  );

  return () => {
    ipcMain.removeHandler(menuIpcChannels.showContextMenu);
  };
}
