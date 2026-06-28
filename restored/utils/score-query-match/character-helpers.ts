// Restored from ref/webview/assets/score-query-match-DS2pZf_b.js
// score-query-match-DS2pZf_b chunk restored from the Codex webview bundle.
export class ScoreQueryCharacterHelpers {
  static boostScoreForLeadingMatch(input117, input118) {
    return input118.length === 0
      ? input117
      : input118[0].startOffset === 0
        ? input117 + 1e4
        : input117;
  }
  static isPatternSeparator(input83) {
    return (
      input83.trim().length === 0 ||
      input83 === "_" ||
      input83 === "-" ||
      input83 === ":" ||
      input83 === "+" ||
      input83 === "." ||
      input83 === "/" ||
      input83 === "\\"
    );
  }
  static nextNameWordOffset(input127, input128) {
    return input128 < input127.length &&
      ScoreQueryCharacterHelpers.isDigit(input127[input128])
      ? input128 + 1
      : ScoreQueryCharacterHelpers.nextWordStartOffset(input127, input128);
  }
  static nextWordStartOffset(input74, input75) {
    for (
      let matchLocal85 = input75 + 1;
      matchLocal85 <= input74.length;
      matchLocal85 += 1
    ) {
      if (matchLocal85 >= input74.length) return input74.length + 1;
      if (ScoreQueryCharacterHelpers.isWordStart(input74, matchLocal85))
        return matchLocal85;
    }
    return input74.length + 1;
  }
  static isWordStart(input67, input68) {
    if (input68 < 0 || input68 >= input67.length) return false;
    let matchLocal68 = input67[input68];
    if (!ScoreQueryCharacterHelpers.isAsciiAlphaNumeric(matchLocal68))
      return false;
    if (input68 === 0) return true;
    let matchLocal69 = input67[input68 - 1];
    return !!(
      !ScoreQueryCharacterHelpers.isAsciiAlphaNumeric(matchLocal69) ||
      (ScoreQueryCharacterHelpers.isUpperCaseLetter(matchLocal68) &&
        ScoreQueryCharacterHelpers.isLowerCaseLetter(matchLocal69)) ||
      (ScoreQueryCharacterHelpers.isDigit(matchLocal68) &&
        !ScoreQueryCharacterHelpers.isDigit(matchLocal69))
    );
  }
  static indexOfChar(input42, input43, input44, input45, input46) {
    if (!input46) {
      for (
        let matchLocal98 = input44;
        matchLocal98 < input45;
        matchLocal98 += 1
      )
        if (input42[matchLocal98] === input43) return matchLocal98;
      return -1;
    }
    let matchLocal59 = input43.toLowerCase(),
      matchLocal60 = input43.toUpperCase();
    for (
      let matchLocal95 = input44;
      matchLocal95 < input45;
      matchLocal95 += 1
    ) {
      let matchLocal102 = input42[matchLocal95];
      if (matchLocal102 === matchLocal59 || matchLocal102 === matchLocal60)
        return matchLocal95;
    }
    return -1;
  }
  static isWildcardChar(input130) {
    return input130 === " " || input130 === "*";
  }
  static indexOfAny(input106, input107, input108, input109) {
    for (
      let matchLocal96 = input108;
      matchLocal96 < input109;
      matchLocal96 += 1
    )
      if (input107.includes(input106[matchLocal96])) return matchLocal96;
    return -1;
  }
  static indexOfCharInRange(input112, input113, input114, input115) {
    for (
      let matchLocal99 = input114;
      matchLocal99 < input115;
      matchLocal99 += 1
    )
      if (input112[matchLocal99] === input113) return matchLocal99;
    return -1;
  }
  static indexOfSubstringIgnoreCase(input79, input80, input81, input82) {
    let matchLocal79 = input79.toLowerCase(),
      matchLocal80 = input80.toLowerCase(),
      matchLocal81 = matchLocal79.indexOf(matchLocal80, input81);
    return matchLocal81 < 0 || matchLocal81 + input80.length > input82
      ? -1
      : matchLocal81;
  }
  static regionMatchesIgnoreCase(input99, input100, input101, input102) {
    return input100 + input101 > input99.length
      ? false
      : input99.slice(input100, input100 + input101).toLowerCase() ===
          input102.toLowerCase();
  }
  static stripWildcards(input120) {
    let matchLocal93 = "";
    for (let matchLocal104 of input120)
      matchLocal104 !== "*" && (matchLocal93 += matchLocal104);
    return matchLocal93;
  }
  static prependMatchedRange(input31, input32, input33) {
    if (input31.length === 0)
      return [
        {
          startOffset: input32,
          endOffset: input32 + input33,
        },
      ];
    let matchLocal57 = input31[input31.length - 1];
    return (
      matchLocal57.startOffset === input32 + input33
        ? (input31[input31.length - 1] = {
            startOffset: input32,
            endOffset: matchLocal57.endOffset,
          })
        : input31.push({
            startOffset: input32,
            endOffset: input32 + input33,
          }),
      input31
    );
  }
  static isAsciiSingleChar(input126) {
    return input126.length === 1 && input126.charCodeAt(0) <= 127;
  }
  static isUpperCaseLetter(input121) {
    return (
      input121.toUpperCase() === input121 && input121.toLowerCase() !== input121
    );
  }
  static isLowerCaseLetter(input122) {
    return (
      input122.toLowerCase() === input122 && input122.toUpperCase() !== input122
    );
  }
  static isDigit(input131) {
    return input131 >= "0" && input131 <= "9";
  }
  static isAsciiAlphaNumeric(input129) {
    return /[a-z0-9]/i.test(input129);
  }
}
