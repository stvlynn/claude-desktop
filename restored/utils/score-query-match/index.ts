// Restored from ref/webview/assets/score-query-match-DS2pZf_b.js
// score-query-match-DS2pZf_b chunk restored from the Codex webview bundle.
import { CompositeMatcher, WildcardPatternMatcher } from "./matcher";

const PATH_SEPARATORS = ["/", "\\"];

export function scoreQueryMatch(candidate: string, query: string): number {
  let trimmedQuery = query.trim();
  if (trimmedQuery.length === 0) return 0;
  let matcher = createMatcher(trimmedQuery),
    normalizedCandidate = containsPathSeparator(trimmedQuery)
      ? normalizePathSeparators(candidate)
      : candidate,
    rawScore = matcher.matchingDegree(normalizedCandidate);
  if (rawScore === -2147483648) return 0;
  let scoreDelta = rawScore * 10 - candidate.length;
  return scoreDelta <= 0 ? 1 : scoreDelta;
}
function createMatcher(query) {
  let hasPathSeparator = containsPathSeparator(query),
    wildcardPattern = hasPathSeparator
      ? buildPathWildcardPattern(query)
      : `*${query}`,
    basename = basenameAfterLastSeparator(query);
  return new CompositeMatcher(
    new WildcardPatternMatcher(
      wildcardPattern,
      "IGNORE_CASE",
      PATH_SEPARATORS.join(""),
    ),
    hasPathSeparator && query !== basename
      ? new WildcardPatternMatcher(
          basename,
          "IGNORE_CASE",
          PATH_SEPARATORS.join(""),
        )
      : null,
  );
}
function buildPathWildcardPattern(query) {
  let pattern = `*${query}`;
  for (let separator of PATH_SEPARATORS)
    pattern = pattern.split(separator).join(`*${"\0"}*`);
  return pattern;
}
function basenameAfterLastSeparator(query) {
  let lastSeparatorIndex = -1;
  for (let separator of PATH_SEPARATORS) {
    let separatorIndex = query.lastIndexOf(separator);
    separatorIndex >= 0 &&
      separatorIndex < query.length - 1 &&
      (lastSeparatorIndex = Math.max(lastSeparatorIndex, separatorIndex));
  }
  return query.slice(lastSeparatorIndex + 1);
}
function normalizePathSeparators(value) {
  let normalized = value;
  for (let separator of PATH_SEPARATORS)
    normalized = normalized.split(separator).join("\0");
  return normalized;
}
function containsPathSeparator(value) {
  for (let separator of PATH_SEPARATORS)
    if (value.includes(separator)) return true;
  return false;
}
