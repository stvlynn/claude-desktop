import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  gc as t,
  lc as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Na as r,
  xa as i,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  $ as a,
  Q as o,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
function s() {
  let e = (0, u.c)(4),
    t = r().state;
  if (!t?.planContent || !t?.conversationId) {
    let t;
    return (
      e[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, d.jsx)(l, {})), (e[0] = t))
        : (t = e[0]),
      t
    );
  }
  let n;
  return (
    e[1] !== t.conversationId || e[2] !== t.planContent
      ? ((n = (0, d.jsx)(c, {
          planContent: t.planContent,
          conversationId: t.conversationId,
        })),
        (e[1] = t.conversationId),
        (e[2] = t.planContent),
        (e[3] = n))
      : (n = e[3]),
    n
  );
}
function c(e) {
  let t = (0, u.c)(5),
    { planContent: n, conversationId: r } = e,
    i;
  t[0] === n
    ? (i = t[1])
    : ((i = {
        type: `assistant-message`,
        content: n,
        sentAtMs: null,
        completed: !0,
        phase: null,
        structuredOutput: void 0,
      }),
      (t[0] = n),
      (t[1] = i));
  let a;
  return (
    t[2] !== r || t[3] !== i
      ? ((a = (0, d.jsx)(`div`, {
          className: `overflow-y-auto p-[var(--padding-panel)]`,
          children: (0, d.jsx)(o, {
            item: i,
            conversationId: r,
            cwd: null,
            showOpenButton: !1,
          }),
        })),
        (t[2] = r),
        (t[3] = i),
        (t[4] = a))
      : (a = t[4]),
    a
  );
}
function l() {
  let e = (0, u.c)(2),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, d.jsxs)(`div`, {
        className: `flex items-center gap-3 border-b border-token-border/60 px-4 py-3`,
        children: [
          (0, d.jsx)(`div`, {
            className: `size-8 rounded-lg bg-token-foreground/10`,
          }),
          (0, d.jsx)(`div`, {
            className: `h-4 w-24 rounded bg-token-foreground/20`,
          }),
        ],
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  return (
    e[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, d.jsx)(`div`, {
          className: `p-[var(--padding-panel)]`,
          children: (0, d.jsxs)(`div`, {
            className: `animate-pulse overflow-hidden rounded-2xl border border-token-border bg-token-editor-background/50`,
            children: [
              t,
              (0, d.jsxs)(`div`, {
                className: `space-y-3 px-4 py-4`,
                children: [
                  (0, d.jsx)(`div`, {
                    className: `h-3 w-5/6 rounded bg-token-foreground/10`,
                  }),
                  (0, d.jsx)(`div`, {
                    className: `h-3 w-4/6 rounded bg-token-foreground/10`,
                  }),
                  (0, d.jsx)(`div`, {
                    className: `h-3 w-3/6 rounded bg-token-foreground/10`,
                  }),
                ],
              }),
            ],
          }),
        })),
        (e[1] = n))
      : (n = e[1]),
    n
  );
}
var u, d;
e(() => {
  ((u = t()), i(), a(), (d = n()));
})();
export { s as PlanSummaryPage };
//# sourceMappingURL=plan-summary-page-B3al0AKT.js.map
