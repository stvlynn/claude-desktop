// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js
// Current-ref boundary for project hover card internals still owned by the
// worktree/new-thread query shared chunk.
import type { ComponentPropsWithoutRef, ComponentType, ReactNode } from "react";
import {
  Lr as initLocalProjectActionsRuntimeRaw,
  ta as initProjectAvatarRuntimeRaw,
  Vr as openLocalProjectEditModalRaw,
  ea as ProjectAvatarRaw,
  da as updateWorkspaceRootLabelRaw,
  fa as LocalProjectFallbackIconRaw,
  ua as initWorkspaceRootLabelRuntimeRaw,
  pa as initLocalProjectFallbackIconRuntimeRaw,
  wi as threadAttentionCountsSignalRaw,
  Si as initThreadAttentionCountsRuntimeRaw,
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

export function initLocalProjectActionsRuntime(): void {
  initLocalProjectActionsRuntimeRaw();
}

export function initProjectAvatarRuntime(): void {
  initProjectAvatarRuntimeRaw();
}

export function initLocalProjectFallbackIconRuntime(): void {
  initLocalProjectFallbackIconRuntimeRaw();
}

export function initWorkspaceRootLabelRuntime(): void {
  initWorkspaceRootLabelRuntimeRaw();
}

export function initThreadAttentionCountsRuntime(): void {
  initThreadAttentionCountsRuntimeRaw();
}

export function initProjectHoverCardCurrentRefRuntime(): void {
  initLocalProjectActionsRuntime();
  initProjectAvatarRuntime();
  initLocalProjectFallbackIconRuntime();
  initWorkspaceRootLabelRuntime();
  initThreadAttentionCountsRuntime();
}
