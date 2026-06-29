import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  gc as t,
  lc as n,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  hh as r,
  lo as i,
  mh as a,
  uo as o,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
import {
  Iy as s,
  Vy as c,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
import {
  Es as l,
  Ts as u,
} from "./app-initial~app-main~onboarding-page-CgNc-Bk2.js";
function d(e) {
  let t = (0, f.c)(30),
    {
      autoFocus: n,
      id: r,
      inputRef: o,
      className: s,
      label: l,
      maxLength: d,
      onKeyDown: m,
      onSearchQueryChange: h,
      placeholder: g,
      searchQuery: _,
      trailingControl: v,
      variant: y,
    } = e,
    b = y === void 0 ? `default` : y,
    x = c(),
    S =
      b === `composer`
        ? `h-8 rounded-full bg-token-input-background/90 electron:dark:bg-token-dropdown-background`
        : `h-token-button-composer rounded-lg bg-token-input-background/75 shadow-sm`,
    C;
  t[0] !== s || t[1] !== S
    ? ((C = a(
        `no-drag flex items-center gap-2 border border-token-input-border px-2.5 py-0 text-base leading-[18px] backdrop-blur-sm`,
        S,
        s,
      )),
      (t[0] = s),
      (t[1] = S),
      (t[2] = C))
    : (C = t[2]);
  let w;
  t[3] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((w = (0, p.jsx)(i, { className: `icon-sm text-token-text-secondary` })),
      (t[3] = w))
    : (w = t[3]);
  let T;
  t[4] !== r || t[5] !== l
    ? ((T = (0, p.jsx)(`label`, {
        className: `sr-only`,
        htmlFor: r,
        children: l,
      })),
      (t[4] = r),
      (t[5] = l),
      (t[6] = T))
    : (T = t[6]);
  let E;
  t[7] === h
    ? (E = t[8])
    : ((E = (e) => {
        h(e.target.value);
      }),
      (t[7] = h),
      (t[8] = E));
  let D;
  t[9] !== n ||
  t[10] !== r ||
  t[11] !== o ||
  t[12] !== d ||
  t[13] !== m ||
  t[14] !== g ||
  t[15] !== _ ||
  t[16] !== E
    ? ((D = (0, p.jsx)(`input`, {
        autoFocus: n,
        id: r,
        ref: o,
        className: `min-w-0 flex-1 bg-transparent text-base leading-[18px] text-token-input-foreground outline-none select-text placeholder:text-token-input-placeholder-foreground [&::placeholder]:select-none`,
        maxLength: d,
        type: `text`,
        value: _,
        onChange: E,
        onKeyDown: m,
        placeholder: g,
      })),
      (t[9] = n),
      (t[10] = r),
      (t[11] = o),
      (t[12] = d),
      (t[13] = m),
      (t[14] = g),
      (t[15] = _),
      (t[16] = E),
      (t[17] = D))
    : (D = t[17]);
  let O;
  t[18] !== x || t[19] !== h || t[20] !== _.length
    ? ((O =
        _.length > 0
          ? (0, p.jsx)(`button`, {
              "aria-label": x.formatMessage({
                id: `skills.pageSearchInput.clear`,
                defaultMessage: `Clear search`,
                description: `Accessible label for clearing a search field`,
              }),
              className: `flex shrink-0 cursor-interaction text-token-text-secondary hover:text-token-foreground`,
              type: `button`,
              onClick: () => {
                h(``);
              },
              children: (0, p.jsx)(u, { className: `icon-sm` }),
            })
          : null),
      (t[18] = x),
      (t[19] = h),
      (t[20] = _.length),
      (t[21] = O))
    : (O = t[21]);
  let k;
  t[22] === v
    ? (k = t[23])
    : ((k =
        v == null
          ? null
          : (0, p.jsx)(`div`, {
              className: `flex shrink-0 items-center`,
              children: v,
            })),
      (t[22] = v),
      (t[23] = k));
  let A;
  return (
    t[24] !== C || t[25] !== T || t[26] !== D || t[27] !== O || t[28] !== k
      ? ((A = (0, p.jsxs)(`div`, { className: C, children: [w, T, D, O, k] })),
        (t[24] = C),
        (t[25] = T),
        (t[26] = D),
        (t[27] = O),
        (t[28] = k),
        (t[29] = A))
      : (A = t[29]),
    A
  );
}
var f,
  p,
  m = e(() => {
    ((f = t()), r(), s(), o(), l(), (p = n()));
  });
export { m as n, d as t };
//# sourceMappingURL=page-search-input-rbsdCe5M.js.map
