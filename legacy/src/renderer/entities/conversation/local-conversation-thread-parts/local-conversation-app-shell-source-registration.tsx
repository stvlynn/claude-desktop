// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// App-shell source registration for the visible local conversation content.
import { once } from "../../../shared/runtime/commonjs-interop";
import {
  getLocalThreadConversationIdFromRoute,
  type LocalThreadRouteValue,
} from "../../../shared/lib/local-thread-route";
import {
  initThreadAppShellSourcesChunk,
  ThreadAppShellSourceRegistration,
} from "../../../features/app-shell/thread-background-processes/index";

type ConversationSource = {
  contextId: string;
};

export type LocalConversationAppShellSourceRegistrationProps = {
  conversationId: string;
  conversationSource: ConversationSource;
  diffSource: unknown;
  routeScopeValue: LocalThreadRouteValue;
};

export function LocalConversationAppShellSourceRegistration({
  conversationId,
  conversationSource,
  diffSource,
  routeScopeValue,
}: LocalConversationAppShellSourceRegistrationProps) {
  return (
    <ThreadAppShellSourceRegistration
      conversationSource={conversationSource}
      diffSource={diffSource}
      orchestrationId={conversationSource.contextId}
      isDefault={
        getLocalThreadConversationIdFromRoute(routeScopeValue) ===
        conversationId
      }
    />
  );
}

export const initLocalConversationAppShellSourceRegistrationChunk = once(() => {
  initThreadAppShellSourcesChunk();
});
