import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  D as r,
  E as i,
  Fs as a,
  Go as o,
  Ko as s,
  O as c,
  Vo as l,
  _c as u,
  c as d,
  cc as f,
  gc as p,
  h as m,
  lc as h,
  m as g,
  tr as _,
  tt as v,
  u as y,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  df as ee,
  lf as b,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Ca as x,
  Do as S,
  Em as C,
  Tm as te,
  Um as w,
  _a as T,
  _f as E,
  ba as D,
  dp as ne,
  eo as O,
  fp as k,
  gf as A,
  gp as j,
  mp as M,
  no as N,
  oo as P,
  va as re,
  wo as ie,
  ya as ae,
  zm as F,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  At as I,
  Gn as L,
  Iy as R,
  Jn as z,
  Ln as B,
  N as oe,
  Sr as V,
  Vy as se,
  Yn as H,
  ar as U,
  cr as W,
  or as G,
  qn as K,
  sr as ce,
  xr as q,
  zn as J,
  zy as Y,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  $l as X,
  Bl as le,
  Hl as ue,
  Ql as de,
  Rl as fe,
  Ul as pe,
  Vl as me,
  Yl as he,
  Zl as ge,
  al as _e,
  eu as ve,
  fl as ye,
  fu as be,
  il as xe,
  pl as Se,
  pu as Ce,
  zl as we,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
function Te({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) {
  return JSON.stringify({
    cwd: e ?? null,
    enabled: t,
    hostConfig: n,
    operationSource: r,
  });
}
function Ee({
  cwd: e,
  enabled: t,
  hostConfig: n,
  operationSource: r,
  query: i,
}) {
  return JSON.stringify({
    cwd: e ?? null,
    enabled: t,
    hostConfig: n,
    operationSource: r,
    query: i,
  });
}
var De,
  Oe,
  ke = e(() => {
    (l(),
      r(),
      m(),
      J(),
      W(),
      G(),
      (De = a(
        i,
        ({ cwd: e, enabled: t, hostConfig: n, operationSource: r }) =>
          ce(e, U(n), n, r, { enabled: t }),
        { key: Te },
      )),
      (Oe = a(
        i,
        (
          { cwd: e, enabled: t, hostConfig: n, operationSource: r, query: i },
          { get: a },
        ) => {
          let o = a(De, {
            cwd: e,
            enabled: t,
            hostConfig: n,
            operationSource: r,
          }).data;
          return B(
            `search-branches`,
            o,
            o == null
              ? null
              : { root: o.root, operationSource: r, query: i, limit: 20 },
            U(n),
            n,
            {
              enabled: t,
              select: (e) => e.branches,
              staleTime: g.FIVE_SECONDS,
            },
          );
        },
        { key: Ee },
      )));
  });
function Ae(e, t, n, r) {
  let i = (0, je.c)(13),
    a;
  i[0] === r
    ? (a = i[1])
    : ((a = r === void 0 ? {} : r), (i[0] = r), (i[1] = a));
  let o, s;
  i[2] === a
    ? ((o = i[3]), (s = i[4]))
    : (({ staleTime: s, ...o } = a), (i[2] = a), (i[3] = o), (i[4] = s));
  let c = String(e),
    l;
  i[5] === c ? (l = i[6]) : ((l = _(c)), (i[5] = c), (i[6] = l));
  let u;
  i[7] !== n || i[8] !== l
    ? ((u = { cwd: l, operationSource: n }), (i[7] = n), (i[8] = l), (i[9] = u))
    : (u = i[9]);
  let d = s ?? g.FIVE_SECONDS,
    f;
  return (
    i[10] !== o || i[11] !== d
      ? ((f = { staleTime: d, ...o }), (i[10] = o), (i[11] = d), (i[12] = f))
      : (f = i[12]),
    K(e, t, `status-summary`, u, n, f)
  );
}
var je,
  Me = e(() => {
    ((je = p()), c(), m(), J());
  });
function Ne(e, t, n, r) {
  let i = (0, Fe.c)(4),
    a;
  i[0] === n
    ? (a = i[1])
    : ((a = (e) => {
        let { root: t } = e;
        return { operationSource: n, root: t, limit: 100 };
      }),
      (i[0] = n),
      (i[1] = a));
  let o;
  return (
    i[2] === r
      ? (o = i[3])
      : ((o = { select: Pe, staleTime: g.FIVE_SECONDS, ...r }),
        (i[2] = r),
        (i[3] = o)),
    K(e, t, `recent-branches`, a, n, o)
  );
}
function Pe(e) {
  return e.branches;
}
var Fe,
  Ie = e(() => {
    ((Fe = p()), m(), J());
  });
function Le(e, t, n, r) {
  let i = (0, Re.c)(23),
    a = f(),
    { data: o } = H(e, t, n),
    s;
  i[0] === t ? (s = i[1]) : ((s = U(t)), (i[0] = t), (i[1] = s));
  let c = s,
    l = e ?? null,
    u;
  i[2] !== t.id || i[3] !== l
    ? ((u = [`vscode`, `git-checkout-branch`, l, t.id]),
      (i[2] = t.id),
      (i[3] = l),
      (i[4] = u))
    : (u = i[4]);
  let d;
  i[5] !== o || i[6] !== c || i[7] !== r || i[8] !== a
    ? ((d = async (e, t, n, i, s) => {
        (o &&
          e?.status === `success` &&
          L(
            a,
            { commonDir: o.commonDir, root: o.root },
            { changeType: `head`, hostKey: c },
          ),
          r?.onSettled && (await r.onSettled(e, t, n, i, s)));
      }),
      (i[5] = o),
      (i[6] = c),
      (i[7] = r),
      (i[8] = a),
      (i[9] = d))
    : (d = i[9]);
  let p;
  i[10] !== n || i[11] !== r || i[12] !== u || i[13] !== d
    ? ((p = { source: n, mutationKey: u, ...r, onSettled: d }),
      (i[10] = n),
      (i[11] = r),
      (i[12] = u),
      (i[13] = d),
      (i[14] = p))
    : (p = i[14]);
  let m = y(`git-checkout-branch`, p),
    h,
    g;
  i[15] !== t.id || i[16] !== m
    ? ((h = (e, n) => {
        m.mutate({ ...e, hostId: t.id }, n);
      }),
      (g = (e, n) => m.mutateAsync({ ...e, hostId: t.id }, n)),
      (i[15] = t.id),
      (i[16] = m),
      (i[17] = h),
      (i[18] = g))
    : ((h = i[17]), (g = i[18]));
  let _;
  return (
    i[19] !== m || i[20] !== h || i[21] !== g
      ? ((_ = { ...m, mutate: h, mutateAsync: g }),
        (i[19] = m),
        (i[20] = h),
        (i[21] = g),
        (i[22] = _))
      : (_ = i[22]),
    _
  );
}
var Re,
  ze = e(() => {
    ((Re = p()), n(), J(), G(), z(), d());
  });
function Be(e, t, n, r) {
  let i = (0, Ve.c)(23),
    a = f(),
    { data: o } = H(e, t, n),
    s;
  i[0] === t ? (s = i[1]) : ((s = U(t)), (i[0] = t), (i[1] = s));
  let c = s,
    l = e ?? null,
    u;
  i[2] !== t.id || i[3] !== l
    ? ((u = [`vscode`, `git-create-branch`, l, t.id]),
      (i[2] = t.id),
      (i[3] = l),
      (i[4] = u))
    : (u = i[4]);
  let d;
  i[5] !== o || i[6] !== c || i[7] !== r || i[8] !== a
    ? ((d = async (e, t, n, i, s) => {
        (o &&
          L(a, o, {
            changeType: n?.mode === `synced` ? `synced-branch` : `head`,
            hostKey: c,
          }),
          r?.onSettled && (await r.onSettled(e, t, n, i, s)));
      }),
      (i[5] = o),
      (i[6] = c),
      (i[7] = r),
      (i[8] = a),
      (i[9] = d))
    : (d = i[9]);
  let p;
  i[10] !== n || i[11] !== r || i[12] !== u || i[13] !== d
    ? ((p = { source: n, mutationKey: u, ...r, onSettled: d }),
      (i[10] = n),
      (i[11] = r),
      (i[12] = u),
      (i[13] = d),
      (i[14] = p))
    : (p = i[14]);
  let m = y(`git-create-branch`, p),
    h,
    g;
  i[15] !== t.id || i[16] !== m
    ? ((h = (e, n) => {
        m.mutate({ ...e, hostId: t.id }, n);
      }),
      (g = (e, n) => m.mutateAsync({ ...e, hostId: t.id }, n)),
      (i[15] = t.id),
      (i[16] = m),
      (i[17] = h),
      (i[18] = g))
    : ((h = i[17]), (g = i[18]));
  let _;
  return (
    i[19] !== m || i[20] !== h || i[21] !== g
      ? ((_ = { ...m, mutate: h, mutateAsync: g }),
        (i[19] = m),
        (i[20] = h),
        (i[21] = g),
        (i[22] = _))
      : (_ = i[22]),
    _
  );
}
var Ve,
  He = e(() => {
    ((Ve = p()), n(), J(), G(), z(), d());
  });
function Ue(e) {
  return Array.from(e)
    .filter((e) => !/\s/u.test(e) && !We.has(e))
    .join(``);
}
var We,
  Ge = e(() => {
    We = new Set([`~`, `^`, `:`, `?`, `*`, `[`, `]`, `\\`]);
  });
function Ke(e) {
  let t = (0, et.c)(86),
    {
      gitRoot: n,
      hostConfig: r,
      localConversationId: a,
      shouldShow: c,
      side: l,
      align: u,
      renderStaticBranch: d,
      renderControl: f,
      onOpenChange: p,
    } = e,
    m = l === void 0 ? `top` : l,
    h = u === void 0 ? `end` : u,
    g = s(i),
    v = se(),
    [y, ee] = (0, Z.useState)(!1),
    [x, S] = (0, Z.useState)(!1),
    [C, te] = (0, Z.useState)(!1),
    [w, T] = (0, Z.useState)(!1),
    [E, D] = (0, Z.useState)(!1),
    [ne, k] = (0, Z.useState)(0),
    [A, M] = (0, Z.useState)(null),
    N;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = []), (t[0] = N))
    : (N = t[0]);
  let [P, re] = (0, Z.useState)(N),
    [ie, ae] = (0, Z.useState)(`idle`),
    F;
  t[1] !== n || t[2] !== r || t[3] !== c
    ? ((F = {
        cwd: n,
        enabled: c,
        hostConfig: r,
        operationSource: $,
        refetchOnWindowFocus: `always`,
        staleTime: null,
      }),
      (t[1] = n),
      (t[2] = r),
      (t[3] = c),
      (t[4] = F))
    : (F = t[4]);
  let L = o(b, F),
    R = L.data?.trim() ?? ``,
    z = c && R.length > 0,
    B = o(I, a),
    oe = E || ie !== `idle`,
    H = Le(n, r, $),
    U = Be(n, r, $),
    W;
  t[5] === n
    ? (W = t[6])
    : ((W = n == null ? null : _(n)), (t[5] = n), (t[6] = W));
  let G = W,
    K;
  t[7] !== G || t[8] !== r
    ? ((K = G == null ? null : { cwd: G, hostId: r.id }),
      (t[7] = G),
      (t[8] = r),
      (t[9] = K))
    : (K = t[9]);
  let ce = K,
    q = H.isPending || U.isPending,
    J = v.formatMessage({
      id: `composer.footer.branchSwitch.tooltip`,
      defaultMessage: `Switch branch`,
      description: `Tooltip shown for controls that switch git branches`,
    }),
    Y;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Y = () => {
        ee(!1);
      }),
      (t[10] = Y))
    : (Y = t[10]);
  let X = Y,
    ue;
  t[11] !== v || t[12] !== g
    ? ((ue = (e) => {
        g.get(j).danger(
          v.formatMessage(
            {
              id: `composer.footer.branchSwitch.checkoutError`,
              defaultMessage: `Failed to switch branch: {message}`,
              description: `Toast shown when switching local branches from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[11] = v),
      (t[12] = g),
      (t[13] = ue))
    : (ue = t[13]);
  let de = ue,
    fe;
  t[14] !== v || t[15] !== g
    ? ((fe = (e) => {
        g.get(j).danger(
          v.formatMessage(
            {
              id: `composer.footer.branchSwitch.createBranchError`,
              defaultMessage: `Failed to create branch: {message}`,
              description: `Toast shown when creating a branch from the composer footer fails`,
            },
            { message: e },
          ),
        );
      }),
      (t[14] = v),
      (t[15] = g),
      (t[16] = fe))
    : (fe = t[16]);
  let pe = fe,
    me;
  t[17] === X
    ? (me = t[18])
    : ((me = (e) => {
        let { errorType: t, conflictedPaths: n, nextAction: r } = e;
        return t === `blocked-by-working-tree-changes`
          ? (re(n ?? []), M(r), X(), T(!1), te(!0), !0)
          : !1;
      }),
      (t[17] = X),
      (t[18] = me));
  let ge = me,
    _e = async (e) => {
      if (!(q || n == null)) {
        if (e === R) {
          X();
          return;
        }
        try {
          let t = await H.mutateAsync({ cwd: n, branch: e });
          if (t.status === `error`) {
            if (
              ge({
                errorType: t.errorType,
                conflictedPaths: t.conflictedPaths,
                nextAction: { type: `checkout`, branch: e },
              })
            )
              return;
            de(t.error);
            return;
          }
          (a != null && V(a, e), X());
        } catch (e) {
          let t = e;
          de(t instanceof Error ? t.message : String(t));
        }
      }
    },
    ve;
  t[19] !== H ||
  t[20] !== U ||
  t[21] !== n ||
  t[22] !== q ||
  t[23] !== a ||
  t[24] !== ge ||
  t[25] !== de ||
  t[26] !== pe
    ? ((ve = async (e) => {
        if (!(q || n == null))
          try {
            let t = await U.mutateAsync({
              cwd: n,
              branch: e,
              mode: `worktree`,
              failIfExists: !0,
            });
            if (t.status === `error`) {
              pe(t.error);
              return;
            }
            let r = await H.mutateAsync({ cwd: n, branch: e });
            if (r.status === `error`) {
              if (
                ge({
                  errorType: r.errorType,
                  conflictedPaths: r.conflictedPaths,
                  nextAction: { type: `create-and-checkout`, branch: e },
                })
              )
                return;
              (de(r.error), T(!1));
              return;
            }
            (a != null && V(a, e), T(!1));
          } catch (e) {
            let t = e;
            pe(t instanceof Error ? t.message : String(t));
          }
      }),
      (t[19] = H),
      (t[20] = U),
      (t[21] = n),
      (t[22] = q),
      (t[23] = a),
      (t[24] = ge),
      (t[25] = de),
      (t[26] = pe),
      (t[27] = ve))
    : (ve = t[27]);
  let ye = ve,
    be;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = () => {
        (D(!1), ae(`idle`), re([]), M(null));
      }),
      (t[28] = be))
    : (be = t[28]);
  let xe = be,
    Se;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Se = (e) => {
        (te(e), e || (re([]), M(null)));
      }),
      (t[29] = Se))
    : (Se = t[29]);
  let Ce = Se,
    we;
  t[30] !== ce || t[31] !== g
    ? ((we = () => {
        ce != null && (g.set(he, ce, ``), ae(`idle`), k(qe), te(!1), D(!0));
      }),
      (t[30] = ce),
      (t[31] = g),
      (t[32] = we))
    : (we = t[32]);
  let Te = we,
    Ee;
  t[33] !== _e || t[34] !== ye || t[35] !== xe || t[36] !== A
    ? ((Ee = (e) => {
        if (e === `success` && A != null) {
          let e = A;
          if ((xe(), e.type === `checkout`)) {
            _e(e.branch);
            return;
          }
          ye(e.branch);
          return;
        }
        ae(e);
      }),
      (t[33] = _e),
      (t[34] = ye),
      (t[35] = xe),
      (t[36] = A),
      (t[37] = Ee))
    : (Ee = t[37]);
  let De = Ee;
  if (!z)
    return c && L.isSuccess
      ? f({
          currentBranch: null,
          disabled: !1,
          isPending: !1,
          switchTooltipText: J,
        })
      : null;
  if (n == null) return d?.({ currentBranch: R }) ?? null;
  let Oe = O,
    ke;
  t[38] === p
    ? (ke = t[39])
    : ((ke = (e) => {
        (e && S(!0), ee(e), p?.(e));
      }),
      (t[38] = p),
      (t[39] = ke));
  let Ae = f({
      currentBranch: R,
      disabled: q,
      isPending: q,
      switchTooltipText: J,
    }),
    je;
  t[40] !== _e ||
  t[41] !== X ||
  t[42] !== R ||
  t[43] !== n ||
  t[44] !== x ||
  t[45] !== r ||
  t[46] !== q ||
  t[47] !== y
    ? ((je = x
        ? (0, Q.jsx)(Je, {
            currentBranch: R,
            gitRoot: n,
            hostConfig: r,
            isOpen: y,
            disabled: q,
            onCheckout: _e,
            onClose: X,
            onOpenCreate: () => {
              (X(), T(!0));
            },
          })
        : null),
      (t[40] = _e),
      (t[41] = X),
      (t[42] = R),
      (t[43] = n),
      (t[44] = x),
      (t[45] = r),
      (t[46] = q),
      (t[47] = y),
      (t[48] = je))
    : (je = t[48]);
  let Me;
  t[49] !== Oe ||
  t[50] !== h ||
  t[51] !== y ||
  t[52] !== m ||
  t[53] !== ke ||
  t[54] !== Ae ||
  t[55] !== je
    ? ((Me = (0, Q.jsx)(Oe, {
        side: m,
        open: y,
        align: h,
        onOpenChange: ke,
        triggerButton: Ae,
        children: je,
      })),
      (t[49] = Oe),
      (t[50] = h),
      (t[51] = y),
      (t[52] = m),
      (t[53] = ke),
      (t[54] = Ae),
      (t[55] = je),
      (t[56] = Me))
    : (Me = t[56]);
  let Ne;
  t[57] !== B ||
  t[58] !== ye ||
  t[59] !== n ||
  t[60] !== r ||
  t[61] !== w ||
  t[62] !== q
    ? ((Ne = w
        ? (0, Q.jsx)(Ye, {
            open: w,
            onOpenChange: T,
            conversationTitle: B,
            gitRoot: n,
            hostConfig: r,
            isPending: q,
            onSubmit: ye,
          })
        : null),
      (t[57] = B),
      (t[58] = ye),
      (t[59] = n),
      (t[60] = r),
      (t[61] = w),
      (t[62] = q),
      (t[63] = Ne))
    : (Ne = t[63]);
  let Pe;
  t[64] !== P ||
  t[65] !== n ||
  t[66] !== Te ||
  t[67] !== Ce ||
  t[68] !== r ||
  t[69] !== C ||
  t[70] !== A?.branch
    ? ((Pe =
        C && n != null
          ? (0, Q.jsx)(Xe, {
              open: C,
              onOpenChange: Ce,
              conflictFiles: P,
              gitRoot: n,
              hostConfig: r,
              targetBranch: A?.branch ?? null,
              onContinue: Te,
            })
          : null),
      (t[64] = P),
      (t[65] = n),
      (t[66] = Te),
      (t[67] = Ce),
      (t[68] = r),
      (t[69] = C),
      (t[70] = A?.branch),
      (t[71] = Pe))
    : (Pe = t[71]);
  let Fe;
  t[72] !== ne ||
  t[73] !== G ||
  t[74] !== xe ||
  t[75] !== De ||
  t[76] !== r ||
  t[77] !== oe ||
  t[78] !== E ||
  t[79] !== a
    ? ((Fe =
        oe && G != null
          ? (0, Q.jsx)(
              le,
              {
                open: E,
                onOpenChange: D,
                conversationId: a,
                cwd: G,
                hostConfig: r,
                onStatusChange: De,
                onRequestReset: xe,
              },
              ne,
            )
          : null),
      (t[72] = ne),
      (t[73] = G),
      (t[74] = xe),
      (t[75] = De),
      (t[76] = r),
      (t[77] = oe),
      (t[78] = E),
      (t[79] = a),
      (t[80] = Fe))
    : (Fe = t[80]);
  let Ie;
  return (
    t[81] !== Me || t[82] !== Ne || t[83] !== Pe || t[84] !== Fe
      ? ((Ie = (0, Q.jsxs)(Q.Fragment, { children: [Me, Ne, Pe, Fe] })),
        (t[81] = Me),
        (t[82] = Ne),
        (t[83] = Pe),
        (t[84] = Fe),
        (t[85] = Ie))
      : (Ie = t[85]),
    Ie
  );
}
function qe(e) {
  return e + 1;
}
function Je(e) {
  let t = (0, et.c)(53),
    {
      currentBranch: n,
      gitRoot: r,
      hostConfig: i,
      isOpen: a,
      disabled: s,
      onCheckout: c,
      onClose: l,
      onOpenCreate: u,
    } = e,
    d = se(),
    [f, p] = (0, Z.useState)(``),
    m = E(f, 200),
    { data: h, refetch: g } = Ae(r, i, $),
    _;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = { enabled: !0 }), (t[0] = _))
    : (_ = t[0]);
  let {
      data: v,
      isLoading: y,
      isFetching: ee,
      isError: b,
      refetch: x,
    } = Ne(r, i, $, _),
    S = v === void 0 ? [] : v,
    C;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = { enabled: !0 }), (t[1] = C))
    : (C = t[1]);
  let { data: te, refetch: w } = we(r, i, $, C),
    T,
    D;
  (t[2] !== a || t[3] !== x || t[4] !== w || t[5] !== g
    ? ((T = () => {
        a && Promise.all([x(), w(), g()]);
      }),
      (D = [a, x, w, g]),
      (t[2] = a),
      (t[3] = x),
      (t[4] = w),
      (t[5] = g),
      (t[6] = T),
      (t[7] = D))
    : ((T = t[6]), (D = t[7])),
    (0, Z.useEffect)(T, D));
  let O;
  t[8] === f ? (O = t[9]) : ((O = f.trim()), (t[8] = f), (t[9] = O));
  let k = O,
    A;
  t[10] === m ? (A = t[11]) : ((A = m.trim()), (t[10] = m), (t[11] = A));
  let j = A,
    M = k !== j,
    P = j.length > 0,
    re;
  t[12] !== r || t[13] !== i || t[14] !== j || t[15] !== P
    ? ((re = {
        cwd: r,
        hostConfig: i,
        operationSource: $,
        query: j,
        enabled: P,
      }),
      (t[12] = r),
      (t[13] = i),
      (t[14] = j),
      (t[15] = P),
      (t[16] = re))
    : (re = t[16]);
  let { data: ie, isFetching: ae, isError: F, refetch: I } = o(Oe, re),
    L = Ze({ branches: S, currentBranch: n, defaultBranch: te }),
    R = !y && !ee && !b && S.length === 0,
    z = $e(h),
    B;
  t[17] !== R || t[18] !== d
    ? ((B = R
        ? d.formatMessage({
            id: `composer.footer.branchSwitch.createAndCheckout.disabledTooltip`,
            defaultMessage: `Commit changes to create and checkout a new branch`,
            description: `Tooltip shown when create-and-checkout branch action is disabled because the repository has no commits`,
          })
        : void 0),
      (t[17] = R),
      (t[18] = d),
      (t[19] = B))
    : (B = t[19]);
  let oe = B,
    V = y || (ee && L.length === 0),
    H = M || ae,
    U;
  t[20] === x
    ? (U = t[21])
    : ((U = () => {
        x();
      }),
      (t[20] = x),
      (t[21] = U));
  let W;
  t[22] === I
    ? (W = t[23])
    : ((W = () => {
        I();
      }),
      (t[22] = I),
      (t[23] = W));
  let G;
  t[24] !== n || t[25] !== z
    ? ((G = (e) =>
        e === n && z > 0
          ? (0, Q.jsx)(`span`, {
              className: `inline-flex items-center gap-1 text-xs text-token-input-placeholder-foreground`,
              children: (0, Q.jsx)(Y, {
                id: `composer.footer.branchSwitch.uncommittedSummaryPrefix`,
                defaultMessage: `Uncommitted: {fileCount, plural, one {# file} other {# files}}`,
                description: `Prefix shown under the active branch in the branch dropdown when there are uncommitted tracked changes`,
                values: { fileCount: z },
              }),
            })
          : null),
      (t[24] = n),
      (t[25] = z),
      (t[26] = G))
    : (G = t[26]);
  let K;
  t[27] !== n ||
  t[28] !== s ||
  t[29] !== b ||
  t[30] !== F ||
  t[31] !== c ||
  t[32] !== l ||
  t[33] !== L ||
  t[34] !== f ||
  t[35] !== ie ||
  t[36] !== V ||
  t[37] !== H ||
  t[38] !== U ||
  t[39] !== W ||
  t[40] !== G
    ? ((K = (0, Q.jsx)(xe, {
        branches: L,
        selectedBranch: n,
        disabled: s,
        isError: b,
        isLoading: V,
        isSearchError: F,
        isSearchLoading: H,
        onClose: l,
        onRetry: U,
        onRetrySearch: W,
        onSearchQueryChange: p,
        onSelectBranch: c,
        renderBranchSubText: G,
        searchedBranches: ie,
        searchQuery: f,
      })),
      (t[27] = n),
      (t[28] = s),
      (t[29] = b),
      (t[30] = F),
      (t[31] = c),
      (t[32] = l),
      (t[33] = L),
      (t[34] = f),
      (t[35] = ie),
      (t[36] = V),
      (t[37] = H),
      (t[38] = U),
      (t[39] = W),
      (t[40] = G),
      (t[41] = K))
    : (K = t[41]);
  let ce;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ce = (0, Q.jsx)(N.Separator, {})), (t[42] = ce))
    : (ce = t[42]);
  let q = R || s,
    J;
  t[43] === u
    ? (J = t[44])
    : ((J = (e) => {
        (e.preventDefault(), u());
      }),
      (t[43] = u),
      (t[44] = J));
  let X;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((X = (0, Q.jsx)(Y, {
        id: `composer.footer.branchSwitch.createAndCheckout`,
        defaultMessage: `Create and checkout new branch…`,
        description: `Dropdown action label in the composer footer branch switcher to create and checkout a new branch`,
      })),
      (t[45] = X))
    : (X = t[45]);
  let le;
  t[46] !== oe || t[47] !== q || t[48] !== J
    ? ((le = (0, Q.jsx)(N.Item, {
        LeftIcon: ne,
        disabled: q,
        tooltipText: oe,
        onSelect: J,
        children: X,
      })),
      (t[46] = oe),
      (t[47] = q),
      (t[48] = J),
      (t[49] = le))
    : (le = t[49]);
  let ue;
  return (
    t[50] !== K || t[51] !== le
      ? ((ue = (0, Q.jsxs)(Q.Fragment, { children: [K, ce, le] })),
        (t[50] = K),
        (t[51] = le),
        (t[52] = ue))
      : (ue = t[52]),
    ue
  );
}
function Ye(e) {
  let t = (0, et.c)(57),
    {
      open: n,
      onOpenChange: r,
      conversationTitle: i,
      gitRoot: a,
      hostConfig: o,
      isPending: s,
      onSubmit: c,
    } = e,
    l = se(),
    u = w(v.branchPrefix),
    d;
  t[0] !== u || t[1] !== i
    ? ((d = ue({ branchPrefix: u, conversationTitle: i })),
      (t[0] = u),
      (t[1] = i),
      (t[2] = d))
    : (d = t[2]);
  let [f, p] = (0, Z.useState)(d),
    m = n && a != null,
    h;
  t[3] === m ? (h = t[4]) : ((h = { enabled: m }), (t[3] = m), (t[4] = h));
  let { data: g, isLoading: _, isFetching: y, isError: ee } = Ne(a, o, $, h),
    b,
    x,
    S,
    C;
  if (t[5] !== f || t[6] !== g) {
    b = g === void 0 ? [] : g;
    let e = Ze({ branches: b, currentBranch: ``, defaultBranch: null });
    ((C = f.trim()),
      (x = C.endsWith(`/`)),
      (S = C.length > 0 && e.includes(C)),
      (t[5] = f),
      (t[6] = g),
      (t[7] = b),
      (t[8] = x),
      (t[9] = S),
      (t[10] = C));
  } else ((b = t[7]), (x = t[8]), (S = t[9]), (C = t[10]));
  let E = S,
    ne = !_ && !y && !ee && b.length === 0,
    O = !s && !_ && !y && !ne && C.length > 0 && !x && !E && a != null,
    k;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, Q.jsx)(D, {
        children: (0, Q.jsx)(ae, {
          title: (0, Q.jsx)(Y, {
            id: `composer.footer.branchSwitch.createDialog.title`,
            defaultMessage: `Create and checkout branch`,
            description: `Title for dialog that creates and checks out a new branch from the composer footer`,
          }),
        }),
      })),
      (t[11] = k))
    : (k = t[11]);
  let A;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Q.jsx)(ye, {})), (t[12] = A))
    : (A = t[12]);
  let j;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (e) => {
        p(Ue(e.target.value));
      }),
      (t[13] = j))
    : (j = t[13]);
  let M;
  t[14] !== O || t[15] !== c || t[16] !== C
    ? ((M = (e) => {
        if (e.key === `Enter`) {
          if ((e.preventDefault(), !O)) return;
          c(C);
        }
      }),
      (t[14] = O),
      (t[15] = c),
      (t[16] = C),
      (t[17] = M))
    : (M = t[17]);
  let N;
  t[18] === l
    ? (N = t[19])
    : ((N = l.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.placeholder`,
        defaultMessage: `new-branch`,
        description: `Placeholder for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[18] = l),
      (t[19] = N));
  let P;
  t[20] === l
    ? (P = t[21])
    : ((P = l.formatMessage({
        id: `composer.footer.branchSwitch.createDialog.ariaLabel`,
        defaultMessage: `Branch name`,
        description: `Aria label for branch name input in the composer footer create-and-checkout dialog`,
      })),
      (t[20] = l),
      (t[21] = P));
  let F;
  t[22] !== f || t[23] !== N || t[24] !== P || t[25] !== M
    ? ((F = (0, Q.jsx)(`input`, {
        autoFocus: !0,
        className: `h-10 w-full rounded-xl border border-token-border bg-token-dropdown-background px-3 text-sm text-token-foreground outline-none placeholder:text-token-description-foreground`,
        value: f,
        onChange: j,
        onKeyDown: M,
        placeholder: N,
        "aria-label": P,
      })),
      (t[22] = f),
      (t[23] = N),
      (t[24] = P),
      (t[25] = M),
      (t[26] = F))
    : (F = t[26]);
  let I;
  t[27] !== E || t[28] !== x || t[29] !== s
    ? ((I = x
        ? (0, Q.jsx)(`p`, {
            className: `text-xs text-token-error-foreground`,
            children: (0, Q.jsx)(Y, {
              id: `composer.footer.branchSwitch.createDialog.trailingSlashError`,
              defaultMessage: `Branch name cannot end with “/”.`,
              description: `Validation message shown in the create-and-checkout branch dialog when branch name ends with a slash`,
            }),
          })
        : E && !s
          ? (0, Q.jsx)(`p`, {
              className: `text-xs text-token-error-foreground`,
              children: (0, Q.jsx)(Y, {
                id: `composer.footer.branchSwitch.createDialog.branchExistsError`,
                defaultMessage: `Branch already exists.`,
                description: `Validation message shown in the create-and-checkout branch dialog when the entered branch already exists`,
              }),
            })
          : null),
      (t[27] = E),
      (t[28] = x),
      (t[29] = s),
      (t[30] = I))
    : (I = t[30]);
  let L;
  t[31] !== F || t[32] !== I
    ? ((L = (0, Q.jsxs)(D, {
        className: `flex flex-col gap-2`,
        children: [A, F, I],
      })),
      (t[31] = F),
      (t[32] = I),
      (t[33] = L))
    : (L = t[33]);
  let R;
  t[34] === r
    ? (R = t[35])
    : ((R = () => {
        r(!1);
      }),
      (t[34] = r),
      (t[35] = R));
  let z;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Q.jsx)(Y, {
        id: `composer.footer.branchSwitch.createDialog.close`,
        defaultMessage: `Close`,
        description: `Secondary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[36] = z))
    : (z = t[36]);
  let B;
  t[37] === R
    ? (B = t[38])
    : ((B = (0, Q.jsx)(te, { color: `secondary`, onClick: R, children: z })),
      (t[37] = R),
      (t[38] = B));
  let oe = !O,
    V;
  t[39] !== c || t[40] !== C
    ? ((V = () => {
        c(C);
      }),
      (t[39] = c),
      (t[40] = C),
      (t[41] = V))
    : (V = t[41]);
  let H;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (0, Q.jsx)(Y, {
        id: `composer.footer.branchSwitch.createDialog.createAndCheckout`,
        defaultMessage: `Create and checkout`,
        description: `Primary button label in create-and-checkout branch dialog shown from the composer footer`,
      })),
      (t[42] = H))
    : (H = t[42]);
  let U;
  t[43] !== s || t[44] !== oe || t[45] !== V
    ? ((U = (0, Q.jsx)(te, {
        color: `primary`,
        disabled: oe,
        loading: s,
        onClick: V,
        children: H,
      })),
      (t[43] = s),
      (t[44] = oe),
      (t[45] = V),
      (t[46] = U))
    : (U = t[46]);
  let W;
  t[47] !== B || t[48] !== U
    ? ((W = (0, Q.jsx)(D, { children: (0, Q.jsxs)(re, { children: [B, U] }) })),
      (t[47] = B),
      (t[48] = U),
      (t[49] = W))
    : (W = t[49]);
  let G;
  t[50] !== L || t[51] !== W
    ? ((G = (0, Q.jsxs)(T, {
        "data-codex-branch-create-dialog": ``,
        children: [k, L, W],
      })),
      (t[50] = L),
      (t[51] = W),
      (t[52] = G))
    : (G = t[52]);
  let K;
  return (
    t[53] !== r || t[54] !== n || t[55] !== G
      ? ((K = (0, Q.jsx)(ie, {
          size: `feature`,
          open: n,
          onOpenChange: r,
          children: G,
        })),
        (t[53] = r),
        (t[54] = n),
        (t[55] = G),
        (t[56] = K))
      : (K = t[56]),
    K
  );
}
function Xe(e) {
  let t = (0, et.c)(61),
    {
      open: n,
      onOpenChange: r,
      conflictFiles: i,
      gitRoot: a,
      hostConfig: o,
      targetBranch: s,
      onContinue: c,
    } = e,
    l = se(),
    { data: u } = Ae(a, o, $),
    d;
  t[0] === a ? (d = t[1]) : ((d = _(a)), (t[0] = a), (t[1] = d));
  let f;
  t[2] === d
    ? (f = t[3])
    : ((f = {
        cwd: d,
        includeUntrackedFiles: !1,
        operationSource: $,
        source: `staged`,
      }),
      (t[2] = d),
      (t[3] = f));
  let p;
  t[4] === n
    ? (p = t[5])
    : ((p = { enabled: n, staleTime: g.FIVE_SECONDS }), (t[4] = n), (t[5] = p));
  let { data: m } = K(a, o, `review-summary`, f, $, p),
    h;
  t[6] === a ? (h = t[7]) : ((h = _(a)), (t[6] = a), (t[7] = h));
  let v;
  t[8] === h
    ? (v = t[9])
    : ((v = { cwd: h, operationSource: $, source: `unstaged` }),
      (t[8] = h),
      (t[9] = v));
  let y;
  t[10] === n
    ? (y = t[11])
    : ((y = { enabled: n, staleTime: g.FIVE_SECONDS }),
      (t[10] = n),
      (t[11] = y));
  let { data: ee } = K(a, o, `review-summary`, v, $, y),
    b,
    x,
    S,
    C,
    w,
    E,
    ne,
    O,
    k;
  if (
    t[12] !== i ||
    t[13] !== l ||
    t[14] !== r ||
    t[15] !== n ||
    t[16] !== m ||
    t[17] !== u ||
    t[18] !== s ||
    t[19] !== ee
  ) {
    let e = [m, ee],
      a = X(e),
      o = a?.totalAdditions ?? 0,
      c = a?.totalDeletions ?? 0,
      d = o + c > 0,
      f = i.length > 0,
      p;
    t[29] === u ? (p = t[30]) : ((p = $e(u)), (t[29] = u), (t[30] = p));
    let h = p,
      g;
    t[31] !== l || t[32] !== s
      ? ((g =
          s ??
          l.formatMessage({
            id: `composer.footer.branchSwitch.uncommittedDialog.targetBranchFallback`,
            defaultMessage: `the selected branch`,
            description: `Fallback branch label in the uncommitted changes dialog when the target branch name is unavailable`,
          })),
        (t[31] = l),
        (t[32] = s),
        (t[33] = g))
      : (g = t[33]);
    let _ = g;
    ((S = ie),
      (C = `feature`),
      (w = n),
      (E = r),
      (x = T),
      t[34] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((k = (0, Q.jsx)(D, {
            children: (0, Q.jsx)(ae, {
              title: (0, Q.jsx)(Y, {
                id: `composer.footer.branchSwitch.uncommittedDialog.title`,
                defaultMessage: `Commit changes to switch branch`,
                description: `Title for dialog shown when branch switching is blocked by uncommitted changes`,
              }),
            }),
          })),
          (t[34] = k))
        : (k = t[34]),
      (b = D),
      (ne = `text-token-description-foreground`),
      (O = f
        ? (0, Q.jsxs)(`div`, {
            className: `flex flex-col gap-2 text-sm`,
            children: [
              (0, Q.jsx)(Y, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodyPrefix`,
                defaultMessage: `Your changes to the following files would be overwritten by checkout:`,
                description: `Message shown in the uncommitted changes dialog before listing files that block checkout`,
              }),
              (0, Q.jsx)(`div`, {
                className: `flex flex-col gap-1`,
                children: i.map((t, n) => {
                  let r = de(t, e);
                  return (0, Q.jsxs)(
                    `div`,
                    {
                      className: `inline-flex items-center gap-1 text-token-foreground`,
                      children: [
                        (0, Q.jsx)(`span`, { children: t }),
                        r == null
                          ? null
                          : (0, Q.jsx)(be, {
                              className: `inline-flex align-middle`,
                              linesAdded: r.linesAdded,
                              linesRemoved: r.linesRemoved,
                            }),
                      ],
                    },
                    `${t}:${n}`,
                  );
                }),
              }),
              (0, Q.jsx)(Y, {
                id: `composer.footer.branchSwitch.uncommittedDialog.conflict.bodySuffix`,
                defaultMessage: `Please commit your changes to continue`,
                description: `Message shown in the uncommitted changes dialog after listing files that block checkout`,
              }),
            ],
          })
        : d
          ? (0, Q.jsxs)(`span`, {
              className: `inline-flex items-center gap-1 whitespace-nowrap`,
              children: [
                (0, Q.jsx)(Y, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodyPrefix.withDiff`,
                  defaultMessage: `Commit`,
                  description: `Body prefix in the uncommitted changes dialog before diff stats`,
                }),
                (0, Q.jsx)(be, {
                  className: `inline-flex align-middle`,
                  linesAdded: o,
                  linesRemoved: c,
                }),
                (0, Q.jsx)(Y, {
                  id: `composer.footer.branchSwitch.uncommittedDialog.bodySuffix.withDiff`,
                  defaultMessage: `changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
                  description: `Body suffix in the uncommitted changes dialog after diff stats, including file count and target branch`,
                  values: { fileCount: h, branchName: _ },
                }),
              ],
            })
          : (0, Q.jsx)(Y, {
              id: `composer.footer.branchSwitch.uncommittedDialog.body.noDiff`,
              defaultMessage: `Commit changes in {fileCount, plural, one {# file} other {# files}} to check out {branchName}.`,
              description: `Body text in the uncommitted changes dialog when diff stats are unavailable`,
              values: { fileCount: h, branchName: _ },
            })),
      (t[12] = i),
      (t[13] = l),
      (t[14] = r),
      (t[15] = n),
      (t[16] = m),
      (t[17] = u),
      (t[18] = s),
      (t[19] = ee),
      (t[20] = b),
      (t[21] = x),
      (t[22] = S),
      (t[23] = C),
      (t[24] = w),
      (t[25] = E),
      (t[26] = ne),
      (t[27] = O),
      (t[28] = k));
  } else
    ((b = t[20]),
      (x = t[21]),
      (S = t[22]),
      (C = t[23]),
      (w = t[24]),
      (E = t[25]),
      (ne = t[26]),
      (O = t[27]),
      (k = t[28]));
  let A;
  t[35] !== b || t[36] !== ne || t[37] !== O
    ? ((A = (0, Q.jsx)(b, { className: ne, children: O })),
      (t[35] = b),
      (t[36] = ne),
      (t[37] = O),
      (t[38] = A))
    : (A = t[38]);
  let j;
  t[39] === r
    ? (j = t[40])
    : ((j = () => {
        r(!1);
      }),
      (t[39] = r),
      (t[40] = j));
  let M;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, Q.jsx)(Y, {
        id: `composer.footer.branchSwitch.uncommittedDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Secondary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[41] = M))
    : (M = t[41]);
  let N;
  t[42] === j
    ? (N = t[43])
    : ((N = (0, Q.jsx)(te, { color: `secondary`, onClick: j, children: M })),
      (t[42] = j),
      (t[43] = N));
  let P;
  t[44] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(Y, {
        id: `composer.footer.branchSwitch.uncommittedDialog.commit`,
        defaultMessage: `Commit and switch branch…`,
        description: `Primary button label in branch switching blocked dialog shown in the composer footer`,
      })),
      (t[44] = P))
    : (P = t[44]);
  let F;
  t[45] === c
    ? (F = t[46])
    : ((F = (0, Q.jsx)(te, { color: `primary`, onClick: c, children: P })),
      (t[45] = c),
      (t[46] = F));
  let I;
  t[47] !== N || t[48] !== F
    ? ((I = (0, Q.jsx)(D, { children: (0, Q.jsxs)(re, { children: [N, F] }) })),
      (t[47] = N),
      (t[48] = F),
      (t[49] = I))
    : (I = t[49]);
  let L;
  t[50] !== x || t[51] !== A || t[52] !== I || t[53] !== k
    ? ((L = (0, Q.jsxs)(x, { children: [k, A, I] })),
      (t[50] = x),
      (t[51] = A),
      (t[52] = I),
      (t[53] = k),
      (t[54] = L))
    : (L = t[54]);
  let R;
  return (
    t[55] !== S || t[56] !== C || t[57] !== w || t[58] !== E || t[59] !== L
      ? ((R = (0, Q.jsx)(S, {
          size: C,
          open: w,
          onOpenChange: E,
          children: L,
        })),
        (t[55] = S),
        (t[56] = C),
        (t[57] = w),
        (t[58] = E),
        (t[59] = L),
        (t[60] = R))
      : (R = t[60]),
    R
  );
}
function Ze({ branches: e, currentBranch: t, defaultBranch: n }) {
  let r = new Set(),
    i = [];
  return (
    Qe(n, i, r),
    Qe(t, i, r),
    e.forEach((e) => {
      Qe(e, i, r);
    }),
    i
  );
}
function Qe(e, t, n) {
  !e || n.has(e) || (n.add(e), t.push(e));
}
function $e(e) {
  return e?.type === `success`
    ? Math.max(e.stagedCount, e.unstagedCount) + e.untrackedCount
    : 0;
}
var et,
  Z,
  Q,
  $,
  tt = e(() => {
    ((et = p()),
      l(),
      c(),
      (Z = t(u(), 1)),
      R(),
      oe(),
      q(),
      C(),
      S(),
      x(),
      P(),
      _e(),
      M(),
      Ce(),
      J(),
      ke(),
      ee(),
      Ie(),
      fe(),
      Me(),
      ze(),
      He(),
      k(),
      me(),
      ge(),
      Se(),
      pe(),
      r(),
      F(),
      m(),
      A(),
      ve(),
      Ge(),
      (Q = h()),
      ($ = `composer_branch_switcher`));
  });
export {
  Ie as a,
  Ae as c,
  Ue as i,
  Oe as l,
  tt as n,
  Ne as o,
  Ge as r,
  Me as s,
  Ke as t,
  ke as u,
};
//# sourceMappingURL=git-branch-switcher-BtVZYs2f.js.map
