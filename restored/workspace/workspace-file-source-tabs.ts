// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Workspace-file tab identity helpers plus the atom + sync routine that keep the
// host's "open review file source tabs" list in step with the open editor tabs.
import {
  appStoreScope,
  createWritableSignalAtom,
  dispatchHostRequest,
  collectWorkspaceFileTabDescriptors,
  activeConversationCwdAtom,
  normalizePath,
} from "../boundaries/onboarding-commons-externals.facade";

export const workspaceFileTabKindPrefix = "workspaceFile:";

export interface WorkspaceFileTabTarget {
  hostId: string;
  path: string;
}

export interface WorkspaceFileTabDescriptor {
  kind?: string;
  props: Record<string, unknown>;
}

export interface OpenWorkspaceFile {
  hostId: string;
  path: string;
  refreshMode: "auto" | "manual";
}

export function isManualRefreshArtifactType(artifactType: unknown): boolean {
  return (
    artifactType === "document" ||
    artifactType === "slides" ||
    artifactType === "spreadsheet" ||
    artifactType === "pdf"
  );
}

export function parseWorkspaceFileTab(
  descriptor: WorkspaceFileTabDescriptor,
): OpenWorkspaceFile | null {
  if (!descriptor.kind?.startsWith("workspaceFile:")) return null;
  const { props } = descriptor;
  if (
    !("hostId" in props) ||
    typeof props.hostId !== "string" ||
    !("path" in props) ||
    typeof props.path !== "string"
  ) {
    return null;
  }
  const manual =
    "artifactType" in props && isManualRefreshArtifactType(props.artifactType);
  return {
    hostId: props.hostId,
    path: props.path,
    refreshMode: manual ? "manual" : "auto",
  };
}

export function collectOpenWorkspaceFiles(
  descriptors: WorkspaceFileTabDescriptor[],
): OpenWorkspaceFile[] {
  return descriptors.flatMap((descriptor) => {
    const parsed = parseWorkspaceFileTab(descriptor);
    return parsed == null ? [] : [parsed];
  });
}

export function workspaceFileKey({ hostId, path }: WorkspaceFileTabTarget) {
  return `${hostId}\0${path}`;
}

export const openReviewFileSourceTabsAtom = createWritableSignalAtom(
  appStoreScope,
  () => false,
);

export function initWorkspaceFileSourceTabsChunk(): void {}

interface RouteScope {
  value: {
    routeKind:
      | "home"
      | "new-thread-panel"
      | "client-local-thread"
      | "local-thread"
      | "remote-thread"
      | "chatgpt-thread"
      | "other";
    conversationId?: string;
  };
  get(signal: unknown): unknown;
}

export function resolveActiveRouteCwd(scope: RouteScope): string | null {
  switch (scope.value.routeKind) {
    case "home":
    case "new-thread-panel":
    case "client-local-thread":
    case "local-thread":
    case "remote-thread": {
      const cwd = scope.get(activeConversationCwdAtom);
      return cwd == null ? null : normalizePath(cwd as string);
    }
    case "chatgpt-thread":
    case "other":
      return null;
  }
}

export function syncOpenReviewFileSourceTabs(
  scope: RouteScope,
  options: { excludeTab?: { panelId: unknown; tabId: string } } = {},
) {
  if (scope.value.routeKind === "local-thread") {
    dispatchHostRequest("set-open-review-file-source-tabs", {
      conversationId: scope.value.conversationId,
      openFiles: collectOpenWorkspaceFiles(
        collectWorkspaceFileTabDescriptors(scope, options),
      ),
    });
  }
}
