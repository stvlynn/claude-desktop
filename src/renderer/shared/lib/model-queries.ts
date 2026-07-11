// Restored from ref/webview/assets/app-initial~app-main~home-ambient-suggestions-content-C1TXIiPK.js
// @ts-nocheck
// Boundary stub for utils/model-queries to unblock home-ambient-suggestions promotion.

export type ModelInfo = {
  model: string;
  name?: string;
};

export function useModelListQuery(): { data?: { models?: ModelInfo[] }; isLoading: boolean } {
  return { data: { models: [] }, isLoading: false };
}
// Added to satisfy relative import checks.
export const useModelFilterConfig = undefined as never;
export const initModelListQueryChunk = undefined as never;

export const initModelFilterConfigChunk = undefined as never;
export const modelFilterConfigSignal = undefined as never;
export const parseModelFilterConfig = undefined as never;
export const isModelListQueryReady = undefined as never;
export const modelFilterReasoningEfforts = undefined as never;
