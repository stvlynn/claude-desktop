// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation title formatting and id normalization helpers used by the local summary panel.
import {
  iO as formatConversationTitleTextRaw,
  rO as initConversationTitleFormatterRaw,
} from "../../vendor/appg-thread-shared-runtime";
import { normalizeConversationId } from "../../boundaries/src-l0hb-mz-p";

export function initConversationTitleRuntime(): void {
  initConversationTitleFormatterRaw();
}

export function formatConversationTitleText(title: string): string {
  return formatConversationTitleTextRaw(title);
}

export function toConversationId(value: string): string {
  return normalizeConversationId(value);
}
