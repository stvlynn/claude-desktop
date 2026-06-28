// Restored from ref/webview/assets/chunk-X2U36JSP-DWvyIaf0.js
// ChunkX2U36JSP chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
import { _chunkICPOFSXXP } from "./chunk-icpofsxx";
var chunkX2U36JSPT = chunkAGHRB4JFN((chunkX2U36JSPParam6) => {
    let chunkX2U36JSPValue6 = chunkX2U36JSPValue1([
      ...(chunkX2U36JSPParam6.cssCompiledStyles || []),
      ...(chunkX2U36JSPParam6.cssStyles || []),
      ...(chunkX2U36JSPParam6.labelStyle || []),
    ]);
    return {
      stylesMap: chunkX2U36JSPValue6,
      stylesArray: [...chunkX2U36JSPValue6],
    };
  }, "compileStyles"),
  chunkX2U36JSPValue1 = chunkAGHRB4JFN((chunkX2U36JSPParam7) => {
    let chunkX2U36JSPValue7 = new Map();
    return (
      chunkX2U36JSPParam7.forEach((item) => {
        let [_chunkX2U36JSPR, _chunkX2U36JSPT] = item.split(":");
        chunkX2U36JSPValue7.set(
          _chunkX2U36JSPR.trim(),
          _chunkX2U36JSPT?.trim(),
        );
      }),
      chunkX2U36JSPValue7
    );
  }, "styles2Map"),
  chunkX2U36JSPN = chunkAGHRB4JFN(
    (chunkX2U36JSPParam3) =>
      chunkX2U36JSPParam3 === "color" ||
      chunkX2U36JSPParam3 === "font-size" ||
      chunkX2U36JSPParam3 === "font-family" ||
      chunkX2U36JSPParam3 === "font-weight" ||
      chunkX2U36JSPParam3 === "font-style" ||
      chunkX2U36JSPParam3 === "text-decoration" ||
      chunkX2U36JSPParam3 === "text-align" ||
      chunkX2U36JSPParam3 === "text-transform" ||
      chunkX2U36JSPParam3 === "line-height" ||
      chunkX2U36JSPParam3 === "letter-spacing" ||
      chunkX2U36JSPParam3 === "word-spacing" ||
      chunkX2U36JSPParam3 === "text-shadow" ||
      chunkX2U36JSPParam3 === "text-overflow" ||
      chunkX2U36JSPParam3 === "white-space" ||
      chunkX2U36JSPParam3 === "word-wrap" ||
      chunkX2U36JSPParam3 === "word-break" ||
      chunkX2U36JSPParam3 === "overflow-wrap" ||
      chunkX2U36JSPParam3 === "hyphens",
    "isLabelStyle",
  ),
  chunkX2U36JSPValue2 = chunkAGHRB4JFN((chunkX2U36JSPParam4) => {
    if (!chunkX2U36JSPParam4) return [0, 0];
    let chunkX2U36JSPValue5 = chunkX2U36JSPParam4
      .trim()
      .split(/\s+/)
      .map(Number);
    if (chunkX2U36JSPValue5.length === 1) {
      let chunkX2U36JSPValue8 = isNaN(chunkX2U36JSPValue5[0])
        ? 0
        : chunkX2U36JSPValue5[0];
      return [chunkX2U36JSPValue8, chunkX2U36JSPValue8];
    }
    return [
      isNaN(chunkX2U36JSPValue5[0]) ? 0 : chunkX2U36JSPValue5[0],
      isNaN(chunkX2U36JSPValue5[1]) ? 0 : chunkX2U36JSPValue5[1],
    ];
  }, "getStrokeDashArray");
export const chunkX2U36JSPR = chunkAGHRB4JFN((chunkX2U36JSPParam5) => {
  let { handDrawnSeed: _chunkX2U36JSPR } = _chunkICPOFSXXP();
  return {
    fill: chunkX2U36JSPParam5,
    hachureAngle: 120,
    hachureGap: 4,
    fillWeight: 2,
    roughness: 0.7,
    stroke: chunkX2U36JSPParam5,
    seed: _chunkX2U36JSPR,
  };
}, "solidStateFill");
export const chunkX2U36JSPI = chunkAGHRB4JFN((chunkX2U36JSPParam1) => {
  let { stylesArray } = chunkX2U36JSPT(chunkX2U36JSPParam1),
    _chunkX2U36JSPR = [],
    chunkX2U36JSPValue3 = [],
    _chunkX2U36JSPI = [],
    _chunkX2U36JSPA = [];
  return (
    stylesArray.forEach((item) => {
      let chunkX2U36JSPValue4 = item[0];
      chunkX2U36JSPN(chunkX2U36JSPValue4)
        ? _chunkX2U36JSPR.push(item.join(":") + " !important")
        : (chunkX2U36JSPValue3.push(item.join(":") + " !important"),
          chunkX2U36JSPValue4.includes("stroke") &&
            _chunkX2U36JSPI.push(item.join(":") + " !important"),
          chunkX2U36JSPValue4 === "fill" &&
            _chunkX2U36JSPA.push(item.join(":") + " !important"));
    }),
    {
      labelStyles: _chunkX2U36JSPR.join(";"),
      nodeStyles: chunkX2U36JSPValue3.join(";"),
      stylesArray,
      borderStyles: _chunkX2U36JSPI,
      backgroundStyles: _chunkX2U36JSPA,
    }
  );
}, "styles2String");
export const chunkX2U36JSPA = chunkAGHRB4JFN(
  (chunkX2U36JSPParam2, _chunkX2U36JSPR) => {
    let { themeVariables, handDrawnSeed: _chunkX2U36JSPN } = _chunkICPOFSXXP(),
      { nodeBorder: _chunkX2U36JSPI, mainBkg: _chunkX2U36JSPA } =
        themeVariables,
      { stylesMap } = chunkX2U36JSPT(chunkX2U36JSPParam2);
    return Object.assign(
      {
        roughness: 0.7,
        fill: stylesMap.get("fill") || _chunkX2U36JSPA,
        fillStyle: "hachure",
        fillWeight: 4,
        hachureGap: 5.2,
        stroke: stylesMap.get("stroke") || _chunkX2U36JSPI,
        seed: _chunkX2U36JSPN,
        strokeWidth: stylesMap.get("stroke-width")?.replace("px", "") || 1.3,
        fillLineDash: [0, 0],
        strokeLineDash: chunkX2U36JSPValue2(stylesMap.get("stroke-dasharray")),
      },
      _chunkX2U36JSPR,
    );
  },
  "userNodeOverrides",
);
export { chunkX2U36JSPN, chunkX2U36JSPT };
