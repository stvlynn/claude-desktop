// Restored from ref/webview/assets/dist-8ofUNnGK.js
// Dist chunk restored from the Codex webview bundle.
import React from "react";
import { distN } from "./radix-ui-core";
export function Dist(distParam1) {
  let [distValue2, _Dist] = React.useState(undefined);
  return (
    distN(() => {
      if (distParam1) {
        _Dist({
          width: distParam1.offsetWidth,
          height: distParam1.offsetHeight,
        });
        let distValue3 = new ResizeObserver((distParam2) => {
          if (!Array.isArray(distParam2) || !distParam2.length) return;
          let distValue4 = distParam2[0],
            distValue5,
            distValue6;
          if ("borderBoxSize" in distValue4) {
            let distValue7 = distValue4.borderBoxSize,
              distValue8 = Array.isArray(distValue7)
                ? distValue7[0]
                : distValue7;
            distValue5 = distValue8.inlineSize;
            distValue6 = distValue8.blockSize;
          } else {
            distValue5 = distParam1.offsetWidth;
            distValue6 = distParam1.offsetHeight;
          }
          _Dist({
            width: distValue5,
            height: distValue6,
          });
        });
        return (
          distValue3.observe(distParam1, {
            box: "border-box",
          }),
          () => distValue3.unobserve(distParam1)
        );
      } else _Dist(undefined);
    }, [distParam1]),
    distValue2
  );
}
