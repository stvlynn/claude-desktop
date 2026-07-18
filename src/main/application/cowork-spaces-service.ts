// Restored from ref/.vite/build/index.js

import { randomUUID } from "node:crypto";
import { EventEmitter } from "node:events";
import { promises as fs } from "node:fs";
import path from "node:path";
import { shell } from "electron";
import { lookup as lookupMimeType } from "mime-types";
import {
  type CoworkSpace,
  type CoworkSpaceEvent,
  type CoworkSpaceLink,
  type RemoteSessionSpace,
} from "../domain/cowork-space";
import {
  type CoworkAccountContext,
  CoworkSpaceRepository,
} from "../infrastructure/cowork-space-repository";

const MAX_FILE_BYTES = 50 * 1024 * 1024;
const IGNORED_NAMES = new Set([".DS_Store", "node_modules"]);

type SpaceCreate = {
  name: string;
  description?: string;
  instructions?: string;
  origin?: string;
};

type SpaceUpdate = Partial<
  Pick<
    CoworkSpace,
    | "name"
    | "description"
    | "instructions"
    | "ccdFolderPath"
    | "autoMountFolders"
  >
>;

type CoworkSpacesState = {
  context: CoworkAccountContext;
  spaces: Map<string, CoworkSpace>;
  remoteEntries: Map<string, RemoteSessionSpace>;
};

export class CoworkSpacesService extends EventEmitter {
  constructor(private readonly repository: CoworkSpaceRepository) {
    super();
  }

  async getAllSpaces(): Promise<CoworkSpace[]> {
    const state = await this.load();
    return state === null ? [] : [...state.spaces.values()];
  }

  async getSpace(spaceId: string): Promise<CoworkSpace | null> {
    const state = await this.load();
    return state?.spaces.get(spaceId) ?? null;
  }

  async createSpace(input: SpaceCreate): Promise<CoworkSpace | null> {
    const state = await this.load();
    const name = input.name.trim();
    if (state === null || name.length === 0) return null;
    const now = Date.now();
    const space: CoworkSpace = {
      id: randomUUID(),
      name: name.slice(0, 100),
      description: input.description?.trim().slice(0, 500) || undefined,
      folders: [],
      projects: [],
      links: [],
      instructions: input.instructions,
      origin: input.origin === "auto" ? "auto" : "user",
      createdAt: now,
      updatedAt: now,
    };
    state.spaces.set(space.id, space);
    await this.persist(state);
    this.dispatch({ type: "created", space });
    return space;
  }

  async updateSpace(
    spaceId: string,
    update: SpaceUpdate,
    preserveOrigin = false,
  ): Promise<CoworkSpace | null> {
    const state = await this.load();
    const space = state?.spaces.get(spaceId);
    if (state === null || space === undefined) return null;
    if (update.name !== undefined && update.name.trim()) {
      space.name = update.name.trim().slice(0, 100);
    }
    if (update.description !== undefined) {
      space.description = update.description.trim().slice(0, 500) || undefined;
    }
    if (update.instructions !== undefined)
      space.instructions = update.instructions;
    if (update.ccdFolderPath !== undefined) {
      space.ccdFolderPath = update.ccdFolderPath || undefined;
    }
    if (update.autoMountFolders !== undefined) {
      space.autoMountFolders = update.autoMountFolders;
    }
    if (
      !preserveOrigin &&
      space.origin === "auto" &&
      (update.name !== undefined ||
        update.description !== undefined ||
        update.instructions !== undefined)
    ) {
      space.origin = "user";
    }
    space.updatedAt = Date.now();
    await this.persist(state);
    this.dispatch({ type: "updated", space });
    return space;
  }

  async deleteSpace(spaceId: string): Promise<boolean> {
    const state = await this.load();
    const space = state?.spaces.get(spaceId);
    if (state === null || space === undefined) return false;
    state.spaces.delete(spaceId);
    for (const [sessionId, entry] of state.remoteEntries) {
      if (entry.spaceId !== spaceId) continue;
      if (entry.folders.length === 0) state.remoteEntries.delete(sessionId);
      else {
        state.remoteEntries.set(sessionId, {
          ...entry,
          spaceId: undefined,
          memoryEnabled: undefined,
        });
      }
    }
    await Promise.all([
      this.repository.saveSpaces(state.context, state.spaces),
      this.repository.saveRemoteSessionSpaces(
        state.context,
        state.remoteEntries,
      ),
    ]);
    this.dispatch({ type: "deleted", space });
    return true;
  }

  async addFolderToSpace(
    spaceId: string,
    folderPath: string,
  ): Promise<CoworkSpace | null> {
    const real = await this.safeDirectory(folderPath);
    if (real === null) return null;
    return this.mutateSpace(spaceId, (space) => {
      if (!space.folders.some((folder) => folder.path === real)) {
        space.folders.push({ path: real });
      }
    });
  }

  removeFolderFromSpace(spaceId: string, folderPath: string) {
    return this.mutateSpace(spaceId, (space) => {
      space.folders = space.folders.filter(
        (folder) => folder.path !== folderPath,
      );
      if (space.ccdFolderPath === folderPath) space.ccdFolderPath = undefined;
    });
  }

  addProjectToSpace(spaceId: string, projectUuid: string) {
    return this.mutateSpace(spaceId, (space) => {
      if (!space.projects.some((project) => project.uuid === projectUuid)) {
        space.projects.push({ uuid: projectUuid });
      }
    });
  }

  removeProjectFromSpace(spaceId: string, projectUuid: string) {
    return this.mutateSpace(spaceId, (space) => {
      space.projects = space.projects.filter(
        (project) => project.uuid !== projectUuid,
      );
    });
  }

  addLinkToSpace(spaceId: string, link: CoworkSpaceLink) {
    return this.mutateSpace(spaceId, (space) => {
      if (!space.links.some((candidate) => candidate.url === link.url)) {
        space.links.push(link);
      }
    });
  }

  removeLinkFromSpace(spaceId: string, url: string) {
    return this.mutateSpace(spaceId, (space) => {
      space.links = space.links.filter((link) => link.url !== url);
    });
  }

  async getAutoMemoryDir(spaceId: string): Promise<string | null> {
    const state = await this.load();
    if (state === null || !state.spaces.has(spaceId)) return null;
    return this.repository.autoMemoryDirectory(state.context, spaceId);
  }

  async readSpaceMemoryIndex(spaceId: string): Promise<string | null> {
    const directory = await this.getAutoMemoryDir(spaceId);
    if (directory === null) return null;
    try {
      return await fs.readFile(path.join(directory, "MEMORY.md"), "utf8");
    } catch {
      return null;
    }
  }

  async listFolderContents(spaceId: string, requestedPath: string) {
    const resolved = await this.resolveAllowedPath(spaceId, requestedPath);
    if (resolved === null) return [];
    try {
      return (await fs.readdir(resolved, { withFileTypes: true }))
        .filter((entry) => !IGNORED_NAMES.has(entry.name))
        .map((entry) => ({
          name: entry.name,
          path: path.join(requestedPath, entry.name),
          isDirectory: entry.isDirectory(),
        }));
    } catch {
      return [];
    }
  }

  async readFileContents(spaceId: string, requestedPath: string) {
    const resolved = await this.resolveAllowedPath(spaceId, requestedPath);
    if (resolved === null) return null;
    try {
      const metadata = await fs.stat(resolved);
      if (!metadata.isFile() || metadata.size > MAX_FILE_BYTES) return null;
      const bytes = await fs.readFile(resolved);
      const mimeType = lookupMimeType(path.extname(resolved)) || "text/plain";
      const textual =
        mimeType.startsWith("text/") ||
        [
          "application/json",
          "application/xml",
          "application/javascript",
          "application/typescript",
          "image/svg+xml",
        ].includes(mimeType);
      return {
        content: bytes.toString(textual ? "utf8" : "base64"),
        mimeType,
        fileName: path.basename(resolved),
        encoding: textual ? "utf-8" : "base64",
      };
    } catch {
      return null;
    }
  }

  async openFile(spaceId: string, requestedPath: string): Promise<boolean> {
    const resolved = await this.resolveAllowedPath(spaceId, requestedPath);
    if (resolved === null) return false;
    return (await shell.openPath(resolved)) === "";
  }

  async createSpaceFolder(
    parentPath: string,
    folderName: string,
  ): Promise<string | null> {
    const safeName = folderName.trim();
    if (
      safeName.length === 0 ||
      safeName === "." ||
      safeName === ".." ||
      path.basename(safeName) !== safeName
    ) {
      return null;
    }
    const parent = await this.safeDirectory(parentPath);
    if (parent === null) return null;
    let target = path.join(parent, safeName);
    for (let suffix = 0; ; suffix += 1) {
      try {
        await fs.access(target);
        target = path.join(parent, `${safeName} (${suffix + 1})`);
      } catch {
        break;
      }
    }
    await fs.mkdir(target, { recursive: false, mode: 0o700 });
    return target;
  }

  async copyFilesToSpaceFolder(
    spaceId: string,
    sourcePaths: string[],
  ): Promise<boolean> {
    const space = await this.getSpace(spaceId);
    if (space === null || space.folders.length === 0) return false;
    const destination = await this.safeDirectory(space.folders[0].path);
    if (destination === null) return false;
    try {
      for (const sourcePath of sourcePaths) {
        const real = await fs.realpath(sourcePath);
        const metadata = await fs.stat(real);
        if (metadata.isDirectory()) await this.addFolderToSpace(spaceId, real);
        else if (metadata.isFile()) {
          await fs.copyFile(real, path.join(destination, path.basename(real)));
        }
      }
      return true;
    } catch {
      return false;
    }
  }

  async getRemoteSessionSpaces(): Promise<RemoteSessionSpace[]> {
    const state = await this.load();
    return state === null ? [] : [...state.remoteEntries.values()];
  }

  async setRemoteSessionSpace(entry: RemoteSessionSpace): Promise<boolean> {
    const state = await this.load();
    if (state === null) return false;
    const sessionId = this.repository.normalizeSessionId(entry.sessionId);
    const prior = state.remoteEntries.get(sessionId);
    const normalized: RemoteSessionSpace = {
      ...entry,
      sessionId,
      folders:
        entry.folders.length === 0 && prior?.folders.length
          ? prior.folders
          : entry.folders,
      memoryEnabled:
        prior !== undefined && prior.spaceId !== entry.spaceId
          ? undefined
          : (entry.memoryEnabled ?? prior?.memoryEnabled),
    };
    state.remoteEntries.delete(sessionId);
    state.remoteEntries.set(sessionId, normalized);
    while (state.remoteEntries.size > 1_000) {
      const oldest = state.remoteEntries.keys().next().value as
        string | undefined;
      if (oldest === undefined) break;
      state.remoteEntries.delete(oldest);
    }
    await this.repository.saveRemoteSessionSpaces(
      state.context,
      state.remoteEntries,
    );
    return true;
  }

  async removeRemoteSessionSpace(sessionId: string): Promise<boolean> {
    const state = await this.load();
    if (state === null) return false;
    const removed = state.remoteEntries.delete(
      this.repository.normalizeSessionId(sessionId),
    );
    if (removed) {
      await this.repository.saveRemoteSessionSpaces(
        state.context,
        state.remoteEntries,
      );
    }
    return removed;
  }

  classifySessions(): [] {
    return [];
  }

  summarizeSpace(): null {
    return null;
  }

  async setAutoDescription(spaceId: string, description: string) {
    const space = await this.getSpace(spaceId);
    return space?.origin === "auto"
      ? this.updateSpace(spaceId, { description }, true)
      : null;
  }

  private async mutateSpace(
    spaceId: string,
    mutate: (space: CoworkSpace) => void,
  ): Promise<CoworkSpace | null> {
    const state = await this.load();
    const space = state?.spaces.get(spaceId);
    if (state === null || space === undefined) return null;
    mutate(space);
    space.updatedAt = Date.now();
    await this.persist(state);
    this.dispatch({ type: "updated", space });
    return space;
  }

  private async load(): Promise<CoworkSpacesState | null> {
    const context = await this.repository.context();
    if (context === null) return null;
    const [spaces, remoteEntries] = await Promise.all([
      this.repository.loadSpaces(context),
      this.repository.loadRemoteSessionSpaces(context),
    ]);
    return { context, spaces, remoteEntries };
  }

  private persist(state: CoworkSpacesState) {
    return this.repository.saveSpaces(state.context, state.spaces);
  }

  private dispatch(event: CoworkSpaceEvent): void {
    this.emit("space-event", event);
  }

  private async safeDirectory(candidate: string): Promise<string | null> {
    if (!path.isAbsolute(candidate) || candidate.includes("\0")) return null;
    if (process.platform === "win32" && candidate.startsWith("\\\\")) {
      return null;
    }
    try {
      const real = await fs.realpath(candidate);
      return (await fs.stat(real)).isDirectory() ? real : null;
    } catch {
      return null;
    }
  }

  private async resolveAllowedPath(
    spaceId: string,
    candidate: string,
  ): Promise<string | null> {
    if (!path.isAbsolute(candidate) || candidate.includes("\0")) return null;
    const space = await this.getSpace(spaceId);
    if (space === null) return null;
    const memory = await this.getAutoMemoryDir(spaceId);
    const roots = [
      ...space.folders.map((folder) => folder.path),
      ...(memory === null ? [] : [memory]),
    ];
    try {
      const real = await fs.realpath(candidate);
      for (const root of roots) {
        const realRoot = await fs.realpath(root).catch(() => null);
        if (realRoot === null) continue;
        const relative = path.relative(realRoot, real);
        if (
          relative === "" ||
          (!relative.startsWith("..") && !path.isAbsolute(relative))
        ) {
          return real;
        }
      }
    } catch {}
    return null;
  }
}
