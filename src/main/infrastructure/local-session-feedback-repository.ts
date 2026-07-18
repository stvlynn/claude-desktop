// Restored from ref/.vite/build/index.js

import path from "node:path";
import { mkdir, readFile, rename, writeFile } from "node:fs/promises";
import type { App } from "electron";
import { assertSessionId } from "../domain/local-session";

export type TranscriptFeedback = {
  freeText: string;
  steps: Array<{
    toolUseId: string;
    thumb: string | null;
    note: string | null;
  }>;
  submittedAt: number;
};

export class LocalSessionFeedbackRepository {
  constructor(private readonly app: App) {}

  async append(sessionId: string, value: unknown): Promise<boolean> {
    const feedback = validateFeedback(value);
    const items = await this.get(sessionId);
    items.push(feedback);
    await atomicJson(this.path(sessionId), items);
    return true;
  }

  async get(sessionId: string): Promise<TranscriptFeedback[]> {
    assertSessionId(sessionId);
    try {
      const value = JSON.parse(
        await readFile(this.path(sessionId), "utf8"),
      ) as unknown;
      return Array.isArray(value) ? value.map(validateFeedback) : [];
    } catch {
      return [];
    }
  }

  private path(sessionId: string): string {
    assertSessionId(sessionId);
    return path.join(
      this.app.getPath("userData"),
      "local-agent-sessions",
      sessionId,
      "feedback.json",
    );
  }
}

function validateFeedback(value: unknown): TranscriptFeedback {
  if (!isRecord(value) || typeof value.freeText !== "string") {
    throw new TypeError("Invalid transcript feedback");
  }
  if (!Array.isArray(value.steps)) {
    throw new TypeError("Transcript feedback steps must be an array");
  }
  const steps = value.steps.map((step) => {
    if (
      !isRecord(step) ||
      typeof step.toolUseId !== "string" ||
      !nullableString(step.thumb) ||
      !nullableString(step.note)
    ) {
      throw new TypeError("Invalid transcript feedback step");
    }
    return {
      toolUseId: step.toolUseId,
      thumb: step.thumb,
      note: step.note,
    };
  });
  if (typeof value.submittedAt !== "number") {
    throw new TypeError("Transcript feedback requires submittedAt");
  }
  return { freeText: value.freeText, steps, submittedAt: value.submittedAt };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function nullableString(value: unknown): value is string | null {
  return value === null || typeof value === "string";
}

async function atomicJson(target: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
  const temporary = `${target}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, {
    mode: 0o600,
  });
  await rename(temporary, target);
}
