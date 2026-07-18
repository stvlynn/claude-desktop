// Restored from ref/.vite/build/index.js

import path from "node:path";
import { requireCommand, runCommand } from "./local-session-command-runner";
import { LocalSessionGitService } from "./local-session-git-service";

export class LocalSessionGithubService {
  constructor(private readonly git: LocalSessionGitService) {}

  async checkAvailable() {
    const result = await runCommand("gh", ["--version"], {
      timeoutMs: 5_000,
    }).catch(() => null);
    return {
      available: result?.code === 0,
      version: result?.stdout.split("\n")[0],
    };
  }

  json(cwd: string, args: string[]) {
    return this.runJson(cwd, args);
  }

  async command(cwd: string, args: string[]) {
    const result = await requireCommand("gh", args, { cwd: path.resolve(cwd) });
    return { ok: true, output: result.stdout.trim() };
  }

  async refSummary(host: string, repo: string, refNumber: number) {
    const result = await requireCommand(
      "gh",
      ["api", `repos/${repo}/issues/${refNumber}`],
      { env: { ...process.env, GH_HOST: host } },
    );
    const issue = JSON.parse(result.stdout) as Record<string, unknown>;
    return {
      number: refNumber,
      title: issue.title,
      body: issue.body,
      state: issue.state,
      url: issue.html_url,
      isPullRequest: "pull_request" in issue,
    };
  }

  async checkRunAnnotations(cwd: string, checkRunId: number, repo?: string) {
    const slug = await this.repoSlug(cwd, repo);
    return this.api(cwd, `repos/${slug}/check-runs/${checkRunId}/annotations`);
  }

  async rerunCheck(cwd: string, checkRunId: number, repo?: string) {
    const slug = await this.repoSlug(cwd, repo);
    return this.api(cwd, `repos/${slug}/check-runs/${checkRunId}/rerequest`, {
      method: "POST",
    });
  }

  async prComments(cwd: string, prNumber: number, repo?: string) {
    const slug = await this.repoSlug(cwd, repo);
    return this.api(cwd, `repos/${slug}/pulls/${prNumber}/comments`);
  }

  async prCommits(cwd: string, prNumber: number, repo?: string) {
    const slug = await this.repoSlug(cwd, repo);
    return this.api(cwd, `repos/${slug}/pulls/${prNumber}/commits`);
  }

  async replyToReviewComment(
    cwd: string,
    prNumber: number,
    commentId: number,
    body: string,
    repo?: string,
  ) {
    const slug = await this.repoSlug(cwd, repo);
    return this.api(
      cwd,
      `repos/${slug}/pulls/${prNumber}/comments/${commentId}/replies`,
      { method: "POST", fields: { body } },
    );
  }

  async resolveReviewThread(
    cwd: string,
    prNumber: number,
    commentId: number,
    repo?: string,
  ) {
    const slug = await this.repoSlug(cwd, repo);
    const [owner, name] = slug.split("/");
    if (!owner || !name) throw new Error("Invalid GitHub repository slug");
    const query = `query($owner:String!,$name:String!,$number:Int!){repository(owner:$owner,name:$name){pullRequest(number:$number){reviewThreads(first:100){nodes{id comments(first:100){nodes{databaseId}}}}}}}`;
    const data = await this.runJson(cwd, [
      "api",
      "graphql",
      "-f",
      `query=${query}`,
      "-f",
      `owner=${owner}`,
      "-f",
      `name=${name}`,
      "-F",
      `number=${prNumber}`,
    ]);
    const threadId = findReviewThreadId(data, commentId);
    if (!threadId) throw new Error("Review thread not found");
    const mutation = `mutation($threadId:ID!){resolveReviewThread(input:{threadId:$threadId}){thread{isResolved}}}`;
    return this.runJson(cwd, [
      "api",
      "graphql",
      "-f",
      `query=${mutation}`,
      "-f",
      `threadId=${threadId}`,
    ]);
  }

  async updateComment(
    cwd: string,
    commentId: number,
    body: string,
    reviewComment: boolean,
    repo?: string,
  ) {
    const slug = await this.repoSlug(cwd, repo);
    const kind = reviewComment ? "pulls/comments" : "issues/comments";
    return this.api(cwd, `repos/${slug}/${kind}/${commentId}`, {
      method: "PATCH",
      fields: { body },
    });
  }

  async createReviewComment(input: {
    cwd: string;
    prNumber: number;
    commitSha: string;
    filePath: string;
    line: number;
    body: string;
    startLine?: number;
    side?: string;
    repo?: string;
  }) {
    const slug = await this.repoSlug(input.cwd, input.repo);
    const fields: Record<string, string | number> = {
      body: input.body,
      commit_id: input.commitSha,
      path: input.filePath,
      line: input.line,
      side: input.side ?? "RIGHT",
    };
    if (input.startLine !== undefined) fields.start_line = input.startLine;
    return this.api(
      input.cwd,
      `repos/${slug}/pulls/${input.prNumber}/comments`,
      { method: "POST", fields },
    );
  }

  async generatePrContent(cwd: string, baseBranch: string) {
    const commits = await this.git.getCommits(cwd, baseBranch);
    const stats = await this.git.getDiffStats(cwd, baseBranch);
    const title = commits.at(-1)?.subject ?? "Update from Claude Desktop";
    const bullets = commits.map((commit) => `- ${commit.subject}`).join("\n");
    return {
      title,
      body: `${bullets || "- Update project files"}\n\n${stats.fileCount} files changed, ${stats.additions} additions, ${stats.deletions} deletions.`,
    };
  }

  reviewDiff(diff: Record<string, unknown>) {
    const files = Array.isArray(diff.files) ? diff.files : [];
    return {
      summary: `${files.length} changed file${files.length === 1 ? "" : "s"}`,
      files,
    };
  }

  async createPr(cwd: string, title: string, body: string) {
    const result = await requireCommand(
      "gh",
      ["pr", "create", "--title", title, "--body", body],
      { cwd: path.resolve(cwd) },
    );
    return { success: true, url: result.stdout.trim() };
  }

  async install() {
    if ((await this.checkAvailable()).available) return { success: true };
    if (process.platform !== "darwin") {
      return {
        success: false,
        error: "Automatic gh installation is only available on macOS.",
      };
    }
    await requireCommand("brew", ["install", "gh"], {
      timeoutMs: 10 * 60_000,
    });
    return { success: true };
  }

  async submitReview(
    cwd: string,
    prNumber: number,
    event: string,
    body?: string,
  ) {
    const normalized = event.toLowerCase();
    const flag =
      normalized === "approve"
        ? "--approve"
        : normalized === "request_changes"
          ? "--request-changes"
          : "--comment";
    return this.command(cwd, [
      "pr",
      "review",
      String(prNumber),
      flag,
      ...(body ? ["--body", body] : []),
    ]);
  }

  private async api(
    cwd: string,
    endpoint: string,
    options: { method?: string; fields?: Record<string, string | number> } = {},
  ) {
    const args = [
      "api",
      ...(options.method ? ["--method", options.method] : []),
      endpoint,
    ];
    for (const [key, value] of Object.entries(options.fields ?? {}))
      args.push(typeof value === "number" ? "-F" : "-f", `${key}=${value}`);
    return this.runJson(cwd, args);
  }

  private async repoSlug(cwd: string, supplied?: string): Promise<string> {
    if (supplied) return supplied;
    const value = await this.runJson(cwd, [
      "repo",
      "view",
      "--json",
      "nameWithOwner",
    ]);
    if (!isRecord(value) || typeof value.nameWithOwner !== "string")
      throw new Error("Unable to resolve GitHub repository");
    return value.nameWithOwner;
  }

  private async runJson(cwd: string, args: string[]) {
    const result = await requireCommand("gh", args, { cwd: path.resolve(cwd) });
    return JSON.parse(result.stdout) as unknown;
  }
}

function findReviewThreadId(value: unknown, commentId: number): string | null {
  if (Array.isArray(value)) {
    for (const item of value) {
      const found = findReviewThreadId(item, commentId);
      if (found) return found;
    }
    return null;
  }
  if (!isRecord(value)) return null;
  if (
    typeof value.id === "string" &&
    collectNumbers(value.comments).includes(commentId)
  )
    return value.id;
  for (const item of Object.values(value)) {
    const found = findReviewThreadId(item, commentId);
    if (found) return found;
  }
  return null;
}

function collectNumbers(value: unknown, depth = 0): number[] {
  if (depth > 8) return [];
  if (typeof value === "number") return [value];
  if (Array.isArray(value))
    return value.flatMap((item) => collectNumbers(item, depth + 1));
  if (isRecord(value))
    return Object.values(value).flatMap((item) =>
      collectNumbers(item, depth + 1),
    );
  return [];
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
