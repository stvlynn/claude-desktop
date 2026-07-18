// Restored from ref/.vite/build/index.js

export type ApprovedPermission = {
  toolName: string;
  ruleContent?: string;
};

export type ScheduledTask = {
  id: string;
  cronExpression?: string;
  fireAt?: number;
  enabled: boolean;
  filePath: string;
  model?: string;
  createdAt: number;
  lastRunAt?: string;
  lastScheduledFor?: string;
  userSelectedFolders?: string[];
  userSelectedFiles?: string[];
  userSelectedProjectUuids?: string[];
  chromePermissionMode?: "ask" | "skip_all_permission_checks" | "follow_a_plan";
  chromeAllowedDomains?: string[];
  spaceId?: string;
  cwd?: string;
  useWorktree?: boolean;
  sourceBranch?: string;
  permissionMode?: string;
  approvedPermissions?: ApprovedPermission[];
  disableJitter?: boolean;
  notifySessionId?: string;
  dispatchSubscribed?: boolean;
};

export type ScheduledTaskEvent = {
  type:
    | "scheduled_task_created"
    | "scheduled_task_updated"
    | "scheduled_task_deleted";
  scheduledTask: ScheduledTask;
};

export type ScheduledTaskDocument = {
  name: string;
  description: string;
  prompt: string;
  model?: string;
};

export function scheduledTaskId(name: string): string {
  const id = name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9_-]/g, "")
    .replace(/^[-_]+|[-_]+$/g, "");
  if (!id || !/[a-z0-9]/.test(id)) {
    throw new Error(
      "Invalid task name: must contain at least one alphanumeric character",
    );
  }
  return id;
}

export function serializeScheduledTaskDocument(
  document: ScheduledTaskDocument,
): string {
  const model = document.model ? `model: ${document.model}\n` : "";
  return `---\nname: ${document.name}\ndescription: ${document.description}\n${model}---\n\n${document.prompt}`;
}

export function parseScheduledTaskDocument(
  content: string,
): ScheduledTaskDocument | null {
  const match = content
    .replace(/\r\n/g, "\n")
    .match(/^---\n([\s\S]*?)\n---\n+([\s\S]*)$/);
  if (match === null) return null;
  const name = match[1].match(/^name: (.+)$/m)?.[1];
  const description = match[1].match(/^description: (.+)$/m)?.[1];
  if (name === undefined || description === undefined) return null;
  const unquote = (value: string) =>
    value.startsWith('"') && value.endsWith('"') && value.length > 2
      ? value.slice(1, -1)
      : value;
  const modelValue = match[1].match(/^model: (.+)$/m)?.[1];
  const model =
    modelValue === undefined ? undefined : unquote(modelValue).trim();
  return {
    name: unquote(name),
    description: unquote(description),
    prompt: match[2].trimEnd(),
    model:
      model && !["default", "inherit"].includes(model.toLowerCase())
        ? model
        : undefined,
  };
}

export function parseScheduledTask(value: unknown): ScheduledTask | null {
  if (typeof value !== "object" || value === null || Array.isArray(value)) {
    return null;
  }
  const task = value as Record<string, unknown>;
  if (
    typeof task.id !== "string" ||
    !/^[a-z0-9_-]+$/.test(task.id) ||
    typeof task.enabled !== "boolean" ||
    typeof task.filePath !== "string" ||
    typeof task.createdAt !== "number"
  ) {
    return null;
  }
  return task as ScheduledTask;
}
