// Restored from ref/webview/assets/chunk-BSJP7CBP-CrJpo2xF.js
// Vendored Mermaid marker geometry helper restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
var chunkBSJP7CBPR = {
  aggregation: 17.25,
  extension: 17.25,
  composition: 17.25,
  dependency: 6,
  lollipop: 13.5,
  arrow_point: 4,
  arrow_barb: 0,
  arrow_barb_neo: 5.5,
};
export const chunkBSJP7CBPT = chunkAGHRB4JFN(
  (chunkBSJP7CBPParam4, _chunkBSJP7CBPT) => {
    if (_chunkBSJP7CBPT)
      return (
        "translate(" +
        -chunkBSJP7CBPParam4.width / 2 +
        ", " +
        -chunkBSJP7CBPParam4.height / 2 +
        ")"
      );
    let _chunkBSJP7CBPR = chunkBSJP7CBPParam4.x ?? 0,
      _chunkBSJP7CBPI = chunkBSJP7CBPParam4.y ?? 0;
    return (
      "translate(" +
      -(_chunkBSJP7CBPR + chunkBSJP7CBPParam4.width / 2) +
      ", " +
      -(_chunkBSJP7CBPI + chunkBSJP7CBPParam4.height / 2) +
      ")"
    );
  },
  "computeLabelTransform",
);
export const chunkBSJP7CBPI = {
  arrow_point: 4,
  arrow_cross: 12.5,
  arrow_circle: 12.5,
};
function chunkBSJP7CBPHelper1(chunkBSJP7CBPParam3, _chunkBSJP7CBPT) {
  if (chunkBSJP7CBPParam3 === undefined || _chunkBSJP7CBPT === undefined)
    return {
      angle: 0,
      deltaX: 0,
      deltaY: 0,
    };
  chunkBSJP7CBPParam3 = chunkBSJP7CBPValue1(chunkBSJP7CBPParam3);
  _chunkBSJP7CBPT = chunkBSJP7CBPValue1(_chunkBSJP7CBPT);
  let [_chunkBSJP7CBPR, _chunkBSJP7CBPI] = [
      chunkBSJP7CBPParam3.x,
      chunkBSJP7CBPParam3.y,
    ],
    [chunkBSJP7CBPValue18, _chunkBSJP7CBPN] = [
      _chunkBSJP7CBPT.x,
      _chunkBSJP7CBPT.y,
    ],
    chunkBSJP7CBPValue19 = chunkBSJP7CBPValue18 - _chunkBSJP7CBPR,
    chunkBSJP7CBPValue20 = _chunkBSJP7CBPN - _chunkBSJP7CBPI;
  return {
    angle: Math.atan(chunkBSJP7CBPValue20 / chunkBSJP7CBPValue19),
    deltaX: chunkBSJP7CBPValue19,
    deltaY: chunkBSJP7CBPValue20,
  };
}
chunkAGHRB4JFN(chunkBSJP7CBPHelper1, "calculateDeltaAndAngle");
var chunkBSJP7CBPValue1 = chunkAGHRB4JFN(
  (chunkBSJP7CBPParam5) =>
    Array.isArray(chunkBSJP7CBPParam5)
      ? {
          x: chunkBSJP7CBPParam5[0],
          y: chunkBSJP7CBPParam5[1],
        }
      : chunkBSJP7CBPParam5,
  "pointTransformer",
);
export const chunkBSJP7CBPN = chunkAGHRB4JFN(
  (_chunkBSJP7CBPT) => ({
    x: chunkAGHRB4JFN(function (
      chunkBSJP7CBPParam2,
      _chunkBSJP7CBPI,
      _chunkBSJP7CBPN,
    ) {
      let chunkBSJP7CBPValue10 = 0,
        chunkBSJP7CBPValue11 =
          chunkBSJP7CBPValue1(_chunkBSJP7CBPN[0]).x <
          chunkBSJP7CBPValue1(_chunkBSJP7CBPN[_chunkBSJP7CBPN.length - 1]).x
            ? "left"
            : "right";
      if (
        _chunkBSJP7CBPI === 0 &&
        Object.hasOwn(chunkBSJP7CBPR, _chunkBSJP7CBPT.arrowTypeStart)
      ) {
        let { angle, deltaX: __chunkBSJP7CBPI } = chunkBSJP7CBPHelper1(
          _chunkBSJP7CBPN[0],
          _chunkBSJP7CBPN[1],
        );
        chunkBSJP7CBPValue10 =
          chunkBSJP7CBPR[_chunkBSJP7CBPT.arrowTypeStart] *
          Math.cos(angle) *
          (__chunkBSJP7CBPI >= 0 ? 1 : -1);
      } else if (
        _chunkBSJP7CBPI === _chunkBSJP7CBPN.length - 1 &&
        Object.hasOwn(chunkBSJP7CBPR, _chunkBSJP7CBPT.arrowTypeEnd)
      ) {
        let { angle, deltaX: __chunkBSJP7CBPI } = chunkBSJP7CBPHelper1(
          _chunkBSJP7CBPN[_chunkBSJP7CBPN.length - 1],
          _chunkBSJP7CBPN[_chunkBSJP7CBPN.length - 2],
        );
        chunkBSJP7CBPValue10 =
          chunkBSJP7CBPR[_chunkBSJP7CBPT.arrowTypeEnd] *
          Math.cos(angle) *
          (__chunkBSJP7CBPI >= 0 ? 1 : -1);
      }
      let chunkBSJP7CBPValue12 = Math.abs(
          chunkBSJP7CBPValue1(chunkBSJP7CBPParam2).x -
            chunkBSJP7CBPValue1(_chunkBSJP7CBPN[_chunkBSJP7CBPN.length - 1]).x,
        ),
        chunkBSJP7CBPValue13 = Math.abs(
          chunkBSJP7CBPValue1(chunkBSJP7CBPParam2).y -
            chunkBSJP7CBPValue1(_chunkBSJP7CBPN[_chunkBSJP7CBPN.length - 1]).y,
        ),
        chunkBSJP7CBPValue14 = Math.abs(
          chunkBSJP7CBPValue1(chunkBSJP7CBPParam2).x -
            chunkBSJP7CBPValue1(_chunkBSJP7CBPN[0]).x,
        ),
        chunkBSJP7CBPValue15 = Math.abs(
          chunkBSJP7CBPValue1(chunkBSJP7CBPParam2).y -
            chunkBSJP7CBPValue1(_chunkBSJP7CBPN[0]).y,
        ),
        chunkBSJP7CBPValue16 = chunkBSJP7CBPR[_chunkBSJP7CBPT.arrowTypeStart],
        chunkBSJP7CBPValue17 = chunkBSJP7CBPR[_chunkBSJP7CBPT.arrowTypeEnd];
      if (
        chunkBSJP7CBPValue12 < chunkBSJP7CBPValue17 &&
        chunkBSJP7CBPValue12 > 0 &&
        chunkBSJP7CBPValue13 < chunkBSJP7CBPValue17
      ) {
        let chunkBSJP7CBPValue21 =
          chunkBSJP7CBPValue17 + 1 - chunkBSJP7CBPValue12;
        chunkBSJP7CBPValue21 *= chunkBSJP7CBPValue11 === "right" ? -1 : 1;
        chunkBSJP7CBPValue10 -= chunkBSJP7CBPValue21;
      }
      if (
        chunkBSJP7CBPValue14 < chunkBSJP7CBPValue16 &&
        chunkBSJP7CBPValue14 > 0 &&
        chunkBSJP7CBPValue15 < chunkBSJP7CBPValue16
      ) {
        let chunkBSJP7CBPValue22 =
          chunkBSJP7CBPValue16 + 1 - chunkBSJP7CBPValue14;
        chunkBSJP7CBPValue22 *= chunkBSJP7CBPValue11 === "right" ? -1 : 1;
        chunkBSJP7CBPValue10 += chunkBSJP7CBPValue22;
      }
      return chunkBSJP7CBPValue1(chunkBSJP7CBPParam2).x + chunkBSJP7CBPValue10;
    }, "x"),
    y: chunkAGHRB4JFN(function (
      chunkBSJP7CBPParam1,
      _chunkBSJP7CBPI,
      _chunkBSJP7CBPN,
    ) {
      let chunkBSJP7CBPValue2 = 0,
        chunkBSJP7CBPValue3 =
          chunkBSJP7CBPValue1(_chunkBSJP7CBPN[0]).y <
          chunkBSJP7CBPValue1(_chunkBSJP7CBPN[_chunkBSJP7CBPN.length - 1]).y
            ? "down"
            : "up";
      if (
        _chunkBSJP7CBPI === 0 &&
        Object.hasOwn(chunkBSJP7CBPR, _chunkBSJP7CBPT.arrowTypeStart)
      ) {
        let { angle, deltaY: __chunkBSJP7CBPI } = chunkBSJP7CBPHelper1(
          _chunkBSJP7CBPN[0],
          _chunkBSJP7CBPN[1],
        );
        chunkBSJP7CBPValue2 =
          chunkBSJP7CBPR[_chunkBSJP7CBPT.arrowTypeStart] *
          Math.abs(Math.sin(angle)) *
          (__chunkBSJP7CBPI >= 0 ? 1 : -1);
      } else if (
        _chunkBSJP7CBPI === _chunkBSJP7CBPN.length - 1 &&
        Object.hasOwn(chunkBSJP7CBPR, _chunkBSJP7CBPT.arrowTypeEnd)
      ) {
        let { angle, deltaY: __chunkBSJP7CBPI } = chunkBSJP7CBPHelper1(
          _chunkBSJP7CBPN[_chunkBSJP7CBPN.length - 1],
          _chunkBSJP7CBPN[_chunkBSJP7CBPN.length - 2],
        );
        chunkBSJP7CBPValue2 =
          chunkBSJP7CBPR[_chunkBSJP7CBPT.arrowTypeEnd] *
          Math.abs(Math.sin(angle)) *
          (__chunkBSJP7CBPI >= 0 ? 1 : -1);
      }
      let chunkBSJP7CBPValue4 = Math.abs(
          chunkBSJP7CBPValue1(chunkBSJP7CBPParam1).y -
            chunkBSJP7CBPValue1(_chunkBSJP7CBPN[_chunkBSJP7CBPN.length - 1]).y,
        ),
        chunkBSJP7CBPValue5 = Math.abs(
          chunkBSJP7CBPValue1(chunkBSJP7CBPParam1).x -
            chunkBSJP7CBPValue1(_chunkBSJP7CBPN[_chunkBSJP7CBPN.length - 1]).x,
        ),
        chunkBSJP7CBPValue6 = Math.abs(
          chunkBSJP7CBPValue1(chunkBSJP7CBPParam1).y -
            chunkBSJP7CBPValue1(_chunkBSJP7CBPN[0]).y,
        ),
        chunkBSJP7CBPValue7 = Math.abs(
          chunkBSJP7CBPValue1(chunkBSJP7CBPParam1).x -
            chunkBSJP7CBPValue1(_chunkBSJP7CBPN[0]).x,
        ),
        chunkBSJP7CBPValue8 = chunkBSJP7CBPR[_chunkBSJP7CBPT.arrowTypeStart],
        chunkBSJP7CBPValue9 = chunkBSJP7CBPR[_chunkBSJP7CBPT.arrowTypeEnd];
      if (
        chunkBSJP7CBPValue4 < chunkBSJP7CBPValue9 &&
        chunkBSJP7CBPValue4 > 0 &&
        chunkBSJP7CBPValue5 < chunkBSJP7CBPValue9
      ) {
        let chunkBSJP7CBPValue23 =
          chunkBSJP7CBPValue9 + 1 - chunkBSJP7CBPValue4;
        chunkBSJP7CBPValue23 *= chunkBSJP7CBPValue3 === "up" ? -1 : 1;
        chunkBSJP7CBPValue2 -= chunkBSJP7CBPValue23;
      }
      if (
        chunkBSJP7CBPValue6 < chunkBSJP7CBPValue8 &&
        chunkBSJP7CBPValue6 > 0 &&
        chunkBSJP7CBPValue7 < chunkBSJP7CBPValue8
      ) {
        let chunkBSJP7CBPValue24 =
          chunkBSJP7CBPValue8 + 1 - chunkBSJP7CBPValue6;
        chunkBSJP7CBPValue24 *= chunkBSJP7CBPValue3 === "up" ? -1 : 1;
        chunkBSJP7CBPValue2 += chunkBSJP7CBPValue24;
      }
      return chunkBSJP7CBPValue1(chunkBSJP7CBPParam1).y + chunkBSJP7CBPValue2;
    }, "y"),
  }),
  "getLineFunctionsWithOffset",
);
export { chunkBSJP7CBPR };

export function initChunkBSJP7CBP() {}
