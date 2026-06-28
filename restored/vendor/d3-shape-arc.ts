// Restored from ref/webview/assets/arc-D3MQZVTw.js
// Arc chunk restored from the Codex webview bundle.
import { pathN, pathT } from "./d3-path";
import {
  mathA,
  mathC,
  mathD,
  mathF,
  mathI,
  mathL,
  mathN,
  mathP,
  mathR,
  mathS,
  mathT,
  mathU,
} from "./d3-geo-math";
function arcHelper1(arcParam25) {
  return arcParam25.innerRadius;
}
function arcHelper2(arcParam26) {
  return arcParam26.outerRadius;
}
function arcHelper3(arcParam27) {
  return arcParam27.startAngle;
}
function arcHelper4(arcParam28) {
  return arcParam28.endAngle;
}
function arcHelper5(arcParam24) {
  return arcParam24 && arcParam24.padAngle;
}
function arcHelper6(
  arcParam8,
  arcParam9,
  arcParam10,
  arcParam11,
  arcParam12,
  arcParam13,
  arcParam14,
  arcParam15,
) {
  var arcValue70 = arcParam10 - arcParam8,
    arcValue71 = arcParam11 - arcParam9,
    arcValue72 = arcParam14 - arcParam12,
    arcValue73 = arcParam15 - arcParam13,
    arcValue74 = arcValue73 * arcValue70 - arcValue72 * arcValue71;
  if (!(arcValue74 * arcValue74 < 1e-12))
    return (
      (arcValue74 =
        (arcValue72 * (arcParam9 - arcParam13) -
          arcValue73 * (arcParam8 - arcParam12)) /
        arcValue74),
      [arcParam8 + arcValue74 * arcValue70, arcParam9 + arcValue74 * arcValue71]
    );
}
function arcHelper7(
  arcParam1,
  arcParam2,
  arcParam3,
  arcParam4,
  arcParam5,
  arcParam6,
  arcParam7,
) {
  var arcValue46 = arcParam1 - arcParam3,
    arcValue47 = arcParam2 - arcParam4,
    arcValue48 =
      (arcParam7 ? arcParam6 : -arcParam6) /
      mathF(arcValue46 * arcValue46 + arcValue47 * arcValue47),
    arcValue49 = arcValue48 * arcValue47,
    arcValue50 = -arcValue48 * arcValue46,
    arcValue51 = arcParam1 + arcValue49,
    arcValue52 = arcParam2 + arcValue50,
    arcValue53 = arcParam3 + arcValue49,
    arcValue54 = arcParam4 + arcValue50,
    arcValue55 = (arcValue51 + arcValue53) / 2,
    arcValue56 = (arcValue52 + arcValue54) / 2,
    arcValue57 = arcValue53 - arcValue51,
    _arc = arcValue54 - arcValue52,
    arcValue58 = arcValue57 * arcValue57 + _arc * _arc,
    arcValue59 = arcParam5 - arcParam6,
    arcValue60 = arcValue51 * arcValue54 - arcValue53 * arcValue52,
    arcValue61 =
      (_arc < 0 ? -1 : 1) *
      mathF(
        mathC(
          0,
          arcValue59 * arcValue59 * arcValue58 - arcValue60 * arcValue60,
        ),
      ),
    arcValue62 = (arcValue60 * _arc - arcValue57 * arcValue61) / arcValue58,
    arcValue63 = (-arcValue60 * arcValue57 - _arc * arcValue61) / arcValue58,
    arcValue64 = (arcValue60 * _arc + arcValue57 * arcValue61) / arcValue58,
    arcValue65 = (-arcValue60 * arcValue57 + _arc * arcValue61) / arcValue58,
    arcValue66 = arcValue62 - arcValue55,
    arcValue67 = arcValue63 - arcValue56,
    arcValue68 = arcValue64 - arcValue55,
    arcValue69 = arcValue65 - arcValue56;
  return (
    arcValue66 * arcValue66 + arcValue67 * arcValue67 >
      arcValue68 * arcValue68 + arcValue69 * arcValue69 &&
      ((arcValue62 = arcValue64), (arcValue63 = arcValue65)),
    {
      cx: arcValue62,
      cy: arcValue63,
      x01: -arcValue49,
      y01: -arcValue50,
      x11: arcValue62 * (arcParam5 / arcValue59 - 1),
      y11: arcValue63 * (arcParam5 / arcValue59 - 1),
    }
  );
}
export function arc() {
  var arcValue1 = arcHelper1,
    _arc = arcHelper2,
    arcValue2 = pathN(0),
    arcValue3 = null,
    arcValue4 = arcHelper3,
    arcValue5 = arcHelper4,
    arcValue6 = arcHelper5,
    arcValue7 = null,
    arcValue8 = pathT(arcHelper8);
  function arcHelper8() {
    var arcValue9,
      arcValue10,
      arcValue11 = +arcValue1.apply(this, arguments),
      arcValue12 = +_arc.apply(this, arguments),
      arcValue13 = arcValue4.apply(this, arguments) - mathS,
      arcValue14 = arcValue5.apply(this, arguments) - mathS,
      arcValue15 = mathT(arcValue14 - arcValue13),
      arcValue16 = arcValue14 > arcValue13;
    if (
      ((arcValue7 ||= arcValue9 = arcValue8()),
      arcValue12 < arcValue11 &&
        ((arcValue10 = arcValue12),
        (arcValue12 = arcValue11),
        (arcValue11 = arcValue10)),
      !(arcValue12 > 1e-12))
    )
      arcValue7.moveTo(0, 0);
    else if (arcValue15 > mathP - 1e-12) {
      arcValue7.moveTo(
        arcValue12 * mathA(arcValue13),
        arcValue12 * mathD(arcValue13),
      );
      arcValue7.arc(0, 0, arcValue12, arcValue13, arcValue14, !arcValue16);
      arcValue11 > 1e-12 &&
        (arcValue7.moveTo(
          arcValue11 * mathA(arcValue14),
          arcValue11 * mathD(arcValue14),
        ),
        arcValue7.arc(0, 0, arcValue11, arcValue14, arcValue13, arcValue16));
    } else {
      var arcValue17 = arcValue13,
        arcValue18 = arcValue14,
        arcValue19 = arcValue13,
        arcValue20 = arcValue14,
        arcValue21 = arcValue15,
        arcValue22 = arcValue15,
        arcValue23 = arcValue6.apply(this, arguments) / 2,
        arcValue24 =
          arcValue23 > 1e-12 &&
          (arcValue3
            ? +arcValue3.apply(this, arguments)
            : mathF(arcValue11 * arcValue11 + arcValue12 * arcValue12)),
        arcValue25 = mathL(
          mathT(arcValue12 - arcValue11) / 2,
          +arcValue2.apply(this, arguments),
        ),
        arcValue26 = arcValue25,
        arcValue27 = arcValue25,
        arcValue28,
        arcValue29;
      if (arcValue24 > 1e-12) {
        var arcValue30 = mathR((arcValue24 / arcValue11) * mathD(arcValue23)),
          arcValue31 = mathR((arcValue24 / arcValue12) * mathD(arcValue23));
        (arcValue21 -= arcValue30 * 2) > 1e-12
          ? ((arcValue30 *= arcValue16 ? 1 : -1),
            (arcValue19 += arcValue30),
            (arcValue20 -= arcValue30))
          : ((arcValue21 = 0),
            (arcValue19 = arcValue20 = (arcValue13 + arcValue14) / 2));
        (arcValue22 -= arcValue31 * 2) > 1e-12
          ? ((arcValue31 *= arcValue16 ? 1 : -1),
            (arcValue17 += arcValue31),
            (arcValue18 -= arcValue31))
          : ((arcValue22 = 0),
            (arcValue17 = arcValue18 = (arcValue13 + arcValue14) / 2));
      }
      var arcValue32 = arcValue12 * mathA(arcValue17),
        arcValue33 = arcValue12 * mathD(arcValue17),
        arcValue34 = arcValue11 * mathA(arcValue20),
        arcValue35 = arcValue11 * mathD(arcValue20);
      if (arcValue25 > 1e-12) {
        var arcValue36 = arcValue12 * mathA(arcValue18),
          arcValue37 = arcValue12 * mathD(arcValue18),
          arcValue38 = arcValue11 * mathA(arcValue19),
          arcValue39 = arcValue11 * mathD(arcValue19),
          $;
        if (arcValue15 < mathU)
          if (
            ($ = arcHelper6(
              arcValue32,
              arcValue33,
              arcValue38,
              arcValue39,
              arcValue36,
              arcValue37,
              arcValue34,
              arcValue35,
            ))
          ) {
            var arcValue40 = arcValue32 - $[0],
              arcValue41 = arcValue33 - $[1],
              arcValue42 = arcValue36 - $[0],
              arcValue43 = arcValue37 - $[1],
              arcValue44 =
                1 /
                mathD(
                  mathN(
                    (arcValue40 * arcValue42 + arcValue41 * arcValue43) /
                      (mathF(
                        arcValue40 * arcValue40 + arcValue41 * arcValue41,
                      ) *
                        mathF(
                          arcValue42 * arcValue42 + arcValue43 * arcValue43,
                        )),
                  ) / 2,
                ),
              arcValue45 = mathF($[0] * $[0] + $[1] * $[1]);
            arcValue26 = mathL(
              arcValue25,
              (arcValue11 - arcValue45) / (arcValue44 - 1),
            );
            arcValue27 = mathL(
              arcValue25,
              (arcValue12 - arcValue45) / (arcValue44 + 1),
            );
          } else arcValue26 = arcValue27 = 0;
      }
      arcValue22 > 1e-12
        ? arcValue27 > 1e-12
          ? ((arcValue28 = arcHelper7(
              arcValue38,
              arcValue39,
              arcValue32,
              arcValue33,
              arcValue12,
              arcValue27,
              arcValue16,
            )),
            (arcValue29 = arcHelper7(
              arcValue36,
              arcValue37,
              arcValue34,
              arcValue35,
              arcValue12,
              arcValue27,
              arcValue16,
            )),
            arcValue7.moveTo(
              arcValue28.cx + arcValue28.x01,
              arcValue28.cy + arcValue28.y01,
            ),
            arcValue27 < arcValue25
              ? arcValue7.arc(
                  arcValue28.cx,
                  arcValue28.cy,
                  arcValue27,
                  mathI(arcValue28.y01, arcValue28.x01),
                  mathI(arcValue29.y01, arcValue29.x01),
                  !arcValue16,
                )
              : (arcValue7.arc(
                  arcValue28.cx,
                  arcValue28.cy,
                  arcValue27,
                  mathI(arcValue28.y01, arcValue28.x01),
                  mathI(arcValue28.y11, arcValue28.x11),
                  !arcValue16,
                ),
                arcValue7.arc(
                  0,
                  0,
                  arcValue12,
                  mathI(
                    arcValue28.cy + arcValue28.y11,
                    arcValue28.cx + arcValue28.x11,
                  ),
                  mathI(
                    arcValue29.cy + arcValue29.y11,
                    arcValue29.cx + arcValue29.x11,
                  ),
                  !arcValue16,
                ),
                arcValue7.arc(
                  arcValue29.cx,
                  arcValue29.cy,
                  arcValue27,
                  mathI(arcValue29.y11, arcValue29.x11),
                  mathI(arcValue29.y01, arcValue29.x01),
                  !arcValue16,
                )))
          : (arcValue7.moveTo(arcValue32, arcValue33),
            arcValue7.arc(
              0,
              0,
              arcValue12,
              arcValue17,
              arcValue18,
              !arcValue16,
            ))
        : arcValue7.moveTo(arcValue32, arcValue33);
      !(arcValue11 > 1e-12) || !(arcValue21 > 1e-12)
        ? arcValue7.lineTo(arcValue34, arcValue35)
        : arcValue26 > 1e-12
          ? ((arcValue28 = arcHelper7(
              arcValue34,
              arcValue35,
              arcValue36,
              arcValue37,
              arcValue11,
              -arcValue26,
              arcValue16,
            )),
            (arcValue29 = arcHelper7(
              arcValue32,
              arcValue33,
              arcValue38,
              arcValue39,
              arcValue11,
              -arcValue26,
              arcValue16,
            )),
            arcValue7.lineTo(
              arcValue28.cx + arcValue28.x01,
              arcValue28.cy + arcValue28.y01,
            ),
            arcValue26 < arcValue25
              ? arcValue7.arc(
                  arcValue28.cx,
                  arcValue28.cy,
                  arcValue26,
                  mathI(arcValue28.y01, arcValue28.x01),
                  mathI(arcValue29.y01, arcValue29.x01),
                  !arcValue16,
                )
              : (arcValue7.arc(
                  arcValue28.cx,
                  arcValue28.cy,
                  arcValue26,
                  mathI(arcValue28.y01, arcValue28.x01),
                  mathI(arcValue28.y11, arcValue28.x11),
                  !arcValue16,
                ),
                arcValue7.arc(
                  0,
                  0,
                  arcValue11,
                  mathI(
                    arcValue28.cy + arcValue28.y11,
                    arcValue28.cx + arcValue28.x11,
                  ),
                  mathI(
                    arcValue29.cy + arcValue29.y11,
                    arcValue29.cx + arcValue29.x11,
                  ),
                  arcValue16,
                ),
                arcValue7.arc(
                  arcValue29.cx,
                  arcValue29.cy,
                  arcValue26,
                  mathI(arcValue29.y11, arcValue29.x11),
                  mathI(arcValue29.y01, arcValue29.x01),
                  !arcValue16,
                )))
          : arcValue7.arc(0, 0, arcValue11, arcValue20, arcValue19, arcValue16);
    }
    if ((arcValue7.closePath(), arcValue9))
      return ((arcValue7 = null), arcValue9 + "" || null);
  }
  return (
    (arcHelper8.centroid = function () {
      var arcValue75 =
          (+arcValue1.apply(this, arguments) + +_arc.apply(this, arguments)) /
          2,
        arcValue76 =
          (+arcValue4.apply(this, arguments) +
            +arcValue5.apply(this, arguments)) /
            2 -
          mathU / 2;
      return [mathA(arcValue76) * arcValue75, mathD(arcValue76) * arcValue75];
    }),
    (arcHelper8.innerRadius = function (arcParam17) {
      return arguments.length
        ? ((arcValue1 =
            typeof arcParam17 == "function" ? arcParam17 : pathN(+arcParam17)),
          arcHelper8)
        : arcValue1;
    }),
    (arcHelper8.outerRadius = function (arcParam18) {
      return arguments.length
        ? ((_arc =
            typeof arcParam18 == "function" ? arcParam18 : pathN(+arcParam18)),
          arcHelper8)
        : _arc;
    }),
    (arcHelper8.cornerRadius = function (arcParam19) {
      return arguments.length
        ? ((arcValue2 =
            typeof arcParam19 == "function" ? arcParam19 : pathN(+arcParam19)),
          arcHelper8)
        : arcValue2;
    }),
    (arcHelper8.padRadius = function (arcParam16) {
      return arguments.length
        ? ((arcValue3 =
            arcParam16 == null
              ? null
              : typeof arcParam16 == "function"
                ? arcParam16
                : pathN(+arcParam16)),
          arcHelper8)
        : arcValue3;
    }),
    (arcHelper8.startAngle = function (arcParam20) {
      return arguments.length
        ? ((arcValue4 =
            typeof arcParam20 == "function" ? arcParam20 : pathN(+arcParam20)),
          arcHelper8)
        : arcValue4;
    }),
    (arcHelper8.endAngle = function (arcParam21) {
      return arguments.length
        ? ((arcValue5 =
            typeof arcParam21 == "function" ? arcParam21 : pathN(+arcParam21)),
          arcHelper8)
        : arcValue5;
    }),
    (arcHelper8.padAngle = function (arcParam22) {
      return arguments.length
        ? ((arcValue6 =
            typeof arcParam22 == "function" ? arcParam22 : pathN(+arcParam22)),
          arcHelper8)
        : arcValue6;
    }),
    (arcHelper8.context = function (arcParam23) {
      return arguments.length
        ? ((arcValue7 = arcParam23 ?? null), arcHelper8)
        : arcValue7;
    }),
    arcHelper8
  );
}
