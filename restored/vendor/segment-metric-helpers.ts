// Restored from ref/webview/assets/metric-helpers-7nP-wnaS.js
// MetricHelpers chunk restored from the Codex webview bundle.
import {
  __generator as metricHelpersImport1,
  __awaiter as metricHelpersImport2,
  __spreadArray as metricHelpersImport3,
  __extends as metricHelpersImport4,
  __assign as metricHelpersImport5,
} from "tslib";
import { middlewareA, middlewareF, middlewareP } from "./segment-middleware";
import { loadScriptL } from "./segment-load-script";
var metricHelpersD = (function () {
  function metricHelpersHelper10(metricHelpersParam43) {
    ((this.callbacks = {}),
      (this.warned = !1),
      (this.maxListeners = metricHelpersParam43?.maxListeners ?? 10));
  }
  return (
    (metricHelpersHelper10.prototype.warnIfPossibleMemoryLeak = function (
      metricHelpersParam18,
    ) {
      this.warned ||
        (this.maxListeners &&
          this.callbacks[metricHelpersParam18].length > this.maxListeners &&
          (console.warn(
            `Event Emitter: Possible memory leak detected; ${String(metricHelpersParam18)} has exceeded ${this.maxListeners} listeners.`,
          ),
          (this.warned = !0)));
    }),
    (metricHelpersHelper10.prototype.on = function (
      metricHelpersParam33,
      metricHelpersParam34,
    ) {
      return (
        this.callbacks[metricHelpersParam33]
          ? (this.callbacks[metricHelpersParam33].push(metricHelpersParam34),
            this.warnIfPossibleMemoryLeak(metricHelpersParam33))
          : (this.callbacks[metricHelpersParam33] = [metricHelpersParam34]),
        this
      );
    }),
    (metricHelpersHelper10.prototype.once = function (
      metricHelpersParam37,
      metricHelpersParam38,
    ) {
      var metricHelpersValue54 = this,
        metricHelpersValue55 = function () {
          var metricHelpersValue66 = [...arguments];
          (metricHelpersValue54.off(metricHelpersParam37, metricHelpersValue55),
            metricHelpersParam38.apply(
              metricHelpersValue54,
              metricHelpersValue66,
            ));
        };
      return (this.on(metricHelpersParam37, metricHelpersValue55), this);
    }),
    (metricHelpersHelper10.prototype.off = function (
      metricHelpersParam35,
      metricHelpersParam36,
    ) {
      var metricHelpersValue53 = (
        this.callbacks[metricHelpersParam35] ?? []
      ).filter(function (item) {
        return item !== metricHelpersParam36;
      });
      return (
        (this.callbacks[metricHelpersParam35] = metricHelpersValue53),
        this
      );
    }),
    (metricHelpersHelper10.prototype.emit = function (metricHelpersParam29) {
      for (
        var metricHelpersValue45 = this,
          metricHelpersValue46 = [],
          metricHelpersValue47 = 1;
        metricHelpersValue47 < arguments.length;
        metricHelpersValue47++
      )
        metricHelpersValue46[metricHelpersValue47 - 1] =
          arguments[metricHelpersValue47];
      return (
        (this.callbacks[metricHelpersParam29] ?? []).forEach(function (item) {
          item.apply(metricHelpersValue45, metricHelpersValue46);
        }),
        this
      );
    }),
    metricHelpersHelper10
  );
})();
export const metricHelpersF = function () {
  var metricHelpersValue24,
    metricHelpersValue25,
    metricHelpersValue26 = !1,
    metricHelpersValue27 = new Promise(function (
      metricHelpersParam30,
      metricHelpersParam31,
    ) {
      ((metricHelpersValue24 = function () {
        var metricHelpersValue67 = [...arguments];
        ((metricHelpersValue26 = !0),
          metricHelpersParam30.apply(void 0, metricHelpersValue67));
      }),
        (metricHelpersValue25 = function () {
          var metricHelpersValue68 = [...arguments];
          ((metricHelpersValue26 = !0),
            metricHelpersParam31.apply(void 0, metricHelpersValue68));
        }));
    });
  return {
    resolve: metricHelpersValue24,
    reject: metricHelpersValue25,
    promise: metricHelpersValue27,
    isSettled: function () {
      return metricHelpersValue26;
    },
  };
};
function metricHelpersHelper1(metricHelpersParam22) {
  var metricHelpersValue34 = Math.random() + 1,
    metricHelpersValue35 = metricHelpersParam22.minTimeout,
    metricHelpersValue36 =
      metricHelpersValue35 === void 0 ? 500 : metricHelpersValue35,
    metricHelpersValue37 = metricHelpersParam22.factor,
    metricHelpersValue38 =
      metricHelpersValue37 === void 0 ? 2 : metricHelpersValue37,
    metricHelpersValue39 = metricHelpersParam22.attempt,
    metricHelpersValue40 = metricHelpersParam22.maxTimeout,
    metricHelpersValue41 =
      metricHelpersValue40 === void 0 ? 1 / 0 : metricHelpersValue40;
  return Math.min(
    metricHelpersValue34 *
      metricHelpersValue36 *
      metricHelpersValue38 ** +metricHelpersValue39,
    metricHelpersValue41,
  );
}
var metricHelpersL = `onRemoveFromFuture`,
  metricHelpersU = (function (metricHelpersParam1) {
    metricHelpersImport4(metricHelpersHelper9, metricHelpersParam1);
    function metricHelpersHelper9(
      metricHelpersParam40,
      metricHelpersParam41,
      metricHelpersParam42,
    ) {
      var metricHelpersValue57 = metricHelpersParam1.call(this) || this;
      return (
        (metricHelpersValue57.future = []),
        (metricHelpersValue57.maxAttempts = metricHelpersParam40),
        (metricHelpersValue57.queue = metricHelpersParam41),
        (metricHelpersValue57.seen = metricHelpersParam42 ?? {}),
        metricHelpersValue57
      );
    }
    return (
      (metricHelpersHelper9.prototype.push = function () {
        for (
          var metricHelpersValue19 = this,
            metricHelpersValue20 = [],
            metricHelpersValue21 = 0;
          metricHelpersValue21 < arguments.length;
          metricHelpersValue21++
        )
          metricHelpersValue20[metricHelpersValue21] =
            arguments[metricHelpersValue21];
        var metricHelpersValue22 = metricHelpersValue20.map(function (item) {
          return metricHelpersValue19.updateAttempts(item) >
            metricHelpersValue19.maxAttempts ||
            metricHelpersValue19.includes(item)
            ? !1
            : (metricHelpersValue19.queue.push(item), !0);
        });
        return (
          (this.queue = this.queue.sort(
            function (metricHelpersParam48, metricHelpersParam49) {
              return (
                metricHelpersValue19.getAttempts(metricHelpersParam48) -
                metricHelpersValue19.getAttempts(metricHelpersParam49)
              );
            },
          )),
          metricHelpersValue22
        );
      }),
      (metricHelpersHelper9.prototype.pushWithBackoff = function (
        metricHelpersParam7,
        metricHelpersParam8,
      ) {
        var metricHelpersValue9 = this;
        if (
          (metricHelpersParam8 === void 0 && (metricHelpersParam8 = 0),
          metricHelpersParam8 == 0 &&
            this.getAttempts(metricHelpersParam7) === 0)
        )
          return this.push(metricHelpersParam7)[0];
        var metricHelpersValue10 = this.updateAttempts(metricHelpersParam7);
        if (
          metricHelpersValue10 > this.maxAttempts ||
          this.includes(metricHelpersParam7)
        )
          return !1;
        var metricHelpersValue11 = metricHelpersHelper1({
          attempt: metricHelpersValue10 - 1,
        });
        return (
          metricHelpersParam8 > 0 &&
            metricHelpersValue11 < metricHelpersParam8 &&
            (metricHelpersValue11 = metricHelpersParam8),
          setTimeout(function () {
            (metricHelpersValue9.queue.push(metricHelpersParam7),
              (metricHelpersValue9.future = metricHelpersValue9.future.filter(
                function (item) {
                  return item.id !== metricHelpersParam7.id;
                },
              )),
              metricHelpersValue9.emit(metricHelpersL));
          }, metricHelpersValue11),
          this.future.push(metricHelpersParam7),
          !0
        );
      }),
      (metricHelpersHelper9.prototype.getAttempts = function (
        metricHelpersParam51,
      ) {
        return this.seen[metricHelpersParam51.id] ?? 0;
      }),
      (metricHelpersHelper9.prototype.updateAttempts = function (
        metricHelpersParam44,
      ) {
        return (
          (this.seen[metricHelpersParam44.id] =
            this.getAttempts(metricHelpersParam44) + 1),
          this.getAttempts(metricHelpersParam44)
        );
      }),
      (metricHelpersHelper9.prototype.includes = function (
        metricHelpersParam23,
      ) {
        return (
          this.queue.includes(metricHelpersParam23) ||
          this.future.includes(metricHelpersParam23) ||
          !!this.queue.find(function (item) {
            return item.id === metricHelpersParam23.id;
          }) ||
          !!this.future.find(function (item) {
            return item.id === metricHelpersParam23.id;
          })
        );
      }),
      (metricHelpersHelper9.prototype.pop = function () {
        return this.queue.shift();
      }),
      Object.defineProperty(metricHelpersHelper9.prototype, `length`, {
        get: function () {
          return this.queue.length;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(metricHelpersHelper9.prototype, `todo`, {
        get: function () {
          return this.queue.length + this.future.length;
        },
        enumerable: !1,
        configurable: !0,
      }),
      metricHelpersHelper9
    );
  })(metricHelpersD);
function metricHelpersHelper2(metricHelpersParam17) {
  return metricHelpersImport2(this, void 0, void 0, function () {
    var metricHelpersValue33;
    return metricHelpersImport1(this, function (metricHelpersParam24) {
      switch (metricHelpersParam24.label) {
        case 0:
          return (
            metricHelpersParam24.trys.push([0, 2, , 3]),
            [4, metricHelpersParam17()]
          );
        case 1:
          return [2, metricHelpersParam24.sent()];
        case 2:
          return (
            (metricHelpersValue33 = metricHelpersParam24.sent()),
            [2, Promise.reject(metricHelpersValue33)]
          );
        case 3:
          return [2];
      }
    });
  });
}
function metricHelpersS(metricHelpersParam2, metricHelpersParam3) {
  metricHelpersParam2.log(`debug`, `plugin`, {
    plugin: metricHelpersParam3.name,
  });
  var metricHelpersValue3 = new Date().getTime(),
    metricHelpersValue4 = metricHelpersParam3[metricHelpersParam2.event.type];
  return metricHelpersValue4 === void 0
    ? Promise.resolve(metricHelpersParam2)
    : metricHelpersHelper2(function () {
        return metricHelpersValue4.apply(metricHelpersParam3, [
          metricHelpersParam2,
        ]);
      })
        .then(function (value) {
          var metricHelpersValue58 = new Date().getTime() - metricHelpersValue3;
          return (
            value.stats.gauge(`plugin_time`, metricHelpersValue58, [
              `plugin:${metricHelpersParam3.name}`,
            ]),
            value
          );
        })
        .catch(function (error) {
          if (
            error instanceof middlewareF &&
            error.type === `middleware_cancellation`
          )
            throw error;
          return error instanceof middlewareF
            ? (metricHelpersParam2.log(`warn`, error.type, {
                plugin: metricHelpersParam3.name,
                error: error,
              }),
              error)
            : (metricHelpersParam2.log(`error`, `plugin Error`, {
                plugin: metricHelpersParam3.name,
                error: error,
              }),
              metricHelpersParam2.stats.increment(`plugin_error`, 1, [
                `plugin:${metricHelpersParam3.name}`,
              ]),
              error);
        });
}
export function metricHelpersC(metricHelpersParam27, metricHelpersParam28) {
  return metricHelpersS(metricHelpersParam27, metricHelpersParam28).then(
    function (value) {
      if (value instanceof middlewareP) return value;
      (metricHelpersParam27.log(`debug`, `Context canceled`),
        metricHelpersParam27.stats.increment(`context_canceled`),
        metricHelpersParam27.cancel(value));
    },
  );
}
function metricHelpersO() {
  return loadScriptL() ? window.navigator.onLine : !0;
}
export function metricHelpersA() {
  return !metricHelpersO();
}
var metricHelpersValue1 = {
  getItem: function () {},
  setItem: function () {},
  removeItem: function () {},
};
try {
  metricHelpersValue1 =
    loadScriptL() && window.localStorage
      ? window.localStorage
      : metricHelpersValue1;
} catch (metricHelpersValue64) {
  console.warn(`Unable to access localStorage`, metricHelpersValue64);
}
function metricHelpersHelper3(metricHelpersParam39) {
  var metricHelpersValue56 = metricHelpersValue1.getItem(metricHelpersParam39);
  return (metricHelpersValue56 ? JSON.parse(metricHelpersValue56) : []).map(
    function (item) {
      return new middlewareA(item.event, item.id);
    },
  );
}
function metricHelpersHelper4(metricHelpersParam25, metricHelpersParam26) {
  var metricHelpersValue42 = metricHelpersHelper3(metricHelpersParam25),
    metricHelpersValue43 = metricHelpersImport3(
      metricHelpersImport3([], metricHelpersParam26, !0),
      metricHelpersValue42,
      !0,
    ).reduce(function (accumulator, current) {
      var metricHelpersValue65;
      return metricHelpersImport5(
        metricHelpersImport5({}, accumulator),
        ((metricHelpersValue65 = {}),
        (metricHelpersValue65[current.id] = current),
        metricHelpersValue65),
      );
    }, {});
  metricHelpersValue1.setItem(
    metricHelpersParam25,
    JSON.stringify(Object.values(metricHelpersValue43)),
  );
}
function metricHelpersHelper5(metricHelpersParam47) {
  var metricHelpersValue63 = metricHelpersValue1.getItem(metricHelpersParam47);
  return metricHelpersValue63 ? JSON.parse(metricHelpersValue63) : {};
}
function metricHelpersHelper6(metricHelpersParam45, metricHelpersParam46) {
  var metricHelpersValue62 = metricHelpersHelper5(metricHelpersParam45);
  metricHelpersValue1.setItem(
    metricHelpersParam45,
    JSON.stringify(
      metricHelpersImport5(
        metricHelpersImport5({}, metricHelpersValue62),
        metricHelpersParam46,
      ),
    ),
  );
}
function metricHelpersHelper7(metricHelpersParam52) {
  metricHelpersValue1.removeItem(metricHelpersParam52);
}
var metricHelpersValue2 = function () {
  return new Date().getTime();
};
function metricHelpersHelper8(
  metricHelpersParam9,
  metricHelpersParam10,
  metricHelpersParam11,
) {
  metricHelpersParam11 === void 0 && (metricHelpersParam11 = 0);
  var metricHelpersValue12 = 50,
    metricHelpersValue13 = `persisted-queue:v1:${metricHelpersParam9}:lock`,
    metricHelpersValue14 = function (metricHelpersParam50) {
      return new Date().getTime() > metricHelpersParam50;
    },
    metricHelpersValue15 = metricHelpersValue1.getItem(metricHelpersValue13),
    metricHelpersValue16 = metricHelpersValue15
      ? JSON.parse(metricHelpersValue15)
      : null,
    metricHelpersValue17 =
      metricHelpersValue16 === null ||
      metricHelpersValue14(metricHelpersValue16);
  if (metricHelpersValue17) {
    (metricHelpersValue1.setItem(
      metricHelpersValue13,
      JSON.stringify(metricHelpersValue2() + metricHelpersValue12),
    ),
      metricHelpersParam10(),
      metricHelpersValue1.removeItem(metricHelpersValue13));
    return;
  }
  !metricHelpersValue17 && metricHelpersParam11 < 3
    ? setTimeout(function () {
        metricHelpersHelper8(
          metricHelpersParam9,
          metricHelpersParam10,
          metricHelpersParam11 + 1,
        );
      }, metricHelpersValue12)
    : console.error(`Unable to retrieve lock`);
}
export const metricHelpersR = function (
  metricHelpersParam12,
  metricHelpersParam13,
) {
  return metricHelpersImport2(void 0, void 0, void 0, function () {
    var metricHelpersValue23;
    return metricHelpersImport1(this, function (metricHelpersParam16) {
      return (
        (metricHelpersValue23 = function (metricHelpersParam21) {
          return metricHelpersImport2(void 0, void 0, void 0, function () {
            var metricHelpersValue44;
            return metricHelpersImport1(this, function (metricHelpersParam32) {
              switch (metricHelpersParam32.label) {
                case 0:
                  return metricHelpersParam12(metricHelpersParam21)
                    ? ((metricHelpersValue44 = metricHelpersValue23),
                      [4, metricHelpersParam13()])
                    : [3, 2];
                case 1:
                  return [
                    2,
                    metricHelpersValue44.apply(void 0, [
                      metricHelpersParam32.sent(),
                    ]),
                  ];
                case 2:
                  return [2];
              }
            });
          });
        }),
        [2, metricHelpersValue23(void 0)]
      );
    });
  });
};
export const metricHelpersI = (function (metricHelpersParam4) {
  metricHelpersImport4(metricHelpersHelper11, metricHelpersParam4);
  function metricHelpersHelper11(metricHelpersParam5, metricHelpersParam6) {
    var metricHelpersValue5 =
        metricHelpersParam4.call(this, metricHelpersParam5, []) || this,
      metricHelpersValue6 = `persisted-queue:v1:${metricHelpersParam6}:items`,
      metricHelpersValue7 = `persisted-queue:v1:${metricHelpersParam6}:seen`,
      metricHelpersValue8 = [],
      _metricHelpersF = {};
    return (
      metricHelpersHelper8(metricHelpersParam6, function () {
        try {
          ((metricHelpersValue8 = metricHelpersHelper3(metricHelpersValue6)),
            (_metricHelpersF = metricHelpersHelper5(metricHelpersValue7)),
            metricHelpersHelper7(metricHelpersValue6),
            metricHelpersHelper7(metricHelpersValue7),
            (metricHelpersValue5.queue = metricHelpersImport3(
              metricHelpersImport3([], metricHelpersValue8, !0),
              metricHelpersValue5.queue,
              !0,
            )),
            (metricHelpersValue5.seen = metricHelpersImport5(
              metricHelpersImport5({}, _metricHelpersF),
              metricHelpersValue5.seen,
            )));
        } catch (metricHelpersValue69) {
          console.error(metricHelpersValue69);
        }
      }),
      window.addEventListener(`pagehide`, function () {
        if (metricHelpersValue5.todo > 0) {
          var metricHelpersValue48 = metricHelpersImport3(
            metricHelpersImport3([], metricHelpersValue5.queue, !0),
            metricHelpersValue5.future,
            !0,
          );
          try {
            metricHelpersHelper8(metricHelpersParam6, function () {
              (metricHelpersHelper4(metricHelpersValue6, metricHelpersValue48),
                metricHelpersHelper6(
                  metricHelpersValue7,
                  metricHelpersValue5.seen,
                ));
            });
          } catch (metricHelpersValue70) {
            console.error(metricHelpersValue70);
          }
        }
      }),
      metricHelpersValue5
    );
  }
  return metricHelpersHelper11;
})(metricHelpersU);
export function metricHelpersN(metricHelpersParam14, metricHelpersParam15) {
  var metricHelpersValue18 = Object.entries(
    metricHelpersParam15.integrations ?? {},
  ).reduce(function (accumulator, current) {
    var metricHelpersValue49,
      metricHelpersValue50,
      metricHelpersValue51 = current[0],
      metricHelpersValue52 = current[1];
    return typeof metricHelpersValue52 == `object`
      ? metricHelpersImport5(
          metricHelpersImport5({}, accumulator),
          ((metricHelpersValue49 = {}),
          (metricHelpersValue49[metricHelpersValue51] = metricHelpersValue52),
          metricHelpersValue49),
        )
      : metricHelpersImport5(
          metricHelpersImport5({}, accumulator),
          ((metricHelpersValue50 = {}),
          (metricHelpersValue50[metricHelpersValue51] = {}),
          metricHelpersValue50),
        );
  }, {});
  return Object.entries(metricHelpersParam14.integrations).reduce(function (
    accumulator,
    current,
  ) {
    var metricHelpersValue59,
      metricHelpersValue60 = current[0],
      metricHelpersValue61 = current[1];
    return metricHelpersImport5(
      metricHelpersImport5({}, accumulator),
      ((metricHelpersValue59 = {}),
      (metricHelpersValue59[metricHelpersValue60] = metricHelpersImport5(
        metricHelpersImport5({}, metricHelpersValue61),
        metricHelpersValue18[metricHelpersValue60],
      )),
      metricHelpersValue59),
    );
  }, {});
}
export function metricHelpersT(metricHelpersParam19, metricHelpersParam20) {
  var metricHelpersValue28 = metricHelpersParam20.methodName,
    metricHelpersValue29 = metricHelpersParam20.integrationName,
    metricHelpersValue30 = metricHelpersParam20.type,
    metricHelpersValue31 = metricHelpersParam20.didError,
    metricHelpersValue32 =
      metricHelpersValue31 === void 0 ? !1 : metricHelpersValue31;
  metricHelpersParam19.stats.increment(
    `analytics_js.integration.invoke${metricHelpersValue32 ? `.error` : ``}`,
    1,
    [
      `method:${metricHelpersValue28}`,
      `integration_name:${metricHelpersValue29}`,
      `type:${metricHelpersValue30}`,
    ],
  );
}
export {
  metricHelpersD,
  metricHelpersL,
  metricHelpersO,
  metricHelpersS,
  metricHelpersU,
};
