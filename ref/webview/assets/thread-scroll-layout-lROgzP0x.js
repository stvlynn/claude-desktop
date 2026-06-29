import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  _c as n,
  lc as r,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Lg as i,
  Rg as a,
  aa as o,
  dt as s,
  sa as c,
  ut as ee,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Xm as l,
  eh as te,
  hh as u,
  ih as d,
  mh as f,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Jv as p,
  Kv as m,
  Mv as h,
  kv as ne,
  qv as g,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Sn as _,
  xn as v,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  a as y,
  r as b,
} from "./app-initial~app-main~remote-conversation-page~appgen-library-page~local-conversation-page-DAngUxdy.js";
import {
  n as x,
  t as re,
} from "./thread-scroll-controller-context-value-C-Inw11x.js";
var S = e(() => {});
function C({
  contentX: e,
  children: t,
  footer: n,
  hasLiveMcpAppFrame: r = !1,
  onScroll: a,
  onUserScrollToTop: o,
  ref: s,
  initialOffset: l = 0,
  remoteHostedPIPAnchorHostId: u,
}) {
  let h = te(() => `${Math.abs(e?.get() ?? 0)}px`),
    g = (0, O.useRef)(null),
    [v, y] = (0, O.useState)(!1),
    x = (0, O.useRef)(null),
    S = (0, O.useRef)(l ?? 0),
    C = (0, O.useRef)(new Set()),
    j = (0, O.useRef)(new Set()),
    N = (0, O.useRef)(null),
    P = (0, O.useRef)(!1),
    F = (0, O.useRef)(!1),
    I = (0, O.useRef)(!1),
    L = (0, O.useRef)(null),
    R = (0, O.useRef)(null),
    z = (0, O.useContext)(ee),
    B = (0, O.useCallback)(
      (e) => {
        if (((g.current = e), !(e == null || z == null)))
          return z((t) => {
            F.current || w(e) || p(e, m(e) + t);
          });
      },
      [z],
    ),
    V = _(() => g.current),
    H = (0, O.useCallback)(() => S.current, []),
    U = _(
      (e) => (
        C.current.add(e),
        e(S.current),
        () => {
          C.current.delete(e);
        }
      ),
    ),
    W = _(
      (e) => (
        j.current.add(e),
        () => {
          j.current.delete(e);
        }
      ),
    ),
    G = _((e) => {
      S.current = e;
      let t = e <= 24;
      a?.(e, t);
      for (let t of C.current) t(e);
      y(!t);
    }),
    K = _(() => {
      ((F.current = !1),
        R.current != null &&
          (window.cancelAnimationFrame(R.current), (R.current = null)));
    }),
    ie = _(() => {
      ((F.current = !0),
        R.current != null &&
          (window.cancelAnimationFrame(R.current), (R.current = null)));
    }),
    q = _(() => {
      L.current = null;
    }),
    J = _((e, t) => {
      let n = g.current;
      if (n == null) return;
      q();
      let r = Math.max(0, t(n));
      (n.scrollTo({ behavior: e, top: r === 0 ? 0 : -r }), G(r));
    }),
    Y = _((e, t) => {
      (e > 24 && K(), J(t, () => e));
    }),
    X = _((e) => {
      I.current = e;
    }),
    Z = _(() => {
      let e = g.current;
      if (e == null || L.current != null) return;
      let t = {
        distanceFromBottomPx: S.current,
        scrollHeightPx: e.scrollHeight,
        wheelDistanceFromBottomPx: 0,
      };
      ((L.current = t),
        window.requestAnimationFrame(() => {
          if (L.current === t) {
            if (g.current !== e) {
              q();
              return;
            }
            if (e.scrollHeight === t.scrollHeightPx) {
              q();
              return;
            }
            J(
              `instant`,
              () => t.distanceFromBottomPx + t.wheelDistanceFromBottomPx,
            );
          }
        }));
    }),
    Q = _(async () => {
      if (!(P.current || o == null)) {
        P.current = !0;
        try {
          for (; g.current != null && T(g.current) && (await o()) !== `stop`; );
        } catch {
        } finally {
          P.current = !1;
        }
      }
    }),
    $ = _(() => {
      let e = g.current;
      if (e == null) return;
      q();
      let t = m(e);
      if (t <= 24) {
        (J(`instant`, () => 0), K());
        return;
      }
      ie();
      let n = performance.now(),
        r = (e) => {
          let i = g.current;
          if (i == null) {
            K();
            return;
          }
          let a = Math.min(1, (e - n) / A);
          if ((p(i, t * (1 - (1 - (1 - a) ** 3))), a < 1 && !w(i))) {
            R.current = window.requestAnimationFrame(r);
            return;
          }
          (p(i, 0), K());
        };
      R.current = window.requestAnimationFrame(r);
    });
  ((0, O.useLayoutEffect)(() => {
    let e = g.current;
    if (e == null) return;
    let t = l ?? 0;
    (p(e, t), G(t));
  }, [l, G]),
    (0, O.useEffect)(() => {
      let e = g.current;
      if (e == null) return;
      let t = () => {
          let t = m(e);
          (t <= 24 && K(), G(t));
        },
        n = () => {
          let n = L.current;
          n != null &&
            e.scrollHeight !== n.scrollHeightPx &&
            (q(), p(e, n.distanceFromBottomPx + n.wheelDistanceFromBottomPx));
          let r = S.current,
            i = N.current;
          if (i == null) {
            t();
            return;
          }
          let a = performance.now();
          if (a - i > M) {
            ((N.current = null), t());
            return;
          }
          (t(), (N.current = a));
          let o = m(e);
          o > r && T(e) && Q();
          for (let e of j.current) e(o, r);
        },
        r = (t) => {
          let n = L.current;
          (n != null && `deltaY` in t
            ? (n.wheelDistanceFromBottomPx -= D(t, e.clientHeight))
            : q(),
            `deltaY` in t && t.deltaY < 0 && E(e) <= 0 && Q(),
            (N.current = performance.now()),
            K());
        };
      return (
        e.addEventListener(`pointerdown`, r, { passive: !0 }),
        e.addEventListener(`wheel`, r, { passive: !0 }),
        e.addEventListener(`scroll`, n, { passive: !0 }),
        () => {
          (e.removeEventListener(`pointerdown`, r),
            e.removeEventListener(`wheel`, r),
            e.removeEventListener(`scroll`, n));
        }
      );
    }, [q, K, Q, G]),
    (0, O.useEffect)(
      () => () => {
        K();
      },
      [K],
    ),
    (0, O.useImperativeHandle)(s, () => ({ scrollToBottom: $ })));
  let ae = (0, O.useMemo)(
      () => ({
        addScrollListener: U,
        addUserScrollListener: W,
        getLastScrollDistanceFromBottomPx: H,
        getScrollElement: V,
        isScrolledFromBottom: v,
        preserveScrollPositionForNextLayout: Z,
        scrollToBottom: $,
        scrollToDistanceFromBottomPx: Y,
        setFooterResizeViewportPreserveDisabled: X,
      }),
      [U, W, H, V, v, Z, $, Y, X],
    ),
    oe = c((e) => {
      let { height: t } = i(e),
        n = g.current;
      if (n == null) return;
      let r = x.current;
      r !== t &&
        (n.style.setProperty(`--thread-scroll-padding-bottom`, `${t + 16}px`),
        (x.current = t),
        !(F.current || I.current) &&
          (r == null || w(n) || J(`instant`, (e) => m(e) + t - r)));
    }),
    se = e == null ? void 0 : { x: e, "--thread-wide-block-inline-shift": h };
  return (0, k.jsx)(re, {
    value: ae,
    children: (0, k.jsx)(`div`, {
      className: f(
        `relative h-full flex-1`,
        r ? `[content-visibility:visible]` : `[content-visibility:auto]`,
      ),
      children: (0, k.jsx)(`div`, {
        ref: B,
        "data-pip-anchor-host": u,
        ...ne.timelineScroll,
        tabIndex: 0,
        className: f(
          `thread-scroll-container relative h-full overflow-x-hidden overflow-y-auto [overflow-anchor:none] [scroll-padding-bottom:var(--thread-scroll-padding-bottom,0px)] electron:[scrollbar-gutter:stable_both-edges] pt-(--thread-content-top-inset) [container-name:thread-content] [container-type:inline-size]`,
          `focus:outline-none`,
          `[&:has([data-thread-scroll-footer='true']:focus-within)]:[scroll-padding-bottom:0px]`,
          `flex flex-col-reverse`,
        ),
        children: (0, k.jsxs)(d.div, {
          style: se,
          className: `flex min-h-full shrink-0 flex-col justify-start`,
          children: [
            (0, k.jsx)(`div`, {
              "data-mcp-app-portal-target": `true`,
              className: f(b, `relative flex flex-1 shrink-0 flex-col pb-8`),
              children: t,
            }),
            n
              ? (0, k.jsxs)(`div`, {
                  "data-thread-scroll-footer": `true`,
                  ref: oe,
                  className: `sticky bottom-0 z-10 mt-auto w-full pb-4`,
                  children: [
                    (0, k.jsx)(`div`, {
                      className: `pointer-events-none absolute inset-x-0 bottom-0 z-0 flex h-full w-full justify-center pt-4`,
                      children: (0, k.jsx)(`div`, {
                        className: `z-0 h-full w-full bg-gradient-to-t from-token-main-surface-primary via-token-main-surface-primary extension:from-token-bg-primary extension:via-token-bg-primary`,
                      }),
                    }),
                    (0, k.jsx)(`div`, {
                      "data-pip-obstacle": `thread-footer`,
                      className: f(`relative z-10 flex flex-col`, b),
                      children: n,
                    }),
                  ],
                })
              : null,
          ],
        }),
      }),
    }),
  });
}
function w(e) {
  return m(e) <= 24;
}
function T(e) {
  return E(e) <= j;
}
function E(e) {
  return e.scrollHeight - e.clientHeight - m(e);
}
function D(e, t) {
  return e.deltaMode === P
    ? e.deltaY * N
    : e.deltaMode === F
      ? e.deltaY * t
      : e.deltaY;
}
var O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I = e(() => {
    (u(),
      l(),
      (O = t(n(), 1)),
      h(),
      s(),
      a(),
      o(),
      v(),
      S(),
      y(),
      x(),
      g(),
      (k = r()),
      (A = 260),
      (j = 64),
      (M = 1e3),
      (N = 16),
      (P = 1),
      (F = 2));
  });
export { I as n, S as r, C as t };
//# sourceMappingURL=thread-scroll-layout-lROgzP0x.js.map
