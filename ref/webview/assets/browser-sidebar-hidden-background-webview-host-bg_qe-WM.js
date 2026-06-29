import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Vo as n,
  _c as r,
  gc as i,
  lc as a,
  qo as o,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Fu as s,
  Hf as c,
  Jp as l,
  Qp as u,
  Uf as d,
  Vf as f,
  Xf as p,
  Xp as m,
  Yf as h,
  Zp as g,
  fp as _,
  lp as v,
  op as y,
  pp as b,
  rm as x,
  zu as S,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Np as C,
  jp as w,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Ni as T,
  Pi as E,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Cu as D,
  Su as O,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
function k(e) {
  let t = (0, L.c)(13),
    { conversationId: n, persistedTabsEnabled: r } = e,
    i = o(f.activeTab$),
    a = o(d.activeTab$),
    c = o(f.tabs$),
    p = o(m),
    _ = o(l),
    v,
    y;
  t[0] === _
    ? ((v = t[1]), (y = t[2]))
    : ((v = (e) => _.on(`change`, e)),
      (y = () => _.get()),
      (t[0] = _),
      (t[1] = v),
      (t[2] = y));
  let b = (0, R.useSyncExternalStore)(v, y, M),
    x = o(d.tabs$),
    S = o(u),
    C = o(g),
    w,
    T;
  t[3] === C
    ? ((w = t[4]), (T = t[5]))
    : ((w = (e) => C.on(`change`, e)),
      (T = () => C.get()),
      (t[3] = C),
      (t[4] = w),
      (t[5] = T));
  let E = (0, R.useSyncExternalStore)(w, T, j),
    D = s(
      n,
      { bottom: i, right: a },
      { bottom: p || b > 0, right: S || E > 0 },
    ),
    O;
  (t[6] === n
    ? (O = t[7])
    : ((O = () => h.getBrowserUseBrowserTabIdsKey(n)), (t[6] = n), (t[7] = O)),
    (0, R.useSyncExternalStore)(h.subscribe, O, A));
  let k = P({
    conversationId: n,
    mountedBrowserTabIds: D,
    panelTabs: [...x, ...c],
  });
  if (k.length === 0) return null;
  let F;
  t[8] !== n || t[9] !== r
    ? ((F = (e) =>
        (0, z.jsx)(
          N,
          { browserTabId: e, conversationId: n, persistedTabsEnabled: r },
          e,
        )),
      (t[8] = n),
      (t[9] = r),
      (t[10] = F))
    : (F = t[10]);
  let I = k.map(F),
    B;
  return (
    t[11] === I
      ? (B = t[12])
      : ((B = (0, z.jsx)(z.Fragment, { children: I })),
        (t[11] = I),
        (t[12] = B)),
    B
  );
}
function A() {
  return ``;
}
function j() {
  return 0;
}
function M() {
  return 0;
}
function N(e) {
  let t = (0, L.c)(11),
    { browserTabId: n, conversationId: r, persistedTabsEnabled: i } = e,
    a = C(),
    o = (0, R.useRef)(null),
    s;
  t[0] !== n || t[1] !== r
    ? ((s = I(r, n)), (t[0] = n), (t[1] = r), (t[2] = s))
    : (s = t[2]);
  let c = s;
  if (c == null || !F(r, n)) return null;
  let l;
  return (
    t[3] !== n ||
    t[4] !== r ||
    t[5] !== i ||
    t[6] !== c.adoptedWebContentsId ||
    t[7] !== c.adoptionLease ||
    t[8] !== c.initialUrl ||
    t[9] !== a
      ? ((l = (0, z.jsx)(O, {
          adoptionLease: c.adoptionLease,
          adoptedWebContentsId: c.adoptedWebContentsId,
          bounds: null,
          browserTabId: n,
          conversationId: r,
          initialUrl: c.initialUrl,
          isVisible: !1,
          persistedTabsEnabled: i,
          scale: 1,
          shouldBootstrapWhenHidden: !0,
          shouldPaint: !1,
          webviewRef: o,
          windowZoom: a,
        })),
        (t[3] = n),
        (t[4] = r),
        (t[5] = i),
        (t[6] = c.adoptedWebContentsId),
        (t[7] = c.adoptionLease),
        (t[8] = c.initialUrl),
        (t[9] = a),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
function P({ conversationId: e, mountedBrowserTabIds: t, panelTabs: n }) {
  let r = new Set();
  for (let i of n) {
    let n = T(i, e) ?? null;
    n == null ||
      h.isBrowserUseTab(e, n) ||
      t.includes(n) ||
      (F(e, n) && r.add(n));
  }
  return Array.from(r);
}
function F(e, t) {
  return h.isBrowserUseTab(e, t) ? !1 : I(e, t) != null;
}
function I(e, t) {
  let n = v(e, t),
    r = _(e, t),
    i = y(e, t);
  return n == null && (r == null || i == null)
    ? null
    : {
        adoptedWebContentsId: i,
        adoptionLease: r,
        initialUrl: n ?? `about:blank`,
      };
}
var L, R, z;
e(() => {
  ((L = i()),
    n(),
    (R = t(r(), 1)),
    w(),
    c(),
    x(),
    S(),
    E(),
    p(),
    b(),
    D(),
    (z = a()));
})();
export { k as HiddenBackgroundBrowserWebviewHost };
//# sourceMappingURL=browser-sidebar-hidden-background-webview-host-bg_qe-WM.js.map
