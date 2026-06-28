// Restored from ref/webview/assets/local-remote-control-enabled-sync-DueNKRXX.js
// local-remote-control-enabled-sync-DueNKRXX chunk restored from the Codex webview bundle.
import {
  LOCAL_HOST_ID,
  sendAppServerRequest,
} from "../boundaries/use-host-config.facade";
import {
  applyRemoteControlHostStatus,
  remoteControlConnectionStatusSignal,
} from "../boundaries/thread-context-inputs.facade";
type RemoteControlStatusOptions = {
  shouldApplyStatus?: () => boolean;
};
type LocalRemoteControlOptions = {
  force?: boolean;
};
export async function setRemoteControlEnabledForHost(
  scope: any,
  hostId: string,
  enabled: boolean,
  { shouldApplyStatus = () => true }: RemoteControlStatusOptions = {},
) {
  const previousStatus = scope.get(remoteControlConnectionStatusSignal, hostId);
  const status = await sendAppServerRequest(
    "set-remote-control-enabled-for-host",
    {
      enabled,
      hostId,
    },
  );
  const nextStatus = scope.get(remoteControlConnectionStatusSignal, hostId);
  const statusChanged =
    nextStatus !== previousStatus &&
    (nextStatus?.status === "connected" || nextStatus?.status === "errored");
  if (shouldApplyStatus() && (!enabled || !statusChanged)) {
    applyRemoteControlHostStatus(scope, hostId, status);
  }
  return status;
}
let lastAppliedEnabled: boolean | undefined;
let pendingEnabled: boolean | undefined;
let requestSequence = 0;
let inFlightRequest:
  | {
      enabled: boolean;
      promise: Promise<unknown>;
    }
  | undefined;
export async function setLocalRemoteControlEnabled(
  scope: any,
  enabled: boolean,
  { force = false }: LocalRemoteControlOptions = {},
) {
  pendingEnabled = enabled;
  if (inFlightRequest?.enabled === enabled) return inFlightRequest.promise;
  if (!force && lastAppliedEnabled === enabled) return null;
  const requestId = ++requestSequence;
  const promise = setRemoteControlEnabledForHost(
    scope,
    LOCAL_HOST_ID,
    enabled,
    {
      shouldApplyStatus: () => requestId === requestSequence,
    },
  );
  inFlightRequest = {
    enabled,
    promise,
  };
  try {
    const status = await promise;
    if (requestId === requestSequence) {
      lastAppliedEnabled = enabled;
    } else if (pendingEnabled != null && pendingEnabled !== enabled) {
      await setLocalRemoteControlEnabled(scope, pendingEnabled, {
        force: true,
      });
    }
    return status;
  } catch (error) {
    if (requestId === requestSequence && lastAppliedEnabled === enabled) {
      lastAppliedEnabled = undefined;
    }
    throw error;
  } finally {
    if (inFlightRequest?.promise === promise) inFlightRequest = undefined;
  }
}
