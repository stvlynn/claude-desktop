import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Dt as n,
  Go as r,
  Ko as i,
  Kt as a,
  O as o,
  Vo as s,
  _ as c,
  _c as l,
  gc as u,
  lc as d,
  nt as f,
  qo as p,
  v as m,
  y as h,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  B as g,
  Ju as _,
  K as ee,
  V as v,
  Xu as y,
  q as b,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  $l as x,
  Ad as te,
  Dd as ne,
  Df as S,
  Dl as C,
  Ed as re,
  Em as w,
  Gl as ie,
  Id as T,
  Il as ae,
  Jl as E,
  Nf as D,
  Op as O,
  Pf as k,
  Tf as A,
  Tm as j,
  Um as oe,
  ca as se,
  eo as ce,
  fh as M,
  hh as le,
  ia as ue,
  kp as de,
  la as fe,
  mh as pe,
  no as me,
  oa as he,
  oo as N,
  ph as ge,
  xp as P,
  yp as _e,
  zm as ve,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  $p as ye,
  Fa as be,
  Iy as F,
  Jn as xe,
  Na as Se,
  Qp as Ce,
  Vy as we,
  Yn as Te,
  em as Ee,
  nv as De,
  ry as Oe,
  sy as ke,
  tv as Ae,
  ty as I,
  xa as je,
  zy as L,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  St as Me,
  xt as Ne,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import {
  dn as Pe,
  on as Fe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Xt as Ie,
  Xu as Le,
  Zt as Re,
  Zu as ze,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  $ as Be,
  $n as Ve,
  Ci as He,
  Gn as Ue,
  M as We,
  N as Ge,
  Qn as Ke,
  Si as qe,
  bi as Je,
  i as Ye,
  j as Xe,
  k as Ze,
  n as Qe,
  qn as $e,
  r as et,
  t as tt,
  tt as nt,
  wi as rt,
  xi as it,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import { n as at, t as ot } from "./worktree-environment-dropdown-BwnkHMlh.js";
import {
  n as st,
  t as ct,
} from "./use-floating-window-pointer-interactivity-JdCkcjJn.js";
import {
  i as lt,
  n as ut,
  r as dt,
  t as ft,
} from "./composer-footer-branch-switcher-Cl5csgcW.js";
import {
  n as pt,
  t as mt,
} from "./use-hotkey-window-dismiss-on-escape-D4r0Oase.js";
function ht(e) {
  let t = (0, R.c)(52),
    {
      canUseCloud: n,
      composerMode: r,
      setComposerMode: i,
      showLabel: a,
      disabledTooltipText: o,
      showWorktree: s,
    } = e,
    c = a === void 0 ? !1 : a,
    l = we(),
    u;
  t[0] !== r || t[1] !== s
    ? ((u =
        r === `cloud`
          ? (0, z.jsx)(Ie, { className: `icon-2xs` })
          : r === `worktree` && s
            ? (0, z.jsx)(ee, { className: `icon-2xs` })
            : (0, z.jsx)(g, { className: `icon-2xs` })),
      (t[0] = r),
      (t[1] = s),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] !== r || t[4] !== c || t[5] !== s
    ? ((d = c
        ? (0, z.jsx)(`span`, {
            className: `max-w-40 truncate text-left whitespace-nowrap`,
            children:
              r === `cloud`
                ? (0, z.jsx)(L, {
                    id: `composer.footer.v2.cloudTab`,
                    defaultMessage: `Cloud`,
                    description: `Cloud mode label`,
                  })
                : r === `worktree` && s
                  ? (0, z.jsx)(L, {
                      id: `composer.mode.worktreeSegment`,
                      defaultMessage: `Worktree`,
                      description: `Worktree mode label for the segmented toggle`,
                    })
                  : (0, z.jsx)(L, {
                      id: `composer.hotkeyWindow.modeDropdown.localProject`,
                      defaultMessage: `Local project`,
                      description: `Hotkey window overflow menu label for local project mode`,
                    }),
          })
        : null),
      (t[3] = r),
      (t[4] = c),
      (t[5] = s),
      (t[6] = d))
    : (d = t[6]);
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, z.jsx)(M, {
        className: `icon-2xs text-token-input-placeholder-foreground`,
      })),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== u || t[9] !== d
    ? ((p = (0, z.jsxs)(z.Fragment, { children: [u, d, f] })),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p))
    : (p = t[10]);
  let m = p;
  if (o) {
    let e;
    t[11] === m
      ? (e = t[12])
      : ((e = (0, z.jsx)(`span`, {
          children: (0, z.jsx)(j, {
            size: `composerSm`,
            color: `ghost`,
            className: `gap-1 px-1.5`,
            disabled: !0,
            children: m,
          }),
        })),
        (t[11] = m),
        (t[12] = e));
    let n;
    return (
      t[13] !== o || t[14] !== e
        ? ((n = (0, z.jsx)(_e, { tooltipContent: o, children: e })),
          (t[13] = o),
          (t[14] = e),
          (t[15] = n))
        : (n = t[15]),
      n
    );
  }
  let h;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, z.jsx)(L, {
        id: `composer.hotkeyWindow.modeDropdown.tooltip`,
        defaultMessage: `Select where to run the task`,
        description: `Tooltip for the hotkey-window mode selector`,
      })),
      (t[16] = h))
    : (h = t[16]);
  let _;
  t[17] === m
    ? (_ = t[18])
    : ((_ = (0, z.jsx)(_e, {
        tooltipContent: h,
        children: (0, z.jsx)(j, {
          size: `composerSm`,
          color: `ghost`,
          className: `gap-1 px-1.5`,
          children: m,
        }),
      })),
      (t[17] = m),
      (t[18] = _));
  let v = r === `local` ? O : void 0,
    y;
  t[19] === i
    ? (y = t[20])
    : ((y = () => {
        i(`local`);
      }),
      (t[19] = i),
      (t[20] = y));
  let b;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, z.jsx)(L, {
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] !== v || t[23] !== y
    ? ((x = (0, z.jsx)(me.Item, {
        LeftIcon: g,
        RightIcon: v,
        onSelect: y,
        children: b,
      })),
      (t[22] = v),
      (t[23] = y),
      (t[24] = x))
    : (x = t[24]);
  let te = r === `cloud` ? O : void 0,
    ne = !n,
    S;
  t[25] === i
    ? (S = t[26])
    : ((S = () => {
        i(`cloud`);
      }),
      (t[25] = i),
      (t[26] = S));
  let C;
  t[27] !== n || t[28] !== l
    ? ((C = n
        ? void 0
        : l.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.cloudUnavailable`,
            defaultMessage: `Cloud is unavailable`,
            description: `Tooltip for disabled hotkey-window Cloud mode`,
          })),
      (t[27] = n),
      (t[28] = l),
      (t[29] = C))
    : (C = t[29]);
  let re;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, z.jsx)(L, {
        id: `composer.footer.v2.cloudTab`,
        defaultMessage: `Cloud`,
        description: `Cloud mode label`,
      })),
      (t[30] = re))
    : (re = t[30]);
  let w;
  t[31] !== te || t[32] !== ne || t[33] !== S || t[34] !== C
    ? ((w = (0, z.jsx)(me.Item, {
        LeftIcon: Ie,
        RightIcon: te,
        disabled: ne,
        onSelect: S,
        tooltipText: C,
        children: re,
      })),
      (t[31] = te),
      (t[32] = ne),
      (t[33] = S),
      (t[34] = C),
      (t[35] = w))
    : (w = t[35]);
  let ie = r === `worktree` ? O : void 0,
    T;
  t[36] === i
    ? (T = t[37])
    : ((T = () => {
        i(`worktree`);
      }),
      (t[36] = i),
      (t[37] = T));
  let ae = !s,
    E;
  t[38] !== l || t[39] !== s
    ? ((E = s
        ? void 0
        : l.formatMessage({
            id: `composer.hotkeyWindow.modeDropdown.localOnly`,
            defaultMessage: `Initialize a git repo to run tasks in worktrees`,
            description: `Tooltip for disabled hotkey-window worktree mode selector`,
          })),
      (t[38] = l),
      (t[39] = s),
      (t[40] = E))
    : (E = t[40]);
  let D;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, z.jsx)(L, {
        id: `composer.mode.worktreeSegment`,
        defaultMessage: `Worktree`,
        description: `Worktree mode label for the segmented toggle`,
      })),
      (t[41] = D))
    : (D = t[41]);
  let k;
  t[42] !== ie || t[43] !== T || t[44] !== ae || t[45] !== E
    ? ((k = (0, z.jsx)(me.Item, {
        LeftIcon: ee,
        RightIcon: ie,
        onSelect: T,
        disabled: ae,
        tooltipText: E,
        children: D,
      })),
      (t[42] = ie),
      (t[43] = T),
      (t[44] = ae),
      (t[45] = E),
      (t[46] = k))
    : (k = t[46]);
  let A;
  return (
    t[47] !== x || t[48] !== w || t[49] !== k || t[50] !== _
      ? ((A = (0, z.jsxs)(ce, {
          triggerButton: _,
          contentWidth: `menuNarrow`,
          children: [x, w, k],
        })),
        (t[47] = x),
        (t[48] = w),
        (t[49] = k),
        (t[50] = _),
        (t[51] = A))
      : (A = t[51]),
    A
  );
}
var R,
  z,
  gt = e(() => {
    ((R = u()), F(), w(), N(), P(), de(), ge(), Re(), v(), b(), (z = d()));
  });
function _t({
  activeWorkspaceRoot: e,
  defaultToProjectless: t,
  prefillCwd: n,
}) {
  return n ?? (t ? `~` : e);
}
function vt({ composerWorkspaceRoot: e, selectedRemoteProjectPath: t }) {
  return t ?? (e === `~` ? null : e);
}
var yt = e(() => {
  o();
});
function bt(e) {
  let t = (0, xt.c)(22),
    { composerMode: n, enabled: r, setComposerMode: i, showWorktree: a } = e,
    o = we(),
    s;
  t[0] === o
    ? (s = t[1])
    : ((s = o.formatMessage({
        id: `composer.mode.local`,
        defaultMessage: `Work locally`,
        description: `Local mode label`,
      })),
      (t[0] = o),
      (t[1] = s));
  let c;
  t[2] === o
    ? (c = t[3])
    : ((c = o.formatMessage({
        id: `composer.mode.localSlashCommand.description`,
        defaultMessage: `Run this chat locally`,
        description: `Description for the local mode slash command`,
      })),
      (t[2] = o),
      (t[3] = c));
  let l = r && n !== `local`,
    u;
  t[4] === i
    ? (u = t[5])
    : ((u = async () => {
        i(`local`);
      }),
      (t[4] = i),
      (t[5] = u));
  let d = u,
    f;
  (t[6] !== s || t[7] !== c || t[8] !== l || t[9] !== d
    ? ((f = {
        id: `local`,
        title: s,
        description: c,
        requiresEmptyComposer: !1,
        Icon: g,
        enabled: l,
        onSelect: d,
      }),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = d),
      (t[10] = f))
    : (f = t[10]),
    Xe(f));
  let p;
  t[11] === o
    ? (p = t[12])
    : ((p = o.formatMessage({
        id: `composer.mode.worktree`,
        defaultMessage: `New worktree`,
        description: `Worktree mode label`,
      })),
      (t[11] = o),
      (t[12] = p));
  let m;
  t[13] === o
    ? (m = t[14])
    : ((m = o.formatMessage({
        id: `composer.mode.worktreeSlashCommand.description`,
        defaultMessage: `Run this chat in a new worktree`,
        description: `Description for the worktree mode slash command`,
      })),
      (t[13] = o),
      (t[14] = m));
  let h = r && a && n !== `worktree`,
    _;
  t[15] === i
    ? (_ = t[16])
    : ((_ = async () => {
        i(`worktree`);
      }),
      (t[15] = i),
      (t[16] = _));
  let v = _,
    y;
  return (
    t[17] !== v || t[18] !== p || t[19] !== m || t[20] !== h
      ? ((y = {
          id: `worktree`,
          title: p,
          description: m,
          requiresEmptyComposer: !1,
          Icon: ee,
          enabled: h,
          onSelect: v,
        }),
        (t[17] = v),
        (t[18] = p),
        (t[19] = m),
        (t[20] = h),
        (t[21] = y))
      : (y = t[21]),
    Xe(y),
    null
  );
}
var xt,
  St = e(() => {
    ((xt = u()), F(), Ze(), v(), b());
  });
function Ct(e) {
  let t = (0, wt.c)(4),
    { activationNonce: n, interactiveRegionRef: r, onInteractiveChange: i } = e,
    a;
  return (
    t[0] !== n || t[1] !== r || t[2] !== i
      ? ((a = {
          activationNonce: n,
          floatingElementSelectors: B,
          includeInteractiveRegion: !0,
          interactiveRegionRef: r,
          onInteractiveChange: i,
        }),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    st(a)
  );
}
var wt,
  B,
  Tt = e(() => {
    ((wt = u()),
      ct(),
      (B = [
        `[data-composer-overlay-floating-ui]`,
        `[data-above-composer-portal] > *`,
        `[data-radix-popper-content-wrapper] > *`,
      ]));
  }),
  V,
  Et,
  H,
  Dt,
  Ot,
  U = e(() => {
    ((V = `_home_reiaa_1`),
      (Et = `_homeShell_reiaa_20`),
      (H = `_shellUnderlay_reiaa_21`),
      (Dt = `_composerSurface_reiaa_22`),
      (Ot = { home: V, homeShell: Et, shellUnderlay: H, composerSurface: Dt }));
  });
function W() {
  let e = (0, It.c)(107),
    t = i(te);
  pt();
  let a = we(),
    o = Se(),
    s = be(),
    c = Oe(`505458`),
    l = ke(),
    { access: u } = rt(),
    { selectedRemoteProject: d } = S(),
    m = (0, G.useRef)(null),
    g = (0, G.useRef)(null),
    _ = (0, G.useRef)(null),
    ee = (0, G.useRef)(null),
    v = o.state,
    y = v?.focusComposerNonce ?? null,
    b = v?.prefillCwd ?? null,
    { data: ne, isLoading: w } = p(Fe),
    ie = oe(f.hotkeyWindowProjectlessDefaultEnabled),
    T = _t({
      activeWorkspaceRoot: ne?.roots[0] ?? null,
      defaultToProjectless: ie === !0,
      prefillCwd: b,
    }),
    D = b == null ? d : null,
    O = D == null && T === `~`,
    A = D?.hostId ?? `local`,
    j = ye(A),
    ce = k(A),
    M = vt({
      composerWorkspaceRoot: T,
      selectedRemoteProjectPath: D?.remotePath ?? null,
    }),
    le = D == null && T == null && w,
    de = re({ cwd: M, hostId: A, isLoading: le }),
    { data: fe, isLoading: me } = Te(M, j, `hotkey_window_home_page`),
    N = fe?.root ?? null,
    ge;
  e[0] !== ce || e[1] !== M || e[2] !== N || e[3] !== c
    ? ((ge = M != null && N != null && c && !n(M, ce)),
      (e[0] = ce),
      (e[1] = M),
      (e[2] = N),
      (e[3] = c),
      (e[4] = ge))
    : (ge = e[4]);
  let P = ge,
    _e = D == null && !w && !me && N == null,
    ve = O || _e,
    F = {
      fallbackMode: `local`,
      isAvailabilityLoading: !ve && ((D == null && w) || me || l),
      isCloudAvailable: !ve,
      isLocalAvailable: !0,
      isWorktreeAvailable: P,
    },
    xe = r(ae, de),
    Ce = p(C),
    De = Ye(),
    I = Je({ ...F, composerMode: xe, cloudAccess: u }),
    je = I === `worktree` && M != null,
    Me;
  e[5] !== A || e[6] !== je
    ? ((Me = {
        enabled: je,
        hostId: A,
        source: `hotkey_window_worktree_source`,
      }),
      (e[5] = A),
      (e[6] = je),
      (e[7] = Me))
    : (Me = e[7]);
  let { gitRoot: Pe } = nt(M, Me),
    Ie = I === `worktree` ? M : null,
    Re;
  e[8] !== A || e[9] !== Ie
    ? ((Re = { hostId: A, workspaceRoot: Ie }),
      (e[8] = A),
      (e[9] = Ie),
      (e[10] = Re))
    : (Re = e[10]);
  let {
      environments: ze,
      isLoading: Be,
      error: Ve,
      resolvedConfigPath: He,
      updateSelection: Ue,
    } = $e(Re),
    [Ge, Xe] = (0, G.useState)(!1),
    [Ze, Qe] = (0, G.useState)(null),
    et;
  e[11] === y
    ? (et = e[12])
    : ((et = {
        activationNonce: y,
        interactiveRegionRef: g,
        onInteractiveChange: Mt,
      }),
      (e[11] = y),
      (e[12] = et));
  let it = Ct(et),
    at;
  (e[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((at = (e) => {
        Qe(e.topInsetPx);
      }),
      (e[13] = at))
    : (at = e[13]),
    h(`hotkey-window-home-composer-position-changed`, at));
  let st;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((st = (e) => {
        let t = m.current,
          n = g.current;
        if (!t || !n) return;
        let r = Ft(window.getComputedStyle(t).paddingBottom),
          i = t.getBoundingClientRect(),
          a = n.getBoundingClientRect(),
          o = a.top;
        if (e)
          for (let e of Lt)
            for (let t of document.querySelectorAll(e))
              o = Math.min(o, t.getBoundingClientRect().top);
        let s = {
            minimumComposerTopInsetPx: Math.max(0, Math.ceil(a.top - o)),
            restingComposerTopInsetPx: Math.ceil(
              Math.max(0, i.height - a.height - r),
            ),
          },
          c = ee.current;
        (c?.minimumComposerTopInsetPx === s.minimumComposerTopInsetPx &&
          c.restingComposerTopInsetPx === s.restingComposerTopInsetPx) ||
          ((ee.current = s), Ae.hotkeyWindowHotkeys?.homeLayoutChanged(s));
      }),
      (e[14] = st))
    : (st = e[14]);
  let ct = st,
    lt;
  (e[15] === y ? (lt = e[16]) : ((lt = [y]), (e[15] = y), (e[16] = lt)),
    (0, G.useEffect)(jt, lt));
  let ut, mt;
  (e[17] === De
    ? ((ut = e[18]), (mt = e[19]))
    : ((mt = () => {
        let e = null,
          t = () => {
            e ??= window.requestAnimationFrame(() => {
              ((e = null), ct(De));
            });
          },
          n = typeof ResizeObserver > `u` ? null : new ResizeObserver(t);
        return (
          g.current != null && n?.observe(g.current),
          t(),
          () => {
            (e != null && window.cancelAnimationFrame(e), n?.disconnect());
          }
        );
      }),
      (ut = [De]),
      (e[17] = De),
      (e[18] = ut),
      (e[19] = mt)),
    (0, G.useLayoutEffect)(mt, ut));
  let R;
  e[20] !== de || e[21] !== t
    ? ((R = (e) => {
        E(t, de, e);
      }),
      (e[20] = de),
      (e[21] = t),
      (e[22] = R))
    : (R = e[22]);
  let z = R,
    gt;
  e[23] === t
    ? (gt = e[24])
    : ((gt = (e) => {
        x(t, (t) => {
          t.asyncThreadStartingState = e;
        });
      }),
      (e[23] = t),
      (e[24] = gt));
  let yt = gt,
    xt = At,
    St;
  e[25] !== o.hash ||
  e[26] !== o.pathname ||
  e[27] !== o.search ||
  e[28] !== v ||
  e[29] !== s
    ? ((St = (e) => {
        let t = e ?? `~`,
          n = { ...v, prefillCwd: t };
        s(
          { pathname: o.pathname, search: o.search, hash: o.hash },
          { replace: !0, state: n },
        );
      }),
      (e[25] = o.hash),
      (e[26] = o.pathname),
      (e[27] = o.search),
      (e[28] = v),
      (e[29] = s),
      (e[30] = St))
    : (St = e[30]);
  let wt = St,
    B;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = (e) => {
        _.current === e.pointerId &&
          ((_.current = null),
          e.currentTarget.hasPointerCapture?.(e.pointerId) &&
            e.currentTarget.releasePointerCapture?.(e.pointerId),
          Ae.hotkeyWindowHotkeys?.homeDragEnd());
      }),
      (e[31] = B))
    : (B = e[31]);
  let Tt = B,
    V;
  e[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => {
        e.button === 0 &&
          (e.preventDefault(),
          (_.current = e.pointerId),
          e.currentTarget.setPointerCapture?.(e.pointerId),
          Ae.hotkeyWindowHotkeys?.homeDragStart({
            pointerWindowX: e.clientX,
            pointerWindowY: e.clientY,
          }));
      }),
      (e[32] = V))
    : (V = e[32]);
  let Et = V,
    H;
  e[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((H = (e) => {
        _.current === e.pointerId && Ae.hotkeyWindowHotkeys?.homeDragMove();
      }),
      (e[33] = H))
    : (H = e[33]);
  let Dt = H,
    U;
  if (
    e[34] !== I ||
    e[35] !== M ||
    e[36] !== D?.label ||
    e[37] !== D?.remotePath ||
    e[38] !== a ||
    e[39] !== O
  ) {
    let t =
      Ke(D?.remotePath ?? M, D?.label) ??
      a.formatMessage({
        id: `hotkeyWindow.home.placeholder.unknownProject`,
        defaultMessage: `this project`,
        description: `Fallback project name in the hotkey window composer placeholder`,
      });
    if (O) {
      let t;
      (e[41] === a
        ? (t = e[42])
        : ((t = a.formatMessage({
            id: `hotkeyWindow.home.placeholder.projectless`,
            defaultMessage: `Ask Codex anything locally`,
            description: `Hotkey window placeholder for projectless local mode`,
          })),
          (e[41] = a),
          (e[42] = t)),
        (U = t));
    } else if (I === `cloud`) {
      let t;
      (e[43] === a
        ? (t = e[44])
        : ((t = a.formatMessage({
            id: `hotkeyWindow.home.placeholder.cloud`,
            defaultMessage: `Ask Codex anything in the cloud`,
            description: `Hotkey window placeholder for cloud mode`,
          })),
          (e[43] = a),
          (e[44] = t)),
        (U = t));
    } else
      U =
        I === `worktree`
          ? a.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.worktree`,
                defaultMessage: `Ask Codex anything in a worktree in {project}`,
                description: `Hotkey window placeholder for worktree mode`,
              },
              { project: t },
            )
          : a.formatMessage(
              {
                id: `hotkeyWindow.home.placeholder.local`,
                defaultMessage: `Ask Codex anything locally in {project}`,
                description: `Hotkey window placeholder for local mode`,
              },
              { project: t },
            );
    ((e[34] = I),
      (e[35] = M),
      (e[36] = D?.label),
      (e[37] = D?.remotePath),
      (e[38] = a),
      (e[39] = O),
      (e[40] = U));
  } else U = e[40];
  let W;
  if (le) {
    let t;
    (e[45] === a
      ? (t = e[46])
      : ((t = a.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.loadingTooltip`,
          defaultMessage: `Loading project`,
          description: `Tooltip shown when the hotkey-window project is still loading`,
        })),
        (e[45] = a),
        (e[46] = t)),
      (W = t));
  } else if (O) {
    let t;
    (e[47] === a
      ? (t = e[48])
      : ((t = a.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.projectlessTooltip`,
          defaultMessage: `Projectless chats run locally`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled for projectless chats`,
        })),
        (e[47] = a),
        (e[48] = t)),
      (W = t));
  } else if (_e) {
    let t;
    (e[49] === a
      ? (t = e[50])
      : ((t = a.formatMessage({
          id: `hotkeyWindow.home.taskMenu.startIn.disabledTooltip`,
          defaultMessage: `Initialize a git repo to start in cloud or worktree mode`,
          description: `Tooltip shown when the hotkey-window start-in control is disabled because the project is not a git repo`,
        })),
        (e[49] = a),
        (e[50] = t)),
      (W = t));
  }
  let Rt;
  e[51] !== Ce ||
  e[52] !== j ||
  e[53] !== I ||
  e[54] !== M ||
  e[55] !== N ||
  e[56] !== yt ||
  e[57] !== Pe
    ? ((Rt =
        I === `worktree`
          ? (0, K.jsx)(dt, {
              startingState: Ce,
              setStartingState: yt,
              hostConfig: j,
              gitRootOverride: Pe ?? M,
              branchSource: `worktree`,
            })
          : N == null
            ? null
            : (0, K.jsx)(ft, {
                gitRoot: N,
                hostConfig: j,
                localConversationId: null,
                shouldShow: !0,
              })),
      (e[51] = Ce),
      (e[52] = j),
      (e[53] = I),
      (e[54] = M),
      (e[55] = N),
      (e[56] = yt),
      (e[57] = Pe),
      (e[58] = Rt))
    : (Rt = e[58]);
  let zt = Rt,
    Bt;
  e[59] === a
    ? (Bt = e[60])
    : ((Bt = a.formatMessage({
        id: `hotkeyWindow.home.taskMenu.label`,
        defaultMessage: `Task settings`,
        description: `Accessible label for the hotkey window task settings menu`,
      })),
      (e[59] = a),
      (e[60] = Bt));
  let Vt = Bt,
    Ht,
    Ut;
  e[61] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ht = pe(
        Ot.home,
        `relative h-full w-full overflow-hidden bg-transparent pb-1`,
      )),
      (Ut = (0, K.jsx)(qe, {})),
      (e[61] = Ht),
      (e[62] = Ut))
    : ((Ht = e[61]), (Ut = e[62]));
  let Wt = it && `no-drag`,
    Gt;
  e[63] === Wt
    ? (Gt = e[64])
    : ((Gt = pe(
        Ot.homeShell,
        `absolute inset-x-1 bottom-1 px-[15px] pb-[13px] pt-[17px]`,
        Wt,
      )),
      (e[63] = Wt),
      (e[64] = Gt));
  let Kt;
  e[65] === Ze
    ? (Kt = e[66])
    : ((Kt = Ze == null ? void 0 : { bottom: `auto`, top: Ze }),
      (e[65] = Ze),
      (e[66] = Kt));
  let qt;
  e[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((qt = (0, K.jsx)(`div`, {
        className: Ot.shellUnderlay,
        "aria-hidden": `true`,
        onLostPointerCapture: Tt,
        onPointerCancel: Tt,
        onPointerDown: Et,
        onPointerMove: Dt,
        onPointerUp: Tt,
      })),
      (e[67] = qt))
    : (qt = e[67]);
  let Jt = !O && !le,
    Yt;
  e[68] !== I || e[69] !== z || e[70] !== P || e[71] !== Jt
    ? ((Yt = (0, K.jsx)(bt, {
        composerMode: I,
        enabled: Jt,
        setComposerMode: z,
        showWorktree: P,
      })),
      (e[68] = I),
      (e[69] = z),
      (e[70] = P),
      (e[71] = Jt),
      (e[72] = Yt))
    : (Yt = e[72]);
  let q;
  e[73] === Vt
    ? (q = e[74])
    : ((q = (0, K.jsx)(se, {
        asChild: !0,
        children: (0, K.jsx)(Le, { label: Vt, size: `composer` }),
      })),
      (e[73] = Vt),
      (e[74] = q));
  let Xt;
  e[75] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Xt = (0, K.jsx)(L, {
        id: `hotkeyWindow.home.taskMenu.project`,
        defaultMessage: `Project`,
        description: `Label for the hotkey window project row`,
      })),
      (e[75] = Xt))
    : (Xt = e[75]);
  let Zt = O ? null : (D?.id ?? M ?? void 0),
    J;
  e[76] !== wt || e[77] !== Zt
    ? ((J = (0, K.jsx)(Pt, {
        label: Xt,
        control: (0, K.jsx)(Ne, {
          activeProjectIdOverride: Zt,
          allowRemoteProjects: !1,
          onWorkspaceRootSelected: wt,
        }),
      })),
      (e[76] = wt),
      (e[77] = Zt),
      (e[78] = J))
    : (J = e[78]);
  let Qt;
  e[79] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Qt = (0, K.jsx)(L, {
        id: `hotkeyWindow.home.taskMenu.startIn`,
        defaultMessage: `Start in`,
        description: `Label for the hotkey window mode row on the home page`,
      })),
      (e[79] = Qt))
    : (Qt = e[79]);
  let $t = F.isCloudAvailable && u === `enabled`,
    Y;
  e[80] !== I || e[81] !== z || e[82] !== P || e[83] !== W || e[84] !== $t
    ? ((Y = (0, K.jsx)(Pt, {
        label: Qt,
        control: (0, K.jsx)(ht, {
          canUseCloud: $t,
          composerMode: I,
          setComposerMode: z,
          showLabel: !0,
          disabledTooltipText: W,
          showWorktree: P,
        }),
      })),
      (e[80] = I),
      (e[81] = z),
      (e[82] = P),
      (e[83] = W),
      (e[84] = $t),
      (e[85] = Y))
    : (Y = e[85]);
  let X;
  e[86] !== I ||
  e[87] !== Ve ||
  e[88] !== Be ||
  e[89] !== He ||
  e[90] !== Ue ||
  e[91] !== ze
    ? ((X =
        I === `worktree`
          ? (0, K.jsx)(Pt, {
              label: (0, K.jsx)(L, {
                id: `hotkeyWindow.home.taskMenu.environment`,
                defaultMessage: `Environment`,
                description: `Label for the hotkey window environment row`,
              }),
              control: (0, K.jsx)(ot, {
                environments: ze,
                isLoading: Be,
                hasError: Ve != null,
                selectedConfigPath: He,
                onSelectConfigPath: Ue,
                onOpenSettings: kt,
              }),
            })
          : null),
      (e[86] = I),
      (e[87] = Ve),
      (e[88] = Be),
      (e[89] = He),
      (e[90] = Ue),
      (e[91] = ze),
      (e[92] = X))
    : (X = e[92]);
  let Z;
  e[93] === zt
    ? (Z = e[94])
    : ((Z = zt
        ? (0, K.jsx)(Pt, {
            label: (0, K.jsx)(L, {
              id: `hotkeyWindow.home.taskMenu.branch`,
              defaultMessage: `Branch`,
              description: `Label for the hotkey window branch row`,
            }),
            control: zt,
          })
        : null),
      (e[93] = zt),
      (e[94] = Z));
  let Q;
  e[95] === I
    ? (Q = e[96])
    : ((Q =
        I === `cloud`
          ? null
          : (0, K.jsx)(We, {
              conversationId: null,
              hostId: Ee,
              DropdownContainer: Nt,
            })),
      (e[95] = I),
      (e[96] = Q));
  let $;
  e[97] !== J || e[98] !== Y || e[99] !== X || e[100] !== Z || e[101] !== Q
    ? (($ = (0, K.jsx)(he, {
        align: `center`,
        side: `top`,
        sideOffset: 10,
        className: `no-drag w-auto min-w-[320px] rounded-3xl p-0`,
        children: (0, K.jsxs)(`div`, {
          className: `flex flex-col gap-4 p-3`,
          children: [J, Y, X, Z, Q],
        }),
      })),
      (e[97] = J),
      (e[98] = Y),
      (e[99] = X),
      (e[100] = Z),
      (e[101] = Q),
      (e[102] = $))
    : ($ = e[102]);
  let en;
  return (
    e[103] !== Ge || e[104] !== q || e[105] !== $
      ? ((en = (0, K.jsxs)(ue, {
          open: Ge,
          onOpenChange: Xe,
          children: [q, $],
        })),
        (e[103] = Ge),
        (e[104] = q),
        (e[105] = $),
        (e[106] = en))
      : (en = e[106]),
    (0, K.jsxs)(`div`, {
      ref: m,
      className: Ht,
      children: [
        Ut,
        (0, K.jsxs)(`div`, {
          ref: g,
          className: Gt,
          style: Kt,
          children: [
            qt,
            Yt,
            (0, K.jsx)(`div`, {
              className: `no-drag relative`,
              children: (0, K.jsx)(tt, {
                showWorkspaceDropdownInFooter: !1,
                showExternalFooter: !1,
                surfaceClassName: Ot.composerSurface,
                composerModeAvailability: F,
                placeholderText: U,
                defaultCwd: O ? `~` : void 0,
                hotkeyWindowHomeFooterControls: en,
                onLocalConversationCreated: xt,
              }),
            }),
          ],
        }),
      ],
    })
  );
}
function kt() {
  m.dispatchMessage(`show-settings`, { section: `local-environments` });
}
function At(e) {
  Ae.hotkeyWindowHotkeys?.open({ path: a(e) });
}
function jt() {
  _();
}
function Mt(e) {
  Ae.hotkeyWindowHotkeys?.homePointerInteractionChanged({ isInteractive: e });
}
function Nt(e) {
  let t = (0, It.c)(3),
    { children: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, K.jsx)(L, {
        id: `hotkeyWindow.home.taskMenu.permissions`,
        defaultMessage: `Permissions`,
        description: `Label for the hotkey window permissions row`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  return (
    t[1] === n
      ? (i = t[2])
      : ((i = (0, K.jsx)(Pt, { label: r, control: n })),
        (t[1] = n),
        (t[2] = i)),
    i
  );
}
function Pt(e) {
  let t = (0, It.c)(7),
    { label: n, control: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (0, K.jsx)(`div`, {
        className: `shrink-0 text-sm font-medium text-token-foreground`,
        children: n,
      })),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] === r
    ? (a = t[3])
    : ((a = (0, K.jsx)(`div`, { className: `min-w-0`, children: r })),
      (t[2] = r),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, K.jsxs)(`div`, {
          className: `flex items-center justify-between gap-4`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
function Ft(e) {
  return Number.parseFloat(e) || 0;
}
var It, G, K, Lt;
e(() => {
  ((It = u()),
    le(),
    s(),
    o(),
    (G = t(l(), 1)),
    F(),
    je(),
    He(),
    ze(),
    fe(),
    lt(),
    Qe(),
    ut(),
    it(),
    ne(),
    ie(),
    y(),
    gt(),
    Me(),
    Ge(),
    et(),
    at(),
    xe(),
    D(),
    Ue(),
    c(),
    A(),
    De(),
    T(),
    Pe(),
    ve(),
    Ce(),
    I(),
    Ve(),
    Be(),
    yt(),
    St(),
    mt(),
    Tt(),
    U(),
    (K = d()),
    (Lt = [
      `[data-composer-overlay-floating-ui]`,
      `[data-above-composer-portal] > *`,
    ]));
})();
export { W as HotkeyWindowHomePage };
//# sourceMappingURL=hotkey-window-home-page-HuAbYFeH.js.map
