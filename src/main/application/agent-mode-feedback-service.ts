// Restored from ref/.vite/build/index.js

import * as fs from "node:fs/promises";
import * as os from "node:os";
import * as path from "node:path";
import { BrowserWindow, clipboard, dialog, shell, type App } from "electron";
import type { ClaudeLogExportService } from "../infrastructure/claude-log-export-service";

export type AgentModeFeedbackOptions = {
  url: string;
  meta?: unknown;
  prefillErrorText?: string;
  source?: string;
};

export type AgentModeFeedbackOpenResult = {
  opened: boolean;
  cancelled?: boolean;
};

const QUALTRICS_HOST = "anthropic.qualtrics.com";
const SLACK_ORIGIN = "https://anthropic.enterprise.slack.com";
const DEFAULT_SLACK_CHANNEL = `${SLACK_ORIGIN}/archives/C09JJRBJZGC`;
const PRIVACY_URL =
  "https://privacy.claude.com/en/articles/7996866-how-long-do-you-store-my-organization-s-data";

export class AgentModeFeedbackService {
  private readonly feedbackWindows = new Map<string, BrowserWindow>();

  constructor(
    private readonly app: App,
    private readonly ownerWindow: BrowserWindow,
    private readonly logExport: ClaudeLogExportService,
  ) {}

  async openFeedbackWindow(
    options: AgentModeFeedbackOptions,
  ): Promise<AgentModeFeedbackOpenResult> {
    if (!isAllowedFeedbackUrl(options.url)) return { opened: false };
    const key = canonicalFeedbackUrl(options.url);
    const existing = this.feedbackWindows.get(key);
    if (existing != null && !existing.isDestroyed()) {
      existing.focus();
      return { opened: true };
    }
    const consent = await this.askLogConsent();
    if (consent == null) return { opened: false };
    const archivePath = consent ? await this.createTemporaryArchive() : null;
    try {
      const window = await this.createFeedbackWindow(
        options.url,
        archivePath,
        options.prefillErrorText ?? null,
      );
      this.feedbackWindows.set(key, window);
      window.once("closed", () => {
        this.feedbackWindows.delete(key);
        if (archivePath != null) void fs.rm(archivePath, { force: true });
      });
      return { opened: true };
    } catch {
      if (archivePath != null) await fs.rm(archivePath, { force: true });
      return { opened: false };
    }
  }

  async openFeedbackAndConfirmReinstall(
    options: AgentModeFeedbackOptions,
  ): Promise<AgentModeFeedbackOpenResult> {
    if (options.url) {
      const feedback = await this.openFeedbackWindow(options);
      if (!feedback.opened) return { opened: false, cancelled: true };
      const key = canonicalFeedbackUrl(options.url);
      const window = this.feedbackWindows.get(key);
      if (window != null && !window.isDestroyed()) {
        await new Promise<void>((resolve) => window.once("closed", resolve));
      }
    }
    const confirmation = await dialog.showMessageBox(this.ownerWindow, {
      type: "warning",
      message: "Reinstall workspace",
      detail:
        "This will delete and re-download your workspace. Your existing session data will be preserved.",
      buttons: ["Cancel", "Reinstall"],
      defaultId: 0,
      cancelId: 0,
    });
    if (confirmation.response !== 1) {
      return { opened: true, cancelled: true };
    }
    await fs.rm(
      path.join(this.app.getPath("userData"), "vm_bundles", "claudevm.bundle"),
      { recursive: true, force: true },
    );
    this.app.relaunch();
    this.app.exit(0);
    return { opened: true };
  }

  async reportErrorToSlack(
    sessionId?: string,
    errorMessage?: string,
    slackChannelUrl?: string,
  ): Promise<void> {
    const slackUrl = allowedSlackUrl(slackChannelUrl);
    try {
      const archive = await this.logExport.createDiagnosticArchiveBuffer();
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      const archivePath = path.join(
        this.app.getPath("downloads"),
        `${this.app.getName()}-feedback-${timestamp}.zip`,
      );
      await fs.writeFile(archivePath, archive, { mode: 0o600 });
      clipboard.writeText(
        [
          errorMessage ? `*Error:* ${errorMessage}` : null,
          `*App version:* ${this.app.getVersion()}`,
          `*Platform:* ${process.platform} ${os.release()}`,
          sessionId ? `*Session ID:* ${sessionId}` : null,
          `*Error reported at:* ${new Date().toISOString()}`,
          "",
          "_Logs zip attached below._",
        ]
          .filter((line) => line != null)
          .join("\n"),
      );
      shell.showItemInFolder(archivePath);
    } finally {
      await shell.openExternal(slackUrl);
    }
  }

  dispose(): void {
    for (const window of this.feedbackWindows.values()) {
      if (!window.isDestroyed()) window.close();
    }
    this.feedbackWindows.clear();
  }

  private async askLogConsent(): Promise<boolean | null> {
    for (;;) {
      const result = await dialog.showMessageBox(this.ownerWindow, {
        type: "question",
        message: "Submit Feedback",
        detail:
          "Would you like to submit your issue with debug logs? Submitting your issue with logs will send system information to Anthropic for debugging and future improvements to our models.",
        buttons: ["Cancel", "Attach logs", "Do not attach logs", "Learn more"],
        defaultId: 1,
        cancelId: 0,
      });
      if (result.response === 3) {
        await shell.openExternal(PRIVACY_URL);
        continue;
      }
      if (result.response === 0) return null;
      return result.response === 1;
    }
  }

  private async createTemporaryArchive(): Promise<string | null> {
    try {
      const archive = await this.logExport.createDiagnosticArchiveBuffer();
      const directory = await fs.mkdtemp(
        path.join(this.app.getPath("temp"), "claude-feedback-"),
      );
      const archivePath = path.join(directory, "claude-logs.zip");
      await fs.writeFile(archivePath, archive, { mode: 0o600 });
      return archivePath;
    } catch {
      return null;
    }
  }

  private async createFeedbackWindow(
    url: string,
    archivePath: string | null,
    prefillErrorText: string | null,
  ): Promise<BrowserWindow> {
    const window = new BrowserWindow({
      parent: this.ownerWindow,
      width: 800,
      height: 900,
      show: false,
      resizable: true,
      title: "Submit Feedback - Claude",
      webPreferences: {
        sandbox: true,
        nodeIntegration: false,
        contextIsolation: true,
        webgl: false,
        enableWebSQL: false,
        allowRunningInsecureContent: false,
        experimentalFeatures: false,
        partition: "in-memory-feedback",
      },
    });
    window.webContents.setWindowOpenHandler(() => ({ action: "deny" }));
    const blockUntrustedNavigation = (
      event: Electron.Event,
      targetUrl: string,
    ): void => {
      if (!isAllowedFeedbackUrl(targetUrl)) event.preventDefault();
    };
    window.webContents.on("will-navigate", blockUntrustedNavigation);
    window.webContents.on("will-redirect", blockUntrustedNavigation);
    window.webContents.session.setPermissionRequestHandler(
      (_webContents, _permission, callback) => callback(false),
    );
    window.webContents.once("did-finish-load", () => {
      void this.prefillFeedbackWindow(window, prefillErrorText);
      if (archivePath != null) void attachFile(window, archivePath);
    });
    const target = new URL(url);
    target.searchParams.set("host_mode", "false");
    await window.loadURL(target.toString());
    window.show();
    return window;
  }

  private async prefillFeedbackWindow(
    window: BrowserWindow,
    prefillErrorText: string | null,
  ): Promise<void> {
    const values = {
      appVersion: this.app.getVersion(),
      macOsVersion:
        process.platform === "darwin" ? process.getSystemVersion() : null,
      cpuModel: os.cpus()[0]?.model ?? null,
      errorText: prefillErrorText,
    };
    await window.webContents.executeJavaScript(
      `(function(values) {
        function setValue(input, value) {
          if (!input || !value) return;
          const proto = input.tagName === "TEXTAREA" ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
          const setter = Object.getOwnPropertyDescriptor(proto, "value")?.set;
          if (setter) setter.call(input, value); else input.value = value;
          input.dispatchEvent(new Event("input", { bubbles: true }));
          input.dispatchEvent(new Event("change", { bubbles: true }));
        }
        const fields = [
          ["Claude app version", values.appVersion],
          ["macOS version", values.macOsVersion],
          ["CPU model", values.cpuModel],
        ];
        let elapsed = 0;
        const timer = setInterval(() => {
          for (const [label, value] of fields) {
            for (const section of document.querySelectorAll("section.question")) {
              if (section.textContent?.includes(label)) setValue(section.querySelector("input.text-input"), value);
            }
          }
          const textarea = document.querySelector("section.question textarea");
          if (textarea && !textarea.value.trim()) setValue(textarea, values.errorText);
          elapsed += 100;
          if (elapsed >= 2000) clearInterval(timer);
        }, 100);
      })(${JSON.stringify(values)})`,
    );
  }
}

function isAllowedFeedbackUrl(value: string): boolean {
  try {
    const url = new URL(value);
    return url.protocol === "https:" && url.host === QUALTRICS_HOST;
  } catch {
    return false;
  }
}

function canonicalFeedbackUrl(value: string): string {
  const url = new URL(value);
  return `${url.protocol}//${url.host}${url.pathname}`;
}

function allowedSlackUrl(value?: string): string {
  if (value != null) {
    try {
      const url = new URL(value);
      if (url.protocol === "https:" && url.origin === SLACK_ORIGIN)
        return value;
    } catch {}
  }
  return DEFAULT_SLACK_CHANNEL;
}

async function attachFile(
  window: BrowserWindow,
  filePath: string,
): Promise<void> {
  const debuggerApi = window.webContents.debugger;
  debuggerApi.attach("1.3");
  try {
    const { root } = (await debuggerApi.sendCommand("DOM.getDocument", {})) as {
      root: { nodeId: number };
    };
    const { nodeId } = (await debuggerApi.sendCommand("DOM.querySelector", {
      nodeId: root.nodeId,
      selector: 'input[type="file"]',
    })) as { nodeId: number };
    if (nodeId) {
      await debuggerApi.sendCommand("DOM.setFileInputFiles", {
        nodeId,
        files: [filePath],
      });
    }
  } finally {
    debuggerApi.detach();
  }
}
