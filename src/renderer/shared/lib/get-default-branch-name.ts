// @ts-nocheck
// Restored from ref/webview/assets/get-default-branch-name-3z9A9Y_n.js
// Derives a default git branch name from a conversation title and prefix.

type DefaultBranchNameOptions = {
  branchPrefix?: string | null;
  conversationTitle?: string | null;
};

export function getDefaultBranchName({
  branchPrefix,
  conversationTitle,
}: DefaultBranchNameOptions): string {
  const prefix = branchPrefix?.trim() ?? "";
  const titleSlug = slugifyConversationTitle(conversationTitle);
  return titleSlug.length === 0 ? prefix : `${prefix}${titleSlug}`;
}

function slugifyConversationTitle(title: string | null | undefined): string {
  return title
    ? title
        .trim()
        .toLowerCase()
        .split(/\s+/)
        .slice(0, 5)
        .map((word) => word.replace(/[^a-z0-9]/g, ""))
        .filter((word) => word.length > 0)
        .join("-")
    : "";
}
