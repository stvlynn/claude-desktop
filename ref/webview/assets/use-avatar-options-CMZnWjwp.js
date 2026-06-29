import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  Vo as t,
  gc as n,
  qo as r,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  a as i,
  o as a,
} from "./app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g-DsW4BsRC.js";
import { n as o, r as s } from "./custom-avatars-query-tr8cLFBL.js";
function c() {
  let e = (0, l.c)(8),
    { data: t, isError: n, isFetching: a, isLoading: s } = r(o),
    c = t?.avatarDirectory ?? null,
    u = t?.avatars,
    d;
  e[0] === u ? (d = e[1]) : ((d = i(u)), (e[0] = u), (e[1] = d));
  let f;
  return (
    e[2] !== n || e[3] !== a || e[4] !== s || e[5] !== c || e[6] !== d
      ? ((f = {
          avatarDirectory: c,
          avatarOptions: d,
          isError: n,
          isFetching: a,
          isLoading: s,
        }),
        (e[2] = n),
        (e[3] = a),
        (e[4] = s),
        (e[5] = c),
        (e[6] = d),
        (e[7] = f))
      : (f = e[7]),
    f
  );
}
var l,
  u = e(() => {
    ((l = n()), t(), a(), s());
  });
export { c as n, u as t };
//# sourceMappingURL=use-avatar-options-CMZnWjwp.js.map
