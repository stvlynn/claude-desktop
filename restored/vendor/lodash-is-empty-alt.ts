// Restored from ref/webview/assets/isEmpty-CTfqpukK.js
// IsEmpty chunk restored from the Codex webview bundle.
import {
  isArrayLikeObjectG as _isArrayLikeObjectG,
  _isArrayLikeObjectB,
  _isArrayLikeObjectF,
  isArrayLikeObjectG,
  isArrayLikeObjectI,
  isArrayLikeObjectL,
  _isArrayLikeObjectM,
  isArrayLikeObjectU,
  isArrayLikeObjectV,
  _isArrayLikeObjectW,
  isArrayLikeObjectX,
  isArrayLikeObjectY,
} from "./lodash-array-like-object";
var isEmptyValue1 = isArrayLikeObjectI(isArrayLikeObjectG, "WeakMap"),
  isEmptyValue2 = _isArrayLikeObjectM(Object.keys, Object),
  isEmptyValue3 = Object.prototype.hasOwnProperty;
function isEmptyI(isEmptyParam3) {
  if (!isArrayLikeObjectX(isEmptyParam3)) return isEmptyValue2(isEmptyParam3);
  var isEmptyValue26 = [];
  for (var isEmptyValue27 in Object(isEmptyParam3))
    isEmptyValue3.call(isEmptyParam3, isEmptyValue27) &&
      isEmptyValue27 != "constructor" &&
      isEmptyValue26.push(isEmptyValue27);
  return isEmptyValue26;
}
var isEmptyValue4 = isArrayLikeObjectI(isArrayLikeObjectG, "DataView"),
  isEmptyValue5 = isArrayLikeObjectI(isArrayLikeObjectG, "Promise"),
  isEmptyR = isArrayLikeObjectI(isArrayLikeObjectG, "Set"),
  isEmptyValue12 = isArrayLikeObjectL(isEmptyValue4),
  isEmptyValue13 = isArrayLikeObjectL(_isArrayLikeObjectF),
  isEmptyValue14 = isArrayLikeObjectL(isEmptyValue5),
  isEmptyValue15 = isArrayLikeObjectL(isEmptyR),
  isEmptyValue16 = isArrayLikeObjectL(isEmptyValue1),
  isEmptyValue17 = isArrayLikeObjectU;
((isEmptyValue4 &&
  isEmptyValue17(new isEmptyValue4(new ArrayBuffer(1))) !=
    "[object DataView]") ||
  (_isArrayLikeObjectF &&
    isEmptyValue17(new _isArrayLikeObjectF()) != "[object Map]") ||
  (isEmptyValue5 &&
    isEmptyValue17(isEmptyValue5.resolve()) != "[object Promise]") ||
  (isEmptyR && isEmptyValue17(new isEmptyR()) != "[object Set]") ||
  (isEmptyValue1 &&
    isEmptyValue17(new isEmptyValue1()) != "[object WeakMap]")) &&
  (isEmptyValue17 = function (isEmptyParam2) {
    var isEmptyValue23 = isArrayLikeObjectU(isEmptyParam2),
      isEmptyValue24 =
        isEmptyValue23 == "[object Object]"
          ? isEmptyParam2.constructor
          : undefined,
      isEmptyValue25 = isEmptyValue24 ? isArrayLikeObjectL(isEmptyValue24) : "";
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
    _isArrayLikeObjectW(isEmptyParam1) &&
    (isArrayLikeObjectV(isEmptyParam1) ||
      typeof isEmptyParam1 == "string" ||
      typeof isEmptyParam1.splice == "function" ||
      isArrayLikeObjectY(isEmptyParam1) ||
      _isArrayLikeObjectG(isEmptyParam1) ||
      _isArrayLikeObjectB(isEmptyParam1))
  )
    return !isEmptyParam1.length;
  var isEmptyValue21 = isEmptyN(isEmptyParam1);
  if (isEmptyValue21 == "[object Map]" || isEmptyValue21 == "[object Set]")
    return !isEmptyParam1.size;
  if (isArrayLikeObjectX(isEmptyParam1)) return !isEmptyI(isEmptyParam1).length;
  for (var isEmptyValue22 in isEmptyParam1)
    if (isEmptyValue20.call(isEmptyParam1, isEmptyValue22)) return false;
  return true;
}
export { isEmptyI, isEmptyN, isEmptyR };
