import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Go as n,
  Vo as r,
  _c as i,
  gc as a,
  lc as o,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import { Ta as s } from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  $s as c,
  Dm as l,
  Em as u,
  Jd as d,
  Om as f,
  Op as p,
  Qs as m,
  Sd as ee,
  Tm as te,
  _f as ne,
  eo as re,
  gf as h,
  hh as g,
  kp as _,
  ls as v,
  mh as y,
  no as b,
  oo as x,
  uf as ie,
  us as S,
  xd as ae,
  xp as oe,
  yd as se,
  yp as ce,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Fy as C,
  Iy as le,
  Vy as ue,
  zy as w,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Fm as T,
  Pm as de,
  Rl as fe,
  _l as pe,
  gl as me,
  zl as he,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  $ as E,
  nt as ge,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  n as _e,
  r as D,
  t as O,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4-Cs4hWsvd.js";
import {
  c as ve,
  l as ye,
  n as k,
  s as A,
  t as j,
  u as be,
} from "./git-branch-switcher-BtVZYs2f.js";
import { n as xe, t as Se } from "./use-git-recent-branches-BVnl1r0u.js";
function Ce(e) {
  let t = (0, we.c)(11),
    { children: n, color: r, borderColor: i, badgeEnabled: a } = e,
    o = r === void 0 ? `bg-token-text-link-active-foreground` : r,
    s = a === void 0 ? !0 : a;
  if (!s) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, M.jsx)(M.Fragment, { children: n })),
          (t[0] = n),
          (t[1] = e)),
      e
    );
  }
  let c = !s && `hidden`,
    l;
  t[2] !== i || t[3] !== o || t[4] !== c
    ? ((l = y(
        `border-token-bg-primary absolute right-0 top-0 size-[7px] translate-x-[2px] translate-y-[-2px] rounded-full border-[1px]`,
        o,
        i,
        c,
      )),
      (t[2] = i),
      (t[3] = o),
      (t[4] = c),
      (t[5] = l))
    : (l = t[5]);
  let u;
  t[6] === l
    ? (u = t[7])
    : ((u = (0, M.jsx)(`div`, { className: l })), (t[6] = l), (t[7] = u));
  let d;
  return (
    t[8] !== n || t[9] !== u
      ? ((d = (0, M.jsxs)(`div`, { className: `relative`, children: [n, u] })),
        (t[8] = n),
        (t[9] = u),
        (t[10] = d))
      : (d = t[10]),
    d
  );
}
var we,
  M,
  Te = e(() => {
    ((we = a()), g(), (M = o()));
  });
function Ee(e) {
  let t = (0, F.c)(48),
    {
      startingState: r,
      setStartingState: i,
      hostConfig: a,
      className: o,
      side: s,
      gitRootOverride: c,
      branchSource: u,
    } = e,
    d = s === void 0 ? `top` : s,
    f = ue(),
    [h, g] = (0, I.useState)(!1),
    [_, x] = (0, I.useState)(!1),
    [S, ae] = (0, I.useState)(``),
    oe = ee(),
    C;
  t[0] === _ ? (C = t[1]) : ((C = { enabled: _ }), (t[0] = _), (t[1] = C));
  let le = ge(C),
    T = c ?? le,
    fe = se(oe),
    me = fe?.default_branch ?? `main`,
    he = fe?.id ?? null,
    E = u === `worktree` || !!c,
    D = ne(S, 300),
    O;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((O = (e) => {
        (e && x(!0), g(e), e || ae(``));
      }),
      (t[2] = O))
    : (O = t[2]);
  let k = O,
    A = !E && !!he && h && !!D,
    j;
  t[3] === A ? (j = t[4]) : ((j = { enabled: A }), (t[3] = A), (t[4] = j));
  let {
      data: be,
      isFetching: xe,
      error: Se,
      hasNextPage: we,
      isFetchingNextPage: M,
      fetchNextPage: Te,
      refetch: Ee,
    } = ie(he, D, j),
    N = E && _,
    P;
  t[5] === N ? (P = t[6]) : ((P = { enabled: N }), (t[5] = N), (t[6] = P));
  let {
      data: R,
      isLoading: Ae,
      refetch: z,
    } = pe(T, a, `async_task_starting_state_dropdown`, P),
    B = E && _ && !!T,
    V;
  t[7] === B ? (V = t[8]) : ((V = { enabled: B }), (t[7] = B), (t[8] = V));
  let { data: H } = ve(T, a, `async_task_starting_state_dropdown`, V),
    {
      branches: U,
      defaultBranch: je,
      fetching: Me,
      error: Ne,
      refetch: W,
    } = Oe({
      gitRoot: T,
      hostConfig: a,
      currentBranch: R ?? `main`,
      remoteDefaultBranch: me,
      enabled: E && _,
    }),
    Pe = D.trim().toLowerCase(),
    G = Pe.length > 0,
    Fe = E && h && G,
    K;
  t[9] !== D || t[10] !== T || t[11] !== a || t[12] !== Fe
    ? ((K = {
        cwd: T,
        hostConfig: a,
        operationSource: `async_task_starting_state_dropdown`,
        query: D,
        enabled: Fe,
      }),
      (t[9] = D),
      (t[10] = T),
      (t[11] = a),
      (t[12] = Fe),
      (t[13] = K))
    : (K = t[13]);
  let { data: Ie, isFetching: Le, error: Re, refetch: ze } = n(ye, K),
    Be = r.type === `branch` ? r.branchName : void 0,
    q = E ? je : me,
    Ve = E
      ? G
        ? Ie
        : U
      : G
        ? be?.filter((e) => e.toLowerCase().includes(Pe))
        : void 0,
    He = !G || q.toLowerCase().includes(Pe),
    Ue = Ve?.filter((e) => e !== q),
    We = E ? (G ? Le : Me) : xe,
    Ge = E ? (G ? Re : Ne) : Se,
    Ke = E ? (G ? ze : W) : Ee,
    qe = !E && we,
    Je = R ?? q,
    Ye = r.type === `branch` ? r.branchName : Je,
    Xe =
      H?.type === `success`
        ? H.stagedCount + H.unstagedCount + H.untrackedCount > 0
        : !1,
    Ze = E && Xe,
    Qe = r.type === `working-tree` && Xe,
    $e =
      r.type === `working-tree`
        ? (0, L.jsx)(w, {
            id: `composer.remote.currentBranch`,
            defaultMessage: `{branch} (current)`,
            description: `Label for the current branch starting point in the composer`,
            values: { branch: R ?? q },
          })
        : (0, L.jsx)(w, {
            id: `composer.remote.branch`,
            defaultMessage: `{branch}`,
            description: `Label for a specific branch starting point in the composer`,
            values: { branch: r.branchName },
          }),
    et;
  t[14] === $e
    ? (et = t[15])
    : ((et = (0, L.jsx)(v, { electron: !0, children: $e })),
      (t[14] = $e),
      (t[15] = et));
  let tt;
  t[16] === Ye
    ? (tt = t[17])
    : ((tt = (0, L.jsx)(v, { browser: !0, children: Ye })),
      (t[16] = Ye),
      (t[17] = tt));
  let nt = (0, L.jsxs)(L.Fragment, {
      children: [
        et,
        (0, L.jsx)(v, {
          extension: !0,
          children: Qe
            ? (0, L.jsx)(w, {
                id: `composer.remote.localWorkingTree`,
                defaultMessage: `Use local changes`,
                description: `Label for local working tree selection in remote composer`,
              })
            : Ye,
        }),
        tt,
      ],
    }),
    rt,
    it;
  (t[18] !== h || t[19] !== z || t[20] !== W || t[21] !== E
    ? ((rt = () => {
        h && (z(), E && W());
      }),
      (it = [h, z, W, E]),
      (t[18] = h),
      (t[19] = z),
      (t[20] = W),
      (t[21] = E),
      (t[22] = rt),
      (t[23] = it))
    : ((rt = t[22]), (it = t[23])),
    (0, I.useEffect)(rt, it));
  let at;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (0, L.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, L.jsx)(w, {
          id: `composer.remote.branchStartingPoint`,
          defaultMessage: `What branch should this task start from?`,
          description: `Section label for branch starting point selector`,
        }),
      })),
      (t[24] = at))
    : (at = t[24]);
  let ot;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ot = (0, L.jsx)(w, {
        id: `composer.startingState.footerCategory`,
        defaultMessage: `Starting from`,
        description: `Category label for the starting state control in the composer footer`,
      })),
      (t[25] = ot))
    : (ot = t[25]);
  let st;
  t[26] === o
    ? (st = t[27])
    : ((st = y(`whitespace-nowrap`, o)), (t[26] = o), (t[27] = st));
  let ct = r.type === `working-tree` && Xe,
    lt;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((lt = (0, L.jsx)(m, { className: `icon-xs` })), (t[28] = lt))
    : (lt = t[28]);
  let ut;
  t[29] === ct
    ? (ut = t[30])
    : ((ut = (0, L.jsx)(Ce, {
        borderColor: `border-token-side-bar-background`,
        badgeEnabled: ct,
        children: lt,
      })),
      (t[29] = ct),
      (t[30] = ut));
  let J;
  t[31] === f
    ? (J = t[32])
    : ((J = f.formatMessage({
        id: `codex.composer.searchBranches`,
        defaultMessage: `Search branches`,
        description: `Placeholder for the branch search input`,
      })),
      (t[31] = f),
      (t[32] = J));
  let dt;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((dt = (e) => {
        ae(e.currentTarget.value);
      }),
      (t[33] = dt))
    : (dt = t[33]);
  let Y;
  t[34] === k
    ? (Y = t[35])
    : ((Y = (e) => {
        e.key === `Enter` && k(!1);
      }),
      (t[34] = k),
      (t[35] = Y));
  let X;
  t[36] !== S || t[37] !== J || t[38] !== Y
    ? ((X = (0, L.jsx)(b.SearchInput, {
        autoFocus: !1,
        placeholder: J,
        value: S,
        onChange: dt,
        onKeyDown: Y,
      })),
      (t[36] = S),
      (t[37] = J),
      (t[38] = Y),
      (t[39] = X))
    : (X = t[39]);
  let ft = Ze
      ? (0, L.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [
            (0, L.jsx)(ke, {
              children: (0, L.jsx)(w, {
                id: `composer.remote.localFileStateHeading`,
                defaultMessage: `Local file state`,
                description: `Section heading for local working tree selection`,
              }),
            }),
            (0, L.jsx)(b.Item, {
              LeftIcon: De,
              RightIcon: r.type === `working-tree` ? p : void 0,
              SubText: Xe
                ? (0, L.jsx)(`span`, {
                    className: `text-token-description-foreground`,
                    children: (0, L.jsx)(w, {
                      id: `composer.remote.currentEditsSuffix.useLocal`,
                      defaultMessage: `with local code changes`,
                      description: `Suffix text indicating the selection includes current edits`,
                    }),
                  })
                : void 0,
              onClick: () => {
                (i({ type: `working-tree` }), k(!1));
              },
              children: Ae
                ? null
                : (0, L.jsx)(L.Fragment, { children: R ?? q }),
            }),
          ],
        })
      : null,
    Z;
  t[40] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Z = (0, L.jsx)(ke, {
        children: (0, L.jsx)(w, {
          id: `composer.remote.branchesSectionHeading`,
          defaultMessage: `Branches`,
          description: `Section heading for remote branch search results`,
        }),
      })),
      (t[40] = Z))
    : (Z = t[40]);
  let pt =
      D && We
        ? (0, L.jsx)(`div`, {
            className: `flex h-full items-center justify-center`,
            children: (0, L.jsx)(l, { className: `icon-xxs` }),
          })
        : D && Ge
          ? (0, L.jsxs)(`div`, {
              className: `flex h-full flex-col items-center justify-center gap-1 text-sm text-token-error-foreground`,
              children: [
                (0, L.jsx)(w, {
                  id: `composer.remote.errorLoadingBranches`,
                  defaultMessage: `Error loading branches`,
                  description: `Error message for remote starting point selector`,
                }),
                (0, L.jsx)(te, {
                  color: `ghost`,
                  size: `icon`,
                  className: `text-token-description-foreground`,
                  onClick: () => {
                    Ke();
                  },
                  children: (0, L.jsx)(de, { className: `icon-xxs` }),
                }),
              ],
            })
          : (0, L.jsxs)(`div`, {
              className: `flex flex-col`,
              children: [
                He &&
                  (0, L.jsx)(b.Item, {
                    LeftIcon: m,
                    RightIcon: Be === q ? p : void 0,
                    onClick: () => {
                      (i({ type: `branch`, branchName: q }), k(!1));
                    },
                    children: q,
                  }),
                Ue?.map((e) =>
                  (0, L.jsx)(
                    b.Item,
                    {
                      LeftIcon: m,
                      RightIcon: e === Be ? p : void 0,
                      onClick: () => {
                        (i({ type: `branch`, branchName: e }), k(!1));
                      },
                      children: e,
                    },
                    e,
                  ),
                ),
                qe &&
                  (0, L.jsx)(b.Item, {
                    onClick: () => {
                      M || Te();
                    },
                    className: `w-full text-sm text-token-text-secondary`,
                    children: M
                      ? (0, L.jsx)(w, {
                          id: `composer.remote.loadingMoreBranches`,
                          defaultMessage: `Loading…`,
                          description: `Loading more branches`,
                        })
                      : null,
                  }),
              ],
            }),
    Q;
  t[41] !== ft || t[42] !== Z || t[43] !== pt
    ? ((Q = (0, L.jsxs)(`div`, {
        className: `vertical-scroll-fade-mask flex h-[200px] flex-col gap-1.5 overflow-y-auto`,
        children: [ft, Z, pt],
      })),
      (t[41] = ft),
      (t[42] = Z),
      (t[43] = pt),
      (t[44] = Q))
    : (Q = t[44]);
  let $;
  return (
    t[45] !== X || t[46] !== Q
      ? (($ = (0, L.jsxs)(`div`, {
          className: `flex w-72 flex-col gap-1.5 overflow-hidden`,
          children: [X, Q],
        })),
        (t[45] = X),
        (t[46] = Q),
        (t[47] = $))
      : ($ = t[47]),
    (0, L.jsx)(re, {
      side: d,
      open: h,
      onOpenChange: k,
      triggerButton: (0, L.jsx)(ce, {
        tooltipContent: at,
        children: (0, L.jsx)(_e, {
          categoryLabel: ot,
          className: st,
          collapse: `secondary`,
          icon: ut,
          indicator: `collapsible-chevron`,
          value: nt,
          valueClassName: `max-w-40`,
        }),
      }),
      children: $,
    })
  );
}
function De(e) {
  let t = (0, F.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, L.jsx)(Ce, {
          borderColor: `border-token-side-bar-background`,
          children: (0, L.jsx)(m, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Oe(e) {
  let t = (0, F.c)(18),
    {
      gitRoot: n,
      hostConfig: r,
      currentBranch: i,
      remoteDefaultBranch: a,
      enabled: o,
    } = e,
    s;
  t[0] === o ? (s = t[1]) : ((s = { enabled: o }), (t[0] = o), (t[1] = s));
  let {
      data: c,
      isLoading: l,
      isFetching: u,
      error: d,
      refetch: f,
    } = he(n, r, `async_task_starting_state_dropdown`, s),
    p;
  t[2] === o ? (p = t[3]) : ((p = { enabled: o }), (t[2] = o), (t[3] = p));
  let {
      data: m,
      isLoading: ee,
      isFetching: te,
      error: ne,
      refetch: re,
    } = xe(n, r, `async_task_starting_state_dropdown`, p),
    h;
  if (t[4] !== i || t[5] !== c || t[6] !== m || t[7] !== a) {
    let e = [
        c,
        i,
        N({
          currentBranch: i,
          gitDefaultBranch: c,
          recentBranches: m,
          remoteDefaultBranch: a,
        }),
        ...(m ?? []),
      ],
      n = new Set();
    ((h = []),
      e.forEach((e) => {
        P({ branch: e, list: h, seen: n });
      }),
      (t[4] = i),
      (t[5] = c),
      (t[6] = m),
      (t[7] = a),
      (t[8] = h));
  } else h = t[8];
  let g = h[0] ?? i ?? a,
    _ = l || u || ee || te,
    v = d ?? ne,
    y;
  t[9] !== f || t[10] !== re
    ? ((y = async () => {
        await Promise.all([f(), re()]);
      }),
      (t[9] = f),
      (t[10] = re),
      (t[11] = y))
    : (y = t[11]);
  let b = y,
    x;
  return (
    t[12] !== h || t[13] !== g || t[14] !== v || t[15] !== _ || t[16] !== b
      ? ((x = {
          branches: h,
          defaultBranch: g,
          fetching: _,
          error: v,
          refetch: b,
        }),
        (t[12] = h),
        (t[13] = g),
        (t[14] = v),
        (t[15] = _),
        (t[16] = b),
        (t[17] = x))
      : (x = t[17]),
    x
  );
}
function ke(e) {
  let t = (0, F.c)(5),
    { className: n, children: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = y(
        `text-sm text-token-description-foreground px-[var(--padding-row-x)] py-1`,
        n,
      )),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, L.jsx)(`div`, { className: i, children: r })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function N({
  currentBranch: e,
  gitDefaultBranch: t,
  recentBranches: n,
  remoteDefaultBranch: r,
}) {
  return r && (r === e || r === t || n?.includes(r)) ? r : null;
}
function P({ branch: e, list: t, seen: n }) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
var F,
  I,
  L,
  R = e(() => {
    ((F = a()),
      g(),
      r(),
      (I = t(i(), 1)),
      le(),
      d(),
      Te(),
      u(),
      x(),
      f(),
      oe(),
      S(),
      be(),
      me(),
      fe(),
      Se(),
      A(),
      c(),
      _(),
      T(),
      E(),
      h(),
      ae(),
      D(),
      s(),
      (L = o()));
  });
function Ae(e) {
  let t = (0, V.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, H.jsx)(j, { ...e, renderStaticBranch: B, renderControl: z })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
function z(e) {
  let { currentBranch: t, disabled: n, isPending: r, switchTooltipText: i } = e;
  return t == null
    ? null
    : (0, H.jsx)(ce, {
        tooltipContent: i,
        children: (0, H.jsx)(_e, {
          categoryLabel: (0, H.jsx)(w, { ...U.branchCategory }),
          className: `px-0`,
          collapse: `sm`,
          disabled: n,
          icon: (0, H.jsx)(m, { className: `icon-xs` }),
          indicator: r ? `pending` : `collapsible-chevron`,
          value: t,
          valueClassName: `max-w-40 text-sm`,
        }),
      });
}
function B(e) {
  let { currentBranch: t } = e;
  return (0, H.jsx)(ce, {
    tooltipContent: t,
    children: (0, H.jsx)(O, {
      categoryLabel: (0, H.jsx)(w, { ...U.branchCategory }),
      className: `text-token-description-foreground`,
      collapse: `sm`,
      icon: (0, H.jsx)(m, { className: `icon-xs` }),
      value: t,
      valueClassName: `max-w-40 text-sm`,
    }),
  });
}
var V,
  H,
  U,
  je = e(() => {
    ((V = a()),
      le(),
      oe(),
      c(),
      k(),
      D(),
      (H = o()),
      (U = C({
        branchCategory: {
          id: `composer.footer.branchCategory`,
          defaultMessage: `Branch`,
          description: `Category label for the branch control in the composer footer`,
        },
      })));
  });
export { Ce as a, R as i, je as n, Te as o, Ee as r, Ae as t };
//# sourceMappingURL=composer-footer-branch-switcher-Cl5csgcW.js.map
