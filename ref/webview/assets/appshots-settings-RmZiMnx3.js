import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  D as r,
  E as i,
  Is as a,
  Ko as o,
  O as s,
  Vo as c,
  _c as l,
  gc as u,
  h as d,
  lc as f,
  m as p,
  ot as m,
  qo as h,
  tc as ee,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Ms as te,
  Ps as g,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  An as _,
  Hm as v,
  Op as y,
  Um as b,
  eo as ne,
  kn as x,
  kp as S,
  no as C,
  oo as w,
  zm as T,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Bl as re,
  Fy as E,
  Iy as D,
  Kp as O,
  Rl as k,
  Vy as A,
  nv as j,
  sy as M,
  tu as ie,
  tv as N,
  ty as P,
  zy as F,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  bn as ae,
  f as I,
  p as L,
  yn as oe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Fn as R,
  In as z,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  H as se,
  R as ce,
  V as le,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  J as ue,
  d as B,
  f as de,
  q as V,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import {
  i as H,
  n as fe,
  r as U,
  t as pe,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~settings-page~appgen-li~oiv69xe5-CLPVtyft.js";
import {
  r as me,
  t as he,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js";
var W,
  ge = e(() => {
    W = `` + new URL(`appshot-demo-DcV9m9GT.mp4`, import.meta.url).href;
  });
function _e() {
  let e = (0, G.c)(42),
    t = o(i),
    n = h(H),
    r = ae(),
    [a, s] = (0, K.useState)(null),
    { data: c } = h(Y),
    l;
  e[0] !== r || e[1] !== t
    ? ((l = {
        mutationFn: ve,
        onSuccess: (e) => {
          (t.query.setData(Y, e.state), r(J));
        },
      }),
      (e[0] = r),
      (e[1] = t),
      (e[2] = l))
    : (l = e[2]);
  let u = ee(l);
  if (!n || c?.supported === !1) return null;
  let d;
  e[3] !== t || e[4] !== u
    ? ((d = async function (e, n) {
        s(null);
        try {
          let r = await u.mutateAsync({ hotkey: e });
          if (!r.success) {
            s(r.error);
            return;
          }
          re(t, ie, { hotkey: e ?? void 0, enabled: e != null, source: n });
        } catch (e) {
          let t = e;
          s(t instanceof Error ? t.message : String(t));
        }
      }),
      (e[3] = t),
      (e[4] = u),
      (e[5] = d))
    : (d = e[5]);
  let f = d,
    p = c?.configuredHotkey ?? null,
    m;
  e[6] === p
    ? (m = e[7])
    : ((m = X.find((e) => e.hotkey === p) ?? null), (e[6] = p), (e[7] = m));
  let g = m,
    _;
  e[8] !== p || e[9] !== g?.label
    ? ((_ = g?.label ?? (p == null ? null : te(p))),
      (e[8] = p),
      (e[9] = g?.label),
      (e[10] = _))
    : (_ = e[10]);
  let v = _,
    b = g?.hotkey ?? null,
    x;
  e[11] !== a || e[12] !== b
    ? ((x =
        b == null && a == null
          ? void 0
          : (0, q.jsxs)(`div`, {
              className: `flex flex-col gap-1`,
              children: [
                b == null ? null : (0, q.jsx)(ye, { hotkey: b }),
                a
                  ? (0, q.jsx)(`span`, {
                      className: `text-token-error-foreground`,
                      children: a,
                    })
                  : null,
              ],
            })),
      (e[11] = a),
      (e[12] = b),
      (e[13] = x))
    : (x = e[13]);
  let S = x,
    w;
  e[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, q.jsx)(F, {
        id: `settings.appshotHotkey.label`,
        defaultMessage: `Hotkey`,
        description: `Label for appshot hotkey setting`,
      })),
      (e[14] = w))
    : (w = e[14]);
  let T = u.isPending,
    E;
  e[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((E = { width: 80 }), (e[15] = E))
    : (E = e[15]);
  let D;
  e[16] === v
    ? (D = e[17])
    : ((D =
        v ??
        (0, q.jsx)(F, {
          id: `settings.appshotHotkey.none`,
          defaultMessage: `None`,
          description: `Label for disabling the appshot hotkey`,
        })),
      (e[16] = v),
      (e[17] = D));
  let O;
  e[18] !== u.isPending || e[19] !== D
    ? ((O = (0, q.jsx)(ce, { disabled: u.isPending, style: E, children: D })),
      (e[18] = u.isPending),
      (e[19] = D),
      (e[20] = O))
    : (O = e[20]);
  let k;
  e[21] !== f || e[22] !== p || e[23] !== g?.hotkey
    ? ((k = X.map((e) =>
        (0, q.jsx)(
          C.Item,
          {
            RightIcon: e.hotkey === g?.hotkey ? y : void 0,
            onSelect: () => {
              (s(null), e.hotkey !== p && f(e.hotkey, `capture`));
            },
            children: e.label,
          },
          e.hotkey,
        ),
      )),
      (e[21] = f),
      (e[22] = p),
      (e[23] = g?.hotkey),
      (e[24] = k))
    : (k = e[24]);
  let A = p == null ? y : void 0,
    j;
  e[25] !== f || e[26] !== p
    ? ((j = () => {
        (s(null), p != null && f(null, `disable`));
      }),
      (e[25] = f),
      (e[26] = p),
      (e[27] = j))
    : (j = e[27]);
  let M;
  e[28] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((M = (0, q.jsx)(F, {
        id: `settings.appshotHotkey.none`,
        defaultMessage: `None`,
        description: `Label for disabling the appshot hotkey`,
      })),
      (e[28] = M))
    : (M = e[28]);
  let N;
  e[29] !== A || e[30] !== j
    ? ((N = (0, q.jsx)(C.Item, { RightIcon: A, onSelect: j, children: M })),
      (e[29] = A),
      (e[30] = j),
      (e[31] = N))
    : (N = e[31]);
  let P;
  e[32] !== k || e[33] !== N
    ? ((P = (0, q.jsxs)(C.Section, { children: [k, N] })),
      (e[32] = k),
      (e[33] = N),
      (e[34] = P))
    : (P = e[34]);
  let I;
  e[35] !== u.isPending || e[36] !== P || e[37] !== O
    ? ((I = (0, q.jsx)(ne, {
        align: `end`,
        contentClassName: `min-w-20`,
        disabled: T,
        triggerButton: O,
        children: P,
      })),
      (e[35] = u.isPending),
      (e[36] = P),
      (e[37] = O),
      (e[38] = I))
    : (I = e[38]);
  let L;
  return (
    e[39] !== S || e[40] !== I
      ? ((L = (0, q.jsx)(R, { label: w, description: S, control: I })),
        (e[39] = S),
        (e[40] = I),
        (e[41] = L))
      : (L = e[41]),
    L
  );
}
async function ve(e) {
  let { hotkey: t } = e,
    n = N.appshotHotkeys;
  if (n == null) throw Error(`Appshot hotkeys are unavailable`);
  return n.setHotkey(t);
}
function ye(e) {
  let t = (0, G.c)(3),
    { hotkey: n } = e;
  switch (n) {
    case `DoubleCommand`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(F, {
              id: `settings.appshotHotkey.description.command`,
              defaultMessage: `Press both ⌘ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Command keys`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `DoubleOption`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(F, {
              id: `settings.appshotHotkey.description.option`,
              defaultMessage: `Press both ⌥ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Option keys`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `DoubleShift`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, q.jsx)(F, {
              id: `settings.appshotHotkey.description.shift`,
              defaultMessage: `Press both ⇧ keys simultaneously`,
              description: `Description shown when the appshot hotkey is both Shift keys`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
  }
}
var G,
  K,
  q,
  J,
  Y,
  X,
  be = e(() => {
    ((G = u()),
      O(),
      n(),
      c(),
      (K = t(l(), 1)),
      D(),
      U(),
      w(),
      S(),
      g(),
      k(),
      oe(),
      j(),
      r(),
      z(),
      se(),
      d(),
      (q = f()),
      (J = [`appshot-hotkey-state`]),
      (Y = a(i, () => ({
        queryKey: J,
        queryFn: async () => {
          let e = N.appshotHotkeys;
          return e == null
            ? { supported: !1, configuredHotkey: null, isActive: !1 }
            : e.getState();
        },
        staleTime: p.ONE_MINUTE,
      }))),
      (X = [
        { hotkey: `DoubleCommand`, label: `⌘ + ⌘` },
        { hotkey: `DoubleOption`, label: `⌥ + ⌥` },
        { hotkey: `DoubleShift`, label: `⇧ + ⇧` },
      ]));
  }),
  Z,
  xe = e(() => {
    (D(),
      (Z = E({
        capture: {
          id: `settings.appshots.hero.title`,
          defaultMessage: `Take an appshot to show Codex your frontmost window`,
          description: `Title for the Appshots settings explainer`,
        },
        soundEffect: {
          id: `settings.appshots.soundEffect.label`,
          defaultMessage: `Play sound effect`,
          description: `Label for the Appshots sound effect setting row`,
        },
      })));
  });
function Se() {
  let e = (0, Q.c)(9),
    t = A(),
    n = h(H),
    r = M(),
    { isLoading: i } = L();
  if (r || i || !n) return null;
  let a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(le, { slug: `appshots` })), (e[0] = a))
    : (a = e[0]);
  let o;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`img`, {
        alt: ``,
        "aria-hidden": !0,
        className: `h-[41.4px] w-[47.7px] shrink-0 object-contain`,
        src: pe,
      })),
      (e[1] = o))
    : (o = e[1]);
  let s;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, $.jsx)(`div`, {
        className: `text-base leading-[16pt] font-medium text-token-text-primary`,
        children: (0, $.jsx)(F, { ...Z.capture }),
      })),
      (e[2] = s))
    : (s = e[2]);
  let c;
  e[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, $.jsx)(B, {
        children: (0, $.jsx)(B.Content, {
          children: (0, $.jsx)(V, {
            className: `divide-y-0`,
            children: (0, $.jsxs)(`div`, {
              className: `flex items-start gap-2 p-2`,
              children: [
                o,
                (0, $.jsxs)(`div`, {
                  className: `flex min-w-0 flex-col gap-[2.5pt]`,
                  children: [
                    s,
                    (0, $.jsx)(`div`, {
                      className: `text-sm text-token-text-secondary`,
                      children: (0, $.jsx)(F, {
                        id: `settings.appshots.hero.description`,
                        defaultMessage: `Appshots include visual and text content, including text scrolled offscreen.`,
                        description: `Description for the Appshots settings explainer`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      })),
      (e[3] = c))
    : (c = e[3]);
  let l;
  e[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsxs)(`div`, {
        className: `grid gap-4 self-start`,
        children: [
          c,
          (0, $.jsx)(B, {
            children: (0, $.jsx)(B.Content, {
              children: (0, $.jsxs)(V, {
                variant: `secondary`,
                children: [(0, $.jsx)(_e, {}), (0, $.jsx)(Ce, {})],
              }),
            }),
          }),
        ],
      })),
      (e[4] = l))
    : (l = e[4]);
  let u;
  e[5] === t
    ? (u = e[6])
    : ((u = t.formatMessage({
        id: `settings.appshots.demoVideo.label`,
        defaultMessage: `Appshots walkthrough video`,
        description: `Accessible label for the Appshots settings walkthrough video`,
      })),
      (e[5] = t),
      (e[6] = u));
  let d;
  return (
    e[7] === u
      ? (d = e[8])
      : ((d = (0, $.jsx)(he, {
          title: a,
          children: (0, $.jsxs)(`div`, {
            className: `grid gap-4 lg:grid-cols-2`,
            children: [
              l,
              (0, $.jsx)(B, {
                className: `w-1/2 justify-self-center lg:w-auto lg:justify-self-stretch`,
                children: (0, $.jsx)(B.Content, {
                  children: (0, $.jsx)(V, {
                    className: `divide-y-0 overflow-hidden rounded-none border-0`,
                    children: (0, $.jsx)(`video`, {
                      "aria-label": u,
                      autoPlay: !0,
                      className: `aspect-[901/1095] w-full bg-token-bg-secondary object-cover`,
                      loop: !0,
                      muted: !0,
                      playsInline: !0,
                      preload: `auto`,
                      src: W,
                    }),
                  }),
                }),
              }),
            ],
          }),
        })),
        (e[7] = u),
        (e[8] = d)),
    d
  );
}
function Ce() {
  let e = (0, Q.c)(9),
    t = o(i),
    n = A(),
    r = b(m.soundEnabled),
    a;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(F, { ...Z.soundEffect })), (e[0] = a))
    : (a = e[0]);
  let s;
  e[1] === n
    ? (s = e[2])
    : ((s = n.formatMessage({
        id: `settings.appshots.soundEffect.ariaLabel`,
        defaultMessage: `Play appshot sound effect`,
        description: `Accessible label for the Appshots sound effect toggle`,
      })),
      (e[1] = n),
      (e[2] = s));
  let c;
  e[3] === t
    ? (c = e[4])
    : ((c = (e) => {
        v(t, m.soundEnabled, e);
      }),
      (e[3] = t),
      (e[4] = c));
  let l;
  return (
    e[5] !== r || e[6] !== s || e[7] !== c
      ? ((l = (0, $.jsx)(R, {
          label: a,
          control: (0, $.jsx)(x, { ariaLabel: s, checked: r, onChange: c }),
        })),
        (e[5] = r),
        (e[6] = s),
        (e[7] = c),
        (e[8] = l))
      : (l = e[8]),
    l
  );
}
var Q, $;
e(() => {
  ((Q = u()),
    c(),
    s(),
    D(),
    U(),
    ge(),
    fe(),
    _(),
    I(),
    r(),
    T(),
    me(),
    de(),
    z(),
    se(),
    ue(),
    P(),
    be(),
    xe(),
    ($ = f()));
})();
export { Se as AppshotsSettings };
//# sourceMappingURL=appshots-settings-RmZiMnx3.js.map
