import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Kt as t,
  O as n,
  Qt as r,
  Vo as i,
  Zt as a,
  gc as o,
  lc as s,
  qo as c,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Ea as l,
  Iy as u,
  La as d,
  nv as f,
  tv as p,
  xa as m,
  zy as h,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  n as g,
  r as _,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-worktree-init-page~hotkey-windo~kjl2gxhu-DXs0ueRP.js";
import { n as v, r as y } from "./use-hotkey-window-detail-layout-D-pNZzEr.js";
import { n as b, t as x } from "./worktree-init-v2-page-DUo6BdJ9.js";
function S() {
  let e = (0, w.c)(8),
    { pendingWorktreeId: n } = d(),
    { data: i } = c(g),
    o = i == null || i.configuredHotkey != null,
    s;
  e[0] === o ? (s = e[1]) : ((s = r(o)), (e[0] = o), (e[1] = s));
  let u = s,
    f;
  if (
    (e[2] === n
      ? (f = e[3])
      : ((f =
          n == null
            ? null
            : {
                title: (0, T.jsx)(`span`, {
                  className: `max-w-full truncate`,
                  children: (0, T.jsx)(h, {
                    id: `worktreeInitV2.title`,
                    defaultMessage: `Creating worktree`,
                    description: `Title for the worktree init v2 page`,
                  }),
                }),
                mainWindowPath: a(n),
              }),
        (e[2] = n),
        (e[3] = f)),
    y(f),
    !n)
  ) {
    let t;
    return (
      e[4] === u
        ? (t = e[5])
        : ((t = (0, T.jsx)(l, { to: u, replace: !0 })), (e[4] = u), (e[5] = t)),
      t
    );
  }
  let p;
  return (
    e[6] === u
      ? (p = e[7])
      : ((p = (0, T.jsx)(x, {
          homePath: u,
          conversationPathBuilder: t,
          onConversationReady: C,
        })),
        (e[6] = u),
        (e[7] = p)),
    p
  );
}
function C(e) {
  p.hotkeyWindowHotkeys?.open({ path: t(e) });
}
var w, T;
e(() => {
  ((w = o()), i(), n(), u(), m(), f(), b(), _(), v(), (T = s()));
})();
export { S as HotkeyWindowWorktreeInitPage };
//# sourceMappingURL=hotkey-window-worktree-init-page-CDrG7Phs.js.map
