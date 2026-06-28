// Restored from ref/webview/assets/chunk-336JU56O-D9FbfXWS.js
// Chunk336JU56O chunk restored from the Codex webview bundle.
const __vite__mapDeps = (
  chunk336JU56OParam3,
  chunk336JU56OParam4 = __vite__mapDeps,
  chunk336JU56OParam5 = chunk336JU56OParam4.f ||
    (chunk336JU56OParam4.f = [
      "./dagre-KV5264BT-wPJhnht8.js",
      "./dist-D8VrLBqU.js",
      "./chunk-Cq_f4orQ.js",
      "./src-n5zF1GB1.js",
      "./string-CKccV857.js",
      "./dagre-Ba2O9HBx.js",
      "./graphlib-Dk1ocXNC.js",
      "./isEmpty-CKN2Jii3.js",
      "./_baseFor-eDjxQiUL.js",
      "./reduce-C4fu3kBc.js",
      "./merge-Ch0yXQoh.js",
      "./union-8iT5ANuG.js",
      "./zipObject-HR30GI0P.js",
      "./flatten-CdNmRCTf.js",
      "./chunk-AGHRB4JF-Bxy73eEy.js",
      "./chunk-ICPOFSXX-Dk2rFw9E.js",
      "./preload-helper-BmHspSiq.js",
      "./invert-D9sJN2p1.js",
      "./clone-2yQp58UZ.js",
      "./marked.esm-CESG9QWl.js",
      "./chunk-5FUZZQ4R-B4cKsdW4.js",
      "./chunk-5PVQY5BW-CsieDbRK.js",
      "./step-K6tEdR0Q.js",
      "./math-BO6C2O78.js",
      "./monotone-DKOUTWfZ.js",
      "./chunk-U2HBQHQK-DJ4vuuzw.js",
      "./esm-DbqKqkZh.js",
      "./chunk-X2U36JSP-DWvyIaf0.js",
      "./chunk-ZZ45TVLE-CvzuGe_q.js",
      "./rough.esm-tT7A6vdj.js",
      "./chunk-BSJP7CBP-kgPEHQNd.js",
      "./chunk-ENJZ2VHE-C0rUgAJ1.js",
      "./line-DIsP-Yv_.js",
      "./path-BiIEs4Yy.js",
      "./array-hqvMvHot.js",
      "./cose-bilkent-S5V4N54A-BlVTOsyx.js",
      "./cytoscape-cose-bilkent-3yd98erd.js",
      "./cytoscape.esm-EFcka3gR.js",
    ]),
) => chunk336JU56OParam3.map((item) => chunk336JU56OParam5[item]);
import { PreloadHelper } from "../utils/preload-helper";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import { _chunkICPOFSXXS, chunkICPOFSXXY } from "./chunk-icpofsxx";
import { chunk5PVQY5BWU } from "./chunk-5pvqy5bw";
import {
  chunk5FUZZQ4RA,
  chunk5FUZZQ4RI,
  chunk5FUZZQ4RS,
} from "./mermaid-shape-renderer";
import {
  chunkENJZ2VHEA,
  chunkENJZ2VHEI,
  chunkENJZ2VHEN,
  chunkENJZ2VHER,
} from "./mermaid-edge-renderer-k5";
var chunk336JU56OValue1 = {
    common: _chunkICPOFSXXS,
    getConfig: chunkICPOFSXXY,
    insertCluster: chunk5FUZZQ4RI,
    insertEdge: chunkENJZ2VHEN,
    insertEdgeLabel: chunkENJZ2VHER,
    insertMarkers: chunkENJZ2VHEI,
    insertNode: chunk5FUZZQ4RA,
    interpolateToCurve: chunk5PVQY5BWU,
    labelHelper: chunk5FUZZQ4RS,
    log: chunkAGHRB4JFR,
    positionEdgeLabel: chunkENJZ2VHEA,
  },
  chunk336JU56OValue2 = {},
  chunk336JU56ON = chunkAGHRB4JFN((chunk336JU56OParam7) => {
    for (let chunk336JU56OValue9 of chunk336JU56OParam7)
      chunk336JU56OValue2[chunk336JU56OValue9.name] = chunk336JU56OValue9;
  }, "registerLayoutLoaders");
chunkAGHRB4JFN(() => {
  chunk336JU56ON([
    {
      name: "dagre",
      loader: chunkAGHRB4JFN(
        async () =>
          await PreloadHelper(
            () => import("./mermaid-dagre-renderer-k5"),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
            ]),
            import.meta.url,
          ),
        "loader",
      ),
    },
    ...[
      {
        name: "cose-bilkent",
        loader: chunkAGHRB4JFN(
          async () =>
            await PreloadHelper(
              () => import("./cose-bilkent-s5-v4-n54-a-bl-vt-osyx"),
              __vite__mapDeps([35, 2, 36, 37, 3, 4, 14]),
              import.meta.url,
            ),
          "loader",
        ),
      },
    ],
  ]);
}, "registerDefaultLayoutLoaders")();
export const chunk336JU56OT = chunkAGHRB4JFN(
  (chunk336JU56OParam6 = "", { fallback = "dagre" } = {}) => {
    if (chunk336JU56OParam6 in chunk336JU56OValue2) return chunk336JU56OParam6;
    if (fallback in chunk336JU56OValue2)
      return (
        chunkAGHRB4JFR.warn(
          `Layout algorithm ${chunk336JU56OParam6} is not registered. Using ${fallback} as fallback.`,
        ),
        fallback
      );
    throw Error(
      `Both layout algorithms ${chunk336JU56OParam6} and ${fallback} are not registered.`,
    );
  },
  "getRegisteredLayoutAlgorithm",
);
export const chunk336JU56OR = chunkAGHRB4JFN(
  async (chunk336JU56OParam1, chunk336JU56OParam2) => {
    if (!(chunk336JU56OParam1.layoutAlgorithm in chunk336JU56OValue2))
      throw Error(
        `Unknown layout algorithm: ${chunk336JU56OParam1.layoutAlgorithm}`,
      );
    if (chunk336JU56OParam1.diagramId)
      for (let chunk336JU56OValue7 of chunk336JU56OParam1.nodes) {
        let chunk336JU56OValue8 =
          chunk336JU56OValue7.domId || chunk336JU56OValue7.id;
        chunk336JU56OValue7.domId = `${chunk336JU56OParam1.diagramId}-${chunk336JU56OValue8}`;
      }
    let chunk336JU56OValue3 =
        chunk336JU56OValue2[chunk336JU56OParam1.layoutAlgorithm],
      chunk336JU56OValue4 = await chunk336JU56OValue3.loader(),
      { theme, themeVariables } = chunk336JU56OParam1.config,
      { useGradient, gradientStart, gradientStop } = themeVariables,
      chunk336JU56OValue5 = chunk336JU56OParam2.attr("id");
    if (
      (chunk336JU56OParam2
        .append("defs")
        .append("filter")
        .attr("id", `${chunk336JU56OValue5}-drop-shadow`)
        .attr("height", "130%")
        .attr("width", "130%")
        .append("feDropShadow")
        .attr("dx", "4")
        .attr("dy", "4")
        .attr("stdDeviation", 0)
        .attr("flood-opacity", "0.06")
        .attr(
          "flood-color",
          `${theme?.includes("dark") ? "#FFFFFF" : "#000000"}`,
        ),
      chunk336JU56OParam2
        .append("defs")
        .append("filter")
        .attr("id", `${chunk336JU56OValue5}-drop-shadow-small`)
        .attr("height", "150%")
        .attr("width", "150%")
        .append("feDropShadow")
        .attr("dx", "2")
        .attr("dy", "2")
        .attr("stdDeviation", 0)
        .attr("flood-opacity", "0.06")
        .attr(
          "flood-color",
          `${theme?.includes("dark") ? "#FFFFFF" : "#000000"}`,
        ),
      useGradient)
    ) {
      let chunk336JU56OValue6 = chunk336JU56OParam2
        .append("linearGradient")
        .attr("id", chunk336JU56OParam2.attr("id") + "-gradient")
        .attr("gradientUnits", "objectBoundingBox")
        .attr("x1", "0%")
        .attr("y1", "0%")
        .attr("x2", "100%")
        .attr("y2", "0%");
      chunk336JU56OValue6
        .append("svg:stop")
        .attr("offset", "0%")
        .attr("stop-color", gradientStart)
        .attr("stop-opacity", 1);
      chunk336JU56OValue6
        .append("svg:stop")
        .attr("offset", "100%")
        .attr("stop-color", gradientStop)
        .attr("stop-opacity", 1);
    }
    return chunk336JU56OValue4.render(
      chunk336JU56OParam1,
      chunk336JU56OParam2,
      chunk336JU56OValue1,
      {
        algorithm: chunk336JU56OValue3.algorithm,
      },
    );
  },
  "render",
);
export { chunk336JU56ON };
