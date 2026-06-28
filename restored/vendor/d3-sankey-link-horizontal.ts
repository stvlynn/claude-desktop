// Restored from ref/webview/assets/sankeyLinkHorizontal-DCfEjaVP.js
// SankeyLinkHorizontal chunk restored from the Codex webview bundle.
function sankeyLinkHorizontalHelper1(
  sankeyLinkHorizontalParam21,
  sankeyLinkHorizontalParam22,
) {
  let sankeyLinkHorizontalValue54;
  if (sankeyLinkHorizontalParam22 === undefined)
    for (let sankeyLinkHorizontalValue85 of sankeyLinkHorizontalParam21)
      sankeyLinkHorizontalValue85 != null &&
        (sankeyLinkHorizontalValue54 < sankeyLinkHorizontalValue85 ||
          (sankeyLinkHorizontalValue54 === undefined &&
            sankeyLinkHorizontalValue85 >= sankeyLinkHorizontalValue85)) &&
        (sankeyLinkHorizontalValue54 = sankeyLinkHorizontalValue85);
  else {
    let sankeyLinkHorizontalValue74 = -1;
    for (let _sankeyLinkHorizontalA of sankeyLinkHorizontalParam21)
      (_sankeyLinkHorizontalA = sankeyLinkHorizontalParam22(
        _sankeyLinkHorizontalA,
        ++sankeyLinkHorizontalValue74,
        sankeyLinkHorizontalParam21,
      )) != null &&
        (sankeyLinkHorizontalValue54 < _sankeyLinkHorizontalA ||
          (sankeyLinkHorizontalValue54 === undefined &&
            _sankeyLinkHorizontalA >= _sankeyLinkHorizontalA)) &&
        (sankeyLinkHorizontalValue54 = _sankeyLinkHorizontalA);
  }
  return sankeyLinkHorizontalValue54;
}
function sankeyLinkHorizontalHelper2(
  sankeyLinkHorizontalParam23,
  sankeyLinkHorizontalParam24,
) {
  let sankeyLinkHorizontalValue55;
  if (sankeyLinkHorizontalParam24 === undefined)
    for (let sankeyLinkHorizontalValue86 of sankeyLinkHorizontalParam23)
      sankeyLinkHorizontalValue86 != null &&
        (sankeyLinkHorizontalValue55 > sankeyLinkHorizontalValue86 ||
          (sankeyLinkHorizontalValue55 === undefined &&
            sankeyLinkHorizontalValue86 >= sankeyLinkHorizontalValue86)) &&
        (sankeyLinkHorizontalValue55 = sankeyLinkHorizontalValue86);
  else {
    let sankeyLinkHorizontalValue75 = -1;
    for (let _sankeyLinkHorizontalA of sankeyLinkHorizontalParam23)
      (_sankeyLinkHorizontalA = sankeyLinkHorizontalParam24(
        _sankeyLinkHorizontalA,
        ++sankeyLinkHorizontalValue75,
        sankeyLinkHorizontalParam23,
      )) != null &&
        (sankeyLinkHorizontalValue55 > _sankeyLinkHorizontalA ||
          (sankeyLinkHorizontalValue55 === undefined &&
            _sankeyLinkHorizontalA >= _sankeyLinkHorizontalA)) &&
        (sankeyLinkHorizontalValue55 = _sankeyLinkHorizontalA);
  }
  return sankeyLinkHorizontalValue55;
}
function sankeyLinkHorizontalHelper3(
  sankeyLinkHorizontalParam26,
  sankeyLinkHorizontalParam27,
) {
  let sankeyLinkHorizontalValue65 = 0;
  if (sankeyLinkHorizontalParam27 === undefined)
    for (let sankeyLinkHorizontalValue92 of sankeyLinkHorizontalParam26)
      (sankeyLinkHorizontalValue92 = +sankeyLinkHorizontalValue92) &&
        (sankeyLinkHorizontalValue65 += sankeyLinkHorizontalValue92);
  else {
    let sankeyLinkHorizontalValue89 = -1;
    for (let _sankeyLinkHorizontalA of sankeyLinkHorizontalParam26)
      (_sankeyLinkHorizontalA = +sankeyLinkHorizontalParam27(
        _sankeyLinkHorizontalA,
        ++sankeyLinkHorizontalValue89,
        sankeyLinkHorizontalParam26,
      )) && (sankeyLinkHorizontalValue65 += _sankeyLinkHorizontalA);
  }
  return sankeyLinkHorizontalValue65;
}
function sankeyLinkHorizontalHelper4(event) {
  return event.target.depth;
}
export function sankeyLinkHorizontalA(sankeyLinkHorizontalParam91) {
  return sankeyLinkHorizontalParam91.depth;
}
export function sankeyLinkHorizontalO(
  sankeyLinkHorizontalParam85,
  sankeyLinkHorizontalParam86,
) {
  return sankeyLinkHorizontalParam86 - 1 - sankeyLinkHorizontalParam85.height;
}
function sankeyLinkHorizontalI(
  sankeyLinkHorizontalParam72,
  sankeyLinkHorizontalParam73,
) {
  return sankeyLinkHorizontalParam72.sourceLinks.length
    ? sankeyLinkHorizontalParam72.depth
    : sankeyLinkHorizontalParam73 - 1;
}
export function sankeyLinkHorizontalR(sankeyLinkHorizontalParam47) {
  return sankeyLinkHorizontalParam47.targetLinks.length
    ? sankeyLinkHorizontalParam47.depth
    : sankeyLinkHorizontalParam47.sourceLinks.length
      ? sankeyLinkHorizontalHelper2(
          sankeyLinkHorizontalParam47.sourceLinks,
          sankeyLinkHorizontalHelper4,
        ) - 1
      : 0;
}
function sankeyLinkHorizontalHelper5(sankeyLinkHorizontalParam82) {
  return function () {
    return sankeyLinkHorizontalParam82;
  };
}
function sankeyLinkHorizontalHelper6(
  sankeyLinkHorizontalParam68,
  sankeyLinkHorizontalParam69,
) {
  return (
    sankeyLinkHorizontalHelper8(
      sankeyLinkHorizontalParam68.source,
      sankeyLinkHorizontalParam69.source,
    ) || sankeyLinkHorizontalParam68.index - sankeyLinkHorizontalParam69.index
  );
}
function sankeyLinkHorizontalHelper7(event, _event) {
  return (
    sankeyLinkHorizontalHelper8(event.target, _event.target) ||
    event.index - _event.index
  );
}
function sankeyLinkHorizontalHelper8(
  sankeyLinkHorizontalParam87,
  sankeyLinkHorizontalParam88,
) {
  return sankeyLinkHorizontalParam87.y0 - sankeyLinkHorizontalParam88.y0;
}
function sankeyLinkHorizontalHelper9(sankeyLinkHorizontalParam92) {
  return sankeyLinkHorizontalParam92.value;
}
function sankeyLinkHorizontalHelper10(sankeyLinkHorizontalParam93) {
  return sankeyLinkHorizontalParam93.index;
}
function sankeyLinkHorizontalHelper11(sankeyLinkHorizontalParam94) {
  return sankeyLinkHorizontalParam94.nodes;
}
function sankeyLinkHorizontalHelper12(sankeyLinkHorizontalParam95) {
  return sankeyLinkHorizontalParam95.links;
}
function sankeyLinkHorizontalHelper13(
  sankeyLinkHorizontalParam55,
  sankeyLinkHorizontalParam56,
) {
  let sankeyLinkHorizontalValue77 = sankeyLinkHorizontalParam55.get(
    sankeyLinkHorizontalParam56,
  );
  if (!sankeyLinkHorizontalValue77)
    throw Error("missing: " + sankeyLinkHorizontalParam56);
  return sankeyLinkHorizontalValue77;
}
function sankeyLinkHorizontalHelper14({ nodes }) {
  for (let sankeyLinkHorizontalValue63 of nodes) {
    let sankeyLinkHorizontalValue66 = sankeyLinkHorizontalValue63.y0,
      sankeyLinkHorizontalValue67 = sankeyLinkHorizontalValue66;
    for (let sankeyLinkHorizontalValue87 of sankeyLinkHorizontalValue63.sourceLinks) {
      sankeyLinkHorizontalValue87.y0 =
        sankeyLinkHorizontalValue66 + sankeyLinkHorizontalValue87.width / 2;
      sankeyLinkHorizontalValue66 += sankeyLinkHorizontalValue87.width;
    }
    for (let sankeyLinkHorizontalValue88 of sankeyLinkHorizontalValue63.targetLinks) {
      sankeyLinkHorizontalValue88.y1 =
        sankeyLinkHorizontalValue67 + sankeyLinkHorizontalValue88.width / 2;
      sankeyLinkHorizontalValue67 += sankeyLinkHorizontalValue88.width;
    }
  }
}
export function sankeyLinkHorizontalN() {
  let sankeyLinkHorizontalValue6 = 0,
    _sankeyLinkHorizontalA = 0,
    _sankeyLinkHorizontalO = 1,
    _sankeyLinkHorizontalR = 1,
    _sankeyLinkHorizontalN = 24,
    sankeyLinkHorizontalValue7 = 8,
    sankeyLinkHorizontalValue8,
    sankeyLinkHorizontalValue9 = sankeyLinkHorizontalHelper10,
    sankeyLinkHorizontalValue10 = sankeyLinkHorizontalI,
    sankeyLinkHorizontalValue11,
    sankeyLinkHorizontalValue12,
    sankeyLinkHorizontalValue13 = sankeyLinkHorizontalHelper11,
    sankeyLinkHorizontalValue14 = sankeyLinkHorizontalHelper12,
    sankeyLinkHorizontalValue15 = 6;
  function sankeyLinkHorizontalHelper27() {
    let sankeyLinkHorizontalValue69 = {
      nodes: sankeyLinkHorizontalValue13.apply(null, arguments),
      links: sankeyLinkHorizontalValue14.apply(null, arguments),
    };
    return (
      sankeyLinkHorizontalHelper28(sankeyLinkHorizontalValue69),
      sankeyLinkHorizontalHelper29(sankeyLinkHorizontalValue69),
      sankeyLinkHorizontalHelper30(sankeyLinkHorizontalValue69),
      sankeyLinkHorizontalHelper31(sankeyLinkHorizontalValue69),
      sankeyLinkHorizontalHelper34(sankeyLinkHorizontalValue69),
      sankeyLinkHorizontalHelper14(sankeyLinkHorizontalValue69),
      sankeyLinkHorizontalValue69
    );
  }
  sankeyLinkHorizontalHelper27.update = function (sankeyLinkHorizontalParam96) {
    return (
      sankeyLinkHorizontalHelper14(sankeyLinkHorizontalParam96),
      sankeyLinkHorizontalParam96
    );
  };
  sankeyLinkHorizontalHelper27.nodeId = function (sankeyLinkHorizontalParam63) {
    return arguments.length
      ? ((sankeyLinkHorizontalValue9 =
          typeof sankeyLinkHorizontalParam63 == "function"
            ? sankeyLinkHorizontalParam63
            : sankeyLinkHorizontalHelper5(sankeyLinkHorizontalParam63)),
        sankeyLinkHorizontalHelper27)
      : sankeyLinkHorizontalValue9;
  };
  sankeyLinkHorizontalHelper27.nodeAlign = function (
    sankeyLinkHorizontalParam64,
  ) {
    return arguments.length
      ? ((sankeyLinkHorizontalValue10 =
          typeof sankeyLinkHorizontalParam64 == "function"
            ? sankeyLinkHorizontalParam64
            : sankeyLinkHorizontalHelper5(sankeyLinkHorizontalParam64)),
        sankeyLinkHorizontalHelper27)
      : sankeyLinkHorizontalValue10;
  };
  sankeyLinkHorizontalHelper27.nodeSort = function (
    sankeyLinkHorizontalParam78,
  ) {
    return arguments.length
      ? ((sankeyLinkHorizontalValue11 = sankeyLinkHorizontalParam78),
        sankeyLinkHorizontalHelper27)
      : sankeyLinkHorizontalValue11;
  };
  sankeyLinkHorizontalHelper27.nodeWidth = function (
    sankeyLinkHorizontalParam76,
  ) {
    return arguments.length
      ? ((_sankeyLinkHorizontalN = +sankeyLinkHorizontalParam76),
        sankeyLinkHorizontalHelper27)
      : _sankeyLinkHorizontalN;
  };
  sankeyLinkHorizontalHelper27.nodePadding = function (
    sankeyLinkHorizontalParam75,
  ) {
    return arguments.length
      ? ((sankeyLinkHorizontalValue7 = sankeyLinkHorizontalValue8 =
          +sankeyLinkHorizontalParam75),
        sankeyLinkHorizontalHelper27)
      : sankeyLinkHorizontalValue7;
  };
  sankeyLinkHorizontalHelper27.nodes = function (sankeyLinkHorizontalParam65) {
    return arguments.length
      ? ((sankeyLinkHorizontalValue13 =
          typeof sankeyLinkHorizontalParam65 == "function"
            ? sankeyLinkHorizontalParam65
            : sankeyLinkHorizontalHelper5(sankeyLinkHorizontalParam65)),
        sankeyLinkHorizontalHelper27)
      : sankeyLinkHorizontalValue13;
  };
  sankeyLinkHorizontalHelper27.links = function (sankeyLinkHorizontalParam66) {
    return arguments.length
      ? ((sankeyLinkHorizontalValue14 =
          typeof sankeyLinkHorizontalParam66 == "function"
            ? sankeyLinkHorizontalParam66
            : sankeyLinkHorizontalHelper5(sankeyLinkHorizontalParam66)),
        sankeyLinkHorizontalHelper27)
      : sankeyLinkHorizontalValue14;
  };
  sankeyLinkHorizontalHelper27.linkSort = function (
    sankeyLinkHorizontalParam79,
  ) {
    return arguments.length
      ? ((sankeyLinkHorizontalValue12 = sankeyLinkHorizontalParam79),
        sankeyLinkHorizontalHelper27)
      : sankeyLinkHorizontalValue12;
  };
  sankeyLinkHorizontalHelper27.size = function (sankeyLinkHorizontalParam67) {
    return arguments.length
      ? ((sankeyLinkHorizontalValue6 = _sankeyLinkHorizontalA = 0),
        (_sankeyLinkHorizontalO = +sankeyLinkHorizontalParam67[0]),
        (_sankeyLinkHorizontalR = +sankeyLinkHorizontalParam67[1]),
        sankeyLinkHorizontalHelper27)
      : [
          _sankeyLinkHorizontalO - sankeyLinkHorizontalValue6,
          _sankeyLinkHorizontalR - _sankeyLinkHorizontalA,
        ];
  };
  sankeyLinkHorizontalHelper27.extent = function (sankeyLinkHorizontalParam38) {
    return arguments.length
      ? ((sankeyLinkHorizontalValue6 = +sankeyLinkHorizontalParam38[0][0]),
        (_sankeyLinkHorizontalO = +sankeyLinkHorizontalParam38[1][0]),
        (_sankeyLinkHorizontalA = +sankeyLinkHorizontalParam38[0][1]),
        (_sankeyLinkHorizontalR = +sankeyLinkHorizontalParam38[1][1]),
        sankeyLinkHorizontalHelper27)
      : [
          [sankeyLinkHorizontalValue6, _sankeyLinkHorizontalA],
          [_sankeyLinkHorizontalO, _sankeyLinkHorizontalR],
        ];
  };
  sankeyLinkHorizontalHelper27.iterations = function (
    sankeyLinkHorizontalParam77,
  ) {
    return arguments.length
      ? ((sankeyLinkHorizontalValue15 = +sankeyLinkHorizontalParam77),
        sankeyLinkHorizontalHelper27)
      : sankeyLinkHorizontalValue15;
  };
  function sankeyLinkHorizontalHelper28({ nodes, links }) {
    for (let [
      sankeyLinkHorizontalValue78,
      sankeyLinkHorizontalValue79,
    ] of nodes.entries()) {
      sankeyLinkHorizontalValue79.index = sankeyLinkHorizontalValue78;
      sankeyLinkHorizontalValue79.sourceLinks = [];
      sankeyLinkHorizontalValue79.targetLinks = [];
    }
    let sankeyLinkHorizontalValue35 = new Map(
      nodes.map((item, index) => [
        sankeyLinkHorizontalValue9(item, index, nodes),
        item,
      ]),
    );
    for (let [
      sankeyLinkHorizontalValue52,
      sankeyLinkHorizontalValue53,
    ] of links.entries()) {
      sankeyLinkHorizontalValue53.index = sankeyLinkHorizontalValue52;
      let { source, target: __sankeyLinkHorizontalA } =
        sankeyLinkHorizontalValue53;
      typeof source != "object" &&
        (source = sankeyLinkHorizontalValue53.source =
          sankeyLinkHorizontalHelper13(sankeyLinkHorizontalValue35, source));
      typeof __sankeyLinkHorizontalA != "object" &&
        (__sankeyLinkHorizontalA = sankeyLinkHorizontalValue53.target =
          sankeyLinkHorizontalHelper13(
            sankeyLinkHorizontalValue35,
            __sankeyLinkHorizontalA,
          ));
      source.sourceLinks.push(sankeyLinkHorizontalValue53);
      __sankeyLinkHorizontalA.targetLinks.push(sankeyLinkHorizontalValue53);
    }
    if (sankeyLinkHorizontalValue12 != null)
      for (let { sourceLinks, targetLinks } of nodes) {
        sourceLinks.sort(sankeyLinkHorizontalValue12);
        targetLinks.sort(sankeyLinkHorizontalValue12);
      }
  }
  function sankeyLinkHorizontalHelper29({ nodes }) {
    for (let sankeyLinkHorizontalValue72 of nodes)
      sankeyLinkHorizontalValue72.value =
        sankeyLinkHorizontalValue72.fixedValue === undefined
          ? Math.max(
              sankeyLinkHorizontalHelper3(
                sankeyLinkHorizontalValue72.sourceLinks,
                sankeyLinkHorizontalHelper9,
              ),
              sankeyLinkHorizontalHelper3(
                sankeyLinkHorizontalValue72.targetLinks,
                sankeyLinkHorizontalHelper9,
              ),
            )
          : sankeyLinkHorizontalValue72.fixedValue;
  }
  function sankeyLinkHorizontalHelper30({ nodes }) {
    let sankeyLinkHorizontalValue46 = nodes.length,
      sankeyLinkHorizontalValue47 = new Set(nodes),
      sankeyLinkHorizontalValue48 = new Set(),
      __sankeyLinkHorizontalA = 0;
    for (; sankeyLinkHorizontalValue47.size; ) {
      for (let sankeyLinkHorizontalValue81 of sankeyLinkHorizontalValue47) {
        sankeyLinkHorizontalValue81.depth = __sankeyLinkHorizontalA;
        for (let { target } of sankeyLinkHorizontalValue81.sourceLinks)
          sankeyLinkHorizontalValue48.add(target);
      }
      if (++__sankeyLinkHorizontalA > sankeyLinkHorizontalValue46)
        throw Error("circular link");
      sankeyLinkHorizontalValue47 = sankeyLinkHorizontalValue48;
      sankeyLinkHorizontalValue48 = new Set();
    }
  }
  function sankeyLinkHorizontalHelper31({ nodes }) {
    let sankeyLinkHorizontalValue43 = nodes.length,
      sankeyLinkHorizontalValue44 = new Set(nodes),
      sankeyLinkHorizontalValue45 = new Set(),
      __sankeyLinkHorizontalA = 0;
    for (; sankeyLinkHorizontalValue44.size; ) {
      for (let sankeyLinkHorizontalValue80 of sankeyLinkHorizontalValue44) {
        sankeyLinkHorizontalValue80.height = __sankeyLinkHorizontalA;
        for (let { source } of sankeyLinkHorizontalValue80.targetLinks)
          sankeyLinkHorizontalValue45.add(source);
      }
      if (++__sankeyLinkHorizontalA > sankeyLinkHorizontalValue43)
        throw Error("circular link");
      sankeyLinkHorizontalValue44 = sankeyLinkHorizontalValue45;
      sankeyLinkHorizontalValue45 = new Set();
    }
  }
  function sankeyLinkHorizontalHelper32({ nodes }) {
    let sankeyLinkHorizontalValue37 =
        sankeyLinkHorizontalHelper1(
          nodes,
          (sankeyLinkHorizontalParam100) => sankeyLinkHorizontalParam100.depth,
        ) + 1,
      __sankeyLinkHorizontalA =
        (_sankeyLinkHorizontalO -
          sankeyLinkHorizontalValue6 -
          _sankeyLinkHorizontalN) /
        (sankeyLinkHorizontalValue37 - 1),
      _sankeyLinkHorizontalI = Array(sankeyLinkHorizontalValue37);
    for (let sankeyLinkHorizontalValue64 of nodes) {
      let sankeyLinkHorizontalValue68 = Math.max(
        0,
        Math.min(
          sankeyLinkHorizontalValue37 - 1,
          Math.floor(
            sankeyLinkHorizontalValue10.call(
              null,
              sankeyLinkHorizontalValue64,
              sankeyLinkHorizontalValue37,
            ),
          ),
        ),
      );
      sankeyLinkHorizontalValue64.layer = sankeyLinkHorizontalValue68;
      sankeyLinkHorizontalValue64.x0 =
        sankeyLinkHorizontalValue6 +
        sankeyLinkHorizontalValue68 * __sankeyLinkHorizontalA;
      sankeyLinkHorizontalValue64.x1 =
        sankeyLinkHorizontalValue64.x0 + _sankeyLinkHorizontalN;
      _sankeyLinkHorizontalI[sankeyLinkHorizontalValue68]
        ? _sankeyLinkHorizontalI[sankeyLinkHorizontalValue68].push(
            sankeyLinkHorizontalValue64,
          )
        : (_sankeyLinkHorizontalI[sankeyLinkHorizontalValue68] = [
            sankeyLinkHorizontalValue64,
          ]);
    }
    if (sankeyLinkHorizontalValue11)
      for (let sankeyLinkHorizontalValue93 of _sankeyLinkHorizontalI)
        sankeyLinkHorizontalValue93.sort(sankeyLinkHorizontalValue11);
    return _sankeyLinkHorizontalI;
  }
  function sankeyLinkHorizontalHelper33(sankeyLinkHorizontalParam10) {
    let sankeyLinkHorizontalValue36 = sankeyLinkHorizontalHelper2(
      sankeyLinkHorizontalParam10,
      (sankeyLinkHorizontalParam89) =>
        (_sankeyLinkHorizontalR -
          _sankeyLinkHorizontalA -
          (sankeyLinkHorizontalParam89.length - 1) *
            sankeyLinkHorizontalValue8) /
        sankeyLinkHorizontalHelper3(
          sankeyLinkHorizontalParam89,
          sankeyLinkHorizontalHelper9,
        ),
    );
    for (let sankeyLinkHorizontalValue40 of sankeyLinkHorizontalParam10) {
      let sankeyLinkHorizontalValue49 = _sankeyLinkHorizontalA;
      for (let sankeyLinkHorizontalValue73 of sankeyLinkHorizontalValue40) {
        sankeyLinkHorizontalValue73.y0 = sankeyLinkHorizontalValue49;
        sankeyLinkHorizontalValue73.y1 =
          sankeyLinkHorizontalValue49 +
          sankeyLinkHorizontalValue73.value * sankeyLinkHorizontalValue36;
        sankeyLinkHorizontalValue49 =
          sankeyLinkHorizontalValue73.y1 + sankeyLinkHorizontalValue8;
        for (let sankeyLinkHorizontalValue90 of sankeyLinkHorizontalValue73.sourceLinks)
          sankeyLinkHorizontalValue90.width =
            sankeyLinkHorizontalValue90.value * sankeyLinkHorizontalValue36;
      }
      sankeyLinkHorizontalValue49 =
        (_sankeyLinkHorizontalR -
          sankeyLinkHorizontalValue49 +
          sankeyLinkHorizontalValue8) /
        (sankeyLinkHorizontalValue40.length + 1);
      for (
        let sankeyLinkHorizontalValue82 = 0;
        sankeyLinkHorizontalValue82 < sankeyLinkHorizontalValue40.length;
        ++sankeyLinkHorizontalValue82
      ) {
        let sankeyLinkHorizontalValue91 =
          sankeyLinkHorizontalValue40[sankeyLinkHorizontalValue82];
        sankeyLinkHorizontalValue91.y0 +=
          sankeyLinkHorizontalValue49 * (sankeyLinkHorizontalValue82 + 1);
        sankeyLinkHorizontalValue91.y1 +=
          sankeyLinkHorizontalValue49 * (sankeyLinkHorizontalValue82 + 1);
      }
      sankeyLinkHorizontalHelper40(sankeyLinkHorizontalValue40);
    }
  }
  function sankeyLinkHorizontalHelper34(sankeyLinkHorizontalParam25) {
    let sankeyLinkHorizontalValue62 = sankeyLinkHorizontalHelper32(
      sankeyLinkHorizontalParam25,
    );
    sankeyLinkHorizontalValue8 = Math.min(
      sankeyLinkHorizontalValue7,
      (_sankeyLinkHorizontalR - _sankeyLinkHorizontalA) /
        (sankeyLinkHorizontalHelper1(
          sankeyLinkHorizontalValue62,
          (sankeyLinkHorizontalParam99) => sankeyLinkHorizontalParam99.length,
        ) -
          1),
    );
    sankeyLinkHorizontalHelper33(sankeyLinkHorizontalValue62);
    for (
      let sankeyLinkHorizontalValue76 = 0;
      sankeyLinkHorizontalValue76 < sankeyLinkHorizontalValue15;
      ++sankeyLinkHorizontalValue76
    ) {
      let sankeyLinkHorizontalValue83 = 0.99 ** sankeyLinkHorizontalValue76,
        sankeyLinkHorizontalValue84 = Math.max(
          1 - sankeyLinkHorizontalValue83,
          (sankeyLinkHorizontalValue76 + 1) / sankeyLinkHorizontalValue15,
        );
      sankeyLinkHorizontalHelper35(
        sankeyLinkHorizontalValue62,
        sankeyLinkHorizontalValue83,
        sankeyLinkHorizontalValue84,
      );
      _sankeyLinkHorizontalT(
        sankeyLinkHorizontalValue62,
        sankeyLinkHorizontalValue83,
        sankeyLinkHorizontalValue84,
      );
    }
  }
  function _sankeyLinkHorizontalT(
    sankeyLinkHorizontalParam11,
    sankeyLinkHorizontalParam12,
    sankeyLinkHorizontalParam13,
  ) {
    for (
      let sankeyLinkHorizontalValue38 = 1,
        __sankeyLinkHorizontalA = sankeyLinkHorizontalParam11.length;
      sankeyLinkHorizontalValue38 < __sankeyLinkHorizontalA;
      ++sankeyLinkHorizontalValue38
    ) {
      let ___sankeyLinkHorizontalA =
        sankeyLinkHorizontalParam11[sankeyLinkHorizontalValue38];
      for (let sankeyLinkHorizontalValue56 of ___sankeyLinkHorizontalA) {
        let sankeyLinkHorizontalValue58 = 0,
          sankeyLinkHorizontalValue59 = 0;
        for (let {
          source,
          value: _____sankeyLinkHorizontalA,
        } of sankeyLinkHorizontalValue56.targetLinks) {
          let __sankeyLinkHorizontalO =
            _____sankeyLinkHorizontalA *
            (sankeyLinkHorizontalValue56.layer - source.layer);
          sankeyLinkHorizontalValue58 +=
            sankeyLinkHorizontalHelper41(source, sankeyLinkHorizontalValue56) *
            __sankeyLinkHorizontalO;
          sankeyLinkHorizontalValue59 += __sankeyLinkHorizontalO;
        }
        if (!(sankeyLinkHorizontalValue59 > 0)) continue;
        let ____sankeyLinkHorizontalA =
          (sankeyLinkHorizontalValue58 / sankeyLinkHorizontalValue59 -
            sankeyLinkHorizontalValue56.y0) *
          sankeyLinkHorizontalParam12;
        sankeyLinkHorizontalValue56.y0 += ____sankeyLinkHorizontalA;
        sankeyLinkHorizontalValue56.y1 += ____sankeyLinkHorizontalA;
        sankeyLinkHorizontalHelper39(sankeyLinkHorizontalValue56);
      }
      sankeyLinkHorizontalValue11 === undefined &&
        ___sankeyLinkHorizontalA.sort(sankeyLinkHorizontalHelper8);
      sankeyLinkHorizontalHelper36(
        ___sankeyLinkHorizontalA,
        sankeyLinkHorizontalParam13,
      );
    }
  }
  function sankeyLinkHorizontalHelper35(
    sankeyLinkHorizontalParam14,
    sankeyLinkHorizontalParam15,
    sankeyLinkHorizontalParam16,
  ) {
    for (
      let sankeyLinkHorizontalValue39 = sankeyLinkHorizontalParam14.length - 2;
      sankeyLinkHorizontalValue39 >= 0;
      --sankeyLinkHorizontalValue39
    ) {
      let __sankeyLinkHorizontalA =
        sankeyLinkHorizontalParam14[sankeyLinkHorizontalValue39];
      for (let sankeyLinkHorizontalValue57 of __sankeyLinkHorizontalA) {
        let sankeyLinkHorizontalValue60 = 0,
          sankeyLinkHorizontalValue61 = 0;
        for (let {
          target,
          value: ____sankeyLinkHorizontalA,
        } of sankeyLinkHorizontalValue57.sourceLinks) {
          let __sankeyLinkHorizontalO =
            ____sankeyLinkHorizontalA *
            (target.layer - sankeyLinkHorizontalValue57.layer);
          sankeyLinkHorizontalValue60 +=
            sankeyLinkHorizontalHelper42(sankeyLinkHorizontalValue57, target) *
            __sankeyLinkHorizontalO;
          sankeyLinkHorizontalValue61 += __sankeyLinkHorizontalO;
        }
        if (!(sankeyLinkHorizontalValue61 > 0)) continue;
        let ___sankeyLinkHorizontalA =
          (sankeyLinkHorizontalValue60 / sankeyLinkHorizontalValue61 -
            sankeyLinkHorizontalValue57.y0) *
          sankeyLinkHorizontalParam15;
        sankeyLinkHorizontalValue57.y0 += ___sankeyLinkHorizontalA;
        sankeyLinkHorizontalValue57.y1 += ___sankeyLinkHorizontalA;
        sankeyLinkHorizontalHelper39(sankeyLinkHorizontalValue57);
      }
      sankeyLinkHorizontalValue11 === undefined &&
        __sankeyLinkHorizontalA.sort(sankeyLinkHorizontalHelper8);
      sankeyLinkHorizontalHelper36(
        __sankeyLinkHorizontalA,
        sankeyLinkHorizontalParam16,
      );
    }
  }
  function sankeyLinkHorizontalHelper36(
    sankeyLinkHorizontalParam28,
    sankeyLinkHorizontalParam29,
  ) {
    let sankeyLinkHorizontalValue70 = sankeyLinkHorizontalParam28.length >> 1,
      sankeyLinkHorizontalValue71 =
        sankeyLinkHorizontalParam28[sankeyLinkHorizontalValue70];
    sankeyLinkHorizontalHelper38(
      sankeyLinkHorizontalParam28,
      sankeyLinkHorizontalValue71.y0 - sankeyLinkHorizontalValue8,
      sankeyLinkHorizontalValue70 - 1,
      sankeyLinkHorizontalParam29,
    );
    sankeyLinkHorizontalHelper37(
      sankeyLinkHorizontalParam28,
      sankeyLinkHorizontalValue71.y1 + sankeyLinkHorizontalValue8,
      sankeyLinkHorizontalValue70 + 1,
      sankeyLinkHorizontalParam29,
    );
    sankeyLinkHorizontalHelper38(
      sankeyLinkHorizontalParam28,
      _sankeyLinkHorizontalR,
      sankeyLinkHorizontalParam28.length - 1,
      sankeyLinkHorizontalParam29,
    );
    sankeyLinkHorizontalHelper37(
      sankeyLinkHorizontalParam28,
      _sankeyLinkHorizontalA,
      0,
      sankeyLinkHorizontalParam29,
    );
  }
  function sankeyLinkHorizontalHelper37(
    sankeyLinkHorizontalParam34,
    sankeyLinkHorizontalParam35,
    sankeyLinkHorizontalParam36,
    sankeyLinkHorizontalParam37,
  ) {
    for (
      ;
      sankeyLinkHorizontalParam36 < sankeyLinkHorizontalParam34.length;
      ++sankeyLinkHorizontalParam36
    ) {
      let __sankeyLinkHorizontalA =
          sankeyLinkHorizontalParam34[sankeyLinkHorizontalParam36],
        __sankeyLinkHorizontalO =
          (sankeyLinkHorizontalParam35 - __sankeyLinkHorizontalA.y0) *
          sankeyLinkHorizontalParam37;
      __sankeyLinkHorizontalO > 1e-6 &&
        ((__sankeyLinkHorizontalA.y0 += __sankeyLinkHorizontalO),
        (__sankeyLinkHorizontalA.y1 += __sankeyLinkHorizontalO));
      sankeyLinkHorizontalParam35 =
        __sankeyLinkHorizontalA.y1 + sankeyLinkHorizontalValue8;
    }
  }
  function sankeyLinkHorizontalHelper38(
    sankeyLinkHorizontalParam43,
    sankeyLinkHorizontalParam44,
    sankeyLinkHorizontalParam45,
    sankeyLinkHorizontalParam46,
  ) {
    for (; sankeyLinkHorizontalParam45 >= 0; --sankeyLinkHorizontalParam45) {
      let __sankeyLinkHorizontalA =
          sankeyLinkHorizontalParam43[sankeyLinkHorizontalParam45],
        __sankeyLinkHorizontalO =
          (__sankeyLinkHorizontalA.y1 - sankeyLinkHorizontalParam44) *
          sankeyLinkHorizontalParam46;
      __sankeyLinkHorizontalO > 1e-6 &&
        ((__sankeyLinkHorizontalA.y0 -= __sankeyLinkHorizontalO),
        (__sankeyLinkHorizontalA.y1 -= __sankeyLinkHorizontalO));
      sankeyLinkHorizontalParam44 =
        __sankeyLinkHorizontalA.y0 - sankeyLinkHorizontalValue8;
    }
  }
  function sankeyLinkHorizontalHelper39({ sourceLinks, targetLinks }) {
    if (sankeyLinkHorizontalValue12 === undefined) {
      for (let {
        source: { sourceLinks: _sourceLinks },
      } of targetLinks)
        _sourceLinks.sort(sankeyLinkHorizontalHelper7);
      for (let {
        target: { targetLinks: _targetLinks },
      } of sourceLinks)
        _targetLinks.sort(sankeyLinkHorizontalHelper6);
    }
  }
  function sankeyLinkHorizontalHelper40(sankeyLinkHorizontalParam48) {
    if (sankeyLinkHorizontalValue12 === undefined)
      for (let { sourceLinks, targetLinks } of sankeyLinkHorizontalParam48) {
        sourceLinks.sort(sankeyLinkHorizontalHelper7);
        targetLinks.sort(sankeyLinkHorizontalHelper6);
      }
  }
  function sankeyLinkHorizontalHelper41(
    sankeyLinkHorizontalParam17,
    sankeyLinkHorizontalParam18,
  ) {
    let sankeyLinkHorizontalValue50 =
      sankeyLinkHorizontalParam17.y0 -
      ((sankeyLinkHorizontalParam17.sourceLinks.length - 1) *
        sankeyLinkHorizontalValue8) /
        2;
    for (let {
      target,
      width: __sankeyLinkHorizontalA,
    } of sankeyLinkHorizontalParam17.sourceLinks) {
      if (target === sankeyLinkHorizontalParam18) break;
      sankeyLinkHorizontalValue50 +=
        __sankeyLinkHorizontalA + sankeyLinkHorizontalValue8;
    }
    for (let {
      source,
      width: __sankeyLinkHorizontalA,
    } of sankeyLinkHorizontalParam18.targetLinks) {
      if (source === sankeyLinkHorizontalParam17) break;
      sankeyLinkHorizontalValue50 -= __sankeyLinkHorizontalA;
    }
    return sankeyLinkHorizontalValue50;
  }
  function sankeyLinkHorizontalHelper42(
    sankeyLinkHorizontalParam19,
    sankeyLinkHorizontalParam20,
  ) {
    let sankeyLinkHorizontalValue51 =
      sankeyLinkHorizontalParam20.y0 -
      ((sankeyLinkHorizontalParam20.targetLinks.length - 1) *
        sankeyLinkHorizontalValue8) /
        2;
    for (let {
      source,
      width: __sankeyLinkHorizontalA,
    } of sankeyLinkHorizontalParam20.targetLinks) {
      if (source === sankeyLinkHorizontalParam19) break;
      sankeyLinkHorizontalValue51 +=
        __sankeyLinkHorizontalA + sankeyLinkHorizontalValue8;
    }
    for (let {
      target,
      width: __sankeyLinkHorizontalA,
    } of sankeyLinkHorizontalParam19.sourceLinks) {
      if (target === sankeyLinkHorizontalParam20) break;
      sankeyLinkHorizontalValue51 -= __sankeyLinkHorizontalA;
    }
    return sankeyLinkHorizontalValue51;
  }
  return sankeyLinkHorizontalHelper27;
}
var sankeyLinkHorizontalValue1 = Math.PI,
  sankeyLinkHorizontalValue2 = 2 * sankeyLinkHorizontalValue1,
  sankeyLinkHorizontalValue4 = sankeyLinkHorizontalValue2 - 1e-6;
function sankeyLinkHorizontalHelper15() {
  this._x0 = this._y0 = this._x1 = this._y1 = null;
  this._ = "";
}
function sankeyLinkHorizontalHelper16() {
  return new sankeyLinkHorizontalHelper15();
}
sankeyLinkHorizontalHelper15.prototype =
  sankeyLinkHorizontalHelper16.prototype = {
    constructor: sankeyLinkHorizontalHelper15,
    moveTo: function (
      sankeyLinkHorizontalParam53,
      sankeyLinkHorizontalParam54,
    ) {
      this._ +=
        "M" +
        (this._x0 = this._x1 = +sankeyLinkHorizontalParam53) +
        "," +
        (this._y0 = this._y1 = +sankeyLinkHorizontalParam54);
    },
    closePath: function () {
      this._x1 !== null &&
        ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
    },
    lineTo: function (
      sankeyLinkHorizontalParam70,
      sankeyLinkHorizontalParam71,
    ) {
      this._ +=
        "L" +
        (this._x1 = +sankeyLinkHorizontalParam70) +
        "," +
        (this._y1 = +sankeyLinkHorizontalParam71);
    },
    quadraticCurveTo: function (
      sankeyLinkHorizontalParam49,
      sankeyLinkHorizontalParam50,
      sankeyLinkHorizontalParam51,
      sankeyLinkHorizontalParam52,
    ) {
      this._ +=
        "Q" +
        +sankeyLinkHorizontalParam49 +
        "," +
        +sankeyLinkHorizontalParam50 +
        "," +
        (this._x1 = +sankeyLinkHorizontalParam51) +
        "," +
        (this._y1 = +sankeyLinkHorizontalParam52);
    },
    bezierCurveTo: function (
      sankeyLinkHorizontalParam39,
      sankeyLinkHorizontalParam40,
      sankeyLinkHorizontalParam41,
      sankeyLinkHorizontalParam42,
      _sankeyLinkHorizontalA,
      _sankeyLinkHorizontalO,
    ) {
      this._ +=
        "C" +
        +sankeyLinkHorizontalParam39 +
        "," +
        +sankeyLinkHorizontalParam40 +
        "," +
        +sankeyLinkHorizontalParam41 +
        "," +
        +sankeyLinkHorizontalParam42 +
        "," +
        (this._x1 = +_sankeyLinkHorizontalA) +
        "," +
        (this._y1 = +_sankeyLinkHorizontalO);
    },
    arcTo: function (
      sankeyLinkHorizontalParam2,
      sankeyLinkHorizontalParam3,
      sankeyLinkHorizontalParam4,
      sankeyLinkHorizontalParam5,
      _sankeyLinkHorizontalA,
    ) {
      sankeyLinkHorizontalParam2 = +sankeyLinkHorizontalParam2;
      sankeyLinkHorizontalParam3 = +sankeyLinkHorizontalParam3;
      sankeyLinkHorizontalParam4 = +sankeyLinkHorizontalParam4;
      sankeyLinkHorizontalParam5 = +sankeyLinkHorizontalParam5;
      _sankeyLinkHorizontalA = +_sankeyLinkHorizontalA;
      var _sankeyLinkHorizontalO = this._x1,
        _sankeyLinkHorizontalI = this._y1,
        _sankeyLinkHorizontalR =
          sankeyLinkHorizontalParam4 - sankeyLinkHorizontalParam2,
        sankeyLinkHorizontalValue19 =
          sankeyLinkHorizontalParam5 - sankeyLinkHorizontalParam3,
        sankeyLinkHorizontalValue20 =
          _sankeyLinkHorizontalO - sankeyLinkHorizontalParam2,
        sankeyLinkHorizontalValue21 =
          _sankeyLinkHorizontalI - sankeyLinkHorizontalParam3,
        sankeyLinkHorizontalValue22 =
          sankeyLinkHorizontalValue20 * sankeyLinkHorizontalValue20 +
          sankeyLinkHorizontalValue21 * sankeyLinkHorizontalValue21;
      if (_sankeyLinkHorizontalA < 0)
        throw Error("negative radius: " + _sankeyLinkHorizontalA);
      if (this._x1 === null)
        this._ +=
          "M" +
          (this._x1 = sankeyLinkHorizontalParam2) +
          "," +
          (this._y1 = sankeyLinkHorizontalParam3);
      else if (sankeyLinkHorizontalValue22 > 1e-6)
        if (
          !(
            Math.abs(
              sankeyLinkHorizontalValue21 * _sankeyLinkHorizontalR -
                sankeyLinkHorizontalValue19 * sankeyLinkHorizontalValue20,
            ) > 1e-6
          ) ||
          !_sankeyLinkHorizontalA
        )
          this._ +=
            "L" +
            (this._x1 = sankeyLinkHorizontalParam2) +
            "," +
            (this._y1 = sankeyLinkHorizontalParam3);
        else {
          var sankeyLinkHorizontalValue23 =
              sankeyLinkHorizontalParam4 - _sankeyLinkHorizontalO,
            sankeyLinkHorizontalValue24 =
              sankeyLinkHorizontalParam5 - _sankeyLinkHorizontalI,
            sankeyLinkHorizontalValue25 =
              _sankeyLinkHorizontalR * _sankeyLinkHorizontalR +
              sankeyLinkHorizontalValue19 * sankeyLinkHorizontalValue19,
            sankeyLinkHorizontalValue26 =
              sankeyLinkHorizontalValue23 * sankeyLinkHorizontalValue23 +
              sankeyLinkHorizontalValue24 * sankeyLinkHorizontalValue24,
            sankeyLinkHorizontalValue27 = Math.sqrt(
              sankeyLinkHorizontalValue25,
            ),
            sankeyLinkHorizontalValue28 = Math.sqrt(
              sankeyLinkHorizontalValue22,
            ),
            _sankeyLinkHorizontalN =
              _sankeyLinkHorizontalA *
              Math.tan(
                (sankeyLinkHorizontalValue1 -
                  Math.acos(
                    (sankeyLinkHorizontalValue25 +
                      sankeyLinkHorizontalValue22 -
                      sankeyLinkHorizontalValue26) /
                      (2 *
                        sankeyLinkHorizontalValue27 *
                        sankeyLinkHorizontalValue28),
                  )) /
                  2,
              ),
            sankeyLinkHorizontalValue29 =
              _sankeyLinkHorizontalN / sankeyLinkHorizontalValue28,
            sankeyLinkHorizontalValue30 =
              _sankeyLinkHorizontalN / sankeyLinkHorizontalValue27;
          Math.abs(sankeyLinkHorizontalValue29 - 1) > 1e-6 &&
            (this._ +=
              "L" +
              (sankeyLinkHorizontalParam2 +
                sankeyLinkHorizontalValue29 * sankeyLinkHorizontalValue20) +
              "," +
              (sankeyLinkHorizontalParam3 +
                sankeyLinkHorizontalValue29 * sankeyLinkHorizontalValue21));
          this._ +=
            "A" +
            _sankeyLinkHorizontalA +
            "," +
            _sankeyLinkHorizontalA +
            ",0,0," +
            +(
              sankeyLinkHorizontalValue21 * sankeyLinkHorizontalValue23 >
              sankeyLinkHorizontalValue20 * sankeyLinkHorizontalValue24
            ) +
            "," +
            (this._x1 =
              sankeyLinkHorizontalParam2 +
              sankeyLinkHorizontalValue30 * _sankeyLinkHorizontalR) +
            "," +
            (this._y1 =
              sankeyLinkHorizontalParam3 +
              sankeyLinkHorizontalValue30 * sankeyLinkHorizontalValue19);
        }
    },
    arc: function (
      sankeyLinkHorizontalParam6,
      sankeyLinkHorizontalParam7,
      sankeyLinkHorizontalParam8,
      sankeyLinkHorizontalParam9,
      _sankeyLinkHorizontalA,
      _sankeyLinkHorizontalO,
    ) {
      sankeyLinkHorizontalParam6 = +sankeyLinkHorizontalParam6;
      sankeyLinkHorizontalParam7 = +sankeyLinkHorizontalParam7;
      sankeyLinkHorizontalParam8 = +sankeyLinkHorizontalParam8;
      _sankeyLinkHorizontalO = !!_sankeyLinkHorizontalO;
      var _sankeyLinkHorizontalI =
          sankeyLinkHorizontalParam8 * Math.cos(sankeyLinkHorizontalParam9),
        _sankeyLinkHorizontalR =
          sankeyLinkHorizontalParam8 * Math.sin(sankeyLinkHorizontalParam9),
        sankeyLinkHorizontalValue31 =
          sankeyLinkHorizontalParam6 + _sankeyLinkHorizontalI,
        sankeyLinkHorizontalValue32 =
          sankeyLinkHorizontalParam7 + _sankeyLinkHorizontalR,
        sankeyLinkHorizontalValue33 = 1 ^ _sankeyLinkHorizontalO,
        sankeyLinkHorizontalValue34 = _sankeyLinkHorizontalO
          ? sankeyLinkHorizontalParam9 - _sankeyLinkHorizontalA
          : _sankeyLinkHorizontalA - sankeyLinkHorizontalParam9;
      if (sankeyLinkHorizontalParam8 < 0)
        throw Error("negative radius: " + sankeyLinkHorizontalParam8);
      this._x1 === null
        ? (this._ +=
            "M" +
            sankeyLinkHorizontalValue31 +
            "," +
            sankeyLinkHorizontalValue32)
        : (Math.abs(this._x1 - sankeyLinkHorizontalValue31) > 1e-6 ||
            Math.abs(this._y1 - sankeyLinkHorizontalValue32) > 1e-6) &&
          (this._ +=
            "L" +
            sankeyLinkHorizontalValue31 +
            "," +
            sankeyLinkHorizontalValue32);
      sankeyLinkHorizontalParam8 &&
        (sankeyLinkHorizontalValue34 < 0 &&
          (sankeyLinkHorizontalValue34 =
            (sankeyLinkHorizontalValue34 % sankeyLinkHorizontalValue2) +
            sankeyLinkHorizontalValue2),
        sankeyLinkHorizontalValue34 > sankeyLinkHorizontalValue4
          ? (this._ +=
              "A" +
              sankeyLinkHorizontalParam8 +
              "," +
              sankeyLinkHorizontalParam8 +
              ",0,1," +
              sankeyLinkHorizontalValue33 +
              "," +
              (sankeyLinkHorizontalParam6 - _sankeyLinkHorizontalI) +
              "," +
              (sankeyLinkHorizontalParam7 - _sankeyLinkHorizontalR) +
              "A" +
              sankeyLinkHorizontalParam8 +
              "," +
              sankeyLinkHorizontalParam8 +
              ",0,1," +
              sankeyLinkHorizontalValue33 +
              "," +
              (this._x1 = sankeyLinkHorizontalValue31) +
              "," +
              (this._y1 = sankeyLinkHorizontalValue32))
          : sankeyLinkHorizontalValue34 > 1e-6 &&
            (this._ +=
              "A" +
              sankeyLinkHorizontalParam8 +
              "," +
              sankeyLinkHorizontalParam8 +
              ",0," +
              +(sankeyLinkHorizontalValue34 >= sankeyLinkHorizontalValue1) +
              "," +
              sankeyLinkHorizontalValue33 +
              "," +
              (this._x1 =
                sankeyLinkHorizontalParam6 +
                sankeyLinkHorizontalParam8 * Math.cos(_sankeyLinkHorizontalA)) +
              "," +
              (this._y1 =
                sankeyLinkHorizontalParam7 +
                sankeyLinkHorizontalParam8 *
                  Math.sin(_sankeyLinkHorizontalA))));
    },
    rect: function (
      sankeyLinkHorizontalParam30,
      sankeyLinkHorizontalParam31,
      sankeyLinkHorizontalParam32,
      sankeyLinkHorizontalParam33,
    ) {
      this._ +=
        "M" +
        (this._x0 = this._x1 = +sankeyLinkHorizontalParam30) +
        "," +
        (this._y0 = this._y1 = +sankeyLinkHorizontalParam31) +
        "h" +
        +sankeyLinkHorizontalParam32 +
        "v" +
        +sankeyLinkHorizontalParam33 +
        "h" +
        -sankeyLinkHorizontalParam32 +
        "Z";
    },
    toString: function () {
      return this._;
    },
  };
function sankeyLinkHorizontalHelper17(sankeyLinkHorizontalParam83) {
  return function () {
    return sankeyLinkHorizontalParam83;
  };
}
function sankeyLinkHorizontalHelper18(sankeyLinkHorizontalParam97) {
  return sankeyLinkHorizontalParam97[0];
}
function sankeyLinkHorizontalHelper19(sankeyLinkHorizontalParam98) {
  return sankeyLinkHorizontalParam98[1];
}
var sankeyLinkHorizontalValue5 = Array.prototype.slice;
function sankeyLinkHorizontalHelper20(sankeyLinkHorizontalParam90) {
  return sankeyLinkHorizontalParam90.source;
}
function sankeyLinkHorizontalHelper21(event) {
  return event.target;
}
function sankeyLinkHorizontalHelper22(sankeyLinkHorizontalParam1) {
  var sankeyLinkHorizontalValue16 = sankeyLinkHorizontalHelper20,
    sankeyLinkHorizontalValue17 = sankeyLinkHorizontalHelper21,
    sankeyLinkHorizontalValue18 = sankeyLinkHorizontalHelper18,
    _sankeyLinkHorizontalA = sankeyLinkHorizontalHelper19,
    _sankeyLinkHorizontalO = null;
  function _sankeyLinkHorizontalI() {
    var __sankeyLinkHorizontalI,
      _sankeyLinkHorizontalR = sankeyLinkHorizontalValue5.call(arguments),
      sankeyLinkHorizontalValue41 = sankeyLinkHorizontalValue16.apply(
        this,
        _sankeyLinkHorizontalR,
      ),
      sankeyLinkHorizontalValue42 = sankeyLinkHorizontalValue17.apply(
        this,
        _sankeyLinkHorizontalR,
      );
    if (
      ((_sankeyLinkHorizontalO ||= __sankeyLinkHorizontalI =
        sankeyLinkHorizontalHelper16()),
      sankeyLinkHorizontalParam1(
        _sankeyLinkHorizontalO,
        +sankeyLinkHorizontalValue18.apply(
          this,
          ((_sankeyLinkHorizontalR[0] = sankeyLinkHorizontalValue41),
          _sankeyLinkHorizontalR),
        ),
        +_sankeyLinkHorizontalA.apply(this, _sankeyLinkHorizontalR),
        +sankeyLinkHorizontalValue18.apply(
          this,
          ((_sankeyLinkHorizontalR[0] = sankeyLinkHorizontalValue42),
          _sankeyLinkHorizontalR),
        ),
        +_sankeyLinkHorizontalA.apply(this, _sankeyLinkHorizontalR),
      ),
      __sankeyLinkHorizontalI)
    )
      return (
        (_sankeyLinkHorizontalO = null),
        __sankeyLinkHorizontalI + "" || null
      );
  }
  return (
    (_sankeyLinkHorizontalI.source = function (sankeyLinkHorizontalParam80) {
      return arguments.length
        ? ((sankeyLinkHorizontalValue16 = sankeyLinkHorizontalParam80),
          _sankeyLinkHorizontalI)
        : sankeyLinkHorizontalValue16;
    }),
    (_sankeyLinkHorizontalI.target = function (sankeyLinkHorizontalParam81) {
      return arguments.length
        ? ((sankeyLinkHorizontalValue17 = sankeyLinkHorizontalParam81),
          _sankeyLinkHorizontalI)
        : sankeyLinkHorizontalValue17;
    }),
    (_sankeyLinkHorizontalI.x = function (sankeyLinkHorizontalParam57) {
      return arguments.length
        ? ((sankeyLinkHorizontalValue18 =
            typeof sankeyLinkHorizontalParam57 == "function"
              ? sankeyLinkHorizontalParam57
              : sankeyLinkHorizontalHelper17(+sankeyLinkHorizontalParam57)),
          _sankeyLinkHorizontalI)
        : sankeyLinkHorizontalValue18;
    }),
    (_sankeyLinkHorizontalI.y = function (sankeyLinkHorizontalParam58) {
      return arguments.length
        ? ((_sankeyLinkHorizontalA =
            typeof sankeyLinkHorizontalParam58 == "function"
              ? sankeyLinkHorizontalParam58
              : sankeyLinkHorizontalHelper17(+sankeyLinkHorizontalParam58)),
          _sankeyLinkHorizontalI)
        : _sankeyLinkHorizontalA;
    }),
    (_sankeyLinkHorizontalI.context = function (sankeyLinkHorizontalParam74) {
      return arguments.length
        ? ((_sankeyLinkHorizontalO = sankeyLinkHorizontalParam74 ?? null),
          _sankeyLinkHorizontalI)
        : _sankeyLinkHorizontalO;
    }),
    _sankeyLinkHorizontalI
  );
}
function sankeyLinkHorizontalHelper23(
  sankeyLinkHorizontalParam59,
  sankeyLinkHorizontalParam60,
  sankeyLinkHorizontalParam61,
  sankeyLinkHorizontalParam62,
  _sankeyLinkHorizontalA,
) {
  sankeyLinkHorizontalParam59.moveTo(
    sankeyLinkHorizontalParam60,
    sankeyLinkHorizontalParam61,
  );
  sankeyLinkHorizontalParam59.bezierCurveTo(
    (sankeyLinkHorizontalParam60 =
      (sankeyLinkHorizontalParam60 + sankeyLinkHorizontalParam62) / 2),
    sankeyLinkHorizontalParam61,
    sankeyLinkHorizontalParam60,
    _sankeyLinkHorizontalA,
    sankeyLinkHorizontalParam62,
    _sankeyLinkHorizontalA,
  );
}
function sankeyLinkHorizontalHelper24() {
  return sankeyLinkHorizontalHelper22(sankeyLinkHorizontalHelper23);
}
function sankeyLinkHorizontalHelper25(sankeyLinkHorizontalParam84) {
  return [
    sankeyLinkHorizontalParam84.source.x1,
    sankeyLinkHorizontalParam84.y0,
  ];
}
function sankeyLinkHorizontalHelper26(event) {
  return [event.target.x0, event.y1];
}
export function sankeyLinkHorizontalT() {
  return sankeyLinkHorizontalHelper24()
    .source(sankeyLinkHorizontalHelper25)
    .target(sankeyLinkHorizontalHelper26);
}
export { sankeyLinkHorizontalI };
