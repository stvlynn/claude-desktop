// Restored from ref/webview/assets/diagram-QEK2KX5R-DVrdB3UI.js
// DiagramQEK2KX5R chunk restored from the Codex webview bundle.
import { chunkS3R3BYOJP } from "./chunk-s3r3byoj";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import {
  _chunkABZYJK2DK,
  chunkABZYJK2DN,
  chunkABZYJK2DF,
  chunkABZYJK2DO,
  chunkABZYJK2DB,
  _chunkABZYJK2DC,
  chunkABZYJK2DJ,
  chunkABZYJK2DR,
  _chunkABZYJK2DY,
  chunkABZYJK2DZ,
} from "./katex-auto-render";
import { chunkEXTU4WIE } from "./chunk-extu4-wie";
import { chunk4BX2VUAB } from "./mermaid-accessibility";
import { MermaidParserCore } from "./mermaid-parser-core-fpaj";
var diagramQEK2KX5RValue1 = {
    showLegend: true,
    ticks: 5,
    max: null,
    min: 0,
    graticule: "circle",
  },
  diagramQEK2KX5RValue2 = {
    axes: [],
    curves: [],
    options: diagramQEK2KX5RValue1,
  },
  diagramQEK2KX5RValue3 = structuredClone(diagramQEK2KX5RValue2),
  diagramQEK2KX5RValue4 = chunkABZYJK2DO.radar,
  diagramQEK2KX5RValue5 = chunkAGHRB4JFN(
    () =>
      chunkS3R3BYOJP({
        ...diagramQEK2KX5RValue4,
        ..._chunkABZYJK2DY().radar,
      }),
    "getConfig",
  ),
  diagramQEK2KX5RValue6 = chunkAGHRB4JFN(
    () => diagramQEK2KX5RValue3.axes,
    "getAxes",
  ),
  diagramQEK2KX5RValue7 = chunkAGHRB4JFN(
    () => diagramQEK2KX5RValue3.curves,
    "getCurves",
  ),
  diagramQEK2KX5RValue8 = chunkAGHRB4JFN(
    () => diagramQEK2KX5RValue3.options,
    "getOptions",
  ),
  diagramQEK2KX5RValue9 = chunkAGHRB4JFN((diagramQEK2KX5RParam40) => {
    diagramQEK2KX5RValue3.axes = diagramQEK2KX5RParam40.map((item) => ({
      name: item.name,
      label: item.label ?? item.name,
    }));
  }, "setAxes"),
  diagramQEK2KX5RValue10 = chunkAGHRB4JFN((diagramQEK2KX5RParam33) => {
    diagramQEK2KX5RValue3.curves = diagramQEK2KX5RParam33.map((item) => ({
      name: item.name,
      label: item.label ?? item.name,
      entries: diagramQEK2KX5RValue11(item.entries),
    }));
  }, "setCurves"),
  diagramQEK2KX5RValue11 = chunkAGHRB4JFN((diagramQEK2KX5RParam29) => {
    if (diagramQEK2KX5RParam29[0].axis == null)
      return diagramQEK2KX5RParam29.map((item) => item.value);
    let diagramQEK2KX5RValue45 = diagramQEK2KX5RValue6();
    if (diagramQEK2KX5RValue45.length === 0)
      throw Error("Axes must be populated before curves for reference entries");
    return diagramQEK2KX5RValue45.map((item) => {
      let diagramQEK2KX5RValue63 = diagramQEK2KX5RParam29.find(
        (_item) => _item.axis?.$refText === item.name,
      );
      if (diagramQEK2KX5RValue63 === undefined)
        throw Error("Missing entry for axis " + item.label);
      return diagramQEK2KX5RValue63.value;
    });
  }, "computeCurveEntries"),
  diagramQEK2KX5RValue12 = {
    getAxes: diagramQEK2KX5RValue6,
    getCurves: diagramQEK2KX5RValue7,
    getOptions: diagramQEK2KX5RValue8,
    setAxes: diagramQEK2KX5RValue9,
    setCurves: diagramQEK2KX5RValue10,
    setOptions: chunkAGHRB4JFN((diagramQEK2KX5RParam32) => {
      let diagramQEK2KX5RValue52 = diagramQEK2KX5RParam32.reduce(
        (accumulator, current) => (
          (accumulator[current.name] = current),
          accumulator
        ),
        {},
      );
      diagramQEK2KX5RValue3.options = {
        showLegend:
          diagramQEK2KX5RValue52.showLegend?.value ??
          diagramQEK2KX5RValue1.showLegend,
        ticks:
          diagramQEK2KX5RValue52.ticks?.value ?? diagramQEK2KX5RValue1.ticks,
        max: diagramQEK2KX5RValue52.max?.value ?? diagramQEK2KX5RValue1.max,
        min: diagramQEK2KX5RValue52.min?.value ?? diagramQEK2KX5RValue1.min,
        graticule:
          diagramQEK2KX5RValue52.graticule?.value ??
          diagramQEK2KX5RValue1.graticule,
      };
    }, "setOptions"),
    getConfig: diagramQEK2KX5RValue5,
    clear: chunkAGHRB4JFN(() => {
      _chunkABZYJK2DK();
      diagramQEK2KX5RValue3 = structuredClone(diagramQEK2KX5RValue2);
    }, "clear"),
    setAccTitle: chunkABZYJK2DN,
    getAccTitle: chunkABZYJK2DR,
    setDiagramTitle: _chunkABZYJK2DC,
    getDiagramTitle: chunkABZYJK2DF,
    getAccDescription: chunkABZYJK2DJ,
    setAccDescription: chunkABZYJK2DZ,
  },
  diagramQEK2KX5RValue13 = chunkAGHRB4JFN((diagramQEK2KX5RParam34) => {
    chunk4BX2VUAB(diagramQEK2KX5RParam34, diagramQEK2KX5RValue12);
    let { axes, curves, options } = diagramQEK2KX5RParam34;
    diagramQEK2KX5RValue12.setAxes(axes);
    diagramQEK2KX5RValue12.setCurves(curves);
    diagramQEK2KX5RValue12.setOptions(options);
  }, "populate"),
  diagramQEK2KX5RValue14 = {
    parse: chunkAGHRB4JFN(async (diagramQEK2KX5RParam41) => {
      let diagramQEK2KX5RValue70 = await MermaidParserCore(
        "radar",
        diagramQEK2KX5RParam41,
      );
      chunkAGHRB4JFR.debug(diagramQEK2KX5RValue70);
      diagramQEK2KX5RValue13(diagramQEK2KX5RValue70);
    }, "parse"),
  },
  diagramQEK2KX5RValue15 = chunkAGHRB4JFN(
    (
      diagramQEK2KX5RParam13,
      diagramQEK2KX5RParam14,
      diagramQEK2KX5RParam15,
      diagramQEK2KX5RParam16,
    ) => {
      let diagramQEK2KX5RValue24 = diagramQEK2KX5RParam16.db,
        diagramQEK2KX5RValue25 = diagramQEK2KX5RValue24.getAxes(),
        diagramQEK2KX5RValue26 = diagramQEK2KX5RValue24.getCurves(),
        diagramQEK2KX5RValue27 = diagramQEK2KX5RValue24.getOptions(),
        diagramQEK2KX5RValue28 = diagramQEK2KX5RValue24.getConfig(),
        diagramQEK2KX5RValue29 = diagramQEK2KX5RValue24.getDiagramTitle(),
        diagramQEK2KX5RValue30 = diagramQEK2KX5RValue16(
          chunkEXTU4WIE(diagramQEK2KX5RParam14),
          diagramQEK2KX5RValue28,
        ),
        diagramQEK2KX5RValue31 =
          diagramQEK2KX5RValue27.max ??
          Math.max(
            ...diagramQEK2KX5RValue26.map((item) => Math.max(...item.entries)),
          ),
        diagramQEK2KX5RValue32 = diagramQEK2KX5RValue27.min,
        diagramQEK2KX5RValue33 =
          Math.min(
            diagramQEK2KX5RValue28.width,
            diagramQEK2KX5RValue28.height,
          ) / 2;
      diagramQEK2KX5RValue17(
        diagramQEK2KX5RValue30,
        diagramQEK2KX5RValue25,
        diagramQEK2KX5RValue33,
        diagramQEK2KX5RValue27.ticks,
        diagramQEK2KX5RValue27.graticule,
      );
      diagramQEK2KX5RValue18(
        diagramQEK2KX5RValue30,
        diagramQEK2KX5RValue25,
        diagramQEK2KX5RValue33,
        diagramQEK2KX5RValue28,
      );
      diagramQEK2KX5RHelper1(
        diagramQEK2KX5RValue30,
        diagramQEK2KX5RValue25,
        diagramQEK2KX5RValue26,
        diagramQEK2KX5RValue32,
        diagramQEK2KX5RValue31,
        diagramQEK2KX5RValue27.graticule,
        diagramQEK2KX5RValue28,
      );
      diagramQEK2KX5RHelper4(
        diagramQEK2KX5RValue30,
        diagramQEK2KX5RValue26,
        diagramQEK2KX5RValue27.showLegend,
        diagramQEK2KX5RValue28,
      );
      diagramQEK2KX5RValue30
        .append("text")
        .attr("class", "radarTitle")
        .text(diagramQEK2KX5RValue29)
        .attr("x", 0)
        .attr(
          "y",
          -diagramQEK2KX5RValue28.height / 2 - diagramQEK2KX5RValue28.marginTop,
        );
    },
    "draw",
  ),
  diagramQEK2KX5RValue16 = chunkAGHRB4JFN(
    (diagramQEK2KX5RParam30, diagramQEK2KX5RParam31) => {
      let diagramQEK2KX5RValue47 =
          diagramQEK2KX5RParam31.width +
          diagramQEK2KX5RParam31.marginLeft +
          diagramQEK2KX5RParam31.marginRight,
        diagramQEK2KX5RValue48 =
          diagramQEK2KX5RParam31.height +
          diagramQEK2KX5RParam31.marginTop +
          diagramQEK2KX5RParam31.marginBottom,
        diagramQEK2KX5RValue49 = {
          x:
            diagramQEK2KX5RParam31.marginLeft +
            diagramQEK2KX5RParam31.width / 2,
          y:
            diagramQEK2KX5RParam31.marginTop +
            diagramQEK2KX5RParam31.height / 2,
        };
      return (
        diagramQEK2KX5RParam30
          .attr(
            "viewbox",
            `0 0 ${diagramQEK2KX5RValue47} ${diagramQEK2KX5RValue48}`,
          )
          .attr("width", diagramQEK2KX5RValue47)
          .attr("height", diagramQEK2KX5RValue48),
        diagramQEK2KX5RParam30
          .append("g")
          .attr(
            "transform",
            `translate(${diagramQEK2KX5RValue49.x}, ${diagramQEK2KX5RValue49.y})`,
          )
      );
    },
    "drawFrame",
  ),
  diagramQEK2KX5RValue17 = chunkAGHRB4JFN(
    (
      diagramQEK2KX5RParam8,
      diagramQEK2KX5RParam9,
      diagramQEK2KX5RParam10,
      diagramQEK2KX5RParam11,
      diagramQEK2KX5RParam12,
    ) => {
      if (diagramQEK2KX5RParam12 === "circle")
        for (
          let diagramQEK2KX5RValue67 = 0;
          diagramQEK2KX5RValue67 < diagramQEK2KX5RParam11;
          diagramQEK2KX5RValue67++
        ) {
          let diagramQEK2KX5RValue68 =
            (diagramQEK2KX5RParam10 * (diagramQEK2KX5RValue67 + 1)) /
            diagramQEK2KX5RParam11;
          diagramQEK2KX5RParam8
            .append("circle")
            .attr("r", diagramQEK2KX5RValue68)
            .attr("class", "radarGraticule");
        }
      else if (diagramQEK2KX5RParam12 === "polygon") {
        let diagramQEK2KX5RValue44 = diagramQEK2KX5RParam9.length;
        for (
          let diagramQEK2KX5RValue50 = 0;
          diagramQEK2KX5RValue50 < diagramQEK2KX5RParam11;
          diagramQEK2KX5RValue50++
        ) {
          let diagramQEK2KX5RValue53 =
              (diagramQEK2KX5RParam10 * (diagramQEK2KX5RValue50 + 1)) /
              diagramQEK2KX5RParam11,
            diagramQEK2KX5RValue54 = diagramQEK2KX5RParam9
              .map((item, index) => {
                let diagramQEK2KX5RValue66 =
                  (2 * index * Math.PI) / diagramQEK2KX5RValue44 - Math.PI / 2;
                return `${diagramQEK2KX5RValue53 * Math.cos(diagramQEK2KX5RValue66)},${diagramQEK2KX5RValue53 * Math.sin(diagramQEK2KX5RValue66)}`;
              })
              .join(" ");
          diagramQEK2KX5RParam8
            .append("polygon")
            .attr("points", diagramQEK2KX5RValue54)
            .attr("class", "radarGraticule");
        }
      }
    },
    "drawGraticule",
  ),
  diagramQEK2KX5RValue18 = chunkAGHRB4JFN(
    (
      diagramQEK2KX5RParam17,
      diagramQEK2KX5RParam18,
      diagramQEK2KX5RParam19,
      diagramQEK2KX5RParam20,
    ) => {
      let diagramQEK2KX5RValue34 = diagramQEK2KX5RParam18.length;
      for (
        let diagramQEK2KX5RValue35 = 0;
        diagramQEK2KX5RValue35 < diagramQEK2KX5RValue34;
        diagramQEK2KX5RValue35++
      ) {
        let diagramQEK2KX5RValue37 =
            diagramQEK2KX5RParam18[diagramQEK2KX5RValue35].label,
          diagramQEK2KX5RValue38 =
            (2 * diagramQEK2KX5RValue35 * Math.PI) / diagramQEK2KX5RValue34 -
            Math.PI / 2;
        diagramQEK2KX5RParam17
          .append("line")
          .attr("x1", 0)
          .attr("y1", 0)
          .attr(
            "x2",
            diagramQEK2KX5RParam19 *
              diagramQEK2KX5RParam20.axisScaleFactor *
              Math.cos(diagramQEK2KX5RValue38),
          )
          .attr(
            "y2",
            diagramQEK2KX5RParam19 *
              diagramQEK2KX5RParam20.axisScaleFactor *
              Math.sin(diagramQEK2KX5RValue38),
          )
          .attr("class", "radarAxisLine");
        diagramQEK2KX5RParam17
          .append("text")
          .text(diagramQEK2KX5RValue37)
          .attr(
            "x",
            diagramQEK2KX5RParam19 *
              diagramQEK2KX5RParam20.axisLabelFactor *
              Math.cos(diagramQEK2KX5RValue38),
          )
          .attr(
            "y",
            diagramQEK2KX5RParam19 *
              diagramQEK2KX5RParam20.axisLabelFactor *
              Math.sin(diagramQEK2KX5RValue38),
          )
          .attr("class", "radarAxisLabel");
      }
    },
    "drawAxes",
  );
function diagramQEK2KX5RHelper1(
  diagramQEK2KX5RParam1,
  diagramQEK2KX5RParam2,
  diagramQEK2KX5RParam3,
  diagramQEK2KX5RParam4,
  diagramQEK2KX5RParam5,
  diagramQEK2KX5RParam6,
  diagramQEK2KX5RParam7,
) {
  let diagramQEK2KX5RValue22 = diagramQEK2KX5RParam2.length,
    diagramQEK2KX5RValue23 =
      Math.min(diagramQEK2KX5RParam7.width, diagramQEK2KX5RParam7.height) / 2;
  diagramQEK2KX5RParam3.forEach((item, index) => {
    if (item.entries.length !== diagramQEK2KX5RValue22) return;
    let diagramQEK2KX5RValue36 = item.entries.map((_item, _index) => {
      let diagramQEK2KX5RValue64 =
          (2 * Math.PI * _index) / diagramQEK2KX5RValue22 - Math.PI / 2,
        diagramQEK2KX5RValue65 = diagramQEK2KX5RHelper2(
          _item,
          diagramQEK2KX5RParam4,
          diagramQEK2KX5RParam5,
          diagramQEK2KX5RValue23,
        );
      return {
        x: diagramQEK2KX5RValue65 * Math.cos(diagramQEK2KX5RValue64),
        y: diagramQEK2KX5RValue65 * Math.sin(diagramQEK2KX5RValue64),
      };
    });
    diagramQEK2KX5RParam6 === "circle"
      ? diagramQEK2KX5RParam1
          .append("path")
          .attr(
            "d",
            diagramQEK2KX5RHelper3(
              diagramQEK2KX5RValue36,
              diagramQEK2KX5RParam7.curveTension,
            ),
          )
          .attr("class", `radarCurve-${index}`)
      : diagramQEK2KX5RParam6 === "polygon" &&
        diagramQEK2KX5RParam1
          .append("polygon")
          .attr(
            "points",
            diagramQEK2KX5RValue36
              .map((_item) => `${_item.x},${_item.y}`)
              .join(" "),
          )
          .attr("class", `radarCurve-${index}`);
  });
}
chunkAGHRB4JFN(diagramQEK2KX5RHelper1, "drawCurves");
function diagramQEK2KX5RHelper2(
  diagramQEK2KX5RParam36,
  diagramQEK2KX5RParam37,
  diagramQEK2KX5RParam38,
  diagramQEK2KX5RParam39,
) {
  return (
    (diagramQEK2KX5RParam39 *
      (Math.min(
        Math.max(diagramQEK2KX5RParam36, diagramQEK2KX5RParam37),
        diagramQEK2KX5RParam38,
      ) -
        diagramQEK2KX5RParam37)) /
    (diagramQEK2KX5RParam38 - diagramQEK2KX5RParam37)
  );
}
chunkAGHRB4JFN(diagramQEK2KX5RHelper2, "relativeRadius");
function diagramQEK2KX5RHelper3(
  diagramQEK2KX5RParam25,
  diagramQEK2KX5RParam26,
) {
  let diagramQEK2KX5RValue41 = diagramQEK2KX5RParam25.length,
    diagramQEK2KX5RValue42 = `M${diagramQEK2KX5RParam25[0].x},${diagramQEK2KX5RParam25[0].y}`;
  for (
    let diagramQEK2KX5RValue55 = 0;
    diagramQEK2KX5RValue55 < diagramQEK2KX5RValue41;
    diagramQEK2KX5RValue55++
  ) {
    let diagramQEK2KX5RValue57 =
        diagramQEK2KX5RParam25[
          (diagramQEK2KX5RValue55 - 1 + diagramQEK2KX5RValue41) %
            diagramQEK2KX5RValue41
        ],
      diagramQEK2KX5RValue58 = diagramQEK2KX5RParam25[diagramQEK2KX5RValue55],
      diagramQEK2KX5RValue59 =
        diagramQEK2KX5RParam25[
          (diagramQEK2KX5RValue55 + 1) % diagramQEK2KX5RValue41
        ],
      diagramQEK2KX5RValue60 =
        diagramQEK2KX5RParam25[
          (diagramQEK2KX5RValue55 + 2) % diagramQEK2KX5RValue41
        ],
      diagramQEK2KX5RValue61 = {
        x:
          diagramQEK2KX5RValue58.x +
          (diagramQEK2KX5RValue59.x - diagramQEK2KX5RValue57.x) *
            diagramQEK2KX5RParam26,
        y:
          diagramQEK2KX5RValue58.y +
          (diagramQEK2KX5RValue59.y - diagramQEK2KX5RValue57.y) *
            diagramQEK2KX5RParam26,
      },
      diagramQEK2KX5RValue62 = {
        x:
          diagramQEK2KX5RValue59.x -
          (diagramQEK2KX5RValue60.x - diagramQEK2KX5RValue58.x) *
            diagramQEK2KX5RParam26,
        y:
          diagramQEK2KX5RValue59.y -
          (diagramQEK2KX5RValue60.y - diagramQEK2KX5RValue58.y) *
            diagramQEK2KX5RParam26,
      };
    diagramQEK2KX5RValue42 += ` C${diagramQEK2KX5RValue61.x},${diagramQEK2KX5RValue61.y} ${diagramQEK2KX5RValue62.x},${diagramQEK2KX5RValue62.y} ${diagramQEK2KX5RValue59.x},${diagramQEK2KX5RValue59.y}`;
  }
  return `${diagramQEK2KX5RValue42} Z`;
}
chunkAGHRB4JFN(diagramQEK2KX5RHelper3, "closedRoundCurve");
function diagramQEK2KX5RHelper4(
  diagramQEK2KX5RParam21,
  diagramQEK2KX5RParam22,
  diagramQEK2KX5RParam23,
  diagramQEK2KX5RParam24,
) {
  if (!diagramQEK2KX5RParam23) return;
  let diagramQEK2KX5RValue39 =
      ((diagramQEK2KX5RParam24.width / 2 + diagramQEK2KX5RParam24.marginRight) *
        3) /
      4,
    diagramQEK2KX5RValue40 =
      (-(diagramQEK2KX5RParam24.height / 2 + diagramQEK2KX5RParam24.marginTop) *
        3) /
      4;
  diagramQEK2KX5RParam22.forEach((item, index) => {
    let diagramQEK2KX5RValue46 = diagramQEK2KX5RParam21
      .append("g")
      .attr(
        "transform",
        `translate(${diagramQEK2KX5RValue39}, ${diagramQEK2KX5RValue40 + index * 20})`,
      );
    diagramQEK2KX5RValue46
      .append("rect")
      .attr("width", 12)
      .attr("height", 12)
      .attr("class", `radarLegendBox-${index}`);
    diagramQEK2KX5RValue46
      .append("text")
      .attr("x", 16)
      .attr("y", 0)
      .attr("class", "radarLegendText")
      .text(item.label);
  });
}
chunkAGHRB4JFN(diagramQEK2KX5RHelper4, "drawLegend");
var diagramQEK2KX5RValue19 = {
    draw: diagramQEK2KX5RValue15,
  },
  diagramQEK2KX5RValue20 = chunkAGHRB4JFN(
    (diagramQEK2KX5RParam27, diagramQEK2KX5RParam28) => {
      let diagramQEK2KX5RValue43 = "";
      for (
        let diagramQEK2KX5RValue51 = 0;
        diagramQEK2KX5RValue51 < diagramQEK2KX5RParam27.THEME_COLOR_LIMIT;
        diagramQEK2KX5RValue51++
      ) {
        let diagramQEK2KX5RValue56 =
          diagramQEK2KX5RParam27[`cScale${diagramQEK2KX5RValue51}`];
        diagramQEK2KX5RValue43 += `
		.radarCurve-${diagramQEK2KX5RValue51} {
			color: ${diagramQEK2KX5RValue56};
			fill: ${diagramQEK2KX5RValue56};
			fill-opacity: ${diagramQEK2KX5RParam28.curveOpacity};
			stroke: ${diagramQEK2KX5RValue56};
			stroke-width: ${diagramQEK2KX5RParam28.curveStrokeWidth};
		}
		.radarLegendBox-${diagramQEK2KX5RValue51} {
			fill: ${diagramQEK2KX5RValue56};
			fill-opacity: ${diagramQEK2KX5RParam28.curveOpacity};
			stroke: ${diagramQEK2KX5RValue56};
		}
		`;
      }
      return diagramQEK2KX5RValue43;
    },
    "genIndexStyles",
  ),
  diagramQEK2KX5RValue21 = chunkAGHRB4JFN((diagramQEK2KX5RParam35) => {
    let diagramQEK2KX5RValue69 = chunkS3R3BYOJP(
      chunkABZYJK2DB(),
      _chunkABZYJK2DY().themeVariables,
    );
    return {
      themeVariables: diagramQEK2KX5RValue69,
      radarOptions: chunkS3R3BYOJP(
        diagramQEK2KX5RValue69.radar,
        diagramQEK2KX5RParam35,
      ),
    };
  }, "buildRadarStyleOptions");
export const diagramQEK2KX5R = {
  parser: diagramQEK2KX5RValue14,
  db: diagramQEK2KX5RValue12,
  renderer: diagramQEK2KX5RValue19,
  styles: chunkAGHRB4JFN(({ radar } = {}) => {
    let { themeVariables, radarOptions } = diagramQEK2KX5RValue21(radar);
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
	${diagramQEK2KX5RValue20(themeVariables, radarOptions)}
	`;
  }, "styles"),
};
