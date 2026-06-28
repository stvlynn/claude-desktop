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
function createMatcher(input69) {
  let matchLocal70 = containsPathSeparator(input69),
    matchLocal71 = matchLocal70
      ? buildPathWildcardPattern(input69)
      : `*${input69}`,
    matchLocal72 = basenameAfterLastSeparator(input69);
  return new CompositeMatcher(
    new WildcardPatternMatcher(
      matchLocal71,
      "IGNORE_CASE",
      PATH_SEPARATORS.join(""),
    ),
    matchLocal70 && input69 !== matchLocal72
      ? new WildcardPatternMatcher(
          matchLocal72,
          "IGNORE_CASE",
          PATH_SEPARATORS.join(""),
        )
      : null,
  );
}
function buildPathWildcardPattern(input105) {
  let matchLocal87 = `*${input105}`;
  for (let matchLocal97 of PATH_SEPARATORS)
    matchLocal87 = matchLocal87.split(matchLocal97).join(`*${"\0"}*`);
  return matchLocal87;
}
function basenameAfterLastSeparator(input73) {
  let matchLocal77 = -1;
  for (let matchLocal88 of PATH_SEPARATORS) {
    let matchLocal94 = input73.lastIndexOf(matchLocal88);
    matchLocal94 >= 0 &&
      matchLocal94 < input73.length - 1 &&
      (matchLocal77 = Math.max(matchLocal77, matchLocal94));
  }
  return input73.slice(matchLocal77 + 1);
}
function normalizePathSeparators(input116) {
  let matchLocal91 = input116;
  for (let matchLocal103 of PATH_SEPARATORS)
    matchLocal91 = matchLocal91.split(matchLocal103).join("\0");
  return matchLocal91;
}
function containsPathSeparator(input119) {
  for (let matchLocal100 of PATH_SEPARATORS)
    if (input119.includes(matchLocal100)) return true;
  return false;
}
