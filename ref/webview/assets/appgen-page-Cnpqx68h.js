import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Ko as i,
  Vo as a,
  _c as o,
  gc as s,
  lc as c,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Ti as l,
  Xo as u,
  Zo as d,
  er as f,
  ot as p,
  rr as m,
  st as h,
  wi as g,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Da as _,
  Dm as v,
  Dn as ee,
  Em as y,
  Nn as te,
  Om as b,
  On as x,
  Pn as S,
  Ta as C,
  Tm as w,
  ls as T,
  us as E,
  xp as D,
  yp as ne,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Go as re,
  Iy as O,
  Ko as k,
  Vy as ie,
  Wo as A,
  zy as j,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  f as M,
  p as ae,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Fm as N,
  Fo as P,
  Ho as F,
  Io as I,
  Ko as L,
  No as R,
  Pm as oe,
  Po as z,
  gp as se,
  hp as B,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  ir as ce,
  nr as V,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  n as H,
  t as U,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~appgen-library-page-hS325QiU.js";
import {
  n as W,
  t as le,
} from "./app-initial~app-main~appgen-page~remote-conversation-page~projects-index-page~appgen-librar~i4jkvfhy-C3t3vyRs.js";
import { n as ue, r as G } from "./searchable-page-layout-6avbQSAH.js";
import {
  T as de,
  a as K,
  c as q,
  d as J,
  f as Y,
  l as X,
  n as Z,
  p as fe,
  r as pe,
  s as me,
  u as he,
  w as ge,
} from "./start-appgen-conversation-DsuZNIH_.js";
import {
  n as _e,
  t as ve,
} from "./infinite-scroll-pagination-spinner-DKk_zYlO.js";
import { n as ye, t as be } from "./appgen-share-dialog-BQA5qyJU.js";
function xe() {
  let e = (0, Q.c)(67),
    t = i(r),
    n = ie(),
    {
      data: a,
      fetchNextPage: o,
      hasNextPage: s,
      isFetchNextPageError: c,
      isFetchingNextPage: l,
      isLoading: u,
      isRefetching: d,
      refetch: f,
    } = re(),
    { setSelectedMode: m } = se(),
    h = ce(),
    [g, _] = (0, Ae.useState)(``),
    { scrollContainerRef: v, showTitleInToolbar: ee, titleRef: y } = de(),
    te = u || d || l,
    b,
    x;
  e[0] !== a || e[1] !== g
    ? ((b = g.trim().toLowerCase()),
      (x = a?.filter((e) => me(e, b)) ?? null),
      (e[0] = a),
      (e[1] = g),
      (e[2] = b),
      (e[3] = x))
    : ((b = e[2]), (x = e[3]));
  let S = x,
    C;
  e[4] === n
    ? (C = e[5])
    : ((C = n.formatMessage({
        id: `appgenPage.refresh`,
        defaultMessage: `Refresh sites`,
        description: `Accessible label for refreshing the Sites project list`,
      })),
      (e[4] = n),
      (e[5] = C));
  let E = C,
    D;
  e[6] === n
    ? (D = e[7])
    : ((D = n.formatMessage({
        id: `appgenPage.sites.search`,
        defaultMessage: `Search sites`,
        description: `Accessible label and placeholder for searching Sites`,
      })),
      (e[6] = n),
      (e[7] = D));
  let O = D,
    k;
  e[8] !== t || e[9] !== m || e[10] !== h
    ? ((k = () => {
        pe(t, h, { type: `create`, setSelectedMode: m });
      }),
      (e[8] = t),
      (e[9] = m),
      (e[10] = h),
      (e[11] = k))
    : (k = e[11]);
  let A = k,
    M;
  e[12] !== t || e[13] !== h
    ? ((M = (e, n, r) => {
        pe(t, h, { type: `edit`, liveUrl: r, projectId: e, projectTitle: n });
      }),
      (e[12] = t),
      (e[13] = h),
      (e[14] = M))
    : (M = e[14]);
  let ae = M,
    N;
  e[15] === f
    ? (N = e[16])
    : ((N = () => {
        f();
      }),
      (e[15] = f),
      (e[16] = N));
  let P = N,
    F;
  e[17] === ee
    ? (F = e[18])
    : ((F = ee
        ? (0, $.jsx)(j, {
            id: `appgenPage.title`,
            defaultMessage: `Sites`,
            description: `Header title for the Sites page`,
          })
        : null),
      (e[17] = ee),
      (e[18] = F));
  let I;
  e[19] === d
    ? (I = e[20])
    : ((I = d ? null : (0, $.jsx)(oe, { className: `icon-xs` })),
      (e[19] = d),
      (e[20] = I));
  let L;
  e[21] !== P || e[22] !== d || e[23] !== te || e[24] !== E || e[25] !== I
    ? ((L = (0, $.jsx)(w, {
        "aria-label": E,
        color: `ghost`,
        disabled: te,
        loading: d,
        onClick: P,
        size: `toolbar`,
        uniform: !0,
        children: I,
      })),
      (e[21] = P),
      (e[22] = d),
      (e[23] = te),
      (e[24] = E),
      (e[25] = I),
      (e[26] = L))
    : (L = e[26]);
  let R;
  e[27] !== E || e[28] !== L
    ? ((R = (0, $.jsx)(ne, { tooltipContent: E, children: L })),
      (e[27] = E),
      (e[28] = L),
      (e[29] = R))
    : (R = e[29]);
  let z;
  e[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, $.jsx)(j, {
        id: `appgenPage.create`,
        defaultMessage: `Create`,
        description: `Button label for starting a new site from the Sites page`,
      })),
      (e[30] = z))
    : (z = e[30]);
  let B;
  e[31] === A
    ? (B = e[32])
    : ((B = (0, $.jsx)(w, {
        color: `outline`,
        size: `toolbar`,
        onClick: A,
        children: z,
      })),
      (e[31] = A),
      (e[32] = B));
  let V;
  e[33] !== B || e[34] !== R
    ? ((V = (0, $.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [R, B],
      })),
      (e[33] = B),
      (e[34] = R),
      (e[35] = V))
    : (V = e[35]);
  let H;
  e[36] !== V || e[37] !== F
    ? ((H = (0, $.jsx)(le, { start: F, trailing: V })),
      (e[36] = V),
      (e[37] = F),
      (e[38] = H))
    : (H = e[38]);
  let U = H,
    W;
  e[39] === U
    ? (W = e[40])
    : ((W = (0, $.jsx)(T, { extension: !0, children: U })),
      (e[39] = U),
      (e[40] = W));
  let G;
  e[41] === U
    ? (G = e[42])
    : ((G = (0, $.jsx)(T, {
        browser: !0,
        chromeExtension: !0,
        electron: !0,
        children: (0, $.jsx)(p.Header, { children: U }),
      })),
      (e[41] = U),
      (e[42] = G));
  let K, q;
  e[43] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, $.jsx)(j, {
        id: `appgenPage.title`,
        defaultMessage: `Sites`,
        description: `Header title for the Sites page`,
      })),
      (q = (0, $.jsx)(j, {
        id: `codexAppgenAnnouncementModal.title`,
        defaultMessage: `Turn your ideas into live websites`,
        description: `Title for the Sites announcement modal`,
      })),
      (e[43] = K),
      (e[44] = q))
    : ((K = e[43]), (q = e[44]));
  let J;
  e[45] !== O || e[46] !== g
    ? ((J = {
        id: `appgen-site-search`,
        label: O,
        onSearchQueryChange: _,
        placeholder: O,
        searchQuery: g,
      }),
      (e[45] = O),
      (e[46] = g),
      (e[47] = J))
    : (J = e[47]);
  let Y;
  e[48] !== o ||
  e[49] !== A ||
  e[50] !== ae ||
  e[51] !== s ||
  e[52] !== c ||
  e[53] !== l ||
  e[54] !== u ||
  e[55] !== b ||
  e[56] !== S
    ? ((Y = (0, $.jsx)(`div`, {
        className: `mx-auto flex min-h-full w-full max-w-[760px] flex-col`,
        children: u
          ? (0, $.jsx)(Se, {})
          : S == null
            ? (0, $.jsx)(we, {})
            : S.length === 0 && (!s || c)
              ? b.length > 0
                ? (0, $.jsx)(Te, {})
                : (0, $.jsx)(Ce, { onCreate: A })
              : (0, $.jsx)(Ee, {
                  projects: S,
                  hasNextPage: s && !c,
                  isFetchingNextPage: l,
                  onEdit: ae,
                  onLoadNextPage: () => {
                    o();
                  },
                }),
      })),
      (e[48] = o),
      (e[49] = A),
      (e[50] = ae),
      (e[51] = s),
      (e[52] = c),
      (e[53] = l),
      (e[54] = u),
      (e[55] = b),
      (e[56] = S),
      (e[57] = Y))
    : (Y = e[57]);
  let X;
  e[58] !== v || e[59] !== J || e[60] !== Y || e[61] !== y
    ? ((X = (0, $.jsx)(ue, {
        contentClassName: `!pt-6`,
        headerVariant: `inset`,
        scrollContainerRef: v,
        title: K,
        subtitle: q,
        titleRef: y,
        search: J,
        children: Y,
      })),
      (e[58] = v),
      (e[59] = J),
      (e[60] = Y),
      (e[61] = y),
      (e[62] = X))
    : (X = e[62]);
  let Z;
  return (
    e[63] !== W || e[64] !== G || e[65] !== X
      ? ((Z = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [W, G, X],
        })),
        (e[63] = W),
        (e[64] = G),
        (e[65] = X),
        (e[66] = Z))
      : (Z = e[66]),
    Z
  );
}
function Se() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(v, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ce(e) {
  let t = (0, Q.c)(5),
    { onCreate: n } = e,
    r;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, $.jsx)(U, { className: `icon-lg text-token-foreground` })),
      (t[0] = r))
    : (r = t[0]);
  let i;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`div`, {
        className: `text-base font-medium text-token-foreground`,
        children: (0, $.jsx)(j, {
          id: `appgenPage.empty.title`,
          defaultMessage: `Nothing here yet`,
          description: `Empty state title for the Sites page`,
        }),
      })),
      (t[1] = i))
    : (i = t[1]);
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(j, {
        id: `appgenPage.empty.create`,
        defaultMessage: `Create new site`,
        description: `Button label for creating a new site from the empty state`,
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  return (
    t[3] === n
      ? (o = t[4])
      : ((o = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsxs)(`div`, {
            className: `flex flex-col items-center gap-4 text-center`,
            children: [
              r,
              i,
              (0, $.jsx)(w, {
                color: `outline`,
                size: `medium`,
                onClick: n,
                children: a,
              }),
            ],
          }),
        })),
        (t[3] = n),
        (t[4] = o)),
    o
  );
}
function we() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(`div`, {
            className: `text-sm font-medium text-token-text-secondary`,
            children: (0, $.jsx)(j, {
              id: `appgenPage.error.title`,
              defaultMessage: `Unable to load sites`,
              description: `Error state title for the Sites page`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Te() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center text-sm font-medium text-token-text-secondary`,
          children: (0, $.jsx)(j, {
            id: `appgenPage.sites.search.empty`,
            defaultMessage: `No sites found`,
            description: `Empty state shown when no Sites match the search query`,
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ee(e) {
  let t = (0, Q.c)(16),
    {
      hasNextPage: n,
      isFetchingNextPage: r,
      onEdit: i,
      onLoadNextPage: a,
      projects: o,
    } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(`span`, {
        children: (0, $.jsx)(j, {
          id: `appgenPage.list.site`,
          defaultMessage: `Site`,
          description: `Column header for a site in the Sites list`,
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsxs)(`div`, {
        className: `col-span-full grid grid-cols-subgrid border-b border-token-border-light px-3 py-2 text-xs leading-[18px] text-token-text-tertiary [&:has(+_[data-appgen-row]:hover)]:border-transparent`,
        children: [
          s,
          (0, $.jsx)(`span`, {
            className: `pl-4 [@container_(max-width:520px)]:sr-only`,
            children: (0, $.jsx)(j, {
              id: `appgenPage.list.sharedWith`,
              defaultMessage: `Shared with`,
              description: `Column header for who can access a site in the Sites list`,
            }),
          }),
        ],
      })),
      (t[1] = c))
    : (c = t[1]);
  let l;
  if (t[2] !== i || t[3] !== o) {
    let e;
    (t[5] === i
      ? (e = t[6])
      : ((e = (e) => (0, $.jsx)(De, { project: e, onEdit: i }, e.id)),
        (t[5] = i),
        (t[6] = e)),
      (l = o.map(e)),
      (t[2] = i),
      (t[3] = o),
      (t[4] = l));
  } else l = t[4];
  let u;
  t[7] === l
    ? (u = t[8])
    : ((u = (0, $.jsxs)(`div`, {
        className: `grid grid-cols-[minmax(0,1fr)_minmax(120px,160px)_auto] [@container_(max-width:520px)]:grid-cols-[minmax(0,1fr)_auto_auto]`,
        children: [c, l],
      })),
      (t[7] = l),
      (t[8] = u));
  let d;
  t[9] !== n || t[10] !== r || t[11] !== a
    ? ((d = (0, $.jsx)(ve, {
        hasNextPage: n,
        isFetchingNextPage: r,
        onLoadNextPage: a,
      })),
      (t[9] = n),
      (t[10] = r),
      (t[11] = a),
      (t[12] = d))
    : (d = t[12]);
  let f;
  return (
    t[13] !== u || t[14] !== d
      ? ((f = (0, $.jsxs)(`div`, {
          className: `@container pb-3`,
          children: [u, d],
        })),
        (t[13] = u),
        (t[14] = d),
        (t[15] = f))
      : (f = t[15]),
    f
  );
}
function De(e) {
  let t = (0, Q.c)(48),
    { onEdit: n, project: r } = e,
    i = ie(),
    a = r.current_live_url,
    { data: o } = k(r.screenshot_url),
    s;
  t[0] !== i || t[1] !== a || t[2] !== r.title
    ? ((s =
        a == null
          ? null
          : (0, $.jsx)(g, {
              "aria-label": i.formatMessage(
                {
                  id: `appgenPage.visit`,
                  defaultMessage: `Visit {siteTitle}`,
                  description: `Accessible label for opening a live site from the sites list`,
                },
                { siteTitle: r.title },
              ),
              className: `peer/appgen-row absolute inset-0 cursor-interaction rounded-xl bg-transparent focus-visible:ring-1 focus-visible:ring-token-focus-border focus-visible:outline-none focus-visible:ring-inset`,
              href: a,
              initiator: `sites_library`,
              openTarget: `in-app-browser`,
            })),
      (t[0] = i),
      (t[1] = a),
      (t[2] = r.title),
      (t[3] = s))
    : (s = t[3]);
  let c;
  t[4] === o
    ? (c = t[5])
    : ((c =
        o == null
          ? (0, $.jsx)(Oe, {})
          : (0, $.jsxs)(`div`, {
              className: `relative h-[50px] w-20 shrink-0 overflow-hidden rounded-[6px]`,
              children: [
                (0, $.jsx)(`img`, {
                  alt: ``,
                  className: `size-full object-cover`,
                  loading: `lazy`,
                  src: o,
                }),
                (0, $.jsx)(`span`, {
                  "aria-hidden": !0,
                  className: `pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-token-border-default)]`,
                }),
              ],
            })),
      (t[4] = o),
      (t[5] = c));
  let l;
  t[6] === r.title
    ? (l = t[7])
    : ((l = (0, $.jsx)(`span`, {
        className: `truncate text-sm leading-5 font-medium text-token-foreground`,
        children: r.title,
      })),
      (t[6] = r.title),
      (t[7] = l));
  let d;
  t[8] === r.updated_at
    ? (d = t[9])
    : ((d = (0, $.jsx)(f, { dateString: r.updated_at })),
      (t[8] = r.updated_at),
      (t[9] = d));
  let p;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `size-0.5 shrink-0 rounded-full bg-token-text-tertiary`,
      })),
      (t[10] = p))
    : (p = t[10]);
  let m;
  t[11] !== a || t[12] !== r.slug
    ? ((m = u(a) ?? r.slug), (t[11] = a), (t[12] = r.slug), (t[13] = m))
    : (m = t[13]);
  let h;
  t[14] === m
    ? (h = t[15])
    : ((h = (0, $.jsx)(`span`, { className: `truncate`, children: m })),
      (t[14] = m),
      (t[15] = h));
  let _;
  t[16] !== d || t[17] !== h
    ? ((_ = (0, $.jsxs)(`span`, {
        className: `appgen-row-default-subtitle flex min-w-0 items-center gap-1.5`,
        children: [d, p, h],
      })),
      (t[16] = d),
      (t[17] = h),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  t[19] === a
    ? (v = t[20])
    : ((v =
        a == null
          ? null
          : (0, $.jsxs)(`span`, {
              className: `appgen-row-hover-subtitle hidden items-center gap-1`,
              children: [
                (0, $.jsx)(j, {
                  id: `appgenPage.openInBrowserSubtitle`,
                  defaultMessage: `Open in browser`,
                  description: `Hover subtitle for opening a live site`,
                }),
                (0, $.jsx)(te, {
                  className: `icon-2xs`,
                  ExternalIcon: ee,
                  href: a,
                }),
              ],
            })),
      (t[19] = a),
      (t[20] = v));
  let y;
  t[21] !== _ || t[22] !== v
    ? ((y = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1.5 text-xs leading-[18px] text-token-text-secondary`,
        children: [_, v],
      })),
      (t[21] = _),
      (t[22] = v),
      (t[23] = y))
    : (y = t[23]);
  let b;
  t[24] !== y || t[25] !== l
    ? ((b = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-px`,
        children: [l, y],
      })),
      (t[24] = y),
      (t[25] = l),
      (t[26] = b))
    : (b = t[26]);
  let x;
  t[27] !== b || t[28] !== c
    ? ((x = (0, $.jsxs)(`div`, {
        className: `pointer-events-none relative z-10 flex min-w-0 items-center gap-6 peer-hover/appgen-row:[&_.appgen-row-default-subtitle]:hidden peer-hover/appgen-row:[&_.appgen-row-hover-subtitle]:inline-flex`,
        children: [c, b],
      })),
      (t[27] = b),
      (t[28] = c),
      (t[29] = x))
    : (x = t[29]);
  let S;
  t[30] !== r.access_policy || t[31] !== r.id || t[32] !== r.title
    ? ((S = (0, $.jsx)(ke, {
        accessPolicy: r.access_policy,
        projectId: r.id,
        projectTitle: r.title,
      })),
      (t[30] = r.access_policy),
      (t[31] = r.id),
      (t[32] = r.title),
      (t[33] = S))
    : (S = t[33]);
  let C;
  t[34] !== a || t[35] !== n || t[36] !== r.id || t[37] !== r.title
    ? ((C = () => n(r.id, r.title, a)),
      (t[34] = a),
      (t[35] = n),
      (t[36] = r.id),
      (t[37] = r.title),
      (t[38] = C))
    : (C = t[38]);
  let w;
  t[39] !== r.id || t[40] !== r.title || t[41] !== C
    ? ((w = (0, $.jsx)(Y, {
        projectId: r.id,
        projectTitle: r.title,
        surface: `sites`,
        viewMode: `list`,
        onEdit: C,
      })),
      (t[39] = r.id),
      (t[40] = r.title),
      (t[41] = C),
      (t[42] = w))
    : (w = t[42]);
  let T;
  return (
    t[43] !== s || t[44] !== x || t[45] !== S || t[46] !== w
      ? ((T = (0, $.jsxs)(`div`, {
          className: `relative col-span-full grid grid-cols-subgrid items-center overflow-hidden rounded-xl p-3 hover:bg-token-list-hover-background/50`,
          "data-appgen-row": !0,
          children: [s, x, S, w],
        })),
        (t[43] = s),
        (t[44] = x),
        (t[45] = S),
        (t[46] = w),
        (t[47] = T))
      : (T = t[47]),
    T
  );
}
function Oe() {
  let e = (0, Q.c)(5),
    { platform: t } = ae(),
    n = t === `windows` ? he : q,
    r;
  e[0] === n
    ? (r = e[1])
    : ((r = (0, $.jsx)(n, { "aria-hidden": !0, className: `size-full` })),
      (e[0] = n),
      (e[1] = r));
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(`span`, {
        "aria-hidden": !0,
        className: `pointer-events-none absolute inset-0 rounded-[6px] shadow-[inset_0_0_0_1px_var(--color-token-border-default)]`,
      })),
      (e[2] = i))
    : (i = e[2]);
  let a;
  return (
    e[3] === r
      ? (a = e[4])
      : ((a = (0, $.jsxs)(`div`, {
          className: `relative h-[50px] w-20 shrink-0 overflow-hidden rounded-[6px]`,
          children: [r, i],
        })),
        (e[3] = r),
        (e[4] = a)),
    a
  );
}
function ke(e) {
  let t = (0, Q.c)(16),
    { accessPolicy: n, projectId: a, projectTitle: o } = e,
    s = F(n),
    c = i(r),
    l;
  t[0] !== a || t[1] !== c
    ? ((l = () => _(c, be, { projectId: a })),
      (t[0] = a),
      (t[1] = c),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] === n
    ? (u = t[4])
    : ((u = (0, $.jsx)(P, {
        className: `icon-xs shrink-0`,
        accessPolicy: n,
        "aria-hidden": !0,
      })),
      (t[3] = n),
      (t[4] = u));
  let d = j,
    f = R(s),
    p;
  t[5] !== d || t[6] !== s || t[7] !== f
    ? ((p = (0, $.jsx)(`span`, {
        className: `truncate [@container_(max-width:520px)]:sr-only`,
        children: (0, $.jsx)(d, { ...f, values: s }),
      })),
      (t[5] = d),
      (t[6] = s),
      (t[7] = f),
      (t[8] = p))
    : (p = t[8]);
  let m;
  t[9] === o
    ? (m = t[10])
    : ((m = (0, $.jsx)(`span`, {
        className: `sr-only`,
        children: (0, $.jsx)(j, {
          id: `appgenPage.openSharingSettings`,
          defaultMessage: `, open sharing settings for {siteTitle}`,
          description: `Additional accessible button label for opening site sharing settings from the sites list access status`,
          values: { siteTitle: o },
        }),
      })),
      (t[9] = o),
      (t[10] = m));
  let h;
  return (
    t[11] !== l || t[12] !== u || t[13] !== p || t[14] !== m
      ? ((h = (0, $.jsxs)(`button`, {
          className: `pointer-events-auto relative z-10 flex min-w-0 cursor-interaction items-center gap-1.5 justify-self-start border-0 bg-transparent p-0 pl-4 text-left text-xs leading-[18px] text-token-foreground underline-offset-2 hover:underline focus-visible:underline [@container_(max-width:520px)]:pl-2`,
          type: `button`,
          onClick: l,
          children: [u, p, m],
        })),
        (t[11] = l),
        (t[12] = u),
        (t[13] = p),
        (t[14] = m),
        (t[15] = h))
      : (h = t[15]),
    h
  );
}
var Q, Ae, $;
e(() => {
  ((Q = s()),
    a(),
    (Ae = t(o(), 1)),
    O(),
    h(),
    y(),
    l(),
    S(),
    m(),
    _e(),
    C(),
    G(),
    b(),
    D(),
    E(),
    B(),
    M(),
    V(),
    x(),
    N(),
    H(),
    n(),
    W(),
    ge(),
    L(),
    I(),
    z(),
    fe(),
    A(),
    ye(),
    d(),
    K(),
    J(),
    X(),
    Z(),
    ($ = c()));
})();
export { xe as AppgenPage };
//# sourceMappingURL=appgen-page-Cnpqx68h.js.map
