import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  D as r,
  Dt as i,
  E as a,
  Go as o,
  Ko as s,
  Ln as c,
  O as l,
  Rn as u,
  Vo as d,
  _c as f,
  a as p,
  c as m,
  cc as h,
  gc as g,
  l as _,
  lc as v,
  qo as y,
  u as ee,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Br as b,
  K as te,
  Xi as x,
  Zi as S,
  q as C,
  zr as w,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Br as T,
  Dm as E,
  Dp as D,
  Em as O,
  Ep as k,
  Ff as A,
  Hr as j,
  Lr as M,
  Nf as N,
  Om as P,
  Tm as F,
  Ur as I,
  bs as L,
  ca as ne,
  dp as re,
  eo as ie,
  fa as ae,
  fh as R,
  fp as oe,
  gp as se,
  hh as ce,
  ia as z,
  la as le,
  mh as ue,
  mp as B,
  no as de,
  oa as V,
  oo as fe,
  pa as pe,
  ph as me,
  sa as he,
  ti as ge,
  xp as _e,
  yp as ve,
  ys as ye,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  $p as be,
  Ea as xe,
  Fa as Se,
  Fy as Ce,
  Iy as H,
  Jn as U,
  Kn as we,
  Na as Te,
  Pa as Ee,
  Qp as De,
  Ra as Oe,
  Rv as ke,
  Uv as Ae,
  Vy as je,
  Yn as Me,
  xa as Ne,
  zn as Pe,
  zy as W,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Ht as Fe,
  Vt as Ie,
  zt as Le,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import {
  _ as Re,
  _n as ze,
  dn as Be,
  v as Ve,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Au as He,
  Fn as Ue,
  In as G,
  Mu as We,
  Nu as Ge,
  Pu as Ke,
  Sc as qe,
  ad as Je,
  id as Ye,
  pc as Xe,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  $n as Ze,
  Gn as Qe,
  H as $e,
  Jn as et,
  Kn as tt,
  Qn as nt,
  V as rt,
  Xn as it,
  Zn as at,
  qn as ot,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  J as st,
  d as K,
  f as ct,
  q,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import {
  r as lt,
  t as ut,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js";
import { n as dt, t as ft } from "./segmented-toggle-DYZLeHEX.js";
import {
  a as pt,
  c as mt,
  d as ht,
  f as gt,
  i as _t,
  l as vt,
  m as yt,
  n as bt,
  o as xt,
  p as St,
  r as Ct,
  s as wt,
  t as Tt,
  u as Et,
} from "./local-environments-utils-Y1qAyZiR.js";
import { n as Dt, t as Ot } from "./esm-BrsRQYxN.js";
function kt(e, t) {
  let n = nt(e) ?? e;
  return t?.label ?? n;
}
var At = e(() => {
  Ze();
});
function jt(e) {
  let t = (0, Mt.c)(17),
    { workspaceRoot: n, workspaceGroup: r, mode: i, onBack: a } = e,
    o;
  t[0] !== r || t[1] !== n
    ? ((o = kt(n, r)), (t[0] = r), (t[1] = n), (t[2] = o))
    : (o = t[2]);
  let s = o,
    c;
  t[3] === a
    ? (c = t[4])
    : ((c = a
        ? (0, J.jsxs)(F, {
            color: `ghost`,
            size: `toolbar`,
            onClick: a,
            children: [
              (0, J.jsx)(ye, { className: `icon-xs` }),
              (0, J.jsx)(W, {
                id: `settings.localEnvironments.breadcrumb.back`,
                defaultMessage: `Back`,
                description: `Button label to go back to local environments list`,
              }),
            ],
          })
        : null),
      (t[3] = a),
      (t[4] = c));
  let l, u;
  t[5] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, J.jsx)(`span`, {
        children: (0, J.jsx)(W, {
          id: `settings.localEnvironments.breadcrumb.root`,
          defaultMessage: `Environments`,
          description: `Breadcrumb label for the local environments page`,
        }),
      })),
      (u = (0, J.jsx)(k, { className: `icon-xs text-token-text-secondary` })),
      (t[5] = l),
      (t[6] = u))
    : ((l = t[5]), (u = t[6]));
  let d;
  t[7] === s
    ? (d = t[8])
    : ((d = (0, J.jsx)(`span`, {
        className: `text-token-text-primary`,
        children: s,
      })),
      (t[7] = s),
      (t[8] = d));
  let f;
  t[9] === i
    ? (f = t[10])
    : ((f =
        i === `edit`
          ? (0, J.jsxs)(J.Fragment, {
              children: [
                (0, J.jsx)(k, {
                  className: `icon-xs text-token-text-secondary`,
                }),
                (0, J.jsx)(`span`, {
                  children: (0, J.jsx)(W, {
                    id: `settings.localEnvironments.breadcrumb.edit`,
                    defaultMessage: `edit`,
                    description: `Breadcrumb label for local environment edit mode`,
                  }),
                }),
              ],
            })
          : null),
      (t[9] = i),
      (t[10] = f));
  let p;
  t[11] !== d || t[12] !== f
    ? ((p = (0, J.jsxs)(`div`, {
        className: `flex items-center gap-1`,
        children: [l, u, d, f],
      })),
      (t[11] = d),
      (t[12] = f),
      (t[13] = p))
    : (p = t[13]);
  let m;
  return (
    t[14] !== c || t[15] !== p
      ? ((m = (0, J.jsxs)(`nav`, {
          className: `flex items-center gap-2 text-sm text-token-text-secondary`,
          children: [c, p],
        })),
        (t[14] = c),
        (t[15] = p),
        (t[16] = m))
      : (m = t[16]),
    m
  );
}
var Mt,
  J,
  Nt = e(() => {
    ((Mt = g()), H(), O(), L(), D(), At(), (J = v()));
  }),
  Pt,
  Ft = e(() => {
    (H(),
      (Pt = Ce({
        actionsDescription: {
          id: `settings.localEnvironments.environment.actions.description`,
          defaultMessage: `These actions can run any command and will be displayed in the header`,
          description: `Description for local environment actions summary`,
        },
        actionsEmpty: {
          id: `settings.localEnvironments.actions.empty`,
          defaultMessage: `Add an action to run commands from the local toolbar`,
          description: `Empty state for local environment actions`,
        },
        selectProject: {
          id: `settings.localEnvironments.workspaceSelect.title`,
          defaultMessage: `Select a project`,
          description: `Title for the workspace selection step`,
        },
      })));
  }),
  It,
  Lt = e(() => {
    (H(),
      (It = Ce({
        darwin: {
          id: `settings.localEnvironments.actions.item.platforms.macos`,
          defaultMessage: `macOS`,
          description: `Label for macOS platform toggle`,
        },
        linux: {
          id: `settings.localEnvironments.actions.item.platforms.linux`,
          defaultMessage: `Linux`,
          description: `Label for Linux platform toggle`,
        },
        win32: {
          id: `settings.localEnvironments.actions.item.platforms.windows`,
          defaultMessage: `Windows`,
          description: `Label for Windows platform toggle`,
        },
      })));
  });
function Rt() {
  let e = (0, Bt.c)(4),
    t;
  e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = (0, Y.jsx)(ne, {
        asChild: !0,
        children: (0, Y.jsx)(F, {
          color: `ghost`,
          size: `toolbar`,
          className: `w-auto`,
          children: (0, Y.jsx)(W, {
            id: `settings.localEnvironments.environment.setup.envVars.button`,
            defaultMessage: `Variables`,
            description: `Button label that opens the setup env vars popover`,
          }),
        }),
      })),
      (e[0] = t))
    : (t = e[0]);
  let n;
  e[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((n = (0, Y.jsx)(he, {
        className: `px-2 py-1 text-sm font-medium text-token-text-primary`,
        children: (0, Y.jsx)(W, {
          id: `settings.localEnvironments.environment.setup.envVars.title`,
          defaultMessage: `Setup script environment variables`,
          description: `Title for the setup env vars popover`,
        }),
      })),
      (e[1] = n))
    : (n = e[1]);
  let r;
  e[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((r = (0, Y.jsx)(zt, {
        description: (0, Y.jsx)(W, {
          id: `settings.localEnvironments.environment.setup.envVars.sourcePath.description`,
          defaultMessage: `Source workspace path`,
          description: `Description for the source workspace setup env var`,
        }),
        variableName: c,
      })),
      (e[2] = r))
    : (r = e[2]);
  let i;
  return (
    e[3] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((i = (0, Y.jsxs)(z, {
          children: [
            t,
            (0, Y.jsxs)(V, {
              align: `end`,
              className: `w-80 max-w-[min(20rem,var(--radix-popover-content-available-width))] gap-1`,
              children: [
                n,
                (0, Y.jsxs)(`div`, {
                  className: `flex flex-col gap-1`,
                  children: [
                    r,
                    (0, Y.jsx)(zt, {
                      variableName: u,
                      description: (0, Y.jsx)(W, {
                        id: `settings.localEnvironments.environment.setup.envVars.worktreePath.description`,
                        defaultMessage: `New worktree path`,
                        description: `Description for the worktree setup env var`,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        })),
        (e[3] = i))
      : (i = e[3]),
    i
  );
}
function zt(e) {
  let t = (0, Bt.c)(7),
    { variableName: n, description: r } = e,
    i;
  t[0] === r
    ? (i = t[1])
    : ((i = (0, Y.jsx)(`div`, {
        className: `text-sm text-token-text-secondary`,
        children: r,
      })),
      (t[0] = r),
      (t[1] = i));
  let a;
  t[2] === n
    ? (a = t[3])
    : ((a = (0, Y.jsx)(`div`, {
        className: `overflow-x-auto rounded-md border border-token-input-background bg-token-text-code-block-background px-2 py-1.5`,
        children: (0, Y.jsx)(`code`, {
          className: `block text-xs font-medium whitespace-nowrap text-token-text-primary`,
          children: n,
        }),
      })),
      (t[2] = n),
      (t[3] = a));
  let o;
  return (
    t[4] !== i || t[5] !== a
      ? ((o = (0, Y.jsxs)(`div`, {
          className: `flex flex-col gap-0.5 rounded-lg px-2 py-1`,
          children: [i, a],
        })),
        (t[4] = i),
        (t[5] = a),
        (t[6] = o))
      : (o = t[6]),
    o
  );
}
var Bt,
  Y,
  Vt = e(() => {
    ((Bt = g()), l(), H(), O(), le(), (Y = v()));
  });
function Ht(e) {
  let t = (0, Ut.c)(18),
    { workspaceRoot: n, workspaceGroup: r } = e,
    i;
  t[0] !== r || t[1] !== n
    ? ((i = kt(n, r)), (t[0] = r), (t[1] = n), (t[2] = i))
    : (i = t[2]);
  let a = i,
    o = r?.repositoryData?.rootFolder,
    s = o && o !== a ? `(${o})` : null,
    c = r?.isCodexWorktree ? te : ae,
    l;
  t[3] === c
    ? (l = t[4])
    : ((l = (0, Wt.jsx)(c, { className: `icon-sm text-token-text-secondary` })),
      (t[3] = c),
      (t[4] = l));
  let u;
  t[5] === a
    ? (u = t[6])
    : ((u = (0, Wt.jsx)(`span`, { className: `truncate`, children: a })),
      (t[5] = a),
      (t[6] = u));
  let d;
  t[7] === s
    ? (d = t[8])
    : ((d = s
        ? (0, Wt.jsx)(`span`, {
            className: `truncate text-xs text-token-description-foreground`,
            children: s,
          })
        : null),
      (t[7] = s),
      (t[8] = d));
  let f;
  t[9] !== u || t[10] !== d
    ? ((f = (0, Wt.jsxs)(`span`, {
        className: `flex min-w-0 items-center gap-1`,
        children: [u, d],
      })),
      (t[9] = u),
      (t[10] = d),
      (t[11] = f))
    : (f = t[11]);
  let p;
  t[12] === n
    ? (p = t[13])
    : ((p = (0, Wt.jsx)(`span`, { className: `truncate`, children: n })),
      (t[12] = n),
      (t[13] = p));
  let m;
  return (
    t[14] !== l || t[15] !== f || t[16] !== p
      ? ((m = (0, Wt.jsx)(Ue, {
          icon: l,
          label: f,
          description: p,
          control: null,
        })),
        (t[14] = l),
        (t[15] = f),
        (t[16] = p),
        (t[17] = m))
      : (m = t[17]),
    m
  );
}
var Ut,
  Wt,
  Gt = e(() => {
    ((Ut = g()), pe(), C(), G(), At(), (Wt = v()));
  });
function Kt(e) {
  let t = (0, on.c)(67),
    {
      hostId: n,
      workspaceRoot: r,
      workspaceGroup: o,
      configPath: c,
      configExists: l,
      initialEnvironment: u,
      parseErrorMessage: d,
      readErrorMessage: f,
      onSaved: m,
    } = e,
    g = s(a),
    _ = je(),
    v = h(),
    { data: y } = Ve(),
    { data: b, error: te, refetch: S } = A(n),
    C = b?.codexHome,
    w;
  t[0] !== C || t[1] !== o?.isCodexWorktree || t[2] !== r
    ? ((w = o?.isCodexWorktree === !0 || (C != null && i(r, C))),
      (t[0] = C),
      (t[1] = o?.isCodexWorktree),
      (t[2] = r),
      (t[3] = w))
    : (w = t[3]);
  let T = w,
    E = be(n),
    { data: D } = Me(r, E, `local_environment_editor`),
    O;
  t[4] !== n || t[5] !== r
    ? ((O = { hostId: n, workspaceRoot: r }),
      (t[4] = n),
      (t[5] = r),
      (t[6] = O))
    : (O = t[6]);
  let { updateSelection: k } = ot(O),
    j;
  t[7] !== D || t[8] !== E || t[9] !== g
    ? ((j = {
        onSuccess: (e, t) => {
          !e.success || !D || tt(g, D, E, t.value, `local_environment_editor`);
        },
      }),
      (t[7] = D),
      (t[8] = E),
      (t[9] = g),
      (t[10] = j))
    : (j = t[10]);
  let M = we(`set-config-value`, E, j),
    [N, P] = (0, sn.useState)(`default`),
    [I, L] = (0, sn.useState)(`default`),
    [ne, re] = (0, sn.useState)(!l),
    ae,
    R;
  if (
    t[11] !== u?.actions ||
    t[12] !== u?.cleanup ||
    t[13] !== u?.name ||
    t[14] !== u?.setup ||
    t[15] !== u?.version ||
    t[16] !== _ ||
    t[17] !== r
  ) {
    let e =
        nt(r) ??
        _.formatMessage({
          id: `settings.localEnvironments.environment.defaultName`,
          defaultMessage: `local`,
          description: `Fallback name for the local environment`,
        }),
      n = u?.actions ?? [],
      i = u?.name ?? e,
      a = u?.setup?.script ?? ``,
      o = u?.cleanup?.script ?? ``,
      s = mt(u?.setup),
      c = mt(u?.cleanup),
      l = wt(n);
    ((R = u?.version ?? 1),
      (ae = Yt({
        name: i,
        setupScript: a,
        setupPlatformScripts: s,
        cleanupScript: o,
        cleanupPlatformScripts: c,
        actions: l,
      })),
      (t[11] = u?.actions),
      (t[12] = u?.cleanup),
      (t[13] = u?.name),
      (t[14] = u?.setup),
      (t[15] = u?.version),
      (t[16] = _),
      (t[17] = r),
      (t[18] = ae),
      (t[19] = R));
  } else ((ae = t[18]), (R = t[19]));
  let oe = ae,
    ce;
  t[20] !== T ||
  t[21] !== D?.root ||
  t[22] !== n ||
  t[23] !== _ ||
  t[24] !== ne ||
  t[25] !== m ||
  t[26] !== v ||
  t[27] !== g ||
  t[28] !== M ||
  t[29] !== k ||
  t[30] !== r
    ? ((ce = {
        onSuccess: async (e) => {
          let { configPath: t } = e;
          (v.invalidateQueries({
            queryKey: p(`local-environment-config`, {
              configPath: t,
              hostId: n,
            }),
          }),
            v.invalidateQueries({
              queryKey: p(`local-environment`, { configPath: t, hostId: n }),
            }));
          let i = () =>
            v.invalidateQueries({
              queryKey: p(`local-environments`, {
                hostId: n,
                workspaceRoot: r,
              }),
            });
          if (ne) {
            if (
              !(await Et({
                codexWorktree: T,
                configPath: t,
                gitRoot: D?.root ?? null,
                refreshEnvironments: i,
                selectForWorkspace: k,
                selectForWorktree: async (e, t) =>
                  (
                    await M.mutateAsync({
                      root: e,
                      key: `codex.localEnvironmentConfigPath`,
                      operationSource: `local_environment_editor`,
                      value: t,
                      scope: `worktree`,
                    }).catch(Jt)
                  )?.success === !0,
              }))
            ) {
              g.get(se).danger(
                _.formatMessage({
                  id: `settings.localEnvironments.save.selectionError`,
                  defaultMessage: `Saved the environment file, but could not select it`,
                  description: `Error toast shown when a new local environment cannot be selected after saving`,
                }),
              );
              return;
            }
            re(!1);
          } else i();
          (g.get(se).success(
            _.formatMessage({
              id: `settings.localEnvironments.save.success`,
              defaultMessage: `Saved local environment`,
              description: `Toast shown when local environment is saved`,
            }),
          ),
            m());
        },
      }),
      (t[20] = T),
      (t[21] = D?.root),
      (t[22] = n),
      (t[23] = _),
      (t[24] = ne),
      (t[25] = m),
      (t[26] = v),
      (t[27] = g),
      (t[28] = M),
      (t[29] = k),
      (t[30] = r),
      (t[31] = ce))
    : (ce = t[31]);
  let z = ee(`local-environment-config-save`, ce),
    le;
  t[32] !== c || t[33] !== n || t[34] !== z || t[35] !== R
    ? ((le = (e) => {
        let { value: t } = e,
          r = Xt(t, R);
        t.name.length !== 0 && z.mutate({ configPath: c, hostId: n, raw: r });
      }),
      (t[32] = c),
      (t[33] = n),
      (t[34] = z),
      (t[35] = R),
      (t[36] = le))
    : (le = t[36]);
  let ue;
  t[37] !== oe || t[38] !== le
    ? ((ue = { defaultValues: oe, onSubmit: le }),
      (t[37] = oe),
      (t[38] = le),
      (t[39] = ue))
    : (ue = t[39]);
  let B = Dt(ue),
    V;
  t[40] === B
    ? (V = t[41])
    : ((V = (e) => {
        (e.preventDefault(), B.handleSubmit());
      }),
      (t[40] = B),
      (t[41] = V));
  let fe;
  t[42] !== C ||
  t[43] !== te ||
  t[44] !== T ||
  t[45] !== B ||
  t[46] !== D?.root ||
  t[47] !== _ ||
  t[48] !== ne ||
  t[49] !== y?.platform ||
  t[50] !== d ||
  t[51] !== f ||
  t[52] !== S ||
  t[53] !== z.error ||
  t[54] !== z.isPending ||
  t[55] !== I ||
  t[56] !== N ||
  t[57] !== R ||
  t[58] !== o ||
  t[59] !== r
    ? ((fe = (e) => {
        let { values: t, isDirty: n } = e;
        Xt(t, R);
        let i = ht.map((e) => ({
            label: _.formatMessage(e.message),
            value: e.value,
            icon: (0, X.jsx)(St, { icon: e.value }),
          })),
          a = tn(y?.platform),
          s = nn(_),
          c = Zt({
            values: t,
            isDirty: n,
            isSelectionReady:
              !ne || ((o != null || C != null) && (!T || D?.root != null)),
            selectionError: o == null && te != null,
            isSaving: z.isPending,
          }),
          l = Qt(c),
          u = c != null,
          p = (e, n, r) => {
            if (n === `default`) {
              B.setFieldValue(
                e === `setup` ? `setupScript` : `cleanupScript`,
                r,
              );
              return;
            }
            let { scriptField: i, scripts: a } = $t(t, e);
            B.setFieldValue(i, { ...a, [n]: r });
          },
          m = () => {
            B.setFieldValue(`actions`, [...t.actions, xt(``)]);
          },
          h = (e) => {
            B.setFieldValue(
              `actions`,
              t.actions.filter((t) => t.id !== e),
            );
          },
          g = (e, n) => {
            B.setFieldValue(
              `actions`,
              t.actions.map((t) => (t.id === e ? { ...t, ...n } : t)),
            );
          },
          v = () => {
            u || B.handleSubmit();
          };
        return (0, X.jsxs)(X.Fragment, {
          children: [
            (0, X.jsxs)(K, {
              children: [
                (0, X.jsx)(K.Header, {
                  title: (0, X.jsx)(W, {
                    id: `settings.localEnvironments.editor.title`,
                    defaultMessage: `Local environment`,
                    description: `Title for local environment editor`,
                  }),
                }),
                (0, X.jsxs)(K.Content, {
                  className: `gap-[var(--padding-panel)]`,
                  children: [
                    (0, X.jsx)(q, {
                      children: (0, X.jsx)(Ht, {
                        workspaceRoot: r,
                        workspaceGroup: o,
                      }),
                    }),
                    d
                      ? (0, X.jsx)(`div`, {
                          className: `mt-2 text-sm text-token-error-foreground`,
                          children: (0, X.jsx)(W, {
                            id: `settings.localEnvironments.file.parseError`,
                            defaultMessage: `Unable to parse the existing file. Saving will overwrite it. ({error})`,
                            description: `Parse error message for local environment file`,
                            values: { error: d },
                          }),
                        })
                      : null,
                    f
                      ? (0, X.jsx)(`div`, {
                          className: `mt-2 text-sm text-token-error-foreground`,
                          children: (0, X.jsx)(W, {
                            id: `settings.localEnvironments.file.readError`,
                            defaultMessage: `Failed to load local environment data. ({error})`,
                            description: `Read error message for local environment config`,
                            values: { error: f },
                          }),
                        })
                      : null,
                    o == null && te != null
                      ? (0, X.jsx)(q, {
                          children: (0, X.jsxs)(`div`, {
                            className: `flex items-center justify-between gap-3 p-3`,
                            children: [
                              (0, X.jsx)(`div`, {
                                className: `text-sm text-token-error-foreground`,
                                children: (0, X.jsx)(W, {
                                  id: `settings.localEnvironments.projectInfo.error`,
                                  defaultMessage: `Could not load project information`,
                                  description: `Error shown when project information required to save an environment cannot be loaded`,
                                }),
                              }),
                              (0, X.jsx)(F, {
                                color: `secondary`,
                                size: `toolbar`,
                                type: `button`,
                                onClick: () => {
                                  S();
                                },
                                children: (0, X.jsx)(W, {
                                  id: `settings.localEnvironments.projectInfo.retry`,
                                  defaultMessage: `Retry`,
                                  description: `Button label to retry loading project information`,
                                }),
                              }),
                            ],
                          }),
                        })
                      : null,
                    (0, X.jsxs)(`div`, {
                      className: `flex flex-col gap-1`,
                      children: [
                        (0, X.jsx)(`label`, {
                          htmlFor: `local-environment-name`,
                          className: `text-sm font-medium text-token-text-primary`,
                          children: (0, X.jsx)(W, {
                            id: `settings.localEnvironments.environment.name`,
                            defaultMessage: `Name`,
                            description: `Label for environment name input`,
                          }),
                        }),
                        (0, X.jsx)(`input`, {
                          id: `local-environment-name`,
                          className: `focus-visible:ring-token-focus w-72 rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                          value: t.name,
                          onChange: (e) => {
                            B.setFieldValue(`name`, e.target.value);
                          },
                        }),
                      ],
                    }),
                    (0, X.jsxs)(`div`, {
                      className: `flex flex-col gap-3`,
                      children: [
                        (0, X.jsxs)(`div`, {
                          className: `flex flex-col gap-1`,
                          children: [
                            (0, X.jsx)(`div`, {
                              className: `text-sm font-medium text-token-text-primary`,
                              children: (0, X.jsx)(W, {
                                id: `settings.localEnvironments.environment.setup`,
                                defaultMessage: `Setup script`,
                                description: `Label for environment setup script input`,
                              }),
                            }),
                            (0, X.jsx)(`div`, {
                              className: `text-sm text-token-text-secondary`,
                              children: (0, X.jsx)(W, {
                                id: `settings.localEnvironments.editor.setup.description`,
                                defaultMessage: `Runs at the project root on worktree creation`,
                                description: `Description for environment setup script summary`,
                              }),
                            }),
                          ],
                        }),
                        (0, X.jsxs)(`div`, {
                          className: `flex flex-col gap-2`,
                          children: [
                            (0, X.jsxs)(`div`, {
                              className: `flex flex-wrap items-center justify-between gap-2`,
                              children: [
                                (0, X.jsx)(ft, {
                                  selectedId: N,
                                  onSelect: P,
                                  size: `default`,
                                  ariaLabel: _.formatMessage({
                                    id: `settings.localEnvironments.environment.setup.platformSelector`,
                                    defaultMessage: `Setup script platform`,
                                    description: `Aria label for setup script platform selector`,
                                  }),
                                  options: rn(_),
                                }),
                                (0, X.jsx)(Rt, {}),
                              ],
                            }),
                            (0, X.jsx)(`textarea`, {
                              id: `local-environment-setup-script-${N}`,
                              className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                              value: en(t, `setup`, N),
                              placeholder: _t,
                              rows: 6,
                              onChange: (e) => {
                                p(`setup`, N, e.target.value);
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            (0, X.jsx)(K, {
              children: (0, X.jsxs)(K.Content, {
                className: `gap-3`,
                children: [
                  (0, X.jsxs)(`div`, {
                    className: `flex flex-col gap-1`,
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `text-sm font-medium text-token-text-primary`,
                        children: (0, X.jsx)(W, {
                          id: `settings.localEnvironments.environment.cleanup.title`,
                          defaultMessage: `Cleanup script`,
                          description: `Title for the cleanup script section`,
                        }),
                      }),
                      (0, X.jsx)(`div`, {
                        className: `text-sm text-token-text-secondary`,
                        children: (0, X.jsx)(W, {
                          id: `settings.localEnvironments.environment.cleanup.description`,
                          defaultMessage: `Runs at the project root before worktree cleanup`,
                          description: `Description for the cleanup script input`,
                        }),
                      }),
                    ],
                  }),
                  (0, X.jsxs)(`div`, {
                    className: `flex flex-col gap-2`,
                    children: [
                      (0, X.jsx)(`div`, {
                        className: `flex flex-wrap items-center gap-2`,
                        children: (0, X.jsx)(ft, {
                          selectedId: I,
                          onSelect: L,
                          size: `default`,
                          ariaLabel: _.formatMessage({
                            id: `settings.localEnvironments.environment.cleanup.platformSelector`,
                            defaultMessage: `Cleanup script platform`,
                            description: `Aria label for cleanup script platform selector`,
                          }),
                          options: rn(_),
                        }),
                      }),
                      (0, X.jsx)(`textarea`, {
                        id: `local-environment-cleanup-script-${I}`,
                        className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                        value: en(t, `cleanup`, I),
                        placeholder: bt,
                        rows: 6,
                        onChange: (e) => {
                          p(`cleanup`, I, e.target.value);
                        },
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, X.jsxs)(K, {
              children: [
                (0, X.jsx)(K.Header, {
                  title: (0, X.jsx)(W, {
                    id: `settings.localEnvironments.actions.title`,
                    defaultMessage: `Actions`,
                    description: `Title for local environment actions section`,
                  }),
                  actions: (0, X.jsx)(F, {
                    color: `secondary`,
                    size: `toolbar`,
                    onClick: m,
                    children: (0, X.jsx)(W, {
                      id: `settings.localEnvironments.actions.add`,
                      defaultMessage: `Add action`,
                      description: `Button label to add a local environment action`,
                    }),
                  }),
                }),
                (0, X.jsxs)(K.Content, {
                  className: `gap-1`,
                  children: [
                    (0, X.jsx)(`div`, {
                      className: `text-sm text-token-text-secondary`,
                      children: (0, X.jsx)(W, { ...Pt.actionsDescription }),
                    }),
                    t.actions.length === 0
                      ? (0, X.jsx)(q, {
                          children: (0, X.jsx)(`div`, {
                            className: `p-3 text-sm text-token-text-secondary`,
                            children: (0, X.jsx)(W, { ...Pt.actionsEmpty }),
                          }),
                        })
                      : (0, X.jsx)(`div`, {
                          className: `flex flex-col gap-3`,
                          children: t.actions.map((e) => {
                            let t =
                                i.find((t) => t.value === (e.icon ?? `tool`)) ??
                                i[0],
                              n = e.platform != null,
                              r = e.platform ?? a;
                            return (0, X.jsxs)(
                              `div`,
                              {
                                className: `flex flex-col gap-3 rounded-lg border border-token-border bg-token-input-background p-3`,
                                children: [
                                  (0, X.jsxs)(`div`, {
                                    className: `flex flex-col gap-2`,
                                    children: [
                                      (0, X.jsx)(`label`, {
                                        className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
                                        htmlFor: `local-env-action-name-${e.id}`,
                                        children: (0, X.jsx)(W, {
                                          id: `settings.localEnvironments.actions.item.name`,
                                          defaultMessage: `Name`,
                                          description: `Label for local environment action name`,
                                        }),
                                      }),
                                      (0, X.jsxs)(`div`, {
                                        className: `flex items-center gap-2`,
                                        children: [
                                          (0, X.jsx)(ie, {
                                            align: `start`,
                                            contentWidth: `icon`,
                                            triggerButton: (0, X.jsx)(F, {
                                              id: `local-env-action-icon-${e.id}`,
                                              className: `w-12 justify-center text-sm`,
                                              color: `secondary`,
                                              size: `toolbar`,
                                              "aria-label": t.label,
                                              children: t.icon,
                                            }),
                                            children: i.map((t) =>
                                              (0, X.jsx)(
                                                de.Item,
                                                {
                                                  onSelect: () => {
                                                    g(e.id, { icon: t.value });
                                                  },
                                                  children: (0, X.jsxs)(
                                                    `span`,
                                                    {
                                                      className: `flex items-center gap-2`,
                                                      children: [
                                                        t.icon,
                                                        (0, X.jsx)(`span`, {
                                                          children: t.label,
                                                        }),
                                                      ],
                                                    },
                                                  ),
                                                },
                                                t.value,
                                              ),
                                            ),
                                          }),
                                          (0, X.jsx)(`div`, {
                                            className: `flex-1`,
                                            children: (0, X.jsx)(`input`, {
                                              id: `local-env-action-name-${e.id}`,
                                              className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-1.5 text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                                              value: e.name,
                                              onChange: (t) => {
                                                g(e.id, {
                                                  name: t.target.value,
                                                });
                                              },
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, X.jsxs)(`div`, {
                                    className: `flex flex-col gap-2`,
                                    children: [
                                      (0, X.jsx)(`label`, {
                                        className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
                                        htmlFor: `local-env-action-command-${e.id}`,
                                        children: (0, X.jsx)(W, {
                                          id: `settings.localEnvironments.actions.item.command`,
                                          defaultMessage: `Action script`,
                                          description: `Label for local environment action script`,
                                        }),
                                      }),
                                      (0, X.jsx)(`textarea`, {
                                        id: `local-env-action-command-${e.id}`,
                                        className: `focus-visible:ring-token-focus w-full rounded-md border border-token-border bg-token-input-background px-2.5 py-2 font-mono text-sm text-token-text-primary outline-none focus-visible:ring-2`,
                                        value: e.command,
                                        placeholder: Tt,
                                        rows: 4,
                                        onChange: (t) => {
                                          g(e.id, { command: t.target.value });
                                        },
                                      }),
                                    ],
                                  }),
                                  (0, X.jsxs)(`div`, {
                                    className: `flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between`,
                                    children: [
                                      (0, X.jsxs)(`div`, {
                                        className: `flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-6`,
                                        children: [
                                          (0, X.jsx)(`div`, {
                                            className: `min-w-0`,
                                            children: (0, X.jsxs)(`div`, {
                                              className: `flex flex-col gap-2`,
                                              children: [
                                                (0, X.jsx)(`div`, {
                                                  className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
                                                  children: (0, X.jsx)(W, {
                                                    id: `settings.localEnvironments.actions.item.platforms`,
                                                    defaultMessage: `Platforms`,
                                                    description: `Label for local environment action platforms`,
                                                  }),
                                                }),
                                                (0, X.jsx)(`div`, {
                                                  className: `text-xs text-token-text-secondary`,
                                                  children: (0, X.jsx)(W, {
                                                    id: `settings.localEnvironments.actions.item.platforms.help`,
                                                    defaultMessage: `Only run on a specific OS.`,
                                                    description: `Help text for action platforms selection`,
                                                  }),
                                                }),
                                                (0, X.jsxs)(`div`, {
                                                  className: `relative flex items-center gap-2 text-sm`,
                                                  children: [
                                                    (0, X.jsx)(x, {
                                                      id: `local-env-action-platform-specific-${e.id}`,
                                                      checked: n,
                                                      onCheckedChange: (t) => {
                                                        if (t) {
                                                          g(e.id, {
                                                            platform: r,
                                                          });
                                                          return;
                                                        }
                                                        g(e.id, {
                                                          platform: null,
                                                        });
                                                      },
                                                    }),
                                                    (0, X.jsx)(`label`, {
                                                      className: `text-token-text-secondary`,
                                                      htmlFor: `local-env-action-platform-specific-${e.id}`,
                                                      children: (0, X.jsx)(W, {
                                                        id: `settings.localEnvironments.actions.item.platforms.specific`,
                                                        defaultMessage: `Platform specific`,
                                                        description: `Label for enabling platform-specific action selection`,
                                                      }),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                          }),
                                          n
                                            ? (0, X.jsx)(`div`, {
                                                className: `flex justify-start`,
                                                children: (0, X.jsx)(ft, {
                                                  selectedId: r,
                                                  onSelect: (t) => {
                                                    g(e.id, { platform: t });
                                                  },
                                                  ariaLabel: _.formatMessage({
                                                    id: `settings.localEnvironments.actions.item.platforms.selector`,
                                                    defaultMessage: `Platform selection`,
                                                    description: `Aria label for platform selection toggle`,
                                                  }),
                                                  options: s,
                                                }),
                                              })
                                            : null,
                                        ],
                                      }),
                                      (0, X.jsx)(`div`, {
                                        className: `flex justify-end sm:justify-center`,
                                        children: (0, X.jsx)(ve, {
                                          tooltipContent: (0, X.jsx)(W, {
                                            id: `settings.localEnvironments.actions.item.tooltip.delete`,
                                            defaultMessage: `Delete`,
                                            description: `Tooltip for removing a local environment action`,
                                          }),
                                          children: (0, X.jsx)(F, {
                                            "aria-label": _.formatMessage({
                                              id: `settings.localEnvironments.actions.item.button.delete`,
                                              defaultMessage: `Delete`,
                                              description: `Label for removing a local environment action`,
                                            }),
                                            color: `ghost`,
                                            size: `toolbar`,
                                            onClick: () => {
                                              h(e.id);
                                            },
                                            children: (0, X.jsx)(Ye, {
                                              className: `icon-sm`,
                                            }),
                                          }),
                                        }),
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              e.id,
                            );
                          }),
                        }),
                  ],
                }),
              ],
            }),
            null,
            z.error
              ? (0, X.jsx)(`div`, {
                  className: `text-sm text-token-error-foreground`,
                  children: (0, X.jsx)(W, {
                    id: `settings.localEnvironments.preview.saveError`,
                    defaultMessage: `Failed to save the file. ({error})`,
                    description: `Error message when saving local environment file fails`,
                    values: { error: z.error.message },
                  }),
                })
              : null,
            (0, X.jsx)(`div`, {
              className: `flex justify-end`,
              children: (0, X.jsx)(ve, {
                disabled: l == null,
                tooltipContent: l,
                children: (0, X.jsx)(`span`, {
                  className: `inline-flex`,
                  children: (0, X.jsx)(F, {
                    color: `primary`,
                    size: `toolbar`,
                    disabled: u,
                    onClick: v,
                    children: (0, X.jsx)(W, {
                      id: `settings.localEnvironments.preview.save`,
                      defaultMessage: `Save`,
                      description: `Save button label for local environment file`,
                    }),
                  }),
                }),
              }),
            }),
          ],
        });
      }),
      (t[42] = C),
      (t[43] = te),
      (t[44] = T),
      (t[45] = B),
      (t[46] = D?.root),
      (t[47] = _),
      (t[48] = ne),
      (t[49] = y?.platform),
      (t[50] = d),
      (t[51] = f),
      (t[52] = S),
      (t[53] = z.error),
      (t[54] = z.isPending),
      (t[55] = I),
      (t[56] = N),
      (t[57] = R),
      (t[58] = o),
      (t[59] = r),
      (t[60] = fe))
    : (fe = t[60]);
  let pe;
  t[61] !== B.Subscribe || t[62] !== fe
    ? ((pe = (0, X.jsx)(B.Subscribe, { selector: qt, children: fe })),
      (t[61] = B.Subscribe),
      (t[62] = fe),
      (t[63] = pe))
    : (pe = t[63]);
  let me;
  return (
    t[64] !== pe || t[65] !== V
      ? ((me = (0, X.jsx)(`form`, {
          className: `flex flex-col gap-[var(--padding-panel)]`,
          onSubmit: V,
          children: pe,
        })),
        (t[64] = pe),
        (t[65] = V),
        (t[66] = me))
      : (me = t[66]),
    me
  );
}
function qt(e) {
  return { values: e.values, isDirty: e.isDirty };
}
function Jt() {
  return null;
}
function Yt({
  name: e,
  setupScript: t,
  setupPlatformScripts: n,
  cleanupScript: r,
  cleanupPlatformScripts: i,
  actions: a,
}) {
  return {
    name: e,
    setupScript: t,
    setupPlatformScripts: n,
    cleanupScript: r,
    cleanupPlatformScripts: i,
    actions: a,
  };
}
function Xt(e, t) {
  return pt({
    version: t,
    name: e.name,
    setupScript: e.setupScript,
    setupPlatformScripts: an(e.setupPlatformScripts),
    cleanupScript: e.cleanupScript,
    cleanupPlatformScripts: an(e.cleanupPlatformScripts),
    actions: e.actions,
  });
}
function Zt({
  values: e,
  isDirty: t,
  isSelectionReady: n,
  selectionError: r,
  isSaving: i,
}) {
  return i
    ? `saving`
    : n
      ? e.name.length === 0
        ? `missing-name`
        : t
          ? null
          : `no-changes`
      : r
        ? `project-error`
        : `loading-project`;
}
function Qt(e) {
  if (e == null) return null;
  switch (e) {
    case `loading-project`:
      return (0, X.jsx)(W, {
        id: `settings.localEnvironments.save.disabled.loadingProject`,
        defaultMessage: `Loading project information`,
        description: `Tooltip shown when save is disabled while project information loads`,
      });
    case `missing-name`:
      return (0, X.jsx)(W, {
        id: `settings.localEnvironments.save.disabled.name`,
        defaultMessage: `Add an environment name to save`,
        description: `Tooltip shown when save is disabled because the name is missing`,
      });
    case `no-changes`:
      return (0, X.jsx)(W, {
        id: `settings.localEnvironments.save.disabled.noChanges`,
        defaultMessage: `No changes to save`,
        description: `Tooltip shown when save is disabled because there are no changes`,
      });
    case `project-error`:
      return (0, X.jsx)(W, {
        id: `settings.localEnvironments.save.disabled.projectError`,
        defaultMessage: `Retry loading project information to save`,
        description: `Tooltip shown when save is disabled because project information failed to load`,
      });
    case `saving`:
      return (0, X.jsx)(W, {
        id: `settings.localEnvironments.save.disabled.saving`,
        defaultMessage: `Saving…`,
        description: `Tooltip shown when save is disabled because a save is already in progress`,
      });
  }
}
function $t(e, t) {
  return t === `cleanup`
    ? {
        scriptField: `cleanupPlatformScripts`,
        scripts: e.cleanupPlatformScripts,
      }
    : { scriptField: `setupPlatformScripts`, scripts: e.setupPlatformScripts };
}
function en(e, t, n) {
  if (n === `default`) return t === `setup` ? e.setupScript : e.cleanupScript;
  let { scripts: r } = $t(e, t);
  return r[n] ?? ``;
}
function tn(e) {
  return e === `darwin` || e === `linux` || e === `win32` ? e : `darwin`;
}
function nn(e) {
  return [
    { id: `darwin`, label: e.formatMessage(It.darwin) },
    { id: `linux`, label: e.formatMessage(It.linux) },
    { id: `win32`, label: e.formatMessage(It.win32) },
  ];
}
function rn(e) {
  return [
    {
      id: `default`,
      label: e.formatMessage({
        id: `settings.localEnvironments.environment.script.default`,
        defaultMessage: `Default`,
        description: `Label for default local environment lifecycle script`,
      }),
    },
    ...nn(e),
  ];
}
function an(e) {
  let t = {};
  for (let n of Ct) {
    let r = e[n];
    r && r.length > 0 && (t[n] = r);
  }
  return t;
}
var on,
  sn,
  X,
  cn = e(() => {
    ((on = g()),
      Ot(),
      n(),
      d(),
      l(),
      (sn = t(f(), 1)),
      H(),
      O(),
      S(),
      b(),
      fe(),
      dt(),
      B(),
      _e(),
      Pe(),
      U(),
      N(),
      Re(),
      Je(),
      Qe(),
      r(),
      Ft(),
      Lt(),
      ct(),
      st(),
      De(),
      Ze(),
      m(),
      yt(),
      gt(),
      Vt(),
      Gt(),
      vt(),
      (X = v()));
  });
function ln(e) {
  let t = (0, pn.c)(43),
    {
      workspaceRoot: n,
      workspaceGroup: r,
      configExists: i,
      initialEnvironment: a,
      parseErrorMessage: o,
      readErrorMessage: s,
      onEdit: c,
    } = e,
    l = i && a != null,
    u;
  t[0] === a?.actions
    ? (u = t[1])
    : ((u = a?.actions ?? []), (t[0] = a?.actions), (t[1] = u));
  let d = u,
    f = a?.setup.script ?? ``,
    p = a?.cleanup?.script ?? ``,
    m = a?.setup.darwin?.script ?? ``,
    h = a?.setup.linux?.script ?? ``,
    g = a?.setup.win32?.script ?? ``,
    _ = a?.cleanup?.darwin?.script ?? ``,
    v = a?.cleanup?.linux?.script ?? ``,
    y = a?.cleanup?.win32?.script ?? ``,
    ee = m.length > 0 || h.length > 0 || g.length > 0,
    b = _.length > 0 || v.length > 0 || y.length > 0,
    te;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((te = (0, Z.jsx)(K.Header, {
        title: (0, Z.jsx)(W, {
          id: `settings.localEnvironments.workspace.title`,
          defaultMessage: `Project`,
          description: `Title for the workspace summary section`,
        }),
      })),
      (t[2] = te))
    : (te = t[2]);
  let x;
  t[3] !== r || t[4] !== n
    ? ((x = (0, Z.jsxs)(K, {
        children: [
          te,
          (0, Z.jsx)(K.Content, {
            children: (0, Z.jsx)(q, {
              children: (0, Z.jsx)(Ht, { workspaceRoot: n, workspaceGroup: r }),
            }),
          }),
        ],
      })),
      (t[3] = r),
      (t[4] = n),
      (t[5] = x))
    : (x = t[5]);
  let S;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = (0, Z.jsx)(W, {
        id: `settings.localEnvironments.environment.title`,
        defaultMessage: `Environment details`,
        description: `Title for local environment details section`,
      })),
      (t[6] = S))
    : (S = t[6]);
  let C;
  t[7] === l
    ? (C = t[8])
    : ((C = l
        ? (0, Z.jsx)(W, {
            id: `settings.localEnvironments.environment.edit`,
            defaultMessage: `Edit local environment`,
            description: `Button label to edit a local environment`,
          })
        : (0, Z.jsx)(W, {
            id: `settings.localEnvironments.environment.create`,
            defaultMessage: `Create local environment`,
            description: `Button label to create a local environment`,
          })),
      (t[7] = l),
      (t[8] = C));
  let T;
  t[9] !== c || t[10] !== C
    ? ((T = (0, Z.jsx)(K.Header, {
        title: S,
        actions: (0, Z.jsx)(F, {
          color: `primary`,
          size: `toolbar`,
          onClick: c,
          children: C,
        }),
      })),
      (t[9] = c),
      (t[10] = C),
      (t[11] = T))
    : (T = t[11]);
  let E;
  t[12] !== l || t[13] !== a
    ? ((E =
        l && a
          ? (0, Z.jsx)(q, {
              children: (0, Z.jsx)(Ue, {
                label: (0, Z.jsx)(W, {
                  id: `settings.localEnvironments.environment.name`,
                  defaultMessage: `Name`,
                  description: `Label for environment name input`,
                }),
                control: (0, Z.jsx)(`span`, {
                  className: `text-sm text-token-text-secondary`,
                  children: a.name,
                }),
              }),
            })
          : (0, Z.jsx)(q, {
              children: (0, Z.jsx)(Ue, {
                label: (0, Z.jsx)(W, {
                  id: `settings.localEnvironments.environment.empty`,
                  defaultMessage: `No local environment is configured for this project yet`,
                  description: `Empty state when no local environment is configured`,
                }),
                control: null,
              }),
            })),
      (t[12] = l),
      (t[13] = a),
      (t[14] = E))
    : (E = t[14]);
  let D;
  t[15] === o
    ? (D = t[16])
    : ((D = o
        ? (0, Z.jsx)(`div`, {
            className: `mt-2 text-sm text-token-error-foreground`,
            children: (0, Z.jsx)(W, {
              id: `settings.localEnvironments.file.parseError`,
              defaultMessage: `Unable to parse the existing file. Saving will overwrite it. ({error})`,
              description: `Parse error message for local environment file`,
              values: { error: o },
            }),
          })
        : null),
      (t[15] = o),
      (t[16] = D));
  let O;
  t[17] === s
    ? (O = t[18])
    : ((O = s
        ? (0, Z.jsx)(`div`, {
            className: `mt-2 text-sm text-token-error-foreground`,
            children: (0, Z.jsx)(W, {
              id: `settings.localEnvironments.file.readError`,
              defaultMessage: `Failed to load local environment data. ({error})`,
              description: `Read error message for local environment config`,
              values: { error: s },
            }),
          })
        : null),
      (t[17] = s),
      (t[18] = O));
  let k;
  t[19] !== E || t[20] !== D || t[21] !== O
    ? ((k = (0, Z.jsxs)(K.Content, { children: [E, D, O] })),
      (t[19] = E),
      (t[20] = D),
      (t[21] = O),
      (t[22] = k))
    : (k = t[22]);
  let A;
  t[23] !== k || t[24] !== T
    ? ((A = (0, Z.jsxs)(K, { children: [T, k] })),
      (t[23] = k),
      (t[24] = T),
      (t[25] = A))
    : (A = t[25]);
  let j;
  t[26] !== d ||
  t[27] !== _ ||
  t[28] !== v ||
  t[29] !== p ||
  t[30] !== y ||
  t[31] !== b ||
  t[32] !== l ||
  t[33] !== ee ||
  t[34] !== m ||
  t[35] !== h ||
  t[36] !== f ||
  t[37] !== g
    ? ((j = l
        ? (0, Z.jsxs)(Z.Fragment, {
            children: [
              (0, Z.jsxs)(K, {
                children: [
                  (0, Z.jsx)(K.Header, {
                    title: (0, Z.jsx)(W, {
                      id: `settings.localEnvironments.environment.setup`,
                      defaultMessage: `Setup script`,
                      description: `Label for environment setup script input`,
                    }),
                    subtitle: (0, Z.jsx)(W, {
                      id: `settings.localEnvironments.environment.setup.description`,
                      defaultMessage: `This script runs on worktree creation`,
                      description: `Description for environment setup script summary`,
                    }),
                    actions: (0, Z.jsx)(Rt, {}),
                  }),
                  (0, Z.jsxs)(K.Content, {
                    children: [
                      (0, Z.jsx)(w, {
                        language: `bash`,
                        content: f,
                        shouldWrapCode: !0,
                        codeContainerClassName: `max-h-40`,
                      }),
                      ee
                        ? (0, Z.jsx)(dn, {
                            darwinScript: m,
                            linuxScript: h,
                            windowsScript: g,
                            title: (0, Z.jsx)(W, {
                              id: `settings.localEnvironments.environment.setup.platformOverrides`,
                              defaultMessage: `Platform overrides`,
                              description: `Label for setup script platform overrides`,
                            }),
                            description: (0, Z.jsx)(W, {
                              id: `settings.localEnvironments.environment.setup.platformOverrides.description`,
                              defaultMessage: `Overrides the default script for specific OSes`,
                              description: `Description for setup script platform overrides`,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, Z.jsxs)(K, {
                children: [
                  (0, Z.jsx)(K.Header, {
                    title: (0, Z.jsx)(W, {
                      id: `settings.localEnvironments.environment.cleanup.summaryTitle`,
                      defaultMessage: `Cleanup script`,
                      description: `Label for environment cleanup script input`,
                    }),
                    subtitle: (0, Z.jsx)(W, {
                      id: `settings.localEnvironments.environment.cleanup.summaryDescription`,
                      defaultMessage: `This script runs before a worktree is deleted`,
                      description: `Description for environment cleanup script summary`,
                    }),
                  }),
                  (0, Z.jsxs)(K.Content, {
                    children: [
                      p.length > 0
                        ? (0, Z.jsx)(w, {
                            language: `bash`,
                            content: p,
                            shouldWrapCode: !0,
                            codeContainerClassName: `max-h-40`,
                          })
                        : (0, Z.jsx)(q, {
                            children: (0, Z.jsx)(Ue, {
                              label: (0, Z.jsx)(W, {
                                id: `settings.localEnvironments.environment.cleanup.empty`,
                                defaultMessage: `No cleanup script configured`,
                                description: `Empty state for the cleanup script summary`,
                              }),
                              control: null,
                            }),
                          }),
                      b
                        ? (0, Z.jsx)(dn, {
                            darwinScript: _,
                            linuxScript: v,
                            windowsScript: y,
                            title: (0, Z.jsx)(W, {
                              id: `settings.localEnvironments.environment.cleanup.platformOverrides`,
                              defaultMessage: `Platform overrides`,
                              description: `Label for cleanup script platform overrides`,
                            }),
                            description: (0, Z.jsx)(W, {
                              id: `settings.localEnvironments.environment.cleanup.platformOverrides.description`,
                              defaultMessage: `Overrides the default cleanup script for specific OSes`,
                              description: `Description for cleanup script platform overrides`,
                            }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
              (0, Z.jsxs)(K, {
                children: [
                  (0, Z.jsx)(K.Header, {
                    title: (0, Z.jsx)(W, {
                      id: `settings.localEnvironments.environment.actionsLabel`,
                      defaultMessage: `Actions`,
                      description: `Label for actions count in local environment summary`,
                    }),
                    subtitle: (0, Z.jsx)(W, { ...Pt.actionsDescription }),
                  }),
                  (0, Z.jsx)(K.Content, {
                    children: (0, Z.jsx)(q, {
                      children:
                        d.length > 0
                          ? d.map(un)
                          : (0, Z.jsx)(Ue, {
                              label: (0, Z.jsx)(W, { ...Pt.actionsEmpty }),
                              control: null,
                            }),
                    }),
                  }),
                ],
              }),
            ],
          })
        : null),
      (t[26] = d),
      (t[27] = _),
      (t[28] = v),
      (t[29] = p),
      (t[30] = y),
      (t[31] = b),
      (t[32] = l),
      (t[33] = ee),
      (t[34] = m),
      (t[35] = h),
      (t[36] = f),
      (t[37] = g),
      (t[38] = j))
    : (j = t[38]);
  let M;
  return (
    t[39] !== A || t[40] !== j || t[41] !== x
      ? ((M = (0, Z.jsxs)(Z.Fragment, { children: [x, A, j] })),
        (t[39] = A),
        (t[40] = j),
        (t[41] = x),
        (t[42] = M))
      : (M = t[42]),
    M
  );
}
function un(e, t) {
  return (0, Z.jsx)(
    Ue,
    {
      icon: (0, Z.jsx)(`span`, {
        className: `text-token-text-secondary`,
        children: (0, Z.jsx)(St, { icon: e.icon ?? `tool` }),
      }),
      label: e.name,
      control: null,
    },
    `${e.name}-${t}`,
  );
}
function dn(e) {
  let t = (0, pn.c)(18),
    {
      darwinScript: n,
      linuxScript: r,
      windowsScript: i,
      title: a,
      description: o,
    } = e,
    s;
  t[0] === a
    ? (s = t[1])
    : ((s = (0, Z.jsx)(`div`, {
        className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
        children: a,
      })),
      (t[0] = a),
      (t[1] = s));
  let c;
  t[2] === o
    ? (c = t[3])
    : ((c = (0, Z.jsx)(`div`, {
        className: `text-sm text-token-text-secondary`,
        children: o,
      })),
      (t[2] = o),
      (t[3] = c));
  let l;
  t[4] !== s || t[5] !== c
    ? ((l = (0, Z.jsxs)(`div`, {
        className: `flex flex-col gap-1`,
        children: [s, c],
      })),
      (t[4] = s),
      (t[5] = c),
      (t[6] = l))
    : (l = t[6]);
  let u;
  t[7] === n
    ? (u = t[8])
    : ((u =
        n.length > 0
          ? (0, Z.jsx)(fn, { platform: `darwin`, script: n })
          : null),
      (t[7] = n),
      (t[8] = u));
  let d;
  t[9] === r
    ? (d = t[10])
    : ((d =
        r.length > 0 ? (0, Z.jsx)(fn, { platform: `linux`, script: r }) : null),
      (t[9] = r),
      (t[10] = d));
  let f;
  t[11] === i
    ? (f = t[12])
    : ((f =
        i.length > 0 ? (0, Z.jsx)(fn, { platform: `win32`, script: i }) : null),
      (t[11] = i),
      (t[12] = f));
  let p;
  return (
    t[13] !== l || t[14] !== u || t[15] !== d || t[16] !== f
      ? ((p = (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-3`,
          children: [l, u, d, f],
        })),
        (t[13] = l),
        (t[14] = u),
        (t[15] = d),
        (t[16] = f),
        (t[17] = p))
      : (p = t[17]),
    p
  );
}
function fn(e) {
  let t = (0, pn.c)(7),
    { platform: n, script: r } = e,
    i = It[n],
    a;
  t[0] === i
    ? (a = t[1])
    : ((a = (0, Z.jsx)(`div`, {
        className: `text-xs font-medium tracking-wide text-token-text-secondary uppercase`,
        children: (0, Z.jsx)(W, { ...i }),
      })),
      (t[0] = i),
      (t[1] = a));
  let o;
  t[2] === r
    ? (o = t[3])
    : ((o = (0, Z.jsx)(w, {
        language: `bash`,
        content: r,
        shouldWrapCode: !0,
        codeContainerClassName: `max-h-40`,
      })),
      (t[2] = r),
      (t[3] = o));
  let s;
  return (
    t[4] !== a || t[5] !== o
      ? ((s = (0, Z.jsxs)(`div`, {
          className: `flex flex-col gap-2`,
          children: [a, o],
        })),
        (t[4] = a),
        (t[5] = o),
        (t[6] = s))
      : (s = t[6]),
    s
  );
}
var pn,
  Z,
  mn = e(() => {
    ((pn = g()),
      H(),
      O(),
      b(),
      Ft(),
      Lt(),
      ct(),
      G(),
      st(),
      yt(),
      Vt(),
      Gt(),
      (Z = v()));
  });
function hn(e) {
  let t = (0, wn.c)(14),
    {
      groups: n,
      hostId: r,
      isLoading: i,
      onAddWorkspace: a,
      onCreateEnvironment: o,
      onSelectEnvironment: s,
    } = e,
    c;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((c = (0, Q.jsx)(W, { ...Pt.selectProject })), (t[0] = c))
    : (c = t[0]);
  let l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(W, {
        id: `settings.localEnvironments.workspace.add`,
        defaultMessage: `Add project`,
        description: `Button label to add a new workspace`,
      })),
      (t[1] = l))
    : (l = t[1]);
  let u;
  t[2] === a
    ? (u = t[3])
    : ((u = (0, Q.jsx)(K.Header, {
        title: c,
        actions: (0, Q.jsx)(F, {
          color: `secondary`,
          size: `toolbar`,
          onClick: a,
          children: l,
        }),
      })),
      (t[2] = a),
      (t[3] = u));
  let d;
  t[4] !== n ||
  t[5] !== r ||
  t[6] !== i ||
  t[7] !== a ||
  t[8] !== o ||
  t[9] !== s
    ? ((d = (0, Q.jsx)(K.Content, {
        children: (0, Q.jsx)(`div`, {
          className: `flex flex-col gap-2`,
          children: (0, Q.jsx)(gn, {
            groups: n,
            hostId: r,
            isLoading: i,
            onAddWorkspace: a,
            onCreateEnvironment: o,
            onSelectEnvironment: s,
          }),
        }),
      })),
      (t[4] = n),
      (t[5] = r),
      (t[6] = i),
      (t[7] = a),
      (t[8] = o),
      (t[9] = s),
      (t[10] = d))
    : (d = t[10]);
  let f;
  return (
    t[11] !== u || t[12] !== d
      ? ((f = (0, Q.jsxs)(K, { className: `gap-2`, children: [u, d] })),
        (t[11] = u),
        (t[12] = d),
        (t[13] = f))
      : (f = t[13]),
    f
  );
}
function gn(e) {
  let t = (0, wn.c)(28),
    {
      groups: n,
      hostId: r,
      isLoading: i,
      onAddWorkspace: a,
      onCreateEnvironment: o,
      onSelectEnvironment: s,
    } = e,
    c = je(),
    l,
    u,
    d,
    f,
    p;
  if (
    t[0] !== n ||
    t[1] !== r ||
    t[2] !== c ||
    t[3] !== i ||
    t[4] !== a ||
    t[5] !== o ||
    t[6] !== s
  ) {
    p = Symbol.for(`react.early_return_sentinel`);
    bb0: {
      let e = n.filter(_n);
      if (i) {
        let e;
        (t[12] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(q, {
              children: (0, Q.jsxs)(`div`, {
                className: `flex items-center gap-2 p-3 text-sm text-token-text-secondary`,
                children: [
                  (0, Q.jsx)(E, { className: `icon-xs` }),
                  (0, Q.jsx)(W, {
                    id: `settings.localEnvironments.workspaceSelect.loading`,
                    defaultMessage: `Loading projects.`,
                    description: `Loading message while workspace options are fetched`,
                  }),
                ],
              }),
            })),
            (t[12] = e))
          : (e = t[12]),
          (p = e));
        break bb0;
      }
      if (e.length === 0) {
        let e;
        t[13] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((e = (0, Q.jsx)(W, {
              id: `settings.localEnvironments.workspaceSelect.empty`,
              defaultMessage: `No projects yet. Add one to configure local environments.`,
              description: `Empty state when no workspace roots are available`,
            })),
            (t[13] = e))
          : (e = t[13]);
        let n;
        t[14] === Symbol.for(`react.memo_cache_sentinel`)
          ? ((n = (0, Q.jsx)(W, {
              id: `settings.localEnvironments.workspace.add`,
              defaultMessage: `Add project`,
              description: `Button label to add a new workspace`,
            })),
            (t[14] = n))
          : (n = t[14]);
        let r;
        (t[15] === a
          ? (r = t[16])
          : ((r = (0, Q.jsx)(q, {
              children: (0, Q.jsxs)(`div`, {
                className: `flex flex-col gap-3 p-3 text-sm text-token-text-secondary`,
                children: [
                  e,
                  (0, Q.jsx)(`div`, {
                    children: (0, Q.jsx)(F, {
                      color: `primary`,
                      size: `toolbar`,
                      onClick: a,
                      children: n,
                    }),
                  }),
                ],
              }),
            })),
            (t[15] = a),
            (t[16] = r)),
          (p = r));
        break bb0;
      }
      ((l = `flex flex-col gap-3`),
        (u = `list`),
        t[17] === c
          ? (d = t[18])
          : ((d = c.formatMessage({
              id: `settings.localEnvironments.workspaceSelect.listLabel`,
              defaultMessage: `Available projects`,
              description: `Aria label for the workspace selection list`,
            })),
            (t[17] = c),
            (t[18] = d)));
      let m;
      (t[19] !== r || t[20] !== o || t[21] !== s
        ? ((m = (e) =>
            (0, Q.jsx)(
              vn,
              {
                group: e,
                hostId: r,
                onCreateEnvironment: o,
                onSelectEnvironment: s,
              },
              e.path,
            )),
          (t[19] = r),
          (t[20] = o),
          (t[21] = s),
          (t[22] = m))
        : (m = t[22]),
        (f = e.map(m)));
    }
    ((t[0] = n),
      (t[1] = r),
      (t[2] = c),
      (t[3] = i),
      (t[4] = a),
      (t[5] = o),
      (t[6] = s),
      (t[7] = l),
      (t[8] = u),
      (t[9] = d),
      (t[10] = f),
      (t[11] = p));
  } else ((l = t[7]), (u = t[8]), (d = t[9]), (f = t[10]), (p = t[11]));
  if (p !== Symbol.for(`react.early_return_sentinel`)) return p;
  let m;
  return (
    t[23] !== l || t[24] !== u || t[25] !== d || t[26] !== f
      ? ((m = (0, Q.jsx)(`div`, {
          className: l,
          role: u,
          "aria-label": d,
          children: f,
        })),
        (t[23] = l),
        (t[24] = u),
        (t[25] = d),
        (t[26] = f),
        (t[27] = m))
      : (m = t[27]),
    m
  );
}
function _n(e) {
  return e.path != null;
}
function vn(e) {
  let t = (0, wn.c)(21),
    { group: n, hostId: r, onCreateEnvironment: i, onSelectEnvironment: a } = e,
    o = je(),
    s;
  t[0] !== n.path || t[1] !== r
    ? ((s = { params: { hostId: r, workspaceRoot: n.path }, select: yn }),
      (t[0] = n.path),
      (t[1] = r),
      (t[2] = s))
    : (s = t[2]);
  let { data: c, isLoading: l, error: u } = _(`local-environments`, s),
    d = c === void 0 ? [] : c,
    [f, p] = (0, Tn.useState)(!1),
    { projectEnvironments: m, inheritedEnvironments: h } = Sn(d, n.path),
    g = et(m),
    v = n.isCodexWorktree ? te : ae,
    y = n.repositoryData?.ownerRepo?.owner ?? null,
    ee = l,
    b = u != null,
    x = m.length > 0 || h.length > 0,
    S;
  t[3] === o
    ? (S = t[4])
    : ((S = o.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.viewAction`,
        defaultMessage: `View`,
        description: `Action label to view a local environment`,
      })),
      (t[3] = o),
      (t[4] = S));
  let C = S,
    w;
  t[5] === o
    ? (w = t[6])
    : ((w = o.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.addLabel`,
        defaultMessage: `Add environment`,
        description: `Aria label for add environment button`,
      })),
      (t[5] = o),
      (t[6] = w));
  let T = w,
    D = it(d, n.path),
    O;
  t[7] === o
    ? (O = t[8])
    : ((O = o.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.loadingLabel`,
        defaultMessage: `Loading environment`,
        description: `Label for environment row while loading`,
      })),
      (t[7] = o),
      (t[8] = O));
  let k = O,
    A;
  t[9] === o
    ? (A = t[10])
    : ((A = o.formatMessage({
        id: `settings.localEnvironments.workspaceSelect.errorLabel`,
        defaultMessage: `Environment needs attention`,
        description: `Label for environment row when environment data fails`,
      })),
      (t[9] = o),
      (t[10] = A));
  let j = A,
    M;
  t[11] === v
    ? (M = t[12])
    : ((M = (0, Q.jsx)(v, {
        className: `icon-sm shrink-0 text-token-text-secondary`,
      })),
      (t[11] = v),
      (t[12] = M));
  let N;
  t[13] === n.label
    ? (N = t[14])
    : ((N = (0, Q.jsx)(`span`, {
        className: `truncate font-medium`,
        children: n.label,
      })),
      (t[13] = n.label),
      (t[14] = N));
  let P;
  t[15] === y
    ? (P = t[16])
    : ((P = y
        ? (0, Q.jsx)(`span`, {
            className: `truncate text-token-text-secondary`,
            children: y,
          })
        : null),
      (t[15] = y),
      (t[16] = P));
  let I;
  t[17] !== N || t[18] !== P
    ? ((I = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 items-center gap-2 text-sm text-token-text-primary`,
        children: [N, P],
      })),
      (t[17] = N),
      (t[18] = P),
      (t[19] = I))
    : (I = t[19]);
  let L;
  return (
    t[20] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((L = (0, Q.jsx)(re, { className: `icon-xs` })), (t[20] = L))
      : (L = t[20]),
    (0, Q.jsxs)(q, {
      className: `p-0`,
      children: [
        (0, Q.jsxs)(`div`, {
          className: `flex items-center justify-between gap-2 px-4 py-3`,
          children: [
            (0, Q.jsxs)(`button`, {
              className: `flex min-w-0 items-center gap-3 text-left`,
              type: `button`,
              onClick: () => {
                g != null && a(n.path, g);
              },
              children: [M, I],
            }),
            (0, Q.jsx)(F, {
              className: `w-9 justify-center`,
              "aria-label": T,
              color: `secondary`,
              size: `toolbar`,
              onClick: () => {
                i(n.path, D);
              },
              children: L,
            }),
          ],
        }),
        ee || b || x
          ? (0, Q.jsx)(`div`, {
              className: `border-t border-token-border`,
              children: ee
                ? (0, Q.jsx)(`div`, {
                    className: `px-4 py-3`,
                    children: (0, Q.jsxs)(`div`, {
                      className: `flex items-center gap-2 text-sm text-token-text-secondary`,
                      children: [
                        (0, Q.jsx)(E, { className: `icon-xs` }),
                        (0, Q.jsx)(`span`, { children: k }),
                      ],
                    }),
                  })
                : b
                  ? (0, Q.jsx)(`div`, {
                      className: `px-4 py-3`,
                      children: (0, Q.jsx)(`div`, {
                        className: `flex items-center gap-2 text-sm text-token-error-foreground`,
                        children: (0, Q.jsx)(`span`, { children: j }),
                      }),
                    })
                  : (0, Q.jsxs)(`div`, {
                      className: `flex flex-col divide-y divide-token-border`,
                      children: [
                        m.map((e) =>
                          (0, Q.jsx)(
                            bn,
                            {
                              environment: e,
                              actionLabel: C,
                              errorLabel: j,
                              onSelectEnvironment: () => {
                                a(n.path, e.configPath);
                              },
                            },
                            e.configPath,
                          ),
                        ),
                        h.length > 0
                          ? (0, Q.jsxs)(`div`, {
                              className: `flex flex-col`,
                              children: [
                                (0, Q.jsxs)(`button`, {
                                  className: `flex cursor-interaction items-center justify-between gap-3 px-4 py-3 text-left text-sm text-token-text-secondary hover:bg-token-list-hover-background`,
                                  type: `button`,
                                  "aria-expanded": f,
                                  onClick: () => {
                                    p(!f);
                                  },
                                  children: [
                                    (0, Q.jsx)(`span`, {
                                      className: `min-w-0 truncate`,
                                      children: (0, Q.jsx)(W, {
                                        id: `settings.localEnvironments.workspaceSelect.inherited`,
                                        defaultMessage: `{count, plural, one {# environment in a parent folder} other {# environments in parent folders}}`,
                                        description: `Accordion label for local environments inherited from parent folders`,
                                        values: { count: h.length },
                                      }),
                                    }),
                                    (0, Q.jsx)(R, {
                                      className: ue(
                                        `icon-2xs shrink-0 text-token-input-placeholder-foreground transition-transform`,
                                        f && `rotate-180`,
                                      ),
                                    }),
                                  ],
                                }),
                                f
                                  ? (0, Q.jsx)(`div`, {
                                      className: `flex flex-col divide-y divide-token-border border-t border-token-border`,
                                      children: h.map((e) =>
                                        (0, Q.jsx)(
                                          bn,
                                          {
                                            environment: e,
                                            actionLabel: C,
                                            errorLabel: j,
                                            onSelectEnvironment: () => {
                                              a(n.path, e.configPath);
                                            },
                                          },
                                          e.configPath,
                                        ),
                                      ),
                                    })
                                  : null,
                              ],
                            })
                          : null,
                      ],
                    }),
            })
          : null,
      ],
    })
  );
}
function yn(e) {
  return e.environments;
}
function bn(e) {
  let t = (0, wn.c)(19),
    {
      environment: n,
      actionLabel: r,
      errorLabel: i,
      onSelectEnvironment: a,
    } = e,
    o;
  t[0] === n.configPath
    ? (o = t[1])
    : ((o = xn(n.configPath)), (t[0] = n.configPath), (t[1] = o));
  let s = o,
    c =
      n.type === `success` &&
      n.environment?.name != null &&
      n.environment.name.length > 0,
    l = c ? n.environment.name : s,
    u = n.type === `error`,
    d = u || (c && s !== l) ? s : null,
    f = u ? `text-token-error-foreground` : `text-token-text-primary`,
    p = u ? i : l,
    m;
  t[2] !== f || t[3] !== p
    ? ((m = (0, Q.jsx)(`span`, { className: f, children: p })),
      (t[2] = f),
      (t[3] = p),
      (t[4] = m))
    : (m = t[4]);
  let h;
  t[5] === d
    ? (h = t[6])
    : ((h = d
        ? (0, Q.jsx)(`span`, {
            className: `text-xs text-token-description-foreground`,
            children: d,
          })
        : null),
      (t[5] = d),
      (t[6] = h));
  let g;
  t[7] !== m || t[8] !== h
    ? ((g = (0, Q.jsxs)(`div`, {
        className: `flex min-w-0 flex-col gap-0.5 text-sm`,
        children: [m, h],
      })),
      (t[7] = m),
      (t[8] = h),
      (t[9] = g))
    : (g = t[9]);
  let _;
  t[10] !== a || t[11] !== g
    ? ((_ = (0, Q.jsx)(`button`, {
        className: `flex min-w-0 flex-1 text-left`,
        type: `button`,
        onClick: a,
        children: g,
      })),
      (t[10] = a),
      (t[11] = g),
      (t[12] = _))
    : (_ = t[12]);
  let v;
  t[13] !== r || t[14] !== a
    ? ((v = (0, Q.jsx)(F, {
        color: `ghost`,
        size: `toolbar`,
        onClick: a,
        children: r,
      })),
      (t[13] = r),
      (t[14] = a),
      (t[15] = v))
    : (v = t[15]);
  let y;
  return (
    t[16] !== _ || t[17] !== v
      ? ((y = (0, Q.jsxs)(`div`, {
          className: `flex items-center justify-between gap-3 px-4 py-3`,
          children: [_, v],
        })),
        (t[16] = _),
        (t[17] = v),
        (t[18] = y))
      : (y = t[18]),
    y
  );
}
function xn(e) {
  let t = Ae(e),
    n = t.split(`/`).filter(Boolean);
  return n[n.length - 1] ?? t;
}
function Sn(e, t) {
  let n = Ae(t),
    r = [],
    i = [];
  for (let t of e) Cn(t.configPath) === n ? r.push(t) : i.push(t);
  return { projectEnvironments: r, inheritedEnvironments: i };
}
function Cn(e) {
  let t = Ae(e),
    n = t.lastIndexOf(`/.codex/environments/`);
  return n === -1 ? t : t.slice(0, n);
}
var wn,
  Tn,
  Q,
  En = e(() => {
    ((wn = g()),
      ce(),
      (Tn = t(f(), 1)),
      H(),
      O(),
      P(),
      me(),
      pe(),
      oe(),
      C(),
      ct(),
      st(),
      at(),
      ke(),
      m(),
      Ft(),
      (Q = v()));
  });
function Dn() {
  let e = (0, An.c)(109),
    [t] = Oe(),
    n = Te(),
    r = Se(),
    i = Ee(Le) != null,
    a = i ? Ie(t, n.state) : null,
    s;
  e[0] === t
    ? (s = e[1])
    : ((s = t.get(`workspaceRoot`)), (e[0] = t), (e[1] = s));
  let c = s,
    l;
  e[2] === t ? (l = e[3]) : ((l = t.get(`configPath`)), (e[2] = t), (e[3] = l));
  let u = l,
    d;
  e[4] === t ? (d = e[5]) : ((d = t.get(`mode`)), (e[4] = t), (e[5] = d));
  let f = d,
    { selectedHostId: p } = We(),
    m = a?.hostId ?? p,
    { data: h, isLoading: g } = o(ze, { hostId: m }),
    v;
  e[6] === h?.roots
    ? (v = e[7])
    : ((v = h?.roots ?? []), (e[6] = h?.roots), (e[7] = v));
  let ee = v,
    b = Ge(y(ge), m),
    [te, x] = (0, jn.useState)(a?.workspaceRoot ?? c),
    [S, C] = (0, jn.useState)(a?.configPath ?? u),
    [w, E] = (0, jn.useState)(a != null || f === `edit`),
    D = te ?? null,
    O = D != null && (a != null || ee.includes(D)) ? D : null,
    k = O == null ? null : (b.find((e) => e.path === O) ?? null),
    A = O == null,
    M;
  e[8] === m
    ? (M = e[9])
    : ((M = () => {
        if (m !== `local`) {
          T({ hostId: m });
          return;
        }
        j();
      }),
      (e[8] = m),
      (e[9] = M));
  let N = M,
    P;
  e[10] !== E || e[11] !== C || e[12] !== x
    ? ((P = () => {
        (x(null), C(null), E(!1));
      }),
      (e[10] = E),
      (e[11] = C),
      (e[12] = x),
      (e[13] = P))
    : (P = e[13]);
  let F = P,
    I;
  e[14] !== a || e[15] !== r || e[16] !== E
    ? ((I = () => {
        if (a != null) {
          r(a.returnTo, { replace: !0 });
          return;
        }
        E(!1);
      }),
      (e[14] = a),
      (e[15] = r),
      (e[16] = E),
      (e[17] = I))
    : (I = e[17]);
  let L = I,
    ne;
  e[18] !== E || e[19] !== C || e[20] !== x
    ? ((ne = (e, t) => {
        (x(e), C(t), E(!1));
      }),
      (e[18] = E),
      (e[19] = C),
      (e[20] = x),
      (e[21] = ne))
    : (ne = e[21]);
  let re = ne,
    ie;
  e[22] !== E || e[23] !== C || e[24] !== x
    ? ((ie = (e, t) => {
        (x(e), C(t), E(!0));
      }),
      (e[22] = E),
      (e[23] = C),
      (e[24] = x),
      (e[25] = ie))
    : (ie = e[25]);
  let ae = ie,
    R = O ?? ``,
    oe;
  e[26] !== m || e[27] !== R
    ? ((oe = { hostId: m, workspaceRoot: R }),
      (e[26] = m),
      (e[27] = R),
      (e[28] = oe))
    : (oe = e[28]);
  let se = !A && O != null,
    ce;
  e[29] === se
    ? (ce = e[30])
    : ((ce = { enabled: se }), (e[29] = se), (e[30] = ce));
  let z;
  e[31] !== oe || e[32] !== ce
    ? ((z = { params: oe, queryConfig: ce, select: On }),
      (e[31] = oe),
      (e[32] = ce),
      (e[33] = z))
    : (z = e[33]);
  let { data: le, isLoading: ue, error: B } = _(`local-environments`, z),
    de;
  e[34] === le
    ? (de = e[35])
    : ((de = le === void 0 ? [] : le), (e[34] = le), (e[35] = de));
  let V = de,
    fe;
  e[36] === V ? (fe = e[37]) : ((fe = et(V)), (e[36] = V), (e[37] = fe));
  let pe = fe,
    me;
  e[38] !== a || e[39] !== V || e[40] !== B || e[41] !== ue || e[42] !== O
    ? ((me =
        a != null && a.configPath == null && !ue && B == null && O != null
          ? it(V, O)
          : null),
      (e[38] = a),
      (e[39] = V),
      (e[40] = B),
      (e[41] = ue),
      (e[42] = O),
      (e[43] = me))
    : (me = e[43]);
  let he = me,
    _e = S ?? a?.configPath ?? he ?? (a == null ? pe : null),
    ve = _e ?? ``,
    ye;
  e[44] !== m || e[45] !== ve
    ? ((ye = { configPath: ve, hostId: m }),
      (e[44] = m),
      (e[45] = ve),
      (e[46] = ye))
    : (ye = e[46]);
  let be = !A && O != null && _e != null,
    Ce;
  e[47] === be
    ? (Ce = e[48])
    : ((Ce = { enabled: be }), (e[47] = be), (e[48] = Ce));
  let H;
  e[49] !== ye || e[50] !== Ce
    ? ((H = { params: ye, queryConfig: Ce }),
      (e[49] = ye),
      (e[50] = Ce),
      (e[51] = H))
    : (H = e[51]);
  let { data: U, isLoading: we, error: De } = _(`local-environment-config`, H),
    ke = U?.configPath ?? ``,
    Ae;
  e[52] !== m || e[53] !== ke
    ? ((Ae = { configPath: ke, hostId: m }),
      (e[52] = m),
      (e[53] = ke),
      (e[54] = Ae))
    : (Ae = e[54]);
  let je = !A && O != null && !!U?.exists,
    Me;
  e[55] === je
    ? (Me = e[56])
    : ((Me = { enabled: je }), (e[55] = je), (e[56] = Me));
  let Ne;
  e[57] !== Ae || e[58] !== Me
    ? ((Ne = { params: Ae, queryConfig: Me }),
      (e[57] = Ae),
      (e[58] = Me),
      (e[59] = Ne))
    : (Ne = e[59]);
  let { data: Pe, error: Fe, isLoading: Re } = _(`local-environment`, Ne),
    Be = Pe?.environment.type === `success` ? Pe.environment.environment : null,
    Ve = Pe?.environment.type === `error` ? Pe.environment.error.message : null,
    He = De?.message ?? Fe?.message ?? B?.message ?? null,
    Ue;
  e[60] !== F || e[61] !== L || e[62] !== w || e[63] !== O || e[64] !== k
    ? ((Ue =
        O == null
          ? null
          : (0, $.jsx)(jt, {
              workspaceRoot: O,
              workspaceGroup: k,
              mode: w ? `edit` : void 0,
              onBack: w ? L : F,
            })),
      (e[60] = F),
      (e[61] = L),
      (e[62] = w),
      (e[63] = O),
      (e[64] = k),
      (e[65] = Ue))
    : (Ue = e[65]);
  let G = Ue,
    Ke = ue || we || Re;
  if (i && a == null) {
    let t;
    return (
      e[66] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((t = (0, $.jsx)(xe, {
            to: `/settings/local-environments`,
            replace: !0,
          })),
          (e[66] = t))
        : (t = e[66]),
      t
    );
  }
  if (A) {
    let t;
    e[67] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(W, {
          id: `settings.localEnvironments.workspaceSelect.description`,
          defaultMessage: `Local environments tell Codex how to set up worktrees for a project. {learnMore}`,
          description: `Description for the workspace selection step`,
          values: {
            learnMore: (0, $.jsx)(`a`, {
              className: `inline-flex items-center gap-1 text-base text-token-text-link-foreground`,
              href: Xe,
              target: `_blank`,
              rel: `noreferrer`,
              children: (0, $.jsx)(W, {
                id: `settings.localEnvironments.workspaceSelect.learnMore`,
                defaultMessage: `Learn more.`,
                description: `Link label for local environments docs`,
              }),
            }),
          },
        })),
        (e[67] = t))
      : (t = e[67]);
    let n;
    return (
      e[68] !== N ||
      e[69] !== ae ||
      e[70] !== re ||
      e[71] !== m ||
      e[72] !== b ||
      e[73] !== g
        ? ((n = (0, $.jsx)(kn, {
            subtitle: t,
            children: (0, $.jsx)(hn, {
              groups: b,
              hostId: m,
              isLoading: g,
              onAddWorkspace: N,
              onCreateEnvironment: ae,
              onSelectEnvironment: re,
            }),
          })),
          (e[68] = N),
          (e[69] = ae),
          (e[70] = re),
          (e[71] = m),
          (e[72] = b),
          (e[73] = g),
          (e[74] = n))
        : (n = e[74]),
      n
    );
  }
  if (Ke) {
    let t;
    e[75] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(K.Header, {
          title: (0, $.jsx)(W, {
            id: `settings.localEnvironments.loading.title`,
            defaultMessage: `Loading local environments`,
            description: `Loading state title for local environments settings`,
          }),
        })),
        (e[75] = t))
      : (t = e[75]);
    let n;
    e[76] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsxs)(K, {
          children: [
            t,
            (0, $.jsx)(K.Content, {
              children: (0, $.jsx)(q, {
                children: (0, $.jsx)(`div`, {
                  className: `p-3 text-sm text-token-text-secondary`,
                  children: (0, $.jsx)(W, {
                    id: `settings.localEnvironments.loading.body`,
                    defaultMessage: `Fetching your project configuration.`,
                    description: `Loading state body for local environments settings`,
                  }),
                }),
              }),
            }),
          ],
        })),
        (e[76] = n))
      : (n = e[76]);
    let r;
    return (
      e[77] === G
        ? (r = e[78])
        : ((r = (0, $.jsx)(kn, { backSlot: G, children: n })),
          (e[77] = G),
          (e[78] = r)),
      r
    );
  }
  if (!U || O == null) {
    let t;
    e[79] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, $.jsx)(K.Header, {
          title: (0, $.jsx)(W, {
            id: `settings.localEnvironments.unavailable.title`,
            defaultMessage: `Local environments unavailable`,
            description: `Title for missing local environment config state`,
          }),
        })),
        (e[79] = t))
      : (t = e[79]);
    let n;
    e[80] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = (0, $.jsxs)(K, {
          children: [
            t,
            (0, $.jsx)(K.Content, {
              children: (0, $.jsx)(q, {
                children: (0, $.jsx)(`div`, {
                  className: `p-3 text-sm text-token-text-secondary`,
                  children: (0, $.jsx)(W, {
                    id: `settings.localEnvironments.unavailable.body`,
                    defaultMessage: `We could not load local environment settings for this project.`,
                    description: `Body text for missing local environment config state`,
                  }),
                }),
              }),
            }),
          ],
        })),
        (e[80] = n))
      : (n = e[80]);
    let r;
    return (
      e[81] === G
        ? (r = e[82])
        : ((r = (0, $.jsx)(kn, { backSlot: G, children: n })),
          (e[81] = G),
          (e[82] = r)),
      r
    );
  }
  if (w) {
    let t;
    e[83] !== U.configPath ||
    e[84] !== U.exists ||
    e[85] !== L ||
    e[86] !== Be ||
    e[87] !== Ve ||
    e[88] !== He ||
    e[89] !== O ||
    e[90] !== m ||
    e[91] !== k
      ? ((t = (0, $.jsx)(Kt, {
          hostId: m,
          workspaceRoot: O,
          workspaceGroup: k,
          configPath: U.configPath,
          configExists: U.exists,
          initialEnvironment: Be,
          parseErrorMessage: Ve,
          readErrorMessage: He,
          onSaved: L,
        })),
        (e[83] = U.configPath),
        (e[84] = U.exists),
        (e[85] = L),
        (e[86] = Be),
        (e[87] = Ve),
        (e[88] = He),
        (e[89] = O),
        (e[90] = m),
        (e[91] = k),
        (e[92] = t))
      : (t = e[92]);
    let n;
    return (
      e[93] !== G || e[94] !== t
        ? ((n = (0, $.jsx)(kn, { backSlot: G, children: t })),
          (e[93] = G),
          (e[94] = t),
          (e[95] = n))
        : (n = e[95]),
      n
    );
  }
  let qe;
  e[96] === E
    ? (qe = e[97])
    : ((qe = () => {
        E(!0);
      }),
      (e[96] = E),
      (e[97] = qe));
  let Je;
  e[98] !== U.exists ||
  e[99] !== Be ||
  e[100] !== Ve ||
  e[101] !== He ||
  e[102] !== O ||
  e[103] !== k ||
  e[104] !== qe
    ? ((Je = (0, $.jsx)(ln, {
        workspaceRoot: O,
        workspaceGroup: k,
        configExists: U.exists,
        initialEnvironment: Be,
        parseErrorMessage: Ve,
        readErrorMessage: He,
        onEdit: qe,
      })),
      (e[98] = U.exists),
      (e[99] = Be),
      (e[100] = Ve),
      (e[101] = He),
      (e[102] = O),
      (e[103] = k),
      (e[104] = qe),
      (e[105] = Je))
    : (Je = e[105]);
  let Ye;
  return (
    e[106] !== G || e[107] !== Je
      ? ((Ye = (0, $.jsx)(kn, { backSlot: G, children: Je })),
        (e[106] = G),
        (e[107] = Je),
        (e[108] = Ye))
      : (Ye = e[108]),
    Ye
  );
}
function On(e) {
  return e.environments;
}
function kn(e) {
  let t = (0, An.c)(5),
    { backSlot: n, subtitle: r, children: i } = e,
    a;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((a = (0, $.jsx)(rt, { slug: `local-environments` })), (t[0] = a))
    : (a = t[0]);
  let o;
  return (
    t[1] !== n || t[2] !== i || t[3] !== r
      ? ((o = (0, $.jsx)(ut, {
          title: a,
          subtitle: r,
          backSlot: n,
          children: i,
        })),
        (t[1] = n),
        (t[2] = i),
        (t[3] = r),
        (t[4] = o))
      : (o = t[4]),
    o
  );
}
var An, jn, $;
e(() => {
  ((An = g()),
    d(),
    (jn = t(f(), 1)),
    H(),
    Ne(),
    qe(),
    M(),
    Be(),
    lt(),
    ct(),
    He(),
    Ke(),
    $e(),
    st(),
    De(),
    I(),
    at(),
    m(),
    Nt(),
    Fe(),
    cn(),
    mn(),
    En(),
    ($ = v()));
})();
export { Dn as LocalEnvironmentsSettings };
//# sourceMappingURL=local-environments-settings-page-q1SLOHGN.js.map
