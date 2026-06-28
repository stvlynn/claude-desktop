// Restored from ref/webview/assets/score-query-match-DS2pZf_b.js
// score-query-match-DS2pZf_b chunk restored from the Codex webview bundle.
import { ScoreQueryCharacterHelpers } from "./character-helpers";

export class CompositeMatcher {
  mainMatcher;
  fallbackMatcher;
  constructor(input123, input124) {
    this.mainMatcher = input123;
    this.fallbackMatcher = input124;
  }
  matchingDegree(input27) {
    let matchLocal48 = this.mainMatcher.match(input27);
    if (matchLocal48 != null)
      return ScoreQueryCharacterHelpers.boostScoreForLeadingMatch(
        this.mainMatcher.matchingDegree(input27, false, matchLocal48),
        matchLocal48,
      );
    if (this.fallbackMatcher == null) return -2147483648;
    let matchLocal49 = this.fallbackMatcher.match(input27);
    return matchLocal49 == null
      ? -2147483648
      : ScoreQueryCharacterHelpers.boostScoreForLeadingMatch(
          this.fallbackMatcher.matchingDegree(input27, false, matchLocal49),
          matchLocal49,
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
  constructor(input1, input2, input3) {
    let matchLocal8 = input1.endsWith("* ") ? input1.slice(0, -2) : input1;
    this.myPattern = Array.from(matchLocal8);
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
    this.hardSeparators = Array.from(input3);
    this.matchingMode = input2;
    let matchLocal9 = [],
      matchLocal10 = false,
      matchLocal11 = false,
      scoreDelta = false,
      matchLocal12 = false,
      matchLocal13 = false;
    for (
      let matchLocal31 = 0;
      matchLocal31 < this.myPattern.length;
      matchLocal31 += 1
    ) {
      let matchLocal38 = this.myPattern[matchLocal31],
        matchLocal39 =
          ScoreQueryCharacterHelpers.isPatternSeparator(matchLocal38),
        matchLocal40 =
          ScoreQueryCharacterHelpers.isUpperCaseLetter(matchLocal38),
        matchLocal41 =
          ScoreQueryCharacterHelpers.isLowerCaseLetter(matchLocal38),
        matchLocal42 = matchLocal38.toUpperCase(),
        matchLocal43 = matchLocal38.toLowerCase();
      matchLocal41 && (matchLocal11 = true);
      matchLocal38 === "." && (matchLocal12 = true);
      matchLocal10 && matchLocal40 && (scoreDelta = true);
      ScoreQueryCharacterHelpers.isWildcardChar(matchLocal38) ||
        ((matchLocal10 = true),
        matchLocal9.push(matchLocal43),
        matchLocal9.push(matchLocal42));
      matchLocal10 && matchLocal39 && (matchLocal13 = true);
      this.isWordSeparator[matchLocal31] = matchLocal39;
      this.isUpperCase[matchLocal31] = matchLocal40;
      this.isLowerCase[matchLocal31] = matchLocal41;
      this.toUpperCase[matchLocal31] = matchLocal42;
      this.toLowerCase[matchLocal31] = matchLocal43;
    }
    this.hasDots = matchLocal12;
    this.mixedCase = matchLocal11 && scoreDelta;
    this.hasSeparators = matchLocal13;
    this.meaningfulCharacters = matchLocal9;
    this.minNameLength = matchLocal9.length / 2;
  }
  get pattern() {
    return this.myPattern.join("");
  }
  matchingDegree(input4, input5 = false, input6 = this.match(input4)) {
    if (input6 == null) return -2147483648;
    if (input6.length === 0) return 0;
    let matchLocal14 = input6[0],
      matchLocal15 = matchLocal14.startOffset === 0,
      matchLocal16 = matchLocal15 && input5,
      scoreDelta = 0,
      matchLocal17 = -1,
      matchLocal18 = 0,
      matchLocal19 = 0,
      matchLocal20 = false;
    for (let matchLocal34 of input6)
      for (
        let matchLocal37 = matchLocal34.startOffset;
        matchLocal37 < matchLocal34.endOffset;
        matchLocal37 += 1
      ) {
        let matchLocal50 =
            matchLocal37 === matchLocal34.startOffset &&
            matchLocal34 !== matchLocal14,
          matchLocal51 = false;
        for (; matchLocal19 <= matchLocal37; ) {
          matchLocal19 === matchLocal37
            ? (matchLocal51 = true)
            : matchLocal50 && (matchLocal18 += 1);
          matchLocal19 = ScoreQueryCharacterHelpers.nextNameWordOffset(
            input4,
            matchLocal19,
          );
        }
        let matchLocal52 = input4[matchLocal37];
        if (
          ((matchLocal17 = ScoreQueryCharacterHelpers.indexOfChar(
            this.myPattern,
            matchLocal52,
            matchLocal17 + 1,
            this.myPattern.length,
            true,
          )),
          matchLocal17 < 0)
        )
          break;
        matchLocal51 &&
          (matchLocal20 =
            matchLocal52 === this.myPattern[matchLocal17] &&
            this.isUpperCase[matchLocal17]);
        scoreDelta += this.evaluateCaseMatching(
          matchLocal16,
          matchLocal17,
          matchLocal20,
          matchLocal37,
          matchLocal50,
          matchLocal51,
          matchLocal52,
        );
      }
    let matchLocal21 = matchLocal14.startOffset,
      matchLocal22 =
        ScoreQueryCharacterHelpers.indexOfAny(
          input4,
          this.hardSeparators,
          0,
          matchLocal21,
        ) >= 0,
      matchLocal23 =
        matchLocal21 === 0 ||
        (ScoreQueryCharacterHelpers.isWordStart(input4, matchLocal21) &&
          !ScoreQueryCharacterHelpers.isWordStart(input4, matchLocal21 - 1)),
      matchLocal24 = input6[input6.length - 1].endOffset === input4.length;
    return (
      (matchLocal23 ? 1e3 : 0) +
      scoreDelta -
      input6.length +
      -matchLocal18 * 10 +
      (matchLocal22 ? 0 : 2) +
      (matchLocal15 ? 1 : 0) +
      (matchLocal24 ? 1 : 0)
    );
  }
  match(input19) {
    if (input19.length < this.minNameLength) return null;
    if (this.myPattern.length > 100) return this.matchBySubstring(input19);
    let matchLocal29 = 0;
    for (
      let matchLocal65 = 0;
      matchLocal65 < input19.length &&
      matchLocal29 < this.meaningfulCharacters.length;
      matchLocal65 += 1
    ) {
      let matchLocal84 = input19[matchLocal65];
      (matchLocal84 === this.meaningfulCharacters[matchLocal29] ||
        matchLocal84 === this.meaningfulCharacters[matchLocal29 + 1]) &&
        (matchLocal29 += 2);
    }
    if (matchLocal29 < this.minNameLength * 2) return null;
    let matchLocal30 = this.matchWildcards(input19, 0, 0);
    return matchLocal30 == null ? null : matchLocal30.reverse();
  }
  evaluateCaseMatching(
    input51,
    input52,
    input53,
    input54,
    input55,
    input56,
    input57,
  ) {
    return input55 && input56 && this.isLowerCase[input52]
      ? -10
      : input57 === this.myPattern[input52]
        ? this.isUpperCase[input52]
          ? 50
          : input54 === 0 && input51
            ? 150
            : input56
              ? 1
              : 0
        : input56 || (this.isLowerCase[input52] && input53)
          ? -1
          : 0;
  }
  matchBySubstring(input26) {
    let matchLocal46 = this.isPatternChar(0, "*"),
      matchLocal47 = ScoreQueryCharacterHelpers.stripWildcards(this.myPattern);
    if (input26.length < matchLocal47.length) return null;
    if (matchLocal46) {
      let matchLocal86 = ScoreQueryCharacterHelpers.indexOfSubstringIgnoreCase(
        input26,
        matchLocal47,
        0,
        input26.length,
      );
      return matchLocal86 >= 0
        ? [
            {
              startOffset: matchLocal86,
              endOffset: matchLocal86 + matchLocal47.length,
            },
          ]
        : null;
    }
    return ScoreQueryCharacterHelpers.regionMatchesIgnoreCase(
      input26,
      0,
      matchLocal47.length,
      matchLocal47,
    )
      ? [
          {
            startOffset: 0,
            endOffset: matchLocal47.length,
          },
        ]
      : null;
  }
  matchWildcards(input7, input8, input9) {
    let matchLocal25 = input8;
    if (input9 < 0) return null;
    if (!this.isWildcard(matchLocal25))
      return matchLocal25 === this.myPattern.length
        ? []
        : this.matchFragment(input7, matchLocal25, input9);
    do matchLocal25 += 1;
    while (this.isWildcard(matchLocal25));
    if (matchLocal25 === this.myPattern.length) {
      if (
        this.isTrailingSpacePattern() &&
        input9 !== input7.length &&
        (matchLocal25 < 2 || !this.isUpperCaseOrDigit(matchLocal25 - 2))
      ) {
        let matchLocal90 = input7.indexOf(" ", input9);
        return matchLocal90 >= 0
          ? [
              {
                startOffset: matchLocal90,
                endOffset: matchLocal90 + 1,
              },
            ]
          : null;
      }
      return [];
    }
    return this.matchSkippingWords(
      input7,
      matchLocal25,
      this.findNextPatternCharOccurrence(input7, input9, matchLocal25),
      true,
    );
  }
  isTrailingSpacePattern() {
    return this.isPatternChar(this.myPattern.length - 1, " ");
  }
  isUpperCaseOrDigit(input111) {
    return (
      this.isUpperCase[input111] ||
      ScoreQueryCharacterHelpers.isDigit(this.myPattern[input111])
    );
  }
  matchSkippingWords(input15, input16, input17, input18) {
    let matchLocal27 = input17,
      matchLocal28 = 0;
    for (; matchLocal27 >= 0; ) {
      let matchLocal32 = this.seemsLikeFragmentStart(
        input15,
        input16,
        matchLocal27,
      )
        ? this.maxMatchingFragment(input15, input16, matchLocal27)
        : 0;
      if (
        matchLocal32 > matchLocal28 ||
        (matchLocal27 + matchLocal32 === input15.length &&
          this.isTrailingSpacePattern())
      ) {
        this.isMiddleMatch(input15, input16, matchLocal27) ||
          (matchLocal28 = matchLocal32);
        let matchLocal83 = this.matchInsideFragment(
          input15,
          input16,
          matchLocal27,
          matchLocal32,
        );
        if (matchLocal83 != null) return matchLocal83;
      }
      let matchLocal33 = this.findNextPatternCharOccurrence(
        input15,
        matchLocal27 + 1,
        input16,
      );
      matchLocal27 = input18
        ? matchLocal33
        : this.checkForSpecialChars(
            input15,
            matchLocal27 + 1,
            matchLocal33,
            input16,
          );
    }
    return null;
  }
  findNextPatternCharOccurrence(input58, input59, input60) {
    return !this.isPatternChar(input60 - 1, "*") &&
      !this.isWordSeparator[input60]
      ? this.indexOfWordStart(input58, input60, input59)
      : this.indexOfIgnoreCase(input58, input59, input60);
  }
  checkForSpecialChars(input47, input48, input49, input50) {
    return input49 < 0 ||
      (!this.hasSeparators &&
        !this.mixedCase &&
        ScoreQueryCharacterHelpers.indexOfAny(
          input47,
          this.hardSeparators,
          input48,
          input49,
        ) !== -1) ||
      (this.hasDots &&
        !this.isPatternChar(input50 - 1, ".") &&
        ScoreQueryCharacterHelpers.indexOfCharInRange(
          input47,
          ".",
          input48,
          input49,
        ) !== -1)
      ? -1
      : input49;
  }
  seemsLikeFragmentStart(input70, input71, input72) {
    return !this.isUpperCase[input71] ||
      ScoreQueryCharacterHelpers.isUpperCaseLetter(input70[input72]) ||
      ScoreQueryCharacterHelpers.isWordStart(input70, input72)
      ? true
      : !this.mixedCase && this.matchingMode !== "MATCH_CASE";
  }
  charEquals(input95, input96, input97, input98) {
    return input95 === input97
      ? true
      : input98
        ? this.toLowerCase[input96] === input97 ||
          this.toUpperCase[input96] === input97
        : false;
  }
  matchFragment(input76, input77, input78) {
    let matchLocal78 = this.maxMatchingFragment(input76, input77, input78);
    return matchLocal78 === 0
      ? null
      : this.matchInsideFragment(input76, input77, input78, matchLocal78);
  }
  maxMatchingFragment(input20, input21, input22) {
    if (!this.isFirstCharMatching(input20, input22, input21)) return 0;
    let matchLocal35 = 1,
      matchLocal36 = this.matchingMode !== "MATCH_CASE";
    for (
      ;
      input22 + matchLocal35 < input20.length &&
      input21 + matchLocal35 < this.myPattern.length;

    ) {
      let matchLocal74 = input20[input22 + matchLocal35];
      if (
        !this.charEquals(
          this.myPattern[input21 + matchLocal35],
          input21 + matchLocal35,
          matchLocal74,
          matchLocal36,
        )
      ) {
        if (
          this.isSkippingDigitBetweenPatternDigits(
            input21 + matchLocal35,
            matchLocal74,
          )
        )
          return 0;
        break;
      }
      matchLocal35 += 1;
    }
    return matchLocal35;
  }
  isSkippingDigitBetweenPatternDigits(input87, input88) {
    return (
      ScoreQueryCharacterHelpers.isDigit(this.myPattern[input87]) &&
      ScoreQueryCharacterHelpers.isDigit(this.myPattern[input87 - 1]) &&
      ScoreQueryCharacterHelpers.isDigit(input88)
    );
  }
  matchInsideFragment(input63, input64, input65, input66) {
    let matchLocal67 = this.isMiddleMatch(input63, input64, input65) ? 3 : 1;
    return (
      this.improveCamelHumps(
        input63,
        input64,
        input65,
        input66,
        matchLocal67,
      ) ??
      this.findLongestMatchingPrefix(
        input63,
        input64,
        input65,
        input66,
        matchLocal67,
      )
    );
  }
  isMiddleMatch(input89, input90, input91) {
    return !this.isPatternChar(input90 - 1, "*") ||
      this.isWildcard(input90 + 1) ||
      !ScoreQueryCharacterHelpers.isAsciiAlphaNumeric(input89[input91])
      ? false
      : !ScoreQueryCharacterHelpers.isWordStart(input89, input91);
  }
  findLongestMatchingPrefix(input10, input11, input12, input13, input14) {
    if (input11 + input13 >= this.myPattern.length)
      return [
        {
          startOffset: input12,
          endOffset: input12 + input13,
        },
      ];
    let matchLocal26 = input13;
    for (
      ;
      matchLocal26 >= input14 ||
      (matchLocal26 > 0 && this.isWildcard(input11 + matchLocal26));

    ) {
      let matchLocal53 = null;
      if (this.isWildcard(input11 + matchLocal26))
        matchLocal53 = this.matchWildcards(
          input10,
          input11 + matchLocal26,
          input12 + matchLocal26,
        );
      else {
        let matchLocal73 = this.findNextPatternCharOccurrence(
          input10,
          input12 + matchLocal26 + 1,
          input11 + matchLocal26,
        );
        matchLocal73 = this.checkForSpecialChars(
          input10,
          input12 + matchLocal26,
          matchLocal73,
          input11 + matchLocal26,
        );
        matchLocal73 >= 0 &&
          (matchLocal53 = this.matchSkippingWords(
            input10,
            input11 + matchLocal26,
            matchLocal73,
            false,
          ));
      }
      if (matchLocal53 != null)
        return ScoreQueryCharacterHelpers.prependMatchedRange(
          matchLocal53,
          input12,
          matchLocal26,
        );
      --matchLocal26;
    }
    return null;
  }
  improveCamelHumps(input37, input38, input39, input40, input41) {
    for (let matchLocal66 = input41; matchLocal66 < input40; matchLocal66 += 1)
      if (
        this.isUppercasePatternVsLowercaseNameChar(
          input37,
          input38 + matchLocal66,
          input39 + matchLocal66,
        )
      ) {
        let matchLocal89 = this.findUppercaseMatchFurther(
          input37,
          input38 + matchLocal66,
          input39 + matchLocal66,
        );
        if (matchLocal89 != null)
          return ScoreQueryCharacterHelpers.prependMatchedRange(
            matchLocal89,
            input39,
            matchLocal66,
          );
      }
    return null;
  }
  isUppercasePatternVsLowercaseNameChar(input92, input93, input94) {
    return (
      this.isUpperCase[input93] && this.myPattern[input93] !== input92[input94]
    );
  }
  findUppercaseMatchFurther(input84, input85, input86) {
    let matchLocal82 = this.indexOfWordStart(input84, input85, input86);
    return this.matchWildcards(input84, input85, matchLocal82);
  }
  isFirstCharMatching(input23, input24, input25) {
    if (input24 >= input23.length) return false;
    let matchLocal44 = this.matchingMode !== "MATCH_CASE",
      matchLocal45 = this.myPattern[input25];
    return this.charEquals(
      matchLocal45,
      input25,
      input23[input24],
      matchLocal44,
    )
      ? this.matchingMode === "FIRST_LETTER" &&
        (input25 === 0 || (input25 === 1 && this.isWildcard(0))) &&
        this.hasCase(input25)
        ? this.isUpperCase[input25] ===
          ScoreQueryCharacterHelpers.isUpperCaseLetter(input23[0])
        : true
      : false;
  }
  hasCase(input125) {
    return this.isUpperCase[input125] || this.isLowerCase[input125];
  }
  isWildcard(input110) {
    return (
      input110 >= 0 &&
      input110 < this.myPattern.length &&
      ScoreQueryCharacterHelpers.isWildcardChar(this.myPattern[input110])
    );
  }
  isPatternChar(input103, input104) {
    return input103 < 0 || input103 >= this.myPattern.length
      ? false
      : this.myPattern[input103] === input104;
  }
  indexOfWordStart(input28, input29, input30) {
    let matchLocal54 = this.myPattern[input29];
    if (
      input30 >= input28.length ||
      (this.mixedCase &&
        this.isLowerCase[input29] &&
        !(input29 > 0 && this.isWordSeparator[input29 - 1]))
    )
      return -1;
    let matchLocal55 = input30,
      matchLocal56 =
        !ScoreQueryCharacterHelpers.isAsciiAlphaNumeric(matchLocal54);
    for (;;) {
      if (
        ((matchLocal55 = this.indexOfIgnoreCase(
          input28,
          matchLocal55,
          input29,
        )),
        matchLocal55 < 0)
      )
        return -1;
      if (
        matchLocal56 ||
        ScoreQueryCharacterHelpers.isWordStart(input28, matchLocal55)
      )
        return matchLocal55;
      matchLocal55 += 1;
    }
  }
  indexOfIgnoreCase(input34, input35, input36) {
    let matchLocal58 = this.myPattern[input36];
    if (ScoreQueryCharacterHelpers.isAsciiSingleChar(matchLocal58)) {
      let matchLocal75 = this.toUpperCase[input36],
        matchLocal76 = this.toLowerCase[input36];
      for (
        let matchLocal92 = input35;
        matchLocal92 < input34.length;
        matchLocal92 += 1
      ) {
        let matchLocal101 = input34[matchLocal92];
        if (matchLocal101 === matchLocal75 || matchLocal101 === matchLocal76)
          return matchLocal92;
      }
      return -1;
    }
    return ScoreQueryCharacterHelpers.indexOfCharInRange(
      input34,
      matchLocal58,
      input35,
      input34.length,
    );
  }
}
