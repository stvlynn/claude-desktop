// Restored from ref/webview/assets/union-8iT5ANuG.js
// Union chunk restored from the Codex webview bundle.
import {
  reduceN as _reduceS,
  reduceE as reduceA,
  reduceS as reduceB,
  _reduceC,
  reduceA as reduceE,
  reduceG,
  reduceN,
  _reduceT,
  reduceW,
  reduceX,
} from "./lodash-reduce";
import {
  baseForE,
  baseForG,
  baseForH,
  baseForL,
  baseForP,
  baseForU,
  baseForV,
  baseForW,
} from "./lodash-base-for";
import { isEmptyN } from "./lodash-is-empty";
import {
  mergeA,
  mergeC,
  mergeF,
  mergeI,
  mergeN,
  mergeO,
  mergeP,
  mergeR,
  mergeS,
  mergeU,
  mergeUnderscore,
} from "./lodash-merge";
function unionHelper1(unionParam21, unionParam22) {
  return (
    unionParam21 && mergeF(unionParam22, reduceX(unionParam22), unionParam21)
  );
}
function unionHelper2(unionParam23, unionParam24) {
  return (
    unionParam23 && mergeF(unionParam24, mergeC(unionParam24), unionParam23)
  );
}
function unionHelper3(unionParam27, unionParam28) {
  return mergeF(unionParam27, reduceN(unionParam27), unionParam28);
}
var unionValue1 = Object.getOwnPropertySymbols
  ? function (unionParam14) {
      for (var unionValue74 = []; unionParam14; ) {
        _reduceT(unionValue74, reduceN(unionParam14));
        unionParam14 = mergeS(unionParam14);
      }
      return unionValue74;
    }
  : _reduceC;
function unionHelper4(unionParam29, unionParam30) {
  return mergeF(unionParam29, unionValue1(unionParam29), unionParam30);
}
function unionHelper5(unionParam33) {
  return reduceW(unionParam33, mergeC, unionValue1);
}
var unionValue2 = Object.prototype.hasOwnProperty;
function unionHelper6(unionParam10) {
  var unionValue70 = unionParam10.length,
    unionValue71 = new unionParam10.constructor(unionValue70);
  return (
    unionValue70 &&
      typeof unionParam10[0] == "string" &&
      unionValue2.call(unionParam10, "index") &&
      ((unionValue71.index = unionParam10.index),
      (unionValue71.input = unionParam10.input)),
    unionValue71
  );
}
function unionHelper7(unionParam11, unionParam12) {
  var unionValue72 = unionParam12
    ? mergeA(unionParam11.buffer)
    : unionParam11.buffer;
  return new unionParam11.constructor(
    unionValue72,
    unionParam11.byteOffset,
    unionParam11.byteLength,
  );
}
var unionValue3 = /\w*$/;
function unionHelper8(unionParam13) {
  var unionValue73 = new unionParam13.constructor(
    unionParam13.source,
    unionValue3.exec(unionParam13),
  );
  return ((unionValue73.lastIndex = unionParam13.lastIndex), unionValue73);
}
var unionValue4 = baseForE ? baseForE.prototype : undefined,
  unionValue5 = unionValue4 ? unionValue4.valueOf : undefined;
function unionHelper9(unionParam19) {
  return unionValue5 ? Object(unionValue5.call(unionParam19)) : {};
}
function _e(unionParam7, unionParam8, unionParam9) {
  var unionValue69 = unionParam7.constructor;
  switch (unionParam8) {
    case "[object ArrayBuffer]":
      return mergeA(unionParam7);
    case "[object Boolean]":
    case "[object Date]":
      return new unionValue69(+unionParam7);
    case "[object DataView]":
      return unionHelper7(unionParam7, unionParam9);
    case "[object Float32Array]":
    case "[object Float64Array]":
    case "[object Int8Array]":
    case "[object Int16Array]":
    case "[object Int32Array]":
    case "[object Uint8Array]":
    case "[object Uint8ClampedArray]":
    case "[object Uint16Array]":
    case "[object Uint32Array]":
      return mergeI(unionParam7, unionParam9);
    case "[object Map]":
      return new unionValue69();
    case "[object Number]":
    case "[object String]":
      return new unionValue69(unionParam7);
    case "[object RegExp]":
      return unionHelper8(unionParam7);
    case "[object Set]":
      return new unionValue69();
    case "[object Symbol]":
      return unionHelper9(unionParam7);
  }
}
function unionHelper10(unionParam25) {
  return baseForH(unionParam25) && isEmptyN(unionParam25) == "[object Map]";
}
var unionValue26 = baseForL && baseForL.isMap,
  be = unionValue26 ? baseForU(unionValue26) : unionHelper10;
function unionHelper11(unionParam26) {
  return baseForH(unionParam26) && isEmptyN(unionParam26) == "[object Set]";
}
var unionValue28 = baseForL && baseForL.isSet,
  unionValue29 = unionValue28 ? baseForU(unionValue28) : unionHelper11,
  unionValue59 = {};
unionValue59["[object Arguments]"] =
  unionValue59["[object Array]"] =
  unionValue59["[object ArrayBuffer]"] =
  unionValue59["[object DataView]"] =
  unionValue59["[object Boolean]"] =
  unionValue59["[object Date]"] =
  unionValue59["[object Float32Array]"] =
  unionValue59["[object Float64Array]"] =
  unionValue59["[object Int8Array]"] =
  unionValue59["[object Int16Array]"] =
  unionValue59["[object Int32Array]"] =
  unionValue59["[object Map]"] =
  unionValue59["[object Number]"] =
  unionValue59["[object Object]"] =
  unionValue59["[object RegExp]"] =
  unionValue59["[object Set]"] =
  unionValue59["[object String]"] =
  unionValue59["[object Symbol]"] =
  unionValue59["[object Uint8Array]"] =
  unionValue59["[object Uint8ClampedArray]"] =
  unionValue59["[object Uint16Array]"] =
  unionValue59["[object Uint32Array]"] =
    true;
unionValue59["[object Error]"] =
  unionValue59["[object Function]"] =
  unionValue59["[object WeakMap]"] =
    false;
function unionI(
  unionParam1,
  unionParam2,
  unionParam3,
  unionParam4,
  unionParam5,
  unionParam6,
) {
  var unionValue60,
    unionValue61 = unionParam2 & 1,
    unionValue62 = unionParam2 & 2,
    unionValue63 = unionParam2 & 4;
  if (
    (unionParam3 &&
      (unionValue60 = unionParam5
        ? unionParam3(unionParam1, unionParam4, unionParam5, unionParam6)
        : unionParam3(unionParam1)),
    unionValue60 !== undefined)
  )
    return unionValue60;
  if (!baseForW(unionParam1)) return unionParam1;
  var unionValue64 = baseForG(unionParam1);
  if (unionValue64) {
    if (((unionValue60 = unionHelper6(unionParam1)), !unionValue61))
      return mergeUnderscore(unionParam1, unionValue60);
  } else {
    var unionValue65 = isEmptyN(unionParam1),
      unionValue66 =
        unionValue65 == "[object Function]" ||
        unionValue65 == "[object GeneratorFunction]";
    if (baseForP(unionParam1)) return mergeO(unionParam1, unionValue61);
    if (
      unionValue65 == "[object Object]" ||
      unionValue65 == "[object Arguments]" ||
      (unionValue66 && !unionParam5)
    ) {
      if (
        ((unionValue60 =
          unionValue62 || unionValue66 ? {} : mergeR(unionParam1)),
        !unionValue61)
      )
        return unionValue62
          ? unionHelper4(unionParam1, unionHelper2(unionValue60, unionParam1))
          : unionHelper3(unionParam1, unionHelper1(unionValue60, unionParam1));
    } else {
      if (!unionValue59[unionValue65]) return unionParam5 ? unionParam1 : {};
      unionValue60 = _e(unionParam1, unionValue65, unionValue61);
    }
  }
  unionParam6 ||= new baseForV();
  var unionValue67 = unionParam6.get(unionParam1);
  if (unionValue67) return unionValue67;
  unionParam6.set(unionParam1, unionValue60);
  unionValue29(unionParam1)
    ? unionParam1.forEach(function (item) {
        unionValue60.add(
          unionI(
            item,
            unionParam2,
            unionParam3,
            item,
            unionParam1,
            unionParam6,
          ),
        );
      })
    : be(unionParam1) &&
      unionParam1.forEach(function (item, index) {
        unionValue60.set(
          index,
          unionI(
            item,
            unionParam2,
            unionParam3,
            index,
            unionParam1,
            unionParam6,
          ),
        );
      });
  var unionValue68 = unionValue64
    ? undefined
    : (unionValue63
        ? unionValue62
          ? unionHelper5
          : reduceB
        : unionValue62
          ? mergeC
          : reduceX)(unionParam1);
  return (
    reduceG(unionValue68 || unionParam1, function (unionParam17, unionParam18) {
      unionValue68 &&
        ((unionParam18 = unionParam17),
        (unionParam17 = unionParam1[unionParam18]));
      mergeP(
        unionValue60,
        unionParam18,
        unionI(
          unionParam17,
          unionParam2,
          unionParam3,
          unionParam18,
          unionParam1,
          unionParam6,
        ),
      );
    }),
    unionValue60
  );
}
function unionHelper12(unionParam15, unionParam16) {
  return reduceE(unionParam16, function (unionParam34) {
    return unionParam15[unionParam34];
  });
}
export function unionR(unionParam20) {
  return unionParam20 == null
    ? []
    : unionHelper12(unionParam20, reduceX(unionParam20));
}
export function unionN(unionParam32) {
  return unionParam32 === undefined;
}
export const unionT = mergeU(function (unionParam31) {
  return reduceA(_reduceS(unionParam31, 1, mergeN, true));
});
export { unionI };
