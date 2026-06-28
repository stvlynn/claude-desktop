// Restored from ref/webview/assets/pdf-CaT3Fa-k.js
// Pdf chunk restored from the Codex webview bundle.
import { exportGetters } from "../runtime/commonjs-interop";
import { PreloadHelper } from "../utils/preload-helper";
var pdfValue1 = {};
export const pdfY = exportGetters({
  AbortException: () => _pdfT,
  AnnotationEditorLayer: () => _pdfN,
  AnnotationEditorParamsType: () => pdfR,
  AnnotationEditorType: () => pdfI,
  AnnotationEditorUIManager: () => _pdfA,
  AnnotationLayer: () => _pdfO,
  AnnotationMode: () => pdfS,
  AnnotationType: () => pdfC,
  CSSConstants: () => pdfL,
  ColorPicker: () => _pdfU,
  DOMSVGFactory: () => _pdfD,
  DrawLayer: () => _pdfF,
  FeatureTest: () => pdfTt,
  GlobalWorkerOptions: () => pdfP,
  ImageKind: () => pdfNt,
  InvalidPDFException: () => pdfM,
  MathClamp: () => _pdfH,
  OPS: () => pdfG,
  OutputScale: () => pdfUnderscore,
  PDFDataRangeTransport: () => _pdfV,
  PDFDateString: () => _pdfY,
  PDFWorker: () => _pdfB,
  PasswordResponses: () => pdfX,
  PermissionFlag: () => _pdfS,
  PixelsPerInch: () => _pdfC,
  RenderingCancelledException: () => pdfW,
  ResponseException: () => pdfT,
  SignatureExtractor: () => pdfE,
  SupportedImageMimeTypes: () => pdfD,
  TextLayer: () => pdfO,
  TouchManager: () => pdfK,
  Util: () => pdfA,
  VerbosityLevel: () => pdfJ,
  XfaLayer: () => _pdfM,
  applyOpacity: () => pdfN,
  build: () => _pdfP,
  createValidAbsoluteUrl: () => pdfF,
  fetchData: () => _pdfI,
  findContrastColor: () => _pdfL,
  getDocument: () => _pdfR,
  getFilenameFromUrl: () => pdfZ,
  getPdfFilenameFromUrl: () => pdfB,
  getRGB: () => pdfV,
  getUuid: () => pdfH,
  getXfaPageViewport: () => pdfU,
  isDataScheme: () => _pdfW,
  isPdfFile: () => _pdfG,
  isValidExplicitDest: () => _pdfK,
  noContextMenu: () => _pdfQ,
  normalizeUnicode: () => _pdfJ,
  renderRichText: () => _pdfX,
  setLayerDimensions: () => _pdfZ,
  shadow: () => pdfQ,
  stopEvent: () => pdfDollar,
  updateUrlHash: () => pdfEt,
  version: () => pdfRt,
});
((pdfValue1.d = (pdfParam1101, pdfParam1102) => {
  for (var __pdfY in pdfParam1102)
    pdfValue1.o(pdfParam1102, __pdfY) &&
      !pdfValue1.o(pdfParam1101, __pdfY) &&
      Object.defineProperty(pdfParam1101, __pdfY, {
        enumerable: !0,
        get: pdfParam1102[__pdfY],
      });
}),
  (pdfValue1.o = (pdfParam1544, pdfParam1545) =>
    Object.prototype.hasOwnProperty.call(pdfParam1544, pdfParam1545)));
var pdfValue2 =
    typeof process == `object` &&
    process + `` == `[object process]` &&
    !process.versions.nw &&
    !(process.versions.electron && process.type && process.type !== `browser`),
  pdfValue3 = [0.001, 0, 0, 0.001, 0, 0],
  pdfValue4 = 1.35;
0.35 / pdfValue4;
var pdfValue5 = {
    ANY: 1,
    DISPLAY: 2,
    PRINT: 4,
    SAVE: 8,
    ANNOTATIONS_FORMS: 16,
    ANNOTATIONS_STORAGE: 32,
    ANNOTATIONS_DISABLE: 64,
    IS_EDITING: 128,
    OPLIST: 256,
  },
  pdfS = {
    DISABLE: 0,
    ENABLE: 1,
    ENABLE_FORMS: 2,
    ENABLE_STORAGE: 3,
  },
  pdfValue6 = `pdfjs_internal_editor_`,
  pdfI = {
    DISABLE: -1,
    NONE: 0,
    FREETEXT: 3,
    HIGHLIGHT: 9,
    STAMP: 13,
    INK: 15,
    POPUP: 16,
    SIGNATURE: 101,
    COMMENT: 102,
  },
  pdfR = {
    RESIZE: 1,
    CREATE: 2,
    FREETEXT_SIZE: 11,
    FREETEXT_COLOR: 12,
    FREETEXT_OPACITY: 13,
    INK_COLOR: 21,
    INK_THICKNESS: 22,
    INK_OPACITY: 23,
    HIGHLIGHT_COLOR: 31,
    HIGHLIGHT_THICKNESS: 32,
    HIGHLIGHT_FREE: 33,
    HIGHLIGHT_SHOW_ALL: 34,
    DRAW_STEP: 41,
  },
  _pdfS = {
    PRINT: 4,
    MODIFY_CONTENTS: 8,
    COPY: 16,
    MODIFY_ANNOTATIONS: 32,
    FILL_INTERACTIVE_FORMS: 256,
    COPY_FOR_ACCESSIBILITY: 512,
    ASSEMBLE: 1024,
    PRINT_HIGH_QUALITY: 2048,
  },
  pdfValue7 = {
    FILL: 0,
    STROKE: 1,
    FILL_STROKE: 2,
    INVISIBLE: 3,
    FILL_ADD_TO_PATH: 4,
    STROKE_ADD_TO_PATH: 5,
    FILL_STROKE_ADD_TO_PATH: 6,
    ADD_TO_PATH: 7,
    FILL_STROKE_MASK: 3,
    ADD_TO_PATH_FLAG: 4,
  },
  pdfNt = {
    GRAYSCALE_1BPP: 1,
    RGB_24BPP: 2,
    RGBA_32BPP: 3,
  },
  pdfC = {
    TEXT: 1,
    LINK: 2,
    FREETEXT: 3,
    LINE: 4,
    SQUARE: 5,
    CIRCLE: 6,
    POLYGON: 7,
    POLYLINE: 8,
    HIGHLIGHT: 9,
    UNDERLINE: 10,
    SQUIGGLY: 11,
    STRIKEOUT: 12,
    STAMP: 13,
    CARET: 14,
    INK: 15,
    POPUP: 16,
    FILEATTACHMENT: 17,
    SOUND: 18,
    MOVIE: 19,
    WIDGET: 20,
    SCREEN: 21,
    PRINTERMARK: 22,
    TRAPNET: 23,
    WATERMARK: 24,
    THREED: 25,
    REDACT: 26,
  },
  pdfValue8 = {
    SOLID: 1,
    DASHED: 2,
    BEVELED: 3,
    INSET: 4,
    UNDERLINE: 5,
  },
  pdfJ = {
    ERRORS: 0,
    WARNINGS: 1,
    INFOS: 5,
  },
  pdfG = {
    dependency: 1,
    setLineWidth: 2,
    setLineCap: 3,
    setLineJoin: 4,
    setMiterLimit: 5,
    setDash: 6,
    setRenderingIntent: 7,
    setFlatness: 8,
    setGState: 9,
    save: 10,
    restore: 11,
    transform: 12,
    moveTo: 13,
    lineTo: 14,
    curveTo: 15,
    curveTo2: 16,
    curveTo3: 17,
    closePath: 18,
    rectangle: 19,
    stroke: 20,
    closeStroke: 21,
    fill: 22,
    eoFill: 23,
    fillStroke: 24,
    eoFillStroke: 25,
    closeFillStroke: 26,
    closeEOFillStroke: 27,
    endPath: 28,
    clip: 29,
    eoClip: 30,
    beginText: 31,
    endText: 32,
    setCharSpacing: 33,
    setWordSpacing: 34,
    setHScale: 35,
    setLeading: 36,
    setFont: 37,
    setTextRenderingMode: 38,
    setTextRise: 39,
    moveText: 40,
    setLeadingMoveText: 41,
    setTextMatrix: 42,
    nextLine: 43,
    showText: 44,
    showSpacedText: 45,
    nextLineShowText: 46,
    nextLineSetSpacingShowText: 47,
    setCharWidth: 48,
    setCharWidthAndBounds: 49,
    setStrokeColorSpace: 50,
    setFillColorSpace: 51,
    setStrokeColor: 52,
    setStrokeColorN: 53,
    setFillColor: 54,
    setFillColorN: 55,
    setStrokeGray: 56,
    setFillGray: 57,
    setStrokeRGBColor: 58,
    setFillRGBColor: 59,
    setStrokeCMYKColor: 60,
    setFillCMYKColor: 61,
    shadingFill: 62,
    beginInlineImage: 63,
    beginImageData: 64,
    endInlineImage: 65,
    paintXObject: 66,
    markPoint: 67,
    markPointProps: 68,
    beginMarkedContent: 69,
    beginMarkedContentProps: 70,
    endMarkedContent: 71,
    beginCompat: 72,
    endCompat: 73,
    paintFormXObjectBegin: 74,
    paintFormXObjectEnd: 75,
    beginGroup: 76,
    endGroup: 77,
    beginAnnotation: 80,
    endAnnotation: 81,
    paintImageMaskXObject: 83,
    paintImageMaskXObjectGroup: 84,
    paintImageXObject: 85,
    paintInlineImageXObject: 86,
    paintInlineImageXObjectGroup: 87,
    paintImageXObjectRepeat: 88,
    paintImageMaskXObjectRepeat: 89,
    paintSolidColorImageMask: 90,
    constructPath: 91,
    setStrokeTransparent: 92,
    setFillTransparent: 93,
    rawFillPath: 94,
  },
  pdfValue9 = {
    moveTo: 0,
    lineTo: 1,
    curveTo: 2,
    closePath: 3,
  },
  pdfX = {
    NEED_PASSWORD: 1,
    INCORRECT_PASSWORD: 2,
  },
  pdfValue10 = pdfJ.WARNINGS;
function pdfHelper1(pdfParam1597) {
  Number.isInteger(pdfParam1597) && (pdfValue10 = pdfParam1597);
}
function pdfHelper2() {
  return pdfValue10;
}
function pdfHelper3(pdfParam1494) {
  pdfValue10 >= pdfJ.INFOS && console.info(`Info: ${pdfParam1494}`);
}
function pdfHelper4(pdfParam1411) {
  pdfValue10 >= pdfJ.WARNINGS && console.warn(`Warning: ${pdfParam1411}`);
}
function pdfHelper5(pdfParam1687) {
  throw Error(pdfParam1687);
}
function pdfHelper6(pdfParam1708, pdfParam1709) {
  pdfParam1708 || pdfHelper5(pdfParam1709);
}
function pdfHelper7(pdfParam928) {
  switch (pdfParam928?.protocol) {
    case `http:`:
    case `https:`:
    case `ftp:`:
    case `mailto:`:
    case `tel:`:
      return !0;
    default:
      return !1;
  }
}
function pdfF(pdfParam496, pdfParam497 = null, __pdfY = null) {
  if (!pdfParam496) return null;
  if (
    __pdfY &&
    typeof pdfParam496 == `string` &&
    (__pdfY.addDefaultProtocol &&
      pdfParam496.startsWith(`www.`) &&
      pdfParam496.match(/\./g)?.length >= 2 &&
      (pdfParam496 = `http://${pdfParam496}`),
    __pdfY.tryConvertEncoding)
  )
    try {
      pdfParam496 = pdfHelper13(pdfParam496);
    } catch {}
  let pdfValue1290 = pdfParam497
    ? URL.parse(pdfParam496, pdfParam497)
    : URL.parse(pdfParam496);
  return pdfHelper7(pdfValue1290) ? pdfValue1290 : null;
}
function pdfEt(pdfParam874, pdfParam875, __pdfY = !1) {
  let pdfValue1665 = URL.parse(pdfParam874);
  return pdfValue1665
    ? ((pdfValue1665.hash = pdfParam875), pdfValue1665.href)
    : __pdfY && pdfF(pdfParam874, `http://example.com`)
      ? pdfParam874.split(`#`, 1)[0] + `${pdfParam875 ? `#${pdfParam875}` : ``}`
      : ``;
}
function pdfQ(pdfParam995, pdfParam996, __pdfY, pdfParam997 = !1) {
  return (
    Object.defineProperty(pdfParam995, pdfParam996, {
      value: __pdfY,
      enumerable: !pdfParam997,
      configurable: !0,
      writable: !1,
    }),
    __pdfY
  );
}
var pdfValue11 = (function () {
    function pdfHelper66(pdfParam1582, pdfParam1583) {
      ((this.message = pdfParam1582), (this.name = pdfParam1583));
    }
    return (
      (pdfHelper66.prototype = Error()),
      (pdfHelper66.constructor = pdfHelper66),
      pdfHelper66
    );
  })(),
  pdfValue12 = class extends pdfValue11 {
    constructor(pdfParam1431, pdfParam1432) {
      (super(pdfParam1431, `PasswordException`), (this.code = pdfParam1432));
    }
  },
  pdfValue13 = class extends pdfValue11 {
    constructor(pdfParam1350, pdfParam1351) {
      (super(pdfParam1350, `UnknownErrorException`),
        (this.details = pdfParam1351));
    }
  },
  pdfM = class extends pdfValue11 {
    constructor(pdfParam1554) {
      super(pdfParam1554, `InvalidPDFException`);
    }
  },
  pdfT = class extends pdfValue11 {
    constructor(pdfParam1259, pdfParam1260, __pdfY) {
      (super(pdfParam1259, `ResponseException`),
        (this.status = pdfParam1260),
        (this.missing = __pdfY));
    }
  },
  pdfValue14 = class extends pdfValue11 {
    constructor(pdfParam1619) {
      super(pdfParam1619, `FormatError`);
    }
  },
  _pdfT = class extends pdfValue11 {
    constructor(pdfParam1598) {
      super(pdfParam1598, `AbortException`);
    }
  };
function pdfHelper8(pdfParam432) {
  (typeof pdfParam432 != `object` || pdfParam432?.length === void 0) &&
    pdfHelper5(`Invalid argument for bytesToString`);
  let pdfValue1164 = pdfParam432.length,
    __pdfY = 8192;
  if (pdfValue1164 < __pdfY)
    return String.fromCharCode.apply(null, pdfParam432);
  let pdfValue1165 = [];
  for (
    let pdfValue1820 = 0;
    pdfValue1820 < pdfValue1164;
    pdfValue1820 += __pdfY
  ) {
    let pdfValue1938 = Math.min(pdfValue1820 + __pdfY, pdfValue1164),
      pdfValue1939 = pdfParam432.subarray(pdfValue1820, pdfValue1938);
    pdfValue1165.push(String.fromCharCode.apply(null, pdfValue1939));
  }
  return pdfValue1165.join(``);
}
function pdfHelper9(pdfParam711) {
  typeof pdfParam711 != `string` &&
    pdfHelper5(`Invalid argument for stringToBytes`);
  let pdfValue1574 = pdfParam711.length,
    __pdfY = new Uint8Array(pdfValue1574);
  for (let pdfValue2185 = 0; pdfValue2185 < pdfValue1574; ++pdfValue2185)
    __pdfY[pdfValue2185] = pdfParam711.charCodeAt(pdfValue2185) & 255;
  return __pdfY;
}
function pdfHelper10(pdfParam1253) {
  return String.fromCharCode(
    (pdfParam1253 >> 24) & 255,
    (pdfParam1253 >> 16) & 255,
    (pdfParam1253 >> 8) & 255,
    pdfParam1253 & 255,
  );
}
function pdfHelper11() {
  let pdfValue1906 = new Uint8Array(4);
  return (
    (pdfValue1906[0] = 1),
    new Uint32Array(pdfValue1906.buffer, 0, 1)[0] === 1
  );
}
function pdfHelper12() {
  try {
    return (Function(``), !0);
  } catch {
    return !1;
  }
}
var pdfTt = class {
    static get isLittleEndian() {
      return pdfQ(this, `isLittleEndian`, pdfHelper11());
    }
    static get isEvalSupported() {
      return pdfQ(this, `isEvalSupported`, pdfHelper12());
    }
    static get isOffscreenCanvasSupported() {
      return pdfQ(
        this,
        `isOffscreenCanvasSupported`,
        typeof OffscreenCanvas < `u`,
      );
    }
    static get isImageDecoderSupported() {
      return pdfQ(this, `isImageDecoderSupported`, typeof ImageDecoder < `u`);
    }
    static get platform() {
      let { platform: platform, userAgent: userAgent } = navigator;
      return pdfQ(this, `platform`, {
        isAndroid: userAgent.includes(`Android`),
        isLinux: platform.includes(`Linux`),
        isMac: platform.includes(`Mac`),
        isWindows: platform.includes(`Win`),
        isFirefox: userAgent.includes(`Firefox`),
      });
    }
    static get isCSSRoundSupported() {
      return pdfQ(
        this,
        `isCSSRoundSupported`,
        globalThis.CSS?.supports?.(`width: round(1.5px, 1px)`),
      );
    }
  },
  pdfValue15 = Array.from(Array(256).keys(), (pdfParam1670) =>
    pdfParam1670.toString(16).padStart(2, `0`),
  ),
  pdfA = class {
    static makeHexColor(pdfParam1391, pdfParam1392, __pdfY) {
      return `#${pdfValue15[pdfParam1391]}${pdfValue15[pdfParam1392]}${pdfValue15[__pdfY]}`;
    }
    static domMatrixToTransform(pdfParam1361) {
      return [
        pdfParam1361.a,
        pdfParam1361.b,
        pdfParam1361.c,
        pdfParam1361.d,
        pdfParam1361.e,
        pdfParam1361.f,
      ];
    }
    static scaleMinMax(pdfParam351, pdfParam352) {
      let __pdfY;
      (pdfParam351[0]
        ? (pdfParam351[0] < 0 &&
            ((__pdfY = pdfParam352[0]),
            (pdfParam352[0] = pdfParam352[2]),
            (pdfParam352[2] = __pdfY)),
          (pdfParam352[0] *= pdfParam351[0]),
          (pdfParam352[2] *= pdfParam351[0]),
          pdfParam351[3] < 0 &&
            ((__pdfY = pdfParam352[1]),
            (pdfParam352[1] = pdfParam352[3]),
            (pdfParam352[3] = __pdfY)),
          (pdfParam352[1] *= pdfParam351[3]),
          (pdfParam352[3] *= pdfParam351[3]))
        : ((__pdfY = pdfParam352[0]),
          (pdfParam352[0] = pdfParam352[1]),
          (pdfParam352[1] = __pdfY),
          (__pdfY = pdfParam352[2]),
          (pdfParam352[2] = pdfParam352[3]),
          (pdfParam352[3] = __pdfY),
          pdfParam351[1] < 0 &&
            ((__pdfY = pdfParam352[1]),
            (pdfParam352[1] = pdfParam352[3]),
            (pdfParam352[3] = __pdfY)),
          (pdfParam352[1] *= pdfParam351[1]),
          (pdfParam352[3] *= pdfParam351[1]),
          pdfParam351[2] < 0 &&
            ((__pdfY = pdfParam352[0]),
            (pdfParam352[0] = pdfParam352[2]),
            (pdfParam352[2] = __pdfY)),
          (pdfParam352[0] *= pdfParam351[2]),
          (pdfParam352[2] *= pdfParam351[2])),
        (pdfParam352[0] += pdfParam351[4]),
        (pdfParam352[1] += pdfParam351[5]),
        (pdfParam352[2] += pdfParam351[4]),
        (pdfParam352[3] += pdfParam351[5]));
    }
    static transform(pdfParam740, pdfParam741) {
      return [
        pdfParam740[0] * pdfParam741[0] + pdfParam740[2] * pdfParam741[1],
        pdfParam740[1] * pdfParam741[0] + pdfParam740[3] * pdfParam741[1],
        pdfParam740[0] * pdfParam741[2] + pdfParam740[2] * pdfParam741[3],
        pdfParam740[1] * pdfParam741[2] + pdfParam740[3] * pdfParam741[3],
        pdfParam740[0] * pdfParam741[4] +
          pdfParam740[2] * pdfParam741[5] +
          pdfParam740[4],
        pdfParam740[1] * pdfParam741[4] +
          pdfParam740[3] * pdfParam741[5] +
          pdfParam740[5],
      ];
    }
    static multiplyByDOMMatrix(pdfParam747, pdfParam748) {
      return [
        pdfParam747[0] * pdfParam748.a + pdfParam747[2] * pdfParam748.b,
        pdfParam747[1] * pdfParam748.a + pdfParam747[3] * pdfParam748.b,
        pdfParam747[0] * pdfParam748.c + pdfParam747[2] * pdfParam748.d,
        pdfParam747[1] * pdfParam748.c + pdfParam747[3] * pdfParam748.d,
        pdfParam747[0] * pdfParam748.e +
          pdfParam747[2] * pdfParam748.f +
          pdfParam747[4],
        pdfParam747[1] * pdfParam748.e +
          pdfParam747[3] * pdfParam748.f +
          pdfParam747[5],
      ];
    }
    static applyTransform(pdfParam1080, pdfParam1081, __pdfY = 0) {
      let pdfValue1834 = pdfParam1080[__pdfY],
        pdfValue1835 = pdfParam1080[__pdfY + 1];
      ((pdfParam1080[__pdfY] =
        pdfValue1834 * pdfParam1081[0] +
        pdfValue1835 * pdfParam1081[2] +
        pdfParam1081[4]),
        (pdfParam1080[__pdfY + 1] =
          pdfValue1834 * pdfParam1081[1] +
          pdfValue1835 * pdfParam1081[3] +
          pdfParam1081[5]));
    }
    static applyTransformToBezier(pdfParam686, pdfParam687, __pdfY = 0) {
      let pdfValue1552 = pdfParam687[0],
        pdfValue1553 = pdfParam687[1],
        pdfValue1554 = pdfParam687[2],
        pdfValue1555 = pdfParam687[3],
        pdfValue1556 = pdfParam687[4],
        __pdfS = pdfParam687[5];
      for (let pdfValue1952 = 0; pdfValue1952 < 6; pdfValue1952 += 2) {
        let pdfValue2080 = pdfParam686[__pdfY + pdfValue1952],
          __pdfI = pdfParam686[__pdfY + pdfValue1952 + 1];
        ((pdfParam686[__pdfY + pdfValue1952] =
          pdfValue2080 * pdfValue1552 + __pdfI * pdfValue1554 + pdfValue1556),
          (pdfParam686[__pdfY + pdfValue1952 + 1] =
            pdfValue2080 * pdfValue1553 + __pdfI * pdfValue1555 + __pdfS));
      }
    }
    static applyInverseTransform(pdfParam728, pdfParam729) {
      let __pdfY = pdfParam728[0],
        pdfValue1584 = pdfParam728[1],
        pdfValue1585 =
          pdfParam729[0] * pdfParam729[3] - pdfParam729[1] * pdfParam729[2];
      ((pdfParam728[0] =
        (__pdfY * pdfParam729[3] -
          pdfValue1584 * pdfParam729[2] +
          pdfParam729[2] * pdfParam729[5] -
          pdfParam729[4] * pdfParam729[3]) /
        pdfValue1585),
        (pdfParam728[1] =
          (-__pdfY * pdfParam729[1] +
            pdfValue1584 * pdfParam729[0] +
            pdfParam729[4] * pdfParam729[1] -
            pdfParam729[5] * pdfParam729[0]) /
          pdfValue1585));
    }
    static axialAlignedBoundingBox(pdfParam347, pdfParam348, __pdfY) {
      let pdfValue1013 = pdfParam348[0],
        pdfValue1014 = pdfParam348[1],
        pdfValue1015 = pdfParam348[2],
        pdfValue1016 = pdfParam348[3],
        pdfValue1017 = pdfParam348[4],
        __pdfS = pdfParam348[5],
        pdfValue1018 = pdfParam347[0],
        __pdfI = pdfParam347[1],
        __pdfR = pdfParam347[2],
        ___pdfS = pdfParam347[3],
        pdfValue1019 = pdfValue1013 * pdfValue1018 + pdfValue1017,
        _pdfNt = pdfValue1019,
        __pdfC = pdfValue1013 * __pdfR + pdfValue1017,
        pdfValue1020 = __pdfC,
        __pdfJ = pdfValue1016 * __pdfI + __pdfS,
        __pdfG = __pdfJ,
        pdfValue1021 = pdfValue1016 * ___pdfS + __pdfS,
        __pdfX = pdfValue1021;
      if (pdfValue1014 !== 0 || pdfValue1015 !== 0) {
        let pdfValue2024 = pdfValue1014 * pdfValue1018,
          pdfValue2025 = pdfValue1014 * __pdfR,
          ___pdfY = pdfValue1015 * __pdfI,
          pdfValue2026 = pdfValue1015 * ___pdfS;
        ((pdfValue1019 += ___pdfY),
          (pdfValue1020 += ___pdfY),
          (__pdfC += pdfValue2026),
          (_pdfNt += pdfValue2026),
          (__pdfJ += pdfValue2024),
          (__pdfX += pdfValue2024),
          (pdfValue1021 += pdfValue2025),
          (__pdfG += pdfValue2025));
      }
      ((__pdfY[0] = Math.min(
        __pdfY[0],
        pdfValue1019,
        __pdfC,
        _pdfNt,
        pdfValue1020,
      )),
        (__pdfY[1] = Math.min(__pdfY[1], __pdfJ, pdfValue1021, __pdfG, __pdfX)),
        (__pdfY[2] = Math.max(
          __pdfY[2],
          pdfValue1019,
          __pdfC,
          _pdfNt,
          pdfValue1020,
        )),
        (__pdfY[3] = Math.max(
          __pdfY[3],
          __pdfJ,
          pdfValue1021,
          __pdfG,
          __pdfX,
        )));
    }
    static inverseTransform(pdfParam842) {
      let pdfValue1653 =
        pdfParam842[0] * pdfParam842[3] - pdfParam842[1] * pdfParam842[2];
      return [
        pdfParam842[3] / pdfValue1653,
        -pdfParam842[1] / pdfValue1653,
        -pdfParam842[2] / pdfValue1653,
        pdfParam842[0] / pdfValue1653,
        (pdfParam842[2] * pdfParam842[5] - pdfParam842[4] * pdfParam842[3]) /
          pdfValue1653,
        (pdfParam842[4] * pdfParam842[1] - pdfParam842[5] * pdfParam842[0]) /
          pdfValue1653,
      ];
    }
    static singularValueDecompose2dScale(pdfParam614, pdfParam615) {
      let __pdfY = pdfParam614[0],
        pdfValue1472 = pdfParam614[1],
        pdfValue1473 = pdfParam614[2],
        pdfValue1474 = pdfParam614[3],
        pdfValue1475 = __pdfY ** 2 + pdfValue1472 ** 2,
        pdfValue1476 = __pdfY * pdfValue1473 + pdfValue1472 * pdfValue1474,
        __pdfS = pdfValue1473 ** 2 + pdfValue1474 ** 2,
        pdfValue1477 = (pdfValue1475 + __pdfS) / 2,
        __pdfI = Math.sqrt(
          pdfValue1477 ** 2 - (pdfValue1475 * __pdfS - pdfValue1476 ** 2),
        );
      ((pdfParam615[0] = Math.sqrt(pdfValue1477 + __pdfI || 1)),
        (pdfParam615[1] = Math.sqrt(pdfValue1477 - __pdfI || 1)));
    }
    static normalizeRect(pdfParam957) {
      let pdfValue1754 = pdfParam957.slice(0);
      return (
        pdfParam957[0] > pdfParam957[2] &&
          ((pdfValue1754[0] = pdfParam957[2]),
          (pdfValue1754[2] = pdfParam957[0])),
        pdfParam957[1] > pdfParam957[3] &&
          ((pdfValue1754[1] = pdfParam957[3]),
          (pdfValue1754[3] = pdfParam957[1])),
        pdfValue1754
      );
    }
    static intersect(pdfParam450, pdfParam451) {
      let __pdfY = Math.max(
          Math.min(pdfParam450[0], pdfParam450[2]),
          Math.min(pdfParam451[0], pdfParam451[2]),
        ),
        pdfValue1184 = Math.min(
          Math.max(pdfParam450[0], pdfParam450[2]),
          Math.max(pdfParam451[0], pdfParam451[2]),
        );
      if (__pdfY > pdfValue1184) return null;
      let pdfValue1185 = Math.max(
          Math.min(pdfParam450[1], pdfParam450[3]),
          Math.min(pdfParam451[1], pdfParam451[3]),
        ),
        pdfValue1186 = Math.min(
          Math.max(pdfParam450[1], pdfParam450[3]),
          Math.max(pdfParam451[1], pdfParam451[3]),
        );
      return pdfValue1185 > pdfValue1186
        ? null
        : [__pdfY, pdfValue1185, pdfValue1184, pdfValue1186];
    }
    static pointBoundingBox(pdfParam944, pdfParam945, __pdfY) {
      ((__pdfY[0] = Math.min(__pdfY[0], pdfParam944)),
        (__pdfY[1] = Math.min(__pdfY[1], pdfParam945)),
        (__pdfY[2] = Math.max(__pdfY[2], pdfParam944)),
        (__pdfY[3] = Math.max(__pdfY[3], pdfParam945)));
    }
    static rectBoundingBox(
      pdfParam899,
      pdfParam900,
      __pdfY,
      pdfParam901,
      pdfParam902,
    ) {
      ((pdfParam902[0] = Math.min(pdfParam902[0], pdfParam899, __pdfY)),
        (pdfParam902[1] = Math.min(pdfParam902[1], pdfParam900, pdfParam901)),
        (pdfParam902[2] = Math.max(pdfParam902[2], pdfParam899, __pdfY)),
        (pdfParam902[3] = Math.max(pdfParam902[3], pdfParam900, pdfParam901)));
    }
    static #e(
      pdfParam558,
      pdfParam559,
      __pdfY,
      pdfParam560,
      pdfParam561,
      pdfParam562,
      pdfParam563,
      pdfParam564,
      __pdfS,
      pdfParam565,
    ) {
      if (__pdfS <= 0 || __pdfS >= 1) return;
      let __pdfI = 1 - __pdfS,
        __pdfR = __pdfS * __pdfS,
        ___pdfS = __pdfR * __pdfS,
        pdfValue1404 =
          __pdfI *
            (__pdfI * (__pdfI * pdfParam558 + 3 * __pdfS * pdfParam559) +
              3 * __pdfR * __pdfY) +
          ___pdfS * pdfParam560,
        _pdfNt =
          __pdfI *
            (__pdfI * (__pdfI * pdfParam561 + 3 * __pdfS * pdfParam562) +
              3 * __pdfR * pdfParam563) +
          ___pdfS * pdfParam564;
      ((pdfParam565[0] = Math.min(pdfParam565[0], pdfValue1404)),
        (pdfParam565[1] = Math.min(pdfParam565[1], _pdfNt)),
        (pdfParam565[2] = Math.max(pdfParam565[2], pdfValue1404)),
        (pdfParam565[3] = Math.max(pdfParam565[3], _pdfNt)));
    }
    static #t(
      pdfParam518,
      pdfParam519,
      __pdfY,
      pdfParam520,
      pdfParam521,
      pdfParam522,
      pdfParam523,
      pdfParam524,
      __pdfS,
      pdfParam525,
      __pdfI,
      __pdfR,
    ) {
      if (Math.abs(__pdfS) < 1e-12) {
        Math.abs(pdfParam525) >= 1e-12 &&
          this.#e(
            pdfParam518,
            pdfParam519,
            __pdfY,
            pdfParam520,
            pdfParam521,
            pdfParam522,
            pdfParam523,
            pdfParam524,
            -__pdfI / pdfParam525,
            __pdfR,
          );
        return;
      }
      let ___pdfS = pdfParam525 ** 2 - 4 * __pdfI * __pdfS;
      if (___pdfS < 0) return;
      let pdfValue1333 = Math.sqrt(___pdfS),
        _pdfNt = 2 * __pdfS;
      (this.#e(
        pdfParam518,
        pdfParam519,
        __pdfY,
        pdfParam520,
        pdfParam521,
        pdfParam522,
        pdfParam523,
        pdfParam524,
        (-pdfParam525 + pdfValue1333) / _pdfNt,
        __pdfR,
      ),
        this.#e(
          pdfParam518,
          pdfParam519,
          __pdfY,
          pdfParam520,
          pdfParam521,
          pdfParam522,
          pdfParam523,
          pdfParam524,
          (-pdfParam525 - pdfValue1333) / _pdfNt,
          __pdfR,
        ));
    }
    static bezierBoundingBox(
      pdfParam475,
      pdfParam476,
      __pdfY,
      pdfParam477,
      pdfParam478,
      pdfParam479,
      pdfParam480,
      pdfParam481,
      __pdfS,
    ) {
      ((__pdfS[0] = Math.min(__pdfS[0], pdfParam475, pdfParam480)),
        (__pdfS[1] = Math.min(__pdfS[1], pdfParam476, pdfParam481)),
        (__pdfS[2] = Math.max(__pdfS[2], pdfParam475, pdfParam480)),
        (__pdfS[3] = Math.max(__pdfS[3], pdfParam476, pdfParam481)),
        this.#t(
          pdfParam475,
          __pdfY,
          pdfParam478,
          pdfParam480,
          pdfParam476,
          pdfParam477,
          pdfParam479,
          pdfParam481,
          3 * (-pdfParam475 + 3 * (__pdfY - pdfParam478) + pdfParam480),
          6 * (pdfParam475 - 2 * __pdfY + pdfParam478),
          3 * (__pdfY - pdfParam475),
          __pdfS,
        ),
        this.#t(
          pdfParam475,
          __pdfY,
          pdfParam478,
          pdfParam480,
          pdfParam476,
          pdfParam477,
          pdfParam479,
          pdfParam481,
          3 * (-pdfParam476 + 3 * (pdfParam477 - pdfParam479) + pdfParam481),
          6 * (pdfParam476 - 2 * pdfParam477 + pdfParam479),
          3 * (pdfParam477 - pdfParam476),
          __pdfS,
        ));
    }
  };
function pdfHelper13(pdfParam1506) {
  return decodeURIComponent(escape(pdfParam1506));
}
var pdfValue16 = null,
  pdfValue17 = null;
function _pdfJ(pdfParam288) {
  return (
    pdfValue16 ||
      ((pdfValue16 =
        /([\u00a0\u00b5\u037e\u0eb3\u2000-\u200a\u202f\u2126\ufb00-\ufb04\ufb06\ufb20-\ufb36\ufb38-\ufb3c\ufb3e\ufb40-\ufb41\ufb43-\ufb44\ufb46-\ufba1\ufba4-\ufba9\ufbae-\ufbb1\ufbd3-\ufbdc\ufbde-\ufbe7\ufbea-\ufbf8\ufbfc-\ufbfd\ufc00-\ufc5d\ufc64-\ufcf1\ufcf5-\ufd3d\ufd88\ufdf4\ufdfa-\ufdfb\ufe71\ufe77\ufe79\ufe7b\ufe7d]+)|(\ufb05+)/gu),
      (pdfValue17 = new Map([[`ﬅ`, `ſt`]]))),
    pdfParam288.replaceAll(pdfValue16, (pdfParam1605, pdfParam1606, __pdfY) =>
      pdfParam1606 ? pdfParam1606.normalize(`NFKC`) : pdfValue17.get(__pdfY),
    )
  );
}
function pdfH() {
  if (typeof crypto.randomUUID == `function`) return crypto.randomUUID();
  let pdfValue1633 = new Uint8Array(32);
  return (crypto.getRandomValues(pdfValue1633), pdfHelper8(pdfValue1633));
}
var pdfValue18 = `pdfjs_internal_id_`;
function pdfHelper14(pdfParam303, pdfParam304, __pdfY) {
  if (!Array.isArray(__pdfY) || __pdfY.length < 2) return !1;
  let [pdfValue901, pdfValue902, ...pdfValue903] = __pdfY;
  if (
    (!pdfParam303(pdfValue901) && !Number.isInteger(pdfValue901)) ||
    !pdfParam304(pdfValue902)
  )
    return !1;
  let pdfValue904 = pdfValue903.length,
    pdfValue905 = !0;
  switch (pdfValue902.name) {
    case `XYZ`:
      if (pdfValue904 < 2 || pdfValue904 > 3) return !1;
      break;
    case `Fit`:
    case `FitB`:
      return pdfValue904 === 0;
    case `FitH`:
    case `FitBH`:
    case `FitV`:
    case `FitBV`:
      if (pdfValue904 > 1) return !1;
      break;
    case `FitR`:
      if (pdfValue904 !== 4) return !1;
      pdfValue905 = !1;
      break;
    default:
      return !1;
  }
  for (let pdfValue2067 of pdfValue903)
    if (
      !(
        typeof pdfValue2067 == `number` ||
        (pdfValue905 && pdfValue2067 === null)
      )
    )
      return !1;
  return !0;
}
function _pdfH(pdfParam1515, pdfParam1516, __pdfY) {
  return Math.min(Math.max(pdfParam1515, pdfParam1516), __pdfY);
}
function pdfHelper15(pdfParam1261) {
  return Uint8Array.prototype.toBase64
    ? pdfParam1261.toBase64()
    : btoa(pdfHelper8(pdfParam1261));
}
function _e(pdfParam1234) {
  return Uint8Array.fromBase64
    ? Uint8Array.fromBase64(pdfParam1234)
    : pdfHelper9(atob(pdfParam1234));
}
(typeof Promise.try != `function` &&
  (Promise.try = function (pdfParam1495, ...pdfParam1496) {
    return new Promise((__pdfY) => {
      __pdfY(pdfParam1495(...pdfParam1496));
    });
  }),
  typeof Math.sumPrecise != `function` &&
    (Math.sumPrecise = function (pdfParam1588) {
      return pdfParam1588.reduce(
        (accumulator, current) => accumulator + current,
        0,
      );
    }));
var pdfValue19 = class PdfClass33 {
    static textContent(pdfParam360) {
      let __pdfY = [],
        pdfValue1051 = {
          items: __pdfY,
          styles: Object.create(null),
        };
      function pdfHelper63(pdfParam501) {
        if (!pdfParam501) return;
        let pdfValue1293 = null,
          pdfValue1294 = pdfParam501.name;
        if (pdfValue1294 === `#text`) pdfValue1293 = pdfParam501.value;
        else if (PdfClass33.shouldBuildText(pdfValue1294))
          pdfParam501?.attributes?.textContent
            ? (pdfValue1293 = pdfParam501.attributes.textContent)
            : pdfParam501.value && (pdfValue1293 = pdfParam501.value);
        else return;
        if (
          (pdfValue1293 !== null &&
            __pdfY.push({
              str: pdfValue1293,
            }),
          pdfParam501.children)
        )
          for (let pdfValue2239 of pdfParam501.children)
            pdfHelper63(pdfValue2239);
      }
      return (pdfHelper63(pdfParam360), pdfValue1051);
    }
    static shouldBuildText(pdfParam1147) {
      return !(
        pdfParam1147 === `textarea` ||
        pdfParam1147 === `input` ||
        pdfParam1147 === `option` ||
        pdfParam1147 === `select`
      );
    }
  },
  _pdfM = class {
    static setupStorage(
      pdfParam43,
      pdfParam44,
      __pdfY,
      pdfParam45,
      pdfParam46,
    ) {
      let pdfValue386 = pdfParam45.getValue(pdfParam44, {
        value: null,
      });
      switch (__pdfY.name) {
        case `textarea`:
          if (
            (pdfValue386.value !== null &&
              (pdfParam43.textContent = pdfValue386.value),
            pdfParam46 === `print`)
          )
            break;
          pdfParam43.addEventListener(`input`, (event) => {
            pdfParam45.setValue(pdfParam44, {
              value: event.target.value,
            });
          });
          break;
        case `input`:
          if (
            __pdfY.attributes.type === `radio` ||
            __pdfY.attributes.type === `checkbox`
          ) {
            if (
              (pdfValue386.value === __pdfY.attributes.xfaOn
                ? pdfParam43.setAttribute(`checked`, !0)
                : pdfValue386.value === __pdfY.attributes.xfaOff &&
                  pdfParam43.removeAttribute(`checked`),
              pdfParam46 === `print`)
            )
              break;
            pdfParam43.addEventListener(`change`, (event) => {
              pdfParam45.setValue(pdfParam44, {
                value: event.target.checked
                  ? event.target.getAttribute(`xfaOn`)
                  : event.target.getAttribute(`xfaOff`),
              });
            });
          } else {
            if (
              (pdfValue386.value !== null &&
                pdfParam43.setAttribute(`value`, pdfValue386.value),
              pdfParam46 === `print`)
            )
              break;
            pdfParam43.addEventListener(`input`, (event) => {
              pdfParam45.setValue(pdfParam44, {
                value: event.target.value,
              });
            });
          }
          break;
        case `select`:
          if (pdfValue386.value !== null) {
            pdfParam43.setAttribute(`value`, pdfValue386.value);
            for (let pdfValue1628 of __pdfY.children)
              pdfValue1628.attributes.value === pdfValue386.value
                ? (pdfValue1628.attributes.selected = !0)
                : pdfValue1628.attributes.hasOwnProperty(`selected`) &&
                  delete pdfValue1628.attributes.selected;
          }
          pdfParam43.addEventListener(`input`, (event) => {
            let ___pdfY = event.target.options,
              pdfValue1830 =
                ___pdfY.selectedIndex === -1
                  ? ``
                  : ___pdfY[___pdfY.selectedIndex].value;
            pdfParam45.setValue(pdfParam44, {
              value: pdfValue1830,
            });
          });
          break;
      }
    }
    static setAttributes({
      html: html,
      element: element,
      storage: __pdfY = null,
      intent: intent,
      linkService: linkService,
    }) {
      let { attributes: attributes } = element,
        pdfValue704 = html instanceof HTMLAnchorElement;
      attributes.type === `radio` &&
        (attributes.name = `${attributes.name}-${intent}`);
      for (let [pdfValue1068, ___pdfY] of Object.entries(attributes))
        if (___pdfY != null)
          switch (pdfValue1068) {
            case `class`:
              ___pdfY.length &&
                html.setAttribute(pdfValue1068, ___pdfY.join(` `));
              break;
            case `dataId`:
              break;
            case `id`:
              html.setAttribute(`data-element-id`, ___pdfY);
              break;
            case `style`:
              Object.assign(html.style, ___pdfY);
              break;
            case `textContent`:
              html.textContent = ___pdfY;
              break;
            default:
              (!pdfValue704 ||
                (pdfValue1068 !== `href` && pdfValue1068 !== `newWindow`)) &&
                html.setAttribute(pdfValue1068, ___pdfY);
          }
      (pdfValue704 &&
        linkService.addLinkAttributes(
          html,
          attributes.href,
          attributes.newWindow,
        ),
        __pdfY &&
          attributes.dataId &&
          this.setupStorage(html, attributes.dataId, element, __pdfY));
    }
    static render(pdfParam30) {
      let pdfValue334 = pdfParam30.annotationStorage,
        __pdfY = pdfParam30.linkService,
        pdfValue335 = pdfParam30.xfaHtml,
        pdfValue336 = pdfParam30.intent || `display`,
        pdfValue337 = document.createElement(pdfValue335.name);
      pdfValue335.attributes &&
        this.setAttributes({
          html: pdfValue337,
          element: pdfValue335,
          intent: pdfValue336,
          linkService: __pdfY,
        });
      let pdfValue338 = pdfValue336 !== `richText`,
        pdfValue339 = pdfParam30.div;
      if ((pdfValue339.append(pdfValue337), pdfParam30.viewport)) {
        let pdfValue2007 = `matrix(${pdfParam30.viewport.transform.join(`,`)})`;
        pdfValue339.style.transform = pdfValue2007;
      }
      pdfValue338 && pdfValue339.setAttribute(`class`, `xfaLayer xfaFont`);
      let __pdfS = [];
      if (pdfValue335.children.length === 0) {
        if (pdfValue335.value) {
          let pdfValue1875 = document.createTextNode(pdfValue335.value);
          (pdfValue337.append(pdfValue1875),
            pdfValue338 &&
              pdfValue19.shouldBuildText(pdfValue335.name) &&
              __pdfS.push(pdfValue1875));
        }
        return {
          textDivs: __pdfS,
        };
      }
      let pdfValue340 = [[pdfValue335, -1, pdfValue337]];
      for (; pdfValue340.length > 0; ) {
        let [pdfValue724, pdfValue725, pdfValue726] = pdfValue340.at(-1);
        if (pdfValue725 + 1 === pdfValue724.children.length) {
          pdfValue340.pop();
          continue;
        }
        let pdfValue727 = pdfValue724.children[++pdfValue340.at(-1)[1]];
        if (pdfValue727 === null) continue;
        let { name: __pdfI } = pdfValue727;
        if (__pdfI === `#text`) {
          let pdfValue2008 = document.createTextNode(pdfValue727.value);
          (__pdfS.push(pdfValue2008), pdfValue726.append(pdfValue2008));
          continue;
        }
        let __pdfR = pdfValue727?.attributes?.xmlns
          ? document.createElementNS(pdfValue727.attributes.xmlns, __pdfI)
          : document.createElement(__pdfI);
        if (
          (pdfValue726.append(__pdfR),
          pdfValue727.attributes &&
            this.setAttributes({
              html: __pdfR,
              element: pdfValue727,
              storage: pdfValue334,
              intent: pdfValue336,
              linkService: __pdfY,
            }),
          pdfValue727.children?.length > 0)
        )
          pdfValue340.push([pdfValue727, -1, __pdfR]);
        else if (pdfValue727.value) {
          let pdfValue1907 = document.createTextNode(pdfValue727.value);
          (pdfValue338 &&
            pdfValue19.shouldBuildText(__pdfI) &&
            __pdfS.push(pdfValue1907),
            __pdfR.append(pdfValue1907));
        }
      }
      for (let pdfValue1740 of pdfValue339.querySelectorAll(
        `.xfaNonInteractive input, .xfaNonInteractive textarea`,
      ))
        pdfValue1740.setAttribute(`readOnly`, !0);
      return {
        textDivs: __pdfS,
      };
    }
    static update(pdfParam1025) {
      let pdfValue1802 = `matrix(${pdfParam1025.viewport.transform.join(`,`)})`;
      ((pdfParam1025.div.style.transform = pdfValue1802),
        (pdfParam1025.div.hidden = !1));
    }
  },
  be = `http://www.w3.org/2000/svg`,
  _pdfC = class {
    static CSS = 96;
    static PDF = 72;
    static PDF_TO_CSS_UNITS = this.CSS / this.PDF;
  };
async function _pdfI(pdfParam224, pdfParam225 = `text`) {
  if (pdfHelper16(pdfParam224, document.baseURI)) {
    let __pdfY = await fetch(pdfParam224);
    if (!__pdfY.ok) throw Error(__pdfY.statusText);
    switch (pdfParam225) {
      case `arraybuffer`:
        return __pdfY.arrayBuffer();
      case `blob`:
        return __pdfY.blob();
      case `json`:
        return __pdfY.json();
    }
    return __pdfY.text();
  }
  return new Promise((__pdfY, pdfParam426) => {
    let pdfValue1149 = new XMLHttpRequest();
    (pdfValue1149.open(`GET`, pdfParam224, !0),
      (pdfValue1149.responseType = pdfParam225),
      (pdfValue1149.onreadystatechange = () => {
        if (pdfValue1149.readyState === XMLHttpRequest.DONE) {
          if (pdfValue1149.status === 200 || pdfValue1149.status === 0) {
            switch (pdfParam225) {
              case `arraybuffer`:
              case `blob`:
              case `json`:
                __pdfY(pdfValue1149.response);
                return;
            }
            __pdfY(pdfValue1149.responseText);
            return;
          }
          pdfParam426(Error(pdfValue1149.statusText));
        }
      }),
      pdfValue1149.send(null));
  });
}
var pdfValue20 = class PdfClass25 {
    constructor({
      viewBox: viewBox,
      userUnit: userUnit,
      scale: __pdfY,
      rotation: rotation,
      offsetX = 0,
      offsetY = 0,
      dontFlip = !1,
    }) {
      ((this.viewBox = viewBox),
        (this.userUnit = userUnit),
        (this.scale = __pdfY),
        (this.rotation = rotation),
        (this.offsetX = offsetX),
        (this.offsetY = offsetY),
        (__pdfY *= userUnit));
      let pdfValue540 = (viewBox[2] + viewBox[0]) / 2,
        __pdfS = (viewBox[3] + viewBox[1]) / 2,
        pdfValue541,
        __pdfI,
        __pdfR,
        ___pdfS;
      switch (
        ((rotation %= 360), rotation < 0 && (rotation += 360), rotation)
      ) {
        case 180:
          ((pdfValue541 = -1), (__pdfI = 0), (__pdfR = 0), (___pdfS = 1));
          break;
        case 90:
          ((pdfValue541 = 0), (__pdfI = 1), (__pdfR = 1), (___pdfS = 0));
          break;
        case 270:
          ((pdfValue541 = 0), (__pdfI = -1), (__pdfR = -1), (___pdfS = 0));
          break;
        case 0:
          ((pdfValue541 = 1), (__pdfI = 0), (__pdfR = 0), (___pdfS = -1));
          break;
        default:
          throw Error(
            `PageViewport: Invalid rotation, must be a multiple of 90 degrees.`,
          );
      }
      dontFlip && ((__pdfR = -__pdfR), (___pdfS = -___pdfS));
      let pdfValue542, _pdfNt, __pdfC, pdfValue543;
      (pdfValue541 === 0
        ? ((pdfValue542 = Math.abs(__pdfS - viewBox[1]) * __pdfY + offsetX),
          (_pdfNt = Math.abs(pdfValue540 - viewBox[0]) * __pdfY + offsetY),
          (__pdfC = (viewBox[3] - viewBox[1]) * __pdfY),
          (pdfValue543 = (viewBox[2] - viewBox[0]) * __pdfY))
        : ((pdfValue542 =
            Math.abs(pdfValue540 - viewBox[0]) * __pdfY + offsetX),
          (_pdfNt = Math.abs(__pdfS - viewBox[1]) * __pdfY + offsetY),
          (__pdfC = (viewBox[2] - viewBox[0]) * __pdfY),
          (pdfValue543 = (viewBox[3] - viewBox[1]) * __pdfY)),
        (this.transform = [
          pdfValue541 * __pdfY,
          __pdfI * __pdfY,
          __pdfR * __pdfY,
          ___pdfS * __pdfY,
          pdfValue542 -
            pdfValue541 * __pdfY * pdfValue540 -
            __pdfR * __pdfY * __pdfS,
          _pdfNt - __pdfI * __pdfY * pdfValue540 - ___pdfS * __pdfY * __pdfS,
        ]),
        (this.width = __pdfC),
        (this.height = pdfValue543));
    }
    get rawDims() {
      let pdfValue1727 = this.viewBox;
      return pdfQ(this, `rawDims`, {
        pageWidth: pdfValue1727[2] - pdfValue1727[0],
        pageHeight: pdfValue1727[3] - pdfValue1727[1],
        pageX: pdfValue1727[0],
        pageY: pdfValue1727[1],
      });
    }
    clone({
      scale = this.scale,
      rotation: __pdfY = this.rotation,
      offsetX = this.offsetX,
      offsetY = this.offsetY,
      dontFlip = !1,
    } = {}) {
      return new PdfClass25({
        viewBox: this.viewBox.slice(),
        userUnit: this.userUnit,
        scale: scale,
        rotation: __pdfY,
        offsetX: offsetX,
        offsetY: offsetY,
        dontFlip: dontFlip,
      });
    }
    convertToViewportPoint(pdfParam1210, pdfParam1211) {
      let __pdfY = [pdfParam1210, pdfParam1211];
      return (pdfA.applyTransform(__pdfY, this.transform), __pdfY);
    }
    convertToViewportRectangle(pdfParam701) {
      let pdfValue1571 = [pdfParam701[0], pdfParam701[1]];
      pdfA.applyTransform(pdfValue1571, this.transform);
      let __pdfY = [pdfParam701[2], pdfParam701[3]];
      return (
        pdfA.applyTransform(__pdfY, this.transform),
        [pdfValue1571[0], pdfValue1571[1], __pdfY[0], __pdfY[1]]
      );
    }
    convertToPdfPoint(pdfParam1193, pdfParam1194) {
      let __pdfY = [pdfParam1193, pdfParam1194];
      return (pdfA.applyInverseTransform(__pdfY, this.transform), __pdfY);
    }
  },
  pdfW = class extends pdfValue11 {
    constructor(pdfParam1268, pdfParam1269 = 0) {
      (super(pdfParam1268, `RenderingCancelledException`),
        (this.extraDelay = pdfParam1269));
    }
  };
function _pdfW(pdfParam958) {
  let pdfValue1755 = pdfParam958.length,
    __pdfY = 0;
  for (; __pdfY < pdfValue1755 && pdfParam958[__pdfY].trim() === ``; ) __pdfY++;
  return pdfParam958.substring(__pdfY, __pdfY + 5).toLowerCase() === `data:`;
}
function _pdfG(pdfParam1401) {
  return typeof pdfParam1401 == `string` && /\.pdf$/i.test(pdfParam1401);
}
function pdfZ(pdfParam1262) {
  return (
    ([pdfParam1262] = pdfParam1262.split(/[#?]/, 1)),
    pdfParam1262.substring(pdfParam1262.lastIndexOf(`/`) + 1)
  );
}
function pdfB(pdfParam102, pdfParam103 = `document.pdf`) {
  if (typeof pdfParam102 != `string`) return pdfParam103;
  if (_pdfW(pdfParam102))
    return (
      pdfHelper4(
        `getPdfFilenameFromUrl: ignore "data:"-URL for performance reasons.`,
      ),
      pdfParam103
    );
  let __pdfY = ((pdfParam582) => {
    try {
      return new URL(pdfParam582);
    } catch {
      try {
        return new URL(decodeURIComponent(pdfParam582));
      } catch {
        try {
          return new URL(pdfParam582, `https://foo.bar`);
        } catch {
          try {
            return new URL(decodeURIComponent(pdfParam582), `https://foo.bar`);
          } catch {
            return null;
          }
        }
      }
    }
  })(pdfParam102);
  if (!__pdfY) return pdfParam103;
  let pdfValue486 = (pdfParam923) => {
      try {
        let pdfValue1836 = decodeURIComponent(pdfParam923);
        return pdfValue1836.includes(`/`)
          ? ((pdfValue1836 = pdfValue1836.split(`/`).at(-1)),
            pdfValue1836.test(/^\.pdf$/i) ? pdfValue1836 : pdfParam923)
          : pdfValue1836;
      } catch {
        return pdfParam923;
      }
    },
    pdfValue487 = /\.pdf$/i,
    pdfValue488 = __pdfY.pathname.split(`/`).at(-1);
  if (pdfValue487.test(pdfValue488)) return pdfValue486(pdfValue488);
  if (__pdfY.searchParams.size > 0) {
    let pdfValue1510 = Array.from(__pdfY.searchParams.values()).reverse();
    for (let pdfValue2209 of pdfValue1510)
      if (pdfValue487.test(pdfValue2209)) return pdfValue486(pdfValue2209);
    let pdfValue1511 = Array.from(__pdfY.searchParams.keys()).reverse();
    for (let pdfValue2211 of pdfValue1511)
      if (pdfValue487.test(pdfValue2211)) return pdfValue486(pdfValue2211);
  }
  if (__pdfY.hash) {
    let pdfValue2002 = /[^/?#=]+\.pdf\b(?!.*\.pdf\b)/i.exec(__pdfY.hash);
    if (pdfValue2002) return pdfValue486(pdfValue2002[0]);
  }
  return pdfParam103;
}
var pdfValue21 = class {
  started = Object.create(null);
  times = [];
  time(pdfParam1126) {
    (pdfParam1126 in this.started &&
      pdfHelper4(`Timer is already running for ${pdfParam1126}`),
      (this.started[pdfParam1126] = Date.now()));
  }
  timeEnd(pdfParam752) {
    (pdfParam752 in this.started ||
      pdfHelper4(`Timer has not been started for ${pdfParam752}`),
      this.times.push({
        name: pdfParam752,
        start: this.started[pdfParam752],
        end: Date.now(),
      }),
      delete this.started[pdfParam752]);
  }
  toString() {
    let pdfValue1534 = [],
      pdfValue1535 = 0;
    for (let { name: name } of this.times)
      pdfValue1535 = Math.max(name.length, pdfValue1535);
    for (let { name: __pdfY, start: start, end: end } of this.times)
      pdfValue1534.push(`${__pdfY.padEnd(pdfValue1535)} ${end - start}ms\n`);
    return pdfValue1534.join(``);
  }
};
function pdfHelper16(pdfParam1027, pdfParam1028) {
  let __pdfY = pdfParam1028
    ? URL.parse(pdfParam1027, pdfParam1028)
    : URL.parse(pdfParam1027);
  return __pdfY?.protocol === `http:` || __pdfY?.protocol === `https:`;
}
function _pdfQ(event) {
  event.preventDefault();
}
function pdfDollar(event) {
  (event.preventDefault(), event.stopPropagation());
}
function pdfHelper17(pdfParam1463) {
  console.log(`Deprecated API usage: ` + pdfParam1463);
}
var _pdfY = class {
  static #e;
  static toDateObject(pdfParam179) {
    if (pdfParam179 instanceof Date) return pdfParam179;
    if (!pdfParam179 || typeof pdfParam179 != `string`) return null;
    this.#e ||= RegExp(
      `^D:(\\d{4})(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?(\\d{2})?([Z|+|-])?(\\d{2})?'?(\\d{2})?'?`,
    );
    let pdfValue624 = this.#e.exec(pdfParam179);
    if (!pdfValue624) return null;
    let __pdfY = parseInt(pdfValue624[1], 10),
      pdfValue625 = parseInt(pdfValue624[2], 10);
    pdfValue625 = pdfValue625 >= 1 && pdfValue625 <= 12 ? pdfValue625 - 1 : 0;
    let pdfValue626 = parseInt(pdfValue624[3], 10);
    pdfValue626 = pdfValue626 >= 1 && pdfValue626 <= 31 ? pdfValue626 : 1;
    let pdfValue627 = parseInt(pdfValue624[4], 10);
    pdfValue627 = pdfValue627 >= 0 && pdfValue627 <= 23 ? pdfValue627 : 0;
    let pdfValue628 = parseInt(pdfValue624[5], 10);
    pdfValue628 = pdfValue628 >= 0 && pdfValue628 <= 59 ? pdfValue628 : 0;
    let pdfValue629 = parseInt(pdfValue624[6], 10);
    pdfValue629 = pdfValue629 >= 0 && pdfValue629 <= 59 ? pdfValue629 : 0;
    let __pdfS = pdfValue624[7] || `Z`,
      pdfValue630 = parseInt(pdfValue624[8], 10);
    pdfValue630 = pdfValue630 >= 0 && pdfValue630 <= 23 ? pdfValue630 : 0;
    let __pdfI = parseInt(pdfValue624[9], 10) || 0;
    return (
      (__pdfI = __pdfI >= 0 && __pdfI <= 59 ? __pdfI : 0),
      __pdfS === `-`
        ? ((pdfValue627 += pdfValue630), (pdfValue628 += __pdfI))
        : __pdfS === `+` &&
          ((pdfValue627 -= pdfValue630), (pdfValue628 -= __pdfI)),
      new Date(
        Date.UTC(
          __pdfY,
          pdfValue625,
          pdfValue626,
          pdfValue627,
          pdfValue628,
          pdfValue629,
        ),
      )
    );
  }
};
function pdfU(pdfParam697, { scale = 1, rotation: __pdfY = 0 }) {
  let { width: width, height: height } = pdfParam697.attributes.style;
  return new pdfValue20({
    viewBox: [0, 0, parseInt(width), parseInt(height)],
    userUnit: 1,
    scale: scale,
    rotation: __pdfY,
  });
}
function pdfV(pdfParam400) {
  if (pdfParam400.startsWith(`#`)) {
    let pdfValue1987 = parseInt(pdfParam400.slice(1), 16);
    return [
      (pdfValue1987 & 16711680) >> 16,
      (pdfValue1987 & 65280) >> 8,
      pdfValue1987 & 255,
    ];
  }
  return pdfParam400.startsWith(`rgb(`)
    ? pdfParam400
        .slice(4, -1)
        .split(`,`)
        .map((item) => parseInt(item))
    : pdfParam400.startsWith(`rgba(`)
      ? pdfParam400
          .slice(5, -1)
          .split(`,`)
          .map((item) => parseInt(item))
          .slice(0, 3)
      : (pdfHelper4(`Not a valid color format: "${pdfParam400}"`), [0, 0, 0]);
}
function pdfHelper18(pdfParam528) {
  let pdfValue1337 = document.createElement(`span`);
  ((pdfValue1337.style.visibility = `hidden`),
    (pdfValue1337.style.colorScheme = `only light`),
    document.body.append(pdfValue1337));
  for (let __pdfY of pdfParam528.keys()) {
    pdfValue1337.style.color = __pdfY;
    let pdfValue2009 = window.getComputedStyle(pdfValue1337).color;
    pdfParam528.set(__pdfY, pdfV(pdfValue2009));
  }
  pdfValue1337.remove();
}
function pdfHelper19(pdfParam1236) {
  let {
    a: _a,
    b: __pdfY,
    c: c,
    d: d,
    e: e,
    f: f,
  } = pdfParam1236.getTransform();
  return [_a, __pdfY, c, d, e, f];
}
function pdfHelper20(pdfParam1127) {
  let {
    a: _a,
    b: __pdfY,
    c: c,
    d: d,
    e: e,
    f: f,
  } = pdfParam1127.getTransform().invertSelf();
  return [_a, __pdfY, c, d, e, f];
}
function _pdfZ(pdfParam295, pdfParam296, __pdfY = !1, pdfParam297 = !0) {
  if (pdfParam296 instanceof pdfValue20) {
    let { pageWidth: pageWidth, pageHeight: pageHeight } = pdfParam296.rawDims,
      { style: style } = pdfParam295,
      pdfValue1052 = pdfTt.isCSSRoundSupported,
      pdfValue1053 = `var(--total-scale-factor) * ${pageWidth}px`,
      __pdfS = `var(--total-scale-factor) * ${pageHeight}px`,
      pdfValue1054 = pdfValue1052
        ? `round(down, ${pdfValue1053}, var(--scale-round-x))`
        : `calc(${pdfValue1053})`,
      __pdfI = pdfValue1052
        ? `round(down, ${__pdfS}, var(--scale-round-y))`
        : `calc(${__pdfS})`;
    !__pdfY || pdfParam296.rotation % 180 == 0
      ? ((style.width = pdfValue1054), (style.height = __pdfI))
      : ((style.width = __pdfI), (style.height = pdfValue1054));
  }
  pdfParam297 &&
    pdfParam295.setAttribute(`data-main-rotation`, pdfParam296.rotation);
}
var pdfUnderscore = class PdfClass29 {
    constructor() {
      let { pixelRatio: pixelRatio } = PdfClass29;
      ((this.sx = pixelRatio), (this.sy = pixelRatio));
    }
    get scaled() {
      return this.sx !== 1 || this.sy !== 1;
    }
    get symmetric() {
      return this.sx === this.sy;
    }
    limitCanvas(
      pdfParam606,
      __pdfY,
      pdfParam607,
      pdfParam608,
      pdfParam609 = -1,
    ) {
      let pdfValue1464 = 1 / 0,
        pdfValue1465 = 1 / 0,
        __pdfS = 1 / 0;
      ((pdfParam607 = PdfClass29.capPixels(pdfParam607, pdfParam609)),
        pdfParam607 > 0 &&
          (pdfValue1464 = Math.sqrt(pdfParam607 / (pdfParam606 * __pdfY))),
        pdfParam608 !== -1 &&
          ((pdfValue1465 = pdfParam608 / pdfParam606),
          (__pdfS = pdfParam608 / __pdfY)));
      let pdfValue1466 = Math.min(pdfValue1464, pdfValue1465, __pdfS);
      return this.sx > pdfValue1466 || this.sy > pdfValue1466
        ? ((this.sx = pdfValue1466), (this.sy = pdfValue1466), !0)
        : !1;
    }
    static get pixelRatio() {
      return globalThis.devicePixelRatio || 1;
    }
    static capPixels(pdfParam712, pdfParam713) {
      if (pdfParam713 >= 0) {
        let __pdfY = Math.ceil(
          window.screen.availWidth *
            window.screen.availHeight *
            this.pixelRatio ** 2 *
            (1 + pdfParam713 / 100),
        );
        return pdfParam712 > 0 ? Math.min(pdfParam712, __pdfY) : __pdfY;
      }
      return pdfParam712;
    }
  },
  pdfD = [
    `image/apng`,
    `image/avif`,
    `image/bmp`,
    `image/gif`,
    `image/jpeg`,
    `image/png`,
    `image/svg+xml`,
    `image/webp`,
    `image/x-icon`,
  ],
  pdfValue22 = class {
    static get isDarkMode() {
      return pdfQ(
        this,
        `isDarkMode`,
        !!window?.matchMedia?.(`(prefers-color-scheme: dark)`).matches,
      );
    }
  },
  pdfL = class {
    static get commentForegroundColor() {
      let pdfValue1085 = document.createElement(`span`);
      pdfValue1085.classList.add(`comment`, `sidebar`);
      let { style: style } = pdfValue1085;
      ((style.width = style.height = `0`),
        (style.display = `none`),
        (style.color = `var(--comment-fg-color)`),
        document.body.append(pdfValue1085));
      let { color: __pdfY } = window.getComputedStyle(pdfValue1085);
      return (
        pdfValue1085.remove(),
        pdfQ(this, `commentForegroundColor`, pdfV(__pdfY))
      );
    }
  };
function pdfN(pdfParam817, pdfParam818, __pdfY, pdfParam819) {
  pdfParam819 = Math.min(Math.max(pdfParam819 ?? 1, 0), 1);
  let pdfValue1637 = 255 * (1 - pdfParam819);
  return (
    (pdfParam817 = Math.round(pdfParam817 * pdfParam819 + pdfValue1637)),
    (pdfParam818 = Math.round(pdfParam818 * pdfParam819 + pdfValue1637)),
    (__pdfY = Math.round(__pdfY * pdfParam819 + pdfValue1637)),
    [pdfParam817, pdfParam818, __pdfY]
  );
}
function pdfHelper21(pdfParam443, pdfParam444) {
  let __pdfY = pdfParam443[0] / 255,
    pdfValue1172 = pdfParam443[1] / 255,
    pdfValue1173 = pdfParam443[2] / 255,
    pdfValue1174 = Math.max(__pdfY, pdfValue1172, pdfValue1173),
    pdfValue1175 = Math.min(__pdfY, pdfValue1172, pdfValue1173),
    pdfValue1176 = (pdfValue1174 + pdfValue1175) / 2;
  if (pdfValue1174 === pdfValue1175) pdfParam444[0] = pdfParam444[1] = 0;
  else {
    let pdfValue1594 = pdfValue1174 - pdfValue1175;
    switch (
      ((pdfParam444[1] =
        pdfValue1176 < 0.5
          ? pdfValue1594 / (pdfValue1174 + pdfValue1175)
          : pdfValue1594 / (2 - pdfValue1174 - pdfValue1175)),
      pdfValue1174)
    ) {
      case __pdfY:
        pdfParam444[0] =
          ((pdfValue1172 - pdfValue1173) / pdfValue1594 +
            (pdfValue1172 < pdfValue1173 ? 6 : 0)) *
          60;
        break;
      case pdfValue1172:
        pdfParam444[0] = ((pdfValue1173 - __pdfY) / pdfValue1594 + 2) * 60;
        break;
      case pdfValue1173:
        pdfParam444[0] = ((__pdfY - pdfValue1172) / pdfValue1594 + 4) * 60;
        break;
    }
  }
  pdfParam444[2] = pdfValue1176;
}
function pdfHelper22(pdfParam345, pdfParam346) {
  let __pdfY = pdfParam345[0],
    pdfValue1002 = pdfParam345[1],
    pdfValue1003 = pdfParam345[2],
    pdfValue1004 = (1 - Math.abs(2 * pdfValue1003 - 1)) * pdfValue1002,
    pdfValue1005 = pdfValue1004 * (1 - Math.abs(((__pdfY / 60) % 2) - 1)),
    pdfValue1006 = pdfValue1003 - pdfValue1004 / 2;
  switch (Math.floor(__pdfY / 60)) {
    case 0:
      ((pdfParam346[0] = pdfValue1004 + pdfValue1006),
        (pdfParam346[1] = pdfValue1005 + pdfValue1006),
        (pdfParam346[2] = pdfValue1006));
      break;
    case 1:
      ((pdfParam346[0] = pdfValue1005 + pdfValue1006),
        (pdfParam346[1] = pdfValue1004 + pdfValue1006),
        (pdfParam346[2] = pdfValue1006));
      break;
    case 2:
      ((pdfParam346[0] = pdfValue1006),
        (pdfParam346[1] = pdfValue1004 + pdfValue1006),
        (pdfParam346[2] = pdfValue1005 + pdfValue1006));
      break;
    case 3:
      ((pdfParam346[0] = pdfValue1006),
        (pdfParam346[1] = pdfValue1005 + pdfValue1006),
        (pdfParam346[2] = pdfValue1004 + pdfValue1006));
      break;
    case 4:
      ((pdfParam346[0] = pdfValue1005 + pdfValue1006),
        (pdfParam346[1] = pdfValue1006),
        (pdfParam346[2] = pdfValue1004 + pdfValue1006));
      break;
    case 5:
    case 6:
      ((pdfParam346[0] = pdfValue1004 + pdfValue1006),
        (pdfParam346[1] = pdfValue1006),
        (pdfParam346[2] = pdfValue1005 + pdfValue1006));
      break;
  }
}
function pdfHelper23(pdfParam1380) {
  return pdfParam1380 <= 0.03928
    ? pdfParam1380 / 12.92
    : ((pdfParam1380 + 0.055) / 1.055) ** 2.4;
}
function pdfHelper24(pdfParam657, pdfParam658, __pdfY) {
  (pdfHelper22(pdfParam657, __pdfY), __pdfY.map(pdfHelper23));
  let pdfValue1521 =
    0.2126 * __pdfY[0] + 0.7152 * __pdfY[1] + 0.0722 * __pdfY[2];
  (pdfHelper22(pdfParam658, __pdfY), __pdfY.map(pdfHelper23));
  let pdfValue1522 =
    0.2126 * __pdfY[0] + 0.7152 * __pdfY[1] + 0.0722 * __pdfY[2];
  return pdfValue1521 > pdfValue1522
    ? (pdfValue1521 + 0.05) / (pdfValue1522 + 0.05)
    : (pdfValue1522 + 0.05) / (pdfValue1521 + 0.05);
}
var pdfValue23 = new Map();
function _pdfL(pdfParam246, pdfParam247) {
  let __pdfY =
      pdfParam246[0] +
      pdfParam246[1] * 256 +
      pdfParam246[2] * 65536 +
      pdfParam247[0] * 16777216 +
      pdfParam247[1] * 4294967296 +
      pdfParam247[2] * 1099511627776,
    pdfValue769 = pdfValue23.get(__pdfY);
  if (pdfValue769) return pdfValue769;
  let pdfValue770 = new Float32Array(9),
    pdfValue771 = pdfValue770.subarray(0, 3),
    pdfValue772 = pdfValue770.subarray(3, 6);
  pdfHelper21(pdfParam246, pdfValue772);
  let pdfValue773 = pdfValue770.subarray(6, 9);
  pdfHelper21(pdfParam247, pdfValue773);
  let __pdfS = pdfValue773[2] < 0.5,
    pdfValue774 = __pdfS ? 12 : 4.5;
  if (
    ((pdfValue772[2] = __pdfS
      ? Math.sqrt(pdfValue772[2])
      : 1 - Math.sqrt(1 - pdfValue772[2])),
    pdfHelper24(pdfValue772, pdfValue773, pdfValue771) < pdfValue774)
  ) {
    let pdfValue1807, pdfValue1808;
    for (
      __pdfS
        ? ((pdfValue1807 = pdfValue772[2]), (pdfValue1808 = 1))
        : ((pdfValue1807 = 0), (pdfValue1808 = pdfValue772[2]));
      pdfValue1808 - pdfValue1807 > 0.005;

    ) {
      let ___pdfY = (pdfValue772[2] = (pdfValue1807 + pdfValue1808) / 2);
      __pdfS ===
      pdfHelper24(pdfValue772, pdfValue773, pdfValue771) < pdfValue774
        ? (pdfValue1807 = ___pdfY)
        : (pdfValue1808 = ___pdfY);
    }
    pdfValue772[2] = __pdfS ? pdfValue1808 : pdfValue1807;
  }
  return (
    pdfHelper22(pdfValue772, pdfValue771),
    (pdfValue769 = pdfA.makeHexColor(
      Math.round(pdfValue771[0] * 255),
      Math.round(pdfValue771[1] * 255),
      Math.round(pdfValue771[2] * 255),
    )),
    pdfValue23.set(__pdfY, pdfValue769),
    pdfValue769
  );
}
function _pdfX({ html: html, dir: dir, className: __pdfY }, pdfParam302) {
  let pdfValue898 = document.createDocumentFragment();
  if (typeof html == `string`) {
    let ___pdfY = document.createElement(`p`);
    ___pdfY.dir = dir || `auto`;
    let pdfValue1406 = html.split(/(?:\r\n?|\n)/);
    for (
      let pdfValue1704 = 0, pdfValue1705 = pdfValue1406.length;
      pdfValue1704 < pdfValue1705;
      ++pdfValue1704
    ) {
      let pdfValue1871 = pdfValue1406[pdfValue1704];
      (___pdfY.append(document.createTextNode(pdfValue1871)),
        pdfValue1704 < pdfValue1705 - 1 &&
          ___pdfY.append(document.createElement(`br`)));
    }
    pdfValue898.append(___pdfY);
  } else
    _pdfM.render({
      xfaHtml: html,
      div: pdfValue898,
      intent: `richText`,
    });
  (pdfValue898.firstChild.classList.add(`richText`, __pdfY),
    pdfParam302.append(pdfValue898));
}
var pdfValue24 = class PdfClass19 {
    #e = null;
    #t = null;
    #n;
    #r = null;
    #i = null;
    #a = null;
    #o = null;
    #s = null;
    static #c = null;
    constructor(pdfParam467) {
      ((this.#n = pdfParam467),
        (PdfClass19.#c ||= Object.freeze({
          freetext: `pdfjs-editor-remove-freetext-button`,
          highlight: `pdfjs-editor-remove-highlight-button`,
          ink: `pdfjs-editor-remove-ink-button`,
          stamp: `pdfjs-editor-remove-stamp-button`,
          signature: `pdfjs-editor-remove-signature-button`,
        })));
    }
    render() {
      let pdfValue714 = (this.#e = document.createElement(`div`));
      (pdfValue714.classList.add(`editToolbar`, `hidden`),
        pdfValue714.setAttribute(`role`, `toolbar`));
      let __pdfY = this.#n._uiManager._signal;
      __pdfY instanceof AbortSignal &&
        !__pdfY.aborted &&
        (pdfValue714.addEventListener(`contextmenu`, _pdfQ, {
          signal: __pdfY,
        }),
        pdfValue714.addEventListener(`pointerdown`, PdfClass19.#l, {
          signal: __pdfY,
        }));
      let pdfValue715 = (this.#r = document.createElement(`div`));
      ((pdfValue715.className = `buttons`), pdfValue714.append(pdfValue715));
      let pdfValue716 = this.#n.toolbarPosition;
      if (pdfValue716) {
        let { style: style } = pdfValue714;
        ((style.insetInlineEnd = `${100 * (this.#n._uiManager.direction === `ltr` ? 1 - pdfValue716[0] : pdfValue716[0])}%`),
          (style.top = `calc(${100 * pdfValue716[1]}% + var(--editor-toolbar-vert-offset))`));
      }
      return pdfValue714;
    }
    get div() {
      return this.#e;
    }
    static #l(event) {
      event.stopPropagation();
    }
    #u(pdfParam1589) {
      ((this.#n._focusEventsAllowed = !1), pdfDollar(pdfParam1589));
    }
    #d(pdfParam1590) {
      ((this.#n._focusEventsAllowed = !0), pdfDollar(pdfParam1590));
    }
    #f(pdfParam452) {
      let pdfValue1188 = this.#n._uiManager._signal;
      return !(pdfValue1188 instanceof AbortSignal) || pdfValue1188.aborted
        ? !1
        : (pdfParam452.addEventListener(`focusin`, this.#u.bind(this), {
            capture: !0,
            signal: pdfValue1188,
          }),
          pdfParam452.addEventListener(`focusout`, this.#d.bind(this), {
            capture: !0,
            signal: pdfValue1188,
          }),
          pdfParam452.addEventListener(`contextmenu`, _pdfQ, {
            signal: pdfValue1188,
          }),
          !0);
    }
    hide() {
      (this.#e.classList.add(`hidden`), this.#t?.hideDropdown());
    }
    show() {
      (this.#e.classList.remove(`hidden`), this.#i?.shown(), this.#a?.shown());
    }
    addDeleteButton() {
      let { editorType: editorType, _uiManager: __pdfY } = this.#n,
        pdfValue1201 = document.createElement(`button`);
      (pdfValue1201.classList.add(`basic`, `deleteButton`),
        (pdfValue1201.tabIndex = 0),
        pdfValue1201.setAttribute(`data-l10n-id`, PdfClass19.#c[editorType]),
        this.#f(pdfValue1201) &&
          pdfValue1201.addEventListener(
            `click`,
            (pdfParam1732) => {
              __pdfY.delete();
            },
            {
              signal: __pdfY._signal,
            },
          ),
        this.#r.append(pdfValue1201));
    }
    get #p() {
      let pdfValue1988 = document.createElement(`div`);
      return ((pdfValue1988.className = `divider`), pdfValue1988);
    }
    async addAltText(pdfParam1162) {
      let pdfValue1898 = await pdfParam1162.render();
      (this.#f(pdfValue1898),
        this.#r.append(pdfValue1898, this.#p),
        (this.#i = pdfParam1162));
    }
    addComment(pdfParam573, pdfParam574 = null) {
      if (this.#a) return;
      let __pdfY = pdfParam573.renderForToolbar();
      if (!__pdfY) return;
      this.#f(__pdfY);
      let pdfValue1414 = (this.#o = this.#p);
      (pdfParam574
        ? (this.#r.insertBefore(__pdfY, pdfParam574),
          this.#r.insertBefore(pdfValue1414, pdfParam574))
        : this.#r.append(__pdfY, pdfValue1414),
        (this.#a = pdfParam573),
        (pdfParam573.toolbar = this));
    }
    addColorPicker(pdfParam1029) {
      if (this.#t) return;
      this.#t = pdfParam1029;
      let pdfValue1809 = pdfParam1029.renderButton();
      (this.#f(pdfValue1809), this.#r.append(pdfValue1809, this.#p));
    }
    async addEditSignatureButton(pdfParam951) {
      let pdfValue1746 = (this.#s = await pdfParam951.renderEditButton(
        this.#n,
      ));
      (this.#f(pdfValue1746), this.#r.append(pdfValue1746, this.#p));
    }
    removeButton(pdfParam908) {
      switch (pdfParam908) {
        case `comment`:
          (this.#a?.removeToolbarCommentButton(),
            (this.#a = null),
            this.#o?.remove(),
            (this.#o = null));
          break;
      }
    }
    async addButton(pdfParam482, pdfParam483) {
      switch (pdfParam482) {
        case `colorPicker`:
          this.addColorPicker(pdfParam483);
          break;
        case `altText`:
          await this.addAltText(pdfParam483);
          break;
        case `editSignature`:
          await this.addEditSignatureButton(pdfParam483);
          break;
        case `delete`:
          this.addDeleteButton();
          break;
        case `comment`:
          this.addComment(pdfParam483);
          break;
      }
    }
    async addButtonBefore(pdfParam1087, pdfParam1088, __pdfY) {
      let pdfValue1848 = this.#r.querySelector(__pdfY);
      pdfValue1848 &&
        pdfParam1087 === `comment` &&
        this.addComment(pdfParam1088, pdfValue1848);
    }
    updateEditSignatureButton(pdfParam1458) {
      this.#s && (this.#s.title = pdfParam1458);
    }
    remove() {
      (this.#e.remove(), this.#t?.destroy(), (this.#t = null));
    }
  },
  pdfValue25 = class {
    #e = null;
    #t = null;
    #n;
    constructor(pdfParam1701) {
      this.#n = pdfParam1701;
    }
    #r() {
      let pdfValue661 = (this.#t = document.createElement(`div`));
      ((pdfValue661.className = `editToolbar`),
        pdfValue661.setAttribute(`role`, `toolbar`));
      let pdfValue662 = this.#n._signal;
      pdfValue662 instanceof AbortSignal &&
        !pdfValue662.aborted &&
        pdfValue661.addEventListener(`contextmenu`, _pdfQ, {
          signal: pdfValue662,
        });
      let __pdfY = (this.#e = document.createElement(`div`));
      return (
        (__pdfY.className = `buttons`),
        pdfValue661.append(__pdfY),
        this.#n.hasCommentManager() &&
          this.#a(
            `commentButton`,
            `pdfjs-comment-floating-button`,
            `pdfjs-comment-floating-button-label`,
            () => {
              this.#n.commentSelection(`floating_button`);
            },
          ),
        this.#a(
          `highlightButton`,
          `pdfjs-highlight-floating-button1`,
          `pdfjs-highlight-floating-button-label`,
          () => {
            this.#n.highlightSelection(`floating_button`);
          },
        ),
        pdfValue661
      );
    }
    #i(pdfParam714, pdfParam715) {
      let __pdfY = 0,
        pdfValue1579 = 0;
      for (let pdfValue1723 of pdfParam714) {
        let pdfValue1788 = pdfValue1723.y + pdfValue1723.height;
        if (pdfValue1788 < __pdfY) continue;
        let pdfValue1789 =
          pdfValue1723.x + (pdfParam715 ? pdfValue1723.width : 0);
        if (pdfValue1788 > __pdfY) {
          ((pdfValue1579 = pdfValue1789), (__pdfY = pdfValue1788));
          continue;
        }
        pdfParam715
          ? pdfValue1789 > pdfValue1579 && (pdfValue1579 = pdfValue1789)
          : pdfValue1789 < pdfValue1579 && (pdfValue1579 = pdfValue1789);
      }
      return [pdfParam715 ? 1 - pdfValue1579 : pdfValue1579, __pdfY];
    }
    show(pdfParam673, pdfParam674, __pdfY) {
      let [pdfValue1543, pdfValue1544] = this.#i(pdfParam674, __pdfY),
        { style: style } = (this.#t ||= this.#r());
      (pdfParam673.append(this.#t),
        (style.insetInlineEnd = `${100 * pdfValue1543}%`),
        (style.top = `calc(${100 * pdfValue1544}% + var(--editor-toolbar-vert-offset))`));
    }
    hide() {
      this.#t.remove();
    }
    #a(pdfParam321, pdfParam322, __pdfY, pdfParam323) {
      let pdfValue949 = document.createElement(`button`);
      (pdfValue949.classList.add(`basic`, pdfParam321),
        (pdfValue949.tabIndex = 0),
        pdfValue949.setAttribute(`data-l10n-id`, pdfParam322));
      let pdfValue950 = document.createElement(`span`);
      (pdfValue949.append(pdfValue950),
        (pdfValue950.className = `visuallyHidden`),
        pdfValue950.setAttribute(`data-l10n-id`, __pdfY));
      let pdfValue951 = this.#n._signal;
      (pdfValue951 instanceof AbortSignal &&
        !pdfValue951.aborted &&
        (pdfValue949.addEventListener(`contextmenu`, _pdfQ, {
          signal: pdfValue951,
        }),
        pdfValue949.addEventListener(`click`, pdfParam323, {
          signal: pdfValue951,
        })),
        this.#e.append(pdfValue949));
    }
  };
function pdfHelper25(pdfParam1324, pdfParam1325, __pdfY) {
  for (let pdfValue2165 of __pdfY)
    pdfParam1325.addEventListener(
      pdfValue2165,
      pdfParam1324[pdfValue2165].bind(pdfParam1324),
    );
}
var pdfValue26 = class {
    #e = 0;
    get id() {
      return `${pdfValue6}${this.#e++}`;
    }
  },
  $e = class PdfClass22 {
    #e = pdfH();
    #t = 0;
    #n = null;
    static get _isSVGFittingCanvas() {
      let pdfValue861 = new OffscreenCanvas(1, 3).getContext(`2d`, {
          willReadFrequently: !0,
        }),
        pdfValue862 = new Image();
      pdfValue862.src = `data:image/svg+xml;charset=UTF-8,<svg viewBox="0 0 1 1" width="1" height="1" xmlns="http://www.w3.org/2000/svg"><rect width="1" height="1" style="fill:red;"/></svg>`;
      let __pdfY = pdfValue862
        .decode()
        .then(
          () => (
            pdfValue861.drawImage(pdfValue862, 0, 0, 1, 1, 0, 0, 1, 3),
            new Uint32Array(
              pdfValue861.getImageData(0, 0, 1, 1).data.buffer,
            )[0] === 0
          ),
        );
      return pdfQ(this, `_isSVGFittingCanvas`, __pdfY);
    }
    async #r(pdfParam134, __pdfY) {
      this.#n ||= new Map();
      let pdfValue559 = this.#n.get(pdfParam134);
      if (pdfValue559 === null) return null;
      if (pdfValue559?.bitmap)
        return ((pdfValue559.refCounter += 1), pdfValue559);
      try {
        pdfValue559 ||= {
          bitmap: null,
          id: `image_${this.#e}_${this.#t++}`,
          refCounter: 0,
          isSvg: !1,
        };
        let pdfValue753;
        if (
          (typeof __pdfY == `string`
            ? ((pdfValue559.url = __pdfY),
              (pdfValue753 = await _pdfI(__pdfY, `blob`)))
            : __pdfY instanceof File
              ? (pdfValue753 = pdfValue559.file = __pdfY)
              : __pdfY instanceof Blob && (pdfValue753 = __pdfY),
          pdfValue753.type === `image/svg+xml`)
        ) {
          let ___pdfY = PdfClass22._isSVGFittingCanvas,
            pdfValue1220 = new FileReader(),
            pdfValue1221 = new Image(),
            pdfValue1222 = new Promise((pdfParam664, pdfParam665) => {
              ((pdfValue1221.onload = () => {
                ((pdfValue559.bitmap = pdfValue1221),
                  (pdfValue559.isSvg = !0),
                  pdfParam664());
              }),
                (pdfValue1220.onload = async () => {
                  let pdfValue1888 = (pdfValue559.svgUrl = pdfValue1220.result);
                  pdfValue1221.src = (await ___pdfY)
                    ? `${pdfValue1888}#svgView(preserveAspectRatio(none))`
                    : pdfValue1888;
                }),
                (pdfValue1221.onerror = pdfValue1220.onerror = pdfParam665));
            });
          (pdfValue1220.readAsDataURL(pdfValue753), await pdfValue1222);
        } else pdfValue559.bitmap = await createImageBitmap(pdfValue753);
        pdfValue559.refCounter = 1;
      } catch (pdfValue2251) {
        (pdfHelper4(pdfValue2251), (pdfValue559 = null));
      }
      return (
        this.#n.set(pdfParam134, pdfValue559),
        pdfValue559 && this.#n.set(pdfValue559.id, pdfValue559),
        pdfValue559
      );
    }
    async getFromFile(pdfParam1052) {
      let {
        lastModified: lastModified,
        name: __pdfY,
        size: size,
        type: type,
      } = pdfParam1052;
      return this.#r(`${lastModified}_${__pdfY}_${size}_${type}`, pdfParam1052);
    }
    async getFromUrl(pdfParam1607) {
      return this.#r(pdfParam1607, pdfParam1607);
    }
    async getFromBlob(pdfParam1446, pdfParam1447) {
      let __pdfY = await pdfParam1447;
      return this.#r(pdfParam1446, __pdfY);
    }
    async getFromId(pdfParam460) {
      this.#n ||= new Map();
      let pdfValue1202 = this.#n.get(pdfParam460);
      if (!pdfValue1202) return null;
      if (pdfValue1202.bitmap)
        return ((pdfValue1202.refCounter += 1), pdfValue1202);
      if (pdfValue1202.file) return this.getFromFile(pdfValue1202.file);
      if (pdfValue1202.blobPromise) {
        let { blobPromise: blobPromise } = pdfValue1202;
        return (
          delete pdfValue1202.blobPromise,
          this.getFromBlob(pdfValue1202.id, blobPromise)
        );
      }
      return this.getFromUrl(pdfValue1202.url);
    }
    getFromCanvas(pdfParam384, pdfParam385) {
      this.#n ||= new Map();
      let __pdfY = this.#n.get(pdfParam384);
      if (__pdfY?.bitmap) return ((__pdfY.refCounter += 1), __pdfY);
      let pdfValue1097 = new OffscreenCanvas(
        pdfParam385.width,
        pdfParam385.height,
      );
      return (
        pdfValue1097.getContext(`2d`).drawImage(pdfParam385, 0, 0),
        (__pdfY = {
          bitmap: pdfValue1097.transferToImageBitmap(),
          id: `image_${this.#e}_${this.#t++}`,
          refCounter: 1,
          isSvg: !1,
        }),
        this.#n.set(pdfParam384, __pdfY),
        this.#n.set(__pdfY.id, __pdfY),
        __pdfY
      );
    }
    getSvgUrl(pdfParam1355) {
      let pdfValue2057 = this.#n.get(pdfParam1355);
      return pdfValue2057?.isSvg ? pdfValue2057.svgUrl : null;
    }
    deleteId(pdfParam434) {
      this.#n ||= new Map();
      let pdfValue1167 = this.#n.get(pdfParam434);
      if (
        !pdfValue1167 ||
        (--pdfValue1167.refCounter, pdfValue1167.refCounter !== 0)
      )
        return;
      let { bitmap: __pdfY } = pdfValue1167;
      if (!pdfValue1167.url && !pdfValue1167.file) {
        let pdfValue1666 = new OffscreenCanvas(__pdfY.width, __pdfY.height);
        (pdfValue1666
          .getContext(`bitmaprenderer`)
          .transferFromImageBitmap(__pdfY),
          (pdfValue1167.blobPromise = pdfValue1666.convertToBlob()));
      }
      (__pdfY.close?.(), (pdfValue1167.bitmap = null));
    }
    isValidId(pdfParam1476) {
      return pdfParam1476.startsWith(`image_${this.#e}_`);
    }
  },
  pdfValue27 = class {
    #e = [];
    #t = !1;
    #n;
    #r = -1;
    constructor(pdfParam1688 = 128) {
      this.#n = pdfParam1688;
    }
    add({
      cmd: cmd,
      undo: undo,
      post: __pdfY,
      mustExec: mustExec,
      type = NaN,
      overwriteIfSameType = !1,
      keepUndo = !1,
    }) {
      if ((mustExec && cmd(), this.#t)) return;
      let pdfValue877 = {
        cmd: cmd,
        undo: undo,
        post: __pdfY,
        type: type,
      };
      if (this.#r === -1) {
        (this.#e.length > 0 && (this.#e.length = 0),
          (this.#r = 0),
          this.#e.push(pdfValue877));
        return;
      }
      if (overwriteIfSameType && this.#e[this.#r].type === type) {
        (keepUndo && (pdfValue877.undo = this.#e[this.#r].undo),
          (this.#e[this.#r] = pdfValue877));
        return;
      }
      let __pdfS = this.#r + 1;
      (__pdfS === this.#n
        ? this.#e.splice(0, 1)
        : ((this.#r = __pdfS),
          __pdfS < this.#e.length && this.#e.splice(__pdfS)),
        this.#e.push(pdfValue877));
    }
    undo() {
      if (this.#r === -1) return;
      this.#t = !0;
      let { undo: undo, post: post } = this.#e[this.#r];
      (undo(), post?.(), (this.#t = !1), --this.#r);
    }
    redo() {
      if (this.#r < this.#e.length - 1) {
        ((this.#r += 1), (this.#t = !0));
        let { cmd: cmd, post: post } = this.#e[this.#r];
        (cmd(), post?.(), (this.#t = !1));
      }
    }
    hasSomethingToUndo() {
      return this.#r !== -1;
    }
    hasSomethingToRedo() {
      return this.#r < this.#e.length - 1;
    }
    cleanType(pdfParam753) {
      if (this.#r !== -1) {
        for (let pdfValue1851 = this.#r; pdfValue1851 >= 0; pdfValue1851--)
          if (this.#e[pdfValue1851].type !== pdfParam753) {
            (this.#e.splice(pdfValue1851 + 1, this.#r - pdfValue1851),
              (this.#r = pdfValue1851));
            return;
          }
        ((this.#e.length = 0), (this.#r = -1));
      }
    }
    destroy() {
      this.#e = null;
    }
  },
  pdfValue28 = class {
    constructor(pdfParam349) {
      ((this.buffer = []),
        (this.callbacks = new Map()),
        (this.allKeys = new Set()));
      let { isMac: isMac } = pdfTt.platform;
      for (let [__pdfY, pdfValue1295, pdfValue1296 = {}] of pdfParam349)
        for (let pdfValue1347 of __pdfY) {
          let ___pdfY = pdfValue1347.startsWith(`mac+`);
          isMac && ___pdfY
            ? (this.callbacks.set(pdfValue1347.slice(4), {
                callback: pdfValue1295,
                options: pdfValue1296,
              }),
              this.allKeys.add(pdfValue1347.split(`+`).at(-1)))
            : !isMac &&
              !___pdfY &&
              (this.callbacks.set(pdfValue1347, {
                callback: pdfValue1295,
                options: pdfValue1296,
              }),
              this.allKeys.add(pdfValue1347.split(`+`).at(-1)));
        }
    }
    #e(event) {
      (event.altKey && this.buffer.push(`alt`),
        event.ctrlKey && this.buffer.push(`ctrl`),
        event.metaKey && this.buffer.push(`meta`),
        event.shiftKey && this.buffer.push(`shift`),
        this.buffer.push(event.key));
      let pdfValue1362 = this.buffer.join(`+`);
      return ((this.buffer.length = 0), pdfValue1362);
    }
    exec(pdfParam594, event) {
      if (!this.allKeys.has(event.key)) return;
      let __pdfY = this.callbacks.get(this.#e(event));
      if (!__pdfY) return;
      let {
        callback: callback,
        options: { bubbles = !1, args = [], checker = null },
      } = __pdfY;
      (checker && !checker(pdfParam594, event)) ||
        (callback.bind(pdfParam594, ...args, event)(),
        bubbles || pdfDollar(event));
    }
  },
  pdfValue29 = class PdfClass31 {
    static _colorsMapping = new Map([
      [`CanvasText`, [0, 0, 0]],
      [`Canvas`, [255, 255, 255]],
    ]);
    get _colors() {
      let pdfValue1841 = new Map([
        [`CanvasText`, null],
        [`Canvas`, null],
      ]);
      return (pdfHelper18(pdfValue1841), pdfQ(this, `_colors`, pdfValue1841));
    }
    convert(pdfParam639) {
      let __pdfY = pdfV(pdfParam639);
      if (!window.matchMedia(`(forced-colors: active)`).matches) return __pdfY;
      for (let [pdfValue1912, pdfValue1913] of this._colors)
        if (pdfValue1913.every((item, index) => item === __pdfY[index]))
          return PdfClass31._colorsMapping.get(pdfValue1912);
      return __pdfY;
    }
    getHexCode(pdfParam1294) {
      let pdfValue2003 = this._colors.get(pdfParam1294);
      return pdfValue2003 ? pdfA.makeHexColor(...pdfValue2003) : pdfParam1294;
    }
  },
  _pdfA = class PdfClass3 {
    #e = new AbortController();
    #t = null;
    #n = null;
    #r = new Map();
    #i = new Map();
    #a = null;
    #o = null;
    #s = null;
    #c = new pdfValue27();
    #l = null;
    #u = null;
    #d = null;
    #f = 0;
    #p = new Set();
    #m = null;
    #h = null;
    #g = new Set();
    _editorUndoBar = null;
    #_ = !1;
    #v = !1;
    #y = !1;
    #b = null;
    #x = null;
    #S = null;
    #C = null;
    #w = !1;
    #T = null;
    #E = new pdfValue26();
    #D = !1;
    #O = !1;
    #k = !1;
    #A = null;
    #j = null;
    #M = null;
    #N = null;
    #P = null;
    #F = pdfI.NONE;
    #I = new Set();
    #L = null;
    #R = null;
    #z = null;
    #B = null;
    #V = null;
    #H = {
      isEditing: !1,
      isEmpty: !0,
      hasSomethingToUndo: !1,
      hasSomethingToRedo: !1,
      hasSelectedEditor: !1,
      hasSelectedText: !1,
    };
    #U = [0, 0];
    #W = null;
    #G = null;
    #K = null;
    #q = null;
    #J = null;
    static TRANSLATE_SMALL = 1;
    static TRANSLATE_BIG = 10;
    static get _keyboardManager() {
      let pdfValue245 = PdfClass3.prototype,
        __pdfY = (pdfParam1003) =>
          pdfParam1003.#G.contains(document.activeElement) &&
          document.activeElement.tagName !== `BUTTON` &&
          pdfParam1003.hasSomethingToControl(),
        pdfValue246 = (pdfParam1030, { target: target }) => {
          if (target instanceof HTMLInputElement) {
            let { type: type } = target;
            return type !== `text` && type !== `number`;
          }
          return !0;
        },
        pdfValue247 = this.TRANSLATE_SMALL,
        pdfValue248 = this.TRANSLATE_BIG;
      return pdfQ(
        this,
        `_keyboardManager`,
        new pdfValue28([
          [
            [`ctrl+a`, `mac+meta+a`],
            pdfValue245.selectAll,
            {
              checker: pdfValue246,
            },
          ],
          [
            [`ctrl+z`, `mac+meta+z`],
            pdfValue245.undo,
            {
              checker: pdfValue246,
            },
          ],
          [
            [
              `ctrl+y`,
              `ctrl+shift+z`,
              `mac+meta+shift+z`,
              `ctrl+shift+Z`,
              `mac+meta+shift+Z`,
            ],
            pdfValue245.redo,
            {
              checker: pdfValue246,
            },
          ],
          [
            [
              `Backspace`,
              `alt+Backspace`,
              `ctrl+Backspace`,
              `shift+Backspace`,
              `mac+Backspace`,
              `mac+alt+Backspace`,
              `mac+ctrl+Backspace`,
              `Delete`,
              `ctrl+Delete`,
              `shift+Delete`,
              `mac+Delete`,
            ],
            pdfValue245.delete,
            {
              checker: pdfValue246,
            },
          ],
          [
            [`Enter`, `mac+Enter`],
            pdfValue245.addNewEditorFromKeyboard,
            {
              checker: (pdfParam1195, { target: target }) =>
                !(target instanceof HTMLButtonElement) &&
                pdfParam1195.#G.contains(target) &&
                !pdfParam1195.isEnterHandled,
            },
          ],
          [
            [` `, `mac+ `],
            pdfValue245.addNewEditorFromKeyboard,
            {
              checker: (pdfParam1176, { target: target }) =>
                !(target instanceof HTMLButtonElement) &&
                pdfParam1176.#G.contains(document.activeElement),
            },
          ],
          [[`Escape`, `mac+Escape`], pdfValue245.unselectAll],
          [
            [`ArrowLeft`, `mac+ArrowLeft`],
            pdfValue245.translateSelectedEditors,
            {
              args: [-pdfValue247, 0],
              checker: __pdfY,
            },
          ],
          [
            [`ctrl+ArrowLeft`, `mac+shift+ArrowLeft`],
            pdfValue245.translateSelectedEditors,
            {
              args: [-pdfValue248, 0],
              checker: __pdfY,
            },
          ],
          [
            [`ArrowRight`, `mac+ArrowRight`],
            pdfValue245.translateSelectedEditors,
            {
              args: [pdfValue247, 0],
              checker: __pdfY,
            },
          ],
          [
            [`ctrl+ArrowRight`, `mac+shift+ArrowRight`],
            pdfValue245.translateSelectedEditors,
            {
              args: [pdfValue248, 0],
              checker: __pdfY,
            },
          ],
          [
            [`ArrowUp`, `mac+ArrowUp`],
            pdfValue245.translateSelectedEditors,
            {
              args: [0, -pdfValue247],
              checker: __pdfY,
            },
          ],
          [
            [`ctrl+ArrowUp`, `mac+shift+ArrowUp`],
            pdfValue245.translateSelectedEditors,
            {
              args: [0, -pdfValue248],
              checker: __pdfY,
            },
          ],
          [
            [`ArrowDown`, `mac+ArrowDown`],
            pdfValue245.translateSelectedEditors,
            {
              args: [0, pdfValue247],
              checker: __pdfY,
            },
          ],
          [
            [`ctrl+ArrowDown`, `mac+shift+ArrowDown`],
            pdfValue245.translateSelectedEditors,
            {
              args: [0, pdfValue248],
              checker: __pdfY,
            },
          ],
        ]),
      );
    }
    constructor(
      pdfParam51,
      pdfParam52,
      __pdfY,
      pdfParam53,
      pdfParam54,
      pdfParam55,
      pdfParam56,
      pdfParam57,
      __pdfS,
      pdfParam58,
      __pdfI,
      __pdfR,
      ___pdfS,
      pdfParam59,
      _pdfNt,
      __pdfC,
    ) {
      let pdfValue400 = (this._signal = this.#e.signal);
      ((this.#G = pdfParam51),
        (this.#K = pdfParam52),
        (this.#q = __pdfY),
        (this.#a = pdfParam53),
        (this.#l = pdfParam54),
        (this.#R = pdfParam55),
        (this.#V = pdfParam57),
        (this._eventBus = pdfParam56),
        pdfParam56._on(`editingaction`, this.onEditingAction.bind(this), {
          signal: pdfValue400,
        }),
        pdfParam56._on(`pagechanging`, this.onPageChanging.bind(this), {
          signal: pdfValue400,
        }),
        pdfParam56._on(`scalechanging`, this.onScaleChanging.bind(this), {
          signal: pdfValue400,
        }),
        pdfParam56._on(`rotationchanging`, this.onRotationChanging.bind(this), {
          signal: pdfValue400,
        }),
        pdfParam56._on(`setpreference`, this.onSetPreference.bind(this), {
          signal: pdfValue400,
        }),
        pdfParam56._on(
          `switchannotationeditorparams`,
          (pdfParam1637) =>
            this.updateParams(pdfParam1637.type, pdfParam1637.value),
          {
            signal: pdfValue400,
          },
        ),
        window.addEventListener(
          `pointerdown`,
          () => {
            this.#O = !0;
          },
          {
            capture: !0,
            signal: pdfValue400,
          },
        ),
        window.addEventListener(
          `pointerup`,
          () => {
            this.#O = !1;
          },
          {
            capture: !0,
            signal: pdfValue400,
          },
        ),
        this.#ee(),
        this.#se(),
        this.#re(),
        (this.#o = pdfParam57.annotationStorage),
        (this.#b = pdfParam57.filterFactory),
        (this.#z = __pdfS),
        (this.#C = pdfParam58 || null),
        (this.#_ = __pdfI),
        (this.#v = __pdfR),
        (this.#y = ___pdfS),
        (this.#P = pdfParam59 || null),
        (this.viewParameters = {
          realScale: _pdfC.PDF_TO_CSS_UNITS,
          rotation: 0,
        }),
        (this.isShiftKeyDown = !1),
        (this._editorUndoBar = _pdfNt || null),
        (this._supportsPinchToZoom = __pdfC !== !1),
        pdfParam54?.setSidebarUiManager(this));
    }
    destroy() {
      (this.#J?.resolve(),
        (this.#J = null),
        this.#e?.abort(),
        (this.#e = null),
        (this._signal = null));
      for (let pdfValue2198 of this.#i.values()) pdfValue2198.destroy();
      (this.#i.clear(),
        this.#r.clear(),
        this.#g.clear(),
        this.#N?.clear(),
        (this.#t = null),
        this.#I.clear(),
        this.#c.destroy(),
        this.#a?.destroy(),
        this.#l?.destroy(),
        this.#R?.destroy(),
        this.#T?.hide(),
        (this.#T = null),
        this.#M?.destroy(),
        (this.#M = null),
        (this.#n = null),
        (this.#x &&= (clearTimeout(this.#x), null)),
        (this.#W &&= (clearTimeout(this.#W), null)),
        this._editorUndoBar?.destroy(),
        (this.#V = null));
    }
    combinedSignal(pdfParam1345) {
      return AbortSignal.any([this._signal, pdfParam1345.signal]);
    }
    get mlManager() {
      return this.#P;
    }
    get useNewAltTextFlow() {
      return this.#v;
    }
    get useNewAltTextWhenAddingImage() {
      return this.#y;
    }
    get hcmFilter() {
      return pdfQ(
        this,
        `hcmFilter`,
        this.#z
          ? this.#b.addHCMFilter(this.#z.foreground, this.#z.background)
          : `none`,
      );
    }
    get direction() {
      return pdfQ(this, `direction`, getComputedStyle(this.#G).direction);
    }
    get _highlightColors() {
      return pdfQ(
        this,
        `_highlightColors`,
        this.#C
          ? new Map(
              this.#C
                .split(`,`)
                .map(
                  (item) => (
                    (item = item.split(`=`).map((_item) => _item.trim())),
                    (item[1] = item[1].toUpperCase()),
                    item
                  ),
                ),
            )
          : null,
      );
    }
    get highlightColors() {
      let { _highlightColors: _highlightColors } = this;
      if (!_highlightColors) return pdfQ(this, `highlightColors`, null);
      let pdfValue1248 = new Map(),
        __pdfY = !!this.#z;
      for (let [pdfValue1781, pdfValue1782] of _highlightColors) {
        let pdfValue1876 = pdfValue1781.endsWith(`_HCM`);
        if (__pdfY && pdfValue1876) {
          pdfValue1248.set(pdfValue1781.replace(`_HCM`, ``), pdfValue1782);
          continue;
        }
        !__pdfY &&
          !pdfValue1876 &&
          pdfValue1248.set(pdfValue1781, pdfValue1782);
      }
      return pdfQ(this, `highlightColors`, pdfValue1248);
    }
    get highlightColorNames() {
      return pdfQ(
        this,
        `highlightColorNames`,
        this.highlightColors
          ? new Map(
              Array.from(this.highlightColors, (pdfParam1734) =>
                pdfParam1734.reverse(),
              ),
            )
          : null,
      );
    }
    getNonHCMColor(pdfParam903) {
      if (!this._highlightColors) return pdfParam903;
      let pdfValue1688 = this.highlightColorNames.get(pdfParam903);
      return this._highlightColors.get(pdfValue1688) || pdfParam903;
    }
    getNonHCMColorName(pdfParam1356) {
      return this.highlightColorNames.get(pdfParam1356) || pdfParam1356;
    }
    setCurrentDrawingSession(pdfParam966) {
      (pdfParam966
        ? (this.unselectAll(), this.disableUserSelect(!0))
        : this.disableUserSelect(!1),
        (this.#d = pdfParam966));
    }
    setMainHighlightColorPicker(pdfParam1599) {
      this.#M = pdfParam1599;
    }
    editAltText(pdfParam1517, pdfParam1518 = !1) {
      this.#a?.editAltText(this, pdfParam1517, pdfParam1518);
    }
    hasCommentManager() {
      return !!this.#l;
    }
    editComment(pdfParam1464, pdfParam1465, __pdfY, pdfParam1466) {
      this.#l?.showDialog(
        this,
        pdfParam1464,
        pdfParam1465,
        __pdfY,
        pdfParam1466,
      );
    }
    selectComment(pdfParam1263, pdfParam1264) {
      this.#i
        .get(pdfParam1263)
        ?.getEditorByUID(pdfParam1264)
        ?.toggleComment(!0, !0);
    }
    updateComment(pdfParam1497) {
      this.#l?.updateComment(pdfParam1497.getData());
    }
    updatePopupColor(pdfParam1535) {
      this.#l?.updatePopupColor(pdfParam1535);
    }
    removeComment(pdfParam1528) {
      this.#l?.removeComments([pdfParam1528.uid]);
    }
    toggleComment(pdfParam1362, pdfParam1363, __pdfY = void 0) {
      this.#l?.toggleCommentPopup(pdfParam1362, pdfParam1363, __pdfY);
    }
    makeCommentColor(pdfParam1326, pdfParam1327) {
      return (
        (pdfParam1326 &&
          this.#l?.makeCommentColor(pdfParam1326, pdfParam1327)) ||
        null
      );
    }
    getCommentDialogElement() {
      return this.#l?.dialogElement || null;
    }
    async waitForEditorsRendered(pdfParam544) {
      if (this.#i.has(pdfParam544 - 1)) return;
      let { resolve: resolve, promise: __pdfY } = Promise.withResolvers(),
        pdfValue1375 = (___pdfY) => {
          ___pdfY.pageNumber === pdfParam544 &&
            (this._eventBus._off(`editorsrendered`, pdfValue1375), resolve());
        };
      (this._eventBus.on(`editorsrendered`, pdfValue1375), await __pdfY);
    }
    getSignature(pdfParam1352) {
      this.#R?.getSignature({
        uiManager: this,
        editor: pdfParam1352,
      });
    }
    get signatureManager() {
      return this.#R;
    }
    switchToMode(pdfParam677, pdfParam678) {
      (this._eventBus.on(`annotationeditormodechanged`, pdfParam678, {
        once: !0,
        signal: this._signal,
      }),
        this._eventBus.dispatch(`showannotationeditorui`, {
          source: this,
          mode: pdfParam677,
        }));
    }
    setPreference(pdfParam1168, pdfParam1169) {
      this._eventBus.dispatch(`setpreference`, {
        source: this,
        name: pdfParam1168,
        value: pdfParam1169,
      });
    }
    onSetPreference({ name: name, value: value }) {
      switch (name) {
        case `enableNewAltTextWhenAddingImage`:
          this.#y = value;
          break;
      }
    }
    onPageChanging({ pageNumber: pageNumber }) {
      this.#f = pageNumber - 1;
    }
    focusMainContainer() {
      this.#G.focus();
    }
    findParent(pdfParam749, pdfParam750) {
      for (let __pdfY of this.#i.values()) {
        let {
          x: x,
          y: y,
          width: width,
          height: height,
        } = __pdfY.div.getBoundingClientRect();
        if (
          pdfParam749 >= x &&
          pdfParam749 <= x + width &&
          pdfParam750 >= y &&
          pdfParam750 <= y + height
        )
          return __pdfY;
      }
      return null;
    }
    disableUserSelect(pdfParam1337 = !1) {
      this.#K.classList.toggle(`noUserSelect`, pdfParam1337);
    }
    addShouldRescale(pdfParam1651) {
      this.#g.add(pdfParam1651);
    }
    removeShouldRescale(pdfParam1600) {
      this.#g.delete(pdfParam1600);
    }
    onScaleChanging({ scale: scale }) {
      (this.commitOrRemove(),
        (this.viewParameters.realScale = scale * _pdfC.PDF_TO_CSS_UNITS));
      for (let pdfValue2202 of this.#g) pdfValue2202.onScaleChanging();
      this.#d?.onScaleChanging();
    }
    onRotationChanging({ pagesRotation: pagesRotation }) {
      (this.commitOrRemove(), (this.viewParameters.rotation = pagesRotation));
    }
    #Y({ anchorNode: anchorNode }) {
      return anchorNode.nodeType === Node.TEXT_NODE
        ? anchorNode.parentElement
        : anchorNode;
    }
    #X(pdfParam881) {
      let { currentLayer: currentLayer } = this;
      if (currentLayer.hasTextLayer(pdfParam881)) return currentLayer;
      for (let pdfValue2085 of this.#i.values())
        if (pdfValue2085.hasTextLayer(pdfParam881)) return pdfValue2085;
      return null;
    }
    highlightSelection(pdfParam239 = ``, pdfParam240 = !1) {
      let __pdfY = document.getSelection();
      if (!__pdfY || __pdfY.isCollapsed) return;
      let {
          anchorNode: anchorNode,
          anchorOffset: anchorOffset,
          focusNode: focusNode,
          focusOffset: focusOffset,
        } = __pdfY,
        s = __pdfY.toString(),
        __pdfS = this.#Y(__pdfY).closest(`.textLayer`),
        pdfValue756 = this.getSelectionBoxes(__pdfS);
      if (!pdfValue756) return;
      __pdfY.empty();
      let __pdfR = this.#X(__pdfS),
        ___pdfS = this.#F === pdfI.NONE,
        pdfValue757 = () => {
          let ___pdfY = __pdfR?.createAndAddNewEditor(
            {
              x: 0,
              y: 0,
            },
            !1,
            {
              methodOfCreation: pdfParam239,
              boxes: pdfValue756,
              anchorNode: anchorNode,
              anchorOffset: anchorOffset,
              focusNode: focusNode,
              focusOffset: focusOffset,
              text: s,
            },
          );
          (___pdfS && this.showAllEditors(`highlight`, !0, !0),
            pdfParam240 && ___pdfY?.editComment());
        };
      if (___pdfS) {
        this.switchToMode(pdfI.HIGHLIGHT, pdfValue757);
        return;
      }
      pdfValue757();
    }
    commentSelection(pdfParam1498 = ``) {
      this.highlightSelection(pdfParam1498, !0);
    }
    #Z() {
      let pdfValue1450 = document.getSelection();
      if (!pdfValue1450 || pdfValue1450.isCollapsed) return;
      let pdfValue1451 = this.#Y(pdfValue1450).closest(`.textLayer`),
        __pdfY = this.getSelectionBoxes(pdfValue1451);
      __pdfY &&
        ((this.#T ||= new pdfValue25(this)),
        this.#T.show(pdfValue1451, __pdfY, this.direction === `ltr`));
    }
    getAndRemoveDataFromAnnotationStorage(pdfParam854) {
      if (!this.#o) return null;
      let pdfValue1660 = `${pdfValue6}${pdfParam854}`,
        __pdfY = this.#o.getRawValue(pdfValue1660);
      return (__pdfY && this.#o.remove(pdfValue1660), __pdfY);
    }
    addToAnnotationStorage(pdfParam1115) {
      !pdfParam1115.isEmpty() &&
        this.#o &&
        !this.#o.has(pdfParam1115.id) &&
        this.#o.setValue(pdfParam1115.id, pdfParam1115);
    }
    a11yAlert(pdfParam730, pdfParam731 = null) {
      let __pdfY = this.#q;
      __pdfY &&
        (__pdfY.setAttribute(`data-l10n-id`, pdfParam730),
        pdfParam731
          ? __pdfY.setAttribute(`data-l10n-args`, JSON.stringify(pdfParam731))
          : __pdfY.removeAttribute(`data-l10n-args`));
    }
    #Q() {
      let pdfValue479 = document.getSelection();
      if (!pdfValue479 || pdfValue479.isCollapsed) {
        this.#L &&
          (this.#T?.hide(),
          (this.#L = null),
          this.#ce({
            hasSelectedText: !1,
          }));
        return;
      }
      let { anchorNode: anchorNode } = pdfValue479;
      if (anchorNode === this.#L) return;
      let __pdfY = this.#Y(pdfValue479).closest(`.textLayer`);
      if (!__pdfY) {
        this.#L &&
          (this.#T?.hide(),
          (this.#L = null),
          this.#ce({
            hasSelectedText: !1,
          }));
        return;
      }
      if (
        (this.#T?.hide(),
        (this.#L = anchorNode),
        this.#ce({
          hasSelectedText: !0,
        }),
        !(this.#F !== pdfI.HIGHLIGHT && this.#F !== pdfI.NONE) &&
          (this.#F === pdfI.HIGHLIGHT &&
            this.showAllEditors(`highlight`, !0, !0),
          (this.#w = this.isShiftKeyDown),
          !this.isShiftKeyDown))
      ) {
        let pdfValue971 = this.#F === pdfI.HIGHLIGHT ? this.#X(__pdfY) : null;
        if ((pdfValue971?.toggleDrawing(), this.#O)) {
          let pdfValue1237 = new AbortController(),
            ___pdfY = this.combinedSignal(pdfValue1237),
            pdfValue1238 = (____pdfY) => {
              (____pdfY.type === `pointerup` && ____pdfY.button !== 0) ||
                (pdfValue1237.abort(),
                pdfValue971?.toggleDrawing(!0),
                ____pdfY.type === `pointerup` && this.#$(`main_toolbar`));
            };
          (window.addEventListener(`pointerup`, pdfValue1238, {
            signal: ___pdfY,
          }),
            window.addEventListener(`blur`, pdfValue1238, {
              signal: ___pdfY,
            }));
        } else (pdfValue971?.toggleDrawing(!0), this.#$(`main_toolbar`));
      }
    }
    #$(pdfParam1265 = ``) {
      this.#F === pdfI.HIGHLIGHT
        ? this.highlightSelection(pdfParam1265)
        : this.#_ && this.#Z();
    }
    #ee() {
      document.addEventListener(`selectionchange`, this.#Q.bind(this), {
        signal: this._signal,
      });
    }
    #te() {
      if (this.#S) return;
      this.#S = new AbortController();
      let pdfValue1412 = this.combinedSignal(this.#S);
      (window.addEventListener(`focus`, this.focus.bind(this), {
        signal: pdfValue1412,
      }),
        window.addEventListener(`blur`, this.blur.bind(this), {
          signal: pdfValue1412,
        }));
    }
    #ne() {
      (this.#S?.abort(), (this.#S = null));
    }
    blur() {
      if (
        ((this.isShiftKeyDown = !1),
        this.#w && ((this.#w = !1), this.#$(`main_toolbar`)),
        !this.hasSelection)
      )
        return;
      let { activeElement: activeElement } = document;
      for (let pdfValue1908 of this.#I)
        if (pdfValue1908.div.contains(activeElement)) {
          ((this.#j = [pdfValue1908, activeElement]),
            (pdfValue1908._focusEventsAllowed = !1));
          break;
        }
    }
    focus() {
      if (!this.#j) return;
      let [pdfValue1592, pdfValue1593] = this.#j;
      ((this.#j = null),
        pdfValue1593.addEventListener(
          `focusin`,
          () => {
            pdfValue1592._focusEventsAllowed = !0;
          },
          {
            once: !0,
            signal: this._signal,
          },
        ),
        pdfValue1593.focus());
    }
    #re() {
      if (this.#A) return;
      this.#A = new AbortController();
      let pdfValue1394 = this.combinedSignal(this.#A);
      (window.addEventListener(`keydown`, this.keydown.bind(this), {
        signal: pdfValue1394,
      }),
        window.addEventListener(`keyup`, this.keyup.bind(this), {
          signal: pdfValue1394,
        }));
    }
    #ie() {
      (this.#A?.abort(), (this.#A = null));
    }
    #ae() {
      if (this.#u) return;
      this.#u = new AbortController();
      let pdfValue1183 = this.combinedSignal(this.#u);
      (document.addEventListener(`copy`, this.copy.bind(this), {
        signal: pdfValue1183,
      }),
        document.addEventListener(`cut`, this.cut.bind(this), {
          signal: pdfValue1183,
        }),
        document.addEventListener(`paste`, this.paste.bind(this), {
          signal: pdfValue1183,
        }));
    }
    #oe() {
      (this.#u?.abort(), (this.#u = null));
    }
    #se() {
      let pdfValue1572 = this._signal;
      (document.addEventListener(`dragover`, this.dragOver.bind(this), {
        signal: pdfValue1572,
      }),
        document.addEventListener(`drop`, this.drop.bind(this), {
          signal: pdfValue1572,
        }));
    }
    addEditListeners() {
      (this.#re(), this.#ae());
    }
    removeEditListeners() {
      (this.#ie(), this.#oe());
    }
    dragOver(event) {
      for (let { type: type } of event.dataTransfer.items)
        for (let __pdfY of this.#h)
          if (__pdfY.isHandlingMimeForPasting(type)) {
            ((event.dataTransfer.dropEffect = `copy`), event.preventDefault());
            return;
          }
    }
    drop(event) {
      for (let pdfValue1618 of event.dataTransfer.items)
        for (let __pdfY of this.#h)
          if (__pdfY.isHandlingMimeForPasting(pdfValue1618.type)) {
            (__pdfY.paste(pdfValue1618, this.currentLayer),
              event.preventDefault());
            return;
          }
    }
    copy(event) {
      if (
        (event.preventDefault(), this.#t?.commitOrRemove(), !this.hasSelection)
      )
        return;
      let pdfValue1385 = [];
      for (let pdfValue2110 of this.#I) {
        let __pdfY = pdfValue2110.serialize(!0);
        __pdfY && pdfValue1385.push(__pdfY);
      }
      pdfValue1385.length !== 0 &&
        event.clipboardData.setData(
          `application/pdfjs`,
          JSON.stringify(pdfValue1385),
        );
    }
    cut(pdfParam1661) {
      (this.copy(pdfParam1661), this.delete());
    }
    async paste(event) {
      event.preventDefault();
      let { clipboardData: clipboardData } = event;
      for (let pdfValue1747 of clipboardData.items)
        for (let pdfValue1858 of this.#h)
          if (pdfValue1858.isHandlingMimeForPasting(pdfValue1747.type)) {
            pdfValue1858.paste(pdfValue1747, this.currentLayer);
            return;
          }
      let __pdfY = clipboardData.getData(`application/pdfjs`);
      if (!__pdfY) return;
      try {
        __pdfY = JSON.parse(__pdfY);
      } catch (pdfValue2188) {
        pdfHelper4(`paste: "${pdfValue2188.message}".`);
        return;
      }
      if (!Array.isArray(__pdfY)) return;
      this.unselectAll();
      let pdfValue705 = this.currentLayer;
      try {
        let pdfValue1459 = [];
        for (let pdfValue2035 of __pdfY) {
          let ___pdfY = await pdfValue705.deserialize(pdfValue2035);
          if (!___pdfY) return;
          pdfValue1459.push(___pdfY);
        }
        this.addCommands({
          cmd: () => {
            for (let pdfValue2242 of pdfValue1459) this.#fe(pdfValue2242);
            this.#he(pdfValue1459);
          },
          undo: () => {
            for (let pdfValue2245 of pdfValue1459) pdfValue2245.remove();
          },
          mustExec: !0,
        });
      } catch (pdfValue2223) {
        pdfHelper4(`paste: "${pdfValue2223.message}".`);
      }
    }
    keydown(event) {
      (!this.isShiftKeyDown &&
        event.key === `Shift` &&
        (this.isShiftKeyDown = !0),
        this.#F !== pdfI.NONE &&
          !this.isEditorHandlingKeyboard &&
          PdfClass3._keyboardManager.exec(this, event));
    }
    keyup(event) {
      this.isShiftKeyDown &&
        event.key === `Shift` &&
        ((this.isShiftKeyDown = !1),
        this.#w && ((this.#w = !1), this.#$(`main_toolbar`)));
    }
    onEditingAction({ name: name }) {
      switch (name) {
        case `undo`:
        case `redo`:
        case `delete`:
        case `selectAll`:
          this[name]();
          break;
        case `highlightSelection`:
          this.highlightSelection(`context_menu`);
          break;
        case `commentSelection`:
          this.commentSelection(`context_menu`);
          break;
      }
    }
    #ce(pdfParam516) {
      Object.entries(pdfParam516).some(
        ([pdfParam1710, pdfParam1711]) =>
          this.#H[pdfParam1710] !== pdfParam1711,
      ) &&
        (this._eventBus.dispatch(`annotationeditorstateschanged`, {
          source: this,
          details: Object.assign(this.#H, pdfParam516),
        }),
        this.#F === pdfI.HIGHLIGHT &&
          pdfParam516.hasSelectedEditor === !1 &&
          this.#le([[pdfR.HIGHLIGHT_FREE, !0]]));
    }
    #le(pdfParam1177) {
      this._eventBus.dispatch(`annotationeditorparamschanged`, {
        source: this,
        details: pdfParam1177,
      });
    }
    setEditingState(pdfParam433) {
      pdfParam433
        ? (this.#te(),
          this.#ae(),
          this.#ce({
            isEditing: this.#F !== pdfI.NONE,
            isEmpty: this.#me(),
            hasSomethingToUndo: this.#c.hasSomethingToUndo(),
            hasSomethingToRedo: this.#c.hasSomethingToRedo(),
            hasSelectedEditor: !1,
          }))
        : (this.#ne(),
          this.#oe(),
          this.#ce({
            isEditing: !1,
          }),
          this.disableUserSelect(!1));
    }
    registerEditorTypes(pdfParam1031) {
      if (!this.#h) {
        this.#h = pdfParam1031;
        for (let pdfValue2102 of this.#h)
          this.#le(pdfValue2102.defaultPropertiesToUpdate);
      }
    }
    getId() {
      return this.#E.id;
    }
    get currentLayer() {
      return this.#i.get(this.#f);
    }
    getLayer(pdfParam1662) {
      return this.#i.get(pdfParam1662);
    }
    get currentPageIndex() {
      return this.#f;
    }
    addLayer(pdfParam1310) {
      (this.#i.set(pdfParam1310.pageIndex, pdfParam1310),
        this.#D ? pdfParam1310.enable() : pdfParam1310.disable());
    }
    removeLayer(pdfParam1584) {
      this.#i.delete(pdfParam1584.pageIndex);
    }
    async updateMode(
      pdfParam31,
      pdfParam32 = null,
      __pdfY = !1,
      pdfParam33 = !1,
      pdfParam34 = !1,
    ) {
      if (
        this.#F !== pdfParam31 &&
        !(this.#J && (await this.#J.promise, !this.#J))
      ) {
        if (
          ((this.#J = Promise.withResolvers()),
          this.#d?.commitOrRemove(),
          this.#F === pdfI.POPUP && this.#l?.hideSidebar(),
          this.#l?.destroyPopup(),
          (this.#F = pdfParam31),
          pdfParam31 === pdfI.NONE)
        ) {
          (this.setEditingState(!1), this.#de());
          for (let pdfValue2068 of this.#r.values())
            pdfValue2068.hideStandaloneCommentButton();
          (this._editorUndoBar?.hide(),
            this.toggleComment(null),
            this.#J.resolve());
          return;
        }
        for (let pdfValue2081 of this.#r.values())
          pdfValue2081.addStandaloneCommentButton();
        (pdfParam31 === pdfI.SIGNATURE && (await this.#R?.loadSignatures()),
          this.setEditingState(!0),
          await this.#ue(),
          this.unselectAll());
        for (let pdfValue2178 of this.#i.values())
          pdfValue2178.updateMode(pdfParam31);
        if (pdfParam31 === pdfI.POPUP) {
          this.#n ||= await this.#V.getAnnotationsByType(
            new Set(this.#h.map((item) => item._editorType)),
          );
          let pdfValue1011 = new Set(),
            pdfValue1012 = [];
          for (let ___pdfY of this.#r.values()) {
            let {
              annotationElementId: annotationElementId,
              hasComment: hasComment,
              deleted: deleted,
            } = ___pdfY;
            (annotationElementId && pdfValue1011.add(annotationElementId),
              hasComment && !deleted && pdfValue1012.push(___pdfY.getData()));
          }
          for (let ___pdfY of this.#n) {
            let {
              id: id,
              popupRef: popupRef,
              contentsObj: contentsObj,
            } = ___pdfY;
            popupRef &&
              contentsObj?.str &&
              !pdfValue1011.has(id) &&
              !this.#p.has(id) &&
              pdfValue1012.push(___pdfY);
          }
          this.#l?.showSidebar(pdfValue1012);
        }
        if (!pdfParam32) {
          (__pdfY && this.addNewEditorFromKeyboard(), this.#J.resolve());
          return;
        }
        for (let pdfValue1710 of this.#r.values())
          pdfValue1710.uid === pdfParam32
            ? (this.setSelected(pdfValue1710),
              pdfParam34
                ? pdfValue1710.editComment()
                : pdfParam33
                  ? pdfValue1710.enterInEditMode()
                  : pdfValue1710.focus())
            : pdfValue1710.unselect();
        this.#J.resolve();
      }
    }
    addNewEditorFromKeyboard() {
      this.currentLayer.canCreateNewEmptyEditor() &&
        this.currentLayer.addNewEditor();
    }
    updateToolbar(pdfParam1014) {
      pdfParam1014.mode !== this.#F &&
        this._eventBus.dispatch(`switchannotationeditormode`, {
          source: this,
          ...pdfParam1014,
        });
    }
    updateParams(pdfParam289, pdfParam290) {
      if (this.#h) {
        switch (pdfParam289) {
          case pdfR.CREATE:
            this.currentLayer.addNewEditor(pdfParam290);
            return;
          case pdfR.HIGHLIGHT_SHOW_ALL:
            (this._eventBus.dispatch(`reporttelemetry`, {
              source: this,
              details: {
                type: `editing`,
                data: {
                  type: `highlight`,
                  action: `toggle_visibility`,
                },
              },
            }),
              (this.#B ||= new Map()).set(pdfParam289, pdfParam290),
              this.showAllEditors(`highlight`, pdfParam290));
            break;
        }
        if (this.hasSelection)
          for (let __pdfY of this.#I)
            __pdfY.updateParams(pdfParam289, pdfParam290);
        else
          for (let __pdfY of this.#h)
            __pdfY.updateDefaultParams(pdfParam289, pdfParam290);
      }
    }
    showAllEditors(pdfParam698, pdfParam699, __pdfY = !1) {
      for (let ___pdfY of this.#r.values())
        ___pdfY.editorType === pdfParam698 && ___pdfY.show(pdfParam699);
      (this.#B?.get(pdfR.HIGHLIGHT_SHOW_ALL) ?? !0) !== pdfParam699 &&
        this.#le([[pdfR.HIGHLIGHT_SHOW_ALL, pdfParam699]]);
    }
    enableWaiting(pdfParam796 = !1) {
      if (this.#k !== pdfParam796) {
        this.#k = pdfParam796;
        for (let pdfValue1842 of this.#i.values())
          (pdfParam796
            ? pdfValue1842.disableClick()
            : pdfValue1842.enableClick(),
            pdfValue1842.div.classList.toggle(`waiting`, pdfParam796));
      }
    }
    async #ue() {
      if (!this.#D) {
        this.#D = !0;
        let pdfValue1681 = [];
        for (let pdfValue2166 of this.#i.values())
          pdfValue1681.push(pdfValue2166.enable());
        await Promise.all(pdfValue1681);
        for (let pdfValue2210 of this.#r.values()) pdfValue2210.enable();
      }
    }
    #de() {
      if ((this.unselectAll(), this.#D)) {
        this.#D = !1;
        for (let pdfValue2199 of this.#i.values()) pdfValue2199.disable();
        for (let pdfValue2203 of this.#r.values()) pdfValue2203.disable();
      }
    }
    *getEditors(pdfParam1295) {
      for (let pdfValue2116 of this.#r.values())
        pdfValue2116.pageIndex === pdfParam1295 && (yield pdfValue2116);
    }
    getEditor(pdfParam1652) {
      return this.#r.get(pdfParam1652);
    }
    addEditor(pdfParam1671) {
      this.#r.set(pdfParam1671.id, pdfParam1671);
    }
    removeEditor(pdfParam361) {
      (pdfParam361.div.contains(document.activeElement) &&
        (this.#x && clearTimeout(this.#x),
        (this.#x = setTimeout(() => {
          (this.focusMainContainer(), (this.#x = null));
        }, 0))),
        this.#r.delete(pdfParam361.id),
        pdfParam361.annotationElementId &&
          this.#N?.delete(pdfParam361.annotationElementId),
        this.unselect(pdfParam361),
        (!pdfParam361.annotationElementId ||
          !this.#p.has(pdfParam361.annotationElementId)) &&
          this.#o?.remove(pdfParam361.id));
    }
    addDeletedAnnotationElement(pdfParam959) {
      (this.#p.add(pdfParam959.annotationElementId),
        this.addChangedExistingAnnotation(pdfParam959),
        (pdfParam959.deleted = !0));
    }
    isDeletedAnnotationElement(pdfParam1507) {
      return this.#p.has(pdfParam1507);
    }
    removeDeletedAnnotationElement(pdfParam919) {
      (this.#p.delete(pdfParam919.annotationElementId),
        this.removeChangedExistingAnnotation(pdfParam919),
        (pdfParam919.deleted = !1));
    }
    #fe(pdfParam1011) {
      let pdfValue1790 = this.#i.get(pdfParam1011.pageIndex);
      pdfValue1790
        ? pdfValue1790.addOrRebuild(pdfParam1011)
        : (this.addEditor(pdfParam1011),
          this.addToAnnotationStorage(pdfParam1011));
    }
    setActiveEditor(pdfParam1254) {
      this.#t !== pdfParam1254 &&
        ((this.#t = pdfParam1254),
        pdfParam1254 && this.#le(pdfParam1254.propertiesToUpdate));
    }
    get #pe() {
      let pdfValue2172 = null;
      for (pdfValue2172 of this.#I);
      return pdfValue2172;
    }
    updateUI(pdfParam1448) {
      this.#pe === pdfParam1448 && this.#le(pdfParam1448.propertiesToUpdate);
    }
    updateUIForDefaultProperties(pdfParam1311) {
      this.#le(pdfParam1311.defaultPropertiesToUpdate);
    }
    toggleSelected(pdfParam575) {
      if (this.#I.has(pdfParam575)) {
        (this.#I.delete(pdfParam575),
          pdfParam575.unselect(),
          this.#ce({
            hasSelectedEditor: this.hasSelection,
          }));
        return;
      }
      (this.#I.add(pdfParam575),
        pdfParam575.select(),
        this.#le(pdfParam575.propertiesToUpdate),
        this.#ce({
          hasSelectedEditor: !0,
        }));
    }
    setSelected(pdfParam533) {
      (this.updateToolbar({
        mode: pdfParam533.mode,
        editId: pdfParam533.id,
      }),
        this.#d?.commitOrRemove());
      for (let pdfValue2204 of this.#I)
        pdfValue2204 !== pdfParam533 && pdfValue2204.unselect();
      (this.#I.clear(),
        this.#I.add(pdfParam533),
        pdfParam533.select(),
        this.#le(pdfParam533.propertiesToUpdate),
        this.#ce({
          hasSelectedEditor: !0,
        }));
    }
    isSelected(pdfParam1638) {
      return this.#I.has(pdfParam1638);
    }
    get firstSelectedEditor() {
      return this.#I.values().next().value;
    }
    unselect(pdfParam1148) {
      (pdfParam1148.unselect(),
        this.#I.delete(pdfParam1148),
        this.#ce({
          hasSelectedEditor: this.hasSelection,
        }));
    }
    get hasSelection() {
      return this.#I.size !== 0;
    }
    get isEnterHandled() {
      return this.#I.size === 1 && this.firstSelectedEditor.isEnterHandled;
    }
    undo() {
      (this.#c.undo(),
        this.#ce({
          hasSomethingToUndo: this.#c.hasSomethingToUndo(),
          hasSomethingToRedo: !0,
          isEmpty: this.#me(),
        }),
        this._editorUndoBar?.hide());
    }
    redo() {
      (this.#c.redo(),
        this.#ce({
          hasSomethingToUndo: !0,
          hasSomethingToRedo: this.#c.hasSomethingToRedo(),
          isEmpty: this.#me(),
        }));
    }
    addCommands(pdfParam1037) {
      (this.#c.add(pdfParam1037),
        this.#ce({
          hasSomethingToUndo: !0,
          hasSomethingToRedo: !1,
          isEmpty: this.#me(),
        }));
    }
    cleanUndoStack(pdfParam1612) {
      this.#c.cleanType(pdfParam1612);
    }
    #me() {
      if (this.#r.size === 0) return !0;
      if (this.#r.size === 1)
        for (let pdfValue2167 of this.#r.values())
          return pdfValue2167.isEmpty();
      return !1;
    }
    delete() {
      this.commitOrRemove();
      let pdfValue1094 = this.currentLayer?.endDrawingSession(!0);
      if (!this.hasSelection && !pdfValue1094) return;
      let pdfValue1095 = pdfValue1094 ? [pdfValue1094] : [...this.#I],
        __pdfY = () => {
          this._editorUndoBar?.show(
            pdfValue1096,
            pdfValue1095.length === 1
              ? pdfValue1095[0].editorType
              : pdfValue1095.length,
          );
          for (let pdfValue2246 of pdfValue1095) pdfValue2246.remove();
        },
        pdfValue1096 = () => {
          for (let pdfValue2244 of pdfValue1095) this.#fe(pdfValue2244);
        };
      this.addCommands({
        cmd: __pdfY,
        undo: pdfValue1096,
        mustExec: !0,
      });
    }
    commitOrRemove() {
      this.#t?.commitOrRemove();
    }
    hasSomethingToControl() {
      return this.#t || this.hasSelection;
    }
    #he(pdfParam732) {
      for (let pdfValue2232 of this.#I) pdfValue2232.unselect();
      this.#I.clear();
      for (let pdfValue2117 of pdfParam732)
        pdfValue2117.isEmpty() ||
          (this.#I.add(pdfValue2117), pdfValue2117.select());
      this.#ce({
        hasSelectedEditor: this.hasSelection,
      });
    }
    selectAll() {
      for (let pdfValue2236 of this.#I) pdfValue2236.commit();
      this.#he(this.#r.values());
    }
    unselectAll() {
      if (
        !(this.#t && (this.#t.commitOrRemove(), this.#F !== pdfI.NONE)) &&
        !this.#d?.commitOrRemove() &&
        this.hasSelection
      ) {
        for (let pdfValue2233 of this.#I) pdfValue2233.unselect();
        (this.#I.clear(),
          this.#ce({
            hasSelectedEditor: !1,
          }));
      }
    }
    translateSelectedEditors(pdfParam250, pdfParam251, __pdfY = !1) {
      if ((__pdfY || this.commitOrRemove(), !this.hasSelection)) return;
      ((this.#U[0] += pdfParam250), (this.#U[1] += pdfParam251));
      let [pdfValue784, pdfValue785] = this.#U,
        pdfValue786 = [...this.#I];
      (this.#W && clearTimeout(this.#W),
        (this.#W = setTimeout(() => {
          ((this.#W = null),
            (this.#U[0] = this.#U[1] = 0),
            this.addCommands({
              cmd: () => {
                for (let pdfValue1971 of pdfValue786)
                  this.#r.has(pdfValue1971.id) &&
                    (pdfValue1971.translateInPage(pdfValue784, pdfValue785),
                    pdfValue1971.translationDone());
              },
              undo: () => {
                for (let pdfValue1962 of pdfValue786)
                  this.#r.has(pdfValue1962.id) &&
                    (pdfValue1962.translateInPage(-pdfValue784, -pdfValue785),
                    pdfValue1962.translationDone());
              },
              mustExec: !1,
            }));
        }, 1e3)));
      for (let ___pdfY of pdfValue786)
        (___pdfY.translateInPage(pdfParam250, pdfParam251),
          ___pdfY.translationDone());
    }
    setUpDragSession() {
      if (this.hasSelection) {
        (this.disableUserSelect(!0), (this.#m = new Map()));
        for (let pdfValue1756 of this.#I)
          this.#m.set(pdfValue1756, {
            savedX: pdfValue1756.x,
            savedY: pdfValue1756.y,
            savedPageIndex: pdfValue1756.pageIndex,
            newX: 0,
            newY: 0,
            newPageIndex: -1,
          });
      }
    }
    endDragSession() {
      if (!this.#m) return !1;
      this.disableUserSelect(!1);
      let pdfValue739 = this.#m;
      this.#m = null;
      let pdfValue740 = !1;
      for (let [
        { x: ___pdfY, y: pdfValue1711, pageIndex: pdfValue1712 },
        pdfValue1713,
      ] of pdfValue739)
        ((pdfValue1713.newX = ___pdfY),
          (pdfValue1713.newY = pdfValue1711),
          (pdfValue1713.newPageIndex = pdfValue1712),
          (pdfValue740 ||=
            ___pdfY !== pdfValue1713.savedX ||
            pdfValue1711 !== pdfValue1713.savedY ||
            pdfValue1712 !== pdfValue1713.savedPageIndex));
      if (!pdfValue740) return !1;
      let __pdfY = (pdfParam952, pdfParam953, ___pdfY, pdfParam954) => {
        if (this.#r.has(pdfParam952.id)) {
          let pdfValue1940 = this.#i.get(pdfParam954);
          pdfValue1940
            ? pdfParam952._setParentAndPosition(
                pdfValue1940,
                pdfParam953,
                ___pdfY,
              )
            : ((pdfParam952.pageIndex = pdfParam954),
              (pdfParam952.x = pdfParam953),
              (pdfParam952.y = ___pdfY));
        }
      };
      return (
        this.addCommands({
          cmd: () => {
            for (let [
              pdfValue2118,
              {
                newX: pdfValue2119,
                newY: pdfValue2120,
                newPageIndex: pdfValue2121,
              },
            ] of pdfValue739)
              __pdfY(pdfValue2118, pdfValue2119, pdfValue2120, pdfValue2121);
          },
          undo: () => {
            for (let [
              pdfValue2069,
              {
                savedX: pdfValue2070,
                savedY: pdfValue2071,
                savedPageIndex: pdfValue2072,
              },
            ] of pdfValue739)
              __pdfY(pdfValue2069, pdfValue2070, pdfValue2071, pdfValue2072);
          },
          mustExec: !0,
        }),
        !0
      );
    }
    dragSelectedEditors(pdfParam1270, pdfParam1271) {
      if (this.#m)
        for (let __pdfY of this.#m.keys())
          __pdfY.drag(pdfParam1270, pdfParam1271);
    }
    rebuild(pdfParam598) {
      if (pdfParam598.parent === null) {
        let pdfValue1661 = this.getLayer(pdfParam598.pageIndex);
        pdfValue1661
          ? (pdfValue1661.changeParent(pdfParam598),
            pdfValue1661.addOrRebuild(pdfParam598))
          : (this.addEditor(pdfParam598),
            this.addToAnnotationStorage(pdfParam598),
            pdfParam598.rebuild());
      } else pdfParam598.parent.addOrRebuild(pdfParam598);
    }
    get isEditorHandlingKeyboard() {
      return (
        this.getActive()?.shouldGetKeyboardEvents() ||
        (this.#I.size === 1 &&
          this.firstSelectedEditor.shouldGetKeyboardEvents())
      );
    }
    isActive(pdfParam1680) {
      return this.#t === pdfParam1680;
    }
    getActive() {
      return this.#t;
    }
    getMode() {
      return this.#F;
    }
    isEditingMode() {
      return this.#F !== pdfI.NONE;
    }
    get imageManager() {
      return pdfQ(this, `imageManager`, new $e());
    }
    getSelectionBoxes(pdfParam124) {
      if (!pdfParam124) return null;
      let pdfValue514 = document.getSelection();
      for (
        let ___pdfY = 0, pdfValue1824 = pdfValue514.rangeCount;
        ___pdfY < pdfValue1824;
        ___pdfY++
      )
        if (
          !pdfParam124.contains(
            pdfValue514.getRangeAt(___pdfY).commonAncestorContainer,
          )
        )
          return null;
      let {
          x: __pdfY,
          y: y,
          width: width,
          height: height,
        } = pdfParam124.getBoundingClientRect(),
        pdfValue515;
      switch (pdfParam124.getAttribute(`data-main-rotation`)) {
        case `90`:
          pdfValue515 = (
            pdfParam1412,
            pdfParam1413,
            pdfParam1414,
            pdfParam1415,
          ) => ({
            x: (pdfParam1413 - y) / height,
            y: 1 - (pdfParam1412 + pdfParam1414 - __pdfY) / width,
            width: pdfParam1415 / height,
            height: pdfParam1414 / width,
          });
          break;
        case `180`:
          pdfValue515 = (
            pdfParam1364,
            pdfParam1365,
            pdfParam1366,
            pdfParam1367,
          ) => ({
            x: 1 - (pdfParam1364 + pdfParam1366 - __pdfY) / width,
            y: 1 - (pdfParam1365 + pdfParam1367 - y) / height,
            width: pdfParam1366 / width,
            height: pdfParam1367 / height,
          });
          break;
        case `270`:
          pdfValue515 = (
            pdfParam1416,
            pdfParam1417,
            pdfParam1418,
            pdfParam1419,
          ) => ({
            x: 1 - (pdfParam1417 + pdfParam1419 - y) / height,
            y: (pdfParam1416 - __pdfY) / width,
            width: pdfParam1419 / height,
            height: pdfParam1418 / width,
          });
          break;
        default:
          pdfValue515 = (
            pdfParam1467,
            pdfParam1468,
            pdfParam1469,
            pdfParam1470,
          ) => ({
            x: (pdfParam1467 - __pdfY) / width,
            y: (pdfParam1468 - y) / height,
            width: pdfParam1469 / width,
            height: pdfParam1470 / height,
          });
          break;
      }
      let pdfValue516 = [];
      for (
        let pdfValue1580 = 0, ___pdfY = pdfValue514.rangeCount;
        pdfValue1580 < ___pdfY;
        pdfValue1580++
      ) {
        let ____pdfY = pdfValue514.getRangeAt(pdfValue1580);
        if (!____pdfY.collapsed)
          for (let {
            x: x,
            y: _y,
            width: _width,
            height: _height,
          } of ____pdfY.getClientRects())
            _width === 0 ||
              _height === 0 ||
              pdfValue516.push(pdfValue515(x, _y, _width, _height));
      }
      return pdfValue516.length === 0 ? null : pdfValue516;
    }
    addChangedExistingAnnotation({
      annotationElementId: annotationElementId,
      id: id,
    }) {
      (this.#s ||= new Map()).set(annotationElementId, id);
    }
    removeChangedExistingAnnotation({
      annotationElementId: annotationElementId,
    }) {
      this.#s?.delete(annotationElementId);
    }
    renderAnnotationElement(pdfParam675) {
      let pdfValue1545 = this.#s?.get(pdfParam675.data.id);
      if (!pdfValue1545) return;
      let __pdfY = this.#o.getRawValue(pdfValue1545);
      __pdfY &&
        ((this.#F === pdfI.NONE && !__pdfY.hasBeenModified) ||
          __pdfY.renderAnnotationElement(pdfParam675));
    }
    setMissingCanvas(pdfParam1196, pdfParam1197, __pdfY) {
      let pdfValue1917 = this.#N?.get(pdfParam1196);
      pdfValue1917 &&
        (pdfValue1917.setCanvas(pdfParam1197, __pdfY),
        this.#N.delete(pdfParam1196));
    }
    addMissingCanvas(pdfParam1519, pdfParam1520) {
      (this.#N ||= new Map()).set(pdfParam1519, pdfParam1520);
    }
  },
  pdfValue30 = class PdfClass13 {
    #e = null;
    #t = !1;
    #n = null;
    #r = null;
    #i = null;
    #a = null;
    #o = !1;
    #s = null;
    #c = null;
    #l = null;
    #u = null;
    #d = !1;
    static #f = null;
    static _l10n = null;
    constructor(pdfParam300) {
      ((this.#c = pdfParam300),
        (this.#d = pdfParam300._uiManager.useNewAltTextFlow),
        (PdfClass13.#f ||= Object.freeze({
          added: `pdfjs-editor-new-alt-text-added-button`,
          "added-label": `pdfjs-editor-new-alt-text-added-button-label`,
          missing: `pdfjs-editor-new-alt-text-missing-button`,
          "missing-label": `pdfjs-editor-new-alt-text-missing-button-label`,
          review: `pdfjs-editor-new-alt-text-to-review-button`,
          "review-label": `pdfjs-editor-new-alt-text-to-review-button-label`,
        })));
    }
    static initialize(pdfParam1672) {
      PdfClass13._l10n ??= pdfParam1672;
    }
    async render() {
      let pdfValue468 = (this.#n = document.createElement(`button`));
      ((pdfValue468.className = `altText`), (pdfValue468.tabIndex = `0`));
      let __pdfY = (this.#r = document.createElement(`span`));
      (pdfValue468.append(__pdfY),
        this.#d
          ? (pdfValue468.classList.add(`new`),
            pdfValue468.setAttribute(`data-l10n-id`, PdfClass13.#f.missing),
            __pdfY.setAttribute(`data-l10n-id`, PdfClass13.#f[`missing-label`]))
          : (pdfValue468.setAttribute(
              `data-l10n-id`,
              `pdfjs-editor-alt-text-button`,
            ),
            __pdfY.setAttribute(
              `data-l10n-id`,
              `pdfjs-editor-alt-text-button-label`,
            )));
      let pdfValue469 = this.#c._uiManager._signal;
      (pdfValue468.addEventListener(`contextmenu`, _pdfQ, {
        signal: pdfValue469,
      }),
        pdfValue468.addEventListener(
          `pointerdown`,
          (event) => event.stopPropagation(),
          {
            signal: pdfValue469,
          },
        ));
      let pdfValue470 = (event) => {
        (event.preventDefault(),
          this.#c._uiManager.editAltText(this.#c),
          this.#d &&
            this.#c._reportTelemetry({
              action: `pdfjs.image.alt_text.image_status_label_clicked`,
              data: {
                label: this.#p,
              },
            }));
      };
      return (
        pdfValue468.addEventListener(`click`, pdfValue470, {
          capture: !0,
          signal: pdfValue469,
        }),
        pdfValue468.addEventListener(
          `keydown`,
          (event) => {
            event.target === pdfValue468 &&
              event.key === `Enter` &&
              ((this.#o = !0), pdfValue470(event));
          },
          {
            signal: pdfValue469,
          },
        ),
        await this.#m(),
        pdfValue468
      );
    }
    get #p() {
      return (
        (this.#e && `added`) ||
        (this.#e === null && this.guessedText && `review`) ||
        `missing`
      );
    }
    finish() {
      this.#n &&
        (this.#n.focus({
          focusVisible: this.#o,
        }),
        (this.#o = !1));
    }
    isEmpty() {
      return this.#d ? this.#e === null : !this.#e && !this.#t;
    }
    hasData() {
      return this.#d ? this.#e !== null || !!this.#l : this.isEmpty();
    }
    get guessedText() {
      return this.#l;
    }
    async setGuessedText(pdfParam666) {
      this.#e === null &&
        ((this.#l = pdfParam666),
        (this.#u = await PdfClass13._l10n.get(
          `pdfjs-editor-new-alt-text-generated-alt-text-with-disclaimer`,
          {
            generatedAltText: pdfParam666,
          },
        )),
        this.#m());
    }
    toggleAltTextBadge(pdfParam539 = !1) {
      if (!this.#d || this.#e) {
        (this.#s?.remove(), (this.#s = null));
        return;
      }
      if (!this.#s) {
        let pdfValue1859 = (this.#s = document.createElement(`div`));
        ((pdfValue1859.className = `noAltTextBadge`),
          this.#c.div.append(pdfValue1859));
      }
      this.#s.classList.toggle(`hidden`, !pdfParam539);
    }
    serialize(pdfParam830) {
      let pdfValue1645 = this.#e;
      return (
        !pdfParam830 && this.#l === pdfValue1645 && (pdfValue1645 = this.#u),
        {
          altText: pdfValue1645,
          decorative: this.#t,
          guessedText: this.#l,
          textWithDisclaimer: this.#u,
        }
      );
    }
    get data() {
      return {
        altText: this.#e,
        decorative: this.#t,
      };
    }
    set data({
      altText: altText,
      decorative: decorative,
      guessedText: __pdfY,
      textWithDisclaimer: textWithDisclaimer,
      cancel = !1,
    }) {
      (__pdfY && ((this.#l = __pdfY), (this.#u = textWithDisclaimer)),
        !(this.#e === altText && this.#t === decorative) &&
          (cancel || ((this.#e = altText), (this.#t = decorative)), this.#m()));
    }
    toggle(pdfParam1116 = !1) {
      this.#n &&
        (!pdfParam1116 && this.#a && (clearTimeout(this.#a), (this.#a = null)),
        (this.#n.disabled = !pdfParam1116));
    }
    shown() {
      this.#c._reportTelemetry({
        action: `pdfjs.image.alt_text.image_status_label_displayed`,
        data: {
          label: this.#p,
        },
      });
    }
    destroy() {
      (this.#n?.remove(),
        (this.#n = null),
        (this.#r = null),
        (this.#i = null),
        this.#s?.remove(),
        (this.#s = null));
    }
    async #m() {
      let pdfValue342 = this.#n;
      if (!pdfValue342) return;
      if (this.#d) {
        if (
          (pdfValue342.classList.toggle(`done`, !!this.#e),
          pdfValue342.setAttribute(`data-l10n-id`, PdfClass13.#f[this.#p]),
          this.#r?.setAttribute(
            `data-l10n-id`,
            PdfClass13.#f[`${this.#p}-label`],
          ),
          !this.#e)
        ) {
          this.#i?.remove();
          return;
        }
      } else {
        if (!this.#e && !this.#t) {
          (pdfValue342.classList.remove(`done`), this.#i?.remove());
          return;
        }
        (pdfValue342.classList.add(`done`),
          pdfValue342.setAttribute(
            `data-l10n-id`,
            `pdfjs-editor-alt-text-edit-button`,
          ));
      }
      let __pdfY = this.#i;
      if (!__pdfY) {
        ((this.#i = __pdfY = document.createElement(`span`)),
          (__pdfY.className = `tooltip`),
          __pdfY.setAttribute(`role`, `tooltip`),
          (__pdfY.id = `alt-text-tooltip-${this.#c.id}`));
        let pdfValue747 = this.#c._uiManager._signal;
        (pdfValue747.addEventListener(
          `abort`,
          () => {
            (clearTimeout(this.#a), (this.#a = null));
          },
          {
            once: !0,
          },
        ),
          pdfValue342.addEventListener(
            `mouseenter`,
            () => {
              this.#a = setTimeout(() => {
                ((this.#a = null),
                  this.#i.classList.add(`show`),
                  this.#c._reportTelemetry({
                    action: `alt_text_tooltip`,
                  }));
              }, 100);
            },
            {
              signal: pdfValue747,
            },
          ),
          pdfValue342.addEventListener(
            `mouseleave`,
            () => {
              ((this.#a &&= (clearTimeout(this.#a), null)),
                this.#i?.classList.remove(`show`));
            },
            {
              signal: pdfValue747,
            },
          ));
      }
      (this.#t
        ? __pdfY.setAttribute(
            `data-l10n-id`,
            `pdfjs-editor-alt-text-decorative-tooltip`,
          )
        : (__pdfY.removeAttribute(`data-l10n-id`),
          (__pdfY.textContent = this.#e)),
        __pdfY.parentNode || pdfValue342.append(__pdfY),
        this.#c
          .getElementForAltText()
          ?.setAttribute(`aria-describedby`, __pdfY.id));
    }
  },
  at = class {
    #e = null;
    #t = null;
    #n = !1;
    #r = null;
    #i = null;
    #a = null;
    #o = null;
    #s = null;
    #c = !1;
    #l = null;
    constructor(pdfParam1702) {
      this.#r = pdfParam1702;
    }
    renderForToolbar() {
      let pdfValue1791 = (this.#t = document.createElement(`button`));
      return ((pdfValue1791.className = `comment`), this.#u(pdfValue1791, !1));
    }
    renderForStandalone() {
      let pdfValue936 = (this.#e = document.createElement(`button`));
      pdfValue936.className = `annotationCommentButton`;
      let pdfValue937 = this.#r.commentButtonPosition;
      if (pdfValue937) {
        let { style: __pdfY } = pdfValue936;
        ((__pdfY.insetInlineEnd = `calc(${100 * (this.#r._uiManager.direction === `ltr` ? 1 - pdfValue937[0] : pdfValue937[0])}% - var(--comment-button-dim))`),
          (__pdfY.top = `calc(${100 * pdfValue937[1]}% - var(--comment-button-dim))`));
        let pdfValue1338 = this.#r.commentButtonColor;
        pdfValue1338 && (__pdfY.backgroundColor = pdfValue1338);
      }
      return this.#u(pdfValue936, !0);
    }
    focusButton() {
      setTimeout(() => {
        (this.#e ?? this.#t)?.focus();
      }, 0);
    }
    onUpdatedColor() {
      if (!this.#e) return;
      let pdfValue1616 = this.#r.commentButtonColor;
      (pdfValue1616 && (this.#e.style.backgroundColor = pdfValue1616),
        this.#r._uiManager.updatePopupColor(this.#r));
    }
    get commentButtonWidth() {
      return (
        (this.#e?.getBoundingClientRect().width ?? 0) /
        this.#r.parent.boundingClientRect.width
      );
    }
    get commentPopupPositionInLayer() {
      if (this.#l) return this.#l;
      if (!this.#e) return null;
      let { x: x, y: y, height: __pdfY } = this.#e.getBoundingClientRect(),
        {
          x: _x,
          y: _y,
          width: width,
          height: height,
        } = this.#r.parent.boundingClientRect;
      return [(x - _x) / width, (y + __pdfY - _y) / height];
    }
    set commentPopupPositionInLayer(pdfParam1566) {
      this.#l = pdfParam1566;
    }
    hasDefaultPopupPosition() {
      return this.#l === null;
    }
    removeStandaloneCommentButton() {
      (this.#e?.remove(), (this.#e = null));
    }
    removeToolbarCommentButton() {
      (this.#t?.remove(), (this.#t = null));
    }
    setCommentButtonStates({ selected: selected, hasPopup: hasPopup }) {
      this.#e &&
        (this.#e.classList.toggle(`selected`, selected),
        (this.#e.ariaExpanded = hasPopup));
    }
    #u(pdfParam41, pdfParam42) {
      if (!this.#r._uiManager.hasCommentManager()) return null;
      ((pdfParam41.tabIndex = `0`),
        (pdfParam41.ariaHasPopup = `dialog`),
        pdfParam42
          ? ((pdfParam41.ariaControls = `commentPopup`),
            pdfParam41.setAttribute(
              `data-l10n-id`,
              `pdfjs-show-comment-button`,
            ))
          : ((pdfParam41.ariaControlsElements = [
              this.#r._uiManager.getCommentDialogElement(),
            ]),
            pdfParam41.setAttribute(
              `data-l10n-id`,
              `pdfjs-editor-edit-comment-button`,
            )));
      let __pdfY = this.#r._uiManager._signal;
      if (!(__pdfY instanceof AbortSignal) || __pdfY.aborted) return pdfParam41;
      (pdfParam41.addEventListener(`contextmenu`, _pdfQ, {
        signal: __pdfY,
      }),
        pdfParam42 &&
          (pdfParam41.addEventListener(
            `focusin`,
            (pdfParam1608) => {
              ((this.#r._focusEventsAllowed = !1), pdfDollar(pdfParam1608));
            },
            {
              capture: !0,
              signal: __pdfY,
            },
          ),
          pdfParam41.addEventListener(
            `focusout`,
            (pdfParam1609) => {
              ((this.#r._focusEventsAllowed = !0), pdfDollar(pdfParam1609));
            },
            {
              capture: !0,
              signal: __pdfY,
            },
          )),
        pdfParam41.addEventListener(
          `pointerdown`,
          (event) => event.stopPropagation(),
          {
            signal: __pdfY,
          },
        ));
      let pdfValue378 = (event) => {
        (event.preventDefault(),
          pdfParam41 === this.#t ? this.edit() : this.#r.toggleComment(!0));
      };
      return (
        pdfParam41.addEventListener(`click`, pdfValue378, {
          capture: !0,
          signal: __pdfY,
        }),
        pdfParam41.addEventListener(
          `keydown`,
          (event) => {
            event.target === pdfParam41 &&
              event.key === `Enter` &&
              ((this.#n = !0), pdfValue378(event));
          },
          {
            signal: __pdfY,
          },
        ),
        pdfParam41.addEventListener(
          `pointerenter`,
          () => {
            this.#r.toggleComment(!1, !0);
          },
          {
            signal: __pdfY,
          },
        ),
        pdfParam41.addEventListener(
          `pointerleave`,
          () => {
            this.#r.toggleComment(!1, !1);
          },
          {
            signal: __pdfY,
          },
        ),
        pdfParam41
      );
    }
    edit(pdfParam412) {
      let pdfValue1131 = this.commentPopupPositionInLayer,
        __pdfY,
        pdfValue1132;
      if (pdfValue1131) [__pdfY, pdfValue1132] = pdfValue1131;
      else {
        [__pdfY, pdfValue1132] = this.#r.commentButtonPosition;
        let { width: _width, height: height, x: _x, y: _y } = this.#r;
        ((__pdfY = _x + __pdfY * _width),
          (pdfValue1132 = _y + pdfValue1132 * height));
      }
      let pdfValue1133 = this.#r.parent.boundingClientRect,
        { x: x, y: y, width: width, height: __pdfS } = pdfValue1133;
      this.#r._uiManager.editComment(
        this.#r,
        x + __pdfY * width,
        y + pdfValue1132 * __pdfS,
        {
          ...pdfParam412,
          parentDimensions: pdfValue1133,
        },
      );
    }
    finish() {
      this.#t &&
        (this.#t.focus({
          focusVisible: this.#n,
        }),
        (this.#n = !1));
    }
    isDeleted() {
      return this.#c || this.#o === ``;
    }
    isEmpty() {
      return this.#o === null;
    }
    hasBeenEdited() {
      return this.isDeleted() || this.#o !== this.#i;
    }
    serialize() {
      return this.data;
    }
    get data() {
      return {
        text: this.#o,
        richText: this.#a,
        date: this.#s,
        deleted: this.isDeleted(),
      };
    }
    set data(pdfParam936) {
      if ((pdfParam936 !== this.#o && (this.#a = null), pdfParam936 === null)) {
        ((this.#o = ``), (this.#c = !0));
        return;
      }
      ((this.#o = pdfParam936), (this.#s = new Date()), (this.#c = !1));
    }
    setInitialText(pdfParam1312, pdfParam1313 = null) {
      ((this.#i = pdfParam1312),
        (this.data = pdfParam1312),
        (this.#s = null),
        (this.#a = pdfParam1313));
    }
    shown() {}
    destroy() {
      (this.#t?.remove(),
        (this.#t = null),
        this.#e?.remove(),
        (this.#e = null),
        (this.#o = ``),
        (this.#a = null),
        (this.#s = null),
        (this.#r = null),
        (this.#n = !1),
        (this.#c = !1));
    }
  },
  pdfK = class PdfClass24 {
    #e;
    #t = !1;
    #n = null;
    #r;
    #i;
    #a;
    #o;
    #s = null;
    #c;
    #l = null;
    #u;
    #d = null;
    constructor({
      container: container,
      isPinchingDisabled = null,
      isPinchingStopped: __pdfY = null,
      onPinchStart = null,
      onPinching = null,
      onPinchEnd = null,
      signal: signal,
    }) {
      ((this.#e = container),
        (this.#n = __pdfY),
        (this.#r = isPinchingDisabled),
        (this.#i = onPinchStart),
        (this.#a = onPinching),
        (this.#o = onPinchEnd),
        (this.#u = new AbortController()),
        (this.#c = AbortSignal.any([signal, this.#u.signal])),
        container.addEventListener(`touchstart`, this.#f.bind(this), {
          passive: !1,
          signal: this.#c,
        }));
    }
    get MIN_TOUCH_DISTANCE_TO_PINCH() {
      return 35 / pdfUnderscore.pixelRatio;
    }
    #f(event) {
      if (this.#r?.()) return;
      if (event.touches.length === 1) {
        if (this.#s) return;
        let pdfValue1007 = (this.#s = new AbortController()),
          pdfValue1008 = AbortSignal.any([this.#c, pdfValue1007.signal]),
          ___pdfY = this.#e,
          pdfValue1009 = {
            capture: !0,
            signal: pdfValue1008,
            passive: !1,
          },
          pdfValue1010 = (_event) => {
            _event.pointerType === `touch` &&
              (this.#s?.abort(), (this.#s = null));
          };
        (___pdfY.addEventListener(
          `pointerdown`,
          (_event) => {
            _event.pointerType === `touch` &&
              (pdfDollar(_event), pdfValue1010(_event));
          },
          pdfValue1009,
        ),
          ___pdfY.addEventListener(`pointerup`, pdfValue1010, pdfValue1009),
          ___pdfY.addEventListener(
            `pointercancel`,
            pdfValue1010,
            pdfValue1009,
          ));
        return;
      }
      if (!this.#d) {
        this.#d = new AbortController();
        let pdfValue858 = AbortSignal.any([this.#c, this.#d.signal]),
          pdfValue859 = this.#e,
          ___pdfY = {
            signal: pdfValue858,
            capture: !1,
            passive: !1,
          };
        pdfValue859.addEventListener(`touchmove`, this.#p.bind(this), ___pdfY);
        let pdfValue860 = this.#m.bind(this);
        (pdfValue859.addEventListener(`touchend`, pdfValue860, ___pdfY),
          pdfValue859.addEventListener(`touchcancel`, pdfValue860, ___pdfY),
          (___pdfY.capture = !0),
          pdfValue859.addEventListener(`pointerdown`, pdfDollar, ___pdfY),
          pdfValue859.addEventListener(`pointermove`, pdfDollar, ___pdfY),
          pdfValue859.addEventListener(`pointercancel`, pdfDollar, ___pdfY),
          pdfValue859.addEventListener(`pointerup`, pdfDollar, ___pdfY),
          this.#i?.());
      }
      if ((pdfDollar(event), event.touches.length !== 2 || this.#n?.())) {
        this.#l = null;
        return;
      }
      let [pdfValue387, __pdfY] = event.touches;
      (pdfValue387.identifier > __pdfY.identifier &&
        ([pdfValue387, __pdfY] = [__pdfY, pdfValue387]),
        (this.#l = {
          touch0X: pdfValue387.screenX,
          touch0Y: pdfValue387.screenY,
          touch1X: __pdfY.screenX,
          touch1Y: __pdfY.screenY,
        }));
    }
    #p(event) {
      if (!this.#l || event.touches.length !== 2) return;
      pdfDollar(event);
      let [__pdfY, pdfValue848] = event.touches;
      __pdfY.identifier > pdfValue848.identifier &&
        ([__pdfY, pdfValue848] = [pdfValue848, __pdfY]);
      let { screenX: screenX, screenY: screenY } = __pdfY,
        { screenX: _screenX, screenY: _screenY } = pdfValue848,
        __pdfS = this.#l,
        {
          touch0X: touch0X,
          touch0Y: __pdfI,
          touch1X: __pdfR,
          touch1Y: ___pdfS,
        } = __pdfS,
        pdfValue849 = __pdfR - touch0X,
        _pdfNt = ___pdfS - __pdfI,
        __pdfC = _screenX - screenX,
        pdfValue850 = _screenY - screenY,
        __pdfJ = Math.hypot(__pdfC, pdfValue850) || 1,
        __pdfG = Math.hypot(pdfValue849, _pdfNt) || 1;
      if (
        !this.#t &&
        Math.abs(__pdfG - __pdfJ) <= PdfClass24.MIN_TOUCH_DISTANCE_TO_PINCH
      )
        return;
      if (
        ((__pdfS.touch0X = screenX),
        (__pdfS.touch0Y = screenY),
        (__pdfS.touch1X = _screenX),
        (__pdfS.touch1Y = _screenY),
        !this.#t)
      ) {
        this.#t = !0;
        return;
      }
      let pdfValue851 = [(screenX + _screenX) / 2, (screenY + _screenY) / 2];
      this.#a?.(pdfValue851, __pdfG, __pdfJ);
    }
    #m(event) {
      event.touches.length >= 2 ||
        (this.#d && (this.#d.abort(), (this.#d = null), this.#o?.()),
        this.#l && (pdfDollar(event), (this.#l = null), (this.#t = !1)));
    }
    destroy() {
      (this.#u?.abort(), (this.#u = null), this.#s?.abort(), (this.#s = null));
    }
  },
  pdfValue31 = class PdfClass2 {
    #e = null;
    #t = null;
    #n = null;
    #r = null;
    #i = null;
    #a = !1;
    #o = null;
    #s = ``;
    #c = null;
    #l = null;
    #u = null;
    #d = null;
    #f = null;
    #p = ``;
    #m = !1;
    #h = null;
    #g = !1;
    #_ = !1;
    #v = !1;
    #y = null;
    #b = 0;
    #x = 0;
    #S = null;
    #C = null;
    isSelected = !1;
    _isCopy = !1;
    _editToolbar = null;
    _initialOptions = Object.create(null);
    _initialData = null;
    _isVisible = !0;
    _uiManager = null;
    _focusEventsAllowed = !0;
    static _l10n = null;
    static _l10nResizer = null;
    #w = !1;
    #T = PdfClass2._zIndex++;
    static _borderLineWidth = -1;
    static _colorManager = new pdfValue29();
    static _zIndex = 1;
    static _telemetryTimeout = 1e3;
    static get _resizerKeyboardManager() {
      let pdfValue631 = PdfClass2.prototype._resizeWithKeyboard,
        __pdfY = _pdfA.TRANSLATE_SMALL,
        pdfValue632 = _pdfA.TRANSLATE_BIG;
      return pdfQ(
        this,
        `_resizerKeyboardManager`,
        new pdfValue28([
          [
            [`ArrowLeft`, `mac+ArrowLeft`],
            pdfValue631,
            {
              args: [-__pdfY, 0],
            },
          ],
          [
            [`ctrl+ArrowLeft`, `mac+shift+ArrowLeft`],
            pdfValue631,
            {
              args: [-pdfValue632, 0],
            },
          ],
          [
            [`ArrowRight`, `mac+ArrowRight`],
            pdfValue631,
            {
              args: [__pdfY, 0],
            },
          ],
          [
            [`ctrl+ArrowRight`, `mac+shift+ArrowRight`],
            pdfValue631,
            {
              args: [pdfValue632, 0],
            },
          ],
          [
            [`ArrowUp`, `mac+ArrowUp`],
            pdfValue631,
            {
              args: [0, -__pdfY],
            },
          ],
          [
            [`ctrl+ArrowUp`, `mac+shift+ArrowUp`],
            pdfValue631,
            {
              args: [0, -pdfValue632],
            },
          ],
          [
            [`ArrowDown`, `mac+ArrowDown`],
            pdfValue631,
            {
              args: [0, __pdfY],
            },
          ],
          [
            [`ctrl+ArrowDown`, `mac+shift+ArrowDown`],
            pdfValue631,
            {
              args: [0, pdfValue632],
            },
          ],
          [
            [`Escape`, `mac+Escape`],
            PdfClass2.prototype._stopResizingWithKeyboard,
          ],
        ]),
      );
    }
    constructor(pdfParam130) {
      ((this.parent = pdfParam130.parent),
        (this.id = pdfParam130.id),
        (this.width = this.height = null),
        (this.pageIndex = pdfParam130.parent.pageIndex),
        (this.name = pdfParam130.name),
        (this.div = null),
        (this._uiManager = pdfParam130.uiManager),
        (this.annotationElementId = null),
        (this._willKeepAspectRatio = !1),
        (this._initialOptions.isCentered = pdfParam130.isCentered),
        (this._structTreeParentId = null),
        (this.annotationElementId = pdfParam130.annotationElementId || null),
        (this.creationDate = pdfParam130.creationDate || new Date()),
        (this.modificationDate = pdfParam130.modificationDate || null));
      let {
        rotation: rotation,
        rawDims: {
          pageWidth: __pdfY,
          pageHeight: pageHeight,
          pageX: pageX,
          pageY: pageY,
        },
      } = this.parent.viewport;
      ((this.rotation = rotation),
        (this.pageRotation =
          (360 + rotation - this._uiManager.viewParameters.rotation) % 360),
        (this.pageDimensions = [__pdfY, pageHeight]),
        (this.pageTranslation = [pageX, pageY]));
      let [pdfValue534, pdfValue535] = this.parentDimensions;
      ((this.x = pdfParam130.x / pdfValue534),
        (this.y = pdfParam130.y / pdfValue535),
        (this.isAttachedToDOM = !1),
        (this.deleted = !1));
    }
    get editorType() {
      return Object.getPrototypeOf(this).constructor._type;
    }
    get mode() {
      return Object.getPrototypeOf(this).constructor._editorType;
    }
    static get isDrawer() {
      return !1;
    }
    static get _defaultLineColor() {
      return pdfQ(
        this,
        `_defaultLineColor`,
        this._colorManager.getHexCode(`CanvasText`),
      );
    }
    static deleteAnnotationElement(pdfParam580) {
      let pdfValue1420 = new pdfValue32({
        id: pdfParam580.parent.getNextId(),
        parent: pdfParam580.parent,
        uiManager: pdfParam580._uiManager,
      });
      ((pdfValue1420.annotationElementId = pdfParam580.annotationElementId),
        (pdfValue1420.deleted = !0),
        pdfValue1420._uiManager.addToAnnotationStorage(pdfValue1420));
    }
    static initialize(pdfParam207, __pdfY) {
      if (
        ((PdfClass2._l10n ??= pdfParam207),
        (PdfClass2._l10nResizer ||= Object.freeze({
          topLeft: `pdfjs-editor-resizer-top-left`,
          topMiddle: `pdfjs-editor-resizer-top-middle`,
          topRight: `pdfjs-editor-resizer-top-right`,
          middleRight: `pdfjs-editor-resizer-middle-right`,
          bottomRight: `pdfjs-editor-resizer-bottom-right`,
          bottomMiddle: `pdfjs-editor-resizer-bottom-middle`,
          bottomLeft: `pdfjs-editor-resizer-bottom-left`,
          middleLeft: `pdfjs-editor-resizer-middle-left`,
        })),
        PdfClass2._borderLineWidth !== -1)
      )
        return;
      let pdfValue706 = getComputedStyle(document.documentElement);
      PdfClass2._borderLineWidth =
        parseFloat(pdfValue706.getPropertyValue(`--outline-width`)) || 0;
    }
    static updateDefaultParams(pdfParam1673, pdfParam1674) {}
    static get defaultPropertiesToUpdate() {
      return [];
    }
    static isHandlingMimeForPasting(pdfParam1575) {
      return !1;
    }
    static paste(pdfParam1613, pdfParam1614) {
      pdfHelper5(`Not implemented`);
    }
    get propertiesToUpdate() {
      return [];
    }
    get _isDraggable() {
      return this.#w;
    }
    set _isDraggable(pdfParam1296) {
      ((this.#w = pdfParam1296),
        this.div?.classList.toggle(`draggable`, pdfParam1296));
    }
    get uid() {
      return this.annotationElementId || this.id;
    }
    get isEnterHandled() {
      return !0;
    }
    center() {
      let [pdfValue1047, pdfValue1048] = this.pageDimensions;
      switch (this.parentRotation) {
        case 90:
          ((this.x -= (this.height * pdfValue1048) / (pdfValue1047 * 2)),
            (this.y += (this.width * pdfValue1047) / (pdfValue1048 * 2)));
          break;
        case 180:
          ((this.x += this.width / 2), (this.y += this.height / 2));
          break;
        case 270:
          ((this.x += (this.height * pdfValue1048) / (pdfValue1047 * 2)),
            (this.y -= (this.width * pdfValue1047) / (pdfValue1048 * 2)));
          break;
        default:
          ((this.x -= this.width / 2), (this.y -= this.height / 2));
          break;
      }
      this.fixAndSetPosition();
    }
    addCommands(pdfParam1555) {
      this._uiManager.addCommands(pdfParam1555);
    }
    get currentLayer() {
      return this._uiManager.currentLayer;
    }
    setInBackground() {
      this.div.style.zIndex = 0;
    }
    setInForeground() {
      this.div.style.zIndex = this.#T;
    }
    setParent(pdfParam801) {
      (pdfParam801 === null
        ? (this.#W(), this.#d?.remove(), (this.#d = null))
        : ((this.pageIndex = pdfParam801.pageIndex),
          (this.pageDimensions = pdfParam801.pageDimensions)),
        (this.parent = pdfParam801));
    }
    focusin(pdfParam1178) {
      this._focusEventsAllowed &&
        (this.#m ? (this.#m = !1) : this.parent.setSelected(this));
    }
    focusout(event) {
      this._focusEventsAllowed &&
        this.isAttachedToDOM &&
        (event.relatedTarget?.closest(`#${this.id}`) ||
          (event.preventDefault(),
          this.parent?.isMultipleSelection || this.commitOrRemove()));
    }
    commitOrRemove() {
      this.isEmpty() ? this.remove() : this.commit();
    }
    commit() {
      this.isInEditMode() && this.addToAnnotationStorage();
    }
    addToAnnotationStorage() {
      this._uiManager.addToAnnotationStorage(this);
    }
    setAt(pdfParam826, pdfParam827, __pdfY, pdfParam828) {
      let [pdfValue1643, pdfValue1644] = this.parentDimensions;
      (([__pdfY, pdfParam828] = this.screenToPageTranslation(
        __pdfY,
        pdfParam828,
      )),
        (this.x = (pdfParam826 + __pdfY) / pdfValue1643),
        (this.y = (pdfParam827 + pdfParam828) / pdfValue1644),
        this.fixAndSetPosition());
    }
    _moveAfterPaste(pdfParam937, pdfParam938) {
      let [__pdfY, pdfValue1736] = this.parentDimensions;
      (this.setAt(
        pdfParam937 * __pdfY,
        pdfParam938 * pdfValue1736,
        this.width * __pdfY,
        this.height * pdfValue1736,
      ),
        this._onTranslated());
    }
    #E([pdfParam844, pdfParam845], __pdfY, pdfParam846) {
      (([__pdfY, pdfParam846] = this.screenToPageTranslation(
        __pdfY,
        pdfParam846,
      )),
        (this.x += __pdfY / pdfParam844),
        (this.y += pdfParam846 / pdfParam845),
        this._onTranslating(this.x, this.y),
        this.fixAndSetPosition());
    }
    translate(pdfParam1529, pdfParam1530) {
      this.#E(this.parentDimensions, pdfParam1529, pdfParam1530);
    }
    translateInPage(pdfParam799, pdfParam800) {
      ((this.#h ||= [this.x, this.y, this.width, this.height]),
        this.#E(this.pageDimensions, pdfParam799, pdfParam800),
        this.div.scrollIntoView({
          block: `nearest`,
        }));
    }
    translationDone() {
      this._onTranslated(this.x, this.y);
    }
    drag(pdfParam252, pdfParam253) {
      this.#h ||= [this.x, this.y, this.width, this.height];
      let {
        div: __pdfY,
        parentDimensions: [pdfValue787, pdfValue788],
      } = this;
      if (
        ((this.x += pdfParam252 / pdfValue787),
        (this.y += pdfParam253 / pdfValue788),
        this.parent && (this.x < 0 || this.x > 1 || this.y < 0 || this.y > 1))
      ) {
        let { x: _x, y: _y } = this.div.getBoundingClientRect();
        this.parent.findNewParent(this, _x, _y) &&
          ((this.x -= Math.floor(this.x)), (this.y -= Math.floor(this.y)));
      }
      let { x: x, y: y } = this,
        [pdfValue789, __pdfS] = this.getBaseTranslation();
      ((x += pdfValue789), (y += __pdfS));
      let { style: style } = __pdfY;
      ((style.left = `${(100 * x).toFixed(2)}%`),
        (style.top = `${(100 * y).toFixed(2)}%`),
        this._onTranslating(x, y),
        __pdfY.scrollIntoView({
          block: `nearest`,
        }));
    }
    _onTranslating(pdfParam1717, pdfParam1718) {}
    _onTranslated(pdfParam1721, pdfParam1722) {}
    get _hasBeenMoved() {
      return !!this.#h && (this.#h[0] !== this.x || this.#h[1] !== this.y);
    }
    get _hasBeenResized() {
      return (
        !!this.#h && (this.#h[2] !== this.width || this.#h[3] !== this.height)
      );
    }
    getBaseTranslation() {
      let [pdfValue1460, __pdfY] = this.parentDimensions,
        { _borderLineWidth: _borderLineWidth } = PdfClass2,
        pdfValue1461 = _borderLineWidth / pdfValue1460,
        pdfValue1462 = _borderLineWidth / __pdfY;
      switch (this.rotation) {
        case 90:
          return [-pdfValue1461, pdfValue1462];
        case 180:
          return [pdfValue1461, pdfValue1462];
        case 270:
          return [pdfValue1461, -pdfValue1462];
        default:
          return [-pdfValue1461, -pdfValue1462];
      }
    }
    get _mustFixPosition() {
      return !0;
    }
    fixAndSetPosition(pdfParam277 = this.rotation) {
      let {
          div: { style: style },
          pageDimensions: [__pdfY, pdfValue846],
        } = this,
        { x: x, y: y, width: width, height: height } = this;
      if (
        ((width *= __pdfY),
        (height *= pdfValue846),
        (x *= __pdfY),
        (y *= pdfValue846),
        this._mustFixPosition)
      )
        switch (pdfParam277) {
          case 0:
            ((x = _pdfH(x, 0, __pdfY - width)),
              (y = _pdfH(y, 0, pdfValue846 - height)));
            break;
          case 90:
            ((x = _pdfH(x, 0, __pdfY - height)),
              (y = _pdfH(y, width, pdfValue846)));
            break;
          case 180:
            ((x = _pdfH(x, width, __pdfY)),
              (y = _pdfH(y, height, pdfValue846)));
            break;
          case 270:
            ((x = _pdfH(x, height, __pdfY)),
              (y = _pdfH(y, 0, pdfValue846 - width)));
            break;
        }
      ((this.x = x /= __pdfY), (this.y = y /= pdfValue846));
      let [__pdfS, pdfValue847] = this.getBaseTranslation();
      ((x += __pdfS),
        (y += pdfValue847),
        (style.left = `${(100 * x).toFixed(2)}%`),
        (style.top = `${(100 * y).toFixed(2)}%`),
        this.moveInDOM());
    }
    static #D(pdfParam981, pdfParam982, __pdfY) {
      switch (__pdfY) {
        case 90:
          return [pdfParam982, -pdfParam981];
        case 180:
          return [-pdfParam981, -pdfParam982];
        case 270:
          return [-pdfParam982, pdfParam981];
        default:
          return [pdfParam981, pdfParam982];
      }
    }
    screenToPageTranslation(pdfParam1346, __pdfY) {
      return PdfClass2.#D(pdfParam1346, __pdfY, this.parentRotation);
    }
    pageTranslationToScreen(pdfParam1314, __pdfY) {
      return PdfClass2.#D(pdfParam1314, __pdfY, 360 - this.parentRotation);
    }
    #O(pdfParam632) {
      switch (pdfParam632) {
        case 90: {
          let [pdfValue2148, pdfValue2149] = this.pageDimensions;
          return [
            0,
            -pdfValue2148 / pdfValue2149,
            pdfValue2149 / pdfValue2148,
            0,
          ];
        }
        case 180:
          return [-1, 0, 0, -1];
        case 270: {
          let [pdfValue2150, pdfValue2151] = this.pageDimensions;
          return [
            0,
            pdfValue2150 / pdfValue2151,
            -pdfValue2151 / pdfValue2150,
            0,
          ];
        }
        default:
          return [1, 0, 0, 1];
      }
    }
    get parentScale() {
      return this._uiManager.viewParameters.realScale;
    }
    get parentRotation() {
      return (
        (this._uiManager.viewParameters.rotation + this.pageRotation) % 360
      );
    }
    get parentDimensions() {
      let {
        parentScale: parentScale,
        pageDimensions: [pdfValue1929, __pdfY],
      } = this;
      return [pdfValue1929 * parentScale, __pdfY * parentScale];
    }
    setDims() {
      let {
        div: { style: style },
        width: width,
        height: __pdfY,
      } = this;
      ((style.width = `${(100 * width).toFixed(2)}%`),
        (style.height = `${(100 * __pdfY).toFixed(2)}%`));
    }
    getInitialTranslation() {
      return [0, 0];
    }
    #k() {
      if (this.#c) return;
      ((this.#c = document.createElement(`div`)),
        this.#c.classList.add(`resizers`));
      let pdfValue702 = this._willKeepAspectRatio
          ? [`topLeft`, `topRight`, `bottomRight`, `bottomLeft`]
          : [
              `topLeft`,
              `topMiddle`,
              `topRight`,
              `middleRight`,
              `bottomRight`,
              `bottomMiddle`,
              `bottomLeft`,
              `middleLeft`,
            ],
        pdfValue703 = this._uiManager._signal;
      for (let __pdfY of pdfValue702) {
        let pdfValue1314 = document.createElement(`div`);
        (this.#c.append(pdfValue1314),
          pdfValue1314.classList.add(`resizer`, __pdfY),
          pdfValue1314.setAttribute(`data-resizer-name`, __pdfY),
          pdfValue1314.addEventListener(
            `pointerdown`,
            this.#A.bind(this, __pdfY),
            {
              signal: pdfValue703,
            },
          ),
          pdfValue1314.addEventListener(`contextmenu`, _pdfQ, {
            signal: pdfValue703,
          }),
          (pdfValue1314.tabIndex = -1));
      }
      this.div.prepend(this.#c);
    }
    #A(pdfParam72, event) {
      event.preventDefault();
      let { isMac: __pdfY } = pdfTt.platform;
      if (event.button !== 0 || (event.ctrlKey && __pdfY)) return;
      this.#n?.toggle(!1);
      let pdfValue431 = this._isDraggable;
      ((this._isDraggable = !1), (this.#l = [event.screenX, event.screenY]));
      let pdfValue432 = new AbortController(),
        pdfValue433 = this._uiManager.combinedSignal(pdfValue432);
      (this.parent.togglePointerEvents(!1),
        window.addEventListener(`pointermove`, this.#N.bind(this, pdfParam72), {
          passive: !0,
          capture: !0,
          signal: pdfValue433,
        }),
        window.addEventListener(`touchmove`, pdfDollar, {
          passive: !1,
          signal: pdfValue433,
        }),
        window.addEventListener(`contextmenu`, _pdfQ, {
          signal: pdfValue433,
        }),
        (this.#u = {
          savedX: this.x,
          savedY: this.y,
          savedWidth: this.width,
          savedHeight: this.height,
        }));
      let pdfValue434 = this.parent.div.style.cursor,
        pdfValue435 = this.div.style.cursor;
      this.div.style.cursor = this.parent.div.style.cursor =
        window.getComputedStyle(event.target).cursor;
      let __pdfS = () => {
        (pdfValue432.abort(),
          this.parent.togglePointerEvents(!0),
          this.#n?.toggle(!0),
          (this._isDraggable = pdfValue431),
          (this.parent.div.style.cursor = pdfValue434),
          (this.div.style.cursor = pdfValue435),
          this.#M());
      };
      (window.addEventListener(`pointerup`, __pdfS, {
        signal: pdfValue433,
      }),
        window.addEventListener(`blur`, __pdfS, {
          signal: pdfValue433,
        }));
    }
    #j(pdfParam967, pdfParam968, __pdfY, pdfParam969) {
      ((this.width = __pdfY),
        (this.height = pdfParam969),
        (this.x = pdfParam967),
        (this.y = pdfParam968),
        this.setDims(),
        this.fixAndSetPosition(),
        this._onResized());
    }
    _onResized() {}
    #M() {
      if (!this.#u) return;
      let {
        savedX: savedX,
        savedY: savedY,
        savedWidth: __pdfY,
        savedHeight: savedHeight,
      } = this.#u;
      this.#u = null;
      let pdfValue1241 = this.x,
        pdfValue1242 = this.y,
        pdfValue1243 = this.width,
        pdfValue1244 = this.height;
      (pdfValue1241 === savedX &&
        pdfValue1242 === savedY &&
        pdfValue1243 === __pdfY &&
        pdfValue1244 === savedHeight) ||
        this.addCommands({
          cmd: this.#j.bind(
            this,
            pdfValue1241,
            pdfValue1242,
            pdfValue1243,
            pdfValue1244,
          ),
          undo: this.#j.bind(this, savedX, savedY, __pdfY, savedHeight),
          mustExec: !0,
        });
    }
    static _round(pdfParam1556) {
      return Math.round(pdfParam1556 * 1e4) / 1e4;
    }
    #N(pdfParam16, __pdfY) {
      let [pdfValue290, pdfValue291] = this.parentDimensions,
        pdfValue292 = this.x,
        pdfValue293 = this.y,
        pdfValue294 = this.width,
        __pdfS = this.height,
        pdfValue295 = PdfClass2.MIN_SIZE / pdfValue290,
        __pdfI = PdfClass2.MIN_SIZE / pdfValue291,
        __pdfR = this.#O(this.rotation),
        ___pdfS = (pdfParam1639, pdfParam1640) => [
          __pdfR[0] * pdfParam1639 + __pdfR[2] * pdfParam1640,
          __pdfR[1] * pdfParam1639 + __pdfR[3] * pdfParam1640,
        ],
        pdfValue296 = this.#O(360 - this.rotation),
        _pdfNt = (pdfParam1641, pdfParam1642) => [
          pdfValue296[0] * pdfParam1641 + pdfValue296[2] * pdfParam1642,
          pdfValue296[1] * pdfParam1641 + pdfValue296[3] * pdfParam1642,
        ],
        __pdfC,
        pdfValue297,
        __pdfJ = !1,
        __pdfG = !1;
      switch (pdfParam16) {
        case `topLeft`:
          ((__pdfJ = !0),
            (__pdfC = (pdfParam1756, pdfParam1757) => [0, 0]),
            (pdfValue297 = (pdfParam1758, pdfParam1759) => [
              pdfParam1758,
              pdfParam1759,
            ]));
          break;
        case `topMiddle`:
          ((__pdfC = (pdfParam1735, pdfParam1736) => [pdfParam1735 / 2, 0]),
            (pdfValue297 = (pdfParam1737, pdfParam1738) => [
              pdfParam1737 / 2,
              pdfParam1738,
            ]));
          break;
        case `topRight`:
          ((__pdfJ = !0),
            (__pdfC = (pdfParam1760, pdfParam1761) => [pdfParam1760, 0]),
            (pdfValue297 = (pdfParam1762, pdfParam1763) => [0, pdfParam1763]));
          break;
        case `middleRight`:
          ((__pdfG = !0),
            (__pdfC = (pdfParam1739, pdfParam1740) => [
              pdfParam1739,
              pdfParam1740 / 2,
            ]),
            (pdfValue297 = (pdfParam1741, pdfParam1742) => [
              0,
              pdfParam1742 / 2,
            ]));
          break;
        case `bottomRight`:
          ((__pdfJ = !0),
            (__pdfC = (pdfParam1764, pdfParam1765) => [
              pdfParam1764,
              pdfParam1765,
            ]),
            (pdfValue297 = (pdfParam1766, pdfParam1767) => [0, 0]));
          break;
        case `bottomMiddle`:
          ((__pdfC = (pdfParam1743, pdfParam1744) => [
            pdfParam1743 / 2,
            pdfParam1744,
          ]),
            (pdfValue297 = (pdfParam1745, pdfParam1746) => [
              pdfParam1745 / 2,
              0,
            ]));
          break;
        case `bottomLeft`:
          ((__pdfJ = !0),
            (__pdfC = (pdfParam1768, pdfParam1769) => [0, pdfParam1769]),
            (pdfValue297 = (pdfParam1770, pdfParam1771) => [pdfParam1770, 0]));
          break;
        case `middleLeft`:
          ((__pdfG = !0),
            (__pdfC = (pdfParam1747, pdfParam1748) => [0, pdfParam1748 / 2]),
            (pdfValue297 = (pdfParam1749, pdfParam1750) => [
              pdfParam1749,
              pdfParam1750 / 2,
            ]));
          break;
      }
      let pdfValue298 = __pdfC(pdfValue294, __pdfS),
        __pdfX = pdfValue297(pdfValue294, __pdfS),
        pdfValue299 = ___pdfS(...__pdfX),
        pdfValue300 = PdfClass2._round(pdfValue292 + pdfValue299[0]),
        pdfValue301 = PdfClass2._round(pdfValue293 + pdfValue299[1]),
        pdfValue302 = 1,
        pdfValue303 = 1,
        deltaX,
        deltaY;
      if (__pdfY.fromKeyboard) ({ deltaX: deltaX, deltaY: deltaY } = __pdfY);
      else {
        let { screenX: screenX, screenY: screenY } = __pdfY,
          [pdfValue1771, pdfValue1772] = this.#l;
        (([deltaX, deltaY] = this.screenToPageTranslation(
          screenX - pdfValue1771,
          screenY - pdfValue1772,
        )),
          (this.#l[0] = screenX),
          (this.#l[1] = screenY));
      }
      if (
        (([deltaX, deltaY] = _pdfNt(
          deltaX / pdfValue290,
          deltaY / pdfValue291,
        )),
        __pdfJ)
      ) {
        let pdfValue1837 = Math.hypot(pdfValue294, __pdfS);
        pdfValue302 = pdfValue303 = Math.max(
          Math.min(
            Math.hypot(
              __pdfX[0] - pdfValue298[0] - deltaX,
              __pdfX[1] - pdfValue298[1] - deltaY,
            ) / pdfValue1837,
            1 / pdfValue294,
            1 / __pdfS,
          ),
          pdfValue295 / pdfValue294,
          __pdfI / __pdfS,
        );
      } else
        __pdfG
          ? (pdfValue302 =
              _pdfH(
                Math.abs(__pdfX[0] - pdfValue298[0] - deltaX),
                pdfValue295,
                1,
              ) / pdfValue294)
          : (pdfValue303 =
              _pdfH(Math.abs(__pdfX[1] - pdfValue298[1] - deltaY), __pdfI, 1) /
              __pdfS);
      let pdfValue304 = PdfClass2._round(pdfValue294 * pdfValue302),
        __pdfF = PdfClass2._round(__pdfS * pdfValue303);
      pdfValue299 = ___pdfS(...pdfValue297(pdfValue304, __pdfF));
      let _pdfEt = pdfValue300 - pdfValue299[0],
        __pdfQ = pdfValue301 - pdfValue299[1];
      ((this.#h ||= [this.x, this.y, this.width, this.height]),
        (this.width = pdfValue304),
        (this.height = __pdfF),
        (this.x = _pdfEt),
        (this.y = __pdfQ),
        this.setDims(),
        this.fixAndSetPosition(),
        this._onResizing());
    }
    _onResizing() {}
    altTextFinish() {
      this.#n?.finish();
    }
    get toolbarButtons() {
      return null;
    }
    async addEditToolbar() {
      if (this._editToolbar || this.#_) return this._editToolbar;
      ((this._editToolbar = new pdfValue24(this)),
        this.div.append(this._editToolbar.render()));
      let { toolbarButtons: toolbarButtons } = this;
      if (toolbarButtons)
        for (let [pdfValue2122, __pdfY] of toolbarButtons)
          await this._editToolbar.addButton(pdfValue2122, __pdfY);
      return (
        this.hasComment ||
          this._editToolbar.addButton(`comment`, this.addCommentButton()),
        this._editToolbar.addButton(`delete`),
        this._editToolbar
      );
    }
    addCommentButtonInToolbar() {
      this._editToolbar?.addButtonBefore(
        `comment`,
        this.addCommentButton(),
        `.deleteButton`,
      );
    }
    removeCommentButtonFromToolbar() {
      this._editToolbar?.removeButton(`comment`);
    }
    removeEditToolbar() {
      (this._editToolbar?.remove(),
        (this._editToolbar = null),
        this.#n?.destroy());
    }
    addContainer(pdfParam1255) {
      let pdfValue1972 = this._editToolbar?.div;
      pdfValue1972
        ? pdfValue1972.before(pdfParam1255)
        : this.div.append(pdfParam1255);
    }
    getClientDimensions() {
      return this.div.getBoundingClientRect();
    }
    createAltText() {
      return (
        this.#n ||
          (pdfValue30.initialize(PdfClass2._l10n),
          (this.#n = new pdfValue30(this)),
          (this.#e &&= ((this.#n.data = this.#e), null))),
        this.#n
      );
    }
    get altTextData() {
      return this.#n?.data;
    }
    set altTextData(pdfParam1567) {
      this.#n && (this.#n.data = pdfParam1567);
    }
    get guessedAltText() {
      return this.#n?.guessedText;
    }
    async setGuessedAltText(pdfParam1402) {
      await this.#n?.setGuessedText(pdfParam1402);
    }
    serializeAltText(pdfParam1536) {
      return this.#n?.serialize(pdfParam1536);
    }
    hasAltText() {
      return !!this.#n && !this.#n.isEmpty();
    }
    hasAltTextData() {
      return this.#n?.hasData() ?? !1;
    }
    focusCommentButton() {
      this.#r?.focusButton();
    }
    addCommentButton() {
      return (this.#r ||= new at(this));
    }
    addStandaloneCommentButton() {
      if (this.#i) {
        this._uiManager.isEditingMode() && this.#i.classList.remove(`hidden`);
        return;
      }
      this.hasComment &&
        ((this.#i = this.#r.renderForStandalone()), this.div.append(this.#i));
    }
    removeStandaloneCommentButton() {
      (this.#r.removeStandaloneCommentButton(), (this.#i = null));
    }
    hideStandaloneCommentButton() {
      this.#i?.classList.add(`hidden`);
    }
    get comment() {
      let {
        data: {
          richText: richText,
          text: text,
          date: __pdfY,
          deleted: deleted,
        },
      } = this.#r;
      return {
        text: text,
        richText: richText,
        date: __pdfY,
        deleted: deleted,
        color: this.getNonHCMColor(),
        opacity: this.opacity ?? 1,
      };
    }
    set comment(pdfParam448) {
      ((this.#r ||= new at(this)),
        (this.#r.data = pdfParam448),
        this.hasComment
          ? (this.removeCommentButtonFromToolbar(),
            this.addStandaloneCommentButton(),
            this._uiManager.updateComment(this))
          : (this.addCommentButtonInToolbar(),
            this.removeStandaloneCommentButton(),
            this._uiManager.removeComment(this)));
    }
    setCommentData({ comment: comment, popupRef: popupRef, richText: __pdfY }) {
      if (
        !popupRef ||
        ((this.#r ||= new at(this)),
        this.#r.setInitialText(comment, __pdfY),
        !this.annotationElementId)
      )
        return;
      let pdfValue1249 = this._uiManager.getAndRemoveDataFromAnnotationStorage(
        this.annotationElementId,
      );
      pdfValue1249 && this.updateFromAnnotationLayer(pdfValue1249);
    }
    get hasEditedComment() {
      return this.#r?.hasBeenEdited();
    }
    get hasDeletedComment() {
      return this.#r?.isDeleted();
    }
    get hasComment() {
      return !!this.#r && !this.#r.isEmpty() && !this.#r.isDeleted();
    }
    async editComment(pdfParam1403) {
      ((this.#r ||= new at(this)), this.#r.edit(pdfParam1403));
    }
    toggleComment(pdfParam1218, pdfParam1219 = void 0) {
      this.hasComment &&
        this._uiManager.toggleComment(this, pdfParam1218, pdfParam1219);
    }
    setSelectedCommentButton(pdfParam1449) {
      this.#r.setSelectedButton(pdfParam1449);
    }
    addComment(pdfParam576) {
      if (this.hasEditedComment) {
        let [, , , pdfValue1537] = pdfParam576.rect,
          [__pdfY] = this.pageDimensions,
          [pdfValue1538] = this.pageTranslation,
          pdfValue1539 = pdfValue1538 + __pdfY + 1,
          pdfValue1540 = pdfValue1537 - 100,
          pdfValue1541 = pdfValue1539 + 180;
        pdfParam576.popup = {
          contents: this.comment.text,
          deleted: this.comment.deleted,
          rect: [pdfValue1539, pdfValue1540, pdfValue1541, pdfValue1537],
        };
      }
    }
    updateFromAnnotationLayer({
      popup: { contents: contents, deleted: deleted },
    }) {
      this.#r.data = deleted ? null : contents;
    }
    get parentBoundingClientRect() {
      return this.parent.boundingClientRect;
    }
    render() {
      let pdfValue445 = (this.div = document.createElement(`div`));
      (pdfValue445.setAttribute(
        `data-editor-rotation`,
        (360 - this.rotation) % 360,
      ),
        (pdfValue445.className = this.name),
        pdfValue445.setAttribute(`id`, this.id),
        (pdfValue445.tabIndex = this.#a ? -1 : 0),
        pdfValue445.setAttribute(`role`, `application`),
        this.defaultL10nId &&
          pdfValue445.setAttribute(`data-l10n-id`, this.defaultL10nId),
        this._isVisible || pdfValue445.classList.add(`hidden`),
        this.setInForeground(),
        this.#z());
      let [pdfValue446, __pdfY] = this.parentDimensions;
      this.parentRotation % 180 != 0 &&
        ((pdfValue445.style.maxWidth = `${((100 * __pdfY) / pdfValue446).toFixed(2)}%`),
        (pdfValue445.style.maxHeight = `${((100 * pdfValue446) / __pdfY).toFixed(2)}%`));
      let [pdfValue447, pdfValue448] = this.getInitialTranslation();
      return (
        this.translate(pdfValue447, pdfValue448),
        pdfHelper25(this, pdfValue445, [`keydown`, `pointerdown`, `dblclick`]),
        this.isResizable &&
          this._uiManager._supportsPinchToZoom &&
          (this.#C ||= new pdfK({
            container: pdfValue445,
            isPinchingDisabled: () => !this.isSelected,
            onPinchStart: this.#P.bind(this),
            onPinching: this.#F.bind(this),
            onPinchEnd: this.#I.bind(this),
            signal: this._uiManager._signal,
          })),
        this.addStandaloneCommentButton(),
        this._uiManager._editorUndoBar?.hide(),
        pdfValue445
      );
    }
    #P() {
      ((this.#u = {
        savedX: this.x,
        savedY: this.y,
        savedWidth: this.width,
        savedHeight: this.height,
      }),
        this.#n?.toggle(!1),
        this.parent.togglePointerEvents(!1));
    }
    #F(pdfParam248, __pdfY, pdfParam249) {
      let pdfValue775 = 0.7,
        pdfValue776 = (pdfParam249 / __pdfY) * pdfValue775 + 1 - pdfValue775;
      if (pdfValue776 === 1) return;
      let pdfValue777 = this.#O(this.rotation),
        pdfValue778 = (pdfParam1643, pdfParam1644) => [
          pdfValue777[0] * pdfParam1643 + pdfValue777[2] * pdfParam1644,
          pdfValue777[1] * pdfParam1643 + pdfValue777[3] * pdfParam1644,
        ],
        [__pdfS, pdfValue779] = this.parentDimensions,
        __pdfI = this.x,
        __pdfR = this.y,
        ___pdfS = this.width,
        pdfValue780 = this.height,
        _pdfNt = PdfClass2.MIN_SIZE / __pdfS,
        __pdfC = PdfClass2.MIN_SIZE / pdfValue779;
      pdfValue776 = Math.max(
        Math.min(pdfValue776, 1 / ___pdfS, 1 / pdfValue780),
        _pdfNt / ___pdfS,
        __pdfC / pdfValue780,
      );
      let pdfValue781 = PdfClass2._round(___pdfS * pdfValue776),
        __pdfJ = PdfClass2._round(pdfValue780 * pdfValue776);
      if (pdfValue781 === ___pdfS && __pdfJ === pdfValue780) return;
      this.#h ||= [__pdfI, __pdfR, ___pdfS, pdfValue780];
      let __pdfG = pdfValue778(___pdfS / 2, pdfValue780 / 2),
        pdfValue782 = PdfClass2._round(__pdfI + __pdfG[0]),
        __pdfX = PdfClass2._round(__pdfR + __pdfG[1]),
        pdfValue783 = pdfValue778(pdfValue781 / 2, __pdfJ / 2);
      ((this.x = pdfValue782 - pdfValue783[0]),
        (this.y = __pdfX - pdfValue783[1]),
        (this.width = pdfValue781),
        (this.height = __pdfJ),
        this.setDims(),
        this.fixAndSetPosition(),
        this._onResizing());
    }
    #I() {
      (this.#n?.toggle(!0), this.parent.togglePointerEvents(!0), this.#M());
    }
    pointerdown(event) {
      let { isMac: isMac } = pdfTt.platform;
      if (event.button !== 0 || (event.ctrlKey && isMac)) {
        event.preventDefault();
        return;
      }
      if (((this.#m = !0), this._isDraggable)) {
        this.#R(event);
        return;
      }
      this.#L(event);
    }
    #L(event) {
      let { isMac: isMac } = pdfTt.platform;
      (event.ctrlKey && !isMac) || event.shiftKey || (event.metaKey && isMac)
        ? this.parent.toggleSelected(this)
        : this.parent.setSelected(this);
    }
    #R(event) {
      let { isSelected: isSelected } = this;
      this._uiManager.setUpDragSession();
      let __pdfY = !1,
        pdfValue440 = new AbortController(),
        pdfValue441 = this._uiManager.combinedSignal(pdfValue440),
        pdfValue442 = {
          capture: !0,
          passive: !1,
          signal: pdfValue441,
        },
        pdfValue443 = (pdfParam1012) => {
          (pdfValue440.abort(),
            (this.#o = null),
            (this.#m = !1),
            this._uiManager.endDragSession() || this.#L(pdfParam1012),
            __pdfY && this._onStopDragging());
        };
      isSelected &&
        ((this.#b = event.clientX),
        (this.#x = event.clientY),
        (this.#o = event.pointerId),
        (this.#s = event.pointerType),
        window.addEventListener(
          `pointermove`,
          (pdfParam484) => {
            __pdfY ||
              ((__pdfY = !0),
              this._uiManager.toggleComment(this, !0, !1),
              this._onStartDragging());
            let {
              clientX: clientX,
              clientY: clientY,
              pointerId: pointerId,
            } = pdfParam484;
            if (pointerId !== this.#o) {
              pdfDollar(pdfParam484);
              return;
            }
            let [pdfValue1245, pdfValue1246] = this.screenToPageTranslation(
              clientX - this.#b,
              clientY - this.#x,
            );
            ((this.#b = clientX),
              (this.#x = clientY),
              this._uiManager.dragSelectedEditors(pdfValue1245, pdfValue1246));
          },
          pdfValue442,
        ),
        window.addEventListener(`touchmove`, pdfDollar, pdfValue442),
        window.addEventListener(
          `pointerdown`,
          (_event) => {
            (_event.pointerType === this.#s &&
              (this.#C || _event.isPrimary) &&
              pdfValue443(_event),
              pdfDollar(_event));
          },
          pdfValue442,
        ));
      let pdfValue444 = (_event) => {
        if (!this.#o || this.#o === _event.pointerId) {
          pdfValue443(_event);
          return;
        }
        pdfDollar(_event);
      };
      (window.addEventListener(`pointerup`, pdfValue444, {
        signal: pdfValue441,
      }),
        window.addEventListener(`blur`, pdfValue444, {
          signal: pdfValue441,
        }));
    }
    _onStartDragging() {}
    _onStopDragging() {}
    moveInDOM() {
      (this.#y && clearTimeout(this.#y),
        (this.#y = setTimeout(() => {
          ((this.#y = null), this.parent?.moveEditorInDOM(this));
        }, 0)));
    }
    _setParentAndPosition(pdfParam976, pdfParam977, __pdfY) {
      (pdfParam976.changeParent(this),
        (this.x = pdfParam977),
        (this.y = __pdfY),
        this.fixAndSetPosition(),
        this._onTranslated());
    }
    getRect(pdfParam311, pdfParam312, __pdfY = this.rotation) {
      let pdfValue925 = this.parentScale,
        [pdfValue926, pdfValue927] = this.pageDimensions,
        [pdfValue928, pdfValue929] = this.pageTranslation,
        __pdfS = pdfParam311 / pdfValue925,
        pdfValue930 = pdfParam312 / pdfValue925,
        __pdfI = this.x * pdfValue926,
        __pdfR = this.y * pdfValue927,
        ___pdfS = this.width * pdfValue926,
        pdfValue931 = this.height * pdfValue927;
      switch (__pdfY) {
        case 0:
          return [
            __pdfI + __pdfS + pdfValue928,
            pdfValue927 - __pdfR - pdfValue930 - pdfValue931 + pdfValue929,
            __pdfI + __pdfS + ___pdfS + pdfValue928,
            pdfValue927 - __pdfR - pdfValue930 + pdfValue929,
          ];
        case 90:
          return [
            __pdfI + pdfValue930 + pdfValue928,
            pdfValue927 - __pdfR + __pdfS + pdfValue929,
            __pdfI + pdfValue930 + pdfValue931 + pdfValue928,
            pdfValue927 - __pdfR + __pdfS + ___pdfS + pdfValue929,
          ];
        case 180:
          return [
            __pdfI - __pdfS - ___pdfS + pdfValue928,
            pdfValue927 - __pdfR + pdfValue930 + pdfValue929,
            __pdfI - __pdfS + pdfValue928,
            pdfValue927 - __pdfR + pdfValue930 + pdfValue931 + pdfValue929,
          ];
        case 270:
          return [
            __pdfI - pdfValue930 - pdfValue931 + pdfValue928,
            pdfValue927 - __pdfR - __pdfS - ___pdfS + pdfValue929,
            __pdfI - pdfValue930 + pdfValue928,
            pdfValue927 - __pdfR - __pdfS + pdfValue929,
          ];
        default:
          throw Error(`Invalid rotation`);
      }
    }
    getRectInCurrentCoords(pdfParam553, pdfParam554) {
      let [__pdfY, pdfValue1395, pdfValue1396, pdfValue1397] = pdfParam553,
        pdfValue1398 = pdfValue1396 - __pdfY,
        pdfValue1399 = pdfValue1397 - pdfValue1395;
      switch (this.rotation) {
        case 0:
          return [
            __pdfY,
            pdfParam554 - pdfValue1397,
            pdfValue1398,
            pdfValue1399,
          ];
        case 90:
          return [
            __pdfY,
            pdfParam554 - pdfValue1395,
            pdfValue1399,
            pdfValue1398,
          ];
        case 180:
          return [
            pdfValue1396,
            pdfParam554 - pdfValue1395,
            pdfValue1398,
            pdfValue1399,
          ];
        case 270:
          return [
            pdfValue1396,
            pdfParam554 - pdfValue1397,
            pdfValue1399,
            pdfValue1398,
          ];
        default:
          throw Error(`Invalid rotation`);
      }
    }
    getPDFRect() {
      return this.getRect(0, 0);
    }
    getNonHCMColor() {
      return (
        this.color &&
        PdfClass2._colorManager.convert(
          this._uiManager.getNonHCMColor(this.color),
        )
      );
    }
    onUpdatedColor() {
      this.#r?.onUpdatedColor();
    }
    getData() {
      let {
        comment: {
          text: text,
          color: color,
          date: __pdfY,
          opacity: opacity,
          deleted: deleted,
          richText: richText,
        },
        uid: uid,
        pageIndex: pageIndex,
        creationDate: __pdfS,
        modificationDate: modificationDate,
      } = this;
      return {
        id: uid,
        pageIndex: pageIndex,
        rect: this.getPDFRect(),
        richText: richText,
        contentsObj: {
          str: text,
        },
        creationDate: __pdfS,
        modificationDate: __pdfY || modificationDate,
        popupRef: !deleted,
        color: color,
        opacity: opacity,
      };
    }
    onceAdded(pdfParam1751) {}
    isEmpty() {
      return !1;
    }
    enableEditMode() {
      return this.isInEditMode()
        ? !1
        : (this.parent.setEditingState(!1), (this.#_ = !0), !0);
    }
    disableEditMode() {
      return this.isInEditMode()
        ? (this.parent.setEditingState(!0), (this.#_ = !1), !0)
        : !1;
    }
    isInEditMode() {
      return this.#_;
    }
    shouldGetKeyboardEvents() {
      return this.#v;
    }
    needsToBeRebuilt() {
      return this.div && !this.isAttachedToDOM;
    }
    get isOnScreen() {
      let {
          top: top,
          left: left,
          bottom: __pdfY,
          right: right,
        } = this.getClientDimensions(),
        { innerHeight: innerHeight, innerWidth: innerWidth } = window;
      return left < innerWidth && right > 0 && top < innerHeight && __pdfY > 0;
    }
    #z() {
      if (this.#f || !this.div) return;
      this.#f = new AbortController();
      let pdfValue1299 = this._uiManager.combinedSignal(this.#f);
      (this.div.addEventListener(`focusin`, this.focusin.bind(this), {
        signal: pdfValue1299,
      }),
        this.div.addEventListener(`focusout`, this.focusout.bind(this), {
          signal: pdfValue1299,
        }));
    }
    rebuild() {
      this.#z();
    }
    rotate(pdfParam1772) {}
    resize() {}
    serializeDeleted() {
      return {
        id: this.annotationElementId,
        deleted: !0,
        pageIndex: this.pageIndex,
        popupRef: this._initialData?.popupRef || ``,
      };
    }
    serialize(pdfParam577 = !1, pdfParam578 = null) {
      return {
        annotationType: this.mode,
        pageIndex: this.pageIndex,
        rect: this.getPDFRect(),
        rotation: this.rotation,
        structTreeParentId: this._structTreeParentId,
        popupRef: this._initialData?.popupRef || ``,
      };
    }
    static async deserialize(pdfParam316, pdfParam317, __pdfY) {
      let pdfValue940 = new this.prototype.constructor({
        parent: pdfParam317,
        id: pdfParam317.getNextId(),
        uiManager: __pdfY,
        annotationElementId: pdfParam316.annotationElementId,
        creationDate: pdfParam316.creationDate,
        modificationDate: pdfParam316.modificationDate,
      });
      ((pdfValue940.rotation = pdfParam316.rotation),
        (pdfValue940.#e = pdfParam316.accessibilityData),
        (pdfValue940._isCopy = pdfParam316.isCopy || !1));
      let [pdfValue941, pdfValue942] = pdfValue940.pageDimensions,
        [pdfValue943, pdfValue944, __pdfS, pdfValue945] =
          pdfValue940.getRectInCurrentCoords(pdfParam316.rect, pdfValue942);
      return (
        (pdfValue940.x = pdfValue943 / pdfValue941),
        (pdfValue940.y = pdfValue944 / pdfValue942),
        (pdfValue940.width = __pdfS / pdfValue941),
        (pdfValue940.height = pdfValue945 / pdfValue942),
        pdfValue940
      );
    }
    get hasBeenModified() {
      return (
        !!this.annotationElementId &&
        (this.deleted || this.serialize() !== null)
      );
    }
    remove() {
      if (
        (this.#f?.abort(),
        (this.#f = null),
        this.isEmpty() || this.commit(),
        this.parent
          ? this.parent.remove(this)
          : this._uiManager.removeEditor(this),
        (this.#y &&= (clearTimeout(this.#y), null)),
        this.#W(),
        this.removeEditToolbar(),
        this.#S)
      ) {
        for (let pdfValue2179 of this.#S.values()) clearTimeout(pdfValue2179);
        this.#S = null;
      }
      ((this.parent = null), this.#C?.destroy(), (this.#C = null));
    }
    get isResizable() {
      return !1;
    }
    makeResizable() {
      this.isResizable && (this.#k(), this.#c.classList.remove(`hidden`));
    }
    get toolbarPosition() {
      return null;
    }
    get commentButtonPosition() {
      return this._uiManager.direction === `ltr` ? [1, 0] : [0, 0];
    }
    get commentButtonPositionInPage() {
      let {
          commentButtonPosition: [pdfValue1608, __pdfY],
        } = this,
        [pdfValue1609, pdfValue1610, pdfValue1611, pdfValue1612] =
          this.getPDFRect();
      return [
        PdfClass2._round(
          pdfValue1609 + (pdfValue1611 - pdfValue1609) * pdfValue1608,
        ),
        PdfClass2._round(
          pdfValue1610 + (pdfValue1612 - pdfValue1610) * (1 - __pdfY),
        ),
      ];
    }
    get commentButtonColor() {
      return this._uiManager.makeCommentColor(
        this.getNonHCMColor(),
        this.opacity,
      );
    }
    get commentPopupPosition() {
      return this.#r.commentPopupPositionInLayer;
    }
    set commentPopupPosition(pdfParam1347) {
      this.#r.commentPopupPositionInLayer = pdfParam1347;
    }
    hasDefaultPopupPosition() {
      return this.#r.hasDefaultPopupPosition();
    }
    get commentButtonWidth() {
      return this.#r.commentButtonWidth;
    }
    get elementBeforePopup() {
      return this.div;
    }
    setCommentButtonStates(pdfParam1404) {
      this.#r.setCommentButtonStates(pdfParam1404);
    }
    keydown(event) {
      if (
        !this.isResizable ||
        event.target !== this.div ||
        event.key !== `Enter`
      )
        return;
      (this._uiManager.setSelected(this),
        (this.#u = {
          savedX: this.x,
          savedY: this.y,
          savedWidth: this.width,
          savedHeight: this.height,
        }));
      let __pdfY = this.#c.children;
      if (!this.#t) {
        this.#t = Array.from(__pdfY);
        let pdfValue979 = this.#B.bind(this),
          pdfValue980 = this.#V.bind(this),
          pdfValue981 = this._uiManager._signal;
        for (let ___pdfY of this.#t) {
          let pdfValue1233 = ___pdfY.getAttribute(`data-resizer-name`);
          (___pdfY.setAttribute(`role`, `spinbutton`),
            ___pdfY.addEventListener(`keydown`, pdfValue979, {
              signal: pdfValue981,
            }),
            ___pdfY.addEventListener(`blur`, pdfValue980, {
              signal: pdfValue981,
            }),
            ___pdfY.addEventListener(
              `focus`,
              this.#H.bind(this, pdfValue1233),
              {
                signal: pdfValue981,
              },
            ),
            ___pdfY.setAttribute(
              `data-l10n-id`,
              PdfClass2._l10nResizer[pdfValue1233],
            ));
        }
      }
      let pdfValue373 = this.#t[0],
        pdfValue374 = 0;
      for (let pdfValue2229 of __pdfY) {
        if (pdfValue2229 === pdfValue373) break;
        pdfValue374++;
      }
      let pdfValue375 =
        (((360 - this.rotation + this.parentRotation) % 360) / 90) *
        (this.#t.length / 4);
      if (pdfValue375 !== pdfValue374) {
        if (pdfValue375 < pdfValue374)
          for (
            let pdfValue2111 = 0;
            pdfValue2111 < pdfValue374 - pdfValue375;
            pdfValue2111++
          )
            this.#c.append(this.#c.firstChild);
        else if (pdfValue375 > pdfValue374)
          for (
            let pdfValue2038 = 0;
            pdfValue2038 < pdfValue375 - pdfValue374;
            pdfValue2038++
          )
            this.#c.firstChild.before(this.#c.lastChild);
        let pdfValue1234 = 0;
        for (let pdfValue1742 of __pdfY) {
          let ___pdfY =
            this.#t[pdfValue1234++].getAttribute(`data-resizer-name`);
          pdfValue1742.setAttribute(
            `data-l10n-id`,
            PdfClass2._l10nResizer[___pdfY],
          );
        }
      }
      (this.#U(0),
        (this.#v = !0),
        this.#c.firstChild.focus({
          focusVisible: !0,
        }),
        event.preventDefault(),
        event.stopImmediatePropagation());
    }
    #B(pdfParam1568) {
      PdfClass2._resizerKeyboardManager.exec(this, pdfParam1568);
    }
    #V(event) {
      this.#v && event.relatedTarget?.parentNode !== this.#c && this.#W();
    }
    #H(pdfParam1695) {
      this.#p = this.#v ? pdfParam1695 : ``;
    }
    #U(pdfParam1521) {
      if (this.#t)
        for (let pdfValue2235 of this.#t) pdfValue2235.tabIndex = pdfParam1521;
    }
    _resizeWithKeyboard(pdfParam1186, pdfParam1187) {
      this.#v &&
        this.#N(this.#p, {
          deltaX: pdfParam1186,
          deltaY: pdfParam1187,
          fromKeyboard: !0,
        });
    }
    #W() {
      ((this.#v = !1), this.#U(-1), this.#M());
    }
    _stopResizingWithKeyboard() {
      (this.#W(), this.div.focus());
    }
    select() {
      if (this.isSelected && this._editToolbar) {
        this._editToolbar.show();
        return;
      }
      if (
        ((this.isSelected = !0),
        this.makeResizable(),
        this.div?.classList.add(`selectedEditor`),
        !this._editToolbar)
      ) {
        this.addEditToolbar().then(() => {
          this.div?.classList.contains(`selectedEditor`) &&
            this._editToolbar?.show();
        });
        return;
      }
      (this._editToolbar?.show(), this.#n?.toggleAltTextBadge(!1));
    }
    focus() {
      this.div &&
        !this.div.contains(document.activeElement) &&
        setTimeout(
          () =>
            this.div?.focus({
              preventScroll: !0,
            }),
          0,
        );
    }
    unselect() {
      this.isSelected &&
        ((this.isSelected = !1),
        this.#c?.classList.add(`hidden`),
        this.div?.classList.remove(`selectedEditor`),
        this.div?.contains(document.activeElement) &&
          this._uiManager.currentLayer.div.focus({
            preventScroll: !0,
          }),
        this._editToolbar?.hide(),
        this.#n?.toggleAltTextBadge(!0),
        this.hasComment && this._uiManager.toggleComment(this, !1, !1));
    }
    updateParams(pdfParam1723, pdfParam1724) {}
    disableEditing() {}
    enableEditing() {}
    get canChangeContent() {
      return !1;
    }
    enterInEditMode() {
      this.canChangeContent && (this.enableEditMode(), this.div.focus());
    }
    dblclick(event) {
      event.target.nodeName !== `BUTTON` &&
        (this.enterInEditMode(),
        this.parent.updateToolbar({
          mode: this.constructor._editorType,
          editId: this.id,
        }));
    }
    getElementForAltText() {
      return this.div;
    }
    get contentDiv() {
      return this.div;
    }
    get isEditing() {
      return this.#g;
    }
    set isEditing(pdfParam813) {
      ((this.#g = pdfParam813),
        this.parent &&
          (pdfParam813
            ? (this.parent.setSelected(this), this.parent.setActiveEditor(this))
            : this.parent.setActiveEditor(null)));
    }
    static get MIN_SIZE() {
      return 16;
    }
    static canCreateNewEmptyEditor() {
      return !0;
    }
    get telemetryInitialData() {
      return {
        action: `added`,
      };
    }
    get telemetryFinalData() {
      return null;
    }
    _reportTelemetry(pdfParam344, __pdfY = !1) {
      if (__pdfY) {
        this.#S ||= new Map();
        let { action: ___pdfY } = pdfParam344,
          pdfValue1419 = this.#S.get(___pdfY);
        (pdfValue1419 && clearTimeout(pdfValue1419),
          (pdfValue1419 = setTimeout(() => {
            (this._reportTelemetry(pdfParam344),
              this.#S.delete(___pdfY),
              this.#S.size === 0 && (this.#S = null));
          }, PdfClass2._telemetryTimeout)),
          this.#S.set(___pdfY, pdfValue1419));
        return;
      }
      ((pdfParam344.type ||= this.editorType),
        this._uiManager._eventBus.dispatch(`reporttelemetry`, {
          source: this,
          details: {
            type: `editing`,
            data: pdfParam344,
          },
        }));
    }
    show(pdfParam1235 = this._isVisible) {
      (this.div.classList.toggle(`hidden`, !pdfParam1235),
        (this._isVisible = pdfParam1235));
    }
    enable() {
      (this.div && (this.div.tabIndex = 0), (this.#a = !1));
    }
    disable() {
      (this.div && (this.div.tabIndex = -1), (this.#a = !0));
    }
    updateFakeAnnotationElement(pdfParam449) {
      if (!this.#d && !this.deleted) {
        this.#d = pdfParam449.addFakeAnnotation(this);
        return;
      }
      if (this.deleted) {
        (this.#d.remove(), (this.#d = null));
        return;
      }
      (this.hasEditedComment || this._hasBeenMoved || this._hasBeenResized) &&
        this.#d.updateEdited({
          rect: this.getPDFRect(),
          popup: this.comment,
        });
    }
    renderAnnotationElement(pdfParam337) {
      if (this.deleted) return (pdfParam337.hide(), null);
      let pdfValue986 =
        pdfParam337.container.querySelector(`.annotationContent`);
      if (!pdfValue986)
        ((pdfValue986 = document.createElement(`div`)),
          pdfValue986.classList.add(`annotationContent`, this.editorType),
          pdfParam337.container.prepend(pdfValue986));
      else if (pdfValue986.nodeName === `CANVAS`) {
        let pdfValue1810 = pdfValue986;
        ((pdfValue986 = document.createElement(`div`)),
          pdfValue986.classList.add(`annotationContent`, this.editorType),
          pdfValue1810.before(pdfValue986));
      }
      return pdfValue986;
    }
    resetAnnotationElement(pdfParam897) {
      let { firstChild: firstChild } = pdfParam897.container;
      firstChild?.nodeName === `DIV` &&
        firstChild.classList.contains(`annotationContent`) &&
        firstChild.remove();
    }
  },
  pdfValue32 = class extends pdfValue31 {
    constructor(pdfParam1188) {
      (super(pdfParam1188),
        (this.annotationElementId = pdfParam1188.annotationElementId),
        (this.deleted = !0));
    }
    serialize() {
      return this.serializeDeleted();
    }
  },
  pdfValue33 = 3285377520,
  pdfValue34 = 4294901760,
  pdfValue35 = 65535,
  pdfValue36 = class {
    constructor(pdfParam1338) {
      ((this.h1 = pdfParam1338 ? pdfParam1338 & 4294967295 : pdfValue33),
        (this.h2 = pdfParam1338 ? pdfParam1338 & 4294967295 : pdfValue33));
    }
    update(pdfParam129) {
      let pdfValue526, __pdfY;
      if (typeof pdfParam129 == `string`) {
        ((pdfValue526 = new Uint8Array(pdfParam129.length * 2)), (__pdfY = 0));
        for (
          let pdfValue1852 = 0, pdfValue1853 = pdfParam129.length;
          pdfValue1852 < pdfValue1853;
          pdfValue1852++
        ) {
          let pdfValue2039 = pdfParam129.charCodeAt(pdfValue1852);
          pdfValue2039 <= 255
            ? (pdfValue526[__pdfY++] = pdfValue2039)
            : ((pdfValue526[__pdfY++] = pdfValue2039 >>> 8),
              (pdfValue526[__pdfY++] = pdfValue2039 & 255));
        }
      } else if (ArrayBuffer.isView(pdfParam129))
        ((pdfValue526 = pdfParam129.slice()),
          (__pdfY = pdfValue526.byteLength));
      else throw Error(`Invalid data format, must be a string or TypedArray.`);
      let pdfValue527 = __pdfY >> 2,
        pdfValue528 = __pdfY - pdfValue527 * 4,
        pdfValue529 = new Uint32Array(pdfValue526.buffer, 0, pdfValue527),
        pdfValue530 = 0,
        pdfValue531 = 0,
        __pdfS = this.h1,
        pdfValue532 = this.h2,
        __pdfI = 3432918353,
        __pdfR = 461845907,
        ___pdfS = __pdfI & pdfValue35,
        pdfValue533 = __pdfR & pdfValue35;
      for (let pdfValue1445 = 0; pdfValue1445 < pdfValue527; pdfValue1445++)
        pdfValue1445 & 1
          ? ((pdfValue530 = pdfValue529[pdfValue1445]),
            (pdfValue530 =
              ((pdfValue530 * __pdfI) & pdfValue34) |
              ((pdfValue530 * ___pdfS) & pdfValue35)),
            (pdfValue530 = (pdfValue530 << 15) | (pdfValue530 >>> 17)),
            (pdfValue530 =
              ((pdfValue530 * __pdfR) & pdfValue34) |
              ((pdfValue530 * pdfValue533) & pdfValue35)),
            (__pdfS ^= pdfValue530),
            (__pdfS = (__pdfS << 13) | (__pdfS >>> 19)),
            (__pdfS = __pdfS * 5 + 3864292196))
          : ((pdfValue531 = pdfValue529[pdfValue1445]),
            (pdfValue531 =
              ((pdfValue531 * __pdfI) & pdfValue34) |
              ((pdfValue531 * ___pdfS) & pdfValue35)),
            (pdfValue531 = (pdfValue531 << 15) | (pdfValue531 >>> 17)),
            (pdfValue531 =
              ((pdfValue531 * __pdfR) & pdfValue34) |
              ((pdfValue531 * pdfValue533) & pdfValue35)),
            (pdfValue532 ^= pdfValue531),
            (pdfValue532 = (pdfValue532 << 13) | (pdfValue532 >>> 19)),
            (pdfValue532 = pdfValue532 * 5 + 3864292196));
      switch (((pdfValue530 = 0), pdfValue528)) {
        case 3:
          pdfValue530 ^= pdfValue526[pdfValue527 * 4 + 2] << 16;
        case 2:
          pdfValue530 ^= pdfValue526[pdfValue527 * 4 + 1] << 8;
        case 1:
          ((pdfValue530 ^= pdfValue526[pdfValue527 * 4]),
            (pdfValue530 =
              ((pdfValue530 * __pdfI) & pdfValue34) |
              ((pdfValue530 * ___pdfS) & pdfValue35)),
            (pdfValue530 = (pdfValue530 << 15) | (pdfValue530 >>> 17)),
            (pdfValue530 =
              ((pdfValue530 * __pdfR) & pdfValue34) |
              ((pdfValue530 * pdfValue533) & pdfValue35)),
            pdfValue527 & 1
              ? (__pdfS ^= pdfValue530)
              : (pdfValue532 ^= pdfValue530));
      }
      ((this.h1 = __pdfS), (this.h2 = pdfValue532));
    }
    hexdigest() {
      let pdfValue1150 = this.h1,
        pdfValue1151 = this.h2;
      return (
        (pdfValue1150 ^= pdfValue1151 >>> 1),
        (pdfValue1150 =
          ((pdfValue1150 * 3981806797) & pdfValue34) |
          ((pdfValue1150 * 36045) & pdfValue35)),
        (pdfValue1151 =
          ((pdfValue1151 * 4283543511) & pdfValue34) |
          (((((pdfValue1151 << 16) | (pdfValue1150 >>> 16)) * 2950163797) &
            pdfValue34) >>>
            16)),
        (pdfValue1150 ^= pdfValue1151 >>> 1),
        (pdfValue1150 =
          ((pdfValue1150 * 444984403) & pdfValue34) |
          ((pdfValue1150 * 60499) & pdfValue35)),
        (pdfValue1151 =
          ((pdfValue1151 * 3301882366) & pdfValue34) |
          (((((pdfValue1151 << 16) | (pdfValue1150 >>> 16)) * 3120437893) &
            pdfValue34) >>>
            16)),
        (pdfValue1150 ^= pdfValue1151 >>> 1),
        (pdfValue1150 >>> 0).toString(16).padStart(8, `0`) +
          (pdfValue1151 >>> 0).toString(16).padStart(8, `0`)
      );
    }
  },
  pdfValue37 = Object.freeze({
    map: null,
    hash: ``,
    transfer: void 0,
  }),
  pdfValue38 = class {
    #e = !1;
    #t = null;
    #n = null;
    #r = new Map();
    constructor() {
      ((this.onSetModified = null),
        (this.onResetModified = null),
        (this.onAnnotationEditor = null));
    }
    getValue(pdfParam1286, pdfParam1287) {
      let __pdfY = this.#r.get(pdfParam1286);
      return __pdfY === void 0
        ? pdfParam1287
        : Object.assign(pdfParam1287, __pdfY);
    }
    getRawValue(pdfParam1628) {
      return this.#r.get(pdfParam1628);
    }
    remove(pdfParam445) {
      let pdfValue1177 = this.#r.get(pdfParam445);
      if (
        pdfValue1177 !== void 0 &&
        (pdfValue1177 instanceof pdfValue31 &&
          this.#n.delete(pdfValue1177.annotationElementId),
        this.#r.delete(pdfParam445),
        this.#r.size === 0 && this.resetModified(),
        typeof this.onAnnotationEditor == `function`)
      ) {
        for (let pdfValue2130 of this.#r.values())
          if (pdfValue2130 instanceof pdfValue31) return;
        this.onAnnotationEditor(null);
      }
    }
    setValue(pdfParam404, pdfParam405) {
      let __pdfY = this.#r.get(pdfParam404),
        pdfValue1124 = !1;
      if (__pdfY !== void 0)
        for (let [pdfValue2112, pdfValue2113] of Object.entries(pdfParam405))
          __pdfY[pdfValue2112] !== pdfValue2113 &&
            ((pdfValue1124 = !0), (__pdfY[pdfValue2112] = pdfValue2113));
      else ((pdfValue1124 = !0), this.#r.set(pdfParam404, pdfParam405));
      (pdfValue1124 && this.#i(),
        pdfParam405 instanceof pdfValue31 &&
          ((this.#n ||= new Map()).set(
            pdfParam405.annotationElementId,
            pdfParam405,
          ),
          typeof this.onAnnotationEditor == `function` &&
            this.onAnnotationEditor(pdfParam405.constructor._type)));
    }
    has(pdfParam1689) {
      return this.#r.has(pdfParam1689);
    }
    get size() {
      return this.#r.size;
    }
    #i() {
      this.#e ||
        ((this.#e = !0),
        typeof this.onSetModified == `function` && this.onSetModified());
    }
    resetModified() {
      this.#e &&
        ((this.#e = !1),
        typeof this.onResetModified == `function` && this.onResetModified());
    }
    get print() {
      return new pdfValue39(this);
    }
    get serializable() {
      if (this.#r.size === 0) return pdfValue37;
      let pdfValue1037 = new Map(),
        pdfValue1038 = new pdfValue36(),
        __pdfY = [],
        pdfValue1039 = Object.create(null),
        pdfValue1040 = !1;
      for (let [___pdfY, pdfValue1671] of this.#r) {
        let pdfValue1774 =
          pdfValue1671 instanceof pdfValue31
            ? pdfValue1671.serialize(!1, pdfValue1039)
            : pdfValue1671;
        pdfValue1774 &&
          (pdfValue1037.set(___pdfY, pdfValue1774),
          pdfValue1038.update(`${___pdfY}:${JSON.stringify(pdfValue1774)}`),
          (pdfValue1040 ||= !!pdfValue1774.bitmap));
      }
      if (pdfValue1040)
        for (let pdfValue2152 of pdfValue1037.values())
          pdfValue2152.bitmap && __pdfY.push(pdfValue2152.bitmap);
      return pdfValue1037.size > 0
        ? {
            map: pdfValue1037,
            hash: pdfValue1038.hexdigest(),
            transfer: __pdfY,
          }
        : pdfValue37;
    }
    get editorStats() {
      let pdfValue641 = null,
        pdfValue642 = new Map(),
        __pdfY = 0,
        pdfValue643 = 0;
      for (let pdfValue897 of this.#r.values()) {
        if (!(pdfValue897 instanceof pdfValue31)) {
          pdfValue897.popup &&
            (pdfValue897.popup.deleted ? (pdfValue643 += 1) : (__pdfY += 1));
          continue;
        }
        pdfValue897.isCommentDeleted
          ? (pdfValue643 += 1)
          : pdfValue897.hasEditedComment && (__pdfY += 1);
        let pdfValue946 = pdfValue897.telemetryFinalData;
        if (!pdfValue946) continue;
        let { type: type } = pdfValue946;
        (pdfValue642.has(type) ||
          pdfValue642.set(type, Object.getPrototypeOf(pdfValue897).constructor),
          (pdfValue641 ||= Object.create(null)));
        let pdfValue947 = (pdfValue641[type] ||= new Map());
        for (let [pdfValue1692, pdfValue1693] of Object.entries(pdfValue946)) {
          if (pdfValue1692 === `type`) continue;
          let ___pdfY = pdfValue947.get(pdfValue1692);
          ___pdfY ||
            ((___pdfY = new Map()), pdfValue947.set(pdfValue1692, ___pdfY));
          let pdfValue1860 = ___pdfY.get(pdfValue1693) ?? 0;
          ___pdfY.set(pdfValue1693, pdfValue1860 + 1);
        }
      }
      if (
        ((pdfValue643 > 0 || __pdfY > 0) &&
          ((pdfValue641 ||= Object.create(null)),
          (pdfValue641.comments = {
            deleted: pdfValue643,
            edited: __pdfY,
          })),
        !pdfValue641)
      )
        return null;
      for (let [___pdfY, pdfValue2123] of pdfValue642)
        pdfValue641[___pdfY] = pdfValue2123.computeTelemetryFinalData(
          pdfValue641[___pdfY],
        );
      return pdfValue641;
    }
    resetModifiedIds() {
      this.#t = null;
    }
    updateEditor(pdfParam1179, pdfParam1180) {
      let __pdfY = this.#n?.get(pdfParam1179);
      return __pdfY ? (__pdfY.updateFromAnnotationLayer(pdfParam1180), !0) : !1;
    }
    getEditor(pdfParam1591) {
      return this.#n?.get(pdfParam1591) || null;
    }
    get modifiedIds() {
      if (this.#t) return this.#t;
      let pdfValue1495 = [];
      if (this.#n)
        for (let pdfValue1989 of this.#n.values())
          pdfValue1989.serialize() &&
            pdfValue1495.push(pdfValue1989.annotationElementId);
      return (this.#t = {
        ids: new Set(pdfValue1495),
        hash: pdfValue1495.join(`,`),
      });
    }
    [Symbol.iterator]() {
      return this.#r.entries();
    }
  },
  pdfValue39 = class extends pdfValue38 {
    #e;
    constructor(pdfParam847) {
      super();
      let {
        map: map,
        hash: __pdfY,
        transfer: transfer,
      } = pdfParam847.serializable;
      this.#e = {
        map: structuredClone(
          map,
          transfer
            ? {
                transfer: transfer,
              }
            : null,
        ),
        hash: __pdfY,
        transfer: transfer,
      };
    }
    get print() {
      pdfHelper5(`Should not call PrintAnnotationStorage.print`);
    }
    get serializable() {
      return this.#e;
    }
    get modifiedIds() {
      return pdfQ(this, `modifiedIds`, {
        ids: new Set(),
        hash: ``,
      });
    }
  },
  pdfValue40 = class {
    #e = new Set();
    constructor({ ownerDocument = globalThis.document, styleElement = null }) {
      ((this._document = ownerDocument),
        (this.nativeFontFaces = new Set()),
        (this.styleElement = null),
        (this.loadingRequests = []),
        (this.loadTestFontId = 0));
    }
    addNativeFontFace(pdfParam1266) {
      (this.nativeFontFaces.add(pdfParam1266),
        this._document.fonts.add(pdfParam1266));
    }
    removeNativeFontFace(pdfParam1198) {
      (this.nativeFontFaces.delete(pdfParam1198),
        this._document.fonts.delete(pdfParam1198));
    }
    insertRule(pdfParam517) {
      this.styleElement ||
        ((this.styleElement = this._document.createElement(`style`)),
        this._document.documentElement
          .getElementsByTagName(`head`)[0]
          .append(this.styleElement));
      let pdfValue1329 = this.styleElement.sheet;
      pdfValue1329.insertRule(pdfParam517, pdfValue1329.cssRules.length);
    }
    clear() {
      for (let pdfValue2053 of this.nativeFontFaces)
        this._document.fonts.delete(pdfValue2053);
      (this.nativeFontFaces.clear(),
        this.#e.clear(),
        (this.styleElement &&= (this.styleElement.remove(), null)));
    }
    async loadSystemFont({
      systemFontInfo: systemFontInfo,
      disableFontFace: disableFontFace,
      _inspectFont: __pdfY,
    }) {
      if (!(!systemFontInfo || this.#e.has(systemFontInfo.loadedName))) {
        if (
          (pdfHelper6(
            !disableFontFace,
            "loadSystemFont shouldn't be called when `disableFontFace` is set.",
          ),
          this.isFontLoadingAPISupported)
        ) {
          let {
              loadedName: loadedName,
              src: src,
              style: style,
            } = systemFontInfo,
            pdfValue1250 = new FontFace(loadedName, src, style);
          this.addNativeFontFace(pdfValue1250);
          try {
            (await pdfValue1250.load(),
              this.#e.add(loadedName),
              __pdfY?.(systemFontInfo));
          } catch {
            (pdfHelper4(
              `Cannot load system font: ${systemFontInfo.baseFontName}, installing it could help to improve PDF rendering.`,
            ),
              this.removeNativeFontFace(pdfValue1250));
          }
          return;
        }
        pdfHelper5(
          `Not implemented: loadSystemFont without the Font Loading API.`,
        );
      }
    }
    async bind(pdfParam241) {
      if (
        pdfParam241.attached ||
        (pdfParam241.missingFile && !pdfParam241.systemFontInfo)
      )
        return;
      if (((pdfParam241.attached = !0), pdfParam241.systemFontInfo)) {
        await this.loadSystemFont(pdfParam241);
        return;
      }
      if (this.isFontLoadingAPISupported) {
        let pdfValue1517 = pdfParam241.createNativeFontFace();
        if (pdfValue1517) {
          this.addNativeFontFace(pdfValue1517);
          try {
            await pdfValue1517.loaded;
          } catch (__pdfY) {
            throw (
              pdfHelper4(
                `Failed to load font '${pdfValue1517.family}': '${__pdfY}'.`,
              ),
              (pdfParam241.disableFontFace = !0),
              __pdfY
            );
          }
        }
        return;
      }
      let pdfValue758 = pdfParam241.createFontFaceRule();
      if (pdfValue758) {
        if ((this.insertRule(pdfValue758), this.isSyncFontLoadingSupported))
          return;
        await new Promise((pdfParam1297) => {
          let __pdfY = this._queueLoadingCallback(pdfParam1297);
          this._prepareFontLoadEvent(pdfParam241, __pdfY);
        });
      }
    }
    get isFontLoadingAPISupported() {
      let pdfValue1803 = !!this._document?.fonts;
      return pdfQ(this, `isFontLoadingAPISupported`, pdfValue1803);
    }
    get isSyncFontLoadingSupported() {
      return pdfQ(
        this,
        `isSyncFontLoadingSupported`,
        pdfValue2 || pdfTt.platform.isFirefox,
      );
    }
    _queueLoadingCallback(pdfParam504) {
      function pdfHelper64() {
        for (
          pdfHelper6(
            !pdfValue1300.done,
            `completeRequest() cannot be called twice.`,
          ),
            pdfValue1300.done = !0;
          __pdfY.length > 0 && __pdfY[0].done;

        ) {
          let pdfValue2200 = __pdfY.shift();
          setTimeout(pdfValue2200.callback, 0);
        }
      }
      let { loadingRequests: __pdfY } = this,
        pdfValue1300 = {
          done: !1,
          complete: pdfHelper64,
          callback: pdfParam504,
        };
      return (__pdfY.push(pdfValue1300), pdfValue1300);
    }
    get _loadTestFont() {
      let pdfValue256 = atob(
        `T1RUTwALAIAAAwAwQ0ZGIDHtZg4AAAOYAAAAgUZGVE1lkzZwAAAEHAAAABxHREVGABQAFQAABDgAAAAeT1MvMlYNYwkAAAEgAAAAYGNtYXABDQLUAAACNAAAAUJoZWFk/xVFDQAAALwAAAA2aGhlYQdkA+oAAAD0AAAAJGhtdHgD6AAAAAAEWAAAAAZtYXhwAAJQAAAAARgAAAAGbmFtZVjmdH4AAAGAAAAAsXBvc3T/hgAzAAADeAAAACAAAQAAAAEAALZRFsRfDzz1AAsD6AAAAADOBOTLAAAAAM4KHDwAAAAAA+gDIQAAAAgAAgAAAAAAAAABAAADIQAAAFoD6AAAAAAD6AABAAAAAAAAAAAAAAAAAAAAAQAAUAAAAgAAAAQD6AH0AAUAAAKKArwAAACMAooCvAAAAeAAMQECAAACAAYJAAAAAAAAAAAAAQAAAAAAAAAAAAAAAFBmRWQAwAAuAC4DIP84AFoDIQAAAAAAAQAAAAAAAAAAACAAIAABAAAADgCuAAEAAAAAAAAAAQAAAAEAAAAAAAEAAQAAAAEAAAAAAAIAAQAAAAEAAAAAAAMAAQAAAAEAAAAAAAQAAQAAAAEAAAAAAAUAAQAAAAEAAAAAAAYAAQAAAAMAAQQJAAAAAgABAAMAAQQJAAEAAgABAAMAAQQJAAIAAgABAAMAAQQJAAMAAgABAAMAAQQJAAQAAgABAAMAAQQJAAUAAgABAAMAAQQJAAYAAgABWABYAAAAAAAAAwAAAAMAAAAcAAEAAAAAADwAAwABAAAAHAAEACAAAAAEAAQAAQAAAC7//wAAAC7////TAAEAAAAAAAABBgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAAAAAAAD/gwAyAAAAAQAAAAAAAAAAAAAAAAAAAAABAAQEAAEBAQJYAAEBASH4DwD4GwHEAvgcA/gXBIwMAYuL+nz5tQXkD5j3CBLnEQACAQEBIVhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYWFhYAAABAQAADwACAQEEE/t3Dov6fAH6fAT+fPp8+nwHDosMCvm1Cvm1DAz6fBQAAAAAAAABAAAAAMmJbzEAAAAAzgTjFQAAAADOBOQpAAEAAAAAAAAADAAUAAQAAAABAAAAAgABAAAAAAAAAAAD6AAAAAAAAA==`,
      );
      return pdfQ(this, `_loadTestFont`, pdfValue256);
    }
    _prepareFontLoadEvent(pdfParam35, pdfParam36) {
      function __pdfY(pdfParam1015, pdfParam1016) {
        return (
          (pdfParam1015.charCodeAt(pdfParam1016) << 24) |
          (pdfParam1015.charCodeAt(pdfParam1016 + 1) << 16) |
          (pdfParam1015.charCodeAt(pdfParam1016 + 2) << 8) |
          (pdfParam1015.charCodeAt(pdfParam1016 + 3) & 255)
        );
      }
      function pdfHelper60(pdfParam1277, pdfParam1278, ___pdfY, pdfParam1279) {
        let pdfValue1990 = pdfParam1277.substring(0, pdfParam1278),
          pdfValue1991 = pdfParam1277.substring(pdfParam1278 + ___pdfY);
        return pdfValue1990 + pdfParam1279 + pdfValue1991;
      }
      let pdfValue354,
        pdfValue355,
        pdfValue356 = this._document.createElement(`canvas`);
      ((pdfValue356.width = 1), (pdfValue356.height = 1));
      let pdfValue357 = pdfValue356.getContext(`2d`),
        __pdfS = 0;
      function pdfHelper61(pdfParam629, pdfParam630) {
        if (++__pdfS > 30) {
          (pdfHelper4(`Load test font never loaded.`), pdfParam630());
          return;
        }
        if (
          ((pdfValue357.font = `30px ` + pdfParam629),
          pdfValue357.fillText(`.`, 0, 20),
          pdfValue357.getImageData(0, 0, 1, 1).data[3] > 0)
        ) {
          pdfParam630();
          return;
        }
        setTimeout(pdfHelper61.bind(null, pdfParam629, pdfParam630));
      }
      let __pdfI = `lt${Date.now()}${this.loadTestFontId++}`,
        __pdfR = this._loadTestFont;
      __pdfR = pdfHelper60(__pdfR, 976, __pdfI.length, __pdfI);
      let ___pdfS = 1482184792,
        pdfValue358 = __pdfY(__pdfR, 16);
      for (
        pdfValue354 = 0, pdfValue355 = __pdfI.length - 3;
        pdfValue354 < pdfValue355;
        pdfValue354 += 4
      )
        pdfValue358 = (pdfValue358 - ___pdfS + __pdfY(__pdfI, pdfValue354)) | 0;
      (pdfValue354 < __pdfI.length &&
        (pdfValue358 =
          (pdfValue358 - ___pdfS + __pdfY(__pdfI + `XXX`, pdfValue354)) | 0),
        (__pdfR = pdfHelper60(__pdfR, 16, 4, pdfHelper10(pdfValue358))));
      let _pdfNt = `@font-face {font-family:"${__pdfI}";src:${`url(data:font/opentype;base64,${btoa(__pdfR)});`}}`;
      this.insertRule(_pdfNt);
      let __pdfC = this._document.createElement(`div`);
      ((__pdfC.style.visibility = `hidden`),
        (__pdfC.style.width = __pdfC.style.height = `10px`),
        (__pdfC.style.position = `absolute`),
        (__pdfC.style.top = __pdfC.style.left = `0px`));
      for (let pdfValue1714 of [pdfParam35.loadedName, __pdfI]) {
        let pdfValue1861 = this._document.createElement(`span`);
        ((pdfValue1861.textContent = `Hi`),
          (pdfValue1861.style.fontFamily = pdfValue1714),
          __pdfC.append(pdfValue1861));
      }
      (this._document.body.append(__pdfC),
        pdfHelper61(__pdfI, () => {
          (__pdfC.remove(), pdfParam36.complete());
        }));
    }
  },
  pdfValue41 = class {
    #e;
    constructor(pdfParam763, pdfParam764 = null, __pdfY, pdfParam765) {
      ((this.compiledGlyphs = Object.create(null)),
        (this.#e = pdfParam763),
        (this._inspectFont = pdfParam764),
        __pdfY && Object.assign(this, __pdfY),
        pdfParam765 && (this.charProcOperatorList = pdfParam765));
    }
    createNativeFontFace() {
      if (!this.data || this.disableFontFace) return null;
      let pdfValue1000;
      if (!this.cssFontInfo)
        pdfValue1000 = new FontFace(this.loadedName, this.data, {});
      else {
        let pdfValue1506 = {
          weight: this.cssFontInfo.fontWeight,
        };
        (this.cssFontInfo.italicAngle &&
          (pdfValue1506.style = `oblique ${this.cssFontInfo.italicAngle}deg`),
          (pdfValue1000 = new FontFace(
            this.cssFontInfo.fontFamily,
            this.data,
            pdfValue1506,
          )));
      }
      return (this._inspectFont?.(this), pdfValue1000);
    }
    createFontFaceRule() {
      if (!this.data || this.disableFontFace) return null;
      let pdfValue828 = `url(data:${this.mimetype};base64,${pdfHelper15(this.data)});`,
        pdfValue829;
      if (!this.cssFontInfo)
        pdfValue829 = `@font-face {font-family:"${this.loadedName}";src:${pdfValue828}}`;
      else {
        let __pdfY = `font-weight: ${this.cssFontInfo.fontWeight};`;
        (this.cssFontInfo.italicAngle &&
          (__pdfY += `font-style: oblique ${this.cssFontInfo.italicAngle}deg;`),
          (pdfValue829 = `@font-face {font-family:"${this.cssFontInfo.fontFamily}";${__pdfY}src:${pdfValue828}}`));
      }
      return (this._inspectFont?.(this, pdfValue828), pdfValue829);
    }
    getPathGenerator(pdfParam435, pdfParam436) {
      if (this.compiledGlyphs[pdfParam436] !== void 0)
        return this.compiledGlyphs[pdfParam436];
      let __pdfY = this.loadedName + `_path_` + pdfParam436,
        pdfValue1168;
      try {
        pdfValue1168 = pdfParam435.get(__pdfY);
      } catch (pdfValue2082) {
        pdfHelper4(`getPathGenerator - ignoring character: "${pdfValue2082}".`);
      }
      let pdfValue1169 = new Path2D(pdfValue1168 || ``);
      return (
        this.fontExtraProperties || pdfParam435.delete(__pdfY),
        (this.compiledGlyphs[pdfParam436] = pdfValue1169)
      );
    }
    get black() {
      return this.#e.black;
    }
    get bold() {
      return this.#e.bold;
    }
    get disableFontFace() {
      return this.#e.disableFontFace ?? !1;
    }
    get fontExtraProperties() {
      return this.#e.fontExtraProperties ?? !1;
    }
    get isInvalidPDFjsFont() {
      return this.#e.isInvalidPDFjsFont;
    }
    get isType3Font() {
      return this.#e.isType3Font;
    }
    get italic() {
      return this.#e.italic;
    }
    get missingFile() {
      return this.#e.missingFile;
    }
    get remeasure() {
      return this.#e.remeasure;
    }
    get vertical() {
      return this.#e.vertical;
    }
    get ascent() {
      return this.#e.ascent;
    }
    get defaultWidth() {
      return this.#e.defaultWidth;
    }
    get descent() {
      return this.#e.descent;
    }
    get bbox() {
      return this.#e.bbox;
    }
    get fontMatrix() {
      return this.#e.fontMatrix;
    }
    get fallbackName() {
      return this.#e.fallbackName;
    }
    get loadedName() {
      return this.#e.loadedName;
    }
    get mimetype() {
      return this.#e.mimetype;
    }
    get name() {
      return this.#e.name;
    }
    get data() {
      return this.#e.data;
    }
    clearData() {
      this.#e.clearData();
    }
    get cssFontInfo() {
      return this.#e.cssFontInfo;
    }
    get systemFontInfo() {
      return this.#e.systemFontInfo;
    }
    get defaultVMetrics() {
      return this.#e.defaultVMetrics;
    }
  };
function pdfHelper26(pdfParam531) {
  if (pdfParam531 instanceof URL) return pdfParam531.href;
  if (typeof pdfParam531 == `string`) {
    if (pdfValue2) return pdfParam531;
    let pdfValue2027 = URL.parse(pdfParam531, window.location);
    if (pdfValue2027) return pdfValue2027.href;
  }
  throw Error(
    `Invalid PDF url data: either string or URL-object is expected in the url property.`,
  );
}
function pdfHelper27(pdfParam268) {
  if (pdfValue2 && typeof Buffer < `u` && pdfParam268 instanceof Buffer)
    throw Error(
      "Please provide binary data as `Uint8Array`, rather than `Buffer`.",
    );
  if (
    pdfParam268 instanceof Uint8Array &&
    pdfParam268.byteLength === pdfParam268.buffer.byteLength
  )
    return pdfParam268;
  if (typeof pdfParam268 == `string`) return pdfHelper9(pdfParam268);
  if (
    pdfParam268 instanceof ArrayBuffer ||
    ArrayBuffer.isView(pdfParam268) ||
    (typeof pdfParam268 == `object` && !isNaN(pdfParam268?.length))
  )
    return new Uint8Array(pdfParam268);
  throw Error(
    `Invalid PDF binary data: either TypedArray, string, or array-like object is expected in the data property.`,
  );
}
function _t(pdfParam786) {
  if (typeof pdfParam786 != `string`) return null;
  if (pdfParam786.endsWith(`/`)) return pdfParam786;
  throw Error(
    `Invalid factory url: "${pdfParam786}" must include trailing slash.`,
  );
}
var pdfValue42 = (pdfParam1128) =>
    typeof pdfParam1128 == `object` &&
    Number.isInteger(pdfParam1128?.num) &&
    pdfParam1128.num >= 0 &&
    Number.isInteger(pdfParam1128?.gen) &&
    pdfParam1128.gen >= 0,
  _pdfK = pdfHelper14.bind(
    null,
    pdfValue42,
    (pdfParam1547) =>
      typeof pdfParam1547 == `object` && typeof pdfParam1547?.name == `string`,
  ),
  pdfValue43 = class {
    #e = new Map();
    #t = Promise.resolve();
    postMessage(pdfParam920, pdfParam921) {
      let __pdfY = {
        data: structuredClone(
          pdfParam920,
          pdfParam921
            ? {
                transfer: pdfParam921,
              }
            : null,
        ),
      };
      this.#t.then(() => {
        for (let [pdfValue2230] of this.#e) pdfValue2230.call(this, __pdfY);
      });
    }
    addEventListener(pdfParam437, pdfParam438, __pdfY = null) {
      let pdfValue1170 = null;
      if (__pdfY?.signal instanceof AbortSignal) {
        let { signal: signal } = __pdfY;
        if (signal.aborted) {
          pdfHelper4("LoopbackPort - cannot use an `aborted` signal.");
          return;
        }
        let pdfValue1452 = () =>
          this.removeEventListener(pdfParam437, pdfParam438);
        ((pdfValue1170 = () =>
          signal.removeEventListener(`abort`, pdfValue1452)),
          signal.addEventListener(`abort`, pdfValue1452));
      }
      this.#e.set(pdfParam438, pdfValue1170);
    }
    removeEventListener(pdfParam1381, pdfParam1382) {
      (this.#e.get(pdfParam1382)?.(), this.#e.delete(pdfParam1382));
    }
    terminate() {
      for (let [, pdfValue2240] of this.#e) pdfValue2240?.();
      this.#e.clear();
    }
  },
  pdfValue44 = {
    DATA: 1,
    ERROR: 2,
  },
  pdfValue45 = {
    CANCEL: 1,
    CANCEL_COMPLETE: 2,
    CLOSE: 3,
    ENQUEUE: 4,
    ERROR: 5,
    PULL: 6,
    PULL_COMPLETE: 7,
    START_COMPLETE: 8,
  };
function pdfHelper28() {}
function pdfHelper29(event) {
  if (
    event instanceof _pdfT ||
    event instanceof pdfM ||
    event instanceof pdfValue12 ||
    event instanceof pdfT ||
    event instanceof pdfValue13
  )
    return event;
  switch (
    (event instanceof Error ||
      (typeof event == `object` && event) ||
      pdfHelper5(
        `wrapReason: Expected "reason" to be a (possibly cloned) Error.`,
      ),
    event.name)
  ) {
    case `AbortException`:
      return new _pdfT(event.message);
    case `InvalidPDFException`:
      return new pdfM(event.message);
    case `PasswordException`:
      return new pdfValue12(event.message, event.code);
    case `ResponseException`:
      return new pdfT(event.message, event.status, event.missing);
    case `UnknownErrorException`:
      return new pdfValue13(event.message, event.details);
  }
  return new pdfValue13(event.message, event.toString());
}
var pdfValue46 = class {
    #e = new AbortController();
    constructor(pdfParam362, pdfParam363, __pdfY) {
      ((this.sourceName = pdfParam362),
        (this.targetName = pdfParam363),
        (this.comObj = __pdfY),
        (this.callbackId = 1),
        (this.streamId = 1),
        (this.streamSinks = Object.create(null)),
        (this.streamControllers = Object.create(null)),
        (this.callbackCapabilities = Object.create(null)),
        (this.actionHandler = Object.create(null)),
        __pdfY.addEventListener(`message`, this.#t.bind(this), {
          signal: this.#e.signal,
        }));
    }
    #t({ data: data }) {
      if (data.targetName !== this.sourceName) return;
      if (data.stream) {
        this.#r(data);
        return;
      }
      if (data.callback) {
        let pdfValue1187 = data.callbackId,
          __pdfY = this.callbackCapabilities[pdfValue1187];
        if (!__pdfY) throw Error(`Cannot resolve callback ${pdfValue1187}`);
        if (
          (delete this.callbackCapabilities[pdfValue1187],
          data.callback === pdfValue44.DATA)
        )
          __pdfY.resolve(data.data);
        else if (data.callback === pdfValue44.ERROR)
          __pdfY.reject(pdfHelper29(data.reason));
        else throw Error(`Unexpected callback case`);
        return;
      }
      let pdfValue500 = this.actionHandler[data.action];
      if (!pdfValue500)
        throw Error(`Unknown action from worker: ${data.action}`);
      if (data.callbackId) {
        let __pdfY = this.sourceName,
          pdfValue1152 = data.sourceName,
          pdfValue1153 = this.comObj;
        Promise.try(pdfValue500, data.data).then(
          function (value) {
            pdfValue1153.postMessage({
              sourceName: __pdfY,
              targetName: pdfValue1152,
              callback: pdfValue44.DATA,
              callbackId: data.callbackId,
              data: value,
            });
          },
          function (pdfParam1013) {
            pdfValue1153.postMessage({
              sourceName: __pdfY,
              targetName: pdfValue1152,
              callback: pdfValue44.ERROR,
              callbackId: data.callbackId,
              reason: pdfHelper29(pdfParam1013),
            });
          },
        );
        return;
      }
      if (data.streamId) {
        this.#n(data);
        return;
      }
      pdfValue500(data.data);
    }
    on(pdfParam1017, pdfParam1018) {
      let __pdfY = this.actionHandler;
      if (__pdfY[pdfParam1017])
        throw Error(`There is already an actionName called "${pdfParam1017}"`);
      __pdfY[pdfParam1017] = pdfParam1018;
    }
    send(pdfParam998, pdfParam999, __pdfY) {
      this.comObj.postMessage(
        {
          sourceName: this.sourceName,
          targetName: this.targetName,
          action: pdfParam998,
          data: pdfParam999,
        },
        __pdfY,
      );
    }
    sendWithPromise(pdfParam499, pdfParam500, __pdfY) {
      let pdfValue1291 = this.callbackId++,
        pdfValue1292 = Promise.withResolvers();
      this.callbackCapabilities[pdfValue1291] = pdfValue1292;
      try {
        this.comObj.postMessage(
          {
            sourceName: this.sourceName,
            targetName: this.targetName,
            action: pdfParam499,
            callbackId: pdfValue1291,
            data: pdfParam500,
          },
          __pdfY,
        );
      } catch (pdfValue2252) {
        pdfValue1292.reject(pdfValue2252);
      }
      return pdfValue1292.promise;
    }
    sendWithStream(pdfParam113, pdfParam114, __pdfY, pdfParam115) {
      let pdfValue492 = this.streamId++,
        pdfValue493 = this.sourceName,
        pdfValue494 = this.targetName,
        pdfValue495 = this.comObj;
      return new ReadableStream(
        {
          start: (___pdfY) => {
            let __pdfS = Promise.withResolvers();
            return (
              (this.streamControllers[pdfValue492] = {
                controller: ___pdfY,
                startCall: __pdfS,
                pullCall: null,
                cancelCall: null,
                isClosed: !1,
              }),
              pdfValue495.postMessage(
                {
                  sourceName: pdfValue493,
                  targetName: pdfValue494,
                  action: pdfParam113,
                  streamId: pdfValue492,
                  data: pdfParam114,
                  desiredSize: ___pdfY.desiredSize,
                },
                pdfParam115,
              ),
              __pdfS.promise
            );
          },
          pull: (pdfParam649) => {
            let pdfValue1514 = Promise.withResolvers();
            return (
              (this.streamControllers[pdfValue492].pullCall = pdfValue1514),
              pdfValue495.postMessage({
                sourceName: pdfValue493,
                targetName: pdfValue494,
                stream: pdfValue45.PULL,
                streamId: pdfValue492,
                desiredSize: pdfParam649.desiredSize,
              }),
              pdfValue1514.promise
            );
          },
          cancel: (pdfParam485) => {
            pdfHelper6(
              pdfParam485 instanceof Error,
              `cancel must have a valid reason`,
            );
            let pdfValue1251 = Promise.withResolvers();
            return (
              (this.streamControllers[pdfValue492].cancelCall = pdfValue1251),
              (this.streamControllers[pdfValue492].isClosed = !0),
              pdfValue495.postMessage({
                sourceName: pdfValue493,
                targetName: pdfValue494,
                stream: pdfValue45.CANCEL,
                streamId: pdfValue492,
                reason: pdfHelper29(pdfParam485),
              }),
              pdfValue1251.promise
            );
          },
        },
        __pdfY,
      );
    }
    #n(pdfParam37) {
      let pdfValue363 = pdfParam37.streamId,
        __pdfY = this.sourceName,
        pdfValue364 = pdfParam37.sourceName,
        pdfValue365 = this.comObj,
        pdfValue366 = this,
        pdfValue367 = this.actionHandler[pdfParam37.action],
        pdfValue368 = {
          enqueue(pdfParam457, pdfParam458 = 1, pdfParam459) {
            if (this.isCancelled) return;
            let pdfValue1200 = this.desiredSize;
            ((this.desiredSize -= pdfParam458),
              pdfValue1200 > 0 &&
                this.desiredSize <= 0 &&
                ((this.sinkCapability = Promise.withResolvers()),
                (this.ready = this.sinkCapability.promise)),
              pdfValue365.postMessage(
                {
                  sourceName: __pdfY,
                  targetName: pdfValue364,
                  stream: pdfValue45.ENQUEUE,
                  streamId: pdfValue363,
                  chunk: pdfParam457,
                },
                pdfParam459,
              ));
          },
          close() {
            this.isCancelled ||
              ((this.isCancelled = !0),
              pdfValue365.postMessage({
                sourceName: __pdfY,
                targetName: pdfValue364,
                stream: pdfValue45.CLOSE,
                streamId: pdfValue363,
              }),
              delete pdfValue366.streamSinks[pdfValue363]);
          },
          error(pdfParam638) {
            (pdfHelper6(
              pdfParam638 instanceof Error,
              `error must have a valid reason`,
            ),
              !this.isCancelled &&
                ((this.isCancelled = !0),
                pdfValue365.postMessage({
                  sourceName: __pdfY,
                  targetName: pdfValue364,
                  stream: pdfValue45.ERROR,
                  streamId: pdfValue363,
                  reason: pdfHelper29(pdfParam638),
                })));
          },
          sinkCapability: Promise.withResolvers(),
          onPull: null,
          onCancel: null,
          isCancelled: !1,
          desiredSize: pdfParam37.desiredSize,
          ready: null,
        };
      (pdfValue368.sinkCapability.resolve(),
        (pdfValue368.ready = pdfValue368.sinkCapability.promise),
        (this.streamSinks[pdfValue363] = pdfValue368),
        Promise.try(pdfValue367, pdfParam37.data, pdfValue368).then(
          function () {
            pdfValue365.postMessage({
              sourceName: __pdfY,
              targetName: pdfValue364,
              stream: pdfValue45.START_COMPLETE,
              streamId: pdfValue363,
              success: !0,
            });
          },
          function (pdfParam1075) {
            pdfValue365.postMessage({
              sourceName: __pdfY,
              targetName: pdfValue364,
              stream: pdfValue45.START_COMPLETE,
              streamId: pdfValue363,
              reason: pdfHelper29(pdfParam1075),
            });
          },
        ));
    }
    #r(pdfParam9) {
      let pdfValue249 = pdfParam9.streamId,
        __pdfY = this.sourceName,
        pdfValue250 = pdfParam9.sourceName,
        pdfValue251 = this.comObj,
        pdfValue252 = this.streamControllers[pdfValue249],
        pdfValue253 = this.streamSinks[pdfValue249];
      switch (pdfParam9.stream) {
        case pdfValue45.START_COMPLETE:
          pdfParam9.success
            ? pdfValue252.startCall.resolve()
            : pdfValue252.startCall.reject(pdfHelper29(pdfParam9.reason));
          break;
        case pdfValue45.PULL_COMPLETE:
          pdfParam9.success
            ? pdfValue252.pullCall.resolve()
            : pdfValue252.pullCall.reject(pdfHelper29(pdfParam9.reason));
          break;
        case pdfValue45.PULL:
          if (!pdfValue253) {
            pdfValue251.postMessage({
              sourceName: __pdfY,
              targetName: pdfValue250,
              stream: pdfValue45.PULL_COMPLETE,
              streamId: pdfValue249,
              success: !0,
            });
            break;
          }
          (pdfValue253.desiredSize <= 0 &&
            pdfParam9.desiredSize > 0 &&
            pdfValue253.sinkCapability.resolve(),
            (pdfValue253.desiredSize = pdfParam9.desiredSize),
            Promise.try(pdfValue253.onPull || pdfHelper28).then(
              function () {
                pdfValue251.postMessage({
                  sourceName: __pdfY,
                  targetName: pdfValue250,
                  stream: pdfValue45.PULL_COMPLETE,
                  streamId: pdfValue249,
                  success: !0,
                });
              },
              function (pdfParam1082) {
                pdfValue251.postMessage({
                  sourceName: __pdfY,
                  targetName: pdfValue250,
                  stream: pdfValue45.PULL_COMPLETE,
                  streamId: pdfValue249,
                  reason: pdfHelper29(pdfParam1082),
                });
              },
            ));
          break;
        case pdfValue45.ENQUEUE:
          if (
            (pdfHelper6(pdfValue252, `enqueue should have stream controller`),
            pdfValue252.isClosed)
          )
            break;
          pdfValue252.controller.enqueue(pdfParam9.chunk);
          break;
        case pdfValue45.CLOSE:
          if (
            (pdfHelper6(pdfValue252, `close should have stream controller`),
            pdfValue252.isClosed)
          )
            break;
          ((pdfValue252.isClosed = !0),
            pdfValue252.controller.close(),
            this.#i(pdfValue252, pdfValue249));
          break;
        case pdfValue45.ERROR:
          (pdfHelper6(pdfValue252, `error should have stream controller`),
            pdfValue252.controller.error(pdfHelper29(pdfParam9.reason)),
            this.#i(pdfValue252, pdfValue249));
          break;
        case pdfValue45.CANCEL_COMPLETE:
          (pdfParam9.success
            ? pdfValue252.cancelCall.resolve()
            : pdfValue252.cancelCall.reject(pdfHelper29(pdfParam9.reason)),
            this.#i(pdfValue252, pdfValue249));
          break;
        case pdfValue45.CANCEL:
          if (!pdfValue253) break;
          let pdfValue271 = pdfHelper29(pdfParam9.reason);
          (Promise.try(pdfValue253.onCancel || pdfHelper28, pdfValue271).then(
            function () {
              pdfValue251.postMessage({
                sourceName: __pdfY,
                targetName: pdfValue250,
                stream: pdfValue45.CANCEL_COMPLETE,
                streamId: pdfValue249,
                success: !0,
              });
            },
            function (pdfParam1063) {
              pdfValue251.postMessage({
                sourceName: __pdfY,
                targetName: pdfValue250,
                stream: pdfValue45.CANCEL_COMPLETE,
                streamId: pdfValue249,
                reason: pdfHelper29(pdfParam1063),
              });
            },
          ),
            pdfValue253.sinkCapability.reject(pdfValue271),
            (pdfValue253.isCancelled = !0),
            delete this.streamSinks[pdfValue249]);
          break;
        default:
          throw Error(`Unexpected stream case`);
      }
    }
    async #i(pdfParam855, pdfParam856) {
      (await Promise.allSettled([
        pdfParam855.startCall?.promise,
        pdfParam855.pullCall?.promise,
        pdfParam855.cancelCall?.promise,
      ]),
        delete this.streamControllers[pdfParam856]);
    }
    destroy() {
      (this.#e?.abort(), (this.#e = null));
    }
  },
  pdfValue47 = class {
    #e = !1;
    constructor({ enableHWA = !1 }) {
      this.#e = enableHWA;
    }
    create(pdfParam702, pdfParam703) {
      if (pdfParam702 <= 0 || pdfParam703 <= 0)
        throw Error(`Invalid canvas size`);
      let __pdfY = this._createCanvas(pdfParam702, pdfParam703);
      return {
        canvas: __pdfY,
        context: __pdfY.getContext(`2d`, {
          willReadFrequently: !this.#e,
        }),
      };
    }
    reset(pdfParam787, pdfParam788, __pdfY) {
      if (!pdfParam787.canvas) throw Error(`Canvas is not specified`);
      if (pdfParam788 <= 0 || __pdfY <= 0) throw Error(`Invalid canvas size`);
      ((pdfParam787.canvas.width = pdfParam788),
        (pdfParam787.canvas.height = __pdfY));
    }
    destroy(pdfParam913) {
      if (!pdfParam913.canvas) throw Error(`Canvas is not specified`);
      ((pdfParam913.canvas.width = 0),
        (pdfParam913.canvas.height = 0),
        (pdfParam913.canvas = null),
        (pdfParam913.context = null));
    }
    _createCanvas(pdfParam1357, pdfParam1358) {
      pdfHelper5("Abstract method `_createCanvas` called.");
    }
  },
  pdfValue48 = class extends pdfValue47 {
    constructor({ ownerDocument = globalThis.document, enableHWA = !1 }) {
      (super({
        enableHWA: enableHWA,
      }),
        (this._document = ownerDocument));
    }
    _createCanvas(pdfParam1117, pdfParam1118) {
      let __pdfY = this._document.createElement(`canvas`);
      return (
        (__pdfY.width = pdfParam1117),
        (__pdfY.height = pdfParam1118),
        __pdfY
      );
    }
  },
  pdfValue49 = class {
    constructor({ baseUrl = null, isCompressed = !0 }) {
      ((this.baseUrl = baseUrl), (this.isCompressed = isCompressed));
    }
    async fetch({ name: name }) {
      if (!this.baseUrl)
        throw Error(
          "Ensure that the `cMapUrl` and `cMapPacked` API parameters are provided.",
        );
      if (!name) throw Error(`CMap name must be specified.`);
      let pdfValue968 =
        this.baseUrl + name + (this.isCompressed ? `.bcmap` : ``);
      return this._fetch(pdfValue968)
        .then((value) => ({
          cMapData: value,
          isCompressed: this.isCompressed,
        }))
        .catch((error) => {
          throw Error(
            `Unable to load ${this.isCompressed ? `binary ` : ``}CMap at: ${pdfValue968}`,
          );
        });
    }
    async _fetch(pdfParam1477) {
      pdfHelper5("Abstract method `_fetch` called.");
    }
  },
  pdfValue50 = class extends pdfValue49 {
    async _fetch(pdfParam909) {
      let pdfValue1694 = await _pdfI(
        pdfParam909,
        this.isCompressed ? `arraybuffer` : `text`,
      );
      return pdfValue1694 instanceof ArrayBuffer
        ? new Uint8Array(pdfValue1694)
        : pdfHelper9(pdfValue1694);
    }
  },
  pdfValue51 = class {
    addFilter(pdfParam1700) {
      return `none`;
    }
    addHCMFilter(pdfParam1681, pdfParam1682) {
      return `none`;
    }
    addAlphaFilter(pdfParam1683) {
      return `none`;
    }
    addLuminosityFilter(pdfParam1645) {
      return `none`;
    }
    addHighlightHCMFilter(
      pdfParam1557,
      pdfParam1558,
      __pdfY,
      pdfParam1559,
      pdfParam1560,
    ) {
      return `none`;
    }
    destroy(pdfParam1733 = !1) {}
  },
  pdfValue52 = class extends pdfValue51 {
    #e;
    #t;
    #n;
    #r;
    #i;
    #a;
    #o = 0;
    constructor({ docId: docId, ownerDocument = globalThis.document }) {
      (super(), (this.#r = docId), (this.#i = ownerDocument));
    }
    get #s() {
      return (this.#t ||= new Map());
    }
    get #c() {
      return (this.#a ||= new Map());
    }
    get #l() {
      if (!this.#n) {
        let pdfValue1043 = this.#i.createElement(`div`),
          { style: style } = pdfValue1043;
        ((style.visibility = `hidden`),
          (style.contain = `strict`),
          (style.width = style.height = 0),
          (style.position = `absolute`),
          (style.top = style.left = 0),
          (style.zIndex = -1));
        let __pdfY = this.#i.createElementNS(be, `svg`);
        (__pdfY.setAttribute(`width`, 0),
          __pdfY.setAttribute(`height`, 0),
          (this.#n = this.#i.createElementNS(be, `defs`)),
          pdfValue1043.append(__pdfY),
          __pdfY.append(this.#n),
          this.#i.body.append(pdfValue1043));
      }
      return this.#n;
    }
    #u(pdfParam462) {
      if (pdfParam462.length === 1) {
        let pdfValue1877 = pdfParam462[0],
          ___pdfY = Array(256);
        for (let pdfValue2228 = 0; pdfValue2228 < 256; pdfValue2228++)
          ___pdfY[pdfValue2228] = pdfValue1877[pdfValue2228] / 255;
        let pdfValue1878 = ___pdfY.join(`,`);
        return [pdfValue1878, pdfValue1878, pdfValue1878];
      }
      let [pdfValue1215, __pdfY, pdfValue1216] = pdfParam462,
        pdfValue1217 = Array(256),
        pdfValue1218 = Array(256),
        pdfValue1219 = Array(256);
      for (let pdfValue2058 = 0; pdfValue2058 < 256; pdfValue2058++)
        ((pdfValue1217[pdfValue2058] = pdfValue1215[pdfValue2058] / 255),
          (pdfValue1218[pdfValue2058] = __pdfY[pdfValue2058] / 255),
          (pdfValue1219[pdfValue2058] = pdfValue1216[pdfValue2058] / 255));
      return [
        pdfValue1217.join(`,`),
        pdfValue1218.join(`,`),
        pdfValue1219.join(`,`),
      ];
    }
    #d(pdfParam618) {
      if (this.#e === void 0) {
        this.#e = ``;
        let pdfValue1663 = this.#i.URL;
        pdfValue1663 !== this.#i.baseURI &&
          (_pdfW(pdfValue1663)
            ? pdfHelper4(
                `#createUrl: ignore "data:"-URL for performance reasons.`,
              )
            : (this.#e = pdfEt(pdfValue1663, ``)));
      }
      return `url(${this.#e}#${pdfParam618})`;
    }
    addFilter(pdfParam413) {
      if (!pdfParam413) return `none`;
      let pdfValue1134 = this.#s.get(pdfParam413);
      if (pdfValue1134) return pdfValue1134;
      let [__pdfY, pdfValue1135, pdfValue1136] = this.#u(pdfParam413),
        pdfValue1137 =
          pdfParam413.length === 1
            ? __pdfY
            : `${__pdfY}${pdfValue1135}${pdfValue1136}`;
      if (((pdfValue1134 = this.#s.get(pdfValue1137)), pdfValue1134))
        return (this.#s.set(pdfParam413, pdfValue1134), pdfValue1134);
      let pdfValue1138 = `g_${this.#r}_transfer_map_${this.#o++}`,
        pdfValue1139 = this.#d(pdfValue1138);
      (this.#s.set(pdfParam413, pdfValue1139),
        this.#s.set(pdfValue1137, pdfValue1139));
      let __pdfS = this.#m(pdfValue1138);
      return (
        this.#g(__pdfY, pdfValue1135, pdfValue1136, __pdfS),
        pdfValue1139
      );
    }
    addHCMFilter(pdfParam135, pdfParam136) {
      let __pdfY = `${pdfParam135}-${pdfParam136}`,
        pdfValue560 = `base`,
        pdfValue561 = this.#c.get(pdfValue560);
      if (
        pdfValue561?.key === __pdfY ||
        (pdfValue561
          ? (pdfValue561.filter?.remove(),
            (pdfValue561.key = __pdfY),
            (pdfValue561.url = `none`),
            (pdfValue561.filter = null))
          : ((pdfValue561 = {
              key: __pdfY,
              url: `none`,
              filter: null,
            }),
            this.#c.set(pdfValue560, pdfValue561)),
        !pdfParam135 || !pdfParam136)
      )
        return pdfValue561.url;
      let pdfValue562 = this.#v(pdfParam135);
      pdfParam135 = pdfA.makeHexColor(...pdfValue562);
      let pdfValue563 = this.#v(pdfParam136);
      if (
        ((pdfParam136 = pdfA.makeHexColor(...pdfValue563)),
        (this.#l.style.color = ``),
        (pdfParam135 === `#000000` && pdfParam136 === `#ffffff`) ||
          pdfParam135 === pdfParam136)
      )
        return pdfValue561.url;
      let pdfValue564 = Array(256);
      for (let pdfValue1957 = 0; pdfValue1957 <= 255; pdfValue1957++) {
        let pdfValue2103 = pdfValue1957 / 255;
        pdfValue564[pdfValue1957] =
          pdfValue2103 <= 0.03928
            ? pdfValue2103 / 12.92
            : ((pdfValue2103 + 0.055) / 1.055) ** 2.4;
      }
      let __pdfS = pdfValue564.join(`,`),
        pdfValue565 = `g_${this.#r}_hcm_filter`,
        __pdfI = (pdfValue561.filter = this.#m(pdfValue565));
      (this.#g(__pdfS, __pdfS, __pdfS, __pdfI), this.#p(__pdfI));
      let __pdfR = (pdfParam1053, pdfParam1054) => {
        let ___pdfY = pdfValue562[pdfParam1053] / 255,
          pdfValue1821 = pdfValue563[pdfParam1053] / 255,
          pdfValue1822 = Array(pdfParam1054 + 1);
        for (let pdfValue2214 = 0; pdfValue2214 <= pdfParam1054; pdfValue2214++)
          pdfValue1822[pdfValue2214] =
            ___pdfY + (pdfValue2214 / pdfParam1054) * (pdfValue1821 - ___pdfY);
        return pdfValue1822.join(`,`);
      };
      return (
        this.#g(__pdfR(0, 5), __pdfR(1, 5), __pdfR(2, 5), __pdfI),
        (pdfValue561.url = this.#d(pdfValue565)),
        pdfValue561.url
      );
    }
    addAlphaFilter(pdfParam486) {
      let pdfValue1252 = this.#s.get(pdfParam486);
      if (pdfValue1252) return pdfValue1252;
      let [__pdfY] = this.#u([pdfParam486]),
        pdfValue1253 = `alpha_${__pdfY}`;
      if (((pdfValue1252 = this.#s.get(pdfValue1253)), pdfValue1252))
        return (this.#s.set(pdfParam486, pdfValue1252), pdfValue1252);
      let pdfValue1254 = `g_${this.#r}_alpha_map_${this.#o++}`,
        pdfValue1255 = this.#d(pdfValue1254);
      (this.#s.set(pdfParam486, pdfValue1255),
        this.#s.set(pdfValue1253, pdfValue1255));
      let pdfValue1256 = this.#m(pdfValue1254);
      return (this.#_(__pdfY, pdfValue1256), pdfValue1255);
    }
    addLuminosityFilter(pdfParam372) {
      let pdfValue1058 = this.#s.get(pdfParam372 || `luminosity`);
      if (pdfValue1058) return pdfValue1058;
      let __pdfY, pdfValue1059;
      if (
        (pdfParam372
          ? (([__pdfY] = this.#u([pdfParam372])),
            (pdfValue1059 = `luminosity_${__pdfY}`))
          : (pdfValue1059 = `luminosity`),
        (pdfValue1058 = this.#s.get(pdfValue1059)),
        pdfValue1058)
      )
        return (this.#s.set(pdfParam372, pdfValue1058), pdfValue1058);
      let pdfValue1060 = `g_${this.#r}_luminosity_map_${this.#o++}`,
        pdfValue1061 = this.#d(pdfValue1060);
      (this.#s.set(pdfParam372, pdfValue1061),
        this.#s.set(pdfValue1059, pdfValue1061));
      let pdfValue1062 = this.#m(pdfValue1060);
      return (
        this.#f(pdfValue1062),
        pdfParam372 && this.#_(__pdfY, pdfValue1062),
        pdfValue1061
      );
    }
    addHighlightHCMFilter(
      pdfParam119,
      pdfParam120,
      __pdfY,
      pdfParam121,
      pdfParam122,
    ) {
      let pdfValue506 = `${pdfParam120}-${__pdfY}-${pdfParam121}-${pdfParam122}`,
        pdfValue507 = this.#c.get(pdfParam119);
      if (
        pdfValue507?.key === pdfValue506 ||
        (pdfValue507
          ? (pdfValue507.filter?.remove(),
            (pdfValue507.key = pdfValue506),
            (pdfValue507.url = `none`),
            (pdfValue507.filter = null))
          : ((pdfValue507 = {
              key: pdfValue506,
              url: `none`,
              filter: null,
            }),
            this.#c.set(pdfParam119, pdfValue507)),
        !pdfParam120 || !__pdfY)
      )
        return pdfValue507.url;
      let [pdfValue508, __pdfS] = [pdfParam120, __pdfY].map(this.#v.bind(this)),
        pdfValue509 = Math.round(
          0.2126 * pdfValue508[0] +
            0.7152 * pdfValue508[1] +
            0.0722 * pdfValue508[2],
        ),
        __pdfI = Math.round(
          0.2126 * __pdfS[0] + 0.7152 * __pdfS[1] + 0.0722 * __pdfS[2],
        ),
        [__pdfR, ___pdfS] = [pdfParam121, pdfParam122].map(this.#v.bind(this));
      (__pdfI < pdfValue509 &&
        ([pdfValue509, __pdfI, __pdfR, ___pdfS] = [
          __pdfI,
          pdfValue509,
          ___pdfS,
          __pdfR,
        ]),
        (this.#l.style.color = ``));
      let pdfValue510 = (pdfParam584, pdfParam585, ___pdfY) => {
          let pdfValue1433 = Array(256),
            pdfValue1434 = (__pdfI - pdfValue509) / ___pdfY,
            pdfValue1435 = pdfParam584 / 255,
            pdfValue1436 = (pdfParam585 - pdfParam584) / (255 * ___pdfY),
            pdfValue1437 = 0;
          for (let pdfValue1909 = 0; pdfValue1909 <= ___pdfY; pdfValue1909++) {
            let pdfValue2040 = Math.round(
                pdfValue509 + pdfValue1909 * pdfValue1434,
              ),
              ____pdfY = pdfValue1435 + pdfValue1909 * pdfValue1436;
            for (
              let pdfValue2241 = pdfValue1437;
              pdfValue2241 <= pdfValue2040;
              pdfValue2241++
            )
              pdfValue1433[pdfValue2241] = ____pdfY;
            pdfValue1437 = pdfValue2040 + 1;
          }
          for (
            let pdfValue2234 = pdfValue1437;
            pdfValue2234 < 256;
            pdfValue2234++
          )
            pdfValue1433[pdfValue2234] = pdfValue1433[pdfValue1437 - 1];
          return pdfValue1433.join(`,`);
        },
        _pdfNt = `g_${this.#r}_hcm_${pdfParam119}_filter`,
        __pdfC = (pdfValue507.filter = this.#m(_pdfNt));
      return (
        this.#p(__pdfC),
        this.#g(
          pdfValue510(__pdfR[0], ___pdfS[0], 5),
          pdfValue510(__pdfR[1], ___pdfS[1], 5),
          pdfValue510(__pdfR[2], ___pdfS[2], 5),
          __pdfC,
        ),
        (pdfValue507.url = this.#d(_pdfNt)),
        pdfValue507.url
      );
    }
    destroy(pdfParam754 = !1) {
      (pdfParam754 && this.#a?.size) ||
        (this.#n?.parentNode.parentNode.remove(),
        (this.#n = null),
        this.#t?.clear(),
        (this.#t = null),
        this.#a?.clear(),
        (this.#a = null),
        (this.#o = 0));
    }
    #f(pdfParam659) {
      let pdfValue1525 = this.#i.createElementNS(be, `feColorMatrix`);
      (pdfValue1525.setAttribute(`type`, `matrix`),
        pdfValue1525.setAttribute(
          `values`,
          `0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0.59 0.11 0 0`,
        ),
        pdfParam659.append(pdfValue1525));
    }
    #p(pdfParam579) {
      let pdfValue1415 = this.#i.createElementNS(be, `feColorMatrix`);
      (pdfValue1415.setAttribute(`type`, `matrix`),
        pdfValue1415.setAttribute(
          `values`,
          `0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0`,
        ),
        pdfParam579.append(pdfValue1415));
    }
    #m(pdfParam768) {
      let pdfValue1613 = this.#i.createElementNS(be, `filter`);
      return (
        pdfValue1613.setAttribute(`color-interpolation-filters`, `sRGB`),
        pdfValue1613.setAttribute(`id`, pdfParam768),
        this.#l.append(pdfValue1613),
        pdfValue1613
      );
    }
    #h(pdfParam924, pdfParam925, __pdfY) {
      let pdfValue1724 = this.#i.createElementNS(be, pdfParam925);
      (pdfValue1724.setAttribute(`type`, `discrete`),
        pdfValue1724.setAttribute(`tableValues`, __pdfY),
        pdfParam924.append(pdfValue1724));
    }
    #g(pdfParam789, pdfParam790, __pdfY, pdfParam791) {
      let pdfValue1619 = this.#i.createElementNS(be, `feComponentTransfer`);
      (pdfParam791.append(pdfValue1619),
        this.#h(pdfValue1619, `feFuncR`, pdfParam789),
        this.#h(pdfValue1619, `feFuncG`, pdfParam790),
        this.#h(pdfValue1619, `feFuncB`, __pdfY));
    }
    #_(pdfParam1089, pdfParam1090) {
      let __pdfY = this.#i.createElementNS(be, `feComponentTransfer`);
      (pdfParam1090.append(__pdfY), this.#h(__pdfY, `feFuncA`, pdfParam1089));
    }
    #v(pdfParam1149) {
      return (
        (this.#l.style.color = pdfParam1149),
        pdfV(getComputedStyle(this.#l).getPropertyValue(`color`))
      );
    }
  },
  pdfValue53 = class {
    constructor({ baseUrl = null }) {
      this.baseUrl = baseUrl;
    }
    async fetch({ filename: filename }) {
      if (!this.baseUrl)
        throw Error(
          "Ensure that the `standardFontDataUrl` API parameter is provided.",
        );
      if (!filename) throw Error(`Font filename must be specified.`);
      let pdfValue1180 = `${this.baseUrl}${filename}`;
      return this._fetch(pdfValue1180).catch((error) => {
        throw Error(`Unable to load font data at: ${pdfValue1180}`);
      });
    }
    async _fetch(pdfParam1478) {
      pdfHelper5("Abstract method `_fetch` called.");
    }
  },
  pdfValue54 = class extends pdfValue53 {
    async _fetch(pdfParam1291) {
      let pdfValue1995 = await _pdfI(pdfParam1291, `arraybuffer`);
      return new Uint8Array(pdfValue1995);
    }
  },
  pdfValue55 = class {
    constructor({ baseUrl = null }) {
      this.baseUrl = baseUrl;
    }
    async fetch({ filename: filename }) {
      if (!this.baseUrl)
        throw Error("Ensure that the `wasmUrl` API parameter is provided.");
      if (!filename) throw Error(`Wasm filename must be specified.`);
      let pdfValue1203 = `${this.baseUrl}${filename}`;
      return this._fetch(pdfValue1203).catch((error) => {
        throw Error(`Unable to load wasm data at: ${pdfValue1203}`);
      });
    }
    async _fetch(pdfParam1479) {
      pdfHelper5("Abstract method `_fetch` called.");
    }
  },
  pdfValue56 = class extends pdfValue55 {
    async _fetch(pdfParam1292) {
      let pdfValue1996 = await _pdfI(pdfParam1292, `arraybuffer`);
      return new Uint8Array(pdfValue1996);
    }
  };
pdfValue2 &&
  pdfHelper4("Please use the `legacy` build in Node.js environments.");
async function pdfHelper30(pdfParam1004) {
  let pdfValue1783 = await process
    .getBuiltinModule(`fs`)
    .promises.readFile(pdfParam1004);
  return new Uint8Array(pdfValue1783);
}
var pdfValue57 = class extends pdfValue51 {},
  pdfValue58 = class extends pdfValue47 {
    _createCanvas(pdfParam910, pdfParam911) {
      return process
        .getBuiltinModule(`module`)
        .createRequire(import.meta.url)(`@napi-rs/canvas`)
        .createCanvas(pdfParam910, pdfParam911);
    }
  },
  pdfValue59 = class extends pdfValue49 {
    async _fetch(pdfParam1690) {
      return pdfHelper30(pdfParam1690);
    }
  },
  pdfValue60 = class extends pdfValue53 {
    async _fetch(pdfParam1691) {
      return pdfHelper30(pdfParam1691);
    }
  },
  pdfValue61 = class extends pdfValue55 {
    async _fetch(pdfParam1692) {
      return pdfHelper30(pdfParam1692);
    }
  },
  pdfValue62 = `__forcedDependency`,
  { floor: floor, ceil: ceil } = Math;
function pdfHelper31(
  pdfParam802,
  pdfParam803,
  __pdfY,
  pdfParam804,
  pdfParam805,
  pdfParam806,
) {
  ((pdfParam802[pdfParam803 * 4 + 0] = Math.min(
    pdfParam802[pdfParam803 * 4 + 0],
    __pdfY,
  )),
    (pdfParam802[pdfParam803 * 4 + 1] = Math.min(
      pdfParam802[pdfParam803 * 4 + 1],
      pdfParam804,
    )),
    (pdfParam802[pdfParam803 * 4 + 2] = Math.max(
      pdfParam802[pdfParam803 * 4 + 2],
      pdfParam805,
    )),
    (pdfParam802[pdfParam803 * 4 + 3] = Math.max(
      pdfParam802[pdfParam803 * 4 + 3],
      pdfParam806,
    )));
}
var pdfValue63 = new Uint32Array(new Uint8Array([255, 255, 0, 0]).buffer)[0],
  pdfValue64 = class {
    #e;
    #t;
    constructor(pdfParam1629, pdfParam1630) {
      ((this.#e = pdfParam1629), (this.#t = pdfParam1630));
    }
    get length() {
      return this.#e.length;
    }
    isEmpty(pdfParam1663) {
      return this.#e[pdfParam1663] === pdfValue63;
    }
    minX(pdfParam1664) {
      return this.#t[pdfParam1664 * 4 + 0] / 256;
    }
    minY(pdfParam1665) {
      return this.#t[pdfParam1665 * 4 + 1] / 256;
    }
    maxX(pdfParam1631) {
      return (this.#t[pdfParam1631 * 4 + 2] + 1) / 256;
    }
    maxY(pdfParam1632) {
      return (this.#t[pdfParam1632 * 4 + 3] + 1) / 256;
    }
  },
  pdfValue65 = (pdfParam1005, pdfParam1006) => {
    if (!pdfParam1005) return;
    let __pdfY = pdfParam1005.get(pdfParam1006);
    return (
      __pdfY ||
        ((__pdfY = {
          dependencies: new Set(),
          isRenderingOperation: !1,
        }),
        pdfParam1005.set(pdfParam1006, __pdfY)),
      __pdfY
    );
  },
  pdfValue66 = class {
    #e = {
      __proto__: null,
    };
    #t = {
      __proto__: null,
      transform: [],
      moveText: [],
      sameLineText: [],
      [pdfValue62]: [],
    };
    #n = new Map();
    #r = [];
    #i = [];
    #a = [[1, 0, 0, 1, 0, 0]];
    #o = [-1 / 0, -1 / 0, 1 / 0, 1 / 0];
    #s = new Float64Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
    #c = -1;
    #l = new Set();
    #u = new Map();
    #d = new Map();
    #f;
    #p;
    #m;
    #h;
    #g;
    constructor(pdfParam1189, pdfParam1190, __pdfY = !1) {
      ((this.#f = pdfParam1189.width),
        (this.#p = pdfParam1189.height),
        this.#_(pdfParam1190),
        __pdfY && (this.#g = new Map()));
    }
    growOperationsCount(pdfParam1393) {
      pdfParam1393 >= this.#h.length && this.#_(pdfParam1393, this.#h);
    }
    #_(pdfParam679, pdfParam680) {
      let __pdfY = new ArrayBuffer(pdfParam679 * 4);
      ((this.#m = new Uint8ClampedArray(__pdfY)),
        (this.#h = new Uint32Array(__pdfY)),
        pdfParam680 && pdfParam680.length > 0
          ? (this.#h.set(pdfParam680),
            this.#h.fill(pdfValue63, pdfParam680.length))
          : this.#h.fill(pdfValue63));
    }
    save(pdfParam465) {
      return (
        (this.#e = {
          __proto__: this.#e,
        }),
        (this.#t = {
          __proto__: this.#t,
          transform: {
            __proto__: this.#t.transform,
          },
          moveText: {
            __proto__: this.#t.moveText,
          },
          sameLineText: {
            __proto__: this.#t.sameLineText,
          },
          [pdfValue62]: {
            __proto__: this.#t[pdfValue62],
          },
        }),
        (this.#o = {
          __proto__: this.#o,
        }),
        this.#r.push(pdfParam465),
        this
      );
    }
    restore(pdfParam492) {
      let pdfValue1270 = Object.getPrototypeOf(this.#e);
      if (pdfValue1270 === null) return this;
      ((this.#e = pdfValue1270),
        (this.#t = Object.getPrototypeOf(this.#t)),
        (this.#o = Object.getPrototypeOf(this.#o)));
      let __pdfY = this.#r.pop();
      return (
        __pdfY !== void 0 &&
          (pdfValue65(this.#g, pdfParam492)?.dependencies.add(__pdfY),
          (this.#h[pdfParam492] = this.#h[__pdfY])),
        this
      );
    }
    recordOpenMarker(pdfParam1546) {
      return (this.#r.push(pdfParam1546), this);
    }
    getOpenMarker() {
      return this.#r.length === 0 ? null : this.#r.at(-1);
    }
    recordCloseMarker(pdfParam926) {
      let pdfValue1725 = this.#r.pop();
      return (
        pdfValue1725 !== void 0 &&
          (pdfValue65(this.#g, pdfParam926)?.dependencies.add(pdfValue1725),
          (this.#h[pdfParam926] = this.#h[pdfValue1725])),
        this
      );
    }
    beginMarkedContent(pdfParam1531) {
      return (this.#i.push(pdfParam1531), this);
    }
    endMarkedContent(pdfParam929) {
      let pdfValue1728 = this.#i.pop();
      return (
        pdfValue1728 !== void 0 &&
          (pdfValue65(this.#g, pdfParam929)?.dependencies.add(pdfValue1728),
          (this.#h[pdfParam929] = this.#h[pdfValue1728])),
        this
      );
    }
    pushBaseTransform(pdfParam1076) {
      return (
        this.#a.push(
          pdfA.multiplyByDOMMatrix(this.#a.at(-1), pdfParam1076.getTransform()),
        ),
        this
      );
    }
    popBaseTransform() {
      return (this.#a.length > 1 && this.#a.pop(), this);
    }
    recordSimpleData(pdfParam1548, pdfParam1549) {
      return ((this.#e[pdfParam1548] = pdfParam1549), this);
    }
    recordIncrementalData(pdfParam1433, pdfParam1434) {
      return (this.#t[pdfParam1433].push(pdfParam1434), this);
    }
    resetIncrementalData(pdfParam1435, pdfParam1436) {
      return ((this.#t[pdfParam1435].length = 0), this);
    }
    recordNamedData(pdfParam1532, pdfParam1533) {
      return (this.#n.set(pdfParam1532, pdfParam1533), this);
    }
    recordSimpleDataFromNamed(pdfParam1383, pdfParam1384, __pdfY) {
      this.#e[pdfParam1383] = this.#n.get(pdfParam1384) ?? __pdfY;
    }
    recordFutureForcedDependency(pdfParam1242, pdfParam1243) {
      return (this.recordIncrementalData(pdfValue62, pdfParam1243), this);
    }
    inheritSimpleDataAsFutureForcedDependencies(pdfParam864) {
      for (let pdfValue1979 of pdfParam864)
        pdfValue1979 in this.#e &&
          this.recordFutureForcedDependency(
            pdfValue1979,
            this.#e[pdfValue1979],
          );
      return this;
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      for (let pdfValue2083 of this.#l)
        this.recordFutureForcedDependency(pdfValue62, pdfValue2083);
      return this;
    }
    resetBBox(pdfParam994) {
      return (
        this.#c !== pdfParam994 &&
          ((this.#c = pdfParam994),
          (this.#s[0] = 1 / 0),
          (this.#s[1] = 1 / 0),
          (this.#s[2] = -1 / 0),
          (this.#s[3] = -1 / 0)),
        this
      );
    }
    recordClipBox(
      pdfParam386,
      pdfParam387,
      __pdfY,
      pdfParam388,
      pdfParam389,
      pdfParam390,
    ) {
      let pdfValue1099 = pdfA.multiplyByDOMMatrix(
          this.#a.at(-1),
          pdfParam387.getTransform(),
        ),
        pdfValue1100 = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      pdfA.axialAlignedBoundingBox(
        [__pdfY, pdfParam389, pdfParam388, pdfParam390],
        pdfValue1099,
        pdfValue1100,
      );
      let __pdfS = pdfA.intersect(this.#o, pdfValue1100);
      return (
        __pdfS
          ? ((this.#o[0] = __pdfS[0]),
            (this.#o[1] = __pdfS[1]),
            (this.#o[2] = __pdfS[2]),
            (this.#o[3] = __pdfS[3]))
          : ((this.#o[0] = this.#o[1] = 1 / 0),
            (this.#o[2] = this.#o[3] = -1 / 0)),
        this
      );
    }
    recordBBox(
      pdfParam263,
      pdfParam264,
      __pdfY,
      pdfParam265,
      pdfParam266,
      pdfParam267,
    ) {
      let pdfValue807 = this.#o;
      if (pdfValue807[0] === 1 / 0) return this;
      let pdfValue808 = pdfA.multiplyByDOMMatrix(
        this.#a.at(-1),
        pdfParam264.getTransform(),
      );
      if (pdfValue807[0] === -1 / 0)
        return (
          pdfA.axialAlignedBoundingBox(
            [__pdfY, pdfParam266, pdfParam265, pdfParam267],
            pdfValue808,
            this.#s,
          ),
          this
        );
      let __pdfS = [1 / 0, 1 / 0, -1 / 0, -1 / 0];
      return (
        pdfA.axialAlignedBoundingBox(
          [__pdfY, pdfParam266, pdfParam265, pdfParam267],
          pdfValue808,
          __pdfS,
        ),
        (this.#s[0] = Math.min(
          this.#s[0],
          Math.max(__pdfS[0], pdfValue807[0]),
        )),
        (this.#s[1] = Math.min(
          this.#s[1],
          Math.max(__pdfS[1], pdfValue807[1]),
        )),
        (this.#s[2] = Math.max(
          this.#s[2],
          Math.min(__pdfS[2], pdfValue807[2]),
        )),
        (this.#s[3] = Math.max(
          this.#s[3],
          Math.min(__pdfS[3], pdfValue807[3]),
        )),
        this
      );
    }
    recordCharacterBBox(
      pdfParam160,
      pdfParam161,
      __pdfY,
      pdfParam162 = 1,
      pdfParam163 = 0,
      pdfParam164 = 0,
      pdfParam165,
    ) {
      let pdfValue587 = __pdfY.bbox,
        __pdfS,
        pdfValue588;
      if (
        pdfValue587 &&
        ((__pdfS =
          pdfValue587[2] !== pdfValue587[0] &&
          pdfValue587[3] !== pdfValue587[1] &&
          this.#d.get(__pdfY)),
        __pdfS !== !1 &&
          ((pdfValue588 = [0, 0, 0, 0]),
          pdfA.axialAlignedBoundingBox(
            pdfValue587,
            __pdfY.fontMatrix,
            pdfValue588,
          ),
          (pdfParam162 !== 1 || pdfParam163 !== 0 || pdfParam164 !== 0) &&
            pdfA.scaleMinMax(
              [pdfParam162, 0, 0, -pdfParam162, pdfParam163, pdfParam164],
              pdfValue588,
            ),
          __pdfS))
      )
        return this.recordBBox(
          pdfParam160,
          pdfParam161,
          pdfValue588[0],
          pdfValue588[2],
          pdfValue588[1],
          pdfValue588[3],
        );
      if (!pdfParam165) return this.recordFullPageBBox(pdfParam160);
      let __pdfI = pdfParam165();
      return pdfValue587 &&
        pdfValue588 &&
        __pdfS === void 0 &&
        ((__pdfS =
          pdfValue588[0] <= pdfParam163 - __pdfI.actualBoundingBoxLeft &&
          pdfValue588[2] >= pdfParam163 + __pdfI.actualBoundingBoxRight &&
          pdfValue588[1] <= pdfParam164 - __pdfI.actualBoundingBoxAscent &&
          pdfValue588[3] >= pdfParam164 + __pdfI.actualBoundingBoxDescent),
        this.#d.set(__pdfY, __pdfS),
        __pdfS)
        ? this.recordBBox(
            pdfParam160,
            pdfParam161,
            pdfValue588[0],
            pdfValue588[2],
            pdfValue588[1],
            pdfValue588[3],
          )
        : this.recordBBox(
            pdfParam160,
            pdfParam161,
            pdfParam163 - __pdfI.actualBoundingBoxLeft,
            pdfParam163 + __pdfI.actualBoundingBoxRight,
            pdfParam164 - __pdfI.actualBoundingBoxAscent,
            pdfParam164 + __pdfI.actualBoundingBoxDescent,
          );
    }
    recordFullPageBBox(pdfParam650) {
      return (
        (this.#s[0] = Math.max(0, this.#o[0])),
        (this.#s[1] = Math.max(0, this.#o[1])),
        (this.#s[2] = Math.min(this.#f, this.#o[2])),
        (this.#s[3] = Math.min(this.#p, this.#o[3])),
        this
      );
    }
    getSimpleIndex(pdfParam1646) {
      return this.#e[pdfParam1646];
    }
    recordDependencies(pdfParam831, pdfParam832) {
      let __pdfY = this.#l,
        pdfValue1646 = this.#e,
        pdfValue1647 = this.#t;
      for (let pdfValue2018 of pdfParam832)
        pdfValue2018 in this.#e
          ? __pdfY.add(pdfValue1646[pdfValue2018])
          : pdfValue2018 in pdfValue1647 &&
            pdfValue1647[pdfValue2018].forEach(__pdfY.add, __pdfY);
      return this;
    }
    recordNamedDependency(pdfParam1220, pdfParam1221) {
      return (
        this.#n.has(pdfParam1221) && this.#l.add(this.#n.get(pdfParam1221)),
        this
      );
    }
    recordOperation(pdfParam211, pdfParam212 = !1) {
      if ((this.recordDependencies(pdfParam211, [pdfValue62]), this.#g)) {
        let pdfValue1606 = pdfValue65(this.#g, pdfParam211),
          { dependencies: __pdfY } = pdfValue1606;
        (this.#l.forEach(__pdfY.add, __pdfY),
          this.#r.forEach(__pdfY.add, __pdfY),
          this.#i.forEach(__pdfY.add, __pdfY),
          __pdfY.delete(pdfParam211),
          (pdfValue1606.isRenderingOperation = !0));
      }
      if (this.#c === pdfParam211) {
        let __pdfY = floor((this.#s[0] * 256) / this.#f),
          pdfValue1070 = floor((this.#s[1] * 256) / this.#p),
          pdfValue1071 = ceil((this.#s[2] * 256) / this.#f),
          pdfValue1072 = ceil((this.#s[3] * 256) / this.#p);
        pdfHelper31(
          this.#m,
          pdfParam211,
          __pdfY,
          pdfValue1070,
          pdfValue1071,
          pdfValue1072,
        );
        for (let pdfValue2160 of this.#l)
          pdfValue2160 !== pdfParam211 &&
            pdfHelper31(
              this.#m,
              pdfValue2160,
              __pdfY,
              pdfValue1070,
              pdfValue1071,
              pdfValue1072,
            );
        for (let pdfValue2161 of this.#r)
          pdfValue2161 !== pdfParam211 &&
            pdfHelper31(
              this.#m,
              pdfValue2161,
              __pdfY,
              pdfValue1070,
              pdfValue1071,
              pdfValue1072,
            );
        for (let pdfValue2162 of this.#i)
          pdfValue2162 !== pdfParam211 &&
            pdfHelper31(
              this.#m,
              pdfValue2162,
              __pdfY,
              pdfValue1070,
              pdfValue1071,
              pdfValue1072,
            );
        pdfParam212 || (this.#l.clear(), (this.#c = -1));
      }
      return this;
    }
    recordShowTextOperation(pdfParam595, pdfParam596 = !1) {
      let __pdfY = Array.from(this.#l);
      (this.recordOperation(pdfParam595, pdfParam596),
        this.recordIncrementalData(`sameLineText`, pdfParam595));
      for (let pdfValue2086 of __pdfY)
        this.recordIncrementalData(`sameLineText`, pdfValue2086);
      return this;
    }
    bboxToClipBoxDropOperation(pdfParam490, pdfParam491 = !1) {
      return (
        this.#c === pdfParam490 &&
          ((this.#c = -1),
          (this.#o[0] = Math.max(this.#o[0], this.#s[0])),
          (this.#o[1] = Math.max(this.#o[1], this.#s[1])),
          (this.#o[2] = Math.min(this.#o[2], this.#s[2])),
          (this.#o[3] = Math.min(this.#o[3], this.#s[3])),
          pdfParam491 || this.#l.clear()),
        this
      );
    }
    _takePendingDependencies() {
      let pdfValue2048 = this.#l;
      return ((this.#l = new Set()), pdfValue2048);
    }
    _extractOperation(pdfParam1328) {
      let pdfValue2028 = this.#u.get(pdfParam1328);
      return (this.#u.delete(pdfParam1328), pdfValue2028);
    }
    _pushPendingDependencies(pdfParam1437) {
      for (let pdfValue2238 of pdfParam1437) this.#l.add(pdfValue2238);
    }
    take() {
      return (this.#d.clear(), new pdfValue64(this.#h, this.#m));
    }
    takeDebugMetadata() {
      return this.#g;
    }
  },
  pdfValue67 = class PdfClass23 {
    #e;
    #t;
    #n;
    #r = 0;
    #i = 0;
    constructor(pdfParam1163, __pdfY, pdfParam1164) {
      if (
        pdfParam1163 instanceof PdfClass23 &&
        pdfParam1163.#n === !!pdfParam1164
      )
        return pdfParam1163;
      ((this.#e = pdfParam1163),
        (this.#t = __pdfY),
        (this.#n = !!pdfParam1164));
    }
    growOperationsCount() {
      throw Error(`Unreachable`);
    }
    save(pdfParam1508) {
      return (this.#i++, this.#e.save(this.#t), this);
    }
    restore(pdfParam1300) {
      return (this.#i > 0 && (this.#e.restore(this.#t), this.#i--), this);
    }
    recordOpenMarker(pdfParam1592) {
      return (this.#r++, this);
    }
    getOpenMarker() {
      return this.#r > 0 ? this.#t : this.#e.getOpenMarker();
    }
    recordCloseMarker(pdfParam1585) {
      return (this.#r--, this);
    }
    beginMarkedContent(pdfParam1666) {
      return this;
    }
    endMarkedContent(pdfParam1677) {
      return this;
    }
    pushBaseTransform(pdfParam1385) {
      return (this.#e.pushBaseTransform(pdfParam1385), this);
    }
    popBaseTransform() {
      return (this.#e.popBaseTransform(), this);
    }
    recordSimpleData(pdfParam1315, pdfParam1316) {
      return (this.#e.recordSimpleData(pdfParam1315, this.#t), this);
    }
    recordIncrementalData(pdfParam1237, pdfParam1238) {
      return (this.#e.recordIncrementalData(pdfParam1237, this.#t), this);
    }
    resetIncrementalData(pdfParam1256, pdfParam1257) {
      return (this.#e.resetIncrementalData(pdfParam1256, this.#t), this);
    }
    recordNamedData(pdfParam1675, pdfParam1676) {
      return this;
    }
    recordSimpleDataFromNamed(pdfParam1141, pdfParam1142, __pdfY) {
      return (
        this.#e.recordSimpleDataFromNamed(pdfParam1141, pdfParam1142, this.#t),
        this
      );
    }
    recordFutureForcedDependency(pdfParam1119, pdfParam1120) {
      return (
        this.#e.recordFutureForcedDependency(pdfParam1119, this.#t),
        this
      );
    }
    inheritSimpleDataAsFutureForcedDependencies(pdfParam978) {
      return (
        this.#e.inheritSimpleDataAsFutureForcedDependencies(pdfParam978),
        this
      );
    }
    inheritPendingDependenciesAsFutureForcedDependencies() {
      return (
        this.#e.inheritPendingDependenciesAsFutureForcedDependencies(),
        this
      );
    }
    resetBBox(pdfParam1394) {
      return (this.#n || this.#e.resetBBox(this.#t), this);
    }
    recordClipBox(
      pdfParam1170,
      pdfParam1171,
      __pdfY,
      pdfParam1172,
      pdfParam1173,
      pdfParam1174,
    ) {
      return (
        this.#n ||
          this.#e.recordClipBox(
            this.#t,
            pdfParam1171,
            __pdfY,
            pdfParam1172,
            pdfParam1173,
            pdfParam1174,
          ),
        this
      );
    }
    recordBBox(
      pdfParam1222,
      pdfParam1223,
      __pdfY,
      pdfParam1224,
      pdfParam1225,
      pdfParam1226,
    ) {
      return (
        this.#n ||
          this.#e.recordBBox(
            this.#t,
            pdfParam1223,
            __pdfY,
            pdfParam1224,
            pdfParam1225,
            pdfParam1226,
          ),
        this
      );
    }
    recordCharacterBBox(
      pdfParam1038,
      pdfParam1039,
      __pdfY,
      pdfParam1040,
      pdfParam1041,
      pdfParam1042,
      pdfParam1043,
    ) {
      return (
        this.#n ||
          this.#e.recordCharacterBBox(
            this.#t,
            pdfParam1039,
            __pdfY,
            pdfParam1040,
            pdfParam1041,
            pdfParam1042,
            pdfParam1043,
          ),
        this
      );
    }
    recordFullPageBBox(pdfParam1244) {
      return (this.#n || this.#e.recordFullPageBBox(this.#t), this);
    }
    getSimpleIndex(pdfParam1522) {
      return this.#e.getSimpleIndex(pdfParam1522);
    }
    recordDependencies(pdfParam1288, pdfParam1289) {
      return (this.#e.recordDependencies(this.#t, pdfParam1289), this);
    }
    recordNamedDependency(pdfParam1239, pdfParam1240) {
      return (this.#e.recordNamedDependency(this.#t, pdfParam1240), this);
    }
    recordOperation(pdfParam1339) {
      return (this.#e.recordOperation(this.#t, !0), this);
    }
    recordShowTextOperation(pdfParam1227) {
      return (this.#e.recordShowTextOperation(this.#t, !0), this);
    }
    bboxToClipBoxDropOperation(pdfParam1091) {
      return (this.#n || this.#e.bboxToClipBoxDropOperation(this.#t, !0), this);
    }
    take() {
      throw Error(`Unreachable`);
    }
    takeDebugMetadata() {
      throw Error(`Unreachable`);
    }
  },
  pdfValue68 = {
    stroke: [
      `path`,
      `transform`,
      `filter`,
      `strokeColor`,
      `strokeAlpha`,
      `lineWidth`,
      `lineCap`,
      `lineJoin`,
      `miterLimit`,
      `dash`,
    ],
    fill: [
      `path`,
      `transform`,
      `filter`,
      `fillColor`,
      `fillAlpha`,
      `globalCompositeOperation`,
      `SMask`,
    ],
    imageXObject: [
      `transform`,
      `SMask`,
      `filter`,
      `fillAlpha`,
      `strokeAlpha`,
      `globalCompositeOperation`,
    ],
    rawFillPath: [`filter`, `fillColor`, `fillAlpha`],
    showText: [
      `transform`,
      `leading`,
      `charSpacing`,
      `wordSpacing`,
      `hScale`,
      `textRise`,
      `moveText`,
      `textMatrix`,
      `font`,
      `fontObj`,
      `filter`,
      `fillColor`,
      `textRenderingMode`,
      `SMask`,
      `fillAlpha`,
      `strokeAlpha`,
      `globalCompositeOperation`,
      `sameLineText`,
    ],
    transform: [`transform`],
    transformAndFill: [`transform`, `fillColor`],
  },
  pdfValue69 = {
    FILL: `Fill`,
    STROKE: `Stroke`,
    SHADING: `Shading`,
  };
function pdfHelper32(pdfParam1064, pdfParam1065) {
  if (!pdfParam1065) return;
  let __pdfY = pdfParam1065[2] - pdfParam1065[0],
    pdfValue1825 = pdfParam1065[3] - pdfParam1065[1],
    pdfValue1826 = new Path2D();
  (pdfValue1826.rect(pdfParam1065[0], pdfParam1065[1], __pdfY, pdfValue1825),
    pdfParam1064.clip(pdfValue1826));
}
var pdfValue70 = class {
    isModifyingCurrentTransform() {
      return !1;
    }
    getPattern() {
      pdfHelper5("Abstract method `getPattern` called.");
    }
  },
  pdfValue71 = class extends pdfValue70 {
    constructor(pdfParam781) {
      (super(),
        (this._type = pdfParam781[1]),
        (this._bbox = pdfParam781[2]),
        (this._colorStops = pdfParam781[3]),
        (this._p0 = pdfParam781[4]),
        (this._p1 = pdfParam781[5]),
        (this._r0 = pdfParam781[6]),
        (this._r1 = pdfParam781[7]),
        (this.matrix = null));
    }
    _createGradient(pdfParam421) {
      let pdfValue1146;
      this._type === `axial`
        ? (pdfValue1146 = pdfParam421.createLinearGradient(
            this._p0[0],
            this._p0[1],
            this._p1[0],
            this._p1[1],
          ))
        : this._type === `radial` &&
          (pdfValue1146 = pdfParam421.createRadialGradient(
            this._p0[0],
            this._p0[1],
            this._r0,
            this._p1[0],
            this._p1[1],
            this._r1,
          ));
      for (let pdfValue2124 of this._colorStops)
        pdfValue1146.addColorStop(pdfValue2124[0], pdfValue2124[1]);
      return pdfValue1146;
    }
    getPattern(pdfParam174, pdfParam175, __pdfY, pdfParam176) {
      let pdfValue615;
      if (
        pdfParam176 === pdfValue69.STROKE ||
        pdfParam176 === pdfValue69.FILL
      ) {
        let pdfValue729 = pdfParam175.current.getClippedPathBoundingBox(
            pdfParam176,
            pdfHelper19(pdfParam174),
          ) || [0, 0, 0, 0],
          pdfValue730 = Math.ceil(pdfValue729[2] - pdfValue729[0]) || 1,
          pdfValue731 = Math.ceil(pdfValue729[3] - pdfValue729[1]) || 1,
          __pdfS = pdfParam175.cachedCanvases.getCanvas(
            `pattern`,
            pdfValue730,
            pdfValue731,
          ),
          pdfValue732 = __pdfS.context;
        (pdfValue732.clearRect(
          0,
          0,
          pdfValue732.canvas.width,
          pdfValue732.canvas.height,
        ),
          pdfValue732.beginPath(),
          pdfValue732.rect(
            0,
            0,
            pdfValue732.canvas.width,
            pdfValue732.canvas.height,
          ),
          pdfValue732.translate(-pdfValue729[0], -pdfValue729[1]),
          (__pdfY = pdfA.transform(__pdfY, [
            1,
            0,
            0,
            1,
            pdfValue729[0],
            pdfValue729[1],
          ])),
          pdfValue732.transform(...pdfParam175.baseTransform),
          this.matrix && pdfValue732.transform(...this.matrix),
          pdfHelper32(pdfValue732, this._bbox),
          (pdfValue732.fillStyle = this._createGradient(pdfValue732)),
          pdfValue732.fill(),
          (pdfValue615 = pdfParam174.createPattern(
            __pdfS.canvas,
            `no-repeat`,
          )));
        let __pdfI = new DOMMatrix(__pdfY);
        pdfValue615.setTransform(__pdfI);
      } else
        (pdfHelper32(pdfParam174, this._bbox),
          (pdfValue615 = this._createGradient(pdfParam174)));
      return pdfValue615;
    }
  };
function pdfHelper33(
  pdfParam66,
  event,
  __pdfY,
  pdfParam67,
  pdfParam68,
  pdfParam69,
  pdfParam70,
  pdfParam71,
) {
  let __pdfS = event.coords,
    pdfValue414 = event.colors,
    __pdfI = pdfParam66.data,
    __pdfR = pdfParam66.width * 4,
    ___pdfS;
  (__pdfS[__pdfY + 1] > __pdfS[pdfParam67 + 1] &&
    ((___pdfS = __pdfY),
    (__pdfY = pdfParam67),
    (pdfParam67 = ___pdfS),
    (___pdfS = pdfParam69),
    (pdfParam69 = pdfParam70),
    (pdfParam70 = ___pdfS)),
    __pdfS[pdfParam67 + 1] > __pdfS[pdfParam68 + 1] &&
      ((___pdfS = pdfParam67),
      (pdfParam67 = pdfParam68),
      (pdfParam68 = ___pdfS),
      (___pdfS = pdfParam70),
      (pdfParam70 = pdfParam71),
      (pdfParam71 = ___pdfS)),
    __pdfS[__pdfY + 1] > __pdfS[pdfParam67 + 1] &&
      ((___pdfS = __pdfY),
      (__pdfY = pdfParam67),
      (pdfParam67 = ___pdfS),
      (___pdfS = pdfParam69),
      (pdfParam69 = pdfParam70),
      (pdfParam70 = ___pdfS)));
  let pdfValue415 = (__pdfS[__pdfY] + event.offsetX) * event.scaleX,
    _pdfNt = (__pdfS[__pdfY + 1] + event.offsetY) * event.scaleY,
    __pdfC = (__pdfS[pdfParam67] + event.offsetX) * event.scaleX,
    pdfValue416 = (__pdfS[pdfParam67 + 1] + event.offsetY) * event.scaleY,
    __pdfJ = (__pdfS[pdfParam68] + event.offsetX) * event.scaleX,
    __pdfG = (__pdfS[pdfParam68 + 1] + event.offsetY) * event.scaleY;
  if (_pdfNt >= __pdfG) return;
  let pdfValue417 = pdfValue414[pdfParam69],
    __pdfX = pdfValue414[pdfParam69 + 1],
    pdfValue418 = pdfValue414[pdfParam69 + 2],
    pdfValue419 = pdfValue414[pdfParam70],
    pdfValue420 = pdfValue414[pdfParam70 + 1],
    pdfValue421 = pdfValue414[pdfParam70 + 2],
    pdfValue422 = pdfValue414[pdfParam71],
    pdfValue423 = pdfValue414[pdfParam71 + 1],
    pdfValue424 = pdfValue414[pdfParam71 + 2],
    pdfValue425 = Math.round(_pdfNt),
    __pdfF = Math.round(__pdfG),
    _pdfEt,
    __pdfQ,
    pdfValue426,
    pdfValue427,
    pdfValue428,
    __pdfM,
    __pdfT,
    pdfValue429;
  for (let pdfValue857 = pdfValue425; pdfValue857 <= __pdfF; pdfValue857++) {
    if (pdfValue857 < pdfValue416) {
      let pdfValue1997 =
        pdfValue857 < _pdfNt
          ? 0
          : (_pdfNt - pdfValue857) / (_pdfNt - pdfValue416);
      ((_pdfEt = pdfValue415 - (pdfValue415 - __pdfC) * pdfValue1997),
        (__pdfQ = pdfValue417 - (pdfValue417 - pdfValue419) * pdfValue1997),
        (pdfValue426 = __pdfX - (__pdfX - pdfValue420) * pdfValue1997),
        (pdfValue427 =
          pdfValue418 - (pdfValue418 - pdfValue421) * pdfValue1997));
    } else {
      let pdfValue1941;
      ((pdfValue1941 =
        pdfValue857 > __pdfG
          ? 1
          : pdfValue416 === __pdfG
            ? 0
            : (pdfValue416 - pdfValue857) / (pdfValue416 - __pdfG)),
        (_pdfEt = __pdfC - (__pdfC - __pdfJ) * pdfValue1941),
        (__pdfQ = pdfValue419 - (pdfValue419 - pdfValue422) * pdfValue1941),
        (pdfValue426 =
          pdfValue420 - (pdfValue420 - pdfValue423) * pdfValue1941),
        (pdfValue427 =
          pdfValue421 - (pdfValue421 - pdfValue424) * pdfValue1941));
    }
    let pdfValue874;
    ((pdfValue874 =
      pdfValue857 < _pdfNt
        ? 0
        : pdfValue857 > __pdfG
          ? 1
          : (_pdfNt - pdfValue857) / (_pdfNt - __pdfG)),
      (pdfValue428 = pdfValue415 - (pdfValue415 - __pdfJ) * pdfValue874),
      (__pdfM = pdfValue417 - (pdfValue417 - pdfValue422) * pdfValue874),
      (__pdfT = __pdfX - (__pdfX - pdfValue423) * pdfValue874),
      (pdfValue429 = pdfValue418 - (pdfValue418 - pdfValue424) * pdfValue874));
    let ___pdfY = Math.round(Math.min(_pdfEt, pdfValue428)),
      pdfValue875 = Math.round(Math.max(_pdfEt, pdfValue428)),
      pdfValue876 = __pdfR * pdfValue857 + ___pdfY * 4;
    for (
      let pdfValue1729 = ___pdfY;
      pdfValue1729 <= pdfValue875;
      pdfValue1729++
    )
      ((pdfValue874 = (_pdfEt - pdfValue1729) / (_pdfEt - pdfValue428)),
        pdfValue874 < 0
          ? (pdfValue874 = 0)
          : pdfValue874 > 1 && (pdfValue874 = 1),
        (__pdfI[pdfValue876++] =
          (__pdfQ - (__pdfQ - __pdfM) * pdfValue874) | 0),
        (__pdfI[pdfValue876++] =
          (pdfValue426 - (pdfValue426 - __pdfT) * pdfValue874) | 0),
        (__pdfI[pdfValue876++] =
          (pdfValue427 - (pdfValue427 - pdfValue429) * pdfValue874) | 0),
        (__pdfI[pdfValue876++] = 255));
  }
}
function $t(pdfParam305, pdfParam306, __pdfY) {
  let pdfValue906 = pdfParam306.coords,
    pdfValue907 = pdfParam306.colors,
    pdfValue908,
    pdfValue909;
  switch (pdfParam306.type) {
    case `lattice`:
      let pdfValue987 = pdfParam306.verticesPerRow,
        __pdfS = Math.floor(pdfValue906.length / pdfValue987) - 1,
        pdfValue988 = pdfValue987 - 1;
      for (pdfValue908 = 0; pdfValue908 < __pdfS; pdfValue908++) {
        let pdfValue1667 = pdfValue908 * pdfValue987;
        for (
          let pdfValue1730 = 0;
          pdfValue1730 < pdfValue988;
          pdfValue1730++, pdfValue1667++
        )
          (pdfHelper33(
            pdfParam305,
            __pdfY,
            pdfValue906[pdfValue1667],
            pdfValue906[pdfValue1667 + 1],
            pdfValue906[pdfValue1667 + pdfValue987],
            pdfValue907[pdfValue1667],
            pdfValue907[pdfValue1667 + 1],
            pdfValue907[pdfValue1667 + pdfValue987],
          ),
            pdfHelper33(
              pdfParam305,
              __pdfY,
              pdfValue906[pdfValue1667 + pdfValue987 + 1],
              pdfValue906[pdfValue1667 + 1],
              pdfValue906[pdfValue1667 + pdfValue987],
              pdfValue907[pdfValue1667 + pdfValue987 + 1],
              pdfValue907[pdfValue1667 + 1],
              pdfValue907[pdfValue1667 + pdfValue987],
            ));
      }
      break;
    case `triangles`:
      for (
        pdfValue908 = 0, pdfValue909 = pdfValue906.length;
        pdfValue908 < pdfValue909;
        pdfValue908 += 3
      )
        pdfHelper33(
          pdfParam305,
          __pdfY,
          pdfValue906[pdfValue908],
          pdfValue906[pdfValue908 + 1],
          pdfValue906[pdfValue908 + 2],
          pdfValue907[pdfValue908],
          pdfValue907[pdfValue908 + 1],
          pdfValue907[pdfValue908 + 2],
        );
      break;
    default:
      throw Error(`illegal figure`);
  }
}
var pdfValue72 = class extends pdfValue70 {
    constructor(pdfParam772) {
      (super(),
        (this._coords = pdfParam772[2]),
        (this._colors = pdfParam772[3]),
        (this._figures = pdfParam772[4]),
        (this._bounds = pdfParam772[5]),
        (this._bbox = pdfParam772[6]),
        (this._background = pdfParam772[7]),
        (this.matrix = null));
    }
    _createMeshCanvas(pdfParam177, pdfParam178, __pdfY) {
      let pdfValue616 = 1.1,
        pdfValue617 = 3e3,
        pdfValue618 = Math.floor(this._bounds[0]),
        pdfValue619 = Math.floor(this._bounds[1]),
        pdfValue620 = Math.ceil(this._bounds[2]) - pdfValue618,
        __pdfS = Math.ceil(this._bounds[3]) - pdfValue619,
        pdfValue621 = Math.min(
          Math.ceil(Math.abs(pdfValue620 * pdfParam177[0] * pdfValue616)),
          pdfValue617,
        ),
        __pdfI = Math.min(
          Math.ceil(Math.abs(__pdfS * pdfParam177[1] * pdfValue616)),
          pdfValue617,
        ),
        __pdfR = pdfValue620 / pdfValue621,
        ___pdfS = __pdfS / __pdfI,
        pdfValue622 = {
          coords: this._coords,
          colors: this._colors,
          offsetX: -pdfValue618,
          offsetY: -pdfValue619,
          scaleX: 1 / __pdfR,
          scaleY: 1 / ___pdfS,
        },
        _pdfNt = pdfValue621 + 4,
        __pdfC = __pdfI + 4,
        pdfValue623 = __pdfY.getCanvas(`mesh`, _pdfNt, __pdfC),
        __pdfJ = pdfValue623.context,
        __pdfG = __pdfJ.createImageData(pdfValue621, __pdfI);
      if (pdfParam178) {
        let pdfValue1894 = __pdfG.data;
        for (
          let ___pdfY = 0, pdfValue1981 = pdfValue1894.length;
          ___pdfY < pdfValue1981;
          ___pdfY += 4
        )
          ((pdfValue1894[___pdfY] = pdfParam178[0]),
            (pdfValue1894[___pdfY + 1] = pdfParam178[1]),
            (pdfValue1894[___pdfY + 2] = pdfParam178[2]),
            (pdfValue1894[___pdfY + 3] = 255));
      }
      for (let pdfValue2224 of this._figures)
        $t(__pdfG, pdfValue2224, pdfValue622);
      return (
        __pdfJ.putImageData(__pdfG, 2, 2),
        {
          canvas: pdfValue623.canvas,
          offsetX: pdfValue618 - 2 * __pdfR,
          offsetY: pdfValue619 - 2 * ___pdfS,
          scaleX: __pdfR,
          scaleY: ___pdfS,
        }
      );
    }
    isModifyingCurrentTransform() {
      return !0;
    }
    getPattern(pdfParam200, pdfParam201, __pdfY, pdfParam202) {
      pdfHelper32(pdfParam200, this._bbox);
      let pdfValue698 = new Float32Array(2);
      if (pdfParam202 === pdfValue69.SHADING)
        pdfA.singularValueDecompose2dScale(
          pdfHelper19(pdfParam200),
          pdfValue698,
        );
      else if (this.matrix) {
        pdfA.singularValueDecompose2dScale(this.matrix, pdfValue698);
        let [pdfValue1706, ___pdfY] = pdfValue698;
        (pdfA.singularValueDecompose2dScale(
          pdfParam201.baseTransform,
          pdfValue698,
        ),
          (pdfValue698[0] *= pdfValue1706),
          (pdfValue698[1] *= ___pdfY));
      } else
        pdfA.singularValueDecompose2dScale(
          pdfParam201.baseTransform,
          pdfValue698,
        );
      let pdfValue699 = this._createMeshCanvas(
        pdfValue698,
        pdfParam202 === pdfValue69.SHADING ? null : this._background,
        pdfParam201.cachedCanvases,
      );
      return (
        pdfParam202 !== pdfValue69.SHADING &&
          (pdfParam200.setTransform(...pdfParam201.baseTransform),
          this.matrix && pdfParam200.transform(...this.matrix)),
        pdfParam200.translate(pdfValue699.offsetX, pdfValue699.offsetY),
        pdfParam200.scale(pdfValue699.scaleX, pdfValue699.scaleY),
        pdfParam200.createPattern(pdfValue699.canvas, `no-repeat`)
      );
    }
  },
  pdfValue73 = class extends pdfValue70 {
    getPattern() {
      return `hotpink`;
    }
  };
function pdfHelper34(pdfParam755) {
  switch (pdfParam755[0]) {
    case `RadialAxial`:
      return new pdfValue71(pdfParam755);
    case `Mesh`:
      return new pdfValue72(pdfParam755);
    case `Dummy`:
      return new pdfValue73();
  }
  throw Error(`Unknown IR type: ${pdfParam755[0]}`);
}
var pdfValue74 = {
    COLORED: 1,
    UNCOLORED: 2,
  },
  pdfValue75 = class PdfClass21 {
    static MAX_PATTERN_SIZE = 3e3;
    constructor(pdfParam545, pdfParam546, __pdfY, pdfParam547) {
      ((this.color = pdfParam545[1]),
        (this.operatorList = pdfParam545[2]),
        (this.matrix = pdfParam545[3]),
        (this.bbox = pdfParam545[4]),
        (this.xstep = pdfParam545[5]),
        (this.ystep = pdfParam545[6]),
        (this.paintType = pdfParam545[7]),
        (this.tilingType = pdfParam545[8]),
        (this.ctx = pdfParam546),
        (this.canvasGraphicsFactory = __pdfY),
        (this.baseTransform = pdfParam547));
    }
    createPatternCanvas(pdfParam12, pdfParam13) {
      let {
          bbox: __pdfY,
          operatorList: operatorList,
          paintType: paintType,
          tilingType: tilingType,
          color: color,
          canvasGraphicsFactory: canvasGraphicsFactory,
        } = this,
        { xstep: __pdfS, ystep: ystep } = this;
      ((__pdfS = Math.abs(__pdfS)),
        (ystep = Math.abs(ystep)),
        pdfHelper3(`TilingType: ` + tilingType));
      let __pdfI = __pdfY[0],
        __pdfR = __pdfY[1],
        ___pdfS = __pdfY[2],
        pdfValue258 = __pdfY[3],
        _pdfNt = ___pdfS - __pdfI,
        __pdfC = pdfValue258 - __pdfR,
        pdfValue259 = new Float32Array(2);
      pdfA.singularValueDecompose2dScale(this.matrix, pdfValue259);
      let [__pdfJ, __pdfG] = pdfValue259;
      pdfA.singularValueDecompose2dScale(this.baseTransform, pdfValue259);
      let pdfValue260 = __pdfJ * pdfValue259[0],
        __pdfX = __pdfG * pdfValue259[1],
        pdfValue261 = _pdfNt,
        pdfValue262 = __pdfC,
        pdfValue263 = !1,
        pdfValue264 = !1,
        pdfValue265 = Math.ceil(__pdfS * pdfValue260),
        pdfValue266 = Math.ceil(ystep * __pdfX),
        pdfValue267 = Math.ceil(_pdfNt * pdfValue260),
        __pdfF = Math.ceil(__pdfC * __pdfX);
      (pdfValue265 >= pdfValue267 ? (pdfValue261 = __pdfS) : (pdfValue263 = !0),
        pdfValue266 >= __pdfF ? (pdfValue262 = ystep) : (pdfValue264 = !0));
      let _pdfEt = this.getSizeAndScale(
          pdfValue261,
          this.ctx.canvas.width,
          pdfValue260,
        ),
        __pdfQ = this.getSizeAndScale(
          pdfValue262,
          this.ctx.canvas.height,
          __pdfX,
        ),
        pdfValue268 = pdfParam12.cachedCanvases.getCanvas(
          `pattern`,
          _pdfEt.size,
          __pdfQ.size,
        ),
        pdfValue269 = pdfValue268.context,
        pdfValue270 = canvasGraphicsFactory.createCanvasGraphics(
          pdfValue269,
          pdfParam13,
        );
      if (
        ((pdfValue270.groupLevel = pdfParam12.groupLevel),
        this.setFillAndStrokeStyleToContext(pdfValue270, paintType, color),
        pdfValue269.translate(-_pdfEt.scale * __pdfI, -__pdfQ.scale * __pdfR),
        pdfValue270.transform(0, _pdfEt.scale, 0, 0, __pdfQ.scale, 0, 0),
        pdfValue269.save(),
        pdfValue270.dependencyTracker?.save(),
        this.clipBbox(pdfValue270, __pdfI, __pdfR, ___pdfS, pdfValue258),
        (pdfValue270.baseTransform = pdfHelper19(pdfValue270.ctx)),
        pdfValue270.executeOperatorList(operatorList),
        pdfValue270.endDrawing(),
        pdfValue270.dependencyTracker?.restore(),
        pdfValue269.restore(),
        pdfValue263 || pdfValue264)
      ) {
        let pdfValue913 = pdfValue268.canvas;
        (pdfValue263 && (pdfValue261 = __pdfS),
          pdfValue264 && (pdfValue262 = ystep));
        let ___pdfY = this.getSizeAndScale(
            pdfValue261,
            this.ctx.canvas.width,
            pdfValue260,
          ),
          pdfValue914 = this.getSizeAndScale(
            pdfValue262,
            this.ctx.canvas.height,
            __pdfX,
          ),
          pdfValue915 = ___pdfY.size,
          pdfValue916 = pdfValue914.size,
          pdfValue917 = pdfParam12.cachedCanvases.getCanvas(
            `pattern-workaround`,
            pdfValue915,
            pdfValue916,
          ),
          pdfValue918 = pdfValue917.context,
          ____pdfS = pdfValue263 ? Math.floor(_pdfNt / __pdfS) : 0,
          pdfValue919 = pdfValue264 ? Math.floor(__pdfC / ystep) : 0;
        for (let pdfValue1980 = 0; pdfValue1980 <= ____pdfS; pdfValue1980++)
          for (let ____pdfY = 0; ____pdfY <= pdfValue919; ____pdfY++)
            pdfValue918.drawImage(
              pdfValue913,
              pdfValue915 * pdfValue1980,
              pdfValue916 * ____pdfY,
              pdfValue915,
              pdfValue916,
              0,
              0,
              pdfValue915,
              pdfValue916,
            );
        return {
          canvas: pdfValue917.canvas,
          scaleX: ___pdfY.scale,
          scaleY: pdfValue914.scale,
          offsetX: __pdfI,
          offsetY: __pdfR,
        };
      }
      return {
        canvas: pdfValue268.canvas,
        scaleX: _pdfEt.scale,
        scaleY: __pdfQ.scale,
        offsetX: __pdfI,
        offsetY: __pdfR,
      };
    }
    getSizeAndScale(pdfParam960, __pdfY, pdfParam961) {
      let pdfValue1757 = Math.max(PdfClass21.MAX_PATTERN_SIZE, __pdfY),
        pdfValue1758 = Math.ceil(pdfParam960 * pdfParam961);
      return (
        pdfValue1758 >= pdfValue1757
          ? (pdfValue1758 = pdfValue1757)
          : (pdfParam961 = pdfValue1758 / pdfParam960),
        {
          scale: pdfParam961,
          size: pdfValue1758,
        }
      );
    }
    clipBbox(pdfParam833, pdfParam834, __pdfY, pdfParam835, pdfParam836) {
      let pdfValue1648 = pdfParam835 - pdfParam834,
        pdfValue1649 = pdfParam836 - __pdfY;
      (pdfParam833.ctx.rect(pdfParam834, __pdfY, pdfValue1648, pdfValue1649),
        pdfA.axialAlignedBoundingBox(
          [pdfParam834, __pdfY, pdfParam835, pdfParam836],
          pdfHelper19(pdfParam833.ctx),
          pdfParam833.current.minMax,
        ),
        pdfParam833.clip(),
        pdfParam833.endPath());
    }
    setFillAndStrokeStyleToContext(pdfParam376, pdfParam377, __pdfY) {
      let pdfValue1073 = pdfParam376.ctx,
        pdfValue1074 = pdfParam376.current;
      switch (pdfParam377) {
        case pdfValue74.COLORED:
          let { fillStyle: fillStyle, strokeStyle: strokeStyle } = this.ctx;
          ((pdfValue1073.fillStyle = pdfValue1074.fillColor = fillStyle),
            (pdfValue1073.strokeStyle = pdfValue1074.strokeColor =
              strokeStyle));
          break;
        case pdfValue74.UNCOLORED:
          ((pdfValue1073.fillStyle = pdfValue1073.strokeStyle = __pdfY),
            (pdfValue1074.fillColor = pdfValue1074.strokeColor = __pdfY));
          break;
        default:
          throw new pdfValue14(`Unsupported paint type: ${pdfParam377}`);
      }
    }
    isModifyingCurrentTransform() {
      return !1;
    }
    getPattern(pdfParam391, pdfParam392, __pdfY, pdfParam393, pdfParam394) {
      let pdfValue1101 = __pdfY;
      pdfParam393 !== pdfValue69.SHADING &&
        ((pdfValue1101 = pdfA.transform(
          pdfValue1101,
          pdfParam392.baseTransform,
        )),
        this.matrix &&
          (pdfValue1101 = pdfA.transform(pdfValue1101, this.matrix)));
      let pdfValue1102 = this.createPatternCanvas(pdfParam392, pdfParam394),
        pdfValue1103 = new DOMMatrix(pdfValue1101);
      ((pdfValue1103 = pdfValue1103.translate(
        pdfValue1102.offsetX,
        pdfValue1102.offsetY,
      )),
        (pdfValue1103 = pdfValue1103.scale(
          1 / pdfValue1102.scaleX,
          1 / pdfValue1102.scaleY,
        )));
      let __pdfS = pdfParam391.createPattern(pdfValue1102.canvas, `repeat`);
      return (__pdfS.setTransform(pdfValue1103), __pdfS);
    }
  };
function on({
  src: src,
  srcPos = 0,
  dest: __pdfY,
  width: width,
  height: height,
  nonBlackColor = 4294967295,
  inverseDecode = !1,
}) {
  let pdfValue790 = pdfTt.isLittleEndian ? 4278190080 : 255,
    [__pdfS, pdfValue791] = inverseDecode
      ? [nonBlackColor, pdfValue790]
      : [pdfValue790, nonBlackColor],
    __pdfI = width >> 3,
    __pdfR = width & 7,
    ___pdfS = src.length;
  __pdfY = new Uint32Array(__pdfY.buffer);
  let pdfValue792 = 0;
  for (let pdfValue1247 = 0; pdfValue1247 < height; pdfValue1247++) {
    for (let pdfValue1558 = srcPos + __pdfI; srcPos < pdfValue1558; srcPos++) {
      let pdfValue1634 = srcPos < ___pdfS ? src[srcPos] : 255;
      ((__pdfY[pdfValue792++] = pdfValue1634 & 128 ? pdfValue791 : __pdfS),
        (__pdfY[pdfValue792++] = pdfValue1634 & 64 ? pdfValue791 : __pdfS),
        (__pdfY[pdfValue792++] = pdfValue1634 & 32 ? pdfValue791 : __pdfS),
        (__pdfY[pdfValue792++] = pdfValue1634 & 16 ? pdfValue791 : __pdfS),
        (__pdfY[pdfValue792++] = pdfValue1634 & 8 ? pdfValue791 : __pdfS),
        (__pdfY[pdfValue792++] = pdfValue1634 & 4 ? pdfValue791 : __pdfS),
        (__pdfY[pdfValue792++] = pdfValue1634 & 2 ? pdfValue791 : __pdfS),
        (__pdfY[pdfValue792++] = pdfValue1634 & 1 ? pdfValue791 : __pdfS));
    }
    if (__pdfR === 0) continue;
    let pdfValue1318 = srcPos < ___pdfS ? src[srcPos++] : 255;
    for (let pdfValue2212 = 0; pdfValue2212 < __pdfR; pdfValue2212++)
      __pdfY[pdfValue792++] =
        pdfValue1318 & (1 << (7 - pdfValue2212)) ? pdfValue791 : __pdfS;
  }
  return {
    srcPos: srcPos,
    destPos: pdfValue792,
  };
}
var pdfValue76 = 16,
  pdfValue77 = 100,
  pdfValue78 = 15,
  pdfValue79 = 10,
  pdfValue80 = 16,
  pdfValue81 = new DOMMatrix(),
  pdfValue82 = new Float32Array(2),
  pdfValue83 = new Float32Array([1 / 0, 1 / 0, -1 / 0, -1 / 0]);
function pdfHelper35(pdfParam4, pdfParam5) {
  if (pdfParam4._removeMirroring)
    throw Error(`Context is already forwarding operations.`);
  ((pdfParam4.__originalSave = pdfParam4.save),
    (pdfParam4.__originalRestore = pdfParam4.restore),
    (pdfParam4.__originalRotate = pdfParam4.rotate),
    (pdfParam4.__originalScale = pdfParam4.scale),
    (pdfParam4.__originalTranslate = pdfParam4.translate),
    (pdfParam4.__originalTransform = pdfParam4.transform),
    (pdfParam4.__originalSetTransform = pdfParam4.setTransform),
    (pdfParam4.__originalResetTransform = pdfParam4.resetTransform),
    (pdfParam4.__originalClip = pdfParam4.clip),
    (pdfParam4.__originalMoveTo = pdfParam4.moveTo),
    (pdfParam4.__originalLineTo = pdfParam4.lineTo),
    (pdfParam4.__originalBezierCurveTo = pdfParam4.bezierCurveTo),
    (pdfParam4.__originalRect = pdfParam4.rect),
    (pdfParam4.__originalClosePath = pdfParam4.closePath),
    (pdfParam4.__originalBeginPath = pdfParam4.beginPath),
    (pdfParam4._removeMirroring = () => {
      ((pdfParam4.save = pdfParam4.__originalSave),
        (pdfParam4.restore = pdfParam4.__originalRestore),
        (pdfParam4.rotate = pdfParam4.__originalRotate),
        (pdfParam4.scale = pdfParam4.__originalScale),
        (pdfParam4.translate = pdfParam4.__originalTranslate),
        (pdfParam4.transform = pdfParam4.__originalTransform),
        (pdfParam4.setTransform = pdfParam4.__originalSetTransform),
        (pdfParam4.resetTransform = pdfParam4.__originalResetTransform),
        (pdfParam4.clip = pdfParam4.__originalClip),
        (pdfParam4.moveTo = pdfParam4.__originalMoveTo),
        (pdfParam4.lineTo = pdfParam4.__originalLineTo),
        (pdfParam4.bezierCurveTo = pdfParam4.__originalBezierCurveTo),
        (pdfParam4.rect = pdfParam4.__originalRect),
        (pdfParam4.closePath = pdfParam4.__originalClosePath),
        (pdfParam4.beginPath = pdfParam4.__originalBeginPath),
        delete pdfParam4._removeMirroring);
    }),
    (pdfParam4.save = function () {
      (pdfParam5.save(), this.__originalSave());
    }),
    (pdfParam4.restore = function () {
      (pdfParam5.restore(), this.__originalRestore());
    }),
    (pdfParam4.translate = function (pdfParam1395, __pdfY) {
      (pdfParam5.translate(pdfParam1395, __pdfY),
        this.__originalTranslate(pdfParam1395, __pdfY));
    }),
    (pdfParam4.scale = function (pdfParam1499, __pdfY) {
      (pdfParam5.scale(pdfParam1499, __pdfY),
        this.__originalScale(pdfParam1499, __pdfY));
    }),
    (pdfParam4.transform = function (
      pdfParam1201,
      __pdfY,
      pdfParam1202,
      pdfParam1203,
      pdfParam1204,
      pdfParam1205,
    ) {
      (pdfParam5.transform(
        pdfParam1201,
        __pdfY,
        pdfParam1202,
        pdfParam1203,
        pdfParam1204,
        pdfParam1205,
      ),
        this.__originalTransform(
          pdfParam1201,
          __pdfY,
          pdfParam1202,
          pdfParam1203,
          pdfParam1204,
          pdfParam1205,
        ));
    }),
    (pdfParam4.setTransform = function (
      pdfParam1150,
      __pdfY,
      pdfParam1151,
      pdfParam1152,
      pdfParam1153,
      pdfParam1154,
    ) {
      (pdfParam5.setTransform(
        pdfParam1150,
        __pdfY,
        pdfParam1151,
        pdfParam1152,
        pdfParam1153,
        pdfParam1154,
      ),
        this.__originalSetTransform(
          pdfParam1150,
          __pdfY,
          pdfParam1151,
          pdfParam1152,
          pdfParam1153,
          pdfParam1154,
        ));
    }),
    (pdfParam4.resetTransform = function () {
      (pdfParam5.resetTransform(), this.__originalResetTransform());
    }),
    (pdfParam4.rotate = function (pdfParam1537) {
      (pdfParam5.rotate(pdfParam1537), this.__originalRotate(pdfParam1537));
    }),
    (pdfParam4.clip = function (pdfParam1569) {
      (pdfParam5.clip(pdfParam1569), this.__originalClip(pdfParam1569));
    }),
    (pdfParam4.moveTo = function (pdfParam1471, __pdfY) {
      (pdfParam5.moveTo(pdfParam1471, __pdfY),
        this.__originalMoveTo(pdfParam1471, __pdfY));
    }),
    (pdfParam4.lineTo = function (pdfParam1472, __pdfY) {
      (pdfParam5.lineTo(pdfParam1472, __pdfY),
        this.__originalLineTo(pdfParam1472, __pdfY));
    }),
    (pdfParam4.bezierCurveTo = function (
      pdfParam1129,
      __pdfY,
      pdfParam1130,
      pdfParam1131,
      pdfParam1132,
      pdfParam1133,
    ) {
      (pdfParam5.bezierCurveTo(
        pdfParam1129,
        __pdfY,
        pdfParam1130,
        pdfParam1131,
        pdfParam1132,
        pdfParam1133,
      ),
        this.__originalBezierCurveTo(
          pdfParam1129,
          __pdfY,
          pdfParam1130,
          pdfParam1131,
          pdfParam1132,
          pdfParam1133,
        ));
    }),
    (pdfParam4.rect = function (
      pdfParam1368,
      __pdfY,
      pdfParam1369,
      pdfParam1370,
    ) {
      (pdfParam5.rect(pdfParam1368, __pdfY, pdfParam1369, pdfParam1370),
        this.__originalRect(pdfParam1368, __pdfY, pdfParam1369, pdfParam1370));
    }),
    (pdfParam4.closePath = function () {
      (pdfParam5.closePath(), this.__originalClosePath());
    }),
    (pdfParam4.beginPath = function () {
      (pdfParam5.beginPath(), this.__originalBeginPath());
    }));
}
var pdfValue84 = class {
  constructor(pdfParam1340) {
    ((this.canvasFactory = pdfParam1340), (this.cache = Object.create(null)));
  }
  getCanvas(pdfParam758, pdfParam759, __pdfY) {
    let pdfValue1598;
    return (
      this.cache[pdfParam758] === void 0
        ? ((pdfValue1598 = this.canvasFactory.create(pdfParam759, __pdfY)),
          (this.cache[pdfParam758] = pdfValue1598))
        : ((pdfValue1598 = this.cache[pdfParam758]),
          this.canvasFactory.reset(pdfValue1598, pdfParam759, __pdfY)),
      pdfValue1598
    );
  }
  delete(pdfParam1684) {
    delete this.cache[pdfParam1684];
  }
  clear() {
    for (let pdfValue1862 in this.cache) {
      let pdfValue2004 = this.cache[pdfValue1862];
      (this.canvasFactory.destroy(pdfValue2004),
        delete this.cache[pdfValue1862]);
    }
  }
};
function pdfHelper36(
  pdfParam150,
  pdfParam151,
  __pdfY,
  pdfParam152,
  pdfParam153,
  pdfParam154,
  pdfParam155,
  pdfParam156,
  __pdfS,
  pdfParam157,
) {
  let [__pdfI, __pdfR, ___pdfS, pdfValue582, _pdfNt, __pdfC] =
    pdfHelper19(pdfParam150);
  if (__pdfR === 0 && ___pdfS === 0) {
    let pdfValue1272 = pdfParam155 * __pdfI + _pdfNt,
      ___pdfJ = Math.round(pdfValue1272),
      __pdfG = pdfParam156 * pdfValue582 + __pdfC,
      pdfValue1273 = Math.round(__pdfG),
      __pdfX = (pdfParam155 + __pdfS) * __pdfI + _pdfNt,
      pdfValue1274 = Math.abs(Math.round(__pdfX) - ___pdfJ) || 1,
      pdfValue1275 = (pdfParam156 + pdfParam157) * pdfValue582 + __pdfC,
      pdfValue1276 = Math.abs(Math.round(pdfValue1275) - pdfValue1273) || 1;
    return (
      pdfParam150.setTransform(
        Math.sign(__pdfI),
        0,
        0,
        Math.sign(pdfValue582),
        ___pdfJ,
        pdfValue1273,
      ),
      pdfParam150.drawImage(
        pdfParam151,
        __pdfY,
        pdfParam152,
        pdfParam153,
        pdfParam154,
        0,
        0,
        pdfValue1274,
        pdfValue1276,
      ),
      pdfParam150.setTransform(
        __pdfI,
        __pdfR,
        ___pdfS,
        pdfValue582,
        _pdfNt,
        __pdfC,
      ),
      [pdfValue1274, pdfValue1276]
    );
  }
  if (__pdfI === 0 && pdfValue582 === 0) {
    let pdfValue1277 = pdfParam156 * ___pdfS + _pdfNt,
      ___pdfJ = Math.round(pdfValue1277),
      __pdfG = pdfParam155 * __pdfR + __pdfC,
      pdfValue1278 = Math.round(__pdfG),
      __pdfX = (pdfParam156 + pdfParam157) * ___pdfS + _pdfNt,
      pdfValue1279 = Math.abs(Math.round(__pdfX) - ___pdfJ) || 1,
      pdfValue1280 = (pdfParam155 + __pdfS) * __pdfR + __pdfC,
      pdfValue1281 = Math.abs(Math.round(pdfValue1280) - pdfValue1278) || 1;
    return (
      pdfParam150.setTransform(
        0,
        Math.sign(__pdfR),
        Math.sign(___pdfS),
        0,
        ___pdfJ,
        pdfValue1278,
      ),
      pdfParam150.drawImage(
        pdfParam151,
        __pdfY,
        pdfParam152,
        pdfParam153,
        pdfParam154,
        0,
        0,
        pdfValue1281,
        pdfValue1279,
      ),
      pdfParam150.setTransform(
        __pdfI,
        __pdfR,
        ___pdfS,
        pdfValue582,
        _pdfNt,
        __pdfC,
      ),
      [pdfValue1281, pdfValue1279]
    );
  }
  pdfParam150.drawImage(
    pdfParam151,
    __pdfY,
    pdfParam152,
    pdfParam153,
    pdfParam154,
    pdfParam155,
    pdfParam156,
    __pdfS,
    pdfParam157,
  );
  let pdfValue583 = Math.hypot(__pdfI, __pdfR),
    __pdfJ = Math.hypot(___pdfS, pdfValue582);
  return [pdfValue583 * __pdfS, __pdfJ * pdfParam157];
}
var pdfValue85 = class {
  alphaIsShape = !1;
  fontSize = 0;
  fontSizeScale = 1;
  textMatrix = null;
  textMatrixScale = 1;
  fontMatrix = pdfValue3;
  leading = 0;
  x = 0;
  y = 0;
  lineX = 0;
  lineY = 0;
  charSpacing = 0;
  wordSpacing = 0;
  textHScale = 1;
  textRenderingMode = pdfValue7.FILL;
  textRise = 0;
  fillColor = `#000000`;
  strokeColor = `#000000`;
  patternFill = !1;
  patternStroke = !1;
  fillAlpha = 1;
  strokeAlpha = 1;
  lineWidth = 1;
  activeSMask = null;
  transferMaps = `none`;
  constructor(pdfParam1134, pdfParam1135, __pdfY) {
    (__pdfY?.(this),
      (this.clipBox = new Float32Array([0, 0, pdfParam1134, pdfParam1135])),
      (this.minMax = pdfValue83.slice()));
  }
  clone() {
    let pdfValue1827 = Object.create(this);
    return (
      (pdfValue1827.clipBox = this.clipBox.slice()),
      (pdfValue1827.minMax = this.minMax.slice()),
      pdfValue1827
    );
  }
  getPathBoundingBox(pdfParam493 = pdfValue69.FILL, pdfParam494 = null) {
    let __pdfY = this.minMax.slice();
    if (pdfParam493 === pdfValue69.STROKE) {
      (pdfParam494 || pdfHelper5(`Stroke bounding box must include transform.`),
        pdfA.singularValueDecompose2dScale(pdfParam494, pdfValue82));
      let pdfValue1531 = (pdfValue82[0] * this.lineWidth) / 2,
        pdfValue1532 = (pdfValue82[1] * this.lineWidth) / 2;
      ((__pdfY[0] -= pdfValue1531),
        (__pdfY[1] -= pdfValue1532),
        (__pdfY[2] += pdfValue1531),
        (__pdfY[3] += pdfValue1532));
    }
    return __pdfY;
  }
  updateClipFromPath() {
    let pdfValue1734 = pdfA.intersect(this.clipBox, this.getPathBoundingBox());
    this.startNewPathAndClipBox(pdfValue1734 || [0, 0, 0, 0]);
  }
  isEmptyClip() {
    return this.minMax[0] === 1 / 0;
  }
  startNewPathAndClipBox(pdfParam1317) {
    (this.clipBox.set(pdfParam1317, 0), this.minMax.set(pdfValue83, 0));
  }
  getClippedPathBoundingBox(
    pdfParam1044 = pdfValue69.FILL,
    pdfParam1045 = null,
  ) {
    return pdfA.intersect(
      this.clipBox,
      this.getPathBoundingBox(pdfParam1044, pdfParam1045),
    );
  }
};
function _n(pdfParam47, pdfParam48) {
  if (pdfParam48 instanceof ImageData) {
    pdfParam47.putImageData(pdfParam48, 0, 0);
    return;
  }
  let __pdfY = pdfParam48.height,
    pdfValue388 = pdfParam48.width,
    pdfValue389 = __pdfY % pdfValue80,
    pdfValue390 = (__pdfY - pdfValue389) / pdfValue80,
    pdfValue391 = pdfValue389 === 0 ? pdfValue390 : pdfValue390 + 1,
    pdfValue392 = pdfParam47.createImageData(pdfValue388, pdfValue80),
    __pdfS = 0,
    pdfValue393,
    __pdfI = pdfParam48.data,
    __pdfR = pdfValue392.data,
    ___pdfS,
    pdfValue394,
    __pdfC,
    pdfValue395;
  if (pdfParam48.kind === pdfNt.GRAYSCALE_1BPP) {
    let pdfValue830 = __pdfI.byteLength,
      ___pdfY = new Uint32Array(__pdfR.buffer, 0, __pdfR.byteLength >> 2),
      _pdfNt = ___pdfY.length,
      pdfValue831 = (pdfValue388 + 7) >> 3,
      __pdfJ = 4294967295,
      __pdfG = pdfTt.isLittleEndian ? 4278190080 : 255;
    for (___pdfS = 0; ___pdfS < pdfValue391; ___pdfS++) {
      for (
        __pdfC = ___pdfS < pdfValue390 ? pdfValue80 : pdfValue389,
          pdfValue393 = 0,
          pdfValue394 = 0;
        pdfValue394 < __pdfC;
        pdfValue394++
      ) {
        let pdfValue1306 = pdfValue830 - __pdfS,
          pdfValue1307 = 0,
          pdfValue1308 =
            pdfValue1306 > pdfValue831 ? pdfValue388 : pdfValue1306 * 8 - 7,
          pdfValue1309 = pdfValue1308 & -8,
          pdfValue1310 = 0,
          ___pdfR = 0;
        for (; pdfValue1307 < pdfValue1309; pdfValue1307 += 8)
          ((___pdfR = __pdfI[__pdfS++]),
            (___pdfY[pdfValue393++] = ___pdfR & 128 ? __pdfJ : __pdfG),
            (___pdfY[pdfValue393++] = ___pdfR & 64 ? __pdfJ : __pdfG),
            (___pdfY[pdfValue393++] = ___pdfR & 32 ? __pdfJ : __pdfG),
            (___pdfY[pdfValue393++] = ___pdfR & 16 ? __pdfJ : __pdfG),
            (___pdfY[pdfValue393++] = ___pdfR & 8 ? __pdfJ : __pdfG),
            (___pdfY[pdfValue393++] = ___pdfR & 4 ? __pdfJ : __pdfG),
            (___pdfY[pdfValue393++] = ___pdfR & 2 ? __pdfJ : __pdfG),
            (___pdfY[pdfValue393++] = ___pdfR & 1 ? __pdfJ : __pdfG));
        for (; pdfValue1307 < pdfValue1308; pdfValue1307++)
          (pdfValue1310 === 0 &&
            ((___pdfR = __pdfI[__pdfS++]), (pdfValue1310 = 128)),
            (___pdfY[pdfValue393++] = ___pdfR & pdfValue1310 ? __pdfJ : __pdfG),
            (pdfValue1310 >>= 1));
      }
      for (; pdfValue393 < _pdfNt; ) ___pdfY[pdfValue393++] = 0;
      pdfParam47.putImageData(pdfValue392, 0, ___pdfS * pdfValue80);
    }
  } else if (pdfParam48.kind === pdfNt.RGBA_32BPP) {
    for (
      pdfValue394 = 0, pdfValue395 = pdfValue388 * pdfValue80 * 4, ___pdfS = 0;
      ___pdfS < pdfValue390;
      ___pdfS++
    )
      (__pdfR.set(__pdfI.subarray(__pdfS, __pdfS + pdfValue395)),
        (__pdfS += pdfValue395),
        pdfParam47.putImageData(pdfValue392, 0, pdfValue394),
        (pdfValue394 += pdfValue80));
    ___pdfS < pdfValue391 &&
      ((pdfValue395 = pdfValue388 * pdfValue389 * 4),
      __pdfR.set(__pdfI.subarray(__pdfS, __pdfS + pdfValue395)),
      pdfParam47.putImageData(pdfValue392, 0, pdfValue394));
  } else if (pdfParam48.kind === pdfNt.RGB_24BPP)
    for (
      __pdfC = pdfValue80, pdfValue395 = pdfValue388 * __pdfC, ___pdfS = 0;
      ___pdfS < pdfValue391;
      ___pdfS++
    ) {
      for (
        ___pdfS >= pdfValue390 &&
          ((__pdfC = pdfValue389), (pdfValue395 = pdfValue388 * __pdfC)),
          pdfValue393 = 0,
          pdfValue394 = pdfValue395;
        pdfValue394--;

      )
        ((__pdfR[pdfValue393++] = __pdfI[__pdfS++]),
          (__pdfR[pdfValue393++] = __pdfI[__pdfS++]),
          (__pdfR[pdfValue393++] = __pdfI[__pdfS++]),
          (__pdfR[pdfValue393++] = 255));
      pdfParam47.putImageData(pdfValue392, 0, ___pdfS * pdfValue80);
    }
  else throw Error(`bad image kind: ${pdfParam48.kind}`);
}
function pdfHelper37(pdfParam427, pdfParam428) {
  if (pdfParam428.bitmap) {
    pdfParam427.drawImage(pdfParam428.bitmap, 0, 0);
    return;
  }
  let __pdfY = pdfParam428.height,
    pdfValue1157 = pdfParam428.width,
    pdfValue1158 = __pdfY % pdfValue80,
    pdfValue1159 = (__pdfY - pdfValue1158) / pdfValue80,
    pdfValue1160 = pdfValue1158 === 0 ? pdfValue1159 : pdfValue1159 + 1,
    pdfValue1161 = pdfParam427.createImageData(pdfValue1157, pdfValue80),
    __pdfS = 0,
    pdfValue1162 = pdfParam428.data,
    __pdfI = pdfValue1161.data;
  for (let pdfValue1674 = 0; pdfValue1674 < pdfValue1160; pdfValue1674++) {
    let ___pdfY = pdfValue1674 < pdfValue1159 ? pdfValue80 : pdfValue1158;
    (({ srcPos: __pdfS } = on({
      src: pdfValue1162,
      srcPos: __pdfS,
      dest: __pdfI,
      width: pdfValue1157,
      height: ___pdfY,
      nonBlackColor: 0,
    })),
      pdfParam427.putImageData(pdfValue1161, 0, pdfValue1674 * pdfValue80));
  }
}
function pdfHelper38(pdfParam446, pdfParam447) {
  for (let __pdfY of [
    `strokeStyle`,
    `fillStyle`,
    `fillRule`,
    `globalAlpha`,
    `lineWidth`,
    `lineCap`,
    `lineJoin`,
    `miterLimit`,
    `globalCompositeOperation`,
    `font`,
    `filter`,
  ])
    pdfParam446[__pdfY] !== void 0 &&
      (pdfParam447[__pdfY] = pdfParam446[__pdfY]);
  pdfParam446.setLineDash !== void 0 &&
    (pdfParam447.setLineDash(pdfParam446.getLineDash()),
    (pdfParam447.lineDashOffset = pdfParam446.lineDashOffset));
}
function pdfHelper39(pdfParam370) {
  ((pdfParam370.strokeStyle = pdfParam370.fillStyle = `#000000`),
    (pdfParam370.fillRule = `nonzero`),
    (pdfParam370.globalAlpha = 1),
    (pdfParam370.lineWidth = 1),
    (pdfParam370.lineCap = `butt`),
    (pdfParam370.lineJoin = `miter`),
    (pdfParam370.miterLimit = 10),
    (pdfParam370.globalCompositeOperation = `source-over`),
    (pdfParam370.font = `10px sans-serif`),
    pdfParam370.setLineDash !== void 0 &&
      (pdfParam370.setLineDash([]), (pdfParam370.lineDashOffset = 0)));
  let { filter: filter } = pdfParam370;
  filter !== `none` && filter !== `` && (pdfParam370.filter = `none`);
}
function pdfHelper40(pdfParam807, pdfParam808) {
  if (pdfParam808) return !0;
  pdfA.singularValueDecompose2dScale(pdfParam807, pdfValue82);
  let __pdfY = Math.fround(pdfUnderscore.pixelRatio * _pdfC.PDF_TO_CSS_UNITS);
  return pdfValue82[0] <= __pdfY && pdfValue82[1] <= __pdfY;
}
var pdfValue86 = [`butt`, `round`, `square`],
  pdfValue87 = [`miter`, `round`, `bevel`],
  pdfValue88 = {},
  pdfValue89 = {},
  pdfValue90 = class PdfClass1 {
    constructor(
      pdfParam91,
      pdfParam92,
      __pdfY,
      pdfParam93,
      pdfParam94,
      {
        optionalContentConfig: optionalContentConfig,
        markedContentStack = null,
      },
      pdfParam95,
      __pdfS,
      pdfParam96,
    ) {
      ((this.ctx = pdfParam91),
        (this.current = new pdfValue85(
          this.ctx.canvas.width,
          this.ctx.canvas.height,
        )),
        (this.stateStack = []),
        (this.pendingClip = null),
        (this.pendingEOFill = !1),
        (this.res = null),
        (this.xobjs = null),
        (this.commonObjs = pdfParam92),
        (this.objs = __pdfY),
        (this.canvasFactory = pdfParam93),
        (this.filterFactory = pdfParam94),
        (this.groupStack = []),
        (this.baseTransform = null),
        (this.baseTransformStack = []),
        (this.groupLevel = 0),
        (this.smaskStack = []),
        (this.smaskCounter = 0),
        (this.tempSMask = null),
        (this.suspendedCtx = null),
        (this.contentVisible = !0),
        (this.markedContentStack = markedContentStack || []),
        (this.optionalContentConfig = optionalContentConfig),
        (this.cachedCanvases = new pdfValue84(this.canvasFactory)),
        (this.cachedPatterns = new Map()),
        (this.annotationCanvasMap = pdfParam95),
        (this.viewportScale = 1),
        (this.outputScaleX = 1),
        (this.outputScaleY = 1),
        (this.pageColors = __pdfS),
        (this._cachedScaleForStroking = [-1, 0]),
        (this._cachedGetSinglePixelWidth = null),
        (this._cachedBitmapsMap = new Map()),
        (this.dependencyTracker = pdfParam96 ?? null));
    }
    getObject(pdfParam716, pdfParam717, __pdfY = null) {
      return typeof pdfParam717 == `string`
        ? (this.dependencyTracker?.recordNamedDependency(
            pdfParam716,
            pdfParam717,
          ),
          pdfParam717.startsWith(`g_`)
            ? this.commonObjs.get(pdfParam717)
            : this.objs.get(pdfParam717))
        : __pdfY;
    }
    beginDrawing({
      transform: transform,
      viewport: viewport,
      transparency: __pdfY = !1,
      background = null,
    }) {
      let pdfValue674 = this.ctx.canvas.width,
        pdfValue675 = this.ctx.canvas.height,
        pdfValue676 = this.ctx.fillStyle;
      if (
        ((this.ctx.fillStyle = background || `#ffffff`),
        this.ctx.fillRect(0, 0, pdfValue674, pdfValue675),
        (this.ctx.fillStyle = pdfValue676),
        __pdfY)
      ) {
        let pdfValue1470 = this.cachedCanvases.getCanvas(
          `transparent`,
          pdfValue674,
          pdfValue675,
        );
        ((this.compositeCtx = this.ctx),
          (this.transparentCanvas = pdfValue1470.canvas),
          (this.ctx = pdfValue1470.context),
          this.ctx.save(),
          this.ctx.transform(...pdfHelper19(this.compositeCtx)));
      }
      (this.ctx.save(),
        pdfHelper39(this.ctx),
        transform &&
          (this.ctx.transform(...transform),
          (this.outputScaleX = transform[0]),
          (this.outputScaleY = transform[0])),
        this.ctx.transform(...viewport.transform),
        (this.viewportScale = viewport.scale),
        (this.baseTransform = pdfHelper19(this.ctx)));
    }
    executeOperatorList(
      pdfParam235,
      pdfParam236,
      __pdfY,
      pdfParam237,
      pdfParam238,
    ) {
      let pdfValue748 = pdfParam235.argsArray,
        pdfValue749 = pdfParam235.fnArray,
        pdfValue750 = pdfParam236 || 0,
        __pdfS = pdfValue748.length;
      if (__pdfS === pdfValue750) return pdfValue750;
      let pdfValue751 =
          __pdfS - pdfValue750 > pdfValue79 && typeof __pdfY == `function`,
        __pdfI = pdfValue751 ? Date.now() + pdfValue78 : 0,
        __pdfR = 0,
        ___pdfS = this.commonObjs,
        pdfValue752 = this.objs,
        _pdfNt,
        __pdfC;
      for (;;) {
        if (
          pdfParam237 !== void 0 &&
          pdfValue750 === pdfParam237.nextBreakPoint
        )
          return (pdfParam237.breakIt(pdfValue750, __pdfY), pdfValue750);
        if (!pdfParam238 || pdfParam238(pdfValue750))
          if (
            ((_pdfNt = pdfValue749[pdfValue750]),
            (__pdfC = pdfValue748[pdfValue750] ?? null),
            _pdfNt !== pdfG.dependency)
          )
            __pdfC === null
              ? this[_pdfNt](pdfValue750)
              : this[_pdfNt](pdfValue750, ...__pdfC);
          else
            for (let pdfValue1731 of __pdfC) {
              this.dependencyTracker?.recordNamedData(
                pdfValue1731,
                pdfValue750,
              );
              let pdfValue1793 = pdfValue1731.startsWith(`g_`)
                ? ___pdfS
                : pdfValue752;
              if (!pdfValue1793.has(pdfValue1731))
                return (pdfValue1793.get(pdfValue1731, __pdfY), pdfValue750);
            }
        if ((pdfValue750++, pdfValue750 === __pdfS)) return pdfValue750;
        if (pdfValue751 && ++__pdfR > pdfValue79) {
          if (Date.now() > __pdfI) return (__pdfY(), pdfValue750);
          __pdfR = 0;
        }
      }
    }
    #e() {
      for (; this.stateStack.length || this.inSMaskMode; ) this.restore();
      ((this.current.activeSMask = null),
        this.ctx.restore(),
        (this.transparentCanvas &&=
          ((this.ctx = this.compositeCtx),
          this.ctx.save(),
          this.ctx.setTransform(1, 0, 0, 1, 0, 0),
          this.ctx.drawImage(this.transparentCanvas, 0, 0),
          this.ctx.restore(),
          null)));
    }
    endDrawing() {
      (this.#e(), this.cachedCanvases.clear(), this.cachedPatterns.clear());
      for (let pdfValue1577 of this._cachedBitmapsMap.values()) {
        for (let pdfValue1804 of pdfValue1577.values())
          typeof HTMLCanvasElement < `u` &&
            pdfValue1804 instanceof HTMLCanvasElement &&
            (pdfValue1804.width = pdfValue1804.height = 0);
        pdfValue1577.clear();
      }
      (this._cachedBitmapsMap.clear(), this.#t());
    }
    #t() {
      if (this.pageColors) {
        let pdfValue1425 = this.filterFactory.addHCMFilter(
          this.pageColors.foreground,
          this.pageColors.background,
        );
        if (pdfValue1425 !== `none`) {
          let pdfValue1849 = this.ctx.filter;
          ((this.ctx.filter = pdfValue1425),
            this.ctx.drawImage(this.ctx.canvas, 0, 0),
            (this.ctx.filter = pdfValue1849));
        }
      }
    }
    _scaleImage(pdfParam231, pdfParam232) {
      let __pdfY = pdfParam231.width ?? pdfParam231.displayWidth,
        pdfValue741 = pdfParam231.height ?? pdfParam231.displayHeight,
        pdfValue742 = Math.max(Math.hypot(pdfParam232[0], pdfParam232[1]), 1),
        pdfValue743 = Math.max(Math.hypot(pdfParam232[2], pdfParam232[3]), 1),
        pdfValue744 = __pdfY,
        pdfValue745 = pdfValue741,
        __pdfS = `prescale1`,
        pdfValue746,
        __pdfI;
      for (
        ;
        (pdfValue742 > 2 && pdfValue744 > 1) ||
        (pdfValue743 > 2 && pdfValue745 > 1);

      ) {
        let pdfValue1121 = pdfValue744,
          ___pdfY = pdfValue745;
        (pdfValue742 > 2 &&
          pdfValue744 > 1 &&
          ((pdfValue1121 =
            pdfValue744 >= 16384
              ? Math.floor(pdfValue744 / 2) - 1 || 1
              : Math.ceil(pdfValue744 / 2)),
          (pdfValue742 /= pdfValue744 / pdfValue1121)),
          pdfValue743 > 2 &&
            pdfValue745 > 1 &&
            ((___pdfY =
              pdfValue745 >= 16384
                ? Math.floor(pdfValue745 / 2) - 1 || 1
                : Math.ceil(pdfValue745) / 2),
            (pdfValue743 /= pdfValue745 / ___pdfY)),
          (pdfValue746 = this.cachedCanvases.getCanvas(
            __pdfS,
            pdfValue1121,
            ___pdfY,
          )),
          (__pdfI = pdfValue746.context),
          __pdfI.clearRect(0, 0, pdfValue1121, ___pdfY),
          __pdfI.drawImage(
            pdfParam231,
            0,
            0,
            pdfValue744,
            pdfValue745,
            0,
            0,
            pdfValue1121,
            ___pdfY,
          ),
          (pdfParam231 = pdfValue746.canvas),
          (pdfValue744 = pdfValue1121),
          (pdfValue745 = ___pdfY),
          (__pdfS = __pdfS === `prescale1` ? `prescale2` : `prescale1`));
      }
      return {
        img: pdfParam231,
        paintWidth: pdfValue744,
        paintHeight: pdfValue745,
      };
    }
    _createMaskCanvas(pdfParam17, pdfParam18) {
      let __pdfY = this.ctx,
        { width: width, height: height } = pdfParam18,
        pdfValue311 = this.current.fillColor,
        pdfValue312 = this.current.patternFill,
        pdfValue313 = pdfHelper19(__pdfY),
        __pdfS,
        pdfValue314,
        __pdfI,
        __pdfR;
      if ((pdfParam18.bitmap || pdfParam18.data) && pdfParam18.count > 1) {
        let ___pdfY = pdfParam18.bitmap || pdfParam18.data.buffer;
        ((pdfValue314 = JSON.stringify(
          pdfValue312 ? pdfValue313 : [pdfValue313.slice(0, 4), pdfValue311],
        )),
          (__pdfS = this._cachedBitmapsMap.get(___pdfY)),
          __pdfS ||
            ((__pdfS = new Map()),
            this._cachedBitmapsMap.set(___pdfY, __pdfS)));
        let pdfValue1001 = __pdfS.get(pdfValue314);
        if (pdfValue1001 && !pdfValue312) {
          let pdfValue1505 = Math.round(
              Math.min(pdfValue313[0], pdfValue313[2]) + pdfValue313[4],
            ),
            ____pdfY = Math.round(
              Math.min(pdfValue313[1], pdfValue313[3]) + pdfValue313[5],
            );
          return (
            this.dependencyTracker?.recordDependencies(
              pdfParam17,
              pdfValue68.transformAndFill,
            ),
            {
              canvas: pdfValue1001,
              offsetX: pdfValue1505,
              offsetY: ____pdfY,
            }
          );
        }
        __pdfI = pdfValue1001;
      }
      __pdfI ||
        ((__pdfR = this.cachedCanvases.getCanvas(`maskCanvas`, width, height)),
        pdfHelper37(__pdfR.context, pdfParam18));
      let ___pdfS = pdfA.transform(pdfValue313, [
        1 / width,
        0,
        0,
        -1 / height,
        0,
        0,
      ]);
      ___pdfS = pdfA.transform(___pdfS, [1, 0, 0, 1, 0, -height]);
      let pdfValue315 = pdfValue83.slice();
      pdfA.axialAlignedBoundingBox([0, 0, width, height], ___pdfS, pdfValue315);
      let [_pdfNt, __pdfC, pdfValue316, __pdfJ] = pdfValue315,
        __pdfG = Math.round(pdfValue316 - _pdfNt) || 1,
        pdfValue317 = Math.round(__pdfJ - __pdfC) || 1,
        __pdfX = this.cachedCanvases.getCanvas(
          `fillCanvas`,
          __pdfG,
          pdfValue317,
        ),
        pdfValue318 = __pdfX.context,
        pdfValue319 = _pdfNt,
        pdfValue320 = __pdfC;
      (pdfValue318.translate(-pdfValue319, -pdfValue320),
        pdfValue318.transform(...___pdfS),
        __pdfI ||
          ((__pdfI = this._scaleImage(__pdfR.canvas, pdfHelper20(pdfValue318))),
          (__pdfI = __pdfI.img),
          __pdfS && pdfValue312 && __pdfS.set(pdfValue314, __pdfI)),
        (pdfValue318.imageSmoothingEnabled = pdfHelper40(
          pdfHelper19(pdfValue318),
          pdfParam18.interpolate,
        )),
        pdfHelper36(
          pdfValue318,
          __pdfI,
          0,
          0,
          __pdfI.width,
          __pdfI.height,
          0,
          0,
          width,
          height,
        ),
        (pdfValue318.globalCompositeOperation = `source-in`));
      let pdfValue321 = pdfA.transform(pdfHelper20(pdfValue318), [
        1,
        0,
        0,
        1,
        -pdfValue319,
        -pdfValue320,
      ]);
      return (
        (pdfValue318.fillStyle = pdfValue312
          ? pdfValue311.getPattern(
              __pdfY,
              this,
              pdfValue321,
              pdfValue69.FILL,
              pdfParam17,
            )
          : pdfValue311),
        pdfValue318.fillRect(0, 0, width, height),
        __pdfS &&
          !pdfValue312 &&
          (this.cachedCanvases.delete(`fillCanvas`),
          __pdfS.set(pdfValue314, __pdfX.canvas)),
        this.dependencyTracker?.recordDependencies(
          pdfParam17,
          pdfValue68.transformAndFill,
        ),
        {
          canvas: __pdfX.canvas,
          offsetX: Math.round(pdfValue319),
          offsetY: Math.round(pdfValue320),
        }
      );
    }
    setLineWidth(pdfParam640, pdfParam641) {
      (this.dependencyTracker?.recordSimpleData(`lineWidth`, pdfParam640),
        pdfParam641 !== this.current.lineWidth &&
          (this._cachedScaleForStroking[0] = -1),
        (this.current.lineWidth = pdfParam641),
        (this.ctx.lineWidth = pdfParam641));
    }
    setLineCap(pdfParam1136, pdfParam1137) {
      (this.dependencyTracker?.recordSimpleData(`lineCap`, pdfParam1136),
        (this.ctx.lineCap = pdfValue86[pdfParam1137]));
    }
    setLineJoin(pdfParam1103, pdfParam1104) {
      (this.dependencyTracker?.recordSimpleData(`lineJoin`, pdfParam1103),
        (this.ctx.lineJoin = pdfValue87[pdfParam1104]));
    }
    setMiterLimit(pdfParam1092, pdfParam1093) {
      (this.dependencyTracker?.recordSimpleData(`miterLimit`, pdfParam1092),
        (this.ctx.miterLimit = pdfParam1093));
    }
    setDash(pdfParam820, pdfParam821, __pdfY) {
      this.dependencyTracker?.recordSimpleData(`dash`, pdfParam820);
      let pdfValue1638 = this.ctx;
      pdfValue1638.setLineDash !== void 0 &&
        (pdfValue1638.setLineDash(pdfParam821),
        (pdfValue1638.lineDashOffset = __pdfY));
    }
    setRenderingIntent(pdfParam1703, pdfParam1704) {}
    setFlatness(pdfParam1727, pdfParam1728) {}
    setGState(pdfParam64, pdfParam65) {
      for (let [__pdfY, pdfValue430] of pdfParam65)
        switch (__pdfY) {
          case `LW`:
            this.setLineWidth(pdfParam64, pdfValue430);
            break;
          case `LC`:
            this.setLineCap(pdfParam64, pdfValue430);
            break;
          case `LJ`:
            this.setLineJoin(pdfParam64, pdfValue430);
            break;
          case `ML`:
            this.setMiterLimit(pdfParam64, pdfValue430);
            break;
          case `D`:
            this.setDash(pdfParam64, pdfValue430[0], pdfValue430[1]);
            break;
          case `RI`:
            this.setRenderingIntent(pdfParam64, pdfValue430);
            break;
          case `FL`:
            this.setFlatness(pdfParam64, pdfValue430);
            break;
          case `Font`:
            this.setFont(pdfParam64, pdfValue430[0], pdfValue430[1]);
            break;
          case `CA`:
            (this.dependencyTracker?.recordSimpleData(
              `strokeAlpha`,
              pdfParam64,
            ),
              (this.current.strokeAlpha = pdfValue430));
            break;
          case `ca`:
            (this.dependencyTracker?.recordSimpleData(`fillAlpha`, pdfParam64),
              (this.ctx.globalAlpha = this.current.fillAlpha = pdfValue430));
            break;
          case `BM`:
            (this.dependencyTracker?.recordSimpleData(
              `globalCompositeOperation`,
              pdfParam64,
            ),
              (this.ctx.globalCompositeOperation = pdfValue430));
            break;
          case `SMask`:
            (this.dependencyTracker?.recordSimpleData(`SMask`, pdfParam64),
              (this.current.activeSMask = pdfValue430 ? this.tempSMask : null),
              (this.tempSMask = null),
              this.checkSMaskState());
            break;
          case `TR`:
            (this.dependencyTracker?.recordSimpleData(`filter`, pdfParam64),
              (this.ctx.filter = this.current.transferMaps =
                this.filterFactory.addFilter(pdfValue430)));
            break;
        }
    }
    get inSMaskMode() {
      return !!this.suspendedCtx;
    }
    checkSMaskState() {
      let pdfValue1641 = this.inSMaskMode;
      this.current.activeSMask && !pdfValue1641
        ? this.beginSMaskMode()
        : !this.current.activeSMask && pdfValue1641 && this.endSMaskMode();
    }
    beginSMaskMode(pdfParam310) {
      if (this.inSMaskMode)
        throw Error(`beginSMaskMode called while already in smask mode`);
      let pdfValue920 = this.ctx.canvas.width,
        __pdfY = this.ctx.canvas.height,
        pdfValue921 = `smaskGroupAt` + this.groupLevel,
        pdfValue922 = this.cachedCanvases.getCanvas(
          pdfValue921,
          pdfValue920,
          __pdfY,
        );
      this.suspendedCtx = this.ctx;
      let pdfValue923 = (this.ctx = pdfValue922.context);
      (pdfValue923.setTransform(this.suspendedCtx.getTransform()),
        pdfHelper38(this.suspendedCtx, pdfValue923),
        pdfHelper35(pdfValue923, this.suspendedCtx),
        this.setGState(pdfParam310, [[`BM`, `source-over`]]));
    }
    endSMaskMode() {
      if (!this.inSMaskMode)
        throw Error(`endSMaskMode called while not in smask mode`);
      (this.ctx._removeMirroring(),
        pdfHelper38(this.ctx, this.suspendedCtx),
        (this.ctx = this.suspendedCtx),
        (this.suspendedCtx = null));
    }
    compose(pdfParam313) {
      if (!this.current.activeSMask) return;
      pdfParam313
        ? ((pdfParam313[0] = Math.floor(pdfParam313[0])),
          (pdfParam313[1] = Math.floor(pdfParam313[1])),
          (pdfParam313[2] = Math.ceil(pdfParam313[2])),
          (pdfParam313[3] = Math.ceil(pdfParam313[3])))
        : (pdfParam313 = [0, 0, this.ctx.canvas.width, this.ctx.canvas.height]);
      let pdfValue932 = this.current.activeSMask,
        __pdfY = this.suspendedCtx;
      (this.composeSMask(__pdfY, pdfValue932, this.ctx, pdfParam313),
        this.ctx.save(),
        this.ctx.setTransform(1, 0, 0, 1, 0, 0),
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height),
        this.ctx.restore());
    }
    composeSMask(pdfParam406, event, __pdfY, pdfParam407) {
      let pdfValue1125 = pdfParam407[0],
        pdfValue1126 = pdfParam407[1],
        pdfValue1127 = pdfParam407[2] - pdfValue1125,
        pdfValue1128 = pdfParam407[3] - pdfValue1126;
      pdfValue1127 === 0 ||
        pdfValue1128 === 0 ||
        (this.genericComposeSMask(
          event.context,
          __pdfY,
          pdfValue1127,
          pdfValue1128,
          event.subtype,
          event.backdrop,
          event.transferMap,
          pdfValue1125,
          pdfValue1126,
          event.offsetX,
          event.offsetY,
        ),
        pdfParam406.save(),
        (pdfParam406.globalAlpha = 1),
        (pdfParam406.globalCompositeOperation = `source-over`),
        pdfParam406.setTransform(1, 0, 0, 1, 0, 0),
        pdfParam406.drawImage(__pdfY.canvas, 0, 0),
        pdfParam406.restore());
    }
    genericComposeSMask(
      pdfParam105,
      pdfParam106,
      __pdfY,
      pdfParam107,
      pdfParam108,
      pdfParam109,
      pdfParam110,
      pdfParam111,
      __pdfS,
      pdfParam112,
      __pdfI,
    ) {
      let __pdfR = pdfParam105.canvas,
        ___pdfS = pdfParam111 - pdfParam112,
        pdfValue489 = __pdfS - __pdfI;
      if (pdfParam109)
        if (
          ___pdfS < 0 ||
          pdfValue489 < 0 ||
          ___pdfS + __pdfY > __pdfR.width ||
          pdfValue489 + pdfParam107 > __pdfR.height
        ) {
          let pdfValue1372 = this.cachedCanvases.getCanvas(
              `maskExtension`,
              __pdfY,
              pdfParam107,
            ),
            pdfValue1373 = pdfValue1372.context;
          (pdfValue1373.drawImage(__pdfR, -___pdfS, -pdfValue489),
            (pdfValue1373.globalCompositeOperation = `destination-atop`),
            (pdfValue1373.fillStyle = pdfParam109),
            pdfValue1373.fillRect(0, 0, __pdfY, pdfParam107),
            (pdfValue1373.globalCompositeOperation = `source-over`),
            (__pdfR = pdfValue1372.canvas),
            (___pdfS = pdfValue489 = 0));
        } else {
          (pdfParam105.save(),
            (pdfParam105.globalAlpha = 1),
            pdfParam105.setTransform(1, 0, 0, 1, 0, 0));
          let pdfValue1492 = new Path2D();
          (pdfValue1492.rect(___pdfS, pdfValue489, __pdfY, pdfParam107),
            pdfParam105.clip(pdfValue1492),
            (pdfParam105.globalCompositeOperation = `destination-atop`),
            (pdfParam105.fillStyle = pdfParam109),
            pdfParam105.fillRect(___pdfS, pdfValue489, __pdfY, pdfParam107),
            pdfParam105.restore());
        }
      (pdfParam106.save(),
        (pdfParam106.globalAlpha = 1),
        pdfParam106.setTransform(1, 0, 0, 1, 0, 0),
        pdfParam108 === `Alpha` && pdfParam110
          ? (pdfParam106.filter =
              this.filterFactory.addAlphaFilter(pdfParam110))
          : pdfParam108 === `Luminosity` &&
            (pdfParam106.filter =
              this.filterFactory.addLuminosityFilter(pdfParam110)));
      let _pdfNt = new Path2D();
      (_pdfNt.rect(pdfParam111, __pdfS, __pdfY, pdfParam107),
        pdfParam106.clip(_pdfNt),
        (pdfParam106.globalCompositeOperation = `destination-in`),
        pdfParam106.drawImage(
          __pdfR,
          ___pdfS,
          pdfValue489,
          __pdfY,
          pdfParam107,
          pdfParam111,
          __pdfS,
          __pdfY,
          pdfParam107,
        ),
        pdfParam106.restore());
    }
    save(pdfParam676) {
      (this.inSMaskMode && pdfHelper38(this.ctx, this.suspendedCtx),
        this.ctx.save());
      let pdfValue1546 = this.current;
      (this.stateStack.push(pdfValue1546),
        (this.current = pdfValue1546.clone()),
        this.dependencyTracker?.save(pdfParam676));
    }
    restore(pdfParam359) {
      if (
        (this.dependencyTracker?.restore(pdfParam359),
        this.stateStack.length === 0)
      ) {
        this.inSMaskMode && this.endSMaskMode();
        return;
      }
      ((this.current = this.stateStack.pop()),
        this.ctx.restore(),
        this.inSMaskMode && pdfHelper38(this.suspendedCtx, this.ctx),
        this.checkSMaskState(),
        (this.pendingClip = null),
        (this._cachedScaleForStroking[0] = -1),
        (this._cachedGetSinglePixelWidth = null));
    }
    transform(
      pdfParam622,
      pdfParam623,
      __pdfY,
      pdfParam624,
      pdfParam625,
      pdfParam626,
      pdfParam627,
    ) {
      (this.dependencyTracker?.recordIncrementalData(`transform`, pdfParam622),
        this.ctx.transform(
          pdfParam623,
          __pdfY,
          pdfParam624,
          pdfParam625,
          pdfParam626,
          pdfParam627,
        ),
        (this._cachedScaleForStroking[0] = -1),
        (this._cachedGetSinglePixelWidth = null));
    }
    constructPath(pdfParam131, pdfParam132, __pdfY, pdfParam133) {
      let [pdfValue550] = __pdfY;
      if (!pdfParam133) {
        ((pdfValue550 ||= __pdfY[0] = new Path2D()),
          this[pdfParam132](pdfParam131, pdfValue550));
        return;
      }
      if (this.dependencyTracker !== null) {
        let ___pdfY =
          pdfParam132 === pdfG.stroke ? this.current.lineWidth / 2 : 0;
        this.dependencyTracker
          .resetBBox(pdfParam131)
          .recordBBox(
            pdfParam131,
            this.ctx,
            pdfParam133[0] - ___pdfY,
            pdfParam133[2] + ___pdfY,
            pdfParam133[1] - ___pdfY,
            pdfParam133[3] + ___pdfY,
          )
          .recordDependencies(pdfParam131, [`transform`]);
      }
      if (!(pdfValue550 instanceof Path2D)) {
        let pdfValue1055 = (__pdfY[0] = new Path2D());
        for (
          let pdfValue1105 = 0, ___pdfY = pdfValue550.length;
          pdfValue1105 < ___pdfY;

        )
          switch (pdfValue550[pdfValue1105++]) {
            case pdfValue9.moveTo:
              pdfValue1055.moveTo(
                pdfValue550[pdfValue1105++],
                pdfValue550[pdfValue1105++],
              );
              break;
            case pdfValue9.lineTo:
              pdfValue1055.lineTo(
                pdfValue550[pdfValue1105++],
                pdfValue550[pdfValue1105++],
              );
              break;
            case pdfValue9.curveTo:
              pdfValue1055.bezierCurveTo(
                pdfValue550[pdfValue1105++],
                pdfValue550[pdfValue1105++],
                pdfValue550[pdfValue1105++],
                pdfValue550[pdfValue1105++],
                pdfValue550[pdfValue1105++],
                pdfValue550[pdfValue1105++],
              );
              break;
            case pdfValue9.closePath:
              pdfValue1055.closePath();
              break;
            default:
              pdfHelper4(
                `Unrecognized drawing path operator: ${pdfValue550[pdfValue1105 - 1]}`,
              );
              break;
          }
        pdfValue550 = pdfValue1055;
      }
      (pdfA.axialAlignedBoundingBox(
        pdfParam133,
        pdfHelper19(this.ctx),
        this.current.minMax,
      ),
        this[pdfParam132](pdfParam131, pdfValue550),
        (this._pathStartIdx = pdfParam131));
    }
    closePath(pdfParam1667) {
      this.ctx.closePath();
    }
    stroke(pdfParam195, pdfParam196, __pdfY = !0) {
      let pdfValue690 = this.ctx,
        pdfValue691 = this.current.strokeColor;
      if (
        ((pdfValue690.globalAlpha = this.current.strokeAlpha),
        this.contentVisible)
      )
        if (typeof pdfValue691 == `object` && pdfValue691?.getPattern) {
          let ___pdfY = pdfValue691.isModifyingCurrentTransform()
            ? pdfValue690.getTransform()
            : null;
          if (
            (pdfValue690.save(),
            (pdfValue690.strokeStyle = pdfValue691.getPattern(
              pdfValue690,
              this,
              pdfHelper20(pdfValue690),
              pdfValue69.STROKE,
              pdfParam195,
            )),
            ___pdfY)
          ) {
            let pdfValue1958 = new Path2D();
            (pdfValue1958.addPath(
              pdfParam196,
              pdfValue690.getTransform().invertSelf().multiplySelf(___pdfY),
            ),
              (pdfParam196 = pdfValue1958));
          }
          (this.rescaleAndStroke(pdfParam196, !1), pdfValue690.restore());
        } else this.rescaleAndStroke(pdfParam196, !0);
      (this.dependencyTracker?.recordDependencies(
        pdfParam195,
        pdfValue68.stroke,
      ),
        __pdfY &&
          this.consumePath(
            pdfParam195,
            pdfParam196,
            this.current.getClippedPathBoundingBox(
              pdfValue69.STROKE,
              pdfHelper19(this.ctx),
            ),
          ),
        (pdfValue690.globalAlpha = this.current.fillAlpha));
    }
    closeStroke(pdfParam1668, pdfParam1669) {
      this.stroke(pdfParam1668, pdfParam1669);
    }
    fill(pdfParam193, pdfParam194, __pdfY = !0) {
      let pdfValue685 = this.ctx,
        pdfValue686 = this.current.fillColor,
        pdfValue687 = this.current.patternFill,
        pdfValue688 = !1;
      if (pdfValue687) {
        let ___pdfY = pdfValue686.isModifyingCurrentTransform()
          ? pdfValue685.getTransform()
          : null;
        if (
          (this.dependencyTracker?.save(pdfParam193),
          pdfValue685.save(),
          (pdfValue685.fillStyle = pdfValue686.getPattern(
            pdfValue685,
            this,
            pdfHelper20(pdfValue685),
            pdfValue69.FILL,
            pdfParam193,
          )),
          ___pdfY)
        ) {
          let pdfValue1959 = new Path2D();
          (pdfValue1959.addPath(
            pdfParam194,
            pdfValue685.getTransform().invertSelf().multiplySelf(___pdfY),
          ),
            (pdfParam194 = pdfValue1959));
        }
        pdfValue688 = !0;
      }
      let pdfValue689 = this.current.getClippedPathBoundingBox();
      (this.contentVisible &&
        pdfValue689 !== null &&
        (this.pendingEOFill
          ? (pdfValue685.fill(pdfParam194, `evenodd`),
            (this.pendingEOFill = !1))
          : pdfValue685.fill(pdfParam194)),
        this.dependencyTracker?.recordDependencies(
          pdfParam193,
          pdfValue68.fill,
        ),
        pdfValue688 &&
          (pdfValue685.restore(), this.dependencyTracker?.restore(pdfParam193)),
        __pdfY && this.consumePath(pdfParam193, pdfParam194, pdfValue689));
    }
    eoFill(pdfParam1538, pdfParam1539) {
      ((this.pendingEOFill = !0), this.fill(pdfParam1538, pdfParam1539));
    }
    fillStroke(pdfParam1272, pdfParam1273) {
      (this.fill(pdfParam1272, pdfParam1273, !1),
        this.stroke(pdfParam1272, pdfParam1273, !1),
        this.consumePath(pdfParam1272, pdfParam1273));
    }
    eoFillStroke(pdfParam1396, pdfParam1397) {
      ((this.pendingEOFill = !0), this.fillStroke(pdfParam1396, pdfParam1397));
    }
    closeFillStroke(pdfParam1593, pdfParam1594) {
      this.fillStroke(pdfParam1593, pdfParam1594);
    }
    closeEOFillStroke(pdfParam1348, pdfParam1349) {
      ((this.pendingEOFill = !0), this.fillStroke(pdfParam1348, pdfParam1349));
    }
    endPath(pdfParam1653, pdfParam1654) {
      this.consumePath(pdfParam1653, pdfParam1654);
    }
    rawFillPath(pdfParam983, pdfParam984) {
      (this.ctx.fill(pdfParam984),
        this.dependencyTracker
          ?.recordDependencies(pdfParam983, pdfValue68.rawFillPath)
          .recordOperation(pdfParam983));
    }
    clip(pdfParam1107) {
      (this.dependencyTracker?.recordFutureForcedDependency(
        `clipMode`,
        pdfParam1107,
      ),
        (this.pendingClip = pdfValue88));
    }
    eoClip(pdfParam1096) {
      (this.dependencyTracker?.recordFutureForcedDependency(
        `clipMode`,
        pdfParam1096,
      ),
        (this.pendingClip = pdfValue89));
    }
    beginText(pdfParam495) {
      ((this.current.textMatrix = null),
        (this.current.textMatrixScale = 1),
        (this.current.x = this.current.lineX = 0),
        (this.current.y = this.current.lineY = 0),
        this.dependencyTracker
          ?.recordOpenMarker(pdfParam495)
          .resetIncrementalData(`sameLineText`)
          .resetIncrementalData(`moveText`, pdfParam495));
    }
    endText(pdfParam269) {
      let pdfValue815 = this.pendingTextPaths,
        __pdfY = this.ctx;
      if (this.dependencyTracker) {
        let { dependencyTracker: ___pdfY } = this;
        (pdfValue815 !== void 0 &&
          ___pdfY
            .recordFutureForcedDependency(`textClip`, ___pdfY.getOpenMarker())
            .recordFutureForcedDependency(`textClip`, pdfParam269),
          ___pdfY.recordCloseMarker(pdfParam269));
      }
      if (pdfValue815 !== void 0) {
        let pdfValue1485 = new Path2D(),
          pdfValue1486 = __pdfY.getTransform().invertSelf();
        for (let {
          transform: ___pdfY,
          x: x,
          y: y,
          fontSize: fontSize,
          path: path,
        } of pdfValue815)
          path &&
            pdfValue1485.addPath(
              path,
              new DOMMatrix(___pdfY)
                .preMultiplySelf(pdfValue1486)
                .translate(x, y)
                .scale(fontSize, -fontSize),
            );
        __pdfY.clip(pdfValue1485);
      }
      delete this.pendingTextPaths;
    }
    setCharSpacing(pdfParam1046, pdfParam1047) {
      (this.dependencyTracker?.recordSimpleData(`charSpacing`, pdfParam1046),
        (this.current.charSpacing = pdfParam1047));
    }
    setWordSpacing(pdfParam1048, pdfParam1049) {
      (this.dependencyTracker?.recordSimpleData(`wordSpacing`, pdfParam1048),
        (this.current.wordSpacing = pdfParam1049));
    }
    setHScale(pdfParam1094, pdfParam1095) {
      (this.dependencyTracker?.recordSimpleData(`hScale`, pdfParam1094),
        (this.current.textHScale = pdfParam1095 / 100));
    }
    setLeading(pdfParam1121, pdfParam1122) {
      (this.dependencyTracker?.recordSimpleData(`leading`, pdfParam1121),
        (this.current.leading = -pdfParam1122));
    }
    setFont(pdfParam166, pdfParam167, __pdfY) {
      this.dependencyTracker
        ?.recordSimpleData(`font`, pdfParam166)
        .recordSimpleDataFromNamed(`fontObj`, pdfParam167, pdfParam166);
      let pdfValue589 = this.commonObjs.get(pdfParam167),
        pdfValue590 = this.current;
      if (!pdfValue589) throw Error(`Can't find font for ${pdfParam167}`);
      if (
        ((pdfValue590.fontMatrix = pdfValue589.fontMatrix || pdfValue3),
        (pdfValue590.fontMatrix[0] === 0 || pdfValue590.fontMatrix[3] === 0) &&
          pdfHelper4(`Invalid font matrix for font ` + pdfParam167),
        __pdfY < 0
          ? ((__pdfY = -__pdfY), (pdfValue590.fontDirection = -1))
          : (pdfValue590.fontDirection = 1),
        (this.current.font = pdfValue589),
        (this.current.fontSize = __pdfY),
        pdfValue589.isType3Font)
      )
        return;
      let pdfValue591 = pdfValue589.loadedName || `sans-serif`,
        pdfValue592 =
          pdfValue589.systemFontInfo?.css ||
          `"${pdfValue591}", ${pdfValue589.fallbackName}`,
        __pdfS = `normal`;
      pdfValue589.black
        ? (__pdfS = `900`)
        : pdfValue589.bold && (__pdfS = `bold`);
      let pdfValue593 = pdfValue589.italic ? `italic` : `normal`,
        __pdfI = __pdfY;
      (__pdfY < pdfValue76
        ? (__pdfI = pdfValue76)
        : __pdfY > pdfValue77 && (__pdfI = pdfValue77),
        (this.current.fontSizeScale = __pdfY / __pdfI),
        (this.ctx.font = `${pdfValue593} ${__pdfS} ${__pdfI}px ${pdfValue592}`));
    }
    setTextRenderingMode(pdfParam930, pdfParam931) {
      (this.dependencyTracker?.recordSimpleData(
        `textRenderingMode`,
        pdfParam930,
      ),
        (this.current.textRenderingMode = pdfParam931));
    }
    setTextRise(pdfParam1105, pdfParam1106) {
      (this.dependencyTracker?.recordSimpleData(`textRise`, pdfParam1105),
        (this.current.textRise = pdfParam1106));
    }
    moveText(pdfParam633, pdfParam634, __pdfY) {
      (this.dependencyTracker
        ?.resetIncrementalData(`sameLineText`)
        .recordIncrementalData(`moveText`, pdfParam633),
        (this.current.x = this.current.lineX += pdfParam634),
        (this.current.y = this.current.lineY += __pdfY));
    }
    setLeadingMoveText(pdfParam1329, pdfParam1330, __pdfY) {
      (this.setLeading(pdfParam1329, -__pdfY),
        this.moveText(pdfParam1329, pdfParam1330, __pdfY));
    }
    setTextMatrix(pdfParam653, pdfParam654) {
      this.dependencyTracker?.recordSimpleData(`textMatrix`, pdfParam653);
      let { current: __pdfY } = this;
      ((__pdfY.textMatrix = pdfParam654),
        (__pdfY.textMatrixScale = Math.hypot(pdfParam654[0], pdfParam654[1])),
        (__pdfY.x = __pdfY.lineX = 0),
        (__pdfY.y = __pdfY.lineY = 0));
    }
    nextLine(pdfParam718) {
      (this.moveText(pdfParam718, 0, this.current.leading),
        this.dependencyTracker?.recordIncrementalData(
          `moveText`,
          this.dependencyTracker.getSimpleIndex(`leading`) ?? pdfParam718,
        ));
    }
    #n(pdfParam1108, pdfParam1109, __pdfY) {
      let pdfValue1872 = new Path2D();
      return (
        pdfValue1872.addPath(
          pdfParam1108,
          new DOMMatrix(__pdfY).invertSelf().multiplySelf(pdfParam1109),
        ),
        pdfValue1872
      );
    }
    paintChar(
      pdfParam22,
      pdfParam23,
      __pdfY,
      pdfParam24,
      pdfParam25,
      pdfParam26,
    ) {
      let pdfValue323 = this.ctx,
        pdfValue324 = this.current,
        __pdfS = pdfValue324.font,
        pdfValue325 = pdfValue324.textRenderingMode,
        __pdfI = pdfValue324.fontSize / pdfValue324.fontSizeScale,
        __pdfR = pdfValue325 & pdfValue7.FILL_STROKE_MASK,
        ___pdfS = !!(pdfValue325 & pdfValue7.ADD_TO_PATH_FLAG),
        _pdfNt = pdfValue324.patternFill && !__pdfS.missingFile,
        __pdfC = pdfValue324.patternStroke && !__pdfS.missingFile,
        pdfValue326;
      if (
        ((__pdfS.disableFontFace || ___pdfS || _pdfNt || __pdfC) &&
          !__pdfS.missingFile &&
          (pdfValue326 = __pdfS.getPathGenerator(this.commonObjs, pdfParam23)),
        pdfValue326 && (__pdfS.disableFontFace || _pdfNt || __pdfC))
      ) {
        (pdfValue323.save(),
          pdfValue323.translate(__pdfY, pdfParam24),
          pdfValue323.scale(__pdfI, -__pdfI),
          this.dependencyTracker?.recordCharacterBBox(
            pdfParam22,
            pdfValue323,
            __pdfS,
          ));
        let pdfValue767;
        if (__pdfR === pdfValue7.FILL || __pdfR === pdfValue7.FILL_STROKE)
          if (pdfParam25) {
            ((pdfValue767 = pdfValue323.getTransform()),
              pdfValue323.setTransform(...pdfParam25));
            let pdfValue2005 = this.#n(pdfValue326, pdfValue767, pdfParam25);
            pdfValue323.fill(pdfValue2005);
          } else pdfValue323.fill(pdfValue326);
        if (__pdfR === pdfValue7.STROKE || __pdfR === pdfValue7.FILL_STROKE)
          if (pdfParam26) {
            ((pdfValue767 ||= pdfValue323.getTransform()),
              pdfValue323.setTransform(...pdfParam26));
            let { a: a, b: ___pdfY, c: _c, d: d } = pdfValue767,
              pdfValue1410 = pdfA.inverseTransform(pdfParam26),
              ____pdfS = pdfA.transform(
                [a, ___pdfY, _c, d, 0, 0],
                pdfValue1410,
              );
            (pdfA.singularValueDecompose2dScale(____pdfS, pdfValue82),
              (pdfValue323.lineWidth *=
                Math.max(pdfValue82[0], pdfValue82[1]) / __pdfI),
              pdfValue323.stroke(
                this.#n(pdfValue326, pdfValue767, pdfParam26),
              ));
          } else
            ((pdfValue323.lineWidth /= __pdfI),
              pdfValue323.stroke(pdfValue326));
        pdfValue323.restore();
      } else
        ((__pdfR === pdfValue7.FILL || __pdfR === pdfValue7.FILL_STROKE) &&
          (pdfValue323.fillText(pdfParam23, __pdfY, pdfParam24),
          this.dependencyTracker?.recordCharacterBBox(
            pdfParam22,
            pdfValue323,
            __pdfS,
            __pdfI,
            __pdfY,
            pdfParam24,
            () => pdfValue323.measureText(pdfParam23),
          )),
          (__pdfR === pdfValue7.STROKE || __pdfR === pdfValue7.FILL_STROKE) &&
            (this.dependencyTracker &&
              this.dependencyTracker
                ?.recordCharacterBBox(
                  pdfParam22,
                  pdfValue323,
                  __pdfS,
                  __pdfI,
                  __pdfY,
                  pdfParam24,
                  () => pdfValue323.measureText(pdfParam23),
                )
                .recordDependencies(pdfParam22, pdfValue68.stroke),
            pdfValue323.strokeText(pdfParam23, __pdfY, pdfParam24)));
      ___pdfS &&
        ((this.pendingTextPaths ||= []).push({
          transform: pdfHelper19(pdfValue323),
          x: __pdfY,
          y: pdfParam24,
          fontSize: __pdfI,
          path: pdfValue326,
        }),
        this.dependencyTracker?.recordCharacterBBox(
          pdfParam22,
          pdfValue323,
          __pdfS,
          __pdfI,
          __pdfY,
          pdfParam24,
        ));
    }
    get isFontSubpixelAAEnabled() {
      let { context: context } = this.cachedCanvases.getCanvas(
        `isFontSubpixelAAEnabled`,
        10,
        10,
      );
      (context.scale(1.5, 1), context.fillText(`I`, 0, 10));
      let pdfValue1178 = context.getImageData(0, 0, 10, 10).data,
        __pdfY = !1;
      for (
        let pdfValue2087 = 3;
        pdfValue2087 < pdfValue1178.length;
        pdfValue2087 += 4
      )
        if (
          pdfValue1178[pdfValue2087] > 0 &&
          pdfValue1178[pdfValue2087] < 255
        ) {
          __pdfY = !0;
          break;
        }
      return pdfQ(this, `isFontSubpixelAAEnabled`, __pdfY);
    }
    showText(pdfParam2, pdfParam3) {
      this.dependencyTracker &&
        (this.dependencyTracker
          .recordDependencies(pdfParam2, pdfValue68.showText)
          .resetBBox(pdfParam2),
        this.current.textRenderingMode & pdfValue7.ADD_TO_PATH_FLAG &&
          this.dependencyTracker
            .recordFutureForcedDependency(`textClip`, pdfParam2)
            .inheritPendingDependenciesAsFutureForcedDependencies());
      let __pdfY = this.current,
        pdfValue217 = __pdfY.font;
      if (pdfValue217.isType3Font) {
        (this.showType3Text(pdfParam2, pdfParam3),
          this.dependencyTracker?.recordShowTextOperation(pdfParam2));
        return;
      }
      let pdfValue218 = __pdfY.fontSize;
      if (pdfValue218 === 0) {
        this.dependencyTracker?.recordOperation(pdfParam2);
        return;
      }
      let pdfValue219 = this.ctx,
        pdfValue220 = __pdfY.fontSizeScale,
        pdfValue221 = __pdfY.charSpacing,
        __pdfS = __pdfY.wordSpacing,
        pdfValue222 = __pdfY.fontDirection,
        __pdfI = __pdfY.textHScale * pdfValue222,
        __pdfR = pdfParam3.length,
        ___pdfS = pdfValue217.vertical,
        _pdfNt = ___pdfS ? 1 : -1,
        __pdfC = pdfValue217.defaultVMetrics,
        pdfValue223 = pdfValue218 * __pdfY.fontMatrix[0],
        __pdfJ =
          __pdfY.textRenderingMode === pdfValue7.FILL &&
          !pdfValue217.disableFontFace &&
          !__pdfY.patternFill;
      (pdfValue219.save(),
        __pdfY.textMatrix && pdfValue219.transform(...__pdfY.textMatrix),
        pdfValue219.translate(__pdfY.x, __pdfY.y + __pdfY.textRise),
        pdfValue222 > 0
          ? pdfValue219.scale(__pdfI, -1)
          : pdfValue219.scale(__pdfI, 1));
      let __pdfG, pdfValue224;
      if (__pdfY.patternFill) {
        pdfValue219.save();
        let pdfValue1874 = __pdfY.fillColor.getPattern(
          pdfValue219,
          this,
          pdfHelper20(pdfValue219),
          pdfValue69.FILL,
          pdfParam2,
        );
        ((__pdfG = pdfHelper19(pdfValue219)),
          pdfValue219.restore(),
          (pdfValue219.fillStyle = pdfValue1874));
      }
      if (__pdfY.patternStroke) {
        pdfValue219.save();
        let pdfValue1843 = __pdfY.strokeColor.getPattern(
          pdfValue219,
          this,
          pdfHelper20(pdfValue219),
          pdfValue69.STROKE,
          pdfParam2,
        );
        ((pdfValue224 = pdfHelper19(pdfValue219)),
          pdfValue219.restore(),
          (pdfValue219.strokeStyle = pdfValue1843));
      }
      let __pdfX = __pdfY.lineWidth,
        pdfValue225 = __pdfY.textMatrixScale;
      if (pdfValue225 === 0 || __pdfX === 0) {
        let pdfValue1773 =
          __pdfY.textRenderingMode & pdfValue7.FILL_STROKE_MASK;
        (pdfValue1773 === pdfValue7.STROKE ||
          pdfValue1773 === pdfValue7.FILL_STROKE) &&
          (__pdfX = this.getSinglePixelWidth());
      } else __pdfX /= pdfValue225;
      if (
        (pdfValue220 !== 1 &&
          (pdfValue219.scale(pdfValue220, pdfValue220),
          (__pdfX /= pdfValue220)),
        (pdfValue219.lineWidth = __pdfX),
        pdfValue217.isInvalidPDFjsFont)
      ) {
        let pdfValue991 = [],
          pdfValue992 = 0;
        for (let pdfValue2189 of pdfParam3)
          (pdfValue991.push(pdfValue2189.unicode),
            (pdfValue992 += pdfValue2189.width));
        let pdfValue993 = pdfValue991.join(``);
        if (
          (pdfValue219.fillText(pdfValue993, 0, 0),
          this.dependencyTracker !== null)
        ) {
          let pdfValue1449 = pdfValue219.measureText(pdfValue993);
          this.dependencyTracker
            .recordBBox(
              pdfParam2,
              this.ctx,
              -pdfValue1449.actualBoundingBoxLeft,
              pdfValue1449.actualBoundingBoxRight,
              -pdfValue1449.actualBoundingBoxAscent,
              pdfValue1449.actualBoundingBoxDescent,
            )
            .recordShowTextOperation(pdfParam2);
        }
        ((__pdfY.x += pdfValue992 * pdfValue223 * __pdfI),
          pdfValue219.restore(),
          this.compose());
        return;
      }
      let pdfValue226 = 0,
        pdfValue227;
      for (pdfValue227 = 0; pdfValue227 < __pdfR; ++pdfValue227) {
        let ___pdfY = pdfParam3[pdfValue227];
        if (typeof ___pdfY == `number`) {
          pdfValue226 += (_pdfNt * ___pdfY * pdfValue218) / 1e3;
          continue;
        }
        let ___pdfI = !1,
          ___pdfR = (___pdfY.isSpace ? __pdfS : 0) + pdfValue221,
          pdfValue544 = ___pdfY.fontChar,
          ___pdfX = ___pdfY.accent,
          pdfValue545,
          pdfValue546,
          pdfValue547 = ___pdfY.width;
        if (___pdfS) {
          let pdfValue1930 = ___pdfY.vmetric || __pdfC,
            pdfValue1931 =
              -(___pdfY.vmetric ? pdfValue1930[1] : pdfValue547 * 0.5) *
              pdfValue223,
            pdfValue1932 = pdfValue1930[2] * pdfValue223;
          ((pdfValue547 = pdfValue1930 ? -pdfValue1930[0] : pdfValue547),
            (pdfValue545 = pdfValue1931 / pdfValue220),
            (pdfValue546 = (pdfValue226 + pdfValue1932) / pdfValue220));
        } else ((pdfValue545 = pdfValue226 / pdfValue220), (pdfValue546 = 0));
        let pdfValue548;
        if (pdfValue217.remeasure && pdfValue547 > 0) {
          pdfValue548 = pdfValue219.measureText(pdfValue544);
          let pdfValue1607 =
            ((pdfValue548.width * 1e3) / pdfValue218) * pdfValue220;
          if (pdfValue547 < pdfValue1607 && this.isFontSubpixelAAEnabled) {
            let pdfValue2192 = pdfValue547 / pdfValue1607;
            ((___pdfI = !0),
              pdfValue219.save(),
              pdfValue219.scale(pdfValue2192, 1),
              (pdfValue545 /= pdfValue2192));
          } else
            pdfValue547 !== pdfValue1607 &&
              (pdfValue545 +=
                (((pdfValue547 - pdfValue1607) / 2e3) * pdfValue218) /
                pdfValue220);
        }
        if (
          this.contentVisible &&
          (___pdfY.isInFont || pdfValue217.missingFile)
        ) {
          if (__pdfJ && !___pdfX)
            (pdfValue219.fillText(pdfValue544, pdfValue545, pdfValue546),
              this.dependencyTracker?.recordCharacterBBox(
                pdfParam2,
                pdfValue219,
                pdfValue548
                  ? {
                      bbox: null,
                    }
                  : pdfValue217,
                pdfValue218 / pdfValue220,
                pdfValue545,
                pdfValue546,
                () => pdfValue548 ?? pdfValue219.measureText(pdfValue544),
              ));
          else if (
            (this.paintChar(
              pdfParam2,
              pdfValue544,
              pdfValue545,
              pdfValue546,
              __pdfG,
              pdfValue224,
            ),
            ___pdfX)
          ) {
            let pdfValue1963 =
                pdfValue545 + (pdfValue218 * ___pdfX.offset.x) / pdfValue220,
              ____pdfY =
                pdfValue546 - (pdfValue218 * ___pdfX.offset.y) / pdfValue220;
            this.paintChar(
              pdfParam2,
              ___pdfX.fontChar,
              pdfValue1963,
              ____pdfY,
              __pdfG,
              pdfValue224,
            );
          }
        }
        let pdfValue549 = ___pdfS
          ? pdfValue547 * pdfValue223 - ___pdfR * pdfValue222
          : pdfValue547 * pdfValue223 + ___pdfR * pdfValue222;
        ((pdfValue226 += pdfValue549), ___pdfI && pdfValue219.restore());
      }
      (___pdfS ? (__pdfY.y -= pdfValue226) : (__pdfY.x += pdfValue226 * __pdfI),
        pdfValue219.restore(),
        this.compose(),
        this.dependencyTracker?.recordShowTextOperation(pdfParam2));
    }
    showType3Text(pdfParam82, pdfParam83) {
      let __pdfY = this.ctx,
        pdfValue452 = this.current,
        pdfValue453 = pdfValue452.font,
        pdfValue454 = pdfValue452.fontSize,
        pdfValue455 = pdfValue452.fontDirection,
        __pdfS = pdfValue453.vertical ? 1 : -1,
        pdfValue456 = pdfValue452.charSpacing,
        __pdfI = pdfValue452.wordSpacing,
        __pdfR = pdfValue452.textHScale * pdfValue455,
        ___pdfS = pdfValue452.fontMatrix || pdfValue3,
        _pdfNt = pdfParam83.length,
        __pdfC = pdfValue452.textRenderingMode === pdfValue7.INVISIBLE,
        pdfValue457,
        __pdfJ,
        __pdfG,
        pdfValue458;
      if (__pdfC || pdfValue454 === 0) return;
      ((this._cachedScaleForStroking[0] = -1),
        (this._cachedGetSinglePixelWidth = null),
        __pdfY.save(),
        pdfValue452.textMatrix && __pdfY.transform(...pdfValue452.textMatrix),
        __pdfY.translate(pdfValue452.x, pdfValue452.y + pdfValue452.textRise),
        __pdfY.scale(__pdfR, pdfValue455));
      let __pdfX = this.dependencyTracker;
      for (
        this.dependencyTracker = __pdfX
          ? new pdfValue67(__pdfX, pdfParam82)
          : null,
          pdfValue457 = 0;
        pdfValue457 < _pdfNt;
        ++pdfValue457
      ) {
        if (((__pdfJ = pdfParam83[pdfValue457]), typeof __pdfJ == `number`)) {
          ((pdfValue458 = (__pdfS * __pdfJ * pdfValue454) / 1e3),
            this.ctx.translate(pdfValue458, 0),
            (pdfValue452.x += pdfValue458 * __pdfR));
          continue;
        }
        let pdfValue960 = (__pdfJ.isSpace ? __pdfI : 0) + pdfValue456,
          pdfValue961 = pdfValue453.charProcOperatorList[__pdfJ.operatorListId];
        pdfValue961
          ? this.contentVisible &&
            (this.save(),
            __pdfY.scale(pdfValue454, pdfValue454),
            __pdfY.transform(...___pdfS),
            this.executeOperatorList(pdfValue961),
            this.restore())
          : pdfHelper4(
              `Type3 character "${__pdfJ.operatorListId}" is not available.`,
            );
        let pdfValue962 = [__pdfJ.width, 0];
        (pdfA.applyTransform(pdfValue962, ___pdfS),
          (__pdfG = pdfValue962[0] * pdfValue454 + pdfValue960),
          __pdfY.translate(__pdfG, 0),
          (pdfValue452.x += __pdfG * __pdfR));
      }
      (__pdfY.restore(), __pdfX && (this.dependencyTracker = __pdfX));
    }
    setCharWidth(pdfParam1719, pdfParam1720, __pdfY) {}
    setCharWidthAndBounds(
      pdfParam600,
      pdfParam601,
      __pdfY,
      pdfParam602,
      pdfParam603,
      pdfParam604,
      pdfParam605,
    ) {
      let pdfValue1463 = new Path2D();
      (pdfValue1463.rect(
        pdfParam602,
        pdfParam603,
        pdfParam604 - pdfParam602,
        pdfParam605 - pdfParam603,
      ),
        this.ctx.clip(pdfValue1463),
        this.dependencyTracker
          ?.recordBBox(
            pdfParam600,
            this.ctx,
            pdfParam602,
            pdfParam604,
            pdfParam603,
            pdfParam605,
          )
          .recordClipBox(
            pdfParam600,
            this.ctx,
            pdfParam602,
            pdfParam604,
            pdfParam603,
            pdfParam605,
          ),
        this.endPath(pdfParam600));
    }
    getColorN_Pattern(pdfParam298, __pdfY) {
      let pdfValue891;
      if (__pdfY[0] === `TilingPattern`) {
        let pdfValue1057 = this.baseTransform || pdfHelper19(this.ctx);
        pdfValue891 = new pdfValue75(
          __pdfY,
          this.ctx,
          {
            createCanvasGraphics: (pdfParam507, ___pdfY) =>
              new PdfClass1(
                pdfParam507,
                this.commonObjs,
                this.objs,
                this.canvasFactory,
                this.filterFactory,
                {
                  optionalContentConfig: this.optionalContentConfig,
                  markedContentStack: this.markedContentStack,
                },
                void 0,
                void 0,
                this.dependencyTracker
                  ? new pdfValue67(this.dependencyTracker, ___pdfY, !0)
                  : null,
              ),
          },
          pdfValue1057,
        );
      } else pdfValue891 = this._getPattern(pdfParam298, __pdfY[1], __pdfY[2]);
      return pdfValue891;
    }
    setStrokeColorN(pdfParam704, ...pdfParam705) {
      (this.dependencyTracker?.recordSimpleData(`strokeColor`, pdfParam704),
        (this.current.strokeColor = this.getColorN_Pattern(
          pdfParam704,
          pdfParam705,
        )),
        (this.current.patternStroke = !0));
    }
    setFillColorN(pdfParam756, ...pdfParam757) {
      (this.dependencyTracker?.recordSimpleData(`fillColor`, pdfParam756),
        (this.current.fillColor = this.getColorN_Pattern(
          pdfParam756,
          pdfParam757,
        )),
        (this.current.patternFill = !0));
    }
    setStrokeRGBColor(pdfParam744, pdfParam745) {
      (this.dependencyTracker?.recordSimpleData(`strokeColor`, pdfParam744),
        (this.ctx.strokeStyle = this.current.strokeColor = pdfParam745),
        (this.current.patternStroke = !1));
    }
    setStrokeTransparent(pdfParam667) {
      (this.dependencyTracker?.recordSimpleData(`strokeColor`, pdfParam667),
        (this.ctx.strokeStyle = this.current.strokeColor = `transparent`),
        (this.current.patternStroke = !1));
    }
    setFillRGBColor(pdfParam792, pdfParam793) {
      (this.dependencyTracker?.recordSimpleData(`fillColor`, pdfParam792),
        (this.ctx.fillStyle = this.current.fillColor = pdfParam793),
        (this.current.patternFill = !1));
    }
    setFillTransparent(pdfParam719) {
      (this.dependencyTracker?.recordSimpleData(`fillColor`, pdfParam719),
        (this.ctx.fillStyle = this.current.fillColor = `transparent`),
        (this.current.patternFill = !1));
    }
    _getPattern(pdfParam688, pdfParam689, __pdfY = null) {
      let pdfValue1557;
      return (
        this.cachedPatterns.has(pdfParam689)
          ? (pdfValue1557 = this.cachedPatterns.get(pdfParam689))
          : ((pdfValue1557 = pdfHelper34(
              this.getObject(pdfParam688, pdfParam689),
            )),
            this.cachedPatterns.set(pdfParam689, pdfValue1557)),
        __pdfY && (pdfValue1557.matrix = __pdfY),
        pdfValue1557
      );
    }
    shadingFill(pdfParam227, pdfParam228) {
      if (!this.contentVisible) return;
      let __pdfY = this.ctx;
      (this.save(pdfParam227),
        (__pdfY.fillStyle = this._getPattern(
          pdfParam227,
          pdfParam228,
        ).getPattern(
          __pdfY,
          this,
          pdfHelper20(__pdfY),
          pdfValue69.SHADING,
          pdfParam227,
        )));
      let pdfValue738 = pdfHelper20(__pdfY);
      if (pdfValue738) {
        let { width: width, height: height } = __pdfY.canvas,
          pdfValue1682 = pdfValue83.slice();
        pdfA.axialAlignedBoundingBox(
          [0, 0, width, height],
          pdfValue738,
          pdfValue1682,
        );
        let [pdfValue1683, pdfValue1684, pdfValue1685, __pdfS] = pdfValue1682;
        this.ctx.fillRect(
          pdfValue1683,
          pdfValue1684,
          pdfValue1685 - pdfValue1683,
          __pdfS - pdfValue1684,
        );
      } else this.ctx.fillRect(-1e10, -1e10, 2e10, 2e10);
      (this.dependencyTracker
        ?.resetBBox(pdfParam227)
        .recordFullPageBBox(pdfParam227)
        .recordDependencies(pdfParam227, pdfValue68.transform)
        .recordDependencies(pdfParam227, pdfValue68.fill)
        .recordOperation(pdfParam227),
        this.compose(this.current.getClippedPathBoundingBox()),
        this.restore(pdfParam227));
    }
    beginInlineImage() {
      pdfHelper5(`Should not call beginInlineImage`);
    }
    beginImageData() {
      pdfHelper5(`Should not call beginImageData`);
    }
    paintFormXObjectBegin(pdfParam335, pdfParam336, __pdfY) {
      if (
        this.contentVisible &&
        (this.save(pdfParam335),
        this.baseTransformStack.push(this.baseTransform),
        pdfParam336 && this.transform(pdfParam335, ...pdfParam336),
        (this.baseTransform = pdfHelper19(this.ctx)),
        __pdfY)
      ) {
        pdfA.axialAlignedBoundingBox(
          __pdfY,
          this.baseTransform,
          this.current.minMax,
        );
        let [pdfValue1426, pdfValue1427, pdfValue1428, pdfValue1429] = __pdfY,
          pdfValue1430 = new Path2D();
        (pdfValue1430.rect(
          pdfValue1426,
          pdfValue1427,
          pdfValue1428 - pdfValue1426,
          pdfValue1429 - pdfValue1427,
        ),
          this.ctx.clip(pdfValue1430),
          this.dependencyTracker?.recordClipBox(
            pdfParam335,
            this.ctx,
            pdfValue1426,
            pdfValue1428,
            pdfValue1427,
            pdfValue1429,
          ),
          this.endPath(pdfParam335));
      }
    }
    paintFormXObjectEnd(pdfParam1000) {
      this.contentVisible &&
        (this.restore(pdfParam1000),
        (this.baseTransform = this.baseTransformStack.pop()));
    }
    beginGroup(pdfParam14, pdfParam15) {
      if (!this.contentVisible) return;
      (this.save(pdfParam14),
        this.inSMaskMode &&
          (this.endSMaskMode(), (this.current.activeSMask = null)));
      let __pdfY = this.ctx;
      (pdfParam15.isolated || pdfHelper3(`TODO: Support non-isolated groups.`),
        pdfParam15.knockout && pdfHelper4(`Knockout groups not supported.`));
      let pdfValue276 = pdfHelper19(__pdfY);
      if (
        (pdfParam15.matrix && __pdfY.transform(...pdfParam15.matrix),
        !pdfParam15.bbox)
      )
        throw Error(`Bounding box is required.`);
      let pdfValue277 = pdfValue83.slice();
      pdfA.axialAlignedBoundingBox(
        pdfParam15.bbox,
        pdfHelper19(__pdfY),
        pdfValue277,
      );
      let pdfValue278 = [0, 0, __pdfY.canvas.width, __pdfY.canvas.height];
      pdfValue277 = pdfA.intersect(pdfValue277, pdfValue278) || [0, 0, 0, 0];
      let pdfValue279 = Math.floor(pdfValue277[0]),
        pdfValue280 = Math.floor(pdfValue277[1]),
        __pdfS = Math.max(Math.ceil(pdfValue277[2]) - pdfValue279, 1),
        pdfValue281 = Math.max(Math.ceil(pdfValue277[3]) - pdfValue280, 1);
      this.current.startNewPathAndClipBox([0, 0, __pdfS, pdfValue281]);
      let __pdfI = `groupAt` + this.groupLevel;
      pdfParam15.smask && (__pdfI += `_smask_` + (this.smaskCounter++ % 2));
      let __pdfR = this.cachedCanvases.getCanvas(__pdfI, __pdfS, pdfValue281),
        ___pdfS = __pdfR.context;
      (___pdfS.translate(-pdfValue279, -pdfValue280),
        ___pdfS.transform(...pdfValue276));
      let pdfValue282 = new Path2D(),
        [_pdfNt, __pdfC, pdfValue283, __pdfJ] = pdfParam15.bbox;
      if (
        (pdfValue282.rect(
          _pdfNt,
          __pdfC,
          pdfValue283 - _pdfNt,
          __pdfJ - __pdfC,
        ),
        pdfParam15.matrix)
      ) {
        let pdfValue2095 = new Path2D();
        (pdfValue2095.addPath(pdfValue282, new DOMMatrix(pdfParam15.matrix)),
          (pdfValue282 = pdfValue2095));
      }
      (___pdfS.clip(pdfValue282),
        pdfParam15.smask &&
          this.smaskStack.push({
            canvas: __pdfR.canvas,
            context: ___pdfS,
            offsetX: pdfValue279,
            offsetY: pdfValue280,
            subtype: pdfParam15.smask.subtype,
            backdrop: pdfParam15.smask.backdrop,
            transferMap: pdfParam15.smask.transferMap || null,
            startTransformInverse: null,
          }),
        (!pdfParam15.smask || this.dependencyTracker) &&
          (__pdfY.setTransform(1, 0, 0, 1, 0, 0),
          __pdfY.translate(pdfValue279, pdfValue280),
          __pdfY.save()),
        pdfHelper38(__pdfY, ___pdfS),
        (this.ctx = ___pdfS),
        this.dependencyTracker
          ?.inheritSimpleDataAsFutureForcedDependencies([
            `fillAlpha`,
            `strokeAlpha`,
            `globalCompositeOperation`,
          ])
          .pushBaseTransform(__pdfY),
        this.setGState(pdfParam14, [
          [`BM`, `source-over`],
          [`ca`, 1],
          [`CA`, 1],
        ]),
        this.groupStack.push(__pdfY),
        this.groupLevel++);
    }
    endGroup(pdfParam229, pdfParam230) {
      if (!this.contentVisible) return;
      this.groupLevel--;
      let __pdfY = this.ctx;
      if (
        ((this.ctx = this.groupStack.pop()),
        (this.ctx.imageSmoothingEnabled = !1),
        this.dependencyTracker?.popBaseTransform(),
        pdfParam230.smask)
      )
        ((this.tempSMask = this.smaskStack.pop()),
          this.restore(pdfParam229),
          this.dependencyTracker && this.ctx.restore());
      else {
        this.ctx.restore();
        let pdfValue1303 = pdfHelper19(this.ctx);
        (this.restore(pdfParam229),
          this.ctx.save(),
          this.ctx.setTransform(...pdfValue1303));
        let pdfValue1304 = pdfValue83.slice();
        (pdfA.axialAlignedBoundingBox(
          [0, 0, __pdfY.canvas.width, __pdfY.canvas.height],
          pdfValue1303,
          pdfValue1304,
        ),
          this.ctx.drawImage(__pdfY.canvas, 0, 0),
          this.ctx.restore(),
          this.compose(pdfValue1304));
      }
    }
    beginAnnotation(
      pdfParam97,
      pdfParam98,
      __pdfY,
      pdfParam99,
      pdfParam100,
      pdfParam101,
    ) {
      if (
        (this.#e(),
        pdfHelper39(this.ctx),
        this.ctx.save(),
        this.save(pdfParam97),
        this.baseTransform && this.ctx.setTransform(...this.baseTransform),
        __pdfY)
      ) {
        let pdfValue665 = __pdfY[2] - __pdfY[0],
          pdfValue666 = __pdfY[3] - __pdfY[1];
        if (pdfParam101 && this.annotationCanvasMap) {
          ((pdfParam99 = pdfParam99.slice()),
            (pdfParam99[4] -= __pdfY[0]),
            (pdfParam99[5] -= __pdfY[1]),
            (__pdfY = __pdfY.slice()),
            (__pdfY[0] = __pdfY[1] = 0),
            (__pdfY[2] = pdfValue665),
            (__pdfY[3] = pdfValue666),
            pdfA.singularValueDecompose2dScale(
              pdfHelper19(this.ctx),
              pdfValue82,
            ));
          let { viewportScale: viewportScale } = this,
            pdfValue821 = Math.ceil(
              pdfValue665 * this.outputScaleX * viewportScale,
            ),
            pdfValue822 = Math.ceil(
              pdfValue666 * this.outputScaleY * viewportScale,
            );
          this.annotationCanvas = this.canvasFactory.create(
            pdfValue821,
            pdfValue822,
          );
          let { canvas: __pdfS, context: context } = this.annotationCanvas;
          (this.annotationCanvasMap.set(pdfParam98, __pdfS),
            (this.annotationCanvas.savedCtx = this.ctx),
            (this.ctx = context),
            this.ctx.save(),
            this.ctx.setTransform(
              pdfValue82[0],
              0,
              0,
              -pdfValue82[1],
              0,
              pdfValue666 * pdfValue82[1],
            ),
            pdfHelper39(this.ctx));
        } else {
          (pdfHelper39(this.ctx), this.endPath(pdfParam97));
          let pdfValue1918 = new Path2D();
          (pdfValue1918.rect(__pdfY[0], __pdfY[1], pdfValue665, pdfValue666),
            this.ctx.clip(pdfValue1918));
        }
      }
      ((this.current = new pdfValue85(
        this.ctx.canvas.width,
        this.ctx.canvas.height,
      )),
        this.transform(pdfParam97, ...pdfParam99),
        this.transform(pdfParam97, ...pdfParam100));
    }
    endAnnotation(pdfParam656) {
      this.annotationCanvas &&
        (this.ctx.restore(),
        this.#t(),
        (this.ctx = this.annotationCanvas.savedCtx),
        delete this.annotationCanvas.savedCtx,
        delete this.annotationCanvas);
    }
    paintImageMaskXObject(pdfParam324, pdfParam325) {
      if (!this.contentVisible) return;
      let __pdfY = pdfParam325.count;
      ((pdfParam325 = this.getObject(
        pdfParam324,
        pdfParam325.data,
        pdfParam325,
      )),
        (pdfParam325.count = __pdfY));
      let pdfValue952 = this.ctx,
        pdfValue953 = this._createMaskCanvas(pdfParam324, pdfParam325),
        pdfValue954 = pdfValue953.canvas;
      (pdfValue952.save(),
        pdfValue952.setTransform(1, 0, 0, 1, 0, 0),
        pdfValue952.drawImage(
          pdfValue954,
          pdfValue953.offsetX,
          pdfValue953.offsetY,
        ),
        this.dependencyTracker
          ?.resetBBox(pdfParam324)
          .recordBBox(
            pdfParam324,
            this.ctx,
            pdfValue953.offsetX,
            pdfValue953.offsetX + pdfValue954.width,
            pdfValue953.offsetY,
            pdfValue953.offsetY + pdfValue954.height,
          )
          .recordOperation(pdfParam324),
        pdfValue952.restore(),
        this.compose());
    }
    paintImageMaskXObjectRepeat(
      pdfParam218,
      pdfParam219,
      __pdfY,
      pdfParam220 = 0,
      pdfParam221 = 0,
      pdfParam222,
      pdfParam223,
    ) {
      if (!this.contentVisible) return;
      pdfParam219 = this.getObject(pdfParam218, pdfParam219.data, pdfParam219);
      let pdfValue722 = this.ctx;
      pdfValue722.save();
      let __pdfS = pdfHelper19(pdfValue722);
      pdfValue722.transform(
        __pdfY,
        pdfParam220,
        pdfParam221,
        pdfParam222,
        0,
        0,
      );
      let pdfValue723 = this._createMaskCanvas(pdfParam218, pdfParam219);
      (pdfValue722.setTransform(
        1,
        0,
        0,
        1,
        pdfValue723.offsetX - __pdfS[4],
        pdfValue723.offsetY - __pdfS[5],
      ),
        this.dependencyTracker?.resetBBox(pdfParam218));
      for (
        let pdfValue1438 = 0, __pdfI = pdfParam223.length;
        pdfValue1438 < __pdfI;
        pdfValue1438 += 2
      ) {
        let ___pdfI = pdfA.transform(__pdfS, [
          __pdfY,
          pdfParam220,
          pdfParam221,
          pdfParam222,
          pdfParam223[pdfValue1438],
          pdfParam223[pdfValue1438 + 1],
        ]);
        (pdfValue722.drawImage(pdfValue723.canvas, ___pdfI[4], ___pdfI[5]),
          this.dependencyTracker?.recordBBox(
            pdfParam218,
            this.ctx,
            ___pdfI[4],
            ___pdfI[4] + pdfValue723.canvas.width,
            ___pdfI[5],
            ___pdfI[5] + pdfValue723.canvas.height,
          ));
      }
      (pdfValue722.restore(),
        this.compose(),
        this.dependencyTracker?.recordOperation(pdfParam218));
    }
    paintImageMaskXObjectGroup(pdfParam171, pdfParam172) {
      if (!this.contentVisible) return;
      let __pdfY = this.ctx,
        pdfValue607 = this.current.fillColor,
        pdfValue608 = this.current.patternFill;
      this.dependencyTracker
        ?.resetBBox(pdfParam171)
        .recordDependencies(pdfParam171, pdfValue68.transformAndFill);
      for (let pdfValue935 of pdfParam172) {
        let {
            data: data,
            width: width,
            height: height,
            transform: __pdfS,
          } = pdfValue935,
          pdfValue965 = this.cachedCanvases.getCanvas(
            `maskCanvas`,
            width,
            height,
          ),
          __pdfI = pdfValue965.context;
        (__pdfI.save(),
          pdfHelper37(__pdfI, this.getObject(pdfParam171, data, pdfValue935)),
          (__pdfI.globalCompositeOperation = `source-in`),
          (__pdfI.fillStyle = pdfValue608
            ? pdfValue607.getPattern(
                __pdfI,
                this,
                pdfHelper20(__pdfY),
                pdfValue69.FILL,
                pdfParam171,
              )
            : pdfValue607),
          __pdfI.fillRect(0, 0, width, height),
          __pdfI.restore(),
          __pdfY.save(),
          __pdfY.transform(...__pdfS),
          __pdfY.scale(1, -1),
          pdfHelper36(
            __pdfY,
            pdfValue965.canvas,
            0,
            0,
            width,
            height,
            0,
            -1,
            1,
            1,
          ),
          this.dependencyTracker?.recordBBox(
            pdfParam171,
            __pdfY,
            0,
            width,
            0,
            height,
          ),
          __pdfY.restore());
      }
      (this.compose(), this.dependencyTracker?.recordOperation(pdfParam171));
    }
    paintImageXObject(pdfParam706, pdfParam707) {
      if (!this.contentVisible) return;
      let __pdfY = this.getObject(pdfParam706, pdfParam707);
      if (!__pdfY) {
        pdfHelper4(`Dependent image isn't ready yet`);
        return;
      }
      this.paintInlineImageXObject(pdfParam706, __pdfY);
    }
    paintImageXObjectRepeat(
      pdfParam414,
      pdfParam415,
      __pdfY,
      pdfParam416,
      pdfParam417,
    ) {
      if (!this.contentVisible) return;
      let pdfValue1140 = this.getObject(pdfParam414, pdfParam415);
      if (!pdfValue1140) {
        pdfHelper4(`Dependent image isn't ready yet`);
        return;
      }
      let pdfValue1141 = pdfValue1140.width,
        pdfValue1142 = pdfValue1140.height,
        __pdfS = [];
      for (
        let pdfValue1899 = 0, pdfValue1900 = pdfParam417.length;
        pdfValue1899 < pdfValue1900;
        pdfValue1899 += 2
      )
        __pdfS.push({
          transform: [
            __pdfY,
            0,
            0,
            pdfParam416,
            pdfParam417[pdfValue1899],
            pdfParam417[pdfValue1899 + 1],
          ],
          x: 0,
          y: 0,
          w: pdfValue1141,
          h: pdfValue1142,
        });
      this.paintInlineImageXObjectGroup(pdfParam414, pdfValue1140, __pdfS);
    }
    applyTransferMapsToCanvas(pdfParam742) {
      return (
        this.current.transferMaps !== `none` &&
          ((pdfParam742.filter = this.current.transferMaps),
          pdfParam742.drawImage(pdfParam742.canvas, 0, 0),
          (pdfParam742.filter = `none`)),
        pdfParam742.canvas
      );
    }
    applyTransferMapsToBitmap(pdfParam488) {
      if (this.current.transferMaps === `none`) return pdfParam488.bitmap;
      let { bitmap: bitmap, width: __pdfY, height: height } = pdfParam488,
        pdfValue1264 = this.cachedCanvases.getCanvas(
          `inlineImage`,
          __pdfY,
          height,
        ),
        pdfValue1265 = pdfValue1264.context;
      return (
        (pdfValue1265.filter = this.current.transferMaps),
        pdfValue1265.drawImage(bitmap, 0, 0),
        (pdfValue1265.filter = `none`),
        pdfValue1264.canvas
      );
    }
    paintInlineImageXObject(pdfParam142, pdfParam143) {
      if (!this.contentVisible) return;
      let __pdfY = pdfParam143.width,
        pdfValue572 = pdfParam143.height,
        pdfValue573 = this.ctx;
      this.save(pdfParam142);
      let { filter: filter } = pdfValue573;
      (filter !== `none` && filter !== `` && (pdfValue573.filter = `none`),
        pdfValue573.scale(1 / __pdfY, -1 / pdfValue572));
      let pdfValue574;
      if (pdfParam143.bitmap)
        pdfValue574 = this.applyTransferMapsToBitmap(pdfParam143);
      else if (
        (typeof HTMLElement == `function` &&
          pdfParam143 instanceof HTMLElement) ||
        !pdfParam143.data
      )
        pdfValue574 = pdfParam143;
      else {
        let pdfValue1794 = this.cachedCanvases.getCanvas(
          `inlineImage`,
          __pdfY,
          pdfValue572,
        ).context;
        (_n(pdfValue1794, pdfParam143),
          (pdfValue574 = this.applyTransferMapsToCanvas(pdfValue1794)));
      }
      let pdfValue575 = this._scaleImage(pdfValue574, pdfHelper20(pdfValue573));
      ((pdfValue573.imageSmoothingEnabled = pdfHelper40(
        pdfHelper19(pdfValue573),
        pdfParam143.interpolate,
      )),
        this.dependencyTracker
          ?.resetBBox(pdfParam142)
          .recordBBox(pdfParam142, pdfValue573, 0, __pdfY, -pdfValue572, 0)
          .recordDependencies(pdfParam142, pdfValue68.imageXObject)
          .recordOperation(pdfParam142),
        pdfHelper36(
          pdfValue573,
          pdfValue575.img,
          0,
          0,
          pdfValue575.paintWidth,
          pdfValue575.paintHeight,
          0,
          -pdfValue572,
          __pdfY,
          pdfValue572,
        ),
        this.compose(),
        this.restore(pdfParam142));
    }
    paintInlineImageXObjectGroup(pdfParam260, pdfParam261, __pdfY) {
      if (!this.contentVisible) return;
      let pdfValue804 = this.ctx,
        pdfValue805;
      if (pdfParam261.bitmap) pdfValue805 = pdfParam261.bitmap;
      else {
        let pdfValue1695 = pdfParam261.width,
          ___pdfY = pdfParam261.height,
          pdfValue1696 = this.cachedCanvases.getCanvas(
            `inlineImage`,
            pdfValue1695,
            ___pdfY,
          ).context;
        (_n(pdfValue1696, pdfParam261),
          (pdfValue805 = this.applyTransferMapsToCanvas(pdfValue1696)));
      }
      this.dependencyTracker?.resetBBox(pdfParam260);
      for (let pdfValue1588 of __pdfY)
        (pdfValue804.save(),
          pdfValue804.transform(...pdfValue1588.transform),
          pdfValue804.scale(1, -1),
          pdfHelper36(
            pdfValue804,
            pdfValue805,
            pdfValue1588.x,
            pdfValue1588.y,
            pdfValue1588.w,
            pdfValue1588.h,
            0,
            -1,
            1,
            1,
          ),
          this.dependencyTracker?.recordBBox(
            pdfParam260,
            pdfValue804,
            0,
            1,
            -1,
            0,
          ),
          pdfValue804.restore());
      (this.dependencyTracker?.recordOperation(pdfParam260), this.compose());
    }
    paintSolidColorImageMask(pdfParam581) {
      this.contentVisible &&
        (this.dependencyTracker
          ?.resetBBox(pdfParam581)
          .recordBBox(pdfParam581, this.ctx, 0, 1, 0, 1)
          .recordDependencies(pdfParam581, pdfValue68.fill)
          .recordOperation(pdfParam581),
        this.ctx.fillRect(0, 0, 1, 1),
        this.compose());
    }
    markPoint(pdfParam1729, pdfParam1730) {}
    markPointProps(pdfParam1712, pdfParam1713, __pdfY) {}
    beginMarkedContent(pdfParam985, pdfParam986) {
      (this.dependencyTracker?.beginMarkedContent(pdfParam985),
        this.markedContentStack.push({
          visible: !0,
        }));
    }
    beginMarkedContentProps(pdfParam505, pdfParam506, __pdfY) {
      (this.dependencyTracker?.beginMarkedContent(pdfParam505),
        pdfParam506 === `OC`
          ? this.markedContentStack.push({
              visible: this.optionalContentConfig.isVisible(__pdfY),
            })
          : this.markedContentStack.push({
              visible: !0,
            }),
        (this.contentVisible = this.isContentVisible()));
    }
    endMarkedContent(pdfParam848) {
      (this.dependencyTracker?.endMarkedContent(pdfParam848),
        this.markedContentStack.pop(),
        (this.contentVisible = this.isContentVisible()));
    }
    beginCompat(pdfParam1731) {}
    endCompat(pdfParam1752) {}
    consumePath(pdfParam284, pdfParam285, __pdfY) {
      let pdfValue863 = this.current.isEmptyClip();
      (this.pendingClip && this.current.updateClipFromPath(),
        this.pendingClip || this.compose(__pdfY));
      let pdfValue864 = this.ctx;
      (this.pendingClip
        ? (pdfValue863 ||
            (this.pendingClip === pdfValue89
              ? pdfValue864.clip(pdfParam285, `evenodd`)
              : pdfValue864.clip(pdfParam285)),
          (this.pendingClip = null),
          this.dependencyTracker
            ?.bboxToClipBoxDropOperation(pdfParam284)
            .recordFutureForcedDependency(`clipPath`, pdfParam284))
        : this.dependencyTracker?.recordOperation(pdfParam284),
        this.current.startNewPathAndClipBox(this.current.clipBox));
    }
    getSinglePixelWidth() {
      if (!this._cachedGetSinglePixelWidth) {
        let pdfValue1301 = pdfHelper19(this.ctx);
        if (pdfValue1301[1] === 0 && pdfValue1301[2] === 0)
          this._cachedGetSinglePixelWidth =
            1 / Math.min(Math.abs(pdfValue1301[0]), Math.abs(pdfValue1301[3]));
        else {
          let pdfValue1675 = Math.abs(
              pdfValue1301[0] * pdfValue1301[3] -
                pdfValue1301[2] * pdfValue1301[1],
            ),
            __pdfY = Math.hypot(pdfValue1301[0], pdfValue1301[2]),
            pdfValue1676 = Math.hypot(pdfValue1301[1], pdfValue1301[3]);
          this._cachedGetSinglePixelWidth =
            Math.max(__pdfY, pdfValue1676) / pdfValue1675;
        }
      }
      return this._cachedGetSinglePixelWidth;
    }
    getScaleForStroking() {
      if (this._cachedScaleForStroking[0] === -1) {
        let { lineWidth: lineWidth } = this.current,
          { a: _a, b: __pdfY, c: c, d: d } = this.ctx.getTransform(),
          pdfValue869,
          pdfValue870;
        if (__pdfY === 0 && c === 0) {
          let ___pdfY = Math.abs(_a),
            pdfValue1589 = Math.abs(d);
          if (___pdfY === pdfValue1589) {
            if (lineWidth === 0) pdfValue869 = pdfValue870 = 1 / ___pdfY;
            else {
              let pdfValue2247 = ___pdfY * lineWidth;
              pdfValue869 = pdfValue870 =
                pdfValue2247 < 1 ? 1 / pdfValue2247 : 1;
            }
          } else if (lineWidth === 0)
            ((pdfValue869 = 1 / ___pdfY), (pdfValue870 = 1 / pdfValue1589));
          else {
            let pdfValue2205 = ___pdfY * lineWidth,
              pdfValue2206 = pdfValue1589 * lineWidth;
            ((pdfValue869 = pdfValue2205 < 1 ? 1 / pdfValue2205 : 1),
              (pdfValue870 = pdfValue2206 < 1 ? 1 / pdfValue2206 : 1));
          }
        } else {
          let pdfValue1732 = Math.abs(_a * d - __pdfY * __pdfS),
            __pdfS = Math.hypot(_a, __pdfY),
            pdfValue1733 = Math.hypot(__pdfS, d);
          if (lineWidth === 0)
            ((pdfValue869 = pdfValue1733 / pdfValue1732),
              (pdfValue870 = __pdfS / pdfValue1732));
          else {
            let pdfValue2231 = lineWidth * pdfValue1732;
            ((pdfValue869 =
              pdfValue1733 > pdfValue2231 ? pdfValue1733 / pdfValue2231 : 1),
              (pdfValue870 =
                __pdfS > pdfValue2231 ? __pdfS / pdfValue2231 : 1));
          }
        }
        ((this._cachedScaleForStroking[0] = pdfValue869),
          (this._cachedScaleForStroking[1] = pdfValue870));
      }
      return this._cachedScaleForStroking;
    }
    rescaleAndStroke(pdfParam342, pdfParam343) {
      let {
          ctx: __pdfY,
          current: { lineWidth: lineWidth },
        } = this,
        [pdfValue996, pdfValue997] = this.getScaleForStroking();
      if (pdfValue996 === pdfValue997) {
        ((__pdfY.lineWidth = (lineWidth || 1) * pdfValue996),
          __pdfY.stroke(pdfParam342));
        return;
      }
      let pdfValue998 = __pdfY.getLineDash();
      (pdfParam343 && __pdfY.save(),
        __pdfY.scale(pdfValue996, pdfValue997),
        (pdfValue81.a = 1 / pdfValue996),
        (pdfValue81.d = 1 / pdfValue997));
      let pdfValue999 = new Path2D();
      if (
        (pdfValue999.addPath(pdfParam342, pdfValue81), pdfValue998.length > 0)
      ) {
        let pdfValue2019 = Math.max(pdfValue996, pdfValue997);
        (__pdfY.setLineDash(pdfValue998.map((item) => item / pdfValue2019)),
          (__pdfY.lineDashOffset /= pdfValue2019));
      }
      ((__pdfY.lineWidth = lineWidth || 1),
        __pdfY.stroke(pdfValue999),
        pdfParam343 && __pdfY.restore());
    }
    isContentVisible() {
      for (
        let pdfValue1844 = this.markedContentStack.length - 1;
        pdfValue1844 >= 0;
        pdfValue1844--
      )
        if (!this.markedContentStack[pdfValue1844].visible) return !1;
      return !0;
    }
  };
for (let pdfValue1973 in pdfG)
  pdfValue90.prototype[pdfValue1973] !== void 0 &&
    (pdfValue90.prototype[pdfG[pdfValue1973]] =
      pdfValue90.prototype[pdfValue1973]);
var pdfValue91 = class PdfClass27 {
    #e;
    #t;
    #n;
    static strings = [`fontFamily`, `fontWeight`, `italicAngle`];
    static write(pdfParam375) {
      let __pdfY = new TextEncoder(),
        pdfValue1063 = {},
        pdfValue1064 = 0;
      for (let pdfValue2049 of PdfClass27.strings) {
        let pdfValue2193 = __pdfY.encode(pdfParam375[pdfValue2049]);
        ((pdfValue1063[pdfValue2049] = pdfValue2193),
          (pdfValue1064 += 4 + pdfValue2193.length));
      }
      let pdfValue1065 = new ArrayBuffer(pdfValue1064),
        pdfValue1066 = new Uint8Array(pdfValue1065),
        pdfValue1067 = new DataView(pdfValue1065),
        __pdfS = 0;
      for (let pdfValue1942 of PdfClass27.strings) {
        let pdfValue2088 = pdfValue1063[pdfValue1942],
          ___pdfY = pdfValue2088.length;
        (pdfValue1067.setUint32(__pdfS, ___pdfY),
          pdfValue1066.set(pdfValue2088, __pdfS + 4),
          (__pdfS += 4 + ___pdfY));
      }
      return (
        pdfHelper6(
          __pdfS === pdfValue1065.byteLength,
          `CssFontInfo.write: Buffer overflow`,
        ),
        pdfValue1065
      );
    }
    constructor(pdfParam1245) {
      ((this.#e = pdfParam1245),
        (this.#t = new DataView(this.#e)),
        (this.#n = new TextDecoder()));
    }
    #r(pdfParam642) {
      pdfHelper6(
        pdfParam642 < PdfClass27.strings.length,
        `Invalid string index`,
      );
      let __pdfY = 0;
      for (let pdfValue2180 = 0; pdfValue2180 < pdfParam642; pdfValue2180++)
        __pdfY += this.#t.getUint32(__pdfY) + 4;
      let pdfValue1507 = this.#t.getUint32(__pdfY);
      return this.#n.decode(new Uint8Array(this.#e, __pdfY + 4, pdfValue1507));
    }
    get fontFamily() {
      return this.#r(0);
    }
    get fontWeight() {
      return this.#r(1);
    }
    get italicAngle() {
      return this.#r(2);
    }
  },
  pdfValue92 = class PdfClass26 {
    #e;
    #t;
    #n;
    static strings = [`css`, `loadedName`, `baseFontName`, `src`];
    static write(pdfParam173) {
      let __pdfY = new TextEncoder(),
        pdfValue609 = {},
        pdfValue610 = 0;
      for (let pdfValue2050 of PdfClass26.strings) {
        let pdfValue2194 = __pdfY.encode(pdfParam173[pdfValue2050]);
        ((pdfValue609[pdfValue2050] = pdfValue2194),
          (pdfValue610 += 4 + pdfValue2194.length));
      }
      pdfValue610 += 4;
      let pdfValue611,
        pdfValue612,
        pdfValue613 = 1 + pdfValue610;
      pdfParam173.style &&
        ((pdfValue611 = __pdfY.encode(pdfParam173.style.style)),
        (pdfValue612 = __pdfY.encode(pdfParam173.style.weight)),
        (pdfValue613 += 4 + pdfValue611.length + 4 + pdfValue612.length));
      let __pdfS = new ArrayBuffer(pdfValue613),
        pdfValue614 = new Uint8Array(__pdfS),
        __pdfI = new DataView(__pdfS),
        __pdfR = 0;
      (__pdfI.setUint8(__pdfR++, pdfParam173.guessFallback ? 1 : 0),
        __pdfI.setUint32(__pdfR, 0),
        (__pdfR += 4),
        (pdfValue610 = 0));
      for (let pdfValue1901 of PdfClass26.strings) {
        let pdfValue2041 = pdfValue609[pdfValue1901],
          ___pdfY = pdfValue2041.length;
        ((pdfValue610 += 4 + ___pdfY),
          __pdfI.setUint32(__pdfR, ___pdfY),
          pdfValue614.set(pdfValue2041, __pdfR + 4),
          (__pdfR += 4 + ___pdfY));
      }
      return (
        __pdfI.setUint32(__pdfR - pdfValue610 - 4, pdfValue610),
        pdfParam173.style &&
          (__pdfI.setUint32(__pdfR, pdfValue611.length),
          pdfValue614.set(pdfValue611, __pdfR + 4),
          (__pdfR += 4 + pdfValue611.length),
          __pdfI.setUint32(__pdfR, pdfValue612.length),
          pdfValue614.set(pdfValue612, __pdfR + 4),
          (__pdfR += 4 + pdfValue612.length)),
        pdfHelper6(
          __pdfR <= __pdfS.byteLength,
          `SubstitionInfo.write: Buffer overflow`,
        ),
        __pdfS.transferToFixedLength(__pdfR)
      );
    }
    constructor(pdfParam1246) {
      ((this.#e = pdfParam1246),
        (this.#t = new DataView(this.#e)),
        (this.#n = new TextDecoder()));
    }
    get guessFallback() {
      return this.#t.getUint8(0) !== 0;
    }
    #r(pdfParam643) {
      pdfHelper6(
        pdfParam643 < PdfClass26.strings.length,
        `Invalid string index`,
      );
      let __pdfY = 5;
      for (let pdfValue2181 = 0; pdfValue2181 < pdfParam643; pdfValue2181++)
        __pdfY += this.#t.getUint32(__pdfY) + 4;
      let pdfValue1508 = this.#t.getUint32(__pdfY);
      return this.#n.decode(new Uint8Array(this.#e, __pdfY + 4, pdfValue1508));
    }
    get css() {
      return this.#r(0);
    }
    get loadedName() {
      return this.#r(1);
    }
    get baseFontName() {
      return this.#r(2);
    }
    get src() {
      return this.#r(3);
    }
    get style() {
      let pdfValue1390 = 1;
      pdfValue1390 += 4 + this.#t.getUint32(pdfValue1390);
      let pdfValue1391 = this.#t.getUint32(pdfValue1390),
        __pdfY = this.#n.decode(
          new Uint8Array(this.#e, pdfValue1390 + 4, pdfValue1391),
        );
      pdfValue1390 += 4 + pdfValue1391;
      let pdfValue1392 = this.#t.getUint32(pdfValue1390);
      return {
        style: __pdfY,
        weight: this.#n.decode(
          new Uint8Array(this.#e, pdfValue1390 + 4, pdfValue1392),
        ),
      };
    }
  },
  pdfValue93 = class PdfClass10 {
    static bools = [
      `black`,
      `bold`,
      `disableFontFace`,
      `fontExtraProperties`,
      `isInvalidPDFjsFont`,
      `isType3Font`,
      `italic`,
      `missingFile`,
      `remeasure`,
      `vertical`,
    ];
    static numbers = [`ascent`, `defaultWidth`, `descent`];
    static strings = [`fallbackName`, `loadedName`, `mimetype`, `name`];
    static #e = Math.ceil((this.bools.length * 2) / 8);
    static #t = this.#e + this.numbers.length * 8;
    static #n = this.#t + 1 + 8;
    static #r = this.#n + 1 + 48;
    static #i = this.#r + 1 + 6;
    #a;
    #o;
    #s;
    constructor({ data: data, extra: extra }) {
      ((this.#a = data),
        (this.#o = new TextDecoder()),
        (this.#s = new DataView(this.#a)),
        extra && Object.assign(this, extra));
    }
    #c(pdfParam882) {
      pdfHelper6(
        pdfParam882 < PdfClass10.bools.length,
        `Invalid boolean index`,
      );
      let __pdfY = Math.floor(pdfParam882 / 4),
        pdfValue1677 = (pdfParam882 * 2) % 8,
        pdfValue1678 = (this.#s.getUint8(__pdfY) >> pdfValue1677) & 3;
      return pdfValue1678 === 0 ? void 0 : pdfValue1678 === 2;
    }
    get black() {
      return this.#c(0);
    }
    get bold() {
      return this.#c(1);
    }
    get disableFontFace() {
      return this.#c(2);
    }
    get fontExtraProperties() {
      return this.#c(3);
    }
    get isInvalidPDFjsFont() {
      return this.#c(4);
    }
    get isType3Font() {
      return this.#c(5);
    }
    get italic() {
      return this.#c(6);
    }
    get missingFile() {
      return this.#c(7);
    }
    get remeasure() {
      return this.#c(8);
    }
    get vertical() {
      return this.#c(9);
    }
    #l(pdfParam1191) {
      return (
        pdfHelper6(
          pdfParam1191 < PdfClass10.numbers.length,
          `Invalid number index`,
        ),
        this.#s.getFloat64(PdfClass10.#e + pdfParam1191 * 8)
      );
    }
    get ascent() {
      return this.#l(0);
    }
    get defaultWidth() {
      return this.#l(1);
    }
    get descent() {
      return this.#l(2);
    }
    get bbox() {
      let pdfValue1668 = PdfClass10.#t;
      if (this.#s.getUint8(pdfValue1668) === 0) return;
      pdfValue1668 += 1;
      let __pdfY = [];
      for (let pdfValue2125 = 0; pdfValue2125 < 4; pdfValue2125++)
        (__pdfY.push(this.#s.getInt16(pdfValue1668, !0)), (pdfValue1668 += 2));
      return __pdfY;
    }
    get fontMatrix() {
      let pdfValue1639 = PdfClass10.#n;
      if (this.#s.getUint8(pdfValue1639) === 0) return;
      pdfValue1639 += 1;
      let __pdfY = [];
      for (let pdfValue2104 = 0; pdfValue2104 < 6; pdfValue2104++)
        (__pdfY.push(this.#s.getFloat64(pdfValue1639, !0)),
          (pdfValue1639 += 8));
      return __pdfY;
    }
    get defaultVMetrics() {
      let pdfValue1630 = PdfClass10.#r;
      if (this.#s.getUint8(pdfValue1630) === 0) return;
      pdfValue1630 += 1;
      let __pdfY = [];
      for (let pdfValue2126 = 0; pdfValue2126 < 3; pdfValue2126++)
        (__pdfY.push(this.#s.getInt16(pdfValue1630, !0)), (pdfValue1630 += 2));
      return __pdfY;
    }
    #u(pdfParam570) {
      pdfHelper6(
        pdfParam570 < PdfClass10.strings.length,
        `Invalid string index`,
      );
      let __pdfY = PdfClass10.#i + 4;
      for (let pdfValue2182 = 0; pdfValue2182 < pdfParam570; pdfValue2182++)
        __pdfY += this.#s.getUint32(__pdfY) + 4;
      let pdfValue1407 = this.#s.getUint32(__pdfY),
        pdfValue1408 = new Uint8Array(pdfValue1407);
      return (
        pdfValue1408.set(new Uint8Array(this.#a, __pdfY + 4, pdfValue1407)),
        this.#o.decode(pdfValue1408)
      );
    }
    get fallbackName() {
      return this.#u(0);
    }
    get loadedName() {
      return this.#u(1);
    }
    get mimetype() {
      return this.#u(2);
    }
    get name() {
      return this.#u(3);
    }
    get data() {
      let pdfValue1478 = PdfClass10.#i,
        __pdfY = this.#s.getUint32(pdfValue1478);
      pdfValue1478 += 4 + __pdfY;
      let pdfValue1479 = this.#s.getUint32(pdfValue1478);
      pdfValue1478 += 4 + pdfValue1479;
      let pdfValue1480 = this.#s.getUint32(pdfValue1478);
      pdfValue1478 += 4 + pdfValue1480;
      let pdfValue1481 = this.#s.getUint32(pdfValue1478);
      if (pdfValue1481 !== 0)
        return new Uint8Array(this.#a, pdfValue1478 + 4, pdfValue1481);
    }
    clearData() {
      let pdfValue1421 = PdfClass10.#i,
        __pdfY = this.#s.getUint32(pdfValue1421);
      pdfValue1421 += 4 + __pdfY;
      let pdfValue1422 = this.#s.getUint32(pdfValue1421);
      pdfValue1421 += 4 + pdfValue1422;
      let pdfValue1423 = this.#s.getUint32(pdfValue1421);
      pdfValue1421 += 4 + pdfValue1423;
      let pdfValue1424 = this.#s.getUint32(pdfValue1421);
      (new Uint8Array(this.#a, pdfValue1421 + 4, pdfValue1424).fill(0),
        this.#s.setUint32(pdfValue1421, 0));
    }
    get cssFontInfo() {
      let pdfValue1379 = PdfClass10.#i,
        __pdfY = this.#s.getUint32(pdfValue1379);
      pdfValue1379 += 4 + __pdfY;
      let pdfValue1380 = this.#s.getUint32(pdfValue1379);
      pdfValue1379 += 4 + pdfValue1380;
      let pdfValue1381 = this.#s.getUint32(pdfValue1379);
      if (pdfValue1381 === 0) return null;
      let pdfValue1382 = new Uint8Array(pdfValue1381);
      return (
        pdfValue1382.set(
          new Uint8Array(this.#a, pdfValue1379 + 4, pdfValue1381),
        ),
        new pdfValue91(pdfValue1382.buffer)
      );
    }
    get systemFontInfo() {
      let pdfValue1467 = PdfClass10.#i,
        __pdfY = this.#s.getUint32(pdfValue1467);
      pdfValue1467 += 4 + __pdfY;
      let pdfValue1468 = this.#s.getUint32(pdfValue1467);
      if (pdfValue1468 === 0) return null;
      let pdfValue1469 = new Uint8Array(pdfValue1468);
      return (
        pdfValue1469.set(
          new Uint8Array(this.#a, pdfValue1467 + 4, pdfValue1468),
        ),
        new pdfValue92(pdfValue1469.buffer)
      );
    }
    static write(pdfParam6) {
      let __pdfY = pdfParam6.systemFontInfo
          ? pdfValue92.write(pdfParam6.systemFontInfo)
          : null,
        pdfValue235 = pdfParam6.cssFontInfo
          ? pdfValue91.write(pdfParam6.cssFontInfo)
          : null,
        pdfValue236 = new TextEncoder(),
        pdfValue237 = {},
        pdfValue238 = 0;
      for (let ___pdfY of PdfClass10.strings)
        ((pdfValue237[___pdfY] = pdfValue236.encode(pdfParam6[___pdfY])),
          (pdfValue238 += 4 + pdfValue237[___pdfY].length));
      let pdfValue239 =
          PdfClass10.#i +
          4 +
          pdfValue238 +
          4 +
          (__pdfY ? __pdfY.byteLength : 0) +
          4 +
          (pdfValue235 ? pdfValue235.byteLength : 0) +
          4 +
          (pdfParam6.data ? pdfParam6.data.length : 0),
        __pdfS = new ArrayBuffer(pdfValue239),
        pdfValue240 = new Uint8Array(__pdfS),
        __pdfI = new DataView(__pdfS),
        __pdfR = 0,
        ___pdfS = PdfClass10.bools.length,
        pdfValue241 = 0,
        _pdfNt = 0;
      for (let ___pdfY = 0; ___pdfY < ___pdfS; ___pdfY++) {
        let pdfValue1850 = pdfParam6[PdfClass10.bools[___pdfY]];
        ((pdfValue241 |=
          (pdfValue1850 === void 0 ? 0 : pdfValue1850 ? 2 : 1) << _pdfNt),
          (_pdfNt += 2),
          (_pdfNt === 8 || ___pdfY === ___pdfS - 1) &&
            (__pdfI.setUint8(__pdfR++, pdfValue241),
            (pdfValue241 = 0),
            (_pdfNt = 0)));
      }
      pdfHelper6(
        __pdfR === PdfClass10.#e,
        `FontInfo.write: Boolean properties offset mismatch`,
      );
      for (let ___pdfY of PdfClass10.numbers)
        (__pdfI.setFloat64(__pdfR, pdfParam6[___pdfY]), (__pdfR += 8));
      if (
        (pdfHelper6(
          __pdfR === PdfClass10.#t,
          `FontInfo.write: Number properties offset mismatch`,
        ),
        pdfParam6.bbox)
      ) {
        __pdfI.setUint8(__pdfR++, 4);
        for (let pdfValue2195 of pdfParam6.bbox)
          (__pdfI.setInt16(__pdfR, pdfValue2195, !0), (__pdfR += 2));
      } else (__pdfI.setUint8(__pdfR++, 0), (__pdfR += 8));
      if (
        (pdfHelper6(
          __pdfR === PdfClass10.#n,
          `FontInfo.write: BBox properties offset mismatch`,
        ),
        pdfParam6.fontMatrix)
      ) {
        __pdfI.setUint8(__pdfR++, 6);
        for (let pdfValue2153 of pdfParam6.fontMatrix)
          (__pdfI.setFloat64(__pdfR, pdfValue2153, !0), (__pdfR += 8));
      } else (__pdfI.setUint8(__pdfR++, 0), (__pdfR += 48));
      if (
        (pdfHelper6(
          __pdfR === PdfClass10.#r,
          `FontInfo.write: FontMatrix properties offset mismatch`,
        ),
        pdfParam6.defaultVMetrics)
      ) {
        __pdfI.setUint8(__pdfR++, 1);
        for (let pdfValue2131 of pdfParam6.defaultVMetrics)
          (__pdfI.setInt16(__pdfR, pdfValue2131, !0), (__pdfR += 2));
      } else (__pdfI.setUint8(__pdfR++, 0), (__pdfR += 6));
      (pdfHelper6(
        __pdfR === PdfClass10.#i,
        `FontInfo.write: DefaultVMetrics properties offset mismatch`,
      ),
        __pdfI.setUint32(PdfClass10.#i, 0),
        (__pdfR += 4));
      for (let pdfValue1943 of PdfClass10.strings) {
        let pdfValue2089 = pdfValue237[pdfValue1943],
          ___pdfY = pdfValue2089.length;
        (__pdfI.setUint32(__pdfR, ___pdfY),
          pdfValue240.set(pdfValue2089, __pdfR + 4),
          (__pdfR += 4 + ___pdfY));
      }
      if (
        (__pdfI.setUint32(PdfClass10.#i, __pdfR - PdfClass10.#i - 4), !__pdfY)
      )
        (__pdfI.setUint32(__pdfR, 0), (__pdfR += 4));
      else {
        let pdfValue1621 = __pdfY.byteLength;
        (__pdfI.setUint32(__pdfR, pdfValue1621),
          pdfHelper6(
            __pdfR + 4 + pdfValue1621 <= __pdfS.byteLength,
            `FontInfo.write: Buffer overflow at systemFontInfo`,
          ),
          pdfValue240.set(new Uint8Array(__pdfY), __pdfR + 4),
          (__pdfR += 4 + pdfValue1621));
      }
      if (!pdfValue235) (__pdfI.setUint32(__pdfR, 0), (__pdfR += 4));
      else {
        let pdfValue1635 = pdfValue235.byteLength;
        (__pdfI.setUint32(__pdfR, pdfValue1635),
          pdfHelper6(
            __pdfR + 4 + pdfValue1635 <= __pdfS.byteLength,
            `FontInfo.write: Buffer overflow at cssFontInfo`,
          ),
          pdfValue240.set(new Uint8Array(pdfValue235), __pdfR + 4),
          (__pdfR += 4 + pdfValue1635));
      }
      return (
        pdfParam6.data === void 0
          ? (__pdfI.setUint32(__pdfR, 0), (__pdfR += 4))
          : (__pdfI.setUint32(__pdfR, pdfParam6.data.length),
            pdfValue240.set(pdfParam6.data, __pdfR + 4),
            (__pdfR += 4 + pdfParam6.data.length)),
        pdfHelper6(
          __pdfR <= __pdfS.byteLength,
          `FontInfo.write: Buffer overflow`,
        ),
        __pdfS.transferToFixedLength(__pdfR)
      );
    }
  },
  pdfP = class {
    static #e = null;
    static #t = ``;
    static get workerPort() {
      return this.#e;
    }
    static set workerPort(pdfParam892) {
      if (
        !(typeof Worker < `u` && pdfParam892 instanceof Worker) &&
        pdfParam892 !== null
      )
        throw Error("Invalid `workerPort` type.");
      this.#e = pdfParam892;
    }
    static get workerSrc() {
      return this.#t;
    }
    static set workerSrc(pdfParam1097) {
      if (typeof pdfParam1097 != `string`)
        throw Error("Invalid `workerSrc` type.");
      this.#t = pdfParam1097;
    }
  },
  pdfValue94 = class {
    #e;
    #t;
    constructor({ parsedData: parsedData, rawData: rawData }) {
      ((this.#e = parsedData), (this.#t = rawData));
    }
    getRaw() {
      return this.#t;
    }
    get(pdfParam1655) {
      return this.#e.get(pdfParam1655) ?? null;
    }
    [Symbol.iterator]() {
      return this.#e.entries();
    }
  },
  pdfValue95 = Symbol(`INTERNAL`),
  pdfValue96 = class {
    #e = !1;
    #t = !1;
    #n = !1;
    #r = !0;
    constructor(
      pdfParam767,
      { name: name, intent: __pdfY, usage: usage, rbGroups: rbGroups },
    ) {
      ((this.#e = !!(pdfParam767 & pdfValue5.DISPLAY)),
        (this.#t = !!(pdfParam767 & pdfValue5.PRINT)),
        (this.name = name),
        (this.intent = __pdfY),
        (this.usage = usage),
        (this.rbGroups = rbGroups));
    }
    get visible() {
      if (this.#n) return this.#r;
      if (!this.#r) return !1;
      let { print: print, view: view } = this.usage;
      return this.#e
        ? view?.viewState !== `OFF`
        : this.#t
          ? print?.printState !== `OFF`
          : !0;
    }
    _setVisible(pdfParam1138, pdfParam1139, __pdfY = !1) {
      (pdfParam1138 !== pdfValue95 &&
        pdfHelper5("Internal method `_setVisible` called."),
        (this.#n = __pdfY),
        (this.#r = pdfParam1139));
    }
  },
  pdfValue97 = class {
    #e = null;
    #t = new Map();
    #n = null;
    #r = null;
    constructor(pdfParam318, pdfParam319 = pdfValue5.DISPLAY) {
      if (
        ((this.renderingIntent = pdfParam319),
        (this.name = null),
        (this.creator = null),
        pdfParam318 !== null)
      ) {
        ((this.name = pdfParam318.name),
          (this.creator = pdfParam318.creator),
          (this.#r = pdfParam318.order));
        for (let __pdfY of pdfParam318.groups)
          this.#t.set(__pdfY.id, new pdfValue96(pdfParam319, __pdfY));
        if (pdfParam318.baseState === `OFF`)
          for (let pdfValue2154 of this.#t.values())
            pdfValue2154._setVisible(pdfValue95, !1);
        for (let pdfValue2142 of pdfParam318.on)
          this.#t.get(pdfValue2142)._setVisible(pdfValue95, !0);
        for (let pdfValue2133 of pdfParam318.off)
          this.#t.get(pdfValue2133)._setVisible(pdfValue95, !1);
        this.#n = this.getHash();
      }
    }
    #i(pdfParam356) {
      let pdfValue1044 = pdfParam356.length;
      if (pdfValue1044 < 2) return !0;
      let __pdfY = pdfParam356[0];
      for (let pdfValue1190 = 1; pdfValue1190 < pdfValue1044; pdfValue1190++) {
        let pdfValue1282 = pdfParam356[pdfValue1190],
          pdfValue1283;
        if (Array.isArray(pdfValue1282)) pdfValue1283 = this.#i(pdfValue1282);
        else if (this.#t.has(pdfValue1282))
          pdfValue1283 = this.#t.get(pdfValue1282).visible;
        else
          return (
            pdfHelper4(`Optional content group not found: ${pdfValue1282}`),
            !0
          );
        switch (__pdfY) {
          case `And`:
            if (!pdfValue1283) return !1;
            break;
          case `Or`:
            if (pdfValue1283) return !0;
            break;
          case `Not`:
            return !pdfValue1283;
          default:
            return !0;
        }
      }
      return __pdfY === `And`;
    }
    isVisible(pdfParam60) {
      if (this.#t.size === 0) return !0;
      if (!pdfParam60)
        return (pdfHelper3(`Optional content group not defined.`), !0);
      if (pdfParam60.type === `OCG`)
        return this.#t.has(pdfParam60.id)
          ? this.#t.get(pdfParam60.id).visible
          : (pdfHelper4(`Optional content group not found: ${pdfParam60.id}`),
            !0);
      if (pdfParam60.type === `OCMD`) {
        if (pdfParam60.expression) return this.#i(pdfParam60.expression);
        if (!pdfParam60.policy || pdfParam60.policy === `AnyOn`) {
          for (let pdfValue1699 of pdfParam60.ids) {
            if (!this.#t.has(pdfValue1699))
              return (
                pdfHelper4(`Optional content group not found: ${pdfValue1699}`),
                !0
              );
            if (this.#t.get(pdfValue1699).visible) return !0;
          }
          return !1;
        } else if (pdfParam60.policy === `AllOn`) {
          for (let pdfValue1697 of pdfParam60.ids) {
            if (!this.#t.has(pdfValue1697))
              return (
                pdfHelper4(`Optional content group not found: ${pdfValue1697}`),
                !0
              );
            if (!this.#t.get(pdfValue1697).visible) return !1;
          }
          return !0;
        } else if (pdfParam60.policy === `AnyOff`) {
          for (let pdfValue1698 of pdfParam60.ids) {
            if (!this.#t.has(pdfValue1698))
              return (
                pdfHelper4(`Optional content group not found: ${pdfValue1698}`),
                !0
              );
            if (!this.#t.get(pdfValue1698).visible) return !0;
          }
          return !1;
        } else if (pdfParam60.policy === `AllOff`) {
          for (let pdfValue1700 of pdfParam60.ids) {
            if (!this.#t.has(pdfValue1700))
              return (
                pdfHelper4(`Optional content group not found: ${pdfValue1700}`),
                !0
              );
            if (this.#t.get(pdfValue1700).visible) return !1;
          }
          return !0;
        }
        return (
          pdfHelper4(`Unknown optional content policy ${pdfParam60.policy}.`),
          !0
        );
      }
      return (pdfHelper4(`Unknown group type ${pdfParam60.type}.`), !0);
    }
    setVisibility(pdfParam502, pdfParam503 = !0, __pdfY = !0) {
      let pdfValue1298 = this.#t.get(pdfParam502);
      if (!pdfValue1298) {
        pdfHelper4(`Optional content group not found: ${pdfParam502}`);
        return;
      }
      if (__pdfY && pdfParam503 && pdfValue1298.rbGroups.length)
        for (let pdfValue1933 of pdfValue1298.rbGroups)
          for (let ___pdfY of pdfValue1933)
            ___pdfY !== pdfParam502 &&
              this.#t.get(___pdfY)?._setVisible(pdfValue95, !1, !0);
      (pdfValue1298._setVisible(pdfValue95, !!pdfParam503, !0),
        (this.#e = null));
    }
    setOCGState({ state: state, preserveRB: preserveRB }) {
      let __pdfY;
      for (let pdfValue1319 of state) {
        switch (pdfValue1319) {
          case `ON`:
          case `OFF`:
          case `Toggle`:
            __pdfY = pdfValue1319;
            continue;
        }
        let pdfValue1363 = this.#t.get(pdfValue1319);
        if (pdfValue1363)
          switch (__pdfY) {
            case `ON`:
              this.setVisibility(pdfValue1319, !0, preserveRB);
              break;
            case `OFF`:
              this.setVisibility(pdfValue1319, !1, preserveRB);
              break;
            case `Toggle`:
              this.setVisibility(
                pdfValue1319,
                !pdfValue1363.visible,
                preserveRB,
              );
              break;
          }
      }
      this.#e = null;
    }
    get hasInitialVisibility() {
      return this.#n === null || this.getHash() === this.#n;
    }
    getOrder() {
      return this.#t.size
        ? this.#r
          ? this.#r.slice()
          : [...this.#t.keys()]
        : null;
    }
    getGroup(pdfParam1610) {
      return this.#t.get(pdfParam1610) || null;
    }
    getHash() {
      if (this.#e !== null) return this.#e;
      let pdfValue1659 = new pdfValue36();
      for (let [pdfValue2134, __pdfY] of this.#t)
        pdfValue1659.update(`${pdfValue2134}:${__pdfY.visible}`);
      return (this.#e = pdfValue1659.hexdigest());
    }
    [Symbol.iterator]() {
      return this.#t.entries();
    }
  },
  pdfValue98 = class {
    constructor(
      pdfParam104,
      { disableRange = !1, disableStream: __pdfY = !1 },
    ) {
      pdfHelper6(
        pdfParam104,
        `PDFDataTransportStream - missing required "pdfDataRangeTransport" argument.`,
      );
      let {
        length: length,
        initialData: initialData,
        progressiveDone: progressiveDone,
        contentDispositionFilename: contentDispositionFilename,
      } = pdfParam104;
      if (
        ((this._queuedChunks = []),
        (this._progressiveDone = progressiveDone),
        (this._contentDispositionFilename = contentDispositionFilename),
        initialData?.length > 0)
      ) {
        let pdfValue1701 =
          initialData instanceof Uint8Array &&
          initialData.byteLength === initialData.buffer.byteLength
            ? initialData.buffer
            : new Uint8Array(initialData).buffer;
        this._queuedChunks.push(pdfValue1701);
      }
      ((this._pdfDataRangeTransport = pdfParam104),
        (this._isStreamingSupported = !__pdfY),
        (this._isRangeSupported = !disableRange),
        (this._contentLength = length),
        (this._fullRequestReader = null),
        (this._rangeReaders = []),
        pdfParam104.addRangeListener((pdfParam1550, pdfParam1551) => {
          this._onReceiveData({
            begin: pdfParam1550,
            chunk: pdfParam1551,
          });
        }),
        pdfParam104.addProgressListener((pdfParam1570, pdfParam1571) => {
          this._onProgress({
            loaded: pdfParam1570,
            total: pdfParam1571,
          });
        }),
        pdfParam104.addProgressiveReadListener((pdfParam1656) => {
          this._onReceiveData({
            chunk: pdfParam1656,
          });
        }),
        pdfParam104.addProgressiveDoneListener(() => {
          this._onProgressiveDone();
        }),
        pdfParam104.transportReady());
    }
    _onReceiveData({ begin: begin, chunk: chunk }) {
      let __pdfY =
        chunk instanceof Uint8Array &&
        chunk.byteLength === chunk.buffer.byteLength
          ? chunk.buffer
          : new Uint8Array(chunk).buffer;
      begin === void 0
        ? this._fullRequestReader
          ? this._fullRequestReader._enqueue(__pdfY)
          : this._queuedChunks.push(__pdfY)
        : pdfHelper6(
            this._rangeReaders.some(function (item) {
              return item._begin === begin ? (item._enqueue(__pdfY), !0) : !1;
            }),
            "_onReceiveData - no `PDFDataTransportStreamRangeReader` instance found.",
          );
    }
    get _progressiveDataLength() {
      return this._fullRequestReader?._loaded ?? 0;
    }
    _onProgress(pdfParam751) {
      pdfParam751.total === void 0
        ? this._rangeReaders[0]?.onProgress?.({
            loaded: pdfParam751.loaded,
          })
        : this._fullRequestReader?.onProgress?.({
            loaded: pdfParam751.loaded,
            total: pdfParam751.total,
          });
    }
    _onProgressiveDone() {
      (this._fullRequestReader?.progressiveDone(),
        (this._progressiveDone = !0));
    }
    _removeRangeReader(pdfParam1110) {
      let pdfValue1873 = this._rangeReaders.indexOf(pdfParam1110);
      pdfValue1873 >= 0 && this._rangeReaders.splice(pdfValue1873, 1);
    }
    getFullReader() {
      pdfHelper6(
        !this._fullRequestReader,
        `PDFDataTransportStream.getFullReader can only be called once.`,
      );
      let pdfValue1357 = this._queuedChunks;
      return (
        (this._queuedChunks = null),
        new pdfValue99(
          this,
          pdfValue1357,
          this._progressiveDone,
          this._contentDispositionFilename,
        )
      );
    }
    getRangeReader(pdfParam660, pdfParam661) {
      if (pdfParam661 <= this._progressiveDataLength) return null;
      let __pdfY = new pdfValue100(this, pdfParam660, pdfParam661);
      return (
        this._pdfDataRangeTransport.requestDataRange(pdfParam660, pdfParam661),
        this._rangeReaders.push(__pdfY),
        __pdfY
      );
    }
    cancelAllRequests(pdfParam809) {
      this._fullRequestReader?.cancel(pdfParam809);
      for (let pdfValue2135 of this._rangeReaders.slice(0))
        pdfValue2135.cancel(pdfParam809);
      this._pdfDataRangeTransport.abort();
    }
  },
  pdfValue99 = class {
    constructor(pdfParam440, pdfParam441, __pdfY = !1, pdfParam442 = null) {
      ((this._stream = pdfParam440),
        (this._done = __pdfY || !1),
        (this._filename = _pdfG(pdfParam442) ? pdfParam442 : null),
        (this._queuedChunks = pdfParam441 || []),
        (this._loaded = 0));
      for (let pdfValue2096 of this._queuedChunks)
        this._loaded += pdfValue2096.byteLength;
      ((this._requests = []),
        (this._headersReady = Promise.resolve()),
        (pdfParam440._fullRequestReader = this),
        (this.onProgress = null));
    }
    _enqueue(pdfParam766) {
      this._done ||
        (this._requests.length > 0
          ? this._requests.shift().resolve({
              value: pdfParam766,
              done: !1,
            })
          : this._queuedChunks.push(pdfParam766),
        (this._loaded += pdfParam766.byteLength));
    }
    get headersReady() {
      return this._headersReady;
    }
    get filename() {
      return this._filename;
    }
    get isRangeSupported() {
      return this._stream._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._stream._isStreamingSupported;
    }
    get contentLength() {
      return this._stream._contentLength;
    }
    async read() {
      if (this._queuedChunks.length > 0)
        return {
          value: this._queuedChunks.shift(),
          done: !1,
        };
      if (this._done)
        return {
          value: void 0,
          done: !0,
        };
      let pdfValue1439 = Promise.withResolvers();
      return (this._requests.push(pdfValue1439), pdfValue1439.promise);
    }
    cancel(pdfParam1007) {
      this._done = !0;
      for (let pdfValue2073 of this._requests)
        pdfValue2073.resolve({
          value: void 0,
          done: !0,
        });
      this._requests.length = 0;
    }
    progressiveDone() {
      this._done ||= !0;
    }
  },
  pdfValue100 = class {
    constructor(pdfParam865, pdfParam866, __pdfY) {
      ((this._stream = pdfParam865),
        (this._begin = pdfParam866),
        (this._end = __pdfY),
        (this._queuedChunk = null),
        (this._requests = []),
        (this._done = !1),
        (this.onProgress = null));
    }
    _enqueue(pdfParam470) {
      if (!this._done) {
        if (this._requests.length === 0) this._queuedChunk = pdfParam470;
        else {
          this._requests.shift().resolve({
            value: pdfParam470,
            done: !1,
          });
          for (let pdfValue2074 of this._requests)
            pdfValue2074.resolve({
              value: void 0,
              done: !0,
            });
          this._requests.length = 0;
        }
        ((this._done = !0), this._stream._removeRangeReader(this));
      }
    }
    get isStreamingSupported() {
      return !1;
    }
    async read() {
      if (this._queuedChunk) {
        let pdfValue1998 = this._queuedChunk;
        return (
          (this._queuedChunk = null),
          {
            value: pdfValue1998,
            done: !1,
          }
        );
      }
      if (this._done)
        return {
          value: void 0,
          done: !0,
        };
      let pdfValue1405 = Promise.withResolvers();
      return (this._requests.push(pdfValue1405), pdfValue1405.promise);
    }
    cancel(pdfParam797) {
      this._done = !0;
      for (let pdfValue2075 of this._requests)
        pdfValue2075.resolve({
          value: void 0,
          done: !0,
        });
      ((this._requests.length = 0), this._stream._removeRangeReader(this));
    }
  };
function pdfHelper41(pdfParam11) {
  let pdfValue257 = !0,
    __pdfY = pdfHelper54(`filename\\*`, `i`).exec(pdfParam11);
  if (__pdfY) {
    __pdfY = __pdfY[1];
    let pdfValue2097 = pdfHelper58(__pdfY);
    return (
      (pdfValue2097 = unescape(pdfValue2097)),
      (pdfValue2097 = __pdfS(pdfValue2097)),
      (pdfValue2097 = pdfHelper59(pdfValue2097)),
      pdfHelper56(pdfValue2097)
    );
  }
  if (((__pdfY = pdfHelper57(pdfParam11)), __pdfY))
    return pdfHelper56(pdfHelper59(__pdfY));
  if (((__pdfY = pdfHelper54(`filename`, `i`).exec(pdfParam11)), __pdfY)) {
    __pdfY = __pdfY[1];
    let pdfValue2215 = pdfHelper58(__pdfY);
    return (
      (pdfValue2215 = pdfHelper59(pdfValue2215)),
      pdfHelper56(pdfValue2215)
    );
  }
  function pdfHelper54(pdfParam1066, pdfParam1067) {
    return RegExp(
      `(?:^|;)\\s*` +
        pdfParam1066 +
        `\\s*=\\s*([^";\\s][^;\\s]*|"(?:[^"\\\\]|\\\\"?)+"?)`,
      pdfParam1067,
    );
  }
  function pdfHelper55(pdfParam814, ___pdfY) {
    if (pdfParam814) {
      if (!/^[\x00-\xFF]+$/.test(___pdfY)) return ___pdfY;
      try {
        let pdfValue2059 = new TextDecoder(pdfParam814, {
            fatal: !0,
          }),
          pdfValue2060 = pdfHelper9(___pdfY);
        ((___pdfY = pdfValue2059.decode(pdfValue2060)), (pdfValue257 = !1));
      } catch {}
    }
    return ___pdfY;
  }
  function pdfHelper56(pdfParam1155) {
    return (
      pdfValue257 &&
        /[\x80-\xff]/.test(pdfParam1155) &&
        ((pdfParam1155 = pdfHelper55(`utf-8`, pdfParam1155)),
        pdfValue257 &&
          (pdfParam1155 = pdfHelper55(`iso-8859-1`, pdfParam1155))),
      pdfParam1155
    );
  }
  function pdfHelper57(pdfParam420) {
    let pdfValue1143 = [],
      ___pdfY,
      pdfValue1144 = pdfHelper54(`filename\\*((?!0\\d)\\d+)(\\*?)`, `ig`);
    for (; (___pdfY = pdfValue1144.exec(pdfParam420)) !== null; ) {
      let [, pdfValue1974, pdfValue1975, pdfValue1976] = ___pdfY;
      if (
        ((pdfValue1974 = parseInt(pdfValue1974, 10)),
        pdfValue1974 in pdfValue1143)
      ) {
        if (pdfValue1974 === 0) break;
        continue;
      }
      pdfValue1143[pdfValue1974] = [pdfValue1975, pdfValue1976];
    }
    let pdfValue1145 = [];
    for (
      let pdfValue1831 = 0;
      pdfValue1831 < pdfValue1143.length && pdfValue1831 in pdfValue1143;
      ++pdfValue1831
    ) {
      let [____pdfY, pdfValue2042] = pdfValue1143[pdfValue1831];
      ((pdfValue2042 = pdfHelper58(pdfValue2042)),
        ____pdfY &&
          ((pdfValue2042 = unescape(pdfValue2042)),
          pdfValue1831 === 0 && (pdfValue2042 = __pdfS(pdfValue2042))),
        pdfValue1145.push(pdfValue2042));
    }
    return pdfValue1145.join(``);
  }
  function pdfHelper58(pdfParam566) {
    if (pdfParam566.startsWith(`"`)) {
      let pdfValue1518 = pdfParam566.slice(1).split(`\\"`);
      for (
        let pdfValue1686 = 0;
        pdfValue1686 < pdfValue1518.length;
        ++pdfValue1686
      ) {
        let ___pdfY = pdfValue1518[pdfValue1686].indexOf(`"`);
        (___pdfY !== -1 &&
          ((pdfValue1518[pdfValue1686] = pdfValue1518[pdfValue1686].slice(
            0,
            ___pdfY,
          )),
          (pdfValue1518.length = pdfValue1686 + 1)),
          (pdfValue1518[pdfValue1686] = pdfValue1518[pdfValue1686].replaceAll(
            /\\(.)/g,
            `$1`,
          )));
      }
      pdfParam566 = pdfValue1518.join(`"`);
    }
    return pdfParam566;
  }
  function __pdfS(pdfParam1077) {
    let pdfValue1832 = pdfParam1077.indexOf(`'`);
    return pdfValue1832 === -1
      ? pdfParam1077
      : pdfHelper55(
          pdfParam1077.slice(0, pdfValue1832),
          pdfParam1077.slice(pdfValue1832 + 1).replace(/^[^']*'/, ``),
        );
  }
  function pdfHelper59(pdfParam357) {
    return !pdfParam357.startsWith(`=?`) ||
      /[\x00-\x19\x80-\xff]/.test(pdfParam357)
      ? pdfParam357
      : pdfParam357.replaceAll(
          /=\?([\w-]*)\?([QqBb])\?((?:[^?]|\?(?!=))*)\?=/g,
          function (pdfParam586, pdfParam587, ___pdfY, pdfParam588) {
            if (___pdfY === `q` || ___pdfY === `Q`)
              return (
                (pdfParam588 = pdfParam588.replaceAll(`_`, ` `)),
                (pdfParam588 = pdfParam588.replaceAll(
                  /=([0-9a-fA-F]{2})/g,
                  function (pdfParam1450, pdfParam1451) {
                    return String.fromCharCode(parseInt(pdfParam1451, 16));
                  },
                )),
                pdfHelper55(pdfParam587, pdfParam588)
              );
            try {
              pdfParam588 = atob(pdfParam588);
            } catch {}
            return pdfHelper55(pdfParam587, pdfParam588);
          },
        );
  }
  return ``;
}
function pdfHelper42(pdfParam867, pdfParam868) {
  let __pdfY = new Headers();
  if (!pdfParam867 || !pdfParam868 || typeof pdfParam868 != `object`)
    return __pdfY;
  for (let pdfValue2136 in pdfParam868) {
    let pdfValue2216 = pdfParam868[pdfValue2136];
    pdfValue2216 !== void 0 && __pdfY.append(pdfValue2136, pdfValue2216);
  }
  return __pdfY;
}
function pdfHelper43(pdfParam1540) {
  return URL.parse(pdfParam1540)?.origin ?? null;
}
function pdfHelper44({
  responseHeaders: responseHeaders,
  isHttp: isHttp,
  rangeChunkSize: __pdfY,
  disableRange: disableRange,
}) {
  let pdfValue1041 = {
      allowRangeRequests: !1,
      suggestedLength: void 0,
    },
    pdfValue1042 = parseInt(responseHeaders.get(`Content-Length`), 10);
  return (
    !Number.isInteger(pdfValue1042) ||
      ((pdfValue1041.suggestedLength = pdfValue1042),
      pdfValue1042 <= 2 * __pdfY) ||
      disableRange ||
      !isHttp ||
      responseHeaders.get(`Accept-Ranges`) !== `bytes` ||
      (responseHeaders.get(`Content-Encoding`) || `identity`) !== `identity` ||
      (pdfValue1041.allowRangeRequests = !0),
    pdfValue1041
  );
}
function pdfHelper45(pdfParam769) {
  let pdfValue1614 = pdfParam769.get(`Content-Disposition`);
  if (pdfValue1614) {
    let pdfValue1925 = pdfHelper41(pdfValue1614);
    if (pdfValue1925.includes(`%`))
      try {
        pdfValue1925 = decodeURIComponent(pdfValue1925);
      } catch {}
    if (_pdfG(pdfValue1925)) return pdfValue1925;
  }
  return null;
}
function pdfHelper46(pdfParam857, pdfParam858) {
  return new pdfT(
    `Unexpected server response (${pdfParam857}) while retrieving PDF "${pdfParam858}".`,
    pdfParam857,
    pdfParam857 === 404 ||
      (pdfParam857 === 0 && pdfParam858.startsWith(`file:`)),
  );
}
function pdfHelper47(pdfParam1615) {
  return pdfParam1615 === 200 || pdfParam1615 === 206;
}
function pdfHelper48(pdfParam879, pdfParam880, __pdfY) {
  return {
    method: `GET`,
    headers: pdfParam879,
    signal: __pdfY.signal,
    mode: `cors`,
    credentials: pdfParam880 ? `include` : `same-origin`,
    redirect: `follow`,
  };
}
function pdfHelper49(pdfParam743) {
  return pdfParam743 instanceof Uint8Array
    ? pdfParam743.buffer
    : pdfParam743 instanceof ArrayBuffer
      ? pdfParam743
      : (pdfHelper4(`getArrayBuffer - unexpected data format: ${pdfParam743}`),
        new Uint8Array(pdfParam743).buffer);
}
var pdfValue101 = class {
    _responseOrigin = null;
    constructor(pdfParam700) {
      ((this.source = pdfParam700),
        (this.isHttp = /^https?:/i.test(pdfParam700.url)),
        (this.headers = pdfHelper42(this.isHttp, pdfParam700.httpHeaders)),
        (this._fullRequestReader = null),
        (this._rangeRequestReaders = []));
    }
    get _progressiveDataLength() {
      return this._fullRequestReader?._loaded ?? 0;
    }
    getFullReader() {
      return (
        pdfHelper6(
          !this._fullRequestReader,
          `PDFFetchStream.getFullReader can only be called once.`,
        ),
        (this._fullRequestReader = new pdfValue102(this)),
        this._fullRequestReader
      );
    }
    getRangeReader(pdfParam893, pdfParam894) {
      if (pdfParam894 <= this._progressiveDataLength) return null;
      let __pdfY = new pdfValue103(this, pdfParam893, pdfParam894);
      return (this._rangeRequestReaders.push(__pdfY), __pdfY);
    }
    cancelAllRequests(pdfParam962) {
      this._fullRequestReader?.cancel(pdfParam962);
      for (let pdfValue2098 of this._rangeRequestReaders.slice(0))
        pdfValue2098.cancel(pdfParam962);
    }
  },
  pdfValue102 = class {
    constructor(pdfParam40) {
      ((this._stream = pdfParam40),
        (this._reader = null),
        (this._loaded = 0),
        (this._filename = null));
      let pdfValue376 = pdfParam40.source;
      ((this._withCredentials = pdfValue376.withCredentials || !1),
        (this._contentLength = pdfValue376.length),
        (this._headersCapability = Promise.withResolvers()),
        (this._disableRange = pdfValue376.disableRange || !1),
        (this._rangeChunkSize = pdfValue376.rangeChunkSize),
        !this._rangeChunkSize &&
          !this._disableRange &&
          (this._disableRange = !0),
        (this._abortController = new AbortController()),
        (this._isStreamingSupported = !pdfValue376.disableStream),
        (this._isRangeSupported = !pdfValue376.disableRange));
      let __pdfY = new Headers(pdfParam40.headers),
        pdfValue377 = pdfValue376.url;
      (fetch(
        pdfValue377,
        pdfHelper48(__pdfY, this._withCredentials, this._abortController),
      )
        .then((value) => {
          if (
            ((pdfParam40._responseOrigin = pdfHelper43(value.url)),
            !pdfHelper47(value.status))
          )
            throw pdfHelper46(value.status, pdfValue377);
          ((this._reader = value.body.getReader()),
            this._headersCapability.resolve());
          let ___pdfY = value.headers,
            {
              allowRangeRequests: allowRangeRequests,
              suggestedLength: suggestedLength,
            } = pdfHelper44({
              responseHeaders: ___pdfY,
              isHttp: pdfParam40.isHttp,
              rangeChunkSize: this._rangeChunkSize,
              disableRange: this._disableRange,
            });
          ((this._isRangeSupported = allowRangeRequests),
            (this._contentLength = suggestedLength || this._contentLength),
            (this._filename = pdfHelper45(___pdfY)),
            !this._isStreamingSupported &&
              this._isRangeSupported &&
              this.cancel(new _pdfT(`Streaming is disabled.`)));
        })
        .catch(this._headersCapability.reject),
        (this.onProgress = null));
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      await this._headersCapability.promise;
      let { value: value, done: done } = await this._reader.read();
      return done
        ? {
            value: value,
            done: done,
          }
        : ((this._loaded += value.byteLength),
          this.onProgress?.({
            loaded: this._loaded,
            total: this._contentLength,
          }),
          {
            value: pdfHelper49(value),
            done: !1,
          });
    }
    cancel(pdfParam1359) {
      (this._reader?.cancel(pdfParam1359), this._abortController.abort());
    }
  },
  pdfValue103 = class {
    constructor(pdfParam158, pdfParam159, __pdfY) {
      ((this._stream = pdfParam158), (this._reader = null), (this._loaded = 0));
      let pdfValue584 = pdfParam158.source;
      ((this._withCredentials = pdfValue584.withCredentials || !1),
        (this._readCapability = Promise.withResolvers()),
        (this._isStreamingSupported = !pdfValue584.disableStream),
        (this._abortController = new AbortController()));
      let pdfValue585 = new Headers(pdfParam158.headers);
      pdfValue585.append(`Range`, `bytes=${pdfParam159}-${__pdfY - 1}`);
      let pdfValue586 = pdfValue584.url;
      (fetch(
        pdfValue586,
        pdfHelper48(pdfValue585, this._withCredentials, this._abortController),
      )
        .then((value) => {
          let ___pdfY = pdfHelper43(value.url);
          if (___pdfY !== pdfParam158._responseOrigin)
            throw Error(
              `Expected range response-origin "${___pdfY}" to match "${pdfParam158._responseOrigin}".`,
            );
          if (!pdfHelper47(value.status))
            throw pdfHelper46(value.status, pdfValue586);
          (this._readCapability.resolve(),
            (this._reader = value.body.getReader()));
        })
        .catch(this._readCapability.reject),
        (this.onProgress = null));
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      await this._readCapability.promise;
      let { value: value, done: done } = await this._reader.read();
      return done
        ? {
            value: value,
            done: done,
          }
        : ((this._loaded += value.byteLength),
          this.onProgress?.({
            loaded: this._loaded,
          }),
          {
            value: pdfHelper49(value),
            done: !1,
          });
    }
    cancel(pdfParam1360) {
      (this._reader?.cancel(pdfParam1360), this._abortController.abort());
    }
  },
  pdfValue104 = 200,
  pdfValue105 = 206;
function pdfHelper50(pdfParam1293) {
  let pdfValue1999 = pdfParam1293.response;
  return typeof pdfValue1999 == `string`
    ? pdfHelper9(pdfValue1999).buffer
    : pdfValue1999;
}
var $n = class {
    _responseOrigin = null;
    constructor({
      url: url,
      httpHeaders: httpHeaders,
      withCredentials: __pdfY,
    }) {
      ((this.url = url),
        (this.isHttp = /^https?:/i.test(url)),
        (this.headers = pdfHelper42(this.isHttp, httpHeaders)),
        (this.withCredentials = __pdfY || !1),
        (this.currXhrId = 0),
        (this.pendingRequests = Object.create(null)));
    }
    request(pdfParam168) {
      let pdfValue594 = new XMLHttpRequest(),
        __pdfY = this.currXhrId++,
        pdfValue595 = (this.pendingRequests[__pdfY] = {
          xhr: pdfValue594,
        });
      (pdfValue594.open(`GET`, this.url),
        (pdfValue594.withCredentials = this.withCredentials));
      for (let [pdfValue2143, ___pdfY] of this.headers)
        pdfValue594.setRequestHeader(pdfValue2143, ___pdfY);
      return (
        this.isHttp && `begin` in pdfParam168 && `end` in pdfParam168
          ? (pdfValue594.setRequestHeader(
              `Range`,
              `bytes=${pdfParam168.begin}-${pdfParam168.end - 1}`,
            ),
            (pdfValue595.expectedStatus = pdfValue105))
          : (pdfValue595.expectedStatus = pdfValue104),
        (pdfValue594.responseType = `arraybuffer`),
        pdfHelper6(
          pdfParam168.onError,
          "Expected `onError` callback to be provided.",
        ),
        (pdfValue594.onerror = () => {
          pdfParam168.onError(pdfValue594.status);
        }),
        (pdfValue594.onreadystatechange = this.onStateChange.bind(
          this,
          __pdfY,
        )),
        (pdfValue594.onprogress = this.onProgress.bind(this, __pdfY)),
        (pdfValue595.onHeadersReceived = pdfParam168.onHeadersReceived),
        (pdfValue595.onDone = pdfParam168.onDone),
        (pdfValue595.onError = pdfParam168.onError),
        (pdfValue595.onProgress = pdfParam168.onProgress),
        pdfValue594.send(null),
        __pdfY
      );
    }
    onProgress(pdfParam1341, pdfParam1342) {
      let __pdfY = this.pendingRequests[pdfParam1341];
      __pdfY && __pdfY.onProgress?.(pdfParam1342);
    }
    onStateChange(pdfParam169, pdfParam170) {
      let __pdfY = this.pendingRequests[pdfParam169];
      if (!__pdfY) return;
      let pdfValue604 = __pdfY.xhr;
      if (
        (pdfValue604.readyState >= 2 &&
          __pdfY.onHeadersReceived &&
          (__pdfY.onHeadersReceived(), delete __pdfY.onHeadersReceived),
        pdfValue604.readyState !== 4 || !(pdfParam169 in this.pendingRequests))
      )
        return;
      if (
        (delete this.pendingRequests[pdfParam169],
        pdfValue604.status === 0 && this.isHttp)
      ) {
        __pdfY.onError(pdfValue604.status);
        return;
      }
      let pdfValue605 = pdfValue604.status || pdfValue104;
      if (
        !(
          pdfValue605 === pdfValue104 && __pdfY.expectedStatus === pdfValue105
        ) &&
        pdfValue605 !== __pdfY.expectedStatus
      ) {
        __pdfY.onError(pdfValue604.status);
        return;
      }
      let pdfValue606 = pdfHelper50(pdfValue604);
      if (pdfValue605 === pdfValue105) {
        let pdfValue1487 = pdfValue604.getResponseHeader(`Content-Range`),
          pdfValue1488 = /bytes (\d+)-(\d+)\/(\d+)/.exec(pdfValue1487);
        pdfValue1488
          ? __pdfY.onDone({
              begin: parseInt(pdfValue1488[1], 10),
              chunk: pdfValue606,
            })
          : (pdfHelper4(`Missing or invalid "Content-Range" header.`),
            __pdfY.onError(0));
      } else
        pdfValue606
          ? __pdfY.onDone({
              begin: 0,
              chunk: pdfValue606,
            })
          : __pdfY.onError(pdfValue604.status);
    }
    getRequestXhr(pdfParam1509) {
      return this.pendingRequests[pdfParam1509].xhr;
    }
    isPendingRequest(pdfParam1500) {
      return pdfParam1500 in this.pendingRequests;
    }
    abortRequest(pdfParam1156) {
      let pdfValue1895 = this.pendingRequests[pdfParam1156].xhr;
      (delete this.pendingRequests[pdfParam1156], pdfValue1895.abort());
    }
  },
  pdfValue106 = class {
    constructor(pdfParam782) {
      ((this._source = pdfParam782),
        (this._manager = new $n(pdfParam782)),
        (this._rangeChunkSize = pdfParam782.rangeChunkSize),
        (this._fullRequestReader = null),
        (this._rangeRequestReaders = []));
    }
    _onRangeRequestReaderClosed(pdfParam949) {
      let pdfValue1743 = this._rangeRequestReaders.indexOf(pdfParam949);
      pdfValue1743 >= 0 && this._rangeRequestReaders.splice(pdfValue1743, 1);
    }
    getFullReader() {
      return (
        pdfHelper6(
          !this._fullRequestReader,
          `PDFNetworkStream.getFullReader can only be called once.`,
        ),
        (this._fullRequestReader = new pdfValue107(
          this._manager,
          this._source,
        )),
        this._fullRequestReader
      );
    }
    getRangeReader(pdfParam783, pdfParam784) {
      let __pdfY = new pdfValue108(this._manager, pdfParam783, pdfParam784);
      return (
        (__pdfY.onClosed = this._onRangeRequestReaderClosed.bind(this)),
        this._rangeRequestReaders.push(__pdfY),
        __pdfY
      );
    }
    cancelAllRequests(pdfParam963) {
      this._fullRequestReader?.cancel(pdfParam963);
      for (let pdfValue2099 of this._rangeRequestReaders.slice(0))
        pdfValue2099.cancel(pdfParam963);
    }
  },
  pdfValue107 = class {
    constructor(pdfParam185, pdfParam186) {
      ((this._manager = pdfParam185),
        (this._url = pdfParam186.url),
        (this._fullRequestId = pdfParam185.request({
          onHeadersReceived: this._onHeadersReceived.bind(this),
          onDone: this._onDone.bind(this),
          onError: this._onError.bind(this),
          onProgress: this._onProgress.bind(this),
        })),
        (this._headersCapability = Promise.withResolvers()),
        (this._disableRange = pdfParam186.disableRange || !1),
        (this._contentLength = pdfParam186.length),
        (this._rangeChunkSize = pdfParam186.rangeChunkSize),
        !this._rangeChunkSize &&
          !this._disableRange &&
          (this._disableRange = !0),
        (this._isStreamingSupported = !1),
        (this._isRangeSupported = !1),
        (this._cachedChunks = []),
        (this._requests = []),
        (this._done = !1),
        (this._storedError = void 0),
        (this._filename = null),
        (this.onProgress = null));
    }
    _onHeadersReceived() {
      let pdfValue644 = this._fullRequestId,
        pdfValue645 = this._manager.getRequestXhr(pdfValue644);
      this._manager._responseOrigin = pdfHelper43(pdfValue645.responseURL);
      let __pdfY = pdfValue645.getAllResponseHeaders(),
        pdfValue646 = new Headers(
          __pdfY
            ? __pdfY
                .trimStart()
                .replace(/[^\S ]+$/, ``)
                .split(/[\r\n]+/)
                .map((item) => {
                  let [pdfValue2137, ...___pdfY] = item.split(`: `);
                  return [pdfValue2137, ___pdfY.join(`: `)];
                })
            : [],
        ),
        {
          allowRangeRequests: allowRangeRequests,
          suggestedLength: suggestedLength,
        } = pdfHelper44({
          responseHeaders: pdfValue646,
          isHttp: this._manager.isHttp,
          rangeChunkSize: this._rangeChunkSize,
          disableRange: this._disableRange,
        });
      (allowRangeRequests && (this._isRangeSupported = !0),
        (this._contentLength = suggestedLength || this._contentLength),
        (this._filename = pdfHelper45(pdfValue646)),
        this._isRangeSupported && this._manager.abortRequest(pdfValue644),
        this._headersCapability.resolve());
    }
    _onDone(pdfParam489) {
      if (
        (pdfParam489 &&
          (this._requests.length > 0
            ? this._requests.shift().resolve({
                value: pdfParam489.chunk,
                done: !1,
              })
            : this._cachedChunks.push(pdfParam489.chunk)),
        (this._done = !0),
        !(this._cachedChunks.length > 0))
      ) {
        for (let pdfValue2076 of this._requests)
          pdfValue2076.resolve({
            value: void 0,
            done: !0,
          });
        this._requests.length = 0;
      }
    }
    _onError(pdfParam592) {
      ((this._storedError = pdfHelper46(pdfParam592, this._url)),
        this._headersCapability.reject(this._storedError));
      for (let pdfValue2127 of this._requests)
        pdfValue2127.reject(this._storedError);
      ((this._requests.length = 0), (this._cachedChunks.length = 0));
    }
    _onProgress(pdfParam1050) {
      this.onProgress?.({
        loaded: pdfParam1050.loaded,
        total: pdfParam1050.lengthComputable
          ? pdfParam1050.total
          : this._contentLength,
      });
    }
    get filename() {
      return this._filename;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    get contentLength() {
      return this._contentLength;
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    async read() {
      if ((await this._headersCapability.promise, this._storedError))
        throw this._storedError;
      if (this._cachedChunks.length > 0)
        return {
          value: this._cachedChunks.shift(),
          done: !1,
        };
      if (this._done)
        return {
          value: void 0,
          done: !0,
        };
      let pdfValue1179 = Promise.withResolvers();
      return (this._requests.push(pdfValue1179), pdfValue1179.promise);
    }
    cancel(pdfParam464) {
      ((this._done = !0), this._headersCapability.reject(pdfParam464));
      for (let pdfValue2077 of this._requests)
        pdfValue2077.resolve({
          value: void 0,
          done: !0,
        });
      ((this._requests.length = 0),
        this._manager.isPendingRequest(this._fullRequestId) &&
          this._manager.abortRequest(this._fullRequestId),
        (this._fullRequestReader = null));
    }
  },
  pdfValue108 = class {
    constructor(pdfParam340, pdfParam341, __pdfY) {
      ((this._manager = pdfParam340),
        (this._url = pdfParam340.url),
        (this._requestId = pdfParam340.request({
          begin: pdfParam341,
          end: __pdfY,
          onHeadersReceived: this._onHeadersReceived.bind(this),
          onDone: this._onDone.bind(this),
          onError: this._onError.bind(this),
          onProgress: this._onProgress.bind(this),
        })),
        (this._requests = []),
        (this._queuedChunk = null),
        (this._done = !1),
        (this._storedError = void 0),
        (this.onProgress = null),
        (this.onClosed = null));
    }
    _onHeadersReceived() {
      let pdfValue1302 = pdfHelper43(
        this._manager.getRequestXhr(this._requestId)?.responseURL,
      );
      pdfValue1302 !== this._manager._responseOrigin &&
        ((this._storedError = Error(
          `Expected range response-origin "${pdfValue1302}" to match "${this._manager._responseOrigin}".`,
        )),
        this._onError(0));
    }
    _close() {
      this.onClosed?.(this);
    }
    _onDone(pdfParam537) {
      let pdfValue1358 = pdfParam537.chunk;
      (this._requests.length > 0
        ? this._requests.shift().resolve({
            value: pdfValue1358,
            done: !1,
          })
        : (this._queuedChunk = pdfValue1358),
        (this._done = !0));
      for (let pdfValue2078 of this._requests)
        pdfValue2078.resolve({
          value: void 0,
          done: !0,
        });
      ((this._requests.length = 0), this._close());
    }
    _onError(pdfParam773) {
      this._storedError ??= pdfHelper46(pdfParam773, this._url);
      for (let pdfValue2128 of this._requests)
        pdfValue2128.reject(this._storedError);
      ((this._requests.length = 0), (this._queuedChunk = null));
    }
    _onProgress(pdfParam1247) {
      this.isStreamingSupported ||
        this.onProgress?.({
          loaded: pdfParam1247.loaded,
        });
    }
    get isStreamingSupported() {
      return !1;
    }
    async read() {
      if (this._storedError) throw this._storedError;
      if (this._queuedChunk !== null) {
        let pdfValue2000 = this._queuedChunk;
        return (
          (this._queuedChunk = null),
          {
            value: pdfValue2000,
            done: !1,
          }
        );
      }
      if (this._done)
        return {
          value: void 0,
          done: !0,
        };
      let pdfValue1225 = Promise.withResolvers();
      return (this._requests.push(pdfValue1225), pdfValue1225.promise);
    }
    cancel(pdfParam571) {
      this._done = !0;
      for (let pdfValue2079 of this._requests)
        pdfValue2079.resolve({
          value: void 0,
          done: !0,
        });
      ((this._requests.length = 0),
        this._manager.isPendingRequest(this._requestId) &&
          this._manager.abortRequest(this._requestId),
        this._close());
    }
  },
  pdfValue109 = /^[a-z][a-z0-9\-+.]+:/i;
function pdfHelper51(pdfParam939) {
  if (pdfValue109.test(pdfParam939)) return new URL(pdfParam939);
  let pdfValue1737 = process.getBuiltinModule(`url`);
  return new URL(pdfValue1737.pathToFileURL(pdfParam939));
}
var pdfValue110 = class {
    constructor(pdfParam651) {
      ((this.source = pdfParam651),
        (this.url = pdfHelper51(pdfParam651.url)),
        pdfHelper6(
          this.url.protocol === `file:`,
          `PDFNodeStream only supports file:// URLs.`,
        ),
        (this._fullRequestReader = null),
        (this._rangeRequestReaders = []));
    }
    get _progressiveDataLength() {
      return this._fullRequestReader?._loaded ?? 0;
    }
    getFullReader() {
      return (
        pdfHelper6(
          !this._fullRequestReader,
          `PDFNodeStream.getFullReader can only be called once.`,
        ),
        (this._fullRequestReader = new or(this)),
        this._fullRequestReader
      );
    }
    getRangeReader(pdfParam895, pdfParam896) {
      if (pdfParam896 <= this._progressiveDataLength) return null;
      let __pdfY = new pdfValue111(this, pdfParam895, pdfParam896);
      return (this._rangeRequestReaders.push(__pdfY), __pdfY);
    }
    cancelAllRequests(pdfParam964) {
      this._fullRequestReader?.cancel(pdfParam964);
      for (let pdfValue2100 of this._rangeRequestReaders.slice(0))
        pdfValue2100.cancel(pdfParam964);
    }
  },
  or = class {
    constructor(pdfParam123) {
      ((this._url = pdfParam123.url),
        (this._done = !1),
        (this._storedError = null),
        (this.onProgress = null));
      let pdfValue511 = pdfParam123.source;
      ((this._contentLength = pdfValue511.length),
        (this._loaded = 0),
        (this._filename = null),
        (this._disableRange = pdfValue511.disableRange || !1),
        (this._rangeChunkSize = pdfValue511.rangeChunkSize),
        !this._rangeChunkSize &&
          !this._disableRange &&
          (this._disableRange = !0),
        (this._isStreamingSupported = !pdfValue511.disableStream),
        (this._isRangeSupported = !pdfValue511.disableRange),
        (this._readableStream = null),
        (this._readCapability = Promise.withResolvers()),
        (this._headersCapability = Promise.withResolvers()));
      let __pdfY = process.getBuiltinModule(`fs`);
      __pdfY.promises.lstat(this._url).then(
        (value) => {
          ((this._contentLength = value.size),
            this._setReadableStream(__pdfY.createReadStream(this._url)),
            this._headersCapability.resolve());
        },
        (event) => {
          (event.code === `ENOENT` && (event = pdfHelper46(0, this._url.href)),
            (this._storedError = event),
            this._headersCapability.reject(event));
        },
      );
    }
    get headersReady() {
      return this._headersCapability.promise;
    }
    get filename() {
      return this._filename;
    }
    get contentLength() {
      return this._contentLength;
    }
    get isRangeSupported() {
      return this._isRangeSupported;
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      if ((await this._readCapability.promise, this._done))
        return {
          value: void 0,
          done: !0,
        };
      if (this._storedError) throw this._storedError;
      let pdfValue984 = this._readableStream.read();
      return pdfValue984 === null
        ? ((this._readCapability = Promise.withResolvers()), this.read())
        : ((this._loaded += pdfValue984.length),
          this.onProgress?.({
            loaded: this._loaded,
            total: this._contentLength,
          }),
          {
            value: new Uint8Array(pdfValue984).buffer,
            done: !1,
          });
    }
    cancel(pdfParam1165) {
      if (!this._readableStream) {
        this._error(pdfParam1165);
        return;
      }
      this._readableStream.destroy(pdfParam1165);
    }
    _error(pdfParam1398) {
      ((this._storedError = pdfParam1398), this._readCapability.resolve());
    }
    _setReadableStream(pdfParam339) {
      ((this._readableStream = pdfParam339),
        pdfParam339.on(`readable`, () => {
          this._readCapability.resolve();
        }),
        pdfParam339.on(`end`, () => {
          (pdfParam339.destroy(),
            (this._done = !0),
            this._readCapability.resolve());
        }),
        pdfParam339.on(`error`, (pdfParam1725) => {
          this._error(pdfParam1725);
        }),
        !this._isStreamingSupported &&
          this._isRangeSupported &&
          this._error(new _pdfT(`streaming is disabled`)),
        this._storedError && this._readableStream.destroy(this._storedError));
    }
  },
  pdfValue111 = class {
    constructor(pdfParam364, pdfParam365, __pdfY) {
      ((this._url = pdfParam364.url),
        (this._done = !1),
        (this._storedError = null),
        (this.onProgress = null),
        (this._loaded = 0),
        (this._readableStream = null),
        (this._readCapability = Promise.withResolvers()),
        (this._isStreamingSupported = !pdfParam364.source.disableStream));
      let pdfValue1056 = process.getBuiltinModule(`fs`);
      this._setReadableStream(
        pdfValue1056.createReadStream(this._url, {
          start: pdfParam365,
          end: __pdfY - 1,
        }),
      );
    }
    get isStreamingSupported() {
      return this._isStreamingSupported;
    }
    async read() {
      if ((await this._readCapability.promise, this._done))
        return {
          value: void 0,
          done: !0,
        };
      if (this._storedError) throw this._storedError;
      let pdfValue1035 = this._readableStream.read();
      return pdfValue1035 === null
        ? ((this._readCapability = Promise.withResolvers()), this.read())
        : ((this._loaded += pdfValue1035.length),
          this.onProgress?.({
            loaded: this._loaded,
          }),
          {
            value: new Uint8Array(pdfValue1035).buffer,
            done: !1,
          });
    }
    cancel(pdfParam1166) {
      if (!this._readableStream) {
        this._error(pdfParam1166);
        return;
      }
      this._readableStream.destroy(pdfParam1166);
    }
    _error(pdfParam1399) {
      ((this._storedError = pdfParam1399), this._readCapability.resolve());
    }
    _setReadableStream(pdfParam463) {
      ((this._readableStream = pdfParam463),
        pdfParam463.on(`readable`, () => {
          this._readCapability.resolve();
        }),
        pdfParam463.on(`end`, () => {
          (pdfParam463.destroy(),
            (this._done = !0),
            this._readCapability.resolve());
        }),
        pdfParam463.on(`error`, (pdfParam1726) => {
          this._error(pdfParam1726);
        }),
        this._storedError && this._readableStream.destroy(this._storedError));
    }
  },
  pdfValue112 = Symbol(`INITIAL_DATA`),
  pdfValue113 = class {
    #e = Object.create(null);
    #t(pdfParam1371) {
      return (this.#e[pdfParam1371] ||= {
        ...Promise.withResolvers(),
        data: pdfValue112,
      });
    }
    get(pdfParam616, pdfParam617 = null) {
      if (pdfParam617) {
        let ___pdfY = this.#t(pdfParam616);
        return (___pdfY.promise.then(() => pdfParam617(___pdfY.data)), null);
      }
      let __pdfY = this.#e[pdfParam616];
      if (!__pdfY || __pdfY.data === pdfValue112)
        throw Error(
          `Requesting object that isn't resolved yet ${pdfParam616}.`,
        );
      return __pdfY.data;
    }
    has(pdfParam1552) {
      let pdfValue2173 = this.#e[pdfParam1552];
      return !!pdfValue2173 && pdfValue2173.data !== pdfValue112;
    }
    delete(pdfParam1280) {
      let pdfValue1992 = this.#e[pdfParam1280];
      return !pdfValue1992 || pdfValue1992.data === pdfValue112
        ? !1
        : (delete this.#e[pdfParam1280], !0);
    }
    resolve(pdfParam1459, pdfParam1460 = null) {
      let __pdfY = this.#t(pdfParam1459);
      ((__pdfY.data = pdfParam1460), __pdfY.resolve());
    }
    clear() {
      for (let pdfValue2061 in this.#e) {
        let { data: data } = this.#e[pdfValue2061];
        data?.bitmap?.close();
      }
      this.#e = Object.create(null);
    }
    *[Symbol.iterator]() {
      for (let pdfValue2051 in this.#e) {
        let { data: data } = this.#e[pdfValue2051];
        data !== pdfValue112 && (yield [pdfValue2051, data]);
      }
    }
  },
  pdfValue114 = 1e5,
  pdfValue115 = 30,
  pdfO = class PdfClass9 {
    #e = Promise.withResolvers();
    #t = null;
    #n = !1;
    #r = !!globalThis.FontInspector?.enabled;
    #i = null;
    #a = null;
    #o = 0;
    #s = 0;
    #c = null;
    #l = null;
    #u = 0;
    #d = 0;
    #f = Object.create(null);
    #p = [];
    #m = null;
    #h = [];
    #g = new WeakMap();
    #_ = null;
    static #v = new Map();
    static #y = new Map();
    static #b = new WeakMap();
    static #x = null;
    static #S = new Set();
    constructor({
      textContentSource: textContentSource,
      container: __pdfY,
      viewport: viewport,
    }) {
      if (textContentSource instanceof ReadableStream)
        this.#m = textContentSource;
      else if (typeof textContentSource == `object`)
        this.#m = new ReadableStream({
          start(pdfParam1678) {
            (pdfParam1678.enqueue(textContentSource), pdfParam1678.close());
          },
        });
      else throw Error(`No "textContentSource" parameter specified.`);
      ((this.#t = this.#l = __pdfY),
        (this.#d = viewport.scale * pdfUnderscore.pixelRatio),
        (this.#u = viewport.rotation),
        (this.#a = {
          div: null,
          properties: null,
          ctx: null,
        }));
      let {
        pageWidth: pageWidth,
        pageHeight: pageHeight,
        pageX: pageX,
        pageY: pageY,
      } = viewport.rawDims;
      ((this.#_ = [1, 0, 0, -1, -pageX, pageY + pageHeight]),
        (this.#s = pageWidth),
        (this.#o = pageHeight),
        PdfClass9.#O(),
        _pdfZ(__pdfY, viewport),
        this.#e.promise
          .finally(() => {
            (PdfClass9.#S.delete(this), (this.#a = null), (this.#f = null));
          })
          .catch(() => {}));
    }
    static get fontFamilyMap() {
      let { isWindows: isWindows, isFirefox: isFirefox } = pdfTt.platform;
      return pdfQ(
        this,
        `fontFamilyMap`,
        new Map([
          [
            `sans-serif`,
            `${isWindows && isFirefox ? `Calibri, ` : ``}sans-serif`,
          ],
          [
            `monospace`,
            `${isWindows && isFirefox ? `Lucida Console, ` : ``}monospace`,
          ],
        ]),
      );
    }
    render() {
      let pdfValue1311 = () => {
        this.#c.read().then(({ value: value, done: __pdfY }) => {
          if (__pdfY) {
            this.#e.resolve();
            return;
          }
          ((this.#i ??= value.lang),
            Object.assign(this.#f, value.styles),
            this.#C(value.items),
            pdfValue1311());
        }, this.#e.reject);
      };
      return (
        (this.#c = this.#m.getReader()),
        PdfClass9.#S.add(this),
        pdfValue1311(),
        this.#e.promise
      );
    }
    update({ viewport: viewport, onBefore: __pdfY = null }) {
      let pdfValue1181 = viewport.scale * pdfUnderscore.pixelRatio,
        pdfValue1182 = viewport.rotation;
      if (
        (pdfValue1182 !== this.#u &&
          (__pdfY?.(),
          (this.#u = pdfValue1182),
          _pdfZ(this.#l, {
            rotation: pdfValue1182,
          })),
        pdfValue1181 !== this.#d)
      ) {
        (__pdfY?.(), (this.#d = pdfValue1181));
        let pdfValue1664 = {
          div: null,
          properties: null,
          ctx: PdfClass9.#E(this.#i),
        };
        for (let pdfValue2043 of this.#h)
          ((pdfValue1664.properties = this.#g.get(pdfValue2043)),
            (pdfValue1664.div = pdfValue2043),
            this.#T(pdfValue1664));
      }
    }
    cancel() {
      let pdfValue1768 = new _pdfT(`TextLayer task cancelled.`);
      (this.#c?.cancel(pdfValue1768).catch(() => {}),
        (this.#c = null),
        this.#e.reject(pdfValue1768));
    }
    get textDivs() {
      return this.#h;
    }
    get textContentItemsStr() {
      return this.#p;
    }
    #C(pdfParam245) {
      if (this.#n) return;
      this.#a.ctx ??= PdfClass9.#E(this.#i);
      let __pdfY = this.#h,
        pdfValue768 = this.#p;
      for (let pdfValue866 of pdfParam245) {
        if (__pdfY.length > pdfValue114) {
          (pdfHelper4(`Ignoring additional textDivs for performance reasons.`),
            (this.#n = !0));
          return;
        }
        if (pdfValue866.str === void 0) {
          if (
            pdfValue866.type === `beginMarkedContentProps` ||
            pdfValue866.type === `beginMarkedContent`
          ) {
            let pdfValue1603 = this.#t;
            ((this.#t = document.createElement(`span`)),
              this.#t.classList.add(`markedContent`),
              pdfValue866.id && this.#t.setAttribute(`id`, `${pdfValue866.id}`),
              pdfValue1603.append(this.#t));
          } else
            pdfValue866.type === `endMarkedContent` &&
              (this.#t = this.#t.parentNode);
          continue;
        }
        (pdfValue768.push(pdfValue866.str), this.#w(pdfValue866));
      }
    }
    #w(pdfParam27) {
      let __pdfY = document.createElement(`span`),
        pdfValue327 = {
          angle: 0,
          canvasWidth: 0,
          hasText: pdfParam27.str !== ``,
          hasEOL: pdfParam27.hasEOL,
          fontSize: 0,
        };
      this.#h.push(__pdfY);
      let pdfValue328 = pdfA.transform(this.#_, pdfParam27.transform),
        pdfValue329 = Math.atan2(pdfValue328[1], pdfValue328[0]),
        pdfValue330 = this.#f[pdfParam27.fontName];
      pdfValue330.vertical && (pdfValue329 += Math.PI / 2);
      let pdfValue331 =
        (this.#r && pdfValue330.fontSubstitution) || pdfValue330.fontFamily;
      pdfValue331 = PdfClass9.fontFamilyMap.get(pdfValue331) || pdfValue331;
      let __pdfS = Math.hypot(pdfValue328[2], pdfValue328[3]),
        pdfValue332 = __pdfS * PdfClass9.#k(pdfValue331, pdfValue330, this.#i),
        __pdfI,
        __pdfR;
      pdfValue329 === 0
        ? ((__pdfI = pdfValue328[4]), (__pdfR = pdfValue328[5] - pdfValue332))
        : ((__pdfI = pdfValue328[4] + pdfValue332 * Math.sin(pdfValue329)),
          (__pdfR = pdfValue328[5] - pdfValue332 * Math.cos(pdfValue329)));
      let ___pdfS = `calc(var(--total-scale-factor) *`,
        pdfValue333 = __pdfY.style;
      (this.#t === this.#l
        ? ((pdfValue333.left = `${((100 * __pdfI) / this.#s).toFixed(2)}%`),
          (pdfValue333.top = `${((100 * __pdfR) / this.#o).toFixed(2)}%`))
        : ((pdfValue333.left = `${___pdfS}${__pdfI.toFixed(2)}px)`),
          (pdfValue333.top = `${___pdfS}${__pdfR.toFixed(2)}px)`)),
        (pdfValue333.fontSize = `${___pdfS}${(PdfClass9.#x * __pdfS).toFixed(2)}px)`),
        (pdfValue333.fontFamily = pdfValue331),
        (pdfValue327.fontSize = __pdfS),
        __pdfY.setAttribute(`role`, `presentation`),
        (__pdfY.textContent = pdfParam27.str),
        (__pdfY.dir = pdfParam27.dir),
        this.#r &&
          (__pdfY.dataset.fontName =
            pdfValue330.fontSubstitutionLoadedName || pdfParam27.fontName),
        pdfValue329 !== 0 &&
          (pdfValue327.angle = pdfValue329 * (180 / Math.PI)));
      let _pdfNt = !1;
      if (pdfParam27.str.length > 1) _pdfNt = !0;
      else if (
        pdfParam27.str !== ` ` &&
        pdfParam27.transform[0] !== pdfParam27.transform[3]
      ) {
        let pdfValue1811 = Math.abs(pdfParam27.transform[0]),
          ___pdfY = Math.abs(pdfParam27.transform[3]);
        pdfValue1811 !== ___pdfY &&
          Math.max(pdfValue1811, ___pdfY) / Math.min(pdfValue1811, ___pdfY) >
            1.5 &&
          (_pdfNt = !0);
      }
      if (
        (_pdfNt &&
          (pdfValue327.canvasWidth = pdfValue330.vertical
            ? pdfParam27.height
            : pdfParam27.width),
        this.#g.set(__pdfY, pdfValue327),
        (this.#a.div = __pdfY),
        (this.#a.properties = pdfValue327),
        this.#T(this.#a),
        pdfValue327.hasText && this.#t.append(__pdfY),
        pdfValue327.hasEOL)
      ) {
        let pdfValue1889 = document.createElement(`br`);
        (pdfValue1889.setAttribute(`role`, `presentation`),
          this.#t.append(pdfValue1889));
      }
    }
    #T(pdfParam358) {
      let { div: __pdfY, properties: properties, ctx: ctx } = pdfParam358,
        { style: style } = __pdfY,
        pdfValue1050 = ``;
      if (
        (PdfClass9.#x > 1 && (pdfValue1050 = `scale(${1 / PdfClass9.#x})`),
        properties.canvasWidth !== 0 && properties.hasText)
      ) {
        let { fontFamily: fontFamily } = style,
          { canvasWidth: canvasWidth, fontSize: __pdfS } = properties;
        PdfClass9.#D(ctx, __pdfS * this.#d, fontFamily);
        let { width: width } = ctx.measureText(__pdfY.textContent);
        width > 0 &&
          (pdfValue1050 = `scaleX(${(canvasWidth * this.#d) / width}) ${pdfValue1050}`);
      }
      (properties.angle !== 0 &&
        (pdfValue1050 = `rotate(${properties.angle}deg) ${pdfValue1050}`),
        pdfValue1050.length > 0 && (style.transform = pdfValue1050));
    }
    static cleanup() {
      if (!(this.#S.size > 0)) {
        this.#v.clear();
        for (let { canvas: canvas } of this.#y.values()) canvas.remove();
        this.#y.clear();
      }
    }
    static #E(pdfParam474 = null) {
      let pdfValue1236 = this.#y.get((pdfParam474 ||= ``));
      if (!pdfValue1236) {
        let __pdfY = document.createElement(`canvas`);
        ((__pdfY.className = `hiddenCanvasElement`),
          (__pdfY.lang = pdfParam474),
          document.body.append(__pdfY),
          (pdfValue1236 = __pdfY.getContext(`2d`, {
            alpha: !1,
            willReadFrequently: !0,
          })),
          this.#y.set(pdfParam474, pdfValue1236),
          this.#b.set(pdfValue1236, {
            size: 0,
            family: ``,
          }));
      }
      return pdfValue1236;
    }
    static #D(pdfParam1032, pdfParam1033, __pdfY) {
      let pdfValue1812 = this.#b.get(pdfParam1032);
      (pdfParam1033 === pdfValue1812.size && __pdfY === pdfValue1812.family) ||
        ((pdfParam1032.font = `${pdfParam1033}px ${__pdfY}`),
        (pdfValue1812.size = pdfParam1033),
        (pdfValue1812.family = __pdfY));
    }
    static #O() {
      if (this.#x !== null) return;
      let pdfValue1297 = document.createElement(`div`);
      ((pdfValue1297.style.opacity = 0),
        (pdfValue1297.style.lineHeight = 1),
        (pdfValue1297.style.fontSize = `1px`),
        (pdfValue1297.style.position = `absolute`),
        (pdfValue1297.textContent = `X`),
        document.body.append(pdfValue1297),
        (this.#x = pdfValue1297.getBoundingClientRect().height),
        pdfValue1297.remove());
    }
    static #k(pdfParam270, pdfParam271, __pdfY) {
      let pdfValue823 = this.#v.get(pdfParam270);
      if (pdfValue823) return pdfValue823;
      let pdfValue824 = this.#E(__pdfY);
      ((pdfValue824.canvas.width = pdfValue824.canvas.height = pdfValue115),
        this.#D(pdfValue824, pdfValue115, pdfParam270));
      let pdfValue825 = pdfValue824.measureText(``),
        pdfValue826 = pdfValue825.fontBoundingBoxAscent,
        pdfValue827 = Math.abs(pdfValue825.fontBoundingBoxDescent);
      pdfValue824.canvas.width = pdfValue824.canvas.height = 0;
      let __pdfS = 0.8;
      return (
        pdfValue826
          ? (__pdfS = pdfValue826 / (pdfValue826 + pdfValue827))
          : (pdfTt.platform.isFirefox &&
              pdfHelper4(
                "Enable the `dom.textMetrics.fontBoundingBox.enabled` preference in `about:config` to improve TextLayer rendering.",
              ),
            pdfParam271.ascent
              ? (__pdfS = pdfParam271.ascent)
              : pdfParam271.descent && (__pdfS = 1 + pdfParam271.descent)),
        this.#v.set(pdfParam270, __pdfS),
        __pdfS
      );
    }
  },
  pdfValue116 = 100;
function _pdfR(pdfParam1 = {}) {
  typeof pdfParam1 == `string` || pdfParam1 instanceof URL
    ? (pdfParam1 = {
        url: pdfParam1,
      })
    : (pdfParam1 instanceof ArrayBuffer || ArrayBuffer.isView(pdfParam1)) &&
      (pdfParam1 = {
        data: pdfParam1,
      });
  let pdfValue190 = new pdfValue117(),
    { docId: __pdfY } = pdfValue190,
    pdfValue191 = pdfParam1.url ? pdfHelper26(pdfParam1.url) : null,
    pdfValue192 = pdfParam1.data ? pdfHelper27(pdfParam1.data) : null,
    pdfValue193 = pdfParam1.httpHeaders || null,
    pdfValue194 = pdfParam1.withCredentials === !0,
    __pdfS = pdfParam1.password ?? null,
    pdfValue195 = pdfParam1.range instanceof _pdfV ? pdfParam1.range : null,
    __pdfI =
      Number.isInteger(pdfParam1.rangeChunkSize) && pdfParam1.rangeChunkSize > 0
        ? pdfParam1.rangeChunkSize
        : 2 ** 16,
    __pdfR = pdfParam1.worker instanceof _pdfB ? pdfParam1.worker : null,
    ___pdfS = pdfParam1.verbosity,
    pdfValue196 =
      typeof pdfParam1.docBaseUrl == `string` && !_pdfW(pdfParam1.docBaseUrl)
        ? pdfParam1.docBaseUrl
        : null,
    _pdfNt = _t(pdfParam1.cMapUrl),
    __pdfC = pdfParam1.cMapPacked !== !1,
    pdfValue197 =
      pdfParam1.CMapReaderFactory || (pdfValue2 ? pdfValue59 : pdfValue50),
    __pdfJ = _t(pdfParam1.iccUrl),
    __pdfG = _t(pdfParam1.standardFontDataUrl),
    pdfValue198 =
      pdfParam1.StandardFontDataFactory ||
      (pdfValue2 ? pdfValue60 : pdfValue54),
    __pdfX = _t(pdfParam1.wasmUrl),
    pdfValue199 =
      pdfParam1.WasmFactory || (pdfValue2 ? pdfValue61 : pdfValue56),
    pdfValue200 = pdfParam1.stopAtErrors !== !0,
    pdfValue201 =
      Number.isInteger(pdfParam1.maxImageSize) && pdfParam1.maxImageSize > -1
        ? pdfParam1.maxImageSize
        : -1,
    pdfValue202 = pdfParam1.isEvalSupported !== !1,
    pdfValue203 =
      typeof pdfParam1.isOffscreenCanvasSupported == `boolean`
        ? pdfParam1.isOffscreenCanvasSupported
        : !pdfValue2,
    pdfValue204 =
      typeof pdfParam1.isImageDecoderSupported == `boolean`
        ? pdfParam1.isImageDecoderSupported
        : !pdfValue2 && (pdfTt.platform.isFirefox || !globalThis.chrome),
    pdfValue205 = Number.isInteger(pdfParam1.canvasMaxAreaInBytes)
      ? pdfParam1.canvasMaxAreaInBytes
      : -1,
    __pdfF =
      typeof pdfParam1.disableFontFace == `boolean`
        ? pdfParam1.disableFontFace
        : pdfValue2,
    _pdfEt = pdfParam1.fontExtraProperties === !0,
    __pdfQ = pdfParam1.enableXfa === !0,
    pdfValue206 = pdfParam1.ownerDocument || globalThis.document,
    pdfValue207 = pdfParam1.disableRange === !0,
    pdfValue208 = pdfParam1.disableStream === !0,
    __pdfM = pdfParam1.disableAutoFetch === !0,
    __pdfT = pdfParam1.pdfBug === !0,
    pdfValue209 =
      pdfParam1.CanvasFactory || (pdfValue2 ? pdfValue58 : pdfValue48),
    ___pdfT = pdfParam1.FilterFactory || (pdfValue2 ? pdfValue57 : pdfValue52),
    pdfValue210 = pdfParam1.enableHWA === !0,
    pdfValue211 = pdfParam1.useWasm !== !1,
    pdfValue212 = pdfValue195 ? pdfValue195.length : (pdfParam1.length ?? NaN),
    pdfValue213 =
      typeof pdfParam1.useSystemFonts == `boolean`
        ? pdfParam1.useSystemFonts
        : !pdfValue2 && !__pdfF,
    pdfValue214 =
      typeof pdfParam1.useWorkerFetch == `boolean`
        ? pdfParam1.useWorkerFetch
        : !!(
            pdfValue197 === pdfValue50 &&
            pdfValue198 === pdfValue54 &&
            pdfValue199 === pdfValue56 &&
            _pdfNt &&
            __pdfG &&
            __pdfX &&
            pdfHelper16(_pdfNt, document.baseURI) &&
            pdfHelper16(__pdfG, document.baseURI) &&
            pdfHelper16(__pdfX, document.baseURI)
          );
  pdfHelper1(___pdfS);
  let pdfValue215 = {
    canvasFactory: new pdfValue209({
      ownerDocument: pdfValue206,
      enableHWA: pdfValue210,
    }),
    filterFactory: new ___pdfT({
      docId: __pdfY,
      ownerDocument: pdfValue206,
    }),
    cMapReaderFactory: pdfValue214
      ? null
      : new pdfValue197({
          baseUrl: _pdfNt,
          isCompressed: __pdfC,
        }),
    standardFontDataFactory: pdfValue214
      ? null
      : new pdfValue198({
          baseUrl: __pdfG,
        }),
    wasmFactory: pdfValue214
      ? null
      : new pdfValue199({
          baseUrl: __pdfX,
        }),
  };
  __pdfR ||
    ((__pdfR = _pdfB.create({
      verbosity: ___pdfS,
      port: pdfP.workerPort,
    })),
    (pdfValue190._worker = __pdfR));
  let __pdfA = {
      docId: __pdfY,
      apiVersion: `5.4.296`,
      data: pdfValue192,
      password: __pdfS,
      disableAutoFetch: __pdfM,
      rangeChunkSize: __pdfI,
      length: pdfValue212,
      docBaseUrl: pdfValue196,
      enableXfa: __pdfQ,
      evaluatorOptions: {
        maxImageSize: pdfValue201,
        disableFontFace: __pdfF,
        ignoreErrors: pdfValue200,
        isEvalSupported: pdfValue202,
        isOffscreenCanvasSupported: pdfValue203,
        isImageDecoderSupported: pdfValue204,
        canvasMaxAreaInBytes: pdfValue205,
        fontExtraProperties: _pdfEt,
        useSystemFonts: pdfValue213,
        useWasm: pdfValue211,
        useWorkerFetch: pdfValue214,
        cMapUrl: _pdfNt,
        iccUrl: __pdfJ,
        standardFontDataUrl: __pdfG,
        wasmUrl: __pdfX,
      },
    },
    pdfValue216 = {
      ownerDocument: pdfValue206,
      pdfBug: __pdfT,
      styleElement: null,
      loadingParams: {
        disableAutoFetch: __pdfM,
        enableXfa: __pdfQ,
      },
    };
  return (
    __pdfR.promise
      .then(function () {
        if (pdfValue190.destroyed) throw Error(`Loading aborted`);
        if (__pdfR.destroyed) throw Error(`Worker was destroyed`);
        let pdfValue660 = __pdfR.messageHandler.sendWithPromise(
            `GetDocRequest`,
            __pdfA,
            pdfValue192 ? [pdfValue192.buffer] : null,
          ),
          ____pdfS;
        if (pdfValue195)
          ____pdfS = new pdfValue98(pdfValue195, {
            disableRange: pdfValue207,
            disableStream: pdfValue208,
          });
        else if (!pdfValue192) {
          if (!pdfValue191)
            throw Error("getDocument - no `url` parameter provided.");
          ____pdfS = new (
            pdfHelper16(pdfValue191)
              ? pdfValue101
              : pdfValue2
                ? pdfValue110
                : pdfValue106
          )({
            url: pdfValue191,
            length: pdfValue212,
            httpHeaders: pdfValue193,
            withCredentials: pdfValue194,
            rangeChunkSize: __pdfI,
            disableRange: pdfValue207,
            disableStream: pdfValue208,
          });
        }
        return pdfValue660.then((value) => {
          if (pdfValue190.destroyed) throw Error(`Loading aborted`);
          if (__pdfR.destroyed) throw Error(`Worker was destroyed`);
          let pdfValue1512 = new pdfValue46(__pdfY, value, __pdfR.port);
          ((pdfValue190._transport = new pdfValue119(
            pdfValue1512,
            pdfValue190,
            ____pdfS,
            pdfValue216,
            pdfValue215,
            pdfValue210,
          )),
            pdfValue1512.send(`Ready`, null));
        });
      })
      .catch(pdfValue190._capability.reject),
    pdfValue190
  );
}
var pdfValue117 = class PdfClass30 {
    static #e = 0;
    _capability = Promise.withResolvers();
    _transport = null;
    _worker = null;
    docId = `d${PdfClass30.#e++}`;
    destroyed = !1;
    onPassword = null;
    onProgress = null;
    get promise() {
      return this._capability.promise;
    }
    async destroy() {
      this.destroyed = !0;
      try {
        (this._worker?.port && (this._worker._pendingDestroy = !0),
          await this._transport?.destroy());
      } catch (pdfValue2001) {
        throw (
          this._worker?.port && delete this._worker._pendingDestroy,
          pdfValue2001
        );
      }
      ((this._transport = null),
        this._worker?.destroy(),
        (this._worker = null));
    }
    async getData() {
      return this._transport.getData();
    }
  },
  _pdfV = class {
    #e = Promise.withResolvers();
    #t = [];
    #n = [];
    #r = [];
    #i = [];
    constructor(pdfParam946, pdfParam947, __pdfY = !1, pdfParam948 = null) {
      ((this.length = pdfParam946),
        (this.initialData = pdfParam947),
        (this.progressiveDone = __pdfY),
        (this.contentDispositionFilename = pdfParam948));
    }
    addRangeListener(pdfParam1647) {
      this.#i.push(pdfParam1647);
    }
    addProgressListener(pdfParam1616) {
      this.#r.push(pdfParam1616);
    }
    addProgressiveReadListener(pdfParam1561) {
      this.#n.push(pdfParam1561);
    }
    addProgressiveDoneListener(pdfParam1562) {
      this.#t.push(pdfParam1562);
    }
    onDataRange(pdfParam1572, pdfParam1573) {
      for (let __pdfY of this.#i) __pdfY(pdfParam1572, pdfParam1573);
    }
    onDataProgress(pdfParam1274, pdfParam1275) {
      this.#e.promise.then(() => {
        for (let __pdfY of this.#r) __pdfY(pdfParam1274, pdfParam1275);
      });
    }
    onDataProgressiveRead(pdfParam1248) {
      this.#e.promise.then(() => {
        for (let pdfValue2248 of this.#n) pdfValue2248(pdfParam1248);
      });
    }
    onDataProgressiveDone() {
      this.#e.promise.then(() => {
        for (let pdfValue2249 of this.#t) pdfValue2249();
      });
    }
    transportReady() {
      this.#e.resolve();
    }
    requestDataRange(pdfParam1228, pdfParam1229) {
      pdfHelper5(`Abstract method PDFDataRangeTransport.requestDataRange`);
    }
    abort() {}
  },
  _r = class {
    constructor(pdfParam1523, pdfParam1524) {
      ((this._pdfInfo = pdfParam1523), (this._transport = pdfParam1524));
    }
    get annotationStorage() {
      return this._transport.annotationStorage;
    }
    get canvasFactory() {
      return this._transport.canvasFactory;
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get numPages() {
      return this._pdfInfo.numPages;
    }
    get fingerprints() {
      return this._pdfInfo.fingerprints;
    }
    get isPureXfa() {
      return pdfQ(this, `isPureXfa`, !!this._transport._htmlForXfa);
    }
    get allXfaHtml() {
      return this._transport._htmlForXfa;
    }
    getPage(pdfParam1574) {
      return this._transport.getPage(pdfParam1574);
    }
    getPageIndex(pdfParam1473) {
      return this._transport.getPageIndex(pdfParam1473);
    }
    getDestinations() {
      return this._transport.getDestinations();
    }
    getDestination(pdfParam1420) {
      return this._transport.getDestination(pdfParam1420);
    }
    getPageLabels() {
      return this._transport.getPageLabels();
    }
    getPageLayout() {
      return this._transport.getPageLayout();
    }
    getPageMode() {
      return this._transport.getPageMode();
    }
    getViewerPreferences() {
      return this._transport.getViewerPreferences();
    }
    getOpenAction() {
      return this._transport.getOpenAction();
    }
    getAttachments() {
      return this._transport.getAttachments();
    }
    getAnnotationsByType(pdfParam1281, pdfParam1282) {
      return this._transport.getAnnotationsByType(pdfParam1281, pdfParam1282);
    }
    getJSActions() {
      return this._transport.getDocJSActions();
    }
    getOutline() {
      return this._transport.getOutline();
    }
    getOptionalContentConfig({ intent = `display` } = {}) {
      let { renderingIntent: renderingIntent } =
        this._transport.getRenderingIntent(intent);
      return this._transport.getOptionalContentConfig(renderingIntent);
    }
    getPermissions() {
      return this._transport.getPermissions();
    }
    getMetadata() {
      return this._transport.getMetadata();
    }
    getMarkInfo() {
      return this._transport.getMarkInfo();
    }
    getData() {
      return this._transport.getData();
    }
    saveDocument() {
      return this._transport.saveDocument();
    }
    getDownloadInfo() {
      return this._transport.downloadInfoCapability.promise;
    }
    cleanup(pdfParam1331 = !1) {
      return this._transport.startCleanup(pdfParam1331 || this.isPureXfa);
    }
    destroy() {
      return this.loadingTask.destroy();
    }
    cachedPageNumber(pdfParam1372) {
      return this._transport.cachedPageNumber(pdfParam1372);
    }
    get loadingParams() {
      return this._transport.loadingParams;
    }
    get loadingTask() {
      return this._transport.loadingTask;
    }
    getFieldObjects() {
      return this._transport.getFieldObjects();
    }
    hasJSActions() {
      return this._transport.hasJSActions();
    }
    getCalculationOrderIds() {
      return this._transport.getCalculationOrderIds();
    }
  },
  pdfValue118 = class {
    #e = !1;
    constructor(pdfParam534, pdfParam535, __pdfY, pdfParam536 = !1) {
      ((this._pageIndex = pdfParam534),
        (this._pageInfo = pdfParam535),
        (this._transport = __pdfY),
        (this._stats = pdfParam536 ? new pdfValue21() : null),
        (this._pdfBug = pdfParam536),
        (this.commonObjs = __pdfY.commonObjs),
        (this.objs = new pdfValue113()),
        (this._intentStates = new Map()),
        (this.destroyed = !1),
        (this.recordedBBoxes = null));
    }
    get pageNumber() {
      return this._pageIndex + 1;
    }
    get rotate() {
      return this._pageInfo.rotate;
    }
    get ref() {
      return this._pageInfo.ref;
    }
    get userUnit() {
      return this._pageInfo.userUnit;
    }
    get view() {
      return this._pageInfo.view;
    }
    getViewport({
      scale: scale,
      rotation = this.rotate,
      offsetX: __pdfY = 0,
      offsetY = 0,
      dontFlip = !1,
    } = {}) {
      return new pdfValue20({
        viewBox: this.view,
        userUnit: this.userUnit,
        scale: scale,
        rotation: rotation,
        offsetX: __pdfY,
        offsetY: offsetY,
        dontFlip: dontFlip,
      });
    }
    getAnnotations({ intent = `display` } = {}) {
      let { renderingIntent: renderingIntent } =
        this._transport.getRenderingIntent(intent);
      return this._transport.getAnnotations(this._pageIndex, renderingIntent);
    }
    getJSActions() {
      return this._transport.getPageJSActions(this._pageIndex);
    }
    get filterFactory() {
      return this._transport.filterFactory;
    }
    get isPureXfa() {
      return pdfQ(this, `isPureXfa`, !!this._transport._htmlForXfa);
    }
    async getXfa() {
      return this._transport._htmlForXfa?.children[this._pageIndex] || null;
    }
    render({
      canvasContext: canvasContext,
      canvas = canvasContext.canvas,
      viewport: __pdfY,
      intent = `display`,
      annotationMode = pdfS.ENABLE,
      transform = null,
      background = null,
      optionalContentConfigPromise = null,
      annotationCanvasMap: __pdfI = null,
      pageColors: __pdfR = null,
      printAnnotationStorage: __pdfS = null,
      isEditing = !1,
      recordOperations: _pdfNt = !1,
      operationsFilter: __pdfC = null,
    }) {
      this._stats?.time(`Overall`);
      let pdfValue228 = this._transport.getRenderingIntent(
          intent,
          annotationMode,
          __pdfS,
          isEditing,
        ),
        { renderingIntent: __pdfJ, cacheKey: __pdfG } = pdfValue228;
      ((this.#e = !1),
        (optionalContentConfigPromise ||=
          this._transport.getOptionalContentConfig(__pdfJ)));
      let pdfValue229 = this._intentStates.get(__pdfG);
      (pdfValue229 ||
        ((pdfValue229 = Object.create(null)),
        this._intentStates.set(__pdfG, pdfValue229)),
        pdfValue229.streamReaderCancelTimeout &&
          (clearTimeout(pdfValue229.streamReaderCancelTimeout),
          (pdfValue229.streamReaderCancelTimeout = null)));
      let __pdfX = !!(__pdfJ & pdfValue5.PRINT);
      pdfValue229.displayReadyCapability ||
        ((pdfValue229.displayReadyCapability = Promise.withResolvers()),
        (pdfValue229.operatorList = {
          fnArray: [],
          argsArray: [],
          lastChunk: !1,
          separateAnnots: null,
        }),
        this._stats?.time(`Page Request`),
        this._pumpOperatorList(pdfValue228));
      let pdfValue230 = !!(this._pdfBug && globalThis.StepperManager?.enabled),
        pdfValue231 = !this.recordedBBoxes && (_pdfNt || pdfValue230),
        pdfValue232 = (pdfParam259) => {
          if ((pdfValue229.renderTasks.delete(pdfValue233), pdfValue231)) {
            let pdfValue1595 = pdfValue233.gfx?.dependencyTracker.take();
            pdfValue1595 &&
              (pdfValue233.stepper &&
                pdfValue233.stepper.setOperatorBBoxes(
                  pdfValue1595,
                  pdfValue233.gfx.dependencyTracker.takeDebugMetadata(),
                ),
              _pdfNt && (this.recordedBBoxes = pdfValue1595));
          }
          (__pdfX && (this.#e = !0),
            this.#t(),
            pdfParam259
              ? (pdfValue233.capability.reject(pdfParam259),
                this._abortOperatorList({
                  intentState: pdfValue229,
                  reason:
                    pdfParam259 instanceof Error
                      ? pdfParam259
                      : Error(pdfParam259),
                }))
              : pdfValue233.capability.resolve(),
            this._stats &&
              (this._stats.timeEnd(`Rendering`),
              this._stats.timeEnd(`Overall`),
              globalThis.Stats?.enabled &&
                globalThis.Stats.add(this.pageNumber, this._stats)));
        },
        pdfValue233 = new pdfValue121({
          callback: pdfValue232,
          params: {
            canvas: canvas,
            canvasContext: canvasContext,
            dependencyTracker: pdfValue231
              ? new pdfValue66(
                  canvas,
                  pdfValue229.operatorList.length,
                  pdfValue230,
                )
              : null,
            viewport: __pdfY,
            transform: transform,
            background: background,
          },
          objs: this.objs,
          commonObjs: this.commonObjs,
          annotationCanvasMap: __pdfI,
          operatorList: pdfValue229.operatorList,
          pageIndex: this._pageIndex,
          canvasFactory: this._transport.canvasFactory,
          filterFactory: this._transport.filterFactory,
          useRequestAnimationFrame: !__pdfX,
          pdfBug: this._pdfBug,
          pageColors: __pdfR,
          enableHWA: this._transport.enableHWA,
          operationsFilter: __pdfC,
        });
      (pdfValue229.renderTasks ||= new Set()).add(pdfValue233);
      let pdfValue234 = pdfValue233.task;
      return (
        Promise.all([
          pdfValue229.displayReadyCapability.promise,
          optionalContentConfigPromise,
        ])
          .then(([pdfParam373, pdfParam374]) => {
            if (this.destroyed) {
              pdfValue232();
              return;
            }
            if (
              (this._stats?.time(`Rendering`),
              !(pdfParam374.renderingIntent & __pdfJ))
            )
              throw Error(
                "Must use the same `intent`-argument when calling the `PDFPageProxy.render` and `PDFDocumentProxy.getOptionalContentConfig` methods.",
              );
            (pdfValue233.initializeGraphics({
              transparency: pdfParam373,
              optionalContentConfig: pdfParam374,
            }),
              pdfValue233.operatorListChanged());
          })
          .catch(pdfValue232),
        pdfValue234
      );
    }
    getOperatorList({
      intent = `display`,
      annotationMode = pdfS.ENABLE,
      printAnnotationStorage: __pdfY = null,
      isEditing = !1,
    } = {}) {
      function pdfHelper62() {
        pdfValue570.operatorList.lastChunk &&
          (pdfValue570.opListReadCapability.resolve(pdfValue570.operatorList),
          pdfValue570.renderTasks.delete(pdfValue571));
      }
      let pdfValue569 = this._transport.getRenderingIntent(
          intent,
          annotationMode,
          __pdfY,
          isEditing,
          !0,
        ),
        pdfValue570 = this._intentStates.get(pdfValue569.cacheKey);
      pdfValue570 ||
        ((pdfValue570 = Object.create(null)),
        this._intentStates.set(pdfValue569.cacheKey, pdfValue570));
      let pdfValue571;
      return (
        pdfValue570.opListReadCapability ||
          ((pdfValue571 = Object.create(null)),
          (pdfValue571.operatorListChanged = pdfHelper62),
          (pdfValue570.opListReadCapability = Promise.withResolvers()),
          (pdfValue570.renderTasks ||= new Set()).add(pdfValue571),
          (pdfValue570.operatorList = {
            fnArray: [],
            argsArray: [],
            lastChunk: !1,
            separateAnnots: null,
          }),
          this._stats?.time(`Page Request`),
          this._pumpOperatorList(pdfValue569)),
        pdfValue570.opListReadCapability.promise
      );
    }
    streamTextContent({
      includeMarkedContent = !1,
      disableNormalization = !1,
    } = {}) {
      return this._transport.messageHandler.sendWithStream(
        `GetTextContent`,
        {
          pageIndex: this._pageIndex,
          includeMarkedContent: includeMarkedContent === !0,
          disableNormalization: disableNormalization === !0,
        },
        {
          highWaterMark: 100,
          size(pdfParam1686) {
            return pdfParam1686.items.length;
          },
        },
      );
    }
    getTextContent(pdfParam328 = {}) {
      if (this._transport._htmlForXfa)
        return this.getXfa().then((value) => pdfValue19.textContent(value));
      let pdfValue969 = this.streamTextContent(pdfParam328);
      return new Promise(function (pdfParam527, __pdfY) {
        function pdfHelper65() {
          pdfValue1334.read().then(function ({ value: value, done: ___pdfY }) {
            if (___pdfY) {
              pdfParam527(pdfValue1335);
              return;
            }
            ((pdfValue1335.lang ??= value.lang),
              Object.assign(pdfValue1335.styles, value.styles),
              pdfValue1335.items.push(...value.items),
              pdfHelper65());
          }, __pdfY);
        }
        let pdfValue1334 = pdfValue969.getReader(),
          pdfValue1335 = {
            items: [],
            styles: Object.create(null),
            lang: null,
          };
        pdfHelper65();
      });
    }
    getStructTree() {
      return this._transport.getStructTree(this._pageIndex);
    }
    _destroy() {
      this.destroyed = !0;
      let pdfValue1154 = [];
      for (let pdfValue1416 of this._intentStates.values())
        if (
          (this._abortOperatorList({
            intentState: pdfValue1416,
            reason: Error(`Page was destroyed.`),
            force: !0,
          }),
          !pdfValue1416.opListReadCapability)
        )
          for (let __pdfY of pdfValue1416.renderTasks)
            (pdfValue1154.push(__pdfY.completed), __pdfY.cancel());
      return (this.objs.clear(), (this.#e = !1), Promise.all(pdfValue1154));
    }
    cleanup(pdfParam1249 = !1) {
      this.#e = !0;
      let pdfValue1967 = this.#t();
      return (
        pdfParam1249 && pdfValue1967 && (this._stats &&= new pdfValue21()),
        pdfValue1967
      );
    }
    #t() {
      if (!this.#e || this.destroyed) return !1;
      for (let {
        renderTasks: renderTasks,
        operatorList: operatorList,
      } of this._intentStates.values())
        if (renderTasks.size > 0 || !operatorList.lastChunk) return !1;
      return (
        this._intentStates.clear(),
        this.objs.clear(),
        (this.#e = !1),
        !0
      );
    }
    _startRenderPage(pdfParam883, pdfParam884) {
      let __pdfY = this._intentStates.get(pdfParam884);
      __pdfY &&
        (this._stats?.timeEnd(`Page Request`),
        __pdfY.displayReadyCapability?.resolve(pdfParam883));
    }
    _renderPageChunk(pdfParam429, pdfParam430) {
      for (
        let __pdfY = 0, pdfValue1741 = pdfParam429.length;
        __pdfY < pdfValue1741;
        __pdfY++
      )
        (pdfParam430.operatorList.fnArray.push(pdfParam429.fnArray[__pdfY]),
          pdfParam430.operatorList.argsArray.push(
            pdfParam429.argsArray[__pdfY],
          ));
      ((pdfParam430.operatorList.lastChunk = pdfParam429.lastChunk),
        (pdfParam430.operatorList.separateAnnots = pdfParam429.separateAnnots));
      for (let pdfValue2155 of pdfParam430.renderTasks)
        pdfValue2155.operatorListChanged();
      pdfParam429.lastChunk && this.#t();
    }
    _pumpOperatorList({
      renderingIntent: renderingIntent,
      cacheKey: cacheKey,
      annotationStorageSerializable: __pdfY,
      modifiedIds: modifiedIds,
    }) {
      let { map: map, transfer: transfer } = __pdfY,
        pdfValue517 = this._transport.messageHandler
          .sendWithStream(
            `GetOperatorList`,
            {
              pageIndex: this._pageIndex,
              intent: renderingIntent,
              cacheKey: cacheKey,
              annotationStorage: map,
              modifiedIds: modifiedIds,
            },
            transfer,
          )
          .getReader(),
        pdfValue518 = this._intentStates.get(cacheKey);
      pdfValue518.streamReader = pdfValue517;
      let __pdfS = () => {
        pdfValue517.read().then(
          ({ value: value, done: done }) => {
            if (done) {
              pdfValue518.streamReader = null;
              return;
            }
            this._transport.destroyed ||
              (this._renderPageChunk(value, pdfValue518), __pdfS());
          },
          (pdfParam418) => {
            if (
              ((pdfValue518.streamReader = null), !this._transport.destroyed)
            ) {
              if (pdfValue518.operatorList) {
                pdfValue518.operatorList.lastChunk = !0;
                for (let pdfValue2156 of pdfValue518.renderTasks)
                  pdfValue2156.operatorListChanged();
                this.#t();
              }
              if (pdfValue518.displayReadyCapability)
                pdfValue518.displayReadyCapability.reject(pdfParam418);
              else if (pdfValue518.opListReadCapability)
                pdfValue518.opListReadCapability.reject(pdfParam418);
              else throw pdfParam418;
            }
          },
        );
      };
      __pdfS();
    }
    _abortOperatorList({
      intentState: intentState,
      reason: reason,
      force: __pdfY = !1,
    }) {
      if (intentState.streamReader) {
        if (
          ((intentState.streamReaderCancelTimeout &&=
            (clearTimeout(intentState.streamReaderCancelTimeout), null)),
          !__pdfY)
        ) {
          if (intentState.renderTasks.size > 0) return;
          if (reason instanceof pdfW) {
            let ___pdfY = pdfValue116;
            (reason.extraDelay > 0 &&
              reason.extraDelay < 1e3 &&
              (___pdfY += reason.extraDelay),
              (intentState.streamReaderCancelTimeout = setTimeout(() => {
                ((intentState.streamReaderCancelTimeout = null),
                  this._abortOperatorList({
                    intentState: intentState,
                    reason: reason,
                    force: !0,
                  }));
              }, ___pdfY)));
            return;
          }
        }
        if (
          (intentState.streamReader
            .cancel(new _pdfT(reason.message))
            .catch(() => {}),
          (intentState.streamReader = null),
          !this._transport.destroyed)
        ) {
          for (let [pdfValue1968, ___pdfY] of this._intentStates)
            if (___pdfY === intentState) {
              this._intentStates.delete(pdfValue1968);
              break;
            }
          this.cleanup();
        }
      }
    }
    get stats() {
      return this._stats;
    }
  },
  _pdfB = class PdfClass20 {
    #e = Promise.withResolvers();
    #t = null;
    #n = null;
    #r = null;
    static #i = 0;
    static #a = !1;
    static #o = new WeakMap();
    static {
      (pdfValue2 && ((this.#a = !0), (pdfP.workerSrc ||= `./pdf.worker.mjs`)),
        (this._isSameOrigin = (pdfParam970, pdfParam971) => {
          let __pdfY = URL.parse(pdfParam970);
          if (!__pdfY?.origin || __pdfY.origin === `null`) return !1;
          let pdfValue1762 = new URL(pdfParam971, __pdfY);
          return __pdfY.origin === pdfValue1762.origin;
        }),
        (this._createCDNWrapper = (pdfParam1083) => {
          let pdfValue1838 = `await import("${pdfParam1083}");`;
          return URL.createObjectURL(
            new Blob([pdfValue1838], {
              type: `text/javascript`,
            }),
          );
        }),
        (this.fromPort = (pdfParam690) => {
          if (
            (pdfHelper17(
              "`PDFWorker.fromPort` - please use `PDFWorker.create` instead.",
            ),
            !pdfParam690?.port)
          )
            throw Error(`PDFWorker.fromPort - invalid method signature.`);
          return this.create(pdfParam690);
        }));
    }
    constructor({
      name = null,
      port: __pdfY = null,
      verbosity = pdfHelper2(),
    } = {}) {
      if (
        ((this.name = name),
        (this.destroyed = !1),
        (this.verbosity = verbosity),
        __pdfY)
      ) {
        if (PdfClass20.#o.has(__pdfY))
          throw Error(`Cannot use more than one PDFWorker per port.`);
        (PdfClass20.#o.set(__pdfY, this), this.#c(__pdfY));
      } else this.#l();
    }
    get promise() {
      return this.#e.promise;
    }
    #s() {
      (this.#e.resolve(),
        this.#t.send(`configure`, {
          verbosity: this.verbosity,
        }));
    }
    get port() {
      return this.#n;
    }
    get messageHandler() {
      return this.#t;
    }
    #c(pdfParam1192) {
      ((this.#n = pdfParam1192),
        (this.#t = new pdfValue46(`main`, `worker`, pdfParam1192)),
        this.#t.on(`ready`, () => {}),
        this.#s());
    }
    #l() {
      if (PdfClass20.#a || PdfClass20.#d) {
        this.#u();
        return;
      }
      let { workerSrc: workerSrc } = PdfClass20;
      try {
        PdfClass20._isSameOrigin(window.location, workerSrc) ||
          (workerSrc = PdfClass20._createCDNWrapper(
            new URL(workerSrc, window.location).href,
          ));
        let __pdfY = new Worker(workerSrc, {
            type: `module`,
          }),
          pdfValue681 = new pdfValue46(`main`, `worker`, __pdfY),
          pdfValue682 = () => {
            (pdfValue683.abort(),
              pdfValue681.destroy(),
              __pdfY.terminate(),
              this.destroyed
                ? this.#e.reject(Error(`Worker was destroyed`))
                : this.#u());
          },
          pdfValue683 = new AbortController();
        (__pdfY.addEventListener(
          `error`,
          () => {
            this.#r || pdfValue682();
          },
          {
            signal: pdfValue683.signal,
          },
        ),
          pdfValue681.on(`test`, (pdfParam1181) => {
            if ((pdfValue683.abort(), this.destroyed || !pdfParam1181)) {
              pdfValue682();
              return;
            }
            ((this.#t = pdfValue681),
              (this.#n = __pdfY),
              (this.#r = __pdfY),
              this.#s());
          }),
          pdfValue681.on(`ready`, (pdfParam1332) => {
            if ((pdfValue683.abort(), this.destroyed)) {
              pdfValue682();
              return;
            }
            try {
              pdfValue684();
            } catch {
              this.#u();
            }
          }));
        let pdfValue684 = () => {
          let pdfValue2132 = new Uint8Array();
          pdfValue681.send(`test`, pdfValue2132, [pdfValue2132.buffer]);
        };
        pdfValue684();
        return;
      } catch {
        pdfHelper3(`The worker has been disabled.`);
      }
      this.#u();
    }
    #u() {
      ((PdfClass20.#a ||= (pdfHelper4(`Setting up fake worker.`), !0)),
        PdfClass20._setupFakeWorkerGlobal
          .then((value) => {
            if (this.destroyed) {
              this.#e.reject(Error(`Worker was destroyed`));
              return;
            }
            let __pdfY = new pdfValue43();
            this.#n = __pdfY;
            let pdfValue1446 = `fake${PdfClass20.#i++}`,
              pdfValue1447 = new pdfValue46(
                pdfValue1446 + `_worker`,
                pdfValue1446,
                __pdfY,
              );
            (value.setup(pdfValue1447, __pdfY),
              (this.#t = new pdfValue46(
                pdfValue1446,
                pdfValue1446 + `_worker`,
                __pdfY,
              )),
              this.#s());
          })
          .catch((error) => {
            this.#e.reject(
              Error(`Setting up fake worker failed: "${error.message}".`),
            );
          }));
    }
    destroy() {
      ((this.destroyed = !0),
        this.#r?.terminate(),
        (this.#r = null),
        PdfClass20.#o.delete(this.#n),
        (this.#n = null),
        this.#t?.destroy(),
        (this.#t = null));
    }
    static create(pdfParam543) {
      let __pdfY = this.#o.get(pdfParam543?.port);
      if (__pdfY) {
        if (__pdfY._pendingDestroy)
          throw Error(
            "PDFWorker.create - the worker is being destroyed.\nPlease remember to await `PDFDocumentLoadingTask.destroy()`-calls.",
          );
        return __pdfY;
      }
      return new PdfClass20(pdfParam543);
    }
    static get workerSrc() {
      if (pdfP.workerSrc) return pdfP.workerSrc;
      throw Error(`No "GlobalWorkerOptions.workerSrc" specified.`);
    }
    static get #d() {
      try {
        return globalThis.pdfjsWorker?.WorkerMessageHandler || null;
      } catch {
        return null;
      }
    }
    static get _setupFakeWorkerGlobal() {
      return pdfQ(
        this,
        `_setupFakeWorkerGlobal`,
        (async () =>
          this.#d
            ? this.#d
            : (
                await PreloadHelper(
                  () => import(this.workerSrc),
                  [],
                  import.meta.url,
                )
              ).WorkerMessageHandler)(),
      );
    }
  },
  pdfValue119 = class {
    #e = new Map();
    #t = new Map();
    #n = new Map();
    #r = new Map();
    #i = null;
    constructor(
      pdfParam187,
      pdfParam188,
      __pdfY,
      pdfParam189,
      pdfParam190,
      pdfParam191,
    ) {
      ((this.messageHandler = pdfParam187),
        (this.loadingTask = pdfParam188),
        (this.commonObjs = new pdfValue113()),
        (this.fontLoader = new pdfValue40({
          ownerDocument: pdfParam189.ownerDocument,
          styleElement: pdfParam189.styleElement,
        })),
        (this.loadingParams = pdfParam189.loadingParams),
        (this._params = pdfParam189),
        (this.canvasFactory = pdfParam190.canvasFactory),
        (this.filterFactory = pdfParam190.filterFactory),
        (this.cMapReaderFactory = pdfParam190.cMapReaderFactory),
        (this.standardFontDataFactory = pdfParam190.standardFontDataFactory),
        (this.wasmFactory = pdfParam190.wasmFactory),
        (this.destroyed = !1),
        (this.destroyCapability = null),
        (this._networkStream = __pdfY),
        (this._fullReader = null),
        (this._lastProgress = null),
        (this.downloadInfoCapability = Promise.withResolvers()),
        (this.enableHWA = pdfParam191),
        this.setupMessageHandler());
    }
    #a(pdfParam934, pdfParam935 = null) {
      let __pdfY = this.#e.get(pdfParam934);
      if (__pdfY) return __pdfY;
      let pdfValue1735 = this.messageHandler.sendWithPromise(
        pdfParam934,
        pdfParam935,
      );
      return (this.#e.set(pdfParam934, pdfValue1735), pdfValue1735);
    }
    get annotationStorage() {
      return pdfQ(this, `annotationStorage`, new pdfValue38());
    }
    getRenderingIntent(
      pdfParam144,
      pdfParam145 = pdfS.ENABLE,
      __pdfY = null,
      pdfParam146 = !1,
      pdfParam147 = !1,
    ) {
      let pdfValue577 = pdfValue5.DISPLAY,
        pdfValue578 = pdfValue37;
      switch (pdfParam144) {
        case `any`:
          pdfValue577 = pdfValue5.ANY;
          break;
        case `display`:
          break;
        case `print`:
          pdfValue577 = pdfValue5.PRINT;
          break;
        default:
          pdfHelper4(`getRenderingIntent - invalid intent: ${pdfParam144}`);
      }
      let pdfValue579 =
        pdfValue577 & pdfValue5.PRINT && __pdfY instanceof pdfValue39
          ? __pdfY
          : this.annotationStorage;
      switch (pdfParam145) {
        case pdfS.DISABLE:
          pdfValue577 += pdfValue5.ANNOTATIONS_DISABLE;
          break;
        case pdfS.ENABLE:
          break;
        case pdfS.ENABLE_FORMS:
          pdfValue577 += pdfValue5.ANNOTATIONS_FORMS;
          break;
        case pdfS.ENABLE_STORAGE:
          ((pdfValue577 += pdfValue5.ANNOTATIONS_STORAGE),
            (pdfValue578 = pdfValue579.serializable));
          break;
        default:
          pdfHelper4(
            `getRenderingIntent - invalid annotationMode: ${pdfParam145}`,
          );
      }
      (pdfParam146 && (pdfValue577 += pdfValue5.IS_EDITING),
        pdfParam147 && (pdfValue577 += pdfValue5.OPLIST));
      let { ids: __pdfI, hash: __pdfR } = pdfValue579.modifiedIds,
        __pdfS = [pdfValue577, pdfValue578.hash, __pdfR];
      return {
        renderingIntent: pdfValue577,
        cacheKey: __pdfS.join(`_`),
        annotationStorageSerializable: pdfValue578,
        modifiedIds: __pdfI,
      };
    }
    destroy() {
      if (this.destroyCapability) return this.destroyCapability.promise;
      ((this.destroyed = !0),
        (this.destroyCapability = Promise.withResolvers()),
        this.#i?.reject(
          Error(`Worker was destroyed during onPassword callback`),
        ));
      let pdfValue501 = [];
      for (let pdfValue2157 of this.#t.values())
        pdfValue501.push(pdfValue2157._destroy());
      (this.#t.clear(),
        this.#n.clear(),
        this.#r.clear(),
        this.hasOwnProperty(`annotationStorage`) &&
          this.annotationStorage.resetModified());
      let pdfValue502 = this.messageHandler.sendWithPromise(`Terminate`, null);
      return (
        pdfValue501.push(pdfValue502),
        Promise.all(pdfValue501).then(() => {
          (this.commonObjs.clear(),
            this.fontLoader.clear(),
            this.#e.clear(),
            this.filterFactory.destroy(),
            pdfO.cleanup(),
            this._networkStream?.cancelAllRequests(
              new _pdfT(`Worker was terminated.`),
            ),
            this.messageHandler?.destroy(),
            (this.messageHandler = null),
            this.destroyCapability.resolve());
        }, this.destroyCapability.reject),
        this.destroyCapability.promise
      );
    }
    setupMessageHandler() {
      let { messageHandler: messageHandler, loadingTask: loadingTask } = this;
      (messageHandler.on(`GetReader`, (pdfParam243, pdfParam244) => {
        (pdfHelper6(
          this._networkStream,
          "GetReader - no `IPDFStream` instance available.",
        ),
          (this._fullReader = this._networkStream.getFullReader()),
          (this._fullReader.onProgress = (pdfParam1474) => {
            this._lastProgress = {
              loaded: pdfParam1474.loaded,
              total: pdfParam1474.total,
            };
          }),
          (pdfParam244.onPull = () => {
            this._fullReader
              .read()
              .then(function ({ value: value, done: __pdfY }) {
                if (__pdfY) {
                  pdfParam244.close();
                  return;
                }
                (pdfHelper6(
                  value instanceof ArrayBuffer,
                  `GetReader - expected an ArrayBuffer.`,
                ),
                  pdfParam244.enqueue(new Uint8Array(value), 1, [value]));
              })
              .catch((error) => {
                pdfParam244.error(error);
              });
          }),
          (pdfParam244.onCancel = (pdfParam1258) => {
            (this._fullReader.cancel(pdfParam1258),
              pdfParam244.ready.catch((error) => {
                if (!this.destroyed) throw error;
              }));
          }));
      }),
        messageHandler.on(`ReaderHeadersReady`, async (pdfParam366) => {
          await this._fullReader.headersReady;
          let {
            isStreamingSupported: __pdfY,
            isRangeSupported: isRangeSupported,
            contentLength: contentLength,
          } = this._fullReader;
          return (
            (!__pdfY || !isRangeSupported) &&
              (this._lastProgress &&
                loadingTask.onProgress?.(this._lastProgress),
              (this._fullReader.onProgress = (pdfParam1510) => {
                loadingTask.onProgress?.({
                  loaded: pdfParam1510.loaded,
                  total: pdfParam1510.total,
                });
              })),
            {
              isStreamingSupported: __pdfY,
              isRangeSupported: isRangeSupported,
              contentLength: contentLength,
            }
          );
        }),
        messageHandler.on(`GetRangeReader`, (pdfParam282, pdfParam283) => {
          pdfHelper6(
            this._networkStream,
            "GetRangeReader - no `IPDFStream` instance available.",
          );
          let __pdfY = this._networkStream.getRangeReader(
            pdfParam282.begin,
            pdfParam282.end,
          );
          if (!__pdfY) {
            pdfParam283.close();
            return;
          }
          ((pdfParam283.onPull = () => {
            __pdfY
              .read()
              .then(function ({ value: value, done: ___pdfY }) {
                if (___pdfY) {
                  pdfParam283.close();
                  return;
                }
                (pdfHelper6(
                  value instanceof ArrayBuffer,
                  `GetRangeReader - expected an ArrayBuffer.`,
                ),
                  pdfParam283.enqueue(new Uint8Array(value), 1, [value]));
              })
              .catch((error) => {
                pdfParam283.error(error);
              });
          }),
            (pdfParam283.onCancel = (pdfParam1373) => {
              (__pdfY.cancel(pdfParam1373),
                pdfParam283.ready.catch((error) => {
                  if (!this.destroyed) throw error;
                }));
            }));
        }),
        messageHandler.on(`GetDoc`, ({ pdfInfo: pdfInfo }) => {
          ((this._numPages = pdfInfo.numPages),
            (this._htmlForXfa = pdfInfo.htmlForXfa),
            delete pdfInfo.htmlForXfa,
            loadingTask._capability.resolve(new _r(pdfInfo, this)));
        }),
        messageHandler.on(`DocException`, (pdfParam1685) => {
          loadingTask._capability.reject(pdfHelper29(pdfParam1685));
        }),
        messageHandler.on(`PasswordRequest`, (event) => {
          this.#i = Promise.withResolvers();
          try {
            if (!loadingTask.onPassword) throw pdfHelper29(event);
            loadingTask.onPassword((pdfParam1301) => {
              pdfParam1301 instanceof Error
                ? this.#i.reject(pdfParam1301)
                : this.#i.resolve({
                    password: pdfParam1301,
                  });
            }, event.code);
          } catch (pdfValue2243) {
            this.#i.reject(pdfValue2243);
          }
          return this.#i.promise;
        }),
        messageHandler.on(`DataLoaded`, (pdfParam1143) => {
          (loadingTask.onProgress?.({
            loaded: pdfParam1143.length,
            total: pdfParam1143.length,
          }),
            this.downloadInfoCapability.resolve(pdfParam1143));
        }),
        messageHandler.on(`StartRenderPage`, (pdfParam1175) => {
          this.destroyed ||
            this.#t
              .get(pdfParam1175.pageIndex)
              ._startRenderPage(
                pdfParam1175.transparency,
                pdfParam1175.cacheKey,
              );
        }),
        messageHandler.on(`commonobj`, ([pdfParam89, __pdfY, pdfParam90]) => {
          if (this.destroyed || this.commonObjs.has(pdfParam89)) return null;
          switch (__pdfY) {
            case `Font`:
              if (`error` in pdfParam90) {
                let pdfValue1914 = pdfParam90.error;
                (pdfHelper4(`Error during font loading: ${pdfValue1914}`),
                  this.commonObjs.resolve(pdfParam89, pdfValue1914));
                break;
              }
              let pdfValue503 = new pdfValue41(
                new pdfValue93(pdfParam90),
                this._params.pdfBug && globalThis.FontInspector?.enabled
                  ? (pdfParam1563, pdfParam1564) =>
                      globalThis.FontInspector.fontAdded(
                        pdfParam1563,
                        pdfParam1564,
                      )
                  : null,
                pdfParam90.extra,
                pdfParam90.charProcOperatorList,
              );
              this.fontLoader
                .bind(pdfValue503)
                .catch(() =>
                  messageHandler.sendWithPromise(`FontFallback`, {
                    id: pdfParam89,
                  }),
                )
                .finally(() => {
                  (!pdfValue503.fontExtraProperties &&
                    pdfValue503.data &&
                    pdfValue503.clearData(),
                    this.commonObjs.resolve(pdfParam89, pdfValue503));
                });
              break;
            case `CopyLocalImage`:
              let { imageRef: imageRef } = pdfParam90;
              pdfHelper6(imageRef, `The imageRef must be defined.`);
              for (let pdfValue1636 of this.#t.values())
                for (let [, ___pdfY] of pdfValue1636.objs)
                  if (___pdfY?.ref === imageRef)
                    return ___pdfY.dataLen
                      ? (this.commonObjs.resolve(
                          pdfParam89,
                          structuredClone(___pdfY),
                        ),
                        ___pdfY.dataLen)
                      : null;
              break;
            case `FontPath`:
            case `Image`:
            case `Pattern`:
              this.commonObjs.resolve(pdfParam89, pdfParam90);
              break;
            default:
              throw Error(`Got unknown common object type ${__pdfY}`);
          }
          return null;
        }),
        messageHandler.on(
          `obj`,
          ([pdfParam508, pdfParam509, __pdfY, pdfParam510]) => {
            if (this.destroyed) return;
            let pdfValue1312 = this.#t.get(pdfParam509);
            if (!pdfValue1312.objs.has(pdfParam508)) {
              if (pdfValue1312._intentStates.size === 0) {
                pdfParam510?.bitmap?.close();
                return;
              }
              switch (__pdfY) {
                case `Image`:
                case `Pattern`:
                  pdfValue1312.objs.resolve(pdfParam508, pdfParam510);
                  break;
                default:
                  throw Error(`Got unknown object type ${__pdfY}`);
              }
            }
          },
        ),
        messageHandler.on(`DocProgress`, (pdfParam1336) => {
          this.destroyed ||
            loadingTask.onProgress?.({
              loaded: pdfParam1336.loaded,
              total: pdfParam1336.total,
            });
        }),
        messageHandler.on(`FetchBinaryData`, async (pdfParam631) => {
          if (this.destroyed) throw Error(`Worker was destroyed.`);
          let pdfValue1496 = this[pdfParam631.type];
          if (!pdfValue1496)
            throw Error(
              `${pdfParam631.type} not initialized, see the \`useWorkerFetch\` parameter.`,
            );
          return pdfValue1496.fetch(pdfParam631);
        }));
    }
    getData() {
      return this.messageHandler.sendWithPromise(`GetData`, null);
    }
    saveDocument() {
      this.annotationStorage.size <= 0 &&
        pdfHelper4(
          "saveDocument called while `annotationStorage` is empty, please use the getData-method instead.",
        );
      let { map: map, transfer: transfer } =
        this.annotationStorage.serializable;
      return this.messageHandler
        .sendWithPromise(
          `SaveDocument`,
          {
            isPureXfa: !!this._htmlForXfa,
            numPages: this._numPages,
            annotationStorage: map,
            filename: this._fullReader?.filename ?? null,
          },
          transfer,
        )
        .finally(() => {
          this.annotationStorage.resetModified();
        });
    }
    getPage(pdfParam314) {
      if (
        !Number.isInteger(pdfParam314) ||
        pdfParam314 <= 0 ||
        pdfParam314 > this._numPages
      )
        return Promise.reject(Error(`Invalid page request.`));
      let pdfValue933 = pdfParam314 - 1,
        __pdfY = this.#n.get(pdfValue933);
      if (__pdfY) return __pdfY;
      let pdfValue934 = this.messageHandler
        .sendWithPromise(`GetPage`, {
          pageIndex: pdfValue933,
        })
        .then((___pdfY) => {
          if (this.destroyed) throw Error(`Transport destroyed`);
          ___pdfY.refStr && this.#r.set(___pdfY.refStr, pdfParam314);
          let pdfValue1590 = new pdfValue118(
            pdfValue933,
            ___pdfY,
            this,
            this._params.pdfBug,
          );
          return (this.#t.set(pdfValue933, pdfValue1590), pdfValue1590);
        });
      return (this.#n.set(pdfValue933, pdfValue934), pdfValue934);
    }
    getPageIndex(pdfParam760) {
      return pdfValue42(pdfParam760)
        ? this.messageHandler.sendWithPromise(`GetPageIndex`, {
            num: pdfParam760.num,
            gen: pdfParam760.gen,
          })
        : Promise.reject(Error(`Invalid pageIndex request.`));
    }
    getAnnotations(pdfParam1055, pdfParam1056) {
      return this.messageHandler.sendWithPromise(`GetAnnotations`, {
        pageIndex: pdfParam1055,
        intent: pdfParam1056,
      });
    }
    getFieldObjects() {
      return this.#a(`GetFieldObjects`);
    }
    hasJSActions() {
      return this.#a(`HasJSActions`);
    }
    getCalculationOrderIds() {
      return this.messageHandler.sendWithPromise(
        `GetCalculationOrderIds`,
        null,
      );
    }
    getDestinations() {
      return this.messageHandler.sendWithPromise(`GetDestinations`, null);
    }
    getDestination(pdfParam746) {
      return typeof pdfParam746 == `string`
        ? this.messageHandler.sendWithPromise(`GetDestination`, {
            id: pdfParam746,
          })
        : Promise.reject(Error(`Invalid destination request.`));
    }
    getPageLabels() {
      return this.messageHandler.sendWithPromise(`GetPageLabels`, null);
    }
    getPageLayout() {
      return this.messageHandler.sendWithPromise(`GetPageLayout`, null);
    }
    getPageMode() {
      return this.messageHandler.sendWithPromise(`GetPageMode`, null);
    }
    getViewerPreferences() {
      return this.messageHandler.sendWithPromise(`GetViewerPreferences`, null);
    }
    getOpenAction() {
      return this.messageHandler.sendWithPromise(`GetOpenAction`, null);
    }
    getAttachments() {
      return this.messageHandler.sendWithPromise(`GetAttachments`, null);
    }
    getAnnotationsByType(pdfParam932, pdfParam933) {
      return this.messageHandler.sendWithPromise(`GetAnnotationsByType`, {
        types: pdfParam932,
        pageIndexesToSkip: pdfParam933,
      });
    }
    getDocJSActions() {
      return this.#a(`GetDocJSActions`);
    }
    getPageJSActions(pdfParam1098) {
      return this.messageHandler.sendWithPromise(`GetPageJSActions`, {
        pageIndex: pdfParam1098,
      });
    }
    getStructTree(pdfParam1157) {
      return this.messageHandler.sendWithPromise(`GetStructTree`, {
        pageIndex: pdfParam1157,
      });
    }
    getOutline() {
      return this.messageHandler.sendWithPromise(`GetOutline`, null);
    }
    getOptionalContentConfig(pdfParam1144) {
      return this.#a(`GetOptionalContentConfig`).then(
        (value) => new pdfValue97(value, pdfParam1144),
      );
    }
    getPermissions() {
      return this.messageHandler.sendWithPromise(`GetPermissions`, null);
    }
    getMetadata() {
      let pdfValue1122 = `GetMetadata`,
        pdfValue1123 = this.#e.get(pdfValue1122);
      if (pdfValue1123) return pdfValue1123;
      let __pdfY = this.messageHandler
        .sendWithPromise(pdfValue1122, null)
        .then((value) => ({
          info: value[0],
          metadata: value[1] ? new pdfValue94(value[1]) : null,
          contentDispositionFilename: this._fullReader?.filename ?? null,
          contentLength: this._fullReader?.contentLength ?? null,
        }));
      return (this.#e.set(pdfValue1122, __pdfY), __pdfY);
    }
    getMarkInfo() {
      return this.messageHandler.sendWithPromise(`GetMarkInfo`, null);
    }
    async startCleanup(pdfParam371 = !1) {
      if (!this.destroyed) {
        await this.messageHandler.sendWithPromise(`Cleanup`, null);
        for (let pdfValue1738 of this.#t.values())
          if (!pdfValue1738.cleanup())
            throw Error(
              `startCleanup: Page ${pdfValue1738.pageNumber} is currently rendering.`,
            );
        (this.commonObjs.clear(),
          pdfParam371 || this.fontLoader.clear(),
          this.#e.clear(),
          this.filterFactory.destroy(!0),
          pdfO.cleanup());
      }
    }
    cachedPageNumber(pdfParam950) {
      if (!pdfValue42(pdfParam950)) return null;
      let pdfValue1744 =
        pdfParam950.gen === 0
          ? `${pdfParam950.num}R`
          : `${pdfParam950.num}R${pdfParam950.gen}`;
      return this.#r.get(pdfValue1744) ?? null;
    }
  },
  pdfValue120 = class {
    #e = null;
    onContinue = null;
    onError = null;
    constructor(pdfParam1705) {
      this.#e = pdfParam1705;
    }
    get promise() {
      return this.#e.capability.promise;
    }
    cancel(pdfParam1657 = 0) {
      this.#e.cancel(null, pdfParam1657);
    }
    get separateAnnots() {
      let { separateAnnots: separateAnnots } = this.#e.operatorList;
      if (!separateAnnots) return !1;
      let { annotationCanvasMap: annotationCanvasMap } = this.#e;
      return (
        separateAnnots.form ||
        (separateAnnots.canvas && annotationCanvasMap?.size > 0)
      );
    }
  },
  pdfValue121 = class PdfClass15 {
    #e = null;
    static #t = new WeakSet();
    constructor({
      callback: callback,
      params: params,
      objs: __pdfY,
      commonObjs: commonObjs,
      annotationCanvasMap: annotationCanvasMap,
      operatorList: operatorList,
      pageIndex: pageIndex,
      canvasFactory: canvasFactory,
      filterFactory: __pdfS,
      useRequestAnimationFrame = !1,
      pdfBug: __pdfI = !1,
      pageColors: __pdfR = null,
      enableHWA: ___pdfS = !1,
      operationsFilter = null,
    }) {
      ((this.callback = callback),
        (this.params = params),
        (this.objs = __pdfY),
        (this.commonObjs = commonObjs),
        (this.annotationCanvasMap = annotationCanvasMap),
        (this.operatorListIdx = null),
        (this.operatorList = operatorList),
        (this._pageIndex = pageIndex),
        (this.canvasFactory = canvasFactory),
        (this.filterFactory = __pdfS),
        (this._pdfBug = __pdfI),
        (this.pageColors = __pdfR),
        (this.running = !1),
        (this.graphicsReadyCallback = null),
        (this.graphicsReady = !1),
        (this._useRequestAnimationFrame =
          useRequestAnimationFrame === !0 && typeof window < `u`),
        (this.cancelled = !1),
        (this.capability = Promise.withResolvers()),
        (this.task = new pdfValue120(this)),
        (this._cancelBound = this.cancel.bind(this)),
        (this._continueBound = this._continue.bind(this)),
        (this._scheduleNextBound = this._scheduleNext.bind(this)),
        (this._nextBound = this._next.bind(this)),
        (this._canvas = params.canvas),
        (this._canvasContext = params.canvas ? null : params.canvasContext),
        (this._enableHWA = ___pdfS),
        (this._dependencyTracker = params.dependencyTracker),
        (this._operationsFilter = operationsFilter));
    }
    get completed() {
      return this.capability.promise.catch(function () {});
    }
    initializeGraphics({ transparency = !1, optionalContentConfig: __pdfY }) {
      if (this.cancelled) return;
      if (this._canvas) {
        if (PdfClass15.#t.has(this._canvas))
          throw Error(
            `Cannot use the same canvas during multiple render() operations. Use different canvas or ensure previous operations were cancelled or completed.`,
          );
        PdfClass15.#t.add(this._canvas);
      }
      this._pdfBug &&
        globalThis.StepperManager?.enabled &&
        ((this.stepper = globalThis.StepperManager.create(this._pageIndex)),
        this.stepper.init(this.operatorList),
        (this.stepper.nextBreakPoint = this.stepper.getNextBreakPoint()));
      let {
        viewport: viewport,
        transform: transform,
        background: background,
        dependencyTracker: dependencyTracker,
      } = this.params;
      ((this.gfx = new pdfValue90(
        this._canvasContext ||
          this._canvas.getContext(`2d`, {
            alpha: !1,
            willReadFrequently: !this._enableHWA,
          }),
        this.commonObjs,
        this.objs,
        this.canvasFactory,
        this.filterFactory,
        {
          optionalContentConfig: __pdfY,
        },
        this.annotationCanvasMap,
        this.pageColors,
        dependencyTracker,
      )),
        this.gfx.beginDrawing({
          transform: transform,
          viewport: viewport,
          transparency: transparency,
          background: background,
        }),
        (this.operatorListIdx = 0),
        (this.graphicsReady = !0),
        this.graphicsReadyCallback?.());
    }
    cancel(pdfParam498 = null, __pdfY = 0) {
      ((this.running = !1),
        (this.cancelled = !0),
        this.gfx?.endDrawing(),
        (this.#e &&= (window.cancelAnimationFrame(this.#e), null)),
        PdfClass15.#t.delete(this._canvas),
        (pdfParam498 ||= new pdfW(
          `Rendering cancelled, page ${this._pageIndex + 1}`,
          __pdfY,
        )),
        this.callback(pdfParam498),
        this.task.onError?.(pdfParam498));
    }
    operatorListChanged() {
      if (!this.graphicsReady) {
        this.graphicsReadyCallback ||= this._continueBound;
        return;
      }
      (this.gfx.dependencyTracker?.growOperationsCount(
        this.operatorList.fnArray.length,
      ),
        this.stepper?.updateOperatorList(this.operatorList),
        !this.running && this._continue());
    }
    _continue() {
      ((this.running = !0),
        !this.cancelled &&
          (this.task.onContinue
            ? this.task.onContinue(this._scheduleNextBound)
            : this._scheduleNext()));
    }
    _scheduleNext() {
      this._useRequestAnimationFrame
        ? (this.#e = window.requestAnimationFrame(() => {
            ((this.#e = null), this._nextBound().catch(this._cancelBound));
          }))
        : Promise.resolve().then(this._nextBound).catch(this._cancelBound);
    }
    async _next() {
      this.cancelled ||
        ((this.operatorListIdx = this.gfx.executeOperatorList(
          this.operatorList,
          this.operatorListIdx,
          this._continueBound,
          this.stepper,
          this._operationsFilter,
        )),
        this.operatorListIdx === this.operatorList.argsArray.length &&
          ((this.running = !1),
          this.operatorList.lastChunk &&
            (this.gfx.endDrawing(),
            PdfClass15.#t.delete(this._canvas),
            this.callback())));
    }
  },
  pdfRt = `5.4.296`,
  _pdfP = `f56dc8601`,
  _pdfU = class PdfClass12 {
    #e = null;
    #t = null;
    #n;
    #r = null;
    #i = !1;
    #a = !1;
    #o = null;
    #s;
    #c = null;
    #l = null;
    static #u = null;
    static get _keyboardManager() {
      return pdfQ(
        this,
        `_keyboardManager`,
        new pdfValue28([
          [
            [`Escape`, `mac+Escape`],
            PdfClass12.prototype._hideDropdownFromKeyboard,
          ],
          [[` `, `mac+ `], PdfClass12.prototype._colorSelectFromKeyboard],
          [
            [`ArrowDown`, `ArrowRight`, `mac+ArrowDown`, `mac+ArrowRight`],
            PdfClass12.prototype._moveToNext,
          ],
          [
            [`ArrowUp`, `ArrowLeft`, `mac+ArrowUp`, `mac+ArrowLeft`],
            PdfClass12.prototype._moveToPrevious,
          ],
          [[`Home`, `mac+Home`], PdfClass12.prototype._moveToBeginning],
          [[`End`, `mac+End`], PdfClass12.prototype._moveToEnd],
        ]),
      );
    }
    constructor({ editor = null, uiManager: __pdfY = null }) {
      (editor ? ((this.#a = !1), (this.#o = editor)) : (this.#a = !0),
        (this.#l = editor?._uiManager || __pdfY),
        (this.#s = this.#l._eventBus),
        (this.#n =
          editor?.color?.toUpperCase() ||
          this.#l?.highlightColors.values().next().value ||
          `#FFFF98`),
        (PdfClass12.#u ||= Object.freeze({
          blue: `pdfjs-editor-colorpicker-blue`,
          green: `pdfjs-editor-colorpicker-green`,
          pink: `pdfjs-editor-colorpicker-pink`,
          red: `pdfjs-editor-colorpicker-red`,
          yellow: `pdfjs-editor-colorpicker-yellow`,
        })));
    }
    renderButton() {
      let pdfValue762 = (this.#e = document.createElement(`button`));
      ((pdfValue762.className = `colorPicker`),
        (pdfValue762.tabIndex = `0`),
        pdfValue762.setAttribute(
          `data-l10n-id`,
          `pdfjs-editor-colorpicker-button`,
        ),
        (pdfValue762.ariaHasPopup = `true`),
        this.#o &&
          (pdfValue762.ariaControls = `${this.#o.id}_colorpicker_dropdown`));
      let pdfValue763 = this.#l._signal;
      (pdfValue762.addEventListener(`click`, this.#m.bind(this), {
        signal: pdfValue763,
      }),
        pdfValue762.addEventListener(`keydown`, this.#p.bind(this), {
          signal: pdfValue763,
        }));
      let __pdfY = (this.#t = document.createElement(`span`));
      return (
        (__pdfY.className = `swatch`),
        (__pdfY.ariaHidden = `true`),
        (__pdfY.style.backgroundColor = this.#n),
        pdfValue762.append(__pdfY),
        pdfValue762
      );
    }
    renderMainDropdown() {
      let pdfValue1689 = (this.#r = this.#d());
      return (
        (pdfValue1689.ariaOrientation = `horizontal`),
        (pdfValue1689.ariaLabelledBy = `highlightColorPickerLabel`),
        pdfValue1689
      );
    }
    #d() {
      let pdfValue519 = document.createElement(`div`),
        __pdfY = this.#l._signal;
      (pdfValue519.addEventListener(`contextmenu`, _pdfQ, {
        signal: __pdfY,
      }),
        (pdfValue519.className = `dropdown`),
        (pdfValue519.role = `listbox`),
        (pdfValue519.ariaMultiSelectable = `false`),
        (pdfValue519.ariaOrientation = `vertical`),
        pdfValue519.setAttribute(
          `data-l10n-id`,
          `pdfjs-editor-colorpicker-dropdown`,
        ),
        this.#o && (pdfValue519.id = `${this.#o.id}_colorpicker_dropdown`));
      for (let [pdfValue982, pdfValue983] of this.#l.highlightColors) {
        let pdfValue1045 = document.createElement(`button`);
        ((pdfValue1045.tabIndex = `0`),
          (pdfValue1045.role = `option`),
          pdfValue1045.setAttribute(`data-color`, pdfValue983),
          (pdfValue1045.title = pdfValue982),
          pdfValue1045.setAttribute(
            `data-l10n-id`,
            PdfClass12.#u[pdfValue982],
          ));
        let pdfValue1046 = document.createElement(`span`);
        (pdfValue1045.append(pdfValue1046),
          (pdfValue1046.className = `swatch`),
          (pdfValue1046.style.backgroundColor = pdfValue983),
          (pdfValue1045.ariaSelected = pdfValue983 === this.#n),
          pdfValue1045.addEventListener(
            `click`,
            this.#f.bind(this, pdfValue983),
            {
              signal: __pdfY,
            },
          ),
          pdfValue519.append(pdfValue1045));
      }
      return (
        pdfValue519.addEventListener(`keydown`, this.#p.bind(this), {
          signal: __pdfY,
        }),
        pdfValue519
      );
    }
    #f(pdfParam823, event) {
      (event.stopPropagation(),
        this.#s.dispatch(`switchannotationeditorparams`, {
          source: this,
          type: pdfR.HIGHLIGHT_COLOR,
          value: pdfParam823,
        }),
        this.updateColor(pdfParam823));
    }
    _colorSelectFromKeyboard(event) {
      if (event.target === this.#e) {
        this.#m(event);
        return;
      }
      let pdfValue1702 = event.target.getAttribute(`data-color`);
      pdfValue1702 && this.#f(pdfValue1702, event);
    }
    _moveToNext(event) {
      if (!this.#g) {
        this.#m(event);
        return;
      }
      if (event.target === this.#e) {
        this.#r.firstChild?.focus();
        return;
      }
      event.target.nextSibling?.focus();
    }
    _moveToPrevious(event) {
      if (event.target === this.#r?.firstChild || event.target === this.#e) {
        this.#g && this._hideDropdownFromKeyboard();
        return;
      }
      (this.#g || this.#m(event), event.target.previousSibling?.focus());
    }
    _moveToBeginning(pdfParam1250) {
      if (!this.#g) {
        this.#m(pdfParam1250);
        return;
      }
      this.#r.firstChild?.focus();
    }
    _moveToEnd(pdfParam1298) {
      if (!this.#g) {
        this.#m(pdfParam1298);
        return;
      }
      this.#r.lastChild?.focus();
    }
    #p(pdfParam1620) {
      PdfClass12._keyboardManager.exec(this, pdfParam1620);
    }
    #m(event) {
      if (this.#g) {
        this.hideDropdown();
        return;
      }
      if (
        ((this.#i = event.detail === 0),
        this.#c ||
          ((this.#c = new AbortController()),
          window.addEventListener(`pointerdown`, this.#h.bind(this), {
            signal: this.#l.combinedSignal(this.#c),
          })),
        (this.#e.ariaExpanded = `true`),
        this.#r)
      ) {
        this.#r.classList.remove(`hidden`);
        return;
      }
      let pdfValue1069 = (this.#r = this.#d());
      this.#e.append(pdfValue1069);
    }
    #h(event) {
      this.#r?.contains(event.target) || this.hideDropdown();
    }
    hideDropdown() {
      (this.#r?.classList.add(`hidden`),
        (this.#e.ariaExpanded = `false`),
        this.#c?.abort(),
        (this.#c = null));
    }
    get #g() {
      return this.#r && !this.#r.classList.contains(`hidden`);
    }
    _hideDropdownFromKeyboard() {
      if (!this.#a) {
        if (!this.#g) {
          this.#o?.unselect();
          return;
        }
        (this.hideDropdown(),
          this.#e.focus({
            preventScroll: !0,
            focusVisible: this.#i,
          }));
      }
    }
    updateColor(pdfParam612) {
      if ((this.#t && (this.#t.style.backgroundColor = pdfParam612), !this.#r))
        return;
      let pdfValue1471 = this.#l.highlightColors.values();
      for (let __pdfY of this.#r.children)
        __pdfY.ariaSelected =
          pdfValue1471.next().value === pdfParam612.toUpperCase();
    }
    destroy() {
      (this.#e?.remove(),
        (this.#e = null),
        (this.#t = null),
        this.#r?.remove(),
        (this.#r = null));
    }
  },
  pdfValue122 = class PdfClass28 {
    #e = null;
    #t = null;
    #n = null;
    static #r = null;
    constructor(pdfParam708) {
      ((this.#t = pdfParam708),
        (this.#n = pdfParam708._uiManager),
        (PdfClass28.#r ||= Object.freeze({
          freetext: `pdfjs-editor-color-picker-free-text-input`,
          ink: `pdfjs-editor-color-picker-ink-input`,
        })));
    }
    renderButton() {
      if (this.#e) return this.#e;
      let {
          editorType: editorType,
          colorType: __pdfY,
          colorValue: colorValue,
        } = this.#t,
        pdfValue1032 = (this.#e = document.createElement(`input`));
      return (
        (pdfValue1032.type = `color`),
        (pdfValue1032.value = colorValue || `#000000`),
        (pdfValue1032.className = `basicColorPicker`),
        (pdfValue1032.tabIndex = 0),
        pdfValue1032.setAttribute(`data-l10n-id`, PdfClass28.#r[editorType]),
        pdfValue1032.addEventListener(
          `input`,
          () => {
            this.#n.updateParams(__pdfY, pdfValue1032.value);
          },
          {
            signal: this.#n._signal,
          },
        ),
        pdfValue1032
      );
    }
    update(pdfParam1633) {
      this.#e && (this.#e.value = pdfParam1633);
    }
    destroy() {
      (this.#e?.remove(), (this.#e = null));
    }
    hideDropdown() {}
  };
function pdfHelper52(pdfParam1140) {
  return Math.floor(Math.max(0, Math.min(1, pdfParam1140)) * 255)
    .toString(16)
    .padStart(2, `0`);
}
function pdfHelper53(pdfParam1480) {
  return Math.max(0, Math.min(255, 255 * pdfParam1480));
}
var pdfValue123 = class {
    static CMYK_G([pdfParam1318, pdfParam1319, __pdfY, pdfParam1320]) {
      return [
        `G`,
        1 -
          Math.min(
            1,
            0.3 * pdfParam1318 +
              0.59 * __pdfY +
              0.11 * pdfParam1319 +
              pdfParam1320,
          ),
      ];
    }
    static G_CMYK([pdfParam1576]) {
      return [`CMYK`, 0, 0, 0, 1 - pdfParam1576];
    }
    static G_RGB([pdfParam1621]) {
      return [`RGB`, pdfParam1621, pdfParam1621, pdfParam1621];
    }
    static G_rgb([pdfParam1601]) {
      return (
        (pdfParam1601 = pdfHelper53(pdfParam1601)),
        [pdfParam1601, pdfParam1601, pdfParam1601]
      );
    }
    static G_HTML([pdfParam1501]) {
      let pdfValue2138 = pdfHelper52(pdfParam1501);
      return `#${pdfValue2138}${pdfValue2138}${pdfValue2138}`;
    }
    static RGB_G([pdfParam1525, pdfParam1526, __pdfY]) {
      return [`G`, 0.3 * pdfParam1525 + 0.59 * pdfParam1526 + 0.11 * __pdfY];
    }
    static RGB_rgb(pdfParam1658) {
      return pdfParam1658.map(pdfHelper53);
    }
    static RGB_HTML(pdfParam1534) {
      return `#${pdfParam1534.map(pdfHelper52).join(``)}`;
    }
    static T_HTML() {
      return `#00000000`;
    }
    static T_rgb() {
      return [null];
    }
    static CMYK_RGB([pdfParam1111, pdfParam1112, __pdfY, pdfParam1113]) {
      return [
        `RGB`,
        1 - Math.min(1, pdfParam1111 + pdfParam1113),
        1 - Math.min(1, __pdfY + pdfParam1113),
        1 - Math.min(1, pdfParam1112 + pdfParam1113),
      ];
    }
    static CMYK_rgb([pdfParam1084, pdfParam1085, __pdfY, pdfParam1086]) {
      return [
        pdfHelper53(1 - Math.min(1, pdfParam1084 + pdfParam1086)),
        pdfHelper53(1 - Math.min(1, __pdfY + pdfParam1086)),
        pdfHelper53(1 - Math.min(1, pdfParam1085 + pdfParam1086)),
      ];
    }
    static CMYK_HTML(pdfParam1276) {
      let pdfValue1982 = this.CMYK_RGB(pdfParam1276).slice(1);
      return this.RGB_HTML(pdfValue1982);
    }
    static RGB_CMYK([pdfParam1212, pdfParam1213, __pdfY]) {
      let pdfValue1934 = 1 - pdfParam1212,
        pdfValue1935 = 1 - pdfParam1213,
        pdfValue1936 = 1 - __pdfY;
      return [
        `CMYK`,
        pdfValue1934,
        pdfValue1935,
        pdfValue1936,
        Math.min(pdfValue1934, pdfValue1935, pdfValue1936),
      ];
    }
  },
  pdfValue124 = class {
    create(pdfParam422, pdfParam423, __pdfY = !1) {
      if (pdfParam422 <= 0 || pdfParam423 <= 0)
        throw Error(`Invalid SVG dimensions`);
      let pdfValue1147 = this._createSVG(`svg:svg`);
      return (
        pdfValue1147.setAttribute(`version`, `1.1`),
        __pdfY ||
          (pdfValue1147.setAttribute(`width`, `${pdfParam422}px`),
          pdfValue1147.setAttribute(`height`, `${pdfParam423}px`)),
        pdfValue1147.setAttribute(`preserveAspectRatio`, `none`),
        pdfValue1147.setAttribute(
          `viewBox`,
          `0 0 ${pdfParam422} ${pdfParam423}`,
        ),
        pdfValue1147
      );
    }
    createElement(pdfParam1051) {
      if (typeof pdfParam1051 != `string`)
        throw Error(`Invalid SVG element type`);
      return this._createSVG(pdfParam1051);
    }
    _createSVG(pdfParam1461) {
      pdfHelper5("Abstract method `_createSVG` called.");
    }
  },
  _pdfD = class extends pdfValue124 {
    _createSVG(pdfParam1511) {
      return document.createElementNS(be, pdfParam1511);
    }
  },
  pdfValue125 = 9,
  pdfValue126 = new WeakSet(),
  pdfValue127 = new Date().getTimezoneOffset() * 60 * 1e3,
  pdfValue128 = class {
    static create(pdfParam116) {
      switch (pdfParam116.data.annotationType) {
        case pdfC.LINK:
          return new pdfValue131(pdfParam116);
        case pdfC.TEXT:
          return new pdfValue132(pdfParam116);
        case pdfC.WIDGET:
          switch (pdfParam116.data.fieldType) {
            case `Tx`:
              return new pdfValue134(pdfParam116);
            case `Btn`:
              return pdfParam116.data.radioButton
                ? new pdfValue137(pdfParam116)
                : pdfParam116.data.checkBox
                  ? new pdfValue136(pdfParam116)
                  : new pdfValue138(pdfParam116);
            case `Ch`:
              return new pdfValue139(pdfParam116);
            case `Sig`:
              return new pdfValue135(pdfParam116);
          }
          return new pdfValue133(pdfParam116);
        case pdfC.POPUP:
          return new pdfValue140(pdfParam116);
        case pdfC.FREETEXT:
          return new pdfValue142(pdfParam116);
        case pdfC.LINE:
          return new pdfValue143(pdfParam116);
        case pdfC.SQUARE:
          return new pdfValue144(pdfParam116);
        case pdfC.CIRCLE:
          return new pdfValue145(pdfParam116);
        case pdfC.POLYLINE:
          return new pdfValue146(pdfParam116);
        case pdfC.CARET:
          return new pdfValue147(pdfParam116);
        case pdfC.INK:
          return new pdfValue148(pdfParam116);
        case pdfC.POLYGON:
          return new $r(pdfParam116);
        case pdfC.HIGHLIGHT:
          return new pdfValue149(pdfParam116);
        case pdfC.UNDERLINE:
          return new pdfValue150(pdfParam116);
        case pdfC.SQUIGGLY:
          return new pdfValue151(pdfParam116);
        case pdfC.STRIKEOUT:
          return new pdfValue152(pdfParam116);
        case pdfC.STAMP:
          return new pdfValue153(pdfParam116);
        case pdfC.FILEATTACHMENT:
          return new pdfValue154(pdfParam116);
        default:
          return new pdfValue129(pdfParam116);
      }
    }
  },
  pdfValue129 = class PdfClass7 {
    #e = null;
    #t = !1;
    #n = null;
    constructor(
      pdfParam206,
      {
        isRenderable = !1,
        ignoreBorder: __pdfY = !1,
        createQuadrilaterals = !1,
      } = {},
    ) {
      ((this.isRenderable = isRenderable),
        (this.data = pdfParam206.data),
        (this.layer = pdfParam206.layer),
        (this.linkService = pdfParam206.linkService),
        (this.downloadManager = pdfParam206.downloadManager),
        (this.imageResourcesPath = pdfParam206.imageResourcesPath),
        (this.renderForms = pdfParam206.renderForms),
        (this.svgFactory = pdfParam206.svgFactory),
        (this.annotationStorage = pdfParam206.annotationStorage),
        (this.enableComment = pdfParam206.enableComment),
        (this.enableScripting = pdfParam206.enableScripting),
        (this.hasJSActions = pdfParam206.hasJSActions),
        (this._fieldObjects = pdfParam206.fieldObjects),
        (this.parent = pdfParam206.parent),
        isRenderable && (this.container = this._createContainer(__pdfY)),
        createQuadrilaterals && this._createQuadrilaterals());
    }
    static _hasPopupData({ contentsObj: contentsObj, richText: richText }) {
      return !!(contentsObj?.str || richText?.str);
    }
    get _isEditable() {
      return this.data.isEditable;
    }
    get hasPopupData() {
      return (
        PdfClass7._hasPopupData(this.data) ||
        (this.enableComment && !!this.commentText)
      );
    }
    get commentData() {
      let { data: data } = this,
        pdfValue1845 = this.annotationStorage?.getEditor(data.id);
      return pdfValue1845 ? pdfValue1845.getData() : data;
    }
    get hasCommentButton() {
      return this.enableComment && this.hasPopupElement;
    }
    get commentButtonPosition() {
      let pdfValue816 = this.annotationStorage?.getEditor(this.data.id);
      if (pdfValue816) return pdfValue816.commentButtonPositionInPage;
      let { quadPoints: quadPoints, inkLists: __pdfY, rect: rect } = this.data,
        pdfValue817 = -1 / 0,
        pdfValue818 = -1 / 0;
      if (quadPoints?.length >= 8) {
        for (
          let pdfValue1890 = 0;
          pdfValue1890 < quadPoints.length;
          pdfValue1890 += 8
        )
          quadPoints[pdfValue1890 + 1] > pdfValue818
            ? ((pdfValue818 = quadPoints[pdfValue1890 + 1]),
              (pdfValue817 = quadPoints[pdfValue1890 + 2]))
            : quadPoints[pdfValue1890 + 1] === pdfValue818 &&
              (pdfValue817 = Math.max(
                pdfValue817,
                quadPoints[pdfValue1890 + 2],
              ));
        return [pdfValue817, pdfValue818];
      }
      if (__pdfY?.length >= 1) {
        for (let pdfValue1805 of __pdfY)
          for (
            let pdfValue1891 = 0, ___pdfY = pdfValue1805.length;
            pdfValue1891 < ___pdfY;
            pdfValue1891 += 2
          )
            pdfValue1805[pdfValue1891 + 1] > pdfValue818
              ? ((pdfValue818 = pdfValue1805[pdfValue1891 + 1]),
                (pdfValue817 = pdfValue1805[pdfValue1891]))
              : pdfValue1805[pdfValue1891 + 1] === pdfValue818 &&
                (pdfValue817 = Math.max(
                  pdfValue817,
                  pdfValue1805[pdfValue1891],
                ));
        if (pdfValue817 !== 1 / 0) return [pdfValue817, pdfValue818];
      }
      return rect ? [rect[2], rect[3]] : null;
    }
    _normalizePoint(pdfParam652) {
      let {
        page: { view: view },
        viewport: {
          rawDims: {
            pageWidth: __pdfY,
            pageHeight: pageHeight,
            pageX: pageX,
            pageY: pageY,
          },
        },
      } = this.parent;
      return (
        (pdfParam652[1] = view[3] - pdfParam652[1] + view[1]),
        (pdfParam652[0] = (100 * (pdfParam652[0] - pageX)) / __pdfY),
        (pdfParam652[1] = (100 * (pdfParam652[1] - pageY)) / pageHeight),
        pdfParam652
      );
    }
    get commentText() {
      let { data: data } = this;
      return (
        this.annotationStorage.getRawValue(`${pdfValue6}${data.id}`)?.popup
          ?.contents ||
        data.contentsObj?.str ||
        ``
      );
    }
    set commentText(pdfParam378) {
      let { data: data } = this,
        __pdfY = {
          deleted: !pdfParam378,
          contents: pdfParam378 || ``,
        };
      (this.annotationStorage.updateEditor(data.id, {
        popup: __pdfY,
      }) ||
        this.annotationStorage.setValue(`${pdfValue6}${data.id}`, {
          id: data.id,
          annotationType: data.annotationType,
          pageIndex: this.parent.page._pageIndex,
          popup: __pdfY,
          popupRef: data.popupRef,
          modificationDate: new Date(),
        }),
        pdfParam378 || this.removePopup());
    }
    removePopup() {
      ((this.#n?.popup || this.popup)?.remove(), (this.#n = this.popup = null));
    }
    updateEdited(pdfParam439) {
      if (!this.container) return;
      pdfParam439.rect &&
        (this.#e ||= {
          rect: this.data.rect.slice(0),
        });
      let { rect: rect, popup: __pdfY } = pdfParam439;
      rect && this.#r(rect);
      let pdfValue1171 = this.#n?.popup || this.popup;
      (!pdfValue1171 &&
        __pdfY?.text &&
        (this._createPopup(__pdfY), (pdfValue1171 = this.#n.popup)),
        pdfValue1171 &&
          (pdfValue1171.updateEdited(pdfParam439),
          __pdfY?.deleted &&
            (pdfValue1171.remove(), (this.#n = null), (this.popup = null))));
    }
    resetEdited() {
      this.#e &&= (this.#r(this.#e.rect), this.#n?.popup.resetEdited(), null);
    }
    #r(pdfParam424) {
      let {
        container: { style: style },
        data: { rect: __pdfY, rotation: rotation },
        parent: {
          viewport: {
            rawDims: {
              pageWidth: pageWidth,
              pageHeight: pageHeight,
              pageX: pageX,
              pageY: pageY,
            },
          },
        },
      } = this;
      (__pdfY?.splice(0, 4, ...pdfParam424),
        (style.left = `${(100 * (pdfParam424[0] - pageX)) / pageWidth}%`),
        (style.top = `${(100 * (pageHeight - pdfParam424[3] + pageY)) / pageHeight}%`),
        rotation === 0
          ? ((style.width = `${(100 * (pdfParam424[2] - pdfParam424[0])) / pageWidth}%`),
            (style.height = `${(100 * (pdfParam424[3] - pdfParam424[1])) / pageHeight}%`))
          : this.setRotation(rotation));
    }
    _createContainer(pdfParam10) {
      let {
          data: data,
          parent: { page: __pdfY, viewport: viewport },
        } = this,
        pdfValue254 = document.createElement(`section`);
      (pdfValue254.setAttribute(`data-annotation-id`, data.id),
        !(this instanceof pdfValue133) &&
          !(this instanceof pdfValue131) &&
          (pdfValue254.tabIndex = 0));
      let { style: style } = pdfValue254;
      if (
        ((style.zIndex = this.parent.zIndex),
        (this.parent.zIndex += 2),
        data.alternativeText && (pdfValue254.title = data.alternativeText),
        data.noRotate && pdfValue254.classList.add(`norotate`),
        !data.rect || this instanceof pdfValue140)
      ) {
        let { rotation: _rotation } = data;
        return (
          !data.hasOwnCanvas &&
            _rotation !== 0 &&
            this.setRotation(_rotation, pdfValue254),
          pdfValue254
        );
      }
      let { width: width, height: height } = this;
      if (!pdfParam10 && data.borderStyle.width > 0) {
        style.borderWidth = `${data.borderStyle.width}px`;
        let pdfValue538 = data.borderStyle.horizontalCornerRadius,
          ___pdfY = data.borderStyle.verticalCornerRadius;
        switch (
          (pdfValue538 > 0 || ___pdfY > 0
            ? (style.borderRadius = `calc(${pdfValue538}px * var(--total-scale-factor)) / calc(${___pdfY}px * var(--total-scale-factor))`)
            : this instanceof pdfValue137 &&
              (style.borderRadius = `calc(${width}px * var(--total-scale-factor)) / calc(${height}px * var(--total-scale-factor))`),
          data.borderStyle.style)
        ) {
          case pdfValue8.SOLID:
            style.borderStyle = `solid`;
            break;
          case pdfValue8.DASHED:
            style.borderStyle = `dashed`;
            break;
          case pdfValue8.BEVELED:
            pdfHelper4(`Unimplemented border style: beveled`);
            break;
          case pdfValue8.INSET:
            pdfHelper4(`Unimplemented border style: inset`);
            break;
          case pdfValue8.UNDERLINE:
            style.borderBottomStyle = `solid`;
            break;
          default:
            break;
        }
        let pdfValue539 = data.borderColor || null;
        pdfValue539
          ? ((this.#t = !0),
            (style.borderColor = pdfA.makeHexColor(
              pdfValue539[0] | 0,
              pdfValue539[1] | 0,
              pdfValue539[2] | 0,
            )))
          : (style.borderWidth = 0);
      }
      let __pdfS = pdfA.normalizeRect([
          data.rect[0],
          __pdfY.view[3] - data.rect[1] + __pdfY.view[1],
          data.rect[2],
          __pdfY.view[3] - data.rect[3] + __pdfY.view[1],
        ]),
        {
          pageWidth: pageWidth,
          pageHeight: __pdfI,
          pageX: __pdfR,
          pageY: ___pdfS,
        } = viewport.rawDims;
      ((style.left = `${(100 * (__pdfS[0] - __pdfR)) / pageWidth}%`),
        (style.top = `${(100 * (__pdfS[1] - ___pdfS)) / __pdfI}%`));
      let { rotation: rotation } = data;
      return (
        data.hasOwnCanvas || rotation === 0
          ? ((style.width = `${(100 * width) / pageWidth}%`),
            (style.height = `${(100 * height) / __pdfI}%`))
          : this.setRotation(rotation, pdfValue254),
        pdfValue254
      );
    }
    setRotation(pdfParam471, pdfParam472 = this.container) {
      if (!this.data.rect) return;
      let { pageWidth: __pdfY, pageHeight: pageHeight } =
          this.parent.viewport.rawDims,
        { width: width, height: height } = this;
      (pdfParam471 % 180 != 0 && ([width, height] = [height, width]),
        (pdfParam472.style.width = `${(100 * width) / __pdfY}%`),
        (pdfParam472.style.height = `${(100 * height) / pageHeight}%`),
        pdfParam472.setAttribute(
          `data-main-rotation`,
          (360 - pdfParam471) % 360,
        ));
    }
    get _commonActions() {
      let pdfValue341 = (pdfParam761, pdfParam762, __pdfY) => {
        let pdfValue1599 = __pdfY.detail[pdfParam761],
          pdfValue1600 = pdfValue1599[0],
          pdfValue1601 = pdfValue1599.slice(1);
        ((__pdfY.target.style[pdfParam762] =
          pdfValue123[`${pdfValue1600}_HTML`](pdfValue1601)),
          this.annotationStorage.setValue(this.data.id, {
            [pdfParam762]: pdfValue123[`${pdfValue1600}_rgb`](pdfValue1601),
          }));
      };
      return pdfQ(this, `_commonActions`, {
        display: (event) => {
          let { display: display } = event.detail,
            __pdfY = display % 2 == 1;
          ((this.container.style.visibility = __pdfY ? `hidden` : `visible`),
            this.annotationStorage.setValue(this.data.id, {
              noView: __pdfY,
              noPrint: display === 1 || display === 2,
            }));
        },
        print: (event) => {
          this.annotationStorage.setValue(this.data.id, {
            noPrint: !event.detail.print,
          });
        },
        hidden: (event) => {
          let { hidden: hidden } = event.detail;
          ((this.container.style.visibility = hidden ? `hidden` : `visible`),
            this.annotationStorage.setValue(this.data.id, {
              noPrint: hidden,
              noView: hidden,
            }));
        },
        focus: (event) => {
          setTimeout(
            () =>
              event.target.focus({
                preventScroll: !1,
              }),
            0,
          );
        },
        userName: (event) => {
          event.target.title = event.detail.userName;
        },
        readonly: (event) => {
          event.target.disabled = event.detail.readonly;
        },
        required: (event) => {
          this._setRequired(event.target, event.detail.required);
        },
        bgColor: (pdfParam1634) => {
          pdfValue341(`bgColor`, `backgroundColor`, pdfParam1634);
        },
        fillColor: (pdfParam1617) => {
          pdfValue341(`fillColor`, `backgroundColor`, pdfParam1617);
        },
        fgColor: (pdfParam1696) => {
          pdfValue341(`fgColor`, `color`, pdfParam1696);
        },
        textColor: (pdfParam1693) => {
          pdfValue341(`textColor`, `color`, pdfParam1693);
        },
        borderColor: (pdfParam1635) => {
          pdfValue341(`borderColor`, `borderColor`, pdfParam1635);
        },
        strokeColor: (pdfParam1636) => {
          pdfValue341(`strokeColor`, `borderColor`, pdfParam1636);
        },
        rotation: (event) => {
          let pdfValue1806 = event.detail.rotation;
          (this.setRotation(pdfValue1806),
            this.annotationStorage.setValue(this.data.id, {
              rotation: pdfValue1806,
            }));
        },
      });
    }
    _dispatchEventFromSandbox(pdfParam1008, event) {
      let __pdfY = this._commonActions;
      for (let pdfValue2144 of Object.keys(event.detail))
        (pdfParam1008[pdfValue2144] || __pdfY[pdfValue2144])?.(event);
    }
    _setDefaultPropertiesFromJS(pdfParam512) {
      if (!this.enableScripting) return;
      let pdfValue1315 = this.annotationStorage.getRawValue(this.data.id);
      if (!pdfValue1315) return;
      let __pdfY = this._commonActions;
      for (let [pdfValue1896, pdfValue1897] of Object.entries(pdfValue1315)) {
        let pdfValue2105 = __pdfY[pdfValue1896];
        pdfValue2105 &&
          (pdfValue2105({
            detail: {
              [pdfValue1896]: pdfValue1897,
            },
            target: pdfParam512,
          }),
          delete pdfValue1315[pdfValue1896]);
      }
    }
    _createQuadrilaterals() {
      if (!this.container) return;
      let { quadPoints: quadPoints } = this.data;
      if (!quadPoints) return;
      let [pdfValue305, __pdfY, pdfValue306, pdfValue307] = this.data.rect.map(
        (item) => Math.fround(item),
      );
      if (quadPoints.length === 8) {
        let [pdfValue2044, pdfValue2045, pdfValue2046, ____pdfS] =
          quadPoints.subarray(2, 6);
        if (
          pdfValue306 === pdfValue2044 &&
          pdfValue307 === pdfValue2045 &&
          pdfValue305 === pdfValue2046 &&
          __pdfY === ____pdfS
        )
          return;
      }
      let { style: style } = this.container,
        pdfValue308;
      if (this.#t) {
        let { borderColor: borderColor, borderWidth: borderWidth } = style;
        ((style.borderWidth = 0),
          (pdfValue308 = [
            `url('data:image/svg+xml;utf8,`,
            `<svg xmlns="http://www.w3.org/2000/svg"`,
            ` preserveAspectRatio="none" viewBox="0 0 1 1">`,
            `<g fill="transparent" stroke="${borderColor}" stroke-width="${borderWidth}">`,
          ]),
          this.container.classList.add(`hasBorder`));
      }
      let pdfValue309 = pdfValue306 - pdfValue305,
        __pdfS = pdfValue307 - __pdfY,
        { svgFactory: svgFactory } = this,
        __pdfI = svgFactory.createElement(`svg`);
      (__pdfI.classList.add(`quadrilateralsContainer`),
        __pdfI.setAttribute(`width`, 0),
        __pdfI.setAttribute(`height`, 0),
        (__pdfI.role = `none`));
      let __pdfR = svgFactory.createElement(`defs`);
      __pdfI.append(__pdfR);
      let ___pdfS = svgFactory.createElement(`clipPath`),
        pdfValue310 = `clippath_${this.data.id}`;
      (___pdfS.setAttribute(`id`, pdfValue310),
        ___pdfS.setAttribute(`clipPathUnits`, `objectBoundingBox`),
        __pdfR.append(___pdfS));
      for (
        let ___pdfY = 2, pdfValue1049 = quadPoints.length;
        ___pdfY < pdfValue1049;
        ___pdfY += 8
      ) {
        let pdfValue1106 = quadPoints[___pdfY],
          pdfValue1107 = quadPoints[___pdfY + 1],
          ___pdfI = quadPoints[___pdfY + 2],
          ___pdfR = quadPoints[___pdfY + 3],
          pdfValue1108 = svgFactory.createElement(`rect`),
          _pdfNt = (___pdfI - pdfValue305) / pdfValue309,
          __pdfC = (pdfValue307 - pdfValue1107) / __pdfS,
          pdfValue1109 = (pdfValue1106 - ___pdfI) / pdfValue309,
          __pdfJ = (pdfValue1107 - ___pdfR) / __pdfS;
        (pdfValue1108.setAttribute(`x`, _pdfNt),
          pdfValue1108.setAttribute(`y`, __pdfC),
          pdfValue1108.setAttribute(`width`, pdfValue1109),
          pdfValue1108.setAttribute(`height`, __pdfJ),
          ___pdfS.append(pdfValue1108),
          pdfValue308?.push(
            `<rect vector-effect="non-scaling-stroke" x="${_pdfNt}" y="${__pdfC}" width="${pdfValue1109}" height="${__pdfJ}"/>`,
          ));
      }
      (this.#t &&
        (pdfValue308.push(`</g></svg>')`),
        (style.backgroundImage = pdfValue308.join(``))),
        this.container.append(__pdfI),
        (this.container.style.clipPath = `url(#${pdfValue310})`));
    }
    _createPopup(pdfParam299 = null) {
      let { data: data } = this,
        __pdfY,
        pdfValue892;
      pdfParam299
        ? ((__pdfY = {
            str: pdfParam299.text,
          }),
          (pdfValue892 = pdfParam299.date))
        : ((__pdfY = data.contentsObj), (pdfValue892 = data.modificationDate));
      let pdfValue893 = (this.#n = new pdfValue140({
        data: {
          color: data.color,
          titleObj: data.titleObj,
          modificationDate: pdfValue892,
          contentsObj: __pdfY,
          richText: data.richText,
          parentRect: data.rect,
          borderStyle: 0,
          id: `popup_${data.id}`,
          rotation: data.rotation,
          noRotate: !0,
        },
        linkService: this.linkService,
        parent: this.parent,
        elements: [this],
      }));
      this.parent._commentManager ||
        this.parent.div.append(pdfValue893.render());
    }
    get hasPopupElement() {
      return !!(this.#n || this.popup || this.data.popupRef);
    }
    get extraPopupElement() {
      return this.#n;
    }
    render() {
      pdfHelper5("Abstract method `AnnotationElement.render` called");
    }
    _getElementsByName(pdfParam233, pdfParam234 = null) {
      let __pdfY = [];
      if (this._fieldObjects) {
        let pdfValue1098 = this._fieldObjects[pdfParam233];
        if (pdfValue1098)
          for (let {
            page: page,
            id: id,
            exportValues: exportValues,
          } of pdfValue1098) {
            if (page === -1 || id === pdfParam234) continue;
            let pdfValue1359 =
                typeof exportValues == `string` ? exportValues : null,
              pdfValue1360 = document.querySelector(
                `[data-element-id="${id}"]`,
              );
            if (pdfValue1360 && !pdfValue126.has(pdfValue1360)) {
              pdfHelper4(`_getElementsByName - element not allowed: ${id}`);
              continue;
            }
            __pdfY.push({
              id: id,
              exportValue: pdfValue1359,
              domElement: pdfValue1360,
            });
          }
        return __pdfY;
      }
      for (let pdfValue1586 of document.getElementsByName(pdfParam233)) {
        let { exportValue: exportValue } = pdfValue1586,
          pdfValue1745 = pdfValue1586.getAttribute(`data-element-id`);
        pdfValue1745 !== pdfParam234 &&
          pdfValue126.has(pdfValue1586) &&
          __pdfY.push({
            id: pdfValue1745,
            exportValue: exportValue,
            domElement: pdfValue1586,
          });
      }
      return __pdfY;
    }
    show() {
      (this.container && (this.container.hidden = !1), this.popup?.maybeShow());
    }
    hide() {
      (this.container && (this.container.hidden = !0), this.popup?.forceHide());
    }
    getElementsToTriggerPopup() {
      return this.container;
    }
    addHighlightArea() {
      let pdfValue1575 = this.getElementsToTriggerPopup();
      if (Array.isArray(pdfValue1575))
        for (let pdfValue2170 of pdfValue1575)
          pdfValue2170.classList.add(`highlightArea`);
      else pdfValue1575.classList.add(`highlightArea`);
    }
    _editOnDoubleClick() {
      if (!this._isEditable) return;
      let {
        annotationEditorType: annotationEditorType,
        data: { id: id },
      } = this;
      this.container.addEventListener(`dblclick`, () => {
        this.linkService.eventBus?.dispatch(`switchannotationeditormode`, {
          source: this,
          mode: annotationEditorType,
          editId: id,
          mustEnterInEditMode: !0,
        });
      });
    }
    get width() {
      return this.data.rect[2] - this.data.rect[0];
    }
    get height() {
      return this.data.rect[3] - this.data.rect[1];
    }
  },
  pdfValue130 = class extends pdfValue129 {
    constructor(pdfParam1251) {
      (super(pdfParam1251, {
        isRenderable: !0,
        ignoreBorder: !0,
      }),
        (this.editor = pdfParam1251.editor));
    }
    render() {
      return ((this.container.className = `editorAnnotation`), this.container);
    }
    createOrUpdatePopup() {
      let { editor: editor } = this;
      editor.hasComment &&
        (this._createPopup(editor.comment),
        this.extraPopupElement.popup.renderCommentButton());
    }
    get hasCommentButton() {
      return this.enableComment && this.editor.hasComment;
    }
    get commentButtonPosition() {
      return this.editor.commentButtonPositionInPage;
    }
    get commentText() {
      return this.editor.comment.text;
    }
    set commentText(pdfParam1374) {
      ((this.editor.comment = pdfParam1374),
        pdfParam1374 || this.removePopup());
    }
    get commentData() {
      return this.editor.getData();
    }
    remove() {
      (this.container.remove(), (this.container = null), this.removePopup());
    }
  },
  pdfValue131 = class extends pdfValue129 {
    constructor(pdfParam815, pdfParam816 = null) {
      (super(pdfParam815, {
        isRenderable: !0,
        ignoreBorder: !!pdfParam816?.ignoreBorder,
        createQuadrilaterals: !0,
      }),
        (this.isTooltipOnly = pdfParam815.data.isTooltipOnly));
    }
    render() {
      let { data: data, linkService: linkService } = this,
        __pdfY = document.createElement(`a`);
      __pdfY.setAttribute(`data-element-id`, data.id);
      let pdfValue512 = !1;
      return (
        data.url
          ? (linkService.addLinkAttributes(__pdfY, data.url, data.newWindow),
            (pdfValue512 = !0))
          : data.action
            ? (this._bindNamedAction(__pdfY, data.action, data.overlaidText),
              (pdfValue512 = !0))
            : data.attachment
              ? (this.#t(
                  __pdfY,
                  data.attachment,
                  data.overlaidText,
                  data.attachmentDest,
                ),
                (pdfValue512 = !0))
              : data.setOCGState
                ? (this.#n(__pdfY, data.setOCGState, data.overlaidText),
                  (pdfValue512 = !0))
                : data.dest
                  ? (this._bindLink(__pdfY, data.dest, data.overlaidText),
                    (pdfValue512 = !0))
                  : (data.actions &&
                      (data.actions.Action ||
                        data.actions[`Mouse Up`] ||
                        data.actions[`Mouse Down`]) &&
                      this.enableScripting &&
                      this.hasJSActions &&
                      (this._bindJSAction(__pdfY, data), (pdfValue512 = !0)),
                    data.resetForm
                      ? (this._bindResetFormAction(__pdfY, data.resetForm),
                        (pdfValue512 = !0))
                      : this.isTooltipOnly &&
                        !pdfValue512 &&
                        (this._bindLink(__pdfY, ``), (pdfValue512 = !0))),
        this.container.classList.add(`linkAnnotation`),
        pdfValue512 && this.container.append(__pdfY),
        this.container
      );
    }
    #e() {
      this.container.setAttribute(`data-internal-link`, ``);
    }
    _bindLink(pdfParam720, pdfParam721, __pdfY = ``) {
      ((pdfParam720.href = this.linkService.getDestinationHash(pdfParam721)),
        (pdfParam720.onclick = () => (
          pdfParam721 && this.linkService.goToDestination(pdfParam721),
          !1
        )),
        (pdfParam721 || pdfParam721 === ``) && this.#e(),
        __pdfY && (pdfParam720.title = __pdfY));
    }
    _bindNamedAction(pdfParam774, pdfParam775, __pdfY = ``) {
      ((pdfParam774.href = this.linkService.getAnchorUrl(``)),
        (pdfParam774.onclick = () => (
          this.linkService.executeNamedAction(pdfParam775),
          !1
        )),
        __pdfY && (pdfParam774.title = __pdfY),
        this.#e());
    }
    #t(pdfParam589, pdfParam590, __pdfY = ``, pdfParam591 = null) {
      ((pdfParam589.href = this.linkService.getAnchorUrl(``)),
        pdfParam590.description
          ? (pdfParam589.title = pdfParam590.description)
          : __pdfY && (pdfParam589.title = __pdfY),
        (pdfParam589.onclick = () => (
          this.downloadManager?.openOrDownloadData(
            pdfParam590.content,
            pdfParam590.filename,
            pdfParam591,
          ),
          !1
        )),
        this.#e());
    }
    #n(pdfParam859, pdfParam860, __pdfY = ``) {
      ((pdfParam859.href = this.linkService.getAnchorUrl(``)),
        (pdfParam859.onclick = () => (
          this.linkService.executeSetOCGState(pdfParam860),
          !1
        )),
        __pdfY && (pdfParam859.title = __pdfY),
        this.#e());
    }
    _bindJSAction(pdfParam330, pdfParam331) {
      pdfParam330.href = this.linkService.getAnchorUrl(``);
      let __pdfY = new Map([
        [`Action`, `onclick`],
        [`Mouse Up`, `onmouseup`],
        [`Mouse Down`, `onmousedown`],
      ]);
      for (let pdfValue1547 of Object.keys(pdfParam331.actions)) {
        let pdfValue1669 = __pdfY.get(pdfValue1547);
        pdfValue1669 &&
          (pdfParam330[pdfValue1669] = () => (
            this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
              source: this,
              detail: {
                id: pdfParam331.id,
                name: pdfValue1547,
              },
            }),
            !1
          ));
      }
      (pdfParam331.overlaidText &&
        (pdfParam330.title = pdfParam331.overlaidText),
        (pdfParam330.onclick ||= () => !1),
        this.#e());
    }
    _bindResetFormAction(pdfParam28, pdfParam29) {
      let __pdfY = pdfParam28.onclick;
      if (
        (__pdfY || (pdfParam28.href = this.linkService.getAnchorUrl(``)),
        this.#e(),
        !this._fieldObjects)
      ) {
        (pdfHelper4(
          '_bindResetFormAction - "resetForm" action not supported, ensure that the `fieldObjects` parameter is provided.',
        ),
          __pdfY || (pdfParam28.onclick = () => !1));
        return;
      }
      pdfParam28.onclick = () => {
        __pdfY?.();
        let { fields: fields, refs: refs, include: include } = pdfParam29,
          pdfValue409 = [];
        if (fields.length !== 0 || refs.length !== 0) {
          let pdfValue1515 = new Set(refs);
          for (let ___pdfY of fields) {
            let pdfValue2090 = this._fieldObjects[___pdfY] || [];
            for (let { id: ____pdfY } of pdfValue2090)
              pdfValue1515.add(____pdfY);
          }
          for (let pdfValue1910 of Object.values(this._fieldObjects))
            for (let ___pdfY of pdfValue1910)
              pdfValue1515.has(___pdfY.id) === include &&
                pdfValue409.push(___pdfY);
        } else
          for (let pdfValue2091 of Object.values(this._fieldObjects))
            pdfValue409.push(...pdfValue2091);
        let pdfValue410 = this.annotationStorage,
          pdfValue411 = [];
        for (let pdfValue803 of pdfValue409) {
          let { id: id } = pdfValue803;
          switch ((pdfValue411.push(id), pdfValue803.type)) {
            case `text`: {
              let ____pdfY = pdfValue803.defaultValue || ``;
              pdfValue410.setValue(id, {
                value: ____pdfY,
              });
              break;
            }
            case `checkbox`:
            case `radiobutton`: {
              let ____pdfY =
                pdfValue803.defaultValue === pdfValue803.exportValues;
              pdfValue410.setValue(id, {
                value: ____pdfY,
              });
              break;
            }
            case `combobox`:
            case `listbox`: {
              let ____pdfY = pdfValue803.defaultValue || ``;
              pdfValue410.setValue(id, {
                value: ____pdfY,
              });
              break;
            }
            default:
              continue;
          }
          let ___pdfY = document.querySelector(`[data-element-id="${id}"]`);
          if (___pdfY) {
            if (!pdfValue126.has(___pdfY)) {
              pdfHelper4(`_bindResetFormAction - element not allowed: ${id}`);
              continue;
            }
            ___pdfY.dispatchEvent(new Event(`resetform`));
          }
        }
        return (
          this.enableScripting &&
            this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
              source: this,
              detail: {
                id: `app`,
                ids: pdfValue411,
                name: `ResetForm`,
              },
            }),
          !1
        );
      };
    }
  },
  pdfValue132 = class extends pdfValue129 {
    constructor(pdfParam1595) {
      super(pdfParam1595, {
        isRenderable: !0,
      });
    }
    render() {
      this.container.classList.add(`textAnnotation`);
      let pdfValue938 = document.createElement(`img`);
      return (
        (pdfValue938.src =
          this.imageResourcesPath +
          `annotation-` +
          this.data.name.toLowerCase() +
          `.svg`),
        pdfValue938.setAttribute(`data-l10n-id`, `pdfjs-text-annotation-type`),
        pdfValue938.setAttribute(
          `data-l10n-args`,
          JSON.stringify({
            type: this.data.name,
          }),
        ),
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this.container.append(pdfValue938),
        this.container
      );
    }
  },
  pdfValue133 = class extends pdfValue129 {
    render() {
      return this.container;
    }
    showElementAndHideCanvas(pdfParam869) {
      this.data.hasOwnCanvas &&
        (pdfParam869.previousSibling?.nodeName === `CANVAS` &&
          (pdfParam869.previousSibling.hidden = !0),
        (pdfParam869.hidden = !1));
    }
    _getKeyModifier(event) {
      return pdfTt.platform.isMac ? event.metaKey : event.ctrlKey;
    }
    _setEventListener(
      pdfParam254,
      pdfParam255,
      __pdfY,
      pdfParam256,
      pdfParam257,
    ) {
      __pdfY.includes(`mouse`)
        ? pdfParam254.addEventListener(__pdfY, (event) => {
            this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
              source: this,
              detail: {
                id: this.data.id,
                name: pdfParam256,
                value: pdfParam257(event),
                shift: event.shiftKey,
                modifier: this._getKeyModifier(event),
              },
            });
          })
        : pdfParam254.addEventListener(__pdfY, (event) => {
            if (__pdfY === `blur`) {
              if (!pdfParam255.focused || !event.relatedTarget) return;
              pdfParam255.focused = !1;
            } else if (__pdfY === `focus`) {
              if (pdfParam255.focused) return;
              pdfParam255.focused = !0;
            }
            pdfParam257 &&
              this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
                source: this,
                detail: {
                  id: this.data.id,
                  name: pdfParam256,
                  value: pdfParam257(event),
                },
              });
          });
    }
    _setEventListeners(pdfParam367, pdfParam368, __pdfY, pdfParam369) {
      for (let [pdfValue1114, pdfValue1115] of __pdfY)
        (pdfValue1115 === `Action` || this.data.actions?.[pdfValue1115]) &&
          ((pdfValue1115 === `Focus` || pdfValue1115 === `Blur`) &&
            (pdfParam368 ||= {
              focused: !1,
            }),
          this._setEventListener(
            pdfParam367,
            pdfParam368,
            pdfValue1114,
            pdfValue1115,
            pdfParam369,
          ),
          pdfValue1115 === `Focus` && !this.data.actions?.Blur
            ? this._setEventListener(
                pdfParam367,
                pdfParam368,
                `blur`,
                `Blur`,
                null,
              )
            : pdfValue1115 === `Blur` &&
              !this.data.actions?.Focus &&
              this._setEventListener(
                pdfParam367,
                pdfParam368,
                `focus`,
                `Focus`,
                null,
              ));
    }
    _setBackgroundColor(pdfParam843) {
      let pdfValue1654 = this.data.backgroundColor || null;
      pdfParam843.style.backgroundColor =
        pdfValue1654 === null
          ? `transparent`
          : pdfA.makeHexColor(
              pdfValue1654[0],
              pdfValue1654[1],
              pdfValue1654[2],
            );
    }
    _setTextStyle(pdfParam226) {
      let pdfValue733 = [`left`, `center`, `right`],
        { fontColor: __pdfY } = this.data.defaultAppearanceData,
        pdfValue734 = this.data.defaultAppearanceData.fontSize || pdfValue125,
        pdfValue735 = pdfParam226.style,
        pdfValue736,
        pdfValue737 = (pdfParam1714) => Math.round(10 * pdfParam1714) / 10;
      if (this.data.multiLine) {
        let pdfValue1817 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2),
          pdfValue1818 =
            pdfValue1817 /
            (Math.round(pdfValue1817 / (pdfValue4 * pdfValue734)) || 1);
        pdfValue736 = Math.min(
          pdfValue734,
          pdfValue737(pdfValue1818 / pdfValue4),
        );
      } else {
        let pdfValue1983 = Math.abs(this.data.rect[3] - this.data.rect[1] - 2);
        pdfValue736 = Math.min(
          pdfValue734,
          pdfValue737(pdfValue1983 / pdfValue4),
        );
      }
      ((pdfValue735.fontSize = `calc(${pdfValue736}px * var(--total-scale-factor))`),
        (pdfValue735.color = pdfA.makeHexColor(
          __pdfY[0],
          __pdfY[1],
          __pdfY[2],
        )),
        this.data.textAlignment !== null &&
          (pdfValue735.textAlign = pdfValue733[this.data.textAlignment]));
    }
    _setRequired(pdfParam979, pdfParam980) {
      (pdfParam980
        ? pdfParam979.setAttribute(`required`, !0)
        : pdfParam979.removeAttribute(`required`),
        pdfParam979.setAttribute(`aria-required`, pdfParam980));
    }
  },
  pdfValue134 = class extends pdfValue133 {
    constructor(pdfParam917) {
      let pdfValue1707 =
        pdfParam917.renderForms ||
        pdfParam917.data.hasOwnCanvas ||
        (!pdfParam917.data.hasAppearance && !!pdfParam917.data.fieldValue);
      super(pdfParam917, {
        isRenderable: pdfValue1707,
      });
    }
    setPropertyOnSiblings(pdfParam681, pdfParam682, __pdfY, pdfParam683) {
      let pdfValue1548 = this.annotationStorage;
      for (let pdfValue1795 of this._getElementsByName(
        pdfParam681.name,
        pdfParam681.id,
      ))
        (pdfValue1795.domElement &&
          (pdfValue1795.domElement[pdfParam682] = __pdfY),
          pdfValue1548.setValue(pdfValue1795.id, {
            [pdfParam683]: __pdfY,
          }));
    }
    render() {
      let pdfValue175 = this.annotationStorage,
        pdfValue176 = this.data.id;
      this.container.classList.add(`textWidgetAnnotation`);
      let __pdfY = null;
      if (this.renderForms) {
        let pdfValue177 = pdfValue175.getValue(pdfValue176, {
            value: this.data.fieldValue,
          }),
          pdfValue178 = pdfValue177.value || ``,
          pdfValue179 = pdfValue175.getValue(pdfValue176, {
            charLimit: this.data.maxLen,
          }).charLimit;
        pdfValue179 &&
          pdfValue178.length > pdfValue179 &&
          (pdfValue178 = pdfValue178.slice(0, pdfValue179));
        let pdfValue180 =
          pdfValue177.formattedValue ||
          this.data.textContent?.join(`
`) ||
          null;
        pdfValue180 &&
          this.data.comb &&
          (pdfValue180 = pdfValue180.replaceAll(/\s+/g, ``));
        let pdfValue181 = {
          userValue: pdfValue178,
          formattedValue: pdfValue180,
          lastCommittedValue: null,
          commitKey: 1,
          focused: !1,
        };
        (this.data.multiLine
          ? ((__pdfY = document.createElement(`textarea`)),
            (__pdfY.textContent = pdfValue180 ?? pdfValue178),
            this.data.doNotScroll && (__pdfY.style.overflowY = `hidden`))
          : ((__pdfY = document.createElement(`input`)),
            (__pdfY.type = this.data.password ? `password` : `text`),
            __pdfY.setAttribute(`value`, pdfValue180 ?? pdfValue178),
            this.data.doNotScroll && (__pdfY.style.overflowX = `hidden`)),
          this.data.hasOwnCanvas && (__pdfY.hidden = !0),
          pdfValue126.add(__pdfY),
          __pdfY.setAttribute(`data-element-id`, pdfValue176),
          (__pdfY.disabled = this.data.readOnly),
          (__pdfY.name = this.data.fieldName),
          (__pdfY.tabIndex = 0));
        let {
            datetimeFormat: __pdfS,
            datetimeType: datetimeType,
            timeStep: __pdfI,
          } = this.data,
          __pdfR = !!datetimeType && this.enableScripting;
        (__pdfS && (__pdfY.title = __pdfS),
          this._setRequired(__pdfY, this.data.required),
          pdfValue179 && (__pdfY.maxLength = pdfValue179),
          __pdfY.addEventListener(`input`, (event) => {
            (pdfValue175.setValue(pdfValue176, {
              value: event.target.value,
            }),
              this.setPropertyOnSiblings(
                __pdfY,
                `value`,
                event.target.value,
                `value`,
              ),
              (pdfValue181.formattedValue = null));
          }),
          __pdfY.addEventListener(`resetform`, (pdfParam1199) => {
            let pdfValue1919 = this.data.defaultFieldValue ?? ``;
            ((__pdfY.value = pdfValue181.userValue = pdfValue1919),
              (pdfValue181.formattedValue = null));
          }));
        let ___pdfS = (event) => {
          let { formattedValue: formattedValue } = pdfValue181;
          (formattedValue != null && (event.target.value = formattedValue),
            (event.target.scrollLeft = 0));
        };
        if (this.enableScripting && this.hasJSActions) {
          (__pdfY.addEventListener(`focus`, (pdfParam315) => {
            if (pdfValue181.focused) return;
            let { target: target } = pdfParam315;
            if (
              (__pdfR &&
                ((target.type = datetimeType),
                __pdfI && (target.step = __pdfI)),
              pdfValue181.userValue)
            ) {
              let pdfValue1328 = pdfValue181.userValue;
              if (__pdfR) {
                if (datetimeType === `time`) {
                  let ___pdfY = new Date(pdfValue1328);
                  target.value = [
                    ___pdfY.getHours(),
                    ___pdfY.getMinutes(),
                    ___pdfY.getSeconds(),
                  ]
                    .map((item) => item.toString().padStart(2, `0`))
                    .join(`:`);
                } else
                  target.value = new Date(pdfValue1328 - pdfValue127)
                    .toISOString()
                    .split(datetimeType === `date` ? `T` : `.`, 1)[0];
              } else target.value = pdfValue1328;
            }
            ((pdfValue181.lastCommittedValue = target.value),
              (pdfValue181.commitKey = 1),
              this.data.actions?.Focus || (pdfValue181.focused = !0));
          }),
            __pdfY.addEventListener(`updatefromsandbox`, (___pdfY) => {
              (this.showElementAndHideCanvas(___pdfY.target),
                this._dispatchEventFromSandbox(
                  {
                    value(____pdfY) {
                      ((pdfValue181.userValue = ____pdfY.detail.value ?? ``),
                        __pdfR ||
                          pdfValue175.setValue(pdfValue176, {
                            value: pdfValue181.userValue.toString(),
                          }),
                        (____pdfY.target.value = pdfValue181.userValue));
                    },
                    formattedValue(____pdfY) {
                      let { formattedValue: formattedValue } = ____pdfY.detail;
                      ((pdfValue181.formattedValue = formattedValue),
                        formattedValue != null &&
                          ____pdfY.target !== document.activeElement &&
                          (____pdfY.target.value = formattedValue));
                      let pdfValue1497 = {
                        formattedValue: formattedValue,
                      };
                      (__pdfR && (pdfValue1497.value = formattedValue),
                        pdfValue175.setValue(pdfValue176, pdfValue1497));
                    },
                    selRange(event) {
                      event.target.setSelectionRange(...event.detail.selRange);
                    },
                    charLimit: (____pdfY) => {
                      let { charLimit: charLimit } = ____pdfY.detail,
                        { target: target } = ____pdfY;
                      if (charLimit === 0) {
                        target.removeAttribute(`maxLength`);
                        return;
                      }
                      target.setAttribute(`maxLength`, charLimit);
                      let pdfValue939 = pdfValue181.userValue;
                      !pdfValue939 ||
                        pdfValue939.length <= charLimit ||
                        ((pdfValue939 = pdfValue939.slice(0, charLimit)),
                        (target.value = pdfValue181.userValue = pdfValue939),
                        pdfValue175.setValue(pdfValue176, {
                          value: pdfValue939,
                        }),
                        this.linkService.eventBus?.dispatch(
                          `dispatcheventinsandbox`,
                          {
                            source: this,
                            detail: {
                              id: pdfValue176,
                              name: `Keystroke`,
                              value: pdfValue939,
                              willCommit: !0,
                              commitKey: 1,
                              selStart: target.selectionStart,
                              selEnd: target.selectionEnd,
                            },
                          },
                        ));
                    },
                  },
                  ___pdfY,
                ));
            }),
            __pdfY.addEventListener(`keydown`, (event) => {
              pdfValue181.commitKey = 1;
              let ___pdfY = -1;
              if (
                (event.key === `Escape`
                  ? (___pdfY = 0)
                  : event.key === `Enter` && !this.data.multiLine
                    ? (___pdfY = 2)
                    : event.key === `Tab` && (pdfValue181.commitKey = 3),
                ___pdfY === -1)
              )
                return;
              let { value: value } = event.target;
              pdfValue181.lastCommittedValue !== value &&
                ((pdfValue181.lastCommittedValue = value),
                (pdfValue181.userValue = value),
                this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
                  source: this,
                  detail: {
                    id: pdfValue176,
                    name: `Keystroke`,
                    value: value,
                    willCommit: !0,
                    commitKey: ___pdfY,
                    selStart: event.target.selectionStart,
                    selEnd: event.target.selectionEnd,
                  },
                }));
            }));
          let pdfValue189 = ___pdfS;
          ((___pdfS = null),
            __pdfY.addEventListener(`blur`, (event) => {
              if (!pdfValue181.focused || !event.relatedTarget) return;
              this.data.actions?.Blur || (pdfValue181.focused = !1);
              let { target: ___pdfY } = event,
                { value: value } = ___pdfY;
              if (__pdfR) {
                if (value && datetimeType === `time`) {
                  let pdfValue1839 = value
                    .split(`:`)
                    .map((item) => parseInt(item, 10));
                  ((value = new Date(
                    2e3,
                    0,
                    1,
                    pdfValue1839[0],
                    pdfValue1839[1],
                    pdfValue1839[2] || 0,
                  ).valueOf()),
                    (___pdfY.step = ``));
                } else
                  (value.includes(`T`) || (value = `${value}T00:00`),
                    (value = new Date(value).valueOf()));
                ___pdfY.type = `text`;
              }
              ((pdfValue181.userValue = value),
                pdfValue181.lastCommittedValue !== value &&
                  this.linkService.eventBus?.dispatch(
                    `dispatcheventinsandbox`,
                    {
                      source: this,
                      detail: {
                        id: pdfValue176,
                        name: `Keystroke`,
                        value: value,
                        willCommit: !0,
                        commitKey: pdfValue181.commitKey,
                        selStart: event.target.selectionStart,
                        selEnd: event.target.selectionEnd,
                      },
                    },
                  ),
                pdfValue189(event));
            }),
            this.data.actions?.Keystroke &&
              __pdfY.addEventListener(`beforeinput`, (event) => {
                pdfValue181.lastCommittedValue = null;
                let { data: ___pdfY, target: target } = event,
                  {
                    value: value,
                    selectionStart: selectionStart,
                    selectionEnd: selectionEnd,
                  } = target,
                  ____pdfS = selectionStart,
                  pdfValue713 = selectionEnd;
                switch (event.inputType) {
                  case `deleteWordBackward`: {
                    let pdfValue2020 = value
                      .substring(0, selectionStart)
                      .match(/\w*[^\w]*$/);
                    pdfValue2020 && (____pdfS -= pdfValue2020[0].length);
                    break;
                  }
                  case `deleteWordForward`: {
                    let pdfValue2036 = value
                      .substring(selectionStart)
                      .match(/^[^\w]*\w*/);
                    pdfValue2036 && (pdfValue713 += pdfValue2036[0].length);
                    break;
                  }
                  case `deleteContentBackward`:
                    selectionStart === selectionEnd && --____pdfS;
                    break;
                  case `deleteContentForward`:
                    selectionStart === selectionEnd && (pdfValue713 += 1);
                    break;
                }
                (event.preventDefault(),
                  this.linkService.eventBus?.dispatch(
                    `dispatcheventinsandbox`,
                    {
                      source: this,
                      detail: {
                        id: pdfValue176,
                        name: `Keystroke`,
                        value: value,
                        change: ___pdfY || ``,
                        willCommit: !1,
                        selStart: ____pdfS,
                        selEnd: pdfValue713,
                      },
                    },
                  ));
              }),
            this._setEventListeners(
              __pdfY,
              pdfValue181,
              [
                [`focus`, `Focus`],
                [`blur`, `Blur`],
                [`mousedown`, `Mouse Down`],
                [`mouseenter`, `Mouse Enter`],
                [`mouseleave`, `Mouse Exit`],
                [`mouseup`, `Mouse Up`],
              ],
              (event) => event.target.value,
            ));
        }
        if (
          (___pdfS && __pdfY.addEventListener(`blur`, ___pdfS), this.data.comb)
        ) {
          let pdfValue1642 =
            (this.data.rect[2] - this.data.rect[0]) / pdfValue179;
          (__pdfY.classList.add(`comb`),
            (__pdfY.style.letterSpacing = `calc(${pdfValue1642}px * var(--total-scale-factor) - 1ch)`));
        }
      } else
        ((__pdfY = document.createElement(`div`)),
          (__pdfY.textContent = this.data.fieldValue),
          (__pdfY.style.verticalAlign = `middle`),
          (__pdfY.style.display = `table-cell`),
          this.data.hasOwnCanvas && (__pdfY.hidden = !0));
      return (
        this._setTextStyle(__pdfY),
        this._setBackgroundColor(__pdfY),
        this._setDefaultPropertiesFromJS(__pdfY),
        this.container.append(__pdfY),
        this.container
      );
    }
  },
  pdfValue135 = class extends pdfValue133 {
    constructor(pdfParam1400) {
      super(pdfParam1400, {
        isRenderable: !!pdfParam1400.data.hasOwnCanvas,
      });
    }
  },
  pdfValue136 = class extends pdfValue133 {
    constructor(pdfParam1502) {
      super(pdfParam1502, {
        isRenderable: pdfParam1502.renderForms,
      });
    }
    render() {
      let pdfValue286 = this.annotationStorage,
        pdfValue287 = this.data,
        __pdfY = pdfValue287.id,
        pdfValue288 = pdfValue286.getValue(__pdfY, {
          value: pdfValue287.exportValue === pdfValue287.fieldValue,
        }).value;
      (typeof pdfValue288 == `string` &&
        ((pdfValue288 = pdfValue288 !== `Off`),
        pdfValue286.setValue(__pdfY, {
          value: pdfValue288,
        })),
        this.container.classList.add(`buttonWidgetAnnotation`, `checkBox`));
      let pdfValue289 = document.createElement(`input`);
      return (
        pdfValue126.add(pdfValue289),
        pdfValue289.setAttribute(`data-element-id`, __pdfY),
        (pdfValue289.disabled = pdfValue287.readOnly),
        this._setRequired(pdfValue289, this.data.required),
        (pdfValue289.type = `checkbox`),
        (pdfValue289.name = pdfValue287.fieldName),
        pdfValue288 && pdfValue289.setAttribute(`checked`, !0),
        pdfValue289.setAttribute(`exportValue`, pdfValue287.exportValue),
        (pdfValue289.tabIndex = 0),
        pdfValue289.addEventListener(`change`, (event) => {
          let { name: name, checked: checked } = event.target;
          for (let pdfValue1622 of this._getElementsByName(name, __pdfY)) {
            let ___pdfY =
              checked && pdfValue1622.exportValue === pdfValue287.exportValue;
            (pdfValue1622.domElement &&
              (pdfValue1622.domElement.checked = ___pdfY),
              pdfValue286.setValue(pdfValue1622.id, {
                value: ___pdfY,
              }));
          }
          pdfValue286.setValue(__pdfY, {
            value: checked,
          });
        }),
        pdfValue289.addEventListener(`resetform`, (event) => {
          let ___pdfY = pdfValue287.defaultFieldValue || `Off`;
          event.target.checked = ___pdfY === pdfValue287.exportValue;
        }),
        this.enableScripting &&
          this.hasJSActions &&
          (pdfValue289.addEventListener(`updatefromsandbox`, (pdfParam912) => {
            this._dispatchEventFromSandbox(
              {
                value(event) {
                  ((event.target.checked = event.detail.value !== `Off`),
                    pdfValue286.setValue(__pdfY, {
                      value: event.target.checked,
                    }));
                },
              },
              pdfParam912,
            );
          }),
          this._setEventListeners(
            pdfValue289,
            null,
            [
              [`change`, `Validate`],
              [`change`, `Action`],
              [`focus`, `Focus`],
              [`blur`, `Blur`],
              [`mousedown`, `Mouse Down`],
              [`mouseenter`, `Mouse Enter`],
              [`mouseleave`, `Mouse Exit`],
              [`mouseup`, `Mouse Up`],
            ],
            (event) => event.target.checked,
          )),
        this._setBackgroundColor(pdfValue289),
        this._setDefaultPropertiesFromJS(pdfValue289),
        this.container.append(pdfValue289),
        this.container
      );
    }
  },
  pdfValue137 = class extends pdfValue133 {
    constructor(pdfParam1503) {
      super(pdfParam1503, {
        isRenderable: pdfParam1503.renderForms,
      });
    }
    render() {
      this.container.classList.add(`buttonWidgetAnnotation`, `radioButton`);
      let pdfValue272 = this.annotationStorage,
        pdfValue273 = this.data,
        __pdfY = pdfValue273.id,
        pdfValue274 = pdfValue272.getValue(__pdfY, {
          value: pdfValue273.fieldValue === pdfValue273.buttonValue,
        }).value;
      if (
        (typeof pdfValue274 == `string` &&
          ((pdfValue274 = pdfValue274 !== pdfValue273.buttonValue),
          pdfValue272.setValue(__pdfY, {
            value: pdfValue274,
          })),
        pdfValue274)
      )
        for (let pdfValue1964 of this._getElementsByName(
          pdfValue273.fieldName,
          __pdfY,
        ))
          pdfValue272.setValue(pdfValue1964.id, {
            value: !1,
          });
      let pdfValue275 = document.createElement(`input`);
      if (
        (pdfValue126.add(pdfValue275),
        pdfValue275.setAttribute(`data-element-id`, __pdfY),
        (pdfValue275.disabled = pdfValue273.readOnly),
        this._setRequired(pdfValue275, this.data.required),
        (pdfValue275.type = `radio`),
        (pdfValue275.name = pdfValue273.fieldName),
        pdfValue274 && pdfValue275.setAttribute(`checked`, !0),
        (pdfValue275.tabIndex = 0),
        pdfValue275.addEventListener(`change`, (event) => {
          let { name: name, checked: checked } = event.target;
          for (let pdfValue2021 of this._getElementsByName(name, __pdfY))
            pdfValue272.setValue(pdfValue2021.id, {
              value: !1,
            });
          pdfValue272.setValue(__pdfY, {
            value: checked,
          });
        }),
        pdfValue275.addEventListener(`resetform`, (event) => {
          let ___pdfY = pdfValue273.defaultFieldValue;
          event.target.checked =
            ___pdfY != null && ___pdfY === pdfValue273.buttonValue;
        }),
        this.enableScripting && this.hasJSActions)
      ) {
        let pdfValue793 = pdfValue273.buttonValue;
        (pdfValue275.addEventListener(`updatefromsandbox`, (pdfParam572) => {
          this._dispatchEventFromSandbox(
            {
              value: (event) => {
                let pdfValue1559 = pdfValue793 === event.detail.value;
                for (let pdfValue1662 of this._getElementsByName(
                  event.target.name,
                )) {
                  let pdfValue1926 = pdfValue1559 && pdfValue1662.id === __pdfY;
                  (pdfValue1662.domElement &&
                    (pdfValue1662.domElement.checked = pdfValue1926),
                    pdfValue272.setValue(pdfValue1662.id, {
                      value: pdfValue1926,
                    }));
                }
              },
            },
            pdfParam572,
          );
        }),
          this._setEventListeners(
            pdfValue275,
            null,
            [
              [`change`, `Validate`],
              [`change`, `Action`],
              [`focus`, `Focus`],
              [`blur`, `Blur`],
              [`mousedown`, `Mouse Down`],
              [`mouseenter`, `Mouse Enter`],
              [`mouseleave`, `Mouse Exit`],
              [`mouseup`, `Mouse Up`],
            ],
            (event) => event.target.checked,
          ));
      }
      return (
        this._setBackgroundColor(pdfValue275),
        this._setDefaultPropertiesFromJS(pdfValue275),
        this.container.append(pdfValue275),
        this.container
      );
    }
  },
  pdfValue138 = class extends pdfValue131 {
    constructor(pdfParam1405) {
      super(pdfParam1405, {
        ignoreBorder: pdfParam1405.data.hasAppearance,
      });
    }
    render() {
      let pdfValue1204 = super.render();
      pdfValue1204.classList.add(`buttonWidgetAnnotation`, `pushButton`);
      let pdfValue1205 = pdfValue1204.lastChild;
      return (
        this.enableScripting &&
          this.hasJSActions &&
          pdfValue1205 &&
          (this._setDefaultPropertiesFromJS(pdfValue1205),
          pdfValue1205.addEventListener(`updatefromsandbox`, (pdfParam1602) => {
            this._dispatchEventFromSandbox({}, pdfParam1602);
          })),
        pdfValue1204
      );
    }
  },
  pdfValue139 = class extends pdfValue133 {
    constructor(pdfParam1504) {
      super(pdfParam1504, {
        isRenderable: pdfParam1504.renderForms,
      });
    }
    render() {
      this.container.classList.add(`choiceWidgetAnnotation`);
      let pdfValue182 = this.annotationStorage,
        pdfValue183 = this.data.id,
        __pdfY = pdfValue182.getValue(pdfValue183, {
          value: this.data.fieldValue,
        }),
        pdfValue184 = document.createElement(`select`);
      (pdfValue126.add(pdfValue184),
        pdfValue184.setAttribute(`data-element-id`, pdfValue183),
        (pdfValue184.disabled = this.data.readOnly),
        this._setRequired(pdfValue184, this.data.required),
        (pdfValue184.name = this.data.fieldName),
        (pdfValue184.tabIndex = 0));
      let pdfValue185 = this.data.combo && this.data.options.length > 0;
      (this.data.combo ||
        ((pdfValue184.size = this.data.options.length),
        this.data.multiSelect && (pdfValue184.multiple = !0)),
        pdfValue184.addEventListener(`resetform`, (pdfParam1214) => {
          let pdfValue1937 = this.data.defaultFieldValue;
          for (let pdfValue2186 of pdfValue184.options)
            pdfValue2186.selected = pdfValue2186.value === pdfValue1937;
        }));
      for (let pdfValue1442 of this.data.options) {
        let pdfValue1536 = document.createElement(`option`);
        ((pdfValue1536.textContent = pdfValue1442.displayValue),
          (pdfValue1536.value = pdfValue1442.exportValue),
          __pdfY.value.includes(pdfValue1442.exportValue) &&
            (pdfValue1536.setAttribute(`selected`, !0), (pdfValue185 = !1)),
          pdfValue184.append(pdfValue1536));
      }
      let pdfValue186 = null;
      if (pdfValue185) {
        let pdfValue1417 = document.createElement(`option`);
        ((pdfValue1417.value = ` `),
          pdfValue1417.setAttribute(`hidden`, !0),
          pdfValue1417.setAttribute(`selected`, !0),
          pdfValue184.prepend(pdfValue1417),
          (pdfValue186 = () => {
            (pdfValue1417.remove(),
              pdfValue184.removeEventListener(`input`, pdfValue186),
              (pdfValue186 = null));
          }),
          pdfValue184.addEventListener(`input`, pdfValue186));
      }
      let pdfValue187 = (pdfParam663) => {
          let pdfValue1533 = pdfParam663 ? `value` : `textContent`,
            { options: ___pdfY, multiple: multiple } = pdfValue184;
          return multiple
            ? Array.prototype.filter
                .call(___pdfY, (pdfParam1754) => pdfParam1754.selected)
                .map((item) => item[pdfValue1533])
            : ___pdfY.selectedIndex === -1
              ? null
              : ___pdfY[___pdfY.selectedIndex][pdfValue1533];
        },
        pdfValue188 = pdfValue187(!1),
        __pdfS = (event) => {
          let pdfValue1759 = event.target.options;
          return Array.prototype.map.call(pdfValue1759, (pdfParam1505) => ({
            displayValue: pdfParam1505.textContent,
            exportValue: pdfParam1505.value,
          }));
        };
      return (
        this.enableScripting && this.hasJSActions
          ? (pdfValue184.addEventListener(`updatefromsandbox`, (___pdfY) => {
              this._dispatchEventFromSandbox(
                {
                  value(____pdfY) {
                    pdfValue186?.();
                    let pdfValue1602 = ____pdfY.detail.value,
                      ___pdfS = new Set(
                        Array.isArray(pdfValue1602)
                          ? pdfValue1602
                          : [pdfValue1602],
                      );
                    for (let pdfValue2168 of pdfValue184.options)
                      pdfValue2168.selected = ___pdfS.has(pdfValue2168.value);
                    (pdfValue182.setValue(pdfValue183, {
                      value: pdfValue187(!0),
                    }),
                      (pdfValue188 = pdfValue187(!1)));
                  },
                  multipleSelection(pdfParam1659) {
                    pdfValue184.multiple = !0;
                  },
                  remove(____pdfY) {
                    let pdfValue1440 = pdfValue184.options,
                      pdfValue1441 = ____pdfY.detail.remove;
                    ((pdfValue1440[pdfValue1441].selected = !1),
                      pdfValue184.remove(pdfValue1441),
                      pdfValue1440.length > 0 &&
                        Array.prototype.findIndex.call(
                          pdfValue1440,
                          (pdfParam1755) => pdfParam1755.selected,
                        ) === -1 &&
                        (pdfValue1440[0].selected = !0),
                      pdfValue182.setValue(pdfValue183, {
                        value: pdfValue187(!0),
                        items: __pdfS(____pdfY),
                      }),
                      (pdfValue188 = pdfValue187(!1)));
                  },
                  clear(____pdfY) {
                    for (; pdfValue184.length !== 0; ) pdfValue184.remove(0);
                    (pdfValue182.setValue(pdfValue183, {
                      value: null,
                      items: [],
                    }),
                      (pdfValue188 = pdfValue187(!1)));
                  },
                  insert(____pdfY) {
                    let {
                        index: index,
                        displayValue: displayValue,
                        exportValue: exportValue,
                      } = ____pdfY.detail.insert,
                      __pdfI = pdfValue184.children[index],
                      __pdfR = document.createElement(`option`);
                    ((__pdfR.textContent = displayValue),
                      (__pdfR.value = exportValue),
                      __pdfI
                        ? __pdfI.before(__pdfR)
                        : pdfValue184.append(__pdfR),
                      pdfValue182.setValue(pdfValue183, {
                        value: pdfValue187(!0),
                        items: __pdfS(____pdfY),
                      }),
                      (pdfValue188 = pdfValue187(!1)));
                  },
                  items(____pdfY) {
                    let { items: items } = ____pdfY.detail;
                    for (; pdfValue184.length !== 0; ) pdfValue184.remove(0);
                    for (let pdfValue1715 of items) {
                      let {
                          displayValue: displayValue,
                          exportValue: _____pdfY,
                        } = pdfValue1715,
                        pdfValue1784 = document.createElement(`option`);
                      ((pdfValue1784.textContent = displayValue),
                        (pdfValue1784.value = _____pdfY),
                        pdfValue184.append(pdfValue1784));
                    }
                    (pdfValue184.options.length > 0 &&
                      (pdfValue184.options[0].selected = !0),
                      pdfValue182.setValue(pdfValue183, {
                        value: pdfValue187(!0),
                        items: __pdfS(____pdfY),
                      }),
                      (pdfValue188 = pdfValue187(!1)));
                  },
                  indices(____pdfY) {
                    let pdfValue1670 = new Set(____pdfY.detail.indices);
                    for (let pdfValue2129 of ____pdfY.target.options)
                      pdfValue2129.selected = pdfValue1670.has(
                        pdfValue2129.index,
                      );
                    (pdfValue182.setValue(pdfValue183, {
                      value: pdfValue187(!0),
                    }),
                      (pdfValue188 = pdfValue187(!1)));
                  },
                  editable(event) {
                    event.target.disabled = !event.detail.editable;
                  },
                },
                ___pdfY,
              );
            }),
            pdfValue184.addEventListener(`input`, (___pdfY) => {
              let pdfValue1345 = pdfValue187(!0),
                pdfValue1346 = pdfValue187(!1);
              (pdfValue182.setValue(pdfValue183, {
                value: pdfValue1345,
              }),
                ___pdfY.preventDefault(),
                this.linkService.eventBus?.dispatch(`dispatcheventinsandbox`, {
                  source: this,
                  detail: {
                    id: pdfValue183,
                    name: `Keystroke`,
                    value: pdfValue188,
                    change: pdfValue1346,
                    changeEx: pdfValue1345,
                    willCommit: !1,
                    commitKey: 1,
                    keyDown: !1,
                  },
                }));
            }),
            this._setEventListeners(
              pdfValue184,
              null,
              [
                [`focus`, `Focus`],
                [`blur`, `Blur`],
                [`mousedown`, `Mouse Down`],
                [`mouseenter`, `Mouse Enter`],
                [`mouseleave`, `Mouse Exit`],
                [`mouseup`, `Mouse Up`],
                [`input`, `Action`],
                [`input`, `Validate`],
              ],
              (event) => event.target.value,
            ))
          : pdfValue184.addEventListener(`input`, function (___pdfY) {
              pdfValue182.setValue(pdfValue183, {
                value: pdfValue187(!0),
              });
            }),
        this.data.combo && this._setTextStyle(pdfValue184),
        this._setBackgroundColor(pdfValue184),
        this._setDefaultPropertiesFromJS(pdfValue184),
        this.container.append(pdfValue184),
        this.container
      );
    }
  },
  pdfValue140 = class extends pdfValue129 {
    constructor(pdfParam538) {
      let { data: data, elements: __pdfY, parent: parent } = pdfParam538,
        pdfValue1361 = !!parent._commentManager;
      if (
        (super(pdfParam538, {
          isRenderable: !pdfValue1361 && pdfValue129._hasPopupData(data),
        }),
        (this.elements = __pdfY),
        pdfValue1361 && pdfValue129._hasPopupData(data))
      ) {
        let pdfValue2139 = (this.popup = this.#e());
        for (let pdfValue2250 of __pdfY) pdfValue2250.popup = pdfValue2139;
      } else this.popup = null;
    }
    #e() {
      return new pdfValue141({
        container: this.container,
        color: this.data.color,
        titleObj: this.data.titleObj,
        modificationDate: this.data.modificationDate || this.data.creationDate,
        contentsObj: this.data.contentsObj,
        richText: this.data.richText,
        rect: this.data.rect,
        parentRect: this.data.parentRect || null,
        parent: this.parent,
        elements: this.elements,
        open: this.data.open,
        commentManager: this.parent._commentManager,
      });
    }
    render() {
      let { container: container } = this;
      (container.classList.add(`popupAnnotation`),
        (container.role = `comment`));
      let pdfValue1075 = (this.popup = this.#e()),
        __pdfY = [];
      for (let pdfValue1785 of this.elements)
        ((pdfValue1785.popup = pdfValue1075),
          (pdfValue1785.container.ariaHasPopup = `dialog`),
          __pdfY.push(pdfValue1785.data.id),
          pdfValue1785.addHighlightArea());
      return (
        this.container.setAttribute(
          `aria-controls`,
          __pdfY.map((item) => `${pdfValue18}${item}`).join(`,`),
        ),
        this.container
      );
    }
  },
  pdfValue141 = class {
    #e = null;
    #t = this.#P.bind(this);
    #n = this.#R.bind(this);
    #r = this.#L.bind(this);
    #i = this.#I.bind(this);
    #a = null;
    #o = null;
    #s = null;
    #c = null;
    #l = null;
    #u = null;
    #d = null;
    #f = !1;
    #p = null;
    #m = null;
    #h = null;
    #g = null;
    #_ = null;
    #v = null;
    #y = null;
    #b = null;
    #x = null;
    #S = null;
    #C = !1;
    #w = null;
    #T = null;
    constructor({
      container: container,
      color: color,
      elements: __pdfY,
      titleObj: titleObj,
      modificationDate: modificationDate,
      contentsObj: contentsObj,
      richText: richText,
      parent: parent,
      rect: __pdfS,
      parentRect: parentRect,
      open: __pdfI,
      commentManager: __pdfR = null,
    }) {
      ((this.#o = container),
        (this.#x = titleObj),
        (this.#s = contentsObj),
        (this.#b = richText),
        (this.#u = parent),
        (this.#a = color),
        (this.#y = __pdfS),
        (this.#d = parentRect),
        (this.#l = __pdfY),
        (this.#e = __pdfR),
        (this.#w = __pdfY[0]),
        (this.#c = _pdfY.toDateObject(modificationDate)),
        (this.trigger = __pdfY.flatMap((item) =>
          item.getElementsToTriggerPopup(),
        )),
        __pdfR
          ? this.renderCommentButton()
          : (this.#E(), (this.#o.hidden = !0), __pdfI && this.#I()));
    }
    #E() {
      if (this.#m) return;
      this.#m = new AbortController();
      let { signal: signal } = this.#m;
      for (let pdfValue1413 of this.trigger)
        (pdfValue1413.addEventListener(`click`, this.#i, {
          signal: signal,
        }),
          pdfValue1413.addEventListener(`pointerenter`, this.#r, {
            signal: signal,
          }),
          pdfValue1413.addEventListener(`pointerleave`, this.#n, {
            signal: signal,
          }),
          pdfValue1413.classList.add(`popupTriggerArea`));
      for (let pdfValue1965 of this.#l)
        pdfValue1965.container?.addEventListener(`keydown`, this.#t, {
          signal: signal,
        });
    }
    #D() {
      let pdfValue1828 = this.#l.find((item) => item.hasCommentButton);
      pdfValue1828 &&
        (this.#_ = pdfValue1828._normalizePoint(
          pdfValue1828.commentButtonPosition,
        ));
    }
    renderCommentButton() {
      if (this.#g || (this.#_ || this.#D(), !this.#_)) return;
      let { signal: signal } = (this.#m = new AbortController()),
        pdfValue379 = !!this.#w.extraPopupElement,
        __pdfY = () => {
          this.#e.toggleCommentPopup(this, !0, void 0, !pdfValue379);
        },
        pdfValue380 = () => {
          this.#e.toggleCommentPopup(this, !1, !0, !pdfValue379);
        },
        pdfValue381 = () => {
          this.#e.toggleCommentPopup(this, !1, !1);
        };
      if (pdfValue379) {
        this.#g = this.#w.container;
        for (let pdfValue1155 of this.trigger)
          ((pdfValue1155.ariaHasPopup = `dialog`),
            (pdfValue1155.ariaControls = `commentPopup`),
            pdfValue1155.addEventListener(`keydown`, this.#t, {
              signal: signal,
            }),
            pdfValue1155.addEventListener(`click`, __pdfY, {
              signal: signal,
            }),
            pdfValue1155.addEventListener(`pointerenter`, pdfValue380, {
              signal: signal,
            }),
            pdfValue1155.addEventListener(`pointerleave`, pdfValue381, {
              signal: signal,
            }),
            pdfValue1155.classList.add(`popupTriggerArea`));
      } else {
        let pdfValue809 = (this.#g = document.createElement(`button`));
        pdfValue809.className = `annotationCommentButton`;
        let pdfValue810 = this.#w.container;
        ((pdfValue809.style.zIndex = pdfValue810.style.zIndex + 1),
          (pdfValue809.tabIndex = 0),
          (pdfValue809.ariaHasPopup = `dialog`),
          (pdfValue809.ariaControls = `commentPopup`),
          pdfValue809.setAttribute(`data-l10n-id`, `pdfjs-show-comment-button`),
          this.#k(),
          this.#O(),
          pdfValue809.addEventListener(`keydown`, this.#t, {
            signal: signal,
          }),
          pdfValue809.addEventListener(`click`, __pdfY, {
            signal: signal,
          }),
          pdfValue809.addEventListener(`pointerenter`, pdfValue380, {
            signal: signal,
          }),
          pdfValue809.addEventListener(`pointerleave`, pdfValue381, {
            signal: signal,
          }),
          pdfValue810.after(pdfValue809));
      }
    }
    #O() {
      if (this.#w.extraPopupElement && !this.#w.editor) return;
      this.renderCommentButton();
      let [pdfValue1493, pdfValue1494] = this.#_,
        { style: __pdfY } = this.#g;
      ((__pdfY.left = `calc(${pdfValue1493}%)`),
        (__pdfY.top = `calc(${pdfValue1494}% - var(--comment-button-dim))`));
    }
    #k() {
      this.#w.extraPopupElement ||
        (this.renderCommentButton(),
        (this.#g.style.backgroundColor = this.commentButtonColor || ``));
    }
    get commentButtonColor() {
      let { color: color, opacity: opacity } = this.#w.commentData;
      return color
        ? this.#u._commentManager.makeCommentColor(color, opacity)
        : null;
    }
    focusCommentButton() {
      setTimeout(() => {
        this.#g?.focus();
      }, 0);
    }
    getData() {
      let {
        richText: richText,
        color: color,
        opacity: __pdfY,
        creationDate: creationDate,
        modificationDate: modificationDate,
      } = this.#w.commentData;
      return {
        contentsObj: {
          str: this.comment,
        },
        richText: richText,
        color: color,
        opacity: __pdfY,
        creationDate: creationDate,
        modificationDate: modificationDate,
      };
    }
    get elementBeforePopup() {
      return this.#g;
    }
    get comment() {
      return ((this.#T ||= this.#w.commentText), this.#T);
    }
    set comment(pdfParam1353) {
      pdfParam1353 !== this.comment &&
        (this.#w.commentText = this.#T = pdfParam1353);
    }
    get parentBoundingClientRect() {
      return this.#w.layer.getBoundingClientRect();
    }
    setCommentButtonStates({ selected: selected, hasPopup: hasPopup }) {
      this.#g &&
        (this.#g.classList.toggle(`selected`, selected),
        (this.#g.ariaExpanded = hasPopup));
    }
    setSelectedCommentButton(pdfParam1343) {
      this.#g.classList.toggle(`selected`, pdfParam1343);
    }
    get commentPopupPosition() {
      if (this.#v) return this.#v;
      let { x: x, y: y, height: __pdfY } = this.#g.getBoundingClientRect(),
        {
          x: _x,
          y: _y,
          width: width,
          height: height,
        } = this.#w.layer.getBoundingClientRect();
      return [(x - _x) / width, (y + __pdfY - _y) / height];
    }
    set commentPopupPosition(pdfParam1622) {
      this.#v = pdfParam1622;
    }
    hasDefaultPopupPosition() {
      return this.#v === null;
    }
    get commentButtonPosition() {
      return this.#_;
    }
    get commentButtonWidth() {
      return (
        this.#g.getBoundingClientRect().width /
        this.parentBoundingClientRect.width
      );
    }
    editComment(pdfParam593) {
      let [pdfValue1443, __pdfY] =
          this.#v || this.commentButtonPosition.map((item) => item / 100),
        pdfValue1444 = this.parentBoundingClientRect,
        { x: x, y: y, width: width, height: height } = pdfValue1444;
      this.#e.showDialog(
        null,
        this,
        x + pdfValue1443 * width,
        y + __pdfY * height,
        {
          ...pdfParam593,
          parentDimensions: pdfValue1444,
        },
      );
    }
    render() {
      if (this.#p) return;
      let pdfValue536 = (this.#p = document.createElement(`div`));
      if (((pdfValue536.className = `popup`), this.#a)) {
        let pdfValue1748 = (pdfValue536.style.outlineColor = pdfA.makeHexColor(
          ...this.#a,
        ));
        pdfValue536.style.backgroundColor = `color-mix(in srgb, ${pdfValue1748} 30%, white)`;
      }
      let pdfValue537 = document.createElement(`span`);
      if (((pdfValue537.className = `header`), this.#x?.str)) {
        let pdfValue1796 = document.createElement(`span`);
        ((pdfValue1796.className = `title`),
          pdfValue537.append(pdfValue1796),
          ({ dir: pdfValue1796.dir, str: pdfValue1796.textContent } = this.#x));
      }
      if ((pdfValue536.append(pdfValue537), this.#c)) {
        let pdfValue1305 = document.createElement(`time`);
        ((pdfValue1305.className = `popupDate`),
          pdfValue1305.setAttribute(
            `data-l10n-id`,
            `pdfjs-annotation-date-time-string`,
          ),
          pdfValue1305.setAttribute(
            `data-l10n-args`,
            JSON.stringify({
              dateObj: this.#c.valueOf(),
            }),
          ),
          (pdfValue1305.dateTime = this.#c.toISOString()),
          pdfValue537.append(pdfValue1305));
      }
      (_pdfX(
        {
          html: this.#A || this.#s.str,
          dir: this.#s?.dir,
          className: `popupContent`,
        },
        pdfValue536,
      ),
        this.#o.append(pdfValue536));
    }
    get #A() {
      let pdfValue1892 = this.#b,
        pdfValue1893 = this.#s;
      return (
        (pdfValue1892?.str &&
          (!pdfValue1893?.str || pdfValue1893.str === pdfValue1892.str) &&
          this.#b.html) ||
        null
      );
    }
    get #j() {
      return this.#A?.attributes?.style?.fontSize || 0;
    }
    get #M() {
      return this.#A?.attributes?.style?.color || null;
    }
    #N(pdfParam466) {
      let pdfValue1223 = [],
        __pdfY = {
          str: pdfParam466,
          html: {
            name: `div`,
            attributes: {
              dir: `auto`,
            },
            children: [
              {
                name: `p`,
                children: pdfValue1223,
              },
            ],
          },
        },
        pdfValue1224 = {
          style: {
            color: this.#M,
            fontSize: this.#j
              ? `calc(${this.#j}px * var(--total-scale-factor))`
              : ``,
          },
        };
      for (let ___pdfY of pdfParam466.split(`
`))
        pdfValue1223.push({
          name: `span`,
          value: ___pdfY,
          attributes: pdfValue1224,
        });
      return __pdfY;
    }
    #P(event) {
      event.altKey ||
        event.shiftKey ||
        event.ctrlKey ||
        event.metaKey ||
        ((event.key === `Enter` || (event.key === `Escape` && this.#f)) &&
          this.#I());
    }
    updateEdited({ rect: rect, popup: popup, deleted: __pdfY }) {
      if (this.#e) {
        (__pdfY
          ? (this.remove(), (this.#T = null))
          : popup &&
            (popup.deleted
              ? this.remove()
              : (this.#k(), (this.#T = popup.text))),
          rect && ((this.#_ = null), this.#D(), this.#O()));
        return;
      }
      if (__pdfY || popup?.deleted) {
        this.remove();
        return;
      }
      (this.#E(),
        (this.#S ||= {
          contentsObj: this.#s,
          richText: this.#b,
        }),
        rect && (this.#h = null),
        popup &&
          popup.text &&
          ((this.#b = this.#N(popup.text)),
          (this.#c = _pdfY.toDateObject(popup.date)),
          (this.#s = null)),
        this.#p?.remove(),
        (this.#p = null));
    }
    resetEdited() {
      this.#S &&
        (({ contentsObj: this.#s, richText: this.#b } = this.#S),
        (this.#S = null),
        this.#p?.remove(),
        (this.#p = null),
        (this.#h = null));
    }
    remove() {
      if (
        (this.#m?.abort(),
        (this.#m = null),
        this.#p?.remove(),
        (this.#p = null),
        (this.#C = !1),
        (this.#f = !1),
        this.#g?.remove(),
        (this.#g = null),
        this.trigger)
      )
        for (let pdfValue2062 of this.trigger)
          pdfValue2062.classList.remove(`popupTriggerArea`);
    }
    #F() {
      if (this.#h !== null) return;
      let {
          page: { view: view },
          viewport: {
            rawDims: {
              pageWidth: pageWidth,
              pageHeight: __pdfY,
              pageX: pageX,
              pageY: pageY,
            },
          },
        } = this.#u,
        pdfValue878 = !!this.#d,
        pdfValue879 = pdfValue878 ? this.#d : this.#y;
      for (let pdfValue1911 of this.#l)
        if (
          !pdfValue879 ||
          pdfA.intersect(pdfValue1911.data.rect, pdfValue879) !== null
        ) {
          ((pdfValue879 = pdfValue1911.data.rect), (pdfValue878 = !0));
          break;
        }
      let pdfValue880 = pdfA.normalizeRect([
          pdfValue879[0],
          view[3] - pdfValue879[1] + view[1],
          pdfValue879[2],
          view[3] - pdfValue879[3] + view[1],
        ]),
        __pdfS = pdfValue878 ? pdfValue879[2] - pdfValue879[0] + 5 : 0,
        pdfValue881 = pdfValue880[0] + __pdfS,
        __pdfI = pdfValue880[1];
      this.#h = [
        (100 * (pdfValue881 - pageX)) / pageWidth,
        (100 * (__pdfI - pageY)) / __pdfY,
      ];
      let { style: __pdfR } = this.#o;
      ((__pdfR.left = `${this.#h[0]}%`), (__pdfR.top = `${this.#h[1]}%`));
    }
    #I() {
      if (this.#e) {
        this.#e.toggleCommentPopup(this, !1);
        return;
      }
      ((this.#f = !this.#f),
        this.#f
          ? (this.#L(),
            this.#o.addEventListener(`click`, this.#i),
            this.#o.addEventListener(`keydown`, this.#t))
          : (this.#R(),
            this.#o.removeEventListener(`click`, this.#i),
            this.#o.removeEventListener(`keydown`, this.#t)));
    }
    #L() {
      (this.#p || this.render(),
        this.isVisible
          ? this.#f && this.#o.classList.add(`focused`)
          : (this.#F(),
            (this.#o.hidden = !1),
            (this.#o.style.zIndex = parseInt(this.#o.style.zIndex) + 1e3)));
    }
    #R() {
      (this.#o.classList.remove(`focused`),
        !(this.#f || !this.isVisible) &&
          ((this.#o.hidden = !0),
          (this.#o.style.zIndex = parseInt(this.#o.style.zIndex) - 1e3)));
    }
    forceHide() {
      ((this.#C = this.isVisible), this.#C && (this.#o.hidden = !0));
    }
    maybeShow() {
      this.#e ||
        (this.#E(),
        this.#C &&
          (this.#p || this.#L(), (this.#C = !1), (this.#o.hidden = !1)));
    }
    get isVisible() {
      return this.#e ? !1 : this.#o.hidden === !1;
    }
  },
  pdfValue142 = class extends pdfValue129 {
    constructor(pdfParam684) {
      (super(pdfParam684, {
        isRenderable: !0,
        ignoreBorder: !0,
      }),
        (this.textContent = pdfParam684.data.textContent),
        (this.textPosition = pdfParam684.data.textPosition),
        (this.annotationEditorType = pdfI.FREETEXT));
    }
    render() {
      if (
        (this.container.classList.add(`freeTextAnnotation`), this.textContent)
      ) {
        let pdfValue1364 = document.createElement(`div`);
        (pdfValue1364.classList.add(`annotationTextContent`),
          pdfValue1364.setAttribute(`role`, `comment`));
        for (let pdfValue1863 of this.textContent) {
          let __pdfY = document.createElement(`span`);
          ((__pdfY.textContent = pdfValue1863), pdfValue1364.append(__pdfY));
        }
        this.container.append(pdfValue1364);
      }
      return (
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this._editOnDoubleClick(),
        this.container
      );
    }
  },
  pdfValue143 = class extends pdfValue129 {
    #e = null;
    constructor(pdfParam1438) {
      super(pdfParam1438, {
        isRenderable: !0,
        ignoreBorder: !0,
      });
    }
    render() {
      this.container.classList.add(`lineAnnotation`);
      let { data: data, width: width, height: __pdfY } = this,
        pdfValue677 = this.svgFactory.create(width, __pdfY, !0),
        pdfValue678 = (this.#e = this.svgFactory.createElement(`svg:line`));
      return (
        pdfValue678.setAttribute(`x1`, data.rect[2] - data.lineCoordinates[0]),
        pdfValue678.setAttribute(`y1`, data.rect[3] - data.lineCoordinates[1]),
        pdfValue678.setAttribute(`x2`, data.rect[2] - data.lineCoordinates[2]),
        pdfValue678.setAttribute(`y2`, data.rect[3] - data.lineCoordinates[3]),
        pdfValue678.setAttribute(`stroke-width`, data.borderStyle.width || 1),
        pdfValue678.setAttribute(`stroke`, `transparent`),
        pdfValue678.setAttribute(`fill`, `transparent`),
        pdfValue677.append(pdfValue678),
        this.container.append(pdfValue677),
        !data.popupRef && this.hasPopupData && this._createPopup(),
        this.container
      );
    }
    getElementsToTriggerPopup() {
      return this.#e;
    }
    addHighlightArea() {
      this.container.classList.add(`highlightArea`);
    }
  },
  pdfValue144 = class extends pdfValue129 {
    #e = null;
    constructor(pdfParam1439) {
      super(pdfParam1439, {
        isRenderable: !0,
        ignoreBorder: !0,
      });
    }
    render() {
      this.container.classList.add(`squareAnnotation`);
      let { data: data, width: width, height: __pdfY } = this,
        pdfValue764 = this.svgFactory.create(width, __pdfY, !0),
        pdfValue765 = data.borderStyle.width,
        pdfValue766 = (this.#e = this.svgFactory.createElement(`svg:rect`));
      return (
        pdfValue766.setAttribute(`x`, pdfValue765 / 2),
        pdfValue766.setAttribute(`y`, pdfValue765 / 2),
        pdfValue766.setAttribute(`width`, width - pdfValue765),
        pdfValue766.setAttribute(`height`, __pdfY - pdfValue765),
        pdfValue766.setAttribute(`stroke-width`, pdfValue765 || 1),
        pdfValue766.setAttribute(`stroke`, `transparent`),
        pdfValue766.setAttribute(`fill`, `transparent`),
        pdfValue764.append(pdfValue766),
        this.container.append(pdfValue764),
        !data.popupRef && this.hasPopupData && this._createPopup(),
        this.container
      );
    }
    getElementsToTriggerPopup() {
      return this.#e;
    }
    addHighlightArea() {
      this.container.classList.add(`highlightArea`);
    }
  },
  pdfValue145 = class extends pdfValue129 {
    #e = null;
    constructor(pdfParam1440) {
      super(pdfParam1440, {
        isRenderable: !0,
        ignoreBorder: !0,
      });
    }
    render() {
      this.container.classList.add(`circleAnnotation`);
      let { data: data, width: width, height: __pdfY } = this,
        pdfValue759 = this.svgFactory.create(width, __pdfY, !0),
        pdfValue760 = data.borderStyle.width,
        pdfValue761 = (this.#e = this.svgFactory.createElement(`svg:ellipse`));
      return (
        pdfValue761.setAttribute(`cx`, width / 2),
        pdfValue761.setAttribute(`cy`, __pdfY / 2),
        pdfValue761.setAttribute(`rx`, width / 2 - pdfValue760 / 2),
        pdfValue761.setAttribute(`ry`, __pdfY / 2 - pdfValue760 / 2),
        pdfValue761.setAttribute(`stroke-width`, pdfValue760 || 1),
        pdfValue761.setAttribute(`stroke`, `transparent`),
        pdfValue761.setAttribute(`fill`, `transparent`),
        pdfValue759.append(pdfValue761),
        this.container.append(pdfValue759),
        !data.popupRef && this.hasPopupData && this._createPopup(),
        this.container
      );
    }
    getElementsToTriggerPopup() {
      return this.#e;
    }
    addHighlightArea() {
      this.container.classList.add(`highlightArea`);
    }
  },
  pdfValue146 = class extends pdfValue129 {
    #e = null;
    constructor(pdfParam849) {
      (super(pdfParam849, {
        isRenderable: !0,
        ignoreBorder: !0,
      }),
        (this.containerClassName = `polylineAnnotation`),
        (this.svgElementName = `svg:polyline`));
    }
    render() {
      this.container.classList.add(this.containerClassName);
      let {
        data: {
          rect: rect,
          vertices: vertices,
          borderStyle: __pdfY,
          popupRef: popupRef,
        },
        width: width,
        height: height,
      } = this;
      if (!vertices) return this.container;
      let pdfValue679 = this.svgFactory.create(width, height, !0),
        pdfValue680 = [];
      for (
        let ___pdfY = 0, pdfValue1944 = vertices.length;
        ___pdfY < pdfValue1944;
        ___pdfY += 2
      ) {
        let pdfValue2158 = vertices[___pdfY] - rect[0],
          pdfValue2159 = rect[3] - vertices[___pdfY + 1];
        pdfValue680.push(`${pdfValue2158},${pdfValue2159}`);
      }
      pdfValue680 = pdfValue680.join(` `);
      let __pdfS = (this.#e = this.svgFactory.createElement(
        this.svgElementName,
      ));
      return (
        __pdfS.setAttribute(`points`, pdfValue680),
        __pdfS.setAttribute(`stroke-width`, __pdfY.width || 1),
        __pdfS.setAttribute(`stroke`, `transparent`),
        __pdfS.setAttribute(`fill`, `transparent`),
        pdfValue679.append(__pdfS),
        this.container.append(pdfValue679),
        !popupRef && this.hasPopupData && this._createPopup(),
        this.container
      );
    }
    getElementsToTriggerPopup() {
      return this.#e;
    }
    addHighlightArea() {
      this.container.classList.add(`highlightArea`);
    }
  },
  $r = class extends pdfValue146 {
    constructor(pdfParam1078) {
      (super(pdfParam1078),
        (this.containerClassName = `polygonAnnotation`),
        (this.svgElementName = `svg:polygon`));
    }
  },
  pdfValue147 = class extends pdfValue129 {
    constructor(pdfParam1441) {
      super(pdfParam1441, {
        isRenderable: !0,
        ignoreBorder: !0,
      });
    }
    render() {
      return (
        this.container.classList.add(`caretAnnotation`),
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this.container
      );
    }
  },
  pdfValue148 = class extends pdfValue129 {
    #e = null;
    #t = [];
    constructor(pdfParam583) {
      (super(pdfParam583, {
        isRenderable: !0,
        ignoreBorder: !0,
      }),
        (this.containerClassName = `inkAnnotation`),
        (this.svgElementName = `svg:polyline`),
        (this.annotationEditorType =
          this.data.it === `InkHighlight` ? pdfI.HIGHLIGHT : pdfI.INK));
    }
    #n(pdfParam280, pdfParam281) {
      switch (pdfParam280) {
        case 90:
          return {
            transform: `rotate(90) translate(${-pdfParam281[0]},${pdfParam281[1]}) scale(1,-1)`,
            width: pdfParam281[3] - pdfParam281[1],
            height: pdfParam281[2] - pdfParam281[0],
          };
        case 180:
          return {
            transform: `rotate(180) translate(${-pdfParam281[2]},${pdfParam281[1]}) scale(1,-1)`,
            width: pdfParam281[2] - pdfParam281[0],
            height: pdfParam281[3] - pdfParam281[1],
          };
        case 270:
          return {
            transform: `rotate(270) translate(${-pdfParam281[2]},${pdfParam281[3]}) scale(1,-1)`,
            width: pdfParam281[3] - pdfParam281[1],
            height: pdfParam281[2] - pdfParam281[0],
          };
        default:
          return {
            transform: `translate(${-pdfParam281[0]},${pdfParam281[3]}) scale(1,-1)`,
            width: pdfParam281[2] - pdfParam281[0],
            height: pdfParam281[3] - pdfParam281[1],
          };
      }
    }
    render() {
      this.container.classList.add(this.containerClassName);
      let {
          data: {
            rect: rect,
            rotation: rotation,
            inkLists: __pdfY,
            borderStyle: borderStyle,
            popupRef: popupRef,
          },
        } = this,
        {
          transform: transform,
          width: width,
          height: height,
        } = this.#n(rotation, rect),
        __pdfS = this.svgFactory.create(width, height, !0),
        pdfValue505 = (this.#e = this.svgFactory.createElement(`svg:g`));
      (__pdfS.append(pdfValue505),
        pdfValue505.setAttribute(`stroke-width`, borderStyle.width || 1),
        pdfValue505.setAttribute(`stroke-linecap`, `round`),
        pdfValue505.setAttribute(`stroke-linejoin`, `round`),
        pdfValue505.setAttribute(`stroke-miterlimit`, 10),
        pdfValue505.setAttribute(`stroke`, `transparent`),
        pdfValue505.setAttribute(`fill`, `transparent`),
        pdfValue505.setAttribute(`transform`, transform));
      for (
        let pdfValue1596 = 0, pdfValue1597 = __pdfY.length;
        pdfValue1596 < pdfValue1597;
        pdfValue1596++
      ) {
        let pdfValue1708 = this.svgFactory.createElement(this.svgElementName);
        (this.#t.push(pdfValue1708),
          pdfValue1708.setAttribute(`points`, __pdfY[pdfValue1596].join(`,`)),
          pdfValue505.append(pdfValue1708));
      }
      return (
        !popupRef && this.hasPopupData && this._createPopup(),
        this.container.append(__pdfS),
        this._editOnDoubleClick(),
        this.container
      );
    }
    updateEdited(pdfParam338) {
      super.updateEdited(pdfParam338);
      let { thickness: thickness, points: __pdfY, rect: rect } = pdfParam338,
        pdfValue990 = this.#e;
      if (
        (thickness >= 0 &&
          pdfValue990.setAttribute(`stroke-width`, thickness || 1),
        __pdfY)
      )
        for (
          let pdfValue1920 = 0, pdfValue1921 = this.#t.length;
          pdfValue1920 < pdfValue1921;
          pdfValue1920++
        )
          this.#t[pdfValue1920].setAttribute(
            `points`,
            __pdfY[pdfValue1920].join(`,`),
          );
      if (rect) {
        let {
          transform: transform,
          width: width,
          height: ___pdfY,
        } = this.#n(this.data.rotation, rect);
        (pdfValue990.parentElement.setAttribute(
          `viewBox`,
          `0 0 ${width} ${___pdfY}`,
        ),
          pdfValue990.setAttribute(`transform`, transform));
      }
    }
    getElementsToTriggerPopup() {
      return this.#t;
    }
    addHighlightArea() {
      this.container.classList.add(`highlightArea`);
    }
  },
  pdfValue149 = class extends pdfValue129 {
    constructor(pdfParam940) {
      (super(pdfParam940, {
        isRenderable: !0,
        ignoreBorder: !0,
        createQuadrilaterals: !0,
      }),
        (this.annotationEditorType = pdfI.HIGHLIGHT));
    }
    render() {
      let {
        data: { overlaidText: overlaidText, popupRef: popupRef },
      } = this;
      if (
        (!popupRef && this.hasPopupData && this._createPopup(),
        this.container.classList.add(`highlightAnnotation`),
        this._editOnDoubleClick(),
        overlaidText)
      ) {
        let pdfValue1775 = document.createElement(`mark`);
        (pdfValue1775.classList.add(`overlaidText`),
          (pdfValue1775.textContent = overlaidText),
          this.container.append(pdfValue1775));
      }
      return this.container;
    }
  },
  pdfValue150 = class extends pdfValue129 {
    constructor(pdfParam1230) {
      super(pdfParam1230, {
        isRenderable: !0,
        ignoreBorder: !0,
        createQuadrilaterals: !0,
      });
    }
    render() {
      let {
        data: { overlaidText: overlaidText, popupRef: popupRef },
      } = this;
      if (
        (!popupRef && this.hasPopupData && this._createPopup(),
        this.container.classList.add(`underlineAnnotation`),
        overlaidText)
      ) {
        let pdfValue1797 = document.createElement(`u`);
        (pdfValue1797.classList.add(`overlaidText`),
          (pdfValue1797.textContent = overlaidText),
          this.container.append(pdfValue1797));
      }
      return this.container;
    }
  },
  pdfValue151 = class extends pdfValue129 {
    constructor(pdfParam1231) {
      super(pdfParam1231, {
        isRenderable: !0,
        ignoreBorder: !0,
        createQuadrilaterals: !0,
      });
    }
    render() {
      let {
        data: { overlaidText: overlaidText, popupRef: popupRef },
      } = this;
      if (
        (!popupRef && this.hasPopupData && this._createPopup(),
        this.container.classList.add(`squigglyAnnotation`),
        overlaidText)
      ) {
        let pdfValue1798 = document.createElement(`u`);
        (pdfValue1798.classList.add(`overlaidText`),
          (pdfValue1798.textContent = overlaidText),
          this.container.append(pdfValue1798));
      }
      return this.container;
    }
  },
  pdfValue152 = class extends pdfValue129 {
    constructor(pdfParam1232) {
      super(pdfParam1232, {
        isRenderable: !0,
        ignoreBorder: !0,
        createQuadrilaterals: !0,
      });
    }
    render() {
      let {
        data: { overlaidText: overlaidText, popupRef: popupRef },
      } = this;
      if (
        (!popupRef && this.hasPopupData && this._createPopup(),
        this.container.classList.add(`strikeoutAnnotation`),
        overlaidText)
      ) {
        let pdfValue1799 = document.createElement(`s`);
        (pdfValue1799.classList.add(`overlaidText`),
          (pdfValue1799.textContent = overlaidText),
          this.container.append(pdfValue1799));
      }
      return this.container;
    }
  },
  pdfValue153 = class extends pdfValue129 {
    constructor(pdfParam1145) {
      (super(pdfParam1145, {
        isRenderable: !0,
        ignoreBorder: !0,
      }),
        (this.annotationEditorType = pdfI.STAMP));
    }
    render() {
      return (
        this.container.classList.add(`stampAnnotation`),
        this.container.setAttribute(`role`, `img`),
        !this.data.popupRef && this.hasPopupData && this._createPopup(),
        this._editOnDoubleClick(),
        this.container
      );
    }
  },
  pdfValue154 = class extends pdfValue129 {
    #e = null;
    constructor(pdfParam610) {
      super(pdfParam610, {
        isRenderable: !0,
      });
      let { file: file } = this.data;
      ((this.filename = file.filename),
        (this.content = file.content),
        this.linkService.eventBus?.dispatch(`fileattachmentannotation`, {
          source: this,
          ...file,
        }));
    }
    render() {
      this.container.classList.add(`fileAttachmentAnnotation`);
      let { container: container, data: data } = this,
        __pdfY;
      (data.hasAppearance || data.fillAlpha === 0
        ? (__pdfY = document.createElement(`div`))
        : ((__pdfY = document.createElement(`img`)),
          (__pdfY.src = `${this.imageResourcesPath}annotation-${/paperclip/i.test(data.name) ? `paperclip` : `pushpin`}.svg`),
          data.fillAlpha &&
            data.fillAlpha < 1 &&
            (__pdfY.style = `filter: opacity(${Math.round(data.fillAlpha * 100)}%);`)),
        __pdfY.addEventListener(`dblclick`, this.#t.bind(this)),
        (this.#e = __pdfY));
      let { isMac: isMac } = pdfTt.platform;
      return (
        container.addEventListener(`keydown`, (event) => {
          event.key === `Enter` &&
            (isMac ? event.metaKey : event.ctrlKey) &&
            this.#t();
        }),
        !data.popupRef && this.hasPopupData
          ? this._createPopup()
          : __pdfY.classList.add(`popupTriggerArea`),
        container.append(__pdfY),
        container
      );
    }
    getElementsToTriggerPopup() {
      return this.#e;
    }
    addHighlightArea() {
      this.container.classList.add(`highlightArea`);
    }
    #t() {
      this.downloadManager?.openOrDownloadData(this.content, this.filename);
    }
  },
  _pdfO = class PdfClass17 {
    #e = null;
    #t = null;
    #n = null;
    #r = new Map();
    #i = null;
    #a = null;
    constructor({
      div: div,
      accessibilityManager: accessibilityManager,
      annotationCanvasMap: __pdfY,
      annotationEditorUIManager: annotationEditorUIManager,
      page: page,
      viewport: viewport,
      structTreeLayer: structTreeLayer,
      commentManager: commentManager,
      linkService: __pdfS,
      annotationStorage: annotationStorage,
    }) {
      ((this.div = div),
        (this.#e = accessibilityManager),
        (this.#t = __pdfY),
        (this.#i = structTreeLayer || null),
        (this.#a = __pdfS || null),
        (this.#n = annotationStorage || new pdfValue38()),
        (this.page = page),
        (this.viewport = viewport),
        (this.zIndex = 0),
        (this._annotationEditorUIManager = annotationEditorUIManager),
        (this._commentManager = commentManager || null));
    }
    hasEditableAnnotations() {
      return this.#r.size > 0;
    }
    async #o(pdfParam540, pdfParam541, __pdfY) {
      let pdfValue1365 = pdfParam540.firstChild || pdfParam540,
        pdfValue1366 = (pdfValue1365.id = `${pdfValue18}${pdfParam541}`),
        pdfValue1367 = await this.#i?.getAriaAttributes(pdfValue1366);
      if (pdfValue1367)
        for (let [pdfValue2225, pdfValue2226] of pdfValue1367)
          pdfValue1365.setAttribute(pdfValue2225, pdfValue2226);
      __pdfY
        ? __pdfY.at(-1).container.after(pdfParam540)
        : (this.div.append(pdfParam540),
          this.#e?.moveElementInDOM(this.div, pdfParam540, pdfValue1365, !1));
    }
    async render(pdfParam63) {
      let { annotations: annotations } = pdfParam63,
        __pdfY = this.div;
      _pdfZ(__pdfY, this.viewport);
      let pdfValue412 = new Map(),
        pdfValue413 = {
          data: null,
          layer: __pdfY,
          linkService: this.#a,
          downloadManager: pdfParam63.downloadManager,
          imageResourcesPath: pdfParam63.imageResourcesPath || ``,
          renderForms: pdfParam63.renderForms !== !1,
          svgFactory: new _pdfD(),
          annotationStorage: this.#n,
          enableComment: pdfParam63.enableComment === !0,
          enableScripting: pdfParam63.enableScripting === !0,
          hasJSActions: pdfParam63.hasJSActions,
          fieldObjects: pdfParam63.fieldObjects,
          parent: this,
          elements: null,
        };
      for (let pdfValue728 of annotations) {
        if (pdfValue728.noHTML) continue;
        let pdfValue754 = pdfValue728.annotationType === pdfC.POPUP;
        if (pdfValue754) {
          let pdfValue2174 = pdfValue412.get(pdfValue728.id);
          if (!pdfValue2174) continue;
          pdfValue413.elements = pdfValue2174;
        } else if (
          pdfValue728.rect[2] === pdfValue728.rect[0] ||
          pdfValue728.rect[3] === pdfValue728.rect[1]
        )
          continue;
        pdfValue413.data = pdfValue728;
        let ___pdfY = pdfValue128.create(pdfValue413);
        if (!___pdfY.isRenderable) continue;
        if (!pdfValue754 && pdfValue728.popupRef) {
          let pdfValue2101 = pdfValue412.get(pdfValue728.popupRef);
          pdfValue2101
            ? pdfValue2101.push(___pdfY)
            : pdfValue412.set(pdfValue728.popupRef, [___pdfY]);
        }
        let pdfValue755 = ___pdfY.render();
        (pdfValue728.hidden && (pdfValue755.style.visibility = `hidden`),
          await this.#o(pdfValue755, pdfValue728.id, pdfValue413.elements),
          ___pdfY.extraPopupElement?.popup?.renderCommentButton(),
          ___pdfY._isEditable &&
            (this.#r.set(___pdfY.data.id, ___pdfY),
            this._annotationEditorUIManager?.renderAnnotationElement(___pdfY)));
      }
      this.#s();
    }
    async addLinkAnnotations(pdfParam487) {
      let __pdfY = {
        data: null,
        layer: this.div,
        linkService: this.#a,
        svgFactory: new _pdfD(),
        parent: this,
      };
      for (let pdfValue1604 of pdfParam487) {
        ((pdfValue1604.borderStyle ||= PdfClass17._defaultBorderStyle),
          (__pdfY.data = pdfValue1604));
        let pdfValue1655 = pdfValue128.create(__pdfY);
        if (!pdfValue1655.isRenderable) continue;
        let pdfValue1656 = pdfValue1655.render();
        await this.#o(pdfValue1656, pdfValue1604.id, null);
      }
    }
    update({ viewport: viewport }) {
      let pdfValue1833 = this.div;
      ((this.viewport = viewport),
        _pdfZ(pdfValue1833, {
          rotation: viewport.rotation,
        }),
        this.#s(),
        (pdfValue1833.hidden = !1));
    }
    #s() {
      if (!this.#t) return;
      let pdfValue865 = this.div;
      for (let [pdfValue972, __pdfY] of this.#t) {
        let pdfValue994 = pdfValue865.querySelector(
          `[data-annotation-id="${pdfValue972}"]`,
        );
        if (!pdfValue994) continue;
        __pdfY.className = `annotationContent`;
        let { firstChild: firstChild } = pdfValue994;
        firstChild
          ? firstChild.nodeName === `CANVAS`
            ? firstChild.replaceWith(__pdfY)
            : firstChild.classList.contains(`annotationContent`)
              ? firstChild.after(__pdfY)
              : firstChild.before(__pdfY)
          : pdfValue994.append(__pdfY);
        let pdfValue995 = this.#r.get(pdfValue972);
        pdfValue995 &&
          (pdfValue995._hasNoCanvas
            ? (this._annotationEditorUIManager?.setMissingCanvas(
                pdfValue972,
                pdfValue994.id,
                __pdfY,
              ),
              (pdfValue995._hasNoCanvas = !1))
            : (pdfValue995.canvas = __pdfY));
      }
      this.#t.clear();
    }
    getEditableAnnotations() {
      return Array.from(this.#r.values());
    }
    getEditableAnnotation(pdfParam1553) {
      return this.#r.get(pdfParam1553);
    }
    addFakeAnnotation(pdfParam379) {
      let { div: div } = this,
        { id: __pdfY, rotation: rotation } = pdfParam379,
        pdfValue1086 = new pdfValue130({
          data: {
            id: __pdfY,
            rect: pdfParam379.getPDFRect(),
            rotation: rotation,
          },
          editor: pdfParam379,
          layer: div,
          parent: this,
          enableComment: !!this._commentManager,
          linkService: this.#a,
          annotationStorage: this.#n,
        }),
        pdfValue1087 = pdfValue1086.render();
      return (
        div.append(pdfValue1087),
        this.#e?.moveElementInDOM(div, pdfValue1087, pdfValue1087, !1),
        pdfValue1086.createOrUpdatePopup(),
        pdfValue1086
      );
    }
    static get _defaultBorderStyle() {
      return pdfQ(
        this,
        `_defaultBorderStyle`,
        Object.freeze({
          width: 1,
          rawWidth: 1,
          style: pdfValue8.SOLID,
          dashArray: [3],
          horizontalCornerRadius: 0,
          verticalCornerRadius: 0,
        }),
      );
    }
  },
  pdfValue155 = /\r\n?|\n/g,
  ui = class PdfClass5 extends pdfValue31 {
    #e = ``;
    #t = `${this.id}-editor`;
    #n = null;
    #r;
    _colorPicker = null;
    static _freeTextDefaultContent = ``;
    static _internalPadding = 0;
    static _defaultColor = null;
    static _defaultFontSize = 10;
    static get _keyboardManager() {
      let pdfValue465 = PdfClass5.prototype,
        __pdfY = (pdfParam1753) => pdfParam1753.isEmpty(),
        pdfValue466 = _pdfA.TRANSLATE_SMALL,
        pdfValue467 = _pdfA.TRANSLATE_BIG;
      return pdfQ(
        this,
        `_keyboardManager`,
        new pdfValue28([
          [
            [`ctrl+s`, `mac+meta+s`, `ctrl+p`, `mac+meta+p`],
            pdfValue465.commitOrRemove,
            {
              bubbles: !0,
            },
          ],
          [
            [`ctrl+Enter`, `mac+meta+Enter`, `Escape`, `mac+Escape`],
            pdfValue465.commitOrRemove,
          ],
          [
            [`ArrowLeft`, `mac+ArrowLeft`],
            pdfValue465._translateEmpty,
            {
              args: [-pdfValue466, 0],
              checker: __pdfY,
            },
          ],
          [
            [`ctrl+ArrowLeft`, `mac+shift+ArrowLeft`],
            pdfValue465._translateEmpty,
            {
              args: [-pdfValue467, 0],
              checker: __pdfY,
            },
          ],
          [
            [`ArrowRight`, `mac+ArrowRight`],
            pdfValue465._translateEmpty,
            {
              args: [pdfValue466, 0],
              checker: __pdfY,
            },
          ],
          [
            [`ctrl+ArrowRight`, `mac+shift+ArrowRight`],
            pdfValue465._translateEmpty,
            {
              args: [pdfValue467, 0],
              checker: __pdfY,
            },
          ],
          [
            [`ArrowUp`, `mac+ArrowUp`],
            pdfValue465._translateEmpty,
            {
              args: [0, -pdfValue466],
              checker: __pdfY,
            },
          ],
          [
            [`ctrl+ArrowUp`, `mac+shift+ArrowUp`],
            pdfValue465._translateEmpty,
            {
              args: [0, -pdfValue467],
              checker: __pdfY,
            },
          ],
          [
            [`ArrowDown`, `mac+ArrowDown`],
            pdfValue465._translateEmpty,
            {
              args: [0, pdfValue466],
              checker: __pdfY,
            },
          ],
          [
            [`ctrl+ArrowDown`, `mac+shift+ArrowDown`],
            pdfValue465._translateEmpty,
            {
              args: [0, pdfValue467],
              checker: __pdfY,
            },
          ],
        ]),
      );
    }
    static _type = `freetext`;
    static _editorType = pdfI.FREETEXT;
    constructor(pdfParam532) {
      (super({
        ...pdfParam532,
        name: `freeTextEditor`,
      }),
        (this.color =
          pdfParam532.color ||
          PdfClass5._defaultColor ||
          pdfValue31._defaultLineColor),
        (this.#r = pdfParam532.fontSize || PdfClass5._defaultFontSize),
        this.annotationElementId ||
          this._uiManager.a11yAlert(`pdfjs-editor-freetext-added-alert`));
    }
    static initialize(pdfParam709, pdfParam710) {
      pdfValue31.initialize(pdfParam709, pdfParam710);
      let __pdfY = getComputedStyle(document.documentElement);
      this._internalPadding = parseFloat(
        __pdfY.getPropertyValue(`--freetext-padding`),
      );
    }
    static updateDefaultParams(pdfParam861, __pdfY) {
      switch (pdfParam861) {
        case pdfR.FREETEXT_SIZE:
          PdfClass5._defaultFontSize = __pdfY;
          break;
        case pdfR.FREETEXT_COLOR:
          PdfClass5._defaultColor = __pdfY;
          break;
      }
    }
    updateParams(pdfParam1034, pdfParam1035) {
      switch (pdfParam1034) {
        case pdfR.FREETEXT_SIZE:
          this.#i(pdfParam1035);
          break;
        case pdfR.FREETEXT_COLOR:
          this.#a(pdfParam1035);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [pdfR.FREETEXT_SIZE, PdfClass5._defaultFontSize],
        [
          pdfR.FREETEXT_COLOR,
          PdfClass5._defaultColor || pdfValue31._defaultLineColor,
        ],
      ];
    }
    get propertiesToUpdate() {
      return [
        [pdfR.FREETEXT_SIZE, this.#r],
        [pdfR.FREETEXT_COLOR, this.color],
      ];
    }
    get toolbarButtons() {
      return (
        (this._colorPicker ||= new pdfValue122(this)),
        [[`colorPicker`, this._colorPicker]]
      );
    }
    get colorType() {
      return pdfR.FREETEXT_COLOR;
    }
    #i(pdfParam353) {
      let pdfValue1036 = (pdfParam810) => {
          ((this.editorDiv.style.fontSize = `calc(${pdfParam810}px * var(--total-scale-factor))`),
            this.translate(0, -(pdfParam810 - this.#r) * this.parentScale),
            (this.#r = pdfParam810),
            this.#s());
        },
        __pdfY = this.#r;
      this.addCommands({
        cmd: pdfValue1036.bind(this, pdfParam353),
        undo: pdfValue1036.bind(this, __pdfY),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: pdfR.FREETEXT_SIZE,
        overwriteIfSameType: !0,
        keepUndo: !0,
      });
    }
    onUpdatedColor() {
      ((this.editorDiv.style.color = this.color),
        this._colorPicker?.update(this.color),
        super.onUpdatedColor());
    }
    #a(pdfParam511) {
      let pdfValue1313 = (pdfParam1618) => {
          ((this.color = pdfParam1618), this.onUpdatedColor());
        },
        __pdfY = this.color;
      this.addCommands({
        cmd: pdfValue1313.bind(this, pdfParam511),
        undo: pdfValue1313.bind(this, __pdfY),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: pdfR.FREETEXT_COLOR,
        overwriteIfSameType: !0,
        keepUndo: !0,
      });
    }
    _translateEmpty(pdfParam1321, pdfParam1322) {
      this._uiManager.translateSelectedEditors(pdfParam1321, pdfParam1322, !0);
    }
    getInitialTranslation() {
      let pdfValue1792 = this.parentScale;
      return [
        -PdfClass5._internalPadding * pdfValue1792,
        -(PdfClass5._internalPadding + this.#r) * pdfValue1792,
      ];
    }
    rebuild() {
      this.parent &&
        (super.rebuild(),
        this.div !== null && (this.isAttachedToDOM || this.parent.add(this)));
    }
    enableEditMode() {
      if (!super.enableEditMode()) return !1;
      (this.overlayDiv.classList.remove(`enabled`),
        (this.editorDiv.contentEditable = !0),
        (this._isDraggable = !1),
        this.div.removeAttribute(`aria-activedescendant`),
        (this.#n = new AbortController()));
      let pdfValue576 = this._uiManager.combinedSignal(this.#n);
      return (
        this.editorDiv.addEventListener(
          `keydown`,
          this.editorDivKeydown.bind(this),
          {
            signal: pdfValue576,
          },
        ),
        this.editorDiv.addEventListener(
          `focus`,
          this.editorDivFocus.bind(this),
          {
            signal: pdfValue576,
          },
        ),
        this.editorDiv.addEventListener(`blur`, this.editorDivBlur.bind(this), {
          signal: pdfValue576,
        }),
        this.editorDiv.addEventListener(
          `input`,
          this.editorDivInput.bind(this),
          {
            signal: pdfValue576,
          },
        ),
        this.editorDiv.addEventListener(
          `paste`,
          this.editorDivPaste.bind(this),
          {
            signal: pdfValue576,
          },
        ),
        !0
      );
    }
    disableEditMode() {
      return super.disableEditMode()
        ? (this.overlayDiv.classList.add(`enabled`),
          (this.editorDiv.contentEditable = !1),
          this.div.setAttribute(`aria-activedescendant`, this.#t),
          (this._isDraggable = !0),
          this.#n?.abort(),
          (this.#n = null),
          this.div.focus({
            preventScroll: !0,
          }),
          (this.isEditing = !1),
          this.parent.div.classList.add(`freetextEditing`),
          !0)
        : !1;
    }
    focusin(event) {
      this._focusEventsAllowed &&
        (super.focusin(event),
        event.target !== this.editorDiv && this.editorDiv.focus());
    }
    onceAdded(pdfParam794) {
      this.width ||
        (this.enableEditMode(),
        pdfParam794 && this.editorDiv.focus(),
        this._initialOptions?.isCentered && this.center(),
        (this._initialOptions = null));
    }
    isEmpty() {
      return !this.editorDiv || this.editorDiv.innerText.trim() === ``;
    }
    remove() {
      ((this.isEditing = !1),
        this.parent &&
          (this.parent.setEditingState(!0),
          this.parent.div.classList.add(`freetextEditing`)),
        super.remove());
    }
    #o() {
      let pdfValue1516 = [];
      this.editorDiv.normalize();
      let __pdfY = null;
      for (let pdfValue1786 of this.editorDiv.childNodes)
        (__pdfY?.nodeType === Node.TEXT_NODE &&
          pdfValue1786.nodeName === `BR`) ||
          (pdfValue1516.push(PdfClass5.#c(pdfValue1786)),
          (__pdfY = pdfValue1786));
      return pdfValue1516.join(`
`);
    }
    #s() {
      let [pdfValue801, pdfValue802] = this.parentDimensions,
        __pdfY;
      if (this.isAttachedToDOM) __pdfY = this.div.getBoundingClientRect();
      else {
        let { currentLayer: currentLayer, div: div } = this,
          pdfValue1316 = div.style.display,
          pdfValue1317 = div.classList.contains(`hidden`);
        (div.classList.remove(`hidden`),
          (div.style.display = `hidden`),
          currentLayer.div.append(this.div),
          (__pdfY = div.getBoundingClientRect()),
          div.remove(),
          (div.style.display = pdfValue1316),
          div.classList.toggle(`hidden`, pdfValue1317));
      }
      (this.rotation % 180 == this.parentRotation % 180
        ? ((this.width = __pdfY.width / pdfValue801),
          (this.height = __pdfY.height / pdfValue802))
        : ((this.width = __pdfY.height / pdfValue801),
          (this.height = __pdfY.width / pdfValue802)),
        this.fixAndSetPosition());
    }
    commit() {
      if (!this.isInEditMode()) return;
      (super.commit(), this.disableEditMode());
      let pdfValue1116 = this.#e,
        pdfValue1117 = (this.#e = this.#o().trimEnd());
      if (pdfValue1116 === pdfValue1117) return;
      let __pdfY = (pdfParam1146) => {
        if (((this.#e = pdfParam1146), !pdfParam1146)) {
          this.remove();
          return;
        }
        (this.#l(), this._uiManager.rebuild(this), this.#s());
      };
      (this.addCommands({
        cmd: () => {
          __pdfY(pdfValue1117);
        },
        undo: () => {
          __pdfY(pdfValue1116);
        },
        mustExec: !1,
      }),
        this.#s());
    }
    shouldGetKeyboardEvents() {
      return this.isInEditMode();
    }
    enterInEditMode() {
      (this.enableEditMode(), this.editorDiv.focus());
    }
    keydown(event) {
      event.target === this.div &&
        event.key === `Enter` &&
        (this.enterInEditMode(), event.preventDefault());
    }
    editorDivKeydown(pdfParam1512) {
      PdfClass5._keyboardManager.exec(this, pdfParam1512);
    }
    editorDivFocus(pdfParam1648) {
      this.isEditing = !0;
    }
    editorDivBlur(pdfParam1660) {
      this.isEditing = !1;
    }
    editorDivInput(pdfParam1206) {
      this.parent.div.classList.toggle(`freetextEditing`, this.isEmpty());
    }
    disableEditing() {
      (this.editorDiv.setAttribute(`role`, `comment`),
        this.editorDiv.removeAttribute(`aria-multiline`));
    }
    enableEditing() {
      (this.editorDiv.setAttribute(`role`, `textbox`),
        this.editorDiv.setAttribute(`aria-multiline`, !0));
    }
    get canChangeContent() {
      return !0;
    }
    render() {
      if (this.div) return this.div;
      let pdfValue284, pdfValue285;
      ((this._isCopy || this.annotationElementId) &&
        ((pdfValue284 = this.x), (pdfValue285 = this.y)),
        super.render(),
        (this.editorDiv = document.createElement(`div`)),
        (this.editorDiv.className = `internal`),
        this.editorDiv.setAttribute(`id`, this.#t),
        this.editorDiv.setAttribute(`data-l10n-id`, `pdfjs-free-text2`),
        this.editorDiv.setAttribute(`data-l10n-attrs`, `default-content`),
        this.enableEditing(),
        (this.editorDiv.contentEditable = !0));
      let { style: __pdfY } = this.editorDiv;
      if (
        ((__pdfY.fontSize = `calc(${this.#r}px * var(--total-scale-factor))`),
        (__pdfY.color = this.color),
        this.div.append(this.editorDiv),
        (this.overlayDiv = document.createElement(`div`)),
        this.overlayDiv.classList.add(`overlay`, `enabled`),
        this.div.append(this.overlayDiv),
        this._isCopy || this.annotationElementId)
      ) {
        let [___pdfY, pdfValue638] = this.parentDimensions;
        if (this.annotationElementId) {
          let { position: position } = this._initialData,
            [pdfValue811, pdfValue812] = this.getInitialTranslation();
          [pdfValue811, pdfValue812] = this.pageTranslationToScreen(
            pdfValue811,
            pdfValue812,
          );
          let [pdfValue813, __pdfS] = this.pageDimensions,
            [pdfValue814, __pdfI] = this.pageTranslation,
            __pdfR,
            ___pdfS;
          switch (this.rotation) {
            case 0:
              ((__pdfR =
                pdfValue284 + (position[0] - pdfValue814) / pdfValue813),
                (___pdfS =
                  pdfValue285 + this.height - (position[1] - __pdfI) / __pdfS));
              break;
            case 90:
              ((__pdfR =
                pdfValue284 + (position[0] - pdfValue814) / pdfValue813),
                (___pdfS = pdfValue285 - (position[1] - __pdfI) / __pdfS),
                ([pdfValue811, pdfValue812] = [pdfValue812, -pdfValue811]));
              break;
            case 180:
              ((__pdfR =
                pdfValue284 -
                this.width +
                (position[0] - pdfValue814) / pdfValue813),
                (___pdfS = pdfValue285 - (position[1] - __pdfI) / __pdfS),
                ([pdfValue811, pdfValue812] = [-pdfValue811, -pdfValue812]));
              break;
            case 270:
              ((__pdfR =
                pdfValue284 +
                (position[0] - pdfValue814 - this.height * __pdfS) /
                  pdfValue813),
                (___pdfS =
                  pdfValue285 +
                  (position[1] - __pdfI - this.width * pdfValue813) / __pdfS),
                ([pdfValue811, pdfValue812] = [-pdfValue812, pdfValue811]));
              break;
          }
          this.setAt(
            __pdfR * ___pdfY,
            ___pdfS * pdfValue638,
            pdfValue811,
            pdfValue812,
          );
        } else this._moveAfterPaste(pdfValue284, pdfValue285);
        (this.#l(),
          (this._isDraggable = !0),
          (this.editorDiv.contentEditable = !1));
      } else ((this._isDraggable = !1), (this.editorDiv.contentEditable = !0));
      return this.div;
    }
    static #c(pdfParam1167) {
      return (
        pdfParam1167.nodeType === Node.TEXT_NODE
          ? pdfParam1167.nodeValue
          : pdfParam1167.innerText
      ).replaceAll(pdfValue155, ``);
    }
    editorDivPaste(event) {
      let __pdfY = event.clipboardData || window.clipboardData,
        { types: types } = __pdfY;
      if (types.length === 1 && types[0] === `text/plain`) return;
      event.preventDefault();
      let pdfValue359 = PdfClass5.#d(__pdfY.getData(`text`) || ``).replaceAll(
        pdfValue155,
        `
`,
      );
      if (!pdfValue359) return;
      let pdfValue360 = window.getSelection();
      if (!pdfValue360.rangeCount) return;
      (this.editorDiv.normalize(), pdfValue360.deleteFromDocument());
      let pdfValue361 = pdfValue360.getRangeAt(0);
      if (
        !pdfValue359.includes(`
`)
      ) {
        (pdfValue361.insertNode(document.createTextNode(pdfValue359)),
          this.editorDiv.normalize(),
          pdfValue360.collapseToStart());
        return;
      }
      let { startContainer: startContainer, startOffset: __pdfS } = pdfValue361,
        pdfValue362 = [],
        __pdfI = [];
      if (startContainer.nodeType === Node.TEXT_NODE) {
        let pdfValue1368 = startContainer.parentElement;
        if (
          (__pdfI.push(
            startContainer.nodeValue.slice(__pdfS).replaceAll(pdfValue155, ``),
          ),
          pdfValue1368 !== this.editorDiv)
        ) {
          let ___pdfY = pdfValue362;
          for (let pdfValue1969 of this.editorDiv.childNodes) {
            if (pdfValue1969 === pdfValue1368) {
              ___pdfY = __pdfI;
              continue;
            }
            ___pdfY.push(PdfClass5.#c(pdfValue1969));
          }
        }
        pdfValue362.push(
          startContainer.nodeValue.slice(0, __pdfS).replaceAll(pdfValue155, ``),
        );
      } else if (startContainer === this.editorDiv) {
        let pdfValue1945 = pdfValue362,
          ___pdfY = 0;
        for (let pdfValue2029 of this.editorDiv.childNodes)
          (___pdfY++ === __pdfS && (pdfValue1945 = __pdfI),
            pdfValue1945.push(PdfClass5.#c(pdfValue2029)));
      }
      ((this.#e = `${pdfValue362.join(`
`)}${pdfValue359}${__pdfI.join(`
`)}`),
        this.#l());
      let __pdfR = new Range(),
        ___pdfS = Math.sumPrecise(pdfValue362.map((item) => item.length));
      for (let { firstChild: firstChild } of this.editorDiv.childNodes)
        if (firstChild.nodeType === Node.TEXT_NODE) {
          let pdfValue1984 = firstChild.nodeValue.length;
          if (___pdfS <= pdfValue1984) {
            (__pdfR.setStart(firstChild, ___pdfS),
              __pdfR.setEnd(firstChild, ___pdfS));
            break;
          }
          ___pdfS -= pdfValue1984;
        }
      (pdfValue360.removeAllRanges(), pdfValue360.addRange(__pdfR));
    }
    #l() {
      if ((this.editorDiv.replaceChildren(), this.#e))
        for (let pdfValue1581 of this.#e.split(`
`)) {
          let pdfValue1690 = document.createElement(`div`);
          (pdfValue1690.append(
            pdfValue1581
              ? document.createTextNode(pdfValue1581)
              : document.createElement(`br`),
          ),
            this.editorDiv.append(pdfValue1690));
        }
    }
    #u() {
      return this.#e.replaceAll(`\xA0`, ` `);
    }
    static #d(pdfParam1577) {
      return pdfParam1577.replaceAll(` `, `\xA0`);
    }
    get contentDiv() {
      return this.editorDiv;
    }
    getPDFRect() {
      let pdfValue1966 = PdfClass5._internalPadding * this.parentScale;
      return this.getRect(pdfValue1966, pdfValue1966);
    }
    static async deserialize(pdfParam137, __pdfY, pdfParam138) {
      let pdfValue566 = null;
      if (pdfParam137 instanceof pdfValue142) {
        let {
          data: {
            defaultAppearanceData: { fontSize: fontSize, fontColor: ___pdfY },
            rect: rect,
            rotation: rotation,
            id: id,
            popupRef: popupRef,
            richText: __pdfS,
            contentsObj: contentsObj,
            creationDate: __pdfR,
            modificationDate: ___pdfS,
          },
          textContent: textContent,
          textPosition: _pdfNt,
          parent: {
            page: { pageNumber: __pdfC },
          },
        } = pdfParam137;
        if (!textContent || textContent.length === 0) return null;
        pdfValue566 = pdfParam137 = {
          annotationType: pdfI.FREETEXT,
          color: Array.from(___pdfY),
          fontSize: fontSize,
          value: textContent.join(`
`),
          position: _pdfNt,
          pageIndex: __pdfC - 1,
          rect: rect.slice(0),
          rotation: rotation,
          annotationElementId: id,
          id: id,
          deleted: !1,
          popupRef: popupRef,
          comment: contentsObj?.str || null,
          richText: __pdfS,
          creationDate: __pdfR,
          modificationDate: ___pdfS,
        };
      }
      let pdfValue567 = await super.deserialize(
        pdfParam137,
        __pdfY,
        pdfParam138,
      );
      return (
        (pdfValue567.#r = pdfParam137.fontSize),
        (pdfValue567.color = pdfA.makeHexColor(...pdfParam137.color)),
        (pdfValue567.#e = PdfClass5.#d(pdfParam137.value)),
        (pdfValue567._initialData = pdfValue566),
        pdfParam137.comment && pdfValue567.setCommentData(pdfParam137),
        pdfValue567
      );
    }
    serialize(pdfParam329 = !1) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      let pdfValue970 = pdfValue31._colorManager.convert(
          this.isAttachedToDOM
            ? getComputedStyle(this.editorDiv).color
            : this.color,
        ),
        __pdfY = Object.assign(super.serialize(pdfParam329), {
          color: pdfValue970,
          fontSize: this.#r,
          value: this.#u(),
        });
      return (
        this.addComment(__pdfY),
        pdfParam329
          ? ((__pdfY.isCopy = !0), __pdfY)
          : this.annotationElementId && !this.#f(__pdfY)
            ? null
            : ((__pdfY.id = this.annotationElementId), __pdfY)
      );
    }
    #f(pdfParam613) {
      let {
        value: value,
        fontSize: __pdfY,
        color: color,
        pageIndex: pageIndex,
      } = this._initialData;
      return (
        this.hasEditedComment ||
        this._hasBeenMoved ||
        pdfParam613.value !== value ||
        pdfParam613.fontSize !== __pdfY ||
        pdfParam613.color.some((item, index) => item !== color[index]) ||
        pdfParam613.pageIndex !== pageIndex
      );
    }
    renderAnnotationElement(pdfParam262) {
      let pdfValue806 = super.renderAnnotationElement(pdfParam262);
      if (!pdfValue806) return null;
      let { style: __pdfY } = pdfValue806;
      ((__pdfY.fontSize = `calc(${this.#r}px * var(--total-scale-factor))`),
        (__pdfY.color = this.color),
        pdfValue806.replaceChildren());
      for (let pdfValue1620 of this.#e.split(`
`)) {
        let ___pdfY = document.createElement(`div`);
        (___pdfY.append(
          pdfValue1620
            ? document.createTextNode(pdfValue1620)
            : document.createElement(`br`),
        ),
          pdfValue806.append(___pdfY));
      }
      return (
        pdfParam262.updateEdited({
          rect: this.getPDFRect(),
          popup:
            this._uiManager.hasCommentManager() || this.hasEditedComment
              ? this.comment
              : {
                  text: this.#e,
                },
        }),
        pdfValue806
      );
    }
    resetAnnotationElement(pdfParam1290) {
      (super.resetAnnotationElement(pdfParam1290), pdfParam1290.resetEdited());
    }
  },
  $ = class {
    static PRECISION = 1e-4;
    toSVGPath() {
      pdfHelper5("Abstract method `toSVGPath` must be implemented.");
    }
    get box() {
      pdfHelper5("Abstract getter `box` must be implemented.");
    }
    serialize(pdfParam1333, pdfParam1334) {
      pdfHelper5("Abstract method `serialize` must be implemented.");
    }
    static _rescale(
      pdfParam885,
      pdfParam886,
      __pdfY,
      pdfParam887,
      pdfParam888,
      pdfParam889,
    ) {
      pdfParam889 ||= new Float32Array(pdfParam885.length);
      for (
        let pdfValue2063 = 0, pdfValue2064 = pdfParam885.length;
        pdfValue2063 < pdfValue2064;
        pdfValue2063 += 2
      )
        ((pdfParam889[pdfValue2063] =
          pdfParam886 + pdfParam885[pdfValue2063] * pdfParam887),
          (pdfParam889[pdfValue2063 + 1] =
            __pdfY + pdfParam885[pdfValue2063 + 1] * pdfParam888));
      return pdfParam889;
    }
    static _rescaleAndSwap(
      pdfParam837,
      pdfParam838,
      __pdfY,
      pdfParam839,
      pdfParam840,
      pdfParam841,
    ) {
      pdfParam841 ||= new Float32Array(pdfParam837.length);
      for (
        let pdfValue2065 = 0, pdfValue2066 = pdfParam837.length;
        pdfValue2065 < pdfValue2066;
        pdfValue2065 += 2
      )
        ((pdfParam841[pdfValue2065] =
          pdfParam838 + pdfParam837[pdfValue2065 + 1] * pdfParam839),
          (pdfParam841[pdfValue2065 + 1] =
            __pdfY + pdfParam837[pdfValue2065] * pdfParam840));
      return pdfParam841;
    }
    static _translate(pdfParam914, pdfParam915, __pdfY, pdfParam916) {
      pdfParam916 ||= new Float32Array(pdfParam914.length);
      for (
        let pdfValue2092 = 0, pdfValue2093 = pdfParam914.length;
        pdfValue2092 < pdfValue2093;
        pdfValue2092 += 2
      )
        ((pdfParam916[pdfValue2092] = pdfParam915 + pdfParam914[pdfValue2092]),
          (pdfParam916[pdfValue2092 + 1] =
            __pdfY + pdfParam914[pdfValue2092 + 1]));
      return pdfParam916;
    }
    static svgRound(pdfParam1578) {
      return Math.round(pdfParam1578 * 1e4);
    }
    static _normalizePoint(
      pdfParam776,
      pdfParam777,
      __pdfY,
      pdfParam778,
      pdfParam779,
    ) {
      switch (pdfParam779) {
        case 90:
          return [1 - pdfParam777 / __pdfY, pdfParam776 / pdfParam778];
        case 180:
          return [1 - pdfParam776 / __pdfY, 1 - pdfParam777 / pdfParam778];
        case 270:
          return [pdfParam777 / __pdfY, 1 - pdfParam776 / pdfParam778];
        default:
          return [pdfParam776 / __pdfY, pdfParam777 / pdfParam778];
      }
    }
    static _normalizePagePoint(pdfParam876, pdfParam877, __pdfY) {
      switch (__pdfY) {
        case 90:
          return [1 - pdfParam877, pdfParam876];
        case 180:
          return [1 - pdfParam876, 1 - pdfParam877];
        case 270:
          return [pdfParam877, 1 - pdfParam876];
        default:
          return [pdfParam876, pdfParam877];
      }
    }
    static createBezierPoints(
      pdfParam1068,
      pdfParam1069,
      __pdfY,
      pdfParam1070,
      pdfParam1071,
      pdfParam1072,
    ) {
      return [
        (pdfParam1068 + 5 * __pdfY) / 6,
        (pdfParam1069 + 5 * pdfParam1070) / 6,
        (5 * __pdfY + pdfParam1071) / 6,
        (5 * pdfParam1070 + pdfParam1072) / 6,
        (__pdfY + pdfParam1071) / 2,
        (pdfParam1070 + pdfParam1072) / 2,
      ];
    }
  },
  pdfValue156 = class PdfClass14 {
    #e;
    #t = [];
    #n;
    #r;
    #i = [];
    #a = new Float32Array(18);
    #o;
    #s;
    #c;
    #l;
    #u;
    #d;
    #f = [];
    static #p = 8;
    static #m = 2;
    static #h = PdfClass14.#p + PdfClass14.#m;
    constructor(
      { x: x, y: __pdfY },
      pdfParam668,
      pdfParam669,
      pdfParam670,
      pdfParam671,
      pdfParam672 = 0,
    ) {
      ((this.#e = pdfParam668),
        (this.#d = pdfParam670 * pdfParam669),
        (this.#r = pdfParam671),
        this.#a.set([NaN, NaN, NaN, NaN, x, __pdfY], 6),
        (this.#n = pdfParam672),
        (this.#l = PdfClass14.#p * pdfParam669),
        (this.#c = PdfClass14.#h * pdfParam669),
        (this.#u = pdfParam669),
        this.#f.push(x, __pdfY));
    }
    isEmpty() {
      return isNaN(this.#a[8]);
    }
    #g() {
      let pdfValue1454 = this.#a.subarray(4, 6),
        pdfValue1455 = this.#a.subarray(16, 18),
        [__pdfY, pdfValue1456, pdfValue1457, pdfValue1458] = this.#e;
      return [
        (this.#o + (pdfValue1454[0] - pdfValue1455[0]) / 2 - __pdfY) /
          pdfValue1457,
        (this.#s + (pdfValue1454[1] - pdfValue1455[1]) / 2 - pdfValue1456) /
          pdfValue1458,
        (this.#o + (pdfValue1455[0] - pdfValue1454[0]) / 2 - __pdfY) /
          pdfValue1457,
        (this.#s + (pdfValue1455[1] - pdfValue1454[1]) / 2 - pdfValue1456) /
          pdfValue1458,
      ];
    }
    add({ x: _x, y: _y }) {
      ((this.#o = _x), (this.#s = _y));
      let [__pdfY, pdfValue343, pdfValue344, pdfValue345] = this.#e,
        [pdfValue346, pdfValue347, __pdfS, pdfValue348] = this.#a.subarray(
          8,
          12,
        ),
        __pdfI = _x - __pdfS,
        __pdfR = _y - pdfValue348,
        ___pdfS = Math.hypot(__pdfI, __pdfR);
      if (___pdfS < this.#c) return !1;
      let pdfValue349 = ___pdfS - this.#l,
        _pdfNt = pdfValue349 / ___pdfS,
        __pdfC = _pdfNt * __pdfI,
        pdfValue350 = _pdfNt * __pdfR,
        __pdfJ = pdfValue346,
        __pdfG = pdfValue347;
      ((pdfValue346 = __pdfS),
        (pdfValue347 = pdfValue348),
        (__pdfS += __pdfC),
        (pdfValue348 += pdfValue350),
        this.#f?.push(_x, _y));
      let pdfValue351 = -pdfValue350 / pdfValue349,
        __pdfX = __pdfC / pdfValue349,
        pdfValue352 = pdfValue351 * this.#d,
        pdfValue353 = __pdfX * this.#d;
      return (
        this.#a.set(this.#a.subarray(2, 8), 0),
        this.#a.set([__pdfS + pdfValue352, pdfValue348 + pdfValue353], 4),
        this.#a.set(this.#a.subarray(14, 18), 12),
        this.#a.set([__pdfS - pdfValue352, pdfValue348 - pdfValue353], 16),
        isNaN(this.#a[6])
          ? (this.#i.length === 0 &&
              (this.#a.set(
                [pdfValue346 + pdfValue352, pdfValue347 + pdfValue353],
                2,
              ),
              this.#i.push(
                NaN,
                NaN,
                NaN,
                NaN,
                (pdfValue346 + pdfValue352 - __pdfY) / pdfValue344,
                (pdfValue347 + pdfValue353 - pdfValue343) / pdfValue345,
              ),
              this.#a.set(
                [pdfValue346 - pdfValue352, pdfValue347 - pdfValue353],
                14,
              ),
              this.#t.push(
                NaN,
                NaN,
                NaN,
                NaN,
                (pdfValue346 - pdfValue352 - __pdfY) / pdfValue344,
                (pdfValue347 - pdfValue353 - pdfValue343) / pdfValue345,
              )),
            this.#a.set(
              [__pdfJ, __pdfG, pdfValue346, pdfValue347, __pdfS, pdfValue348],
              6,
            ),
            !this.isEmpty())
          : (this.#a.set(
              [__pdfJ, __pdfG, pdfValue346, pdfValue347, __pdfS, pdfValue348],
              6,
            ),
            Math.abs(
              Math.atan2(__pdfG - pdfValue347, __pdfJ - pdfValue346) -
                Math.atan2(pdfValue350, __pdfC),
            ) <
            Math.PI / 2
              ? (([pdfValue346, pdfValue347, __pdfS, pdfValue348] =
                  this.#a.subarray(2, 6)),
                this.#i.push(
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  ((pdfValue346 + __pdfS) / 2 - __pdfY) / pdfValue344,
                  ((pdfValue347 + pdfValue348) / 2 - pdfValue343) / pdfValue345,
                ),
                ([pdfValue346, pdfValue347, __pdfJ, __pdfG] = this.#a.subarray(
                  14,
                  18,
                )),
                this.#t.push(
                  NaN,
                  NaN,
                  NaN,
                  NaN,
                  ((__pdfJ + pdfValue346) / 2 - __pdfY) / pdfValue344,
                  ((__pdfG + pdfValue347) / 2 - pdfValue343) / pdfValue345,
                ),
                !0)
              : (([
                  __pdfJ,
                  __pdfG,
                  pdfValue346,
                  pdfValue347,
                  __pdfS,
                  pdfValue348,
                ] = this.#a.subarray(0, 6)),
                this.#i.push(
                  ((__pdfJ + 5 * pdfValue346) / 6 - __pdfY) / pdfValue344,
                  ((__pdfG + 5 * pdfValue347) / 6 - pdfValue343) / pdfValue345,
                  ((5 * pdfValue346 + __pdfS) / 6 - __pdfY) / pdfValue344,
                  ((5 * pdfValue347 + pdfValue348) / 6 - pdfValue343) /
                    pdfValue345,
                  ((pdfValue346 + __pdfS) / 2 - __pdfY) / pdfValue344,
                  ((pdfValue347 + pdfValue348) / 2 - pdfValue343) / pdfValue345,
                ),
                ([
                  __pdfS,
                  pdfValue348,
                  pdfValue346,
                  pdfValue347,
                  __pdfJ,
                  __pdfG,
                ] = this.#a.subarray(12, 18)),
                this.#t.push(
                  ((__pdfJ + 5 * pdfValue346) / 6 - __pdfY) / pdfValue344,
                  ((__pdfG + 5 * pdfValue347) / 6 - pdfValue343) / pdfValue345,
                  ((5 * pdfValue346 + __pdfS) / 6 - __pdfY) / pdfValue344,
                  ((5 * pdfValue347 + pdfValue348) / 6 - pdfValue343) /
                    pdfValue345,
                  ((pdfValue346 + __pdfS) / 2 - __pdfY) / pdfValue344,
                  ((pdfValue347 + pdfValue348) / 2 - pdfValue343) / pdfValue345,
                ),
                !0))
      );
    }
    toSVGPath() {
      if (this.isEmpty()) return ``;
      let pdfValue819 = this.#i,
        pdfValue820 = this.#t;
      if (isNaN(this.#a[6]) && !this.isEmpty()) return this.#_();
      let __pdfY = [];
      __pdfY.push(`M${pdfValue819[4]} ${pdfValue819[5]}`);
      for (
        let pdfValue1650 = 6;
        pdfValue1650 < pdfValue819.length;
        pdfValue1650 += 6
      )
        isNaN(pdfValue819[pdfValue1650])
          ? __pdfY.push(
              `L${pdfValue819[pdfValue1650 + 4]} ${pdfValue819[pdfValue1650 + 5]}`,
            )
          : __pdfY.push(
              `C${pdfValue819[pdfValue1650]} ${pdfValue819[pdfValue1650 + 1]} ${pdfValue819[pdfValue1650 + 2]} ${pdfValue819[pdfValue1650 + 3]} ${pdfValue819[pdfValue1650 + 4]} ${pdfValue819[pdfValue1650 + 5]}`,
            );
      this.#y(__pdfY);
      for (
        let pdfValue1640 = pdfValue820.length - 6;
        pdfValue1640 >= 6;
        pdfValue1640 -= 6
      )
        isNaN(pdfValue820[pdfValue1640])
          ? __pdfY.push(
              `L${pdfValue820[pdfValue1640 + 4]} ${pdfValue820[pdfValue1640 + 5]}`,
            )
          : __pdfY.push(
              `C${pdfValue820[pdfValue1640]} ${pdfValue820[pdfValue1640 + 1]} ${pdfValue820[pdfValue1640 + 2]} ${pdfValue820[pdfValue1640 + 3]} ${pdfValue820[pdfValue1640 + 4]} ${pdfValue820[pdfValue1640 + 5]}`,
            );
      return (this.#v(__pdfY), __pdfY.join(` `));
    }
    #_() {
      let [pdfValue1320, pdfValue1321, __pdfY, pdfValue1322] = this.#e,
        [pdfValue1323, pdfValue1324, pdfValue1325, pdfValue1326] = this.#g();
      return `M${(this.#a[2] - pdfValue1320) / __pdfY} ${(this.#a[3] - pdfValue1321) / pdfValue1322} L${(this.#a[4] - pdfValue1320) / __pdfY} ${(this.#a[5] - pdfValue1321) / pdfValue1322} L${pdfValue1323} ${pdfValue1324} L${pdfValue1325} ${pdfValue1326} L${(this.#a[16] - pdfValue1320) / __pdfY} ${(this.#a[17] - pdfValue1321) / pdfValue1322} L${(this.#a[14] - pdfValue1320) / __pdfY} ${(this.#a[15] - pdfValue1321) / pdfValue1322} Z`;
    }
    #v(pdfParam1541) {
      let pdfValue2169 = this.#t;
      pdfParam1541.push(`L${pdfValue2169[4]} ${pdfValue2169[5]} Z`);
    }
    #y(pdfParam635) {
      let [pdfValue1498, __pdfY, pdfValue1499, pdfValue1500] = this.#e,
        pdfValue1501 = this.#a.subarray(4, 6),
        pdfValue1502 = this.#a.subarray(16, 18),
        [pdfValue1503, __pdfS, pdfValue1504, __pdfI] = this.#g();
      pdfParam635.push(
        `L${(pdfValue1501[0] - pdfValue1498) / pdfValue1499} ${(pdfValue1501[1] - __pdfY) / pdfValue1500} L${pdfValue1503} ${__pdfS} L${pdfValue1504} ${__pdfI} L${(pdfValue1502[0] - pdfValue1498) / pdfValue1499} ${(pdfValue1502[1] - __pdfY) / pdfValue1500}`,
      );
    }
    newFreeDrawOutline(
      pdfParam1421,
      pdfParam1422,
      __pdfY,
      pdfParam1423,
      pdfParam1424,
      pdfParam1425,
    ) {
      return new pdfValue157(
        pdfParam1421,
        pdfParam1422,
        __pdfY,
        pdfParam1423,
        pdfParam1424,
        pdfParam1425,
      );
    }
    getOutlines() {
      let pdfValue596 = this.#i,
        pdfValue597 = this.#t,
        __pdfY = this.#a,
        [pdfValue598, pdfValue599, pdfValue600, pdfValue601] = this.#e,
        pdfValue602 = new Float32Array((this.#f?.length ?? 0) + 2);
      for (
        let pdfValue1953 = 0, pdfValue1954 = pdfValue602.length - 2;
        pdfValue1953 < pdfValue1954;
        pdfValue1953 += 2
      )
        ((pdfValue602[pdfValue1953] =
          (this.#f[pdfValue1953] - pdfValue598) / pdfValue600),
          (pdfValue602[pdfValue1953 + 1] =
            (this.#f[pdfValue1953 + 1] - pdfValue599) / pdfValue601));
      if (
        ((pdfValue602[pdfValue602.length - 2] =
          (this.#o - pdfValue598) / pdfValue600),
        (pdfValue602[pdfValue602.length - 1] =
          (this.#s - pdfValue599) / pdfValue601),
        isNaN(__pdfY[6]) && !this.isEmpty())
      )
        return this.#b(pdfValue602);
      let __pdfS = new Float32Array(this.#i.length + 24 + this.#t.length),
        pdfValue603 = pdfValue596.length;
      for (
        let pdfValue1915 = 0;
        pdfValue1915 < pdfValue603;
        pdfValue1915 += 2
      ) {
        if (isNaN(pdfValue596[pdfValue1915])) {
          __pdfS[pdfValue1915] = __pdfS[pdfValue1915 + 1] = NaN;
          continue;
        }
        ((__pdfS[pdfValue1915] = pdfValue596[pdfValue1915]),
          (__pdfS[pdfValue1915 + 1] = pdfValue596[pdfValue1915 + 1]));
      }
      pdfValue603 = this.#S(__pdfS, pdfValue603);
      for (
        let pdfValue1672 = pdfValue597.length - 6;
        pdfValue1672 >= 6;
        pdfValue1672 -= 6
      )
        for (let ___pdfY = 0; ___pdfY < 6; ___pdfY += 2) {
          if (isNaN(pdfValue597[pdfValue1672 + ___pdfY])) {
            ((__pdfS[pdfValue603] = __pdfS[pdfValue603 + 1] = NaN),
              (pdfValue603 += 2));
            continue;
          }
          ((__pdfS[pdfValue603] = pdfValue597[pdfValue1672 + ___pdfY]),
            (__pdfS[pdfValue603 + 1] = pdfValue597[pdfValue1672 + ___pdfY + 1]),
            (pdfValue603 += 2));
        }
      return (
        this.#x(__pdfS, pdfValue603),
        this.newFreeDrawOutline(
          __pdfS,
          pdfValue602,
          this.#e,
          this.#u,
          this.#n,
          this.#r,
        )
      );
    }
    #b(pdfParam350) {
      let pdfValue1025 = this.#a,
        [__pdfY, pdfValue1026, pdfValue1027, pdfValue1028] = this.#e,
        [pdfValue1029, pdfValue1030, __pdfS, pdfValue1031] = this.#g(),
        __pdfI = new Float32Array(36);
      return (
        __pdfI.set(
          [
            NaN,
            NaN,
            NaN,
            NaN,
            (pdfValue1025[2] - __pdfY) / pdfValue1027,
            (pdfValue1025[3] - pdfValue1026) / pdfValue1028,
            NaN,
            NaN,
            NaN,
            NaN,
            (pdfValue1025[4] - __pdfY) / pdfValue1027,
            (pdfValue1025[5] - pdfValue1026) / pdfValue1028,
            NaN,
            NaN,
            NaN,
            NaN,
            pdfValue1029,
            pdfValue1030,
            NaN,
            NaN,
            NaN,
            NaN,
            __pdfS,
            pdfValue1031,
            NaN,
            NaN,
            NaN,
            NaN,
            (pdfValue1025[16] - __pdfY) / pdfValue1027,
            (pdfValue1025[17] - pdfValue1026) / pdfValue1028,
            NaN,
            NaN,
            NaN,
            NaN,
            (pdfValue1025[14] - __pdfY) / pdfValue1027,
            (pdfValue1025[15] - pdfValue1026) / pdfValue1028,
          ],
          0,
        ),
        this.newFreeDrawOutline(
          __pdfI,
          pdfParam350,
          this.#e,
          this.#u,
          this.#n,
          this.#r,
        )
      );
    }
    #x(pdfParam1302, pdfParam1303) {
      let __pdfY = this.#t;
      return (
        pdfParam1302.set(
          [NaN, NaN, NaN, NaN, __pdfY[4], __pdfY[5]],
          pdfParam1303,
        ),
        (pdfParam1303 += 6)
      );
    }
    #S(pdfParam529, pdfParam530) {
      let __pdfY = this.#a.subarray(4, 6),
        pdfValue1339 = this.#a.subarray(16, 18),
        [pdfValue1340, pdfValue1341, pdfValue1342, pdfValue1343] = this.#e,
        [__pdfS, pdfValue1344, __pdfI, __pdfR] = this.#g();
      return (
        pdfParam529.set(
          [
            NaN,
            NaN,
            NaN,
            NaN,
            (__pdfY[0] - pdfValue1340) / pdfValue1342,
            (__pdfY[1] - pdfValue1341) / pdfValue1343,
            NaN,
            NaN,
            NaN,
            NaN,
            __pdfS,
            pdfValue1344,
            NaN,
            NaN,
            NaN,
            NaN,
            __pdfI,
            __pdfR,
            NaN,
            NaN,
            NaN,
            NaN,
            (pdfValue1339[0] - pdfValue1340) / pdfValue1342,
            (pdfValue1339[1] - pdfValue1341) / pdfValue1343,
          ],
          pdfParam530,
        ),
        (pdfParam530 += 24)
      );
    }
  },
  pdfValue157 = class extends $ {
    #e;
    #t = new Float32Array(4);
    #n;
    #r;
    #i;
    #a;
    #o;
    constructor(
      pdfParam395,
      pdfParam396,
      __pdfY,
      pdfParam397,
      pdfParam398,
      pdfParam399,
    ) {
      (super(),
        (this.#o = pdfParam395),
        (this.#i = pdfParam396),
        (this.#e = __pdfY),
        (this.#a = pdfParam397),
        (this.#n = pdfParam398),
        (this.#r = pdfParam399),
        (this.firstPoint = [NaN, NaN]),
        (this.lastPoint = [NaN, NaN]),
        this.#s(pdfParam399));
      let [pdfValue1111, pdfValue1112, __pdfS, pdfValue1113] = this.#t;
      for (
        let pdfValue2037 = 0, ___pdfY = pdfParam395.length;
        pdfValue2037 < ___pdfY;
        pdfValue2037 += 2
      )
        ((pdfParam395[pdfValue2037] =
          (pdfParam395[pdfValue2037] - pdfValue1111) / __pdfS),
          (pdfParam395[pdfValue2037 + 1] =
            (pdfParam395[pdfValue2037 + 1] - pdfValue1112) / pdfValue1113));
      for (
        let pdfValue2047 = 0, ___pdfY = pdfParam396.length;
        pdfValue2047 < ___pdfY;
        pdfValue2047 += 2
      )
        ((pdfParam396[pdfValue2047] =
          (pdfParam396[pdfValue2047] - pdfValue1111) / __pdfS),
          (pdfParam396[pdfValue2047 + 1] =
            (pdfParam396[pdfValue2047 + 1] - pdfValue1112) / pdfValue1113));
    }
    toSVGPath() {
      let pdfValue1156 = [`M${this.#o[4]} ${this.#o[5]}`];
      for (
        let pdfValue1411 = 6, __pdfY = this.#o.length;
        pdfValue1411 < __pdfY;
        pdfValue1411 += 6
      ) {
        if (isNaN(this.#o[pdfValue1411])) {
          pdfValue1156.push(
            `L${this.#o[pdfValue1411 + 4]} ${this.#o[pdfValue1411 + 5]}`,
          );
          continue;
        }
        pdfValue1156.push(
          `C${this.#o[pdfValue1411]} ${this.#o[pdfValue1411 + 1]} ${this.#o[pdfValue1411 + 2]} ${this.#o[pdfValue1411 + 3]} ${this.#o[pdfValue1411 + 4]} ${this.#o[pdfValue1411 + 5]}`,
        );
      }
      return (pdfValue1156.push(`Z`), pdfValue1156.join(` `));
    }
    serialize([pdfParam291, pdfParam292, __pdfY, pdfParam293], pdfParam294) {
      let pdfValue882 = __pdfY - pdfParam291,
        pdfValue883 = pdfParam293 - pdfParam292,
        pdfValue884,
        __pdfS;
      switch (pdfParam294) {
        case 0:
          ((pdfValue884 = $._rescale(
            this.#o,
            pdfParam291,
            pdfParam293,
            pdfValue882,
            -pdfValue883,
          )),
            (__pdfS = $._rescale(
              this.#i,
              pdfParam291,
              pdfParam293,
              pdfValue882,
              -pdfValue883,
            )));
          break;
        case 90:
          ((pdfValue884 = $._rescaleAndSwap(
            this.#o,
            pdfParam291,
            pdfParam292,
            pdfValue882,
            pdfValue883,
          )),
            (__pdfS = $._rescaleAndSwap(
              this.#i,
              pdfParam291,
              pdfParam292,
              pdfValue882,
              pdfValue883,
            )));
          break;
        case 180:
          ((pdfValue884 = $._rescale(
            this.#o,
            __pdfY,
            pdfParam292,
            -pdfValue882,
            pdfValue883,
          )),
            (__pdfS = $._rescale(
              this.#i,
              __pdfY,
              pdfParam292,
              -pdfValue882,
              pdfValue883,
            )));
          break;
        case 270:
          ((pdfValue884 = $._rescaleAndSwap(
            this.#o,
            __pdfY,
            pdfParam293,
            -pdfValue882,
            -pdfValue883,
          )),
            (__pdfS = $._rescaleAndSwap(
              this.#i,
              __pdfY,
              pdfParam293,
              -pdfValue882,
              -pdfValue883,
            )));
          break;
      }
      return {
        outline: Array.from(pdfValue884),
        points: [Array.from(__pdfS)],
      };
    }
    #s(pdfParam192) {
      let pdfValue667 = this.#o,
        __pdfY = pdfValue667[4],
        pdfValue668 = pdfValue667[5],
        pdfValue669 = [__pdfY, pdfValue668, __pdfY, pdfValue668],
        pdfValue670 = __pdfY,
        pdfValue671 = pdfValue668,
        pdfValue672 = __pdfY,
        __pdfS = pdfValue668,
        pdfValue673 = pdfParam192 ? Math.max : Math.min,
        __pdfI = new Float32Array(4);
      for (
        let pdfValue985 = 6, ___pdfR = pdfValue667.length;
        pdfValue985 < ___pdfR;
        pdfValue985 += 6
      ) {
        let ____pdfR = pdfValue667[pdfValue985 + 4],
          ___pdfS = pdfValue667[pdfValue985 + 5];
        (isNaN(pdfValue667[pdfValue985])
          ? (pdfA.pointBoundingBox(____pdfR, ___pdfS, pdfValue669),
            pdfValue671 > ___pdfS
              ? ((pdfValue670 = ____pdfR), (pdfValue671 = ___pdfS))
              : pdfValue671 === ___pdfS &&
                (pdfValue670 = pdfValue673(pdfValue670, ____pdfR)),
            __pdfS < ___pdfS
              ? ((pdfValue672 = ____pdfR), (__pdfS = ___pdfS))
              : __pdfS === ___pdfS &&
                (pdfValue672 = pdfValue673(pdfValue672, ____pdfR)))
          : ((__pdfI[0] = __pdfI[1] = 1 / 0),
            (__pdfI[2] = __pdfI[3] = -1 / 0),
            pdfA.bezierBoundingBox(
              __pdfY,
              pdfValue668,
              ...pdfValue667.slice(pdfValue985, pdfValue985 + 6),
              __pdfI,
            ),
            pdfA.rectBoundingBox(
              __pdfI[0],
              __pdfI[1],
              __pdfI[2],
              __pdfI[3],
              pdfValue669,
            ),
            pdfValue671 > __pdfI[1]
              ? ((pdfValue670 = __pdfI[0]), (pdfValue671 = __pdfI[1]))
              : pdfValue671 === __pdfI[1] &&
                (pdfValue670 = pdfValue673(pdfValue670, __pdfI[0])),
            __pdfS < __pdfI[3]
              ? ((pdfValue672 = __pdfI[2]), (__pdfS = __pdfI[3]))
              : __pdfS === __pdfI[3] &&
                (pdfValue672 = pdfValue673(pdfValue672, __pdfI[2]))),
          (__pdfY = ____pdfR),
          (pdfValue668 = ___pdfS));
      }
      let __pdfR = this.#t;
      ((__pdfR[0] = pdfValue669[0] - this.#n),
        (__pdfR[1] = pdfValue669[1] - this.#n),
        (__pdfR[2] = pdfValue669[2] - pdfValue669[0] + 2 * this.#n),
        (__pdfR[3] = pdfValue669[3] - pdfValue669[1] + 2 * this.#n),
        (this.firstPoint = [pdfValue670, pdfValue671]),
        (this.lastPoint = [pdfValue672, __pdfS]));
    }
    get box() {
      return this.#t;
    }
    newOutliner(
      pdfParam1481,
      pdfParam1482,
      __pdfY,
      pdfParam1483,
      pdfParam1484,
      pdfParam1485 = 0,
    ) {
      return new pdfValue156(
        pdfParam1481,
        pdfParam1482,
        __pdfY,
        pdfParam1483,
        pdfParam1484,
        pdfParam1485,
      );
    }
    getNewOutline(pdfParam453, pdfParam454) {
      let [__pdfY, pdfValue1191, pdfValue1192, pdfValue1193] = this.#t,
        [pdfValue1194, pdfValue1195, __pdfS, pdfValue1196] = this.#e,
        __pdfI = pdfValue1192 * __pdfS,
        __pdfR = pdfValue1193 * pdfValue1196,
        ___pdfS = __pdfY * __pdfS + pdfValue1194,
        pdfValue1197 = pdfValue1191 * pdfValue1196 + pdfValue1195,
        _pdfNt = this.newOutliner(
          {
            x: this.#i[0] * __pdfI + ___pdfS,
            y: this.#i[1] * __pdfR + pdfValue1197,
          },
          this.#e,
          this.#a,
          pdfParam453,
          this.#r,
          pdfParam454 ?? this.#n,
        );
      for (
        let pdfValue1970 = 2;
        pdfValue1970 < this.#i.length;
        pdfValue1970 += 2
      )
        _pdfNt.add({
          x: this.#i[pdfValue1970] * __pdfI + ___pdfS,
          y: this.#i[pdfValue1970 + 1] * __pdfR + pdfValue1197,
        });
      return _pdfNt.getOutlines();
    }
  },
  pdfValue158 = class {
    #e;
    #t;
    #n;
    #r = [];
    #i = [];
    constructor(pdfParam197, pdfParam198 = 0, __pdfY = 0, pdfParam199 = !0) {
      let pdfValue692 = [1 / 0, 1 / 0, -1 / 0, -1 / 0],
        pdfValue693 = 10 ** -4;
      for (let {
        x: ___pdfY,
        y: y,
        width: width,
        height: height,
      } of pdfParam197) {
        let pdfValue1523 =
            Math.floor((___pdfY - pdfParam198) / pdfValue693) * pdfValue693,
          ____pdfS =
            Math.ceil((___pdfY + width + pdfParam198) / pdfValue693) *
            pdfValue693,
          pdfValue1524 =
            Math.floor((y - pdfParam198) / pdfValue693) * pdfValue693,
          ___pdfI =
            Math.ceil((y + height + pdfParam198) / pdfValue693) * pdfValue693,
          ___pdfR = [pdfValue1523, pdfValue1524, ___pdfI, !0],
          _____pdfS = [____pdfS, pdfValue1524, ___pdfI, !1];
        (this.#r.push(___pdfR, _____pdfS),
          pdfA.rectBoundingBox(
            pdfValue1523,
            pdfValue1524,
            ____pdfS,
            ___pdfI,
            pdfValue692,
          ));
      }
      let pdfValue694 = pdfValue692[2] - pdfValue692[0] + 2 * __pdfY,
        pdfValue695 = pdfValue692[3] - pdfValue692[1] + 2 * __pdfY,
        __pdfS = pdfValue692[0] - __pdfY,
        pdfValue696 = pdfValue692[1] - __pdfY,
        __pdfI = pdfParam199 ? -1 / 0 : 1 / 0,
        __pdfR = 1 / 0,
        ___pdfS = this.#r.at(pdfParam199 ? -1 : -2),
        pdfValue697 = [___pdfS[0], ___pdfS[2]];
      for (let pdfValue1549 of this.#r) {
        let [pdfValue1623, ___pdfY, pdfValue1624, pdfValue1625] = pdfValue1549;
        (!pdfValue1625 && pdfParam199
          ? ___pdfY < __pdfR
            ? ((__pdfR = ___pdfY), (__pdfI = pdfValue1623))
            : ___pdfY === __pdfR && (__pdfI = Math.max(__pdfI, pdfValue1623))
          : pdfValue1625 &&
            !pdfParam199 &&
            (___pdfY < __pdfR
              ? ((__pdfR = ___pdfY), (__pdfI = pdfValue1623))
              : ___pdfY === __pdfR &&
                (__pdfI = Math.min(__pdfI, pdfValue1623))),
          (pdfValue1549[0] = (pdfValue1623 - __pdfS) / pdfValue694),
          (pdfValue1549[1] = (___pdfY - pdfValue696) / pdfValue695),
          (pdfValue1549[2] = (pdfValue1624 - pdfValue696) / pdfValue695));
      }
      ((this.#e = new Float32Array([
        __pdfS,
        pdfValue696,
        pdfValue694,
        pdfValue695,
      ])),
        (this.#t = [__pdfI, __pdfR]),
        (this.#n = pdfValue697));
    }
    getOutlines() {
      this.#r.sort(
        (pdfParam1623, pdfParam1624) =>
          pdfParam1623[0] - pdfParam1624[0] ||
          pdfParam1623[1] - pdfParam1624[1] ||
          pdfParam1623[2] - pdfParam1624[2],
      );
      let pdfValue1489 = [];
      for (let pdfValue1864 of this.#r)
        pdfValue1864[3]
          ? (pdfValue1489.push(...this.#l(pdfValue1864)), this.#s(pdfValue1864))
          : (this.#c(pdfValue1864),
            pdfValue1489.push(...this.#l(pdfValue1864)));
      return this.#a(pdfValue1489);
    }
    #a(pdfParam258) {
      let pdfValue794 = [],
        __pdfY = new Set();
      for (let ___pdfY of pdfParam258) {
        let [pdfValue2217, pdfValue2218, pdfValue2219] = ___pdfY;
        pdfValue794.push(
          [pdfValue2217, pdfValue2218, ___pdfY],
          [pdfValue2217, pdfValue2219, ___pdfY],
        );
      }
      pdfValue794.sort(
        (pdfParam1697, pdfParam1698) =>
          pdfParam1697[1] - pdfParam1698[1] ||
          pdfParam1697[0] - pdfParam1698[0],
      );
      for (
        let pdfValue1854 = 0, pdfValue1855 = pdfValue794.length;
        pdfValue1854 < pdfValue1855;
        pdfValue1854 += 2
      ) {
        let pdfValue2054 = pdfValue794[pdfValue1854][2],
          pdfValue2055 = pdfValue794[pdfValue1854 + 1][2];
        (pdfValue2054.push(pdfValue2055),
          pdfValue2055.push(pdfValue2054),
          __pdfY.add(pdfValue2054),
          __pdfY.add(pdfValue2055));
      }
      let pdfValue795 = [],
        pdfValue796;
      for (; __pdfY.size > 0; ) {
        let pdfValue1348 = __pdfY.values().next().value,
          [pdfValue1349, pdfValue1350, pdfValue1351, pdfValue1352, __pdfS] =
            pdfValue1348;
        __pdfY.delete(pdfValue1348);
        let pdfValue1353 = pdfValue1349,
          __pdfI = pdfValue1350;
        for (
          pdfValue796 = [pdfValue1349, pdfValue1351],
            pdfValue795.push(pdfValue796);
          ;

        ) {
          let pdfValue1691;
          if (__pdfY.has(pdfValue1352)) pdfValue1691 = pdfValue1352;
          else if (__pdfY.has(__pdfS)) pdfValue1691 = __pdfS;
          else break;
          (__pdfY.delete(pdfValue1691),
            ([pdfValue1349, pdfValue1350, pdfValue1351, pdfValue1352, __pdfS] =
              pdfValue1691),
            pdfValue1353 !== pdfValue1349 &&
              (pdfValue796.push(
                pdfValue1353,
                __pdfI,
                pdfValue1349,
                __pdfI === pdfValue1350 ? pdfValue1350 : pdfValue1351,
              ),
              (pdfValue1353 = pdfValue1349)),
            (__pdfI = __pdfI === pdfValue1350 ? pdfValue1351 : pdfValue1350));
        }
        pdfValue796.push(pdfValue1353, __pdfI);
      }
      return new pdfValue159(pdfValue795, this.#e, this.#t, this.#n);
    }
    #o(pdfParam955) {
      let pdfValue1749 = this.#i,
        __pdfY = 0,
        pdfValue1750 = pdfValue1749.length - 1;
      for (; __pdfY <= pdfValue1750; ) {
        let pdfValue2106 = (__pdfY + pdfValue1750) >> 1,
          pdfValue2107 = pdfValue1749[pdfValue2106][0];
        if (pdfValue2107 === pdfParam955) return pdfValue2106;
        pdfValue2107 < pdfParam955
          ? (__pdfY = pdfValue2106 + 1)
          : (pdfValue1750 = pdfValue2106 - 1);
      }
      return pdfValue1750 + 1;
    }
    #s([, pdfParam1486, pdfParam1487]) {
      let __pdfY = this.#o(pdfParam1486);
      this.#i.splice(__pdfY, 0, [pdfParam1486, pdfParam1487]);
    }
    #c([, pdfParam513, pdfParam514]) {
      let __pdfY = this.#o(pdfParam513);
      for (
        let pdfValue1769 = __pdfY;
        pdfValue1769 < this.#i.length;
        pdfValue1769++
      ) {
        let [___pdfY, pdfValue1960] = this.#i[pdfValue1769];
        if (___pdfY !== pdfParam513) break;
        if (___pdfY === pdfParam513 && pdfValue1960 === pdfParam514) {
          this.#i.splice(pdfValue1769, 1);
          return;
        }
      }
      for (let pdfValue1823 = __pdfY - 1; pdfValue1823 >= 0; pdfValue1823--) {
        let [___pdfY, pdfValue1961] = this.#i[pdfValue1823];
        if (___pdfY !== pdfParam513) break;
        if (___pdfY === pdfParam513 && pdfValue1961 === pdfParam514) {
          this.#i.splice(pdfValue1823, 1);
          return;
        }
      }
    }
    #l(pdfParam468) {
      let [pdfValue1226, __pdfY, pdfValue1227] = pdfParam468,
        pdfValue1228 = [[pdfValue1226, __pdfY, pdfValue1227]],
        pdfValue1229 = this.#o(pdfValue1227);
      for (let pdfValue1409 = 0; pdfValue1409 < pdfValue1229; pdfValue1409++) {
        let [___pdfY, pdfValue1453] = this.#i[pdfValue1409];
        for (
          let pdfValue1519 = 0, pdfValue1520 = pdfValue1228.length;
          pdfValue1519 < pdfValue1520;
          pdfValue1519++
        ) {
          let [, pdfValue1631, pdfValue1632] = pdfValue1228[pdfValue1519];
          if (!(pdfValue1453 <= pdfValue1631 || pdfValue1632 <= ___pdfY)) {
            if (pdfValue1631 >= ___pdfY) {
              if (pdfValue1632 > pdfValue1453)
                pdfValue1228[pdfValue1519][1] = pdfValue1453;
              else {
                if (pdfValue1520 === 1) return [];
                (pdfValue1228.splice(pdfValue1519, 1),
                  pdfValue1519--,
                  pdfValue1520--);
              }
              continue;
            }
            ((pdfValue1228[pdfValue1519][2] = ___pdfY),
              pdfValue1632 > pdfValue1453 &&
                pdfValue1228.push([pdfValue1226, pdfValue1453, pdfValue1632]));
          }
        }
      }
      return pdfValue1228;
    }
  },
  pdfValue159 = class extends $ {
    #e;
    #t;
    constructor(pdfParam1215, pdfParam1216, __pdfY, pdfParam1217) {
      (super(),
        (this.#t = pdfParam1215),
        (this.#e = pdfParam1216),
        (this.firstPoint = __pdfY),
        (this.lastPoint = pdfParam1217));
    }
    toSVGPath() {
      let pdfValue1418 = [];
      for (let pdfValue1542 of this.#t) {
        let [__pdfY, pdfValue1617] = pdfValue1542;
        pdfValue1418.push(`M${__pdfY} ${pdfValue1617}`);
        for (
          let pdfValue1813 = 2;
          pdfValue1813 < pdfValue1542.length;
          pdfValue1813 += 2
        ) {
          let pdfValue1977 = pdfValue1542[pdfValue1813],
            pdfValue1978 = pdfValue1542[pdfValue1813 + 1];
          pdfValue1977 === __pdfY
            ? (pdfValue1418.push(`V${pdfValue1978}`),
              (pdfValue1617 = pdfValue1978))
            : pdfValue1978 === pdfValue1617 &&
              (pdfValue1418.push(`H${pdfValue1977}`), (__pdfY = pdfValue1977));
        }
        pdfValue1418.push(`Z`);
      }
      return pdfValue1418.join(` `);
    }
    serialize([pdfParam691, pdfParam692, __pdfY, pdfParam693], pdfParam694) {
      let pdfValue1560 = [],
        pdfValue1561 = __pdfY - pdfParam691,
        pdfValue1562 = pdfParam693 - pdfParam692;
      for (let pdfValue1770 of this.#t) {
        let ___pdfY = Array(pdfValue1770.length);
        for (
          let pdfValue2094 = 0;
          pdfValue2094 < pdfValue1770.length;
          pdfValue2094 += 2
        )
          ((___pdfY[pdfValue2094] =
            pdfParam691 + pdfValue1770[pdfValue2094] * pdfValue1561),
            (___pdfY[pdfValue2094 + 1] =
              pdfParam693 - pdfValue1770[pdfValue2094 + 1] * pdfValue1562));
        pdfValue1560.push(___pdfY);
      }
      return pdfValue1560;
    }
    get box() {
      return this.#e;
    }
    get classNamesForOutlining() {
      return [`highlightOutline`];
    }
  },
  pdfValue160 = class extends pdfValue156 {
    newFreeDrawOutline(
      pdfParam1426,
      pdfParam1427,
      __pdfY,
      pdfParam1428,
      pdfParam1429,
      pdfParam1430,
    ) {
      return new pdfValue161(
        pdfParam1426,
        pdfParam1427,
        __pdfY,
        pdfParam1428,
        pdfParam1429,
        pdfParam1430,
      );
    }
  },
  pdfValue161 = class extends pdfValue157 {
    newOutliner(
      pdfParam1488,
      pdfParam1489,
      __pdfY,
      pdfParam1490,
      pdfParam1491,
      pdfParam1492 = 0,
    ) {
      return new pdfValue160(
        pdfParam1488,
        pdfParam1489,
        __pdfY,
        pdfParam1490,
        pdfParam1491,
        pdfParam1492,
      );
    }
  },
  _i = class PdfClass4 extends pdfValue31 {
    #e = null;
    #t = 0;
    #n;
    #r = null;
    #i = null;
    #a = null;
    #o = null;
    #s = 0;
    #c = null;
    #l = null;
    #u = null;
    #d = !1;
    #f = null;
    #p = null;
    #m = null;
    #h = ``;
    #g;
    #_ = ``;
    static _defaultColor = null;
    static _defaultOpacity = 1;
    static _defaultThickness = 12;
    static _type = `highlight`;
    static _editorType = pdfI.HIGHLIGHT;
    static _freeHighlightId = -1;
    static _freeHighlight = null;
    static _freeHighlightClipId = ``;
    static get _keyboardManager() {
      let pdfValue1104 = PdfClass4.prototype;
      return pdfQ(
        this,
        `_keyboardManager`,
        new pdfValue28([
          [
            [`ArrowLeft`, `mac+ArrowLeft`],
            pdfValue1104._moveCaret,
            {
              args: [0],
            },
          ],
          [
            [`ArrowRight`, `mac+ArrowRight`],
            pdfValue1104._moveCaret,
            {
              args: [1],
            },
          ],
          [
            [`ArrowUp`, `mac+ArrowUp`],
            pdfValue1104._moveCaret,
            {
              args: [2],
            },
          ],
          [
            [`ArrowDown`, `mac+ArrowDown`],
            pdfValue1104._moveCaret,
            {
              args: [3],
            },
          ],
        ]),
      );
    }
    constructor(pdfParam203) {
      (super({
        ...pdfParam203,
        name: `highlightEditor`,
      }),
        (this.color = pdfParam203.color || PdfClass4._defaultColor),
        (this.#g = pdfParam203.thickness || PdfClass4._defaultThickness),
        (this.opacity = pdfParam203.opacity || PdfClass4._defaultOpacity),
        (this.#n = pdfParam203.boxes || null),
        (this.#_ = pdfParam203.methodOfCreation || ``),
        (this.#h = pdfParam203.text || ``),
        (this._isDraggable = !1),
        (this.defaultL10nId = `pdfjs-editor-highlight-editor`),
        pdfParam203.highlightId > -1
          ? ((this.#d = !0), this.#y(pdfParam203), this.#w())
          : this.#n &&
            ((this.#e = pdfParam203.anchorNode),
            (this.#t = pdfParam203.anchorOffset),
            (this.#o = pdfParam203.focusNode),
            (this.#s = pdfParam203.focusOffset),
            this.#v(),
            this.#w(),
            this.rotate(this.rotation)),
        this.annotationElementId ||
          this._uiManager.a11yAlert(`pdfjs-editor-highlight-added-alert`));
    }
    get telemetryInitialData() {
      return {
        action: `added`,
        type: this.#d ? `free_highlight` : `highlight`,
        color: this._uiManager.getNonHCMColorName(this.color),
        thickness: this.#g,
        methodOfCreation: this.#_,
      };
    }
    get telemetryFinalData() {
      return {
        type: `highlight`,
        color: this._uiManager.getNonHCMColorName(this.color),
      };
    }
    static computeTelemetryFinalData(pdfParam1252) {
      return {
        numberOfColors: pdfParam1252.get(`color`).size,
      };
    }
    #v() {
      ((this.#l = new pdfValue158(this.#n, 0.001).getOutlines()),
        ([this.x, this.y, this.width, this.height] = this.#l.box),
        (this.#a = new pdfValue158(
          this.#n,
          0.0025,
          0.001,
          this._uiManager.direction === `ltr`,
        ).getOutlines()));
      let { firstPoint: firstPoint } = this.#l;
      this.#f = [
        (firstPoint[0] - this.x) / this.width,
        (firstPoint[1] - this.y) / this.height,
      ];
      let { lastPoint: lastPoint } = this.#a;
      this.#p = [
        (lastPoint[0] - this.x) / this.width,
        (lastPoint[1] - this.y) / this.height,
      ];
    }
    #y({
      highlightOutlines: highlightOutlines,
      highlightId: __pdfY,
      clipPathId: clipPathId,
    }) {
      if (
        ((this.#l = highlightOutlines),
        (this.#a = highlightOutlines.getNewOutline(this.#g / 2 + 1.5, 0.0025)),
        __pdfY >= 0)
      )
        ((this.#u = __pdfY),
          (this.#r = clipPathId),
          this.parent.drawLayer.finalizeDraw(__pdfY, {
            bbox: highlightOutlines.box,
            path: {
              d: highlightOutlines.toSVGPath(),
            },
          }),
          (this.#m = this.parent.drawLayer.drawOutline(
            {
              rootClass: {
                highlightOutline: !0,
                free: !0,
              },
              bbox: this.#a.box,
              path: {
                d: this.#a.toSVGPath(),
              },
            },
            !0,
          )));
      else if (this.parent) {
        let ___pdfY = this.parent.viewport.rotation;
        (this.parent.drawLayer.updateProperties(this.#u, {
          bbox: PdfClass4.#T(
            this.#l.box,
            (___pdfY - this.rotation + 360) % 360,
          ),
          path: {
            d: highlightOutlines.toSVGPath(),
          },
        }),
          this.parent.drawLayer.updateProperties(this.#m, {
            bbox: PdfClass4.#T(this.#a.box, ___pdfY),
            path: {
              d: this.#a.toSVGPath(),
            },
          }));
      }
      let [pdfValue382, pdfValue383, pdfValue384, pdfValue385] =
        highlightOutlines.box;
      switch (this.rotation) {
        case 0:
          ((this.x = pdfValue382),
            (this.y = pdfValue383),
            (this.width = pdfValue384),
            (this.height = pdfValue385));
          break;
        case 90: {
          let [pdfValue1879, pdfValue1880] = this.parentDimensions;
          ((this.x = pdfValue383),
            (this.y = 1 - pdfValue382),
            (this.width = (pdfValue384 * pdfValue1880) / pdfValue1879),
            (this.height = (pdfValue385 * pdfValue1879) / pdfValue1880));
          break;
        }
        case 180:
          ((this.x = 1 - pdfValue382),
            (this.y = 1 - pdfValue383),
            (this.width = pdfValue384),
            (this.height = pdfValue385));
          break;
        case 270: {
          let [pdfValue1881, pdfValue1882] = this.parentDimensions;
          ((this.x = 1 - pdfValue383),
            (this.y = pdfValue382),
            (this.width = (pdfValue384 * pdfValue1882) / pdfValue1881),
            (this.height = (pdfValue385 * pdfValue1881) / pdfValue1882));
          break;
        }
      }
      let { firstPoint: __pdfS } = highlightOutlines;
      this.#f = [
        (__pdfS[0] - pdfValue382) / pdfValue384,
        (__pdfS[1] - pdfValue383) / pdfValue385,
      ];
      let { lastPoint: lastPoint } = this.#a;
      this.#p = [
        (lastPoint[0] - pdfValue382) / pdfValue384,
        (lastPoint[1] - pdfValue383) / pdfValue385,
      ];
    }
    static initialize(pdfParam1001, __pdfY) {
      (pdfValue31.initialize(pdfParam1001, __pdfY),
        (PdfClass4._defaultColor ||=
          __pdfY.highlightColors?.values().next().value || `#fff066`));
    }
    static updateDefaultParams(pdfParam811, __pdfY) {
      switch (pdfParam811) {
        case pdfR.HIGHLIGHT_COLOR:
          PdfClass4._defaultColor = __pdfY;
          break;
        case pdfR.HIGHLIGHT_THICKNESS:
          PdfClass4._defaultThickness = __pdfY;
          break;
      }
    }
    translateInPage(pdfParam1715, pdfParam1716) {}
    get toolbarPosition() {
      return this.#p;
    }
    get commentButtonPosition() {
      return this.#f;
    }
    updateParams(pdfParam987, pdfParam988) {
      switch (pdfParam987) {
        case pdfR.HIGHLIGHT_COLOR:
          this.#b(pdfParam988);
          break;
        case pdfR.HIGHLIGHT_THICKNESS:
          this.#x(pdfParam988);
          break;
      }
    }
    static get defaultPropertiesToUpdate() {
      return [
        [pdfR.HIGHLIGHT_COLOR, PdfClass4._defaultColor],
        [pdfR.HIGHLIGHT_THICKNESS, PdfClass4._defaultThickness],
      ];
    }
    get propertiesToUpdate() {
      return [
        [pdfR.HIGHLIGHT_COLOR, this.color || PdfClass4._defaultColor],
        [pdfR.HIGHLIGHT_THICKNESS, this.#g || PdfClass4._defaultThickness],
        [pdfR.HIGHLIGHT_FREE, this.#d],
      ];
    }
    onUpdatedColor() {
      (this.parent?.drawLayer.updateProperties(this.#u, {
        root: {
          fill: this.color,
          "fill-opacity": this.opacity,
        },
      }),
        this.#i?.updateColor(this.color),
        super.onUpdatedColor());
    }
    #b(pdfParam326) {
      let __pdfY = (pdfParam1442, pdfParam1443) => {
          ((this.color = pdfParam1442),
            (this.opacity = pdfParam1443),
            this.onUpdatedColor());
        },
        pdfValue963 = this.color,
        pdfValue964 = this.opacity;
      (this.addCommands({
        cmd: __pdfY.bind(this, pdfParam326, PdfClass4._defaultOpacity),
        undo: __pdfY.bind(this, pdfValue963, pdfValue964),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: pdfR.HIGHLIGHT_COLOR,
        overwriteIfSameType: !0,
        keepUndo: !0,
      }),
        this._reportTelemetry(
          {
            action: `color_changed`,
            color: this._uiManager.getNonHCMColorName(pdfParam326),
          },
          !0,
        ));
    }
    #x(pdfParam431) {
      let pdfValue1163 = this.#g,
        __pdfY = (pdfParam1706) => {
          ((this.#g = pdfParam1706), this.#S(pdfParam1706));
        };
      (this.addCommands({
        cmd: __pdfY.bind(this, pdfParam431),
        undo: __pdfY.bind(this, pdfValue1163),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: pdfR.INK_THICKNESS,
        overwriteIfSameType: !0,
        keepUndo: !0,
      }),
        this._reportTelemetry(
          {
            action: `thickness_changed`,
            thickness: pdfParam431,
          },
          !0,
        ));
    }
    get toolbarButtons() {
      return this._uiManager.highlightColors
        ? [
            [
              `colorPicker`,
              (this.#i = new _pdfU({
                editor: this,
              })),
            ],
          ]
        : super.toolbarButtons;
    }
    disableEditing() {
      (super.disableEditing(), this.div.classList.toggle(`disabled`, !0));
    }
    enableEditing() {
      (super.enableEditing(), this.div.classList.toggle(`disabled`, !1));
    }
    fixAndSetPosition() {
      return super.fixAndSetPosition(this.#O());
    }
    getBaseTranslation() {
      return [0, 0];
    }
    getRect(pdfParam1542, pdfParam1543) {
      return super.getRect(pdfParam1542, pdfParam1543, this.#O());
    }
    onceAdded(pdfParam1114) {
      (this.annotationElementId || this.parent.addUndoableEditor(this),
        pdfParam1114 && this.div.focus());
    }
    remove() {
      (this.#C(),
        this._reportTelemetry({
          action: `deleted`,
        }),
        super.remove());
    }
    rebuild() {
      this.parent &&
        (super.rebuild(),
        this.div !== null &&
          (this.#w(), this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(pdfParam628) {
      let pdfValue1490 = !1;
      (this.parent && !pdfParam628
        ? this.#C()
        : pdfParam628 &&
          (this.#w(pdfParam628),
          (pdfValue1490 =
            !this.parent && this.div?.classList.contains(`selectedEditor`))),
        super.setParent(pdfParam628),
        this.show(this._isVisible),
        pdfValue1490 && this.select());
    }
    #S(pdfParam878) {
      this.#d &&
        (this.#y({
          highlightOutlines: this.#l.getNewOutline(pdfParam878 / 2),
        }),
        this.fixAndSetPosition(),
        this.setDims(this.width, this.height));
    }
    #C() {
      this.#u === null ||
        !this.parent ||
        (this.parent.drawLayer.remove(this.#u),
        (this.#u = null),
        this.parent.drawLayer.remove(this.#m),
        (this.#m = null));
    }
    #w(pdfParam307 = this.parent) {
      this.#u === null &&
        (({ id: this.#u, clipPathId: this.#r } = pdfParam307.drawLayer.draw(
          {
            bbox: this.#l.box,
            root: {
              viewBox: `0 0 1 1`,
              fill: this.color,
              "fill-opacity": this.opacity,
            },
            rootClass: {
              highlight: !0,
              free: this.#d,
            },
            path: {
              d: this.#l.toSVGPath(),
            },
          },
          !1,
          !0,
        )),
        (this.#m = pdfParam307.drawLayer.drawOutline(
          {
            rootClass: {
              highlightOutline: !0,
              free: this.#d,
            },
            bbox: this.#a.box,
            path: {
              d: this.#a.toSVGPath(),
            },
          },
          this.#d,
        )),
        this.#c && (this.#c.style.clipPath = this.#r));
    }
    static #T([pdfParam850, pdfParam851, __pdfY, pdfParam852], pdfParam853) {
      switch (pdfParam853) {
        case 90:
          return [
            1 - pdfParam851 - pdfParam852,
            pdfParam850,
            pdfParam852,
            __pdfY,
          ];
        case 180:
          return [
            1 - pdfParam850 - __pdfY,
            1 - pdfParam851 - pdfParam852,
            __pdfY,
            pdfParam852,
          ];
        case 270:
          return [pdfParam851, 1 - pdfParam850 - __pdfY, pdfParam852, __pdfY];
      }
      return [pdfParam850, pdfParam851, __pdfY, pdfParam852];
    }
    rotate(pdfParam425) {
      let { drawLayer: __pdfY } = this.parent,
        pdfValue1148;
      (this.#d
        ? ((pdfParam425 = (pdfParam425 - this.rotation + 360) % 360),
          (pdfValue1148 = PdfClass4.#T(this.#l.box, pdfParam425)))
        : (pdfValue1148 = PdfClass4.#T(
            [this.x, this.y, this.width, this.height],
            pdfParam425,
          )),
        __pdfY.updateProperties(this.#u, {
          bbox: pdfValue1148,
          root: {
            "data-main-rotation": pdfParam425,
          },
        }),
        __pdfY.updateProperties(this.#m, {
          bbox: PdfClass4.#T(this.#a.box, pdfParam425),
          root: {
            "data-main-rotation": pdfParam425,
          },
        }));
    }
    render() {
      if (this.div) return this.div;
      let pdfValue797 = super.render();
      (this.#h &&
        (pdfValue797.setAttribute(`aria-label`, this.#h),
        pdfValue797.setAttribute(`role`, `mark`)),
        this.#d
          ? pdfValue797.classList.add(`free`)
          : this.div.addEventListener(`keydown`, this.#E.bind(this), {
              signal: this._uiManager._signal,
            }));
      let pdfValue798 = (this.#c = document.createElement(`div`));
      return (
        pdfValue797.append(pdfValue798),
        pdfValue798.setAttribute(`aria-hidden`, `true`),
        (pdfValue798.className = `internal`),
        (pdfValue798.style.clipPath = this.#r),
        this.setDims(this.width, this.height),
        pdfHelper25(this, this.#c, [`pointerover`, `pointerleave`]),
        this.enableEditing(),
        pdfValue797
      );
    }
    pointerover() {
      this.isSelected ||
        this.parent?.drawLayer.updateProperties(this.#m, {
          rootClass: {
            hovered: !0,
          },
        });
    }
    pointerleave() {
      this.isSelected ||
        this.parent?.drawLayer.updateProperties(this.#m, {
          rootClass: {
            hovered: !1,
          },
        });
    }
    #E(pdfParam1625) {
      PdfClass4._keyboardManager.exec(this, pdfParam1625);
    }
    _moveCaret(pdfParam965) {
      switch ((this.parent.unselect(this), pdfParam965)) {
        case 0:
        case 2:
          this.#D(!0);
          break;
        case 1:
        case 3:
          this.#D(!1);
          break;
      }
    }
    #D(pdfParam956) {
      if (!this.#e) return;
      let pdfValue1751 = window.getSelection();
      pdfParam956
        ? pdfValue1751.setPosition(this.#e, this.#t)
        : pdfValue1751.setPosition(this.#o, this.#s);
    }
    select() {
      (super.select(),
        this.#m &&
          this.parent?.drawLayer.updateProperties(this.#m, {
            rootClass: {
              hovered: !1,
              selected: !0,
            },
          }));
    }
    unselect() {
      (super.unselect(),
        this.#m &&
          (this.parent?.drawLayer.updateProperties(this.#m, {
            rootClass: {
              selected: !1,
            },
          }),
          this.#d || this.#D(!1)));
    }
    get _mustFixPosition() {
      return !this.#d;
    }
    show(pdfParam599 = this._isVisible) {
      (super.show(pdfParam599),
        this.parent &&
          (this.parent.drawLayer.updateProperties(this.#u, {
            rootClass: {
              hidden: !pdfParam599,
            },
          }),
          this.parent.drawLayer.updateProperties(this.#m, {
            rootClass: {
              hidden: !pdfParam599,
            },
          })));
    }
    #O() {
      return this.#d ? this.rotation : 0;
    }
    #k() {
      if (this.#d) return null;
      let [pdfValue1206, pdfValue1207] = this.pageDimensions,
        [__pdfY, pdfValue1208] = this.pageTranslation,
        pdfValue1209 = this.#n,
        pdfValue1210 = new Float32Array(pdfValue1209.length * 8),
        pdfValue1211 = 0;
      for (let {
        x: x,
        y: __pdfS,
        width: width,
        height: __pdfI,
      } of pdfValue1209) {
        let pdfValue1846 = x * pdfValue1206 + __pdfY,
          __pdfR = (1 - __pdfS) * pdfValue1207 + pdfValue1208;
        ((pdfValue1210[pdfValue1211] = pdfValue1210[pdfValue1211 + 4] =
          pdfValue1846),
          (pdfValue1210[pdfValue1211 + 1] = pdfValue1210[pdfValue1211 + 3] =
            __pdfR),
          (pdfValue1210[pdfValue1211 + 2] = pdfValue1210[pdfValue1211 + 6] =
            pdfValue1846 + width * pdfValue1206),
          (pdfValue1210[pdfValue1211 + 5] = pdfValue1210[pdfValue1211 + 7] =
            __pdfR - __pdfI * pdfValue1207),
          (pdfValue1211 += 8));
      }
      return pdfValue1210;
    }
    #A(pdfParam1579) {
      return this.#l.serialize(pdfParam1579, this.#O());
    }
    static startHighlighting(
      pdfParam117,
      pdfParam118,
      { target: __pdfY, x: x, y: y },
    ) {
      let {
          x: _x,
          y: _y,
          width: width,
          height: __pdfS,
        } = __pdfY.getBoundingClientRect(),
        pdfValue504 = new AbortController(),
        __pdfI = pdfParam117.combinedSignal(pdfValue504),
        __pdfR = (pdfParam1699) => {
          (pdfValue504.abort(), this.#M(pdfParam117, pdfParam1699));
        };
      (window.addEventListener(`blur`, __pdfR, {
        signal: __pdfI,
      }),
        window.addEventListener(`pointerup`, __pdfR, {
          signal: __pdfI,
        }),
        window.addEventListener(`pointerdown`, pdfDollar, {
          capture: !0,
          passive: !1,
          signal: __pdfI,
        }),
        window.addEventListener(`contextmenu`, _pdfQ, {
          signal: __pdfI,
        }),
        __pdfY.addEventListener(
          `pointermove`,
          this.#j.bind(this, pdfParam117),
          {
            signal: __pdfI,
          },
        ),
        (this._freeHighlight = new pdfValue160(
          {
            x: x,
            y: y,
          },
          [_x, _y, width, __pdfS],
          pdfParam117.scale,
          this._defaultThickness / 2,
          pdfParam118,
          0.001,
        )),
        ({ id: this._freeHighlightId, clipPathId: this._freeHighlightClipId } =
          pdfParam117.drawLayer.draw(
            {
              bbox: [0, 0, 1, 1],
              root: {
                viewBox: `0 0 1 1`,
                fill: this._defaultColor,
                "fill-opacity": this._defaultOpacity,
              },
              rootClass: {
                highlight: !0,
                free: !0,
              },
              path: {
                d: this._freeHighlight.toSVGPath(),
              },
            },
            !0,
            !0,
          )));
    }
    static #j(pdfParam862, pdfParam863) {
      this._freeHighlight.add(pdfParam863) &&
        pdfParam862.drawLayer.updateProperties(this._freeHighlightId, {
          path: {
            d: this._freeHighlight.toSVGPath(),
          },
        });
    }
    static #M(pdfParam354, pdfParam355) {
      (this._freeHighlight.isEmpty()
        ? pdfParam354.drawLayer.remove(this._freeHighlightId)
        : pdfParam354.createAndAddNewEditor(pdfParam355, !1, {
            highlightId: this._freeHighlightId,
            highlightOutlines: this._freeHighlight.getOutlines(),
            clipPathId: this._freeHighlightClipId,
            methodOfCreation: `main_toolbar`,
          }),
        (this._freeHighlightId = -1),
        (this._freeHighlight = null),
        (this._freeHighlightClipId = ``));
    }
    static async deserialize(pdfParam7, pdfParam8, __pdfY) {
      let pdfValue242 = null;
      if (pdfParam7 instanceof pdfValue149) {
        let {
          data: {
            quadPoints: _quadPoints,
            rect: ___pdfY,
            rotation: rotation,
            id: id,
            color: _color,
            opacity: _opacity,
            popupRef: ____pdfS,
            richText: richText,
            contentsObj: ___pdfR,
            creationDate: _____pdfS,
            modificationDate: modificationDate,
          },
          parent: {
            page: { pageNumber: _pdfNt },
          },
        } = pdfParam7;
        pdfValue242 = pdfParam7 = {
          annotationType: pdfI.HIGHLIGHT,
          color: Array.from(_color),
          opacity: _opacity,
          quadPoints: _quadPoints,
          boxes: null,
          pageIndex: _pdfNt - 1,
          rect: ___pdfY.slice(0),
          rotation: rotation,
          annotationElementId: id,
          id: id,
          deleted: !1,
          popupRef: ____pdfS,
          richText: richText,
          comment: ___pdfR?.str || null,
          creationDate: _____pdfS,
          modificationDate: modificationDate,
        };
      } else if (pdfParam7 instanceof pdfValue148) {
        let {
          data: {
            inkLists: _inkLists,
            rect: ___pdfY,
            rotation: rotation,
            id: id,
            color: _color,
            borderStyle: { rawWidth: rawWidth },
            popupRef: ____pdfS,
            richText: richText,
            contentsObj: ___pdfR,
            creationDate: _____pdfS,
            modificationDate: modificationDate,
          },
          parent: {
            page: { pageNumber: _pdfNt },
          },
        } = pdfParam7;
        pdfValue242 = pdfParam7 = {
          annotationType: pdfI.HIGHLIGHT,
          color: Array.from(_color),
          thickness: rawWidth,
          inkLists: _inkLists,
          boxes: null,
          pageIndex: _pdfNt - 1,
          rect: ___pdfY.slice(0),
          rotation: rotation,
          annotationElementId: id,
          id: id,
          deleted: !1,
          popupRef: ____pdfS,
          richText: richText,
          comment: ___pdfR?.str || null,
          creationDate: _____pdfS,
          modificationDate: modificationDate,
        };
      }
      let {
          color: color,
          quadPoints: quadPoints,
          inkLists: inkLists,
          opacity: opacity,
        } = pdfParam7,
        __pdfS = await super.deserialize(pdfParam7, pdfParam8, __pdfY);
      ((__pdfS.color = pdfA.makeHexColor(...color)),
        (__pdfS.opacity = opacity || 1),
        inkLists && (__pdfS.#g = pdfParam7.thickness),
        (__pdfS._initialData = pdfValue242),
        pdfParam7.comment && __pdfS.setCommentData(pdfParam7));
      let [pdfValue243, __pdfR] = __pdfS.pageDimensions,
        [___pdfS, pdfValue244] = __pdfS.pageTranslation;
      if (quadPoints) {
        let pdfValue1573 = (__pdfS.#n = []);
        for (
          let pdfValue1763 = 0;
          pdfValue1763 < quadPoints.length;
          pdfValue1763 += 8
        )
          pdfValue1573.push({
            x: (quadPoints[pdfValue1763] - ___pdfS) / pdfValue243,
            y: 1 - (quadPoints[pdfValue1763 + 1] - pdfValue244) / __pdfR,
            width:
              (quadPoints[pdfValue1763 + 2] - quadPoints[pdfValue1763]) /
              pdfValue243,
            height:
              (quadPoints[pdfValue1763 + 1] - quadPoints[pdfValue1763 + 5]) /
              __pdfR,
          });
        (__pdfS.#v(), __pdfS.#w(), __pdfS.rotate(__pdfS.rotation));
      } else if (inkLists) {
        __pdfS.#d = !0;
        let pdfValue867 = inkLists[0],
          ___pdfY = {
            x: pdfValue867[0] - ___pdfS,
            y: __pdfR - (pdfValue867[1] - pdfValue244),
          },
          pdfValue868 = new pdfValue160(
            ___pdfY,
            [0, 0, pdfValue243, __pdfR],
            1,
            __pdfS.#g / 2,
            !0,
            0.001,
          );
        for (
          let pdfValue2030 = 0, pdfValue2031 = pdfValue867.length;
          pdfValue2030 < pdfValue2031;
          pdfValue2030 += 2
        )
          ((___pdfY.x = pdfValue867[pdfValue2030] - ___pdfS),
            (___pdfY.y =
              __pdfR - (pdfValue867[pdfValue2030 + 1] - pdfValue244)),
            pdfValue868.add(___pdfY));
        let { id: id, clipPathId: clipPathId } = pdfParam8.drawLayer.draw(
          {
            bbox: [0, 0, 1, 1],
            root: {
              viewBox: `0 0 1 1`,
              fill: __pdfS.color,
              "fill-opacity": __pdfS._defaultOpacity,
            },
            rootClass: {
              highlight: !0,
              free: !0,
            },
            path: {
              d: pdfValue868.toSVGPath(),
            },
          },
          !0,
          !0,
        );
        (__pdfS.#y({
          highlightOutlines: pdfValue868.getOutlines(),
          highlightId: id,
          clipPathId: clipPathId,
        }),
          __pdfS.#w(),
          __pdfS.rotate(__pdfS.parentRotation));
      }
      return __pdfS;
    }
    serialize(pdfParam320 = !1) {
      if (this.isEmpty() || pdfParam320) return null;
      if (this.deleted) return this.serializeDeleted();
      let pdfValue948 = pdfValue31._colorManager.convert(
          this._uiManager.getNonHCMColor(this.color),
        ),
        __pdfY = super.serialize(pdfParam320);
      return (
        Object.assign(__pdfY, {
          color: pdfValue948,
          opacity: this.opacity,
          thickness: this.#g,
          quadPoints: this.#k(),
          outlines: this.#A(__pdfY.rect),
        }),
        this.addComment(__pdfY),
        this.annotationElementId && !this.#N(__pdfY)
          ? null
          : ((__pdfY.id = this.annotationElementId), __pdfY)
      );
    }
    #N(pdfParam1099) {
      let { color: color } = this._initialData;
      return (
        this.hasEditedComment ||
        pdfParam1099.color.some((item, __pdfY) => item !== color[__pdfY])
      );
    }
    renderAnnotationElement(pdfParam904) {
      return this.deleted
        ? (pdfParam904.hide(), null)
        : (pdfParam904.updateEdited({
            rect: this.getPDFRect(),
            popup: this.comment,
          }),
          null);
    }
    static canCreateNewEmptyEditor() {
      return !1;
    }
  },
  pdfValue162 = class {
    #e = Object.create(null);
    updateProperty(pdfParam1444, pdfParam1445) {
      ((this[pdfParam1444] = pdfParam1445),
        this.updateSVGProperty(pdfParam1444, pdfParam1445));
    }
    updateProperties(pdfParam1079) {
      if (pdfParam1079)
        for (let [pdfValue1985, __pdfY] of Object.entries(pdfParam1079))
          pdfValue1985.startsWith(`_`) ||
            this.updateProperty(pdfValue1985, __pdfY);
    }
    updateSVGProperty(pdfParam1649, pdfParam1650) {
      this.#e[pdfParam1649] = pdfParam1650;
    }
    toSVGProperties() {
      let pdfValue1986 = this.#e;
      return (
        (this.#e = Object.create(null)),
        {
          root: pdfValue1986,
        }
      );
    }
    reset() {
      this.#e = Object.create(null);
    }
    updateAll(pdfParam1586 = this) {
      this.updateProperties(pdfParam1586);
    }
    clone() {
      pdfHelper5(`Not implemented`);
    }
  },
  pdfValue163 = class PdfClass8 extends pdfValue31 {
    #e = null;
    #t;
    _colorPicker = null;
    _drawId = null;
    static _currentDrawId = -1;
    static _currentParent = null;
    static #n = null;
    static #r = null;
    static #i = null;
    static #a = NaN;
    static #o = null;
    static #s = null;
    static #c = NaN;
    static _INNER_MARGIN = 3;
    constructor(pdfParam1283) {
      (super(pdfParam1283),
        (this.#t = pdfParam1283.mustBeCommitted || !1),
        this._addOutlines(pdfParam1283));
    }
    onUpdatedColor() {
      (this._colorPicker?.update(this.color), super.onUpdatedColor());
    }
    _addOutlines(pdfParam1475) {
      pdfParam1475.drawOutlines && (this.#l(pdfParam1475), this.#f());
    }
    #l({ drawOutlines: drawOutlines, drawId: drawId, drawingOptions: __pdfY }) {
      ((this.#e = drawOutlines),
        (this._drawingOptions ||= __pdfY),
        this.annotationElementId ||
          this._uiManager.a11yAlert(
            `pdfjs-editor-${this.editorType}-added-alert`,
          ),
        drawId >= 0
          ? ((this._drawId = drawId),
            this.parent.drawLayer.finalizeDraw(
              drawId,
              drawOutlines.defaultProperties,
            ))
          : (this._drawId = this.#u(drawOutlines, this.parent)),
        this.#h(drawOutlines.box));
    }
    #u(pdfParam870, __pdfY) {
      let { id: id } = __pdfY.drawLayer.draw(
        PdfClass8._mergeSVGProperties(
          this._drawingOptions.toSVGProperties(),
          pdfParam870.defaultSVGProperties,
        ),
        !1,
        !1,
      );
      return id;
    }
    static _mergeSVGProperties(pdfParam824, pdfParam825) {
      let __pdfY = new Set(Object.keys(pdfParam824));
      for (let [pdfValue2010, pdfValue2011] of Object.entries(pdfParam825))
        __pdfY.has(pdfValue2010)
          ? Object.assign(pdfParam824[pdfValue2010], pdfValue2011)
          : (pdfParam824[pdfValue2010] = pdfValue2011);
      return pdfParam824;
    }
    static getDefaultDrawingOptions(pdfParam1462) {
      pdfHelper5(`Not implemented`);
    }
    static get typesMap() {
      pdfHelper5(`Not implemented`);
    }
    static get isDrawer() {
      return !0;
    }
    static get supportMultipleDrawings() {
      return !1;
    }
    static updateDefaultParams(pdfParam469, __pdfY) {
      let pdfValue1230 = this.typesMap.get(pdfParam469);
      (pdfValue1230 &&
        this._defaultDrawingOptions.updateProperty(pdfValue1230, __pdfY),
        this._currentParent &&
          (PdfClass8.#n.updateProperty(pdfValue1230, __pdfY),
          this._currentParent.drawLayer.updateProperties(
            this._currentDrawId,
            this._defaultDrawingOptions.toSVGProperties(),
          )));
    }
    updateParams(pdfParam1182, pdfParam1183) {
      let __pdfY = this.constructor.typesMap.get(pdfParam1182);
      __pdfY && this._updateProperty(pdfParam1182, __pdfY, pdfParam1183);
    }
    static get defaultPropertiesToUpdate() {
      let pdfValue1679 = [],
        pdfValue1680 = this._defaultDrawingOptions;
      for (let [__pdfY, pdfValue2183] of this.typesMap)
        pdfValue1679.push([__pdfY, pdfValue1680[pdfValue2183]]);
      return pdfValue1679;
    }
    get propertiesToUpdate() {
      let pdfValue1709 = [],
        { _drawingOptions: _drawingOptions } = this;
      for (let [__pdfY, pdfValue2108] of this.constructor.typesMap)
        pdfValue1709.push([__pdfY, _drawingOptions[pdfValue2108]]);
      return pdfValue1709;
    }
    _updateProperty(pdfParam308, pdfParam309, __pdfY) {
      let pdfValue910 = this._drawingOptions,
        pdfValue911 = pdfValue910[pdfParam309],
        pdfValue912 = (___pdfY) => {
          pdfValue910.updateProperty(pdfParam309, ___pdfY);
          let pdfValue1491 = this.#e.updateProperty(pdfParam309, ___pdfY);
          (pdfValue1491 && this.#h(pdfValue1491),
            this.parent?.drawLayer.updateProperties(
              this._drawId,
              pdfValue910.toSVGProperties(),
            ),
            pdfParam308 === this.colorType && this.onUpdatedColor());
        };
      this.addCommands({
        cmd: pdfValue912.bind(this, __pdfY),
        undo: pdfValue912.bind(this, pdfValue911),
        post: this._uiManager.updateUI.bind(this._uiManager, this),
        mustExec: !0,
        type: pdfParam308,
        overwriteIfSameType: !0,
        keepUndo: !0,
      });
    }
    _onResizing() {
      this.parent?.drawLayer.updateProperties(
        this._drawId,
        PdfClass8._mergeSVGProperties(
          this.#e.getPathResizingSVGProperties(this.#m()),
          {
            bbox: this.#g(),
          },
        ),
      );
    }
    _onResized() {
      this.parent?.drawLayer.updateProperties(
        this._drawId,
        PdfClass8._mergeSVGProperties(
          this.#e.getPathResizedSVGProperties(this.#m()),
          {
            bbox: this.#g(),
          },
        ),
      );
    }
    _onTranslating(pdfParam1158, pdfParam1159) {
      this.parent?.drawLayer.updateProperties(this._drawId, {
        bbox: this.#g(),
      });
    }
    _onTranslated() {
      this.parent?.drawLayer.updateProperties(
        this._drawId,
        PdfClass8._mergeSVGProperties(
          this.#e.getPathTranslatedSVGProperties(
            this.#m(),
            this.parentDimensions,
          ),
          {
            bbox: this.#g(),
          },
        ),
      );
    }
    _onStartDragging() {
      this.parent?.drawLayer.updateProperties(this._drawId, {
        rootClass: {
          moving: !0,
        },
      });
    }
    _onStopDragging() {
      this.parent?.drawLayer.updateProperties(this._drawId, {
        rootClass: {
          moving: !1,
        },
      });
    }
    commit() {
      (super.commit(), this.disableEditMode(), this.disableEditing());
    }
    disableEditing() {
      (super.disableEditing(), this.div.classList.toggle(`disabled`, !0));
    }
    enableEditing() {
      (super.enableEditing(), this.div.classList.toggle(`disabled`, !1));
    }
    getBaseTranslation() {
      return [0, 0];
    }
    get isResizable() {
      return !0;
    }
    onceAdded(pdfParam597) {
      (this.annotationElementId || this.parent.addUndoableEditor(this),
        (this._isDraggable = !0),
        this.#t &&
          ((this.#t = !1),
          this.commit(),
          this.parent.setSelected(this),
          pdfParam597 && this.isOnScreen && this.div.focus()));
    }
    remove() {
      (this.#d(), super.remove());
    }
    rebuild() {
      this.parent &&
        (super.rebuild(),
        this.div !== null &&
          (this.#f(),
          this.#h(this.#e.box),
          this.isAttachedToDOM || this.parent.add(this)));
    }
    setParent(pdfParam515) {
      let pdfValue1327 = !1;
      (this.parent && !pdfParam515
        ? (this._uiManager.removeShouldRescale(this), this.#d())
        : pdfParam515 &&
          (this._uiManager.addShouldRescale(this),
          this.#f(pdfParam515),
          (pdfValue1327 =
            !this.parent && this.div?.classList.contains(`selectedEditor`))),
        super.setParent(pdfParam515),
        pdfValue1327 && this.select());
    }
    #d() {
      this._drawId === null ||
        !this.parent ||
        (this.parent.drawLayer.remove(this._drawId),
        (this._drawId = null),
        this._drawingOptions.reset());
    }
    #f(pdfParam568 = this.parent) {
      if (!(this._drawId !== null && this.parent === pdfParam568)) {
        if (this._drawId !== null) {
          this.parent.drawLayer.updateParent(
            this._drawId,
            pdfParam568.drawLayer,
          );
          return;
        }
        (this._drawingOptions.updateAll(),
          (this._drawId = this.#u(this.#e, pdfParam568)));
      }
    }
    #p([pdfParam619, pdfParam620, __pdfY, pdfParam621]) {
      let {
        parentDimensions: [pdfValue1482, pdfValue1483],
        rotation: rotation,
      } = this;
      switch (rotation) {
        case 90:
          return [
            pdfParam620,
            1 - pdfParam619,
            (pdfValue1483 / pdfValue1482) * __pdfY,
            (pdfValue1482 / pdfValue1483) * pdfParam621,
          ];
        case 180:
          return [1 - pdfParam619, 1 - pdfParam620, __pdfY, pdfParam621];
        case 270:
          return [
            1 - pdfParam620,
            pdfParam619,
            (pdfValue1483 / pdfValue1482) * __pdfY,
            (pdfValue1482 / pdfValue1483) * pdfParam621,
          ];
        default:
          return [pdfParam619, pdfParam620, __pdfY, pdfParam621];
      }
    }
    #m() {
      let {
        x: x,
        y: y,
        width: __pdfY,
        height: height,
        parentDimensions: [pdfValue1431, pdfValue1432],
        rotation: rotation,
      } = this;
      switch (rotation) {
        case 90:
          return [
            1 - y,
            x,
            (pdfValue1431 / pdfValue1432) * __pdfY,
            (pdfValue1432 / pdfValue1431) * height,
          ];
        case 180:
          return [1 - x, 1 - y, __pdfY, height];
        case 270:
          return [
            y,
            1 - x,
            (pdfValue1431 / pdfValue1432) * __pdfY,
            (pdfValue1432 / pdfValue1431) * height,
          ];
        default:
          return [x, y, __pdfY, height];
      }
    }
    #h(pdfParam918) {
      (([this.x, this.y, this.width, this.height] = this.#p(pdfParam918)),
        this.div && (this.fixAndSetPosition(), this.setDims()),
        this._onResized());
    }
    #g() {
      let {
        x: x,
        y: y,
        width: __pdfY,
        height: height,
        rotation: rotation,
        parentRotation: parentRotation,
        parentDimensions: [pdfValue633, pdfValue634],
      } = this;
      switch ((rotation * 4 + parentRotation) / 90) {
        case 1:
          return [1 - y - height, x, height, __pdfY];
        case 2:
          return [1 - x - __pdfY, 1 - y - height, __pdfY, height];
        case 3:
          return [y, 1 - x - __pdfY, height, __pdfY];
        case 4:
          return [
            x,
            y - (pdfValue633 / pdfValue634) * __pdfY,
            (pdfValue634 / pdfValue633) * height,
            (pdfValue633 / pdfValue634) * __pdfY,
          ];
        case 5:
          return [
            1 - y,
            x,
            (pdfValue633 / pdfValue634) * __pdfY,
            (pdfValue634 / pdfValue633) * height,
          ];
        case 6:
          return [
            1 - x - (pdfValue634 / pdfValue633) * height,
            1 - y,
            (pdfValue634 / pdfValue633) * height,
            (pdfValue633 / pdfValue634) * __pdfY,
          ];
        case 7:
          return [
            y - (pdfValue633 / pdfValue634) * __pdfY,
            1 - x - (pdfValue634 / pdfValue633) * height,
            (pdfValue633 / pdfValue634) * __pdfY,
            (pdfValue634 / pdfValue633) * height,
          ];
        case 8:
          return [x - __pdfY, y - height, __pdfY, height];
        case 9:
          return [1 - y, x - __pdfY, height, __pdfY];
        case 10:
          return [1 - x, 1 - y, __pdfY, height];
        case 11:
          return [y - height, 1 - x, height, __pdfY];
        case 12:
          return [
            x - (pdfValue634 / pdfValue633) * height,
            y,
            (pdfValue634 / pdfValue633) * height,
            (pdfValue633 / pdfValue634) * __pdfY,
          ];
        case 13:
          return [
            1 - y - (pdfValue633 / pdfValue634) * __pdfY,
            x - (pdfValue634 / pdfValue633) * height,
            (pdfValue633 / pdfValue634) * __pdfY,
            (pdfValue634 / pdfValue633) * height,
          ];
        case 14:
          return [
            1 - x,
            1 - y - (pdfValue633 / pdfValue634) * __pdfY,
            (pdfValue634 / pdfValue633) * height,
            (pdfValue633 / pdfValue634) * __pdfY,
          ];
        case 15:
          return [
            y,
            1 - x,
            (pdfValue633 / pdfValue634) * __pdfY,
            (pdfValue634 / pdfValue633) * height,
          ];
        default:
          return [x, y, __pdfY, height];
      }
    }
    rotate() {
      this.parent &&
        this.parent.drawLayer.updateProperties(
          this._drawId,
          PdfClass8._mergeSVGProperties(
            {
              bbox: this.#g(),
            },
            this.#e.updateRotation(
              (this.parentRotation - this.rotation + 360) % 360,
            ),
          ),
        );
    }
    onScaleChanging() {
      this.parent &&
        this.#h(
          this.#e.updateParentDimensions(
            this.parentDimensions,
            this.parent.scale,
          ),
        );
    }
    static onScaleChangingWhenDrawing() {}
    render() {
      if (this.div) return this.div;
      let pdfValue1022, pdfValue1023;
      this._isCopy && ((pdfValue1022 = this.x), (pdfValue1023 = this.y));
      let __pdfY = super.render();
      __pdfY.classList.add(`draw`);
      let pdfValue1024 = document.createElement(`div`);
      return (
        __pdfY.append(pdfValue1024),
        pdfValue1024.setAttribute(`aria-hidden`, `true`),
        (pdfValue1024.className = `internal`),
        this.setDims(),
        this._uiManager.addShouldRescale(this),
        this.disableEditing(),
        this._isCopy && this._moveAfterPaste(pdfValue1022, pdfValue1023),
        __pdfY
      );
    }
    static createDrawerInstance(
      pdfParam1406,
      pdfParam1407,
      __pdfY,
      pdfParam1408,
      pdfParam1409,
    ) {
      pdfHelper5(`Not implemented`);
    }
    static startDrawing(pdfParam19, __pdfY, pdfParam20, pdfParam21) {
      let {
        target: target,
        offsetX: offsetX,
        offsetY: offsetY,
        pointerId: __pdfS,
        pointerType: pointerType,
      } = pdfParam21;
      if (PdfClass8.#o && PdfClass8.#o !== pointerType) return;
      let {
          viewport: { rotation: __pdfI },
        } = pdfParam19,
        { width: __pdfR, height: ___pdfS } = target.getBoundingClientRect(),
        pdfValue322 = (PdfClass8.#r = new AbortController()),
        _pdfNt = pdfParam19.combinedSignal(pdfValue322);
      if (
        ((PdfClass8.#a ||= __pdfS),
        (PdfClass8.#o ??= pointerType),
        window.addEventListener(
          `pointerup`,
          (event) => {
            PdfClass8.#a === event.pointerId
              ? this._endDraw(event)
              : PdfClass8.#s?.delete(event.pointerId);
          },
          {
            signal: _pdfNt,
          },
        ),
        window.addEventListener(
          `pointercancel`,
          (event) => {
            PdfClass8.#a === event.pointerId
              ? this._currentParent.endDrawingSession()
              : PdfClass8.#s?.delete(event.pointerId);
          },
          {
            signal: _pdfNt,
          },
        ),
        window.addEventListener(
          `pointerdown`,
          (event) => {
            PdfClass8.#o === event.pointerType &&
              ((PdfClass8.#s ||= new Set()).add(event.pointerId),
              PdfClass8.#n.isCancellable() &&
                (PdfClass8.#n.removeLastElement(),
                PdfClass8.#n.isEmpty()
                  ? this._currentParent.endDrawingSession(!0)
                  : this._endDraw(null)));
          },
          {
            capture: !0,
            passive: !1,
            signal: _pdfNt,
          },
        ),
        window.addEventListener(`contextmenu`, _pdfQ, {
          signal: _pdfNt,
        }),
        target.addEventListener(`pointermove`, this._drawMove.bind(this), {
          signal: _pdfNt,
        }),
        target.addEventListener(
          `touchmove`,
          (pdfParam1694) => {
            pdfParam1694.timeStamp === PdfClass8.#c && pdfDollar(pdfParam1694);
          },
          {
            signal: _pdfNt,
          },
        ),
        pdfParam19.toggleDrawing(),
        __pdfY._editorUndoBar?.hide(),
        PdfClass8.#n)
      ) {
        pdfParam19.drawLayer.updateProperties(
          this._currentDrawId,
          PdfClass8.#n.startNew(offsetX, offsetY, __pdfR, ___pdfS, __pdfI),
        );
        return;
      }
      (__pdfY.updateUIForDefaultProperties(this),
        (PdfClass8.#n = this.createDrawerInstance(
          offsetX,
          offsetY,
          __pdfR,
          ___pdfS,
          __pdfI,
        )),
        (PdfClass8.#i = this.getDefaultDrawingOptions()),
        (this._currentParent = pdfParam19),
        ({ id: this._currentDrawId } = pdfParam19.drawLayer.draw(
          this._mergeSVGProperties(
            PdfClass8.#i.toSVGProperties(),
            PdfClass8.#n.defaultSVGProperties,
          ),
          !0,
          !1,
        )));
    }
    static _drawMove(pdfParam526) {
      if (((PdfClass8.#c = -1), !PdfClass8.#n)) return;
      let {
        offsetX: __pdfY,
        offsetY: offsetY,
        pointerId: pointerId,
      } = pdfParam526;
      if (PdfClass8.#a === pointerId) {
        if (PdfClass8.#s?.size >= 1) {
          this._endDraw(pdfParam526);
          return;
        }
        (this._currentParent.drawLayer.updateProperties(
          this._currentDrawId,
          PdfClass8.#n.add(__pdfY, offsetY),
        ),
          (PdfClass8.#c = pdfParam526.timeStamp),
          pdfDollar(pdfParam526));
      }
    }
    static _cleanup(pdfParam733) {
      (pdfParam733 &&
        ((this._currentDrawId = -1),
        (this._currentParent = null),
        (PdfClass8.#n = null),
        (PdfClass8.#i = null),
        (PdfClass8.#o = null),
        (PdfClass8.#c = NaN)),
        PdfClass8.#r &&
          (PdfClass8.#r.abort(),
          (PdfClass8.#r = null),
          (PdfClass8.#a = NaN),
          (PdfClass8.#s = null)));
    }
    static _endDraw(event) {
      let __pdfY = this._currentParent;
      if (__pdfY) {
        if (
          (__pdfY.toggleDrawing(!0),
          this._cleanup(!1),
          event?.target === __pdfY.div &&
            __pdfY.drawLayer.updateProperties(
              this._currentDrawId,
              PdfClass8.#n.end(event.offsetX, event.offsetY),
            ),
          this.supportMultipleDrawings)
        ) {
          let pdfValue1354 = PdfClass8.#n,
            pdfValue1355 = this._currentDrawId,
            pdfValue1356 = pdfValue1354.getLastElement();
          __pdfY.addCommands({
            cmd: () => {
              __pdfY.drawLayer.updateProperties(
                pdfValue1355,
                pdfValue1354.setLastElement(pdfValue1356),
              );
            },
            undo: () => {
              __pdfY.drawLayer.updateProperties(
                pdfValue1355,
                pdfValue1354.removeLastElement(),
              );
            },
            mustExec: !1,
            type: pdfR.DRAW_STEP,
          });
          return;
        }
        this.endDrawing(!1);
      }
    }
    static endDrawing(pdfParam286) {
      let __pdfY = this._currentParent;
      if (!__pdfY) return null;
      if (
        (__pdfY.toggleDrawing(!0),
        __pdfY.cleanUndoStack(pdfR.DRAW_STEP),
        !PdfClass8.#n.isEmpty())
      ) {
        let {
            pageDimensions: [pdfValue1330, pdfValue1331],
            scale: scale,
          } = __pdfY,
          pdfValue1332 = __pdfY.createAndAddNewEditor(
            {
              offsetX: 0,
              offsetY: 0,
            },
            !1,
            {
              drawId: this._currentDrawId,
              drawOutlines: PdfClass8.#n.getOutlines(
                pdfValue1330 * scale,
                pdfValue1331 * scale,
                scale,
                this._INNER_MARGIN,
              ),
              drawingOptions: PdfClass8.#i,
              mustBeCommitted: !pdfParam286,
            },
          );
        return (this._cleanup(!0), pdfValue1332);
      }
      return (
        __pdfY.drawLayer.remove(this._currentDrawId),
        this._cleanup(!0),
        null
      );
    }
    createDrawingOptions(pdfParam1707) {}
    static deserializeDraw(
      pdfParam1452,
      pdfParam1453,
      __pdfY,
      pdfParam1454,
      pdfParam1455,
      pdfParam1456,
    ) {
      pdfHelper5(`Not implemented`);
    }
    static async deserialize(pdfParam455, pdfParam456, __pdfY) {
      let {
          rawDims: {
            pageWidth: pageWidth,
            pageHeight: pageHeight,
            pageX: pageX,
            pageY: pageY,
          },
        } = pdfParam456.viewport,
        pdfValue1198 = this.deserializeDraw(
          pageX,
          pageY,
          pageWidth,
          pageHeight,
          this._INNER_MARGIN,
          pdfParam455,
        ),
        __pdfS = await super.deserialize(pdfParam455, pdfParam456, __pdfY);
      return (
        __pdfS.createDrawingOptions(pdfParam455),
        __pdfS.#l({
          drawOutlines: pdfValue1198,
        }),
        __pdfS.#f(),
        __pdfS.onScaleChanging(),
        __pdfS.rotate(),
        __pdfS
      );
    }
    serializeDraw(pdfParam1002) {
      let [pdfValue1776, __pdfY] = this.pageTranslation,
        [pdfValue1777, pdfValue1778] = this.pageDimensions;
      return this.#e.serialize(
        [pdfValue1776, __pdfY, pdfValue1777, pdfValue1778],
        pdfParam1002,
      );
    }
    renderAnnotationElement(pdfParam1241) {
      return (
        pdfParam1241.updateEdited({
          rect: this.getPDFRect(),
        }),
        null
      );
    }
    static canCreateNewEmptyEditor() {
      return !1;
    }
  },
  pdfValue164 = class {
    #e = new Float64Array(6);
    #t;
    #n;
    #r;
    #i;
    #a;
    #o = ``;
    #s = 0;
    #c = new pdfValue165();
    #l;
    #u;
    constructor(
      pdfParam644,
      pdfParam645,
      __pdfY,
      pdfParam646,
      pdfParam647,
      pdfParam648,
    ) {
      ((this.#l = __pdfY),
        (this.#u = pdfParam646),
        (this.#r = pdfParam647),
        (this.#i = pdfParam648),
        ([pdfParam644, pdfParam645] = this.#d(pdfParam644, pdfParam645)));
      let pdfValue1509 = (this.#t = [
        NaN,
        NaN,
        NaN,
        NaN,
        pdfParam644,
        pdfParam645,
      ]);
      ((this.#a = [pdfParam644, pdfParam645]),
        (this.#n = [
          {
            line: pdfValue1509,
            points: this.#a,
          },
        ]),
        this.#e.set(pdfValue1509, 0));
    }
    updateProperty(pdfParam1513, pdfParam1514) {
      pdfParam1513 === `stroke-width` && (this.#i = pdfParam1514);
    }
    #d(pdfParam1386, pdfParam1387) {
      return $._normalizePoint(
        pdfParam1386,
        pdfParam1387,
        this.#l,
        this.#u,
        this.#r,
      );
    }
    isEmpty() {
      return !this.#n || this.#n.length === 0;
    }
    isCancellable() {
      return this.#a.length <= 10;
    }
    add(pdfParam333, pdfParam334) {
      [pdfParam333, pdfParam334] = this.#d(pdfParam333, pdfParam334);
      let [__pdfY, pdfValue974, pdfValue975, pdfValue976] = this.#e.subarray(
          2,
          6,
        ),
        pdfValue977 = pdfParam333 - pdfValue975,
        pdfValue978 = pdfParam334 - pdfValue976;
      return Math.hypot(this.#l * pdfValue977, this.#u * pdfValue978) <= 2
        ? null
        : (this.#a.push(pdfParam333, pdfParam334),
          isNaN(__pdfY)
            ? (this.#e.set(
                [pdfValue975, pdfValue976, pdfParam333, pdfParam334],
                2,
              ),
              this.#t.push(NaN, NaN, NaN, NaN, pdfParam333, pdfParam334),
              {
                path: {
                  d: this.toSVGPath(),
                },
              })
            : (isNaN(this.#e[0]) && this.#t.splice(6, 6),
              this.#e.set(
                [
                  __pdfY,
                  pdfValue974,
                  pdfValue975,
                  pdfValue976,
                  pdfParam333,
                  pdfParam334,
                ],
                0,
              ),
              this.#t.push(
                ...$.createBezierPoints(
                  __pdfY,
                  pdfValue974,
                  pdfValue975,
                  pdfValue976,
                  pdfParam333,
                  pdfParam334,
                ),
              ),
              {
                path: {
                  d: this.toSVGPath(),
                },
              }));
    }
    end(pdfParam1207, pdfParam1208) {
      return (
        this.add(pdfParam1207, pdfParam1208) ||
        (this.#a.length === 2
          ? {
              path: {
                d: this.toSVGPath(),
              },
            }
          : null)
      );
    }
    startNew(pdfParam408, pdfParam409, __pdfY, pdfParam410, pdfParam411) {
      ((this.#l = __pdfY),
        (this.#u = pdfParam410),
        (this.#r = pdfParam411),
        ([pdfParam408, pdfParam409] = this.#d(pdfParam408, pdfParam409)));
      let pdfValue1129 = (this.#t = [
        NaN,
        NaN,
        NaN,
        NaN,
        pdfParam408,
        pdfParam409,
      ]);
      this.#a = [pdfParam408, pdfParam409];
      let pdfValue1130 = this.#n.at(-1);
      return (
        pdfValue1130 &&
          ((pdfValue1130.line = new Float32Array(pdfValue1130.line)),
          (pdfValue1130.points = new Float32Array(pdfValue1130.points))),
        this.#n.push({
          line: pdfValue1129,
          points: this.#a,
        }),
        this.#e.set(pdfValue1129, 0),
        (this.#s = 0),
        this.toSVGPath(),
        null
      );
    }
    getLastElement() {
      return this.#n.at(-1);
    }
    setLastElement(pdfParam798) {
      return this.#n
        ? (this.#n.push(pdfParam798),
          (this.#t = pdfParam798.line),
          (this.#a = pdfParam798.points),
          (this.#s = 0),
          {
            path: {
              d: this.toSVGPath(),
            },
          })
        : this.#c.setLastElement(pdfParam798);
    }
    removeLastElement() {
      if (!this.#n) return this.#c.removeLastElement();
      (this.#n.pop(), (this.#o = ``));
      for (
        let pdfValue1752 = 0, pdfValue1753 = this.#n.length;
        pdfValue1752 < pdfValue1753;
        pdfValue1752++
      ) {
        let { line: line, points: __pdfY } = this.#n[pdfValue1752];
        ((this.#t = line), (this.#a = __pdfY), (this.#s = 0), this.toSVGPath());
      }
      return {
        path: {
          d: this.#o,
        },
      };
    }
    toSVGPath() {
      let pdfValue639 = $.svgRound(this.#t[4]),
        pdfValue640 = $.svgRound(this.#t[5]);
      if (this.#a.length === 2)
        return (
          (this.#o = `${this.#o} M ${pdfValue639} ${pdfValue640} Z`),
          this.#o
        );
      if (this.#a.length <= 6) {
        let ___pdfY = this.#o.lastIndexOf(`M`);
        ((this.#o = `${this.#o.slice(0, ___pdfY)} M ${pdfValue639} ${pdfValue640}`),
          (this.#s = 6));
      }
      if (this.#a.length === 4) {
        let pdfValue1760 = $.svgRound(this.#t[10]),
          pdfValue1761 = $.svgRound(this.#t[11]);
        return (
          (this.#o = `${this.#o} L ${pdfValue1760} ${pdfValue1761}`),
          (this.#s = 12),
          this.#o
        );
      }
      let __pdfY = [];
      this.#s === 0 &&
        (__pdfY.push(`M ${pdfValue639} ${pdfValue640}`), (this.#s = 6));
      for (
        let pdfValue1651 = this.#s, pdfValue1652 = this.#t.length;
        pdfValue1651 < pdfValue1652;
        pdfValue1651 += 6
      ) {
        let [
          pdfValue1865,
          pdfValue1866,
          pdfValue1867,
          pdfValue1868,
          pdfValue1869,
          pdfValue1870,
        ] = this.#t.slice(pdfValue1651, pdfValue1651 + 6).map($.svgRound);
        __pdfY.push(
          `C${pdfValue1865} ${pdfValue1866} ${pdfValue1867} ${pdfValue1868} ${pdfValue1869} ${pdfValue1870}`,
        );
      }
      return (
        (this.#o += __pdfY.join(` `)),
        (this.#s = this.#t.length),
        this.#o
      );
    }
    getOutlines(pdfParam550, pdfParam551, __pdfY, pdfParam552) {
      let pdfValue1393 = this.#n.at(-1);
      return (
        (pdfValue1393.line = new Float32Array(pdfValue1393.line)),
        (pdfValue1393.points = new Float32Array(pdfValue1393.points)),
        this.#c.build(
          this.#n,
          pdfParam550,
          pdfParam551,
          __pdfY,
          this.#r,
          this.#i,
          pdfParam552,
        ),
        (this.#e = null),
        (this.#t = null),
        (this.#n = null),
        (this.#o = null),
        this.#c
      );
    }
    get defaultSVGProperties() {
      return {
        root: {
          viewBox: `0 0 10000 10000`,
        },
        rootClass: {
          draw: !0,
        },
        bbox: [0, 0, 1, 1],
      };
    }
  },
  pdfValue165 = class extends $ {
    #e;
    #t = 0;
    #n;
    #r;
    #i;
    #a;
    #o;
    #s;
    #c;
    build(
      pdfParam1057,
      pdfParam1058,
      __pdfY,
      pdfParam1059,
      pdfParam1060,
      pdfParam1061,
      pdfParam1062,
    ) {
      ((this.#i = pdfParam1058),
        (this.#a = __pdfY),
        (this.#o = pdfParam1059),
        (this.#s = pdfParam1060),
        (this.#c = pdfParam1061),
        (this.#n = pdfParam1062 ?? 0),
        (this.#r = pdfParam1057),
        this.#d());
    }
    get thickness() {
      return this.#c;
    }
    setLastElement(pdfParam1335) {
      return (
        this.#r.push(pdfParam1335),
        {
          path: {
            d: this.toSVGPath(),
          },
        }
      );
    }
    removeLastElement() {
      return (
        this.#r.pop(),
        {
          path: {
            d: this.toSVGPath(),
          },
        }
      );
    }
    toSVGPath() {
      let pdfValue989 = [];
      for (let { line: line } of this.#r) {
        if (
          (pdfValue989.push(`M${$.svgRound(line[4])} ${$.svgRound(line[5])}`),
          line.length === 6)
        ) {
          pdfValue989.push(`Z`);
          continue;
        }
        if (line.length === 12 && isNaN(line[6])) {
          pdfValue989.push(`L${$.svgRound(line[10])} ${$.svgRound(line[11])}`);
          continue;
        }
        for (
          let __pdfY = 6, pdfValue1716 = line.length;
          __pdfY < pdfValue1716;
          __pdfY += 6
        ) {
          let [
            pdfValue1883,
            pdfValue1884,
            pdfValue1885,
            pdfValue1886,
            pdfValue1887,
            __pdfS,
          ] = line.subarray(__pdfY, __pdfY + 6).map($.svgRound);
          pdfValue989.push(
            `C${pdfValue1883} ${pdfValue1884} ${pdfValue1885} ${pdfValue1886} ${pdfValue1887} ${__pdfS}`,
          );
        }
      }
      return pdfValue989.join(``);
    }
    serialize([pdfParam180, pdfParam181, __pdfY, pdfParam182], pdfParam183) {
      let pdfValue647 = [],
        pdfValue648 = [],
        [pdfValue649, __pdfS, pdfValue650, __pdfI] = this.#u(),
        __pdfR,
        ___pdfS,
        pdfValue651,
        _pdfNt,
        __pdfC,
        pdfValue652,
        __pdfJ,
        __pdfG,
        pdfValue653;
      switch (this.#s) {
        case 0:
          ((pdfValue653 = $._rescale),
            (__pdfR = pdfParam180),
            (___pdfS = pdfParam181 + pdfParam182),
            (pdfValue651 = __pdfY),
            (_pdfNt = -pdfParam182),
            (__pdfC = pdfParam180 + pdfValue649 * __pdfY),
            (pdfValue652 = pdfParam181 + (1 - __pdfS - __pdfI) * pdfParam182),
            (__pdfJ = pdfParam180 + (pdfValue649 + pdfValue650) * __pdfY),
            (__pdfG = pdfParam181 + (1 - __pdfS) * pdfParam182));
          break;
        case 90:
          ((pdfValue653 = $._rescaleAndSwap),
            (__pdfR = pdfParam180),
            (___pdfS = pdfParam181),
            (pdfValue651 = __pdfY),
            (_pdfNt = pdfParam182),
            (__pdfC = pdfParam180 + __pdfS * __pdfY),
            (pdfValue652 = pdfParam181 + pdfValue649 * pdfParam182),
            (__pdfJ = pdfParam180 + (__pdfS + __pdfI) * __pdfY),
            (__pdfG = pdfParam181 + (pdfValue649 + pdfValue650) * pdfParam182));
          break;
        case 180:
          ((pdfValue653 = $._rescale),
            (__pdfR = pdfParam180 + __pdfY),
            (___pdfS = pdfParam181),
            (pdfValue651 = -__pdfY),
            (_pdfNt = pdfParam182),
            (__pdfC = pdfParam180 + (1 - pdfValue649 - pdfValue650) * __pdfY),
            (pdfValue652 = pdfParam181 + __pdfS * pdfParam182),
            (__pdfJ = pdfParam180 + (1 - pdfValue649) * __pdfY),
            (__pdfG = pdfParam181 + (__pdfS + __pdfI) * pdfParam182));
          break;
        case 270:
          ((pdfValue653 = $._rescaleAndSwap),
            (__pdfR = pdfParam180 + __pdfY),
            (___pdfS = pdfParam181 + pdfParam182),
            (pdfValue651 = -__pdfY),
            (_pdfNt = -pdfParam182),
            (__pdfC = pdfParam180 + (1 - __pdfS - __pdfI) * __pdfY),
            (pdfValue652 =
              pdfParam181 + (1 - pdfValue649 - pdfValue650) * pdfParam182),
            (__pdfJ = pdfParam180 + (1 - __pdfS) * __pdfY),
            (__pdfG = pdfParam181 + (1 - pdfValue649) * pdfParam182));
          break;
      }
      for (let { line: line, points: points } of this.#r)
        (pdfValue647.push(
          pdfValue653(
            line,
            __pdfR,
            ___pdfS,
            pdfValue651,
            _pdfNt,
            pdfParam183 ? Array(line.length) : null,
          ),
        ),
          pdfValue648.push(
            pdfValue653(
              points,
              __pdfR,
              ___pdfS,
              pdfValue651,
              _pdfNt,
              pdfParam183 ? Array(points.length) : null,
            ),
          ));
      return {
        lines: pdfValue647,
        points: pdfValue648,
        rect: [__pdfC, pdfValue652, __pdfJ, __pdfG],
      };
    }
    static deserialize(
      pdfParam76,
      pdfParam77,
      __pdfY,
      pdfParam78,
      pdfParam79,
      {
        paths: { lines: lines, points: points },
        rotation: rotation,
        thickness: __pdfS,
      },
    ) {
      let pdfValue449 = [],
        __pdfI,
        __pdfR,
        ___pdfS,
        pdfValue450,
        _pdfNt;
      switch (rotation) {
        case 0:
          ((_pdfNt = $._rescale),
            (__pdfI = -pdfParam76 / __pdfY),
            (__pdfR = pdfParam77 / pdfParam78 + 1),
            (___pdfS = 1 / __pdfY),
            (pdfValue450 = -1 / pdfParam78));
          break;
        case 90:
          ((_pdfNt = $._rescaleAndSwap),
            (__pdfI = -pdfParam77 / pdfParam78),
            (__pdfR = -pdfParam76 / __pdfY),
            (___pdfS = 1 / pdfParam78),
            (pdfValue450 = 1 / __pdfY));
          break;
        case 180:
          ((_pdfNt = $._rescale),
            (__pdfI = pdfParam76 / __pdfY + 1),
            (__pdfR = -pdfParam77 / pdfParam78),
            (___pdfS = -1 / __pdfY),
            (pdfValue450 = 1 / pdfParam78));
          break;
        case 270:
          ((_pdfNt = $._rescaleAndSwap),
            (__pdfI = pdfParam77 / pdfParam78 + 1),
            (__pdfR = pdfParam76 / __pdfY + 1),
            (___pdfS = -1 / pdfParam78),
            (pdfValue450 = -1 / __pdfY));
          break;
      }
      if (!lines) {
        lines = [];
        for (let pdfValue924 of points) {
          let pdfValue955 = pdfValue924.length;
          if (pdfValue955 === 2) {
            lines.push(
              new Float32Array([
                NaN,
                NaN,
                NaN,
                NaN,
                pdfValue924[0],
                pdfValue924[1],
              ]),
            );
            continue;
          }
          if (pdfValue955 === 4) {
            lines.push(
              new Float32Array([
                NaN,
                NaN,
                NaN,
                NaN,
                pdfValue924[0],
                pdfValue924[1],
                NaN,
                NaN,
                NaN,
                NaN,
                pdfValue924[2],
                pdfValue924[3],
              ]),
            );
            continue;
          }
          let ___pdfY = new Float32Array(3 * (pdfValue955 - 2));
          lines.push(___pdfY);
          let [pdfValue956, pdfValue957, pdfValue958, pdfValue959] =
            pdfValue924.subarray(0, 4);
          ___pdfY.set([NaN, NaN, NaN, NaN, pdfValue956, pdfValue957], 0);
          for (
            let pdfValue1779 = 4;
            pdfValue1779 < pdfValue955;
            pdfValue1779 += 2
          ) {
            let pdfValue1902 = pdfValue924[pdfValue1779],
              ____pdfS = pdfValue924[pdfValue1779 + 1];
            (___pdfY.set(
              $.createBezierPoints(
                pdfValue956,
                pdfValue957,
                pdfValue958,
                pdfValue959,
                pdfValue1902,
                ____pdfS,
              ),
              (pdfValue1779 - 2) * 3,
            ),
              ([pdfValue956, pdfValue957, pdfValue958, pdfValue959] = [
                pdfValue958,
                pdfValue959,
                pdfValue1902,
                ____pdfS,
              ]));
          }
        }
      }
      for (
        let pdfValue1764 = 0, pdfValue1765 = lines.length;
        pdfValue1764 < pdfValue1765;
        pdfValue1764++
      )
        pdfValue449.push({
          line: _pdfNt(
            lines[pdfValue1764].map((item) => item ?? NaN),
            __pdfI,
            __pdfR,
            ___pdfS,
            pdfValue450,
          ),
          points: _pdfNt(
            points[pdfValue1764].map((item) => item ?? NaN),
            __pdfI,
            __pdfR,
            ___pdfS,
            pdfValue450,
          ),
        });
      let __pdfC = new this.prototype.constructor();
      return (
        __pdfC.build(
          pdfValue449,
          __pdfY,
          pdfParam78,
          1,
          rotation,
          __pdfS,
          pdfParam79,
        ),
        __pdfC
      );
    }
    #l(pdfParam1036 = this.#c) {
      let pdfValue1814 = this.#n + (pdfParam1036 / 2) * this.#o;
      return this.#s % 180 == 0
        ? [pdfValue1814 / this.#i, pdfValue1814 / this.#a]
        : [pdfValue1814 / this.#a, pdfValue1814 / this.#i];
    }
    #u() {
      let [pdfValue2012, pdfValue2013, __pdfY, pdfValue2014] = this.#e,
        [pdfValue2015, pdfValue2016] = this.#l(0);
      return [
        pdfValue2012 + pdfValue2015,
        pdfValue2013 + pdfValue2016,
        __pdfY - 2 * pdfValue2015,
        pdfValue2014 - 2 * pdfValue2016,
      ];
    }
    #d() {
      let pdfValue899 = (this.#e = new Float32Array([
        1 / 0,
        1 / 0,
        -1 / 0,
        -1 / 0,
      ]));
      for (let { line: line } of this.#r) {
        if (line.length <= 12) {
          for (
            let ____pdfY = 4, pdfValue2052 = line.length;
            ____pdfY < pdfValue2052;
            ____pdfY += 6
          )
            pdfA.pointBoundingBox(
              line[____pdfY],
              line[____pdfY + 1],
              pdfValue899,
            );
          continue;
        }
        let ___pdfY = line[4],
          pdfValue1376 = line[5];
        for (
          let pdfValue1766 = 6, pdfValue1767 = line.length;
          pdfValue1766 < pdfValue1767;
          pdfValue1766 += 6
        ) {
          let [
            pdfValue1946,
            pdfValue1947,
            pdfValue1948,
            __pdfS,
            pdfValue1949,
            __pdfI,
          ] = line.subarray(pdfValue1766, pdfValue1766 + 6);
          (pdfA.bezierBoundingBox(
            ___pdfY,
            pdfValue1376,
            pdfValue1946,
            pdfValue1947,
            pdfValue1948,
            __pdfS,
            pdfValue1949,
            __pdfI,
            pdfValue899,
          ),
            (___pdfY = pdfValue1949),
            (pdfValue1376 = __pdfI));
        }
      }
      let [pdfValue900, __pdfY] = this.#l();
      ((pdfValue899[0] = _pdfH(pdfValue899[0] - pdfValue900, 0, 1)),
        (pdfValue899[1] = _pdfH(pdfValue899[1] - __pdfY, 0, 1)),
        (pdfValue899[2] = _pdfH(pdfValue899[2] + pdfValue900, 0, 1)),
        (pdfValue899[3] = _pdfH(pdfValue899[3] + __pdfY, 0, 1)),
        (pdfValue899[2] -= pdfValue899[0]),
        (pdfValue899[3] -= pdfValue899[1]));
    }
    get box() {
      return this.#e;
    }
    updateProperty(pdfParam1388, pdfParam1389) {
      return pdfParam1388 === `stroke-width` ? this.#f(pdfParam1389) : null;
    }
    #f(pdfParam922) {
      let [pdfValue1717, __pdfY] = this.#l();
      this.#c = pdfParam922;
      let [pdfValue1718, pdfValue1719] = this.#l(),
        [pdfValue1720, pdfValue1721] = [
          pdfValue1718 - pdfValue1717,
          pdfValue1719 - __pdfY,
        ],
        pdfValue1722 = this.#e;
      return (
        (pdfValue1722[0] -= pdfValue1720),
        (pdfValue1722[1] -= pdfValue1721),
        (pdfValue1722[2] += 2 * pdfValue1720),
        (pdfValue1722[3] += 2 * pdfValue1721),
        pdfValue1722
      );
    }
    updateParentDimensions([pdfParam695, pdfParam696], __pdfY) {
      let [pdfValue1563, pdfValue1564] = this.#l();
      ((this.#i = pdfParam695), (this.#a = pdfParam696), (this.#o = __pdfY));
      let [pdfValue1565, pdfValue1566] = this.#l(),
        pdfValue1567 = pdfValue1565 - pdfValue1563,
        __pdfS = pdfValue1566 - pdfValue1564,
        pdfValue1568 = this.#e;
      return (
        (pdfValue1568[0] -= pdfValue1567),
        (pdfValue1568[1] -= __pdfS),
        (pdfValue1568[2] += 2 * pdfValue1567),
        (pdfValue1568[3] += 2 * __pdfS),
        pdfValue1568
      );
    }
    updateRotation(pdfParam1267) {
      return (
        (this.#t = pdfParam1267),
        {
          path: {
            transform: this.rotationTransform,
          },
        }
      );
    }
    get viewBox() {
      return this.#e.map($.svgRound).join(` `);
    }
    get defaultProperties() {
      let [pdfValue1657, pdfValue1658] = this.#e;
      return {
        root: {
          viewBox: this.viewBox,
        },
        path: {
          "transform-origin": `${$.svgRound(pdfValue1657)} ${$.svgRound(pdfValue1658)}`,
        },
      };
    }
    get rotationTransform() {
      let [, , pdfValue1257, pdfValue1258] = this.#e,
        __pdfY = 0,
        pdfValue1259 = 0,
        pdfValue1260 = 0,
        pdfValue1261 = 0,
        pdfValue1262 = 0,
        pdfValue1263 = 0;
      switch (this.#t) {
        case 90:
          ((pdfValue1259 = pdfValue1258 / pdfValue1257),
            (pdfValue1260 = -pdfValue1257 / pdfValue1258),
            (pdfValue1262 = pdfValue1257));
          break;
        case 180:
          ((__pdfY = -1),
            (pdfValue1261 = -1),
            (pdfValue1262 = pdfValue1257),
            (pdfValue1263 = pdfValue1258));
          break;
        case 270:
          ((pdfValue1259 = -pdfValue1258 / pdfValue1257),
            (pdfValue1260 = pdfValue1257 / pdfValue1258),
            (pdfValue1263 = pdfValue1258));
          break;
        default:
          return ``;
      }
      return `matrix(${__pdfY} ${pdfValue1259} ${pdfValue1260} ${pdfValue1261} ${$.svgRound(pdfValue1262)} ${$.svgRound(pdfValue1263)})`;
    }
    getPathResizingSVGProperties([
      pdfParam208,
      pdfParam209,
      __pdfY,
      pdfParam210,
    ]) {
      let [pdfValue707, pdfValue708] = this.#l(),
        [pdfValue709, pdfValue710, __pdfS, pdfValue711] = this.#e;
      if (
        Math.abs(__pdfS - pdfValue707) <= $.PRECISION ||
        Math.abs(pdfValue711 - pdfValue708) <= $.PRECISION
      ) {
        let pdfValue1569 =
            pdfParam208 + __pdfY / 2 - (pdfValue709 + __pdfS / 2),
          pdfValue1570 =
            pdfParam209 + pdfParam210 / 2 - (pdfValue710 + pdfValue711 / 2);
        return {
          path: {
            "transform-origin": `${$.svgRound(pdfParam208)} ${$.svgRound(pdfParam209)}`,
            transform: `${this.rotationTransform} translate(${pdfValue1569} ${pdfValue1570})`,
          },
        };
      }
      let __pdfI = (__pdfY - 2 * pdfValue707) / (__pdfS - 2 * pdfValue707),
        __pdfR =
          (pdfParam210 - 2 * pdfValue708) / (pdfValue711 - 2 * pdfValue708),
        ___pdfS = __pdfS / __pdfY,
        pdfValue712 = pdfValue711 / pdfParam210;
      return {
        path: {
          "transform-origin": `${$.svgRound(pdfValue709)} ${$.svgRound(pdfValue710)}`,
          transform: `${this.rotationTransform} scale(${___pdfS} ${pdfValue712}) translate(${$.svgRound(pdfValue707)} ${$.svgRound(pdfValue708)}) scale(${__pdfI} ${__pdfR}) translate(${$.svgRound(-pdfValue707)} ${$.svgRound(-pdfValue708)})`,
        },
      };
    }
    getPathResizedSVGProperties([
      pdfParam126,
      pdfParam127,
      __pdfY,
      pdfParam128,
    ]) {
      let [pdfValue520, pdfValue521] = this.#l(),
        pdfValue522 = this.#e,
        [pdfValue523, __pdfS, pdfValue524, __pdfI] = pdfValue522;
      if (
        ((pdfValue522[0] = pdfParam126),
        (pdfValue522[1] = pdfParam127),
        (pdfValue522[2] = __pdfY),
        (pdfValue522[3] = pdfParam128),
        Math.abs(pdfValue524 - pdfValue520) <= $.PRECISION ||
          Math.abs(__pdfI - pdfValue521) <= $.PRECISION)
      ) {
        let pdfValue1231 =
            pdfParam126 + __pdfY / 2 - (pdfValue523 + pdfValue524 / 2),
          pdfValue1232 = pdfParam127 + pdfParam128 / 2 - (__pdfS + __pdfI / 2);
        for (let { line: line, points: points } of this.#r)
          ($._translate(line, pdfValue1231, pdfValue1232, line),
            $._translate(points, pdfValue1231, pdfValue1232, points));
        return {
          root: {
            viewBox: this.viewBox,
          },
          path: {
            "transform-origin": `${$.svgRound(pdfParam126)} ${$.svgRound(pdfParam127)}`,
            transform: this.rotationTransform || null,
            d: this.toSVGPath(),
          },
        };
      }
      let __pdfR = (__pdfY - 2 * pdfValue520) / (pdfValue524 - 2 * pdfValue520),
        ___pdfS = (pdfParam128 - 2 * pdfValue521) / (__pdfI - 2 * pdfValue521),
        pdfValue525 =
          -__pdfR * (pdfValue523 + pdfValue520) + pdfParam126 + pdfValue520,
        _pdfNt = -___pdfS * (__pdfS + pdfValue521) + pdfParam127 + pdfValue521;
      if (__pdfR !== 1 || ___pdfS !== 1 || pdfValue525 !== 0 || _pdfNt !== 0)
        for (let { line: line, points: points } of this.#r)
          ($._rescale(line, pdfValue525, _pdfNt, __pdfR, ___pdfS, line),
            $._rescale(points, pdfValue525, _pdfNt, __pdfR, ___pdfS, points));
      return {
        root: {
          viewBox: this.viewBox,
        },
        path: {
          "transform-origin": `${$.svgRound(pdfParam126)} ${$.svgRound(pdfParam127)}`,
          transform: this.rotationTransform || null,
          d: this.toSVGPath(),
        },
      };
    }
    getPathTranslatedSVGProperties([pdfParam275, pdfParam276], __pdfY) {
      let [pdfValue841, pdfValue842] = __pdfY,
        pdfValue843 = this.#e,
        pdfValue844 = pdfParam275 - pdfValue843[0],
        pdfValue845 = pdfParam276 - pdfValue843[1];
      if (this.#i === pdfValue841 && this.#a === pdfValue842)
        for (let { line: line, points: points } of this.#r)
          ($._translate(line, pdfValue844, pdfValue845, line),
            $._translate(points, pdfValue844, pdfValue845, points));
      else {
        let pdfValue1626 = this.#i / pdfValue841,
          pdfValue1627 = this.#a / pdfValue842;
        ((this.#i = pdfValue841), (this.#a = pdfValue842));
        for (let { line: ___pdfY, points: points } of this.#r)
          ($._rescale(
            ___pdfY,
            pdfValue844,
            pdfValue845,
            pdfValue1626,
            pdfValue1627,
            ___pdfY,
          ),
            $._rescale(
              points,
              pdfValue844,
              pdfValue845,
              pdfValue1626,
              pdfValue1627,
              points,
            ));
        ((pdfValue843[2] *= pdfValue1626), (pdfValue843[3] *= pdfValue1627));
      }
      return (
        (pdfValue843[0] = pdfParam275),
        (pdfValue843[1] = pdfParam276),
        {
          root: {
            viewBox: this.viewBox,
          },
          path: {
            d: this.toSVGPath(),
            "transform-origin": `${$.svgRound(pdfParam275)} ${$.svgRound(pdfParam276)}`,
          },
        }
      );
    }
    get defaultSVGProperties() {
      let pdfValue1369 = this.#e;
      return {
        root: {
          viewBox: this.viewBox,
        },
        rootClass: {
          draw: !0,
        },
        path: {
          d: this.toSVGPath(),
          "transform-origin": `${$.svgRound(pdfValue1369[0])} ${$.svgRound(pdfValue1369[1])}`,
          transform: this.rotationTransform || null,
        },
        bbox: pdfValue1369,
      };
    }
  },
  pdfValue166 = class PdfClass32 extends pdfValue162 {
    constructor(pdfParam567) {
      (super(),
        (this._viewParameters = pdfParam567),
        super.updateProperties({
          fill: `none`,
          stroke: pdfValue31._defaultLineColor,
          "stroke-opacity": 1,
          "stroke-width": 1,
          "stroke-linecap": `round`,
          "stroke-linejoin": `round`,
          "stroke-miterlimit": 10,
        }));
    }
    updateSVGProperty(pdfParam890, pdfParam891) {
      (pdfParam890 === `stroke-width` &&
        ((pdfParam891 ??= this[`stroke-width`]),
        (pdfParam891 *= this._viewParameters.realScale)),
        super.updateSVGProperty(pdfParam890, pdfParam891));
    }
    clone() {
      let pdfValue2032 = new PdfClass32(this._viewParameters);
      return (pdfValue2032.updateAll(this), pdfValue2032);
    }
  },
  pdfValue167 = class PdfClass16 extends pdfValue163 {
    static _type = `ink`;
    static _editorType = pdfI.INK;
    static _defaultDrawingOptions = null;
    constructor(pdfParam941) {
      (super({
        ...pdfParam941,
        name: `inkEditor`,
      }),
        (this._willKeepAspectRatio = !0),
        (this.defaultL10nId = `pdfjs-editor-ink-editor`));
    }
    static initialize(pdfParam1123, pdfParam1124) {
      (pdfValue31.initialize(pdfParam1123, pdfParam1124),
        (this._defaultDrawingOptions = new pdfValue166(
          pdfParam1124.viewParameters,
        )));
    }
    static getDefaultDrawingOptions(pdfParam1019) {
      let pdfValue1800 = this._defaultDrawingOptions.clone();
      return (pdfValue1800.updateProperties(pdfParam1019), pdfValue1800);
    }
    static get supportMultipleDrawings() {
      return !0;
    }
    static get typesMap() {
      return pdfQ(
        this,
        `typesMap`,
        new Map([
          [pdfR.INK_THICKNESS, `stroke-width`],
          [pdfR.INK_COLOR, `stroke`],
          [pdfR.INK_OPACITY, `stroke-opacity`],
        ]),
      );
    }
    static createDrawerInstance(
      pdfParam1020,
      pdfParam1021,
      __pdfY,
      pdfParam1022,
      pdfParam1023,
    ) {
      return new pdfValue164(
        pdfParam1020,
        pdfParam1021,
        __pdfY,
        pdfParam1022,
        pdfParam1023,
        this._defaultDrawingOptions[`stroke-width`],
      );
    }
    static deserializeDraw(
      pdfParam1304,
      pdfParam1305,
      __pdfY,
      pdfParam1306,
      pdfParam1307,
      pdfParam1308,
    ) {
      return pdfValue165.deserialize(
        pdfParam1304,
        pdfParam1305,
        __pdfY,
        pdfParam1306,
        pdfParam1307,
        pdfParam1308,
      );
    }
    static async deserialize(pdfParam204, pdfParam205, __pdfY) {
      let pdfValue700 = null;
      if (pdfParam204 instanceof pdfValue148) {
        let {
          data: {
            inkLists: inkLists,
            rect: ___pdfY,
            rotation: rotation,
            id: id,
            color: color,
            opacity: opacity,
            borderStyle: { rawWidth: __pdfS },
            popupRef: popupRef,
            richText: __pdfR,
            contentsObj: ___pdfS,
            creationDate: creationDate,
            modificationDate: _pdfNt,
          },
          parent: {
            page: { pageNumber: __pdfC },
          },
        } = pdfParam204;
        pdfValue700 = pdfParam204 = {
          annotationType: pdfI.INK,
          color: Array.from(color),
          thickness: __pdfS,
          opacity: opacity,
          paths: {
            points: inkLists,
          },
          boxes: null,
          pageIndex: __pdfC - 1,
          rect: ___pdfY.slice(0),
          rotation: rotation,
          annotationElementId: id,
          id: id,
          deleted: !1,
          popupRef: popupRef,
          richText: __pdfR,
          comment: ___pdfS?.str || null,
          creationDate: creationDate,
          modificationDate: _pdfNt,
        };
      }
      let pdfValue701 = await super.deserialize(
        pdfParam204,
        pdfParam205,
        __pdfY,
      );
      return (
        (pdfValue701._initialData = pdfValue700),
        pdfParam204.comment && pdfValue701.setCommentData(pdfParam204),
        pdfValue701
      );
    }
    get toolbarButtons() {
      return (
        (this._colorPicker ||= new pdfValue122(this)),
        [[`colorPicker`, this._colorPicker]]
      );
    }
    get colorType() {
      return pdfR.INK_COLOR;
    }
    get color() {
      return this._drawingOptions.stroke;
    }
    get opacity() {
      return this._drawingOptions[`stroke-opacity`];
    }
    onScaleChanging() {
      if (!this.parent) return;
      super.onScaleChanging();
      let {
        _drawId: _drawId,
        _drawingOptions: _drawingOptions,
        parent: __pdfY,
      } = this;
      (_drawingOptions.updateSVGProperty(`stroke-width`),
        __pdfY.drawLayer.updateProperties(
          _drawId,
          _drawingOptions.toSVGProperties(),
        ));
    }
    static onScaleChangingWhenDrawing() {
      let pdfValue1284 = this._currentParent;
      pdfValue1284 &&
        (super.onScaleChangingWhenDrawing(),
        this._defaultDrawingOptions.updateSVGProperty(`stroke-width`),
        pdfValue1284.drawLayer.updateProperties(
          this._currentDrawId,
          this._defaultDrawingOptions.toSVGProperties(),
        ));
    }
    createDrawingOptions({
      color: color,
      thickness: __pdfY,
      opacity: opacity,
    }) {
      this._drawingOptions = PdfClass16.getDefaultDrawingOptions({
        stroke: pdfA.makeHexColor(...color),
        "stroke-width": __pdfY,
        "stroke-opacity": opacity,
      });
    }
    serialize(pdfParam287 = !1) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      let { lines: lines, points: __pdfY } = this.serializeDraw(pdfParam287),
        {
          _drawingOptions: {
            stroke: stroke,
            "stroke-opacity": pdfValue871,
            "stroke-width": pdfValue872,
          },
        } = this,
        pdfValue873 = Object.assign(super.serialize(pdfParam287), {
          color: pdfValue31._colorManager.convert(stroke),
          opacity: pdfValue871,
          thickness: pdfValue872,
          paths: {
            lines: lines,
            points: __pdfY,
          },
        });
      return (
        this.addComment(pdfValue873),
        pdfParam287
          ? ((pdfValue873.isCopy = !0), pdfValue873)
          : this.annotationElementId && !this.#e(pdfValue873)
            ? null
            : ((pdfValue873.id = this.annotationElementId), pdfValue873)
      );
    }
    #e(pdfParam555) {
      let {
        color: color,
        thickness: __pdfY,
        opacity: opacity,
        pageIndex: pageIndex,
      } = this._initialData;
      return (
        this.hasEditedComment ||
        this._hasBeenMoved ||
        this._hasBeenResized ||
        pdfParam555.color.some((item, ___pdfY) => item !== color[___pdfY]) ||
        pdfParam555.thickness !== __pdfY ||
        pdfParam555.opacity !== opacity ||
        pdfParam555.pageIndex !== pageIndex
      );
    }
    renderAnnotationElement(pdfParam569) {
      if (this.deleted) return (pdfParam569.hide(), null);
      let { points: points, rect: __pdfY } = this.serializeDraw(!1);
      return (
        pdfParam569.updateEdited({
          rect: __pdfY,
          thickness: this._drawingOptions[`stroke-width`],
          points: points,
          popup: this.comment,
        }),
        null
      );
    }
  },
  pdfValue168 = class extends pdfValue165 {
    toSVGPath() {
      let pdfValue2017 = super.toSVGPath();
      return (
        pdfValue2017.endsWith(`Z`) || (pdfValue2017 += `Z`),
        pdfValue2017
      );
    }
  },
  pdfValue169 = 8,
  pdfValue170 = 3,
  pdfE = class {
    static #e = {
      maxDim: 512,
      sigmaSFactor: 0.02,
      sigmaR: 25,
      kernelSize: 16,
    };
    static #t(pdfParam1375, pdfParam1376, __pdfY, pdfParam1377) {
      return (
        (__pdfY -= pdfParam1375),
        (pdfParam1377 -= pdfParam1376),
        __pdfY === 0
          ? pdfParam1377 > 0
            ? 0
            : 4
          : __pdfY === 1
            ? pdfParam1377 + 6
            : 2 - pdfParam1377
      );
    }
    static #n = new Int32Array([
      0, 1, -1, 1, -1, 0, -1, -1, 0, -1, 1, -1, 1, 0, 1, 1,
    ]);
    static #r(
      pdfParam722,
      pdfParam723,
      __pdfY,
      pdfParam724,
      pdfParam725,
      pdfParam726,
      pdfParam727,
    ) {
      let pdfValue1582 = this.#t(__pdfY, pdfParam724, pdfParam725, pdfParam726);
      for (let pdfValue1815 = 0; pdfValue1815 < 8; pdfValue1815++) {
        let pdfValue1922 =
            (-pdfValue1815 + pdfValue1582 - pdfParam727 + 16) % 8,
          __pdfS = this.#n[2 * pdfValue1922],
          pdfValue1923 = this.#n[2 * pdfValue1922 + 1];
        if (
          pdfParam722[
            (__pdfY + __pdfS) * pdfParam723 + (pdfParam724 + pdfValue1923)
          ] !== 0
        )
          return pdfValue1922;
      }
      return -1;
    }
    static #i(
      pdfParam734,
      pdfParam735,
      __pdfY,
      pdfParam736,
      pdfParam737,
      pdfParam738,
      pdfParam739,
    ) {
      let pdfValue1587 = this.#t(__pdfY, pdfParam736, pdfParam737, pdfParam738);
      for (let pdfValue1819 = 0; pdfValue1819 < 8; pdfValue1819++) {
        let pdfValue1927 = (pdfValue1819 + pdfValue1587 + pdfParam739 + 16) % 8,
          __pdfS = this.#n[2 * pdfValue1927],
          pdfValue1928 = this.#n[2 * pdfValue1927 + 1];
        if (
          pdfParam734[
            (__pdfY + __pdfS) * pdfParam735 + (pdfParam736 + pdfValue1928)
          ] !== 0
        )
          return pdfValue1927;
      }
      return -1;
    }
    static #a(pdfParam73, pdfParam74, __pdfY, pdfParam75) {
      let pdfValue436 = pdfParam73.length,
        pdfValue437 = new Int32Array(pdfValue436);
      for (let pdfValue2227 = 0; pdfValue2227 < pdfValue436; pdfValue2227++)
        pdfValue437[pdfValue2227] =
          pdfParam73[pdfValue2227] <= pdfParam75 ? 1 : 0;
      for (let pdfValue2201 = 1; pdfValue2201 < __pdfY - 1; pdfValue2201++)
        pdfValue437[pdfValue2201 * pdfParam74] = pdfValue437[
          pdfValue2201 * pdfParam74 + pdfParam74 - 1
        ] = 0;
      for (let pdfValue2220 = 0; pdfValue2220 < pdfParam74; pdfValue2220++)
        pdfValue437[pdfValue2220] = pdfValue437[
          pdfParam74 * __pdfY - 1 - pdfValue2220
        ] = 0;
      let pdfValue438 = 1,
        pdfValue439,
        __pdfS = [];
      for (let pdfValue513 = 1; pdfValue513 < __pdfY - 1; pdfValue513++) {
        pdfValue439 = 1;
        for (let ___pdfY = 1; ___pdfY < pdfParam74 - 1; ___pdfY++) {
          let pdfValue552 = pdfValue513 * pdfParam74 + ___pdfY,
            pdfValue553 = pdfValue437[pdfValue552];
          if (pdfValue553 === 0) continue;
          let pdfValue554 = pdfValue513,
            __pdfI = ___pdfY;
          if (pdfValue553 === 1 && pdfValue437[pdfValue552 - 1] === 0)
            ((pdfValue438 += 1), --__pdfI);
          else if (pdfValue553 >= 1 && pdfValue437[pdfValue552 + 1] === 0)
            ((pdfValue438 += 1),
              (__pdfI += 1),
              pdfValue553 > 1 && (pdfValue439 = pdfValue553));
          else {
            pdfValue553 !== 1 && (pdfValue439 = Math.abs(pdfValue553));
            continue;
          }
          let __pdfR = [___pdfY, pdfValue513],
            ___pdfS = __pdfI === ___pdfY + 1,
            pdfValue555 = {
              isHole: ___pdfS,
              points: __pdfR,
              id: pdfValue438,
              parent: 0,
            };
          __pdfS.push(pdfValue555);
          let _pdfNt;
          for (let pdfValue2221 of __pdfS)
            if (pdfValue2221.id === pdfValue439) {
              _pdfNt = pdfValue2221;
              break;
            }
          _pdfNt
            ? _pdfNt.isHole
              ? (pdfValue555.parent = ___pdfS ? _pdfNt.parent : pdfValue439)
              : (pdfValue555.parent = ___pdfS ? pdfValue439 : _pdfNt.parent)
            : (pdfValue555.parent = ___pdfS ? pdfValue439 : 0);
          let __pdfC = this.#r(
            pdfValue437,
            pdfParam74,
            pdfValue513,
            ___pdfY,
            pdfValue554,
            __pdfI,
            0,
          );
          if (__pdfC === -1) {
            ((pdfValue437[pdfValue552] = -pdfValue438),
              pdfValue437[pdfValue552] !== 1 &&
                (pdfValue439 = Math.abs(pdfValue437[pdfValue552])));
            continue;
          }
          let pdfValue556 = this.#n[2 * __pdfC],
            __pdfJ = this.#n[2 * __pdfC + 1],
            __pdfG = pdfValue513 + pdfValue556,
            pdfValue557 = ___pdfY + __pdfJ;
          ((pdfValue554 = __pdfG), (__pdfI = pdfValue557));
          let __pdfX = pdfValue513,
            pdfValue558 = ___pdfY;
          for (;;) {
            let pdfValue1377 = this.#i(
              pdfValue437,
              pdfParam74,
              __pdfX,
              pdfValue558,
              pdfValue554,
              __pdfI,
              1,
            );
            ((pdfValue556 = this.#n[2 * pdfValue1377]),
              (__pdfJ = this.#n[2 * pdfValue1377 + 1]));
            let ____pdfS = __pdfX + pdfValue556,
              _____pdfS = pdfValue558 + __pdfJ;
            __pdfR.push(_____pdfS, ____pdfS);
            let pdfValue1378 = __pdfX * pdfParam74 + pdfValue558;
            if (
              (pdfValue437[pdfValue1378 + 1] === 0
                ? (pdfValue437[pdfValue1378] = -pdfValue438)
                : pdfValue437[pdfValue1378] === 1 &&
                  (pdfValue437[pdfValue1378] = pdfValue438),
              ____pdfS === pdfValue513 &&
                _____pdfS === ___pdfY &&
                __pdfX === __pdfG &&
                pdfValue558 === pdfValue557)
            ) {
              pdfValue437[pdfValue552] !== 1 &&
                (pdfValue439 = Math.abs(pdfValue437[pdfValue552]));
              break;
            } else
              ((pdfValue554 = __pdfX),
                (__pdfI = pdfValue558),
                (__pdfX = ____pdfS),
                (pdfValue558 = _____pdfS));
          }
        }
      }
      return __pdfS;
    }
    static #o(pdfParam272, pdfParam273, __pdfY, pdfParam274) {
      if (__pdfY - pdfParam273 <= 4) {
        for (
          let pdfValue2196 = pdfParam273;
          pdfValue2196 < __pdfY - 2;
          pdfValue2196 += 2
        )
          pdfParam274.push(
            pdfParam272[pdfValue2196],
            pdfParam272[pdfValue2196 + 1],
          );
        return;
      }
      let pdfValue832 = pdfParam272[pdfParam273],
        pdfValue833 = pdfParam272[pdfParam273 + 1],
        pdfValue834 = pdfParam272[__pdfY - 4] - pdfValue832,
        pdfValue835 = pdfParam272[__pdfY - 3] - pdfValue833,
        __pdfS = Math.hypot(pdfValue834, pdfValue835),
        pdfValue836 = pdfValue834 / __pdfS,
        __pdfI = pdfValue835 / __pdfS,
        __pdfR = pdfValue836 * pdfValue833 - __pdfI * pdfValue832,
        ___pdfS = pdfValue835 / pdfValue834,
        pdfValue837 = 1 / __pdfS,
        _pdfNt = Math.atan(___pdfS),
        __pdfC = Math.cos(_pdfNt),
        pdfValue838 = Math.sin(_pdfNt),
        __pdfJ = pdfValue837 * (Math.abs(__pdfC) + Math.abs(pdfValue838)),
        __pdfG = pdfValue837 * (1 - __pdfJ + __pdfJ ** 2),
        pdfValue839 = Math.max(
          Math.atan(Math.abs(pdfValue838 + __pdfC) * __pdfG),
          Math.atan(Math.abs(pdfValue838 - __pdfC) * __pdfG),
        ),
        __pdfX = 0,
        pdfValue840 = pdfParam273;
      for (
        let pdfValue1993 = pdfParam273 + 2;
        pdfValue1993 < __pdfY - 2;
        pdfValue1993 += 2
      ) {
        let pdfValue2163 = Math.abs(
          __pdfR -
            pdfValue836 * pdfParam272[pdfValue1993 + 1] +
            __pdfI * pdfParam272[pdfValue1993],
        );
        pdfValue2163 > __pdfX &&
          ((pdfValue840 = pdfValue1993), (__pdfX = pdfValue2163));
      }
      __pdfX > (__pdfS * pdfValue839) ** 2
        ? (this.#o(pdfParam272, pdfParam273, pdfValue840 + 2, pdfParam274),
          this.#o(pdfParam272, pdfValue840, __pdfY, pdfParam274))
        : pdfParam274.push(pdfValue832, pdfValue833);
    }
    static #s(pdfParam1100) {
      let pdfValue1856 = [],
        __pdfY = pdfParam1100.length;
      return (
        this.#o(pdfParam1100, 0, __pdfY, pdfValue1856),
        pdfValue1856.push(pdfParam1100[__pdfY - 2], pdfParam1100[__pdfY - 1]),
        pdfValue1856.length <= 4 ? null : pdfValue1856
      );
    }
    static #c(
      pdfParam213,
      pdfParam214,
      __pdfY,
      pdfParam215,
      pdfParam216,
      pdfParam217,
    ) {
      let pdfValue717 = new Float32Array(pdfParam217 ** 2),
        pdfValue718 = -2 * pdfParam215 ** 2,
        __pdfS = pdfParam217 >> 1;
      for (let pdfValue1903 = 0; pdfValue1903 < pdfParam217; pdfValue1903++) {
        let pdfValue2022 = (pdfValue1903 - __pdfS) ** 2;
        for (let ___pdfY = 0; ___pdfY < pdfParam217; ___pdfY++)
          pdfValue717[pdfValue1903 * pdfParam217 + ___pdfY] = Math.exp(
            (pdfValue2022 + (___pdfY - __pdfS) ** 2) / pdfValue718,
          );
      }
      let pdfValue719 = new Float32Array(256),
        __pdfI = -2 * pdfParam216 ** 2;
      for (let pdfValue2190 = 0; pdfValue2190 < 256; pdfValue2190++)
        pdfValue719[pdfValue2190] = Math.exp(pdfValue2190 ** 2 / __pdfI);
      let __pdfR = pdfParam213.length,
        ___pdfS = new Uint8Array(__pdfR),
        pdfValue720 = new Uint32Array(256);
      for (let pdfValue1271 = 0; pdfValue1271 < __pdfY; pdfValue1271++)
        for (let pdfValue1336 = 0; pdfValue1336 < pdfParam214; pdfValue1336++) {
          let pdfValue1400 = pdfValue1271 * pdfParam214 + pdfValue1336,
            ___pdfI = pdfParam213[pdfValue1400],
            ___pdfR = 0,
            _pdfNt = 0;
          for (
            let pdfValue1591 = 0;
            pdfValue1591 < pdfParam217;
            pdfValue1591++
          ) {
            let ____pdfS = pdfValue1271 + pdfValue1591 - __pdfS;
            if (!(____pdfS < 0 || ____pdfS >= __pdfY))
              for (let ___pdfY = 0; ___pdfY < pdfParam217; ___pdfY++) {
                let pdfValue1904 = pdfValue1336 + ___pdfY - __pdfS;
                if (pdfValue1904 < 0 || pdfValue1904 >= pdfParam214) continue;
                let pdfValue1905 =
                    pdfParam213[____pdfS * pdfParam214 + pdfValue1904],
                  ___pdfC =
                    pdfValue717[pdfValue1591 * pdfParam217 + ___pdfY] *
                    pdfValue719[Math.abs(pdfValue1905 - ___pdfI)];
                ((___pdfR += pdfValue1905 * ___pdfC), (_pdfNt += ___pdfC));
              }
          }
          let __pdfC = (___pdfS[pdfValue1400] = Math.round(___pdfR / _pdfNt));
          pdfValue720[__pdfC]++;
        }
      return [___pdfS, pdfValue720];
    }
    static #l(pdfParam1323) {
      let pdfValue2023 = new Uint32Array(256);
      for (let __pdfY of pdfParam1323) pdfValue2023[__pdfY]++;
      return pdfValue2023;
    }
    static #u(pdfParam548) {
      let pdfValue1386 = pdfParam548.length,
        __pdfY = new Uint8ClampedArray(pdfValue1386 >> 2),
        pdfValue1387 = -1 / 0,
        pdfValue1388 = 1 / 0;
      for (
        let pdfValue1950 = 0, pdfValue1951 = __pdfY.length;
        pdfValue1950 < pdfValue1951;
        pdfValue1950++
      ) {
        let pdfValue2145 = (__pdfY[pdfValue1950] =
          pdfParam548[pdfValue1950 << 2]);
        ((pdfValue1387 = Math.max(pdfValue1387, pdfValue2145)),
          (pdfValue1388 = Math.min(pdfValue1388, pdfValue2145)));
      }
      let pdfValue1389 = 255 / (pdfValue1387 - pdfValue1388);
      for (
        let pdfValue2175 = 0, pdfValue2176 = __pdfY.length;
        pdfValue2175 < pdfValue2176;
        pdfValue2175++
      )
        __pdfY[pdfValue2175] =
          (__pdfY[pdfValue2175] - pdfValue1388) * pdfValue1389;
      return __pdfY;
    }
    static #d(pdfParam662) {
      let pdfValue1526,
        __pdfY = -1 / 0,
        pdfValue1527 = -1 / 0,
        pdfValue1528 = pdfParam662.findIndex((item) => item !== 0),
        pdfValue1529 = pdfValue1528,
        pdfValue1530 = pdfValue1528;
      for (pdfValue1526 = pdfValue1528; pdfValue1526 < 256; pdfValue1526++) {
        let pdfValue2171 = pdfParam662[pdfValue1526];
        pdfValue2171 > __pdfY &&
          (pdfValue1526 - pdfValue1529 > pdfValue1527 &&
            ((pdfValue1527 = pdfValue1526 - pdfValue1529),
            (pdfValue1530 = pdfValue1526 - 1)),
          (__pdfY = pdfValue2171),
          (pdfValue1529 = pdfValue1526));
      }
      for (
        pdfValue1526 = pdfValue1530 - 1;
        pdfValue1526 >= 0 &&
        !(pdfParam662[pdfValue1526] > pdfParam662[pdfValue1526 + 1]);
        pdfValue1526--
      );
      return pdfValue1526;
    }
    static #f(pdfParam184) {
      let pdfValue654 = pdfParam184,
        { width: __pdfY, height: height } = pdfParam184,
        { maxDim: maxDim } = this.#e,
        pdfValue655 = __pdfY,
        pdfValue656 = height;
      if (__pdfY > maxDim || height > maxDim) {
        let pdfValue1076 = __pdfY,
          ___pdfS = height,
          pdfValue1077 = Math.log2(Math.max(__pdfY, height) / maxDim),
          __pdfI = Math.floor(pdfValue1077);
        pdfValue1077 = pdfValue1077 === __pdfI ? __pdfI - 1 : __pdfI;
        for (let ___pdfY = 0; ___pdfY < pdfValue1077; ___pdfY++) {
          ((pdfValue655 = Math.ceil(pdfValue1076 / 2)),
            (pdfValue656 = Math.ceil(___pdfS / 2)));
          let ____pdfY = new OffscreenCanvas(pdfValue655, pdfValue656);
          (____pdfY
            .getContext(`2d`)
            .drawImage(
              pdfParam184,
              0,
              0,
              pdfValue1076,
              ___pdfS,
              0,
              0,
              pdfValue655,
              pdfValue656,
            ),
            (pdfValue1076 = pdfValue655),
            (___pdfS = pdfValue656),
            pdfParam184 !== pdfValue654 && pdfParam184.close(),
            (pdfParam184 = ____pdfY.transferToImageBitmap()));
        }
        let __pdfR = Math.min(maxDim / pdfValue655, maxDim / pdfValue656);
        ((pdfValue655 = Math.round(pdfValue655 * __pdfR)),
          (pdfValue656 = Math.round(pdfValue656 * __pdfR)));
      }
      let pdfValue657 = new OffscreenCanvas(
        pdfValue655,
        pdfValue656,
      ).getContext(`2d`, {
        willReadFrequently: !0,
      });
      ((pdfValue657.fillStyle = `white`),
        pdfValue657.fillRect(0, 0, pdfValue655, pdfValue656),
        (pdfValue657.filter = `grayscale(1)`),
        pdfValue657.drawImage(
          pdfParam184,
          0,
          0,
          pdfParam184.width,
          pdfParam184.height,
          0,
          0,
          pdfValue655,
          pdfValue656,
        ));
      let __pdfS = pdfValue657.getImageData(
        0,
        0,
        pdfValue655,
        pdfValue656,
      ).data;
      return [this.#u(__pdfS), pdfValue655, pdfValue656];
    }
    static extractContoursFromText(
      pdfParam84,
      { fontFamily: fontFamily, fontStyle: __pdfY, fontWeight: fontWeight },
      pdfParam85,
      pdfParam86,
      pdfParam87,
      pdfParam88,
    ) {
      let __pdfS = new OffscreenCanvas(1, 1),
        pdfValue459 = __pdfS.getContext(`2d`, {
          alpha: !1,
        }),
        __pdfI =
          (pdfValue459.font = `${__pdfY} ${fontWeight} 200px ${fontFamily}`),
        {
          actualBoundingBoxLeft: __pdfR,
          actualBoundingBoxRight: ___pdfS,
          actualBoundingBoxAscent: actualBoundingBoxAscent,
          actualBoundingBoxDescent: _pdfNt,
          fontBoundingBoxAscent: __pdfC,
          fontBoundingBoxDescent: fontBoundingBoxDescent,
          width: __pdfJ,
        } = pdfValue459.measureText(pdfParam84),
        __pdfG = 1.5,
        pdfValue460 = Math.ceil(
          Math.max(Math.abs(__pdfR) + Math.abs(___pdfS) || 0, __pdfJ) * __pdfG,
        ),
        __pdfX = Math.ceil(
          Math.max(
            Math.abs(actualBoundingBoxAscent) + Math.abs(_pdfNt) || 200,
            Math.abs(__pdfC) + Math.abs(fontBoundingBoxDescent) || 200,
          ) * __pdfG,
        );
      ((__pdfS = new OffscreenCanvas(pdfValue460, __pdfX)),
        (pdfValue459 = __pdfS.getContext(`2d`, {
          alpha: !0,
          willReadFrequently: !0,
        })),
        (pdfValue459.font = __pdfI),
        (pdfValue459.filter = `grayscale(1)`),
        (pdfValue459.fillStyle = `white`),
        pdfValue459.fillRect(0, 0, pdfValue460, __pdfX),
        (pdfValue459.fillStyle = `black`),
        pdfValue459.fillText(
          pdfParam84,
          (pdfValue460 * (__pdfG - 1)) / 2,
          (__pdfX * (3 - __pdfG)) / 2,
        ));
      let pdfValue461 = this.#u(
          pdfValue459.getImageData(0, 0, pdfValue460, __pdfX).data,
        ),
        pdfValue462 = this.#l(pdfValue461),
        pdfValue463 = this.#d(pdfValue462),
        pdfValue464 = this.#a(pdfValue461, pdfValue460, __pdfX, pdfValue463);
      return this.processDrawnLines({
        lines: {
          curves: pdfValue464,
          width: pdfValue460,
          height: __pdfX,
        },
        pageWidth: pdfParam85,
        pageHeight: pdfParam86,
        rotation: pdfParam87,
        innerMargin: pdfParam88,
        mustSmooth: !0,
        areContours: !0,
      });
    }
    static process(pdfParam380, pdfParam381, __pdfY, pdfParam382, pdfParam383) {
      let [pdfValue1088, pdfValue1089, pdfValue1090] = this.#f(pdfParam380),
        [__pdfS, pdfValue1091] = this.#c(
          pdfValue1088,
          pdfValue1089,
          pdfValue1090,
          Math.hypot(pdfValue1089, pdfValue1090) * this.#e.sigmaSFactor,
          this.#e.sigmaR,
          this.#e.kernelSize,
        ),
        __pdfI = this.#d(pdfValue1091),
        __pdfR = this.#a(__pdfS, pdfValue1089, pdfValue1090, __pdfI);
      return this.processDrawnLines({
        lines: {
          curves: __pdfR,
          width: pdfValue1089,
          height: pdfValue1090,
        },
        pageWidth: pdfParam381,
        pageHeight: __pdfY,
        rotation: pdfParam382,
        innerMargin: pdfParam383,
        mustSmooth: !0,
        areContours: !0,
      });
    }
    static processDrawnLines({
      lines: lines,
      pageWidth: pageWidth,
      pageHeight: __pdfY,
      rotation: rotation,
      innerMargin: innerMargin,
      mustSmooth: mustSmooth,
      areContours: areContours,
    }) {
      rotation % 180 != 0 && ([pageWidth, __pdfY] = [__pdfY, pageWidth]);
      let { curves: curves, width: __pdfS, height: height } = lines,
        __pdfI = lines.thickness ?? 0,
        __pdfR = [],
        ___pdfS = Math.min(pageWidth / __pdfS, __pdfY / height),
        pdfValue490 = ___pdfS / pageWidth,
        _pdfNt = ___pdfS / __pdfY,
        __pdfC = [];
      for (let { points: points } of curves) {
        let pdfValue885 = mustSmooth ? this.#s(points) : points;
        if (!pdfValue885) continue;
        __pdfC.push(pdfValue885);
        let ___pdfY = pdfValue885.length,
          pdfValue886 = new Float32Array(___pdfY),
          pdfValue887 = new Float32Array(3 * (___pdfY === 2 ? 2 : ___pdfY - 2));
        if (
          (__pdfR.push({
            line: pdfValue887,
            points: pdfValue886,
          }),
          ___pdfY === 2)
        ) {
          ((pdfValue886[0] = pdfValue885[0] * pdfValue490),
            (pdfValue886[1] = pdfValue885[1] * _pdfNt),
            pdfValue887.set(
              [NaN, NaN, NaN, NaN, pdfValue886[0], pdfValue886[1]],
              0,
            ));
          continue;
        }
        let [pdfValue888, pdfValue889, ____pdfS, pdfValue890] = pdfValue885;
        ((pdfValue888 *= pdfValue490),
          (pdfValue889 *= _pdfNt),
          (____pdfS *= pdfValue490),
          (pdfValue890 *= _pdfNt),
          pdfValue886.set([pdfValue888, pdfValue889, ____pdfS, pdfValue890], 0),
          pdfValue887.set([NaN, NaN, NaN, NaN, pdfValue888, pdfValue889], 0));
        for (let pdfValue1703 = 4; pdfValue1703 < ___pdfY; pdfValue1703 += 2) {
          let ____pdfY = (pdfValue886[pdfValue1703] =
              pdfValue885[pdfValue1703] * pdfValue490),
            pdfValue1816 = (pdfValue886[pdfValue1703 + 1] =
              pdfValue885[pdfValue1703 + 1] * _pdfNt);
          (pdfValue887.set(
            $.createBezierPoints(
              pdfValue888,
              pdfValue889,
              ____pdfS,
              pdfValue890,
              ____pdfY,
              pdfValue1816,
            ),
            (pdfValue1703 - 2) * 3,
          ),
            ([pdfValue888, pdfValue889, ____pdfS, pdfValue890] = [
              ____pdfS,
              pdfValue890,
              ____pdfY,
              pdfValue1816,
            ]));
        }
      }
      if (__pdfR.length === 0) return null;
      let pdfValue491 = areContours ? new pdfValue168() : new pdfValue165();
      return (
        pdfValue491.build(
          __pdfR,
          pageWidth,
          __pdfY,
          1,
          rotation,
          areContours ? 0 : __pdfI,
          innerMargin,
        ),
        {
          outline: pdfValue491,
          newCurves: __pdfC,
          areContours: areContours,
          thickness: __pdfI,
          width: __pdfS,
          height: height,
        }
      );
    }
    static async compressSignature({
      outlines: outlines,
      areContours: areContours,
      thickness: __pdfY,
      width: width,
      height: height,
    }) {
      let pdfValue480 = 1 / 0,
        pdfValue481 = -1 / 0,
        pdfValue482 = 0;
      for (let pdfValue1780 of outlines) {
        pdfValue482 += pdfValue1780.length;
        for (
          let pdfValue1955 = 2, ___pdfY = pdfValue1780.length;
          pdfValue1955 < ___pdfY;
          pdfValue1955++
        ) {
          let ____pdfY =
            pdfValue1780[pdfValue1955] - pdfValue1780[pdfValue1955 - 2];
          ((pdfValue480 = Math.min(pdfValue480, ____pdfY)),
            (pdfValue481 = Math.max(pdfValue481, ____pdfY)));
        }
      }
      let __pdfS;
      __pdfS =
        pdfValue480 >= -128 && pdfValue481 <= 127
          ? Int8Array
          : pdfValue480 >= -32768 && pdfValue481 <= 32767
            ? Int16Array
            : Int32Array;
      let pdfValue483 = outlines.length,
        __pdfI = pdfValue169 + pdfValue170 * pdfValue483,
        __pdfR = new Uint32Array(__pdfI),
        ___pdfS = 0;
      ((__pdfR[___pdfS++] =
        __pdfI * Uint32Array.BYTES_PER_ELEMENT +
        (pdfValue482 - 2 * pdfValue483) * __pdfS.BYTES_PER_ELEMENT),
        (__pdfR[___pdfS++] = 0),
        (__pdfR[___pdfS++] = width),
        (__pdfR[___pdfS++] = height),
        (__pdfR[___pdfS++] = areContours ? 0 : 1),
        (__pdfR[___pdfS++] = Math.max(0, Math.floor(__pdfY ?? 0))),
        (__pdfR[___pdfS++] = pdfValue483),
        (__pdfR[___pdfS++] = __pdfS.BYTES_PER_ELEMENT));
      for (let pdfValue2114 of outlines)
        ((__pdfR[___pdfS++] = pdfValue2114.length - 2),
          (__pdfR[___pdfS++] = pdfValue2114[0]),
          (__pdfR[___pdfS++] = pdfValue2114[1]));
      let pdfValue484 = new CompressionStream(`deflate-raw`),
        _pdfNt = pdfValue484.writable.getWriter();
      (await _pdfNt.ready, _pdfNt.write(__pdfR));
      let __pdfC = __pdfS.prototype.constructor;
      for (let pdfValue1840 of outlines) {
        let pdfValue1924 = new __pdfC(pdfValue1840.length - 2);
        for (
          let ___pdfY = 2, pdfValue2164 = pdfValue1840.length;
          ___pdfY < pdfValue2164;
          ___pdfY++
        )
          pdfValue1924[___pdfY - 2] =
            pdfValue1840[___pdfY] - pdfValue1840[___pdfY - 2];
        _pdfNt.write(pdfValue1924);
      }
      _pdfNt.close();
      let pdfValue485 = await new Response(pdfValue484.readable).arrayBuffer();
      return pdfHelper15(new Uint8Array(pdfValue485));
    }
    static async decompressSignature(pdfParam62) {
      try {
        let pdfValue471 = _e(pdfParam62),
          { readable: __pdfY, writable: writable } = new DecompressionStream(
            `deflate-raw`,
          ),
          pdfValue472 = writable.getWriter();
        (await pdfValue472.ready,
          pdfValue472
            .write(pdfValue471)
            .then(async () => {
              (await pdfValue472.ready, await pdfValue472.close());
            })
            .catch(() => {}));
        let pdfValue473 = null,
          pdfValue474 = 0;
        for await (let pdfValue1857 of __pdfY)
          ((pdfValue473 ||= new Uint8Array(
            new Uint32Array(pdfValue1857.buffer, 0, 4)[0],
          )),
            pdfValue473.set(pdfValue1857, pdfValue474),
            (pdfValue474 += pdfValue1857.length));
        let pdfValue475 = new Uint32Array(
            pdfValue473.buffer,
            0,
            pdfValue473.length >> 2,
          ),
          __pdfS = pdfValue475[1];
        if (__pdfS !== 0) throw Error(`Invalid version: ${__pdfS}`);
        let pdfValue476 = pdfValue475[2],
          __pdfI = pdfValue475[3],
          __pdfR = pdfValue475[4] === 0,
          ___pdfS = pdfValue475[5],
          pdfValue477 = pdfValue475[6],
          _pdfNt = pdfValue475[7],
          __pdfC = [],
          pdfValue478 =
            (pdfValue169 + pdfValue170 * pdfValue477) *
            Uint32Array.BYTES_PER_ELEMENT,
          __pdfJ;
        switch (_pdfNt) {
          case Int8Array.BYTES_PER_ELEMENT:
            __pdfJ = new Int8Array(pdfValue473.buffer, pdfValue478);
            break;
          case Int16Array.BYTES_PER_ELEMENT:
            __pdfJ = new Int16Array(pdfValue473.buffer, pdfValue478);
            break;
          case Int32Array.BYTES_PER_ELEMENT:
            __pdfJ = new Int32Array(pdfValue473.buffer, pdfValue478);
            break;
        }
        pdfValue474 = 0;
        for (let pdfValue1605 = 0; pdfValue1605 < pdfValue477; pdfValue1605++) {
          let pdfValue1673 =
              pdfValue475[pdfValue170 * pdfValue1605 + pdfValue169],
            ___pdfY = new Float32Array(pdfValue1673 + 2);
          __pdfC.push(___pdfY);
          for (
            let pdfValue2197 = 0;
            pdfValue2197 < pdfValue170 - 1;
            pdfValue2197++
          )
            ___pdfY[pdfValue2197] =
              pdfValue475[
                pdfValue170 * pdfValue1605 + pdfValue169 + pdfValue2197 + 1
              ];
          for (
            let pdfValue2222 = 0;
            pdfValue2222 < pdfValue1673;
            pdfValue2222++
          )
            ___pdfY[pdfValue2222 + 2] =
              ___pdfY[pdfValue2222] + __pdfJ[pdfValue474++];
        }
        return {
          areContours: __pdfR,
          thickness: ___pdfS,
          outlines: __pdfC,
          width: pdfValue476,
          height: __pdfI,
        };
      } catch (pdfValue2146) {
        return (pdfHelper4(`decompressSignature: ${pdfValue2146}`), null);
      }
    }
  },
  pdfValue171 = class PdfClass35 extends pdfValue162 {
    constructor() {
      (super(),
        super.updateProperties({
          fill: pdfValue31._defaultLineColor,
          "stroke-width": 0,
        }));
    }
    clone() {
      let pdfValue2177 = new PdfClass35();
      return (pdfValue2177.updateAll(this), pdfValue2177);
    }
  },
  pdfValue172 = class PdfClass34 extends pdfValue166 {
    constructor(pdfParam1125) {
      (super(pdfParam1125),
        super.updateProperties({
          stroke: pdfValue31._defaultLineColor,
          "stroke-width": 1,
        }));
    }
    clone() {
      let pdfValue2033 = new PdfClass34(this._viewParameters);
      return (pdfValue2033.updateAll(this), pdfValue2033);
    }
  },
  pdfValue173 = class PdfClass11 extends pdfValue163 {
    #e = !1;
    #t = null;
    #n = null;
    #r = null;
    static _type = `signature`;
    static _editorType = pdfI.SIGNATURE;
    static _defaultDrawingOptions = null;
    constructor(pdfParam611) {
      (super({
        ...pdfParam611,
        mustBeCommitted: !0,
        name: `signatureEditor`,
      }),
        (this._willKeepAspectRatio = !0),
        (this.#n = pdfParam611.signatureData || null),
        (this.#t = null),
        (this.defaultL10nId = `pdfjs-editor-signature-editor1`));
    }
    static initialize(pdfParam871, pdfParam872) {
      (pdfValue31.initialize(pdfParam871, pdfParam872),
        (this._defaultDrawingOptions = new pdfValue171()),
        (this._defaultDrawnSignatureOptions = new pdfValue172(
          pdfParam872.viewParameters,
        )));
    }
    static getDefaultDrawingOptions(pdfParam1024) {
      let pdfValue1801 = this._defaultDrawingOptions.clone();
      return (pdfValue1801.updateProperties(pdfParam1024), pdfValue1801);
    }
    static get supportMultipleDrawings() {
      return !1;
    }
    static get typesMap() {
      return pdfQ(this, `typesMap`, new Map());
    }
    static get isDrawer() {
      return !1;
    }
    get telemetryFinalData() {
      return {
        type: `signature`,
        hasDescription: !!this.#t,
      };
    }
    static computeTelemetryFinalData(pdfParam927) {
      let pdfValue1726 = pdfParam927.get(`hasDescription`);
      return {
        hasAltText: pdfValue1726.get(!0) ?? 0,
        hasNoAltText: pdfValue1726.get(!1) ?? 0,
      };
    }
    get isResizable() {
      return !0;
    }
    onScaleChanging() {
      this._drawId !== null && super.onScaleChanging();
    }
    render() {
      if (this.div) return this.div;
      let pdfValue551,
        __pdfY,
        { _isCopy: _isCopy } = this;
      if (
        (_isCopy &&
          ((this._isCopy = !1), (pdfValue551 = this.x), (__pdfY = this.y)),
        super.render(),
        this._drawId === null)
      ) {
        if (this.#n) {
          let {
              lines: lines,
              mustSmooth: ___pdfY,
              areContours: areContours,
              description: description,
              uuid: uuid,
              heightInPage: heightInPage,
            } = this.#n,
            {
              rawDims: { pageWidth: pageWidth, pageHeight: __pdfS },
              rotation: rotation,
            } = this.parent.viewport,
            __pdfI = pdfE.processDrawnLines({
              lines: lines,
              pageWidth: pageWidth,
              pageHeight: __pdfS,
              rotation: rotation,
              innerMargin: PdfClass11._INNER_MARGIN,
              mustSmooth: ___pdfY,
              areContours: areContours,
            });
          this.addSignature(__pdfI, heightInPage, description, uuid);
        } else
          (this.div.setAttribute(
            `data-l10n-args`,
            JSON.stringify({
              description: ``,
            }),
          ),
            (this.div.hidden = !0),
            this._uiManager.getSignature(this));
      } else
        this.div.setAttribute(
          `data-l10n-args`,
          JSON.stringify({
            description: this.#t || ``,
          }),
        );
      return (
        _isCopy &&
          ((this._isCopy = !0), this._moveAfterPaste(pdfValue551, __pdfY)),
        this.div
      );
    }
    setUuid(pdfParam1587) {
      ((this.#r = pdfParam1587), this.addEditToolbar());
    }
    getUuid() {
      return this.#r;
    }
    get description() {
      return this.#t;
    }
    set description(pdfParam655) {
      ((this.#t = pdfParam655),
        this.div &&
          (this.div.setAttribute(
            `data-l10n-args`,
            JSON.stringify({
              description: pdfParam655,
            }),
          ),
          super.addEditToolbar().then((value) => {
            value?.updateEditSignatureButton(pdfParam655);
          })));
    }
    getSignaturePreview() {
      let {
          newCurves: newCurves,
          areContours: areContours,
          thickness: __pdfY,
          width: width,
          height: height,
        } = this.#n,
        pdfValue1110 = Math.max(width, height);
      return {
        areContours: areContours,
        outline: pdfE.processDrawnLines({
          lines: {
            curves: newCurves.map((item) => ({
              points: item,
            })),
            thickness: __pdfY,
            width: width,
            height: height,
          },
          pageWidth: pdfValue1110,
          pageHeight: pdfValue1110,
          rotation: 0,
          innerMargin: 0,
          mustSmooth: !1,
          areContours: areContours,
        }).outline,
      };
    }
    get toolbarButtons() {
      return this._uiManager.signatureManager
        ? [[`editSignature`, this._uiManager.signatureManager]]
        : super.toolbarButtons;
    }
    addSignature(pdfParam139, __pdfY, pdfParam140, pdfParam141) {
      let { x: x, y: y } = this,
        { outline: outline } = (this.#n = pdfParam139);
      ((this.#e = outline instanceof pdfValue168),
        (this.description = pdfParam140));
      let __pdfS;
      (this.#e
        ? (__pdfS = PdfClass11.getDefaultDrawingOptions())
        : ((__pdfS = PdfClass11._defaultDrawnSignatureOptions.clone()),
          __pdfS.updateProperties({
            "stroke-width": outline.thickness,
          })),
        this._addOutlines({
          drawOutlines: outline,
          drawingOptions: __pdfS,
        }));
      let [, pdfValue568] = this.pageDimensions,
        __pdfI = __pdfY / pdfValue568;
      ((__pdfI = __pdfI >= 1 ? 0.5 : __pdfI),
        (this.width *= __pdfI / this.height),
        this.width >= 1 && ((__pdfI *= 0.9 / this.width), (this.width = 0.9)),
        (this.height = __pdfI),
        this.setDims(),
        (this.x = x),
        (this.y = y),
        this.center(),
        this._onResized(),
        this.onScaleChanging(),
        this.rotate(),
        this._uiManager.addToAnnotationStorage(this),
        this.setUuid(pdfParam141),
        this._reportTelemetry({
          action: `pdfjs.signature.inserted`,
          data: {
            hasBeenSaved: !!pdfParam141,
            hasDescription: !!pdfParam140,
          },
        }),
        (this.div.hidden = !1));
    }
    getFromImage(pdfParam898) {
      let {
        rawDims: { pageWidth: __pdfY, pageHeight: pageHeight },
        rotation: rotation,
      } = this.parent.viewport;
      return pdfE.process(
        pdfParam898,
        __pdfY,
        pageHeight,
        rotation,
        PdfClass11._INNER_MARGIN,
      );
    }
    getFromText(pdfParam785, __pdfY) {
      let {
        rawDims: { pageWidth: pageWidth, pageHeight: pageHeight },
        rotation: rotation,
      } = this.parent.viewport;
      return pdfE.extractContoursFromText(
        pdfParam785,
        __pdfY,
        pageWidth,
        pageHeight,
        rotation,
        PdfClass11._INNER_MARGIN,
      );
    }
    getDrawnSignature(pdfParam549) {
      let {
        rawDims: { pageWidth: __pdfY, pageHeight: pageHeight },
        rotation: rotation,
      } = this.parent.viewport;
      return pdfE.processDrawnLines({
        lines: pdfParam549,
        pageWidth: __pdfY,
        pageHeight: pageHeight,
        rotation: rotation,
        innerMargin: PdfClass11._INNER_MARGIN,
        mustSmooth: !1,
        areContours: !1,
      });
    }
    createDrawingOptions({ areContours: areContours, thickness: __pdfY }) {
      areContours
        ? (this._drawingOptions = PdfClass11.getDefaultDrawingOptions())
        : ((this._drawingOptions =
            PdfClass11._defaultDrawnSignatureOptions.clone()),
          this._drawingOptions.updateProperties({
            "stroke-width": __pdfY,
          }));
    }
    serialize(pdfParam327 = !1) {
      if (this.isEmpty()) return null;
      let { lines: lines, points: __pdfY } = this.serializeDraw(pdfParam327),
        {
          _drawingOptions: { "stroke-width": pdfValue966 },
        } = this,
        pdfValue967 = Object.assign(super.serialize(pdfParam327), {
          isSignature: !0,
          areContours: this.#e,
          color: [0, 0, 0],
          thickness: this.#e ? 0 : pdfValue966,
        });
      return (
        this.addComment(pdfValue967),
        pdfParam327
          ? ((pdfValue967.paths = {
              lines: lines,
              points: __pdfY,
            }),
            (pdfValue967.uuid = this.#r),
            (pdfValue967.isCopy = !0))
          : (pdfValue967.lines = lines),
        this.#t &&
          (pdfValue967.accessibilityData = {
            type: `Figure`,
            alt: this.#t,
          }),
        pdfValue967
      );
    }
    static deserializeDraw(
      pdfParam989,
      pdfParam990,
      __pdfY,
      pdfParam991,
      pdfParam992,
      pdfParam993,
    ) {
      return pdfParam993.areContours
        ? pdfValue168.deserialize(
            pdfParam989,
            pdfParam990,
            __pdfY,
            pdfParam991,
            pdfParam992,
            pdfParam993,
          )
        : pdfValue165.deserialize(
            pdfParam989,
            pdfParam990,
            __pdfY,
            pdfParam991,
            pdfParam992,
            pdfParam993,
          );
    }
    static async deserialize(pdfParam770, pdfParam771, __pdfY) {
      let pdfValue1615 = await super.deserialize(
        pdfParam770,
        pdfParam771,
        __pdfY,
      );
      return (
        (pdfValue1615.#e = pdfParam770.areContours),
        (pdfValue1615.description = pdfParam770.accessibilityData?.alt || ``),
        (pdfValue1615.#r = pdfParam770.uuid),
        pdfValue1615
      );
    }
  },
  pdfValue174 = class extends pdfValue31 {
    #e = null;
    #t = null;
    #n = null;
    #r = null;
    #i = null;
    #a = ``;
    #o = null;
    #s = !1;
    #c = null;
    #l = !1;
    #u = !1;
    static _type = `stamp`;
    static _editorType = pdfI.STAMP;
    constructor(pdfParam873) {
      (super({
        ...pdfParam873,
        name: `stampEditor`,
      }),
        (this.#r = pdfParam873.bitmapUrl),
        (this.#i = pdfParam873.bitmapFile),
        (this.defaultL10nId = `pdfjs-editor-stamp-editor`));
    }
    static initialize(pdfParam1603, pdfParam1604) {
      pdfValue31.initialize(pdfParam1603, pdfParam1604);
    }
    static isHandlingMimeForPasting(pdfParam1457) {
      return pdfD.includes(pdfParam1457);
    }
    static paste(pdfParam1284, pdfParam1285) {
      pdfParam1285.pasteEditor(
        {
          mode: pdfI.STAMP,
        },
        {
          bitmapFile: pdfParam1284.getAsFile(),
        },
      );
    }
    altTextFinish() {
      (this._uiManager.useNewAltTextFlow && (this.div.hidden = !1),
        super.altTextFinish());
    }
    get telemetryFinalData() {
      return {
        type: `stamp`,
        hasAltText: !!this.altTextData?.altText,
      };
    }
    static computeTelemetryFinalData(pdfParam942) {
      let pdfValue1739 = pdfParam942.get(`hasAltText`);
      return {
        hasAltText: pdfValue1739.get(!0) ?? 0,
        hasNoAltText: pdfValue1739.get(!1) ?? 0,
      };
    }
    #d(pdfParam905, pdfParam906 = !1) {
      if (!pdfParam905) {
        this.remove();
        return;
      }
      ((this.#e = pdfParam905.bitmap),
        pdfParam906 ||
          ((this.#t = pdfParam905.id), (this.#l = pdfParam905.isSvg)),
        pdfParam905.file && (this.#a = pdfParam905.file.name),
        this.#m());
    }
    #f() {
      if (((this.#n = null), this._uiManager.enableWaiting(!1), this.#o)) {
        if (
          this._uiManager.useNewAltTextWhenAddingImage &&
          this._uiManager.useNewAltTextFlow &&
          this.#e
        ) {
          this.addEditToolbar().then(() => {
            (this._editToolbar.hide(), this._uiManager.editAltText(this, !0));
          });
          return;
        }
        if (
          !this._uiManager.useNewAltTextWhenAddingImage &&
          this._uiManager.useNewAltTextFlow &&
          this.#e
        ) {
          this._reportTelemetry({
            action: `pdfjs.image.image_added`,
            data: {
              alt_text_modal: !1,
              alt_text_type: `empty`,
            },
          });
          try {
            this.mlGuessAltText();
          } catch {}
        }
        this.div.focus();
      }
    }
    async mlGuessAltText(pdfParam148 = null, pdfParam149 = !0) {
      if (this.hasAltTextData()) return null;
      let { mlManager: __pdfY } = this._uiManager;
      if (!__pdfY) throw Error(`No ML.`);
      if (!(await __pdfY.isEnabledFor(`altText`)))
        throw Error(`ML isn't enabled for alt text.`);
      let {
          data: data,
          width: width,
          height: height,
        } = pdfParam148 || this.copyCanvas(null, null, !0).imageData,
        pdfValue580 = await __pdfY.guess({
          name: `altText`,
          request: {
            data: data,
            width: width,
            height: height,
            channels: data.length / (width * height),
          },
        });
      if (!pdfValue580) throw Error(`No response from the AI service.`);
      if (pdfValue580.error) throw Error(`Error from the AI service.`);
      if (pdfValue580.cancel) return null;
      if (!pdfValue580.output)
        throw Error(`No valid response from the AI service.`);
      let pdfValue581 = pdfValue580.output;
      return (
        await this.setGuessedAltText(pdfValue581),
        pdfParam149 &&
          !this.hasAltTextData() &&
          (this.altTextData = {
            alt: pdfValue581,
            decorative: !1,
          }),
        pdfValue581
      );
    }
    #p() {
      if (this.#t) {
        (this._uiManager.enableWaiting(!0),
          this._uiManager.imageManager
            .getFromId(this.#t)
            .then((value) => this.#d(value, !0))
            .finally(() => this.#f()));
        return;
      }
      if (this.#r) {
        let pdfValue1578 = this.#r;
        ((this.#r = null),
          this._uiManager.enableWaiting(!0),
          (this.#n = this._uiManager.imageManager
            .getFromUrl(pdfValue1578)
            .then((value) => this.#d(value))
            .finally(() => this.#f())));
        return;
      }
      if (this.#i) {
        let pdfValue1576 = this.#i;
        ((this.#i = null),
          this._uiManager.enableWaiting(!0),
          (this.#n = this._uiManager.imageManager
            .getFromFile(pdfValue1576)
            .then((value) => this.#d(value))
            .finally(() => this.#f())));
        return;
      }
      let pdfValue401 = document.createElement(`input`);
      ((pdfValue401.type = `file`), (pdfValue401.accept = pdfD.join(`,`)));
      let pdfValue402 = this._uiManager._signal;
      ((this.#n = new Promise((__pdfY) => {
        (pdfValue401.addEventListener(
          `change`,
          async () => {
            if (!pdfValue401.files || pdfValue401.files.length === 0)
              this.remove();
            else {
              this._uiManager.enableWaiting(!0);
              let pdfValue1374 = await this._uiManager.imageManager.getFromFile(
                pdfValue401.files[0],
              );
              (this._reportTelemetry({
                action: `pdfjs.image.image_selected`,
                data: {
                  alt_text_modal: this._uiManager.useNewAltTextFlow,
                },
              }),
                this.#d(pdfValue1374));
            }
            __pdfY();
          },
          {
            signal: pdfValue402,
          },
        ),
          pdfValue401.addEventListener(
            `cancel`,
            () => {
              (this.remove(), __pdfY());
            },
            {
              signal: pdfValue402,
            },
          ));
      }).finally(() => this.#f())),
        pdfValue401.click());
    }
    remove() {
      (this.#t &&
        ((this.#e = null),
        this._uiManager.imageManager.deleteId(this.#t),
        this.#o?.remove(),
        (this.#o = null),
        (this.#c &&= (clearTimeout(this.#c), null))),
        super.remove());
    }
    rebuild() {
      if (!this.parent) {
        this.#t && this.#p();
        return;
      }
      (super.rebuild(),
        this.div !== null &&
          (this.#t && this.#o === null && this.#p(),
          this.isAttachedToDOM || this.parent.add(this)));
    }
    onceAdded(pdfParam1493) {
      ((this._isDraggable = !0), pdfParam1493 && this.div.focus());
    }
    isEmpty() {
      return !(this.#n || this.#e || this.#r || this.#i || this.#t || this.#s);
    }
    get toolbarButtons() {
      return [[`altText`, this.createAltText()]];
    }
    get isResizable() {
      return !0;
    }
    render() {
      if (this.div) return this.div;
      let pdfValue1239, pdfValue1240;
      return (
        this._isCopy && ((pdfValue1239 = this.x), (pdfValue1240 = this.y)),
        super.render(),
        (this.div.hidden = !0),
        this.createAltText(),
        this.#s || (this.#e ? this.#m() : this.#p()),
        this._isCopy && this._moveAfterPaste(pdfValue1239, pdfValue1240),
        this._uiManager.addShouldRescale(this),
        this.div
      );
    }
    setCanvas(pdfParam636, pdfParam637) {
      let { id: __pdfY, bitmap: bitmap } =
        this._uiManager.imageManager.getFromCanvas(pdfParam636, pdfParam637);
      (pdfParam637.remove(),
        __pdfY &&
          this._uiManager.imageManager.isValidId(__pdfY) &&
          ((this.#t = __pdfY),
          bitmap && (this.#e = bitmap),
          (this.#s = !1),
          this.#m()));
    }
    _onResized() {
      this.onScaleChanging();
    }
    onScaleChanging() {
      this.parent &&
        (this.#c !== null && clearTimeout(this.#c),
        (this.#c = setTimeout(() => {
          ((this.#c = null), this.#g());
        }, 200)));
    }
    #m() {
      let { div: div } = this,
        { width: width, height: __pdfY } = this.#e,
        [pdfValue496, pdfValue497] = this.pageDimensions,
        pdfValue498 = 0.75;
      if (this.width)
        ((width = this.width * pdfValue496),
          (__pdfY = this.height * pdfValue497));
      else if (
        width > pdfValue498 * pdfValue496 ||
        __pdfY > pdfValue498 * pdfValue497
      ) {
        let pdfValue2213 = Math.min(
          (pdfValue498 * pdfValue496) / width,
          (pdfValue498 * pdfValue497) / __pdfY,
        );
        ((width *= pdfValue2213), (__pdfY *= pdfValue2213));
      }
      this._uiManager.enableWaiting(!1);
      let pdfValue499 = (this.#o = document.createElement(`canvas`));
      (pdfValue499.setAttribute(`role`, `img`),
        this.addContainer(pdfValue499),
        (this.width = width / pdfValue496),
        (this.height = __pdfY / pdfValue497),
        this.setDims(),
        this._initialOptions?.isCentered
          ? this.center()
          : this.fixAndSetPosition(),
        (this._initialOptions = null),
        (!this._uiManager.useNewAltTextWhenAddingImage ||
          !this._uiManager.useNewAltTextFlow ||
          this.annotationElementId) &&
          (div.hidden = !1),
        this.#g(),
        (this.#u ||= (this.parent.addUndoableEditor(this), !0)),
        this._reportTelemetry({
          action: `inserted_image`,
        }),
        this.#a && this.div.setAttribute(`aria-description`, this.#a),
        this.annotationElementId ||
          this._uiManager.a11yAlert(`pdfjs-editor-stamp-added-alert`));
    }
    copyCanvas(pdfParam38, pdfParam39, __pdfY = !1) {
      pdfParam38 ||= 224;
      let { width: width, height: height } = this.#e,
        pdfValue369 = new pdfUnderscore(),
        pdfValue370 = this.#e,
        pdfValue371 = width,
        __pdfS = height,
        pdfValue372 = null;
      if (pdfParam39) {
        if (width > pdfParam39 || height > pdfParam39) {
          let pdfValue2084 = Math.min(pdfParam39 / width, pdfParam39 / height);
          ((pdfValue371 = Math.floor(width * pdfValue2084)),
            (__pdfS = Math.floor(height * pdfValue2084)));
        }
        pdfValue372 = document.createElement(`canvas`);
        let pdfValue635 = (pdfValue372.width = Math.ceil(
            pdfValue371 * pdfValue369.sx,
          )),
          ___pdfY = (pdfValue372.height = Math.ceil(__pdfS * pdfValue369.sy));
        this.#l || (pdfValue370 = this.#h(pdfValue635, ___pdfY));
        let ___pdfI = pdfValue372.getContext(`2d`);
        ___pdfI.filter = this._uiManager.hcmFilter;
        let __pdfR = `white`,
          ___pdfS = `#cfcfd8`;
        this._uiManager.hcmFilter === `none`
          ? pdfValue22.isDarkMode &&
            ((__pdfR = `#8f8f9d`), (___pdfS = `#42414d`))
          : (___pdfS = `black`);
        let pdfValue636 = 15 * pdfValue369.sx,
          _pdfNt = 15 * pdfValue369.sy,
          __pdfC = new OffscreenCanvas(pdfValue636 * 2, _pdfNt * 2),
          pdfValue637 = __pdfC.getContext(`2d`);
        ((pdfValue637.fillStyle = __pdfR),
          pdfValue637.fillRect(0, 0, pdfValue636 * 2, _pdfNt * 2),
          (pdfValue637.fillStyle = ___pdfS),
          pdfValue637.fillRect(0, 0, pdfValue636, _pdfNt),
          pdfValue637.fillRect(pdfValue636, _pdfNt, pdfValue636, _pdfNt),
          (___pdfI.fillStyle = ___pdfI.createPattern(__pdfC, `repeat`)),
          ___pdfI.fillRect(0, 0, pdfValue635, ___pdfY),
          ___pdfI.drawImage(
            pdfValue370,
            0,
            0,
            pdfValue370.width,
            pdfValue370.height,
            0,
            0,
            pdfValue635,
            ___pdfY,
          ));
      }
      let __pdfI = null;
      if (__pdfY) {
        let pdfValue1033, ___pdfY;
        if (
          pdfValue369.symmetric &&
          pdfValue370.width < pdfParam38 &&
          pdfValue370.height < pdfParam38
        )
          ((pdfValue1033 = pdfValue370.width), (___pdfY = pdfValue370.height));
        else if (
          ((pdfValue370 = this.#e), width > pdfParam38 || height > pdfParam38)
        ) {
          let pdfValue1916 = Math.min(pdfParam38 / width, pdfParam38 / height);
          ((pdfValue1033 = Math.floor(width * pdfValue1916)),
            (___pdfY = Math.floor(height * pdfValue1916)),
            this.#l || (pdfValue370 = this.#h(pdfValue1033, ___pdfY)));
        }
        let pdfValue1034 = new OffscreenCanvas(
          pdfValue1033,
          ___pdfY,
        ).getContext(`2d`, {
          willReadFrequently: !0,
        });
        (pdfValue1034.drawImage(
          pdfValue370,
          0,
          0,
          pdfValue370.width,
          pdfValue370.height,
          0,
          0,
          pdfValue1033,
          ___pdfY,
        ),
          (__pdfI = {
            width: pdfValue1033,
            height: ___pdfY,
            data: pdfValue1034.getImageData(0, 0, pdfValue1033, ___pdfY).data,
          }));
      }
      return {
        canvas: pdfValue372,
        width: pdfValue371,
        height: __pdfS,
        imageData: __pdfI,
      };
    }
    #h(pdfParam401, pdfParam402) {
      let { width: __pdfY, height: height } = this.#e,
        pdfValue1118 = __pdfY,
        pdfValue1119 = height,
        pdfValue1120 = this.#e;
      for (
        ;
        pdfValue1118 > 2 * pdfParam401 || pdfValue1119 > 2 * pdfParam402;

      ) {
        let ___pdfY = pdfValue1118,
          pdfValue1383 = pdfValue1119;
        (pdfValue1118 > 2 * pdfParam401 &&
          (pdfValue1118 =
            pdfValue1118 >= 16384
              ? Math.floor(pdfValue1118 / 2) - 1
              : Math.ceil(pdfValue1118 / 2)),
          pdfValue1119 > 2 * pdfParam402 &&
            (pdfValue1119 =
              pdfValue1119 >= 16384
                ? Math.floor(pdfValue1119 / 2) - 1
                : Math.ceil(pdfValue1119 / 2)));
        let pdfValue1384 = new OffscreenCanvas(pdfValue1118, pdfValue1119);
        (pdfValue1384
          .getContext(`2d`)
          .drawImage(
            pdfValue1120,
            0,
            0,
            ___pdfY,
            pdfValue1383,
            0,
            0,
            pdfValue1118,
            pdfValue1119,
          ),
          (pdfValue1120 = pdfValue1384.transferToImageBitmap()));
      }
      return pdfValue1120;
    }
    #g() {
      let [pdfValue1078, pdfValue1079] = this.parentDimensions,
        { width: __pdfY, height: height } = this,
        pdfValue1080 = new pdfUnderscore(),
        pdfValue1081 = Math.ceil(__pdfY * pdfValue1078 * pdfValue1080.sx),
        pdfValue1082 = Math.ceil(height * pdfValue1079 * pdfValue1080.sy),
        pdfValue1083 = this.#o;
      if (
        !pdfValue1083 ||
        (pdfValue1083.width === pdfValue1081 &&
          pdfValue1083.height === pdfValue1082)
      )
        return;
      ((pdfValue1083.width = pdfValue1081),
        (pdfValue1083.height = pdfValue1082));
      let __pdfS = this.#l ? this.#e : this.#h(pdfValue1081, pdfValue1082),
        pdfValue1084 = pdfValue1083.getContext(`2d`);
      ((pdfValue1084.filter = this._uiManager.hcmFilter),
        pdfValue1084.drawImage(
          __pdfS,
          0,
          0,
          __pdfS.width,
          __pdfS.height,
          0,
          0,
          pdfValue1081,
          pdfValue1082,
        ));
    }
    #_(pdfParam242) {
      if (pdfParam242) {
        if (this.#l) {
          let pdfValue2034 = this._uiManager.imageManager.getSvgUrl(this.#t);
          if (pdfValue2034) return pdfValue2034;
        }
        let pdfValue1401 = document.createElement(`canvas`);
        return (
          ({ width: pdfValue1401.width, height: pdfValue1401.height } =
            this.#e),
          pdfValue1401.getContext(`2d`).drawImage(this.#e, 0, 0),
          pdfValue1401.toDataURL()
        );
      }
      if (this.#l) {
        let [pdfValue1266, pdfValue1267] = this.pageDimensions,
          __pdfY = Math.round(
            this.width * pdfValue1266 * _pdfC.PDF_TO_CSS_UNITS,
          ),
          pdfValue1268 = Math.round(
            this.height * pdfValue1267 * _pdfC.PDF_TO_CSS_UNITS,
          ),
          pdfValue1269 = new OffscreenCanvas(__pdfY, pdfValue1268);
        return (
          pdfValue1269
            .getContext(`2d`)
            .drawImage(
              this.#e,
              0,
              0,
              this.#e.width,
              this.#e.height,
              0,
              0,
              __pdfY,
              pdfValue1268,
            ),
          pdfValue1269.transferToImageBitmap()
        );
      }
      return structuredClone(this.#e);
    }
    static async deserialize(pdfParam49, pdfParam50, __pdfY) {
      let pdfValue396 = null,
        pdfValue397 = !1;
      if (pdfParam49 instanceof pdfValue153) {
        let {
            data: {
              rect: _rect,
              rotation: rotation,
              id: id,
              structParent: ____pdfS,
              popupRef: popupRef,
              richText: ___pdfR,
              contentsObj: _____pdfS,
              creationDate: creationDate,
              modificationDate: __pdfNt,
            },
            container: __pdfC,
            parent: {
              page: { pageNumber: pageNumber },
            },
            canvas: __pdfJ,
          } = pdfParam49,
          __pdfG,
          _bitmap;
        __pdfJ
          ? (delete pdfParam49.canvas,
            ({ id: __pdfG, bitmap: _bitmap } =
              __pdfY.imageManager.getFromCanvas(__pdfC.id, __pdfJ)),
            __pdfJ.remove())
          : ((pdfValue397 = !0), (pdfParam49._hasNoCanvas = !0));
        let __pdfX =
          (
            await pdfParam50._structTree.getAriaAttributes(`${pdfValue18}${id}`)
          )?.get(`aria-label`) || ``;
        pdfValue396 = pdfParam49 = {
          annotationType: pdfI.STAMP,
          bitmapId: __pdfG,
          bitmap: _bitmap,
          pageIndex: pageNumber - 1,
          rect: _rect.slice(0),
          rotation: rotation,
          annotationElementId: id,
          id: id,
          deleted: !1,
          accessibilityData: {
            decorative: !1,
            altText: __pdfX,
          },
          isSvg: !1,
          structParent: ____pdfS,
          popupRef: popupRef,
          richText: ___pdfR,
          comment: _____pdfS?.str || null,
          creationDate: creationDate,
          modificationDate: __pdfNt,
        };
      }
      let pdfValue398 = await super.deserialize(pdfParam49, pdfParam50, __pdfY),
        {
          rect: rect,
          bitmap: bitmap,
          bitmapUrl: __pdfS,
          bitmapId: bitmapId,
          isSvg: __pdfR,
          accessibilityData: ___pdfS,
        } = pdfParam49;
      (pdfValue397
        ? (__pdfY.addMissingCanvas(pdfParam49.id, pdfValue398),
          (pdfValue398.#s = !0))
        : bitmapId && __pdfY.imageManager.isValidId(bitmapId)
          ? ((pdfValue398.#t = bitmapId), bitmap && (pdfValue398.#e = bitmap))
          : (pdfValue398.#r = __pdfS),
        (pdfValue398.#l = __pdfR));
      let [pdfValue399, _pdfNt] = pdfValue398.pageDimensions;
      return (
        (pdfValue398.width = (rect[2] - rect[0]) / pdfValue399),
        (pdfValue398.height = (rect[3] - rect[1]) / _pdfNt),
        ___pdfS && (pdfValue398.altTextData = ___pdfS),
        (pdfValue398._initialData = pdfValue396),
        pdfParam49.comment && pdfValue398.setCommentData(pdfParam49),
        (pdfValue398.#u = !!pdfValue396),
        pdfValue398
      );
    }
    serialize(pdfParam80 = !1, pdfParam81 = null) {
      if (this.isEmpty()) return null;
      if (this.deleted) return this.serializeDeleted();
      let __pdfY = Object.assign(super.serialize(pdfParam80), {
        bitmapId: this.#t,
        isSvg: this.#l,
      });
      if ((this.addComment(__pdfY), pdfParam80))
        return (
          (__pdfY.bitmapUrl = this.#_(!0)),
          (__pdfY.accessibilityData = this.serializeAltText(!0)),
          (__pdfY.isCopy = !0),
          __pdfY
        );
      let { decorative: decorative, altText: altText } =
        this.serializeAltText(!1);
      if (
        (!decorative &&
          altText &&
          (__pdfY.accessibilityData = {
            type: `Figure`,
            alt: altText,
          }),
        this.annotationElementId)
      ) {
        let pdfValue1448 = this.#v(__pdfY);
        return pdfValue1448.isSame
          ? null
          : (pdfValue1448.isSameAltText
              ? delete __pdfY.accessibilityData
              : (__pdfY.accessibilityData.structParent =
                  this._initialData.structParent ?? -1),
            (__pdfY.id = this.annotationElementId),
            delete __pdfY.bitmapId,
            __pdfY);
      }
      if (pdfParam81 === null) return __pdfY;
      pdfParam81.stamps ||= new Map();
      let pdfValue451 = this.#l
        ? (__pdfY.rect[2] - __pdfY.rect[0]) * (__pdfY.rect[3] - __pdfY.rect[1])
        : null;
      if (!pdfParam81.stamps.has(this.#t))
        (pdfParam81.stamps.set(this.#t, {
          area: pdfValue451,
          serialized: __pdfY,
        }),
          (__pdfY.bitmap = this.#_(!1)));
      else if (this.#l) {
        let pdfValue1787 = pdfParam81.stamps.get(this.#t);
        pdfValue451 > pdfValue1787.area &&
          ((pdfValue1787.area = pdfValue451),
          pdfValue1787.serialized.bitmap.close(),
          (pdfValue1787.serialized.bitmap = this.#_(!1)));
      }
      return __pdfY;
    }
    #v(pdfParam542) {
      let {
          pageIndex: pageIndex,
          accessibilityData: { altText: __pdfY },
        } = this._initialData,
        pdfValue1370 = pdfParam542.pageIndex === pageIndex,
        pdfValue1371 = (pdfParam542.accessibilityData?.alt || ``) === __pdfY;
      return {
        isSame:
          !this.hasEditedComment &&
          !this._hasBeenMoved &&
          !this._hasBeenResized &&
          pdfValue1370 &&
          pdfValue1371,
        isSameAltText: pdfValue1371,
      };
    }
    renderAnnotationElement(pdfParam907) {
      return this.deleted
        ? (pdfParam907.hide(), null)
        : (pdfParam907.updateEdited({
            rect: this.getPDFRect(),
            popup: this.comment,
          }),
          null);
    }
  },
  _pdfN = class PdfClass6 {
    #e;
    #t = !1;
    #n = null;
    #r = null;
    #i = null;
    #a = new Map();
    #o = !1;
    #s = !1;
    #c = !1;
    #l = null;
    #u = null;
    #d = null;
    #f = null;
    #p = null;
    #m = -1;
    #h;
    static _initialized = !1;
    static #g = new Map(
      [ui, pdfValue167, pdfValue174, _i, pdfValue173].map((item) => [
        item._editorType,
        item,
      ]),
    );
    constructor({
      uiManager: uiManager,
      pageIndex: __pdfY,
      div: div,
      structTreeLayer: structTreeLayer,
      accessibilityManager: accessibilityManager,
      annotationLayer: annotationLayer,
      drawLayer: drawLayer,
      textLayer: __pdfS,
      viewport: viewport,
      l10n: __pdfI,
    }) {
      let __pdfR = [...PdfClass6.#g.values()];
      if (!PdfClass6._initialized) {
        PdfClass6._initialized = !0;
        for (let pdfValue2237 of __pdfR)
          pdfValue2237.initialize(__pdfI, uiManager);
      }
      (uiManager.registerEditorTypes(__pdfR),
        (this.#h = uiManager),
        (this.pageIndex = __pdfY),
        (this.div = div),
        (this.#e = accessibilityManager),
        (this.#n = annotationLayer),
        (this.viewport = viewport),
        (this.#d = __pdfS),
        (this.drawLayer = drawLayer),
        (this._structTree = structTreeLayer),
        this.#h.addLayer(this));
    }
    get isEmpty() {
      return this.#a.size === 0;
    }
    get isInvisible() {
      return this.isEmpty && this.#h.getMode() === pdfI.NONE;
    }
    updateToolbar(pdfParam1596) {
      this.#h.updateToolbar(pdfParam1596);
    }
    updateMode(pdfParam125 = this.#h.getMode()) {
      switch ((this.#S(), pdfParam125)) {
        case pdfI.NONE:
          (this.div.classList.toggle(`nonEditing`, !0),
            this.disableTextSelection(),
            this.togglePointerEvents(!1),
            this.toggleAnnotationLayerPointerEvents(!0),
            this.disableClick());
          return;
        case pdfI.INK:
          (this.disableTextSelection(),
            this.togglePointerEvents(!0),
            this.enableClick());
          break;
        case pdfI.HIGHLIGHT:
          (this.enableTextSelection(),
            this.togglePointerEvents(!1),
            this.disableClick());
          break;
        default:
          (this.disableTextSelection(),
            this.togglePointerEvents(!0),
            this.enableClick());
      }
      this.toggleAnnotationLayerPointerEvents(!1);
      let { classList: __pdfY } = this.div;
      if ((__pdfY.toggle(`nonEditing`, !1), pdfParam125 === pdfI.POPUP))
        __pdfY.toggle(`commentEditing`, !0);
      else {
        __pdfY.toggle(`commentEditing`, !1);
        for (let pdfValue1994 of PdfClass6.#g.values())
          __pdfY.toggle(
            `${pdfValue1994._type}Editing`,
            pdfParam125 === pdfValue1994._editorType,
          );
      }
      this.div.hidden = !1;
    }
    hasTextLayer(pdfParam1611) {
      return pdfParam1611 === this.#d?.div;
    }
    setEditingState(pdfParam1565) {
      this.#h.setEditingState(pdfParam1565);
    }
    addCommands(pdfParam1626) {
      this.#h.addCommands(pdfParam1626);
    }
    cleanUndoStack(pdfParam1580) {
      this.#h.cleanUndoStack(pdfParam1580);
    }
    toggleDrawing(pdfParam1410 = !1) {
      this.div.classList.toggle(`drawing`, !pdfParam1410);
    }
    togglePointerEvents(pdfParam1344 = !1) {
      this.div.classList.toggle(`disabled`, !pdfParam1344);
    }
    toggleAnnotationLayerPointerEvents(pdfParam1200 = !1) {
      this.#n?.div.classList.toggle(`disabled`, !pdfParam1200);
    }
    get #_() {
      return this.#a.size === 0
        ? this.#h.getEditors(this.pageIndex)
        : this.#a.values();
    }
    async enable() {
      ((this.#c = !0),
        (this.div.tabIndex = 0),
        this.togglePointerEvents(!0),
        this.div.classList.toggle(`nonEditing`, !1),
        this.#p?.abort(),
        (this.#p = null));
      let pdfValue663 = new Set();
      for (let pdfValue1629 of this.#_)
        (pdfValue1629.enableEditing(),
          pdfValue1629.show(!0),
          pdfValue1629.annotationElementId &&
            (this.#h.removeChangedExistingAnnotation(pdfValue1629),
            pdfValue663.add(pdfValue1629.annotationElementId)));
      let pdfValue664 = this.#n;
      if (pdfValue664)
        for (let __pdfY of pdfValue664.getEditableAnnotations()) {
          if (
            (__pdfY.hide(),
            this.#h.isDeletedAnnotationElement(__pdfY.data.id) ||
              pdfValue663.has(__pdfY.data.id))
          )
            continue;
          let pdfValue1583 = await this.deserialize(__pdfY);
          pdfValue1583 &&
            (this.addOrRebuild(pdfValue1583), pdfValue1583.enableEditing());
        }
      ((this.#c = !1),
        this.#h._eventBus.dispatch(`editorsrendered`, {
          source: this,
          pageNumber: this.pageIndex + 1,
        }));
    }
    disable() {
      if (
        ((this.#s = !0),
        (this.div.tabIndex = -1),
        this.togglePointerEvents(!1),
        this.div.classList.toggle(`nonEditing`, !0),
        this.#d && !this.#p)
      ) {
        this.#p = new AbortController();
        let pdfValue721 = this.#h.combinedSignal(this.#p);
        this.#d.div.addEventListener(
          `pointerdown`,
          (event) => {
            let {
              clientX: clientX,
              clientY: ___pdfY,
              timeStamp: timeStamp,
            } = event;
            if (timeStamp - this.#m > 500) {
              this.#m = timeStamp;
              return;
            }
            this.#m = -1;
            let { classList: classList } = this.div;
            classList.toggle(`getElements`, !0);
            let pdfValue894 = document.elementsFromPoint(clientX, ___pdfY);
            if (
              (classList.toggle(`getElements`, !1),
              !this.div.contains(pdfValue894[0]))
            )
              return;
            let pdfValue895,
              pdfValue896 = RegExp(`^${pdfValue6}[0-9]+$`);
            for (let pdfValue2187 of pdfValue894)
              if (pdfValue896.test(pdfValue2187.id)) {
                pdfValue895 = pdfValue2187.id;
                break;
              }
            if (!pdfValue895) return;
            let __pdfS = this.#a.get(pdfValue895);
            __pdfS?.annotationElementId === null &&
              (event.stopPropagation(),
              event.preventDefault(),
              __pdfS.dblclick(event));
          },
          {
            signal: pdfValue721,
            capture: !0,
          },
        );
      }
      let pdfValue255 = this.#n;
      if (pdfValue255) {
        let pdfValue658 = new Map(),
          ___pdfY = new Map();
        for (let pdfValue1199 of this.#_) {
          if (
            (pdfValue1199.disableEditing(), !pdfValue1199.annotationElementId)
          ) {
            pdfValue1199.updateFakeAnnotationElement(pdfValue255);
            continue;
          }
          if (pdfValue1199.serialize() !== null) {
            pdfValue658.set(pdfValue1199.annotationElementId, pdfValue1199);
            continue;
          } else ___pdfY.set(pdfValue1199.annotationElementId, pdfValue1199);
          (this.getEditableAnnotation(pdfValue1199.annotationElementId)?.show(),
            pdfValue1199.remove());
        }
        let pdfValue659 = pdfValue255.getEditableAnnotations();
        for (let pdfValue1166 of pdfValue659) {
          let { id: id } = pdfValue1166.data;
          if (this.#h.isDeletedAnnotationElement(id)) {
            pdfValue1166.updateEdited({
              deleted: !0,
            });
            continue;
          }
          let pdfValue1189 = ___pdfY.get(id);
          if (pdfValue1189) {
            (pdfValue1189.resetAnnotationElement(pdfValue1166),
              pdfValue1189.show(!1),
              pdfValue1166.show());
            continue;
          }
          ((pdfValue1189 = pdfValue658.get(id)),
            pdfValue1189 &&
              (this.#h.addChangedExistingAnnotation(pdfValue1189),
              pdfValue1189.renderAnnotationElement(pdfValue1166) &&
                pdfValue1189.show(!1)),
            pdfValue1166.show());
        }
      }
      (this.#S(), this.isEmpty && (this.div.hidden = !0));
      let { classList: __pdfY } = this.div;
      for (let pdfValue2115 of PdfClass6.#g.values())
        __pdfY.remove(`${pdfValue2115._type}Editing`);
      (this.disableTextSelection(),
        this.toggleAnnotationLayerPointerEvents(!0),
        (this.#s = !1));
    }
    getEditableAnnotation(pdfParam1299) {
      return this.#n?.getEditableAnnotation(pdfParam1299) || null;
    }
    setActiveEditor(pdfParam1309) {
      this.#h.getActive() !== pdfParam1309 &&
        this.#h.setActiveEditor(pdfParam1309);
    }
    enableTextSelection() {
      if (((this.div.tabIndex = -1), this.#d?.div && !this.#f)) {
        this.#f = new AbortController();
        let pdfValue1513 = this.#h.combinedSignal(this.#f);
        (this.#d.div.addEventListener(`pointerdown`, this.#v.bind(this), {
          signal: pdfValue1513,
        }),
          this.#d.div.classList.add(`highlighting`));
      }
    }
    disableTextSelection() {
      ((this.div.tabIndex = 0),
        this.#d?.div &&
          this.#f &&
          (this.#f.abort(),
          (this.#f = null),
          this.#d.div.classList.remove(`highlighting`)));
    }
    #v(event) {
      this.#h.unselectAll();
      let { target: target } = event;
      if (
        target === this.#d.div ||
        ((target.getAttribute(`role`) === `img` ||
          target.classList.contains(`endOfContent`)) &&
          this.#d.div.contains(target))
      ) {
        let { isMac: isMac } = pdfTt.platform;
        if (event.button !== 0 || (event.ctrlKey && isMac)) return;
        (this.#h.showAllEditors(`highlight`, !0, !0),
          this.#d.div.classList.add(`free`),
          this.toggleDrawing(),
          _i.startHighlighting(this, this.#h.direction === `ltr`, {
            target: this.#d.div,
            x: event.x,
            y: event.y,
          }),
          this.#d.div.addEventListener(
            `pointerup`,
            () => {
              (this.#d.div.classList.remove(`free`), this.toggleDrawing(!0));
            },
            {
              once: !0,
              signal: this.#h._signal,
            },
          ),
          event.preventDefault());
      }
    }
    enableClick() {
      if (this.#r) return;
      this.#r = new AbortController();
      let pdfValue1092 = this.#h.combinedSignal(this.#r);
      this.div.addEventListener(`pointerdown`, this.pointerdown.bind(this), {
        signal: pdfValue1092,
      });
      let pdfValue1093 = this.pointerup.bind(this);
      (this.div.addEventListener(`pointerup`, pdfValue1093, {
        signal: pdfValue1092,
      }),
        this.div.addEventListener(`pointercancel`, pdfValue1093, {
          signal: pdfValue1092,
        }));
    }
    disableClick() {
      (this.#r?.abort(), (this.#r = null));
    }
    attach(pdfParam822) {
      this.#a.set(pdfParam822.id, pdfParam822);
      let { annotationElementId: annotationElementId } = pdfParam822;
      annotationElementId &&
        this.#h.isDeletedAnnotationElement(annotationElementId) &&
        this.#h.removeDeletedAnnotationElement(pdfParam822);
    }
    detach(pdfParam780) {
      (this.#a.delete(pdfParam780.id),
        this.#e?.removePointerInTextLayer(pdfParam780.contentDiv),
        !this.#s &&
          pdfParam780.annotationElementId &&
          this.#h.addDeletedAnnotationElement(pdfParam780));
    }
    remove(pdfParam1209) {
      (this.detach(pdfParam1209),
        this.#h.removeEditor(pdfParam1209),
        pdfParam1209.div.remove(),
        (pdfParam1209.isAttachedToDOM = !1));
    }
    changeParent(pdfParam419) {
      pdfParam419.parent !== this &&
        (pdfParam419.parent &&
          pdfParam419.annotationElementId &&
          (this.#h.addDeletedAnnotationElement(pdfParam419.annotationElementId),
          pdfValue31.deleteAnnotationElement(pdfParam419),
          (pdfParam419.annotationElementId = null)),
        this.attach(pdfParam419),
        pdfParam419.parent?.detach(pdfParam419),
        pdfParam419.setParent(this),
        pdfParam419.div &&
          pdfParam419.isAttachedToDOM &&
          (pdfParam419.div.remove(), this.div.append(pdfParam419.div)));
    }
    add(pdfParam403) {
      if (!(pdfParam403.parent === this && pdfParam403.isAttachedToDOM)) {
        if (
          (this.changeParent(pdfParam403),
          this.#h.addEditor(pdfParam403),
          this.attach(pdfParam403),
          !pdfParam403.isAttachedToDOM)
        ) {
          let pdfValue2109 = pdfParam403.render();
          (this.div.append(pdfValue2109), (pdfParam403.isAttachedToDOM = !0));
        }
        (pdfParam403.fixAndSetPosition(),
          pdfParam403.onceAdded(!this.#c),
          this.#h.addToAnnotationStorage(pdfParam403),
          pdfParam403._reportTelemetry(pdfParam403.telemetryInitialData));
      }
    }
    moveEditorInDOM(pdfParam301) {
      if (!pdfParam301.isAttachedToDOM) return;
      let { activeElement: activeElement } = document;
      (pdfParam301.div.contains(activeElement) &&
        !this.#i &&
        ((pdfParam301._focusEventsAllowed = !1),
        (this.#i = setTimeout(() => {
          ((this.#i = null),
            pdfParam301.div.contains(document.activeElement)
              ? (pdfParam301._focusEventsAllowed = !0)
              : (pdfParam301.div.addEventListener(
                  `focusin`,
                  () => {
                    pdfParam301._focusEventsAllowed = !0;
                  },
                  {
                    once: !0,
                    signal: this.#h._signal,
                  },
                ),
                activeElement.focus()));
        }, 0))),
        (pdfParam301._structTreeParentId = this.#e?.moveElementInDOM(
          this.div,
          pdfParam301.div,
          pdfParam301.contentDiv,
          !0,
        )));
    }
    addOrRebuild(pdfParam1184) {
      pdfParam1184.needsToBeRebuilt()
        ? ((pdfParam1184.parent ||= this),
          pdfParam1184.rebuild(),
          pdfParam1184.show())
        : this.add(pdfParam1184);
    }
    addUndoableEditor(pdfParam1026) {
      this.addCommands({
        cmd: () => pdfParam1026._uiManager.rebuild(pdfParam1026),
        undo: () => {
          pdfParam1026.remove();
        },
        mustExec: !1,
      });
    }
    getEditorByUID(pdfParam1233) {
      for (let pdfValue2147 of this.#a.values())
        if (pdfValue2147.uid === pdfParam1233) return pdfValue2147;
      return null;
    }
    getNextId() {
      return this.#h.getId();
    }
    get #y() {
      return PdfClass6.#g.get(this.#h.getMode());
    }
    combinedSignal(pdfParam1527) {
      return this.#h.combinedSignal(pdfParam1527);
    }
    #b(pdfParam1354) {
      let pdfValue2056 = this.#y;
      return pdfValue2056
        ? new pdfValue2056.prototype.constructor(pdfParam1354)
        : null;
    }
    canCreateNewEmptyEditor() {
      return this.#y?.canCreateNewEmptyEditor();
    }
    async pasteEditor(pdfParam556, pdfParam557) {
      (this.updateToolbar(pdfParam556),
        await this.#h.updateMode(pdfParam556.mode));
      let { offsetX: __pdfY, offsetY: offsetY } = this.#x(),
        pdfValue1402 = this.getNextId(),
        pdfValue1403 = this.#b({
          parent: this,
          id: pdfValue1402,
          x: __pdfY,
          y: offsetY,
          uiManager: this.#h,
          isCentered: !0,
          ...pdfParam557,
        });
      pdfValue1403 && this.add(pdfValue1403);
    }
    async deserialize(pdfParam943) {
      return (
        (await PdfClass6.#g
          .get(pdfParam943.annotationType ?? pdfParam943.annotationEditorType)
          ?.deserialize(pdfParam943, this, this.#h)) || null
      );
    }
    createAndAddNewEditor(event, pdfParam685, __pdfY = {}) {
      let pdfValue1550 = this.getNextId(),
        pdfValue1551 = this.#b({
          parent: this,
          id: pdfValue1550,
          x: event.offsetX,
          y: event.offsetY,
          uiManager: this.#h,
          isCentered: pdfParam685,
          ...__pdfY,
        });
      return (pdfValue1551 && this.add(pdfValue1551), pdfValue1551);
    }
    get boundingClientRect() {
      return this.div.getBoundingClientRect();
    }
    #x() {
      let {
          x: x,
          y: y,
          width: __pdfY,
          height: height,
        } = this.boundingClientRect,
        pdfValue1285 = Math.max(0, x),
        pdfValue1286 = Math.max(0, y),
        pdfValue1287 = Math.min(window.innerWidth, x + __pdfY),
        pdfValue1288 = Math.min(window.innerHeight, y + height),
        __pdfS = (pdfValue1285 + pdfValue1287) / 2 - x,
        pdfValue1289 = (pdfValue1286 + pdfValue1288) / 2 - y,
        [__pdfI, __pdfR] =
          this.viewport.rotation % 180 == 0
            ? [__pdfS, pdfValue1289]
            : [pdfValue1289, __pdfS];
      return {
        offsetX: __pdfI,
        offsetY: __pdfR,
      };
    }
    addNewEditor(pdfParam1390 = {}) {
      this.createAndAddNewEditor(this.#x(), !0, pdfParam1390);
    }
    setSelected(pdfParam1627) {
      this.#h.setSelected(pdfParam1627);
    }
    toggleSelected(pdfParam1581) {
      this.#h.toggleSelected(pdfParam1581);
    }
    unselect(pdfParam1679) {
      this.#h.unselect(pdfParam1679);
    }
    pointerup(event) {
      let { isMac: isMac } = pdfTt.platform;
      if (
        event.button !== 0 ||
        (event.ctrlKey && isMac) ||
        event.target !== this.div ||
        !this.#o ||
        ((this.#o = !1), this.#y?.isDrawer && this.#y.supportMultipleDrawings)
      )
        return;
      if (!this.#t) {
        this.#t = !0;
        return;
      }
      let __pdfY = this.#h.getMode();
      if (__pdfY === pdfI.STAMP || __pdfY === pdfI.SIGNATURE) {
        this.#h.unselectAll();
        return;
      }
      this.createAndAddNewEditor(event, !1);
    }
    pointerdown(event) {
      if (
        (this.#h.getMode() === pdfI.HIGHLIGHT && this.enableTextSelection(),
        this.#o)
      ) {
        this.#o = !1;
        return;
      }
      let { isMac: isMac } = pdfTt.platform;
      if (
        event.button !== 0 ||
        (event.ctrlKey && isMac) ||
        event.target !== this.div
      )
        return;
      if (((this.#o = !0), this.#y?.isDrawer)) {
        this.startDrawingSession(event);
        return;
      }
      let __pdfY = this.#h.getActive();
      this.#t = !__pdfY || __pdfY.isEmpty();
    }
    startDrawingSession(pdfParam332) {
      if (
        (this.div.focus({
          preventScroll: !0,
        }),
        this.#l)
      ) {
        this.#y.startDrawing(this, this.#h, !1, pdfParam332);
        return;
      }
      (this.#h.setCurrentDrawingSession(this),
        (this.#l = new AbortController()));
      let pdfValue973 = this.#h.combinedSignal(this.#l);
      (this.div.addEventListener(
        `blur`,
        ({ relatedTarget: relatedTarget }) => {
          relatedTarget &&
            !this.div.contains(relatedTarget) &&
            ((this.#u = null), this.commitOrRemove());
        },
        {
          signal: pdfValue973,
        },
      ),
        this.#y.startDrawing(this, this.#h, !1, pdfParam332));
    }
    pause(pdfParam812) {
      if (pdfParam812) {
        let { activeElement: activeElement } = document;
        this.div.contains(activeElement) && (this.#u = activeElement);
        return;
      }
      this.#u &&
        setTimeout(() => {
          (this.#u?.focus(), (this.#u = null));
        }, 0);
    }
    endDrawingSession(pdfParam795 = !1) {
      return this.#l
        ? (this.#h.setCurrentDrawingSession(null),
          this.#l.abort(),
          (this.#l = null),
          (this.#u = null),
          this.#y.endDrawing(pdfParam795))
        : null;
    }
    findNewParent(pdfParam1073, pdfParam1074, __pdfY) {
      let pdfValue1829 = this.#h.findParent(pdfParam1074, __pdfY);
      return pdfValue1829 === null || pdfValue1829 === this
        ? !1
        : (pdfValue1829.changeParent(pdfParam1073), !0);
    }
    commitOrRemove() {
      return this.#l ? (this.endDrawingSession(), !0) : !1;
    }
    onScaleChanging() {
      this.#l && this.#y.onScaleChangingWhenDrawing(this);
    }
    destroy() {
      (this.commitOrRemove(),
        this.#h.getActive()?.parent === this &&
          (this.#h.commitOrRemove(), this.#h.setActiveEditor(null)),
        (this.#i &&= (clearTimeout(this.#i), null)));
      for (let pdfValue1687 of this.#a.values())
        (this.#e?.removePointerInTextLayer(pdfValue1687.contentDiv),
          pdfValue1687.setParent(null),
          (pdfValue1687.isAttachedToDOM = !1),
          pdfValue1687.div.remove());
      ((this.div = null), this.#a.clear(), this.#h.removeLayer(this));
    }
    #S() {
      for (let pdfValue2140 of this.#a.values())
        pdfValue2140.isEmpty() && pdfValue2140.remove();
    }
    render({ viewport: viewport }) {
      ((this.viewport = viewport), _pdfZ(this.div, viewport));
      for (let pdfValue2006 of this.#h.getEditors(this.pageIndex))
        (this.add(pdfValue2006), pdfValue2006.rebuild());
      this.updateMode();
    }
    update({ viewport: viewport }) {
      (this.#h.commitOrRemove(), this.#S());
      let pdfValue1484 = this.viewport.rotation,
        __pdfY = viewport.rotation;
      if (
        ((this.viewport = viewport),
        _pdfZ(this.div, {
          rotation: __pdfY,
        }),
        pdfValue1484 !== __pdfY)
      )
        for (let pdfValue2207 of this.#a.values()) pdfValue2207.rotate(__pdfY);
    }
    get pageDimensions() {
      let { pageWidth: pageWidth, pageHeight: pageHeight } =
        this.viewport.rawDims;
      return [pageWidth, pageHeight];
    }
    get scale() {
      return this.#h.viewParameters.realScale;
    }
  },
  _pdfF = class PdfClass18 {
    #e = null;
    #t = new Map();
    #n = new Map();
    static #r = 0;
    constructor({ pageIndex: pageIndex }) {
      this.pageIndex = pageIndex;
    }
    setParent(pdfParam829) {
      if (!this.#e) {
        this.#e = pdfParam829;
        return;
      }
      if (this.#e !== pdfParam829) {
        if (this.#t.size > 0)
          for (let pdfValue2141 of this.#t.values())
            (pdfValue2141.remove(), pdfParam829.append(pdfValue2141));
        this.#e = pdfParam829;
      }
    }
    static get _svgFactory() {
      return pdfQ(this, `_svgFactory`, new _pdfD());
    }
    static #i(pdfParam972, [pdfParam973, __pdfY, pdfParam974, pdfParam975]) {
      let { style: style } = pdfParam972;
      ((style.top = `${100 * __pdfY}%`),
        (style.left = `${100 * pdfParam973}%`),
        (style.width = `${100 * pdfParam974}%`),
        (style.height = `${100 * pdfParam975}%`));
    }
    #a() {
      let pdfValue1847 = PdfClass18._svgFactory.create(1, 1, !0);
      return (
        this.#e.append(pdfValue1847),
        pdfValue1847.setAttribute(`aria-hidden`, !0),
        pdfValue1847
      );
    }
    #o(pdfParam461, __pdfY) {
      let pdfValue1212 = PdfClass18._svgFactory.createElement(`clipPath`);
      pdfParam461.append(pdfValue1212);
      let pdfValue1213 = `clip_${__pdfY}`;
      (pdfValue1212.setAttribute(`id`, pdfValue1213),
        pdfValue1212.setAttribute(`clipPathUnits`, `objectBoundingBox`));
      let pdfValue1214 = PdfClass18._svgFactory.createElement(`use`);
      return (
        pdfValue1212.append(pdfValue1214),
        pdfValue1214.setAttribute(`href`, `#${__pdfY}`),
        pdfValue1214.classList.add(`clip`),
        pdfValue1213
      );
    }
    #s(pdfParam1160, pdfParam1161) {
      for (let [__pdfY, pdfValue1956] of Object.entries(pdfParam1161))
        pdfValue1956 === null
          ? pdfParam1160.removeAttribute(__pdfY)
          : pdfParam1160.setAttribute(__pdfY, pdfValue1956);
    }
    draw(pdfParam278, __pdfY = !1, pdfParam279 = !1) {
      let pdfValue852 = PdfClass18.#r++,
        pdfValue853 = this.#a(),
        pdfValue854 = PdfClass18._svgFactory.createElement(`defs`);
      pdfValue853.append(pdfValue854);
      let pdfValue855 = PdfClass18._svgFactory.createElement(`path`);
      pdfValue854.append(pdfValue855);
      let __pdfS = `path_p${this.pageIndex}_${pdfValue852}`;
      (pdfValue855.setAttribute(`id`, __pdfS),
        pdfValue855.setAttribute(`vector-effect`, `non-scaling-stroke`),
        __pdfY && this.#n.set(pdfValue852, pdfValue855));
      let pdfValue856 = pdfParam279 ? this.#o(pdfValue854, __pdfS) : null,
        __pdfI = PdfClass18._svgFactory.createElement(`use`);
      return (
        pdfValue853.append(__pdfI),
        __pdfI.setAttribute(`href`, `#${__pdfS}`),
        this.updateProperties(pdfValue853, pdfParam278),
        this.#t.set(pdfValue852, pdfValue853),
        {
          id: pdfValue852,
          clipPathId: `url(#${pdfValue856})`,
        }
      );
    }
    drawOutline(pdfParam61, __pdfY) {
      let pdfValue403 = PdfClass18.#r++,
        pdfValue404 = this.#a(),
        pdfValue405 = PdfClass18._svgFactory.createElement(`defs`);
      pdfValue404.append(pdfValue405);
      let pdfValue406 = PdfClass18._svgFactory.createElement(`path`);
      pdfValue405.append(pdfValue406);
      let pdfValue407 = `path_p${this.pageIndex}_${pdfValue403}`;
      (pdfValue406.setAttribute(`id`, pdfValue407),
        pdfValue406.setAttribute(`vector-effect`, `non-scaling-stroke`));
      let __pdfS;
      if (__pdfY) {
        let pdfValue799 = PdfClass18._svgFactory.createElement(`mask`);
        (pdfValue405.append(pdfValue799),
          (__pdfS = `mask_p${this.pageIndex}_${pdfValue403}`),
          pdfValue799.setAttribute(`id`, __pdfS),
          pdfValue799.setAttribute(`maskUnits`, `objectBoundingBox`));
        let ___pdfY = PdfClass18._svgFactory.createElement(`rect`);
        (pdfValue799.append(___pdfY),
          ___pdfY.setAttribute(`width`, `1`),
          ___pdfY.setAttribute(`height`, `1`),
          ___pdfY.setAttribute(`fill`, `white`));
        let pdfValue800 = PdfClass18._svgFactory.createElement(`use`);
        (pdfValue799.append(pdfValue800),
          pdfValue800.setAttribute(`href`, `#${pdfValue407}`),
          pdfValue800.setAttribute(`stroke`, `none`),
          pdfValue800.setAttribute(`fill`, `black`),
          pdfValue800.setAttribute(`fill-rule`, `nonzero`),
          pdfValue800.classList.add(`mask`));
      }
      let pdfValue408 = PdfClass18._svgFactory.createElement(`use`);
      (pdfValue404.append(pdfValue408),
        pdfValue408.setAttribute(`href`, `#${pdfValue407}`),
        __pdfS && pdfValue408.setAttribute(`mask`, `url(#${__pdfS})`));
      let __pdfI = pdfValue408.cloneNode();
      return (
        pdfValue404.append(__pdfI),
        pdfValue408.classList.add(`mainOutline`),
        __pdfI.classList.add(`secondaryOutline`),
        this.updateProperties(pdfValue404, pdfParam61),
        this.#t.set(pdfValue403, pdfValue404),
        pdfValue403
      );
    }
    finalizeDraw(pdfParam1378, pdfParam1379) {
      (this.#n.delete(pdfParam1378),
        this.updateProperties(pdfParam1378, pdfParam1379));
    }
    updateProperties(pdfParam473, __pdfY) {
      if (!__pdfY) return;
      let { root: root, bbox: bbox, rootClass: rootClass, path: path } = __pdfY,
        pdfValue1235 =
          typeof pdfParam473 == `number`
            ? this.#t.get(pdfParam473)
            : pdfParam473;
      if (pdfValue1235) {
        if (
          (root && this.#s(pdfValue1235, root),
          bbox && PdfClass18.#i(pdfValue1235, bbox),
          rootClass)
        ) {
          let { classList: classList } = pdfValue1235;
          for (let [pdfValue2184, ___pdfY] of Object.entries(rootClass))
            classList.toggle(pdfValue2184, ___pdfY);
        }
        if (path) {
          let pdfValue2191 = pdfValue1235.firstChild.firstChild;
          this.#s(pdfValue2191, path);
        }
      }
    }
    updateParent(pdfParam1009, pdfParam1010) {
      if (pdfParam1010 === this) return;
      let __pdfY = this.#t.get(pdfParam1009);
      __pdfY &&
        (pdfParam1010.#e.append(__pdfY),
        this.#t.delete(pdfParam1009),
        pdfParam1010.#t.set(pdfParam1009, __pdfY));
    }
    remove(pdfParam1185) {
      (this.#n.delete(pdfParam1185),
        this.#e !== null &&
          (this.#t.get(pdfParam1185).remove(), this.#t.delete(pdfParam1185)));
    }
    destroy() {
      this.#e = null;
      for (let pdfValue2208 of this.#t.values()) pdfValue2208.remove();
      (this.#t.clear(), this.#n.clear());
    }
  };
((globalThis._pdfjsTestingUtils = {
  HighlightOutliner: pdfValue158,
}),
  (globalThis.pdfjsLib = {
    AbortException: _pdfT,
    AnnotationEditorLayer: _pdfN,
    AnnotationEditorParamsType: pdfR,
    AnnotationEditorType: pdfI,
    AnnotationEditorUIManager: _pdfA,
    AnnotationLayer: _pdfO,
    AnnotationMode: pdfS,
    AnnotationType: pdfC,
    applyOpacity: pdfN,
    build: _pdfP,
    ColorPicker: _pdfU,
    createValidAbsoluteUrl: pdfF,
    CSSConstants: pdfL,
    DOMSVGFactory: _pdfD,
    DrawLayer: _pdfF,
    FeatureTest: pdfTt,
    fetchData: _pdfI,
    findContrastColor: _pdfL,
    getDocument: _pdfR,
    getFilenameFromUrl: pdfZ,
    getPdfFilenameFromUrl: pdfB,
    getRGB: pdfV,
    getUuid: pdfH,
    getXfaPageViewport: pdfU,
    GlobalWorkerOptions: pdfP,
    ImageKind: pdfNt,
    InvalidPDFException: pdfM,
    isDataScheme: _pdfW,
    isPdfFile: _pdfG,
    isValidExplicitDest: _pdfK,
    MathClamp: _pdfH,
    noContextMenu: _pdfQ,
    normalizeUnicode: _pdfJ,
    OPS: pdfG,
    OutputScale: pdfUnderscore,
    PasswordResponses: pdfX,
    PDFDataRangeTransport: _pdfV,
    PDFDateString: _pdfY,
    PDFWorker: _pdfB,
    PermissionFlag: _pdfS,
    PixelsPerInch: _pdfC,
    RenderingCancelledException: pdfW,
    renderRichText: _pdfX,
    ResponseException: pdfT,
    setLayerDimensions: _pdfZ,
    shadow: pdfQ,
    SignatureExtractor: pdfE,
    stopEvent: pdfDollar,
    SupportedImageMimeTypes: pdfD,
    TextLayer: pdfO,
    TouchManager: pdfK,
    updateUrlHash: pdfEt,
    Util: pdfA,
    VerbosityLevel: pdfJ,
    version: pdfRt,
    XfaLayer: _pdfM,
  }));
export {
  pdfDollar as $,
  pdfA,
  pdfB,
  _pdfC,
  pdfD,
  pdfE,
  pdfF,
  _pdfG,
  pdfH,
  _pdfI,
  _pdfJ,
  _pdfK,
  _pdfL,
  _pdfM,
  pdfN,
  pdfO,
  _pdfP,
  pdfQ,
  _pdfR,
  _pdfS,
  pdfT,
  pdfU,
  pdfV,
  _pdfW,
  _pdfX,
  _pdfZ,
  pdfUnderscore,
  _pdfA,
  _pdfB,
  pdfC,
  _pdfD,
  pdfEt,
  _pdfF,
  pdfG,
  _pdfH,
  pdfI,
  pdfJ,
  pdfK,
  pdfL,
  pdfM,
  _pdfN,
  pdfNt,
  _pdfO,
  pdfP,
  _pdfQ,
  pdfR,
  pdfRt,
  pdfS,
  _pdfT,
  pdfTt,
  _pdfU,
  _pdfV,
  pdfW,
  pdfX,
  _pdfY,
  pdfZ,
};
