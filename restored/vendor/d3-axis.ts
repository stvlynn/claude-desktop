// Restored from ref/webview/assets/axis-BWiM9Kg7.js
// Axis chunk restored from the Codex webview bundle.
import { linearI, linearL, linearR, linearS } from "./d3-scale-linear";
import {
  stringA,
  stringC,
  stringD,
  stringF,
  stringI,
  stringS,
  stringU,
} from "./d3-interpolate-string";
import { init } from "../utils/init";
var axisValue1 = Math.PI / 180,
  axisValue2 = 180 / Math.PI;
function axisHelper1(axisParam30) {
  if (axisParam30 instanceof axisHelper3)
    return new axisHelper3(
      axisParam30.l,
      axisParam30.a,
      axisParam30.b,
      axisParam30.opacity,
    );
  if (axisParam30 instanceof axisHelper10) return axisHelper11(axisParam30);
  axisParam30 instanceof stringC || (axisParam30 = stringU(axisParam30));
  var axisValue106 = axisHelper7(axisParam30.r),
    axisValue107 = axisHelper7(axisParam30.g),
    axisValue108 = axisHelper7(axisParam30.b),
    axisValue109 = axisHelper4(
      (0.2225045 * axisValue106 +
        0.7168786 * axisValue107 +
        0.0606169 * axisValue108) /
        1,
    ),
    axisValue110,
    axisValue111;
  return (
    axisValue106 === axisValue107 && axisValue107 === axisValue108
      ? (axisValue110 = axisValue111 = axisValue109)
      : ((axisValue110 = axisHelper4(
          (0.4360747 * axisValue106 +
            0.3850649 * axisValue107 +
            0.1430804 * axisValue108) /
            0.96422,
        )),
        (axisValue111 = axisHelper4(
          (0.0139322 * axisValue106 +
            0.0971045 * axisValue107 +
            0.7141733 * axisValue108) /
            0.82521,
        ))),
    new axisHelper3(
      116 * axisValue109 - 16,
      500 * (axisValue110 - axisValue109),
      200 * (axisValue109 - axisValue111),
      axisParam30.opacity,
    )
  );
}
function axisHelper2(axisParam191, axisParam192, axisParam193, axisParam194) {
  return arguments.length === 1
    ? axisHelper1(axisParam191)
    : new axisHelper3(
        axisParam191,
        axisParam192,
        axisParam193,
        axisParam194 ?? 1,
      );
}
function axisHelper3(axisParam170, axisParam171, axisParam172, axisParam173) {
  this.l = +axisParam170;
  this.a = +axisParam171;
  this.b = +axisParam172;
  this.opacity = +axisParam173;
}
stringD(
  axisHelper3,
  axisHelper2,
  stringF(stringS, {
    brighter(axisParam189) {
      return new axisHelper3(
        this.l + 18 * (axisParam189 ?? 1),
        this.a,
        this.b,
        this.opacity,
      );
    },
    darker(axisParam195) {
      return new axisHelper3(
        this.l - 18 * (axisParam195 ?? 1),
        this.a,
        this.b,
        this.opacity,
      );
    },
    rgb() {
      var axisValue119 = (this.l + 16) / 116,
        axisValue120 = isNaN(this.a)
          ? axisValue119
          : axisValue119 + this.a / 500,
        axisValue121 = isNaN(this.b)
          ? axisValue119
          : axisValue119 - this.b / 200;
      return (
        (axisValue120 = 0.96422 * axisHelper5(axisValue120)),
        (axisValue119 = axisHelper5(axisValue119)),
        (axisValue121 = 0.82521 * axisHelper5(axisValue121)),
        new stringC(
          axisHelper6(
            3.1338561 * axisValue120 -
              1.6168667 * axisValue119 -
              0.4906146 * axisValue121,
          ),
          axisHelper6(
            -0.9787684 * axisValue120 +
              1.9161415 * axisValue119 +
              0.033454 * axisValue121,
          ),
          axisHelper6(
            0.0719453 * axisValue120 -
              0.2289914 * axisValue119 +
              1.4052427 * axisValue121,
          ),
          this.opacity,
        )
      );
    },
  }),
);
function axisHelper4(axisParam267) {
  return axisParam267 > 0.008856451679035631
    ? axisParam267 ** 0.3333333333333333
    : axisParam267 / 0.12841854934601665 + 0.13793103448275862;
}
function axisHelper5(axisParam273) {
  return axisParam273 > 0.20689655172413793
    ? axisParam273 * axisParam273 * axisParam273
    : 0.12841854934601665 * (axisParam273 - 0.13793103448275862);
}
function axisHelper6(axisParam174) {
  return (
    255 *
    (axisParam174 <= 0.0031308
      ? 12.92 * axisParam174
      : 1.055 * axisParam174 ** 0.4166666666666667 - 0.055)
  );
}
function axisHelper7(axisParam183) {
  return (axisParam183 /= 255) <= 0.04045
    ? axisParam183 / 12.92
    : ((axisParam183 + 0.055) / 1.055) ** 2.4;
}
function axisHelper8(axisParam36) {
  if (axisParam36 instanceof axisHelper10)
    return new axisHelper10(
      axisParam36.h,
      axisParam36.c,
      axisParam36.l,
      axisParam36.opacity,
    );
  if (
    (axisParam36 instanceof axisHelper3 ||
      (axisParam36 = axisHelper1(axisParam36)),
    axisParam36.a === 0 && axisParam36.b === 0)
  )
    return new axisHelper10(
      NaN,
      0 < axisParam36.l && axisParam36.l < 100 ? 0 : NaN,
      axisParam36.l,
      axisParam36.opacity,
    );
  var axisValue127 = Math.atan2(axisParam36.b, axisParam36.a) * axisValue2;
  return new axisHelper10(
    axisValue127 < 0 ? axisValue127 + 360 : axisValue127,
    Math.sqrt(axisParam36.a * axisParam36.a + axisParam36.b * axisParam36.b),
    axisParam36.l,
    axisParam36.opacity,
  );
}
function axisHelper9(axisParam184, axisParam185, axisParam186, axisParam187) {
  return arguments.length === 1
    ? axisHelper8(axisParam184)
    : new axisHelper10(
        axisParam184,
        axisParam185,
        axisParam186,
        axisParam187 ?? 1,
      );
}
function axisHelper10(axisParam175, axisParam176, axisParam177, axisParam178) {
  this.h = +axisParam175;
  this.c = +axisParam176;
  this.l = +axisParam177;
  this.opacity = +axisParam178;
}
function axisHelper11(axisParam67) {
  if (isNaN(axisParam67.h))
    return new axisHelper3(axisParam67.l, 0, 0, axisParam67.opacity);
  var axisValue150 = axisParam67.h * axisValue1;
  return new axisHelper3(
    axisParam67.l,
    Math.cos(axisValue150) * axisParam67.c,
    Math.sin(axisValue150) * axisParam67.c,
    axisParam67.opacity,
  );
}
stringD(
  axisHelper10,
  axisHelper9,
  stringF(stringS, {
    brighter(axisParam190) {
      return new axisHelper10(
        this.h,
        this.c,
        this.l + 18 * (axisParam190 ?? 1),
        this.opacity,
      );
    },
    darker(axisParam196) {
      return new axisHelper10(
        this.h,
        this.c,
        this.l - 18 * (axisParam196 ?? 1),
        this.opacity,
      );
    },
    rgb() {
      return axisHelper11(this).rgb();
    },
  }),
);
function axisHelper12(axisParam38) {
  return function (axisParam41, axisParam42) {
    var axisValue128 = axisParam38(
        (axisParam41 = axisHelper9(axisParam41)).h,
        (axisParam42 = axisHelper9(axisParam42)).h,
      ),
      axisValue129 = stringA(axisParam41.c, axisParam42.c),
      axisValue130 = stringA(axisParam41.l, axisParam42.l),
      axisValue131 = stringA(axisParam41.opacity, axisParam42.opacity);
    return function (axisParam72) {
      return (
        (axisParam41.h = axisValue128(axisParam72)),
        (axisParam41.c = axisValue129(axisParam72)),
        (axisParam41.l = axisValue130(axisParam72)),
        (axisParam41.opacity = axisValue131(axisParam72)),
        axisParam41 + ""
      );
    };
  };
}
export const axisV = axisHelper12(stringI);
function axisHelper13(axisParam53, axisParam54) {
  axisParam53 = axisParam53.slice();
  var axisValue138 = 0,
    axisValue139 = axisParam53.length - 1,
    axisValue140 = axisParam53[axisValue138],
    axisValue141 = axisParam53[axisValue139],
    axisValue142;
  return (
    axisValue141 < axisValue140 &&
      ((axisValue142 = axisValue138),
      (axisValue138 = axisValue139),
      (axisValue139 = axisValue142),
      (axisValue142 = axisValue140),
      (axisValue140 = axisValue141),
      (axisValue141 = axisValue142)),
    (axisParam53[axisValue138] = axisParam54.floor(axisValue140)),
    (axisParam53[axisValue139] = axisParam54.ceil(axisValue141)),
    axisParam53
  );
}
var axisValue11 = new Date(),
  axisValue12 = new Date();
function axisHelper14(axisParam8, axisParam9, axisParam10, axisParam11) {
  function axisHelper119(axisParam179) {
    return (
      axisParam8(
        (axisParam179 =
          arguments.length === 0 ? new Date() : new Date(+axisParam179)),
      ),
      axisParam179
    );
  }
  return (
    (axisHelper119.floor = (axisParam370) => (
      axisParam8((axisParam370 = new Date(+axisParam370))),
      axisParam370
    )),
    (axisHelper119.ceil = (axisParam320) => (
      axisParam8((axisParam320 = new Date(axisParam320 - 1))),
      axisParam9(axisParam320, 1),
      axisParam8(axisParam320),
      axisParam320
    )),
    (axisHelper119.round = (axisParam188) => {
      let axisValue186 = axisHelper119(axisParam188),
        axisValue187 = axisHelper119.ceil(axisParam188);
      return axisParam188 - axisValue186 < axisValue187 - axisParam188
        ? axisValue186
        : axisValue187;
    }),
    (axisHelper119.offset = (axisParam201, axisParam202) => (
      axisParam9(
        (axisParam201 = new Date(+axisParam201)),
        axisParam202 == null ? 1 : Math.floor(axisParam202),
      ),
      axisParam201
    )),
    (axisHelper119.range = (axisParam48, axisParam49, axisParam50) => {
      let axisValue136 = [];
      if (
        ((axisParam48 = axisHelper119.ceil(axisParam48)),
        (axisParam50 = axisParam50 == null ? 1 : Math.floor(axisParam50)),
        !(axisParam48 < axisParam49) || !(axisParam50 > 0))
      )
        return axisValue136;
      let axisValue137;
      do {
        axisValue136.push((axisValue137 = new Date(+axisParam48)));
        axisParam9(axisParam48, axisParam50);
        axisParam8(axisParam48);
      } while (axisValue137 < axisParam48 && axisParam48 < axisParam49);
      return axisValue136;
    }),
    (axisHelper119.filter = (axisParam46) =>
      axisHelper14(
        (axisParam205) => {
          if (axisParam205 >= axisParam205)
            for (; axisParam8(axisParam205), !axisParam46(axisParam205); )
              axisParam205.setTime(axisParam205 - 1);
        },
        (axisParam65, axisParam66) => {
          if (axisParam65 >= axisParam65)
            if (axisParam66 < 0)
              for (; ++axisParam66 <= 0; )
                for (
                  ;
                  axisParam9(axisParam65, -1), !axisParam46(axisParam65);

                );
            else
              for (; --axisParam66 >= 0; )
                for (; axisParam9(axisParam65, 1), !axisParam46(axisParam65); );
        },
      )),
    axisParam10 &&
      ((axisHelper119.count = (axisParam109, axisParam110) => (
        axisValue11.setTime(+axisParam109),
        axisValue12.setTime(+axisParam110),
        axisParam8(axisValue11),
        axisParam8(axisValue12),
        Math.floor(axisParam10(axisValue11, axisValue12))
      )),
      (axisHelper119.every = (axisParam55) => (
        (axisParam55 = Math.floor(axisParam55)),
        !isFinite(axisParam55) || !(axisParam55 > 0)
          ? null
          : axisParam55 > 1
            ? axisHelper119.filter(
                axisParam11
                  ? (axisParam384) =>
                      axisParam11(axisParam384) % axisParam55 === 0
                  : (axisParam372) =>
                      axisHelper119.count(0, axisParam372) % axisParam55 === 0,
              )
            : axisHelper119
      ))),
    axisHelper119
  );
}
var axisUnderscore = axisHelper14(
  () => {},
  (axisParam364, axisParam365) => {
    axisParam364.setTime(+axisParam364 + axisParam365);
  },
  (axisParam407, axisParam408) => axisParam408 - axisParam407,
);
axisUnderscore.every = (axisParam47) => (
  (axisParam47 = Math.floor(axisParam47)),
  !isFinite(axisParam47) || !(axisParam47 > 0)
    ? null
    : axisParam47 > 1
      ? axisHelper14(
          (axisParam235) => {
            axisParam235.setTime(
              Math.floor(axisParam235 / axisParam47) * axisParam47,
            );
          },
          (axisParam276, axisParam277) => {
            axisParam276.setTime(+axisParam276 + axisParam277 * axisParam47);
          },
          (axisParam385, axisParam386) =>
            (axisParam386 - axisParam385) / axisParam47,
        )
      : axisUnderscore
);
axisUnderscore.range;
var axisG = axisHelper14(
  (axisParam286) => {
    axisParam286.setTime(axisParam286 - axisParam286.getMilliseconds());
  },
  (axisParam342, axisParam343) => {
    axisParam342.setTime(+axisParam342 + axisParam343 * 1e3);
  },
  (axisParam387, axisParam388) => (axisParam388 - axisParam387) / 1e3,
  (axisParam377) => axisParam377.getUTCSeconds(),
);
axisG.range;
var axisH = axisHelper14(
  (axisParam222) => {
    axisParam222.setTime(
      axisParam222 -
        axisParam222.getMilliseconds() -
        axisParam222.getSeconds() * 1e3,
    );
  },
  (axisParam350, axisParam351) => {
    axisParam350.setTime(+axisParam350 + axisParam351 * 60000);
  },
  (axisParam389, axisParam390) => (axisParam390 - axisParam389) / 60000,
  (axisParam391) => axisParam391.getMinutes(),
);
axisH.range;
var axisValue20 = axisHelper14(
  (axisParam362) => {
    axisParam362.setUTCSeconds(0, 0);
  },
  (axisParam352, axisParam353) => {
    axisParam352.setTime(+axisParam352 + axisParam353 * 60000);
  },
  (axisParam392, axisParam393) => (axisParam393 - axisParam392) / 60000,
  (axisParam378) => axisParam378.getUTCMinutes(),
);
axisValue20.range;
var axisM = axisHelper14(
  (axisParam155) => {
    axisParam155.setTime(
      axisParam155 -
        axisParam155.getMilliseconds() -
        axisParam155.getSeconds() * 1e3 -
        axisParam155.getMinutes() * 60000,
    );
  },
  (axisParam354, axisParam355) => {
    axisParam354.setTime(+axisParam354 + axisParam355 * 3600000);
  },
  (axisParam394, axisParam395) => (axisParam395 - axisParam394) / 3600000,
  (axisParam404) => axisParam404.getHours(),
);
axisM.range;
var axisValue21 = axisHelper14(
  (axisParam356) => {
    axisParam356.setUTCMinutes(0, 0, 0);
  },
  (axisParam357, axisParam358) => {
    axisParam357.setTime(+axisParam357 + axisParam358 * 3600000);
  },
  (axisParam396, axisParam397) => (axisParam397 - axisParam396) / 3600000,
  (axisParam380) => axisParam380.getUTCHours(),
);
axisValue21.range;
var axisP = axisHelper14(
  (axisParam374) => axisParam374.setHours(0, 0, 0, 0),
  (axisParam368, axisParam369) =>
    axisParam368.setDate(axisParam368.getDate() + axisParam369),
  (axisParam215, axisParam216) =>
    (axisParam216 -
      axisParam215 -
      (axisParam216.getTimezoneOffset() - axisParam215.getTimezoneOffset()) *
        60000) /
    86400000,
  (axisParam381) => axisParam381.getDate() - 1,
);
axisP.range;
var axisValue22 = axisHelper14(
  (axisParam346) => {
    axisParam346.setUTCHours(0, 0, 0, 0);
  },
  (axisParam304, axisParam305) => {
    axisParam304.setUTCDate(axisParam304.getUTCDate() + axisParam305);
  },
  (axisParam398, axisParam399) => (axisParam399 - axisParam398) / 86400000,
  (axisParam375) => axisParam375.getUTCDate() - 1,
);
axisValue22.range;
var axisValue23 = axisHelper14(
  (axisParam347) => {
    axisParam347.setUTCHours(0, 0, 0, 0);
  },
  (axisParam306, axisParam307) => {
    axisParam306.setUTCDate(axisParam306.getUTCDate() + axisParam307);
  },
  (axisParam400, axisParam401) => (axisParam401 - axisParam400) / 86400000,
  (axisParam379) => Math.floor(axisParam379 / 86400000),
);
axisValue23.range;
function axisHelper15(axisParam51) {
  return axisHelper14(
    (axisParam156) => {
      axisParam156.setDate(
        axisParam156.getDate() -
          ((axisParam156.getDay() + 7 - axisParam51) % 7),
      );
      axisParam156.setHours(0, 0, 0, 0);
    },
    (axisParam292, axisParam293) => {
      axisParam292.setDate(axisParam292.getDate() + axisParam293 * 7);
    },
    (axisParam217, axisParam218) =>
      (axisParam218 -
        axisParam217 -
        (axisParam218.getTimezoneOffset() - axisParam217.getTimezoneOffset()) *
          60000) /
      604800000,
  );
}
var axisL = axisHelper15(0),
  axisS = axisHelper15(1),
  axisD = axisHelper15(2),
  axisF = axisHelper15(3),
  axisU = axisHelper15(4),
  axisO = axisHelper15(5),
  axisC = axisHelper15(6);
axisL.range;
axisS.range;
axisD.range;
axisF.range;
axisU.range;
axisO.range;
axisC.range;
function axisHelper16(axisParam52) {
  return axisHelper14(
    (axisParam118) => {
      axisParam118.setUTCDate(
        axisParam118.getUTCDate() -
          ((axisParam118.getUTCDay() + 7 - axisParam52) % 7),
      );
      axisParam118.setUTCHours(0, 0, 0, 0);
    },
    (axisParam257, axisParam258) => {
      axisParam257.setUTCDate(axisParam257.getUTCDate() + axisParam258 * 7);
    },
    (axisParam402, axisParam403) => (axisParam403 - axisParam402) / 604800000,
  );
}
var axisValue24 = axisHelper16(0),
  be = axisHelper16(1),
  axisValue25 = axisHelper16(2),
  axisValue26 = axisHelper16(3),
  axisValue27 = axisHelper16(4),
  axisValue28 = axisHelper16(5),
  axisValue29 = axisHelper16(6);
axisValue24.range;
be.range;
axisValue25.range;
axisValue26.range;
axisValue27.range;
axisValue28.range;
axisValue29.range;
var axisA = axisHelper14(
  (axisParam287) => {
    axisParam287.setDate(1);
    axisParam287.setHours(0, 0, 0, 0);
  },
  (axisParam328, axisParam329) => {
    axisParam328.setMonth(axisParam328.getMonth() + axisParam329);
  },
  (axisParam203, axisParam204) =>
    axisParam204.getMonth() -
    axisParam203.getMonth() +
    (axisParam204.getFullYear() - axisParam203.getFullYear()) * 12,
  (axisParam405) => axisParam405.getMonth(),
);
axisA.range;
var axisValue30 = axisHelper14(
  (axisParam246) => {
    axisParam246.setUTCDate(1);
    axisParam246.setUTCHours(0, 0, 0, 0);
  },
  (axisParam294, axisParam295) => {
    axisParam294.setUTCMonth(axisParam294.getUTCMonth() + axisParam295);
  },
  (axisParam163, axisParam164) =>
    axisParam164.getUTCMonth() -
    axisParam163.getUTCMonth() +
    (axisParam164.getUTCFullYear() - axisParam163.getUTCFullYear()) * 12,
  (axisParam382) => axisParam382.getUTCMonth(),
);
axisValue30.range;
var axisValue31 = axisHelper14(
  (axisParam268) => {
    axisParam268.setMonth(0, 1);
    axisParam268.setHours(0, 0, 0, 0);
  },
  (axisParam296, axisParam297) => {
    axisParam296.setFullYear(axisParam296.getFullYear() + axisParam297);
  },
  (axisParam348, axisParam349) =>
    axisParam349.getFullYear() - axisParam348.getFullYear(),
  (axisParam383) => axisParam383.getFullYear(),
);
axisValue31.every = (axisParam40) =>
  !isFinite((axisParam40 = Math.floor(axisParam40))) || !(axisParam40 > 0)
    ? null
    : axisHelper14(
        (axisParam78) => {
          axisParam78.setFullYear(
            Math.floor(axisParam78.getFullYear() / axisParam40) * axisParam40,
          );
          axisParam78.setMonth(0, 1);
          axisParam78.setHours(0, 0, 0, 0);
        },
        (axisParam223, axisParam224) => {
          axisParam223.setFullYear(
            axisParam223.getFullYear() + axisParam224 * axisParam40,
          );
        },
      );
axisValue31.range;
var axisValue32 = axisHelper14(
  (axisParam236) => {
    axisParam236.setUTCMonth(0, 1);
    axisParam236.setUTCHours(0, 0, 0, 0);
  },
  (axisParam259, axisParam260) => {
    axisParam259.setUTCFullYear(axisParam259.getUTCFullYear() + axisParam260);
  },
  (axisParam330, axisParam331) =>
    axisParam331.getUTCFullYear() - axisParam330.getUTCFullYear(),
  (axisParam376) => axisParam376.getUTCFullYear(),
);
axisValue32.every = (axisParam39) =>
  !isFinite((axisParam39 = Math.floor(axisParam39))) || !(axisParam39 > 0)
    ? null
    : axisHelper14(
        (axisParam68) => {
          axisParam68.setUTCFullYear(
            Math.floor(axisParam68.getUTCFullYear() / axisParam39) *
              axisParam39,
          );
          axisParam68.setUTCMonth(0, 1);
          axisParam68.setUTCHours(0, 0, 0, 0);
        },
        (axisParam211, axisParam212) => {
          axisParam211.setUTCFullYear(
            axisParam211.getUTCFullYear() + axisParam212 * axisParam39,
          );
        },
      );
axisValue32.range;
function axisHelper17(
  axisParam22,
  axisParam23,
  axisParam24,
  axisParam25,
  axisParam26,
  axisParam27,
) {
  let axisValue105 = [
    [axisG, 1, 1e3],
    [axisG, 5, 5000],
    [axisG, 15, 15000],
    [axisG, 30, 30000],
    [axisParam27, 1, 60000],
    [axisParam27, 5, 300000],
    [axisParam27, 15, 900000],
    [axisParam27, 30, 1800000],
    [axisParam26, 1, 3600000],
    [axisParam26, 3, 10800000],
    [axisParam26, 6, 21600000],
    [axisParam26, 12, 43200000],
    [axisParam25, 1, 86400000],
    [axisParam25, 2, 172800000],
    [axisParam24, 1, 604800000],
    [axisParam23, 1, 2592000000],
    [axisParam23, 3, 7776000000],
    [axisParam22, 1, 31536000000],
  ];
  function axisHelper121(axisParam57, axisParam58, axisParam59) {
    let axisValue144 = axisParam58 < axisParam57;
    axisValue144 && ([axisParam57, axisParam58] = [axisParam58, axisParam57]);
    let axisValue145 =
        axisParam59 && typeof axisParam59.range == "function"
          ? axisParam59
          : axisHelper122(axisParam57, axisParam58, axisParam59),
      axisValue146 = axisValue145
        ? axisValue145.range(axisParam57, +axisParam58 + 1)
        : [];
    return axisValue144 ? axisValue146.reverse() : axisValue146;
  }
  function axisHelper122(axisParam43, axisParam44, axisParam45) {
    let axisValue132 = Math.abs(axisParam44 - axisParam43) / axisParam45,
      axisValue133 = linearL(([, , axisParam409]) => axisParam409).right(
        axisValue105,
        axisValue132,
      );
    if (axisValue133 === axisValue105.length)
      return axisParam22.every(
        linearS(
          axisParam43 / 31536000000,
          axisParam44 / 31536000000,
          axisParam45,
        ),
      );
    if (axisValue133 === 0)
      return axisUnderscore.every(
        Math.max(linearS(axisParam43, axisParam44, axisParam45), 1),
      );
    let [axisValue134, axisValue135] =
      axisValue105[
        axisValue132 / axisValue105[axisValue133 - 1][2] <
        axisValue105[axisValue133][2] / axisValue132
          ? axisValue133 - 1
          : axisValue133
      ];
    return axisValue134.every(axisValue135);
  }
  return [axisHelper121, axisHelper122];
}
var [axisValue33, axisValue34] = axisHelper17(
    axisValue32,
    axisValue30,
    axisValue24,
    axisValue23,
    axisValue21,
    axisValue20,
  ),
  [axisValue35, axisValue36] = axisHelper17(
    axisValue31,
    axisA,
    axisL,
    axisP,
    axisM,
    axisH,
  );
function axisHelper18(axisParam60) {
  if (0 <= axisParam60.y && axisParam60.y < 100) {
    var axisValue147 = new Date(
      -1,
      axisParam60.m,
      axisParam60.d,
      axisParam60.H,
      axisParam60.M,
      axisParam60.S,
      axisParam60.L,
    );
    return (axisValue147.setFullYear(axisParam60.y), axisValue147);
  }
  return new Date(
    axisParam60.y,
    axisParam60.m,
    axisParam60.d,
    axisParam60.H,
    axisParam60.M,
    axisParam60.S,
    axisParam60.L,
  );
}
function axisHelper19(axisParam56) {
  if (0 <= axisParam56.y && axisParam56.y < 100) {
    var axisValue143 = new Date(
      Date.UTC(
        -1,
        axisParam56.m,
        axisParam56.d,
        axisParam56.H,
        axisParam56.M,
        axisParam56.S,
        axisParam56.L,
      ),
    );
    return (axisValue143.setUTCFullYear(axisParam56.y), axisValue143);
  }
  return new Date(
    Date.UTC(
      axisParam56.y,
      axisParam56.m,
      axisParam56.d,
      axisParam56.H,
      axisParam56.M,
      axisParam56.S,
      axisParam56.L,
    ),
  );
}
function axisHelper20(axisParam208, axisParam209, axisParam210) {
  return {
    y: axisParam208,
    m: axisParam209,
    d: axisParam210,
    H: 0,
    M: 0,
    S: 0,
    L: 0,
  };
}
function axisHelper21(axisParam1) {
  var axisValue45 = axisParam1.dateTime,
    axisValue46 = axisParam1.date,
    axisValue47 = axisParam1.time,
    axisValue48 = axisParam1.periods,
    axisValue49 = axisParam1.days,
    axisValue50 = axisParam1.shortDays,
    axisValue51 = axisParam1.months,
    axisValue52 = axisParam1.shortMonths,
    axisValue53 = axisHelper24(axisValue48),
    axisValue54 = axisHelper25(axisValue48),
    axisValue55 = axisHelper24(axisValue49),
    axisValue56 = axisHelper25(axisValue49),
    axisValue57 = axisHelper24(axisValue50),
    axisValue58 = axisHelper25(axisValue50),
    axisValue59 = axisHelper24(axisValue51),
    axisValue60 = axisHelper25(axisValue51),
    axisValue61 = axisHelper24(axisValue52),
    axisValue62 = axisHelper25(axisValue52),
    axisValue63 = {
      a: axisHelper108,
      A: _axisV,
      b: axisHelper109,
      B: axisHelper110,
      c: null,
      d: at,
      e: at,
      f: axisHelper49,
      g: axisHelper59,
      G: axisHelper61,
      H: axisHelper45,
      I: axisHelper46,
      j: axisHelper47,
      L: axisHelper48,
      m: axisHelper50,
      M: axisHelper51,
      p: axisHelper111,
      q: axisHelper112,
      Q: axisHelper84,
      s: axisHelper85,
      S: axisHelper52,
      u: axisHelper53,
      U: axisHelper54,
      V: _t,
      w: axisHelper56,
      W: axisHelper57,
      x: null,
      X: null,
      y: axisHelper58,
      Y: axisHelper60,
      Z: axisHelper62,
      "%": axisHelper83,
    },
    axisValue64 = {
      a: _axisUnderscore,
      A: axisHelper113,
      b: axisHelper114,
      B: axisHelper115,
      c: null,
      d: axisHelper63,
      e: axisHelper63,
      f: axisHelper68,
      g: axisHelper79,
      G: axisHelper81,
      H: axisHelper64,
      I: axisHelper65,
      j: axisHelper66,
      L: axisHelper67,
      m: axisHelper69,
      M: axisHelper70,
      p: axisHelper116,
      q: axisHelper117,
      Q: axisHelper84,
      s: axisHelper85,
      S: axisHelper71,
      u: axisHelper72,
      U: axisHelper73,
      V: axisHelper75,
      w: axisHelper76,
      W: axisHelper77,
      x: null,
      X: null,
      y: axisHelper78,
      Y: axisHelper80,
      Z: axisHelper82,
      "%": axisHelper83,
    },
    axisValue65 = {
      a: axisHelper101,
      A: axisHelper102,
      b: axisHelper103,
      B: axisHelper104,
      c: axisHelper105,
      d: axisHelper36,
      e: axisHelper36,
      f: axisHelper41,
      g: axisHelper32,
      G: axisHelper31,
      H: axisHelper38,
      I: axisHelper38,
      j: axisHelper37,
      L: axisHelper40,
      m: axisHelper35,
      M: axisHelper39,
      p: axisHelper100,
      q: axisHelper34,
      Q: axisHelper43,
      s: axisHelper44,
      S: $e,
      u: axisHelper27,
      U: axisHelper28,
      V: axisHelper29,
      w: axisHelper26,
      W: axisHelper30,
      x: axisHelper106,
      X: axisHelper107,
      y: axisHelper32,
      Y: axisHelper31,
      Z: axisHelper33,
      "%": axisHelper42,
    };
  axisValue63.x = axisHelper97(axisValue46, axisValue63);
  axisValue63.X = axisHelper97(axisValue47, axisValue63);
  axisValue63.c = axisHelper97(axisValue45, axisValue63);
  axisValue64.x = axisHelper97(axisValue46, axisValue64);
  axisValue64.X = axisHelper97(axisValue47, axisValue64);
  axisValue64.c = axisHelper97(axisValue45, axisValue64);
  function axisHelper97(axisParam28, axisParam29) {
    return function (axisParam31) {
      var axisValue112 = [],
        axisValue113 = -1,
        axisValue114 = 0,
        axisValue115 = axisParam28.length,
        axisValue116,
        axisValue117,
        axisValue118;
      for (
        axisParam31 instanceof Date || (axisParam31 = new Date(+axisParam31));
        ++axisValue113 < axisValue115;

      )
        axisParam28.charCodeAt(axisValue113) === 37 &&
          (axisValue112.push(axisParam28.slice(axisValue114, axisValue113)),
          (axisValue117 =
            axisValue37[(axisValue116 = axisParam28.charAt(++axisValue113))]) ==
          null
            ? (axisValue117 = axisValue116 === "e" ? " " : "0")
            : (axisValue116 = axisParam28.charAt(++axisValue113)),
          (axisValue118 = axisParam29[axisValue116]) &&
            (axisValue116 = axisValue118(axisParam31, axisValue117)),
          axisValue112.push(axisValue116),
          (axisValue114 = axisValue113 + 1));
      return (
        axisValue112.push(axisParam28.slice(axisValue114, axisValue113)),
        axisValue112.join("")
      );
    };
  }
  function axisHelper98(axisParam5, axisParam6) {
    return function (axisParam7) {
      var axisValue90 = axisHelper20(1900, undefined, 1),
        axisValue91 = axisHelper99(
          axisValue90,
          axisParam5,
          (axisParam7 += ""),
          0,
        ),
        axisValue92,
        axisValue93;
      if (axisValue91 != axisParam7.length) return null;
      if ("Q" in axisValue90) return new Date(axisValue90.Q);
      if ("s" in axisValue90)
        return new Date(
          axisValue90.s * 1e3 + ("L" in axisValue90 ? axisValue90.L : 0),
        );
      if (
        (axisParam6 && !("Z" in axisValue90) && (axisValue90.Z = 0),
        "p" in axisValue90 &&
          (axisValue90.H = (axisValue90.H % 12) + axisValue90.p * 12),
        axisValue90.m === undefined &&
          (axisValue90.m = "q" in axisValue90 ? axisValue90.q : 0),
        "V" in axisValue90)
      ) {
        if (axisValue90.V < 1 || axisValue90.V > 53) return null;
        "w" in axisValue90 || (axisValue90.w = 1);
        "Z" in axisValue90
          ? ((axisValue92 = axisHelper19(axisHelper20(axisValue90.y, 0, 1))),
            (axisValue93 = axisValue92.getUTCDay()),
            (axisValue92 =
              axisValue93 > 4 || axisValue93 === 0
                ? be.ceil(axisValue92)
                : be(axisValue92)),
            (axisValue92 = axisValue22.offset(
              axisValue92,
              (axisValue90.V - 1) * 7,
            )),
            (axisValue90.y = axisValue92.getUTCFullYear()),
            (axisValue90.m = axisValue92.getUTCMonth()),
            (axisValue90.d =
              axisValue92.getUTCDate() + ((axisValue90.w + 6) % 7)))
          : ((axisValue92 = axisHelper18(axisHelper20(axisValue90.y, 0, 1))),
            (axisValue93 = axisValue92.getDay()),
            (axisValue92 =
              axisValue93 > 4 || axisValue93 === 0
                ? axisS.ceil(axisValue92)
                : axisS(axisValue92)),
            (axisValue92 = axisP.offset(axisValue92, (axisValue90.V - 1) * 7)),
            (axisValue90.y = axisValue92.getFullYear()),
            (axisValue90.m = axisValue92.getMonth()),
            (axisValue90.d =
              axisValue92.getDate() + ((axisValue90.w + 6) % 7)));
      } else
        ("W" in axisValue90 || "U" in axisValue90) &&
          ("w" in axisValue90 ||
            (axisValue90.w =
              "u" in axisValue90
                ? axisValue90.u % 7
                : "W" in axisValue90
                  ? 1
                  : 0),
          (axisValue93 =
            "Z" in axisValue90
              ? axisHelper19(axisHelper20(axisValue90.y, 0, 1)).getUTCDay()
              : axisHelper18(axisHelper20(axisValue90.y, 0, 1)).getDay()),
          (axisValue90.m = 0),
          (axisValue90.d =
            "W" in axisValue90
              ? ((axisValue90.w + 6) % 7) +
                axisValue90.W * 7 -
                ((axisValue93 + 5) % 7)
              : axisValue90.w + axisValue90.U * 7 - ((axisValue93 + 6) % 7)));
      return "Z" in axisValue90
        ? ((axisValue90.H += (axisValue90.Z / 100) | 0),
          (axisValue90.M += axisValue90.Z % 100),
          axisHelper19(axisValue90))
        : axisHelper18(axisValue90);
    };
  }
  function axisHelper99(axisParam32, axisParam33, axisParam34, axisParam35) {
    for (
      var axisValue122 = 0,
        axisValue123 = axisParam33.length,
        axisValue124 = axisParam34.length,
        axisValue125,
        axisValue126;
      axisValue122 < axisValue123;

    ) {
      if (axisParam35 >= axisValue124) return -1;
      if (
        ((axisValue125 = axisParam33.charCodeAt(axisValue122++)),
        axisValue125 === 37)
      ) {
        if (
          ((axisValue125 = axisParam33.charAt(axisValue122++)),
          (axisValue126 =
            axisValue65[
              axisValue125 in axisValue37
                ? axisParam33.charAt(axisValue122++)
                : axisValue125
            ]),
          !axisValue126 ||
            (axisParam35 = axisValue126(
              axisParam32,
              axisParam34,
              axisParam35,
            )) < 0)
        )
          return -1;
      } else if (axisValue125 != axisParam34.charCodeAt(axisParam35++))
        return -1;
    }
    return axisParam35;
  }
  function axisHelper100(axisParam98, axisParam99, axisParam100) {
    var axisValue165 = axisValue53.exec(axisParam99.slice(axisParam100));
    return axisValue165
      ? ((axisParam98.p = axisValue54.get(axisValue165[0].toLowerCase())),
        axisParam100 + axisValue165[0].length)
      : -1;
  }
  function axisHelper101(axisParam101, axisParam102, axisParam103) {
    var axisValue166 = axisValue57.exec(axisParam102.slice(axisParam103));
    return axisValue166
      ? ((axisParam101.w = axisValue58.get(axisValue166[0].toLowerCase())),
        axisParam103 + axisValue166[0].length)
      : -1;
  }
  function axisHelper102(axisParam89, axisParam90, axisParam91) {
    var axisValue162 = axisValue55.exec(axisParam90.slice(axisParam91));
    return axisValue162
      ? ((axisParam89.w = axisValue56.get(axisValue162[0].toLowerCase())),
        axisParam91 + axisValue162[0].length)
      : -1;
  }
  function axisHelper103(axisParam92, axisParam93, axisParam94) {
    var axisValue163 = axisValue61.exec(axisParam93.slice(axisParam94));
    return axisValue163
      ? ((axisParam92.m = axisValue62.get(axisValue163[0].toLowerCase())),
        axisParam94 + axisValue163[0].length)
      : -1;
  }
  function axisHelper104(axisParam95, axisParam96, axisParam97) {
    var axisValue164 = axisValue59.exec(axisParam96.slice(axisParam97));
    return axisValue164
      ? ((axisParam95.m = axisValue60.get(axisValue164[0].toLowerCase())),
        axisParam97 + axisValue164[0].length)
      : -1;
  }
  function axisHelper105(axisParam312, axisParam313, axisParam314) {
    return axisHelper99(axisParam312, axisValue45, axisParam313, axisParam314);
  }
  function axisHelper106(axisParam321, axisParam322, axisParam323) {
    return axisHelper99(axisParam321, axisValue46, axisParam322, axisParam323);
  }
  function axisHelper107(axisParam315, axisParam316, axisParam317) {
    return axisHelper99(axisParam315, axisValue47, axisParam316, axisParam317);
  }
  function axisHelper108(axisParam344) {
    return axisValue50[axisParam344.getDay()];
  }
  function _axisV(axisParam345) {
    return axisValue49[axisParam345.getDay()];
  }
  function axisHelper109(axisParam333) {
    return axisValue52[axisParam333.getMonth()];
  }
  function axisHelper110(axisParam334) {
    return axisValue51[axisParam334.getMonth()];
  }
  function axisHelper111(axisParam288) {
    return axisValue48[+(axisParam288.getHours() >= 12)];
  }
  function axisHelper112(axisParam289) {
    return 1 + ~~(axisParam289.getMonth() / 3);
  }
  function _axisUnderscore(axisParam335) {
    return axisValue50[axisParam335.getUTCDay()];
  }
  function axisHelper113(axisParam336) {
    return axisValue49[axisParam336.getUTCDay()];
  }
  function axisHelper114(axisParam324) {
    return axisValue52[axisParam324.getUTCMonth()];
  }
  function axisHelper115(axisParam325) {
    return axisValue51[axisParam325.getUTCMonth()];
  }
  function axisHelper116(axisParam274) {
    return axisValue48[+(axisParam274.getUTCHours() >= 12)];
  }
  function axisHelper117(axisParam275) {
    return 1 + ~~(axisParam275.getUTCMonth() / 3);
  }
  return {
    format: function (axisParam73) {
      var axisValue154 = axisHelper97((axisParam73 += ""), axisValue63);
      return (
        (axisValue154.toString = function () {
          return axisParam73;
        }),
        axisValue154
      );
    },
    parse: function (axisParam70) {
      var axisValue152 = axisHelper98((axisParam70 += ""), false);
      return (
        (axisValue152.toString = function () {
          return axisParam70;
        }),
        axisValue152
      );
    },
    utcFormat: function (axisParam74) {
      var axisValue155 = axisHelper97((axisParam74 += ""), axisValue64);
      return (
        (axisValue155.toString = function () {
          return axisParam74;
        }),
        axisValue155
      );
    },
    utcParse: function (axisParam71) {
      var axisValue153 = axisHelper98((axisParam71 += ""), true);
      return (
        (axisValue153.toString = function () {
          return axisParam71;
        }),
        axisValue153
      );
    },
  };
}
var axisValue37 = {
    "-": "",
    _: " ",
    0: "0",
  },
  axisValue38 = /^\s*\d+/,
  axisValue39 = /^%/,
  axisValue40 = /[\\^$*+?|[\]().{}]/g;
function axisHelper22(axisParam75, axisParam76, axisParam77) {
  var axisValue156 = axisParam75 < 0 ? "-" : "",
    axisValue157 = (axisValue156 ? -axisParam75 : axisParam75) + "",
    axisValue158 = axisValue157.length;
  return (
    axisValue156 +
    (axisValue158 < axisParam77
      ? Array(axisParam77 - axisValue158 + 1).join(axisParam76) + axisValue157
      : axisValue157)
  );
}
function axisHelper23(axisParam326) {
  return axisParam326.replace(axisValue40, "\\$&");
}
function axisHelper24(axisParam219) {
  return RegExp("^(?:" + axisParam219.map(axisHelper23).join("|") + ")", "i");
}
function axisHelper25(axisParam221) {
  return new Map(
    axisParam221.map((item, index) => [item.toLowerCase(), index]),
  );
}
function axisHelper26(axisParam122, axisParam123, axisParam124) {
  var axisValue172 = axisValue38.exec(
    axisParam123.slice(axisParam124, axisParam124 + 1),
  );
  return axisValue172
    ? ((axisParam122.w = +axisValue172[0]),
      axisParam124 + axisValue172[0].length)
    : -1;
}
function axisHelper27(axisParam125, axisParam126, axisParam127) {
  var axisValue173 = axisValue38.exec(
    axisParam126.slice(axisParam127, axisParam127 + 1),
  );
  return axisValue173
    ? ((axisParam125.u = +axisValue173[0]),
      axisParam127 + axisValue173[0].length)
    : -1;
}
function axisHelper28(axisParam128, axisParam129, axisParam130) {
  var axisValue174 = axisValue38.exec(
    axisParam129.slice(axisParam130, axisParam130 + 2),
  );
  return axisValue174
    ? ((axisParam128.U = +axisValue174[0]),
      axisParam130 + axisValue174[0].length)
    : -1;
}
function axisHelper29(axisParam131, axisParam132, axisParam133) {
  var axisValue175 = axisValue38.exec(
    axisParam132.slice(axisParam133, axisParam133 + 2),
  );
  return axisValue175
    ? ((axisParam131.V = +axisValue175[0]),
      axisParam133 + axisValue175[0].length)
    : -1;
}
function axisHelper30(axisParam134, axisParam135, axisParam136) {
  var axisValue176 = axisValue38.exec(
    axisParam135.slice(axisParam136, axisParam136 + 2),
  );
  return axisValue176
    ? ((axisParam134.W = +axisValue176[0]),
      axisParam136 + axisValue176[0].length)
    : -1;
}
function axisHelper31(axisParam137, axisParam138, axisParam139) {
  var axisValue177 = axisValue38.exec(
    axisParam138.slice(axisParam139, axisParam139 + 4),
  );
  return axisValue177
    ? ((axisParam137.y = +axisValue177[0]),
      axisParam139 + axisValue177[0].length)
    : -1;
}
function axisHelper32(axisParam85, axisParam86, axisParam87) {
  var axisValue161 = axisValue38.exec(
    axisParam86.slice(axisParam87, axisParam87 + 2),
  );
  return axisValue161
    ? ((axisParam85.y =
        +axisValue161[0] + (+axisValue161[0] > 68 ? 1900 : 2e3)),
      axisParam87 + axisValue161[0].length)
    : -1;
}
function axisHelper33(axisParam62, axisParam63, axisParam64) {
  var axisValue149 = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(
    axisParam63.slice(axisParam64, axisParam64 + 6),
  );
  return axisValue149
    ? ((axisParam62.Z = axisValue149[1]
        ? 0
        : -(axisValue149[2] + (axisValue149[3] || "00"))),
      axisParam64 + axisValue149[0].length)
    : -1;
}
function axisHelper34(axisParam115, axisParam116, axisParam117) {
  var axisValue170 = axisValue38.exec(
    axisParam116.slice(axisParam117, axisParam117 + 1),
  );
  return axisValue170
    ? ((axisParam115.q = axisValue170[0] * 3 - 3),
      axisParam117 + axisValue170[0].length)
    : -1;
}
function axisHelper35(axisParam119, axisParam120, axisParam121) {
  var axisValue171 = axisValue38.exec(
    axisParam120.slice(axisParam121, axisParam121 + 2),
  );
  return axisValue171
    ? ((axisParam119.m = axisValue171[0] - 1),
      axisParam121 + axisValue171[0].length)
    : -1;
}
function axisHelper36(axisParam140, axisParam141, axisParam142) {
  var axisValue178 = axisValue38.exec(
    axisParam141.slice(axisParam142, axisParam142 + 2),
  );
  return axisValue178
    ? ((axisParam140.d = +axisValue178[0]),
      axisParam142 + axisValue178[0].length)
    : -1;
}
function axisHelper37(axisParam111, axisParam112, axisParam113) {
  var axisValue169 = axisValue38.exec(
    axisParam112.slice(axisParam113, axisParam113 + 3),
  );
  return axisValue169
    ? ((axisParam111.m = 0),
      (axisParam111.d = +axisValue169[0]),
      axisParam113 + axisValue169[0].length)
    : -1;
}
function axisHelper38(axisParam143, axisParam144, axisParam145) {
  var axisValue179 = axisValue38.exec(
    axisParam144.slice(axisParam145, axisParam145 + 2),
  );
  return axisValue179
    ? ((axisParam143.H = +axisValue179[0]),
      axisParam145 + axisValue179[0].length)
    : -1;
}
function axisHelper39(axisParam146, axisParam147, axisParam148) {
  var axisValue180 = axisValue38.exec(
    axisParam147.slice(axisParam148, axisParam148 + 2),
  );
  return axisValue180
    ? ((axisParam146.M = +axisValue180[0]),
      axisParam148 + axisValue180[0].length)
    : -1;
}
function $e(axisParam149, axisParam150, axisParam151) {
  var axisValue181 = axisValue38.exec(
    axisParam150.slice(axisParam151, axisParam151 + 2),
  );
  return axisValue181
    ? ((axisParam149.S = +axisValue181[0]),
      axisParam151 + axisValue181[0].length)
    : -1;
}
function axisHelper40(axisParam152, axisParam153, axisParam154) {
  var axisValue182 = axisValue38.exec(
    axisParam153.slice(axisParam154, axisParam154 + 3),
  );
  return axisValue182
    ? ((axisParam152.L = +axisValue182[0]),
      axisParam154 + axisValue182[0].length)
    : -1;
}
function axisHelper41(axisParam104, axisParam105, axisParam106) {
  var axisValue167 = axisValue38.exec(
    axisParam105.slice(axisParam106, axisParam106 + 6),
  );
  return axisValue167
    ? ((axisParam104.L = Math.floor(axisValue167[0] / 1e3)),
      axisParam106 + axisValue167[0].length)
    : -1;
}
function axisHelper42(axisParam167, axisParam168, axisParam169) {
  var axisValue185 = axisValue39.exec(
    axisParam168.slice(axisParam169, axisParam169 + 1),
  );
  return axisValue185 ? axisParam169 + axisValue185[0].length : -1;
}
function axisHelper43(axisParam157, axisParam158, axisParam159) {
  var axisValue183 = axisValue38.exec(axisParam158.slice(axisParam159));
  return axisValue183
    ? ((axisParam157.Q = +axisValue183[0]),
      axisParam159 + axisValue183[0].length)
    : -1;
}
function axisHelper44(axisParam160, axisParam161, axisParam162) {
  var axisValue184 = axisValue38.exec(axisParam161.slice(axisParam162));
  return axisValue184
    ? ((axisParam160.s = +axisValue184[0]),
      axisParam162 + axisValue184[0].length)
    : -1;
}
function at(axisParam318, axisParam319) {
  return axisHelper22(axisParam318.getDate(), axisParam319, 2);
}
function axisHelper45(axisParam308, axisParam309) {
  return axisHelper22(axisParam308.getHours(), axisParam309, 2);
}
function axisHelper46(axisParam242, axisParam243) {
  return axisHelper22(axisParam242.getHours() % 12 || 12, axisParam243, 2);
}
function axisHelper47(axisParam261, axisParam262) {
  return axisHelper22(
    1 + axisP.count(axisValue31(axisParam261), axisParam261),
    axisParam262,
    3,
  );
}
function axisHelper48(axisParam269, axisParam270) {
  return axisHelper22(axisParam269.getMilliseconds(), axisParam270, 3);
}
function axisHelper49(axisParam337, axisParam338) {
  return axisHelper48(axisParam337, axisParam338) + "000";
}
function axisHelper50(axisParam284, axisParam285) {
  return axisHelper22(axisParam284.getMonth() + 1, axisParam285, 2);
}
function axisHelper51(axisParam298, axisParam299) {
  return axisHelper22(axisParam298.getMinutes(), axisParam299, 2);
}
function axisHelper52(axisParam300, axisParam301) {
  return axisHelper22(axisParam300.getSeconds(), axisParam301, 2);
}
function axisHelper53(axisParam237) {
  var axisValue192 = axisParam237.getDay();
  return axisValue192 === 0 ? 7 : axisValue192;
}
function axisHelper54(axisParam263, axisParam264) {
  return axisHelper22(
    axisL.count(axisValue31(axisParam263) - 1, axisParam263),
    axisParam264,
    2,
  );
}
function axisHelper55(axisParam199) {
  var axisValue189 = axisParam199.getDay();
  return axisValue189 >= 4 || axisValue189 === 0
    ? axisU(axisParam199)
    : axisU.ceil(axisParam199);
}
function _t(axisParam180, axisParam181) {
  return (
    (axisParam180 = axisHelper55(axisParam180)),
    axisHelper22(
      axisU.count(axisValue31(axisParam180), axisParam180) +
        (axisValue31(axisParam180).getDay() === 4),
      axisParam181,
      2,
    )
  );
}
function axisHelper56(axisParam363) {
  return axisParam363.getDay();
}
function axisHelper57(axisParam265, axisParam266) {
  return axisHelper22(
    axisS.count(axisValue31(axisParam265) - 1, axisParam265),
    axisParam266,
    2,
  );
}
function axisHelper58(axisParam247, axisParam248) {
  return axisHelper22(axisParam247.getFullYear() % 100, axisParam248, 2);
}
function axisHelper59(axisParam213, axisParam214) {
  return (
    (axisParam213 = axisHelper55(axisParam213)),
    axisHelper22(axisParam213.getFullYear() % 100, axisParam214, 2)
  );
}
function axisHelper60(axisParam249, axisParam250) {
  return axisHelper22(axisParam249.getFullYear() % 1e4, axisParam250, 4);
}
function axisHelper61(axisParam83, axisParam84) {
  var axisValue160 = axisParam83.getDay();
  return (
    (axisParam83 =
      axisValue160 >= 4 || axisValue160 === 0
        ? axisU(axisParam83)
        : axisU.ceil(axisParam83)),
    axisHelper22(axisParam83.getFullYear() % 1e4, axisParam84, 4)
  );
}
function axisHelper62(axisParam69) {
  var axisValue151 = axisParam69.getTimezoneOffset();
  return (
    (axisValue151 > 0 ? "-" : ((axisValue151 *= -1), "+")) +
    axisHelper22((axisValue151 / 60) | 0, "0", 2) +
    axisHelper22(axisValue151 % 60, "0", 2)
  );
}
function axisHelper63(axisParam302, axisParam303) {
  return axisHelper22(axisParam302.getUTCDate(), axisParam303, 2);
}
function axisHelper64(axisParam290, axisParam291) {
  return axisHelper22(axisParam290.getUTCHours(), axisParam291, 2);
}
function axisHelper65(axisParam232, axisParam233) {
  return axisHelper22(axisParam232.getUTCHours() % 12 || 12, axisParam233, 2);
}
function axisHelper66(axisParam251, axisParam252) {
  return axisHelper22(
    1 + axisValue22.count(axisValue32(axisParam251), axisParam251),
    axisParam252,
    3,
  );
}
function axisHelper67(axisParam244, axisParam245) {
  return axisHelper22(axisParam244.getUTCMilliseconds(), axisParam245, 3);
}
function axisHelper68(axisParam339, axisParam340) {
  return axisHelper67(axisParam339, axisParam340) + "000";
}
function axisHelper69(axisParam271, axisParam272) {
  return axisHelper22(axisParam271.getUTCMonth() + 1, axisParam272, 2);
}
function axisHelper70(axisParam278, axisParam279) {
  return axisHelper22(axisParam278.getUTCMinutes(), axisParam279, 2);
}
function axisHelper71(axisParam280, axisParam281) {
  return axisHelper22(axisParam280.getUTCSeconds(), axisParam281, 2);
}
function axisHelper72(axisParam231) {
  var axisValue191 = axisParam231.getUTCDay();
  return axisValue191 === 0 ? 7 : axisValue191;
}
function axisHelper73(axisParam253, axisParam254) {
  return axisHelper22(
    axisValue24.count(axisValue32(axisParam253) - 1, axisParam253),
    axisParam254,
    2,
  );
}
function axisHelper74(axisParam197) {
  var axisValue188 = axisParam197.getUTCDay();
  return axisValue188 >= 4 || axisValue188 === 0
    ? axisValue27(axisParam197)
    : axisValue27.ceil(axisParam197);
}
function axisHelper75(axisParam165, axisParam166) {
  return (
    (axisParam165 = axisHelper74(axisParam165)),
    axisHelper22(
      axisValue27.count(axisValue32(axisParam165), axisParam165) +
        (axisValue32(axisParam165).getUTCDay() === 4),
      axisParam166,
      2,
    )
  );
}
function axisHelper76(axisParam359) {
  return axisParam359.getUTCDay();
}
function axisHelper77(axisParam255, axisParam256) {
  return axisHelper22(
    be.count(axisValue32(axisParam255) - 1, axisParam255),
    axisParam256,
    2,
  );
}
function axisHelper78(axisParam238, axisParam239) {
  return axisHelper22(axisParam238.getUTCFullYear() % 100, axisParam239, 2);
}
function axisHelper79(axisParam206, axisParam207) {
  return (
    (axisParam206 = axisHelper74(axisParam206)),
    axisHelper22(axisParam206.getUTCFullYear() % 100, axisParam207, 2)
  );
}
function axisHelper80(axisParam240, axisParam241) {
  return axisHelper22(axisParam240.getUTCFullYear() % 1e4, axisParam241, 4);
}
function axisHelper81(axisParam79, axisParam80) {
  var axisValue159 = axisParam79.getUTCDay();
  return (
    (axisParam79 =
      axisValue159 >= 4 || axisValue159 === 0
        ? axisValue27(axisParam79)
        : axisValue27.ceil(axisParam79)),
    axisHelper22(axisParam79.getUTCFullYear() % 1e4, axisParam80, 4)
  );
}
function axisHelper82() {
  return "+0000";
}
function axisHelper83() {
  return "%";
}
function axisHelper84(axisParam371) {
  return +axisParam371;
}
function axisHelper85(axisParam341) {
  return Math.floor(axisParam341 / 1e3);
}
var $, axisI;
axisHelper86({
  dateTime: "%x, %X",
  date: "%-m/%-d/%Y",
  time: "%-I:%M:%S %p",
  periods: ["AM", "PM"],
  days: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  months: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  shortMonths: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
});
function axisHelper86(axisParam182) {
  return (
    ($ = axisHelper21(axisParam182)),
    (axisI = $.format),
    $.parse,
    $.utcFormat,
    $.utcParse,
    $
  );
}
function axisHelper87(axisParam361) {
  return new Date(axisParam361);
}
function axisHelper88(axisParam234) {
  return axisParam234 instanceof Date
    ? +axisParam234
    : +new Date(+axisParam234);
}
function axisHelper89(
  axisParam12,
  axisParam13,
  axisParam14,
  axisParam15,
  axisParam16,
  axisParam17,
  axisParam18,
  axisParam19,
  axisParam20,
  axisParam21,
) {
  var axisValue94 = linearR(),
    axisValue95 = axisValue94.invert,
    axisValue96 = axisValue94.domain,
    axisValue97 = axisParam21(".%L"),
    axisValue98 = axisParam21(":%S"),
    axisValue99 = axisParam21("%I:%M"),
    axisValue100 = axisParam21("%I %p"),
    axisValue101 = axisParam21("%a %d"),
    axisValue102 = axisParam21("%b %d"),
    axisValue103 = axisParam21("%B"),
    axisValue104 = axisParam21("%Y");
  function axisHelper120(axisParam37) {
    return (
      axisParam20(axisParam37) < axisParam37
        ? axisValue97
        : axisParam19(axisParam37) < axisParam37
          ? axisValue98
          : axisParam18(axisParam37) < axisParam37
            ? axisValue99
            : axisParam17(axisParam37) < axisParam37
              ? axisValue100
              : axisParam15(axisParam37) < axisParam37
                ? axisParam16(axisParam37) < axisParam37
                  ? axisValue101
                  : axisValue102
                : axisParam14(axisParam37) < axisParam37
                  ? axisValue103
                  : axisValue104
    )(axisParam37);
  }
  return (
    (axisValue94.invert = function (axisParam332) {
      return new Date(axisValue95(axisParam332));
    }),
    (axisValue94.domain = function (axisParam198) {
      return arguments.length
        ? axisValue96(Array.from(axisParam198, axisHelper88))
        : axisValue96().map(axisHelper87);
    }),
    (axisValue94.ticks = function (axisParam200) {
      var axisValue190 = axisValue96();
      return axisParam12(
        axisValue190[0],
        axisValue190[axisValue190.length - 1],
        axisParam200 ?? 10,
      );
    }),
    (axisValue94.tickFormat = function (axisParam282, axisParam283) {
      return axisParam283 == null ? axisHelper120 : axisParam21(axisParam283);
    }),
    (axisValue94.nice = function (axisParam61) {
      var axisValue148 = axisValue96();
      return (
        (!axisParam61 || typeof axisParam61.range != "function") &&
          (axisParam61 = axisParam13(
            axisValue148[0],
            axisValue148[axisValue148.length - 1],
            axisParam61 ?? 10,
          )),
        axisParam61
          ? axisValue96(axisHelper13(axisValue148, axisParam61))
          : axisValue94
      );
    }),
    (axisValue94.copy = function () {
      return linearI(
        axisValue94,
        axisHelper89(
          axisParam12,
          axisParam13,
          axisParam14,
          axisParam15,
          axisParam16,
          axisParam17,
          axisParam18,
          axisParam19,
          axisParam20,
          axisParam21,
        ),
      );
    }),
    axisValue94
  );
}
export function axisR() {
  return init.apply(
    axisHelper89(
      axisValue35,
      axisValue36,
      axisValue31,
      axisA,
      axisL,
      axisP,
      axisM,
      axisH,
      axisG,
      axisI,
    ).domain([new Date(2e3, 0, 1), new Date(2e3, 0, 2)]),
    arguments,
  );
}
function axisHelper90(axisParam373) {
  return axisParam373;
}
function axisHelper91(axisParam310) {
  return "translate(" + axisParam310 + ",0)";
}
function axisHelper92(axisParam311) {
  return "translate(0," + axisParam311 + ")";
}
function axisHelper93(axisParam360) {
  return (axisParam410) => +axisParam360(axisParam410);
}
function axisHelper94(axisParam81, axisParam82) {
  return (
    (axisParam82 = Math.max(0, axisParam81.bandwidth() - axisParam82 * 2) / 2),
    axisParam81.round() && (axisParam82 = Math.round(axisParam82)),
    (axisParam406) => +axisParam81(axisParam406) + axisParam82
  );
}
function axisHelper95() {
  return !this.__axis;
}
function axisHelper96(axisParam2, axisParam3) {
  var axisValue66 = [],
    axisValue67 = null,
    axisValue68 = null,
    axisValue69 = 6,
    axisValue70 = 6,
    axisValue71 = 3,
    axisValue72 = typeof window < "u" && window.devicePixelRatio > 1 ? 0 : 0.5,
    axisValue73 = axisParam2 === 1 || axisParam2 === 4 ? -1 : 1,
    axisValue74 = axisParam2 === 4 || axisParam2 === 2 ? "x" : "y",
    axisValue75 =
      axisParam2 === 1 || axisParam2 === 3 ? axisHelper91 : axisHelper92;
  function axisHelper118(axisParam4) {
    var axisValue76 =
        axisValue67 ??
        (axisParam3.ticks
          ? axisParam3.ticks.apply(axisParam3, axisValue66)
          : axisParam3.domain()),
      axisValue77 =
        axisValue68 ??
        (axisParam3.tickFormat
          ? axisParam3.tickFormat.apply(axisParam3, axisValue66)
          : axisHelper90),
      axisValue78 = Math.max(axisValue69, 0) + axisValue71,
      axisValue79 = axisParam3.range(),
      axisValue80 = +axisValue79[0] + axisValue72,
      axisValue81 = +axisValue79[axisValue79.length - 1] + axisValue72,
      axisValue82 = (axisParam3.bandwidth ? axisHelper94 : axisHelper93)(
        axisParam3.copy(),
        axisValue72,
      ),
      axisValue83 = axisParam4.selection ? axisParam4.selection() : axisParam4,
      axisValue84 = axisValue83.selectAll(".domain").data([null]),
      axisValue85 = axisValue83
        .selectAll(".tick")
        .data(axisValue76, axisParam3)
        .order(),
      axisValue86 = axisValue85.exit(),
      axisValue87 = axisValue85.enter().append("g").attr("class", "tick"),
      axisValue88 = axisValue85.select("line"),
      axisValue89 = axisValue85.select("text");
    axisValue84 = axisValue84.merge(
      axisValue84
        .enter()
        .insert("path", ".tick")
        .attr("class", "domain")
        .attr("stroke", "currentColor"),
    );
    axisValue85 = axisValue85.merge(axisValue87);
    axisValue88 = axisValue88.merge(
      axisValue87
        .append("line")
        .attr("stroke", "currentColor")
        .attr(axisValue74 + "2", axisValue73 * axisValue69),
    );
    axisValue89 = axisValue89.merge(
      axisValue87
        .append("text")
        .attr("fill", "currentColor")
        .attr(axisValue74, axisValue73 * axisValue78)
        .attr(
          "dy",
          axisParam2 === 1 ? "0em" : axisParam2 === 3 ? "0.71em" : "0.32em",
        ),
    );
    axisParam4 !== axisValue83 &&
      ((axisValue84 = axisValue84.transition(axisParam4)),
      (axisValue85 = axisValue85.transition(axisParam4)),
      (axisValue88 = axisValue88.transition(axisParam4)),
      (axisValue89 = axisValue89.transition(axisParam4)),
      (axisValue86 = axisValue86
        .transition(axisParam4)
        .attr("opacity", 1e-6)
        .attr("transform", function (axisParam88) {
          return isFinite((axisParam88 = axisValue82(axisParam88)))
            ? axisValue75(axisParam88 + axisValue72)
            : this.getAttribute("transform");
        })),
      axisValue87
        .attr("opacity", 1e-6)
        .attr("transform", function (axisParam107) {
          var axisValue168 = this.parentNode.__axis;
          return axisValue75(
            (axisValue168 &&
            isFinite((axisValue168 = axisValue168(axisParam107)))
              ? axisValue168
              : axisValue82(axisParam107)) + axisValue72,
          );
        }));
    axisValue86.remove();
    axisValue84.attr(
      "d",
      axisParam2 === 4 || axisParam2 === 2
        ? axisValue70
          ? "M" +
            axisValue73 * axisValue70 +
            "," +
            axisValue80 +
            "H" +
            axisValue72 +
            "V" +
            axisValue81 +
            "H" +
            axisValue73 * axisValue70
          : "M" + axisValue72 + "," + axisValue80 + "V" + axisValue81
        : axisValue70
          ? "M" +
            axisValue80 +
            "," +
            axisValue73 * axisValue70 +
            "V" +
            axisValue72 +
            "H" +
            axisValue81 +
            "V" +
            axisValue73 * axisValue70
          : "M" + axisValue80 + "," + axisValue72 + "H" + axisValue81,
    );
    axisValue85.attr("opacity", 1).attr("transform", function (axisParam327) {
      return axisValue75(axisValue82(axisParam327) + axisValue72);
    });
    axisValue88.attr(axisValue74 + "2", axisValue73 * axisValue69);
    axisValue89.attr(axisValue74, axisValue73 * axisValue78).text(axisValue77);
    axisValue83
      .filter(axisHelper95)
      .attr("fill", "none")
      .attr("font-size", 10)
      .attr("font-family", "sans-serif")
      .attr(
        "text-anchor",
        axisParam2 === 2 ? "start" : axisParam2 === 4 ? "end" : "middle",
      );
    axisValue83.each(function () {
      this.__axis = axisValue82;
    });
  }
  return (
    (axisHelper118.scale = function (axisParam229) {
      return arguments.length
        ? ((axisParam3 = axisParam229), axisHelper118)
        : axisParam3;
    }),
    (axisHelper118.ticks = function () {
      return ((axisValue66 = Array.from(arguments)), axisHelper118);
    }),
    (axisHelper118.tickArguments = function (axisParam114) {
      return arguments.length
        ? ((axisValue66 = axisParam114 == null ? [] : Array.from(axisParam114)),
          axisHelper118)
        : axisValue66.slice();
    }),
    (axisHelper118.tickValues = function (axisParam108) {
      return arguments.length
        ? ((axisValue67 =
            axisParam108 == null ? null : Array.from(axisParam108)),
          axisHelper118)
        : axisValue67 && axisValue67.slice();
    }),
    (axisHelper118.tickFormat = function (axisParam230) {
      return arguments.length
        ? ((axisValue68 = axisParam230), axisHelper118)
        : axisValue68;
    }),
    (axisHelper118.tickSize = function (axisParam220) {
      return arguments.length
        ? ((axisValue69 = axisValue70 = +axisParam220), axisHelper118)
        : axisValue69;
    }),
    (axisHelper118.tickSizeInner = function (axisParam225) {
      return arguments.length
        ? ((axisValue69 = +axisParam225), axisHelper118)
        : axisValue69;
    }),
    (axisHelper118.tickSizeOuter = function (axisParam226) {
      return arguments.length
        ? ((axisValue70 = +axisParam226), axisHelper118)
        : axisValue70;
    }),
    (axisHelper118.tickPadding = function (axisParam227) {
      return arguments.length
        ? ((axisValue71 = +axisParam227), axisHelper118)
        : axisValue71;
    }),
    (axisHelper118.offset = function (axisParam228) {
      return arguments.length
        ? ((axisValue72 = +axisParam228), axisHelper118)
        : axisValue72;
    }),
    axisHelper118
  );
}
export function axisN(axisParam366) {
  return axisHelper96(1, axisParam366);
}
export function axisT(axisParam367) {
  return axisHelper96(3, axisParam367);
}
export {
  axisUnderscore,
  axisA,
  axisC,
  axisD,
  axisF,
  axisG,
  axisH,
  axisI,
  axisL,
  axisM,
  axisO,
  axisP,
  axisS,
  axisU,
};
