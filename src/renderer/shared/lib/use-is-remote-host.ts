// @ts-nocheck
// Restored from ref/webview/assets/use-is-remote-host-CdAgT54v.js
// UseIsRemoteHost chunk restored from the Codex webview bundle.
import { useAppScopeValue } from "../runtime/app-scope";
import { useHostConfigById } from "../runtime/use-host-config-runtime";
import { M as selectedHostIdSignal } from "../runtime/thread-context-inputs";

export function initUseIsRemoteHostChunk(): void {}

export function useIsRemoteHost() {
  const hostId = useAppScopeValue<string | null>(selectedHostIdSignal);
  return useHostConfigById(hostId)?.kind !== "local";
}
