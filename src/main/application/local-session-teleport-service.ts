// Restored from ref/.vite/build/index.js

import { net, type WebContents } from "electron";
import { LocalSessionGitService } from "../infrastructure/local-session-git-service";
import { LocalSessionRuntimeService } from "./local-session-runtime-service";

export class LocalSessionTeleportService {
  constructor(
    private readonly runtime: LocalSessionRuntimeService,
    private readonly git: LocalSessionGitService,
  ) {}

  async readiness(sessionId: string, sender?: WebContents) {
    const session = await this.runtime.getSession(sessionId);
    if (!session) return null;
    if (session.sshConfig) {
      return {
        ready: false,
        needsCommitAndPush: false,
        needsAuth: false,
        error: "SSH sessions cannot be teleported to the cloud.",
      };
    }
    if (!(await accountContext(sender))) {
      return { ready: false, needsCommitAndPush: false, needsAuth: true };
    }
    const dirty = !(await this.git.status(session.cwd)).clean;
    return {
      ready: !dirty,
      needsCommitAndPush: dirty,
      needsAuth: false,
    };
  }

  async teleport(
    sessionId: string,
    environmentId: string,
    sender: WebContents | undefined,
    progress: (step: string) => void,
  ) {
    const session = await this.runtime.getSession(sessionId);
    if (!session) throw new Error("Session not found.");
    if (session.sshConfig)
      throw new Error("SSH sessions cannot be teleported to the cloud.");
    const account = await accountContext(sender);
    if (!account)
      throw new Error("No active organization. Sign in and try again.");
    const gitInfo = await this.git.getInfo(session.cwd).catch(() => null);
    if (gitInfo) {
      progress("pushing_branch");
      await this.git.ensureBranchPushed(session.cwd);
    }
    progress("generating_summary");
    const summary = await this.runtime.summarizeSession(sessionId);
    await this.runtime.stop(sessionId);
    const sources = gitInfo
      ? [
          {
            type: "git_repository",
            url: `https://github.com/${gitInfo.repo}`,
            revision: `refs/heads/${gitInfo.branch}`,
          },
        ]
      : [];
    const outcomes = gitInfo
      ? [
          {
            type: "git_repository",
            git_info: {
              type: "github",
              repo: gitInfo.repo,
              branches: [gitInfo.branch],
            },
          },
        ]
      : [];
    progress("creating_session");
    const response = await net.fetch("https://claude.ai/v1/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${account.token}`,
        "anthropic-version": "2023-06-01",
        "anthropic-beta": "ccr-byoc-2025-07-29",
        "anthropic-client-feature": "ccr",
        "x-organization-uuid": account.orgId,
      },
      body: JSON.stringify({
        title: session.title,
        environment_id: environmentId,
        session_context: {
          sources,
          ...(outcomes.length ? { outcomes } : {}),
          ...(session.model ? { model: session.model } : {}),
        },
      }),
      signal: AbortSignal.timeout(60_000),
    });
    if (!response.ok)
      throw new Error(`Failed to create cloud session (${response.status}).`);
    const result = (await response.json()) as Record<string, unknown>;
    if (typeof result.id !== "string")
      throw new Error("Cloud session response did not include an id.");
    const title =
      typeof result.title === "string" ? result.title : session.title;
    return {
      sessionId: result.id,
      title,
      url: `https://claude.ai/code/${result.id}`,
      summary: summary || undefined,
    };
  }
}

async function accountContext(sender?: WebContents) {
  if (!sender || sender.isDestroyed()) return null;
  const [tokens, organizations] = await Promise.all([
    Promise.all(
      ["sessionKey", "session_key"].map((name) =>
        sender.session.cookies.get({ name }),
      ),
    ),
    sender.session.cookies.get({ name: "lastActiveOrg" }),
  ]);
  const token = tokens.flat().find((cookie) => cookie.value)?.value;
  const orgId = organizations[0]?.value;
  return token && orgId ? { token, orgId } : null;
}
