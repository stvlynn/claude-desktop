// Restored from ref/webview/assets/app-initial~app-main~automations-page-bHJfYUGr.js
export {
  AppFallback,
  initAppFallbackChunk,
} from "../../app-shell/app-fallback";
export {
  initAutomationHistoryItemsChunk,
  initAutomationHistoryItemsChunk as initAutomationsPageProducer,
  useAutomationItems,
} from "../../utils/use-automation-history-items";
export {
  initWindowVisibilitySignal,
  windowVisibleSignal,
} from "../../runtime/window-focus-state";
export { appgenPublicationTermsSidePanelHandler } from "../../appgen/publication-terms/side-panel-handler";
export { windowsTabsOpenHandler } from "../../app-shell/windows-tabs-open-handler";
export {
  AutomationTooltipSurface,
  ComposerDismissableLayer,
  initAutomationSurface,
} from "../../automation/automation-surface";
export {
  CodexApp,
  initAutomationsRuntimeChunk,
  initAutomationsStateChunk,
  initCodexAppChunk,
} from "../../vendor/automations-page-runtime";
export {
  LocalConversationDiffSummaryView,
  initLocalConversationDiffSummaryEffectsChunk,
} from "../../conversations/local-conversation-page-parts/local-conversation-diff-summary-effects";
