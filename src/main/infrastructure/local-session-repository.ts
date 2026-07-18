// Restored from ref/.vite/build/index.js

import path from "node:path";
import {
  appendFile,
  mkdir,
  readFile,
  readdir,
  rename,
  rm,
  writeFile,
} from "node:fs/promises";
import type { App } from "electron";
import type { LocalSessionRecord } from "../domain/local-session";
import { assertSessionId } from "../domain/local-session";

export class LocalSessionRepository {
  constructor(private readonly app: App) {}

  async save(record: LocalSessionRecord): Promise<void> {
    assertSessionId(record.sessionId);
    await atomicJson(this.metadataPath(record.sessionId), record);
  }

  async get(sessionId: string): Promise<LocalSessionRecord | null> {
    assertSessionId(sessionId);
    try {
      return JSON.parse(
        await readFile(this.metadataPath(sessionId), "utf8"),
      ) as LocalSessionRecord;
    } catch {
      return null;
    }
  }

  async all(): Promise<LocalSessionRecord[]> {
    await mkdir(this.sessionsRoot, { recursive: true, mode: 0o700 });
    const records = await Promise.all(
      (await readdir(this.sessionsRoot, { withFileTypes: true }))
        .filter((entry) => entry.isDirectory())
        .map((entry) => this.get(entry.name).catch(() => null)),
    );
    return records
      .filter((record): record is LocalSessionRecord => record !== null)
      .sort((left, right) => right.lastActivityAt - left.lastActivityAt);
  }

  async appendTranscript(sessionId: string, event: unknown): Promise<void> {
    assertSessionId(sessionId);
    const target = this.transcriptPath(sessionId);
    await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
    await appendFile(target, `${JSON.stringify(event)}\n`, { mode: 0o600 });
  }

  async transcript(sessionId: string): Promise<unknown[]> {
    assertSessionId(sessionId);
    const content = await readFile(
      this.transcriptPath(sessionId),
      "utf8",
    ).catch(() => "");
    return content
      .split("\n")
      .filter(Boolean)
      .flatMap((line) => {
        try {
          return [JSON.parse(line) as unknown];
        } catch {
          return [];
        }
      });
  }

  async remove(sessionId: string): Promise<void> {
    assertSessionId(sessionId);
    await rm(this.sessionRoot(sessionId), { recursive: true, force: true });
  }

  async clearTranscript(sessionId: string): Promise<void> {
    assertSessionId(sessionId);
    await writeFile(this.transcriptPath(sessionId), "", { mode: 0o600 });
  }

  async copyTranscript(
    sourceSessionId: string,
    targetSessionId: string,
  ): Promise<void> {
    assertSessionId(sourceSessionId);
    assertSessionId(targetSessionId);
    const content = await readFile(this.transcriptPath(sourceSessionId)).catch(
      () => Buffer.alloc(0),
    );
    const target = this.transcriptPath(targetSessionId);
    await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
    await writeFile(target, content, { mode: 0o600 });
  }

  outputsDir(sessionId: string): string {
    assertSessionId(sessionId);
    return path.join(this.sessionRoot(sessionId), "outputs");
  }

  private get sessionsRoot(): string {
    return path.join(this.app.getPath("userData"), "local-agent-sessions");
  }
  private sessionRoot(sessionId: string): string {
    return path.join(this.sessionsRoot, sessionId);
  }
  private metadataPath(sessionId: string): string {
    return path.join(this.sessionRoot(sessionId), "session.json");
  }
  private transcriptPath(sessionId: string): string {
    return path.join(this.sessionRoot(sessionId), "transcript.jsonl");
  }
}

async function atomicJson(target: string, value: unknown): Promise<void> {
  await mkdir(path.dirname(target), { recursive: true, mode: 0o700 });
  const temporary = `${target}.${process.pid}.tmp`;
  await writeFile(temporary, `${JSON.stringify(value, null, 2)}\n`, {
    mode: 0o600,
  });
  await rename(temporary, target);
}
