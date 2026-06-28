// Restored from ref/webview/assets/chunk-EDXVE4YY-Cs5mTzNz.js
// ChunkEDXVE4YY chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import { _chunkICPOFSXXR } from "./chunk-icpofsxx";
var chunkEDXVE4YYValue1 = chunkAGHRB4JFN(
    (chunkEDXVE4YYParam4, chunkEDXVE4YYParam5) => {
      let chunkEDXVE4YYValue4 = chunkEDXVE4YYParam4.node()?.getBBox() || {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
      };
      return {
        width: chunkEDXVE4YYValue4.width + chunkEDXVE4YYParam5 * 2,
        height: chunkEDXVE4YYValue4.height + chunkEDXVE4YYParam5 * 2,
        x: chunkEDXVE4YYValue4.x,
        y: chunkEDXVE4YYValue4.y,
      };
    },
    "calculateDimensionsWithPadding",
  ),
  chunkEDXVE4YYValue2 = chunkAGHRB4JFN(
    (
      chunkEDXVE4YYParam6,
      chunkEDXVE4YYParam7,
      chunkEDXVE4YYParam8,
      _chunkEDXVE4YY,
      chunkEDXVE4YYParam9,
    ) =>
      `${chunkEDXVE4YYParam6 - chunkEDXVE4YYParam9} ${chunkEDXVE4YYParam7 - chunkEDXVE4YYParam9} ${chunkEDXVE4YYParam8} ${_chunkEDXVE4YY}`,
    "createViewBox",
  );
export const chunkEDXVE4YY = chunkAGHRB4JFN(
  (
    chunkEDXVE4YYParam1,
    _chunkEDXVE4YY,
    chunkEDXVE4YYParam2,
    chunkEDXVE4YYParam3,
  ) => {
    chunkEDXVE4YYParam1.attr("class", chunkEDXVE4YYParam2);
    let { width, height, x, y } = chunkEDXVE4YYValue1(
      chunkEDXVE4YYParam1,
      _chunkEDXVE4YY,
    );
    _chunkICPOFSXXR(chunkEDXVE4YYParam1, height, width, chunkEDXVE4YYParam3);
    let chunkEDXVE4YYValue3 = chunkEDXVE4YYValue2(
      x,
      y,
      width,
      height,
      _chunkEDXVE4YY,
    );
    chunkEDXVE4YYParam1.attr("viewBox", chunkEDXVE4YYValue3);
    chunkAGHRB4JFR.debug(
      `viewBox configured: ${chunkEDXVE4YYValue3} with padding: ${_chunkEDXVE4YY}`,
    );
  },
  "setupViewPortForSVG",
);
