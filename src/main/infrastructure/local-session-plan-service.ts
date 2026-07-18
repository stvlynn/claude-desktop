// Restored from ref/.vite/build/index.js

import path from "node:path";
import { readFile, realpath } from "node:fs/promises";

export class LocalSessionPlanService {
  async find(transcript: unknown[], cwd: string, home: string) {
    const candidates = collectStrings(transcript).filter((value) =>
      /[/\\]\.claude[/\\]plans[/\\][^/\\]+\.md$/.test(value),
    );
    const planPath = candidates.at(-1);
    if (!planPath) return null;
    const resolved = await realpath(path.resolve(planPath)).catch(() => null);
    if (!resolved) return null;
    const allowedRoots = [
      path.join(home, ".claude", "plans"),
      path.join(cwd, ".claude", "plans"),
    ];
    if (!allowedRoots.some((root) => isInside(root, resolved))) return null;
    const content = await readFile(resolved, "utf8").catch(() => null);
    return content === null ? null : { path: resolved, content };
  }
}

function collectStrings(value: unknown, depth = 0): string[] {
  if (depth > 8) return [];
  if (typeof value === "string") return [value];
  if (Array.isArray(value))
    return value.flatMap((item) => collectStrings(item, depth + 1));
  if (isRecord(value))
    return Object.values(value).flatMap((item) =>
      collectStrings(item, depth + 1),
    );
  return [];
}

function isInside(root: string, target: string): boolean {
  const relative = path.relative(path.resolve(root), target);
  return (
    relative === "" ||
    (!relative.startsWith("..") && !path.isAbsolute(relative))
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
