// Restored from ref/.vite/build/src-CoIhwwHr.js
// Codex deep-link parser for thread/conversation URLs.

export function parseCodexThreadDeepLink(
  input: URL | string,
  { allowExtraPathSegments = false }: { allowExtraPathSegments?: boolean } = {},
): {
  conversationId: string;
  openReview?: boolean;
  reviewDiffFilter?: "branch" | "last-turn";
  reviewPath?: string;
} | null {
  let url: URL;
  try {
    url = typeof input === "string" ? new URL(input) : input;
  } catch {
    return null;
  }
  const [conversationId, ...extraPathSegments] = url.pathname
    .split("/")
    .filter(Boolean);
  if (
    url.protocol !== "codex:" ||
    url.host !== "threads" ||
    !conversationId ||
    (!allowExtraPathSegments && extraPathSegments.length > 0)
  ) {
    return null;
  }
  if (url.searchParams.get("view") !== "review") return { conversationId };
  const diffFilter = url.searchParams.get("diffFilter");
  if (diffFilter == null) {
    return { conversationId, openReview: true };
  }
  if (diffFilter !== "branch" && diffFilter !== "last-turn") return null;
  return {
    conversationId,
    openReview: true,
    reviewDiffFilter: diffFilter,
    reviewPath: url.searchParams.get("path") ?? undefined,
  };
}
