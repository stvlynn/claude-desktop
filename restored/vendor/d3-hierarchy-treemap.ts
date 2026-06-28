// Restored from ref/webview/assets/treemap-CMHfdOyb.js
// Treemap chunk restored from the Codex webview bundle.
function treemapHelper1(treemapParam31) {
  var treemapValue75 = 0,
    treemapValue76 = treemapParam31.children,
    treemapValue77 = treemapValue76 && treemapValue76.length;
  if (!treemapValue77) treemapValue75 = 1;
  else
    for (; --treemapValue77 >= 0; )
      treemapValue75 += treemapValue76[treemapValue77].value;
  treemapParam31.value = treemapValue75;
}
function treemapHelper2() {
  return this.eachAfter(treemapHelper1);
}
function treemapHelper3(treemapParam37, treemapParam38) {
  let treemapValue84 = -1;
  for (let treemapValue90 of this)
    treemapParam37.call(treemapParam38, treemapValue90, ++treemapValue84, this);
  return this;
}
function treemapHelper4(treemapParam12, treemapParam13) {
  for (
    var treemapValue53 = this,
      treemapValue54 = [treemapValue53],
      treemapValue55,
      treemapValue56,
      treemapValue57 = -1;
    (treemapValue53 = treemapValue54.pop());

  )
    if (
      (treemapParam12.call(
        treemapParam13,
        treemapValue53,
        ++treemapValue57,
        this,
      ),
      (treemapValue55 = treemapValue53.children))
    )
      for (
        treemapValue56 = treemapValue55.length - 1;
        treemapValue56 >= 0;
        --treemapValue56
      )
        treemapValue54.push(treemapValue55[treemapValue56]);
  return this;
}
function treemapHelper5(treemapParam10, treemapParam11) {
  for (
    var treemapValue40 = this,
      treemapValue41 = [treemapValue40],
      treemapValue42 = [],
      treemapValue43,
      treemapValue44,
      treemapValue45,
      treemapValue46 = -1;
    (treemapValue40 = treemapValue41.pop());

  )
    if (
      (treemapValue42.push(treemapValue40),
      (treemapValue43 = treemapValue40.children))
    )
      for (
        treemapValue44 = 0, treemapValue45 = treemapValue43.length;
        treemapValue44 < treemapValue45;
        ++treemapValue44
      )
        treemapValue41.push(treemapValue43[treemapValue44]);
  for (; (treemapValue40 = treemapValue42.pop()); )
    treemapParam10.call(treemapParam11, treemapValue40, ++treemapValue46, this);
  return this;
}
function treemapHelper6(treemapParam39, treemapParam40) {
  let treemapValue85 = -1;
  for (let treemapValue89 of this)
    if (
      treemapParam39.call(
        treemapParam40,
        treemapValue89,
        ++treemapValue85,
        this,
      )
    )
      return treemapValue89;
}
function treemapHelper7(treemapParam27) {
  return this.eachAfter(function (treemapParam32) {
    for (
      var treemapValue80 = +treemapParam27(treemapParam32.data) || 0,
        treemapValue81 = treemapParam32.children,
        treemapValue82 = treemapValue81 && treemapValue81.length;
      --treemapValue82 >= 0;

    )
      treemapValue80 += treemapValue81[treemapValue82].value;
    treemapParam32.value = treemapValue80;
  });
}
function treemapHelper8(treemapParam35) {
  return this.eachBefore(function (treemapParam54) {
    treemapParam54.children && treemapParam54.children.sort(treemapParam35);
  });
}
function treemapHelper9(treemapParam26) {
  for (
    var treemapValue71 = this,
      treemapValue72 = treemapHelper10(treemapValue71, treemapParam26),
      treemapValue73 = [treemapValue71];
    treemapValue71 !== treemapValue72;

  ) {
    treemapValue71 = treemapValue71.parent;
    treemapValue73.push(treemapValue71);
  }
  for (
    var treemapValue74 = treemapValue73.length;
    treemapParam26 !== treemapValue72;

  ) {
    treemapValue73.splice(treemapValue74, 0, treemapParam26);
    treemapParam26 = treemapParam26.parent;
  }
  return treemapValue73;
}
function treemapHelper10(treemapParam14, treemapParam15) {
  if (treemapParam14 === treemapParam15) return treemapParam14;
  var treemapValue58 = treemapParam14.ancestors(),
    treemapValue59 = treemapParam15.ancestors(),
    treemapValue60 = null;
  for (
    treemapParam14 = treemapValue58.pop(),
      treemapParam15 = treemapValue59.pop();
    treemapParam14 === treemapParam15;

  ) {
    treemapValue60 = treemapParam14;
    treemapParam14 = treemapValue58.pop();
    treemapParam15 = treemapValue59.pop();
  }
  return treemapValue60;
}
function treemapHelper11() {
  for (
    var treemapValue87 = this, treemapValue88 = [treemapValue87];
    (treemapValue87 = treemapValue87.parent);

  )
    treemapValue88.push(treemapValue87);
  return treemapValue88;
}
function treemapHelper12() {
  return Array.from(this);
}
function treemapHelper13() {
  var treemapValue83 = [];
  return (
    this.eachBefore(function (treemapParam62) {
      treemapParam62.children || treemapValue83.push(treemapParam62);
    }),
    treemapValue83
  );
}
function treemapHelper14() {
  var treemapValue78 = this,
    treemapValue79 = [];
  return (
    treemapValue78.each(function (treemapParam50) {
      treemapParam50 !== treemapValue78 &&
        treemapValue79.push({
          source: treemapParam50.parent,
          target: treemapParam50,
        });
    }),
    treemapValue79
  );
}
function* treemapHelper15() {
  var treemapValue47 = this,
    treemapValue48,
    treemapValue49 = [treemapValue47],
    treemapValue50,
    treemapValue51,
    treemapValue52;
  do
    for (
      treemapValue48 = treemapValue49.reverse(), treemapValue49 = [];
      (treemapValue47 = treemapValue48.pop());

    )
      if ((yield treemapValue47, (treemapValue50 = treemapValue47.children)))
        for (
          treemapValue51 = 0, treemapValue52 = treemapValue50.length;
          treemapValue51 < treemapValue52;
          ++treemapValue51
        )
          treemapValue49.push(treemapValue50[treemapValue51]);
  while (treemapValue49.length);
}
function treemapA(treemapParam7, treemapParam8) {
  treemapParam7 instanceof Map
    ? ((treemapParam7 = [undefined, treemapParam7]),
      treemapParam8 === undefined && (treemapParam8 = treemapHelper18))
    : treemapParam8 === undefined && (treemapParam8 = treemapHelper17);
  for (
    var treemapValue28 = new treemapHelper21(treemapParam7),
      treemapValue29,
      treemapValue30 = [treemapValue28],
      treemapValue31,
      treemapValue32,
      treemapValue33,
      treemapValue34;
    (treemapValue29 = treemapValue30.pop());

  )
    if (
      (treemapValue32 = treemapParam8(treemapValue29.data)) &&
      (treemapValue34 = (treemapValue32 = Array.from(treemapValue32)).length)
    )
      for (
        treemapValue29.children = treemapValue32,
          treemapValue33 = treemapValue34 - 1;
        treemapValue33 >= 0;
        --treemapValue33
      ) {
        treemapValue30.push(
          (treemapValue31 = treemapValue32[treemapValue33] =
            new treemapHelper21(treemapValue32[treemapValue33])),
        );
        treemapValue31.parent = treemapValue29;
        treemapValue31.depth = treemapValue29.depth + 1;
      }
  return treemapValue28.eachBefore(treemapHelper20);
}
function treemapHelper16() {
  return treemapA(this).eachBefore(treemapHelper19);
}
function treemapHelper17(treemapParam63) {
  return treemapParam63.children;
}
function treemapHelper18(treemapParam52) {
  return Array.isArray(treemapParam52) ? treemapParam52[1] : null;
}
function treemapHelper19(treemapParam36) {
  treemapParam36.data.value !== undefined &&
    (treemapParam36.value = treemapParam36.data.value);
  treemapParam36.data = treemapParam36.data.data;
}
function treemapHelper20(treemapParam46) {
  var treemapValue86 = 0;
  do treemapParam46.height = treemapValue86;
  while (
    (treemapParam46 = treemapParam46.parent) &&
    treemapParam46.height < ++treemapValue86
  );
}
function treemapHelper21(treemapParam47) {
  this.data = treemapParam47;
  this.depth = this.height = 0;
  this.parent = null;
}
treemapHelper21.prototype = treemapA.prototype = {
  constructor: treemapHelper21,
  count: treemapHelper2,
  each: treemapHelper3,
  eachAfter: treemapHelper5,
  eachBefore: treemapHelper4,
  find: treemapHelper6,
  sum: treemapHelper7,
  sort: treemapHelper8,
  path: treemapHelper9,
  ancestors: treemapHelper11,
  descendants: treemapHelper12,
  leaves: treemapHelper13,
  links: treemapHelper14,
  copy: treemapHelper16,
  [Symbol.iterator]: treemapHelper15,
};
function treemapHelper22(treemapParam49) {
  if (typeof treemapParam49 != "function") throw Error();
  return treemapParam49;
}
function treemapHelper23() {
  return 0;
}
function treemapHelper24(treemapParam55) {
  return function () {
    return treemapParam55;
  };
}
function treemapI(treemapParam30) {
  treemapParam30.x0 = Math.round(treemapParam30.x0);
  treemapParam30.y0 = Math.round(treemapParam30.y0);
  treemapParam30.x1 = Math.round(treemapParam30.x1);
  treemapParam30.y1 = Math.round(treemapParam30.y1);
}
function treemapR(
  treemapParam16,
  treemapParam17,
  treemapParam18,
  treemapParam19,
  treemapParam20,
) {
  for (
    var treemapValue61 = treemapParam16.children,
      treemapValue62,
      treemapValue63 = -1,
      treemapValue64 = treemapValue61.length,
      treemapValue65 =
        treemapParam16.value &&
        (treemapParam19 - treemapParam17) / treemapParam16.value;
    ++treemapValue63 < treemapValue64;

  ) {
    treemapValue62 = treemapValue61[treemapValue63];
    treemapValue62.y0 = treemapParam18;
    treemapValue62.y1 = treemapParam20;
    treemapValue62.x0 = treemapParam17;
    treemapValue62.x1 = treemapParam17 += treemapValue62.value * treemapValue65;
  }
}
function treemapHelper25(
  treemapParam21,
  treemapParam22,
  treemapParam23,
  treemapParam24,
  treemapParam25,
) {
  for (
    var treemapValue66 = treemapParam21.children,
      treemapValue67,
      treemapValue68 = -1,
      treemapValue69 = treemapValue66.length,
      treemapValue70 =
        treemapParam21.value &&
        (treemapParam25 - treemapParam23) / treemapParam21.value;
    ++treemapValue68 < treemapValue69;

  ) {
    treemapValue67 = treemapValue66[treemapValue68];
    treemapValue67.x0 = treemapParam22;
    treemapValue67.x1 = treemapParam24;
    treemapValue67.y0 = treemapParam23;
    treemapValue67.y1 = treemapParam23 += treemapValue67.value * treemapValue70;
  }
}
var treemapValue1 = (1 + Math.sqrt(5)) / 2;
function treemapHelper26(
  treemapParam1,
  treemapParam2,
  treemapParam3,
  treemapParam4,
  treemapParam5,
  treemapParam6,
) {
  for (
    var treemapValue12 = [],
      treemapValue13 = treemapParam2.children,
      treemapValue14,
      treemapValue15,
      treemapValue16 = 0,
      treemapValue17 = 0,
      treemapValue18 = treemapValue13.length,
      treemapValue19,
      treemapValue20,
      _treemapA = treemapParam2.value,
      treemapValue21,
      treemapValue22,
      treemapValue23,
      treemapValue24,
      treemapValue25,
      treemapValue26,
      treemapValue27;
    treemapValue16 < treemapValue18;

  ) {
    treemapValue19 = treemapParam5 - treemapParam3;
    treemapValue20 = treemapParam6 - treemapParam4;
    do treemapValue21 = treemapValue13[treemapValue17++].value;
    while (!treemapValue21 && treemapValue17 < treemapValue18);
    for (
      treemapValue22 = treemapValue23 = treemapValue21,
        treemapValue26 =
          Math.max(
            treemapValue20 / treemapValue19,
            treemapValue19 / treemapValue20,
          ) /
          (_treemapA * treemapParam1),
        treemapValue27 = treemapValue21 * treemapValue21 * treemapValue26,
        treemapValue25 = Math.max(
          treemapValue23 / treemapValue27,
          treemapValue27 / treemapValue22,
        );
      treemapValue17 < treemapValue18;
      ++treemapValue17
    ) {
      if (
        ((treemapValue21 += treemapValue15 =
          treemapValue13[treemapValue17].value),
        treemapValue15 < treemapValue22 && (treemapValue22 = treemapValue15),
        treemapValue15 > treemapValue23 && (treemapValue23 = treemapValue15),
        (treemapValue27 = treemapValue21 * treemapValue21 * treemapValue26),
        (treemapValue24 = Math.max(
          treemapValue23 / treemapValue27,
          treemapValue27 / treemapValue22,
        )),
        treemapValue24 > treemapValue25)
      ) {
        treemapValue21 -= treemapValue15;
        break;
      }
      treemapValue25 = treemapValue24;
    }
    treemapValue12.push(
      (treemapValue14 = {
        value: treemapValue21,
        dice: treemapValue19 < treemapValue20,
        children: treemapValue13.slice(treemapValue16, treemapValue17),
      }),
    );
    treemapValue14.dice
      ? treemapR(
          treemapValue14,
          treemapParam3,
          treemapParam4,
          treemapParam5,
          _treemapA
            ? (treemapParam4 += (treemapValue20 * treemapValue21) / _treemapA)
            : treemapParam6,
        )
      : treemapHelper25(
          treemapValue14,
          treemapParam3,
          treemapParam4,
          _treemapA
            ? (treemapParam3 += (treemapValue19 * treemapValue21) / _treemapA)
            : treemapParam5,
          treemapParam6,
        );
    _treemapA -= treemapValue21;
    treemapValue16 = treemapValue17;
  }
  return treemapValue12;
}
var treemapN = (function treemapHelper29(treemapParam29) {
  function treemapHelper30(
    treemapParam56,
    treemapParam57,
    treemapParam58,
    treemapParam59,
    treemapParam60,
  ) {
    treemapHelper26(
      treemapParam29,
      treemapParam56,
      treemapParam57,
      treemapParam58,
      treemapParam59,
      treemapParam60,
    );
  }
  return (
    (treemapHelper30.ratio = function (treemapParam61) {
      return treemapHelper29(
        (treemapParam61 = +treemapParam61) > 1 ? treemapParam61 : 1,
      );
    }),
    treemapHelper30
  );
})(treemapValue1);
export function treemapT() {
  var treemapValue2 = treemapN,
    treemapValue3 = false,
    treemapValue4 = 1,
    treemapValue5 = 1,
    treemapValue6 = [0],
    treemapValue7 = treemapHelper23,
    treemapValue8 = treemapHelper23,
    treemapValue9 = treemapHelper23,
    treemapValue10 = treemapHelper23,
    treemapValue11 = treemapHelper23;
  function treemapHelper27(treemapParam33) {
    return (
      (treemapParam33.x0 = treemapParam33.y0 = 0),
      (treemapParam33.x1 = treemapValue4),
      (treemapParam33.y1 = treemapValue5),
      treemapParam33.eachBefore(treemapHelper28),
      (treemapValue6 = [0]),
      treemapValue3 && treemapParam33.eachBefore(treemapI),
      treemapParam33
    );
  }
  function treemapHelper28(treemapParam9) {
    var treemapValue35 = treemapValue6[treemapParam9.depth],
      treemapValue36 = treemapParam9.x0 + treemapValue35,
      treemapValue37 = treemapParam9.y0 + treemapValue35,
      treemapValue38 = treemapParam9.x1 - treemapValue35,
      treemapValue39 = treemapParam9.y1 - treemapValue35;
    treemapValue38 < treemapValue36 &&
      (treemapValue36 = treemapValue38 = (treemapValue36 + treemapValue38) / 2);
    treemapValue39 < treemapValue37 &&
      (treemapValue37 = treemapValue39 = (treemapValue37 + treemapValue39) / 2);
    treemapParam9.x0 = treemapValue36;
    treemapParam9.y0 = treemapValue37;
    treemapParam9.x1 = treemapValue38;
    treemapParam9.y1 = treemapValue39;
    treemapParam9.children &&
      ((treemapValue35 = treemapValue6[treemapParam9.depth + 1] =
        treemapValue7(treemapParam9) / 2),
      (treemapValue36 += treemapValue11(treemapParam9) - treemapValue35),
      (treemapValue37 += treemapValue8(treemapParam9) - treemapValue35),
      (treemapValue38 -= treemapValue9(treemapParam9) - treemapValue35),
      (treemapValue39 -= treemapValue10(treemapParam9) - treemapValue35),
      treemapValue38 < treemapValue36 &&
        (treemapValue36 = treemapValue38 =
          (treemapValue36 + treemapValue38) / 2),
      treemapValue39 < treemapValue37 &&
        (treemapValue37 = treemapValue39 =
          (treemapValue37 + treemapValue39) / 2),
      treemapValue2(
        treemapParam9,
        treemapValue36,
        treemapValue37,
        treemapValue38,
        treemapValue39,
      ));
  }
  return (
    (treemapHelper27.round = function (treemapParam53) {
      return arguments.length
        ? ((treemapValue3 = !!treemapParam53), treemapHelper27)
        : treemapValue3;
    }),
    (treemapHelper27.size = function (treemapParam48) {
      return arguments.length
        ? ((treemapValue4 = +treemapParam48[0]),
          (treemapValue5 = +treemapParam48[1]),
          treemapHelper27)
        : [treemapValue4, treemapValue5];
    }),
    (treemapHelper27.tile = function (treemapParam51) {
      return arguments.length
        ? ((treemapValue2 = treemapHelper22(treemapParam51)), treemapHelper27)
        : treemapValue2;
    }),
    (treemapHelper27.padding = function (treemapParam34) {
      return arguments.length
        ? treemapHelper27
            .paddingInner(treemapParam34)
            .paddingOuter(treemapParam34)
        : treemapHelper27.paddingInner();
    }),
    (treemapHelper27.paddingInner = function (treemapParam41) {
      return arguments.length
        ? ((treemapValue7 =
            typeof treemapParam41 == "function"
              ? treemapParam41
              : treemapHelper24(+treemapParam41)),
          treemapHelper27)
        : treemapValue7;
    }),
    (treemapHelper27.paddingOuter = function (treemapParam28) {
      return arguments.length
        ? treemapHelper27
            .paddingTop(treemapParam28)
            .paddingRight(treemapParam28)
            .paddingBottom(treemapParam28)
            .paddingLeft(treemapParam28)
        : treemapHelper27.paddingTop();
    }),
    (treemapHelper27.paddingTop = function (treemapParam42) {
      return arguments.length
        ? ((treemapValue8 =
            typeof treemapParam42 == "function"
              ? treemapParam42
              : treemapHelper24(+treemapParam42)),
          treemapHelper27)
        : treemapValue8;
    }),
    (treemapHelper27.paddingRight = function (treemapParam43) {
      return arguments.length
        ? ((treemapValue9 =
            typeof treemapParam43 == "function"
              ? treemapParam43
              : treemapHelper24(+treemapParam43)),
          treemapHelper27)
        : treemapValue9;
    }),
    (treemapHelper27.paddingBottom = function (treemapParam44) {
      return arguments.length
        ? ((treemapValue10 =
            typeof treemapParam44 == "function"
              ? treemapParam44
              : treemapHelper24(+treemapParam44)),
          treemapHelper27)
        : treemapValue10;
    }),
    (treemapHelper27.paddingLeft = function (treemapParam45) {
      return arguments.length
        ? ((treemapValue11 =
            typeof treemapParam45 == "function"
              ? treemapParam45
              : treemapHelper24(+treemapParam45)),
          treemapHelper27)
        : treemapValue11;
    }),
    treemapHelper27
  );
}
export { treemapA, treemapI, treemapN, treemapR };
