// Restored from ref/webview/assets/chunk-YZCP3GAM-CkcPUeYE.js
// ChunkYZCP3GAM chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { dist } from "./entities-escape";
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
import { _chunkICPOFSXXZ } from "./chunk-icpofsxx";
var chunkYZCP3GAMValue1 = dist(),
  chunkYZCP3GAMA = chunkAGHRB4JFN(
    (chunkYZCP3GAMParam1, chunkYZCP3GAMParam2) => {
      let chunkYZCP3GAMValue3 = chunkYZCP3GAMParam1.append("rect");
      if (
        (chunkYZCP3GAMValue3.attr("x", chunkYZCP3GAMParam2.x),
        chunkYZCP3GAMValue3.attr("y", chunkYZCP3GAMParam2.y),
        chunkYZCP3GAMValue3.attr("fill", chunkYZCP3GAMParam2.fill),
        chunkYZCP3GAMValue3.attr("stroke", chunkYZCP3GAMParam2.stroke),
        chunkYZCP3GAMValue3.attr("width", chunkYZCP3GAMParam2.width),
        chunkYZCP3GAMValue3.attr("height", chunkYZCP3GAMParam2.height),
        chunkYZCP3GAMParam2.name &&
          chunkYZCP3GAMValue3.attr("name", chunkYZCP3GAMParam2.name),
        chunkYZCP3GAMParam2.rx &&
          chunkYZCP3GAMValue3.attr("rx", chunkYZCP3GAMParam2.rx),
        chunkYZCP3GAMParam2.ry &&
          chunkYZCP3GAMValue3.attr("ry", chunkYZCP3GAMParam2.ry),
        chunkYZCP3GAMParam2.attrs !== undefined)
      )
        for (let chunkYZCP3GAMValue6 in chunkYZCP3GAMParam2.attrs)
          chunkYZCP3GAMValue3.attr(
            chunkYZCP3GAMValue6,
            chunkYZCP3GAMParam2.attrs[chunkYZCP3GAMValue6],
          );
      return (
        chunkYZCP3GAMParam2.class &&
          chunkYZCP3GAMValue3.attr("class", chunkYZCP3GAMParam2.class),
        chunkYZCP3GAMValue3
      );
    },
    "drawRect",
  );
export const chunkYZCP3GAMT = chunkAGHRB4JFN(() => {
  let chunkYZCP3GAMValue2 = Src(".mermaidTooltip");
  return (
    chunkYZCP3GAMValue2.empty() &&
      (chunkYZCP3GAMValue2 = Src("body")
        .append("div")
        .attr("class", "mermaidTooltip")
        .style("opacity", 0)
        .style("position", "absolute")
        .style("text-align", "center")
        .style("max-width", "200px")
        .style("padding", "2px")
        .style("font-size", "12px")
        .style("background", "#ffffde")
        .style("border", "1px solid #333")
        .style("border-radius", "2px")
        .style("pointer-events", "none")
        .style("z-index", "100")),
    chunkYZCP3GAMValue2
  );
}, "createTooltip");
export const chunkYZCP3GAMS = chunkAGHRB4JFN(
  () => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    fill: "#EDF2AE",
    stroke: "#666",
    anchor: "start",
    rx: 0,
    ry: 0,
  }),
  "getNoteRect",
);
export const chunkYZCP3GAMR = chunkAGHRB4JFN(
  (
    chunkYZCP3GAMParam7,
    chunkYZCP3GAMParam8,
    chunkYZCP3GAMParam9,
    chunkYZCP3GAMParam10,
  ) => {
    let _chunkYZCP3GAMA = chunkYZCP3GAMParam7.append("use");
    _chunkYZCP3GAMA.attr("x", chunkYZCP3GAMParam8);
    _chunkYZCP3GAMA.attr("y", chunkYZCP3GAMParam9);
    let _chunkYZCP3GAMN = chunkYZCP3GAMValue1.sanitizeUrl(chunkYZCP3GAMParam10);
    _chunkYZCP3GAMA.attr("xlink:href", `#${_chunkYZCP3GAMN}`);
  },
  "drawEmbeddedImage",
);
export const chunkYZCP3GAMO = chunkAGHRB4JFN(
  (chunkYZCP3GAMParam3, chunkYZCP3GAMParam4) => {
    let chunkYZCP3GAMValue4 = chunkYZCP3GAMParam4.text.replace(
        _chunkICPOFSXXZ,
        " ",
      ),
      chunkYZCP3GAMValue5 = chunkYZCP3GAMParam3.append("text");
    chunkYZCP3GAMValue5.attr("x", chunkYZCP3GAMParam4.x);
    chunkYZCP3GAMValue5.attr("y", chunkYZCP3GAMParam4.y);
    chunkYZCP3GAMValue5.attr("class", "legend");
    chunkYZCP3GAMValue5.style("text-anchor", chunkYZCP3GAMParam4.anchor);
    chunkYZCP3GAMParam4.class &&
      chunkYZCP3GAMValue5.attr("class", chunkYZCP3GAMParam4.class);
    let _chunkYZCP3GAMA = chunkYZCP3GAMValue5.append("tspan");
    return (
      _chunkYZCP3GAMA.attr(
        "x",
        chunkYZCP3GAMParam4.x + chunkYZCP3GAMParam4.textMargin * 2,
      ),
      _chunkYZCP3GAMA.text(chunkYZCP3GAMValue4),
      chunkYZCP3GAMValue5
    );
  },
  "drawText",
);
export const chunkYZCP3GAMN = chunkAGHRB4JFN(
  (chunkYZCP3GAMParam5, chunkYZCP3GAMParam6) => {
    chunkYZCP3GAMA(chunkYZCP3GAMParam5, {
      x: chunkYZCP3GAMParam6.startx,
      y: chunkYZCP3GAMParam6.starty,
      width: chunkYZCP3GAMParam6.stopx - chunkYZCP3GAMParam6.startx,
      height: chunkYZCP3GAMParam6.stopy - chunkYZCP3GAMParam6.starty,
      fill: chunkYZCP3GAMParam6.fill,
      stroke: chunkYZCP3GAMParam6.stroke,
      class: "rect",
    }).lower();
  },
  "drawBackgroundRect",
);
export const chunkYZCP3GAMI = chunkAGHRB4JFN(
  (
    chunkYZCP3GAMParam11,
    chunkYZCP3GAMParam12,
    chunkYZCP3GAMParam13,
    chunkYZCP3GAMParam14,
  ) => {
    let _chunkYZCP3GAMA = chunkYZCP3GAMParam11.append("image");
    _chunkYZCP3GAMA.attr("x", chunkYZCP3GAMParam12);
    _chunkYZCP3GAMA.attr("y", chunkYZCP3GAMParam13);
    let _chunkYZCP3GAMN = chunkYZCP3GAMValue1.sanitizeUrl(chunkYZCP3GAMParam14);
    _chunkYZCP3GAMA.attr("xlink:href", _chunkYZCP3GAMN);
  },
  "drawImage",
);
export const chunkYZCP3GAMC = chunkAGHRB4JFN(
  () => ({
    x: 0,
    y: 0,
    width: 100,
    height: 100,
    "text-anchor": "start",
    style: "#666",
    textMargin: 0,
    rx: 0,
    ry: 0,
    tspan: true,
  }),
  "getTextObj",
);
export { chunkYZCP3GAMA };
