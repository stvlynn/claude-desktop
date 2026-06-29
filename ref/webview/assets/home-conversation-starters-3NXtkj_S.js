import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  D as r,
  E as i,
  Gs as a,
  Ko as o,
  Ni as s,
  Vo as c,
  _c as l,
  cc as u,
  gc as d,
  lc as f,
  qs as p,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Ad as m,
  Dd as h,
  Ed as g,
  Em as _,
  Gl as v,
  Id as y,
  If as b,
  Kl as x,
  Km as S,
  Ku as C,
  Lf as w,
  Tm as ee,
  Xu as T,
  dt as E,
  ft as D,
  gh as O,
  hh as k,
  mh as te,
  op as ne,
  pt as re,
  qm as A,
  qu as j,
  sp as M,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Bl as N,
  Iy as P,
  Jd as ie,
  Kp as ae,
  Rl as oe,
  Vy as se,
  Yd as ce,
  vg as le,
  yg as F,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  gp as I,
  hp as L,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  n as R,
  r as z,
  t as B,
} from "./conversation-starter-card-Ddm44v7Z.js";
import { r as V, t as H } from "./home-use-cases-data-BeTzhg1t.js";
import { n as U, t as ue } from "./use-recommended-skills-CV2-DQzf.js";
function W(e) {
  let t = H.find((t) => t.id === e);
  if (!t) throw Error(`Missing home use case: ${e}`);
  return t;
}
var G,
  de = e(() => {
    (V(), (G = [W(`snake-game`), W(`one-page-pdf`), W(`create-plan`)]));
  });
function fe(e) {
  let t = (0, K.c)(35),
    { activeWorkspaceRoot: n, hostId: r, portalTarget: a } = e,
    s = o(i),
    c = se(),
    l = w(),
    u = D(),
    [d, f] = p($),
    m = ge(u, n, r),
    h = !re(u, he),
    g = (0, J.useRef)(!1),
    _;
  t[0] !== d || t[1] !== h || t[2] !== s
    ? ((_ = () => {
        d ||
          !h ||
          g.current ||
          ((g.current = !0),
          N(s, ce, {
            promptIds: G.map(me).join(`,`),
            promptTypes: G.map(pe).join(`,`),
            promptCount: G.length,
          }));
      }),
      (t[0] = d),
      (t[1] = h),
      (t[2] = s),
      (t[3] = _))
    : (_ = t[3]);
  let v;
  if (
    (t[4] !== l.accountId ||
    t[5] !== l.userId ||
    t[6] !== d ||
    t[7] !== h ||
    t[8] !== s
      ? ((v = [l.accountId, l.userId, d, h, s]),
        (t[4] = l.accountId),
        (t[5] = l.userId),
        (t[6] = d),
        (t[7] = h),
        (t[8] = s),
        (t[9] = v))
      : (v = t[9]),
    (0, J.useEffect)(_, v),
    d)
  )
    return null;
  let y = h ? `opacity-100` : `pointer-events-none opacity-0`,
    b;
  t[10] === y
    ? (b = t[11])
    : ((b = te(
        `[@container_home-main-content_(max-height:399px)]:hidden [@container_home-main-content_(max-width:449px)]:hidden [container-type:inline-size] mx-auto flex w-full max-w-3xl flex-col gap-2 motion-safe:transition-opacity motion-safe:duration-200`,
        y,
      )),
      (t[10] = y),
      (t[11] = b));
  let x = !h,
    S = !h,
    C;
  t[12] === c
    ? (C = t[13])
    : ((C = c.formatMessage({
        id: `home.conversationStarters.hide`,
        defaultMessage: `Hide conversation starters`,
        description: `Aria label for permanently hiding the home page conversation starters`,
      })),
      (t[12] = c),
      (t[13] = C));
  let T;
  t[14] === f
    ? (T = t[15])
    : ((T = () => {
        f(!0);
      }),
      (t[14] = f),
      (t[15] = T));
  let E;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = (0, X.jsx)(ne, { className: `icon-xs` })), (t[16] = E))
    : (E = t[16]);
  let O;
  t[17] !== C || t[18] !== T
    ? ((O = (0, X.jsx)(`div`, {
        className: `flex items-center justify-end`,
        children: (0, X.jsx)(ee, {
          className: `focus-visible:outline-token-focus mt-0.5 text-token-description-foreground transition-colors hover:text-token-foreground focus-visible:outline focus-visible:outline-offset-2`,
          "aria-label": C,
          color: `ghost`,
          size: `icon`,
          onClick: T,
          children: E,
        }),
      })),
      (t[17] = C),
      (t[18] = T),
      (t[19] = O))
    : (O = t[19]);
  let k;
  t[20] !== m || t[21] !== c || t[22] !== s
    ? ((k = G.map((e, t) =>
        (0, X.jsx)(
          R,
          {
            icon: (0, X.jsx)(B, { name: e.iconName }),
            mode: e.mode,
            initialCollaborationMode: e.initialCollaborationMode,
            onSelect: (n, r, i) => {
              (N(s, ie, {
                promptId: e.id,
                promptIndex: t,
                promptType: Q,
                mode: r,
              }),
                m(n, r, e.skillName, i));
            },
            prompt: c.formatMessage(e.promptMessage),
          },
          e.id,
        ),
      )),
      (t[20] = m),
      (t[21] = c),
      (t[22] = s),
      (t[23] = k))
    : (k = t[23]);
  let A;
  t[24] === k
    ? (A = t[25])
    : ((A = (0, X.jsx)(`div`, {
        className: `grid grid-cols-3 gap-2`,
        children: k,
      })),
      (t[24] = k),
      (t[25] = A));
  let j;
  t[26] !== O || t[27] !== A || t[28] !== b || t[29] !== x || t[30] !== S
    ? ((j = (0, X.jsxs)(`div`, {
        className: b,
        inert: x,
        "aria-hidden": S,
        children: [O, A],
      })),
      (t[26] = O),
      (t[27] = A),
      (t[28] = b),
      (t[29] = x),
      (t[30] = S),
      (t[31] = j))
    : (j = t[31]);
  let M = j,
    P;
  return (
    t[32] !== M || t[33] !== a
      ? ((P = a ? (0, Y.createPortal)(M, a) : M),
        (t[32] = M),
        (t[33] = a),
        (t[34] = P))
      : (P = t[34]),
    P
  );
}
function pe() {
  return Q;
}
function me(e) {
  return e.id;
}
function he(e) {
  return e.hasText();
}
function ge(e, t, n) {
  let r = (0, K.c)(11),
    i = o(m),
    { setSelectedMode: a } = I(),
    s = u(),
    c;
  r[0] === n
    ? (c = r[1])
    : ((c = { hostId: n, loadOnMount: !1 }), (r[0] = n), (r[1] = c));
  let { ensureSkillByName: l, installSkill: d } = U(c),
    f;
  return (
    r[2] !== t ||
    r[3] !== e ||
    r[4] !== l ||
    r[5] !== n ||
    r[6] !== d ||
    r[7] !== s ||
    r[8] !== i ||
    r[9] !== a
      ? ((f = (r, o, c, u) => {
          (x(i, g({ cwd: t, hostId: n }), o), u && a(u));
          let f = r.match(Z),
            p = c ?? f?.[1] ?? null,
            m = f?.[0] ?? (c ? `$${c}` : null);
          if (!p || !m) {
            (e.setText(r), e.focus());
            return;
          }
          (e.setText(r),
            e.focus(),
            (async () => {
              let i = C(
                await F(`list-skills-for-host`, { hostId: n, cwds: [t] }),
                p,
              );
              if (i) {
                if (e.getText() !== r) return;
                (e.setPromptText(
                  r.replace(m, j({ name: i.name, path: i.path })),
                ),
                  e.focus());
                return;
              }
              let a = await l(p);
              if (!a) return;
              let o = await d({ skill: a });
              !o.success ||
                !o.destination ||
                ((async () => {
                  (await F(`list-skills-for-host`, {
                    hostId: n,
                    cwds: [t],
                    forceReload: !0,
                  }),
                    await s.invalidateQueries({ queryKey: [`skills`] }));
                })(),
                e.getText() === r &&
                  (e.setPromptText(
                    r.replace(
                      m,
                      j({
                        name: a.name,
                        path: q.default.join(o.destination, `SKILL.md`),
                      }),
                    ),
                  ),
                  e.focus()));
            })());
        }),
        (r[2] = t),
        (r[3] = e),
        (r[4] = l),
        (r[5] = n),
        (r[6] = d),
        (r[7] = s),
        (r[8] = i),
        (r[9] = a),
        (r[10] = f))
      : (f = r[10]),
    f
  );
}
var K, q, J, Y, X, Z, Q, $;
e(() => {
  ((K = d()),
    (q = t(s(), 1)),
    ae(),
    n(),
    k(),
    a(),
    c(),
    (J = t(l(), 1)),
    (Y = t(O(), 1)),
    P(),
    le(),
    b(),
    _(),
    h(),
    v(),
    E(),
    L(),
    M(),
    oe(),
    r(),
    y(),
    T(),
    ue(),
    S(),
    z(),
    de(),
    (X = f()),
    (Z = /\$([a-z0-9-]+)/i),
    (Q = `home_conversation_starter`),
    ($ = A(`has-hidden-home-conversation-starters`, !1)));
})();
export { fe as HomeConversationStarters };
//# sourceMappingURL=home-conversation-starters-3NXtkj_S.js.map
