import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Kt as t,
  O as n,
  gc as r,
  lc as i,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Iy as a,
  nv as o,
  tv as s,
  zy as c,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  St as l,
  xt as u,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import {
  n as d,
  t as f,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  a as p,
  o as m,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~plugin-detail-page~new-thr~ny8xzqbh-ClcWSvU7.js";
import {
  a as h,
  i as g,
} from "./app-initial~app-main~remote-conversation-page~appgen-library-page~local-conversation-page-DAngUxdy.js";
import { n as _, r as v } from "./use-hotkey-window-detail-layout-D-pNZzEr.js";
import { n as y, t as b } from "./thread-scroll-layout-lROgzP0x.js";
function x() {
  let e = (0, C.c)(4),
    t = S,
    n;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = {
        title: (0, w.jsx)(`span`, {
          className: `max-w-full truncate`,
          children: (0, w.jsx)(c, {
            id: `threadPage.newThread`,
            defaultMessage: `New chat`,
            description: `Header title for the home page`,
          }),
        }),
        mainWindowPath: `/`,
        canCollapseToHome: !1,
      }),
      (e[0] = n))
    : (n = e[0]),
    v(n));
  let r;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, w.jsx)(f, {
        showWorkspaceDropdownInFooter: !1,
        onLocalConversationCreated: t,
      })),
      (e[1] = r))
    : (r = e[1]);
  let i;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, w.jsx)(`div`, {
        "aria-hidden": `true`,
        children: (0, w.jsx)(p, {
          className: `h-12 w-12 text-token-foreground/20`,
        }),
      })),
      (e[2] = i))
    : (i = e[2]);
  let a;
  return (
    e[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((a = (0, w.jsx)(g, {
          className: `h-full [--padding-panel:calc(var(--padding-panel-base)/2)]`,
          children: (0, w.jsx)(b, {
            footer: r,
            children: (0, w.jsx)(`div`, {
              className: `flex h-full items-center justify-center px-panel`,
              children: (0, w.jsxs)(`div`, {
                className: `flex flex-col items-center gap-3 text-center`,
                children: [
                  i,
                  (0, w.jsxs)(`div`, {
                    className: `flex flex-col items-center gap-1`,
                    children: [
                      (0, w.jsx)(`div`, {
                        className: `heading-xl mt-2 font-normal text-token-foreground select-none`,
                        children: (0, w.jsx)(c, {
                          id: `home.hero.letsBuild`,
                          defaultMessage: `Let’s build`,
                          description: `Label above the workspace name on the electron home page`,
                        }),
                      }),
                      (0, w.jsx)(u, { variant: `hero` }),
                    ],
                  }),
                ],
              }),
            }),
          }),
        })),
        (e[3] = a))
      : (a = e[3]),
    a
  );
}
function S(e) {
  s.hotkeyWindowHotkeys?.open({ path: t(e) });
}
var C, w;
e(() => {
  ((C = r()), n(), a(), d(), l(), m(), o(), h(), y(), _(), (w = i()));
})();
export { x as HotkeyWindowNewThreadPage };
//# sourceMappingURL=hotkey-window-new-thread-page-DC8KDgIn.js.map
