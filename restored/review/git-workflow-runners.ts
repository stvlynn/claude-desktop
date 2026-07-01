// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// The async runners that drive each local conversation git action step: setting up a
// worktree branch, committing, pushing, creating a pull request, and the combined
// commit/push workflow — each surfacing terminal error toasts on failure.

import {
  analyticsAttributionAtom,
  buildQueryKey,
  commitAttributionConfigAtom,
  intlAtom,
  openExternalLink,
  pushStatusAtom,
  readConfigBooleanFlag,
  refreshPushStatus,
  setConversationBranch,
  toastControllerAtom,
} from "../boundaries/onboarding-commons-externals.facade";
import { showTerminalErrorToast } from "./terminal-error-toast";
import { gitActionMessages, resolveBranchLabel } from "./git-action-messages";
import {
  activeGitWorkflowAtom,
  cleanupGitWorkflowAbortSignal,
  commitMessageDraftAtom,
  conversationHeadBranchAtom,
  createGitWorkflowAbortSignal,
  shouldRecordConversationBranchAtom,
} from "./local-git-actions-scope";
import {
  commitMutationAtom,
  createAndCheckoutBranchMutationAtom,
  createPullRequestMutationAtom,
  pushMutationAtom,
} from "./git-mutations";
import { generateCommitMessageMutationAtom } from "./git-action-message-mutations";
import type { PushStatus } from "./git-action-blocked-reasons";

const GIT_ACTION_OPERATION_SOURCE = "local_conversation_git_actions";

interface ScopedStore {
  get<TValue>(atom: unknown, params?: unknown): TValue;
  set(atom: unknown, params: unknown, value: unknown): void;
  queryClient: { invalidateQueries(filters: { queryKey: unknown }): void };
}

interface IntlController {
  formatMessage(
    descriptor: { id: string; defaultMessage: string; description?: string },
    values?: Record<string, unknown>,
  ): string;
}

interface ToastController {
  danger(message: string): void;
  success(message: string): void;
}

interface GitActionContext {
  cwd: string;
  hostConfig: { id: string };
  conversationId?: string | null;
  codexWorktree?: boolean;
  operationSource: string;
}

interface MutationResult {
  status: string;
  error?: string;
  errorType?: string;
  execOutput?: { command?: string | null; output?: string | null } | null;
  branch?: string;
  url?: string | null;
}

export function refreshPushStatusAndPullRequest(
  scope: ScopedStore,
  {
    branch,
    cwd,
    hostConfig,
    operationSource,
    refetchPullRequestStatus,
  }: {
    branch?: string | null;
    cwd: string;
    hostConfig: { id: string };
    operationSource: string;
    refetchPullRequestStatus?: (() => void) | null;
  },
): void {
  refreshPushStatus(scope, { cwd, hostConfig, operationSource });
  if (refetchPullRequestStatus != null) {
    refetchPullRequestStatus();
    return;
  }
  if (branch != null) {
    scope.queryClient.invalidateQueries({
      queryKey: buildQueryKey("gh-pr-status", {
        cwd,
        headBranch: branch,
        hostId: hostConfig.id,
      }),
    });
  }
}

export function resolveCommitAttribution(
  config: Record<string, unknown> | undefined,
): string | null | undefined {
  if (readConfigBooleanFlag(config, "codex_git_commit") !== true) {
    return null;
  }
  const attribution = config?.commit_attribution;
  if (attribution == null) {
    return attribution as null | undefined;
  }
  if (typeof attribution !== "string") {
    return undefined;
  }
  const trimmed = attribution.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export async function setupWorkflowBranch({
  scope,
  conversationId,
  cwd,
  hostConfig,
  operationSource,
  branch,
  mode,
  signal,
}: {
  scope: ScopedStore;
  conversationId?: string | null;
  cwd: string;
  hostConfig: { id: string };
  operationSource: string;
  branch: string;
  mode: "synced" | "worktree";
  signal?: AbortSignal;
}): Promise<boolean> {
  if (signal?.aborted) {
    return false;
  }
  const toaster = scope.get<ToastController>(toastControllerAtom);
  const intl = scope.get<IntlController>(intlAtom);
  const createBranchErrorTitle = intl.formatMessage(
    gitActionMessages.createBranchErrorTitle,
  );
  try {
    const result = await scope
      .get<{
        mutateAsync(variables: unknown): Promise<MutationResult>;
      }>(createAndCheckoutBranchMutationAtom, {
        cwd,
        hostConfig,
        operationSource,
      })
      .mutateAsync({ branch, failIfExists: true, mode, signal });
    switch (result.status) {
      case "success":
        if (conversationId != null) {
          setConversationBranch(conversationId, branch);
        }
        return !signal?.aborted;
      case "create-error":
        if (!signal?.aborted) {
          showTerminalErrorToast({
            toaster,
            title: createBranchErrorTitle,
            message: result.execOutput == null ? result.error : null,
            execOutput: result.execOutput,
          });
        }
        return false;
      case "checkout-error":
        if (!signal?.aborted) {
          showTerminalErrorToast({
            toaster,
            title: intl.formatMessage(
              gitActionMessages.checkoutBranchErrorTitle,
            ),
            message: result.execOutput == null ? result.error : null,
            execOutput: result.execOutput,
          });
        }
        return false;
      default:
        return false;
    }
  } catch {
    if (!signal?.aborted) {
      showTerminalErrorToast({
        toaster,
        title: createBranchErrorTitle,
        message: createBranchErrorTitle,
      });
    }
    return false;
  }
}

export async function commitWorkflowChanges({
  scope,
  cwd,
  hostConfig,
  resolveCommitMessage,
  commitAttribution,
  operationSource,
  allowNothingToCommit = false,
  signal,
}: {
  scope: ScopedStore;
  cwd: string;
  hostConfig: { id: string };
  resolveCommitMessage: () => Promise<string | null>;
  commitAttribution?: string | null;
  operationSource: string;
  allowNothingToCommit?: boolean;
  signal?: AbortSignal;
}): Promise<boolean> {
  if (signal?.aborted) {
    return false;
  }
  const toaster = scope.get<ToastController>(toastControllerAtom);
  const intl = scope.get<IntlController>(intlAtom);
  const commitMessage = await resolveCommitMessage();
  if (signal?.aborted || commitMessage == null) {
    return false;
  }
  const trimmedMessage = commitMessage.trim();
  if (trimmedMessage.length === 0) {
    toaster.danger(intl.formatMessage(gitActionMessages.commitMessageEmpty));
    return false;
  }
  try {
    const result = await scope
      .get<{
        mutateAsync(variables: unknown): Promise<MutationResult>;
      }>(commitMutationAtom, { cwd, hostConfig, operationSource })
      .mutateAsync({
        message: trimmedMessage,
        commitAttribution,
        operationSource,
        signal,
      });
    if (signal?.aborted) {
      return false;
    }
    if (result.status === "error") {
      if (allowNothingToCommit && result.errorType === "nothing-to-commit") {
        return true;
      }
      showTerminalErrorToast({
        toaster,
        title: intl.formatMessage(gitActionMessages.commitErrorTitle),
        message: result.execOutput == null ? result.error : null,
        execOutput: result.execOutput,
      });
      return false;
    }
  } catch {
    if (!signal?.aborted) {
      showTerminalErrorToast({
        toaster,
        title: intl.formatMessage(gitActionMessages.commitErrorTitle),
        message: null,
      });
    }
    return false;
  }
  return true;
}

export async function pushWorkflowChanges({
  scope,
  cwd,
  hostConfig,
  pushStatus,
  analyticsAttribution,
  operationSource,
  forcePush = false,
  signal,
}: {
  scope: ScopedStore;
  cwd: string;
  hostConfig: { id: string };
  pushStatus: PushStatus | undefined | null;
  analyticsAttribution?: Record<string, unknown> | null;
  operationSource: string;
  forcePush?: boolean;
  signal?: AbortSignal;
}): Promise<boolean> {
  if (signal?.aborted) {
    return false;
  }
  const toaster = scope.get<ToastController>(toastControllerAtom);
  const intl = scope.get<IntlController>(intlAtom);
  const errorTitle = intl.formatMessage(
    forcePush
      ? gitActionMessages.forcePushErrorTitle
      : gitActionMessages.pushErrorTitle,
  );
  if (pushStatus == null) {
    showTerminalErrorToast({ toaster, title: errorTitle, message: null });
    return false;
  }
  const pushVariables: {
    cwd: string;
    force: boolean;
    refspec?: string;
    setUpstream?: boolean;
  } = { cwd, force: forcePush };
  if (!pushStatus.upstreamRef && pushStatus.branch) {
    pushVariables.refspec = `HEAD:refs/heads/${pushStatus.branch}`;
    pushVariables.setUpstream = true;
  }
  try {
    const result = await scope
      .get<{
        mutateAsync(variables: unknown): Promise<MutationResult>;
      }>(pushMutationAtom, { cwd, hostConfig, operationSource })
      .mutateAsync({
        ...pushVariables,
        analyticsAttribution,
        operationSource,
        signal,
      });
    if (result.status === "error") {
      if (!signal?.aborted) {
        showTerminalErrorToast({
          toaster,
          title: errorTitle,
          message:
            result.execOutput == null
              ? intl.formatMessage(gitActionMessages.pushErrorTitle)
              : null,
          execOutput: result.execOutput,
        });
      }
      return false;
    }
  } catch {
    if (!signal?.aborted) {
      showTerminalErrorToast({ toaster, title: errorTitle, message: null });
    }
    return false;
  }
  return true;
}

export async function createPullRequestRequest({
  scope,
  conversationId,
  cwd,
  hostConfig,
  pushStatus,
  createPullRequestAsDraft,
  operationSource,
  openInBrowser = false,
  title,
  body,
  signal,
}: {
  scope: ScopedStore;
  conversationId?: string | null;
  cwd: string;
  hostConfig: { id: string };
  pushStatus: PushStatus | undefined | null;
  createPullRequestAsDraft?: boolean;
  operationSource: string;
  openInBrowser?: boolean;
  title?: string | null;
  body?: string | null;
  signal?: AbortSignal;
}): Promise<{ url: string | null | undefined } | null> {
  if (signal?.aborted) {
    return null;
  }
  const toaster = scope.get<ToastController>(toastControllerAtom);
  const intl = scope.get<IntlController>(intlAtom);
  if (pushStatus?.branch == null || pushStatus.defaultBranch == null) {
    showTerminalErrorToast({
      toaster,
      title: intl.formatMessage(gitActionMessages.createPullRequestErrorTitle),
      message: null,
    });
    return null;
  }
  try {
    const result = await scope
      .get<{
        mutateAsync(variables: unknown): Promise<MutationResult>;
      }>(createPullRequestMutationAtom, {
        cwd,
        hostId: hostConfig.id,
        operationSource,
      })
      .mutateAsync({
        cwd,
        headBranch: pushStatus.branch,
        baseBranch: pushStatus.defaultBranch,
        isDraft: createPullRequestAsDraft,
        openInBrowser,
        titleOverride: title,
        bodyOverride: body,
        conversationId,
        operationSource,
        signal,
      });
    if (signal?.aborted) {
      return null;
    }
    if (result.status === "success") {
      if (openInBrowser && result.url != null) {
        openExternalLink({
          href: result.url,
          initiator: "pull_request_link",
          openTarget: "external-browser",
        });
      }
      return { url: result.url };
    }
    showTerminalErrorToast({
      toaster,
      title: intl.formatMessage(gitActionMessages.createPullRequestErrorTitle),
      message: result.execOutput == null ? result.error : null,
      execOutput: result.execOutput,
    });
    return null;
  } catch {
    if (!signal?.aborted) {
      showTerminalErrorToast({
        toaster,
        title: intl.formatMessage(
          gitActionMessages.createPullRequestErrorTitle,
        ),
        message: null,
      });
    }
    return null;
  }
}

export async function runCommitWorkflow(
  scope: ScopedStore,
  context: GitActionContext,
  plan: { newBranch?: string | null; nextStep: "commit" | "push" | string },
): Promise<boolean> {
  const hostScope = { cwd: context.cwd, hostId: context.hostConfig.id };
  if (scope.get(activeGitWorkflowAtom, hostScope) != null) {
    return false;
  }
  const abortSignal = createGitWorkflowAbortSignal(hostScope);
  scope.set(activeGitWorkflowAtom, hostScope, {
    workflow: "commit",
    phase:
      plan.newBranch == null
        ? plan.nextStep === "push"
          ? "pushing"
          : "committing"
        : "creating-branch",
  });
  try {
    const pushStatusResult = scope.get<{ type: string; data?: PushStatus }>(
      pushStatusAtom,
      {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
      },
    );
    const initialPushStatus =
      pushStatusResult.type === "success" ? pushStatusResult.data : undefined;
    let branch = plan.newBranch ?? initialPushStatus?.branch;
    let preGeneratedMessage: string | null | undefined;
    if (
      plan.newBranch != null &&
      plan.nextStep !== "push" &&
      scope.get<string>(commitMessageDraftAtom, hostScope).trim().length === 0
    ) {
      preGeneratedMessage = await scope
        .get<{ mutateAsync(variables: unknown): Promise<string | null> }>(
          generateCommitMessageMutationAtom,
          {
            conversationId: context.conversationId,
            cwd: context.cwd,
            hostConfig: context.hostConfig,
          },
        )
        .mutateAsync({ signal: abortSignal });
      if (preGeneratedMessage == null) {
        return false;
      }
    }
    if (plan.newBranch != null) {
      const branchReady = await setupWorkflowBranch({
        scope,
        conversationId: context.conversationId,
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
        branch: plan.newBranch,
        mode: context.codexWorktree ? "synced" : "worktree",
        signal: abortSignal,
      });
      if (!branchReady) {
        return false;
      }
      await refreshPushStatus(scope, {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
      });
    }
    if (plan.nextStep !== "push") {
      if (
        plan.newBranch == null &&
        context.operationSource === GIT_ACTION_OPERATION_SOURCE &&
        context.conversationId != null &&
        scope.get(shouldRecordConversationBranchAtom, context)
      ) {
        const headBranch = scope.get<string>(
          conversationHeadBranchAtom,
          context,
        );
        if (headBranch.length > 0) {
          setConversationBranch(context.conversationId, headBranch);
        }
      }
      scope.set(activeGitWorkflowAtom, hostScope, {
        workflow: "commit",
        phase: "committing",
      });
      const committed = await commitWorkflowChanges({
        scope,
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        resolveCommitMessage: async () => {
          if (preGeneratedMessage != null) {
            return preGeneratedMessage;
          }
          const draftMessage = scope
            .get<string>(commitMessageDraftAtom, hostScope)
            .trim();
          return draftMessage.length > 0
            ? draftMessage
            : scope
                .get<{
                  mutateAsync(variables: unknown): Promise<string | null>;
                }>(generateCommitMessageMutationAtom, {
                  conversationId: context.conversationId,
                  cwd: context.cwd,
                  hostConfig: context.hostConfig,
                })
                .mutateAsync({ signal: abortSignal });
        },
        commitAttribution: resolveCommitAttribution(
          scope.get<{ data?: Record<string, unknown> }>(
            commitAttributionConfigAtom,
            { cwd: context.cwd, hostId: context.hostConfig.id },
          ).data,
        ),
        operationSource: context.operationSource,
        signal: abortSignal,
      });
      if (!committed) {
        return false;
      }
    }
    if (plan.nextStep !== "commit") {
      scope.set(activeGitWorkflowAtom, hostScope, {
        workflow: "commit",
        phase: "pushing",
      });
      const latestPushStatusResult = scope.get<{
        type: string;
        data?: PushStatus;
      }>(pushStatusAtom, {
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
      });
      const pushStatus =
        latestPushStatusResult.type === "success"
          ? latestPushStatusResult.data
          : undefined;
      branch = pushStatus?.branch ?? branch;
      const pushed = await pushWorkflowChanges({
        scope,
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        pushStatus,
        analyticsAttribution: scope.get(analyticsAttributionAtom),
        operationSource: context.operationSource,
        signal: abortSignal,
      });
      if (!pushed) {
        return false;
      }
      refreshPushStatusAndPullRequest(scope, {
        branch,
        cwd: context.cwd,
        hostConfig: context.hostConfig,
        operationSource: context.operationSource,
      });
      if (abortSignal.aborted) {
        return false;
      }
    }
    const intl = scope.get<IntlController>(intlAtom);
    scope
      .get<ToastController>(toastControllerAtom)
      .success(
        intl.formatMessage(
          plan.nextStep === "commit"
            ? gitActionMessages.commitSuccess
            : gitActionMessages.pushSuccess,
          { branch: resolveBranchLabel(intl, branch) },
        ),
      );
    return true;
  } finally {
    cleanupGitWorkflowAbortSignal(hostScope, abortSignal);
    scope.set(activeGitWorkflowAtom, hostScope, null);
  }
}
