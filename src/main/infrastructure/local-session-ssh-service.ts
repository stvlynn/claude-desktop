// Restored from ref/.vite/build/index.js

import { requireCommand, runCommand } from "./local-session-command-runner";

export type SshConfig = {
  sshHost: string;
  sshPort?: number;
  sshIdentityFile?: string;
};

export class LocalSessionSshService {
  async uploadAttachments(
    config: SshConfig,
    sessionId: string,
    attachments: Array<{ name: string; bytes: Buffer }>,
  ): Promise<string[]> {
    const root = `$HOME/.claude/desktop-attachments/${sessionId}`;
    await this.text(config, `mkdir -p ${root} && chmod 700 ${root}`);
    const paths = [];
    for (let index = 0; index < attachments.length; index += 1) {
      const attachment = attachments[index];
      if (!attachment) continue;
      const name = `${String(index + 1).padStart(2, "0")}-${safeFileName(attachment.name)}`;
      const remotePath = `${root}/${name}`;
      await this.run(
        config,
        `(base64 --decode 2>/dev/null || base64 -d) > ${remotePath} && chmod 600 ${remotePath}`,
        60_000,
        attachment.bytes.toString("base64"),
      );
      paths.push(remotePath.replace("$HOME", "~"));
    }
    return paths;
  }
  async test(config: SshConfig) {
    const result = await this.run(config, "printf connected", 10_000).catch(
      (error) => ({
        error: error instanceof Error ? error.message : String(error),
      }),
    );
    return "error" in result
      ? { valid: false, error: result.error }
      : { valid: true };
  }

  async validatePath(config: SshConfig, remotePath: string) {
    const output = await this.text(
      config,
      `test -d ${quote(remotePath)} && printf directory || (test -e ${quote(remotePath)} && printf file || printf missing)`,
    );
    return output === "directory"
      ? { valid: true }
      : {
          valid: false,
          error:
            output === "file"
              ? "Path is not a directory"
              : "Path does not exist",
        };
  }

  async listDirectory(config: SshConfig, remotePath: string) {
    const output = await this.text(
      config,
      `find ${quote(remotePath)} -mindepth 1 -maxdepth 1 -printf '%f\\t%y\\n'`,
    );
    return {
      entries: output
        .split("\n")
        .filter(Boolean)
        .map((line) => {
          const [name, type] = line.split("\t");
          return {
            name,
            path: `${remotePath.replace(/\/$/, "")}/${name}`,
            isDirectory: type === "d",
          };
        }),
      resolvedPath: remotePath,
    };
  }

  async gitInfo(config: SshConfig, cwd: string) {
    const output = await this.text(
      config,
      `cd ${quote(cwd)} && git rev-parse --show-toplevel && git branch --show-current && (git remote get-url origin 2>/dev/null || true)`,
    );
    const [root, branch, remote] = output.split("\n");
    if (!root || !branch) return null;
    return { root, branch, repo: remote ? repositorySlug(remote) : "" };
  }

  async branches(config: SshConfig, cwd: string) {
    const output = await this.git(config, cwd, [
      "for-each-ref",
      "--sort=-committerdate",
      "--format=%(refname:short)%09%(objectname)%09%(HEAD)",
      "refs/heads",
    ]);
    return output
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [name, sha, head] = line.split("\t");
        return { name, sha, current: head === "*" };
      });
  }

  async gitDiff(config: SshConfig, cwd: string, base: string, head?: string) {
    const range = head ? `${base}..${head}` : base;
    const patch = await this.git(config, cwd, [
      "diff",
      "--find-renames",
      range,
    ]);
    return { patch, files: parsePatchFiles(patch), mergeBase: base };
  }

  async gitDiffStats(
    config: SshConfig,
    cwd: string,
    base: string,
    head?: string,
  ) {
    const range = head ? `${base}..${head}` : base;
    const output = await this.git(config, cwd, ["diff", "--numstat", range]);
    return output
      .split("\n")
      .filter(Boolean)
      .reduce(
        (result, line) => {
          const [added, deleted] = line.split("\t");
          result.additions += Number(added) || 0;
          result.deletions += Number(deleted) || 0;
          result.fileCount += 1;
          return result;
        },
        { additions: 0, deletions: 0, fileCount: 0 },
      );
  }

  async commits(config: SshConfig, cwd: string, base: string, head = "HEAD") {
    const output = await this.git(config, cwd, [
      "log",
      "--format=%H%x09%an%x09%ae%x09%aI%x09%s",
      `${base}..${head}`,
    ]);
    return output
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [sha, authorName, authorEmail, authoredAt, subject] =
          line.split("\t");
        return { sha, authorName, authorEmail, authoredAt, subject };
      });
  }

  commitDiff(config: SshConfig, cwd: string, sha: string) {
    return this.git(config, cwd, [
      "show",
      "--format=fuller",
      "--find-renames",
      sha,
    ]);
  }

  async diffFileContent(
    config: SshConfig,
    cwd: string,
    base: string,
    filePath: string,
    head?: string,
  ) {
    const oldText = await this.gitOptional(config, cwd, [
      "show",
      `${base}:${filePath}`,
    ]);
    const newText = head
      ? await this.gitOptional(config, cwd, ["show", `${head}:${filePath}`])
      : await this.text(
          config,
          `cd ${quote(cwd)} && cat -- ${quote(filePath)}`,
        ).catch(() => null);
    return { oldText, newText };
  }

  private git(config: SshConfig, cwd: string, args: string[]): Promise<string> {
    return this.text(
      config,
      `cd ${quote(cwd)} && git ${args.map(quote).join(" ")}`,
    );
  }

  private async gitOptional(config: SshConfig, cwd: string, args: string[]) {
    return this.git(config, cwd, args).catch(() => null);
  }

  private async text(config: SshConfig, command: string): Promise<string> {
    return (await this.run(config, command)).stdout.trimEnd();
  }

  private run(
    config: SshConfig,
    command: string,
    timeoutMs = 60_000,
    input?: string,
  ) {
    const { host, args } = sshArgs(config);
    return requireCommand("ssh", [...args, "--", host, command], {
      timeoutMs,
      input,
      env: { ...process.env, LC_ALL: "C" },
    });
  }
}

function safeFileName(value: string): string {
  const sanitized = value.replace(/[^A-Za-z0-9._-]/g, "_").slice(0, 180);
  return sanitized && sanitized !== "." && sanitized !== ".."
    ? sanitized
    : "attachment";
}

export function normalizeSshConfig(value: unknown): SshConfig {
  if (!isRecord(value) || typeof value.sshHost !== "string")
    throw new TypeError("SSH config must contain sshHost");
  const config: SshConfig = {
    sshHost: value.sshHost,
    sshPort: typeof value.sshPort === "number" ? value.sshPort : undefined,
    sshIdentityFile:
      typeof value.sshIdentityFile === "string"
        ? value.sshIdentityFile
        : undefined,
  };
  sshArgs(config);
  return config;
}

function sshArgs(config: SshConfig): { host: string; args: string[] } {
  if (
    !/^[A-Za-z0-9.@_:-]+$/.test(config.sshHost) ||
    config.sshHost.startsWith("-")
  )
    throw new Error("Invalid SSH host");
  if (
    config.sshPort !== undefined &&
    (!Number.isInteger(config.sshPort) ||
      config.sshPort < 1 ||
      config.sshPort > 65_535)
  )
    throw new Error("Invalid SSH port");
  if (config.sshIdentityFile && /[\0\r\n]/.test(config.sshIdentityFile))
    throw new Error("Invalid SSH identity path");
  return {
    host: config.sshHost,
    args: [
      "-o",
      "BatchMode=yes",
      "-o",
      "ConnectTimeout=10",
      ...(config.sshPort ? ["-p", String(config.sshPort)] : []),
      ...(config.sshIdentityFile ? ["-i", config.sshIdentityFile] : []),
    ],
  };
}

function quote(value: string): string {
  if (/[\0\r\n]/.test(value))
    throw new Error("Remote argument contains control characters");
  return `'${value.replace(/'/g, `'"'"'`)}'`;
}

function repositorySlug(remote: string): string {
  return remote
    .trim()
    .replace(/^git@[^:]+:/, "")
    .replace(/^https?:\/\/[^/]+\//, "")
    .replace(/\.git$/, "");
}

function parsePatchFiles(patch: string) {
  return [...patch.matchAll(/^diff --git a\/(.+?) b\/(.+)$/gm)].map(
    (match) => ({
      oldPath: match[1],
      path: match[2],
    }),
  );
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
