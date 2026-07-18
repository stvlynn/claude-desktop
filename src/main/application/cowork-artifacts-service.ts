// Restored from ref/.vite/build/index.js

import { EventEmitter } from "node:events";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { App, Session } from "electron";
import { getClaudeAccountDetails } from "../domain/account-details";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const ARTIFACT_ID = /^[a-z0-9_-]+$/;
type ArtifactMetadata = Record<string, unknown> & {
  id: string;
  createdAt: number;
  versions?: number[];
};

export class CoworkArtifactsService extends EventEmitter {
  constructor(
    private readonly app: App,
    private readonly browserSession: Session,
    private readonly getUserFilesRoot: () => Promise<string>,
  ) {
    super();
  }

  // GrowthBook flag 2940196192 defaults false in the current bundle.
  getAllArtifacts(): [] {
    return [];
  }

  async getArtifactMetadata(id: string): Promise<unknown> {
    if (!ARTIFACT_ID.test(id)) return null;
    try {
      const html = await fs.readFile(await this.indexPath(id), "utf8");
      const match = html.match(
        /<script type="application\/json" id="cowork-artifact-meta">(.*?)<\/script>/is,
      );
      return match ? (JSON.parse(match[1]) as unknown) : null;
    } catch {
      return null;
    }
  }

  async getArtifactThumbnail(id: string): Promise<string | null> {
    if (!ARTIFACT_ID.test(id)) return null;
    try {
      return (
        await fs.readFile(
          path.join(await this.artifactsRoot(), id, "thumbnail.png"),
        )
      ).toString("base64");
    } catch {
      return null;
    }
  }

  async deleteArtifact(id: string, removeFiles = false): Promise<boolean> {
    const state = await this.loadManifest();
    if (state === null || !state.artifacts.has(id)) return false;
    state.artifacts.delete(id);
    await this.saveManifest(state);
    if (removeFiles && ARTIFACT_ID.test(id)) {
      await fs.rm(path.join(await this.artifactsRoot(), id), {
        recursive: true,
        force: true,
      });
    }
    this.emit("changed");
    return true;
  }

  async getArtifactIndexHtmlPath(id: string): Promise<string> {
    if (!ARTIFACT_ID.test(id)) throw new Error("Invalid artifact id");
    return this.indexPath(id);
  }

  showArtifact(): false {
    return false;
  }

  hideArtifact(): false {
    return false;
  }

  parkAndCaptureArtifact(): null {
    return null;
  }

  reloadArtifactView(): false {
    return false;
  }

  printArtifactToPdf(): null {
    return null;
  }

  async restoreArtifactVersion(id: string, version: number): Promise<boolean> {
    const state = await this.loadManifest();
    const artifact = state?.artifacts.get(id);
    if (
      state === null ||
      artifact === undefined ||
      !artifact.versions?.includes(version) ||
      !ARTIFACT_ID.test(id)
    ) {
      return false;
    }
    const root = await this.artifactsRoot();
    try {
      const source = path.join(root, id, "versions", `${version}.html`);
      const target = path.join(root, id, "index.html");
      const temporary = `${target}.${process.pid}.tmp`;
      await fs.copyFile(source, temporary);
      await fs.rename(temporary, target);
      artifact.updatedAt = Date.now();
      await this.saveManifest(state);
      this.emit("changed");
      return true;
    } catch {
      return false;
    }
  }

  setArtifactStarred(id: string, starred: boolean) {
    return this.updateArtifact(id, (artifact) => {
      artifact.isStarred = starred;
    });
  }

  setArtifactLastModifiedSession(id: string, sessionId: string) {
    return this.updateArtifact(id, (artifact) => {
      artifact.lastModifiedBySessionId = sessionId;
    });
  }

  setArtifactMcpTools(id: string, tools: string[]) {
    return this.updateArtifact(id, (artifact) => {
      artifact.mcpTools = tools;
    });
  }

  isSharingEnabled(): false {
    return false;
  }

  isAutoPublishEnabled(): false {
    return false;
  }

  setArtifactAutoPublish(): false {
    return false;
  }

  shareArtifact(): { ok: false; error: string } {
    return { ok: false, error: "Sharing is not enabled." };
  }

  unshareArtifact(): false {
    return false;
  }

  refreshImportedArtifact(): { ok: false; error: string } {
    return { ok: false, error: "Sharing is not enabled." };
  }

  importArtifact(): { ok: false; error: string } {
    return { ok: false, error: "Sharing is not enabled." };
  }

  private async updateArtifact(
    id: string,
    update: (artifact: ArtifactMetadata) => void,
  ): Promise<boolean> {
    const state = await this.loadManifest();
    const artifact = state?.artifacts.get(id);
    if (state === null || artifact === undefined) return false;
    update(artifact);
    await this.saveManifest(state);
    this.emit("changed");
    return true;
  }

  private async context(): Promise<{
    accountId: string;
    orgId: string;
  } | null> {
    const accountId = getClaudeAccountDetails()?.accountUuid;
    if (accountId === undefined) return null;
    const orgId = (
      await this.browserSession.cookies.get({
        url: "https://claude.ai",
        name: "lastActiveOrg",
      })
    )
      .map((cookie) => cookie.value)
      .find((value) => UUID_PATTERN.test(value));
    return orgId === undefined ? null : { accountId, orgId };
  }

  private async loadManifest(): Promise<{
    path: string;
    artifacts: Map<string, ArtifactMetadata>;
  } | null> {
    const context = await this.context();
    if (context === null) return null;
    const manifestPath = path.join(
      this.app.getPath("userData"),
      "local-agent-mode-sessions",
      context.accountId,
      context.orgId,
      "artifacts.json",
    );
    let values: unknown[] = [];
    try {
      const parsed: unknown = JSON.parse(
        await fs.readFile(manifestPath, "utf8"),
      );
      if (Array.isArray(parsed)) values = parsed;
    } catch {}
    const artifacts = new Map<string, ArtifactMetadata>();
    for (const value of values) {
      if (
        typeof value === "object" &&
        value !== null &&
        "id" in value &&
        typeof value.id === "string" &&
        ARTIFACT_ID.test(value.id) &&
        "createdAt" in value &&
        typeof value.createdAt === "number"
      ) {
        artifacts.set(value.id, value as ArtifactMetadata);
      }
    }
    return { path: manifestPath, artifacts };
  }

  private async saveManifest(state: {
    path: string;
    artifacts: Map<string, ArtifactMetadata>;
  }): Promise<void> {
    await fs.mkdir(path.dirname(state.path), { recursive: true, mode: 0o700 });
    const temporary = `${state.path}.${process.pid}.tmp`;
    await fs.writeFile(
      temporary,
      `${JSON.stringify([...state.artifacts.values()], null, 2)}\n`,
      { mode: 0o600 },
    );
    await fs.rename(temporary, state.path);
  }

  private async artifactsRoot(): Promise<string> {
    return path.join(await this.getUserFilesRoot(), "Artifacts");
  }

  private async indexPath(id: string): Promise<string> {
    return path.join(await this.artifactsRoot(), id, "index.html");
  }
}
