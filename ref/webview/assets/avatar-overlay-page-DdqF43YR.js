import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Go as i,
  Ko as a,
  Vo as o,
  _ as s,
  _c as c,
  gc as l,
  lc as u,
  qo as d,
  v as f,
  y as p,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Lc as m,
  Rc as h,
  Ug as g,
  Wg as _,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Dm as v,
  Dp as y,
  Em as b,
  Ep as x,
  Jd as S,
  Om as ee,
  Qm as te,
  Ss as C,
  Tm as w,
  Xm as T,
  fh as E,
  hh as D,
  ic as O,
  ih as k,
  mf as ne,
  mh as A,
  oh as re,
  ph as j,
  sc as ie,
  xp as M,
  xs as N,
  yp as P,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Ay as F,
  Dm as I,
  Eu as L,
  Ey as R,
  Fy as ae,
  Hl as oe,
  Iy as z,
  Kp as se,
  M as ce,
  N as B,
  Om as V,
  Py as le,
  Qp as ue,
  Rl as de,
  Tm as fe,
  Tu as H,
  Ty as pe,
  Vl as me,
  Vy as he,
  et as ge,
  ku as U,
  ry as _e,
  ty as W,
  vg as ve,
  wm as ye,
  yg as G,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  gt as K,
  ht as be,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import { n as xe, t as q } from "./avatar-mascot-button-CdmzjmYy.js";
import {
  i as J,
  r as Se,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~thread-app-shell-ch~ecjwgenq-_p4PfxvN.js";
import {
  D as Ce,
  y as we,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  am as Te,
  gp as Ee,
  hp as De,
  im as Oe,
  om as ke,
  rm as Y,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  T as Ae,
  w as je,
} from "./app-initial~app-main~projects-index-page~local-conversation-page-HgUkvfGN.js";
import {
  _ as Me,
  a as Ne,
  c as Pe,
  d as Fe,
  f as Ie,
  g as Le,
  h as Re,
  i as ze,
  l as Be,
  m as Ve,
  n as He,
  o as Ue,
  r as We,
  s as Ge,
  t as Ke,
  u as qe,
  v as Je,
  y as Ye,
} from "./avatar-overlay-pill-dismiss-button-Br8FWkZZ.js";
import {
  n as Xe,
  t as Ze,
} from "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g-DsW4BsRC.js";
import {
  n as Qe,
  t as $e,
} from "./use-floating-window-pointer-interactivity-JdCkcjJn.js";
import { n as et, t as tt } from "./avatar-overlay-debug-state-WM6He6by.js";
import {
  a as nt,
  c as rt,
  d as it,
  i as at,
  l as ot,
  n as st,
  o as ct,
  r as lt,
  s as ut,
  t as dt,
  u as ft,
} from "./use-avatar-overlay-selection-CUecA6qh.js";
function pt({
  avatar: e,
  avatarMenuItems: t,
  interactiveRegionRef: n,
  isDragging: r = !1,
  isNotificationTrayOpen: i = !0,
  restrictedSurface: a,
  layout: o,
  mascotLayout: s = o.mascot,
  mascotStyle: c,
  mascotDragState: l,
  mascotResizeHandle: u,
  notifications: d,
  onLostPointerCapture: f,
  onCloseNotificationTray: p,
  onPointerCancel: m,
  onPointerDown: h,
  onPointerMove: _,
  onPointerUp: v,
  onDismissNotification: y,
  onRunNotificationAction: b,
  onSubmitQuestionOption: x,
  onNotificationReplyEditorActiveChange: S,
  onOpenNotificationReply: ee,
  onSubmitNotificationReply: C,
  onOpenNotificationTray: w,
}) {
  let T = he(),
    D = te(),
    O = Le(d[0]),
    ne = d.length > 0,
    re = a?.phase ?? `inactive`,
    j = Pe(a?.isSessionActive ?? !1, re !== `inactive`),
    ie = j === `voice-orb`,
    M = j === `hidden`,
    N = j === `pet` ? s : { ...s, height: 121, width: 112 },
    P = ne && i;
  a?.controlsHovered;
  let F = a?.caption ?? null,
    I = P || F != null,
    L = ne || I,
    R = o.placement.startsWith(`top`),
    ae = o.placement.endsWith(`end`),
    oe = d.length > Bt,
    z = o.tray == null ? void 0 : Math.max(0, o.tray.height),
    se = `${R ? `bottom` : `top`} ${ae ? `right` : `left`}`,
    ce;
  P
    ? (ce = {
        ariaLabel: T.formatMessage(Q.collapseNotificationTray),
        backgroundColor: `var(--color-token-bg-primary)`,
        content: (0, Z.jsx)(E, { className: `icon-xs opacity-80` }),
        foregroundColor: `var(--color-token-text-secondary)`,
        isIconOnly: !0,
        onClick: p,
      })
    : ne &&
      (ce = {
        ariaLabel: T.formatMessage(
          {
            id: `avatarOverlay.toggleNotificationTray`,
            defaultMessage: `Open activity tray, {count, plural, one {# item} other {# items}}`,
            description: `Accessible label for the floating avatar activity count button`,
          },
          { count: d.length },
        ),
        backgroundColor: O.badgeBackgroundColor,
        content: d.length,
        foregroundColor: O.badgeForegroundColor,
        onClick: w,
      });
  let B = (0, Z.jsx)(q, {
    ariaLabel: T.formatMessage(Q.mascotLabel, { petName: e.displayName }),
    assetRef: e.assetRef,
    spritesheetUrl: e.spritesheetUrl,
    notificationBadge: ce,
    resizeHandle:
      u == null ? void 0 : { ariaLabel: T.formatMessage(Q.resizeMascot), ...u },
    state: O.mascotState,
    style: c,
    transientState: l,
  });
  return (0, Z.jsx)(`main`, {
    className: `relative h-screen w-screen overflow-hidden bg-transparent`,
    children: (0, Z.jsxs)(`section`, {
      ref: n,
      "data-avatar-overlay-content-frame": `true`,
      className: `relative h-full w-full cursor-grab active:cursor-grabbing`,
      onLostPointerCapture: f,
      onPointerCancel: m,
      onPointerDown: h,
      onPointerMove: _,
      onPointerUp: v,
      children: [
        L
          ? (0, Z.jsx)(`div`, {
              "aria-hidden": I ? void 0 : !0,
              "data-avatar-overlay-hit-region": `notification-tray`,
              inert: !I,
              className: A(
                `absolute flex cursor-interaction text-sm text-token-foreground`,
                R ? `items-end` : `items-start`,
              ),
              style: {
                height: o.tray?.height,
                left: o.tray?.left,
                pointerEvents: I ? void 0 : `none`,
                top: o.tray?.top,
                visibility: o.tray == null ? `hidden` : void 0,
                width: o.tray?.width,
              },
              children: (0, Z.jsxs)(k.div, {
                animate: {
                  opacity: I ? 1 : 0,
                  scale: I || D ? 1 : 0.97,
                  y: I || D ? 0 : 8,
                },
                className: `relative w-full overflow-hidden [corner-shape:var(--codex-corner-shape)]`,
                "data-avatar-overlay-size": `notification-tray`,
                initial: !1,
                style: oe
                  ? { maxHeight: z, transformOrigin: se }
                  : { transformOrigin: se },
                transition: D
                  ? { duration: 0 }
                  : { damping: 26, mass: 0.8, stiffness: 360, type: `spring` },
                children: [
                  (0, Z.jsx)(`div`, {
                    className: `h-0 overflow-hidden`,
                    "data-avatar-overlay-size": `notification-tray-header`,
                  }),
                  (0, Z.jsx)(`div`, {
                    children: (0, Z.jsx)(mt, {
                      areNotificationsVisible: P,
                      isTrayAboveMascot: R,
                      isNotificationTrayVisible: I,
                      notifications: d,
                      prefersReducedMotion: !!D,
                      restrictedCaption: F,
                      trayMaxHeight: z,
                      onDismissNotification: y,
                      onRunNotificationAction: b,
                      onSubmitQuestionOption: x,
                      onNotificationReplyEditorActiveChange: S,
                      onOpenNotificationReply: ee,
                      onSubmitNotificationReply: C,
                    }),
                  }),
                ],
              }),
            })
          : null,
        (0, Z.jsx)(g, {
          items: t,
          children: (0, Z.jsx)(`div`, {
            "data-avatar-overlay-hit-region": M ? void 0 : `mascot`,
            className: A(
              `group absolute duration-[160ms] ease-out [@media(prefers-reduced-motion:reduce)]:transition-none`,
              M && `pointer-events-none`,
              r && !ie ? `scale-95 transition-transform` : `transition-none`,
            ),
            style: {
              height: N.height,
              left: N.left,
              top: N.top,
              width: N.width,
            },
            children: B,
          }),
        }),
      ],
    }),
  });
}
function mt(e) {
  let t = (0, zt.c)(67),
    {
      areNotificationsVisible: n,
      isTrayAboveMascot: r,
      isNotificationTrayVisible: i,
      notifications: a,
      onDismissNotification: o,
      onNotificationReplyEditorActiveChange: s,
      onOpenNotificationReply: c,
      onRunNotificationAction: l,
      onSubmitQuestionOption: u,
      onSubmitNotificationReply: d,
      prefersReducedMotion: f,
      restrictedCaption: m,
      trayMaxHeight: h,
    } = e,
    g = he(),
    _ = (0, X.useRef)(null),
    v;
  t[0] !== g || t[1] !== a
    ? ((v = ct(a, g)), (t[0] = g), (t[1] = a), (t[2] = v))
    : (v = t[2]);
  let y = v,
    b = m == null ? `` : `caption`,
    x = r ? `tray-above` : `tray-below`,
    S;
  t[3] !== y || t[4] !== b || t[5] !== x
    ? ((S = [y, b, x]), (t[3] = y), (t[4] = b), (t[5] = x), (t[6] = S))
    : (S = t[6]);
  let ee = S.join(`\0`),
    te = a.length > Bt,
    C = Math.max(0, a.length - Bt),
    w;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = {
        hasScrollableContent: !1,
        hasLatestNotificationsAbove: !1,
        hiddenOlderNotificationCount: 0,
      }),
      (t[7] = w))
    : (w = t[7]);
  let [T, E] = (0, X.useState)(w),
    [D, O] = (0, X.useState)(null),
    ne = (0, X.useRef)(null),
    j;
  t[8] !== a || t[9] !== D
    ? ((j = a.some((e) => e.id === D) ? D : null),
      (t[8] = a),
      (t[9] = D),
      (t[10] = j))
    : (j = t[10]);
  let ie = j,
    M = ie != null && n,
    N,
    P;
  (t[11] !== M || t[12] !== s
    ? ((N = () => {
        if (M)
          return (
            s?.(!0),
            () => {
              s?.(!1);
            }
          );
      }),
      (P = [M, s]),
      (t[11] = M),
      (t[12] = s),
      (t[13] = N),
      (t[14] = P))
    : ((N = t[13]), (P = t[14])),
    (0, X.useEffect)(N, P));
  let F, I;
  (t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = () => {
        ne.current?.focus();
      }),
      (F = []),
      (t[15] = F),
      (t[16] = I))
    : ((F = t[15]), (I = t[16])),
    p(`avatar-overlay-keyboard-interaction-ready`, I, F));
  let L = Math.min(T.hiddenOlderNotificationCount, C),
    R = T.hasScrollableContent,
    ae = n && R && te && T.hasLatestNotificationsAbove,
    oe = n && R && te && L > 0,
    z = n && R && te,
    se = n && R,
    ce = a.length > 0,
    B = ce && te,
    V;
  t[17] === f
    ? (V = t[18])
    : ((V = f ? { duration: 0 } : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }),
      (t[17] = f),
      (t[18] = V));
  let le = V,
    ue;
  t[19] !== f || t[20] !== m || t[21] !== se
    ? ((ue =
        m == null
          ? null
          : (0, Z.jsx)(
              ht,
              { prefersReducedMotion: f, shouldInsetForScrollbar: se, text: m },
              `restricted-caption`,
            )),
      (t[19] = f),
      (t[20] = m),
      (t[21] = se),
      (t[22] = ue))
    : (ue = t[22]);
  let de = ue,
    fe;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (e) => {
        E((t) => {
          let n = kt(e);
          return At(t, n) ? t : n;
        });
      }),
      (t[23] = fe))
    : (fe = t[23]);
  let H = fe,
    pe;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((pe = (e) => {
        ((_.current = e), e != null && H(e));
      }),
      (t[24] = pe))
    : (pe = t[24]);
  let me = pe,
    ge;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ge = () => {
        let e = _.current;
        if (e == null) return;
        H(e);
        let t = window.requestAnimationFrame(() => {
            H(e);
          }),
          n = new ResizeObserver(() => {
            H(e);
          });
        return (
          n.observe(e),
          () => {
            (window.cancelAnimationFrame(t), n.disconnect());
          }
        );
      }),
      (t[25] = ge))
    : (ge = t[25]);
  let U;
  (t[26] !== ee || t[27] !== h
    ? ((U = [ee, h, H]), (t[26] = ee), (t[27] = h), (t[28] = U))
    : (U = t[28]),
    (0, X.useLayoutEffect)(ge, U));
  let _e;
  t[29] === f
    ? (_e = t[30])
    : ((_e = () => {
        let e = _.current;
        e != null &&
          (e.scrollTo({ behavior: f ? `auto` : `smooth`, top: 0 }),
          E(kt(e, 0)));
      }),
      (t[29] = f),
      (t[30] = _e));
  let W = _e,
    ve;
  t[31] !== L || t[32] !== f
    ? ((ve = () => {
        let e = _.current;
        if (e == null) return;
        let t = vt(e, L);
        (e.scrollTo({ behavior: f ? `auto` : `smooth`, top: t }), E(kt(e, t)));
      }),
      (t[31] = L),
      (t[32] = f),
      (t[33] = ve))
    : (ve = t[33]);
  let ye = ve,
    G = de != null && `gap-1.5`,
    K;
  t[34] === G
    ? (K = t[35])
    : ((K = A(`relative flex w-full min-w-0 flex-col overflow-hidden`, G)),
      (t[34] = G),
      (t[35] = K));
  let be;
  t[36] !== B || t[37] !== h
    ? ((be = B ? { height: h, maxHeight: h } : void 0),
      (t[36] = B),
      (t[37] = h),
      (t[38] = be))
    : (be = t[38]);
  let xe = r ? null : de,
    q;
  t[39] !== ie ||
  t[40] !== ae ||
  t[41] !== oe ||
  t[42] !== L ||
  t[43] !== g ||
  t[44] !== i ||
  t[45] !== a ||
  t[46] !== o ||
  t[47] !== c ||
  t[48] !== l ||
  t[49] !== d ||
  t[50] !== u ||
  t[51] !== f ||
  t[52] !== W ||
  t[53] !== ye ||
  t[54] !== z ||
  t[55] !== ce ||
  t[56] !== B ||
  t[57] !== le
    ? ((q = ce
        ? (0, Z.jsxs)(k.div, {
            layout: B,
            className: `relative min-h-0 min-w-0 flex-1`,
            transition: le,
            children: [
              (0, Z.jsx)(re, {
                children: ae
                  ? (0, Z.jsx)(
                      gt,
                      { prefersReducedMotion: f, onClick: W },
                      `latest`,
                    )
                  : null,
              }),
              (0, Z.jsx)(k.div, {
                ref: me,
                animate: { opacity: i ? 1 : 0, y: i || f ? 0 : 3 },
                "aria-label": g.formatMessage(Q.notificationList),
                className: A(
                  `scrollbar-on-hover flex h-full w-full min-w-0 flex-col gap-1.5 overflow-y-auto px-1.5 pt-1 pb-0 [--edge-fade-distance:0.75rem]`,
                  z && `vertical-scroll-fade-mask snap-y snap-mandatory`,
                ),
                "data-avatar-overlay-size": `notification-tray-list`,
                role: `list`,
                initial: !1,
                transition: f
                  ? { duration: 0 }
                  : { duration: 0.16, ease: `easeOut` },
                onScroll: (e) => {
                  let t = kt(e.currentTarget);
                  E((e) => (At(e, t) ? e : t));
                },
                children: a.map((e, t) =>
                  (0, Z.jsx)(
                    yt,
                    {
                      isReplying: ie === e.id,
                      notification: e,
                      notificationIndex: t,
                      onCloseReply: () => {
                        O((t) => (t === e.id ? null : t));
                      },
                      onDismissNotification: o,
                      onOpenReply: () => {
                        (c?.(e), O(e.id));
                      },
                      onRunNotificationAction: l,
                      onSubmitQuestionOption: u,
                      onSubmitNotificationReply: d,
                      prefersReducedMotion: f,
                      replyInputRef: ne,
                    },
                    e.id,
                  ),
                ),
              }),
              (0, Z.jsx)(re, {
                children: oe
                  ? (0, Z.jsx)(
                      _t,
                      { count: L, prefersReducedMotion: f, onClick: ye },
                      `older`,
                    )
                  : null,
              }),
            ],
          })
        : null),
      (t[39] = ie),
      (t[40] = ae),
      (t[41] = oe),
      (t[42] = L),
      (t[43] = g),
      (t[44] = i),
      (t[45] = a),
      (t[46] = o),
      (t[47] = c),
      (t[48] = l),
      (t[49] = d),
      (t[50] = u),
      (t[51] = f),
      (t[52] = W),
      (t[53] = ye),
      (t[54] = z),
      (t[55] = ce),
      (t[56] = B),
      (t[57] = le),
      (t[58] = q))
    : (q = t[58]);
  let J = r ? de : null,
    Se;
  return (
    t[59] !== B ||
    t[60] !== K ||
    t[61] !== be ||
    t[62] !== xe ||
    t[63] !== q ||
    t[64] !== J ||
    t[65] !== le
      ? ((Se = (0, Z.jsxs)(k.div, {
          layout: B,
          className: K,
          "data-avatar-overlay-size": `notification-tray-content`,
          style: be,
          transition: le,
          children: [xe, q, J],
        })),
        (t[59] = B),
        (t[60] = K),
        (t[61] = be),
        (t[62] = xe),
        (t[63] = q),
        (t[64] = J),
        (t[65] = le),
        (t[66] = Se))
      : (Se = t[66]),
    Se
  );
}
function ht(e) {
  let t = (0, zt.c)(17),
    { prefersReducedMotion: n, shouldInsetForScrollbar: r, text: i } = e,
    a = (0, X.useRef)(null),
    o;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = () => {
        let e = a.current;
        e != null && (e.scrollTop = e.scrollHeight);
      }),
      (t[0] = o))
    : (o = t[0]);
  let s;
  (t[1] === i ? (s = t[2]) : ((s = [i]), (t[1] = i), (t[2] = s)),
    (0, X.useLayoutEffect)(o, s));
  let c;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = { height: `auto`, opacity: 1 }), (t[3] = c))
    : (c = t[3]);
  let l = r && `[scrollbar-gutter:stable]`,
    u;
  t[4] === l
    ? (u = t[5])
    : ((u = A(
        `no-drag w-full min-w-0 shrink-0 overflow-hidden px-1.5 text-left`,
        l,
      )),
      (t[4] = l),
      (t[5] = u));
  let d;
  t[6] === n
    ? (d = t[7])
    : ((d = n ? !1 : { height: 0, opacity: 0 }), (t[6] = n), (t[7] = d));
  let f;
  t[8] === n
    ? (f = t[9])
    : ((f = n ? { duration: 0 } : { duration: 0.18, ease: [0.16, 1, 0.3, 1] }),
      (t[8] = n),
      (t[9] = f));
  let p;
  t[10] === i
    ? (p = t[11])
    : ((p = (0, Z.jsx)(`div`, {
        className: `relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary px-3 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]`,
        children: (0, Z.jsx)(`div`, {
          ref: a,
          className: `text-size-chat-sm h-12 overflow-hidden leading-4 break-words whitespace-pre-wrap text-token-foreground`,
          children: i,
        }),
      })),
      (t[10] = i),
      (t[11] = p));
  let m;
  return (
    t[12] !== u || t[13] !== d || t[14] !== f || t[15] !== p
      ? ((m = (0, Z.jsx)(k.div, {
          "aria-live": `polite`,
          animate: c,
          className: u,
          "data-avatar-overlay-size": `notification-tray-caption`,
          initial: d,
          role: `status`,
          transition: f,
          children: p,
        })),
        (t[12] = u),
        (t[13] = d),
        (t[14] = f),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function gt(e) {
  let t = (0, zt.c)(28),
    { onClick: n, prefersReducedMotion: r } = e,
    i = he(),
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = i.formatMessage(Q.showLatestNotifications)),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = { opacity: 1, scale: 1, x: `-50%` }), (t[2] = o))
    : (o = t[2]);
  let s = r ? 1 : 0.96,
    c;
  t[3] === s
    ? (c = t[4])
    : ((c = { opacity: 0, scale: s, x: `-50%` }), (t[3] = s), (t[4] = c));
  let l = r ? 1 : 0.96,
    u;
  t[5] === l
    ? (u = t[6])
    : ((u = { opacity: 0, scale: l, x: `-50%` }), (t[5] = l), (t[6] = u));
  let d;
  t[7] === r
    ? (d = t[8])
    : ((d = r ? { duration: 0 } : { duration: 0.14, ease: `easeOut` }),
      (t[7] = r),
      (t[8] = d));
  let f;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = A(qt, `top-1 min-w-12`)), (t[9] = f))
    : (f = t[9]);
  let p;
  t[10] === r
    ? (p = t[11])
    : ((p = r ? void 0 : { scale: 1.03 }), (t[10] = r), (t[11] = p));
  let m;
  t[12] === r
    ? (m = t[13])
    : ((m = r ? void 0 : { scale: 0.96 }), (t[12] = r), (t[13] = m));
  let h;
  t[14] === i
    ? (h = t[15])
    : ((h = i.formatMessage(Q.latestNotifications)), (t[14] = i), (t[15] = h));
  let g;
  t[16] === h
    ? (g = t[17])
    : ((g = (0, Z.jsx)(`span`, { children: h })), (t[16] = h), (t[17] = g));
  let _;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsx)(x, {
        className: `icon-2xs hidden -rotate-90 opacity-70 group-hover:block group-focus:block`,
      })),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  return (
    t[19] !== n ||
    t[20] !== a ||
    t[21] !== m ||
    t[22] !== g ||
    t[23] !== c ||
    t[24] !== u ||
    t[25] !== d ||
    t[26] !== p
      ? ((v = (0, Z.jsxs)(k.button, {
          type: `button`,
          "aria-label": a,
          "data-avatar-overlay-hit-region": `notification-scroll-control`,
          animate: o,
          exit: c,
          initial: u,
          transition: d,
          className: f,
          whileHover: p,
          whileTap: m,
          onClick: n,
          children: [g, _],
        })),
        (t[19] = n),
        (t[20] = a),
        (t[21] = m),
        (t[22] = g),
        (t[23] = c),
        (t[24] = u),
        (t[25] = d),
        (t[26] = p),
        (t[27] = v))
      : (v = t[27]),
    v
  );
}
function _t(e) {
  let t = (0, zt.c)(36),
    { count: n, onClick: r, prefersReducedMotion: i } = e,
    a = he(),
    o;
  t[0] !== n || t[1] !== a
    ? ((o = a.formatMessage(Q.showOlderNotifications, { count: n })),
      (t[0] = n),
      (t[1] = a),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = { opacity: 1, scale: 1, x: `-50%` }), (t[3] = s))
    : (s = t[3]);
  let c = i ? 1 : 0.96,
    l;
  t[4] === c
    ? (l = t[5])
    : ((l = { opacity: 0, scale: c, x: `-50%` }), (t[4] = c), (t[5] = l));
  let u = i ? 1 : 0.96,
    d;
  t[6] === u
    ? (d = t[7])
    : ((d = { opacity: 0, scale: u, x: `-50%` }), (t[6] = u), (t[7] = d));
  let f;
  t[8] === i
    ? (f = t[9])
    : ((f = i ? { duration: 0 } : { duration: 0.14, ease: `easeOut` }),
      (t[8] = i),
      (t[9] = f));
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = A(qt, `bottom-1 min-w-9`)), (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] === i
    ? (m = t[12])
    : ((m = i ? void 0 : { scale: 1.03 }), (t[11] = i), (t[12] = m));
  let h;
  t[13] === i
    ? (h = t[14])
    : ((h = i ? void 0 : { scale: 0.96 }), (t[13] = i), (t[14] = h));
  let g;
  t[15] !== n || t[16] !== a
    ? ((g = a.formatMessage(Q.compactOlderNotificationCount, { count: n })),
      (t[15] = n),
      (t[16] = a),
      (t[17] = g))
    : (g = t[17]);
  let _;
  t[18] === g
    ? (_ = t[19])
    : ((_ = (0, Z.jsx)(`span`, {
        className: `group-hover:hidden group-focus:hidden`,
        children: g,
      })),
      (t[18] = g),
      (t[19] = _));
  let v;
  t[20] !== n || t[21] !== a
    ? ((v = a.formatMessage(Q.olderNotificationCount, { count: n })),
      (t[20] = n),
      (t[21] = a),
      (t[22] = v))
    : (v = t[22]);
  let y;
  t[23] === v
    ? (y = t[24])
    : ((y = (0, Z.jsx)(`span`, {
        className: `hidden group-hover:inline group-focus:inline`,
        children: v,
      })),
      (t[23] = v),
      (t[24] = y));
  let b;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, Z.jsx)(x, {
        className: `icon-2xs hidden rotate-90 opacity-70 group-hover:block group-focus:block`,
      })),
      (t[25] = b))
    : (b = t[25]);
  let S;
  return (
    t[26] !== r ||
    t[27] !== o ||
    t[28] !== h ||
    t[29] !== _ ||
    t[30] !== y ||
    t[31] !== l ||
    t[32] !== d ||
    t[33] !== f ||
    t[34] !== m
      ? ((S = (0, Z.jsxs)(k.button, {
          type: `button`,
          "aria-label": o,
          "data-avatar-overlay-hit-region": `notification-scroll-control`,
          animate: s,
          exit: l,
          initial: d,
          transition: f,
          className: p,
          whileHover: m,
          whileTap: h,
          onClick: r,
          children: [_, y, b],
        })),
        (t[26] = r),
        (t[27] = o),
        (t[28] = h),
        (t[29] = _),
        (t[30] = y),
        (t[31] = l),
        (t[32] = d),
        (t[33] = f),
        (t[34] = m),
        (t[35] = S))
      : (S = t[35]),
    S
  );
}
function vt(e, t) {
  if (t <= Bt) return e.scrollHeight;
  let n = Ft(e);
  return n[Lt(n, It(e, n)) + Bt]?.offsetTop ?? e.scrollHeight;
}
function yt({
  isReplying: e,
  notification: t,
  notificationIndex: n,
  onDismissNotification: r,
  onCloseReply: a,
  onOpenReply: o,
  onRunNotificationAction: s,
  onSubmitQuestionOption: c,
  onSubmitNotificationReply: l,
  prefersReducedMotion: u,
  replyInputRef: d,
}) {
  let f = he(),
    p =
      t.source === `local` && t.usesLiveConversationState !== !1
        ? t.localConversationId
        : null,
    m = i(ge, p),
    h = m == null ? null : Fe(m.items, f),
    g = Le(t),
    _ = f.formatMessage(g.labelMessage),
    v = h ?? t.body ?? f.formatMessage(g.fallbackBodyMessage),
    y = t.waitingRequest,
    b = y == null ? v : Ve(y, f),
    S = b.replace(/[.?!]+$/, ``),
    ee = b === _ ? _ : `${_}. ${S}`,
    te =
      t.action == null
        ? `${t.title}. ${ee}`
        : `${t.title}. ${ee}. ${f.formatMessage(Q.openNotification)}`,
    C = t.action != null,
    T = t.kind !== `activity` && r != null,
    [E, D] = (0, X.useState)(!1),
    [O, ne] = (0, X.useState)(!1),
    [re, j] = (0, X.useState)(``),
    [ie, M] = (0, X.useState)(null),
    [N, F] = (0, X.useState)(!1),
    [I, L] = (0, X.useState)(0),
    [R, ae] = (0, X.useState)(!1),
    oe = (0, X.useRef)(E),
    z = (0, X.useRef)(void 0),
    se = y == null ? Ut : Wt,
    ce = (0, X.useCallback)((e) => {
      if ((z.current?.(), (z.current = void 0), e == null)) return;
      let t = () => {
        let t = e.scrollHeight;
        L((e) => (e === t ? e : t));
        let n = Nt(e);
        ae((e) => {
          let t = (oe.current && e) || n;
          return e === t ? e : t;
        });
      };
      (t(), (z.current = Je({ axis: `both`, target: e, onChange: t })));
    }, []);
  (0, X.useLayoutEffect)(() => {
    oe.current = E;
  }, [E]);
  let B = I > se + Kt || R,
    V = B && E && !e,
    le = t.controlTarget?.type === `app-server-conversation` && l != null,
    ue = re.trim(),
    de = u
      ? { duration: 0 }
      : { duration: N ? 0.2 : 0.28, ease: [0.16, 1, 0.3, 1] },
    fe = async (e) => {
      if (
        (e.preventDefault(),
        e.stopPropagation(),
        !(!le || ue.length === 0 || O))
      ) {
        (ne(!0), M(null));
        try {
          (await l(t, ue), j(``), a());
        } catch {
          M(f.formatMessage(Q.notificationReplyError));
        } finally {
          ne(!1);
        }
      }
    };
  return (0, Z.jsxs)(k.div, {
    animate: { opacity: 1, y: 0 },
    initial: { opacity: 0, y: u ? 0 : 4 },
    role: `listitem`,
    className: `group no-drag relative w-full min-w-0 snap-start scroll-mt-2 text-left`,
    "data-avatar-overlay-measure": `notification-tray-row`,
    transition: u
      ? { duration: 0 }
      : { delay: Math.min(n, 3) * Ht, duration: 0.18, ease: `easeOut` },
    onBlurCapture: (e) => {
      let t = e.relatedTarget;
      (t instanceof Node && e.currentTarget.contains(t)) || F(!1);
    },
    onFocusCapture: () => {
      F(!0);
    },
    onPointerEnter: () => {
      F(!0);
    },
    onPointerLeave: () => {
      F(!1);
    },
    children: [
      (0, Z.jsxs)(`div`, {
        className: A(
          `relative z-[1] overflow-hidden rounded-[18px] border border-token-border/60 bg-token-main-surface-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.42),inset_0_-1px_0_rgba(0,0,0,0.08)] backdrop-blur-xl forced-colors:bg-[Canvas]`,
          C &&
            `transition-[background-color,border-color,box-shadow] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:border-token-border/80 hover:bg-token-main-surface-primary hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.52),inset_0_-1px_0_rgba(0,0,0,0.1)] motion-reduce:transition-none`,
        ),
        children: [
          (0, Z.jsxs)(k.div, {
            role: C ? `button` : void 0,
            className: A(
              `block w-full min-w-0 py-1.5 pr-3 text-left focus-visible:outline-token-focus focus-visible:outline focus-visible:outline-offset-[-2px]`,
              T ? `pl-5` : `pl-3`,
              C ? `cursor-interaction` : `cursor-default`,
            ),
            tabIndex: C ? 0 : void 0,
            transition: u
              ? { duration: 0 }
              : { duration: 0.12, ease: `easeOut` },
            whileTap: C && !u ? { scale: 0.995 } : void 0,
            "aria-label": C ? te : void 0,
            onClick: () => {
              C && s?.(t);
            },
            onKeyDown: (e) => {
              !C ||
                (e.key !== `Enter` && e.key !== ` `) ||
                (e.preventDefault(), s?.(t));
            },
            children: [
              (0, Z.jsx)(`span`, {
                className: `flex min-w-0 items-center pr-7`,
                children: (0, Z.jsx)(`span`, {
                  className: A(
                    `text-size-chat min-w-0 truncate leading-[17px]`,
                    t.kind === `activity`
                      ? `text-token-text-secondary`
                      : `font-semibold text-token-foreground`,
                  ),
                  children: t.title,
                }),
              }),
              (0, Z.jsx)(k.div, {
                ref: ce,
                animate: { maxHeight: V ? Gt : se },
                className: A(
                  `text-size-chat-sm mt-0.5 overflow-hidden leading-4 text-token-foreground`,
                  t.kind === `activity` && `hidden`,
                  V
                    ? `whitespace-pre-wrap`
                    : y == null
                      ? `line-clamp-2`
                      : void 0,
                ),
                "data-avatar-overlay-measure-body": `true`,
                initial: !1,
                transition: u
                  ? { duration: 0 }
                  : { duration: 0.18, ease: `easeOut` },
                children:
                  y == null
                    ? v
                    : (0, Z.jsx)(bt, {
                        isExpanded: V,
                        localConversationId: p,
                        request: y,
                        onRunNotificationAction: (e) => {
                          s?.(t, e);
                        },
                        onSubmitQuestionOption: (e) => {
                          c?.(t, e);
                        },
                      }),
              }),
            ],
          }),
          (0, Z.jsx)(`span`, {
            role: `img`,
            "aria-label":
              y?.kind === `question`
                ? f.formatMessage(Q.questionStatusIcon)
                : _,
            className: A(
              `pointer-events-none absolute top-1 right-1 z-0 flex size-6 items-center justify-center opacity-100`,
              B &&
                N &&
                `opacity-0 transition-opacity duration-150 motion-reduce:transition-none`,
            ),
            children:
              y?.kind === `question`
                ? (0, Z.jsx)(je, { className: g.iconClassName })
                : Rt(g),
          }),
          B
            ? (0, Z.jsx)(k.div, {
                animate: { opacity: N ? 1 : 0, x: N ? 0 : 6 },
                className: A(
                  `absolute top-1 right-1 z-10`,
                  N ? `pointer-events-auto` : `pointer-events-none`,
                ),
                "data-avatar-overlay-control": `expand`,
                initial: !1,
                transition: de,
                children: (0, Z.jsx)(P, {
                  align: `end`,
                  side: `top`,
                  tooltipContent: f.formatMessage(
                    E
                      ? Q.collapseNotificationTooltip
                      : Q.expandNotificationTooltip,
                  ),
                  children: (0, Z.jsx)(w, {
                    className: A(`size-6`, Jt),
                    color: `ghost`,
                    size: `icon`,
                    "aria-expanded": E,
                    "aria-label": f.formatMessage(
                      E ? Q.collapseNotification : Q.expandNotification,
                      { title: t.title },
                    ),
                    onClick: () => {
                      D((e) => !e);
                    },
                    children: (0, Z.jsx)(k.span, {
                      animate: { rotate: E ? 90 : 0 },
                      transition: u
                        ? { duration: 0 }
                        : { duration: 0.12, ease: `easeOut` },
                      children: (0, Z.jsx)(x, { className: `icon-xs` }),
                    }),
                  }),
                }),
              })
            : null,
          le && !e
            ? (0, Z.jsx)(k.div, {
                animate: { opacity: N ? 1 : 0, x: N ? 0 : 6 },
                className: A(
                  `no-drag absolute right-2 bottom-1 z-10`,
                  N ? `pointer-events-auto` : `pointer-events-none`,
                ),
                "data-avatar-overlay-control": `reply`,
                initial: !1,
                transition: de,
                children: (0, Z.jsx)(`div`, {
                  className: `flex justify-end pb-1`,
                  children: (0, Z.jsx)(w, {
                    className: A(
                      `h-5 px-2 text-xs leading-none text-token-foreground shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)]`,
                      Jt,
                    ),
                    color: `outline`,
                    size: `default`,
                    "aria-label": f.formatMessage(Q.replyNotification, {
                      title: t.title,
                    }),
                    onClick: (e) => {
                      (e.stopPropagation(), M(null), j(``), o(), F(!0));
                    },
                    onPointerDown: (e) => {
                      e.stopPropagation();
                    },
                    children: f.formatMessage(Q.replyNotificationButton),
                  }),
                }),
              })
            : null,
          e
            ? (0, Z.jsxs)(k.form, {
                className: `no-drag mx-3 mb-2 border-t border-token-border/60 pt-2`,
                animate: { opacity: 1, y: 0 },
                initial: { opacity: 0, y: u ? 0 : -2 },
                transition: u
                  ? { duration: 0 }
                  : { duration: 0.16, ease: `easeOut` },
                onClick: (e) => {
                  e.stopPropagation();
                },
                onPointerDown: (e) => {
                  e.stopPropagation();
                },
                onSubmit: (e) => {
                  fe(e);
                },
                children: [
                  (0, Z.jsxs)(`div`, {
                    className: `flex min-w-0 items-center gap-1.5`,
                    children: [
                      (0, Z.jsx)(`input`, {
                        ref: d,
                        className: `text-size-chat-sm h-6 min-w-0 flex-1 rounded-md border border-token-border bg-token-main-surface-primary px-2 text-token-foreground outline-none placeholder:text-token-text-tertiary focus:border-token-focus-border`,
                        "aria-label": f.formatMessage(Q.replyNotification, {
                          title: t.title,
                        }),
                        autoFocus: !0,
                        placeholder: f.formatMessage(
                          Q.notificationReplyPlaceholder,
                        ),
                        value: re,
                        onChange: (e) => {
                          (j(e.currentTarget.value), M(null));
                        },
                        onKeyDown: (e) => {
                          e.key !== `Escape` ||
                            O ||
                            (e.stopPropagation(), a(), M(null));
                        },
                      }),
                      (0, Z.jsx)(w, {
                        className: `h-6 px-2 text-xs`,
                        color: `primary`,
                        size: `default`,
                        type: `submit`,
                        "aria-label": f.formatMessage(Q.sendNotificationReply, {
                          title: t.title,
                        }),
                        disabled: ue.length === 0 || O,
                        loading: O,
                        children: f.formatMessage(Q.replyNotificationButton),
                      }),
                    ],
                  }),
                  ie == null
                    ? null
                    : (0, Z.jsx)(`div`, {
                        className: `mt-1 text-[11px] leading-4 text-token-error-foreground`,
                        role: `alert`,
                        children: ie,
                      }),
                ],
              })
            : null,
        ],
      }),
      T && !e
        ? (0, Z.jsx)(`div`, {
            className: A(
              `absolute -top-1 -left-1 z-20`,
              N
                ? `pointer-events-auto opacity-100`
                : `pointer-events-none opacity-0`,
            ),
            "data-avatar-overlay-control": `dismiss`,
            children: (0, Z.jsx)(P, {
              align: `start`,
              side: `top`,
              tooltipContent: f.formatMessage(Q.dismissNotificationTooltip),
              children: (0, Z.jsx)(Ke, {
                ariaLabel: f.formatMessage(Q.dismissNotification, {
                  title: t.title,
                }),
                onClick: () => {
                  r?.(t);
                },
              }),
            }),
          })
        : null,
    ],
  });
}
function bt(e) {
  let t = (0, zt.c)(72),
    {
      isExpanded: n,
      localConversationId: r,
      onRunNotificationAction: i,
      onSubmitQuestionOption: a,
      request: o,
    } = e,
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (e) => {
        `questionOption` in e || i(e);
      }),
      (t[0] = i),
      (t[1] = s));
  let c = s;
  switch (o.kind) {
    case `question`: {
      let e = n ? `break-words whitespace-pre-wrap` : `truncate`,
        r;
      t[2] === e ? (r = t[3]) : ((r = A(`min-w-0`, e)), (t[2] = e), (t[3] = r));
      let s;
      t[4] !== o.prompt || t[5] !== r
        ? ((s = (0, Z.jsx)(`div`, { className: r, children: o.prompt })),
          (t[4] = o.prompt),
          (t[5] = r),
          (t[6] = s))
        : (s = t[6]);
      let c;
      t[7] === o.options
        ? (c = t[8])
        : ((c = o.options.map(xt)), (t[7] = o.options), (t[8] = c));
      let l;
      t[9] !== i || t[10] !== a
        ? ((l = (e) => {
            if (`questionOption` in e) {
              a?.(e.questionOption);
              return;
            }
            i(e);
          }),
          (t[9] = i),
          (t[10] = a),
          (t[11] = l))
        : (l = t[11]);
      let u;
      t[12] !== c || t[13] !== l
        ? ((u = (0, Z.jsx)(Et, { actions: c, onRunNotificationAction: l })),
          (t[12] = c),
          (t[13] = l),
          (t[14] = u))
        : (u = t[14]);
      let d;
      return (
        t[15] !== s || t[16] !== u
          ? ((d = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `question`,
              children: [s, u],
            })),
            (t[15] = s),
            (t[16] = u),
            (t[17] = d))
          : (d = t[17]),
        d
      );
    }
    case `patch`: {
      let e;
      t[18] !== n ||
      t[19] !== o.additions ||
      t[20] !== o.deletions ||
      t[21] !== o.fileCount ||
      t[22] !== o.files ||
      t[23] !== o.summary
        ? ((e = (0, Z.jsx)(wt, {
            additions: o.additions,
            deletions: o.deletions,
            fileCount: o.fileCount,
            files: o.files,
            isExpanded: n,
            summary: o.summary,
          })),
          (t[18] = n),
          (t[19] = o.additions),
          (t[20] = o.deletions),
          (t[21] = o.fileCount),
          (t[22] = o.files),
          (t[23] = o.summary),
          (t[24] = e))
        : (e = t[24]);
      let r;
      t[25] !== o.actions || t[26] !== c
        ? ((r = (0, Z.jsx)(Et, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[25] = o.actions),
          (t[26] = c),
          (t[27] = r))
        : (r = t[27]);
      let i;
      return (
        t[28] !== e || t[29] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `patch`,
              children: [e, r],
            })),
            (t[28] = e),
            (t[29] = r),
            (t[30] = i))
          : (i = t[30]),
        i
      );
    }
    case `plan`: {
      let e;
      return (
        t[31] !== n || t[32] !== r || t[33] !== o || t[34] !== c
          ? ((e = (0, Z.jsx)(St, {
              isExpanded: n,
              localConversationId: r,
              onRunNotificationAction: c,
              request: o,
            })),
            (t[31] = n),
            (t[32] = r),
            (t[33] = o),
            (t[34] = c),
            (t[35] = e))
          : (e = t[35]),
        e
      );
    }
    case `exec`: {
      let e;
      t[36] !== n || t[37] !== o.summary
        ? ((e = (0, Z.jsx)(Ct, { isExpanded: n, text: o.summary })),
          (t[36] = n),
          (t[37] = o.summary),
          (t[38] = e))
        : (e = t[38]);
      let r;
      t[39] !== o.actions || t[40] !== c
        ? ((r = (0, Z.jsx)(Et, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[39] = o.actions),
          (t[40] = c),
          (t[41] = r))
        : (r = t[41]);
      let i;
      return (
        t[42] !== e || t[43] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `exec`,
              children: [e, r],
            })),
            (t[42] = e),
            (t[43] = r),
            (t[44] = i))
          : (i = t[44]),
        i
      );
    }
    case `network`: {
      let e;
      t[45] !== n || t[46] !== o.target
        ? ((e = (0, Z.jsx)(Ct, { isExpanded: n, text: o.target })),
          (t[45] = n),
          (t[46] = o.target),
          (t[47] = e))
        : (e = t[47]);
      let r;
      t[48] !== o.actions || t[49] !== c
        ? ((r = (0, Z.jsx)(Et, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[48] = o.actions),
          (t[49] = c),
          (t[50] = r))
        : (r = t[50]);
      let i;
      return (
        t[51] !== e || t[52] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `network`,
              children: [e, r],
            })),
            (t[51] = e),
            (t[52] = r),
            (t[53] = i))
          : (i = t[53]),
        i
      );
    }
    case `permission`: {
      let e;
      t[54] !== n || t[55] !== o.target
        ? ((e = (0, Z.jsx)(Ct, { isExpanded: n, text: o.target })),
          (t[54] = n),
          (t[55] = o.target),
          (t[56] = e))
        : (e = t[56]);
      let r;
      t[57] !== o.actions || t[58] !== c
        ? ((r = (0, Z.jsx)(Et, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[57] = o.actions),
          (t[58] = c),
          (t[59] = r))
        : (r = t[59]);
      let i;
      return (
        t[60] !== e || t[61] !== r
          ? ((i = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `permission`,
              children: [e, r],
            })),
            (t[60] = e),
            (t[61] = r),
            (t[62] = i))
          : (i = t[62]),
        i
      );
    }
    case `tool`: {
      let e = o.summary ?? o.target,
        r;
      t[63] !== n || t[64] !== e
        ? ((r = (0, Z.jsx)(Ct, { isExpanded: n, text: e })),
          (t[63] = n),
          (t[64] = e),
          (t[65] = r))
        : (r = t[65]);
      let i;
      t[66] !== o.actions || t[67] !== c
        ? ((i = (0, Z.jsx)(Et, {
            actions: o.actions,
            onRunNotificationAction: c,
          })),
          (t[66] = o.actions),
          (t[67] = c),
          (t[68] = i))
        : (i = t[68]);
      let a;
      return (
        t[69] !== r || t[70] !== i
          ? ((a = (0, Z.jsxs)(`div`, {
              "data-avatar-overlay-compact-waiting-request": `tool`,
              children: [r, i],
            })),
            (t[69] = r),
            (t[70] = i),
            (t[71] = a))
          : (a = t[71]),
        a
      );
    }
  }
}
function xt(e, t) {
  return {
    label: e.label,
    tone: t === 0 ? `primary` : `secondary`,
    questionOption: e,
  };
}
function St(e) {
  let t = (0, zt.c)(20),
    {
      isExpanded: n,
      localConversationId: r,
      onRunNotificationAction: i,
      request: a,
    } = e,
    { getModeForSelection: o } = Ee(r),
    s,
    c,
    l,
    u;
  if (
    t[0] !== o ||
    t[1] !== n ||
    t[2] !== a.actions ||
    t[3] !== a.kind ||
    t[4] !== a.summary
  ) {
    let e = o(`default`);
    ((l = a.kind),
      t[9] !== n || t[10] !== a.summary
        ? ((u = (0, Z.jsx)(Ct, { isExpanded: n, text: a.summary })),
          (t[9] = n),
          (t[10] = a.summary),
          (t[11] = u))
        : (u = t[11]),
      (s = Et),
      (c = a.actions.map((t) =>
        t.intent === `plan-start` ? { ...t, planStartCollaborationMode: e } : t,
      )),
      (t[0] = o),
      (t[1] = n),
      (t[2] = a.actions),
      (t[3] = a.kind),
      (t[4] = a.summary),
      (t[5] = s),
      (t[6] = c),
      (t[7] = l),
      (t[8] = u));
  } else ((s = t[5]), (c = t[6]), (l = t[7]), (u = t[8]));
  let d;
  t[12] !== s || t[13] !== i || t[14] !== c
    ? ((d = (0, Z.jsx)(s, { actions: c, onRunNotificationAction: i })),
      (t[12] = s),
      (t[13] = i),
      (t[14] = c),
      (t[15] = d))
    : (d = t[15]);
  let f;
  return (
    t[16] !== l || t[17] !== u || t[18] !== d
      ? ((f = (0, Z.jsxs)(`div`, {
          "data-avatar-overlay-compact-waiting-request": l,
          children: [u, d],
        })),
        (t[16] = l),
        (t[17] = u),
        (t[18] = d),
        (t[19] = f))
      : (f = t[19]),
    f
  );
}
function Ct(e) {
  let t = (0, zt.c)(5),
    { isExpanded: n, text: r } = e,
    i = n ? `break-words whitespace-pre-wrap` : `truncate whitespace-nowrap`,
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = A(`min-w-0 text-token-text-secondary`, i)), (t[0] = i), (t[1] = a));
  let o;
  return (
    t[2] !== a || t[3] !== r
      ? ((o = (0, Z.jsx)(`div`, {
          className: a,
          "data-avatar-overlay-compact-waiting-summary-text": `true`,
          children: r,
        })),
        (t[2] = a),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
function wt(e) {
  let t = (0, zt.c)(40),
    {
      additions: n,
      deletions: r,
      fileCount: i,
      files: a,
      isExpanded: o,
      summary: s,
    } = e,
    c = he(),
    l;
  t[0] !== i || t[1] !== c
    ? ((l = c.formatMessage(Q.compactPatchFileCount, { count: i })),
      (t[0] = i),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u = l,
    d;
  t[3] !== n || t[4] !== c
    ? ((d =
        n > 0 ? c.formatMessage(Q.compactPatchAdditions, { count: n }) : null),
      (t[3] = n),
      (t[4] = c),
      (t[5] = d))
    : (d = t[5]);
  let f = d,
    p;
  t[6] !== r || t[7] !== c
    ? ((p =
        r > 0 ? c.formatMessage(Q.compactPatchDeletions, { count: r }) : null),
      (t[6] = r),
      (t[7] = c),
      (t[8] = p))
    : (p = t[8]);
  let m = p;
  if (!o) {
    let e;
    t[9] === u
      ? (e = t[10])
      : ((e = (0, Z.jsx)(`span`, { children: u })), (t[9] = u), (t[10] = e));
    let n;
    t[11] === f
      ? (n = t[12])
      : ((n =
          f == null
            ? null
            : (0, Z.jsx)(`span`, {
                className: `ml-1.5 text-token-charts-green`,
                children: f,
              })),
        (t[11] = f),
        (t[12] = n));
    let r;
    t[13] === m
      ? (r = t[14])
      : ((r =
          m == null
            ? null
            : (0, Z.jsx)(`span`, {
                className: `ml-1.5 text-token-error-foreground`,
                children: m,
              })),
        (t[13] = m),
        (t[14] = r));
    let i;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Z.jsx)(Se, { className: `mx-1.5 text-token-text-tertiary` })),
        (t[15] = i))
      : (i = t[15]);
    let a;
    t[16] === s
      ? (a = t[17])
      : ((a = (0, Z.jsx)(`span`, { children: s })), (t[16] = s), (t[17] = a));
    let o;
    return (
      t[18] !== e || t[19] !== n || t[20] !== r || t[21] !== a
        ? ((o = (0, Z.jsxs)(`div`, {
            className: `min-w-0 truncate whitespace-nowrap text-token-text-secondary`,
            "data-avatar-overlay-compact-waiting-summary-text": `true`,
            children: [e, n, r, i, a],
          })),
          (t[18] = e),
          (t[19] = n),
          (t[20] = r),
          (t[21] = a),
          (t[22] = o))
        : (o = t[22]),
      o
    );
  }
  let h;
  t[23] === u
    ? (h = t[24])
    : ((h = (0, Z.jsx)(`span`, {
        className: `text-[11px] leading-4 text-token-text-secondary`,
        children: u,
      })),
      (t[23] = u),
      (t[24] = h));
  let g;
  t[25] === f
    ? (g = t[26])
    : ((g =
        f == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `text-[11px] leading-4 text-token-charts-green`,
              children: f,
            })),
      (t[25] = f),
      (t[26] = g));
  let _;
  t[27] === m
    ? (_ = t[28])
    : ((_ =
        m == null
          ? null
          : (0, Z.jsx)(`span`, {
              className: `text-[11px] leading-4 text-token-error-foreground`,
              children: m,
            })),
      (t[27] = m),
      (t[28] = _));
  let v;
  t[29] !== h || t[30] !== g || t[31] !== _
    ? ((v = (0, Z.jsxs)(`div`, {
        className: `mt-0.5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-0.5`,
        children: [h, g, _],
      })),
      (t[29] = h),
      (t[30] = g),
      (t[31] = _),
      (t[32] = v))
    : (v = t[32]);
  let y;
  t[33] === a ? (y = t[34]) : ((y = a.map(Tt)), (t[33] = a), (t[34] = y));
  let b;
  t[35] === y
    ? (b = t[36])
    : ((b = (0, Z.jsx)(`div`, {
        className: `mt-0.5 min-w-0 space-y-0.5 text-token-text-secondary`,
        children: y,
      })),
      (t[35] = y),
      (t[36] = b));
  let x;
  return (
    t[37] !== v || t[38] !== b
      ? ((x = (0, Z.jsxs)(`div`, {
          "data-avatar-overlay-compact-waiting-summary-text": `true`,
          children: [v, b],
        })),
        (t[37] = v),
        (t[38] = b),
        (t[39] = x))
      : (x = t[39]),
    x
  );
}
function Tt(e) {
  return (0, Z.jsx)(
    `div`,
    { className: `leading-4 break-words`, children: e },
    e,
  );
}
function Et(e) {
  let t = (0, zt.c)(7),
    { actions: n, onRunNotificationAction: r } = e,
    i;
  if (t[0] !== n || t[1] !== r) {
    let e;
    (t[3] === r
      ? (e = t[4])
      : ((e = (e) =>
          (0, Z.jsx)(
            w,
            {
              className: `max-w-full min-w-0`,
              color: Ot(e.tone),
              size: `toolbar`,
              "aria-label": e.ariaLabel ?? e.label,
              title: e.ariaLabel ?? e.label,
              onClick: (t) => {
                (t.stopPropagation(), r(e));
              },
              onPointerDown: Dt,
              children: (0, Z.jsx)(`span`, {
                className: `truncate`,
                children: e.label,
              }),
            },
            e.ariaLabel ?? e.label,
          )),
        (t[3] = r),
        (t[4] = e)),
      (i = n.map(e)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i));
  } else i = t[2];
  let a;
  return (
    t[5] === i
      ? (a = t[6])
      : ((a = (0, Z.jsx)(`div`, {
          className: `no-drag mt-1.5 flex min-w-0 flex-wrap items-center gap-1.5 overflow-visible pb-px`,
          children: i,
        })),
        (t[5] = i),
        (t[6] = a)),
    a
  );
}
function Dt(e) {
  e.stopPropagation();
}
function Ot(e) {
  switch (e) {
    case `primary`:
      return `secondary`;
    case `danger`:
      return `danger`;
    case `secondary`:
      return `secondary`;
  }
}
function kt(e, t = e.scrollTop) {
  if (!Mt(e))
    return {
      hasScrollableContent: !1,
      hasLatestNotificationsAbove: !1,
      hiddenOlderNotificationCount: 0,
    };
  if (jt(e, t))
    return {
      hasScrollableContent: !0,
      hasLatestNotificationsAbove: !0,
      hiddenOlderNotificationCount: 0,
    };
  let n = Ft(e),
    r = It(e, n, t);
  return {
    hasScrollableContent: !0,
    hasLatestNotificationsAbove: t > Vt,
    hiddenOlderNotificationCount: Pt(e, n, r),
  };
}
function At(e, t) {
  return (
    e.hasScrollableContent === t.hasScrollableContent &&
    e.hasLatestNotificationsAbove === t.hasLatestNotificationsAbove &&
    e.hiddenOlderNotificationCount === t.hiddenOlderNotificationCount
  );
}
function jt(e, t = e.scrollTop) {
  let n = Math.max(0, e.scrollHeight - e.clientHeight);
  return Mt(e) && t >= n - Vt;
}
function Mt(e) {
  return e.scrollHeight > e.clientHeight + Vt;
}
function Nt(e) {
  return [e, ...Array.from(e.querySelectorAll(`*`))].some(
    (e) => e.clientWidth > 0 && e.scrollWidth > e.clientWidth + Kt,
  );
}
function Pt(e, t, n) {
  let r = n + e.clientHeight - Vt;
  return t.filter((e) => e.offsetTop + e.offsetHeight > r).length;
}
function Ft(e) {
  return Array.from(e.children).filter((e) => e instanceof HTMLElement);
}
function It(e, t, n = e.scrollTop) {
  return n + (t[0]?.offsetTop ?? 0) + Vt;
}
function Lt(e, t) {
  let n = 0;
  for (let r = 0; r < e.length; r += 1) e[r].offsetTop <= t && (n = r);
  return n;
}
function Rt(e) {
  switch (e.iconType) {
    case `check-circle`:
      return (0, Z.jsx)(N, { className: e.iconClassName });
    case `clock`:
      return (0, Z.jsx)(Te, { className: e.iconClassName });
    case `spinner`:
      return (0, Z.jsx)(v, { className: e.iconClassName });
    case `warning`:
      return (0, Z.jsx)(Y, { className: e.iconClassName });
  }
}
var zt,
  X,
  Z,
  Q,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt,
  Jt,
  Yt = e(() => {
    ((zt = l()),
      D(),
      T(),
      o(),
      (X = t(c(), 1)),
      z(),
      B(),
      xe(),
      J(),
      b(),
      _(),
      ee(),
      M(),
      De(),
      C(),
      y(),
      j(),
      ke(),
      Ae(),
      Oe(),
      s(),
      Ye(),
      Be(),
      ut(),
      Ue(),
      Me(),
      He(),
      Ie(),
      Re(),
      (Z = u()),
      (Q = ae({
        mascotLabel: {
          id: `petOverlay.mascotLabel`,
          defaultMessage: `{petName} pet`,
          description: `Accessible label for the floating Codex pet`,
        },
        openNotification: {
          id: `avatarOverlay.openNotification`,
          defaultMessage: `Open notification`,
          description: `Accessible label for an actionable row in the floating avatar notification tray`,
        },
        dismissNotification: {
          id: `avatarOverlay.dismissNotification`,
          defaultMessage: `Dismiss {title}`,
          description: `Accessible label for dismissing a notification in the floating avatar notification tray`,
        },
        dismissNotificationTooltip: {
          id: `avatarOverlay.dismissNotificationTooltip`,
          defaultMessage: `Dismiss`,
          description: `Tooltip for the icon button that dismisses a floating avatar notification`,
        },
        replyNotification: {
          id: `avatarOverlay.replyNotification`,
          defaultMessage: `Reply to {title}`,
          description: `Accessible label for replying to a floating avatar notification`,
        },
        replyNotificationButton: {
          id: `avatarOverlay.replyNotificationButton`,
          defaultMessage: `Reply`,
          description: `Compact button label for replying to a floating avatar notification`,
        },
        sendNotificationReply: {
          id: `avatarOverlay.sendNotificationReply`,
          defaultMessage: `Send reply to {title}`,
          description: `Accessible label for submitting a floating avatar notification reply`,
        },
        notificationReplyPlaceholder: {
          id: `avatarOverlay.notificationReplyPlaceholder`,
          defaultMessage: `Reply`,
          description: `Placeholder for the one-line floating avatar notification reply input`,
        },
        notificationReplyError: {
          id: `avatarOverlay.notificationReplyError`,
          defaultMessage: `Unable to send reply`,
          description: `Compact error shown when a floating avatar notification reply fails`,
        },
        expandNotification: {
          id: `avatarOverlay.expandNotification`,
          defaultMessage: `Expand {title}`,
          description: `Accessible label for expanding a floating avatar notification row`,
        },
        collapseNotification: {
          id: `avatarOverlay.collapseNotification`,
          defaultMessage: `Collapse {title}`,
          description: `Accessible label for collapsing a floating avatar notification row`,
        },
        expandNotificationTooltip: {
          id: `avatarOverlay.expandNotificationTooltip`,
          defaultMessage: `Expand`,
          description: `Tooltip for the icon button that expands a floating avatar notification`,
        },
        collapseNotificationTooltip: {
          id: `avatarOverlay.collapseNotificationTooltip`,
          defaultMessage: `Collapse`,
          description: `Tooltip for the icon button that collapses a floating avatar notification`,
        },
        collapseNotificationTray: {
          id: `avatarOverlay.collapseNotificationTray`,
          defaultMessage: `Collapse activity`,
          description: `Accessible label and tooltip for the button that collapses the floating avatar activity tray`,
        },
        resizeMascot: {
          id: `avatarOverlay.resizeMascot`,
          defaultMessage: `Resize pet`,
          description: `Accessible label for the handle that resizes the floating Codex pet`,
        },
        notificationList: {
          id: `avatarOverlay.notificationList`,
          defaultMessage: `Activity notifications`,
          description: `Accessible label for the list of floating avatar activity notifications`,
        },
        latestNotifications: {
          id: `avatarOverlay.latestNotifications`,
          defaultMessage: `Latest`,
          description: `Label for the button that scrolls the floating avatar activity list back to the newest notifications`,
        },
        showLatestNotifications: {
          id: `avatarOverlay.showLatestNotifications`,
          defaultMessage: `Show latest activity`,
          description: `Accessible label for the button that scrolls the floating avatar activity list back to the newest notifications`,
        },
        showOlderNotifications: {
          id: `avatarOverlay.showOlderNotifications`,
          defaultMessage: `Show {count, plural, one {# older activity item} other {# older activity items}}`,
          description: `Accessible label for the button that scrolls the floating avatar activity list toward older notifications`,
        },
        olderNotificationCount: {
          id: `avatarOverlay.olderNotificationCount`,
          defaultMessage: `{count, plural, one {# more} other {# more}}`,
          description: `Label for the button that shows there are more floating avatar activity notifications below`,
        },
        compactOlderNotificationCount: {
          id: `avatarOverlay.compactOlderNotificationCount`,
          defaultMessage: `+{count}`,
          description: `Compact label for the edge button that shows hidden floating avatar activity notifications`,
        },
        questionStatusIcon: {
          id: `avatarOverlay.questionStatusIcon`,
          defaultMessage: `Question`,
          description: `Accessible label for a floating avatar notification waiting on a question answer`,
        },
        compactPatchFileCount: {
          id: `avatarOverlay.compactPatchFileCount`,
          defaultMessage: `{count, plural, one {# file} other {# files}}`,
          description: `Compact file count for a patch request in the floating avatar notification tray`,
        },
        compactPatchAdditions: {
          id: `avatarOverlay.compactPatchAdditions`,
          defaultMessage: `+{count}`,
          description: `Compact additions count for a patch request in the floating avatar notification tray`,
        },
        compactPatchDeletions: {
          id: `avatarOverlay.compactPatchDeletions`,
          defaultMessage: `-{count}`,
          description: `Compact deletions count for a patch request in the floating avatar notification tray`,
        },
      })),
      (Bt = 2),
      (Vt = 2),
      (Ht = 0.035),
      (Ut = 32),
      (Wt = 84),
      (Gt = 512),
      (Kt = 1),
      (qt = `group no-drag absolute left-1/2 z-10 flex h-5 cursor-interaction items-center justify-center gap-0.5 rounded-full border border-token-border bg-token-main-surface-primary px-2 text-[10px] leading-none font-medium text-token-text-secondary shadow-[0px_5px_10px_-7px_rgba(0,0,0,0.22)] backdrop-blur hover:text-token-foreground hover:shadow-[0px_7px_14px_-9px_rgba(0,0,0,0.26)] focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none forced-colors:bg-[Canvas]`),
      (Jt = `!bg-token-main-surface-primary enabled:hover:!bg-[color-mix(in_srgb,var(--color-token-main-surface-primary)_94%,var(--color-token-foreground))]`));
  });
function Xt() {
  let e = (0, dn.c)(10),
    { selectedAvatar: t, selectedAvatarId: n } = st(),
    r = t == null,
    i,
    a;
  if (
    (e[0] === r
      ? ((i = e[1]), (a = e[2]))
      : ((i = () => {
          r &&
            f.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, {
              isInteractive: !1,
            });
        }),
        (a = [r]),
        (e[0] = r),
        (e[1] = i),
        (e[2] = a)),
    (0, $.useEffect)(i, a),
    t == null)
  )
    return null;
  let o;
  e[3] !== t || e[4] !== n
    ? ((o = en(t, n)), (e[3] = t), (e[4] = n), (e[5] = o))
    : (o = e[5]);
  let s;
  return (
    e[6] !== t || e[7] !== n || e[8] !== o
      ? ((s = (0, fn.jsx)(Zt, { selectedAvatar: t, selectedAvatarId: n }, o)),
        (e[6] = t),
        (e[7] = n),
        (e[8] = o),
        (e[9] = s))
      : (s = e[9]),
    s
  );
}
function Zt({ selectedAvatar: e, selectedAvatarId: t }) {
  let n = a(r),
    o = he(),
    s = _e(`451951815`),
    c = d(oe),
    l = d(tt),
    u = hn,
    m = u.phase !== `inactive` && !0;
  i(ge, void 0);
  let { data: g } = ie({ enabled: m, hostId: void 0 }),
    _ = m,
    [v, y] = (0, $.useState)(En),
    [b, x] = (0, $.useState)(null),
    [S, ee] = (0, $.useState)(!0),
    [te, C] = (0, $.useState)(!1),
    [w, T] = (0, $.useState)(!1),
    [E, D] = (0, $.useState)(!1),
    [O, k] = (0, $.useState)(null),
    { mascotWidthPx: A, setMascotWidthPx: re } = Ge(),
    [j, M] = (0, $.useState)(() => new Map()),
    [N, P] = (0, $.useState)(() => Date.now()),
    [R] = (0, $.useState)(() => $t(e, t)),
    { data: ae = [], refetch: z } = Ce(),
    { data: se = [], refetch: B } = ne({ taskFilter: `current`, limit: 20 }),
    V = qe({
      includeCompactWaitingRequests: s,
      intl: o,
      localConversations: ae,
      excludedConversationId: null,
      remoteTasks: se,
    }),
    ue =
      R == null
        ? null
        : lt({ intl: o, petName: R.petName, startedAtMs: R.startedAtMs }),
    de = [],
    { nextNotificationExpiresAtMs: fe, notifications: W } = at({
      dismissedNotificationTurnKeys: j,
      extraNotifications: m ? [...[], ...de] : ue == null ? [] : [ue],
      nowMs: N,
      sessions: m ? [] : V,
    }),
    ve = ct(W, o),
    K = V.some((e) => e.source !== `cloud` && e.status === `running`),
    xe = V.some((e) => e.source === `cloud` && e.status === `running`),
    q = (0, $.useRef)(null),
    J = (0, $.useRef)(null),
    Se = (0, $.useRef)(null),
    we = (0, $.useRef)(null),
    Te = (0, $.useRef)(null),
    Ee = (0, $.useRef)(null),
    De = (0, $.useRef)(null),
    Oe = (0, $.useRef)(null),
    ke = (0, $.useRef)(!1),
    Y = (0, $.useCallback)(
      (t, n, r, i = S) => {
        c.logProductEvent(
          L,
          be({
            action: t,
            hasRunningCloudSession: xe,
            hasRunningLocalSession: K,
            isNotificationTrayOpen: i,
            notification: r,
            notificationCount: W.length,
            selectedAvatar: e,
            source: n,
          }),
        );
      },
      [K, xe, S, W.length, c, e],
    );
  ((0, $.useEffect)(() => {
    if (R == null) return;
    let e = pe(mn, []);
    e.includes(R.avatarId) || F(mn, [...e, R.avatarId]);
  }, [R]),
    (0, $.useEffect)(() => {
      ke.current ||
        (c !== me &&
          ((ke.current = !0),
          Y(
            H.CODEX_AVATAR_OVERLAY_ACTION_OPENED,
            U.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED,
          )));
    }, [c, Y]),
    Qe({
      interactiveRegionRef: De,
      isPaused: () => q.current != null || J.current != null,
      onInteractiveChange: (e) => {
        f.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, {
          isInteractive: e,
        });
      },
      regionElementSelectors: gn,
    }));
  let Ae = (0, $.useCallback)(() => {
      if (J.current != null || Te.current != null) return;
      let e = nn(De.current);
      if (e == null) return;
      let t = { ...e, isTrayVisible: (S && W.length > 0) || u.caption != null };
      cn(Oe.current, t) ||
        ((Oe.current = t),
        f.dispatchMessage(`avatar-overlay-element-size-changed`, {
          isTrayVisible: t.isTrayVisible,
          mascot: t.mascot,
          tray: t.tray,
        }));
    }, [S, W.length, u.caption]),
    je = (0, $.useCallback)(() => {
      Ee.current != null &&
        (window.clearTimeout(Ee.current), (Ee.current = null));
    }, []),
    Me = (0, $.useCallback)(() => {
      (Se.current != null &&
        (window.cancelAnimationFrame(Se.current), (Se.current = null)),
        (we.current = null));
    }, []),
    Pe = (0, $.useCallback)((e) => {
      ((we.current = e),
        (Se.current ??= window.requestAnimationFrame(() => {
          Se.current = null;
          let e = we.current;
          ((we.current = null),
            !(e == null || J.current == null) &&
              f.dispatchMessage(`avatar-overlay-mascot-resize-move`, {
                width: e,
              }));
        })));
    }, []),
    Fe = (0, $.useCallback)(
      (e) => {
        ((Te.current = e),
          je(),
          (Ee.current = window.setTimeout(() => {
            ((Ee.current = null), (Te.current = null), k(null), Ae());
          }, 100)));
      },
      [je, Ae],
    ),
    Ie = (0, $.useCallback)(
      () => an(De.current?.querySelector(_n) ?? null)?.width ?? A ?? 112,
      [A],
    ),
    Le = (0, $.useCallback)((e, t) => {
      let n = J.current;
      n == null ||
        n.pointerId !== e ||
        ((J.current = null),
        T(!1),
        t?.hasPointerCapture?.(e) && t.releasePointerCapture?.(e));
    }, []),
    Re = (0, $.useCallback)(
      (e, t) => {
        let n = J.current;
        if (n == null || n.pointerId !== e) return;
        let r = t == null ? n.currentWidthPx : Qt(n, t);
        ((n.currentWidthPx = r),
          Me(),
          k(r),
          re(r),
          Fe(r),
          f.dispatchMessage(`avatar-overlay-mascot-resize-end`, { width: r }));
      },
      [Me, re, Fe],
    ),
    ze = (0, $.useCallback)(
      (
        e,
        {
          releaseSample: t,
          shouldPreserveOrbMomentum: n = !1,
          shouldOpenMainWindow: r,
        },
      ) => {
        let i = q.current;
        if (i == null || i.pointerId !== e) return;
        ((q.current = null), C(!1), x(null));
        let {
          hasMoved: a,
          releaseSample: o,
          velocity: s,
        } = rt(i, t, n && i.usesOrbPhysics);
        if (
          (De.current?.hasPointerCapture?.(e) &&
            De.current.releasePointerCapture?.(e),
          a &&
            !i.hasMoved &&
            o != null &&
            f.dispatchMessage(`avatar-overlay-drag-move`, {
              pointerScreenX: o.screenX,
              pointerScreenY: o.screenY,
            }),
          r &&
            i.startedOnMascot &&
            !a &&
            (Y(
              H.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
              U.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
            ),
            f.dispatchMessage(`open-current-main-window`, {})),
          f.dispatchMessage(`avatar-overlay-drag-end`, {
            pointerScreenX: o?.screenX ?? i.screenX,
            pointerScreenY: o?.screenY ?? i.screenY,
          }),
          a &&
            Y(
              H.CODEX_AVATAR_OVERLAY_ACTION_DRAG_COMPLETED,
              U.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
            ),
          s != null)
        ) {
          let e = i.usesOrbPhysics ? 3 : 1;
          f.dispatchMessage(`avatar-overlay-drag-release`, {
            shouldBounce: i.usesOrbPhysics,
            velocityX: s.x * e,
            velocityY: s.y * e,
          });
        }
      },
      [m, void 0, null, Y],
    ),
    Be = (e) => {
      e.button !== 0 ||
        !(e.target instanceof Element) ||
        e.target.closest(`.no-drag`) != null ||
        (e.preventDefault(),
        e.currentTarget.setPointerCapture?.(e.pointerId),
        (q.current = {
          startedOnMascot:
            e.target.closest(`[data-avatar-mascot="true"]`) != null,
          hasMoved: !1,
          pointerId: e.pointerId,
          samples: [ot(e)],
          screenX: e.screenX,
          screenY: e.screenY,
          usesOrbPhysics: _,
        }),
        f.dispatchMessage(`avatar-overlay-drag-start`, {
          pointerScreenX: e.screenX,
          pointerScreenY: e.screenY,
          pointerWindowX: e.clientX,
          pointerWindowY: e.clientY,
          usesOrbPhysics: _,
        }),
        C(!0),
        x(null));
    },
    Ve = (e) => {
      let t = q.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      let n = ot(e);
      t.samples = ft([...t.samples, n]);
      let r = n.screenX - t.screenX,
        i = n.screenY - t.screenY;
      (Math.abs(r) < 4 && Math.abs(i) < 4) ||
        ((t.hasMoved = !0),
        (t.screenX = n.screenX),
        (t.screenY = n.screenY),
        x((e) => tn({ currentDragState: e, deltaX: r })),
        f.dispatchMessage(`avatar-overlay-drag-move`, {
          pointerScreenX: n.screenX,
          pointerScreenY: n.screenY,
        }));
    },
    He = (e) => {
      ze(e.pointerId, { releaseSample: ot(e), shouldOpenMainWindow: !0 });
    },
    Ue = (e) => {
      ze(e.pointerId, {
        shouldPreserveOrbMomentum: !0,
        shouldOpenMainWindow: !1,
      });
    },
    Ke = (e) => {
      ze(e.pointerId, {
        shouldPreserveOrbMomentum: !0,
        shouldOpenMainWindow: !1,
      });
    },
    Je = (e) => {
      if (e.button !== 0) return;
      (e.preventDefault(),
        e.stopPropagation(),
        e.currentTarget.setPointerCapture?.(e.pointerId));
      let t = Ie();
      (je(),
        Me(),
        (Te.current = null),
        (J.current = {
          currentWidthPx: t,
          pointerId: e.pointerId,
          startScreenX: e.screenX,
          startWidthPx: t,
        }),
        k(t),
        T(!0),
        f.dispatchMessage(`avatar-overlay-mascot-resize-start`, { width: t }));
    },
    Ye = (e) => {
      let t = J.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      (e.preventDefault(), e.stopPropagation());
      let n = Qt(t, e.screenX);
      ((t.currentWidthPx = n), k(n), Pe(n));
    },
    Xe = (e) => {
      (Re(e.pointerId, e.screenX), Le(e.pointerId, e.currentTarget));
    },
    Ze = (e) => {
      (e.stopPropagation(), Re(e.pointerId), Le(e.pointerId, e.currentTarget));
    },
    $e = (e) => {
      (Re(e.pointerId), Le(e.pointerId));
    },
    et = (e, t) => {
      let r = e.waitingRequest;
      if (e.localConversationId != null && t != null) {
        let i = e.localConversationId;
        switch (t.intent) {
          case `command-approval`:
            if (
              t.commandDecision != null &&
              (r?.kind === `exec` || r?.kind === `network`)
            ) {
              G(`reply-with-command-execution-approval-decision`, {
                conversationId: i,
                requestId: r.requestId,
                decision: t.commandDecision,
              }).then(() => {
                z();
              });
              return;
            }
            break;
          case `file-approval`:
            if (t.fileDecision != null && r?.kind === `patch`) {
              G(`reply-with-file-change-approval-decision`, {
                conversationId: i,
                requestId: r.requestId,
                decision: t.fileDecision,
              }).then(() => {
                z();
              });
              return;
            }
            break;
          case `permission-response`:
            if (t.permissionResponse != null && r?.kind === `permission`) {
              G(`reply-with-permissions-request-approval-response`, {
                conversationId: i,
                requestId: r.requestId,
                response: t.permissionResponse,
              }).then(() => {
                z();
              });
              return;
            }
            break;
          case `mcp-elicitation`:
            if (t.mcpElicitationAction != null && r?.kind === `tool`) {
              G(`reply-with-mcp-server-elicitation-response`, {
                conversationId: i,
                requestId: r.requestId,
                response: I(t.mcpElicitationAction),
              }).then(() => {
                z();
              });
              return;
            }
            break;
          case `plan-start`:
            if (r?.kind === `plan` && t.planStartCollaborationMode != null) {
              G(`update-thread-settings-for-next-turn`, {
                conversationId: i,
                threadSettings: {
                  collaborationMode: t.planStartCollaborationMode,
                },
              })
                .then(() =>
                  G(`remove-plan-implementation-request`, {
                    conversationId: i,
                    turnId: r.turnId,
                  }),
                )
                .then(async () =>
                  G(`send-follow-up-message`, {
                    conversationId: i,
                    prompt: `${ye}\n${r.planContent}`,
                    serviceTier: await h(
                      n,
                      n.get(ce, i) ?? `local`,
                      t.planStartCollaborationMode?.settings.model ?? null,
                    ),
                  }),
                )
                .then(() => {
                  z();
                });
              return;
            }
            break;
          case `open`:
            break;
        }
      }
      (t != null && t.intent !== `open`) ||
        (e.action != null &&
          (Y(
            H.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
            U.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            e,
          ),
          f.dispatchMessage(`open-in-main-window`, { path: e.action.path })));
    },
    nt = (e, t) => {
      let n = e.waitingRequest;
      e.localConversationId == null ||
        n?.kind !== `question` ||
        G(`reply-with-user-input-response`, {
          conversationId: e.localConversationId,
          requestId: n.requestId,
          response: { answers: { [t.questionId]: { answers: [t.label] } } },
        }).then(() => {
          z();
        });
    },
    it = (e) => {
      (Y(
        H.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        U.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        e,
      ),
        M((t) => {
          if (t.get(e.id) === e.turnKey) return t;
          let n = new Map(t);
          return (n.set(e.id, e.turnKey), n);
        }));
    },
    st = async (e, t) => {
      if (e.controlTarget?.type !== `app-server-conversation`) return;
      let r = t.trim();
      r.length !== 0 &&
        (Y(
          H.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_SUBMITTED,
          U.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
          e,
        ),
        await G(`send-follow-up-message`, {
          conversationId: e.controlTarget.conversationId,
          prompt: r,
          serviceTier: await h(
            n,
            n.get(ce, e.controlTarget.conversationId) ?? `local`,
            null,
          ),
        }));
    },
    ut = (0, $.useCallback)((e) => {
      f.dispatchMessage(`avatar-overlay-keyboard-interaction-changed`, {
        isInteractive: e,
      });
    }, []);
  return (
    p(
      `avatar-overlay-layout-changed`,
      ({ layout: e }) => {
        (y(e),
          Te.current === e.mascot.width &&
            ((Te.current = null),
            je(),
            k(null),
            window.requestAnimationFrame(Ae)));
      },
      [je, Ae],
    ),
    (0, $.useLayoutEffect)(() => {
      let e = (!l && E) || w;
      return (
        document.documentElement.classList.toggle(wn, e),
        document.body.classList.toggle(wn, e),
        () => {
          (document.documentElement.classList.remove(wn),
            document.body.classList.remove(wn));
        }
      );
    }, [l, E, w]),
    (0, $.useEffect)(
      () => () => {
        (je(), Me());
      },
      [Me, je],
    ),
    (0, $.useEffect)(() => {
      let e = (e) => {
          (ze(e.pointerId, { releaseSample: ot(e), shouldOpenMainWindow: !0 }),
            Re(e.pointerId, e.screenX),
            Le(e.pointerId));
        },
        t = (e) => {
          (ze(e.pointerId, {
            shouldPreserveOrbMomentum: !0,
            shouldOpenMainWindow: !1,
          }),
            Re(e.pointerId),
            Le(e.pointerId));
        };
      return (
        window.addEventListener(`pointerup`, e),
        window.addEventListener(`pointercancel`, t),
        () => {
          (window.removeEventListener(`pointerup`, e),
            window.removeEventListener(`pointercancel`, t));
        }
      );
    }, [Re, ze, Le]),
    (0, $.useLayoutEffect)(() => {
      let e = null,
        t = () => {
          e ??= window.requestAnimationFrame(() => {
            ((e = null), Ae());
          });
        },
        n = new ResizeObserver(t),
        r = De.current;
      if (r != null) {
        n.observe(r);
        for (let e of rn(r)) n.observe(e);
      }
      return (
        window.addEventListener(`resize`, t),
        t(),
        () => {
          (e != null && window.cancelAnimationFrame(e),
            n.disconnect(),
            window.removeEventListener(`resize`, t));
        }
      );
    }, [Ae, e.id, ve]),
    (0, $.useLayoutEffect)(() => {
      Ae();
    }, [S, Ae, e.id, ve, u.caption, A]),
    (0, $.useEffect)(() => {
      if (fe == null) return;
      let e = Math.max(0, fe - Date.now()),
        t = window.setTimeout(() => {
          P((e) => Math.max(Date.now(), e + 1));
        }, e);
      return () => {
        window.clearTimeout(t);
      };
    }, [fe]),
    (0, $.useEffect)(() => {
      if (!K && !xe) return;
      let e = window.setTimeout(() => {
        (P((e) => Math.max(Date.now(), e + 1)), K && z(), xe && B());
      }, pn);
      return () => {
        window.clearTimeout(e);
      };
    }, [K, xe, z, B]),
    (0, fn.jsx)(pt, {
      avatar: e,
      avatarMenuItems: [
        {
          id: `close-avatar`,
          message: le({
            id: `petOverlay.closePet`,
            defaultMessage: `Close pet`,
            description: `Context menu item that closes the floating Codex pet`,
          }),
          onSelect: () => {
            (Y(
              H.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              U.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            ),
              f.dispatchMessage(`avatar-overlay-close`, {}));
          },
        },
      ],
      interactiveRegionRef: De,
      restrictedSurface: void 0,
      isDragging: te,
      isNotificationTrayOpen: S,
      layout: v,
      mascotDragState: b,
      mascotLayout:
        w && O != null
          ? { ...v.mascot, height: Math.ceil(O / We), width: O }
          : v.mascot,
      mascotResizeHandle: l
        ? void 0
        : {
            onLostPointerCapture: $e,
            onPointerCancel: Ze,
            onPointerDown: Je,
            onPointerEnter: () => {
              D(!0);
            },
            onPointerLeave: () => {
              D(!1);
            },
            onPointerMove: Ye,
            onPointerUp: Xe,
          },
      mascotStyle: Ne(O ?? A),
      notifications: W,
      onCloseNotificationTray: () => {
        (Y(
          H.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
          U.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          void 0,
          !1,
        ),
          ee(!1));
      },
      onLostPointerCapture: Ke,
      onPointerCancel: Ue,
      onPointerDown: Be,
      onPointerMove: Ve,
      onPointerUp: He,
      onDismissNotification: it,
      onNotificationReplyEditorActiveChange: ut,
      onOpenNotificationReply: (e) => {
        Y(
          H.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_REPLY_OPENED,
          U.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_REPLY,
          e,
        );
      },
      onRunNotificationAction: et,
      onSubmitQuestionOption: nt,
      onSubmitNotificationReply: st,
      onOpenNotificationTray: () => {
        (Y(
          H.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
          U.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_BADGE,
          void 0,
          !0,
        ),
          ee(!0));
      },
    })
  );
}
function Qt(e, t) {
  return ze(e.startWidthPx + t - e.startScreenX);
}
function $t(e, t) {
  return Xe(e, t) || pe(mn, []).includes(e.id)
    ? null
    : { avatarId: e.id, petName: e.displayName, startedAtMs: Date.now() };
}
function en(e, t) {
  return Xe(e, t) ? `pending-custom-avatar` : `ready`;
}
function tn({ currentDragState: e, deltaX: t }) {
  return t >= 4 ? `running-right` : t <= -4 ? `running-left` : e;
}
function nn(e) {
  if (e == null) return null;
  let t = an(e.querySelector(_n)),
    n = on(e.querySelector(vn));
  return t == null ? null : { mascot: t, tray: n };
}
function rn(e) {
  return Array.from(e.querySelectorAll(Tn.join(`, `)));
}
function an(e) {
  if (e == null || un(e)) return null;
  let t = e.getBoundingClientRect();
  return t.width <= 0 || t.height <= 0
    ? null
    : { width: Math.ceil(t.width), height: Math.ceil(t.height) };
}
function on(e) {
  if (e == null || un(e)) return null;
  let t = e.getBoundingClientRect();
  if (t.width <= 0 || t.height <= 0) return null;
  let n = Math.ceil(e.offsetWidth > 0 ? e.offsetWidth : t.width),
    r = e.querySelector(yn),
    i = e.querySelector(bn),
    a = e.querySelector(xn),
    o = e.querySelector(Sn);
  if (r == null || (i == null && a == null))
    return { width: n, height: Math.ceil(t.height) };
  let s =
    i != null && (a == null ? 0 : 1) + (o == null ? 0 : 1) > 1 ? sn(i) : 0;
  return {
    width: n,
    height: Math.ceil(
      r.getBoundingClientRect().height +
        (a?.scrollHeight ?? 0) +
        (o == null ? 0 : o.getBoundingClientRect().height) +
        s,
    ),
  };
}
function sn(e) {
  let t = Number.parseFloat(window.getComputedStyle(e).rowGap);
  return Number.isFinite(t) ? t : 0;
}
function cn(e, t) {
  return (
    e != null &&
    e.isTrayVisible === t.isTrayVisible &&
    e.mascot.width === t.mascot.width &&
    e.mascot.height === t.mascot.height &&
    ln(e.tray, t.tray)
  );
}
function ln(e, t) {
  return (
    e === t ||
    (e != null && t != null && e.width === t.width && e.height === t.height)
  );
}
function un(e) {
  return window.getComputedStyle(e).display === `none`;
}
var dn, $, fn, pn, mn, hn, gn, _n, vn, yn, bn, xn, Sn, Cn, wn, Tn, En;
e(() => {
  ((dn = l()),
    se(),
    o(),
    ($ = t(c(), 1)),
    z(),
    we(),
    B(),
    ve(),
    V(),
    fe(),
    m(),
    K(),
    Ze(),
    S(),
    $e(),
    s(),
    de(),
    O(),
    n(),
    ue(),
    W(),
    R(),
    et(),
    it(),
    Yt(),
    ut(),
    Ue(),
    nt(),
    Ie(),
    dt(),
    (fn = u()),
    (pn = 15e3),
    (mn = `first-awake-pet-notification-avatar-ids`),
    (hn = {
      audioStream: null,
      canStart: !1,
      caption: null,
      conversationId: null,
      phase: `inactive`,
      isMicrophoneMuted: !1,
      isMuted: !1,
      start: () => Promise.resolve(),
      stop: () => Promise.resolve(),
      voiceActivity: `idle`,
      toggleMicrophoneMute: () => {},
      toggleMute: () => {},
      waveformCanvasRef: { current: null },
    }),
    (gn = [`[data-avatar-overlay-hit-region]`, `[data-avatar-mascot='true']`]),
    (_n = `.codex-avatar-root`),
    (vn = `[data-avatar-overlay-size='notification-tray']`),
    (yn = `[data-avatar-overlay-size='notification-tray-header']`),
    (bn = `[data-avatar-overlay-size='notification-tray-content']`),
    (xn = `[data-avatar-overlay-size='notification-tray-list']`),
    (Sn = `[data-avatar-overlay-size='notification-tray-caption']`),
    (Cn = `[data-avatar-overlay-measure='notification-tray-row']`),
    (wn = `codex-avatar-overlay-force-resize-cursor`),
    (Tn = [_n, vn, yn, bn, xn, Sn, Cn]),
    (En = {
      mascot: { left: 244, top: 191, width: 112, height: 121 },
      placement: `top-end`,
      tray: { left: 80, top: 56, width: 276, height: 131 },
      viewport: { width: 356, height: 320 },
    }));
})();
export { Xt as AvatarOverlayPage };
//# sourceMappingURL=avatar-overlay-page-DdqF43YR.js.map
