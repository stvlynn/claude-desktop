import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  As as t,
  D as n,
  E as r,
  Is as i,
  Vo as a,
  h as o,
  m as s,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  J_ as c,
  K_ as l,
  ly as u,
  ry as d,
  ty as f,
  uy as p,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function m() {
  let e = d(`637432221`),
    t = d(`1741944562`);
  return e && t;
}
var h,
  g,
  _ = e(() => {
    (a(),
      n(),
      f(),
      u(),
      o(),
      c(),
      (h = i(r, ({ get: e }) => ({
        enabled: e(p, `637432221`),
        queryKey: [`appgen`, `access`],
        queryFn: () => l.safeGet(`/wham/sites/access`),
        retry: !1,
        staleTime: s.TEN_MINUTES,
      }))),
      (g = t(r, ({ get: e }) => {
        if (!e(p, `637432221`)) return `unavailable`;
        let { data: t, isError: n } = e(h);
        return n || t?.enabled === !1
          ? `unavailable`
          : t?.enabled === !0
            ? `available`
            : `loading`;
      })));
  });
export { _ as n, m as r, g as t };
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~o4ivuipr-BWGR4LZw.js.map
