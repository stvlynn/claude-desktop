// Restored from ref/webview/assets/infoDiagram-42DDH7IO-CA5dZBgd.js
// InfoDiagram42DDH7IO chunk restored from the Codex webview bundle.
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dayjs-core-alt";
import { chunkICPOFSXXC } from "./chunk-icpofsxx";
import { chunk426QAEUC } from "./chunk-426qaeuc";
import { MermaidParserCore } from "./mermaid-parser-core-k5";
var infoDiagram42DDH7IOValue1 = {
    parse: chunkAGHRB4JFN(async (infoDiagram42DDH7IOParam4) => {
      let infoDiagram42DDH7IOValue4 = await MermaidParserCore(
        "info",
        infoDiagram42DDH7IOParam4,
      );
      chunkAGHRB4JFR.debug(infoDiagram42DDH7IOValue4);
    }, "parse"),
  },
  infoDiagram42DDH7IOValue2 = {
    version: "11.14.0",
  };
export const infoDiagram42DDH7IO = {
  parser: infoDiagram42DDH7IOValue1,
  db: {
    getVersion: chunkAGHRB4JFN(
      () => infoDiagram42DDH7IOValue2.version,
      "getVersion",
    ),
  },
  renderer: {
    draw: chunkAGHRB4JFN(
      (
        infoDiagram42DDH7IOParam1,
        infoDiagram42DDH7IOParam2,
        infoDiagram42DDH7IOParam3,
      ) => {
        chunkAGHRB4JFR.debug(
          "rendering info diagram\n" + infoDiagram42DDH7IOParam1,
        );
        let infoDiagram42DDH7IOValue3 = chunk426QAEUC(
          infoDiagram42DDH7IOParam2,
        );
        chunkICPOFSXXC(infoDiagram42DDH7IOValue3, 100, 400, true);
        infoDiagram42DDH7IOValue3
          .append("g")
          .append("text")
          .attr("x", 100)
          .attr("y", 40)
          .attr("class", "version")
          .attr("font-size", 32)
          .style("text-anchor", "middle")
          .text(`v${infoDiagram42DDH7IOParam3}`);
      },
      "draw",
    ),
  },
};
