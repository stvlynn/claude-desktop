// Restored from ref/.vite/build/index.js

import { EventEmitter } from "node:events";
import { promises as fs } from "node:fs";
import path from "node:path";
import type { App, Session } from "electron";
import { getClaudeAccountDetails } from "../domain/account-details";
import {
  type ApprovedPermission,
  type ScheduledTask,
  type ScheduledTaskDocument,
  type ScheduledTaskEvent,
  parseScheduledTask,
  parseScheduledTaskDocument,
  scheduledTaskId,
  serializeScheduledTaskDocument,
} from "../domain/scheduled-task";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

export type ScheduledTaskSurface = "cowork" | "ccd";

type AccountContext = { accountId: string; orgId: string };
type TaskState = {
  context: AccountContext;
  tasks: Map<string, ScheduledTask>;
};

export class ScheduledTasksService extends EventEmitter {
  constructor(
    private readonly app: App,
    private readonly browserSession: Session,
    readonly surface: ScheduledTaskSurface,
  ) {
    super();
  }

  async getAllScheduledTasks() {
    const state = await this.load();
    if (state === null) return [];
    return Promise.all(
      [...state.tasks.values()].map(async (task) => {
        const document = await this.readDocument(task.filePath);
        return this.describe(task, document);
      }),
    );
  }

  async getScheduledTaskFileContent(taskId: string): Promise<string | null> {
    const task = await this.get(taskId);
    if (task === null) return null;
    try {
      return await fs.readFile(task.filePath, "utf8");
    } catch {
      return null;
    }
  }

  async updateScheduledTaskFileContent(
    taskId: string,
    content: string,
  ): Promise<boolean> {
    const task = await this.get(taskId);
    if (task === null || parseScheduledTaskDocument(content) === null) {
      return false;
    }
    await this.atomicWrite(task.filePath, content);
    await this.emitUpdated(task);
    return true;
  }

  async updateScheduledTaskStatus(
    taskId: string,
    status: string,
    removeFiles = false,
  ): Promise<boolean> {
    const state = await this.load();
    const task = state?.tasks.get(taskId);
    if (state === null || task === undefined) return false;
    if (status === "deleted") {
      state.tasks.delete(taskId);
      await this.persist(state);
      if (removeFiles) {
        await fs.rm(path.dirname(task.filePath), {
          recursive: true,
          force: true,
        });
      }
      this.dispatch({ type: "scheduled_task_deleted", scheduledTask: task });
      return true;
    }
    if (status !== "enabled" && status !== "disabled") return false;
    task.enabled = status === "enabled";
    await this.persist(state);
    this.dispatch({ type: "scheduled_task_updated", scheduledTask: task });
    return true;
  }

  async createScheduledTask(input: Record<string, unknown>) {
    const state = await this.load();
    if (state === null) return null;
    const name = this.requiredString(input.name, "name");
    const prompt = this.requiredString(input.prompt, "prompt");
    const description = this.requiredString(input.description, "description")
      .replace(/[\r\n]+/g, " ")
      .trim();
    const id = scheduledTaskId(name);
    if (state.tasks.has(id)) {
      throw new Error(`A scheduled task named "${id}" already exists.`);
    }
    const cronExpression = this.optionalString(input.cronExpression);
    const fireAt = typeof input.fireAt === "number" ? input.fireAt : undefined;
    this.validateSchedule(cronExpression, fireAt);
    const filePath = path.join(this.taskFilesRoot(), id, "SKILL.md");
    const document: ScheduledTaskDocument = {
      name: id,
      description,
      prompt,
      model: this.optionalString(input.model),
    };
    await this.atomicWrite(filePath, serializeScheduledTaskDocument(document));
    const task: ScheduledTask = {
      id,
      cronExpression,
      fireAt,
      enabled: cronExpression !== undefined || fireAt !== undefined,
      filePath,
      model: document.model,
      createdAt: Date.now(),
      userSelectedFolders: this.optionalStrings(input.userSelectedFolders),
      spaceId: this.optionalString(input.spaceId) || undefined,
      cwd: this.optionalString(input.cwd),
      useWorktree:
        typeof input.useWorktree === "boolean" ? input.useWorktree : undefined,
      sourceBranch: this.optionalString(input.sourceBranch),
      permissionMode: this.optionalString(input.permissionMode),
      chromePermissionMode: this.chromePermissionMode(
        input.chromePermissionMode,
      ),
      disableJitter:
        typeof input.disableJitter === "boolean"
          ? input.disableJitter
          : undefined,
    };
    state.tasks.set(id, task);
    await this.persist(state);
    this.dispatch({ type: "scheduled_task_created", scheduledTask: task });
    return this.describe(task, document);
  }

  async updateScheduledTask(input: Record<string, unknown>) {
    const taskId = this.requiredString(
      input.scheduledTaskId,
      "scheduledTaskId",
    );
    const state = await this.load();
    const task = state?.tasks.get(taskId);
    if (state === null || task === undefined) return null;
    const cronExpression =
      "cronExpression" in input
        ? this.optionalString(input.cronExpression)
        : task.cronExpression;
    const fireAt =
      "fireAt" in input
        ? typeof input.fireAt === "number"
          ? input.fireAt
          : undefined
        : task.fireAt;
    this.validateSchedule(cronExpression, fireAt);
    const document = (await this.readDocument(task.filePath)) ?? {
      name: task.id,
      description: "",
      prompt: "",
    };
    if (typeof input.prompt === "string") document.prompt = input.prompt;
    if (typeof input.description === "string") {
      document.description = input.description.replace(/[\r\n]+/g, " ").trim();
    }
    if ("model" in input) {
      document.model = this.optionalString(input.model);
      task.model = document.model;
    }
    await this.atomicWrite(
      task.filePath,
      serializeScheduledTaskDocument(document),
    );
    task.cronExpression = cronExpression;
    task.fireAt = fireAt;
    if ("cronExpression" in input || "fireAt" in input) {
      task.enabled = cronExpression !== undefined || fireAt !== undefined;
    }
    this.assignOptional(task, input, "userSelectedFolders", (value) =>
      this.optionalStrings(value),
    );
    this.assignOptional(
      task,
      input,
      "spaceId",
      (value) => this.optionalString(value) || undefined,
    );
    this.assignOptional(task, input, "cwd", (value) =>
      this.optionalString(value),
    );
    this.assignOptional(task, input, "sourceBranch", (value) =>
      this.optionalString(value),
    );
    this.assignOptional(task, input, "permissionMode", (value) =>
      this.optionalString(value),
    );
    if ("useWorktree" in input) task.useWorktree = Boolean(input.useWorktree);
    if ("disableJitter" in input) {
      task.disableJitter = Boolean(input.disableJitter);
    }
    if ("chromePermissionMode" in input) {
      task.chromePermissionMode = this.chromePermissionMode(
        input.chromePermissionMode,
      );
    }
    await this.persist(state);
    this.dispatch({ type: "scheduled_task_updated", scheduledTask: task });
    return this.describe(task, document);
  }

  async removeApprovedPermission(
    taskId: string,
    toolName: string,
    ruleContent?: string,
  ): Promise<boolean> {
    const state = await this.load();
    const task = state?.tasks.get(taskId);
    if (state === null || task === undefined) return false;
    const before = task.approvedPermissions?.length ?? 0;
    task.approvedPermissions = (task.approvedPermissions ?? []).filter(
      (permission) =>
        permission.toolName !== toolName ||
        permission.ruleContent !== ruleContent,
    );
    if (task.approvedPermissions.length === before) return false;
    await this.persist(state);
    this.dispatch({ type: "scheduled_task_updated", scheduledTask: task });
    return true;
  }

  async clearChromePermissions(taskId: string): Promise<boolean> {
    const state = await this.load();
    const task = state?.tasks.get(taskId);
    if (state === null || task === undefined) return false;
    if (
      task.chromePermissionMode === undefined &&
      task.chromeAllowedDomains === undefined
    ) {
      return false;
    }
    task.chromePermissionMode = undefined;
    task.chromeAllowedDomains = undefined;
    await this.persist(state);
    this.dispatch({ type: "scheduled_task_updated", scheduledTask: task });
    return true;
  }

  getWatcherHistory(): [] {
    return [];
  }

  private async get(taskId: string): Promise<ScheduledTask | null> {
    const state = await this.load();
    return state?.tasks.get(taskId) ?? null;
  }

  private async emitUpdated(task: ScheduledTask): Promise<void> {
    const state = await this.load();
    if (state === null || !state.tasks.has(task.id)) return;
    this.dispatch({ type: "scheduled_task_updated", scheduledTask: task });
  }

  private describe(
    task: ScheduledTask,
    document: ScheduledTaskDocument | null,
  ) {
    return {
      ...task,
      description: document?.description,
      prompt: document?.prompt,
      jitterSeconds: 0,
      cronHumanReadable: undefined,
      nextRunAt:
        task.enabled && task.fireAt && !task.lastRunAt
          ? new Date(task.fireAt).toISOString()
          : undefined,
      isScheduledDuringPeakHours: false,
      peakHoursWindowPst: [5, 11],
      missedRuns: task.cronExpression ? [] : undefined,
    };
  }

  private async load(): Promise<TaskState | null> {
    const context = await this.accountContext();
    if (context === null) return null;
    const storagePath = this.storagePath(context);
    let parsed: unknown = null;
    try {
      parsed = JSON.parse(await fs.readFile(storagePath, "utf8")) as unknown;
    } catch {}
    const values =
      typeof parsed === "object" &&
      parsed !== null &&
      "scheduledTasks" in parsed &&
      Array.isArray(parsed.scheduledTasks)
        ? parsed.scheduledTasks
        : [];
    const tasks = new Map<string, ScheduledTask>();
    for (const value of values) {
      const task = parseScheduledTask(value);
      if (task !== null) {
        task.filePath = path.join(this.taskFilesRoot(), task.id, "SKILL.md");
        tasks.set(task.id, task);
      }
    }
    return { context, tasks };
  }

  private async persist(state: TaskState): Promise<void> {
    await this.atomicWrite(
      this.storagePath(state.context),
      `${JSON.stringify({ scheduledTasks: [...state.tasks.values()] }, null, 2)}\n`,
    );
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

  private storagePath(context: AccountContext): string {
    return path.join(
      this.app.getPath("userData"),
      this.surface === "cowork"
        ? "local-agent-mode-sessions"
        : "claude-code-sessions",
      context.accountId,
      context.orgId,
      "scheduled-tasks.json",
    );
  }

  private taskFilesRoot(): string {
    return this.surface === "cowork"
      ? path.join(this.app.getPath("documents"), "Claude", "Scheduled")
      : path.join(this.app.getPath("home"), ".claude", "scheduled-tasks");
  }

  private async readDocument(
    filePath: string,
  ): Promise<ScheduledTaskDocument | null> {
    try {
      return parseScheduledTaskDocument(await fs.readFile(filePath, "utf8"));
    } catch {
      return null;
    }
  }

  private async atomicWrite(filePath: string, content: string): Promise<void> {
    await fs.mkdir(path.dirname(filePath), { recursive: true, mode: 0o700 });
    const temporaryPath = `${filePath}.${process.pid}.tmp`;
    await fs.writeFile(temporaryPath, content, { mode: 0o600 });
    await fs.rename(temporaryPath, filePath);
  }

  private validateSchedule(cron?: string, fireAt?: number): void {
    if (cron && fireAt) {
      throw new Error("Provide either cronExpression or fireAt, not both.");
    }
    if (cron && cron.trim().split(/\s+/).length !== 5) {
      throw new Error(`Invalid cron expression: "${cron}".`);
    }
    if (fireAt !== undefined && fireAt < Date.now()) {
      throw new Error("fireAt must be in the future.");
    }
  }

  private dispatch(event: ScheduledTaskEvent): void {
    this.emit("scheduled-task-event", event);
  }

  private requiredString(value: unknown, field: string): string {
    if (typeof value !== "string") {
      throw new TypeError(`ScheduledTasks.${field} must be a string`);
    }
    return value;
  }

  private optionalString(value: unknown): string | undefined {
    return typeof value === "string" && value.length > 0 ? value : undefined;
  }

  private optionalStrings(value: unknown): string[] | undefined {
    return Array.isArray(value) &&
      value.every((entry) => typeof entry === "string")
      ? value
      : undefined;
  }

  private chromePermissionMode(value: unknown) {
    return value === "ask" ||
      value === "skip_all_permission_checks" ||
      value === "follow_a_plan"
      ? value
      : undefined;
  }

  private assignOptional<K extends keyof ScheduledTask>(
    task: ScheduledTask,
    input: Record<string, unknown>,
    key: K,
    parse: (value: unknown) => ScheduledTask[K],
  ): void {
    if (key in input) task[key] = parse(input[key]);
  }
}
