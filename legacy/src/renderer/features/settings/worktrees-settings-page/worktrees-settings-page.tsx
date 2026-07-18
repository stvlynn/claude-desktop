// Restored from ref/webview/assets/worktrees-settings-page-KeLyIYZM.js
// @ts-nocheck
// Settings page for inspecting and deleting Codex-managed git worktrees.
import { FormattedMessage, useIntl } from "../../../shared/vendor/react-intl";
import { _appScopeA as useScopedAppValue } from "../../../shared/runtime/app-scope";
import {
  shouldHideSubAgentThread,
  useHostConfigById,
} from "../../../shared/runtime/use-host-config.facade";
import { workspaceRootOptionsQueryForHost } from "../../../shared/runtime/thread-context-inputs.facade";
import { useRecentConversationsQuery } from "../../app-server/app-server-manager-hooks";
import { useIsBackgroundSubagentsEnabled } from "../../../shared/lib/use-is-background-subagents-enabled";
import { useSettingsHostContext } from "../settings-host-context";
import { useCodexWorktrees } from "../../../shared/lib/use-codex-worktrees";
import { Button } from "../../../shared/ui/button";
import { Spinner } from "../../../shared/ui/spinner";
import { RegenerateIcon } from "../../../shared/icons/regenerate-icon";
import { SettingsContentLayout } from "../../../shared/ui/settings-content-layout";
import { SettingsSectionTitle } from "../settings-shared";
import { SettingsGroup } from "../../../shared/lib/settings-group";
import { SettingsSurface } from "../../../shared/lib/settings-surface";
import { WorktreeRepositorySection } from "./repository-section";
import {
  type CodexWorktree,
  filterWorktreesNotBackingWorkspaceRoots,
  getConversationHostId,
  groupWorktreesByRepository,
  type WorktreeConversation,
  type WorkspaceRootOptions,
} from "./worktree-utils";
type CodexWorktreesResult = {
  data?: {
    worktrees?: CodexWorktree[];
  } | null;
  error?: Error | null;
  isFetching?: boolean;
  isLoading?: boolean;
  refetch: () => unknown;
};
type WorkspaceRootOptionsResult = {
  data?: WorkspaceRootOptions | null;
  error?: Error | null;
  isLoading?: boolean;
};
type RecentConversationsResult = {
  data?: WorktreeConversation[] | null;
  isLoading?: boolean;
};
export function WorktreesSettingsPage(): JSX.Element {
  const intl = useIntl();
  const { selectedHostId } = useSettingsHostContext();
  const hostConfig = useHostConfigById(selectedHostId);
  const worktreesQuery = useCodexWorktrees(
    hostConfig,
    "worktrees_settings_page",
  ) as CodexWorktreesResult;
  const workspaceRootsQuery = useScopedAppValue(
    workspaceRootOptionsQueryForHost,
    {
      hostId: selectedHostId,
    },
  ) as WorkspaceRootOptionsResult;
  const recentConversationsQuery =
    useRecentConversationsQuery() as RecentConversationsResult;
  const isBackgroundSubagentsEnabled = useIsBackgroundSubagentsEnabled();
  const worktrees = filterWorktreesNotBackingWorkspaceRoots(
    worktreesQuery.data?.worktrees ?? [],
    workspaceRootsQuery.data?.roots ?? [],
  );
  const hostConversations = (recentConversationsQuery.data ?? []).filter(
    (conversation) => getConversationHostId(conversation) === selectedHostId,
  );
  const visibleConversations = hostConversations.filter(
    (conversation) =>
      !shouldHideSubAgentThread(conversation, isBackgroundSubagentsEnabled),
  );
  const repositoryGroups = groupWorktreesByRepository(worktrees);
  const refreshLabel = intl.formatMessage({
    id: "settings.worktrees.refresh",
    defaultMessage: "Refresh",
    description: "Button label to refresh the worktree list",
  });
  const refreshAction = (
    <Button
      aria-label={refreshLabel}
      className="shrink-0"
      color="ghost"
      loading={worktreesQuery.isFetching}
      onClick={() => worktreesQuery.refetch()}
      size="toolbar"
      title={refreshLabel}
      uniform
    >
      {worktreesQuery.isFetching ? null : (
        <RegenerateIcon className="icon-xs" />
      )}
    </Button>
  );
  const loadError = worktreesQuery.error ?? workspaceRootsQuery.error;
  if (worktreesQuery.isLoading || workspaceRootsQuery.isLoading) {
    return (
      <SettingsContentLayout title={<SettingsSectionTitle slug="worktrees" />}>
        <SettingsGroup>
          <SettingsGroup.Header
            title={
              <FormattedMessage
                id="settings.worktrees.loading.title"
                defaultMessage="Loading worktrees"
                description="Loading state title for worktrees settings"
              />
            }
            actions={refreshAction}
          />
          <SettingsGroup.Content>
            <SettingsSurface>
              <div className="flex items-center gap-2 p-3 text-sm text-token-text-secondary">
                <Spinner className="icon-xxs" />
                <FormattedMessage
                  id="settings.worktrees.loading.body"
                  defaultMessage="Fetching worktree details."
                  description="Loading state body for worktrees settings"
                />
              </div>
            </SettingsSurface>
          </SettingsGroup.Content>
        </SettingsGroup>
      </SettingsContentLayout>
    );
  }
  if (loadError) {
    return (
      <SettingsContentLayout title={<SettingsSectionTitle slug="worktrees" />}>
        <SettingsGroup>
          <SettingsGroup.Header
            title={
              <FormattedMessage
                id="settings.worktrees.error.title"
                defaultMessage="Unable to load worktrees"
                description="Error state title for worktrees settings"
              />
            }
            actions={refreshAction}
          />
          <SettingsGroup.Content>
            <SettingsSurface>
              <div className="p-3 text-sm text-token-text-secondary">
                {getErrorMessage(loadError) ??
                  intl.formatMessage({
                    id: "settings.worktrees.error.body",
                    defaultMessage:
                      "Something went wrong while loading worktrees.",
                    description: "Error body for worktrees settings",
                  })}
              </div>
            </SettingsSurface>
          </SettingsGroup.Content>
        </SettingsGroup>
      </SettingsContentLayout>
    );
  }
  return (
    <SettingsContentLayout title={<SettingsSectionTitle slug="worktrees" />}>
      {repositoryGroups.length === 0 ? (
        <SettingsGroup>
          <SettingsGroup.Header
            title={
              <FormattedMessage
                id="settings.worktrees.empty.title"
                defaultMessage="No worktrees yet"
                description="Empty state title for worktrees settings"
              />
            }
            actions={refreshAction}
          />
          <SettingsGroup.Content>
            <SettingsSurface>
              <div className="p-3 text-sm text-token-text-secondary">
                <FormattedMessage
                  id="settings.worktrees.empty.body"
                  defaultMessage="Worktrees created by Codex will appear here."
                  description="Empty state body for worktrees settings"
                />
              </div>
            </SettingsSurface>
          </SettingsGroup.Content>
        </SettingsGroup>
      ) : (
        repositoryGroups.map((group, index) => (
          <WorktreeRepositorySection
            key={group.key}
            action={index === 0 ? refreshAction : null}
            allConversations={hostConversations}
            hostId={selectedHostId}
            isConversationsLoading={Boolean(recentConversationsQuery.isLoading)}
            onWorktreeDeleted={() => worktreesQuery.refetch()}
            repoRoot={group.repoRoot}
            visibleConversations={visibleConversations}
            worktrees={group.worktrees}
          />
        ))
      )}
    </SettingsContentLayout>
  );
}
function getErrorMessage(error: Error): string | null {
  return error.message || null;
}
