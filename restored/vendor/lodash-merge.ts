// Restored from ref/webview/assets/merge-Baqijoc_.js
// Merge chunk restored from the Codex webview bundle.
import {
  baseForC as _baseForC,
  baseForO as _baseForO,
  baseForT as _baseForT,
  baseForA,
  baseForC,
  baseForD,
  baseForF,
  baseForG,
  baseForH,
  baseForI,
  baseForM,
  baseForN,
  baseForO,
  baseForP,
  _baseForS,
  baseForT,
  baseForUnderscore,
  baseForV,
  baseForW,
  baseForX,
} from "./lodash-base-for";
var mergeValue1 = Object.create,
  mergeValue2 = (function () {
    function mergeHelper11() {}
    return function (mergeParam39) {
      if (!baseForW(mergeParam39)) return {};
      if (mergeValue1) return mergeValue1(mergeParam39);
      mergeHelper11.prototype = mergeParam39;
      var mergeValue56 = new mergeHelper11();
      return ((mergeHelper11.prototype = undefined), mergeValue56);
    };
  })();
function mergeHelper1(mergeParam14, mergeParam15, mergeParam16) {
  switch (mergeParam16.length) {
    case 0:
      return mergeParam14.call(mergeParam15);
    case 1:
      return mergeParam14.call(mergeParam15, mergeParam16[0]);
    case 2:
      return mergeParam14.call(mergeParam15, mergeParam16[0], mergeParam16[1]);
    case 3:
      return mergeParam14.call(
        mergeParam15,
        mergeParam16[0],
        mergeParam16[1],
        mergeParam16[2],
      );
  }
  return mergeParam14.apply(mergeParam15, mergeParam16);
}
function mergeUnderscore(mergeParam50, mergeParam51) {
  var mergeValue60 = -1,
    mergeValue61 = mergeParam50.length;
  for (mergeParam51 ||= Array(mergeValue61); ++mergeValue60 < mergeValue61; )
    mergeParam51[mergeValue60] = mergeParam50[mergeValue60];
  return mergeParam51;
}
var mergeValue5 = Date.now;
function mergeHelper2(mergeParam27) {
  var mergeValue45 = 0,
    mergeValue46 = 0;
  return function () {
    var mergeValue52 = mergeValue5(),
      mergeValue53 = 16 - (mergeValue52 - mergeValue46);
    if (((mergeValue46 = mergeValue52), mergeValue53 > 0)) {
      if (++mergeValue45 >= 800) return arguments[0];
    } else mergeValue45 = 0;
    return mergeParam27.apply(undefined, arguments);
  };
}
function mergeG(mergeParam57) {
  return function () {
    return mergeParam57;
  };
}
var mergeValue6 = (function () {
    try {
      var mergeValue62 = baseForX(Object, "defineProperty");
      return (mergeValue62({}, "", {}), mergeValue62);
    } catch {}
  })(),
  mergeH = mergeHelper2(
    mergeValue6
      ? function (mergeParam44, mergeParam45) {
          return mergeValue6(mergeParam44, "toString", {
            configurable: true,
            enumerable: false,
            value: mergeG(mergeParam45),
            writable: true,
          });
        }
      : baseForN,
  );
function mergeM(mergeParam34, mergeParam35, mergeParam36) {
  mergeParam35 == "__proto__" && mergeValue6
    ? mergeValue6(mergeParam34, mergeParam35, {
        configurable: true,
        enumerable: true,
        value: mergeParam36,
        writable: true,
      })
    : (mergeParam34[mergeParam35] = mergeParam36);
}
var mergeValue7 = Object.prototype.hasOwnProperty;
function mergeP(mergeParam46, mergeParam47, mergeParam48) {
  var mergeValue58 = mergeParam46[mergeParam47];
  (!(
    mergeValue7.call(mergeParam46, mergeParam47) &&
    baseForO(mergeValue58, mergeParam48)
  ) ||
    (mergeParam48 === undefined && !(mergeParam47 in mergeParam46))) &&
    mergeM(mergeParam46, mergeParam47, mergeParam48);
}
function mergeF(mergeParam18, mergeParam19, mergeParam20, mergeParam21) {
  var mergeValue35 = !mergeParam20;
  mergeParam20 ||= {};
  for (
    var mergeValue36 = -1, mergeValue37 = mergeParam19.length;
    ++mergeValue36 < mergeValue37;

  ) {
    var mergeValue38 = mergeParam19[mergeValue36],
      mergeValue39 = mergeParam21
        ? mergeParam21(
            mergeParam20[mergeValue38],
            mergeParam18[mergeValue38],
            mergeValue38,
            mergeParam20,
            mergeParam18,
          )
        : undefined;
    mergeValue39 === undefined && (mergeValue39 = mergeParam18[mergeValue38]);
    mergeValue35
      ? mergeM(mergeParam20, mergeValue38, mergeValue39)
      : mergeP(mergeParam20, mergeValue38, mergeValue39);
  }
  return mergeParam20;
}
var mergeValue8 = Math.max;
function mergeD(mergeParam11, mergeParam12, mergeParam13) {
  return (
    (mergeParam12 = mergeValue8(
      mergeParam12 === undefined ? mergeParam11.length - 1 : mergeParam12,
      0,
    )),
    function () {
      for (
        var mergeValue40 = arguments,
          mergeValue41 = -1,
          mergeValue42 = mergeValue8(mergeValue40.length - mergeParam12, 0),
          mergeValue43 = Array(mergeValue42);
        ++mergeValue41 < mergeValue42;

      )
        mergeValue43[mergeValue41] = mergeValue40[mergeParam12 + mergeValue41];
      mergeValue41 = -1;
      for (
        var mergeValue44 = Array(mergeParam12 + 1);
        ++mergeValue41 < mergeParam12;

      )
        mergeValue44[mergeValue41] = mergeValue40[mergeValue41];
      return (
        (mergeValue44[mergeParam12] = mergeParam13(mergeValue43)),
        mergeHelper1(mergeParam11, this, mergeValue44)
      );
    }
  );
}
function mergeU(mergeParam58, mergeParam59) {
  return mergeH(
    mergeD(mergeParam58, mergeParam59, baseForN),
    mergeParam58 + "",
  );
}
function mergeL(mergeParam29, mergeParam30, mergeParam31) {
  if (!baseForW(mergeParam31)) return false;
  var mergeValue50 = typeof mergeParam30;
  return (
    mergeValue50 == "number"
      ? baseForI(mergeParam31) && baseForF(mergeParam30, mergeParam31.length)
      : mergeValue50 == "string" && mergeParam30 in mergeParam31
  )
    ? baseForO(mergeParam31[mergeParam30], mergeParam29)
    : false;
}
function mergeHelper3(mergeParam8) {
  return mergeU(function (mergeParam9, mergeParam10) {
    var mergeValue28 = -1,
      mergeValue29 = mergeParam10.length,
      mergeValue30 =
        mergeValue29 > 1 ? mergeParam10[mergeValue29 - 1] : undefined,
      mergeValue31 = mergeValue29 > 2 ? mergeParam10[2] : undefined;
    for (
      mergeValue30 =
        mergeParam8.length > 3 && typeof mergeValue30 == "function"
          ? (mergeValue29--, mergeValue30)
          : undefined,
        mergeValue31 &&
          mergeL(mergeParam10[0], mergeParam10[1], mergeValue31) &&
          ((mergeValue30 = mergeValue29 < 3 ? undefined : mergeValue30),
          (mergeValue29 = 1)),
        mergeParam9 = Object(mergeParam9);
      ++mergeValue28 < mergeValue29;

    ) {
      var mergeValue32 = mergeParam10[mergeValue28];
      mergeValue32 &&
        mergeParam8(mergeParam9, mergeValue32, mergeValue28, mergeValue30);
    }
    return mergeParam9;
  });
}
function mergeHelper4(mergeParam52) {
  var mergeValue63 = [];
  if (mergeParam52 != null)
    for (var mergeValue64 in Object(mergeParam52))
      mergeValue63.push(mergeValue64);
  return mergeValue63;
}
var mergeValue9 = Object.prototype.hasOwnProperty;
function mergeHelper5(mergeParam28) {
  if (!baseForW(mergeParam28)) return mergeHelper4(mergeParam28);
  var mergeValue47 = _baseForO(mergeParam28),
    mergeValue48 = [];
  for (var mergeValue49 in mergeParam28)
    (mergeValue49 == "constructor" &&
      (mergeValue47 || !mergeValue9.call(mergeParam28, mergeValue49))) ||
      mergeValue48.push(mergeValue49);
  return mergeValue48;
}
function mergeC(mergeParam60) {
  return baseForI(mergeParam60)
    ? _baseForS(mergeParam60, true)
    : mergeHelper5(mergeParam60);
}
var mergeS = baseForA(Object.getPrototypeOf, Object),
  mergeValue11 = Function.prototype,
  mergeValue12 = Object.prototype,
  mergeValue13 = mergeValue11.toString,
  mergeValue14 = mergeValue12.hasOwnProperty,
  mergeValue15 = mergeValue13.call(Object);
function mergeHelper6(mergeParam17) {
  if (!baseForH(mergeParam17) || baseForT(mergeParam17) != "[object Object]")
    return false;
  var mergeValue33 = mergeS(mergeParam17);
  if (mergeValue33 === null) return true;
  var mergeValue34 =
    mergeValue14.call(mergeValue33, "constructor") && mergeValue33.constructor;
  return (
    typeof mergeValue34 == "function" &&
    mergeValue34 instanceof mergeValue34 &&
    mergeValue13.call(mergeValue34) == mergeValue15
  );
}
var mergeValue16 =
    typeof exports == "object" && exports && !exports.nodeType && exports,
  mergeValue17 =
    mergeValue16 &&
    typeof module == "object" &&
    module &&
    !module.nodeType &&
    module,
  mergeValue18 =
    mergeValue17 && mergeValue17.exports === mergeValue16
      ? baseForD.Buffer
      : undefined,
  mergeValue19 = mergeValue18 ? mergeValue18.allocUnsafe : undefined;
function mergeO(mergeParam37, mergeParam38) {
  if (mergeParam38) return mergeParam37.slice();
  var mergeValue54 = mergeParam37.length,
    mergeValue55 = mergeValue19
      ? mergeValue19(mergeValue54)
      : new mergeParam37.constructor(mergeValue54);
  return (mergeParam37.copy(mergeValue55), mergeValue55);
}
function mergeA(mergeParam49) {
  var mergeValue59 = new mergeParam49.constructor(mergeParam49.byteLength);
  return (
    new baseForUnderscore(mergeValue59).set(
      new baseForUnderscore(mergeParam49),
    ),
    mergeValue59
  );
}
function mergeI(mergeParam40, mergeParam41) {
  var mergeValue57 = mergeParam41
    ? mergeA(mergeParam40.buffer)
    : mergeParam40.buffer;
  return new mergeParam40.constructor(
    mergeValue57,
    mergeParam40.byteOffset,
    mergeParam40.length,
  );
}
function mergeR(mergeParam56) {
  return typeof mergeParam56.constructor == "function" &&
    !_baseForO(mergeParam56)
    ? mergeValue2(mergeS(mergeParam56))
    : {};
}
function mergeHelper7(mergeParam53, mergeParam54, mergeParam55) {
  ((mergeParam55 !== undefined &&
    !baseForO(mergeParam53[mergeParam54], mergeParam55)) ||
    (mergeParam55 === undefined && !(mergeParam54 in mergeParam53))) &&
    mergeM(mergeParam53, mergeParam54, mergeParam55);
}
function mergeN(mergeParam61) {
  return baseForH(mergeParam61) && baseForI(mergeParam61);
}
function mergeHelper8(mergeParam42, mergeParam43) {
  if (
    !(
      mergeParam43 === "constructor" &&
      typeof mergeParam42[mergeParam43] == "function"
    ) &&
    mergeParam43 != "__proto__"
  )
    return mergeParam42[mergeParam43];
}
function mergeHelper9(mergeParam62) {
  return mergeF(mergeParam62, mergeC(mergeParam62));
}
function mergeHelper10(
  mergeParam1,
  mergeParam2,
  mergeParam3,
  mergeParam4,
  mergeParam5,
  mergeParam6,
  mergeParam7,
) {
  var mergeValue20 = mergeHelper8(mergeParam1, mergeParam3),
    mergeValue21 = mergeHelper8(mergeParam2, mergeParam3),
    mergeValue22 = mergeParam7.get(mergeValue21);
  if (mergeValue22) {
    mergeHelper7(mergeParam1, mergeParam3, mergeValue22);
    return;
  }
  var mergeValue23 = mergeParam6
      ? mergeParam6(
          mergeValue20,
          mergeValue21,
          mergeParam3 + "",
          mergeParam1,
          mergeParam2,
          mergeParam7,
        )
      : undefined,
    mergeValue24 = mergeValue23 === undefined;
  if (mergeValue24) {
    var mergeValue25 = baseForG(mergeValue21),
      mergeValue26 = !mergeValue25 && baseForP(mergeValue21),
      mergeValue27 = !mergeValue25 && !mergeValue26 && _baseForC(mergeValue21);
    mergeValue23 = mergeValue21;
    mergeValue25 || mergeValue26 || mergeValue27
      ? baseForG(mergeValue20)
        ? (mergeValue23 = mergeValue20)
        : mergeN(mergeValue20)
          ? (mergeValue23 = mergeUnderscore(mergeValue20))
          : mergeValue26
            ? ((mergeValue24 = false),
              (mergeValue23 = mergeO(mergeValue21, true)))
            : mergeValue27
              ? ((mergeValue24 = false),
                (mergeValue23 = mergeI(mergeValue21, true)))
              : (mergeValue23 = [])
      : mergeHelper6(mergeValue21) || baseForM(mergeValue21)
        ? ((mergeValue23 = mergeValue20),
          baseForM(mergeValue20)
            ? (mergeValue23 = mergeHelper9(mergeValue20))
            : (!baseForW(mergeValue20) || baseForC(mergeValue20)) &&
              (mergeValue23 = mergeR(mergeValue21)))
        : (mergeValue24 = false);
  }
  mergeValue24 &&
    (mergeParam7.set(mergeValue21, mergeValue23),
    mergeParam5(
      mergeValue23,
      mergeValue21,
      mergeParam4,
      mergeParam6,
      mergeParam7,
    ),
    mergeParam7.delete(mergeValue21));
  mergeHelper7(mergeParam1, mergeParam3, mergeValue23);
}
function $(
  mergeParam22,
  mergeParam23,
  mergeParam24,
  mergeParam25,
  mergeParam26,
) {
  mergeParam22 !== mergeParam23 &&
    _baseForT(
      mergeParam23,
      function (mergeParam32, mergeParam33) {
        if (((mergeParam26 ||= new baseForV()), baseForW(mergeParam32)))
          mergeHelper10(
            mergeParam22,
            mergeParam23,
            mergeParam33,
            mergeParam24,
            $,
            mergeParam25,
            mergeParam26,
          );
        else {
          var mergeValue51 = mergeParam25
            ? mergeParam25(
                mergeHelper8(mergeParam22, mergeParam33),
                mergeParam32,
                mergeParam33 + "",
                mergeParam22,
                mergeParam23,
                mergeParam26,
              )
            : undefined;
          mergeValue51 === undefined && (mergeValue51 = mergeParam32);
          mergeHelper7(mergeParam22, mergeParam33, mergeValue51);
        }
      },
      mergeC,
    );
}
export const mergeT = mergeHelper3(
  function (mergeParam63, mergeParam64, mergeParam65) {
    $(mergeParam63, mergeParam64, mergeParam65);
  },
);
export {
  mergeUnderscore,
  mergeA,
  mergeC,
  mergeD,
  mergeF,
  mergeG,
  mergeH,
  mergeI,
  mergeL,
  mergeM,
  mergeN,
  mergeO,
  mergeP,
  mergeR,
  mergeS,
  mergeU,
};
