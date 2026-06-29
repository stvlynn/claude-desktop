import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Go as i,
  Jo as a,
  Ko as o,
  Vo as s,
  _c as c,
  gc as l,
  lc as u,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Xo as d,
  Zo as f,
  ot as p,
  st as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Ca as h,
  Da as g,
  Dm as _,
  Dn as v,
  Do as y,
  Em as b,
  Eo as x,
  Nn as S,
  Om as C,
  On as w,
  Pn as T,
  Ta as E,
  Tm as D,
  To as O,
  _a as k,
  ba as ee,
  dp as A,
  fp as j,
  gp as te,
  is as M,
  ls as N,
  mp as P,
  ns as F,
  us as I,
  va as ne,
  wo as L,
  ya as re,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Ea as R,
  Fa as z,
  Ho as ie,
  Iy as B,
  La as V,
  Lo as ae,
  Ro as oe,
  Vo as se,
  Vy as ce,
  Wo as le,
  xa as H,
  zo as U,
  zy as W,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Fn as ue,
  Fo as de,
  Ho as fe,
  In as pe,
  Io as G,
  Ko as K,
  Mo as me,
  Po as he,
  X as ge,
  Z as q,
  ad as _e,
  id as ve,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  c as ye,
  i as be,
} from "./app-initial~app-main~appgen-settings-page~appgen-page~appgen-library-page-hS325QiU.js";
import {
  J,
  d as Y,
  f as X,
  q as xe,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import { n as Se, t as Ce } from "./toolbar-breadcrumb-Z_0PUIuH.js";
import { n as we, t as Te } from "./appgen-share-dialog-BQA5qyJU.js";
import { n as Ee, t as De } from "./settings-empty-state-DuD1OXBp.js";
function Oe(e) {
  return {
    environmentVariables: e.entries
      .filter((e) => !e.is_secret)
      .map(({ key: e, value: t }) => ({ key: e, value: t ?? `` })),
    secrets: e.entries
      .filter((e) => e.is_secret)
      .map(({ key: e }) => ({
        key: e,
        keyInputDisabledWhileValue: Ne,
        previousKey: e,
        value: Ne,
      })),
  };
}
function ke(e, t) {
  let n = [
    ...t.environmentVariables.map(({ key: e }) => e),
    ...t.secrets.map(({ key: e }) => e),
  ];
  if (new Set(n).size !== n.length) return null;
  let r = new Set([
    ...t.environmentVariables.map(({ key: e }) => e),
    ...t.secrets.map((e) => (Ae(e) ? e.previousKey : e.key)),
  ]);
  return {
    remove: e.entries.filter(({ key: e }) => !r.has(e)).map(({ key: e }) => e),
    set_values: [
      ...t.environmentVariables.filter((t) => je(e, t)).map((e) => Me(e, !1)),
      ...t.secrets.filter((e) => !Ae(e)).map((e) => Me(e, !0)),
    ],
  };
}
function Ae(e) {
  return e.previousKey != null && e.value === Ne;
}
function je(e, t) {
  let n = e.entries.find((e) => e.key === t.key);
  return n == null || n.is_secret || n.value !== t.value;
}
function Me(e, t) {
  return { is_secret: t, key: e.key, type: `envvar`, value: e.value };
}
var Ne,
  Pe = e(() => {
    Ne = `<REDACTED>`;
  });
function Fe(e, t, n = !1) {
  let r = e ?? t,
    i = r.trim();
  return {
    isInvalid: e != null && i.length === 0,
    title: r,
    update: e != null && i.length > 0 && (i !== t || n) ? { title: i } : null,
  };
}
async function Ie({
  environmentUpdate: e,
  titleUpdate: t,
  updateEnvironment: n,
  updateTitle: r,
}) {
  let [i, a] = await Promise.allSettled([
    t == null ? void 0 : r(t),
    e == null ? void 0 : n(e),
  ]);
  return {
    environmentSaved: a.status === `fulfilled`,
    titleSaved: i.status === `fulfilled`,
  };
}
var Le = e(() => {});
function Re(e, t, n) {
  let r = ze(n),
    i = r[0];
  return i == null
    ? null
    : [...e.map((e, n) => (n === t ? { ...e, ...i } : e)), ...r.slice(1)];
}
function ze(e) {
  let t = [];
  for (let n of e.split(/\r?\n/)) {
    let e = n.trim();
    if (e.length === 0 || e.startsWith(`#`) || e.startsWith(`;`)) continue;
    e.startsWith(`export `) && (e = e.slice(7).trim());
    let r = Be(e, `#`, (t) => e[t - 1]?.trim() === ``);
    if ((r !== -1 && (e = e.slice(0, r).trim()), e.length === 0)) continue;
    let i = Be(e, `=`);
    if (i === -1) continue;
    let a = e.slice(0, i).trim();
    a.length !== 0 && t.push({ key: a, value: Ve(e.slice(i + 1).trim()) });
  }
  return t;
}
function Be(e, t, n = () => !0) {
  let r = !1,
    i = !1,
    a = !1;
  for (let o = 0; o < e.length; o += 1) {
    let s = e[o];
    if (r) {
      r = !1;
      continue;
    }
    if (s === `\\`) {
      r = !0;
      continue;
    }
    if (s === `'` && !i) {
      a = !a;
      continue;
    }
    if (s === `"` && !a) {
      i = !i;
      continue;
    }
    if (s === t && !a && !i && n(o)) return o;
  }
  return -1;
}
function Ve(e) {
  return (e.startsWith(`"`) && e.endsWith(`"`)) ||
    (e.startsWith(`'`) && e.endsWith(`'`))
    ? e.slice(1, -1)
    : e;
}
var He = e(() => {});
function Ue(e) {
  let t = (0, Ke.c)(20),
    {
      addButtonLabel: n,
      disabled: r,
      entries: i,
      onChange: a,
      subtitle: o,
      title: s,
      valueInputType: c,
    } = e,
    l = r === void 0 ? !1 : r,
    u;
  t[0] !== i || t[1] !== a
    ? ((u = () => {
        a([...i, { key: ``, value: `` }]);
      }),
      (t[0] = i),
      (t[1] = a),
      (t[2] = u))
    : (u = t[2]);
  let d;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((d = (0, Z.jsx)(A, { className: `icon-xs` })), (t[3] = d))
    : (d = t[3]);
  let f;
  t[4] !== n || t[5] !== l || t[6] !== u
    ? ((f = (0, Z.jsxs)(D, {
        color: `outline`,
        disabled: l,
        size: `toolbar`,
        onClick: u,
        children: [d, n],
      })),
      (t[4] = n),
      (t[5] = l),
      (t[6] = u),
      (t[7] = f))
    : (f = t[7]);
  let p;
  t[8] !== o || t[9] !== f || t[10] !== s
    ? ((p = (0, Z.jsx)(Y.Header, {
        actions: f,
        subtitle: o,
        title: s,
        titleGap: `none`,
      })),
      (t[8] = o),
      (t[9] = f),
      (t[10] = s),
      (t[11] = p))
    : (p = t[11]);
  let m;
  t[12] !== l || t[13] !== i || t[14] !== a || t[15] !== c
    ? ((m = (0, Z.jsx)(Y.Content, {
        children: (0, Z.jsx)(xe, {
          children:
            i.length === 0
              ? (0, Z.jsx)(De, {
                  children: (0, Z.jsx)(W, {
                    id: `envEntrySettingsGroup.empty`,
                    defaultMessage: `Nothing yet`,
                    description: `Empty state for an environment entry settings section`,
                  }),
                })
              : (0, Z.jsx)(`div`, {
                  className: `flex flex-col gap-2 p-4`,
                  children: i.map((e, t) =>
                    (0, Z.jsx)(
                      We,
                      {
                        disabled: l,
                        entry: e,
                        valueInputType: c,
                        onChange: (e) => {
                          a(i.map((n, r) => (r === t ? e : n)));
                        },
                        onKeyPaste: (e) => {
                          let n = Re(
                            i,
                            t,
                            e.clipboardData.getData(`text/plain`),
                          );
                          n != null && (e.preventDefault(), a(n));
                        },
                        onRemove: () => {
                          a(i.filter((e, n) => n !== t));
                        },
                      },
                      t,
                    ),
                  ),
                }),
        }),
      })),
      (t[12] = l),
      (t[13] = i),
      (t[14] = a),
      (t[15] = c),
      (t[16] = m))
    : (m = t[16]);
  let h;
  return (
    t[17] !== p || t[18] !== m
      ? ((h = (0, Z.jsxs)(Y, { className: `gap-2`, children: [p, m] })),
        (t[17] = p),
        (t[18] = m),
        (t[19] = h))
      : (h = t[19]),
    h
  );
}
function We(e) {
  let t = (0, Ke.c)(39),
    {
      disabled: n,
      entry: r,
      onChange: i,
      onKeyPaste: a,
      onRemove: o,
      valueInputType: s,
    } = e,
    c = ce(),
    l;
  t[0] === c
    ? (l = t[1])
    : ((l = c.formatMessage({
        id: `envEntrySettingsGroup.key.ariaLabel`,
        defaultMessage: `Key`,
        description: `Accessible label for an environment variable or secret key input`,
      })),
      (t[0] = c),
      (t[1] = l));
  let u = n || r.keyInputDisabledWhileValue === r.value,
    d;
  t[2] === c
    ? (d = t[3])
    : ((d = c.formatMessage({
        id: `envEntrySettingsGroup.key.placeholder`,
        defaultMessage: `Key`,
        description: `Placeholder for an environment variable or secret key input`,
      })),
      (t[2] = c),
      (t[3] = d));
  let f;
  t[4] !== r || t[5] !== i
    ? ((f = (e) => {
        i({ ...r, key: e.target.value });
      }),
      (t[4] = r),
      (t[5] = i),
      (t[6] = f))
    : (f = t[6]);
  let p;
  t[7] !== r.key ||
  t[8] !== a ||
  t[9] !== l ||
  t[10] !== u ||
  t[11] !== d ||
  t[12] !== f
    ? ((p = (0, Z.jsx)(Ge, {
        "aria-label": l,
        disabled: u,
        placeholder: d,
        value: r.key,
        onPaste: a,
        onChange: f,
      })),
      (t[7] = r.key),
      (t[8] = a),
      (t[9] = l),
      (t[10] = u),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] === c
    ? (m = t[15])
    : ((m = c.formatMessage({
        id: `envEntrySettingsGroup.value.ariaLabel`,
        defaultMessage: `Value`,
        description: `Accessible label for an environment variable or secret value input`,
      })),
      (t[14] = c),
      (t[15] = m));
  let h;
  t[16] === c
    ? (h = t[17])
    : ((h = c.formatMessage({
        id: `envEntrySettingsGroup.value.placeholder`,
        defaultMessage: `Value`,
        description: `Placeholder for an environment variable or secret value input`,
      })),
      (t[16] = c),
      (t[17] = h));
  let g;
  t[18] !== r || t[19] !== i
    ? ((g = (e) => {
        i({ ...r, value: e.target.value });
      }),
      (t[18] = r),
      (t[19] = i),
      (t[20] = g))
    : (g = t[20]);
  let _;
  t[21] !== n ||
  t[22] !== r.value ||
  t[23] !== m ||
  t[24] !== h ||
  t[25] !== g ||
  t[26] !== s
    ? ((_ = (0, Z.jsx)(Ge, {
        "aria-label": m,
        disabled: n,
        placeholder: h,
        type: s,
        value: r.value,
        onChange: g,
      })),
      (t[21] = n),
      (t[22] = r.value),
      (t[23] = m),
      (t[24] = h),
      (t[25] = g),
      (t[26] = s),
      (t[27] = _))
    : (_ = t[27]);
  let v;
  t[28] === c
    ? (v = t[29])
    : ((v = c.formatMessage({
        id: `envEntrySettingsGroup.remove.ariaLabel`,
        defaultMessage: `Remove entry`,
        description: `Accessible label for removing an environment variable or secret row`,
      })),
      (t[28] = c),
      (t[29] = v));
  let y;
  t[30] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsx)(ve, { className: `icon-2xs` })), (t[30] = y))
    : (y = t[30]);
  let b;
  t[31] !== n || t[32] !== o || t[33] !== v
    ? ((b = (0, Z.jsx)(D, {
        "aria-label": v,
        color: `ghost`,
        disabled: n,
        size: `icon`,
        onClick: o,
        children: y,
      })),
      (t[31] = n),
      (t[32] = o),
      (t[33] = v),
      (t[34] = b))
    : (b = t[34]);
  let x;
  return (
    t[35] !== b || t[36] !== p || t[37] !== _
      ? ((x = (0, Z.jsxs)(`div`, {
          className: `grid grid-cols-[minmax(0,1fr)_minmax(0,1fr)_auto] items-center gap-2`,
          children: [p, _, b],
        })),
        (t[35] = b),
        (t[36] = p),
        (t[37] = _),
        (t[38] = x))
      : (x = t[38]),
    x
  );
}
function Ge(e) {
  let t = (0, Ke.c)(2),
    n;
  return (
    t[0] === e
      ? (n = t[1])
      : ((n = (0, Z.jsx)(`input`, {
          className: `h-token-button-composer w-full min-w-0 rounded-md border border-token-input-border bg-token-input-background px-2 font-mono text-sm text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
          ...e,
        })),
        (t[0] = e),
        (t[1] = n)),
    n
  );
}
var Ke,
  Z,
  qe = e(() => {
    ((Ke = l()), B(), b(), j(), _e(), Ee(), X(), J(), He(), (Z = u()));
  });
function Je() {
  let e = (0, Q.c)(3),
    { projectId: t } = V();
  if (t == null) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(R, { replace: !0, to: `/sites` })), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let n;
  return (
    e[1] === t
      ? (n = e[2])
      : ((n = (0, $.jsx)(Ye, { projectId: t })), (e[1] = t), (e[2] = n)),
    n
  );
}
function Ye(e) {
  let t = (0, Q.c)(22),
    { projectId: n } = e,
    { data: r, isError: a, isLoading: o } = i(U, n),
    { data: s, isError: c, isLoading: l } = i(oe, n),
    u = r?.current_live_url,
    f;
  t[0] === u ? (f = t[1]) : ((f = d(u)), (t[0] = u), (t[1] = f));
  let m = f,
    h = r?.title,
    g;
  t[2] !== u || t[3] !== h
    ? ((g = (0, $.jsx)(Xe, { liveUrl: u, siteTitle: h })),
      (t[2] = u),
      (t[3] = h),
      (t[4] = g))
    : (g = t[4]);
  let _ = g,
    v;
  t[5] === _
    ? (v = t[6])
    : ((v = (0, $.jsx)(N, { extension: !0, children: _ })),
      (t[5] = _),
      (t[6] = v));
  let y;
  t[7] === _
    ? (y = t[8])
    : ((y = (0, $.jsx)(N, {
        browser: !0,
        chromeExtension: !0,
        electron: !0,
        children: (0, $.jsx)(p.Header, { children: _ }),
      })),
      (t[7] = _),
      (t[8] = y));
  let b;
  t[9] !== s ||
  t[10] !== c ||
  t[11] !== l ||
  t[12] !== a ||
  t[13] !== o ||
  t[14] !== n ||
  t[15] !== r ||
  t[16] !== m
    ? ((b = (0, $.jsx)(`div`, {
        className: `scrollbar-stable flex min-h-0 flex-1 overflow-y-auto p-panel`,
        children: (0, $.jsx)(`div`, {
          className: `mx-auto flex w-full max-w-3xl flex-col gap-[var(--padding-panel)]`,
          children:
            o || l
              ? (0, $.jsx)(tt, {})
              : a || c || r == null || s == null
                ? (0, $.jsx)(nt, {})
                : (0, $.jsxs)($.Fragment, {
                    children: [
                      (0, $.jsxs)(`div`, {
                        className: `flex min-w-0 flex-col gap-1`,
                        children: [
                          (0, $.jsx)(`div`, {
                            className: `truncate text-[22px] leading-7 font-medium text-token-text-primary`,
                            children: r.title,
                          }),
                          m == null
                            ? null
                            : (0, $.jsx)(`div`, {
                                className: `truncate text-xs text-token-text-tertiary`,
                                children: m,
                              }),
                        ],
                      }),
                      (0, $.jsx)(
                        Ze,
                        {
                          accessPolicy: r.access_policy,
                          environment: s,
                          projectId: n,
                          siteSlug: r.slug,
                          siteTitle: r.title,
                        },
                        n,
                      ),
                    ],
                  }),
        }),
      })),
      (t[9] = s),
      (t[10] = c),
      (t[11] = l),
      (t[12] = a),
      (t[13] = o),
      (t[14] = n),
      (t[15] = r),
      (t[16] = m),
      (t[17] = b))
    : (b = t[17]);
  let x;
  return (
    t[18] !== v || t[19] !== y || t[20] !== b
      ? ((x = (0, $.jsxs)(`div`, {
          className: `flex h-full min-h-0 flex-col bg-token-main-surface-primary`,
          children: [v, y, b],
        })),
        (t[18] = v),
        (t[19] = y),
        (t[20] = b),
        (t[21] = x))
      : (x = t[21]),
    x
  );
}
function Xe(e) {
  let t = (0, Q.c)(13),
    { liveUrl: n, siteTitle: r } = e,
    i = z(),
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(W, {
        id: `appgenSettings.header.sites`,
        defaultMessage: `Sites`,
        description: `Breadcrumb link back to the Sites Library page`,
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === i
    ? (o = t[2])
    : ((o = [
        {
          id: `sites`,
          label: a,
          onClick: () => {
            i(be);
          },
        },
      ]),
      (t[1] = i),
      (t[2] = o));
  let s;
  t[3] !== r || t[4] !== o
    ? ((s = (0, $.jsx)(Ce, { ancestors: o, current: r })),
      (t[3] = r),
      (t[4] = o),
      (t[5] = s))
    : (s = t[5]);
  let c;
  t[6] === n
    ? (c = t[7])
    : ((c =
        n == null
          ? null
          : (0, $.jsxs)(D, {
              color: `outline`,
              size: `toolbar`,
              onClick: (e) => {
                M({ event: e, href: n, initiator: `mcp_app_resource` });
              },
              children: [
                (0, $.jsx)(S, {
                  className: `icon-xs`,
                  ExternalIcon: v,
                  href: n,
                }),
                (0, $.jsx)(W, {
                  id: `appgenSettings.visit`,
                  defaultMessage: `Visit`,
                  description: `Button label for opening a live site externally`,
                }),
              ],
            })),
      (t[6] = n),
      (t[7] = c));
  let l;
  t[8] === c
    ? (l = t[9])
    : ((l = (0, $.jsx)(`div`, {
        className: `flex items-center justify-end`,
        children: c,
      })),
      (t[8] = c),
      (t[9] = l));
  let u;
  return (
    t[10] !== s || t[11] !== l
      ? ((u = (0, $.jsxs)(`div`, {
          className: `draggable grid w-full min-w-0 grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 electron:h-toolbar extension:py-row-y`,
          children: [s, l],
        })),
        (t[10] = s),
        (t[11] = l),
        (t[12] = u))
      : (u = t[12]),
    u
  );
}
function Ze(e) {
  let t = (0, Q.c)(88),
    {
      accessPolicy: n,
      environment: a,
      projectId: s,
      siteSlug: c,
      siteTitle: l,
    } = e,
    u = o(r),
    d = i(se, s),
    f = i(ie, s),
    p = ce(),
    [m, h] = (0, it.useState)(null),
    [_, v] = (0, it.useState)(null),
    [y, b] = (0, it.useState)(!1),
    x;
  t[0] !== a || t[1] !== m?.draft
    ? ((x = m?.draft ?? Oe(a)), (t[0] = a), (t[1] = m?.draft), (t[2] = x))
    : (x = t[2]);
  let S = x,
    C;
  t[3] === m
    ? (C = t[4])
    : ((C = m == null ? null : ke(m.baseEnvironment, m.draft)),
      (t[3] = m),
      (t[4] = C));
  let w = C,
    T;
  t[5] !== _ || t[6] !== y || t[7] !== l
    ? ((T = Fe(_, l, y)), (t[5] = _), (t[6] = y), (t[7] = l), (t[8] = T))
    : (T = t[8]);
  let { isInvalid: E, title: O, update: k } = T,
    ee = m != null && w == null,
    A = d.isPending || f.isPending,
    j = A || E || ee || (k == null && w == null),
    M;
  t[9] === a
    ? (M = t[10])
    : ((M = function (e) {
        h((t) => {
          let n = t?.baseEnvironment ?? a,
            r = Oe(n),
            i = e(t?.draft ?? r);
          return (0, rt.default)(i, r)
            ? null
            : { baseEnvironment: n, draft: i };
        });
      }),
      (t[9] = a),
      (t[10] = M));
  let N = M,
    P;
  t[11] !== w ||
  t[12] !== p ||
  t[13] !== j ||
  t[14] !== u ||
  t[15] !== k ||
  t[16] !== d.mutateAsync ||
  t[17] !== f
    ? ((P = (e) => {
        (e.preventDefault(),
          !j &&
            Ie({
              environmentUpdate: w,
              titleUpdate: k,
              updateEnvironment: d.mutateAsync,
              updateTitle: f.mutateAsync,
            }).then((e) => {
              let { environmentSaved: t, titleSaved: n } = e;
              (n ? (v(null), b(!1)) : b(!0),
                t && h(null),
                (!n || !t) &&
                  u.get(te).danger(
                    p.formatMessage({
                      id: `appgenSettings.save.error`,
                      defaultMessage: `Unable to save site settings`,
                      description: `Error toast shown when saving site settings fails`,
                    }),
                  ));
            }));
      }),
      (t[11] = w),
      (t[12] = p),
      (t[13] = j),
      (t[14] = u),
      (t[15] = k),
      (t[16] = d.mutateAsync),
      (t[17] = f),
      (t[18] = P))
    : (P = t[18]);
  let F;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(Y.Header, {
        title: (0, $.jsx)(W, {
          id: `appgenSettings.general.title`,
          defaultMessage: `General`,
          description: `Section heading for general Site information on the Site settings page`,
        }),
      })),
      (t[19] = F))
    : (F = t[19]);
  let I, ne;
  t[20] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(W, {
        id: `appgenSettings.general.title.label`,
        defaultMessage: `Title`,
        description: `Short label for the editable Site title field on the Site settings page`,
      })),
      (ne = (0, $.jsx)(W, {
        id: `appgenSettings.general.title.description`,
        defaultMessage: `Name for your site`,
        description: `Help text for the editable Site title field on the Site settings page`,
      })),
      (t[20] = I),
      (t[21] = ne))
    : ((I = t[20]), (ne = t[21]));
  let L;
  t[22] === p
    ? (L = t[23])
    : ((L = p.formatMessage({
        id: `appgenSettings.general.title.ariaLabel`,
        defaultMessage: `Site title`,
        description: `Accessible label for the Site title text input on the Site settings page`,
      })),
      (t[22] = p),
      (t[23] = L));
  let re = E ? at : void 0,
    R;
  t[24] === l
    ? (R = t[25])
    : ((R = (e) => {
        (b(!1), v(e.target.value === l ? null : e.target.value));
      }),
      (t[24] = l),
      (t[25] = R));
  let z;
  t[26] !== _ || t[27] !== y || t[28] !== l
    ? ((z = () => {
        !y && _?.trim() === l && v(null);
      }),
      (t[26] = _),
      (t[27] = y),
      (t[28] = l),
      (t[29] = z))
    : (z = t[29]);
  let B;
  t[30] !== E ||
  t[31] !== A ||
  t[32] !== re ||
  t[33] !== R ||
  t[34] !== z ||
  t[35] !== L ||
  t[36] !== O
    ? ((B = (0, $.jsxs)(Y, {
        children: [
          F,
          (0, $.jsx)(Y.Content, {
            children: (0, $.jsx)(xe, {
              children: (0, $.jsx)(ue, {
                className: `max-sm:flex-col max-sm:items-stretch`,
                label: I,
                description: ne,
                control: (0, $.jsx)(`input`, {
                  "aria-label": L,
                  "aria-describedby": re,
                  "aria-invalid": E,
                  className: `w-[320px] max-w-full cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-input-foreground outline-none focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
                  disabled: A,
                  maxLength: 100,
                  type: `text`,
                  value: O,
                  onChange: R,
                  onBlur: z,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[30] = E),
      (t[31] = A),
      (t[32] = re),
      (t[33] = R),
      (t[34] = z),
      (t[35] = L),
      (t[36] = O),
      (t[37] = B))
    : (B = t[37]);
  let V;
  t[38] !== n || t[39] !== s
    ? ((V =
        n == null ? null : (0, $.jsx)(Qe, { accessPolicy: n, projectId: s })),
      (t[38] = n),
      (t[39] = s),
      (t[40] = V))
    : (V = t[40]);
  let ae;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ae = (0, $.jsx)(W, {
        id: `appgenSettings.environmentVariables.add`,
        defaultMessage: `Add variable`,
        description: `Button label to add a site environment variable`,
      })),
      (t[41] = ae))
    : (ae = t[41]);
  let oe, le;
  t[42] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((oe = (0, $.jsx)(W, {
        id: `appgenSettings.environmentVariables.description`,
        defaultMessage: `Settings your site uses while it runs, like URLs, names, or feature switches`,
        description: `Description for site environment variable settings`,
      })),
      (le = (0, $.jsx)(W, {
        id: `appgenSettings.environmentVariables.title`,
        defaultMessage: `Environment variables`,
        description: `Heading for site environment variable settings`,
      })),
      (t[42] = oe),
      (t[43] = le))
    : ((oe = t[42]), (le = t[43]));
  let H;
  t[44] === N
    ? (H = t[45])
    : ((H = (e) => {
        N((t) => ({ ...t, environmentVariables: e }));
      }),
      (t[44] = N),
      (t[45] = H));
  let U;
  t[46] !== S.environmentVariables || t[47] !== A || t[48] !== H
    ? ((U = (0, $.jsx)(Ue, {
        addButtonLabel: ae,
        disabled: A,
        entries: S.environmentVariables,
        subtitle: oe,
        title: le,
        valueInputType: `text`,
        onChange: H,
      })),
      (t[46] = S.environmentVariables),
      (t[47] = A),
      (t[48] = H),
      (t[49] = U))
    : (U = t[49]);
  let de;
  t[50] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((de = (0, $.jsx)(W, {
        id: `appgenSettings.secrets.add`,
        defaultMessage: `Add secret`,
        description: `Button label to add a site secret`,
      })),
      (t[50] = de))
    : (de = t[50]);
  let fe, pe;
  t[51] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((fe = (0, $.jsx)(W, {
        id: `appgenSettings.secrets.description`,
        defaultMessage: `Sensitive setup info, like keys and passwords`,
        description: `Description for site secret settings`,
      })),
      (pe = (0, $.jsx)(W, {
        id: `appgenSettings.secrets.title`,
        defaultMessage: `Secrets`,
        description: `Heading for site secret settings`,
      })),
      (t[51] = fe),
      (t[52] = pe))
    : ((fe = t[51]), (pe = t[52]));
  let G;
  t[53] === N
    ? (G = t[54])
    : ((G = (e) => {
        N((t) => ({ ...t, secrets: e }));
      }),
      (t[53] = N),
      (t[54] = G));
  let K;
  t[55] !== S.secrets || t[56] !== A || t[57] !== G
    ? ((K = (0, $.jsx)(Ue, {
        addButtonLabel: de,
        disabled: A,
        entries: S.secrets,
        subtitle: fe,
        title: pe,
        valueInputType: `password`,
        onChange: G,
      })),
      (t[55] = S.secrets),
      (t[56] = A),
      (t[57] = G),
      (t[58] = K))
    : (K = t[58]);
  let me;
  t[59] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((me = (0, $.jsx)(Y.Header, {
        title: (0, $.jsx)(W, {
          id: `appgenSettings.danger.title`,
          defaultMessage: `Danger zone`,
          description: `Heading for destructive site actions`,
        }),
      })),
      (t[59] = me))
    : (me = t[59]);
  let he, ge;
  t[60] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((he = (0, $.jsx)(W, {
        id: `appgenSettings.danger.delete.label`,
        defaultMessage: `Delete site`,
        description: `Label for the delete site action`,
      })),
      (ge = (0, $.jsx)(W, {
        id: `appgenSettings.danger.delete.description`,
        defaultMessage: `Permanently delete this site`,
        description: `Description for the delete site action`,
      })),
      (t[60] = he),
      (t[61] = ge))
    : ((he = t[60]), (ge = t[61]));
  let q;
  t[62] !== s || t[63] !== u || t[64] !== c || t[65] !== l
    ? ((q = () => {
        g(u, $e, { projectId: s, siteSlug: c, siteTitle: l });
      }),
      (t[62] = s),
      (t[63] = u),
      (t[64] = c),
      (t[65] = l),
      (t[66] = q))
    : (q = t[66]);
  let _e;
  t[67] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_e = (0, $.jsx)(W, {
        id: `appgenSettings.danger.delete.button`,
        defaultMessage: `Delete site`,
        description: `Delete site button label`,
      })),
      (t[67] = _e))
    : (_e = t[67]);
  let ve;
  t[68] === q
    ? (ve = t[69])
    : ((ve = (0, $.jsxs)(Y, {
        children: [
          me,
          (0, $.jsx)(Y.Content, {
            children: (0, $.jsx)(xe, {
              children: (0, $.jsx)(ue, {
                label: he,
                description: ge,
                control: (0, $.jsx)(D, {
                  color: `danger`,
                  size: `toolbar`,
                  type: `button`,
                  onClick: q,
                  children: _e,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[68] = q),
      (t[69] = ve));
  let ye;
  t[70] !== ee || t[71] !== E
    ? ((ye = E
        ? (0, $.jsx)(`p`, {
            id: at,
            className: `text-sm text-token-charts-red`,
            role: `alert`,
            children: (0, $.jsx)(W, {
              id: `appgenSettings.general.title.required`,
              defaultMessage: `Site title is required`,
              description: `Inline validation message below the Site settings form when the Site title is empty`,
            }),
          })
        : ee
          ? (0, $.jsx)(`p`, {
              className: `text-sm text-token-charts-red`,
              role: `alert`,
              children: (0, $.jsx)(W, {
                id: `appgenSettings.environmentKeys.duplicate`,
                defaultMessage: `Keys must be unique across environment variables and secrets`,
                description: `Validation shown when site environment settings use a duplicate key`,
              }),
            })
          : null),
      (t[70] = ee),
      (t[71] = E),
      (t[72] = ye))
    : (ye = t[72]);
  let be;
  t[73] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((be = (0, $.jsx)(W, {
        id: `appgenSettings.save`,
        defaultMessage: `Save`,
        description: `Button for saving site settings`,
      })),
      (t[73] = be))
    : (be = t[73]);
  let J;
  t[74] !== j || t[75] !== A
    ? ((J = (0, $.jsx)(D, {
        className: `ml-auto`,
        disabled: j,
        loading: A,
        size: `toolbar`,
        type: `submit`,
        children: be,
      })),
      (t[74] = j),
      (t[75] = A),
      (t[76] = J))
    : (J = t[76]);
  let X;
  t[77] !== ye || t[78] !== J
    ? ((X = (0, $.jsxs)(`div`, {
        className: `flex items-center justify-between gap-4 px-4 py-3`,
        children: [ye, J],
      })),
      (t[77] = ye),
      (t[78] = J),
      (t[79] = X))
    : (X = t[79]);
  let Se;
  return (
    t[80] !== B ||
    t[81] !== V ||
    t[82] !== U ||
    t[83] !== K ||
    t[84] !== ve ||
    t[85] !== X ||
    t[86] !== P
      ? ((Se = (0, $.jsxs)(`form`, {
          className: `flex flex-col gap-[var(--padding-panel)]`,
          onSubmit: P,
          children: [B, V, U, K, ve, X],
        })),
        (t[80] = B),
        (t[81] = V),
        (t[82] = U),
        (t[83] = K),
        (t[84] = ve),
        (t[85] = X),
        (t[86] = P),
        (t[87] = Se))
      : (Se = t[87]),
    Se
  );
}
function Qe(e) {
  let t = (0, Q.c)(44),
    { accessPolicy: n, projectId: i } = e,
    a = o(r),
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m,
    h,
    _,
    v;
  t[0] === n
    ? ((s = t[1]),
      (c = t[2]),
      (l = t[3]),
      (u = t[4]),
      (d = t[5]),
      (f = t[6]),
      (p = t[7]),
      (m = t[8]),
      (h = t[9]),
      (_ = t[10]),
      (v = t[11]))
    : ((f = fe(n)),
      (d = Y),
      t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((v = (0, $.jsx)(Y.Header, {
            title: (0, $.jsx)(W, {
              id: `appgenSettings.sharing.title`,
              defaultMessage: `Sharing`,
              description: `Heading for site sharing settings`,
            }),
          })),
          (t[12] = v))
        : (v = t[12]),
      (u = Y.Content),
      (l = xe),
      (c = ue),
      t[13] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((_ = (0, $.jsx)(W, {
            id: `appgenSettings.sharing.label`,
            defaultMessage: `Sharing`,
            description: `Label for site sharing settings`,
          })),
          (t[13] = _))
        : (_ = t[13]),
      (m = `flex items-center gap-1`),
      (h = (0, $.jsx)(de, {
        "aria-hidden": !0,
        accessPolicy: n,
        className: `icon-2xs shrink-0`,
      })),
      (s = W),
      (p = me(f)),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c),
      (t[3] = l),
      (t[4] = u),
      (t[5] = d),
      (t[6] = f),
      (t[7] = p),
      (t[8] = m),
      (t[9] = h),
      (t[10] = _),
      (t[11] = v));
  let y;
  t[14] !== s || t[15] !== f || t[16] !== p
    ? ((y = (0, $.jsx)(s, { ...p, values: f })),
      (t[14] = s),
      (t[15] = f),
      (t[16] = p),
      (t[17] = y))
    : (y = t[17]);
  let b;
  t[18] !== m || t[19] !== h || t[20] !== y
    ? ((b = (0, $.jsxs)(`span`, { className: m, children: [h, y] })),
      (t[18] = m),
      (t[19] = h),
      (t[20] = y),
      (t[21] = b))
    : (b = t[21]);
  let x;
  t[22] !== i || t[23] !== a
    ? ((x = () => g(a, Te, { projectId: i })),
      (t[22] = i),
      (t[23] = a),
      (t[24] = x))
    : (x = t[24]);
  let S, C;
  t[25] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, $.jsx)(ge, { "aria-hidden": !0, className: `icon-xs` })),
      (S = (0, $.jsx)(W, {
        id: `appgenSettings.sharing.button`,
        defaultMessage: `Share settings`,
        description: `Sharing settings button label`,
      })),
      (t[25] = S),
      (t[26] = C))
    : ((S = t[25]), (C = t[26]));
  let w;
  t[27] === x
    ? (w = t[28])
    : ((w = (0, $.jsxs)(D, {
        color: `outline`,
        size: `toolbar`,
        onClick: x,
        children: [C, S],
      })),
      (t[27] = x),
      (t[28] = w));
  let T;
  t[29] !== c || t[30] !== w || t[31] !== _ || t[32] !== b
    ? ((T = (0, $.jsx)(c, { label: _, description: b, control: w })),
      (t[29] = c),
      (t[30] = w),
      (t[31] = _),
      (t[32] = b),
      (t[33] = T))
    : (T = t[33]);
  let E;
  t[34] !== l || t[35] !== T
    ? ((E = (0, $.jsx)(l, { children: T })),
      (t[34] = l),
      (t[35] = T),
      (t[36] = E))
    : (E = t[36]);
  let O;
  t[37] !== u || t[38] !== E
    ? ((O = (0, $.jsx)(u, { children: E })),
      (t[37] = u),
      (t[38] = E),
      (t[39] = O))
    : (O = t[39]);
  let k;
  return (
    t[40] !== d || t[41] !== O || t[42] !== v
      ? ((k = (0, $.jsxs)(d, { children: [v, O] })),
        (t[40] = d),
        (t[41] = O),
        (t[42] = v),
        (t[43] = k))
      : (k = t[43]),
    k
  );
}
function $e(e) {
  let t = (0, Q.c)(49),
    { onClose: n, projectId: a, siteSlug: s, siteTitle: c } = e,
    l = o(r),
    u = i(ae, a),
    d = ce(),
    f = z(),
    [p, m] = (0, it.useState)(``),
    h;
  t[0] === c
    ? (h = t[1])
    : ((h = (0, $.jsx)(W, {
        id: `appgenSettings.deleteDialog.title`,
        defaultMessage: `Delete {siteTitle}?`,
        description: `Title for dialog confirming deletion of a site`,
        values: { siteTitle: c },
      })),
      (t[0] = c),
      (t[1] = h));
  let g = h,
    _ = u.isPending,
    v = !u.isPending,
    y;
  t[2] !== u.isPending || t[3] !== n
    ? ((y = (e) => {
        !e && !u.isPending && n();
      }),
      (t[2] = u.isPending),
      (t[3] = n),
      (t[4] = y))
    : (y = t[4]);
  let b;
  t[5] !== p ||
  t[6] !== u ||
  t[7] !== d ||
  t[8] !== f ||
  t[9] !== n ||
  t[10] !== l ||
  t[11] !== s
    ? ((b = (e) => {
        (e.preventDefault(),
          !(p !== s || u.isPending) &&
            u.mutateAsync().then(
              () => {
                (l.get(te).success(
                  d.formatMessage({
                    id: `appgenSettings.deleteDialog.success`,
                    defaultMessage: `Site deleted`,
                    description: `Success toast shown after deleting a site`,
                  }),
                ),
                  n(),
                  f(`/sites`));
              },
              () => {
                l.get(te).danger(
                  d.formatMessage({
                    id: `appgenSettings.deleteDialog.error`,
                    defaultMessage: `Unable to delete site`,
                    description: `Error toast shown when deleting a site fails`,
                  }),
                );
              },
            ));
      }),
      (t[5] = p),
      (t[6] = u),
      (t[7] = d),
      (t[8] = f),
      (t[9] = n),
      (t[10] = l),
      (t[11] = s),
      (t[12] = b))
    : (b = t[12]);
  let S;
  t[13] === g
    ? (S = t[14])
    : ((S = (0, $.jsx)(x, { className: `contents`, children: g })),
      (t[13] = g),
      (t[14] = S));
  let C;
  t[15] === s
    ? (C = t[16])
    : ((C = (0, $.jsx)(O, {
        className: `contents`,
        children: (0, $.jsx)(W, {
          id: `appgenSettings.deleteDialog.subtitle`,
          defaultMessage: `Deleting your site will take it offline permanently and delete any data users have uploaded. Please type <strong>{siteSlug}</strong> below:`,
          description: `Subtitle for dialog confirming deletion of a site`,
          values: { siteSlug: s, strong: et },
        }),
      })),
      (t[15] = s),
      (t[16] = C));
  let w;
  t[17] !== S || t[18] !== C
    ? ((w = (0, $.jsx)(`div`, {
        className: `flex w-full flex-col`,
        children: (0, $.jsx)(re, {
          title: S,
          titleClassName: `truncate pr-8`,
          subtitle: C,
        }),
      })),
      (t[17] = S),
      (t[18] = C),
      (t[19] = w))
    : (w = t[19]);
  let T;
  t[20] === d
    ? (T = t[21])
    : ((T = d.formatMessage({
        id: `appgenSettings.deleteDialog.slugInputLabel`,
        defaultMessage: `Site slug`,
        description: `Accessible label for the site slug input used to confirm site deletion`,
      })),
      (t[20] = d),
      (t[21] = T));
  let E;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (e) => {
        m(e.target.value);
      }),
      (t[22] = E))
    : (E = t[22]);
  let A;
  t[23] !== p || t[24] !== u.isPending || t[25] !== s || t[26] !== T
    ? ((A = (0, $.jsx)(ee, {
        children: (0, $.jsx)(`input`, {
          "aria-label": T,
          autoFocus: !0,
          className: `w-full min-w-0 cursor-interaction rounded-md border border-token-input-border bg-token-input-background px-2.5 py-1.5 font-mono text-base text-token-input-foreground outline-none placeholder:text-token-input-placeholder-foreground focus:border-token-focus-border disabled:cursor-not-allowed disabled:opacity-40`,
          disabled: u.isPending,
          placeholder: s,
          spellCheck: !1,
          type: `text`,
          value: p,
          onChange: E,
        }),
      })),
      (t[23] = p),
      (t[24] = u.isPending),
      (t[25] = s),
      (t[26] = T),
      (t[27] = A))
    : (A = t[27]);
  let j;
  t[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = (0, $.jsx)(W, {
        id: `appgenSettings.deleteDialog.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for delete site confirmation dialog`,
      })),
      (t[28] = j))
    : (j = t[28]);
  let M;
  t[29] !== u.isPending || t[30] !== n
    ? ((M = (0, $.jsx)(D, {
        color: `ghost`,
        disabled: u.isPending,
        type: `button`,
        onClick: n,
        children: j,
      })),
      (t[29] = u.isPending),
      (t[30] = n),
      (t[31] = M))
    : (M = t[31]);
  let N = p !== s || u.isPending,
    P;
  t[32] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((P = (0, $.jsx)(W, {
        id: `appgenSettings.deleteDialog.confirm`,
        defaultMessage: `Permanently delete`,
        description: `Confirm button label for delete site confirmation dialog`,
      })),
      (t[32] = P))
    : (P = t[32]);
  let F;
  t[33] !== u.isPending || t[34] !== N
    ? ((F = (0, $.jsx)(D, {
        color: `danger`,
        disabled: N,
        loading: u.isPending,
        type: `submit`,
        children: P,
      })),
      (t[33] = u.isPending),
      (t[34] = N),
      (t[35] = F))
    : (F = t[35]);
  let I;
  t[36] !== M || t[37] !== F
    ? ((I = (0, $.jsx)(ee, {
        children: (0, $.jsxs)(ne, { children: [M, F] }),
      })),
      (t[36] = M),
      (t[37] = F),
      (t[38] = I))
    : (I = t[38]);
  let R;
  t[39] !== A || t[40] !== I || t[41] !== b || t[42] !== w
    ? ((R = (0, $.jsxs)(k, {
        as: `form`,
        className: `gap-4 px-4 py-3`,
        onSubmit: b,
        children: [w, A, I],
      })),
      (t[39] = A),
      (t[40] = I),
      (t[41] = b),
      (t[42] = w),
      (t[43] = R))
    : (R = t[43]);
  let ie;
  return (
    t[44] !== u.isPending || t[45] !== R || t[46] !== v || t[47] !== y
      ? ((ie = (0, $.jsx)(L, {
          open: !0,
          size: `compact`,
          shouldIgnoreClickOutside: _,
          showDialogClose: v,
          onOpenChange: y,
          children: R,
        })),
        (t[44] = u.isPending),
        (t[45] = R),
        (t[46] = v),
        (t[47] = y),
        (t[48] = ie))
      : (ie = t[48]),
    ie
  );
}
function et(e) {
  return (0, $.jsx)(`strong`, { children: e });
}
function tt() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(_, {}),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
function nt() {
  let e = (0, Q.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(`div`, {
          className: `flex min-h-[420px] flex-1 items-center justify-center`,
          children: (0, $.jsx)(`div`, {
            className: `text-sm font-medium text-token-text-secondary`,
            children: (0, $.jsx)(W, {
              id: `appgenSettings.error.title`,
              defaultMessage: `Unable to load site settings`,
              description: `Error state title for the site settings page`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var Q, rt, it, $, at;
e(() => {
  ((Q = l()),
    (rt = t(a(), 1)),
    s(),
    (it = t(c(), 1)),
    B(),
    H(),
    m(),
    b(),
    y(),
    h(),
    F(),
    T(),
    E(),
    C(),
    P(),
    Se(),
    I(),
    w(),
    q(),
    n(),
    X(),
    pe(),
    J(),
    K(),
    G(),
    he(),
    Pe(),
    le(),
    ye(),
    Le(),
    we(),
    f(),
    qe(),
    ($ = u()),
    (at = `appgen-settings-site-title-error`));
})();
export { Je as AppgenSettingsPage };
//# sourceMappingURL=appgen-settings-page-BxhhSHRZ.js.map
