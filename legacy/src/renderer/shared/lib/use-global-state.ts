// Restored from ref/webview/assets/use-global-state-C0LjG8WG.js
// use-global-state-C0LjG8WG chunk restored from the Codex webview bundle.
import { _appScopeA as useScopedSignalValue } from "../runtime/app-scope";
import { globalStateSignal } from "../runtime/thread-context-inputs";
export function useGlobalState<TValue = unknown>(scope?: unknown): TValue {
  return useScopedSignalValue(globalStateSignal, scope);
}
