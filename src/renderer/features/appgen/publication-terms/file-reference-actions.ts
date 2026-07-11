// Restored from ref/webview/assets/app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~oykv7gy7-B4ar2dlW.js
// @ts-nocheck
// Stub for review/file-preview-runtime file context menu actions.

export type OpenTarget = {
  appPath?: string;
  hidden?: boolean;
  icon?: unknown;
  id: string;
  kind?: string;
  label: string;
  target: string;
};

export type OpenInTargetsResult = {
  availableTargets?: string[];
  mode?: "editor" | "native" | string;
  preferredTarget?: string | null;
  targets?: OpenTarget[];
};

export type ContextMenuItem = {
  enabled?: boolean;
  icon?: unknown;
  id: string;
  message?: unknown;
  messageValues?: { target: string };
  onSelect?: () => void;
  submenu?: ContextMenuItem[];
  type?: "item" | "separator";
};

export type WorkspaceFileContextMenuScope = {
  get?: <TValue>(state: unknown, key?: unknown) => TValue;
  queryClient?: unknown;
};

export type WorkspaceFileContextMenuRequest = {
  scope: WorkspaceFileContextMenuScope;
  filePointer: unknown;
};

export function buildWorkspaceFileContextMenuItems(
  _scope: WorkspaceFileContextMenuScope,
  _filePointer: unknown,
): ContextMenuItem[] {
  return [];
}

export async function copyWorkspaceFileContents(_filePointer: unknown): Promise<void> {}

export async function fetchWorkspaceFileContextMenuItems(
  _request: WorkspaceFileContextMenuRequest,
): Promise<ContextMenuItem[]> {
  return [];
}

export const buildOpenTargetContextMenuItems = undefined as never;
export const copyToClipboardPayload = undefined as never;
export const createOpenInTargetsQueryOptions = undefined as never;
export const filterOpenTargets = undefined as never;
export const initClipboardWriterChunk = undefined as never;
export const initFileReferenceActionMessagesChunk = undefined as never;
export const initOpenFileCommandChunk = undefined as never;
export const initOpenInTargetHelpersChunk = undefined as never;
export const initOpenTargetContextMenuItemsChunk = undefined as never;
export const initWorkspaceFileContextMenuChunk = undefined as never;
export const isEditorOpenTarget = undefined as never;
export const prefetchOpenInTargets = undefined as never;
export const selectOpenInTargets = undefined as never;
export const selectPrimaryOpenTarget = undefined as never;
export const sendOpenFileCommand = undefined as never;
export const workspaceFileReferenceMessages = undefined as never;
