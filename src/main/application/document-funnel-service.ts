// Restored from ref/.vite/build/index.js

import { createHash, randomBytes } from "node:crypto";
import { EventEmitter } from "node:events";
import {
  access,
  mkdir,
  readFile,
  readdir,
  rename,
  stat,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import type { App, Session } from "electron";
import { getClaudeAccountDetails } from "../domain/account-details";

const SCRATCH_DIRECTORY = ".claude-docs";
const BASELINE_DIRECTORY = ".baseline";
const MAX_FILE_BYTES = 64 * 1024 * 1024;
const SAFE_RELATIVE_PATH = /^[A-Za-z0-9_.\/-]+$/;
const WORKING_FILE = /\.(clark|cd)$/i;

export class DocumentFunnelService extends EventEmitter {
  constructor(
    private readonly app: App,
    private readonly browserSession: Session,
  ) {
    super();
  }

  async ensureScratchRoot(sessionId: string): Promise<{ path: string } | null> {
    const outputs = await this.outputsDirectory(sessionId);
    if (outputs === null) return null;
    const scratch = path.join(outputs, SCRATCH_DIRECTORY);
    await Promise.all([
      mkdir(path.join(scratch, BASELINE_DIRECTORY), {
        recursive: true,
        mode: 0o700,
      }),
      mkdir(path.join(scratch, ".export"), { recursive: true, mode: 0o700 }),
    ]);
    return { path: scratch };
  }

  async writeScratchFile(
    sessionId: string,
    filePath: string,
    base64Content: string,
  ): Promise<{ ok: true; sha256: string } | { ok: false; errorCode: string }> {
    try {
      const target = await this.scratchPath(sessionId, filePath);
      const content = Buffer.from(base64Content, "base64");
      if (content.byteLength > MAX_FILE_BYTES) {
        return { ok: false, errorCode: "file-too-large" };
      }
      await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
      await atomicWrite(target, content);
      const sha256 = createHash("sha256").update(content).digest("hex");
      if (
        path.basename(path.dirname(target)) === BASELINE_DIRECTORY &&
        /^[A-Za-z0-9_-]{1,128}\.[a-z0-9]{1,16}$/.test(path.basename(target))
      ) {
        await atomicWrite(`${target}.sha256`, Buffer.from(sha256));
      }
      return { ok: true, sha256 };
    } catch (error) {
      return {
        ok: false,
        errorCode: error instanceof FunnelError ? error.code : "write-failed",
      };
    }
  }

  async listScratchWorkingFiles(sessionId: string): Promise<string[]> {
    const root = await this.ensureScratchRoot(sessionId);
    if (root === null) return [];
    try {
      return (await readdir(root.path, { withFileTypes: true }))
        .filter((entry) => entry.isFile() && WORKING_FILE.test(entry.name))
        .map((entry) => entry.name);
    } catch {
      return [];
    }
  }

  async runClarkdownConvert(
    sessionId: string,
    options: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    try {
      await this.validateConversionPaths(sessionId, options);
      return {
        ok: false,
        errorCode: "binary-not-found",
        message: "Documents plugin binary not resolved",
      };
    } catch (error) {
      return funnelFailure(error);
    }
  }

  async runClarkdownDownloadExport(
    sessionId: string,
    options: Record<string, unknown>,
  ): Promise<Record<string, unknown>> {
    try {
      if (typeof options.inputPath !== "string") {
        throw new FunnelError("path-not-allowed", "Missing input path");
      }
      await this.scratchPath(sessionId, options.inputPath);
      return {
        ok: false,
        errorCode: "binary-not-found",
        message: "Documents plugin binary not resolved",
      };
    } catch (error) {
      return funnelFailure(error);
    }
  }

  async revealDownloadExport(
    _sessionId: string,
    handle: string,
  ): Promise<boolean> {
    return this.exportHandles.delete(handle);
  }

  async injectDocumentContext(sessionId: string, text: string): Promise<void> {
    const match = /^User attached a document; read and edit it at (.+)$/.exec(
      text,
    );
    if (match === null) return;
    try {
      const target = await this.scratchPath(sessionId, match[1]);
      const relative = path.relative(
        path.dirname(path.dirname(target)),
        target,
      );
      const parts = relative.split(path.sep);
      if (
        parts.length !== 2 ||
        !/^[A-Za-z0-9_-]{1,64}\.(clark|cd)$/.test(parts[1])
      ) {
        return;
      }
      this.emit(
        "sessionNotification",
        sessionId,
        `User attached a document; read and edit it at ${target}`,
      );
    } catch {
      return;
    }
  }

  private readonly exportHandles = new Map<string, string>();

  private async validateConversionPaths(
    sessionId: string,
    options: Record<string, unknown>,
  ): Promise<void> {
    if (
      typeof options.inputPath !== "string" ||
      typeof options.outputPath !== "string"
    ) {
      throw new FunnelError("path-not-allowed", "Missing conversion path");
    }
    await Promise.all([
      this.scratchPath(sessionId, options.inputPath),
      this.scratchPath(sessionId, options.outputPath),
    ]);
  }

  private async scratchPath(
    sessionId: string,
    requested: string,
  ): Promise<string> {
    if (!SAFE_RELATIVE_PATH.test(sessionId)) {
      throw new FunnelError("path-not-allowed", "Unsafe session id");
    }
    const outputs = await this.outputsDirectory(sessionId);
    if (outputs === null) {
      throw new FunnelError("path-not-allowed", "No session storage");
    }
    const absolute = path.resolve(requested);
    const scratch = path.join(outputs, SCRATCH_DIRECTORY);
    const relative = path.relative(scratch, absolute);
    if (
      !path.isAbsolute(requested) ||
      relative === "" ||
      relative.startsWith("..") ||
      path.isAbsolute(relative)
    ) {
      throw new FunnelError("path-not-allowed", "Path is outside scratch root");
    }
    return absolute;
  }

  private async outputsDirectory(sessionId: string): Promise<string | null> {
    const accountId = getClaudeAccountDetails()?.accountUuid;
    if (!accountId || !SAFE_RELATIVE_PATH.test(sessionId)) return null;
    const cookies = await this.browserSession.cookies.get({
      url: "https://claude.ai",
      name: "lastActiveOrg",
    });
    const orgId = cookies[0]?.value;
    if (!orgId || !SAFE_RELATIVE_PATH.test(orgId)) return null;
    const root = path.join(
      this.app.getPath("userData"),
      "local-agent-mode-sessions",
      accountId,
      orgId,
    );
    const candidates = [
      path.join(root, sessionId),
      path.join(root, "agent", sessionId),
    ];
    for (const candidate of candidates) {
      const metadata = `${candidate}.json`;
      if (await exists(metadata)) {
        const outputs = path.join(candidate, "outputs");
        await mkdir(outputs, { recursive: true, mode: 0o700 });
        return outputs;
      }
    }
    return null;
  }
}

class FunnelError extends Error {
  constructor(
    readonly code: string,
    message: string,
  ) {
    super(message);
  }
}

function funnelFailure(error: unknown): Record<string, unknown> {
  return {
    ok: false,
    errorCode: error instanceof FunnelError ? error.code : "export-failed",
    message: error instanceof Error ? error.message : String(error),
  };
}

async function atomicWrite(target: string, content: Buffer): Promise<void> {
  const temporary = `${target}.${randomBytes(6).toString("hex")}.tmp`;
  await writeFile(temporary, content, { mode: 0o600 });
  await rename(temporary, target);
}

async function exists(target: string): Promise<boolean> {
  try {
    await access(target);
    return (await stat(target)).isFile();
  } catch {
    return false;
  }
}
