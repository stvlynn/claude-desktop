import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  C as r,
  D as i,
  E as a,
  Fi as o,
  Go as s,
  Ko as c,
  O as l,
  S as u,
  Vo as d,
  _c as f,
  a as p,
  c as m,
  cc as h,
  fr as g,
  gc as _,
  h as v,
  jo as y,
  ko as b,
  l as x,
  lc as S,
  m as C,
  o as w,
  qo as T,
  so as E,
  tc as D,
  to as ee,
  u as O,
  xo as k,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  An as A,
  Ca as j,
  Dm as te,
  Do as M,
  Em as N,
  Eo as P,
  Kf as F,
  Om as I,
  Op as L,
  Tm as ne,
  _a as re,
  ba as R,
  cl as ie,
  dl as ae,
  eo as oe,
  fl as se,
  ga as ce,
  gp as le,
  hh as ue,
  kn as de,
  kp as fe,
  ll as pe,
  ls as me,
  mh as he,
  ml as ge,
  mp as _e,
  no as z,
  oo as ve,
  pl as ye,
  qf as be,
  sl as xe,
  ul as Se,
  us as Ce,
  va as we,
  wo as Te,
  xp as Ee,
  ya as De,
  yp as Oe,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  $p as ke,
  C as Ae,
  Fc as je,
  Fy as Me,
  Gs as B,
  Hl as Ne,
  Hs as Pe,
  Ic as V,
  Iy as H,
  N as Fe,
  Qp as Ie,
  Rl as Le,
  Us as Re,
  Vy as ze,
  _i as Be,
  ry as Ve,
  ty as U,
  vg as W,
  vi as He,
  xi as Ue,
  yg as We,
  zy as G,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  K as Ge,
  c as Ke,
  d as qe,
  f as Je,
  l as Ye,
  m as Xe,
  p as Ze,
  q as Qe,
  s as $e,
  u as et,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import {
  Wt as K,
  bn as q,
  nn as tt,
  yn as nt,
  zt as J,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Au as rt,
  Fn as it,
  In as at,
  Kd as ot,
  Mu as st,
  Sc as ct,
  Wd as lt,
  fc as ut,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  E as dt,
  H as ft,
  R as pt,
  T as mt,
  V as ht,
  ir as gt,
  nr as _t,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  J as vt,
  d as yt,
  f as bt,
  q as xt,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import {
  r as St,
  t as Ct,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js";
var wt,
  Tt = e(() => {
    (i(),
      v(),
      m(),
      (wt = w(a, `codex-agents-md`, (e) => ({
        params: { hostId: e },
        staleTime: C.FIVE_SECONDS,
      }))));
  }),
  Y,
  Et = e(() => {
    (H(),
      (Y = Me({
        personality: {
          id: `settings.personalization.personality.label`,
          defaultMessage: `Personality`,
          description: `Label for personality selection in personalization settings`,
        },
        friendly: {
          id: `composer.personalitySlashCommand.label.friendly`,
          defaultMessage: `Friendly`,
          description: `Label for the friendly personality`,
        },
        pragmatic: {
          id: `composer.personalitySlashCommand.label.pragmatic`,
          defaultMessage: `Pragmatic`,
          description: `Label for the pragmatic personality`,
        },
        customInstructions: {
          id: `settings.personalization.agents.title`,
          defaultMessage: `Custom instructions`,
          description: `Heading for personal agents settings section`,
        },
        memory: {
          id: `settings.personalization.memory.title`,
          defaultMessage: `Memory (experimental)`,
          description: `Heading for memory settings in personalization`,
        },
        enableMemories: {
          id: `settings.memory.enableMemoriesLabel`,
          defaultMessage: `Enable memories`,
          description: `Label for enabling memories`,
        },
        skipToolAssistedChats: {
          id: `settings.memory.noToolContextLabel`,
          defaultMessage: `Skip tool-assisted chats`,
          description: `Label for disabling memory generation when MCP or web search is used`,
        },
        resetMemories: {
          id: `settings.memory.resetMemoriesLabel`,
          defaultMessage: `Reset memories`,
          description: `Label for resetting memories`,
        },
      })));
  });
function Dt(e) {
  return kt(e, Ot);
}
function Ot(e) {
  let { edits: t } = e;
  return t;
}
function kt(e, t) {
  let n = (0, jt.c)(20),
    i = h(),
    { data: a } = s(tt, e),
    o = q(),
    c;
  n[0] === e ? (c = n[1]) : ((c = [...J, e]), (n[0] = e), (n[1] = c));
  let l = c,
    u;
  n[2] !== t || n[3] !== e || n[4] !== a?.configWriteTarget?.filePath
    ? ((u = (n) =>
        We(`batch-write-config-value`, {
          hostId: e,
          edits: t(n).map(At),
          filePath: a?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        })),
      (n[2] = t),
      (n[3] = e),
      (n[4] = a?.configWriteTarget?.filePath),
      (n[5] = u))
    : (u = n[5]);
  let d;
  n[6] !== t || n[7] !== i || n[8] !== l
    ? ((d = async (e) => {
        let n = t(e);
        await i.cancelQueries({ queryKey: l });
        let r = i.getQueryData(l);
        return (
          i.setQueryData(l, (e) =>
            e == null ? e : { ...e, config: Pe(e.config, n) },
          ),
          { previousUserConfig: r }
        );
      }),
      (n[6] = t),
      (n[7] = i),
      (n[8] = l),
      (n[9] = d))
    : (d = n[9]);
  let f;
  n[10] !== i || n[11] !== l
    ? ((f = (e, t, n) => {
        (r.error(`Failed to update memory config`, {
          safe: {},
          sensitive: { error: e },
        }),
          i.setQueryData(l, n?.previousUserConfig));
      }),
      (n[10] = i),
      (n[11] = l),
      (n[12] = f))
    : (f = n[12]);
  let p;
  n[13] === o
    ? (p = n[14])
    : ((p = async () => {
        await Promise.all([o(J), o([`user-saved-config`])]);
      }),
      (n[13] = o),
      (n[14] = p));
  let m;
  return (
    n[15] !== u || n[16] !== d || n[17] !== f || n[18] !== p
      ? ((m = { mutationFn: u, onMutate: d, onError: f, onSettled: p }),
        (n[15] = u),
        (n[16] = d),
        (n[17] = f),
        (n[18] = p),
        (n[19] = m))
      : (m = n[19]),
    D(m)
  );
}
function At(e) {
  let { keyPath: t, value: n } = e;
  return { keyPath: t, value: n, mergeStrategy: `upsert` };
}
var jt,
  Mt = e(() => {
    ((jt = _()), n(), d(), W(), K(), nt(), u(), B());
  });
function Nt() {
  let e = (0, It.c)(16),
    t = h(),
    n = T(Ae),
    { data: i } = s(tt, n),
    a = q(),
    o;
  e[0] === n ? (o = e[1]) : ((o = [...J, n]), (e[0] = n), (e[1] = o));
  let c = o,
    l;
  e[2] !== n || e[3] !== i?.configWriteTarget?.filePath
    ? ((l = (e) => {
        let { enabled: t } = e;
        return We(`batch-write-config-value`, {
          hostId: n,
          edits: [{ keyPath: Lt, value: t, mergeStrategy: `upsert` }],
          filePath: i?.configWriteTarget?.filePath ?? null,
          expectedVersion: null,
          reloadUserConfig: !0,
        });
      }),
      (e[2] = n),
      (e[3] = i?.configWriteTarget?.filePath),
      (e[4] = l))
    : (l = e[4]);
  let u, d;
  e[5] !== t || e[6] !== c
    ? ((u = async (e) => {
        let { enabled: n } = e;
        await t.cancelQueries({ queryKey: c });
        let r = t.getQueryData(c);
        return (
          t.setQueryData(c, (e) =>
            e == null ? e : { ...e, config: Pt(e.config, n) },
          ),
          { previousUserConfig: r }
        );
      }),
      (d = (e, n, i) => {
        (r.error(`Failed to update Chronicle config`, {
          safe: { error: String(e) },
          sensitive: {},
        }),
          t.setQueryData(c, i?.previousUserConfig));
      }),
      (e[5] = t),
      (e[6] = c),
      (e[7] = u),
      (e[8] = d))
    : ((u = e[7]), (d = e[8]));
  let f;
  e[9] === a
    ? (f = e[10])
    : ((f = async () => {
        await Promise.all([a(J), a([`user-saved-config`])]);
      }),
      (e[9] = a),
      (e[10] = f));
  let p;
  return (
    e[11] !== l || e[12] !== u || e[13] !== d || e[14] !== f
      ? ((p = { mutationFn: l, onMutate: u, onError: d, onSettled: f }),
        (e[11] = l),
        (e[12] = u),
        (e[13] = d),
        (e[14] = f),
        (e[15] = p))
      : (p = e[15]),
    D(p)
  );
}
function Pt(e, t) {
  return Object.assign(structuredClone(e), {
    features: { ...Ft(e.features, Se, t) },
  });
}
function Ft(e, t, n) {
  let r = Rt.safeParse(e);
  return { ...(r.success ? r.data : {}), [t]: n };
}
var It,
  Lt,
  Rt,
  zt = e(() => {
    ((It = _()),
      n(),
      d(),
      l(),
      E(),
      Fe(),
      W(),
      K(),
      nt(),
      u(),
      ae(),
      (Lt = g(Se)),
      (Rt = b(y(), k())));
  });
function Bt({ onChronicleResearchPreviewToggled: e } = {}) {
  let t = c(a),
    n = T(Ae),
    i = ze(),
    l = h(),
    u = gt(),
    d = Nt(),
    { data: f, isLoading: m } = be(o.CHRONICLE_CONSENT_ACCEPTED),
    { data: g, isLoading: _ } = s(tt, n),
    [v, y] = (0, rn.useState)(!1),
    [b, S] = (0, rn.useState)(!1),
    [C, w] = (0, rn.useState)(null),
    [E, D] = (0, rn.useState)(!1),
    O = x(`chronicle-permissions`, {
      queryConfig: {
        intervalMs: 1e3,
        refetchIntervalInBackground: !0,
        refetchOnMount: `always`,
      },
    }),
    k = ee(g?.config, se) === !0,
    A = ee(g?.config, Se) === !0,
    j = d.isPending || E || m,
    te = j || !k,
    M = $e({
      accessibilityStatus: O.data?.accessibility,
      errorMessage: C,
      isSidecarPresent: O.data?.chronicleSidecarPresent === !0,
      isUpdatingChronicle: E,
      processState: O.data?.chronicleSidecarProcessState ?? `disabled`,
      screenRecordingStatus: O.data?.screenRecording,
    }),
    N = i.formatMessage({
      id: `settings.general.experimentalFeatures.chronicle.name`,
      defaultMessage: `Chronicle research preview`,
      description: `Name of the Chronicle experimental feature`,
    });
  (0, rn.useEffect)(() => {
    b && Ye(M.kind) && V(t, o.CHRONICLE_SETUP_COMPLETION_PENDING, !0);
  }, [b, t, M.kind]);
  let P = async ({ rememberConsentAccepted: n, showSetupDialog: i }) => {
      let a = A;
      (D(!0), w(null), y(!1), S(i));
      try {
        (n === !0 && (await V(t, o.CHRONICLE_CONSENT_ACCEPTED, !0)),
          i || V(t, o.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          await d.mutateAsync({ enabled: !0 }),
          e?.(a, !0),
          await l.invalidateQueries({ queryKey: p(`chronicle-permissions`) }));
      } catch (e) {
        let n = nn(e);
        (V(t, o.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
          w(n),
          r.error(`Failed to enable Chronicle`, {
            safe: { errorMessage: n },
            sensitive: { error: e },
          }));
      } finally {
        D(!1);
      }
    },
    F = async () => {
      let n = A;
      (D(!0), w(null), V(t, o.CHRONICLE_SETUP_COMPLETION_PENDING, !1));
      try {
        (await d.mutateAsync({ enabled: !1 }), e?.(n, !1));
      } catch {
      } finally {
        D(!1);
      }
    };
  return _
    ? (0, Z.jsx)(Z.Fragment, {})
    : (0, Z.jsxs)(Z.Fragment, {
        children: [
          (0, Z.jsx)(it, {
            label: N,
            description: (0, Z.jsx)(Kt, {
              isCheckingPermissions: O.data == null && O.isFetching,
              permissions: O.data,
              chronicleFeatureEnabled: A,
              onOpenChronicleSetup: () => {
                (w(null), S(!0));
              },
            }),
            control: (0, Z.jsx)(Oe, {
              disabled: k,
              tooltipContent: (0, Z.jsx)(G, {
                id: `settings.general.experimentalFeatures.chronicle.memoriesRequiredTooltip`,
                defaultMessage: `Enable memories to use Chronicle`,
                description: `Tooltip shown when the Chronicle toggle is disabled because Memories is disabled`,
              }),
              children: (0, Z.jsx)(`span`, {
                className: he(`inline-flex`, !k && `cursor-not-allowed`),
                tabIndex: k ? void 0 : 0,
                children: (0, Z.jsx)(de, {
                  checked: A,
                  className: k ? void 0 : `pointer-events-none`,
                  disabled: te,
                  onChange: (e) => {
                    if (e) {
                      if (f === !0) {
                        P({ showSetupDialog: !1 });
                        return;
                      }
                      y(!0);
                      return;
                    }
                    F();
                  },
                  ariaLabel: i.formatMessage(
                    {
                      id: `settings.general.experimentalFeatures.chronicle.buttonAriaLabel`,
                      defaultMessage: `Toggle {featureName}`,
                      description: `Aria label for toggling the Chronicle experimental feature`,
                    },
                    { featureName: N },
                  ),
                }),
              }),
            }),
          }),
          (0, Z.jsx)(Vt, {
            open: v,
            onOpenChange: y,
            chronicleDisplayName: N,
            isPending: j,
            onContinue: () => {
              P({ rememberConsentAccepted: !0, showSetupDialog: !0 });
            },
          }),
          (0, Z.jsx)(qe, {
            open: b,
            setupState: M,
            onOpenChange: (e) => {
              (e || V(t, o.CHRONICLE_SETUP_COMPLETION_PENDING, !1), S(e));
            },
            onAskCodex: () => {
              (V(t, o.CHRONICLE_SETUP_COMPLETION_PENDING, !1),
                S(!1),
                u({ prefillPrompt: et }));
            },
          }),
        ],
      });
}
function Vt(e) {
  let t = (0, X.c)(37),
    {
      isPending: n,
      open: r,
      chronicleDisplayName: i,
      onContinue: a,
      onOpenChange: o,
    } = e,
    s = ze(),
    c;
  t[0] === i
    ? (c = t[1])
    : ((c = (0, Z.jsx)(P, {
        asChild: !0,
        children: (0, Z.jsx)(`h2`, { className: `sr-only`, children: i }),
      })),
      (t[0] = i),
      (t[1] = c));
  let l;
  t[2] === s
    ? (l = t[3])
    : ((l = s.formatMessage({
        id: `settings.general.experimentalFeatures.chronicle.consentTitle`,
        defaultMessage: `Enable Chronicle research preview`,
        description: `Title for the Chronicle consent dialog`,
      })),
      (t[2] = s),
      (t[3] = l));
  let u;
  t[4] === l
    ? (u = t[5])
    : ((u = (0, Z.jsx)(De, { title: l })), (t[4] = l), (t[5] = u));
  let d;
  t[6] !== c || t[7] !== u
    ? ((d = (0, Z.jsxs)(R, { children: [c, u] })),
      (t[6] = c),
      (t[7] = u),
      (t[8] = d))
    : (d = t[8]);
  let f, p;
  t[9] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(G, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyIntro`,
          defaultMessage: `Chronicle is an experimental feature that augments memories with context from your screen. With Chronicle enabled, Codex references what you’ve seen to provide more helpful, contextual responses to prompts like “finish what I was doing” or “update this dashboard.”`,
          description: `Introductory body copy for the Chronicle consent dialog`,
        }),
      })),
      (p = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(G, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyConsiderations`,
          defaultMessage: `Be mindful of the following considerations before enabling Chronicle:`,
          description: `Body copy before the considerations list in the Chronicle consent dialog`,
        }),
      })),
      (t[9] = f),
      (t[10] = p))
    : ((f = t[9]), (p = t[10]));
  let m;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(G, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyCost`,
          defaultMessage: `<strong>Cost</strong>: Chronicle uses image inputs and runs in the background, which consumes rate limits quickly.`,
          description: `Chronicle consent dialog list item describing rate limit cost`,
          values: { strong: Gt },
        }),
      })),
      (t[11] = m))
    : (m = t[11]);
  let h;
  t[12] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Z.jsx)(`li`, {
        children: (0, Z.jsx)(G, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyPrivacy`,
          defaultMessage: `<strong>Privacy</strong>: Chronicle screen captures can include sensitive information visible on your screen. (It does not have access to your microphone or system audio.) Don’t use Chronicle to record meetings or communications with others without their consent. Pause Chronicle when viewing content you do not want remembered in memories.`,
          description: `Chronicle consent dialog list item describing privacy risk`,
          values: { strong: Wt },
        }),
      })),
      (t[12] = h))
    : (h = t[12]);
  let g, _;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Z.jsxs)(`ul`, {
        className: `list-disc space-y-1 pl-5`,
        children: [
          m,
          h,
          (0, Z.jsx)(`li`, {
            children: (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyPromptInjection`,
              defaultMessage: `<strong>Prompt injection</strong>: Using Chronicle increases risk to prompt injection attacks from screen content. For instance, if you browse a site with malicious agent instructions, Codex may follow those instructions.`,
              description: `Chronicle consent dialog list item describing prompt injection risk`,
              values: { strong: Ut },
            }),
          }),
        ],
      })),
      (g = (0, Z.jsx)(`p`, {
        children: (0, Z.jsx)(G, {
          id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageHeading`,
          defaultMessage: `How it works:`,
          description: `Heading before Chronicle consent dialog details about screen capture processing and storage`,
        }),
      })),
      (t[13] = g),
      (t[14] = _))
    : ((g = t[13]), (_ = t[14]));
  let v;
  t[15] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((v = (0, Z.jsxs)(`ul`, {
        className: `list-disc space-y-1 pl-5`,
        children: [
          (0, Z.jsx)(`li`, {
            children: (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageProcessing`,
              defaultMessage: `To generate memories, the screen captures are processed on our servers and then deleted.`,
              description: `Chronicle consent dialog list item describing server processing for generating memories`,
            }),
          }),
          (0, Z.jsx)(`li`, {
            children: (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyStorageLocal`,
              defaultMessage: `Screen captures are temporarily stored on device, and memories are also stored on device. Both are stored unencrypted, so be aware that other applications on your computer may have access to these files. When Codex uses memories in a chat, they may be used to improve our models, if allowed in your ChatGPT settings.`,
              description: `Chronicle consent dialog list item describing local screen capture and memory storage`,
            }),
          }),
        ],
      })),
      (t[15] = v))
    : (v = t[15]);
  let y;
  t[16] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Z.jsxs)(R, {
        className: `min-h-0 flex-1 space-y-3 overflow-y-auto pr-1 text-token-foreground/70`,
        children: [
          f,
          p,
          _,
          g,
          v,
          (0, Z.jsx)(`p`, {
            children: (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.consentBodyDisableIntro`,
              defaultMessage: `You can disable Chronicle at any time, which will stop screen captures going forward. <link>Learn more.</link>`,
              description: `Closing body copy in the Chronicle consent dialog`,
              values: { link: Ht },
            }),
          }),
        ],
      })),
      (t[16] = y))
    : (y = t[16]);
  let b;
  t[17] === o
    ? (b = t[18])
    : ((b = () => {
        o(!1);
      }),
      (t[17] = o),
      (t[18] = b));
  let x;
  t[19] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((x = (0, Z.jsx)(G, {
        id: `settings.general.experimentalFeatures.chronicle.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for the Chronicle consent dialog`,
      })),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== n || t[21] !== b
    ? ((S = (0, Z.jsx)(ne, {
        color: `ghost`,
        disabled: n,
        onClick: b,
        children: x,
      })),
      (t[20] = n),
      (t[21] = b),
      (t[22] = S))
    : (S = t[22]);
  let C;
  t[23] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((C = (0, Z.jsx)(G, {
        id: `settings.general.experimentalFeatures.chronicle.continue`,
        defaultMessage: `Continue`,
        description: `Continue button label for the Chronicle consent dialog`,
      })),
      (t[23] = C))
    : (C = t[23]);
  let w;
  t[24] !== n || t[25] !== a
    ? ((w = (0, Z.jsx)(ne, {
        color: `primary`,
        loading: n,
        onClick: a,
        children: C,
      })),
      (t[24] = n),
      (t[25] = a),
      (t[26] = w))
    : (w = t[26]);
  let T;
  t[27] !== S || t[28] !== w
    ? ((T = (0, Z.jsx)(R, {
        children: (0, Z.jsxs)(we, { className: ce, children: [S, w] }),
      })),
      (t[27] = S),
      (t[28] = w),
      (t[29] = T))
    : (T = t[29]);
  let E;
  t[30] !== T || t[31] !== d
    ? ((E = (0, Z.jsxs)(re, {
        className: `max-h-[calc(100vh-6rem)] min-h-0`,
        children: [d, y, T],
      })),
      (t[30] = T),
      (t[31] = d),
      (t[32] = E))
    : (E = t[32]);
  let D;
  return (
    t[33] !== o || t[34] !== r || t[35] !== E
      ? ((D = (0, Z.jsx)(Te, {
          open: r,
          onOpenChange: o,
          size: `default`,
          children: E,
        })),
        (t[33] = o),
        (t[34] = r),
        (t[35] = E),
        (t[36] = D))
      : (D = t[36]),
    D
  );
}
function Ht(e) {
  return (0, Z.jsx)(`a`, {
    className: `text-token-link`,
    href: `https://developers.openai.com/codex/memories/chronicle`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function Ut(e) {
  return (0, Z.jsx)(`span`, {
    className: `font-bold text-token-foreground/90`,
    children: e,
  });
}
function Wt(e) {
  return (0, Z.jsx)(`span`, {
    className: `font-bold text-token-foreground/90`,
    children: e,
  });
}
function Gt(e) {
  return (0, Z.jsx)(`span`, {
    className: `font-bold text-token-foreground/90`,
    children: e,
  });
}
function Kt(e) {
  let t = (0, X.c)(11),
    {
      isCheckingPermissions: n,
      onOpenChronicleSetup: r,
      permissions: i,
      chronicleFeatureEnabled: a,
    } = e,
    o = i?.accessibility === `granted` && i.screenRecording === `granted`,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Z.jsx)(`span`, {
        children: (0, Z.jsx)(G, {
          id: `settings.general.experimentalFeatures.chronicle.description`,
          defaultMessage: `Augment memories with screen context so Codex can help with anything you’re working on. <link>Learn more</link>`,
          description: `Description for the Chronicle experimental feature`,
          values: { link: qt },
        }),
      })),
      (t[0] = s))
    : (s = t[0]);
  let c;
  t[1] !== a ||
  t[2] !== n ||
  t[3] !== r ||
  t[4] !== i?.accessibility ||
  t[5] !== i?.chronicleSidecarProcessState ||
  t[6] !== i?.screenRecording ||
  t[7] !== o
    ? ((c = a
        ? (0, Z.jsx)(`span`, {
            className: `flex flex-wrap gap-x-3 gap-y-1 text-xs`,
            children: (0, Z.jsx)(Jt, {
              accessibilityStatus: i?.accessibility,
              isChecking: n,
              processState: i?.chronicleSidecarProcessState,
              requiredPermissionsGranted: o,
              screenRecordingStatus: i?.screenRecording,
              onOpenChronicleSetup: r,
            }),
          })
        : null),
      (t[1] = a),
      (t[2] = n),
      (t[3] = r),
      (t[4] = i?.accessibility),
      (t[5] = i?.chronicleSidecarProcessState),
      (t[6] = i?.screenRecording),
      (t[7] = o),
      (t[8] = c))
    : (c = t[8]);
  let l;
  return (
    t[9] === c
      ? (l = t[10])
      : ((l = (0, Z.jsxs)(`span`, {
          className: `flex min-w-0 flex-col gap-1.5`,
          children: [s, c],
        })),
        (t[9] = c),
        (t[10] = l)),
    l
  );
}
function qt(e) {
  return (0, Z.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: `https://developers.openai.com/codex/memories/chronicle`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function Jt(e) {
  let t = (0, X.c)(22),
    {
      accessibilityStatus: n,
      isChecking: r,
      onOpenChronicleSetup: i,
      processState: a,
      requiredPermissionsGranted: o,
      screenRecordingStatus: s,
    } = e,
    c;
  t[0] !== n || t[1] !== s
    ? ((c = tn({ accessibilityStatus: n, screenRecordingStatus: s })),
      (t[0] = n),
      (t[1] = s),
      (t[2] = c))
    : (c = t[2]);
  let l = c;
  if (!r && l != null) {
    let e;
    return (
      t[3] !== l || t[4] !== i
        ? ((e = (0, Z.jsx)(Yt, { permission: l, onOpenChronicleSetup: i })),
          (t[3] = l),
          (t[4] = i),
          (t[5] = e))
        : (e = t[5]),
      e
    );
  }
  if (!r && s === `granted`) {
    let e =
        a === `running` && o
          ? `font-medium text-token-charts-green`
          : `font-medium text-token-description-foreground`,
      s;
    t[6] === a
      ? (s = t[7])
      : ((s = (0, Z.jsx)(Qt, { processState: a })), (t[6] = a), (t[7] = s));
    let c;
    t[8] !== e || t[9] !== s
      ? ((c = (0, Z.jsx)(G, {
          id: `settings.general.experimentalFeatures.chronicle.permission.runningStatus`,
          defaultMessage: `Status: {status}`,
          description: `Status shown when Chronicle has Screen Recording permission`,
          values: { status: (0, Z.jsx)(`span`, { className: e, children: s }) },
        })),
        (t[8] = e),
        (t[9] = s),
        (t[10] = c))
      : (c = t[10]);
    let l;
    t[11] !== n || t[12] !== r || t[13] !== i
      ? ((l =
          n === `granted`
            ? null
            : (0, Z.jsxs)(Z.Fragment, {
                children: [
                  `; `,
                  (0, Z.jsx)(`button`, {
                    className: `inline-flex min-w-0 cursor-interaction border-0 bg-transparent p-0 whitespace-nowrap underline-offset-2 hover:underline`,
                    onClick: i,
                    type: `button`,
                    children: (0, Z.jsx)(G, {
                      id: `settings.general.experimentalFeatures.chronicle.permission.runningStatusAccessibility`,
                      defaultMessage: `Accessibility: {status} (open setup)`,
                      description: `Linked Accessibility status shown when Chronicle has Screen Recording permission but Accessibility is not granted`,
                      values: {
                        status: (0, Z.jsx)(`span`, {
                          className: he(
                            `font-medium`,
                            en({ isChecking: r, status: n }),
                          ),
                          children: (0, Z.jsx)($t, {
                            isChecking: r,
                            status: n,
                          }),
                        }),
                      },
                    }),
                  }),
                ],
              })),
        (t[11] = n),
        (t[12] = r),
        (t[13] = i),
        (t[14] = l))
      : (l = t[14]);
    let u;
    return (
      t[15] !== c || t[16] !== l
        ? ((u = (0, Z.jsx)(`span`, {
            className: `inline-flex min-w-0 whitespace-nowrap`,
            children: (0, Z.jsxs)(`span`, {
              className: `min-w-0 truncate`,
              children: [c, l],
            }),
          })),
          (t[15] = c),
          (t[16] = l),
          (t[17] = u))
        : (u = t[17]),
      u
    );
  }
  let u;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((u = (0, Z.jsx)(G, {
        id: `settings.general.experimentalFeatures.chronicle.permission.screenRecording`,
        defaultMessage: `Screen Recording`,
        description: `Label for the macOS Screen Recording permission status`,
      })),
      (t[18] = u))
    : (u = t[18]);
  let d;
  return (
    t[19] !== r || t[20] !== s
      ? ((d = (0, Z.jsx)(Zt, { isChecking: r, label: u, status: s })),
        (t[19] = r),
        (t[20] = s),
        (t[21] = d))
      : (d = t[21]),
    d
  );
}
function Yt(e) {
  let t = (0, X.c)(8),
    { onOpenChronicleSetup: n, permission: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Z.jsx)(Xt, { permission: r })), (t[0] = r), (t[1] = i));
  let a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, Z.jsx)(`span`, {
        className: `font-medium`,
        children: (0, Z.jsx)(G, {
          id: `settings.general.experimentalFeatures.chronicle.permission.statusLabel`,
          defaultMessage: `Status`,
          description: `Label preceding the Chronicle status value`,
        }),
      })),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] === i
    ? (o = t[4])
    : ((o = (0, Z.jsx)(`span`, {
        className: `min-w-0 truncate`,
        children: (0, Z.jsx)(G, {
          id: `settings.general.experimentalFeatures.chronicle.permission.notGranted`,
          defaultMessage: `{statusLabel}: {permission} permission not granted (open setup)`,
          description: `Linked status shown when Chronicle does not have a required macOS permission`,
          values: { permission: i, statusLabel: a },
        }),
      })),
      (t[3] = i),
      (t[4] = o));
  let s;
  return (
    t[5] !== n || t[6] !== o
      ? ((s = (0, Z.jsx)(`button`, {
          className: `inline-flex min-w-0 cursor-interaction border-0 bg-transparent p-0 whitespace-nowrap text-token-error-foreground underline-offset-2 hover:underline`,
          onClick: n,
          type: `button`,
          children: o,
        })),
        (t[5] = n),
        (t[6] = o),
        (t[7] = s))
      : (s = t[7]),
    s
  );
}
function Xt(e) {
  let t = (0, X.c)(2),
    { permission: n } = e;
  switch (n) {
    case `accessibility`: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permission.accessibility`,
              defaultMessage: `Accessibility`,
              description: `Label for the macOS Accessibility permission status`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `screen-recording`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permission.screenRecording`,
              defaultMessage: `Screen Recording`,
              description: `Label for the macOS Screen Recording permission status`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
  }
}
function Zt(e) {
  let t = (0, X.c)(12),
    { isChecking: n, label: r, status: i } = e,
    a;
  t[0] !== n || t[1] !== i
    ? ((a = he(`font-medium`, en({ isChecking: n, status: i }))),
      (t[0] = n),
      (t[1] = i),
      (t[2] = a))
    : (a = t[2]);
  let o;
  t[3] !== n || t[4] !== i
    ? ((o = (0, Z.jsx)($t, { isChecking: n, status: i })),
      (t[3] = n),
      (t[4] = i),
      (t[5] = o))
    : (o = t[5]);
  let s;
  t[6] !== a || t[7] !== o
    ? ((s = (0, Z.jsx)(`span`, { className: a, children: o })),
      (t[6] = a),
      (t[7] = o),
      (t[8] = s))
    : (s = t[8]);
  let c;
  return (
    t[9] !== r || t[10] !== s
      ? ((c = (0, Z.jsx)(`span`, {
          className: `inline-flex min-w-0 whitespace-nowrap`,
          children: (0, Z.jsx)(`span`, {
            className: `min-w-0 truncate`,
            children: (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permission.status`,
              defaultMessage: `{permission}: {status}`,
              description: `Permission label and status for Chronicle`,
              values: { permission: r, status: s },
            }),
          }),
        })),
        (t[9] = r),
        (t[10] = s),
        (t[11] = c))
      : (c = t[11]),
    c
  );
}
function Qt(e) {
  let t = (0, X.c)(4),
    { processState: n } = e;
  switch (n) {
    case `disabled`:
    case `stopped`:
    case void 0: {
      let e;
      return (
        t[0] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.paused`,
              defaultMessage: `Paused`,
              description: `Chronicle status when the sidecar process is not running`,
            })),
            (t[0] = e))
          : (e = t[0]),
        e
      );
    }
    case `restarting`:
    case `starting`: {
      let e;
      return (
        t[1] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.starting`,
              defaultMessage: `Starting`,
              description: `Chronicle status when the sidecar process is starting`,
            })),
            (t[1] = e))
          : (e = t[1]),
        e
      );
    }
    case `stopping`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.stopping`,
              defaultMessage: `Stopping`,
              description: `Chronicle status when the sidecar process is stopping`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `running`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.running`,
              defaultMessage: `Running`,
              description: `Chronicle status when the sidecar process is running`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
  }
}
function $t(e) {
  let t = (0, X.c)(7),
    { isChecking: n, status: r } = e;
  if (n) {
    let e;
    return (
      t[0] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = (0, Z.jsx)(G, {
            id: `settings.general.experimentalFeatures.chronicle.permissionStatus.checking`,
            defaultMessage: `Checking`,
            description: `Chronicle permission status while checking native state`,
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
        ? ((e = (0, Z.jsx)(G, {
            id: `settings.general.experimentalFeatures.chronicle.permissionStatus.unknown`,
            defaultMessage: `Unknown`,
            description: `Chronicle permission status when native state cannot be read`,
          })),
          (t[1] = e))
        : (e = t[1]),
      e
    );
  }
  switch (r) {
    case `granted`: {
      let e;
      return (
        t[2] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.granted`,
              defaultMessage: `Granted`,
              description: `Chronicle permission status when granted`,
            })),
            (t[2] = e))
          : (e = t[2]),
        e
      );
    }
    case `not-determined`: {
      let e;
      return (
        t[3] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.notDetermined`,
              defaultMessage: `Not requested`,
              description: `Chronicle permission status before the user has been prompted`,
            })),
            (t[3] = e))
          : (e = t[3]),
        e
      );
    }
    case `denied`: {
      let e;
      return (
        t[4] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.denied`,
              defaultMessage: `Denied`,
              description: `Chronicle permission status when denied`,
            })),
            (t[4] = e))
          : (e = t[4]),
        e
      );
    }
    case `restricted`: {
      let e;
      return (
        t[5] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.restricted`,
              defaultMessage: `Restricted`,
              description: `Chronicle permission status when blocked by policy`,
            })),
            (t[5] = e))
          : (e = t[5]),
        e
      );
    }
    case `unknown`: {
      let e;
      return (
        t[6] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Z.jsx)(G, {
              id: `settings.general.experimentalFeatures.chronicle.permissionStatus.unknown`,
              defaultMessage: `Unknown`,
              description: `Chronicle permission status when native state cannot be read`,
            })),
            (t[6] = e))
          : (e = t[6]),
        e
      );
    }
  }
}
function en({ isChecking: e, status: t }) {
  if (e || t == null) return `text-token-description-foreground`;
  switch (t) {
    case `granted`:
      return `text-token-charts-green`;
    case `denied`:
    case `restricted`:
      return `text-token-charts-red`;
    case `not-determined`:
    case `unknown`:
      return `text-token-description-foreground`;
  }
}
function tn({ accessibilityStatus: e, screenRecordingStatus: t }) {
  return t === `denied`
    ? `screen-recording`
    : t === `granted` && e === `denied`
      ? `accessibility`
      : null;
}
function nn(e) {
  return e instanceof Error ? e.message : `Failed to enable Chronicle`;
}
var X,
  rn,
  Z,
  an = e(() => {
    ((X = _()),
      n(),
      ue(),
      d(),
      l(),
      (rn = t(f(), 1)),
      H(),
      Fe(),
      N(),
      M(),
      j(),
      A(),
      Ee(),
      je(),
      F(),
      _t(),
      K(),
      i(),
      at(),
      u(),
      m(),
      zt(),
      ae(),
      Je(),
      Ke(),
      (Z = S()));
  });
function on({
  chronicleResearchPreviewEnabled: e,
  chronicleResearchPreviewVisible: t,
  isMemoryFeatureEnabled: n,
  memoryConfig: r,
}) {
  return {
    chronicleResearchPreviewEnabled: e,
    chronicleResearchPreviewVisible: t,
    ...Ge({ isMemoryFeatureEnabled: n, memoryConfig: r }),
    skipToolAssistedChatsEnabled: r.disableOnExternalContext,
  };
}
function sn(
  e,
  {
    chronicleResearchPreviewEnabled: t,
    isMemoryFeatureEnabled: n,
    memoryConfigPatch: r,
  } = {},
) {
  return on({
    chronicleResearchPreviewEnabled: t ?? e.chronicleResearchPreviewEnabled,
    chronicleResearchPreviewVisible: e.chronicleResearchPreviewVisible,
    isMemoryFeatureEnabled: n ?? e.isMemoryFeatureEnabled,
    memoryConfig: { ...e.memoryConfig, ...r },
  });
}
function cn({
  productLogger: e,
  previousEnabled: t,
  selectedEnabled: n,
  settingName: r,
  state: i,
}) {
  e.logProductEvent(He, {
    settingName: r,
    previousEnabled: t,
    selectedEnabled: n,
    ...i,
  });
}
async function ln({ productLogger: e, write: t, ...n }) {
  try {
    await t();
  } catch {
    return;
  }
  cn({ productLogger: e, ...n });
}
async function un({
  productLogger: e,
  previousState: t,
  selectedEnabled: n,
  featureWrite: r,
  configWrite: i,
  chronicleDisable: a,
}) {
  let [o, s, c] = await Promise.allSettled([
      r(),
      i(),
      a?.() ?? Promise.resolve(),
    ]),
    l = o.status === `fulfilled` ? n : t.memoryFeatureEnabled,
    u = s.status === `fulfilled` ? n : t.generateMemoriesEnabled,
    d = s.status === `fulfilled` ? n : t.useMemoriesEnabled,
    f = {
      ...t,
      chronicleResearchPreviewEnabled:
        a != null && c.status === `fulfilled`
          ? !1
          : t.chronicleResearchPreviewEnabled,
      memoryFeatureEnabled: l,
      generateMemoriesEnabled: u,
      useMemoriesEnabled: d,
      memoriesEnabled: l && u && d,
    };
  f.memoriesEnabled !== t.memoriesEnabled &&
    cn({
      productLogger: e,
      previousEnabled: t.memoriesEnabled,
      selectedEnabled: n,
      settingName: `memories`,
      state: f,
    });
}
var dn = e(() => {
  (Ue(), Qe());
});
function fn() {
  let e = (0, hn.c)(98),
    t = c(a),
    n = ze(),
    r = T(Ne),
    { selectedHostId: i } = st(),
    o = ke(i),
    [l, u] = (0, gn.useState)(!1),
    d = Xe(),
    { data: f } = s(tt, i),
    { data: p, isLoading: m } = s(xe, i),
    h;
  e[0] === p
    ? (h = e[1])
    : ((h = p === void 0 ? [] : p), (e[0] = p), (e[1] = h));
  let g = h,
    _;
  e[2] === d
    ? (_ = e[3])
    : ((_ = {
        queryConfig: {
          enabled: d,
          refetchOnMount: `always`,
          refetchOnWindowFocus: !0,
        },
      }),
      (e[2] = d),
      (e[3] = _));
  let { data: v } = x(`chronicle-permissions`, _),
    y = Dt(i),
    b;
  e[4] === i ? (b = e[5]) : ((b = { hostId: i }), (e[4] = i), (e[5] = b));
  let S = pe(b),
    C = Ve(`875176429`),
    w = Nt(),
    E;
  e[6] === i
    ? (E = e[7])
    : ((E = () => We(`reset-memories-for-host`, { hostId: i })),
      (e[6] = i),
      (e[7] = E));
  let O, k;
  e[8] === t
    ? ((O = e[9]), (k = e[10]))
    : ((O = () => {
        (u(!1),
          t.get(le).success(
            (0, Q.jsx)(G, {
              id: `settings.memory.resetSuccess`,
              defaultMessage: `Memories reset`,
              description: `Toast shown after resetting memories`,
            }),
          ));
      }),
      (k = () => {
        t.get(le).danger(
          (0, Q.jsx)(G, {
            id: `settings.memory.resetError`,
            defaultMessage: `Unable to reset memories`,
            description: `Toast shown when resetting memories fails`,
          }),
        );
      }),
      (e[8] = t),
      (e[9] = O),
      (e[10] = k));
  let A;
  e[11] !== E || e[12] !== O || e[13] !== k
    ? ((A = { mutationFn: E, onSuccess: O, onError: k }),
      (e[11] = E),
      (e[12] = O),
      (e[13] = k),
      (e[14] = A))
    : (A = e[14]);
  let j = D(A),
    te = ge(g, C),
    M;
  e[15] === g ? (M = e[16]) : ((M = g.find(mn)), (e[15] = g), (e[16] = M));
  let N = M?.enabled === !0,
    P = f?.config,
    F;
  e[17] === P ? (F = e[18]) : ((F = Re(P)), (e[17] = P), (e[18] = F));
  let I = F,
    L = f?.config,
    ie;
  e[19] === L ? (ie = e[20]) : ((ie = ee(L, Se)), (e[19] = L), (e[20] = ie));
  let ae = ie === !0,
    oe = m || y.isPending || S.isPending || w.isPending || j.isPending,
    ce = N && I.generateMemories && I.useMemories,
    ue = o.kind === `local`,
    fe = ue && d && v?.chronicleSidecarPresent === !0,
    me;
  e[21] !== ae || e[22] !== N || e[23] !== I || e[24] !== fe
    ? ((me = {
        chronicleResearchPreviewEnabled: ae,
        chronicleResearchPreviewVisible: fe,
        isMemoryFeatureEnabled: N,
        memoryConfig: I,
      }),
      (e[21] = ae),
      (e[22] = N),
      (e[23] = I),
      (e[24] = fe),
      (e[25] = me))
    : (me = e[25]);
  let he = me;
  if (!te) return null;
  let _e;
  e[26] === he
    ? (_e = e[27])
    : ((_e = (e) => {
        let {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        } = e === void 0 ? {} : e;
        return sn(he, {
          chronicleResearchPreviewEnabled: t,
          isMemoryFeatureEnabled: n,
          memoryConfigPatch: r,
        });
      }),
      (e[26] = he),
      (e[27] = _e));
  let z = _e,
    ve;
  e[28] !== y ||
  e[29] !== w ||
  e[30] !== z ||
  e[31] !== ue ||
  e[32] !== r ||
  e[33] !== S
    ? ((ve = (e) => {
        un({
          productLogger: r,
          previousState: z(),
          selectedEnabled: e,
          featureWrite: () => S.mutateAsync({ featureName: se, enabled: e }),
          configWrite: () =>
            y.mutateAsync({
              edits: [
                { keyPath: `memories.generate_memories`, value: e },
                { keyPath: `memories.use_memories`, value: e },
              ],
            }),
          ...(!e && ue
            ? { chronicleDisable: () => w.mutateAsync({ enabled: !1 }) }
            : {}),
        });
      }),
      (e[28] = y),
      (e[29] = w),
      (e[30] = z),
      (e[31] = ue),
      (e[32] = r),
      (e[33] = S),
      (e[34] = ve))
    : (ve = e[34]);
  let ye = ve,
    be;
  e[35] === j
    ? (be = e[36])
    : ((be = async () => {
        await j.mutateAsync();
      }),
      (e[35] = j),
      (e[36] = be));
  let Ce = be,
    Ee;
  e[37] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ee = (0, Q.jsx)(G, { ...Y.memory })), (e[37] = Ee))
    : (Ee = e[37]);
  let Oe;
  e[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Oe = (0, Q.jsx)(yt.Header, {
        title: Ee,
        subtitle: (0, Q.jsx)(G, {
          id: `settings.personalization.memory.subtitle`,
          defaultMessage: `Configure how Codex collects, retains, and consolidates memories. <a>Learn more</a>`,
          description: `Description for memory settings in personalization`,
          values: { a: pn },
        }),
      })),
      (e[38] = Oe))
    : (Oe = e[38]);
  let Ae, je;
  e[39] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ae = (0, Q.jsx)(G, { ...Y.enableMemories })),
      (je = (0, Q.jsx)(G, {
        id: `settings.memory.enableMemoriesDescription`,
        defaultMessage: `Generate new memories from chats and bring them into new chats`,
        description: `Description for enabling memories`,
      })),
      (e[39] = Ae),
      (e[40] = je))
    : ((Ae = e[39]), (je = e[40]));
  let Me;
  e[41] === n
    ? (Me = e[42])
    : ((Me = n.formatMessage({
        id: `settings.memory.enableMemoriesAriaLabel`,
        defaultMessage: `Enable memories`,
        description: `Accessible label for enabling memories`,
      })),
      (e[41] = n),
      (e[42] = Me));
  let B;
  e[43] !== oe || e[44] !== ce || e[45] !== ye || e[46] !== Me
    ? ((B = (0, Q.jsx)(it, {
        label: Ae,
        description: je,
        control: (0, Q.jsx)(de, {
          checked: ce,
          disabled: oe,
          ariaLabel: Me,
          onChange: ye,
        }),
      })),
      (e[43] = oe),
      (e[44] = ce),
      (e[45] = ye),
      (e[46] = Me),
      (e[47] = B))
    : (B = e[47]);
  let Pe;
  e[48] !== z || e[49] !== r || e[50] !== fe
    ? ((Pe = fe
        ? (0, Q.jsx)(Bt, {
            onChronicleResearchPreviewToggled: (e, t) => {
              cn({
                productLogger: r,
                previousEnabled: e,
                selectedEnabled: t,
                settingName: `chronicle_research_preview`,
                state: z({ chronicleResearchPreviewEnabled: t }),
              });
            },
          })
        : null),
      (e[48] = z),
      (e[49] = r),
      (e[50] = fe),
      (e[51] = Pe))
    : (Pe = e[51]);
  let V, H;
  e[52] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((V = (0, Q.jsx)(G, { ...Y.skipToolAssistedChats })),
      (H = (0, Q.jsx)(G, {
        id: `settings.memory.noToolContextDescription`,
        defaultMessage: `Do not generate memories from chats that used MCP tools or web search`,
        description: `Description for disabling memory generation when MCP or web search is used`,
      })),
      (e[52] = V),
      (e[53] = H))
    : ((V = e[52]), (H = e[53]));
  let Fe = I.disableOnExternalContext,
    Ie = oe || !N,
    Le;
  e[54] === n
    ? (Le = e[55])
    : ((Le = n.formatMessage({
        id: `settings.memory.noToolContextAriaLabel`,
        defaultMessage: `Skip tool-assisted chats`,
        description: `Accessible label for disabling memory generation when MCP or web search is used`,
      })),
      (e[54] = n),
      (e[55] = Le));
  let U;
  e[56] !== y ||
  e[57] !== z ||
  e[58] !== I.disableOnExternalContext ||
  e[59] !== r
    ? ((U = (e) => {
        ln({
          productLogger: r,
          previousEnabled: I.disableOnExternalContext,
          selectedEnabled: e,
          settingName: `skip_tool_assisted_chats`,
          state: z({ memoryConfigPatch: { disableOnExternalContext: e } }),
          write: () =>
            y.mutateAsync({
              edits: [
                { keyPath: `memories.disable_on_external_context`, value: e },
                {
                  keyPath: `memories.no_memories_if_mcp_or_web_search`,
                  value: null,
                },
              ],
            }),
        });
      }),
      (e[56] = y),
      (e[57] = z),
      (e[58] = I.disableOnExternalContext),
      (e[59] = r),
      (e[60] = U))
    : (U = e[60]);
  let W;
  e[61] !== I.disableOnExternalContext ||
  e[62] !== Ie ||
  e[63] !== Le ||
  e[64] !== U
    ? ((W = (0, Q.jsx)(it, {
        label: V,
        description: H,
        control: (0, Q.jsx)(de, {
          checked: Fe,
          disabled: Ie,
          ariaLabel: Le,
          onChange: U,
        }),
      })),
      (e[61] = I.disableOnExternalContext),
      (e[62] = Ie),
      (e[63] = Le),
      (e[64] = U),
      (e[65] = W))
    : (W = e[65]);
  let He, Ue;
  e[66] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((He = (0, Q.jsx)(G, { ...Y.resetMemories })),
      (Ue = (0, Q.jsx)(G, {
        id: `settings.memory.resetMemoriesDescription`,
        defaultMessage: `Delete all Codex memories`,
        description: `Description for resetting memories`,
      })),
      (e[66] = He),
      (e[67] = Ue))
    : ((He = e[66]), (Ue = e[67]));
  let Ge, Ke;
  e[68] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ge = () => {
        u(!0);
      }),
      (Ke = (0, Q.jsx)(G, {
        id: `settings.memory.resetMemoriesButton`,
        defaultMessage: `Reset`,
        description: `Button label for resetting memories`,
      })),
      (e[68] = Ge),
      (e[69] = Ke))
    : ((Ge = e[68]), (Ke = e[69]));
  let qe;
  e[70] === j.isPending
    ? (qe = e[71])
    : ((qe = (0, Q.jsx)(it, {
        label: He,
        description: Ue,
        control: (0, Q.jsx)(ne, {
          color: `danger`,
          disabled: j.isPending,
          loading: j.isPending,
          onClick: Ge,
          children: Ke,
        }),
      })),
      (e[70] = j.isPending),
      (e[71] = qe));
  let Je;
  e[72] !== B || e[73] !== Pe || e[74] !== W || e[75] !== qe
    ? ((Je = (0, Q.jsxs)(yt, {
        className: `gap-2`,
        children: [
          Oe,
          (0, Q.jsx)(yt.Content, {
            children: (0, Q.jsxs)(xt, { children: [B, Pe, W, qe] }),
          }),
        ],
      })),
      (e[72] = B),
      (e[73] = Pe),
      (e[74] = W),
      (e[75] = qe),
      (e[76] = Je))
    : (Je = e[76]);
  let Ye;
  e[77] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ye = (0, Q.jsx)(R, {
        children: (0, Q.jsx)(De, {
          title: (0, Q.jsx)(G, {
            id: `settings.memory.resetDialogTitle`,
            defaultMessage: `Reset all memories?`,
            description: `Title for reset memories confirmation dialog`,
          }),
          subtitle: (0, Q.jsx)(G, {
            id: `settings.memory.resetDialogSubtitle`,
            defaultMessage: `This deletes all Codex memories.`,
            description: `Subtitle for reset memories confirmation dialog`,
          }),
        }),
      })),
      (e[77] = Ye))
    : (Ye = e[77]);
  let Ze, Qe;
  e[78] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((Ze = () => {
        u(!1);
      }),
      (Qe = (0, Q.jsx)(G, {
        id: `settings.memory.resetDialogCancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for reset memories dialog`,
      })),
      (e[78] = Ze),
      (e[79] = Qe))
    : ((Ze = e[78]), (Qe = e[79]));
  let $e;
  e[80] === j.isPending
    ? ($e = e[81])
    : (($e = (0, Q.jsx)(ne, {
        color: `ghost`,
        disabled: j.isPending,
        onClick: Ze,
        children: Qe,
      })),
      (e[80] = j.isPending),
      (e[81] = $e));
  let et;
  e[82] !== Ce || e[83] !== r
    ? ((et = () => {
        (r.logProductEvent(Be, { resetScope: `all_memories` }), Ce());
      }),
      (e[82] = Ce),
      (e[83] = r),
      (e[84] = et))
    : (et = e[84]);
  let K;
  e[85] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((K = (0, Q.jsx)(G, {
        id: `settings.memory.resetDialogConfirm`,
        defaultMessage: `Reset`,
        description: `Confirm button label for reset memories dialog`,
      })),
      (e[85] = K))
    : (K = e[85]);
  let q;
  e[86] !== j.isPending || e[87] !== et
    ? ((q = (0, Q.jsx)(ne, {
        color: `danger`,
        loading: j.isPending,
        onClick: et,
        children: K,
      })),
      (e[86] = j.isPending),
      (e[87] = et),
      (e[88] = q))
    : (q = e[88]);
  let nt;
  e[89] !== $e || e[90] !== q
    ? ((nt = (0, Q.jsxs)(re, {
        children: [
          Ye,
          (0, Q.jsx)(R, { children: (0, Q.jsxs)(we, { children: [$e, q] }) }),
        ],
      })),
      (e[89] = $e),
      (e[90] = q),
      (e[91] = nt))
    : (nt = e[91]);
  let J;
  e[92] !== l || e[93] !== nt
    ? ((J = (0, Q.jsx)(Te, {
        open: l,
        onOpenChange: u,
        size: `compact`,
        children: nt,
      })),
      (e[92] = l),
      (e[93] = nt),
      (e[94] = J))
    : (J = e[94]);
  let rt;
  return (
    e[95] !== Je || e[96] !== J
      ? ((rt = (0, Q.jsxs)(Q.Fragment, { children: [Je, J] })),
        (e[95] = Je),
        (e[96] = J),
        (e[97] = rt))
      : (rt = e[97]),
    rt
  );
}
function pn(e) {
  return (0, Q.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: `https://developers.openai.com/codex/memories`,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
function mn(e) {
  return e.name === se;
}
var hn,
  gn,
  Q,
  _n = e(() => {
    ((hn = _()),
      Ue(),
      n(),
      d(),
      l(),
      (gn = t(f(), 1)),
      H(),
      W(),
      N(),
      M(),
      j(),
      _e(),
      A(),
      Ze(),
      B(),
      Mt(),
      ye(),
      Le(),
      K(),
      ie(),
      i(),
      Et(),
      bt(),
      rt(),
      at(),
      vt(),
      Ie(),
      U(),
      m(),
      zt(),
      an(),
      ae(),
      dn(),
      (Q = S()));
  });
function vn() {
  let e = (0, xn.c)(35),
    t = ze(),
    n = Ve(`1444479692`),
    { selectedHostId: r } = st(),
    i;
  e[0] === r ? (i = e[1]) : ((i = { hostId: r }), (e[0] = r), (e[1] = i));
  let { personality: a, setPersonality: o } = dt(i),
    s;
  e[2] === t
    ? (s = e[3])
    : ((s = t.formatMessage(Y.friendly)), (e[2] = t), (e[3] = s));
  let c;
  e[4] === t
    ? (c = e[5])
    : ((c = t.formatMessage({
        id: `composer.personalitySlashCommand.description.friendly`,
        defaultMessage: `Warm, collaborative, and helpful`,
        description: `Description for the friendly personality option`,
      })),
      (e[4] = t),
      (e[5] = c));
  let l;
  e[6] !== s || e[7] !== c
    ? ((l = { value: `friendly`, label: s, description: c }),
      (e[6] = s),
      (e[7] = c),
      (e[8] = l))
    : (l = e[8]);
  let u;
  e[9] === t
    ? (u = e[10])
    : ((u = t.formatMessage(Y.pragmatic)), (e[9] = t), (e[10] = u));
  let d;
  e[11] === t
    ? (d = e[12])
    : ((d = t.formatMessage({
        id: `composer.personalitySlashCommand.description.pragmatic`,
        defaultMessage: `Concise, task-focused, and direct`,
        description: `Description for the pragmatic personality option`,
      })),
      (e[11] = t),
      (e[12] = d));
  let f;
  e[13] !== u || e[14] !== d
    ? ((f = { value: `pragmatic`, label: u, description: d }),
      (e[13] = u),
      (e[14] = d),
      (e[15] = f))
    : (f = e[15]);
  let p;
  e[16] !== l || e[17] !== f
    ? ((p = [l, f]), (e[16] = l), (e[17] = f), (e[18] = p))
    : (p = e[18]);
  let m = p,
    h;
  e[19] !== a || e[20] !== m
    ? ((h = m.find((e) => e.value === a) ?? m[0]),
      (e[19] = a),
      (e[20] = m),
      (e[21] = h))
    : (h = e[21]);
  let g = h,
    _;
  e[22] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, $.jsx)(ht, { slug: `personalization` })), (e[22] = _))
    : (_ = e[22]);
  let v;
  e[23] !== n || e[24] !== a || e[25] !== m || e[26] !== g || e[27] !== o
    ? ((v = n
        ? (0, $.jsx)(yt, {
            children: (0, $.jsx)(yt.Content, {
              children: (0, $.jsx)(xt, {
                children: (0, $.jsx)(it, {
                  label: (0, $.jsx)(G, { ...Y.personality }),
                  description: (0, $.jsx)(G, {
                    id: `settings.personalization.personality.description`,
                    defaultMessage: `Choose a default tone for Codex responses`,
                    description: `Description for personality selection in personalization settings`,
                  }),
                  control: (0, $.jsx)(oe, {
                    triggerButton: (0, $.jsx)(pt, {
                      children: (0, $.jsx)(`span`, {
                        className: `flex items-center gap-1.5`,
                        children: g.label,
                      }),
                    }),
                    align: `end`,
                    children: (0, $.jsx)(`div`, {
                      className: `w-[260px] max-w-xs space-y-1`,
                      children: m.map((e) =>
                        (0, $.jsx)(
                          z.Item,
                          {
                            onSelect: () => {
                              o(e.value);
                            },
                            RightIcon: a === e.value ? L : void 0,
                            children: (0, $.jsxs)(`div`, {
                              className: `flex flex-col items-start gap-0.5`,
                              children: [
                                (0, $.jsx)(`span`, {
                                  className: `text-sm`,
                                  children: e.label,
                                }),
                                (0, $.jsx)(`span`, {
                                  className: `text-xs text-token-text-secondary`,
                                  children: e.description,
                                }),
                              ],
                            }),
                          },
                          e.value,
                        ),
                      ),
                    }),
                  }),
                }),
              }),
            }),
          })
        : null),
      (e[23] = n),
      (e[24] = a),
      (e[25] = m),
      (e[26] = g),
      (e[27] = o),
      (e[28] = v))
    : (v = e[28]);
  let y;
  e[29] === r
    ? (y = e[30])
    : ((y = (0, $.jsx)(yn, { hostId: r }, r)), (e[29] = r), (e[30] = y));
  let b;
  e[31] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((b = (0, $.jsx)(me, {
        electron: !0,
        extension: !0,
        children: (0, $.jsx)(fn, {}),
      })),
      (e[31] = b))
    : (b = e[31]);
  let x;
  return (
    e[32] !== v || e[33] !== y
      ? ((x = (0, $.jsxs)(Ct, { title: _, children: [v, y, b] })),
        (e[32] = v),
        (e[33] = y),
        (e[34] = x))
      : (x = e[34]),
    x
  );
}
function yn(e) {
  let t = (0, xn.c)(40),
    { hostId: n } = e,
    r = c(a),
    i = ze(),
    o = h(),
    [l, u] = (0, Sn.useState)(null),
    { data: d, error: f, isFetching: m, refetch: g } = s(wt, n),
    _;
  t[0] !== i || t[1] !== o || t[2] !== r
    ? ((_ = (e, t) => {
        (o.setQueryData(p(`codex-agents-md`, { hostId: t.hostId }), {
          path: e.path,
          contents: t.contents,
        }),
          u(null),
          r.get(le).success(
            i.formatMessage({
              id: `settings.personalization.agents.save.success`,
              defaultMessage: `Saved agents.md`,
              description: `Toast shown when agents.md is saved`,
            }),
          ));
      }),
      (t[0] = i),
      (t[1] = o),
      (t[2] = r),
      (t[3] = _))
    : (_ = t[3]);
  let v;
  t[4] !== i || t[5] !== r
    ? ((v = () => {
        r.get(le).danger(
          i.formatMessage({
            id: `settings.personalization.agents.save.error`,
            defaultMessage: `Unable to save agents.md`,
            description: `Toast shown when agents.md save fails`,
          }),
        );
      }),
      (t[4] = i),
      (t[5] = r),
      (t[6] = v))
    : (v = t[6]);
  let y;
  t[7] !== _ || t[8] !== v
    ? ((y = { onSuccess: _, onError: v }), (t[7] = _), (t[8] = v), (t[9] = y))
    : (y = t[9]);
  let b = O(`codex-agents-md-save`, y),
    x = d?.contents ?? ``,
    S = l ?? x,
    C = l != null && l !== x,
    w = d != null,
    T = !w && m,
    E = b.isPending,
    D = f != null && d == null,
    ee;
  t[10] !== S ||
  t[11] !== n ||
  t[12] !== C ||
  t[13] !== w ||
  t[14] !== E ||
  t[15] !== b
    ? ((ee = () => {
        !w || !C || E || b.mutate({ hostId: n, contents: S });
      }),
      (t[10] = S),
      (t[11] = n),
      (t[12] = C),
      (t[13] = w),
      (t[14] = E),
      (t[15] = b),
      (t[16] = ee))
    : (ee = t[16]);
  let k = ee,
    A = w && C && !E,
    j;
  t[17] === k
    ? (j = t[18])
    : ((j = (e) => {
        (e.preventDefault(), k());
      }),
      (t[17] = k),
      (t[18] = j));
  let M;
  (t[19] !== A || t[20] !== j
    ? ((M = { accelerator: `CmdOrCtrl+S`, enabled: A, onKeyDown: j }),
      (t[19] = A),
      (t[20] = j),
      (t[21] = M))
    : (M = t[21]),
    ot(M));
  let N;
  t[22] === i
    ? (N = t[23])
    : ((N = i.formatMessage({
        id: `settings.personalization.agents.placeholder`,
        defaultMessage: `Add your custom instructions…`,
        description: `Placeholder text for personal agents editor`,
      })),
      (t[22] = i),
      (t[23] = N));
  let P = N,
    F;
  t[24] === i
    ? (F = t[25])
    : ((F = i.formatMessage(Y.customInstructions)), (t[24] = i), (t[25] = F));
  let I = F,
    L;
  t[26] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((L = (0, $.jsx)(G, { ...Y.customInstructions })), (t[26] = L))
    : (L = t[26]);
  let re;
  t[27] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((re = (0, $.jsx)(yt.Header, {
        title: L,
        subtitle: (0, $.jsx)(G, {
          id: `settings.personalization.agents.description`,
          defaultMessage: `Give Codex extra instructions and context for all tasks on this host. <a>Learn more</a>`,
          description: `Description for personal agents settings section`,
          values: { a: bn },
        }),
      })),
      (t[27] = re))
    : (re = t[27]);
  let R;
  return (
    t[28] !== x ||
    t[29] !== I ||
    t[30] !== S ||
    t[31] !== k ||
    t[32] !== C ||
    t[33] !== T ||
    t[34] !== w ||
    t[35] !== E ||
    t[36] !== P ||
    t[37] !== g ||
    t[38] !== D
      ? ((R = (0, $.jsxs)(yt, {
          className: `gap-2`,
          children: [
            re,
            (0, $.jsx)(yt.Content, {
              children: D
                ? (0, $.jsxs)(`div`, {
                    className: `flex items-center justify-between gap-3`,
                    children: [
                      (0, $.jsx)(`div`, {
                        className: `text-sm text-token-text-secondary`,
                        children: (0, $.jsx)(G, {
                          id: `settings.personalization.agents.loadError`,
                          defaultMessage: `Unable to load agents.md.`,
                          description: `Error message shown when agents.md fails to load`,
                        }),
                      }),
                      (0, $.jsx)(ne, {
                        className: `shrink-0`,
                        color: `secondary`,
                        onClick: () => {
                          g();
                        },
                        size: `toolbar`,
                        children: (0, $.jsx)(G, {
                          id: `settings.personalization.agents.retry`,
                          defaultMessage: `Retry`,
                          description: `Button label to retry loading agents.md`,
                        }),
                      }),
                    ],
                  })
                : (0, $.jsxs)(`div`, {
                    className: `flex flex-col gap-3`,
                    children: [
                      T
                        ? (0, $.jsxs)(`div`, {
                            className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                            children: [
                              (0, $.jsx)(te, { className: `icon-xs` }),
                              (0, $.jsx)(G, {
                                id: `settings.personalization.agents.loading`,
                                defaultMessage: `Loading agents.md…`,
                                description: `Loading label for agents.md editor`,
                              }),
                            ],
                          })
                        : (0, $.jsx)(`textarea`, {
                            "aria-label": I,
                            id: `personal-agents-editor`,
                            className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                            disabled: !w || E,
                            placeholder: P,
                            rows: 12,
                            value: S,
                            onChange: (e) => {
                              let t = e.target.value;
                              u(t === x ? null : t);
                            },
                          }),
                      (0, $.jsx)(`div`, {
                        className: `flex items-center justify-end gap-2`,
                        children: (0, $.jsx)(ne, {
                          color: `primary`,
                          disabled: !C || !w,
                          loading: E,
                          onClick: k,
                          size: `toolbar`,
                          children: (0, $.jsx)(G, {
                            id: `settings.personalization.agents.save`,
                            defaultMessage: `Save`,
                            description: `Save button label for personal agents editor`,
                          }),
                        }),
                      }),
                    ],
                  }),
            }),
          ],
        })),
        (t[28] = x),
        (t[29] = I),
        (t[30] = S),
        (t[31] = k),
        (t[32] = C),
        (t[33] = T),
        (t[34] = w),
        (t[35] = E),
        (t[36] = P),
        (t[37] = g),
        (t[38] = D),
        (t[39] = R))
      : (R = t[39]),
    R
  );
}
function bn(e) {
  return (0, $.jsx)(`a`, {
    className: `inline-flex text-token-text-link-foreground`,
    href: ut,
    target: `_blank`,
    rel: `noreferrer`,
    children: e,
  });
}
var xn, Sn, $;
e(() => {
  ((xn = _()),
    n(),
    d(),
    (Sn = t(f(), 1)),
    H(),
    N(),
    ve(),
    I(),
    _e(),
    Ce(),
    mt(),
    ct(),
    fe(),
    lt(),
    i(),
    Tt(),
    St(),
    Et(),
    bt(),
    rt(),
    at(),
    ft(),
    vt(),
    U(),
    m(),
    _n(),
    ($ = S()));
})();
export { vn as PersonalizationSettings };
//# sourceMappingURL=personalization-settings-B1J6eU5_.js.map
