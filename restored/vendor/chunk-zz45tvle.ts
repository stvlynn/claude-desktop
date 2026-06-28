// Restored from ref/webview/assets/chunk-ZZ45TVLE-CvzuGe_q.js
// ChunkZZ45TVLE chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
import { _chunkICPOFSXXP, chunkICPOFSXXV } from "./chunk-icpofsxx";
import { chunk5PVQY5BWH } from "./chunk-5pvqy5bw";
export const chunkZZ45TVLEN = chunkAGHRB4JFN(({ flowchart }) => {
  let chunkZZ45TVLEValue4 = flowchart?.subGraphTitleMargin?.top ?? 0,
    chunkZZ45TVLEValue5 = flowchart?.subGraphTitleMargin?.bottom ?? 0;
  return {
    subGraphTitleTopMargin: chunkZZ45TVLEValue4,
    subGraphTitleBottomMargin: chunkZZ45TVLEValue5,
    subGraphTitleTotalMargin: chunkZZ45TVLEValue4 + chunkZZ45TVLEValue5,
  };
}, "getSubGraphTitleMargins");
async function chunkZZ45TVLET(_chunkZZ45TVLEN, _chunkZZ45TVLET) {
  let chunkZZ45TVLEValue1 = _chunkZZ45TVLEN.getElementsByTagName("img");
  if (!chunkZZ45TVLEValue1 || chunkZZ45TVLEValue1.length === 0) return;
  let chunkZZ45TVLEValue2 =
    _chunkZZ45TVLET.replace(/<img[^>]*>/g, "").trim() === "";
  await Promise.all(
    [...chunkZZ45TVLEValue1].map(
      (__chunkZZ45TVLEN) =>
        new Promise((__chunkZZ45TVLET) => {
          function chunkZZ45TVLEHelper1() {
            if (
              ((__chunkZZ45TVLEN.style.display = "flex"),
              (__chunkZZ45TVLEN.style.flexDirection = "column"),
              chunkZZ45TVLEValue2)
            ) {
              let [chunkZZ45TVLEValue3 = chunkICPOFSXXV.fontSize] =
                  chunk5PVQY5BWH(
                    _chunkICPOFSXXP().fontSize
                      ? _chunkICPOFSXXP().fontSize
                      : window.getComputedStyle(document.body).fontSize,
                  ),
                ___chunkZZ45TVLET = chunkZZ45TVLEValue3 * 5 + "px";
              __chunkZZ45TVLEN.style.minWidth = ___chunkZZ45TVLET;
              __chunkZZ45TVLEN.style.maxWidth = ___chunkZZ45TVLET;
            } else __chunkZZ45TVLEN.style.width = "100%";
            __chunkZZ45TVLET(__chunkZZ45TVLEN);
          }
          chunkAGHRB4JFN(chunkZZ45TVLEHelper1, "setupImage");
          setTimeout(() => {
            __chunkZZ45TVLEN.complete && chunkZZ45TVLEHelper1();
          });
          __chunkZZ45TVLEN.addEventListener("error", chunkZZ45TVLEHelper1);
          __chunkZZ45TVLEN.addEventListener("load", chunkZZ45TVLEHelper1);
        }),
    ),
  );
}
chunkAGHRB4JFN(chunkZZ45TVLET, "configureLabelImages");
export { chunkZZ45TVLET };
