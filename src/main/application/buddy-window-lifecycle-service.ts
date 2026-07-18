// Restored from ref/.vite/build/index.js

import { BrowserWindow, type App, type WebContents } from "electron";
import { registerCurrentBuddyIpc } from "../interfaces/current-buddy-ipc";
import { createClaudeWindow } from "../infrastructure/window-factory";
import type { BuddyRemoteFeedService } from "./buddy-remote-feed-service";
import { BuddyService } from "./buddy-service";

export class BuddyWindowLifecycleService {
  private readonly service: BuddyService;
  private readonly ipc: ReturnType<typeof registerCurrentBuddyIpc>;
  private window: BrowserWindow | null = null;

  constructor(
    app: App,
    mainView: WebContents,
    remoteFeed: BuddyRemoteFeedService,
    private readonly preloadScriptPath: string,
    private readonly rendererUrl: string,
  ) {
    this.service = new BuddyService(app, mainView, remoteFeed);
    this.ipc = registerCurrentBuddyIpc(this.service, mainView);
  }

  open(): void {
    if (this.window && !this.window.isDestroyed()) {
      if (this.window.isMinimized()) this.window.restore();
      this.window.show();
      this.window.focus();
      return;
    }
    const window = createClaudeWindow({
      kind: "buddy",
      preloadScriptPath: this.preloadScriptPath,
      rendererUrl: this.rendererUrl,
    });
    this.window = window;
    const detachIpc = this.ipc.attachWindow(window.webContents);
    window.on("closed", () => {
      detachIpc();
      if (this.window === window) this.window = null;
      this.service.cancelScan();
    });
  }

  dispose(): void {
    this.ipc.dispose();
    this.service.dispose();
    if (this.window && !this.window.isDestroyed()) this.window.destroy();
    this.window = null;
  }
}
