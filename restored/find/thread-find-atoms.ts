// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// App-scope atoms backing the thread find bar across conversation, diff, and browser domains.
import { appScopeRoot, createAppScopeSignal } from "../boundaries/app-scope";

export type ThreadFindDomain = "conversation" | "diff" | "browser";

export type ThreadFindBrowserStatus = {
  activeMatchOrdinal: number;
  matches: number;
  query: string;
};

export type ThreadFindBrowserTarget = {
  browserTabId?: string | null;
  conversationId?: string | null;
} | null;

export type ThreadFindResult = {
  contextId: string;
  domain: ThreadFindDomain;
  isCapped: boolean;
  matches: unknown[];
  query: string;
  runId: number;
  totalMatches: number;
};

export const emptyFindBrowserStatus: ThreadFindBrowserStatus = {
  activeMatchOrdinal: 0,
  matches: 0,
  query: "",
};

export const findOpenAtom = createAppScopeSignal<boolean>(appScopeRoot, false);
export const findActiveDomainAtom = createAppScopeSignal<ThreadFindDomain>(
  appScopeRoot,
  "conversation",
);
export const findQueryAtom = createAppScopeSignal<string>(appScopeRoot, "");
export const findResultAtom = createAppScopeSignal<ThreadFindResult | null>(
  appScopeRoot,
  null,
);
export const findLoadingAtom = createAppScopeSignal<boolean>(
  appScopeRoot,
  false,
);
export const findActiveMatchIndexAtom = createAppScopeSignal<number | null>(
  appScopeRoot,
  null,
);
export const findBrowserTargetAtom =
  createAppScopeSignal<ThreadFindBrowserTarget>(appScopeRoot, null);
export const findBrowserStatusAtom =
  createAppScopeSignal<ThreadFindBrowserStatus>(
    appScopeRoot,
    emptyFindBrowserStatus,
  );
