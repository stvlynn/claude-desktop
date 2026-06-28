// Restored from ref/webview/assets/mermaid-parser.core-Cloq2txW.js
// MermaidParserCore chunk restored from the Codex webview bundle.
const __vite__mapDeps = (
  _MermaidParserCore,
  mermaidParserCoreParam1 = __vite__mapDeps,
  mermaidParserCoreParam2 = mermaidParserCoreParam1.f ||
    (mermaidParserCoreParam1.f = [
      "./info-NVLQJR56-CJGElsQG.js",
      "./chunk-FPAJGGOC-Cy-1bcKF.js",
      "./chunk-Cq_f4orQ.js",
      "./isEmpty-CTfqpukK.js",
      "./isArrayLikeObject-1Hrr5Oll.js",
      "./_baseUniq-C2aVs9t8.js",
      "./_basePickBy-X1_M8KZ0.js",
      "./clone-Mnyt6qd1.js",
      "./isEmpty-CKN2Jii3.js",
      "./_baseFor-eDjxQiUL.js",
      "./reduce-C4fu3kBc.js",
      "./flatten-CdNmRCTf.js",
      "./main-BDm-p1LA.js",
      "./chunk-LBM3YZW2-C9W8CgCb.js",
      "./packet-BFZMPI3H-C976HVjn.js",
      "./chunk-76Q3JFCE-Bhgg5xKY.js",
      "./pie-7BOR55EZ-Cel_tNJ1.js",
      "./chunk-T53DSG4Q-DwpHe3Zz.js",
      "./architecture-U656AL7Q-Ccsrjk_f.js",
      "./chunk-O7ZBX7Z2-B9AHjHvq.js",
      "./gitGraph-F6HP7TQM-8BKmskHr.js",
      "./chunk-S6J4BHB3-BiRR_8vz.js",
      "./radar-NHE76QYJ-8GggBqpZ.js",
      "./chunk-LHMN2FUI-BO1BbTL6.js",
      "./treemap-KMMF4GRG-ByNQtOJN.js",
      "./chunk-FWNWRKHM-DRtw95ir.js",
    ]),
) =>
  _MermaidParserCore.map(
    (__MermaidParserCore) => mermaidParserCoreParam2[__MermaidParserCore],
  );
import { PreloadHelper } from "../utils/preload-helper";
import { chunkFPAJGGOCF } from "./mermaid-parser-runtime-fpajggoc";
var mermaidParserCoreValue1 = {},
  mermaidParserCoreValue2 = {
    info: chunkFPAJGGOCF(async () => {
      let { createInfoServices } = await PreloadHelper(
        async () => {
          let { createInfoServices: _createInfoServices } = await import(
            "./mermaid-info-definition-fpaj"
          );
          return {
            createInfoServices: _createInfoServices,
          };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
        import.meta.url,
      );
      mermaidParserCoreValue1.info =
        createInfoServices().Info.parser.LangiumParser;
    }, "info"),
    packet: chunkFPAJGGOCF(async () => {
      let { createPacketServices } = await PreloadHelper(
        async () => {
          let { createPacketServices: _createPacketServices } = await import(
            "./mermaid-packet-definition-fpaj"
          );
          return {
            createPacketServices: _createPacketServices,
          };
        },
        __vite__mapDeps([14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15]),
        import.meta.url,
      );
      mermaidParserCoreValue1.packet =
        createPacketServices().Packet.parser.LangiumParser;
    }, "packet"),
    pie: chunkFPAJGGOCF(async () => {
      let { createPieServices } = await PreloadHelper(
        async () => {
          let { createPieServices: _createPieServices } = await import(
            "./mermaid-pie-definition-fpaj"
          );
          return {
            createPieServices: _createPieServices,
          };
        },
        __vite__mapDeps([16, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 17]),
        import.meta.url,
      );
      mermaidParserCoreValue1.pie =
        createPieServices().Pie.parser.LangiumParser;
    }, "pie"),
    architecture: chunkFPAJGGOCF(async () => {
      let { createArchitectureServices } = await PreloadHelper(
        async () => {
          let { createArchitectureServices: _createArchitectureServices } =
            await import("./mermaid-architecture-definition-fpaj");
          return {
            createArchitectureServices: _createArchitectureServices,
          };
        },
        __vite__mapDeps([18, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 19]),
        import.meta.url,
      );
      mermaidParserCoreValue1.architecture =
        createArchitectureServices().Architecture.parser.LangiumParser;
    }, "architecture"),
    gitGraph: chunkFPAJGGOCF(async () => {
      let { createGitGraphServices } = await PreloadHelper(
        async () => {
          let { createGitGraphServices: _createGitGraphServices } =
            await import("./mermaid-git-graph-definition-fpaj");
          return {
            createGitGraphServices: _createGitGraphServices,
          };
        },
        __vite__mapDeps([20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 21]),
        import.meta.url,
      );
      mermaidParserCoreValue1.gitGraph =
        createGitGraphServices().GitGraph.parser.LangiumParser;
    }, "gitGraph"),
    radar: chunkFPAJGGOCF(async () => {
      let { createRadarServices } = await PreloadHelper(
        async () => {
          let { createRadarServices: _createRadarServices } = await import(
            "./mermaid-radar-definition-fpaj"
          );
          return {
            createRadarServices: _createRadarServices,
          };
        },
        __vite__mapDeps([22, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 23]),
        import.meta.url,
      );
      mermaidParserCoreValue1.radar =
        createRadarServices().Radar.parser.LangiumParser;
    }, "radar"),
    treemap: chunkFPAJGGOCF(async () => {
      let { createTreemapServices } = await PreloadHelper(
        async () => {
          let { createTreemapServices: _createTreemapServices } = await import(
            "./mermaid-treemap-definition-fpaj"
          );
          return {
            createTreemapServices: _createTreemapServices,
          };
        },
        __vite__mapDeps([24, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 25]),
        import.meta.url,
      );
      mermaidParserCoreValue1.treemap =
        createTreemapServices().Treemap.parser.LangiumParser;
    }, "treemap"),
  };
async function MermaidParserCore(
  mermaidParserCoreParam3,
  mermaidParserCoreParam4,
) {
  let _MermaidParserCore = mermaidParserCoreValue2[mermaidParserCoreParam3];
  if (!_MermaidParserCore)
    throw Error(`Unknown diagram type: ${mermaidParserCoreParam3}`);
  mermaidParserCoreValue1[mermaidParserCoreParam3] ||
    (await _MermaidParserCore());
  let mermaidParserCoreValue4 = mermaidParserCoreValue1[
    mermaidParserCoreParam3
  ].parse(mermaidParserCoreParam4);
  if (
    mermaidParserCoreValue4.lexerErrors.length > 0 ||
    mermaidParserCoreValue4.parserErrors.length > 0
  )
    throw new mermaidParserCoreValue3(mermaidParserCoreValue4);
  return mermaidParserCoreValue4.value;
}
chunkFPAJGGOCF(MermaidParserCore, "parse");
var mermaidParserCoreValue3 = class extends Error {
  constructor(mermaidParserCoreParam5) {
    let mermaidParserCoreValue5 = mermaidParserCoreParam5.lexerErrors
        .map((item) => item.message)
        .join("\n"),
      mermaidParserCoreValue6 = mermaidParserCoreParam5.parserErrors
        .map((item) => item.message)
        .join("\n");
    super(
      `Parsing failed: ${mermaidParserCoreValue5} ${mermaidParserCoreValue6}`,
    );
    this.result = mermaidParserCoreParam5;
  }
  static {
    chunkFPAJGGOCF(this, "MermaidParseError");
  }
};
export { MermaidParserCore };
