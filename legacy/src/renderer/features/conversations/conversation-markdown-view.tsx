// Restored from ref/webview/assets/app-initial~app-main~onboarding-page-BUwCKIcU.js
// Stub for review/file-preview-runtime markdown preview.
import * as React from "react";

export type ConversationMarkdownComponents = Record<
  string,
  React.ComponentType<{ children?: React.ReactNode }>
>;

export type ConversationMarkdownProps = React.HTMLAttributes<HTMLDivElement> & {
  allowBasicHtml?: boolean;
  components?: ConversationMarkdownComponents;
  conversationId?: string | null;
  cwd?: string | null;
  hideCodeBlocks?: boolean;
  hostId?: string | null;
  isStreaming?: boolean;
  markdown?: string | null;
};

export function ConversationMarkdown(_props: ConversationMarkdownProps): React.ReactElement {
  return <div />;
}

export function parseCommentMarkdown(markdown: string): string {
  return markdown;
}

export function initConversationMarkdownViewChunk(): void {}
