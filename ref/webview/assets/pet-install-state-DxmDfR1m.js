import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as t,
  E as n,
  Rs as r,
  Vo as i,
  c as a,
  i as o,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
async function s(e, t, n = (e) => o(`pet-install-preview`, { params: e })) {
  if (e.get(u)?.status === `installing`) return;
  let r = { ...t, status: `loading` };
  e.set(u, r);
  try {
    let i = await n(t);
    if (e.get(u) !== r) return;
    e.set(u, { ...t, status: `ready`, preview: i });
  } catch {
    if (e.get(u) !== r) return;
    e.set(u, { ...t, status: `previewError` });
  }
}
async function c(e, t, n = (e) => o(`pet-install`, { params: e })) {
  let r = e.get(u);
  if (r?.status !== `ready` && r?.status !== `installError`) return;
  let i = { ...r, status: `installing` };
  e.set(u, i);
  let a;
  try {
    a = await n({
      name: r.name,
      description: r.description,
      imageUrl: r.imageUrl,
    });
  } catch {
    if (e.get(u) !== i) return;
    e.set(u, { ...r, status: `installError` });
    return;
  }
  e.get(u) === i &&
    (e.set(u, { ...r, status: `installed`, installedAvatarId: a.id }),
    await t().catch(() => void 0));
}
function l(e) {
  e.set(u, null);
}
var u,
  d = e(() => {
    (i(), t(), a(), (u = r(n, null)));
  });
export { s as a, u as i, d as n, c as r, l as t };
//# sourceMappingURL=pet-install-state-DxmDfR1m.js.map
