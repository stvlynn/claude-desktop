import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import { _c as n } from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Gu as r,
  Ku as i,
  M as a,
  Wu as o,
  j as s,
  qu as c,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Cs as l,
  ws as u,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Hi as d,
  Vi as f,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  n as p,
  t as m,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-publication-terms-route~remote-conversati~cldi24d6-B1D9-E0F.js";
function h(e, t = `icon-xs`) {
  let n = (0, g.createElement)(m, { className: t });
  return e == null
    ? n
    : (0, g.createElement)(l, {
        alt: ``,
        className: t,
        fallback: n,
        logoDarkUrl: e.logoDarkUrl,
        logoUrl: e.logoUrl,
      });
}
var g,
  _ = e(() => {
    ((g = t(n(), 1)), u(), p());
  });
function v(
  e,
  t,
  {
    activate: n = !0,
    instanceId: i = crypto.randomUUID(),
    isPreview: a,
    readHostResource: l,
    tabId: u = y(t, i),
    target: d = `right`,
    title: p = t.title,
    toolArguments: m,
  } = {},
) {
  if (f(e.value) == null) return null;
  let g = r(e, u) ?? d;
  return (
    o(g).openTab(e, s, {
      icon: h(t.icon, `icon-xs shrink-0`),
      id: u,
      props: { instanceId: i, readHostResource: l, toolArguments: m, view: t },
      title: p,
      activate: n,
      isPreview: a,
    }),
    n && c(e, g),
    u
  );
}
function y(e, t) {
  return `mcp-capability:${e.hostId}:${e.server}:${e.tool.name}:${t}`;
}
var b = e(() => {
  (d(), i(), a(), _());
});
export { _ as i, v as n, h as r, b as t };
//# sourceMappingURL=app-initial~app-main~remote-conversation-page~thread-app-shell-chrome~local-conversation-page-BYNuwa4z.js.map
