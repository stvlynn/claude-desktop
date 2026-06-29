import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  Dt as r,
  E as i,
  Fi as a,
  Go as o,
  Ko as s,
  N as c,
  O as l,
  Vo as u,
  _c as d,
  c as f,
  gc as p,
  h as m,
  js as h,
  lc as g,
  m as _,
  qo as v,
  s as y,
  tr as b,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  B as x,
  Em as S,
  Gc as C,
  Rf as w,
  Ta as T,
  Tm as E,
  V as D,
  qc as O,
  zf as k,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  $s as A,
  Ad as ee,
  Al as j,
  Dl as M,
  Em as N,
  Gl as te,
  Id as ne,
  Kf as re,
  Nf as P,
  Op as ie,
  Pd as ae,
  Pf as oe,
  Qs as se,
  Sd as ce,
  Tm as le,
  Xl as ue,
  Zl as de,
  eo as F,
  gs as I,
  hh as fe,
  hs as pe,
  kp as me,
  ls as he,
  mh as ge,
  nd as L,
  no as R,
  oo as _e,
  qf as ve,
  td as ye,
  us as be,
  xd as xe,
  xp as z,
  yp as B,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  A as Se,
  Fa as Ce,
  Fy as we,
  Iy as V,
  Jn as H,
  N as Te,
  Na as Ee,
  Qp as De,
  St as Oe,
  Yn as ke,
  dt as Ae,
  im as je,
  ir as Me,
  jt as Ne,
  nr as Pe,
  pt as Fe,
  rm as Ie,
  ry as Le,
  tr as Re,
  ty as U,
  x as ze,
  xa as Be,
  zy as W,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Bt as Ve,
  Ht as He,
  St as Ue,
  xt as We,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import {
  Au as Ge,
  Dm as Ke,
  Em as qe,
  Om as Je,
  Tm as Ye,
  Xt as Xe,
  Zt as Ze,
  ju as Qe,
  km as $e,
  vu as et,
  yu as tt,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  Gn as nt,
  _ as rt,
  qn as it,
  v as at,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  _ as ot,
  g as st,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page-px21igmO.js";
import {
  n as ct,
  t as lt,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~miz7p5nt-CsT6xjQV.js";
import {
  n as G,
  r as K,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~hotkey-window-thread-page~~b9vznyj4-Cs4hWsvd.js";
import { n as q, t as ut } from "./worktree-environment-dropdown-BwnkHMlh.js";
import {
  a as dt,
  i as J,
  n as ft,
  o as pt,
  r as mt,
  t as ht,
} from "./composer-footer-branch-switcher-Cl5csgcW.js";
import {
  a as gt,
  c as _t,
  i as vt,
  n as yt,
  o as bt,
  r as xt,
  s as St,
  t as Ct,
} from "./local-remote-dropdown-BT-TSjGN.js";
function wt(e) {
  let t = (0, Tt.c)(35),
    { composerMode: n, setComposerMode: r } = e,
    i = s(ee),
    a = v(ye),
    [o, c] = (0, Y.useState)(!1),
    l = S(),
    { data: u, isLoading: d } = ke(
      l.cwd,
      l.hostConfig,
      `cloud_follow_up_local_remote_dropdown`,
    ),
    f = u?.root != null,
    p = a?.type === `cloud` && a.hasAppliedCodeLocally,
    m,
    h;
  (t[0] !== p || t[1] !== i
    ? ((m = () => {
        p && de(i, `local`);
      }),
      (h = [p, i]),
      (t[0] = p),
      (t[1] = i),
      (t[2] = m),
      (t[3] = h))
    : ((m = t[2]), (h = t[3])),
    (0, Y.useEffect)(m, h));
  let g, _;
  (t[4] !== f || t[5] !== d || t[6] !== i
    ? ((g = () => {
        d || f || de(i, `local`);
      }),
      (_ = [f, d, i]),
      (t[4] = f),
      (t[5] = d),
      (t[6] = i),
      (t[7] = g),
      (t[8] = _))
    : ((g = t[7]), (_ = t[8])),
    (0, Y.useEffect)(g, _));
  let y;
  t[9] === n
    ? (y = t[10])
    : ((y =
        n === `local`
          ? (0, X.jsx)(W, { ...Z.local })
          : (0, X.jsx)(W, { ...Z.cloud })),
      (t[9] = n),
      (t[10] = y));
  let b = y,
    C;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, X.jsx)(W, { ...Z.tooltip })), (t[11] = C))
    : (C = t[11]);
  let w;
  t[12] === n
    ? (w = t[13])
    : ((w =
        n === `cloud`
          ? (0, X.jsx)(Xe, { className: `icon-xs` })
          : (0, X.jsx)(x, { className: `icon-xs` })),
      (t[12] = n),
      (t[13] = w));
  let T;
  t[14] !== b || t[15] !== w
    ? ((T = (0, X.jsx)(B, {
        tooltipContent: C,
        children: (0, X.jsx)(G, {
          categoryLabel: null,
          collapse: `xs`,
          icon: w,
          indicator: `chevron`,
          value: b,
          valueClassName: `max-w-40`,
        }),
      })),
      (t[14] = b),
      (t[15] = w),
      (t[16] = T))
    : (T = t[16]);
  let E;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(R.Title, {
        children: (0, X.jsx)(W, {
          id: `composer.mode.newTask.header`,
          defaultMessage: `Continue in`,
          description: `Header label above agent mode options`,
        }),
      })),
      (t[17] = E))
    : (E = t[17]);
  let D = n === `local` ? ie : void 0,
    O;
  t[18] === r
    ? (O = t[19])
    : ((O = () => {
        (r(`local`), c(!1));
      }),
      (t[18] = r),
      (t[19] = O));
  let k;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = (0, X.jsx)(W, { ...Z.local })), (t[20] = k))
    : (k = t[20]);
  let A;
  t[21] !== D || t[22] !== O
    ? ((A = (0, X.jsx)(R.Item, {
        LeftIcon: x,
        RightIcon: D,
        onClick: O,
        children: k,
      })),
      (t[21] = D),
      (t[22] = O),
      (t[23] = A))
    : (A = t[23]);
  let j;
  t[24] !== n || t[25] !== f || t[26] !== r
    ? ((j = f
        ? (0, X.jsx)(R.Item, {
            LeftIcon: Xe,
            RightIcon: n === `cloud` ? ie : void 0,
            onClick: () => {
              (r(`cloud`), c(!1));
            },
            children: (0, X.jsx)(W, { ...Z.cloud }),
          })
        : null),
      (t[24] = n),
      (t[25] = f),
      (t[26] = r),
      (t[27] = j))
    : (j = t[27]);
  let M;
  t[28] !== A || t[29] !== j
    ? ((M = (0, X.jsxs)(`div`, {
        className: `flex w-44 flex-col`,
        children: [E, A, j],
      })),
      (t[28] = A),
      (t[29] = j),
      (t[30] = M))
    : (M = t[30]);
  let N;
  return (
    t[31] !== o || t[32] !== M || t[33] !== T
      ? ((N = (0, X.jsx)(F, {
          open: o,
          onOpenChange: c,
          triggerButton: T,
          children: M,
        })),
        (t[31] = o),
        (t[32] = M),
        (t[33] = T),
        (t[34] = N))
      : (N = t[34]),
    N
  );
}
var Tt,
  Y,
  X,
  Z,
  Et = e(() => {
    ((Tt = p()),
      u(),
      (Y = t(d(), 1)),
      V(),
      _e(),
      z(),
      H(),
      E(),
      me(),
      Ze(),
      D(),
      ne(),
      K(),
      L(),
      te(),
      (X = g()),
      (Z = we({
        local: {
          id: `composer.cloudFollowUp.local`,
          defaultMessage: `Local`,
          description: `Local follow-up option`,
        },
        cloud: {
          id: `composer.cloudFollowUp.cloud`,
          defaultMessage: `Cloud`,
          description: `Cloud follow-up option`,
        },
        tooltip: {
          id: `composer.cloudFollowUp.whereRun`,
          defaultMessage: `Where should this follow-up run?`,
          description: `Tooltip for choosing between local and cloud follow-ups`,
        },
      })));
  });
function Dt(e) {
  let t = (0, kt.c)(30),
    { startingState: n, setStartingState: r } = e,
    [i, a] = (0, At.useState)(!1),
    o;
  t[0] === n
    ? (o = t[1])
    : ((o =
        n === `working-tree`
          ? (0, Q.jsx)(W, { ...jt.workingTree })
          : (0, Q.jsx)(W, { ...jt.directFollowUp })),
      (t[0] = n),
      (t[1] = o));
  let s = o,
    c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: (0, Q.jsx)(W, {
          id: `composer.remote.startingPoint`,
          defaultMessage: `What code should this task start from?`,
          description: `Section label for remote starting point selector`,
        }),
      })),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(W, {
        id: `composer.followUpStartingState.footerCategory`,
        defaultMessage: `Starting from`,
        description: `Category label for the follow-up starting state control in the composer footer`,
      })),
      (t[3] = l))
    : (l = t[3]);
  let u = n === `working-tree`,
    d;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Q.jsx)(se, { className: `icon-xs` })), (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] === u
    ? (f = t[6])
    : ((f = (0, Q.jsx)(dt, {
        borderColor: `border-token-side-bar-background`,
        badgeEnabled: u,
        children: d,
      })),
      (t[5] = u),
      (t[6] = f));
  let p;
  t[7] !== s || t[8] !== f
    ? ((p = (0, Q.jsx)(B, {
        tooltipContent: c,
        children: (0, Q.jsx)(G, {
          categoryLabel: l,
          collapse: `none`,
          icon: f,
          indicator: `chevron`,
          value: s,
          valueClassName: `max-[440px]:hidden`,
        }),
      })),
      (t[7] = s),
      (t[8] = f),
      (t[9] = p))
    : (p = t[9]);
  let m;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(W, {
        id: `composer.remote.currentEditsSuffix.followUp`,
        defaultMessage: `Create a new task that references this cloud task.`,
        description: `Suffix text indicating the selection includes current edits`,
      })),
      (t[10] = m))
    : (m = t[10]);
  let h = n === `working-tree` ? ie : void 0,
    g;
  t[11] === r
    ? (g = t[12])
    : ((g = () => {
        (r(`working-tree`), a(!1));
      }),
      (t[11] = r),
      (t[12] = g));
  let _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(W, { ...jt.workingTree })), (t[13] = _))
    : (_ = t[13]);
  let v;
  t[14] !== g || t[15] !== h
    ? ((v = (0, Q.jsx)(B, {
        tooltipContent: m,
        children: (0, Q.jsx)(R.Item, {
          LeftIcon: Ot,
          RightIcon: h,
          onClick: g,
          children: _,
        }),
      })),
      (t[14] = g),
      (t[15] = h),
      (t[16] = v))
    : (v = t[16]);
  let y = n === `direct-follow-up` ? ie : void 0,
    b;
  t[17] === r
    ? (b = t[18])
    : ((b = () => {
        (r(`direct-follow-up`), a(!1));
      }),
      (t[17] = r),
      (t[18] = b));
  let x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Q.jsx)(W, { ...jt.directFollowUp })), (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== y || t[21] !== b
    ? ((S = (0, Q.jsx)(R.Item, {
        LeftIcon: se,
        RightIcon: y,
        onClick: b,
        children: x,
      })),
      (t[20] = y),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] !== v || t[24] !== S
    ? ((C = (0, Q.jsxs)(`div`, {
        className: `flex flex-col gap-1 pt-1`,
        children: [v, S],
      })),
      (t[23] = v),
      (t[24] = S),
      (t[25] = C))
    : (C = t[25]);
  let w;
  return (
    t[26] !== i || t[27] !== C || t[28] !== p
      ? ((w = (0, Q.jsx)(F, {
          open: i,
          onOpenChange: a,
          triggerButton: p,
          children: C,
        })),
        (t[26] = i),
        (t[27] = C),
        (t[28] = p),
        (t[29] = w))
      : (w = t[29]),
    w
  );
}
function Ot(e) {
  let t = (0, kt.c)(2),
    { className: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(dt, {
          borderColor: `border-token-dropdown-background`,
          children: (0, Q.jsx)(se, { className: n }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
var kt,
  At,
  Q,
  jt,
  Mt = e(() => {
    ((kt = p()),
      (At = t(d(), 1)),
      V(),
      pt(),
      _e(),
      z(),
      A(),
      me(),
      T(),
      K(),
      (Q = g()),
      (jt = we({
        workingTree: {
          id: `composer.remote.localWorkingTree`,
          defaultMessage: `Use local changes`,
          description: `Label for local working tree selection in remote composer`,
        },
        directFollowUp: {
          id: `composer.remote.directFollowUp`,
          defaultMessage: `Don't use local changes`,
          description: `Label for direct follow-up selection in remote composer`,
        },
      })));
  });
function Nt() {
  let e = (0, Pt.c)(2),
    { data: t } = v(It);
  if (!(t?.hasCustomCliExecutable ?? !1)) return null;
  let n;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Ft.jsx)(W, {
        id: `composer.customCliTooltip`,
        defaultMessage: `Using a custom CLI executable`,
        description: `Tooltip text shown when the user has set a custom Codex CLI executable in their VS Code settings.`,
      })),
      (e[0] = n))
    : (n = e[0]);
  let r;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((r = (0, Ft.jsx)(B, {
          tooltipContent: n,
          children: (0, Ft.jsx)(le, {
            color: `ghost`,
            size: `composerSm`,
            uniform: !0,
            className: `-mx-2`,
            children: (0, Ft.jsx)(lt, {
              className: `icon-xs text-token-editor-warning-foreground`,
            }),
          }),
        })),
        (e[1] = r))
      : (r = e[1]),
    r
  );
}
var Pt,
  Ft,
  It,
  Lt = e(() => {
    ((Pt = p()),
      u(),
      V(),
      N(),
      z(),
      ct(),
      n(),
      m(),
      f(),
      (Ft = g()),
      (It = y(i, `has-custom-cli-executable`, { staleTime: _.FIVE_SECONDS })));
  });
function Rt(e) {
  let t = (0, Bt.c)(190),
    {
      variant: n,
      composerMode: i,
      setComposerMode: l,
      isResponseInProgress: u,
      worktreeEnvironmentHostId: d,
      worktreeEnvironmentWorkspaceRoot: f,
      codexHome: p,
      showRuntimeControls: m,
      hideRunLocationDropdown: h,
      showWorkspaceDropdown: g,
      gitRootForStartingState: _,
      showFooterBranchWhen: y,
      freeUpsellButton: x,
      remoteConfig: C,
      activeProjectIdOverride: w,
      localRemoteExecutionTarget: T,
    } = e,
    E = s(ee),
    D = Ee(),
    A = Ce(),
    N = v(ye),
    te = v(M),
    ne = v(j),
    re = ce(),
    P;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = O()), (t[0] = P))
    : (P = t[0]);
  let ie = P,
    de = i !== `cloud` && N?.type !== `cloud`,
    F;
  t[1] === E ? (F = t[2]) : ((F = ae(E)), (t[1] = E), (t[2] = F));
  let I = F,
    fe = o(Se, I),
    me = I != null && !fe,
    L = S(I),
    R = o(Fe, I),
    _e = o(Oe, I),
    be = o(Vt, I),
    xe = N != null || be,
    z = C.currentHostId ?? `local`,
    B = N?.type,
    we;
  t[3] !== i || t[4] !== z || t[5] !== be || t[6] !== B
    ? ((we = at({
        composerMode: i,
        draftRemoteHostId: z,
        followUpType: B,
        hasStartedBranchConversation: be,
      })),
      (t[3] = i),
      (t[4] = z),
      (t[5] = be),
      (t[6] = B),
      (t[7] = we))
    : (we = t[7]);
  let V = we,
    H = V ? z : R,
    Te = !V && H !== `local`,
    De = o(ze, I),
    { data: ke } = ve(a.THREAD_PROJECT_ASSIGNMENTS),
    Ae = r(
      c({ cwd: De, assignment: I == null ? void 0 : ke?.[I] }),
      oe(L.hostId) ?? p,
    ),
    Me = Le(`2700454473`),
    Ne = n === `home` && Me,
    Ie = Le(`1115442235`),
    U = Ae,
    Be = o(k, I),
    He = je(),
    Ue;
  t[8] !== He || t[9] !== H
    ? ((Ue = He.find((e) => e.hostId === H) ?? null),
      (t[8] = He),
      (t[9] = H),
      (t[10] = Ue))
    : (Ue = t[10]);
  let Ge = Ue,
    Ke;
  t[11] !== L.cwd || t[12] !== Te || t[13] !== C || t[14] !== H
    ? ((Ke = H === `local` ? null : Te ? L.cwd : C.getProjectPathForHostId(H)),
      (t[11] = L.cwd),
      (t[12] = Te),
      (t[13] = C),
      (t[14] = H),
      (t[15] = Ke))
    : (Ke = t[15]);
  let Xe = Ke,
    Ze;
  t[16] !== C.currentHostId || t[17] !== He
    ? ((Ze = He.find((e) => e.hostId === C.currentHostId) ?? null),
      (t[16] = C.currentHostId),
      (t[17] = He),
      (t[18] = Ze))
    : (Ze = t[18]);
  let $e = Ze,
    et;
  t[19] === C
    ? (et = t[20])
    : ((et = C.getProjectPathForHostId(C.currentHostId)),
      (t[19] = C),
      (t[20] = et));
  let nt = et;
  (Ge?.displayName, $e?.displayName);
  let rt = H === `local` ? null : (Ge?.displayName ?? null),
    ot;
  t[21] !== Xe || t[22] !== H || t[23] !== rt
    ? ((ot = { hostId: H, connectionDisplayName: rt, projectPath: Xe }),
      (t[21] = Xe),
      (t[22] = H),
      (t[23] = rt),
      (t[24] = ot))
    : (ot = t[24]);
  let st = $e?.displayName ?? null,
    ct;
  t[25] !== C.currentHostId || t[26] !== nt || t[27] !== st
    ? ((ct = {
        hostId: C.currentHostId,
        connectionDisplayName: st,
        projectPath: nt,
      }),
      (t[25] = C.currentHostId),
      (t[26] = nt),
      (t[27] = st),
      (t[28] = ct))
    : (ct = t[28]);
  let lt;
  t[29] !== xe || t[30] !== ot || t[31] !== ct
    ? ((lt = {
        isAttachedToStartedTask: xe,
        existingRemoteThreadState: ot,
        draftNewThreadRemoteSelectionState: ct,
      }),
      (t[29] = xe),
      (t[30] = ot),
      (t[31] = ct),
      (t[32] = lt))
    : (lt = t[32]);
  let G = lt,
    K = L.hostConfig,
    q =
      o(pe, { hostConfig: K, operationSource: `composer_content` }).data
        ?.available === !0 &&
      de &&
      !me
        ? L.cwd
        : null,
    dt;
  t[33] !== q || t[34] !== K
    ? ((dt = {
        cwd: q,
        enabled: !0,
        hostConfig: K,
        operationSource: `composer_content`,
        watchForGitInit: !1,
      }),
      (t[33] = q),
      (t[34] = K),
      (t[35] = dt))
    : (dt = t[35]);
  let J = o(Re, dt),
    ft;
  t[36] !== q || t[37] !== K
    ? ((ft = {
        cwd: q,
        enabled: !0,
        hostConfig: K,
        operationSource: `composer_content`,
        watchForGitInit: !1,
      }),
      (t[36] = q),
      (t[37] = K),
      (t[38] = ft))
    : (ft = t[38]);
  let pt = o(Pe, ft),
    vt;
  t[39] !== q || t[40] !== K
    ? ((vt = { cwd: q, hostConfig: K, showErrorToast: !0 }),
      (t[39] = q),
      (t[40] = K),
      (t[41] = vt))
    : (vt = t[41]);
  let {
      canCreateGitRepository: yt,
      createGitRepository: bt,
      isCreatingGitRepository: St,
    } = tt(vt),
    Tt = q != null && J != null,
    Y = de && Tt && J?.root == null,
    X = !yt || St || !Tt || pt,
    Z = Y ? null : x,
    Et = i === `worktree`,
    Ot = Et ? f : null,
    kt;
  t[42] !== Ot || t[43] !== d
    ? ((kt = { hostId: d, workspaceRoot: Ot }),
      (t[42] = Ot),
      (t[43] = d),
      (t[44] = kt))
    : (kt = t[44]);
  let {
      environments: At,
      isLoading: Q,
      error: jt,
      resolvedConfigPath: Mt,
      updateSelection: Pt,
    } = it(kt),
    Ft;
  t[45] !== N ||
  t[46] !== Et ||
  t[47] !== jt ||
  t[48] !== Q ||
  t[49] !== D ||
  t[50] !== A ||
  t[51] !== Mt ||
  t[52] !== E ||
  t[53] !== Pt ||
  t[54] !== d ||
  t[55] !== f ||
  t[56] !== At
    ? ((Ft =
        !N && Et
          ? (0, $.jsx)(ut, {
              environments: At,
              isLoading: Q,
              hasError: jt != null,
              selectedConfigPath: Mt,
              onSelectConfigPath: Pt,
              onOpenSettings: () => {
                (Qe(E, d),
                  A(Ve({ workspaceRoot: f }), {
                    state: {
                      hostId: d,
                      returnTo: `${D.pathname}${D.search}${D.hash}`,
                    },
                  }));
              },
            })
          : null),
      (t[45] = N),
      (t[46] = Et),
      (t[47] = jt),
      (t[48] = Q),
      (t[49] = D),
      (t[50] = A),
      (t[51] = Mt),
      (t[52] = E),
      (t[53] = Pt),
      (t[54] = d),
      (t[55] = f),
      (t[56] = At),
      (t[57] = Ft))
    : (Ft = t[57]);
  let It = Ft,
    Lt,
    Rt;
  if (
    t[58] !== w ||
    t[59] !== te ||
    t[60] !== _e?.role ||
    t[61] !== Be ||
    t[62] !== ne ||
    t[63] !== i ||
    t[64] !== I ||
    t[65] !== bt ||
    t[66] !== L ||
    t[67] !== N ||
    t[68] !== G ||
    t[69] !== J ||
    t[70] !== _ ||
    t[71] !== h ||
    t[72] !== K ||
    t[73] !== me ||
    t[74] !== X ||
    t[75] !== St ||
    t[76] !== pt ||
    t[77] !== Ne ||
    t[78] !== u ||
    t[79] !== Ae ||
    t[80] !== T ||
    t[81] !== Ie ||
    t[82] !== H ||
    t[83] !== E ||
    t[84] !== re ||
    t[85] !== l ||
    t[86] !== Y ||
    t[87] !== U ||
    t[88] !== y ||
    t[89] !== m ||
    t[90] !== g ||
    t[91] !== Z ||
    t[92] !== V ||
    t[93] !== n ||
    t[94] !== It
  ) {
    Rt = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = ge(
          `flex flex-nowrap items-center gap-1 overflow-hidden`,
          n === `home`
            ? ge(
                `-mx-px -mt-4.5 rounded-b-2xl bg-token-side-bar-background px-2 pt-[25px] pb-2 dark:bg-token-bg-fog`,
                Ne ? `electron:mx-4 electron:rounded-b-xl` : `electron:mx-0`,
              )
            : `pr-2`,
        ),
        r;
      t[97] !== te ||
      t[98] !== i ||
      t[99] !== N ||
      t[100] !== _ ||
      t[101] !== K ||
      t[102] !== E ||
      t[103] !== re
        ? ((r =
            !N && (i === `cloud` || i === `worktree`)
              ? (0, $.jsx)(he, {
                  electron: !0,
                  browser: re != null,
                  children: (0, $.jsx)(mt, {
                    startingState: te,
                    setStartingState: (e) => {
                      ue(E, `asyncThreadStartingState`, e);
                    },
                    hostConfig: K,
                    gitRootOverride: _,
                    branchSource: i === `worktree` ? `worktree` : `cloud`,
                  }),
                })
              : null),
          (t[97] = te),
          (t[98] = i),
          (t[99] = N),
          (t[100] = _),
          (t[101] = K),
          (t[102] = E),
          (t[103] = re),
          (t[104] = r))
        : (r = t[104]);
      let a = r,
        o;
      t[105] !== Be ||
      t[106] !== I ||
      t[107] !== L.cwd ||
      t[108] !== Ae ||
      t[109] !== Ie
        ? ((o =
            Ie && xt({ isCompactWindow: ie }) && I != null && L.cwd != null
              ? {
                  conversationTitle: Be,
                  cwd: b(L.cwd),
                  isWorktreeConversation: Ae,
                }
              : null),
          (t[105] = Be),
          (t[106] = I),
          (t[107] = L.cwd),
          (t[108] = Ae),
          (t[109] = Ie),
          (t[110] = o))
        : (o = t[110]);
      let s = o,
        c = I != null && H !== `local` && _e?.role === `follower`,
        d = (y === `always` || i === `local`) && !c && !me && !pt;
      J?.root;
      let f;
      t[111] !== I ||
      t[112] !== J?.root ||
      t[113] !== K ||
      t[114] !== Y ||
      t[115] !== d
        ? ((f =
            d && !Y
              ? (0, $.jsx)(ht, {
                  gitRoot: J?.root ?? null,
                  hostConfig: K,
                  localConversationId: I,
                  shouldShow: !0,
                  align: `start`,
                })
              : null),
          (t[111] = I),
          (t[112] = J?.root),
          (t[113] = K),
          (t[114] = Y),
          (t[115] = d),
          (t[116] = f))
        : (f = t[116]);
      let p = f,
        v;
      t[117] !== i ||
      t[118] !== I ||
      t[119] !== N ||
      t[120] !== G ||
      t[121] !== s ||
      t[122] !== h ||
      t[123] !== u ||
      t[124] !== T ||
      t[125] !== l ||
      t[126] !== U
        ? ((v =
            N?.type === `cloud`
              ? (0, $.jsx)(wt, { composerMode: i, setComposerMode: l })
              : (0, $.jsx)(Ct, {
                  composerMode: i,
                  setComposerMode: l,
                  conversationId: I,
                  executionTargetOverride: T,
                  footerRemoteState: G,
                  disabled: U,
                  hideModeDropdown: h,
                  allowWorktree: !N && !u,
                  threadHandoff: s,
                  worktreeLabelOnly: U,
                })),
          (t[117] = i),
          (t[118] = I),
          (t[119] = N),
          (t[120] = G),
          (t[121] = s),
          (t[122] = h),
          (t[123] = u),
          (t[124] = T),
          (t[125] = l),
          (t[126] = U),
          (t[127] = v))
        : (v = t[127]);
      let x = v,
        S;
      t[128] !== w ||
      t[129] !== i ||
      t[130] !== N ||
      t[131] !== g ||
      t[132] !== n
        ? ((S =
            g && _t(i) && !N
              ? (0, $.jsx)(he, {
                  electron: !0,
                  browser: !0,
                  children: (0, $.jsx)(We, {
                    activeProjectIdOverride: w,
                    allowLocalProjectActions: !0,
                    variant: n === `home` ? `home` : `default`,
                  }),
                })
              : null),
          (t[128] = w),
          (t[129] = i),
          (t[130] = N),
          (t[131] = g),
          (t[132] = n),
          (t[133] = S))
        : (S = t[133]);
      let C = S,
        D;
      t[134] !== i || t[135] !== N || t[136] !== Z
        ? ((D = !!N || !1),
          (t[134] = i),
          (t[135] = N),
          (t[136] = Z),
          (t[137] = D))
        : (D = t[137]);
      let O = D,
        k;
      t[138] === O
        ? (k = t[139])
        : ((k = O ? (0, $.jsx)(Nt, {}) : null), (t[138] = O), (t[139] = k));
      let A = k,
        ee;
      t[140] !== ne || t[141] !== i || t[142] !== N || t[143] !== E
        ? ((ee =
            i === `cloud` && N?.type === `cloud` && N.hasAppliedCodeLocally
              ? (0, $.jsx)(Dt, {
                  startingState: ne,
                  setStartingState: (e) => {
                    ue(E, `followUpCloudStartingState`, e);
                  },
                })
              : null),
          (t[140] = ne),
          (t[141] = i),
          (t[142] = N),
          (t[143] = E),
          (t[144] = ee))
        : (ee = t[144]);
      let j = ee,
        M = V
          ? G.draftNewThreadRemoteSelectionState
          : G.existingRemoteThreadState,
        P;
      t[145] !== bt ||
      t[146] !== X ||
      t[147] !== St ||
      t[148] !== Y ||
      t[149] !== d
        ? ((P =
            d && Y
              ? (0, $.jsxs)(le, {
                  className: `px-0`,
                  color: `ghost`,
                  size: `composerSm`,
                  disabled: X,
                  onClick: () => {
                    X || bt();
                  },
                  children: [
                    (0, $.jsx)(se, { className: `icon-xs` }),
                    (0, $.jsx)(qe, {
                      collapse: `sm`,
                      className: `max-w-40 truncate text-sm`,
                      children: St
                        ? (0, $.jsx)(W, {
                            id: `codex.review.noDiff.gitInit.creating`,
                            defaultMessage: `Creating…`,
                            description: `Button label shown while git init is running from the diff empty state`,
                          })
                        : (0, $.jsx)(W, {
                            id: `codex.review.noDiff.gitInit.createRepository`,
                            defaultMessage: `Create git repository`,
                            description: `Button label to create a git repository from the diff empty state`,
                          }),
                    }),
                  ],
                })
              : null),
          (t[145] = bt),
          (t[146] = X),
          (t[147] = St),
          (t[148] = Y),
          (t[149] = d),
          (t[150] = P))
        : (P = t[150]);
      let ae = P,
        oe = i === `local` && M.hostId != null && M.hostId !== `local`,
        ce;
      t[151] !== M || t[152] !== oe
        ? ((ce = oe
            ? (0, $.jsx)(`div`, {
                className: `flex min-w-0 items-center gap-1`,
                children: (0, $.jsx)(zt, {
                  hostId: M.hostId,
                  connectionDisplayName: M.connectionDisplayName,
                  projectPath: M.projectPath,
                }),
              })
            : null),
          (t[151] = M),
          (t[152] = oe),
          (t[153] = ce))
        : (ce = t[153]);
      let de = ce,
        F = m && !0,
        fe;
      t[154] !== i || t[155] !== I || t[156] !== l || t[157] !== U
        ? ((fe =
            i === `cloud`
              ? (0, $.jsx)(he, {
                  electron: !0,
                  browser: !0,
                  children: (0, $.jsx)(gt, {
                    composerMode: i,
                    conversationId: I,
                    disabled: U,
                    setComposerMode: l,
                  }),
                })
              : null),
          (t[154] = i),
          (t[155] = I),
          (t[156] = l),
          (t[157] = U),
          (t[158] = fe))
        : (fe = t[158]);
      let pe = fe,
        R;
      t[159] !== a ||
      t[160] !== pe ||
      t[161] !== j ||
      t[162] !== N?.type ||
      t[163] !== p ||
      t[164] !== It
        ? ((R =
            N?.type === `cloud`
              ? (0, $.jsxs)($.Fragment, { children: [p, j] })
              : (0, $.jsxs)($.Fragment, { children: [p, pe, It, a] })),
          (t[159] = a),
          (t[160] = pe),
          (t[161] = j),
          (t[162] = N?.type),
          (t[163] = p),
          (t[164] = It),
          (t[165] = R))
        : (R = t[165]);
      let ve = R,
        ye;
      t[166] !== j ||
      t[167] !== N?.type ||
      t[168] !== p ||
      t[169] !== ve ||
      t[170] !== x ||
      t[171] !== n
        ? ((ye =
            N?.type === `cloud`
              ? (0, $.jsxs)($.Fragment, {
                  children: [
                    n === `home` ? p : null,
                    x,
                    n === `default` ? p : null,
                    j,
                  ],
                })
              : (0, $.jsxs)($.Fragment, { children: [x, ve] })),
          (t[166] = j),
          (t[167] = N?.type),
          (t[168] = p),
          (t[169] = ve),
          (t[170] = x),
          (t[171] = n),
          (t[172] = ye))
        : (ye = t[172]);
      let be = ye,
        xe = !!(de || ae || Z || A),
        z = n === `home` ? C : null,
        B = F ? be : null,
        Se = n === `default` ? C : null,
        Ce;
      t[173] !== z || t[174] !== B || t[175] !== Se
        ? ((Ce = (0, $.jsxs)($.Fragment, { children: [z, B, Se] })),
          (t[173] = z),
          (t[174] = B),
          (t[175] = Se),
          (t[176] = Ce))
        : (Ce = t[176]);
      let we = Ce,
        Te = F ? x : null,
        Ee = F ? ve : null,
        De;
      t[177] !== Te || t[178] !== Ee || t[179] !== C
        ? ((De = (0, $.jsxs)($.Fragment, { children: [Te, C, Ee] })),
          (t[177] = Te),
          (t[178] = Ee),
          (t[179] = C),
          (t[180] = De))
        : (De = t[180]);
      let Oe = De,
        ke;
      t[181] !== ae ||
      t[182] !== A ||
      t[183] !== xe ||
      t[184] !== de ||
      t[185] !== F ||
      t[186] !== Z
        ? ((ke =
            F && xe
              ? (0, $.jsxs)(`div`, {
                  className: `flex min-w-0 shrink-0 items-center gap-3`,
                  children: [de, ae, Z, A],
                })
              : null),
          (t[181] = ae),
          (t[182] = A),
          (t[183] = xe),
          (t[184] = de),
          (t[185] = F),
          (t[186] = Z),
          (t[187] = ke))
        : (ke = t[187]);
      let je = ke;
      if (Ne) {
        let n;
        (t[188] === Oe
          ? (n = t[189])
          : ((n = (0, $.jsx)(`div`, {
              className: `horizontal-scroll-fade-mask hide-scrollbar flex min-w-0 flex-1 flex-nowrap items-center gap-1 overflow-x-auto overflow-y-hidden pr-4 [--edge-fade-distance:1rem]`,
              children: Oe,
            })),
            (t[188] = Oe),
            (t[189] = n)),
          (Rt = (0, $.jsxs)(Ye, {
            className: ge(
              e,
              Je.homeExternalFooter,
              `flex-nowrap gap-2 overflow-hidden`,
            ),
            responsive: !1,
            children: [n, je],
          })));
        break bb0;
      }
      Lt = (0, $.jsxs)(Ye, {
        className: ge(
          e,
          `flex-wrap gap-2 overflow-visible`,
          n === `default` && `pl-2`,
        ),
        children: [
          (0, $.jsx)(`div`, {
            className: `flex min-w-0 flex-1 flex-nowrap items-center gap-1`,
            children: we,
          }),
          je,
        ],
      });
    }
    ((t[58] = w),
      (t[59] = te),
      (t[60] = _e?.role),
      (t[61] = Be),
      (t[62] = ne),
      (t[63] = i),
      (t[64] = I),
      (t[65] = bt),
      (t[66] = L),
      (t[67] = N),
      (t[68] = G),
      (t[69] = J),
      (t[70] = _),
      (t[71] = h),
      (t[72] = K),
      (t[73] = me),
      (t[74] = X),
      (t[75] = St),
      (t[76] = pt),
      (t[77] = Ne),
      (t[78] = u),
      (t[79] = Ae),
      (t[80] = T),
      (t[81] = Ie),
      (t[82] = H),
      (t[83] = E),
      (t[84] = re),
      (t[85] = l),
      (t[86] = Y),
      (t[87] = U),
      (t[88] = y),
      (t[89] = m),
      (t[90] = g),
      (t[91] = Z),
      (t[92] = V),
      (t[93] = n),
      (t[94] = It),
      (t[95] = Lt),
      (t[96] = Rt));
  } else ((Lt = t[95]), (Rt = t[96]));
  return Rt === Symbol.for(`react.early_return_sentinel`) ? Lt : Rt;
}
function zt(e) {
  let t = (0, Bt.c)(11),
    { hostId: n, connectionDisplayName: r, projectPath: i } = e;
  if (n == null) return null;
  let a = i == null,
    o = r ?? n,
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = (0, $.jsx)(`span`, {
        className: `max-w-40 min-w-0 truncate`,
        children: o,
      })),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === n
    ? (c = t[3])
    : ((c = (0, $.jsx)(st, { hostId: n })), (t[2] = n), (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, $.jsxs)(qe, {
        collapse: `sm`,
        className: `flex min-w-0 items-center gap-1 text-sm`,
        children: [s, c],
      })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] !== i || t[8] !== a || t[9] !== l
      ? ((u = (0, $.jsx)(B, { tooltipContent: i, disabled: a, children: l })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = l),
        (t[10] = u))
      : (u = t[10]),
    u
  );
}
var Bt, $, Vt;
e(() => {
  ((Bt = p()),
    fe(),
    u(),
    l(),
    V(),
    Be(),
    ot(),
    Te(),
    C(),
    N(),
    z(),
    be(),
    I(),
    Me(),
    et(),
    P(),
    re(),
    E(),
    A(),
    w(),
    nt(),
    Ie(),
    n(),
    ne(),
    He(),
    Ge(),
    De(),
    U(),
    xe(),
    J(),
    bt(),
    Et(),
    Mt(),
    L(),
    Ke(),
    ft(),
    St(),
    te(),
    Lt(),
    vt(),
    Ue(),
    yt(),
    rt(),
    q(),
    $e(),
    ($ = g()),
    (Vt = h(i, (e, { get: t }) => {
      let n = t(Ne, e) ?? 0,
        r = t(Ae, e) ?? 0;
      return n > 0 || r > 0;
    })));
})();
export { Rt as ComposerExternalFooter };
//# sourceMappingURL=composer-external-footer-BnOdOmQM.js.map
