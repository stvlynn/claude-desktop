import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  C as n,
  Go as r,
  Gs as i,
  O as a,
  S as o,
  Vo as s,
  _ as c,
  _c as l,
  d as u,
  gc as d,
  lc as f,
  p,
  qo as m,
  qs as h,
  ta as g,
  v as _,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  $a as v,
  Bf as y,
  Cc as b,
  Jo as x,
  Rf as S,
  bc as C,
  cn as w,
  dc as T,
  er as E,
  fc as D,
  qo as O,
  ro as k,
  rr as A,
  sn as j,
  ti as M,
  wc as N,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  $o as P,
  Dm as ee,
  Em as F,
  Fr as I,
  If as L,
  Jd as R,
  Jo as z,
  Km as B,
  Ko as V,
  Lf as te,
  Om as H,
  Op as U,
  Pr as W,
  Sd as ne,
  Tm as G,
  as as re,
  bs as ie,
  ca as ae,
  df as oe,
  eo as se,
  fh as ce,
  hf as le,
  hh as ue,
  ia as de,
  io as fe,
  kp as pe,
  la as me,
  ls as he,
  mf as ge,
  mh as _e,
  no as K,
  ns as ve,
  oa as ye,
  oo as be,
  op as xe,
  ph as Se,
  qm as Ce,
  qo as we,
  sp as Te,
  tf as Ee,
  us as De,
  xd as Oe,
  xp as ke,
  yp as Ae,
  ys as je,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  A as Me,
  Cl as Ne,
  Fa as Pe,
  Fy as Fe,
  Iy as Ie,
  N as Le,
  Na as Re,
  Ng as ze,
  Pa as Be,
  Tl as Ve,
  Vy as He,
  fh as Ue,
  gh as We,
  gl as Ge,
  hl as Ke,
  ry as qe,
  ty as Je,
  x_ as Ye,
  xa as Xe,
  y_ as Ze,
  zy as q,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  E as Qe,
  M as $e,
  Sn as et,
  rt as tt,
  xn as nt,
  y as rt,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Xd as it,
  Zd as at,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  ir as ot,
  nr as st,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  M as ct,
  Q as lt,
  X as ut,
  Y as dt,
  Z as ft,
  j as pt,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page-px21igmO.js";
import {
  n as mt,
  t as ht,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0-BaxBxQFI.js";
import {
  n as gt,
  t as _t,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~n4ikpxgm-MU61VBEm.js";
import { n as vt, t as yt } from "./dock-BXG1fB9e.js";
function bt(e) {
  let t = (0, Dt.c)(27),
    { conversationId: n } = e,
    r = He(),
    i,
    a;
  t[0] === r
    ? ((i = t[1]), (a = t[2]))
    : ((i = Et()),
      (a =
        i == null
          ? null
          : r.formatMessage(jt.extensionVersion, { version: i })),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a));
  let o = a,
    s;
  t[3] === r
    ? (s = t[4])
    : ((s = r.formatMessage(jt.codexForChrome)), (t[3] = r), (t[4] = s));
  let c = s,
    l = o == null ? c : `${c} ${o}`,
    u = Ct,
    d = St,
    f = xt,
    p;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, J.jsx)(q, { ...jt.moreActionsTrigger })), (t[5] = p))
    : (p = t[5]);
  let m;
  t[6] === r
    ? (m = t[7])
    : ((m = r.formatMessage(jt.moreActionsTrigger)), (t[6] = r), (t[7] = m));
  let h;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, J.jsx)(T, { className: `icon-xs` })), (t[8] = h))
    : (h = t[8]);
  let g;
  t[9] === m
    ? (g = t[10])
    : ((g = (0, J.jsx)(Ae, {
        tooltipContent: p,
        children: (0, J.jsx)(G, {
          color: `ghost`,
          size: `icon`,
          "aria-label": m,
          children: h,
        }),
      })),
      (t[9] = m),
      (t[10] = g));
  let _;
  t[11] === n
    ? (_ = t[12])
    : ((_ =
        n == null
          ? null
          : (0, J.jsx)(K.Item, {
              RightIcon: it,
              onSelect: () => {
                wt(`codex://threads/${n}`);
              },
              children: (0, J.jsx)(q, {
                id: `header.openInApp`,
                defaultMessage: `Open in app`,
                description: `Menu item label for opening the active Chrome extension thread in the Codex desktop app`,
              }),
            })),
      (t[11] = n),
      (t[12] = _));
  let v;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, J.jsx)(K.Item, {
        RightIcon: it,
        onSelect: d,
        children: (0, J.jsx)(q, { ...jt.appSettings }),
      })),
      (t[13] = v))
    : (v = t[13]);
  let y;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, J.jsx)(K.Item, {
        RightIcon: it,
        onSelect: f,
        children: (0, J.jsx)(q, { ...jt.chromeComputerUseSettings }),
      })),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, J.jsx)(q, { ...jt.codexForChrome })), (t[15] = b))
    : (b = t[15]);
  let x;
  t[16] === i
    ? (x = t[17])
    : ((x =
        i == null
          ? null
          : (0, J.jsx)(`span`, {
              className: `shrink-0`,
              children: (0, J.jsx)(q, {
                ...jt.extensionVersion,
                values: { version: i },
              }),
            })),
      (t[16] = i),
      (t[17] = x));
  let S;
  t[18] === x
    ? (S = t[19])
    : ((S = (0, J.jsxs)(`span`, {
        className: `flex w-full items-center justify-between gap-4`,
        children: [b, x],
      })),
      (t[18] = x),
      (t[19] = S));
  let C;
  t[20] !== l || t[21] !== S
    ? ((C = (0, J.jsx)(K.Item, {
        "aria-label": l,
        className: `text-token-foreground/50 hover:!bg-transparent focus:!bg-transparent`,
        onSelect: u,
        children: S,
      })),
      (t[20] = l),
      (t[21] = S),
      (t[22] = C))
    : (C = t[22]);
  let w;
  return (
    t[23] !== C || t[24] !== g || t[25] !== _
      ? ((w = (0, J.jsxs)(se, {
          align: `end`,
          contentWidth: `menuBounded`,
          triggerButton: g,
          children: [_, v, y, C],
        })),
        (t[23] = C),
        (t[24] = g),
        (t[25] = _),
        (t[26] = w))
      : (w = t[26]),
    w
  );
}
function xt() {
  wt(kt);
}
function St() {
  wt(Ot);
}
function Ct() {
  wt(Tt());
}
function wt(e) {
  re({ href: e, initiator: `open_in_browser_bridge` });
}
function Tt() {
  return globalThis.chrome?.runtime?.getURL(At) ?? At;
}
function Et() {
  return globalThis.chrome?.runtime?.getManifest?.().version ?? null;
}
var Dt,
  J,
  Ot,
  kt,
  At,
  jt,
  Mt = e(() => {
    ((Dt = d()),
      Ie(),
      F(),
      be(),
      ve(),
      ke(),
      at(),
      D(),
      (J = f()),
      (Ot = `codex://settings`),
      (kt = `codex://settings/computer-use/google-chrome`),
      (At = `popup.html`),
      (jt = Fe({
        moreActionsTrigger: {
          id: `header.moreActionsTrigger`,
          defaultMessage: `More actions`,
          description: `Button label for opening more actions from the Chrome extension side panel header`,
        },
        appSettings: {
          id: `header.appSettings`,
          defaultMessage: `App settings`,
          description: `Menu item label for opening app settings in the Codex desktop app from the Chrome extension`,
        },
        chromeComputerUseSettings: {
          id: `header.chromeComputerUseSettings`,
          defaultMessage: `Chrome computer use settings`,
          description: `Menu item label for opening Chrome computer use settings in the Codex desktop app from the Chrome extension`,
        },
        codexForChrome: {
          id: `header.codexForChrome`,
          defaultMessage: `Codex for Chrome`,
          description: `Footer label for the Chrome extension in the more actions menu`,
        },
        extensionVersion: {
          id: `header.extensionVersion`,
          defaultMessage: `v{version}`,
          description: `Footer label for the Chrome extension version in the settings menu`,
        },
      })));
  });
function Nt() {
  let e = (0, Pt.c)(12),
    t = ot(),
    n = He(),
    i = r(v, `newThread`),
    a;
  e[0] === t
    ? (a = e[1])
    : ((a = (e) => {
        e.defaultPrevented || t();
      }),
      (e[0] = t),
      (e[1] = a));
  let o = a,
    s;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Ft.jsx)(q, { ...It.newChat })), (e[2] = s))
    : (s = e[2]);
  let c;
  e[3] === n
    ? (c = e[4])
    : ((c = n.formatMessage(It.newChat)), (e[3] = n), (e[4] = c));
  let l;
  e[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Ft.jsx)(_t, { className: `icon-xs` })), (e[5] = l))
    : (l = e[5]);
  let u;
  e[6] !== o || e[7] !== c
    ? ((u = (0, Ft.jsx)(G, {
        color: `ghost`,
        size: `icon`,
        onClick: o,
        "aria-label": c,
        children: l,
      })),
      (e[6] = o),
      (e[7] = c),
      (e[8] = u))
    : (u = e[8]);
  let d;
  return (
    e[9] !== i || e[10] !== u
      ? ((d = (0, Ft.jsx)(Ae, { tooltipContent: s, shortcut: i, children: u })),
        (e[9] = i),
        (e[10] = u),
        (e[11] = d))
      : (d = e[11]),
    d
  );
}
var Pt,
  Ft,
  It,
  Lt = e(() => {
    ((Pt = d()),
      s(),
      Ie(),
      k(),
      F(),
      ke(),
      st(),
      gt(),
      (Ft = f()),
      (It = Fe({
        newChat: {
          id: `localConversationPage.newChat`,
          defaultMessage: `New chat`,
          description: `Label for starting a new chat`,
        },
      })));
  });
function Rt(e, t) {
  switch (e.kind) {
    case `remote`:
      return t.remote(e);
    case `local`:
      return t.local(e);
    case `pending-worktree`:
      return t[`pending-worktree`](e);
  }
}
var zt = e(() => {});
function Bt(e) {
  let t = (0, Ut.c)(23),
    { mergedTasks: n, tasksQuery: r } = e,
    i = Pe(),
    a = Re(),
    { cancelPendingWorktree: o } = b();
  if (r.isLoading && n.length === 0) return null;
  let s = r.error instanceof u && r.error.status === 404;
  if (r.isError && n.length === 0 && !s) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Wt.jsx)(q, {
          id: `codex.recentTasksMenu.errorCloud.inline`,
          defaultMessage: `Failed to load cloud tasks.`,
          description: `Inline error indicator for cloud tasks in recent feed`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let n;
    t[1] === r
      ? (n = t[2])
      : ((n = () => {
          r.refetch();
        }),
        (t[1] = r),
        (t[2] = n));
    let i;
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Wt.jsx)(q, {
          id: `codex.common.retry`,
          defaultMessage: `Retry`,
          description: `Retry button`,
        })),
        (t[3] = i))
      : (i = t[3]);
    let a;
    return (
      t[4] === n
        ? (a = t[5])
        : ((a = (0, Wt.jsxs)(`div`, {
            className: `mb-2 flex items-center gap-2 text-base text-token-input-placeholder-foreground`,
            children: [
              e,
              (0, Wt.jsx)(G, {
                size: `default`,
                color: `outline`,
                onClick: n,
                children: i,
              }),
            ],
          })),
          (t[4] = n),
          (t[5] = a)),
      a
    );
  }
  if (n.length === 0) return null;
  let c;
  t[6] === n ? (c = t[7]) : (n.filter(Ht), (c = n), (t[6] = n), (t[7] = c));
  let l = c,
    d;
  if (t[8] !== o || t[9] !== a || t[10] !== i || t[11] !== l) {
    let e;
    (t[13] !== o || t[14] !== a || t[15] !== i
      ? ((e = (e) =>
          Rt(e, {
            remote: (e) =>
              (0, Wt.jsx)(
                ft,
                {
                  useStableTrailingRail: !0,
                  isActive: a.pathname === `/remote/${e.task.id}`,
                  task: e.task,
                  onClose: Vt,
                },
                e.key,
              ),
            local: (e) =>
              (0, Wt.jsx)(
                pt,
                {
                  useStableTrailingRail: !0,
                  isActive: a.pathname === `/local/${e.conversation.id}`,
                  conversationId: e.conversation.id,
                  statusIndicatorReplacesMeta: !0,
                  metaContent:
                    e.conversation.createdAt == null
                      ? void 0
                      : (0, Wt.jsx)(E, {
                          dateString: new Date(
                            e.conversation.createdAt,
                          ).toISOString(),
                        }),
                  onClick: () => {
                    i(`/local/${e.conversation.id}`);
                  },
                },
                e.key,
              ),
            "pending-worktree": (e) =>
              (0, Wt.jsx)(
                dt,
                {
                  useStableTrailingRail: !0,
                  task: e.pendingWorktree,
                  hasAttention: e.pendingWorktree.needsAttention,
                  statusIndicatorReplacesMeta: !0,
                  onClick: () => {
                    i(`/worktree-init-v2/${e.pendingWorktree.id}`);
                  },
                  onArchive: () => {
                    o(e.pendingWorktree.id);
                  },
                },
                e.key,
              ),
          })),
        (t[13] = o),
        (t[14] = a),
        (t[15] = i),
        (t[16] = e))
      : (e = t[16]),
      (d = l.map(e)),
      (t[8] = o),
      (t[9] = a),
      (t[10] = i),
      (t[11] = l),
      (t[12] = d));
  } else d = t[12];
  let f;
  t[17] !== n.length || t[18] !== !1
    ? ((f = !1), (t[17] = n.length), (t[18] = !1), (t[19] = f))
    : (f = t[19]);
  let p;
  return (
    t[20] !== d || t[21] !== f
      ? ((p = (0, Wt.jsxs)(`div`, {
          className: `group/inline -mx-[var(--padding-row-x)] flex flex-col gap-px rounded-xl pb-1 transition-colors [--task-row-trailing-inset:calc(var(--spacing)*1.5)]`,
          children: [d, f],
        })),
        (t[20] = d),
        (t[21] = f),
        (t[22] = p))
      : (p = t[22]),
    p
  );
}
function Vt() {}
function Ht(e) {
  if (e.kind === `remote`) {
    let t = e.task.task_status_display?.latest_turn_status_display?.turn_status;
    return (
      e.task.has_unread_turn === !0 || t === `in_progress` || t === `pending`
    );
  }
  return e.kind === `local` && e.conversation.hasUnreadTurn
    ? !0
    : e.kind === `local`
      ? Ge(e.conversation)
      : e.kind === `pending-worktree`;
}
var Ut,
  Wt,
  Gt = e(() => {
    ((Ut = d()),
      t(ze(), 1),
      Ie(),
      Xe(),
      Ke(),
      F(),
      A(),
      p(),
      C(),
      lt(),
      ct(),
      zt(),
      ut(),
      (Wt = f()));
  });
function Kt(e, t) {
  return typeof e == `string` && e.toLowerCase().includes(t);
}
var qt = e(() => {}),
  Jt,
  Yt = e(() => {
    (B(), (Jt = Ce(`cloudTasksEnvironmentFilterId`, null)));
  });
function Xt(e) {
  let t = (0, Zt.c)(15),
    { searchQuery: n, onQueryChange: r, autoFocus: i } = e,
    a = i === void 0 ? !1 : i,
    o = He(),
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Qt.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: `recent-tasks-search`,
        children: (0, Qt.jsx)(q, {
          id: `codex.recentTasksMenu.search`,
          defaultMessage: `Search recent tasks`,
          description: `Label for the recent tasks menu search input`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === r
    ? (c = t[2])
    : ((c = (e) => r(e.target.value)), (t[1] = r), (t[2] = c));
  let l;
  t[3] === o
    ? (l = t[4])
    : ((l = o.formatMessage({
        id: `codex.recentTasksMenu.search`,
        defaultMessage: `Search recent tasks`,
        description: `Label for the recent tasks menu search input`,
      })),
      (t[3] = o),
      (t[4] = l));
  let u;
  t[5] !== o || t[6] !== r || t[7] !== n.length
    ? ((u =
        n.length > 0
          ? (0, Qt.jsx)(`button`, {
              type: `button`,
              className: `flex items-center justify-center text-token-input-placeholder-foreground transition-colors hover:text-token-foreground`,
              onClick: () => r(``),
              "aria-label": o.formatMessage({
                id: `codex.recentTasksMenu.clearSearch`,
                defaultMessage: `Clear search`,
                description: `Button label to clear the recent tasks menu search input`,
              }),
              children: (0, Qt.jsx)(xe, { className: `icon-2xs` }),
            })
          : null),
      (t[5] = o),
      (t[6] = r),
      (t[7] = n.length),
      (t[8] = u))
    : (u = t[8]);
  let d;
  return (
    t[9] !== a || t[10] !== n || t[11] !== c || t[12] !== l || t[13] !== u
      ? ((d = (0, Qt.jsxs)(`div`, {
          children: [
            s,
            (0, Qt.jsx)(fe, {
              id: `recent-tasks-search`,
              autoFocus: a,
              value: n,
              onChange: c,
              placeholder: l,
              trailingContent: u,
            }),
          ],
        })),
        (t[9] = a),
        (t[10] = n),
        (t[11] = c),
        (t[12] = l),
        (t[13] = u),
        (t[14] = d))
      : (d = t[14]),
    d
  );
}
var Zt,
  Qt,
  $t = e(() => {
    ((Zt = d()), Ie(), be(), Te(), (Qt = f()));
  });
function en() {
  let e = (0, tn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, nn.jsx)(`div`, {
          className: `flex h-48 items-center justify-center text-sm text-token-input-placeholder-foreground`,
          children: (0, nn.jsx)(q, {
            id: `codex.recentTasksMenu.empty`,
            defaultMessage: `No chats yet`,
            description: `Empty state for recent tasks menu`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var tn,
  nn,
  rn = e(() => {
    ((tn = d()), Ie(), (nn = f()));
  }),
  an,
  on = e(() => {
    an = `w-full justify-between !px-[var(--padding-row-x)] !py-[var(--padding-row-y)] text-left`;
  });
function sn(e) {
  let t = (0, ln.c)(64),
    { className: n } = e,
    r = He(),
    [i, a] = (0, un.useState)(!1),
    [o, s] = (0, un.useState)(``),
    [c, l] = h(Jt),
    u = ne(),
    { data: d, isLoading: f, isError: p, refetch: m } = le(),
    g;
  t[0] === o ? (g = t[1]) : ((g = o.trim()), (t[0] = o), (t[1] = g));
  let _ = g.length > 0,
    v;
  t[2] === _ ? (v = t[3]) : ((v = { enabled: _ }), (t[2] = _), (t[3] = v));
  let { data: y, isLoading: b, isError: x, refetch: S } = Ee(o, v),
    C;
  if (t[4] !== o || t[5] !== d || t[6] !== y || t[7] !== u) {
    bb0: {
      let e = o.trim(),
        n = e.length > 0 ? (y ?? []) : (d ?? []);
      if (e.length === 0 && u) {
        let e;
        t[9] === u
          ? (e = t[10])
          : ((e = (e) => e.id === u.id), (t[9] = u), (t[10] = e));
        let r = n.find(e);
        if (!r) {
          C = n;
          break bb0;
        }
        let i;
        (t[11] === u
          ? (i = t[12])
          : ((i = (e) => e.id !== u.id), (t[11] = u), (t[12] = i)),
          (C = [r, ...n.filter(i)]));
        break bb0;
      }
      C = n;
    }
    ((t[4] = o), (t[5] = d), (t[6] = y), (t[7] = u), (t[8] = C));
  } else C = t[8];
  let w = C,
    T;
  t[13] !== c || t[14] !== d
    ? ((T = d?.find((e) => e.id === c) ?? null),
      (t[13] = c),
      (t[14] = d),
      (t[15] = T))
    : (T = t[15]);
  let E = T,
    D;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, Y.jsx)(q, {
        id: `codex.recentTasksMenu.filterTooltip`,
        defaultMessage: `Filter tasks by environment`,
        description: `Tooltip explaining the environment filter button`,
      })),
      (t[16] = D))
    : (D = t[16]);
  let O = c ? `default` : `icon`,
    k;
  t[17] === n ? (k = t[18]) : ((k = _e(`mr-1`, n)), (t[17] = n), (t[18] = k));
  let A;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = (0, Y.jsx)(yt, { className: `icon-2xs` })), (t[19] = A))
    : (A = t[19]);
  let j;
  t[20] !== c || t[21] !== E
    ? ((j =
        !!c &&
        E?.label &&
        (0, Y.jsx)(`span`, { className: `text-sm`, children: E.label })),
      (t[20] = c),
      (t[21] = E),
      (t[22] = j))
    : (j = t[22]);
  let M;
  t[23] === j
    ? (M = t[24])
    : ((M = (0, Y.jsxs)(`span`, {
        className: `flex items-center gap-1.5`,
        children: [A, j],
      })),
      (t[23] = j),
      (t[24] = M));
  let N;
  t[25] !== M || t[26] !== O || t[27] !== k
    ? ((N = (0, Y.jsx)(ae, {
        asChild: !0,
        children: (0, Y.jsx)(Ae, {
          tooltipContent: D,
          children: (0, Y.jsx)(G, {
            color: `ghost`,
            size: O,
            className: k,
            children: M,
          }),
        }),
      })),
      (t[25] = M),
      (t[26] = O),
      (t[27] = k),
      (t[28] = N))
    : (N = t[28]);
  let P;
  t[29] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Y.jsx)(`div`, {
        className: `pb-1 text-xs tracking-wide text-token-input-placeholder-foreground uppercase`,
        children: (0, Y.jsx)(q, {
          id: `codex.recentTasksMenu.filterCloudTasks`,
          defaultMessage: `Filter cloud tasks`,
          description: `Title for environment filter menu in recent tasks`,
        }),
      })),
      (t[29] = P))
    : (P = t[29]);
  let F = !c,
    I;
  t[30] === l
    ? (I = t[31])
    : ((I = () => {
        (l(null), a(!1));
      }),
      (t[30] = l),
      (t[31] = I));
  let L;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, Y.jsx)(q, {
        id: `codex.recentTasksMenu.filterAll`,
        defaultMessage: `All`,
        description: `All environments filter option`,
      })),
      (t[32] = L))
    : (L = t[32]);
  let R;
  t[33] !== F || t[34] !== I
    ? ((R = (0, Y.jsx)(cn, { isSelected: F, onClick: I, children: L })),
      (t[33] = F),
      (t[34] = I),
      (t[35] = R))
    : (R = t[35]);
  let z;
  t[36] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Y.jsx)(K.Separator, {})), (t[36] = z))
    : (z = t[36]);
  let B;
  t[37] === r
    ? (B = t[38])
    : ((B = r.formatMessage({
        id: `composer.searchEnvironments`,
        defaultMessage: `Search environments`,
        description: `Search environments placeholder`,
      })),
      (t[37] = r),
      (t[38] = B));
  let V;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (e) => s(e.currentTarget.value)), (t[39] = V))
    : (V = t[39]);
  let te;
  t[40] !== o || t[41] !== B
    ? ((te = (0, Y.jsx)(K.Section, {
        className: `my-1`,
        children: (0, Y.jsx)(K.SearchInput, {
          placeholder: B,
          value: o,
          onChange: V,
        }),
      })),
      (t[40] = o),
      (t[41] = B),
      (t[42] = te))
    : (te = t[42]);
  let H;
  t[43] !== c ||
  t[44] !== o ||
  t[45] !== p ||
  t[46] !== f ||
  t[47] !== x ||
  t[48] !== b ||
  t[49] !== w ||
  t[50] !== m ||
  t[51] !== S ||
  t[52] !== l
    ? ((H =
        o.trim().length > 0 && x
          ? (0, Y.jsxs)(K.Message, {
              className: `flex w-full items-center justify-center gap-2`,
              children: [
                (0, Y.jsx)(`span`, {
                  children: (0, Y.jsx)(q, {
                    id: `codex.environments.searchError`,
                    defaultMessage: `Failed to search environments.`,
                    description: `Error shown when environment search fails`,
                  }),
                }),
                (0, Y.jsx)(G, {
                  size: `default`,
                  color: `outline`,
                  onClick: () => {
                    S();
                  },
                  children: (0, Y.jsx)(q, {
                    id: `codex.common.retry`,
                    defaultMessage: `Retry`,
                    description: `Retry button`,
                  }),
                }),
              ],
            })
          : o.trim().length === 0 && p
            ? (0, Y.jsxs)(K.Message, {
                className: `flex w-full items-center justify-center gap-2`,
                children: [
                  (0, Y.jsx)(`span`, {
                    children: (0, Y.jsx)(q, {
                      id: `codex.environments.listError`,
                      defaultMessage: `Failed to load environments.`,
                      description: `Error shown when listing environments fails`,
                    }),
                  }),
                  (0, Y.jsx)(G, {
                    size: `default`,
                    color: `outline`,
                    onClick: () => {
                      m();
                    },
                    children: (0, Y.jsx)(q, {
                      id: `codex.common.retry`,
                      defaultMessage: `Retry`,
                      description: `Retry button`,
                    }),
                  }),
                ],
              })
            : w?.length > 0
              ? w.map((e) =>
                  (0, Y.jsx)(
                    cn,
                    {
                      isSelected: e.id === c,
                      onClick: () => {
                        (l(e.id), a(!1));
                      },
                      children: e.label,
                    },
                    e.id,
                  ),
                )
              : b || f
                ? (0, Y.jsx)(ee, {
                    className: `icon-xxs my-2 self-center text-token-description-foreground`,
                  })
                : (0, Y.jsx)(K.Message, {
                    centered: !0,
                    children: (0, Y.jsx)(q, {
                      id: `codex.environments.noEnvironmentsFound`,
                      defaultMessage: `No environments found`,
                      description: `Message shown when no Codex environments were found`,
                    }),
                  })),
      (t[43] = c),
      (t[44] = o),
      (t[45] = p),
      (t[46] = f),
      (t[47] = x),
      (t[48] = b),
      (t[49] = w),
      (t[50] = m),
      (t[51] = S),
      (t[52] = l),
      (t[53] = H))
    : (H = t[53]);
  let U;
  t[54] === H
    ? (U = t[55])
    : ((U = (0, Y.jsx)(K.Section, {
        className: `flex max-h-[140px] flex-col overflow-y-auto pb-1`,
        children: H,
      })),
      (t[54] = H),
      (t[55] = U));
  let W;
  t[56] !== R || t[57] !== te || t[58] !== U
    ? ((W = (0, Y.jsx)(ye, {
        className: `w-[240px]`,
        side: `top`,
        children: (0, Y.jsxs)(`div`, {
          className: `flex max-w-full flex-col py-1`,
          children: [P, R, z, te, U],
        }),
      })),
      (t[56] = R),
      (t[57] = te),
      (t[58] = U),
      (t[59] = W))
    : (W = t[59]);
  let re;
  return (
    t[60] !== i || t[61] !== N || t[62] !== W
      ? ((re = (0, Y.jsxs)(de, { open: i, onOpenChange: a, children: [N, W] })),
        (t[60] = i),
        (t[61] = N),
        (t[62] = W),
        (t[63] = re))
      : (re = t[63]),
    re
  );
}
function cn(e) {
  let t = (0, ln.c)(11),
    { children: n, isSelected: r, onClick: i } = e,
    a = r && `font-medium`,
    o;
  t[0] === a ? (o = t[1]) : ((o = _e(an, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, Y.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = r
        ? (0, Y.jsx)(U, { className: `icon-2xs shrink-0 opacity-75` })
        : null),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== i || t[7] !== o || t[8] !== s || t[9] !== c
      ? ((l = (0, Y.jsxs)(G, {
          color: `ghostActive`,
          size: `medium`,
          className: o,
          onClick: i,
          children: [s, c],
        })),
        (t[6] = i),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var ln,
  un,
  Y,
  dn = e(() => {
    ((ln = d()),
      ue(),
      i(),
      (un = t(l(), 1)),
      Ie(),
      R(),
      F(),
      be(),
      me(),
      H(),
      ke(),
      pe(),
      vt(),
      Oe(),
      Yt(),
      on(),
      (Y = f()));
  });
function fn(e) {
  let t = (0, hn.c)(31),
    { filter: n, onSelect: r } = e,
    i = _n[n],
    [a, o] = (0, gn.useState)(!1),
    s;
  t[0] === i
    ? (s = t[1])
    : ((s = (0, X.jsx)(`span`, { children: (0, X.jsx)(q, { ...i }) })),
      (t[0] = i),
      (t[1] = s));
  let c;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, X.jsx)(ce, { className: `icon-2xs` })), (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === s
    ? (l = t[4])
    : ((l = (0, X.jsx)(ae, {
        asChild: !0,
        children: (0, X.jsxs)(`button`, {
          type: `button`,
          className: `flex items-center gap-1 px-2 pt-2 text-sm font-medium text-token-input-placeholder-foreground hover:text-token-foreground`,
          children: [s, c],
        }),
      })),
      (t[3] = s),
      (t[4] = l));
  let u = n === `recent`,
    d;
  t[5] === r
    ? (d = t[6])
    : ((d = () => {
        (r(`recent`), o(!1));
      }),
      (t[5] = r),
      (t[6] = d));
  let f;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, X.jsx)(q, {
        id: `codex.recentTasksMenu.recent`,
        defaultMessage: `All tasks`,
        description: `Menu title for recent Codex tasks`,
      })),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== u || t[9] !== d
    ? ((p = (0, X.jsx)(mn, { isSelected: u, onClick: d, children: f })),
      (t[8] = u),
      (t[9] = d),
      (t[10] = p))
    : (p = t[10]);
  let m = n === `cloud`,
    h;
  t[11] === r
    ? (h = t[12])
    : ((h = () => {
        (r(`cloud`), o(!1));
      }),
      (t[11] = r),
      (t[12] = h));
  let g;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((g = (0, X.jsx)(q, {
        id: `codex.recentTasksMenu.cloud`,
        defaultMessage: `Cloud tasks`,
        description: `Menu title for cloud Codex tasks`,
      })),
      (t[13] = g))
    : (g = t[13]);
  let _;
  t[14] !== m || t[15] !== h
    ? ((_ = (0, X.jsx)(mn, { isSelected: m, onClick: h, children: g })),
      (t[14] = m),
      (t[15] = h),
      (t[16] = _))
    : (_ = t[16]);
  let v = n === `local`,
    y;
  t[17] === r
    ? (y = t[18])
    : ((y = () => {
        (r(`local`), o(!1));
      }),
      (t[17] = r),
      (t[18] = y));
  let b;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, X.jsx)(q, {
        id: `codex.recentTasksMenu.local`,
        defaultMessage: `Local tasks`,
        description: `Menu title for local Codex tasks`,
      })),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] !== v || t[21] !== y
    ? ((x = (0, X.jsx)(mn, { isSelected: v, onClick: y, children: b })),
      (t[20] = v),
      (t[21] = y),
      (t[22] = x))
    : (x = t[22]);
  let S;
  t[23] !== _ || t[24] !== x || t[25] !== p
    ? ((S = (0, X.jsx)(ye, {
        className: `w-[220px]`,
        onOpenAutoFocus: pn,
        children: (0, X.jsxs)(`div`, {
          className: `flex flex-col`,
          children: [p, _, x],
        }),
      })),
      (t[23] = _),
      (t[24] = x),
      (t[25] = p),
      (t[26] = S))
    : (S = t[26]);
  let C;
  return (
    t[27] !== a || t[28] !== S || t[29] !== l
      ? ((C = (0, X.jsxs)(de, { open: a, onOpenChange: o, children: [l, S] })),
        (t[27] = a),
        (t[28] = S),
        (t[29] = l),
        (t[30] = C))
      : (C = t[30]),
    C
  );
}
function pn(e) {
  e.preventDefault();
}
function mn(e) {
  let t = (0, hn.c)(11),
    { children: n, isSelected: r, onClick: i } = e,
    a = r && `font-medium`,
    o;
  t[0] === a ? (o = t[1]) : ((o = _e(an, a)), (t[0] = a), (t[1] = o));
  let s;
  t[2] === n
    ? (s = t[3])
    : ((s = (0, X.jsx)(`span`, {
        className: `min-w-0 flex-1 truncate`,
        children: n,
      })),
      (t[2] = n),
      (t[3] = s));
  let c;
  t[4] === r
    ? (c = t[5])
    : ((c = r
        ? (0, X.jsx)(U, { className: `icon-2xs shrink-0 opacity-75` })
        : null),
      (t[4] = r),
      (t[5] = c));
  let l;
  return (
    t[6] !== i || t[7] !== o || t[8] !== s || t[9] !== c
      ? ((l = (0, X.jsxs)(G, {
          color: `ghostActive`,
          size: `medium`,
          className: o,
          onClick: i,
          children: [s, c],
        })),
        (t[6] = i),
        (t[7] = o),
        (t[8] = s),
        (t[9] = c),
        (t[10] = l))
      : (l = t[10]),
    l
  );
}
var hn,
  gn,
  X,
  _n,
  vn = e(() => {
    ((hn = d()),
      ue(),
      (gn = t(l(), 1)),
      Ie(),
      F(),
      me(),
      pe(),
      Se(),
      on(),
      (X = f()),
      (_n = Fe({
        recent: {
          id: `codex.recentTasksMenu.recent`,
          defaultMessage: `All tasks`,
          description: `Menu title for recent Codex tasks`,
        },
        cloud: {
          id: `codex.recentTasksMenu.cloud`,
          defaultMessage: `Cloud tasks`,
          description: `Menu title for cloud Codex tasks`,
        },
        local: {
          id: `codex.recentTasksMenu.local`,
          defaultMessage: `Local tasks`,
          description: `Menu title for local Codex tasks`,
        },
      })));
  });
function yn() {
  let e = (0, bn.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, xn.jsx)(`div`, {
          className: `flex h-48 items-center justify-center text-sm text-token-input-placeholder-foreground`,
          children: (0, xn.jsx)(q, {
            id: `codex.recentTasksMenu.searchEmpty`,
            defaultMessage: `No result`,
            description: `Empty state for recent tasks menu search results`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var bn,
  xn,
  Sn = e(() => {
    ((bn = d()), Ie(), (xn = f()));
  });
function Cn({ conversation: e, isBackgroundSubagentsEnabled: t }) {
  return !Ye(e, t);
}
var wn = e(() => {
  Ze();
});
function Tn(e, t, n) {
  let r = N(),
    i = qe(`12346831`),
    a = m(tt),
    o = i ? Ne : a,
    s = x(),
    c = (0, kn.useRef)(new Map());
  return (0, kn.useMemo)(() => {
    let i = Dn(
      En({
        tasks: e,
        localConversations: t,
        pendingWorktrees: r,
        envForFilter: n,
        threadSortKey: o,
        isBackgroundSubagentsEnabled: s,
      }),
      c.current,
    );
    return ((c.current = new Map(i.map((e) => [e.key, e]))), i);
  }, [e, n, s, t, r, o]);
}
function En({
  tasks: e,
  localConversations: t,
  pendingWorktrees: r,
  envForFilter: i,
  threadSortKey: a,
  isBackgroundSubagentsEnabled: o,
}) {
  let s = e ?? [],
    c = t.filter((e) =>
      Cn({ conversation: e, isBackgroundSubagentsEnabled: o }),
    ),
    l = (0, On.default)(
      i
        ? s.filter((e) => e.task_status_display?.environment_label === i.label)
        : s,
      `id`,
    ).map((e) => {
      let t =
        a === `updated_at`
          ? (e.updated_at ?? e.created_at ?? 0)
          : (e.created_at ?? e.updated_at ?? 0);
      return { kind: `remote`, key: z(e.id), at: t * 1e3, task: e };
    }),
    u = c.map((e) => {
      let t = a === `updated_at` ? (e.recencyAt ?? e.updatedAt) : e.createdAt;
      Number.isFinite(t) ||
        n.error(`local conversation has invalid createdAt or updatedAt`);
      let r = Number.isFinite(t)
        ? t
        : Number.isFinite(e.createdAt)
          ? e.createdAt
          : 0;
      return { kind: `local`, key: V(e.id), at: r, conversation: e };
    }),
    d = r.map((e) => ({
      kind: `pending-worktree`,
      key: we(e.id),
      at: e.createdAt,
      pendingWorktree: e,
    }));
  return [...l, ...u, ...d].sort((e, t) => t.at - e.at);
}
function Dn(e, t) {
  return e.map((e) => {
    let n = t.get(e.key);
    if (n == null || n.at !== e.at) return e;
    switch (e.kind) {
      case `remote`:
        return n.kind === `remote` && n.task === e.task ? n : e;
      case `local`:
        return n.kind === `local` && n.conversation === e.conversation ? n : e;
      case `pending-worktree`:
        return n.kind === `pending-worktree` &&
          n.pendingWorktree === e.pendingWorktree
          ? n
          : e;
    }
  });
}
var On,
  kn,
  An = e(() => {
    ((On = t(ze(), 1)),
      s(),
      (kn = t(l(), 1)),
      O(),
      $e(),
      P(),
      Je(),
      Ve(),
      o(),
      C(),
      wn());
  });
function jn(e) {
  let t = (0, In.c)(33),
    {
      cloudtasksQuery: n,
      localConversations: r,
      onClose: i,
      autoFocusSearch: a,
      showFilters: o,
    } = e,
    s = a === void 0 ? !1 : a,
    c = o === void 0 ? !0 : o,
    l = He(),
    { authMethod: u } = te(),
    [d, f] = h(Rn),
    [p] = h(Jt),
    m = c ? d : `recent`,
    g = Be(`/local/:conversationId`)?.params?.conversationId ?? null,
    { data: _ } = le(),
    v = x(),
    y;
  t[0] !== p || t[1] !== c || t[2] !== _
    ? ((y = c ? (_?.find((e) => e.id === p) ?? null) : null),
      (t[0] = p),
      (t[1] = c),
      (t[2] = _),
      (t[3] = y))
    : (y = t[3]);
  let b = y,
    S;
  t[4] === v
    ? (S = t[5])
    : ((S = (e) => Cn({ conversation: e, isBackgroundSubagentsEnabled: v })),
      (t[4] = v),
      (t[5] = S));
  let C = r.filter(S),
    w = Tn(n.data, r, b),
    [T, E] = (0, Ln.useState)(``),
    D = (0, Ln.useDeferredValue)(T).trim().toLowerCase(),
    O = D.length > 0,
    k = w.filter(Mn),
    A = O
      ? k.filter((e) => {
          let { task: t } = e;
          return Kt(t.title, D);
        })
      : k,
    j = O ? C.filter((e) => Kt(Ue(e), D)) : C,
    M = O
      ? w.filter((e) =>
          e.kind === `remote`
            ? Kt(e.task.title, D)
            : e.kind === `local`
              ? Kt(Ue(e.conversation), D)
              : Kt(Nn(e.pendingWorktree, l), D),
        )
      : w,
    N;
  t[6] !== s || t[7] !== T
    ? ((N = (0, Z.jsx)(K.Section, {
        children: (0, Z.jsx)(Xt, {
          searchQuery: T,
          onQueryChange: E,
          autoFocus: s,
        }),
      })),
      (t[6] = s),
      (t[7] = T),
      (t[8] = N))
    : (N = t[8]);
  let P;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Z.jsx)(`div`, {
        className: `mx-2 border-t-[0.5px] border-token-border`,
        "aria-hidden": !0,
      })),
      (t[9] = P))
    : (P = t[9]);
  let F;
  t[10] !== u || t[11] !== d || t[12] !== f || t[13] !== c
    ? ((F =
        c &&
        u === `chatgpt` &&
        (0, Z.jsxs)(K.Section, {
          className: `flex items-center justify-between px-[var(--padding-row-x)]`,
          children: [
            (0, Z.jsx)(fn, { filter: d, onSelect: f }),
            d !== `local` && (0, Z.jsx)(sn, {}),
          ],
        })),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = c),
      (t[14] = F))
    : (F = t[14]);
  let I = K,
    L =
      m === `cloud` &&
      (n.isError
        ? (0, Z.jsx)(Fn, {
            onRetry: () => {
              n.refetch();
            },
          })
        : n.isLoading
          ? (0, Z.jsx)(Pn, {})
          : A.length === 0
            ? O
              ? (0, Z.jsx)(yn, {})
              : (0, Z.jsx)(en, {})
            : A.map((e) =>
                (0, Z.jsx)(ft, { task: e.task, onClose: i }, e.key),
              )),
    R =
      m === `local` &&
      (j.length
        ? j.map((e) =>
            (0, Z.jsx)(
              zn,
              {
                conversationId: e.id,
                updatedAt: e.recencyAt ?? e.updatedAt,
                isActive: g === e.id,
                onClose: i,
              },
              e.id,
            ),
          )
        : O
          ? (0, Z.jsx)(yn, {})
          : (0, Z.jsx)(en, {})),
    z;
  t[15] !== g ||
  t[16] !== n ||
  t[17] !== M ||
  t[18] !== O ||
  t[19] !== w.length ||
  t[20] !== i ||
  t[21] !== m
    ? ((z =
        m === `recent` &&
        (n.isError && w.length === 0
          ? (0, Z.jsx)(Fn, {
              onRetry: () => {
                n.refetch();
              },
            })
          : n.isLoading && w.length === 0
            ? (0, Z.jsx)(Pn, {})
            : M.length === 0
              ? O
                ? (0, Z.jsx)(yn, {})
                : (0, Z.jsx)(en, {})
              : (0, Z.jsxs)(Z.Fragment, {
                  children: [
                    n.isError &&
                      (0, Z.jsxs)(`div`, {
                        className: `mx-1 my-1 flex items-center justify-between gap-2 px-1 text-base text-token-foreground`,
                        children: [
                          (0, Z.jsx)(q, {
                            id: `codex.recentTasksMenu.errorCloud.inline`,
                            defaultMessage: `Failed to load cloud tasks.`,
                            description: `Inline error indicator for cloud tasks in recent feed`,
                          }),
                          (0, Z.jsx)(G, {
                            size: `default`,
                            color: `outline`,
                            onClick: () => {
                              n.refetch();
                            },
                            children: (0, Z.jsx)(q, {
                              id: `codex.common.retry`,
                              defaultMessage: `Retry`,
                              description: `Retry button`,
                            }),
                          }),
                        ],
                      }),
                    n.isPending &&
                      !w.length &&
                      (0, Z.jsx)(`div`, {
                        className: `mx-1 my-1 flex items-center gap-2 text-sm text-token-input-placeholder-foreground`,
                        children: (0, Z.jsx)(ee, { className: `icon-xs` }),
                      }),
                    M.map((e) =>
                      (0, Z.jsx)(
                        Bn,
                        {
                          item: e,
                          isActive:
                            e.kind === `local` && g === e.conversation.id,
                          onClose: i,
                        },
                        e.key,
                      ),
                    ),
                  ],
                }))),
      (t[15] = g),
      (t[16] = n),
      (t[17] = M),
      (t[18] = O),
      (t[19] = w.length),
      (t[20] = i),
      (t[21] = m),
      (t[22] = z))
    : (z = t[22]);
  let B;
  t[23] !== I.Section || t[24] !== L || t[25] !== R || t[26] !== z
    ? ((B = (0, Z.jsxs)(I.Section, {
        className: `vertical-scroll-fade-mask flex max-h-[60vh] flex-col gap-0 overflow-y-auto pb-1`,
        children: [L, R, z],
      })),
      (t[23] = I.Section),
      (t[24] = L),
      (t[25] = R),
      (t[26] = z),
      (t[27] = B))
    : (B = t[27]);
  let V;
  return (
    t[28] !== B || t[29] !== N || t[30] !== P || t[31] !== F
      ? ((V = (0, Z.jsxs)(`div`, {
          className: `flex max-h-[300px] w-[calc(var(--radix-popper-available-width)_-_var(--padding-panel))] flex-col gap-1`,
          children: [N, P, F, B],
        })),
        (t[28] = B),
        (t[29] = N),
        (t[30] = P),
        (t[31] = F),
        (t[32] = V))
      : (V = t[32]),
    V
  );
}
function Mn(e) {
  return e.kind === `remote`;
}
function Nn(e, t) {
  let n = e.label?.trim();
  return n && n.length > 0
    ? n
    : e.phase === `failed`
      ? t.formatMessage({
          id: `recentTasks.worktreeInitFailedTitle`,
          defaultMessage: `Worktree init failed`,
          description: `Worktree row title when the init script fails`,
        })
      : t.formatMessage({
          id: `recentTasks.worktreeSettingUpTitle`,
          defaultMessage: `Setting up worktree`,
          description: `Worktree row title while init is pending`,
        });
}
function Pn() {
  let e = (0, In.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Z.jsx)(`div`, {
          className: `flex h-48 items-center justify-center gap-2 text-sm text-token-input-placeholder-foreground`,
          children: (0, Z.jsx)(ee, { className: `icon-xs` }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Fn(e) {
  let t = (0, In.c)(4),
    { onRetry: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Z.jsx)(q, {
        id: `codex.recentTasksMenu.errorCloud`,
        defaultMessage: `Failed to load tasks.`,
        description: `Error state for cloud tasks in recent tasks menu`,
      })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, Z.jsx)(q, {
        id: `codex.common.retry`,
        defaultMessage: `Retry`,
        description: `Retry button`,
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, Z.jsxs)(`div`, {
          className: `flex h-48 items-center justify-center gap-3 text-sm text-token-input-placeholder-foreground`,
          children: [
            r,
            (0, Z.jsx)(G, {
              size: `default`,
              color: `outline`,
              onClick: n,
              children: i,
            }),
          ],
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
var In,
  Ln,
  Z,
  Rn,
  zn,
  Bn,
  Vn = e(() => {
    ((In = d()),
      i(),
      (Ln = t(l(), 1)),
      Ie(),
      Xe(),
      L(),
      R(),
      F(),
      be(),
      A(),
      H(),
      O(),
      We(),
      c(),
      qt(),
      B(),
      C(),
      lt(),
      ct(),
      Yt(),
      $t(),
      rn(),
      dn(),
      vn(),
      Sn(),
      wn(),
      An(),
      ut(),
      (Z = f()),
      (Rn = Ce(`recent-tasks-filter`, `recent`)),
      (zn = (0, Ln.memo)(function (e) {
        let t = (0, In.c)(7),
          { conversationId: n, updatedAt: r, isActive: i, onClose: a } = e,
          o;
        t[0] === r
          ? (o = t[1])
          : ((o =
              r == null
                ? void 0
                : (0, Z.jsx)(E, { dateString: new Date(r).toISOString() })),
            (t[0] = r),
            (t[1] = o));
        let s;
        return (
          t[2] !== n || t[3] !== i || t[4] !== a || t[5] !== o
            ? ((s = (0, Z.jsx)(pt, {
                conversationId: n,
                isActive: i,
                metaContent: o,
                onClick: a,
              })),
              (t[2] = n),
              (t[3] = i),
              (t[4] = a),
              (t[5] = o),
              (t[6] = s))
            : (s = t[6]),
          s
        );
      })),
      (Bn = (0, Ln.memo)(function (e) {
        let t = (0, In.c)(21),
          { item: n, isActive: r, onClose: i } = e,
          { cancelPendingWorktree: a } = b();
        switch (n.kind) {
          case `remote`: {
            let e;
            return (
              t[0] !== n.task || t[1] !== i
                ? ((e = (0, Z.jsx)(ft, { task: n.task, onClose: i })),
                  (t[0] = n.task),
                  (t[1] = i),
                  (t[2] = e))
                : (e = t[2]),
              e
            );
          }
          case `local`: {
            let e;
            t[3] !== n.conversation.recencyAt ||
            t[4] !== n.conversation.updatedAt
              ? ((e =
                  (n.conversation.recencyAt ?? n.conversation.updatedAt) == null
                    ? void 0
                    : (0, Z.jsx)(E, {
                        dateString: new Date(
                          n.conversation.recencyAt ?? n.conversation.updatedAt,
                        ).toISOString(),
                      })),
                (t[3] = n.conversation.recencyAt),
                (t[4] = n.conversation.updatedAt),
                (t[5] = e))
              : (e = t[5]);
            let a;
            return (
              t[6] !== r ||
              t[7] !== n.conversation.id ||
              t[8] !== i ||
              t[9] !== e
                ? ((a = (0, Z.jsx)(pt, {
                    conversationId: n.conversation.id,
                    isActive: r,
                    metaContent: e,
                    onClick: i,
                  })),
                  (t[6] = r),
                  (t[7] = n.conversation.id),
                  (t[8] = i),
                  (t[9] = e),
                  (t[10] = a))
                : (a = t[10]),
              a
            );
          }
          case `pending-worktree`: {
            let e;
            t[11] !== n.pendingWorktree.id || t[12] !== i
              ? ((e = () => {
                  (_.dispatchHostMessage({
                    type: `navigate-to-route`,
                    path: `/worktree-init-v2/${n.pendingWorktree.id}`,
                  }),
                    i());
                }),
                (t[11] = n.pendingWorktree.id),
                (t[12] = i),
                (t[13] = e))
              : (e = t[13]);
            let r;
            t[14] !== a || t[15] !== n.pendingWorktree.id
              ? ((r = () => {
                  a(n.pendingWorktree.id);
                }),
                (t[14] = a),
                (t[15] = n.pendingWorktree.id),
                (t[16] = r))
              : (r = t[16]);
            let o;
            return (
              t[17] !== n.pendingWorktree || t[18] !== e || t[19] !== r
                ? ((o = (0, Z.jsx)(dt, {
                    task: n.pendingWorktree,
                    hasAttention: n.pendingWorktree.needsAttention,
                    onClick: e,
                    onArchive: r,
                  })),
                  (t[17] = n.pendingWorktree),
                  (t[18] = e),
                  (t[19] = r),
                  (t[20] = o))
                : (o = t[20]),
              o
            );
          }
        }
      })));
  });
function Hn(e) {
  let t = (0, Gn.c)(67),
    n;
  t[0] === e
    ? (n = t[1])
    : ((n = e === void 0 ? {} : e), (t[0] = e), (t[1] = n));
  let { label: r, showFilters: i } = n,
    a = i === void 0 ? !0 : i,
    o = He(),
    { authMethod: s } = te(),
    c = Re(),
    { data: l } = Qe(),
    u = x(),
    [d, f] = (0, Kn.useState)(!1),
    p;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = () => {
        f(!1);
      }),
      (t[2] = p))
    : (p = t[2]);
  let m = et(p),
    h = d && s === `chatgpt`,
    g;
  t[3] === h
    ? (g = t[4])
    : ((g = { taskFilter: `current`, limit: 20, enabled: h }),
      (t[3] = h),
      (t[4] = g));
  let _ = ge(g),
    v;
  t[5] === _.data
    ? (v = t[6])
    : ((v = _.data ?? []), (t[5] = _.data), (t[6] = v));
  let y;
  t[7] === v ? (y = t[8]) : ((y = v.filter(Wn)), (t[7] = v), (t[8] = y));
  let b = y,
    S,
    C,
    w,
    T;
  if (
    t[9] !== l ||
    t[10] !== u ||
    t[11] !== r ||
    t[12] !== c.pathname ||
    t[13] !== b.length
  ) {
    let e;
    t[18] === u
      ? (e = t[19])
      : ((e = (e) => Cn({ conversation: e, isBackgroundSubagentsEnabled: u })),
        (t[18] = u),
        (t[19] = e));
    let n = (l ?? []).filter(e).filter(Un);
    ((S = b.length + n.length),
      (w = c.pathname !== `/` && S > 0),
      (C = r != null),
      (T = !1),
      (t[9] = l),
      (t[10] = u),
      (t[11] = r),
      (t[12] = c.pathname),
      (t[13] = b.length),
      (t[14] = S),
      (t[15] = C),
      (t[16] = w),
      (t[17] = T));
  } else ((S = t[14]), (C = t[15]), (w = t[16]), (T = t[17]));
  let E = T,
    D;
  t[20] !== E || t[21] !== S || t[22] !== o
    ? ((D = E
        ? o.formatMessage(
            {
              id: `codex.recentTasksMenu.triggerWithUnread`,
              defaultMessage: `Recent tasks. {count, plural, one {# in progress} other {# in progress}}. Unread task updates`,
              description: `Accessible label for opening the recent tasks menu when unread task updates are present`,
            },
            { count: S },
          )
        : o.formatMessage(
            {
              id: `codex.recentTasksMenu.trigger`,
              defaultMessage: `Recent tasks. {count, plural, one {# in progress} other {# in progress}}`,
              description: `Accessible label for opening the recent tasks menu`,
            },
            { count: S },
          )),
      (t[20] = E),
      (t[21] = S),
      (t[22] = o),
      (t[23] = D))
    : (D = t[23]);
  let O = D,
    k;
  t[24] !== s || t[25] !== d || t[26] !== _
    ? ((k = () => {
        d && s === `chatgpt` && _.refetch();
      }),
      (t[24] = s),
      (t[25] = d),
      (t[26] = _),
      (t[27] = k))
    : (k = t[27]);
  let A;
  (t[28] === d ? (A = t[29]) : ((A = [d]), (t[28] = d), (t[29] = A)),
    (0, Kn.useEffect)(k, A));
  let M, N;
  (t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = () => {
        let e = (e) => f(!0);
        return (
          window.addEventListener(`open-recent-tasks-menu`, e),
          () => window.removeEventListener(`open-recent-tasks-menu`, e)
        );
      }),
      (N = []),
      (t[30] = M),
      (t[31] = N))
    : ((M = t[30]), (N = t[31])),
    (0, Kn.useEffect)(M, N));
  let P;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, Q.jsx)(q, {
        id: `codex.recentTasksMenu.tooltip`,
        defaultMessage: `Task history`,
        description: `Tooltip text for recent tasks menu`,
      })),
      (t[32] = P))
    : (P = t[32]);
  let F = C ? `ghostActive` : `ghost`,
    I = C ? `default` : `icon`,
    L =
      C &&
      `max-w-full min-w-0 !px-0 !py-0 hover:!bg-transparent hover:opacity-80`,
    R;
  t[33] === L
    ? (R = t[34])
    : ((R = _e(`relative`, L)), (t[33] = L), (t[34] = R));
  let z = C ? void 0 : O,
    B;
  t[35] === E
    ? (B = t[36])
    : ((B = E
        ? (0, Q.jsx)(`span`, {
            "aria-hidden": `true`,
            className: `absolute top-0.5 right-0.5 size-1.5 rounded-full`,
            style: { backgroundColor: `var(--vscode-textLink-foreground)` },
          })
        : null),
      (t[35] = E),
      (t[36] = B));
  let V;
  t[37] !== r || t[38] !== C || t[39] !== w
    ? ((V = C
        ? (0, Q.jsxs)(Q.Fragment, {
            children: [
              (0, Q.jsx)(`span`, {
                className: _e(`min-w-0 truncate`, !1),
                children: r,
              }),
              (0, Q.jsx)(ce, {
                className: `icon-2xs shrink-0 text-token-text-tertiary`,
              }),
            ],
          })
        : w
          ? (0, Q.jsx)(`span`, {
              className: `relative inline-flex size-4 justify-center`,
              children: (0, Q.jsx)(ee, { className: `icon-xs` }),
            })
          : (0, Q.jsx)(j, { className: `icon-xs hover:opacity-80` })),
      (t[37] = r),
      (t[38] = C),
      (t[39] = w),
      (t[40] = V))
    : (V = t[40]);
  let H;
  t[41] !== S || t[42] !== o
    ? ((H = o.formatMessage(
        {
          id: `codex.recentTasksMenu.count`,
          defaultMessage: `{count, plural, =0 {No tasks in progress} one {# task in progress} other {# tasks in progress}}`,
          description: `Live region text announcing in-progress task count for recent tasks trigger`,
        },
        { count: S },
      )),
      (t[41] = S),
      (t[42] = o),
      (t[43] = H))
    : (H = t[43]);
  let U;
  t[44] === H
    ? (U = t[45])
    : ((U = (0, Q.jsx)(`span`, {
        className: `sr-only`,
        "aria-live": `polite`,
        "aria-atomic": `true`,
        children: H,
      })),
      (t[44] = H),
      (t[45] = U));
  let W;
  t[46] !== C ||
  t[47] !== F ||
  t[48] !== I ||
  t[49] !== R ||
  t[50] !== z ||
  t[51] !== B ||
  t[52] !== V ||
  t[53] !== U
    ? ((W = (0, Q.jsx)(Ae, {
        tooltipContent: P,
        children: (0, Q.jsxs)(G, {
          color: F,
          size: I,
          className: R,
          allowShrink: C,
          "aria-label": z,
          children: [B, V, U],
        }),
      })),
      (t[46] = C),
      (t[47] = F),
      (t[48] = I),
      (t[49] = R),
      (t[50] = z),
      (t[51] = B),
      (t[52] = V),
      (t[53] = U),
      (t[54] = W))
    : (W = t[54]);
  let ne;
  t[55] === l ? (ne = t[56]) : ((ne = l ?? []), (t[55] = l), (t[56] = ne));
  let re;
  t[57] !== m || t[58] !== d || t[59] !== _ || t[60] !== a || t[61] !== ne
    ? ((re = (0, Q.jsx)(jn, {
        cloudtasksQuery: _,
        localConversations: ne,
        onClose: m,
        autoFocusSearch: d,
        showFilters: a,
      })),
      (t[57] = m),
      (t[58] = d),
      (t[59] = _),
      (t[60] = a),
      (t[61] = ne),
      (t[62] = re))
    : (re = t[62]);
  let ie;
  return (
    t[63] !== d || t[64] !== W || t[65] !== re
      ? ((ie = (0, Q.jsx)(se, {
          contentClassName: `!pb-0 mt-[9px]`,
          triggerButton: W,
          open: d,
          onOpenChange: f,
          children: re,
        })),
        (t[63] = d),
        (t[64] = W),
        (t[65] = re),
        (t[66] = ie))
      : (ie = t[66]),
    ie
  );
}
function Un(e) {
  return Ge(e);
}
function Wn(e) {
  let t = e.task_status_display?.latest_turn_status_display?.turn_status;
  return t === `in_progress` || t === `pending`;
}
var Gn,
  Kn,
  Q,
  qn = e(() => {
    ((Gn = d()),
      ue(),
      (Kn = t(l(), 1)),
      Ie(),
      Xe(),
      rt(),
      Ke(),
      L(),
      R(),
      F(),
      be(),
      H(),
      ke(),
      O(),
      Se(),
      w(),
      nt(),
      Vn(),
      wn(),
      (Q = f()));
  });
function Jn(e) {
  let t = (0, $n.c)(66),
    {
      className: n,
      desktopDeepLinkConversationId: r,
      title: i,
      onBack: a,
      trailing: o,
    } = e,
    s = Re(),
    c = a ?? Xn,
    l = s.pathname === `/`,
    u = Yn,
    { data: d } = Qe(),
    f = l,
    p;
  t[0] === f
    ? (p = t[1])
    : ((p = { taskFilter: `current`, limit: 20, enabled: f }),
      (t[0] = f),
      (t[1] = p));
  let m = ge(p),
    h;
  t[2] === d ? (h = t[3]) : ((h = d ?? []), (t[2] = d), (t[3] = h));
  let g = Tn(m.data, h, null),
    _;
  t[28] === n
    ? (_ = t[29])
    : ((_ = _e(`draggable extension:px-panel`, n)), (t[28] = n), (t[29] = _));
  let v = `justify-between`,
    y;
  t[30] === v
    ? (y = t[31])
    : ((y = _e(`flex items-center electron:h-toolbar extension:py-row-y`, v)),
      (t[30] = v),
      (t[31] = y));
  let b;
  t[32] !== a || t[33] !== !1
    ? ((b = null), (t[32] = a), (t[33] = !1), (t[34] = b))
    : (b = t[34]);
  let x;
  t[35] !== c || t[36] !== g || t[37] !== i
    ? ((x = (0, $.jsx)(`div`, {
        className: `mr-3 line-clamp-1 flex min-w-0 flex-1 items-center gap-1 truncate`,
        style: { viewTransitionName: `header-title` },
        children: i
          ? (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-1 items-center gap-1`,
              children: [
                (0, $.jsx)(Qn, { onClick: c }),
                (0, $.jsx)(G, {
                  color: `ghostActive`,
                  type: `button`,
                  onClick: u,
                  className: `min-w-0 flex-1 truncate !px-0 !py-0 text-left text-sm text-token-foreground hover:!bg-transparent hover:opacity-80 electron:font-medium`,
                  children: (0, $.jsx)(`span`, {
                    className: `truncate`,
                    children: i,
                  }),
                }),
              ],
            })
          : (0, $.jsx)(`span`, {
              className: `text-token-description-foreground`,
              children: (0, $.jsx)(Zn, {
                mergedTasks: g,
                onBack: c,
                showBackButton: !0,
              }),
            }),
      })),
      (t[35] = c),
      (t[36] = g),
      (t[37] = i),
      (t[38] = x))
    : (x = t[38]);
  let S;
  t[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, $.jsx)(Hn, {})), (t[39] = S))
    : (S = t[39]);
  let C;
  t[40] === r
    ? (C = t[41])
    : ((C = (0, $.jsx)(he, {
        chromeExtension: !0,
        children: (0, $.jsx)(bt, { conversationId: r }),
      })),
      (t[40] = r),
      (t[41] = C));
  let w;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(he, { extension: !0, children: (0, $.jsx)(ht, {}) })),
      (t[42] = w))
    : (w = t[42]);
  let T;
  t[43] === !0
    ? (T = t[44])
    : ((T = (0, $.jsx)(Nt, {})), (t[43] = !0), (t[44] = T));
  let E;
  t[45] !== C || t[46] !== T
    ? ((E = (0, $.jsx)(he, {
        chromeExtension: !0,
        extension: !0,
        children: (0, $.jsx)(`div`, {
          className: `flex flex-shrink-0 items-center`,
          children: (0, $.jsxs)(`div`, {
            className: `flex items-center gap-1`,
            children: [S, C, w, T],
          }),
        }),
      })),
      (t[45] = C),
      (t[46] = T),
      (t[47] = E))
    : (E = t[47]);
  let D;
  t[48] !== E || t[49] !== o
    ? ((D = (0, $.jsxs)(`div`, {
        className: `flex flex-shrink-0 items-center gap-1`,
        children: [o, E],
      })),
      (t[48] = E),
      (t[49] = o),
      (t[50] = D))
    : (D = t[50]);
  let O;
  t[51] !== D || t[52] !== y || t[53] !== b || t[54] !== x
    ? ((O = (0, $.jsxs)(`div`, { className: y, children: [b, x, D] })),
      (t[51] = D),
      (t[52] = y),
      (t[53] = b),
      (t[54] = x),
      (t[55] = O))
    : (O = t[55]);
  let k;
  t[56] !== l || t[57] !== g || t[58] !== m
    ? ((k =
        l &&
        (0, $.jsx)(`div`, {
          children: (0, $.jsx)(Bt, { tasksQuery: m, mergedTasks: g }),
        })),
      (t[56] = l),
      (t[57] = g),
      (t[58] = m),
      (t[59] = k))
    : (k = t[59]);
  let A;
  t[60] === k
    ? (A = t[61])
    : ((A = (0, $.jsx)(he, { extension: !0, children: k })),
      (t[60] = k),
      (t[61] = A));
  let j;
  return (
    t[62] !== O || t[63] !== A || t[64] !== _
      ? ((j = (0, $.jsxs)(`div`, { className: _, children: [O, A] })),
        (t[62] = O),
        (t[63] = A),
        (t[64] = _),
        (t[65] = j))
      : (j = t[65]),
    j
  );
}
function Yn() {
  window.dispatchEvent(new CustomEvent(`open-recent-tasks-menu`));
}
function Xn() {
  I(`newThread`, `header_new_thread`);
}
function Zn(e) {
  let t = (0, $n.c)(21),
    { mergedTasks: n, onBack: i, showBackButton: a } = e,
    o = Re().pathname === `/`,
    s = Be(`/local/:conversationId`)?.params?.conversationId ?? null,
    c;
  t[0] === s
    ? (c = t[1])
    : ((c = s == null ? null : g(s)), (t[0] = s), (t[1] = c));
  let l = c,
    u = Be(`/remote/:taskId`)?.params?.taskId ?? null,
    { data: d } = oe(u),
    f = r(Me, l),
    p = r(y, l);
  if (u && d?.task?.title) {
    let e;
    t[2] !== i || t[3] !== a
      ? ((e = a ? (0, $.jsx)(Qn, { onClick: i }) : null),
        (t[2] = i),
        (t[3] = a),
        (t[4] = e))
      : (e = t[4]);
    let n;
    t[5] === d.task.title
      ? (n = t[6])
      : ((n = (0, $.jsx)(`span`, {
          className: `min-w-0 flex-1 text-base text-token-foreground`,
          children: d.task.title,
        })),
        (t[5] = d.task.title),
        (t[6] = n));
    let r;
    return (
      t[7] !== e || t[8] !== n
        ? ((r = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: [e, n],
          })),
          (t[7] = e),
          (t[8] = n),
          (t[9] = r))
        : (r = t[9]),
      r
    );
  }
  if (l && f) {
    let e;
    t[10] !== i || t[11] !== a
      ? ((e = a ? (0, $.jsx)(Qn, { onClick: i }) : null),
        (t[10] = i),
        (t[11] = a),
        (t[12] = e))
      : (e = t[12]);
    let n;
    t[13] === p
      ? (n = t[14])
      : ((n =
          p ||
          (0, $.jsx)(q, {
            id: `codex.taskRow.title`,
            defaultMessage: `New chat`,
            description: `Default title for a Codex thread that doesn't have a title`,
          })),
        (t[13] = p),
        (t[14] = n));
    let r;
    t[15] === n
      ? (r = t[16])
      : ((r = (0, $.jsx)(`span`, {
          className: `min-w-0 flex-1 text-base text-token-foreground`,
          children: n,
        })),
        (t[15] = n),
        (t[16] = r));
    let o;
    return (
      t[17] !== e || t[18] !== r
        ? ((o = (0, $.jsxs)(`div`, {
            className: `flex min-w-0 items-center gap-1`,
            children: [e, r],
          })),
          (t[17] = e),
          (t[18] = r),
          (t[19] = o))
        : (o = t[19]),
      o
    );
  }
  if (o) {
    if (n.length === 0) return null;
    let e;
    return (
      t[20] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(q, {
            id: `header.recentChats`,
            defaultMessage: `Tasks`,
            description: `Header label for recent tasks`,
          })),
          (t[20] = e))
        : (e = t[20]),
      e
    );
  }
  return null;
}
function Qn(e) {
  let t = (0, $n.c)(7),
    { onClick: n } = e,
    r = He(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(q, { ...er.backButton })), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = r.formatMessage(er.backButton)), (t[1] = r), (t[2] = a));
  let o;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(je, { className: `size-3` })), (t[3] = o))
    : (o = t[3]);
  let s;
  return (
    t[4] !== n || t[5] !== a
      ? ((s = (0, $.jsx)(he, {
          chromeExtension: !0,
          extension: !0,
          children: (0, $.jsx)(Ae, {
            tooltipContent: i,
            children: (0, $.jsx)(G, {
              color: `ghost`,
              size: `icon`,
              onClick: n,
              className: `opacity-70 hover:bg-transparent hover:opacity-100 focus:bg-transparent active:bg-transparent`,
              "aria-label": a,
              children: o,
            }),
          }),
        })),
        (t[4] = n),
        (t[5] = a),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var $n,
  $,
  er,
  tr = e(() => {
    (($n = d()),
      ue(),
      s(),
      a(),
      Ie(),
      Xe(),
      rt(),
      Le(),
      R(),
      W(),
      F(),
      ke(),
      De(),
      ie(),
      M(),
      S(),
      mt(),
      Mt(),
      Lt(),
      Gt(),
      qn(),
      An(),
      ($ = f()),
      (er = Fe({
        backButton: {
          id: `header.back`,
          defaultMessage: `Back`,
          description: `Back button label for returning to the previous screen`,
        },
        newChatTitle: {
          id: `header.newChatTitle`,
          defaultMessage: `New chat`,
          description: `Fallback title shown in the Chrome extension side panel header before a chat exists`,
        },
      })));
  });
export { tr as n, Jn as t };
//# sourceMappingURL=header-CF6ECAV2.js.map
