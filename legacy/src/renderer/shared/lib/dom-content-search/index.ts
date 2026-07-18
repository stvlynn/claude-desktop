// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Barrel for DOM content-search primitives used by thread find and review search.

export { activeContentSearchMatchClassName } from "./constants";
export type {
  ContentSearchOptions,
  ContentSearchResult,
  ContentSearchRootOptions,
} from "./types";
export {
  findContentSearchMatchElement,
  joinContentSearchKey,
  setContentSearchMatchId,
} from "./match-id";
export {
  clearContentSearchHighlights,
  searchContentForMatches,
} from "./highlight";
export { shouldRefreshSearchHighlightMutations } from "./mutation-refresh";
