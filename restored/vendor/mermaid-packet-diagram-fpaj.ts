// Restored from ref/webview/assets/diagram-S2PKOQOG-CYp0tDDf.js
// DiagramS2PKOQOG chunk restored from the Codex webview bundle.
import { chunkS3R3BYOJP } from "./chunk-s3r3byoj";
import { chunkAGHRB4JFN, chunkAGHRB4JFR } from "./dompurify";
import { _chunkABZYJK2DK, chunkABZYJK2DN, chunkABZYJK2DF, chunkABZYJK2DO, _chunkABZYJK2DC as chunkABZYJK2DU, chunkABZYJK2DJ, chunkABZYJK2DR, _chunkABZYJK2DY, chunkABZYJK2DZ } from "./katex-auto-render";
import { chunkEXTU4WIE } from "./chunk-extu4-wie";
import { chunk4BX2VUAB } from "./mermaid-accessibility";
import { MermaidParserCore } from "./mermaid-parser-core-fpaj";
const _chunkABZYJK2DC = chunkABZYJK2DF;
var diagramS2PKOQOGValue1 = chunkABZYJK2DO.packet,
  diagramS2PKOQOGValue2 = class {
    constructor() {
      this.packet = [];
      this.setAccTitle = chunkABZYJK2DN;
      this.getAccTitle = chunkABZYJK2DR;
      this.setDiagramTitle = chunkABZYJK2DU;
      this.getDiagramTitle = chunkABZYJK2DF;
      this.getAccDescription = chunkABZYJK2DJ;
      this.setAccDescription = chunkABZYJK2DZ;
    }
    static {
      chunkAGHRB4JFN(this, "PacketDB");
    }
    getConfig() {
      let diagramS2PKOQOGValue36 = chunkS3R3BYOJP({
        ...diagramS2PKOQOGValue1,
        ..._chunkABZYJK2DY().packet
      });
      return diagramS2PKOQOGValue36.showBits && (diagramS2PKOQOGValue36.paddingY += 10), diagramS2PKOQOGValue36;
    }
    getPacket() {
      return this.packet;
    }
    pushWord(diagramS2PKOQOGParam14) {
      diagramS2PKOQOGParam14.length > 0 && this.packet.push(diagramS2PKOQOGParam14);
    }
    clear() {
      _chunkABZYJK2DK();
      this.packet = [];
    }
  },
  diagramS2PKOQOGValue4 = chunkAGHRB4JFN((diagramS2PKOQOGParam4, diagramS2PKOQOGParam5) => {
    chunk4BX2VUAB(diagramS2PKOQOGParam4, diagramS2PKOQOGParam5);
    let diagramS2PKOQOGValue18 = -1,
      diagramS2PKOQOGValue19 = [],
      diagramS2PKOQOGValue20 = 1,
      {
        bitsPerRow
      } = diagramS2PKOQOGParam5.getConfig();
    for (let {
      start,
      end,
      bits,
      label
    } of diagramS2PKOQOGParam4.blocks) {
      if (start !== undefined && end !== undefined && end < start) throw Error(`Packet block ${start} - ${end} is invalid. End must be greater than start.`);
      if (start ??= diagramS2PKOQOGValue18 + 1, start !== diagramS2PKOQOGValue18 + 1) throw Error(`Packet block ${start} - ${end ?? start} is not contiguous. It should start from ${diagramS2PKOQOGValue18 + 1}.`);
      if (bits === 0) throw Error(`Packet block ${start} is invalid. Cannot have a zero bit field.`);
      for (end ??= start + (bits ?? 1) - 1, bits ??= end - start + 1, diagramS2PKOQOGValue18 = end, chunkAGHRB4JFR.debug(`Packet block ${start} - ${diagramS2PKOQOGValue18} with label ${label}`); diagramS2PKOQOGValue19.length <= bitsPerRow + 1 && diagramS2PKOQOGParam5.getPacket().length < 1e4;) {
        let [diagramS2PKOQOGValue34, diagramS2PKOQOGValue35] = diagramS2PKOQOGValue5({
          start,
          end,
          bits,
          label
        }, diagramS2PKOQOGValue20, bitsPerRow);
        if (diagramS2PKOQOGValue19.push(diagramS2PKOQOGValue34), diagramS2PKOQOGValue34.end + 1 === diagramS2PKOQOGValue20 * bitsPerRow && (diagramS2PKOQOGParam5.pushWord(diagramS2PKOQOGValue19), diagramS2PKOQOGValue19 = [], diagramS2PKOQOGValue20++), !diagramS2PKOQOGValue35) break;
        ({
          start,
          end,
          bits,
          label
        } = diagramS2PKOQOGValue35);
      }
    }
    diagramS2PKOQOGParam5.pushWord(diagramS2PKOQOGValue19);
  }, "populate"),
  diagramS2PKOQOGValue5 = chunkAGHRB4JFN((diagramS2PKOQOGParam10, diagramS2PKOQOGParam11, diagramS2PKOQOGParam12) => {
    if (diagramS2PKOQOGParam10.start === undefined) throw Error("start should have been set during first phase");
    if (diagramS2PKOQOGParam10.end === undefined) throw Error("end should have been set during first phase");
    if (diagramS2PKOQOGParam10.start > diagramS2PKOQOGParam10.end) throw Error(`Block start ${diagramS2PKOQOGParam10.start} is greater than block end ${diagramS2PKOQOGParam10.end}.`);
    if (diagramS2PKOQOGParam10.end + 1 <= diagramS2PKOQOGParam11 * diagramS2PKOQOGParam12) return [diagramS2PKOQOGParam10, undefined];
    let diagramS2PKOQOGValue29 = diagramS2PKOQOGParam11 * diagramS2PKOQOGParam12 - 1,
      diagramS2PKOQOGValue30 = diagramS2PKOQOGParam11 * diagramS2PKOQOGParam12;
    return [{
      start: diagramS2PKOQOGParam10.start,
      end: diagramS2PKOQOGValue29,
      label: diagramS2PKOQOGParam10.label,
      bits: diagramS2PKOQOGValue29 - diagramS2PKOQOGParam10.start
    }, {
      start: diagramS2PKOQOGValue30,
      end: diagramS2PKOQOGParam10.end,
      label: diagramS2PKOQOGParam10.label,
      bits: diagramS2PKOQOGParam10.end - diagramS2PKOQOGValue30
    }];
  }, "getNextFittingBlock"),
  diagramS2PKOQOGValue6 = {
    parser: {
      yy: undefined
    },
    parse: chunkAGHRB4JFN(async diagramS2PKOQOGParam13 => {
      let diagramS2PKOQOGValue32 = await MermaidParserCore("packet", diagramS2PKOQOGParam13),
        diagramS2PKOQOGValue33 = diagramS2PKOQOGValue6.parser?.yy;
      if (!(diagramS2PKOQOGValue33 instanceof diagramS2PKOQOGValue2)) throw Error("parser.parser?.yy was not a PacketDB. This is due to a bug within Mermaid, please report this issue at https://github.com/mermaid-js/mermaid/issues.");
      chunkAGHRB4JFR.debug(diagramS2PKOQOGValue32);
      diagramS2PKOQOGValue4(diagramS2PKOQOGValue32, diagramS2PKOQOGValue33);
    }, "parse")
  },
  diagramS2PKOQOGValue7 = chunkAGHRB4JFN((diagramS2PKOQOGParam6, diagramS2PKOQOGParam7, diagramS2PKOQOGParam8, diagramS2PKOQOGParam9) => {
    let diagramS2PKOQOGValue21 = diagramS2PKOQOGParam9.db,
      diagramS2PKOQOGValue22 = diagramS2PKOQOGValue21.getConfig(),
      {
        rowHeight,
        paddingY,
        bitWidth,
        bitsPerRow
      } = diagramS2PKOQOGValue22,
      diagramS2PKOQOGValue23 = diagramS2PKOQOGValue21.getPacket(),
      diagramS2PKOQOGValue24 = diagramS2PKOQOGValue21.getDiagramTitle(),
      diagramS2PKOQOGValue25 = rowHeight + paddingY,
      diagramS2PKOQOGValue26 = diagramS2PKOQOGValue25 * (diagramS2PKOQOGValue23.length + 1) - (diagramS2PKOQOGValue24 ? 0 : rowHeight),
      diagramS2PKOQOGValue27 = bitWidth * bitsPerRow + 2,
      diagramS2PKOQOGValue28 = chunkEXTU4WIE(diagramS2PKOQOGParam7);
    diagramS2PKOQOGValue28.attr("viewbox", `0 0 ${diagramS2PKOQOGValue27} ${diagramS2PKOQOGValue26}`);
    _chunkABZYJK2DC(diagramS2PKOQOGValue28, diagramS2PKOQOGValue26, diagramS2PKOQOGValue27, diagramS2PKOQOGValue22.useMaxWidth);
    for (let [diagramS2PKOQOGValue37, diagramS2PKOQOGValue38] of diagramS2PKOQOGValue23.entries()) diagramS2PKOQOGValue8(diagramS2PKOQOGValue28, diagramS2PKOQOGValue38, diagramS2PKOQOGValue37, diagramS2PKOQOGValue22);
    diagramS2PKOQOGValue28.append("text").text(diagramS2PKOQOGValue24).attr("x", diagramS2PKOQOGValue27 / 2).attr("y", diagramS2PKOQOGValue26 - diagramS2PKOQOGValue25 / 2).attr("dominant-baseline", "middle").attr("text-anchor", "middle").attr("class", "packetTitle");
  }, "draw"),
  diagramS2PKOQOGValue8 = chunkAGHRB4JFN((diagramS2PKOQOGParam1, diagramS2PKOQOGParam2, diagramS2PKOQOGParam3, {
    rowHeight,
    paddingX,
    paddingY,
    bitWidth,
    bitsPerRow,
    showBits
  }) => {
    let diagramS2PKOQOGValue11 = diagramS2PKOQOGParam1.append("g"),
      diagramS2PKOQOGValue12 = diagramS2PKOQOGParam3 * (rowHeight + paddingY) + paddingY;
    for (let diagramS2PKOQOGValue13 of diagramS2PKOQOGParam2) {
      let diagramS2PKOQOGValue14 = diagramS2PKOQOGValue13.start % bitsPerRow * bitWidth + 1,
        diagramS2PKOQOGValue15 = (diagramS2PKOQOGValue13.end - diagramS2PKOQOGValue13.start + 1) * bitWidth - paddingX;
      if (diagramS2PKOQOGValue11.append("rect").attr("x", diagramS2PKOQOGValue14).attr("y", diagramS2PKOQOGValue12).attr("width", diagramS2PKOQOGValue15).attr("height", rowHeight).attr("class", "packetBlock"), diagramS2PKOQOGValue11.append("text").attr("x", diagramS2PKOQOGValue14 + diagramS2PKOQOGValue15 / 2).attr("y", diagramS2PKOQOGValue12 + rowHeight / 2).attr("class", "packetLabel").attr("dominant-baseline", "middle").attr("text-anchor", "middle").text(diagramS2PKOQOGValue13.label), !showBits) continue;
      let diagramS2PKOQOGValue16 = diagramS2PKOQOGValue13.end === diagramS2PKOQOGValue13.start,
        diagramS2PKOQOGValue17 = diagramS2PKOQOGValue12 - 2;
      diagramS2PKOQOGValue11.append("text").attr("x", diagramS2PKOQOGValue14 + (diagramS2PKOQOGValue16 ? diagramS2PKOQOGValue15 / 2 : 0)).attr("y", diagramS2PKOQOGValue17).attr("class", "packetByte start").attr("dominant-baseline", "auto").attr("text-anchor", diagramS2PKOQOGValue16 ? "middle" : "start").text(diagramS2PKOQOGValue13.start);
      diagramS2PKOQOGValue16 || diagramS2PKOQOGValue11.append("text").attr("x", diagramS2PKOQOGValue14 + diagramS2PKOQOGValue15).attr("y", diagramS2PKOQOGValue17).attr("class", "packetByte end").attr("dominant-baseline", "auto").attr("text-anchor", "end").text(diagramS2PKOQOGValue13.end);
    }
  }, "drawWord"),
  diagramS2PKOQOGValue9 = {
    draw: diagramS2PKOQOGValue7
  },
  diagramS2PKOQOGValue10 = {
    byteFontSize: "10px",
    startByteColor: "black",
    endByteColor: "black",
    labelColor: "black",
    labelFontSize: "12px",
    titleColor: "black",
    titleFontSize: "14px",
    blockStrokeColor: "black",
    blockStrokeWidth: "1",
    blockFillColor: "#efefef"
  };
export const DiagramS2PKOQOG = {
  parser: diagramS2PKOQOGValue6,
  get db() {
    return new diagramS2PKOQOGValue2();
  },
  renderer: diagramS2PKOQOGValue9,
  styles: chunkAGHRB4JFN(({
    packet
  } = {}) => {
    let diagramS2PKOQOGValue31 = chunkS3R3BYOJP(diagramS2PKOQOGValue10, packet);
    return `
	.packetByte {
		font-size: ${diagramS2PKOQOGValue31.byteFontSize};
	}
	.packetByte.start {
		fill: ${diagramS2PKOQOGValue31.startByteColor};
	}
	.packetByte.end {
		fill: ${diagramS2PKOQOGValue31.endByteColor};
	}
	.packetLabel {
		fill: ${diagramS2PKOQOGValue31.labelColor};
		font-size: ${diagramS2PKOQOGValue31.labelFontSize};
	}
	.packetTitle {
		fill: ${diagramS2PKOQOGValue31.titleColor};
		font-size: ${diagramS2PKOQOGValue31.titleFontSize};
	}
	.packetBlock {
		stroke: ${diagramS2PKOQOGValue31.blockStrokeColor};
		stroke-width: ${diagramS2PKOQOGValue31.blockStrokeWidth};
		fill: ${diagramS2PKOQOGValue31.blockFillColor};
	}
	`;
  }, "styles")
};
