// Restored from ref/webview/assets/app-initial~app-main~local-conversation-page-D-F_r9ay.js
// Semantic alias layer for the local-conversation command-menu runtime.
export {
  FIRST_CHAT_COMMAND_MENU_ITEM_VALUE,
  FIRST_FILE_COMMAND_MENU_ITEM_VALUE,
  initThreadCommandMenuStateChunk,
  threadCommandMenuModeSignal,
} from "../../features/threads/thread-command-menu-state";
export {
  CommandMenuItem,
  initCommandMenuItemComponent,
} from "../../shared/ui/command-menu-item";
export {
  initThreadCommandMenuEntryRegistryChunk,
  threadCommandMenuEntriesSignal,
  useRegisterThreadCommandMenuEntry,
} from "../../shared/lib/thread-command-menu-entries";
export {
  highlightTextSegments,
  initHighlightTextSegmentsChunk,
} from "../../shared/ui/slash-command-item/index";
export {
  ThreadFileSearchCommandMenuRegistration,
  initThreadFileSearchCommandChunk,
} from "../../features/threads/thread-file-search-command";
