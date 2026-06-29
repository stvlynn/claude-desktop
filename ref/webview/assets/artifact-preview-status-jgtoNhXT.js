import { n as e } from "./rolldown-runtime-Czos8NxU.js";
import { lc as t } from "./app-initial~app-main~remote-conversation-page~hotkey-window-thread-page~automations-page~th~bnlvjk3w-ClqKjb2h.js";
import {
  Iy as n,
  zy as r,
} from "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~projects-index-page~app~iy8s9c2d-BUvvfhQQ.js";
function i(e) {
  return e === `ready`
    ? null
    : (0, a.jsx)(`div`, {
        className: `flex h-full items-center justify-center px-6 text-center text-sm text-token-text-tertiary`,
        children:
          e === `loading`
            ? (0, a.jsx)(`span`, {
                className: `loading-shimmer-pure-text font-medium`,
                children: (0, a.jsx)(r, {
                  id: `artifactTab.previewLoading`,
                  defaultMessage: `Preparing preview…`,
                  description: `Loading state shown while the artifact preview is loading`,
                }),
              })
            : (0, a.jsx)(r, {
                id: `artifactTab.previewError`,
                defaultMessage: `Couldn’t load this preview`,
                description: `Error state shown when an artifact preview fails to load`,
              }),
      });
}
var a,
  o = e(() => {
    (n(), (a = t()));
  });
export { i as n, o as t };
//# sourceMappingURL=artifact-preview-status-jgtoNhXT.js.map
