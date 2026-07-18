// Restored from ref/.vite/build/index.js

import { randomUUID } from "node:crypto";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { dialog, shell, type App, type BrowserWindow } from "electron";
import type { ClaudeLogExportService } from "../infrastructure/claude-log-export-service";

export type SupportBundleStage =
  "closed" | "packaging" | "ready" | "exporting" | "sending" | "sent" | "saved";

export type SupportBundleState = {
  stage: SupportBundleStage;
  canSend: boolean;
  showSendUi: boolean;
  stepLabel?: string;
  referenceId?: string;
  sizeBytes?: number;
  previewLines?: string[];
  savedPath?: string;
  error?: string;
};

export type SupportBundleAction = "export" | "send" | "reveal" | "cancel";

const CLOSED_STATE: SupportBundleState = {
  stage: "closed",
  canSend: false,
  showSendUi: false,
};

export class SupportBundleService {
  private state: SupportBundleState = CLOSED_STATE;
  private archive: Buffer | null = null;
  private savedPath: string | null = null;
  private epoch = 0;
  private readonly listeners = new Set<(state: SupportBundleState) => void>();

  constructor(
    private readonly app: App,
    private readonly ownerWindow: BrowserWindow,
    private readonly logExport: ClaudeLogExportService,
  ) {}

  getState(): SupportBundleState {
    return this.state;
  }

  subscribe(listener: (state: SupportBundleState) => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  async generate(): Promise<void> {
    const generation = ++this.epoch;
    this.archive = null;
    this.savedPath = null;
    this.update({
      ...CLOSED_STATE,
      stage: "packaging",
      stepLabel: "Collecting and scrubbing logs",
    });
    try {
      const archive = await this.logExport.createDiagnosticArchiveBuffer();
      if (generation !== this.epoch) return;
      const referenceId = randomUUID();
      this.archive = archive;
      this.update({
        ...CLOSED_STATE,
        stage: "ready",
        referenceId,
        sizeBytes: archive.byteLength,
        previewLines: [
          `Claude diagnostic archive ${referenceId.slice(0, 8)}`,
          `App version: ${this.app.getVersion()}`,
          `Platform: ${process.platform} ${process.arch}`,
          `Archive size: ${archive.byteLength} bytes`,
          "All text logs and system information are scrubbed before export.",
        ],
      });
    } catch (error) {
      if (generation !== this.epoch) return;
      this.update({
        ...CLOSED_STATE,
        stage: "ready",
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }

  async submitAction(action: SupportBundleAction): Promise<boolean> {
    if (action === "cancel") {
      this.epoch += 1;
      this.archive = null;
      this.savedPath = null;
      this.update(CLOSED_STATE);
      return true;
    }
    if (action === "reveal") {
      if (this.savedPath == null) return false;
      shell.showItemInFolder(this.savedPath);
      return true;
    }
    if (action === "send") return false;
    if (action !== "export" || this.archive == null) return false;

    const currentEpoch = this.epoch;
    const readyState = this.state;
    this.update({ ...readyState, stage: "exporting", error: undefined });
    const reference = readyState.referenceId ?? randomUUID();
    const timestamp = new Date()
      .toISOString()
      .replace(/[-:]/g, "")
      .replace("T", "-")
      .slice(0, 13);
    const result = await dialog.showSaveDialog(this.ownerWindow, {
      defaultPath: path.join(
        this.app.getPath("downloads"),
        `claude-diagnostic-${reference.slice(0, 8)}-${timestamp}.zip`,
      ),
      filters: [{ name: "Zip archive", extensions: ["zip"] }],
    });
    if (currentEpoch !== this.epoch) return false;
    if (result.canceled || result.filePath == null) {
      this.update({ ...readyState, stage: "ready" });
      return false;
    }
    try {
      await fs.writeFile(result.filePath, this.archive, { mode: 0o600 });
      if (currentEpoch !== this.epoch) return false;
      this.savedPath = result.filePath;
      this.update({
        ...readyState,
        stage: "saved",
        savedPath: result.filePath,
      });
      return true;
    } catch (error) {
      if (currentEpoch !== this.epoch) return false;
      this.update({
        ...readyState,
        stage: "ready",
        error: error instanceof Error ? error.message : String(error),
      });
      return false;
    }
  }

  private update(state: SupportBundleState): void {
    this.state = state;
    for (const listener of this.listeners) listener(state);
  }
}
