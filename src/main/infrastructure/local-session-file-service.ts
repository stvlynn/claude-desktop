// Restored from ref/.vite/build/index.js

import path from "node:path";
import {
  lstat,
  mkdir,
  readFile,
  readdir,
  realpath,
  writeFile,
} from "node:fs/promises";
import { BrowserWindow, dialog, shell, type WebContents } from "electron";

const maximumReadBytes = 50 * 1024 * 1024;

export class LocalSessionFileService {
  async pickFile(root: string, owner?: WebContents) {
    const options: Electron.OpenDialogOptions = {
      defaultPath: root,
      properties: ["openFile"],
    };
    const window = owner ? BrowserWindow.fromWebContents(owner) : null;
    const result = window
      ? await dialog.showOpenDialog(window, options)
      : await dialog.showOpenDialog(options);
    if (result.canceled || !result.filePaths[0]) return null;
    const selected = await containedPath(root, result.filePaths[0]);
    return selected ? { path: selected, name: path.basename(selected) } : null;
  }

  async read(root: string, relativeOrAbsolute: string): Promise<string> {
    const target = await requireContainedPath(root, relativeOrAbsolute);
    await assertReadableFile(target);
    return readFile(target, "utf8");
  }

  async resolve(
    root: string,
    relativeOrAbsolute: string,
  ): Promise<string | null> {
    return containedPath(root, relativeOrAbsolute);
  }

  async list(root: string, relative = ".") {
    const target = await requireContainedPath(root, relative);
    const entries = await readdir(target, { withFileTypes: true });
    return entries.map((entry) => ({
      name: entry.name,
      path: path.relative(root, path.join(target, entry.name)),
      isDirectory: entry.isDirectory(),
      isFile: entry.isFile(),
    }));
  }

  async dataUrl(root: string, relativeOrAbsolute: string): Promise<string> {
    const target = await requireContainedPath(root, relativeOrAbsolute);
    await assertReadableFile(target);
    const bytes = await readFile(target);
    return `data:${mimeType(target)};base64,${bytes.toString("base64")}`;
  }

  async write(
    root: string,
    relative: string,
    content: unknown,
    options?: unknown,
  ) {
    if (path.isAbsolute(relative) || relative.split(/[\\/]/).includes(".."))
      throw new Error("Destination must stay inside the session folder");
    const rootPath = await realpath(root);
    const target = path.resolve(rootPath, relative);
    if (!inside(rootPath, target))
      throw new Error("Destination must stay inside the session folder");
    await mkdir(path.dirname(target), { recursive: true });
    const parent = await realpath(path.dirname(target));
    if (!inside(rootPath, parent))
      throw new Error("Destination parent resolves outside the session folder");
    const encoding =
      isRecord(options) && options.encoding === "base64" ? "base64" : "utf8";
    const bytes =
      typeof content === "string"
        ? Buffer.from(content, encoding)
        : Buffer.isBuffer(content)
          ? content
          : isRecord(content) && Array.isArray(content.data)
            ? Buffer.from(content.data)
            : null;
    if (!bytes) throw new TypeError("File content must be text or bytes");
    await writeFile(target, bytes, { flag: "w" });
    return { path: target, bytesWritten: bytes.byteLength };
  }

  async open(root: string, relativeOrAbsolute: string) {
    const target = await requireContainedPath(root, relativeOrAbsolute);
    await assertReadableFile(target);
    const error = await shell.openPath(target);
    return error ? { ok: false, error } : { ok: true };
  }
}

async function containedPath(
  root: string,
  relativeOrAbsolute: string,
): Promise<string | null> {
  const resolvedRoot = await realpath(path.resolve(root)).catch(() => null);
  if (!resolvedRoot) return null;
  const candidate = path.isAbsolute(relativeOrAbsolute)
    ? path.resolve(relativeOrAbsolute)
    : path.resolve(resolvedRoot, relativeOrAbsolute);
  if (!inside(resolvedRoot, candidate)) return null;
  const resolvedCandidate = await realpath(candidate).catch(() => null);
  return resolvedCandidate && inside(resolvedRoot, resolvedCandidate)
    ? resolvedCandidate
    : null;
}

async function requireContainedPath(
  root: string,
  relativeOrAbsolute: string,
): Promise<string> {
  const target = await containedPath(root, relativeOrAbsolute);
  if (!target) throw new Error("Path is missing or outside the session folder");
  return target;
}

function inside(root: string, target: string): boolean {
  const relative = path.relative(root, target);
  return (
    relative === "" ||
    (!relative.startsWith("..") && !path.isAbsolute(relative))
  );
}

async function assertReadableFile(target: string): Promise<void> {
  const stats = await lstat(target);
  if (!stats.isFile()) throw new Error("Path is not a regular file");
  if (stats.size > maximumReadBytes)
    throw new Error(`File exceeds the ${maximumReadBytes} byte read limit`);
}

function mimeType(filePath: string): string {
  const extension = path.extname(filePath).toLowerCase();
  return (
    {
      ".png": "image/png",
      ".jpg": "image/jpeg",
      ".jpeg": "image/jpeg",
      ".gif": "image/gif",
      ".webp": "image/webp",
      ".svg": "image/svg+xml",
      ".mp4": "video/mp4",
      ".webm": "video/webm",
      ".mp3": "audio/mpeg",
      ".wav": "audio/wav",
      ".pdf": "application/pdf",
      ".json": "application/json",
      ".txt": "text/plain",
    }[extension] ?? "application/octet-stream"
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
