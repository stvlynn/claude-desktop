import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Go as i,
  Gs as a,
  Ko as o,
  O as s,
  Rs as c,
  Vo as l,
  Ys as u,
  Zs as d,
  _ as f,
  _c as p,
  c as m,
  gc as h,
  lc as g,
  qo as _,
  tr as v,
  u as y,
  v as b,
  y as x,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  $a as S,
  Am as C,
  Ho as w,
  Vo as T,
  af as E,
  bf as D,
  cf as O,
  ds as k,
  jm as A,
  ls as j,
  ro as M,
  us as N,
  vf as P,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Ma as F,
  Tp as I,
  hh as L,
  ja as R,
  lo as z,
  mh as B,
  uo as V,
  wp as H,
  xp as U,
  yp as W,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Hi as G,
  Iy as K,
  Ri as q,
  Vy as J,
  zy as ee,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Sn as te,
  r as ne,
  xn as re,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
function ie(e) {
  let t = (0, ue.c)(16),
    n = u(fe),
    r;
  t[0] === e.dependencies
    ? (r = t[1])
    : ((r = e.dependencies ? e.dependencies.map(ce).join(`|`) : ``),
      (t[0] = e.dependencies),
      (t[1] = r));
  let i = r,
    a;
  t[2] !== e || t[3] !== n
    ? ((a = () => {
        n((t) => {
          let n = !1,
            r = [...t].map((t) => (t.id === e.id ? ((n = !0), e) : t));
          return (n || r.push(e), (0, de.default)(r.filter(se), [oe, ae]));
        });
      }),
      (t[2] = e),
      (t[3] = n),
      (t[4] = a))
    : (a = t[4]);
  let o = (0, Y.useEffectEvent)(a),
    s;
  t[5] === o
    ? (s = t[6])
    : ((s = () => {
        o();
      }),
      (t[5] = o),
      (t[6] = s));
  let c;
  (t[7] !== i || t[8] !== e.enabled || t[9] !== e.id || t[10] !== e.order
    ? ((c = [e.id, e.enabled, e.order, i]),
      (t[7] = i),
      (t[8] = e.enabled),
      (t[9] = e.id),
      (t[10] = e.order),
      (t[11] = c))
    : (c = t[11]),
    (0, Y.useEffect)(s, c));
  let l, d;
  (t[12] !== e.id || t[13] !== n
    ? ((l = () => () => {
        n((t) => t.filter((t) => t.id !== e.id));
      }),
      (d = [e.id, n]),
      (t[12] = e.id),
      (t[13] = n),
      (t[14] = l),
      (t[15] = d))
    : ((l = t[14]), (d = t[15])),
    (0, Y.useEffect)(l, d));
}
function ae(e) {
  return e.id;
}
function oe(e) {
  return e.order ?? 0;
}
function se(e) {
  return e.enabled !== !1;
}
function ce(e) {
  return le(e);
}
function le(e) {
  return e == null ? `` : String(e);
}
var ue,
  de,
  Y,
  fe,
  pe = e(() => {
    ((ue = h()), a(), (de = t(ne(), 1)), (Y = t(p(), 1)), (fe = d([])));
  });
function me(e, t, n = `fuzzy`) {
  let r = Array.from(e),
    i = t.trim();
  if (i.length === 0) return r.map((e) => ({ text: e, isMatch: !0 }));
  let a = e.toLowerCase(),
    o = i.toLowerCase(),
    s = a.indexOf(o);
  if (s >= 0) {
    let e = s,
      t = s + o.length;
    return r.map((n, r) => ({ text: n, isMatch: r >= e && r < t }));
  }
  if (n === `substring`) return r.map((e) => ({ text: e, isMatch: !1 }));
  let c = 0;
  return r.map((e) => {
    let t = c < o.length && e.toLowerCase() === o[c];
    return (t && (c += 1), { text: e, isMatch: t });
  });
}
var he = e(() => {});
function ge(e) {
  let t = (0, Ce.c)(66),
    n,
    r,
    i,
    a,
    o,
    s,
    c,
    l,
    u,
    d,
    f,
    p,
    m;
  t[0] === e
    ? ((n = t[1]),
      (r = t[2]),
      (i = t[3]),
      (a = t[4]),
      (o = t[5]),
      (s = t[6]),
      (c = t[7]),
      (l = t[8]),
      (u = t[9]),
      (d = t[10]),
      (f = t[11]),
      (p = t[12]),
      (m = t[13]))
    : (({
        title: f,
        description: i,
        leftAccessory: c,
        LeftIcon: n,
        RightIcon: r,
        titleTooltipContent: p,
        descriptionTooltipContent: o,
        descriptionClassName: a,
        highlightMode: s,
        secondaryContent: d,
        tooltipDelayDuration: m,
        rightAccessory: u,
        ...l
      } = e),
      (t[0] = e),
      (t[1] = n),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = c),
      (t[8] = l),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f),
      (t[12] = p),
      (t[13] = m));
  let h = (0, we.useRef)(null),
    g;
  t[14] === f ? (g = t[15]) : ((g = xe(f)), (t[14] = f), (t[15] = g));
  let _ = g,
    v;
  t[16] === i
    ? (v = t[17])
    : ((v = i == null ? void 0 : xe(i)), (t[16] = i), (t[17] = v));
  let y = v,
    b;
  t[18] === p ? (b = t[19]) : ((b = Se(p)), (t[18] = p), (t[19] = b));
  let x = b,
    S;
  t[20] === o ? (S = t[21]) : ((S = Se(o)), (t[20] = o), (t[21] = S));
  let C = S,
    w = j(ye),
    T = j(ve),
    E;
  t[22] !== s || t[23] !== w || t[24] !== _
    ? ((E = me(_, w, s)), (t[22] = s), (t[23] = w), (t[24] = _), (t[25] = E))
    : (E = t[25]);
  let D = E,
    O = D.some(_e),
    k;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((k = () => {
        h.current?.dataset.selected === `true` &&
          h.current.scrollIntoView({ block: `nearest` });
      }),
      (t[26] = k))
    : (k = t[26]);
  let A;
  (t[27] === T ? (A = t[28]) : ((A = [T]), (t[27] = T), (t[28] = A)),
    (0, we.useEffect)(k, A));
  let M = N,
    P = d == null ? `items-center` : `items-start`,
    F;
  t[29] === P
    ? (F = t[30])
    : ((F = B(`flex w-full min-w-0 gap-2`, P)), (t[29] = P), (t[30] = F));
  let I;
  t[31] !== n || t[32] !== c
    ? ((I = c ?? (n ? (0, X.jsx)(n, { className: `icon-xs shrink-0` }) : null)),
      (t[31] = n),
      (t[32] = c),
      (t[33] = I))
    : (I = t[33]);
  let L = be,
    R = i ? (a ? `min-w-0 flex-1` : `max-w-[60%] flex-none`) : `min-w-0 flex-1`,
    z;
  t[34] === R
    ? (z = t[35])
    : ((z = B(`truncate`, R)), (t[34] = R), (t[35] = z));
  let V = D.map((e, t) =>
      (0, X.jsx)(
        `span`,
        {
          className: B(!e.isMatch && O && `text-token-description-foreground`),
          children: e.text,
        },
        t,
      ),
    ),
    H;
  t[36] !== L || t[37] !== z || t[38] !== V || t[39] !== m || t[40] !== x
    ? ((H = (0, X.jsx)(L, {
        tooltipContent: x,
        delayDuration: m,
        className: z,
        children: V,
      })),
      (t[36] = L),
      (t[37] = z),
      (t[38] = V),
      (t[39] = m),
      (t[40] = x),
      (t[41] = H))
    : (H = t[41]);
  let U;
  t[42] !== r ||
  t[43] !== i ||
  t[44] !== a ||
  t[45] !== u ||
  t[46] !== m ||
  t[47] !== y ||
  t[48] !== C
    ? ((U =
        i || u || r
          ? (0, X.jsxs)(`div`, {
              className: `ml-auto flex min-w-0 items-center gap-2`,
              children: [
                i
                  ? (0, X.jsx)(be, {
                      tooltipContent: C,
                      delayDuration: m,
                      className: B(
                        `truncate text-sm text-token-description-foreground`,
                        a ?? `min-w-0 flex-1`,
                      ),
                      children: y,
                    })
                  : null,
                u
                  ? (0, X.jsx)(`span`, {
                      className: `shrink-0 opacity-80`,
                      children: u,
                    })
                  : null,
                r ? (0, X.jsx)(r, { className: `icon-xs shrink-0` }) : null,
              ],
            })
          : null),
      (t[42] = r),
      (t[43] = i),
      (t[44] = a),
      (t[45] = u),
      (t[46] = m),
      (t[47] = y),
      (t[48] = C),
      (t[49] = U))
    : (U = t[49]);
  let W;
  t[50] !== H || t[51] !== U
    ? ((W = (0, X.jsxs)(`div`, {
        className: `flex w-full min-w-0 items-center gap-2`,
        children: [H, U],
      })),
      (t[50] = H),
      (t[51] = U),
      (t[52] = W))
    : (W = t[52]);
  let G;
  t[53] === d
    ? (G = t[54])
    : ((G =
        d == null
          ? null
          : (0, X.jsx)(`div`, {
              className: `truncate pt-0.5 text-xs text-token-description-foreground`,
              children: d,
            })),
      (t[53] = d),
      (t[54] = G));
  let K;
  t[55] !== W || t[56] !== G
    ? ((K = (0, X.jsxs)(`div`, {
        className: `min-w-0 flex-1`,
        children: [W, G],
      })),
      (t[55] = W),
      (t[56] = G),
      (t[57] = K))
    : (K = t[57]);
  let q;
  t[58] !== F || t[59] !== I || t[60] !== K
    ? ((q = (0, X.jsxs)(`div`, { className: F, children: [I, K] })),
      (t[58] = F),
      (t[59] = I),
      (t[60] = K),
      (t[61] = q))
    : (q = t[61]);
  let J;
  return (
    t[62] !== l || t[63] !== q || t[64] !== M.Item
      ? ((J = (0, X.jsx)(M.Item, { ref: h, ...l, children: q })),
        (t[62] = l),
        (t[63] = q),
        (t[64] = M.Item),
        (t[65] = J))
      : (J = t[65]),
    J
  );
}
function _e(e) {
  return e.isMatch;
}
function ve(e) {
  return e.value;
}
function ye(e) {
  return e.search;
}
function be(e) {
  let t = (0, Ce.c)(8),
    { children: n, className: r, tooltipContent: i, delayDuration: a } = e,
    o = i == null,
    s;
  t[0] !== n || t[1] !== r
    ? ((s = (0, X.jsx)(`div`, { className: r, children: n })),
      (t[0] = n),
      (t[1] = r),
      (t[2] = s))
    : (s = t[2]);
  let c;
  return (
    t[3] !== a || t[4] !== o || t[5] !== s || t[6] !== i
      ? ((c = (0, X.jsx)(W, {
          tooltipContent: i,
          delayDuration: a,
          disabled: o,
          openWhen: `trigger-overflows`,
          children: s,
        })),
        (t[3] = a),
        (t[4] = o),
        (t[5] = s),
        (t[6] = i),
        (t[7] = c))
      : (c = t[7]),
    c
  );
}
function xe(e) {
  return e.length <= Te ? e : `${e.slice(0, Te - 1).trimEnd()}…`;
}
function Se(e) {
  return typeof e == `string` ? xe(e) : e;
}
var Ce,
  we,
  X,
  Te,
  Ee = e(() => {
    ((Ce = h()), L(), k(), (we = t(p(), 1)), U(), he(), (X = g()), (Te = 100));
  }),
  Z,
  De,
  Q,
  Oe = e(() => {
    (l(),
      n(),
      (Z = `command-menu-first-file-item`),
      (De = `command-menu-first-chat-item`),
      (Q = c(r, `root`)));
  });
function ke(e) {
  let t = (0, Me.c)(31),
    {
      clearSearch: n,
      close: a,
      hostId: s,
      onSelectFile: c,
      workspaceRoot: l,
    } = e,
    u = o(r),
    d = J(),
    f = i(S, `searchFiles`),
    p = j(je),
    m = _(F),
    h = _(Q),
    g = h === `files` ? p : ``,
    v;
  t[0] === l ? (v = t[1]) : ((v = [l]), (t[0] = l), (t[1] = v));
  let y;
  t[2] !== s || t[3] !== g || t[4] !== v
    ? ((y = { hostId: s, query: g, roots: v }),
      (t[2] = s),
      (t[3] = g),
      (t[4] = v),
      (t[5] = y))
    : (y = t[5]);
  let { sections: b } = w(y),
    x = b[0],
    C,
    T;
  if (
    (t[6] !== m || t[7] !== u
      ? ((C = () => {
          m || u.set(Q, `root`);
        }),
        (T = [m, u]),
        (t[6] = m),
        (t[7] = u),
        (t[8] = C),
        (t[9] = T))
      : ((C = t[8]), (T = t[9])),
    (0, Ne.useEffect)(C, T),
    h !== `files`)
  ) {
    let e;
    t[10] === d
      ? (e = t[11])
      : ((e = d.formatMessage({
          id: `thread.fileCommandMenu.searchFiles`,
          defaultMessage: `Search files`,
          description: `Command menu item that opens workspace file search`,
        })),
        (t[10] = d),
        (t[11] = e));
    let r = f ?? ``,
      i;
    t[12] === r
      ? (i = t[13])
      : ((i = (0, $.jsx)(H, { keysLabel: r })), (t[12] = r), (t[13] = i));
    let a;
    t[14] !== n || t[15] !== u
      ? ((a = () => {
          (n(), u.set(Q, `files`));
        }),
        (t[14] = n),
        (t[15] = u),
        (t[16] = a))
      : (a = t[16]);
    let o;
    return (
      t[17] !== e || t[18] !== i || t[19] !== a
        ? ((o = (0, $.jsx)(
            ge,
            {
              value: `search files workspace project cmd+p`,
              title: e,
              LeftIcon: z,
              rightAccessory: i,
              onSelect: a,
            },
            `search-files`,
          )),
          (t[17] = e),
          (t[18] = i),
          (t[19] = a),
          (t[20] = o))
        : (o = t[20]),
      o
    );
  }
  if (x == null || (x.items.length === 0 && x.emptyState == null)) return null;
  let E;
  t[21] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, $.jsx)(`span`, {
        className: `block px-2 pt-2 text-sm text-token-description-foreground`,
        children: (0, $.jsx)(ee, {
          id: `thread.fileCommandMenu.filesGroup`,
          defaultMessage: `Files`,
          description: `Group label for workspace file search results`,
        }),
      })),
      (t[21] = E))
    : (E = t[21]);
  let D;
  t[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = { gap: `var(--spacing)` }), (t[22] = D))
    : (D = t[22]);
  let O;
  t[23] !== a ||
  t[24] !== x.emptyState ||
  t[25] !== x.items ||
  t[26] !== d ||
  t[27] !== c
    ? ((O =
        x.items.length > 0
          ? x.items.map((e, t) =>
              (0, $.jsx)(
                ge,
                {
                  description: e.detail ?? void 0,
                  forceMount: !0,
                  LeftIcon: e.icon,
                  onSelect: () => {
                    (c(e.key.replace(/^file:/, ``)), a());
                  },
                  title: e.label,
                  value: t === 0 ? Z : [e.label, e.detail].join(` `),
                },
                e.key,
              ),
            )
          : x.emptyState == null
            ? null
            : (0, $.jsx)(N.Item, {
                "data-command-menu-loading": !0,
                forceMount: !0,
                onSelect: Ae,
                value: Z,
                children: (0, $.jsx)(`div`, {
                  className: `flex w-full min-w-0 items-center gap-2`,
                  children: (0, $.jsx)(`div`, {
                    className: `min-w-0 flex-1 truncate`,
                    children: d.formatMessage(x.emptyState),
                  }),
                }),
              })),
      (t[23] = a),
      (t[24] = x.emptyState),
      (t[25] = x.items),
      (t[26] = d),
      (t[27] = c),
      (t[28] = O))
    : (O = t[28]);
  let k;
  return (
    t[29] === O
      ? (k = t[30])
      : ((k = (0, $.jsx)(
          N.Group,
          {
            forceMount: !0,
            heading: E,
            className: `flex flex-col`,
            style: D,
            children: O,
          },
          `group-files`,
        )),
        (t[29] = O),
        (t[30] = k)),
    k
  );
}
function Ae() {}
function je(e) {
  return e.search;
}
var Me,
  Ne,
  $,
  Pe = e(() => {
    ((Me = h()),
      k(),
      l(),
      (Ne = t(p(), 1)),
      K(),
      M(),
      Oe(),
      R(),
      I(),
      Ee(),
      T(),
      V(),
      n(),
      ($ = g()));
  });
function Fe() {
  let e = (0, Ie.c)(23),
    t = o(q),
    n = _(Q),
    r = y(`open-file`),
    i = _(D),
    a = _(O),
    s = a != null,
    c;
  e[0] !== s || e[1] !== i || e[2] !== r || e[3] !== t || e[4] !== a
    ? ((c = (e) => {
        !s ||
          a == null ||
          A({
            scope: t,
            path: e,
            cwd: v(a),
            hostConfig: i,
            hostId: i.id,
            openFile: r.mutate,
            openInSidePanel: !0,
          });
      }),
      (e[0] = s),
      (e[1] = i),
      (e[2] = r),
      (e[3] = t),
      (e[4] = a),
      (e[5] = c))
    : (c = e[5]);
  let l = c,
    u;
  (e[6] !== s || e[7] !== t
    ? ((u = () => {
        s &&
          (b.dispatchHostMessage({ type: `command-menu`, query: `` }),
          t.set(Q, `files`),
          t.set(F, !0));
      }),
      (e[6] = s),
      (e[7] = t),
      (e[8] = u))
    : (u = e[8]),
    x(`file-search-command-menu`, te(u)));
  let d;
  e[9] !== s || e[10] !== n || e[11] !== i.id || e[12] !== a
    ? ((d = [s, n, i.id, a]),
      (e[9] = s),
      (e[10] = n),
      (e[11] = i.id),
      (e[12] = a),
      (e[13] = d))
    : (d = e[13]);
  let f = n === `files`,
    p;
  e[14] !== i.id || e[15] !== l || e[16] !== a
    ? ((p = (e, t) =>
        a == null
          ? null
          : (0, Le.jsx)(ke, {
              clearSearch: t,
              close: e,
              hostId: i.id,
              onSelectFile: l,
              workspaceRoot: a,
            })),
      (e[14] = i.id),
      (e[15] = l),
      (e[16] = a),
      (e[17] = p))
    : (p = e[17]);
  let m;
  return (
    e[18] !== s || e[19] !== d || e[20] !== f || e[21] !== p
      ? ((m = {
          dependencies: d,
          enabled: s,
          exclusive: f,
          groupKey: `suggested`,
          id: `thread-file-search`,
          order: -1e3,
          render: p,
        }),
        (e[18] = s),
        (e[19] = d),
        (e[20] = f),
        (e[21] = p),
        (e[22] = m))
      : (m = e[22]),
    ie(m),
    null
  );
}
var Ie,
  Le,
  Re = e(() => {
    ((Ie = h()),
      l(),
      s(),
      pe(),
      Oe(),
      R(),
      C(),
      f(),
      E(),
      G(),
      P(),
      re(),
      m(),
      Pe(),
      (Le = g()));
  });
export {
  Q as a,
  Ee as c,
  fe as d,
  pe as f,
  Z as i,
  me as l,
  Re as n,
  Oe as o,
  ie as p,
  De as r,
  ge as s,
  Fe as t,
  he as u,
};
//# sourceMappingURL=app-initial~app-main~local-conversation-page-D-F_r9ay.js.map
