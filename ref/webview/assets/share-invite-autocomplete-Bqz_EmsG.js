import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  gc as t,
  lc as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  fs as r,
  ps as i,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~kg2pu5rs-N3llppXI.js";
import {
  Dm as a,
  Om as o,
  Op as s,
  hh as c,
  kp as l,
  mh as u,
  op as d,
  sp as f,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
function p(e) {
  let t = (0, v.c)(68),
    {
      ariaLabel: n,
      disabled: r,
      emptyMessage: o,
      getRemoveLabel: s,
      leadingContent: c,
      loadingLabel: l,
      loadingSize: f,
      options: p,
      optionSections: g,
      placeholder: b,
      query: x,
      selectedOptionIds: S,
      selectedOptions: C,
      showLoadingDropdown: ee,
      trailingContent: te,
      variant: ne,
      onEscape: w,
      onQueryChange: T,
      onRemoveOption: E,
      onSelectOption: re,
    } = e,
    D = r === void 0 ? !1 : r,
    ie = f === void 0 ? `default` : f,
    O;
  t[0] === C
    ? (O = t[1])
    : ((O = C === void 0 ? [] : C), (t[0] = C), (t[1] = O));
  let k = O,
    A = ee === void 0 ? !0 : ee,
    j = ne === void 0 ? `field` : ne,
    M;
  t[2] !== g || t[3] !== p
    ? ((M = g?.flatMap(m) ?? p), (t[2] = g), (t[3] = p), (t[4] = M))
    : (M = t[4]);
  let N = M,
    P;
  t[5] !== D || t[6] !== N || t[7] !== x || t[8] !== A || t[9] !== j
    ? ((P =
        j === `menu`
          ? N != null || (A && x.trim().length > 0)
          : !D && x.trim().length > 0 && (A || N != null)),
      (t[5] = D),
      (t[6] = N),
      (t[7] = x),
      (t[8] = A),
      (t[9] = j),
      (t[10] = P))
    : (P = t[10]);
  let F = P,
    I = F && !D,
    L;
  t[11] !== T || t[12] !== re
    ? ((L = (e) => {
        (re(e), T(``));
      }),
      (t[11] = T),
      (t[12] = re),
      (t[13] = L))
    : (L = t[13]);
  let R;
  t[14] !== w || t[15] !== T
    ? ((R = () => {
        (T(``), w?.());
      }),
      (t[14] = w),
      (t[15] = T),
      (t[16] = R))
    : (R = t[16]);
  let z;
  t[17] !== N || t[18] !== L || t[19] !== R || t[20] !== I
    ? ((z = { items: N, isActive: I, onSelect: L, onEscape: R }),
      (t[17] = N),
      (t[18] = L),
      (t[19] = R),
      (t[20] = I),
      (t[21] = z))
    : (z = t[21]);
  let {
      highlightedIndex: B,
      listRef: V,
      getInputProps: H,
      getItemProps: U,
    } = i(z),
    ae = j === `field` && `relative`,
    W;
  t[22] === ae ? (W = t[23]) : ((W = u(ae)), (t[22] = ae), (t[23] = W));
  let oe =
      j === `field`
        ? `min-h-[30px] rounded-md border border-token-input-border bg-token-input-background px-2 py-1 focus-within:border-token-focus-border`
        : `h-11 border-b border-token-border px-3`,
    G;
  t[24] === oe
    ? (G = t[25])
    : ((G = u(
        `flex w-full flex-wrap items-center gap-1 text-base text-token-input-foreground`,
        oe,
      )),
      (t[24] = oe),
      (t[25] = G));
  let K;
  t[26] !== s || t[27] !== E || t[28] !== k || t[29] !== j
    ? ((K =
        j === `field`
          ? k.map((e) =>
              (0, y.jsxs)(
                `span`,
                {
                  className: `inline-flex min-w-0 items-center gap-1 rounded-md bg-token-badge-background px-1 py-[1px] text-sm text-token-badge-foreground`,
                  children: [
                    (0, y.jsx)(`span`, {
                      className: `truncate`,
                      children: e.chipLabel ?? e.label,
                    }),
                    s != null && E != null
                      ? (0, y.jsx)(`button`, {
                          type: `button`,
                          "aria-label": s(e),
                          className: `cursor-interaction rounded-sm text-token-description-foreground hover:text-token-foreground`,
                          onClick: () => {
                            E(e);
                          },
                          children: (0, y.jsx)(d, {
                            "aria-hidden": !0,
                            className: `icon-2xs`,
                          }),
                        })
                      : null,
                  ],
                },
                e.id,
              ),
            )
          : null),
      (t[26] = s),
      (t[27] = E),
      (t[28] = k),
      (t[29] = j),
      (t[30] = K))
    : (K = t[30]);
  let q;
  t[31] === F
    ? (q = t[32])
    : ((q = (e) => {
        F && e.key === `Enter` && e.preventDefault();
      }),
      (t[31] = F),
      (t[32] = q));
  let J;
  t[33] !== H || t[34] !== q
    ? ((J = H({ onKeyDown: q })), (t[33] = H), (t[34] = q), (t[35] = J))
    : (J = t[35]);
  let se = j === `menu` || k.length === 0 ? b : void 0,
    Y;
  t[36] === T
    ? (Y = t[37])
    : ((Y = (e) => {
        T(e.currentTarget.value);
      }),
      (t[36] = T),
      (t[37] = Y));
  let X;
  t[38] !== n ||
  t[39] !== D ||
  t[40] !== x ||
  t[41] !== J ||
  t[42] !== se ||
  t[43] !== Y
    ? ((X = (0, y.jsx)(`input`, {
        ...J,
        "aria-label": n,
        className: `min-w-36 flex-1 bg-transparent outline-none placeholder:text-token-input-placeholder-foreground`,
        disabled: D,
        placeholder: se,
        value: x,
        onChange: Y,
      })),
      (t[38] = n),
      (t[39] = D),
      (t[40] = x),
      (t[41] = J),
      (t[42] = se),
      (t[43] = Y),
      (t[44] = X))
    : (X = t[44]);
  let Z;
  t[45] !== c || t[46] !== G || t[47] !== K || t[48] !== X || t[49] !== te
    ? ((Z = (0, y.jsxs)(`div`, { className: G, children: [c, K, X, te] })),
      (t[45] = c),
      (t[46] = G),
      (t[47] = K),
      (t[48] = X),
      (t[49] = te),
      (t[50] = Z))
    : (Z = t[50]);
  let Q;
  t[51] !== D ||
  t[52] !== o ||
  t[53] !== U ||
  t[54] !== B ||
  t[55] !== N ||
  t[56] !== F ||
  t[57] !== V ||
  t[58] !== l ||
  t[59] !== ie ||
  t[60] !== g ||
  t[61] !== S ||
  t[62] !== j
    ? ((Q = F
        ? (0, y.jsx)(`div`, {
            className: u(
              `w-full overflow-hidden bg-token-dropdown-background`,
              j === `field` &&
                `absolute z-10 mt-2 rounded-md border border-token-border shadow-sm`,
            ),
            children: (0, y.jsx)(`div`, {
              ref: V,
              className: u(
                `flex max-h-64 flex-col overflow-y-auto p-1`,
                N == null && (ie === `compact` ? `min-h-16` : `min-h-64`),
              ),
              role: `listbox`,
              children:
                N == null
                  ? (0, y.jsx)(`div`, {
                      "aria-label": l,
                      className: `flex flex-1 items-center justify-center text-token-description-foreground`,
                      role: l == null ? void 0 : `status`,
                      children: (0, y.jsx)(a, { className: `icon-xs` }),
                    })
                  : N.length === 0
                    ? (0, y.jsx)(`div`, {
                        className: `px-2 py-1.5 text-sm text-token-input-placeholder-foreground`,
                        children: o,
                      })
                    : g == null
                      ? N.map((e, t) =>
                          (0, y.jsx)(
                            _,
                            {
                              highlightedIndex: B,
                              index: t,
                              option: e,
                              selected: S?.has(e.id),
                              disabled: D,
                              getItemProps: U,
                            },
                            e.id,
                          ),
                        )
                      : (0, y.jsx)(h, {
                          highlightedIndex: B,
                          optionSections: g,
                          selectedOptionIds: S,
                          disabled: D,
                          getItemProps: U,
                        }),
            }),
          })
        : null),
      (t[51] = D),
      (t[52] = o),
      (t[53] = U),
      (t[54] = B),
      (t[55] = N),
      (t[56] = F),
      (t[57] = V),
      (t[58] = l),
      (t[59] = ie),
      (t[60] = g),
      (t[61] = S),
      (t[62] = j),
      (t[63] = Q))
    : (Q = t[63]);
  let $;
  return (
    t[64] !== W || t[65] !== Z || t[66] !== Q
      ? (($ = (0, y.jsxs)(`div`, { className: W, children: [Z, Q] })),
        (t[64] = W),
        (t[65] = Z),
        (t[66] = Q),
        (t[67] = $))
      : ($ = t[67]),
    $
  );
}
function m(e) {
  return e.options;
}
function h(e) {
  let t = (0, v.c)(8),
    {
      disabled: n,
      highlightedIndex: r,
      optionSections: i,
      selectedOptionIds: a,
      getItemProps: o,
    } = e,
    s;
  t[0] !== n || t[1] !== o || t[2] !== r || t[3] !== i || t[4] !== a
    ? ((s = i.flatMap((e, t) => {
        if (e.options.length === 0) return [];
        let s = i.slice(0, t).reduce(g, 0);
        return [
          (0, y.jsxs)(
            `div`,
            {
              className: `flex flex-col border-b border-token-border last:border-b-0`,
              children: [
                (0, y.jsx)(`div`, {
                  className: `px-2 pt-2 pb-1 text-xs font-medium text-token-description-foreground`,
                  children: e.label,
                }),
                e.options.map((e, t) =>
                  (0, y.jsx)(
                    _,
                    {
                      highlightedIndex: r,
                      index: s + t,
                      option: e,
                      selected: a?.has(e.id),
                      disabled: n,
                      getItemProps: o,
                    },
                    e.id,
                  ),
                ),
              ],
            },
            e.id,
          ),
        ];
      })),
      (t[0] = n),
      (t[1] = o),
      (t[2] = r),
      (t[3] = i),
      (t[4] = a),
      (t[5] = s))
    : (s = t[5]);
  let c;
  return (
    t[6] === s
      ? (c = t[7])
      : ((c = (0, y.jsx)(y.Fragment, { children: s })), (t[6] = s), (t[7] = c)),
    c
  );
}
function g(e, t) {
  return e + t.options.length;
}
function _(e) {
  let t = (0, v.c)(25),
    {
      disabled: n,
      highlightedIndex: r,
      index: i,
      option: a,
      selected: o,
      getItemProps: c,
    } = e,
    l = a.Icon,
    d;
  t[0] !== c || t[1] !== i
    ? ((d = c(i)), (t[0] = c), (t[1] = i), (t[2] = d))
    : (d = t[2]);
  let f = o ?? i === r,
    p = i === r && `bg-token-list-hover-background`,
    m;
  t[3] === p
    ? (m = t[4])
    : ((m = u(
        `cursor-interaction flex w-full items-start gap-2 rounded-sm px-2 py-1.5 text-left disabled:cursor-not-allowed`,
        p,
      )),
      (t[3] = p),
      (t[4] = m));
  let h;
  t[5] !== l || t[6] !== a.imageUrl
    ? ((h =
        a.imageUrl == null
          ? l == null
            ? null
            : (0, y.jsx)(l, {
                "aria-hidden": !0,
                className: `icon-sm mt-0.5 shrink-0`,
              })
          : (0, y.jsx)(`img`, {
              alt: ``,
              className: `size-5 shrink-0 rounded-full object-cover`,
              src: a.imageUrl,
            })),
      (t[5] = l),
      (t[6] = a.imageUrl),
      (t[7] = h))
    : (h = t[7]);
  let g;
  t[8] === a.label
    ? (g = t[9])
    : ((g = (0, y.jsx)(`span`, {
        className: `text-sm text-token-foreground`,
        children: a.label,
      })),
      (t[8] = a.label),
      (t[9] = g));
  let _;
  t[10] === a.secondaryLabel
    ? (_ = t[11])
    : ((_ =
        a.secondaryLabel == null
          ? null
          : (0, y.jsx)(`span`, {
              className: `text-sm text-token-description-foreground`,
              children: a.secondaryLabel,
            })),
      (t[10] = a.secondaryLabel),
      (t[11] = _));
  let b;
  t[12] !== g || t[13] !== _
    ? ((b = (0, y.jsxs)(`span`, {
        className: `flex min-w-0 flex-1 flex-col`,
        children: [g, _],
      })),
      (t[12] = g),
      (t[13] = _),
      (t[14] = b))
    : (b = t[14]);
  let x;
  t[15] === o
    ? (x = t[16])
    : ((x = o
        ? (0, y.jsx)(s, { "aria-hidden": !0, className: `icon-sm shrink-0` })
        : null),
      (t[15] = o),
      (t[16] = x));
  let S;
  return (
    t[17] !== n ||
    t[18] !== d ||
    t[19] !== f ||
    t[20] !== m ||
    t[21] !== h ||
    t[22] !== b ||
    t[23] !== x
      ? ((S = (0, y.jsxs)(`button`, {
          type: `button`,
          ...d,
          "aria-selected": f,
          disabled: n,
          className: m,
          role: `option`,
          children: [h, b, x],
        })),
        (t[17] = n),
        (t[18] = d),
        (t[19] = f),
        (t[20] = m),
        (t[21] = h),
        (t[22] = b),
        (t[23] = x),
        (t[24] = S))
      : (S = t[24]),
    S
  );
}
var v,
  y,
  b = e(() => {
    ((v = t()), c(), o(), l(), f(), r(), (y = n()));
  });
export { b as n, p as t };
//# sourceMappingURL=share-invite-autocomplete-Bqz_EmsG.js.map
