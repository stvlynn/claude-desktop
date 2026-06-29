import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Ko as n,
  Vo as r,
  _c as i,
  lc as a,
  qo as o,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Cs as s,
  Ds as c,
  Es as l,
  Hf as u,
  Os as d,
  Ss as f,
  Ts as p,
  Uf as m,
  ct as h,
  hm as g,
  ks as _,
  lt as v,
  mm as y,
  vs as b,
  ws as x,
  xs as S,
  ys as C,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  gh as w,
  hh as T,
  mh as E,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Fi as D,
  Hi as O,
  Pi as k,
  Ri as A,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function j({
  header: e,
  banner: t,
  children: n,
  className: r,
  bodyClassName: i,
  containerRef: a,
  tabIndex: o,
  ...s
}) {
  return (0, N.jsxs)(`div`, {
    ref: (0, M.useCallback)(
      (e) => {
        if (typeof a == `function`) {
          a(e);
          return;
        }
        a != null && (a.current = e);
      },
      [a],
    ),
    className: E(`relative flex h-full flex-col`, r),
    tabIndex: o,
    ...s,
    children: [
      (0, N.jsx)(`div`, { className: `sticky top-0 z-10`, children: e }),
      (0, N.jsx)(`div`, {
        className: E(`flex min-h-0 flex-1 flex-col`, i),
        children: (0, N.jsxs)(`div`, {
          className: `relative mx-auto flex min-h-0 w-full flex-1 flex-col`,
          children: [
            t,
            (0, N.jsx)(`div`, { className: `min-h-0 flex-1`, children: n }),
          ],
        }),
      }),
    ],
  });
}
var M,
  N,
  P,
  F,
  I = e(() => {
    (T(),
      (M = t(i(), 1)),
      (N = a()),
      (P = `px-toolbar`),
      (F = E(`mx-auto w-full max-w-(--thread-content-max-width)`, P)));
  });
function L({ children: e, onPointerDownOutside: t }) {
  let r = n(A),
    i = (0, z.useContext)(h),
    a = o(m.activeTab$),
    u = o(g),
    v = o(d),
    y = o(c),
    x = o(p),
    w = (0, z.useRef)(null),
    T = (0, z.useRef)(null),
    O = (0, z.useRef)(0),
    [k, j] = (0, z.useState)(102),
    M = t != null,
    N = !D(a) || !u || v,
    P = R(N, y),
    I = s(k),
    L = N ? I : 0,
    H = P !== `hidden`,
    U = P === `visible`,
    W = P === `entering` || P === `exiting`,
    G = W ? x : L;
  O.current = G;
  let K = (0, z.useEffectEvent)(() => {
      t?.();
    }),
    q = (0, z.useCallback)(() => {
      let e = w.current,
        t = Math.max(102, e?.offsetHeight ?? 0);
      j((e) => (e === t ? e : t));
      let n =
        i == null || e == null
          ? 0
          : Math.max(0, i.offsetWidth - e.offsetLeft - e.offsetWidth);
      r.get(l) !== n && r.set(l, n);
    }, [i, r]);
  if (
    ((0, z.useLayoutEffect)(
      () => () => {
        (S(r), r.get(p) !== 0 && r.set(p, 0), r.get(l) !== 0 && r.set(l, 0));
      },
      [r],
    ),
    (0, z.useLayoutEffect)(() => {
      if (!H) {
        r.get(l) !== 0 && r.set(l, 0);
        return;
      }
      q();
      let e = w.current;
      if (e == null || typeof ResizeObserver > `u`) return;
      let t = new ResizeObserver(q);
      return (
        t.observe(e),
        i != null && t.observe(i),
        () => {
          t.disconnect();
        }
      );
    }, [i, q, r, H]),
    (0, z.useLayoutEffect)(() => {
      if (!(!H || i == null))
        return (
          i.style.setProperty(b, `${k}px`),
          i.style.setProperty(C, `${O.current}px`),
          () => {
            (i.style.removeProperty(b), i.style.removeProperty(C));
          }
        );
    }, [i, k, H]),
    (0, z.useLayoutEffect)(() => {
      P === `entering`
        ? _(r, L, { direction: `enter`, shouldAnimate: !0 })
        : W || _(r, L);
    }, [P, W, r, L]),
    (0, z.useLayoutEffect)(() => {
      !H || i == null || i.style.setProperty(C, `${G}px`);
    }, [i, H, G]),
    (0, z.useEffect)(() => {
      if (!M || !U) return;
      let e = (e) => {
        let t = e.target;
        t instanceof Node && (T.current?.contains(t) || K());
      };
      return (
        document.addEventListener(`pointerdown`, e, !0),
        () => {
          document.removeEventListener(`pointerdown`, e, !0);
        }
      );
    }, [M, U]),
    !H)
  )
    return null;
  let J = (0, V.jsx)(`div`, {
    "aria-hidden": !U,
    "data-testid": `right-panel-composer-overlay`,
    onAnimationEnd: (e) => {
      e.currentTarget === e.target && P === `entering` && f(r, `entering`);
    },
    onTransitionEnd: (e) => {
      e.currentTarget === e.target && P === `exiting` && f(r, `exiting`);
    },
    className: E(
      `pointer-events-none absolute inset-x-0 z-[42] transition-opacity duration-[120ms] motion-reduce:transition-none`,
      P === `entering` && `right-panel-composer-overlay-enter opacity-100`,
      P === `visible` && `opacity-100 ease-in`,
      P === `exiting` && `opacity-0 ease-out`,
    ),
    style: {
      bottom: `var(--app-shell-bottom-panel-height, 0px)`,
      transform: `translateY(calc(${I}px - var(${C}, 0px)))`,
    },
    children: (0, V.jsx)(`div`, {
      ref: w,
      "data-right-panel-composer-overlay-content": `true`,
      className: E(F, `pb-6`),
      children: (0, V.jsx)(`div`, {
        ref: T,
        className: U ? `pointer-events-auto` : `pointer-events-none`,
        children: e,
      }),
    }),
  });
  return i == null ? J : (0, B.createPortal)(J, i);
}
function R(e, t) {
  return e
    ? t === `entering`
      ? `entering`
      : `visible`
    : t === `exiting`
      ? `exiting`
      : `hidden`;
}
var z,
  B,
  V,
  H = e(() => {
    (T(),
      r(),
      (z = t(i(), 1)),
      (B = t(w(), 1)),
      v(),
      y(),
      u(),
      O(),
      x(),
      k(),
      I(),
      (V = a()));
  });
export { I as a, j as i, H as n, F as r, L as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~appgen-library-page~local-conversation-page-DAngUxdy.js.map
