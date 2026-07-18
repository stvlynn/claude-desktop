// Restored from ref/webview/assets/markdown-to-search-text-D4gbAqkt.js
// Barrel for the markdown-to-search-text compatibility layer.

import {
  markdownNodeToText,
  parseMarkdownToSearchText,
} from "./markdown-renderer";

export * from "./markdown-to-search-text-types";
export {
  arrayMap,
  isObject,
  isObjectLike,
  isSymbol,
  toNumber,
  toStringValue,
} from "./markdown-to-search-text-values";
export {
  baseIteratee,
  baseFindIndex,
  findLastIndex,
  identity,
} from "./markdown-to-search-text-iteratee";
export {
  baseGet,
  castPath,
  hasIn,
  isKey,
  toKey,
} from "./markdown-to-search-text-path";

type MarkdownNode = {
  children?: MarkdownNode[];
  type: string;
};

const SPACING_CONTAINER_TYPES = new Set([
  "root",
  "blockquote",
  "list",
  "listItem",
]);

export function markdownToSearchText(markdown: string): string {
  const trimmedMarkdown = markdown.trim();
  return trimmedMarkdown.length === 0
    ? ""
    : markdownNodeToSearchText(parseMarkdownToSearchText(trimmedMarkdown))
        .replace(/\s+/g, " ")
        .trim();
}

function markdownNodeToSearchText(node: MarkdownNode): string {
  return SPACING_CONTAINER_TYPES.has(node.type ?? "")
    ? (node.children ?? []).map(markdownNodeToSearchText).join(" ")
    : markdownNodeToText(node);
}
