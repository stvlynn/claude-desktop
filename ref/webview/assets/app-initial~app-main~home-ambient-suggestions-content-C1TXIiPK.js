import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Fs as i,
  Go as a,
  Gs as o,
  Js as s,
  Ko as c,
  Rs as l,
  Vo as u,
  Zs as d,
  _c as f,
  gc as p,
  qo as m,
  qs as h,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  If as g,
  Km as _,
  Lf as v,
  qm as y,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  J_ as b,
  Jt as x,
  K_ as ee,
  Na as te,
  Rt as ne,
  Xt as S,
  ja as re,
  ry as ie,
  ty as ae,
  xa as oe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Ap as C,
  Dp as se,
  Ep as ce,
  Np as le,
  Pp as w,
  Tp as ue,
  jp as de,
  kp as T,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
function E() {
  let e = (0, O.c)(2),
    t = te(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = A.some((e) => re({ path: e, end: !0 }, t.pathname) != null)),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function D(e, t) {
  return e.includes(t) ? e : [...e, t];
}
var O,
  k,
  A,
  j,
  M,
  N,
  P,
  F,
  I,
  L,
  R,
  z = e(() => {
    ((O = p()),
      o(),
      (k = t(f(), 1)),
      oe(),
      le(),
      de(),
      _(),
      x(),
      se(),
      ue(),
      (A = [`/`, `/local/:conversationId`]),
      (j = new Set([`gpt-5.4`, `gpt-5.5`])),
      (M = () => {}),
      (N = y(`seen-model-upgrade-list`, [])),
      (P = y(`latest-model-seen`, null)),
      (F = (e, t, n, r) => ({
        announcementContent: n,
        showAnnouncement: e && !t,
        dismissAnnouncement: r,
      })),
      (I = () => {
        let e = (0, O.c)(9),
          t = E(),
          { data: n, isLoading: r } = w(),
          [i, a] = h(N),
          o;
        e[0] !== i || e[1] !== n?.models
          ? ((o =
              n?.models.find(
                (e) =>
                  e.availabilityNux != null &&
                  !j.has(e.model) &&
                  !i.includes(e.model),
              ) ?? null),
            (e[0] = i),
            (e[1] = n?.models),
            (e[2] = o))
          : (o = e[2]);
        let s = o,
          c;
        e[3] === s
          ? (c = e[4])
          : ((c =
              s == null
                ? null
                : {
                    defaultReasoningEffort: s.defaultReasoningEffort,
                    ...s.availabilityNux,
                    model: s.model,
                  }),
            (e[3] = s),
            (e[4] = c));
        let l = c,
          u;
        return (
          e[5] !== s || e[6] !== i || e[7] !== a
            ? ((u = () => {
                s != null && a(D(i, s.model));
              }),
              (e[5] = s),
              (e[6] = i),
              (e[7] = a),
              (e[8] = u))
            : (u = e[8]),
          F(s != null && !r && t, !1, l, u)
        );
      }),
      (L = () => {
        let e = (0, O.c)(25),
          t = E(),
          { modelSettings: n } = T(),
          { data: r } = w(),
          [i, a] = h(N),
          [o, s] = h(P),
          c,
          l,
          u,
          d,
          f,
          p,
          m,
          g,
          _;
        if (
          e[0] !== i ||
          e[1] !== o ||
          e[2] !== r?.models ||
          e[3] !== n.model
        ) {
          ((f = o == null ? i : D(i, o)), (g = f !== i), (m = o != null));
          let t = C(r?.models, n.model);
          ((l = t?.upgrade),
            (_ = l == null ? void 0 : C(r?.models, l)),
            (c =
              t?.upgradeInfo == null || _ == null
                ? null
                : {
                    ...t.upgradeInfo,
                    defaultReasoningEffort: _.defaultReasoningEffort,
                    model: _.model,
                  }),
            (d = _ != null && j.has(_.model)),
            (u = !1),
            (p = null),
            l && ((p = l), (u = f.includes(p))),
            (e[0] = i),
            (e[1] = o),
            (e[2] = r?.models),
            (e[3] = n.model),
            (e[4] = c),
            (e[5] = l),
            (e[6] = u),
            (e[7] = d),
            (e[8] = f),
            (e[9] = p),
            (e[10] = m),
            (e[11] = g),
            (e[12] = _));
        } else
          ((c = e[4]),
            (l = e[5]),
            (u = e[6]),
            (d = e[7]),
            (f = e[8]),
            (p = e[9]),
            (m = e[10]),
            (g = e[11]),
            (_ = e[12]));
        let v, y;
        (e[13] !== f || e[14] !== a || e[15] !== s || e[16] !== m || e[17] !== g
          ? ((v = () => {
              (g && a(f), m && s(null));
            }),
            (y = [f, a, s, m, g]),
            (e[13] = f),
            (e[14] = a),
            (e[15] = s),
            (e[16] = m),
            (e[17] = g),
            (e[18] = v),
            (e[19] = y))
          : ((v = e[18]), (y = e[19])),
          (0, k.useEffect)(v, y));
        let b;
        e[20] !== f || e[21] !== p || e[22] !== a || e[23] !== s
          ? ((b = () => {
              p && (a(D(f, p)), s(null));
            }),
            (e[20] = f),
            (e[21] = p),
            (e[22] = a),
            (e[23] = s),
            (e[24] = b))
          : (b = e[24]);
        let x = b;
        return F(!!l && !n.isLoading && _ != null && !d && t, u, c, x);
      }),
      (R = () => {
        let e = (0, O.c)(9),
          t = E(),
          { isServiceTierAllowed: n } = ce(),
          { modelSettings: r } = T(),
          { data: i } = w(),
          a = s(N),
          o,
          c;
        e[0] !== i?.models || e[1] !== r.model
          ? ((o = C(i?.models, r.model)),
            (c = S(o, ne)),
            (e[0] = i?.models),
            (e[1] = r.model),
            (e[2] = o),
            (e[3] = c))
          : ((o = e[2]), (c = e[3]));
        let l = c,
          u;
        e[4] !== a || e[5] !== i?.models
          ? ((u =
              i?.models.find((e) => S(e, `priority`) && a.includes(e.model)) ??
              null),
            (e[4] = a),
            (e[5] = i?.models),
            (e[6] = u))
          : (u = e[6]);
        let d = u,
          f = l ? (o ?? d) : d,
          p;
        return (
          e[7] === f
            ? (p = e[8])
            : ((p = f == null ? null : { model: f.model }),
              (e[7] = f),
              (e[8] = p)),
          F(n && !r.isLoading && t && f != null, !1, p, M)
        );
      }));
  });
function B(e, t) {
  return t == null ? null : (e[t] ?? null);
}
function fe(e, t, n) {
  let r = B(e, t);
  return r != null && r >= n ? e : { ...e, [t]: n };
}
var V,
  H,
  U,
  W,
  G,
  K = e(() => {
    (o(),
      _(),
      (V = d(!1)),
      (H = y(`has-seen-knowledge-work-announcement`, !1)),
      (U = y(`has-seen-fast-mode-announcement`, !1)),
      (W = y(`has-seen-work-plugins-announcement`, !1)),
      (G = y(`workspace-message-last-seen-at-by-account`, {})));
  });
function pe(e, t, n) {
  if (e == null) return null;
  let r =
    e.messages.find(
      (e) =>
        e.message_type === `announcement` && !t.has(e.message_id) && he(e, n),
    ) ?? null;
  return r == null ? null : { message: r };
}
function me(e) {
  return e?.messages.find((e) => e.message_type === `headline`) ?? null;
}
function he(e, t) {
  return t == null || e.created_at > t;
}
function ge(e, t) {
  return t == null ? Z : (e.get(t) ?? Z);
}
function _e(e, t, n) {
  let r = new Map(e),
    i = new Set(r.get(t) ?? []);
  for (let e of n) i.add(e);
  return (r.set(t, i), r);
}
function ve() {
  let e = (0, Y.c)(10),
    t = c(r),
    { accountId: n, data: i, isLoading: a, shouldFetch: o } = q(),
    s = ge(m(Q), n),
    [l, u] = h(G),
    d = B(l, n),
    f = o ? pe(i, s, d) : null,
    p;
  e[0] !== n || e[1] !== f || e[2] !== t || e[3] !== u || e[4] !== l
    ? ((p = () => {
        f == null ||
          n == null ||
          (J(t, n, f), u(fe(l, n, f.message.created_at)));
      }),
      (e[0] = n),
      (e[1] = f),
      (e[2] = t),
      (e[3] = u),
      (e[4] = l),
      (e[5] = p))
    : (p = e[5]);
  let g;
  return (
    e[6] !== f || e[7] !== a || e[8] !== p
      ? ((g = { announcement: f, dismissAnnouncement: p, isLoading: a }),
        (e[6] = f),
        (e[7] = a),
        (e[8] = p),
        (e[9] = g))
      : (g = e[9]),
    g
  );
}
function ye() {
  let e = (0, Y.c)(5),
    { data: t, shouldFetch: n } = q(),
    r;
  e[0] !== t || e[1] !== n
    ? ((r = n ? me(t) : null), (e[0] = t), (e[1] = n), (e[2] = r))
    : (r = e[2]);
  let i;
  return (
    e[3] === r ? (i = e[4]) : ((i = { headline: r }), (e[3] = r), (e[4] = i)),
    i
  );
}
function q() {
  let e = (0, Y.c)(8),
    { accountId: t, authMethod: n, isLoading: r } = v(),
    i = E(),
    o = ie(`4285716042`) && i && !r && n === `chatgpt` && t != null,
    s;
  e[0] !== t || e[1] !== o
    ? ((s = { accountId: t, shouldFetch: o }),
      (e[0] = t),
      (e[1] = o),
      (e[2] = s))
    : (s = e[2]);
  let c = a($, s),
    l = o && c.isLoading,
    u;
  return (
    e[3] !== t || e[4] !== c.data || e[5] !== o || e[6] !== l
      ? ((u = { accountId: t, data: c.data, isLoading: l, shouldFetch: o }),
        (e[3] = t),
        (e[4] = c.data),
        (e[5] = o),
        (e[6] = l),
        (e[7] = u))
      : (u = e[7]),
    u
  );
}
async function be() {
  return ee.safeGet(`/wham/workspace-messages`, {
    additionalHeaders: { "Cache-Control": `no-store` },
  });
}
function J(e, t, n) {
  e.set(Q, (e) => _e(e, t, [n.message.message_id]));
}
var Y,
  X,
  Z,
  Q,
  $,
  xe = e(() => {
    ((Y = p()),
      o(),
      u(),
      g(),
      z(),
      n(),
      ae(),
      b(),
      K(),
      (X = 10 * 1e3),
      (Z = new Set()),
      (Q = l(r, () => new Map())),
      ($ = i(r, ({ accountId: e, shouldFetch: t }) => ({
        queryKey: [`codex-workspace-messages`, e],
        enabled: t,
        refetchOnMount: !1,
        refetchOnReconnect: !1,
        refetchOnWindowFocus: !1,
        retry: !1,
        refetchInterval: X,
        refetchIntervalInBackground: !0,
        staleTime: 6e4,
        queryFn: be,
      }))));
  });
export {
  H as a,
  K as c,
  E as d,
  L as f,
  U as i,
  z as l,
  ve as n,
  W as o,
  I as p,
  ye as r,
  V as s,
  xe as t,
  R as u,
};
//# sourceMappingURL=app-initial~app-main~home-ambient-suggestions-content-C1TXIiPK.js.map
