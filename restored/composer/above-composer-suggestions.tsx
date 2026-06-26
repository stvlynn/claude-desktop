// Restored from ref/webview/assets/above-composer-suggestions-CAXbkE_4.js
// Above-composer suggestion chips from the Codex webview bundle.
import { once as e, toEsModule as t } from "../runtime/commonjs-interop";
import {
  AB as n,
  Al as r,
  BP as i,
  BV as a,
  DN as o,
  FB as s,
  JV as c,
  MA as l,
  NA as u,
  ON as d,
  OV as f,
  Ol as p,
  SV as m,
  VP as h,
  _o as g,
  bo as _,
  go as v,
  ho as y,
  iF as b,
  lF as x,
  qV as S,
  sF as C,
  vo as w,
  wV as ee,
  wl as te,
  yF as T,
  yo as E,
} from "./app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js";
import {
  Fn as ne,
  In as D,
  Pn as O,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~kvpgbdy1-mhRp2VYQ.js";
import {
  If as k,
  Mf as A,
  Nf as re,
  zf as j,
} from "./app-initial~app-main~onboarding-page~profile-QLPeiknY.js";
import {
  It as M,
  Lt as N,
  Rt as P,
  nt as F,
  tt as I,
  zt as L,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CIs8dplf.js";
function R(e) {
  let { actions, icon, layout, meta, suggestionId, title } = e,
    l = (layout === undefined ? "inline" : layout) === "stacked",
    u = l ? "py-2" : "py-1.5",
    d = i(
      "relative inline-flex max-w-full min-w-0 items-center justify-between gap-4 overflow-hidden rounded-3xl border border-token-border/80 bg-token-dropdown-background/90 pr-2 pl-3 text-token-foreground shadow-md backdrop-blur-sm",
      u,
    );
  let f = l ? "items-start" : "items-center",
    p = i("flex min-w-0 flex-1 gap-2", f);
  let m =
    icon == null ? null : (
      <span className="flex items-center justify-center text-token-foreground">
        {icon}
      </span>
    );
  let h = l ? "flex flex-col gap-1 text-sm" : "flex items-center gap-2",
    g = i("min-w-0 flex-1", h);
  let _ = l ? "min-w-0 leading-5 break-words" : "truncate leading-[18px]",
    v = i("text-sm font-medium text-token-foreground", _);
  let y = <span className={v}>{title}</span>;
  let b = meta ? (
    <span
      className={i(
        "text-sm text-token-description-foreground",
        l ? "leading-4" : "hidden leading-none @[500px]:inline",
      )}
    >
      {meta}
    </span>
  ) : null;
  let x = (
    <div className={g}>
      {y}
      {b}
    </div>
  );
  let S = (
    <div className={p}>
      {m}
      {x}
    </div>
  );
  let C = <div className="flex shrink-0 items-center gap-1">{actions}</div>;
  return (
    <div className="pointer-events-auto flex w-full max-w-full justify-center">
      <div className={d} data-codex-above-composer-suggestion={suggestionId}>
        {S}
        {C}
      </div>
    </div>
  );
}
var z,
  B,
  V = e(() => {
    z = S();
    h();
    B = a();
  });
function H({
  intl,
  artifactPluginSuggestionKind,
  activateArtifactPlugin,
  setDismissedSuggestionIds,
}) {
  if (artifactPluginSuggestionKind == null) return null;
  let i = N(artifactPluginSuggestionKind),
    { icon, pluginName, title } = U(intl, artifactPluginSuggestionKind);
  return {
    id: i,
    title,
    icon,
    meta: (
      <C
        id="composer.aboveSuggestion.artifact.shortcutWithAction"
        defaultMessage={"{shortcut}"}
        description="Keyboard shortcut hint shown before an artifact plugin suggestion button"
        values={{
          shortcut: W.jsx(o, {
            "aria-hidden": true,
            tabIndex: -1,
            color: "outline",
            size: "composerSm",
            className:
              "pointer-events-none !h-auto rounded-md px-1 py-0.5 text-xs !leading-none",
            children: (
              <C
                id="composer.aboveSuggestion.artifact.shortcut"
                defaultMessage="Shift + Tab"
                description="Keyboard shortcut hint shown next to an artifact plugin suggestion button"
              />
            ),
          }),
        }}
      />
    ),
    actionLabel: intl.formatMessage(
      {
        id: "composer.aboveSuggestion.artifact.action",
        defaultMessage: "Use {pluginName}",
        description:
          "Primary button label for activating an artifact creation plugin from an above-composer suggestion",
      },
      {
        pluginName,
      },
    ),
    onAction: () => activateArtifactPlugin(artifactPluginSuggestionKind),
    onDismiss: () =>
      setDismissedSuggestionIds((e) => (e.includes(i) ? e : [...e, i])),
  };
}
function U(e, t) {
  switch (t) {
    case "document":
      return {
        icon: y,
        pluginName: e.formatMessage({
          id: "composer.aboveSuggestion.artifact.document.pluginName",
          defaultMessage: "Documents",
          description:
            "Documents plugin name in the above-composer artifact suggestion",
        }),
        title: e.formatMessage({
          id: "composer.aboveSuggestion.artifact.document.title",
          defaultMessage: "Create a document",
          description:
            "Title for the above-composer Documents plugin suggestion",
        }),
      };
    case "presentation":
      return {
        icon: E,
        pluginName: e.formatMessage({
          id: "composer.aboveSuggestion.artifact.presentation.pluginName",
          defaultMessage: "Presentations",
          description:
            "Presentations plugin name in the above-composer artifact suggestion",
        }),
        title: e.formatMessage({
          id: "composer.aboveSuggestion.artifact.presentation.title",
          defaultMessage: "Create a presentation",
          description:
            "Title for the above-composer Presentations plugin suggestion",
        }),
      };
    case "spreadsheet":
      return {
        icon: g,
        pluginName: e.formatMessage({
          id: "composer.aboveSuggestion.artifact.spreadsheet.pluginName",
          defaultMessage: "Spreadsheets",
          description:
            "Spreadsheets plugin name in the above-composer artifact suggestion",
        }),
        title: e.formatMessage({
          id: "composer.aboveSuggestion.artifact.spreadsheet.title",
          defaultMessage: "Create a spreadsheet",
          description:
            "Title for the above-composer Spreadsheets plugin suggestion",
        }),
      };
  }
}
var W,
  ie = e(() => {
    b();
    d();
    _();
    w();
    v();
    L();
    W = a();
  });
function ae({
  composerText,
  hasPlanMode,
  isPlanMode,
  isDismissed,
  showPlanKeywordSuggestion,
}) {
  return !showPlanKeywordSuggestion || !hasPlanMode || isPlanMode || isDismissed
    ? false
    : G.test(composerText);
}
var G,
  K,
  q = e(() => {
    G = /\bplan\b/i;
    K = "keyword-plan-mode";
  });
function oe({
  intl,
  shouldShowPlanSuggestion,
  setSelectedCollaborationMode,
  setDismissedSuggestionIds,
}) {
  return shouldShowPlanSuggestion
    ? {
        id: K,
        title: intl.formatMessage({
          id: "composer.aboveSuggestion.plan.title",
          defaultMessage: "Create a plan",
          description: "Title for the above-composer plan keyword suggestion",
        }),
        icon: I,
        meta: (
          <C
            id="composer.aboveSuggestion.plan.shortcutWithAction"
            defaultMessage={"{shortcut}"}
            description="Keyboard shortcut hint shown before the above-composer plan suggestion button"
            values={{
              shortcut: J.jsx(o, {
                "aria-hidden": true,
                tabIndex: -1,
                color: "outline",
                size: "composerSm",
                className:
                  "pointer-events-none !h-auto rounded-md px-1 py-0.5 text-xs !leading-none",
                children: (
                  <C
                    id="composer.aboveSuggestion.plan.shortcut"
                    defaultMessage="Shift + Tab"
                    description="Keyboard shortcut hint shown next to the above-composer plan suggestion button"
                  />
                ),
              }),
            }}
          />
        ),
        actionLabel: intl.formatMessage({
          id: "composer.aboveSuggestion.plan.action",
          defaultMessage: "Use plan mode",
          description:
            "Primary button label for enabling plan mode from the above-composer suggestion",
        }),
        onAction: () => {
          setSelectedCollaborationMode("plan");
        },
        onDismiss: () => {
          setDismissedSuggestionIds((e) =>
            e.includes("keyword-plan-mode") ? e : [...e, K],
          );
        },
      }
    : null;
}
var J,
  se = e(() => {
    b();
    d();
    q();
    F();
    J = a();
  });
function ce(e) {
  return H(e) ?? oe(e);
}
var le = e(() => {
  ie();
  se();
});
function ue(e) {
  let {
    portalTarget,
    hideArtifactPluginSuggestions,
    showPlanKeywordSuggestion,
  } = e;
  if (portalTarget == null) return null;
  return Q.jsx(de, {
    portalTarget,
    hideArtifactPluginSuggestions,
    showPlanKeywordSuggestion,
  });
}
function de(e) {
  let {
      portalTarget,
      hideArtifactPluginSuggestions,
      showPlanKeywordSuggestion,
    } = e,
    a = s(te),
    o = x(),
    c = ne(),
    l = p(a);
  let u = l,
    { activeMode, modes, setSelectedMode } = re(u),
    g = modes.some(fe);
  let _ = g,
    v = activeMode.mode === "plan",
    y = pe(u),
    b = f(
      (e) => e(k)[y] ?? [],
      (e, t, n) => {
        t(k, (e) => {
          let t = e[y] ?? [],
            r = typeof n == "function" ? n(t) : n;
          return r === t
            ? e
            : {
                ...e,
                [y]: r,
              };
        });
      },
    );
  let [S, C] = ee(b),
    w = new Set(S);
  let T = w,
    E = (e) => P(e.view.state.doc, hideArtifactPluginSuggestions);
  let O = D(c, E),
    A = O != null && !T.has(N(O)) ? O : null;
  let j = A,
    F = (e) =>
      ae({
        composerText: e.view.state.doc.textContent,
        hasPlanMode: _,
        isPlanMode: v,
        isDismissed: T.has(K),
        showPlanKeywordSuggestion,
      });
  let I = D(c, F),
    L = (e) => M(c, e);
  let R = ce({
    intl: o,
    artifactPluginSuggestionKind: j,
    activateArtifactPlugin: L,
    shouldShowPlanSuggestion: I,
    setSelectedCollaborationMode: setSelectedMode,
    setDismissedSuggestionIds: C,
  });
  let z = R,
    B = z
      ? Z.createPortal(
          Q.jsx(
            me,
            {
              suggestion: z,
            },
            z.id,
          ),
          portalTarget,
        )
      : null;
  return <>{B}</>;
}
function fe(e) {
  return e.mode === "plan";
}
function pe(e) {
  return e == null ? $ : `${e}`;
}
function me(e) {
  let { suggestion } = e,
    r = x(),
    [i, a] = X.useState(false),
    s = suggestion.icon,
    c = suggestion.actionDisabled === true || i,
    u = suggestion.dismissOnAction !== false,
    d = s
      ? Q.jsx(s, {
          className: "icon-xs shrink-0",
        })
      : null;
  let f = d,
    p = (event) => {
      if ((event.stopPropagation(), !c)) {
        try {
          let e = suggestion.onAction();
          if (e && typeof e.then == "function") {
            a(true);
            e.then(() => {
              u && suggestion.onDismiss();
            })
              .catch(he)
              .finally(() => {
                a(false);
              });
            return;
          }
        } catch {
          return;
        }
        u && suggestion.onDismiss();
      }
    };
  let m = p,
    h = (event) => {
      event.stopPropagation();
      suggestion.onDismiss();
    };
  let g = h,
    _ = Q.jsx(o, {
      className: "px-2.5",
      color: "secondary",
      "data-codex-above-composer-suggestion-action": true,
      size: "default",
      disabled: c,
      loading: i,
      onClick: m,
      children: suggestion.actionLabel,
    });
  let v = r.formatMessage({
    id: "composer.aboveSuggestion.dismiss",
    defaultMessage: "Dismiss suggestion",
    description: "Aria label for dismissing an above-composer suggestion",
  });
  let y = Q.jsx(l, {
    className: "icon-xs",
  });
  let b = (
    <button
      type="button"
      className="no-drag flex size-[22px] shrink-0 cursor-interaction items-center justify-center rounded-full border border-transparent text-token-description-foreground select-none hover:bg-token-list-hover-background focus:outline-none"
      aria-label={v}
      onClick={g}
    >
      {y}
    </button>
  );
  let S = (
    <>
      {_}
      {b}
    </>
  );
  return (
    <R
      actions={S}
      icon={f}
      meta={suggestion.meta}
      suggestionId={suggestion.id}
      title={suggestion.title}
    />
  );
}
function he() {}
var Y, X, Z, Q, $;
e(() => {
  Y = S();
  m();
  n();
  X = t(c(), 1);
  Z = t(T(), 1);
  b();
  L();
  d();
  j();
  u();
  r();
  V();
  le();
  q();
  O();
  A();
  Q = a();
  $ = "__new-thread__";
})();

const AboveComposerSuggestions = ue;

export { AboveComposerSuggestions };
