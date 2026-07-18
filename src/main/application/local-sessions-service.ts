// Restored from ref/.vite/build/index.js

import { EventEmitter } from "node:events";
import { randomUUID } from "node:crypto";
import path from "node:path";
import { type App, type WebContents } from "electron";
import type { Query } from "@anthropic-ai/claude-agent-sdk";
import type { LocalSessionMethod } from "../../shared/contracts/local-sessions";
import { LocalSessionFileService } from "../infrastructure/local-session-file-service";
import { LocalSessionGitService } from "../infrastructure/local-session-git-service";
import { LocalSessionGithubService } from "../infrastructure/local-session-github-service";
import { LocalSessionEditorService } from "../infrastructure/local-session-editor-service";
import { LocalSessionPlanService } from "../infrastructure/local-session-plan-service";
import { LocalSessionPtyService } from "../infrastructure/local-session-pty-service";
import { LocalSessionMcpService } from "../infrastructure/local-session-mcp-service";
import {
  LocalAgentDefinitionRepository,
  normalizeCreateAgentInput,
} from "../infrastructure/local-agent-definition-repository";
import { LocalSessionSettingsRepository } from "../infrastructure/local-session-settings-repository";
import {
  LocalSessionSshService,
  normalizeSshConfig,
  type SshConfig,
} from "../infrastructure/local-session-ssh-service";
import { requireCommand } from "../infrastructure/local-session-command-runner";
import { LocalSessionRuntimeService } from "./local-session-runtime-service";
import { LocalSessionTeleportService } from "./local-session-teleport-service";
import { LocalSessionAttachmentService } from "./local-session-attachment-service";
import { LocalSessionCatalogService } from "./local-session-catalog-service";
import {
  arrayArg,
  asRecord,
  booleanArg,
  effortArg,
  isRecord,
  normalizeMcpServers,
  normalizeImages,
  numberArg,
  objectArg,
  optionalNumber,
  optionalString,
  permissionArg,
  priorityArg,
  requiredProperty,
  sessionOptions,
  startArg,
  stringArg,
  stringArrayArg,
} from "./local-session-arguments";

export class LocalSessionsService extends EventEmitter {
  private readonly app: App;
  private readonly runtime: LocalSessionRuntimeService;
  private readonly files = new LocalSessionFileService();
  private readonly git = new LocalSessionGitService();
  private readonly github = new LocalSessionGithubService(this.git);
  private readonly editors = new LocalSessionEditorService();
  private readonly plans = new LocalSessionPlanService();
  private readonly teleport: LocalSessionTeleportService;
  private readonly pty = new LocalSessionPtyService();
  private readonly mcp: LocalSessionMcpService;
  private readonly agents = new LocalAgentDefinitionRepository();
  private readonly settings: LocalSessionSettingsRepository;
  private readonly ssh = new LocalSessionSshService();
  private readonly attachments = new LocalSessionAttachmentService(this.ssh);
  private readonly catalog: LocalSessionCatalogService;

  constructor(app: App, runtime = new LocalSessionRuntimeService(app)) {
    super();
    this.app = app;
    this.runtime = runtime;
    this.settings = new LocalSessionSettingsRepository(app);
    this.catalog = new LocalSessionCatalogService(app, runtime);
    this.mcp = new LocalSessionMcpService(app);
    this.teleport = new LocalSessionTeleportService(runtime, this.git);
    this.runtime.on("event", (event) => this.emit("event", event));
    this.runtime.on("toolPermissionRequest", (request) =>
      this.emit("toolPermissionRequest", request),
    );
    this.pty.on("event", (event) => this.emit("event", event));
  }

  async invoke(
    method: LocalSessionMethod,
    args: unknown[],
    sender?: WebContents,
  ): Promise<unknown> {
    switch (method) {
      case "start":
        return this.startSession(args[0], sender);
      case "forkSession":
        return this.runtime.fork(
          stringArg(args, 0),
          stringArg(args, 1),
          optionalString(args, 2),
          optionalString(args, 3),
        );
      case "sendMessage":
        if (args[3] !== undefined) {
          await this.runtime.updateSession(stringArg(args, 0), {
            widgetToolStates: args[3],
          });
        }
        const message = await this.prepareMessageAttachments(
          stringArg(args, 0),
          stringArg(args, 1),
          args[4],
          sender,
        );
        return this.runtime.sendMessage(
          stringArg(args, 0),
          message,
          undefined,
          priorityArg(args, 5),
          normalizeImages(args[2]),
        );
      case "cancelQueuedMessage":
        return this.runtime.cancelQueuedMessage(
          stringArg(args, 0),
          stringArg(args, 1),
        );
      case "reorderQueuedMessage":
        return this.runtime.reorderQueuedMessage(
          stringArg(args, 0),
          stringArg(args, 1),
          stringArg(args, 2),
        );
      case "promoteQueuedMessage":
        return this.runtime.promoteQueuedMessage(
          stringArg(args, 0),
          stringArg(args, 1),
        );
      case "setModel":
        return this.runtime.setModel(
          stringArg(args, 0),
          optionalString(args, 1),
        );
      case "setEffort":
        return this.runtime.setEffort(stringArg(args, 0), effortArg(args, 1));
      case "getEffort":
        return (await this.requireSession(stringArg(args, 0))).effort;
      case "getDefaultEffort":
        return "high";
      case "setFastMode":
        return this.runtime.setFastMode(
          stringArg(args, 0),
          booleanArg(args, 1),
        );
      case "applyFlagSettings":
        return this.runtime.applyFlagSettings(
          stringArg(args, 0),
          objectArg<Parameters<Query["applyFlagSettings"]>[0]>(args, 1),
        );
      case "getContextUsage":
        return this.runtime.contextUsage(stringArg(args, 0));
      case "warmSession":
        return this.runtime.warm(stringArg(args, 0));
      case "startSideChat":
        return this.runtime.startSideChat(stringArg(args, 0));
      case "sendSideChatMessage":
        return this.runtime.sendSideChatMessage(
          stringArg(args, 0),
          stringArg(args, 1),
        );
      case "stopSideChat":
        return this.runtime.stopSideChat(stringArg(args, 0));
      case "summarizeSession":
        return this.runtime.summarizeSession(stringArg(args, 0));
      case "summarizeTranscript":
        return this.runtime.summarizeTranscript(
          stringArg(args, 0),
          stringArg(args, 1),
        );
      case "stop":
        return this.runtime.stop(stringArg(args, 0));
      case "interrupt":
        return this.runtime.interrupt(stringArg(args, 0));
      case "stopTask":
        return this.runtime.stopTask(stringArg(args, 0), stringArg(args, 1));
      case "clearSession":
        return this.runtime.clear(stringArg(args, 0));
      case "rewind": {
        const result = await this.runtime.rewind(
          stringArg(args, 0),
          stringArg(args, 1),
        );
        return isRecord(result) && typeof result.prefill === "string"
          ? result.prefill
          : null;
      }
      case "rewindV2":
        return this.runtime.rewind(stringArg(args, 0), stringArg(args, 1));
      case "archive":
        return this.runtime.archive(stringArg(args, 0), true);
      case "unarchive":
        return this.runtime.archive(stringArg(args, 0), false);
      case "delete":
        return this.runtime.delete(stringArg(args, 0));
      case "updateSession":
        return this.runtime.updateSession(
          stringArg(args, 0),
          objectArg(args, 1),
        );
      case "getSession":
        return this.runtime.getSession(stringArg(args, 0));
      case "getAll":
        return this.runtime.getAll();
      case "findLocalSessionIdForBridgeId":
        return this.catalog.findByMetadata(
          "bridgeSessionId",
          stringArg(args, 0),
        );
      case "getSessionsForScheduledTask":
        return this.catalog.sessionsForScheduledTask(stringArg(args, 0));
      case "getTranscript":
        return this.runtime.getTranscript(stringArg(args, 0));
      case "searchSessions":
        return this.runtime.searchSessions(stringArg(args, 0));
      case "setPermissionMode":
        return this.runtime.setPermissionMode(
          stringArg(args, 0),
          permissionArg(args, 1),
        );
      case "getPermissionMode":
        return (await this.requireSession(stringArg(args, 0))).permissionMode;
      case "getDefaultPermissionMode":
        return "default";
      case "launchUltrareview":
        return this.runtime.launchUltrareview(
          stringArg(args, 0),
          args[1],
          args[2] == null ? false : booleanArg(args, 2),
        );
      case "submitFeedback":
        return this.runtime.submitFeedback(
          stringArg(args, 0),
          stringArg(args, 1),
        );
      case "addDirectories":
        return this.addDirectories(stringArg(args, 0), stringArrayArg(args, 1));
      case "getSupportedCommands":
        return this.runtime.supportedCommandsFor(sessionOptions(args[0]));
      case "getAgents":
        return this.runtime.supportedAgentsFor(sessionOptions(args[0]));
      case "createAgent":
        return this.agents.create(normalizeCreateAgentInput(args[0]));
      case "getPlanForSession":
        return this.getPlan(stringArg(args, 0));
      case "setMcpServers":
        return this.setMcpServers(stringArg(args, 0), args[1]);
      case "replaceRemoteMcpServers":
        return this.replaceRemoteMcpServers(stringArg(args, 0), args[1]);
      case "replaceEnabledMcpTools":
        return this.runtime.updateSession(stringArg(args, 0), {
          enabledMcpTools: args[1],
        });
      case "mcpAuthenticate":
        return this.runtime.mcpServerStatus(stringArg(args, 0));
      case "mcpReconnect":
        return this.reconnectMcp(stringArg(args, 0), stringArg(args, 1));
      case "mcpSubmitOAuthCallbackUrl":
        return this.reconnectMcp(stringArg(args, 0), stringArg(args, 1));
      case "mcpCallTool":
        return this.mcpCallTool(args);
      case "mcpReadResource":
        return this.mcpReadResource(args);
      case "mcpListResources":
        return this.mcpListResources(args);
      case "respondToToolPermission":
        this.runtime.resolveToolPermission(
          stringArg(args, 0),
          stringArg(args, 1),
          optionalString(args, 2),
        );
        return undefined;
      case "getGitInfo":
        return this.git.getInfo(stringArg(args, 0));
      case "getLocalBranches":
        return this.git.getLocalBranches(stringArg(args, 0));
      case "getGitDiff":
        return this.git.getDiff(
          stringArg(args, 0),
          stringArg(args, 1),
          optionalString(args, 2),
        );
      case "getGitDiffStats":
        return this.git.getDiffStats(
          stringArg(args, 0),
          stringArg(args, 1),
          optionalString(args, 2),
        );
      case "getDiffFileContent":
        return this.git.getDiffFileContent(
          stringArg(args, 0),
          stringArg(args, 1),
          stringArg(args, 2),
          optionalString(args, 3),
        );
      case "getGitCommits":
        return this.git.getCommits(
          stringArg(args, 0),
          stringArg(args, 1),
          optionalString(args, 2),
        );
      case "getCommitDiff":
        return this.git.getCommitDiff(stringArg(args, 0), stringArg(args, 1));
      case "getUncommittedChanges":
      case "getWorkingTreeStatus":
        return this.git.status(stringArg(args, 0));
      case "isWorkingTreeDirty":
        return !(await this.git.status(stringArg(args, 0))).clean;
      case "commitAllChanges":
      case "commitWipForBranchSwitch":
        return this.git.commitAll(stringArg(args, 0), stringArg(args, 1));
      case "stashWorkingTree":
        return this.git.stash(stringArg(args, 0), optionalString(args, 1));
      case "discardWorkingTree":
        return this.git.discard(stringArg(args, 0));
      case "ensureBranchPushed":
        return this.git.ensureBranchPushed(stringArg(args, 0));
      case "pickSessionFile": {
        const session = await this.requireSession(stringArg(args, 0));
        return this.files.pickFile(session.cwd, sender);
      }
      case "pickFileAtCwd":
        return this.files.pickFile(stringArg(args, 0), sender);
      case "readFileAtCwd":
        return this.files.read(stringArg(args, 0), stringArg(args, 1));
      case "readSessionFile": {
        const session = await this.requireSession(stringArg(args, 0));
        return this.files.read(session.cwd, stringArg(args, 1));
      }
      case "resolveSessionFile": {
        const session = await this.requireSession(stringArg(args, 0));
        return this.files.resolve(session.cwd, stringArg(args, 1));
      }
      case "listSessionDirectory": {
        const session = await this.requireSession(stringArg(args, 0));
        return this.files.list(session.cwd, optionalString(args, 1) ?? ".");
      }
      case "readSessionImageAsDataUrl":
      case "readSessionMediaAsDataUrl":
      case "readSessionPanelMediaAsDataUrl":
      case "getSessionMediaStreamUrl":
      case "getSessionPanelMediaStreamUrl": {
        const session = await this.requireSession(stringArg(args, 0));
        return this.files.dataUrl(session.cwd, stringArg(args, 1));
      }
      case "writeSessionFile": {
        const session = await this.requireSession(stringArg(args, 0));
        return this.files.write(
          session.cwd,
          stringArg(args, 1),
          args[2],
          args[3],
        );
      }
      case "openSessionFileInDefaultApp": {
        const session = await this.requireSession(stringArg(args, 0));
        return this.files.open(session.cwd, stringArg(args, 1));
      }
      case "showSessionFilePreview":
        return { ok: false, declineReason: "unsupported_extension" };
      case "startPty": {
        const session = await this.requireSession(stringArg(args, 0));
        if (!session.sdkSessionId) return false;
        return this.pty.startResumePty(
          session.sessionId,
          session.sdkSessionId,
          session.cwd,
          session.model,
          numberArg(args, 1),
          numberArg(args, 2),
        );
      }
      case "stopPty":
        return this.pty.stopResumePty(stringArg(args, 0));
      case "resizePty":
        return this.pty.resizeResumePty(
          stringArg(args, 0),
          numberArg(args, 1),
          numberArg(args, 2),
        );
      case "writePty":
        return this.pty.writeResumePty(stringArg(args, 0), stringArg(args, 1));
      case "startShellPty": {
        const key = stringArg(args, 0);
        const session = await this.requireSession(key.split("::")[0] ?? key);
        return this.pty.startShellPty(
          key,
          session.cwd,
          numberArg(args, 1),
          numberArg(args, 2),
        );
      }
      case "stopShellPty":
        return this.pty.stopShellPty(stringArg(args, 0));
      case "resizeShellPty":
        return this.pty.resizeShellPty(
          stringArg(args, 0),
          numberArg(args, 1),
          numberArg(args, 2),
        );
      case "writeShellPty":
        return this.pty.writeShellPty(stringArg(args, 0), stringArg(args, 1));
      case "getShellPtyBuffer":
        return this.pty.getShellPtyBuffer(stringArg(args, 0));
      case "getBusyShellPtyKeys":
        return this.pty.getBusyShellPtyKeys(stringArg(args, 0));
      case "runBashCommand": {
        const session = await this.requireSession(stringArg(args, 0));
        const result = await requireCommand(
          process.platform === "win32" ? "powershell.exe" : "/bin/bash",
          process.platform === "win32"
            ? ["-NoProfile", "-Command", stringArg(args, 1)]
            : ["-lc", stringArg(args, 1)],
          { cwd: session.cwd },
        );
        return { stdout: result.stdout, stderr: result.stderr, exitCode: 0 };
      }
      case "checkTrust":
        return this.checkTrust(stringArg(args, 0));
      case "saveTrust":
        return this.saveTrust(stringArg(args, 0));
      case "openInVSCode":
        return this.editors.openVsCode(stringArg(args, 0));
      case "isVSCodeInstalled":
        return this.editors.isVsCodeInstalled();
      case "getInstalledEditors":
        return this.editors.installedEditors();
      case "openInEditor":
        return this.editors.openAt(
          stringArg(args, 0),
          stringArg(args, 1),
          optionalNumber(args, 2),
          optionalNumber(args, 3),
        );
      case "checkGhAvailable":
        return this.github.checkAvailable();
      case "listGhIssues":
        return this.github.json(stringArg(args, 0), [
          "issue",
          "list",
          "--limit",
          String(optionalNumber(args, 1) ?? 50),
          "--json",
          "number,title,state,url,labels,assignees,updatedAt",
        ]);
      case "getGhIssue":
        return this.github.json(stringArg(args, 0), [
          "issue",
          "view",
          String(numberArg(args, 1)),
          "--json",
          "number,title,body,state,url,labels,assignees,author,comments",
        ]);
      case "getGhRefSummary":
        return this.github.refSummary(
          stringArg(args, 0),
          stringArg(args, 1),
          numberArg(args, 2),
        );
      case "getPrChecks":
        return this.github.json(stringArg(args, 0), [
          "pr",
          "checks",
          String(numberArg(args, 1)),
          "--json",
          "name,state,link,bucket,event,workflow",
        ]);
      case "getCheckRunAnnotations":
        return this.checkRunAnnotations(args);
      case "rerunPrCheck":
        return this.rerunPrCheck(args);
      case "getPrDetails":
      case "getPrOverview":
      case "getPrStateForBranch":
        return this.github.json(
          stringArg(args, 0),
          [
            "pr",
            "view",
            args[1] == null ? "" : String(args[1]),
            "--json",
            "number,title,body,state,url,isDraft,headRefName,baseRefName,mergeable,reviewDecision,statusCheckRollup",
          ].filter(Boolean),
        );
      case "markPrReady":
        return this.github.command(stringArg(args, 0), [
          "pr",
          "ready",
          String(numberArg(args, 1)),
        ]);
      case "markPrDraft":
        return this.github.command(stringArg(args, 0), [
          "pr",
          "ready",
          "--undo",
          String(numberArg(args, 1)),
        ]);
      case "enableAutoMerge":
        return this.github.command(stringArg(args, 0), [
          "pr",
          "merge",
          String(numberArg(args, 1)),
          "--auto",
          "--squash",
        ]);
      case "disableAutoMerge":
        return this.github.command(stringArg(args, 0), [
          "pr",
          "merge",
          String(numberArg(args, 1)),
          "--disable-auto",
        ]);
      case "mergePr":
        return this.github.command(stringArg(args, 0), [
          "pr",
          "merge",
          String(numberArg(args, 1)),
          `--${optionalString(args, 2) ?? "squash"}`,
        ]);
      case "updatePrBody":
        return this.github.command(stringArg(args, 0), [
          "pr",
          "edit",
          String(numberArg(args, 1)),
          "--body",
          stringArg(args, 2),
        ]);
      case "getPrReviewComments":
        return this.github.prComments(
          stringArg(args, 0),
          numberArg(args, 1),
          optionalString(args, 2),
        );
      case "getPrCommits":
        return this.github.prCommits(
          stringArg(args, 0),
          numberArg(args, 1),
          optionalString(args, 2),
        );
      case "replyToPrReviewComment":
        return this.github.replyToReviewComment(
          stringArg(args, 0),
          numberArg(args, 1),
          numberArg(args, 2),
          stringArg(args, 3),
          optionalString(args, 4),
        );
      case "resolvePrReviewThread":
        return this.github.resolveReviewThread(
          stringArg(args, 0),
          numberArg(args, 1),
          numberArg(args, 2),
          optionalString(args, 3),
        );
      case "updatePrComment":
        return this.github.updateComment(
          stringArg(args, 0),
          numberArg(args, 1),
          stringArg(args, 2),
          booleanArg(args, 3),
          optionalString(args, 4),
        );
      case "createPrReviewComment":
        return this.github.createReviewComment({
          cwd: stringArg(args, 0),
          prNumber: numberArg(args, 1),
          commitSha: stringArg(args, 2),
          filePath: stringArg(args, 3),
          line: numberArg(args, 4),
          body: stringArg(args, 5),
          startLine: optionalNumber(args, 6),
          side: optionalString(args, 7),
          repo: optionalString(args, 8),
        });
      case "generateLocalPrContent":
        return this.github.generatePrContent(
          stringArg(args, 0),
          stringArg(args, 1),
        );
      case "reviewDiff":
        return this.github.reviewDiff(objectArg(args, 0));
      case "createLocalPr":
        return this.createLocalPr(args[0]);
      case "installGh":
        return this.github.install();
      case "submitPrReview":
        return this.github.submitReview(
          stringArg(args, 0),
          numberArg(args, 1),
          stringArg(args, 2),
          optionalString(args, 3),
        );
      case "setVisibility":
        return this.runtime.updateSession(stringArg(args, 0), {
          visibility: booleanArg(args, 1),
        });
      case "importCliSession":
        return this.runtime.importCliSession(stringArg(args, 0));
      case "getCrRefSummary":
      case "getCrForSession":
        return null;
      case "getCrCliStatus":
        return "unsupported";
      case "popBackgroundTaskSuggestionById":
        return this.catalog.resolveBackgroundSuggestion(
          stringArg(args, 0),
          stringArg(args, 1),
          booleanArg(args, 2),
        );
      case "getTeleportReadiness":
        return this.teleport.readiness(stringArg(args, 0), sender);
      case "teleportToCloud": {
        const sessionId = stringArg(args, 0);
        return this.teleport.teleport(
          sessionId,
          stringArg(args, 1),
          sender,
          (step) =>
            this.emit("event", {
              type: "teleport_progress",
              sessionId,
              data: step,
            }),
        );
      }
      case "testSSHConnection":
        return this.ssh.test(normalizeSshConfig(args[0]));
      case "validateSSHPath":
        return this.ssh.validatePath(
          normalizeSshConfig(args[0]),
          stringArg(args, 1),
        );
      case "listSSHDirectory":
        return this.ssh.listDirectory(
          normalizeSshConfig(args[0]),
          stringArg(args, 1),
        );
      case "getSSHGitInfo":
        return this.ssh.gitInfo(
          normalizeSshConfig(args[0]),
          stringArg(args, 1),
        );
      case "getSSHLocalBranches":
        return this.ssh.branches(
          normalizeSshConfig(args[0]),
          stringArg(args, 1),
        );
      case "getSSHGitDiff":
        return this.ssh.gitDiff(
          normalizeSshConfig(args[0]),
          stringArg(args, 1),
          stringArg(args, 2),
          optionalString(args, 3),
        );
      case "getSSHGitDiffStats":
        return this.ssh.gitDiffStats(
          normalizeSshConfig(args[0]),
          stringArg(args, 1),
          stringArg(args, 2),
          optionalString(args, 3),
        );
      case "getSSHGitCommits":
        return this.ssh.commits(
          normalizeSshConfig(args[0]),
          stringArg(args, 1),
          stringArg(args, 2),
          optionalString(args, 3),
        );
      case "getSSHCommitDiff":
        return this.ssh.commitDiff(
          normalizeSshConfig(args[0]),
          stringArg(args, 1),
          stringArg(args, 2),
        );
      case "getSSHDiffFileContent":
        return this.ssh.diffFileContent(
          normalizeSshConfig(args[0]),
          stringArg(args, 1),
          stringArg(args, 2),
          stringArg(args, 3),
          optionalString(args, 4),
        );
      case "getSSHSupportedCommands":
        return [];
      case "ensureSSHConnected": {
        const session = await this.requireSession(stringArg(args, 0));
        const config = session.sshConfig;
        return config
          ? (await this.ssh.test(normalizeSshConfig(config))).valid
          : true;
      }
      case "checkRemoteTrust": {
        const config = normalizeSshConfig(args[0]);
        const cwd = stringArg(args, 1);
        const trusted = await this.settings.read<string[]>(
          "trusted-ssh-hosts.json",
          [],
        );
        return {
          trusted: trusted.includes(`${config.sshHost}:${cwd}`),
          sources: [],
        };
      }
      case "resolveSSHSettings":
        return this.resolveSshSettings(
          normalizeSshConfig(args[0]),
          stringArg(args, 1),
        );
      case "getSSHConfigs":
        return this.settings.read<SshConfig[]>("ssh-configs.json", []);
      case "setSSHConfigs":
        return this.settings.write(
          "ssh-configs.json",
          arrayArg(args, 0).map(normalizeSshConfig),
        );
      case "getTrustedSSHHosts":
        return this.settings.read<string[]>("trusted-ssh-hosts.json", []);
      case "setTrustedSSHHosts":
        return this.settings.write(
          "trusted-ssh-hosts.json",
          stringArrayArg(args, 0),
        );
      case "shareSession":
        return {
          success: false,
          error: "Session sharing requires a signed-in cloud bridge.",
        };
      case "getDetectedProjects":
        return this.catalog.detectedProjects();
      case "getCodeStats":
        return this.catalog.codeStats();
      case "setFocusedSession":
        return this.settings.write("focused-session.json", {
          sessionId: optionalString(args, 0) ?? null,
        });
      case "setAvailableCodeModels":
        return this.settings.write("available-code-models.json", args[0]);
      case "setAccountBranchPrefix":
        return this.settings.write("account-branch-prefix.json", {
          prefix: optionalString(args, 0) ?? null,
        });
      case "logCliEvent":
      case "reportSwitchTiming":
      case "reportComposerInp":
      case "reportStreamRender":
        this.emit("telemetry", { method, args });
        return undefined;
      case "stopSessionSummary":
        return this.runtime.stopSessionSummary(stringArg(args, 0));
      case "respondToRefusalFallbackPrompt":
        this.emit("event", {
          type: "refusal_fallback_resolved",
          sessionId: stringArg(args, 0),
          promptId: stringArg(args, 1),
          choice: args[2],
        });
        return undefined;
      case "setAutoFixEnabled":
        return this.runtime.updateSession(stringArg(args, 0), {
          autoFixEnabled: booleanArg(args, 1),
        });
      case "dismissBoundPr":
        return this.runtime.updateSession(stringArg(args, 0), {
          dismissedPr: {
            repo: stringArg(args, 1),
            prNumber: numberArg(args, 2),
          },
        });
      case "popBackgroundTaskSuggestion":
        return this.catalog.resolveFirstBackgroundSuggestion(
          stringArg(args, 0),
          booleanArg(args, 1),
        );
      case "notifySpawnedTaskStarted":
        this.emit("event", {
          type: "spawned_task_started",
          parentSessionId: stringArg(args, 0),
          taskId: stringArg(args, 1),
          childKind: stringArg(args, 2),
          childSessionId: stringArg(args, 3),
          title: optionalString(args, 4),
        });
        return undefined;
      case "beginTearOffHalo":
        this.emit("event", {
          type: "tear_off_halo_begin",
          title: stringArg(args, 0),
          style: args[1],
        });
        return undefined;
      case "setTearOffHalo":
        this.emit("event", {
          type: "tear_off_halo_armed",
          armed: booleanArg(args, 0),
        });
        return undefined;
      case "endTearOffHalo":
        this.emit("event", { type: "tear_off_halo_end" });
        return undefined;
      case "respondToSSHPassword":
        this.emit("sshPasswordResponse", {
          requestId: stringArg(args, 0),
          password: optionalString(args, 1) ?? null,
        });
        return undefined;
      default:
        throw new Error(
          `LocalSessions capability ${method} is unavailable in this runtime`,
        );
    }
  }

  dispose(): void {
    this.pty.dispose();
    void this.mcp.dispose();
    void this.runtime.dispose();
  }

  private async requireSession(sessionId: string) {
    const session = await this.runtime.getSession(sessionId);
    if (!session) throw new Error(`Session not found: ${sessionId}`);
    return session;
  }
  private async startSession(value: unknown, sender?: WebContents) {
    const info = startArg([value]);
    if (!info.sshConfig) return this.runtime.start(info);
    const sessionId = info.sessionId ?? randomUUID();
    const raw = isRecord(value) ? value.attachments : undefined;
    return this.runtime.start({
      ...info,
      sessionId,
      message: await this.attachments.prepareRemoteMessage(
        normalizeSshConfig(info.sshConfig),
        sessionId,
        info.message,
        raw,
        sender,
      ),
    });
  }
  private async addDirectories(sessionId: string, directories: string[]) {
    const session = await this.requireSession(sessionId);
    return this.runtime.updateSession(sessionId, {
      additionalDirectories: [
        ...new Set([...session.additionalDirectories, ...directories]),
      ],
    });
  }
  private async setMcpServers(sessionId: string, value: unknown) {
    const servers = normalizeMcpServers(value);
    return this.runtime.setMcpServers(sessionId, servers);
  }
  private async replaceRemoteMcpServers(sessionId: string, value: unknown) {
    const session = await this.requireSession(sessionId);
    const remote = normalizeMcpServers(value);
    const existing = normalizeMcpServers(session.mcpServers ?? {});
    const retained = Object.fromEntries(
      Object.entries(existing).filter(([, config]) => "command" in config),
    );
    return this.runtime.setMcpServers(sessionId, { ...retained, ...remote });
  }
  private async reconnectMcp(sessionId: string, serverName: string) {
    const session = await this.requireSession(sessionId);
    await Promise.allSettled([
      this.runtime.reconnectMcpServer(sessionId, serverName),
      this.mcp.reconnect(sessionId, serverName, session.mcpServers ?? {}),
    ]);
    return this.runtime.mcpServerStatus(sessionId);
  }
  private async mcpCallTool(args: unknown[]) {
    const sessionId = stringArg(args, 0);
    const session = await this.requireSession(sessionId);
    return this.mcp.callTool(
      sessionId,
      stringArg(args, 1),
      stringArg(args, 2),
      objectArg(args, 3),
      session.mcpServers ?? {},
    );
  }
  private async mcpReadResource(args: unknown[]) {
    const sessionId = stringArg(args, 0);
    const session = await this.requireSession(sessionId);
    return this.mcp.readResource(
      sessionId,
      stringArg(args, 1),
      stringArg(args, 2),
      session.mcpServers ?? {},
    );
  }
  private async mcpListResources(args: unknown[]) {
    const sessionId = stringArg(args, 0);
    const session = await this.requireSession(sessionId);
    return this.mcp.listResources(
      sessionId,
      stringArg(args, 1),
      session.mcpServers ?? {},
    );
  }
  private async checkTrust(cwd: string) {
    const trusted = await this.settings.read<string[]>(
      "trusted-folders.json",
      [],
    );
    const resolved = path.resolve(cwd);
    return { trusted: trusted.includes(resolved), sources: [] };
  }
  private async saveTrust(cwd: string) {
    const trusted = new Set(
      await this.settings.read<string[]>("trusted-folders.json", []),
    );
    trusted.add(path.resolve(cwd));
    await this.settings.write("trusted-folders.json", [...trusted]);
    return { trusted: true, sources: [] };
  }
  private async checkRunAnnotations(args: unknown[]) {
    const session = await this.requireSession(stringArg(args, 0));
    return this.github.checkRunAnnotations(
      session.cwd,
      numberArg(args, 2),
      optionalString(args, 3),
    );
  }
  private async rerunPrCheck(args: unknown[]) {
    const session = await this.requireSession(stringArg(args, 0));
    return this.github.rerunCheck(
      session.cwd,
      numberArg(args, 2),
      optionalString(args, 3),
    );
  }
  private async createLocalPr(value: unknown) {
    const params = asRecord(value, "PR parameters");
    const cwd = requiredProperty(params, "cwd");
    const title = requiredProperty(params, "title");
    const body = typeof params.body === "string" ? params.body : "";
    return this.github.createPr(cwd, title, body);
  }
  private async getPlan(sessionId: string) {
    const session = await this.requireSession(sessionId);
    return this.plans.find(
      await this.runtime.getTranscript(sessionId),
      session.cwd,
      this.app.getPath("home"),
    );
  }
  private async resolveSshSettings(config: SshConfig, cwd: string) {
    const valid = await this.ssh.validatePath(config, cwd);
    return {
      cwd,
      sshConfig: config,
      permissionMode: "default",
      effort: "high",
      availableModels: undefined,
      valid: valid.valid,
    };
  }
  private async prepareMessageAttachments(
    sessionId: string,
    message: string,
    value: unknown,
    sender?: WebContents,
  ): Promise<string> {
    if (value === undefined || value === null) return message;
    if (!Array.isArray(value))
      throw new TypeError("Attachments must be an array");
    const session = await this.requireSession(sessionId);
    if (!session.sshConfig || !sender || sender.isDestroyed()) return message;
    return this.attachments.prepareRemoteMessage(
      normalizeSshConfig(session.sshConfig),
      sessionId,
      message,
      value,
      sender,
    );
  }
}
