import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Go as i,
  Jo as a,
  Ko as o,
  O as s,
  Ui as c,
  Vi as l,
  Vo as u,
  Wi as ee,
  _ as te,
  _c as d,
  gc as f,
  lc as p,
  qo as ne,
  v as m,
  y as h,
  zi as re,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Lc as g,
  Rc as ie,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Es as ae,
  Jd as oe,
  Ts as se,
  Xd as ce,
  gp as le,
  ic as ue,
  mf as de,
  mp as fe,
  rf as pe,
  sc as me,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Ay as he,
  Dm as ge,
  Eu as _e,
  Ey as ve,
  Hl as ye,
  Iy as be,
  Kp as _,
  M as xe,
  N as v,
  Om as y,
  Py as Se,
  Qp as Ce,
  Rl as b,
  Tm as we,
  Tu as x,
  Ty as Te,
  Vl as Ee,
  Vy as De,
  em as Oe,
  et as ke,
  ku as S,
  ry as C,
  ty as w,
  vg as T,
  wm as Ae,
  yg as E,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  gt as je,
  ht as Me,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import {
  D as Ne,
  y as Pe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  _f as Fe,
  bm as Ie,
  od as Le,
  sd as Re,
  vf as ze,
  xm as Be,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  i as Ve,
  n as He,
  r as Ue,
  t as We,
} from "./avatar-overlay-native-frame-DrVLY9Bt.js";
import {
  a as Ge,
  f as D,
  i as Ke,
  o as qe,
  r as Je,
  s as Ye,
  u as Xe,
} from "./avatar-overlay-pill-dismiss-button-Br8FWkZZ.js";
import {
  n as Ze,
  t as Qe,
} from "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g-DsW4BsRC.js";
import {
  n as $e,
  t as et,
} from "./use-floating-window-pointer-interactivity-JdCkcjJn.js";
import { n as tt, t as nt } from "./avatar-overlay-debug-state-WM6He6by.js";
import {
  a as rt,
  c as it,
  d as O,
  i as at,
  l as ot,
  n as st,
  o as ct,
  r as lt,
  s as ut,
  t as k,
  u as dt,
} from "./use-avatar-overlay-selection-CUecA6qh.js";
function ft({
  activityStackPresentation: e,
  isNotificationStackExpanded: t,
  measuredSurfaces: n,
  policies: r,
}) {
  return n.flatMap((n) => {
    let i = r.find((e) => e.id === n.id);
    if (i == null) return [];
    let a = e.slots.find((e) => e.slotId === n.id);
    if (a == null)
      return [
        {
          ...n,
          ...i,
          chromiumPresentationRect: n.rect,
          edgeZone: null,
          opacity: 1,
          platterRect: n.rect,
          presentationRect: n.rect,
        },
      ];
    let o = A(n.rect, a.visibleRect, a.presentationRect);
    return [
      {
        ...n,
        ...i,
        chromiumPresentationRect: t
          ? n.rect
          : A(n.rect, a.contentRect, a.presentationRect),
        edgeZone: a.edgeZone,
        opacity: !t || a.visibleRect.height > 0 ? 1 : 0,
        platterRect: n.rect,
        presentationRect: o,
      },
    ];
  });
}
function A(e, t, n) {
  return {
    height: t.height,
    left: e.left + t.left - n.left,
    top: e.top + t.top - n.top,
    width: t.width,
  };
}
var pt = e(() => {});
function mt(e, { includeInertSurfaces: t = !1 } = {}) {
  if (e == null) return null;
  let n = _t(e.querySelector(M)),
    r = yt(e.querySelector(xt), t);
  return n == null ? null : { mascot: n, tray: r };
}
function ht(e, t, { includeInert: n = !1 } = {}) {
  return e == null
    ? []
    : Array.from(e.querySelectorAll(I))
        .flatMap((e) => {
          if ((!n && e.closest(`[inert]`) != null) || j(e)) return [];
          let r = e.dataset.avatarOverlayNativeSurfaceId,
            i = t.find((e) => e === r),
            a = e.getBoundingClientRect();
          if (i == null || a.width <= 0 || a.height <= 0) return [];
          let o = {
              height: a.height,
              left: a.left,
              top: a.top,
              width: a.width,
            },
            s = Number(e.dataset.avatarOverlayNativeCornerRadius),
            c = bt(e);
          if (!Number.isFinite(s) || !Number.isFinite(c)) return [];
          let l = e.querySelector(L),
            u = l?.getBoundingClientRect();
          return [
            {
              ...(l != null && u != null && !j(l) && u.width > 0 && u.height > 0
                ? {
                    chromiumOverflowCornerRadius:
                      Math.min(u.width, u.height) / 2,
                    chromiumOverflowRect: {
                      height: u.height,
                      left: u.left,
                      top: u.top,
                      width: u.width,
                    },
                  }
                : {}),
              cornerRadius: s,
              id: i,
              opacity: c,
              rect: o,
            },
          ];
        })
        .sort((e, n) => t.indexOf(e.id) - t.indexOf(n.id));
}
function gt(e) {
  return Array.from(e.querySelectorAll(z.join(`, `)));
}
function _t(e) {
  if (e == null || j(e)) return null;
  let t = e.getBoundingClientRect();
  return t.width <= 0 || t.height <= 0
    ? null
    : { width: Math.ceil(t.width), height: Math.ceil(t.height) };
}
function vt(e) {
  return {
    backing: _t(e?.querySelector(F) ?? null)?.height ?? 0,
    visible: _t(e?.querySelector(Ct) ?? null)?.height ?? 0,
  };
}
function yt(e, t) {
  if (e == null || j(e)) return null;
  let n = e.getBoundingClientRect();
  if (n.width <= 0 || n.height <= 0) return null;
  let r = Array.from(e.querySelectorAll(I))
      .filter((e) => (t || e.closest(`[inert]`) == null) && !j(e))
      .map((e) => e.getBoundingClientRect()),
    i = Math.ceil(
      Math.max(
        e.offsetWidth > 0 ? e.offsetWidth : n.width,
        Math.max(n.right, ...r.map((e) => e.right)) -
          Math.min(n.left, ...r.map((e) => e.left)),
      ),
    ),
    a = e.querySelector(St),
    o = e.querySelector(N);
  if (a == null || o == null) return { height: Math.ceil(n.height), width: i };
  let s = o.getBoundingClientRect(),
    c = Math.max(
      0,
      ...Array.from(o.querySelectorAll(R)).map(
        (e) => e.getBoundingClientRect().bottom - s.bottom,
      ),
    );
  return {
    height: Math.ceil(a.getBoundingClientRect().height + o.scrollHeight - c),
    width: i,
  };
}
function j(e) {
  return window.getComputedStyle(e).display === `none`;
}
function bt(e) {
  let t = 1;
  for (let n = e; n != null; n = n.parentElement)
    t *= Number(window.getComputedStyle(n).opacity || `1`);
  return t;
}
var M,
  xt,
  St,
  N,
  P,
  F,
  Ct,
  I,
  L,
  R,
  z,
  wt = e(() => {
    ((M = `.codex-avatar-root`),
      (xt = `[data-avatar-overlay-size='notification-tray']`),
      (St = `[data-avatar-overlay-size='notification-tray-header']`),
      (N = `[data-avatar-overlay-size='notification-tray-list']`),
      (P = `[data-avatar-overlay-measure='notification-tray-row']`),
      (F = `[data-avatar-overlay-size='notification-stack-backing-layout']`),
      (Ct = `[data-avatar-overlay-size='notification-stack-visible-layout']`),
      (I = `[data-avatar-overlay-native-surface-id]`),
      (L = `[data-avatar-overlay-chromium-overflow='true']`),
      (R = `[data-avatar-overlay-backing-canvas='true']`),
      (z = [M, xt, St, N, P, F, Ct, I, L]));
  });
function B() {
  let e = (0, W.c)(13),
    { selectedAvatar: t, selectedAvatarId: n } = st(),
    r = t == null,
    i,
    a;
  (e[0] === r
    ? ((i = e[1]), (a = e[2]))
    : ((i = () => {
        r &&
          m.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, {
            isInteractive: !1,
          });
      }),
      (a = [r]),
      (e[0] = r),
      (e[1] = i),
      (e[2] = a)),
    (0, G.useEffect)(i, a));
  let o, s;
  if (
    (e[3] === r
      ? ((o = e[4]), (s = e[5]))
      : ((o = () => {
          r &&
            m.dispatchMessage(`avatar-overlay-composition-changed`, {
              state: null,
            });
        }),
        (s = [r]),
        (e[3] = r),
        (e[4] = o),
        (e[5] = s)),
    (0, G.useLayoutEffect)(o, s),
    t == null)
  )
    return null;
  let c;
  e[6] !== t || e[7] !== n
    ? ((c = Dt(t, n)), (e[6] = t), (e[7] = n), (e[8] = c))
    : (c = e[8]);
  let l;
  return (
    e[9] !== t || e[10] !== n || e[11] !== c
      ? ((l = (0, At.jsx)(V, { selectedAvatar: t, selectedAvatarId: n }, c)),
        (e[9] = t),
        (e[10] = n),
        (e[11] = c),
        (e[12] = l))
      : (l = e[12]),
    l
  );
}
function V({ selectedAvatar: e, selectedAvatarId: t }) {
  let n = o(r),
    i = De(),
    a = ae() === !0,
    s = C(`451951815`),
    c = C(`665486075`),
    l = C(`1380537759`),
    u = C(Ie),
    ee = Re(Oe),
    te = ne(ye),
    { mascotWidthPx: d, setMascotWidthPx: f } = Ye(),
    { data: p = [], refetch: h } = Ne(),
    { data: re = [], refetch: g } = de({ taskFilter: `current`, limit: 20 }),
    oe = ce(),
    se = pe(),
    le = Xe({
      includeCompactWaitingRequests: s,
      includeMcpElicitationCancelAction: !0,
      intl: i,
      localConversations: p,
      excludedConversationId: null,
      remoteTasks: re,
    });
  return (0, At.jsx)(H, {
    isDarkAppearance: a,
    dictationCleanupEnabled: !1,
    dictationStreamingEnabled: u,
    dictationSupportState: ee,
    latestTurnItems: (e) => (e == null ? void 0 : n.get(ke, e)?.items),
    mascotWidthPx: d,
    productLogger: te,
    globalDictationOrbEnabled: l,
    quickChatEnabled: c,
    selectedAvatar: e,
    selectedAvatarId: t,
    sessions: le,
    onClosePet: () => {
      m.dispatchMessage(`avatar-overlay-close`, {});
    },
    onMascotClick: () => {
      m.dispatchMessage(`open-current-main-window`, {});
    },
    onMascotWidthChange: f,
    onRefreshLocalSessions: h,
    onRefreshRemoteSessions: g,
    onRunNotificationControl: async (e, t) => {
      let r = e.controlTarget;
      switch (t.type) {
        case `close-follow-up`:
        case `open-follow-up`:
          return;
        case `stop`:
          if (r == null) return;
          switch (r.type) {
            case `app-server-conversation`:
              (await E(`interrupt-conversation`, {
                conversationId: r.conversationId,
                initiatedBy: `user`,
              }),
                Promise.resolve(h()).catch(() => {}));
              return;
            case `cloud-task`:
              (await oe.mutateAsync(r.taskId),
                Promise.resolve(g()).catch(() => {}));
              return;
          }
        case `submit-follow-up`: {
          let e = t.prompt.trim();
          if (r == null || e.length === 0) return;
          switch (r.type) {
            case `app-server-conversation`:
              (await E(`send-follow-up-message`, {
                conversationId: r.conversationId,
                prompt: e,
                serviceTier: await ie(
                  n,
                  n.get(xe, r.conversationId) ?? `local`,
                  null,
                ),
              }),
                Promise.resolve(h()).catch(() => {}));
              return;
            case `cloud-task`:
              (await se.mutateAsync({
                taskId: r.taskId,
                turnId: r.turnId,
                prompt: e,
                ideContext: ``,
                runEnvironmentInQaMode: !1,
                priorConversation: null,
                images: null,
              }),
                Promise.resolve(g()).catch(() => {}));
              return;
          }
        }
      }
    },
    onRunNotificationAction: (e, t) => {
      let r = e.waitingRequest;
      if (e.localConversationId != null && t != null) {
        let i = e.localConversationId;
        switch (t.intent) {
          case `command-approval`:
            if (
              t.commandDecision != null &&
              (r?.kind === `exec` || r?.kind === `network`)
            ) {
              E(`reply-with-command-execution-approval-decision`, {
                conversationId: i,
                requestId: r.requestId,
                decision: t.commandDecision,
              }).then(() => {
                h();
              });
              return;
            }
            break;
          case `file-approval`:
            if (t.fileDecision != null && r?.kind === `patch`) {
              E(`reply-with-file-change-approval-decision`, {
                conversationId: i,
                requestId: r.requestId,
                decision: t.fileDecision,
              }).then(() => {
                h();
              });
              return;
            }
            break;
          case `permission-response`:
            if (t.permissionResponse != null && r?.kind === `permission`) {
              E(`reply-with-permissions-request-approval-response`, {
                conversationId: i,
                requestId: r.requestId,
                response: t.permissionResponse,
              }).then(() => {
                h();
              });
              return;
            }
            break;
          case `mcp-elicitation`:
            if (t.mcpElicitationAction != null && r?.kind === `tool`) {
              E(`reply-with-mcp-server-elicitation-response`, {
                conversationId: i,
                requestId: r.requestId,
                response: ge(t.mcpElicitationAction),
              }).then(() => {
                h();
              });
              return;
            }
            break;
          case `plan-start`:
            if (r?.kind === `plan` && t.planStartCollaborationMode != null) {
              E(`update-thread-settings-for-next-turn`, {
                conversationId: i,
                threadSettings: {
                  collaborationMode: t.planStartCollaborationMode,
                },
              })
                .then(() =>
                  E(`remove-plan-implementation-request`, {
                    conversationId: i,
                    turnId: r.turnId,
                  }),
                )
                .then(async () =>
                  E(`send-follow-up-message`, {
                    conversationId: i,
                    prompt: `${Ae}\n${r.planContent}`,
                    serviceTier: await ie(
                      n,
                      n.get(xe, i) ?? `local`,
                      t.planStartCollaborationMode?.settings.model ?? null,
                    ),
                  }),
                )
                .then(() => {
                  h();
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
          m.dispatchMessage(`open-in-main-window`, { path: e.action.path }));
    },
    onSubmitQuestionOption: (e, t) => {
      let n = e.waitingRequest;
      e.localConversationId == null ||
        n?.kind !== `question` ||
        E(`reply-with-user-input-response`, {
          conversationId: e.localConversationId,
          requestId: n.requestId,
          response: { answers: { [t.questionId]: { answers: [t.label] } } },
        }).then(() => {
          h();
        });
    },
    onSubmitQuickChat: async (e) => {
      (await Fe({
        model: void 0,
        prompt: e,
        scope: n,
        target: { type: `projectless` },
        thinking: void 0,
      }),
        await h());
    },
  });
}
function H({
  dictationCleanupEnabled: e,
  dictationStreamingEnabled: t,
  dictationSupportState: n,
  firstAwakeNotificationEnabled: a = !0,
  globalDictationOrbEnabled: s = !1,
  isDarkAppearance: u,
  latestTurnItems: te,
  mascotWidthPx: d,
  productLogger: f,
  quickChatEnabled: p,
  selectedAvatar: g,
  selectedAvatarId: ie,
  sessions: ae,
  onClosePet: oe,
  onMascotClick: se,
  onMascotWidthChange: ce,
  onRefreshLocalSessions: ue,
  onRefreshRemoteSessions: de,
  onRunNotificationControl: fe,
  onRunNotificationAction: pe,
  onSubmitQuestionOption: ge,
  onSubmitQuickChat: ve,
}) {
  let ye = o(r),
    be = ne(nt),
    _ = Ft.phase !== `inactive` && !0;
  i(ke, void 0);
  let { data: xe } = me({ enabled: _, hostId: void 0 }),
    v = De(),
    [y, Ce] = (0, G.useState)(Rt),
    [b, we] = (0, G.useState)(!1),
    [Oe, C] = (0, G.useState)(!0),
    [w, T] = (0, G.useState)(!1),
    [Ae, E] = (0, G.useState)(!1),
    [je, Ne] = (0, G.useState)(!1),
    [Pe, Fe] = (0, G.useState)(!1),
    [Ie, Le] = (0, G.useState)(null),
    [Re, ze] = (0, G.useState)(``),
    [Be, Ve] = (0, G.useState)(0),
    [He, D] = (0, G.useState)(null),
    [Ke, qe] = (0, G.useState)([]),
    [Ye, Xe] = (0, G.useState)({}),
    [Ze, Qe] = (0, G.useState)(0),
    [et, tt] = (0, G.useState)(!1),
    [rt, O] = (0, G.useState)(null),
    [st, ut] = (0, G.useState)(!1),
    [k, A] = (0, G.useState)(null),
    [pt, yt] = (0, G.useState)(() => new Map()),
    [j, bt] = (0, G.useState)(() => Date.now()),
    [M] = (0, G.useState)(() => (a ? Et(g, ie) : null)),
    xt =
      M == null
        ? null
        : lt({ intl: v, petName: M.petName, startedAtMs: M.startedAtMs }),
    St = [],
    { nextNotificationExpiresAtMs: N, notifications: P } = at({
      dismissedNotificationTurnKeys: pt,
      extraNotifications: _ ? [...[], ...St] : xt == null ? [] : [xt],
      latestActivityFirst: !0,
      nowMs: j,
      sessions: _ ? [] : ae,
    }),
    F = P.map((e) => ({
      copy: Ue({
        intl: v,
        latestTurnItems:
          e.source === `local` && !e.id.startsWith(`realtime-`)
            ? te(e.localConversationId)
            : void 0,
        notification: e,
        notificationCount: P.length,
      }),
      notification: e,
    })),
    Ct = ct(P, v),
    I = Oe ? P.map(({ id: e }) => ({ height: Ye[e] ?? 54, id: e })) : Nt,
    L = c({
      expanded: b || w,
      items: I,
      scrollOffset: Ze,
      viewportRect: { height: Mt, left: 0, top: 0, width: 345 },
    }),
    R = ae.some((e) => e.source !== `cloud` && e.status === `running`),
    z = ae.some((e) => e.source === `cloud` && e.status === `running`),
    wt = p && (Ae || je || Pe),
    B = (0, G.useRef)(null),
    V = (0, G.useRef)(null),
    H = (0, G.useRef)(null),
    Dt = (0, G.useRef)(null),
    U = (0, G.useRef)(null),
    W = (0, G.useRef)(null),
    K = (0, G.useRef)(null),
    zt = (0, G.useRef)(null),
    Bt = (0, G.useRef)(0),
    Vt = (0, G.useRef)(null),
    Ht = (0, G.useRef)(null),
    Ut = (0, G.useRef)(!1),
    q = (0, G.useCallback)(
      (e, t, n, r = w) => {
        f.logProductEvent(
          _e,
          Me({
            action: e,
            hasRunningCloudSession: z,
            hasRunningLocalSession: R,
            isNotificationTrayOpen: r,
            notification: n,
            notificationCount: P.length,
            selectedAvatar: g,
            source: t,
          }),
        );
      },
      [R, z, w, P.length, f, g],
    );
  ((0, G.useEffect)(() => {
    if (M == null) return;
    let e = Te(Pt, []);
    e.includes(M.avatarId) || he(Pt, [...e, M.avatarId]);
  }, [M]),
    (0, G.useEffect)(() => {
      Ut.current ||
        (f !== Ee &&
          ((Ut.current = !0),
          q(
            x.CODEX_AVATAR_OVERLAY_ACTION_OPENED,
            S.CODEX_AVATAR_OVERLAY_SOURCE_UNSPECIFIED,
          )));
    }, [f, q]),
    $e({
      interactiveRegionRef: K,
      isPaused: () => B.current != null || V.current != null,
      onInteractiveChange: (e) => {
        m.dispatchMessage(`avatar-overlay-pointer-interaction-changed`, {
          isInteractive: e,
        });
      },
      regionElementSelectors: It,
    }));
  let Wt = (0, G.useCallback)(() => {
      let r = mt(K.current, { includeInertSurfaces: !0 });
      if (r == null) return;
      let i = vt(K.current),
        a = ft({
          activityStackPresentation: L,
          isNotificationStackExpanded: b || w,
          measuredSurfaces: ht(K.current, re, { includeInert: !0 }),
          policies: l({
            activityStackPresentation: L,
            isNotificationStackExpanded: b || w,
            isQuickChatVisible: wt,
            showsNotificationBadge: F.length > 0,
          }),
        }),
        o = {
          ...Ye,
          ...Object.fromEntries(
            L.slots.flatMap(({ itemId: e, slotId: t }) => {
              let n = a.find((e) => e.id === t);
              return n == null ? [] : [[e, Math.ceil(n.rect.height)]];
            }),
          ),
        };
      if (!(0, kt.default)(Ye, o) && (Xe(o), b)) return;
      let s = {
          activityStackBackingLayoutHeight: i.backing,
          activityStackItems: I,
          activityStackPresentation: L,
          activityStackScrollOffset: Ze,
          activityStackVisibleLayoutHeight: i.visible,
          mascot: r.mascot,
          surfaces: a,
          tray: r.tray,
        },
        c = {
          contentState: {
            activities: F,
            activityStackBackingLayoutHeight:
              s.activityStackBackingLayoutHeight,
            activityStackItems: s.activityStackItems,
            activityStackPresentation: s.activityStackPresentation,
            activityStackScrollOffset: s.activityStackScrollOffset,
            activityStackVisibleLayoutHeight:
              s.activityStackVisibleLayoutHeight,
            expandedNotificationIds: Ke,
            isDarkAppearance: u,
            isNotificationStackExpanded: w,
            isQuickChatVisible: wt,
            layout: y,
            locale: v.locale,
            notificationFollowUp: He,
            pointerSurfaceId: Ie,
            quickChatDictation: {
              cleanupEnabled: e,
              streamingEnabled: t,
              supportState: n,
            },
            quickChatDraft: Re,
            quickChatResetRevision: Be,
          },
          measurements: s,
        };
      (0, kt.default)(c, Ht.current) ||
        ((Ht.current = c),
        m.dispatchMessage(`avatar-overlay-composition-changed`, { state: c }));
    }, [
      F,
      Ye,
      I,
      L,
      Ze,
      Ke,
      v.locale,
      u,
      w,
      wt,
      y,
      b,
      He,
      Ie,
      e,
      t,
      n,
      Re,
      Be,
    ]),
    J = (0, G.useCallback)(() => {
      if (V.current != null || U.current != null) return;
      let e = mt(K.current);
      if (e == null) return;
      if (Ot(zt.current, e)) {
        if (b && Vt.current != null) return;
        (b || (Vt.current = null), Wt());
        return;
      }
      let t = zt.current == null;
      zt.current = e;
      let n = b && !t ? Bt.current + 1 : null;
      (n != null && (Bt.current = n),
        (Vt.current = n),
        m.dispatchMessage(`avatar-overlay-element-size-changed`, {
          ...(n == null ? {} : { elementSizeRevision: n }),
          mascot: e.mascot,
          tray: e.tray,
        }),
        t && Wt());
    }, [b, Wt]),
    Y = (0, G.useCallback)(() => {
      W.current != null && (window.clearTimeout(W.current), (W.current = null));
    }, []),
    Gt = (0, G.useCallback)(() => {
      (H.current != null &&
        (window.cancelAnimationFrame(H.current), (H.current = null)),
        (Dt.current = null));
    }, []),
    Kt = (0, G.useCallback)((e) => {
      ((Dt.current = e),
        (H.current ??= window.requestAnimationFrame(() => {
          H.current = null;
          let e = Dt.current;
          ((Dt.current = null),
            !(e == null || V.current == null) &&
              m.dispatchMessage(`avatar-overlay-mascot-resize-move`, {
                width: e,
              }));
        })));
    }, []),
    qt = (0, G.useCallback)(
      (e) => {
        ((U.current = e),
          Y(),
          (W.current = window.setTimeout(() => {
            ((W.current = null), (U.current = null), A(null), J());
          }, 100)));
      },
      [Y, J],
    ),
    Jt = (0, G.useCallback)(
      () =>
        _t(K.current?.querySelector(`.codex-avatar-root`) ?? null)?.width ??
        d ??
        112,
      [d],
    ),
    X = (0, G.useCallback)((e, t) => {
      let n = V.current;
      n == null ||
        n.pointerId !== e ||
        ((V.current = null),
        tt(!1),
        t?.hasPointerCapture?.(e) && t.releasePointerCapture?.(e));
    }, []),
    Z = (0, G.useCallback)(
      (e, t) => {
        let n = V.current;
        if (n == null || n.pointerId !== e) return;
        let r = t == null ? n.currentWidthPx : Tt(n, t);
        ((n.currentWidthPx = r),
          Gt(),
          A(r),
          ce(r),
          qt(r),
          m.dispatchMessage(`avatar-overlay-mascot-resize-end`, { width: r }));
      },
      [Gt, ce, qt],
    ),
    Q = (0, G.useCallback)(
      (e, t) => {
        let n = B.current;
        if (n == null || n.pointerId !== e.pointerId) return;
        ((B.current = null), O(null));
        let r = null;
        (e.currentTarget instanceof HTMLElement
          ? (r = e.currentTarget)
          : e.target instanceof HTMLElement && (r = e.target),
          r?.hasPointerCapture?.(e.pointerId) &&
            r.releasePointerCapture?.(e.pointerId));
        let {
          hasMoved: i,
          releaseSample: a,
          velocity: o,
        } = it(n, t ? ot(e) : void 0, !t && n.usesOrbPhysics);
        (t &&
          !i &&
          (q(
            x.CODEX_AVATAR_OVERLAY_ACTION_MASCOT_CLICKED,
            S.CODEX_AVATAR_OVERLAY_SOURCE_MASCOT,
          ),
          se()),
          i &&
            !n.hasMoved &&
            a != null &&
            m.dispatchMessage(`avatar-overlay-drag-move`, {
              pointerScreenX: a.screenX,
              pointerScreenY: a.screenY,
            }));
        let s = a ?? n;
        (m.dispatchMessage(`avatar-overlay-drag-end`, {
          pointerScreenX: s.screenX,
          pointerScreenY: s.screenY,
        }),
          n.usesOrbPhysics &&
            o != null &&
            m.dispatchMessage(`avatar-overlay-drag-release`, {
              shouldBounce: !0,
              velocityX: o.x * 3,
              velocityY: o.y * 3,
            }));
      },
      [_, se, void 0, null, q],
    ),
    Yt = (e) => {
      if (
        e.button !== 0 ||
        e.ctrlKey ||
        !(e.target instanceof Element) ||
        e.target.closest(`.no-drag`) != null
      )
        return;
      (e.preventDefault(), e.currentTarget.setPointerCapture?.(e.pointerId));
      let t = _;
      ((B.current = {
        hasMoved: !1,
        pointerId: e.pointerId,
        samples: [ot(e)],
        screenX: e.screenX,
        screenY: e.screenY,
        usesOrbPhysics: t,
      }),
        O(null),
        m.dispatchMessage(`avatar-overlay-drag-start`, {
          pointerScreenX: e.screenX,
          pointerScreenY: e.screenY,
          pointerWindowX: e.clientX,
          pointerWindowY: e.clientY,
          usesOrbPhysics: t,
        }));
    },
    Xt = (e) => {
      let t = B.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      let n = ot(e);
      t.samples = dt([...t.samples, n]);
      let r = n.screenX - t.screenX,
        i = n.screenY - t.screenY;
      (Math.abs(r) < 4 && Math.abs(i) < 4) ||
        ((t.hasMoved = !0),
        (t.screenX = n.screenX),
        (t.screenY = n.screenY),
        t.usesOrbPhysics ||
          (r >= 4 ? O(`running-right`) : r <= -4 && O(`running-left`)),
        m.dispatchMessage(`avatar-overlay-drag-move`, {
          pointerScreenX: n.screenX,
          pointerScreenY: n.screenY,
        }));
    },
    Zt = (e) => {
      if (e.button !== 0) return;
      (e.preventDefault(),
        e.stopPropagation(),
        e.currentTarget.setPointerCapture?.(e.pointerId));
      let t = Jt();
      (Y(),
        Gt(),
        (U.current = null),
        (V.current = {
          currentWidthPx: t,
          pointerId: e.pointerId,
          startScreenX: e.screenX,
          startWidthPx: t,
        }),
        A(t),
        tt(!0),
        m.dispatchMessage(`avatar-overlay-mascot-resize-start`, { width: t }));
    },
    Qt = (e) => {
      let t = V.current;
      if (t == null || t.pointerId !== e.pointerId) return;
      (e.preventDefault(), e.stopPropagation());
      let n = Tt(t, e.screenX);
      ((t.currentWidthPx = n), A(n), Kt(n));
    },
    $t = (e) => {
      (Z(e.pointerId, e.screenX), X(e.pointerId, e.currentTarget));
    },
    en = (e) => {
      (e.stopPropagation(), Z(e.pointerId), X(e.pointerId, e.currentTarget));
    },
    tn = (e) => {
      (Z(e.pointerId), X(e.pointerId));
    },
    nn = (e, t) => {
      (e.action != null &&
        (t == null || t.intent === `open`) &&
        q(
          x.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_OPENED,
          S.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
          e,
        ),
        pe(e, t));
    },
    rn = (e, t) => {
      ge(e, t);
    },
    an = (e) => {
      (q(
        x.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_DISMISSED,
        S.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        e,
      ),
        yt((t) => {
          if (t.get(e.id) === e.turnKey) return t;
          let n = new Map(t);
          return (n.set(e.id, e.turnKey), n);
        }));
    },
    on = () => {
      (q(
        x.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_OPENED,
        S.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
        void 0,
        !0,
      ),
        m.dispatchMessage(`avatar-overlay-composition-surface-action`, {
          action: { type: `open-notification-stack` },
        }),
        T(!0));
    },
    sn = (e, t) => {
      qe((n) =>
        t ? (n.includes(e) ? n : [...n, e]) : n.filter((t) => t !== e),
      );
    },
    cn = (e) => {
      let t = P.find(({ id: t }) => t === e);
      if (t != null) {
        if (!w && P.length > 1) {
          on();
          return;
        }
        nn(t);
      }
    },
    ln = async (e) => {
      if (!p) return;
      let t = e.trim();
      t.length !== 0 && (await ve(t), ze(``), Ve((e) => e + 1));
    },
    $ = (0, G.useCallback)((e) => {
      m.dispatchMessage(`avatar-overlay-keyboard-interaction-changed`, {
        isInteractive: e,
      });
    }, []),
    un = (e, t, n = !0) => {
      let r = e.controlTarget;
      switch (t.type) {
        case `close-follow-up`:
          (D(null), n && $(!1));
          return;
        case `open-follow-up`:
          if (!e.isLoading || r == null) return;
          (D({
            notificationId: e.id,
            submissionStatus: `idle`,
            turnKey: e.turnKey,
          }),
            n && $(!0));
          return;
        case `stop`:
          if (r == null) return;
          (D(null),
            Promise.resolve(fe(e, t)).catch(() => {
              ye.get(le).danger(
                v.formatMessage({
                  id: `avatarOverlay.stopNotificationError`,
                  defaultMessage: `Unable to stop activity`,
                  description: `Error shown when stopping a running activity from the floating avatar overlay fails`,
                }),
              );
            }));
          return;
        case `submit-follow-up`: {
          let i = t.prompt.trim();
          if (r == null || i.length === 0) return;
          (D((t) =>
            t?.notificationId === e.id && t.turnKey === e.turnKey
              ? { ...t, submissionStatus: `submitting` }
              : t,
          ),
            Promise.resolve(fe(e, { type: `submit-follow-up`, prompt: i }))
              .then(() => {
                (D((t) =>
                  t?.notificationId === e.id && t.turnKey === e.turnKey
                    ? null
                    : t,
                ),
                  n && $(!1));
              })
              .catch(() => {
                D((t) =>
                  t?.notificationId === e.id && t.turnKey === e.turnKey
                    ? { ...t, submissionStatus: `error` }
                    : t,
                );
              }));
          return;
        }
      }
    };
  return (
    h(
      `avatar-overlay-composition-action`,
      ({ action: e }) => {
        switch (e.type) {
          case `activate-notification`:
            cn(e.notificationId);
            return;
          case `activity-stack-scroll-offset-changed`:
            Qe(e.offset);
            return;
          case `close-notification-stack`:
            T(!1);
            return;
          case `composition-pointer-surface-changed`:
            Le(e.surfaceId);
            return;
          case `open-notification-stack`:
            T(!0);
            return;
          case `notification-expansion-changed`:
            sn(e.notificationId, e.isExpanded);
            return;
          case `quick-chat-active-changed`:
            return;
          case `quick-chat-draft-changed`:
            if (!p) return;
            ze(e.draft);
            return;
          case `quick-chat-surface-hover-changed`:
            if (!p) return;
            Fe(e.isHovered);
            return;
          case `quick-chat-visibility-changed`:
            if (!p) return;
            Ne(e.isVisible);
            return;
          case `scroll-activity-stack`:
            Qe((t) =>
              ee({
                contentHeight: L.contentHeight,
                deltaY: e.deltaY,
                scrollOffset: t,
                viewportHeight: L.viewportRect.height,
              }),
            );
            return;
          case `submit-quick-chat`:
            ln(e.prompt);
            return;
          case `dismiss-notification`: {
            let t = P.find(({ id: t }) => t === e.notificationId);
            t != null && an(t);
            return;
          }
          case `run-notification-control`: {
            let t = P.find(({ id: t }) => t === e.notificationId);
            t == null
              ? e.action.type === `close-follow-up` && D(null)
              : un(t, e.action, !1);
            return;
          }
          case `run-notification-action`: {
            let t = P.find(({ id: t }) => t === e.notificationId);
            t != null && nn(t, e.action);
            return;
          }
          case `submit-question-option`: {
            let t = P.find(({ id: t }) => t === e.notificationId);
            t != null && rn(t, e.option);
          }
        }
      },
      [w, P],
    ),
    h(
      `avatar-overlay-layout-changed`,
      ({ elementSizeRevision: e, layout: t, nativeMaterialAttached: n }) => {
        (e === Vt.current && (Vt.current = null),
          Ce(t),
          we(n),
          U.current === t.mascot.width && ((U.current = null), Y(), A(null)));
      },
      [Y],
    ),
    (0, G.useLayoutEffect)(() => {
      let e = (!be && st) || et;
      return (
        document.documentElement.classList.toggle(Lt, e),
        document.body.classList.toggle(Lt, e),
        () => {
          (document.documentElement.classList.remove(Lt),
            document.body.classList.remove(Lt));
        }
      );
    }, [be, st, et]),
    (0, G.useEffect)(
      () => () => {
        (Y(), Gt());
      },
      [Gt, Y],
    ),
    (0, G.useEffect)(() => {
      let e = (e) => {
          (Q(e, !0), Z(e.pointerId, e.screenX), X(e.pointerId));
        },
        t = (e) => {
          (Q(e, !1), Z(e.pointerId), X(e.pointerId));
        };
      return (
        window.addEventListener(`pointerup`, e),
        window.addEventListener(`pointercancel`, t),
        () => {
          (window.removeEventListener(`pointerup`, e),
            window.removeEventListener(`pointercancel`, t));
        }
      );
    }, [Z, Q, X]),
    (0, G.useLayoutEffect)(() => {
      let e = null,
        t = () => {
          e ??= window.requestAnimationFrame(() => {
            ((e = null), J());
          });
        },
        n = new ResizeObserver(t),
        r = K.current;
      if (r != null) {
        n.observe(r);
        for (let e of gt(r)) n.observe(e);
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
    }, [J, g.id, Ct]),
    (0, G.useLayoutEffect)(() => {
      J();
    }, [w, y, J, g.id, Ct, d]),
    (0, G.useEffect)(() => {
      if (N == null) return;
      let e = Math.max(0, N - Date.now()),
        t = window.setTimeout(() => {
          bt((e) => Math.max(Date.now(), e + 1));
        }, e);
      return () => {
        window.clearTimeout(t);
      };
    }, [N]),
    (0, G.useEffect)(() => {
      if (!R && !z) return;
      let e = window.setTimeout(() => {
        (bt((e) => Math.max(Date.now(), e + 1)), R && ue(), z && de());
      }, jt);
      return () => {
        window.clearTimeout(e);
      };
    }, [R, z, ue, de]),
    (0, At.jsx)(We, {
      activityCopies: F.map(({ copy: e }) => e),
      activityStackPresentation: L,
      areActivityPillsVisible: Oe,
      avatar: g,
      avatarMenuItems: [
        {
          id: `close-avatar`,
          message: Se({
            id: `petOverlay.closePet`,
            defaultMessage: `Close pet`,
            description: `Context menu item that closes the floating Codex pet`,
          }),
          onSelect: () => {
            (q(
              x.CODEX_AVATAR_OVERLAY_ACTION_CLOSE_REQUESTED,
              S.CODEX_AVATAR_OVERLAY_SOURCE_CONTEXT_MENU,
            ),
              oe());
          },
        },
      ],
      globalDictationOrbEnabled: s,
      interactiveRegionRef: K,
      isNotificationTrayOpen: w,
      layout: y,
      mascotDragState: rt,
      nativeMaterialAttached: b,
      expandedNotificationIds: Ke,
      notificationStackContentExpanded: b ? !0 : void 0,
      mascotLayout:
        et && k != null
          ? { ...y.mascot, height: Math.ceil(k / Je), width: k }
          : y.mascot,
      mascotResizeHandle: be
        ? void 0
        : {
            onLostPointerCapture: tn,
            onPointerCancel: en,
            onPointerDown: Zt,
            onPointerEnter: () => {
              ut(!0);
            },
            onPointerLeave: () => {
              ut(!1);
            },
            onPointerMove: Qt,
            onPointerUp: $t,
          },
      mascotStyle: Ge(k ?? d),
      notifications: P,
      pointerSurfaceId: Ie,
      quickChatDictation: {
        cleanupEnabled: e,
        streamingEnabled: t,
        supportState: n,
      },
      onActivityStackScroll: (e) => {
        Qe((t) =>
          ee({
            contentHeight: L.contentHeight,
            deltaY: e,
            scrollOffset: t,
            viewportHeight: L.viewportRect.height,
          }),
        );
      },
      onActivateNotification: cn,
      onHideActivityPills: () => {
        if (($(!1), w && P.length > 1)) {
          (q(
            x.CODEX_AVATAR_OVERLAY_ACTION_NOTIFICATION_TRAY_CLOSED,
            S.CODEX_AVATAR_OVERLAY_SOURCE_NOTIFICATION_ROW,
            void 0,
            !1,
          ),
            m.dispatchMessage(`avatar-overlay-composition-surface-action`, {
              action: { type: `close-notification-stack` },
            }),
            T(!1));
          return;
        }
        (T(!1), C(!1));
      },
      onMascotLostPointerCapture: (e) => {
        Q(e, !1);
      },
      onMascotPointerCancel: (e) => {
        Q(e, !1);
      },
      onMascotPointerDown: Yt,
      onMascotPointerMove: Xt,
      onMascotPointerUp: (e) => {
        Q(e, !0);
      },
      onNotificationExpansionChange: sn,
      onDismissNotification: an,
      notificationFollowUp: He,
      onQuickChatEditorActiveChange: $,
      onQuickChatDraftChange: p ? ze : void 0,
      onQuickChatVisibilityChange: p ? E : void 0,
      onRunNotificationControl: un,
      onRunNotificationAction: nn,
      onSubmitQuestionOption: rn,
      onSubmitQuickChat: ln,
      onShowActivityPills: () => {
        C(!0);
      },
      quickChatDraft: Re,
      quickChatVisible: wt,
      restrictedSurface: void 0,
      renderMode: { type: `native-root` },
    })
  );
}
function Tt(e, t) {
  return Ke(e.startWidthPx + t - e.startScreenX);
}
function Et(e, t) {
  return Ze(e, t) || Te(Pt, []).includes(e.id)
    ? null
    : { avatarId: e.id, petName: e.displayName, startedAtMs: Date.now() };
}
function Dt(e, t) {
  return Ze(e, t) ? `pending-custom-avatar` : `ready`;
}
function Ot(e, t) {
  return (
    e != null &&
    e.mascot.width === t.mascot.width &&
    e.mascot.height === t.mascot.height &&
    U(e.tray, t.tray)
  );
}
function U(e, t) {
  return (
    e === t ||
    (e != null && t != null && e.width === t.width && e.height === t.height)
  );
}
var W, kt, G, At, jt, Mt, Nt, Pt, Ft, It, Lt, Rt;
e(() => {
  ((W = f()),
    _(),
    (kt = t(a(), 1)),
    u(),
    s(),
    (G = t(d(), 1)),
    be(),
    ze(),
    Pe(),
    v(),
    T(),
    y(),
    we(),
    g(),
    je(),
    Qe(),
    oe(),
    fe(),
    Le(),
    et(),
    te(),
    b(),
    ue(),
    n(),
    Ce(),
    Be(),
    w(),
    ve(),
    se(),
    Ve(),
    pt(),
    tt(),
    O(),
    ut(),
    qe(),
    wt(),
    He(),
    rt(),
    D(),
    k(),
    (At = p()),
    (jt = 15e3),
    (Mt = 208),
    (Nt = []),
    (Pt = `first-awake-pet-notification-avatar-ids`),
    (Ft = {
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
    (It = [`[data-avatar-overlay-hit-region]`, `[data-avatar-mascot='true']`]),
    (Lt = `codex-avatar-overlay-force-resize-cursor`),
    (Rt = {
      mascot: { left: 244, top: 207, width: 112, height: 121 },
      placement: `top-end`,
      tray: { left: 19.5, top: 70, width: 345, height: 120 },
      viewport: { width: 384, height: 400 },
    }));
})();
export { B as AvatarOverlayNativePage };
//# sourceMappingURL=avatar-overlay-native-page-CAxsNCX7.js.map
