import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  _c as r,
  ac as i,
  gc as a,
  lc as o,
  tc as s,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Xi as c,
  Zi as l,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  An as u,
  Ca as d,
  Dm as f,
  Do as p,
  Em as m,
  Eo as h,
  Om as g,
  Op as _,
  Ss as v,
  Tm as y,
  To as b,
  _a as x,
  ba as S,
  eo as C,
  ga as w,
  hh as T,
  kn as E,
  kp as D,
  mh as O,
  no as k,
  oo as A,
  va as j,
  wo as M,
  xs as N,
  ya as P,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Fy as F,
  Iy as I,
  ry as L,
  ty as R,
  zy as z,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Bd as B,
  Fd as V,
  Fn as H,
  In as U,
  Md as W,
  Nd as G,
  Pd as K,
  Rd as ee,
  Vd as q,
  fo as te,
  po as J,
  zd as Y,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  H as ne,
  R as re,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  J as ie,
  q as ae,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
var X,
  oe,
  se = e(() => {
    (t(r()),
      (X = o()),
      (oe = (e) =>
        (0, X.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, X.jsx)(`path`, {
              d: `M12 2A10 10 0 1 0 22 12C19.7909 12 18 10.2091 18 8C15.7909 8 14 6.20914 14 4C14 3.3072 13.824 2.6555 13.5143 2.0873C13.0186 2.02962 12.5139 2 12 2Z`,
              stroke: `currentColor`,
              strokeWidth: 1.5,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
            (0, X.jsx)(`circle`, { cx: 12, cy: 7, r: 1, fill: `currentColor` }),
            (0, X.jsx)(`circle`, {
              cx: 7.5,
              cy: 11,
              r: 1,
              fill: `currentColor`,
            }),
            (0, X.jsx)(`circle`, {
              cx: 11.5,
              cy: 15,
              r: 1,
              fill: `currentColor`,
            }),
            (0, X.jsx)(`circle`, {
              cx: 16,
              cy: 12.5,
              r: 1,
              fill: `currentColor`,
            }),
          ],
        })));
  }),
  ce,
  le,
  ue = e(() => {
    (t(r()),
      (ce = o()),
      (le = (e) =>
        (0, ce.jsxs)(`svg`, {
          width: 20,
          height: 20,
          viewBox: `0 0 20 20`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: [
            (0, ce.jsx)(`path`, {
              d: `M8.75 9.55V15.75L6.5 18.25L4.25 15.75V9.55C2.886 8.748 2 7.267 2 5.625C2 3.14 4.015 1.125 6.5 1.125C8.985 1.125 11 3.14 11 5.625C11 7.267 10.114 8.748 8.75 9.55Z`,
              stroke: `currentColor`,
              strokeWidth: 1.33,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
            (0, ce.jsx)(`circle`, {
              cx: 6.5,
              cy: 5.5,
              r: 0.75,
              fill: `currentColor`,
            }),
            (0, ce.jsx)(`path`, {
              d: `M11.45 2.775C12.078 2.362 12.83 2.125 13.625 2.125C16.11 2.125 18.125 4.14 18.125 6.625C18.125 8.267 17.239 9.748 15.875 10.55V15.75L13.625 18.25L11.375 15.75V10.55C10.818 10.223 10.342 9.783 9.977 9.263`,
              stroke: `currentColor`,
              strokeWidth: 1.33,
              strokeLinecap: `round`,
              strokeLinejoin: `round`,
            }),
          ],
        })));
  }),
  Z,
  de = e(() => {
    (I(),
      (Z = F({
        cookies: {
          id: `settings.browserUse.profileImport.cookies`,
          defaultMessage: `Cookies`,
          description: `Label for importing cookies from a browser profile`,
        },
        passwords: {
          id: `settings.browserUse.profileImport.passwords`,
          defaultMessage: `Passwords`,
          description: `Label for importing passwords from a browser profile`,
        },
        title: {
          id: `settings.browserUse.profileImport.title`,
          defaultMessage: `Import from your browser`,
          description: `Title for the browser profile import dialog`,
        },
      })));
  });
function fe(e) {
  let t = (0, Q.c)(60),
    {
      cookieAccessFailureMessage: n,
      elevatedChromeConsent: r,
      hasImportError: i,
      importCookies: a,
      importPasswords: o,
      isImporting: s,
      isLoadingProfiles: c,
      showCloseBrowserGuidance: l,
      profilePickerOpen: u,
      profiles: d,
      profilesHaveError: f,
      requiresElevatedChromeConsent: p,
      result: m,
      selectedProfile: g,
      onCancel: _,
      onElevatedChromeConsentChange: v,
      onImport: C,
      onImportCookiesChange: T,
      onImportPasswordsChange: E,
      onProfilePickerOpenChange: D,
      onSelectProfile: O,
    } = e;
  if (m != null) {
    let e;
    return (
      t[0] !== n || t[1] !== _ || t[2] !== m || t[3] !== l
        ? ((e = (0, $.jsx)(ye, {
            cookieAccessFailureMessage: n,
            showCloseBrowserGuidance: l,
            result: m,
            onDone: _,
          })),
          (t[0] = n),
          (t[1] = _),
          (t[2] = m),
          (t[3] = l),
          (t[4] = e))
        : (e = t[4]),
      e
    );
  }
  let k = g?.hasCookies === !0 && a,
    A = g?.hasPasswords === !0 && o,
    M = g == null || (!k && !A) || (p && !r),
    N;
  t[5] === C
    ? (N = t[6])
    : ((N = (e) => {
        (e.preventDefault(), C());
      }),
      (t[5] = C),
      (t[6] = N));
  let F;
  t[7] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(h, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(z, { ...Z.title }),
        }),
      })),
      (t[7] = F))
    : (F = t[7]);
  let I;
  t[8] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((I = (0, $.jsx)(z, { ...Z.title })), (t[8] = I))
    : (I = t[8]);
  let L;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsxs)(S, {
        children: [
          F,
          (0, $.jsx)(P, {
            title: I,
            subtitle: (0, $.jsx)(b, {
              asChild: !0,
              children: (0, $.jsx)(`div`, {
                children: (0, $.jsx)(z, {
                  id: `settings.browserUse.profileImport.subtitle`,
                  defaultMessage: `Choose data to bring over to the built-in browser`,
                  description: `Subtitle for the browser data import dialog`,
                }),
              }),
            }),
          }),
        ],
      })),
      (t[9] = L))
    : (L = t[9]);
  let R = s || !d?.length,
    B;
  t[10] !== c ||
  t[11] !== D ||
  t[12] !== O ||
  t[13] !== u ||
  t[14] !== d ||
  t[15] !== g ||
  t[16] !== R
    ? ((B = (0, $.jsx)(pe, {
        disabled: R,
        isLoading: c,
        open: u,
        profiles: d,
        selectedProfile: g,
        onOpenChange: D,
        onSelectProfile: O,
      })),
      (t[10] = c),
      (t[11] = D),
      (t[12] = O),
      (t[13] = u),
      (t[14] = d),
      (t[15] = g),
      (t[16] = R),
      (t[17] = B))
    : (B = t[17]);
  let V;
  t[18] === d?.length
    ? (V = t[19])
    : ((V =
        d?.length === 0 &&
        (0, $.jsx)(`p`, {
          className: `text-sm text-token-description-foreground`,
          children: (0, $.jsx)(z, {
            id: `settings.browserUse.profileImport.noProfilesDescription`,
            defaultMessage: `No Chrome or Atlas profiles were found on this device`,
            description: `Message shown when no importable browser profiles are found`,
          }),
        })),
      (t[18] = d?.length),
      (t[19] = V));
  let H;
  t[20] !== g || t[21] !== l
    ? ((H =
        l &&
        g != null &&
        (0, $.jsx)(`p`, {
          className: `text-sm text-token-description-foreground`,
          children: (0, $.jsx)(z, {
            id: `settings.browserUse.profileImport.closeBrowser`,
            defaultMessage: `Close {browserName} completely before importing`,
            description: `Instruction to close the source browser before importing its profile data`,
            values: { browserName: g.appName },
          }),
        })),
      (t[20] = g),
      (t[21] = l),
      (t[22] = H))
    : (H = t[22]);
  let U;
  t[23] !== k ||
  t[24] !== A ||
  t[25] !== s ||
  t[26] !== T ||
  t[27] !== E ||
  t[28] !== g
    ? ((U =
        g != null &&
        (0, $.jsxs)(ae, {
          children: [
            (0, $.jsx)(he, {
              available: g.hasPasswords,
              checked: A,
              disabled: s,
              kind: `passwords`,
              onChange: E,
            }),
            (0, $.jsx)(he, {
              available: g.hasCookies,
              checked: k,
              disabled: s,
              kind: `cookies`,
              onChange: T,
            }),
          ],
        })),
      (t[23] = k),
      (t[24] = A),
      (t[25] = s),
      (t[26] = T),
      (t[27] = E),
      (t[28] = g),
      (t[29] = U))
    : (U = t[29]);
  let W;
  t[30] !== r || t[31] !== s || t[32] !== v || t[33] !== p
    ? ((W = p && (0, $.jsx)(ge, { checked: r, disabled: s, onChange: v })),
      (t[30] = r),
      (t[31] = s),
      (t[32] = v),
      (t[33] = p),
      (t[34] = W))
    : (W = t[34]);
  let G;
  t[35] !== i || t[36] !== f
    ? ((G = (0, $.jsx)(_e, { importFailed: i, profileDiscoveryFailed: f })),
      (t[35] = i),
      (t[36] = f),
      (t[37] = G))
    : (G = t[37]);
  let K;
  t[38] !== W ||
  t[39] !== G ||
  t[40] !== B ||
  t[41] !== V ||
  t[42] !== H ||
  t[43] !== U
    ? ((K = (0, $.jsxs)(S, {
        className: `gap-3`,
        children: [B, V, H, U, W, G],
      })),
      (t[38] = W),
      (t[39] = G),
      (t[40] = B),
      (t[41] = V),
      (t[42] = H),
      (t[43] = U),
      (t[44] = K))
    : (K = t[44]);
  let ee;
  t[45] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((ee = (0, $.jsx)(z, {
        id: `settings.browserUse.profileImport.cancel`,
        defaultMessage: `Cancel`,
        description: `Button that closes the browser data import dialog`,
      })),
      (t[45] = ee))
    : (ee = t[45]);
  let q;
  t[46] !== s || t[47] !== _
    ? ((q = (0, $.jsx)(y, {
        color: `secondary`,
        disabled: s,
        onClick: _,
        type: `button`,
        children: ee,
      })),
      (t[46] = s),
      (t[47] = _),
      (t[48] = q))
    : (q = t[48]);
  let te;
  t[49] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, $.jsx)(z, {
        id: `settings.browserUse.profileImport.import`,
        defaultMessage: `Import`,
        description: `Button that starts importing browser data`,
      })),
      (t[49] = te))
    : (te = t[49]);
  let J;
  t[50] !== M || t[51] !== s
    ? ((J = (0, $.jsx)(y, {
        color: `primary`,
        disabled: M,
        loading: s,
        type: `submit`,
        children: te,
      })),
      (t[50] = M),
      (t[51] = s),
      (t[52] = J))
    : (J = t[52]);
  let Y;
  t[53] !== q || t[54] !== J
    ? ((Y = (0, $.jsx)(S, {
        children: (0, $.jsxs)(j, { className: w, children: [q, J] }),
      })),
      (t[53] = q),
      (t[54] = J),
      (t[55] = Y))
    : (Y = t[55]);
  let ne;
  return (
    t[56] !== N || t[57] !== K || t[58] !== Y
      ? ((ne = (0, $.jsxs)(x, {
          as: `form`,
          onSubmit: N,
          children: [L, K, Y],
        })),
        (t[56] = N),
        (t[57] = K),
        (t[58] = Y),
        (t[59] = ne))
      : (ne = t[59]),
    ne
  );
}
function pe(e) {
  let t = (0, Q.c)(27),
    {
      disabled: n,
      isLoading: r,
      open: i,
      profiles: a,
      selectedProfile: o,
      onOpenChange: s,
      onSelectProfile: c,
    } = e,
    l;
  t[0] === o ? (l = t[1]) : ((l = o ? Ee(o) : null), (t[0] = o), (t[1] = l));
  let u = l,
    d;
  t[2] === o ? (d = t[3]) : ((d = o ? De(o) : void 0), (t[2] = o), (t[3] = d));
  let f = d,
    p = a?.length === 1,
    m = p || void 0,
    h = p && `pointer-events-none`,
    g;
  t[4] === h
    ? (g = t[5])
    : ((g = O(`min-w-0 flex-1`, h)), (t[4] = h), (t[5] = g));
  let v = p ? `hidden` : void 0,
    y = p ? void 0 : n,
    b = p ? -1 : void 0,
    x;
  t[6] !== r || t[7] !== o
    ? ((x = (0, $.jsx)(me, { isLoading: r, selectedProfile: o })),
      (t[6] = r),
      (t[7] = o),
      (t[8] = x))
    : (x = t[8]);
  let S;
  t[9] !== f ||
  t[10] !== m ||
  t[11] !== g ||
  t[12] !== v ||
  t[13] !== y ||
  t[14] !== b ||
  t[15] !== x
    ? ((S = (0, $.jsx)(re, {
        "aria-disabled": m,
        "aria-label": f,
        className: g,
        chevronClassName: v,
        disabled: y,
        tabIndex: b,
        children: x,
      })),
      (t[9] = f),
      (t[10] = m),
      (t[11] = g),
      (t[12] = v),
      (t[13] = y),
      (t[14] = b),
      (t[15] = x),
      (t[16] = S))
    : (S = t[16]);
  let w = S,
    T;
  t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(`span`, {
        className: `shrink-0 text-sm text-token-description-foreground`,
        children: (0, $.jsx)(z, {
          id: `settings.browserUse.profileImport.from`,
          defaultMessage: `From`,
          description: `Label before the browser profile selector`,
        }),
      })),
      (t[17] = T))
    : (T = t[17]);
  let E;
  return (
    t[18] !== n ||
    t[19] !== s ||
    t[20] !== c ||
    t[21] !== i ||
    t[22] !== a ||
    t[23] !== u ||
    t[24] !== p ||
    t[25] !== w
      ? ((E = (0, $.jsxs)(`div`, {
          className: `flex items-center gap-3`,
          children: [
            T,
            p
              ? w
              : (0, $.jsx)(C, {
                  align: `end`,
                  contentWidth: `menuWide`,
                  disabled: n,
                  open: i,
                  triggerButton: w,
                  onOpenChange: s,
                  children: (0, $.jsx)(k.Section, {
                    className: `max-h-[250px] overflow-y-auto`,
                    children: a?.map((e) => {
                      let t = Ee(e);
                      return (0, $.jsx)(
                        k.Item,
                        {
                          "aria-label": De(e),
                          RightIcon: t === u ? _ : void 0,
                          onSelect: () => c(e),
                          children: (0, $.jsx)(we, { profile: e }),
                        },
                        t,
                      );
                    }),
                  }),
                }),
          ],
        })),
        (t[18] = n),
        (t[19] = s),
        (t[20] = c),
        (t[21] = i),
        (t[22] = a),
        (t[23] = u),
        (t[24] = p),
        (t[25] = w),
        (t[26] = E))
      : (E = t[26]),
    E
  );
}
function me(e) {
  let t = (0, Q.c)(4),
    { isLoading: n, selectedProfile: r } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsxs)($.Fragment, {
            children: [
              (0, $.jsx)(f, { className: `icon-2xs` }),
              (0, $.jsx)(z, {
                id: `settings.browserUse.profileImport.loadingProfiles`,
                defaultMessage: `Loading profiles…`,
                description: `Placeholder shown while importable browser profiles load`,
              }),
            ],
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (r == null) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(z, {
            id: `settings.browserUse.profileImport.noProfiles`,
            defaultMessage: `No profiles found`,
            description: `Placeholder shown when no importable browser profiles are found`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  return (
    t[2] === r
      ? (i = t[3])
      : ((i = (0, $.jsx)(we, { profile: r })), (t[2] = r), (t[3] = i)),
    i
  );
}
function he(e) {
  let t = (0, Q.c)(16),
    { available: n, checked: r, disabled: i, kind: a, onChange: o } = e,
    s = `browser-profile-import-${a}-label`,
    c,
    l;
  if (a === `cookies`) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(z, { ...Z.cookies })), (t[0] = e))
      : (e = t[0]),
      (c = e));
    let n;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(oe, {
          className: `size-5 text-token-text-secondary`,
        })),
        (t[1] = n))
      : (n = t[1]),
      (l = n));
  } else {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(z, { ...Z.passwords })), (t[2] = e))
      : (e = t[2]),
      (c = e));
    let n;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(le, {
          className: `size-5 text-token-text-secondary`,
        })),
        (t[3] = n))
      : (n = t[3]),
      (l = n));
  }
  let u;
  t[4] !== c || t[5] !== s
    ? ((u = (0, $.jsx)(`span`, { id: s, children: c })),
      (t[4] = c),
      (t[5] = s),
      (t[6] = u))
    : (u = t[6]);
  let d = !n || i,
    f;
  t[7] !== r || t[8] !== s || t[9] !== o || t[10] !== d
    ? ((f = (0, $.jsx)(E, {
        "aria-labelledby": s,
        checked: r,
        disabled: d,
        onChange: o,
      })),
      (t[7] = r),
      (t[8] = s),
      (t[9] = o),
      (t[10] = d),
      (t[11] = f))
    : (f = t[11]);
  let p;
  return (
    t[12] !== l || t[13] !== u || t[14] !== f
      ? ((p = (0, $.jsx)(H, { icon: l, label: u, control: f })),
        (t[12] = l),
        (t[13] = u),
        (t[14] = f),
        (t[15] = p))
      : (p = t[15]),
    p
  );
}
function ge(e) {
  let t = (0, Q.c)(9),
    { checked: n, disabled: r, onChange: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(`p`, {
        className: `font-medium text-token-text-primary`,
        children: (0, $.jsx)(z, {
          id: `settings.browserUse.profileImport.windowsChrome.title`,
          defaultMessage: `Administrator approval required`,
          description: `Title for the Windows Chrome browser import consent notice`,
        }),
      })),
      (t[0] = a))
    : (a = t[0]);
  let o;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((o = (0, $.jsx)(`p`, {
        className: `text-token-description-foreground`,
        children: (0, $.jsx)(z, {
          id: `settings.browserUse.profileImport.windowsChrome.description`,
          defaultMessage: `Windows protects Chrome cookies and passwords with App-Bound Encryption, so Codex also needs administrator approval`,
          description: `Description for the Windows Chrome browser import consent notice`,
        }),
      })),
      (t[1] = o))
    : (o = t[1]);
  let s;
  t[2] !== n || t[3] !== r || t[4] !== i
    ? ((s = (0, $.jsx)(c, { checked: n, disabled: r, onCheckedChange: i })),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i),
      (t[5] = s))
    : (s = t[5]);
  let l;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, $.jsx)(`span`, {
        children: (0, $.jsx)(z, {
          id: `settings.browserUse.profileImport.windowsChrome.consent`,
          defaultMessage: `I understand the app will request administrator approval to import this Chrome data`,
          description: `Consent label for elevated Windows Chrome browser data import`,
        }),
      })),
      (t[6] = l))
    : (l = t[6]);
  let u;
  return (
    t[7] === s
      ? (u = t[8])
      : ((u = (0, $.jsxs)(`div`, {
          className: `flex flex-col gap-2 rounded-lg border border-token-input-border bg-token-foreground/[0.025] p-3 text-sm`,
          children: [
            a,
            o,
            (0, $.jsxs)(`label`, {
              className: `relative flex cursor-interaction items-start gap-2`,
              children: [s, l],
            }),
          ],
        })),
        (t[7] = s),
        (t[8] = u)),
    u
  );
}
function _e(e) {
  let t = (0, Q.c)(2),
    { importFailed: n, profileDiscoveryFailed: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ve, {
            children: (0, $.jsx)(z, {
              id: `settings.browserUse.profileImport.profilesError`,
              defaultMessage: `We couldn't load browser profiles. Close and reopen this dialog to try again`,
              description: `Error shown when browser profiles cannot be loaded for import`,
            }),
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(ve, {
            children: (0, $.jsx)(z, {
              id: `settings.browserUse.profileImport.error`,
              defaultMessage: `We couldn't import all of this browser data. Try again`,
              description: `Error shown when browser profile import fails`,
            }),
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  return null;
}
function ve(e) {
  let t = (0, Q.c)(2),
    { children: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, $.jsx)(`p`, {
          className: `px-3 text-sm text-token-error-foreground`,
          role: `alert`,
          children: n,
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function ye(e) {
  let t = (0, Q.c)(40),
    {
      cookieAccessFailureMessage: n,
      showCloseBrowserGuidance: r,
      result: i,
      onDone: a,
    } = e,
    o = i.cookies?.status === `failed_to_copy`,
    s;
  t[0] === i.cookies
    ? (s = t[1])
    : ((s = Oe(i.cookies)), (t[0] = i.cookies), (t[1] = s));
  let c = s,
    l =
      c &&
      ((i.cookies?.imported ?? 0) > 0 ||
        i.cookies?.status === `partial-success`),
    u = i.passwords?.profile,
    d = i.passwords?.account,
    f,
    p;
  t[2] !== i.passwords || t[3] !== u || t[4] !== d
    ? ((f = [i.passwords, u, d]),
      (p = f.some(Oe)),
      (t[2] = i.passwords),
      (t[3] = u),
      (t[4] = d),
      (t[5] = f),
      (t[6] = p))
    : ((f = t[5]), (p = t[6]));
  let m = p,
    g = f.some(xe),
    _;
  t[7] !== m || t[8] !== f
    ? ((_ = m && f.some(be)), (t[7] = m), (t[8] = f), (t[9] = _))
    : (_ = t[9]);
  let v = _,
    C = c || m,
    T;
  t[10] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((T = (0, $.jsx)(h, {
        asChild: !0,
        children: (0, $.jsx)(`h2`, {
          className: `sr-only`,
          children: (0, $.jsx)(z, { ...ke.complete }),
        }),
      })),
      (t[10] = T))
    : (T = t[10]);
  let E = C ? `sr-only` : void 0,
    D;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((D = (0, $.jsx)(z, { ...ke.complete })), (t[11] = D))
    : (D = t[11]);
  let O;
  t[12] === C
    ? (O = t[13])
    : ((O = (0, $.jsx)(b, {
        asChild: !0,
        children: (0, $.jsx)(`div`, {
          children: C
            ? (0, $.jsx)(z, {
                id: `settings.browserUse.profileImport.partialDescription`,
                defaultMessage: `Review the import status for each browser data type`,
                description: `Accessible description for a browser data import with one or more failed data types`,
              })
            : (0, $.jsx)(z, {
                id: `settings.browserUse.profileImport.completeDescription`,
                defaultMessage: `Your data is now available in the built-in browser`,
                description: `Description shown after browser data import completes`,
              }),
        }),
      })),
      (t[12] = C),
      (t[13] = O));
  let k;
  t[14] !== E || t[15] !== O
    ? ((k = (0, $.jsxs)(S, {
        children: [
          T,
          (0, $.jsx)(P, { subtitleClassName: E, title: D, subtitle: O }),
        ],
      })),
      (t[14] = E),
      (t[15] = O),
      (t[16] = k))
    : (k = t[16]);
  let A;
  t[17] !== g || t[18] !== m || t[19] !== v || t[20] !== i.passwords
    ? ((A =
        i.passwords != null &&
        (0, $.jsx)(Te, {
          failureMessage: m
            ? (0, $.jsx)(Ce, { accessFailed: g, partiallyFailed: v })
            : void 0,
          kind: `passwords`,
        })),
      (t[17] = g),
      (t[18] = m),
      (t[19] = v),
      (t[20] = i.passwords),
      (t[21] = A))
    : (A = t[21]);
  let M;
  t[22] !== o ||
  t[23] !== n ||
  t[24] !== c ||
  t[25] !== l ||
  t[26] !== i.cookies ||
  t[27] !== i.source ||
  t[28] !== r
    ? ((M =
        i.cookies != null &&
        (0, $.jsx)(Te, {
          failureMessage: c
            ? (0, $.jsx)(Se, {
                accessFailed: o,
                showCloseBrowserGuidance: r,
                message: n,
                partiallyFailed: l,
                source: i.source,
              })
            : void 0,
          kind: `cookies`,
        })),
      (t[22] = o),
      (t[23] = n),
      (t[24] = c),
      (t[25] = l),
      (t[26] = i.cookies),
      (t[27] = i.source),
      (t[28] = r),
      (t[29] = M))
    : (M = t[29]);
  let N;
  t[30] !== A || t[31] !== M
    ? ((N = (0, $.jsx)(S, { children: (0, $.jsxs)(ae, { children: [A, M] }) })),
      (t[30] = A),
      (t[31] = M),
      (t[32] = N))
    : (N = t[32]);
  let F;
  t[33] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((F = (0, $.jsx)(z, {
        id: `settings.browserUse.profileImport.done`,
        defaultMessage: `Done`,
        description: `Button that closes the completed browser data import dialog`,
      })),
      (t[33] = F))
    : (F = t[33]);
  let I;
  t[34] === a
    ? (I = t[35])
    : ((I = (0, $.jsx)(S, {
        children: (0, $.jsx)(j, {
          className: w,
          expandSingleButton: !1,
          children: (0, $.jsx)(y, {
            color: `primary`,
            onClick: a,
            type: `button`,
            children: F,
          }),
        }),
      })),
      (t[34] = a),
      (t[35] = I));
  let L;
  return (
    t[36] !== k || t[37] !== N || t[38] !== I
      ? ((L = (0, $.jsxs)(x, { children: [k, N, I] })),
        (t[36] = k),
        (t[37] = N),
        (t[38] = I),
        (t[39] = L))
      : (L = t[39]),
    L
  );
}
function be(e) {
  return (
    (e?.imported ?? 0) > 0 ||
    e?.status === `success` ||
    e?.status === `partial-success`
  );
}
function xe(e) {
  return e?.status === `failed_to_copy`;
}
function Se(e) {
  let t = (0, Q.c)(7),
    {
      accessFailed: n,
      showCloseBrowserGuidance: r,
      message: i,
      partiallyFailed: a,
      source: o,
    } = e;
  if (n) {
    if (i != null) {
      let e;
      return (
        t[0] === i
          ? (e = t[1])
          : ((e = (0, $.jsx)($.Fragment, { children: i })),
            (t[0] = i),
            (t[1] = e)),
        e
      );
    }
    if (!r) {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, $.jsx)(z, {
              id: `settings.browserUse.profileImport.cookieAccessError`,
              defaultMessage: `Codex couldn’t access this profile’s cookies. A device security policy may be blocking access`,
              description: `Error shown when device security may have blocked access to cookies during browser profile import`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    switch (o) {
      case `chrome`: {
        let e;
        return (
          t[3] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(z, {
                id: `settings.browserUse.profileImport.chromeCookieAccessError`,
                defaultMessage: `Codex couldn’t access this profile’s cookies. Chrome may still be running in the background. Close Chrome completely and try again. A device security policy may also block access`,
                description: `Error shown when Chrome or device security may have blocked access to cookies during browser profile import`,
              })),
              (t[3] = e))
            : (e = t[3]),
          e
        );
      }
      case `atlas`: {
        let e;
        return (
          t[4] === Symbol.for(`react.memo_cache_sentinel`)
            ? ((e = (0, $.jsx)(z, {
                id: `settings.browserUse.profileImport.atlasCookieAccessError`,
                defaultMessage: `Codex couldn’t access this profile’s cookies. Atlas may still be running in the background. Close Atlas completely and try again. A device security policy may also block access`,
                description: `Error shown when Atlas or device security may have blocked access to cookies during browser profile import`,
              })),
              (t[4] = e))
            : (e = t[4]),
          e
        );
      }
    }
  }
  if (a) {
    let e;
    return (
      t[5] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(z, {
            id: `settings.browserUse.profileImport.cookiesPartialError`,
            defaultMessage: `Some cookies couldn’t be imported`,
            description: `Error shown when some cookies could not be imported from a browser profile`,
          })),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  let s;
  return (
    t[6] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((s = (0, $.jsx)(z, {
          id: `settings.browserUse.profileImport.cookiesError`,
          defaultMessage: `Cookies couldn’t be imported`,
          description: `Error shown when cookies could not be imported from a browser profile`,
        })),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
function Ce(e) {
  let t = (0, Q.c)(3),
    { accessFailed: n, partiallyFailed: r } = e;
  if (r) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(z, {
            id: `settings.browserUse.profileImport.passwordsPartialError`,
            defaultMessage: `Some passwords couldn’t be imported`,
            description: `Error shown when some passwords could not be imported from a browser profile`,
          })),
          (t[0] = e))
        : (e = t[0]),
      e
    );
  }
  if (n) {
    let e;
    return (
      t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(z, {
            id: `settings.browserUse.profileImport.passwordAccessError`,
            defaultMessage: `Codex couldn’t access this profile’s passwords. A device security policy may be blocking access`,
            description: `Error shown when device security may have blocked access to passwords during browser profile import`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  let i;
  return (
    t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, $.jsx)(z, {
          id: `settings.browserUse.profileImport.passwordsError`,
          defaultMessage: `Passwords couldn’t be imported`,
          description: `Error shown when passwords could not be imported from a browser profile`,
        })),
        (t[2] = i))
      : (i = t[2]),
    i
  );
}
function we(e) {
  let t = (0, Q.c)(10),
    { profile: n } = e,
    r;
  bb0: switch (n.source) {
    case `atlas`: {
      let e;
      (t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(`img`, {
            alt: ``,
            className: `size-4 shrink-0 rounded-[22%]`,
            src: K,
          })),
          (t[0] = e))
        : (e = t[0]),
        (r = e));
      break bb0;
    }
    case `chrome`: {
      let e;
      (t[1] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, $.jsx)(W, { className: `size-4 shrink-0` })), (t[1] = e))
        : (e = t[1]),
        (r = e));
    }
  }
  let i;
  t[2] === n.appName
    ? (i = t[3])
    : ((i = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-token-text-primary`,
        children: n.appName,
      })),
      (t[2] = n.appName),
      (t[3] = i));
  let a = n.profileName || n.profileDirectoryName,
    o;
  t[4] === a
    ? (o = t[5])
    : ((o = (0, $.jsx)(`span`, {
        className: `min-w-0 truncate text-token-text-tertiary`,
        children: a,
      })),
      (t[4] = a),
      (t[5] = o));
  let s;
  return (
    t[6] !== r || t[7] !== i || t[8] !== o
      ? ((s = (0, $.jsxs)(`span`, {
          className: `flex min-w-0 flex-1 items-center gap-1.5`,
          children: [r, i, o],
        })),
        (t[6] = r),
        (t[7] = i),
        (t[8] = o),
        (t[9] = s))
      : (s = t[9]),
    s
  );
}
function Te(e) {
  let t = (0, Q.c)(12),
    { failureMessage: n, kind: r } = e,
    i,
    a;
  if (r === `cookies`) {
    let e;
    (t[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(oe, {
          className: `size-5 text-token-text-secondary`,
        })),
        (t[0] = e))
      : (e = t[0]),
      (i = e));
    let n;
    (t[1] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(z, { ...Z.cookies })), (t[1] = n))
      : (n = t[1]),
      (a = n));
  } else {
    let e;
    (t[2] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((e = (0, $.jsx)(le, {
          className: `size-5 text-token-text-secondary`,
        })),
        (t[2] = e))
      : (e = t[2]),
      (i = e));
    let n;
    (t[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsx)(z, { ...Z.passwords })), (t[3] = n))
      : (n = t[3]),
      (a = n));
  }
  let o, s;
  t[4] === n
    ? ((o = t[5]), (s = t[6]))
    : ((o =
        n == null
          ? (0, $.jsx)(N, { className: `size-5 text-token-text-primary` })
          : (0, $.jsx)(te, {
              className: `size-5 text-token-error-foreground`,
            })),
      (s =
        n == null
          ? void 0
          : (0, $.jsx)(`span`, {
              className: `text-token-error-foreground`,
              role: `alert`,
              children: n,
            })),
      (t[4] = n),
      (t[5] = o),
      (t[6] = s));
  let c;
  return (
    t[7] !== i || t[8] !== a || t[9] !== o || t[10] !== s
      ? ((c = (0, $.jsx)(H, { control: o, description: s, icon: i, label: a })),
        (t[7] = i),
        (t[8] = a),
        (t[9] = o),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Ee(e) {
  return `${e.source}:${e.profilePath}`;
}
function De(e) {
  let t = e.profileName || e.profileDirectoryName;
  return `${e.appName} ${t}`;
}
function Oe(e) {
  return (
    (e?.failed ?? 0) > 0 ||
    e?.error != null ||
    (e?.status != null && e.status !== `success`)
  );
}
var Q,
  $,
  ke,
  Ae = e(() => {
    ((Q = a()),
      T(),
      I(),
      V(),
      m(),
      l(),
      p(),
      d(),
      A(),
      g(),
      u(),
      v(),
      D(),
      se(),
      G(),
      ue(),
      J(),
      U(),
      ne(),
      ie(),
      de(),
      ($ = o()),
      (ke = F({
        complete: {
          id: `settings.browserUse.profileImport.complete`,
          defaultMessage: `Import complete`,
          description: `Title shown after browser data import completes`,
        },
      })));
  });
function je(e) {
  let t = (0, Pe.c)(51),
    { onClose: n, service: r } = e,
    a = L(`1834314516`),
    [o, c] = (0, Fe.useState)(``),
    [l, u] = (0, Fe.useState)(!0),
    [d, f] = (0, Fe.useState)(!0),
    [p, m] = (0, Fe.useState)(null),
    h;
  t[0] === r ? (h = t[1]) : ((h = ee(r, !0)), (t[0] = r), (t[1] = h));
  let g = i(h),
    _;
  t[2] === r
    ? (_ = t[3])
    : ((_ = { mutationFn: (e) => B(r, e) }), (t[2] = r), (t[3] = _));
  let v = s(_),
    y = g.data,
    b;
  t[4] !== y || t[5] !== o
    ? ((b = y?.find((e) => Ne(e) === o) ?? Y(y ?? [])[0] ?? y?.[0] ?? null),
      (t[4] = y),
      (t[5] = o),
      (t[6] = b))
    : (b = t[6]);
  let x = b,
    S = x?.hasCookies === !0 && l,
    C = x?.hasPasswords === !0 && d,
    w =
      typeof document < `u` &&
      document.documentElement.dataset.codexOs === `win32`,
    T =
      typeof document < `u` &&
      document.documentElement.dataset.codexOs === `darwin`,
    E = w && x?.source === `chrome`,
    D;
  t[7] === x ? (D = t[8]) : ((D = x ? Ne(x) : null), (t[7] = x), (t[8] = D));
  let O = D,
    k = O != null && p === O,
    A = v.data ?? null,
    j,
    N;
  (t[9] !== a || t[10] !== n
    ? ((j = () => {
        a || n();
      }),
      (N = [a, n]),
      (t[9] = a),
      (t[10] = n),
      (t[11] = j),
      (t[12] = N))
    : ((j = t[11]), (N = t[12])),
    (0, Fe.useEffect)(j, N));
  let P;
  t[13] !== v.isPending || t[14] !== n
    ? ((P = () => {
        v.isPending || n();
      }),
      (t[13] = v.isPending),
      (t[14] = n),
      (t[15] = P))
    : (P = t[15]);
  let F = P,
    I;
  t[16] === F
    ? (I = t[17])
    : ((I = (e) => {
        e || F();
      }),
      (t[16] = F),
      (t[17] = I));
  let R = !v.isPending && A == null,
    z;
  t[18] === A ? (z = t[19]) : ((z = void 0), (t[18] = A), (t[19] = z));
  let V;
  t[20] === O
    ? (V = t[21])
    : ((V = (e) => {
        m(e ? O : null);
      }),
      (t[20] = O),
      (t[21] = V));
  let H;
  t[22] !== S || t[23] !== v || t[24] !== C || t[25] !== E || t[26] !== x
    ? ((H = () => {
        x != null && v.mutate(Me(x, S, C, E));
      }),
      (t[22] = S),
      (t[23] = v),
      (t[24] = C),
      (t[25] = E),
      (t[26] = x),
      (t[27] = H))
    : (H = t[27]);
  let U;
  t[28] === v
    ? (U = t[29])
    : ((U = (e) => {
        (c(Ne(e)), m(null), v.reset());
      }),
      (t[28] = v),
      (t[29] = U));
  let W;
  t[30] !== F ||
  t[31] !== k ||
  t[32] !== l ||
  t[33] !== v.isError ||
  t[34] !== v.isPending ||
  t[35] !== d ||
  t[36] !== y ||
  t[37] !== g.isError ||
  t[38] !== g.isLoading ||
  t[39] !== E ||
  t[40] !== A ||
  t[41] !== x ||
  t[42] !== z ||
  t[43] !== V ||
  t[44] !== H ||
  t[45] !== U
    ? ((W = (0, Ie.jsx)(fe, {
        cookieAccessFailureMessage: z,
        elevatedChromeConsent: k,
        hasImportError: v.isError,
        importCookies: l,
        importPasswords: d,
        isImporting: v.isPending,
        isLoadingProfiles: g.isLoading,
        showCloseBrowserGuidance: T,
        profiles: y,
        profilesHaveError: g.isError,
        requiresElevatedChromeConsent: E,
        result: A,
        selectedProfile: x,
        onCancel: F,
        onElevatedChromeConsentChange: V,
        onImport: H,
        onImportCookiesChange: u,
        onImportPasswordsChange: f,
        onSelectProfile: U,
      })),
      (t[30] = F),
      (t[31] = k),
      (t[32] = l),
      (t[33] = v.isError),
      (t[34] = v.isPending),
      (t[35] = d),
      (t[36] = y),
      (t[37] = g.isError),
      (t[38] = g.isLoading),
      (t[39] = E),
      (t[40] = A),
      (t[41] = x),
      (t[42] = z),
      (t[43] = V),
      (t[44] = H),
      (t[45] = U),
      (t[46] = W))
    : (W = t[46]);
  let G;
  return (
    t[47] !== W || t[48] !== I || t[49] !== R
      ? ((G = (0, Ie.jsx)(M, {
          open: !0,
          onOpenChange: I,
          showDialogClose: R,
          size: `narrow`,
          children: W,
        })),
        (t[47] = W),
        (t[48] = I),
        (t[49] = R),
        (t[50] = G))
      : (G = t[50]),
    G
  );
}
function Me(e, t, n, r) {
  let i = {
    source: e.source,
    profilePath: e.profilePath,
    importCookies: t,
    importPasswords: n,
  };
  return r ? { ...i, allowElevatedChromeDecryption: !0 } : i;
}
function Ne(e) {
  return `${e.source}:${e.profilePath}`;
}
var Pe, Fe, Ie;
e(() => {
  ((Pe = a()), n(), (Fe = t(r(), 1)), p(), Ae(), R(), q(), (Ie = o()));
})();
export { je as BrowserProfileImportDialogModal };
//# sourceMappingURL=browser-profile-import-dialog-Gr1b2Z7w.js.map
