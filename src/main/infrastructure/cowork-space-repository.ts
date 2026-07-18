// Restored from ref/.vite/build/index.js

import { promises as fs } from "node:fs";
import path from "node:path";
import type { App, Session } from "electron";
import {
  type CoworkSpace,
  type RemoteSessionSpace,
  normalizeRemoteSessionId,
  parseCoworkSpace,
  parseRemoteSessionSpace,
} from "../domain/cowork-space";
import { getClaudeAccountDetails } from "../domain/account-details";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type CoworkAccountContext = { accountId: string; orgId: string };

export class CoworkSpaceRepository {
  constructor(
    private readonly app: App,
    private readonly browserSession: Session,
  ) {}

  async context(): Promise<CoworkAccountContext | null> {
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

  async loadSpaces(
    context: CoworkAccountContext,
  ): Promise<Map<string, CoworkSpace>> {
    const parsed = await this.readJson(this.spacesPath(context));
    const values =
      typeof parsed === "object" &&
      parsed !== null &&
      "spaces" in parsed &&
      Array.isArray(parsed.spaces)
        ? parsed.spaces
        : [];
    const spaces = new Map<string, CoworkSpace>();
    for (const value of values) {
      const space = parseCoworkSpace(value);
      if (space !== null) spaces.set(space.id, space);
    }
    return spaces;
  }

  async saveSpaces(
    context: CoworkAccountContext,
    spaces: ReadonlyMap<string, CoworkSpace>,
  ): Promise<void> {
    await this.writeJson(this.spacesPath(context), {
      spaces: [...spaces.values()],
    });
  }

  async loadRemoteSessionSpaces(
    context: CoworkAccountContext,
  ): Promise<Map<string, RemoteSessionSpace>> {
    const parsed = await this.readJson(this.remoteSpacesPath(context));
    const values =
      typeof parsed === "object" &&
      parsed !== null &&
      "entries" in parsed &&
      Array.isArray(parsed.entries)
        ? parsed.entries
        : [];
    const entries = new Map<string, RemoteSessionSpace>();
    for (const value of values) {
      const entry = parseRemoteSessionSpace(value);
      if (entry !== null) entries.set(entry.sessionId, entry);
    }
    return entries;
  }

  async saveRemoteSessionSpaces(
    context: CoworkAccountContext,
    entries: ReadonlyMap<string, RemoteSessionSpace>,
  ): Promise<void> {
    await this.writeJson(this.remoteSpacesPath(context), {
      entries: [...entries.values()],
    });
  }

  autoMemoryDirectory(context: CoworkAccountContext, spaceId: string): string {
    return path.join(this.accountRoot(context), "spaces", spaceId, "memory");
  }

  normalizeSessionId(sessionId: string): string {
    return normalizeRemoteSessionId(sessionId);
  }

  private accountRoot(context: CoworkAccountContext): string {
    return path.join(
      this.app.getPath("userData"),
      "local-agent-mode-sessions",
      context.accountId,
      context.orgId,
    );
  }

  private spacesPath(context: CoworkAccountContext): string {
    return path.join(this.accountRoot(context), "spaces.json");
  }

  private remoteSpacesPath(context: CoworkAccountContext): string {
    return path.join(this.accountRoot(context), "remote-session-spaces.json");
  }

  private async readJson(filePath: string): Promise<unknown> {
    try {
      return JSON.parse(await fs.readFile(filePath, "utf8")) as unknown;
    } catch {
      return null;
    }
  }

  private async writeJson(filePath: string, value: unknown): Promise<void> {
    await fs.mkdir(path.dirname(filePath), { recursive: true, mode: 0o700 });
    const temporaryPath = `${filePath}.${process.pid}.tmp`;
    await fs.writeFile(temporaryPath, `${JSON.stringify(value, null, 2)}\n`, {
      mode: 0o600,
    });
    await fs.rename(temporaryPath, filePath);
  }
}
