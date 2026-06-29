import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import {
  D as t,
  E as n,
  Ko as r,
  O as i,
  Q as a,
  Vo as o,
  gc as s,
} from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Hm as c,
  Um as l,
  zm as u,
} from "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~ko8xg8gw-DEdbMp8p.js";
function d(e) {
  return e == null || e.length === 0
    ? f
    : [
        ...f,
        ...e.map((e) => ({
          assetRef: `codex`,
          description: e.description,
          displayName: e.displayName,
          id: e.id,
          spritesheetUrl: e.spritesheetDataUrl,
        })),
      ];
}
var f,
  p = e(() => {
    f = [
      {
        assetRef: `codex`,
        description: `The original Codex companion.`,
        displayName: `Codex`,
        id: `codex`,
      },
      {
        assetRef: `dewey`,
        description: `A tidy duck for calm workspace days.`,
        displayName: `Dewey`,
        id: `dewey`,
      },
      {
        assetRef: `fireball`,
        description: `Hot path energy for fast iteration.`,
        displayName: `Fireball`,
        id: `fireball`,
      },
      {
        assetRef: `hoots`,
        description: `A sharp-eyed owl for polished work in a blink.`,
        displayName: `Hoots`,
        id: `hoots`,
      },
      {
        assetRef: `rocky`,
        description: `A steady rock when the diff gets large.`,
        displayName: `Rocky`,
        id: `rocky`,
      },
      {
        assetRef: `seedy`,
        description: `Small green shoots for new ideas.`,
        displayName: `Seedy`,
        id: `seedy`,
      },
      {
        assetRef: `stacky`,
        description: `A balanced stack for deep work.`,
        displayName: `Stacky`,
        id: `stacky`,
      },
      {
        assetRef: `bsod`,
        description: `A tiny blue-screen gremlin.`,
        displayName: `BSOD`,
        id: `bsod`,
      },
      {
        assetRef: `null-signal`,
        description: `Quiet signal from the void.`,
        displayName: `Null Signal`,
        id: `null-signal`,
      },
    ];
  });
function m(e, t = f) {
  return t.find((t) => t.id === e) ?? t.find((e) => e.id === v) ?? t[0] ?? f[0];
}
function h(e, t) {
  return t?.startsWith(`custom:`) === !0 && e.id !== t;
}
function g(e) {
  let t = (0, _.c)(9),
    i = r(n),
    o = l(a.selectedAvatarId),
    s;
  t[0] !== e || t[1] !== o
    ? ((s = m(o, e)), (t[0] = e), (t[1] = o), (t[2] = s))
    : (s = t[2]);
  let u;
  t[3] === i
    ? (u = t[4])
    : ((u = (e) => {
        c(i, a.selectedAvatarId, e);
      }),
      (t[3] = i),
      (t[4] = u));
  let d;
  return (
    t[5] !== o || t[6] !== s || t[7] !== u
      ? ((d = {
          selectedAvatar: s,
          selectedAvatarId: o,
          setSelectedAvatarId: u,
        }),
        (t[5] = o),
        (t[6] = s),
        (t[7] = u),
        (t[8] = d))
      : (d = t[8]),
    d
  );
}
var _,
  v,
  y = e(() => {
    ((_ = s()), o(), i(), t(), u(), p(), (v = `codex`));
  });
export { d as a, f as i, h as n, p as o, g as r, y as t };
//# sourceMappingURL=app-initial~app-main~pet-install-modal-host~avatar-overlay-page~avatar-overlay-native-page~~s9e72i2g-DsW4BsRC.js.map
