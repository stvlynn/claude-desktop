import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as t,
  E as n,
  c as r,
  h as i,
  m as a,
  o,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Bd as s,
  Rd as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
function l(e) {
  if (e == null) return null;
  let t = e.lastIndexOf(`@`);
  if (t <= 0) return null;
  let n = e
    .slice(t + 1)
    .trim()
    .toLowerCase();
  return n.length === 0 ? null : n;
}
function u({
  debugOverride: e,
  detectedProvider: t,
  emailDomain: n,
  isError: r,
}) {
  return e ?? t ?? (n == null || r ? `other` : null);
}
function d(e, t) {
  return e === `other` ? (s(t) ? `microsoft` : `google`) : e;
}
function f(e, t) {
  return t === `microsoft` ? (p[e] ?? e) : e;
}
var p,
  m,
  h = e(() => {
    (t(),
      i(),
      c(),
      r(),
      (p = {
        gmail: `outlook-email`,
        "google-calendar": `outlook-calendar`,
        "google-drive": `sharepoint`,
        slack: `teams`,
      }),
      (m = o(n, `email-domain-mail-provider`, (e) => ({
        enabled: e != null,
        params: e == null ? void 0 : { domain: e },
        retry: 2,
        staleTime: a.FIVE_MINUTES,
      }))));
  });
export { d as a, f as i, l as n, h as o, u as r, m as t };
//# sourceMappingURL=app-initial~app-main~onboarding-page~pending-request-item-panel~home-ambient-suggestions-content-B1ROILfQ.js.map
