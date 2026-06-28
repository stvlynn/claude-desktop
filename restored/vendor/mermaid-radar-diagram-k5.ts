// Restored from ref/webview/assets/diagram-MMDJMWI5-BCvRK5AH.js
// DiagramMMDJMWI5 chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import {
  _chunkICPOFSXXA,
  chunkICPOFSXXB,
  _chunkICPOFSXXC as chunkICPOFSXXC,
  chunkICPOFSXXD,
  chunkICPOFSXXE,
  chunkICPOFSXXUnderscore,
  chunkICPOFSXXV,
  _chunkICPOFSXXW,
  _chunkICPOFSXXY,
} from "./chunk-icpofsxx";
import { chunk426QAEUC } from "./chunk-426qaeuc";
import { chunk5PVQY5BWP } from "./chunk-5pvqy5bw";
import { populateCommonDb } from "../utils/chunk-4-bx2-vuab";
import { MermaidParserCore } from "./mermaid-parser-core-k5";
const _chunkICPOFSXXC = chunkICPOFSXXC,
  _chunkICPOFSXXV = chunkICPOFSXXV;
var diagramMMDJMWI5Value1 = {
    showLegend: true,
    ticks: 5,
    max: null,
    min: 0,
    graticule: "circle",
  },
  diagramMMDJMWI5Value2 = {
    axes: [],
    curves: [],
    options: diagramMMDJMWI5Value1,
  },
  diagramMMDJMWI5Value3 = structuredClone(diagramMMDJMWI5Value2),
  diagramMMDJMWI5Value4 = chunkICPOFSXXD.radar,
  diagramMMDJMWI5Value5 = chunkAGHRB4JFN(
    () =>
      chunk5PVQY5BWP({
        ...diagramMMDJMWI5Value4,
        ..._chunkICPOFSXXY().radar,
      }),
    "getConfig",
  ),
  diagramMMDJMWI5Value6 = chunkAGHRB4JFN(
    () => diagramMMDJMWI5Value3.axes,
    "getAxes",
  ),
  diagramMMDJMWI5Value7 = chunkAGHRB4JFN(
    () => diagramMMDJMWI5Value3.curves,
    "getCurves",
  ),
  diagramMMDJMWI5Value8 = chunkAGHRB4JFN(
    () => diagramMMDJMWI5Value3.options,
    "getOptions",
  ),
  diagramMMDJMWI5Value9 = chunkAGHRB4JFN((diagramMMDJMWI5Param40) => {
    diagramMMDJMWI5Value3.axes = diagramMMDJMWI5Param40.map((item) => ({
      name: item.name,
      label: item.label ?? item.name,
    }));
  }, "setAxes"),
  diagramMMDJMWI5Value10 = chunkAGHRB4JFN((diagramMMDJMWI5Param33) => {
    diagramMMDJMWI5Value3.curves = diagramMMDJMWI5Param33.map((item) => ({
      name: item.name,
      label: item.label ?? item.name,
      entries: diagramMMDJMWI5Value11(item.entries),
    }));
  }, "setCurves"),
  diagramMMDJMWI5Value11 = chunkAGHRB4JFN((diagramMMDJMWI5Param29) => {
    if (diagramMMDJMWI5Param29[0].axis == null)
      return diagramMMDJMWI5Param29.map((item) => item.value);
    let diagramMMDJMWI5Value45 = diagramMMDJMWI5Value6();
    if (diagramMMDJMWI5Value45.length === 0)
      throw Error("Axes must be populated before curves for reference entries");
    return diagramMMDJMWI5Value45.map((item) => {
      let diagramMMDJMWI5Value63 = diagramMMDJMWI5Param29.find(
        (_item) => _item.axis?.$refText === item.name,
      );
      if (diagramMMDJMWI5Value63 === undefined)
        throw Error("Missing entry for axis " + item.label);
      return diagramMMDJMWI5Value63.value;
    });
  }, "computeCurveEntries"),
  diagramMMDJMWI5Value12 = {
    getAxes: diagramMMDJMWI5Value6,
    getCurves: diagramMMDJMWI5Value7,
    getOptions: diagramMMDJMWI5Value8,
    setAxes: diagramMMDJMWI5Value9,
    setCurves: diagramMMDJMWI5Value10,
    setOptions: chunkAGHRB4JFN((diagramMMDJMWI5Param32) => {
      let diagramMMDJMWI5Value52 = diagramMMDJMWI5Param32.reduce(
        (accumulator, current) => (
          (accumulator[current.name] = current),
          accumulator
        ),
        {},
      );
      diagramMMDJMWI5Value3.options = {
        showLegend:
          diagramMMDJMWI5Value52.showLegend?.value ??
          diagramMMDJMWI5Value1.showLegend,
        ticks:
          diagramMMDJMWI5Value52.ticks?.value ?? diagramMMDJMWI5Value1.ticks,
        max: diagramMMDJMWI5Value52.max?.value ?? diagramMMDJMWI5Value1.max,
        min: diagramMMDJMWI5Value52.min?.value ?? diagramMMDJMWI5Value1.min,
        graticule:
          diagramMMDJMWI5Value52.graticule?.value ??
          diagramMMDJMWI5Value1.graticule,
      };
    }, "setOptions"),
    getConfig: diagramMMDJMWI5Value5,
    clear: chunkAGHRB4JFN(() => {
      _chunkICPOFSXXA();
      diagramMMDJMWI5Value3 = structuredClone(diagramMMDJMWI5Value2);
    }, "clear"),
    setAccTitle: chunkICPOFSXXV,
    getAccTitle: _chunkICPOFSXXV,
    setDiagramTitle: _chunkICPOFSXXW,
    getDiagramTitle: chunkICPOFSXXC,
    getAccDescription: chunkICPOFSXXUnderscore,
    setAccDescription: chunkICPOFSXXB,
  },
  diagramMMDJMWI5Value13 = chunkAGHRB4JFN((diagramMMDJMWI5Param34) => {
    populateCommonDb(diagramMMDJMWI5Param34, diagramMMDJMWI5Value12);
    let { axes, curves, options } = diagramMMDJMWI5Param34;
    diagramMMDJMWI5Value12.setAxes(axes);
    diagramMMDJMWI5Value12.setCurves(curves);
    diagramMMDJMWI5Value12.setOptions(options);
  }, "populate"),
  diagramMMDJMWI5Value14 = {
    parse: chunkAGHRB4JFN(async (diagramMMDJMWI5Param41) => {
      let diagramMMDJMWI5Value70 = await MermaidParserCore(
        "radar",
        diagramMMDJMWI5Param41,
      );
      chunkAGHRB4JFR.debug(diagramMMDJMWI5Value70);
      diagramMMDJMWI5Value13(diagramMMDJMWI5Value70);
    }, "parse"),
  },
  diagramMMDJMWI5Value15 = chunkAGHRB4JFN(
    (
      diagramMMDJMWI5Param13,
      diagramMMDJMWI5Param14,
      diagramMMDJMWI5Param15,
      diagramMMDJMWI5Param16,
    ) => {
      let diagramMMDJMWI5Value24 = diagramMMDJMWI5Param16.db,
        diagramMMDJMWI5Value25 = diagramMMDJMWI5Value24.getAxes(),
        diagramMMDJMWI5Value26 = diagramMMDJMWI5Value24.getCurves(),
        diagramMMDJMWI5Value27 = diagramMMDJMWI5Value24.getOptions(),
        diagramMMDJMWI5Value28 = diagramMMDJMWI5Value24.getConfig(),
        diagramMMDJMWI5Value29 = diagramMMDJMWI5Value24.getDiagramTitle(),
        diagramMMDJMWI5Value30 = diagramMMDJMWI5Value16(
          chunk426QAEUC(diagramMMDJMWI5Param14),
          diagramMMDJMWI5Value28,
        ),
        diagramMMDJMWI5Value31 =
          diagramMMDJMWI5Value27.max ??
          Math.max(
            ...diagramMMDJMWI5Value26.map((item) => Math.max(...item.entries)),
          ),
        diagramMMDJMWI5Value32 = diagramMMDJMWI5Value27.min,
        diagramMMDJMWI5Value33 =
          Math.min(
            diagramMMDJMWI5Value28.width,
            diagramMMDJMWI5Value28.height,
          ) / 2;
      diagramMMDJMWI5Value17(
        diagramMMDJMWI5Value30,
        diagramMMDJMWI5Value25,
        diagramMMDJMWI5Value33,
        diagramMMDJMWI5Value27.ticks,
        diagramMMDJMWI5Value27.graticule,
      );
      diagramMMDJMWI5Value18(
        diagramMMDJMWI5Value30,
        diagramMMDJMWI5Value25,
        diagramMMDJMWI5Value33,
        diagramMMDJMWI5Value28,
      );
      diagramMMDJMWI5Helper1(
        diagramMMDJMWI5Value30,
        diagramMMDJMWI5Value25,
        diagramMMDJMWI5Value26,
        diagramMMDJMWI5Value32,
        diagramMMDJMWI5Value31,
        diagramMMDJMWI5Value27.graticule,
        diagramMMDJMWI5Value28,
      );
      diagramMMDJMWI5Helper4(
        diagramMMDJMWI5Value30,
        diagramMMDJMWI5Value26,
        diagramMMDJMWI5Value27.showLegend,
        diagramMMDJMWI5Value28,
      );
      diagramMMDJMWI5Value30
        .append("text")
        .attr("class", "radarTitle")
        .text(diagramMMDJMWI5Value29)
        .attr("x", 0)
        .attr(
          "y",
          -diagramMMDJMWI5Value28.height / 2 - diagramMMDJMWI5Value28.marginTop,
        );
    },
    "draw",
  ),
  diagramMMDJMWI5Value16 = chunkAGHRB4JFN(
    (diagramMMDJMWI5Param30, diagramMMDJMWI5Param31) => {
      let diagramMMDJMWI5Value47 =
          diagramMMDJMWI5Param31.width +
          diagramMMDJMWI5Param31.marginLeft +
          diagramMMDJMWI5Param31.marginRight,
        diagramMMDJMWI5Value48 =
          diagramMMDJMWI5Param31.height +
          diagramMMDJMWI5Param31.marginTop +
          diagramMMDJMWI5Param31.marginBottom,
        diagramMMDJMWI5Value49 = {
          x:
            diagramMMDJMWI5Param31.marginLeft +
            diagramMMDJMWI5Param31.width / 2,
          y:
            diagramMMDJMWI5Param31.marginTop +
            diagramMMDJMWI5Param31.height / 2,
        };
      return (
        _chunkICPOFSXXC(
          diagramMMDJMWI5Param30,
          diagramMMDJMWI5Value48,
          diagramMMDJMWI5Value47,
          diagramMMDJMWI5Param31.useMaxWidth ?? true,
        ),
        diagramMMDJMWI5Param30.attr(
          "viewBox",
          `0 0 ${diagramMMDJMWI5Value47} ${diagramMMDJMWI5Value48}`,
        ),
        diagramMMDJMWI5Param30
          .append("g")
          .attr(
            "transform",
            `translate(${diagramMMDJMWI5Value49.x}, ${diagramMMDJMWI5Value49.y})`,
          )
      );
    },
    "drawFrame",
  ),
  diagramMMDJMWI5Value17 = chunkAGHRB4JFN(
    (
      diagramMMDJMWI5Param8,
      diagramMMDJMWI5Param9,
      diagramMMDJMWI5Param10,
      diagramMMDJMWI5Param11,
      diagramMMDJMWI5Param12,
    ) => {
      if (diagramMMDJMWI5Param12 === "circle")
        for (
          let diagramMMDJMWI5Value67 = 0;
          diagramMMDJMWI5Value67 < diagramMMDJMWI5Param11;
          diagramMMDJMWI5Value67++
        ) {
          let diagramMMDJMWI5Value68 =
            (diagramMMDJMWI5Param10 * (diagramMMDJMWI5Value67 + 1)) /
            diagramMMDJMWI5Param11;
          diagramMMDJMWI5Param8
            .append("circle")
            .attr("r", diagramMMDJMWI5Value68)
            .attr("class", "radarGraticule");
        }
      else if (diagramMMDJMWI5Param12 === "polygon") {
        let diagramMMDJMWI5Value44 = diagramMMDJMWI5Param9.length;
        for (
          let diagramMMDJMWI5Value50 = 0;
          diagramMMDJMWI5Value50 < diagramMMDJMWI5Param11;
          diagramMMDJMWI5Value50++
        ) {
          let diagramMMDJMWI5Value53 =
              (diagramMMDJMWI5Param10 * (diagramMMDJMWI5Value50 + 1)) /
              diagramMMDJMWI5Param11,
            diagramMMDJMWI5Value54 = diagramMMDJMWI5Param9
              .map((item, index) => {
                let diagramMMDJMWI5Value66 =
                  (2 * index * Math.PI) / diagramMMDJMWI5Value44 - Math.PI / 2;
                return `${diagramMMDJMWI5Value53 * Math.cos(diagramMMDJMWI5Value66)},${diagramMMDJMWI5Value53 * Math.sin(diagramMMDJMWI5Value66)}`;
              })
              .join(" ");
          diagramMMDJMWI5Param8
            .append("polygon")
            .attr("points", diagramMMDJMWI5Value54)
            .attr("class", "radarGraticule");
        }
      }
    },
    "drawGraticule",
  ),
  diagramMMDJMWI5Value18 = chunkAGHRB4JFN(
    (
      diagramMMDJMWI5Param17,
      diagramMMDJMWI5Param18,
      diagramMMDJMWI5Param19,
      diagramMMDJMWI5Param20,
    ) => {
      let diagramMMDJMWI5Value34 = diagramMMDJMWI5Param18.length;
      for (
        let diagramMMDJMWI5Value35 = 0;
        diagramMMDJMWI5Value35 < diagramMMDJMWI5Value34;
        diagramMMDJMWI5Value35++
      ) {
        let diagramMMDJMWI5Value37 =
            diagramMMDJMWI5Param18[diagramMMDJMWI5Value35].label,
          diagramMMDJMWI5Value38 =
            (2 * diagramMMDJMWI5Value35 * Math.PI) / diagramMMDJMWI5Value34 -
            Math.PI / 2;
        diagramMMDJMWI5Param17
          .append("line")
          .attr("x1", 0)
          .attr("y1", 0)
          .attr(
            "x2",
            diagramMMDJMWI5Param19 *
              diagramMMDJMWI5Param20.axisScaleFactor *
              Math.cos(diagramMMDJMWI5Value38),
          )
          .attr(
            "y2",
            diagramMMDJMWI5Param19 *
              diagramMMDJMWI5Param20.axisScaleFactor *
              Math.sin(diagramMMDJMWI5Value38),
          )
          .attr("class", "radarAxisLine");
        diagramMMDJMWI5Param17
          .append("text")
          .text(diagramMMDJMWI5Value37)
          .attr(
            "x",
            diagramMMDJMWI5Param19 *
              diagramMMDJMWI5Param20.axisLabelFactor *
              Math.cos(diagramMMDJMWI5Value38),
          )
          .attr(
            "y",
            diagramMMDJMWI5Param19 *
              diagramMMDJMWI5Param20.axisLabelFactor *
              Math.sin(diagramMMDJMWI5Value38),
          )
          .attr("class", "radarAxisLabel");
      }
    },
    "drawAxes",
  );
function diagramMMDJMWI5Helper1(
  diagramMMDJMWI5Param1,
  diagramMMDJMWI5Param2,
  diagramMMDJMWI5Param3,
  diagramMMDJMWI5Param4,
  diagramMMDJMWI5Param5,
  diagramMMDJMWI5Param6,
  diagramMMDJMWI5Param7,
) {
  let diagramMMDJMWI5Value22 = diagramMMDJMWI5Param2.length,
    diagramMMDJMWI5Value23 =
      Math.min(diagramMMDJMWI5Param7.width, diagramMMDJMWI5Param7.height) / 2;
  diagramMMDJMWI5Param3.forEach((item, index) => {
    if (item.entries.length !== diagramMMDJMWI5Value22) return;
    let diagramMMDJMWI5Value36 = item.entries.map((_item, _index) => {
      let diagramMMDJMWI5Value64 =
          (2 * Math.PI * _index) / diagramMMDJMWI5Value22 - Math.PI / 2,
        diagramMMDJMWI5Value65 = diagramMMDJMWI5Helper2(
          _item,
          diagramMMDJMWI5Param4,
          diagramMMDJMWI5Param5,
          diagramMMDJMWI5Value23,
        );
      return {
        x: diagramMMDJMWI5Value65 * Math.cos(diagramMMDJMWI5Value64),
        y: diagramMMDJMWI5Value65 * Math.sin(diagramMMDJMWI5Value64),
      };
    });
    diagramMMDJMWI5Param6 === "circle"
      ? diagramMMDJMWI5Param1
          .append("path")
          .attr(
            "d",
            diagramMMDJMWI5Helper3(
              diagramMMDJMWI5Value36,
              diagramMMDJMWI5Param7.curveTension,
            ),
          )
          .attr("class", `radarCurve-${index}`)
      : diagramMMDJMWI5Param6 === "polygon" &&
        diagramMMDJMWI5Param1
          .append("polygon")
          .attr(
            "points",
            diagramMMDJMWI5Value36
              .map((_item) => `${_item.x},${_item.y}`)
              .join(" "),
          )
          .attr("class", `radarCurve-${index}`);
  });
}
chunkAGHRB4JFN(diagramMMDJMWI5Helper1, "drawCurves");
function diagramMMDJMWI5Helper2(
  diagramMMDJMWI5Param36,
  diagramMMDJMWI5Param37,
  diagramMMDJMWI5Param38,
  diagramMMDJMWI5Param39,
) {
  return (
    (diagramMMDJMWI5Param39 *
      (Math.min(
        Math.max(diagramMMDJMWI5Param36, diagramMMDJMWI5Param37),
        diagramMMDJMWI5Param38,
      ) -
        diagramMMDJMWI5Param37)) /
    (diagramMMDJMWI5Param38 - diagramMMDJMWI5Param37)
  );
}
chunkAGHRB4JFN(diagramMMDJMWI5Helper2, "relativeRadius");
function diagramMMDJMWI5Helper3(
  diagramMMDJMWI5Param25,
  diagramMMDJMWI5Param26,
) {
  let diagramMMDJMWI5Value41 = diagramMMDJMWI5Param25.length,
    diagramMMDJMWI5Value42 = `M${diagramMMDJMWI5Param25[0].x},${diagramMMDJMWI5Param25[0].y}`;
  for (
    let diagramMMDJMWI5Value55 = 0;
    diagramMMDJMWI5Value55 < diagramMMDJMWI5Value41;
    diagramMMDJMWI5Value55++
  ) {
    let diagramMMDJMWI5Value57 =
        diagramMMDJMWI5Param25[
          (diagramMMDJMWI5Value55 - 1 + diagramMMDJMWI5Value41) %
            diagramMMDJMWI5Value41
        ],
      diagramMMDJMWI5Value58 = diagramMMDJMWI5Param25[diagramMMDJMWI5Value55],
      diagramMMDJMWI5Value59 =
        diagramMMDJMWI5Param25[
          (diagramMMDJMWI5Value55 + 1) % diagramMMDJMWI5Value41
        ],
      diagramMMDJMWI5Value60 =
        diagramMMDJMWI5Param25[
          (diagramMMDJMWI5Value55 + 2) % diagramMMDJMWI5Value41
        ],
      diagramMMDJMWI5Value61 = {
        x:
          diagramMMDJMWI5Value58.x +
          (diagramMMDJMWI5Value59.x - diagramMMDJMWI5Value57.x) *
            diagramMMDJMWI5Param26,
        y:
          diagramMMDJMWI5Value58.y +
          (diagramMMDJMWI5Value59.y - diagramMMDJMWI5Value57.y) *
            diagramMMDJMWI5Param26,
      },
      diagramMMDJMWI5Value62 = {
        x:
          diagramMMDJMWI5Value59.x -
          (diagramMMDJMWI5Value60.x - diagramMMDJMWI5Value58.x) *
            diagramMMDJMWI5Param26,
        y:
          diagramMMDJMWI5Value59.y -
          (diagramMMDJMWI5Value60.y - diagramMMDJMWI5Value58.y) *
            diagramMMDJMWI5Param26,
      };
    diagramMMDJMWI5Value42 += ` C${diagramMMDJMWI5Value61.x},${diagramMMDJMWI5Value61.y} ${diagramMMDJMWI5Value62.x},${diagramMMDJMWI5Value62.y} ${diagramMMDJMWI5Value59.x},${diagramMMDJMWI5Value59.y}`;
  }
  return `${diagramMMDJMWI5Value42} Z`;
}
chunkAGHRB4JFN(diagramMMDJMWI5Helper3, "closedRoundCurve");
function diagramMMDJMWI5Helper4(
  diagramMMDJMWI5Param21,
  diagramMMDJMWI5Param22,
  diagramMMDJMWI5Param23,
  diagramMMDJMWI5Param24,
) {
  if (!diagramMMDJMWI5Param23) return;
  let diagramMMDJMWI5Value39 =
      ((diagramMMDJMWI5Param24.width / 2 + diagramMMDJMWI5Param24.marginRight) *
        3) /
      4,
    diagramMMDJMWI5Value40 =
      (-(diagramMMDJMWI5Param24.height / 2 + diagramMMDJMWI5Param24.marginTop) *
        3) /
      4;
  diagramMMDJMWI5Param22.forEach((item, index) => {
    let diagramMMDJMWI5Value46 = diagramMMDJMWI5Param21
      .append("g")
      .attr(
        "transform",
        `translate(${diagramMMDJMWI5Value39}, ${diagramMMDJMWI5Value40 + index * 20})`,
      );
    diagramMMDJMWI5Value46
      .append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("class", `radarLegendBox-${index}`);
    diagramMMDJMWI5Value46
      .append("text")
      .attr("x", 16)
      .attr("y", 0)
      .attr("class", "radarLegendText")
      .text(item.label);
  });
}
chunkAGHRB4JFN(diagramMMDJMWI5Helper4, "drawLegend");
var diagramMMDJMWI5Value19 = {
    draw: diagramMMDJMWI5Value15,
  },
  diagramMMDJMWI5Value20 = chunkAGHRB4JFN(
    (diagramMMDJMWI5Param27, diagramMMDJMWI5Param28) => {
      let diagramMMDJMWI5Value43 = "";
      for (
        let diagramMMDJMWI5Value51 = 0;
        diagramMMDJMWI5Value51 < diagramMMDJMWI5Param27.THEME_COLOR_LIMIT;
        diagramMMDJMWI5Value51++
      ) {
        let diagramMMDJMWI5Value56 =
          diagramMMDJMWI5Param27[`cScale${diagramMMDJMWI5Value51}`];
        diagramMMDJMWI5Value43 += `
		.radarCurve-${diagramMMDJMWI5Value51} {
			color: ${diagramMMDJMWI5Value56};
			fill: ${diagramMMDJMWI5Value56};
			fill-opacity: ${diagramMMDJMWI5Param28.curveOpacity};
			stroke: ${diagramMMDJMWI5Value56};
			stroke-width: ${diagramMMDJMWI5Param28.curveStrokeWidth};
		}
		.radarLegendBox-${diagramMMDJMWI5Value51} {
			fill: ${diagramMMDJMWI5Value56};
			fill-opacity: ${diagramMMDJMWI5Param28.curveOpacity};
			stroke: ${diagramMMDJMWI5Value56};
		}
		`;
      }
      return diagramMMDJMWI5Value43;
    },
    "genIndexStyles",
  ),
  diagramMMDJMWI5Value21 = chunkAGHRB4JFN((diagramMMDJMWI5Param35) => {
    let diagramMMDJMWI5Value69 = chunk5PVQY5BWP(
      chunkICPOFSXXE(),
      _chunkICPOFSXXY().themeVariables,
    );
    return {
      themeVariables: diagramMMDJMWI5Value69,
      radarOptions: chunk5PVQY5BWP(
        diagramMMDJMWI5Value69.radar,
        diagramMMDJMWI5Param35,
      ),
    };
  }, "buildRadarStyleOptions");
export const diagramMMDJMWI5 = {
  parser: diagramMMDJMWI5Value14,
  db: diagramMMDJMWI5Value12,
  renderer: diagramMMDJMWI5Value19,
  styles: chunkAGHRB4JFN(({ radar } = {}) => {
    let { themeVariables, radarOptions } = diagramMMDJMWI5Value21(radar);
    return `
	.radarTitle {
		font-size: ${themeVariables.fontSize};
		color: ${themeVariables.titleColor};
		dominant-baseline: hanging;
		text-anchor: middle;
	}
	.radarAxisLine {
		stroke: ${radarOptions.axisColor};
		stroke-width: ${radarOptions.axisStrokeWidth};
	}
	.radarAxisLabel {
		dominant-baseline: middle;
		text-anchor: middle;
		font-size: ${radarOptions.axisLabelFontSize}px;
		color: ${radarOptions.axisColor};
	}
	.radarGraticule {
		fill: ${radarOptions.graticuleColor};
		fill-opacity: ${radarOptions.graticuleOpacity};
		stroke: ${radarOptions.graticuleColor};
		stroke-width: ${radarOptions.graticuleStrokeWidth};
	}
	.radarLegendText {
		text-anchor: start;
		font-size: ${radarOptions.legendFontSize}px;
		dominant-baseline: hanging;
	}
	${diagramMMDJMWI5Value20(themeVariables, radarOptions)}
	`;
  }, "styles"),
};
