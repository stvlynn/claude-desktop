import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Ou as t,
  ku as n,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  gp as r,
  mp as i,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Qp as a,
  dn as o,
  em as s,
  fn as c,
  gn as l,
  mn as u,
  vg as d,
  yg as f,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
var p,
  m = e(() => {
    p = `client-sYWqzCYMRkUg4DqqiZcR5DGTNl2iD7zNJY0HoeDLzxR`;
  });
async function h(e, t, n, { shouldApplyStatus: r = () => !0 } = {}) {
  let i = e.get(u, t),
    a = await f(`set-remote-control-enabled-for-host`, {
      enabled: n,
      hostId: t,
    }),
    o = e.get(u, t),
    s = o !== i && (o?.status === `connected` || o?.status === `errored`);
  return (r() && (!n || !s) && l(e, t, a), a);
}
var g = e(() => {
  (c(), d());
});
async function _(e, t, { force: n = !1 } = {}) {
  if (((y = t), x?.enabled === t)) return x.promise;
  if (!n && v === t) return null;
  let r = ++b,
    i = h(e, s, t, { shouldApplyStatus: () => r === b });
  x = { enabled: t, promise: i };
  try {
    let n = await i;
    return r === b
      ? ((v = t), n)
      : (y != null && y !== t && (await _(e, y, { force: !0 })), n);
  } catch (e) {
    throw (r === b && v === t && (v = void 0), e);
  } finally {
    x?.promise === i && (x = void 0);
  }
}
var v,
  y,
  b,
  x,
  S = e(() => {
    (g(), a(), (b = 0));
  });
function C(e) {
  return e instanceof Error && e.message.includes(E);
}
function w(e) {
  return C(e) || e instanceof o;
}
function T(e, t) {
  return t instanceof o
    ? (e.get(r).danger(
        e.get(n).formatMessage({
          id: `settings.remoteConnections.remoteControlServerAlreadyOnline`,
          defaultMessage: `Could not enable remote control. Please ensure only one instance of Codex is running.`,
          description: `Error toast shown when remote control cannot be enabled because another Codex instance is already running a remote control server on this device.`,
        }),
        { id: `remote-control-server-already-online` },
      ),
      !0)
    : C(t)
      ? (e.get(r).danger(
          e.get(n).formatMessage({
            id: `settings.remoteConnections.remoteControlTokenInvalidated`,
            defaultMessage: `Your Codex session on this device has expired. Sign in again and try again.`,
            description: `Error shown when enabling remote control fails because the device's Codex authentication token was invalidated`,
          }),
          { id: `remote-control-token-invalidated` },
        ),
        !0)
      : !1;
}
var E,
  D = e(() => {
    (c(), i(), t(), (E = `token_invalidated`));
  });
export {
  _ as a,
  p as c,
  S as i,
  m as l,
  w as n,
  g as o,
  T as r,
  h as s,
  D as t,
};
//# sourceMappingURL=app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings-CsI-U3JO.js.map
