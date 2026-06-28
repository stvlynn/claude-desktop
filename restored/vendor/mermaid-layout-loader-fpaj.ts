// Restored from ref/webview/assets/chunk-N4CR4FBY-ClZLl4Py.js
// ChunkN4CR4FBY chunk restored from the Codex webview bundle.
const __vite__mapDeps = (
  chunkN4CR4FBYParam1,
  chunkN4CR4FBYParam2 = __vite__mapDeps,
  chunkN4CR4FBYParam3 = chunkN4CR4FBYParam2.f ||
    (chunkN4CR4FBYParam2.f = [
      "./dagre-6UL2VRFP-DHAAtlj_.js",
      "./dist-D8VrLBqU.js",
      "./chunk-Cq_f4orQ.js",
      "./src-n5zF1GB1.js",
      "./string-CKccV857.js",
      "./dagre-DgCFaaOE.js",
      "./graphlib-DGNlaJmK.js",
      "./isEmpty-CTfqpukK.js",
      "./isArrayLikeObject-1Hrr5Oll.js",
      "./_baseUniq-C2aVs9t8.js",
      "./chunk-S3R3BYOJ-B7UcUgIb.js",
      "./step-K6tEdR0Q.js",
      "./math-BO6C2O78.js",
      "./monotone-DKOUTWfZ.js",
      "./chunk-AGHRB4JF-DNCNxfKz.js",
      "./chunk-ABZYJK2D-8WiwWXHe.js",
      "./preload-helper-BmHspSiq.js",
      "./invert-D9sJN2p1.js",
      "./_basePickBy-X1_M8KZ0.js",
      "./clone-Mnyt6qd1.js",
      "./marked.esm-CESG9QWl.js",
      "./chunk-ATLVNIR6-D9WszxCx.js",
      "./chunk-CVBHYZKI-D5c0MJ_k.js",
      "./chunk-HN2XXSSU-dadJeUL1.js",
      "./chunk-JA3XYJ7Z-CjR9BG5n.js",
      "./esm-DbqKqkZh.js",
      "./chunk-JZLCHNYA-HNai7LB6.js",
      "./rough.esm-tT7A6vdj.js",
      "./chunk-QXUST7PY-B8nc5wSD.js",
      "./line-DIsP-Yv_.js",
      "./path-BiIEs4Yy.js",
      "./array-hqvMvHot.js",
      "./cose-bilkent-S5V4N54A-C42L7Iw8.js",
      "./cytoscape-cose-bilkent-3yd98erd.js",
      "./cytoscape.esm-EFcka3gR.js",
    ]),
) => chunkN4CR4FBYParam1.map((item) => chunkN4CR4FBYParam3[item]);
import { PreloadHelper } from "../utils/preload-helper";
import { chunkS3R3BYOJU } from "./chunk-s3r3byoj";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import { chunkABZYJK2DS, _chunkABZYJK2DY } from "./katex-auto-render";
import {
  chunkJZLCHNYAT,
  chunkJZLCHNYAN,
  chunkJZLCHNYAR,
} from "./chunk-jzlchnya";
import {
  chunkQXUST7PYA,
  chunkQXUST7PYI,
  chunkQXUST7PYN,
  chunkQXUST7PYR,
} from "./mermaid-edge-renderer";
var chunkN4CR4FBYValue1 = {
    common: chunkABZYJK2DS,
    getConfig: _chunkABZYJK2DY,
    insertCluster: chunkJZLCHNYAN,
    insertEdge: chunkQXUST7PYN,
    insertEdgeLabel: chunkQXUST7PYR,
    insertMarkers: chunkQXUST7PYI,
    insertNode: chunkJZLCHNYAT,
    interpolateToCurve: chunkS3R3BYOJU,
    labelHelper: chunkJZLCHNYAR,
    log: chunkAGHRB4JFR,
    positionEdgeLabel: chunkQXUST7PYA,
  },
  chunkN4CR4FBYValue2 = {},
  chunkN4CR4FBYN = chunkAGHRB4JFN((chunkN4CR4FBYParam7) => {
    for (let chunkN4CR4FBYValue4 of chunkN4CR4FBYParam7)
      chunkN4CR4FBYValue2[chunkN4CR4FBYValue4.name] = chunkN4CR4FBYValue4;
  }, "registerLayoutLoaders");
chunkAGHRB4JFN(() => {
  chunkN4CR4FBYN([
    {
      name: "dagre",
      loader: chunkAGHRB4JFN(
        async () =>
          await PreloadHelper(
            () => import("./mermaid-dagre-renderer"),
            __vite__mapDeps([
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
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
              () => import("./cose-bilkent-s5-v4-n54-a"),
              __vite__mapDeps([32, 2, 33, 34, 3, 4, 14]),
              import.meta.url,
            ),
          "loader",
        ),
      },
    ],
  ]);
}, "registerDefaultLayoutLoaders")();
export const chunkN4CR4FBYT = chunkAGHRB4JFN(
  (chunkN4CR4FBYParam4 = "", { fallback = "dagre" } = {}) => {
    if (chunkN4CR4FBYParam4 in chunkN4CR4FBYValue2) return chunkN4CR4FBYParam4;
    if (fallback in chunkN4CR4FBYValue2)
      return (
        chunkAGHRB4JFR.warn(
          `Layout algorithm ${chunkN4CR4FBYParam4} is not registered. Using ${fallback} as fallback.`,
        ),
        fallback
      );
    throw Error(
      `Both layout algorithms ${chunkN4CR4FBYParam4} and ${fallback} are not registered.`,
    );
  },
  "getRegisteredLayoutAlgorithm",
);
export const chunkN4CR4FBYR = chunkAGHRB4JFN(
  async (chunkN4CR4FBYParam5, chunkN4CR4FBYParam6) => {
    if (!(chunkN4CR4FBYParam5.layoutAlgorithm in chunkN4CR4FBYValue2))
      throw Error(
        `Unknown layout algorithm: ${chunkN4CR4FBYParam5.layoutAlgorithm}`,
      );
    let chunkN4CR4FBYValue3 =
      chunkN4CR4FBYValue2[chunkN4CR4FBYParam5.layoutAlgorithm];
    return (await chunkN4CR4FBYValue3.loader()).render(
      chunkN4CR4FBYParam5,
      chunkN4CR4FBYParam6,
      chunkN4CR4FBYValue1,
      {
        algorithm: chunkN4CR4FBYValue3.algorithm,
      },
    );
  },
  "render",
);
export { chunkN4CR4FBYN };
