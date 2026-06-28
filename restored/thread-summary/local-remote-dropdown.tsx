// Restored from ref/webview/assets/local-remote-dropdown-BcmhHtfg.js
// Composer run-location controls used by the local-conversation summary panel.
import React, { type ReactNode } from "react";
import { appScopeO as useAppScopeStore } from "../boundaries/app-scope";
import { selectedEnvironmentSignal } from "../composer/composer-view-state";
import { composerPromptScope } from "../composer/prompt-text";
import type { ScopeStore } from "../composer/composer-view-state/types";
import {
  initGitRootQueryRuntime,
  useGitRootQuery,
} from "../github/git-root-query";
import { CloudIcon } from "../icons/cloud-icon";
import { LaptopIcon } from "../icons/laptop-icon";
import { WorktreeIcon } from "../icons/worktree-icon";
import {
  useCodexCloudAccess,
  useRegisterPromptLocalRemoteCommand,
} from "../remote/local-remote-selection";
import { useScopedValue, useSignalValue } from "../runtime/app-scope-hooks";
import {
  conversationCwdSignal,
  conversationHostIdSignal,
  initConversationStateRuntime,
} from "../runtime/conversation-state-runtime";
import {
  useCloudEnvironmentsQuery,
  useWorkspaceEnvironmentSearchQuery,
  useWorkspaceEnvironmentsByRepositoryQuery,
} from "../runtime/codex-api";
import type { CloudEnvironmentRecord } from "../runtime/codex-api/types";
import {
  FormattedMessage,
  initIntlRuntime,
  useIntl,
} from "../vendor/react-intl";

type ComposerMode = "cloud" | "local" | "worktree" | string;

type FooterRemoteState = {
  existingRemoteThreadState?: {
    connectionDisplayName?: string | null;
    hostId?: string | null;
    projectPath?: string | null;
  } | null;
  isAttachedToStartedTask?: boolean;
};

type ThreadHandoffSummary = {
  conversationTitle?: string | null;
  cwd: string;
  isWorktreeConversation: boolean;
};

type LocalRemoteDropdownProps = {
  allowWorktree?: boolean;
  composerMode: ComposerMode;
  conversationId?: string | null;
  disabled?: boolean;
  footerRemoteState?: FooterRemoteState | null;
  hideModeDropdown?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  setComposerMode: (mode: ComposerMode) => void | Promise<void>;
  side?: "bottom" | "left" | "right" | "top" | string;
  threadHandoff?: ThreadHandoffSummary | null;
  triggerVariant?: "composer" | "summary-panel" | string;
  worktreeLabelOnly?: boolean;
};

type CloudEnvironmentDropdownProps = {
  composerMode: ComposerMode;
  conversationId?: string | null;
  disabled?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  setComposerMode: (mode: ComposerMode) => void | Promise<void>;
  side?: "bottom" | "left" | "right" | "top" | string;
};

type DropdownOption = {
  description?: ReactNode;
  disabled?: boolean;
  id: ComposerMode;
  label: ReactNode;
};

type LocalRemoteSlashCommand = {
  Icon?: React.ComponentType<{ className?: string }>;
  dependencies?: React.DependencyList;
  description?: ReactNode;
  enabled?: boolean;
  id: string;
  onSelect?: () => void | Promise<void>;
  requiresEmptyComposer?: boolean;
  title: string;
};

type QueryResult<TData> = {
  data?: TData;
  error?: unknown;
  isError?: boolean;
  isFetching?: boolean;
  isLoading?: boolean;
};

const CODEX_ENVIRONMENTS_URL =
  "https://chatgpt.com/codex/settings/environments";
const LOCAL_REMOTE_DROPDOWN_SOURCE = "local_remote_dropdown";

export function initThreadHandoffSummaryHelpersChunk(): void {}

export function initLocalRemoteDropdownChunk(): void {
  initIntlRuntime();
  initConversationStateRuntime();
  initGitRootQueryRuntime();
}

export function initCloudEnvironmentDropdownChunk(): void {
  initIntlRuntime();
  initConversationStateRuntime();
  initGitRootQueryRuntime();
}

export function initLocalRemoteDropdownStateChunk(): void {}

export function shouldShowThreadHandoffInSummary({
  isCompactWindow,
}: {
  isCompactWindow: boolean;
}): boolean {
  return !isCompactWindow;
}

export function isComposerModeVisibleInLocalRemoteDropdown(
  mode: ComposerMode,
): boolean {
  return mode !== "cloud";
}

export function LocalRemoteDropdown({
  allowWorktree = false,
  composerMode,
  conversationId,
  disabled = false,
  footerRemoteState = null,
  hideModeDropdown = false,
  onOpenChange,
  setComposerMode,
  threadHandoff = null,
  triggerVariant = "composer",
  worktreeLabelOnly = false,
}: LocalRemoteDropdownProps): JSX.Element | null {
  let intl = useIntl(),
    conversationCwd = useScopedValue<string | null | undefined>(
      conversationCwdSignal,
      conversationId,
    ),
    conversationHostId =
      useScopedValue<string | null | undefined>(
        conversationHostIdSignal,
        conversationId,
      ) ?? "local",
    { access: cloudAccess } = useCodexCloudAccess(),
    { gitRoot } = useGitRootQuery(conversationCwd, {
      enabled: !disabled && !hideModeDropdown,
      hostId: conversationHostId,
      source: LOCAL_REMOTE_DROPDOWN_SOURCE,
    }),
    [isOpen, setIsOpen] = React.useState(false),
    isRemoteThread = getRemoteThreadState(footerRemoteState) != null,
    isSummaryPanel = triggerVariant === "summary-panel",
    modeLabel = getComposerModeLabel({
      composerMode,
      isRemoteThread,
      worktreeLabelOnly,
    }),
    modeDescription = getModeDescription({
      composerMode,
      isRemoteThread,
      threadHandoff,
    }),
    canOpen = !disabled && !hideModeDropdown,
    hasGitRepository = gitRoot != null,
    canRunInCloud = cloudAccess === "enabled" && hasGitRepository,
    canRunInWorktree =
      hasGitRepository &&
      (allowWorktree || worktreeLabelOnly || threadHandoff != null);

  let updateOpen = React.useCallback(
    (nextOpen: boolean) => {
      if (!canOpen && nextOpen) return;
      setIsOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [canOpen, onOpenChange],
  );

  useLocalRemoteSlashCommand({
    Icon: isRemoteThread ? CloudIcon : LaptopIcon,
    description: intl.formatMessage({
      id: "composer.mode.localSlashCommand.description",
      defaultMessage: "Run this chat locally",
      description: "Description for the local mode slash command",
    }),
    enabled: canOpen && composerMode !== "local",
    id: "local",
    onSelect: () => setComposerMode("local"),
    title: intl.formatMessage({
      id: isRemoteThread ? "composer.mode.remote" : "composer.mode.workLocally",
      defaultMessage: isRemoteThread ? "Remote" : "Work locally",
      description: isRemoteThread ? "Remote mode label" : "Local mode label",
    }),
  });

  useLocalRemoteSlashCommand({
    Icon: WorktreeIcon,
    description: intl.formatMessage({
      id: "composer.mode.worktreeSlashCommand.description",
      defaultMessage: "Run this chat in a new worktree",
      description: "Description for the worktree mode slash command",
    }),
    enabled: canOpen && canRunInWorktree && composerMode !== "worktree",
    id: "worktree",
    onSelect: () => setComposerMode("worktree"),
    title: intl.formatMessage({
      id: isRemoteThread
        ? "composer.mode.remoteWorktree"
        : "composer.mode.worktree",
      defaultMessage: isRemoteThread ? "New remote worktree" : "New worktree",
      description: "Worktree mode label",
    }),
  });

  useLocalRemoteSlashCommand({
    Icon: CloudIcon,
    description: intl.formatMessage({
      id: "composer.mode.cloudSlashCommand.description",
      defaultMessage: "Run this chat in the cloud",
      description: "Description for the cloud mode slash command",
    }),
    enabled: canOpen && canRunInCloud && composerMode !== "cloud",
    id: "cloud",
    onSelect: () => setComposerMode("cloud"),
    title: intl.formatMessage({
      id: "composer.mode.runInCloud",
      defaultMessage: "Cloud",
      description:
        "Remote mode label when a Codex task will be run in the cloud",
    }),
  });

  if (hideModeDropdown && !worktreeLabelOnly) return null;

  let options: DropdownOption[] = [
    {
      id: "local",
      label: isRemoteThread ? (
        <FormattedMessage
          id="composer.mode.remote"
          defaultMessage="Remote"
          description="Remote mode label"
        />
      ) : (
        <FormattedMessage
          id="composer.mode.workLocally"
          defaultMessage="Work locally"
          description="Local mode label"
        />
      ),
      description: isRemoteThread ? (
        getRemoteThreadDescription(footerRemoteState)
      ) : (
        <FormattedMessage
          id="composer.mode.localSlashCommand.description"
          defaultMessage="Run this chat locally"
          description="Description for the local mode slash command"
        />
      ),
      disabled: composerMode === "local",
    },
    {
      id: "cloud",
      label: (
        <FormattedMessage
          id="composer.mode.runInCloud"
          defaultMessage="Cloud"
          description="Remote mode label when a Codex task will be run in the cloud"
        />
      ),
      description: (
        <FormattedMessage
          id="composer.mode.cloudSlashCommand.description"
          defaultMessage="Run this chat in the cloud"
          description="Description for the cloud mode slash command"
        />
      ),
      disabled: composerMode === "cloud" || !canRunInCloud,
    },
  ];

  if (allowWorktree || worktreeLabelOnly || threadHandoff != null) {
    options.splice(1, 0, {
      id: "worktree",
      label: isRemoteThread ? (
        <FormattedMessage
          id="composer.mode.remoteWorktree"
          defaultMessage="New remote worktree"
          description="Worktree mode label when the selected workspace is remote"
        />
      ) : (
        <FormattedMessage
          id="composer.mode.worktree"
          defaultMessage="New worktree"
          description="Worktree mode label"
        />
      ),
      description: (
        <FormattedMessage
          id={
            isRemoteThread
              ? "composer.mode.remoteWorktree.tooltip"
              : "composer.mode.worktree.tooltip"
          }
          defaultMessage={
            isRemoteThread
              ? "Create a copy of your remote project to work in parallel"
              : "Create a copy of your local project to work in parallel"
          }
          description="Tooltip content for worktree mode dropdown item"
        />
      ),
      disabled: composerMode === "worktree" || !canRunInWorktree,
    });
  }

  return (
    <div className="relative inline-flex min-w-0">
      <button
        type="button"
        className={getTriggerClassName(isSummaryPanel)}
        disabled={!canOpen}
        title={intl.formatMessage({
          id: "composer.mode.localRemoteWhereRun",
          defaultMessage: "Select where to run the task",
          description: "Tooltip content for local/remote dropdown",
        })}
        onClick={() => updateOpen(!isOpen)}
      >
        <span className="min-w-0 truncate">{modeLabel}</span>
        {canOpen ? (
          <span className="text-token-text-tertiary" aria-hidden={true}>
            v
          </span>
        ) : null}
      </button>
      {isOpen ? (
        <RunLocationMenu
          description={modeDescription}
          options={options}
          selectedMode={composerMode}
          onSelect={(nextMode) => {
            void setComposerMode(nextMode);
            updateOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}

export function CloudEnvironmentDropdown({
  composerMode,
  conversationId,
  disabled = false,
  onOpenChange,
  side: _side,
  setComposerMode,
}: CloudEnvironmentDropdownProps): JSX.Element | null {
  let intl = useIntl(),
    composerScopeStore = useAppScopeStore(composerPromptScope) as ScopeStore,
    conversationCwd = useScopedValue<string | null | undefined>(
      conversationCwdSignal,
      conversationId,
    ),
    conversationHostId =
      useScopedValue<string | null | undefined>(
        conversationHostIdSignal,
        conversationId,
      ) ?? "local",
    { access: cloudAccess } = useCodexCloudAccess(),
    { gitRoot } = useGitRootQuery(conversationCwd, {
      enabled: composerMode === "cloud",
      hostId: conversationHostId,
      source: LOCAL_REMOTE_DROPDOWN_SOURCE,
    }),
    selectedEnvironment =
      useSignalValue<CloudEnvironmentRecord | null>(
        selectedEnvironmentSignal,
      ) ?? null,
    [isOpen, setIsOpen] = React.useState(false),
    [searchQuery, setSearchQuery] = React.useState(""),
    trimmedSearchQuery = searchQuery.trim(),
    shouldQuery = isOpen && composerMode === "cloud";

  let allEnvironmentsQuery = useCloudEnvironmentsQuery({
      enabled: shouldQuery,
    }) as QueryResult<CloudEnvironmentRecord[]>,
    workspaceEnvironmentsQuery = useWorkspaceEnvironmentsByRepositoryQuery({
      enabled: shouldQuery,
    }) as QueryResult<CloudEnvironmentRecord[]>,
    environmentSearchQuery = useWorkspaceEnvironmentSearchQuery(searchQuery, {
      enabled: shouldQuery && trimmedSearchQuery.length > 0,
    }) as QueryResult<CloudEnvironmentRecord[]>;

  let selectedEnvironmentId = getCloudEnvironmentId(selectedEnvironment),
    environments = React.useMemo(
      () =>
        trimmedSearchQuery.length > 0
          ? sortCloudEnvironments(
              environmentSearchQuery.data ?? [],
              selectedEnvironmentId,
            )
          : mergeCloudEnvironmentLists(
              workspaceEnvironmentsQuery.data ?? [],
              allEnvironmentsQuery.data ?? [],
              selectedEnvironmentId,
            ),
      [
        allEnvironmentsQuery.data,
        environmentSearchQuery.data,
        selectedEnvironmentId,
        trimmedSearchQuery.length,
        workspaceEnvironmentsQuery.data,
      ],
    ),
    isLoading =
      (trimmedSearchQuery.length > 0
        ? environmentSearchQuery.isLoading || environmentSearchQuery.isFetching
        : allEnvironmentsQuery.isLoading ||
          allEnvironmentsQuery.isFetching ||
          workspaceEnvironmentsQuery.isLoading ||
          workspaceEnvironmentsQuery.isFetching) ?? false,
    isError =
      (trimmedSearchQuery.length > 0
        ? environmentSearchQuery.isError
        : allEnvironmentsQuery.isError) ?? false,
    selectedEnvironmentLabel =
      selectedEnvironment == null ? (
        <FormattedMessage
          id="composer.mode.remote.selectEnvironment"
          defaultMessage="Select environment"
          description="Remote mode label when no environment is selected"
        />
      ) : (
        selectedEnvironment.label
      );

  let updateOpen = (nextOpen: boolean) => {
    if (disabled && nextOpen) return;
    setIsOpen(nextOpen);
    if (!nextOpen) setSearchQuery("");
    onOpenChange?.(nextOpen);
  };

  React.useEffect(() => {
    if (
      !shouldQuery ||
      selectedEnvironment != null ||
      environments.length === 0
    ) {
      return;
    }
    composerScopeStore.set(selectedEnvironmentSignal, environments[0]);
  }, [composerScopeStore, environments, selectedEnvironment, shouldQuery]);

  if (
    composerMode !== "cloud" ||
    cloudAccess !== "enabled" ||
    gitRoot == null
  ) {
    return null;
  }

  return (
    <div className="relative inline-flex min-w-0">
      <button
        type="button"
        className="flex h-7 min-w-0 items-center gap-1 rounded-md border border-token-border bg-token-bg-secondary px-2 text-sm text-token-foreground disabled:cursor-not-allowed disabled:opacity-40"
        disabled={disabled}
        title={intl.formatMessage({
          id: "composer.environmentSelector.tooltip",
          defaultMessage: "Select a cloud environment",
          description: "Tooltip content for environment selector",
        })}
        onClick={() => updateOpen(!isOpen)}
      >
        <span className="min-w-0 max-w-40 truncate">
          {selectedEnvironmentLabel}
        </span>
        <span className="text-token-text-tertiary" aria-hidden={true}>
          v
        </span>
      </button>
      {isOpen ? (
        <CloudEnvironmentMenu
          environments={environments}
          isError={isError}
          isLoading={isLoading}
          searchQuery={searchQuery}
          selectedEnvironmentId={selectedEnvironmentId}
          onCreateNew={() => updateOpen(false)}
          onSearchQueryChange={setSearchQuery}
          onSelectEnvironment={(environment) => {
            composerScopeStore.set(selectedEnvironmentSignal, environment);
            void setComposerMode("cloud");
            updateOpen(false);
          }}
        />
      ) : null}
    </div>
  );
}

function useLocalRemoteSlashCommand({
  dependencies = [],
  ...command
}: LocalRemoteSlashCommand): void {
  useRegisterPromptLocalRemoteCommand({
    requiresEmptyComposer: false,
    ...command,
    dependencies: [command.onSelect, ...dependencies],
  } as Parameters<typeof useRegisterPromptLocalRemoteCommand>[0]);
}

function CloudEnvironmentMenu({
  environments,
  isError,
  isLoading,
  onCreateNew,
  onSearchQueryChange,
  onSelectEnvironment,
  searchQuery,
  selectedEnvironmentId,
}: {
  environments: CloudEnvironmentRecord[];
  isError: boolean;
  isLoading: boolean;
  onCreateNew: () => void;
  onSearchQueryChange: (query: string) => void;
  onSelectEnvironment: (environment: CloudEnvironmentRecord) => void;
  searchQuery: string;
  selectedEnvironmentId: string | null;
}): JSX.Element {
  let intl = useIntl();
  return (
    <div className="absolute top-full left-0 z-50 mt-1 flex w-72 flex-col overflow-hidden rounded-md border border-token-border bg-token-bg-primary py-1 text-sm shadow-lg">
      <div className="border-b border-token-border px-3 py-2">
        <div className="mb-2 text-xs font-medium text-token-text-secondary">
          <FormattedMessage
            id="composer.environmentSelector.title"
            defaultMessage="Select environment"
            description="Title for the cloud environment dropdown"
          />
        </div>
        <input
          className="h-8 w-full rounded-md border border-token-border bg-token-bg-secondary px-2 text-sm text-token-foreground outline-none placeholder:text-token-text-tertiary"
          placeholder={intl.formatMessage({
            id: "composer.searchEnvironments",
            defaultMessage: "Search environments",
            description: "Search environments placeholder",
          })}
          value={searchQuery}
          onChange={(event) => onSearchQueryChange(event.currentTarget.value)}
        />
      </div>
      <div className="max-h-72 overflow-y-auto py-1">
        {isLoading ? (
          <CloudEnvironmentMessage>
            <FormattedMessage
              id="composer.environmentSelector.loading"
              defaultMessage="Loading environments..."
              description="Loading state for the cloud environment dropdown"
            />
          </CloudEnvironmentMessage>
        ) : isError ? (
          <CloudEnvironmentMessage>
            <FormattedMessage
              id="composer.environmentSelector.error"
              defaultMessage="Error loading environments"
              description="Error state for the cloud environment dropdown"
            />
          </CloudEnvironmentMessage>
        ) : environments.length > 0 ? (
          environments.map((environment) => {
            let environmentId = getCloudEnvironmentId(environment),
              isSelected =
                environmentId != null &&
                environmentId === selectedEnvironmentId;
            return (
              <button
                key={environmentId ?? environment.label}
                type="button"
                className="flex min-w-0 w-full items-center justify-between gap-2 px-3 py-2 text-left text-token-foreground hover:bg-token-list-hover-background"
                onClick={() => onSelectEnvironment(environment)}
              >
                <span className="min-w-0">
                  <span className="block truncate">{environment.label}</span>
                  {environment.repos?.length ? (
                    <span className="block truncate text-xs text-token-text-secondary">
                      {environment.repos.join(", ")}
                    </span>
                  ) : null}
                </span>
                {isSelected ? (
                  <span className="text-token-text-tertiary" aria-hidden={true}>
                    *
                  </span>
                ) : null}
              </button>
            );
          })
        ) : (
          <CloudEnvironmentMessage>
            <FormattedMessage
              id="codex.environments.noEnvironmentsFound"
              defaultMessage="No environments found"
              description="Message shown when no Codex environments were found"
            />
          </CloudEnvironmentMessage>
        )}
      </div>
      <div className="border-t border-token-border py-1">
        <a
          className="block px-3 py-2 text-sm text-token-foreground hover:bg-token-list-hover-background"
          href={CODEX_ENVIRONMENTS_URL}
          rel="noreferrer"
          target="_blank"
          onClick={onCreateNew}
        >
          <FormattedMessage
            id="composer.environmentSelector.createNew"
            defaultMessage="Create new"
            description="CTA to create a new Codex environment"
          />
        </a>
      </div>
    </div>
  );
}

function CloudEnvironmentMessage({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div className="px-3 py-3 text-sm text-token-text-secondary">
      {children}
    </div>
  );
}

function RunLocationMenu({
  description,
  onSelect,
  options,
  selectedMode,
}: {
  description?: ReactNode;
  onSelect: (mode: ComposerMode) => void;
  options: DropdownOption[];
  selectedMode: ComposerMode;
}): JSX.Element {
  return (
    <div className="absolute top-full left-0 z-50 mt-1 flex w-64 flex-col overflow-hidden rounded-md border border-token-border bg-token-bg-primary py-1 text-sm shadow-lg">
      {description ? (
        <div className="border-b border-token-border px-3 py-2 text-xs text-token-text-secondary">
          {description}
        </div>
      ) : null}
      {options.map((option) => (
        <button
          key={option.id}
          type="button"
          disabled={option.disabled}
          className="flex min-w-0 flex-col gap-0.5 px-3 py-2 text-left text-token-foreground hover:bg-token-list-hover-background disabled:cursor-default disabled:opacity-50"
          onClick={() => onSelect(option.id)}
        >
          <span className="flex min-w-0 items-center gap-2">
            <span className="min-w-0 truncate">{option.label}</span>
            {selectedMode === option.id ? (
              <span className="text-token-text-tertiary" aria-hidden={true}>
                *
              </span>
            ) : null}
          </span>
          {option.description ? (
            <span className="line-clamp-2 text-xs text-token-text-secondary">
              {option.description}
            </span>
          ) : null}
        </button>
      ))}
    </div>
  );
}

function getTriggerClassName(isSummaryPanel: boolean): string {
  return isSummaryPanel
    ? "flex h-7 min-w-0 items-center gap-1 rounded-md px-1.5 text-sm text-token-foreground hover:bg-token-list-hover-background disabled:cursor-not-allowed disabled:opacity-40"
    : "flex h-token-button-composer min-w-0 items-center gap-1 rounded-full border border-token-border bg-token-bg-secondary px-2 text-sm text-token-foreground disabled:cursor-not-allowed disabled:opacity-40";
}

function getComposerModeLabel({
  composerMode,
  isRemoteThread,
  worktreeLabelOnly,
}: {
  composerMode: ComposerMode;
  isRemoteThread: boolean;
  worktreeLabelOnly: boolean;
}): ReactNode {
  if (composerMode === "cloud") {
    return (
      <FormattedMessage
        id="composer.mode.runInCloud"
        defaultMessage="Cloud"
        description="Remote mode label when a Codex task will be run in the cloud"
      />
    );
  }
  if (composerMode === "worktree" || worktreeLabelOnly) {
    return isRemoteThread ? (
      <FormattedMessage
        id="composer.mode.remoteWorktree"
        defaultMessage="New remote worktree"
        description="Worktree mode label when the selected workspace is remote"
      />
    ) : (
      <FormattedMessage
        id="composer.mode.worktree"
        defaultMessage="New worktree"
        description="Worktree mode label"
      />
    );
  }
  if (isRemoteThread) {
    return (
      <FormattedMessage
        id="composer.mode.remote"
        defaultMessage="Remote"
        description="Remote mode label"
      />
    );
  }
  return (
    <FormattedMessage
      id="composer.mode.local.short"
      defaultMessage="Local"
      description="Short local mode label"
    />
  );
}

function getModeDescription({
  composerMode,
  isRemoteThread,
  threadHandoff,
}: {
  composerMode: ComposerMode;
  isRemoteThread: boolean;
  threadHandoff: ThreadHandoffSummary | null;
}): ReactNode {
  if (threadHandoff != null) {
    return (
      <span className="block truncate">
        {threadHandoff.conversationTitle ?? threadHandoff.cwd}
      </span>
    );
  }
  if (composerMode === "cloud") {
    return (
      <FormattedMessage
        id="composer.mode.cloudSlashCommand.description"
        defaultMessage="Run this chat in the cloud"
        description="Description for the cloud mode slash command"
      />
    );
  }
  if (isRemoteThread) return null;
  return (
    <FormattedMessage
      id="composer.mode.localRemoteWhereRun"
      defaultMessage="Select where to run the task"
      description="Tooltip content for local/remote dropdown"
    />
  );
}

function getRemoteThreadState(
  footerRemoteState: FooterRemoteState | null,
): FooterRemoteState["existingRemoteThreadState"] | null {
  let remoteThreadState = footerRemoteState?.existingRemoteThreadState ?? null;
  return remoteThreadState?.hostId != null &&
    remoteThreadState.hostId !== "local"
    ? remoteThreadState
    : null;
}

function getRemoteThreadDescription(
  footerRemoteState: FooterRemoteState | null,
): ReactNode {
  let remoteThreadState = getRemoteThreadState(footerRemoteState);
  if (remoteThreadState == null) return null;
  return (
    remoteThreadState.connectionDisplayName ?? remoteThreadState.projectPath
  );
}

function getCloudEnvironmentId(
  environment: CloudEnvironmentRecord | null | undefined,
): string | null {
  return environment?.id ?? environment?.environment_id ?? null;
}

function mergeCloudEnvironmentLists(
  primaryEnvironments: CloudEnvironmentRecord[],
  secondaryEnvironments: CloudEnvironmentRecord[],
  selectedEnvironmentId: string | null,
): CloudEnvironmentRecord[] {
  let environmentsByKey = new Map<string, CloudEnvironmentRecord>();
  for (let environment of [...primaryEnvironments, ...secondaryEnvironments]) {
    environmentsByKey.set(
      getCloudEnvironmentId(environment) ?? environment.label,
      environment,
    );
  }
  return sortCloudEnvironments(
    Array.from(environmentsByKey.values()),
    selectedEnvironmentId,
  );
}

function sortCloudEnvironments(
  environments: CloudEnvironmentRecord[],
  selectedEnvironmentId: string | null,
): CloudEnvironmentRecord[] {
  return [...environments].sort((left, right) => {
    let leftId = getCloudEnvironmentId(left),
      rightId = getCloudEnvironmentId(right);
    if (selectedEnvironmentId != null) {
      if (leftId === selectedEnvironmentId) return -1;
      if (rightId === selectedEnvironmentId) return 1;
    }
    if (Boolean(left.is_pinned) !== Boolean(right.is_pinned)) {
      return left.is_pinned ? -1 : 1;
    }
    let taskCountDifference = (right.task_count ?? 0) - (left.task_count ?? 0);
    return taskCountDifference === 0
      ? left.label.localeCompare(right.label)
      : taskCountDifference;
  });
}
