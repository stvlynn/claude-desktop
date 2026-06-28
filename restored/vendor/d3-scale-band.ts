// Restored from ref/webview/assets/band-DVYrpIoC.js
// Band chunk restored from the Codex webview bundle.
import { Ordinal } from "../utils/ordinal";
import { init } from "../utils/init";
function bandR(bandParam1, bandParam2, _bandR) {
  bandParam1 = +bandParam1;
  bandParam2 = +bandParam2;
  _bandR =
    (bandValue15 = arguments.length) < 2
      ? ((bandParam2 = bandParam1), (bandParam1 = 0), 1)
      : bandValue15 < 3
        ? 1
        : +_bandR;
  for (
    var _bandT = -1,
      bandValue15 =
        Math.max(0, Math.ceil((bandParam2 - bandParam1) / _bandR)) | 0,
      _bandN = Array(bandValue15);
    ++_bandT < bandValue15;

  )
    _bandN[_bandT] = bandParam1 + _bandT * _bandR;
  return _bandN;
}
function bandT() {
  var bandValue1 = Ordinal().unknown(undefined),
    _bandN = bandValue1.domain,
    bandValue2 = bandValue1.range,
    bandValue3 = 0,
    bandValue4 = 1,
    bandValue5,
    bandValue6,
    bandValue7 = false,
    bandValue8 = 0,
    bandValue9 = 0,
    bandValue10 = 0.5;
  delete bandValue1.unknown;
  function bandHelper2() {
    var bandValue11 = _bandN().length,
      bandValue12 = bandValue4 < bandValue3,
      _bandT = bandValue12 ? bandValue4 : bandValue3,
      bandValue13 = bandValue12 ? bandValue3 : bandValue4;
    bandValue5 =
      (bandValue13 - _bandT) /
      Math.max(1, bandValue11 - bandValue8 + bandValue9 * 2);
    bandValue7 && (bandValue5 = Math.floor(bandValue5));
    _bandT +=
      (bandValue13 - _bandT - bandValue5 * (bandValue11 - bandValue8)) *
      bandValue10;
    bandValue6 = bandValue5 * (1 - bandValue8);
    bandValue7 &&
      ((_bandT = Math.round(_bandT)), (bandValue6 = Math.round(bandValue6)));
    var bandValue14 = bandR(bandValue11).map(function (item) {
      return _bandT + bandValue5 * item;
    });
    return bandValue2(bandValue12 ? bandValue14.reverse() : bandValue14);
  }
  return (
    (bandValue1.domain = function (bandParam11) {
      return arguments.length ? (_bandN(bandParam11), bandHelper2()) : _bandN();
    }),
    (bandValue1.range = function (bandParam4) {
      return arguments.length
        ? (([bandValue3, bandValue4] = bandParam4),
          (bandValue3 = +bandValue3),
          (bandValue4 = +bandValue4),
          bandHelper2())
        : [bandValue3, bandValue4];
    }),
    (bandValue1.rangeRound = function (bandParam8) {
      return (
        ([bandValue3, bandValue4] = bandParam8),
        (bandValue3 = +bandValue3),
        (bandValue4 = +bandValue4),
        (bandValue7 = true),
        bandHelper2()
      );
    }),
    (bandValue1.bandwidth = function () {
      return bandValue6;
    }),
    (bandValue1.step = function () {
      return bandValue5;
    }),
    (bandValue1.round = function (bandParam9) {
      return arguments.length
        ? ((bandValue7 = !!bandParam9), bandHelper2())
        : bandValue7;
    }),
    (bandValue1.padding = function (bandParam6) {
      return arguments.length
        ? ((bandValue8 = Math.min(1, (bandValue9 = +bandParam6))),
          bandHelper2())
        : bandValue8;
    }),
    (bandValue1.paddingInner = function (bandParam7) {
      return arguments.length
        ? ((bandValue8 = Math.min(1, bandParam7)), bandHelper2())
        : bandValue8;
    }),
    (bandValue1.paddingOuter = function (bandParam10) {
      return arguments.length
        ? ((bandValue9 = +bandParam10), bandHelper2())
        : bandValue9;
    }),
    (bandValue1.align = function (bandParam5) {
      return arguments.length
        ? ((bandValue10 = Math.max(0, Math.min(1, bandParam5))), bandHelper2())
        : bandValue10;
    }),
    (bandValue1.copy = function () {
      return bandT(_bandN(), [bandValue3, bandValue4])
        .round(bandValue7)
        .paddingInner(bandValue8)
        .paddingOuter(bandValue9)
        .align(bandValue10);
    }),
    init.apply(bandHelper2(), arguments)
  );
}
function bandHelper1(bandParam3) {
  var bandValue16 = bandParam3.copy;
  return (
    (bandParam3.padding = bandParam3.paddingOuter),
    delete bandParam3.paddingInner,
    delete bandParam3.paddingOuter,
    (bandParam3.copy = function () {
      return bandHelper1(bandValue16());
    }),
    bandParam3
  );
}
export function bandN() {
  return bandHelper1(bandT.apply(null, arguments).paddingInner(1));
}
export { bandR, bandT };
