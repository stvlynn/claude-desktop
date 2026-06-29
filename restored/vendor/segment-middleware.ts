// Restored from ref/webview/assets/middleware-CcPovR3s.js
// Middleware chunk restored from the Codex webview bundle.
import { createCommonJsModule } from "../runtime/commonjs-interop";
import {
  __generator as middlewareImport1,
  __awaiter as middlewareImport2,
  __extends as middlewareImport3,
  __assign as middlewareImport4,
} from "tslib";
function middlewareH(middlewareParam53, middlewareParam54, middlewareParam55) {
  middlewareParam54.split && (middlewareParam54 = middlewareParam54.split(`.`));
  for (
    var middlewareValue129 = 0,
      middlewareValue130 = middlewareParam54.length,
      _middlewareH = middlewareParam53,
      middlewareValue131,
      middlewareValue132;
    middlewareValue129 < middlewareValue130 &&
    ((middlewareValue132 = `` + middlewareParam54[middlewareValue129++]),
    !(
      middlewareValue132 === `__proto__` ||
      middlewareValue132 === `constructor` ||
      middlewareValue132 === `prototype`
    ));

  )
    _middlewareH = _middlewareH[middlewareValue132] =
      middlewareValue129 === middlewareValue130
        ? middlewareParam55
        : typeof (middlewareValue131 = _middlewareH[middlewareValue132]) ==
            typeof middlewareParam54
          ? middlewareValue131
          : middlewareParam54[middlewareValue129] * 0 != 0 ||
              ~(`` + middlewareParam54[middlewareValue129]).indexOf(`.`)
            ? {}
            : [];
}
for (
  var middlewareValue1 = 256, middlewareValue2 = [], middlewareValue3;
  middlewareValue1--;

)
  middlewareValue2[middlewareValue1] = (middlewareValue1 + 256)
    .toString(16)
    .substring(1);
function middlewareM() {
  var middlewareValue146 = 0,
    middlewareValue147,
    middlewareValue148 = ``;
  if (!middlewareValue3 || middlewareValue1 + 16 > 256) {
    for (
      middlewareValue3 = Array((middlewareValue146 = 256));
      middlewareValue146--;

    )
      middlewareValue3[middlewareValue146] = (256 * Math.random()) | 0;
    middlewareValue146 = middlewareValue1 = 0;
  }
  for (; middlewareValue146 < 16; middlewareValue146++)
    ((middlewareValue147 =
      middlewareValue3[middlewareValue1 + middlewareValue146]),
      middlewareValue146 == 6
        ? (middlewareValue148 +=
            middlewareValue2[(middlewareValue147 & 15) | 64])
        : middlewareValue146 == 8
          ? (middlewareValue148 +=
              middlewareValue2[(middlewareValue147 & 63) | 128])
          : (middlewareValue148 += middlewareValue2[middlewareValue147]),
      middlewareValue146 & 1 &&
        middlewareValue146 > 1 &&
        middlewareValue146 < 11 &&
        (middlewareValue148 += `-`));
  return (middlewareValue1++, middlewareValue148);
}
var middlewareValue4 = (function () {
    function middlewareHelper16() {
      this._logs = [];
    }
    return (
      (middlewareHelper16.prototype.log = function (
        middlewareParam102,
        middlewareParam103,
        middlewareParam104,
      ) {
        var middlewareValue210 = new Date();
        this._logs.push({
          level: middlewareParam102,
          message: middlewareParam103,
          time: middlewareValue210,
          extras: middlewareParam104,
        });
      }),
      Object.defineProperty(middlewareHelper16.prototype, `logs`, {
        get: function () {
          return this._logs;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (middlewareHelper16.prototype.flush = function () {
        if (this.logs.length > 1) {
          var middlewareValue85 = this._logs.reduce(function (
            accumulator,
            current,
          ) {
            var middlewareValue151,
              middlewareValue152 = middlewareImport4(
                middlewareImport4({}, current),
                {
                  json: JSON.stringify(current.extras, null, ` `),
                  extras: current.extras,
                },
              );
            delete middlewareValue152.time;
            var _middlewareH = current.time?.toISOString() ?? ``;
            return (
              accumulator[_middlewareH] &&
                (_middlewareH = `${_middlewareH}-${Math.random()}`),
              middlewareImport4(
                middlewareImport4({}, accumulator),
                ((middlewareValue151 = {}),
                (middlewareValue151[_middlewareH] = middlewareValue152),
                middlewareValue151),
              )
            );
          }, {});
          console.table
            ? console.table(middlewareValue85)
            : console.log(middlewareValue85);
        } else
          this.logs.forEach(function (item) {
            var middlewareValue194 = item.level,
              middlewareValue195 = item.message,
              middlewareValue196 = item.extras;
            middlewareValue194 === `info` || middlewareValue194 === `debug`
              ? console.log(middlewareValue195, middlewareValue196 ?? ``)
              : console[middlewareValue194](
                  middlewareValue195,
                  middlewareValue196 ?? ``,
                );
          });
        this._logs = [];
      }),
      middlewareHelper16
    );
  })(),
  middlewareValue5 = function (middlewareParam153) {
    return {
      gauge: `g`,
      counter: `c`,
    }[middlewareParam153];
  },
  middlewareValue6 = (function () {
    function middlewareHelper18() {
      this.metrics = [];
    }
    return (
      (middlewareHelper18.prototype.increment = function (
        middlewareParam84,
        middlewareParam85,
        middlewareParam86,
      ) {
        (middlewareParam85 === void 0 && (middlewareParam85 = 1),
          this.metrics.push({
            metric: middlewareParam84,
            value: middlewareParam85,
            tags: middlewareParam86 ?? [],
            type: `counter`,
            timestamp: Date.now(),
          }));
      }),
      (middlewareHelper18.prototype.gauge = function (
        middlewareParam96,
        middlewareParam97,
        middlewareParam98,
      ) {
        this.metrics.push({
          metric: middlewareParam96,
          value: middlewareParam97,
          tags: middlewareParam98 ?? [],
          type: `gauge`,
          timestamp: Date.now(),
        });
      }),
      (middlewareHelper18.prototype.flush = function () {
        var middlewareValue173 = this.metrics.map(function (item) {
          return middlewareImport4(middlewareImport4({}, item), {
            tags: item.tags.join(`,`),
          });
        });
        (console.table
          ? console.table(middlewareValue173)
          : console.log(middlewareValue173),
          (this.metrics = []));
      }),
      (middlewareHelper18.prototype.serialize = function () {
        return this.metrics.map(function (item) {
          return {
            m: item.metric,
            v: item.value,
            t: item.tags,
            k: middlewareValue5(item.type),
            e: item.timestamp,
          };
        });
      }),
      middlewareHelper18
    );
  })(),
  middlewareValue7 = (function (middlewareParam57) {
    middlewareImport3(middlewareHelper32, middlewareParam57);
    function middlewareHelper32() {
      return (
        (middlewareParam57 !== null &&
          middlewareParam57.apply(this, arguments)) ||
        this
      );
    }
    return (
      (middlewareHelper32.prototype.gauge = function () {}),
      (middlewareHelper32.prototype.increment = function () {}),
      (middlewareHelper32.prototype.flush = function () {}),
      (middlewareHelper32.prototype.serialize = function () {
        return [];
      }),
      middlewareHelper32
    );
  })(middlewareValue6),
  middlewareF = (function () {
    function middlewareHelper34(middlewareParam99) {
      ((this.retry = middlewareParam99.retry ?? !0),
        (this.type = middlewareParam99.type ?? `plugin Error`),
        (this.reason = middlewareParam99.reason ?? ``));
    }
    return middlewareHelper34;
  })(),
  middlewareP = (function () {
    function middlewareHelper10(
      middlewareParam70,
      middlewareParam71,
      middlewareParam72,
      middlewareParam73,
    ) {
      (middlewareParam71 === void 0 && (middlewareParam71 = middlewareM()),
        middlewareParam72 === void 0 &&
          (middlewareParam72 = new middlewareValue7()),
        middlewareParam73 === void 0 &&
          (middlewareParam73 = new middlewareValue4()),
        (this.attempts = 0),
        (this.event = middlewareParam70),
        (this._id = middlewareParam71),
        (this.logger = middlewareParam73),
        (this.stats = middlewareParam72));
    }
    return (
      (middlewareHelper10.system = function () {}),
      (middlewareHelper10.prototype.isSame = function (middlewareParam178) {
        return middlewareParam178.id === this.id;
      }),
      (middlewareHelper10.prototype.cancel = function (middlewareParam126) {
        throw (
          middlewareParam126 ||
          new middlewareF({
            reason: `Context Cancel`,
          })
        );
      }),
      (middlewareHelper10.prototype.log = function (
        middlewareParam168,
        middlewareParam169,
        middlewareParam170,
      ) {
        this.logger.log(
          middlewareParam168,
          middlewareParam169,
          middlewareParam170,
        );
      }),
      Object.defineProperty(middlewareHelper10.prototype, `id`, {
        get: function () {
          return this._id;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (middlewareHelper10.prototype.updateEvent = function (
        middlewareParam67,
        middlewareParam68,
      ) {
        if (middlewareParam67.split(`.`)[0] === `integrations`) {
          var middlewareValue168 = middlewareParam67.split(`.`)[1];
          if (this.event.integrations?.[middlewareValue168] === !1)
            return this.event;
        }
        return (
          middlewareH(this.event, middlewareParam67, middlewareParam68),
          this.event
        );
      }),
      (middlewareHelper10.prototype.failedDelivery = function () {
        return this._failedDelivery;
      }),
      (middlewareHelper10.prototype.setFailedDelivery = function (
        middlewareParam177,
      ) {
        this._failedDelivery = middlewareParam177;
      }),
      (middlewareHelper10.prototype.logs = function () {
        return this.logger.logs;
      }),
      (middlewareHelper10.prototype.flush = function () {
        (this.logger.flush(), this.stats.flush());
      }),
      (middlewareHelper10.prototype.toJSON = function () {
        return {
          id: this._id,
          event: this.event,
          logs: this.logger.logs,
          metrics: this.stats.metrics,
        };
      }),
      middlewareHelper10
    );
  })();
function middlewareHelper1(middlewareParam7, middlewareParam8) {
  return (
    (middlewareParam8 ||= {}),
    new Promise(function (middlewareParam9, middlewareParam10) {
      var middlewareValue67 = new XMLHttpRequest(),
        _middlewareH = [],
        middlewareValue68 = [],
        middlewareValue69 = {},
        middlewareValue70 = function () {
          return {
            ok: ((middlewareValue67.status / 100) | 0) == 2,
            statusText: middlewareValue67.statusText,
            status: middlewareValue67.status,
            url: middlewareValue67.responseURL,
            text: function () {
              return Promise.resolve(middlewareValue67.responseText);
            },
            json: function () {
              return Promise.resolve(middlewareValue67.responseText).then(
                JSON.parse,
              );
            },
            blob: function () {
              return Promise.resolve(new Blob([middlewareValue67.response]));
            },
            clone: middlewareValue70,
            headers: {
              keys: function () {
                return _middlewareH;
              },
              entries: function () {
                return middlewareValue68;
              },
              get: function (middlewareParam172) {
                return middlewareValue69[middlewareParam172.toLowerCase()];
              },
              has: function (middlewareParam171) {
                return middlewareParam171.toLowerCase() in middlewareValue69;
              },
            },
          };
        };
      for (var _middlewareM in (middlewareValue67.open(
        middlewareParam8.method || `get`,
        middlewareParam7,
        !0,
      ),
      (middlewareValue67.onload = function () {
        (middlewareValue67
          .getAllResponseHeaders()
          .replace(
            /^(.*?):[^\S\n]*([\s\S]*?)$/gm,
            function (
              middlewareParam105,
              middlewareParam106,
              middlewareParam107,
            ) {
              (_middlewareH.push(
                (middlewareParam106 = middlewareParam106.toLowerCase()),
              ),
                middlewareValue68.push([
                  middlewareParam106,
                  middlewareParam107,
                ]),
                (middlewareValue69[middlewareParam106] = middlewareValue69[
                  middlewareParam106
                ]
                  ? middlewareValue69[middlewareParam106] +
                    `,` +
                    middlewareParam107
                  : middlewareParam107));
            },
          ),
          middlewareParam9(middlewareValue70()));
      }),
      (middlewareValue67.onerror = middlewareParam10),
      (middlewareValue67.withCredentials =
        middlewareParam8.credentials == `include`),
      middlewareParam8.headers))
        middlewareValue67.setRequestHeader(
          _middlewareM,
          middlewareParam8.headers[_middlewareM],
        );
      middlewareValue67.send(middlewareParam8.body || null);
    })
  );
}
var middlewareD = function () {
    return typeof globalThis < `u`
      ? globalThis
      : typeof self < `u`
        ? self
        : typeof window < `u`
          ? window
          : typeof global < `u`
            ? global
            : null;
  },
  middlewareU = function () {
    var middlewareValue212 = [...arguments],
      middlewareValue213 = middlewareD();
    return (
      (middlewareValue213 && middlewareValue213.fetch) ||
      middlewareHelper1
    ).apply(void 0, middlewareValue212);
  },
  middlewareL = `1.82.0`,
  middlewareValue8 = `npm`;
function middlewareC() {
  return middlewareValue8;
}
var middlewareS = `api.segment.io/v1`,
  middlewareValue9 = function (
    middlewareParam59,
    middlewareParam60,
    middlewareParam61,
  ) {
    return {
      type: `Counter`,
      metric: middlewareParam59,
      value: 1,
      tags: middlewareImport4(
        middlewareImport4(
          {},
          middlewareParam60.reduce(function (accumulator, current) {
            var middlewareValue218 = current.split(`:`),
              middlewareValue219 = middlewareValue218[0];
            return (
              (accumulator[middlewareValue219] = middlewareValue218[1]),
              accumulator
            );
          }, {}),
        ),
        {
          library: `analytics.js`,
          library_version:
            middlewareParam61 === `web`
              ? `next-${middlewareL}`
              : `npm:next-${middlewareL}`,
        },
      ),
    };
  };
function middlewareHelper2(middlewareParam113) {
  console.error(
    `Error sending segment performance metrics`,
    middlewareParam113,
  );
}
var middlewareValue10 = (function () {
    function middlewareHelper9(middlewareParam37) {
      var middlewareValue100 = this;
      if (
        ((this.host = middlewareParam37?.host ?? middlewareS),
        (this.sampleRate = middlewareParam37?.sampleRate ?? 1),
        (this.flushTimer = middlewareParam37?.flushTimer ?? 30 * 1e3),
        (this.maxQueueSize = middlewareParam37?.maxQueueSize ?? 20),
        (this.protocol = middlewareParam37?.protocol ?? `https`),
        (this.queue = []),
        this.sampleRate > 0)
      ) {
        var middlewareValue101 = !1,
          middlewareValue102 = function () {
            middlewareValue101 ||
              ((middlewareValue101 = !0),
              middlewareValue100.flush().catch(middlewareHelper2),
              (middlewareValue101 = !1),
              setTimeout(middlewareValue102, middlewareValue100.flushTimer));
          };
        middlewareValue102();
      }
    }
    return (
      (middlewareHelper9.prototype.increment = function (
        middlewareParam62,
        middlewareParam63,
      ) {
        if (
          middlewareParam62.includes(`analytics_js.`) &&
          middlewareParam63.length !== 0 &&
          !(Math.random() > this.sampleRate) &&
          !(this.queue.length >= this.maxQueueSize)
        ) {
          var middlewareValue145 = middlewareValue9(
            middlewareParam62,
            middlewareParam63,
            middlewareC(),
          );
          (this.queue.push(middlewareValue145),
            middlewareParam62.includes(`error`) &&
              this.flush().catch(middlewareHelper2));
        }
      }),
      (middlewareHelper9.prototype.flush = function () {
        return middlewareImport2(this, void 0, void 0, function () {
          var middlewareValue164 = this;
          return middlewareImport1(this, function (middlewareParam74) {
            switch (middlewareParam74.label) {
              case 0:
                return this.queue.length <= 0
                  ? [2]
                  : [
                      4,
                      this.send().catch(function (error) {
                        (middlewareHelper2(error),
                          (middlewareValue164.sampleRate = 0));
                      }),
                    ];
              case 1:
                return (middlewareParam74.sent(), [2]);
            }
          });
        });
      }),
      (middlewareHelper9.prototype.send = function () {
        return middlewareImport2(this, void 0, void 0, function () {
          var middlewareValue139, middlewareValue140, middlewareValue141;
          return middlewareImport1(this, function (middlewareParam66) {
            return (
              (middlewareValue139 = {
                series: this.queue,
              }),
              (this.queue = []),
              (middlewareValue140 = {
                "Content-Type": `text/plain`,
              }),
              (middlewareValue141 = `${this.protocol}://${this.host}/m`),
              [
                2,
                middlewareU(middlewareValue141, {
                  headers: middlewareValue140,
                  body: JSON.stringify(middlewareValue139),
                  method: `POST`,
                }),
              ]
            );
          });
        });
      }),
      middlewareHelper9
    );
  })(),
  middlewareValue11,
  middlewareO = (function (middlewareParam56) {
    middlewareImport3(middlewareHelper31, middlewareParam56);
    function middlewareHelper31() {
      return (
        (middlewareParam56 !== null &&
          middlewareParam56.apply(this, arguments)) ||
        this
      );
    }
    return (
      (middlewareHelper31.initRemoteMetrics = function (middlewareParam185) {
        middlewareValue11 = new middlewareValue10(middlewareParam185);
      }),
      (middlewareHelper31.prototype.increment = function (
        middlewareParam108,
        middlewareParam109,
        middlewareParam110,
      ) {
        (middlewareParam56.prototype.increment.call(
          this,
          middlewareParam108,
          middlewareParam109,
          middlewareParam110,
        ),
          middlewareValue11?.increment(
            middlewareParam108,
            middlewareParam110 ?? [],
          ));
      }),
      middlewareHelper31
    );
  })(middlewareValue6),
  middlewareValue12 = createCommonJsModule(
    (middlewareParam11, middlewareParam12) => {
      ((middlewareParam12.exports = middlewareHelper11(middlewareHelper12)),
        (middlewareParam12.exports.find = middlewareParam12.exports),
        (middlewareParam12.exports.replace = function (
          middlewareParam134,
          middlewareParam135,
          middlewareParam136,
          middlewareParam137,
        ) {
          return (
            middlewareHelper11(_middlewareH).call(
              this,
              middlewareParam134,
              middlewareParam135,
              middlewareParam136,
              middlewareParam137,
            ),
            middlewareParam134
          );
        }),
        (middlewareParam12.exports.del = function (
          middlewareParam129,
          middlewareParam130,
          middlewareParam131,
        ) {
          return (
            middlewareHelper11(middlewareHelper13).call(
              this,
              middlewareParam129,
              middlewareParam130,
              null,
              middlewareParam131,
            ),
            middlewareParam129
          );
        }));
      function middlewareHelper11(middlewareParam24) {
        return function (
          middlewareParam28,
          middlewareParam29,
          middlewareParam30,
          middlewareParam31,
        ) {
          var __middlewareH =
            middlewareParam31 &&
            middlewareHelper15(middlewareParam31.normalizer)
              ? middlewareParam31.normalizer
              : middlewareHelper14;
          middlewareParam29 = __middlewareH(middlewareParam29);
          for (var middlewareValue95, _middlewareM = !1; !_middlewareM; )
            middlewareHelper23();
          function middlewareHelper23() {
            for (middlewareValue95 in middlewareParam28) {
              var middlewareValue142 = __middlewareH(middlewareValue95);
              if (middlewareParam29.indexOf(middlewareValue142) === 0) {
                var middlewareValue143 = middlewareParam29.substr(
                  middlewareValue142.length,
                );
                if (
                  middlewareValue143.charAt(0) === `.` ||
                  middlewareValue143.length === 0
                ) {
                  middlewareParam29 = middlewareValue143.substr(1);
                  var middlewareValue144 = middlewareParam28[middlewareValue95];
                  if (middlewareValue144 == null) {
                    _middlewareM = !0;
                    return;
                  }
                  if (!middlewareParam29.length) {
                    _middlewareM = !0;
                    return;
                  }
                  middlewareParam28 = middlewareValue144;
                  return;
                }
              }
            }
            ((middlewareValue95 = void 0), (_middlewareM = !0));
          }
          if (middlewareValue95)
            return middlewareParam28 == null
              ? middlewareParam28
              : middlewareParam24(
                  middlewareParam28,
                  middlewareValue95,
                  middlewareParam30,
                );
        };
      }
      function middlewareHelper12(middlewareParam138, middlewareParam139) {
        if (middlewareParam138.hasOwnProperty(middlewareParam139))
          return middlewareParam138[middlewareParam139];
      }
      function middlewareHelper13(middlewareParam119, middlewareParam120) {
        return (
          middlewareParam119.hasOwnProperty(middlewareParam120) &&
            delete middlewareParam119[middlewareParam120],
          middlewareParam119
        );
      }
      function _middlewareH(
        middlewareParam121,
        middlewareParam122,
        middlewareParam123,
      ) {
        return (
          middlewareParam121.hasOwnProperty(middlewareParam122) &&
            (middlewareParam121[middlewareParam122] = middlewareParam123),
          middlewareParam121
        );
      }
      function middlewareHelper14(middlewareParam114) {
        return middlewareParam114.replace(/[^a-zA-Z0-9\.]+/g, ``).toLowerCase();
      }
      function middlewareHelper15(middlewareParam154) {
        return typeof middlewareParam154 == `function`;
      }
    },
  ),
  middlewareValue13 = createCommonJsModule((middlewareParam16) => {
    var middlewareValue76 =
      (middlewareParam16 && middlewareParam16.__importDefault) ||
      function (middlewareParam141) {
        return middlewareParam141 && middlewareParam141.__esModule
          ? middlewareParam141
          : {
              default: middlewareParam141,
            };
      };
    Object.defineProperty(middlewareParam16, `__esModule`, {
      value: !0,
    });
    var middlewareValue77 = middlewareValue76(middlewareValue12());
    function middlewareHelper19(middlewareParam38, middlewareParam39) {
      return function () {
        var middlewareValue111 = this.traits(),
          middlewareValue112 = this.properties ? this.properties() : {};
        return (
          middlewareValue77.default(
            middlewareValue111,
            `address.` + middlewareParam38,
          ) ||
          middlewareValue77.default(middlewareValue111, middlewareParam38) ||
          (middlewareParam39
            ? middlewareValue77.default(
                middlewareValue111,
                `address.` + middlewareParam39,
              )
            : null) ||
          (middlewareParam39
            ? middlewareValue77.default(middlewareValue111, middlewareParam39)
            : null) ||
          middlewareValue77.default(
            middlewareValue112,
            `address.` + middlewareParam38,
          ) ||
          middlewareValue77.default(middlewareValue112, middlewareParam38) ||
          (middlewareParam39
            ? middlewareValue77.default(
                middlewareValue112,
                `address.` + middlewareParam39,
              )
            : null) ||
          (middlewareParam39
            ? middlewareValue77.default(middlewareValue112, middlewareParam39)
            : null)
        );
      };
    }
    function middlewareHelper20(middlewareParam79) {
      ((middlewareParam79.zip = middlewareHelper19(`postalCode`, `zip`)),
        (middlewareParam79.country = middlewareHelper19(`country`)),
        (middlewareParam79.street = middlewareHelper19(`street`)),
        (middlewareParam79.state = middlewareHelper19(`state`)),
        (middlewareParam79.city = middlewareHelper19(`city`)),
        (middlewareParam79.region = middlewareHelper19(`region`)));
    }
    middlewareParam16.default = middlewareHelper20;
  }),
  middlewareValue14 = createCommonJsModule((middlewareParam32) => {
    (Object.defineProperty(middlewareParam32, `__esModule`, {
      value: !0,
    }),
      (middlewareParam32.clone = void 0));
    function middlewareHelper24(middlewareParam48) {
      if (typeof middlewareParam48 != `object`) return middlewareParam48;
      if (
        Object.prototype.toString.call(middlewareParam48) === `[object Object]`
      ) {
        var middlewareValue123 = {};
        for (var middlewareValue124 in middlewareParam48)
          Object.prototype.hasOwnProperty.call(
            middlewareParam48,
            middlewareValue124,
          ) &&
            (middlewareValue123[middlewareValue124] = middlewareHelper24(
              middlewareParam48[middlewareValue124],
            ));
        return middlewareValue123;
      } else if (Array.isArray(middlewareParam48))
        return middlewareParam48.map(middlewareHelper24);
      else return middlewareParam48;
    }
    middlewareParam32.clone = middlewareHelper24;
  }),
  middlewareValue15 = createCommonJsModule((middlewareParam94) => {
    Object.defineProperty(middlewareParam94, `__esModule`, {
      value: !0,
    });
    var middlewareValue197 = {
      Salesforce: !0,
    };
    function middlewareHelper36(middlewareParam184) {
      return !middlewareValue197[middlewareParam184];
    }
    middlewareParam94.default = middlewareHelper36;
  }),
  middlewareValue16 = createCommonJsModule((middlewareParam15) => {
    var middlewareValue71 =
      /^(\d{4})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:([ T])(\d{2}):?(\d{2})(?::?(\d{2})(?:[,\.](\d{1,}))?)?(?:(Z)|([+\-])(\d{2})(?::?(\d{2}))?)?)?$/;
    ((middlewareParam15.parse = function (middlewareParam21) {
      var middlewareValue86 = [1, 5, 6, 7, 11, 12],
        middlewareValue87 = middlewareValue71.exec(middlewareParam21),
        middlewareValue88 = 0;
      if (!middlewareValue87) return new Date(middlewareParam21);
      for (
        var _middlewareH = 0, middlewareValue89;
        (middlewareValue89 = middlewareValue86[_middlewareH]);
        _middlewareH++
      )
        middlewareValue87[middlewareValue89] =
          parseInt(middlewareValue87[middlewareValue89], 10) || 0;
      ((middlewareValue87[2] = parseInt(middlewareValue87[2], 10) || 1),
        (middlewareValue87[3] = parseInt(middlewareValue87[3], 10) || 1),
        middlewareValue87[2]--,
        (middlewareValue87[8] = middlewareValue87[8]
          ? (middlewareValue87[8] + `00`).substring(0, 3)
          : 0),
        middlewareValue87[4] === ` `
          ? (middlewareValue88 = new Date().getTimezoneOffset())
          : middlewareValue87[9] !== `Z` &&
            middlewareValue87[10] &&
            ((middlewareValue88 =
              middlewareValue87[11] * 60 + middlewareValue87[12]),
            middlewareValue87[10] === `+` &&
              (middlewareValue88 = 0 - middlewareValue88)));
      var middlewareValue90 = Date.UTC(
        middlewareValue87[1],
        middlewareValue87[2],
        middlewareValue87[3],
        middlewareValue87[5],
        middlewareValue87[6] + middlewareValue88,
        middlewareValue87[7],
        middlewareValue87[8],
      );
      return new Date(middlewareValue90);
    }),
      (middlewareParam15.is = function (
        middlewareParam100,
        middlewareParam101,
      ) {
        return typeof middlewareParam100 != `string` ||
          (middlewareParam101 &&
            /^\d{4}-\d{2}-\d{2}/.test(middlewareParam100) === !1)
          ? !1
          : middlewareValue71.test(middlewareParam100);
      }));
  }),
  middlewareValue17 = createCommonJsModule((middlewareParam95) => {
    var middlewareValue198 = /\d{13}/;
    ((middlewareParam95.is = function (middlewareParam181) {
      return middlewareValue198.test(middlewareParam181);
    }),
      (middlewareParam95.parse = function (middlewareParam152) {
        return (
          (middlewareParam152 = parseInt(middlewareParam152, 10)),
          new Date(middlewareParam152)
        );
      }));
  }),
  middlewareValue18 = createCommonJsModule((middlewareParam87) => {
    var middlewareValue190 = /\d{10}/;
    ((middlewareParam87.is = function (middlewareParam182) {
      return middlewareValue190.test(middlewareParam182);
    }),
      (middlewareParam87.parse = function (middlewareParam125) {
        var middlewareValue220 = parseInt(middlewareParam125, 10) * 1e3;
        return new Date(middlewareValue220);
      }));
  }),
  middlewareValue19 = createCommonJsModule(
    (middlewareParam33, middlewareParam34) => {
      var middlewareValue97 = middlewareValue16(),
        middlewareValue98 = middlewareValue17(),
        middlewareValue99 = middlewareValue18(),
        _middlewareH = Object.prototype.toString;
      function middlewareHelper25(middlewareParam142) {
        return _middlewareH.call(middlewareParam142) === `[object Date]`;
      }
      function middlewareHelper26(middlewareParam140) {
        return _middlewareH.call(middlewareParam140) === `[object Number]`;
      }
      middlewareParam34.exports = function (middlewareParam92) {
        return middlewareHelper25(middlewareParam92)
          ? middlewareParam92
          : middlewareHelper26(middlewareParam92)
            ? new Date(middlewareHelper27(middlewareParam92))
            : middlewareValue97.is(middlewareParam92)
              ? middlewareValue97.parse(middlewareParam92)
              : middlewareValue98.is(middlewareParam92)
                ? middlewareValue98.parse(middlewareParam92)
                : middlewareValue99.is(middlewareParam92)
                  ? middlewareValue99.parse(middlewareParam92)
                  : new Date(middlewareParam92);
      };
      function middlewareHelper27(middlewareParam155) {
        return middlewareParam155 < 315576e5
          ? middlewareParam155 * 1e3
          : middlewareParam155;
      }
    },
  ),
  middlewareValue20 = createCommonJsModule(
    (middlewareParam42, middlewareParam43) => {
      var middlewareValue110 = middlewareValue16();
      middlewareParam43.exports = middlewareHelper28;
      function middlewareHelper28(middlewareParam90, middlewareParam91) {
        return (
          middlewareParam91 === void 0 && (middlewareParam91 = !0),
          middlewareParam90 && typeof middlewareParam90 == `object`
            ? middlewareHelper29(middlewareParam90, middlewareParam91)
            : Array.isArray(middlewareParam90)
              ? _middlewareH(middlewareParam90, middlewareParam91)
              : middlewareValue110.is(middlewareParam90, middlewareParam91)
                ? middlewareValue110.parse(middlewareParam90)
                : middlewareParam90
        );
      }
      function middlewareHelper29(middlewareParam111, middlewareParam112) {
        return (
          Object.keys(middlewareParam111).forEach(function (item) {
            middlewareParam111[item] = middlewareHelper28(
              middlewareParam111[item],
              middlewareParam112,
            );
          }),
          middlewareParam111
        );
      }
      function _middlewareH(middlewareParam115, middlewareParam116) {
        return (
          middlewareParam115.forEach(function (item, index) {
            middlewareParam115[index] = middlewareHelper28(
              item,
              middlewareParam116,
            );
          }),
          middlewareParam115
        );
      }
    },
  ),
  middlewareValue21 = createCommonJsModule((middlewareParam2) => {
    var middlewareValue38 =
      (middlewareParam2 && middlewareParam2.__importDefault) ||
      function (middlewareParam143) {
        return middlewareParam143 && middlewareParam143.__esModule
          ? middlewareParam143
          : {
              default: middlewareParam143,
            };
      };
    (Object.defineProperty(middlewareParam2, `__esModule`, {
      value: !0,
    }),
      (middlewareParam2.Facade = void 0));
    var middlewareValue39 = middlewareValue38(middlewareValue13()),
      middlewareValue40 = middlewareValue14(),
      middlewareValue41 = middlewareValue38(middlewareValue15()),
      _middlewareH = middlewareValue38(middlewareValue19()),
      middlewareValue42 = middlewareValue38(middlewareValue12()),
      middlewareValue43 = middlewareValue38(middlewareValue20());
    function middlewareHelper4(middlewareParam50, middlewareParam51) {
      ((middlewareParam51 ||= {}),
        (this.raw = middlewareValue40.clone(middlewareParam50)),
        `clone` in middlewareParam51 || (middlewareParam51.clone = !0),
        middlewareParam51.clone &&
          (middlewareParam50 = middlewareValue40.clone(middlewareParam50)),
        `traverse` in middlewareParam51 || (middlewareParam51.traverse = !0),
        `timestamp` in middlewareParam50
          ? (middlewareParam50.timestamp = _middlewareH.default(
              middlewareParam50.timestamp,
            ))
          : (middlewareParam50.timestamp = new Date()),
        middlewareParam51.traverse &&
          middlewareValue43.default(middlewareParam50),
        (this.opts = middlewareParam51),
        (this.obj = middlewareParam50));
    }
    middlewareParam2.Facade = middlewareHelper4;
    var _middlewareM = middlewareHelper4.prototype;
    ((_middlewareM.proxy = function (middlewareParam65) {
      var middlewareValue162 = middlewareParam65.split(`.`);
      middlewareParam65 = middlewareValue162.shift();
      var middlewareValue163 =
        this[middlewareParam65] || this.obj[middlewareParam65];
      return (
        middlewareValue163 &&
        (typeof middlewareValue163 == `function` &&
          (middlewareValue163 = middlewareValue163.call(this) || {}),
        middlewareValue162.length === 0 ||
          (middlewareValue163 = middlewareValue42.default(
            middlewareValue163,
            middlewareValue162.join(`.`),
          )),
        this.opts.clone
          ? middlewareHelper5(middlewareValue163)
          : middlewareValue163)
      );
    }),
      (_middlewareM.field = function (middlewareParam118) {
        var middlewareValue217 = this.obj[middlewareParam118];
        return this.opts.clone
          ? middlewareHelper5(middlewareValue217)
          : middlewareValue217;
      }),
      (middlewareHelper4.proxy = function (middlewareParam132) {
        return function () {
          return this.proxy(middlewareParam132);
        };
      }),
      (middlewareHelper4.field = function (middlewareParam133) {
        return function () {
          return this.field(middlewareParam133);
        };
      }),
      (middlewareHelper4.multi = function (middlewareParam69) {
        return function () {
          var middlewareValue185 = this.proxy(middlewareParam69 + `s`);
          if (Array.isArray(middlewareValue185)) return middlewareValue185;
          var middlewareValue186 = this.proxy(middlewareParam69);
          return (
            (middlewareValue186 &&= [
              this.opts.clone
                ? middlewareValue40.clone(middlewareValue186)
                : middlewareValue186,
            ]),
            middlewareValue186 || []
          );
        };
      }),
      (middlewareHelper4.one = function (middlewareParam82) {
        return function () {
          var middlewareValue205 = this.proxy(middlewareParam82);
          if (middlewareValue205) return middlewareValue205;
          var middlewareValue206 = this.proxy(middlewareParam82 + `s`);
          if (Array.isArray(middlewareValue206)) return middlewareValue206[0];
        };
      }),
      (_middlewareM.json = function () {
        var middlewareValue207 = this.opts.clone
          ? middlewareValue40.clone(this.obj)
          : this.obj;
        return (
          this.type && (middlewareValue207.type = this.type()),
          middlewareValue207
        );
      }),
      (_middlewareM.rawEvent = function () {
        return this.raw;
      }),
      (_middlewareM.options = function (middlewareParam47) {
        var middlewareValue120 = this.obj.options || this.obj.context || {},
          middlewareValue121 = this.opts.clone
            ? middlewareValue40.clone(middlewareValue120)
            : middlewareValue120;
        if (!middlewareParam47) return middlewareValue121;
        if (this.enabled(middlewareParam47)) {
          var middlewareValue122 = this.integrations(),
            __middlewareH =
              middlewareValue122[middlewareParam47] ||
              middlewareValue42.default(middlewareValue122, middlewareParam47);
          return (
            typeof __middlewareH != `object` &&
              (__middlewareH = middlewareValue42.default(
                this.options(),
                middlewareParam47,
              )),
            typeof __middlewareH == `object` ? __middlewareH : {}
          );
        }
      }),
      (_middlewareM.context = _middlewareM.options),
      (_middlewareM.enabled = function (middlewareParam23) {
        var middlewareValue91 = this.proxy(`options.providers.all`);
        (typeof middlewareValue91 != `boolean` &&
          (middlewareValue91 = this.proxy(`options.all`)),
          typeof middlewareValue91 != `boolean` &&
            (middlewareValue91 = this.proxy(`integrations.all`)),
          typeof middlewareValue91 != `boolean` && (middlewareValue91 = !0));
        var middlewareValue92 =
            middlewareValue91 && middlewareValue41.default(middlewareParam23),
          middlewareValue93 = this.integrations();
        if (
          (middlewareValue93.providers &&
            middlewareValue93.providers.hasOwnProperty(middlewareParam23) &&
            (middlewareValue92 =
              middlewareValue93.providers[middlewareParam23]),
          middlewareValue93.hasOwnProperty(middlewareParam23))
        ) {
          var __middlewareH = middlewareValue93[middlewareParam23];
          middlewareValue92 =
            typeof __middlewareH == `boolean` ? __middlewareH : !0;
        }
        return !!middlewareValue92;
      }),
      (_middlewareM.integrations = function () {
        return (
          this.obj.integrations ||
          this.proxy(`options.providers`) ||
          this.options()
        );
      }),
      (_middlewareM.active = function () {
        var middlewareValue216 = this.proxy(`options.active`);
        return ((middlewareValue216 ??= !0), middlewareValue216);
      }),
      (_middlewareM.anonymousId = function () {
        return this.field(`anonymousId`) || this.field(`sessionId`);
      }),
      (_middlewareM.sessionId = _middlewareM.anonymousId),
      (_middlewareM.groupId = middlewareHelper4.proxy(`options.groupId`)),
      (_middlewareM.traits = function (middlewareParam46) {
        var middlewareValue116 = this.proxy(`options.traits`) || {},
          middlewareValue117 = this.userId();
        for (var middlewareValue118 in ((middlewareParam46 ||= {}),
        middlewareValue117 && (middlewareValue116.id = middlewareValue117),
        middlewareParam46))
          if (
            Object.prototype.hasOwnProperty.call(
              middlewareParam46,
              middlewareValue118,
            )
          ) {
            var middlewareValue119 =
              this[middlewareValue118] == null
                ? this.proxy(`options.traits.` + middlewareValue118)
                : this[middlewareValue118]();
            if (middlewareValue119 == null) continue;
            ((middlewareValue116[middlewareParam46[middlewareValue118]] =
              middlewareValue119),
              delete middlewareValue116[middlewareValue118]);
          }
        return middlewareValue116;
      }),
      (_middlewareM.library = function () {
        var middlewareValue187 = this.proxy(`options.library`);
        return middlewareValue187
          ? typeof middlewareValue187 == `string`
            ? {
                name: middlewareValue187,
                version: null,
              }
            : middlewareValue187
          : {
              name: `unknown`,
              version: null,
            };
      }),
      (_middlewareM.device = function () {
        var middlewareValue149 = this.proxy(`context.device`);
        (typeof middlewareValue149 != `object` || !middlewareValue149) &&
          (middlewareValue149 = {});
        var middlewareValue150 = this.library().name;
        return middlewareValue149.type
          ? middlewareValue149
          : (middlewareValue150.indexOf(`ios`) > -1 &&
              (middlewareValue149.type = `ios`),
            middlewareValue150.indexOf(`android`) > -1 &&
              (middlewareValue149.type = `android`),
            middlewareValue149);
      }),
      (_middlewareM.userAgent = middlewareHelper4.proxy(`context.userAgent`)),
      (_middlewareM.timezone = middlewareHelper4.proxy(`context.timezone`)),
      (_middlewareM.timestamp = middlewareHelper4.field(`timestamp`)),
      (_middlewareM.channel = middlewareHelper4.field(`channel`)),
      (_middlewareM.ip = middlewareHelper4.proxy(`context.ip`)),
      (_middlewareM.userId = middlewareHelper4.field(`userId`)),
      middlewareValue39.default(_middlewareM));
    function middlewareHelper5(middlewareParam179) {
      return middlewareValue40.clone(middlewareParam179);
    }
  }),
  middlewareValue22 = createCommonJsModule(
    (middlewareParam35, middlewareParam36) => {
      typeof Object.create == `function`
        ? (middlewareParam36.exports = function (
            middlewareParam80,
            middlewareParam81,
          ) {
            middlewareParam81 &&
              ((middlewareParam80.super_ = middlewareParam81),
              (middlewareParam80.prototype = Object.create(
                middlewareParam81.prototype,
                {
                  constructor: {
                    value: middlewareParam80,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0,
                  },
                },
              )));
          })
        : (middlewareParam36.exports = function (
            middlewareParam88,
            middlewareParam89,
          ) {
            if (middlewareParam89) {
              middlewareParam88.super_ = middlewareParam89;
              var middlewareValue191 = function () {};
              ((middlewareValue191.prototype = middlewareParam89.prototype),
                (middlewareParam88.prototype = new middlewareValue191()),
                (middlewareParam88.prototype.constructor = middlewareParam88));
            }
          });
    },
  ),
  middlewareValue23 = createCommonJsModule((middlewareParam20) => {
    var middlewareValue82 =
      (middlewareParam20 && middlewareParam20.__importDefault) ||
      function (middlewareParam144) {
        return middlewareParam144 && middlewareParam144.__esModule
          ? middlewareParam144
          : {
              default: middlewareParam144,
            };
      };
    (Object.defineProperty(middlewareParam20, `__esModule`, {
      value: !0,
    }),
      (middlewareParam20.Alias = void 0));
    var middlewareValue83 = middlewareValue82(middlewareValue22()),
      middlewareValue84 = middlewareValue21();
    function middlewareHelper22(middlewareParam156, middlewareParam157) {
      middlewareValue84.Facade.call(
        this,
        middlewareParam156,
        middlewareParam157,
      );
    }
    ((middlewareParam20.Alias = middlewareHelper22),
      middlewareValue83.default(middlewareHelper22, middlewareValue84.Facade),
      (middlewareHelper22.prototype.action = function () {
        return `alias`;
      }),
      (middlewareHelper22.prototype.type = middlewareHelper22.prototype.action),
      (middlewareHelper22.prototype.previousId = function () {
        return this.field(`previousId`) || this.field(`from`);
      }),
      (middlewareHelper22.prototype.from =
        middlewareHelper22.prototype.previousId),
      (middlewareHelper22.prototype.userId = function () {
        return this.field(`userId`) || this.field(`to`);
      }),
      (middlewareHelper22.prototype.to = middlewareHelper22.prototype.userId));
  }),
  middlewareValue24 = createCommonJsModule((middlewareParam93) => {
    Object.defineProperty(middlewareParam93, `__esModule`, {
      value: !0,
    });
    var middlewareValue193 = /.+\@.+\..+/;
    function middlewareHelper35(middlewareParam180) {
      return middlewareValue193.test(middlewareParam180);
    }
    middlewareParam93.default = middlewareHelper35;
  }),
  middlewareValue25 = createCommonJsModule((middlewareParam6) => {
    var middlewareValue62 =
      (middlewareParam6 && middlewareParam6.__importDefault) ||
      function (middlewareParam145) {
        return middlewareParam145 && middlewareParam145.__esModule
          ? middlewareParam145
          : {
              default: middlewareParam145,
            };
      };
    (Object.defineProperty(middlewareParam6, `__esModule`, {
      value: !0,
    }),
      (middlewareParam6.Group = void 0));
    var middlewareValue63 = middlewareValue62(middlewareValue22()),
      middlewareValue64 = middlewareValue62(middlewareValue24()),
      middlewareValue65 = middlewareValue62(middlewareValue19()),
      _middlewareH = middlewareValue21();
    function middlewareHelper8(middlewareParam158, middlewareParam159) {
      _middlewareH.Facade.call(this, middlewareParam158, middlewareParam159);
    }
    ((middlewareParam6.Group = middlewareHelper8),
      middlewareValue63.default(middlewareHelper8, _middlewareH.Facade));
    var middlewareValue66 = middlewareHelper8.prototype;
    ((middlewareValue66.action = function () {
      return `group`;
    }),
      (middlewareValue66.type = middlewareValue66.action),
      (middlewareValue66.groupId = _middlewareH.Facade.field(`groupId`)),
      (middlewareValue66.created = function () {
        var middlewareValue165 =
          this.proxy(`traits.createdAt`) ||
          this.proxy(`traits.created`) ||
          this.proxy(`properties.createdAt`) ||
          this.proxy(`properties.created`);
        if (middlewareValue165)
          return middlewareValue65.default(middlewareValue165);
      }),
      (middlewareValue66.email = function () {
        var middlewareValue200 = this.proxy(`traits.email`);
        if (middlewareValue200) return middlewareValue200;
        var middlewareValue201 = this.groupId();
        if (middlewareValue64.default(middlewareValue201))
          return middlewareValue201;
      }),
      (middlewareValue66.traits = function (middlewareParam52) {
        var middlewareValue125 = this.properties(),
          middlewareValue126 = this.groupId();
        for (var middlewareValue127 in ((middlewareParam52 ||= {}),
        middlewareValue126 && (middlewareValue125.id = middlewareValue126),
        middlewareParam52))
          if (
            Object.prototype.hasOwnProperty.call(
              middlewareParam52,
              middlewareValue127,
            )
          ) {
            var middlewareValue128 =
              this[middlewareValue127] == null
                ? this.proxy(`traits.` + middlewareValue127)
                : this[middlewareValue127]();
            if (middlewareValue128 == null) continue;
            ((middlewareValue125[middlewareParam52[middlewareValue127]] =
              middlewareValue128),
              delete middlewareValue125[middlewareValue127]);
          }
        return middlewareValue125;
      }),
      (middlewareValue66.name = _middlewareH.Facade.proxy(`traits.name`)),
      (middlewareValue66.industry =
        _middlewareH.Facade.proxy(`traits.industry`)),
      (middlewareValue66.employees =
        _middlewareH.Facade.proxy(`traits.employees`)),
      (middlewareValue66.properties = function () {
        return this.field(`traits`) || this.field(`properties`) || {};
      }));
  }),
  middlewareValue26 = createCommonJsModule((middlewareParam3) => {
    var middlewareValue44 =
      (middlewareParam3 && middlewareParam3.__importDefault) ||
      function (middlewareParam146) {
        return middlewareParam146 && middlewareParam146.__esModule
          ? middlewareParam146
          : {
              default: middlewareParam146,
            };
      };
    (Object.defineProperty(middlewareParam3, `__esModule`, {
      value: !0,
    }),
      (middlewareParam3.Identify = void 0));
    var middlewareValue45 = middlewareValue21(),
      middlewareValue46 = middlewareValue44(middlewareValue12()),
      middlewareValue47 = middlewareValue44(middlewareValue22()),
      _middlewareH = middlewareValue44(middlewareValue24()),
      middlewareValue48 = middlewareValue44(middlewareValue19()),
      middlewareValue49 = function (middlewareParam183) {
        return middlewareParam183.trim();
      };
    function middlewareHelper6(middlewareParam160, middlewareParam161) {
      middlewareValue45.Facade.call(
        this,
        middlewareParam160,
        middlewareParam161,
      );
    }
    ((middlewareParam3.Identify = middlewareHelper6),
      middlewareValue47.default(middlewareHelper6, middlewareValue45.Facade));
    var _middlewareM = middlewareHelper6.prototype;
    ((_middlewareM.action = function () {
      return `identify`;
    }),
      (_middlewareM.type = _middlewareM.action),
      (_middlewareM.traits = function (middlewareParam64) {
        var middlewareValue153 = this.field(`traits`) || {},
          middlewareValue154 = this.userId();
        for (var middlewareValue155 in ((middlewareParam64 ||= {}),
        middlewareValue154 && (middlewareValue153.id = middlewareValue154),
        middlewareParam64)) {
          var middlewareValue156 =
            this[middlewareValue155] == null
              ? this.proxy(`traits.` + middlewareValue155)
              : this[middlewareValue155]();
          middlewareValue156 != null &&
            ((middlewareValue153[middlewareParam64[middlewareValue155]] =
              middlewareValue156),
            middlewareValue155 !== middlewareParam64[middlewareValue155] &&
              delete middlewareValue153[middlewareValue155]);
        }
        return middlewareValue153;
      }),
      (_middlewareM.email = function () {
        var middlewareValue202 = this.proxy(`traits.email`);
        if (middlewareValue202) return middlewareValue202;
        var middlewareValue203 = this.userId();
        if (_middlewareH.default(middlewareValue203)) return middlewareValue203;
      }),
      (_middlewareM.created = function () {
        var middlewareValue204 =
          this.proxy(`traits.created`) || this.proxy(`traits.createdAt`);
        if (middlewareValue204)
          return middlewareValue48.default(middlewareValue204);
      }),
      (_middlewareM.companyCreated = function () {
        var middlewareValue192 =
          this.proxy(`traits.company.created`) ||
          this.proxy(`traits.company.createdAt`);
        if (middlewareValue192)
          return middlewareValue48.default(middlewareValue192);
      }),
      (_middlewareM.companyName = function () {
        return this.proxy(`traits.company.name`);
      }),
      (_middlewareM.name = function () {
        var middlewareValue178 = this.proxy(`traits.name`);
        if (typeof middlewareValue178 == `string`)
          return middlewareValue49(middlewareValue178);
        var middlewareValue179 = this.firstName(),
          middlewareValue180 = this.lastName();
        if (middlewareValue179 && middlewareValue180)
          return middlewareValue49(
            middlewareValue179 + ` ` + middlewareValue180,
          );
      }),
      (_middlewareM.firstName = function () {
        var middlewareValue169 = this.proxy(`traits.firstName`);
        if (typeof middlewareValue169 == `string`)
          return middlewareValue49(middlewareValue169);
        var middlewareValue170 = this.proxy(`traits.name`);
        if (typeof middlewareValue170 == `string`)
          return middlewareValue49(middlewareValue170).split(` `)[0];
      }),
      (_middlewareM.lastName = function () {
        var middlewareValue157 = this.proxy(`traits.lastName`);
        if (typeof middlewareValue157 == `string`)
          return middlewareValue49(middlewareValue157);
        var middlewareValue158 = this.proxy(`traits.name`);
        if (typeof middlewareValue158 == `string`) {
          var middlewareValue159 =
            middlewareValue49(middlewareValue158).indexOf(` `);
          if (middlewareValue159 !== -1)
            return middlewareValue49(
              middlewareValue158.substr(middlewareValue159 + 1),
            );
        }
      }),
      (_middlewareM.uid = function () {
        return this.userId() || this.username() || this.email();
      }),
      (_middlewareM.description = function () {
        return (
          this.proxy(`traits.description`) || this.proxy(`traits.background`)
        );
      }),
      (_middlewareM.age = function () {
        var middlewareValue171 = this.birthday(),
          middlewareValue172 = middlewareValue46.default(this.traits(), `age`);
        if (middlewareValue172 != null) return middlewareValue172;
        if (middlewareValue171 instanceof Date)
          return new Date().getFullYear() - middlewareValue171.getFullYear();
      }),
      (_middlewareM.avatar = function () {
        var middlewareValue199 = this.traits();
        return (
          middlewareValue46.default(middlewareValue199, `avatar`) ||
          middlewareValue46.default(middlewareValue199, `photoUrl`) ||
          middlewareValue46.default(middlewareValue199, `avatarUrl`)
        );
      }),
      (_middlewareM.position = function () {
        var middlewareValue208 = this.traits();
        return (
          middlewareValue46.default(middlewareValue208, `position`) ||
          middlewareValue46.default(middlewareValue208, `jobTitle`)
        );
      }),
      (_middlewareM.username =
        middlewareValue45.Facade.proxy(`traits.username`)),
      (_middlewareM.website = middlewareValue45.Facade.one(`traits.website`)),
      (_middlewareM.websites =
        middlewareValue45.Facade.multi(`traits.website`)),
      (_middlewareM.phone = middlewareValue45.Facade.one(`traits.phone`)),
      (_middlewareM.phones = middlewareValue45.Facade.multi(`traits.phone`)),
      (_middlewareM.address = middlewareValue45.Facade.proxy(`traits.address`)),
      (_middlewareM.gender = middlewareValue45.Facade.proxy(`traits.gender`)),
      (_middlewareM.birthday =
        middlewareValue45.Facade.proxy(`traits.birthday`)));
  }),
  middlewareValue27 = createCommonJsModule((middlewareParam1) => {
    var middlewareValue32 =
      (middlewareParam1 && middlewareParam1.__importDefault) ||
      function (middlewareParam147) {
        return middlewareParam147 && middlewareParam147.__esModule
          ? middlewareParam147
          : {
              default: middlewareParam147,
            };
      };
    (Object.defineProperty(middlewareParam1, `__esModule`, {
      value: !0,
    }),
      (middlewareParam1.Track = void 0));
    var middlewareValue33 = middlewareValue32(middlewareValue22()),
      middlewareValue34 = middlewareValue21(),
      middlewareValue35 = middlewareValue26(),
      _middlewareH = middlewareValue32(middlewareValue24()),
      middlewareValue36 = middlewareValue32(middlewareValue12());
    function middlewareHelper3(middlewareParam162, middlewareParam163) {
      middlewareValue34.Facade.call(
        this,
        middlewareParam162,
        middlewareParam163,
      );
    }
    ((middlewareParam1.Track = middlewareHelper3),
      middlewareValue33.default(middlewareHelper3, middlewareValue34.Facade));
    var middlewareValue37 = middlewareHelper3.prototype;
    ((middlewareValue37.action = function () {
      return `track`;
    }),
      (middlewareValue37.type = middlewareValue37.action),
      (middlewareValue37.event = middlewareValue34.Facade.field(`event`)),
      (middlewareValue37.value =
        middlewareValue34.Facade.proxy(`properties.value`)),
      (middlewareValue37.category =
        middlewareValue34.Facade.proxy(`properties.category`)),
      (middlewareValue37.id = middlewareValue34.Facade.proxy(`properties.id`)),
      (middlewareValue37.productId = function () {
        return (
          this.proxy(`properties.product_id`) ||
          this.proxy(`properties.productId`)
        );
      }),
      (middlewareValue37.promotionId = function () {
        return (
          this.proxy(`properties.promotion_id`) ||
          this.proxy(`properties.promotionId`)
        );
      }),
      (middlewareValue37.cartId = function () {
        return (
          this.proxy(`properties.cart_id`) || this.proxy(`properties.cartId`)
        );
      }),
      (middlewareValue37.checkoutId = function () {
        return (
          this.proxy(`properties.checkout_id`) ||
          this.proxy(`properties.checkoutId`)
        );
      }),
      (middlewareValue37.paymentId = function () {
        return (
          this.proxy(`properties.payment_id`) ||
          this.proxy(`properties.paymentId`)
        );
      }),
      (middlewareValue37.couponId = function () {
        return (
          this.proxy(`properties.coupon_id`) ||
          this.proxy(`properties.couponId`)
        );
      }),
      (middlewareValue37.wishlistId = function () {
        return (
          this.proxy(`properties.wishlist_id`) ||
          this.proxy(`properties.wishlistId`)
        );
      }),
      (middlewareValue37.reviewId = function () {
        return (
          this.proxy(`properties.review_id`) ||
          this.proxy(`properties.reviewId`)
        );
      }),
      (middlewareValue37.orderId = function () {
        return (
          this.proxy(`properties.id`) ||
          this.proxy(`properties.order_id`) ||
          this.proxy(`properties.orderId`)
        );
      }),
      (middlewareValue37.sku =
        middlewareValue34.Facade.proxy(`properties.sku`)),
      (middlewareValue37.tax =
        middlewareValue34.Facade.proxy(`properties.tax`)),
      (middlewareValue37.name =
        middlewareValue34.Facade.proxy(`properties.name`)),
      (middlewareValue37.price =
        middlewareValue34.Facade.proxy(`properties.price`)),
      (middlewareValue37.total =
        middlewareValue34.Facade.proxy(`properties.total`)),
      (middlewareValue37.repeat =
        middlewareValue34.Facade.proxy(`properties.repeat`)),
      (middlewareValue37.coupon =
        middlewareValue34.Facade.proxy(`properties.coupon`)),
      (middlewareValue37.shipping =
        middlewareValue34.Facade.proxy(`properties.shipping`)),
      (middlewareValue37.discount =
        middlewareValue34.Facade.proxy(`properties.discount`)),
      (middlewareValue37.shippingMethod = function () {
        return (
          this.proxy(`properties.shipping_method`) ||
          this.proxy(`properties.shippingMethod`)
        );
      }),
      (middlewareValue37.paymentMethod = function () {
        return (
          this.proxy(`properties.payment_method`) ||
          this.proxy(`properties.paymentMethod`)
        );
      }),
      (middlewareValue37.description = middlewareValue34.Facade.proxy(
        `properties.description`,
      )),
      (middlewareValue37.plan =
        middlewareValue34.Facade.proxy(`properties.plan`)),
      (middlewareValue37.subtotal = function () {
        var middlewareValue133 = middlewareValue36.default(
            this.properties(),
            `subtotal`,
          ),
          middlewareValue134 = this.total() || this.revenue();
        if (middlewareValue133) return middlewareValue133;
        if (!middlewareValue134) return 0;
        if (this.total()) {
          var middlewareValue135 = this.tax();
          (middlewareValue135 && (middlewareValue134 -= middlewareValue135),
            (middlewareValue135 = this.shipping()),
            middlewareValue135 && (middlewareValue134 -= middlewareValue135),
            (middlewareValue135 = this.discount()),
            middlewareValue135 && (middlewareValue134 += middlewareValue135));
        }
        return middlewareValue134;
      }),
      (middlewareValue37.products = function () {
        var middlewareValue188 = this.properties(),
          middlewareValue189 = middlewareValue36.default(
            middlewareValue188,
            `products`,
          );
        return Array.isArray(middlewareValue189)
          ? middlewareValue189.filter(function (item) {
              return item !== null;
            })
          : [];
      }),
      (middlewareValue37.quantity = function () {
        return (this.obj.properties || {}).quantity || 1;
      }),
      (middlewareValue37.currency = function () {
        return (this.obj.properties || {}).currency || `USD`;
      }),
      (middlewareValue37.referrer = function () {
        return (
          this.proxy(`context.referrer.url`) ||
          this.proxy(`context.page.referrer`) ||
          this.proxy(`properties.referrer`)
        );
      }),
      (middlewareValue37.query =
        middlewareValue34.Facade.proxy(`options.query`)),
      (middlewareValue37.properties = function (middlewareParam58) {
        var middlewareValue136 = this.field(`properties`) || {};
        for (var middlewareValue137 in ((middlewareParam58 ||= {}),
        middlewareParam58))
          if (
            Object.prototype.hasOwnProperty.call(
              middlewareParam58,
              middlewareValue137,
            )
          ) {
            var middlewareValue138 =
              this[middlewareValue137] == null
                ? this.proxy(`properties.` + middlewareValue137)
                : this[middlewareValue137]();
            if (middlewareValue138 == null) continue;
            ((middlewareValue136[middlewareParam58[middlewareValue137]] =
              middlewareValue138),
              delete middlewareValue136[middlewareValue137]);
          }
        return middlewareValue136;
      }),
      (middlewareValue37.username = function () {
        return (
          this.proxy(`traits.username`) ||
          this.proxy(`properties.username`) ||
          this.userId() ||
          this.sessionId()
        );
      }),
      (middlewareValue37.email = function () {
        var middlewareValue166 =
          this.proxy(`traits.email`) ||
          this.proxy(`properties.email`) ||
          this.proxy(`options.traits.email`);
        if (middlewareValue166) return middlewareValue166;
        var middlewareValue167 = this.userId();
        if (_middlewareH.default(middlewareValue167)) return middlewareValue167;
      }),
      (middlewareValue37.revenue = function () {
        var middlewareValue160 = this.proxy(`properties.revenue`),
          middlewareValue161 = this.event();
        return (
          !middlewareValue160 &&
            middlewareValue161 &&
            middlewareValue161.match(
              /^[ _]?completed[ _]?order[ _]?|^[ _]?order[ _]?completed[ _]?$/i,
            ) &&
            (middlewareValue160 = this.proxy(`properties.total`)),
          _middlewareM(middlewareValue160)
        );
      }),
      (middlewareValue37.cents = function () {
        var middlewareValue211 = this.revenue();
        return typeof middlewareValue211 == `number`
          ? middlewareValue211 * 100
          : this.value() || 0;
      }),
      (middlewareValue37.identify = function () {
        var middlewareValue209 = this.json();
        return (
          (middlewareValue209.traits = this.traits()),
          new middlewareValue35.Identify(middlewareValue209, this.opts)
        );
      }));
    function _middlewareM(middlewareParam83) {
      if (
        middlewareParam83 &&
        (typeof middlewareParam83 == `number` ||
          (typeof middlewareParam83 == `string` &&
            ((middlewareParam83 = middlewareParam83.replace(/\$/g, ``)),
            (middlewareParam83 = parseFloat(middlewareParam83)),
            !isNaN(middlewareParam83))))
      )
        return middlewareParam83;
    }
  }),
  middlewareValue28 = createCommonJsModule((middlewareParam4) => {
    var middlewareValue50 =
      (middlewareParam4 && middlewareParam4.__importDefault) ||
      function (middlewareParam148) {
        return middlewareParam148 && middlewareParam148.__esModule
          ? middlewareParam148
          : {
              default: middlewareParam148,
            };
      };
    (Object.defineProperty(middlewareParam4, `__esModule`, {
      value: !0,
    }),
      (middlewareParam4.Page = void 0));
    var middlewareValue51 = middlewareValue50(middlewareValue22()),
      middlewareValue52 = middlewareValue21(),
      middlewareValue53 = middlewareValue27(),
      _middlewareH = middlewareValue50(middlewareValue24());
    function middlewareHelper7(middlewareParam164, middlewareParam165) {
      middlewareValue52.Facade.call(
        this,
        middlewareParam164,
        middlewareParam165,
      );
    }
    ((middlewareParam4.Page = middlewareHelper7),
      middlewareValue51.default(middlewareHelper7, middlewareValue52.Facade));
    var middlewareValue54 = middlewareHelper7.prototype;
    ((middlewareValue54.action = function () {
      return `page`;
    }),
      (middlewareValue54.type = middlewareValue54.action),
      (middlewareValue54.category = middlewareValue52.Facade.field(`category`)),
      (middlewareValue54.name = middlewareValue52.Facade.field(`name`)),
      (middlewareValue54.title =
        middlewareValue52.Facade.proxy(`properties.title`)),
      (middlewareValue54.path =
        middlewareValue52.Facade.proxy(`properties.path`)),
      (middlewareValue54.url =
        middlewareValue52.Facade.proxy(`properties.url`)),
      (middlewareValue54.referrer = function () {
        return (
          this.proxy(`context.referrer.url`) ||
          this.proxy(`context.page.referrer`) ||
          this.proxy(`properties.referrer`)
        );
      }),
      (middlewareValue54.properties = function (middlewareParam40) {
        var middlewareValue106 = this.field(`properties`) || {},
          middlewareValue107 = this.category(),
          middlewareValue108 = this.name();
        for (var middlewareValue109 in ((middlewareParam40 ||= {}),
        middlewareValue107 &&
          (middlewareValue106.category = middlewareValue107),
        middlewareValue108 && (middlewareValue106.name = middlewareValue108),
        middlewareParam40))
          if (
            Object.prototype.hasOwnProperty.call(
              middlewareParam40,
              middlewareValue109,
            )
          ) {
            var __middlewareH =
              this[middlewareValue109] == null
                ? this.proxy(`properties.` + middlewareValue109)
                : this[middlewareValue109]();
            if (__middlewareH == null) continue;
            ((middlewareValue106[middlewareParam40[middlewareValue109]] =
              __middlewareH),
              middlewareValue109 !== middlewareParam40[middlewareValue109] &&
                delete middlewareValue106[middlewareValue109]);
          }
        return middlewareValue106;
      }),
      (middlewareValue54.email = function () {
        var middlewareValue183 =
          this.proxy(`context.traits.email`) || this.proxy(`properties.email`);
        if (middlewareValue183) return middlewareValue183;
        var middlewareValue184 = this.userId();
        if (_middlewareH.default(middlewareValue184)) return middlewareValue184;
      }),
      (middlewareValue54.fullName = function () {
        var middlewareValue214 = this.category(),
          middlewareValue215 = this.name();
        return middlewareValue215 && middlewareValue214
          ? middlewareValue214 + ` ` + middlewareValue215
          : middlewareValue215;
      }),
      (middlewareValue54.event = function (middlewareParam124) {
        return middlewareParam124
          ? `Viewed ` + middlewareParam124 + ` Page`
          : `Loaded a Page`;
      }),
      (middlewareValue54.track = function (middlewareParam77) {
        var middlewareValue181 = this.json();
        return (
          (middlewareValue181.event = this.event(middlewareParam77)),
          (middlewareValue181.timestamp = this.timestamp()),
          (middlewareValue181.properties = this.properties()),
          new middlewareValue53.Track(middlewareValue181, this.opts)
        );
      }));
  }),
  middlewareValue29 = createCommonJsModule((middlewareParam19) => {
    var middlewareValue78 =
      (middlewareParam19 && middlewareParam19.__importDefault) ||
      function (middlewareParam149) {
        return middlewareParam149 && middlewareParam149.__esModule
          ? middlewareParam149
          : {
              default: middlewareParam149,
            };
      };
    (Object.defineProperty(middlewareParam19, `__esModule`, {
      value: !0,
    }),
      (middlewareParam19.Screen = void 0));
    var middlewareValue79 = middlewareValue78(middlewareValue22()),
      middlewareValue80 = middlewareValue28(),
      middlewareValue81 = middlewareValue27();
    function _middlewareH(middlewareParam173, middlewareParam174) {
      middlewareValue80.Page.call(this, middlewareParam173, middlewareParam174);
    }
    ((middlewareParam19.Screen = _middlewareH),
      middlewareValue79.default(_middlewareH, middlewareValue80.Page),
      (_middlewareH.prototype.action = function () {
        return `screen`;
      }),
      (_middlewareH.prototype.type = _middlewareH.prototype.action),
      (_middlewareH.prototype.event = function (middlewareParam117) {
        return middlewareParam117
          ? `Viewed ` + middlewareParam117 + ` Screen`
          : `Loaded a Screen`;
      }),
      (_middlewareH.prototype.track = function (middlewareParam78) {
        var middlewareValue182 = this.json();
        return (
          (middlewareValue182.event = this.event(middlewareParam78)),
          (middlewareValue182.timestamp = this.timestamp()),
          (middlewareValue182.properties = this.properties()),
          new middlewareValue81.Track(middlewareValue182, this.opts)
        );
      }));
  }),
  middlewareValue30 = createCommonJsModule((middlewareParam44) => {
    var middlewareValue113 =
      (middlewareParam44 && middlewareParam44.__importDefault) ||
      function (middlewareParam150) {
        return middlewareParam150 && middlewareParam150.__esModule
          ? middlewareParam150
          : {
              default: middlewareParam150,
            };
      };
    (Object.defineProperty(middlewareParam44, `__esModule`, {
      value: !0,
    }),
      (middlewareParam44.Delete = void 0));
    var middlewareValue114 = middlewareValue113(middlewareValue22()),
      middlewareValue115 = middlewareValue21();
    function middlewareHelper30(middlewareParam166, middlewareParam167) {
      middlewareValue115.Facade.call(
        this,
        middlewareParam166,
        middlewareParam167,
      );
    }
    ((middlewareParam44.Delete = middlewareHelper30),
      middlewareValue114.default(middlewareHelper30, middlewareValue115.Facade),
      (middlewareHelper30.prototype.type = function () {
        return `delete`;
      }));
  }),
  middlewareI = createCommonJsModule((middlewareParam5) => {
    var middlewareValue55 =
      (middlewareParam5 && middlewareParam5.__assign) ||
      function () {
        return (
          (middlewareValue55 =
            Object.assign ||
            function (middlewareParam76) {
              for (
                var middlewareValue174,
                  middlewareValue175 = 1,
                  middlewareValue176 = arguments.length;
                middlewareValue175 < middlewareValue176;
                middlewareValue175++
              )
                for (var middlewareValue177 in ((middlewareValue174 =
                  arguments[middlewareValue175]),
                middlewareValue174))
                  Object.prototype.hasOwnProperty.call(
                    middlewareValue174,
                    middlewareValue177,
                  ) &&
                    (middlewareParam76[middlewareValue177] =
                      middlewareValue174[middlewareValue177]);
              return middlewareParam76;
            }),
          middlewareValue55.apply(this, arguments)
        );
      };
    (Object.defineProperty(middlewareParam5, `__esModule`, {
      value: !0,
    }),
      (middlewareParam5.Delete =
        middlewareParam5.Screen =
        middlewareParam5.Page =
        middlewareParam5.Track =
        middlewareParam5.Identify =
        middlewareParam5.Group =
        middlewareParam5.Alias =
        middlewareParam5.Facade =
          void 0));
    var middlewareValue56 = middlewareValue21();
    Object.defineProperty(middlewareParam5, `Facade`, {
      enumerable: !0,
      get: function () {
        return middlewareValue56.Facade;
      },
    });
    var middlewareValue57 = middlewareValue23();
    Object.defineProperty(middlewareParam5, `Alias`, {
      enumerable: !0,
      get: function () {
        return middlewareValue57.Alias;
      },
    });
    var middlewareValue58 = middlewareValue25();
    Object.defineProperty(middlewareParam5, `Group`, {
      enumerable: !0,
      get: function () {
        return middlewareValue58.Group;
      },
    });
    var _middlewareH = middlewareValue26();
    Object.defineProperty(middlewareParam5, `Identify`, {
      enumerable: !0,
      get: function () {
        return _middlewareH.Identify;
      },
    });
    var middlewareValue59 = middlewareValue27();
    Object.defineProperty(middlewareParam5, `Track`, {
      enumerable: !0,
      get: function () {
        return middlewareValue59.Track;
      },
    });
    var middlewareValue60 = middlewareValue28();
    Object.defineProperty(middlewareParam5, `Page`, {
      enumerable: !0,
      get: function () {
        return middlewareValue60.Page;
      },
    });
    var middlewareValue61 = middlewareValue29();
    Object.defineProperty(middlewareParam5, `Screen`, {
      enumerable: !0,
      get: function () {
        return middlewareValue61.Screen;
      },
    });
    var _middlewareM = middlewareValue30();
    (Object.defineProperty(middlewareParam5, `Delete`, {
      enumerable: !0,
      get: function () {
        return _middlewareM.Delete;
      },
    }),
      (middlewareParam5.default = middlewareValue55(
        middlewareValue55({}, middlewareValue56.Facade),
        {
          Alias: middlewareValue57.Alias,
          Group: middlewareValue58.Group,
          Identify: _middlewareH.Identify,
          Track: middlewareValue59.Track,
          Page: middlewareValue60.Page,
          Screen: middlewareValue61.Screen,
          Delete: _middlewareM.Delete,
        },
      )));
  }),
  middlewareValue31 = middlewareI();
export const middlewareA = (function (middlewareParam75) {
  middlewareImport3(middlewareHelper33, middlewareParam75);
  function middlewareHelper33(middlewareParam127, middlewareParam128) {
    return (
      middlewareParam75.call(
        this,
        middlewareParam127,
        middlewareParam128,
        new middlewareO(),
      ) || this
    );
  }
  return (
    (middlewareHelper33.system = function () {
      return new this({
        type: `track`,
        event: `system`,
      });
    }),
    middlewareHelper33
  );
})(middlewareP);
function middlewareR(middlewareParam26, middlewareParam27) {
  var middlewareValue94 = new middlewareValue31.Facade(
    middlewareParam26,
    middlewareParam27,
  );
  return (
    middlewareParam26.type === `track` &&
      (middlewareValue94 = new middlewareValue31.Track(
        middlewareParam26,
        middlewareParam27,
      )),
    middlewareParam26.type === `identify` &&
      (middlewareValue94 = new middlewareValue31.Identify(
        middlewareParam26,
        middlewareParam27,
      )),
    middlewareParam26.type === `page` &&
      (middlewareValue94 = new middlewareValue31.Page(
        middlewareParam26,
        middlewareParam27,
      )),
    middlewareParam26.type === `alias` &&
      (middlewareValue94 = new middlewareValue31.Alias(
        middlewareParam26,
        middlewareParam27,
      )),
    middlewareParam26.type === `group` &&
      (middlewareValue94 = new middlewareValue31.Group(
        middlewareParam26,
        middlewareParam27,
      )),
    middlewareParam26.type === `screen` &&
      (middlewareValue94 = new middlewareValue31.Screen(
        middlewareParam26,
        middlewareParam27,
      )),
    Object.defineProperty(middlewareValue94, `obj`, {
      value: middlewareParam26,
      writable: !0,
    }),
    middlewareValue94
  );
}
export function middlewareT(
  middlewareParam13,
  middlewareParam14,
  _middlewareH,
) {
  return middlewareImport2(this, void 0, void 0, function () {
    function middlewareHelper17(middlewareParam25, __middlewareH) {
      return middlewareImport2(this, void 0, void 0, function () {
        var middlewareValue103, middlewareValue104, middlewareValue105;
        return middlewareImport1(this, function (middlewareParam45) {
          switch (middlewareParam45.label) {
            case 0:
              return (
                (middlewareValue103 = !1),
                (middlewareValue104 = null),
                [
                  4,
                  __middlewareH({
                    payload: middlewareR(middlewareParam25, {
                      clone: !0,
                      traverse: !1,
                    }),
                    integration: middlewareParam13,
                    next: function (middlewareParam151) {
                      ((middlewareValue103 = !0),
                        middlewareParam151 === null &&
                          (middlewareValue104 = null),
                        middlewareParam151 &&
                          (middlewareValue104 = middlewareParam151.obj));
                    },
                  }),
                ]
              );
            case 1:
              return (
                middlewareParam45.sent(),
                !middlewareValue103 &&
                  middlewareValue104 !== null &&
                  ((middlewareValue104 = middlewareValue104),
                  (middlewareValue104.integrations = middlewareImport4(
                    middlewareImport4({}, middlewareParam25.integrations),
                    ((middlewareValue105 = {}),
                    (middlewareValue105[middlewareParam13] = !1),
                    middlewareValue105),
                  ))),
                [2, middlewareValue104]
              );
          }
        });
      });
    }
    var middlewareValue72,
      middlewareValue73,
      _middlewareM,
      middlewareValue74,
      middlewareValue75;
    return middlewareImport1(this, function (middlewareParam49) {
      switch (middlewareParam49.label) {
        case 0:
          ((middlewareValue72 = middlewareR(middlewareParam14, {
            clone: !0,
            traverse: !1,
          }).rawEvent()),
            (middlewareValue73 = 0),
            (_middlewareM = _middlewareH),
            (middlewareParam49.label = 1));
        case 1:
          return middlewareValue73 < _middlewareM.length
            ? ((middlewareValue74 = _middlewareM[middlewareValue73]),
              [4, middlewareHelper17(middlewareValue72, middlewareValue74)])
            : [3, 4];
        case 2:
          if (
            ((middlewareValue75 = middlewareParam49.sent()),
            middlewareValue75 === null)
          )
            return [2, null];
          ((middlewareValue72 = middlewareValue75),
            (middlewareParam49.label = 3));
        case 3:
          return (middlewareValue73++, [3, 1]);
        case 4:
          return [2, middlewareValue72];
      }
    });
  });
}
export function middlewareN(middlewareParam17, middlewareParam18) {
  function middlewareHelper21(middlewareParam22) {
    return middlewareImport2(this, void 0, void 0, function () {
      var middlewareValue96;
      return middlewareImport1(this, function (middlewareParam41) {
        switch (middlewareParam41.label) {
          case 0:
            return (
              (middlewareValue96 = !1),
              [
                4,
                middlewareParam17({
                  payload: middlewareR(middlewareParam22.event, {
                    clone: !0,
                    traverse: !1,
                  }),
                  integrations: middlewareParam18 ?? {},
                  next: function (middlewareParam176) {
                    ((middlewareValue96 = !0),
                      middlewareParam176 &&
                        (middlewareParam22.event = middlewareParam176.obj));
                  },
                }),
              ]
            );
          case 1:
            if ((middlewareParam41.sent(), !middlewareValue96))
              throw new middlewareF({
                retry: !1,
                type: `middleware_cancellation`,
                reason: "Middleware `next` function skipped",
              });
            return [2, middlewareParam22];
        }
      });
    });
  }
  return {
    name: `Source Middleware ${middlewareParam17.name}`,
    type: `before`,
    version: `0.1.0`,
    isLoaded: function () {
      return !0;
    },
    load: function (middlewareParam175) {
      return Promise.resolve(middlewareParam175);
    },
    track: middlewareHelper21,
    page: middlewareHelper21,
    screen: middlewareHelper21,
    identify: middlewareHelper21,
    alias: middlewareHelper21,
    group: middlewareHelper21,
  };
}
export {
  middlewareC,
  middlewareD,
  middlewareF,
  middlewareH,
  middlewareI,
  middlewareL,
  middlewareM,
  middlewareO,
  middlewareP,
  middlewareR,
  middlewareS,
  middlewareU,
};
