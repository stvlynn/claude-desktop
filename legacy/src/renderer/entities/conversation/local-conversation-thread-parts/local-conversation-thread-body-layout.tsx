// Restored from ref/webview/assets/local-conversation-thread-BwqAGxoz.js
// Scroll layout and background-agent context wrapper for local conversation bodies.
import React, { type ReactNode } from "react";
import { once } from "../../../shared/runtime/commonjs-interop";
import {
  BackgroundAgentOpenContext,
  initBackgroundAgentOpenContextChunk,
} from "./local-conversation-background-agent-open-context";
import type { BackgroundAgentOpenHandler } from "../../conversation-thread/local-conversation-thread-frame-types";
import {
  initThreadScrollLayoutChunk,
  ThreadScrollLayout,
} from "../../../shared/lib/thread-scroll-layout";
import type {
  MotionX,
  ScrollTopLoadResult,
  ThreadScrollLayoutHandle,
} from "../../thread-scroll-layout/types";

export type LocalConversationThreadBodyLayoutProps = {
  contentX?: MotionX;
  floatingContent?: ReactNode;
  footer: ReactNode;
  hasLiveMcpAppFrame: boolean;
  initialScrollOffset: number | null;
  loadOlderConversationHistory: () =>
    ScrollTopLoadResult | Promise<ScrollTopLoadResult>;
  onOpenBackgroundAgentFromSummary: BackgroundAgentOpenHandler;
  onThreadScroll: (distanceFromBottomPx: number, isAtBottom: boolean) => void;
  remoteHostedPipAnchorHostId?: string;
  threadContent: ReactNode;
  threadScrollLayoutApiRef: React.Ref<ThreadScrollLayoutHandle>;
};

export function LocalConversationThreadBodyLayout({
  contentX,
  floatingContent,
  footer,
  hasLiveMcpAppFrame,
  initialScrollOffset,
  loadOlderConversationHistory,
  onOpenBackgroundAgentFromSummary,
  onThreadScroll,
  remoteHostedPipAnchorHostId,
  threadContent,
  threadScrollLayoutApiRef,
}: LocalConversationThreadBodyLayoutProps) {
  let threadScrollLayout = (
    <ThreadScrollLayout
      ref={threadScrollLayoutApiRef}
      hasLiveMcpAppFrame={hasLiveMcpAppFrame}
      remoteHostedPIPAnchorHostId={remoteHostedPipAnchorHostId}
      contentX={contentX}
      footer={footer}
      initialOffset={initialScrollOffset ?? undefined}
      onScroll={onThreadScroll}
      onUserScrollToTop={loadOlderConversationHistory}
    >
      {threadContent}
    </ThreadScrollLayout>
  );

  return (
    <BackgroundAgentOpenContext.Provider
      value={onOpenBackgroundAgentFromSummary}
    >
      {threadScrollLayout}
      {floatingContent}
    </BackgroundAgentOpenContext.Provider>
  );
}

export const initLocalConversationThreadBodyLayoutChunk = once(() => {
  initBackgroundAgentOpenContextChunk();
  initThreadScrollLayoutChunk();
});
