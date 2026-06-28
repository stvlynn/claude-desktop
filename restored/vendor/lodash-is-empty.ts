// Restored from ref/webview/assets/isEmpty-CKN2Jii3.js
// IsEmpty chunk restored from the Codex webview bundle.
import {
  baseForA,
  baseForB,
  baseForC,
  baseForD,
  baseForG,
  baseForI,
  baseForM,
  baseForO,
  baseForP,
  baseForS,
  baseForT,
  baseForX,
} from "./lodash-base-for";
var isEmptyValue1 = baseForA(Object.keys, Object),
  isEmptyValue2 = Object.prototype.hasOwnProperty;
function isEmptyI(isEmptyParam3) {
  if (!baseForO(isEmptyParam3)) return isEmptyValue1(isEmptyParam3);
  var isEmptyValue26 = [];
  for (var isEmptyValue27 in Object(isEmptyParam3))
    isEmptyValue2.call(isEmptyParam3, isEmptyValue27) &&
      isEmptyValue27 != "constructor" &&
      isEmptyValue26.push(isEmptyValue27);
  return isEmptyValue26;
}
var isEmptyValue3 = baseForX(baseForD, "DataView"),
  isEmptyValue4 = baseForX(baseForD, "Promise"),
  isEmptyR = baseForX(baseForD, "Set"),
  isEmptyValue5 = baseForX(baseForD, "WeakMap"),
  isEmptyValue12 = baseForS(isEmptyValue3),
  isEmptyValue13 = baseForS(baseForB),
  isEmptyValue14 = baseForS(isEmptyValue4),
  isEmptyValue15 = baseForS(isEmptyR),
  isEmptyValue16 = baseForS(isEmptyValue5),
  isEmptyValue17 = baseForT;
((isEmptyValue3 &&
  isEmptyValue17(new isEmptyValue3(new ArrayBuffer(1))) !=
    "[object DataView]") ||
  (baseForB && isEmptyValue17(new baseForB()) != "[object Map]") ||
  (isEmptyValue4 &&
    isEmptyValue17(isEmptyValue4.resolve()) != "[object Promise]") ||
  (isEmptyR && isEmptyValue17(new isEmptyR()) != "[object Set]") ||
  (isEmptyValue5 &&
    isEmptyValue17(new isEmptyValue5()) != "[object WeakMap]")) &&
  (isEmptyValue17 = function (isEmptyParam2) {
    var isEmptyValue23 = baseForT(isEmptyParam2),
      isEmptyValue24 =
        isEmptyValue23 == "[object Object]"
          ? isEmptyParam2.constructor
          : undefined,
      isEmptyValue25 = isEmptyValue24 ? baseForS(isEmptyValue24) : "";
    if (isEmptyValue25)
      switch (isEmptyValue25) {
        case isEmptyValue12:
          return "[object DataView]";
        case isEmptyValue13:
          return "[object Map]";
        case isEmptyValue14:
          return "[object Promise]";
        case isEmptyValue15:
          return "[object Set]";
        case isEmptyValue16:
          return "[object WeakMap]";
      }
    return isEmptyValue23;
  });
var isEmptyN = isEmptyValue17,
  isEmptyValue20 = Object.prototype.hasOwnProperty;
export function isEmptyT(isEmptyParam1) {
  if (isEmptyParam1 == null) return true;
  if (
    baseForI(isEmptyParam1) &&
    (baseForG(isEmptyParam1) ||
      typeof isEmptyParam1 == "string" ||
      typeof isEmptyParam1.splice == "function" ||
      baseForP(isEmptyParam1) ||
      baseForC(isEmptyParam1) ||
      baseForM(isEmptyParam1))
  )
    return !isEmptyParam1.length;
  var isEmptyValue21 = isEmptyN(isEmptyParam1);
  if (isEmptyValue21 == "[object Map]" || isEmptyValue21 == "[object Set]")
    return !isEmptyParam1.size;
  if (baseForO(isEmptyParam1)) return !isEmptyI(isEmptyParam1).length;
  for (var isEmptyValue22 in isEmptyParam1)
    if (isEmptyValue20.call(isEmptyParam1, isEmptyValue22)) return false;
  return true;
}
export { isEmptyI, isEmptyN, isEmptyR };
