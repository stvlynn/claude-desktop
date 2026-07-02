// Restored from ref/webview/assets/score-query-match-DS2pZf_b.js
// score-query-match-DS2pZf_b chunk restored from the Codex webview bundle.
import { ScoreQueryCharacterHelpers } from "./character-helpers";

export class CompositeMatcher {
  mainMatcher;
  fallbackMatcher;
  constructor(mainMatcher, fallbackMatcher) {
    this.mainMatcher = mainMatcher;
    this.fallbackMatcher = fallbackMatcher;
  }
  matchingDegree(name) {
    let mainRanges = this.mainMatcher.match(name);
    if (mainRanges != null)
      return ScoreQueryCharacterHelpers.boostScoreForLeadingMatch(
        this.mainMatcher.matchingDegree(name, false, mainRanges),
        mainRanges,
      );
    if (this.fallbackMatcher == null) return -2147483648;
    let fallbackRanges = this.fallbackMatcher.match(name);
    return fallbackRanges == null
      ? -2147483648
      : ScoreQueryCharacterHelpers.boostScoreForLeadingMatch(
          this.fallbackMatcher.matchingDegree(name, false, fallbackRanges),
          fallbackRanges,
        );
  }
}

export class WildcardPatternMatcher {
  myPattern;
  isLowerCase;
  isUpperCase;
  isWordSeparator;
  toUpperCase;
  toLowerCase;
  hardSeparators;
  matchingMode;
  mixedCase;
  hasSeparators;
  hasDots;
  meaningfulCharacters;
  minNameLength;
  constructor(pattern, matchingMode, hardSeparators) {
    let normalizedPattern = pattern.endsWith("* ")
      ? pattern.slice(0, -2)
      : pattern;
    this.myPattern = Array.from(normalizedPattern);
    this.isLowerCase = Array.from(
      {
        length: this.myPattern.length,
      },
      () => false,
    );
    this.isUpperCase = Array.from(
      {
        length: this.myPattern.length,
      },
      () => false,
    );
    this.isWordSeparator = Array.from(
      {
        length: this.myPattern.length,
      },
      () => false,
    );
    this.toUpperCase = Array.from(
      {
        length: this.myPattern.length,
      },
      () => "",
    );
    this.toLowerCase = Array.from(
      {
        length: this.myPattern.length,
      },
      () => "",
    );
    this.hardSeparators = Array.from(hardSeparators);
    this.matchingMode = matchingMode;
    let meaningfulChars = [],
      hasContentChar = false,
      hasLowerCase = false,
      scoreDelta = false,
      hasDot = false,
      hasSeparator = false;
    for (let i = 0; i < this.myPattern.length; i += 1) {
      let ch = this.myPattern[i],
        isSeparator = ScoreQueryCharacterHelpers.isPatternSeparator(ch),
        isUpper = ScoreQueryCharacterHelpers.isUpperCaseLetter(ch),
        isLower = ScoreQueryCharacterHelpers.isLowerCaseLetter(ch),
        upperChar = ch.toUpperCase(),
        lowerChar = ch.toLowerCase();
      isLower && (hasLowerCase = true);
      ch === "." && (hasDot = true);
      hasContentChar && isUpper && (scoreDelta = true);
      ScoreQueryCharacterHelpers.isWildcardChar(ch) ||
        ((hasContentChar = true),
        meaningfulChars.push(lowerChar),
        meaningfulChars.push(upperChar));
      hasContentChar && isSeparator && (hasSeparator = true);
      this.isWordSeparator[i] = isSeparator;
      this.isUpperCase[i] = isUpper;
      this.isLowerCase[i] = isLower;
      this.toUpperCase[i] = upperChar;
      this.toLowerCase[i] = lowerChar;
    }
    this.hasDots = hasDot;
    this.mixedCase = hasLowerCase && scoreDelta;
    this.hasSeparators = hasSeparator;
    this.meaningfulCharacters = meaningfulChars;
    this.minNameLength = meaningfulChars.length / 2;
  }
  get pattern() {
    return this.myPattern.join("");
  }
  matchingDegree(name, valueStartCaseMatch = false, ranges = this.match(name)) {
    if (ranges == null) return -2147483648;
    if (ranges.length === 0) return 0;
    let firstRange = ranges[0],
      startMatch = firstRange.startOffset === 0,
      startCaseMatch = startMatch && valueStartCaseMatch,
      scoreDelta = 0,
      patternIndex = -1,
      skippedWordCount = 0,
      wordBoundary = 0,
      caseMatchesUpper = false;
    for (let range of ranges)
      for (
        let offset = range.startOffset;
        offset < range.endOffset;
        offset += 1
      ) {
        let afterGap = offset === range.startOffset && range !== firstRange,
          isWordStart = false;
        for (; wordBoundary <= offset; ) {
          wordBoundary === offset
            ? (isWordStart = true)
            : afterGap && (skippedWordCount += 1);
          wordBoundary = ScoreQueryCharacterHelpers.nextNameWordOffset(
            name,
            wordBoundary,
          );
        }
        let nameChar = name[offset];
        if (
          ((patternIndex = ScoreQueryCharacterHelpers.indexOfChar(
            this.myPattern,
            nameChar,
            patternIndex + 1,
            this.myPattern.length,
            true,
          )),
          patternIndex < 0)
        )
          break;
        isWordStart &&
          (caseMatchesUpper =
            nameChar === this.myPattern[patternIndex] &&
            this.isUpperCase[patternIndex]);
        scoreDelta += this.evaluateCaseMatching(
          startCaseMatch,
          patternIndex,
          caseMatchesUpper,
          offset,
          afterGap,
          isWordStart,
          nameChar,
        );
      }
    let firstMatchOffset = firstRange.startOffset,
      separatorBeforeMatch =
        ScoreQueryCharacterHelpers.indexOfAny(
          name,
          this.hardSeparators,
          0,
          firstMatchOffset,
        ) >= 0,
      matchStartsWord =
        firstMatchOffset === 0 ||
        (ScoreQueryCharacterHelpers.isWordStart(name, firstMatchOffset) &&
          !ScoreQueryCharacterHelpers.isWordStart(name, firstMatchOffset - 1)),
      matchEndsName = ranges[ranges.length - 1].endOffset === name.length;
    return (
      (matchStartsWord ? 1e3 : 0) +
      scoreDelta -
      ranges.length +
      -skippedWordCount * 10 +
      (separatorBeforeMatch ? 0 : 2) +
      (startMatch ? 1 : 0) +
      (matchEndsName ? 1 : 0)
    );
  }
  match(name) {
    if (name.length < this.minNameLength) return null;
    if (this.myPattern.length > 100) return this.matchBySubstring(name);
    let meaningfulIndex = 0;
    for (
      let i = 0;
      i < name.length && meaningfulIndex < this.meaningfulCharacters.length;
      i += 1
    ) {
      let nameChar = name[i];
      (nameChar === this.meaningfulCharacters[meaningfulIndex] ||
        nameChar === this.meaningfulCharacters[meaningfulIndex + 1]) &&
        (meaningfulIndex += 2);
    }
    if (meaningfulIndex < this.minNameLength * 2) return null;
    let matchResult = this.matchWildcards(name, 0, 0);
    return matchResult == null ? null : matchResult.reverse();
  }
  evaluateCaseMatching(
    startCaseMatch,
    patternIndex,
    caseMatchesUpper,
    offset,
    afterGap,
    isWordStart,
    nameChar,
  ) {
    return afterGap && isWordStart && this.isLowerCase[patternIndex]
      ? -10
      : nameChar === this.myPattern[patternIndex]
        ? this.isUpperCase[patternIndex]
          ? 50
          : offset === 0 && startCaseMatch
            ? 150
            : isWordStart
              ? 1
              : 0
        : isWordStart || (this.isLowerCase[patternIndex] && caseMatchesUpper)
          ? -1
          : 0;
  }
  matchBySubstring(name) {
    let infix = this.isPatternChar(0, "*"),
      patternText = ScoreQueryCharacterHelpers.stripWildcards(this.myPattern);
    if (name.length < patternText.length) return null;
    if (infix) {
      let matchIndex = ScoreQueryCharacterHelpers.indexOfSubstringIgnoreCase(
        name,
        patternText,
        0,
        name.length,
      );
      return matchIndex >= 0
        ? [
            {
              startOffset: matchIndex,
              endOffset: matchIndex + patternText.length,
            },
          ]
        : null;
    }
    return ScoreQueryCharacterHelpers.regionMatchesIgnoreCase(
      name,
      0,
      patternText.length,
      patternText,
    )
      ? [
          {
            startOffset: 0,
            endOffset: patternText.length,
          },
        ]
      : null;
  }
  matchWildcards(name, patternStart, nameIndex) {
    let patternIndex = patternStart;
    if (nameIndex < 0) return null;
    if (!this.isWildcard(patternIndex))
      return patternIndex === this.myPattern.length
        ? []
        : this.matchFragment(name, patternIndex, nameIndex);
    do patternIndex += 1;
    while (this.isWildcard(patternIndex));
    if (patternIndex === this.myPattern.length) {
      if (
        this.isTrailingSpacePattern() &&
        nameIndex !== name.length &&
        (patternIndex < 2 || !this.isUpperCaseOrDigit(patternIndex - 2))
      ) {
        let spaceIndex = name.indexOf(" ", nameIndex);
        return spaceIndex >= 0
          ? [
              {
                startOffset: spaceIndex,
                endOffset: spaceIndex + 1,
              },
            ]
          : null;
      }
      return [];
    }
    return this.matchSkippingWords(
      name,
      patternIndex,
      this.findNextPatternCharOccurrence(name, nameIndex, patternIndex),
      true,
    );
  }
  isTrailingSpacePattern() {
    return this.isPatternChar(this.myPattern.length - 1, " ");
  }
  isUpperCaseOrDigit(patternIndex) {
    return (
      this.isUpperCase[patternIndex] ||
      ScoreQueryCharacterHelpers.isDigit(this.myPattern[patternIndex])
    );
  }
  matchSkippingWords(name, patternIndex, nameIndex, allowSpecialChars) {
    let start = nameIndex,
      maxFoundLength = 0;
    for (; start >= 0; ) {
      let fragmentLength = this.seemsLikeFragmentStart(
        name,
        patternIndex,
        start,
      )
        ? this.maxMatchingFragment(name, patternIndex, start)
        : 0;
      if (
        fragmentLength > maxFoundLength ||
        (start + fragmentLength === name.length &&
          this.isTrailingSpacePattern())
      ) {
        this.isMiddleMatch(name, patternIndex, start) ||
          (maxFoundLength = fragmentLength);
        let fragmentMatch = this.matchInsideFragment(
          name,
          patternIndex,
          start,
          fragmentLength,
        );
        if (fragmentMatch != null) return fragmentMatch;
      }
      let nextOccurrence = this.findNextPatternCharOccurrence(
        name,
        start + 1,
        patternIndex,
      );
      start = allowSpecialChars
        ? nextOccurrence
        : this.checkForSpecialChars(
            name,
            start + 1,
            nextOccurrence,
            patternIndex,
          );
    }
    return null;
  }
  findNextPatternCharOccurrence(name, nameIndex, patternIndex) {
    return !this.isPatternChar(patternIndex - 1, "*") &&
      !this.isWordSeparator[patternIndex]
      ? this.indexOfWordStart(name, patternIndex, nameIndex)
      : this.indexOfIgnoreCase(name, nameIndex, patternIndex);
  }
  checkForSpecialChars(name, fromIndex, nextOccurrence, patternIndex) {
    return nextOccurrence < 0 ||
      (!this.hasSeparators &&
        !this.mixedCase &&
        ScoreQueryCharacterHelpers.indexOfAny(
          name,
          this.hardSeparators,
          fromIndex,
          nextOccurrence,
        ) !== -1) ||
      (this.hasDots &&
        !this.isPatternChar(patternIndex - 1, ".") &&
        ScoreQueryCharacterHelpers.indexOfCharInRange(
          name,
          ".",
          fromIndex,
          nextOccurrence,
        ) !== -1)
      ? -1
      : nextOccurrence;
  }
  seemsLikeFragmentStart(name, patternIndex, nameIndex) {
    return !this.isUpperCase[patternIndex] ||
      ScoreQueryCharacterHelpers.isUpperCaseLetter(name[nameIndex]) ||
      ScoreQueryCharacterHelpers.isWordStart(name, nameIndex)
      ? true
      : !this.mixedCase && this.matchingMode !== "MATCH_CASE";
  }
  charEquals(patternChar, patternIndex, nameChar, ignoreCase) {
    return patternChar === nameChar
      ? true
      : ignoreCase
        ? this.toLowerCase[patternIndex] === nameChar ||
          this.toUpperCase[patternIndex] === nameChar
        : false;
  }
  matchFragment(name, patternIndex, nameIndex) {
    let fragmentLength = this.maxMatchingFragment(
      name,
      patternIndex,
      nameIndex,
    );
    return fragmentLength === 0
      ? null
      : this.matchInsideFragment(name, patternIndex, nameIndex, fragmentLength);
  }
  maxMatchingFragment(name, patternIndex, nameIndex) {
    if (!this.isFirstCharMatching(name, nameIndex, patternIndex)) return 0;
    let i = 1,
      ignoreCase = this.matchingMode !== "MATCH_CASE";
    for (
      ;
      nameIndex + i < name.length && patternIndex + i < this.myPattern.length;

    ) {
      let nameChar = name[nameIndex + i];
      if (
        !this.charEquals(
          this.myPattern[patternIndex + i],
          patternIndex + i,
          nameChar,
          ignoreCase,
        )
      ) {
        if (
          this.isSkippingDigitBetweenPatternDigits(patternIndex + i, nameChar)
        )
          return 0;
        break;
      }
      i += 1;
    }
    return i;
  }
  isSkippingDigitBetweenPatternDigits(patternIndex, nameChar) {
    return (
      ScoreQueryCharacterHelpers.isDigit(this.myPattern[patternIndex]) &&
      ScoreQueryCharacterHelpers.isDigit(this.myPattern[patternIndex - 1]) &&
      ScoreQueryCharacterHelpers.isDigit(nameChar)
    );
  }
  matchInsideFragment(name, patternIndex, nameIndex, fragmentLength) {
    let minFragment = this.isMiddleMatch(name, patternIndex, nameIndex) ? 3 : 1;
    return (
      this.improveCamelHumps(
        name,
        patternIndex,
        nameIndex,
        fragmentLength,
        minFragment,
      ) ??
      this.findLongestMatchingPrefix(
        name,
        patternIndex,
        nameIndex,
        fragmentLength,
        minFragment,
      )
    );
  }
  isMiddleMatch(name, patternIndex, nameIndex) {
    return !this.isPatternChar(patternIndex - 1, "*") ||
      this.isWildcard(patternIndex + 1) ||
      !ScoreQueryCharacterHelpers.isAsciiAlphaNumeric(name[nameIndex])
      ? false
      : !ScoreQueryCharacterHelpers.isWordStart(name, nameIndex);
  }
  findLongestMatchingPrefix(
    name,
    patternIndex,
    nameIndex,
    fragmentLength,
    minFragment,
  ) {
    if (patternIndex + fragmentLength >= this.myPattern.length)
      return [
        {
          startOffset: nameIndex,
          endOffset: nameIndex + fragmentLength,
        },
      ];
    let i = fragmentLength;
    for (; i >= minFragment || (i > 0 && this.isWildcard(patternIndex + i)); ) {
      let matchedRanges = null;
      if (this.isWildcard(patternIndex + i))
        matchedRanges = this.matchWildcards(
          name,
          patternIndex + i,
          nameIndex + i,
        );
      else {
        let nextOccurrence = this.findNextPatternCharOccurrence(
          name,
          nameIndex + i + 1,
          patternIndex + i,
        );
        nextOccurrence = this.checkForSpecialChars(
          name,
          nameIndex + i,
          nextOccurrence,
          patternIndex + i,
        );
        nextOccurrence >= 0 &&
          (matchedRanges = this.matchSkippingWords(
            name,
            patternIndex + i,
            nextOccurrence,
            false,
          ));
      }
      if (matchedRanges != null)
        return ScoreQueryCharacterHelpers.prependMatchedRange(
          matchedRanges,
          nameIndex,
          i,
        );
      --i;
    }
    return null;
  }
  improveCamelHumps(
    name,
    patternIndex,
    nameIndex,
    fragmentLength,
    minFragment,
  ) {
    for (let i = minFragment; i < fragmentLength; i += 1)
      if (
        this.isUppercasePatternVsLowercaseNameChar(
          name,
          patternIndex + i,
          nameIndex + i,
        )
      ) {
        let humpMatch = this.findUppercaseMatchFurther(
          name,
          patternIndex + i,
          nameIndex + i,
        );
        if (humpMatch != null)
          return ScoreQueryCharacterHelpers.prependMatchedRange(
            humpMatch,
            nameIndex,
            i,
          );
      }
    return null;
  }
  isUppercasePatternVsLowercaseNameChar(name, patternIndex, nameIndex) {
    return (
      this.isUpperCase[patternIndex] &&
      this.myPattern[patternIndex] !== name[nameIndex]
    );
  }
  findUppercaseMatchFurther(name, patternIndex, nameIndex) {
    let nextWordStart = this.indexOfWordStart(name, patternIndex, nameIndex);
    return this.matchWildcards(name, patternIndex, nextWordStart);
  }
  isFirstCharMatching(name, nameIndex, patternIndex) {
    if (nameIndex >= name.length) return false;
    let ignoreCase = this.matchingMode !== "MATCH_CASE",
      patternChar = this.myPattern[patternIndex];
    return this.charEquals(
      patternChar,
      patternIndex,
      name[nameIndex],
      ignoreCase,
    )
      ? this.matchingMode === "FIRST_LETTER" &&
        (patternIndex === 0 || (patternIndex === 1 && this.isWildcard(0))) &&
        this.hasCase(patternIndex)
        ? this.isUpperCase[patternIndex] ===
          ScoreQueryCharacterHelpers.isUpperCaseLetter(name[0])
        : true
      : false;
  }
  hasCase(patternIndex) {
    return this.isUpperCase[patternIndex] || this.isLowerCase[patternIndex];
  }
  isWildcard(patternIndex) {
    return (
      patternIndex >= 0 &&
      patternIndex < this.myPattern.length &&
      ScoreQueryCharacterHelpers.isWildcardChar(this.myPattern[patternIndex])
    );
  }
  isPatternChar(patternIndex, char) {
    return patternIndex < 0 || patternIndex >= this.myPattern.length
      ? false
      : this.myPattern[patternIndex] === char;
  }
  indexOfWordStart(name, patternIndex, nameIndex) {
    let patternChar = this.myPattern[patternIndex];
    if (
      nameIndex >= name.length ||
      (this.mixedCase &&
        this.isLowerCase[patternIndex] &&
        !(patternIndex > 0 && this.isWordSeparator[patternIndex - 1]))
    )
      return -1;
    let index = nameIndex,
      isSpecialChar =
        !ScoreQueryCharacterHelpers.isAsciiAlphaNumeric(patternChar);
    for (;;) {
      if (
        ((index = this.indexOfIgnoreCase(name, index, patternIndex)), index < 0)
      )
        return -1;
      if (isSpecialChar || ScoreQueryCharacterHelpers.isWordStart(name, index))
        return index;
      index += 1;
    }
  }
  indexOfIgnoreCase(name, fromIndex, patternIndex) {
    let patternChar = this.myPattern[patternIndex];
    if (ScoreQueryCharacterHelpers.isAsciiSingleChar(patternChar)) {
      let upperChar = this.toUpperCase[patternIndex],
        lowerChar = this.toLowerCase[patternIndex];
      for (let i = fromIndex; i < name.length; i += 1) {
        let nameChar = name[i];
        if (nameChar === upperChar || nameChar === lowerChar) return i;
      }
      return -1;
    }
    return ScoreQueryCharacterHelpers.indexOfCharInRange(
      name,
      patternChar,
      fromIndex,
      name.length,
    );
  }
}
