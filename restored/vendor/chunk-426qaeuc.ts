// Restored from ref/webview/assets/chunk-426QAEUC-SBg7XJ-1.js
// Chunk426QAEUC chunk restored from the Codex webview bundle.
import { Src } from "./roughjs-geometry";
import { chunkAGHRB4JFN } from "./dayjs-core-alt";
import { _chunkICPOFSXXP } from "./chunk-icpofsxx";
export const chunk426QAEUC = chunkAGHRB4JFN((chunk426QAEUCParam1) => {
  let { securityLevel: _chunk426QAEUC } = _chunkICPOFSXXP(),
    chunk426QAEUCValue1 = Src("body");
  return (
    _chunk426QAEUC === "sandbox" &&
      (chunk426QAEUCValue1 = Src(
        (Src(`#i${chunk426QAEUCParam1}`).node()?.contentDocument ?? document)
          .body,
      )),
    chunk426QAEUCValue1.select(`#${chunk426QAEUCParam1}`)
  );
}, "selectSvgElement");
