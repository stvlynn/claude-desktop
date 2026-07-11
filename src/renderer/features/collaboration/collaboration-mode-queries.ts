// @ts-nocheck
// Restored from ref/webview/assets/collaboration-mode-queries-CTBlLhk8.js
// collaboration-mode-queries-CTBlLhk8 chunk restored from the Codex webview bundle.
import {
  _appScopeM as createQuerySignal,
  _appScopeP as createQuerySignalFamily,
  appScopeRoot,
} from "../../shared/runtime/app-scope";
import { selectedHostIdSignal } from "../../shared/runtime/thread-context-inputs.facade";
import { sendAppServerRequest } from "../../shared/runtime/use-host-config.facade";
import { vscodeApiU as queryDurations } from "../../shared/runtime/vscode-api";
const COLLABORATION_MODE_ORDER = ["plan", "default"];
function normalizeCollaborationMode(mode: any) {
  const modeName = mode.mode;
  return modeName == null || modeName === "plan" || modeName === "default"
    ? mode
    : {
        ...mode,
        mode: "default",
      };
}
function sortSupportedCollaborationModes(modes: any[], order: string[]) {
  const modesByName: Record<string, any> = {};
  for (const mode of modes) {
    const normalizedMode = normalizeCollaborationMode(mode);
    if (normalizedMode.mode != null && !modesByName[normalizedMode.mode]) {
      modesByName[normalizedMode.mode] = normalizedMode;
    }
  }
  const sortedModes = [];
  for (const modeName of order) {
    const mode = modesByName[modeName];
    if (mode) sortedModes.push(mode);
  }
  return sortedModes;
}
export function collaborationModesQueryOptions(hostId: string) {
  return {
    queryKey: ["collaboration-modes", "list", hostId],
    staleTime: queryDurations.INFINITE,
    queryFn: async () =>
      sortSupportedCollaborationModes(
        (
          (await sendAppServerRequest("list-collaboration-modes", {
            hostId,
          })) as { data: any[] }
        ).data,
        COLLABORATION_MODE_ORDER,
      ),
  };
}
export const collaborationModesQuerySignalFamily = createQuerySignalFamily(
  appScopeRoot,
  (hostId?: string) => collaborationModesQueryOptions(hostId ?? ""),
);
export const selectedHostCollaborationModesQuerySignal = createQuerySignal(
  appScopeRoot,
  (({ get }: any) =>
    collaborationModesQueryOptions(get(selectedHostIdSignal) as string)) as any,
);

export function initCollaborationModeQueriesChunk(): void {
  void collaborationModesQuerySignalFamily;
  void selectedHostCollaborationModesQuerySignal;
}
