// Stubs for thread-actions local types.
// @ts-nocheck
// These are placeholders to allow the restored cluster to compile while
// real shapes are reverse-engineered from the ref chunk.

export type AppScopeLike = {
  get?: (signal: unknown) => unknown;
  set?: (signal: unknown, value: unknown) => void;
};

export type ArchiveThreadOptions = {
  conversationId?: string | null;
  hostId?: string | null;
  source?: string | null;
  onArchiveStart?: () => void;
  onArchiveSuccess?: () => void;
  onArchiveError?: (error: unknown) => void;
};

export type CopyConversationMarkdownOptions = {
  conversationId?: string | null;
  hostId?: string | null;
};

export type IntlLike = {
  formatMessage: (descriptor: unknown, values?: Record<string, unknown>) => string;
};

export type InterruptThreadOptions = {
  conversationId?: string | null;
  hostId?: string | null;
};

export type MarkThreadUnreadOptions = {
  conversationId?: string | null;
  hostId?: string | null;
};

export type RenameThreadOptions = {
  conversationId?: string | null;
  hostId?: string | null;
  newTitle?: string | null;
};

export type ThreadActions = {
  archiveThread: (options: ArchiveThreadOptions) => Promise<unknown>;
  copyConversationMarkdown: (options: CopyConversationMarkdownOptions) => Promise<unknown>;
  copySessionId: (options: { conversationId?: string | null; hostId?: string | null }) => Promise<unknown>;
  copyAppLink: (options: { conversationId?: string | null; hostId?: string | null }) => Promise<unknown>;
  interruptThread: (options: InterruptThreadOptions) => Promise<unknown>;
  markThreadUnread: (options: MarkThreadUnreadOptions) => Promise<unknown>;
  renameThread: (options: RenameThreadOptions) => Promise<unknown>;
};

export type PendingVisibleThreadOrder = unknown;

export type ThreadMoveTarget = {
  id?: string | null;
  index?: number | null;
};

export type ThreadTaskLike = {
  id?: string | null;
  pinned?: boolean | null;
};

export type UsePinnedThreadStateOptions = {
  canPin?: boolean;
};
