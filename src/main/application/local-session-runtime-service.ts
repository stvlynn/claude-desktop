// Restored from ref/.vite/build/index.js

import { randomUUID } from "node:crypto";
import { EventEmitter } from "node:events";
import path from "node:path";
import { mkdir } from "node:fs/promises";
import {
  forkSession as forkSdkSession,
  getSessionInfo,
  getSessionMessages,
  query,
  type McpServerConfig,
  type PermissionUpdate,
  type PermissionResult,
  type Query,
  type SDKMessage,
  type SDKUserMessage,
} from "@anthropic-ai/claude-agent-sdk";
import type { App } from "electron";
import type {
  LocalSessionRecord,
  LocalSessionStart,
  PendingToolPermission,
  SessionEffort,
  SessionPermissionMode,
} from "../domain/local-session";
import { assertSessionId } from "../domain/local-session";
import { AsyncMessageQueue } from "../infrastructure/async-message-queue";
import { LocalSessionRepository } from "../infrastructure/local-session-repository";
import { SshClaudeLauncher } from "../infrastructure/ssh-claude-launcher";
import {
  safeMetadata,
  sdkPermissionMode,
  systemPromptOption,
  titleFromMessage,
  uniquePaths,
  userMessage,
} from "./local-session-sdk-values";

type PendingPermission = {
  sessionId: string;
  suggestions?: PermissionUpdate[];
  resolve: (result: PermissionResult) => void;
};

type RunningSession = {
  record: LocalSessionRecord;
  input: AsyncMessageQueue<SDKUserMessage>;
  query: Query;
  abortController: AbortController;
};

type ExtendedQuery = Query & {
  launchUltrareview?: (
    args: unknown,
    options: { confirm: boolean },
  ) => Promise<unknown>;
  submitFeedback?: (
    description: string,
    options: { surface: "ccd" },
  ) => Promise<unknown>;
  cancelAsyncMessage?: (messageUuid: string) => Promise<boolean>;
  mcpAuthenticate?: (
    serverName: string,
    redirectUri?: string,
  ) => Promise<unknown>;
  mcpSubmitOAuthCallbackUrl?: (
    serverName: string,
    callbackUrl: string,
  ) => Promise<unknown>;
};

export class LocalSessionRuntimeService extends EventEmitter {
  private readonly app: App;
  private readonly repository: LocalSessionRepository;
  private readonly sshLauncher: SshClaudeLauncher;
  private readonly running = new Map<string, RunningSession>();
  private readonly pendingPermissions = new Map<string, PendingPermission>();
  private readonly sideQueries = new Map<string, AbortController>();
  private readonly queuedMessages = new Map<string, SDKUserMessage[]>();
  private readonly summaryQueries = new Map<string, AbortController>();

  constructor(app: App) {
    super();
    this.app = app;
    this.repository = new LocalSessionRepository(app);
    this.sshLauncher = new SshClaudeLauncher(app);
  }

  async start(info: LocalSessionStart): Promise<{ sessionId: string }> {
    const sessionId = info.sessionId ?? randomUUID();
    assertSessionId(sessionId);
    if (this.running.has(sessionId))
      throw new Error("Session is already running");
    const previous = await this.repository.get(sessionId);
    const cwd = path.resolve(
      info.cwd ?? info.userSelectedFolders?.[0] ?? this.app.getPath("home"),
    );
    const now = Date.now();
    const record: LocalSessionRecord = {
      sessionId,
      sdkSessionId: previous?.sdkSessionId,
      cwd,
      title:
        info.title?.trim() || previous?.title || titleFromMessage(info.message),
      model: info.model ?? previous?.model,
      effort: info.effort ?? previous?.effort ?? "high",
      permissionMode:
        info.permissionMode ?? previous?.permissionMode ?? "default",
      lifecycleState: "initializing",
      createdAt: previous?.createdAt ?? now,
      lastActivityAt: now,
      scheduledTaskId: info.scheduledTaskId ?? previous?.scheduledTaskId,
      spaceId: info.spaceId ?? previous?.spaceId,
      sessionType: info.sessionType ?? previous?.sessionType,
      parentSessionId: info.parentSessionId ?? previous?.parentSessionId,
      additionalDirectories: uniquePaths([
        ...(info.userSelectedFolders ?? []),
        ...(info.additionalDirectories ?? []),
      ]).filter((folder) => folder !== cwd),
      systemPrompt: info.systemPrompt ?? previous?.systemPrompt,
      systemPromptAppend:
        info.systemPromptAppend ?? previous?.systemPromptAppend,
      fastMode: info.fastMode ?? previous?.fastMode ?? false,
      extendedThinkingEnabled:
        info.extendedThinkingEnabled ??
        previous?.extendedThinkingEnabled ??
        true,
      metadata: previous?.metadata ?? {},
      sshConfig: info.sshConfig ?? previous?.sshConfig,
      mcpServers: info.mcpServers ?? previous?.mcpServers,
    };
    await Promise.all([
      info.sshConfig ? Promise.resolve() : mkdir(cwd, { recursive: true }),
      mkdir(this.repository.outputsDir(sessionId), {
        recursive: true,
        mode: 0o700,
      }),
      this.repository.save(record),
    ]);

    const runtime = await this.launch(record, {
      agent: info.agent,
      mcpServers: (info.mcpServers ?? {}) as Record<string, McpServerConfig>,
    });
    runtime.input.push(
      userMessage(info.message, info.messageUuid, undefined, info.images),
    );
    return { sessionId };
  }

  async sendMessage(
    sessionId: string,
    message: string,
    messageUuid?: string,
    priority: "now" | "next" | "later" = "now",
    images?: Array<{ base64: string; mimeType: string }>,
  ): Promise<void> {
    const runtime = await this.ensureRunning(sessionId);
    const hasActiveTurn =
      runtime.record.lifecycleState === "running" ||
      runtime.record.lifecycleState === "initializing";
    runtime.record.lastActivityAt = Date.now();
    const queued = userMessage(message, messageUuid, priority, images);
    if (priority === "now" || !hasActiveTurn) {
      runtime.record.lifecycleState = "running";
      runtime.input.push(queued);
    } else {
      const messages = this.queuedMessages.get(sessionId) ?? [];
      if (priority === "next") messages.unshift(queued);
      else messages.push(queued);
      this.queuedMessages.set(sessionId, messages);
      this.emit("event", {
        type: "message_queued",
        sessionId,
        message: queued,
      });
    }
    await this.repository.save(runtime.record);
  }

  async cancelQueuedMessage(
    sessionId: string,
    messageUuid: string,
  ): Promise<boolean> {
    const messages = this.queuedMessages.get(sessionId) ?? [];
    const index = messages.findIndex((message) => message.uuid === messageUuid);
    if (index < 0) {
      const query = this.running.get(sessionId)?.query as
        ExtendedQuery | undefined;
      return query?.cancelAsyncMessage?.(messageUuid) ?? false;
    }
    messages.splice(index, 1);
    this.emit("event", {
      type: "queued_message_cancelled",
      sessionId,
      messageUuid,
    });
    return true;
  }

  reorderQueuedMessage(
    sessionId: string,
    messageUuid: string,
    overMessageUuid: string,
  ): boolean {
    const messages = this.queuedMessages.get(sessionId) ?? [];
    const source = messages.findIndex(
      (message) => message.uuid === messageUuid,
    );
    const target = messages.findIndex(
      (message) => message.uuid === overMessageUuid,
    );
    if (source < 0 || target < 0) return false;
    const [message] = messages.splice(source, 1);
    if (!message) return false;
    messages.splice(target, 0, message);
    this.emit("event", { type: "queued_messages_reordered", sessionId });
    return true;
  }

  async promoteQueuedMessage(
    sessionId: string,
    messageUuid: string,
  ): Promise<boolean> {
    const runtime = await this.ensureRunning(sessionId);
    const messages = this.queuedMessages.get(sessionId) ?? [];
    const index = messages.findIndex((message) => message.uuid === messageUuid);
    const [message] = index < 0 ? [] : messages.splice(index, 1);
    if (!message) return false;
    runtime.input.push({ ...message, priority: "now" });
    this.emit("event", {
      type: "queued_message_promoted",
      sessionId,
      messageUuid,
    });
    return true;
  }

  async stop(sessionId: string): Promise<void> {
    this.stopSideChat(sessionId);
    this.stopSessionSummary(sessionId);
    const runtime = this.running.get(sessionId);
    if (!runtime) return;
    runtime.record.lifecycleState = "stopping";
    await this.repository.save(runtime.record);
    runtime.input.close();
    runtime.abortController.abort();
    runtime.query.close();
    this.running.delete(sessionId);
    runtime.record.lifecycleState = "idle";
    runtime.record.lastActivityAt = Date.now();
    await this.repository.save(runtime.record);
    this.emitLifecycle(runtime.record);
  }

  async interrupt(sessionId: string): Promise<void> {
    const runtime = this.running.get(sessionId);
    if (runtime) await runtime.query.interrupt();
  }

  async setModel(sessionId: string, model?: string): Promise<void> {
    const record = await this.requireRecord(sessionId);
    record.model = model;
    record.lastActivityAt = Date.now();
    await this.repository.save(record);
    const runtime = this.running.get(sessionId);
    if (runtime) await runtime.query.setModel(model);
  }

  async setEffort(sessionId: string, effort: SessionEffort): Promise<void> {
    const record = await this.requireRecord(sessionId);
    record.effort = effort;
    record.lastActivityAt = Date.now();
    await this.repository.save(record);
    const runtime = this.running.get(sessionId);
    if (runtime) {
      await runtime.query.applyFlagSettings({
        effortLevel: effort === "max" ? "xhigh" : effort,
      });
    }
  }

  async setFastMode(sessionId: string, enabled: boolean): Promise<void> {
    const record = await this.requireRecord(sessionId);
    record.fastMode = enabled;
    record.lastActivityAt = Date.now();
    await this.repository.save(record);
    const runtime = this.running.get(sessionId);
    if (runtime) await runtime.query.applyFlagSettings({ fastMode: enabled });
  }

  async applyFlagSettings(
    sessionId: string,
    settings: Parameters<Query["applyFlagSettings"]>[0],
  ): Promise<void> {
    await (
      await this.ensureRunning(sessionId)
    ).query.applyFlagSettings(settings);
  }

  async setExtendedThinking(
    sessionId: string,
    enabled: boolean,
  ): Promise<void> {
    const record = await this.requireRecord(sessionId);
    record.extendedThinkingEnabled = enabled;
    await this.repository.save(record);
    const runtime = this.running.get(sessionId);
    if (runtime) await runtime.query.setMaxThinkingTokens(enabled ? 1 : 0);
  }

  async setPermissionMode(
    sessionId: string,
    mode: SessionPermissionMode,
  ): Promise<{ mode: SessionPermissionMode }> {
    const record = await this.requireRecord(sessionId);
    record.permissionMode = mode;
    await this.repository.save(record);
    const runtime = this.running.get(sessionId);
    if (runtime) await runtime.query.setPermissionMode(sdkPermissionMode(mode));
    return { mode };
  }

  async getSession(sessionId: string): Promise<LocalSessionRecord | null> {
    return this.repository.get(sessionId);
  }
  getAll(): Promise<LocalSessionRecord[]> {
    return this.repository.all();
  }
  runningSessions(): Array<{ sessionId: string; title: string; kind: string }> {
    return [...this.running.values()]
      .filter(({ record }) =>
        ["initializing", "running", "stopping"].includes(record.lifecycleState),
      )
      .map(({ record }) => ({
        sessionId: record.sessionId,
        title: record.title,
        kind: record.sessionType ?? "local",
      }));
  }
  getTranscript(sessionId: string): Promise<unknown[]> {
    return this.repository.transcript(sessionId);
  }

  async updateSession(
    sessionId: string,
    patch: Record<string, unknown>,
  ): Promise<LocalSessionRecord> {
    const record = await this.requireRecord(sessionId);
    if (typeof patch.title === "string")
      record.title = patch.title.trim().slice(0, 200);
    if (typeof patch.spaceId === "string") record.spaceId = patch.spaceId;
    if (
      Array.isArray(patch.additionalDirectories) &&
      patch.additionalDirectories.every((value) => typeof value === "string")
    ) {
      record.additionalDirectories = uniquePaths(
        patch.additionalDirectories,
      ).filter((folder) => folder !== record.cwd);
      const runtime = this.running.get(sessionId);
      if (runtime) {
        await runtime.query.applyFlagSettings({
          additionalDirectories: record.additionalDirectories,
        });
      }
    }
    record.metadata = { ...record.metadata, ...safeMetadata(patch) };
    record.lastActivityAt = Date.now();
    await this.repository.save(record);
    return record;
  }

  async archive(sessionId: string, archived = true): Promise<void> {
    const record = await this.requireRecord(sessionId);
    record.lifecycleState = archived ? "archived" : "idle";
    record.archivedAt = archived ? Date.now() : undefined;
    await this.repository.save(record);
    this.emitLifecycle(record);
  }

  async delete(sessionId: string): Promise<void> {
    await this.stop(sessionId);
    this.queuedMessages.delete(sessionId);
    await this.repository.remove(sessionId);
  }

  async clear(sessionId: string): Promise<void> {
    await this.stop(sessionId);
    this.queuedMessages.delete(sessionId);
    await this.repository.clearTranscript(sessionId);
    const record = await this.requireRecord(sessionId);
    record.sdkSessionId = undefined;
    record.lifecycleState = "idle";
    record.lastActivityAt = Date.now();
    await this.repository.save(record);
  }

  async fork(
    parentSessionId: string,
    sessionId: string,
    upToMessageId?: string,
    targetCwd?: string,
  ): Promise<{ sessionId: string }> {
    assertSessionId(sessionId);
    const parent = await this.requireRecord(parentSessionId);
    if (!parent.sdkSessionId)
      throw new Error("Cannot fork before the Claude session is initialized");
    const forked = await forkSdkSession(parent.sdkSessionId, {
      dir: parent.cwd,
      upToMessageId,
      title: `${parent.title} (fork)`,
    });
    const now = Date.now();
    const record: LocalSessionRecord = {
      ...parent,
      sessionId,
      sdkSessionId: forked.sessionId,
      cwd: path.resolve(targetCwd ?? parent.cwd),
      title: `${parent.title} (fork)`,
      lifecycleState: "idle",
      createdAt: now,
      lastActivityAt: now,
      archivedAt: undefined,
      parentSessionId,
      metadata: { ...parent.metadata },
    };
    await Promise.all([
      this.repository.save(record),
      this.repository.copyTranscript(parentSessionId, sessionId),
    ]);
    return { sessionId };
  }

  async importCliSession(cliSessionId: string): Promise<{ sessionId: string }> {
    assertSessionId(cliSessionId);
    const info = await getSessionInfo(cliSessionId);
    if (!info) throw new Error(`Claude CLI session not found: ${cliSessionId}`);
    const sessionId = randomUUID();
    const now = Date.now();
    const record: LocalSessionRecord = {
      sessionId,
      sdkSessionId: cliSessionId,
      cwd: path.resolve(info.cwd ?? this.app.getPath("home")),
      title:
        info.customTitle ??
        info.summary ??
        info.firstPrompt ??
        "Imported session",
      effort: "high",
      permissionMode: "default",
      lifecycleState: "idle",
      createdAt: info.createdAt ?? now,
      lastActivityAt: info.lastModified ?? now,
      additionalDirectories: [],
      fastMode: false,
      extendedThinkingEnabled: true,
      metadata: { gitBranch: info.gitBranch, tag: info.tag, imported: true },
    };
    await this.repository.save(record);
    for (const message of await getSessionMessages(cliSessionId, {
      includeSystemMessages: true,
    })) {
      await this.repository.appendTranscript(sessionId, message);
    }
    return { sessionId };
  }

  async searchSessions(
    queryText: string,
  ): Promise<
    Array<{ sessionId: string; snippet?: string; lastActivityAt: number }>
  > {
    const needle = queryText.trim().toLowerCase();
    const matches = [];
    for (const record of await this.repository.all()) {
      const transcript = await this.repository.transcript(record.sessionId);
      const text = `${record.title}\n${JSON.stringify(transcript)}`;
      const index = text.toLowerCase().indexOf(needle);
      if (!needle || index >= 0) {
        matches.push({
          sessionId: record.sessionId,
          snippet: needle
            ? text.slice(Math.max(0, index - 80), index + needle.length + 120)
            : record.title,
          lastActivityAt: record.lastActivityAt,
        });
      }
    }
    return matches;
  }

  async supportedCommands(sessionId: string): Promise<unknown[]> {
    return (await this.ensureRunning(sessionId)).query.supportedCommands();
  }
  async supportedAgents(sessionId: string): Promise<unknown[]> {
    return (await this.ensureRunning(sessionId)).query.supportedAgents();
  }
  async supportedCommandsFor(options?: {
    sessionId?: string;
    cwd?: string;
  }): Promise<unknown[]> {
    if (options?.sessionId) return this.supportedCommands(options.sessionId);
    return this.withTemporaryQuery(options?.cwd, (value) =>
      value.supportedCommands(),
    );
  }
  async supportedAgentsFor(options?: {
    sessionId?: string;
    cwd?: string;
  }): Promise<unknown[]> {
    if (options?.sessionId) return this.supportedAgents(options.sessionId);
    return this.withTemporaryQuery(options?.cwd, (value) =>
      value.supportedAgents(),
    );
  }
  async warm(sessionId: string): Promise<void> {
    await (await this.ensureRunning(sessionId)).query.initializationResult();
  }
  async contextUsage(sessionId: string): Promise<unknown> {
    return (await this.ensureRunning(sessionId)).query.getContextUsage();
  }
  async stopTask(sessionId: string, taskId: string): Promise<void> {
    await (await this.ensureRunning(sessionId)).query.stopTask(taskId);
  }
  async rewind(
    sessionId: string,
    messageUuid: string,
    dryRun = false,
  ): Promise<unknown> {
    return (await this.ensureRunning(sessionId)).query.rewindFiles(
      messageUuid,
      { dryRun },
    );
  }
  async setMcpServers(
    sessionId: string,
    servers: Record<string, McpServerConfig>,
  ): Promise<unknown> {
    const record = await this.requireRecord(sessionId);
    record.mcpServers = servers;
    await this.repository.save(record);
    return (await this.ensureRunning(sessionId)).query.setMcpServers(servers);
  }

  async reconnectMcpServer(
    sessionId: string,
    serverName: string,
  ): Promise<void> {
    await (
      await this.ensureRunning(sessionId)
    ).query.reconnectMcpServer(serverName);
  }

  async authenticateMcpServer(
    sessionId: string,
    serverName: string,
    redirectUri?: string,
  ): Promise<unknown> {
    const sdkQuery = (await this.ensureRunning(sessionId))
      .query as ExtendedQuery;
    if (!sdkQuery.mcpAuthenticate) {
      throw new Error(
        "MCP authentication is not supported by this Claude runtime",
      );
    }
    return sdkQuery.mcpAuthenticate(serverName, redirectUri);
  }

  async submitMcpOAuthCallback(
    sessionId: string,
    serverName: string,
    callbackUrl: string,
  ): Promise<unknown> {
    const sdkQuery = (await this.ensureRunning(sessionId))
      .query as ExtendedQuery;
    if (!sdkQuery.mcpSubmitOAuthCallbackUrl) {
      throw new Error(
        "MCP OAuth callbacks are not supported by this Claude runtime",
      );
    }
    return sdkQuery.mcpSubmitOAuthCallbackUrl(serverName, callbackUrl);
  }

  async mcpServerStatus(sessionId: string): Promise<unknown[]> {
    return (await this.ensureRunning(sessionId)).query.mcpServerStatus();
  }

  async launchUltrareview(
    sessionId: string,
    args: unknown,
    confirm = false,
  ): Promise<unknown> {
    const query = (await this.ensureRunning(sessionId)).query as ExtendedQuery;
    if (!query.launchUltrareview)
      return {
        status: "error",
        message: "Ultrareview is not supported by this Claude runtime.",
      };
    return query.launchUltrareview(args, { confirm });
  }

  async submitFeedback(
    sessionId: string,
    description: string,
  ): Promise<unknown> {
    const query = (await this.ensureRunning(sessionId)).query as ExtendedQuery;
    if (!query.submitFeedback)
      return {
        error: "Feedback submission is not supported by this Claude runtime.",
      };
    return query.submitFeedback(description, { surface: "ccd" });
  }

  async startSideChat(sessionId: string): Promise<{ started: true }> {
    await this.requireRecord(sessionId);
    this.stopSideChat(sessionId);
    this.sideQueries.set(sessionId, new AbortController());
    return { started: true };
  }

  async sendSideChatMessage(sessionId: string, text: string): Promise<void> {
    const record = await this.requireRecord(sessionId);
    const abortController =
      this.sideQueries.get(sessionId) ?? new AbortController();
    this.sideQueries.set(sessionId, abortController);
    const sideQuery = query({
      prompt: text,
      options: {
        abortController,
        cwd: record.cwd,
        model: record.model,
        resume: record.sdkSessionId,
        forkSession: Boolean(record.sdkSessionId),
        permissionMode: "plan",
        settingSources: ["user", "project", "local"],
      },
    });
    try {
      for await (const message of sideQuery) {
        this.emit("event", {
          type: "side_chat_event",
          sessionId,
          message,
        });
      }
    } finally {
      if (this.sideQueries.get(sessionId) === abortController)
        this.sideQueries.delete(sessionId);
    }
  }

  stopSideChat(sessionId: string): void {
    this.sideQueries.get(sessionId)?.abort();
    this.sideQueries.delete(sessionId);
  }

  async summarizeSession(sessionId: string): Promise<string> {
    const transcript = await this.repository.transcript(sessionId);
    return this.summarizeTranscript(
      sessionId,
      JSON.stringify(transcript).slice(-200_000),
    );
  }

  async summarizeTranscript(
    sessionId: string,
    transcript: string,
  ): Promise<string> {
    const record = await this.requireRecord(sessionId);
    this.stopSessionSummary(sessionId);
    const abortController = new AbortController();
    this.summaryQueries.set(sessionId, abortController);
    const summaryQuery = query({
      prompt: `Summarize this coding session accurately and concisely. Include completed work, important decisions, open tasks, and verification results.\n\n${transcript}`,
      options: {
        abortController,
        cwd: record.cwd,
        model: record.model,
        maxTurns: 1,
        permissionMode: "plan",
        allowedTools: [],
        settingSources: ["user", "project", "local"],
      },
    });
    let summary = "";
    try {
      for await (const message of summaryQuery) {
        if (message.type !== "assistant") continue;
        for (const block of message.message.content) {
          if (block.type === "text") summary += block.text;
        }
      }
    } finally {
      if (this.summaryQueries.get(sessionId) === abortController)
        this.summaryQueries.delete(sessionId);
    }
    return summary.trim();
  }

  stopSessionSummary(sessionId: string): void {
    this.summaryQueries.get(sessionId)?.abort();
    this.summaryQueries.delete(sessionId);
  }

  resolveToolPermission(
    requestId: string,
    decision: string,
    message?: string,
  ): void {
    const pending = this.pendingPermissions.get(requestId);
    if (!pending) throw new Error("Unknown or expired tool permission request");
    this.pendingPermissions.delete(requestId);
    pending.resolve(
      decision === "allow" || decision === "once" || decision === "always"
        ? {
            behavior: "allow",
            toolUseID: requestId,
            ...(decision === "always" && pending.suggestions
              ? { updatedPermissions: pending.suggestions }
              : {}),
          }
        : {
            behavior: "deny",
            message: message ?? "Denied by user",
            toolUseID: requestId,
          },
    );
    this.emit("event", {
      type: "tool_permission_resolved",
      sessionId: pending.sessionId,
      requestId,
    });
  }

  outputsDir(sessionId: string): string {
    return this.repository.outputsDir(sessionId);
  }

  async dispose(): Promise<void> {
    for (const sessionId of [...this.running.keys()]) {
      await this.stop(sessionId);
    }
    for (const sessionId of [...this.sideQueries.keys()]) {
      this.stopSideChat(sessionId);
    }
    for (const sessionId of [...this.summaryQueries.keys()]) {
      this.stopSessionSummary(sessionId);
    }
    this.queuedMessages.clear();
    this.removeAllListeners();
  }

  private async consume(sessionId: string, sdkQuery: Query): Promise<void> {
    const runtime = this.running.get(sessionId);
    if (!runtime) return;
    try {
      for await (const message of sdkQuery) {
        await this.repository.appendTranscript(sessionId, message);
        const current = this.running.get(sessionId);
        if (!current) break;
        current.record.lastActivityAt = Date.now();
        if ("session_id" in message && typeof message.session_id === "string") {
          current.record.sdkSessionId = message.session_id;
        }
        if (
          message.type === "system" &&
          "subtype" in message &&
          message.subtype === "init"
        ) {
          current.record.lifecycleState = "running";
          this.emitLifecycle(current.record);
        } else if (message.type === "result") {
          current.record.lifecycleState = message.is_error ? "error" : "idle";
          this.emitLifecycle(current.record);
          if (!message.is_error) this.flushQueuedMessage(sessionId, current);
        }
        await this.repository.save(current.record);
        this.emit("event", { type: "sdk_message", sessionId, message });
      }
    } catch (error) {
      const current = this.running.get(sessionId);
      if (current && !current.abortController.signal.aborted) {
        current.record.lifecycleState = "error";
        current.record.lastActivityAt = Date.now();
        await this.repository.save(current.record);
        this.emitLifecycle(current.record);
        this.emit("event", {
          type: "error",
          sessionId,
          error: error instanceof Error ? error.message : String(error),
        });
      }
    } finally {
      const current = this.running.get(sessionId);
      if (
        current?.query === sdkQuery &&
        !current.abortController.signal.aborted
      ) {
        this.running.delete(sessionId);
        current.input.close();
        if (current.record.lifecycleState === "running") {
          current.record.lifecycleState = "idle";
          current.record.lastActivityAt = Date.now();
          await this.repository.save(current.record);
          this.emitLifecycle(current.record);
        }
      }
    }
  }

  private requestToolPermission(
    sessionId: string,
    toolName: string,
    input: Record<string, unknown>,
    options: {
      signal: AbortSignal;
      suggestions?: PermissionUpdate[];
      blockedPath?: string;
      title?: string;
      displayName?: string;
      description?: string;
      toolUseID: string;
    },
  ): Promise<PermissionResult> {
    const request: PendingToolPermission = {
      sessionId,
      requestId: options.toolUseID,
      toolName,
      input,
      suggestions: options.suggestions,
      blockedPath: options.blockedPath,
      title: options.title,
      displayName: options.displayName,
      description: options.description,
    };
    return new Promise<PermissionResult>((resolve) => {
      const abort = (): void => {
        this.pendingPermissions.delete(request.requestId);
        resolve({
          behavior: "deny",
          message: "Session stopped",
          toolUseID: request.requestId,
        });
      };
      options.signal.addEventListener("abort", abort, { once: true });
      this.pendingPermissions.set(request.requestId, {
        sessionId,
        suggestions: options.suggestions,
        resolve: (result) => {
          options.signal.removeEventListener("abort", abort);
          resolve(result);
        },
      });
      this.emit("toolPermissionRequest", request);
      this.emit("event", {
        type: "tool_permission_request",
        sessionId,
        request,
      });
    });
  }

  private async ensureRunning(sessionId: string): Promise<RunningSession> {
    const running = this.running.get(sessionId);
    if (running) return running;
    const record = await this.requireRecord(sessionId);
    return this.launch(record);
  }

  private async launch(
    record: LocalSessionRecord,
    options: {
      agent?: string;
      mcpServers?: Record<string, McpServerConfig>;
    } = {},
  ): Promise<RunningSession> {
    const input = new AsyncMessageQueue<SDKUserMessage>();
    const abortController = new AbortController();
    const sshConfig = record.sshConfig;
    const sshExecutable = sshConfig
      ? await this.sshLauncher.executable()
      : undefined;
    const sshEnvironment = sshConfig
      ? this.sshLauncher.environment(sshConfig, record.cwd)
      : undefined;
    const sdkQuery = query({
      prompt: input,
      options: {
        abortController,
        cwd: sshConfig ? this.app.getPath("home") : record.cwd,
        pathToClaudeCodeExecutable: sshExecutable,
        model: record.model,
        effort: record.effort,
        permissionMode: sdkPermissionMode(record.permissionMode),
        additionalDirectories: record.additionalDirectories,
        systemPrompt: systemPromptOption(
          record.systemPrompt,
          record.systemPromptAppend,
        ),
        resume: record.sdkSessionId,
        includePartialMessages: true,
        enableFileCheckpointing: true,
        settingSources: ["user", "project", "local"],
        mcpServers:
          options.mcpServers ??
          (record.mcpServers as Record<string, McpServerConfig> | undefined) ??
          {},
        agent: options.agent,
        thinking: record.extendedThinkingEnabled
          ? { type: "adaptive" }
          : { type: "disabled" },
        env: {
          ...process.env,
          CLAUDE_AGENT_SDK_CLIENT_APP: `claude-desktop/${this.app.getVersion()}`,
          ...(sshEnvironment
            ? {
                CLAUDE_DESKTOP_SSH_CONFIG: sshEnvironment,
                CLAUDE_DESKTOP_NODE_RUNTIME: process.execPath,
                ELECTRON_RUN_AS_NODE: "1",
              }
            : {}),
        },
        canUseTool: (toolName, toolInput, permissionOptions) =>
          this.requestToolPermission(
            record.sessionId,
            toolName,
            toolInput,
            permissionOptions,
          ),
      },
    });
    const runtime = { record, input, query: sdkQuery, abortController };
    this.running.set(record.sessionId, runtime);
    void this.consume(record.sessionId, sdkQuery);
    return runtime;
  }

  private async requireRecord(sessionId: string): Promise<LocalSessionRecord> {
    const record = await this.repository.get(sessionId);
    if (!record) throw new Error(`Session not found: ${sessionId}`);
    return record;
  }

  private async withTemporaryQuery<T>(
    cwd: string | undefined,
    operation: (temporaryQuery: Query) => Promise<T>,
  ): Promise<T> {
    const input = new AsyncMessageQueue<SDKUserMessage>();
    const temporaryQuery = query({
      prompt: input,
      options: {
        cwd: path.resolve(cwd ?? this.app.getPath("home")),
        permissionMode: "plan",
        settingSources: ["user", "project", "local"],
      },
    });
    try {
      return await operation(temporaryQuery);
    } finally {
      input.close();
      temporaryQuery.close();
    }
  }

  private emitLifecycle(record: LocalSessionRecord): void {
    this.emit("lifecycleChanged", {
      sessionId: record.sessionId,
      newState: record.lifecycleState,
    });
  }

  private flushQueuedMessage(sessionId: string, runtime: RunningSession): void {
    const messages = this.queuedMessages.get(sessionId);
    const next = messages?.shift();
    if (!next) return;
    runtime.input.push(next);
    if (messages?.length === 0) this.queuedMessages.delete(sessionId);
    this.emit("event", {
      type: "queued_message_started",
      sessionId,
      messageUuid: next.uuid,
    });
  }
}
