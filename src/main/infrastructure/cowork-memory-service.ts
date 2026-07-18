// Restored from ref/.vite/build/index.js

import type { App, Session } from "electron";
import { promises as fs } from "node:fs";
import * as path from "node:path";
import { getClaudeAccountDetails } from "../domain/account-details";
import { desktopLogger } from "../application/desktop-logger";

const MAX_MEMORY_BYTES = 256 * 1024;
const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type CoworkMemoryEntry = {
  path: string;
  content?: string;
  updatedAt: string;
};

type AccountContext = { accountId: string; orgId: string };

async function readRegularFile(
  filePath: string,
): Promise<{ content: string; mtime: Date } | null> {
  try {
    const metadata = await fs.lstat(filePath);
    if (!metadata.isFile() || metadata.isSymbolicLink()) return null;
    const handle = await fs.open(filePath, "r");
    try {
      const buffer = Buffer.alloc(
        Math.min(metadata.size, MAX_MEMORY_BYTES + 1),
      );
      const { bytesRead } = await handle.read(buffer, 0, buffer.length, 0);
      if (bytesRead > MAX_MEMORY_BYTES) return null;
      return {
        content: buffer.subarray(0, bytesRead).toString("utf8"),
        mtime: metadata.mtime,
      };
    } finally {
      await handle.close();
    }
  } catch {
    return null;
  }
}

async function writeAtomic(filePath: string, content: string): Promise<void> {
  await fs.mkdir(path.dirname(filePath), { recursive: true, mode: 0o700 });
  const temporary = `${filePath}.${process.pid}.tmp`;
  await fs.writeFile(temporary, content, { encoding: "utf8", mode: 0o600 });
  await fs.rename(temporary, filePath);
}

export class CoworkMemoryService {
  constructor(
    private readonly app: App,
    private readonly browserSession: Session,
  ) {}

  async readGlobalMemory(): Promise<string | null> {
    const context = await this.accountContext();
    if (context === null) return null;
    try {
      return await fs.readFile(this.globalMemoryPath(context), "utf8");
    } catch {
      return null;
    }
  }

  async writeGlobalMemory(content: string): Promise<boolean> {
    const context = await this.accountContext();
    if (context === null) return false;
    await writeAtomic(this.globalMemoryPath(context), content);
    return true;
  }

  async listAccountMemories(
    includeContent: boolean,
  ): Promise<CoworkMemoryEntry[]> {
    const context = await this.accountContext();
    if (context === null) return [];
    const memoryDirectory = this.accountMemoryDirectory(context);
    let names: string[];
    try {
      names = await fs.readdir(memoryDirectory);
    } catch {
      return [];
    }
    const entries: CoworkMemoryEntry[] = [];
    for (const name of names) {
      if (!this.isSafeMemoryName(name)) continue;
      const filePath = path.join(memoryDirectory, name);
      if (includeContent) {
        const file = await readRegularFile(filePath);
        if (file !== null) {
          entries.push({
            path: name,
            content: file.content,
            updatedAt: file.mtime.toISOString(),
          });
        }
      } else {
        try {
          const metadata = await fs.lstat(filePath);
          if (metadata.isFile() && !metadata.isSymbolicLink()) {
            entries.push({
              path: name,
              updatedAt: metadata.mtime.toISOString(),
            });
          }
        } catch {}
      }
    }
    return entries.sort((left, right) =>
      right.updatedAt.localeCompare(left.updatedAt),
    );
  }

  async readAccountMemory(
    requestedPath: string,
  ): Promise<CoworkMemoryEntry | null> {
    const context = await this.accountContext();
    const safeName = this.safeMemoryName(requestedPath);
    if (context === null || safeName === null) return null;
    const file = await readRegularFile(
      path.join(this.accountMemoryDirectory(context), safeName),
    );
    return file === null
      ? null
      : {
          path: safeName,
          content: file.content,
          updatedAt: file.mtime.toISOString(),
        };
  }

  async writeAccountMemory(
    requestedPath: string,
    content: string,
  ): Promise<boolean> {
    const context = await this.accountContext();
    const safeName = this.safeMemoryName(requestedPath);
    if (context === null || safeName === null) return false;
    const filePath = path.join(this.accountMemoryDirectory(context), safeName);
    try {
      const metadata = await fs.lstat(filePath);
      if (!metadata.isFile() || metadata.isSymbolicLink()) return false;
      await writeAtomic(filePath, content);
      return true;
    } catch {
      return false;
    }
  }

  async deleteAccountMemory(requestedPath: string): Promise<boolean> {
    const context = await this.accountContext();
    const safeName = this.safeMemoryName(requestedPath);
    if (context === null || safeName === null) return false;
    const filePath = path.join(this.accountMemoryDirectory(context), safeName);
    try {
      const metadata = await fs.lstat(filePath);
      if (!metadata.isFile() || metadata.isSymbolicLink()) return false;
      await fs.unlink(filePath);
      return true;
    } catch {
      return false;
    }
  }

  async resetMemories(): Promise<boolean> {
    const context = await this.accountContext();
    if (context === null) return false;
    await this.resetDirectory(this.accountMemoryDirectory(context));
    const spacesDirectory = path.join(this.accountRoot(context), "spaces");
    let spaces: import("node:fs").Dirent[] = [];
    try {
      spaces = await fs.readdir(spacesDirectory, { withFileTypes: true });
    } catch {}
    for (const space of spaces) {
      if (space.isDirectory()) {
        await this.resetDirectory(
          path.join(spacesDirectory, space.name, "memory"),
        );
      }
    }
    return true;
  }

  private async accountContext(): Promise<AccountContext | null> {
    const accountId = getClaudeAccountDetails()?.accountUuid;
    if (accountId === undefined) return null;
    const cookies = await this.browserSession.cookies.get({
      url: "https://claude.ai",
      name: "lastActiveOrg",
    });
    const orgId = cookies
      .map((cookie) => cookie.value)
      .find((value) => UUID_PATTERN.test(value));
    return orgId === undefined ? null : { accountId, orgId };
  }

  private accountRoot(context: AccountContext): string {
    return path.join(
      this.app.getPath("userData"),
      "local-agent-mode-sessions",
      context.accountId,
      context.orgId,
    );
  }

  private globalMemoryPath(context: AccountContext): string {
    return path.join(this.accountRoot(context), "memory", "CLAUDE.md");
  }

  private accountMemoryDirectory(context: AccountContext): string {
    return path.join(this.accountRoot(context), "memory", "memory");
  }

  private safeMemoryName(requestedPath: string): string | null {
    const name = path.basename(requestedPath);
    return this.isSafeMemoryName(name) ? name : null;
  }

  private isSafeMemoryName(name: string): boolean {
    return name.endsWith(".md") && name.toLowerCase() !== "memory.md";
  }

  private async resetDirectory(directory: string): Promise<void> {
    try {
      await fs.rm(directory, { recursive: true, force: true });
      await fs.mkdir(directory, { recursive: true, mode: 0o700 });
    } catch (error) {
      desktopLogger.warning("[CoworkMemory] failed to clear memory directory", {
        directory,
        error: error instanceof Error ? error.message : String(error),
      });
    }
  }
}
