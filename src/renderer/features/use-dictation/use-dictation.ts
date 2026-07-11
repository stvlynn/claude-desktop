// Restored from ref/webview/assets/use-dictation-DQROZBbT.js
// @ts-nocheck
// use-dictation-DQROZBbT chunk restored from the Codex webview bundle.
import { useGateValue } from "../../shared/vendor/statsig-current-runtime";
import { dictationStreamingUploadHeaderValue } from "../../shared/lib/transcribe-audio";
import type { UseDictationOptions, UseDictationResult } from "./types";
import { useDictationCore } from "./use-dictation-core";

function useDictation(options: UseDictationOptions): UseDictationResult {
  const streamingEnabled = useGateValue(dictationStreamingUploadHeaderValue);
  return useDictationCore({
    ...options,
    cleanupEnabled: false,
    streamingEnabled,
  });
}

export { useDictation, useDictationCore };

export const initUseDictationUiRuntimeChunk = undefined as never;
export const initUseDictationRuntimeChunk = undefined as never;
