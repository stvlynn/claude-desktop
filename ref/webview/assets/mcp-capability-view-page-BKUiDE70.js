import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Vo as t,
  gc as n,
  lc as r,
  qo as i,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Hm as a,
  M as o,
  Rm as s,
  j as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Iy as l,
  La as u,
  xa as d,
  zy as f,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  bu as p,
  xu as m,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
function h() {
  let e = (0, _.c)(7),
    { server: t, toolName: n } = u(),
    r = i(a),
    o;
  e[0] !== t || e[1] !== n || e[2] !== r
    ? ((o =
        t == null || n == null
          ? null
          : (r.find((e) => e.server === t && e.tool.name === n) ?? null)),
      (e[0] = t),
      (e[1] = n),
      (e[2] = r),
      (e[3] = o))
    : (o = e[3]);
  let s = o;
  if (s == null) {
    let t;
    return (
      e[4] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, v.jsx)(g, {})), (e[4] = t))
        : (t = e[4]),
      t
    );
  }
  let l;
  return (
    e[5] === s
      ? (l = e[6])
      : ((l = (0, v.jsx)(c, { view: s })), (e[5] = s), (e[6] = l)),
    l
  );
}
function g() {
  let e = (0, _.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, v.jsx)(`div`, {
          className: `flex h-full min-h-0 items-center justify-center`,
          children: (0, v.jsx)(p, {
            title: (0, v.jsx)(f, {
              id: `openaiMcpCapabilities.view.notFound`,
              defaultMessage: `MCP app view not found`,
              description: `Title shown when an MCP app view route does not match an available server tool`,
            }),
          }),
        })),
        (e[0] = t))
      : (t = e[0]),
    t
  );
}
var _, v;
e(() => {
  ((_ = n()), t(), l(), d(), m(), s(), o(), (v = r()));
})();
export { h as McpCapabilityViewPage };
//# sourceMappingURL=mcp-capability-view-page-BKUiDE70.js.map
