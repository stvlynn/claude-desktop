import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Ko as i,
  O as a,
  Rt as o,
  Vo as s,
  _c as c,
  gc as l,
  lc as u,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Dm as d,
  Om as f,
  cr as p,
  dr as m,
  gl as h,
  gp as g,
  hl as _,
  lr as v,
  mp as y,
  ur as b,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Fa as x,
  Iy as S,
  Na as C,
  Vy as w,
  ja as T,
  xa as E,
  zy as D,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function O() {
  let e = (0, A.c)(22),
    t = i(r),
    n = w(),
    a = x(),
    s = C(),
    c = m(),
    { getPendingAppConnectForCallbackUrl: l } = b(),
    { markRequiredAppStatus: u, session: f } = h(),
    _ = (0, j.useRef)(null),
    v;
  e[0] !== u || e[1] !== f.app || e[2] !== f.kind
    ? ((v = (e) => {
        let { appId: t, status: n } = e;
        f.kind !== `connectAppBeforeInstall` ||
          (t != null && f.app.id !== t) ||
          u({ appId: f.app.id, status: n });
      }),
      (e[0] = u),
      (e[1] = f.app),
      (e[2] = f.kind),
      (e[3] = v))
    : (v = e[3]);
  let y = (0, j.useEffectEvent)(v),
    S;
  e[4] !== c || e[5] !== n || e[6] !== t
    ? ((S = async (e) => {
        let {
            appId: r,
            appName: i,
            fullRedirectUrl: a,
            shouldShowPendingToast: o,
            shouldShowSuccessToast: s,
          } = e,
          l = k(r);
        o &&
          a != null &&
          a.length > 0 &&
          t.get(g).info(
            (0, M.jsx)(`span`, {
              className: `loading-shimmer-pure-text`,
              children: (0, M.jsx)(D, {
                id: `apps.appConnectOAuthCallbackPage.pending`,
                defaultMessage: `Finishing {connector} setup`,
                description: `Toast shown when an app OAuth callback has returned and Codex is finishing setup`,
                values: {
                  connector:
                    i ??
                    n.formatMessage({
                      id: `apps.appConnectOAuthCallbackPage.fallbackAppName`,
                      defaultMessage: `App`,
                      description: `Fallback app name used in app connect callback pending toasts`,
                    }),
                },
              }),
            }),
            { duration: 0, id: l },
          );
        let u = await c({ fullRedirectUrl: a ?? `` });
        bb32: switch (u.kind) {
          case `missing-callback-data`:
            t.get(g).danger(
              (0, M.jsx)(D, {
                id: `apps.appConnectOAuthCallbackPage.missingData`,
                defaultMessage: `Missing OAuth callback data.`,
                description: `Toast shown when an app connection OAuth callback is missing the redirect URL`,
              }),
              { id: l },
            );
            break bb32;
          case `request-failed`: {
            let e =
              u.message ??
              n.formatMessage({
                id: `apps.appConnectOAuthCallbackPage.requestFailed`,
                defaultMessage: `Failed to finish connecting app.`,
                description: `Toast shown when finishing an app connection OAuth callback fails`,
              });
            t.get(g).danger(e, { id: l });
            break bb32;
          }
          case `success`:
            if (!s) break bb32;
            t.get(g).success(
              (0, M.jsx)(D, {
                id: `apps.appConnectOAuthCallbackPage.success`,
                defaultMessage: `{appName} is now connected.`,
                description: `Toast shown when an app connection OAuth callback succeeds`,
                values: { appName: u.appName },
              }),
              { id: l },
            );
        }
        return u;
      }),
      (e[4] = c),
      (e[5] = n),
      (e[6] = t),
      (e[7] = S))
    : (S = e[7]);
  let E = (0, j.useEffectEvent)(S),
    O;
  e[8] !== l ||
  e[9] !== s.key ||
  e[10] !== s.state ||
  e[11] !== y ||
  e[12] !== a ||
  e[13] !== E
    ? ((O = () => {
        if (_.current === s.key) return;
        _.current = s.key;
        let e = p(s.state),
          t = e?.fullRedirectUrl?.trim(),
          n = t != null && t.length > 0 ? l(t) : null,
          r = n?.returnTo ?? e?.returnTo ?? `/skills`,
          i = n?.resumeTarget.kind === `plugin-install`,
          c = n?.resumeTarget.kind === `connector-auth-elicitation`;
        E({
          appId: n?.appId,
          appName: n?.appName,
          fullRedirectUrl: t ?? null,
          shouldShowPendingToast: !1,
          shouldShowSuccessToast: !i && !c,
        }).then((e) => {
          if (
            (e.kind === `success`
              ? y({ appId: e.appId, status: `connected` })
              : (i || n == null) && y({ appId: n?.appId, status: `pending` }),
            T(o, r) != null)
          ) {
            a(r, { replace: !0 });
            return;
          }
          switch (n?.resumeTarget.kind) {
            case `plugin-install`:
              a(r, {
                replace: !0,
                state: { initialHostId: n.hostId, initialTab: `plugins` },
              });
              return;
            case `connector-auth-elicitation`:
              a(r, { replace: !0 });
              return;
            case `apps-tab`:
            case void 0:
              a(r, {
                replace: !0,
                state: {
                  connectAppId: n?.appId,
                  initialHostId: n?.hostId,
                  initialTab: `apps`,
                },
              });
              return;
          }
        });
      }),
      (e[8] = l),
      (e[9] = s.key),
      (e[10] = s.state),
      (e[11] = y),
      (e[12] = a),
      (e[13] = E),
      (e[14] = O))
    : (O = e[14]);
  let N;
  (e[15] !== l ||
  e[16] !== n ||
  e[17] !== s.key ||
  e[18] !== s.state ||
  e[19] !== a
    ? ((N = [l, n, s.key, s.state, a]),
      (e[15] = l),
      (e[16] = n),
      (e[17] = s.key),
      (e[18] = s.state),
      (e[19] = a),
      (e[20] = N))
    : (N = e[20]),
    (0, j.useEffect)(O, N));
  let P;
  return (
    e[21] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((P = (0, M.jsx)(`div`, {
          className: `flex h-full w-full items-center justify-center`,
          children: (0, M.jsx)(d, { className: `icon-sm` }),
        })),
        (e[21] = P))
      : (P = e[21]),
    P
  );
}
function k(e) {
  return e == null
    ? `app-connect-oauth-callback`
    : `app-connect-oauth-callback-${e}`;
}
var A, j, M;
e(() => {
  ((A = l()),
    s(),
    a(),
    (j = t(c(), 1)),
    S(),
    E(),
    v(),
    f(),
    y(),
    _(),
    n(),
    (M = u()));
})();
export { O as AppConnectOAuthCallbackPage };
//# sourceMappingURL=app-connect-oauth-callback-page-DoWgOqbw.js.map
