import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  _c as n,
  gc as r,
  lc as i,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  hh as a,
  mh as o,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
function s(e) {
  let t = (0, l.c)(51),
    n,
    r,
    i,
    a,
    s,
    c,
    p,
    m,
    h,
    g,
    _,
    v,
    y;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (s = t[5]),
      (c = t[6]),
      (p = t[7]),
      (m = t[8]),
      (h = t[9]),
      (g = t[10]),
      (_ = t[11]),
      (v = t[12]),
      (y = t[13]))
    : (({
        title: v,
        backSlot: r,
        subtitle: m,
        children: i,
        fullWidth: g,
        contentClassName: s,
        subtitleClassName: h,
        titleStackClassName: y,
        action: n,
        actionPlacement: _,
        ref: c,
        className: a,
        ...p
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s),
      (t[6] = c),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h),
      (t[10] = g),
      (t[11] = _),
      (t[12] = v),
      (t[13] = y));
  let b = g === void 0 ? !1 : g,
    x = _ === void 0 ? `header` : _,
    S = (0, u.useContext)(f),
    C = S?.targetId ?? null,
    w = S?.navigationKey ?? null,
    T;
  t[14] === C
    ? (T = t[15])
    : ((T = () => {
        C != null &&
          document.getElementById(C)?.scrollIntoView?.({ block: `center` });
      }),
      (t[14] = C),
      (t[15] = T));
  let E;
  (t[16] !== w || t[17] !== C
    ? ((E = [w, C]), (t[16] = w), (t[17] = C), (t[18] = E))
    : (E = t[18]),
    (0, u.useLayoutEffect)(T, E));
  let D;
  t[19] === v
    ? (D = t[20])
    : ((D = v
        ? (0, d.jsx)(`div`, {
            className: `electron:heading-lg heading-base truncate`,
            children: v,
          })
        : null),
      (t[19] = v),
      (t[20] = D));
  let O = D,
    k;
  t[21] !== m || t[22] !== h
    ? ((k = m
        ? (0, d.jsx)(`div`, {
            className: o(
              `text-base text-token-text-secondary`,
              h ?? `truncate`,
            ),
            children: m,
          })
        : null),
      (t[21] = m),
      (t[22] = h),
      (t[23] = k))
    : (k = t[23]);
  let A = k,
    j;
  t[24] !== n ||
  t[25] !== x ||
  t[26] !== m ||
  t[27] !== A ||
  t[28] !== v ||
  t[29] !== O ||
  t[30] !== y
    ? ((j =
        !v && !m && !n
          ? null
          : x === `subtitle` && A
            ? (0, d.jsx)(`div`, {
                className: `pb-panel`,
                children: (0, d.jsxs)(`div`, {
                  className: o(
                    `flex min-w-0 flex-col`,
                    y ?? `gap-1.5 pb-panel`,
                  ),
                  children: [
                    O,
                    (0, d.jsxs)(`div`, {
                      className: `flex items-center justify-between gap-3`,
                      children: [
                        (0, d.jsx)(`div`, {
                          className: `min-w-0 flex-1`,
                          children: A,
                        }),
                        n
                          ? (0, d.jsx)(`div`, {
                              className: `shrink-0`,
                              children: n,
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              })
            : (0, d.jsxs)(`div`, {
                className: `flex items-center justify-between gap-3 pb-panel`,
                children: [
                  (0, d.jsxs)(`div`, {
                    className: o(
                      `flex min-w-0 flex-1 flex-col`,
                      y ?? `gap-1.5 pb-panel`,
                    ),
                    children: [O, A],
                  }),
                  n
                    ? (0, d.jsx)(`div`, { className: `shrink-0`, children: n })
                    : null,
                ],
              })),
      (t[24] = n),
      (t[25] = x),
      (t[26] = m),
      (t[27] = A),
      (t[28] = v),
      (t[29] = O),
      (t[30] = y),
      (t[31] = j))
    : (j = t[31]);
  let M = j,
    N;
  t[32] === a
    ? (N = t[33])
    : ((N = o(`main-surface flex h-full min-h-0 flex-col`, a)),
      (t[32] = a),
      (t[33] = N));
  let P;
  t[34] === r
    ? (P = t[35])
    : ((P = (0, d.jsx)(`div`, {
        className: `draggable flex items-center px-panel electron:h-toolbar extension:h-toolbar-sm`,
        children: r,
      })),
      (t[34] = r),
      (t[35] = P));
  let F = b
      ? null
      : `max-w-2xl electron:min-w-[calc(320px*var(--codex-window-zoom))]`,
    I;
  t[36] !== s || t[37] !== F
    ? ((I = o(`mx-auto flex w-full flex-col`, F, s)),
      (t[36] = s),
      (t[37] = F),
      (t[38] = I))
    : (I = t[38]);
  let L;
  t[39] === i
    ? (L = t[40])
    : ((L = (0, d.jsx)(`div`, {
        className: `flex flex-col gap-[var(--padding-panel)]`,
        children: i,
      })),
      (t[39] = i),
      (t[40] = L));
  let R;
  t[41] !== I || t[42] !== L || t[43] !== M
    ? ((R = (0, d.jsx)(`div`, {
        className: `scrollbar-stable flex-1 overflow-y-auto p-panel`,
        children: (0, d.jsxs)(`div`, { className: I, children: [M, L] }),
      })),
      (t[41] = I),
      (t[42] = L),
      (t[43] = M),
      (t[44] = R))
    : (R = t[44]);
  let z;
  return (
    t[45] !== c || t[46] !== p || t[47] !== R || t[48] !== N || t[49] !== P
      ? ((z = (0, d.jsxs)(`div`, {
          ref: c,
          className: N,
          ...p,
          children: [P, R],
        })),
        (t[45] = c),
        (t[46] = p),
        (t[47] = R),
        (t[48] = N),
        (t[49] = P),
        (t[50] = z))
      : (z = t[50]),
    z
  );
}
function c(e) {
  let t = (0, l.c)(6),
    { children: n, navigationKey: r, targetId: i } = e,
    a;
  t[0] !== r || t[1] !== i
    ? ((a = i == null ? null : { navigationKey: r, targetId: i }),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] !== n || t[4] !== a
      ? ((o = (0, d.jsx)(f.Provider, { value: a, children: n })),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    o
  );
}
var l,
  u,
  d,
  f,
  p = e(() => {
    ((l = r()),
      a(),
      (u = t(n(), 1)),
      (d = i()),
      (f = (0, u.createContext)(null)));
  });
export { c as n, p as r, s as t };
//# sourceMappingURL=app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js.map
