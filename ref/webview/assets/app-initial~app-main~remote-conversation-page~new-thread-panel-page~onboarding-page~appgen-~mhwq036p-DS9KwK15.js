import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  As as t,
  D as n,
  E as r,
  Rs as i,
  Vo as a,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  gy as o,
  hy as s,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
async function c(e, t) {
  e.set(u, { status: `importing`, startedAtMs: Date.now() });
  try {
    (await t(), e.set(u, { status: `success`, completedAtMs: Date.now() }));
  } catch (t) {
    throw (e.set(u, { status: `error`, completedAtMs: Date.now() }), t);
  }
}
var l,
  u,
  d = e(() => {
    (a(), n(), (l = { status: `idle` }), (u = i(r, l)));
  });
function f(e, t) {
  return e?.[t] ?? x;
}
function p(e, t, n) {
  e.set(w, (e) => {
    let r = e ?? S,
      i = f(r, t);
    return { ...r, [t]: { ...i, collapsed: n } };
  });
}
function m(e, t) {
  e.set(w, (e) => {
    let n = e ?? S,
      r = f(n, t);
    return { ...n, [t]: { ...r, dismissed: !0 } };
  });
}
function h(e) {
  e.set(w, S);
}
function g(e, t, n) {
  return t === `enable_notifications` ? n : e.completedItemIds.includes(t);
}
function _(e, t, n) {
  e.set(w, (e) => {
    let r = e ?? S,
      i = f(r, t);
    return i.completedItemIds.includes(n)
      ? r
      : { ...r, [t]: { ...i, completedItemIds: [...i.completedItemIds, n] } };
  });
}
function v(e, t, n) {
  e.set(w, (e) => {
    let r = e ?? S,
      i = f(r, t);
    return i.completedConversationalOnboardingTaskId === n
      ? r
      : { ...r, [t]: { ...i, completedConversationalOnboardingTaskId: n } };
  });
}
function y(e, t) {
  e.set(w, (e) => {
    let n = e ?? S,
      r = f(n, t);
    return { ...n, [t]: { ...r, completedItemIds: [...b] } };
  });
}
var b,
  x,
  S,
  C,
  w,
  T,
  E,
  D = e(() => {
    (a(),
      d(),
      n(),
      s(),
      (b = [
        `enable_notifications`,
        `create_automation`,
        `summarize_inbox`,
        `triage_github_prs`,
        `catch_up_updates_and_blockers`,
        `catch_up_linear`,
        `review_latest_plans`,
        `summarize_current_priorities`,
      ]),
      (x = { collapsed: !1, completedItemIds: [] }),
      (S = {}),
      (C = `sidebar-onboarding-checklist-state-by-account-id-v1`),
      (w = o(C, S)),
      (T = i(r, null)),
      (E = t(r, ({ get: e }) => e(T) ?? e(u).status === `success`)));
  });
export {
  f as a,
  g as c,
  T as d,
  w as f,
  c as h,
  m as i,
  h as l,
  d as m,
  v as n,
  D as o,
  u as p,
  _ as r,
  E as s,
  y as t,
  p as u,
};
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~mhwq036p-DS9KwK15.js.map
