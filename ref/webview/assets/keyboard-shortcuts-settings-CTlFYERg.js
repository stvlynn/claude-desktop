import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  $s as n,
  Vo as r,
  _c as i,
  a,
  c as o,
  cc as s,
  gc as c,
  i as l,
  lc as u,
  qo as d,
  u as f,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Fs as p,
  Hs as m,
  Is as h,
  Js as g,
  Ls as _,
  Ms as v,
  Ps as y,
  Qs as b,
  Rs as x,
  Us as S,
  Ws as C,
  Ys as w,
  Za as T,
  ro as E,
  to as D,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Aa as O,
  Ca as k,
  Do as A,
  Em as j,
  Eo as M,
  Na as N,
  Tm as P,
  To as F,
  Tp as I,
  _a as L,
  ba as R,
  ja as z,
  ka as B,
  va as V,
  wo as H,
  wp as U,
  xp as ee,
  ya as te,
  yp as W,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as ne,
  Vy as G,
  ry as K,
  ty as re,
  zy as q,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  $ as ie,
  ct as ae,
  et as oe,
  it as se,
  nt as ce,
  rt as le,
  st as J,
  tt as ue,
} from "./app-initial~app-main~automations-page-Bc0ZtIBr.js";
import {
  bn as de,
  f as fe,
  l as pe,
  p as me,
  u as he,
  yn as ge,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~pull-requests-page~new-~ozr5a6hk-DZC70s11.js";
import {
  ad as _e,
  du as ve,
  id as ye,
  uu as be,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
import {
  H as xe,
  V as Se,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~appgen-library-page~hot~djo67r4n-CrVrqCBe.js";
import {
  m as Ce,
  p as we,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~keyboard-shortcuts-~n7jwlpf0-BaxBxQFI.js";
import {
  v as Te,
  y as Ee,
} from "./app-initial~app-main~worktree-init-v2-page~appgen-settings-page~appgen-publication-terms-ro~g0k1g2bt-B6jrUW_u.js";
import {
  J as De,
  d as Oe,
  f as ke,
  q as Ae,
} from "./app-initial~app-main~pets-settings~appearance-settings~general-settings-DKOJ5iv-.js";
import {
  r as je,
  t as Me,
} from "./app-initial~app-main~settings-page~open-source-licenses-page~skills-settings~plugins-settin~cxbtmbfc-Bhanoo2P.js";
import {
  r as Ne,
  t as Pe,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-worktree-init-page~hotkey-windo~kjl2gxhu-DXs0ueRP.js";
import {
  i as Fe,
  n as Ie,
  r as Le,
  t as Re,
} from "./keyboard-event-accelerator-Bfs2Rziw.js";
function ze() {
  let e = (0, X.c)(1),
    t;
  return (
    e[0] === Symbol.for(`react.memo_cache_sentinel`)
      ? ((t = (0, Q.jsx)(Be, {})), (e[0] = t))
      : (t = e[0]),
    t
  );
}
function Be() {
  let e = G(),
    { platform: t } = me(),
    n = s(),
    r = d(N),
    i = de(),
    o = K(`1244621283`),
    c = K(`1372061905`),
    l = K(`3264431617`),
    u = K(`4100906017`),
    p = B(r, `switchToMode1`) > 0,
    [m, h] = (0, Z.useState)(``),
    [_, y] = (0, Z.useState)(!1),
    [b, x] = (0, Z.useState)(null),
    [C, w] = (0, Z.useState)({}),
    [E, k] = (0, Z.useState)(!1),
    [A, j] = (0, Z.useState)(null),
    { data: M } = d(T),
    F = f(`set-codex-command-keybinding`, {
      onSuccess: (e, { commandId: t }) => {
        let r = a(`codex-command-keymap-state`);
        n.setQueryData(r, e);
        let o = [r];
        (t === `hotkeyWindow` && o.push(Pe),
          (t === `globalDictationHold` || t === `globalDictationToggle`) &&
            o.push(a(`global-dictation-hotkey-state`)),
          Promise.all(o.map((e) => i(e))));
      },
    }),
    I = f(`reset-codex-command-keybindings`, {
      onSuccess: (e) => {
        let t = a(`codex-command-keymap-state`);
        (n.setQueryData(t, e),
          Promise.all(
            [t, Pe, a(`global-dictation-hotkey-state`)].map((e) => i(e)),
          ));
      },
    }),
    L = $.filter((e) =>
      se(e.id, {
        modeSwitchAvailable: p,
        isGlobalDictationEnabled: o,
        isHotkeyWindowEnabled: c,
        isProcessManagerEnabled: l,
        isRestrictedCommandEnabled: !1,
        isVoiceInputEnabled: u,
      }),
    )
      .map((t) => ({ command: t, title: J(t, e, O(r, t.id)).title }))
      .sort((e, t) => ue(e.command, t.command)),
    R = m.trim(),
    z =
      R.length === 0
        ? L
        : L.filter(({ command: n, title: i }) => {
            let a = J(n, e, O(r, n.id)).description;
            return _
              ? D(n.id, M, t).some(({ label: e }) => We(e, R))
              : [n.id, i, a].some((e) => he(e, R) > 0);
          });
  return (0, Q.jsxs)(Me, {
    title: (0, Q.jsx)(Se, { slug: `keyboard-shortcuts` }),
    children: [
      (0, Q.jsx)(Oe, {
        children: (0, Q.jsxs)(Oe.Content, {
          children: [
            M == null
              ? null
              : (0, Q.jsx)(ie, {
                  autoFocus: _,
                  isSearchingByKeystrokes: _,
                  trailingContent: (0, Q.jsx)(W, {
                    tooltipContent: (0, Q.jsx)(q, {
                      id: `settings.keyboardShortcuts.searchByKeystrokes.tooltip`,
                      defaultMessage: `Search by keystrokes`,
                      description: `Tooltip label for the keyboard shortcut search mode button`,
                    }),
                    children: (0, Q.jsx)(P, {
                      "aria-label": e.formatMessage({
                        id: `settings.keyboardShortcuts.searchByKeystrokes.ariaLabel`,
                        defaultMessage: `Search by keystrokes`,
                        description: `Accessible label for the keyboard shortcut search mode button`,
                      }),
                      "aria-pressed": _,
                      color: _ ? `secondary` : `ghost`,
                      size: `toolbar`,
                      uniform: !0,
                      onMouseDown: (e) => {
                        e.preventDefault();
                      },
                      onClick: () => {
                        (h(``), y((e) => !e));
                      },
                      children: (0, Q.jsx)(we, { className: `icon-sm` }),
                    }),
                  }),
                  value: m,
                  onKeyDown: _
                    ? (e) => {
                        if (e.repeat) return;
                        if (
                          (e.preventDefault(),
                          e.stopPropagation(),
                          e.key === `Escape`)
                        ) {
                          (h(``), y(!1));
                          return;
                        }
                        let n = Re(e.nativeEvent);
                        if (n != null) {
                          let e = v(n, t === `macOS`, t === `linux`),
                            r = m.length === 0 ? e : `${m} ${e}`;
                          h(
                            m.length > 0 &&
                              L.some(({ command: e }) =>
                                D(e.id, M, t).some(({ label: e }) => We(e, r)),
                              )
                              ? r
                              : e,
                          );
                        }
                      }
                    : void 0,
                  onValueChange: h,
                }),
            (0, Q.jsxs)(Ae, {
              className: `overflow-hidden`,
              children: [
                M == null
                  ? (0, Q.jsx)(`div`, {
                      className: `px-4 py-3 text-sm text-token-text-secondary`,
                      children: (0, Q.jsx)(q, {
                        id: `settings.keyboardShortcuts.loading`,
                        defaultMessage: `Loading shortcuts…`,
                        description: `Loading label while keyboard shortcuts are being fetched`,
                      }),
                    })
                  : null,
                M == null
                  ? null
                  : (0, Q.jsxs)(`table`, {
                      className: `w-full table-fixed border-collapse text-sm`,
                      children: [
                        (0, Q.jsxs)(`colgroup`, {
                          children: [
                            (0, Q.jsx)(`col`, {}),
                            (0, Q.jsx)(`col`, { className: `w-64` }),
                            (0, Q.jsx)(`col`, { className: `w-32` }),
                          ],
                        }),
                        (0, Q.jsx)(`thead`, {
                          className: `text-left text-token-text-tertiary`,
                          children: (0, Q.jsxs)(`tr`, {
                            className: `border-b border-token-border`,
                            children: [
                              (0, Q.jsx)(`th`, {
                                className: `px-4 py-2 font-medium`,
                                children: (0, Q.jsx)(q, {
                                  id: `settings.keyboardShortcuts.table.command`,
                                  defaultMessage: `Command`,
                                  description: `Column heading for keyboard shortcut commands`,
                                }),
                              }),
                              (0, Q.jsx)(`th`, {
                                className: `px-4 py-2 font-medium`,
                                children: (0, Q.jsx)(q, {
                                  id: `settings.keyboardShortcuts.table.keybinding`,
                                  defaultMessage: `Keybinding`,
                                  description: `Column heading for keyboard shortcut keybindings`,
                                }),
                              }),
                              (0, Q.jsx)(`th`, {
                                className: `px-4 py-2`,
                                children: (0, Q.jsx)(`span`, {
                                  className: `sr-only`,
                                  children: (0, Q.jsx)(q, {
                                    id: `settings.keyboardShortcuts.table.actions`,
                                    defaultMessage: `Actions`,
                                    description: `Accessible heading for keyboard shortcut row actions`,
                                  }),
                                }),
                              }),
                            ],
                          }),
                        }),
                        (0, Q.jsxs)(`tbody`, {
                          children: [
                            z.length === 0
                              ? (0, Q.jsx)(`tr`, {
                                  children: (0, Q.jsx)(`td`, {
                                    className: `px-4 py-3 text-token-text-secondary`,
                                    colSpan: 3,
                                    children: (0, Q.jsx)(q, {
                                      id: `settings.keyboardShortcuts.noMatches`,
                                      defaultMessage: `No matching shortcuts`,
                                      description: `Empty state shown when the keyboard shortcuts search has no matches`,
                                    }),
                                  }),
                                })
                              : null,
                            z.map(({ command: n, title: i }, a) => {
                              let o = J(n, e, O(r, n.id)).description,
                                s = D(n.id, M, t),
                                c = M.bindings.some((e) => e.command === n.id),
                                l = Ze({
                                  commandId: n.id,
                                  hasCustomBinding: c,
                                  platform: t,
                                  shortcutEntries: s,
                                }),
                                u =
                                  b?.commandId === n.id && b.mode === `append`,
                                d = s.length === 0 ? [null] : s,
                                f = u && s.length > 0 ? [...s, null] : d;
                              return (0, Q.jsx)(
                                Z.Fragment,
                                {
                                  children: f.map((u, d) => {
                                    let p = d === 0,
                                      m = `px-4 py-0.5`;
                                    f.length === 1
                                      ? (m = `px-4 py-2`)
                                      : p
                                        ? (m = `px-4 pt-2 pb-0.5`)
                                        : d === f.length - 1 &&
                                          (m = `px-4 pt-0.5 pb-2`);
                                    let h =
                                      b?.commandId === n.id &&
                                      (b.mode === `append`
                                        ? u == null && d === s.length
                                        : b.accelerator ===
                                          (u?.accelerator ?? null));
                                    return (0, Q.jsxs)(
                                      `tr`,
                                      {
                                        className:
                                          p && a > 0
                                            ? `group border-t border-token-border align-middle`
                                            : `group align-middle`,
                                        children: [
                                          (0, Q.jsx)(`td`, {
                                            className: m,
                                            children: p
                                              ? (0, Q.jsxs)(Q.Fragment, {
                                                  children: [
                                                    (0, Q.jsx)(`span`, {
                                                      className: `block truncate text-token-text-primary`,
                                                      children: i,
                                                    }),
                                                    o === ``
                                                      ? null
                                                      : (0, Q.jsx)(W, {
                                                          openWhen: `trigger-overflows`,
                                                          tooltipContent: o,
                                                          children: (0, Q.jsx)(
                                                            `span`,
                                                            {
                                                              className: `mt-0.5 block truncate text-xs text-token-text-secondary`,
                                                              children: o,
                                                            },
                                                          ),
                                                        }),
                                                    C[n.id] == null
                                                      ? null
                                                      : (0, Q.jsx)(`span`, {
                                                          className: `mt-0.5 block text-xs text-token-error-foreground`,
                                                          children: C[n.id],
                                                        }),
                                                  ],
                                                })
                                              : null,
                                          }),
                                          (0, Q.jsx)(`td`, {
                                            className: m,
                                            colSpan: h ? 2 : void 0,
                                            children: h
                                              ? (0, Q.jsx)(He, {
                                                  allowsBareModifiers: S(n),
                                                  allowsSequences:
                                                    n.kind === `webview`,
                                                  commandTitle: i,
                                                  conflictingCommandTitle:
                                                    b.conflictingCommandTitle,
                                                  onCancel: () => {
                                                    x(null);
                                                  },
                                                  onCapture: (i) => {
                                                    if (
                                                      u != null &&
                                                      Ke(
                                                        u.accelerator,
                                                        i,
                                                        t === `macOS`,
                                                      )
                                                    ) {
                                                      x(null);
                                                      return;
                                                    }
                                                    let a = Ge({
                                                      accelerator: i,
                                                      commandId: n.id,
                                                      intl: e,
                                                      keymapState: M,
                                                      platform: t,
                                                      registeredCommands: r,
                                                    });
                                                    if (a != null) {
                                                      x((e) =>
                                                        e?.commandId === n.id
                                                          ? {
                                                              ...e,
                                                              conflictingCommandTitle:
                                                                a,
                                                            }
                                                          : e,
                                                      );
                                                      return;
                                                    }
                                                    let o;
                                                    ((o =
                                                      b.mode === `append`
                                                        ? {
                                                            type: `append`,
                                                            accelerator: i,
                                                          }
                                                        : u == null
                                                          ? {
                                                              type: `set`,
                                                              accelerator: i,
                                                            }
                                                          : {
                                                              type: `replace`,
                                                              previousAccelerator:
                                                                u.accelerator,
                                                              accelerator: i,
                                                            }),
                                                      Y({
                                                        commandId: n.id,
                                                        intl: e,
                                                        setCommandKeybinding: F,
                                                        setErrorByCommandId: w,
                                                        update: o,
                                                      }).finally(() => {
                                                        x((e) =>
                                                          e === b ? null : e,
                                                        );
                                                      }));
                                                  },
                                                })
                                              : (0, Q.jsxs)(`div`, {
                                                  className: `flex items-center gap-1`,
                                                  children: [
                                                    (0, Q.jsx)(Je, {
                                                      shortcutLabel:
                                                        u?.label ?? null,
                                                    }),
                                                    (0, Q.jsx)(Xe, {
                                                      canAppend: !g(n),
                                                      commandTitle: i,
                                                      hasShortcut: u != null,
                                                      isPending: F.isPending,
                                                      onStartCapture: (e) => {
                                                        (w((e) => ({
                                                          ...e,
                                                          [n.id]: void 0,
                                                        })),
                                                          x({
                                                            commandId: n.id,
                                                            accelerator:
                                                              e === `append`
                                                                ? null
                                                                : (u?.accelerator ??
                                                                  null),
                                                            conflictingCommandTitle:
                                                              null,
                                                            mode: e,
                                                          }));
                                                      },
                                                    }),
                                                  ],
                                                }),
                                          }),
                                          h
                                            ? null
                                            : (0, Q.jsx)(`td`, {
                                                className: m,
                                                children: (0, Q.jsx)(Ye, {
                                                  commandTitle: i,
                                                  hasCustomBinding: c,
                                                  hasShortcut: u != null,
                                                  isPending: F.isPending,
                                                  showReset: d === l,
                                                  onReset: () => {
                                                    Y({
                                                      commandId: n.id,
                                                      intl: e,
                                                      setCommandKeybinding: F,
                                                      setErrorByCommandId: w,
                                                      update: { type: `reset` },
                                                    });
                                                  },
                                                  onClear: () => {
                                                    u != null &&
                                                      Y({
                                                        commandId: n.id,
                                                        intl: e,
                                                        setCommandKeybinding: F,
                                                        setErrorByCommandId: w,
                                                        update: {
                                                          type: `remove`,
                                                          accelerator:
                                                            u.accelerator,
                                                        },
                                                      });
                                                  },
                                                }),
                                              }),
                                        ],
                                      },
                                      `${n.id}-${u?.accelerator ?? `unassigned`}`,
                                    );
                                  }),
                                },
                                n.id,
                              );
                            }),
                          ],
                        }),
                      ],
                    }),
              ],
            }),
            M != null && M.bindings.length > 0
              ? (0, Q.jsx)(`div`, {
                  className: `flex items-center justify-end gap-2`,
                  children: (0, Q.jsx)(P, {
                    color: `secondary`,
                    disabled: I.isPending,
                    onClick: () => {
                      (j(null), k(!0));
                    },
                    children: (0, Q.jsx)(q, {
                      id: `settings.keyboardShortcuts.resetAll`,
                      defaultMessage: `Reset all to defaults`,
                      description: `Button label to reset all customized keyboard shortcuts to their defaults`,
                    }),
                  }),
                })
              : null,
          ],
        }),
      }),
      (0, Q.jsx)(Ve, {
        error: A,
        isPending: I.isPending,
        open: E,
        onOpenChange: (e) => {
          (k(e), e || j(null));
        },
        onConfirm: async () => {
          j(null);
          try {
            (await I.mutateAsync(void 0), k(!1));
          } catch (t) {
            j(
              t instanceof Error
                ? t.message
                : e.formatMessage({
                    id: `settings.keyboardShortcuts.resetAllError`,
                    defaultMessage: `Failed to reset keyboard shortcuts`,
                    description: `Fallback error shown when resetting all customized keyboard shortcuts fails`,
                  }),
            );
          }
        },
      }),
    ],
  });
}
function Ve(e) {
  let t = (0, X.c)(28),
    { error: n, isPending: r, onConfirm: i, onOpenChange: a, open: o } = e,
    s;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((s = (0, Q.jsx)(q, {
        id: `settings.keyboardShortcuts.resetAllConfirm.title`,
        defaultMessage: `Reset all keyboard shortcuts?`,
        description: `Title for the dialog confirming reset of all customized keyboard shortcuts`,
      })),
      (t[0] = s))
    : (s = t[0]);
  let c = s,
    l;
  t[1] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((l = (0, Q.jsx)(q, {
        id: `settings.keyboardShortcuts.resetAllConfirm.description`,
        defaultMessage: `This will discard all custom shortcuts and restore the defaults`,
        description: `Warning shown before resetting all customized keyboard shortcuts`,
      })),
      (t[1] = l))
    : (l = t[1]);
  let u = l,
    d;
  t[2] === i
    ? (d = t[3])
    : ((d = (e) => {
        (e.preventDefault(), i());
      }),
      (t[2] = i),
      (t[3] = d));
  let f, p;
  t[4] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((f = (0, Q.jsx)(M, { className: `sr-only`, children: c })),
      (p = (0, Q.jsx)(F, { className: `sr-only`, children: u })),
      (t[4] = f),
      (t[5] = p))
    : ((f = t[4]), (p = t[5]));
  let m;
  t[6] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((m = (0, Q.jsx)(R, {
        children: (0, Q.jsx)(te, { title: c, subtitle: u }),
      })),
      (t[6] = m))
    : (m = t[6]);
  let h;
  t[7] === n
    ? (h = t[8])
    : ((h =
        n == null
          ? null
          : (0, Q.jsx)(R, {
              className: `text-token-error-foreground`,
              children: n,
            })),
      (t[7] = n),
      (t[8] = h));
  let g;
  t[9] === a
    ? (g = t[10])
    : ((g = () => {
        a(!1);
      }),
      (t[9] = a),
      (t[10] = g));
  let _;
  t[11] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((_ = (0, Q.jsx)(q, {
        id: `settings.keyboardShortcuts.resetAllConfirm.cancel`,
        defaultMessage: `Cancel`,
        description: `Cancel button label for resetting all customized keyboard shortcuts`,
      })),
      (t[11] = _))
    : (_ = t[11]);
  let v;
  t[12] === g
    ? (v = t[13])
    : ((v = (0, Q.jsx)(P, { color: `secondary`, onClick: g, children: _ })),
      (t[12] = g),
      (t[13] = v));
  let y;
  t[14] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = (0, Q.jsx)(q, {
        id: `settings.keyboardShortcuts.resetAllConfirm.confirm`,
        defaultMessage: `Reset all`,
        description: `Confirmation button label for resetting all customized keyboard shortcuts`,
      })),
      (t[14] = y))
    : (y = t[14]);
  let b;
  t[15] === r
    ? (b = t[16])
    : ((b = (0, Q.jsx)(P, {
        color: `danger`,
        loading: r,
        type: `submit`,
        children: y,
      })),
      (t[15] = r),
      (t[16] = b));
  let x;
  t[17] !== v || t[18] !== b
    ? ((x = (0, Q.jsx)(R, { children: (0, Q.jsxs)(V, { children: [v, b] }) })),
      (t[17] = v),
      (t[18] = b),
      (t[19] = x))
    : (x = t[19]);
  let S;
  t[20] !== x || t[21] !== d || t[22] !== h
    ? ((S = (0, Q.jsxs)(L, {
        as: `form`,
        onSubmit: d,
        children: [f, p, m, h, x],
      })),
      (t[20] = x),
      (t[21] = d),
      (t[22] = h),
      (t[23] = S))
    : (S = t[23]);
  let C;
  return (
    t[24] !== a || t[25] !== o || t[26] !== S
      ? ((C = (0, Q.jsx)(H, {
          open: o,
          onOpenChange: a,
          showDialogClose: !1,
          size: `compact`,
          children: S,
        })),
        (t[24] = a),
        (t[25] = o),
        (t[26] = S),
        (t[27] = C))
      : (C = t[27]),
    C
  );
}
function He(e) {
  let t = (0, X.c)(49),
    {
      allowsBareModifiers: n,
      allowsSequences: r,
      commandTitle: i,
      conflictingCommandTitle: a,
      onCancel: o,
      onCapture: s,
    } = e,
    c = G(),
    { platform: u } = me(),
    d = (0, Z.useRef)(0),
    f = (0, Z.useRef)(null),
    m = (0, Z.useRef)(null),
    h = (0, Z.useRef)(null),
    [g, _] = (0, Z.useState)(null),
    y;
  t[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((y = () => {
        (h.current != null && (clearTimeout(h.current), (h.current = null)),
          (m.current = null),
          _(null));
      }),
      (t[0] = y))
    : (y = t[0]);
  let b = y,
    x;
  t[1] === s
    ? (x = t[2])
    : ((x = (e) => {
        ((d.current += 1), (f.current = null), b(), s(e));
      }),
      (t[1] = s),
      (t[2] = x));
  let S = x,
    C;
  t[3] === o
    ? (C = t[4])
    : ((C = () => {
        ((d.current += 1), (f.current = null), b(), o());
      }),
      (t[3] = o),
      (t[4] = C));
  let w = C,
    T;
  t[5] !== r || t[6] !== S
    ? ((T = (e) => {
        let t = m.current;
        if (t != null) {
          S(`${t} ${e}`);
          return;
        }
        if (!r) {
          S(e);
          return;
        }
        if (e.includes(`+`)) {
          S(e);
          return;
        }
        ((m.current = e),
          _(`${v(e)} …`),
          (h.current = setTimeout(() => {
            m.current === e && S(e);
          }, p)));
      }),
      (t[5] = r),
      (t[6] = S),
      (t[7] = T))
    : (T = t[7]);
  let E = T,
    D;
  t[8] === S
    ? (D = t[9])
    : ((D = async (e) => {
        try {
          let { hotkey: t } = await l(`global-dictation-capture-fn-hotkey`);
          t != null && d.current === e && S(t);
        } catch {}
      }),
      (t[8] = S),
      (t[9] = D));
  let O = (0, Z.useEffectEvent)(D),
    k;
  t[10] !== n || t[11] !== O || t[12] !== u
    ? ((k = () => {
        if (!(!n || u !== `macOS`))
          return (
            (d.current += 1),
            O(d.current),
            () => {
              ((d.current += 1), (f.current = null), b());
            }
          );
      }),
      (t[10] = n),
      (t[11] = O),
      (t[12] = u),
      (t[13] = k))
    : (k = t[13]);
  let A;
  (t[14] !== n || t[15] !== u
    ? ((A = [n, u]), (t[14] = n), (t[15] = u), (t[16] = A))
    : (A = t[16]),
    (0, Z.useEffect)(k, A));
  let j, M;
  (t[17] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((j = () => () => {
        (h.current != null && clearTimeout(h.current), (m.current = null));
      }),
      (M = []),
      (t[17] = j),
      (t[18] = M))
    : ((j = t[17]), (M = t[18])),
    (0, Z.useEffect)(j, M));
  let N;
  t[19] !== c || t[20] !== g
    ? ((N =
        g ??
        c.formatMessage({
          id: `settings.keyboardShortcuts.capturePrompt`,
          defaultMessage: `Press shortcut`,
          description: `Prompt shown while capturing a keyboard shortcut for a command`,
        })),
      (t[19] = c),
      (t[20] = g),
      (t[21] = N))
    : (N = t[21]);
  let F;
  t[22] !== n || t[23] !== w || t[24] !== E
    ? ((F = (e) => {
        if (e.repeat) return;
        if ((e.preventDefault(), e.stopPropagation(), e.key === `Escape`)) {
          w();
          return;
        }
        if (n) {
          let t = Le(e.nativeEvent);
          if (t != null) {
            f.current = t;
            return;
          }
        }
        let t = Re(e.nativeEvent);
        t != null && E(t);
      }),
      (t[22] = n),
      (t[23] = w),
      (t[24] = E),
      (t[25] = F))
    : (F = t[25]);
  let I;
  t[26] !== n || t[27] !== S
    ? ((I = (e) => {
        if ((e.preventDefault(), e.stopPropagation(), !n)) return;
        let t = Fe(e.nativeEvent);
        t != null && f.current === t && S(t);
      }),
      (t[26] = n),
      (t[27] = S),
      (t[28] = I))
    : (I = t[28]);
  let L;
  t[29] !== i || t[30] !== c
    ? ((L = c.formatMessage(
        {
          id: `settings.keyboardShortcuts.captureAriaLabel`,
          defaultMessage: `Shortcut capture for {commandTitle}`,
          description: `Aria label for the shortcut capture input for a command`,
        },
        { commandTitle: i },
      )),
      (t[29] = i),
      (t[30] = c),
      (t[31] = L))
    : (L = t[31]);
  let R;
  t[32] !== w || t[33] !== N || t[34] !== F || t[35] !== I || t[36] !== L
    ? ((R = (0, Q.jsx)(`input`, {
        "data-codex-shortcut-capture": !0,
        autoFocus: !0,
        readOnly: !0,
        value: N,
        onBlur: w,
        onKeyDown: F,
        onKeyUp: I,
        "aria-label": L,
        className: `h-token-button-composer w-36 rounded-lg border border-token-border bg-token-input-background px-3 py-0 text-sm text-token-text-primary shadow-sm outline-none`,
      })),
      (t[32] = w),
      (t[33] = N),
      (t[34] = F),
      (t[35] = I),
      (t[36] = L),
      (t[37] = R))
    : (R = t[37]);
  let z;
  t[38] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((z = (0, Q.jsx)(q, {
        id: `settings.keyboardShortcuts.captureCancel`,
        defaultMessage: `Cancel`,
        description: `Button label to cancel shortcut capture`,
      })),
      (t[38] = z))
    : (z = t[38]);
  let B;
  t[39] === o
    ? (B = t[40])
    : ((B = (0, Q.jsx)(P, {
        color: `ghost`,
        size: `toolbar`,
        onMouseDown: Ue,
        onClick: o,
        children: z,
      })),
      (t[39] = o),
      (t[40] = B));
  let V;
  t[41] !== R || t[42] !== B
    ? ((V = (0, Q.jsxs)(`div`, {
        className: `flex items-center gap-2`,
        children: [R, B],
      })),
      (t[41] = R),
      (t[42] = B),
      (t[43] = V))
    : (V = t[43]);
  let H;
  t[44] === a
    ? (H = t[45])
    : ((H =
        a == null
          ? null
          : (0, Q.jsx)(`span`, {
              className: `text-xs text-token-editor-warning-foreground`,
              children: (0, Q.jsx)(q, {
                id: `settings.keyboardShortcuts.captureConflict`,
                defaultMessage: `Used by {commandTitle}`,
                description: `Warning shown while capturing a shortcut that is already used by another command`,
                values: { commandTitle: a },
              }),
            })),
      (t[44] = a),
      (t[45] = H));
  let U;
  return (
    t[46] !== V || t[47] !== H
      ? ((U = (0, Q.jsxs)(`div`, {
          className: `flex w-full flex-col items-start gap-1`,
          children: [V, H],
        })),
        (t[46] = V),
        (t[47] = H),
        (t[48] = U))
      : (U = t[48]),
    U
  );
}
function Ue(e) {
  e.preventDefault();
}
function We(e, t) {
  return e === t || e.startsWith(`${t} `);
}
function Ge({
  accelerator: e,
  commandId: t,
  intl: n,
  keymapState: r,
  platform: i,
  registeredCommands: a,
}) {
  for (let o of $)
    if (
      o.id !== t &&
      !m(o.id, t) &&
      D(o.id, r, i).some((t) => qe(t.accelerator, e, i === `macOS`))
    )
      return J(o, n, O(a, o.id)).title;
  return null;
}
function Ke(e, t, n) {
  return v(e, n) === v(t, n);
}
function qe(e, t, n) {
  let r = h(e).map((e) => v(e, n)),
    i = h(t).map((e) => v(e, n)),
    a = Math.min(r.length, i.length);
  return (
    a > 0 &&
    (r.length === a || i.length === a) &&
    r.slice(0, a).every((e, t) => e === i[t])
  );
}
function Je(e) {
  let t = (0, X.c)(2),
    { shortcutLabel: n } = e,
    r;
  return (
    t[0] === n
      ? (r = t[1])
      : ((r = (0, Q.jsx)(`span`, {
          className: `flex min-h-8 items-center gap-1 text-token-text-secondary`,
          children:
            n == null
              ? (0, Q.jsx)(q, {
                  id: `settings.keyboardShortcuts.unassigned`,
                  defaultMessage: `Unassigned`,
                  description: `Label shown when an action has no shortcut`,
                })
              : (0, Q.jsx)(U, {
                  className: `!px-2 !py-1 !text-sm`,
                  keysLabel: n,
                }),
        })),
        (t[0] = n),
        (t[1] = r)),
    r
  );
}
function Ye(e) {
  let t = (0, X.c)(20),
    {
      commandTitle: n,
      hasCustomBinding: r,
      hasShortcut: i,
      isPending: a,
      showReset: o,
      onClear: s,
      onReset: c,
    } = e,
    l = G(),
    u;
  t[0] !== n || t[1] !== l
    ? ((u = l.formatMessage(
        {
          id: `settings.keyboardShortcuts.clearAriaLabel`,
          defaultMessage: `Clear shortcut for {commandTitle}`,
          description: `Aria label for clearing a shortcut`,
        },
        { commandTitle: n },
      )),
      (t[0] = n),
      (t[1] = l),
      (t[2] = u))
    : (u = t[2]);
  let d = u,
    f;
  t[3] !== n || t[4] !== l
    ? ((f = l.formatMessage(
        {
          id: `settings.keyboardShortcuts.resetAriaLabel`,
          defaultMessage: `Reset shortcut for {commandTitle}`,
          description: `Aria label for resetting a shortcut to its default`,
        },
        { commandTitle: n },
      )),
      (t[3] = n),
      (t[4] = l),
      (t[5] = f))
    : (f = t[5]);
  let p = f,
    m;
  t[6] !== d || t[7] !== i || t[8] !== a || t[9] !== s
    ? ((m = i
        ? (0, Q.jsx)(W, {
            tooltipContent: d,
            children: (0, Q.jsx)(P, {
              "aria-label": d,
              className: `disabled:!opacity-100`,
              color: `ghost`,
              size: `toolbar`,
              uniform: !0,
              disabled: a,
              onClick: s,
              children: (0, Q.jsx)(ye, { className: `icon-xs` }),
            }),
          })
        : null),
      (t[6] = d),
      (t[7] = i),
      (t[8] = a),
      (t[9] = s),
      (t[10] = m))
    : (m = t[10]);
  let h;
  t[11] !== r || t[12] !== a || t[13] !== c || t[14] !== p || t[15] !== o
    ? ((h =
        o && r
          ? (0, Q.jsx)(W, {
              tooltipContent: p,
              children: (0, Q.jsx)(P, {
                "aria-label": p,
                className: `disabled:!opacity-100`,
                color: `ghost`,
                size: `toolbar`,
                uniform: !0,
                disabled: a,
                onClick: c,
                children: (0, Q.jsx)(be, { className: `icon-xs` }),
              }),
            })
          : null),
      (t[11] = r),
      (t[12] = a),
      (t[13] = c),
      (t[14] = p),
      (t[15] = o),
      (t[16] = h))
    : (h = t[16]);
  let g;
  return (
    t[17] !== m || t[18] !== h
      ? ((g = (0, Q.jsxs)(`div`, {
          className: `flex items-center justify-end gap-1`,
          children: [m, h],
        })),
        (t[17] = m),
        (t[18] = h),
        (t[19] = g))
      : (g = t[19]),
    g
  );
}
function Xe(e) {
  let t = (0, X.c)(28),
    {
      canAppend: n,
      commandTitle: r,
      hasShortcut: i,
      isPending: a,
      onStartCapture: o,
    } = e,
    s = G(),
    [c, l] = (0, Z.useState)(!1),
    u;
  if (!i) {
    let e;
    (t[0] !== r || t[1] !== s
      ? ((e = s.formatMessage(
          {
            id: `settings.keyboardShortcuts.setAriaLabel`,
            defaultMessage: `Set shortcut for {commandTitle}`,
            description: `Aria label for setting a shortcut for a command`,
          },
          { commandTitle: r },
        )),
        (t[0] = r),
        (t[1] = s),
        (t[2] = e))
      : (e = t[2]),
      (u = e));
  } else if (c) {
    let e;
    (t[3] !== r || t[4] !== s
      ? ((e = s.formatMessage(
          {
            id: `settings.keyboardShortcuts.createAriaLabel`,
            defaultMessage: `Create new shortcut for {commandTitle}`,
            description: `Aria label for adding another shortcut for a command`,
          },
          { commandTitle: r },
        )),
        (t[3] = r),
        (t[4] = s),
        (t[5] = e))
      : (e = t[5]),
      (u = e));
  } else {
    let e;
    (t[6] !== r || t[7] !== s
      ? ((e = s.formatMessage(
          {
            id: `settings.keyboardShortcuts.changeAriaLabel`,
            defaultMessage: `Change shortcut for {commandTitle}`,
            description: `Aria label for changing a shortcut for a command`,
          },
          { commandTitle: r },
        )),
        (t[6] = r),
        (t[7] = s),
        (t[8] = e))
      : (e = t[8]),
      (u = e));
  }
  let d, f;
  t[9] !== n || t[10] !== i
    ? ((d = (e) => {
        l(n && i && e.shiftKey);
      }),
      (f = (e) => {
        l(n && i && e.shiftKey);
      }),
      (t[9] = n),
      (t[10] = i),
      (t[11] = d),
      (t[12] = f))
    : ((d = t[11]), (f = t[12]));
  let p;
  t[13] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((p = () => {
        l(!1);
      }),
      (t[13] = p))
    : (p = t[13]);
  let m;
  t[14] !== n || t[15] !== i || t[16] !== o
    ? ((m = (e) => {
        let t = `set`;
        (i && (t = n && e.shiftKey ? `append` : `replace`), o(t));
      }),
      (t[14] = n),
      (t[15] = i),
      (t[16] = o),
      (t[17] = m))
    : (m = t[17]);
  let h;
  t[18] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((h = (0, Q.jsx)(Te, { className: `icon-xs` })), (t[18] = h))
    : (h = t[18]);
  let g;
  t[19] !== a || t[20] !== u || t[21] !== d || t[22] !== f || t[23] !== m
    ? ((g = (0, Q.jsx)(P, {
        "aria-label": u,
        className: `opacity-0 group-focus-within:opacity-100 group-hover:opacity-100 disabled:!opacity-0 group-focus-within:disabled:!opacity-40 group-hover:disabled:!opacity-40`,
        color: `ghost`,
        size: `toolbar`,
        uniform: !0,
        disabled: a,
        onMouseEnter: d,
        onMouseMove: f,
        onMouseLeave: p,
        onClick: m,
        children: h,
      })),
      (t[19] = a),
      (t[20] = u),
      (t[21] = d),
      (t[22] = f),
      (t[23] = m),
      (t[24] = g))
    : (g = t[24]);
  let _;
  return (
    t[25] !== u || t[26] !== g
      ? ((_ = (0, Q.jsx)(W, { tooltipContent: u, children: g })),
        (t[25] = u),
        (t[26] = g),
        (t[27] = _))
      : (_ = t[27]),
    _
  );
}
function Ze({
  commandId: e,
  hasCustomBinding: t,
  platform: n,
  shortcutEntries: r,
}) {
  if (!t) return null;
  let i = C({ commandId: e, isMacOS: n === `macOS` }),
    a = r.findIndex((e, t) => e.accelerator !== i[t]);
  return a === -1 ? 0 : a;
}
async function Y({
  commandId: e,
  intl: t,
  setCommandKeybinding: n,
  setErrorByCommandId: r,
  update: i,
}) {
  r((t) => ({ ...t, [e]: void 0 }));
  try {
    await n.mutateAsync({ commandId: e, update: i });
  } catch (n) {
    r((r) => ({
      ...r,
      [e]:
        n instanceof Error
          ? n.message
          : t.formatMessage({
              id: `settings.keyboardShortcuts.updateError`,
              defaultMessage: `Failed to update shortcut`,
              description: `Fallback error shown when updating an action shortcut fails`,
            }),
    }));
  }
}
var X, Z, Q, $;
e(() => {
  ((X = c()),
    n(),
    x(),
    r(),
    (Z = t(i(), 1)),
    ne(),
    E(),
    z(),
    ae(),
    j(),
    A(),
    k(),
    I(),
    ee(),
    pe(),
    fe(),
    Ne(),
    Ce(),
    Ee(),
    _e(),
    ve(),
    y(),
    le(),
    ce(),
    oe(),
    _(),
    ge(),
    je(),
    Ie(),
    ke(),
    xe(),
    De(),
    re(),
    o(),
    (Q = u()),
    ($ = b.filter(w)));
})();
export { ze as KeyboardShortcutsSettings };
//# sourceMappingURL=keyboard-shortcuts-settings-CTlFYERg.js.map
