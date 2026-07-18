// Restored from ref/.vite/build/index.js

import { randomUUID } from "node:crypto";
import { constants as fsConstants, createWriteStream } from "node:fs";
import {
  access,
  lstat,
  mkdir,
  open,
  readdir,
  realpath,
  rename,
  stat,
  writeFile,
} from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import {
  app,
  BrowserWindow,
  dialog,
  nativeImage,
  net,
  shell,
  type WebContents,
} from "electron";
import mime from "mime-types";

const MAX_FILE_BYTES = 50 * 1024 * 1024;
const BLOCKED_EXTENSIONS = new Set([
  ".app",
  ".bat",
  ".cmd",
  ".com",
  ".exe",
  ".msi",
  ".ps1",
  ".sh",
  ".vb",
]);

export class FileSystemService {
  private readonly approvedRootsBySession = new Map<string, Set<string>>();

  async writeFileDownload(
    filename: string,
    url: string,
  ): Promise<string | null> {
    const parsed = new URL(url);
    if (!isClaudeDownloadHost(parsed.hostname) || unsafeFilename(filename)) {
      return null;
    }
    const response = await net.fetch(parsed.toString());
    if (!response.ok || !response.body) {
      throw new Error(`Download failed: HTTP ${response.status}`);
    }
    const downloads = await realpath(app.getPath("downloads"));
    const target = await uniquePath(downloads, filename);
    const temporary = `${target}.${randomUUID()}.tmp`;
    await pipeline(
      Readable.fromWeb(response.body as never),
      createWriteStream(temporary, { mode: 0o600 }),
    );
    await rename(temporary, target);
    app.dock?.downloadFinished(target);
    return target;
  }

  async writeFileDownloadAndOpen(
    filename: string,
    url: string,
  ): Promise<string | null> {
    const target = await this.writeFileDownload(filename, url);
    if (!target || !(await regularSymlinkFreeFile(target))) return null;
    const error = await shell.openPath(target);
    if (error) shell.showItemInFolder(target);
    return target;
  }

  async whichApplication(_filename: string): Promise<null> {
    return null;
  }

  async browseFolder(
    sender: WebContents,
    title: string,
    restrictToHomeDir: boolean,
    validateAsCoworkMount: boolean,
  ): Promise<string | null> {
    const result = await showOpenDialogFor(sender, {
      properties: ["openDirectory", "createDirectory"],
      title,
      defaultPath: os.homedir(),
    });
    const selected = result.filePaths[0];
    if (result.canceled || !selected) return null;
    return this.validateSelectedFolder(
      selected,
      restrictToHomeDir,
      validateAsCoworkMount,
    )
      ? realpath(selected)
      : null;
  }

  async browseFolders(
    sender: WebContents,
    title: string,
    restrictToHomeDir: boolean,
    validateAsCoworkMount: boolean,
  ): Promise<string[] | null> {
    const result = await showOpenDialogFor(sender, {
      properties: ["openDirectory", "createDirectory", "multiSelections"],
      title,
      defaultPath: os.homedir(),
    });
    if (result.canceled) return null;
    const accepted = await Promise.all(
      result.filePaths
        .filter((folder) =>
          this.validateSelectedFolder(
            folder,
            restrictToHomeDir,
            validateAsCoworkMount,
          ),
        )
        .map((folder) => realpath(folder)),
    );
    return accepted.length > 0 ? accepted : null;
  }

  async listDirectory(dirPath: string): Promise<{
    directories: string[];
    error?: string;
  }> {
    try {
      const resolved = await realpath(path.resolve(dirPath));
      if (!isWithinHome(resolved)) {
        return {
          directories: [],
          error: "Folder is outside the home directory.",
        };
      }
      const entries = await readdir(resolved, { withFileTypes: true });
      return {
        directories: entries
          .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
          .map((entry) => entry.name)
          .sort((left, right) => left.localeCompare(right)),
      };
    } catch {
      return {
        directories: [],
        error: "Couldn't open that folder. Check the path and try again.",
      };
    }
  }

  getSystemPath(pathType: string): string | null {
    const paths = new Set([
      "downloads",
      "documents",
      "pictures",
      "music",
      "videos",
      "desktop",
      "home",
    ]);
    if (!paths.has(pathType)) return null;
    return app.getPath(pathType as Parameters<typeof app.getPath>[0]);
  }

  async openLocalFile(
    sender: WebContents,
    sessionId: string,
    encodedPath: string,
    showInFolder: boolean,
  ): Promise<void> {
    const filePath = await this.authorizePath(
      sender,
      sessionId,
      encodedPath,
      "open",
    );
    if (!(await regularSymlinkFreeFile(filePath))) {
      throw new Error("Path is not a regular file");
    }
    if (showInFolder) shell.showItemInFolder(filePath);
    else {
      const error = await shell.openPath(filePath);
      if (error) throw new Error(`Failed to open file: ${error}`);
    }
  }

  async readLocalFile(
    sender: WebContents,
    sessionId: string,
    encodedPath: string,
  ) {
    const filePath = await this.authorizePath(
      sender,
      sessionId,
      encodedPath,
      "read",
    );
    const handle = await open(filePath, fsConstants.O_RDONLY);
    try {
      const info = await handle.stat();
      if (!info.isFile() || info.size > MAX_FILE_BYTES) {
        throw new Error("File is not readable or is larger than 50 MB");
      }
      const content = await handle.readFile();
      return encodeLocalFile(content, filePath);
    } finally {
      await handle.close();
    }
  }

  async getLocalFileThumbnail(
    sender: WebContents,
    sessionId: string,
    encodedPath: string,
    maxSize: number,
  ): Promise<{ dataUrl: string; width: number; height: number } | null> {
    const filePath = await this.authorizePath(
      sender,
      sessionId,
      encodedPath,
      "read",
    );
    if (!/\.(png|jpe?g|gif|webp|bmp)$/i.test(filePath)) return null;
    const info = await stat(filePath);
    if (info.size > 20 * 1024 * 1024) return null;
    const image = nativeImage.createFromPath(filePath);
    if (image.isEmpty()) return null;
    const resized = image.resize({
      height: Math.min(512, Math.max(1, Math.floor(maxSize))),
      quality: "good",
    });
    const size = resized.getSize();
    return {
      dataUrl: resized.toDataURL(),
      width: size.width,
      height: size.height,
    };
  }

  async writeLocalFile(
    sender: WebContents,
    sessionId: string,
    encodedPath: string,
    content: string,
  ): Promise<boolean> {
    const requested = decodeURIComponent(encodedPath);
    const parent = await this.authorizePath(
      sender,
      sessionId,
      path.dirname(requested),
      "write",
    );
    const target = path.join(parent, path.basename(requested));
    if (unsafeFilename(path.basename(target)) || blockedExtension(target)) {
      throw new Error("Blocked file path");
    }
    await writeFile(target, content, { encoding: "utf8", mode: 0o600 });
    return true;
  }

  async listFilesInFolder(
    sender: WebContents,
    sessionId: string,
    folderPath: string,
  ): Promise<Array<{ name: string; path: string; isDirectory: boolean }>> {
    const folder = await this.authorizePath(
      sender,
      sessionId,
      folderPath,
      "read",
    );
    const entries = await readdir(folder, { withFileTypes: true });
    return entries
      .filter((entry) => !entry.name.startsWith("."))
      .map((entry) => ({
        name: entry.name,
        path: path.join(folder, entry.name),
        isDirectory: entry.isDirectory(),
      }));
  }

  showInFolder(filePath: string): void {
    shell.showItemInFolder(path.resolve(filePath));
  }

  async savePastedFile(base64: string, _mimeType: string, filename: string) {
    if (unsafeFilename(filename) || blockedExtension(filename)) {
      return { error: "Blocked filename" };
    }
    const root = path.join(app.getPath("userData"), "pasted-files");
    await mkdir(root, { recursive: true });
    const target = path.join(
      root,
      `${randomUUID()}-${path.basename(filename)}`,
    );
    await writeFile(target, Buffer.from(base64, "base64"), { mode: 0o600 });
    return { path: target };
  }

  async browseFiles(
    sender: WebContents,
    title: string,
  ): Promise<string[] | null> {
    const properties: Array<"openFile" | "openDirectory" | "multiSelections"> =
      process.platform === "darwin"
        ? ["openFile", "openDirectory", "multiSelections"]
        : ["openFile", "multiSelections"];
    const result = await showOpenDialogFor(sender, { properties, title });
    return result.canceled || result.filePaths.length === 0
      ? null
      : result.filePaths;
  }

  async exportLocalFileToGoogleDrive(): Promise<{ errorCode: string }> {
    return { errorCode: "hipaa_gated" };
  }

  async promoteScratchpadFile(): Promise<never> {
    throw new Error(
      "A running local session is required to promote a scratchpad file",
    );
  }

  private async authorizePath(
    sender: WebContents,
    sessionId: string,
    encodedPath: string,
    action: "read" | "open" | "write",
  ): Promise<string> {
    if (!sessionId.startsWith("local_") && !sessionId.startsWith("session_")) {
      throw new Error("Invalid local session");
    }
    const requested = decodeURIComponent(encodedPath);
    if (!path.isAbsolute(requested) || requested.startsWith("//")) {
      throw new Error("Path must be an absolute local path");
    }
    const resolved = await realpath(requested);
    if (blockedExtension(resolved)) throw new Error("Blocked file type");
    const roots =
      this.approvedRootsBySession.get(sessionId) ?? new Set<string>();
    if (![...roots].some((root) => containsPath(root, resolved))) {
      const response = await showMessageBoxFor(sender, {
        type: "question",
        buttons: ["Cancel", "Allow"],
        defaultId: 0,
        cancelId: 0,
        title: "File Access Request",
        message: `Allow Claude to ${action} this file?`,
        detail: resolved,
      });
      if (response.response !== 1) throw new Error("User denied file access");
      roots.add(
        (await stat(resolved)).isDirectory()
          ? resolved
          : path.dirname(resolved),
      );
      this.approvedRootsBySession.set(sessionId, roots);
    }
    return resolved;
  }

  private validateSelectedFolder(
    selected: string,
    restrictToHomeDir: boolean,
    validateAsCoworkMount: boolean,
  ): boolean {
    const absolute = path.resolve(selected);
    if (restrictToHomeDir && !isWithinHome(absolute)) return false;
    if (validateAsCoworkMount && isProtectedMount(absolute)) return false;
    return !absolute.startsWith("//");
  }
}

function encodeLocalFile(content: Buffer, filePath: string) {
  const extension = path.extname(filePath).toLowerCase();
  const mimeType = mime.lookup(extension) || "text/plain";
  const isText =
    mimeType.startsWith("text/") ||
    ["application/json", "application/xml", "image/svg+xml"].includes(mimeType);
  return {
    content: isText ? content.toString("utf8") : content.toString("base64"),
    mimeType,
    fileName: path.basename(filePath),
    encoding: isText ? "utf-8" : "base64",
  };
}

function containsPath(root: string, candidate: string): boolean {
  const relative = path.relative(root, candidate);
  return (
    relative === "" ||
    (!relative.startsWith("..") && !path.isAbsolute(relative))
  );
}

function isWithinHome(candidate: string): boolean {
  return containsPath(path.resolve(os.homedir()), path.resolve(candidate));
}

function isProtectedMount(candidate: string): boolean {
  const resolved = path.resolve(candidate);
  return (
    resolved === path.parse(resolved).root ||
    resolved === path.resolve(os.homedir()) ||
    [".ssh", ".gnupg", ".aws", ".config"].some((name) =>
      containsPath(path.join(os.homedir(), name), resolved),
    )
  );
}

function unsafeFilename(filename: string): boolean {
  return filename !== path.basename(filename) || filename.includes("\0");
}

function blockedExtension(filePath: string): boolean {
  return BLOCKED_EXTENSIONS.has(path.extname(filePath).toLowerCase());
}

function isClaudeDownloadHost(hostname: string): boolean {
  return ["claude.ai", "claude.com", "api.claude.ai"].includes(hostname);
}

async function uniquePath(
  directory: string,
  filename: string,
): Promise<string> {
  const extension = path.extname(filename);
  const stem = path.basename(filename, extension);
  let candidate = path.join(directory, filename);
  for (let suffix = 1; ; suffix += 1) {
    try {
      await access(candidate);
      candidate = path.join(directory, `${stem}_${suffix}${extension}`);
    } catch {
      return candidate;
    }
  }
}

async function regularSymlinkFreeFile(filePath: string): Promise<boolean> {
  const [resolved, info] = await Promise.all([
    realpath(filePath),
    lstat(filePath),
  ]);
  return resolved === filePath && info.isFile() && !info.isSymbolicLink();
}

function showOpenDialogFor(
  sender: WebContents,
  options: Electron.OpenDialogOptions,
): Promise<Electron.OpenDialogReturnValue> {
  const parent = BrowserWindow.fromWebContents(sender);
  return parent
    ? dialog.showOpenDialog(parent, options)
    : dialog.showOpenDialog(options);
}

function showMessageBoxFor(
  sender: WebContents,
  options: Electron.MessageBoxOptions,
): Promise<Electron.MessageBoxReturnValue> {
  const parent = BrowserWindow.fromWebContents(sender);
  return parent
    ? dialog.showMessageBox(parent, options)
    : dialog.showMessageBox(options);
}
