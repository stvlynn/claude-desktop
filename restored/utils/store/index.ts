// Restored from ref/webview/assets/store-489E8Cj_.js
// Store chunk restored from the Codex webview bundle.
function storeRoutine1() {
  return {
    childIdByNameId: new Map(),
    childIds: [],
    childPositionById: new Map(),
    childVisibleChunkSums: null,
    totalChildSubtreeNodeCount: 0,
    totalChildVisibleSubtreeCount: 0,
  };
}
function storeRoutine2() {
  return {
    childIdByNameId: null,
    childIds: [],
    childPositionById: null,
    childVisibleChunkSums: null,
    totalChildSubtreeNodeCount: 0,
    totalChildVisibleSubtreeCount: 0,
  };
}
function storeRoutine3(input234, input235) {
  if (input235.childIdByNameId != null) return input235.childIdByNameId;
  let storeLocal458 = new Map();
  for (let storeLocal639 of input235.childIds) {
    let storeLocal660 = input234[storeLocal639];
    storeLocal660 != null &&
      storeLocal458.set(storeLocal660.nameId, storeLocal639);
  }
  return ((input235.childIdByNameId = storeLocal458), storeLocal458);
}
function storeRoutine4(input223) {
  if (input223.childPositionById != null) return input223.childPositionById;
  let storeLocal429 = new Map();
  for (
    let storeLocal604 = 0;
    storeLocal604 < input223.childIds.length;
    storeLocal604++
  ) {
    let storeLocal657 = input223.childIds[storeLocal604];
    storeLocal657 != null && storeLocal429.set(storeLocal657, storeLocal604);
  }
  return ((input223.childPositionById = storeLocal429), storeLocal429);
}
function storeRoutine5(input333, input334) {
  input333.childPositionById != null &&
    input333.childPositionById.set(input334, input333.childIds.length);
  input333.childIds.push(input334);
}
function storeRoutine6(input263, input264) {
  if (input263.childPositionById != null)
    for (
      let storeLocal571 = input264;
      storeLocal571 < input263.childIds.length;
      storeLocal571++
    ) {
      let storeLocal643 = input263.childIds[storeLocal571];
      storeLocal643 != null &&
        input263.childPositionById.set(storeLocal643, storeLocal571);
    }
}
function storeRoutine7(input219, input220) {
  let storeLocal423 = 0,
    storeLocal424 = 0;
  for (let storeLocal572 of input220.childIds) {
    let storeLocal620 = input219[storeLocal572];
    storeLocal620 != null &&
      ((storeLocal423 += storeLocal620.subtreeNodeCount),
      (storeLocal424 += storeLocal620.visibleSubtreeCount));
  }
  input220.totalChildSubtreeNodeCount = storeLocal423;
  input220.totalChildVisibleSubtreeCount = storeLocal424;
  storeRoutine11(input219, input220);
}
function storeRoutine8(input196, input197, input198, input199) {
  if (
    ((input196.totalChildSubtreeNodeCount += input198),
    (input196.totalChildVisibleSubtreeCount += input199),
    input196.childVisibleChunkSums == null || input199 === 0)
  )
    return;
  let storeLocal389 = storeRoutine4(input196).get(input197);
  if (storeLocal389 === undefined) return;
  let storeLocal390 = storeLocal389 >> 5;
  input196.childVisibleChunkSums[storeLocal390] += input199;
}
function storeRoutine9(input45, input46, input47) {
  let storeLocal161 = input46.childVisibleChunkSums;
  if (storeLocal161 != null) {
    let storeLocal448 = input47,
      storeLocal449 = 0;
    for (let storeLocal557 of storeLocal161) {
      if (storeLocal448 < storeLocal557) {
        let storeLocal617 = storeRoutine12(
          input45,
          input46,
          storeLocal449,
          storeLocal448,
        );
        return {
          ...storeLocal617,
          childVisibleIndex: input47 - storeLocal617.localVisibleIndex,
        };
      }
      storeLocal448 -= storeLocal557;
      storeLocal449 += 32;
    }
    throw Error(`Visible child index ${String(input47)} is out of range`);
  }
  let storeLocal162 = input47;
  for (
    let storeLocal388 = 0;
    storeLocal388 < input46.childIds.length;
    storeLocal388++
  ) {
    let storeLocal450 = input46.childIds[storeLocal388];
    if (storeLocal450 == null) continue;
    let storeLocal451 = input45[storeLocal450];
    if (storeLocal451 != null) {
      if (storeLocal162 < storeLocal451.visibleSubtreeCount)
        return {
          childIndex: storeLocal388,
          childVisibleIndex: input47 - storeLocal162,
          localVisibleIndex: storeLocal162,
        };
      storeLocal162 -= storeLocal451.visibleSubtreeCount;
    }
  }
  throw Error(`Visible child index ${String(input47)} is out of range`);
}
function storeRoutine10(input180, input181, input182) {
  let storeLocal364 = 0,
    storeLocal365 = input181.childVisibleChunkSums,
    storeLocal366 = 0;
  if (storeLocal365 != null) {
    let storeLocal652 = input182 >> 5;
    for (
      let storeLocal668 = 0;
      storeLocal668 < storeLocal652;
      storeLocal668 += 1
    )
      storeLocal364 += storeLocal365[storeLocal668] ?? 0;
    storeLocal366 = storeLocal652 << 5;
  }
  for (
    let storeLocal543 = storeLocal366;
    storeLocal543 < input182;
    storeLocal543 += 1
  ) {
    let storeLocal586 = input181.childIds[storeLocal543];
    if (storeLocal586 == null) continue;
    let storeLocal587 = input180[storeLocal586];
    storeLocal587 != null &&
      (storeLocal364 += storeLocal587.visibleSubtreeCount);
  }
  return storeLocal364;
}
function storeRoutine11(input137, input138) {
  if (input138.childIds.length < 128) {
    input138.childVisibleChunkSums = null;
    return;
  }
  let storeLocal310 = Math.ceil(input138.childIds.length / 32),
    storeLocal311 = new Int32Array(storeLocal310);
  for (
    let storeLocal506 = 0;
    storeLocal506 < input138.childIds.length;
    storeLocal506++
  ) {
    let storeLocal573 = input138.childIds[storeLocal506];
    if (storeLocal573 == null) continue;
    let storeLocal574 = input137[storeLocal573];
    storeLocal574 != null &&
      (storeLocal311[storeLocal506 >> 5] += storeLocal574.visibleSubtreeCount);
  }
  input138.childVisibleChunkSums = storeLocal311;
}
function storeRoutine12(input123, input124, input125, input126) {
  let storeLocal304 = Math.min(input124.childIds.length, input125 + 32),
    storeLocal305 = input126;
  for (
    let storeLocal452 = input125;
    storeLocal452 < storeLocal304;
    storeLocal452++
  ) {
    let storeLocal468 = input124.childIds[storeLocal452];
    if (storeLocal468 == null) continue;
    let storeLocal469 = input123[storeLocal468];
    if (storeLocal469 != null) {
      if (storeLocal305 < storeLocal469.visibleSubtreeCount)
        return {
          childIndex: storeLocal452,
          localVisibleIndex: storeLocal305,
        };
      storeLocal305 -= storeLocal469.visibleSubtreeCount;
    }
  }
  throw Error(`Visible child index ${String(input126)} is out of range`);
}
function storeRoutine13(input422, input423, input424 = 0) {
  return (input422 << 4) | (input424 << 3) | input423;
}
function storeRoutine14(input421) {
  return input421.depthAndFlags >>> 4;
}
function storeRoutine15(input416) {
  return (input416.depthAndFlags & 8) >> 3;
}
function storeRoutine16(input415) {
  return (input415.depthAndFlags & 8) !== 0;
}
function storeRoutine17(input425) {
  return input425.depthAndFlags & 7;
}
function storeRoutine18(input429, input430) {
  return (storeRoutine17(input429) & input430) !== 0;
}
function storeRoutine19(input431, input432) {
  input431.depthAndFlags |= input432;
}
function storeRoutine20(input410, input411) {
  input410.depthAndFlags = storeRoutine13(
    input411,
    storeRoutine17(input410),
    storeRoutine15(input410),
  );
}
var storeLocal8 = Symbol("benchmarkInstrumentation");
function storeRoutine21(input317, input318) {
  return (
    input318 == null ||
      Object.defineProperty(input317, storeLocal8, {
        configurable: true,
        enumerable: false,
        value: input318,
        writable: false,
      }),
    input317
  );
}
function storeRoutine22(input412) {
  return input412 == null ? null : (input412[storeLocal8] ?? null);
}
function storeRoutine23(input398, input399, input400) {
  return input398 == null
    ? input400()
    : input398.measurePhase(input399, input400);
}
function storeRoutine24(input386, input387, input388) {
  !Number.isFinite(input388) ||
    input386 == null ||
    input386.setCounter(input387, input388);
}
function storeRoutine25(input433) {
  return input433 >= 48 && input433 <= 57;
}
function storeRoutine26(input139) {
  let storeLocal312 = [],
    storeLocal313 = 0,
    storeLocal314 = 0;
  for (; storeLocal314 < input139.length; ) {
    for (
      ;
      storeLocal314 < input139.length &&
      !storeRoutine25(input139.charCodeAt(storeLocal314));

    )
      storeLocal314 += 1;
    if (storeLocal314 >= input139.length) break;
    storeLocal314 > storeLocal313 &&
      storeLocal312.push(input139.slice(storeLocal313, storeLocal314));
    let storeLocal442 = 0;
    for (
      ;
      storeLocal314 < input139.length &&
      storeRoutine25(input139.charCodeAt(storeLocal314));

    ) {
      storeLocal442 =
        storeLocal442 * 10 + (input139.charCodeAt(storeLocal314) - 48);
      storeLocal314 += 1;
    }
    storeLocal312.push(storeLocal442);
    storeLocal313 = storeLocal314;
  }
  return (
    (storeLocal313 < input139.length || storeLocal312.length === 0) &&
      storeLocal312.push(input139.slice(storeLocal313)),
    storeLocal312
  );
}
function storeRoutine27(input380) {
  let storeLocal621 = input380.toLowerCase();
  return {
    lowerValue: storeLocal621,
    tokens: storeRoutine26(storeLocal621),
  };
}
function storeRoutine28(input153, input154) {
  let storeLocal334 = Math.min(input153.length, input154.length);
  for (let storeLocal461 = 0; storeLocal461 < storeLocal334; storeLocal461++) {
    let storeLocal471 = input153[storeLocal461],
      storeLocal472 = input154[storeLocal461];
    if (storeLocal471 === storeLocal472) continue;
    if (typeof storeLocal471 == "number" && typeof storeLocal472 == "number")
      return storeLocal471 < storeLocal472 ? -1 : 1;
    let storeLocal473 = String(storeLocal471),
      storeLocal474 = String(storeLocal472);
    if (storeLocal473 !== storeLocal474)
      return storeLocal473 < storeLocal474 ? -1 : 1;
  }
  return input153.length === input154.length
    ? 0
    : input153.length < input154.length
      ? -1
      : 1;
}
function storeRoutine29(input131, input132) {
  if (
    input131.tokens.length === 1 &&
    input132.tokens.length === 1 &&
    typeof input131.tokens[0] == "string" &&
    typeof input132.tokens[0] == "string"
  )
    return input131.lowerValue === input132.lowerValue
      ? 0
      : input131.lowerValue < input132.lowerValue
        ? -1
        : 1;
  let storeLocal309 = storeRoutine28(input131.tokens, input132.tokens);
  return storeLocal309 === 0
    ? input131.lowerValue === input132.lowerValue
      ? 0
      : input131.lowerValue < input132.lowerValue
        ? -1
        : 1
    : storeLocal309;
}
function storeRoutine30(input372, input373, input374) {
  let storeLocal618 = storeRoutine29(input374(input372), input374(input373));
  return storeLocal618 === 0
    ? input372 === input373
      ? 0
      : input372 < input373
        ? -1
        : 1
    : storeLocal618;
}
function storeRoutine31(input434, input435) {
  return storeRoutine30(input434, input435, storeRoutine27);
}
function storeRoutine32(input384, input385) {
  return input385 === input384.segments.length - 1
    ? input384.isDirectory
      ? 1
      : 0
    : 1;
}
function storeRoutine33(input115, input116) {
  let storeLocal286 = Math.min(
    input115.segments.length,
    input116.segments.length,
  );
  for (let storeLocal513 = 0; storeLocal513 < storeLocal286; storeLocal513++) {
    let storeLocal553 = input115.segments[storeLocal513],
      storeLocal554 = input116.segments[storeLocal513];
    if (storeLocal553 === storeLocal554) continue;
    let storeLocal555 = storeRoutine32(input115, storeLocal513);
    return storeLocal555 === storeRoutine32(input116, storeLocal513)
      ? storeRoutine31(storeLocal553, storeLocal554)
      : storeLocal555 === 1
        ? -1
        : 1;
  }
  return input115.segments.length === input116.segments.length
    ? input115.isDirectory === input116.isDirectory
      ? 0
      : input115.isDirectory
        ? -1
        : 1
    : input115.segments.length < input116.segments.length
      ? -1
      : 1;
}
function storeRoutine34(input438, input439) {
  return storeRoutine33(input438, input439);
}
function storeRoutine35(input81, input82, input83) {
  let storeLocal230 = (input381) => {
      let storeLocal622 = input83.get(input381);
      if (storeLocal622 != null) return storeLocal622;
      let storeLocal623 = storeRoutine27(input381);
      return (input83.set(input381, storeLocal623), storeLocal623);
    },
    storeLocal231 = Math.min(input81.segments.length, input82.segments.length);
  for (let storeLocal511 = 0; storeLocal511 < storeLocal231; storeLocal511++) {
    let storeLocal548 = input81.segments[storeLocal511],
      storeLocal549 = input82.segments[storeLocal511];
    if (storeLocal548 === storeLocal549) continue;
    let storeLocal550 = storeRoutine32(input81, storeLocal511);
    return storeLocal550 === storeRoutine32(input82, storeLocal511)
      ? storeRoutine30(storeLocal548, storeLocal549, storeLocal230)
      : storeLocal550 === 1
        ? -1
        : 1;
  }
  return input81.segments.length === input82.segments.length
    ? input81.isDirectory === input82.isDirectory
      ? 0
      : input81.isDirectory
        ? -1
        : 1
    : input81.segments.length < input82.segments.length
      ? -1
      : 1;
}
function storeRoutine36(input305, input306) {
  let storeLocal519 = input305.sortKeyById[input306];
  if (storeLocal519 !== undefined) return storeLocal519;
  let storeLocal520 = input305.valueById[input306],
    storeLocal521 = storeRoutine27(storeLocal520);
  return ((input305.sortKeyById[input306] = storeLocal521), storeLocal521);
}
function storeRoutine37(input341 = {}) {
  return {
    flattenEmptyDirectories: input341.flattenEmptyDirectories !== false,
    sort: input341.sort ?? "default",
  };
}
function storeRoutine38(input187) {
  let storeLocal368 =
      input187.length > 0 && input187.charCodeAt(input187.length - 1) === 47,
    storeLocal369 = storeLocal368 ? input187.length - 1 : input187.length,
    storeLocal370 = [],
    storeLocal371 = 0;
  for (let storeLocal619 = 0; storeLocal619 < storeLocal369; storeLocal619++)
    input187.charCodeAt(storeLocal619) === 47 &&
      (storeLocal370.push(input187.slice(storeLocal371, storeLocal619)),
      (storeLocal371 = storeLocal619 + 1));
  return (
    storeLocal370.push(input187.slice(storeLocal371, storeLocal369)),
    {
      hasTrailingSlash: storeLocal368,
      segments: storeLocal370,
    }
  );
}
function storeRoutine39(input296) {
  let { hasTrailingSlash, segments } = storeRoutine38(input296);
  return {
    basename: segments[segments.length - 1] ?? "",
    isDirectory: hasTrailingSlash,
    path: input296,
    segments,
  };
}
function storeRoutine40(input248) {
  if (input248.length === 0)
    return {
      requiresDirectory: false,
      segments: [],
    };
  let { hasTrailingSlash, segments } = storeRoutine38(input248);
  return {
    requiresDirectory: hasTrailingSlash,
    segments,
  };
}
function _e() {
  let storeLocal569 = new Map();
  return (
    storeLocal569.set("", 0),
    {
      idByValue: storeLocal569,
      valueById: [""],
      sortKeyById: [storeRoutine27("")],
    }
  );
}
function storeRoutine41(input266, input267) {
  let storeLocal492 = input266.idByValue.get(input267);
  if (storeLocal492 !== undefined) return storeLocal492;
  let storeLocal493 = input266.valueById.length;
  return (
    input266.idByValue.set(input267, storeLocal493),
    input266.valueById.push(input267),
    storeLocal493
  );
}
function storeRoutine42(input329, input330) {
  let storeLocal545 = input329.valueById[input330];
  if (storeLocal545 === undefined)
    throw Error(`Unknown segment ID: ${String(input330)}`);
  return storeLocal545;
}
var storeLocal10 = Symbol("pathStorePreparedInputKind");
function storeRoutine43(input436, input437) {
  return ((input436[storeLocal10] = input437), input436);
}
function be(input293) {
  return {
    basename: input293.basename,
    depth: input293.segments.length,
    isDirectory: input293.isDirectory,
    path: input293.path,
    segments: input293.segments,
  };
}
function storeRoutine44(input395, input396, input397) {
  return input397 === "default"
    ? storeRoutine34(input395, input396)
    : input397(be(input395), be(input396));
}
function storeRoutine45() {
  return {
    depthAndFlags: storeRoutine13(0, 3, 1),
    nameId: 0,
    parentId: 0,
    subtreeNodeCount: 1,
    visibleSubtreeCount: 1,
  };
}
function storeRoutine46(input342, input343) {
  let storeLocal558 = Math.min(input342.length, input343.length);
  for (let storeLocal655 = 0; storeLocal655 < storeLocal558; storeLocal655++)
    if (input342[storeLocal655] !== input343[storeLocal655])
      return storeLocal655;
  return storeLocal558;
}
function storeRoutine47(input370) {
  return input370.isDirectory
    ? input370.segments.length
    : input370.segments.length - 1;
}
function storeRoutine48(input227) {
  return (
    Array.isArray(input227) &&
    input227.every(
      (item) =>
        typeof item == "object" &&
        !!item &&
        typeof item.path == "string" &&
        Array.isArray(item.segments) &&
        typeof item.basename == "string" &&
        typeof item.isDirectory == "boolean",
    )
  );
}
function storeRoutine49(input375) {
  return (
    Array.isArray(input375) && input375.every((item) => typeof item == "string")
  );
}
function storeRoutine50(input408, input409 = {}) {
  return storeRoutine56(input408, input409).map((item) => item.path);
}
function storeRoutine51(input351, input352 = {}) {
  let storeLocal568 = storeRoutine56(input351, input352);
  return storeRoutine43(
    {
      paths: storeLocal568.map((item) => item.path),
      preparedPaths: storeLocal568,
    },
    "prepared",
  );
}
function storeRoutine52(input200) {
  let storeLocal392 = input200.length,
    storeLocal393 = false;
  for (
    let storeLocal581 = 0;
    storeLocal581 < storeLocal392;
    storeLocal581 += 1
  ) {
    let storeLocal624 = input200[storeLocal581];
    if (
      storeLocal624.length > 0 &&
      storeLocal624.charCodeAt(storeLocal624.length - 1) === 47
    ) {
      storeLocal393 = true;
      break;
    }
  }
  return storeRoutine43(
    {
      paths: input200,
      presortedPaths: input200,
      presortedPathsContainDirectories: storeLocal393,
    },
    "presorted",
  );
}
function storeRoutine53(input236) {
  let storeLocal459 = input236,
    storeLocal460 = storeLocal459.preparedPaths;
  if (storeLocal459[storeLocal10] === "prepared" && storeLocal460 != null)
    return storeLocal460;
  if (!storeRoutine48(storeLocal460))
    throw Error("preparedInput must come from PathStore.prepareInput()");
  return storeLocal460;
}
function storeRoutine54(input309) {
  let storeLocal527 = input309;
  return (storeLocal527[storeLocal10] === "presorted" &&
    storeLocal527.presortedPaths != null) ||
    storeRoutine49(storeLocal527.presortedPaths)
    ? storeLocal527.presortedPaths
    : null;
}
function storeRoutine55(input295) {
  let storeLocal514 = input295;
  return typeof storeLocal514.presortedPathsContainDirectories == "boolean"
    ? storeLocal514.presortedPathsContainDirectories
    : null;
}
function storeRoutine56(input192, input193 = {}) {
  let storeLocal383 = storeRoutine37(input193),
    storeLocal384 = storeRoutine22(input193);
  storeRoutine24(storeLocal384, "workload.inputFiles", input192.length);
  let storeLocal385 = storeRoutine23(
    storeLocal384,
    "store.preparePathEntries.parse",
    () => input192.map((item) => storeRoutine39(item)),
  );
  return (
    storeRoutine23(storeLocal384, "store.preparePathEntries.sort", () =>
      storeLocal385.sort((input443, input444) =>
        storeRoutine44(input443, input444, storeLocal383.sort),
      ),
    ),
    storeLocal385
  );
}
var storeLocal11 = class {
  directories = new Map();
  directoryStack = [0];
  presortedDirectoryNodeIds = [];
  initialExpandedPathSet;
  createdDirectoriesAllExpanded = false;
  createdDirectoryCount = 0;
  lastPreparedPath = null;
  nodes = [storeRoutine45()];
  options;
  instrumentation;
  segmentSortKeyCache = new Map();
  segmentTable = _e();
  hasDeferredDirectoryIndexes = false;
  constructor(input97 = {}) {
    this.instrumentation = storeRoutine22(input97);
    this.options = storeRoutine37(input97);
    let storeLocal258 = input97.initialExpandedPaths ?? null;
    if (storeLocal258 == null || storeLocal258.length === 0)
      this.initialExpandedPathSet = null;
    else {
      let storeLocal432 = new Set(),
        storeLocal433 = storeLocal258.length;
      for (
        let storeLocal570 = 0;
        storeLocal570 < storeLocal433;
        storeLocal570 += 1
      ) {
        let storeLocal608 = storeLocal258[storeLocal570],
          storeLocal609 = storeLocal608.length;
        storeLocal432.add(
          storeLocal609 > 0 &&
            storeLocal608.charCodeAt(storeLocal609 - 1) === 47
            ? storeLocal608.slice(0, storeLocal609 - 1)
            : storeLocal608,
        );
      }
      this.initialExpandedPathSet = storeLocal432;
      this.createdDirectoriesAllExpanded = true;
    }
    this.directories.set(0, storeRoutine1());
  }
  appendPaths(input294) {
    return storeRoutine23(
      this.instrumentation,
      "store.builder.appendPaths.parse",
      () =>
        this.appendPreparedPaths(input294.map((item) => storeRoutine39(item))),
    );
  }
  appendPreparedPaths(input230, input231 = true) {
    return (
      (this.createdDirectoriesAllExpanded = false),
      storeRoutine23(
        this.instrumentation,
        "store.builder.appendPreparedPaths",
        () => {
          for (let storeLocal656 of input230)
            this.appendPreparedPath(storeLocal656, input231);
        },
      ),
      this
    );
  }
  appendPresortedPaths(input1, input2 = null) {
    return (
      storeRoutine23(
        this.instrumentation,
        "store.builder.appendPresortedPaths",
        () => {
          if (input2 === false) {
            this.appendPresortedFilePaths(input1);
            return;
          }
          this.createdDirectoriesAllExpanded = false;
          let storeLocal13 = null,
            storeLocal14 = 0,
            storeLocal15 = this.nodes,
            storeLocal16 = this.segmentTable,
            storeLocal17 = storeLocal16.idByValue,
            storeLocal18 = storeLocal16.valueById,
            storeLocal19 = this.directoryStack,
            storeLocal20 = 0,
            storeLocal21 = "",
            storeLocal22 = 0;
          for (let storeLocal23 of input1) {
            if (storeLocal13 === storeLocal23)
              throw Error(`Duplicate path: "${storeLocal23}"`);
            let storeLocal24 =
                storeLocal23.length > 0 &&
                storeLocal23.charCodeAt(storeLocal23.length - 1) === 47,
              storeLocal25 = storeLocal24
                ? storeLocal23.length - 1
                : storeLocal23.length,
              storeLocal26 = 0,
              storeLocal27 = 0;
            if (storeLocal13 != null)
              if (
                storeLocal21.length > 0 &&
                storeLocal23.length > storeLocal21.length &&
                storeLocal23.startsWith(storeLocal21)
              ) {
                storeLocal26 = storeLocal22;
                storeLocal27 = storeLocal21.length;
              } else {
                let storeLocal434 = Math.min(storeLocal25, storeLocal13.length),
                  storeLocal435 = true;
                for (
                  let storeLocal564 = 0;
                  storeLocal564 < storeLocal434;
                  storeLocal564++
                ) {
                  let storeLocal599 = storeLocal23.charCodeAt(storeLocal564);
                  if (
                    storeLocal599 !== storeLocal13.charCodeAt(storeLocal564)
                  ) {
                    storeLocal435 = false;
                    break;
                  }
                  storeLocal599 === 47 &&
                    (storeLocal26++, (storeLocal27 = storeLocal564 + 1));
                }
                storeLocal435 &&
                  storeLocal24 &&
                  storeLocal434 === storeLocal25 &&
                  storeLocal13.length > storeLocal25 &&
                  storeLocal13.charCodeAt(storeLocal25) === 47 &&
                  (storeLocal26++, (storeLocal27 = storeLocal25 + 1));
              }
            storeLocal20 = storeLocal26;
            storeLocal14 = storeLocal26;
            let storeLocal28 = storeLocal27,
              storeLocal29 = storeLocal23.indexOf("/", storeLocal28);
            for (; storeLocal29 >= 0 && storeLocal29 < storeLocal25; ) {
              let storeLocal263 = storeLocal19[storeLocal20];
              if (storeLocal263 === undefined)
                throw Error(
                  "Directory stack underflow while building the path store",
                );
              storeLocal14++;
              let storeLocal264 = storeLocal23.slice(
                  storeLocal28,
                  storeLocal29,
                ),
                storeLocal265 = storeLocal17.get(storeLocal264);
              storeLocal265 === undefined &&
                ((storeLocal265 = storeLocal18.length),
                storeLocal17.set(storeLocal264, storeLocal265),
                storeLocal18.push(storeLocal264));
              let storeLocal266 = storeLocal15.length;
              storeLocal15.push({
                depthAndFlags: storeRoutine13(storeLocal14, 0, 1),
                nameId: storeLocal265,
                parentId: storeLocal263,
                subtreeNodeCount: 1,
                visibleSubtreeCount: 1,
              });
              this.recordCreatedDirectoryPath(
                storeLocal23.slice(0, storeLocal29),
              );
              storeLocal20++;
              storeLocal19[storeLocal20] = storeLocal266;
              storeLocal28 = storeLocal29 + 1;
              storeLocal29 = storeLocal23.indexOf("/", storeLocal28);
            }
            if (storeLocal24) {
              if (storeLocal28 < storeLocal25) {
                let storeLocal317 = storeLocal19[storeLocal20];
                if (storeLocal317 === undefined)
                  throw Error(
                    `Unable to resolve directory parent for "${storeLocal23}"`,
                  );
                storeLocal14++;
                let storeLocal318 = storeLocal23.slice(
                    storeLocal28,
                    storeLocal25,
                  ),
                  storeLocal319 = storeLocal17.get(storeLocal318);
                storeLocal319 === undefined &&
                  ((storeLocal319 = storeLocal18.length),
                  storeLocal17.set(storeLocal318, storeLocal319),
                  storeLocal18.push(storeLocal318));
                let storeLocal320 = storeLocal15.length;
                storeLocal15.push({
                  depthAndFlags: storeRoutine13(storeLocal14, 0, 1),
                  nameId: storeLocal319,
                  parentId: storeLocal317,
                  subtreeNodeCount: 1,
                  visibleSubtreeCount: 1,
                });
                storeLocal20++;
                storeLocal19[storeLocal20] = storeLocal320;
              }
              let storeLocal217 = storeLocal19[storeLocal20];
              if (storeLocal217 === undefined)
                throw Error(
                  `Unable to resolve directory node for "${storeLocal23}"`,
                );
              this.promoteDirectoryToExplicit(storeLocal217, storeLocal23);
            } else {
              let storeLocal344 = storeLocal19[storeLocal20];
              if (storeLocal344 === undefined)
                throw Error(
                  `Unable to resolve file parent for "${storeLocal23}"`,
                );
              let storeLocal345 = storeLocal23.slice(storeLocal28),
                storeLocal346 = storeLocal17.get(storeLocal345);
              storeLocal346 === undefined &&
                ((storeLocal346 = storeLocal18.length),
                storeLocal17.set(storeLocal345, storeLocal346),
                storeLocal18.push(storeLocal345));
              storeLocal15.push({
                depthAndFlags: storeRoutine13(storeLocal14 + 1, 0),
                nameId: storeLocal346,
                parentId: storeLocal344,
                subtreeNodeCount: 1,
                visibleSubtreeCount: 1,
              });
            }
            storeLocal28 !== storeLocal21.length &&
              ((storeLocal21 = storeLocal23.substring(0, storeLocal28)),
              (storeLocal22 = storeLocal14));
            storeLocal13 = storeLocal23;
          }
          storeLocal19.length = storeLocal20 + 1;
          storeLocal13 != null &&
            (this.lastPreparedPath = storeRoutine39(storeLocal13));
          this.hasDeferredDirectoryIndexes = true;
        },
      ),
      this
    );
  }
  appendPresortedFilePaths(input6) {
    let storeLocal45 = null,
      storeLocal46 = 0,
      storeLocal47 = this.nodes,
      storeLocal48 = this.segmentTable,
      storeLocal49 = storeLocal48.idByValue,
      storeLocal50 = storeLocal48.valueById,
      storeLocal51 = this.directoryStack,
      storeLocal52 = 0,
      storeLocal53 = "",
      storeLocal54 = 0;
    for (let storeLocal68 of input6) {
      if (storeLocal45 === storeLocal68)
        throw Error(`Duplicate path: "${storeLocal68}"`);
      let storeLocal84 = storeLocal68.length,
        storeLocal85 = 0,
        storeLocal86 = 0;
      if (storeLocal45 != null)
        if (
          storeLocal53.length > 0 &&
          storeLocal68.length > storeLocal53.length &&
          storeLocal68.startsWith(storeLocal53)
        ) {
          storeLocal85 = storeLocal54;
          storeLocal86 = storeLocal53.length;
        } else {
          let storeLocal515 = Math.min(storeLocal84, storeLocal45.length);
          for (
            let storeLocal577 = 0;
            storeLocal577 < storeLocal515;
            storeLocal577++
          ) {
            let storeLocal616 = storeLocal68.charCodeAt(storeLocal577);
            if (storeLocal616 !== storeLocal45.charCodeAt(storeLocal577)) break;
            storeLocal616 === 47 &&
              (storeLocal85++, (storeLocal86 = storeLocal577 + 1));
          }
        }
      storeLocal52 = storeLocal85;
      storeLocal46 = storeLocal85;
      let storeLocal87 = storeLocal86,
        storeLocal88 = storeLocal68.indexOf("/", storeLocal87);
      for (; storeLocal88 >= 0; ) {
        let storeLocal232 = storeLocal51[storeLocal52];
        if (storeLocal232 === undefined)
          throw Error(
            "Directory stack underflow while building the path store",
          );
        storeLocal46++;
        let storeLocal233 = storeLocal68.slice(storeLocal87, storeLocal88),
          storeLocal234 = storeLocal49.get(storeLocal233);
        storeLocal234 === undefined &&
          ((storeLocal234 = storeLocal50.length),
          storeLocal49.set(storeLocal233, storeLocal234),
          storeLocal50.push(storeLocal233));
        let storeLocal235 = storeLocal47.length;
        storeLocal47.push({
          depthAndFlags: storeRoutine13(storeLocal46, 0, 1),
          nameId: storeLocal234,
          parentId: storeLocal232,
          subtreeNodeCount: 1,
          visibleSubtreeCount: 1,
        });
        this.recordCreatedDirectoryPath(storeLocal68.slice(0, storeLocal88));
        this.presortedDirectoryNodeIds.push(storeLocal235);
        storeLocal52++;
        storeLocal51[storeLocal52] = storeLocal235;
        storeLocal87 = storeLocal88 + 1;
        storeLocal88 = storeLocal68.indexOf("/", storeLocal87);
      }
      let storeLocal89 = storeLocal51[storeLocal52];
      if (storeLocal89 === undefined)
        throw Error(`Unable to resolve file parent for "${storeLocal68}"`);
      let storeLocal90 = storeLocal68.slice(storeLocal87),
        storeLocal91 = storeLocal49.get(storeLocal90);
      storeLocal91 === undefined &&
        ((storeLocal91 = storeLocal50.length),
        storeLocal49.set(storeLocal90, storeLocal91),
        storeLocal50.push(storeLocal90));
      storeLocal47.push({
        depthAndFlags: storeRoutine13(storeLocal46 + 1, 0),
        nameId: storeLocal91,
        parentId: storeLocal89,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      });
      storeLocal87 !== storeLocal53.length &&
        ((storeLocal53 = storeLocal68.substring(0, storeLocal87)),
        (storeLocal54 = storeLocal46));
      storeLocal45 = storeLocal68;
    }
    storeLocal51.length = storeLocal52 + 1;
    storeLocal45 != null &&
      (this.lastPreparedPath = storeRoutine39(storeLocal45));
    this.hasDeferredDirectoryIndexes = true;
  }
  finish(input48 = {}) {
    let storeLocal163 = input48.skipSubtreeCountPass === true;
    return (
      this.hasDeferredDirectoryIndexes
        ? (storeRoutine23(
            this.instrumentation,
            "store.builder.buildDirectoryIndexes",
            () => this.buildPresortedFinish(storeLocal163),
          ),
          (this.hasDeferredDirectoryIndexes = false))
        : storeLocal163 ||
          storeRoutine23(
            this.instrumentation,
            "store.builder.computeSubtreeCounts",
            () => this.computeSubtreeCounts(0),
          ),
      {
        directories: this.directories,
        nodes: this.nodes,
        options: this.options,
        rootId: 0,
        segmentTable: this.segmentTable,
        presortedDirectoryNodeIds:
          this.presortedDirectoryNodeIds.length > 0
            ? this.presortedDirectoryNodeIds
            : null,
      }
    );
  }
  didMatchAllInitialExpandedPaths() {
    return (
      this.createdDirectoriesAllExpanded &&
      this.initialExpandedPathSet != null &&
      this.createdDirectoryCount === this.initialExpandedPathSet.size
    );
  }
  appendPreparedPath(input4, input5) {
    if (
      ((this.hasDeferredDirectoryIndexes &&=
        (this.buildDirectoryIndexes(), false)),
      this.lastPreparedPath != null)
    ) {
      if (input4.path === this.lastPreparedPath.path)
        throw Error(`Duplicate path: "${input4.path}"`);
      if (
        input5 &&
        (this.options.sort === "default"
          ? storeRoutine35(
              this.lastPreparedPath,
              input4,
              this.segmentSortKeyCache,
            )
          : storeRoutine44(this.lastPreparedPath, input4, this.options.sort)) >
          0
      )
        throw Error(
          `Builder input must be sorted before appendPaths(): "${input4.path}"`,
        );
    }
    let storeLocal39 = this.lastPreparedPath,
      storeLocal40 = storeRoutine47(input4),
      storeLocal41 = storeLocal39 == null ? 0 : storeRoutine47(storeLocal39),
      storeLocal42 =
        storeLocal39 == null
          ? 0
          : storeRoutine46(storeLocal39.segments, input4.segments),
      storeLocal43 = Math.min(storeLocal42, storeLocal40, storeLocal41);
    this.directoryStack.length = storeLocal43 + 1;
    for (
      let storeLocal315 = storeLocal43;
      storeLocal315 < storeLocal40;
      storeLocal315++
    ) {
      let storeLocal335 = this.directoryStack[this.directoryStack.length - 1];
      if (storeLocal335 === undefined)
        throw Error("Directory stack underflow while building the path store");
      let storeLocal336 = input5
        ? this.getOrCreateDirectoryChild(
            storeLocal335,
            input4.segments[storeLocal315],
          )
        : this.createDirectoryChild(
            storeLocal335,
            input4.segments[storeLocal315],
          );
      this.directoryStack.push(storeLocal336);
    }
    if (input4.isDirectory) {
      let storeLocal395 = this.directoryStack[this.directoryStack.length - 1];
      if (storeLocal395 === undefined)
        throw Error(`Unable to resolve directory node for "${input4.path}"`);
      this.promoteDirectoryToExplicit(storeLocal395, input4.path);
      this.lastPreparedPath = input4;
      return;
    }
    let storeLocal44 = this.directoryStack[this.directoryStack.length - 1];
    if (storeLocal44 === undefined)
      throw Error(`Unable to resolve file parent for "${input4.path}"`);
    input5
      ? this.createFileChild(storeLocal44, input4.basename, input4.path)
      : this.createFileChildUnchecked(storeLocal44, input4.basename);
    this.lastPreparedPath = input4;
  }
  recordCreatedDirectoryPath(input201) {
    !this.createdDirectoriesAllExpanded ||
      this.initialExpandedPathSet == null ||
      ((this.createdDirectoryCount += 1),
      this.initialExpandedPathSet.has(input201) ||
        (this.createdDirectoriesAllExpanded = false));
  }
  createFileChild(input64, input65, input66) {
    let storeLocal205 = storeRoutine41(this.segmentTable, input65),
      storeLocal206 = this.getDirectoryIndex(input64),
      storeLocal207 = storeLocal206.childIdByNameId;
    if (storeLocal207 != null && storeLocal207.get(storeLocal205) !== undefined)
      throw Error(`Path collides with an existing entry: "${input66}"`);
    let storeLocal208 = this.nodes[input64];
    if (storeLocal208 === undefined)
      throw Error(`Unknown parent node ID: ${String(input64)}`);
    let storeLocal209 = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: storeRoutine13(storeRoutine14(storeLocal208) + 1, 0),
        nameId: storeLocal205,
        parentId: input64,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      storeLocal207?.set(storeLocal205, storeLocal209),
      storeRoutine5(storeLocal206, storeLocal209),
      storeLocal209
    );
  }
  createFileChildUnchecked(input98, input99) {
    let storeLocal268 = storeRoutine41(this.segmentTable, input99),
      storeLocal269 = this.getDirectoryIndex(input98),
      storeLocal270 = this.nodes[input98];
    if (storeLocal270 === undefined)
      throw Error(`Unknown parent node ID: ${String(input98)}`);
    let storeLocal271 = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: storeRoutine13(storeRoutine14(storeLocal270) + 1, 0),
        nameId: storeLocal268,
        parentId: input98,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      storeLocal269.childIdByNameId != null &&
        storeLocal269.childIdByNameId.set(storeLocal268, storeLocal271),
      storeRoutine5(storeLocal269, storeLocal271),
      storeLocal271
    );
  }
  getOrCreateDirectoryChild(input32, input33) {
    let storeLocal147 = storeRoutine41(this.segmentTable, input33),
      storeLocal148 = this.getDirectoryIndex(input32);
    if (storeLocal148.childIdByNameId != null) {
      let storeLocal453 = storeLocal148.childIdByNameId.get(storeLocal147);
      if (storeLocal453 !== undefined) {
        let storeLocal505 = this.nodes[storeLocal453];
        if (storeLocal505 != null && !storeRoutine16(storeLocal505))
          throw Error(
            `Path collides with an existing file while creating directory "${input33}"`,
          );
        return storeLocal453;
      }
    }
    let storeLocal149 = this.nodes[input32];
    if (storeLocal149 === undefined)
      throw Error(`Unknown parent node ID: ${String(input32)}`);
    let storeLocal150 = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: storeRoutine13(storeRoutine14(storeLocal149) + 1, 0, 1),
        nameId: storeLocal147,
        parentId: input32,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      storeLocal148.childIdByNameId != null &&
        storeLocal148.childIdByNameId.set(storeLocal147, storeLocal150),
      storeRoutine5(storeLocal148, storeLocal150),
      this.directories.set(storeLocal150, storeRoutine1()),
      storeLocal150
    );
  }
  createDirectoryChild(input85, input86) {
    let storeLocal246 = storeRoutine41(this.segmentTable, input86),
      storeLocal247 = this.getDirectoryIndex(input85),
      storeLocal248 = this.nodes[input85];
    if (storeLocal248 === undefined)
      throw Error(`Unknown parent node ID: ${String(input85)}`);
    let storeLocal249 = this.nodes.length;
    return (
      this.nodes.push({
        depthAndFlags: storeRoutine13(storeRoutine14(storeLocal248) + 1, 0, 1),
        nameId: storeLocal246,
        parentId: input85,
        subtreeNodeCount: 1,
        visibleSubtreeCount: 1,
      }),
      storeLocal247.childIdByNameId != null &&
        storeLocal247.childIdByNameId.set(storeLocal246, storeLocal249),
      storeRoutine5(storeLocal247, storeLocal249),
      this.directories.set(storeLocal249, storeRoutine1()),
      storeLocal249
    );
  }
  promoteDirectoryToExplicit(input184, input185) {
    let storeLocal367 = this.nodes[input184];
    if (storeLocal367 === undefined)
      throw Error(`Unknown directory node ID: ${String(input184)}`);
    if (!storeRoutine16(storeLocal367))
      throw Error(`Path is not a directory: "${input185}"`);
    if (storeRoutine18(storeLocal367, 1))
      throw Error(`Duplicate path: "${input185}"`);
    storeRoutine19(storeLocal367, 1);
  }
  getDirectoryIndex(input265) {
    let storeLocal491 = this.directories.get(input265);
    if (storeLocal491 !== undefined) return storeLocal491;
    throw Error(`Unknown directory child index for node ${String(input265)}`);
  }
  buildPresortedFinish(input60) {
    let storeLocal200 = this.nodes,
      storeLocal201 = this.directories;
    storeLocal201.set(0, storeRoutine2());
    let storeLocal202 = -1,
      storeLocal203 = null;
    for (
      let storeLocal441 = 1;
      storeLocal441 < storeLocal200.length;
      storeLocal441++
    ) {
      let storeLocal466 = storeLocal200[storeLocal441];
      if (storeLocal466 == null) continue;
      if (storeRoutine16(storeLocal466)) {
        let storeLocal670 = storeRoutine2();
        storeLocal201.set(storeLocal441, storeLocal670);
        storeLocal202 = storeLocal441;
        storeLocal203 = storeLocal670;
      }
      let storeLocal467;
      storeLocal466.parentId === storeLocal202
        ? (storeLocal467 = storeLocal203)
        : ((storeLocal467 = storeLocal201.get(storeLocal466.parentId)),
          (storeLocal202 = storeLocal466.parentId),
          (storeLocal203 = storeLocal467 ?? null));
      storeLocal467?.childIds.push(storeLocal441);
    }
    if (!input60)
      for (
        let storeLocal454 = storeLocal200.length - 1;
        storeLocal454 >= 1;
        storeLocal454--
      ) {
        let storeLocal478 = storeLocal200[storeLocal454];
        if (storeLocal478 == null) continue;
        let storeLocal479 = storeLocal200[storeLocal478.parentId];
        storeLocal479 != null &&
          ((storeLocal479.subtreeNodeCount += storeLocal478.subtreeNodeCount),
          (storeLocal479.visibleSubtreeCount +=
            storeLocal478.visibleSubtreeCount));
      }
  }
  buildDirectoryIndexes() {
    let storeLocal343 = this.nodes;
    for (
      let storeLocal394 = 1;
      storeLocal394 < storeLocal343.length;
      storeLocal394++
    ) {
      let storeLocal446 = storeLocal343[storeLocal394];
      if (storeLocal446 == null) continue;
      storeRoutine16(storeLocal446) &&
        this.directories.set(storeLocal394, storeRoutine1());
      let storeLocal447 = this.directories.get(storeLocal446.parentId);
      storeLocal447 != null &&
        (storeLocal447.childIdByNameId != null &&
          storeLocal447.childIdByNameId.set(
            storeLocal446.nameId,
            storeLocal394,
          ),
        storeRoutine5(storeLocal447, storeLocal394));
    }
  }
  computeSubtreeCounts(input117) {
    let storeLocal289 = this.nodes[input117];
    if (storeLocal289 === undefined)
      throw Error(`Unknown node ID: ${String(input117)}`);
    if (!storeRoutine16(storeLocal289))
      return (
        (storeLocal289.subtreeNodeCount = 1),
        (storeLocal289.visibleSubtreeCount = 1),
        1
      );
    let storeLocal290 = this.getDirectoryIndex(input117),
      storeLocal291 = 1;
    for (let storeLocal645 of storeLocal290.childIds)
      storeLocal291 += this.computeSubtreeCounts(storeLocal645);
    return (
      storeRoutine7(this.nodes, storeLocal290),
      (storeLocal289.subtreeNodeCount = storeLocal291),
      (storeLocal289.visibleSubtreeCount = storeLocal291),
      storeLocal291
    );
  }
};
function storeRoutine57(input61, input62 = "closed", input63 = null) {
  let storeLocal204 = storeRoutine59(input62);
  return {
    activeNodeCount: input61.nodes.length - 1,
    collapsedDirectoryIds: new Set(),
    collapseNewDirectoriesByDefault: false,
    defaultExpansion: storeLocal204,
    directoriesOpenByDefault: storeLocal204 === "open",
    hasCollapsedDirectoryOverrides: false,
    directoryLoadInfoById: new Map(),
    expandedDirectoryIds: new Set(),
    instrumentation: input63,
    listeners: new Map(),
    pathCacheByNodeId: new Map([
      [
        input61.rootId,
        {
          path: "",
          version: 0,
        },
      ],
    ]),
    pathCacheVersion: 0,
    snapshot: input61,
    transactionStack: [],
  };
}
function storeRoutine58() {
  return {
    affectedAncestorIds: new Set(),
    affectedNodeIds: new Set(),
    events: [],
  };
}
function storeRoutine59(input213) {
  if (typeof input213 != "number") return input213;
  if (!Number.isInteger(input213) || input213 < 0)
    throw Error(
      `initialExpansion must be "open", "closed", or a non-negative integer depth. Received: ${String(input213)}`,
    );
  return input213;
}
function storeRoutine60(input297, input298) {
  return storeRoutine18(input298, 2) || input297.defaultExpansion === "open"
    ? true
    : input297.defaultExpansion === "closed"
      ? false
      : storeRoutine14(input298) <= input297.defaultExpansion;
}
function storeRoutine61(
  input205,
  input206,
  input207 = input205.snapshot.nodes[input206],
) {
  return input207 == null || !storeRoutine16(input207)
    ? false
    : input205.directoriesOpenByDefault &&
        !input205.hasCollapsedDirectoryOverrides
      ? true
      : input205.collapsedDirectoryIds.has(input206)
        ? false
        : input205.expandedDirectoryIds.has(input206)
          ? true
          : storeRoutine60(input205, input207);
}
function storeRoutine62(
  input104,
  input105,
  input106,
  input107 = input104.snapshot.nodes[input105],
) {
  if (input107 == null || !storeRoutine16(input107)) return;
  let storeLocal276 = storeRoutine60(input104, input107);
  if (input106) {
    if (storeLocal276) {
      input104.collapsedDirectoryIds.delete(input105);
      input104.hasCollapsedDirectoryOverrides =
        input104.collapsedDirectoryIds.size > 0;
      return;
    }
    input104.expandedDirectoryIds.add(input105);
    return;
  }
  if (storeLocal276) {
    input104.collapsedDirectoryIds.add(input105);
    input104.hasCollapsedDirectoryOverrides = true;
    return;
  }
  input104.expandedDirectoryIds.delete(input105);
}
function storeRoutine63(input221, input222) {
  let storeLocal425 = input221.directoryLoadInfoById.get(input222);
  if (storeLocal425 != null) return storeLocal425;
  let storeLocal426 = {
    activeAttemptId: null,
    errorMessage: null,
    nextAttemptId: 1,
    state: "loaded",
  };
  return (
    input221.directoryLoadInfoById.set(input222, storeLocal426),
    storeLocal426
  );
}
function storeRoutine64(input376, input377) {
  return input376.directoryLoadInfoById.get(input377)?.state ?? "loaded";
}
function storeRoutine65(input151, input152) {
  let storeLocal332 = storeRoutine63(input151, input152);
  if (
    storeLocal332.state === "loading" &&
    storeLocal332.activeAttemptId != null
  )
    return {
      attemptId: storeLocal332.activeAttemptId,
      nodeId: input152,
      reused: true,
    };
  let storeLocal333 = storeLocal332.nextAttemptId;
  return (
    (storeLocal332.activeAttemptId = storeLocal333),
    (storeLocal332.errorMessage = null),
    (storeLocal332.nextAttemptId += 1),
    (storeLocal332.state = "loading"),
    {
      attemptId: storeLocal333,
      nodeId: input152,
      reused: false,
    }
  );
}
function storeRoutine66(input354, input355) {
  let storeLocal575 = storeRoutine63(input354, input355);
  storeLocal575.activeAttemptId = null;
  storeLocal575.errorMessage = null;
  storeLocal575.state = "unloaded";
}
function storeRoutine67(input241, input242, input243) {
  let storeLocal465 = input241.directoryLoadInfoById.get(input242);
  return storeLocal465 == null || storeLocal465.activeAttemptId !== input243
    ? false
    : ((storeLocal465.activeAttemptId = null),
      (storeLocal465.errorMessage = null),
      (storeLocal465.state = "loaded"),
      true);
}
function storeRoutine68(input365, input366, input367) {
  return (
    input365.directoryLoadInfoById.get(input366)?.activeAttemptId === input367
  );
}
function storeRoutine69(input237, input238, input239, input240) {
  let storeLocal462 = input237.directoryLoadInfoById.get(input238);
  return storeLocal462 == null || storeLocal462.activeAttemptId !== input239
    ? false
    : ((storeLocal462.activeAttemptId = null),
      (storeLocal462.errorMessage = input240 ?? null),
      (storeLocal462.state = "error"),
      true);
}
function storeRoutine70(input406, input407) {
  input406.directoryLoadInfoById.delete(input407);
}
function storeRoutine71(input224, input225, input226) {
  let storeLocal430 = input226,
    storeLocal431 = input224.listeners.get(input225);
  return (
    storeLocal431 == null
      ? input224.listeners.set(input225, new Set([storeLocal430]))
      : storeLocal431.add(storeLocal430),
    () => {
      let storeLocal589 = input224.listeners.get(input225);
      storeLocal589 != null &&
        (storeLocal589.delete(storeLocal430),
        storeLocal589.size === 0 && input224.listeners.delete(input225));
    }
  );
}
function storeRoutine72(input195) {
  return {
    affectedAncestorIds: input195.affectedAncestorIds ?? [],
    affectedNodeIds: input195.affectedNodeIds ?? [],
    canonicalChanged: true,
    operation: "add",
    path: input195.path,
    projectionChanged: input195.projectionChanged,
    visibleCountDelta: null,
  };
}
function storeRoutine73(input179) {
  return {
    affectedAncestorIds: input179.affectedAncestorIds ?? [],
    affectedNodeIds: input179.affectedNodeIds ?? [],
    canonicalChanged: true,
    operation: "remove",
    path: input179.path,
    projectionChanged: input179.projectionChanged,
    recursive: input179.recursive,
    visibleCountDelta: null,
  };
}
function storeRoutine74(input191) {
  return {
    affectedAncestorIds: input191.affectedAncestorIds ?? [],
    affectedNodeIds: input191.affectedNodeIds ?? [],
    canonicalChanged: true,
    from: input191.from,
    operation: "move",
    projectionChanged: input191.projectionChanged,
    to: input191.to,
    visibleCountDelta: null,
  };
}
function storeRoutine75(input210) {
  return {
    affectedAncestorIds: input210.affectedAncestorIds ?? [],
    affectedNodeIds: input210.affectedNodeIds ?? [],
    canonicalChanged: false,
    operation: "expand",
    path: input210.path,
    projectionChanged: true,
    visibleCountDelta: null,
  };
}
function storeRoutine76(input204) {
  return {
    affectedAncestorIds: input204.affectedAncestorIds ?? [],
    affectedNodeIds: input204.affectedNodeIds ?? [],
    canonicalChanged: false,
    operation: "collapse",
    path: input204.path,
    projectionChanged: true,
    visibleCountDelta: null,
  };
}
function storeRoutine77(input183) {
  return {
    affectedAncestorIds: input183.affectedAncestorIds ?? [],
    affectedNodeIds: input183.affectedNodeIds ?? [],
    canonicalChanged: false,
    operation: "mark-directory-unloaded",
    path: input183.path,
    projectionChanged: input183.projectionChanged,
    visibleCountDelta: null,
  };
}
function $e(input158) {
  return {
    affectedAncestorIds: input158.affectedAncestorIds ?? [],
    affectedNodeIds: input158.affectedNodeIds ?? [],
    attemptId: input158.attemptId,
    canonicalChanged: false,
    operation: "begin-child-load",
    path: input158.path,
    projectionChanged: input158.projectionChanged,
    reused: input158.reused,
    visibleCountDelta: null,
  };
}
function storeRoutine78(input122) {
  return {
    affectedAncestorIds: input122.affectedAncestorIds ?? [],
    affectedNodeIds: input122.affectedNodeIds ?? [],
    attemptId: input122.attemptId,
    canonicalChanged: input122.childEvents.some(
      (item) => item.canonicalChanged,
    ),
    childEvents: input122.childEvents,
    operation: "apply-child-patch",
    path: input122.path,
    projectionChanged: input122.projectionChanged,
    visibleCountDelta: null,
  };
}
function storeRoutine79(input157) {
  return {
    affectedAncestorIds: input157.affectedAncestorIds ?? [],
    affectedNodeIds: input157.affectedNodeIds ?? [],
    attemptId: input157.attemptId,
    canonicalChanged: false,
    operation: "complete-child-load",
    path: input157.path,
    projectionChanged: input157.projectionChanged,
    stale: input157.stale,
    visibleCountDelta: null,
  };
}
function storeRoutine80(input136) {
  return {
    affectedAncestorIds: input136.affectedAncestorIds ?? [],
    affectedNodeIds: input136.affectedNodeIds ?? [],
    attemptId: input136.attemptId,
    canonicalChanged: false,
    errorMessage: input136.errorMessage,
    operation: "fail-child-load",
    path: input136.path,
    projectionChanged: input136.projectionChanged,
    stale: input136.stale,
    visibleCountDelta: null,
  };
}
function storeRoutine81(input15) {
  return {
    activeNodeCountAfter: input15.activeNodeCountAfter,
    activeNodeCountBefore: input15.activeNodeCountBefore,
    affectedAncestorIds: input15.affectedAncestorIds ?? [],
    affectedNodeIds: input15.affectedNodeIds ?? [],
    cachedPathEntryCountAfter: input15.cachedPathEntryCountAfter,
    cachedPathEntryCountBefore: input15.cachedPathEntryCountBefore,
    canonicalChanged: false,
    idsPreserved: input15.idsPreserved,
    loadInfoEntryCountAfter: input15.loadInfoEntryCountAfter,
    loadInfoEntryCountBefore: input15.loadInfoEntryCountBefore,
    mode: input15.mode,
    operation: "cleanup",
    projectionChanged: input15.projectionChanged,
    reclaimedCachedPathEntryCount: input15.reclaimedCachedPathEntryCount,
    reclaimedLoadInfoEntryCount: input15.reclaimedLoadInfoEntryCount,
    reclaimedNodeSlotCount: input15.reclaimedNodeSlotCount,
    reclaimedSegmentCount: input15.reclaimedSegmentCount,
    segmentCountAfter: input15.segmentCountAfter,
    segmentCountBefore: input15.segmentCountBefore,
    totalNodeSlotCountAfter: input15.totalNodeSlotCountAfter,
    totalNodeSlotCountBefore: input15.totalNodeSlotCountBefore,
    visibleCountDelta: null,
  };
}
function storeRoutine82(input401, input402, input403) {
  return {
    ...input403,
    visibleCountDelta: storeRoutine92(input401) - input402,
  };
}
function storeRoutine83(input310, input311) {
  let storeLocal528 = storeRoutine92(input310),
    storeLocal529 = storeRoutine58();
  input310.transactionStack.push(storeLocal529);
  try {
    input311();
  } catch (storeLocal671) {
    throw (storeRoutine85(input310, storeLocal529, false), storeLocal671);
  }
  storeRoutine85(
    input310,
    storeLocal529,
    true,
    storeRoutine92(input310) - storeLocal528,
  );
}
function storeRoutine84(input336, input337) {
  let storeLocal552 = input336.instrumentation;
  if (storeLocal552 == null) {
    at(input336, input337);
    return;
  }
  storeRoutine23(storeLocal552, "store.events.record", () =>
    at(input336, input337),
  );
}
function at(input284, input285) {
  let storeLocal508 =
    input284.transactionStack[input284.transactionStack.length - 1] ?? null;
  if (storeLocal508 == null) {
    storeRoutine90(input284, input285);
    return;
  }
  storeLocal508.events.push(input285);
  storeRoutine89(storeLocal508, input285);
}
function storeRoutine85(input93, input94, input95, input96 = null) {
  if (input93.transactionStack.pop() !== input94)
    throw Error("Transaction stack underflow");
  if (!input95) return;
  let storeLocal255 =
    input93.transactionStack[input93.transactionStack.length - 1] ?? null;
  if (storeLocal255 != null) {
    let storeLocal578 = input93.instrumentation;
    storeLocal578 == null
      ? storeRoutine88(storeLocal255, input94)
      : storeRoutine23(storeLocal578, "store.events.batch.merge", () =>
          storeRoutine88(storeLocal255, input94),
        );
    return;
  }
  let storeLocal256 = storeRoutine86(input94, input96),
    storeLocal257 = input93.instrumentation;
  if (storeLocal257 == null) {
    storeRoutine90(input93, storeLocal256);
    return;
  }
  storeRoutine23(storeLocal257, "store.events.batch.commit", () =>
    storeRoutine90(input93, storeLocal256),
  );
}
function storeRoutine86(input145, input146) {
  return {
    affectedAncestorIds: [...input145.affectedAncestorIds],
    affectedNodeIds: [...input145.affectedNodeIds],
    canonicalChanged: input145.events.some((item) => item.canonicalChanged),
    events: [...input145.events],
    operation: "batch",
    projectionChanged: input145.events.some((item) => item.projectionChanged),
    visibleCountDelta: input146,
  };
}
function storeRoutine87(input268, input269) {
  for (let storeLocal637 of input269.affectedAncestorIds)
    input268.affectedAncestorIds.add(storeLocal637);
  for (let storeLocal648 of input269.affectedNodeIds)
    input268.affectedNodeIds.add(storeLocal648);
}
function storeRoutine88(input392, input393) {
  for (let storeLocal661 of input393.events)
    input392.events.push(storeLocal661);
  storeRoutine87(input392, input393);
}
function storeRoutine89(input270, input271) {
  for (let storeLocal646 of input271.affectedNodeIds)
    input270.affectedNodeIds.add(storeLocal646);
  for (let storeLocal640 of input271.affectedAncestorIds)
    input270.affectedAncestorIds.add(storeLocal640);
}
function storeRoutine90(input338, input339) {
  let storeLocal556 = input338.instrumentation;
  if (storeLocal556 == null) {
    storeRoutine91(input338, input339);
    return;
  }
  storeRoutine23(storeLocal556, "store.events.emit", () =>
    storeRoutine91(input338, input339),
  );
}
function storeRoutine91(input344, input345) {
  input344.listeners
    .get(input345.operation)
    ?.forEach((input445) => input445(input345));
  input344.listeners.get("*")?.forEach((input446) => input446(input345));
}
function storeRoutine92(input361) {
  return (
    input361.snapshot.nodes[input361.snapshot.rootId]?.visibleSubtreeCount ?? 0
  );
}
function storeRoutine93(input120, input121) {
  if (input120.snapshot.options.flattenEmptyDirectories !== true) return null;
  let storeLocal294 = input120.snapshot.nodes[input121];
  if (
    storeLocal294 == null ||
    !storeRoutine16(storeLocal294) ||
    storeRoutine18(storeLocal294, 2)
  )
    return null;
  let storeLocal295 = input120.snapshot.directories.get(input121);
  if (storeLocal295 == null || storeLocal295.childIds.length !== 1) return null;
  let storeLocal296 = storeLocal295.childIds[0];
  if (storeLocal296 == null) return null;
  let storeLocal297 = input120.snapshot.nodes[storeLocal296];
  return storeLocal297 == null || !storeRoutine16(storeLocal297)
    ? null
    : storeLocal296;
}
function storeRoutine94(input382, input383) {
  let storeLocal625 = input383;
  for (;;) {
    let storeLocal662 = storeRoutine93(input382, storeLocal625);
    if (storeLocal662 == null) return storeLocal625;
    storeLocal625 = storeLocal662;
  }
}
function storeRoutine95(input359, input360) {
  let storeLocal590 = [input360],
    storeLocal591 = input360;
  for (;;) {
    let storeLocal653 = storeRoutine93(input359, storeLocal591);
    if (storeLocal653 == null) return storeLocal590;
    storeLocal590.push(storeLocal653);
    storeLocal591 = storeLocal653;
  }
}
function storeRoutine96(input362, input363) {
  let storeLocal593 =
    input363 == null
      ? input362.snapshot.rootId
      : storeRoutine105(input362, input363);
  return storeLocal593 == null ? [] : storeRoutine109(input362, storeLocal593);
}
function storeRoutine97(input58, input59) {
  let storeLocal194 = storeRoutine39(input59),
    storeLocal195 = storeLocal194.isDirectory
      ? storeLocal194.segments
      : storeLocal194.segments.slice(0, -1),
    storeLocal196 = storeRoutine124(
      input58,
      storeRoutine123(input58, storeLocal195),
    ),
    { createdNodeIds, directoryId } = storeRoutine110(input58, storeLocal195),
    storeLocal197 = new Set(createdNodeIds),
    storeLocal198 = directoryId;
  if (storeLocal194.isDirectory) {
    let storeLocal480 = storeRoutine108(input58, directoryId);
    if (storeRoutine18(storeLocal480, 1))
      throw Error(`Path already exists: "${input59}"`);
    storeRoutine19(storeLocal480, 1);
    input58.pathCacheByNodeId.set(directoryId, {
      path: input59,
      version: input58.pathCacheVersion,
    });
    storeLocal197.add(directoryId);
  } else {
    storeLocal198 = storeRoutine112(
      input58,
      directoryId,
      storeLocal194.basename,
    );
    storeLocal197.add(storeLocal198);
  }
  storeRoutine102(input58, directoryId);
  let storeLocal199 = storeRoutine124(input58, directoryId);
  return storeRoutine72({
    affectedAncestorIds: storeRoutine104(input58, storeLocal198),
    affectedNodeIds: [...storeLocal197],
    path: input59,
    projectionChanged: storeRoutine125(storeLocal196, storeLocal199),
  });
}
function storeRoutine98(input51, input52, input53) {
  let storeLocal167 = storeRoutine105(input51, input52);
  if (storeLocal167 == null) throw Error(`Path does not exist: "${input52}"`);
  let storeLocal168 = storeRoutine108(input51, storeLocal167);
  if (storeRoutine18(storeLocal168, 2))
    throw Error("The root node cannot be removed");
  if (
    storeRoutine16(storeLocal168) &&
    storeRoutine107(input51, storeLocal167).childIds.length > 0 &&
    input53.recursive !== true
  )
    throw Error(
      `Cannot remove a non-empty directory without recursive: "${input52}"`,
    );
  let storeLocal169 = storeLocal168.parentId,
    storeLocal170 = storeRoutine124(input51, storeLocal169),
    storeLocal171 = storeRoutine121(input51, storeLocal167);
  storeRoutine115(input51, storeLocal169, storeLocal167, storeLocal168.nameId);
  storeRoutine122(input51, storeLocal169);
  storeRoutine102(input51, storeLocal169);
  let storeLocal172 = storeRoutine124(input51, storeLocal169);
  return storeRoutine73({
    affectedAncestorIds: storeRoutine104(input51, storeLocal169),
    affectedNodeIds: storeLocal171,
    path: input52,
    projectionChanged: storeRoutine125(storeLocal170, storeLocal172),
    recursive: input53.recursive === true,
  });
}
function _t(input11, input12, input13, input14) {
  let storeLocal99 = storeRoutine105(input11, input12);
  if (storeLocal99 == null)
    throw Error(`Source path does not exist: "${input12}"`);
  let storeLocal100 = storeRoutine108(input11, storeLocal99);
  if (storeRoutine18(storeLocal100, 2))
    throw Error("The root node cannot be moved");
  let storeLocal101 = input14.collision ?? "error",
    storeLocal102 = storeRoutine119(input11, storeLocal99, input13),
    storeLocal103 = storeRoutine124(input11, storeLocal100.parentId),
    storeLocal104 = storeRoutine124(input11, storeLocal102.parentId),
    storeLocal105 = storeRoutine42(
      input11.snapshot.segmentTable,
      storeLocal100.nameId,
    ),
    storeLocal106 = storeRoutine41(
      input11.snapshot.segmentTable,
      storeLocal102.basename,
    );
  if (
    storeLocal102.parentId === storeLocal100.parentId &&
    storeLocal105 === storeLocal102.basename
  )
    return null;
  if (
    storeRoutine16(storeLocal100) &&
    storeRoutine129(input11, storeLocal99, storeLocal102.parentId)
  )
    throw Error("Cannot move a directory into one of its descendants");
  let storeLocal107 = storeRoutine3(
      input11.snapshot.nodes,
      storeRoutine107(input11, storeLocal102.parentId),
    ).get(storeLocal106),
    storeLocal108 = storeLocal102.existingNodeId ?? storeLocal107 ?? null;
  if (
    storeLocal108 != null &&
    storeLocal108 !== storeLocal99 &&
    storeRoutine120(
      input11,
      storeLocal108,
      storeLocal101,
      storeRoutine15(storeLocal100),
    ) === "skip"
  )
    return null;
  let storeLocal109 = storeLocal100.parentId;
  storeRoutine115(input11, storeLocal109, storeLocal99, storeLocal100.nameId);
  storeLocal100.parentId = storeLocal102.parentId;
  storeLocal100.nameId = storeLocal106;
  input11.pathCacheByNodeId.delete(storeLocal99);
  storeRoutine128(input11, storeLocal99);
  storeRoutine114(input11, storeLocal102.parentId, storeLocal99);
  storeRoutine122(input11, storeLocal109);
  input11.pathCacheVersion++;
  storeRoutine102(input11, storeLocal109);
  storeLocal102.parentId !== storeLocal109 &&
    storeRoutine102(input11, storeLocal102.parentId);
  let storeLocal110 = storeRoutine124(input11, storeLocal109),
    storeLocal111 = storeRoutine124(input11, storeLocal102.parentId);
  return storeRoutine74({
    affectedAncestorIds: [
      ...new Set([
        ...storeRoutine104(input11, storeLocal109),
        ...storeRoutine104(input11, storeLocal102.parentId),
      ]),
    ],
    affectedNodeIds: [storeLocal99],
    from: input12,
    projectionChanged: storeRoutine126(
      [storeLocal103, storeLocal104],
      [storeLocal110, storeLocal111],
    ),
    to: storeRoutine101(input11, storeLocal99),
  });
}
function storeRoutine99(input325, input326) {
  let storeLocal544 = input325.pathCacheByNodeId.get(input326);
  return storeLocal544 != null &&
    storeLocal544.version === input325.pathCacheVersion
    ? storeLocal544.path
    : null;
}
function storeRoutine100(input356, input357, input358) {
  return (
    input356.pathCacheByNodeId.set(input357, {
      path: input358,
      version: input356.pathCacheVersion,
    }),
    input358
  );
}
function storeRoutine101(input202, input203) {
  let storeLocal396 = storeRoutine108(input202, input203),
    storeLocal397 = storeRoutine99(input202, input203);
  if (storeLocal397 != null) return storeLocal397;
  if (storeRoutine18(storeLocal396, 2))
    return storeRoutine100(input202, input203, "");
  let storeLocal398 = storeRoutine101(input202, storeLocal396.parentId),
    storeLocal399 = storeRoutine42(
      input202.snapshot.segmentTable,
      storeLocal396.nameId,
    ),
    storeLocal400 =
      storeLocal398.length === 0
        ? storeLocal399
        : `${storeLocal398}${storeLocal399}`;
  return storeRoutine100(
    input202,
    input203,
    storeRoutine16(storeLocal396) ? `${storeLocal400}/` : storeLocal400,
  );
}
function storeRoutine102(input312, input313) {
  let storeLocal530 = input312.instrumentation;
  if (storeLocal530 == null) {
    storeRoutine131(input312, input313);
    return;
  }
  storeRoutine23(storeLocal530, "store.recomputeCountsUpwardFrom", () =>
    storeRoutine131(input312, input313),
  );
}
function storeRoutine103(input140, input141) {
  let storeLocal316 = [[input141, 0]],
    { nodes, directories } = input140.snapshot;
  for (; storeLocal316.length > 0; ) {
    let storeLocal401 = storeLocal316[storeLocal316.length - 1],
      storeLocal402 = storeLocal401[0],
      storeLocal403 = nodes[storeLocal402];
    if (storeLocal403 == null || !storeRoutine16(storeLocal403)) {
      storeRoutine130(input140, storeLocal402, storeLocal403, true);
      storeLocal316.pop();
      continue;
    }
    let storeLocal404 = directories.get(storeLocal402);
    if (
      storeLocal404 == null ||
      storeLocal401[1] >= storeLocal404.childIds.length
    ) {
      storeRoutine130(input140, storeLocal402, storeLocal403, true);
      storeLocal316.pop();
      continue;
    }
    let storeLocal405 = storeLocal404.childIds[storeLocal401[1]++];
    storeLocal316.push([storeLocal405, 0]);
  }
}
function storeRoutine104(input299, input300) {
  let storeLocal516 = [],
    storeLocal517 = input300;
  for (; storeLocal517 != null; ) {
    let storeLocal631 = storeRoutine108(input299, storeLocal517);
    if (
      (storeLocal516.push(storeLocal517),
      storeLocal517 === input299.snapshot.rootId)
    )
      break;
    storeLocal517 = storeLocal631.parentId;
  }
  return storeLocal516;
}
function storeRoutine105(input319, input320) {
  if (input320.length === 0) return input319.snapshot.rootId;
  let storeLocal535 = storeRoutine40(input320);
  return storeRoutine106(
    input319,
    storeLocal535.segments,
    storeLocal535.requiresDirectory,
  );
}
function storeRoutine106(input176, input177, input178) {
  let storeLocal361 = input176.snapshot.rootId;
  for (let storeLocal464 of input177) {
    let storeLocal475 =
      input176.snapshot.segmentTable.idByValue.get(storeLocal464);
    if (storeLocal475 === undefined) return null;
    let storeLocal476 = storeRoutine107(input176, storeLocal361),
      storeLocal477 = storeRoutine3(input176.snapshot.nodes, storeLocal476).get(
        storeLocal475,
      );
    if (storeLocal477 === undefined) return null;
    storeLocal361 = storeLocal477;
  }
  let storeLocal362 = storeRoutine108(input176, storeLocal361);
  return input178 && !storeRoutine16(storeLocal362) ? null : storeLocal361;
}
function storeRoutine107(input261, input262) {
  let storeLocal490 = input261.snapshot.directories.get(input262);
  if (storeLocal490 === undefined)
    throw Error(`Unknown directory child index for node ${String(input262)}`);
  return storeLocal490;
}
function storeRoutine108(input314, input315) {
  let storeLocal531 = input314.snapshot.nodes[input315];
  if (storeLocal531 === undefined || storeRoutine18(storeLocal531, 4))
    throw Error(`Unknown node ID: ${String(input315)}`);
  return storeLocal531;
}
function storeRoutine109(input34, input35) {
  let storeLocal151 = input34.snapshot.nodes[input35];
  if (storeLocal151 === undefined || storeRoutine18(storeLocal151, 4))
    return [];
  if (!storeRoutine16(storeLocal151))
    return [storeRoutine101(input34, input35)];
  if (storeRoutine107(input34, input35).childIds.length === 0)
    return storeRoutine18(storeLocal151, 1) && !storeRoutine18(storeLocal151, 2)
      ? [storeRoutine101(input34, input35)]
      : [];
  let storeLocal152 = [],
    storeLocal153 = [
      {
        childIndex: 0,
        nodeId: input35,
      },
    ];
  for (; storeLocal153.length > 0; ) {
    let storeLocal259 = storeLocal153[storeLocal153.length - 1];
    if (storeLocal259 == null) break;
    let storeLocal260 = input34.snapshot.nodes[storeLocal259.nodeId];
    if (storeLocal260 === undefined || storeRoutine18(storeLocal260, 4)) {
      storeLocal153.pop();
      continue;
    }
    if (!storeRoutine16(storeLocal260)) {
      storeLocal152.push(storeRoutine101(input34, storeLocal259.nodeId));
      storeLocal153.pop();
      continue;
    }
    let storeLocal261 = storeRoutine107(input34, storeLocal259.nodeId);
    if (storeLocal261.childIds.length === 0) {
      storeRoutine18(storeLocal260, 1) &&
        !storeRoutine18(storeLocal260, 2) &&
        storeLocal152.push(storeRoutine101(input34, storeLocal259.nodeId));
      storeLocal153.pop();
      continue;
    }
    let storeLocal262 = storeLocal261.childIds[storeLocal259.childIndex];
    if (storeLocal262 == null) {
      storeLocal153.pop();
      continue;
    }
    storeLocal259.childIndex++;
    storeLocal153.push({
      childIndex: 0,
      nodeId: storeLocal262,
    });
  }
  return storeLocal152;
}
function storeRoutine110(input118, input119) {
  let storeLocal292 = [],
    storeLocal293 = input118.snapshot.rootId;
  for (let storeLocal363 of input119) {
    let storeLocal377 = storeRoutine41(
        input118.snapshot.segmentTable,
        storeLocal363,
      ),
      storeLocal378 = storeRoutine107(input118, storeLocal293),
      storeLocal379 = storeRoutine3(input118.snapshot.nodes, storeLocal378).get(
        storeLocal377,
      );
    if (storeLocal379 !== undefined) {
      if (!storeRoutine16(storeRoutine108(input118, storeLocal379)))
        throw Error(
          `Cannot create a directory that collides with an existing file: "${storeLocal363}"`,
        );
      storeLocal293 = storeLocal379;
      continue;
    }
    storeLocal293 = storeRoutine111(input118, storeLocal293, storeLocal377);
    storeLocal292.push(storeLocal293);
  }
  return {
    createdNodeIds: storeLocal292,
    directoryId: storeLocal293,
  };
}
function storeRoutine111(input101, input102, input103) {
  let storeLocal272 = storeRoutine108(input101, input102),
    storeLocal273 = input101.snapshot.nodes.length;
  return (
    input101.snapshot.nodes.push({
      depthAndFlags: storeRoutine13(storeRoutine14(storeLocal272) + 1, 0, 1),
      nameId: input103,
      parentId: input102,
      subtreeNodeCount: 1,
      visibleSubtreeCount: 1,
    }),
    input101.snapshot.directories.set(storeLocal273, storeRoutine1()),
    storeRoutine114(input101, input102, storeLocal273),
    input101.collapseNewDirectoriesByDefault &&
      (input101.collapsedDirectoryIds.add(storeLocal273),
      (input101.hasCollapsedDirectoryOverrides = true)),
    input101.activeNodeCount++,
    storeLocal273
  );
}
function storeRoutine112(input109, input110, input111) {
  let storeLocal277 = storeRoutine41(input109.snapshot.segmentTable, input111),
    storeLocal278 = storeRoutine107(input109, input110);
  if (storeRoutine3(input109.snapshot.nodes, storeLocal278).has(storeLocal277))
    throw Error(
      `Path already exists: "${storeRoutine133(input109, input110, input111)}"`,
    );
  let storeLocal279 = storeRoutine108(input109, input110),
    storeLocal280 = input109.snapshot.nodes.length;
  return (
    input109.snapshot.nodes.push({
      depthAndFlags: storeRoutine13(storeRoutine14(storeLocal279) + 1, 0),
      nameId: storeLocal277,
      parentId: input110,
      subtreeNodeCount: 1,
      visibleSubtreeCount: 1,
    }),
    storeRoutine114(input109, input110, storeLocal280),
    input109.activeNodeCount++,
    storeLocal280
  );
}
function storeRoutine113(input256, input257, input258) {
  let storeLocal485 = 0,
    storeLocal486 = input257.childIds.length;
  for (; storeLocal485 < storeLocal486; ) {
    let storeLocal600 = (storeLocal485 + storeLocal486) >>> 1,
      storeLocal601 = input257.childIds[storeLocal600];
    if (storeLocal601 == null) {
      storeLocal486 = storeLocal600;
      continue;
    }
    storeRoutine116(input256, input258, storeLocal601) < 0
      ? (storeLocal486 = storeLocal600)
      : (storeLocal485 = storeLocal600 + 1);
  }
  return storeLocal485;
}
function storeRoutine114(input214, input215, input216) {
  let storeLocal418 = storeRoutine107(input214, input215),
    storeLocal419 = storeRoutine108(input214, input216);
  storeRoutine3(input214.snapshot.nodes, storeLocal418).set(
    storeLocal419.nameId,
    input216,
  );
  storeRoutine8(
    storeLocal418,
    input216,
    storeLocal419.subtreeNodeCount,
    storeLocal419.visibleSubtreeCount,
  );
  let storeLocal420 = storeRoutine113(input214, storeLocal418, input216);
  storeLocal418.childIds.splice(storeLocal420, 0, input216);
  storeRoutine6(storeLocal418, storeLocal420);
  storeRoutine11(input214.snapshot.nodes, storeLocal418);
}
function storeRoutine115(input170, input171, input172, input173) {
  let storeLocal351 = storeRoutine107(input170, input171),
    storeLocal352 = storeRoutine4(storeLocal351),
    storeLocal353 = storeLocal352.get(input172) ?? -1;
  storeRoutine3(input170.snapshot.nodes, storeLocal351).delete(input173);
  storeLocal352.delete(input172);
  let storeLocal354 = input170.snapshot.nodes[input172];
  storeLocal354 != null &&
    storeRoutine8(
      storeLocal351,
      input172,
      -storeLocal354.subtreeNodeCount,
      -storeLocal354.visibleSubtreeCount,
    );
  storeLocal353 >= 0 &&
    (storeLocal351.childIds.splice(storeLocal353, 1),
    storeRoutine6(storeLocal351, storeLocal353),
    storeRoutine11(input170.snapshot.nodes, storeLocal351));
}
function storeRoutine116(input346, input347, input348) {
  let storeLocal563 = input346.snapshot.options.sort;
  return storeLocal563 === "default"
    ? storeRoutine117(input346, input347, input348)
    : storeLocal563(
        storeRoutine118(input346, input347),
        storeRoutine118(input346, input348),
      );
}
function storeRoutine117(input142, input143, input144) {
  let storeLocal321 = storeRoutine108(input142, input143),
    storeLocal322 = storeRoutine108(input142, input144),
    storeLocal323 = storeRoutine16(storeLocal321);
  if (storeLocal323 !== storeRoutine16(storeLocal322))
    return storeLocal323 ? -1 : 1;
  let storeLocal324 = storeRoutine29(
    storeRoutine36(input142.snapshot.segmentTable, storeLocal321.nameId),
    storeRoutine36(input142.snapshot.segmentTable, storeLocal322.nameId),
  );
  if (storeLocal324 !== 0) return storeLocal324;
  let storeLocal325 = storeRoutine42(
      input142.snapshot.segmentTable,
      storeLocal321.nameId,
    ),
    storeLocal326 = storeRoutine42(
      input142.snapshot.segmentTable,
      storeLocal322.nameId,
    );
  return storeLocal325 === storeLocal326
    ? input143 < input144
      ? -1
      : 1
    : storeLocal325 < storeLocal326
      ? -1
      : 1;
}
function storeRoutine118(input228, input229) {
  let storeLocal437 = storeRoutine108(input228, input229),
    storeLocal438 = storeRoutine101(input228, input229),
    storeLocal439 = storeRoutine16(storeLocal437),
    storeLocal440 = storeLocal439 ? storeLocal438.slice(0, -1) : storeLocal438;
  return {
    basename: storeRoutine42(
      input228.snapshot.segmentTable,
      storeLocal437.nameId,
    ),
    depth: storeRoutine14(storeLocal437),
    isDirectory: storeLocal439,
    path: storeLocal438,
    segments: storeLocal440.length === 0 ? [] : storeLocal440.split("/"),
  };
}
function storeRoutine119(input54, input55, input56) {
  let storeLocal173 = storeRoutine108(input54, input55),
    storeLocal174 = storeRoutine105(input54, input56);
  if (storeLocal174 != null) {
    let storeLocal415 = storeRoutine108(input54, storeLocal174);
    if (storeRoutine16(storeLocal415))
      return {
        basename: storeRoutine42(
          input54.snapshot.segmentTable,
          storeLocal173.nameId,
        ),
        existingNodeId: null,
        parentId: storeLocal174,
      };
    let storeLocal416 = storeRoutine40(input56).segments;
    return {
      basename: storeLocal416[storeLocal416.length - 1] ?? "",
      existingNodeId: storeLocal174,
      parentId: storeLocal415.parentId,
    };
  }
  let storeLocal175 = storeRoutine40(input56),
    storeLocal176 =
      storeLocal175.segments[storeLocal175.segments.length - 1] ?? "",
    storeLocal177 = storeLocal175.segments.slice(0, -1),
    storeLocal178 =
      storeLocal177.length === 0
        ? input54.snapshot.rootId
        : storeRoutine106(input54, storeLocal177, true);
  if (storeLocal178 == null)
    throw Error(`Destination parent does not exist: "${input56}"`);
  return {
    basename: storeLocal176,
    existingNodeId: null,
    parentId: storeLocal178,
  };
}
function storeRoutine120(input75, input76, input77, input78) {
  if (input77 === "skip") return "skip";
  if (input77 === "error")
    throw Error(
      `Destination already exists: "${storeRoutine101(input75, input76)}"`,
    );
  let storeLocal227 = storeRoutine108(input75, input76);
  if (storeRoutine15(storeLocal227) !== input78)
    throw Error(
      "replace collision requires the same source and destination kinds",
    );
  if (
    storeRoutine16(storeLocal227) &&
    storeRoutine107(input75, input76).childIds.length > 0
  )
    throw Error("replace collision does not support non-empty directories");
  let storeLocal228 = storeLocal227.parentId,
    storeLocal229 = storeLocal227.nameId;
  return (
    storeRoutine121(input75, input76),
    storeRoutine115(input75, storeLocal228, input76, storeLocal229),
    storeRoutine122(input75, storeLocal228),
    storeRoutine102(input75, storeLocal228),
    "handled"
  );
}
function storeRoutine121(input30, input31) {
  let storeLocal145 = [],
    storeLocal146 = [
      {
        nodeId: input31,
        visitedChildren: false,
      },
    ];
  for (; storeLocal146.length > 0; ) {
    let storeLocal156 = storeLocal146.pop();
    if (storeLocal156 == null) break;
    let storeLocal157 = storeRoutine108(input30, storeLocal156.nodeId);
    if (storeLocal156.visitedChildren || !storeRoutine16(storeLocal157)) {
      storeRoutine16(storeLocal157) &&
        input30.snapshot.directories.delete(storeLocal156.nodeId);
      storeRoutine19(storeLocal157, 4);
      input30.pathCacheByNodeId.delete(storeLocal156.nodeId);
      input30.collapsedDirectoryIds.delete(storeLocal156.nodeId) &&
        (input30.hasCollapsedDirectoryOverrides =
          input30.collapsedDirectoryIds.size > 0);
      input30.expandedDirectoryIds.delete(storeLocal156.nodeId);
      storeRoutine70(input30, storeLocal156.nodeId);
      input30.activeNodeCount--;
      storeLocal145.push(storeLocal156.nodeId);
      continue;
    }
    storeLocal146.push({
      nodeId: storeLocal156.nodeId,
      visitedChildren: true,
    });
    let storeLocal158 = storeRoutine107(input30, storeLocal156.nodeId);
    for (
      let storeLocal551 = storeLocal158.childIds.length - 1;
      storeLocal551 >= 0;
      storeLocal551--
    ) {
      let storeLocal632 = storeLocal158.childIds[storeLocal551];
      storeLocal632 != null &&
        storeLocal146.push({
          nodeId: storeLocal632,
          visitedChildren: false,
        });
    }
  }
  return storeLocal145;
}
function storeRoutine122(input259, input260) {
  let storeLocal487 = input260;
  for (; storeLocal487 != null; ) {
    let storeLocal559 = storeRoutine108(input259, storeLocal487);
    if (
      !storeRoutine16(storeLocal559) ||
      storeRoutine18(storeLocal559, 2) ||
      storeRoutine107(input259, storeLocal487).childIds.length > 0
    )
      return;
    storeRoutine19(storeLocal559, 1);
    storeLocal487 =
      storeLocal559.parentId === storeLocal487 ? null : storeLocal559.parentId;
  }
}
function storeRoutine123(input208, input209) {
  let storeLocal406 = input208.snapshot.rootId;
  for (let storeLocal470 of input209) {
    let storeLocal494 =
      input208.snapshot.segmentTable.idByValue.get(storeLocal470);
    if (storeLocal494 == null) break;
    let storeLocal495 = storeRoutine3(
      input208.snapshot.nodes,
      storeRoutine107(input208, storeLocal406),
    ).get(storeLocal494);
    if (
      storeLocal495 == null ||
      !storeRoutine16(storeRoutine108(input208, storeLocal495))
    )
      break;
    storeLocal406 = storeLocal495;
  }
  return storeLocal406;
}
function storeRoutine124(input189, input190) {
  let storeLocal373 = storeRoutine127(input189, input190);
  if (storeLocal373 == null) return null;
  let storeLocal374 = storeRoutine94(input189, storeLocal373),
    storeLocal375 = storeRoutine108(input189, storeLocal374),
    storeLocal376 =
      storeLocal373 === storeLocal374
        ? null
        : storeRoutine95(input189, storeLocal373).map((item) =>
            storeRoutine101(input189, item),
          );
  return JSON.stringify({
    flattenedSegmentPaths: storeLocal376,
    hasChildren: storeRoutine107(input189, storeLocal374).childIds.length > 0,
    path: storeRoutine101(input189, storeLocal374),
    terminalKind: storeRoutine15(storeLocal375),
  });
}
function storeRoutine125(input427, input428) {
  return storeRoutine126([input427], [input428]);
}
function storeRoutine126(input327, input328) {
  for (
    let storeLocal592 = 0;
    storeLocal592 < input327.length;
    storeLocal592 += 1
  ) {
    let storeLocal649 = input327[storeLocal592],
      storeLocal650 = input328[storeLocal592];
    if (
      storeLocal649 == null ||
      storeLocal650 == null ||
      storeLocal649 !== storeLocal650
    )
      return true;
  }
  return false;
}
function storeRoutine127(input286, input287) {
  let storeLocal509 = input287;
  for (; storeLocal509 != null; ) {
    let storeLocal602 = storeRoutine108(input286, storeLocal509);
    if (!storeRoutine16(storeLocal602) || storeRoutine18(storeLocal602, 2))
      return null;
    if (!storeRoutine61(input286, storeLocal509, storeLocal602))
      return storeLocal509;
    storeLocal509 = storeLocal602.parentId;
  }
  return null;
}
function storeRoutine128(input251, input252) {
  let storeLocal482 = storeRoutine108(input251, input252);
  if (
    (storeRoutine20(
      storeLocal482,
      (input252 === input251.snapshot.rootId
        ? -1
        : storeRoutine14(storeRoutine108(input251, storeLocal482.parentId))) +
        1,
    ),
    !storeRoutine16(storeLocal482))
  )
    return;
  let storeLocal483 = storeRoutine107(input251, input252);
  for (let storeLocal669 of storeLocal483.childIds)
    storeRoutine128(input251, storeLocal669);
}
function storeRoutine129(input288, input289, input290) {
  let storeLocal510 = input290;
  for (; storeLocal510 != null; ) {
    if (storeLocal510 === input289) return true;
    let storeLocal595 = storeRoutine108(input288, storeLocal510);
    if (storeLocal510 === input288.snapshot.rootId) return false;
    storeLocal510 = storeLocal595.parentId;
  }
  return false;
}
function storeRoutine130(
  input273,
  input274,
  input275 = storeRoutine108(input273, input274),
  input276 = false,
) {
  let storeLocal498 = input273.instrumentation;
  if (storeLocal498 == null) {
    storeRoutine132(input273, input274, input275, input276);
    return;
  }
  storeRoutine23(storeLocal498, "store.recomputeNodeCounts", () =>
    storeRoutine132(input273, input274, input275, input276),
  );
}
function storeRoutine131(input174, input175) {
  let storeLocal360 = input175;
  for (; storeLocal360 != null; ) {
    let storeLocal407 = storeRoutine108(input174, storeLocal360),
      storeLocal408 = storeLocal407.subtreeNodeCount,
      storeLocal409 = storeLocal407.visibleSubtreeCount;
    if (
      (storeRoutine130(input174, storeLocal360, storeLocal407),
      storeLocal360 === input174.snapshot.rootId)
    )
      return;
    let storeLocal410 = storeLocal407.subtreeNodeCount - storeLocal408,
      storeLocal411 = storeLocal407.visibleSubtreeCount - storeLocal409,
      storeLocal412 = storeLocal407.parentId;
    (storeLocal410 !== 0 || storeLocal411 !== 0) &&
      storeRoutine8(
        storeRoutine107(input174, storeLocal412),
        storeLocal360,
        storeLocal410,
        storeLocal411,
      );
    storeLocal360 = storeLocal412;
  }
}
function storeRoutine132(input70, input71, input72, input73) {
  if (!storeRoutine16(input72)) {
    input72.subtreeNodeCount = 1;
    input72.visibleSubtreeCount = 1;
    return;
  }
  let storeLocal214 = storeRoutine107(input70, input71);
  if (input73) {
    let storeLocal496 = input70.instrumentation;
    storeLocal496 == null
      ? storeRoutine7(input70.snapshot.nodes, storeLocal214)
      : storeRoutine23(
          storeLocal496,
          "store.recomputeNodeCounts.rebuildChildAggregates",
          () => storeRoutine7(input70.snapshot.nodes, storeLocal214),
        );
  }
  let storeLocal215 = 1 + storeLocal214.totalChildSubtreeNodeCount,
    storeLocal216 = storeLocal214.totalChildVisibleSubtreeCount;
  if (
    ((input72.subtreeNodeCount = storeLocal215), storeRoutine18(input72, 2))
  ) {
    input72.visibleSubtreeCount = storeLocal216;
    return;
  }
  input72.visibleSubtreeCount =
    storeRoutine93(input70, input71) == null
      ? storeRoutine61(input70, input71, input72)
        ? 1 + storeLocal216
        : 1
      : storeLocal216;
}
function storeRoutine133(input389, input390, input391) {
  let storeLocal635 = storeRoutine101(input389, input390);
  return storeLocal635.length === 0 ? input391 : `${storeLocal635}${input391}`;
}
function storeRoutine134(input426) {
  return input426 != null && !storeRoutine18(input426, 4);
}
function storeRoutine135(input368, input369) {
  let storeLocal607 = input368.snapshot.nodes[input369];
  return !storeRoutine134(storeLocal607) ||
    !storeRoutine16(storeLocal607) ||
    storeRoutine18(storeLocal607, 2)
    ? null
    : storeLocal607;
}
function storeRoutine136(input282) {
  let storeLocal507 = 0;
  for (let [storeLocal565, storeLocal566] of input282.pathCacheByNodeId)
    storeLocal566.version === input282.pathCacheVersion &&
      storeRoutine134(input282.snapshot.nodes[storeLocal565]) &&
      (storeLocal507 += 1);
  return storeLocal507;
}
function storeRoutine137(input404) {
  return Math.max(0, input404.valueById.length - 1);
}
function storeRoutine138(input186) {
  return {
    activeNodeCount: input186.activeNodeCount,
    cachedPathEntryCount: storeRoutine136(input186),
    loadInfoEntryCount: input186.directoryLoadInfoById.size,
    segmentCount: storeRoutine137(input186.snapshot.segmentTable),
    totalNodeSlotCount: Math.max(0, input186.snapshot.nodes.length - 1),
  };
}
function storeRoutine139(input22, input23, input24, input25) {
  return {
    activeNodeCountAfter: input25.activeNodeCount,
    activeNodeCountBefore: input24.activeNodeCount,
    cachedPathEntryCountAfter: input25.cachedPathEntryCount,
    cachedPathEntryCountBefore: input24.cachedPathEntryCount,
    idsPreserved: input23,
    loadInfoEntryCountAfter: input25.loadInfoEntryCount,
    loadInfoEntryCountBefore: input24.loadInfoEntryCount,
    mode: input22,
    reclaimedCachedPathEntryCount:
      input24.cachedPathEntryCount - input25.cachedPathEntryCount,
    reclaimedLoadInfoEntryCount:
      input24.loadInfoEntryCount - input25.loadInfoEntryCount,
    reclaimedNodeSlotCount:
      input24.totalNodeSlotCount - input25.totalNodeSlotCount,
    reclaimedSegmentCount: input24.segmentCount - input25.segmentCount,
    segmentCountAfter: input25.segmentCount,
    segmentCountBefore: input24.segmentCount,
    totalNodeSlotCountAfter: input25.totalNodeSlotCount,
    totalNodeSlotCountBefore: input24.totalNodeSlotCount,
  };
}
function storeRoutine140(input212) {
  let storeLocal413 = [],
    storeLocal414 = [];
  for (let storeLocal634 of input212.collapsedDirectoryIds)
    storeRoutine135(input212, storeLocal634) != null &&
      storeLocal413.push(storeRoutine101(input212, storeLocal634));
  for (let storeLocal636 of input212.expandedDirectoryIds)
    storeRoutine135(input212, storeLocal636) != null &&
      storeLocal414.push(storeRoutine101(input212, storeLocal636));
  return {
    collapsedPaths: storeLocal413,
    expandedPaths: storeLocal414,
  };
}
function storeRoutine141(input188) {
  let storeLocal372 = [];
  for (let [storeLocal427, storeLocal428] of input188.directoryLoadInfoById)
    storeRoutine135(input188, storeLocal427) == null ||
      storeRoutine64(input188, storeLocal427) === "loaded" ||
      storeLocal372.push({
        info: {
          activeAttemptId: null,
          errorMessage: storeLocal428.errorMessage,
          nextAttemptId: storeLocal428.nextAttemptId,
          state: storeLocal428.state,
        },
        path: storeRoutine101(input188, storeLocal427),
      });
  return storeLocal372;
}
function storeRoutine142(input160, input161) {
  input160.collapsedDirectoryIds.clear();
  input160.hasCollapsedDirectoryOverrides = false;
  input160.expandedDirectoryIds.clear();
  for (let storeLocal629 of input161.expandedPaths) {
    let storeLocal658 = storeRoutine105(input160, storeLocal629);
    storeLocal658 != null &&
      storeRoutine62(
        input160,
        storeLocal658,
        true,
        storeRoutine108(input160, storeLocal658),
      );
  }
  for (let storeLocal626 of input161.collapsedPaths) {
    let storeLocal659 = storeRoutine105(input160, storeLocal626);
    storeLocal659 != null &&
      storeRoutine62(
        input160,
        storeLocal659,
        false,
        storeRoutine108(input160, storeLocal659),
      );
  }
}
function $t(input168, input169) {
  input168.directoryLoadInfoById.clear();
  for (let storeLocal417 of input169) {
    let storeLocal445 = storeRoutine105(input168, storeLocal417.path);
    storeLocal445 != null &&
      storeRoutine135(input168, storeLocal445) != null &&
      input168.directoryLoadInfoById.set(storeLocal445, {
        activeAttemptId: null,
        errorMessage: storeLocal417.info.errorMessage,
        nextAttemptId: storeLocal417.info.nextAttemptId,
        state: storeLocal417.info.state,
      });
  }
}
function storeRoutine143(input253) {
  input253.pathCacheVersion += 1;
  input253.pathCacheByNodeId.clear();
  input253.pathCacheByNodeId.set(input253.snapshot.rootId, {
    path: "",
    version: input253.pathCacheVersion,
  });
}
function storeRoutine144(input232) {
  let storeLocal455 = input232.snapshot.segmentTable,
    storeLocal456 = _e();
  for (let storeLocal567 of input232.snapshot.nodes)
    if (storeRoutine134(storeLocal567)) {
      if (storeRoutine18(storeLocal567, 2)) {
        storeLocal567.nameId = 0;
        continue;
      }
      storeLocal567.nameId = storeRoutine41(
        storeLocal456,
        storeRoutine42(storeLocal455, storeLocal567.nameId),
      );
    }
  input232.snapshot.segmentTable = storeLocal456;
}
function storeRoutine145(input100) {
  for (let [storeLocal274, storeLocal275] of input100.snapshot.directories) {
    let storeLocal302 = input100.snapshot.nodes[storeLocal274];
    if (!storeRoutine134(storeLocal302) || !storeRoutine16(storeLocal302)) {
      input100.snapshot.directories.delete(storeLocal274);
      continue;
    }
    let storeLocal303 = storeLocal275.childIds.filter((item) => {
      let storeLocal644 = input100.snapshot.nodes[item];
      return (
        storeRoutine134(storeLocal644) &&
        storeLocal644.parentId === storeLocal274
      );
    });
    storeLocal275.childIds = storeLocal303;
    storeLocal275.childIdByNameId = new Map(
      storeLocal303.map((item) => [
        storeRoutine108(input100, item).nameId,
        item,
      ]),
    );
    storeLocal275.childPositionById = new Map(
      storeLocal303.map((item, index) => [item, index]),
    );
    storeRoutine7(input100.snapshot.nodes, storeLocal275);
  }
}
function storeRoutine146(input250) {
  let storeLocal481 = input250.snapshot.nodes.length - 1;
  for (; storeLocal481 > input250.snapshot.rootId; ) {
    let storeLocal654 = input250.snapshot.nodes[storeLocal481];
    if (storeRoutine134(storeLocal654)) break;
    --storeLocal481;
  }
  input250.snapshot.nodes.length = storeLocal481 + 1;
}
function storeRoutine147(input36) {
  let storeLocal154 = storeRoutine140(input36),
    storeLocal155 = storeRoutine141(input36);
  storeRoutine23(
    input36.instrumentation,
    "store.cleanup.stable.clearPathCaches",
    () => storeRoutine143(input36),
  );
  storeRoutine23(
    input36.instrumentation,
    "store.cleanup.stable.rebuildSegmentTable",
    () => storeRoutine144(input36),
  );
  storeRoutine23(
    input36.instrumentation,
    "store.cleanup.stable.rebuildDirectoryIndexes",
    () => storeRoutine145(input36),
  );
  storeRoutine23(
    input36.instrumentation,
    "store.cleanup.stable.trimTrailingRemovedNodeSlots",
    () => storeRoutine146(input36),
  );
  storeRoutine23(
    input36.instrumentation,
    "store.cleanup.stable.restoreExpansionOverrides",
    () => storeRoutine142(input36, storeLocal154),
  );
  storeRoutine23(
    input36.instrumentation,
    "store.cleanup.stable.restoreDirectoryLoadInfos",
    () => $t(input36, storeLocal155),
  );
  storeRoutine23(
    input36.instrumentation,
    "store.cleanup.stable.recomputeCounts",
    () => storeRoutine103(input36, input36.snapshot.rootId),
  );
}
function on(input29) {
  let storeLocal140 = storeRoutine140(input29),
    storeLocal141 = storeRoutine141(input29),
    storeLocal142 = storeRoutine23(
      input29.instrumentation,
      "store.cleanup.aggressive.listPaths",
      () => storeRoutine96(input29),
    ),
    storeLocal143 = storeRoutine21(
      {
        ...input29.snapshot.options,
      },
      input29.instrumentation,
    ),
    storeLocal144 = storeRoutine23(
      input29.instrumentation,
      "store.cleanup.aggressive.rebuildSnapshot",
      () => {
        let storeLocal647 = new storeLocal11(storeLocal143);
        return (
          storeLocal647.appendPaths(storeLocal142),
          storeLocal647.finish()
        );
      },
    );
  input29.snapshot = storeLocal144;
  input29.activeNodeCount = storeLocal144.nodes.length - 1;
  input29.pathCacheByNodeId = new Map([
    [
      storeLocal144.rootId,
      {
        path: "",
        version: 0,
      },
    ],
  ]);
  input29.pathCacheVersion = 0;
  storeRoutine23(
    input29.instrumentation,
    "store.cleanup.aggressive.restoreExpansionOverrides",
    () => storeRoutine142(input29, storeLocal140),
  );
  storeRoutine23(
    input29.instrumentation,
    "store.cleanup.aggressive.restoreDirectoryLoadInfos",
    () => $t(input29, storeLocal141),
  );
  storeRoutine23(
    input29.instrumentation,
    "store.cleanup.aggressive.recomputeCounts",
    () => storeRoutine103(input29, input29.snapshot.rootId),
  );
}
function storeRoutine148(input291) {
  for (let storeLocal560 of input291.directoryLoadInfoById.values())
    if (
      storeLocal560.state === "loading" &&
      storeLocal560.activeAttemptId != null
    )
      return true;
  return false;
}
function storeRoutine149(input217, input218) {
  let storeLocal421 = storeRoutine138(input217);
  input218 === "stable"
    ? storeRoutine23(input217.instrumentation, "store.cleanup.stable", () =>
        storeRoutine147(input217),
      )
    : storeRoutine23(input217.instrumentation, "store.cleanup.aggressive", () =>
        on(input217),
      );
  let storeLocal422 = storeRoutine138(input217);
  return storeRoutine139(
    input218,
    input218 === "stable",
    storeLocal421,
    storeLocal422,
  );
}
function storeRoutine150(input277, input278) {
  let storeLocal499 = input278 + 2;
  if (storeLocal499 <= input277.length) return input277;
  let storeLocal500 = input277.length;
  for (; storeLocal500 < storeLocal499; ) storeLocal500 *= 2;
  let storeLocal501 = new Int32Array(storeLocal500);
  return (storeLocal501.fill(-1), storeLocal501.set(input277), storeLocal501);
}
function storeRoutine151(input394) {
  return storeRoutine108(input394, input394.snapshot.rootId)
    .visibleSubtreeCount;
}
function storeRoutine152(input321, input322, input323, input324) {
  let storeLocal536 = storeRoutine108(input321, input322.terminalNodeId),
    storeLocal537 = Math.max(1, storeLocal536.visibleSubtreeCount);
  return Math.min(input324 - 1, input323 + storeLocal537 - 1);
}
function storeRoutine153(input244, input245, input246, input247) {
  return {
    ancestorPaths: input247,
    index: input245.index,
    posInSet: input245.posInSet,
    row: $(input244, input245.cursor),
    setSize: input245.setSize,
    subtreeEndIndex: storeRoutine152(
      input244,
      input245.cursor,
      input245.index,
      input246,
    ),
  };
}
function storeRoutine154(
  input162,
  input163,
  input164,
  input165,
  input166,
  input167,
) {
  let storeLocal347 = storeRoutine107(input162, input163),
    { childIndex, childVisibleIndex, localVisibleIndex } = storeRoutine9(
      input162.snapshot.nodes,
      storeLocal347,
      input164,
    ),
    storeLocal348 = storeLocal347.childIds[childIndex];
  if (storeLocal348 == null)
    throw Error(`Visible index ${String(input164)} is out of range`);
  return storeRoutine155(
    input162,
    storeLocal348,
    localVisibleIndex,
    input165 + childVisibleIndex,
    input166 + 1,
    childIndex,
    storeLocal347.childIds.length,
    input167,
  );
}
function storeRoutine155(
  input37,
  input38,
  input39,
  input40,
  input41,
  input42,
  input43,
  input44,
) {
  if (!storeRoutine16(storeRoutine108(input37, input38))) {
    if (input39 === 0)
      return {
        ancestors: input44,
        cursor: {
          headNodeId: input38,
          terminalNodeId: input38,
          visibleDepth: input41,
        },
        index: input40,
        posInSet: input42,
        setSize: input43,
      };
    throw Error(`Visible index ${String(input39)} is out of range for file`);
  }
  let storeLocal159 = storeRoutine165(input37, input38, input41);
  if (input39 === 0)
    return {
      ancestors: input44,
      cursor: storeLocal159,
      index: input40,
      posInSet: input42,
      setSize: input43,
    };
  let storeLocal160 = storeRoutine108(input37, storeLocal159.terminalNodeId);
  if (
    !storeRoutine16(storeLocal160) ||
    !storeRoutine61(input37, storeLocal159.terminalNodeId, storeLocal160)
  )
    throw Error(
      `Visible index ${String(input39)} is out of range for collapsed directory`,
    );
  return storeRoutine154(
    input37,
    storeLocal159.terminalNodeId,
    input39 - 1,
    input40 + 1,
    storeLocal159.visibleDepth,
    [
      ...input44,
      {
        cursor: storeLocal159,
        index: input40,
        posInSet: input42,
        setSize: input43,
      },
    ],
  );
}
function storeRoutine156(input68, input69) {
  let storeLocal210 = storeRoutine151(input68);
  if (input69 < 0 || input69 >= storeLocal210) return null;
  let storeLocal211 = storeRoutine154(
      input68,
      input68.snapshot.rootId,
      input69,
      0,
      -1,
      [],
    ),
    storeLocal212 = storeLocal211.ancestors.map((item) =>
      storeRoutine101(input68, item.cursor.terminalNodeId),
    ),
    storeLocal213 = null;
  return {
    ancestorPaths: storeLocal212,
    get ancestorRows() {
      if (storeLocal213 != null) return storeLocal213;
      let storeLocal488 = [],
        storeLocal489 = [];
      for (let storeLocal603 of storeLocal211.ancestors) {
        let storeLocal651 = storeRoutine153(
          input68,
          storeLocal603,
          storeLocal210,
          [...storeLocal489],
        );
        storeLocal488.push(storeLocal651);
        storeLocal489.push(storeLocal651.row.path);
      }
      return ((storeLocal213 = storeLocal488), storeLocal213);
    },
    index: storeLocal211.index,
    posInSet: storeLocal211.posInSet,
    row: $(input68, storeLocal211.cursor),
    setSize: storeLocal211.setSize,
    subtreeEndIndex: storeRoutine152(
      input68,
      storeLocal211.cursor,
      storeLocal211.index,
      storeLocal210,
    ),
  };
}
function storeRoutine157(input26, input27, input28) {
  let storeLocal132 = input26.instrumentation,
    storeLocal133 = storeRoutine151(input26);
  if (storeLocal133 <= 0 || input28 < input27) return [];
  let storeLocal134 = Math.max(0, Math.min(input27, storeLocal133 - 1)),
    storeLocal135 = Math.max(
      storeLocal134,
      Math.min(input28, storeLocal133 - 1),
    );
  if (storeLocal132 == null) {
    if (storeLocal134 === 0) return storeRoutine170(input26, storeLocal135 + 1);
    let storeLocal522 = [],
      storeLocal523 = storeRoutine162(input26, storeLocal134);
    for (
      let storeLocal638 = storeLocal134;
      storeLocal638 <= storeLocal135 && storeLocal523 != null;
      storeLocal638++
    ) {
      let storeLocal667 = $(input26, storeLocal523);
      storeLocal522.push(storeLocal667);
      storeLocal523 = storeRoutine167(input26, storeLocal523);
    }
    return storeLocal522;
  }
  let storeLocal136 = [],
    storeLocal137 = 0,
    storeLocal138 = 0,
    storeLocal139 = storeRoutine23(
      storeLocal132,
      "store.getVisibleSlice.selectFirstRow",
      () => storeRoutine162(input26, storeLocal134),
    );
  for (
    let storeLocal391 = storeLocal134;
    storeLocal391 <= storeLocal135 && storeLocal139 != null;
    storeLocal391++
  ) {
    let storeLocal444 = storeRoutine23(
      storeLocal132,
      "store.getVisibleSlice.materializeRow",
      () => $(input26, storeLocal139),
    );
    storeLocal136.push(storeLocal444);
    storeLocal444.isFlattened &&
      (storeLocal137++,
      (storeLocal138 += storeLocal444.flattenedSegments?.length ?? 0));
    storeLocal139 = storeRoutine23(
      storeLocal132,
      "store.getVisibleSlice.advanceCursor",
      () => storeRoutine167(input26, storeLocal139),
    );
  }
  return (
    storeRoutine24(
      storeLocal132,
      "workload.visibleRowsRead",
      storeLocal136.length,
    ),
    storeRoutine24(storeLocal132, "workload.flattenedRowsRead", storeLocal137),
    storeRoutine24(
      storeLocal132,
      "workload.flattenedSegmentsRead",
      storeLocal138,
    ),
    storeLocal136
  );
}
function _n(input307, input308 = storeRoutine151(input307)) {
  let storeLocal524 = input307.instrumentation;
  return storeLocal524 == null
    ? storeRoutine169(input307, input308)
    : storeRoutine23(storeLocal524, "store.getVisibleTreeProjection", () =>
        storeRoutine169(input307, input308),
      );
}
function storeRoutine158(input440) {
  return storeRoutine168(_n(input440));
}
function storeRoutine159(input91, input92) {
  let storeLocal252 = storeRoutine105(input91, input92);
  if (
    storeLocal252 == null ||
    storeLocal252 === input91.snapshot.rootId ||
    (storeRoutine16(storeRoutine108(input91, storeLocal252)) &&
      storeRoutine94(input91, storeLocal252) !== storeLocal252)
  )
    return null;
  let storeLocal253 = 0,
    storeLocal254 = storeLocal252,
    { nodes, rootId } = input91.snapshot;
  for (; storeLocal254 !== rootId; ) {
    let storeLocal380 = storeRoutine108(input91, storeLocal254).parentId,
      storeLocal381 = storeRoutine107(input91, storeLocal380),
      storeLocal382 = storeRoutine4(storeLocal381).get(storeLocal254);
    if (storeLocal382 == null)
      throw Error(
        `Child ${String(storeLocal254)} was not found in its parent index`,
      );
    if (
      ((storeLocal253 += storeRoutine10(nodes, storeLocal381, storeLocal382)),
      storeLocal380 !== rootId)
    ) {
      let storeLocal610 = storeRoutine108(input91, storeLocal380),
        storeLocal611 = storeRoutine93(input91, storeLocal380);
      if (
        !storeRoutine61(input91, storeLocal380, storeLocal610) &&
        storeLocal611 !== storeLocal254
      )
        return null;
      storeRoutine94(input91, storeLocal380) === storeLocal380 &&
        (storeLocal253 += 1);
    }
    storeLocal254 = storeLocal380;
  }
  return storeLocal253;
}
function storeRoutine160(input147, input148) {
  let storeLocal328 = storeRoutine105(input147, input148);
  if (storeLocal328 == null) throw Error(`Path does not exist: "${input148}"`);
  let storeLocal329 = storeRoutine108(input147, storeLocal328);
  if (!storeRoutine16(storeLocal329))
    throw Error(`Path is not a directory: "${input148}"`);
  return storeRoutine61(input147, storeLocal328, storeLocal329)
    ? null
    : (storeRoutine62(input147, storeLocal328, true, storeLocal329),
      storeRoutine102(input147, storeLocal328),
      storeRoutine75({
        affectedAncestorIds: storeRoutine104(input147, storeLocal328),
        affectedNodeIds: [storeLocal328],
        path: input148,
        projectionChanged: true,
      }));
}
function storeRoutine161(input149, input150) {
  let storeLocal330 = storeRoutine105(input149, input150);
  if (storeLocal330 == null) throw Error(`Path does not exist: "${input150}"`);
  let storeLocal331 = storeRoutine108(input149, storeLocal330);
  if (!storeRoutine16(storeLocal331))
    throw Error(`Path is not a directory: "${input150}"`);
  return storeRoutine61(input149, storeLocal330, storeLocal331)
    ? (storeRoutine62(input149, storeLocal330, false, storeLocal331),
      storeRoutine102(input149, storeLocal330),
      storeRoutine76({
        affectedAncestorIds: storeRoutine104(input149, storeLocal330),
        affectedNodeIds: [storeLocal330],
        path: input150,
        projectionChanged: true,
      }))
    : null;
}
function storeRoutine162(input378, input379) {
  return input379 < 0 || input379 >= storeRoutine151(input378)
    ? null
    : storeRoutine163(input378, input378.snapshot.rootId, input379, -1);
}
function storeRoutine163(input127, input128, input129, input130) {
  let storeLocal306 = storeRoutine107(input127, input128),
    storeLocal307 = input127.instrumentation,
    { childIndex, localVisibleIndex } =
      storeLocal307 == null
        ? storeRoutine9(input127.snapshot.nodes, storeLocal306, input129)
        : storeRoutine23(
            storeLocal307,
            "store.getVisibleSlice.selectChildIndex",
            () =>
              storeRoutine9(input127.snapshot.nodes, storeLocal306, input129),
          ),
    storeLocal308 = storeLocal306.childIds[childIndex];
  if (storeLocal308 != null)
    return storeRoutine164(
      input127,
      storeLocal308,
      localVisibleIndex,
      input130 + 1,
    );
  throw Error(`Visible index ${String(input129)} is out of range`);
}
function storeRoutine164(input87, input88, input89, input90) {
  if (!storeRoutine16(storeRoutine108(input87, input88))) {
    if (input89 === 0)
      return {
        headNodeId: input88,
        terminalNodeId: input88,
        visibleDepth: input90,
      };
    throw Error(`Visible index ${String(input89)} is out of range for file`);
  }
  let storeLocal250 = storeRoutine165(input87, input88, input90);
  if (input89 === 0) return storeLocal250;
  let storeLocal251 = storeRoutine108(input87, storeLocal250.terminalNodeId);
  if (
    !storeRoutine16(storeLocal251) ||
    !storeRoutine61(input87, storeLocal250.terminalNodeId, storeLocal251)
  )
    throw Error(
      `Visible index ${String(input89)} is out of range for collapsed directory`,
    );
  return storeRoutine163(
    input87,
    storeLocal250.terminalNodeId,
    input89 - 1,
    storeLocal250.visibleDepth,
  );
}
function storeRoutine165(input133, input134, input135) {
  return storeRoutine16(storeRoutine108(input133, input134))
    ? input133.instrumentation == null
      ? {
          headNodeId: input134,
          terminalNodeId: storeRoutine94(input133, input134),
          visibleDepth: input135,
        }
      : {
          headNodeId: input134,
          terminalNodeId: storeRoutine23(
            input133.instrumentation,
            "store.getVisibleSlice.flatten.resolveTerminalDirectory",
            () => storeRoutine94(input133, input134),
          ),
          visibleDepth: input135,
        }
    : {
        headNodeId: input134,
        terminalNodeId: input134,
        visibleDepth: input135,
      };
}
function storeRoutine166(input331, input332) {
  let storeLocal546 = storeRoutine108(input331, input332);
  if (!storeRoutine16(storeLocal546)) return true;
  let storeLocal547 = storeLocal546.parentId;
  return storeLocal547 === input331.snapshot.rootId
    ? true
    : storeRoutine93(input331, storeLocal547) !== input332;
}
function storeRoutine167(input49, input50) {
  let storeLocal164 = storeRoutine108(input49, input50.terminalNodeId);
  if (storeRoutine16(storeLocal164)) {
    let storeLocal484 = storeRoutine107(input49, input50.terminalNodeId);
    if (
      storeRoutine61(input49, input50.terminalNodeId, storeLocal164) &&
      storeLocal484.childIds.length > 0
    ) {
      let storeLocal633 = storeLocal484.childIds[0];
      return storeLocal633 == null
        ? null
        : storeRoutine164(input49, storeLocal633, 0, input50.visibleDepth + 1);
    }
  }
  let storeLocal165 = input50.terminalNodeId,
    storeLocal166 = input50.visibleDepth;
  for (;;) {
    let storeLocal355 = storeRoutine108(input49, storeLocal165);
    if (storeLocal165 === input49.snapshot.rootId) return null;
    let storeLocal356 = storeLocal355.parentId,
      storeLocal357 = storeRoutine107(input49, storeLocal356),
      storeLocal358 = storeRoutine4(storeLocal357).get(storeLocal165) ?? -1;
    if (storeLocal358 < 0)
      throw Error(
        `Child ${String(storeLocal165)} was not found in its parent index`,
      );
    let storeLocal359 = storeLocal357.childIds[storeLocal358 + 1] ?? null;
    if (storeLocal359 != null)
      return storeRoutine164(input49, storeLocal359, 0, storeLocal166);
    storeRoutine166(input49, storeLocal165) && storeLocal166--;
    storeLocal165 = storeLocal356;
  }
}
function storeRoutine168(input114) {
  let storeLocal281 = input114.paths.length,
    storeLocal282 = Array(storeLocal281);
  for (
    let storeLocal443 = 0;
    storeLocal443 < storeLocal281;
    storeLocal443 += 1
  ) {
    let storeLocal463 = input114.getParentIndex(storeLocal443);
    storeLocal282[storeLocal443] = {
      index: storeLocal443,
      parentPath:
        storeLocal463 >= 0 ? (input114.paths[storeLocal463] ?? null) : null,
      path: input114.paths[storeLocal443] ?? "",
      posInSet: input114.posInSetByIndex[storeLocal443] ?? 0,
      setSize: input114.setSizeByIndex[storeLocal443] ?? 0,
    };
  }
  return {
    getParentIndex: input114.getParentIndex,
    rows: storeLocal282,
    get visibleIndexByPath() {
      return input114.visibleIndexByPath;
    },
  };
}
function storeRoutine169(input8, input9) {
  let storeLocal69 = Array(input9),
    storeLocal70 = new Int32Array(input9),
    storeLocal71 = new Int32Array(input9),
    storeLocal72 = new Int32Array(input9),
    storeLocal73 = new Int32Array(64);
  storeLocal73.fill(-1);
  let storeLocal74 = 0,
    { nodes, directories, segmentTable } = input8.snapshot,
    storeLocal75 = [[directories.get(input8.snapshot.rootId), 0, -1, ""]],
    storeLocal76 = input8.snapshot.options.flattenEmptyDirectories,
    storeLocal77 = input8.pathCacheByNodeId,
    storeLocal78 = input8.pathCacheVersion,
    storeLocal79 = segmentTable.valueById;
  for (; storeLocal75.length > 0 && storeLocal74 < input9; ) {
    let storeLocal236 = storeLocal75[storeLocal75.length - 1],
      storeLocal237 = storeLocal236[0];
    if (storeLocal236[1] >= storeLocal237.childIds.length) {
      storeLocal75.pop();
      continue;
    }
    let storeLocal238 = storeLocal236[1],
      storeLocal239 = storeLocal237.childIds[storeLocal236[1]++],
      storeLocal240 = nodes[storeLocal239],
      storeLocal241 = storeLocal236[2] + 1,
      storeLocal242 = storeLocal236[3];
    storeLocal73 = storeRoutine150(storeLocal73, storeLocal241);
    let storeLocal243,
      storeLocal244 = storeLocal239;
    if (storeRoutine16(storeLocal240)) {
      storeLocal244 = storeLocal76
        ? storeRoutine94(input8, storeLocal239)
        : storeLocal239;
      storeLocal243 =
        storeLocal244 === storeLocal239
          ? `${storeLocal242}${storeLocal79[storeLocal240.nameId]}/`
          : storeRoutine101(input8, storeLocal244);
    } else {
      let storeLocal630 = storeLocal77.get(storeLocal239);
      storeLocal243 =
        storeLocal630 != null && storeLocal630.version === storeLocal78
          ? storeLocal630.path
          : `${storeLocal242}${storeLocal79[storeLocal240.nameId]}`;
    }
    storeLocal70[storeLocal74] = storeLocal73[storeLocal241];
    storeLocal69[storeLocal74] = storeLocal243;
    storeLocal71[storeLocal74] = storeLocal238;
    storeLocal72[storeLocal74] = storeLocal237.childIds.length;
    storeLocal73[storeLocal241 + 1] = storeLocal74;
    storeLocal74 += 1;
    let storeLocal245 = nodes[storeLocal244];
    storeLocal245 != null &&
      storeRoutine16(storeLocal245) &&
      storeRoutine61(input8, storeLocal244, storeLocal245) &&
      storeLocal75.push([
        directories.get(storeLocal244),
        0,
        storeLocal241,
        storeLocal243,
      ]);
  }
  storeLocal74 < input9 && (storeLocal69.length = storeLocal74);
  let storeLocal80 = storeLocal70.subarray(0, storeLocal74),
    storeLocal81 = storeLocal71.subarray(0, storeLocal74),
    storeLocal82 = storeLocal72.subarray(0, storeLocal74),
    storeLocal83 = null;
  return {
    getParentIndex(input413) {
      return input413 < 0 || input413 >= storeLocal74
        ? -1
        : (storeLocal80[input413] ?? -1);
    },
    paths: storeLocal69,
    posInSetByIndex: storeLocal81,
    setSizeByIndex: storeLocal82,
    get visibleIndexByPath() {
      if (storeLocal83 == null) {
        storeLocal83 = new Map();
        for (
          let storeLocal663 = 0;
          storeLocal663 < storeLocal74;
          storeLocal663 += 1
        )
          storeLocal83.set(storeLocal69[storeLocal663] ?? "", storeLocal663);
      }
      return storeLocal83;
    },
  };
}
function storeRoutine170(input20, input21) {
  let storeLocal125 = Array(input21),
    storeLocal126 = 0,
    { nodes, directories, segmentTable } = input20.snapshot,
    storeLocal127 = [[directories.get(input20.snapshot.rootId), 0, -1]],
    storeLocal128 = segmentTable.valueById,
    storeLocal129 = input20.snapshot.options.flattenEmptyDirectories,
    storeLocal130 = input20.pathCacheByNodeId,
    storeLocal131 = input20.pathCacheVersion;
  for (; storeLocal127.length > 0 && storeLocal126 < input21; ) {
    let storeLocal179 = storeLocal127[storeLocal127.length - 1],
      storeLocal180 = storeLocal179[0];
    if (storeLocal179[1] >= storeLocal180.childIds.length) {
      storeLocal127.pop();
      continue;
    }
    let storeLocal181 = storeLocal180.childIds[storeLocal179[1]++],
      storeLocal182 = nodes[storeLocal181],
      storeLocal183 = storeLocal179[2] + 1;
    if (!storeRoutine16(storeLocal182)) {
      let storeLocal386 = storeLocal130.get(storeLocal181);
      storeLocal125[storeLocal126++] = {
        depth: storeLocal183,
        flattenedSegments: undefined,
        hasChildren: false,
        id: storeLocal181,
        isExpanded: false,
        isFlattened: false,
        isLoading: false,
        kind: "file",
        loadState: undefined,
        name: storeLocal128[storeLocal182.nameId],
        path:
          storeLocal386 != null && storeLocal386.version === storeLocal131
            ? storeLocal386.path
            : storeRoutine101(input20, storeLocal181),
      };
      continue;
    }
    let storeLocal184 = storeLocal129
        ? storeRoutine94(input20, storeLocal181)
        : storeLocal181,
      storeLocal185 = {
        headNodeId: storeLocal181,
        terminalNodeId: storeLocal184,
        visibleDepth: storeLocal183,
      };
    storeLocal125[storeLocal126++] = $(input20, storeLocal185);
    let storeLocal186 = nodes[storeLocal184];
    storeLocal186 != null &&
      storeRoutine16(storeLocal186) &&
      storeRoutine61(input20, storeLocal184, storeLocal186) &&
      storeLocal127.push([directories.get(storeLocal184), 0, storeLocal183]);
  }
  return (
    storeLocal126 < input21 && (storeLocal125.length = storeLocal126),
    storeLocal125
  );
}
function $(input16, input17) {
  let storeLocal112 = storeRoutine108(input16, input17.terminalNodeId),
    storeLocal113 = storeRoutine16(storeLocal112)
      ? storeRoutine171(input16, input17)
      : null,
    storeLocal114 = storeRoutine101(input16, input17.terminalNodeId),
    storeLocal115 = storeRoutine42(
      input16.snapshot.segmentTable,
      storeLocal112.nameId,
    ),
    storeLocal116 =
      storeRoutine16(storeLocal112) &&
      storeRoutine107(input16, input17.terminalNodeId).childIds.length > 0,
    storeLocal117 = input17.headNodeId !== input17.terminalNodeId,
    storeLocal118 = input16.instrumentation,
    storeLocal119 = storeLocal117
      ? storeLocal118 == null
        ? storeRoutine95(input16, input17.headNodeId).map((item) => {
            let storeLocal525 = storeRoutine108(input16, item);
            return {
              isTerminal: item === input17.terminalNodeId,
              name: storeRoutine42(
                input16.snapshot.segmentTable,
                storeLocal525.nameId,
              ),
              nodeId: item,
              path: storeRoutine101(input16, item),
            };
          })
        : storeRoutine23(
            storeLocal118,
            "store.getVisibleSlice.flatten.collectSegments",
            () =>
              storeRoutine95(input16, input17.headNodeId).map((item) => {
                let storeLocal526 = storeRoutine108(input16, item);
                return {
                  isTerminal: item === input17.terminalNodeId,
                  name: storeRoutine42(
                    input16.snapshot.segmentTable,
                    storeLocal526.nameId,
                  ),
                  nodeId: item,
                  path: storeRoutine101(input16, item),
                };
              }),
          )
      : undefined;
  return {
    depth: input17.visibleDepth,
    flattenedSegments: storeLocal119,
    hasChildren: storeLocal116,
    id: input17.terminalNodeId,
    isExpanded:
      storeRoutine16(storeLocal112) &&
      storeRoutine61(input16, input17.terminalNodeId, storeLocal112),
    isFlattened: storeLocal117,
    isLoading: storeLocal113 === "loading",
    kind: storeRoutine16(storeLocal112) ? "directory" : "file",
    loadState:
      storeLocal113 == null || storeLocal113 === "loaded"
        ? undefined
        : storeLocal113,
    name: storeLocal115,
    path: storeLocal114,
  };
}
function storeRoutine171(input155, input156) {
  if (input156.headNodeId === input156.terminalNodeId)
    return storeRoutine64(input155, input156.terminalNodeId);
  let storeLocal337 = storeRoutine95(input155, input156.headNodeId),
    storeLocal338 = false,
    storeLocal339 = false;
  for (let storeLocal533 of storeLocal337) {
    let storeLocal561 = storeRoutine64(input155, storeLocal533);
    if (storeLocal561 === "loading") return "loading";
    if (storeLocal561 === "error") {
      storeLocal339 = true;
      continue;
    }
    storeLocal561 === "unloaded" && (storeLocal338 = true);
  }
  return storeLocal339 ? "error" : storeLocal338 ? "unloaded" : "loaded";
}
function storeRoutine172(input10) {
  let { directories, nodes, options, rootId, presortedDirectoryNodeIds } =
      input10.snapshot,
    storeLocal92 = options.flattenEmptyDirectories === true,
    storeLocal93 = (input57) => {
      let storeLocal187 = nodes[input57];
      if (storeLocal187 == null || !storeRoutine16(storeLocal187)) return;
      let storeLocal188 = directories.get(input57);
      if (storeLocal188 == null)
        throw Error(
          `Unknown directory child index for node ${String(input57)}`,
        );
      let storeLocal189 = storeLocal188.childIds,
        storeLocal190 = storeLocal189.length,
        storeLocal191 = 0,
        storeLocal192 = 0;
      for (
        let storeLocal542 = 0;
        storeLocal542 < storeLocal190;
        storeLocal542++
      ) {
        let storeLocal582 = storeLocal189[storeLocal542];
        if (storeLocal582 == null) continue;
        let storeLocal583 = nodes[storeLocal582];
        storeLocal191 += storeLocal583.subtreeNodeCount;
        storeLocal192 += storeLocal583.visibleSubtreeCount;
      }
      storeLocal188.totalChildSubtreeNodeCount = storeLocal191;
      storeLocal188.totalChildVisibleSubtreeCount = storeLocal192;
      storeLocal190 >= 128 && storeRoutine11(nodes, storeLocal188);
      storeLocal187.subtreeNodeCount = 1 + storeLocal191;
      let storeLocal193;
      if (storeLocal92 && storeLocal190 === 1) {
        let storeLocal665 = nodes[storeLocal189[0]];
        storeLocal193 =
          storeLocal665 != null && storeRoutine16(storeLocal665)
            ? storeLocal192
            : 1 + storeLocal192;
      } else storeLocal193 = 1 + storeLocal192;
      storeLocal187.visibleSubtreeCount = storeLocal193;
    };
  if (presortedDirectoryNodeIds != null)
    for (
      let storeLocal664 = presortedDirectoryNodeIds.length - 1;
      storeLocal664 >= 0;
      storeLocal664--
    )
      storeLocal93(presortedDirectoryNodeIds[storeLocal664]);
  else
    for (
      let storeLocal666 = nodes.length - 1;
      storeLocal666 >= 1;
      storeLocal666--
    )
      storeLocal93(storeLocal666);
  let storeLocal94 = nodes[rootId],
    storeLocal95 = directories.get(rootId);
  if (storeLocal94 == null || storeLocal95 == null) return;
  let storeLocal96 = storeLocal95.childIds,
    storeLocal97 = 0,
    storeLocal98 = 0;
  for (
    let storeLocal532 = 0;
    storeLocal532 < storeLocal96.length;
    storeLocal532++
  ) {
    let storeLocal584 = storeLocal96[storeLocal532];
    if (storeLocal584 == null) continue;
    let storeLocal585 = nodes[storeLocal584];
    storeLocal97 += storeLocal585.subtreeNodeCount;
    storeLocal98 += storeLocal585.visibleSubtreeCount;
  }
  storeLocal95.totalChildSubtreeNodeCount = storeLocal97;
  storeLocal95.totalChildVisibleSubtreeCount = storeLocal98;
  storeRoutine11(nodes, storeLocal95);
  storeLocal94.subtreeNodeCount = 1 + storeLocal97;
  storeLocal94.visibleSubtreeCount = storeLocal98;
}
function storeRoutine173(input316) {
  return (
    input316.initialExpansion === "open" &&
    (input316.initialExpandedPaths == null ||
      input316.initialExpandedPaths.length === 0)
  );
}
export const Store = class PathTreeStore {
  #state;
  constructor(input7 = {}) {
    let storeLocal55 = storeRoutine22(input7),
      storeLocal56 = storeRoutine23(
        storeLocal55,
        "store.builder.create",
        () => new storeLocal11(input7),
      );
    if (input7.preparedInput != null) {
      let storeLocal512 = storeRoutine54(input7.preparedInput);
      storeLocal512 == null
        ? storeLocal56.appendPreparedPaths(
            storeRoutine53(input7.preparedInput),
            false,
          )
        : storeLocal56.appendPresortedPaths(
            storeLocal512,
            storeRoutine55(input7.preparedInput),
          );
    } else {
      let storeLocal518 = input7.paths ?? [];
      input7.presorted === true
        ? storeLocal56.appendPaths(storeLocal518)
        : storeLocal56.appendPreparedPaths(
            storeRoutine23(storeLocal55, "store.preparePathEntries", () =>
              storeRoutine56(storeLocal518, input7),
            ),
          );
    }
    let storeLocal57 = storeRoutine23(
        storeLocal55,
        "store.builder.finish",
        () =>
          storeLocal56.finish({
            skipSubtreeCountPass: true,
          }),
      ),
      storeLocal58 = storeRoutine23(
        storeLocal55,
        "store.state.detectAllDirectoriesExpanded",
        () =>
          (input7.initialExpansion ?? "closed") === "closed" &&
          storeLocal56.didMatchAllInitialExpandedPaths(),
      );
    this.#state = storeRoutine23(storeLocal55, "store.state.create", () =>
      storeRoutine57(
        storeLocal57,
        storeLocal58 ? "open" : (input7.initialExpansion ?? "closed"),
        storeLocal55,
      ),
    );
    storeLocal58 && (this.#state.collapseNewDirectoriesByDefault = true);
    let storeLocal59 = storeLocal58
      ? this.#state.snapshot.directories.size - 1
      : storeRoutine23(
          storeLocal55,
          "store.state.initializeExpandedPaths",
          () => this.initializeExpandedPaths(input7.initialExpandedPaths),
        );
    storeLocal58 ||
    storeRoutine173(input7) ||
    ((input7.initialExpansion ?? "closed") === "closed" &&
      storeLocal59 === this.#state.snapshot.directories.size - 1) ||
    ((input7.initialExpandedPaths?.length ?? 0) > 0 &&
      storeRoutine23(
        storeLocal55,
        "store.state.checkAllDirectoriesExpanded",
        () => this.hasAllDirectoriesExpanded(),
      ))
      ? storeRoutine23(
          storeLocal55,
          "store.state.initializeOpenVisibleCounts",
          () => storeRoutine172(this.#state),
        )
      : storeRoutine23(storeLocal55, "store.state.recomputeCounts", () =>
          storeRoutine103(this.#state, this.#state.snapshot.rootId),
        );
  }
  static preparePaths(input417, input418 = {}) {
    return storeRoutine50(input417, input418);
  }
  static prepareInput(input419, input420 = {}) {
    return storeRoutine51(input419, input420);
  }
  static preparePresortedInput(input414) {
    return storeRoutine52(input414);
  }
  list(input371) {
    return storeRoutine23(this.#state.instrumentation, "store.list", () =>
      storeRoutine96(this.#state, input371),
    );
  }
  add(input335) {
    storeRoutine23(this.#state.instrumentation, "store.add", () => {
      let storeLocal642 = storeRoutine151(this.#state);
      storeRoutine84(
        this.#state,
        storeRoutine82(
          this.#state,
          storeLocal642,
          storeRoutine97(this.#state, input335),
        ),
      );
    });
  }
  remove(input301, input302 = {}) {
    storeRoutine23(this.#state.instrumentation, "store.remove", () => {
      let storeLocal641 = storeRoutine151(this.#state);
      storeRoutine84(
        this.#state,
        storeRoutine82(
          this.#state,
          storeLocal641,
          storeRoutine98(this.#state, input301, input302),
        ),
      );
    });
  }
  move(input279, input280, input281 = {}) {
    storeRoutine23(this.#state.instrumentation, "store.move", () => {
      let storeLocal605 = storeRoutine151(this.#state),
        storeLocal606 = _t(this.#state, input279, input280, input281);
      storeLocal606 != null &&
        storeRoutine84(
          this.#state,
          storeRoutine82(this.#state, storeLocal605, storeLocal606),
        );
    });
  }
  batch(input159) {
    storeRoutine83(this.#state, () => {
      if (typeof input159 == "function") {
        input159(this);
        return;
      }
      for (let storeLocal436 of input159)
        switch (storeLocal436.type) {
          case "add":
            this.add(storeLocal436.path);
            break;
          case "remove":
            this.remove(storeLocal436.path, {
              recursive: storeLocal436.recursive,
            });
            break;
          case "move":
            this.move(storeLocal436.from, storeLocal436.to, {
              collision: storeLocal436.collision,
            });
            break;
        }
    });
  }
  getVisibleCount() {
    return storeRoutine23(
      this.#state.instrumentation,
      "store.getVisibleCount",
      () => storeRoutine151(this.#state),
    );
  }
  getVisibleSlice(input349, input350) {
    return storeRoutine23(
      this.#state.instrumentation,
      "store.getVisibleSlice",
      () => storeRoutine157(this.#state, input349, input350),
    );
  }
  getVisibleRowContext(input340) {
    return storeRoutine23(
      this.#state.instrumentation,
      "store.getVisibleRowContext",
      () => storeRoutine156(this.#state, input340),
    );
  }
  getVisibleTreeProjection() {
    return storeRoutine158(this.#state);
  }
  getVisibleTreeProjectionData(input405) {
    return _n(this.#state, input405);
  }
  getVisibleIndex(input353) {
    return storeRoutine23(
      this.#state.instrumentation,
      "store.getVisibleIndex",
      () => storeRoutine159(this.#state, input353),
    );
  }
  getPathInfo(input211) {
    return storeRoutine23(
      this.#state.instrumentation,
      "store.getPathInfo",
      () => {
        let storeLocal503 = storeRoutine105(this.#state, input211);
        if (storeLocal503 == null) return null;
        let storeLocal504 = storeRoutine108(this.#state, storeLocal503);
        return {
          depth: storeRoutine14(storeLocal504),
          kind: storeRoutine16(storeLocal504) ? "directory" : "file",
          path: storeRoutine101(this.#state, storeLocal503),
        };
      },
    );
  }
  isExpanded(input249) {
    return storeRoutine23(
      this.#state.instrumentation,
      "store.isExpanded",
      () => {
        let storeLocal596 = this.requireDirectoryNodeId(input249),
          storeLocal597 = storeRoutine108(this.#state, storeLocal596);
        return storeRoutine61(this.#state, storeLocal596, storeLocal597);
      },
    );
  }
  expand(input292) {
    storeRoutine23(this.#state.instrumentation, "store.expand", () => {
      let storeLocal612 = storeRoutine151(this.#state),
        storeLocal613 = storeRoutine160(this.#state, input292);
      storeLocal613 != null &&
        storeRoutine84(
          this.#state,
          storeRoutine82(this.#state, storeLocal612, storeLocal613),
        );
    });
  }
  collapse(input283) {
    storeRoutine23(this.#state.instrumentation, "store.collapse", () => {
      let storeLocal614 = storeRoutine151(this.#state),
        storeLocal615 = storeRoutine161(this.#state, input283);
      storeLocal615 != null &&
        storeRoutine84(
          this.#state,
          storeRoutine82(this.#state, storeLocal614, storeLocal615),
        );
    });
  }
  on(input441, input442) {
    return storeRoutine71(this.#state, input441, input442);
  }
  getDirectoryLoadState(input364) {
    let storeLocal594 = this.requireDirectoryNodeId(input364);
    return storeRoutine64(this.#state, storeLocal594);
  }
  markDirectoryUnloaded(input74) {
    storeRoutine23(
      this.#state.instrumentation,
      "store.markDirectoryUnloaded",
      () => {
        let storeLocal287 = this.requireDirectoryNodeId(input74);
        if (storeRoutine107(this.#state, storeLocal287).childIds.length > 0)
          throw Error(
            `Cannot mark a directory with known children as unloaded: "${input74}"`,
          );
        let storeLocal288 = storeRoutine151(this.#state);
        storeRoutine66(this.#state, storeLocal287);
        storeRoutine84(
          this.#state,
          storeRoutine82(
            this.#state,
            storeLocal288,
            storeRoutine77({
              affectedAncestorIds: storeRoutine104(this.#state, storeLocal287),
              affectedNodeIds: [storeLocal287],
              path: input74,
              projectionChanged:
                this.isDirectoryProjectionVisible(storeLocal287),
            }),
          ),
        );
      },
    );
  }
  beginChildLoad(input108) {
    return storeRoutine23(
      this.#state.instrumentation,
      "store.beginChildLoad",
      () => {
        let storeLocal340 = this.requireDirectoryNodeId(input108),
          storeLocal341 = storeRoutine151(this.#state),
          storeLocal342 = storeRoutine65(this.#state, storeLocal340);
        return (
          storeRoutine84(
            this.#state,
            storeRoutine82(
              this.#state,
              storeLocal341,
              $e({
                affectedAncestorIds: storeRoutine104(
                  this.#state,
                  storeLocal340,
                ),
                affectedNodeIds: [storeLocal340],
                attemptId: storeLocal342.attemptId,
                path: input108,
                projectionChanged:
                  this.isDirectoryProjectionVisible(storeLocal340),
                reused: storeLocal342.reused,
              }),
            ),
          ),
          storeLocal342
        );
      },
    );
  }
  applyChildPatch(input18, input19) {
    return storeRoutine23(
      this.#state.instrumentation,
      "store.applyChildPatch",
      () => {
        let storeLocal120 = this.resolveActiveDirectoryNodeId(input18.nodeId);
        if (
          storeLocal120 == null ||
          storeRoutine64(this.#state, storeLocal120) !== "loading" ||
          !storeRoutine68(this.#state, storeLocal120, input18.attemptId)
        )
          return false;
        let storeLocal121 = storeRoutine101(this.#state, storeLocal120);
        this.validateChildPatch(storeLocal121, input19);
        let storeLocal122 = storeRoutine151(this.#state),
          storeLocal123 = [];
        for (let storeLocal301 of input19.operations) {
          storeRoutine174(storeLocal121, storeLocal301);
          let storeLocal327 = storeRoutine151(this.#state);
          switch (storeLocal301.type) {
            case "add":
              storeLocal123.push(
                storeRoutine82(
                  this.#state,
                  storeLocal327,
                  storeRoutine97(this.#state, storeLocal301.path),
                ),
              );
              break;
            case "remove":
              storeLocal123.push(
                storeRoutine82(
                  this.#state,
                  storeLocal327,
                  storeRoutine98(this.#state, storeLocal301.path, {
                    recursive: storeLocal301.recursive,
                  }),
                ),
              );
              break;
            case "move": {
              let storeLocal576 = _t(
                this.#state,
                storeLocal301.from,
                storeLocal301.to,
                {
                  collision: storeLocal301.collision,
                },
              );
              storeLocal576 != null &&
                storeLocal123.push(
                  storeRoutine82(this.#state, storeLocal327, storeLocal576),
                );
              break;
            }
          }
        }
        let storeLocal124 =
          storeLocal123.some((item) => item.projectionChanged) ||
          this.isDirectoryProjectionVisible(storeLocal120);
        return (
          storeRoutine84(
            this.#state,
            storeRoutine82(
              this.#state,
              storeLocal122,
              storeRoutine78({
                affectedAncestorIds: storeRoutine104(
                  this.#state,
                  storeLocal120,
                ),
                affectedNodeIds: [storeLocal120],
                attemptId: input18.attemptId,
                childEvents: storeLocal123,
                path: storeRoutine101(this.#state, storeLocal120),
                projectionChanged: storeLocal124,
              }),
            ),
          ),
          true
        );
      },
    );
  }
  completeChildLoad(input84) {
    return storeRoutine23(
      this.#state.instrumentation,
      "store.completeChildLoad",
      () => {
        let storeLocal298 = this.resolveActiveDirectoryNodeId(input84.nodeId);
        if (storeLocal298 == null) return false;
        let storeLocal299 = storeRoutine151(this.#state),
          storeLocal300 = storeRoutine67(
            this.#state,
            storeLocal298,
            input84.attemptId,
          );
        return (
          storeRoutine84(
            this.#state,
            storeRoutine82(
              this.#state,
              storeLocal299,
              storeRoutine79({
                affectedAncestorIds: storeRoutine104(
                  this.#state,
                  storeLocal298,
                ),
                affectedNodeIds: [storeLocal298],
                attemptId: input84.attemptId,
                path: storeRoutine101(this.#state, storeLocal298),
                projectionChanged:
                  this.isDirectoryProjectionVisible(storeLocal298),
                stale: !storeLocal300,
              }),
            ),
          ),
          storeLocal300
        );
      },
    );
  }
  failChildLoad(input79, input80) {
    return storeRoutine23(
      this.#state.instrumentation,
      "store.failChildLoad",
      () => {
        let storeLocal283 = this.resolveActiveDirectoryNodeId(input79.nodeId);
        if (storeLocal283 == null) return false;
        let storeLocal284 = storeRoutine151(this.#state),
          storeLocal285 = storeRoutine69(
            this.#state,
            storeLocal283,
            input79.attemptId,
            input80,
          );
        return (
          storeRoutine84(
            this.#state,
            storeRoutine82(
              this.#state,
              storeLocal284,
              storeRoutine80({
                affectedAncestorIds: storeRoutine104(
                  this.#state,
                  storeLocal283,
                ),
                affectedNodeIds: [storeLocal283],
                attemptId: input79.attemptId,
                errorMessage: input80,
                path: storeRoutine101(this.#state, storeLocal283),
                projectionChanged:
                  this.isDirectoryProjectionVisible(storeLocal283),
                stale: !storeLocal285,
              }),
            ),
          ),
          storeLocal285
        );
      },
    );
  }
  cleanup(input67 = {}) {
    return storeRoutine23(this.#state.instrumentation, "store.cleanup", () => {
      if (this.#state.transactionStack.length > 0)
        throw Error("Cleanup cannot run during an open batch or transaction.");
      if (storeRoutine148(this.#state))
        throw Error("Cleanup cannot run while directory loads are active.");
      let storeLocal267 = storeRoutine151(this.#state),
        className = storeRoutine149(this.#state, input67.mode ?? "stable");
      return (
        storeRoutine84(
          this.#state,
          storeRoutine82(
            this.#state,
            storeLocal267,
            storeRoutine81({
              ...className,
              affectedAncestorIds: [],
              affectedNodeIds: [],
              projectionChanged: className.idsPreserved === false,
            }),
          ),
        ),
        className
      );
    });
  }
  getNodeCount() {
    return this.#state.activeNodeCount;
  }
  initializeExpandedPaths(input3) {
    if (input3 == null || input3.length === 0) return 0;
    let storeLocal30 = 0,
      storeLocal31 = [],
      storeLocal32 = [],
      storeLocal33 = 0,
      storeLocal34 = null,
      storeLocal35 = this.#state.snapshot.segmentTable,
      storeLocal36 = storeLocal35.valueById,
      storeLocal37 = this.#state.snapshot.nodes,
      storeLocal38 = new Map();
    for (let storeLocal60 of input3) {
      storeLocal34 != null &&
        storeLocal60 < storeLocal34 &&
        ((storeLocal34 = null),
        (storeLocal33 = 0),
        (storeLocal31.length = 0),
        (storeLocal32.length = 0));
      let storeLocal61 =
        storeLocal60.length > 0 &&
        storeLocal60.charCodeAt(storeLocal60.length - 1) === 47
          ? storeLocal60.length - 1
          : storeLocal60.length;
      if (storeLocal61 === 0) {
        storeLocal34 = storeLocal60;
        storeLocal33 = storeLocal61;
        storeLocal31.length = 0;
        storeLocal32.length = 0;
        continue;
      }
      let storeLocal62 = 0,
        storeLocal63 = 0;
      if (storeLocal34 != null) {
        let storeLocal349 = Math.min(storeLocal61, storeLocal33),
          storeLocal350 = true;
        for (
          let storeLocal562 = 0;
          storeLocal562 < storeLocal349;
          storeLocal562 += 1
        ) {
          let storeLocal598 = storeLocal60.charCodeAt(storeLocal562);
          if (storeLocal598 !== storeLocal34.charCodeAt(storeLocal562)) {
            storeLocal350 = false;
            break;
          }
          storeLocal598 === 47 &&
            ((storeLocal62 += 1), (storeLocal63 = storeLocal562 + 1));
        }
        storeLocal350 &&
          (storeLocal349 === storeLocal33 &&
          storeLocal61 > storeLocal349 &&
          storeLocal60.charCodeAt(storeLocal349) === 47
            ? ((storeLocal62 += 1), (storeLocal63 = storeLocal349 + 1))
            : storeLocal349 === storeLocal61 &&
              storeLocal33 > storeLocal349 &&
              storeLocal34.charCodeAt(storeLocal349) === 47 &&
              ((storeLocal62 += 1), (storeLocal63 = storeLocal61 + 1)));
        storeLocal62 = Math.min(storeLocal62, storeLocal32.length);
      }
      let storeLocal64 =
          storeLocal62 === 0
            ? this.#state.snapshot.rootId
            : (storeLocal32[storeLocal62 - 1] ?? this.#state.snapshot.rootId),
        storeLocal65 = storeLocal62,
        storeLocal66 = true,
        storeLocal67 = storeLocal63;
      for (; storeLocal67 <= storeLocal61; ) {
        let storeLocal218 = storeLocal60.indexOf("/", storeLocal67),
          storeLocal219 =
            storeLocal218 === -1 || storeLocal218 > storeLocal61
              ? storeLocal61
              : storeLocal218,
          storeLocal220 = storeLocal60.slice(storeLocal67, storeLocal219),
          storeLocal221 = storeRoutine107(this.#state, storeLocal64).childIds,
          storeLocal222 =
            storeLocal65 === storeLocal62
              ? (storeLocal31[storeLocal65] ?? 0)
              : 0,
          storeLocal223 = storeLocal222,
          storeLocal224,
          storeLocal225 =
            storeLocal38.get(storeLocal220) ?? storeRoutine27(storeLocal220);
        storeLocal38.set(storeLocal220, storeLocal225);
        let storeLocal226 = (input254, input255) => {
          for (
            storeLocal223 = input254;
            storeLocal223 < input255;
            storeLocal223 += 1
          ) {
            let storeLocal538 = storeLocal221[storeLocal223],
              storeLocal539 = storeLocal37[storeLocal538],
              storeLocal540 = storeLocal36[storeLocal539.nameId];
            if (storeLocal540 === storeLocal220)
              return ((storeLocal224 = storeLocal538), true);
            let storeLocal541 = storeRoutine29(
              storeRoutine36(storeLocal35, storeLocal539.nameId),
              storeLocal225,
            );
            if (
              storeLocal541 > 0 ||
              (storeLocal541 === 0 && storeLocal540 > storeLocal220)
            )
              return false;
          }
          return false;
        };
        if (
          (!storeLocal226(storeLocal222, storeLocal221.length) &&
            storeLocal222 > 0 &&
            storeLocal226(0, storeLocal222),
          storeLocal224 === undefined)
        ) {
          storeLocal66 = false;
          break;
        }
        if (!storeRoutine16(storeRoutine108(this.#state, storeLocal224))) {
          storeLocal66 = false;
          break;
        }
        if (
          ((storeLocal31[storeLocal65] = storeLocal223),
          (storeLocal32[storeLocal65] = storeLocal224),
          (storeLocal64 = storeLocal224),
          (storeLocal65 += 1),
          storeLocal219 === storeLocal61)
        )
          break;
        storeLocal67 = storeLocal219 + 1;
      }
      if (
        ((storeLocal34 = storeLocal60),
        (storeLocal33 = storeLocal61),
        (storeLocal31.length = storeLocal65),
        (storeLocal32.length = storeLocal65),
        !storeLocal66)
      ) {
        storeLocal34 = null;
        storeLocal33 = 0;
        storeLocal31.length = 0;
        storeLocal32.length = 0;
        continue;
      }
      for (
        let storeLocal534 = storeLocal62;
        storeLocal534 < storeLocal65;
        storeLocal534 += 1
      ) {
        let storeLocal579 = storeLocal32[storeLocal534];
        if (storeLocal579 == null) continue;
        let storeLocal580 = storeRoutine108(this.#state, storeLocal579);
        storeRoutine61(this.#state, storeLocal579, storeLocal580) ||
          (storeRoutine62(this.#state, storeLocal579, true, storeLocal580),
          (storeLocal30 += 1));
      }
    }
    return storeLocal30;
  }
  hasAllDirectoriesExpanded() {
    for (let storeLocal497 of this.#state.snapshot.directories.keys()) {
      if (storeLocal497 === this.#state.snapshot.rootId) continue;
      let storeLocal588 = storeRoutine108(this.#state, storeLocal497);
      if (!storeRoutine61(this.#state, storeLocal497, storeLocal588))
        return false;
    }
    return true;
  }
  requireDirectoryNodeId(input233) {
    let storeLocal457 = storeRoutine105(this.#state, input233);
    if (storeLocal457 == null)
      throw Error(`Path does not exist: "${input233}"`);
    if (!storeRoutine16(storeRoutine108(this.#state, storeLocal457)))
      throw Error(`Path is not a directory: "${input233}"`);
    return storeLocal457;
  }
  resolveActiveDirectoryNodeId(input272) {
    try {
      if (!storeRoutine16(storeRoutine108(this.#state, input272)))
        throw Error(`Node is not a directory: ${String(input272)}`);
      return input272;
    } catch {
      return null;
    }
  }
  isDirectoryProjectionVisible(input194) {
    let storeLocal387 = input194;
    for (; storeLocal387 !== this.#state.snapshot.rootId; ) {
      let storeLocal502 = storeRoutine108(this.#state, storeLocal387).parentId;
      if (storeLocal502 !== this.#state.snapshot.rootId) {
        let storeLocal627 = storeRoutine108(this.#state, storeLocal502),
          storeLocal628 = storeRoutine93(this.#state, storeLocal502);
        if (
          !storeRoutine61(this.#state, storeLocal502, storeLocal627) &&
          storeLocal628 !== storeLocal387
        )
          return false;
      }
      storeLocal387 = storeLocal502;
    }
    return true;
  }
  validateChildPatch(input303, input304) {
    new PathTreeStore({
      paths: this.list(input303),
      presorted: true,
      sort: this.#state.snapshot.options.sort,
    }).batch(input304.operations);
  }
};
function storeRoutine174(input112, input113) {
  switch (input113.type) {
    case "add":
    case "remove":
      if (!input113.path.startsWith(input112) || input113.path === input112)
        throw Error(
          `Child patch operation must stay within ${input112}: "${input113.path}"`,
        );
      break;
    case "move":
      if (
        !input113.from.startsWith(input112) ||
        !input113.to.startsWith(input112) ||
        input113.from === input112 ||
        input113.to === input112
      )
        throw Error(
          `Child patch move must stay within ${input112}: "${input113.from}" -> "${input113.to}"`,
        );
      break;
  }
}
