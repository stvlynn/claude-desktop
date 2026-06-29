import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as n,
  E as r,
  Gs as i,
  Ha as a,
  Js as o,
  Ko as s,
  Ni as c,
  O as l,
  Vo as u,
  _c as d,
  c as f,
  i as p,
  js as m,
  lc as h,
  o as g,
  zs as _,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Ss as v,
  Xu as y,
  bl as b,
  gp as ee,
  hh as x,
  mh as S,
  mp as C,
  qu as w,
  vl as te,
  xs as ne,
  yl as re,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  $d as T,
  Cs as E,
  Ey as ie,
  Iy as ae,
  Kp as oe,
  N_ as se,
  Qd as D,
  Ty as ce,
  Vy as le,
  dc as ue,
  fc as de,
  gy as fe,
  hy as pe,
  rh as me,
  uh as he,
  vg as ge,
  vs as _e,
  yg as O,
  zy as ve,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Bf as ye,
  Cp as be,
  Gf as xe,
  Vf as Se,
  Yf as Ce,
  gp as we,
  hp as Te,
  wp as Ee,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  E as De,
  j as Oe,
} from "./app-initial~app-main~onboarding-page~select-workspace-page-BQtGPtqt.js";
import { n as ke, t as Ae } from "./setup-codex-wizard-step-view-BVC1Ci2i.js";
import {
  n as je,
  r as Me,
  t as Ne,
} from "./recommended-skill-statsig-overrides-CaQK62gR.js";
function k(e, t, n, r) {
  let i = A(t);
  e.set(I, (e) => {
    let a = e ?? {},
      o = a[i] ?? M(t);
    return o?.[n] === r ? a : { ...a, [i]: { ...o, [n]: r } };
  });
}
function Pe(e, t) {
  e.set(I, (e) => {
    if (e == null) return e;
    let n = !1,
      r = Object.fromEntries(
        Object.entries(e).map(([e, r]) => {
          if (r == null || r[t] == null) return [e, r];
          let { [t]: i, ...a } = r;
          return ((n = !0), [e, Object.keys(a).length === 0 ? void 0 : a]);
        }),
      );
    return n ? r : e;
  });
}
function Fe(e, t, n, r) {
  e.query.snapshot(L, t).setData((e) =>
    e == null
      ? e
      : {
          file: {
            ...e.file,
            suggestions: e.file.suggestions.map((e) =>
              e.id === n ? { ...e, status: r } : e,
            ),
          },
        },
  );
}
function Ie(e) {
  return e == null ? null : Object.keys(e);
}
function A({ domain: e, hostId: t, projectRoot: n }) {
  return e == null ? `${F}:${t}:${j(n)}` : `${F}:${t}:${j(n)}:${e}`;
}
function Le(e, t) {
  let n = A(t),
    r = e(I)?.[n];
  if (r != null) return r;
  if (t.domain == null) return M(t);
}
function j(e) {
  return e ?? ``;
}
function M(e) {
  return ce(Re(e), void 0);
}
function Re({ hostId: e, projectRoot: t }) {
  return `${F}:${e}:${j(t)}`;
}
function ze(e, t) {
  let n = [];
  for (let r of e) {
    let e = (0, N.default)(t, ({ id: e }) => e === r);
    if ((e?.status === `pending` && n.push(e), n.length === P)) break;
  }
  return n;
}
var N,
  P,
  F,
  I,
  L,
  R,
  z,
  B,
  V,
  H,
  U = e(() => {
    ((N = t(se(), 1)),
      u(),
      l(),
      n(),
      ie(),
      pe(),
      f(),
      (P = 3),
      (F = `ambient-suggestions:default-statuses`),
      (I = fe(F, {})),
      (L = g(r, `ambient-suggestions`, ({ projectRoot: e }) => ({
        enabled: e != null,
      }))),
      (R = g(
        r,
        `ambient-suggestions-refresh`,
        ({ domain: e, hostId: t, plan: n, projectRoot: r }) => ({
          enabled: r != null,
          gcTime: a(n),
          params: { domain: e, hostId: t, projectRoot: r },
          select: () => !0,
          staleTime: a(n),
        }),
      )),
      (z = _(r, (e) => null)),
      (B = m(r, (e, { get: t }) => Ie(Le(t, e)))),
      (V = m(r, (e, { get: t }) => {
        let n = t(L, e);
        return n.data != null || n.isError;
      })),
      (H = m(r, ({ domain: e, hostId: t, projectRoot: n }, { get: r }) => {
        let i = r(L, { domain: e, hostId: t, projectRoot: n }).data?.file;
        return ze(i?.currentSuggestionIds ?? [], i?.suggestions ?? []);
      })));
  }),
  W,
  G,
  Be = e(() => {
    (t(d()),
      (W = h()),
      (G = (e) =>
        (0, W.jsx)(`svg`, {
          width: 24,
          height: 24,
          viewBox: `0 0 24 24`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          ...e,
          children: (0, W.jsx)(`path`, {
            fillRule: `evenodd`,
            clipRule: `evenodd`,
            d: `M12.4322 4.81596C12.159 4.68505 11.8411 4.68505 11.5679 4.81596L2.31421 9.25003L11.5679 13.6841C11.8411 13.815 12.159 13.815 12.4322 13.6841L21.6859 9.25003L12.4322 4.81596ZM10.7037 3.01233C11.5233 2.61959 12.4768 2.61959 13.2964 3.01233L22.5501 7.44639C23.8957 8.09114 24.0456 9.86518 23 10.7617V15C23 15.5523 22.5523 16 22 16C21.4478 16 21 15.5523 21 15V11.7964L19.5 12.5152V15.8888C19.5 17.2412 18.8167 18.5019 17.6837 19.2402L16.9133 19.7422C13.9268 21.6881 10.0733 21.6881 7.08675 19.7422L6.31636 19.2402C5.18333 18.5019 4.50004 17.2412 4.50004 15.8888V12.5151L1.44997 11.0537C-0.0643805 10.328 -0.0643747 8.17202 1.44997 7.44639L10.7037 3.01233ZM6.50004 13.4735V15.8888C6.50004 16.565 6.84168 17.1954 7.4082 17.5645L8.17859 18.0665C10.5014 19.58 13.4986 19.58 15.8215 18.0665L16.5919 17.5645C17.1584 17.1954 17.5 16.565 17.5 15.8888V13.4735L13.2964 15.4877C12.4768 15.8805 11.5233 15.8805 10.7037 15.4877L6.50004 13.4735Z`,
            fill: `currentColor`,
          }),
        })));
  });
function Ve({
  completed: e,
  domain: t,
  hostId: n,
  onLocalConversationCreated: i,
  projectRoot: a,
}) {
  let c = s(r),
    l = le(),
    {
      agentMode: u,
      isAgentModePending: d,
      permissionProfileId: f,
      shouldSendPermissionOverrides: p,
    } = Ce({ conversationId: null, cwdOverride: a, hostId: n }),
    { activeMode: m } = we(null),
    { serviceTierSettings: h } = Se(null),
    g = o(De),
    _ = Me(),
    [v, y] = (0, J.useState)(!1),
    b = l.formatMessage({
      id: `electron.onboarding.assistantSuggestion.title`,
      defaultMessage: `Setup Codex`,
      description: `Title for the card that starts the Setup Codex flow`,
    }),
    x = l.formatMessage({
      id: `electron.onboarding.assistantSuggestion.description`,
      defaultMessage: `Personalize Codex around your work`,
      description: `Description for the card that starts the Setup Codex flow`,
    }),
    C = d || a == null;
  ke(T.CODEX_ONBOARDING_WIZARD_PHASE_LAUNCH, !e);
  let w = async () => {
    if (!(C || e || v || a == null)) {
      (E(
        c,
        T.CODEX_ONBOARDING_WIZARD_PHASE_LAUNCH,
        D.CODEX_ONBOARDING_WIZARD_ACTION_COMPLETED,
      ),
        y(!0));
      try {
        let e = We(g.roles),
          r = Ne(_, Z)?.replace(/^name:\s*.*$/m, `name: ${Q}`);
        (await K({
          additionalDeveloperInstructions: e,
          agentMode: u,
          collaborationMode: m,
          hostId: n,
          onLocalConversationCreated: i,
          permissionProfileId: f,
          projectRoot: a,
          prompt: Ue(
            await He({
              hostId: n,
              invalidateSkills: () => {
                c.queryClient.invalidateQueries({ queryKey: [`skills`] });
              },
              repoPath: $,
              skillId: Z,
              skillStatsigOverride: r,
              forceReinstall: r == null,
            }),
          ),
          serviceTier: h.serviceTierForRequest,
          shouldSendPermissionOverrides: p,
        }),
          e != null &&
            E(
              c,
              T.CODEX_ONBOARDING_WIZARD_PHASE_ROLE_PICKER,
              D.CODEX_ONBOARDING_WIZARD_ACTION_SKIPPED,
            ),
          k(c, { domain: t, hostId: n, projectRoot: a }, X, `accepted`));
      } catch {
        c.get(ee).danger(
          (0, Y.jsx)(ve, {
            id: `home.ambientSuggestions.startError`,
            defaultMessage: `Unable to start this suggestion`,
            description: `Toast shown when launching an ambient suggestion fails`,
          }),
          { id: `ambient-suggestion-start-error` },
        );
      } finally {
        y(!1);
      }
    }
  };
  return (0, Y.jsxs)(`button`, {
    type: `button`,
    className: S(
      `relative flex min-w-0 flex-col items-start gap-[10px] rounded-2xl border border-token-border-default bg-token-main-surface-primary px-3 py-3 text-left`,
      e || C || v
        ? `cursor-default`
        : `cursor-interaction enabled:hover:bg-token-foreground/[0.02]`,
      (C || v) && !e && `opacity-70`,
      !e && `shadow-[0_2px_6px_0_rgba(0,0,0,0.02)]`,
    ),
    disabled: C || v || e,
    onClick: () => {
      w();
    },
    children: [
      (0, Y.jsx)(`span`, {
        className: S(`flex h-5 shrink-0 items-center`, e && `opacity-30`),
        children: (0, Y.jsx)(G, {
          "aria-hidden": !0,
          className: `size-5 shrink-0`,
        }),
      }),
      (0, Y.jsxs)(`span`, {
        className: S(
          `flex w-full min-w-0 flex-col gap-1 text-base`,
          e && `opacity-30`,
        ),
        children: [
          (0, Y.jsx)(`span`, {
            className: `line-clamp-1 leading-[18px] text-token-text-primary`,
            children: b,
          }),
          (0, Y.jsx)(`span`, {
            className: `line-clamp-3 leading-[18px] text-token-text-tertiary`,
            children: x,
          }),
        ],
      }),
      e
        ? (0, Y.jsx)(ne, {
            "aria-hidden": `true`,
            className: `absolute top-3 right-3 h-5 w-5 text-token-charts-green [.dark_&]:text-[var(--green-500)] [.electron-dark_&]:text-[var(--green-500)]`,
          })
        : null,
    ],
  });
}
async function He({
  hostId: e,
  invalidateSkills: t,
  repoPath: n,
  skillId: r,
  skillStatsigOverride: i,
  forceReinstall: a,
}) {
  let o = await p(`install-recommended-skill`, {
    params: {
      forceReinstall: a,
      hostId: e,
      installRoot: null,
      repoPath: n,
      skillId: r,
      skillStatsigOverride: i,
    },
  });
  if (!o.success || o.destination == null)
    throw Error(o.error ?? `Unable to install skill`);
  return (
    t(),
    await O(`list-skills-for-host`, { forceReload: !0, hostId: e }),
    q.default.join(o.destination, `SKILL.md`)
  );
}
function Ue(e) {
  return w({ name: `Setup Codex`, path: e });
}
function We(e) {
  let t = e.filter((e) => e !== `default`);
  return t.length === 0
    ? null
    : `The user has already selected Setup Codex roles: ${t.join(`, `)}. Mark Personalize Codex complete, skip role selection, and use these roles for subsequent setup steps.`;
}
async function K({
  additionalDeveloperInstructions: e,
  agentMode: t,
  collaborationMode: n,
  hostId: r,
  onLocalConversationCreated: i,
  permissionProfileId: a,
  projectRoot: o,
  prompt: s,
  serviceTier: c,
  shouldSendPermissionOverrides: l,
}) {
  let u = [o],
    d = b(u),
    f = [{ type: `text`, text: s, text_elements: [] }],
    p = await te(u, { prompt: s }),
    m = p.cwd ?? o;
  if (d && p.projectlessOutputDirectory == null)
    throw Error(`No projectless output directory found`);
  let { config: h } = await O(`read-config-for-host`, {
    hostId: r,
    includeLayers: !1,
    cwd: m,
  });
  await i(
    await O(`start-conversation`, {
      hostId: r,
      ...be({
        additionalDeveloperInstructions: e,
        input: f,
        workspaceRoots: p.workspaceRoots,
        cwd: m,
        fileAttachments: [],
        addedFiles: [],
        agentMode: t,
        permissionProfileId: a,
        shouldSendPermissionOverrides: l,
        model: null,
        serviceTier: c,
        reasoningEffort: null,
        collaborationMode: n,
        config: ue(h),
        configOverrides: { [me]: !0 },
        ...(d
          ? {
              workspaceKind: `projectless`,
              projectlessOutputDirectory: p.projectlessOutputDirectory,
            }
          : { workspaceKind: `project` }),
      }),
    }),
  );
}
var q,
  J,
  Y,
  X,
  Z,
  Q,
  $,
  Ge = e(() => {
    ((q = t(c(), 1)),
      oe(),
      x(),
      i(),
      u(),
      (J = t(d(), 1)),
      ae(),
      he(),
      ge(),
      de(),
      C(),
      Ee(),
      Ae(),
      Te(),
      xe(),
      ye(),
      v(),
      Be(),
      re(),
      _e(),
      Oe(),
      n(),
      je(),
      y(),
      f(),
      U(),
      (Y = h()),
      (X = `onboarding-assistant`),
      (Z = `onboard-new-user`),
      (Q = `setup-codex`),
      ($ = `skills/.curated/onboard-new-user`));
  });
export {
  L as a,
  Pe as c,
  Fe as d,
  k as f,
  z as i,
  U as l,
  X as n,
  V as o,
  H as p,
  Ge as r,
  R as s,
  Ve as t,
  B as u,
};
//# sourceMappingURL=home-onboarding-assistant-tutorial-card-CacqQsHt.js.map
