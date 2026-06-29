import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  C as t,
  O as n,
  S as r,
  _ as i,
  ht as a,
  mt as o,
  pt as s,
  v as c,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
async function l(e) {
  try {
    let n = await e.updateUserAsync(e.getContext().user);
    n.success ||
      t.warning(`Failed to refresh Codex runtime config from Statsig`, {
        safe: {},
        sensitive: { updateDetails: n },
      });
  } catch (e) {
    t.warning(`Failed to refresh Codex runtime config from Statsig`, {
      safe: {},
      sensitive: { error: e },
    });
  }
  d(u(e));
}
function u(e) {
  let n = e.getLayer(`2096615506`).get(s, o),
    r = a.safeParse(n);
  return (
    r.success ||
      t.info(`Invalid Codex runtime install config; using default runtime`, {
        safe: {},
        sensitive: { runtimeInstallConfig: n, error: r.error },
      }),
    {
      source: n === o ? `default` : `statsig-layer`,
      value: r.success ? r.data : o,
    }
  );
}
function d(e) {
  (t.info(`Codex runtime config selected`, {
    safe: { artifact: s, source: e.source },
    sensitive: { runtimeInstallConfig: e.value },
  }),
    c.dispatchMessage(`codex-runtimes-config-changed`, { config: f(e.value) }));
}
function f(e) {
  return { runtimes: { [s]: e } };
}
var p = e(() => {
  (n(), i(), r());
});
function m(e) {
  return [`app-host`, `primary-runtime`, `diagnostics`, e];
}
var h,
  g = e(() => {
    h = [`app-host`, `primary-runtime`, `update-status`];
  });
export { p as a, u as i, m as n, d as o, g as r, l as s, h as t };
//# sourceMappingURL=app-initial~app-main~debug-window-page~agent-settings~debug-modal-Baq5IrGF.js.map
