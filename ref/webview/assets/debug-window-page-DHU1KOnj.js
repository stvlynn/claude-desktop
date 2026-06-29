import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  Li as n,
  O as r,
  _ as i,
  _c as a,
  gc as o,
  lc as s,
  y as c,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Kc as l,
  ls as u,
  qc as d,
  us as f,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Ea as p,
  xa as m,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import { n as h, r as g } from "./debug-modal-B1KfgYMB.js";
function _() {
  let e = (0, y.c)(4),
    [t, r] = (0, b.useState)(null),
    i;
  if (
    (e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (e) => {
          let { conversationId: t } = e;
          r(t);
        }),
        (e[0] = i))
      : (i = e[0]),
    c(`debug-window-origin-conversation-changed`, i),
    !n.allowDebugMenu(l()))
  ) {
    let t;
    return (
      e[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, x.jsx)(p, { to: `/`, replace: !0 })), (e[1] = t))
        : (t = e[1]),
      t
    );
  }
  let a;
  return (
    e[2] === t
      ? (a = e[3])
      : ((a = (0, x.jsx)(u, {
          electron: !0,
          children: (0, x.jsx)(`main`, {
            className: `h-dvh w-full overflow-hidden bg-token-main-surface-primary text-token-foreground`,
            children: (0, x.jsx)(h, {
              conversationIdOverride: t,
              onClose: v,
              showHeader: !1,
              showPopOutButton: !1,
            }),
          }),
        })),
        (e[2] = t),
        (e[3] = a)),
    a
  );
}
function v() {
  return window.close();
}
var y, b, x;
e(() => {
  ((y = o()), r(), (b = t(a(), 1)), m(), f(), i(), d(), g(), (x = s()));
})();
export { _ as DebugWindowPage };
//# sourceMappingURL=debug-window-page-DHU1KOnj.js.map
