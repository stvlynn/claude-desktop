import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Gs as n,
  Ko as r,
  Vo as i,
  Zs as a,
  _c as o,
  gc as s,
  lc as c,
  qs as l,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Ad as u,
  Bs as d,
  Em as f,
  Hs as p,
  Id as m,
  Pd as h,
  Rs as g,
  Tm as _,
  Us as v,
  Vs as y,
  dt as b,
  ft as x,
  gh as S,
  hh as C,
  mh as w,
  op as T,
  pt as E,
  sp as D,
  zs as O,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as k,
  Vy as A,
  zy as j,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Sp as M,
  gp as ee,
  hp as N,
  yp as P,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  Cn as F,
  Sn as te,
  X as I,
  Y as L,
  bn as ne,
  xn as R,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
function z(e) {
  let t = (0, B.c)(31),
    { actions: n, icon: r, layout: i, meta: a, suggestionId: o, title: s } = e,
    c = (i === void 0 ? `inline` : i) === `stacked`,
    l = c ? `py-2` : `py-1.5`,
    u;
  t[0] === l
    ? (u = t[1])
    : ((u = w(
        `relative inline-flex max-w-full min-w-0 items-center justify-between gap-4 overflow-hidden rounded-3xl border border-token-border/80 bg-token-dropdown-background/90 pr-2 pl-3 text-token-foreground shadow-md backdrop-blur-sm`,
        l,
      )),
      (t[0] = l),
      (t[1] = u));
  let d = c ? `items-start` : `items-center`,
    f;
  t[2] === d
    ? (f = t[3])
    : ((f = w(`flex min-w-0 flex-1 gap-2`, d)), (t[2] = d), (t[3] = f));
  let p;
  t[4] === r
    ? (p = t[5])
    : ((p =
        r == null
          ? null
          : (0, V.jsx)(`span`, {
              className: `flex items-center justify-center text-token-foreground`,
              children: r,
            })),
      (t[4] = r),
      (t[5] = p));
  let m = c ? `flex flex-col gap-1 text-sm` : `flex items-center gap-2`,
    h;
  t[6] === m
    ? (h = t[7])
    : ((h = w(`min-w-0 flex-1`, m)), (t[6] = m), (t[7] = h));
  let g = c ? `min-w-0 leading-5 break-words` : `truncate leading-[18px]`,
    _;
  t[8] === g
    ? (_ = t[9])
    : ((_ = w(`text-sm font-medium text-token-foreground`, g)),
      (t[8] = g),
      (t[9] = _));
  let v;
  t[10] !== _ || t[11] !== s
    ? ((v = (0, V.jsx)(`span`, { className: _, children: s })),
      (t[10] = _),
      (t[11] = s),
      (t[12] = v))
    : (v = t[12]);
  let y;
  t[13] !== c || t[14] !== a
    ? ((y = a
        ? (0, V.jsx)(`span`, {
            className: w(
              `text-sm text-token-description-foreground`,
              c ? `leading-4` : `hidden leading-none @[500px]:inline`,
            ),
            children: a,
          })
        : null),
      (t[13] = c),
      (t[14] = a),
      (t[15] = y))
    : (y = t[15]);
  let b;
  t[16] !== v || t[17] !== y || t[18] !== h
    ? ((b = (0, V.jsxs)(`div`, { className: h, children: [v, y] })),
      (t[16] = v),
      (t[17] = y),
      (t[18] = h),
      (t[19] = b))
    : (b = t[19]);
  let x;
  t[20] !== b || t[21] !== f || t[22] !== p
    ? ((x = (0, V.jsxs)(`div`, { className: f, children: [p, b] })),
      (t[20] = b),
      (t[21] = f),
      (t[22] = p),
      (t[23] = x))
    : (x = t[23]);
  let S;
  t[24] === n
    ? (S = t[25])
    : ((S = (0, V.jsx)(`div`, {
        className: `flex shrink-0 items-center gap-1`,
        children: n,
      })),
      (t[24] = n),
      (t[25] = S));
  let C;
  return (
    t[26] !== o || t[27] !== x || t[28] !== S || t[29] !== u
      ? ((C = (0, V.jsx)(`div`, {
          className: `pointer-events-auto flex w-full max-w-full justify-center`,
          children: (0, V.jsxs)(`div`, {
            className: u,
            "data-codex-above-composer-suggestion": o,
            children: [x, S],
          }),
        })),
        (t[26] = o),
        (t[27] = x),
        (t[28] = S),
        (t[29] = u),
        (t[30] = C))
      : (C = t[30]),
    C
  );
}
var B,
  V,
  H = e(() => {
    ((B = s()), C(), (V = c()));
  });
function re({
  intl: e,
  artifactPluginSuggestionKind: t,
  activateArtifactPlugin: n,
  setDismissedSuggestionIds: r,
}) {
  if (t == null) return null;
  let i = R(t),
    { icon: a, pluginName: o, title: s } = ie(e, t);
  return {
    id: i,
    title: s,
    icon: a,
    meta: (0, U.jsx)(j, {
      id: `composer.aboveSuggestion.artifact.shortcutWithAction`,
      defaultMessage: `{shortcut}`,
      description: `Keyboard shortcut hint shown before an artifact plugin suggestion button`,
      values: {
        shortcut: (0, U.jsx)(_, {
          "aria-hidden": !0,
          tabIndex: -1,
          color: `outline`,
          size: `composerSm`,
          className: `pointer-events-none !h-auto rounded-md px-1 py-0.5 text-xs !leading-none`,
          children: (0, U.jsx)(j, {
            id: `composer.aboveSuggestion.artifact.shortcut`,
            defaultMessage: `Shift + Tab`,
            description: `Keyboard shortcut hint shown next to an artifact plugin suggestion button`,
          }),
        }),
      },
    }),
    actionLabel: e.formatMessage(
      {
        id: `composer.aboveSuggestion.artifact.action`,
        defaultMessage: `Use {pluginName}`,
        description: `Primary button label for activating an artifact creation plugin from an above-composer suggestion`,
      },
      { pluginName: o },
    ),
    onAction: () => n(t),
    onDismiss: () => r((e) => (e.includes(i) ? e : [...e, i])),
  };
}
function ie(e, t) {
  switch (t) {
    case `document`:
      return {
        icon: g,
        pluginName: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.document.pluginName`,
          defaultMessage: `Documents`,
          description: `Documents plugin name in the above-composer artifact suggestion`,
        }),
        title: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.document.title`,
          defaultMessage: `Create a document`,
          description: `Title for the above-composer Documents plugin suggestion`,
        }),
      };
    case `presentation`:
      return {
        icon: p,
        pluginName: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.presentation.pluginName`,
          defaultMessage: `Presentations`,
          description: `Presentations plugin name in the above-composer artifact suggestion`,
        }),
        title: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.presentation.title`,
          defaultMessage: `Create a presentation`,
          description: `Title for the above-composer Presentations plugin suggestion`,
        }),
      };
    case `spreadsheet`:
      return {
        icon: d,
        pluginName: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.spreadsheet.pluginName`,
          defaultMessage: `Spreadsheets`,
          description: `Spreadsheets plugin name in the above-composer artifact suggestion`,
        }),
        title: e.formatMessage({
          id: `composer.aboveSuggestion.artifact.spreadsheet.title`,
          defaultMessage: `Create a spreadsheet`,
          description: `Title for the above-composer Spreadsheets plugin suggestion`,
        }),
      };
  }
}
var U,
  W = e(() => {
    (k(), f(), v(), y(), O(), F(), (U = c()));
  });
function ae({
  composerText: e,
  hasPlanMode: t,
  isPlanMode: n,
  isDismissed: r,
  showPlanKeywordSuggestion: i,
}) {
  return !i || !t || n || r ? !1 : G.test(e);
}
var G,
  K,
  q = e(() => {
    ((G = /\bplan\b/i), (K = `keyword-plan-mode`));
  });
function oe({
  intl: e,
  shouldShowPlanSuggestion: t,
  setSelectedCollaborationMode: n,
  setDismissedSuggestionIds: r,
}) {
  return t
    ? {
        id: K,
        title: e.formatMessage({
          id: `composer.aboveSuggestion.plan.title`,
          defaultMessage: `Create a plan`,
          description: `Title for the above-composer plan keyword suggestion`,
        }),
        icon: L,
        meta: (0, J.jsx)(j, {
          id: `composer.aboveSuggestion.plan.shortcutWithAction`,
          defaultMessage: `{shortcut}`,
          description: `Keyboard shortcut hint shown before the above-composer plan suggestion button`,
          values: {
            shortcut: (0, J.jsx)(_, {
              "aria-hidden": !0,
              tabIndex: -1,
              color: `outline`,
              size: `composerSm`,
              className: `pointer-events-none !h-auto rounded-md px-1 py-0.5 text-xs !leading-none`,
              children: (0, J.jsx)(j, {
                id: `composer.aboveSuggestion.plan.shortcut`,
                defaultMessage: `Shift + Tab`,
                description: `Keyboard shortcut hint shown next to the above-composer plan suggestion button`,
              }),
            }),
          },
        }),
        actionLabel: e.formatMessage({
          id: `composer.aboveSuggestion.plan.action`,
          defaultMessage: `Use plan mode`,
          description: `Primary button label for enabling plan mode from the above-composer suggestion`,
        }),
        onAction: () => {
          n(`plan`);
        },
        onDismiss: () => {
          r((e) => (e.includes(`keyword-plan-mode`) ? e : [...e, K]));
        },
      }
    : null;
}
var J,
  se = e(() => {
    (k(), f(), q(), I(), (J = c()));
  });
function ce(e) {
  return re(e) ?? oe(e);
}
var le = e(() => {
  (W(), se());
});
function ue(e) {
  let t = (0, Y.c)(4),
    {
      portalTarget: n,
      hideArtifactPluginSuggestions: r,
      showPlanKeywordSuggestion: i,
    } = e;
  if (n == null) return null;
  let a;
  return (
    t[0] !== r || t[1] !== n || t[2] !== i
      ? ((a = (0, Q.jsx)(de, {
          portalTarget: n,
          hideArtifactPluginSuggestions: r,
          showPlanKeywordSuggestion: i,
        })),
        (t[0] = r),
        (t[1] = n),
        (t[2] = i),
        (t[3] = a))
      : (a = t[3]),
    a
  );
}
function de(e) {
  let t = (0, Y.c)(32),
    {
      portalTarget: n,
      hideArtifactPluginSuggestions: i,
      showPlanKeywordSuggestion: o,
    } = e,
    s = r(u),
    c = A(),
    d = x(),
    f;
  t[0] === s ? (f = t[1]) : ((f = h(s)), (t[0] = s), (t[1] = f));
  let p = f,
    { activeMode: m, modes: g, setSelectedMode: _ } = ee(p),
    v;
  t[2] === g ? (v = t[3]) : ((v = g.some(fe)), (t[2] = g), (t[3] = v));
  let y = v,
    b = m.mode === `plan`,
    S = pe(p),
    C;
  t[4] === S
    ? (C = t[5])
    : ((C = a(
        (e) => e(P)[S] ?? [],
        (e, t, n) => {
          t(P, (e) => {
            let t = e[S] ?? [],
              r = typeof n == `function` ? n(t) : n;
            return r === t ? e : { ...e, [S]: r };
          });
        },
      )),
      (t[4] = S),
      (t[5] = C));
  let [w, T] = l(C),
    D;
  t[6] === w ? (D = t[7]) : ((D = new Set(w)), (t[6] = w), (t[7] = D));
  let O = D,
    k;
  t[8] === i
    ? (k = t[9])
    : ((k = (e) => te(e.view.state.doc, i)), (t[8] = i), (t[9] = k));
  let j = E(d, k),
    M;
  t[10] !== O || t[11] !== j
    ? ((M = j != null && !O.has(R(j)) ? j : null),
      (t[10] = O),
      (t[11] = j),
      (t[12] = M))
    : (M = t[12]);
  let N = M,
    F;
  t[13] !== O || t[14] !== y || t[15] !== b || t[16] !== o
    ? ((F = (e) =>
        ae({
          composerText: e.view.state.doc.textContent,
          hasPlanMode: y,
          isPlanMode: b,
          isDismissed: O.has(K),
          showPlanKeywordSuggestion: o,
        })),
      (t[13] = O),
      (t[14] = y),
      (t[15] = b),
      (t[16] = o),
      (t[17] = F))
    : (F = t[17]);
  let I = E(d, F),
    L;
  t[18] === d ? (L = t[19]) : ((L = (e) => ne(d, e)), (t[18] = d), (t[19] = L));
  let z;
  t[20] !== N ||
  t[21] !== c ||
  t[22] !== T ||
  t[23] !== _ ||
  t[24] !== I ||
  t[25] !== L
    ? ((z = ce({
        intl: c,
        artifactPluginSuggestionKind: N,
        activateArtifactPlugin: L,
        shouldShowPlanSuggestion: I,
        setSelectedCollaborationMode: _,
        setDismissedSuggestionIds: T,
      })),
      (t[20] = N),
      (t[21] = c),
      (t[22] = T),
      (t[23] = _),
      (t[24] = I),
      (t[25] = L),
      (t[26] = z))
    : (z = t[26]);
  let B = z,
    V;
  t[27] !== n || t[28] !== B
    ? ((V = B
        ? (0, Z.createPortal)((0, Q.jsx)(me, { suggestion: B }, B.id), n)
        : null),
      (t[27] = n),
      (t[28] = B),
      (t[29] = V))
    : (V = t[29]);
  let H;
  return (
    t[30] === V
      ? (H = t[31])
      : ((H = (0, Q.jsx)(Q.Fragment, { children: V })),
        (t[30] = V),
        (t[31] = H)),
    H
  );
}
function fe(e) {
  return e.mode === `plan`;
}
function pe(e) {
  return e == null ? $ : `${e}`;
}
function me(e) {
  let t = (0, Y.c)(28),
    { suggestion: n } = e,
    r = A(),
    [i, a] = (0, X.useState)(!1),
    o = n.icon,
    s = n.actionDisabled === !0 || i,
    c = n.dismissOnAction !== !1,
    l;
  t[0] === o
    ? (l = t[1])
    : ((l = o ? (0, Q.jsx)(o, { className: `icon-xs shrink-0` }) : null),
      (t[0] = o),
      (t[1] = l));
  let u = l,
    d;
  t[2] !== s || t[3] !== c || t[4] !== n
    ? ((d = (e) => {
        if ((e.stopPropagation(), !s)) {
          try {
            let e = n.onAction();
            if (e && typeof e.then == `function`) {
              (a(!0),
                e
                  .then(() => {
                    c && n.onDismiss();
                  })
                  .catch(he)
                  .finally(() => {
                    a(!1);
                  }));
              return;
            }
          } catch {
            return;
          }
          c && n.onDismiss();
        }
      }),
      (t[2] = s),
      (t[3] = c),
      (t[4] = n),
      (t[5] = d))
    : (d = t[5]);
  let f = d,
    p;
  t[6] === n
    ? (p = t[7])
    : ((p = (e) => {
        (e.stopPropagation(), n.onDismiss());
      }),
      (t[6] = n),
      (t[7] = p));
  let m = p,
    h;
  t[8] !== f || t[9] !== s || t[10] !== i || t[11] !== n.actionLabel
    ? ((h = (0, Q.jsx)(_, {
        className: `px-2.5`,
        color: `secondary`,
        "data-codex-above-composer-suggestion-action": !0,
        size: `default`,
        disabled: s,
        loading: i,
        onClick: f,
        children: n.actionLabel,
      })),
      (t[8] = f),
      (t[9] = s),
      (t[10] = i),
      (t[11] = n.actionLabel),
      (t[12] = h))
    : (h = t[12]);
  let g;
  t[13] === r
    ? (g = t[14])
    : ((g = r.formatMessage({
        id: `composer.aboveSuggestion.dismiss`,
        defaultMessage: `Dismiss suggestion`,
        description: `Aria label for dismissing an above-composer suggestion`,
      })),
      (t[13] = r),
      (t[14] = g));
  let v;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Q.jsx)(T, { className: `icon-xs` })), (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] !== m || t[17] !== g
    ? ((y = (0, Q.jsx)(`button`, {
        type: `button`,
        className: `no-drag flex size-[22px] shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent text-token-description-foreground select-none hover:bg-token-list-hover-background focus:outline-none`,
        "aria-label": g,
        onClick: m,
        children: v,
      })),
      (t[16] = m),
      (t[17] = g),
      (t[18] = y))
    : (y = t[18]);
  let b;
  t[19] !== h || t[20] !== y
    ? ((b = (0, Q.jsxs)(Q.Fragment, { children: [h, y] })),
      (t[19] = h),
      (t[20] = y),
      (t[21] = b))
    : (b = t[21]);
  let x;
  return (
    t[22] !== u ||
    t[23] !== n.id ||
    t[24] !== n.meta ||
    t[25] !== n.title ||
    t[26] !== b
      ? ((x = (0, Q.jsx)(z, {
          actions: b,
          icon: u,
          meta: n.meta,
          suggestionId: n.id,
          title: n.title,
        })),
        (t[22] = u),
        (t[23] = n.id),
        (t[24] = n.meta),
        (t[25] = n.title),
        (t[26] = b),
        (t[27] = x))
      : (x = t[27]),
    x
  );
}
function he() {}
var Y, X, Z, Q, $;
e(() => {
  ((Y = s()),
    n(),
    i(),
    (X = t(o(), 1)),
    (Z = t(S(), 1)),
    k(),
    F(),
    f(),
    M(),
    D(),
    m(),
    H(),
    le(),
    q(),
    b(),
    N(),
    (Q = c()),
    ($ = `__new-thread__`));
})();
export { ue as AboveComposerSuggestions };
//# sourceMappingURL=above-composer-suggestions-EVJBi7fI.js.map
