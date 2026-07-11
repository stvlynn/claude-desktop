// @ts-nocheck
// Restored from ref/.vite/build/findInPage.js
// Application: orchestrate find-in-page requests between the find bar window
// and the main content WebContents that loads claude.ai.

import { ipcMain, type WebContents } from "electron";
import { findInPageIpcChannels } from "../../shared/contracts/preload-api";
import type {
  FindInPageOptions,
  FindInPageResult,
} from "../../renderer/shared/api/claude-desktop-api";

type PendingRequest = {
  resolve: (result: FindInPageResult) => void;
  timeout: ReturnType<typeof setTimeout>;
};

export class FindInPageService {
  private targetContents: WebContents | null = null;
  private controllerContents: WebContents | null = null;
  private pending: PendingRequest | null = null;
  private lastResult: FindInPageResult = { activeIndex: 0, total: 0 };

  attachTarget(contents: WebContents) {
    this.targetContents = contents;
    contents.on("found-in-page", this.handleFoundInPage);
    contents.on("did-navigate", this.handleNavigate);
    contents.on("did-navigate-in-page", this.handleNavigate);
  }

  registerController(contents: WebContents) {
    this.controllerContents = contents;
  }

  listen() {
    ipcMain.handle(
      findInPageIpcChannels.findInPage,
      async (_event, query: string, options: FindInPageOptions) => {
        return this.findInPage(query, options);
      },
    );

    ipcMain.handle(findInPageIpcChannels.stopFindInPage, async () => {
      this.stopFindInPage();
    });

    ipcMain.handle(findInPageIpcChannels.endFindSession, async () => {
      this.endFindSession();
    });

    ipcMain.on(findInPageIpcChannels.stepToMatch, (_event, forward: boolean) => {
      this.stepToMatch(forward);
    });
  }

  private handleFoundInPage = (
    _event: Electron.Event,
    result: Electron.Result,
  ) => {
    this.lastResult = {
      activeIndex: result.activeMatchOrdinal + 1,
      total: result.matches,
    };

    if (this.pending) {
      clearTimeout(this.pending.timeout);
      this.pending.resolve(this.lastResult);
      this.pending = null;
    }
  };

  private handleNavigate = () => {
    this.lastResult = { activeIndex: 0, total: 0 };
  };

  private findInPage(
    query: string,
    options: FindInPageOptions,
  ): Promise<FindInPageResult> {
    if (!this.targetContents || this.targetContents.isDestroyed()) {
      return Promise.resolve(this.lastResult);
    }

    if (query.length === 0) {
      this.targetContents.stopFindInPage("clearSelection");
      return Promise.resolve({ activeIndex: 0, total: 0 });
    }

    // There should only be one in-flight find request from the renderer.
    if (this.pending) {
      clearTimeout(this.pending.timeout);
      this.pending.resolve(this.lastResult);
      this.pending = null;
    }

    return new Promise<FindInPageResult>((resolve) => {
      const timeout = setTimeout(() => {
        this.pending = null;
        resolve(this.lastResult);
      }, 500);

      this.pending = { resolve, timeout };

      this.targetContents?.findInPage(query, {
        findNext: options.findNext,
        forward: options.forward ?? true,
      });
    });
  }

  private stopFindInPage() {
    if (!this.targetContents || this.targetContents.isDestroyed()) {
      return;
    }
    this.targetContents.stopFindInPage("keepSelection");
  }

  private endFindSession() {
    if (!this.targetContents || this.targetContents.isDestroyed()) {
      return;
    }
    this.targetContents.stopFindInPage("clearSelection");
    this.lastResult = { activeIndex: 0, total: 0 };
  }

  private stepToMatch(forward: boolean) {
    this.controllerContents?.send(findInPageIpcChannels.stepToMatch, forward);
  }

  focusInput() {
    this.controllerContents?.send(findInPageIpcChannels.focusInput);
  }

  blurInput() {
    this.controllerContents?.send(findInPageIpcChannels.blurInput);
  }
}
