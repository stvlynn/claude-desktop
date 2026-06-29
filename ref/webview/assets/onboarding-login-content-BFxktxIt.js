import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  gc as t,
  lc as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Em as r,
  Tm as i,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as a,
  Qp as o,
  Vy as s,
  em as c,
  my as l,
  vg as u,
  yg as d,
  zy as f,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  c as p,
  l as m,
} from "./app-initial~app-main~login-route~codex-mobile-page~remote-connections-settings-CsI-U3JO.js";
async function h({
  appBrand: e,
  hostId: t = c,
  signal: n,
  useHostedLoginSuccessPage: r,
  useStreamlinedLogin: i,
}) {
  let a = _(n);
  return t === `local`
    ? d(`login-with-chatgpt`, {
        abortController: a,
        ...(r && e != null ? { appBrand: e } : {}),
        useHostedLoginSuccessPage: r,
        useStreamlinedLogin: i,
      })
    : d(`login-with-chatgpt-for-host`, {
        abortController: a,
        hostId: t,
        ...(r && e != null ? { appBrand: e } : {}),
        useHostedLoginSuccessPage: r,
        useStreamlinedLogin: i,
      });
}
function g({ signal: e } = {}) {
  return d(`login-with-chatgpt-device-code`, { abortController: _(e) });
}
function _(e) {
  let t = new AbortController();
  return e == null
    ? t
    : e.aborted
      ? (t.abort(), t)
      : (e.addEventListener(`abort`, () => t.abort(), { once: !0 }), t);
}
var v = e(() => {
  (u(), o());
});
function y({
  authUrl: e,
  sourceSurfaceStableId: t = x.StableID.get(p),
  includeCodexOriginStableId: n = !1,
  useDesktopAuth: r,
  useStreamlinedLoginUx: i,
}) {
  if (!t && !r && !i) return e;
  try {
    let a = new URL(e);
    if (a.pathname === S) {
      let e = a.searchParams.get(`authorize_url`);
      if (t && e) {
        let r = new URL(e);
        (b(r, t, n), a.searchParams.set(`authorize_url`, r.toString()));
      }
      return (i && a.searchParams.set(T, `true`), a.toString());
    }
    if ((t && b(a, t, n), i && a.searchParams.set(T, `true`), !r))
      return a.toString();
    let o = new URL(C);
    return (
      o.searchParams.set(`authorize_url`, a.toString()),
      i && o.searchParams.set(T, `true`),
      o.toString()
    );
  } catch {
    return e;
  }
}
function b(e, t, n) {
  (e.searchParams.set(E, t), n && e.searchParams.set(w, t));
}
var x,
  S,
  C,
  w,
  T,
  E,
  D = e(() => {
    ((x = l()),
      m(),
      (S = `/codex/desktop-auth`),
      (C = `https://chatgpt.com${S}`),
      (w = `codex_origin_stable_id`),
      (T = `codex_streamlined_login`),
      (E = `source_surface_stable_id`));
  });
function O(e) {
  let t = (0, k.c)(37),
    {
      apiKeyValue: n,
      isApiKeyEntryVisible: r,
      isApiKeySignInPending: a,
      isChatGptSignInPending: o,
      onApiKeySecondaryAction: c,
      onApiKeySubmit: l,
      onApiKeyValueChange: u,
      onChatGptSignIn: d,
      onShowApiKeyEntry: p,
      apiKeySecondaryActionLabel: m,
    } = e,
    h = s();
  if (r) {
    let e;
    t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, A.jsx)(f, {
          id: `electron.onboarding.login.apikey.label`,
          defaultMessage: `OpenAI API key`,
          description: `Label for API key input on desktop onboarding`,
        })),
        (t[0] = e))
      : (e = t[0]);
    let r;
    t[1] === h
      ? (r = t[2])
      : ((r = h.formatMessage({
          id: `electron.onboarding.login.apikey.placeholder`,
          defaultMessage: `sk-…`,
          description: `Placeholder for API key input on desktop onboarding`,
        })),
        (t[1] = h),
        (t[2] = r));
    let o;
    t[3] === u
      ? (o = t[4])
      : ((o = (e) => u(e.target.value)), (t[3] = u), (t[4] = o));
    let s;
    t[5] !== n || t[6] !== r || t[7] !== o
      ? ((s = (0, A.jsxs)(`label`, {
          className: `text-base font-medium text-token-foreground`,
          children: [
            e,
            (0, A.jsx)(`input`, {
              autoFocus: !0,
              className: `mt-2 w-full rounded-xl border border-token-border bg-token-input-background px-4 py-2.5 focus:ring-2 focus:ring-black/15 focus:outline-none`,
              placeholder: r,
              value: n,
              onChange: o,
            }),
          ],
        })),
        (t[5] = n),
        (t[6] = r),
        (t[7] = o),
        (t[8] = s))
      : (s = t[8]);
    let d;
    t[9] !== m || t[10] !== c
      ? ((d = (0, A.jsx)(i, {
          color: `secondary`,
          className: `flex flex-1 justify-center py-2`,
          onClick: c,
          children: m,
        })),
        (t[9] = m),
        (t[10] = c),
        (t[11] = d))
      : (d = t[11]);
    let p;
    t[12] !== n || t[13] !== a
      ? ((p = n.trim().length === 0 || a),
        (t[12] = n),
        (t[13] = a),
        (t[14] = p))
      : (p = t[14]);
    let g;
    t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((g = (0, A.jsx)(f, {
          id: `electron.onboarding.login.apikey.continue`,
          defaultMessage: `Continue`,
          description: `Continue button label for API key sign-in on desktop onboarding`,
        })),
        (t[15] = g))
      : (g = t[15]);
    let _;
    t[16] !== a || t[17] !== l || t[18] !== p
      ? ((_ = (0, A.jsx)(i, {
          className: `flex flex-1 justify-center py-2`,
          onClick: l,
          disabled: p,
          loading: a,
          children: g,
        })),
        (t[16] = a),
        (t[17] = l),
        (t[18] = p),
        (t[19] = _))
      : (_ = t[19]);
    let v;
    t[20] !== d || t[21] !== _
      ? ((v = (0, A.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [d, _],
        })),
        (t[20] = d),
        (t[21] = _),
        (t[22] = v))
      : (v = t[22]);
    let y;
    return (
      t[23] !== s || t[24] !== v
        ? ((y = (0, A.jsxs)(`div`, {
            className: `flex w-full flex-col gap-3`,
            children: [s, v],
          })),
          (t[23] = s),
          (t[24] = v),
          (t[25] = y))
        : (y = t[25]),
      y
    );
  }
  let g;
  t[26] === o
    ? (g = t[27])
    : ((g = o
        ? (0, A.jsx)(f, {
            id: `electron.onboarding.login.chatgpt.cancel`,
            defaultMessage: `Cancel sign-in`,
            description: `Cancel button label while ChatGPT sign-in is in progress on desktop onboarding`,
          })
        : (0, A.jsx)(f, {
            id: `electron.onboarding.login.chatgpt.continue`,
            defaultMessage: `Continue with ChatGPT`,
            description: `Button label to sign in with ChatGPT on desktop onboarding`,
          })),
      (t[26] = o),
      (t[27] = g));
  let _;
  t[28] !== d || t[29] !== g
    ? ((_ = (0, A.jsx)(i, {
        color: `primary`,
        className: `w-full justify-center py-2.5`,
        onClick: d,
        children: g,
      })),
      (t[28] = d),
      (t[29] = g),
      (t[30] = _))
    : (_ = t[30]);
  let v;
  t[31] !== o || t[32] !== p
    ? ((v = o
        ? null
        : (0, A.jsx)(i, {
            color: `outline`,
            className: `w-full justify-center py-2.5`,
            onClick: p,
            children: (0, A.jsx)(f, {
              id: `electron.onboarding.login.apikey.open`,
              defaultMessage: `Enter API key`,
              description: `Button label to open API key entry on desktop onboarding`,
            }),
          })),
      (t[31] = o),
      (t[32] = p),
      (t[33] = v))
    : (v = t[33]);
  let y;
  return (
    t[34] !== _ || t[35] !== v
      ? ((y = (0, A.jsxs)(`div`, {
          className: `flex w-full max-w-[200px] flex-col gap-3`,
          children: [_, v],
        })),
        (t[34] = _),
        (t[35] = v),
        (t[36] = y))
      : (y = t[36]),
    y
  );
}
var k,
  A,
  j = e(() => {
    ((k = t()), a(), r(), (A = n()));
  });
export { v as a, D as i, j as n, g as o, y as r, h as s, O as t };
//# sourceMappingURL=onboarding-login-content-BFxktxIt.js.map
