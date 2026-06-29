import { n as e, s as t } from "./rolldown-runtime-Czos8NxU.js";
import {
  _c as n,
  gc as r,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  nv as i,
  tv as a,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function o() {
  let e = (0, l.c)(1),
    t;
  (e[0] === Symbol.for(`react.memo_cache_sentinel`)
    ? ((t = []), (e[0] = t))
    : (t = e[0]),
    (0, u.useEffect)(s, t));
}
function s() {
  let e = c;
  return (
    window.addEventListener(`keydown`, e),
    () => {
      window.removeEventListener(`keydown`, e);
    }
  );
}
function c(e) {
  e.key !== `Escape` ||
    e.defaultPrevented ||
    e.metaKey ||
    e.ctrlKey ||
    e.altKey ||
    e.shiftKey ||
    (e.preventDefault(), e.stopPropagation(), a.hotkeyWindowHotkeys?.dismiss());
}
var l,
  u,
  d = e(() => {
    ((l = r()), (u = t(n(), 1)), i());
  });
export { o as n, d as t };
//# sourceMappingURL=use-hotkey-window-dismiss-on-escape-D4r0Oase.js.map
