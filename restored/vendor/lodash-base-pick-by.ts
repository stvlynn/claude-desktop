// Restored from ref/webview/assets/_basePickBy-X1_M8KZ0.js
// BasePickBy chunk restored from the Codex webview bundle.
import {
  isArrayLikeObjectA,
  isArrayLikeObjectB,
  isArrayLikeObjectC,
  isArrayLikeObjectE,
  isArrayLikeObjectH,
  isArrayLikeObjectK,
  isArrayLikeObjectM,
  _isArrayLikeObjectP,
  isArrayLikeObjectU,
  isArrayLikeObjectV,
  _isArrayLikeObjectW,
} from "./lodash-array-like-object";
import {
  _baseUniqS,
  _baseUniqA,
  baseUniqI,
  baseUniqT as baseUniqF,
  baseUniqB,
  _baseUniqN,
  _baseUniqT,
  baseUniqC,
  baseUniqD,
  baseUniqU,
  baseUniqW,
} from "./lodash-base-uniq";
var basePickByValue1 = /\s/;
function basePickByHelper1(basePickByParam22) {
  for (
    var basePickByValue47 = basePickByParam22.length;
    basePickByValue47-- &&
    basePickByValue1.test(basePickByParam22.charAt(basePickByValue47));

  );
  return basePickByValue47;
}
var basePickByValue2 = /^\s+/;
function basePickByHelper2(basePickByParam25) {
  return (
    basePickByParam25 &&
    basePickByParam25
      .slice(0, basePickByHelper1(basePickByParam25) + 1)
      .replace(basePickByValue2, "")
  );
}
var basePickByValue3 = NaN,
  basePickByValue4 = /^[-+]0x[0-9a-f]+$/i,
  basePickByValue5 = /^0b[01]+$/i,
  basePickByValue6 = /^0o[0-7]+$/i,
  basePickByValue7 = parseInt;
function basePickByHelper3(basePickByParam7) {
  if (typeof basePickByParam7 == "number") return basePickByParam7;
  if (_baseUniqT(basePickByParam7)) return basePickByValue3;
  if (isArrayLikeObjectB(basePickByParam7)) {
    var basePickByValue31 =
      typeof basePickByParam7.valueOf == "function"
        ? basePickByParam7.valueOf()
        : basePickByParam7;
    basePickByParam7 = isArrayLikeObjectB(basePickByValue31)
      ? basePickByValue31 + ""
      : basePickByValue31;
  }
  if (typeof basePickByParam7 != "string")
    return basePickByParam7 === 0 ? basePickByParam7 : +basePickByParam7;
  basePickByParam7 = basePickByHelper2(basePickByParam7);
  var basePickByValue32 = basePickByValue5.test(basePickByParam7);
  return basePickByValue32 || basePickByValue6.test(basePickByParam7)
    ? basePickByValue7(basePickByParam7.slice(2), basePickByValue32 ? 2 : 8)
    : basePickByValue4.test(basePickByParam7)
      ? basePickByValue3
      : +basePickByParam7;
}
var basePickByValue8 = 1 / 0;
function basePickByD(basePickByParam20) {
  return basePickByParam20
    ? ((basePickByParam20 = basePickByHelper3(basePickByParam20)),
      basePickByParam20 === basePickByValue8 ||
      basePickByParam20 === -basePickByValue8
        ? (basePickByParam20 < 0 ? -1 : 1) * 17976931348623157e292
        : basePickByParam20 === basePickByParam20
          ? basePickByParam20
          : 0)
    : basePickByParam20 === 0
      ? basePickByParam20
      : 0;
}
function basePickByU(basePickByParam21) {
  var basePickByValue45 = basePickByD(basePickByParam21),
    basePickByValue46 = basePickByValue45 % 1;
  return basePickByValue45 === basePickByValue45
    ? basePickByValue46
      ? basePickByValue45 - basePickByValue46
      : basePickByValue45
    : 0;
}
export function basePickByL(basePickByParam26) {
  return basePickByParam26 != null && basePickByParam26.length
    ? baseUniqC(basePickByParam26, 1)
    : [];
}
var basePickByValue10 = Object.prototype,
  basePickByValue11 = basePickByValue10.hasOwnProperty;
export const basePickByC = isArrayLikeObjectE(
  function (basePickByParam5, basePickByParam6) {
    basePickByParam5 = Object(basePickByParam5);
    var basePickByValue22 = -1,
      basePickByValue23 = basePickByParam6.length,
      basePickByValue24 =
        basePickByValue23 > 2 ? basePickByParam6[2] : undefined;
    for (
      basePickByValue24 &&
      isArrayLikeObjectC(
        basePickByParam6[0],
        basePickByParam6[1],
        basePickByValue24,
      ) &&
      (basePickByValue23 = 1);
      ++basePickByValue22 < basePickByValue23;

    )
      for (
        var basePickByValue25 = basePickByParam6[basePickByValue22],
          basePickByValue26 = _isArrayLikeObjectP(basePickByValue25),
          basePickByValue27 = -1,
          basePickByValue28 = basePickByValue26.length;
        ++basePickByValue27 < basePickByValue28;

      ) {
        var basePickByValue29 = basePickByValue26[basePickByValue27],
          basePickByValue30 = basePickByParam5[basePickByValue29];
        (basePickByValue30 === undefined ||
          (isArrayLikeObjectA(
            basePickByValue30,
            basePickByValue10[basePickByValue29],
          ) &&
            !basePickByValue11.call(basePickByParam5, basePickByValue29))) &&
          (basePickByParam5[basePickByValue29] =
            basePickByValue25[basePickByValue29]);
      }
    return basePickByParam5;
  },
);
export function basePickByS(basePickByParam23) {
  var basePickByValue48 =
    basePickByParam23 == null ? 0 : basePickByParam23.length;
  return basePickByValue48
    ? basePickByParam23[basePickByValue48 - 1]
    : undefined;
}
function basePickByHelper4(basePickByParam8) {
  return function (basePickByParam9, basePickByParam10, basePickByParam11) {
    var basePickByValue33 = Object(basePickByParam9);
    if (!_isArrayLikeObjectW(basePickByParam9)) {
      var basePickByValue34 = baseUniqF(basePickByParam10, 3);
      basePickByParam9 = baseUniqI(basePickByParam9);
      basePickByParam10 = function (basePickByParam29) {
        return basePickByValue34(
          basePickByValue33[basePickByParam29],
          basePickByParam29,
          basePickByValue33,
        );
      };
    }
    var basePickByValue35 = basePickByParam8(
      basePickByParam9,
      basePickByParam10,
      basePickByParam11,
    );
    return basePickByValue35 > -1
      ? basePickByValue33[
          basePickByValue34
            ? basePickByParam9[basePickByValue35]
            : basePickByValue35
        ]
      : undefined;
  };
}
var basePickByValue12 = Math.max;
function basePickByHelper5(
  basePickByParam12,
  basePickByParam13,
  basePickByParam14,
) {
  var basePickByValue36 =
    basePickByParam12 == null ? 0 : basePickByParam12.length;
  if (!basePickByValue36) return -1;
  var basePickByValue37 =
    basePickByParam14 == null ? 0 : basePickByU(basePickByParam14);
  return (
    basePickByValue37 < 0 &&
      (basePickByValue37 = basePickByValue12(
        basePickByValue36 + basePickByValue37,
        0,
      )),
    _baseUniqS(
      basePickByParam12,
      baseUniqF(basePickByParam13, 3),
      basePickByValue37,
    )
  );
}
export const basePickByO = basePickByHelper4(basePickByHelper5);
function basePickByA(basePickByParam18, basePickByParam19) {
  var basePickByValue43 = -1,
    basePickByValue44 = _isArrayLikeObjectW(basePickByParam18)
      ? Array(basePickByParam18.length)
      : [];
  return (
    baseUniqU(
      basePickByParam18,
      function (basePickByParam34, basePickByParam35, basePickByParam36) {
        basePickByValue44[++basePickByValue43] = basePickByParam19(
          basePickByParam34,
          basePickByParam35,
          basePickByParam36,
        );
      },
    ),
    basePickByValue44
  );
}
export function basePickByI(basePickByParam27, basePickByParam28) {
  return (isArrayLikeObjectV(basePickByParam27) ? _baseUniqN : basePickByA)(
    basePickByParam27,
    baseUniqF(basePickByParam28, 3),
  );
}
var basePickByValue13 = Object.prototype.hasOwnProperty;
function basePickByHelper6(basePickByParam30, basePickByParam31) {
  return (
    basePickByParam30 != null &&
    basePickByValue13.call(basePickByParam30, basePickByParam31)
  );
}
export function basePickByR(basePickByParam32, basePickByParam33) {
  return (
    basePickByParam32 != null &&
    baseUniqB(basePickByParam32, basePickByParam33, basePickByHelper6)
  );
}
export function basePickByN(basePickByParam24) {
  return (
    typeof basePickByParam24 == "string" ||
    (!isArrayLikeObjectV(basePickByParam24) &&
      isArrayLikeObjectH(basePickByParam24) &&
      isArrayLikeObjectU(basePickByParam24) == "[object String]")
  );
}
function basePickByHelper7(
  basePickByParam1,
  basePickByParam2,
  basePickByParam3,
  basePickByParam4,
) {
  if (!isArrayLikeObjectB(basePickByParam1)) return basePickByParam1;
  basePickByParam2 = baseUniqD(basePickByParam2, basePickByParam1);
  for (
    var basePickByValue15 = -1,
      basePickByValue16 = basePickByParam2.length,
      basePickByValue17 = basePickByValue16 - 1,
      basePickByValue18 = basePickByParam1;
    basePickByValue18 != null && ++basePickByValue15 < basePickByValue16;

  ) {
    var basePickByValue19 = baseUniqW(basePickByParam2[basePickByValue15]),
      basePickByValue20 = basePickByParam3;
    if (
      basePickByValue19 === "__proto__" ||
      basePickByValue19 === "constructor" ||
      basePickByValue19 === "prototype"
    )
      return basePickByParam1;
    if (basePickByValue15 != basePickByValue17) {
      var basePickByValue21 = basePickByValue18[basePickByValue19];
      basePickByValue20 = basePickByParam4
        ? basePickByParam4(
            basePickByValue21,
            basePickByValue19,
            basePickByValue18,
          )
        : undefined;
      basePickByValue20 === undefined &&
        (basePickByValue20 = isArrayLikeObjectB(basePickByValue21)
          ? basePickByValue21
          : isArrayLikeObjectM(basePickByParam2[basePickByValue15 + 1])
            ? []
            : {});
    }
    isArrayLikeObjectK(basePickByValue18, basePickByValue19, basePickByValue20);
    basePickByValue18 = basePickByValue18[basePickByValue19];
  }
  return basePickByParam1;
}
export function basePickByT(
  basePickByParam15,
  basePickByParam16,
  basePickByParam17,
) {
  for (
    var basePickByValue38 = -1,
      basePickByValue39 = basePickByParam16.length,
      basePickByValue40 = {};
    ++basePickByValue38 < basePickByValue39;

  ) {
    var basePickByValue41 = basePickByParam16[basePickByValue38],
      basePickByValue42 = _baseUniqA(basePickByParam15, basePickByValue41);
    basePickByParam17(basePickByValue42, basePickByValue41) &&
      basePickByHelper7(
        basePickByValue40,
        baseUniqD(basePickByValue41, basePickByParam15),
        basePickByValue42,
      );
  }
  return basePickByValue40;
}
export { basePickByA, basePickByD, basePickByU };
