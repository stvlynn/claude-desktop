import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as t,
  E as n,
  Vo as r,
  js as i,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  N as a,
  Q as o,
  et as s,
  gy as c,
  hy as l,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function u(e) {
  return e?.approvalPolicy == null ||
    e.approvalsReviewer == null ||
    e.sandboxPolicy == null
    ? null
    : {
        ...(`activePermissionProfile` in e &&
        e.activePermissionProfile !== void 0
          ? { activePermissionProfile: e.activePermissionProfile }
          : `permissions` in e && e.permissions != null
            ? { activePermissionProfile: { id: e.permissions, extends: null } }
            : {}),
        ...(`runtimeWorkspaceRoots` in e && e.runtimeWorkspaceRoots != null
          ? { runtimeWorkspaceRoots: e.runtimeWorkspaceRoots }
          : {}),
        approvalPolicy: e.approvalPolicy,
        approvalsReviewer: e.approvalsReviewer,
        sandboxPolicy: e.sandboxPolicy,
      };
}
function d(e, t) {
  return (
    u(t) ??
    (e?.turnId == null || e.params.collaborationMode == null
      ? null
      : u(e.params))
  );
}
function f(e, t, n) {
  return d(e, t) ?? n ?? null;
}
function p(e, t, n) {
  return n == null || JSON.stringify(e[t]) === JSON.stringify(n)
    ? e
    : { ...e, [t]: n };
}
var m,
  h,
  g = e(() => {
    (r(),
      a(),
      t(),
      l(),
      (m = c(`heartbeat-thread-permissions-by-id`, {})),
      (h = i(n, (e, { get: t }) => {
        let n = d(t(s, e), t(o, e));
        return n == null ? null : JSON.stringify(n);
      })));
  });
export { h as a, m as i, d as n, g as o, f as r, p as t };
//# sourceMappingURL=app-initial~app-main~hotkey-window-thread-page~automations-page~local-conversation-page-CnYocBk6.js.map
