// Restored from ref/webview/assets/app-initial~app-main~automations-page-bHJfYUGr.js
// Local conversation review/diff side effects used by local-conversation-page.
import React from "react";

import { once } from "../../runtime/commonjs-interop";
import {
  A_ as appShellTabIds,
  AB as initScopeRuntime,
  dV as createDerivedSignal,
  FB as useScope,
  IB as useSignalValue,
  I_ as initRouteScope,
  JV as initReactRuntime,
  M_ as localConversationRouteScope,
  ok as sendAppServerRequest,
  pz as toConversationId,
  Rp as appServerNotificationSignal,
  ak as initAppServerRequestBridge,
} from "../../boundaries/current-ref/appg-thread-shared-producer";
import {
  fl as reviewSourceSignal,
  hl as resetReviewSource,
  ml as shouldRestoreReviewStateSignal,
  pd as setRightPanelFullWidth,
  pl as reviewSourceWorkspaceRootSignal,
  rd as rightPanelVisibleSignal,
  ul as setReviewSourceFromLastTurn,
  Vn as initProjectsAppSharedRuntime,
  Yl as rightPanelController,
  zc as reviewPaneSnapshotMetricsSignal,
  zl as activeHostIdSignal,
} from "../../boundaries/current-ref/projects-app-shared-producer";
import {
  $c as syncReviewPanelForRestoredSource,
  Js as scheduleReviewRestore,
  nr as initPullRequestThreadActionsChunk,
  Oc as focusPendingReviewPanelTarget,
  Pc as pendingReviewPanelTargetSignal,
  Qc as openInitialReviewPanelTarget,
  Tc as shouldExpandReviewPanelSignal,
  Xc as resetReviewPanelEmptyState,
  Zc as revealChangedFilesInReviewPanel,
} from "../../boundaries/current-ref/pull-request-thread-actions-producer";

type ScopeAccessor = {
  get<TValue>(signal: unknown, key?: unknown): TValue;
};

type RouteScope = ScopeAccessor & {
  set<TValue>(
    signal: unknown,
    value: TValue | ((previous: TValue) => TValue),
    key?: unknown,
  ): void;
  value: {
    conversationId?: string;
    routeKind?: string;
  };
  watch(effect: (snapshot: ScopeAccessor) => void): () => void;
};

type ReviewPaneMetrics = {
  bytesEstimate?: number;
  fileCount?: number;
  lineCount?: number;
};

type FileChangeItem = {
  changes?: Array<{
    kind?: {
      move_path?: string | null;
      type?: string;
    };
    path?: string;
  }>;
  status?: string;
  type?: string;
};

type AppServerNotification = {
  params?: {
    item?: FileChangeItem;
    threadId?: string;
  };
};

type AppServerNotificationEnvelope = {
  hostId?: string;
  notification: AppServerNotification;
};

const activeReviewTabSignal = createDerivedSignal(
  localConversationRouteScope,
  ({ get }: ScopeAccessor) =>
    Boolean(get<boolean>(rightPanelVisibleSignal)) &&
    get<{ tabId?: string } | null | undefined>(rightPanelController.activeTab$)
      ?.tabId === appShellTabIds.DIFF,
);

const reviewSourceRestoredSignal = createDerivedSignal(
  localConversationRouteScope,
  ({ get }: ScopeAccessor) =>
    Boolean(get<boolean>(activeReviewTabSignal)) &&
    Boolean(get<unknown>(reviewSourceWorkspaceRootSignal)),
);

export type LocalConversationDiffSummaryViewProps = {
  lastTurnCwd: string | null | undefined;
  lastTurnDiff: unknown;
};

export function LocalConversationDiffSummaryView({
  lastTurnCwd,
  lastTurnDiff,
}: LocalConversationDiffSummaryViewProps): null {
  const scope = useScope(localConversationRouteScope) as RouteScope;
  const hostId = useSignalValue(activeHostIdSignal) as string;
  const metrics = useSignalValue(
    reviewPaneSnapshotMetricsSignal,
  ) as ReviewPaneMetrics;
  const reviewSource = useSignalValue(reviewSourceSignal);
  const sourceRestored = useSignalValue(reviewSourceRestoredSignal) as boolean;
  const shouldRestoreReviewState = useSignalValue(
    shouldRestoreReviewStateSignal,
  ) as boolean;
  const pendingReviewTarget = useSignalValue(
    pendingReviewPanelTargetSignal,
  ) as boolean;

  React.useEffect(() => {
    resetReviewSource(scope);
  }, [scope, reviewSource, shouldRestoreReviewState]);

  React.useEffect(() => {
    setReviewSourceFromLastTurn(scope, lastTurnDiff, lastTurnCwd);
  }, [lastTurnCwd, lastTurnDiff, scope]);

  React.useEffect(() => {
    if (pendingReviewTarget) {
      focusPendingReviewPanelTarget(scope);
    }
  }, [pendingReviewTarget, scope]);

  React.useEffect(() => {
    if (sourceRestored) {
      syncReviewPanelForRestoredSource(scope);
    }
  }, [scope, sourceRestored]);

  React.useEffect(() => {
    sendAppServerRequest("set-review-pane-snapshot-metrics-for-host", {
      hostId,
      reviewDiffFilesTotal: metrics.fileCount,
      reviewDiffLinesTotal: metrics.lineCount,
      reviewDiffBytesEstimate: metrics.bytesEstimate,
    });
  }, [hostId, metrics]);

  React.useEffect(
    () => () => {
      sendAppServerRequest("set-review-pane-snapshot-metrics-for-host", {
        hostId,
        reviewDiffFilesTotal: 0,
        reviewDiffLinesTotal: 0,
        reviewDiffBytesEstimate: 0,
      });
    },
    [hostId],
  );

  React.useEffect(() => {
    if (!shouldRestoreReviewState) return;
    return scheduleReviewRestore(() => {
      resetReviewPanelEmptyState(scope);
      openInitialReviewPanelTarget(scope);
    });
  }, [scope, shouldRestoreReviewState]);

  React.useEffect(() => {
    let hasExpandedForCurrentAvailability = false;
    return scope.watch(({ get }) => {
      if (!get<boolean>(shouldExpandReviewPanelSignal)) {
        hasExpandedForCurrentAvailability = false;
        return;
      }
      if (!hasExpandedForCurrentAvailability) {
        hasExpandedForCurrentAvailability = true;
        setRightPanelFullWidth(scope, true, { animate: false });
      }
    });
  }, [scope]);

  const handleNotification = React.useEffectEvent(
    (envelope: AppServerNotificationEnvelope) => {
      if (
        envelope.hostId !== hostId ||
        !sourceRestored ||
        scope.value.routeKind !== "local-thread"
      ) {
        return;
      }

      const changedPaths = getCompletedFileChangePaths(
        scope.value.conversationId,
        envelope.notification,
      );
      if (changedPaths.length > 0) {
        revealChangedFilesInReviewPanel(scope, changedPaths);
      }
    },
  );

  React.useEffect(() => {
    let isInitialSnapshot = true;
    return scope.watch(({ get }) => {
      const notification = get<AppServerNotificationEnvelope | null>(
        appServerNotificationSignal,
      );
      if (isInitialSnapshot) {
        isInitialSnapshot = false;
        return;
      }
      if (notification != null) {
        handleNotification(notification);
      }
    });
  }, [handleNotification, scope]);

  return null;
}

function getCompletedFileChangePaths(
  conversationId: string | undefined,
  notification: AppServerNotification,
): string[] {
  if (toConversationId(notification.params?.threadId) !== conversationId) {
    return [];
  }

  const item = notification.params?.item;
  if (item?.type !== "fileChange" || item.status !== "completed") {
    return [];
  }

  return [
    ...new Set(
      (item.changes ?? []).flatMap((change) => {
        switch (change.kind?.type) {
          case "add":
          case "delete":
            return change.path == null ? [] : [change.path];
          case "update":
            if (change.path == null) return [];
            return change.kind.move_path == null
              ? [change.path]
              : [change.path, change.kind.move_path];
          default:
            return [];
        }
      }),
    ),
  ];
}

export const initLocalConversationDiffSummaryEffectsChunk = once(() => {
  initReactRuntime();
  initScopeRuntime();
  initRouteScope();
  initAppServerRequestBridge();
  initProjectsAppSharedRuntime();
  initPullRequestThreadActionsChunk();
});
