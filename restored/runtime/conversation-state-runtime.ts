// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
// Conversation state selectors shared by local thread modules.
import {
  Ep as conversationUnreadSignal,
  Kp as conversationReadStateSignal,
  Np as conversationHistoryCompleteSignal,
  Op as initConversationStateSelectors,
  Tp as hasConversationSignal,
  Xp as latestConversationTurnSignal,
  wp as storedThreadBranchSignal,
} from "../boundaries/current-ref/appg-thread-shared-producer";

export {
  conversationHistoryCompleteSignal,
  conversationReadStateSignal,
  conversationUnreadSignal,
  hasConversationSignal,
  latestConversationTurnSignal,
  storedThreadBranchSignal,
};

export function initConversationStateRuntime(): void {
  initConversationStateSelectors();
}
