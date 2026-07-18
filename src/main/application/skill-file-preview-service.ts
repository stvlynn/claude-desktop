// Restored from ref/.vite/build/index.js

import { existsSync } from "node:fs";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { BrowserWindow, dialog, type App, type WebContents } from "electron";
import { currentClaudeIpcChannel } from "../../shared/contracts/current-claude-ipc";
import { desktopLogger } from "./desktop-logger";

const MAX_SKILL_FILE_BYTES = 30 * 1024 * 1024;
const previewSkillFileChannel = currentClaudeIpcChannel(
  "claude.skills",
  "Skills",
  "previewSkillFile",
);

export class SkillFilePreviewService {
  private mainView: WebContents | null = null;
  private pendingPaths: string[] = [];
  private readonly openFileListener = (
    event: Event,
    filePath: string,
  ): void => {
    if (!isSkillFile(filePath)) return;
    event.preventDefault();
    this.enqueue(filePath);
  };

  constructor(private readonly app: App) {}

  listen(initialArgv: readonly string[]): void {
    this.app.on("open-file", this.openFileListener as never);
    if (process.platform !== "darwin" || !this.app.isPackaged) {
      this.handleArgv(initialArgv);
    }
  }

  dispose(): void {
    this.app.off("open-file", this.openFileListener as never);
  }

  handleArgv(argv: readonly string[]): boolean {
    const appPath = path.resolve(this.app.getAppPath());
    const skillPath = argv
      .slice(1)
      .find(
        (value) =>
          !value.startsWith("-") &&
          path.resolve(value) !== appPath &&
          isSkillFile(value) &&
          existsSync(value),
      );
    if (!skillPath) return false;
    this.enqueue(skillPath);
    return true;
  }

  attachMainView(mainView: WebContents): void {
    this.mainView = mainView;
    const flush = (): void => {
      if (this.mainView !== mainView || mainView.isDestroyed()) return;
      const pending = this.pendingPaths.splice(0);
      for (const skillPath of pending) void this.preview(skillPath);
    };
    if (!mainView.isLoadingMainFrame()) flush();
    mainView.on("did-finish-load", flush);
    mainView.once("destroyed", () => {
      mainView.off("did-finish-load", flush);
      if (this.mainView === mainView) this.mainView = null;
    });
  }

  private enqueue(skillPath: string): void {
    if (!this.mainView || this.mainView.isDestroyed()) {
      this.pendingPaths.push(skillPath);
      return;
    }
    void this.preview(skillPath);
  }

  private async preview(skillPath: string): Promise<void> {
    try {
      const fileStat = await stat(skillPath);
      if (fileStat.size > MAX_SKILL_FILE_BYTES) {
        await dialog.showMessageBox({
          type: "error",
          title: "Skill file too large",
          message: "Skill file is too large. Maximum size is 30 MB.",
          buttons: ["OK"],
        });
        return;
      }
      const data = await readFile(skillPath);
      const mainView = this.mainView;
      if (!mainView || mainView.isDestroyed()) {
        this.pendingPaths.push(skillPath);
        return;
      }
      mainView.send(
        previewSkillFileChannel,
        Uint8Array.from(data),
        path.basename(skillPath),
      );
      const window = BrowserWindow.fromWebContents(mainView);
      if (window && !window.isDestroyed()) {
        window.show();
        window.focus();
      }
    } catch (error) {
      desktopLogger.error("Failed to handle skill file", {
        error: error instanceof Error ? error.message : String(error),
      });
      const missing =
        error instanceof Error && "code" in error && error.code === "ENOENT";
      await dialog.showMessageBox({
        type: "error",
        title: missing ? "Skill file not found" : "Skill file error",
        message: missing
          ? "The skill file could not be found."
          : "Failed to open skill file.",
        detail: missing
          ? undefined
          : error instanceof Error
            ? error.message
            : String(error),
        buttons: ["OK"],
      });
    }
  }
}

function isSkillFile(filePath: string): boolean {
  return filePath.toLowerCase().endsWith(".skill");
}
