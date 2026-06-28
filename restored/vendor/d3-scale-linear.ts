// Restored from ref/webview/assets/linear-C3CxBvdt.js
// Linear chunk restored from the Codex webview bundle.
import {
  defaultLocaleA,
  defaultLocaleI,
  defaultLocaleN,
  defaultLocaleT,
} from "./d3-format-default-locale";
import {
  stringL,
  stringN,
  stringO,
  stringR,
  stringT,
} from "./d3-interpolate-string";
import { init } from "../utils/init";
function linearHelper1(linearParam76) {
  return Math.max(0, -defaultLocaleA(Math.abs(linearParam76)));
}
function linearHelper2(linearParam38, linearParam39) {
  return Math.max(
    0,
    Math.max(-8, Math.min(8, Math.floor(defaultLocaleA(linearParam39) / 3))) *
      3 -
      defaultLocaleA(Math.abs(linearParam38)),
  );
}
function linearHelper3(linearParam53, linearParam54) {
  return (
    (linearParam53 = Math.abs(linearParam53)),
    (linearParam54 = Math.abs(linearParam54) - linearParam53),
    Math.max(0, defaultLocaleA(linearParam54) - defaultLocaleA(linearParam53)) +
      1
  );
}
function linearHelper4(linearParam23, linearParam24) {
  linearParam24 ||= [];
  var linearValue59 = linearParam23
      ? Math.min(linearParam24.length, linearParam23.length)
      : 0,
    linearValue60 = linearParam24.slice(),
    linearValue61;
  return function (linearParam67) {
    for (linearValue61 = 0; linearValue61 < linearValue59; ++linearValue61)
      linearValue60[linearValue61] =
        linearParam23[linearValue61] * (1 - linearParam67) +
        linearParam24[linearValue61] * linearParam67;
    return linearValue60;
  };
}
function linearHelper5(linearParam59) {
  return (
    ArrayBuffer.isView(linearParam59) && !(linearParam59 instanceof DataView)
  );
}
function linearHelper6(linearParam19, linearParam20) {
  var linearValue51 = linearParam20 ? linearParam20.length : 0,
    linearValue52 = linearParam19
      ? Math.min(linearValue51, linearParam19.length)
      : 0,
    linearValue53 = Array(linearValue52),
    linearValue54 = Array(linearValue51),
    linearValue55;
  for (linearValue55 = 0; linearValue55 < linearValue52; ++linearValue55)
    linearValue53[linearValue55] = linearHelper9(
      linearParam19[linearValue55],
      linearParam20[linearValue55],
    );
  for (; linearValue55 < linearValue51; ++linearValue55)
    linearValue54[linearValue55] = linearParam20[linearValue55];
  return function (linearParam74) {
    for (linearValue55 = 0; linearValue55 < linearValue52; ++linearValue55)
      linearValue54[linearValue55] =
        linearValue53[linearValue55](linearParam74);
    return linearValue54;
  };
}
function linearHelper7(linearParam42, linearParam43) {
  var linearValue68 = new Date();
  return (
    (linearParam42 = +linearParam42),
    (linearParam43 = +linearParam43),
    function (linearParam81) {
      return (
        linearValue68.setTime(
          linearParam42 * (1 - linearParam81) + linearParam43 * linearParam81,
        ),
        linearValue68
      );
    }
  );
}
function linearHelper8(linearParam21, linearParam22) {
  var linearValue56 = {},
    linearValue57 = {},
    linearValue58;
  for (linearValue58 in ((typeof linearParam21 != "object" || !linearParam21) &&
    (linearParam21 = {}),
  (typeof linearParam22 != "object" || !linearParam22) && (linearParam22 = {}),
  linearParam22))
    linearValue58 in linearParam21
      ? (linearValue56[linearValue58] = linearHelper9(
          linearParam21[linearValue58],
          linearParam22[linearValue58],
        ))
      : (linearValue57[linearValue58] = linearParam22[linearValue58]);
  return function (linearParam79) {
    for (linearValue58 in linearValue56)
      linearValue57[linearValue58] =
        linearValue56[linearValue58](linearParam79);
    return linearValue57;
  };
}
function linearHelper9(linearParam14, linearParam15) {
  var linearValue45 = typeof linearParam15,
    linearValue46;
  return linearParam15 == null || linearValue45 === "boolean"
    ? stringO(linearParam15)
    : (linearValue45 === "number"
        ? stringN
        : linearValue45 === "string"
          ? (linearValue46 = stringL(linearParam15))
            ? ((linearParam15 = linearValue46), stringR)
            : stringT
          : linearParam15 instanceof stringL
            ? stringR
            : linearParam15 instanceof Date
              ? linearHelper7
              : linearHelper5(linearParam15)
                ? linearHelper4
                : Array.isArray(linearParam15)
                  ? linearHelper6
                  : (typeof linearParam15.valueOf != "function" &&
                        typeof linearParam15.toString != "function") ||
                      isNaN(linearParam15)
                    ? linearHelper8
                    : stringN)(linearParam14, linearParam15);
}
function linearHelper10(linearParam55, linearParam56) {
  return (
    (linearParam55 = +linearParam55),
    (linearParam56 = +linearParam56),
    function (linearParam82) {
      return Math.round(
        linearParam55 * (1 - linearParam82) + linearParam56 * linearParam82,
      );
    }
  );
}
function linearHelper11(linearParam60, linearParam61) {
  return linearParam60 == null || linearParam61 == null
    ? NaN
    : linearParam60 < linearParam61
      ? -1
      : linearParam60 > linearParam61
        ? 1
        : linearParam60 >= linearParam61
          ? 0
          : NaN;
}
function linearHelper12(linearParam62, linearParam63) {
  return linearParam62 == null || linearParam63 == null
    ? NaN
    : linearParam63 < linearParam62
      ? -1
      : linearParam63 > linearParam62
        ? 1
        : linearParam63 >= linearParam62
          ? 0
          : NaN;
}
function linearL(linearParam1) {
  let linearValue17, linearValue18, linearValue19;
  linearParam1.length === 2
    ? ((linearValue17 =
        linearParam1 === linearHelper11 || linearParam1 === linearHelper12
          ? linearParam1
          : linearHelper13),
      (linearValue18 = linearParam1),
      (linearValue19 = linearParam1))
    : ((linearValue17 = linearHelper11),
      (linearValue18 = (linearParam92, linearParam93) =>
        linearHelper11(linearParam1(linearParam92), linearParam93)),
      (linearValue19 = (linearParam94, linearParam95) =>
        linearParam1(linearParam94) - linearParam95));
  function linearHelper26(
    linearParam34,
    linearParam35,
    linearParam36 = 0,
    linearParam37 = linearParam34.length,
  ) {
    if (linearParam36 < linearParam37) {
      if (linearValue17(linearParam35, linearParam35) !== 0)
        return linearParam37;
      do {
        let linearValue77 = (linearParam36 + linearParam37) >>> 1;
        linearValue18(linearParam34[linearValue77], linearParam35) < 0
          ? (linearParam36 = linearValue77 + 1)
          : (linearParam37 = linearValue77);
      } while (linearParam36 < linearParam37);
    }
    return linearParam36;
  }
  function linearHelper27(
    linearParam30,
    linearParam31,
    linearParam32 = 0,
    linearParam33 = linearParam30.length,
  ) {
    if (linearParam32 < linearParam33) {
      if (linearValue17(linearParam31, linearParam31) !== 0)
        return linearParam33;
      do {
        let linearValue76 = (linearParam32 + linearParam33) >>> 1;
        linearValue18(linearParam30[linearValue76], linearParam31) <= 0
          ? (linearParam32 = linearValue76 + 1)
          : (linearParam33 = linearValue76);
      } while (linearParam32 < linearParam33);
    }
    return linearParam32;
  }
  function linearHelper28(
    linearParam47,
    linearParam48,
    linearParam49 = 0,
    linearParam50 = linearParam47.length,
  ) {
    let linearValue71 = linearHelper26(
      linearParam47,
      linearParam48,
      linearParam49,
      linearParam50 - 1,
    );
    return linearValue71 > linearParam49 &&
      linearValue19(linearParam47[linearValue71 - 1], linearParam48) >
        -linearValue19(linearParam47[linearValue71], linearParam48)
      ? linearValue71 - 1
      : linearValue71;
  }
  return {
    left: linearHelper26,
    center: linearHelper28,
    right: linearHelper27,
  };
}
function linearHelper13() {
  return 0;
}
function linearC(linearParam85) {
  return linearParam85 === null ? NaN : +linearParam85;
}
var linearValue1 = linearL(linearHelper11),
  linearValue2 = linearValue1.right;
linearValue1.left;
linearL(linearC).center;
var linearValue3 = Math.sqrt(50),
  linearValue4 = Math.sqrt(10),
  linearValue5 = Math.sqrt(2);
function linearHelper14(linearParam10, linearParam11, linearParam12) {
  let linearValue30 =
      (linearParam11 - linearParam10) / Math.max(0, linearParam12),
    linearValue31 = Math.floor(Math.log10(linearValue30)),
    linearValue32 = linearValue30 / 10 ** linearValue31,
    linearValue33 =
      linearValue32 >= linearValue3
        ? 10
        : linearValue32 >= linearValue4
          ? 5
          : linearValue32 >= linearValue5
            ? 2
            : 1,
    linearValue34,
    linearValue35,
    linearValue36;
  return (
    linearValue31 < 0
      ? ((linearValue36 = 10 ** -linearValue31 / linearValue33),
        (linearValue34 = Math.round(linearParam10 * linearValue36)),
        (linearValue35 = Math.round(linearParam11 * linearValue36)),
        linearValue34 / linearValue36 < linearParam10 && ++linearValue34,
        linearValue35 / linearValue36 > linearParam11 && --linearValue35,
        (linearValue36 = -linearValue36))
      : ((linearValue36 = 10 ** linearValue31 * linearValue33),
        (linearValue34 = Math.round(linearParam10 / linearValue36)),
        (linearValue35 = Math.round(linearParam11 / linearValue36)),
        linearValue34 * linearValue36 < linearParam10 && ++linearValue34,
        linearValue35 * linearValue36 > linearParam11 && --linearValue35),
    linearValue35 < linearValue34 && 0.5 <= linearParam12 && linearParam12 < 2
      ? linearHelper14(linearParam10, linearParam11, linearParam12 * 2)
      : [linearValue34, linearValue35, linearValue36]
  );
}
function linearHelper15(linearParam7, linearParam8, linearParam9) {
  if (
    ((linearParam8 = +linearParam8),
    (linearParam7 = +linearParam7),
    (linearParam9 = +linearParam9),
    !(linearParam9 > 0))
  )
    return [];
  if (linearParam7 === linearParam8) return [linearParam7];
  let linearValue24 = linearParam8 < linearParam7,
    [linearValue25, linearValue26, linearValue27] = linearValue24
      ? linearHelper14(linearParam8, linearParam7, linearParam9)
      : linearHelper14(linearParam7, linearParam8, linearParam9);
  if (!(linearValue26 >= linearValue25)) return [];
  let linearValue28 = linearValue26 - linearValue25 + 1,
    linearValue29 = Array(linearValue28);
  if (linearValue24) {
    if (linearValue27 < 0)
      for (
        let linearValue78 = 0;
        linearValue78 < linearValue28;
        ++linearValue78
      )
        linearValue29[linearValue78] =
          (linearValue26 - linearValue78) / -linearValue27;
    else
      for (
        let linearValue80 = 0;
        linearValue80 < linearValue28;
        ++linearValue80
      )
        linearValue29[linearValue80] =
          (linearValue26 - linearValue80) * linearValue27;
  } else if (linearValue27 < 0)
    for (let linearValue79 = 0; linearValue79 < linearValue28; ++linearValue79)
      linearValue29[linearValue79] =
        (linearValue25 + linearValue79) / -linearValue27;
  else
    for (let linearValue81 = 0; linearValue81 < linearValue28; ++linearValue81)
      linearValue29[linearValue81] =
        (linearValue25 + linearValue81) * linearValue27;
  return linearValue29;
}
function linearHelper16(linearParam70, linearParam71, linearParam72) {
  return (
    (linearParam71 = +linearParam71),
    (linearParam70 = +linearParam70),
    (linearParam72 = +linearParam72),
    linearHelper14(linearParam70, linearParam71, linearParam72)[2]
  );
}
function linearS(linearParam44, linearParam45, linearParam46) {
  linearParam45 = +linearParam45;
  linearParam44 = +linearParam44;
  linearParam46 = +linearParam46;
  let linearValue69 = linearParam45 < linearParam44,
    linearValue70 = linearValue69
      ? linearHelper16(linearParam45, linearParam44, linearParam46)
      : linearHelper16(linearParam44, linearParam45, linearParam46);
  return (
    (linearValue69 ? -1 : 1) *
    (linearValue70 < 0 ? 1 / -linearValue70 : linearValue70)
  );
}
function linearHelper17(linearParam84) {
  return function () {
    return linearParam84;
  };
}
function linearHelper18(linearParam90) {
  return +linearParam90;
}
var linearValue6 = [0, 1];
function linearA(linearParam91) {
  return linearParam91;
}
function linearHelper19(linearParam51, linearParam52) {
  return (linearParam52 -= linearParam51 = +linearParam51)
    ? function (linearParam89) {
        return (linearParam89 - linearParam51) / linearParam52;
      }
    : linearHelper17(isNaN(linearParam52) ? NaN : 0.5);
}
function linearHelper20(linearParam40, linearParam41) {
  var linearValue67;
  return (
    linearParam40 > linearParam41 &&
      ((linearValue67 = linearParam40),
      (linearParam40 = linearParam41),
      (linearParam41 = linearValue67)),
    function (linearParam80) {
      return Math.max(linearParam40, Math.min(linearParam41, linearParam80));
    }
  );
}
function linearHelper21(linearParam25, linearParam26, linearParam27) {
  var linearValue62 = linearParam25[0],
    linearValue63 = linearParam25[1],
    linearValue64 = linearParam26[0],
    linearValue65 = linearParam26[1];
  return (
    linearValue63 < linearValue62
      ? ((linearValue62 = linearHelper19(linearValue63, linearValue62)),
        (linearValue64 = linearParam27(linearValue65, linearValue64)))
      : ((linearValue62 = linearHelper19(linearValue62, linearValue63)),
        (linearValue64 = linearParam27(linearValue64, linearValue65))),
    function (linearParam88) {
      return linearValue64(linearValue62(linearParam88));
    }
  );
}
function linearHelper22(linearParam16, linearParam17, linearParam18) {
  var linearValue47 = Math.min(linearParam16.length, linearParam17.length) - 1,
    linearValue48 = Array(linearValue47),
    linearValue49 = Array(linearValue47),
    linearValue50 = -1;
  for (
    linearParam16[linearValue47] < linearParam16[0] &&
    ((linearParam16 = linearParam16.slice().reverse()),
    (linearParam17 = linearParam17.slice().reverse()));
    ++linearValue50 < linearValue47;

  ) {
    linearValue48[linearValue50] = linearHelper19(
      linearParam16[linearValue50],
      linearParam16[linearValue50 + 1],
    );
    linearValue49[linearValue50] = linearParam18(
      linearParam17[linearValue50],
      linearParam17[linearValue50 + 1],
    );
  }
  return function (linearParam73) {
    var linearValue75 =
      linearValue2(linearParam16, linearParam73, 1, linearValue47) - 1;
    return linearValue49[linearValue75](
      linearValue48[linearValue75](linearParam73),
    );
  };
}
function linearI(linearParam28, linearParam29) {
  return linearParam29
    .domain(linearParam28.domain())
    .range(linearParam28.range())
    .interpolate(linearParam28.interpolate())
    .clamp(linearParam28.clamp())
    .unknown(linearParam28.unknown());
}
function linearO() {
  var linearValue7 = linearValue6,
    linearValue8 = linearValue6,
    linearValue9 = linearHelper9,
    linearValue10,
    linearValue11,
    linearValue12,
    linearValue13 = linearA,
    linearValue14,
    linearValue15,
    linearValue16;
  function linearHelper24() {
    var linearValue66 = Math.min(linearValue7.length, linearValue8.length);
    return (
      linearValue13 !== linearA &&
        (linearValue13 = linearHelper20(
          linearValue7[0],
          linearValue7[linearValue66 - 1],
        )),
      (linearValue14 = linearValue66 > 2 ? linearHelper22 : linearHelper21),
      (linearValue15 = linearValue16 = null),
      linearHelper25
    );
  }
  function linearHelper25(linearParam57) {
    return linearParam57 == null || isNaN((linearParam57 = +linearParam57))
      ? linearValue12
      : (linearValue15 ||= linearValue14(
          linearValue7.map(linearValue10),
          linearValue8,
          linearValue9,
        ))(linearValue10(linearValue13(linearParam57)));
  }
  return (
    (linearHelper25.invert = function (linearParam75) {
      return linearValue13(
        linearValue11(
          (linearValue16 ||= linearValue14(
            linearValue8,
            linearValue7.map(linearValue10),
            stringN,
          ))(linearParam75),
        ),
      );
    }),
    (linearHelper25.domain = function (linearParam58) {
      return arguments.length
        ? ((linearValue7 = Array.from(linearParam58, linearHelper18)),
          linearHelper24())
        : linearValue7.slice();
    }),
    (linearHelper25.range = function (linearParam64) {
      return arguments.length
        ? ((linearValue8 = Array.from(linearParam64)), linearHelper24())
        : linearValue8.slice();
    }),
    (linearHelper25.rangeRound = function (linearParam83) {
      return (
        (linearValue8 = Array.from(linearParam83)),
        (linearValue9 = linearHelper10),
        linearHelper24()
      );
    }),
    (linearHelper25.clamp = function (linearParam68) {
      return arguments.length
        ? ((linearValue13 = linearParam68 ? true : linearA), linearHelper24())
        : linearValue13 !== linearA;
    }),
    (linearHelper25.interpolate = function (linearParam77) {
      return arguments.length
        ? ((linearValue9 = linearParam77), linearHelper24())
        : linearValue9;
    }),
    (linearHelper25.unknown = function (linearParam78) {
      return arguments.length
        ? ((linearValue12 = linearParam78), linearHelper25)
        : linearValue12;
    }),
    function (linearParam86, linearParam87) {
      return (
        (linearValue10 = linearParam86),
        (linearValue11 = linearParam87),
        linearHelper24()
      );
    }
  );
}
function linearR() {
  return linearO()(linearA, linearA);
}
function linearHelper23(
  linearParam3,
  linearParam4,
  linearParam5,
  linearParam6,
) {
  var linearValue21 = linearS(linearParam3, linearParam4, linearParam5),
    linearValue22;
  switch (
    ((linearParam6 = defaultLocaleI(linearParam6 ?? ",f")), linearParam6.type)
  ) {
    case "s":
      var linearValue23 = Math.max(
        Math.abs(linearParam3),
        Math.abs(linearParam4),
      );
      return (
        linearParam6.precision == null &&
          !isNaN(
            (linearValue22 = linearHelper2(linearValue21, linearValue23)),
          ) &&
          (linearParam6.precision = linearValue22),
        defaultLocaleN(linearParam6, linearValue23)
      );
    case "":
    case "e":
    case "g":
    case "p":
    case "r":
      linearParam6.precision == null &&
        !isNaN(
          (linearValue22 = linearHelper3(
            linearValue21,
            Math.max(Math.abs(linearParam3), Math.abs(linearParam4)),
          )),
        ) &&
        (linearParam6.precision = linearValue22 - (linearParam6.type === "e"));
      break;
    case "f":
    case "%":
      linearParam6.precision == null &&
        !isNaN((linearValue22 = linearHelper1(linearValue21))) &&
        (linearParam6.precision =
          linearValue22 - (linearParam6.type === "%") * 2);
      break;
  }
  return defaultLocaleT(linearParam6);
}
function linearN(linearParam2) {
  var linearValue20 = linearParam2.domain;
  return (
    (linearParam2.ticks = function (linearParam69) {
      var linearValue74 = linearValue20();
      return linearHelper15(
        linearValue74[0],
        linearValue74[linearValue74.length - 1],
        linearParam69 ?? 10,
      );
    }),
    (linearParam2.tickFormat = function (linearParam65, linearParam66) {
      var linearValue73 = linearValue20();
      return linearHelper23(
        linearValue73[0],
        linearValue73[linearValue73.length - 1],
        linearParam65 ?? 10,
        linearParam66,
      );
    }),
    (linearParam2.nice = function (linearParam13) {
      linearParam13 ??= 10;
      var linearValue37 = linearValue20(),
        linearValue38 = 0,
        linearValue39 = linearValue37.length - 1,
        linearValue40 = linearValue37[linearValue38],
        linearValue41 = linearValue37[linearValue39],
        linearValue42,
        linearValue43,
        linearValue44 = 10;
      for (
        linearValue41 < linearValue40 &&
        ((linearValue43 = linearValue40),
        (linearValue40 = linearValue41),
        (linearValue41 = linearValue43),
        (linearValue43 = linearValue38),
        (linearValue38 = linearValue39),
        (linearValue39 = linearValue43));
        linearValue44-- > 0;

      ) {
        if (
          ((linearValue43 = linearHelper16(
            linearValue40,
            linearValue41,
            linearParam13,
          )),
          linearValue43 === linearValue42)
        )
          return (
            (linearValue37[linearValue38] = linearValue40),
            (linearValue37[linearValue39] = linearValue41),
            linearValue20(linearValue37)
          );
        if (linearValue43 > 0) {
          linearValue40 =
            Math.floor(linearValue40 / linearValue43) * linearValue43;
          linearValue41 =
            Math.ceil(linearValue41 / linearValue43) * linearValue43;
        } else if (linearValue43 < 0) {
          linearValue40 =
            Math.ceil(linearValue40 * linearValue43) / linearValue43;
          linearValue41 =
            Math.floor(linearValue41 * linearValue43) / linearValue43;
        } else break;
        linearValue42 = linearValue43;
      }
      return linearParam2;
    }),
    linearParam2
  );
}
function linearT() {
  var linearValue72 = linearR();
  return (
    (linearValue72.copy = function () {
      return linearI(linearValue72, linearT());
    }),
    init.apply(linearValue72, arguments),
    linearN(linearValue72)
  );
}
export {
  linearA,
  linearC,
  linearI,
  linearL,
  linearN,
  linearO,
  linearR,
  linearS,
  linearT,
};
