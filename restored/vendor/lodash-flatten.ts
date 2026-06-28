// Restored from ref/webview/assets/flatten-CdNmRCTf.js
// Flatten chunk restored from the Codex webview bundle.
import {
  reduceUnderscore,
  reduceA,
  reduceH,
  reduceR,
  reduceY,
} from "./lodash-reduce";
import { baseForG, baseForI, baseForN } from "./lodash-base-for";
function flattenO(flattenParam4, flattenParam5) {
  var flattenValue5 = -1,
    flattenValue6 = baseForI(flattenParam4) ? Array(flattenParam4.length) : [];
  return (
    reduceH(
      flattenParam4,
      function (flattenParam10, flattenParam11, flattenParam12) {
        flattenValue6[++flattenValue5] = flattenParam5(
          flattenParam10,
          flattenParam11,
          flattenParam12,
        );
      },
    ),
    flattenValue6
  );
}
export function flattenA(flattenParam8, flattenParam9) {
  return (baseForG(flattenParam8) ? reduceA : flattenO)(
    flattenParam8,
    reduceUnderscore(flattenParam9, 3),
  );
}
function flattenI(flattenParam1, flattenParam2, flattenParam3) {
  for (
    var flattenValue1 = -1, flattenValue2 = flattenParam1.length;
    ++flattenValue1 < flattenValue2;

  ) {
    var flattenValue3 = flattenParam1[flattenValue1],
      flattenValue4 = flattenParam2(flattenValue3);
    if (
      flattenValue4 != null &&
      (_flattenO === undefined
        ? flattenValue4 === flattenValue4 && !reduceY(flattenValue4)
        : flattenParam3(flattenValue4, _flattenO))
    )
      var _flattenO = flattenValue4,
        _flattenA = flattenValue3;
  }
  return _flattenA;
}
function flattenR(flattenParam13, flattenParam14) {
  return flattenParam13 < flattenParam14;
}
export function flattenN(flattenParam6) {
  return flattenParam6 && flattenParam6.length
    ? flattenI(flattenParam6, baseForN, flattenR)
    : undefined;
}
export function flattenT(flattenParam7) {
  return flattenParam7 != null && flattenParam7.length
    ? reduceR(flattenParam7, 1)
    : [];
}
export { flattenI, flattenO, flattenR };
