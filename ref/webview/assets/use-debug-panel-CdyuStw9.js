import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Li as i,
  O as a,
  Rs as o,
  Vo as s,
  _c as c,
  qo as l,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Kc as u,
  qc as d,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Xa as f,
  Ya as p,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function m(e) {
  return g(e, `editedFilePaths`);
}
function h(e) {
  return g(e, `referencedFilePaths`);
}
function g(e, t) {
  let n = [],
    r = new Set();
  for (let i of e) for (let e of p(i)[t]) r.has(e) || (r.add(e), n.push(e));
  return n;
}
var _ = e(() => {
  f();
});
function v() {
  return l(T);
}
function y() {
  return i.isInternal(u());
}
function b(e, t) {
  let n = `[non-serializable title]`;
  return (
    typeof t.title == `string`
      ? (n = t.title)
      : (0, w.isValidElement)(t.title) && (n = ``),
    { id: e, titleText: n, lines: t.lines }
  );
}
function x(e, t, n) {
  let r = b(t, n);
  e.set(T, (e) => [...e.filter((e) => e.id !== t), r]);
}
function S(e, t) {
  e.set(T, (e) => e.filter((e) => e.id !== t));
}
function C() {
  if (typeof crypto < `u` && typeof crypto.randomUUID == `function`)
    return crypto.randomUUID();
  let e = E;
  return ((E += 1), `debug-panel-${e}`);
}
var w,
  T,
  E,
  D = e(() => {
    (s(), a(), (w = t(c(), 1)), n(), d(), (T = o(r, [])), (E = 0));
  });
export {
  y as a,
  h as c,
  x as i,
  _ as l,
  D as n,
  v as o,
  S as r,
  m as s,
  C as t,
};
//# sourceMappingURL=use-debug-panel-CdyuStw9.js.map
