// Restored from ref/.vite/build/index.js (Resources mention and search service)

import { execFile } from "node:child_process";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const MAX_INDEX_FILES = 50_000;
const MAX_BFS_FILES = 2_000;
const MAX_BFS_DIRECTORIES = 200;
const MAX_BFS_DEPTH = 4;
const MAX_MENTIONS = 50;
const MAX_PREVIEW_LENGTH = 200;
const excludedDirectories = new Set([
  "node_modules",
  ".git",
  ".svn",
  ".hg",
  "dist",
  "build",
  "out",
  ".next",
  ".nuxt",
  ".cache",
  "__pycache__",
  ".tox",
  ".venv",
  "venv",
  "env",
  ".env",
  "coverage",
  ".nyc_output",
  ".turbo",
  ".parcel-cache",
  "target",
  "vendor",
  ".terraform",
  ".gradle",
  ".m2",
  ".mvn",
  ".idea",
  ".vscode",
  ".history",
  ".yarn",
  ".pnpm-store",
  ".npm",
  ".vite",
]);

export type ProjectFile = {
  name: string;
  relativePath: string;
  fullPath: string;
  isDirectory: boolean;
};

export type ResourceMention = {
  id: string;
  label: string;
  icon: "directory" | "file";
  category: "Files";
  metadata: string;
};

export type FileContentMatch = {
  relativePath: string;
  absPath: string;
  line: number;
  column: number;
  preview: string;
};

export class ResourceMentionService {
  private cwd: string | null = null;
  private remoteTarget: string | null = null;
  private indexedCwd: string | null = null;
  private index: ProjectFile[] = [];
  private readonly mentionFiles = new Map<string, ProjectFile>();

  setFocusedCwd(cwd: string | null): void {
    this.setFocus(cwd, null);
  }

  setFocusedSshTarget(cwd: string | null, sshConfigId: string | null): void {
    this.setFocus(cwd, sshConfigId);
  }

  async listProjectFiles(): Promise<ProjectFile[]> {
    await this.refreshIndex();
    return this.index.slice(0, MAX_INDEX_FILES);
  }

  async fetchMentionOptions(
    query: string,
    filter?: string,
  ): Promise<ResourceMention[]> {
    if (filter && filter !== "files") return [];
    await this.refreshIndex();
    const normalizedQuery = query.toLowerCase();
    const candidates = this.index
      .filter(
        (entry) =>
          normalizedQuery.length === 0 ||
          entry.name.toLowerCase().includes(normalizedQuery) ||
          entry.relativePath.toLowerCase().includes(normalizedQuery),
      )
      .slice(0, MAX_MENTIONS);
    return candidates.map((entry) => {
      const id = `file-${entry.fullPath}`;
      this.mentionFiles.set(id, entry);
      return {
        id,
        label: entry.relativePath,
        icon: entry.isDirectory ? "directory" : "file",
        category: "Files",
        metadata: JSON.stringify({
          path: entry.relativePath,
          isDirectory: entry.isDirectory,
        }),
      };
    });
  }

  handleMentionSelect(optionId: string): {
    chipText: string;
    additionalText?: string;
  } {
    if (!optionId.startsWith("file-")) {
      return {
        chipText: optionId,
        additionalText: "\n\n(Window no longer available)",
      };
    }
    const entry = this.mentionFiles.get(optionId);
    if (entry) return { chipText: entry.name };
    return {
      chipText: path.basename(optionId.slice(5)),
      additionalText: "\n\n(File metadata not found)",
    };
  }

  async searchFileContents(
    query: string,
    requestedMaxResults?: number,
  ): Promise<FileContentMatch[]> {
    const cwd = this.cwd;
    const normalizedQuery = query.trim();
    if (!cwd || this.remoteTarget || normalizedQuery.length === 0) return [];
    const maxResults = Math.min(1_000, Math.max(1, requestedMaxResults ?? 200));
    try {
      const { stdout } = await execFileAsync(
        "rg",
        [
          "--json",
          "--no-config",
          "-S",
          "--fixed-strings",
          "--max-count",
          "5",
          "--max-columns",
          String(MAX_PREVIEW_LENGTH),
          "--max-columns-preview",
          "-g",
          "!node_modules",
          "--",
          normalizedQuery,
          ".",
        ],
        {
          cwd,
          timeout: 8_000,
          maxBuffer: 16 * 1024 * 1024,
        },
      );
      return parseRipgrepMatches(stdout, cwd, maxResults);
    } catch (error) {
      const stdout = readExecStdout(error);
      return stdout ? parseRipgrepMatches(stdout, cwd, maxResults) : [];
    }
  }

  private setFocus(cwd: string | null, remoteTarget: string | null): void {
    if (cwd === this.cwd && remoteTarget === this.remoteTarget) return;
    this.cwd = cwd;
    this.remoteTarget = remoteTarget;
    this.indexedCwd = null;
    this.index = [];
    this.mentionFiles.clear();
  }

  private async refreshIndex(): Promise<void> {
    const cwd = this.cwd;
    if (!cwd || this.remoteTarget) {
      this.index = [];
      this.indexedCwd = cwd;
      return;
    }
    if (this.indexedCwd === cwd) return;
    this.index =
      (await listGitFiles(cwd)) ?? (await listFilesBreadthFirst(cwd));
    this.indexedCwd = cwd;
  }
}

async function listGitFiles(cwd: string): Promise<ProjectFile[] | null> {
  try {
    const { stdout } = await execFileAsync(
      "git",
      [
        "-c",
        "core.fsmonitor=false",
        "-c",
        "core.hooksPath=/dev/null",
        "-c",
        "core.quotepath=false",
        "ls-files",
        "--recurse-submodules",
      ],
      { cwd, timeout: 15_000, maxBuffer: 64 * 1024 * 1024 },
    );
    const result: ProjectFile[] = [];
    const seen = new Set<string>();
    for (const relativePath of stdout.split("\n")) {
      if (!relativePath || result.length >= MAX_INDEX_FILES) continue;
      const segments = relativePath.split("/");
      for (let index = 1; index < segments.length; index += 1) {
        const directory = segments.slice(0, index).join("/");
        if (seen.has(directory)) continue;
        seen.add(directory);
        result.push({
          name: segments[index - 1],
          relativePath: directory,
          fullPath: path.join(cwd, directory),
          isDirectory: true,
        });
      }
      if (seen.has(relativePath)) continue;
      seen.add(relativePath);
      result.push({
        name: path.basename(relativePath),
        relativePath,
        fullPath: path.join(cwd, relativePath),
        isDirectory: false,
      });
    }
    return result;
  } catch {
    return null;
  }
}

async function listFilesBreadthFirst(cwd: string): Promise<ProjectFile[]> {
  const result: ProjectFile[] = [];
  const queue: Array<readonly [string, number]> = [[cwd, 0]];
  let visitedDirectories = 0;
  while (
    queue.length > 0 &&
    result.length < MAX_BFS_FILES &&
    visitedDirectories < MAX_BFS_DIRECTORIES
  ) {
    const [directory, depth] = queue.shift()!;
    if (depth > MAX_BFS_DEPTH) continue;
    visitedDirectories += 1;
    const children = await fs
      .readdir(directory, { withFileTypes: true })
      .catch(() => []);
    for (const child of children) {
      if (result.length >= MAX_BFS_FILES) break;
      if (isMetadataFile(child.name)) continue;
      if (child.isDirectory() && excludedDirectories.has(child.name)) continue;
      const fullPath = path.join(directory, child.name);
      const relativePath = path.relative(cwd, fullPath).replaceAll("\\", "/");
      result.push({
        name: child.name,
        relativePath,
        fullPath,
        isDirectory: child.isDirectory(),
      });
      if (child.isDirectory()) queue.push([fullPath, depth + 1]);
    }
  }
  return result;
}

function isMetadataFile(name: string): boolean {
  return (
    name === ".git" ||
    name === ".svn" ||
    name === ".hg" ||
    name === "CVS" ||
    name === ".DS_Store" ||
    name === "__MACOSX" ||
    name === "Thumbs.db" ||
    name === "desktop.ini"
  );
}

function parseRipgrepMatches(
  output: string,
  cwd: string,
  maxResults: number,
): FileContentMatch[] {
  const matches: FileContentMatch[] = [];
  for (const line of output.split("\n")) {
    if (!line || matches.length >= maxResults) continue;
    let event: unknown;
    try {
      event = JSON.parse(line);
    } catch {
      continue;
    }
    if (!isRipgrepMatch(event)) continue;
    const relativePath = event.data.path.text
      .replaceAll("\\", "/")
      .replace(/^\.\//, "");
    matches.push({
      relativePath,
      absPath: path.join(cwd, relativePath),
      line: event.data.line_number,
      column: (event.data.submatches[0]?.start ?? 0) + 1,
      preview: event.data.lines.text
        .replace(/\r?\n$/, "")
        .slice(0, MAX_PREVIEW_LENGTH),
    });
  }
  return matches;
}

type RipgrepMatch = {
  type: "match";
  data: {
    path: { text: string };
    lines: { text: string };
    line_number: number;
    submatches: Array<{ start: number }>;
  };
};

function isRipgrepMatch(value: unknown): value is RipgrepMatch {
  return (
    typeof value === "object" &&
    value != null &&
    "type" in value &&
    value.type === "match" &&
    "data" in value &&
    typeof value.data === "object" &&
    value.data != null &&
    "path" in value.data &&
    typeof value.data.path === "object" &&
    value.data.path != null &&
    "text" in value.data.path &&
    typeof value.data.path.text === "string" &&
    "lines" in value.data &&
    typeof value.data.lines === "object" &&
    value.data.lines != null &&
    "text" in value.data.lines &&
    typeof value.data.lines.text === "string" &&
    "line_number" in value.data &&
    typeof value.data.line_number === "number" &&
    "submatches" in value.data &&
    Array.isArray(value.data.submatches)
  );
}

function readExecStdout(error: unknown): string {
  if (
    typeof error === "object" &&
    error != null &&
    "stdout" in error &&
    typeof error.stdout === "string"
  ) {
    return error.stdout;
  }
  return "";
}
