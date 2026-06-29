import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Ko as t,
  O as n,
  Vo as r,
  gc as i,
  lc as a,
  qo as o,
  tr as ee,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  An as s,
  Cf as te,
  Sf as c,
  ff as l,
  hf as u,
  jn as ne,
  mf as d,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Em as f,
  Ga as p,
  Ka as m,
  Tm as re,
  Wa as ie,
  qa as h,
  xp as g,
  yp as _,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Hi as v,
  Iy as y,
  Na as b,
  Ri as ae,
  Vy as x,
  xa as S,
  zy as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  dn as w,
  on as oe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  $c as T,
  Bt as E,
  Qc as D,
  Vt as O,
  el as k,
  ou as A,
  su as j,
  tl as M,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import { n as N, t as se } from "./segmented-toggle-DYZLeHEX.js";
function P() {
  let e = (0, L.c)(5),
    t = I();
  if (`error` in t) {
    let n;
    return (
      e[0] === t.error
        ? (n = e[1])
        : ((n = (0, R.jsx)(`div`, {
            className: `p-4 text-token-error-foreground`,
            children: t.error,
          })),
          (e[0] = t.error),
          (e[1] = n)),
      n
    );
  }
  let n;
  return (
    e[2] !== t.conversationId || e[3] !== t.diffContent
      ? ((n = (0, R.jsx)(F, {
          diffContent: t.diffContent,
          conversationId: t.conversationId,
        })),
        (e[2] = t.conversationId),
        (e[3] = t.diffContent),
        (e[4] = n))
      : (n = e[4]),
    n
  );
}
function F(e) {
  let n = (0, L.c)(61),
    { diffContent: r, conversationId: i } = e,
    a = t(ae),
    s;
  n[0] === i
    ? (s = n[1])
    : ((s = { conversationId: i, enablePullRequestComments: !1 }),
      (n[0] = i),
      (n[1] = s));
  let { commentProps: c } = ne(s),
    d;
  n[2] === r ? (d = n[3]) : ((d = te(r)), (n[2] = r), (n[3] = d));
  let f = d,
    p;
  n[4] === f ? (p = n[5]) : ((p = E(f)), (n[4] = f), (n[5] = p));
  let h = p,
    g = o(l),
    v = o(u),
    y = x(),
    { data: S } = o(oe),
    w = b().state?.cwd || S?.roots?.[0],
    { fileCount: T, linesAdded: D, linesDeleted: O } = h,
    k = T <= z && D + O <= B,
    j;
  n[6] === T
    ? (j = n[7])
    : ((j = (0, R.jsx)(`span`, {
        className: `text-token-input-foreground`,
        children: (0, R.jsx)(C, {
          id: `codex.diffView.filesChanged`,
          defaultMessage: `{fileCount, plural, one {# file changed} other {# files changed}}`,
          description: `Label for the number of files changed in DiffView`,
          values: { fileCount: T },
        }),
      })),
      (n[6] = T),
      (n[7] = j));
  let M;
  n[8] !== D || n[9] !== O
    ? ((M =
        (D > 0 || O > 0) &&
        (0, R.jsxs)(`div`, {
          className: `flex items-center gap-1`,
          children: [
            (0, R.jsx)(`span`, {
              className: `text-token-charts-green`,
              children: (0, R.jsx)(C, {
                id: `codex.diffView.linesAdded`,
                defaultMessage: `+{linesAdded}`,
                description: `Label for lines added in DiffView`,
                values: { linesAdded: D },
              }),
            }),
            (0, R.jsx)(`span`, {
              className: `text-token-charts-red`,
              children: (0, R.jsx)(C, {
                id: `codex.diffView.linesDeleted`,
                defaultMessage: `-{linesDeleted}`,
                description: `Label for lines deleted in DiffView`,
                values: { linesDeleted: O },
              }),
            }),
          ],
        })),
      (n[8] = D),
      (n[9] = O),
      (n[10] = M))
    : (M = n[10]);
  let N;
  n[11] !== j || n[12] !== M
    ? ((N = (0, R.jsxs)(`div`, {
        className: `flex items-center gap-2 text-sm`,
        children: [j, M],
      })),
      (n[11] = j),
      (n[12] = M),
      (n[13] = N))
    : (N = n[13]);
  let P;
  n[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = { id: `left`, label: (0, R.jsx)(ce, { className: `icon-xs` }) }),
      (n[14] = P))
    : (P = n[14]);
  let F;
  n[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = [
        P,
        { id: `right`, label: (0, R.jsx)(le, { className: `icon-xs` }) },
      ]),
      (n[15] = F))
    : (F = n[15]);
  let I = g === `unified` ? `left` : `right`,
    V;
  n[16] === a
    ? (V = n[17])
    : ((V = (e) => a.set(l, e === `left` ? `unified` : `split`)),
      (n[16] = a),
      (n[17] = V));
  let H;
  n[18] !== V || n[19] !== I
    ? ((H = (0, R.jsx)(se, {
        options: F,
        selectedId: I,
        onSelect: V,
        size: `toolbar`,
      })),
      (n[18] = V),
      (n[19] = I),
      (n[20] = H))
    : (H = n[20]);
  let U;
  n[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((U = (0, R.jsx)(C, {
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (n[21] = U))
    : (U = n[21]);
  let W;
  n[22] === y
    ? (W = n[23])
    : ((W = y.formatMessage({
        id: `codex.diffView.richPreviewToggle`,
        defaultMessage: `Toggle rich preview`,
        description: `Tooltip to toggle rich previews in the diff view`,
      })),
      (n[22] = y),
      (n[23] = W));
  let G = v ? `ghostActive` : `ghost`,
    K;
  n[24] !== v || n[25] !== a
    ? ((K = () => a.set(u, !v)), (n[24] = v), (n[25] = a), (n[26] = K))
    : (K = n[26]);
  let q;
  n[27] === v
    ? (q = n[28])
    : ((q = v
        ? (0, R.jsx)(m, {
            className: `icon-xs text-token-description-foreground`,
          })
        : (0, R.jsx)(ie, {
            className: `icon-xs text-token-description-foreground`,
          })),
      (n[27] = v),
      (n[28] = q));
  let J;
  n[29] !== v || n[30] !== W || n[31] !== G || n[32] !== K || n[33] !== q
    ? ((J = (0, R.jsx)(_, {
        tooltipContent: U,
        children: (0, R.jsx)(re, {
          "aria-label": W,
          "aria-pressed": v,
          color: G,
          size: `icon`,
          onClick: K,
          children: q,
        }),
      })),
      (n[29] = v),
      (n[30] = W),
      (n[31] = G),
      (n[32] = K),
      (n[33] = q),
      (n[34] = J))
    : (J = n[34]);
  let Y;
  n[35] !== H || n[36] !== J
    ? ((Y = (0, R.jsxs)(`div`, {
        className: `flex items-center gap-1`,
        children: [H, J],
      })),
      (n[35] = H),
      (n[36] = J),
      (n[37] = Y))
    : (Y = n[37]);
  let X;
  n[38] !== Y || n[39] !== N
    ? ((X = (0, R.jsxs)(`div`, {
        className: `flex items-center justify-between py-2 pr-2 pl-6`,
        children: [N, Y],
      })),
      (n[38] = Y),
      (n[39] = N),
      (n[40] = X))
    : (X = n[40]);
  let Z;
  if (
    n[41] !== c ||
    n[42] !== i ||
    n[43] !== w ||
    n[44] !== f ||
    n[45] !== g ||
    n[46] !== v ||
    n[47] !== k
  ) {
    let e;
    (n[49] !== c ||
    n[50] !== i ||
    n[51] !== w ||
    n[52] !== g ||
    n[53] !== v ||
    n[54] !== k
      ? ((e = (e, t) =>
          (0, R.jsx)(
            A,
            {
              diff: e,
              hunkSeparators: `line-info`,
              viewType: g,
              richPreviewEnabled: v,
              stickyHeader: !0,
              diffViewWrap: !1,
              defaultOpen: k,
              cwd: w == null ? void 0 : ee(w),
              conversationId: i,
              fullContentNextFallbackToDisk: !0,
              ...c,
            },
            t,
          )),
        (n[49] = c),
        (n[50] = i),
        (n[51] = w),
        (n[52] = g),
        (n[53] = v),
        (n[54] = k),
        (n[55] = e))
      : (e = n[55]),
      (Z = f.map(e)),
      (n[41] = c),
      (n[42] = i),
      (n[43] = w),
      (n[44] = f),
      (n[45] = g),
      (n[46] = v),
      (n[47] = k),
      (n[48] = Z));
  } else Z = n[48];
  let Q;
  n[56] === Z
    ? (Q = n[57])
    : ((Q = (0, R.jsx)(`div`, {
        className: `flex flex-col gap-1 overflow-y-auto p-[var(--padding-panel)] pt-0`,
        children: Z,
      })),
      (n[56] = Z),
      (n[57] = Q));
  let $;
  return (
    n[58] !== X || n[59] !== Q
      ? (($ = (0, R.jsxs)(`div`, {
          className: `flex h-full flex-col`,
          children: [X, Q],
        })),
        (n[58] = X),
        (n[59] = Q),
        (n[60] = $))
      : ($ = n[60]),
    $
  );
}
function I() {
  let e = (0, L.c)(11),
    t = x(),
    n = b(),
    r;
  bb0: {
    let i = n.state;
    if (i?.unifiedDiff && i.conversationId)
      try {
        let t = i.conversationId ?? null,
          n;
        (e[0] !== i.unifiedDiff || e[1] !== t
          ? ((n = { diffContent: i.unifiedDiff, conversationId: t }),
            (e[0] = i.unifiedDiff),
            (e[1] = t),
            (e[2] = n))
          : (n = e[2]),
          (r = n));
        break bb0;
      } catch {
        let n;
        e[3] === t
          ? (n = e[4])
          : ((n = t.formatMessage({
              id: `codex.diffView.failedToDecodeBase64Diff`,
              defaultMessage: `Couldn’t load this diff`,
              description: `Error message displayed when the diff cannot be decoded`,
            })),
            (e[3] = t),
            (e[4] = n));
        let i;
        (e[5] === n ? (i = e[6]) : ((i = { error: n }), (e[5] = n), (e[6] = i)),
          (r = i));
        break bb0;
      }
    let a;
    e[7] === t
      ? (a = e[8])
      : ((a = t.formatMessage({
          id: `codex.diffView.noDiffData`,
          defaultMessage: `No diff available`,
          description: `Error message displayed when there is no diff data`,
        })),
        (e[7] = t),
        (e[8] = a));
    let o;
    (e[9] === a ? (o = e[10]) : ((o = { error: a }), (e[9] = a), (e[10] = o)),
      (r = o));
  }
  return r;
}
function ce(e) {
  let t = (0, L.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, R.jsx)(C, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, R.jsx)(_, {
          tooltipContent: r,
          children: (0, R.jsx)(D, { className: n }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function le(e) {
  let t = (0, L.c)(3),
    { className: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, R.jsx)(C, {
        id: `codex.diffView.switchToUnified`,
        defaultMessage: `Switch to unified diff`,
        description: `Tooltip to switch to unified diff view`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, R.jsx)(_, {
          tooltipContent: r,
          children: (0, R.jsx)(k, { className: n }),
        })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
var L, R, z, B;
e(() => {
  ((L = i()),
    r(),
    n(),
    y(),
    S(),
    f(),
    N(),
    g(),
    M(),
    T(),
    h(),
    p(),
    v(),
    w(),
    j(),
    O(),
    d(),
    c(),
    s(),
    (R = a()),
    (z = 25),
    (B = 2e3));
})();
export { P as EditorDiffPage };
//# sourceMappingURL=editor-diff-page-DhkTy3wR.js.map
