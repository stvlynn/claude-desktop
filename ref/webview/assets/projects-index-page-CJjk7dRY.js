import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Fi as i,
  Go as a,
  Ko as o,
  O as s,
  Vo as c,
  _c as l,
  c as u,
  gc as d,
  lc as f,
  on as p,
  qo as m,
  sn as h,
  tr as g,
  u as _,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  $r as v,
  Am as y,
  Rf as b,
  dc as x,
  ei as S,
  er as C,
  fc as w,
  jm as T,
  ot as E,
  rr as D,
  st as O,
  tr as k,
  zf as A,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  $o as j,
  $r as M,
  Dp as N,
  Em as P,
  Ep as F,
  Gi as I,
  Kf as L,
  Lr as R,
  Oi as z,
  Pi as B,
  Si as V,
  Tm as ee,
  Ur as H,
  Vr as te,
  Xi as U,
  Xo as ne,
  Yi as re,
  _i as W,
  _s as G,
  ea as ie,
  ei as ae,
  eo as oe,
  fh as se,
  gi as ce,
  hh as le,
  hi as ue,
  ji as de,
  ki as fe,
  ls as pe,
  mh as K,
  mi as me,
  no as q,
  oo as he,
  op as ge,
  ph as _e,
  qf as ve,
  qi as ye,
  sp as be,
  ta as xe,
  us as Se,
  vi as Ce,
  vs as we,
  xp as Te,
  yi as Ee,
  yp as De,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Fa as Oe,
  Fc as ke,
  Ft as Ae,
  Ic as je,
  Iv as Me,
  Iy as Ne,
  N as Pe,
  Nt as Fe,
  Rv as Ie,
  Vy as Le,
  n as Re,
  ry as ze,
  t as Be,
  ty as Ve,
  xa as He,
  zy as J,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Gn as Ue,
  Ha as We,
  Kn as Ge,
  Va as Ke,
  Xd as qe,
  Zd as Je,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  Nr as Ye,
  Wr as Xe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  _ as Ze,
  c as Qe,
  g as $e,
  l as et,
  o as tt,
  s as nt,
} from "./app-initial~app-main~projects-index-page~local-conversation-page-HgUkvfGN.js";
import {
  $ as rt,
  $t as it,
  A as at,
  F as ot,
  G as st,
  H as ct,
  I as lt,
  K as ut,
  L as dt,
  Qt as ft,
  R as pt,
  U as mt,
  W as ht,
  Zt as gt,
  _ as _t,
  _t as vt,
  an as yt,
  en as bt,
  et as xt,
  g as St,
  h as Ct,
  i as wt,
  in as Tt,
  k as Et,
  m as Dt,
  nt as Ot,
  on as kt,
  r as At,
  tt as jt,
  v as Mt,
  vt as Nt,
  y as Pt,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page-px21igmO.js";
import {
  n as Ft,
  t as It,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-page~remote-conversation-page~pull-reques~nkffpfmw-D-g_ABJu.js";
import {
  n as Lt,
  t as Rt,
} from "./app-initial~app-main~remote-conversation-page~projects-index-page~hotkey-window-thread-page~n4ikpxgm-MU61VBEm.js";
import {
  n as zt,
  t as Bt,
} from "./app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~i4jkvfhy-C3t3vyRs.js";
import { n as Vt, t as Ht } from "./page-search-input-rbsdCe5M.js";
import { n as Ut, t as Wt } from "./use-element-in-view-BYpNnWHn.js";
import { n as Gt } from "./infinite-scroll-pagination-spinner-DKk_zYlO.js";
import { n as Kt, t as qt } from "./thread-overflow-menu-sWCLw7OA.js";
function Jt({
  cloudRows: e = [],
  groups: t,
  projectWritableRoots: n,
  query: r,
  sortDirection: i,
  sortKey: a,
  tasks: o,
}) {
  let s = new Map(o.map((e) => [e.key, e])),
    c = r.trim().toLocaleLowerCase();
  return [...t.map((e) => Yt(e, n, s)), ...e]
    .filter((e) =>
      c.length === 0
        ? !0
        : `${e.name} ${e.sourceSearchText}`.toLocaleLowerCase().includes(c),
    )
    .sort((e, t) => {
      let n = Xt(e, t, a);
      return i === `ascending` ? n : -n;
    });
}
function Yt(e, t, n) {
  let r = e.threadKeys.flatMap((e) => {
      let t = n.get(e);
      return t == null ? [] : [t.at];
    }),
    i = e.projectUpdatedAt == null ? r : [...r, e.projectUpdatedAt],
    a = Qt(
      p({
        projectId: e.projectId,
        projectWritableRoots: t,
        legacyRoot: e.path ?? null,
      }),
    );
  return {
    group: e,
    id: `codex:${e.projectId}`,
    kind: `codex`,
    modifiedAt: i.length === 0 ? null : Math.max(...i),
    name: e.label,
    projectId: e.projectId,
    recentThreadKeys: [...e.threadKeys].sort(
      (e, t) => (n.get(t)?.at ?? 0) - (n.get(e)?.at ?? 0),
    ),
    sourceCount: a.length,
    sources: a,
    sourceSearchText: a.map((e) => e.path ?? e.label).join(` `),
  };
}
function Xt(e, t, n) {
  switch (n) {
    case `modified`:
      return (e.modifiedAt ?? 0) - (t.modifiedAt ?? 0) || Zt(e, t);
    case `name`:
      return Zt(e, t);
    case `sources`:
      return (
        e.sourceCount - t.sourceCount ||
        (e.sources[0]?.label ?? ``).localeCompare(
          t.sources[0]?.label ?? ``,
          void 0,
          { sensitivity: `base` },
        ) ||
        Zt(e, t)
      );
  }
}
function Zt(e, t) {
  return (
    e.name.localeCompare(t.name, void 0, { sensitivity: `base` }) ||
    e.id.localeCompare(t.id)
  );
}
function Qt(e) {
  return e.map((e) => ({ kind: `folder`, label: Me(e), path: e }));
}
var $t = e(() => {
  (s(), Ie());
});
function en(e) {
  let t = (0, an.c)(12),
    { hostId: n, hostLabel: r, isRemote: i, sources: a } = e;
  if (a.length === 0) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(`span`, {
            className: `text-token-description-foreground`,
            children: (0, Y.jsx)(J, {
              id: `projectsIndex.sources.empty`,
              defaultMessage: `No sources`,
              description: `Empty source label in the projects index`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let o;
  if (t[1] !== n || t[2] !== r || t[3] !== i || t[4] !== a) {
    let e;
    (t[6] !== n || t[7] !== r || t[8] !== i
      ? ((e = (e, t) =>
          (0, Y.jsx)(
            tn,
            { hostId: n, hostLabel: r, isRemote: i, source: e },
            `${e.path ?? e.label}-${t}`,
          )),
        (t[6] = n),
        (t[7] = r),
        (t[8] = i),
        (t[9] = e))
      : (e = t[9]),
      (o = a.map(e)),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o));
  } else o = t[5];
  let s;
  return (
    t[10] === o
      ? (s = t[11])
      : ((s = (0, Y.jsx)(`div`, {
          className: `-ml-3 min-w-0 flex-1 overflow-visible`,
          children: (0, Y.jsx)(`div`, {
            className: `flex min-w-0 gap-1.5 overflow-x-auto [mask-image:linear-gradient(to_right,transparent_0,black_14px,black_calc(100%_-_24px),transparent)] py-0.5 pr-5 pl-3 [-webkit-mask-image:linear-gradient(to_right,transparent_0,black_14px,black_calc(100%_-_24px),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden`,
            children: o,
          }),
        })),
        (t[10] = o),
        (t[11] = s)),
    s
  );
}
function tn(e) {
  let t = (0, an.c)(28),
    { hostId: n, hostLabel: r, isRemote: i, source: a } = e,
    o = _(`open-file`),
    s = Le(),
    c = a.path,
    l;
  t[0] !== r || t[1] !== i || t[2] !== a.label || t[3] !== c
    ? ((l =
        i && c != null
          ? `${r ?? ``}${r == null ? `` : `: `}${c}`
          : c == null
            ? a.label
            : tt(c)),
      (t[0] = r),
      (t[1] = i),
      (t[2] = a.label),
      (t[3] = c),
      (t[4] = l))
    : (l = t[4]);
  let u = l,
    d = c != null && !i,
    f;
  if (i && n != null) {
    let e;
    (t[5] === n
      ? (e = t[6])
      : ((e = (0, Y.jsx)(jt, {
          className: `icon-xs shrink-0`,
          disableTooltip: !0,
          envType: `remote`,
          hostId: n,
        })),
        (t[5] = n),
        (t[6] = e)),
      (f = e));
  } else if (a.kind === `file`) {
    let e;
    (t[7] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(G, {
          className: `icon-xs shrink-0 text-token-description-foreground`,
        })),
        (t[7] = e))
      : (e = t[7]),
      (f = e));
  } else {
    let e;
    t[8] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, Y.jsx)(Qe, {
          className: `icon-xs group-hover/source-pill:opacity-0 group-focus-visible/source-pill:opacity-0`,
        })),
        (t[8] = e))
      : (e = t[8]);
    let n;
    t[9] === d
      ? (n = t[10])
      : ((n = d
          ? (0, Y.jsx)(qe, {
              className: `icon-2xs absolute opacity-0 group-hover/source-pill:opacity-100 group-focus-visible/source-pill:opacity-100`,
              "aria-hidden": !0,
            })
          : null),
        (t[9] = d),
        (t[10] = n));
    let r;
    (t[11] === n
      ? (r = t[12])
      : ((r = (0, Y.jsxs)(`span`, {
          className: `relative flex h-4 w-4 shrink-0 items-center justify-center text-token-description-foreground`,
          children: [e, n],
        })),
        (t[11] = n),
        (t[12] = r)),
      (f = r));
  }
  let p;
  t[13] === a.label
    ? (p = t[14])
    : ((p = (0, Y.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: a.label,
      })),
      (t[13] = a.label),
      (t[14] = p));
  let m;
  t[15] !== f || t[16] !== p
    ? ((m = (0, Y.jsxs)(Y.Fragment, { children: [f, p] })),
      (t[15] = f),
      (t[16] = p),
      (t[17] = m))
    : (m = t[17]);
  let h = m,
    v;
  t[18] !== s ||
  t[19] !== d ||
  t[20] !== o ||
  t[21] !== a.label ||
  t[22] !== h ||
  t[23] !== c
    ? ((v = d
        ? (0, Y.jsx)(`button`, {
            type: `button`,
            className: `group/source-pill inline-flex max-w-56 shrink-0 cursor-interaction items-center gap-1.5 rounded-full border border-token-border bg-transparent px-2 py-0.5 text-sm leading-5 text-token-text-primary hover:border-token-border-heavy focus-visible:border-token-focus-border focus-visible:outline-none`,
            "aria-label": s.formatMessage(
              {
                id: `projectsIndex.sources.openSource`,
                defaultMessage: `Reveal {source}`,
                description: `Accessible label for revealing a project source folder in the system file manager`,
              },
              { source: a.label },
            ),
            onClick: () => {
              T({
                path: c,
                cwd: g(c),
                target: `fileManager`,
                openFile: o.mutate,
              });
            },
            children: h,
          })
        : (0, Y.jsx)(`div`, {
            className: `flex max-w-56 shrink-0 items-center gap-1.5 rounded-full border border-token-border bg-transparent px-2 py-0.5 text-sm leading-5 text-token-text-primary`,
            children: h,
          })),
      (t[18] = s),
      (t[19] = d),
      (t[20] = o),
      (t[21] = a.label),
      (t[22] = h),
      (t[23] = c),
      (t[24] = v))
    : (v = t[24]);
  let y;
  return (
    t[25] !== u || t[26] !== v
      ? ((y = (0, Y.jsx)(De, { tooltipContent: u, children: v })),
        (t[25] = u),
        (t[26] = v),
        (t[27] = y))
      : (y = t[27]),
    y
  );
}
function nn(e) {
  let t = (0, an.c)(8),
    { modifiedAt: n, now: r } = e;
  if (n == null) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Y.jsx)(J, {
            id: `projectsIndex.modified.never`,
            defaultMessage: `-`,
            description: `Projects index modified value when there are no chats`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  let i;
  t[1] === n
    ? (i = t[2])
    : ((i = new Date(rn(n)).toISOString()), (t[1] = n), (t[2] = i));
  let a;
  t[3] === i
    ? (a = t[4])
    : ((a = (0, Y.jsx)(C, { dateString: i })), (t[3] = i), (t[4] = a));
  let o;
  return (
    t[5] !== r || t[6] !== a
      ? ((o = (0, Y.jsx)(k, { nowMs: r, children: a })),
        (t[5] = r),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    o
  );
}
function rn(e) {
  return e < 0xe8d4a51000 ? e * 1e3 : e;
}
var an,
  Y,
  on,
  sn,
  cn,
  ln,
  un,
  X,
  dn = e(() => {
    ((an = d()),
      s(),
      Ne(),
      D(),
      Te(),
      y(),
      Ot(),
      Je(),
      we(),
      et(),
      nt(),
      u(),
      (Y = f()),
      (on = `grid grid-cols-[minmax(0,2fr)_minmax(16rem,1fr)_4rem_8rem] gap-x-4 max-[920px]:grid-cols-[minmax(0,1fr)_4rem_8rem] max-[680px]:grid-cols-[minmax(0,1fr)_8rem]`),
      (sn = `relative before:pointer-events-none before:absolute before:-inset-x-3 before:rounded-lg before:bg-token-list-hover-background before:opacity-0 hover:before:opacity-100`),
      (cn = `after:pointer-events-none after:absolute after:-top-px after:-inset-x-3 after:h-px after:bg-token-main-surface-primary after:opacity-0 hover:after:opacity-100`),
      (ln = `border-b border-token-border [&:has(+_[data-project-row-wrapper]:has(>_[data-project-row]:hover))]:border-b-transparent`),
      (un = `relative z-10`),
      (X = `h-8 w-8 shrink-0 rounded-lg !p-1 text-token-text-secondary hover:text-token-foreground focus-visible:text-token-foreground data-[state=open]:text-token-foreground`));
  });
function fn(e) {
  return (
    e instanceof Element &&
    e.closest(`button,a,input,textarea,select,[role='button']`) != null
  );
}
var pn = e(() => {}),
  mn,
  hn,
  gn = e(() => {
    (t(l()),
      (mn = f()),
      (hn = (e) =>
        (0, mn.jsxs)(`svg`, {
          width: 16,
          height: 16,
          viewBox: `0 0 16 16`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, mn.jsx)(`path`, {
              d: `M12.667 9.4743C12.9567 9.47444 13.1922 9.70997 13.1924 9.99969V11.4743H14.667C14.9567 11.4744 15.1922 11.71 15.1924 11.9997C15.1924 12.2896 14.9568 12.525 14.667 12.5251H13.1924V13.9997C13.1924 14.2896 12.9568 14.525 12.667 14.5251C12.377 14.5251 12.1416 14.2896 12.1416 13.9997V12.5251H10.667C10.377 12.5251 10.1416 12.2896 10.1416 11.9997C10.1418 11.7099 10.3771 11.4743 10.667 11.4743H12.1416V9.99969C12.1418 9.70989 12.3771 9.4743 12.667 9.4743Z`,
              fill: `currentColor`,
            }),
            (0, mn.jsx)(`path`, {
              fillRule: `evenodd`,
              clipRule: `evenodd`,
              d: `M5.36914 2.1413C5.92368 2.14134 6.3602 2.23675 6.73242 2.38934C7.0975 2.53904 7.38153 2.73785 7.61816 2.90399C8.07606 3.22547 8.4207 3.47434 9.16602 3.4743H11.9473C13.3336 3.47453 14.4453 4.61186 14.4453 5.99969V7.06512C14.4452 7.48137 14.1212 7.85614 13.6562 7.85614H2.60547V11.3307C2.60547 12.1518 3.26027 12.8051 4.05371 12.8054H7.67578C7.96573 12.8054 8.20117 13.0408 8.20117 13.3307C8.20117 13.6207 7.96573 13.8561 7.67578 13.8561H4.05371C2.66737 13.8559 1.55566 12.7186 1.55566 11.3307V7.35028C1.55545 7.34411 1.55371 7.33795 1.55371 7.33173C1.55371 7.32523 1.55543 7.31864 1.55566 7.31219V4.66669C1.55566 3.27887 2.66737 2.14155 4.05371 2.1413H5.36914ZM4.05371 3.19208C3.26027 3.19233 2.60547 3.84568 2.60547 4.66669V6.80634H13.3955V5.99969C13.3955 5.17867 12.7407 4.52531 11.9473 4.52509H9.16699C8.07964 4.52528 7.50698 4.10834 7.01562 3.76337C6.77762 3.59627 6.57854 3.46129 6.33398 3.36102C6.09656 3.26369 5.79646 3.19212 5.36914 3.19208H4.05371Z`,
              fill: `currentColor`,
            }),
          ],
        })));
  });
function _n() {
  let e = Le(),
    t = m(de),
    { data: n } = ve(i.THREAD_PROJECT_ASSIGNMENTS),
    { data: r } = ve(i.PROJECTLESS_THREAD_IDS),
    { data: o } = ve(i.PROJECT_WRITABLE_ROOTS),
    { groups: s } = a(ae, {
      enabled: !0,
      projectlessThreadIds: r,
      threadKeys: t,
      threadProjectAssignments: n,
    }),
    [c, l] = (0, Q.useState)(``),
    [u, d] = (0, Q.useState)(`modified`),
    [f, p] = (0, Q.useState)(`descending`),
    [g, _] = (0, Q.useState)(null),
    [v, y] = (0, Q.useState)(null),
    [b, x] = (0, Q.useState)(() => new Set()),
    [S, C] = (0, Q.useState)(() => new Set()),
    [w] = (0, Q.useState)(() => Date.now()),
    T = a(
      B,
      (0, Q.useMemo)(() => s.flatMap((e) => e.threadKeys), [s]),
    ),
    D = Jt({
      cloudRows: void 0,
      groups: s,
      projectWritableRoots: h(o),
      query: c,
      sortDirection: f,
      sortKey: u,
      tasks: T,
    }),
    O = e.formatMessage({
      id: `projectsIndex.search.placeholder`,
      defaultMessage: `Search projects`,
      description: `Accessible label and placeholder for projects index search`,
    }),
    k = (0, $.jsx)(Bt, {
      start: Ut({ container: g, target: v })
        ? null
        : (0, $.jsx)(J, {
            id: `projectsIndex.title`,
            defaultMessage: `Projects`,
            description: `Title for the projects index page`,
          }),
      trailing: (0, $.jsx)(At, {
        chatGptProjectCrudStatus: void 0,
        customTriggerButton: (0, $.jsx)(ee, {
          color: `outline`,
          size: `toolbar`,
          children: (0, $.jsx)(J, {
            id: `projectsIndex.newProject`,
            defaultMessage: `New`,
            description: `Button label to create a new project from the projects index`,
          }),
        }),
        mode: `project`,
        onCreateChatGptProject: void 0,
        sidebarMode: `codex`,
        showOrganizeControl: !1,
      }),
    }),
    A = (e) => {
      if (u !== e) {
        (d(e), p(Nn[e]));
        return;
      }
      p(f === `ascending` ? `descending` : `ascending`);
    },
    j = (e) => {
      x((t) => {
        let n = new Set(t);
        return (n.has(e) ? n.delete(e) : n.add(e), n);
      });
    },
    M = (e, t) => {
      C((n) => {
        let r = new Set(n);
        return (t ? r.add(e) : r.delete(e), r);
      });
    },
    N;
  return (
    (N = (0, $.jsx)(J, {
      id: `projectsIndex.empty`,
      defaultMessage: `No projects`,
      description: `Empty state for projects index`,
    })),
    (0, $.jsxs)(`div`, {
      className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary text-token-foreground`,
      children: [
        (0, $.jsx)(pe, { extension: !0, children: k }),
        (0, $.jsx)(pe, {
          browser: !0,
          chromeExtension: !0,
          electron: !0,
          children: (0, $.jsx)(E.Header, { children: k }),
        }),
        (0, $.jsx)(`div`, {
          ref: _,
          className: `relative min-h-0 flex-1 overflow-x-hidden overflow-y-auto [scrollbar-gutter:stable]`,
          children: (0, $.jsxs)(`div`, {
            className: `flex min-h-full w-full flex-col pb-panel`,
            children: [
              (0, $.jsx)(`div`, {
                className: `mx-auto w-full max-w-[var(--thread-content-max-width)] px-panel pt-6 pb-3 md:electron:px-toolbar md:extension:px-20`,
                children: (0, $.jsx)(`h1`, {
                  ref: y,
                  className: `heading-lg font-normal text-token-foreground`,
                  children: (0, $.jsx)(J, {
                    id: `projectsIndex.title`,
                    defaultMessage: `Projects`,
                    description: `Title for the projects index page`,
                  }),
                }),
              }),
              (0, $.jsx)(`div`, {
                className: jn,
                children: (0, $.jsx)(`div`, {
                  className: `mx-auto w-full max-w-[var(--thread-content-max-width)] px-panel pb-2 md:electron:px-toolbar md:extension:px-20`,
                  children: (0, $.jsx)(Ht, {
                    id: `projects-index-search`,
                    className: `w-full min-w-0`,
                    label: O,
                    onSearchQueryChange: l,
                    placeholder: O,
                    searchQuery: c,
                    variant: `composer`,
                  }),
                }),
              }),
              (0, $.jsx)(`div`, {
                className: `mx-auto flex min-h-0 w-full max-w-[var(--thread-content-max-width)] flex-1 flex-col px-panel pt-7 pb-panel md:electron:px-toolbar md:extension:px-20`,
                children: (0, $.jsxs)(`div`, {
                  className: `-mx-5 min-h-0 overflow-visible px-5`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      "data-projects-header": !0,
                      className: K(on, Mn),
                      children: [
                        (0, $.jsx)(vn, {
                          active: u === `name`,
                          direction: f,
                          onClick: () => A(`name`),
                          children: (0, $.jsx)(J, {
                            id: `projectsIndex.column.name`,
                            defaultMessage: `Name`,
                            description: `Projects index name column header`,
                          }),
                        }),
                        (0, $.jsx)(vn, {
                          active: u === `sources`,
                          className: `max-[920px]:hidden`,
                          direction: f,
                          onClick: () => A(`sources`),
                          children: (0, $.jsx)(J, {
                            id: `projectsIndex.column.sources`,
                            defaultMessage: `Sources`,
                            description: `Projects index sources column header`,
                          }),
                        }),
                        (0, $.jsx)(vn, {
                          active: u === `modified`,
                          className: `max-[680px]:hidden`,
                          direction: f,
                          onClick: () => A(`modified`),
                          children: (0, $.jsx)(J, {
                            id: `projectsIndex.column.modified`,
                            defaultMessage: `Updated`,
                            description: `Projects index modified column header`,
                          }),
                        }),
                        (0, $.jsx)(`span`, {}),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      "data-projects-rows": !0,
                      className: `min-w-0`,
                      children: [
                        D.length === 0
                          ? (0, $.jsx)(`div`, {
                              className: `px-0 py-10 text-center text-sm text-token-description-foreground`,
                              children: N,
                            })
                          : D.map((e) => {
                              let t = b.has(e.id);
                              return e.kind === `cloud`
                                ? (null?.projectsById.get(e.projectId), null)
                                : (0, $.jsx)(
                                    yn,
                                    {
                                      expanded: t,
                                      now: w,
                                      onShowAllChange: (t) => M(e.projectId, t),
                                      onToggleExpanded: () => j(e.id),
                                      row: e,
                                      showAll: S.has(e.projectId),
                                    },
                                    e.id,
                                  );
                            }),
                        (D.length, null),
                        (D.length, null),
                        null,
                      ],
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      ],
    })
  );
}
function vn(e) {
  let t = (0, Z.c)(13),
    { active: n, children: r, className: i, direction: a, onClick: o } = e,
    s = n && `text-token-foreground`,
    c;
  t[0] !== i || t[1] !== s
    ? ((c = K(
        `cursor-interaction flex w-max min-w-0 items-center gap-1 text-left text-xs leading-[18px] text-token-text-tertiary hover:text-token-foreground`,
        s,
        i,
      )),
      (t[0] = i),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l;
  t[3] === r
    ? (l = t[4])
    : ((l = (0, $.jsx)(`span`, { className: `truncate`, children: r })),
      (t[3] = r),
      (t[4] = l));
  let u;
  t[5] !== n || t[6] !== a
    ? ((u = n
        ? (0, $.jsx)(se, {
            "aria-hidden": `true`,
            className: K(
              `icon-2xs shrink-0 transition-transform`,
              a === `ascending` && `rotate-180`,
            ),
          })
        : null),
      (t[5] = n),
      (t[6] = a),
      (t[7] = u))
    : (u = t[7]);
  let d;
  return (
    t[8] !== o || t[9] !== c || t[10] !== l || t[11] !== u
      ? ((d = (0, $.jsxs)(`button`, {
          type: `button`,
          className: c,
          onClick: o,
          children: [l, u],
        })),
        (t[8] = o),
        (t[9] = c),
        (t[10] = l),
        (t[11] = u),
        (t[12] = d))
      : (d = t[12]),
    d
  );
}
function yn(e) {
  let t = (0, Z.c)(119),
    {
      expanded: n,
      now: a,
      onShowAllChange: s,
      onToggleExpanded: c,
      row: l,
      showAll: u,
    } = e,
    d = o(r),
    f = Le(),
    m = bt(),
    g = ze(gt),
    { data: _ } = ve(i.PINNED_PROJECT_IDS),
    { data: v } = ve(i.PROJECT_WRITABLE_ROOTS),
    y;
  t[0] !== _ || t[1] !== l.group.projectId
    ? ((y = _?.includes(l.group.projectId)),
      (t[0] = _),
      (t[1] = l.group.projectId),
      (t[2] = y))
    : (y = t[2]);
  let b = y === !0,
    x;
  t[3] !== v || t[4] !== l.group.path || t[5] !== l.group.projectId
    ? ((x = p({
        projectId: l.group.projectId,
        projectWritableRoots: h(v),
        legacyRoot: l.group.path ?? null,
      })),
      (t[3] = v),
      (t[4] = l.group.path),
      (t[5] = l.group.projectId),
      (t[6] = x))
    : (x = t[6]);
  let S = x,
    C =
      l.group.projectKind === `local` &&
      (l.group.isLocalProject === !0 || l.group.path != null),
    w;
  t[7] === c
    ? (w = t[8])
    : ((w = (e) => {
        e.defaultPrevented || e.detail > 1 || fn(e.target) || c();
      }),
      (t[7] = c),
      (t[8] = w));
  let T = w,
    E;
  t[9] !== l.group || t[10] !== m
    ? ((E = (e) => {
        e.defaultPrevented || fn(e.target) || m(l.group);
      }),
      (t[9] = l.group),
      (t[10] = m),
      (t[11] = E))
    : (E = t[11]);
  let D = E,
    O = !n && `[&:has(>_[data-project-row]:hover)]:border-b-transparent`,
    k;
  t[12] === O ? (k = t[13]) : ((k = K(ln, O)), (t[12] = O), (t[13] = k));
  let A;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((A = K(
        on,
        sn,
        cn,
        `before:inset-y-0`,
        `group/project-row cursor-interaction min-h-[70px] items-center px-0 py-2 text-base`,
      )),
      (t[14] = A))
    : (A = t[14]);
  let j;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = K(un, `flex min-w-0 items-center gap-3`)), (t[15] = j))
    : (j = t[15]);
  let M;
  t[16] !== n || t[17] !== l.group.projectKind
    ? ((M =
        l.group.projectKind === `remote`
          ? (0, $.jsx)($e, { className: `icon-xs shrink-0` })
          : (0, $.jsx)(Dt, { className: `icon-xs shrink-0`, open: n })),
      (t[16] = n),
      (t[17] = l.group.projectKind),
      (t[18] = M))
    : (M = t[18]);
  let N;
  t[19] !== l.group.projectId || t[20] !== l.name || t[21] !== M
    ? ((N = (0, $.jsx)(ie, {
        projectId: l.group.projectId,
        projectName: l.name,
        buttonClassName: `!h-7 !w-7 !p-1 text-token-description-foreground [&>svg]:!h-4 [&>svg]:!w-4`,
        fallbackIcon: M,
        markerClassName: `h-4 w-4`,
      })),
      (t[19] = l.group.projectId),
      (t[20] = l.name),
      (t[21] = M),
      (t[22] = N))
    : (N = t[22]);
  let P;
  t[23] === l.name
    ? (P = t[24])
    : ((P = (0, $.jsx)(`span`, {
        className: `block min-w-0 truncate text-token-foreground`,
        children: l.name,
      })),
      (t[23] = l.name),
      (t[24] = P));
  let F;
  t[25] !== l.group.hostId || t[26] !== l.group.projectKind
    ? ((F =
        l.group.projectKind === `remote` && l.group.hostId != null
          ? (0, $.jsx)(bn, { hostId: l.group.hostId })
          : null),
      (t[25] = l.group.hostId),
      (t[26] = l.group.projectKind),
      (t[27] = F))
    : (F = t[27]);
  let I;
  t[28] === f
    ? (I = t[29])
    : ((I = f.formatMessage({
        id: `projectsIndex.toggleProject`,
        defaultMessage: `Toggle project`,
        description: `Accessible label for expanding or collapsing a project row`,
      })),
      (t[28] = f),
      (t[29] = I));
  let L;
  t[30] === c
    ? (L = t[31])
    : ((L = (e) => {
        (e.stopPropagation(), c());
      }),
      (t[30] = c),
      (t[31] = L));
  let R = n ? `rotate-0 opacity-100` : `-rotate-90`,
    z;
  t[32] === R
    ? (z = t[33])
    : ((z = K(
        `icon-xs shrink-0 text-token-text-secondary opacity-0 transition-transform group-hover/project-row:opacity-100 group-focus-visible/project-toggle:opacity-100`,
        R,
      )),
      (t[32] = R),
      (t[33] = z));
  let B;
  t[34] === z
    ? (B = t[35])
    : ((B = (0, $.jsx)(se, { "aria-hidden": `true`, className: z })),
      (t[34] = z),
      (t[35] = B));
  let V;
  t[36] !== n || t[37] !== I || t[38] !== L || t[39] !== B
    ? ((V = (0, $.jsx)(`button`, {
        type: `button`,
        className: `group/project-toggle cursor-interaction rounded-sm`,
        "aria-label": I,
        "aria-expanded": n,
        onClick: L,
        children: B,
      })),
      (t[36] = n),
      (t[37] = I),
      (t[38] = L),
      (t[39] = B),
      (t[40] = V))
    : (V = t[40]);
  let H;
  t[41] !== P || t[42] !== F || t[43] !== V
    ? ((H = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1`,
        children: [P, F, V],
      })),
      (t[41] = P),
      (t[42] = F),
      (t[43] = V),
      (t[44] = H))
    : (H = t[44]);
  let U;
  t[45] !== N || t[46] !== H
    ? ((U = (0, $.jsxs)(`div`, { className: j, children: [N, H] })),
      (t[45] = N),
      (t[46] = H),
      (t[47] = U))
    : (U = t[47]);
  let ne;
  t[48] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ne = K(
        un,
        `flex min-w-0 items-center gap-2 text-token-text-secondary max-[920px]:hidden`,
      )),
      (t[48] = ne))
    : (ne = t[48]);
  let re = l.group.projectKind === `remote` ? l.group.hostId : null,
    W =
      l.group.projectKind === `remote`
        ? (l.group.hostDisplayName ?? l.group.hostId ?? null)
        : null,
    G = l.group.projectKind === `remote`,
    ae;
  t[49] !== l.sources || t[50] !== re || t[51] !== W || t[52] !== G
    ? ((ae = (0, $.jsx)(en, {
        hostId: re,
        hostLabel: W,
        isRemote: G,
        sources: l.sources,
      })),
      (t[49] = l.sources),
      (t[50] = re),
      (t[51] = W),
      (t[52] = G),
      (t[53] = ae))
    : (ae = t[53]);
  let oe;
  t[54] !== C ||
  t[55] !== S ||
  t[56] !== f ||
  t[57] !== g ||
  t[58] !== l.group ||
  t[59] !== l.name ||
  t[60] !== d
    ? ((oe =
        C && g
          ? (0, $.jsx)(ee, {
              "aria-label": f.formatMessage({
                id: `projectsIndex.sources.addSource`,
                defaultMessage: `Add source`,
                description: `Button label to add a source folder to a project from the projects index`,
              }),
              className: K(
                X,
                `opacity-0 group-hover/project-row:opacity-100 focus-visible:opacity-100`,
              ),
              color: `ghostMuted`,
              size: `icon`,
              onClick: () => {
                te(d, {
                  initialName: l.name,
                  initialSources: S,
                  project: An(l.group),
                  showDeleteAction: !0,
                });
              },
              children: (0, $.jsx)(hn, { className: `icon-xs` }),
            })
          : null),
      (t[54] = C),
      (t[55] = S),
      (t[56] = f),
      (t[57] = g),
      (t[58] = l.group),
      (t[59] = l.name),
      (t[60] = d),
      (t[61] = oe))
    : (oe = t[61]);
  let ce;
  t[62] !== ae || t[63] !== oe
    ? ((ce = (0, $.jsxs)(`span`, { className: ne, children: [ae, oe] })),
      (t[62] = ae),
      (t[63] = oe),
      (t[64] = ce))
    : (ce = t[64]);
  let le;
  t[65] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((le = K(un, `text-token-text-secondary max-[680px]:hidden`)),
      (t[65] = le))
    : (le = t[65]);
  let ue;
  t[66] !== a || t[67] !== l.modifiedAt
    ? ((ue = (0, $.jsx)(`span`, {
        className: le,
        children: (0, $.jsx)(nn, { modifiedAt: l.modifiedAt, now: a }),
      })),
      (t[66] = a),
      (t[67] = l.modifiedAt),
      (t[68] = ue))
    : (ue = t[68]);
  let de;
  t[69] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = K(un, `flex min-w-0 justify-end gap-1`)), (t[69] = de))
    : (de = t[69]);
  let fe;
  t[70] !== C || t[71] !== S || t[72] !== g || t[73] !== l
    ? ((fe = (0, $.jsx)(Dn, {
        canEditLocalProject: C,
        initialSources: S,
        localProjectSourcesEnabled: g,
        row: l,
      })),
      (t[70] = C),
      (t[71] = S),
      (t[72] = g),
      (t[73] = l),
      (t[74] = fe))
    : (fe = t[74]);
  let pe;
  t[75] !== f || t[76] !== b
    ? ((pe = b
        ? f.formatMessage({
            id: `projectsIndex.unpinProject`,
            defaultMessage: `Unpin project`,
            description: `Button label to unpin a project from the projects index`,
          })
        : f.formatMessage({
            id: `projectsIndex.pinProject`,
            defaultMessage: `Pin project`,
            description: `Button label to pin a project from the projects index`,
          })),
      (t[75] = f),
      (t[76] = b),
      (t[77] = pe))
    : (pe = t[77]);
  let me;
  t[78] !== _ || t[79] !== l.group.projectId || t[80] !== d
    ? ((me = () => {
        je(d, i.PINNED_PROJECT_IDS, kn(_, l.group.projectId));
      }),
      (t[78] = _),
      (t[79] = l.group.projectId),
      (t[80] = d),
      (t[81] = me))
    : (me = t[81]);
  let q;
  t[82] === b
    ? (q = t[83])
    : ((q = b
        ? (0, $.jsx)(Et, { className: `icon-xs` })
        : (0, $.jsx)(Ue, { className: `icon-xs` })),
      (t[82] = b),
      (t[83] = q));
  let he;
  t[84] !== pe || t[85] !== me || t[86] !== q
    ? ((he = (0, $.jsx)(ee, {
        "aria-label": pe,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: me,
        children: q,
      })),
      (t[84] = pe),
      (t[85] = me),
      (t[86] = q),
      (t[87] = he))
    : (he = t[87]);
  let ge;
  t[88] === f
    ? (ge = t[89])
    : ((ge = f.formatMessage({
        id: `projectsIndex.startProjectChat`,
        defaultMessage: `Start new chat in project`,
        description: `Button label to start a new chat from the projects index`,
      })),
      (t[88] = f),
      (t[89] = ge));
  let _e;
  t[90] !== l.group || t[91] !== m
    ? ((_e = () => m(l.group)), (t[90] = l.group), (t[91] = m), (t[92] = _e))
    : (_e = t[92]);
  let ye;
  t[93] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ye = (0, $.jsx)(Rt, { className: `icon-xs` })), (t[93] = ye))
    : (ye = t[93]);
  let be;
  t[94] !== ge || t[95] !== _e
    ? ((be = (0, $.jsx)(ee, {
        "aria-label": ge,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: _e,
        children: ye,
      })),
      (t[94] = ge),
      (t[95] = _e),
      (t[96] = be))
    : (be = t[96]);
  let xe;
  t[97] !== fe || t[98] !== he || t[99] !== be
    ? ((xe = (0, $.jsxs)(`span`, { className: de, children: [fe, he, be] })),
      (t[97] = fe),
      (t[98] = he),
      (t[99] = be),
      (t[100] = xe))
    : (xe = t[100]);
  let Se;
  t[101] !== T ||
  t[102] !== D ||
  t[103] !== U ||
  t[104] !== ce ||
  t[105] !== ue ||
  t[106] !== xe
    ? ((Se = (0, $.jsxs)(`div`, {
        "data-project-row": !0,
        className: A,
        onClick: T,
        onDoubleClick: D,
        children: [U, ce, ue, xe],
      })),
      (t[101] = T),
      (t[102] = D),
      (t[103] = U),
      (t[104] = ce),
      (t[105] = ue),
      (t[106] = xe),
      (t[107] = Se))
    : (Se = t[107]);
  let Ce;
  t[108] !== n ||
  t[109] !== f ||
  t[110] !== s ||
  t[111] !== l.name ||
  t[112] !== l.recentThreadKeys ||
  t[113] !== u
    ? ((Ce = n
        ? (0, $.jsx)(`div`, {
            className: `pb-3`,
            children: (0, $.jsx)(Mt, {
              ariaLabel: f.formatMessage(
                {
                  id: `projectsIndex.recentChats.ariaLabel`,
                  defaultMessage: `Recent chats in {projectName}`,
                  description: `Accessible label for expanded project recent chats`,
                },
                { projectName: l.name },
              ),
              emptyState: (0, $.jsx)(J, {
                id: `projectsIndex.recentChats.empty`,
                defaultMessage: `No chats`,
                description: `Empty state for an expanded project in the projects index`,
              }),
              emptyStateClassName: `px-2 py-1 text-base text-token-text-secondary`,
              expanded: u,
              itemWrapper: xn,
              maxItems: 10,
              onExpandedChange: s,
              variant: `tableRow`,
              rowOptions: {
                canPin: !1,
                hideRemoteHostEnvIcon: !0,
                hideTimestamp: !0,
                variant: `tableRow`,
              },
              threadKeys: l.recentThreadKeys,
            }),
          })
        : null),
      (t[108] = n),
      (t[109] = f),
      (t[110] = s),
      (t[111] = l.name),
      (t[112] = l.recentThreadKeys),
      (t[113] = u),
      (t[114] = Ce))
    : (Ce = t[114]);
  let we;
  return (
    t[115] !== Se || t[116] !== Ce || t[117] !== k
      ? ((we = (0, $.jsxs)(`div`, {
          "data-project-row-wrapper": !0,
          className: k,
          children: [Se, Ce],
        })),
        (t[115] = Se),
        (t[116] = Ce),
        (t[117] = k),
        (t[118] = we))
      : (we = t[118]),
    we
  );
}
function bn(e) {
  let t = (0, Z.c)(2),
    { hostId: n } = e,
    { state: r } = Re(n);
  if (r == null) return null;
  let i;
  return (
    t[0] === n
      ? (i = t[1])
      : ((i = (0, $.jsx)(St, { hostId: n })), (t[0] = n), (t[1] = i)),
    i
  );
}
function xn(e) {
  let t = (0, Z.c)(57),
    { children: n, className: i, threadKey: s } = e,
    c = o(r),
    l = Le(),
    u = Oe(),
    d = S(),
    [f] = (0, Q.useState)(Sn),
    p = a(fe, s),
    m = p?.kind === `local` ? p.conversationId : null,
    h = a(Ae, m),
    g = a(Xe, s),
    _;
  t[0] === s ? (_ = t[1]) : ((_ = ne(s)), (t[0] = s), (t[1] = _));
  let v = _,
    y = v != null,
    b =
      p?.kind === `local`
        ? (h ?? p.summary?.updatedAt ?? null)
        : p?.kind === `remote`
          ? (p.task.updated_at ?? p.task.created_at ?? null)
          : null,
    x;
  t[2] !== u || t[3] !== d || t[4] !== c || t[5] !== s
    ? ((x = () => {
        (Tt(c, s), kt(c, s, d, u));
      }),
      (t[2] = u),
      (t[3] = d),
      (t[4] = c),
      (t[5] = s),
      (t[6] = x))
    : (x = t[6]);
  let C = x,
    w;
  t[7] === C
    ? (w = t[8])
    : ((w = (e) => {
        e.defaultPrevented || e.detail > 1 || fn(e.target) || C();
      }),
      (t[7] = C),
      (t[8] = w));
  let T = w,
    E;
  t[9] !== v || t[10] !== c
    ? ((E = (e) => {
        v != null && We(c, v, e);
      }),
      (t[9] = v),
      (t[10] = c),
      (t[11] = E))
    : (E = t[11]);
  let D = E,
    O;
  t[12] !== l || t[13] !== g
    ? ((O = l.formatMessage(g ? ut : st)),
      (t[12] = l),
      (t[13] = g),
      (t[14] = O))
    : (O = t[14]);
  let k = O,
    A;
  t[15] === i
    ? (A = t[16])
    : ((A = K(
        on,
        sn,
        `before:inset-y-0`,
        `group/thread-row cursor-interaction h-9 items-center text-base leading-9`,
        i,
      )),
      (t[15] = i),
      (t[16] = A));
  let j;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = K(
        un,
        `col-span-2 flex min-w-0 items-center gap-3 max-[920px]:col-span-1`,
      )),
      (t[17] = j))
    : (j = t[17]);
  let M = p ?? null,
    N;
  t[18] !== m || t[19] !== M
    ? ((N = (0, $.jsx)(Cn, { entry: M, localConversationId: m })),
      (t[18] = m),
      (t[19] = M),
      (t[20] = N))
    : (N = t[20]);
  let P;
  t[21] === n
    ? (P = t[22])
    : ((P = (0, $.jsx)(`div`, { className: `min-w-0 flex-1`, children: n })),
      (t[21] = n),
      (t[22] = P));
  let I;
  t[23] !== P || t[24] !== N
    ? ((I = (0, $.jsxs)(`div`, { className: j, children: [N, P] })),
      (t[23] = P),
      (t[24] = N),
      (t[25] = I))
    : (I = t[25]);
  let L;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = K(un, `text-token-text-secondary max-[680px]:hidden`)), (t[26] = L))
    : (L = t[26]);
  let R;
  t[27] !== b || t[28] !== f
    ? ((R = b == null ? null : (0, $.jsx)(nn, { modifiedAt: b, now: f })),
      (t[27] = b),
      (t[28] = f),
      (t[29] = R))
    : (R = t[29]);
  let z;
  t[30] === R
    ? (z = t[31])
    : ((z = (0, $.jsx)(`span`, { className: L, children: R })),
      (t[30] = R),
      (t[31] = z));
  let B;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((B = K(un, `flex min-w-0 justify-end gap-1`)), (t[32] = B))
    : (B = t[32]);
  let V = p ?? null,
    H;
  t[33] !== C || t[34] !== V
    ? ((H = (0, $.jsx)(wn, { entry: V, onOpenThread: C })),
      (t[33] = C),
      (t[34] = V),
      (t[35] = H))
    : (H = t[35]);
  let te;
  t[36] !== y || t[37] !== g || t[38] !== k || t[39] !== D
    ? ((te = y
        ? (0, $.jsx)(ee, {
            "aria-label": k,
            className: K(
              X,
              `opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100`,
            ),
            color: `ghostMuted`,
            size: `icon`,
            onClick: () => D(!g),
            children: g
              ? (0, $.jsx)(Et, { className: `icon-xs` })
              : (0, $.jsx)(Ue, { className: `icon-xs` }),
          })
        : null),
      (t[36] = y),
      (t[37] = g),
      (t[38] = k),
      (t[39] = D),
      (t[40] = te))
    : (te = t[40]);
  let U;
  t[41] === l
    ? (U = t[42])
    : ((U = l.formatMessage({
        id: `projectsIndex.openThread`,
        defaultMessage: `Open chat`,
        description: `Button label to open a chat from an expanded project row`,
      })),
      (t[41] = l),
      (t[42] = U));
  let re;
  t[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, $.jsx)(F, { className: `icon-xs` })), (t[43] = re))
    : (re = t[43]);
  let W;
  t[44] !== C || t[45] !== U
    ? ((W = (0, $.jsx)(ee, {
        "aria-label": U,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        onClick: C,
        children: re,
      })),
      (t[44] = C),
      (t[45] = U),
      (t[46] = W))
    : (W = t[46]);
  let G;
  t[47] !== H || t[48] !== te || t[49] !== W
    ? ((G = (0, $.jsxs)(`span`, { className: B, children: [H, te, W] })),
      (t[47] = H),
      (t[48] = te),
      (t[49] = W),
      (t[50] = G))
    : (G = t[50]);
  let ie;
  return (
    t[51] !== T || t[52] !== I || t[53] !== z || t[54] !== G || t[55] !== A
      ? ((ie = (0, $.jsxs)(`div`, {
          className: A,
          onClick: T,
          children: [I, z, G],
        })),
        (t[51] = T),
        (t[52] = I),
        (t[53] = z),
        (t[54] = G),
        (t[55] = A),
        (t[56] = ie))
      : (ie = t[56]),
    ie
  );
}
function Sn() {
  return Date.now();
}
function Cn(e) {
  let t = (0, Z.c)(12),
    { entry: n, localConversationId: r } = e,
    i = a(dt, r),
    o = n?.kind === `remote` ? n : null,
    s;
  t[0] === o ? (s = t[1]) : ((s = ot(o)), (t[0] = o), (t[1] = s));
  let c = a(pt, s),
    l = a(ye, r),
    u = a(re, r),
    d = a(Fe, r),
    f = n?.kind === `remote` ? c?.iconBadge : i?.iconBadge,
    p;
  t[2] !== n || t[3] !== u || t[4] !== l || t[5] !== d
    ? ((p = On({
        entry: n,
        localHasUnreadTurn: u,
        localStatusType: l,
        localUnreadMessageCount: d,
      })),
      (t[2] = n),
      (t[3] = u),
      (t[4] = l),
      (t[5] = d),
      (t[6] = p))
    : (p = t[6]);
  let m = p,
    h;
  t[7] !== f || t[8] !== m
    ? ((h =
        f == null
          ? m == null
            ? null
            : (0, $.jsx)(vt, { statusState: m })
          : (0, $.jsx)(ct, { badge: f })),
      (t[7] = f),
      (t[8] = m),
      (t[9] = h))
    : (h = t[9]);
  let g;
  return (
    t[10] === h
      ? (g = t[11])
      : ((g = (0, $.jsx)(`span`, {
          className: `flex h-7 w-7 shrink-0 items-center justify-center`,
          children: h,
        })),
        (t[10] = h),
        (t[11] = g)),
    g
  );
}
function wn(e) {
  let t = (0, Z.c)(4),
    { entry: n, onOpenThread: r } = e;
  if (n?.kind === `local`) {
    let e;
    return (
      t[0] === n
        ? (e = t[1])
        : ((e = (0, $.jsx)(En, { entry: n })), (t[0] = n), (t[1] = e)),
      e
    );
  }
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(Tn, { onOpenThread: r })), (t[2] = r), (t[3] = i)),
    i
  );
}
function Tn(e) {
  let t = (0, Z.c)(17),
    { onOpenThread: n } = e,
    r = Le(),
    [i, a] = (0, Q.useState)(!1),
    o;
  t[0] === r
    ? (o = t[1])
    : ((o = r.formatMessage({
        id: `projectsIndex.threadActions`,
        defaultMessage: `Chat actions`,
        description: `Button label for expanded project chat row actions`,
      })),
      (t[0] = r),
      (t[1] = o));
  let s = i && `opacity-100`,
    c;
  t[2] === s
    ? (c = t[3])
    : ((c = K(
        X,
        `opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100`,
        s,
      )),
      (t[2] = s),
      (t[3] = c));
  let l;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(x, { className: `icon-xs` })), (t[4] = l))
    : (l = t[4]);
  let u;
  t[5] !== o || t[6] !== c
    ? ((u = (0, $.jsx)(ee, {
        "aria-label": o,
        className: c,
        color: `ghostMuted`,
        size: `icon`,
        children: l,
      })),
      (t[5] = o),
      (t[6] = c),
      (t[7] = u))
    : (u = t[7]);
  let d;
  t[8] === n
    ? (d = t[9])
    : ((d = () => {
        (n(), a(!1));
      }),
      (t[8] = n),
      (t[9] = d));
  let f;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, $.jsx)(J, {
        id: `projectsIndex.openThreadMenuItem`,
        defaultMessage: `Open chat`,
        description: `Menu item to open a chat from an expanded project row`,
      })),
      (t[10] = f))
    : (f = t[10]);
  let p;
  t[11] === d
    ? (p = t[12])
    : ((p = (0, $.jsx)(q.Item, { LeftIcon: F, onSelect: d, children: f })),
      (t[11] = d),
      (t[12] = p));
  let m;
  return (
    t[13] !== i || t[14] !== u || t[15] !== p
      ? ((m = (0, $.jsx)(oe, {
          align: `end`,
          contentWidth: `xs`,
          open: i,
          onOpenChange: a,
          triggerButton: u,
          children: p,
        })),
        (t[13] = i),
        (t[14] = u),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
function En(e) {
  let t = (0, Z.c)(6),
    { entry: n } = e,
    r = n.conversationId,
    i = a(A, r) ?? n.summary?.title ?? null,
    o = n.cwd,
    s = n.workspaceKind === `projectless`,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = K(
        X,
        `opacity-0 group-hover/thread-row:opacity-100 focus-visible:opacity-100 data-[state=open]:opacity-100`,
      )),
      (t[0] = c))
    : (c = t[0]);
  let l;
  return (
    t[1] !== r || t[2] !== n.cwd || t[3] !== s || t[4] !== i
      ? ((l = (0, $.jsx)(qt, {
          archiveNavigation: `none`,
          archiveSource: `projects_index_thread_overflow_menu`,
          conversationId: r,
          cwd: o,
          dropdownAlign: `end`,
          hideForkActions: s,
          title: i,
          triggerButtonClassName: c,
          triggerButtonColor: `ghostMuted`,
          triggerIconClassName: `icon-xs`,
        })),
        (t[1] = r),
        (t[2] = n.cwd),
        (t[3] = s),
        (t[4] = i),
        (t[5] = l))
      : (l = t[5]),
    l
  );
}
function Dn(e) {
  let t = (0, Z.c)(50),
    {
      canEditLocalProject: n,
      initialSources: i,
      localProjectSourcesEnabled: s,
      row: c,
    } = e,
    l = o(r),
    u = Le(),
    d = m(M),
    f = a(z, c.group.threadKeys),
    p;
  t[0] === f ? (p = t[1]) : ((p = Ce(f)), (t[0] = f), (t[1] = p));
  let h = p,
    [g, _] = (0, Q.useState)(!1),
    [v, y] = (0, Q.useState)(!1),
    [b, S] = (0, Q.useState)(!1),
    C;
  t[2] === u
    ? (C = t[3])
    : ((C = u.formatMessage({
        id: `projectsIndex.projectActions`,
        defaultMessage: `Project actions`,
        description: `Button label for project row actions`,
      })),
      (t[2] = u),
      (t[3] = C));
  let w;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, $.jsx)(x, { className: `icon-xs` })), (t[4] = w))
    : (w = t[4]);
  let T;
  t[5] === C
    ? (T = t[6])
    : ((T = (0, $.jsx)(ee, {
        "aria-label": C,
        className: X,
        color: `ghostMuted`,
        size: `icon`,
        children: w,
      })),
      (t[5] = C),
      (t[6] = T));
  let E;
  t[7] !== n ||
  t[8] !== i ||
  t[9] !== c.group ||
  t[10] !== c.name ||
  t[11] !== l
    ? ((E = n
        ? (0, $.jsx)(q.Item, {
            LeftIcon: It,
            onSelect: () => {
              (_(!1),
                te(l, {
                  initialName: c.name,
                  initialSources: i,
                  project: An(c.group),
                  showDeleteAction: !0,
                }));
            },
            children: (0, $.jsx)(J, {
              id: `projectsIndex.editProject`,
              defaultMessage: `Edit project`,
              description: `Menu item to edit a project from the projects index`,
            }),
          })
        : null),
      (t[7] = n),
      (t[8] = i),
      (t[9] = c.group),
      (t[10] = c.name),
      (t[11] = l),
      (t[12] = E))
    : (E = t[12]);
  let D;
  t[13] !== n ||
  t[14] !== i ||
  t[15] !== s ||
  t[16] !== c.group ||
  t[17] !== c.name ||
  t[18] !== l
    ? ((D =
        n && s
          ? (0, $.jsx)(q.Item, {
              LeftIcon: hn,
              onSelect: () => {
                (_(!1),
                  te(l, {
                    initialName: c.name,
                    initialSources: i,
                    project: An(c.group),
                    showDeleteAction: !0,
                  }));
              },
              children: (0, $.jsx)(J, {
                id: `projectsIndex.addSource`,
                defaultMessage: `Add source`,
                description: `Menu item to add a source folder from the projects index`,
              }),
            })
          : null),
      (t[13] = n),
      (t[14] = i),
      (t[15] = s),
      (t[16] = c.group),
      (t[17] = c.name),
      (t[18] = l),
      (t[19] = D))
    : (D = t[19]);
  let O = h.length === 0,
    k,
    A;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = () => {
        (_(!1), y(!0));
      }),
      (A = (0, $.jsx)(J, {
        id: `projectsIndex.archiveProjectThreads`,
        defaultMessage: `Archive chats`,
        description: `Menu item to archive all archiveable chats in a project from the projects index`,
      })),
      (t[20] = k),
      (t[21] = A))
    : ((k = t[20]), (A = t[21]));
  let j;
  t[22] === O
    ? (j = t[23])
    : ((j = (0, $.jsx)(q.Item, {
        LeftIcon: rt,
        disabled: O,
        onSelect: k,
        children: A,
      })),
      (t[22] = O),
      (t[23] = j));
  let N;
  t[24] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, $.jsx)(q.Item, {
        LeftIcon: ge,
        onSelect: () => {
          (_(!1), S(!0));
        },
        children: (0, $.jsx)(J, {
          id: `projectsIndex.removeProject`,
          defaultMessage: `Remove`,
          description: `Menu item to remove a project from the projects index`,
        }),
      })),
      (t[24] = N))
    : (N = t[24]);
  let P;
  t[25] !== g || t[26] !== j || t[27] !== T || t[28] !== E || t[29] !== D
    ? ((P = (0, $.jsxs)(oe, {
        align: `end`,
        contentWidth: `xs`,
        open: g,
        onOpenChange: _,
        triggerButton: T,
        children: [E, D, j, N],
      })),
      (t[25] = g),
      (t[26] = j),
      (t[27] = T),
      (t[28] = E),
      (t[29] = D),
      (t[30] = P))
    : (P = t[30]);
  let F;
  t[31] !== v || t[32] !== c.group.threadKeys || t[33] !== c.name
    ? ((F = v
        ? (0, $.jsx)(me, {
            projectLabel: c.name,
            threadKeys: c.group.threadKeys,
            currentThreadKey: null,
            onOpenChange: y,
          })
        : null),
      (t[31] = v),
      (t[32] = c.group.threadKeys),
      (t[33] = c.name),
      (t[34] = F))
    : (F = t[34]);
  let I;
  t[35] !== b || t[36] !== c.group || t[37] !== c.name || t[38] !== d
    ? ((I =
        b && c.group.projectKind === `local`
          ? (0, $.jsx)(ue, {
              project: c.group,
              projectLabel: c.name,
              workspaceRootOptions: d ?? [],
              onOpenChange: S,
              onDropdownOpenChange: _,
            })
          : null),
      (t[35] = b),
      (t[36] = c.group),
      (t[37] = c.name),
      (t[38] = d),
      (t[39] = I))
    : (I = t[39]);
  let L;
  t[40] !== b ||
  t[41] !== c.group.projectId ||
  t[42] !== c.group.projectKind ||
  t[43] !== c.name
    ? ((L =
        b && c.group.projectKind === `remote`
          ? (0, $.jsx)(ce, {
              projectId: c.group.projectId,
              projectLabel: c.name,
              onOpenChange: S,
              onDropdownOpenChange: _,
            })
          : null),
      (t[40] = b),
      (t[41] = c.group.projectId),
      (t[42] = c.group.projectKind),
      (t[43] = c.name),
      (t[44] = L))
    : (L = t[44]);
  let R;
  return (
    t[45] !== P || t[46] !== F || t[47] !== I || t[48] !== L
      ? ((R = (0, $.jsxs)($.Fragment, { children: [P, F, I, L] })),
        (t[45] = P),
        (t[46] = F),
        (t[47] = I),
        (t[48] = L),
        (t[49] = R))
      : (R = t[49]),
    R
  );
}
function On({
  entry: e,
  localHasUnreadTurn: t,
  localStatusType: n,
  localUnreadMessageCount: r,
}) {
  switch (e?.kind) {
    case `local`:
      return { type: n ?? `idle`, unread: t === !0, unreadCount: r ?? 0 };
    case `remote`: {
      let t =
        e.task.task_status_display?.latest_turn_status_display?.turn_status;
      return {
        type:
          t === `in_progress` || t === `pending`
            ? `loading`
            : t === `failed`
              ? `error`
              : `idle`,
        unread: e.task.has_unread_turn,
      };
    }
    case `pending-worktree`:
      return {
        type:
          e.pendingWorktree.phase === `queued` ||
          e.pendingWorktree.phase === `creating`
            ? `loading`
            : e.pendingWorktree.phase === `failed`
              ? `error`
              : `idle`,
        unread: e.pendingWorktree.needsAttention,
      };
    case void 0:
      return null;
  }
}
function kn(e, t) {
  return e?.includes(t) === !0 ? e.filter((e) => e !== t) : [...(e ?? []), t];
}
function An(e) {
  return e.isLocalProject === !0
    ? { isLocalProject: !0, projectId: e.projectId }
    : e.path == null
      ? { projectId: e.projectId }
      : { path: e.path, projectId: e.projectId };
}
var Z, Q, $, jn, Mn, Nn;
e(() => {
  ((Z = d()),
    le(),
    c(),
    s(),
    (Q = t(l(), 1)),
    Ne(),
    He(),
    Be(),
    _t(),
    Pe(),
    O(),
    P(),
    he(),
    Gt(),
    Ct(),
    Vt(),
    Se(),
    ke(),
    I(),
    Nt(),
    L(),
    it(),
    xt(),
    N(),
    _e(),
    Lt(),
    Ft(),
    Ze(),
    at(),
    Ge(),
    w(),
    be(),
    U(),
    b(),
    Kt(),
    xe(),
    ft(),
    R(),
    $t(),
    dn(),
    pn(),
    n(),
    gn(),
    ht(),
    Ee(),
    wt(),
    mt(),
    W(),
    H(),
    Ke(),
    lt(),
    V(),
    j(),
    yt(),
    Ye(),
    Pt(),
    Ve(),
    zt(),
    Wt(),
    v(),
    ($ = f()),
    (jn = `sticky top-0 z-30 bg-token-main-surface-primary after:pointer-events-none after:absolute after:top-full after:right-0 after:left-0 after:h-8 after:bg-linear-to-b after:from-token-main-surface-primary after:to-transparent after:content-['']`),
    (Mn = `min-h-10 items-center border-b border-token-border-light px-0 py-2 text-xs leading-[18px] text-token-text-tertiary [&:has(+_[data-projects-rows]>[data-project-row-wrapper]:first-child>[data-project-row]:hover)]:border-b-transparent`),
    (Nn = {
      modified: `descending`,
      name: `ascending`,
      sources: `descending`,
    }));
})();
export { _n as ProjectsIndexPage };
//# sourceMappingURL=projects-index-page-CJjk7dRY.js.map
