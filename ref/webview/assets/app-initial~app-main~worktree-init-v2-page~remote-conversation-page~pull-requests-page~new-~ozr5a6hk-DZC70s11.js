import { n as e, s as t, t as n } from "./rolldown-runtime-Czos8NxU.js";
import {
  $o as r,
  $s as i,
  As as a,
  C as o,
  Cs as s,
  D as c,
  Di as l,
  Ds as u,
  E as d,
  Eo as f,
  Fi as p,
  Fs as m,
  Go as h,
  Is as g,
  Ko as _,
  O as v,
  Rs as y,
  S as b,
  Ts as x,
  Vo as S,
  _ as C,
  _c as w,
  ac as T,
  c as ee,
  cc as E,
  cs as te,
  d as ne,
  es as re,
  gc as D,
  go as ie,
  gs as ae,
  h as oe,
  hs as se,
  ic as ce,
  jo as O,
  js as k,
  ko as le,
  ks as ue,
  l as de,
  m as A,
  o as fe,
  on as pe,
  os as me,
  p as he,
  pc as ge,
  qo as j,
  s as _e,
  sn as ve,
  so as ye,
  tc as be,
  uo as xe,
  us as Se,
  v as Ce,
  xo as we,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  B_ as Te,
  C as Ee,
  Cl as De,
  D as Oe,
  E as ke,
  Fc as Ae,
  Fv as je,
  G_ as Me,
  J_ as Ne,
  K_ as M,
  L_ as Pe,
  Mc as Fe,
  N as Ie,
  Pv as Le,
  Qp as Re,
  R_ as ze,
  Rv as Be,
  S as Ve,
  Tl as He,
  W_ as Ue,
  Zp as We,
  _n as Ge,
  _o as Ke,
  _y as qe,
  c as Je,
  cm as Ye,
  d as Xe,
  em as N,
  fn as Ze,
  gy as P,
  ho as Qe,
  hy as $e,
  jc as et,
  l as tt,
  ly as nt,
  ml as rt,
  mn as it,
  mo as at,
  nm as ot,
  o as st,
  pl as ct,
  pn as lt,
  ry as ut,
  sm as F,
  ty as dt,
  u as ft,
  ut as pt,
  uy as I,
  vg as mt,
  vo as ht,
  wl as gt,
  yg as L,
  yt as _t,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function vt() {
  let e = bt?.H;
  return e != null && e.useState !== e.useReducer;
}
var yt,
  bt,
  xt = e(() => {
    if (
      ((yt = t(w(), 1)),
      (bt = yt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE),
      !bt)
    )
      throw Error(`Missing react shared internals. Check version.`);
  });
function St(e) {
  let t = (0, wt.c)(4),
    n = (0, Tt.useRef)(e),
    r,
    i;
  (t[0] === e
    ? ((r = t[1]), (i = t[2]))
    : ((r = () => {
        n.current = e;
      }),
      (i = [e]),
      (t[0] = e),
      (t[1] = r),
      (t[2] = i)),
    (0, Tt.useInsertionEffect)(r, i));
  let a;
  return (
    t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (...e) => {
          let t = e;
          vt() && Ct();
          let { current: r } = n;
          return r(...t);
        }),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function Ct() {
  throw Error(
    `A function wrapped in useStableCallback can't be called during rendering.`,
  );
}
var wt,
  Tt,
  Et = e(() => {
    ((wt = D()), (Tt = t(w(), 1)), xt());
  });
async function Dt(e, t) {
  (await e.invalidateQueries({ queryKey: t }), kt(t));
}
function Ot() {
  let e = (0, At.c)(2),
    t = E(),
    n;
  return (
    e[0] === t
      ? (n = e[1])
      : ((n = async (e) => {
          await Dt(t, e);
        }),
        (e[0] = t),
        (e[1] = n)),
    n
  );
}
function kt(e) {
  Ce.dispatchMessage(`query-cache-invalidate`, { queryKey: [...e] });
}
var At,
  jt = e(() => {
    ((At = D()), i(), C());
  }),
  Mt,
  Nt,
  Pt,
  Ft,
  It,
  Lt,
  R,
  Rt,
  zt,
  Bt,
  Vt,
  Ht,
  Ut,
  Wt,
  Gt,
  Kt,
  qt = e(() => {
    (i(),
      S(),
      v(),
      Ae(),
      c(),
      Ye(),
      Re(),
      oe(),
      ee(),
      (Mt = a(d, ({ get: e }) => F(e, `host_config`) ?? null)),
      (Nt = a(d, ({ get: e }) => [
        ...(F(e, `remote_ssh_connections`) ?? []),
        ...(F(e, `remote_wsl_connections`) ?? []),
        ...(F(e, `remote_control_connections`) ?? []),
      ])),
      (Pt = fe(d, `codex-home`, () => ({ staleTime: A.FIVE_SECONDS }))),
      (Ft = a(d, ({ get: e }) => e(Pt, void 0))),
      (It = fe(d, `home-directory`, () => ({ staleTime: A.FIVE_SECONDS }))),
      (Lt = _e(d, `active-workspace-roots`, {
        placeholderData: ge,
        staleTime: A.FIVE_SECONDS,
      })),
      (R = a(d, ({ get: e }) => {
        let t = e(Lt);
        return t.isPending
          ? !0
          : (t.data?.roots ?? []).length === 1 &&
              et(e, p.PROJECT_WRITABLE_ROOTS).isPending;
      })),
      (Rt = k(d, (e, { get: t }) =>
        pe({
          projectId: e,
          projectWritableRoots: ve(Fe(t, p.PROJECT_WRITABLE_ROOTS)),
          legacyRoot: l(e) ? e : null,
        }),
      )),
      (zt = a(d, ({ get: e }) => {
        let t = e(Lt).data?.roots ?? [];
        if (t.length !== 1) return t.filter(l);
        let n = t[0] ?? null;
        return n == null ? [] : e(Rt, n);
      })),
      (Bt = a(d, ({ get: e }) => {
        if (e(R)) return null;
        let t = e(zt);
        return t.length === 1 ? (t[0] ?? null) : null;
      })),
      (Vt = fe(d, `workspace-root-options`, () => ({
        placeholderData: ge,
        staleTime: A.INFINITE,
      }))),
      (Ht = _e(d, `workspace-root-options`, {
        params: { hostId: N },
        placeholderData: ge,
        staleTime: A.INFINITE,
      })),
      (Ut = a(d, ({ get: e }) => Fe(e, p.REMOTE_PROJECTS) ?? [])),
      (Wt = a(d, ({ get: e }) => {
        let t = e(Ut),
          n = Fe(e, p.ACTIVE_REMOTE_PROJECT_ID);
        return n == null ? null : (t.find((e) => e.id === n) ?? null);
      })),
      (Gt = a(d, ({ get: e }) => Fe(e, p.THREAD_PROJECT_ASSIGNMENTS))),
      (Kt = k(d, (e, { get: t }) => {
        let n = t(Mt);
        return n != null && e === n.id ? n : We(e, t(Nt));
      })));
  });
function Jt(e, t) {
  let n = (0, V.c)(11),
    r = t?.hostId ?? `local`,
    i = j(Bt),
    a = j(R),
    o = t?.useActiveWorkspaceRoot ?? r === `local`,
    s = e ?? (o ? i : null),
    c = (t?.enabled ?? !0) && !(e == null && o && a),
    l = E(),
    u;
  n[0] !== r || n[1] !== s
    ? ((u = [...H, r, s]), (n[0] = r), (n[1] = s), (n[2] = u))
    : (u = n[2]);
  let d;
  n[3] !== r || n[4] !== l || n[5] !== s
    ? ((d = () => en(l, r, s)), (n[3] = r), (n[4] = l), (n[5] = s), (n[6] = d))
    : (d = n[6]);
  let f;
  return (
    n[7] !== c || n[8] !== u || n[9] !== d
      ? ((f = {
          queryKey: u,
          queryFn: d,
          staleTime: A.FIVE_MINUTES,
          enabled: c,
          select: Yt,
        }),
        (n[7] = c),
        (n[8] = u),
        (n[9] = d),
        (n[10] = f))
      : (f = n[10]),
    T(f)
  );
}
function Yt(e) {
  let { config: t, origins: n, layers: r } = e,
    i = xn(t);
  return {
    servers: i,
    configWriteTarget: yn({ layers: r, origins: n, keyPath: `mcp_servers` }),
    serverOrigins: bn({
      origins: n,
      rootKey: `mcp_servers`,
      childKeys: Object.keys(i),
      probeFields: [`enabled`, `command`, `url`],
    }),
  };
}
function Xt(e) {
  let t = (0, V.c)(6),
    n = e === void 0 ? !0 : e,
    r = E(),
    i;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = [...Cn, N]), (t[0] = i))
    : (i = t[0]);
  let a;
  t[1] === r
    ? (a = t[2])
    : ((a = () => z(r, N, null, !1)), (t[1] = r), (t[2] = a));
  let o;
  return (
    t[3] !== n || t[4] !== a
      ? ((o = {
          queryKey: i,
          queryFn: a,
          staleTime: 1 / 0,
          enabled: n,
          select: Zt,
        }),
        (t[3] = n),
        (t[4] = a),
        (t[5] = o))
      : (o = t[5]),
    T(o)
  );
}
function Zt(e) {
  let { config: t } = e;
  return t.analytics?.enabled !== !1;
}
function Qt(e, t) {
  let n = (0, V.c)(11),
    r = t?.hostId ?? `local`,
    i = j(Bt),
    a = j(R),
    o = t?.cwdMode !== `preserve-null` && e == null,
    s = t?.cwdMode === `preserve-null` ? (e ?? null) : (e ?? i),
    c = E(),
    l;
  n[0] !== r || n[1] !== s
    ? ((l = [...Tn, r, s]), (n[0] = r), (n[1] = s), (n[2] = l))
    : (l = n[2]);
  let u;
  n[3] !== r || n[4] !== c || n[5] !== s
    ? ((u = () => en(c, r, s)), (n[3] = r), (n[4] = c), (n[5] = s), (n[6] = u))
    : (u = n[6]);
  let d = (t?.enabled ?? !0) && !(o && a),
    f;
  return (
    n[7] !== l || n[8] !== u || n[9] !== d
      ? ((f = {
          queryKey: l,
          queryFn: u,
          staleTime: A.FIVE_MINUTES,
          enabled: d,
          select: $t,
        }),
        (n[7] = l),
        (n[8] = u),
        (n[9] = d),
        (n[10] = f))
      : (f = n[10]),
    T(f)
  );
}
function $t(e) {
  let { config: t, origins: n, layers: r } = e;
  return { config: t, origins: n, layers: r };
}
function en(e, t, n) {
  return e.fetchQuery({
    queryKey: [...U, t, n],
    queryFn: async () => {
      try {
        return await z(e, t, n, !0);
      } catch (e) {
        return (
          o.error(`Failed to load layered config`, {
            safe: {},
            sensitive: { error: e },
          }),
          jn
        );
      }
    },
    staleTime: A.FIVE_MINUTES,
  });
}
function z(e, t, n, r) {
  return e.fetchQuery({
    queryKey: [...En, t, n, r],
    queryFn: () =>
      L(`read-config-for-host`, { hostId: t, includeLayers: r, cwd: n }),
    staleTime: 0,
  });
}
function tn({ authMethod: e, hostId: t }) {
  return [...wn, t, `auth`, e ?? null];
}
function nn({ authMethod: e, hostId: t }) {
  return {
    queryKey: tn({ authMethod: e, hostId: t }),
    queryFn: async () => {
      try {
        return await L(`get-config-requirements-for-host`, { hostId: t });
      } catch (e) {
        return (
          o.error(`Failed to load config requirements`, {
            safe: {},
            sensitive: { error: e },
          }),
          { requirements: null }
        );
      }
    },
    staleTime: A.FIVE_MINUTES,
  };
}
function rn(e, t) {
  let n = (0, V.c)(7),
    r = t === void 0 ? !0 : t,
    i = j(zt),
    a = j(R),
    o = e ?? i,
    s;
  n[0] === o ? (s = n[1]) : ((s = { roots: o }), (n[0] = o), (n[1] = s));
  let c = r && !(e == null && a),
    l;
  n[2] === c
    ? (l = n[3])
    : ((l = { enabled: c, staleTime: A.FIVE_MINUTES }), (n[2] = c), (n[3] = l));
  let u;
  return (
    n[4] !== s || n[5] !== l
      ? ((u = { params: s, queryConfig: l, select: an }),
        (n[4] = s),
        (n[5] = l),
        (n[6] = u))
      : (u = n[6]),
    de(`local-custom-agents`, u)
  );
}
function an(e) {
  return { roles: e.agents };
}
function on(e) {
  let t = (0, V.c)(8),
    n = e?.hostId ?? `local`,
    r = Ot(),
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = (e) => {
        let { filePath: t, key: r, value: i } = e;
        return L(`batch-write-config-value`, {
          hostId: n,
          edits: [
            { keyPath: `mcp_servers.${r}`, value: i, mergeStrategy: `replace` },
          ],
          filePath: t,
          expectedVersion: null,
        });
      }),
      (t[0] = n),
      (t[1] = i));
  let a;
  t[2] !== n || t[3] !== r
    ? ((a = async () => {
        await un(n, r);
      }),
      (t[2] = n),
      (t[3] = r),
      (t[4] = a))
    : (a = t[4]);
  let o;
  return (
    t[5] !== i || t[6] !== a
      ? ((o = { mutationFn: i, onError: sn, onSuccess: a }),
        (t[5] = i),
        (t[6] = a),
        (t[7] = o))
      : (o = t[7]),
    be(o)
  );
}
function sn(e) {
  o.error(`Failed to write MCP server config`, {
    safe: {},
    sensitive: { error: e },
  });
}
function cn(e) {
  let t = (0, V.c)(20),
    n = e?.hostId ?? `local`,
    r = E(),
    i = Ot(),
    a;
  t[0] === n ? (a = t[1]) : ((a = [...H, n]), (t[0] = n), (t[1] = a));
  let s = a,
    c;
  t[2] === n ? (c = t[3]) : ((c = [...U, n]), (t[2] = n), (t[3] = c));
  let l = c,
    u;
  t[4] === n
    ? (u = t[5])
    : ((u = (e) => {
        let { key: t, enabled: r } = e;
        return L(`write-config-value`, {
          hostId: n,
          keyPath: `mcp_servers.${t}.enabled`,
          value: r,
          mergeStrategy: `upsert`,
          filePath: null,
          expectedVersion: null,
        });
      }),
      (t[4] = n),
      (t[5] = u));
  let d;
  t[6] !== l || t[7] !== s || t[8] !== r
    ? ((d = async (e) => {
        let { key: t, enabled: n } = e;
        await Promise.all([
          r.cancelQueries({ queryKey: s }),
          r.cancelQueries({ queryKey: l }),
        ]);
        let i = [...ln(r, s), ...ln(r, l)];
        for (let [e, a] of i) r.setQueryData(e, dn(a, t, n));
        return { previousConfigResponses: i };
      }),
      (t[6] = l),
      (t[7] = s),
      (t[8] = r),
      (t[9] = d))
    : (d = t[9]);
  let f;
  t[10] === r
    ? (f = t[11])
    : ((f = (e, t, n) => {
        o.error(`Failed to update MCP server enabled state`, {
          safe: {},
          sensitive: { error: e },
        });
        for (let [e, t] of n?.previousConfigResponses ?? [])
          r.setQueryData(e, t);
      }),
      (t[10] = r),
      (t[11] = f));
  let p;
  t[12] !== n || t[13] !== i
    ? ((p = async () => {
        await un(n, i);
      }),
      (t[12] = n),
      (t[13] = i),
      (t[14] = p))
    : (p = t[14]);
  let m;
  return (
    t[15] !== u || t[16] !== d || t[17] !== f || t[18] !== p
      ? ((m = { mutationFn: u, onMutate: d, onError: f, onSettled: p }),
        (t[15] = u),
        (t[16] = d),
        (t[17] = f),
        (t[18] = p),
        (t[19] = m))
      : (m = t[19]),
    be(m)
  );
}
function ln(e, t) {
  return e
    .getQueriesData({ queryKey: t })
    .flatMap(([e, t]) => (t == null ? [] : [[e, t]]));
}
async function un(e, t) {
  (await t([...U, e]), await Promise.all([t([...H, e]), t([...Dn, e])]));
}
function dn(e, t, n) {
  let r =
      e.config.mcp_servers == null && e.config.mcpServers != null
        ? `mcpServers`
        : `mcp_servers`,
    i = fn(e.config[r], t, n);
  return i
    ? { ...e, config: Object.assign(structuredClone(e.config), { [r]: i }) }
    : e;
}
function fn(e, t, n) {
  let r = An.safeParse(e);
  if (!r.success) return null;
  let i = An.safeParse(r.data[t]);
  return i.success ? { ...r.data, [t]: { ...i.data, enabled: n } } : null;
}
function pn(e, t) {
  return {
    queryKey: [...Dn, e, t],
    queryFn: async () =>
      L(`list-mcp-server-status`, {
        hostId: e,
        cursor: null,
        limit: 100,
        detail: t,
      }),
    staleTime: A.FIVE_MINUTES,
  };
}
function mn(e) {
  let t = (0, V.c)(14),
    { hostId: n, server: r, threadId: i, uri: a, enabled: s } = e,
    c = s === void 0 ? !0 : s,
    l = n ?? `local`,
    u = a ?? ``,
    d;
  t[0] !== l || t[1] !== r || t[2] !== u || t[3] !== i
    ? ((d = [...On, l, i, r, u]),
      (t[0] = l),
      (t[1] = r),
      (t[2] = u),
      (t[3] = i),
      (t[4] = d))
    : (d = t[4]);
  let f;
  t[5] !== l || t[6] !== r || t[7] !== i || t[8] !== a
    ? ((f = async () =>
        L(`read-mcp-resource`, {
          hostId: l,
          server: r,
          threadId: i,
          uri: a ?? ``,
        }).catch((e) => {
          throw (
            o.error(`Failed to read MCP resource`, {
              safe: { server: r, threadId: i, uri: a },
              sensitive: { error: e },
            }),
            e
          );
        })),
      (t[5] = l),
      (t[6] = r),
      (t[7] = i),
      (t[8] = a),
      (t[9] = f))
    : (f = t[9]);
  let p = c && a != null,
    m;
  return (
    t[10] !== d || t[11] !== f || t[12] !== p
      ? ((m = {
          queryKey: d,
          queryFn: f,
          staleTime: A.FIVE_MINUTES,
          enabled: p,
        }),
        (t[10] = d),
        (t[11] = f),
        (t[12] = p),
        (t[13] = m))
      : (m = t[13]),
    T(m)
  );
}
function B(e) {
  return e.type === `user` ||
    e.type === `system` ||
    e.type === `legacyManagedConfigTomlFromFile`
    ? e.file
    : e.type === `project`
      ? `${e.dotCodexFolder}/config.toml`
      : null;
}
function hn(e) {
  return e == null
    ? !1
    : e.type === `mdm` ||
        e.type === `sessionFlags` ||
        e.type === `legacyManagedConfigTomlFromFile` ||
        e.type === `legacyManagedConfigTomlFromMdm`;
}
function gn(e, t, n = []) {
  let r = e?.[t] ?? null;
  if (r != null) return r;
  for (let r of n) {
    let n = e?.[`${t}.${r}`];
    if (n != null) return n;
  }
  return null;
}
async function _n(e, t) {
  let { layers: n } = await z(e, t, null, !0);
  return vn(n);
}
function vn(e) {
  let t = e?.find((e) => e.name.type === `user`) ?? null;
  if (!t) return null;
  let n = B(t.name);
  return n ? { filePath: n, expectedVersion: t.version } : null;
}
function yn({ layers: e, origins: t, keyPath: n, probeFields: r = [] }) {
  let i = e?.find((e) => e.name.type === `user`) ?? null;
  if (i) {
    let e = B(i.name);
    return e ? { filePath: e, expectedVersion: i.version } : null;
  }
  let a = gn(t, n, r);
  if (a) {
    if (hn(a.name)) return null;
    if (a.name.type === `system`) return vn(e);
    let t = B(a.name);
    return t ? { filePath: t, expectedVersion: a.version } : vn(e);
  }
  let o = e?.[0] ?? null;
  if (o) {
    let e = B(o.name);
    return e ? { filePath: e, expectedVersion: o.version } : null;
  }
  return null;
}
function bn({ origins: e, rootKey: t, childKeys: n, probeFields: r }) {
  let i = {};
  return (
    n.forEach((n) => {
      let a = `${t}.${n}`;
      i[n] =
        e?.[a] ?? r.map((t) => e?.[`${a}.${t}`]).find(Boolean) ?? null ?? null;
    }),
    i
  );
}
function xn(e) {
  if (typeof e != `object` || !e || Array.isArray(e)) return {};
  let t = e,
    n = t.mcp_servers ?? t.mcpServers;
  if (typeof n != `object` || !n || Array.isArray(n)) return {};
  let r = Object.entries(n),
    i = {};
  return (
    r.forEach(([e, t]) => {
      if (typeof t == `object` && t && !Array.isArray(t)) {
        let n = t;
        i[e] = {
          ...n,
          name: typeof n.name == `string` && n.name.length > 0 ? n.name : e,
        };
        return;
      }
      i[e] = { name: e };
    }),
    i
  );
}
var V,
  H,
  Sn,
  Cn,
  wn,
  Tn,
  U,
  En,
  Dn,
  On,
  kn,
  An,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In = e(() => {
    ((V = D()),
      i(),
      S(),
      ye(),
      mt(),
      jt(),
      c(),
      qt(),
      Re(),
      b(),
      oe(),
      ee(),
      (H = [`config`, `mcp`, `servers`]),
      (Sn = [`config`, `user`]),
      (Cn = [`config`, `analytics`]),
      (wn = [`config`, `requirements`]),
      (Tn = [`config`, `effective`]),
      (U = [`config`, `layered-response`]),
      (En = [`config`, `read-response`]),
      (Dn = [`mcp`, `servers`, `status`]),
      (On = [`mcp`, `resource`]),
      (kn = 1e7),
      (An = le(O(), we())),
      (jn = {
        config: {
          model: null,
          review_model: null,
          model_context_window: null,
          model_auto_compact_token_limit: null,
          model_auto_compact_token_limit_scope: null,
          model_provider: null,
          approval_policy: null,
          approvals_reviewer: null,
          sandbox_mode: null,
          sandbox_workspace_write: null,
          forced_chatgpt_workspace_id: null,
          forced_login_method: null,
          web_search: null,
          tools: null,
          profile: null,
          profiles: {},
          instructions: null,
          developer_instructions: null,
          compact_prompt: null,
          model_reasoning_effort: null,
          model_reasoning_summary: null,
          service_tier: null,
          model_verbosity: null,
          analytics: null,
          mcp_servers: {},
          apps: {
            _default: {
              enabled: !0,
              approvals_reviewer: null,
              destructive_enabled: !1,
              open_world_enabled: !1,
              default_tools_approval_mode: null,
              default_tools_enabled: null,
              tools: null,
            },
          },
          desktop: null,
        },
        origins: {},
        layers: null,
      }),
      (Mn = m(d, (e, { queryClient: t }) => ({
        queryKey: [...Sn, e],
        queryFn: async () => {
          try {
            return await z(t, e, null, !0);
          } catch (e) {
            return (
              o.error(`Failed to load config`, {
                safe: {},
                sensitive: { error: e },
              }),
              jn
            );
          }
        },
        staleTime: A.FIVE_MINUTES,
        select: ({ config: e, layers: t }) => ({
          config: e,
          configWriteTarget: vn(t),
        }),
      }))),
      (Nn = m(d, ({ authMethod: e, hostId: t }) =>
        nn({ authMethod: e, hostId: t }),
      )),
      (Pn = m(d, (e) => pn(e, `full`))),
      (Fn = m(d, (e) => pn(e, `toolsAndAuthOnly`))));
  }),
  Ln,
  Rn = e(() => {
    (rt(),
      Ie(),
      Re(),
      (Ln = class {
        constructor(e) {
          this.scope = e;
        }
        addManager(e) {
          let t = e.getHostId();
          (this.scope.set(pt, (e) => (e.includes(t) ? e : [...e, t])),
            this.scope.set(st, t, e),
            this.scope.set(tt, t, ct(e)),
            this.scope.set(Xe, (e) => e + 1));
        }
        addRegistryCallback(e) {
          let t = !1;
          return this.scope.watch((n) => {
            (n.get(Xe), t ? e() : (t = !0));
          });
        }
        deleteManager(e) {
          (this.scope.set(pt, (t) => t.filter((t) => t !== e)),
            this.scope.set(tt, e, null),
            this.scope.set(st, e, null),
            _t(this.scope, {
              error: null,
              hostId: e,
              source: `registry_delete_manager`,
              state: `disconnected`,
            }),
            this.scope.set(Xe, (e) => e + 1));
        }
        getAll() {
          return this.scope.get(ft);
        }
        getDefault() {
          return this.scope.get(Ve);
        }
        getForConversationId(e) {
          let t = this.getMaybeForConversationId(e);
          if (t != null) return t;
          throw Error(
            `No AppServerManager registered for conversationId: ${e}`,
          );
        }
        getForHostId(e) {
          return this.scope.get(pt).includes(e) ? this.scope.get(tt, e) : null;
        }
        getImplForHostId(e) {
          return this.scope.get(pt).includes(e) ? this.scope.get(st, e) : null;
        }
        getForHostIdOrThrow(e) {
          let t = this.getForHostId(e);
          if (t != null) return t;
          throw Error(`No AppServerManager registered for hostId: ${e}`);
        }
        getForHostIdOrThrowWhenDefaultHost(e) {
          let t = this.getForHostId(e);
          if (t != null) return t;
          if (e === `local`)
            throw Error(`No AppServerManager registered for hostId: ${e}`);
          return null;
        }
        getMaybeForConversationId(e) {
          return Oe(this.scope, e);
        }
        notifyRegistryChanged() {
          this.scope.set(Xe, (e) => e + 1);
        }
      }));
  });
function zn() {
  let e = new URL(`/auth/login`, window.location.origin);
  return (
    e.searchParams.set(
      `next`,
      `${window.location.pathname}${window.location.search}${window.location.hash}`,
    ),
    e.toString()
  );
}
function Bn() {
  return Hn() ? (Vn(), !0) : !1;
}
function Vn() {
  Wn || ((Wn = !0), window.location.assign(zn()));
}
function Hn() {
  let e = window.location.hostname.toLowerCase();
  return (
    e === `chatgpt.com` ||
    e.endsWith(`.chatgpt.com`) ||
    e === `chatgpt-staging.com` ||
    e.endsWith(`.chatgpt-staging.com`)
  );
}
var Un,
  Wn,
  Gn = e(() => {
    (ye(),
      (Un = xe([
        `free`,
        `go`,
        `plus`,
        `pro`,
        `prolite`,
        `team`,
        `self_serve_business_usage_based`,
        `business`,
        `enterprise_cbp_usage_based`,
        `enterprise_cbp_automation`,
        `enterprise`,
        `edu`,
        `unknown`,
      ])),
      f({
        accessToken: O(),
        accountId: O(),
        accountUserId: O().nullable().default(null),
        userId: O().nullable(),
        email: O().nullable(),
        planType: Un,
        computeResidency: O().nullable().default(null),
      }),
      (Wn = !1));
  });
async function Kn({ clientId: e }) {
  await W(() =>
    M.safeDelete(`/wham/remote/control/clients/{client_id}`, {
      parameters: { path: { client_id: e } },
    }),
  );
}
async function qn({ clientId: e, manualPairingCode: t }) {
  return W(() =>
    M.safePost(`/wham/remote/control/client/pair`, {
      requestBody: { client_id: e, manual_pairing_code: t },
    }),
  );
}
async function Jn() {
  return (await W(() => M.safeGet(`/wham/remote/control/mfa_requirement`)))
    .requirement;
}
async function Yn() {
  return tr.parse(await M.safeGet(`/accounts/mfa_info`)).mfa_enabled_v2;
}
async function Xn(e = null) {
  let t = await W(() =>
    M.safeGet(`/wham/remote/control/clients`, {
      parameters: { query: { cursor: e, limit: er } },
    }),
  );
  return t.items.some($n) ? !0 : t.cursor == null ? !1 : Xn(t.cursor);
}
async function Zn() {
  return Qn(null);
}
async function Qn(e) {
  let t = await W(() =>
      M.safeGet(`/wham/remote/control/clients`, {
        parameters: { query: { cursor: e, limit: er } },
      }),
    ),
    n = t.items.filter($n);
  return t.cursor == null ? n : n.concat(await Qn(t.cursor));
}
function $n(e) {
  return e.enrollment_status !== `pending_enrollment`;
}
async function W(e) {
  try {
    return await e();
  } catch (e) {
    throw e instanceof ne
      ? e.status === 404
        ? new rr()
        : e.status === 403
          ? new ir(e.message)
          : e.status === 401
            ? (Bn(),
              new nr(
                `ChatGPT auth is required to load remote control environments.`,
              ))
            : Error(`Remote control request failed (${e.status}): ${e.message}`)
      : e;
  }
}
var er,
  tr,
  nr,
  rr,
  ir,
  ar = e(() => {
    (v(),
      ye(),
      Gn(),
      Ne(),
      he(),
      (er = 100),
      (tr = f({ mfa_enabled_v2: ie() })),
      (nr = class extends Error {}),
      (rr = class extends Error {}),
      (ir = class extends Error {}));
  });
async function or(
  e,
  { appServerHostId: t, includeBrowserClients: n = !0 } = {},
) {
  let [r, i] = await Promise.all([
      n && t == null ? Zn() : [],
      e == null ? [] : cr(t ?? `local`, e),
    ]),
    a = new Map();
  for (let e of r) a.set(e.client_id, lr(e));
  for (let e of i) a.set(e.clientId, e);
  return Array.from(a.values());
}
async function sr(e) {
  switch (e.revokeTarget.type) {
    case `browser`:
      await Kn({ clientId: e.clientId });
      return;
    case `app-server`:
      await L(`revoke-remote-control-client-for-host`, {
        hostId: e.revokeTarget.hostId,
        environmentId: e.revokeTarget.environmentId,
        clientId: e.clientId,
      });
      return;
  }
}
async function cr(e, t, n = null) {
  let r = await L(`list-remote-control-clients-for-host`, {
      hostId: e,
      environmentId: t,
      cursor: n,
      limit: dr,
      order: `desc`,
    }),
    i = r.data.map((n) => ur(n, e, t));
  return r.nextCursor == null ? i : i.concat(await cr(e, t, r.nextCursor));
}
function lr(e) {
  return {
    clientId: e.client_id,
    displayName: e.display_name ?? null,
    deviceType: e.device_type ?? null,
    platform: e.platform ?? null,
    deviceModel: e.device_model ?? null,
    lastSeenAt: e.last_seen_at ?? null,
    revokeTarget: { type: `browser` },
  };
}
function ur(e, t, n) {
  return {
    clientId: e.clientId,
    displayName: e.displayName,
    deviceType: e.deviceType,
    platform: e.platform,
    deviceModel: e.deviceModel,
    lastSeenAt:
      e.lastSeenAt == null
        ? null
        : new Date(Number(e.lastSeenAt) * 1e3).toISOString(),
    revokeTarget: { type: `app-server`, environmentId: n, hostId: t },
  };
}
var dr,
  fr = e(() => {
    (ar(), mt(), ot(), (dr = 100));
  });
function pr(e) {
  return ce({
    queryKey: vr,
    queryFn: () => mr(e),
    refetchOnMount: `always`,
    refetchOnWindowFocus: `always`,
    retry: !1,
    staleTime: A.INFINITE,
  });
}
async function mr(e) {
  let t = e.query.snapshot(Sr);
  if (
    (await t.invalidate({ exact: !0, refetchType: `none` }),
    (await t.fetch()) !== `required`)
  )
    return !1;
  let n = e.query.snapshot(Cr);
  return (
    await n.invalidate({ exact: !0, refetchType: `none` }),
    !(await n.fetch())
  );
}
function hr(e) {
  return Number(e) * 1e3;
}
var gr,
  _r,
  vr,
  yr,
  br,
  xr,
  Sr,
  Cr,
  wr,
  Tr,
  Er = e(() => {
    (i(),
      S(),
      ar(),
      Ze(),
      mt(),
      fr(),
      c(),
      Re(),
      nt(),
      oe(),
      (gr = 3e4),
      (_r = 6e4),
      (vr = [`codex-mobile-mfa-setup-required`]),
      (yr = `2055603567`),
      (br = `3936985709`),
      (xr = [`remote-control-server-pairing`]),
      (Sr = g(d, () => ({
        queryKey: [`remote-control-mfa-requirement`],
        queryFn: Jn,
        retry: !1,
        staleTime: gr,
      }))),
      (Cr = g(d, ({ get: e }) => ({
        enabled: e(Sr).data === `required`,
        queryKey: [`remote-control-mfa-enabled`],
        queryFn: Yn,
        refetchOnWindowFocus: `always`,
        staleTime: 0,
      }))),
      (wr = g(d, ({ get: e }) => {
        let t = e(I, `2055603567`),
          n = e(it, `local`)?.environmentId ?? null;
        return {
          enabled: e(lt, `local`) && (!t || n != null),
          queryKey: [`codex-mobile-setup-resume-client`, t, n],
          queryFn: async () =>
            t ? (n == null ? !1 : (await cr(N, n)).length > 0) : Xn(),
          staleTime: 0,
        };
      })),
      (Tr = m(
        d,
        ({ hostId: e, openId: t }, { get: n, scope: r }) => ({
          enabled: n(I, `2055603567`) && !n(I, `3936985709`) && n(lt, e),
          queryKey: [...xr, e, t],
          queryFn: async () => (
            await Ge(r, e),
            L(`start-remote-control-pairing-for-host`, {
              hostId: e,
              manualCode: !0,
            })
          ),
          retry: !1,
          gcTime: 0,
          staleTime: (e) => {
            let t = e.state.data?.expiresAt;
            return t == null ? 0 : Math.max(0, hr(t) - e.state.dataUpdatedAt);
          },
          refetchInterval: (e) => {
            let t = e.state.data?.expiresAt;
            return t == null ||
              e.state.fetchStatus === `fetching` ||
              e.state.error != null
              ? !1
              : Math.max(1, hr(t) - Date.now() - _r);
          },
        }),
        { key: ({ hostId: e, openId: t }) => `${e}:${t}` },
      )));
  });
function Dr({ remoteControlConnections: e }) {
  let t = new Map(),
    n = [];
  for (let r of e) {
    if (r.installationId == null) {
      n.push(r);
      continue;
    }
    let e = t.get(r.installationId);
    (e == null ||
      (e.clientType !== `CODEX_DESKTOP_APP` &&
        r.clientType === `CODEX_DESKTOP_APP`)) &&
      t.set(r.installationId, r);
  }
  return [...t.values(), ...n];
}
function Or({
  addedRemoteControlEnvIds: e,
  oneToOnePairingInAppEnabled: t,
  remoteControlConnections: n,
  remoteSshConnections: r,
  remoteWslConnections: i,
}) {
  return [
    ...r,
    ...i,
    ...kr({
      addedRemoteControlEnvIds: e,
      oneToOnePairingInAppEnabled: t,
      remoteControlConnections: n,
    }),
  ];
}
function kr({
  addedRemoteControlEnvIds: e,
  oneToOnePairingInAppEnabled: t,
  remoteControlConnections: n,
}) {
  return t
    ? Dr({ remoteControlConnections: n })
    : Ar({ addedRemoteControlEnvIds: e, remoteControlConnections: n });
}
function Ar({ addedRemoteControlEnvIds: e, remoteControlConnections: t }) {
  let n = new Set(e),
    r = new Set(
      t.flatMap((e) =>
        n.has(e.envId) && e.installationId != null ? [e.installationId] : [],
      ),
    );
  return Dr({ remoteControlConnections: t }).filter(
    (e) =>
      n.has(e.envId) || (e.installationId != null && r.has(e.installationId)),
  );
}
function jr({ addedRemoteControlEnvIds: e, remoteControlConnections: t }) {
  let n = Ar({ addedRemoteControlEnvIds: e, remoteControlConnections: t }),
    r = new Set(n.map((e) => e.envId)),
    i = new Set(
      n.flatMap((e) => (e.installationId == null ? [] : [e.installationId])),
    );
  return Dr({ remoteControlConnections: t }).filter(
    (e) =>
      !r.has(e.envId) && (e.installationId == null || !i.has(e.installationId)),
  );
}
var Mr = e(() => {}),
  Nr,
  Pr,
  Fr = e(() => {
    (S(),
      v(),
      Ae(),
      c(),
      Ye(),
      nt(),
      Er(),
      Mr(),
      (Nr = a(d, ({ get: e }) => {
        let t = F(e, `remote_ssh_connections`),
          n = F(e, `remote_wsl_connections`);
        if (t != null)
          return Or({
            addedRemoteControlEnvIds: Fe(e, p.ADDED_REMOTE_CONTROL_ENV_IDS),
            oneToOnePairingInAppEnabled: e(I, yr),
            remoteSshConnections: t ?? [],
            remoteWslConnections: n ?? [],
            remoteControlConnections: F(e, `remote_control_connections`) ?? [],
          });
      })),
      (Pr = a(
        d,
        ({ get: e }) =>
          F(e, `remote_ssh_connections`) == null ||
          F(e, `remote_control_connections`) == null,
      )));
  });
function Ir() {
  let e = (0, Br.c)(3),
    { data: t } = h(Mn, j(Ee)),
    n = ut(`4114442250`);
  if (t?.config[`features.remote_connections`] === !0) return !0;
  let r = t?.config.features;
  if (typeof r != `object` || !r || Array.isArray(r)) return n;
  let i;
  return (
    e[0] !== r || e[1] !== n
      ? ((i =
          Object.getOwnPropertyDescriptor(r, `remote_connections`)?.value ===
            !0 || n),
        (e[0] = r),
        (e[1] = n),
        (e[2] = i))
      : (i = e[2]),
    i
  );
}
function Lr() {
  return ut(`1042620455`);
}
function Rr() {
  let e = j(Nr) ?? [];
  return {
    remoteConnections: e,
    enabledRemoteHostIdSet: new Set(e.flatMap(zr)),
  };
}
function zr(e) {
  return e.autoConnect ? [e.hostId] : [];
}
var Br,
  Vr = e(() => {
    ((Br = D()), S(), Ie(), In(), dt(), Fr());
  });
function Hr(e, t) {
  e.set(ai, t);
}
function Ur(e, t) {
  e.set(oi, t);
}
function Wr(e, t) {
  e.set(si, t);
}
function Gr(e, t, n) {
  let r = e.get(yi);
  r[t] !== n && e.set(yi, { ...r, [t]: n });
}
function Kr(e, t) {
  e.set(li, t);
}
function qr(e, t, n = null) {
  (e.get(K) === t && e.get(bi) === n) || (e.set(K, t), e.set(bi, n));
}
function Jr(e, t, n) {
  e.set(di, { ...e.get(_i), [t]: n });
}
function Yr(e, t, n) {
  e.set(G, t, n);
}
function Xr(e, t) {
  e.set(ui, t);
}
function Zr(e, t, n, r) {
  (r.forEach((n) => {
    Yr(e, `codex:${n}`, t[n] !== !0);
  }),
    e.set(vi, n));
}
function Qr(e, t) {
  (Yr(e, `codex:${t}`, e.get(G, `codex:${t}`) === !1), e.set(vi, []));
}
function $r(e, { importedProjectRoots: t }) {
  if (t.length === 0) return;
  let [n, ...r] = t;
  (Yr(e, `codex:${n}`, !0),
    r.forEach((t) => {
      Yr(e, `codex:${t}`, !1);
    }),
    e.set(vi, []));
}
function ei(e, t, n) {
  let r = e.get(q);
  if (n === !!r[t]) return;
  if (n) {
    e.set(q, { ...r, [t]: !0 });
    return;
  }
  let i = { ...r };
  (delete i[t], e.set(q, i));
}
var ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  G,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  K,
  bi,
  q,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di = e(() => {
    (S(),
      c(),
      He(),
      $e(),
      (ti = `codex`),
      (ni = `project`),
      (ri = { chats: !1, cloud: !1, pinned: !1, threads: !1 }),
      (ii = { chatgpt: 0, codex: 0, work: 0 }),
      (ai = P(`sidebar-organize-mode-v1`, void 0)),
      (oi = P(`sidebar-keep-projects-in-recent-v1`, !0)),
      (si = P(`projectless-sidebar-chats-first-v1`, !1)),
      (ci = P(`electron-sidebar-mode-v1`, ti)),
      (li = P(`thread-sort-key`, De)),
      (G = qe((e) => `sidebar-project-expanded-v1-${e}`, null)),
      (ui = P(`sidebar-project-list-expanded-v1`, !1)),
      (di = P(`sidebar-collapsed-sections-v1`, ri)),
      (fi = a(d, ({ get: e }) => e(ai) ?? ni)),
      (pi = a(d, ({ get: e }) => e(oi) ?? !0)),
      (mi = a(d, ({ get: e }) => e(si) ?? !1)),
      (hi = a(d, ({ get: e }) => e(ci) ?? ti)),
      (gi = a(d, ({ get: e }) => e(li) ?? `updated_at`)),
      (_i = a(d, ({ get: e }) => {
        let t = e(di);
        return t == null ? ri : { ...ri, ...t };
      })),
      (vi = y(d, [])),
      (yi = y(d, ii)),
      (K = y(d, null)),
      (bi = y(d, null)),
      (q = y(d, {})),
      (xi = k(d, (e, { get: t }) => t(K) === e)),
      (Si = k(d, ({ locationId: e, threadKey: t }, { get: n }) => {
        if (n(K) !== t) return !1;
        let r = n(bi);
        return r == null || e == null || r === e;
      })),
      (Ci = k(d, (e, { get: t }) => t(G, `codex:${e}`) === !1)),
      (wi = k(d, (e, { get: t }) =>
        Object.fromEntries(
          e.filter((e) => t(G, `codex:${e}`) === !1).map((e) => [e, !0]),
        ),
      )),
      (Ti = k(d, (e, { get: t }) => t(q)[e] === !0)),
      (Ei = k(d, (e, { get: t }) => t(_i)[e])));
  });
function Oi({ appServerRegistry: e, enabledRemoteHostIds: t }) {
  let n = e.getDefault().getHostId();
  return e
    .getAll()
    .filter((e) => (e.getHostId() === n ? !0 : t.has(e.getHostId())));
}
function ki(e, t) {
  let n = t.getDefault().getHostId();
  return t.getAll().filter((t) => {
    let r = t.getHostId();
    if (r === n) return !0;
    let { error: i, state: a } = ke(e, r);
    return a === `connected` || i?.code === `login-required`;
  });
}
function Ai(e, t) {
  return L(`refresh-recent-conversations-for-host`, {
    hostId: e,
    sortKey: gt(t),
  })
    .then(() => !0)
    .catch(
      (n) => (
        o.warning(`recent_conversations_refresh_failed`, {
          safe: { sortKey: t },
          sensitive: { error: n, hostId: e },
        }),
        !1
      ),
    );
}
function ji(e) {
  return () => {
    for (let t of e) t();
  };
}
function Mi({ appServerRegistry: e, onStoreChange: t, subscribeToManager: n }) {
  let r = new Map(),
    i = () => {
      let i = e.getAll(),
        a = new Set(i.map((e) => e.getHostId()));
      for (let [e, { unsubscribe: t }] of r) a.has(e) || (t(), r.delete(e));
      for (let e of i) {
        let i = e.getHostId(),
          a = r.get(i);
        a?.manager !== e &&
          (a?.unsubscribe(), r.set(i, { manager: e, unsubscribe: n(e, t) }));
      }
    };
  return (
    i(),
    ji([
      e.addRegistryCallback(() => {
        (i(), t());
      }),
      () => {
        for (let { unsubscribe: e } of r.values()) e();
      },
    ])
  );
}
function Ni(e, t) {
  return Mi({
    appServerRegistry: e,
    onStoreChange: t,
    subscribeToManager: (e, t) =>
      ji([
        e.addAnyConversationCallback(t),
        e.addAnyConversationMetaCallback(t),
      ]),
  });
}
function Pi({ appServerRegistry: e, enabledRemoteHostIds: t, sortKey: n }) {
  return Oi({ appServerRegistry: e, enabledRemoteHostIds: t })
    .flatMap((e) => e.getRecentConversations())
    .sort((e, t) => {
      switch (n) {
        case `created_at`:
          return t.createdAt - e.createdAt;
        case `updated_at`:
          return (t.recencyAt ?? t.updatedAt) - (e.recencyAt ?? e.updatedAt);
      }
    });
}
async function Fi({
  scope: e,
  appServerRegistry: t,
  enabledRemoteHostIds: n,
  sortKey: r,
}) {
  if (
    !(await Promise.all(ki(e, t).map((e) => Ai(e.getHostId(), r)))).includes(!0)
  )
    throw Error(`Failed to refresh recent conversations`);
  return Pi({ appServerRegistry: t, enabledRemoteHostIds: n, sortKey: r });
}
function Ii({
  scope: e,
  appServerRegistry: t,
  sortKey: n,
  refreshesInFlightHostIds: r,
}) {
  for (let i of ki(e, t)) {
    let e = i.getHostId();
    i.hasFetchedRecentConversations ||
      r.has(e) ||
      (r.add(e),
      Ai(e, n).finally(() => {
        r.delete(e);
      }));
  }
}
function Li(e) {
  return new Set(JSON.parse(e));
}
function Ri(e) {
  return JSON.stringify(Array.from(e).sort((e, t) => e.localeCompare(t)));
}
function zi() {
  let e = (0, J.c)(5),
    t = _(d),
    n;
  e[0] === t ? (n = e[1]) : ((n = () => new Ln(t)), (e[0] = t), (e[1] = n));
  let [r] = (0, Y.useState)(n),
    i,
    a;
  return (
    e[2] === r
      ? ((i = e[3]), (a = e[4]))
      : ((i = (e) => r.addRegistryCallback(e)),
        (a = () => r),
        (e[2] = r),
        (e[3] = i),
        (e[4] = a)),
    (0, Y.useSyncExternalStore)(i, a)
  );
}
function Bi(e) {
  let t = (0, J.c)(5),
    n = zi(),
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = (e) => n.addRegistryCallback(e)), (t[0] = n), (t[1] = r));
  let i;
  return (
    t[2] !== n || t[3] !== e
      ? ((i = () => n.getForHostId(e)), (t[2] = n), (t[3] = e), (t[4] = i))
      : (i = t[4]),
    (0, Y.useSyncExternalStore)(r, i)
  );
}
function Vi(e) {
  let t = Bi(e);
  if (t == null) throw Error(`AppServerManager for host ${e} not found`);
  return t;
}
function Hi(e) {
  let t = (0, J.c)(6),
    n = h(Je, e),
    r = zi(),
    i;
  t[0] !== r || t[1] !== e
    ? ((i = (t) => (e == null ? r.addRegistryCallback(t) : Ni(r, t))),
      (t[0] = r),
      (t[1] = e),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] !== r || t[4] !== e
    ? ((o = () => (e == null ? r.getDefault() : r.getForConversationId(e))),
      (t[3] = r),
      (t[4] = e),
      (t[5] = o))
    : (o = t[5]);
  let s = (0, Y.useSyncExternalStore)(a, o);
  return n ?? s;
}
function Ui(e) {
  let t = (0, J.c)(6),
    n = h(Je, e),
    r = zi(),
    i;
  t[0] !== r || t[1] !== e
    ? ((i = (t) => (e == null ? Wi : Ni(r, t))),
      (t[0] = r),
      (t[1] = e),
      (t[2] = i))
    : (i = t[2]);
  let a = i,
    o;
  t[3] !== r || t[4] !== e
    ? ((o = () => (e == null ? null : r.getMaybeForConversationId(e))),
      (t[3] = r),
      (t[4] = e),
      (t[5] = o))
    : (o = t[5]);
  let s = (0, Y.useSyncExternalStore)(a, o);
  return n ?? s;
}
function Wi() {}
function Gi(e) {
  let t = Vi(N);
  return Ui(e) ?? t;
}
function Ki() {
  return Ji(`recent-conversations`);
}
function qi() {
  return Ji(`recent-conversations-meta`);
}
function Ji(e) {
  let t = (0, J.c)(23),
    n = _(d),
    r = zi(),
    { enabledRemoteHostIdSet: i } = Rr(),
    a;
  t[0] === i ? (a = t[1]) : ((a = Ri(i)), (t[0] = i), (t[1] = a));
  let o = a,
    s = h(I, `12346831`),
    c = j(gi),
    l = s ? De : c,
    u = E(),
    f;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = new Set()), (t[2] = f))
    : (f = t[2]);
  let p = (0, Y.useRef)(f),
    m,
    g;
  (t[3] !== r ||
  t[4] !== o ||
  t[5] !== u ||
  t[6] !== e ||
  t[7] !== n ||
  t[8] !== l
    ? ((m = () => {
        let t = () => {
          let t = Li(o);
          (u.setQueryData(
            [e, l, o],
            Pi({ appServerRegistry: r, enabledRemoteHostIds: t, sortKey: l }),
          ),
            Ii({
              scope: n,
              appServerRegistry: r,
              sortKey: l,
              refreshesInFlightHostIds: p.current,
            }));
        };
        return (
          t(),
          Mi({
            appServerRegistry: r,
            onStoreChange: t,
            subscribeToManager: (t, n) => {
              switch (e) {
                case `recent-conversations`:
                  return t.addAnyConversationCallback(n);
                case `recent-conversations-meta`:
                  return t.addAnyConversationMetaCallback(n);
              }
            },
          })
        );
      }),
      (g = [r, o, u, e, n, l]),
      (t[3] = r),
      (t[4] = o),
      (t[5] = u),
      (t[6] = e),
      (t[7] = n),
      (t[8] = l),
      (t[9] = m),
      (t[10] = g))
    : ((m = t[9]), (g = t[10])),
    (0, Y.useEffect)(m, g));
  let v;
  t[11] !== o || t[12] !== e || t[13] !== l
    ? ((v = [e, l, o]), (t[11] = o), (t[12] = e), (t[13] = l), (t[14] = v))
    : (v = t[14]);
  let y;
  t[15] !== r || t[16] !== o || t[17] !== n || t[18] !== l
    ? ((y = async () =>
        Fi({
          scope: n,
          appServerRegistry: r,
          enabledRemoteHostIds: Li(o),
          sortKey: l,
        })),
      (t[15] = r),
      (t[16] = o),
      (t[17] = n),
      (t[18] = l),
      (t[19] = y))
    : (y = t[19]);
  let b;
  return (
    t[20] !== v || t[21] !== y
      ? ((b = {
          queryKey: v,
          staleTime: A.INFINITE,
          structuralSharing: Yi,
          queryFn: y,
        }),
        (t[20] = v),
        (t[21] = y),
        (t[22] = b))
      : (b = t[22]),
    T(b)
  );
}
function Yi(e, t) {
  return Array.isArray(e) &&
    Array.isArray(t) &&
    e.length === t.length &&
    e.every((e, n) => e === t[n])
    ? e
    : t;
}
function Xi(e) {
  let t = (0, J.c)(3),
    n = Vi(e === void 0 ? N : e),
    r,
    i;
  return (
    t[0] === n
      ? ((r = t[1]), (i = t[2]))
      : ((r = (e) => n.addConfigNoticeCallback(e)),
        (i = () => n.getConfigNotices()),
        (t[0] = n),
        (t[1] = r),
        (t[2] = i)),
    (0, Y.useSyncExternalStore)(r, i)
  );
}
var J,
  Y,
  Zi = e(() => {
    ((J = D()),
      i(),
      S(),
      (Y = t(w(), 1)),
      Rn(),
      Ie(),
      mt(),
      Vr(),
      c(),
      Re(),
      Di(),
      nt(),
      He(),
      b(),
      oe());
  });
function Qi() {
  let e = (0, $i.c)(3),
    t = j(ht),
    n;
  return (
    e[0] !== t.data || e[1] !== t.isLoading
      ? ((n = { data: t.data, isLoading: t.isLoading }),
        (e[0] = t.data),
        (e[1] = t.isLoading),
        (e[2] = n))
      : (n = e[2]),
    n
  );
}
var $i,
  ea = e(() => {
    (($i = D()), S(), Ke());
  }),
  ta = n((e, t) => {
    function n(e) {
      return function (t, n, r) {
        for (var i = -1, a = Object(t), o = r(t), s = o.length; s--; ) {
          var c = o[e ? s : ++i];
          if (n(a[c], c, a) === !1) break;
        }
        return t;
      };
    }
    t.exports = n;
  }),
  na = n((e, t) => {
    t.exports = ta()();
  }),
  ra = n((e, t) => {
    var n = na(),
      i = r();
    function a(e, t) {
      return e && n(e, t, i);
    }
    t.exports = a;
  }),
  ia = n((e, t) => {
    var n = re();
    function r(e, t) {
      return function (r, i) {
        if (r == null) return r;
        if (!n(r)) return e(r, i);
        for (
          var a = r.length, o = t ? a : -1, s = Object(r);
          (t ? o-- : ++o < a) && i(s[o], o, s) !== !1;

        );
        return r;
      };
    }
    t.exports = r;
  }),
  aa = n((e, t) => {
    var n = ra();
    t.exports = ia()(n);
  }),
  oa = n((e, t) => {
    var n = aa(),
      r = re();
    function i(e, t) {
      var i = -1,
        a = r(e) ? Array(e.length) : [];
      return (
        n(e, function (e, n, r) {
          a[++i] = t(e, n, r);
        }),
        a
      );
    }
    t.exports = i;
  }),
  sa = n((e, t) => {
    function n(e, t) {
      var n = e.length;
      for (e.sort(t); n--; ) e[n] = e[n].value;
      return e;
    }
    t.exports = n;
  }),
  ca = n((e, t) => {
    var n = Me();
    function r(e, t) {
      if (e !== t) {
        var r = e !== void 0,
          i = e === null,
          a = e === e,
          o = n(e),
          s = t !== void 0,
          c = t === null,
          l = t === t,
          u = n(t);
        if (
          (!c && !u && !o && e > t) ||
          (o && s && l && !c && !u) ||
          (i && s && l) ||
          (!r && l) ||
          !a
        )
          return 1;
        if (
          (!i && !o && !u && e < t) ||
          (u && r && a && !i && !o) ||
          (c && r && a) ||
          (!s && a) ||
          !l
        )
          return -1;
      }
      return 0;
    }
    t.exports = r;
  }),
  la = n((e, t) => {
    var n = ca();
    function r(e, t, r) {
      for (
        var i = -1, a = e.criteria, o = t.criteria, s = a.length, c = r.length;
        ++i < s;

      ) {
        var l = n(a[i], o[i]);
        if (l) return i >= c ? l : l * (r[i] == `desc` ? -1 : 1);
      }
      return e.index - t.index;
    }
    t.exports = r;
  }),
  ua = n((e, t) => {
    var n = Ue(),
      r = Te(),
      i = Pe(),
      a = oa(),
      o = sa(),
      s = me(),
      c = la(),
      l = ze(),
      u = se();
    function d(e, t, d) {
      t = t.length
        ? n(t, function (e) {
            return u(e)
              ? function (t) {
                  return r(t, e.length === 1 ? e[0] : e);
                }
              : e;
          })
        : [l];
      var f = -1;
      return (
        (t = n(t, s(i))),
        o(
          a(e, function (e, r, i) {
            return {
              criteria: n(t, function (t) {
                return t(e);
              }),
              index: ++f,
              value: e,
            };
          }),
          function (e, t) {
            return c(e, t, d);
          },
        )
      );
    }
    t.exports = d;
  });
function da() {
  let e = (0, pa.c)(7),
    { data: t, isLoading: n } = Qi(),
    r,
    i;
  if (e[0] !== t?.platform) {
    let n = at(t?.platform);
    ((r = n), (i = fa(n)), (e[0] = t?.platform), (e[1] = r), (e[2] = i));
  } else ((r = e[1]), (i = e[2]));
  let a;
  return (
    e[3] !== n || e[4] !== r || e[5] !== i
      ? ((a = { platform: r, modifierSymbol: i, isLoading: n }),
        (e[3] = n),
        (e[4] = r),
        (e[5] = i),
        (e[6] = a))
      : (a = e[6]),
    a
  );
}
function fa(e) {
  return e === `macOS` ? `⌘` : `^`;
}
var pa,
  ma = e(() => {
    ((pa = D()), ea(), Qe());
  }),
  ha = n((e, t) => {
    var n = s();
    t.exports = (function () {
      try {
        var e = n(Object, `defineProperty`);
        return (e({}, ``, {}), e);
      } catch {}
    })();
  });
function ga(e, t) {
  let n = t.trim();
  if (n.length === 0) return 0;
  let r = _a(n),
    i = xa(n) ? ba(e) : e,
    a = r.matchingDegree(i);
  if (a === za) return 0;
  let o = a * 10 - e.length;
  return o <= 0 ? 1 : o;
}
function _a(e) {
  let t = xa(e),
    n = t ? va(e) : `*${e}`,
    r = ya(e);
  return new Ha(
    new Ua(n, `IGNORE_CASE`, Q.join(``)),
    t && e !== r ? new Ua(r, `IGNORE_CASE`, Q.join(``)) : null,
  );
}
function va(e) {
  let t = `*${e}`;
  for (let e of Q) t = t.split(e).join(`*${Ba}*`);
  return t;
}
function ya(e) {
  let t = -1;
  for (let n of Q) {
    let r = e.lastIndexOf(n);
    r >= 0 && r < e.length - 1 && (t = Math.max(t, r));
  }
  return e.slice(t + 1);
}
function ba(e) {
  let t = e;
  for (let e of Q) t = t.split(e).join(Ba);
  return t;
}
function xa(e) {
  for (let t of Q) if (e.includes(t)) return !0;
  return !1;
}
function Sa(e, t) {
  return t.length === 0 ? e : t[0].startOffset === 0 ? e + Va : e;
}
function Ca(e) {
  return (
    e.trim().length === 0 ||
    e === `_` ||
    e === `-` ||
    e === `:` ||
    e === `+` ||
    e === `.` ||
    e === `/` ||
    e === `\\`
  );
}
function wa(e, t) {
  return t < e.length && Z(e[t]) ? t + 1 : Ta(e, t);
}
function Ta(e, t) {
  for (let n = t + 1; n <= e.length; n += 1) {
    if (n >= e.length) return e.length + 1;
    if (X(e, n)) return n;
  }
  return e.length + 1;
}
function X(e, t) {
  if (t < 0 || t >= e.length) return !1;
  let n = e[t];
  if (!La(n)) return !1;
  if (t === 0) return !0;
  let r = e[t - 1];
  return !!(!La(r) || (Fa(n) && Ia(r)) || (Z(n) && !Z(r)));
}
function Ea(e, t, n, r, i) {
  if (!i) {
    for (let i = n; i < r; i += 1) if (e[i] === t) return i;
    return -1;
  }
  let a = t.toLowerCase(),
    o = t.toUpperCase();
  for (let t = n; t < r; t += 1) {
    let n = e[t];
    if (n === a || n === o) return t;
  }
  return -1;
}
function Da(e) {
  return e === ` ` || e === `*`;
}
function Oa(e, t, n, r) {
  for (let i = n; i < r; i += 1) if (t.includes(e[i])) return i;
  return -1;
}
function ka(e, t, n, r) {
  for (let i = n; i < r; i += 1) if (e[i] === t) return i;
  return -1;
}
function Aa(e, t, n, r) {
  let i = e.toLowerCase(),
    a = t.toLowerCase(),
    o = i.indexOf(a, n);
  return o < 0 || o + t.length > r ? -1 : o;
}
function ja(e, t, n, r) {
  return t + n > e.length
    ? !1
    : e.slice(t, t + n).toLowerCase() === r.toLowerCase();
}
function Ma(e) {
  let t = ``;
  for (let n of e) n !== `*` && (t += n);
  return t;
}
function Na(e, t, n) {
  if (e.length === 0) return [{ startOffset: t, endOffset: t + n }];
  let r = e[e.length - 1];
  return (
    r.startOffset === t + n
      ? (e[e.length - 1] = { startOffset: t, endOffset: r.endOffset })
      : e.push({ startOffset: t, endOffset: t + n }),
    e
  );
}
function Pa(e) {
  return e.length === 1 && e.charCodeAt(0) <= 127;
}
function Fa(e) {
  return e.toUpperCase() === e && e.toLowerCase() !== e;
}
function Ia(e) {
  return e.toLowerCase() === e && e.toUpperCase() !== e;
}
function Z(e) {
  return e >= `0` && e <= `9`;
}
function La(e) {
  return /[a-z0-9]/i.test(e);
}
var Ra,
  za,
  Ba,
  Q,
  Va,
  Ha,
  Ua,
  Wa = e(() => {
    ((Ra = 100),
      (za = -2147483648),
      (Ba = `\0`),
      (Q = [`/`, `\\`]),
      (Va = 1e4),
      (Ha = class {
        mainMatcher;
        fallbackMatcher;
        constructor(e, t) {
          ((this.mainMatcher = e), (this.fallbackMatcher = t));
        }
        matchingDegree(e) {
          let t = this.mainMatcher.match(e);
          if (t != null)
            return Sa(this.mainMatcher.matchingDegree(e, !1, t), t);
          if (this.fallbackMatcher == null) return za;
          let n = this.fallbackMatcher.match(e);
          return n == null
            ? za
            : Sa(this.fallbackMatcher.matchingDegree(e, !1, n), n);
        }
      }),
      (Ua = class {
        myPattern;
        isLowerCase;
        isUpperCase;
        isWordSeparator;
        toUpperCase;
        toLowerCase;
        hardSeparators;
        matchingMode;
        mixedCase;
        hasSeparators;
        hasDots;
        meaningfulCharacters;
        minNameLength;
        constructor(e, t, n) {
          let r = e.endsWith(`* `) ? e.slice(0, -2) : e;
          ((this.myPattern = Array.from(r)),
            (this.isLowerCase = Array.from(
              { length: this.myPattern.length },
              () => !1,
            )),
            (this.isUpperCase = Array.from(
              { length: this.myPattern.length },
              () => !1,
            )),
            (this.isWordSeparator = Array.from(
              { length: this.myPattern.length },
              () => !1,
            )),
            (this.toUpperCase = Array.from(
              { length: this.myPattern.length },
              () => ``,
            )),
            (this.toLowerCase = Array.from(
              { length: this.myPattern.length },
              () => ``,
            )),
            (this.hardSeparators = Array.from(n)),
            (this.matchingMode = t));
          let i = [],
            a = !1,
            o = !1,
            s = !1,
            c = !1,
            l = !1;
          for (let e = 0; e < this.myPattern.length; e += 1) {
            let t = this.myPattern[e],
              n = Ca(t),
              r = Fa(t),
              u = Ia(t),
              d = t.toUpperCase(),
              f = t.toLowerCase();
            (u && (o = !0),
              t === `.` && (c = !0),
              a && r && (s = !0),
              Da(t) || ((a = !0), i.push(f), i.push(d)),
              a && n && (l = !0),
              (this.isWordSeparator[e] = n),
              (this.isUpperCase[e] = r),
              (this.isLowerCase[e] = u),
              (this.toUpperCase[e] = d),
              (this.toLowerCase[e] = f));
          }
          ((this.hasDots = c),
            (this.mixedCase = o && s),
            (this.hasSeparators = l),
            (this.meaningfulCharacters = i),
            (this.minNameLength = i.length / 2));
        }
        get pattern() {
          return this.myPattern.join(``);
        }
        matchingDegree(e, t = !1, n = this.match(e)) {
          if (n == null) return za;
          if (n.length === 0) return 0;
          let r = n[0],
            i = r.startOffset === 0,
            a = i && t,
            o = 0,
            s = -1,
            c = 0,
            l = 0,
            u = !1;
          for (let t of n)
            for (let n = t.startOffset; n < t.endOffset; n += 1) {
              let i = n === t.startOffset && t !== r,
                d = !1;
              for (; l <= n; )
                (l === n ? (d = !0) : i && (c += 1), (l = wa(e, l)));
              let f = e[n];
              if (
                ((s = Ea(this.myPattern, f, s + 1, this.myPattern.length, !0)),
                s < 0)
              )
                break;
              (d && (u = f === this.myPattern[s] && this.isUpperCase[s]),
                (o += this.evaluateCaseMatching(a, s, u, n, i, d, f)));
            }
          let d = r.startOffset,
            f = Oa(e, this.hardSeparators, 0, d) >= 0,
            p = d === 0 || (X(e, d) && !X(e, d - 1)),
            m = n[n.length - 1].endOffset === e.length;
          return (
            (p ? 1e3 : 0) +
            o -
            n.length +
            -c * 10 +
            (f ? 0 : 2) +
            (i ? 1 : 0) +
            (m ? 1 : 0)
          );
        }
        match(e) {
          if (e.length < this.minNameLength) return null;
          if (this.myPattern.length > Ra) return this.matchBySubstring(e);
          let t = 0;
          for (
            let n = 0;
            n < e.length && t < this.meaningfulCharacters.length;
            n += 1
          ) {
            let r = e[n];
            (r === this.meaningfulCharacters[t] ||
              r === this.meaningfulCharacters[t + 1]) &&
              (t += 2);
          }
          if (t < this.minNameLength * 2) return null;
          let n = this.matchWildcards(e, 0, 0);
          return n == null ? null : n.reverse();
        }
        evaluateCaseMatching(e, t, n, r, i, a, o) {
          return i && a && this.isLowerCase[t]
            ? -10
            : o === this.myPattern[t]
              ? this.isUpperCase[t]
                ? 50
                : r === 0 && e
                  ? 150
                  : a
                    ? 1
                    : 0
              : a || (this.isLowerCase[t] && n)
                ? -1
                : 0;
        }
        matchBySubstring(e) {
          let t = this.isPatternChar(0, `*`),
            n = Ma(this.myPattern);
          if (e.length < n.length) return null;
          if (t) {
            let t = Aa(e, n, 0, e.length);
            return t >= 0
              ? [{ startOffset: t, endOffset: t + n.length }]
              : null;
          }
          return ja(e, 0, n.length, n)
            ? [{ startOffset: 0, endOffset: n.length }]
            : null;
        }
        matchWildcards(e, t, n) {
          let r = t;
          if (n < 0) return null;
          if (!this.isWildcard(r))
            return r === this.myPattern.length
              ? []
              : this.matchFragment(e, r, n);
          do r += 1;
          while (this.isWildcard(r));
          if (r === this.myPattern.length) {
            if (
              this.isTrailingSpacePattern() &&
              n !== e.length &&
              (r < 2 || !this.isUpperCaseOrDigit(r - 2))
            ) {
              let t = e.indexOf(` `, n);
              return t >= 0 ? [{ startOffset: t, endOffset: t + 1 }] : null;
            }
            return [];
          }
          return this.matchSkippingWords(
            e,
            r,
            this.findNextPatternCharOccurrence(e, n, r),
            !0,
          );
        }
        isTrailingSpacePattern() {
          return this.isPatternChar(this.myPattern.length - 1, ` `);
        }
        isUpperCaseOrDigit(e) {
          return this.isUpperCase[e] || Z(this.myPattern[e]);
        }
        matchSkippingWords(e, t, n, r) {
          let i = n,
            a = 0;
          for (; i >= 0; ) {
            let n = this.seemsLikeFragmentStart(e, t, i)
              ? this.maxMatchingFragment(e, t, i)
              : 0;
            if (
              n > a ||
              (i + n === e.length && this.isTrailingSpacePattern())
            ) {
              this.isMiddleMatch(e, t, i) || (a = n);
              let r = this.matchInsideFragment(e, t, i, n);
              if (r != null) return r;
            }
            let o = this.findNextPatternCharOccurrence(e, i + 1, t);
            i = r ? o : this.checkForSpecialChars(e, i + 1, o, t);
          }
          return null;
        }
        findNextPatternCharOccurrence(e, t, n) {
          return !this.isPatternChar(n - 1, `*`) && !this.isWordSeparator[n]
            ? this.indexOfWordStart(e, n, t)
            : this.indexOfIgnoreCase(e, t, n);
        }
        checkForSpecialChars(e, t, n, r) {
          return n < 0 ||
            (!this.hasSeparators &&
              !this.mixedCase &&
              Oa(e, this.hardSeparators, t, n) !== -1) ||
            (this.hasDots &&
              !this.isPatternChar(r - 1, `.`) &&
              ka(e, `.`, t, n) !== -1)
            ? -1
            : n;
        }
        seemsLikeFragmentStart(e, t, n) {
          return !this.isUpperCase[t] || Fa(e[n]) || X(e, n)
            ? !0
            : !this.mixedCase && this.matchingMode !== `MATCH_CASE`;
        }
        charEquals(e, t, n, r) {
          return e === n
            ? !0
            : r
              ? this.toLowerCase[t] === n || this.toUpperCase[t] === n
              : !1;
        }
        matchFragment(e, t, n) {
          let r = this.maxMatchingFragment(e, t, n);
          return r === 0 ? null : this.matchInsideFragment(e, t, n, r);
        }
        maxMatchingFragment(e, t, n) {
          if (!this.isFirstCharMatching(e, n, t)) return 0;
          let r = 1,
            i = this.matchingMode !== `MATCH_CASE`;
          for (; n + r < e.length && t + r < this.myPattern.length; ) {
            let a = e[n + r];
            if (!this.charEquals(this.myPattern[t + r], t + r, a, i)) {
              if (this.isSkippingDigitBetweenPatternDigits(t + r, a)) return 0;
              break;
            }
            r += 1;
          }
          return r;
        }
        isSkippingDigitBetweenPatternDigits(e, t) {
          return Z(this.myPattern[e]) && Z(this.myPattern[e - 1]) && Z(t);
        }
        matchInsideFragment(e, t, n, r) {
          let i = this.isMiddleMatch(e, t, n) ? 3 : 1;
          return (
            this.improveCamelHumps(e, t, n, r, i) ??
            this.findLongestMatchingPrefix(e, t, n, r, i)
          );
        }
        isMiddleMatch(e, t, n) {
          return !this.isPatternChar(t - 1, `*`) ||
            this.isWildcard(t + 1) ||
            !La(e[n])
            ? !1
            : !X(e, n);
        }
        findLongestMatchingPrefix(e, t, n, r, i) {
          if (t + r >= this.myPattern.length)
            return [{ startOffset: n, endOffset: n + r }];
          let a = r;
          for (; a >= i || (a > 0 && this.isWildcard(t + a)); ) {
            let r = null;
            if (this.isWildcard(t + a))
              r = this.matchWildcards(e, t + a, n + a);
            else {
              let i = this.findNextPatternCharOccurrence(e, n + a + 1, t + a);
              ((i = this.checkForSpecialChars(e, n + a, i, t + a)),
                i >= 0 && (r = this.matchSkippingWords(e, t + a, i, !1)));
            }
            if (r != null) return Na(r, n, a);
            --a;
          }
          return null;
        }
        improveCamelHumps(e, t, n, r, i) {
          for (let a = i; a < r; a += 1)
            if (this.isUppercasePatternVsLowercaseNameChar(e, t + a, n + a)) {
              let r = this.findUppercaseMatchFurther(e, t + a, n + a);
              if (r != null) return Na(r, n, a);
            }
          return null;
        }
        isUppercasePatternVsLowercaseNameChar(e, t, n) {
          return this.isUpperCase[t] && this.myPattern[t] !== e[n];
        }
        findUppercaseMatchFurther(e, t, n) {
          let r = this.indexOfWordStart(e, t, n);
          return this.matchWildcards(e, t, r);
        }
        isFirstCharMatching(e, t, n) {
          if (t >= e.length) return !1;
          let r = this.matchingMode !== `MATCH_CASE`,
            i = this.myPattern[n];
          return this.charEquals(i, n, e[t], r)
            ? this.matchingMode === `FIRST_LETTER` &&
              (n === 0 || (n === 1 && this.isWildcard(0))) &&
              this.hasCase(n)
              ? this.isUpperCase[n] === Fa(e[0])
              : !0
            : !1;
        }
        hasCase(e) {
          return this.isUpperCase[e] || this.isLowerCase[e];
        }
        isWildcard(e) {
          return e >= 0 && e < this.myPattern.length && Da(this.myPattern[e]);
        }
        isPatternChar(e, t) {
          return e < 0 || e >= this.myPattern.length
            ? !1
            : this.myPattern[e] === t;
        }
        indexOfWordStart(e, t, n) {
          let r = this.myPattern[t];
          if (
            n >= e.length ||
            (this.mixedCase &&
              this.isLowerCase[t] &&
              !(t > 0 && this.isWordSeparator[t - 1]))
          )
            return -1;
          let i = n,
            a = !La(r);
          for (;;) {
            if (((i = this.indexOfIgnoreCase(e, i, t)), i < 0)) return -1;
            if (a || X(e, i)) return i;
            i += 1;
          }
        }
        indexOfIgnoreCase(e, t, n) {
          let r = this.myPattern[n];
          if (Pa(r)) {
            let r = this.toUpperCase[n],
              i = this.toLowerCase[n];
            for (let n = t; n < e.length; n += 1) {
              let t = e[n];
              if (t === r || t === i) return n;
            }
            return -1;
          }
          return ka(e, r, t, e.length);
        }
      }));
  }),
  Ga = n((e, t) => {
    var n = u(),
      r = Se(),
      i = se(),
      a = n ? n.isConcatSpreadable : void 0;
    function o(e) {
      return i(e) || r(e) || !!(a && e && e[a]);
    }
    t.exports = o;
  }),
  Ka = n((e, t) => {
    var n = ae(),
      r = Ga();
    function i(e, t, a, o, s) {
      var c = -1,
        l = e.length;
      for (a ||= r, s ||= []; ++c < l; ) {
        var u = e[c];
        t > 0 && a(u)
          ? t > 1
            ? i(u, t - 1, a, o, s)
            : n(s, u)
          : o || (s[s.length] = u);
      }
      return s;
    }
    t.exports = i;
  }),
  qa = n((e, t) => {
    function n(e, t, n) {
      switch (n.length) {
        case 0:
          return e.call(t);
        case 1:
          return e.call(t, n[0]);
        case 2:
          return e.call(t, n[0], n[1]);
        case 3:
          return e.call(t, n[0], n[1], n[2]);
      }
      return e.apply(t, n);
    }
    t.exports = n;
  }),
  Ja = n((e, t) => {
    var n = qa(),
      r = Math.max;
    function i(e, t, i) {
      return (
        (t = r(t === void 0 ? e.length - 1 : t, 0)),
        function () {
          for (
            var a = arguments, o = -1, s = r(a.length - t, 0), c = Array(s);
            ++o < s;

          )
            c[o] = a[t + o];
          o = -1;
          for (var l = Array(t + 1); ++o < t; ) l[o] = a[o];
          return ((l[t] = i(c)), n(e, this, l));
        }
      );
    }
    t.exports = i;
  }),
  Ya = n((e, t) => {
    function n(e) {
      return function () {
        return e;
      };
    }
    t.exports = n;
  }),
  Xa = n((e, t) => {
    var n = Ya(),
      r = ha(),
      i = ze();
    t.exports = r
      ? function (e, t) {
          return r(e, `toString`, {
            configurable: !0,
            enumerable: !1,
            value: n(t),
            writable: !0,
          });
        }
      : i;
  }),
  Za = n((e, t) => {
    var n = 800,
      r = 16,
      i = Date.now;
    function a(e) {
      var t = 0,
        a = 0;
      return function () {
        var o = i(),
          s = r - (o - a);
        if (((a = o), s > 0)) {
          if (++t >= n) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
      };
    }
    t.exports = a;
  }),
  Qa = n((e, t) => {
    var n = Xa();
    t.exports = Za()(n);
  }),
  $a = n((e, t) => {
    var n = ze(),
      r = Ja(),
      i = Qa();
    function a(e, t) {
      return i(r(e, t, n), e + ``);
    }
    t.exports = a;
  }),
  eo = n((e, t) => {
    var n = ue(),
      r = re(),
      i = te(),
      a = x();
    function o(e, t, o) {
      if (!a(o)) return !1;
      var s = typeof t;
      return (s == `number` ? r(o) && i(t, o.length) : s == `string` && t in o)
        ? n(o[t], e)
        : !1;
    }
    t.exports = o;
  }),
  to = n((e, t) => {
    var n = Ka(),
      r = ua(),
      i = $a(),
      a = eo();
    t.exports = i(function (e, t) {
      if (e == null) return [];
      var i = t.length;
      return (
        i > 1 && a(e, t[0], t[1])
          ? (t = [])
          : i > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]),
        r(e, n(t, 1), [])
      );
    });
  });
function no(e) {
  let t = (0, co.c)(14),
    { hostId: n, includeDirectories: r, onFiles: i, query: a, roots: o } = e,
    s = r === void 0 ? !1 : r,
    { platform: c } = da(),
    l;
  t[0] !== s || t[1] !== i || t[2] !== c || t[3] !== o
    ? ((l = (e) => {
        o != null &&
          i?.({
            files: io({
              files: e.files,
              includeDirectories: s,
              isWindowsHost: c === `windows`,
              query: e.query,
              roots: o,
            }),
            query: e.query,
          });
      }),
      (t[0] = s),
      (t[1] = i),
      (t[2] = c),
      (t[3] = o),
      (t[4] = l))
    : (l = t[4]);
  let { response: u, isLoading: d } = fo(n, o, a, St(l)),
    f = a.trim(),
    p = u != null && f.length > 0 ? u : null,
    m;
  bb0: {
    if (p == null || o == null) {
      m = null;
      break bb0;
    }
    let e = c === `windows`,
      n;
    (t[5] !== s ||
    t[6] !== o ||
    t[7] !== e ||
    t[8] !== p.files ||
    t[9] !== p.query
      ? ((n = io({
          files: p.files,
          includeDirectories: s,
          isWindowsHost: e,
          query: p.query,
          roots: o,
        })),
        (t[5] = s),
        (t[6] = o),
        (t[7] = e),
        (t[8] = p.files),
        (t[9] = p.query),
        (t[10] = n))
      : (n = t[10]),
      (m = n));
  }
  let h = m,
    g;
  return (
    t[11] !== h || t[12] !== d
      ? ((g = { files: h, isLoading: d }),
        (t[11] = h),
        (t[12] = d),
        (t[13] = g))
      : (g = t[13]),
    g
  );
}
function ro(e, t) {
  return (
    (e.match_type === `file` || (t && e.match_type === `directory`)) &&
    !e.path.split(/[\\/]+/).some((e) => uo.has(e))
  );
}
function io({
  files: e,
  includeDirectories: t,
  isWindowsHost: n,
  query: r,
  roots: i,
}) {
  return oo(
    e.filter((e) => ro(e, t)).map((e) => ao(e, i.length > 1, n)),
    r,
  );
}
function ao({ file_name: e, match_type: t, path: n, root: r }, i, a) {
  let o = Le({ root: r, relativePath: n, includeWorkspaceRootLabel: i }),
    s = o.lastIndexOf(`/`);
  return {
    label: e,
    matchType: t,
    path: i ? je(r, n, a) : o,
    relativePathWithoutFileName: o.substring(0, s),
    fsPath: je(r, n, a),
  };
}
function oo(e, t) {
  let n = t.trim();
  return n.length === 0
    ? e
    : (0, lo.default)(
        e.map((e, t) => ({ file: e, score: ga(e.label, n), index: t })),
        [(e) => -e.score, (e) => e.file.label, (e) => e.index],
      ).map((e) => e.file);
}
function so(e) {
  o.warning(`Failed to close fuzzy file search session`, {
    safe: {},
    sensitive: { error: e },
  });
}
var co,
  lo,
  $,
  uo,
  fo,
  po = e(() => {
    ((co = D()),
      (lo = t(to(), 1)),
      ($ = t(w(), 1)),
      Zi(),
      Wa(),
      ma(),
      b(),
      Be(),
      Et(),
      (uo = new Set([
        `.git`,
        `.hg`,
        `.next`,
        `.pnpm-store`,
        `.svn`,
        `.turbo`,
        `.yarn`,
        `build`,
        `coverage`,
        `dist`,
        `node_modules`,
      ])),
      (fo = (e, t, n, r) => {
        let i = (0, co.c)(24),
          a = Vi(e),
          [s, c] = (0, $.useState)(null),
          [l, u] = (0, $.useState)(!1),
          d = (0, $.useRef)(null),
          f = (0, $.useRef)(null),
          p = t != null && t.length > 0,
          m;
        i[0] === t
          ? (m = i[1])
          : ((m = t?.join(`\0`) ?? ``), (i[0] = t), (i[1] = m));
        let h = m,
          g;
        i[2] !== a || i[3] !== r || i[4] !== t
          ? ((g = async () => {
              if (t == null || t.length === 0) return null;
              if (d.current != null) return d.current;
              let e = {};
              f.current = e;
              let n = a
                .createFuzzyFileSearchSession({
                  roots: t,
                  onUpdated: (t) => {
                    if (f.current !== e) return;
                    let n = { query: t.query, files: t.files };
                    (c(n), r(n), u(!0));
                  },
                  onCompleted: () => {
                    f.current === e && u(!1);
                  },
                })
                .catch((t) => {
                  throw (
                    d.current === n && (d.current = null),
                    f.current === e && (f.current = null),
                    t
                  );
                });
              return ((d.current = n), n);
            }),
            (i[2] = a),
            (i[3] = r),
            (i[4] = t),
            (i[5] = g))
          : (g = i[5]);
        let _ = (0, $.useEffectEvent)(g),
          v;
        i[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((v = async () => {
              let e = d.current;
              e != null &&
                ((d.current = null),
                (f.current = null),
                await (await e).stop());
            }),
            (i[6] = v))
          : (v = i[6]);
        let y = (0, $.useEffectEvent)(v),
          b;
        i[7] === y
          ? (b = i[8])
          : ((b = () => (
              c(null),
              u(!1),
              () => {
                y().catch(so);
              }
            )),
            (i[7] = y),
            (i[8] = b));
        let x;
        (i[9] !== a || i[10] !== h
          ? ((x = [a, h]), (i[9] = a), (i[10] = h), (i[11] = x))
          : (x = i[11]),
          (0, $.useEffect)(b, x));
        let S;
        i[12] !== _ || i[13] !== p || i[14] !== n
          ? ((S = () => {
              let e = !1;
              return (
                (async () => {
                  if (!p || n.length === 0) {
                    (c(null), u(!1));
                    return;
                  }
                  try {
                    u(!0);
                    let t = await _();
                    if (e || t == null) return;
                    await t.update(n);
                  } catch (t) {
                    let n = t;
                    e ||
                      (o.error(`Error fetching fuzzy file search`, {
                        safe: {},
                        sensitive: { error: n },
                      }),
                      u(!1));
                  }
                })(),
                () => {
                  e = !0;
                }
              );
            }),
            (i[12] = _),
            (i[13] = p),
            (i[14] = n),
            (i[15] = S))
          : (S = i[15]);
        let C;
        (i[16] !== p || i[17] !== a || i[18] !== n || i[19] !== h
          ? ((C = [p, a, n, h]),
            (i[16] = p),
            (i[17] = a),
            (i[18] = n),
            (i[19] = h),
            (i[20] = C))
          : (C = i[20]),
          (0, $.useEffect)(S, C));
        let w;
        return (
          i[21] !== l || i[22] !== s
            ? ((w = { response: s, isLoading: l }),
              (i[21] = l),
              (i[22] = s),
              (i[23] = w))
            : (w = i[23]),
          w
        );
      }));
  });
export {
  Ei as $,
  mn as $t,
  wi as A,
  Gn as At,
  Wr as B,
  Nn as Bt,
  Bi as C,
  Tr as Ct,
  qi as D,
  nr as Dt,
  Ki as E,
  sr as Et,
  vi as F,
  U as Ft,
  Gr as G,
  hn as Gt,
  $r as H,
  _n as Ht,
  qr as I,
  kn as It,
  hi as J,
  gn as Jt,
  Kr as K,
  Fn as Kt,
  Jr as L,
  H as Lt,
  Di as M,
  Rn as Mt,
  pi as N,
  wn as Nt,
  K as O,
  qn as Ot,
  mi as P,
  Tn as Pt,
  yi as Q,
  Jt as Qt,
  ei as R,
  Dn as Rt,
  Gi as S,
  St as Sn,
  Sr as St,
  zi as T,
  or as Tt,
  Hr as U,
  B as Ut,
  Zr as V,
  z as Vt,
  Xr as W,
  In as Wt,
  ai as X,
  rn as Xt,
  fi as Y,
  Xt as Yt,
  ui as Z,
  Qt as Zt,
  ea as _,
  Vt as _n,
  wr as _t,
  $a as a,
  zt as an,
  Vr as at,
  Xi as b,
  Ot as bn,
  mr as bt,
  Ka as c,
  Ft as cn,
  Lr as ct,
  ha as d,
  qt as dn,
  Nr as dt,
  cn as en,
  xi as et,
  ma as f,
  Rt as fn,
  jr as ft,
  na as g,
  Gt as gn,
  br as gt,
  aa as h,
  Wt as hn,
  yr as ht,
  eo as i,
  R as in,
  Qr as it,
  q as j,
  Ln as jt,
  bi as k,
  ar as kt,
  Wa as l,
  It as ln,
  Fr as lt,
  ua as m,
  Ut as mn,
  Mr as mt,
  no as n,
  Mn as nn,
  Ti as nt,
  Qa as o,
  Lt as on,
  Rr as ot,
  da as p,
  Nt as pn,
  kr as pt,
  Ci as q,
  Pn as qt,
  to as r,
  Bt as rn,
  gi as rt,
  Ja as s,
  Pt as sn,
  Ir as st,
  po as t,
  on as tn,
  Si as tt,
  ga as u,
  Kt as un,
  Pr as ut,
  Qi as v,
  Ht as vn,
  pr as vt,
  Vi as w,
  fr as wt,
  Hi as x,
  Et as xn,
  Cr as xt,
  Zi as y,
  jt as yn,
  Er as yt,
  Ur as z,
  Sn as zt,
};
//# sourceMappingURL=app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js.map
