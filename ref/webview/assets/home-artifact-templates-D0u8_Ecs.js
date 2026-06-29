import { n as e, s as t, t as n } from "./rolldown-runtime-Czos8NxU.js";
import {
  Vo as r,
  _c as i,
  gc as a,
  lc as o,
  qo as s,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  cc as c,
  sc as ee,
  vf as l,
  xf as te,
  yf as ne,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Dt as u,
  Em as d,
  Et as re,
  Fm as f,
  Im as ie,
  Ju as ae,
  Tm as oe,
  Xm as p,
  Xu as m,
  Zm as se,
  dt as h,
  ft as ce,
  hh as g,
  mh as _,
  mr as le,
  pr as v,
  pt as ue,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  I_ as y,
  Iy as b,
  Vy as de,
  zy as fe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Sn as pe,
  xn as x,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Tn as S,
  wn as C,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import { i as w, r as me, t as he } from "./home-row-layout-CcGOwHDw.js";
import {
  m as T,
  p as ge,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~appgen-publication-terms-ro~g0k1g2bt-B6jrUW_u.js";
import { n as E, t as _e } from "./plus-sm-KfWVXCbv.js";
var D = n((e, t) => {
    function n(e, t, n) {
      return (
        e === e &&
          (n !== void 0 && (e = e <= n ? e : n),
          t !== void 0 && (e = e >= t ? e : t)),
        e
      );
    }
    t.exports = n;
  }),
  O = n((e, t) => {
    var n = D(),
      r = y();
    function i(e, t, i) {
      return (
        i === void 0 && ((i = t), (t = void 0)),
        i !== void 0 && ((i = r(i)), (i = i === i ? i : 0)),
        t !== void 0 && ((t = r(t)), (t = t === t ? t : 0)),
        n(r(e), t, i)
      );
    }
    t.exports = i;
  });
function ve(e, t) {
  let n = new Set();
  return e.filter((e) => {
    let r = e.name.slice(e.name.lastIndexOf(`:`) + 1),
      i = e.description.match(A)?.[1]?.toLowerCase();
    return !e.enabled ||
      !r.startsWith(k) ||
      i !== t ||
      !e.interface?.iconLarge?.trim() ||
      n.has(r)
      ? !1
      : (n.add(r), !0);
  });
}
var k,
  A,
  j = e(() => {
    ((k = `artifact-template-`),
      (A = /^Create a (document|presentation|spreadsheet) using the /iu));
  }),
  M,
  N,
  P,
  F = e(() => {
    ((M = `_card_1bthu_1`),
      (N = `_homeArtifactTemplatesEnter_1bthu_1`),
      (P = { card: M, homeArtifactTemplatesEnter: N }));
  });
function I() {
  let e = (0, R.c)(50),
    t = ce(),
    n = (0, B.useRef)(null),
    r = (0, B.useRef)(null),
    i = (0, B.useRef)(null),
    [a, o] = (0, B.useState)(!1),
    [c, l] = (0, B.useState)(!1),
    u = s(ne),
    d = s(te),
    f = s(ie),
    p = de(),
    m = ue(t, xe),
    h = m != null,
    g;
  e[0] === h ? (g = e[1]) : ((g = { enabled: h }), (e[0] = h), (e[1] = g));
  let { skills: v } = le(u ?? void 0, d, g),
    y = m == null ? [] : ve(v, m),
    b = y.map(be).join(`
`),
    x;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (e) => {
        let { maximum: t, minimum: n } = L(e);
        (o(e.scrollLeft > n + 1), l(e.scrollLeft < t - 1));
      }),
      (e[2] = x))
    : (x = e[2]);
  let S = pe(x),
    C = (e) => {
      if (
        (r.current?.disconnect(),
        (n.current = e),
        e == null || b === `` || (S(e), typeof ResizeObserver > `u`))
      )
        return;
      let t = new ResizeObserver(() => S(e));
      (t.observe(e),
        e.firstElementChild != null && t.observe(e.firstElementChild),
        e.lastElementChild != null && t.observe(e.lastElementChild),
        (r.current = t));
    };
  if (m == null || y.length === 0) return null;
  let w;
  e[3] === v ? (w = e[4]) : ((w = v.find(ye)), (e[3] = v), (e[4] = w));
  let T = w,
    E = m === `document`,
    D;
  e[5] === p
    ? (D = e[6])
    : ((D = p.formatMessage({
        id: `home.artifactTemplates.create`,
        defaultMessage: `Create a template`,
        description: `Accessible label for adding the Template Creator skill from the artifact template gallery`,
      })),
      (e[5] = p),
      (e[6] = D));
  let O = D,
    k;
  e[7] === t
    ? (k = e[8])
    : ((k = (e) => {
        let { state: n, dispatch: r } = t.view,
          i = re.atEnd(n.doc),
          a = i.$from.nodeBefore;
        (r(n.tr.setSelection(i)),
          a != null &&
            (!a.isText || !/\s$/.test(a.text ?? ``)) &&
            t.insertTextAtSelection(` `),
          t.insertSkillMentionAtSelection(e));
      }),
      (e[7] = t),
      (e[8] = k));
  let A = k,
    j;
  e[9] !== f || e[10] !== S
    ? ((j = (e) => {
        let t = n.current;
        if (t == null) return;
        let { maximum: r, minimum: a } = L(t),
          o = (0, z.default)(t.scrollLeft + e * t.clientWidth, a, r);
        if (
          (i.current?.stop(), t.style.removeProperty(`scroll-snap-type`), f)
        ) {
          (t.scrollTo({ left: o }), S(t));
          return;
        }
        ((t.style.scrollSnapType = `none`),
          (i.current = se(t.scrollLeft, o, {
            duration: 0.2,
            ease: [0.165, 0.84, 0.44, 1],
            onUpdate: (e) => t.scrollTo({ left: e }),
            onComplete: () => {
              (t.style.removeProperty(`scroll-snap-type`),
                n.current === t && S(t));
            },
          })));
      }),
      (e[9] = f),
      (e[10] = S),
      (e[11] = j))
    : (j = e[11]);
  let M = j,
    N;
  e[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((N = (0, V.jsx)(`div`, {
        className: `flex min-w-0 flex-1 py-row-y text-left`,
        children: (0, V.jsx)(he, {
          children: (0, V.jsx)(me, {
            className: `font-normal text-token-text-secondary`,
            children: (0, V.jsx)(fe, {
              id: `home.artifactTemplates.title`,
              defaultMessage: `Templates`,
              description: `Section title for document, presentation, and spreadsheet template cards under the home composer`,
            }),
          }),
        }),
      })),
      (e[12] = N))
    : (N = e[12]);
  let F;
  e[13] !== O || e[14] !== A || e[15] !== T
    ? ((F =
        T == null
          ? null
          : (0, V.jsx)(oe, {
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              "aria-label": O,
              title: O,
              onClick: () => A(T),
              children: (0, V.jsx)(_e, { className: `icon-xs` }),
            })),
      (e[13] = O),
      (e[14] = A),
      (e[15] = T),
      (e[16] = F))
    : (F = e[16]);
  let I;
  e[17] === p
    ? (I = e[18])
    : ((I = p.formatMessage({
        id: `home.artifactTemplates.previous`,
        defaultMessage: `Show previous templates`,
        description: `Accessible label for scrolling the artifact template gallery backward`,
      })),
      (e[17] = p),
      (e[18] = I));
  let U;
  e[19] === p
    ? (U = e[20])
    : ((U = p.formatMessage({
        id: `home.artifactTemplates.next`,
        defaultMessage: `Show more templates`,
        description: `Accessible label for scrolling the artifact template gallery forward`,
      })),
      (e[19] = p),
      (e[20] = U));
  let W, G;
  e[21] === M
    ? ((W = e[22]), (G = e[23]))
    : ((W = () => M(-1)),
      (G = () => M(1)),
      (e[21] = M),
      (e[22] = W),
      (e[23] = G));
  let K;
  e[24] !== a ||
  e[25] !== c ||
  e[26] !== I ||
  e[27] !== U ||
  e[28] !== W ||
  e[29] !== G
    ? ((K = (0, V.jsx)(ee, {
        backLabel: I,
        canGoBack: a,
        canGoForward: c,
        forwardLabel: U,
        onBack: W,
        onForward: G,
      })),
      (e[24] = a),
      (e[25] = c),
      (e[26] = I),
      (e[27] = U),
      (e[28] = W),
      (e[29] = G),
      (e[30] = K))
    : (K = e[30]);
  let q;
  e[31] !== F || e[32] !== K
    ? ((q = (0, V.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-1 px-3 py-1.5`,
        children: [N, F, K],
      })),
      (e[31] = F),
      (e[32] = K),
      (e[33] = q))
    : (q = e[33]);
  let J;
  e[34] === p
    ? (J = e[35])
    : ((J = p.formatMessage({
        id: `home.artifactTemplates.gallery`,
        defaultMessage: `Templates`,
        description: `Accessible label for the document, presentation, or spreadsheet template gallery`,
      })),
      (e[34] = p),
      (e[35] = J));
  let Y;
  e[36] === S
    ? (Y = e[37])
    : ((Y = (e) => S(e.currentTarget)), (e[36] = S), (e[37] = Y));
  let X;
  e[38] !== A || e[39] !== p || e[40] !== E
    ? ((X = (e, t) => {
        let n = ae(e),
          r = ge(e, { size: `large` });
        return (0, V.jsxs)(
          `button`,
          {
            type: `button`,
            className: _(
              P.card,
              `group relative -m-1 flex min-w-0 shrink-0 snap-start cursor-interaction flex-col gap-2 rounded-2xl p-1 text-left outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-token-focus-border`,
              E
                ? `basis-full sm:basis-[calc((100%_-_4rem)/5)]`
                : `basis-full sm:basis-[calc((100%_-_2rem)/3)]`,
            ),
            style: {
              animationDelay: `calc(var(--transition-duration-basic) + ${t * H}ms)`,
            },
            "aria-label": p.formatMessage(
              {
                id: `home.artifactTemplates.useSkill`,
                defaultMessage: `Use {title}`,
                description: `Accessible label for selecting a document, presentation, or spreadsheet template skill`,
              },
              { title: n },
            ),
            onClick: () => A(e),
            children: [
              (0, V.jsx)(`div`, {
                className: _(
                  `overflow-hidden rounded-xl border border-token-border bg-token-main-surface-primary shadow-sm ring-4 ring-transparent group-hover:ring-token-border-light group-focus-visible:ring-token-focus-border`,
                  E ? `aspect-[4/5]` : `aspect-video`,
                ),
                children: (0, V.jsx)(r, {
                  className: `h-full w-full [&_img]:object-cover [&_img]:object-top`,
                }),
              }),
              (0, V.jsx)(`div`, {
                className: `min-w-0 -translate-y-0.5 truncate pr-2 pb-1 pl-0.5 text-sm leading-5 font-normal tracking-normal text-token-text-secondary group-hover:text-token-text-primary group-focus-visible:text-token-text-primary`,
                children: n,
              }),
            ],
          },
          e.path,
        );
      }),
      (e[38] = A),
      (e[39] = p),
      (e[40] = E),
      (e[41] = X))
    : (X = e[41]);
  let Z = y.map(X),
    Q;
  e[42] !== C || e[43] !== J || e[44] !== Y || e[45] !== Z
    ? ((Q = (0, V.jsx)(`div`, {
        ref: C,
        className: `hide-scrollbar flex snap-x snap-mandatory gap-4 overflow-x-auto px-3 py-1`,
        role: `group`,
        "aria-label": J,
        onScroll: Y,
        children: Z,
      })),
      (e[42] = C),
      (e[43] = J),
      (e[44] = Y),
      (e[45] = Z),
      (e[46] = Q))
    : (Q = e[46]);
  let $;
  return (
    e[47] !== q || e[48] !== Q
      ? (($ = (0, V.jsxs)(`section`, {
          "data-home-artifact-templates": !0,
          className: `mx-auto mt-0.5 flex w-full max-w-3xl min-w-0 flex-col gap-1 pb-1`,
          children: [q, Q],
        })),
        (e[47] = q),
        (e[48] = Q),
        (e[49] = $))
      : ($ = e[49]),
    $
  );
}
function ye(e) {
  return (
    e.enabled &&
    (e.name === `template-creator` || e.name.endsWith(`:template-creator`))
  );
}
function be(e) {
  return e.path;
}
function xe(e) {
  return C(e.view.state.doc);
}
function L(e) {
  let t = e.firstElementChild,
    n = Math.max(0, e.scrollWidth - e.clientWidth);
  return {
    maximum: n,
    minimum: Math.min(
      n,
      t instanceof HTMLElement ? Math.max(0, t.offsetLeft - e.offsetLeft) : 0,
    ),
  };
}
var R, z, B, V, H;
e(() => {
  ((R = a()),
    g(),
    p(),
    (z = t(O(), 1)),
    r(),
    u(),
    (B = t(i(), 1)),
    b(),
    S(),
    j(),
    c(),
    d(),
    w(),
    E(),
    l(),
    f(),
    T(),
    m(),
    v(),
    x(),
    h(),
    F(),
    (V = o()),
    (H = 25));
})();
export { I as HomeArtifactTemplates };
//# sourceMappingURL=home-artifact-templates-D0u8_Ecs.js.map
