// Restored from ref/.vite/build/findInPage.js
// Application: orchestrate find-in-page requests between the find bar window
// and the main content WebContents that loads claude.ai.

import { ipcMain, type WebContents } from "electron";
import { findInPageIpcChannels } from "../../shared/contracts/preload-api";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
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
  private providerActive = false;
  private nextProviderRequestId = 1;
  private readonly providerPending = new Map<
    number,
    (result: FindInPageResult) => void
  >();

  private providerChannel(method: string): string {
    return currentClaudeIpcChannel("claude.web", "FindInPageProvider", method);
  }

  attachTarget(contents: WebContents) {
    if (this.targetContents) {
      this.targetContents.off("found-in-page", this.handleFoundInPage);
      this.targetContents.off("did-navigate", this.handleNavigate);
      this.targetContents.off("did-navigate-in-page", this.handleNavigate);
      this.targetContents.off(
        "did-start-navigation",
        this.handleProviderNavigation,
      );
    }
    this.targetContents = contents;
    contents.on("found-in-page", this.handleFoundInPage);
    contents.on("did-navigate", this.handleNavigate);
    contents.on("did-navigate-in-page", this.handleNavigate);
    contents.on("did-start-navigation", this.handleProviderNavigation);

    const setProviderActiveChannel = this.providerChannel("setProviderActive");
    const reportFindResultChannel = this.providerChannel("reportFindResult");
    ipcMain.removeHandler(setProviderActiveChannel);
    ipcMain.removeHandler(reportFindResultChannel);
    ipcMain.handle(setProviderActiveChannel, (event, active: unknown) => {
      if (event.sender !== contents || typeof active !== "boolean") {
        throw new TypeError(
          "FindInPageProvider.setProviderActive expects a trusted boolean",
        );
      }
      contents.stopFindInPage("clearSelection");
      this.providerActive = active;
      if (!active) this.clearProviderPending();
    });
    ipcMain.handle(
      reportFindResultChannel,
      (event, requestId: unknown, result: unknown) => {
        if (
          event.sender !== contents ||
          typeof requestId !== "number" ||
          !this.isFindResult(result)
        ) {
          throw new TypeError(
            "FindInPageProvider.reportFindResult received invalid arguments",
          );
        }
        const resolve = this.providerPending.get(requestId);
        if (resolve) {
          this.providerPending.delete(requestId);
          resolve(result);
        }
      },
    );
  }

  registerController(contents: WebContents) {
    this.controllerContents = contents;
  }

  listen() {
    const currentChannel = (method: string) =>
      currentClaudeIpcChannel(
        "claude.internal.findInPage",
        "FindInPage",
        method,
      );
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

    ipcMain.on(
      findInPageIpcChannels.stepToMatch,
      (_event, forward: boolean) => {
        this.stepToMatch(forward);
      },
    );
    ipcMain.handle(
      currentChannel("findInPage"),
      async (_event, query: string, options: FindInPageOptions) =>
        this.findInPage(query, options),
    );
    ipcMain.handle(currentChannel("stopFindInPage"), async () => {
      this.stopFindInPage();
    });
    ipcMain.handle(currentChannel("endFindSession"), async () => {
      this.endFindSession();
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

  private handleProviderNavigation = (event: Electron.Event): void => {
    const navigation = event as Electron.Event & {
      isMainFrame?: boolean;
      isSameDocument?: boolean;
    };
    if (!navigation.isMainFrame || navigation.isSameDocument) return;
    this.providerActive = false;
    this.clearProviderPending();
  };

  private isFindResult(value: unknown): value is FindInPageResult {
    if (typeof value !== "object" || value == null) return false;
    const result = value as FindInPageResult;
    return (
      typeof result.activeIndex === "number" && typeof result.total === "number"
    );
  }

  private clearProviderPending(): void {
    for (const resolve of this.providerPending.values()) {
      resolve({ activeIndex: 0, total: 0 });
    }
    this.providerPending.clear();
  }

  private findWithProvider(
    query: string,
    options: FindInPageOptions,
  ): Promise<FindInPageResult> {
    const target = this.targetContents;
    if (!target || target.isDestroyed()) {
      return Promise.resolve({ activeIndex: 0, total: 0 });
    }
    const requestId = this.nextProviderRequestId++;
    return new Promise((resolve) => {
      const timeout = setTimeout(() => {
        if (this.providerPending.delete(requestId)) {
          resolve({ activeIndex: 0, total: 0 });
        }
      }, 5_000);
      this.providerPending.set(requestId, (result) => {
        clearTimeout(timeout);
        resolve(result);
      });
      target.send(
        this.providerChannel("findRequest"),
        requestId,
        query,
        options.forward ?? true,
        options.findNext,
      );
    });
  }

  private findInPage(
    query: string,
    options: FindInPageOptions,
  ): Promise<FindInPageResult | null> {
    if (!this.targetContents || this.targetContents.isDestroyed()) {
      return Promise.resolve(this.lastResult);
    }

    if (query.length <= 2) return Promise.resolve(null);
    if (this.providerActive) return this.findWithProvider(query, options);

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
    this.targetContents.stopFindInPage(
      this.providerActive ? "clearSelection" : "keepSelection",
    );
    if (this.providerActive) {
      this.targetContents.send(this.providerChannel("findClear"));
    }
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
    this.controllerContents?.send(
      currentClaudeIpcChannel(
        "claude.internal.findInPage",
        "FindInPage",
        "stepToMatch",
      ),
      forward,
    );
  }

  focusInput() {
    this.controllerContents?.send(findInPageIpcChannels.focusInput);
    this.controllerContents?.send(
      currentClaudeIpcChannel(
        "claude.internal.findInPage",
        "FindInPage",
        "focusInput",
      ),
    );
  }

  blurInput() {
    this.controllerContents?.send(findInPageIpcChannels.blurInput);
    this.controllerContents?.send(
      currentClaudeIpcChannel(
        "claude.internal.findInPage",
        "FindInPage",
        "blurInput",
      ),
    );
  }

  dispose(): void {
    this.clearProviderPending();
    if (this.targetContents) {
      this.targetContents.off("found-in-page", this.handleFoundInPage);
      this.targetContents.off("did-navigate", this.handleNavigate);
      this.targetContents.off("did-navigate-in-page", this.handleNavigate);
      this.targetContents.off(
        "did-start-navigation",
        this.handleProviderNavigation,
      );
    }
    for (const method of ["setProviderActive", "reportFindResult"]) {
      ipcMain.removeHandler(this.providerChannel(method));
    }
  }
}
