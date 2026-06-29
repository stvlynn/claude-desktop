import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Go as i,
  Ko as a,
  Vo as o,
  _c as s,
  gc as c,
  lc as l,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Xo as u,
  Zo as d,
  hs as f,
  lc as p,
  ms as m,
  uc as h,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Ca as g,
  Da as _,
  Dm as v,
  Do as y,
  Em as b,
  Eo as x,
  If as S,
  Jd as C,
  Lf as w,
  Nn as T,
  Om as E,
  Pn as D,
  Ta as ee,
  Tm as O,
  To as te,
  _a as ne,
  _f as re,
  ba as k,
  do as ie,
  ef as ae,
  fo as oe,
  gf as se,
  gp as ce,
  is as A,
  mp as le,
  ns as j,
  va as M,
  wo as ue,
  xp as N,
  ya as de,
  yp as P,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Bo as fe,
  Fy as F,
  Io as pe,
  Iy as I,
  Vy as me,
  Wo as L,
  zo as he,
  zy as R,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Bo as z,
  Go as ge,
  Ko as _e,
  Lo as ve,
  Ro as ye,
  Uo as be,
  Vo as xe,
  Wo as Se,
  Xd as Ce,
  Zd as we,
  zo as B,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  A as V,
  j as Te,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~appgen-publication-terms-ro~g0k1g2bt-B6jrUW_u.js";
import {
  a as Ee,
  c as De,
  d as Oe,
  f as H,
  h as ke,
  i as U,
  l as Ae,
  m as je,
  o as Me,
  p as Ne,
  r as Pe,
  s as Fe,
  t as Ie,
} from "./use-workspace-users-CmiCK9G8.js";
import { n as Le, t as Re } from "./share-invite-autocomplete-Bqz_EmsG.js";
function ze(e) {
  let t = (0, Z.c)(104),
    { onClose: n, projectId: o } = e,
    s = me(),
    c = a(r),
    { email: l } = w(),
    { data: u } = ae(),
    d = u?.structure === `workspace`,
    { data: f, isError: p, isLoading: m } = i(he, o),
    h = i(fe, o),
    [g, y] = (0, Q.useState)(``),
    b;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = []), (t[0] = b))
    : (b = t[0]);
  let [S, C] = (0, Q.useState)(b),
    T;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = []), (t[1] = T))
    : (T = t[1]);
  let [E, D] = (0, Q.useState)(T),
    [ee, O] = (0, Q.useState)(null),
    te;
  t[2] === g ? (te = t[3]) : ((te = g.trim()), (t[2] = g), (t[3] = te));
  let ie = te,
    oe = re(ie, 200),
    { data: se } = Pe(d ? g : ``),
    { data: A } = i(pe, d ? oe : null),
    le = oe === ie,
    { data: j } = i(pe, d ? `` : null),
    M,
    N,
    P,
    F,
    I,
    L,
    z,
    _e;
  if (
    t[4] !== A ||
    t[5] !== j ||
    t[6] !== u?.account_user_id ||
    t[7] !== s ||
    t[8] !== f?.access_policy ||
    t[9] !== E ||
    t[10] !== S ||
    t[11] !== se
  ) {
    ((F = tt(A)),
      (I = tt(nt(A, j))),
      (M = f?.access_policy),
      (P = M?.allowed_users ?? []),
      (N = M?.allowed_groups ?? []));
    let e = new Set(P.map(Ge));
    L = De({
      currentAccountUserId: u?.account_user_id,
      existingAccountUserIds: e,
      selectedAccountUserIds: S.map(We),
      workspaceUsers: se,
    });
    let n = new Set(N.map(Ue));
    z = new Set(I.map(He));
    let r;
    t[20] !== n || t[21] !== E
      ? ((r = (e) => !n.has(e.id) && !E.some((t) => t.id === e.id)),
        (t[20] = n),
        (t[21] = E),
        (t[22] = r))
      : (r = t[22]);
    let i = F.filter(r),
      a;
    (t[23] === s
      ? (a = t[24])
      : ((a = (e) => it(e, s)), (t[23] = s), (t[24] = a)),
      (_e = [...i.map(a), ...(L?.map(at) ?? [])]),
      (t[4] = A),
      (t[5] = j),
      (t[6] = u?.account_user_id),
      (t[7] = s),
      (t[8] = f?.access_policy),
      (t[9] = E),
      (t[10] = S),
      (t[11] = se),
      (t[12] = M),
      (t[13] = N),
      (t[14] = P),
      (t[15] = F),
      (t[16] = I),
      (t[17] = L),
      (t[18] = z),
      (t[19] = _e));
  } else
    ((M = t[12]),
      (N = t[13]),
      (P = t[14]),
      (F = t[15]),
      (I = t[16]),
      (L = t[17]),
      (z = t[18]),
      (_e = t[19]));
  let ve = _e,
    ye;
  if (t[25] !== s || t[26] !== E || t[27] !== S) {
    let e;
    (t[29] === s
      ? (e = t[30])
      : ((e = (e) => it(e, s)), (t[29] = s), (t[30] = e)),
      (ye = [...E.map(e), ...S.map(at)]),
      (t[25] = s),
      (t[26] = E),
      (t[27] = S),
      (t[28] = ye));
  } else ye = t[28];
  let xe = ye,
    Ce;
  t[31] === f
    ? (Ce = t[32])
    : ((Ce =
        f == null
          ? (0, $.jsx)(R, {
              id: `appgenShareDialog.title`,
              defaultMessage: `Share`,
              description: `Title for the site sharing dialog`,
            })
          : (0, $.jsx)(R, {
              id: `appgenShareDialog.projectTitle`,
              defaultMessage: `Share {siteTitle}`,
              description: `Title for the site sharing dialog including the site title`,
              values: { siteTitle: f.title },
            })),
      (t[31] = f),
      (t[32] = Ce));
  let we = Ce,
    B = ee ?? M?.access_mode ?? null,
    V = d && B !== `public`,
    Te = M != null && B !== M.access_mode,
    Ee = V && xe.length > 0,
    Oe;
  t[33] !== s || t[34] !== c
    ? ((Oe = function () {
        c.get(ce).danger(
          s.formatMessage({
            id: `appgenShareDialog.save.error`,
            defaultMessage: `Unable to save sharing settings`,
            description: `Error toast shown when saving site sharing settings fails`,
          }),
        );
      }),
      (t[33] = s),
      (t[34] = c),
      (t[35] = Oe))
    : (Oe = t[35]);
  let H = Oe,
    ke;
  t[36] !== M ||
  t[37] !== N ||
  t[38] !== P ||
  t[39] !== F ||
  t[40] !== V ||
  t[41] !== B ||
  t[42] !== I ||
  t[43] !== n ||
  t[44] !== E ||
  t[45] !== S ||
  t[46] !== H ||
  t[47] !== h
    ? ((ke = function () {
        if (M == null || B == null) {
          n();
          return;
        }
        let e = be({
          accessGroups: F,
          accessMode: B,
          allowedUserEmails: [...P, ...S].map(Ve),
          canManageInvitees: V,
          existingGroups: N,
          knownAccessGroups: I,
          selectedGroups: E,
        });
        h.mutateAsync(e).then(
          () => {
            (C([]), D([]), O(null));
          },
          () => {
            H();
          },
        );
      }),
      (t[36] = M),
      (t[37] = N),
      (t[38] = P),
      (t[39] = F),
      (t[40] = V),
      (t[41] = B),
      (t[42] = I),
      (t[43] = n),
      (t[44] = E),
      (t[45] = S),
      (t[46] = H),
      (t[47] = h),
      (t[48] = ke))
    : (ke = t[48]);
  let U = ke,
    Ae;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = function () {
        (C([]), D([]), O(null));
      }),
      (t[49] = Ae))
    : (Ae = t[49]);
  let je = Ae,
    Me;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Me = function (e) {
        (O(e), e === `public` && (y(``), C([]), D([])));
      }),
      (t[50] = Me))
    : (Me = t[50]);
  let Ne = Me,
    Fe;
  t[51] !== H || t[52] !== h
    ? ((Fe = function (e) {
        return h.mutateAsync(e).then(Be, (e) => {
          throw (H(), e);
        });
      }),
      (t[51] = H),
      (t[52] = h),
      (t[53] = Fe))
    : (Fe = t[53]);
  let Ie = Fe,
    Le;
  t[54] !== M || t[55] !== F || t[56] !== I || t[57] !== Ie
    ? ((Le = function (e) {
        if (M == null) return Promise.resolve();
        switch (e.kind) {
          case `user`:
            return Ie(ge(M, e.user.account_user_id));
          case `group`:
            return Ie(
              Se({
                accessGroups: F,
                accessPolicy: M,
                group: e.group,
                knownAccessGroups: I,
              }),
            );
        }
      }),
      (t[54] = M),
      (t[55] = F),
      (t[56] = I),
      (t[57] = Ie),
      (t[58] = Le))
    : (Le = t[58]);
  let ze = Le,
    Ye;
  t[59] !== f || t[60] !== ze || t[61] !== c
    ? ((Ye = function (e) {
        f != null &&
          _(c, Ke, {
            label: e.kind === `group` ? e.group.name : Xe(e.user),
            onConfirm: () => ze(e),
            siteTitle: f.title,
          });
      }),
      (t[59] = f),
      (t[60] = ze),
      (t[61] = c),
      (t[62] = Ye))
    : (Ye = t[62]);
  let W = Ye,
    G;
  t[63] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((G = { "aria-describedby": void 0 }), (t[63] = G))
    : (G = t[63]);
  let K;
  t[64] === n
    ? (K = t[65])
    : ((K = (e) => {
        e || n();
      }),
      (t[64] = n),
      (t[65] = K));
  let q;
  t[66] === we
    ? (q = t[67])
    : ((q = (0, $.jsxs)(`div`, {
        className: `flex w-full flex-col`,
        children: [
          (0, $.jsx)(x, { className: `sr-only`, children: we }),
          (0, $.jsx)(de, { title: we, titleClassName: `truncate pr-8` }),
        ],
      })),
      (t[66] = we),
      (t[67] = q));
  let J;
  t[68] !== A ||
  t[69] !== M ||
  t[70] !== N ||
  t[71] !== P ||
  t[72] !== j ||
  t[73] !== V ||
  t[74] !== u?.account_user_id ||
  t[75] !== l ||
  t[76] !== B ||
  t[77] !== s ||
  t[78] !== ve ||
  t[79] !== le ||
  t[80] !== p ||
  t[81] !== m ||
  t[82] !== d ||
  t[83] !== L ||
  t[84] !== W ||
  t[85] !== f ||
  t[86] !== g ||
  t[87] !== z ||
  t[88] !== xe
    ? ((J = m
        ? (0, $.jsx)(k, {
            className: `py-12`,
            children: (0, $.jsx)(`div`, {
              className: `flex justify-center`,
              children: (0, $.jsx)(v, {}),
            }),
          })
        : p || f == null || M == null
          ? (0, $.jsx)(k, {
              className: `py-10`,
              children: (0, $.jsx)(`div`, {
                className: `text-center text-sm font-medium text-token-text-secondary`,
                children: (0, $.jsx)(R, {
                  id: `appgenShareDialog.error`,
                  defaultMessage: `Unable to load sharing settings`,
                  description: `Error state title in the site share dialog`,
                }),
              }),
            })
          : (0, $.jsxs)($.Fragment, {
              children: [
                (0, $.jsx)(k, {
                  children: (0, $.jsx)(qe, {
                    liveUrl: f.current_live_url,
                    title: f.title,
                  }),
                }),
                V
                  ? (0, $.jsx)(k, {
                      children: (0, $.jsx)(Re, {
                        ariaLabel: s.formatMessage({
                          id: `appgenShareDialog.workspaceUserSearch`,
                          defaultMessage: `Add people or groups`,
                          description: `Accessible label for searching workspace users and groups in the site share dialog`,
                        }),
                        emptyMessage: (0, $.jsx)(R, {
                          id: `appgenShareDialog.noWorkspaceUsers`,
                          defaultMessage: `No matching people or groups`,
                          description: `Empty state shown when no workspace users or groups match the site share dialog autocomplete query`,
                        }),
                        options:
                          !le || A == null || j == null || L == null
                            ? void 0
                            : ve,
                        placeholder: s.formatMessage({
                          id: `appgenShareDialog.workspaceUserPlaceholder`,
                          defaultMessage: `Add people or groups`,
                          description: `Placeholder for the site share dialog workspace user and group autocomplete`,
                        }),
                        query: g,
                        selectedOptions: xe,
                        onQueryChange: y,
                        onRemoveOption: (e) => {
                          let { target: t } = e;
                          bb173: switch (t.kind) {
                            case `group`:
                              D((e) => e.filter((e) => e.id !== t.group.id));
                              break bb173;
                            case `user`:
                              C((e) =>
                                e.filter(
                                  (e) =>
                                    e.account_user_id !==
                                    t.user.account_user_id,
                                ),
                              );
                          }
                        },
                        onSelectOption: (e) => {
                          let { target: t } = e;
                          bb187: switch (t.kind) {
                            case `group`:
                              D((e) => [...e, t.group]);
                              break bb187;
                            case `user`:
                              C((e) => [...e, t.user]);
                          }
                        },
                        getRemoveLabel: (e) =>
                          s.formatMessage(
                            {
                              id: `appgenShareDialog.removeSelectedUser`,
                              defaultMessage: `Remove {name}`,
                              description: `Accessible label for removing a selected workspace user from the site share dialog`,
                            },
                            { name: e.chipLabel ?? e.label },
                          ),
                      }),
                    })
                  : null,
                (0, $.jsx)(Je, {
                  accessPolicy: M,
                  activeAccessGroups: N,
                  activeAccessUsers: P,
                  availableAccessModes: f.available_access_modes,
                  canManageInvitees: V,
                  isWorkspaceAccount: d,
                  removableAccessGroupIds: z,
                  selectedAccessMode: B,
                  ownerEmail: l,
                  ownerId: u?.account_user_id,
                  onAccessModeChange: Ne,
                  onRemoveAccessUser: (e) => {
                    W({ kind: `user`, user: e });
                  },
                  onRemoveAccessGroup: (e) => {
                    W({ kind: `group`, group: e });
                  },
                }),
              ],
            })),
      (t[68] = A),
      (t[69] = M),
      (t[70] = N),
      (t[71] = P),
      (t[72] = j),
      (t[73] = V),
      (t[74] = u?.account_user_id),
      (t[75] = l),
      (t[76] = B),
      (t[77] = s),
      (t[78] = ve),
      (t[79] = le),
      (t[80] = p),
      (t[81] = m),
      (t[82] = d),
      (t[83] = L),
      (t[84] = W),
      (t[85] = f),
      (t[86] = g),
      (t[87] = z),
      (t[88] = xe),
      (t[89] = J))
    : (J = t[89]);
  let Ze = m || p || f == null || M == null ? void 0 : f.current_live_url,
    Y;
  t[90] !== B ||
  t[91] !== U ||
  t[92] !== Te ||
  t[93] !== Ee ||
  t[94] !== Ze ||
  t[95] !== h.isPending
    ? ((Y = (0, $.jsx)(Qe, {
        accessMode: B,
        hasPendingAccessChange: Te,
        hasPendingInvitees: Ee,
        isSaving: h.isPending,
        liveUrl: Ze,
        onCancelChanges: je,
        onDone: U,
      })),
      (t[90] = B),
      (t[91] = U),
      (t[92] = Te),
      (t[93] = Ee),
      (t[94] = Ze),
      (t[95] = h.isPending),
      (t[96] = Y))
    : (Y = t[96]);
  let X;
  t[97] !== q || t[98] !== J || t[99] !== Y
    ? ((X = (0, $.jsxs)(ne, { className: `px-4 py-3`, children: [q, J, Y] })),
      (t[97] = q),
      (t[98] = J),
      (t[99] = Y),
      (t[100] = X))
    : (X = t[100]);
  let $e;
  return (
    t[101] !== K || t[102] !== X
      ? (($e = (0, $.jsx)(ue, {
          open: !0,
          size: `compact`,
          contentOverflow: `visible`,
          contentProps: G,
          onOpenChange: K,
          children: X,
        })),
        (t[101] = K),
        (t[102] = X),
        (t[103] = $e))
      : ($e = t[103]),
    $e
  );
}
function Be() {}
function Ve(e) {
  return e.email;
}
function He(e) {
  return e.id;
}
function Ue(e) {
  return e.id;
}
function We(e) {
  return e.account_user_id;
}
function Ge(e) {
  return e.account_user_id;
}
function Ke(e) {
  let t = (0, Z.c)(36),
    { label: n, onClose: r, onConfirm: i, siteTitle: a } = e,
    [o, s] = (0, Q.useState)(!1),
    c = !o,
    l;
  t[0] !== o || t[1] !== r
    ? ((l = (e) => {
        !e && !o && r();
      }),
      (t[0] = o),
      (t[1] = r),
      (t[2] = l))
    : (l = t[2]);
  let u;
  t[3] !== o || t[4] !== r || t[5] !== i
    ? ((u = (e) => {
        (e.preventDefault(),
          !o &&
            (s(!0),
            i().then(r, () => {
              s(!1);
            })));
      }),
      (t[3] = o),
      (t[4] = r),
      (t[5] = i),
      (t[6] = u))
    : (u = t[6]);
  let d;
  t[7] === n
    ? (d = t[8])
    : ((d = (0, $.jsx)(x, {
        className: `contents`,
        children: (0, $.jsx)(R, {
          id: `appgenShareDialog.removeDialog.title`,
          defaultMessage: `Remove {label}?`,
          description: `Title for dialog confirming removal of a person's or group's site access`,
          values: { label: n },
        }),
      })),
      (t[7] = n),
      (t[8] = d));
  let f;
  t[9] === n
    ? (f = t[10])
    : ((f = (0, $.jsx)(
        `span`,
        { className: `font-medium text-token-text-primary`, children: n },
        `remove-access-label`,
      )),
      (t[9] = n),
      (t[10] = f));
  let p;
  t[11] !== a || t[12] !== f
    ? ((p = (0, $.jsx)(te, {
        className: `contents`,
        children: (0, $.jsx)(R, {
          id: `appgenShareDialog.removeDialog.description`,
          defaultMessage: `{label} will no longer be able to visit {siteTitle}`,
          description: `Warning shown when removing a person or group from a site's access list`,
          values: { label: f, siteTitle: a },
        }),
      })),
      (t[11] = a),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] !== d || t[15] !== p
    ? ((m = (0, $.jsx)(de, {
        title: d,
        titleClassName: `truncate pr-8`,
        subtitle: p,
      })),
      (t[14] = d),
      (t[15] = p),
      (t[16] = m))
    : (m = t[16]);
  let h;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, $.jsx)(R, {
        id: `appgenShareDialog.removeDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for access removal confirmation dialog`,
      })),
      (t[17] = h))
    : (h = t[17]);
  let g;
  t[18] !== o || t[19] !== r
    ? ((g = (0, $.jsx)(O, {
        color: `secondary`,
        disabled: o,
        onClick: r,
        children: h,
      })),
      (t[18] = o),
      (t[19] = r),
      (t[20] = g))
    : (g = t[20]);
  let _;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(R, {
        id: `appgenShareDialog.removeDialog.confirm`,
        defaultMessage: `Remove`,
        description: `Confirm button label for removing site access`,
      })),
      (t[21] = _))
    : (_ = t[21]);
  let v;
  t[22] === o
    ? (v = t[23])
    : ((v = (0, $.jsx)(O, {
        color: `danger`,
        loading: o,
        type: `submit`,
        children: _,
      })),
      (t[22] = o),
      (t[23] = v));
  let y;
  t[24] !== v || t[25] !== g
    ? ((y = (0, $.jsx)(k, { children: (0, $.jsxs)(M, { children: [g, v] }) })),
      (t[24] = v),
      (t[25] = g),
      (t[26] = y))
    : (y = t[26]);
  let b;
  t[27] !== y || t[28] !== u || t[29] !== m
    ? ((b = (0, $.jsxs)(ne, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: u,
        children: [m, y],
      })),
      (t[27] = y),
      (t[28] = u),
      (t[29] = m),
      (t[30] = b))
    : (b = t[30]);
  let S;
  return (
    t[31] !== o || t[32] !== c || t[33] !== b || t[34] !== l
      ? ((S = (0, $.jsx)(ue, {
          open: !0,
          shouldIgnoreClickOutside: o,
          showDialogClose: c,
          size: `compact`,
          onOpenChange: l,
          children: b,
        })),
        (t[31] = o),
        (t[32] = c),
        (t[33] = b),
        (t[34] = l),
        (t[35] = S))
      : (S = t[35]),
    S
  );
}
function qe(e) {
  let t = (0, Z.c)(12),
    { liveUrl: n, title: r } = e,
    i;
  t[0] === n ? (i = t[1]) : ((i = u(n)), (t[0] = n), (t[1] = i));
  let a = i,
    o;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`span`, {
        className: `flex size-10 shrink-0 items-center justify-center`,
        children: (0, $.jsx)(V, { className: `icon-md` }),
      })),
      (t[2] = o))
    : (o = t[2]);
  let s;
  t[3] === r
    ? (s = t[4])
    : ((s = (0, $.jsx)(`div`, {
        className: `truncate text-sm font-medium text-token-foreground`,
        children: r,
      })),
      (t[3] = r),
      (t[4] = s));
  let c;
  t[5] === a
    ? (c = t[6])
    : ((c =
        a ??
        (0, $.jsx)(R, {
          id: `appgenShareDialog.site.notPublished`,
          defaultMessage: `Not published yet`,
          description: `Label in the share dialog for a site without a published URL`,
        })),
      (t[5] = a),
      (t[6] = c));
  let l;
  t[7] === c
    ? (l = t[8])
    : ((l = (0, $.jsx)(`div`, {
        className: `truncate text-xs text-token-text-tertiary`,
        children: c,
      })),
      (t[7] = c),
      (t[8] = l));
  let d;
  return (
    t[9] !== s || t[10] !== l
      ? ((d = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-3 rounded-lg bg-token-bg-secondary p-3`,
          children: [
            o,
            (0, $.jsxs)(`div`, {
              className: `flex min-w-0 flex-col gap-0.5`,
              children: [s, l],
            }),
          ],
        })),
        (t[9] = s),
        (t[10] = l),
        (t[11] = d))
      : (d = t[11]),
    d
  );
}
function Je(e) {
  let t = (0, Z.c)(51),
    {
      activeAccessGroups: n,
      activeAccessUsers: r,
      accessPolicy: i,
      availableAccessModes: a,
      canManageInvitees: o,
      isWorkspaceAccount: s,
      removableAccessGroupIds: c,
      selectedAccessMode: l,
      ownerEmail: u,
      ownerId: d,
      onAccessModeChange: f,
      onRemoveAccessGroup: p,
      onRemoveAccessUser: m,
    } = e,
    h = me(),
    g,
    _,
    v,
    y,
    b,
    x,
    S;
  if (
    t[0] !== i.access_mode ||
    t[1] !== i.revision ||
    t[2] !== r ||
    t[3] !== a ||
    t[4] !== o ||
    t[5] !== s ||
    t[6] !== f ||
    t[7] !== m ||
    t[8] !== u ||
    t[9] !== d ||
    t[10] !== l
  ) {
    let e = Ye({
        activeAccessUsers: r,
        currentAccountUserId: d,
        currentUserEmail: u,
      }),
      n = r.filter((t) => t.account_user_id !== e?.account_user_id);
    ((g = k),
      (b = `gap-3`),
      t[18] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((x = (0, $.jsx)(`div`, {
            className: `text-sm font-medium text-token-foreground`,
            children: (0, $.jsx)(R, {
              id: `appgenShareDialog.access.title`,
              defaultMessage: `Who has access`,
              description: `Heading for access information in the site share dialog`,
            }),
          })),
          (t[18] = x))
        : (x = t[18]));
    let c = `${i.revision}:${i.access_mode}`,
      p = l ?? i.access_mode;
    (t[19] !== i.access_mode ||
    t[20] !== a ||
    t[21] !== s ||
    t[22] !== f ||
    t[23] !== c ||
    t[24] !== p
      ? ((S = (0, $.jsx)(
          Ze,
          {
            availableAccessModes: a,
            currentAccessMode: i.access_mode,
            isWorkspaceAccount: s,
            selectedAccessMode: p,
            onAccessModeChange: f,
          },
          c,
        )),
        (t[19] = i.access_mode),
        (t[20] = a),
        (t[21] = s),
        (t[22] = f),
        (t[23] = c),
        (t[24] = p),
        (t[25] = S))
      : (S = t[25]),
      (_ = `vertical-scroll-fade-mask flex max-h-64 flex-col gap-3 overflow-y-auto`),
      (v =
        e == null
          ? null
          : (0, $.jsx)(U, {
              avatarLabel: W(e),
              label: Xe(e),
              secondaryLabel: G(e),
              trailingContent: (0, $.jsx)(`span`, {
                className: `text-sm text-token-description-foreground`,
                children: (0, $.jsx)(R, {
                  id: `appgenShareDialog.permission.owner`,
                  defaultMessage: `Owner`,
                  description: `Label for the owner in the site share dialog`,
                }),
              }),
            })));
    let h;
    (t[26] !== o || t[27] !== m
      ? ((h = (e) =>
          (0, $.jsx)(
            U,
            {
              avatarLabel: W(e),
              label: Xe(e),
              secondaryLabel: G(e),
              trailingContent: (0, $.jsx)(K, {
                onRemoveAccess: o
                  ? () => {
                      m(e);
                    }
                  : void 0,
              }),
            },
            e.account_user_id,
          )),
        (t[26] = o),
        (t[27] = m),
        (t[28] = h))
      : (h = t[28]),
      (y = n.map(h)),
      (t[0] = i.access_mode),
      (t[1] = i.revision),
      (t[2] = r),
      (t[3] = a),
      (t[4] = o),
      (t[5] = s),
      (t[6] = f),
      (t[7] = m),
      (t[8] = u),
      (t[9] = d),
      (t[10] = l),
      (t[11] = g),
      (t[12] = _),
      (t[13] = v),
      (t[14] = y),
      (t[15] = b),
      (t[16] = x),
      (t[17] = S));
  } else
    ((g = t[11]),
      (_ = t[12]),
      (v = t[13]),
      (y = t[14]),
      (b = t[15]),
      (x = t[16]),
      (S = t[17]));
  let C;
  if (t[29] !== n || t[30] !== o || t[31] !== h || t[32] !== p || t[33] !== c) {
    let e;
    (t[35] !== o || t[36] !== h || t[37] !== p || t[38] !== c
      ? ((e = (e) =>
          (0, $.jsx)(
            U,
            {
              label: e.name,
              secondaryLabel: h.formatMessage(
                {
                  id: `appgenShareDialog.access.groupSize`,
                  defaultMessage: `{count, plural, one {# member} other {# members}}`,
                  description: `Member count shown for a group in the site share dialog`,
                },
                { count: e.size },
              ),
              trailingContent: (0, $.jsx)(K, {
                onRemoveAccess:
                  o && c.has(e.id)
                    ? () => {
                        p(e);
                      }
                    : void 0,
              }),
            },
            e.id,
          )),
        (t[35] = o),
        (t[36] = h),
        (t[37] = p),
        (t[38] = c),
        (t[39] = e))
      : (e = t[39]),
      (C = n.map(e)),
      (t[29] = n),
      (t[30] = o),
      (t[31] = h),
      (t[32] = p),
      (t[33] = c),
      (t[34] = C));
  } else C = t[34];
  let w;
  t[40] !== _ || t[41] !== v || t[42] !== y || t[43] !== C
    ? ((w = (0, $.jsxs)(`div`, { className: _, children: [v, y, C] })),
      (t[40] = _),
      (t[41] = v),
      (t[42] = y),
      (t[43] = C),
      (t[44] = w))
    : (w = t[44]);
  let T;
  return (
    t[45] !== g || t[46] !== b || t[47] !== x || t[48] !== S || t[49] !== w
      ? ((T = (0, $.jsxs)(g, { className: b, children: [x, S, w] })),
        (t[45] = g),
        (t[46] = b),
        (t[47] = x),
        (t[48] = S),
        (t[49] = w),
        (t[50] = T))
      : (T = t[50]),
    T
  );
}
function Ye({
  activeAccessUsers: e,
  currentAccountUserId: t,
  currentUserEmail: n,
}) {
  let r = n?.trim().toLowerCase();
  if (r != null && r.length > 0) {
    let t = e.find((e) => e.email?.trim().toLowerCase() === r);
    if (t != null) return t;
  }
  return t == null ? null : (e.find((e) => e.account_user_id === t) ?? null);
}
function Xe(e) {
  return e.name ?? e.email ?? e.account_user_id;
}
function W(e) {
  return e.name ?? e.email ?? e.account_user_id.replace(/[-_]/g, ` `);
}
function G(e) {
  return e.name == null ? null : e.email;
}
function K(e) {
  let t = (0, Z.c)(4),
    { onRemoveAccess: n } = e,
    r,
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = [{ value: `visit` }]),
      (i = (0, $.jsx)(R, {
        id: `appgenShareDialog.permission.remove`,
        defaultMessage: `Remove access`,
        description: `Menu item for removing a person's site access`,
      })),
      (t[0] = r),
      (t[1] = i))
    : ((r = t[0]), (i = t[1]));
  let a;
  return (
    t[2] === n
      ? (a = t[3])
      : ((a = (0, $.jsx)(Me, {
          options: r,
          removeLabel: i,
          value: `visit`,
          renderLabel: q,
          onRemoveAccess: n,
        })),
        (t[2] = n),
        (t[3] = a)),
    a
  );
}
function q() {
  return (0, $.jsx)(J, {});
}
function J() {
  let e = (0, Z.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(R, {
          id: `appgenShareDialog.permission.visit`,
          defaultMessage: `Can visit`,
          description: `Visitor permission label in the site share dialog`,
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Ze(e) {
  let t = (0, Z.c)(13),
    {
      availableAccessModes: n,
      currentAccessMode: r,
      isWorkspaceAccount: i,
      selectedAccessMode: a,
      onAccessModeChange: o,
    } = e,
    s,
    c;
  if (t[0] !== n || t[1] !== r || t[2] !== i) {
    let e = xe({
      availableAccessModes: n,
      currentAccessMode: r,
      isWorkspaceAccount: i,
    });
    ((s = je),
      (c = e.map(Y)),
      (t[0] = n),
      (t[1] = r),
      (t[2] = i),
      (t[3] = s),
      (t[4] = c));
  } else ((s = t[3]), (c = t[4]));
  let l;
  t[5] === i
    ? (l = t[6])
    : ((l = (e) =>
        e === `custom` && !i
          ? (0, $.jsx)(R, {
              id: `appgenAccess.state.personalOwnerOnly`,
              defaultMessage: `Just me`,
              description: `Label for a personal site whose access is limited to its owner`,
            })
          : (0, $.jsx)(R, { ...ot[e] })),
      (t[5] = i),
      (t[6] = l));
  let u;
  return (
    t[7] !== s || t[8] !== o || t[9] !== a || t[10] !== c || t[11] !== l
      ? ((u = (0, $.jsx)(s, {
          options: c,
          value: a,
          renderLabel: l,
          onChange: o,
        })),
        (t[7] = s),
        (t[8] = o),
        (t[9] = a),
        (t[10] = c),
        (t[11] = l),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
function Y(e) {
  let { disabled: t, value: n } = e;
  return { disabled: t, Icon: X(n), value: n };
}
function X(e) {
  switch (e) {
    case `admins_only`:
    case `custom`:
      return ve;
    case `workspace_all`:
      return B;
    case `public`:
      return ie;
  }
}
function Qe(e) {
  let t = (0, Z.c)(35),
    {
      accessMode: n,
      hasPendingAccessChange: i,
      hasPendingInvitees: o,
      isSaving: s,
      liveUrl: c,
      onCancelChanges: l,
      onDone: u,
    } = e,
    d = me(),
    f = a(r),
    h;
  t[0] !== s || t[1] !== c
    ? ((h = et({ action: `copyLink`, isSaving: s, liveUrl: c })),
      (t[0] = s),
      (t[1] = c),
      (t[2] = h))
    : (h = t[2]);
  let g = h,
    _;
  t[3] !== s || t[4] !== c
    ? ((_ = et({ action: `visit`, isSaving: s, liveUrl: c })),
      (t[3] = s),
      (t[4] = c),
      (t[5] = _))
    : (_ = t[5]);
  let v = _,
    y;
  t[6] === u ? (y = t[7]) : ((y = { onClick: u }), (t[6] = u), (t[7] = y));
  let b;
  t[8] === n
    ? (b = t[9])
    : ((b =
        n === `public`
          ? (0, $.jsx)(R, {
              id: `appgenShareDialog.publish`,
              defaultMessage: `Publish`,
              description: `Button label for publishing a site to the public internet`,
            })
          : void 0),
      (t[8] = n),
      (t[9] = b));
  let x;
  t[10] !== u || t[11] !== b
    ? ((x = { label: b, onClick: u }), (t[10] = u), (t[11] = b), (t[12] = x))
    : (x = t[12]);
  let S;
  t[13] !== y || t[14] !== x
    ? ((S = { invite: y, share: x }), (t[13] = y), (t[14] = x), (t[15] = S))
    : (S = t[15]);
  let C;
  t[16] === l ? (C = t[17]) : ((C = { onClick: l }), (t[16] = l), (t[17] = C));
  let w;
  t[18] !== g ||
  t[19] !== d ||
  t[20] !== s ||
  t[21] !== c ||
  t[22] !== f ||
  t[23] !== v
    ? ((w =
        c === void 0
          ? null
          : (0, $.jsxs)(`div`, {
              className: `flex items-center gap-2`,
              children: [
                (0, $.jsx)(P, {
                  tooltipContent: v,
                  children: (0, $.jsx)(`span`, {
                    className: `inline-flex`,
                    children: (0, $.jsxs)(O, {
                      color: `outline`,
                      disabled: s || c == null,
                      size: `toolbar`,
                      onClick: (e) => {
                        c != null &&
                          A({
                            event: e,
                            href: c,
                            initiator: `mcp_app_resource`,
                          });
                      },
                      children: [
                        c == null
                          ? null
                          : (0, $.jsx)(T, {
                              className: `icon-xs`,
                              ExternalIcon: Ce,
                              href: c,
                            }),
                        (0, $.jsx)(R, {
                          id: `appgenShareDialog.visit`,
                          defaultMessage: `Visit`,
                          description: `Button label for opening a live site externally`,
                        }),
                      ],
                    }),
                  }),
                }),
                (0, $.jsx)(P, {
                  tooltipContent: g,
                  children: (0, $.jsx)(`span`, {
                    className: `inline-flex`,
                    children: (0, $.jsxs)(O, {
                      color: `outline`,
                      disabled: s || c == null,
                      size: `toolbar`,
                      onClick: () => {
                        c != null &&
                          p(c).then(() => {
                            f.get(ce).info(
                              d.formatMessage({
                                id: `appgenShareDialog.copySuccess`,
                                defaultMessage: `Copied to clipboard`,
                                description: `Toast shown after copying a live site URL`,
                              }),
                            );
                          }, $e);
                      },
                      children: [
                        (0, $.jsx)(m, { className: `icon-xs` }),
                        (0, $.jsx)(R, {
                          id: `appgenShareDialog.copyLink`,
                          defaultMessage: `Copy link`,
                          description: `Button label for copying a live site URL`,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })),
      (t[18] = g),
      (t[19] = d),
      (t[20] = s),
      (t[21] = c),
      (t[22] = f),
      (t[23] = v),
      (t[24] = w))
    : (w = t[24]);
  let E;
  t[25] === d
    ? (E = t[26])
    : ((E = d.formatMessage({
        id: `appgenShareDialog.saving`,
        defaultMessage: `Saving`,
        description: `Accessible label for the site share dialog save button while saving`,
      })),
      (t[25] = d),
      (t[26] = E));
  let D;
  return (
    t[27] !== i ||
    t[28] !== o ||
    t[29] !== s ||
    t[30] !== S ||
    t[31] !== C ||
    t[32] !== w ||
    t[33] !== E
      ? ((D = (0, $.jsx)(k, {
          className: `pt-4`,
          children: (0, $.jsx)(`div`, {
            className: `flex w-full items-center justify-end gap-3`,
            children: (0, $.jsx)(H, {
              actions: S,
              cancelAction: C,
              disabled: s,
              hasPendingAccessChange: i,
              hasPendingInvitees: o,
              idleActions: w,
              isSaving: s,
              savingAriaLabel: E,
              size: `toolbar`,
              spinnerClassName: `icon-xxs`,
            }),
          }),
        })),
        (t[27] = i),
        (t[28] = o),
        (t[29] = s),
        (t[30] = S),
        (t[31] = C),
        (t[32] = w),
        (t[33] = E),
        (t[34] = D))
      : (D = t[34]),
    D
  );
}
function $e() {}
function et({ action: e, isSaving: t, liveUrl: n }) {
  if (n == null)
    switch (e) {
      case `copyLink`:
        return (0, $.jsx)(R, {
          id: `appgenShareDialog.copyLinkDisabled.notPublished`,
          defaultMessage: `Publish this site to copy its link`,
          description: `Tooltip explaining why the site share dialog copy link button is disabled`,
        });
      case `visit`:
        return (0, $.jsx)(R, {
          id: `appgenShareDialog.visitDisabled.notPublished`,
          defaultMessage: `Publish this site before visiting it`,
          description: `Tooltip explaining why the site share dialog visit button is disabled`,
        });
    }
  return t
    ? (0, $.jsx)(R, {
        id: `appgenShareDialog.footerActionDisabled.saving`,
        defaultMessage: `Sharing settings are still saving`,
        description: `Tooltip explaining why site share dialog footer actions are disabled while saving`,
      })
    : null;
}
function tt(e) {
  return [
    ...(e?.workspace_groups.map((e) => ({ ...e, source: `workspace` })) ?? []),
    ...(e?.tenant_groups.map((e) => ({ ...e, source: `tenant` })) ?? []),
  ];
}
function nt(...e) {
  return {
    tenant_groups: rt(e.flatMap((e) => e?.tenant_groups ?? [])),
    workspace_groups: rt(e.flatMap((e) => e?.workspace_groups ?? [])),
  };
}
function rt(e) {
  return Array.from(new Map(e.map((e) => [e.id, e])).values());
}
function it(e, t) {
  return {
    chipLabel: e.name,
    id: `group:${e.source}:${e.id}`,
    label: e.name,
    secondaryLabel: t.formatMessage(
      {
        id: `appgenShareDialog.access.groupSize`,
        defaultMessage: `{count, plural, one {# member} other {# members}}`,
        description: `Member count shown for a group in the site share dialog`,
      },
      { count: e.size },
    ),
    target: { kind: `group`, group: e },
  };
}
function at(e) {
  let t = Ae(e);
  return {
    chipLabel: t.chipLabel,
    id: `user:${e.account_user_id}`,
    label: t.label,
    secondaryLabel: t.secondaryLabel,
    target: { kind: `user`, user: e },
  };
}
var Z,
  Q,
  $,
  ot,
  st = e(() => {
    ((Z = c()),
      o(),
      (Q = t(s(), 1)),
      I(),
      S(),
      C(),
      b(),
      y(),
      g(),
      j(),
      D(),
      ee(),
      ke(),
      Ne(),
      Oe(),
      Le(),
      Fe(),
      Ee(),
      E(),
      le(),
      N(),
      we(),
      z(),
      oe(),
      f(),
      ye(),
      Te(),
      Ie(),
      n(),
      h(),
      se(),
      _e(),
      L(),
      d(),
      ($ = l()),
      (ot = F({
        admins_only: {
          id: `appgenAccess.state.ownerOnly`,
          defaultMessage: `Just me`,
          description: `Label for a site whose access is limited to its owner`,
        },
        custom: {
          id: `appgenAccess.state.privatelyShared`,
          defaultMessage: `Only those invited`,
          description: `Label for a site shared privately with invited people`,
        },
        public: {
          id: `appgenAccess.state.public`,
          defaultMessage: `Anyone on the Internet`,
          description: `Label for a site shared publicly on the internet`,
        },
        workspace_all: {
          id: `appgenAccess.state.workspaceAll`,
          defaultMessage: `Anyone in this workspace with the link`,
          description: `Label for a site shared with anyone in the workspace`,
        },
      })));
  });
export { st as n, ze as t };
//# sourceMappingURL=appgen-share-dialog-BQA5qyJU.js.map
