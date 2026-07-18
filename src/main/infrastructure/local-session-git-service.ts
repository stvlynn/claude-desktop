// Restored from ref/.vite/build/index.js

import { readFile } from "node:fs/promises";
import path from "node:path";
import { requireCommand, runCommand } from "./local-session-command-runner";

export class LocalSessionGitService {
  async getInfo(cwd: string) {
    const root = await this.git(cwd, ["rev-parse", "--show-toplevel"]);
    const branch = await this.git(root, ["branch", "--show-current"]);
    const remote = await this.gitOptional(root, [
      "remote",
      "get-url",
      "origin",
    ]);
    const defaultRef = await this.gitOptional(root, [
      "symbolic-ref",
      "refs/remotes/origin/HEAD",
      "--short",
    ]);
    return {
      repo: remote ? repositorySlug(remote) : "",
      branch: branch.trim(),
      defaultBranch: defaultRef?.replace(/^origin\//, "") || undefined,
      root: root.trim(),
    };
  }

  async getLocalBranches(cwd: string) {
    const output = await this.git(cwd, [
      "for-each-ref",
      "--sort=-committerdate",
      "--format=%(refname:short)%00%(objectname)%00%(upstream:short)%00%(HEAD)",
      "refs/heads",
    ]);
    return output
      .trimEnd()
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [name, sha, upstream, head] = line.split("\0");
        return { name, sha, upstream: upstream || null, current: head === "*" };
      });
  }

  async getDiff(cwd: string, base: string, head?: string) {
    const range = head ? `${base}..${head}` : base;
    const names = await this.git(cwd, [
      "diff",
      "--name-status",
      "--find-renames",
      "-z",
      range,
    ]);
    const fields = names.split("\0").filter(Boolean);
    const files = [];
    for (let index = 0; index < fields.length;) {
      const status = fields[index++] ?? "M";
      const oldPath = fields[index++] ?? "";
      const renamed = status.startsWith("R") || status.startsWith("C");
      const filePath = renamed ? (fields[index++] ?? oldPath) : oldPath;
      const patch = await this.gitOptional(cwd, [
        "diff",
        "--find-renames",
        range,
        "--",
        filePath,
      ]);
      files.push({
        path: filePath,
        oldPath: renamed ? oldPath : undefined,
        status: status[0],
        patch: patch || null,
      });
    }
    const mergeBase = await this.gitOptional(cwd, ["merge-base", base, "HEAD"]);
    return { files, mergeBase: mergeBase?.trim() || base };
  }

  async getDiffStats(cwd: string, base: string, head?: string) {
    const range = head ? `${base}..${head}` : base;
    const output = await this.git(cwd, ["diff", "--numstat", range]);
    const rows = output.split("\n").filter(Boolean);
    return rows.reduce(
      (stats, row) => {
        const [added, deleted] = row.split("\t");
        stats.additions += Number(added) || 0;
        stats.deletions += Number(deleted) || 0;
        stats.fileCount += 1;
        return stats;
      },
      { additions: 0, deletions: 0, fileCount: 0 },
    );
  }

  async getDiffFileContent(
    cwd: string,
    base: string,
    filePath: string,
    head?: string,
  ) {
    assertRelativePath(filePath);
    const oldText = await this.gitOptional(cwd, [
      "show",
      `${base}:${filePath}`,
    ]);
    const newText = head
      ? await this.gitOptional(cwd, ["show", `${head}:${filePath}`])
      : await readFile(path.join(cwd, filePath), "utf8").catch(() => null);
    return { oldText, newText };
  }

  async getCommits(cwd: string, base: string, head = "HEAD") {
    const output = await this.git(cwd, [
      "log",
      "--format=%H%x00%an%x00%ae%x00%aI%x00%s",
      `${base}..${head}`,
    ]);
    return output
      .trimEnd()
      .split("\n")
      .filter(Boolean)
      .map((line) => {
        const [sha, authorName, authorEmail, authoredAt, subject] =
          line.split("\0");
        return { sha, authorName, authorEmail, authoredAt, subject };
      });
  }

  async getCommitDiff(cwd: string, sha: string) {
    return this.git(cwd, ["show", "--format=fuller", "--find-renames", sha]);
  }

  async status(cwd: string) {
    const output = await this.git(cwd, ["status", "--porcelain=v1"]);
    const entries = output.split("\n").filter(Boolean);
    return {
      clean: entries.length === 0,
      entries: entries.map((line) => ({
        index: line[0],
        workingTree: line[1],
        path: line.slice(3),
      })),
    };
  }

  async commitAll(cwd: string, message: string) {
    await this.git(cwd, ["add", "-A"]);
    await this.git(cwd, ["commit", "-m", message]);
    return { sha: (await this.git(cwd, ["rev-parse", "HEAD"])).trim() };
  }

  async stash(cwd: string, message?: string) {
    return {
      output: await this.git(cwd, [
        "stash",
        "push",
        "--include-untracked",
        ...(message ? ["-m", message] : []),
      ]),
    };
  }

  async discard(cwd: string): Promise<void> {
    await this.git(cwd, ["restore", "--staged", "--worktree", "."]);
    await this.git(cwd, ["clean", "-fd"]);
  }

  async ensureBranchPushed(cwd: string) {
    const branch = (await this.git(cwd, ["branch", "--show-current"])).trim();
    if (!branch) throw new Error("Cannot push a detached HEAD");
    await this.git(cwd, ["push", "--set-upstream", "origin", branch]);
    return { branch };
  }

  private async git(cwd: string, args: string[]): Promise<string> {
    return (
      await requireCommand("git", args, {
        cwd: path.resolve(cwd),
        env: { ...process.env, GIT_TERMINAL_PROMPT: "0", LC_ALL: "C" },
      })
    ).stdout;
  }

  private async gitOptional(
    cwd: string,
    args: string[],
  ): Promise<string | null> {
    const result = await runCommand("git", args, {
      cwd: path.resolve(cwd),
      env: { ...process.env, GIT_TERMINAL_PROMPT: "0", LC_ALL: "C" },
    });
    return result.code === 0 ? result.stdout : null;
  }
}

function repositorySlug(remote: string): string {
  return remote
    .trim()
    .replace(/^git@[^:]+:/, "")
    .replace(/^https?:\/\/[^/]+\//, "")
    .replace(/\.git$/, "");
}

function assertRelativePath(value: string): void {
  if (path.isAbsolute(value) || value.split(/[\\/]/).includes(".."))
    throw new Error("File path must stay inside the repository");
}
