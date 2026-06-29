import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as t,
  ac as n,
  gc as r,
  h as i,
  lc as a,
  m as o,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Dm as s,
  Em as c,
  If as l,
  Lf as u,
  Om as d,
  Op as f,
  Tm as p,
  _f as m,
  eo as h,
  fh as g,
  gf as _,
  kp as v,
  no as y,
  oo as b,
  ph as x,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as S,
  J_ as C,
  K_ as w,
  zy as T,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function E(e) {
  let t = (0, D.c)(30),
    { options: n, renderLabel: r, value: i, onChange: a } = e,
    o;
  if (t[0] !== n || t[1] !== i) {
    let e;
    (t[3] === i
      ? (e = t[4])
      : ((e = (e) => e.value === i), (t[3] = i), (t[4] = e)),
      (o = n.find(e)),
      (t[0] = n),
      (t[1] = i),
      (t[2] = o));
  } else o = t[2];
  let s = o?.Icon,
    c;
  t[5] === s
    ? (c = t[6])
    : ((c =
        s == null
          ? null
          : (0, O.jsx)(s, { "aria-hidden": !0, className: `icon-xs` })),
      (t[5] = s),
      (t[6] = c));
  let l;
  t[7] === c
    ? (l = t[8])
    : ((l = (0, O.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10`,
        children: c,
      })),
      (t[7] = c),
      (t[8] = l));
  let u;
  t[9] !== r || t[10] !== i
    ? ((u = r(i)), (t[9] = r), (t[10] = i), (t[11] = u))
    : (u = t[11]);
  let d;
  t[12] === u
    ? (d = t[13])
    : ((d = (0, O.jsx)(`span`, { className: `truncate`, children: u })),
      (t[12] = u),
      (t[13] = d));
  let p;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = (0, O.jsx)(g, {
        "aria-hidden": !0,
        className: `icon-xs shrink-0 text-token-description-foreground`,
      })),
      (t[14] = p))
    : (p = t[14]);
  let m;
  t[15] !== l || t[16] !== d
    ? ((m = (0, O.jsxs)(`button`, {
        type: `button`,
        className: `flex min-w-0 cursor-interaction items-center gap-3 text-left text-base`,
        children: [l, d, p],
      })),
      (t[15] = l),
      (t[16] = d),
      (t[17] = m))
    : (m = t[17]);
  let _;
  if (t[18] !== a || t[19] !== n || t[20] !== r || t[21] !== i) {
    let e;
    (t[23] !== a || t[24] !== r || t[25] !== i
      ? ((e = (e) =>
          (0, O.jsx)(
            y.Item,
            {
              disabled: e.disabled,
              LeftIcon: e.Icon,
              RightIcon: e.value === i ? f : void 0,
              onSelect: () => {
                a(e.value);
              },
              children: r(e.value),
            },
            e.value,
          )),
        (t[23] = a),
        (t[24] = r),
        (t[25] = i),
        (t[26] = e))
      : (e = t[26]),
      (_ = n.map(e)),
      (t[18] = a),
      (t[19] = n),
      (t[20] = r),
      (t[21] = i),
      (t[22] = _));
  } else _ = t[22];
  let v;
  return (
    t[27] !== m || t[28] !== _
      ? ((v = (0, O.jsx)(h, {
          align: `start`,
          contentWidth: `menu`,
          triggerButton: m,
          children: _,
        })),
        (t[27] = m),
        (t[28] = _),
        (t[29] = v))
      : (v = t[29]),
    v
  );
}
var D,
  O,
  k = e(() => {
    ((D = r()), b(), v(), x(), (O = a()));
  });
function A(e) {
  let t = (0, N.c)(23),
    {
      actions: n,
      cancelAction: r,
      disabled: i,
      hasPendingAccessChange: a,
      hasPendingInvitees: o,
      idleActions: c,
      isSaving: l,
      savingAriaLabel: u,
      size: d,
      spinnerClassName: f,
    } = e,
    m;
  t[0] !== a || t[1] !== o
    ? ((m = M({ hasPendingAccessChange: a, hasPendingInvitees: o })),
      (t[0] = a),
      (t[1] = o),
      (t[2] = m))
    : (m = t[2]);
  let h = m;
  if (h == null) return c ?? null;
  let g;
  t[3] !== r || t[4] !== i || t[5] !== l || t[6] !== d
    ? ((g =
        r == null
          ? null
          : (0, P.jsx)(p, {
              color: `secondary`,
              disabled: i || l,
              size: d,
              onClick: r.onClick,
              children: (0, P.jsx)(T, {
                id: `shareDialog.primaryAction.cancel`,
                defaultMessage: `Cancel`,
                description: `Button label for cancelling staged changes in a share dialog`,
              }),
            })),
      (t[3] = r),
      (t[4] = i),
      (t[5] = l),
      (t[6] = d),
      (t[7] = g))
    : (g = t[7]);
  let _ = l ? u : void 0,
    v = i || l,
    y = n[h],
    b = n[h],
    x;
  t[8] !== h || t[9] !== n || t[10] !== l || t[11] !== f
    ? ((x = l
        ? (0, P.jsx)(s, { className: f })
        : (n[h].label ?? (0, P.jsx)(j, { action: h }))),
      (t[8] = h),
      (t[9] = n),
      (t[10] = l),
      (t[11] = f),
      (t[12] = x))
    : (x = t[12]);
  let S;
  t[13] !== d ||
  t[14] !== _ ||
  t[15] !== v ||
  t[16] !== y.onClick ||
  t[17] !== b.type ||
  t[18] !== x
    ? ((S = (0, P.jsx)(p, {
        "aria-label": _,
        color: `primary`,
        disabled: v,
        size: d,
        onClick: y.onClick,
        type: b.type,
        children: x,
      })),
      (t[13] = d),
      (t[14] = _),
      (t[15] = v),
      (t[16] = y.onClick),
      (t[17] = b.type),
      (t[18] = x),
      (t[19] = S))
    : (S = t[19]);
  let C;
  return (
    t[20] !== g || t[21] !== S
      ? ((C = (0, P.jsxs)(P.Fragment, { children: [g, S] })),
        (t[20] = g),
        (t[21] = S),
        (t[22] = C))
      : (C = t[22]),
    C
  );
}
function j(e) {
  let t = (0, N.c)(2),
    { action: n } = e;
  switch (n) {
    case `invite`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, P.jsx)(T, {
              id: `shareDialog.primaryAction.invite`,
              defaultMessage: `Invite`,
              description: `Button label for inviting selected people or groups in a share dialog`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `share`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, P.jsx)(T, {
              id: `shareDialog.primaryAction.save`,
              defaultMessage: `Save`,
              description: `Button label for saving a share dialog access change`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
function M({ hasPendingAccessChange: e, hasPendingInvitees: t }) {
  return !e && !t ? null : e && !t ? `share` : `invite`;
}
var N,
  P,
  F = e(() => {
    ((N = r()), S(), c(), d(), (P = a()));
  });
function I(e) {
  return e.name ?? e.email ?? e.id;
}
function L(e) {
  return {
    chipLabel: e.email ?? void 0,
    id: `user:${e.account_user_id}`,
    label: I(e),
    secondaryLabel: e.email ?? void 0,
  };
}
function R({
  currentAccountUserId: e,
  existingAccountUserIds: t,
  selectedAccountUserIds: n,
  workspaceUsers: r,
}) {
  let i = new Set(t),
    a = new Set(n);
  return r?.filter(
    (t) =>
      t.account_user_id !== e &&
      !i.has(t.account_user_id) &&
      !a.has(t.account_user_id),
  );
}
var z = e(() => {});
function B(e) {
  let t = (0, V.c)(23),
    {
      options: n,
      renderLabel: r,
      removeLabel: i,
      triggerButtonClassName: a,
      value: o,
      onChange: s,
      onRemoveAccess: c,
    } = e,
    l =
      a === void 0
        ? `flex cursor-interaction items-center gap-1 rounded-md border border-token-border px-2 py-1 text-sm text-token-foreground`
        : a,
    u;
  t[0] !== r || t[1] !== o
    ? ((u = r(o)), (t[0] = r), (t[1] = o), (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, H.jsx)(g, {
        "aria-hidden": !0,
        className: `icon-xs text-token-description-foreground`,
      })),
      (t[3] = d))
    : (d = t[3]);
  let p;
  t[4] !== u || t[5] !== l
    ? ((p = (0, H.jsxs)(`button`, {
        type: `button`,
        className: l,
        children: [u, d],
      })),
      (t[4] = u),
      (t[5] = l),
      (t[6] = p))
    : (p = t[6]);
  let m;
  if (t[7] !== s || t[8] !== n || t[9] !== r || t[10] !== o) {
    let e;
    (t[12] !== s || t[13] !== r || t[14] !== o
      ? ((e = (e) =>
          (0, H.jsx)(
            y.Item,
            {
              disabled: e.disabled,
              RightIcon: e.value === o ? f : void 0,
              tooltipText: e.tooltipText,
              onSelect: () => {
                s?.(e.value);
              },
              children: r(e.value),
            },
            e.value,
          )),
        (t[12] = s),
        (t[13] = r),
        (t[14] = o),
        (t[15] = e))
      : (e = t[15]),
      (m = n.map(e)),
      (t[7] = s),
      (t[8] = n),
      (t[9] = r),
      (t[10] = o),
      (t[11] = m));
  } else m = t[11];
  let _;
  t[16] !== c || t[17] !== i
    ? ((_ =
        c == null
          ? null
          : (0, H.jsxs)(H.Fragment, {
              children: [
                (0, H.jsx)(y.Separator, {}),
                (0, H.jsx)(y.Item, {
                  onSelect: c,
                  children: (0, H.jsx)(`span`, {
                    className: `text-token-error-foreground`,
                    children: i,
                  }),
                }),
              ],
            })),
      (t[16] = c),
      (t[17] = i),
      (t[18] = _))
    : (_ = t[18]);
  let v;
  return (
    t[19] !== p || t[20] !== m || t[21] !== _
      ? ((v = (0, H.jsxs)(h, {
          align: `end`,
          contentWidth: `menu`,
          triggerButton: p,
          children: [m, _],
        })),
        (t[19] = p),
        (t[20] = m),
        (t[21] = _),
        (t[22] = v))
      : (v = t[22]),
    v
  );
}
var V,
  H,
  U = e(() => {
    ((V = r()), b(), v(), x(), (H = a()));
  });
function W(e) {
  let t = (0, K.c)(15),
    { label: n, avatarLabel: r, secondaryLabel: i, trailingContent: a } = e,
    o = r === void 0 ? n : r,
    s;
  t[0] === o ? (s = t[1]) : ((s = G(o)), (t[0] = o), (t[1] = s));
  let c;
  t[2] === s
    ? (c = t[3])
    : ((c = (0, q.jsx)(`span`, {
        className: `flex size-9 shrink-0 items-center justify-center rounded-full bg-token-foreground/10 text-sm font-medium text-token-foreground`,
        children: s,
      })),
      (t[2] = s),
      (t[3] = c));
  let l;
  t[4] === n
    ? (l = t[5])
    : ((l = (0, q.jsx)(`div`, {
        className: `truncate text-base`,
        children: n,
      })),
      (t[4] = n),
      (t[5] = l));
  let u;
  t[6] === i
    ? (u = t[7])
    : ((u =
        i == null
          ? null
          : (0, q.jsx)(`div`, {
              className: `truncate text-sm text-token-description-foreground`,
              children: i,
            })),
      (t[6] = i),
      (t[7] = u));
  let d;
  t[8] !== l || t[9] !== u
    ? ((d = (0, q.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [l, u],
      })),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== c || t[12] !== d || t[13] !== a
      ? ((f = (0, q.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [c, d, a],
        })),
        (t[11] = c),
        (t[12] = d),
        (t[13] = a),
        (t[14] = f))
      : (f = t[14]),
    f
  );
}
function G(e) {
  return e
    .split(` `)
    .map((e) => e[0])
    .join(``)
    .slice(0, 2)
    .toUpperCase();
}
var K,
  q,
  J = e(() => {
    ((K = r()), (q = a()));
  });
function Y(e) {
  let t = (0, Z.c)(12),
    { accountId: r, authMethod: i } = u(),
    a;
  t[0] === e ? (a = t[1]) : ((a = e.trim()), (t[0] = e), (t[1] = a));
  let s = m(a, 200),
    c;
  t[2] !== r || t[3] !== s
    ? ((c = [`workspace-users`, r, s]), (t[2] = r), (t[3] = s), (t[4] = c))
    : (c = t[4]);
  let l = i === `chatgpt` && r != null && s.length > 0,
    d;
  t[5] !== r || t[6] !== s
    ? ((d = async () => {
        if (r == null) throw Error(`account id is required`);
        return (
          await w.safeGet(`/accounts/{account_id}/users`, {
            parameters: {
              path: { account_id: r },
              query: { limit: 10, offset: 0, query: s },
            },
          })
        ).items;
      }),
      (t[5] = r),
      (t[6] = s),
      (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== c || t[9] !== l || t[10] !== d
      ? ((f = { queryKey: c, enabled: l, queryFn: d, staleTime: o.ONE_MINUTE }),
        (t[8] = c),
        (t[9] = l),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    n(f)
  );
}
function X(e) {
  let t = (0, Z.c)(12),
    { accountId: r, authMethod: i } = u(),
    a;
  t[0] === e ? (a = t[1]) : ((a = e.trim()), (t[0] = e), (t[1] = a));
  let s = m(a, 200),
    c;
  t[2] !== r || t[3] !== s
    ? ((c = [`workspace-groups`, r, s]), (t[2] = r), (t[3] = s), (t[4] = c))
    : (c = t[4]);
  let l = i === `chatgpt` && r != null && s.length > 0,
    d;
  t[5] !== r || t[6] !== s
    ? ((d = async () => {
        if (r == null) throw Error(`account id is required`);
        return (
          await w.safeGet(`/accounts/{account_id}/groups`, {
            parameters: {
              path: { account_id: r },
              query: { limit: 10, offset: 0, query: s },
            },
          })
        ).items;
      }),
      (t[5] = r),
      (t[6] = s),
      (t[7] = d))
    : (d = t[7]);
  let f;
  return (
    t[8] !== c || t[9] !== l || t[10] !== d
      ? ((f = { queryKey: c, enabled: l, queryFn: d, staleTime: o.ONE_MINUTE }),
        (t[8] = c),
        (t[9] = l),
        (t[10] = d),
        (t[11] = f))
      : (f = t[11]),
    n(f)
  );
}
var Z,
  Q = e(() => {
    ((Z = r()), t(), l(), i(), C(), _());
  });
export {
  J as a,
  R as c,
  z as d,
  A as f,
  k as h,
  W as i,
  L as l,
  E as m,
  X as n,
  B as o,
  F as p,
  Y as r,
  U as s,
  Q as t,
  I as u,
};
//# sourceMappingURL=use-workspace-users-CmiCK9G8.js.map
