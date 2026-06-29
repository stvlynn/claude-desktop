import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  _c as n,
  gc as r,
  lc as i,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Ba as ee,
  Dm as a,
  Mf as o,
  Om as s,
  Op as c,
  Va as l,
  eo as te,
  hh as u,
  jf as d,
  kp as f,
  mh as p,
  no as m,
  oo as h,
  xp as g,
  yp as _,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as v,
  Rv as y,
  Uv as b,
  zy as x,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Yn as ne,
  Zn as S,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  n as C,
  r as w,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4-Cs4hWsvd.js";
import { n as T, t as re } from "./star-DXYFsF9O.js";
function E(e) {
  let t = (0, k.c)(79),
    {
      className: n,
      labelClassName: r,
      environments: i,
      isLoading: o,
      hasError: s,
      side: l,
      align: u,
      showIcon: f,
      selectedConfigPath: h,
      onSelectConfigPath: g,
      onOpenSettings: v,
      showDefaultOption: y,
    } = e,
    S = l === void 0 ? `top` : l,
    w = u === void 0 ? `start` : u,
    T = f === void 0 ? !0 : f,
    E = y === void 0 ? !0 : y,
    [D, M] = (0, A.useState)(!1),
    N,
    P,
    F,
    I,
    L,
    R,
    z,
    B,
    V,
    H,
    U,
    W,
    G;
  if (
    t[0] !== w ||
    t[1] !== n ||
    t[2] !== i ||
    t[3] !== s ||
    t[4] !== o ||
    t[5] !== r ||
    t[6] !== g ||
    t[7] !== D ||
    t[8] !== h ||
    t[9] !== E ||
    t[10] !== T ||
    t[11] !== S
  ) {
    let e = ne(i),
      a;
    (t[25] === h
      ? (a = t[26])
      : ((a = h ? b(h) : null), (t[25] = h), (t[26] = a)),
      (F = a));
    let l = i.find((e) => b(e.configPath) === F) ?? null,
      u = !o && !s;
    P = e && E ? i.filter((t) => b(t.configPath) !== b(e.configPath)) : i;
    let d = ie({ isLoading: o, selectedEnvironment: l });
    ((N = te), (I = D), (L = M), (R = S), (z = w));
    let f;
    t[27] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((f = (0, j.jsx)(x, {
          id: `composer.worktreeEnvironment.tooltip`,
          defaultMessage: `Select a local environment`,
          description: `Tooltip for local environment selector`,
        })),
        (t[27] = f))
      : (f = t[27]);
    let v;
    t[28] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((v = (0, j.jsx)(x, {
          id: `composer.worktreeEnvironment.footerCategory`,
          defaultMessage: `Env`,
          description: `Category label for the worktree environment control in the composer footer`,
        })),
        (t[28] = v))
      : (v = t[28]);
    let y;
    t[29] === n
      ? (y = t[30])
      : ((y = p(`whitespace-nowrap`, n)), (t[29] = n), (t[30] = y));
    let k = r == null ? `secondary` : `sm`,
      A;
    t[31] === T
      ? (A = t[32])
      : ((A = T ? (0, j.jsx)(ee, { className: `icon-xs` }) : null),
        (t[31] = T),
        (t[32] = A));
    let K = o ? `pending` : `collapsible-chevron`,
      q;
    (t[33] === r
      ? (q = t[34])
      : ((q = p(`max-w-40`, r)), (t[33] = r), (t[34] = q)),
      t[35] !== d ||
      t[36] !== y ||
      t[37] !== k ||
      t[38] !== A ||
      t[39] !== K ||
      t[40] !== q
        ? ((B = (0, j.jsx)(_, {
            tooltipContent: f,
            children: (0, j.jsx)(C, {
              categoryLabel: v,
              className: y,
              collapse: k,
              icon: A,
              indicator: K,
              value: d,
              valueClassName: q,
            }),
          })),
          (t[35] = d),
          (t[36] = y),
          (t[37] = k),
          (t[38] = A),
          (t[39] = K),
          (t[40] = q),
          (t[41] = B))
        : (B = t[41]),
      (W = `flex w-64 flex-col overflow-hidden`),
      t[42] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((G = (0, j.jsx)(m.Title, {
            children: (0, j.jsx)(x, {
              id: `composer.worktreeEnvironment.title`,
              defaultMessage: `Local environment`,
              description: `Title for worktree environment dropdown`,
            }),
          })),
          (t[42] = G))
        : (G = t[42]),
      (V = `vertical-scroll-fade-mask flex max-h-[220px] flex-col overflow-y-auto`),
      t[43] !== g || t[44] !== h || t[45] !== u
        ? ((H = u
            ? (0, j.jsx)(m.Item, {
                RightIcon: h == null ? c : void 0,
                onClick: () => {
                  (g(null), M(!1));
                },
                children: (0, j.jsx)(x, {
                  id: `codex.environmentSelector.noEnvironment`,
                  defaultMessage: `No environment`,
                  description: `No environment selected message`,
                }),
              })
            : null),
          (t[43] = g),
          (t[44] = h),
          (t[45] = u),
          (t[46] = H))
        : (H = t[46]),
      (U =
        E && e
          ? (0, j.jsx)(m.Item, {
              RightIcon: F != null && b(e.configPath) === F ? c : void 0,
              onClick: () => {
                (g(e.configPath), M(!1));
              },
              children: (0, j.jsxs)(`div`, {
                className: `flex min-w-0 items-center gap-2`,
                children: [
                  (0, j.jsx)(_, {
                    tooltipContent: (0, j.jsx)(x, {
                      id: `composer.worktreeEnvironment.default`,
                      defaultMessage: `Default environment`,
                      description: `Tooltip for default local environment icon`,
                    }),
                    children: (0, j.jsx)(re, {
                      className: `icon-xxs shrink-0 text-token-description-foreground`,
                    }),
                  }),
                  (0, j.jsx)(`span`, { className: `truncate`, children: O(e) }),
                ],
              }),
            })
          : null),
      (t[0] = w),
      (t[1] = n),
      (t[2] = i),
      (t[3] = s),
      (t[4] = o),
      (t[5] = r),
      (t[6] = g),
      (t[7] = D),
      (t[8] = h),
      (t[9] = E),
      (t[10] = T),
      (t[11] = S),
      (t[12] = N),
      (t[13] = P),
      (t[14] = F),
      (t[15] = I),
      (t[16] = L),
      (t[17] = R),
      (t[18] = z),
      (t[19] = B),
      (t[20] = V),
      (t[21] = H),
      (t[22] = U),
      (t[23] = W),
      (t[24] = G));
  } else
    ((N = t[12]),
      (P = t[13]),
      (F = t[14]),
      (I = t[15]),
      (L = t[16]),
      (R = t[17]),
      (z = t[18]),
      (B = t[19]),
      (V = t[20]),
      (H = t[21]),
      (U = t[22]),
      (W = t[23]),
      (G = t[24]));
  let K;
  t[47] !== P ||
  t[48] !== i.length ||
  t[49] !== s ||
  t[50] !== o ||
  t[51] !== F ||
  t[52] !== g ||
  t[53] !== h
    ? ((K = o
        ? (0, j.jsx)(`div`, {
            className: `flex items-center justify-center py-4`,
            children: (0, j.jsx)(a, { className: `icon-xxs` }),
          })
        : s
          ? (0, j.jsx)(m.Message, {
              compact: !0,
              tone: `error`,
              children: (0, j.jsx)(x, {
                id: `composer.worktreeEnvironment.error`,
                defaultMessage: `Error loading environments`,
                description: `Error state for worktree environment dropdown`,
              }),
            })
          : P.length > 0
            ? (0, j.jsx)(`div`, {
                className: `flex flex-col`,
                children: P.map((e) => {
                  let t = h != null && b(e.configPath) === F;
                  return (0, j.jsx)(
                    m.Item,
                    {
                      RightIcon: t ? c : void 0,
                      onClick: () => {
                        (g(e.configPath), M(!1));
                      },
                      children: (0, j.jsx)(`span`, {
                        className: `min-w-0 truncate`,
                        children: O(e),
                      }),
                    },
                    e.configPath,
                  );
                }),
              })
            : i.length === 0
              ? (0, j.jsx)(m.Message, {
                  compact: !0,
                  children: (0, j.jsx)(x, {
                    id: `codex.environments.noEnvironmentsFound`,
                    defaultMessage: `No environments found`,
                    description: `Message shown when no Codex environments were found`,
                  }),
                })
              : null),
      (t[47] = P),
      (t[48] = i.length),
      (t[49] = s),
      (t[50] = o),
      (t[51] = F),
      (t[52] = g),
      (t[53] = h),
      (t[54] = K))
    : (K = t[54]);
  let q;
  t[55] !== K || t[56] !== V || t[57] !== H || t[58] !== U
    ? ((q = (0, j.jsxs)(`div`, { className: V, children: [H, U, K] })),
      (t[55] = K),
      (t[56] = V),
      (t[57] = H),
      (t[58] = U),
      (t[59] = q))
    : (q = t[59]);
  let J;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((J = (0, j.jsx)(m.Separator, {})), (t[60] = J))
    : (J = t[60]);
  let Y;
  t[61] === v
    ? (Y = t[62])
    : ((Y = () => {
        (v(), M(!1));
      }),
      (t[61] = v),
      (t[62] = Y));
  let X;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, j.jsx)(x, {
        id: `composer.worktreeEnvironment.create`,
        defaultMessage: `Create local environment`,
        description: `CTA to open local environment settings from worktree dropdown`,
      })),
      (t[63] = X))
    : (X = t[63]);
  let Z;
  t[64] === Y
    ? (Z = t[65])
    : ((Z = (0, j.jsx)(m.Section, {
        className: `flex flex-col pb-1`,
        children: (0, j.jsx)(m.Item, { LeftIcon: d, onClick: Y, children: X }),
      })),
      (t[64] = Y),
      (t[65] = Z));
  let Q;
  t[66] !== q || t[67] !== Z || t[68] !== W || t[69] !== G
    ? ((Q = (0, j.jsxs)(`div`, { className: W, children: [G, q, J, Z] })),
      (t[66] = q),
      (t[67] = Z),
      (t[68] = W),
      (t[69] = G),
      (t[70] = Q))
    : (Q = t[70]);
  let $;
  return (
    t[71] !== N ||
    t[72] !== I ||
    t[73] !== L ||
    t[74] !== R ||
    t[75] !== z ||
    t[76] !== B ||
    t[77] !== Q
      ? (($ = (0, j.jsx)(N, {
          open: I,
          onOpenChange: L,
          side: R,
          align: z,
          triggerButton: B,
          children: Q,
        })),
        (t[71] = N),
        (t[72] = I),
        (t[73] = L),
        (t[74] = R),
        (t[75] = z),
        (t[76] = B),
        (t[77] = Q),
        (t[78] = $))
      : ($ = t[78]),
    $
  );
}
function D(e) {
  let t = b(e),
    n = t.split(`/`).filter(Boolean);
  return n[n.length - 1] ?? t;
}
function O(e) {
  if (e.type === `success`) {
    let t = e.environment.name.trim();
    return t.length > 0 ? t : D(e.configPath);
  }
  return D(e.configPath);
}
function ie({ isLoading: e, selectedEnvironment: t }) {
  return e
    ? (0, j.jsx)(x, {
        id: `composer.worktreeEnvironment.loading`,
        defaultMessage: `Loading environments…`,
        description: `Loading label for worktree environment dropdown`,
      })
    : t?.type === `success`
      ? (0, j.jsx)(j.Fragment, { children: t.environment.name })
      : (0, j.jsx)(x, {
          id: `codex.environmentSelector.noEnvironment`,
          defaultMessage: `No environment`,
          description: `No environment selected message`,
        });
}
var k,
  A,
  j,
  M = e(() => {
    ((k = r()),
      u(),
      (A = t(n(), 1)),
      v(),
      h(),
      s(),
      g(),
      f(),
      o(),
      l(),
      T(),
      S(),
      y(),
      w(),
      (j = i()));
  });
export { M as n, E as t };
//# sourceMappingURL=worktree-environment-dropdown-BwnkHMlh.js.map
