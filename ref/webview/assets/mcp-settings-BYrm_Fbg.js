import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  C as r,
  Go as i,
  Jo as a,
  S as o,
  Vo as s,
  _ as c,
  _c as l,
  cc as u,
  gc as d,
  lc as f,
  qo as p,
  v as m,
  y as h,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  An as g,
  Ba as _,
  Em as v,
  Nn as y,
  Pn as b,
  Tm as x,
  Va as S,
  as as C,
  bs as w,
  dp as T,
  fp as E,
  gc as D,
  hh as O,
  is as k,
  kn as A,
  mh as ee,
  ns as te,
  ys as ne,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Fy as re,
  Iy as j,
  N as M,
  U as ie,
  Vy as N,
  vg as P,
  yg as ae,
  zy as F,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Kt as oe,
  Qt as se,
  Rt as ce,
  Wt as I,
  en as le,
  r as L,
  tn as ue,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  Au as R,
  Fm as de,
  Fn as fe,
  In as pe,
  Mu as me,
  Pm as he,
  Sc as ge,
  _c as z,
  ad as B,
  id as V,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  B as _e,
  H,
  V as ve,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  E as U,
  T as W,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0-BaxBxQFI.js";
import {
  n as ye,
  t as be,
} from "./app-initial~app-main~remote-conversation-page~pull-requests-page~plugin-detail-page~new-thr~ny8xzqbh-ClcWSvU7.js";
import {
  J as xe,
  d as G,
  f as Se,
  q as K,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import {
  r as Ce,
  t as we,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js";
import { n as Te, t as Ee } from "./tabs-DXhUD06H.js";
import { n as De, t as Oe } from "./control-group-B8InwDgE.js";
function q(e) {
  let t = (0, ke.c)(55),
    n = e.inputType === W.String,
    r = e.inputType === W.Array,
    i = e.inputType === W.Record,
    a = N(),
    o;
  t[0] === a
    ? (o = t[1])
    : ((o = a.formatMessage({
        id: `settings.editRow.headerPlaceholder`,
        defaultMessage: `Key`,
        description: `Placeholder for record key input`,
      })),
      (t[0] = a),
      (t[1] = o));
  let s = o,
    c;
  t[2] === a
    ? (c = t[3])
    : ((c = a.formatMessage({
        id: `settings.editRow.valuePlaceholder`,
        defaultMessage: `Value`,
        description: `Placeholder for record value input`,
      })),
      (t[2] = a),
      (t[3] = c));
  let l = c,
    u;
  t[4] === a
    ? (u = t[5])
    : ((u = a.formatMessage({
        id: `settings.editRow.removeEntry`,
        defaultMessage: `Remove entry`,
        description: `Label for removing an entry from a list`,
      })),
      (t[4] = a),
      (t[5] = u));
  let d = u,
    f,
    p;
  if (
    t[6] !== s ||
    t[7] !== e.inputType ||
    t[8] !== e.placeHolderValue ||
    t[9] !== l
  ) {
    if (((f = s), (p = l), e.inputType === W.Record)) {
      let [t] = e.placeHolderValue;
      ((f = t?.key ?? s), (p = t?.value ?? l));
    }
    ((t[6] = s),
      (t[7] = e.inputType),
      (t[8] = e.placeHolderValue),
      (t[9] = l),
      (t[10] = f),
      (t[11] = p));
  } else ((f = t[10]), (p = t[11]));
  let m;
  bb0: {
    if (!r) {
      let e;
      (t[12] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = []), (t[12] = e))
        : (e = t[12]),
        (m = e));
      break bb0;
    }
    if (e.value.length > 0) {
      m = e.value;
      break bb0;
    }
    let n;
    (t[13] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = [``]), (t[13] = n))
      : (n = t[13]),
      (m = n));
  }
  let h = m,
    g;
  bb1: {
    if (!i) {
      let e;
      (t[14] === Symbol.for(`react.memo_cache_sentinel`)
        ? ((e = []), (t[14] = e))
        : (e = t[14]),
        (g = e));
      break bb1;
    }
    if (e.value.length > 0) {
      g = e.value;
      break bb1;
    }
    let n;
    (t[15] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((n = [{ key: ``, value: `` }]), (t[15] = n))
      : (n = t[15]),
      (g = n));
  }
  let _ = g;
  if (n) {
    let r;
    t[16] === e.title
      ? (r = t[17])
      : ((r = (0, Y.jsx)(`p`, {
          className: `text-base font-medium text-token-text-primary`,
          children: e.title,
        })),
        (t[16] = e.title),
        (t[17] = r));
    let i =
        n && typeof e.placeHolderValue == `string`
          ? e.placeHolderValue
          : void 0,
      a;
    t[18] === e
      ? (a = t[19])
      : ((a = (t) => {
          e.onEdit(t.target.value);
        }),
        (t[18] = e),
        (t[19] = a));
    let o;
    t[20] !== e.disabled ||
    t[21] !== e.inputAriaLabel ||
    t[22] !== e.value ||
    t[23] !== i ||
    t[24] !== a
      ? ((o = (0, Y.jsx)(J, {
          "aria-label": e.inputAriaLabel,
          className: `text-base`,
          disabled: e.disabled,
          value: e.value,
          placeholder: i,
          onChange: a,
        })),
        (t[20] = e.disabled),
        (t[21] = e.inputAriaLabel),
        (t[22] = e.value),
        (t[23] = i),
        (t[24] = a),
        (t[25] = o))
      : (o = t[25]);
    let s;
    return (
      t[26] !== r || t[27] !== o
        ? ((s = (0, Y.jsxs)(`div`, {
            className: `flex flex-col gap-2 rounded-lg bg-token-input-background px-3 py-2`,
            children: [r, o],
          })),
          (t[26] = r),
          (t[27] = o),
          (t[28] = s))
        : (s = t[28]),
      s
    );
  }
  let v;
  t[29] === e.title
    ? (v = t[30])
    : ((v = (0, Y.jsx)(`p`, {
        className: `text-base font-medium text-token-text-primary`,
        children: e.title,
      })),
      (t[29] = e.title),
      (t[30] = v));
  let y;
  t[31] !== r ||
  t[32] !== h ||
  t[33] !== e ||
  t[34] !== _ ||
  t[35] !== f ||
  t[36] !== p ||
  t[37] !== d
    ? ((y = r
        ? h.map((t, n) =>
            (0, Y.jsxs)(
              `div`,
              {
                className: `flex items-center gap-2`,
                children: [
                  (0, Y.jsx)(J, {
                    "aria-label": e.inputAriaLabel,
                    className: `text-base`,
                    disabled: e.disabled,
                    value: t,
                    placeholder:
                      r && e.placeHolderValue.length > 0
                        ? (e.placeHolderValue[n] ?? e.placeHolderValue[0] ?? ``)
                        : ``,
                    onChange: (t) => {
                      let r = [...h];
                      ((r[n] = t.target.value), e.onEdit(r));
                    },
                  }),
                  (0, Y.jsx)(x, {
                    color: `ghost`,
                    size: `icon`,
                    disabled:
                      e.disabled || (h.length <= 1 && t.trim().length === 0),
                    "aria-label": d,
                    onClick: () => {
                      let t = e.value.filter((e, t) => t !== n);
                      e.onEdit(t);
                    },
                    children: (0, Y.jsx)(V, { className: `icon-2xs` }),
                  }),
                ],
              },
              `list-${n}`,
            ),
          )
        : _.map((t, n) =>
            (0, Y.jsxs)(
              `div`,
              {
                className: `grid grid-cols-[1fr_1fr_auto] items-center gap-2`,
                children: [
                  (0, Y.jsx)(J, {
                    "aria-label": e.inputAriaLabel,
                    className: `text-sm`,
                    disabled: e.disabled,
                    placeholder: f,
                    value: t.key,
                    onChange: (t) => {
                      let r = [..._];
                      ((r[n] = { ...r[n], key: t.target.value }), e.onEdit(r));
                    },
                  }),
                  (0, Y.jsx)(J, {
                    "aria-label": e.inputAriaLabel,
                    className: `text-sm`,
                    disabled: e.disabled,
                    placeholder: p,
                    value: t.value,
                    onChange: (t) => {
                      let r = [..._];
                      ((r[n] = { ...r[n], value: t.target.value }),
                        e.onEdit(r));
                    },
                  }),
                  (0, Y.jsx)(x, {
                    color: `ghost`,
                    size: `icon`,
                    disabled:
                      e.disabled ||
                      (_.length <= 1 &&
                        t.key.trim().length === 0 &&
                        t.value.trim().length === 0),
                    "aria-label": d,
                    onClick: () => {
                      let t = e.value.filter((e, t) => t !== n);
                      e.onEdit(t);
                    },
                    children: (0, Y.jsx)(V, { className: `icon-2xs` }),
                  }),
                ],
              },
              `record-${n}`,
            ),
          )),
      (t[31] = r),
      (t[32] = h),
      (t[33] = e),
      (t[34] = _),
      (t[35] = f),
      (t[36] = p),
      (t[37] = d),
      (t[38] = y))
    : (y = t[38]);
  let b;
  t[39] === y
    ? (b = t[40])
    : ((b = (0, Y.jsx)(`div`, {
        className: `flex flex-col gap-2`,
        children: y,
      })),
      (t[39] = y),
      (t[40] = b));
  let S;
  t[41] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((S = ee(
        `text-token-text-secondary/90 justify-center rounded-md border border-dashed text-base`,
      )),
      (t[41] = S))
    : (S = t[41]);
  let C;
  t[42] !== r || t[43] !== e || t[44] !== _
    ? ((C = () => {
        if (r) {
          let t = e.value,
            n = t.length > 0 ? [...t, ``] : [``];
          e.onEdit(n);
          return;
        }
        let t = [..._, { key: ``, value: `` }];
        e.onEdit(t);
      }),
      (t[42] = r),
      (t[43] = e),
      (t[44] = _),
      (t[45] = C))
    : (C = t[45]);
  let w;
  t[46] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, Y.jsx)(T, { className: `icon-2xs` })), (t[46] = w))
    : (w = t[46]);
  let E = e.addLabel ? e.addLabel : null,
    D;
  t[47] !== e.disabled || t[48] !== E || t[49] !== C
    ? ((D = (0, Y.jsxs)(x, {
        color: `secondary`,
        size: `toolbar`,
        className: S,
        disabled: e.disabled,
        onClick: C,
        children: [w, E],
      })),
      (t[47] = e.disabled),
      (t[48] = E),
      (t[49] = C),
      (t[50] = D))
    : (D = t[50]);
  let O;
  return (
    t[51] !== D || t[52] !== v || t[53] !== b
      ? ((O = (0, Y.jsxs)(`div`, {
          className: `flex flex-col gap-3 rounded-lg bg-token-input-background px-3 py-2`,
          children: [v, b, D],
        })),
        (t[51] = D),
        (t[52] = v),
        (t[53] = b),
        (t[54] = O))
      : (O = t[54]),
    O
  );
}
function J(e) {
  let t = (0, ke.c)(8),
    n,
    r;
  t[0] === e
    ? ((n = t[1]), (r = t[2]))
    : (({ className: n, ...r } = e), (t[0] = e), (t[1] = n), (t[2] = r));
  let i;
  t[3] === n
    ? (i = t[4])
    : ((i = ee(
        `bg-token-input-background text-token-input-foreground placeholder:text-token-input-placeholder-foreground w-full rounded-md border border-token-input-border px-2.5 py-1.5 outline-none focus:border-token-focus-border`,
        n,
      )),
      (t[3] = n),
      (t[4] = i));
  let a;
  return (
    t[5] !== r || t[6] !== i
      ? ((a = (0, Y.jsx)(`input`, { className: i, ...r })),
        (t[5] = r),
        (t[6] = i),
        (t[7] = a))
      : (a = t[7]),
    a
  );
}
var ke,
  Y,
  Ae = e(() => {
    ((ke = d()), O(), j(), v(), U(), E(), B(), (Y = f()));
  });
function je(e) {
  return e
    ? e.trim().length === 0
      ? e
      : e === e.toLowerCase()
        ? `${e[0]?.toUpperCase() ?? ``}${e.slice(1)}`
        : e
    : ``;
}
function Me({
  config: e,
  initialKey: t,
  onSave: n,
  onCancel: r,
  onUninstall: i,
}) {
  let a = (0, X.useMemo)(() => Pe(e, t), [e, t]),
    [o, s] = (0, X.useState)(a),
    [c, l] = (0, X.useState)(!1),
    [u, d] = (0, X.useState)(null),
    f = N(),
    p = o.label.trim(),
    m = !(0, Re.default)(o, a),
    h =
      o.transportType === `streamable_http`
        ? o.http.url.trim().length === 0
        : o.stdio.command.trim().length === 0,
    g = async () => {
      if (!(p.length === 0 || h)) {
        (d(null), l(!0));
        try {
          await n(Fe(o), o.label);
        } catch (e) {
          d(
            Ne(
              e,
              f.formatMessage({
                id: `settings.mcp.detail.saveError`,
                defaultMessage: `Could not save MCP server`,
                description: `Error shown when saving an MCP server fails`,
              }),
            ),
          );
        } finally {
          l(!1);
        }
      }
    },
    _ = e.name && e.name.trim().length > 0,
    v = async () => {
      if (i) {
        (d(null), l(!0));
        try {
          await i(o.label);
        } catch (e) {
          d(
            Ne(
              e,
              f.formatMessage({
                id: `settings.mcp.detail.uninstallError`,
                defaultMessage: `Could not uninstall MCP server`,
                description: `Error shown when uninstalling an MCP server fails`,
              }),
            ),
          );
        } finally {
          l(!1);
        }
      }
    },
    b = _
      ? (0, Z.jsx)(F, {
          id: `settings.mcp.detail.titleExisting`,
          defaultMessage: `Update {name} MCP`,
          description: `Title for the MCP server detail view when editing an existing server`,
          values: { name: je(e.name) },
        })
      : (0, Z.jsx)(F, {
          id: `settings.mcp.detail.titleNew`,
          defaultMessage: `Connect to a custom MCP`,
          description: `Title for the MCP server detail view when adding a new server`,
        });
  return (0, Z.jsx)(we, {
    backSlot: (0, Z.jsxs)(x, {
      color: `ghost`,
      size: `toolbar`,
      onClick: () => {
        r();
      },
      children: [
        (0, Z.jsx)(ne, { className: `icon-xs` }),
        (0, Z.jsx)(F, {
          id: `settings.mcp.detail.back`,
          defaultMessage: `Back`,
          description: `Button label to go back to MCP settings`,
        }),
      ],
    }),
    title: b,
    subtitle: _
      ? null
      : (0, Z.jsxs)(`a`, {
          className: `inline-flex items-center gap-1 text-sm text-token-text-secondary hover:text-token-text-primary`,
          href: z,
          target: `_blank`,
          rel: `noreferrer`,
          onClick: (e) => {
            k({ event: e, href: z, initiator: `open_in_browser_bridge` });
          },
          "aria-label": f.formatMessage({
            id: `settings.mcp.detail.docs`,
            defaultMessage: `Open MCP documentation`,
            description: `Aria label for MCP docs link in detail header`,
          }),
          children: [
            (0, Z.jsx)(F, {
              id: `settings.mcp.detail.docs.link`,
              defaultMessage: `Docs`,
              description: `Tooltip link label for MCP docs on add page`,
            }),
            (0, Z.jsx)(y, { href: z, className: `icon-xxs` }),
          ],
        }),
    action:
      i && o.label.trim().length > 0
        ? (0, Z.jsxs)(x, {
            color: `danger`,
            size: `toolbar`,
            disabled: c,
            onClick: () => {
              v();
            },
            children: [
              (0, Z.jsx)(V, { className: `icon-xs` }),
              (0, Z.jsx)(F, {
                id: `settings.mcp.detail.uninstall`,
                defaultMessage: `Uninstall`,
                description: `Button label to uninstall an MCP server`,
              }),
            ],
          })
        : null,
    children: (0, Z.jsxs)(`div`, {
      className: `relative`,
      children: [
        c ? (0, Z.jsx)(be, { overlay: !0 }) : null,
        (0, Z.jsx)(G, {
          children: (0, Z.jsxs)(G.Content, {
            children: [
              _
                ? (0, Z.jsx)(`p`, {
                    className: `text-sm text-token-text-secondary`,
                    children: (0, Z.jsx)(F, {
                      id: `settings.mcp.detail.switchTransportNotice`,
                      defaultMessage: `If you would like to switch MCP server type, please uninstall first.`,
                      description: `Notice explaining how to change MCP transport type`,
                    }),
                  })
                : (0, Z.jsxs)(K, {
                    children: [
                      (0, Z.jsx)(q, {
                        title: (0, Z.jsx)(F, {
                          id: `settings.mcp.detail.name`,
                          defaultMessage: `Name`,
                          description: `Name for MCP server display name`,
                        }),
                        value: o.label,
                        placeHolderValue: `MCP server name`,
                        inputType: W.String,
                        onEdit: (e) => {
                          s((t) => ({ ...t, label: e }));
                        },
                      }),
                      (0, Z.jsx)(Ee, {
                        tabs: [
                          {
                            key: `stdio`,
                            name: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.transport.stdio`,
                              defaultMessage: `STDIO`,
                              description: `Label for stdio transport toggle`,
                            }),
                          },
                          {
                            key: `streamable_http`,
                            name: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.transport.http`,
                              defaultMessage: `Streamable HTTP`,
                              description: `Label for HTTP transport toggle`,
                            }),
                          },
                        ],
                        selectedKey: o.transportType,
                        onSelect: (e) => {
                          s((t) => ({ ...t, transportType: e }));
                        },
                      }),
                    ],
                  }),
              (0, Z.jsx)(K, {
                children:
                  o.transportType === `stdio`
                    ? (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.command`,
                              defaultMessage: `Command to launch`,
                              description: `Label for MCP stdio command`,
                            }),
                            value: o.stdio.command,
                            placeHolderValue: `openai-dev-mcp serve-sqlite`,
                            inputType: W.String,
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                stdio: { ...t.stdio, command: e },
                              }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.args`,
                              defaultMessage: `Arguments`,
                              description: `Label for MCP stdio arguments`,
                            }),
                            value: o.stdio.args,
                            placeHolderValue: [],
                            inputType: W.Array,
                            addLabel: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.addArgument`,
                              defaultMessage: `Add argument`,
                              description: `Add button label for MCP stdio arguments`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                stdio: { ...t.stdio, args: e },
                              }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.envVars`,
                              defaultMessage: `Environment variables`,
                              description: `Label for MCP stdio environment variables`,
                            }),
                            value: o.stdio.env,
                            placeHolderValue: [],
                            inputType: W.Record,
                            addLabel: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.addEnvVar`,
                              defaultMessage: `Add environment variable`,
                              description: `Add button label for MCP stdio environment variables`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                stdio: { ...t.stdio, env: e },
                              }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.envVarPassthrough`,
                              defaultMessage: `Environment variable passthrough`,
                              description: `Label for MCP stdio env var passthrough`,
                            }),
                            value: o.stdio.envVars,
                            placeHolderValue: [],
                            inputType: W.Array,
                            addLabel: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.addEnvVarPassthrough`,
                              defaultMessage: `Add variable`,
                              description: `Add button label for MCP stdio env var passthrough`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                stdio: { ...t.stdio, envVars: e },
                              }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.cwd`,
                              defaultMessage: `Working directory`,
                              description: `Label for MCP stdio working directory`,
                            }),
                            value: o.stdio.cwd,
                            placeHolderValue: `~/code`,
                            inputType: W.String,
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                stdio: { ...t.stdio, cwd: e },
                              }));
                            },
                          }),
                        ],
                      })
                    : (0, Z.jsxs)(Z.Fragment, {
                        children: [
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.http.url`,
                              defaultMessage: `URL`,
                              description: `Label for MCP HTTP URL`,
                            }),
                            value: o.http.url,
                            placeHolderValue: `https://mcp.example.com/mcp`,
                            inputType: W.String,
                            onEdit: (e) => {
                              s((t) => ({ ...t, http: { ...t.http, url: e } }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.http.bearerToken`,
                              defaultMessage: `Bearer token env var`,
                              description: `Label for MCP HTTP bearer token env var`,
                            }),
                            value: o.http.bearerTokenEnvVar,
                            placeHolderValue: `MCP_BEARER_TOKEN`,
                            inputType: W.String,
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                http: { ...t.http, bearerTokenEnvVar: e },
                              }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.http.headers`,
                              defaultMessage: `Headers`,
                              description: `Label for MCP HTTP headers`,
                            }),
                            value: o.http.httpHeaders,
                            placeHolderValue: [],
                            inputType: W.Record,
                            addLabel: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.http.addHeader`,
                              defaultMessage: `Add header`,
                              description: `Add button label for MCP HTTP headers`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                http: { ...t.http, httpHeaders: e },
                              }));
                            },
                          }),
                          (0, Z.jsx)(q, {
                            title: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.http.envHeaders`,
                              defaultMessage: `Headers from environment variables`,
                              description: `Label for MCP HTTP env headers`,
                            }),
                            value: o.http.envHttpHeaders,
                            placeHolderValue: [],
                            inputType: W.Record,
                            addLabel: (0, Z.jsx)(F, {
                              id: `settings.mcp.detail.http.addEnvHeader`,
                              defaultMessage: `Add variable`,
                              description: `Add button label for MCP HTTP env headers`,
                            }),
                            onEdit: (e) => {
                              s((t) => ({
                                ...t,
                                http: { ...t.http, envHttpHeaders: e },
                              }));
                            },
                          }),
                        ],
                      }),
              }),
              u == null
                ? null
                : (0, Z.jsx)(`p`, {
                    role: `alert`,
                    className: `rounded-md bg-token-input-validation-error-background/20 px-3 py-2 text-sm text-token-error-foreground`,
                    children: u,
                  }),
              (0, Z.jsx)(`div`, {
                className: `flex justify-end`,
                children: (0, Z.jsx)(x, {
                  color: `primary`,
                  size: `toolbar`,
                  disabled: p.length === 0 || !m || c || h,
                  onClick: g,
                  children: (0, Z.jsx)(F, {
                    id: `settings.mcp.detail.save`,
                    defaultMessage: `Save`,
                    description: `Save button label on MCP server detail view`,
                  }),
                }),
              }),
            ],
          }),
        }),
      ],
    }),
  });
}
function Ne(e, t) {
  return e instanceof Error && e.message.trim().length > 0 ? e.message : t;
}
function Pe(e, t) {
  let n = `command` in e ? `stdio` : `streamable_http`;
  return {
    base: {
      enabled: e.enabled ?? void 0,
      startup_timeout_sec: e.startup_timeout_sec ?? void 0,
      startup_timeout_ms: e.startup_timeout_ms ?? void 0,
      tool_timeout_sec: e.tool_timeout_sec ?? void 0,
      enabled_tools: e.enabled_tools ?? void 0,
      disabled_tools: e.disabled_tools ?? void 0,
    },
    label: t ?? e.name ?? ``,
    transportType: n,
    stdio: {
      command: `command` in e ? e.command : ``,
      args: `command` in e && e.args && e.args.length > 0 ? e.args : [],
      env: `command` in e && e.env ? Ie(e.env) : [],
      envVars:
        `command` in e && e.env_vars && e.env_vars.length > 0 ? e.env_vars : [],
      cwd: `command` in e && e.cwd ? e.cwd : ``,
    },
    http: {
      url: `url` in e ? e.url : ``,
      bearerTokenEnvVar:
        `url` in e && e.bearer_token_env_var ? e.bearer_token_env_var : ``,
      httpHeaders: `url` in e && e.http_headers ? Ie(e.http_headers) : [],
      envHttpHeaders:
        `url` in e && e.env_http_headers ? Ie(e.env_http_headers) : [],
    },
  };
}
function Fe(e) {
  let t = e.base;
  if (e.transportType === `streamable_http`) {
    let n = Le(e.http.httpHeaders),
      r = Le(e.http.envHttpHeaders);
    return {
      ...t,
      url: e.http.url,
      bearer_token_env_var:
        e.http.bearerTokenEnvVar.trim().length > 0
          ? e.http.bearerTokenEnvVar.trim()
          : void 0,
      http_headers: Object.keys(n).length > 0 ? n : void 0,
      env_http_headers: Object.keys(r).length > 0 ? r : void 0,
    };
  }
  let n = Le(e.stdio.env),
    r = e.stdio.envVars.map((e) => e.trim()).filter((e) => e.length > 0),
    i = e.stdio.args.map((e) => e.trim()).filter((e) => e.length > 0);
  return {
    ...t,
    command: e.stdio.command,
    args: i.length > 0 ? i : void 0,
    env: Object.keys(n).length > 0 ? n : void 0,
    env_vars: r.length > 0 ? r : void 0,
    cwd: e.stdio.cwd.trim().length > 0 ? e.stdio.cwd.trim() : void 0,
  };
}
function Ie(e) {
  let t = Object.entries(e);
  return t.length === 0
    ? [{ key: ``, value: `` }]
    : t.map(([e, t]) => ({ key: e, value: t }));
}
function Le(e) {
  let t = {};
  return (
    e.forEach(({ key: e, value: n }) => {
      let r = e.trim(),
        i = n.trim();
      r.length === 0 || i.length === 0 || (t[r] = i);
    }),
    t
  );
}
var Re,
  X,
  Z,
  ze = e(() => {
    ((Re = t(a(), 1)),
      (X = t(l(), 1)),
      j(),
      v(),
      te(),
      b(),
      Te(),
      ge(),
      U(),
      w(),
      B(),
      ye(),
      Ce(),
      Ae(),
      Se(),
      xe(),
      (Z = f()));
  }),
  Be,
  Ve = e(() => {
    (j(),
      (Be = re({
        servers: {
          id: `settings.mcp.myServers`,
          defaultMessage: `Servers`,
          description: `Heading for the user's MCP servers list`,
        },
      })));
  });
function He() {
  let { selectedHostId: e } = me(),
    { data: t } = se(null, { hostId: e }),
    { data: n, isFetching: a } = i(oe, e),
    o = ue({ hostId: e }),
    s = le({ hostId: e }),
    c = u(),
    l = N(),
    d = p(ie),
    [f, g] = (0, Q.useState)({}),
    [_, v] = (0, Q.useState)([]),
    [y, b] = (0, Q.useState)({}),
    [S, w] = (0, Q.useState)(null),
    [T, E] = (0, Q.useState)(null),
    D = t?.servers ?? {},
    O = t?.serverOrigins ?? {},
    k = t?.configWriteTarget ?? null,
    A = Object.keys(D),
    ee = (0, qe.default)(
      A,
      (e) => D[e]?.name?.trim() || e,
      (e) => e,
    ),
    te = new Set(Object.entries(D).flatMap(([e, t]) => [e, t.name ?? e])),
    ne = _.includes(e),
    re = ne ? (y[e] ?? []) : [],
    j = (0, qe.default)(
      (t == null ? [] : (n?.data ?? [])).filter(
        (e) => !te.has(e.name) && !re.includes(e.name),
      ),
      (e) => e.name,
    ),
    M = A.length > 0,
    P = j.length > 0,
    I = {};
  n != null &&
    (n.data.forEach((e) => {
      I[e.name] = e.authStatus;
    }),
    Object.entries(D).forEach(([e, t]) => {
      let n = I[e] ?? (t.name == null ? void 0 : I[t.name]);
      n != null && (I[e] = n);
    }));
  let L = () => {
      v((t) => (t.includes(e) ? t : [...t, e]));
    },
    R = () => {
      (E(null), w(null));
    },
    de = () => {
      if (k != null) return k.filePath;
      throw Error(
        l.formatMessage({
          id: `settings.mcp.noWritableConfig`,
          defaultMessage: `MCP server settings are unavailable`,
          description: `Error shown when MCP settings cannot find a writable config.toml`,
        }),
      );
    },
    pe = async (e, t) => {
      try {
        (await s.mutateAsync({ key: e, enabled: t }), L());
      } catch {}
    },
    ge = async (e, t) => {
      let n = S ?? Ue(t, A, null);
      try {
        (await o.mutateAsync({ filePath: de(), key: n, value: e }), L(), R());
      } catch (e) {
        throw (
          r.error(`Failed to save MCP server`, {
            safe: { targetKey: n },
            sensitive: { error: e },
          }),
          e
        );
      }
    },
    z = async (t) => {
      let n = S ?? Ue(t, A, null);
      try {
        (await o.mutateAsync({ filePath: de(), key: n, value: null }),
          b((r) => ({
            ...r,
            [e]: (0, Je.default)([...(r[e] ?? []), n, t, D[n]?.name ?? n]),
          })),
          L(),
          R());
      } catch (e) {
        throw (
          r.error(`Failed to uninstall MCP server`, {
            safe: { targetKey: n },
            sensitive: { error: e },
          }),
          e
        );
      }
    },
    B = async (t) => {
      if (!a) {
        let e = I[t];
        if (e !== void 0 && e !== `notLoggedIn`) return;
      }
      let n = f[t];
      if (n) {
        C({
          href: n,
          initiator: `open_in_browser_bridge`,
          openTarget: `external-browser`,
        });
        return;
      }
      g((e) => ({ ...e, [t]: null }));
      try {
        let { authorizationUrl: n } = await ae(`login-mcp-server`, {
          hostId: e,
          name: t,
        });
        n &&
          (g((e) => ({ ...e, [t]: n })),
          C({
            href: n,
            initiator: `open_in_browser_bridge`,
            openTarget: `external-browser`,
          }));
      } catch (e) {
        (r.error(`Failed to start login for MCP server`, {
          safe: { serverName: t },
          sensitive: { error: e },
        }),
          g((e) => {
            let { [t]: n, ...r } = e;
            return r;
          }));
      }
    },
    V = (0, Q.useEffectEvent)((e, t) => {
      (g((n) => {
        let r = n[e];
        if (t || r == null) {
          let { [e]: t, ...r } = n;
          return r;
        }
        return n;
      }),
        t && (L(), c.invalidateQueries({ queryKey: ce })));
    }),
    H = (0, Q.useRef)(!0);
  if (
    ((0, Q.useEffect)(() => {
      if (H.current) {
        H.current = !1;
        return;
      }
      d?.hostId === e && V(d.name, d.success);
    }, [d, e]),
    h(
      `codex-app-server-initialized`,
      (e) => {
        (v((t) => t.filter((t) => t !== e.hostId)),
          b((t) => {
            let { [e.hostId]: n, ...r } = t;
            return r;
          }),
          c.invalidateQueries({ queryKey: [...ce, e.hostId] }));
      },
      [c],
    ),
    T)
  )
    return (0, $.jsx)(Me, {
      config: T,
      initialKey: S,
      onCancel: R,
      onSave: ge,
      onUninstall: S ? z : void 0,
    });
  let U = (0, $.jsx)(ve, { slug: Ye }),
    W = (0, $.jsx)(_e, { slug: Ye }),
    ye = ne
      ? (0, $.jsxs)(x, {
          color: `ghost`,
          size: `toolbar`,
          onClick: () => {
            m.dispatchMessage(`codex-app-server-restart`, { hostId: e });
          },
          children: [
            (0, $.jsx)(he, { className: `icon-xs` }),
            (0, $.jsx)(F, {
              id: `settings.mcp.restartApp`,
              defaultMessage: `Restart`,
              description: `Button label to restart the codex electron app after MCP settings change`,
            }),
          ],
        })
      : null,
    be = () => {
      (w(null), E({ ...Xe, name: void 0 }));
    };
  return (0, $.jsxs)(we, {
    title: U,
    subtitle: W,
    action: ye,
    children: [
      (0, $.jsxs)(G, {
        children: [
          (0, $.jsx)(G.Header, {
            title: (0, $.jsx)(F, { ...Be.servers }),
            actions: (M || P) && (0, $.jsx)(Ge, { onClick: be }),
          }),
          M || !P
            ? (0, $.jsx)(G.Content, {
                children: (0, $.jsx)(K, {
                  children: M
                    ? ee.map((e) =>
                        (0, $.jsx)(
                          We,
                          {
                            name: D[e]?.name ?? e,
                            statusLoading: a,
                            enabled: D[e]?.enabled !== !1,
                            authStatus: I[e],
                            onAuthenticateClicked: () => B(e),
                            onEnableClicked: D[e] ? (t) => pe(e, t) : void 0,
                            onSettingsClicked: D[e]
                              ? async () => {
                                  (w(e), E(D[e]));
                                }
                              : void 0,
                            isReadOnly: O[e]?.name.type === `project`,
                          },
                          e,
                        ),
                      )
                    : (0, $.jsx)(fe, {
                        label: (0, $.jsx)(F, {
                          id: `settings.mcp.empty`,
                          defaultMessage: `No MCP servers connected`,
                          description: `Empty state for MCP servers list`,
                        }),
                        control: (0, $.jsx)(Ge, { onClick: be }),
                      }),
                }),
              })
            : null,
        ],
      }),
      P
        ? (0, $.jsxs)(G, {
            children: [
              (0, $.jsx)(G.Header, {
                title: (0, $.jsx)(F, {
                  id: `settings.mcp.fromPlugins`,
                  defaultMessage: `From plugins`,
                  description: `Heading for MCP servers provided by installed plugins`,
                }),
              }),
              (0, $.jsx)(G.Content, {
                children: (0, $.jsx)(K, {
                  children: j.map((e) =>
                    (0, $.jsx)(
                      We,
                      {
                        name: e.name,
                        statusLoading: a,
                        authStatus: e.authStatus,
                        onAuthenticateClicked: () => B(e.name),
                      },
                      `status-${e.name}`,
                    ),
                  ),
                }),
              }),
            ],
          })
        : null,
    ],
  });
}
function Ue(e, t, n) {
  let r =
      e
        ?.trim()
        .replace(/\s+/gu, `_`)
        .replace(/[^a-zA-Z0-9-_]+/gu, `-`)
        .replace(/-+/gu, `-`) ?? ``,
    i = r.length > 0 ? r.toLowerCase() : `custom-server`,
    a = t.filter((e) => (n == null ? !0 : e !== n));
  if (!a.includes(i)) return i;
  let o = 2,
    s = `${i}-${o}`;
  for (; a.includes(s); ) ((o += 1), (s = `${i}-${o}`));
  return s;
}
function We(e) {
  let t = (0, Ke.c)(15),
    {
      name: n,
      statusLoading: r,
      onAuthenticateClicked: i,
      authStatus: a,
      onEnableClicked: o,
      enabled: s,
      onSettingsClicked: c,
      isReadOnly: l,
    } = e,
    u = N(),
    d = !r && i !== void 0 && a === `notLoggedIn`,
    f = o !== void 0 || c !== void 0 || d,
    p;
  t[0] === n
    ? (p = t[1])
    : ((p = (0, $.jsx)(`span`, {
        className: `flex min-w-0 flex-col gap-0.5 text-sm`,
        children: (0, $.jsx)(`span`, {
          className: `flex flex-wrap items-end gap-1`,
          children: (0, $.jsx)(`span`, {
            className: `font-medium text-token-text-primary`,
            children: n,
          }),
        }),
      })),
      (t[0] = n),
      (t[1] = p));
  let m;
  t[2] !== s ||
  t[3] !== u ||
  t[4] !== l ||
  t[5] !== i ||
  t[6] !== o ||
  t[7] !== c ||
  t[8] !== f ||
  t[9] !== d ||
  t[10] !== r
    ? ((m = f
        ? (0, $.jsxs)(Oe, {
            children: [
              d
                ? (0, $.jsx)(x, {
                    color: `outline`,
                    disabled: !!r,
                    size: `toolbar`,
                    onClick: () => {
                      i();
                    },
                    children: (0, $.jsx)(F, {
                      id: `settings.mcp.server.login`,
                      defaultMessage: `Authenticate`,
                      description: `Button label to authenticate with an MCP server`,
                    }),
                  })
                : null,
              c
                ? (0, $.jsx)(x, {
                    color: `ghost`,
                    size: `toolbar`,
                    uniform: !0,
                    disabled: l === !0,
                    onClick: () => {
                      c();
                    },
                    "aria-label": u.formatMessage({
                      id: `settings.mcp.server.settings`,
                      defaultMessage: `Settings`,
                      description: `Button label to view MCP server settings`,
                    }),
                    children: (0, $.jsx)(_, { className: `icon-xs` }),
                  })
                : null,
              o
                ? (0, $.jsx)(A, {
                    disabled: r === !0 || l === !0,
                    checked: s === !0,
                    onChange: (e) => {
                      o(e);
                    },
                    ariaLabel: u.formatMessage({
                      id: `settings.mcp.server.enable`,
                      defaultMessage: `Enable`,
                      description: `Toggle to enable an MCP server`,
                    }),
                  })
                : null,
            ],
          })
        : null),
      (t[2] = s),
      (t[3] = u),
      (t[4] = l),
      (t[5] = i),
      (t[6] = o),
      (t[7] = c),
      (t[8] = f),
      (t[9] = d),
      (t[10] = r),
      (t[11] = m))
    : (m = t[11]);
  let h;
  return (
    t[12] !== p || t[13] !== m
      ? ((h = (0, $.jsx)(fe, { label: p, description: null, control: m })),
        (t[12] = p),
        (t[13] = m),
        (t[14] = h))
      : (h = t[14]),
    h
  );
}
function Ge(e) {
  let t = (0, Ke.c)(6),
    { onClick: n } = e,
    r;
  t[0] === n
    ? (r = t[1])
    : ((r = () => {
        n?.();
      }),
      (t[0] = n),
      (t[1] = r));
  let i, a;
  t[2] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((i = (0, $.jsx)(T, { className: `icon-xs` })),
      (a = (0, $.jsx)(F, {
        id: `settings.mcp.addServer`,
        defaultMessage: `Add server`,
        description: `Button to add a new MCP server`,
      })),
      (t[2] = i),
      (t[3] = a))
    : ((i = t[2]), (a = t[3]));
  let o;
  return (
    t[4] === r
      ? (o = t[5])
      : ((o = (0, $.jsxs)(x, {
          color: `secondary`,
          size: `toolbar`,
          onClick: r,
          children: [i, a],
        })),
        (t[4] = r),
        (t[5] = o)),
    o
  );
}
var Ke, qe, Je, Q, $, Ye, Xe;
e(() => {
  ((Ke = d()),
    n(),
    (qe = t(L(), 1)),
    (Je = t(D(), 1)),
    s(),
    (Q = t(l(), 1)),
    j(),
    M(),
    P(),
    v(),
    te(),
    g(),
    E(),
    de(),
    S(),
    c(),
    I(),
    De(),
    Ce(),
    ze(),
    Ve(),
    Se(),
    R(),
    pe(),
    H(),
    xe(),
    o(),
    ($ = f()),
    (Ye = `mcp-settings`),
    (Xe = { command: ``, args: [], env_vars: [], enabled: !0 }));
})();
export { He as McpSettings };
//# sourceMappingURL=mcp-settings-BYrm_Fbg.js.map
