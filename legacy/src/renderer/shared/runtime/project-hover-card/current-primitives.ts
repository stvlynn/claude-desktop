// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// @ts-nocheck
// Current worktree/new-thread query primitives used by the project hover card.
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from "react";
import {
  LocalProjectFallbackIcon as LocalProjectFallbackIconRaw,
  ProjectAvatar as ProjectAvatarRaw,
  initThreadAttentionCountsRuntime as initThreadAttentionCountsRuntimeRaw,
  initLocalProjectActionsRuntime as initLocalProjectActionsRuntimeRaw,
  initLocalProjectFallbackIconRuntime as initLocalProjectFallbackIconRuntimeRaw,
  initProjectAvatarRuntime as initProjectAvatarRuntimeRaw,
  initWorkspaceRootLabelRuntime as initWorkspaceRootLabelRuntimeRaw,
  openLocalProjectEditModal as openLocalProjectEditModalRaw,
  threadAttentionCountsSignal as threadAttentionCountsSignalRaw,
  updateWorkspaceRootLabel as updateWorkspaceRootLabelRaw,
} from "../../vendor/worktree-new-thread-query-current-bundle";

export type ProjectAvatarProps = {
  appearance?: unknown;
  buttonClassName?: string;
  disablePopoverPortal?: boolean;
  fallbackIcon?: ReactNode;
  markerClassName?: string;
  onAppearanceChange?: (appearance: unknown) => void;
  projectId: string;
  projectName: string;
};

export type LocalProjectEditModalOptions = {
  initialName: string;
  initialSources: string[];
  project: unknown;
  showDeleteAction?: boolean;
};

export type UpdateWorkspaceRootLabelOptions = {
  label: string;
  path: string;
  queryClient: unknown;
};

export const ProjectAvatar =
  ProjectAvatarRaw as ComponentType<ProjectAvatarProps>;

export const LocalProjectFallbackIcon =
  LocalProjectFallbackIconRaw as ComponentType<ComponentPropsWithoutRef<"svg">>;

export const threadAttentionCountsSignal = threadAttentionCountsSignalRaw;

export function openLocalProjectEditModal(
  scope: unknown,
  options: LocalProjectEditModalOptions,
): void {
  openLocalProjectEditModalRaw(scope, options);
}

export function updateWorkspaceRootLabel(
  options: UpdateWorkspaceRootLabelOptions,
): void {
  updateWorkspaceRootLabelRaw(options);
}

export function initProjectHoverCardCurrentRuntime(): void {
  initLocalProjectActionsRuntimeRaw();
  initProjectAvatarRuntimeRaw();
  initLocalProjectFallbackIconRuntimeRaw();
  initWorkspaceRootLabelRuntimeRaw();
  initThreadAttentionCountsRuntimeRaw();
}
