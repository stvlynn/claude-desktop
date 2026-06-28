// Restored from ref/webview/assets/dist-BDOgluP9.js
// Dist chunk restored from the Codex webview bundle.
import React from "react";
function distHelper1() {
  return (distHelper1 =
    Object.assign ||
    function (distParam14) {
      for (
        var distValue104 = 1;
        distValue104 < arguments.length;
        distValue104++
      ) {
        var distValue105 = arguments[distValue104];
        for (var distValue106 in distValue105)
          Object.prototype.hasOwnProperty.call(distValue105, distValue106) &&
            (distParam14[distValue106] = distValue105[distValue106]);
      }
      return distParam14;
    }).apply(this, arguments);
}
function distHelper2(distParam15, distParam16) {
  if (distParam15 == null) return {};
  var distValue107,
    distValue108,
    distValue109 = {},
    distValue110 = Object.keys(distParam15);
  for (distValue108 = 0; distValue108 < distValue110.length; distValue108++)
    distParam16.indexOf((distValue107 = distValue110[distValue108])) >= 0 ||
      (distValue109[distValue107] = distParam15[distValue107]);
  return distValue109;
}
function distHelper3(distParam17) {
  var distValue112 = React.useRef(distParam17),
    distValue113 = React.useRef(function (distParam45) {
      distValue112.current && distValue112.current(distParam45);
    });
  return ((distValue112.current = distParam17), distValue113.current);
}
var distValue2 = function (distParam25, distParam26, distParam27) {
    return (
      distParam26 === undefined && (distParam26 = 0),
      distParam27 === undefined && (distParam27 = 1),
      distParam25 > distParam27
        ? distParam27
        : distParam25 < distParam26
          ? distParam26
          : distParam25
    );
  },
  distValue3 = function (distParam46) {
    return "touches" in distParam46;
  },
  distValue4 = function (distParam38) {
    return (distParam38 && distParam38.ownerDocument.defaultView) || self;
  },
  distValue5 = function (distParam8, event, distParam9) {
    var distValue82 = distParam8.getBoundingClientRect(),
      distValue83 = distValue3(event)
        ? (function (distParam19, distParam20) {
            for (
              var distValue120 = 0;
              distValue120 < distParam19.length;
              distValue120++
            )
              if (distParam19[distValue120].identifier === distParam20)
                return distParam19[distValue120];
            return distParam19[0];
          })(event.touches, distParam9)
        : event;
    return {
      left: distValue2(
        (distValue83.pageX -
          (distValue82.left + distValue4(distParam8).pageXOffset)) /
          distValue82.width,
      ),
      top: distValue2(
        (distValue83.pageY -
          (distValue82.top + distValue4(distParam8).pageYOffset)) /
          distValue82.height,
      ),
    };
  },
  distValue6 = function (event) {
    !distValue3(event) && event.preventDefault();
  },
  distValue7 = React.memo(function (props) {
    var distValue31 = props.onMove,
      distValue32 = props.onKey,
      distValue33 = distHelper2(props, ["onMove", "onKey"]),
      distValue34 = React.useRef(null),
      distValue35 = distHelper3(distValue31),
      distValue36 = distHelper3(distValue32),
      distValue37 = React.useRef(null),
      distValue38 = React.useRef(false),
      distValue39 = React.useMemo(
        function () {
          var distValue46 = function (event) {
              distValue6(event);
              (distValue3(event)
                ? event.touches.length > 0
                : event.buttons > 0) && distValue34.current
                ? distValue35(
                    distValue5(distValue34.current, event, distValue37.current),
                  )
                : distHelper5(false);
            },
            distValue47 = function () {
              return distHelper5(false);
            };
          function distHelper5(distParam13) {
            var distValue101 = distValue38.current,
              distValue102 = distValue4(distValue34.current),
              distValue103 = distParam13
                ? distValue102.addEventListener
                : distValue102.removeEventListener;
            distValue103(distValue101 ? "touchmove" : "mousemove", distValue46);
            distValue103(distValue101 ? "touchend" : "mouseup", distValue47);
          }
          return [
            function (event) {
              var distValue70 = event.nativeEvent,
                distValue71 = distValue34.current;
              if (
                distValue71 &&
                (distValue6(distValue70),
                !(function (distParam39, distParam40) {
                  return distParam40 && !distValue3(distParam39);
                })(distValue70, distValue38.current) && distValue71)
              ) {
                if (distValue3(distValue70)) {
                  distValue38.current = true;
                  var distValue72 = distValue70.changedTouches || [];
                  distValue72.length &&
                    (distValue37.current = distValue72[0].identifier);
                }
                distValue71.focus();
                distValue35(
                  distValue5(distValue71, distValue70, distValue37.current),
                );
                distHelper5(true);
              }
            },
            function (event) {
              var distValue96 = event.which || event.keyCode;
              distValue96 < 37 ||
                distValue96 > 40 ||
                (event.preventDefault(),
                distValue36({
                  left:
                    distValue96 === 39 ? 0.05 : distValue96 === 37 ? -0.05 : 0,
                  top:
                    distValue96 === 40 ? 0.05 : distValue96 === 38 ? -0.05 : 0,
                }));
            },
            distHelper5,
          ];
        },
        [distValue36, distValue35],
      ),
      distValue40 = distValue39[0],
      distValue41 = distValue39[1],
      distValue42 = distValue39[2];
    return (
      React.useEffect(
        function () {
          return distValue42;
        },
        [distValue42],
      ),
      React.createElement(
        "div",
        distHelper1({}, distValue33, {
          onTouchStart: distValue40,
          onMouseDown: distValue40,
          className: "react-colorful__interactive",
          ref: distValue34,
          onKeyDown: distValue41,
          tabIndex: 0,
          role: "slider",
        }),
      )
    );
  }),
  distValue8 = function (distParam44) {
    return distParam44.filter(Boolean).join(" ");
  },
  distValue9 = function (distParam11) {
    var distValue91 = distParam11.color,
      distValue92 = distParam11.left,
      distValue93 = distParam11.top,
      distValue94 = distValue93 === undefined ? 0.5 : distValue93,
      distValue95 = distValue8([
        "react-colorful__pointer",
        distParam11.className,
      ]);
    return React.createElement(
      "div",
      {
        className: distValue95,
        style: {
          top: 100 * distValue94 + "%",
          left: 100 * distValue92 + "%",
        },
      },
      React.createElement("div", {
        className: "react-colorful__pointer-fill",
        style: {
          backgroundColor: distValue91,
        },
      }),
    );
  },
  distValue10 = function (distParam22, distParam23, distParam24) {
    return (
      distParam23 === undefined && (distParam23 = 0),
      distParam24 === undefined && (distParam24 = 10 ** distParam23),
      Math.round(distParam24 * distParam22) / distParam24
    );
  };
360 / (2 * Math.PI);
var distValue11 = function (distParam47) {
    return distValue19(distValue12(distParam47));
  },
  distValue12 = function (distParam6) {
    return (
      distParam6[0] === "#" && (distParam6 = distParam6.substring(1)),
      distParam6.length < 6
        ? {
            r: parseInt(distParam6[0] + distParam6[0], 16),
            g: parseInt(distParam6[1] + distParam6[1], 16),
            b: parseInt(distParam6[2] + distParam6[2], 16),
            a:
              distParam6.length === 4
                ? distValue10(
                    parseInt(distParam6[3] + distParam6[3], 16) / 255,
                    2,
                  )
                : 1,
          }
        : {
            r: parseInt(distParam6.substring(0, 2), 16),
            g: parseInt(distParam6.substring(2, 4), 16),
            b: parseInt(distParam6.substring(4, 6), 16),
            a:
              distParam6.length === 8
                ? distValue10(parseInt(distParam6.substring(6, 8), 16) / 255, 2)
                : 1,
          }
    );
  },
  distValue13 = function (distParam48) {
    return distValue18(distValue16(distParam48));
  },
  distValue14 = function (distParam12) {
    var distValue97 = distParam12.s,
      distValue98 = distParam12.v,
      distValue99 = distParam12.a,
      distValue100 = ((200 - distValue97) * distValue98) / 100;
    return {
      h: distValue10(distParam12.h),
      s: distValue10(
        distValue100 > 0 && distValue100 < 200
          ? ((distValue97 * distValue98) /
              100 /
              (distValue100 <= 100 ? distValue100 : 200 - distValue100)) *
              100
          : 0,
      ),
      l: distValue10(distValue100 / 2),
      a: distValue10(distValue99, 2),
    };
  },
  distValue15 = function (distParam31) {
    var distValue122 = distValue14(distParam31);
    return (
      "hsl(" +
      distValue122.h +
      ", " +
      distValue122.s +
      "%, " +
      distValue122.l +
      "%)"
    );
  },
  distValue16 = function (distParam7) {
    var distValue73 = distParam7.h,
      distValue74 = distParam7.s,
      distValue75 = distParam7.v,
      distValue76 = distParam7.a;
    distValue73 = (distValue73 / 360) * 6;
    distValue74 /= 100;
    distValue75 /= 100;
    var distValue77 = Math.floor(distValue73),
      distValue78 = distValue75 * (1 - distValue74),
      distValue79 =
        distValue75 * (1 - (distValue73 - distValue77) * distValue74),
      distValue80 =
        distValue75 * (1 - (1 - distValue73 + distValue77) * distValue74),
      distValue81 = distValue77 % 6;
    return {
      r: distValue10(
        255 *
          [
            distValue75,
            distValue79,
            distValue78,
            distValue78,
            distValue80,
            distValue75,
          ][distValue81],
      ),
      g: distValue10(
        255 *
          [
            distValue80,
            distValue75,
            distValue75,
            distValue79,
            distValue78,
            distValue78,
          ][distValue81],
      ),
      b: distValue10(
        255 *
          [
            distValue78,
            distValue78,
            distValue80,
            distValue75,
            distValue75,
            distValue79,
          ][distValue81],
      ),
      a: distValue10(distValue76, 2),
    };
  },
  distValue17 = function (distParam34) {
    var t = distParam34.toString(16);
    return t.length < 2 ? "0" + t : t;
  },
  distValue18 = function (distParam18) {
    var distValue115 = distParam18.r,
      distValue116 = distParam18.g,
      distValue117 = distParam18.b,
      distValue118 = distParam18.a,
      distValue119 =
        distValue118 < 1 ? distValue17(distValue10(255 * distValue118)) : "";
    return (
      "#" +
      distValue17(distValue115) +
      distValue17(distValue116) +
      distValue17(distValue117) +
      distValue119
    );
  },
  distValue19 = function (distParam10) {
    var distValue84 = distParam10.r,
      distValue85 = distParam10.g,
      distValue86 = distParam10.b,
      distValue87 = distParam10.a,
      distValue88 = Math.max(distValue84, distValue85, distValue86),
      distValue89 =
        distValue88 - Math.min(distValue84, distValue85, distValue86),
      distValue90 = distValue89
        ? distValue88 === distValue84
          ? (distValue85 - distValue86) / distValue89
          : distValue88 === distValue85
            ? 2 + (distValue86 - distValue84) / distValue89
            : 4 + (distValue84 - distValue85) / distValue89
        : 0;
    return {
      h: distValue10(60 * (distValue90 < 0 ? distValue90 + 6 : distValue90)),
      s: distValue10(distValue88 ? (distValue89 / distValue88) * 100 : 0),
      v: distValue10((distValue88 / 255) * 100),
      a: distValue87,
    };
  },
  distValue20 = React.memo(function (props) {
    var distValue56 = props.hue,
      distValue57 = props.onChange,
      distValue58 = distValue8(["react-colorful__hue", props.className]);
    return React.createElement(
      "div",
      {
        className: distValue58,
      },
      React.createElement(
        distValue7,
        {
          onMove: function (distParam43) {
            distValue57({
              h: 360 * distParam43.left,
            });
          },
          onKey: function (distParam37) {
            distValue57({
              h: distValue2(distValue56 + 360 * distParam37.left, 0, 360),
            });
          },
          "aria-label": "Hue",
          "aria-valuenow": distValue10(distValue56),
          "aria-valuemax": "360",
          "aria-valuemin": "0",
        },
        React.createElement(distValue9, {
          className: "react-colorful__hue-pointer",
          left: distValue56 / 360,
          color: distValue15({
            h: distValue56,
            s: 100,
            v: 100,
            a: 1,
          }),
        }),
      ),
    );
  }),
  distValue21 = React.memo(function (props) {
    var distValue48 = props.hsva,
      distValue49 = props.onChange,
      distValue50 = {
        backgroundColor: distValue15({
          h: distValue48.h,
          s: 100,
          v: 100,
          a: 1,
        }),
      };
    return React.createElement(
      "div",
      {
        className: "react-colorful__saturation",
        style: distValue50,
      },
      React.createElement(
        distValue7,
        {
          onMove: function (distParam35) {
            distValue49({
              s: 100 * distParam35.left,
              v: 100 - 100 * distParam35.top,
            });
          },
          onKey: function (distParam21) {
            distValue49({
              s: distValue2(distValue48.s + 100 * distParam21.left, 0, 100),
              v: distValue2(distValue48.v - 100 * distParam21.top, 0, 100),
            });
          },
          "aria-label": "Color",
          "aria-valuetext":
            "Saturation " +
            distValue10(distValue48.s) +
            "%, Brightness " +
            distValue10(distValue48.v) +
            "%",
        },
        React.createElement(distValue9, {
          className: "react-colorful__saturation-pointer",
          top: 1 - distValue48.v / 100,
          left: distValue48.s / 100,
          color: distValue15(distValue48),
        }),
      ),
    );
  }),
  distValue22 = function (distParam28, distParam29) {
    if (distParam28 === distParam29) return true;
    for (var distValue121 in distParam28)
      if (distParam28[distValue121] !== distParam29[distValue121]) return false;
    return true;
  },
  distValue23 = function (distParam32, distParam33) {
    return (
      distParam32.toLowerCase() === distParam33.toLowerCase() ||
      distValue22(distValue12(distParam32), distValue12(distParam33))
    );
  };
function distHelper4(distParam2, distParam3, distParam4) {
  var distValue51 = distHelper3(distParam4),
    distValue52 = React.useState(function () {
      return distParam2.toHsva(distParam3);
    }),
    distValue53 = distValue52[0],
    distValue54 = distValue52[1],
    distValue55 = React.useRef({
      color: distParam3,
      hsva: distValue53,
    });
  return (
    React.useEffect(
      function () {
        if (!distParam2.equal(distParam3, distValue55.current.color)) {
          var distValue114 = distParam2.toHsva(distParam3);
          distValue55.current = {
            hsva: distValue114,
            color: distParam3,
          };
          distValue54(distValue114);
        }
      },
      [distParam3, distParam2],
    ),
    React.useEffect(
      function () {
        var distValue111;
        distValue22(distValue53, distValue55.current.hsva) ||
          distParam2.equal(
            (distValue111 = distParam2.fromHsva(distValue53)),
            distValue55.current.color,
          ) ||
          ((distValue55.current = {
            hsva: distValue53,
            color: distValue111,
          }),
          distValue51(distValue111));
      },
      [distValue53, distParam2, distValue51],
    ),
    [
      distValue53,
      React.useCallback(function (distParam30) {
        distValue54(function (distParam42) {
          return Object.assign({}, distParam42, distParam30);
        });
      }, []),
    ]
  );
}
var distValue24,
  distValue25 = typeof window < "u" ? React.useLayoutEffect : React.useEffect,
  distValue26 = function () {
    return (
      distValue24 ||
      (typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : undefined)
    );
  },
  distValue27 = new Map(),
  distValue28 = function (distParam1) {
    distValue25(function () {
      var distValue43 = distParam1.current
        ? distParam1.current.ownerDocument
        : document;
      if (distValue43 !== undefined && !distValue27.has(distValue43)) {
        var distValue44 = distValue43.createElement("style");
        distValue44.innerHTML =
          '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}';
        distValue27.set(distValue43, distValue44);
        var distValue45 = distValue26();
        distValue45 && distValue44.setAttribute("nonce", distValue45);
        distValue43.head.appendChild(distValue44);
      }
    }, []);
  },
  distValue29 = function (distParam5) {
    var distValue59 = distParam5.className,
      distValue60 = distParam5.colorModel,
      distValue61 = distParam5.color,
      distValue62 =
        distValue61 === undefined ? distValue60.defaultColor : distValue61,
      distValue63 = distParam5.onChange,
      distValue64 = distHelper2(distParam5, [
        "className",
        "colorModel",
        "color",
        "onChange",
      ]),
      distValue65 = React.useRef(null);
    distValue28(distValue65);
    var distValue66 = distHelper4(distValue60, distValue62, distValue63),
      distValue67 = distValue66[0],
      distValue68 = distValue66[1],
      distValue69 = distValue8(["react-colorful", distValue59]);
    return React.createElement(
      "div",
      distHelper1({}, distValue64, {
        ref: distValue65,
        className: distValue69,
      }),
      React.createElement(distValue21, {
        hsva: distValue67,
        onChange: distValue68,
      }),
      React.createElement(distValue20, {
        hue: distValue67.h,
        onChange: distValue68,
        className: "react-colorful__last-control",
      }),
    );
  },
  distValue30 = {
    defaultColor: "000",
    toHsva: distValue11,
    fromHsva: function (distParam41) {
      return distValue13({
        h: distParam41.h,
        s: distParam41.s,
        v: distParam41.v,
        a: 1,
      });
    },
    equal: distValue23,
  };
export const Dist = function (distParam36) {
  return React.createElement(
    distValue29,
    distHelper1({}, distParam36, {
      colorModel: distValue30,
    }),
  );
};
