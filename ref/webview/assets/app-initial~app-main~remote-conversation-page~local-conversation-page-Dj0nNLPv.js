import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  As as n,
  Ko as r,
  O as i,
  Vo as a,
  _ as o,
  _c as s,
  gc as c,
  lc as l,
  qo as u,
  ta as d,
  v as f,
  y as p,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  $d as m,
  $p as h,
  Al as g,
  Cd as _,
  Cl as v,
  Cu as y,
  Dl as b,
  El as x,
  Fd as S,
  Fl as C,
  Fr as w,
  Hf as T,
  Hg as E,
  Id as D,
  Il as O,
  Ir as k,
  Jd as ee,
  Ku as A,
  Ld as te,
  Ml as j,
  Nl as M,
  Ol as N,
  Pd as ne,
  Ps as P,
  Qd as re,
  Qp as F,
  Sl as I,
  Tl as ie,
  Uf as ae,
  Vf as oe,
  Vg as se,
  Vu as ce,
  Xd as le,
  Xp as ue,
  Zd as de,
  _l as L,
  ad as fe,
  bl as pe,
  cl as me,
  fd as he,
  fl as ge,
  ft as _e,
  gl as ve,
  hl as ye,
  jd as be,
  js as xe,
  kl as Se,
  ld as Ce,
  lm as we,
  ml as R,
  ol as Te,
  pt as Ee,
  rm as De,
  ud as Oe,
  ul as ke,
  vd as Ae,
  vf as je,
  vl as Me,
  wl as z,
  xf as Ne,
  xl as Pe,
  xu as Fe,
  yl as Ie,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Am as Le,
  Em as Re,
  Tm as B,
  do as ze,
  fo as Be,
  gh as Ve,
  hh as He,
  km as Ue,
  lo as We,
  mh as Ge,
  op as Ke,
  sp as qe,
  uo as Je,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  H as Ye,
  Hi as V,
  Ii as Xe,
  Iy as H,
  Li as Ze,
  N as Qe,
  Ni as $e,
  Pi as et,
  Ri as U,
  Vy as W,
  ji as tt,
  vg as nt,
  yg as rt,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  of as it,
  sf as at,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  n as ot,
  t as st,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-detail-layout~local-conversation-page-BnkJ2KOs.js";
function G(e, t) {
  e != null &&
    f.dispatchMessage(`browser-sidebar-command`, {
      browserTabId: e.browserTabId,
      command: t,
      conversationId: e.conversationId,
    });
}
var K = e(() => {
  o();
});
function ct(e) {
  let t = (0, q.c)(24),
    {
      autoFocus: n,
      id: r,
      isLoading: i,
      label: a,
      onChange: o,
      onEnter: s,
      onEscape: c,
      onFocus: l,
      placeholder: u,
      value: d,
    } = e,
    f = n === void 0 ? !0 : n,
    p = i === void 0 ? !1 : i,
    m;
  t[0] === p
    ? (m = t[1])
    : ((m = p
        ? (0, J.jsx)(Ue, {
            "aria-hidden": !0,
            className: `size-4 animate-spin text-token-foreground`,
          })
        : (0, J.jsx)(We, { className: `size-4 text-token-foreground` })),
      (t[0] = p),
      (t[1] = m));
  let h;
  t[2] !== r || t[3] !== a
    ? ((h = (0, J.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: r,
        children: a,
      })),
      (t[2] = r),
      (t[3] = a),
      (t[4] = h))
    : (h = t[4]);
  let g = p || void 0,
    _;
  t[5] === o
    ? (_ = t[6])
    : ((_ = (e) => {
        o(e.target.value);
      }),
      (t[5] = o),
      (t[6] = _));
  let v;
  t[7] !== s || t[8] !== c
    ? ((v = (e) => {
        if (e.key === `Enter`) {
          (e.preventDefault(), s(e.shiftKey));
          return;
        }
        e.key === `Escape` && (e.preventDefault(), c());
      }),
      (t[7] = s),
      (t[8] = c),
      (t[9] = v))
    : (v = t[9]);
  let y;
  t[10] !== f ||
  t[11] !== r ||
  t[12] !== a ||
  t[13] !== l ||
  t[14] !== u ||
  t[15] !== g ||
  t[16] !== _ ||
  t[17] !== v ||
  t[18] !== d
    ? ((y = (0, J.jsx)(`input`, {
        id: r,
        type: `text`,
        autoFocus: f,
        value: d,
        "aria-busy": g,
        "aria-label": a,
        placeholder: u,
        className: `h-6 min-w-0 flex-1 bg-transparent text-base leading-6 text-token-foreground outline-none placeholder:text-token-input-placeholder-foreground`,
        onChange: _,
        onFocus: l,
        onKeyDown: v,
      })),
      (t[10] = f),
      (t[11] = r),
      (t[12] = a),
      (t[13] = l),
      (t[14] = u),
      (t[15] = g),
      (t[16] = _),
      (t[17] = v),
      (t[18] = d),
      (t[19] = y))
    : (y = t[19]);
  let b;
  return (
    t[20] !== m || t[21] !== h || t[22] !== y
      ? ((b = (0, J.jsxs)(`div`, {
          className: `col-[1/2] row-[1] flex h-[44px] min-w-0 items-center gap-2 pl-4`,
          children: [m, h, y],
        })),
        (t[20] = m),
        (t[21] = h),
        (t[22] = y),
        (t[23] = b))
      : (b = t[23]),
    b
  );
}
function lt(e) {
  let t = (0, q.c)(18),
    {
      isVisible: n,
      matches: r,
      nextLabel: i,
      onNext: a,
      onPrevious: o,
      previousLabel: s,
    } = e,
    c = n
      ? `max-h-9 translate-y-0 border-t py-2 opacity-100`
      : `pointer-events-none max-h-0 -translate-y-2 border-t-0 py-0 opacity-0`,
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = Ge(
        `col-[1/4] row-[2] flex min-w-0 items-center border-token-border px-4 text-base leading-6 transition-[border-width,max-height,opacity,padding,translate] duration-200 ease-out`,
        c,
      )),
      (t[0] = c),
      (t[1] = l));
  let u = r === 0,
    d;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, J.jsx)(se, { className: `size-4` })), (t[2] = d))
    : (d = t[2]);
  let f;
  t[3] !== o || t[4] !== s || t[5] !== u
    ? ((f = (0, J.jsx)(B, {
        className: `h-4 w-4 p-0 text-token-description-foreground`,
        size: `icon`,
        color: `ghost`,
        uniform: !0,
        onClick: o,
        disabled: u,
        "aria-label": s,
        children: d,
      })),
      (t[3] = o),
      (t[4] = s),
      (t[5] = u),
      (t[6] = f))
    : (f = t[6]);
  let p = r === 0,
    m;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, J.jsx)(se, { className: `size-4 rotate-180` })), (t[7] = m))
    : (m = t[7]);
  let h;
  t[8] !== i || t[9] !== a || t[10] !== p
    ? ((h = (0, J.jsx)(B, {
        className: `h-4 w-4 p-0 text-token-description-foreground`,
        size: `icon`,
        color: `ghost`,
        uniform: !0,
        onClick: a,
        disabled: p,
        "aria-label": i,
        children: m,
      })),
      (t[8] = i),
      (t[9] = a),
      (t[10] = p),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] !== f || t[13] !== h
    ? ((g = (0, J.jsxs)(`div`, {
        className: `flex items-center gap-3`,
        children: [f, h],
      })),
      (t[12] = f),
      (t[13] = h),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== l || t[16] !== g
      ? ((_ = (0, J.jsx)(`div`, { className: l, children: g })),
        (t[15] = l),
        (t[16] = g),
        (t[17] = _))
      : (_ = t[17]),
    _
  );
}
function ut(e) {
  let t = (0, q.c)(5),
    { isVisible: n, label: r } = e,
    i = n
      ? `max-h-9 translate-y-0 py-2 opacity-100`
      : `max-h-0 -translate-y-2 py-0 opacity-0`,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = Ge(
        `text-token-description-foreground pointer-events-none col-[1/4] row-[2] min-w-0 px-4 text-right text-base leading-6 transition-[max-height,opacity,padding,translate] duration-200 ease-out`,
        i,
      )),
      (t[0] = i),
      (t[1] = a));
  let o;
  return (
    t[2] !== r || t[3] !== a
      ? ((o = (0, J.jsx)(`span`, { className: a, children: r })),
        (t[2] = r),
        (t[3] = a),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function dt(e) {
  let t = (0, q.c)(5),
    { label: n, onClose: r } = e,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, J.jsx)(`div`, {
        className: `mr-2 ml-2 h-4 w-px bg-token-border`,
      })),
      (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, J.jsx)(Ke, { className: `size-4 text-token-foreground` })),
      (t[1] = a))
    : (a = t[1]);
  let o;
  return (
    t[2] !== n || t[3] !== r
      ? ((o = (0, J.jsxs)(`div`, {
          className: `col-[3/4] row-[1] flex h-[44px] items-center pr-4`,
          children: [
            i,
            (0, J.jsx)(B, {
              className: `-m-0.5 size-6`,
              size: `icon`,
              color: `ghost`,
              uniform: !0,
              onClick: r,
              "aria-label": n,
              children: a,
            }),
          ],
        })),
        (t[2] = n),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var q,
  J,
  Y = e(() => {
    ((q = c()), He(), Re(), E(), Je(), Le(), qe(), (J = l()));
  });
function ft() {
  let e = (0, pt.c)(9),
    t = r(U),
    n = W(),
    i = u(R),
    a = u(L),
    o;
  e[0] === n
    ? (o = e[1])
    : ((o = n.formatMessage({
        id: `codex.threadFindBar.close`,
        defaultMessage: `Close find`,
        description: `Button label to close the find bar`,
      })),
      (e[0] = n),
      (e[1] = o));
  let s;
  e[2] !== i || e[3] !== a || e[4] !== t
    ? ((s = () => {
        (a === `browser` && (N(t, i), G(i, { type: `close-find` }), O(t, Te)),
          me(t));
      }),
      (e[2] = i),
      (e[3] = a),
      (e[4] = t),
      (e[5] = s))
    : (s = e[5]);
  let c;
  return (
    e[6] !== o || e[7] !== s
      ? ((c = (0, mt.jsx)(dt, { label: o, onClose: s })),
        (e[6] = o),
        (e[7] = s),
        (e[8] = c))
      : (c = e[8]),
    c
  );
}
var pt,
  mt,
  ht = e(() => {
    ((pt = c()), a(), H(), V(), K(), Y(), z(), (mt = l()));
  });
function gt() {
  let e = (0, _t.c)(29),
    t = r(U),
    n = W(),
    i = u(R),
    a = u(ve),
    o = u(L),
    s = u(Pe),
    c;
  e[0] !== i || e[1] !== o || e[2] !== s || e[3] !== t
    ? ((c = (e) => {
        if (o === `browser` && e !== `browser`) {
          (G(i, { type: `close-find` }), j(t, e), O(t, Te));
          return;
        }
        (j(t, e),
          e === `browser` &&
            s.length > 0 &&
            G(i, { type: `set-find-query`, query: s }));
      }),
      (e[0] = i),
      (e[1] = o),
      (e[2] = s),
      (e[3] = t),
      (e[4] = c))
    : (c = e[4]);
  let l = c;
  if (a == null && i == null) return null;
  let d = o === `conversation` ? `ghostActive` : `ghost`,
    f;
  e[5] === l
    ? (f = e[6])
    : ((f = () => {
        l(`conversation`);
      }),
      (e[5] = l),
      (e[6] = f));
  let p = o === `conversation`,
    m;
  e[7] === n
    ? (m = e[8])
    : ((m = n.formatMessage({
        id: `codex.threadFindBar.chatFilter`,
        defaultMessage: `Search chat`,
        description: `Button label to scope find results to chat`,
      })),
      (e[7] = n),
      (e[8] = m));
  let h;
  e[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, X.jsx)(w, { className: `size-4` })), (e[9] = h))
    : (h = e[9]);
  let g;
  e[10] !== d || e[11] !== f || e[12] !== p || e[13] !== m
    ? ((g = (0, X.jsx)(B, {
        className: `-m-0.5 size-6`,
        size: `icon`,
        color: d,
        uniform: !0,
        onClick: f,
        "aria-pressed": p,
        "aria-label": m,
        children: h,
      })),
      (e[10] = d),
      (e[11] = f),
      (e[12] = p),
      (e[13] = m),
      (e[14] = g))
    : (g = e[14]);
  let _;
  e[15] !== a || e[16] !== o || e[17] !== n || e[18] !== l
    ? ((_ =
        a == null
          ? null
          : (0, X.jsx)(B, {
              className: `-m-0.5 size-6`,
              size: `icon`,
              color: o === `diff` ? `ghostActive` : `ghost`,
              uniform: !0,
              onClick: () => {
                l(`diff`);
              },
              "aria-pressed": o === `diff`,
              "aria-label": n.formatMessage({
                id: `codex.threadFindBar.diffFilter`,
                defaultMessage: `Search diffs`,
                description: `Button label to scope find results to diffs`,
              }),
              children: (0, X.jsx)(it, { className: `size-4` }),
            })),
      (e[15] = a),
      (e[16] = o),
      (e[17] = n),
      (e[18] = l),
      (e[19] = _))
    : (_ = e[19]);
  let v;
  e[20] !== i || e[21] !== o || e[22] !== n || e[23] !== l
    ? ((v =
        i == null
          ? null
          : (0, X.jsx)(B, {
              className: `-m-0.5 size-6`,
              size: `icon`,
              color: o === `browser` ? `ghostActive` : `ghost`,
              uniform: !0,
              onClick: () => {
                l(`browser`);
              },
              "aria-pressed": o === `browser`,
              "aria-label": n.formatMessage({
                id: `codex.threadFindBar.browserFilter`,
                defaultMessage: `Search browser page`,
                description: `Button label to scope find results to browser page`,
              }),
              children: (0, X.jsx)(ze, { className: `size-4` }),
            })),
      (e[20] = i),
      (e[21] = o),
      (e[22] = n),
      (e[23] = l),
      (e[24] = v))
    : (v = e[24]);
  let y;
  return (
    e[25] !== g || e[26] !== _ || e[27] !== v
      ? ((y = (0, X.jsxs)(`div`, {
          className: `col-[2/3] row-[1] flex h-[44px] items-center justify-center gap-2`,
          children: [g, _, v],
        })),
        (e[25] = g),
        (e[26] = _),
        (e[27] = v),
        (e[28] = y))
      : (y = e[28]),
    y
  );
}
var _t,
  X,
  vt = e(() => {
    ((_t = c()), a(), H(), Re(), k(), at(), Be(), V(), K(), z(), (X = l()));
  });
function yt(e) {
  let t = (0, bt.c)(5),
    { children: n, className: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = Ge(
        `no-drag pointer-events-auto grid w-[340px] max-w-[70vw] grid-cols-[minmax(0,1fr)_auto_auto] overflow-hidden rounded-[20px] border-[0.5px] border-token-border bg-token-side-bar-background shadow-[0px_8px_16px_-4px_rgba(0,0,0,0.12)]`,
        r,
      )),
      (t[0] = r),
      (t[1] = i));
  let a;
  return (
    t[2] !== n || t[3] !== i
      ? ((a = (0, xt.jsx)(`div`, { className: i, children: n })),
        (t[2] = n),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
var bt,
  xt,
  St = e(() => {
    ((bt = c()), He(), (xt = l()));
  });
function Ct() {
  let e = (0, kt.c)(33),
    t = r(U),
    n = u(ye),
    i = u(R),
    a = u(ve),
    o = u(oe.tabs$),
    s = u(oe.activeTab$),
    c = u(ae.tabs$),
    l = u(ae.activeTab$),
    d = u(ue),
    f = u(F),
    m,
    h;
  e[0] !== s ||
  e[1] !== l ||
  e[2] !== o ||
  e[3] !== d ||
  e[4] !== f ||
  e[5] !== c ||
  e[6] !== t
    ? ((m = tt(t)),
      (h = Tt({
        activeTabs: { bottom: s, right: l },
        browserConversationId: m,
        openPanels: { bottom: d, right: f },
        tabs: { bottom: o, right: c },
      })),
      (e[0] = s),
      (e[1] = l),
      (e[2] = o),
      (e[3] = d),
      (e[4] = f),
      (e[5] = c),
      (e[6] = t),
      (e[7] = m),
      (e[8] = h))
    : ((m = e[7]), (h = e[8]));
  let _ = h,
    y;
  e[9] !== _ || e[10] !== t
    ? ((y = () => {
        g(t, _);
      }),
      (e[9] = _),
      (e[10] = t),
      (e[11] = y))
    : (y = e[11]);
  let b = _?.browserTabId,
    S = _?.conversationId,
    C;
  (e[12] !== _ || e[13] !== t || e[14] !== b || e[15] !== S
    ? ((C = [_, b, S, t]),
      (e[12] = _),
      (e[13] = t),
      (e[14] = b),
      (e[15] = S),
      (e[16] = C))
    : (C = e[16]),
    (0, At.useEffect)(y, C));
  let w;
  e[17] !== s ||
  e[18] !== l ||
  e[19] !== m ||
  e[20] !== i ||
  e[21] !== n ||
  e[22] !== a ||
  e[23] !== d ||
  e[24] !== f ||
  e[25] !== t
    ? ((w = function () {
        if (Ot()) return;
        let e = wt({
            activeTabs: { bottom: s, right: l },
            browserConversationId: m,
            openPanels: { bottom: d, right: f },
          }),
          r = document.activeElement?.id === `content-search-input`,
          o = r ? void 0 : Dt(),
          c = n;
        if (
          (r
            ? (c = v({
                currentDomain: t.get(L),
                hasDiffSource: a != null,
                hasBrowserTarget: i != null,
              }))
            : e == null
              ? c === `diff` && a == null && (c = `conversation`)
              : (c = `browser`),
          e != null && g(t, e),
          j(t, c),
          o != null && (c === `browser` ? Se(t, o) : M(t, o)),
          c === `browser`)
        ) {
          let n = o ?? t.get(Pe);
          n.length > 0 && G(e ?? i, { type: `set-find-query`, query: n });
        }
        (x(t), window.requestAnimationFrame(Et));
      }),
      (e[17] = s),
      (e[18] = l),
      (e[19] = m),
      (e[20] = i),
      (e[21] = n),
      (e[22] = a),
      (e[23] = d),
      (e[24] = f),
      (e[25] = t),
      (e[26] = w))
    : (w = e[26]);
  let T = w,
    E;
  (e[27] === T
    ? (E = e[28])
    : ((E = () => {
        T();
      }),
      (e[27] = T),
      (e[28] = E)),
    p(`find-in-thread`, E));
  let D;
  (e[29] === t
    ? (D = e[30])
    : ((D = (e) => {
        let n = t.get(R);
        e.conversationId !== n?.conversationId ||
          e.browserTabId !== n.browserTabId ||
          O(t, e.state);
      }),
      (e[29] = t),
      (e[30] = D)),
    p(`browser-sidebar-find-state`, D));
  let k;
  return (
    e[31] === T
      ? (k = e[32])
      : ((k = {
          commandId: `findInThread`,
          enabled: !0,
          ignoreWithin: jt,
          onKeyDown: (e) => {
            (e.preventDefault(), T());
          },
        }),
        (e[31] = T),
        (e[32] = k)),
    ot(k),
    null
  );
}
function wt({ activeTabs: e, browserConversationId: t, openPanels: n }) {
  if (t == null) return null;
  let r = document.activeElement;
  if (!(r instanceof HTMLElement)) return null;
  for (let i of ce) {
    if (!n[i]) continue;
    let a = $e(e[i], t);
    if (
      a != null &&
      ((r.tagName.toLowerCase() === `webview` &&
        r.getAttribute(`data-browser-sidebar-conversation-id`) === t &&
        (r.getAttribute(`data-browser-sidebar-browser-tab-id`) ?? a) === a) ||
        r.closest(`[data-app-shell-focus-area="${i}-panel"]`) != null)
    )
      return { browserTabId: a, conversationId: t };
  }
  return null;
}
function Tt({
  activeTabs: e,
  browserConversationId: t,
  openPanels: n,
  tabs: r,
}) {
  if (t == null) return null;
  for (let r of ce) {
    if (!n[r]) continue;
    let i = $e(e[r], t);
    if (i != null) return { browserTabId: i, conversationId: t };
  }
  for (let e of ce)
    if (n[e])
      for (let n of r[e]) {
        let e = $e(n, t);
        if (e != null) return { browserTabId: e, conversationId: t };
      }
  return null;
}
function Et() {
  let e = document.getElementById(`content-search-input`);
  e instanceof HTMLInputElement && (e.focus(), e.select());
}
function Dt() {
  let e = document.activeElement,
    t;
  if (e instanceof HTMLInputElement || e instanceof HTMLTextAreaElement) {
    if (e.selectionStart == null || e.selectionEnd == null) return;
    t = e.value.slice(e.selectionStart, e.selectionEnd);
  } else t = window.getSelection?.()?.toString();
  let n = t?.trim();
  if (n) return /[\r\n]/.test(n) ? `` : n;
}
function Ot() {
  let e = document.activeElement;
  if (e?.closest(jt) == null) return !1;
  let t = e;
  for (; t.shadowRoot?.activeElement != null; ) t = t.shadowRoot.activeElement;
  let n = xe();
  return (
    t.dispatchEvent(
      new KeyboardEvent(`keydown`, {
        bubbles: !0,
        composed: !0,
        ctrlKey: !n,
        key: `f`,
        metaKey: n,
      }),
    ),
    !0
  );
}
var kt,
  At,
  jt,
  Mt = e(() => {
    ((kt = c()),
      a(),
      (At = t(s(), 1)),
      st(),
      T(),
      De(),
      P(),
      o(),
      V(),
      et(),
      A(),
      K(),
      z(),
      (jt = `[data-pierre-editor-surface]`));
  });
function Nt() {
  let e = (0, Pt.c)(20),
    t = r(U),
    n = W(),
    i = u(R),
    a = u(L),
    o = u(Ie),
    s = u(Pe),
    c;
  e[0] !== a || e[1] !== n
    ? ((c =
        a === `browser`
          ? n.formatMessage({
              id: `codex.threadFindBar.placeholder.browser`,
              defaultMessage: `Find in page…`,
              description: `Placeholder for the browser page find input`,
            })
          : a === `diff`
            ? n.formatMessage({
                id: `codex.threadFindBar.placeholder.review`,
                defaultMessage: `Search diff…`,
                description: `Placeholder for the review find input`,
              })
            : n.formatMessage({
                id: `codex.threadFindBar.placeholder`,
                defaultMessage: `Search chat…`,
                description: `Placeholder for the thread find input`,
              })),
      (e[0] = a),
      (e[1] = n),
      (e[2] = c))
    : (c = e[2]);
  let l = c,
    d;
  e[3] !== a || e[4] !== n
    ? ((d =
        a === `browser`
          ? n.formatMessage({
              id: `codex.threadFindBar.label.browser`,
              defaultMessage: `Find in page`,
              description: `Accessible label for the browser page find input`,
            })
          : n.formatMessage({
              id: `codex.threadFindBar.label`,
              defaultMessage: `Find in chat`,
              description: `Accessible label for the thread find input`,
            })),
      (e[3] = a),
      (e[4] = n),
      (e[5] = d))
    : (d = e[5]);
  let f = d,
    p,
    m,
    h;
  e[6] !== i || e[7] !== a || e[8] !== t
    ? ((p = (e) => {
        if (a === `browser`) {
          (Se(t, e), G(i, { type: `set-find-query`, query: e }));
          return;
        }
        M(t, e);
      }),
      (m = (e) => {
        if (a === `browser`) {
          G(i, { type: e ? `find-previous` : `find-next` });
          return;
        }
        C(t, { shift: e });
      }),
      (h = () => {
        (a === `browser` && (N(t, i), G(i, { type: `close-find` }), O(t, Te)),
          me(t));
      }),
      (e[6] = i),
      (e[7] = a),
      (e[8] = t),
      (e[9] = p),
      (e[10] = m),
      (e[11] = h))
    : ((p = e[9]), (m = e[10]), (h = e[11]));
  let g;
  return (
    e[12] !== o ||
    e[13] !== f ||
    e[14] !== l ||
    e[15] !== s ||
    e[16] !== p ||
    e[17] !== m ||
    e[18] !== h
      ? ((g = (0, Ft.jsx)(ct, {
          id: `content-search-input`,
          isLoading: o,
          label: f,
          placeholder: l,
          value: s,
          onChange: p,
          onEnter: m,
          onEscape: h,
        })),
        (e[12] = o),
        (e[13] = f),
        (e[14] = l),
        (e[15] = s),
        (e[16] = p),
        (e[17] = m),
        (e[18] = h),
        (e[19] = g))
      : (g = e[19]),
    g
  );
}
var Pt,
  Ft,
  It = e(() => {
    ((Pt = c()), a(), H(), V(), K(), Y(), z(), (Ft = l()));
  });
function Lt() {
  let e = (0, Rt.c)(16),
    t = r(U),
    n = W(),
    i = u(ge),
    a = u(R),
    o = u(L),
    s = u(I),
    c = o === `browser` ? i.matches : (s?.totalMatches ?? 0),
    l = u(Me),
    d;
  e[0] === n
    ? (d = e[1])
    : ((d = n.formatMessage({
        id: `codex.threadFindBar.nextResult`,
        defaultMessage: `Next result`,
        description: `Button label to move to the next find match`,
      })),
      (e[0] = n),
      (e[1] = d));
  let f;
  e[2] === n
    ? (f = e[3])
    : ((f = n.formatMessage({
        id: `codex.threadFindBar.previousResult`,
        defaultMessage: `Previous result`,
        description: `Button label to move to the previous find match`,
      })),
      (e[2] = n),
      (e[3] = f));
  let p, m;
  e[4] !== a || e[5] !== o || e[6] !== t
    ? ((p = () => {
        if (o === `browser`) {
          G(a, { type: `find-next` });
          return;
        }
        ie(t);
      }),
      (m = () => {
        if (o === `browser`) {
          G(a, { type: `find-previous` });
          return;
        }
        b(t);
      }),
      (e[4] = a),
      (e[5] = o),
      (e[6] = t),
      (e[7] = p),
      (e[8] = m))
    : ((p = e[7]), (m = e[8]));
  let h;
  return (
    e[9] !== l ||
    e[10] !== c ||
    e[11] !== d ||
    e[12] !== f ||
    e[13] !== p ||
    e[14] !== m
      ? ((h = (0, zt.jsx)(lt, {
          isVisible: l,
          matches: c,
          nextLabel: d,
          previousLabel: f,
          onNext: p,
          onPrevious: m,
        })),
        (e[9] = l),
        (e[10] = c),
        (e[11] = d),
        (e[12] = f),
        (e[13] = p),
        (e[14] = m),
        (e[15] = h))
      : (h = e[15]),
    h
  );
}
var Rt,
  zt,
  Bt = e(() => {
    ((Rt = c()), a(), H(), V(), K(), Y(), z(), (zt = l()));
  });
function Vt() {
  let e = (0, Ht.c)(10),
    t = W(),
    n = u(ge),
    r = u(L),
    i = u(Me),
    a = u(I),
    o = u(ke),
    s = r === `browser` ? n.matches : (a?.totalMatches ?? 0),
    c =
      r === `browser`
        ? n.activeMatchOrdinal
        : o == null
          ? s > 0
            ? 1
            : 0
          : o + 1,
    l = null;
  if (i && s === 0) {
    let n;
    (e[0] === t
      ? (n = e[1])
      : ((n = t.formatMessage({
          id: `codex.threadFindBar.noResults`,
          defaultMessage: `0 results`,
          description: `Find-in-thread label when there are no matches`,
        })),
        (e[0] = t),
        (e[1] = n)),
      (l = n));
  } else if (i) {
    let n;
    (e[2] !== c || e[3] !== t || e[4] !== a?.isCapped || e[5] !== s
      ? ((n = t.formatMessage(
          a?.isCapped
            ? {
                id: `codex.threadFindBar.results.capped`,
                defaultMessage: `{active} / {matches}+ results`,
                description: `Find-in-thread label showing the active match index when matches are capped`,
              }
            : {
                id: `codex.threadFindBar.results`,
                defaultMessage: `{active} / {matches} results`,
                description: `Find-in-thread label showing the active match index`,
              },
          { active: c, matches: s },
        )),
        (e[2] = c),
        (e[3] = t),
        (e[4] = a?.isCapped),
        (e[5] = s),
        (e[6] = n))
      : (n = e[6]),
      (l = n));
  }
  let d;
  return (
    e[7] !== i || e[8] !== l
      ? ((d = (0, Ut.jsx)(ut, { isVisible: i, label: l })),
        (e[7] = i),
        (e[8] = l),
        (e[9] = d))
      : (d = e[9]),
    d
  );
}
var Ht,
  Ut,
  Wt = e(() => {
    ((Ht = c()), a(), H(), Y(), z(), (Ut = l()));
  });
function Gt(e) {
  let t = (0, Z.c)(3),
    { children: n, className: r } = e;
  if (!u(pe)) return null;
  let i;
  return (
    t[0] !== n || t[1] !== r
      ? ((i = (0, Q.jsx)(yt, { className: r, children: n })),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function Kt(e) {
  let t = (0, Z.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(Q.Fragment, { children: n })), (t[0] = n), (t[1] = r)),
    r
  );
}
function qt() {
  let e = (0, Z.c)(8),
    t = Ee(),
    n = (0, Zt.useSyncExternalStore)(Yt, Xt, Jt),
    r;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Q.jsx)(Ct, {})), (e[0] = r))
    : (r = e[0]);
  let i;
  e[1] !== n || e[2] !== t
    ? ((i = n
        ? null
        : (0, Q.jsx)(`div`, {
            className: `pointer-events-none fixed top-2 z-[55] flex justify-end`,
            style: { right: 16 + t.right },
            children: (0, Q.jsxs)(Gt, {
              children: [
                (0, Q.jsx)(Nt, {}),
                (0, Q.jsx)(gt, {}),
                (0, Q.jsx)(Lt, {}),
                (0, Q.jsx)(Vt, {}),
                (0, Q.jsx)(ft, {}),
              ],
            }),
          })),
      (e[1] = n),
      (e[2] = t),
      (e[3] = i))
    : (i = e[3]);
  let a;
  e[4] === i
    ? (a = e[5])
    : ((a = (0, Q.jsxs)(Q.Fragment, { children: [r, i] })),
      (e[4] = i),
      (e[5] = a));
  let o = a;
  if (typeof document > `u`) return o;
  let s;
  return (
    e[6] === o
      ? (s = e[7])
      : ((s = (0, Qt.createPortal)(o, document.body)), (e[6] = o), (e[7] = s)),
    s
  );
}
function Jt() {
  return !1;
}
function Yt(e) {
  if (typeof document > `u` || typeof MutationObserver > `u`) return () => {};
  let t = new MutationObserver(e);
  return (
    t.observe(document.body, { childList: !0, subtree: !0 }),
    () => {
      t.disconnect();
    }
  );
}
function Xt() {
  return (
    typeof document < `u` &&
    document.querySelector(`.codex-dialog-overlay`) != null
  );
}
var Z,
  Zt,
  Qt,
  Q,
  $t,
  en = e(() => {
    ((Z = c()),
      a(),
      (Zt = t(s(), 1)),
      (Qt = t(Ve(), 1)),
      _e(),
      z(),
      ht(),
      vt(),
      St(),
      Mt(),
      It(),
      Bt(),
      Wt(),
      (Q = l()),
      ($t = Object.assign(Kt, {
        Frame: Gt,
        Surface: qt,
        Input: Nt,
        DomainToggle: gt,
        Navigation: Lt,
        ResultLabel: Vt,
        Close: ft,
      })));
  });
function tn(e) {
  let t = (0, nn.c)(3),
    n,
    r;
  (t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : ((n = (t) => {
        e(t.open);
      }),
      (r = [e]),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r)),
    p(`toggle-diff-panel`, n, r));
}
var nn,
  rn = e(() => {
    ((nn = c()), o());
  });
function an(e) {
  let t = (0, sn.c)(46),
    { lastTurnCwd: n, lastTurnDiff: i } = e,
    a = r(U),
    o = u(Ne),
    s = u(_),
    c = u(le),
    l = u(ln),
    d = u(re),
    f = u(Ae),
    p;
  t[0] === a ? (p = t[1]) : ((p = () => m(a)), (t[0] = a), (t[1] = p));
  let h;
  (t[2] !== a || t[3] !== c || t[4] !== d
    ? ((h = [a, c, d]), (t[2] = a), (t[3] = c), (t[4] = d), (t[5] = h))
    : (h = t[5]),
    (0, $.useEffect)(p, h));
  let g, v;
  (t[6] !== n || t[7] !== i || t[8] !== a
    ? ((g = () => {
        ee(a, i, n);
      }),
      (v = [n, i, a]),
      (t[6] = n),
      (t[7] = i),
      (t[8] = a),
      (t[9] = g),
      (t[10] = v))
    : ((g = t[9]), (v = t[10])),
    (0, $.useEffect)(g, v));
  let y, b;
  (t[11] !== a || t[12] !== f
    ? ((y = () => {
        f && he(a);
      }),
      (b = [a, f]),
      (t[11] = a),
      (t[12] = f),
      (t[13] = y),
      (t[14] = b))
    : ((y = t[13]), (b = t[14])),
    (0, $.useEffect)(y, b));
  let x, C;
  (t[15] !== a || t[16] !== l
    ? ((x = () => {
        l && te(a);
      }),
      (C = [a, l]),
      (t[15] = a),
      (t[16] = l),
      (t[17] = x),
      (t[18] = C))
    : ((x = t[17]), (C = t[18])),
    (0, $.useEffect)(x, C));
  let w;
  t[19] !== o ||
  t[20] !== s.bytesEstimate ||
  t[21] !== s.fileCount ||
  t[22] !== s.lineCount
    ? ((w = () => {
        rt(`set-review-pane-snapshot-metrics-for-host`, {
          hostId: o,
          reviewDiffFilesTotal: s.fileCount,
          reviewDiffLinesTotal: s.lineCount,
          reviewDiffBytesEstimate: s.bytesEstimate,
        });
      }),
      (t[19] = o),
      (t[20] = s.bytesEstimate),
      (t[21] = s.fileCount),
      (t[22] = s.lineCount),
      (t[23] = w))
    : (w = t[23]);
  let T;
  (t[24] !== o || t[25] !== s
    ? ((T = [o, s]), (t[24] = o), (t[25] = s), (t[26] = T))
    : (T = t[26]),
    (0, $.useEffect)(w, T));
  let E, O;
  (t[27] === o
    ? ((E = t[28]), (O = t[29]))
    : ((E = () => () => {
        rt(`set-review-pane-snapshot-metrics-for-host`, {
          hostId: o,
          reviewDiffFilesTotal: 0,
          reviewDiffLinesTotal: 0,
          reviewDiffBytesEstimate: 0,
        });
      }),
      (O = [o]),
      (t[27] = o),
      (t[28] = E),
      (t[29] = O)),
    (0, $.useEffect)(E, O));
  let k, A;
  (t[30] !== a || t[31] !== d
    ? ((k = () => {
        if (d)
          return Fe(() => {
            (ne(a), D(a));
          });
      }),
      (A = [a, d]),
      (t[30] = a),
      (t[31] = d),
      (t[32] = k),
      (t[33] = A))
    : ((k = t[32]), (A = t[33])),
    (0, $.useEffect)(k, A));
  let j, M;
  (t[34] === a
    ? ((j = t[35]), (M = t[36]))
    : ((j = () => {
        let e = !1;
        return a.watch((t) => {
          let { get: n } = t;
          if (!n(Ce)) {
            e = !1;
            return;
          }
          e || ((e = !0), we(a, !0, { animate: !1 }));
        });
      }),
      (M = [a]),
      (t[34] = a),
      (t[35] = j),
      (t[36] = M)),
    (0, $.useEffect)(j, M));
  let N;
  t[37] !== o || t[38] !== a || t[39] !== l
    ? ((N = (e) => {
        if (e.hostId !== o || !l || a.value.routeKind !== `local-thread`)
          return;
        let t = on(a.value.conversationId, e.notification);
        t.length !== 0 && S(a, t);
      }),
      (t[37] = o),
      (t[38] = a),
      (t[39] = l),
      (t[40] = N))
    : (N = t[40]);
  let P = (0, $.useEffectEvent)(N),
    F;
  t[41] !== P || t[42] !== a
    ? ((F = () => {
        let e = !0;
        return a.watch((t) => {
          let { get: n } = t,
            r = n(Ye);
          if (e) {
            e = !1;
            return;
          }
          r != null && P(r);
        });
      }),
      (t[41] = P),
      (t[42] = a),
      (t[43] = F))
    : (F = t[43]);
  let I;
  return (
    t[44] === a ? (I = t[45]) : ((I = [a]), (t[44] = a), (t[45] = I)),
    (0, $.useEffect)(F, I),
    null
  );
}
function on(e, t) {
  if (d(t.params.threadId) !== e) return [];
  let { item: n } = t.params;
  return n.type !== `fileChange` || n.status !== `completed`
    ? []
    : [
        ...new Set(
          n.changes.flatMap((e) => {
            switch (e.kind.type) {
              case `add`:
              case `delete`:
                return [e.path];
              case `update`:
                return e.kind.move_path == null
                  ? [e.path]
                  : [e.path, e.kind.move_path];
            }
          }),
        ),
      ];
}
var sn,
  $,
  cn,
  ln,
  un = e(() => {
    ((sn = c()),
      a(),
      i(),
      ($ = t(s(), 1)),
      Qe(),
      nt(),
      T(),
      De(),
      V(),
      je(),
      Ze(),
      y(),
      Oe(),
      fe(),
      be(),
      (cn = n(U, ({ get: e }) => e(h) && e(ae.activeTab$)?.tabId === Xe.DIFF)),
      (ln = n(U, ({ get: e }) => e(cn) && e(de))));
  });
export { $t as a, tn as i, un as n, en as o, rn as r, an as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~local-conversation-page-Dj0nNLPv.js.map
