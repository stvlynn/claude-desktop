import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  C as n,
  D as r,
  E as i,
  Ei as a,
  Go as o,
  Ko as s,
  O as c,
  S as l,
  Ti as u,
  Vo as d,
  _c as f,
  c as p,
  gc as m,
  i as h,
  lc as g,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  $r as _,
  Jo as v,
  ei as y,
  qo as b,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Dm as x,
  Em as S,
  Om as C,
  Tm as w,
  U as T,
  V as E,
  gp as D,
  mp as O,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  $p as k,
  Iy as A,
  Jn as ee,
  Qp as te,
  Rv as j,
  Vy as M,
  Yn as ne,
  gh as re,
  ph as ie,
  vg as ae,
  x_ as oe,
  y_ as se,
  yg as ce,
  zy as N,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  E as P,
  _n as F,
  dn as I,
  y as L,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Au as R,
  Fm as z,
  Mu as B,
  Pm as V,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  H,
  V as U,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  J as W,
  d as G,
  f as le,
  q as K,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import {
  r as ue,
  t as q,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js";
import { n as de, t as fe } from "./use-codex-worktrees-DzKC3qS4.js";
function pe() {
  let e = (0, Z.c)(57),
    t = M(),
    { selectedHostId: n } = B(),
    {
      data: r,
      isLoading: i,
      isFetching: a,
      error: s,
      refetch: c,
    } = de(k(n), `worktrees_settings_page`),
    l;
  e[0] === n ? (l = e[1]) : ((l = { hostId: n }), (e[0] = n), (e[1] = l));
  let { data: u, isLoading: d, error: f } = o(F, l),
    { data: p, isLoading: m } = P(),
    h = v(),
    g,
    _;
  if (
    e[2] !== p ||
    e[3] !== t ||
    e[4] !== h ||
    e[5] !== m ||
    e[6] !== d ||
    e[7] !== a ||
    e[8] !== i ||
    e[9] !== c ||
    e[10] !== n ||
    e[11] !== u?.roots ||
    e[12] !== f ||
    e[13] !== r?.worktrees ||
    e[14] !== s
  ) {
    _ = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let o = _e(r?.worktrees ?? [], u?.roots ?? []),
        l,
        v;
      if (e[17] !== p || e[18] !== h || e[19] !== n) {
        let t;
        (e[22] === n
          ? (t = e[23])
          : ((t = (e) => ve(e) === n), (e[22] = n), (e[23] = t)),
          (l = (p ?? []).filter(t)));
        let r;
        (e[24] === h
          ? (r = e[25])
          : ((r = (e) => !oe(e, h)), (e[24] = h), (e[25] = r)),
          (v = l.filter(r)),
          (e[17] = p),
          (e[18] = h),
          (e[19] = n),
          (e[20] = l),
          (e[21] = v));
      } else ((l = e[20]), (v = e[21]));
      let y = v,
        b = ge(o),
        S;
      e[26] === t
        ? (S = e[27])
        : ((S = t.formatMessage({
            id: `settings.worktrees.refresh`,
            defaultMessage: `Refresh`,
            description: `Button label to refresh the worktree list`,
          })),
          (e[26] = t),
          (e[27] = S));
      let C = S,
        T;
      e[28] === c
        ? (T = e[29])
        : ((T = () => {
            c();
          }),
          (e[28] = c),
          (e[29] = T));
      let E;
      e[30] === a
        ? (E = e[31])
        : ((E = a ? null : (0, $.jsx)(V, { className: `icon-xs` })),
          (e[30] = a),
          (e[31] = E));
      let D;
      e[32] !== a || e[33] !== C || e[34] !== T || e[35] !== E
        ? ((D = (0, $.jsx)(w, {
            "aria-label": C,
            className: `shrink-0`,
            color: `ghost`,
            loading: a,
            onClick: T,
            size: `toolbar`,
            title: C,
            uniform: !0,
            children: E,
          })),
          (e[32] = a),
          (e[33] = C),
          (e[34] = T),
          (e[35] = E),
          (e[36] = D))
        : (D = e[36]);
      let O = D,
        k = s ?? f;
      if (i || d) {
        let t;
        e[37] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((t = (0, $.jsx)(U, { slug: `worktrees` })), (e[37] = t))
          : (t = e[37]);
        let n;
        e[38] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(N, {
              id: `settings.worktrees.loading.title`,
              defaultMessage: `Loading worktrees`,
              description: `Loading state title for worktrees settings`,
            })),
            (e[38] = n))
          : (n = e[38]);
        let r;
        e[39] === O
          ? (r = e[40])
          : ((r = (0, $.jsx)(G.Header, { title: n, actions: O })),
            (e[39] = O),
            (e[40] = r));
        let i;
        e[41] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((i = (0, $.jsx)(G.Content, {
              children: (0, $.jsx)(K, {
                children: (0, $.jsxs)(`div`, {
                  className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
                  children: [
                    (0, $.jsx)(x, { className: `icon-xxs` }),
                    (0, $.jsx)(N, {
                      id: `settings.worktrees.loading.body`,
                      defaultMessage: `Fetching worktree details.`,
                      description: `Loading state body for worktrees settings`,
                    }),
                  ],
                }),
              }),
            })),
            (e[41] = i))
          : (i = e[41]);
        let a;
        (e[42] === r
          ? (a = e[43])
          : ((a = (0, $.jsx)(q, {
              title: t,
              children: (0, $.jsxs)(G, { children: [r, i] }),
            })),
            (e[42] = r),
            (e[43] = a)),
          (_ = a));
        break bb0;
      }
      if (k) {
        let n;
        e[44] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, $.jsx)(U, { slug: `worktrees` })), (e[44] = n))
          : (n = e[44]);
        let r;
        e[45] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((r = (0, $.jsx)(N, {
              id: `settings.worktrees.error.title`,
              defaultMessage: `Unable to load worktrees`,
              description: `Error state title for worktrees settings`,
            })),
            (e[45] = r))
          : (r = e[45]);
        let i;
        e[46] === O
          ? (i = e[47])
          : ((i = (0, $.jsx)(G.Header, { title: r, actions: O })),
            (e[46] = O),
            (e[47] = i));
        let a;
        e[48] !== t || e[49] !== k.message
          ? ((a =
              k.message ||
              t.formatMessage({
                id: `settings.worktrees.error.body`,
                defaultMessage: `Something went wrong while loading worktrees.`,
                description: `Error body for worktrees settings`,
              })),
            (e[48] = t),
            (e[49] = k.message),
            (e[50] = a))
          : (a = e[50]);
        let o;
        e[51] === a
          ? (o = e[52])
          : ((o = (0, $.jsx)(G.Content, {
              children: (0, $.jsx)(K, {
                children: (0, $.jsx)(`div`, {
                  className: `p-3 text-sm text-token-text-secondary`,
                  children: a,
                }),
              }),
            })),
            (e[51] = a),
            (e[52] = o));
        let s;
        (e[53] !== i || e[54] !== o
          ? ((s = (0, $.jsx)(q, {
              title: n,
              children: (0, $.jsxs)(G, { children: [i, o] }),
            })),
            (e[53] = i),
            (e[54] = o),
            (e[55] = s))
          : (s = e[55]),
          (_ = s));
        break bb0;
      }
      let A;
      (e[56] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((A = (0, $.jsx)(U, { slug: `worktrees` })), (e[56] = A))
        : (A = e[56]),
        (g = (0, $.jsx)(q, {
          title: A,
          children:
            b.length === 0
              ? (0, $.jsxs)(G, {
                  children: [
                    (0, $.jsx)(G.Header, {
                      title: (0, $.jsx)(N, {
                        id: `settings.worktrees.empty.title`,
                        defaultMessage: `No worktrees yet`,
                        description: `Empty state title for worktrees settings`,
                      }),
                      actions: O,
                    }),
                    (0, $.jsx)(G.Content, {
                      children: (0, $.jsx)(K, {
                        children: (0, $.jsx)(`div`, {
                          className: `p-3 text-sm text-token-text-secondary`,
                          children: (0, $.jsx)(N, {
                            id: `settings.worktrees.empty.body`,
                            defaultMessage: `Worktrees created by Codex will appear here.`,
                            description: `Empty state body for worktrees settings`,
                          }),
                        }),
                      }),
                    }),
                  ],
                })
              : b.map((e, t) =>
                  (0, $.jsx)(
                    me,
                    {
                      action: t === 0 ? O : null,
                      allConversations: l,
                      visibleConversations: y,
                      hostId: n,
                      isConversationsLoading: m,
                      onWorktreeDeleted: () => {
                        c();
                      },
                      repoRoot: e.repoRoot,
                      worktrees: e.worktrees,
                    },
                    e.key,
                  ),
                ),
        })));
    }
    ((e[2] = p),
      (e[3] = t),
      (e[4] = h),
      (e[5] = m),
      (e[6] = d),
      (e[7] = a),
      (e[8] = i),
      (e[9] = c),
      (e[10] = n),
      (e[11] = u?.roots),
      (e[12] = f),
      (e[13] = r?.worktrees),
      (e[14] = s),
      (e[15] = g),
      (e[16] = _));
  } else ((g = e[15]), (_ = e[16]));
  return _ === Symbol.for(`react.early_return_sentinel`) ? g : _;
}
function me(e) {
  let t = (0, Z.c)(30),
    {
      action: n,
      repoRoot: r,
      worktrees: i,
      allConversations: a,
      visibleConversations: o,
      hostId: s,
      isConversationsLoading: c,
      onWorktreeDeleted: l,
    } = e,
    { data: u, isLoading: d } = ne(r, k(s), `worktree_restore_banner`),
    f = u?.root ?? r ?? i[0]?.dir ?? null,
    p;
  t[0] === f
    ? (p = t[1])
    : ((p = f
        ? (0, $.jsx)(`span`, {
            className: `truncate font-mono text-sm`,
            children: f,
          })
        : (0, $.jsx)(N, {
            id: `settings.worktrees.repository.unknown`,
            defaultMessage: `Unknown repository`,
            description: `Fallback label when worktree repository cannot be resolved`,
          })),
      (t[0] = f),
      (t[1] = p));
  let m = p,
    h = d && f == null,
    g;
  t[2] === m
    ? (g = t[3])
    : ((g = (0, $.jsx)(`div`, {
        className: `min-w-0 truncate text-sm text-token-text-primary`,
        children: m,
      })),
      (t[2] = m),
      (t[3] = g));
  let _;
  t[4] === h
    ? (_ = t[5])
    : ((_ = h
        ? (0, $.jsx)(`div`, {
            className: `text-xs text-token-text-secondary`,
            children: (0, $.jsx)(N, {
              id: `settings.worktrees.repository.loading`,
              defaultMessage: `Loading repository metadata…`,
              description: `Subtitle while repository metadata is loading`,
            }),
          })
        : null),
      (t[4] = h),
      (t[5] = _));
  let v;
  t[6] !== g || t[7] !== _
    ? ((v = (0, $.jsxs)(`div`, {
        className: `flex min-w-0 flex-col`,
        children: [g, _],
      })),
      (t[6] = g),
      (t[7] = _),
      (t[8] = v))
    : (v = t[8]);
  let y;
  t[9] !== n || t[10] !== v
    ? ((y = (0, $.jsx)(G.Header, { title: v, actions: n })),
      (t[9] = n),
      (t[10] = v),
      (t[11] = y))
    : (y = t[11]);
  let b;
  if (
    t[12] !== a ||
    t[13] !== s ||
    t[14] !== c ||
    t[15] !== l ||
    t[16] !== o ||
    t[17] !== i
  ) {
    let e;
    (t[19] !== a || t[20] !== s || t[21] !== c || t[22] !== l || t[23] !== o
      ? ((e = (e) =>
          (0, $.jsx)(
            he,
            {
              allConversations: J(e.dir, a),
              hostId: s,
              visibleConversations: J(e.dir, o),
              isConversationsLoading: c,
              onWorktreeDeleted: l,
              worktree: e,
            },
            e.dir,
          )),
        (t[19] = a),
        (t[20] = s),
        (t[21] = c),
        (t[22] = l),
        (t[23] = o),
        (t[24] = e))
      : (e = t[24]),
      (b = Y(i, o).map(e)),
      (t[12] = a),
      (t[13] = s),
      (t[14] = c),
      (t[15] = l),
      (t[16] = o),
      (t[17] = i),
      (t[18] = b));
  } else b = t[18];
  let x;
  t[25] === b
    ? (x = t[26])
    : ((x = (0, $.jsx)(G.Content, {
        children: (0, $.jsx)(K, { children: b }),
      })),
      (t[25] = b),
      (t[26] = x));
  let S;
  return (
    t[27] !== y || t[28] !== x
      ? ((S = (0, $.jsxs)(G, { children: [y, x] })),
        (t[27] = y),
        (t[28] = x),
        (t[29] = S))
      : (S = t[29]),
    S
  );
}
function he({
  worktree: e,
  allConversations: t,
  visibleConversations: r,
  hostId: a,
  isConversationsLoading: o,
  onWorktreeDeleted: c,
}) {
  let l = s(i),
    d = y(),
    f = M(),
    [p, m] = (0, Q.useState)(!1),
    g = k(a),
    _ = async () => {
      if (!p) {
        m(!0);
        try {
          (t.length > 0 &&
            (await Promise.all(
              t.map((e) =>
                ce(`archive-conversation`, {
                  conversationId: e.id,
                  cleanupWorktree: !1,
                  source: `worktree_delete`,
                }),
              ),
            )),
            await h(`worktree-delete`, {
              params: {
                hostId: g.id,
                worktree: e.dir,
                reason: `settings-delete-targeted`,
              },
            }),
            c());
        } catch (e) {
          (n.error(`Failed to delete worktree`, {
            safe: {},
            sensitive: { error: u(e) },
          }),
            l.get(D).danger(
              f.formatMessage({
                id: `settings.worktrees.delete.error`,
                defaultMessage: `Failed to delete worktree`,
                description: `Error message when deleting a worktree from settings`,
              }),
            ));
        } finally {
          m(!1);
        }
      }
    };
  return (0, $.jsxs)(`div`, {
    className: `flex flex-col gap-2 p-3`,
    children: [
      (0, $.jsxs)(`div`, {
        className: `flex items-start justify-between gap-3`,
        children: [
          (0, $.jsxs)(`div`, {
            className: `min-w-0`,
            children: [
              (0, $.jsx)(`div`, {
                className: `text-sm font-medium text-token-text-primary`,
                children: (0, $.jsx)(N, {
                  id: `settings.worktrees.row.title`,
                  defaultMessage: `Worktree`,
                  description: `Label for a worktree row`,
                }),
              }),
              (0, $.jsx)(`div`, {
                className: `mt-1 truncate font-mono text-xs text-token-text-secondary`,
                children: e.dir,
              }),
            ],
          }),
          (0, $.jsx)(w, {
            className: `shrink-0`,
            color: `danger`,
            loading: p,
            onClick: () => {
              _();
            },
            size: `toolbar`,
            children: (0, $.jsx)(N, {
              id: `settings.worktrees.row.delete`,
              defaultMessage: `Delete`,
              description: `Delete button label for a worktree row`,
            }),
          }),
        ],
      }),
      (0, $.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [
          (0, $.jsx)(`div`, {
            className: `text-xs text-token-text-secondary`,
            children: (0, $.jsx)(N, {
              id: `settings.worktrees.row.conversations`,
              defaultMessage: `Conversations`,
              description: `Label for conversations list within a worktree row`,
            }),
          }),
          o
            ? (0, $.jsxs)(`div`, {
                className: `flex items-center gap-2 text-xs text-token-text-secondary`,
                children: [
                  (0, $.jsx)(x, { className: `icon-xxs` }),
                  (0, $.jsx)(N, {
                    id: `settings.worktrees.row.conversations.loading`,
                    defaultMessage: `Loading conversations…`,
                    description: `Loading label for conversations list`,
                  }),
                ],
              })
            : r.length === 0
              ? (0, $.jsx)(`div`, {
                  className: `text-xs text-token-text-secondary`,
                  children: (0, $.jsx)(N, {
                    id: `settings.worktrees.row.conversations.empty`,
                    defaultMessage: `No conversations linked to this worktree.`,
                    description: `Empty state for conversations list in worktree row`,
                  }),
                })
              : (0, $.jsx)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: r.map((e) => {
                    let t = ie(e);
                    return (0, $.jsx)(
                      `button`,
                      {
                        className: `focus-visible:outline-token-focus flex w-full items-center justify-between gap-2 rounded-lg px-row-x py-row-y text-left text-sm text-token-text-primary hover:bg-token-list-hover-background hover:text-token-text-primary/80 focus-visible:outline-1 focus-visible:outline-offset-[-2px]`,
                        onClick: () => {
                          d(e.id);
                        },
                        type: `button`,
                        children: (0, $.jsx)(`span`, {
                          className: `truncate`,
                          children:
                            t ||
                            (0, $.jsx)(N, {
                              id: `settings.worktrees.conversation.untitled`,
                              defaultMessage: `Untitled conversation`,
                              description: `Fallback title for a conversation`,
                            }),
                        }),
                      },
                      e.id,
                    );
                  }),
                }),
        ],
      }),
    ],
  });
}
function ge(e) {
  let t = new Map();
  for (let n of e) {
    let e = T(n.gitDir),
      r = X(e ?? n.dir),
      i = t.get(r);
    if (i) {
      i.worktrees.push(n);
      continue;
    }
    t.set(r, { key: r, repoRoot: e, worktrees: [n] });
  }
  return Array.from(t.values());
}
function _e(e, t) {
  return t.length === 0 ? e : e.filter((e) => !t.some((t) => ye(t, e.dir)));
}
function J(e, t) {
  if (t.length === 0) return [];
  let n = X(e);
  return t.filter((e) => {
    let t = e.cwd;
    if (!t) return !1;
    let r = X(t);
    return r === n ? !0 : r.startsWith(`${n}/`);
  });
}
function Y(e, t) {
  if (t.length === 0) return e;
  let n = e.map((e, n) => ({
    worktree: e,
    index: n,
    conversationCount: J(e.dir, t).length,
  }));
  return (
    n.sort((e, t) => {
      let n = t.conversationCount - e.conversationCount;
      return n === 0 ? e.index - t.index : n;
    }),
    n.map((e) => e.worktree)
  );
}
function X(e) {
  return a(e).replace(/\/+$/, ``);
}
function ve(e) {
  return e.hostId ?? `local`;
}
function ye(e, t) {
  let n = X(e),
    r = X(t);
  return n === r || n.startsWith(`${r}/`);
}
var Z, Q, $;
e(() => {
  ((Z = m()),
    d(),
    c(),
    (Q = t(f(), 1)),
    A(),
    L(),
    ae(),
    se(),
    S(),
    C(),
    O(),
    fe(),
    ee(),
    b(),
    z(),
    re(),
    r(),
    I(),
    ue(),
    le(),
    R(),
    H(),
    W(),
    te(),
    l(),
    j(),
    _(),
    p(),
    E(),
    ($ = g()));
})();
export { pe as WorktreesSettingsPage };
//# sourceMappingURL=worktrees-settings-page-DXtwfjjn.js.map
