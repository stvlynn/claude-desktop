import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Go as n,
  O as r,
  Vo as i,
  Yi as a,
  _c as o,
  fa as s,
  gc as c,
  lc as l,
  qo as u,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  $p as d,
  Fu as f,
  Hf as p,
  Jp as m,
  Qp as h,
  Uf as g,
  Vf as _,
  Xf as v,
  Xp as y,
  Yf as b,
  Zp as x,
  rm as S,
  zu as C,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Np as w,
  Qc as T,
  jp as E,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import { Zi as D } from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Cu as O,
  Su as k,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
function A(e) {
  let t = (0, F.c)(25),
    { browserUseTabIdsKey: r, conversationId: i, persistedTabsEnabled: a } = e,
    o = n(D, i),
    c = u(_.activeTab$),
    l = u(g.activeTab$),
    p = u(y),
    v = u(m),
    b,
    S;
  t[0] === v
    ? ((b = t[1]), (S = t[2]))
    : ((b = (e) => v.on(`change`, e)),
      (S = () => v.get()),
      (t[0] = v),
      (t[1] = b),
      (t[2] = S));
  let C = (0, I.useSyncExternalStore)(b, S, M),
    w = u(h),
    T = u(d),
    E = u(x),
    O,
    k;
  t[3] === E
    ? ((O = t[4]), (k = t[5]))
    : ((O = (e) => E.on(`change`, e)),
      (k = () => E.get()),
      (t[3] = E),
      (t[4] = O),
      (t[5] = k));
  let A = (0, I.useSyncExternalStore)(O, k, j),
    P = p || C > 0,
    R = (w && T) || A > 0,
    z;
  t[6] !== c || t[7] !== l || t[8] !== i || t[9] !== P || t[10] !== R
    ? ((z = new Set(f(i, { bottom: c, right: l }, { bottom: P, right: R }))),
      (t[6] = c),
      (t[7] = l),
      (t[8] = i),
      (t[9] = P),
      (t[10] = R),
      (t[11] = z))
    : (z = t[11]);
  let B = z;
  if (!o && B.size > 0) return null;
  let V, H;
  if (t[12] !== r || t[13] !== i || t[14] !== a || t[15] !== B) {
    H = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e;
      t[18] === B
        ? (e = t[19])
        : ((e = (e) => !B.has(e)), (t[18] = B), (t[19] = e));
      let n = r.split(`\0`).map(s).filter(e);
      if (n.length === 0) {
        H = null;
        break bb0;
      }
      let o;
      (t[20] !== i || t[21] !== a
        ? ((o = (e) =>
            (0, L.jsx)(
              N,
              { browserTabId: e, conversationId: i, persistedTabsEnabled: a },
              e,
            )),
          (t[20] = i),
          (t[21] = a),
          (t[22] = o))
        : (o = t[22]),
        (V = n.map(o)));
    }
    ((t[12] = r),
      (t[13] = i),
      (t[14] = a),
      (t[15] = B),
      (t[16] = V),
      (t[17] = H));
  } else ((V = t[16]), (H = t[17]));
  if (H !== Symbol.for(`react.early_return_sentinel`)) return H;
  let U;
  return (
    t[23] === V
      ? (U = t[24])
      : ((U = (0, L.jsx)(L.Fragment, { children: V })),
        (t[23] = V),
        (t[24] = U)),
    U
  );
}
function j() {
  return 0;
}
function M() {
  return 0;
}
function N(e) {
  let t = (0, F.c)(9),
    { browserTabId: n, conversationId: r, persistedTabsEnabled: i } = e,
    o = w(),
    s = (0, I.useRef)(null),
    c;
  t[0] !== n || t[1] !== r
    ? ((c = () => b.getSnapshot(r, n)), (t[0] = n), (t[1] = r), (t[2] = c))
    : (c = t[2]);
  let l = (0, I.useSyncExternalStore)(b.subscribe, c, P);
  if (l != null && l.tabType !== a.WEB) return null;
  let u = l == null || l.url.length === 0 ? `about:blank` : l.url,
    d;
  return (
    t[3] !== n || t[4] !== r || t[5] !== u || t[6] !== i || t[7] !== o
      ? ((d = (0, L.jsx)(k, {
          bounds: null,
          browserTabId: n,
          conversationId: r,
          hostKind: `hidden-browser-use`,
          initialUrl: u,
          isVisible: !1,
          persistedTabsEnabled: i,
          scale: 1,
          shouldBootstrapWhenHidden: !0,
          shouldPaint: !1,
          webviewRef: s,
          windowZoom: o,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = u),
        (t[6] = i),
        (t[7] = o),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
function P() {
  return null;
}
var F, I, L;
e(() => {
  ((F = c()),
    i(),
    r(),
    (I = t(o(), 1)),
    E(),
    p(),
    S(),
    C(),
    T(),
    v(),
    O(),
    (L = l()));
})();
export { A as HiddenBrowserUseWebviewHost };
//# sourceMappingURL=browser-sidebar-hidden-browser-use-webview-host-CkfqVXrj.js.map
