// Restored from ref/webview/assets/score-query-match-DS2pZf_b.js
// score-query-match-DS2pZf_b chunk restored from the Codex webview bundle.
export class ScoreQueryCharacterHelpers {
  static boostScoreForLeadingMatch(score, matches) {
    return matches.length === 0
      ? score
      : matches[0].startOffset === 0
        ? score + 1e4
        : score;
  }
  static isPatternSeparator(char) {
    return (
      char.trim().length === 0 ||
      char === "_" ||
      char === "-" ||
      char === ":" ||
      char === "+" ||
      char === "." ||
      char === "/" ||
      char === "\\"
    );
  }
  static nextNameWordOffset(target, offset) {
    return offset < target.length &&
      ScoreQueryCharacterHelpers.isDigit(target[offset])
      ? offset + 1
      : ScoreQueryCharacterHelpers.nextWordStartOffset(target, offset);
  }
  static nextWordStartOffset(target, offset) {
    for (
      let wordOffset = offset + 1;
      wordOffset <= target.length;
      wordOffset += 1
    ) {
      if (wordOffset >= target.length) return target.length + 1;
      if (ScoreQueryCharacterHelpers.isWordStart(target, wordOffset))
        return wordOffset;
    }
    return target.length + 1;
  }
  static isWordStart(target, offset) {
    if (offset < 0 || offset >= target.length) return false;
    let currentChar = target[offset];
    if (!ScoreQueryCharacterHelpers.isAsciiAlphaNumeric(currentChar))
      return false;
    if (offset === 0) return true;
    let prevChar = target[offset - 1];
    return !!(
      !ScoreQueryCharacterHelpers.isAsciiAlphaNumeric(prevChar) ||
      (ScoreQueryCharacterHelpers.isUpperCaseLetter(currentChar) &&
        ScoreQueryCharacterHelpers.isLowerCaseLetter(prevChar)) ||
      (ScoreQueryCharacterHelpers.isDigit(currentChar) &&
        !ScoreQueryCharacterHelpers.isDigit(prevChar))
    );
  }
  static indexOfChar(target, char, start, end, ignoreCase) {
    if (!ignoreCase) {
      for (let index = start; index < end; index += 1)
        if (target[index] === char) return index;
      return -1;
    }
    let lowerChar = char.toLowerCase(),
      upperChar = char.toUpperCase();
    for (let index = start; index < end; index += 1) {
      let currentChar = target[index];
      if (currentChar === lowerChar || currentChar === upperChar) return index;
    }
    return -1;
  }
  static isWildcardChar(char) {
    return char === " " || char === "*";
  }
  static indexOfAny(target, chars, start, end) {
    for (let index = start; index < end; index += 1)
      if (chars.includes(target[index])) return index;
    return -1;
  }
  static indexOfCharInRange(target, char, start, end) {
    for (let index = start; index < end; index += 1)
      if (target[index] === char) return index;
    return -1;
  }
  static indexOfSubstringIgnoreCase(target, substring, start, end) {
    let lowerTarget = target.toLowerCase(),
      lowerSubstring = substring.toLowerCase(),
      foundIndex = lowerTarget.indexOf(lowerSubstring, start);
    return foundIndex < 0 || foundIndex + substring.length > end
      ? -1
      : foundIndex;
  }
  static regionMatchesIgnoreCase(target, offset, length, other) {
    return offset + length > target.length
      ? false
      : target.slice(offset, offset + length).toLowerCase() ===
          other.toLowerCase();
  }
  static stripWildcards(value) {
    let result = "";
    for (let char of value) char !== "*" && (result += char);
    return result;
  }
  static prependMatchedRange(matches, startOffset, length) {
    if (matches.length === 0)
      return [
        {
          startOffset: startOffset,
          endOffset: startOffset + length,
        },
      ];
    let lastRange = matches[matches.length - 1];
    return (
      lastRange.startOffset === startOffset + length
        ? (matches[matches.length - 1] = {
            startOffset: startOffset,
            endOffset: lastRange.endOffset,
          })
        : matches.push({
            startOffset: startOffset,
            endOffset: startOffset + length,
          }),
      matches
    );
  }
  static isAsciiSingleChar(char) {
    return char.length === 1 && char.charCodeAt(0) <= 127;
  }
  static isUpperCaseLetter(char) {
    return char.toUpperCase() === char && char.toLowerCase() !== char;
  }
  static isLowerCaseLetter(char) {
    return char.toLowerCase() === char && char.toUpperCase() !== char;
  }
  static isDigit(char) {
    return char >= "0" && char <= "9";
  }
  static isAsciiAlphaNumeric(char) {
    return /[a-z0-9]/i.test(char);
  }
}
