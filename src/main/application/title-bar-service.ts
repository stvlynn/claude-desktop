// Restored from ref/.vite/renderer/main_window/assets/MainWindowPage-LqDynGsb.js
// Application: orchestrate title-bar state and notify renderer listeners.

import type { BrowserWindow } from "electron";
import type { LoadErrorDetails } from "../../renderer/shared/api/claude-desktop-api";
import {
  createInitialMainWindowState,
  hideLoadError,
  markTitleBarReady,
  showLoadError,
  updateTitle,
  updateWindowFocus,
  updateWindowFullScreen,
  updateWindowMaximized,
  type MainWindowState,
} from "../domain/main-window-state";

export type TitleBarListener = (state: MainWindowState) => void;

export class TitleBarService {
  private state: MainWindowState = createInitialMainWindowState();
  private listeners = new Set<TitleBarListener>();
  private window: BrowserWindow | null = null;

  attachWindow(window: BrowserWindow) {
    this.window = window;
    this.captureInitialWindowState();
    this.registerWindowEventListeners();
  }

  private captureInitialWindowState() {
    const window = this.window;
    if (window == null || window.isDestroyed()) return;
    this.state = updateWindowFocus(this.state, window.isFocused());
    this.state = updateWindowMaximized(this.state, window.isMaximized());
    this.state = updateWindowFullScreen(this.state, window.isFullScreen());
  }

  private registerWindowEventListeners() {
    const window = this.window;
    if (window == null || window.isDestroyed()) return;

    window.on("focus", () => {
      this.state = updateWindowFocus(this.state, true);
      this.emit();
    });

    window.on("blur", () => {
      this.state = updateWindowFocus(this.state, false);
      this.emit();
    });

    window.on("maximize", () => {
      this.state = updateWindowMaximized(this.state, true);
      this.emit();
    });

    window.on("unmaximize", () => {
      this.state = updateWindowMaximized(this.state, false);
      this.emit();
    });

    window.on("enter-full-screen", () => {
      this.state = updateWindowFullScreen(this.state, true);
      this.emit();
    });

    window.on("leave-full-screen", () => {
      this.state = updateWindowFullScreen(this.state, false);
      this.emit();
    });
  }

  subscribe(listener: TitleBarListener): () => void {
    this.listeners.add(listener);
    listener(this.state);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private emit() {
    for (const listener of this.listeners) {
      listener(this.state);
    }
  }

  setTitle(title: string) {
    this.state = updateTitle(this.state, title);
    this.window?.setTitle(title);
    this.emit();
  }

  reportLoadError(details: LoadErrorDetails) {
    this.state = showLoadError(this.state, details);
    this.emit();
  }

  clearLoadError() {
    this.state = hideLoadError(this.state);
    this.emit();
  }

  markReady() {
    this.state = markTitleBarReady(this.state);
    this.emit();
  }

  getSnapshot(): MainWindowState {
    return this.state;
  }
}
