// Restored from ref/webview/assets/pkg-CsBnWPsQ.js
// Pkg chunk restored from the Codex webview bundle.
const __vite__mapDeps = (
  pkgParam49,
  pkgParam50 = __vite__mapDeps,
  pkgParam51 = pkgParam50.f ||
    (pkgParam50.f = [
      "./segment-auto-track",
      "./rolldown-runtime-Czos8NxU.js",
      "./esm-SB_gc9_7.js",
      "./app-initial~app-main~remote-conversation-page~new-thread-panel-page~onboarding-page~appgen-~1je6c975-DGpPRr1D.js",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~plugin-detail-page~new-~sfopfmmp-9J50_--p.js",
      "./segment-middleware-entry",
      "./middleware-CcPovR3s.js",
      "./segment-query-string",
      "../utils/graceful-decode-uri-component",
      "../utils/routing-middleware",
      "./ajs-destination-CMq26_cD.js",
      "./segment-metric-helpers",
      "./segment-load-script",
      "../utils/is-plan-event-enabled",
      "../utils/legacy-video-plugins",
      "./app-initial~app-main~worktree-init-v2-page~remote-conversation-page~new-thread-panel-page~o~dv5z3ftk-BhBbJNnt.js",
      "../utils/schema-filter",
      "./segment-remote-middleware",
    ]),
) => pkgParam49.map((item) => pkgParam51[item]);
import { PreloadHelper } from "../utils/preload-helper";
import {
  __rest as pkgImport1,
  __generator as pkgImport2,
  __awaiter as pkgImport3,
  __spreadArray as pkgImport4,
  __extends as pkgImport5,
  __assign as pkgImport6,
} from "tslib";
import {
  middlewareC,
  middlewareD,
  middlewareH,
  middlewareL,
  middlewareM,
  middlewareO,
  middlewareP,
  middlewareR,
  middlewareS,
  middlewareT,
  middlewareU,
  middlewareA as pkgContext,
  middlewareF as pkgContextCancelation,
} from "./segment-middleware";
import {
  helpersA,
  helpersI,
  helpersN,
  helpersR,
  helpersT,
} from "./segment-helpers";
import { runDelayedCallback } from "../utils/callback";
import {
  metricHelpersA,
  metricHelpersC,
  metricHelpersD,
  metricHelpersF,
  metricHelpersI,
  metricHelpersL,
  metricHelpersN,
  metricHelpersR,
  metricHelpersS,
  metricHelpersT,
  metricHelpersU,
} from "./segment-metric-helpers";
import { gracefulDecodeURIComponent } from "../utils/graceful-decode-uri-component";
import {
  loadScriptA,
  loadScriptC,
  loadScriptR,
  loadScriptS,
  loadScriptT,
  loadScriptO as pkgGetGlobalAnalytics,
} from "./segment-load-script";
var pkgValue1 = function (pkgParam256, pkgParam257) {
    return Object.keys(pkgParam256)
      .filter(function (item) {
        return pkgParam257(item, pkgParam256[item]);
      })
      .reduce(function (accumulator, current) {
        return ((accumulator[current] = pkgParam256[current]), accumulator);
      }, {});
  },
  pkgValue2 = (function (pkgParam277) {
    pkgImport5(pkgHelper80, pkgParam277);
    function pkgHelper80(pkgParam353, pkgParam354) {
      var pkgValue462 =
        pkgParam277.call(this, `${pkgParam353} ${pkgParam354}`) || this;
      return ((pkgValue462.field = pkgParam353), pkgValue462);
    }
    return pkgHelper80;
  })(Error);
function pkgHelper1(pkgParam283) {
  if (!helpersT(pkgParam283)) throw new pkgValue2("Event", "is nil");
  if (typeof pkgParam283 != "object")
    throw new pkgValue2("Event", "is not an object");
}
function pkgHelper2(pkgParam383) {
  if (!helpersA(pkgParam383.type))
    throw new pkgValue2(".type", "is not a string");
}
function _e(pkgParam382) {
  if (!helpersA(pkgParam382.event))
    throw new pkgValue2(".event", "is not a string");
}
function pkgHelper3(pkgParam358) {
  if (!helpersI(pkgParam358.properties))
    throw new pkgValue2(".properties", "is not an object");
}
function pkgHelper4(pkgParam380) {
  if (!helpersI(pkgParam380.traits))
    throw new pkgValue2(".traits", "is not an object");
}
function be(pkgParam369) {
  if (!helpersA(pkgParam369.messageId))
    throw new pkgValue2(".messageId", "is not a string");
}
function pkgHelper5(pkgParam269) {
  pkgHelper1(pkgParam269);
  pkgHelper2(pkgParam269);
  be(pkgParam269);
  pkgParam269.type === "track" && (_e(pkgParam269), pkgHelper3(pkgParam269));
  ["group", "identify"].includes(pkgParam269.type) && pkgHelper4(pkgParam269);
}
var pkgValue6 = (function () {
    function pkgHelper73(pkgParam208) {
      this.settings = pkgParam208;
      this.createMessageId = pkgParam208.createMessageId;
      this.onEventMethodCall = pkgParam208.onEventMethodCall ?? function () {};
      this.onFinishedEvent = pkgParam208.onFinishedEvent ?? function () {};
    }
    return pkgHelper73;
  })(),
  pkgValue7 = (function () {
    function pkgHelper53(pkgParam402) {
      this.settings = new pkgValue6(pkgParam402);
    }
    return (
      (pkgHelper53.prototype.track = function (
        pkgParam183,
        pkgParam184,
        pkgParam185,
        pkgParam186,
      ) {
        return (
          this.settings.onEventMethodCall({
            type: "track",
            options: pkgParam185,
          }),
          this.normalize(
            pkgImport6(pkgImport6({}, this.baseEvent()), {
              event: pkgParam183,
              type: "track",
              properties: pkgParam184 ?? {},
              options: pkgImport6({}, pkgParam185),
              integrations: pkgImport6({}, pkgParam186),
            }),
          )
        );
      }),
      (pkgHelper53.prototype.page = function (
        pkgParam113,
        pkgParam114,
        pkgParam115,
        pkgParam116,
        pkgParam117,
      ) {
        this.settings.onEventMethodCall({
          type: "page",
          options: pkgParam116,
        });
        var pkgValue233 = {
          type: "page",
          properties: pkgImport6({}, pkgParam115),
          options: pkgImport6({}, pkgParam116),
          integrations: pkgImport6({}, pkgParam117),
        };
        return (
          pkgParam113 !== null &&
            ((pkgValue233.category = pkgParam113),
            (pkgValue233.properties = pkgValue233.properties ?? {}),
            (pkgValue233.properties.category = pkgParam113)),
          pkgParam114 !== null && (pkgValue233.name = pkgParam114),
          this.normalize(
            pkgImport6(pkgImport6({}, this.baseEvent()), pkgValue233),
          )
        );
      }),
      (pkgHelper53.prototype.screen = function (
        pkgParam137,
        pkgParam138,
        pkgParam139,
        pkgParam140,
        pkgParam141,
      ) {
        this.settings.onEventMethodCall({
          type: "screen",
          options: pkgParam140,
        });
        var pkgValue296 = {
          type: "screen",
          properties: pkgImport6({}, pkgParam139),
          options: pkgImport6({}, pkgParam140),
          integrations: pkgImport6({}, pkgParam141),
        };
        return (
          pkgParam137 !== null && (pkgValue296.category = pkgParam137),
          pkgParam138 !== null && (pkgValue296.name = pkgParam138),
          this.normalize(
            pkgImport6(pkgImport6({}, this.baseEvent()), pkgValue296),
          )
        );
      }),
      (pkgHelper53.prototype.identify = function (
        pkgParam194,
        pkgParam195,
        pkgParam196,
        pkgParam197,
      ) {
        return (
          this.settings.onEventMethodCall({
            type: "identify",
            options: pkgParam196,
          }),
          this.normalize(
            pkgImport6(pkgImport6({}, this.baseEvent()), {
              type: "identify",
              userId: pkgParam194,
              traits: pkgParam195 ?? {},
              options: pkgImport6({}, pkgParam196),
              integrations: pkgParam197,
            }),
          )
        );
      }),
      (pkgHelper53.prototype.group = function (
        pkgParam190,
        pkgParam191,
        pkgParam192,
        pkgParam193,
      ) {
        return (
          this.settings.onEventMethodCall({
            type: "group",
            options: pkgParam192,
          }),
          this.normalize(
            pkgImport6(pkgImport6({}, this.baseEvent()), {
              type: "group",
              traits: pkgParam191 ?? {},
              options: pkgImport6({}, pkgParam192),
              integrations: pkgImport6({}, pkgParam193),
              groupId: pkgParam190,
            }),
          )
        );
      }),
      (pkgHelper53.prototype.alias = function (
        pkgParam126,
        pkgParam127,
        pkgParam128,
        pkgParam129,
      ) {
        this.settings.onEventMethodCall({
          type: "alias",
          options: pkgParam128,
        });
        var pkgValue274 = {
          userId: pkgParam126,
          type: "alias",
          options: pkgImport6({}, pkgParam128),
          integrations: pkgImport6({}, pkgParam129),
        };
        return (
          pkgParam127 !== null && (pkgValue274.previousId = pkgParam127),
          pkgParam126 === undefined
            ? this.normalize(
                pkgImport6(pkgImport6({}, pkgValue274), this.baseEvent()),
              )
            : this.normalize(
                pkgImport6(pkgImport6({}, this.baseEvent()), pkgValue274),
              )
        );
      }),
      (pkgHelper53.prototype.baseEvent = function () {
        return {
          integrations: {},
          options: {},
        };
      }),
      (pkgHelper53.prototype.context = function (pkgParam164) {
        var pkgValue321 = ["userId", "anonymousId", "timestamp", "messageId"];
        delete pkgParam164.integrations;
        var pkgValue322 = Object.keys(pkgParam164),
          pkgValue323 = pkgParam164.context ?? {},
          pkgValue324 = {};
        return (
          pkgValue322.forEach(function (item) {
            item !== "context" &&
              (pkgValue321.includes(item)
                ? middlewareH(pkgValue324, item, pkgParam164[item])
                : middlewareH(pkgValue323, item, pkgParam164[item]));
          }),
          [pkgValue323, pkgValue324]
        );
      }),
      (pkgHelper53.prototype.normalize = function (pkgParam66) {
        var pkgValue165 = Object.keys(pkgParam66.integrations ?? {}).reduce(
          function (accumulator, current) {
            var pkgValue460;
            return pkgImport6(
              pkgImport6({}, accumulator),
              ((pkgValue460 = {}),
              (pkgValue460[current] = !!pkgParam66.integrations?.[current]),
              pkgValue460),
            );
          },
          {},
        );
        pkgParam66.options = pkgValue1(
          pkgParam66.options || {},
          function (pkgParam412, pkgParam413) {
            return pkgParam413 !== undefined;
          },
        );
        var pkgValue166 = pkgImport6(
            pkgImport6({}, pkgValue165),
            pkgParam66.options?.integrations,
          ),
          pkgValue167 = pkgParam66.options
            ? this.context(pkgParam66.options)
            : [],
          pkgValue168 = pkgValue167[0],
          _pkgContext = pkgValue167[1],
          pkgValue169 = pkgParam66.options,
          pkgValue170 = pkgImport1(pkgParam66, ["options"]),
          _pkgContextCancelation = pkgImport6(
            pkgImport6(
              pkgImport6(
                pkgImport6(
                  {
                    timestamp: new Date(),
                  },
                  pkgValue170,
                ),
                {
                  context: pkgValue168,
                  integrations: pkgValue166,
                },
              ),
              _pkgContext,
            ),
            {
              messageId:
                pkgValue169.messageId || this.settings.createMessageId(),
            },
          );
        return (
          this.settings.onFinishedEvent(_pkgContextCancelation),
          pkgHelper5(_pkgContextCancelation),
          _pkgContextCancelation
        );
      }),
      pkgHelper53
    );
  })();
function pkgHelper6(pkgParam158, pkgParam159) {
  var pkgValue310 = {};
  return (
    pkgParam158.forEach(function (item) {
      var pkgValue367 = undefined;
      if (typeof pkgParam159 == "string") {
        var pkgValue368 = item[pkgParam159];
        pkgValue367 =
          typeof pkgValue368 == "string"
            ? pkgValue368
            : JSON.stringify(pkgValue368);
      } else
        pkgParam159 instanceof Function && (pkgValue367 = pkgParam159(item));
      pkgValue367 !== undefined &&
        (pkgValue310[pkgValue367] = pkgImport4(
          pkgImport4([], pkgValue310[pkgValue367] ?? [], true),
          [item],
          false,
        ));
    }),
    pkgValue310
  );
}
var pkgValue8 = function (pkgParam311) {
    return (
      typeof pkgParam311 == "object" &&
      !!pkgParam311 &&
      "then" in pkgParam311 &&
      typeof pkgParam311.then == "function"
    );
  },
  pkgValue9 = function () {
    var pkgValue358,
      pkgValue359,
      pkgValue360 = 0;
    return {
      done: function () {
        return pkgValue358;
      },
      run: function (pkgParam245) {
        var pkgValue411 = pkgParam245();
        return (
          pkgValue8(pkgValue411) &&
            (++pkgValue360 === 1 &&
              (pkgValue358 = new Promise(function (pkgParam423) {
                return (pkgValue359 = pkgParam423);
              })),
            pkgValue411.finally(function () {
              return --pkgValue360 === 0 && pkgValue359();
            })),
          pkgValue411
        );
      },
    };
  },
  pkgValue10 = (function (pkgParam2) {
    pkgImport5(pkgHelper51, pkgParam2);
    function pkgHelper51(pkgParam209) {
      var pkgValue373 = pkgParam2.call(this) || this;
      return (
        (pkgValue373.criticalTasks = pkgValue9()),
        (pkgValue373.plugins = []),
        (pkgValue373.failedInitializations = []),
        (pkgValue373.flushing = false),
        (pkgValue373.queue = pkgParam209),
        pkgValue373.queue.on(metricHelpersL, function () {
          pkgValue373.scheduleFlush(0);
        }),
        pkgValue373
      );
    }
    return (
      (pkgHelper51.prototype.register = function (
        pkgParam52,
        pkgParam53,
        pkgParam54,
      ) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue146,
            pkgValue147,
            pkgValue148 = this;
          return pkgImport2(this, function (pkgParam65) {
            switch (pkgParam65.label) {
              case 0:
                return (
                  this.plugins.push(pkgParam53),
                  (pkgValue146 = function (pkgParam161) {
                    pkgValue148.failedInitializations.push(pkgParam53.name);
                    pkgValue148.emit("initialization_failure", pkgParam53);
                    console.warn(pkgParam53.name, pkgParam161);
                    pkgParam52.log("warn", "Failed to load destination", {
                      plugin: pkgParam53.name,
                      error: pkgParam161,
                    });
                    pkgValue148.plugins = pkgValue148.plugins.filter(
                      function (item) {
                        return item !== pkgParam53;
                      },
                    );
                  }),
                  pkgParam53.type === "destination" &&
                  pkgParam53.name !== "Segment.io"
                    ? (pkgParam53
                        .load(pkgParam52, pkgParam54)
                        .catch(pkgValue146),
                      [3, 4])
                    : [3, 1]
                );
              case 1:
                return (
                  pkgParam65.trys.push([1, 3, , 4]),
                  [4, pkgParam53.load(pkgParam52, pkgParam54)]
                );
              case 2:
                return (pkgParam65.sent(), [3, 4]);
              case 3:
                return (
                  (pkgValue147 = pkgParam65.sent()),
                  pkgValue146(pkgValue147),
                  [3, 4]
                );
              case 4:
                return [2];
            }
          });
        });
      }),
      (pkgHelper51.prototype.deregister = function (
        pkgParam77,
        pkgParam78,
        pkgParam79,
      ) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue198;
          return pkgImport2(this, function (pkgParam98) {
            switch (pkgParam98.label) {
              case 0:
                return (
                  pkgParam98.trys.push([0, 3, , 4]),
                  pkgParam78.unload
                    ? [
                        4,
                        Promise.resolve(
                          pkgParam78.unload(pkgParam77, pkgParam79),
                        ),
                      ]
                    : [3, 2]
                );
              case 1:
                pkgParam98.sent();
                pkgParam98.label = 2;
              case 2:
                return (
                  (this.plugins = this.plugins.filter(function (item) {
                    return item.name !== pkgParam78.name;
                  })),
                  [3, 4]
                );
              case 3:
                return (
                  (pkgValue198 = pkgParam98.sent()),
                  pkgParam77.log("warn", "Failed to unload destination", {
                    plugin: pkgParam78.name,
                    error: pkgValue198,
                  }),
                  [3, 4]
                );
              case 4:
                return [2];
            }
          });
        });
      }),
      (pkgHelper51.prototype.dispatch = function (pkgParam152) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue355;
          return pkgImport2(this, function (pkgParam217) {
            return (
              pkgParam152.log("debug", "Dispatching"),
              pkgParam152.stats.increment("message_dispatched"),
              this.queue.push(pkgParam152),
              (pkgValue355 = this.subscribeToDelivery(pkgParam152)),
              this.scheduleFlush(0),
              [2, pkgValue355]
            );
          });
        });
      }),
      (pkgHelper51.prototype.subscribeToDelivery = function (pkgParam187) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue395 = this;
          return pkgImport2(this, function (pkgParam254) {
            return [
              2,
              new Promise(function (pkgParam300) {
                var pkgValue453 = function (pkgParam384, pkgParam385) {
                  pkgParam384.isSame(pkgParam187) &&
                    (pkgValue395.off("flush", pkgValue453),
                    pkgParam300(pkgParam384));
                };
                pkgValue395.on("flush", pkgValue453);
              }),
            ];
          });
        });
      }),
      (pkgHelper51.prototype.dispatchSingle = function (pkgParam103) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue246 = this;
          return pkgImport2(this, function (pkgParam135) {
            return (
              pkgParam103.log("debug", "Dispatching"),
              pkgParam103.stats.increment("message_dispatched"),
              this.queue.updateAttempts(pkgParam103),
              (pkgParam103.attempts = 1),
              [
                2,
                this.deliver(pkgParam103).catch(function (error) {
                  return pkgValue246.enqueuRetry(error, pkgParam103)
                    ? pkgValue246.subscribeToDelivery(pkgParam103)
                    : (pkgParam103.setFailedDelivery({
                        reason: error,
                      }),
                      pkgParam103);
                }),
              ]
            );
          });
        });
      }),
      (pkgHelper51.prototype.isEmpty = function () {
        return this.queue.length === 0;
      }),
      (pkgHelper51.prototype.scheduleFlush = function (pkgParam177) {
        var pkgValue343 = this;
        pkgParam177 === undefined && (pkgParam177 = 500);
        !this.flushing &&
          ((this.flushing = true),
          setTimeout(function () {
            pkgValue343.flush().then(function () {
              setTimeout(function () {
                pkgValue343.flushing = false;
                pkgValue343.queue.length && pkgValue343.scheduleFlush(0);
              }, 0);
            });
          }, pkgParam177));
      }),
      (pkgHelper51.prototype.deliver = function (pkgParam60) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue161, pkgValue162, pkgValue163, pkgValue164;
          return pkgImport2(this, function (pkgParam71) {
            switch (pkgParam71.label) {
              case 0:
                return [4, this.criticalTasks.done()];
              case 1:
                pkgParam71.sent();
                pkgValue161 = Date.now();
                pkgParam71.label = 2;
              case 2:
                return (
                  pkgParam71.trys.push([2, 4, , 5]),
                  [4, this.flushOne(pkgParam60)]
                );
              case 3:
                return (
                  (pkgParam60 = pkgParam71.sent()),
                  (pkgValue162 = Date.now() - pkgValue161),
                  this.emit("delivery_success", pkgParam60),
                  pkgParam60.stats.gauge("delivered", pkgValue162),
                  pkgParam60.log("debug", "Delivered", pkgParam60.event),
                  [2, pkgParam60]
                );
              case 4:
                throw (
                  (pkgValue163 = pkgParam71.sent()),
                  (pkgValue164 = pkgValue163),
                  pkgParam60.log("error", "Failed to deliver", pkgValue164),
                  this.emit("delivery_failure", pkgParam60, pkgValue164),
                  pkgParam60.stats.increment("delivery_failed"),
                  pkgValue163
                );
              case 5:
                return [2];
            }
          });
        });
      }),
      (pkgHelper51.prototype.enqueuRetry = function (pkgParam325, pkgParam326) {
        return !(pkgParam325 instanceof pkgContextCancelation) ||
          pkgParam325.retry
          ? this.queue.pushWithBackoff(pkgParam326)
          : false;
      }),
      (pkgHelper51.prototype.flush = function () {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue178, pkgValue179, pkgValue180;
          return pkgImport2(this, function (pkgParam84) {
            switch (pkgParam84.label) {
              case 0:
                if (
                  this.queue.length === 0 ||
                  ((pkgValue178 = this.queue.pop()), !pkgValue178)
                )
                  return [2, []];
                pkgValue178.attempts = this.queue.getAttempts(pkgValue178);
                pkgParam84.label = 1;
              case 1:
                return (
                  pkgParam84.trys.push([1, 3, , 4]),
                  [4, this.deliver(pkgValue178)]
                );
              case 2:
                return (
                  (pkgValue178 = pkgParam84.sent()),
                  this.emit("flush", pkgValue178, true),
                  [3, 4]
                );
              case 3:
                return (
                  (pkgValue179 = pkgParam84.sent()),
                  (pkgValue180 = this.enqueuRetry(pkgValue179, pkgValue178)),
                  pkgValue180 ||
                    (pkgValue178.setFailedDelivery({
                      reason: pkgValue179,
                    }),
                    this.emit("flush", pkgValue178, false)),
                  [2, []]
                );
              case 4:
                return [2, [pkgValue178]];
            }
          });
        });
      }),
      (pkgHelper51.prototype.isReady = function () {
        return true;
      }),
      (pkgHelper51.prototype.availableExtensions = function (pkgParam72) {
        var pkgValue171 = pkgHelper6(
            this.plugins.filter(function (item) {
              var pkgValue319;
              if (item.type !== "destination" && item.name !== "Segment.io")
                return true;
              var pkgValue320 = undefined;
              return (
                (pkgValue319 = item.alternativeNames) == null ||
                  pkgValue319.forEach(function (_item) {
                    pkgParam72[_item] !== undefined &&
                      (pkgValue320 = pkgParam72[_item]);
                  }),
                pkgParam72[item.name] ??
                  pkgValue320 ??
                  (item.name === "Segment.io" ? true : pkgParam72.All) !== false
              );
            }),
            "type",
          ),
          pkgValue172 = pkgValue171.before,
          pkgValue173 = pkgValue172 === undefined ? [] : pkgValue172,
          pkgValue174 = pkgValue171.enrichment,
          pkgValue175 = pkgValue174 === undefined ? [] : pkgValue174,
          pkgValue176 = pkgValue171.destination,
          _pkgContext = pkgValue176 === undefined ? [] : pkgValue176,
          pkgValue177 = pkgValue171.after;
        return {
          before: pkgValue173,
          enrichment: pkgValue175,
          destinations: _pkgContext,
          after: pkgValue177 === undefined ? [] : pkgValue177,
        };
      }),
      (pkgHelper51.prototype.flushOne = function (pkgParam21) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue93,
            pkgValue94,
            pkgValue95,
            pkgValue96,
            pkgValue97,
            _pkgContext,
            pkgValue98,
            pkgValue99,
            _pkgContextCancelation,
            pkgValue100,
            pkgValue98,
            pkgValue101,
            pkgValue102,
            pkgValue103,
            pkgValue104;
          return pkgImport2(this, function (pkgParam31) {
            switch (pkgParam31.label) {
              case 0:
                if (!this.isReady()) throw Error("Not ready");
                pkgParam21.attempts > 1 &&
                  this.emit("delivery_retry", pkgParam21);
                pkgValue93 = this.availableExtensions(
                  pkgParam21.event.integrations ?? {},
                );
                pkgValue94 = pkgValue93.before;
                pkgValue95 = pkgValue93.enrichment;
                pkgValue96 = 0;
                pkgValue97 = pkgValue94;
                pkgParam31.label = 1;
              case 1:
                return pkgValue96 < pkgValue97.length
                  ? ((_pkgContext = pkgValue97[pkgValue96]),
                    [4, metricHelpersC(pkgParam21, _pkgContext)])
                  : [3, 4];
              case 2:
                pkgValue98 = pkgParam31.sent();
                pkgValue98 instanceof middlewareP && (pkgParam21 = pkgValue98);
                this.emit("message_enriched", pkgParam21, _pkgContext);
                pkgParam31.label = 3;
              case 3:
                return (pkgValue96++, [3, 1]);
              case 4:
                pkgValue99 = 0;
                _pkgContextCancelation = pkgValue95;
                pkgParam31.label = 5;
              case 5:
                return pkgValue99 < _pkgContextCancelation.length
                  ? ((pkgValue100 = _pkgContextCancelation[pkgValue99]),
                    [4, metricHelpersS(pkgParam21, pkgValue100)])
                  : [3, 8];
              case 6:
                pkgValue98 = pkgParam31.sent();
                pkgValue98 instanceof middlewareP && (pkgParam21 = pkgValue98);
                this.emit("message_enriched", pkgParam21, pkgValue100);
                pkgParam31.label = 7;
              case 7:
                return (pkgValue99++, [3, 5]);
              case 8:
                return (
                  (pkgValue101 = this.availableExtensions(
                    pkgParam21.event.integrations ?? {},
                  )),
                  (pkgValue102 = pkgValue101.destinations),
                  (pkgValue103 = pkgValue101.after),
                  [
                    4,
                    new Promise(function (pkgParam263, pkgParam264) {
                      setTimeout(function () {
                        var pkgValue455 = pkgValue102.map(function (item) {
                          return metricHelpersS(pkgParam21, item);
                        });
                        Promise.all(pkgValue455)
                          .then(pkgParam263)
                          .catch(pkgParam264);
                      }, 0);
                    }),
                  ]
                );
              case 9:
                return (
                  pkgParam31.sent(),
                  pkgParam21.stats.increment("message_delivered"),
                  this.emit("message_delivered", pkgParam21),
                  (pkgValue104 = pkgValue103.map(function (item) {
                    return metricHelpersS(pkgParam21, item);
                  })),
                  [4, Promise.all(pkgValue104)]
                );
              case 10:
                return (pkgParam31.sent(), [2, pkgParam21]);
            }
          });
        });
      }),
      pkgHelper51
    );
  })(metricHelpersD),
  pkgValue11 = function (pkgParam366, pkgParam367) {
    var pkgValue467 = Date.now() - pkgParam366;
    return Math.max((pkgParam367 ?? 300) - pkgValue467, 0);
  };
function pkgHelper7(pkgParam73, pkgParam74, pkgParam75, pkgParam76) {
  return pkgImport3(this, undefined, undefined, function () {
    var pkgValue196, pkgValue197;
    return pkgImport2(this, function (pkgParam97) {
      switch (pkgParam97.label) {
        case 0:
          return (
            pkgParam75.emit("dispatch_start", pkgParam73),
            (pkgValue196 = Date.now()),
            pkgParam74.isEmpty()
              ? [4, pkgParam74.dispatchSingle(pkgParam73)]
              : [3, 2]
          );
        case 1:
          return ((pkgValue197 = pkgParam97.sent()), [3, 4]);
        case 2:
          return [4, pkgParam74.dispatch(pkgParam73)];
        case 3:
          pkgValue197 = pkgParam97.sent();
          pkgParam97.label = 4;
        case 4:
          return pkgParam76?.callback
            ? [
                4,
                runDelayedCallback(
                  pkgValue197,
                  pkgParam76.callback,
                  pkgValue11(pkgValue196, pkgParam76.timeout),
                ),
              ]
            : [3, 6];
        case 5:
          pkgValue197 = pkgParam97.sent();
          pkgParam97.label = 6;
        case 6:
          return (pkgParam76?.debug && pkgValue197.flush(), [2, pkgValue197]);
      }
    });
  });
}
function pkgResolveArguments(
  pkgParam173,
  pkgParam174,
  pkgParam175,
  pkgParam176,
) {
  var pkgValue339 = [pkgParam173, pkgParam174, pkgParam175, pkgParam176],
    pkgValue340 = helpersI(pkgParam173) ? pkgParam173.event : pkgParam173;
  if (!pkgValue340 || !helpersA(pkgValue340)) throw Error("Event missing");
  var pkgValue341 = helpersI(pkgParam173)
      ? (pkgParam173.properties ?? {})
      : helpersI(pkgParam174)
        ? pkgParam174
        : {},
    _pkgContext = {};
  helpersN(pkgParam175) || (_pkgContext = pkgParam175 ?? {});
  helpersI(pkgParam173) &&
    !helpersN(pkgParam174) &&
    (_pkgContext = pkgParam174 ?? {});
  var pkgValue342 = pkgValue339.find(helpersN);
  return [pkgValue340, pkgValue341, _pkgContext, pkgValue342];
}
function pkgResolvePageArguments(
  pkgParam92,
  pkgParam93,
  pkgParam94,
  pkgParam95,
  pkgParam96,
) {
  var pkgValue206,
    pkgValue207,
    _pkgContext = null,
    pkgValue208 = null,
    pkgValue209 = [pkgParam92, pkgParam93, pkgParam94, pkgParam95, pkgParam96],
    _pkgContextCancelation = pkgValue209.filter(helpersA);
  _pkgContextCancelation.length === 1
    ? helpersA(pkgValue209[1])
      ? ((pkgValue208 = pkgValue209[1]), (_pkgContext = null))
      : ((pkgValue208 = _pkgContextCancelation[0]), (_pkgContext = null))
    : _pkgContextCancelation.length === 2 &&
      (typeof pkgValue209[0] == "string" && (_pkgContext = pkgValue209[0]),
      typeof pkgValue209[1] == "string" && (pkgValue208 = pkgValue209[1]));
  var pkgValue210 = pkgValue209.find(helpersN),
    pkgValue211 = pkgValue209.filter(helpersI);
  return (
    pkgValue211.length === 1
      ? helpersI(pkgValue209[2])
        ? ((pkgValue207 = {}), (pkgValue206 = pkgValue209[2]))
        : helpersI(pkgValue209[3])
          ? ((pkgValue206 = {}), (pkgValue207 = pkgValue209[3]))
          : ((pkgValue206 = pkgValue211[0]), (pkgValue207 = {}))
      : pkgValue211.length === 2 &&
        ((pkgValue206 = pkgValue211[0]), (pkgValue207 = pkgValue211[1])),
    [
      _pkgContext,
      pkgValue208,
      (pkgValue206 ??= {}),
      (pkgValue207 ??= {}),
      pkgValue210,
    ]
  );
}
var pkgResolveUserArguments = function (pkgParam91) {
  return function () {
    for (
      var pkgValue218 = [...arguments],
        pkgValue219 = {},
        pkgValue220 = ["callback", "options", "traits", "id"],
        pkgValue221 = 0,
        pkgValue222 = pkgValue218;
      pkgValue221 < pkgValue222.length;
      pkgValue221++
    ) {
      var pkgValue223 = pkgValue222[pkgValue221],
        _pkgContext = pkgValue220.pop();
      if (_pkgContext === "id") {
        if (helpersA(pkgValue223) || helpersR(pkgValue223)) {
          pkgValue219.id = pkgValue223.toString();
          continue;
        }
        if (pkgValue223 == null) continue;
        _pkgContext = pkgValue220.pop();
      }
      if (
        ((_pkgContext === "traits" || _pkgContext === "options") &&
          (pkgValue223 == null || helpersI(pkgValue223)) &&
          (pkgValue219[_pkgContext] = pkgValue223),
        helpersN(pkgValue223))
      ) {
        pkgValue219.callback = pkgValue223;
        break;
      }
    }
    return [
      pkgValue219.id ?? pkgParam91.id(),
      pkgValue219.traits ?? {},
      pkgValue219.options ?? {},
      pkgValue219.callback,
    ];
  };
};
function pkgResolveAliasArguments(
  pkgParam179,
  pkgParam180,
  pkgParam181,
  pkgParam182,
) {
  helpersR(pkgParam179) && (pkgParam179 = pkgParam179.toString());
  helpersR(pkgParam180) && (pkgParam180 = pkgParam180.toString());
  var pkgValue346 = [pkgParam179, pkgParam180, pkgParam181, pkgParam182],
    pkgValue347 = pkgValue346.filter(helpersA),
    pkgValue348 = pkgValue347[0],
    _pkgContext = pkgValue348 === undefined ? pkgParam179 : pkgValue348,
    pkgValue349 = pkgValue347[1],
    pkgValue350 = pkgValue349 === undefined ? null : pkgValue349,
    _pkgContextCancelation = pkgValue346.filter(helpersI)[0];
  return [
    _pkgContext,
    pkgValue350,
    _pkgContextCancelation === undefined ? {} : _pkgContextCancelation,
    pkgValue346.find(helpersN),
  ];
}
function pkgHelper8(pkgParam284) {
  return (
    Object.prototype.toString.call(pkgParam284).slice(8, -1).toLowerCase() ===
    "object"
  );
}
var pkgValue12 = function (
    pkgParam359,
    pkgParam360,
    pkgParam361,
    pkgParam362,
    pkgParam363,
    pkgParam364,
  ) {
    return {
      __t: "bpc",
      c: pkgParam360,
      p: pkgParam362,
      u: pkgParam359,
      s: pkgParam361,
      t: pkgParam363,
      r: pkgParam364,
    };
  },
  pkgValue13 = Object.keys(pkgValue12("", "", "", "", "", ""));
function pkgHelper9(pkgParam276) {
  if (!pkgHelper8(pkgParam276) || pkgParam276.__t !== "bpc") return false;
  for (var pkgValue444 in pkgParam276)
    if (!pkgValue13.includes(pkgValue444)) return false;
  return true;
}
var pkgValue14 = function (pkgParam390, pkgParam391) {
    return pkgParam390.indexOf("?") > -1
      ? pkgParam390
      : pkgParam390 + pkgParam391;
  },
  pkgValue15 = function (pkgParam370) {
    var pkgValue468 = pkgParam370.indexOf("#");
    return pkgValue468 === -1 ? pkgParam370 : pkgParam370.slice(0, pkgValue468);
  },
  pkgValue16 = function (pkgParam345) {
    try {
      return new URL(pkgParam345).pathname;
    } catch {
      return pkgParam345[0] === "/" ? pkgParam345 : "/" + pkgParam345;
    }
  },
  pkgValue17 = function (pkgParam253) {
    var pkgValue413 = pkgParam253.c,
      pkgValue414 = pkgParam253.p,
      pkgValue415 = pkgParam253.s,
      pkgValue416 = pkgParam253.u,
      pkgValue417 = pkgParam253.r,
      pkgValue418 = pkgParam253.t;
    return {
      path: pkgValue413 ? pkgValue16(pkgValue413) : pkgValue414,
      referrer: pkgValue417,
      search: pkgValue415,
      title: pkgValue418,
      url: pkgValue413
        ? pkgValue14(pkgValue413, pkgValue415)
        : pkgValue15(pkgValue416),
    };
  },
  pkgValue18 = function () {
    var pkgValue361 = document.querySelector("link[rel='canonical']");
    return pkgValue12(
      location.href,
      (pkgValue361 && pkgValue361.getAttribute("href")) || undefined,
      location.search,
      location.pathname,
      document.title,
      document.referrer,
    );
  },
  pkgValue19 = function () {
    return pkgValue17(pkgValue18());
  };
function pkgHelper10(pkgParam222, pkgParam223) {
  return Object.assign.apply(
    Object,
    pkgImport4(
      [{}],
      pkgParam223.map(function (item) {
        var pkgValue448;
        if (
          pkgParam222 &&
          Object.prototype.hasOwnProperty.call(pkgParam222, item)
        )
          return (
            (pkgValue448 = {}),
            (pkgValue448[item] = pkgParam222[item]),
            pkgValue448
          );
      }),
      false,
    ),
  );
}
var pkgValue20 = function (pkgParam169, pkgParam170) {
    pkgParam170 === undefined && (pkgParam170 = pkgValue19());
    var pkgValue331 = pkgParam169.context,
      pkgValue332;
    pkgParam169.type === "page" &&
      ((pkgValue332 =
        pkgParam169.properties &&
        pkgHelper10(pkgParam169.properties, Object.keys(pkgParam170))),
      (pkgParam169.properties = pkgImport6(
        pkgImport6(pkgImport6({}, pkgParam170), pkgParam169.properties),
        pkgParam169.name
          ? {
              name: pkgParam169.name,
            }
          : {},
      )));
    pkgValue331.page = pkgImport6(
      pkgImport6(pkgImport6({}, pkgParam170), pkgValue332),
      pkgValue331.page,
    );
  },
  pkgEventFactory = (function (pkgParam17) {
    pkgImport5(pkgHelper62, pkgParam17);
    function pkgHelper62(pkgParam147) {
      var pkgValue298 =
        pkgParam17.call(this, {
          createMessageId: function () {
            return `ajs-next-${Date.now()}-${middlewareM()}`;
          },
          onEventMethodCall: function (pkgParam386) {
            var pkgValue472 = pkgParam386.options;
            pkgValue298.maybeUpdateAnonId(pkgValue472);
          },
          onFinishedEvent: function (pkgParam403) {
            return (pkgValue298.addIdentity(pkgParam403), pkgParam403);
          },
        }) || this;
      return ((pkgValue298.user = pkgParam147), pkgValue298);
    }
    return (
      (pkgHelper62.prototype.maybeUpdateAnonId = function (pkgParam350) {
        pkgParam350 != null &&
          pkgParam350.anonymousId &&
          this.user.anonymousId(pkgParam350.anonymousId);
      }),
      (pkgHelper62.prototype.addIdentity = function (pkgParam258) {
        this.user.id() && (pkgParam258.userId = this.user.id());
        this.user.anonymousId() &&
          (pkgParam258.anonymousId = this.user.anonymousId());
      }),
      (pkgHelper62.prototype.track = function (
        pkgParam327,
        pkgParam328,
        pkgParam329,
        pkgParam330,
        pkgParam331,
      ) {
        var pkgValue457 = pkgParam17.prototype.track.call(
          this,
          pkgParam327,
          pkgParam328,
          pkgParam329,
          pkgParam330,
        );
        return (pkgValue20(pkgValue457, pkgParam331), pkgValue457);
      }),
      (pkgHelper62.prototype.page = function (
        pkgParam312,
        pkgParam313,
        pkgParam314,
        pkgParam315,
        pkgParam316,
        pkgParam317,
      ) {
        var _pkgContext = pkgParam17.prototype.page.call(
          this,
          pkgParam312,
          pkgParam313,
          pkgParam314,
          pkgParam315,
          pkgParam316,
        );
        return (pkgValue20(_pkgContext, pkgParam317), _pkgContext);
      }),
      (pkgHelper62.prototype.screen = function (
        pkgParam301,
        pkgParam302,
        pkgParam303,
        pkgParam304,
        pkgParam305,
        pkgParam306,
      ) {
        var _pkgContext = pkgParam17.prototype.screen.call(
          this,
          pkgParam301,
          pkgParam302,
          pkgParam303,
          pkgParam304,
          pkgParam305,
        );
        return (pkgValue20(_pkgContext, pkgParam306), _pkgContext);
      }),
      (pkgHelper62.prototype.identify = function (
        pkgParam318,
        pkgParam319,
        pkgParam320,
        pkgParam321,
        pkgParam322,
      ) {
        var pkgValue456 = pkgParam17.prototype.identify.call(
          this,
          pkgParam318,
          pkgParam319,
          pkgParam320,
          pkgParam321,
        );
        return (pkgValue20(pkgValue456, pkgParam322), pkgValue456);
      }),
      (pkgHelper62.prototype.group = function (
        pkgParam332,
        pkgParam333,
        pkgParam334,
        pkgParam335,
        pkgParam336,
      ) {
        var pkgValue458 = pkgParam17.prototype.group.call(
          this,
          pkgParam332,
          pkgParam333,
          pkgParam334,
          pkgParam335,
        );
        return (pkgValue20(pkgValue458, pkgParam336), pkgValue458);
      }),
      (pkgHelper62.prototype.alias = function (
        pkgParam337,
        pkgParam338,
        pkgParam339,
        pkgParam340,
        pkgParam341,
      ) {
        var pkgValue459 = pkgParam17.prototype.alias.call(
          this,
          pkgParam337,
          pkgParam338,
          pkgParam339,
          pkgParam340,
        );
        return (pkgValue20(pkgValue459, pkgParam341), pkgValue459);
      }),
      pkgHelper62
    );
  })(pkgValue7),
  pkgIsDestinationPluginWithAddMiddleware = function (pkgParam371) {
    return "addMiddleware" in pkgParam371 && pkgParam371.type === "destination";
  },
  pkgValue21 = (function (pkgParam148) {
    pkgImport5(pkgHelper72, pkgParam148);
    function pkgHelper72(pkgParam355) {
      return (
        pkgParam148.call(
          this,
          typeof pkgParam355 == "string"
            ? new metricHelpersI(4, pkgParam355)
            : pkgParam355,
        ) || this
      );
    }
    return (
      (pkgHelper72.prototype.flush = function () {
        return pkgImport3(this, undefined, undefined, function () {
          return pkgImport2(this, function (pkgParam368) {
            return metricHelpersA()
              ? [2, []]
              : [2, pkgParam148.prototype.flush.call(this)];
          });
        });
      }),
      pkgHelper72
    );
  })(pkgValue10);
function pkgHelper11(pkgParam134) {
  for (
    var pkgValue287 = pkgParam134.constructor.prototype,
      pkgValue288 = 0,
      pkgValue289 = Object.getOwnPropertyNames(pkgValue287);
    pkgValue288 < pkgValue289.length;
    pkgValue288++
  ) {
    var pkgValue290 = pkgValue289[pkgValue288];
    if (pkgValue290 !== "constructor") {
      var pkgValue291 = Object.getOwnPropertyDescriptor(
        pkgParam134.constructor.prototype,
        pkgValue290,
      );
      pkgValue291 &&
        typeof pkgValue291.value == "function" &&
        (pkgParam134[pkgValue290] = pkgParam134[pkgValue290].bind(pkgParam134));
    }
  }
  return pkgParam134;
}
function pkgHelper12(pkgParam273) {
  for (var pkgValue441 = 1; pkgValue441 < arguments.length; pkgValue441++) {
    var pkgValue442 = arguments[pkgValue441];
    for (var pkgValue443 in pkgValue442)
      pkgParam273[pkgValue443] = pkgValue442[pkgValue443];
  }
  return pkgParam273;
}
var pkgValue22 = {
  read: function (pkgParam279) {
    return (
      pkgParam279[0] === '"' && (pkgParam279 = pkgParam279.slice(1, -1)),
      pkgParam279.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    );
  },
  write: function (pkgParam265) {
    return encodeURIComponent(pkgParam265).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent,
    );
  },
};
function pkgHelper13(pkgParam28, pkgParam29) {
  function pkgHelper64(pkgParam85, pkgParam86, pkgParam87) {
    if (!(typeof document > "u")) {
      pkgParam87 = pkgHelper12({}, pkgParam29, pkgParam87);
      typeof pkgParam87.expires == "number" &&
        (pkgParam87.expires = new Date(
          Date.now() + pkgParam87.expires * 864e5,
        ));
      pkgParam87.expires &&= pkgParam87.expires.toUTCString();
      pkgParam85 = encodeURIComponent(pkgParam85)
        .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
        .replace(/[()]/g, escape);
      var pkgValue194 = "";
      for (var pkgValue195 in pkgParam87)
        pkgParam87[pkgValue195] &&
          ((pkgValue194 += "; " + pkgValue195),
          pkgParam87[pkgValue195] !== true &&
            (pkgValue194 += "=" + pkgParam87[pkgValue195].split(";")[0]));
      return (document.cookie =
        pkgParam85 +
        "=" +
        pkgParam28.write(pkgParam86, pkgParam85) +
        pkgValue194);
    }
  }
  function pkgHelper65(pkgParam121) {
    if (!(typeof document > "u" || (arguments.length && !pkgParam121))) {
      for (
        var pkgValue268 = document.cookie ? document.cookie.split("; ") : [],
          pkgValue269 = {},
          pkgValue270 = 0;
        pkgValue270 < pkgValue268.length;
        pkgValue270++
      ) {
        var pkgValue271 = pkgValue268[pkgValue270].split("="),
          pkgValue272 = pkgValue271.slice(1).join("=");
        try {
          var _pkgContext = decodeURIComponent(pkgValue271[0]);
          if (
            ((pkgValue269[_pkgContext] = pkgParam28.read(
              pkgValue272,
              _pkgContext,
            )),
            pkgParam121 === _pkgContext)
          )
            break;
        } catch {}
      }
      return pkgParam121 ? pkgValue269[pkgParam121] : pkgValue269;
    }
  }
  return Object.create(
    {
      set: pkgHelper64,
      get: pkgHelper65,
      remove: function (pkgParam394, pkgParam395) {
        pkgHelper64(
          pkgParam394,
          "",
          pkgHelper12({}, pkgParam395, {
            expires: -1,
          }),
        );
      },
      withAttributes: function (pkgParam374) {
        return pkgHelper13(
          this.converter,
          pkgHelper12({}, this.attributes, pkgParam374),
        );
      },
      withConverter: function (pkgParam375) {
        return pkgHelper13(
          pkgHelper12({}, this.converter, pkgParam375),
          this.attributes,
        );
      },
    },
    {
      attributes: {
        value: Object.freeze(pkgParam29),
      },
      converter: {
        value: Object.freeze(pkgParam28),
      },
    },
  );
}
var pkgValue23 = pkgHelper13(pkgValue22, {
  path: "/",
});
function pkgHelper14(pkgParam205) {
  var pkgValue363 = pkgParam205.hostname.split("."),
    pkgValue364 = pkgValue363[pkgValue363.length - 1],
    pkgValue365 = [];
  if (
    (pkgValue363.length === 4 && parseInt(pkgValue364, 10) > 0) ||
    pkgValue363.length <= 1
  )
    return pkgValue365;
  for (
    var pkgValue366 = pkgValue363.length - 2;
    pkgValue366 >= 0;
    --pkgValue366
  )
    pkgValue365.push(pkgValue363.slice(pkgValue366).join("."));
  return pkgValue365;
}
function pkgHelper15(pkgParam387) {
  try {
    return new URL(pkgParam387);
  } catch {
    return;
  }
}
function pkgHelper16(pkgParam210) {
  var pkgValue374 = pkgHelper15(pkgParam210);
  if (pkgValue374)
    for (
      var pkgValue375 = pkgHelper14(pkgValue374), pkgValue376 = 0;
      pkgValue376 < pkgValue375.length;
      ++pkgValue376
    ) {
      var pkgValue377 = "__tld__",
        pkgValue378 = pkgValue375[pkgValue376],
        pkgValue379 = {
          domain: "." + pkgValue378,
        };
      try {
        if (
          (pkgValue23.set(pkgValue377, "1", pkgValue379),
          pkgValue23.get(pkgValue377))
        )
          return (pkgValue23.remove(pkgValue377, pkgValue379), pkgValue378);
      } catch {
        return;
      }
    }
}
var pkgValue25 = (function () {
    function pkgHelper66(pkgParam346) {
      pkgParam346 === undefined && (pkgParam346 = pkgHelper66.defaults);
      this.options = pkgImport6(
        pkgImport6({}, pkgHelper66.defaults),
        pkgParam346,
      );
    }
    return (
      Object.defineProperty(pkgHelper66, "defaults", {
        get: function () {
          return {
            maxage: 365,
            domain: pkgHelper16(window.location.href),
            path: "/",
            sameSite: "Lax",
          };
        },
        enumerable: false,
        configurable: true,
      }),
      (pkgHelper66.prototype.opts = function () {
        return {
          sameSite: this.options.sameSite,
          expires: this.options.maxage,
          domain: this.options.domain,
          path: this.options.path,
          secure: this.options.secure,
        };
      }),
      (pkgHelper66.prototype.get = function (pkgParam251) {
        try {
          var pkgValue412 = pkgValue23.get(pkgParam251);
          if (pkgValue412 == null) return null;
          try {
            return JSON.parse(pkgValue412) ?? null;
          } catch {
            return pkgValue412 ?? null;
          }
        } catch {
          return null;
        }
      }),
      (pkgHelper66.prototype.set = function (pkgParam249, pkgParam250) {
        typeof pkgParam250 == "string"
          ? pkgValue23.set(pkgParam249, pkgParam250, this.opts())
          : pkgParam250 === null
            ? pkgValue23.remove(pkgParam249, this.opts())
            : pkgValue23.set(
                pkgParam249,
                JSON.stringify(pkgParam250),
                this.opts(),
              );
      }),
      (pkgHelper66.prototype.remove = function (pkgParam396) {
        return pkgValue23.remove(pkgParam396, this.opts());
      }),
      pkgHelper66
    );
  })(),
  pkgValue26 = (function () {
    function pkgHelper67() {}
    return (
      (pkgHelper67.prototype.localStorageWarning = function (
        pkgParam343,
        pkgParam344,
      ) {
        console.warn(
          `Unable to access ${pkgParam343}, localStorage may be ${pkgParam344}`,
        );
      }),
      (pkgHelper67.prototype.get = function (pkgParam206) {
        try {
          var pkgValue369 = localStorage.getItem(pkgParam206);
          if (pkgValue369 === null) return null;
          try {
            return JSON.parse(pkgValue369) ?? null;
          } catch {
            return pkgValue369 ?? null;
          }
        } catch {
          return (this.localStorageWarning(pkgParam206, "unavailable"), null);
        }
      }),
      (pkgHelper67.prototype.set = function (pkgParam274, pkgParam275) {
        try {
          localStorage.setItem(pkgParam274, JSON.stringify(pkgParam275));
        } catch {
          this.localStorageWarning(pkgParam274, "full");
        }
      }),
      (pkgHelper67.prototype.remove = function (pkgParam278) {
        try {
          return localStorage.removeItem(pkgParam278);
        } catch {
          this.localStorageWarning(pkgParam278, "unavailable");
        }
      }),
      pkgHelper67
    );
  })(),
  pkgValue27 = (function () {
    function pkgHelper74() {
      this.cache = {};
    }
    return (
      (pkgHelper74.prototype.get = function (pkgParam401) {
        return this.cache[pkgParam401] ?? null;
      }),
      (pkgHelper74.prototype.set = function (pkgParam417, pkgParam418) {
        this.cache[pkgParam417] = pkgParam418;
      }),
      (pkgHelper74.prototype.remove = function (pkgParam409) {
        delete this.cache[pkgParam409];
      }),
      pkgHelper74
    );
  })(),
  pkgValue28 = {
    Cookie: "cookie",
    LocalStorage: "localStorage",
    Memory: "memory",
  };
function $e(pkgParam252) {
  return (
    pkgParam252 &&
    pkgParam252.stores &&
    Array.isArray(pkgParam252.stores) &&
    pkgParam252.stores.every(function (item) {
      return Object.values(pkgValue28).includes(item);
    })
  );
}
function pkgHelper17(pkgParam377) {
  return typeof pkgParam377 == "object" && pkgParam377.name !== undefined;
}
var pkgValue29 = function (pkgParam287, pkgParam288, pkgParam289, pkgParam290) {
    console.warn(
      `${pkgParam287.constructor.name}: Can't ${pkgParam288} key "${pkgParam289}" | Err: ${pkgParam290}`,
    );
  },
  pkgUniversalStorage = (function () {
    function pkgHelper68(pkgParam421) {
      this.stores = pkgParam421;
    }
    return (
      (pkgHelper68.prototype.get = function (pkgParam236) {
        for (
          var pkgValue403 = null, pkgValue404 = 0, pkgValue405 = this.stores;
          pkgValue404 < pkgValue405.length;
          pkgValue404++
        ) {
          var pkgValue406 = pkgValue405[pkgValue404];
          try {
            if (
              ((pkgValue403 = pkgValue406.get(pkgParam236)),
              pkgValue403 != null)
            )
              return pkgValue403;
          } catch (pkgValue480) {
            pkgValue29(pkgValue406, "get", pkgParam236, pkgValue480);
          }
        }
        return null;
      }),
      (pkgHelper68.prototype.set = function (pkgParam296, pkgParam297) {
        this.stores.forEach(function (item) {
          try {
            item.set(pkgParam296, pkgParam297);
          } catch (pkgValue481) {
            pkgValue29(item, "set", pkgParam296, pkgValue481);
          }
        });
      }),
      (pkgHelper68.prototype.clear = function (pkgParam291) {
        this.stores.forEach(function (item) {
          try {
            item.remove(pkgParam291);
          } catch (pkgValue479) {
            pkgValue29(item, "remove", pkgParam291, pkgValue479);
          }
        });
      }),
      (pkgHelper68.prototype.getAndSync = function (pkgParam292) {
        var pkgValue449 = this.get(pkgParam292),
          pkgValue450 =
            typeof pkgValue449 == "number"
              ? pkgValue449.toString()
              : pkgValue449;
        return (this.set(pkgParam292, pkgValue450), pkgValue450);
      }),
      pkgHelper68
    );
  })();
function pkgHelper18(pkgParam154) {
  return pkgParam154.map(function (item) {
    var pkgValue344, pkgValue345;
    switch (
      (pkgHelper17(item)
        ? ((pkgValue344 = item.name), (pkgValue345 = item.settings))
        : (pkgValue344 = item),
      pkgValue344)
    ) {
      case pkgValue28.Cookie:
        return new pkgValue25(pkgValue345);
      case pkgValue28.LocalStorage:
        return new pkgValue26();
      case pkgValue28.Memory:
        return new pkgValue27();
      default:
        throw Error(`Unknown Store Type: ${item}`);
    }
  });
}
function pkgHelper19(pkgParam293, pkgParam294) {
  return pkgParam293.map(function (item) {
    return pkgParam294 && item === pkgValue28.Cookie
      ? {
          name: item,
          settings: pkgParam294,
        }
      : item;
  });
}
var pkgValue30 = {
    persist: true,
    cookie: {
      key: "ajs_user_id",
      oldKey: "ajs_user",
    },
    localStorage: {
      key: "ajs_user_traits",
    },
  },
  pkgUser = (function () {
    function pkgHelper54(pkgParam11, pkgParam12) {
      pkgParam11 === undefined && (pkgParam11 = pkgValue30);
      var pkgValue80 = this;
      this.options = {};
      this.id = function (pkgParam105) {
        if (pkgValue80.options.disable) return null;
        var pkgValue227 = pkgValue80.identityStore.getAndSync(pkgValue80.idKey);
        pkgParam105 !== undefined &&
          (pkgValue80.identityStore.set(pkgValue80.idKey, pkgParam105),
          pkgParam105 !== pkgValue227 &&
            pkgValue227 !== null &&
            pkgParam105 !== null &&
            pkgValue80.anonymousId(null));
        var pkgValue228 = pkgValue80.identityStore.getAndSync(pkgValue80.idKey);
        if (pkgValue228) return pkgValue228;
        var pkgValue229 = pkgValue80.legacyUserStore.get(
          pkgValue30.cookie.oldKey,
        );
        return pkgValue229
          ? typeof pkgValue229 == "object"
            ? pkgValue229.id
            : pkgValue229
          : null;
      };
      this.anonymousId = function (pkgParam110) {
        if (pkgValue80.options.disable) return null;
        if (pkgParam110 === undefined) {
          var pkgValue230 =
            pkgValue80.identityStore.getAndSync(pkgValue80.anonKey) ??
            pkgValue80.legacySIO()?.[0];
          if (pkgValue230) return pkgValue230;
        }
        return pkgParam110 === null
          ? (pkgValue80.identityStore.set(pkgValue80.anonKey, null),
            pkgValue80.identityStore.getAndSync(pkgValue80.anonKey))
          : (pkgValue80.identityStore.set(
              pkgValue80.anonKey,
              pkgParam110 ?? middlewareM(),
            ),
            pkgValue80.identityStore.getAndSync(pkgValue80.anonKey));
      };
      this.traits = function (pkgParam244) {
        if (!pkgValue80.options.disable)
          return (
            pkgParam244 === null && (pkgParam244 = {}),
            pkgParam244 &&
              pkgValue80.traitsStore.set(
                pkgValue80.traitsKey,
                pkgParam244 ?? {},
              ),
            pkgValue80.traitsStore.get(pkgValue80.traitsKey) ?? {}
          );
      };
      this.options = pkgImport6(pkgImport6({}, pkgValue30), pkgParam11);
      this.cookieOptions = pkgParam12;
      this.idKey = pkgParam11.cookie?.key ?? pkgValue30.cookie.key;
      this.traitsKey =
        pkgParam11.localStorage?.key ?? pkgValue30.localStorage.key;
      this.anonKey = "ajs_anonymous_id";
      this.identityStore = this.createStorage(this.options, pkgParam12);
      this.legacyUserStore = this.createStorage(
        this.options,
        pkgParam12,
        function (pkgParam414) {
          return pkgParam414 === pkgValue28.Cookie;
        },
      );
      this.traitsStore = this.createStorage(
        this.options,
        pkgParam12,
        function (pkgParam415) {
          return pkgParam415 !== pkgValue28.Cookie;
        },
      );
      var pkgValue81 = this.legacyUserStore.get(pkgValue30.cookie.oldKey);
      pkgValue81 &&
        typeof pkgValue81 == "object" &&
        (pkgValue81.id && this.id(pkgValue81.id),
        pkgValue81.traits && this.traits(pkgValue81.traits));
      pkgHelper11(this);
    }
    return (
      (pkgHelper54.prototype.legacySIO = function () {
        var pkgValue434 = this.legacyUserStore.get("_sio");
        if (!pkgValue434) return null;
        var pkgValue435 = pkgValue434.split("----");
        return [pkgValue435[0], pkgValue435[1]];
      }),
      (pkgHelper54.prototype.identify = function (pkgParam238, pkgParam239) {
        if (!this.options.disable) {
          pkgParam239 ??= {};
          var pkgValue407 = this.id();
          (pkgValue407 === null || pkgValue407 === pkgParam238) &&
            (pkgParam239 = pkgImport6(
              pkgImport6({}, this.traits()),
              pkgParam239,
            ));
          pkgParam238 && this.id(pkgParam238);
          this.traits(pkgParam239);
        }
      }),
      (pkgHelper54.prototype.logout = function () {
        this.anonymousId(null);
        this.id(null);
        this.traits({});
      }),
      (pkgHelper54.prototype.reset = function () {
        this.logout();
        this.identityStore.clear(this.idKey);
        this.identityStore.clear(this.anonKey);
        this.traitsStore.clear(this.traitsKey);
      }),
      (pkgHelper54.prototype.load = function () {
        return new pkgHelper54(this.options, this.cookieOptions);
      }),
      (pkgHelper54.prototype.save = function () {
        return true;
      }),
      (pkgHelper54.prototype.createStorage = function (
        event,
        pkgParam111,
        pkgParam112,
      ) {
        var pkgValue231 = [
          pkgValue28.LocalStorage,
          pkgValue28.Cookie,
          pkgValue28.Memory,
        ];
        return event.disable
          ? new pkgUniversalStorage([])
          : event.persist
            ? (event.storage !== undefined &&
                event.storage !== null &&
                $e(event.storage) &&
                (pkgValue231 = event.storage.stores),
              event.localStorageFallbackDisabled &&
                (pkgValue231 = pkgValue231.filter(function (item) {
                  return item !== pkgValue28.LocalStorage;
                })),
              pkgParam112 && (pkgValue231 = pkgValue231.filter(pkgParam112)),
              new pkgUniversalStorage(
                pkgHelper18(pkgHelper19(pkgValue231, pkgParam111)),
              ))
            : new pkgUniversalStorage([new pkgValue27()]);
      }),
      (pkgHelper54.defaults = pkgValue30),
      pkgHelper54
    );
  })(),
  pkgValue31 = {
    persist: true,
    cookie: {
      key: "ajs_group_id",
    },
    localStorage: {
      key: "ajs_group_properties",
    },
  },
  pkgGroup = (function (pkgParam235) {
    pkgImport5(pkgHelper76, pkgParam235);
    function pkgHelper76(pkgParam259, pkgParam260) {
      pkgParam259 === undefined && (pkgParam259 = pkgValue31);
      var pkgValue423 =
        pkgParam235.call(
          this,
          pkgImport6(pkgImport6({}, pkgValue31), pkgParam259),
          pkgParam260,
        ) || this;
      return (
        (pkgValue423.anonymousId = function (pkgParam425) {}),
        pkgHelper11(pkgValue423),
        pkgValue423
      );
    }
    return pkgHelper76;
  })(pkgUser),
  at = function (pkgParam323) {
    return (
      typeof pkgParam323 == "object" &&
      !!pkgParam323 &&
      "then" in pkgParam323 &&
      typeof pkgParam323.then == "function"
    );
  },
  pkgValue32 = function (pkgParam307, pkgParam308, pkgParam309) {
    pkgParam309.getAndRemove(pkgParam307).forEach(function (item) {
      pkgHelper20(pkgParam308, item).catch(console.error);
    });
  },
  pkgValue33 = function (pkgParam108, pkgParam109) {
    return pkgImport3(undefined, undefined, undefined, function () {
      var pkgValue282, pkgValue283, pkgValue284;
      return pkgImport2(this, function (pkgParam160) {
        switch (pkgParam160.label) {
          case 0:
            pkgValue282 = 0;
            pkgValue283 = pkgParam109.getAndRemove("addSourceMiddleware");
            pkgParam160.label = 1;
          case 1:
            return pkgValue282 < pkgValue283.length
              ? ((pkgValue284 = pkgValue283[pkgValue282]),
                [4, pkgHelper20(pkgParam108, pkgValue284).catch(console.error)])
              : [3, 4];
          case 2:
            pkgParam160.sent();
            pkgParam160.label = 3;
          case 3:
            return (pkgValue282++, [3, 1]);
          case 4:
            return [2];
        }
      });
    });
  },
  pkgValue34 = function (pkgParam118, pkgParam119) {
    return pkgImport3(undefined, undefined, undefined, function () {
      var pkgValue293, pkgValue294, pkgValue295;
      return pkgImport2(this, function (pkgParam167) {
        switch (pkgParam167.label) {
          case 0:
            pkgValue293 = 0;
            pkgValue294 = pkgParam119.getAndRemove("register");
            pkgParam167.label = 1;
          case 1:
            return pkgValue293 < pkgValue294.length
              ? ((pkgValue295 = pkgValue294[pkgValue293]),
                [4, pkgHelper20(pkgParam118, pkgValue295).catch(console.error)])
              : [3, 4];
          case 2:
            pkgParam167.sent();
            pkgParam167.label = 3;
          case 3:
            return (pkgValue293++, [3, 1]);
          case 4:
            return [2];
        }
      });
    });
  },
  pkgValue35 = pkgValue32.bind(undefined, "on"),
  pkgValue36 = pkgValue32.bind(undefined, "setAnonymousId"),
  pkgValue37 = function (pkgParam226, pkgParam227) {
    Object.keys(pkgParam227.calls).forEach(function (item) {
      pkgParam227.getAndRemove(item).forEach(function (_item) {
        setTimeout(function () {
          pkgHelper20(pkgParam226, _item).catch(console.error);
        }, 0);
      });
    });
  },
  pkgValue38 = function (pkgParam400) {
    if (pkgValue39(pkgParam400)) return pkgValue17(pkgParam400.pop());
  },
  pkgValue39 = function (pkgParam392) {
    var pkgValue478 = pkgParam392[pkgParam392.length - 1];
    return pkgHelper9(pkgValue478);
  },
  pkgValue40 = (function () {
    function pkgHelper75(pkgParam230, pkgParam231, pkgParam232, pkgParam233) {
      pkgParam232 === undefined && (pkgParam232 = function () {});
      pkgParam233 === undefined && (pkgParam233 = console.error);
      this.method = pkgParam230;
      this.resolve = pkgParam232;
      this.reject = pkgParam233;
      this.called = false;
      this.args = pkgParam231;
    }
    return pkgHelper75;
  })(),
  pkgValue41 = (function () {
    function pkgHelper63() {
      var pkgValue461 = [...arguments];
      this._callMap = {};
      this.add.apply(this, pkgValue461);
    }
    return (
      Object.defineProperty(pkgHelper63.prototype, "calls", {
        get: function () {
          return (this._pushSnippetWindowBuffer(), this._callMap);
        },
        set: function (pkgParam422) {
          this._callMap = pkgParam422;
        },
        enumerable: false,
        configurable: true,
      }),
      (pkgHelper63.prototype.get = function (pkgParam405) {
        return this.calls[pkgParam405] ?? [];
      }),
      (pkgHelper63.prototype.getAndRemove = function (pkgParam381) {
        var pkgValue470 = this.get(pkgParam381);
        return ((this.calls[pkgParam381] = []), pkgValue470);
      }),
      (pkgHelper63.prototype.add = function () {
        for (
          var pkgValue258 = this, pkgValue259 = [], pkgValue260 = 0;
          pkgValue260 < arguments.length;
          pkgValue260++
        )
          pkgValue259[pkgValue260] = arguments[pkgValue260];
        pkgValue259.forEach(function (item) {
          ["track", "screen", "alias", "group", "page", "identify"].includes(
            item.method,
          ) &&
            !pkgValue39(item.args) &&
            (item.args = pkgImport4(
              pkgImport4([], item.args, true),
              [pkgValue18()],
              false,
            ));
          pkgValue258.calls[item.method]
            ? pkgValue258.calls[item.method].push(item)
            : (pkgValue258.calls[item.method] = [item]);
        });
      }),
      (pkgHelper63.prototype.clear = function () {
        this._pushSnippetWindowBuffer();
        this.calls = {};
      }),
      (pkgHelper63.prototype.toArray = function () {
        var pkgValue463;
        return (pkgValue463 = []).concat.apply(
          pkgValue463,
          Object.values(this.calls),
        );
      }),
      (pkgHelper63.prototype._pushSnippetWindowBuffer = function () {
        if (middlewareC() !== "npm") {
          var pkgValue382 = pkgGetGlobalAnalytics();
          if (Array.isArray(pkgValue382)) {
            var pkgValue383 = pkgValue382
              .splice(0, pkgValue382.length)
              .map(function (item) {
                var pkgValue475 = item[0];
                return new pkgValue40(pkgValue475, item.slice(1));
              });
            this.add.apply(this, pkgValue383);
          }
        }
      }),
      pkgHelper63
    );
  })();
function pkgHelper20(pkgParam99, pkgParam100) {
  return pkgImport3(this, undefined, undefined, function () {
    var pkgValue237, pkgValue238;
    return pkgImport2(this, function (pkgParam132) {
      switch (pkgParam132.label) {
        case 0:
          return (
            pkgParam132.trys.push([0, 3, , 4]),
            pkgParam100.called
              ? [2, undefined]
              : ((pkgParam100.called = true),
                (pkgValue237 = pkgParam99[pkgParam100.method].apply(
                  pkgParam99,
                  pkgParam100.args,
                )),
                at(pkgValue237) ? [4, pkgValue237] : [3, 2])
          );
        case 1:
          pkgParam132.sent();
          pkgParam132.label = 2;
        case 2:
          return (pkgParam100.resolve(pkgValue237), [3, 4]);
        case 3:
          return (
            (pkgValue238 = pkgParam132.sent()),
            pkgParam100.reject(pkgValue238),
            [3, 4]
          );
        case 4:
          return [2];
      }
    });
  });
}
var pkgValue42 = (function () {
    function pkgHelper55(pkgParam16) {
      var pkgValue90 = this;
      this.trackSubmit = this._createMethod("trackSubmit");
      this.trackClick = this._createMethod("trackClick");
      this.trackLink = this._createMethod("trackLink");
      this.pageView = this._createMethod("pageview");
      this.identify = this._createMethod("identify");
      this.reset = this._createMethod("reset");
      this.group = this._createMethod("group");
      this.track = this._createMethod("track");
      this.ready = this._createMethod("ready");
      this.alias = this._createMethod("alias");
      this.debug = this._createChainableMethod("debug");
      this.page = this._createMethod("page");
      this.once = this._createChainableMethod("once");
      this.off = this._createChainableMethod("off");
      this.on = this._createChainableMethod("on");
      this.addSourceMiddleware = this._createMethod("addSourceMiddleware");
      this.setAnonymousId = this._createMethod("setAnonymousId");
      this.addDestinationMiddleware = this._createMethod(
        "addDestinationMiddleware",
      );
      this.screen = this._createMethod("screen");
      this.register = this._createMethod("register");
      this.deregister = this._createMethod("deregister");
      this.user = this._createMethod("user");
      this.VERSION = middlewareL;
      this._preInitBuffer = new pkgValue41();
      this._promise = pkgParam16(this._preInitBuffer);
      this._promise
        .then(function (value) {
          var pkgValue473 = value[0],
            pkgValue474 = value[1];
          pkgValue90.instance = pkgValue473;
          pkgValue90.ctx = pkgValue474;
        })
        .catch(function () {});
    }
    return (
      (pkgHelper55.prototype.then = function () {
        for (
          var pkgValue430, pkgValue431 = [], pkgValue432 = 0;
          pkgValue432 < arguments.length;
          pkgValue432++
        )
          pkgValue431[pkgValue432] = arguments[pkgValue432];
        return (pkgValue430 = this._promise).then.apply(
          pkgValue430,
          pkgValue431,
        );
      }),
      (pkgHelper55.prototype.catch = function () {
        for (
          var pkgValue427, pkgValue428 = [], pkgValue429 = 0;
          pkgValue429 < arguments.length;
          pkgValue429++
        )
          pkgValue428[pkgValue429] = arguments[pkgValue429];
        return (pkgValue427 = this._promise).catch.apply(
          pkgValue427,
          pkgValue428,
        );
      }),
      (pkgHelper55.prototype.finally = function () {
        for (
          var pkgValue424, pkgValue425 = [], pkgValue426 = 0;
          pkgValue426 < arguments.length;
          pkgValue426++
        )
          pkgValue425[pkgValue426] = arguments[pkgValue426];
        return (pkgValue424 = this._promise).finally.apply(
          pkgValue424,
          pkgValue425,
        );
      }),
      (pkgHelper55.prototype._createMethod = function (pkgParam149) {
        var pkgValue299 = this;
        return function () {
          for (
            var pkgValue325, pkgValue326 = [], pkgValue327 = 0;
            pkgValue327 < arguments.length;
            pkgValue327++
          )
            pkgValue326[pkgValue327] = arguments[pkgValue327];
          if (pkgValue299.instance) {
            var pkgValue328 = (pkgValue325 = pkgValue299.instance)[
              pkgParam149
            ].apply(pkgValue325, pkgValue326);
            return Promise.resolve(pkgValue328);
          }
          return new Promise(function (pkgParam388, pkgParam389) {
            pkgValue299._preInitBuffer.add(
              new pkgValue40(
                pkgParam149,
                pkgValue326,
                pkgParam388,
                pkgParam389,
              ),
            );
          });
        };
      }),
      (pkgHelper55.prototype._createChainableMethod = function (pkgParam204) {
        var pkgValue362 = this;
        return function () {
          for (
            var pkgValue396, pkgValue397 = [], pkgValue398 = 0;
            pkgValue398 < arguments.length;
            pkgValue398++
          )
            pkgValue397[pkgValue398] = arguments[pkgValue398];
          return pkgValue362.instance
            ? ((pkgValue396 = pkgValue362.instance)[pkgParam204].apply(
                pkgValue396,
                pkgValue397,
              ),
              pkgValue362)
            : (pkgValue362._preInitBuffer.add(
                new pkgValue40(pkgParam204, pkgValue397),
              ),
              pkgValue362);
        };
      }),
      pkgHelper55
    );
  })(),
  pkgValue43 = function (pkgParam171) {
    var pkgValue333 = false;
    window.addEventListener("pagehide", function () {
      pkgValue333 || ((pkgValue333 = true), pkgParam171(pkgValue333));
    });
    document.addEventListener("visibilitychange", function () {
      if (document.visibilityState == "hidden") {
        if (pkgValue333) return;
        pkgValue333 = true;
      } else pkgValue333 = false;
      pkgParam171(pkgValue333);
    });
  },
  pkgValue44 = (function (pkgParam255) {
    pkgImport5(pkgHelper79, pkgParam255);
    function pkgHelper79(pkgParam285, pkgParam286) {
      var pkgValue447 = pkgParam255.call(this, pkgParam285) || this;
      return (
        (pkgValue447.retryTimeout = pkgParam286),
        (pkgValue447.name = "RateLimitError"),
        pkgValue447
      );
    }
    return pkgHelper79;
  })(Error),
  _t = function (pkgParam342) {
    return pkgImport6(
      {
        "Content-Type": "text/plain",
      },
      typeof pkgParam342 == "function" ? pkgParam342() : pkgParam342,
    );
  };
function pkgHelper21(pkgParam324) {
  return (
    (encodeURI(JSON.stringify(pkgParam324)).split(/%..|./).length - 1) / 1024
  );
}
function pkgHelper22(pkgParam407) {
  return pkgHelper21(pkgParam407) >= 450;
}
function pkgHelper23(pkgParam408) {
  return pkgHelper21(pkgParam408) >= 54;
}
function pkgHelper24(pkgParam272) {
  var pkgValue437 = [],
    pkgValue438 = 0;
  return (
    pkgParam272.forEach(function (item) {
      pkgHelper21(pkgValue437[pkgValue438]) >= 64 && pkgValue438++;
      pkgValue437[pkgValue438]
        ? pkgValue437[pkgValue438].push(item)
        : (pkgValue437[pkgValue438] = [item]);
    }),
    pkgValue437
  );
}
function pkgHelper25(pkgParam9, pkgParam10) {
  var pkgValue75 = [],
    pkgValue76 = false,
    pkgValue77 = pkgParam10?.size ?? 10,
    _pkgContextCancelation = pkgParam10?.timeout ?? 5e3,
    pkgValue78 = 0;
  function pkgHelper56(pkgParam57) {
    if (pkgParam57.length !== 0) {
      var pkgValue144 = pkgParam57[0]?.writeKey,
        pkgValue145 = pkgParam57.map(function (item) {
          var pkgValue471 = item;
          return (pkgValue471.sentAt, pkgImport1(pkgValue471, ["sentAt"]));
        });
      return middlewareU(`https://${pkgParam9}/b`, {
        credentials: pkgParam10?.credentials,
        keepalive: pkgParam10?.keepalive || pkgValue76,
        headers: _t(pkgParam10?.headers),
        method: "post",
        body: JSON.stringify({
          writeKey: pkgValue144,
          batch: pkgValue145,
          sentAt: new Date().toISOString(),
        }),
        priority: pkgParam10?.priority,
      }).then(function (value) {
        if (value.status >= 500)
          throw Error(`Bad response from server: ${value.status}`);
        if (value.status === 429) {
          var pkgValue308 = value.headers?.get("x-ratelimit-reset"),
            pkgValue309 =
              typeof pkgValue308 == "string"
                ? parseInt(pkgValue308) * 1e3
                : _pkgContextCancelation;
          throw new pkgValue44(
            `Rate limit exceeded: ${value.status}`,
            pkgValue309,
          );
        }
      });
    }
  }
  function pkgHelper57(pkgParam83) {
    return (
      pkgParam83 === undefined && (pkgParam83 = 1),
      pkgImport3(this, undefined, undefined, function () {
        var pkgValue224;
        return pkgImport2(this, function (pkgParam107) {
          return pkgValue75.length
            ? ((pkgValue224 = pkgValue75),
              (pkgValue75 = []),
              [
                2,
                pkgHelper56(pkgValue224)?.catch(function (pkgParam142) {
                  pkgContext
                    .system()
                    .log("error", "Error sending batch", pkgParam142);
                  pkgParam83 <= (pkgParam10?.maxRetries ?? 10) &&
                    (pkgParam142.name === "RateLimitError" &&
                      (pkgValue78 = pkgParam142.retryTimeout),
                    pkgValue75.push.apply(pkgValue75, pkgValue224),
                    pkgValue75.map(function (item) {
                      if ("_metadata" in item) {
                        var pkgValue451 = item;
                        pkgValue451._metadata = pkgImport6(
                          pkgImport6({}, pkgValue451._metadata),
                          {
                            retryCount: pkgParam83,
                          },
                        );
                      }
                    }),
                    pkgHelper58(pkgParam83 + 1));
                }),
              ])
            : [2];
        });
      })
    );
  }
  var pkgValue79;
  function pkgHelper58(pkgParam271) {
    pkgParam271 === undefined && (pkgParam271 = 1);
    !pkgValue79 &&
      ((pkgValue79 = setTimeout(function () {
        pkgValue79 = undefined;
        pkgHelper57(pkgParam271).catch(console.error);
      }, pkgValue78 || _pkgContextCancelation)),
      (pkgValue78 = 0));
  }
  pkgValue43(function (pkgParam298) {
    if (((pkgValue76 = pkgParam298), pkgValue76 && pkgValue75.length)) {
      var pkgValue452 = pkgHelper24(pkgValue75).map(pkgHelper56);
      Promise.all(pkgValue452).catch(console.error);
    }
  });
  function pkgHelper59(pkgParam212, pkgParam213) {
    return pkgImport3(this, undefined, undefined, function () {
      var pkgValue420;
      return pkgImport2(this, function (pkgParam299) {
        return (
          pkgValue75.push(pkgParam213),
          (pkgValue420 =
            pkgValue75.length >= pkgValue77 ||
            pkgHelper22(pkgValue75) ||
            (pkgParam10?.keepalive && pkgHelper23(pkgValue75))),
          [2, pkgValue420 || pkgValue76 ? pkgHelper57() : pkgHelper58()]
        );
      });
    });
  }
  return {
    dispatch: pkgHelper59,
  };
}
function pkgHelper26(pkgParam80) {
  function pkgHelper70(pkgParam88, pkgParam89) {
    return middlewareU(pkgParam88, {
      credentials: pkgParam80?.credentials,
      keepalive: pkgParam80?.keepalive,
      headers: _t(pkgParam80?.headers),
      method: "post",
      body: JSON.stringify(pkgParam89),
      priority: pkgParam80?.priority,
    }).then(function (value) {
      if (value.status >= 500)
        throw Error(`Bad response from server: ${value.status}`);
      if (value.status === 429) {
        var pkgValue329 = value.headers?.get("x-ratelimit-reset"),
          pkgValue330 = pkgValue329 ? parseInt(pkgValue329) * 1e3 : 5e3;
        throw new pkgValue44(
          `Rate limit exceeded: ${value.status}`,
          pkgValue330,
        );
      }
    });
  }
  return {
    dispatch: pkgHelper70,
  };
}
function pkgHelper27(
  pkgParam33,
  pkgParam34,
  pkgParam35,
  pkgParam36,
  pkgParam37,
) {
  var pkgValue118 = pkgParam33.user();
  delete pkgParam34.options;
  pkgParam34.writeKey = pkgParam35?.apiKey;
  pkgParam34.userId = pkgParam34.userId || pkgValue118.id();
  pkgParam34.anonymousId = pkgParam34.anonymousId || pkgValue118.anonymousId();
  pkgParam34.sentAt = new Date();
  var _pkgContext = pkgParam33.queue.failedInitializations || [];
  _pkgContext.length > 0 &&
    (pkgParam34._metadata = {
      failedInitializations: _pkgContext,
    });
  pkgParam37 != null &&
    (pkgParam37.attempts > 1 &&
      (pkgParam34._metadata = pkgImport6(pkgImport6({}, pkgParam34._metadata), {
        retryCount: pkgParam37.attempts,
      })),
    pkgParam37.attempts++);
  var pkgValue119 = [],
    pkgValue120 = [];
  for (var _pkgContextCancelation in pkgParam36) {
    var pkgValue121 = pkgParam36[_pkgContextCancelation];
    _pkgContextCancelation === "Segment.io" &&
      pkgValue119.push(_pkgContextCancelation);
    pkgValue121.bundlingStatus === "bundled" &&
      pkgValue119.push(_pkgContextCancelation);
    pkgValue121.bundlingStatus === "unbundled" &&
      pkgValue120.push(_pkgContextCancelation);
  }
  for (
    var pkgValue122 = 0, pkgValue123 = pkgParam35?.unbundledIntegrations || [];
    pkgValue122 < pkgValue123.length;
    pkgValue122++
  ) {
    var pkgValue124 = pkgValue123[pkgValue122];
    pkgValue120.includes(pkgValue124) || pkgValue120.push(pkgValue124);
  }
  var pkgValue125 = pkgParam35?.maybeBundledConfigIds ?? {},
    pkgValue126 = [];
  return (
    pkgValue119.sort().forEach(function (item) {
      (pkgValue125[item] ?? []).forEach(function (_item) {
        pkgValue126.push(_item);
      });
    }),
    pkgParam35?.addBundledMetadata !== false &&
      (pkgParam34._metadata = pkgImport6(pkgImport6({}, pkgParam34._metadata), {
        bundled: pkgValue119.sort(),
        unbundled: pkgValue120.sort(),
        bundledIds: pkgValue126,
      })),
    pkgParam34
  );
}
function pkgHelper28(pkgParam69, pkgParam70) {
  return pkgImport3(this, undefined, undefined, function () {
    var pkgValue192,
      pkgValue193 = this;
    return pkgImport2(this, function (pkgParam90) {
      switch (pkgParam90.label) {
        case 0:
          return (
            (pkgValue192 = []),
            metricHelpersA()
              ? [2, pkgParam70]
              : [
                  4,
                  metricHelpersR(
                    function () {
                      return pkgParam70.length > 0 && !metricHelpersA();
                    },
                    function () {
                      return pkgImport3(
                        pkgValue193,
                        undefined,
                        undefined,
                        function () {
                          var pkgValue384, pkgValue385, pkgValue386;
                          return pkgImport2(this, function (pkgParam248) {
                            switch (pkgParam248.label) {
                              case 0:
                                return (
                                  (pkgValue384 = pkgParam70.pop()),
                                  pkgValue384
                                    ? [
                                        4,
                                        metricHelpersS(pkgValue384, pkgParam69),
                                      ]
                                    : [2]
                                );
                              case 1:
                                return (
                                  (pkgValue385 = pkgParam248.sent()),
                                  (pkgValue386 =
                                    pkgValue385 instanceof pkgContext),
                                  pkgValue386 || pkgValue192.push(pkgValue384),
                                  [2]
                                );
                            }
                          });
                        },
                      );
                    },
                  ),
                ]
          );
        case 1:
          return (
            pkgParam90.sent(),
            pkgValue192.map(function (item) {
              return pkgParam70.pushWithBackoff(item);
            }),
            [2, pkgParam70]
          );
      }
    });
  });
}
function pkgHelper29(pkgParam143, pkgParam144, pkgParam145, pkgParam146) {
  var pkgValue297 = this;
  pkgParam143 ||
    setTimeout(function () {
      return pkgImport3(pkgValue297, undefined, undefined, function () {
        var pkgValue399, pkgValue400;
        return pkgImport2(this, function (pkgParam261) {
          switch (pkgParam261.label) {
            case 0:
              return (
                (pkgValue399 = true),
                [4, pkgHelper28(pkgParam145, pkgParam144)]
              );
            case 1:
              return (
                (pkgValue400 = pkgParam261.sent()),
                (pkgValue399 = false),
                pkgParam144.todo > 0 &&
                  pkgParam146(
                    pkgValue399,
                    pkgValue400,
                    pkgParam145,
                    pkgParam146,
                  ),
                [2]
              );
          }
        });
      });
    }, Math.random() * 5e3);
}
function pkgHelper30(pkgParam228, pkgParam229) {
  var pkgValue401 = pkgParam228.user();
  return (
    (pkgParam229.previousId =
      pkgParam229.previousId ??
      pkgParam229.from ??
      pkgValue401.id() ??
      pkgValue401.anonymousId()),
    (pkgParam229.userId = pkgParam229.userId ?? pkgParam229.to),
    delete pkgParam229.from,
    delete pkgParam229.to,
    pkgParam229
  );
}
var pkgValue47 = function (pkgParam397) {
  return pkgParam397.name === "Segment.io";
};
function pkgSegmentio(pkgParam13, pkgParam14, pkgParam15) {
  window.addEventListener("pagehide", function () {
    pkgValue83.push.apply(pkgValue83, Array.from(_pkgContext));
    _pkgContext.clear();
  });
  var pkgValue82 = pkgParam14?.apiKey ?? "",
    pkgValue83 = pkgParam13.options.disableClientPersistence
      ? new metricHelpersU(pkgParam13.queue.queue.maxAttempts, [])
      : new metricHelpersI(
          pkgParam13.queue.queue.maxAttempts,
          `${pkgValue82}:dest-Segment.io`,
        ),
    _pkgContext = new Set(),
    pkgValue85 = pkgParam14?.apiHost ?? middlewareS,
    _pkgContextCancelation = pkgParam14?.protocol ?? "https",
    pkgValue86 = `${_pkgContextCancelation}://${pkgValue85}`,
    pkgValue87 = pkgParam14?.deliveryStrategy,
    pkgValue88 =
      pkgValue87 &&
      "strategy" in pkgValue87 &&
      pkgValue87.strategy === "batching"
        ? pkgHelper25(pkgValue85, pkgValue87.config)
        : pkgHelper26(pkgValue87?.config);
  function pkgHelper60(pkgParam55) {
    return pkgImport3(this, undefined, undefined, function () {
      var pkgValue149, pkgValue150;
      return pkgImport2(this, function (pkgParam63) {
        return metricHelpersA()
          ? (pkgValue83.push(pkgParam55),
            pkgHelper29(false, pkgValue83, pkgValue89, pkgHelper29),
            [2, pkgParam55])
          : (_pkgContext.add(pkgParam55),
            (pkgValue149 = pkgParam55.event.type.charAt(0)),
            (pkgValue150 = middlewareR(pkgParam55.event).json()),
            pkgParam55.event.type === "track" && delete pkgValue150.traits,
            pkgParam55.event.type === "alias" &&
              (pkgValue150 = pkgHelper30(pkgParam13, pkgValue150)),
            pkgValue83.getAttempts(pkgParam55) >= pkgValue83.maxAttempts
              ? (_pkgContext.delete(pkgParam55), [2, pkgParam55])
              : [
                  2,
                  pkgValue88
                    .dispatch(
                      `${pkgValue86}/${pkgValue149}`,
                      pkgHelper27(
                        pkgParam13,
                        pkgValue150,
                        pkgParam14,
                        pkgParam15,
                        pkgParam55,
                      ),
                    )
                    .then(function () {
                      return pkgParam55;
                    })
                    .catch(function (error) {
                      if (
                        (pkgParam55.log("error", "Error sending event", error),
                        error.name === "RateLimitError")
                      ) {
                        var pkgValue381 = error.retryTimeout;
                        pkgValue83.pushWithBackoff(pkgParam55, pkgValue381);
                      } else pkgValue83.pushWithBackoff(pkgParam55);
                      return (
                        pkgHelper29(false, pkgValue83, pkgValue89, pkgHelper29),
                        pkgParam55
                      );
                    })
                    .finally(function () {
                      _pkgContext.delete(pkgParam55);
                    }),
                ]);
      });
    });
  }
  var pkgValue89 = {
    metadata: {
      writeKey: pkgValue82,
      apiHost: pkgValue85,
      protocol: _pkgContextCancelation,
    },
    name: "Segment.io",
    type: "destination",
    version: "0.1.0",
    isLoaded: function () {
      return true;
    },
    load: function () {
      return Promise.resolve();
    },
    track: pkgHelper60,
    identify: pkgHelper60,
    page: pkgHelper60,
    alias: pkgHelper60,
    group: pkgHelper60,
    screen: pkgHelper60,
  };
  return (
    pkgValue83.todo && pkgHelper29(false, pkgValue83, pkgValue89, pkgHelper29),
    pkgValue89
  );
}
var pkgValue49 = middlewareD()?.analytics;
function pkgHelper31(pkgParam266, pkgParam267, pkgParam268) {
  pkgParam267 === undefined && (pkgParam267 = false);
  pkgParam268 === undefined && (pkgParam268 = false);
  var pkgValue433 = pkgParam267 ? 10 : 1;
  return new pkgValue21(
    pkgParam268
      ? new metricHelpersU(pkgValue433, [])
      : new metricHelpersI(pkgValue433, pkgParam266),
  );
}
var pkgValue50 = (function () {
  function pkgHelper71(pkgParam156, pkgParam157) {
    this.timeout = 300;
    this._getSegmentPluginMetadata = function () {
      return pkgParam157.plugins.find(pkgValue47)?.metadata;
    };
    this.writeKey = pkgParam156.writeKey;
    this.cdnSettings = pkgParam156.cdnSettings ?? {
      integrations: {
        "Segment.io": {
          apiKey: "",
        },
      },
    };
    this.cdnURL = pkgParam156.cdnURL;
  }
  return (
    Object.defineProperty(pkgHelper71.prototype, "apiHost", {
      get: function () {
        return this._getSegmentPluginMetadata?.call(this)?.apiHost;
      },
      enumerable: false,
      configurable: true,
    }),
    pkgHelper71
  );
})();
function pkgHelper32() {
  console.warn(
    "This is being deprecated and will be not be available in future releases of Analytics JS",
  );
}
var pkgAnalytics = (function (pkgParam1) {
    pkgImport5(pkgHelper50, pkgParam1);
    function pkgHelper50(
      pkgParam38,
      pkgParam39,
      pkgParam40,
      pkgParam41,
      pkgParam42,
    ) {
      var _pkgContext = this;
      _pkgContext = pkgParam1.call(this) || this;
      _pkgContext._debug = false;
      _pkgContext.initialized = false;
      _pkgContext.user = function () {
        return _pkgContext._user;
      };
      _pkgContext.init = _pkgContext.initialize.bind(_pkgContext);
      _pkgContext.log = pkgHelper32;
      _pkgContext.addIntegrationMiddleware = pkgHelper32;
      _pkgContext.listeners = pkgHelper32;
      _pkgContext.addEventListener = pkgHelper32;
      _pkgContext.removeAllListeners = pkgHelper32;
      _pkgContext.removeListener = pkgHelper32;
      _pkgContext.removeEventListener = pkgHelper32;
      _pkgContext.hasListeners = pkgHelper32;
      _pkgContext.add = pkgHelper32;
      _pkgContext.addIntegration = pkgHelper32;
      var pkgValue127 = pkgParam39?.cookie,
        pkgValue128 = pkgParam39?.disableClientPersistence ?? false;
      _pkgContext.queue =
        pkgParam40 ??
        pkgHelper31(
          `${pkgParam38.writeKey}:event-queue`,
          pkgParam39?.retryQueue,
          pkgValue128,
        );
      _pkgContext.settings = new pkgValue50(pkgParam38, _pkgContext.queue);
      var _pkgContextCancelation = pkgParam39?.storage;
      return (
        (_pkgContext._universalStorage = _pkgContext.createStore(
          pkgValue128,
          _pkgContextCancelation,
          pkgValue127,
        )),
        (_pkgContext._user =
          pkgParam41 ??
          new pkgUser(
            pkgImport6(
              {
                persist: !pkgValue128,
                storage: pkgParam39?.storage,
              },
              pkgParam39?.user,
            ),
            pkgValue127,
          ).load()),
        (_pkgContext._group =
          pkgParam42 ??
          new pkgGroup(
            pkgImport6(
              {
                persist: !pkgValue128,
                storage: pkgParam39?.storage,
              },
              pkgParam39?.group,
            ),
            pkgValue127,
          ).load()),
        (_pkgContext.eventFactory = new pkgEventFactory(_pkgContext._user)),
        (_pkgContext.integrations = pkgParam39?.integrations ?? {}),
        (_pkgContext.options = pkgParam39 ?? {}),
        pkgHelper11(_pkgContext),
        _pkgContext
      );
    }
    return (
      (pkgHelper50.prototype.createStore = function (
        pkgParam240,
        pkgParam241,
        pkgParam242,
      ) {
        return pkgParam240
          ? new pkgUniversalStorage([new pkgValue27()])
          : pkgParam241 && $e(pkgParam241)
            ? new pkgUniversalStorage(
                pkgHelper18(pkgHelper19(pkgParam241.stores, pkgParam242)),
              )
            : new pkgUniversalStorage(
                pkgHelper18([
                  pkgValue28.LocalStorage,
                  {
                    name: pkgValue28.Cookie,
                    settings: pkgParam242,
                  },
                  pkgValue28.Memory,
                ]),
              );
      }),
      Object.defineProperty(pkgHelper50.prototype, "storage", {
        get: function () {
          return this._universalStorage;
        },
        enumerable: false,
        configurable: true,
      }),
      (pkgHelper50.prototype.track = function () {
        var pkgValue225 = [...arguments];
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue261,
            pkgValue262,
            pkgValue263,
            pkgValue264,
            pkgValue265,
            _pkgContext,
            pkgValue266,
            pkgValue267 = this;
          return pkgImport2(this, function (pkgParam155) {
            return (
              (pkgValue261 = pkgValue38(pkgValue225)),
              (pkgValue262 = pkgResolveArguments.apply(undefined, pkgValue225)),
              (pkgValue263 = pkgValue262[0]),
              (pkgValue264 = pkgValue262[1]),
              (pkgValue265 = pkgValue262[2]),
              (_pkgContext = pkgValue262[3]),
              (pkgValue266 = this.eventFactory.track(
                pkgValue263,
                pkgValue264,
                pkgValue265,
                this.integrations,
                pkgValue261,
              )),
              [
                2,
                this._dispatch(pkgValue266, _pkgContext).then(function (value) {
                  return (
                    pkgValue267.emit(
                      "track",
                      pkgValue263,
                      value.event.properties,
                      value.event.options,
                    ),
                    value
                  );
                }),
              ]
            );
          });
        });
      }),
      (pkgHelper50.prototype.page = function () {
        var pkgValue217 = [...arguments];
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue247,
            pkgValue248,
            pkgValue249,
            pkgValue250,
            pkgValue251,
            _pkgContext,
            pkgValue252,
            pkgValue253,
            _pkgContextCancelation = this;
          return pkgImport2(this, function (pkgParam151) {
            return (
              (pkgValue247 = pkgValue38(pkgValue217)),
              (pkgValue248 = pkgResolvePageArguments.apply(
                undefined,
                pkgValue217,
              )),
              (pkgValue249 = pkgValue248[0]),
              (pkgValue250 = pkgValue248[1]),
              (pkgValue251 = pkgValue248[2]),
              (_pkgContext = pkgValue248[3]),
              (pkgValue252 = pkgValue248[4]),
              (pkgValue253 = this.eventFactory.page(
                pkgValue249,
                pkgValue250,
                pkgValue251,
                _pkgContext,
                this.integrations,
                pkgValue247,
              )),
              [
                2,
                this._dispatch(pkgValue253, pkgValue252).then(function (value) {
                  return (
                    _pkgContextCancelation.emit(
                      "page",
                      pkgValue249,
                      pkgValue250,
                      value.event.properties,
                      value.event.options,
                    ),
                    value
                  );
                }),
              ]
            );
          });
        });
      }),
      (pkgHelper50.prototype.identify = function () {
        var pkgValue181 = [...arguments];
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue199,
            pkgValue200,
            pkgValue201,
            pkgValue202,
            pkgValue203,
            _pkgContext,
            pkgValue204,
            pkgValue205 = this;
          return pkgImport2(this, function (pkgParam106) {
            return (
              (pkgValue199 = pkgValue38(pkgValue181)),
              (pkgValue200 = pkgResolveUserArguments(this._user).apply(
                undefined,
                pkgValue181,
              )),
              (pkgValue201 = pkgValue200[0]),
              (pkgValue202 = pkgValue200[1]),
              (pkgValue203 = pkgValue200[2]),
              (_pkgContext = pkgValue200[3]),
              this._user.identify(pkgValue201, pkgValue202),
              (pkgValue204 = this.eventFactory.identify(
                this._user.id(),
                this._user.traits(),
                pkgValue203,
                this.integrations,
                pkgValue199,
              )),
              [
                2,
                this._dispatch(pkgValue204, _pkgContext).then(function (value) {
                  return (
                    pkgValue205.emit(
                      "identify",
                      value.event.userId,
                      value.event.traits,
                      value.event.options,
                    ),
                    value
                  );
                }),
              ]
            );
          });
        });
      }),
      (pkgHelper50.prototype.group = function () {
        for (
          var pkgValue182 = this, pkgValue183 = [], pkgValue184 = 0;
          pkgValue184 < arguments.length;
          pkgValue184++
        )
          pkgValue183[pkgValue184] = arguments[pkgValue184];
        var pkgValue185 = pkgValue38(pkgValue183);
        if (pkgValue183.length === 0) return this._group;
        var pkgValue186 = pkgResolveUserArguments(this._group).apply(
            undefined,
            pkgValue183,
          ),
          pkgValue187 = pkgValue186[0],
          pkgValue188 = pkgValue186[1],
          _pkgContext = pkgValue186[2],
          pkgValue189 = pkgValue186[3];
        this._group.identify(pkgValue187, pkgValue188);
        var pkgValue190 = this._group.id(),
          _pkgContextCancelation = this._group.traits(),
          pkgValue191 = this.eventFactory.group(
            pkgValue190,
            _pkgContextCancelation,
            _pkgContext,
            this.integrations,
            pkgValue185,
          );
        return this._dispatch(pkgValue191, pkgValue189).then(function (value) {
          return (
            pkgValue182.emit(
              "group",
              value.event.groupId,
              value.event.traits,
              value.event.options,
            ),
            value
          );
        });
      }),
      (pkgHelper50.prototype.alias = function () {
        var pkgValue226 = [...arguments];
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue275,
            pkgValue276,
            pkgValue277,
            pkgValue278,
            pkgValue279,
            _pkgContext,
            pkgValue280,
            pkgValue281 = this;
          return pkgImport2(this, function (pkgParam168) {
            return (
              (pkgValue275 = pkgValue38(pkgValue226)),
              (pkgValue276 = pkgResolveAliasArguments.apply(
                undefined,
                pkgValue226,
              )),
              (pkgValue277 = pkgValue276[0]),
              (pkgValue278 = pkgValue276[1]),
              (pkgValue279 = pkgValue276[2]),
              (_pkgContext = pkgValue276[3]),
              (pkgValue280 = this.eventFactory.alias(
                pkgValue277,
                pkgValue278,
                pkgValue279,
                this.integrations,
                pkgValue275,
              )),
              [
                2,
                this._dispatch(pkgValue280, _pkgContext).then(function (value) {
                  return (
                    pkgValue281.emit(
                      "alias",
                      pkgValue277,
                      pkgValue278,
                      value.event.options,
                    ),
                    value
                  );
                }),
              ]
            );
          });
        });
      }),
      (pkgHelper50.prototype.screen = function () {
        var pkgValue216 = [...arguments];
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue239,
            pkgValue240,
            pkgValue241,
            pkgValue242,
            pkgValue243,
            _pkgContext,
            pkgValue244,
            pkgValue245,
            _pkgContextCancelation = this;
          return pkgImport2(this, function (pkgParam150) {
            return (
              (pkgValue239 = pkgValue38(pkgValue216)),
              (pkgValue240 = pkgResolvePageArguments.apply(
                undefined,
                pkgValue216,
              )),
              (pkgValue241 = pkgValue240[0]),
              (pkgValue242 = pkgValue240[1]),
              (pkgValue243 = pkgValue240[2]),
              (_pkgContext = pkgValue240[3]),
              (pkgValue244 = pkgValue240[4]),
              (pkgValue245 = this.eventFactory.screen(
                pkgValue241,
                pkgValue242,
                pkgValue243,
                _pkgContext,
                this.integrations,
                pkgValue239,
              )),
              [
                2,
                this._dispatch(pkgValue245, pkgValue244).then(function (value) {
                  return (
                    _pkgContextCancelation.emit(
                      "screen",
                      pkgValue241,
                      pkgValue242,
                      value.event.properties,
                      value.event.options,
                    ),
                    value
                  );
                }),
              ]
            );
          });
        });
      }),
      (pkgHelper50.prototype.trackClick = function () {
        var pkgValue254 = [...arguments];
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue311, pkgValue312;
          return pkgImport2(this, function (pkgParam198) {
            switch (pkgParam198.label) {
              case 0:
                return [
                  4,
                  PreloadHelper(
                    () => import("./segment-auto-track"),
                    __vite__mapDeps([0, 1, 2, 3, 4]),
                    import.meta.url,
                  ),
                ];
              case 1:
                return (
                  (pkgValue311 = pkgParam198.sent()),
                  [
                    2,
                    (pkgValue312 = pkgValue311.link).call.apply(
                      pkgValue312,
                      pkgImport4([this], pkgValue254, false),
                    ),
                  ]
                );
            }
          });
        });
      }),
      (pkgHelper50.prototype.trackLink = function () {
        var pkgValue255 = [...arguments];
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue313, pkgValue314;
          return pkgImport2(this, function (pkgParam199) {
            switch (pkgParam199.label) {
              case 0:
                return [
                  4,
                  PreloadHelper(
                    () => import("./segment-auto-track"),
                    __vite__mapDeps([0, 1, 2, 3, 4]),
                    import.meta.url,
                  ),
                ];
              case 1:
                return (
                  (pkgValue313 = pkgParam199.sent()),
                  [
                    2,
                    (pkgValue314 = pkgValue313.link).call.apply(
                      pkgValue314,
                      pkgImport4([this], pkgValue255, false),
                    ),
                  ]
                );
            }
          });
        });
      }),
      (pkgHelper50.prototype.trackSubmit = function () {
        var pkgValue256 = [...arguments];
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue315, pkgValue316;
          return pkgImport2(this, function (pkgParam200) {
            switch (pkgParam200.label) {
              case 0:
                return [
                  4,
                  PreloadHelper(
                    () => import("./segment-auto-track"),
                    __vite__mapDeps([0, 1, 2, 3, 4]),
                    import.meta.url,
                  ),
                ];
              case 1:
                return (
                  (pkgValue315 = pkgParam200.sent()),
                  [
                    2,
                    (pkgValue316 = pkgValue315.form).call.apply(
                      pkgValue316,
                      pkgImport4([this], pkgValue256, false),
                    ),
                  ]
                );
            }
          });
        });
      }),
      (pkgHelper50.prototype.trackForm = function () {
        var pkgValue257 = [...arguments];
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue317, pkgValue318;
          return pkgImport2(this, function (pkgParam201) {
            switch (pkgParam201.label) {
              case 0:
                return [
                  4,
                  PreloadHelper(
                    () => import("./segment-auto-track"),
                    __vite__mapDeps([0, 1, 2, 3, 4]),
                    import.meta.url,
                  ),
                ];
              case 1:
                return (
                  (pkgValue317 = pkgParam201.sent()),
                  [
                    2,
                    (pkgValue318 = pkgValue317.form).call.apply(
                      pkgValue318,
                      pkgImport4([this], pkgValue257, false),
                    ),
                  ]
                );
            }
          });
        });
      }),
      (pkgHelper50.prototype.register = function () {
        var pkgValue286 = [...arguments];
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue352,
            pkgValue353,
            pkgValue354 = this;
          return pkgImport2(this, function (pkgParam224) {
            switch (pkgParam224.label) {
              case 0:
                return (
                  (pkgValue352 = pkgContext.system()),
                  (pkgValue353 = pkgValue286.map(function (item) {
                    return pkgValue354.queue.register(
                      pkgValue352,
                      item,
                      pkgValue354,
                    );
                  })),
                  [4, Promise.all(pkgValue353)]
                );
              case 1:
                return (pkgParam224.sent(), [2, pkgValue352]);
            }
          });
        });
      }),
      (pkgHelper50.prototype.deregister = function () {
        var pkgValue212 = [...arguments];
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue234,
            pkgValue235,
            pkgValue236 = this;
          return pkgImport2(this, function (pkgParam133) {
            switch (pkgParam133.label) {
              case 0:
                return (
                  (pkgValue234 = pkgContext.system()),
                  (pkgValue235 = pkgValue212.map(function (item) {
                    var pkgValue402 = pkgValue236.queue.plugins.find(
                      function (_item) {
                        return _item.name === item;
                      },
                    );
                    if (pkgValue402)
                      return pkgValue236.queue.deregister(
                        pkgValue234,
                        pkgValue402,
                        pkgValue236,
                      );
                    pkgValue234.log("warn", `plugin ${item} not found`);
                  })),
                  [4, Promise.all(pkgValue235)]
                );
              case 1:
                return (pkgParam133.sent(), [2, pkgValue234]);
            }
          });
        });
      }),
      (pkgHelper50.prototype.debug = function (pkgParam270) {
        return (
          pkgParam270 === false &&
            localStorage.getItem("debug") &&
            localStorage.removeItem("debug"),
          (this._debug = pkgParam270),
          this
        );
      }),
      (pkgHelper50.prototype.reset = function () {
        this._user.reset();
        this._group.reset();
        this.emit("reset");
      }),
      (pkgHelper50.prototype.timeout = function (pkgParam406) {
        this.settings.timeout = pkgParam406;
      }),
      (pkgHelper50.prototype._dispatch = function (pkgParam122, pkgParam123) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue300;
          return pkgImport2(this, function (pkgParam178) {
            return (
              (pkgValue300 = new pkgContext(pkgParam122)),
              pkgValue300.stats.increment("analytics_js.invoke", 1, [
                pkgParam122.type,
              ]),
              metricHelpersA() && !this.options.retryQueue
                ? [2, pkgValue300]
                : [
                    2,
                    pkgHelper7(pkgValue300, this.queue, this, {
                      callback: pkgParam123,
                      debug: this._debug,
                      timeout: this.settings.timeout,
                    }),
                  ]
            );
          });
        });
      }),
      (pkgHelper50.prototype.addSourceMiddleware = function (pkgParam56) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue151 = this;
          return pkgImport2(this, function (pkgParam64) {
            switch (pkgParam64.label) {
              case 0:
                return [
                  4,
                  this.queue.criticalTasks.run(function () {
                    return pkgImport3(
                      pkgValue151,
                      undefined,
                      undefined,
                      function () {
                        var pkgValue213, pkgValue214, pkgValue215;
                        return pkgImport2(this, function (pkgParam104) {
                          switch (pkgParam104.label) {
                            case 0:
                              return [
                                4,
                                PreloadHelper(
                                  () => import("./segment-middleware-entry"),
                                  __vite__mapDeps([5, 6, 1, 3, 4, 2]),
                                  import.meta.url,
                                ),
                              ];
                            case 1:
                              return (
                                (pkgValue213 =
                                  pkgParam104.sent().sourceMiddlewarePlugin),
                                (pkgValue214 = {}),
                                this.queue.plugins.forEach(function (item) {
                                  if (item.type === "destination")
                                    return (pkgValue214[item.name] = true);
                                }),
                                (pkgValue215 = pkgValue213(
                                  pkgParam56,
                                  pkgValue214,
                                )),
                                [4, this.register(pkgValue215)]
                              );
                            case 2:
                              return (pkgParam104.sent(), [2]);
                          }
                        });
                      },
                    );
                  }),
                ];
              case 1:
                return (pkgParam64.sent(), [2, this]);
            }
          });
        });
      }),
      (pkgHelper50.prototype.addDestinationMiddleware = function (pkgParam189) {
        var pkgValue351 = [...arguments].slice(1);
        return (
          this.queue.plugins
            .filter(pkgIsDestinationPluginWithAddMiddleware)
            .forEach(function (item) {
              (pkgParam189 === "*" ||
                item.name.toLowerCase() === pkgParam189.toLowerCase()) &&
                item.addMiddleware.apply(item, pkgValue351);
            }),
          Promise.resolve(this)
        );
      }),
      (pkgHelper50.prototype.setAnonymousId = function (pkgParam393) {
        return this._user.anonymousId(pkgParam393);
      }),
      (pkgHelper50.prototype.queryString = function (pkgParam120) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue292;
          return pkgImport2(this, function (pkgParam165) {
            switch (pkgParam165.label) {
              case 0:
                return this.options.useQueryString === false
                  ? [2, []]
                  : [
                      4,
                      PreloadHelper(
                        () => import("./segment-query-string"),
                        __vite__mapDeps([7, 1, 2, 3, 4, 8]),
                        import.meta.url,
                      ),
                    ];
              case 1:
                return (
                  (pkgValue292 = pkgParam165.sent().queryString),
                  [2, pkgValue292(this, pkgParam120)]
                );
            }
          });
        });
      }),
      (pkgHelper50.prototype.use = function (pkgParam416) {
        return (pkgParam416(this), this);
      }),
      (pkgHelper50.prototype.ready = function (pkgParam136) {
        return (
          pkgParam136 === undefined &&
            (pkgParam136 = function (pkgParam424) {
              return pkgParam424;
            }),
          pkgImport3(this, undefined, undefined, function () {
            return pkgImport2(this, function (pkgParam234) {
              return [
                2,
                Promise.all(
                  this.queue.plugins.map(function (item) {
                    return item.ready ? item.ready() : Promise.resolve();
                  }),
                ).then(function (value) {
                  return (pkgParam136(value), value);
                }),
              ];
            });
          })
        );
      }),
      (pkgHelper50.prototype.noConflict = function () {
        return (
          console.warn(
            "This is being deprecated and will be not be available in future releases of Analytics JS",
          ),
          loadScriptS(pkgValue49 ?? this),
          this
        );
      }),
      (pkgHelper50.prototype.normalize = function (pkgParam357) {
        return (
          console.warn(
            "This is being deprecated and will be not be available in future releases of Analytics JS",
          ),
          this.eventFactory.normalize(pkgParam357)
        );
      }),
      Object.defineProperty(pkgHelper50.prototype, "failedInitializations", {
        get: function () {
          return (
            console.warn(
              "This is being deprecated and will be not be available in future releases of Analytics JS",
            ),
            this.queue.failedInitializations
          );
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(pkgHelper50.prototype, "VERSION", {
        get: function () {
          return middlewareL;
        },
        enumerable: false,
        configurable: true,
      }),
      (pkgHelper50.prototype.initialize = function (pkgParam246, pkgParam247) {
        return pkgImport3(this, undefined, undefined, function () {
          return pkgImport2(this, function (pkgParam376) {
            return (
              console.warn(
                "This is being deprecated and will be not be available in future releases of Analytics JS",
              ),
              [2, Promise.resolve(this)]
            );
          });
        });
      }),
      (pkgHelper50.prototype.pageview = function (pkgParam207) {
        return pkgImport3(this, undefined, undefined, function () {
          return pkgImport2(this, function (pkgParam262) {
            switch (pkgParam262.label) {
              case 0:
                return (
                  console.warn(
                    "This is being deprecated and will be not be available in future releases of Analytics JS",
                  ),
                  [
                    4,
                    this.page({
                      path: pkgParam207,
                    }),
                  ]
                );
              case 1:
                return (pkgParam262.sent(), [2, this]);
            }
          });
        });
      }),
      Object.defineProperty(pkgHelper50.prototype, "plugins", {
        get: function () {
          return (
            console.warn(
              "This is being deprecated and will be not be available in future releases of Analytics JS",
            ),
            this._plugins ?? {}
          );
        },
        enumerable: false,
        configurable: true,
      }),
      Object.defineProperty(pkgHelper50.prototype, "Integrations", {
        get: function () {
          return (
            console.warn(
              "This is being deprecated and will be not be available in future releases of Analytics JS",
            ),
            this.queue.plugins
              .filter(function (item) {
                return item.type === "destination";
              })
              .reduce(function (accumulator, current) {
                var pkgValue370 = `${current.name.toLowerCase().replace(".", "").split(" ").join("-")}Integration`,
                  pkgValue371 = window[pkgValue370];
                if (!pkgValue371) return accumulator;
                var pkgValue372 = pkgValue371.Integration;
                return pkgValue372
                  ? ((accumulator[current.name] = pkgValue372), accumulator)
                  : ((accumulator[current.name] = pkgValue371), accumulator);
              }, {})
          );
        },
        enumerable: false,
        configurable: true,
      }),
      (pkgHelper50.prototype.push = function (pkgParam365) {
        var pkgValue465 = this,
          pkgValue466 = pkgParam365.shift();
        (pkgValue466 && !pkgValue465[pkgValue466]) ||
          pkgValue465[pkgValue466].apply(this, pkgParam365);
      }),
      pkgHelper50
    );
  })(metricHelpersD),
  pkgValue51 = (function (pkgParam243) {
    pkgImport5(pkgHelper77, pkgParam243);
    function pkgHelper77() {
      var pkgValue436 =
        pkgParam243.call(
          this,
          {
            writeKey: "",
          },
          {
            disableClientPersistence: true,
          },
        ) || this;
      return ((pkgValue436.initialized = true), pkgValue436);
    }
    return pkgHelper77;
  })(pkgAnalytics);
function pkgHelper33() {
  return {};
}
function pkgHelper34(pkgParam166) {
  return pkgImport3(this, undefined, undefined, function () {
    var pkgValue380;
    return pkgImport2(this, function (pkgParam237) {
      return (
        (pkgValue380 = navigator.userAgentData),
        pkgValue380
          ? pkgParam166
            ? [
                2,
                pkgValue380
                  .getHighEntropyValues(pkgParam166)
                  .catch(function () {
                    return pkgValue380.toJSON();
                  }),
              ]
            : [2, pkgValue380.toJSON()]
          : [2, undefined]
      );
    });
  });
}
var $;
function pkgHelper35() {
  if ($) return $;
  var pkgValue419 = pkgHelper16(window.location.href);
  return (
    ($ = {
      expires: 31536e6,
      secure: false,
      path: "/",
    }),
    pkgValue419 && ($.domain = pkgValue419),
    $
  );
}
function pkgHelper36(pkgParam153) {
  var pkgValue301 = {
    btid: "dataxu",
    urid: "millennial-media",
  };
  pkgParam153.startsWith("?") && (pkgParam153 = pkgParam153.substring(1));
  pkgParam153 = pkgParam153.replace(/\?/g, "&");
  for (
    var pkgValue302 = pkgParam153.split("&"),
      pkgValue303 = 0,
      pkgValue304 = pkgValue302;
    pkgValue303 < pkgValue304.length;
    pkgValue303++
  ) {
    var pkgValue305 = pkgValue304[pkgValue303].split("="),
      pkgValue306 = pkgValue305[0],
      _pkgContext = pkgValue305[1];
    if (pkgValue301[pkgValue306])
      return {
        id: _pkgContext,
        type: pkgValue301[pkgValue306],
      };
  }
}
function pkgHelper37(pkgParam131) {
  return (
    pkgParam131.startsWith("?") && (pkgParam131 = pkgParam131.substring(1)),
    (pkgParam131 = pkgParam131.replace(/\?/g, "&")),
    pkgParam131.split("&").reduce(function (accumulator, current) {
      var pkgValue390 = current.split("="),
        pkgValue391 = pkgValue390[0],
        pkgValue392 = pkgValue390[1],
        pkgValue393 = pkgValue392 === undefined ? "" : pkgValue392;
      if (pkgValue391.includes("utm_") && pkgValue391.length > 4) {
        var pkgValue394 = pkgValue391.slice(4);
        pkgValue394 === "campaign" && (pkgValue394 = "name");
        accumulator[pkgValue394] = gracefulDecodeURIComponent(pkgValue393);
      }
      return accumulator;
    }, {})
  );
}
function pkgHelper38() {
  var pkgValue464 = pkgValue23.get("_ga");
  if (pkgValue464 && pkgValue464.startsWith("amp")) return pkgValue464;
}
function pkgHelper39(pkgParam214, pkgParam215, pkgParam216) {
  var pkgValue387 = new pkgUniversalStorage(
      pkgParam216 ? [] : [new pkgValue25(pkgHelper35())],
    ),
    pkgValue388 = pkgValue387.get("s:context.referrer"),
    pkgValue389 = pkgHelper36(pkgParam214) ?? pkgValue388;
  pkgValue389 &&
    (pkgParam215 &&
      (pkgParam215.referrer = pkgImport6(
        pkgImport6({}, pkgParam215.referrer),
        pkgValue389,
      )),
    pkgValue387.set("s:context.referrer", pkgValue389));
}
var pkgValue52 = function (pkgParam172) {
    try {
      var pkgValue334 = new URLSearchParams();
      return (
        Object.entries(pkgParam172).forEach(function (item) {
          var pkgValue439 = item[0],
            pkgValue440 = item[1];
          Array.isArray(pkgValue440)
            ? pkgValue440.forEach(function (_item) {
                return pkgValue334.append(pkgValue439, _item);
              })
            : pkgValue334.append(pkgValue439, pkgValue440);
        }),
        pkgValue334.toString()
      );
    } catch {
      return "";
    }
  },
  pkgValue53 = new ((function () {
    function pkgHelper61() {
      var pkgValue91 = this;
      this.name = "Page Enrichment";
      this.type = "before";
      this.version = "0.1.0";
      this.isLoaded = function () {
        return true;
      };
      this.load = function (pkgParam101, pkgParam102) {
        return pkgImport3(pkgValue91, undefined, undefined, function () {
          var pkgValue232;
          return pkgImport2(this, function (pkgParam130) {
            switch (pkgParam130.label) {
              case 0:
                this.instance = pkgParam102;
                pkgParam130.label = 1;
              case 1:
                return (
                  pkgParam130.trys.push([1, 3, , 4]),
                  (pkgValue232 = this),
                  [
                    4,
                    pkgHelper34(
                      this.instance.options.highEntropyValuesClientHints,
                    ),
                  ]
                );
              case 2:
                return (
                  (pkgValue232.userAgentData = pkgParam130.sent()),
                  [3, 4]
                );
              case 3:
                return (pkgParam130.sent(), [3, 4]);
              case 4:
                return [2, Promise.resolve()];
            }
          });
        });
      };
      this.enrich = function (pkgParam62) {
        var pkgValue152 = pkgParam62.event.context,
          pkgValue153 = pkgValue152.page.search || "",
          pkgValue154 =
            typeof pkgValue153 == "object"
              ? pkgValue52(pkgValue153)
              : pkgValue153;
        pkgValue152.userAgent = navigator.userAgent;
        pkgValue152.userAgentData = pkgValue91.userAgentData;
        var pkgValue155 = navigator.userLanguage || navigator.language;
        pkgValue152.locale === undefined &&
          pkgValue155 !== undefined &&
          (pkgValue152.locale = pkgValue155);
        pkgValue152.library ??= {
          name: "analytics.js",
          version: `${middlewareC() === "web" ? "next" : "npm:next"}-1.82.0`,
        };
        pkgValue154 &&
          !pkgValue152.campaign &&
          (pkgValue152.campaign = pkgHelper37(pkgValue154));
        var pkgValue156 = pkgHelper38();
        pkgValue156 &&
          (pkgValue152.amp = {
            id: pkgValue156,
          });
        pkgHelper39(
          pkgValue154,
          pkgValue152,
          pkgValue91.instance.options.disableClientPersistence ?? false,
        );
        try {
          pkgValue152.timezone =
            Intl.DateTimeFormat().resolvedOptions().timeZone;
        } catch {}
        return pkgParam62;
      };
      this.track = this.enrich;
      this.identify = this.enrich;
      this.page = this.enrich;
      this.group = this.enrich;
      this.alias = this.enrich;
      this.screen = this.enrich;
    }
    return pkgHelper61;
  })())(),
  pkgValue54 = (function () {
    function pkgHelper52(pkgParam81, pkgParam82) {
      this.version = "1.0.0";
      this.alternativeNames = [];
      this.loadPromise = metricHelpersF();
      this.middleware = [];
      this.alias = this._createMethod("alias");
      this.group = this._createMethod("group");
      this.identify = this._createMethod("identify");
      this.page = this._createMethod("page");
      this.screen = this._createMethod("screen");
      this.track = this._createMethod("track");
      this.action = pkgParam82;
      this.name = pkgParam81;
      this.type = pkgParam82.type;
      this.alternativeNames.push(pkgParam82.name);
    }
    return (
      (pkgHelper52.prototype.addMiddleware = function () {
        for (
          var pkgValue408, pkgValue409 = [], pkgValue410 = 0;
          pkgValue410 < arguments.length;
          pkgValue410++
        )
          pkgValue409[pkgValue410] = arguments[pkgValue410];
        this.type === "destination" &&
          (pkgValue408 = this.middleware).push.apply(pkgValue408, pkgValue409);
      }),
      (pkgHelper52.prototype.transform = function (pkgParam125) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue307;
          return pkgImport2(this, function (pkgParam188) {
            switch (pkgParam188.label) {
              case 0:
                return [
                  4,
                  middlewareT(this.name, pkgParam125.event, this.middleware),
                ];
              case 1:
                return (
                  (pkgValue307 = pkgParam188.sent()),
                  pkgValue307 === null &&
                    pkgParam125.cancel(
                      new pkgContextCancelation({
                        retry: false,
                        reason: "dropped by destination middleware",
                      }),
                    ),
                  [2, new pkgContext(pkgValue307)]
                );
            }
          });
        });
      }),
      (pkgHelper52.prototype._createMethod = function (pkgParam47) {
        var pkgValue141 = this;
        return function (pkgParam48) {
          return pkgImport3(pkgValue141, undefined, undefined, function () {
            var pkgValue142, pkgValue143;
            return pkgImport2(this, function (pkgParam61) {
              switch (pkgParam61.label) {
                case 0:
                  return this.action[pkgParam47]
                    ? ((pkgValue142 = pkgParam48),
                      this.type === "destination"
                        ? [4, this.transform(pkgParam48)]
                        : [3, 2])
                    : [2, pkgParam48];
                case 1:
                  pkgValue142 = pkgParam61.sent();
                  pkgParam61.label = 2;
                case 2:
                  return (pkgParam61.trys.push([2, 5, , 6]), [4, this.ready()]);
                case 3:
                  if (!pkgParam61.sent())
                    throw Error(
                      "Something prevented the destination from getting ready",
                    );
                  return (
                    metricHelpersT(pkgParam48, {
                      integrationName: this.action.name,
                      methodName: pkgParam47,
                      type: "action",
                    }),
                    [4, this.action[pkgParam47](pkgValue142)]
                  );
                case 4:
                  return (pkgParam61.sent(), [3, 6]);
                case 5:
                  throw (
                    (pkgValue143 = pkgParam61.sent()),
                    metricHelpersT(pkgParam48, {
                      integrationName: this.action.name,
                      methodName: pkgParam47,
                      type: "action",
                      didError: true,
                    }),
                    pkgValue143
                  );
                case 6:
                  return [2, pkgParam48];
              }
            });
          });
        };
      }),
      (pkgHelper52.prototype.isLoaded = function () {
        return this.action.isLoaded();
      }),
      (pkgHelper52.prototype.ready = function () {
        return pkgImport3(this, undefined, undefined, function () {
          return pkgImport2(this, function (pkgParam211) {
            switch (pkgParam211.label) {
              case 0:
                return (
                  pkgParam211.trys.push([0, 2, , 3]),
                  [4, this.loadPromise.promise]
                );
              case 1:
                return (pkgParam211.sent(), [2, true]);
              case 2:
                return (pkgParam211.sent(), [2, false]);
              case 3:
                return [2];
            }
          });
        });
      }),
      (pkgHelper52.prototype.load = function (pkgParam58, pkgParam59) {
        return pkgImport3(this, undefined, undefined, function () {
          var pkgValue157, pkgValue158, pkgValue159, pkgValue160;
          return pkgImport2(this, function (pkgParam68) {
            switch (pkgParam68.label) {
              case 0:
                if (this.loadPromise.isSettled())
                  return [2, this.loadPromise.promise];
                pkgParam68.label = 1;
              case 1:
                return (
                  pkgParam68.trys.push([1, 3, , 4]),
                  metricHelpersT(pkgParam58, {
                    integrationName: this.action.name,
                    methodName: "load",
                    type: "action",
                  }),
                  (pkgValue157 = this.action.load(pkgParam58, pkgParam59)),
                  (pkgValue159 = (pkgValue158 = this.loadPromise).resolve),
                  [4, pkgValue157]
                );
              case 2:
                return (
                  pkgValue159.apply(pkgValue158, [pkgParam68.sent()]),
                  [2, pkgValue157]
                );
              case 3:
                throw (
                  (pkgValue160 = pkgParam68.sent()),
                  metricHelpersT(pkgParam58, {
                    integrationName: this.action.name,
                    methodName: "load",
                    type: "action",
                    didError: true,
                  }),
                  this.loadPromise.reject(pkgValue160),
                  pkgValue160
                );
              case 4:
                return [2];
            }
          });
        });
      }),
      (pkgHelper52.prototype.unload = function (pkgParam372, pkgParam373) {
        var pkgValue469;
        return (pkgValue469 = this.action).unload?.call(
          pkgValue469,
          pkgParam372,
          pkgParam373,
        );
      }),
      pkgHelper52
    );
  })();
function pkgHelper40(pkgParam124) {
  if (!Array.isArray(pkgParam124)) throw Error("Not a valid list of plugins");
  var pkgValue273 = ["load", "isLoaded", "name", "version", "type"];
  return (
    pkgParam124.forEach(function (item) {
      pkgValue273.forEach(function (_item) {
        if (item[_item] === undefined)
          throw Error(
            `Plugin: ${item.name ?? "unknown"} missing required function ${_item}`,
          );
      });
    }),
    true
  );
}
function pkgHelper41(pkgParam281, pkgParam282) {
  var pkgValue445 = pkgParam281[pkgParam282.creationName],
    pkgValue446 = pkgParam281[pkgParam282.name];
  return (
    (pkgParam281.All === false && !pkgValue445 && !pkgValue446) ||
    pkgValue445 === false ||
    pkgValue446 === false
  );
}
function pkgHelper42(pkgParam43, pkgParam44) {
  return pkgImport3(this, undefined, undefined, function () {
    var pkgValue136,
      pkgValue137,
      pkgValue138,
      pkgValue139,
      _pkgContext,
      pkgValue140;
    return pkgImport2(this, function (pkgParam46) {
      switch (pkgParam46.label) {
        case 0:
          if (
            (pkgParam46.trys.push([0, 9, , 10]),
            (pkgValue136 = RegExp("https://cdn.segment.(com|build)")),
            (pkgValue137 = loadScriptR()),
            !pkgParam44)
          )
            return [3, 6];
          pkgValue138 = pkgParam43.url.split("/");
          pkgValue139 = pkgValue138[pkgValue138.length - 2];
          _pkgContext = pkgParam43.url.replace(
            pkgValue139,
            btoa(pkgValue139).replace(/=/g, ""),
          );
          pkgParam46.label = 1;
        case 1:
          return (
            pkgParam46.trys.push([1, 3, , 5]),
            [4, loadScriptT(_pkgContext.replace(pkgValue136, pkgValue137))]
          );
        case 2:
          return (pkgParam46.sent(), [3, 5]);
        case 3:
          return (
            pkgParam46.sent(),
            [4, loadScriptT(pkgParam43.url.replace(pkgValue136, pkgValue137))]
          );
        case 4:
          return (pkgParam46.sent(), [3, 5]);
        case 5:
          return [3, 8];
        case 6:
          return [
            4,
            loadScriptT(pkgParam43.url.replace(pkgValue136, pkgValue137)),
          ];
        case 7:
          pkgParam46.sent();
          pkgParam46.label = 8;
        case 8:
          return typeof window[pkgParam43.libraryName] == "function"
            ? [2, window[pkgParam43.libraryName]]
            : [3, 10];
        case 9:
          throw (
            (pkgValue140 = pkgParam46.sent()),
            console.error("Failed to create PluginFactory", pkgParam43),
            pkgValue140
          );
        case 10:
          return [2];
      }
    });
  });
}
function pkgHelper43(
  pkgParam22,
  pkgParam23,
  pkgParam24,
  pkgParam25,
  pkgParam26,
  pkgParam27,
) {
  return pkgImport3(this, undefined, undefined, function () {
    var _pkgContextCancelation,
      pkgValue105,
      pkgValue106,
      pkgValue107 = this;
    return pkgImport2(this, function (pkgParam30) {
      switch (pkgParam30.label) {
        case 0:
          return (
            (_pkgContextCancelation = []),
            (pkgValue105 = pkgParam22.middlewareSettings?.routingRules ?? []),
            (pkgValue106 = (pkgParam22.remotePlugins ?? []).map(
              function (item) {
                return pkgImport3(
                  pkgValue107,
                  undefined,
                  undefined,
                  function () {
                    var pkgValue129,
                      pkgValue130,
                      pkgValue131,
                      pkgValue132,
                      pkgValue133,
                      pkgValue134,
                      pkgValue135;
                    return pkgImport2(this, function (pkgParam45) {
                      switch (pkgParam45.label) {
                        case 0:
                          if (pkgHelper41(pkgParam23, item)) return [2];
                          pkgParam45.label = 1;
                        case 1:
                          return (
                            pkgParam45.trys.push([1, 6, , 7]),
                            (pkgValue130 = pkgParam27?.find(
                              function (pkgParam398) {
                                return pkgParam398.pluginName === item.name;
                              },
                            )),
                            pkgValue130
                              ? [3, 3]
                              : [4, pkgHelper42(item, pkgParam25?.obfuscate)]
                          );
                        case 2:
                          pkgValue130 = pkgParam45.sent();
                          pkgParam45.label = 3;
                        case 3:
                          return (
                            (pkgValue129 = pkgValue130),
                            pkgValue129
                              ? ((pkgValue131 = pkgParam24[item.name]),
                                [
                                  4,
                                  pkgValue129(
                                    pkgImport6(
                                      pkgImport6({}, item.settings),
                                      pkgValue131,
                                    ),
                                  ),
                                ])
                              : [3, 5]
                          );
                        case 4:
                          pkgValue132 = pkgParam45.sent();
                          pkgValue133 = Array.isArray(pkgValue132)
                            ? pkgValue132
                            : [pkgValue132];
                          pkgHelper40(pkgValue133);
                          pkgValue134 = pkgValue105.filter(function (_item) {
                            return _item.destinationName === item.creationName;
                          });
                          pkgValue133.forEach(function (_item) {
                            var pkgValue454 = new pkgValue54(
                              item.creationName,
                              _item,
                            );
                            pkgValue134.length &&
                              pkgParam26 &&
                              pkgValue454.addMiddleware(pkgParam26);
                            _pkgContextCancelation.push(pkgValue454);
                          });
                          pkgParam45.label = 5;
                        case 5:
                          return [3, 7];
                        case 6:
                          return (
                            (pkgValue135 = pkgParam45.sent()),
                            console.warn(
                              "Failed to load Remote Plugin",
                              pkgValue135,
                            ),
                            metricHelpersT(pkgContext.system(), {
                              integrationName: item.name,
                              methodName: "load",
                              type: "action",
                              didError: true,
                            }),
                            [3, 7]
                          );
                        case 7:
                          return [2];
                      }
                    });
                  },
                );
              },
            )),
            [4, Promise.all(pkgValue106)]
          );
        case 1:
          return (
            pkgParam30.sent(),
            [2, _pkgContextCancelation.filter(Boolean)]
          );
      }
    });
  });
}
var pkgValue55,
  pkgValue56 =
    (pkgValue55 = middlewareD()).__SEGMENT_INSPECTOR__ ??
    (pkgValue55.__SEGMENT_INSPECTOR__ = {}),
  pkgValue57 = function (pkgParam399) {
    return pkgValue56.attach?.call(pkgValue56, pkgParam399);
  };
function $t(pkgParam202, pkgParam203) {
  return middlewareU(`${pkgParam203}/v1/projects/${pkgParam202}/settings`)
    .then(function (value) {
      return value.ok
        ? value.json()
        : value.text().then(function (_value) {
            throw Error(_value);
          });
    })
    .catch(function (error) {
      throw (console.error(error.message), error);
    });
}
function pkgHelper44(pkgParam310) {
  return (
    pkgHelper33().NODE_ENV !== "test" &&
    Object.keys(pkgParam310.integrations).length > 1
  );
}
function pkgHelper45(pkgParam280) {
  return (
    pkgHelper33().NODE_ENV !== "test" &&
    (pkgParam280.middlewareSettings?.routingRules?.length ?? 0) > 0
  );
}
function pkgHelper46(pkgParam410, pkgParam411) {
  pkgValue36(pkgParam410, pkgParam411);
  pkgValue35(pkgParam410, pkgParam411);
}
function pkgHelper47(pkgParam218, pkgParam219, pkgParam220) {
  return pkgImport3(this, undefined, undefined, function () {
    return pkgImport2(this, function (pkgParam295) {
      switch (pkgParam295.label) {
        case 0:
          return [4, on(pkgParam218, pkgParam219)];
        case 1:
          return (
            pkgParam295.sent(),
            pkgValue37(pkgParam218, pkgParam220),
            [2]
          );
      }
    });
  });
}
var pkgValue58 = function () {
    var pkgValue421 = window.location.hash ?? "",
      pkgValue422 = window.location.search ?? "";
    return pkgValue422.length
      ? pkgValue422
      : pkgValue421.replace(/(?=#).*(?=\?)/, "");
  },
  on = function (pkgParam162, pkgParam163) {
    return pkgImport3(undefined, undefined, undefined, function () {
      return pkgImport2(this, function (pkgParam225) {
        switch (pkgParam225.label) {
          case 0:
            return pkgParam163.includes("ajs_")
              ? [4, pkgParam162.queryString(pkgParam163).catch(console.error)]
              : [3, 2];
          case 1:
            pkgParam225.sent();
            pkgParam225.label = 2;
          case 2:
            return [2];
        }
      });
    });
  };
function pkgHelper48(
  pkgParam3,
  pkgParam4,
  pkgParam5,
  _pkgContext,
  pkgParam6,
  pkgParam7,
  _pkgContextCancelation,
) {
  return (
    pkgParam6 === undefined && (pkgParam6 = []),
    pkgImport3(this, undefined, undefined, function () {
      var pkgValue59,
        pkgValue60,
        pkgValue61,
        pkgValue62,
        pkgValue63,
        pkgValue64,
        pkgValue65,
        pkgValue66,
        pkgValue67,
        pkgValue68,
        pkgValue69,
        pkgValue70,
        pkgValue71,
        pkgValue72,
        pkgValue73,
        pkgValue74 = this;
      return pkgImport2(this, function (pkgParam8) {
        switch (pkgParam8.label) {
          case 0:
            return (
              pkgHelper46(pkgParam5, _pkgContextCancelation),
              (pkgValue59 = pkgParam6?.filter(function (pkgParam404) {
                return typeof pkgParam404 == "object";
              })),
              (pkgValue60 = pkgParam6?.filter(function (pkgParam356) {
                return (
                  typeof pkgParam356 == "function" &&
                  typeof pkgParam356.pluginName == "string"
                );
              })),
              pkgHelper45(pkgParam4)
                ? [
                    4,
                    PreloadHelper(
                      () =>
                        import("../utils/routing-middleware").then(
                          function (value) {
                            return value.tsubMiddleware(
                              pkgParam4.middlewareSettings.routingRules,
                            );
                          },
                        ),
                      __vite__mapDeps([9, 1]),
                      import.meta.url,
                    ),
                  ]
                : [3, 2]
            );
          case 1:
            return ((pkgValue62 = pkgParam8.sent()), [3, 3]);
          case 2:
            pkgValue62 = undefined;
            pkgParam8.label = 3;
          case 3:
            return (
              (pkgValue61 = pkgValue62),
              pkgHelper44(pkgParam4) || pkgParam7.length > 0
                ? [
                    4,
                    PreloadHelper(
                      () =>
                        import("@segment/analytics.js-integration").then(
                          function (value) {
                            return value.ajsDestinations(
                              pkgParam3,
                              pkgParam4,
                              pkgParam5.integrations,
                              _pkgContext,
                              pkgValue61,
                              pkgParam7,
                            );
                          },
                        ),
                      __vite__mapDeps([10, 1, 3, 4, 2, 11, 6, 12, 13]),
                      import.meta.url,
                    ),
                  ]
                : [3, 5]
            );
          case 4:
            return ((pkgValue64 = pkgParam8.sent()), [3, 6]);
          case 5:
            pkgValue64 = [];
            pkgParam8.label = 6;
          case 6:
            return (
              (pkgValue63 = pkgValue64),
              pkgParam4.legacyVideoPluginsEnabled
                ? [
                    4,
                    PreloadHelper(
                      () =>
                        import("../utils/legacy-video-plugins").then(
                          function (value) {
                            return value.loadLegacyVideoPlugins(pkgParam5);
                          },
                        ),
                      __vite__mapDeps([14, 1, 15, 4, 3]),
                      import.meta.url,
                    ),
                  ]
                : [3, 8]
            );
          case 7:
            pkgParam8.sent();
            pkgParam8.label = 8;
          case 8:
            return _pkgContext.plan?.track
              ? [
                  4,
                  PreloadHelper(
                    () =>
                      import("../utils/schema-filter").then(function (value) {
                        return value.schemaFilter(
                          _pkgContext.plan?.track,
                          pkgParam4,
                        );
                      }),
                    __vite__mapDeps([16, 1, 3, 4, 13]),
                    import.meta.url,
                  ),
                ]
              : [3, 10];
          case 9:
            return ((pkgValue66 = pkgParam8.sent()), [3, 11]);
          case 10:
            pkgValue66 = undefined;
            pkgParam8.label = 11;
          case 11:
            return (
              (pkgValue65 = pkgValue66),
              (pkgValue67 = metricHelpersN(pkgParam4, _pkgContext)),
              [
                4,
                pkgHelper43(
                  pkgParam4,
                  pkgParam5.integrations,
                  pkgValue67,
                  _pkgContext,
                  pkgValue61,
                  pkgValue60,
                ).catch(function (error) {
                  return (
                    console.error("Failed to load remote plugins", error),
                    []
                  );
                }),
              ]
            );
          case 12:
            return (
              (pkgValue68 = pkgParam8.sent()),
              (pkgValue69 = pkgImport4(
                pkgImport4([pkgValue53], pkgValue63, true),
                pkgValue68,
                true,
              )),
              pkgValue65 && pkgValue69.push(pkgValue65),
              (pkgValue70 =
                (_pkgContext.integrations?.All === false &&
                  !_pkgContext.integrations["Segment.io"]) ||
                (_pkgContext.integrations &&
                  _pkgContext.integrations["Segment.io"] === false)),
              pkgValue70
                ? [3, 14]
                : ((pkgValue72 = (pkgValue71 = pkgValue69).push),
                  [
                    4,
                    pkgSegmentio(
                      pkgParam5,
                      pkgValue67["Segment.io"],
                      pkgParam4.integrations,
                    ),
                  ])
            );
          case 13:
            pkgValue72.apply(pkgValue71, [pkgParam8.sent()]);
            pkgParam8.label = 14;
          case 14:
            return [
              4,
              pkgParam5.register.apply(
                pkgParam5,
                pkgImport4(
                  pkgImport4([], pkgValue69, false),
                  pkgValue59,
                  false,
                ),
              ),
            ];
          case 15:
            return (
              (pkgValue73 = pkgParam8.sent()),
              [4, pkgValue34(pkgParam5, _pkgContextCancelation)]
            );
          case 16:
            return (
              pkgParam8.sent(),
              Object.entries(pkgParam4.enabledMiddleware ?? {}).some(
                function (item) {
                  return item[1];
                },
              )
                ? [
                    4,
                    PreloadHelper(
                      () =>
                        import("./segment-remote-middleware").then(
                          function (value) {
                            var pkgValue285 = value.remoteMiddlewares;
                            return pkgImport3(
                              pkgValue74,
                              undefined,
                              undefined,
                              function () {
                                var pkgValue356, pkgValue357;
                                return pkgImport2(this, function (pkgParam221) {
                                  switch (pkgParam221.label) {
                                    case 0:
                                      return [
                                        4,
                                        pkgValue285(
                                          pkgValue73,
                                          pkgParam4,
                                          _pkgContext.obfuscate,
                                        ),
                                      ];
                                    case 1:
                                      return (
                                        (pkgValue356 = pkgParam221.sent()),
                                        (pkgValue357 = pkgValue356.map(
                                          function (item) {
                                            return pkgParam5.addSourceMiddleware(
                                              item,
                                            );
                                          },
                                        )),
                                        [2, Promise.all(pkgValue357)]
                                      );
                                  }
                                });
                              },
                            );
                          },
                        ),
                      __vite__mapDeps([17, 1, 3, 4, 12]),
                      import.meta.url,
                    ),
                  ]
                : [3, 18]
            );
          case 17:
            pkgParam8.sent();
            pkgParam8.label = 18;
          case 18:
            return [4, pkgValue33(pkgParam5, _pkgContextCancelation)];
          case 19:
            return (pkgParam8.sent(), [2, pkgValue73]);
        }
      });
    })
  );
}
function pkgHelper49(pkgParam18, pkgParam19, pkgParam20) {
  var pkgValue92;
  return (
    pkgParam19 === undefined && (pkgParam19 = {}),
    pkgImport3(this, undefined, undefined, function () {
      var pkgValue108,
        pkgValue109,
        pkgValue110,
        _pkgContextCancelation,
        pkgValue111,
        pkgValue112,
        pkgValue113,
        pkgValue114,
        pkgValue115,
        pkgValue116,
        pkgValue117;
      return pkgImport2(this, function (pkgParam32) {
        switch (pkgParam32.label) {
          case 0:
            return pkgParam19.disable === true
              ? [2, [new pkgValue51(), pkgContext.system()]]
              : (pkgParam19.globalAnalyticsKey &&
                  loadScriptC(pkgParam19.globalAnalyticsKey),
                pkgParam18.cdnURL && loadScriptA(pkgParam18.cdnURL),
                pkgParam19.initialPageview &&
                  pkgParam20.add(new pkgValue40("page", [])),
                (pkgValue108 = pkgValue58()),
                (pkgValue109 = pkgParam18.cdnURL ?? loadScriptR()),
                (pkgValue92 = pkgParam18.cdnSettings) == null
                  ? [3, 1]
                  : ((_pkgContextCancelation = pkgValue92), [3, 3]));
          case 1:
            return [4, $t(pkgParam18.writeKey, pkgValue109)];
          case 2:
            _pkgContextCancelation = pkgParam32.sent();
            pkgParam32.label = 3;
          case 3:
            return (
              (pkgValue110 = _pkgContextCancelation),
              pkgParam19.updateCDNSettings &&
                (pkgValue110 = pkgParam19.updateCDNSettings(pkgValue110)),
              typeof pkgParam19.disable == "function"
                ? [4, pkgParam19.disable(pkgValue110)]
                : [3, 5]
            );
          case 4:
            if (((pkgValue111 = pkgParam32.sent()), pkgValue111))
              return [2, [new pkgValue51(), pkgContext.system()]];
            pkgParam32.label = 5;
          case 5:
            return (
              (pkgValue112 =
                pkgValue110.integrations["Segment.io"]?.retryQueue ?? true),
              (pkgParam19 = pkgImport6(
                {
                  retryQueue: pkgValue112,
                },
                pkgParam19,
              )),
              (pkgValue113 = new pkgAnalytics(
                pkgImport6(pkgImport6({}, pkgParam18), {
                  cdnSettings: pkgValue110,
                  cdnURL: pkgValue109,
                }),
                pkgParam19,
              )),
              pkgValue57(pkgValue113),
              (pkgValue114 = pkgParam18.plugins ?? []),
              (pkgValue115 = pkgParam18.classicIntegrations ?? []),
              (pkgValue116 = pkgParam19.integrations?.["Segment.io"]),
              middlewareO.initRemoteMetrics(
                pkgImport6(pkgImport6({}, pkgValue110.metrics), {
                  host: pkgValue116?.apiHost ?? pkgValue110.metrics?.host,
                  protocol: pkgValue116?.protocol,
                }),
              ),
              [
                4,
                pkgHelper48(
                  pkgParam18.writeKey,
                  pkgValue110,
                  pkgValue113,
                  pkgParam19,
                  pkgValue114,
                  pkgValue115,
                  pkgParam20,
                ),
              ]
            );
          case 6:
            return (
              (pkgValue117 = pkgParam32.sent()),
              (pkgValue113.initialized = true),
              pkgValue113.emit("initialize", pkgParam18, pkgParam19),
              [4, pkgHelper47(pkgValue113, pkgValue108, pkgParam20)]
            );
          case 7:
            return (pkgParam32.sent(), [2, [pkgValue113, pkgValue117]]);
        }
      });
    })
  );
}
export const pkgAnalyticsNode = (function () {
  function pkgHelper78() {}
  return (
    (pkgHelper78.load = function () {
      return Promise.reject(
        Error("AnalyticsNode is not available in browsers."),
      );
    }),
    pkgHelper78
  );
})();
export const pkgAnalyticsBrowser = (function (pkgParam67) {
  pkgImport5(pkgHelper69, pkgParam67);
  function pkgHelper69() {
    var pkgValue335 = this,
      pkgValue336 = metricHelpersF(),
      pkgValue337 = pkgValue336.promise,
      pkgValue338 = pkgValue336.resolve;
    return (
      (pkgValue335 =
        pkgParam67.call(this, function (pkgParam347) {
          return pkgValue337.then(function (value) {
            var pkgValue476 = value[0],
              pkgValue477 = value[1];
            return pkgHelper49(pkgValue476, pkgValue477, pkgParam347);
          });
        }) || this),
      (pkgValue335._resolveLoadStart = function (pkgParam419, pkgParam420) {
        return pkgValue338([pkgParam419, pkgParam420]);
      }),
      pkgValue335
    );
  }
  return (
    (pkgHelper69.prototype.load = function (pkgParam351, pkgParam352) {
      return (
        pkgParam352 === undefined && (pkgParam352 = {}),
        this._resolveLoadStart(pkgParam351, pkgParam352),
        this
      );
    }),
    (pkgHelper69.load = function (pkgParam378, pkgParam379) {
      return (
        pkgParam379 === undefined && (pkgParam379 = {}),
        new pkgHelper69().load(pkgParam378, pkgParam379)
      );
    }),
    (pkgHelper69.standalone = function (pkgParam348, pkgParam349) {
      return pkgHelper69
        .load(
          {
            writeKey: pkgParam348,
          },
          pkgParam349,
        )
        .then(function (value) {
          return value[0];
        });
    }),
    pkgHelper69
  );
})(pkgValue42);
export {
  pkgAnalytics as Analytics,
  pkgContext as Context,
  pkgContextCancelation as ContextCancelation,
  pkgEventFactory as EventFactory,
  pkgGroup as Group,
  pkgUniversalStorage as UniversalStorage,
  pkgUser as User,
  pkgGetGlobalAnalytics as getGlobalAnalytics,
  pkgIsDestinationPluginWithAddMiddleware as isDestinationPluginWithAddMiddleware,
  pkgResolveAliasArguments as resolveAliasArguments,
  pkgResolveArguments as resolveArguments,
  pkgResolvePageArguments as resolvePageArguments,
  pkgResolveUserArguments as resolveUserArguments,
  pkgSegmentio as segmentio,
};
