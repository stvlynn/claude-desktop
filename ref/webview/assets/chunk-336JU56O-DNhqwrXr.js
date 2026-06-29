const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "./dagre-KV5264BT-DW4I2eVN.js",
      "./rolldown-runtime-Czos8NxU.js",
      "./dagre-BqhzN4_p.js",
      "./graphlib-ichArG6F.js",
      "./isEmpty-ld3eWiRn.js",
      "./_baseFor-B4uXGLdC.js",
      "./reduce-ont_GNl7.js",
      "./merge-Mpnm7bAs.js",
      "./lodash-osfEN9vD.js",
      "./chunk-AGHRB4JF-DVNPU_Qo.js",
      "./chunk-ICPOFSXX-CeJdw7BH.js",
      "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js",
      "./dist-Dcs2yc8m.js",
      "./chunk-5FUZZQ4R-B3jI2rZu.js",
      "./src-CTe_6Jg1.js",
      "./app-initial~app-main~onboarding-page~mermaid-diagram~xychartDiagram-PRI3JC2R~timeline-defin~dcen2xty-ZWKQ4q6W.js",
      "./src-BhkLFyc4.js",
      "./chunk-5PVQY5BW-MckrTAit.js",
      "./dist-CD74BDfk.js",
      "./chunk-U2HBQHQK-BfxUGRAz.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js",
      "./esm-CuAuNray.js",
      "./chunk-X2U36JSP-sSeN7Tix.js",
      "./chunk-ZZ45TVLE-DzHSn4eK.js",
      "./rough.esm-BmcJJgrn.js",
      "./chunk-BSJP7CBP-CrJpo2xF.js",
      "./chunk-ENJZ2VHE-Hl7g56sN.js",
      "./cose-bilkent-S5V4N54A-o3JY66ky.js",
      "./cytoscape-cose-bilkent-Cew5xac-.js",
      "./cytoscape.esm-gCnb3XbU.js",
    ]),
) => i.map((i) => d[i]);
import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  ar as t,
  ir as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import { i as r, n as i, r as a } from "./chunk-AGHRB4JF-DVNPU_Qo.js";
import { A as o, s, y as c } from "./chunk-ICPOFSXX-CeJdw7BH.js";
import { d as l, u } from "./chunk-5PVQY5BW-MckrTAit.js";
import { a as d, c as f, i as p, o as m } from "./chunk-5FUZZQ4R-B3jI2rZu.js";
import {
  a as h,
  i as g,
  n as _,
  o as v,
  r as y,
} from "./chunk-ENJZ2VHE-Hl7g56sN.js";
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
                  () => import(`./dagre-KV5264BT-DW4I2eVN.js`),
                  __vite__mapDeps([
                    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
                    17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
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
                    () => import(`./cose-bilkent-S5V4N54A-o3JY66ky.js`),
                    __vite__mapDeps([27, 1, 28, 29, 14, 15, 16, 9]),
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
        if (e.diagramId)
          for (let t of e.nodes) {
            let n = t.domId || t.id;
            t.domId = `${e.diagramId}-${n}`;
          }
        let n = x[e.layoutAlgorithm],
          r = await n.loader(),
          { theme: i, themeVariables: a } = e.config,
          { useGradient: o, gradientStart: s, gradientStop: c } = a,
          l = t.attr(`id`);
        if (
          (t
            .append(`defs`)
            .append(`filter`)
            .attr(`id`, `${l}-drop-shadow`)
            .attr(`height`, `130%`)
            .attr(`width`, `130%`)
            .append(`feDropShadow`)
            .attr(`dx`, `4`)
            .attr(`dy`, `4`)
            .attr(`stdDeviation`, 0)
            .attr(`flood-opacity`, `0.06`)
            .attr(
              `flood-color`,
              `${i?.includes(`dark`) ? `#FFFFFF` : `#000000`}`,
            ),
          t
            .append(`defs`)
            .append(`filter`)
            .attr(`id`, `${l}-drop-shadow-small`)
            .attr(`height`, `150%`)
            .attr(`width`, `150%`)
            .append(`feDropShadow`)
            .attr(`dx`, `2`)
            .attr(`dy`, `2`)
            .attr(`stdDeviation`, 0)
            .attr(`flood-opacity`, `0.06`)
            .attr(
              `flood-color`,
              `${i?.includes(`dark`) ? `#FFFFFF` : `#000000`}`,
            ),
          o)
        ) {
          let e = t
            .append(`linearGradient`)
            .attr(`id`, t.attr(`id`) + `-gradient`)
            .attr(`gradientUnits`, `objectBoundingBox`)
            .attr(`x1`, `0%`)
            .attr(`y1`, `0%`)
            .attr(`x2`, `100%`)
            .attr(`y2`, `0%`);
          (e
            .append(`svg:stop`)
            .attr(`offset`, `0%`)
            .attr(`stop-color`, s)
            .attr(`stop-opacity`, 1),
            e
              .append(`svg:stop`)
              .attr(`offset`, `100%`)
              .attr(`stop-color`, c)
              .attr(`stop-opacity`, 1));
        }
        return r.render(e, t, b, { algorithm: n.algorithm });
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
//# sourceMappingURL=chunk-336JU56O-DNhqwrXr.js.map
