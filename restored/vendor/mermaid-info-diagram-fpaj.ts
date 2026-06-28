// Restored from ref/webview/assets/infoDiagram-F6ZHWCRC-CZZfMpuV.js
// InfoDiagramF6ZHWCRC chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import { _chunkABZYJK2DN } from "./katex-auto-render";
import { chunkEXTU4WIE } from "./chunk-extu4-wie";
import { MermaidParserCore } from "./mermaid-parser-core-fpaj";
import { ChunkKS23V3DP } from "../utils/chunk-ks23-v3-dp";
var infoDiagramF6ZHWCRCValue1 = {
    parse: chunkAGHRB4JFN(async (infoDiagramF6ZHWCRCParam4) => {
      let infoDiagramF6ZHWCRCValue4 = await MermaidParserCore(
        "info",
        infoDiagramF6ZHWCRCParam4,
      );
      chunkAGHRB4JFR.debug(infoDiagramF6ZHWCRCValue4);
    }, "parse"),
  },
  infoDiagramF6ZHWCRCValue2 = {
    version: ChunkKS23V3DP.version + "",
  };
export const infoDiagramF6ZHWCRC = {
  parser: infoDiagramF6ZHWCRCValue1,
  db: {
    getVersion: chunkAGHRB4JFN(
      () => infoDiagramF6ZHWCRCValue2.version,
      "getVersion",
    ),
  },
  renderer: {
    draw: chunkAGHRB4JFN(
      (
        infoDiagramF6ZHWCRCParam1,
        infoDiagramF6ZHWCRCParam2,
        infoDiagramF6ZHWCRCParam3,
      ) => {
        chunkAGHRB4JFR.debug(
          "rendering info diagram\n" + infoDiagramF6ZHWCRCParam1,
        );
        let infoDiagramF6ZHWCRCValue3 = chunkEXTU4WIE(
          infoDiagramF6ZHWCRCParam2,
        );
        _chunkABZYJK2DN(infoDiagramF6ZHWCRCValue3, 100, 400, true);
        infoDiagramF6ZHWCRCValue3
          .append("g")
          .append("text")
          .attr("x", 100)
          .attr("y", 40)
          .attr("class", "version")
          .attr("font-size", 32)
          .style("text-anchor", "middle")
          .text(`v${infoDiagramF6ZHWCRCParam3}`);
      },
      "draw",
    ),
  },
};
