import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  C as n,
  S as r,
  _ as i,
  _c as a,
  lc as o,
  v as s,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Gc as c,
  Im as l,
  Lm as u,
  Qg as d,
  Uc as f,
  Wc as p,
  qc as m,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  nv as h,
  rv as g,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Jt as _,
  Yt as v,
  a as y,
  i as b,
  n as x,
  o as S,
  r as C,
  t as w,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import { t as T } from "./app-BwRVouQs.js";
import {
  _ as E,
  g as D,
  n as O,
  t as k,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~page~appgen-page~remote-con~di269h6j-DHWk0JvV.js";
import {
  n as A,
  t as j,
} from "./app-initial~app-main~register-app-actions-CTTYxHO5.js";
async function M() {
  (await N(),
    await g(),
    n.info(`[statsig-refresh-diagnostics] React root render requested`, {
      safe: { windowType: `electron` },
    }),
    U.render(
      (0, L.jsx)(F.StrictMode, {
        children: (0, L.jsx)(k, {
          name: `App`,
          fallback: (0, L.jsx)(_, {}),
          children: (0, L.jsx)(y, {}),
        }),
      }),
    ));
}
async function N() {}
function P() {
  let e = navigator,
    t =
      e.userAgentData?.platform?.toLowerCase() ??
      e.platform?.toLowerCase() ??
      e.userAgent.toLowerCase();
  return t.includes(`win`)
    ? `win32`
    : t.includes(`mac`) || t.includes(`darwin`)
      ? `darwin`
      : t.includes(`linux`)
        ? `linux`
        : `unknown`;
}
var F, I, L, R, z, B, V, H, U;
e(() => {
  if (
    ((F = t(a(), 1)),
    (I = d()),
    j(),
    c(),
    O(),
    v(),
    p(),
    l(),
    S(),
    i(),
    C(),
    h(),
    E(),
    w(),
    r(),
    T(),
    (L = o()),
    (R = m()),
    (z = new URL(window.location.href).searchParams),
    (B = P()),
    u(b),
    A(x),
    (document.documentElement.dataset.codexWindowType = `electron`),
    (document.documentElement.dataset.windowType = `electron`),
    (document.documentElement.dataset.codexOs = B),
    (document.documentElement.dataset.codexWindowChrome = f(`electron`, B)),
    z.get(`mcpAppSandboxDevtools`) === `1` &&
      (document.documentElement.dataset.mcpAppSandboxDevtools = `true`),
    R && document.documentElement.classList.add(`compact-window`),
    D(),
    window.addEventListener(`error`, (e) => {
      let t =
        e?.error?.stack ?? e?.error?.message ?? e?.message ?? `Unknown error`;
      s.dispatchMessage(`log-message`, {
        level: `error`,
        message: `[desktop-notifications][global-error] ${String(t)}`,
      });
    }),
    window.addEventListener(`unhandledrejection`, (e) => {
      let t = e.reason,
        n =
          typeof t == `object` && t
            ? (t.stack ?? t.message ?? JSON.stringify(t))
            : String(t);
      s.dispatchMessage(`log-message`, {
        level: `error`,
        message: `[desktop-notifications][unhandled-rejection] ${n}`,
      });
    }),
    (V = document.getElementById(`root`)),
    !V)
  )
    throw Error(`Root container not found`);
  ((H = window),
    (H.__codexRoot ||= (0, I.createRoot)(V)),
    (U = H.__codexRoot),
    M());
})();
//# sourceMappingURL=app-main-Dq9Zdi1c.js.map
