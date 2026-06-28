// Restored from ref/webview/assets/mermaid-parser.core-DWICYyNZ.js
// MermaidParserCore chunk restored from the Codex webview bundle.
const __vite__mapDeps = (
  _MermaidParserCore,
  mermaidParserCoreParam1 = __vite__mapDeps,
  mermaidParserCoreParam2 = mermaidParserCoreParam1.f ||
    (mermaidParserCoreParam1.f = [
      "./info-OMHHGYJF-VpsoNmpd.js",
      "./chunk-K5T4RW27-1QwNQQi0.js",
      "./chunk-Cq_f4orQ.js",
      "./isEmpty-CKN2Jii3.js",
      "./_baseFor-eDjxQiUL.js",
      "./reduce-C4fu3kBc.js",
      "./flatten-CdNmRCTf.js",
      "./main-BDm-p1LA.js",
      "./chunk-KGLVRYIC-DZY-IxHR.js",
      "./packet-4T2RLAQJ-Cps_a8kh.js",
      "./chunk-FOC6F5B3-BgcFtwB_.js",
      "./pie-ZZUOXDRM-CTCvZluc.js",
      "./chunk-AA7GKIK3-Bic0nqP_.js",
      "./treeView-SZITEDCU-CQ3h0-LJ.js",
      "./chunk-ORNJ4GCN-Dtggxgv1.js",
      "./architecture-YZFGNWBL-hfWpxWZF.js",
      "./chunk-7N4EOEYR-BEkdQLCb.js",
      "./gitGraph-7Q5UKJZL-RtuWf9d8.js",
      "./chunk-67CJDMHE-B3_SAS71.js",
      "./radar-PYXPWWZC-DenUZrCa.js",
      "./chunk-2KRD3SAO-Bdi3VHck.js",
      "./treemap-W4RFUUIX-LvOJWvcJ.js",
      "./chunk-LIHQZDEY-B0GBEU3_.js",
      "./wardley-RL74JXVD-DX26H2Am.js",
      "./chunk-CIAEETIT-DnOj_Z7m.js",
    ]),
) =>
  _MermaidParserCore.map(
    (__MermaidParserCore) => mermaidParserCoreParam2[__MermaidParserCore],
  );
import { PreloadHelper } from "../utils/preload-helper";
import { chunkK5T4RW27M } from "./mermaid-parser-runtime-k5";
var mermaidParserCoreValue1 = {},
  mermaidParserCoreValue2 = {
    info: chunkK5T4RW27M(async () => {
      let { createInfoServices } = await PreloadHelper(
        async () => {
          let { createInfoServices: _createInfoServices } = await import(
            "./mermaid-info-definition-k5"
          );
          return {
            createInfoServices: _createInfoServices,
          };
        },
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8]),
        import.meta.url,
      );
      mermaidParserCoreValue1.info =
        createInfoServices().Info.parser.LangiumParser;
    }, "info"),
    packet: chunkK5T4RW27M(async () => {
      let { createPacketServices } = await PreloadHelper(
        async () => {
          let { createPacketServices: _createPacketServices } = await import(
            "./mermaid-packet-definition-k5"
          );
          return {
            createPacketServices: _createPacketServices,
          };
        },
        __vite__mapDeps([9, 1, 2, 3, 4, 5, 6, 7, 10]),
        import.meta.url,
      );
      mermaidParserCoreValue1.packet =
        createPacketServices().Packet.parser.LangiumParser;
    }, "packet"),
    pie: chunkK5T4RW27M(async () => {
      let { createPieServices } = await PreloadHelper(
        async () => {
          let { createPieServices: _createPieServices } = await import(
            "./mermaid-pie-definition-k5"
          );
          return {
            createPieServices: _createPieServices,
          };
        },
        __vite__mapDeps([11, 1, 2, 3, 4, 5, 6, 7, 12]),
        import.meta.url,
      );
      mermaidParserCoreValue1.pie =
        createPieServices().Pie.parser.LangiumParser;
    }, "pie"),
    treeView: chunkK5T4RW27M(async () => {
      let { createTreeViewServices } = await PreloadHelper(
        async () => {
          let { createTreeViewServices: _createTreeViewServices } =
            await import("./mermaid-tree-view-definition-k5");
          return {
            createTreeViewServices: _createTreeViewServices,
          };
        },
        __vite__mapDeps([13, 1, 2, 3, 4, 5, 6, 7, 14]),
        import.meta.url,
      );
      mermaidParserCoreValue1.treeView =
        createTreeViewServices().TreeView.parser.LangiumParser;
    }, "treeView"),
    architecture: chunkK5T4RW27M(async () => {
      let { createArchitectureServices } = await PreloadHelper(
        async () => {
          let { createArchitectureServices: _createArchitectureServices } =
            await import("./mermaid-architecture-definition-k5");
          return {
            createArchitectureServices: _createArchitectureServices,
          };
        },
        __vite__mapDeps([15, 1, 2, 3, 4, 5, 6, 7, 16]),
        import.meta.url,
      );
      mermaidParserCoreValue1.architecture =
        createArchitectureServices().Architecture.parser.LangiumParser;
    }, "architecture"),
    gitGraph: chunkK5T4RW27M(async () => {
      let { createGitGraphServices } = await PreloadHelper(
        async () => {
          let { createGitGraphServices: _createGitGraphServices } =
            await import("./mermaid-git-graph-definition-k5");
          return {
            createGitGraphServices: _createGitGraphServices,
          };
        },
        __vite__mapDeps([17, 1, 2, 3, 4, 5, 6, 7, 18]),
        import.meta.url,
      );
      mermaidParserCoreValue1.gitGraph =
        createGitGraphServices().GitGraph.parser.LangiumParser;
    }, "gitGraph"),
    radar: chunkK5T4RW27M(async () => {
      let { createRadarServices } = await PreloadHelper(
        async () => {
          let { createRadarServices: _createRadarServices } = await import(
            "./mermaid-radar-definition-k5"
          );
          return {
            createRadarServices: _createRadarServices,
          };
        },
        __vite__mapDeps([19, 1, 2, 3, 4, 5, 6, 7, 20]),
        import.meta.url,
      );
      mermaidParserCoreValue1.radar =
        createRadarServices().Radar.parser.LangiumParser;
    }, "radar"),
    treemap: chunkK5T4RW27M(async () => {
      let { createTreemapServices } = await PreloadHelper(
        async () => {
          let { createTreemapServices: _createTreemapServices } = await import(
            "./mermaid-treemap-definition-k5"
          );
          return {
            createTreemapServices: _createTreemapServices,
          };
        },
        __vite__mapDeps([21, 1, 2, 3, 4, 5, 6, 7, 22]),
        import.meta.url,
      );
      mermaidParserCoreValue1.treemap =
        createTreemapServices().Treemap.parser.LangiumParser;
    }, "treemap"),
    wardley: chunkK5T4RW27M(async () => {
      let { createWardleyServices } = await PreloadHelper(
        async () => {
          let { createWardleyServices: _createWardleyServices } = await import(
            "./mermaid-wardley-definition-k5"
          );
          return {
            createWardleyServices: _createWardleyServices,
          };
        },
        __vite__mapDeps([23, 1, 2, 3, 4, 5, 6, 7, 24]),
        import.meta.url,
      );
      mermaidParserCoreValue1.wardley =
        createWardleyServices().Wardley.parser.LangiumParser;
    }, "wardley"),
  };
async function MermaidParserCore(
  mermaidParserCoreParam4,
  mermaidParserCoreParam5,
) {
  let _MermaidParserCore = mermaidParserCoreValue2[mermaidParserCoreParam4];
  if (!_MermaidParserCore)
    throw Error(`Unknown diagram type: ${mermaidParserCoreParam4}`);
  mermaidParserCoreValue1[mermaidParserCoreParam4] ||
    (await _MermaidParserCore());
  let mermaidParserCoreValue6 = mermaidParserCoreValue1[
    mermaidParserCoreParam4
  ].parse(mermaidParserCoreParam5);
  if (
    mermaidParserCoreValue6.lexerErrors.length > 0 ||
    mermaidParserCoreValue6.parserErrors.length > 0
  )
    throw new mermaidParserCoreValue3(mermaidParserCoreValue6);
  return mermaidParserCoreValue6.value;
}
chunkK5T4RW27M(MermaidParserCore, "parse");
var mermaidParserCoreValue3 = class extends Error {
  constructor(mermaidParserCoreParam3) {
    let mermaidParserCoreValue4 = mermaidParserCoreParam3.lexerErrors
        .map(
          (item) =>
            `Lexer error on line ${item.line !== undefined && !isNaN(item.line) ? item.line : "?"}, column ${item.column !== undefined && !isNaN(item.column) ? item.column : "?"}: ${item.message}`,
        )
        .join("\n"),
      mermaidParserCoreValue5 = mermaidParserCoreParam3.parserErrors
        .map(
          (item) =>
            `Parse error on line ${item.token.startLine !== undefined && !isNaN(item.token.startLine) ? item.token.startLine : "?"}, column ${item.token.startColumn !== undefined && !isNaN(item.token.startColumn) ? item.token.startColumn : "?"}: ${item.message}`,
        )
        .join("\n");
    super(
      `Parsing failed: ${mermaidParserCoreValue4} ${mermaidParserCoreValue5}`,
    );
    this.result = mermaidParserCoreParam3;
  }
  static {
    chunkK5T4RW27M(this, "MermaidParseError");
  }
};
export { MermaidParserCore };
