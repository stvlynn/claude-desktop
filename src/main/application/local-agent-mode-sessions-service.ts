// Restored from ref/.vite/build/index.js

import { EventEmitter } from "node:events";
import path from "node:path";
import { homedir } from "node:os";
import {
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import { dialog, shell, type App } from "electron";
import type { LocalAgentModeSessionMethod } from "../../shared/contracts/local-agent-mode-sessions";
import type {
  LocalSessionStart,
  SessionEffort,
  SessionPermissionMode,
} from "../domain/local-session";
import { LocalSessionRuntimeService } from "./local-session-runtime-service";
import { normalizeImages } from "./local-session-arguments";
import { LocalSessionMcpService } from "../infrastructure/local-session-mcp-service";
import { LocalSessionFeedbackRepository } from "../infrastructure/local-session-feedback-repository";

type BridgeState = { enabled: boolean; status: "disabled" | "idle" };
type InteractiveAuthState = { status: "idle" | "unavailable"; error?: string };

export class LocalAgentModeSessionsService extends EventEmitter {
  private readonly app: App;
  readonly runtime: LocalSessionRuntimeService;
  private bridgeState: BridgeState = { enabled: false, status: "disabled" };
  private interactiveAuthState: InteractiveAuthState = { status: "idle" };
  private focusedSessionId: string | null = null;
  private draftFolders: string[] = [];
  private readonly mcp: LocalSessionMcpService;
  private readonly feedback: LocalSessionFeedbackRepository;

  constructor(app: App, runtime = new LocalSessionRuntimeService(app)) {
    super();
    this.app = app;
    this.runtime = runtime;
    this.mcp = new LocalSessionMcpService(app);
    this.feedback = new LocalSessionFeedbackRepository(app);
    this.runtime.on("event", (event) => this.emit("onEvent", event));
    this.runtime.on("toolPermissionRequest", (request) =>
      this.emit("onToolPermissionRequest", request),
    );
  }

  async invoke(
    method: LocalAgentModeSessionMethod,
    args: unknown[],
  ): Promise<unknown> {
    switch (method) {
      case "start":
        return this.runtime.start(objectArg<LocalSessionStart>(args, 0));
      case "sendMessage":
        if (
          args[5] !== undefined ||
          args[6] !== undefined ||
          args[7] !== undefined
        ) {
          await this.runtime.updateSession(stringArg(args, 0), {
            widgetToolStates: args[5],
            fileAttachments: args[6],
            contentBlocks: args[7],
          });
        }
        return this.runtime.sendMessage(
          stringArg(args, 0),
          stringArg(args, 1),
          optionalString(args, 4),
          "now",
          normalizeImages(args[2]),
        );
      case "setModel":
        return this.runtime.setModel(
          stringArg(args, 0),
          optionalString(args, 1),
        );
      case "setEffort":
        return this.runtime.setEffort(stringArg(args, 0), effortArg(args, 1));
      case "setExtendedThinking":
        return this.runtime.setExtendedThinking(
          stringArg(args, 0),
          booleanArg(args, 1),
        );
      case "setPermissionMode":
        return this.runtime.setPermissionMode(
          stringArg(args, 0),
          permissionArg(args, 1),
        );
      case "setChromePermissionMode":
        return { mode: stringArg(args, 1) };
      case "stop":
        return this.runtime.stop(stringArg(args, 0));
      case "stopTask":
        return this.runtime.stopTask(stringArg(args, 0), stringArg(args, 1));
      case "rewind":
        return this.runtime.rewind(stringArg(args, 0), stringArg(args, 1));
      case "archive":
        return this.runtime.archive(
          stringArg(args, 0),
          args[1] === undefined ? true : booleanArg(args, 1),
        );
      case "delete":
        return this.runtime.delete(stringArg(args, 0));
      case "updateSession":
        return this.runtime.updateSession(
          stringArg(args, 0),
          objectArg(args, 1),
        );
      case "getSession":
        return this.runtime.getSession(stringArg(args, 0));
      case "getAll":
        return this.runtime.getAll();
      case "getTranscript":
        return this.runtime.getTranscript(stringArg(args, 0));
      case "searchSessions":
        return this.runtime.searchSessions(stringArg(args, 0));
      case "respondToToolPermission": {
        this.runtime.resolveToolPermission(
          stringArg(args, 0),
          stringArg(args, 1),
          permissionMessage(args[2]),
        );
        return undefined;
      }
      case "openOutputsDir":
        return shell.openPath(this.runtime.outputsDir(stringArg(args, 0)));
      case "getSupportedCommands":
        return this.runtime.supportedCommandsFor(
          optionalObjectArg<{ sessionId?: string; cwd?: string }>(args, 0),
        );
      case "getSessionsForScheduledTask":
        return this.sessionsForScheduledTask(stringArg(args, 0));
      case "getTrustedFolders":
        return this.readStringList("trusted-folders.json");
      case "addTrustedFolder":
        return this.updateStringList(
          "trusted-folders.json",
          stringArg(args, 0),
          true,
        );
      case "removeTrustedFolder":
        return this.updateStringList(
          "trusted-folders.json",
          stringArg(args, 0),
          false,
        );
      case "isFolderTrusted":
        return (await this.readStringList("trusted-folders.json")).includes(
          path.resolve(stringArg(args, 0)),
        );
      case "setDraftSessionFolders":
        this.draftFolders = stringArrayArg(args, 0);
        return undefined;
      case "getDefaultWorkspaceFolders":
        return this.draftFolders;
      case "browseAndGrantRemoteSessionFolder":
        return this.browseFolder();
      case "grantRemoteSessionFolder":
        return this.grantRemoteFolders([stringArg(args, 1)]);
      case "grantRemoteSessionFolders":
        return this.grantRemoteFolders(stringArrayArg(args, 1));
      case "clearRemoteSessionFolderGrants":
        return this.writeStringList("remote-folder-grants.json", []);
      case "addFolderToSession":
        return this.addFolderToSession(stringArg(args, 0), stringArg(args, 1));
      case "setMcpServers":
        return this.setMcpSelections(stringArg(args, 0), arrayArg(args, 1));
      case "replaceRemoteMcpServers":
        return this.replaceRemoteMcpServers(
          stringArg(args, 0),
          arrayArg(args, 1),
        );
      case "replaceEnabledMcpTools":
        return this.replaceEnabledMcpTools(
          stringArg(args, 0),
          objectArg(args, 1),
        );
      case "setFocusedSession":
        this.focusedSessionId = optionalString(args, 0) ?? null;
        return undefined;
      case "listLocalSkills":
        return this.listSkills();
      case "getLocalSkillFiles":
        return this.getSkillFiles(stringArg(args, 0));
      case "saveLocalSkill":
        return this.saveSkill(
          stringArg(args, 0),
          stringArg(args, 1),
          objectArg<Record<string, string>>(args, 2),
          booleanArg(args, 3),
        );
      case "setLocalSkillEnabled":
        return this.setSkillEnabled(stringArg(args, 0), booleanArg(args, 1));
      case "deleteLocalSkill":
        return rm(this.skillRoot(stringArg(args, 0)), {
          recursive: true,
          force: true,
        });
      case "revealLocalSkill":
        shell.showItemInFolder(this.skillRoot(stringArg(args, 0)));
        return undefined;
      case "syncSkills":
        return this.listSkills();
      case "getSessionsBridgeEnabled":
        return this.bridgeState.enabled;
      case "setSessionsBridgeEnabled":
        return this.setBridgeEnabled(booleanArg(args, 0));
      case "getBridgeConsent":
        return false;
      case "resetBridge":
      case "resetBridgeSession":
      case "abandonBridgeEnvironment":
        this.setBridgeEnabled(false);
        return undefined;
      case "kickBridgePoll":
        return this.bridgeState;
      case "getDirectMcpServerStatuses":
        return [];
      case "getManagedAskToolNames":
        return [];
      case "triggerInteractiveAuth":
        return this.setInteractiveAuthUnavailable();
      case "revokeInteractiveAuth":
      case "cancelInteractiveAuth":
        this.interactiveAuthState = { status: "idle" };
        this.emit("interactiveAuthChanged", this.interactiveAuthState);
        return undefined;
      case "requestFolderTccAccess":
      case "requestDocumentsTccAccess":
        return false;
      case "noteCuWindowMentions":
      case "signalSessionIntent":
      case "respondDirectoryServers":
      case "respondPluginSearch":
      case "respondSlashMenuSkills":
      case "respondBridgePermissionPreflight":
      case "releaseRemoteCuLock":
      case "refetchMyAccess":
        return undefined;
      case "shareSession":
        return {
          success: false,
          error: "Session sharing requires the sessions bridge.",
        };
      case "submitTranscriptFeedback":
        return this.feedback.append(stringArg(args, 0), args[1]);
      case "getTranscriptFeedback":
        return this.feedback.get(stringArg(args, 0));
      case "deleteBridgeSession":
      case "deleteBridgeAgentMemory":
        return false;
      case "startWatchRecording":
        return { ok: false, error: "Watch recording is unavailable." };
      case "takeHeldWatchRecording":
        return null;
      case "getAppIconForBundleId":
        return null;
      case "authorizeDirectMcpServer":
      case "disconnectDirectMcpServer":
        return { ok: false, error: "Direct MCP server is not configured." };
      case "mcpCallTool":
        return this.mcpCallTool(args);
      case "mcpReadResource":
        return this.mcpReadResource(args);
      case "mcpListResources":
        return this.mcpListResources(args);
      case "mcpAuthenticate":
        return this.runtime.authenticateMcpServer(
          stringArg(args, 0),
          stringArg(args, 1),
        );
      case "mcpReconnect":
        return this.reconnectMcp(stringArg(args, 0), stringArg(args, 1));
      case "mcpSubmitOAuthCallbackUrl":
        return this.runtime.submitMcpOAuthCallback(
          stringArg(args, 0),
          stringArg(args, 1),
          stringArg(args, 2),
        );
      case "directMcpCallTool":
      case "directMcpReadResource":
      case "directMcpListResources":
        throw new Error(
          "Direct MCP operation requires a configured direct server",
        );
    }
  }

  getBridgeState(): BridgeState {
    return { ...this.bridgeState };
  }
  getInteractiveAuthState(): InteractiveAuthState {
    return { ...this.interactiveAuthState };
  }

  dispose(): void {
    void this.mcp.dispose();
    this.removeAllListeners();
  }

  private async setMcpSelections(sessionId: string, values: unknown[]) {
    const session = await this.requireSession(sessionId);
    const enabled = metadataBooleanMap(session.metadata.enabledMcpTools);
    for (const value of values) {
      const selection = mcpSelection(value);
      for (const toolKey of selection.toolKeys) {
        enabled[toolKey] = selection.enabled;
      }
    }
    await this.runtime.updateSession(sessionId, { enabledMcpTools: enabled });
    return { enabledMcpTools: enabled };
  }

  private async replaceRemoteMcpServers(sessionId: string, values: unknown[]) {
    const session = await this.requireSession(sessionId);
    const servers = values.map(remoteMcpServer);
    const enabledMcpTools = metadataBooleanMap(
      session.metadata.enabledMcpTools,
    );
    await this.runtime.updateSession(sessionId, {
      remoteMcpServersConfig: servers,
    });
    return { enabledMcpTools };
  }

  private async replaceEnabledMcpTools(
    sessionId: string,
    value: Record<string, unknown>,
  ) {
    const enabledMcpTools = metadataBooleanMap(value.tools);
    await this.runtime.updateSession(sessionId, { enabledMcpTools });
    return { enabledMcpTools };
  }

  private async mcpCallTool(args: unknown[]) {
    const sessionId = stringArg(args, 0);
    const session = await this.requireSession(sessionId);
    return this.mcp.callTool(
      sessionId,
      stringArg(args, 1),
      stringArg(args, 2),
      optionalObjectArg<Record<string, unknown>>(args, 3) ?? {},
      session.mcpServers ?? {},
    );
  }

  private async mcpReadResource(args: unknown[]) {
    const sessionId = stringArg(args, 0);
    const session = await this.requireSession(sessionId);
    return this.mcp.readResource(
      sessionId,
      stringArg(args, 1),
      stringArg(args, 2),
      session.mcpServers ?? {},
    );
  }

  private async mcpListResources(args: unknown[]) {
    const sessionId = stringArg(args, 0);
    const session = await this.requireSession(sessionId);
    return this.mcp.listResources(
      sessionId,
      stringArg(args, 1),
      session.mcpServers ?? {},
    );
  }

  private async reconnectMcp(sessionId: string, serverName: string) {
    const session = await this.requireSession(sessionId);
    await Promise.allSettled([
      this.runtime.reconnectMcpServer(sessionId, serverName),
      this.mcp.reconnect(sessionId, serverName, session.mcpServers ?? {}),
    ]);
    return this.runtime.mcpServerStatus(sessionId);
  }

  private async requireSession(sessionId: string) {
    const session = await this.runtime.getSession(sessionId);
    if (!session) throw new Error(`Session not found: ${sessionId}`);
    return session;
  }

  private async sessionsForScheduledTask(taskId: string) {
    return (await this.runtime.getAll()).filter(
      (session) => session.scheduledTaskId === taskId,
    );
  }
  private async browseFolder() {
    const result = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    if (result.canceled || !result.filePaths[0]) return { ok: false };
    await this.grantRemoteFolders([result.filePaths[0]]);
    return { ok: true, folderPath: result.filePaths[0] };
  }
  private async grantRemoteFolders(folders: string[]) {
    const current = await this.readStringList("remote-folder-grants.json");
    const granted = [
      ...new Set([
        ...current,
        ...folders.map((folder) => path.resolve(folder)),
      ]),
    ];
    await this.writeStringList("remote-folder-grants.json", granted);
    return { granted, addedDirectoryMountPaths: folders };
  }
  private async addFolderToSession(sessionId: string, folder: string) {
    const session = await this.runtime.getSession(sessionId);
    if (!session) throw new Error("Session not found");
    session.additionalDirectories = [
      ...new Set([...session.additionalDirectories, path.resolve(folder)]),
    ];
    return this.runtime.updateSession(sessionId, {
      additionalDirectories: session.additionalDirectories,
    });
  }
  private async listSkills() {
    await mkdir(this.skillsRoot, { recursive: true, mode: 0o700 });
    const disabled = await this.readStringList("disabled-skills.json");
    const entries = await readdir(this.skillsRoot, { withFileTypes: true });
    return Promise.all(
      entries
        .filter((entry) => entry.isDirectory())
        .map(async (entry) => {
          const content = await readFile(
            path.join(this.skillsRoot, entry.name, "SKILL.md"),
            "utf8",
          ).catch(() => "");
          return {
            name: entry.name,
            description: frontmatterDescription(content),
            location: path.join(this.skillsRoot, entry.name, "SKILL.md"),
            enabled: !disabled.includes(entry.name),
          };
        }),
    );
  }
  private async getSkillFiles(name: string) {
    const root = this.skillRoot(name);
    const files = await readdir(root, { withFileTypes: true });
    return Promise.all(
      files
        .filter((entry) => entry.isFile())
        .map(async (entry) => ({
          path: entry.name,
          content: await readFile(path.join(root, entry.name), "utf8"),
        })),
    );
  }
  private async saveSkill(
    name: string,
    content: string,
    files: Record<string, string>,
    enabled: boolean,
  ) {
    const root = this.skillRoot(name);
    await mkdir(root, { recursive: true, mode: 0o700 });
    await writeFile(path.join(root, "SKILL.md"), content, { mode: 0o600 });
    for (const [relative, value] of Object.entries(files)) {
      if (relative !== path.basename(relative))
        throw new Error("Skill attachment path must be a filename");
      await writeFile(path.join(root, relative), value, { mode: 0o600 });
    }
    await this.setSkillEnabled(name, enabled);
    return { ok: true };
  }
  private async setSkillEnabled(name: string, enabled: boolean) {
    const disabled = new Set(await this.readStringList("disabled-skills.json"));
    if (enabled) disabled.delete(name);
    else disabled.add(name);
    await this.writeStringList("disabled-skills.json", [...disabled]);
    return { ok: true };
  }
  private setBridgeEnabled(enabled: boolean): void {
    this.bridgeState = { enabled, status: enabled ? "idle" : "disabled" };
    this.emit("bridgeStateChanged", this.bridgeState);
  }
  private setInteractiveAuthUnavailable() {
    this.interactiveAuthState = {
      status: "unavailable",
      error: "Interactive bridge authentication is unavailable.",
    };
    this.emit("interactiveAuthChanged", this.interactiveAuthState);
    return this.interactiveAuthState;
  }
  private async updateStringList(file: string, value: string, add: boolean) {
    const values = new Set(await this.readStringList(file));
    if (add) values.add(path.resolve(value));
    else values.delete(path.resolve(value));
    const result = [...values];
    await this.writeStringList(file, result);
    return result;
  }
  private async readStringList(file: string): Promise<string[]> {
    try {
      const value = JSON.parse(
        await readFile(path.join(this.stateRoot, file), "utf8"),
      ) as unknown;
      return Array.isArray(value)
        ? value.filter((item): item is string => typeof item === "string")
        : [];
    } catch {
      return [];
    }
  }
  private async writeStringList(file: string, value: string[]): Promise<void> {
    await mkdir(this.stateRoot, { recursive: true, mode: 0o700 });
    const target = path.join(this.stateRoot, file);
    const temporary = `${target}.${process.pid}.tmp`;
    await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, {
      mode: 0o600,
    });
    await rename(temporary, target);
  }
  private get stateRoot(): string {
    return path.join(this.app.getPath("userData"), "agent-mode");
  }
  private get skillsRoot(): string {
    return path.join(
      process.env.CLAUDE_CONFIG_DIR ?? path.join(homedir(), ".claude"),
      "skills",
    );
  }
  private skillRoot(name: string): string {
    if (!/^[A-Za-z0-9][A-Za-z0-9_-]{0,127}$/.test(name))
      throw new Error("Invalid skill name");
    return path.join(this.skillsRoot, name);
  }
}

function stringArg(args: unknown[], index: number): string {
  const value = args[index];
  if (typeof value !== "string")
    throw new TypeError(`Argument ${index} must be a string`);
  return value;
}
function optionalString(args: unknown[], index: number): string | undefined {
  const value = args[index];
  if (value === undefined || value === null) return undefined;
  return stringArg(args, index);
}
function booleanArg(args: unknown[], index: number): boolean {
  const value = args[index];
  if (typeof value !== "boolean")
    throw new TypeError(`Argument ${index} must be a boolean`);
  return value;
}
function stringArrayArg(args: unknown[], index: number): string[] {
  const value = args[index];
  if (!Array.isArray(value) || !value.every((item) => typeof item === "string"))
    throw new TypeError(`Argument ${index} must be a string array`);
  return value;
}
function objectArg<T extends object = Record<string, unknown>>(
  args: unknown[],
  index: number,
): T {
  const value = args[index];
  if (!value || typeof value !== "object" || Array.isArray(value))
    throw new TypeError(`Argument ${index} must be an object`);
  return value as T;
}
function optionalObjectArg<T extends object = Record<string, unknown>>(
  args: unknown[],
  index: number,
): T | undefined {
  if (args[index] === undefined || args[index] === null) return undefined;
  return objectArg<T>(args, index);
}
function arrayArg(args: unknown[], index: number): unknown[] {
  const value = args[index];
  if (!Array.isArray(value)) {
    throw new TypeError(`Argument ${index} must be an array`);
  }
  return value;
}
function effortArg(args: unknown[], index: number): SessionEffort {
  const value = stringArg(args, index);
  if (!["low", "medium", "high", "xhigh", "max"].includes(value))
    throw new TypeError("Invalid effort");
  return value as SessionEffort;
}
function permissionArg(args: unknown[], index: number): SessionPermissionMode {
  const value = stringArg(args, index);
  if (
    ![
      "default",
      "acceptEdits",
      "bypassPermissions",
      "plan",
      "dontAsk",
      "auto",
    ].includes(value)
  )
    throw new TypeError("Invalid permission mode");
  return value as SessionPermissionMode;
}

function permissionMessage(value: unknown): string | undefined {
  if (typeof value === "string") return value;
  if (isRecord(value) && typeof value.message === "string") {
    return value.message;
  }
  return undefined;
}

function metadataBooleanMap(value: unknown): Record<string, boolean> {
  if (!isRecord(value)) return {};
  const entries = Object.entries(value);
  if (!entries.every(([, enabled]) => typeof enabled === "boolean")) {
    throw new TypeError("MCP tool state values must be booleans");
  }
  return Object.fromEntries(entries) as Record<string, boolean>;
}

function mcpSelection(value: unknown): {
  enabled: boolean;
  toolKeys: string[];
} {
  if (!isRecord(value) || typeof value.enabled !== "boolean") {
    throw new TypeError("Invalid MCP server selection");
  }
  if (
    value.toolKeys !== undefined &&
    (!Array.isArray(value.toolKeys) ||
      !value.toolKeys.every((key) => typeof key === "string"))
  ) {
    throw new TypeError("MCP tool keys must be strings");
  }
  return {
    enabled: value.enabled,
    toolKeys: (value.toolKeys ?? []) as string[],
  };
}

function remoteMcpServer(value: unknown): Record<string, unknown> {
  if (
    !isRecord(value) ||
    typeof value.uuid !== "string" ||
    typeof value.name !== "string" ||
    !Array.isArray(value.tools) ||
    !Array.isArray(value.toolKeys) ||
    !value.toolKeys.every((key) => typeof key === "string")
  ) {
    throw new TypeError("Invalid remote MCP server");
  }
  return {
    uuid: value.uuid,
    name: value.name,
    tools: value.tools,
    toolKeys: value.toolKeys,
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function frontmatterDescription(content: string): string {
  const match = content.match(/^---[\s\S]*?^description:\s*["']?([^\n"']+)/m);
  return match?.[1]?.trim() ?? "";
}
