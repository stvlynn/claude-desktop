import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  _ as n,
  _c as r,
  gc as i,
  lc as a,
  v as o,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  ft as s,
  pt as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Em as l,
  Tm as u,
  op as d,
  sp as f,
  xp as p,
  yp as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Da as h,
  Fy as g,
  Iy as _,
  Vy as v,
  nv as y,
  tv as b,
  xa as x,
  zy as S,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  n as C,
  t as w,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~n4ikpxgm-MU61VBEm.js";
import {
  n as T,
  t as E,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-detail-layout~local-conversation-page-BnkJ2KOs.js";
import {
  n as D,
  t as O,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~o5l7nhuo-DnNHJk2m.js";
import { n as k, t as A } from "./use-hotkey-window-detail-layout-D-pNZzEr.js";
import {
  n as j,
  t as M,
} from "./use-hotkey-window-dismiss-on-escape-D4r0Oase.js";
function N(e) {
  let t = (0, L.c)(20),
    {
      title: n,
      onDismiss: r,
      showDismissButton: i,
      reserveWindowControlsSafeArea: a,
      rightActions: o,
    } = e,
    s = i === void 0 ? !0 : i,
    l = a === void 0 ? !1 : a,
    f = v(),
    p = c(),
    h = l ? p.left : 0,
    g = l ? p.right : 0,
    _ = h + 12,
    y = g + 12,
    b = _ + (s ? 52 : 0),
    x = y + 84,
    C;
  t[0] !== b || t[1] !== x
    ? ((C = { left: b, right: x }), (t[0] = b), (t[1] = x), (t[2] = C))
    : (C = t[2]);
  let w;
  t[3] !== C || t[4] !== n
    ? ((w = (0, R.jsx)(`div`, {
        className: `absolute inset-y-0 flex items-center justify-center text-base font-medium text-token-foreground/60 select-none`,
        style: C,
        children: n,
      })),
      (t[3] = C),
      (t[4] = n),
      (t[5] = w))
    : (w = t[5]);
  let T;
  t[6] !== f || t[7] !== _ || t[8] !== r || t[9] !== s
    ? ((T = s
        ? (0, R.jsx)(`div`, {
            className: `absolute flex items-center gap-0`,
            style: { left: _ },
            children: (0, R.jsx)(m, {
              tooltipContent: (0, R.jsx)(S, { ...z.dismiss }),
              delayOpen: !0,
              children: (0, R.jsx)(u, {
                size: `toolbar`,
                color: `ghost`,
                "aria-label": f.formatMessage(z.dismiss),
                onClick: r,
                children: (0, R.jsx)(d, { className: `icon-xs` }),
              }),
            }),
          })
        : null),
      (t[6] = f),
      (t[7] = _),
      (t[8] = r),
      (t[9] = s),
      (t[10] = T))
    : (T = t[10]);
  let E;
  t[11] === y ? (E = t[12]) : ((E = { right: y }), (t[11] = y), (t[12] = E));
  let D;
  t[13] !== o || t[14] !== E
    ? ((D = (0, R.jsx)(`div`, {
        className: `absolute flex items-center gap-0`,
        style: E,
        children: o,
      })),
      (t[13] = o),
      (t[14] = E),
      (t[15] = D))
    : (D = t[15]);
  let O;
  return (
    t[16] !== w || t[17] !== T || t[18] !== D
      ? ((O = (0, R.jsxs)(`div`, {
          className: `draggable relative flex h-toolbar-sm items-center justify-center px-3`,
          children: [w, T, D],
        })),
        (t[16] = w),
        (t[17] = T),
        (t[18] = D),
        (t[19] = O))
      : (O = t[19]),
    O
  );
}
function P(e) {
  let t = (0, L.c)(18),
    { title: n, mainWindowPath: r, canCollapseToHome: i } = e,
    a = i === void 0 ? !0 : i,
    s = v(),
    c;
  t[0] !== a || t[1] !== s
    ? ((c = a
        ? (0, R.jsx)(m, {
            tooltipContent: (0, R.jsx)(S, { ...z.newThread }),
            delayOpen: !0,
            children: (0, R.jsx)(u, {
              size: `toolbar`,
              color: `ghost`,
              "aria-label": s.formatMessage(z.newThread),
              onClick: F,
              children: (0, R.jsx)(w, { className: `icon-sm` }),
            }),
          })
        : null),
      (t[0] = a),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, R.jsx)(S, { ...z.openInMainWindow })), (t[3] = l))
    : (l = t[3]);
  let d;
  t[4] === s
    ? (d = t[5])
    : ((d = s.formatMessage(z.openInMainWindow)), (t[4] = s), (t[5] = d));
  let f;
  t[6] === r
    ? (f = t[7])
    : ((f = () => {
        o.dispatchMessage(`open-in-main-window`, { path: r });
      }),
      (t[6] = r),
      (t[7] = f));
  let p;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, R.jsx)(O, { className: `icon-sm` })), (t[8] = p))
    : (p = t[8]);
  let h;
  t[9] !== d || t[10] !== f
    ? ((h = (0, R.jsx)(m, {
        tooltipContent: l,
        delayOpen: !0,
        children: (0, R.jsx)(u, {
          size: `toolbar`,
          color: `ghost`,
          "aria-label": d,
          onClick: f,
          children: p,
        }),
      })),
      (t[9] = d),
      (t[10] = f),
      (t[11] = h))
    : (h = t[11]);
  let g;
  t[12] !== c || t[13] !== h
    ? ((g = (0, R.jsxs)(R.Fragment, { children: [c, h] })),
      (t[12] = c),
      (t[13] = h),
      (t[14] = g))
    : (g = t[14]);
  let _;
  return (
    t[15] !== g || t[16] !== n
      ? ((_ = (0, R.jsx)(N, { title: n, onDismiss: I, rightActions: g })),
        (t[15] = g),
        (t[16] = n),
        (t[17] = _))
      : (_ = t[17]),
    _
  );
}
function F() {
  b.hotkeyWindowHotkeys?.collapseToHome();
}
function I() {
  b.hotkeyWindowHotkeys?.dismiss();
}
var L,
  R,
  z,
  B = e(() => {
    ((L = i()),
      _(),
      s(),
      l(),
      p(),
      C(),
      D(),
      f(),
      n(),
      y(),
      (R = a()),
      (z = g({
        dismiss: {
          id: `hotkeyWindow.dismiss`,
          defaultMessage: `Dismiss Popout Window`,
          description: `Tooltip label for dismissing the hotkey window`,
        },
        newThread: {
          id: `hotkeyWindow.threadPage.newButton`,
          defaultMessage: `Start New Chat`,
          description: `Tooltip label for the hotkey window header button that returns to hotkey window home`,
        },
        openInMainWindow: {
          id: `hotkeyWindow.threadPage.openInMainWindow`,
          defaultMessage: `Open in Main Window`,
          description: `Tooltip label for the hotkey window header button that opens the current page in the main app window`,
        },
      })));
  });
function V() {
  let e = (0, U.c)(7);
  j();
  let [t, n] = (0, W.useState)(null),
    r = t != null && t.canCollapseToHome !== !1,
    i;
  (e[0] === r
    ? (i = e[1])
    : ((i = { commandId: `newThread`, enabled: r, onKeyDown: H }),
      (e[0] = r),
      (e[1] = i)),
    T(i));
  let a;
  e[2] === t
    ? (a = e[3])
    : ((a =
        t == null
          ? null
          : (0, G.jsx)(P, {
              title: t.title,
              mainWindowPath: t.mainWindowPath,
              canCollapseToHome: t.canCollapseToHome !== !1,
            })),
      (e[2] = t),
      (e[3] = a));
  let o;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, G.jsx)(`div`, {
        className: `min-h-0 flex-1`,
        children: (0, G.jsx)(h, {}),
      })),
      (e[4] = o))
    : (o = e[4]);
  let s;
  return (
    e[5] === a
      ? (s = e[6])
      : ((s = (0, G.jsx)(A.Provider, {
          value: n,
          children: (0, G.jsxs)(`div`, {
            className: `flex h-full w-full flex-col overflow-hidden rounded-2xl border border-token-border-light bg-token-main-surface-primary`,
            children: [a, o],
          }),
        })),
        (e[5] = a),
        (e[6] = s)),
    s
  );
}
function H(e) {
  (e.preventDefault(),
    e.stopPropagation(),
    b.hotkeyWindowHotkeys?.collapseToHome());
}
var U, W, G;
e(() => {
  ((U = i()), (W = t(r(), 1)), x(), E(), y(), B(), k(), M(), (G = a()));
})();
export { V as HotkeyWindowDetailLayout };
//# sourceMappingURL=hotkey-window-detail-layout-CbLgJ30Y.js.map
