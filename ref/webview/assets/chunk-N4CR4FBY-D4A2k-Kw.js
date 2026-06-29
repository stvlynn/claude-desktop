const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dagre-6UL2VRFP-CTBugNjf.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./dagre-5oTtyBe6.js",
      "./graphlib-CU4GKOO2.js",
      "./isEmpty-BJ4mdsaY.js",
      "./merge-jSBXKSH5.js",
      "./lodash-BhBwOd7I.js",
      "./chunk-AGHRB4JF-DJZonIPK.js",
      "./chunk-ABZYJK2D-DPaXcbcL.js",
      "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js",
      "./dist-Dcs2yc8m.js",
      "./chunk-ATLVNIR6-CqT90CcJ.js",
      "./chunk-CVBHYZKI-CCA47Th3.js",
      "./chunk-HN2XXSSU-BJwKN-er.js",
      "./chunk-JA3XYJ7Z-DXPUiutJ.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js",
      "./esm-CuAuNray.js",
      "./src-CTe_6Jg1.js",
      "./app-initial~app-main~onboarding-page~mermaid-diagram~xychartDiagram-PRI3JC2R~timeline-defin~dcen2xty-ZWKQ4q6W.js",
      "./src-BhkLFyc4.js",
      "./chunk-S3R3BYOJ-BBYtiirL.js",
      "./dist-CD74BDfk.js",
      "./chunk-JZLCHNYA-BB0008aK.js",
      "./rough.esm-BmcJJgrn.js",
      "./chunk-QXUST7PY-bOMzPJkM.js",
      "./cose-bilkent-S5V4N54A-DOa-Zu-d.js",
      "./cytoscape-cose-bilkent-Cew5xac-.js",
      "./cytoscape.esm-gCnb3XbU.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  ar as t,
  ir as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import { i as r, n as i, r as a } from "./chunk-AGHRB4JF-DJZonIPK.js";
import { k as o, s, y as c } from "./chunk-ABZYJK2D-DPaXcbcL.js";
import { d as l, u } from "./chunk-S3R3BYOJ-BBYtiirL.js";
import { a as d, c as f, i as p, o as m } from "./chunk-JZLCHNYA-BB0008aK.js";
import {
  a as h,
  i as g,
  n as _,
  o as v,
  r as y,
} from "./chunk-QXUST7PY-bOMzPJkM.js";
var b,
  x,
  S,
  C,
  w,
  T = e(() => {
    (_(),
      p(),
      u(),
      o(),
      a(),
      t(),
      (b = {
        common: s,
        getConfig: c,
        insertCluster: d,
        insertEdge: y,
        insertEdgeLabel: g,
        insertMarkers: h,
        insertNode: m,
        interpolateToCurve: l,
        labelHelper: f,
        log: r,
        positionEdgeLabel: v,
      }),
      (x = {}),
      (S = i((e) => {
        for (let t of e) x[t.name] = t;
      }, `registerLayoutLoaders`)),
      i(() => {
        S([
          {
            name: `dagre`,
            loader: i(
              async () =>
                await n(
                  () => import(`./dagre-6UL2VRFP-CTBugNjf.js`),
                  __vite__mapDeps([
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 18, 19, 20, 21, 22, 23, 24,
                  ]),
                  import.meta.url,
                ),
              `loader`,
            ),
          },
          ...[
            {
              name: `cose-bilkent`,
              loader: i(
                async () =>
                  await n(
                    () => import(`./cose-bilkent-S5V4N54A-DOa-Zu-d.js`),
                    __vite__mapDeps([25, 1, 26, 27, 17, 18, 19, 7]),
                    import.meta.url,
                  ),
                `loader`,
              ),
            },
          ],
        ]);
      }, `registerDefaultLayoutLoaders`)(),
      (C = i(async (e, t) => {
        if (!(e.layoutAlgorithm in x))
          throw Error(`Unknown layout algorithm: ${e.layoutAlgorithm}`);
        let n = x[e.layoutAlgorithm];
        return (await n.loader()).render(e, t, b, { algorithm: n.algorithm });
      }, `render`)),
      (w = i((e = ``, { fallback: t = `dagre` } = {}) => {
        if (e in x) return e;
        if (t in x)
          return (
            r.warn(
              `Layout algorithm ${e} is not registered. Using ${t} as fallback.`,
            ),
            t
          );
        throw Error(`Both layout algorithms ${e} and ${t} are not registered.`);
      }, `getRegisteredLayoutAlgorithm`)));
  });
export { C as i, T as n, S as r, w as t };
//# sourceMappingURL=chunk-N4CR4FBY-D4A2k-Kw.js.map
