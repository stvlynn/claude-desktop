// Restored from ref/webview/assets/app-server-manager-hooks-D4-J16ZL.js
// @ts-nocheck
// app-server-manager-hooks-D4-J16ZL chunk restored from the Codex webview bundle.
import React from "react";
import { LOCAL_HOST_ID } from "../../../shared/runtime/use-host-config.facade";
import { HostId, useRequiredAppServerManagerForHost } from "./registry";
export function useConfigNotices(hostId?: HostId): unknown {
  const manager = useRequiredAppServerManagerForHost(hostId ?? LOCAL_HOST_ID);
  return React.useSyncExternalStore(
    (onStoreChange) => manager.addConfigNoticeCallback(onStoreChange),
    () => manager.getConfigNotices(),
  );
}
