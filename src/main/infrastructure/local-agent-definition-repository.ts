// Restored from ref/.vite/build/index.js

import path from "node:path";
import os from "node:os";
import { mkdir, writeFile } from "node:fs/promises";

export type CreateAgentInput = {
  name: string;
  description: string;
  systemPrompt: string;
  scope: "user" | "project";
  cwd?: string;
};

export class LocalAgentDefinitionRepository {
  async create(input: CreateAgentInput) {
    if (!/^[a-z0-9-]+$/.test(input.name)) {
      return {
        success: false,
        error: "Agent name must be lowercase letters, numbers, and hyphens.",
      };
    }
    const root =
      input.scope === "project"
        ? input.cwd
          ? path.join(path.resolve(input.cwd), ".claude", "agents")
          : null
        : path.join(
            process.env.CLAUDE_CONFIG_DIR ?? path.join(os.homedir(), ".claude"),
            "agents",
          );
    if (!root) {
      return {
        success: false,
        error: "Project scope requires a folder to be selected.",
      };
    }
    const target = path.join(root, `${input.name}.md`);
    const description = input.description
      .replace(/[\r\n]+/g, " ")
      .replace(/\\/g, "\\\\")
      .replace(/"/g, '\\"');
    const content = `---\nname: ${input.name}\ndescription: "${description}"\n---\n\n${input.systemPrompt}\n`;
    try {
      await mkdir(root, { recursive: true, mode: 0o700 });
      await writeFile(target, content, { flag: "wx", mode: 0o600 });
      return { success: true, filePath: target };
    } catch (error) {
      return {
        success: false,
        error:
          isNodeError(error) && error.code === "EEXIST"
            ? `An agent named "${input.name}" already exists.`
            : error instanceof Error
              ? error.message
              : String(error),
      };
    }
  }
}

export function normalizeCreateAgentInput(value: unknown): CreateAgentInput {
  if (!isRecord(value))
    throw new TypeError("Agent parameters must be an object");
  const name = requiredString(value, "name");
  const description = requiredString(value, "description");
  const systemPrompt = requiredString(value, "systemPrompt");
  const scope = requiredString(value, "scope");
  if (scope !== "user" && scope !== "project")
    throw new TypeError("Agent scope must be user or project");
  return {
    name,
    description,
    systemPrompt,
    scope,
    cwd: typeof value.cwd === "string" ? value.cwd : undefined,
  };
}

function requiredString(value: Record<string, unknown>, key: string): string {
  const property = value[key];
  if (typeof property !== "string")
    throw new TypeError(`${key} must be a string`);
  return property;
}

function isNodeError(value: unknown): value is NodeJS.ErrnoException {
  return value instanceof Error && "code" in value;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
