// Restored from ref/.vite/build/index.js

import * as crypto from "node:crypto";
import * as os from "node:os";
import { net, type App, type BrowserWindow, type WebContents } from "electron";
import JSZip from "jszip";
import type { ClaudeLogExportService } from "../infrastructure/claude-log-export-service";

type ScreenshotEntry = { png: Buffer; expiresAt: number };
type CoworkFeedbackForm = Record<string, unknown> & {
  details?: string;
  includeLogs?: boolean;
  includeTranscript?: boolean;
  sessionId?: string;
};

const SCREENSHOT_TTL_MS = 5 * 60_000;
const MAX_DETAILS_LENGTH = 4_096;
const MAX_BUNDLE_BYTES = 50 * 1024 * 1024;

export class CoworkFeedbackService {
  private readonly screenshots = new Map<string, ScreenshotEntry>();

  constructor(
    private readonly app: App,
    private readonly ownerWindow: BrowserWindow,
    private readonly mainView: WebContents,
    private readonly logExport: ClaudeLogExportService,
  ) {}

  getSystemInfo(): {
    appVersion: string;
    platform: NodeJS.Platform;
    osRelease: string;
  } {
    return {
      appVersion: this.app.getVersion(),
      platform: process.platform,
      osRelease: os.release(),
    };
  }

  async captureScreenshot(): Promise<
    { token: string; sizeBytes: number } | { error: string }
  > {
    try {
      this.pruneScreenshots();
      const target = this.mainView.isDestroyed()
        ? this.ownerWindow.webContents
        : this.mainView;
      if (target.isDestroyed()) {
        return { error: "No active window to capture." };
      }
      const png = (await target.capturePage()).toPNG();
      const token = crypto.randomUUID();
      this.screenshots.set(token, {
        png,
        expiresAt: Date.now() + SCREENSHOT_TTL_MS,
      });
      return { token, sizeBytes: png.length };
    } catch (error) {
      return { error: error instanceof Error ? error.message : String(error) };
    }
  }

  discardScreenshot(token: string): void {
    if (token) this.screenshots.delete(token);
    this.pruneScreenshots();
  }

  getScreenshotDataUrl(token: string): string | null {
    this.pruneScreenshots();
    const entry = this.screenshots.get(token);
    return entry == null
      ? null
      : `data:image/png;base64,${entry.png.toString("base64")}`;
  }

  async submitFeedback(
    form: CoworkFeedbackForm,
  ): Promise<Record<string, unknown>> {
    const token = await this.getSessionToken();
    if (token == null) return { failureReason: "auth_error" };
    const includeLogs = form.includeLogs !== false;
    let archive: Buffer;
    try {
      archive = await this.createBundle(form, includeLogs);
    } catch {
      return { failureReason: "zip_error" };
    }
    if (archive.length > MAX_BUNDLE_BYTES) {
      return { failureReason: "payload_too_large", statusCode: 413 };
    }
    const body = new FormData();
    body.append(
      "description",
      typeof form.details === "string"
        ? form.details.slice(0, MAX_DETAILS_LENGTH)
        : "",
    );
    body.append(
      "bundle",
      new Blob([new Uint8Array(archive)], { type: "application/zip" }),
      "bundle.zip",
    );
    let response: Response;
    try {
      response = await net.fetch(
        "https://api.anthropic.com/api/claude_cli_feedback/bundle",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "User-Agent": `claude-cli/cowork-feedback ${process.platform}-${process.arch} desktop/${this.app.getVersion()}`,
          },
          body,
          credentials: "omit",
          signal: AbortSignal.timeout(60_000),
        },
      );
    } catch (error) {
      return {
        failureReason:
          error instanceof Error && error.message.includes("aborted")
            ? "timeout"
            : "network_error",
      };
    }
    if (response.status === 200) {
      const result = (await response.json().catch(() => null)) as {
        feedback_id?: unknown;
      } | null;
      return typeof result?.feedback_id === "string"
        ? {
            feedbackId: result.feedback_id,
            inferenceLogIds: [],
            includedTranscript: false,
          }
        : { failureReason: "missing_feedback_id" };
    }
    if (response.status === 413) {
      return { failureReason: "payload_too_large", statusCode: 413 };
    }
    if (response.status === 403) {
      const text = await response.text().catch(() => "");
      if (text.includes("Custom data retention")) {
        return { isZdrOrg: true, failureReason: "zdr_org", statusCode: 403 };
      }
      if (text.includes("has not been enabled")) {
        return {
          unavailableReason:
            "Feedback submission has been disabled by your organization's policy.",
          statusCode: 403,
        };
      }
    }
    return { failureReason: "http_error", statusCode: response.status };
  }

  private async createBundle(
    form: CoworkFeedbackForm,
    includeLogs: boolean,
  ): Promise<Buffer> {
    const zip = includeLogs
      ? await JSZip.loadAsync(
          await this.logExport.createDiagnosticArchiveBuffer(),
        )
      : new JSZip();
    const info = this.getSystemInfo();
    zip.file(
      "metadata.json",
      JSON.stringify(
        {
          ...form,
          details: undefined,
          surface: "cowork",
          appVersion: info.appVersion,
          os: info.platform,
          osVersion: info.osRelease,
          cliSessionId: null,
          inferenceLogIds: [],
          submittedAt: new Date().toISOString(),
          includedLogs: includeLogs,
          includedTranscript: false,
        },
        null,
        2,
      ),
    );
    return zip.generateAsync({
      compression: "DEFLATE",
      compressionOptions: { level: 6 },
      type: "nodebuffer",
    });
  }

  private async getSessionToken(): Promise<string | null> {
    for (const name of ["sessionKey", "session_key"]) {
      const cookie = (await this.mainView.session.cookies.get({ name }))[0];
      if (cookie?.value) return cookie.value;
    }
    return null;
  }

  private pruneScreenshots(): void {
    const now = Date.now();
    for (const [token, entry] of this.screenshots) {
      if (entry.expiresAt <= now) this.screenshots.delete(token);
    }
  }
}
