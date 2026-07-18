// Restored from ref/.vite/build/index.js

import path from "node:path";
import { access } from "node:fs/promises";
import type { App } from "electron";
import { LocalSessionRuntimeService } from "./local-session-runtime-service";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export class LocalSessionCatalogService {
  constructor(
    private readonly app: App,
    private readonly runtime: LocalSessionRuntimeService,
  ) {}

  async sessionsForScheduledTask(taskId: string) {
    return (await this.runtime.getAll()).filter(
      (session) => session.scheduledTaskId === taskId,
    );
  }

  async findByMetadata(key: string, value: string) {
    return (
      (await this.runtime.getAll()).find(
        (session) => session.metadata[key] === value,
      )?.sessionId ?? null
    );
  }

  async resolveBackgroundSuggestion(
    sessionId: string,
    taskId: string,
    launched: boolean,
  ) {
    const session = await this.runtime.getSession(sessionId);
    if (!session) throw new Error(`Session not found: ${sessionId}`);
    const suggestions = Array.isArray(
      session.metadata.backgroundTaskSuggestions,
    )
      ? session.metadata.backgroundTaskSuggestions.filter(isRecord)
      : [];
    if (!suggestions.some((suggestion) => suggestion.id === taskId)) {
      return false;
    }
    await this.runtime.updateSession(sessionId, {
      backgroundTaskSuggestions: suggestions.filter(
        (suggestion) => suggestion.id !== taskId,
      ),
      resolvedBackgroundTaskSuggestion: { taskId, launched },
    });
    return true;
  }

  async resolveFirstBackgroundSuggestion(sessionId: string, launched: boolean) {
    const session = await this.runtime.getSession(sessionId);
    if (!session) throw new Error(`Session not found: ${sessionId}`);
    const suggestions = Array.isArray(
      session.metadata.backgroundTaskSuggestions,
    )
      ? session.metadata.backgroundTaskSuggestions.filter(isRecord)
      : [];
    const first = suggestions[0];
    return typeof first?.id === "string"
      ? this.resolveBackgroundSuggestion(sessionId, first.id, launched)
      : false;
  }

  async detectedProjects() {
    const home = this.app.getPath("home");
    const candidates = ["Desktop", "Documents", "Developer", "code", "src"];
    const projects = [];
    for (const name of candidates) {
      const candidate = path.join(home, name);
      if (
        await access(candidate)
          .then(() => true)
          .catch(() => false)
      ) {
        projects.push({ name, path: candidate });
      }
    }
    return projects;
  }

  async codeStats() {
    const sessions = await this.runtime.getAll();
    return {
      sessions: sessions.length,
      active: sessions.filter((session) => session.lifecycleState === "running")
        .length,
      archived: sessions.filter(
        (session) => session.lifecycleState === "archived",
      ).length,
    };
  }
}
