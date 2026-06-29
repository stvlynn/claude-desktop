import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Eo as t,
  Po as n,
  gc as r,
  jo as i,
  ko as a,
  so as o,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  ny as s,
  ty as c,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function l() {
  let e = (0, f.c)(2),
    { value: t } = s(p),
    n;
  return (e[0] === t ? (n = e[1]) : ((n = u(t)), (e[0] = t), (e[1] = n)), n);
}
function u(e) {
  let t = {},
    n = h.parse(e);
  for (let [e, r] of Object.entries(n.skill_markdown_by_id ?? {})) {
    let n = m.safeParse(r);
    n.success && (t[e] = n.data);
  }
  return t;
}
function d(e, t) {
  return e[t];
}
var f,
  p,
  m,
  h,
  g = e(() => {
    ((f = r()),
      o(),
      c(),
      (p = `1852350085`),
      (m = i().refine((e) => e.trim().length > 0)),
      (h = t({ skill_markdown_by_id: a(i(), n()).optional() }).catch({
        skill_markdown_by_id: {},
      })));
  });
export { g as n, l as r, d as t };
//# sourceMappingURL=recommended-skill-statsig-overrides-CaQK62gR.js.map
