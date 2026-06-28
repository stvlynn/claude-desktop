// Restored from ref/webview/assets/pieDiagram-ADFJNKIX-CdTMfn5r.js
// PieDiagramADFJNKIX chunk restored from the Codex webview bundle.
import { chunkS3R3BYOJA, chunkS3R3BYOJP } from "./chunk-s3r3byoj";
import { Ordinal } from "../utils/ordinal";
import { arc } from "./d3-shape-arc";
import { pie } from "./d3-shape-pie";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import { _chunkABZYJK2DK, chunkABZYJK2DN, chunkABZYJK2DF, chunkABZYJK2DO, _chunkABZYJK2DC as chunkABZYJK2DU, chunkABZYJK2DJ, chunkABZYJK2DR, chunkABZYJK2DZ } from "./katex-auto-render";
import { chunkEXTU4WIE } from "./chunk-extu4-wie";
import { chunk4BX2VUAB } from "./mermaid-accessibility";
import { MermaidParserCore } from "./mermaid-parser-core-fpaj";
const _chunkABZYJK2DB = chunkABZYJK2DN,
  _chunkABZYJK2DC = chunkABZYJK2DF;
var pieDiagramADFJNKIXValue1 = chunkABZYJK2DO.pie,
  pieDiagramADFJNKIXValue2 = {
    sections: new Map(),
    showData: false,
    config: pieDiagramADFJNKIXValue1
  },
  pieDiagramADFJNKIXValue3 = pieDiagramADFJNKIXValue2.sections,
  pieDiagramADFJNKIXValue4 = pieDiagramADFJNKIXValue2.showData,
  pieDiagramADFJNKIXValue5 = structuredClone(pieDiagramADFJNKIXValue1),
  pieDiagramADFJNKIXValue6 = {
    getConfig: chunkAGHRB4JFN(() => structuredClone(pieDiagramADFJNKIXValue5), "getConfig"),
    clear: chunkAGHRB4JFN(() => {
      pieDiagramADFJNKIXValue3 = new Map();
      pieDiagramADFJNKIXValue4 = pieDiagramADFJNKIXValue2.showData;
      _chunkABZYJK2DK();
    }, "clear"),
    setDiagramTitle: chunkABZYJK2DU,
    getDiagramTitle: chunkABZYJK2DF,
    setAccTitle: chunkABZYJK2DN,
    getAccTitle: chunkABZYJK2DR,
    setAccDescription: chunkABZYJK2DZ,
    getAccDescription: chunkABZYJK2DJ,
    addSection: chunkAGHRB4JFN(({
      label,
      value
    }) => {
      if (value < 0) throw Error(`"${label}" has invalid value: ${value}. Negative values are not allowed in pie charts. All slice values must be >= 0.`);
      pieDiagramADFJNKIXValue3.has(label) || (pieDiagramADFJNKIXValue3.set(label, value), chunkAGHRB4JFR.debug(`added new section: ${label}, with value: ${value}`));
    }, "addSection"),
    getSections: chunkAGHRB4JFN(() => pieDiagramADFJNKIXValue3, "getSections"),
    setShowData: chunkAGHRB4JFN(pieDiagramADFJNKIXParam25 => {
      pieDiagramADFJNKIXValue4 = pieDiagramADFJNKIXParam25;
    }, "setShowData"),
    getShowData: chunkAGHRB4JFN(() => pieDiagramADFJNKIXValue4, "getShowData")
  },
  pieDiagramADFJNKIXValue7 = chunkAGHRB4JFN((pieDiagramADFJNKIXParam7, pieDiagramADFJNKIXParam8) => {
    chunk4BX2VUAB(pieDiagramADFJNKIXParam7, pieDiagramADFJNKIXParam8);
    pieDiagramADFJNKIXParam8.setShowData(pieDiagramADFJNKIXParam7.showData);
    pieDiagramADFJNKIXParam7.sections.map(pieDiagramADFJNKIXParam8.addSection);
  }, "populateDb"),
  pieDiagramADFJNKIXValue8 = {
    parse: chunkAGHRB4JFN(async pieDiagramADFJNKIXParam12 => {
      let pieDiagramADFJNKIXValue31 = await MermaidParserCore("pie", pieDiagramADFJNKIXParam12);
      chunkAGHRB4JFR.debug(pieDiagramADFJNKIXValue31);
      pieDiagramADFJNKIXValue7(pieDiagramADFJNKIXValue31, pieDiagramADFJNKIXValue6);
    }, "parse")
  },
  pieDiagramADFJNKIXValue9 = chunkAGHRB4JFN(pieDiagramADFJNKIXParam5 => `
  .pieCircle{
    stroke: ${pieDiagramADFJNKIXParam5.pieStrokeColor};
    stroke-width : ${pieDiagramADFJNKIXParam5.pieStrokeWidth};
    opacity : ${pieDiagramADFJNKIXParam5.pieOpacity};
  }
  .pieOuterCircle{
    stroke: ${pieDiagramADFJNKIXParam5.pieOuterStrokeColor};
    stroke-width: ${pieDiagramADFJNKIXParam5.pieOuterStrokeWidth};
    fill: none;
  }
  .pieTitleText {
    text-anchor: middle;
    font-size: ${pieDiagramADFJNKIXParam5.pieTitleTextSize};
    fill: ${pieDiagramADFJNKIXParam5.pieTitleTextColor};
    font-family: ${pieDiagramADFJNKIXParam5.fontFamily};
  }
  .slice {
    font-family: ${pieDiagramADFJNKIXParam5.fontFamily};
    fill: ${pieDiagramADFJNKIXParam5.pieSectionTextColor};
    font-size:${pieDiagramADFJNKIXParam5.pieSectionTextSize};
    // fill: white;
  }
  .legend text {
    fill: ${pieDiagramADFJNKIXParam5.pieLegendTextColor};
    font-family: ${pieDiagramADFJNKIXParam5.fontFamily};
    font-size: ${pieDiagramADFJNKIXParam5.pieLegendTextSize};
  }
`, "getStyles"),
  pieDiagramADFJNKIXValue10 = chunkAGHRB4JFN(pieDiagramADFJNKIXParam6 => {
    let pieDiagramADFJNKIXValue28 = [...pieDiagramADFJNKIXParam6.values()].reduce((accumulator, current) => accumulator + current, 0),
      pieDiagramADFJNKIXValue29 = [...pieDiagramADFJNKIXParam6.entries()].map(([pieDiagramADFJNKIXParam15, pieDiagramADFJNKIXParam16]) => ({
        label: pieDiagramADFJNKIXParam15,
        value: pieDiagramADFJNKIXParam16
      })).filter(item => item.value / pieDiagramADFJNKIXValue28 * 100 >= 1).sort((pieDiagramADFJNKIXParam19, pieDiagramADFJNKIXParam20) => pieDiagramADFJNKIXParam20.value - pieDiagramADFJNKIXParam19.value);
    return pie().value(pieDiagramADFJNKIXParam24 => pieDiagramADFJNKIXParam24.value)(pieDiagramADFJNKIXValue29);
  }, "createPieArcs");
export const pieDiagramADFJNKIX = {
  parser: pieDiagramADFJNKIXValue8,
  db: pieDiagramADFJNKIXValue6,
  renderer: {
    draw: chunkAGHRB4JFN((pieDiagramADFJNKIXParam1, pieDiagramADFJNKIXParam2, pieDiagramADFJNKIXParam3, pieDiagramADFJNKIXParam4) => {
      chunkAGHRB4JFR.debug("rendering pie chart\n" + pieDiagramADFJNKIXParam1);
      let pieDiagramADFJNKIXValue11 = pieDiagramADFJNKIXParam4.db,
        pieDiagramADFJNKIXValue12 = _chunkABZYJK2DB(),
        pieDiagramADFJNKIXValue13 = chunkS3R3BYOJP(pieDiagramADFJNKIXValue11.getConfig(), pieDiagramADFJNKIXValue12.pie),
        pieDiagramADFJNKIXValue14 = chunkEXTU4WIE(pieDiagramADFJNKIXParam2),
        pieDiagramADFJNKIXValue15 = pieDiagramADFJNKIXValue14.append("g");
      pieDiagramADFJNKIXValue15.attr("transform", "translate(225,225)");
      let {
          themeVariables
        } = pieDiagramADFJNKIXValue12,
        [pieDiagramADFJNKIXValue16] = chunkS3R3BYOJA(themeVariables.pieOuterStrokeWidth);
      pieDiagramADFJNKIXValue16 ??= 2;
      let pieDiagramADFJNKIXValue17 = pieDiagramADFJNKIXValue13.textPosition,
        pieDiagramADFJNKIXValue18 = arc().innerRadius(0).outerRadius(185),
        pieDiagramADFJNKIXValue19 = arc().innerRadius(185 * pieDiagramADFJNKIXValue17).outerRadius(185 * pieDiagramADFJNKIXValue17);
      pieDiagramADFJNKIXValue15.append("circle").attr("cx", 0).attr("cy", 0).attr("r", 185 + pieDiagramADFJNKIXValue16 / 2).attr("class", "pieOuterCircle");
      let pieDiagramADFJNKIXValue20 = pieDiagramADFJNKIXValue11.getSections(),
        pieDiagramADFJNKIXValue21 = pieDiagramADFJNKIXValue10(pieDiagramADFJNKIXValue20),
        pieDiagramADFJNKIXValue22 = [themeVariables.pie1, themeVariables.pie2, themeVariables.pie3, themeVariables.pie4, themeVariables.pie5, themeVariables.pie6, themeVariables.pie7, themeVariables.pie8, themeVariables.pie9, themeVariables.pie10, themeVariables.pie11, themeVariables.pie12],
        pieDiagramADFJNKIXValue23 = 0;
      pieDiagramADFJNKIXValue20.forEach(item => {
        pieDiagramADFJNKIXValue23 += item;
      });
      let pieDiagramADFJNKIXValue24 = pieDiagramADFJNKIXValue21.filter(item => (item.data.value / pieDiagramADFJNKIXValue23 * 100).toFixed(0) !== "0"),
        pieDiagramADFJNKIXValue25 = Ordinal(pieDiagramADFJNKIXValue22);
      pieDiagramADFJNKIXValue15.selectAll("mySlices").data(pieDiagramADFJNKIXValue24).enter().append("path").attr("d", pieDiagramADFJNKIXValue18).attr("fill", pieDiagramADFJNKIXParam21 => pieDiagramADFJNKIXValue25(pieDiagramADFJNKIXParam21.data.label)).attr("class", "pieCircle");
      pieDiagramADFJNKIXValue15.selectAll("mySlices").data(pieDiagramADFJNKIXValue24).enter().append("text").text(pieDiagramADFJNKIXParam13 => (pieDiagramADFJNKIXParam13.data.value / pieDiagramADFJNKIXValue23 * 100).toFixed(0) + "%").attr("transform", pieDiagramADFJNKIXParam14 => "translate(" + pieDiagramADFJNKIXValue19.centroid(pieDiagramADFJNKIXParam14) + ")").style("text-anchor", "middle").attr("class", "slice");
      pieDiagramADFJNKIXValue15.append("text").text(pieDiagramADFJNKIXValue11.getDiagramTitle()).attr("x", 0).attr("y", -200).attr("class", "pieTitleText");
      let pieDiagramADFJNKIXValue26 = [...pieDiagramADFJNKIXValue20.entries()].map(([pieDiagramADFJNKIXParam17, pieDiagramADFJNKIXParam18]) => ({
          label: pieDiagramADFJNKIXParam17,
          value: pieDiagramADFJNKIXParam18
        })),
        _pieDiagramADFJNKIX = pieDiagramADFJNKIXValue15.selectAll(".legend").data(pieDiagramADFJNKIXValue26).enter().append("g").attr("class", "legend").attr("transform", (pieDiagramADFJNKIXParam9, pieDiagramADFJNKIXParam10) => {
          let pieDiagramADFJNKIXValue30 = 22 * pieDiagramADFJNKIXValue26.length / 2;
          return "translate(216," + (pieDiagramADFJNKIXParam10 * 22 - pieDiagramADFJNKIXValue30) + ")";
        });
      _pieDiagramADFJNKIX.append("rect").attr("width", 18).attr("height", 18).style("fill", pieDiagramADFJNKIXParam22 => pieDiagramADFJNKIXValue25(pieDiagramADFJNKIXParam22.label)).style("stroke", pieDiagramADFJNKIXParam23 => pieDiagramADFJNKIXValue25(pieDiagramADFJNKIXParam23.label));
      _pieDiagramADFJNKIX.append("text").attr("x", 22).attr("y", 14).text(pieDiagramADFJNKIXParam11 => pieDiagramADFJNKIXValue11.getShowData() ? `${pieDiagramADFJNKIXParam11.label} [${pieDiagramADFJNKIXParam11.value}]` : pieDiagramADFJNKIXParam11.label);
      let pieDiagramADFJNKIXValue27 = 512 + Math.max(..._pieDiagramADFJNKIX.selectAll("text").nodes().map(item => item?.getBoundingClientRect().width ?? 0));
      pieDiagramADFJNKIXValue14.attr("viewBox", `0 0 ${pieDiagramADFJNKIXValue27} 450`);
      _chunkABZYJK2DC(pieDiagramADFJNKIXValue14, 450, pieDiagramADFJNKIXValue27, pieDiagramADFJNKIXValue13.useMaxWidth);
    }, "draw")
  },
  styles: pieDiagramADFJNKIXValue9
};
