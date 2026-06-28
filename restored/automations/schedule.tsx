// Restored from ref/webview/assets/automation-schedule-DcOeO0C3.js
// AutomationSchedule chunk restored from the Codex webview bundle.
import { appScopeRoot } from "../boundaries/app-scope";
import { createVscodeQueryOptions, vscodeApiU } from "../boundaries/vscode-api";
import {
  __spreadArray as automationScheduleImport1,
  __extends as automationScheduleImport2,
  __assign as automationScheduleImport3,
} from "tslib";
import {
  productLoggerI,
  _r,
  productLoggerU,
  productLoggerV,
  productLoggerZ,
} from "../generated/product-logger";
import { REASONING_EFFORTS } from "../utils/models-and-reasoning-efforts";
var automationScheduleValue1 = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"],
  automationScheduleValue2 = (function () {
    function automationScheduleHelper93(
      automationScheduleParam227,
      automationScheduleParam228,
    ) {
      if (automationScheduleParam228 === 0)
        throw Error("Can't create weekday with n == 0");
      this.weekday = automationScheduleParam227;
      this.n = automationScheduleParam228;
    }
    return (
      (automationScheduleHelper93.fromStr = function (
        automationScheduleParam316,
      ) {
        return new automationScheduleHelper93(
          automationScheduleValue1.indexOf(automationScheduleParam316),
        );
      }),
      (automationScheduleHelper93.prototype.nth = function (
        automationScheduleParam268,
      ) {
        return this.n === automationScheduleParam268
          ? this
          : new automationScheduleHelper93(
              this.weekday,
              automationScheduleParam268,
            );
      }),
      (automationScheduleHelper93.prototype.equals = function (
        automationScheduleParam269,
      ) {
        return (
          this.weekday === automationScheduleParam269.weekday &&
          this.n === automationScheduleParam269.n
        );
      }),
      (automationScheduleHelper93.prototype.toString = function () {
        var automationScheduleValue410 = automationScheduleValue1[this.weekday];
        return (
          this.n &&
            (automationScheduleValue410 =
              (this.n > 0 ? "+" : "") +
              String(this.n) +
              automationScheduleValue410),
          automationScheduleValue410
        );
      }),
      (automationScheduleHelper93.prototype.getJsWeekday = function () {
        return this.weekday === 6 ? 0 : this.weekday + 1;
      }),
      automationScheduleHelper93
    );
  })(),
  automationScheduleValue3 = function (automationScheduleParam355) {
    return automationScheduleParam355 != null;
  },
  automationScheduleValue4 = function (automationScheduleParam331) {
    return typeof automationScheduleParam331 == "number";
  },
  automationScheduleValue5 = function (automationScheduleParam289) {
    return (
      typeof automationScheduleParam289 == "string" &&
      automationScheduleValue1.includes(automationScheduleParam289)
    );
  },
  automationScheduleValue6 = Array.isArray,
  automationScheduleValue7 = function (
    automationScheduleParam180,
    automationScheduleParam181,
  ) {
    automationScheduleParam181 === undefined &&
      (automationScheduleParam181 = automationScheduleParam180);
    arguments.length === 1 &&
      ((automationScheduleParam181 = automationScheduleParam180),
      (automationScheduleParam180 = 0));
    for (
      var automationScheduleValue412 = [],
        automationScheduleValue413 = automationScheduleParam180;
      automationScheduleValue413 < automationScheduleParam181;
      automationScheduleValue413++
    )
      automationScheduleValue412.push(automationScheduleValue413);
    return automationScheduleValue412;
  },
  automationScheduleValue8 = function (
    automationScheduleParam190,
    automationScheduleParam191,
  ) {
    var automationScheduleValue417 = 0,
      automationScheduleValue418 = [];
    if (automationScheduleValue6(automationScheduleParam190))
      for (
        ;
        automationScheduleValue417 < automationScheduleParam191;
        automationScheduleValue417++
      )
        automationScheduleValue418[automationScheduleValue417] = [].concat(
          automationScheduleParam190,
        );
    else
      for (
        ;
        automationScheduleValue417 < automationScheduleParam191;
        automationScheduleValue417++
      )
        automationScheduleValue418[automationScheduleValue417] =
          automationScheduleParam190;
    return automationScheduleValue418;
  },
  automationScheduleValue9 = function (automationScheduleParam347) {
    return automationScheduleValue6(automationScheduleParam347)
      ? automationScheduleParam347
      : [automationScheduleParam347];
  };
const automationScheduleH = createVscodeQueryOptions(
  appScopeRoot,
  "list-automations",
  {
    enabled: true,
    refetchInterval: vscodeApiU.ONE_MINUTE,
    staleTime: vscodeApiU.ONE_MINUTE,
  },
);
function automationScheduleHelper1(
  automationScheduleParam133,
  automationScheduleParam134,
  automationScheduleParam135,
) {
  automationScheduleParam135 === undefined &&
    (automationScheduleParam135 = " ");
  var automationScheduleValue369 = String(automationScheduleParam133);
  return (
    (automationScheduleParam134 >>= 0),
    automationScheduleValue369.length > automationScheduleParam134
      ? String(automationScheduleValue369)
      : ((automationScheduleParam134 -= automationScheduleValue369.length),
        automationScheduleParam134 > automationScheduleParam135.length &&
          (automationScheduleParam135 += automationScheduleValue8(
            automationScheduleParam135,
            automationScheduleParam134 / automationScheduleParam135.length,
          )),
        automationScheduleParam135.slice(0, automationScheduleParam134) +
          String(automationScheduleValue369))
  );
}
var automationScheduleValue10 = function (
    automationScheduleParam234,
    automationScheduleParam235,
    automationScheduleParam236,
  ) {
    var automationScheduleValue437 = automationScheduleParam234.split(
      automationScheduleParam235,
    );
    return automationScheduleParam236
      ? automationScheduleValue437
          .slice(0, automationScheduleParam236)
          .concat([
            automationScheduleValue437
              .slice(automationScheduleParam236)
              .join(automationScheduleParam235),
          ])
      : automationScheduleValue437;
  },
  automationScheduleValue11 = function (
    automationScheduleParam277,
    automationScheduleParam278,
  ) {
    var automationScheduleValue454 =
      automationScheduleParam277 % automationScheduleParam278;
    return automationScheduleValue454 * automationScheduleParam278 < 0
      ? automationScheduleValue454 + automationScheduleParam278
      : automationScheduleValue454;
  },
  automationScheduleValue12 = function (
    automationScheduleParam279,
    automationScheduleParam280,
  ) {
    return {
      div: Math.floor(automationScheduleParam279 / automationScheduleParam280),
      mod: automationScheduleValue11(
        automationScheduleParam279,
        automationScheduleParam280,
      ),
    };
  },
  automationScheduleValue13 = function (automationScheduleParam323) {
    return (
      !automationScheduleValue3(automationScheduleParam323) ||
      automationScheduleParam323.length === 0
    );
  },
  automationScheduleValue14 = function (automationScheduleParam358) {
    return !automationScheduleValue13(automationScheduleParam358);
  },
  automationScheduleValue15 = function (
    automationScheduleParam312,
    automationScheduleParam313,
  ) {
    return (
      automationScheduleValue14(automationScheduleParam312) &&
      automationScheduleParam312.indexOf(automationScheduleParam313) !== -1
    );
  },
  automationScheduleValue16 = function (
    automationScheduleParam164,
    automationScheduleParam165,
    automationScheduleParam166,
    automationScheduleParam167,
    automationScheduleParam168,
    automationScheduleParam169,
  ) {
    return (
      automationScheduleParam167 === undefined &&
        (automationScheduleParam167 = 0),
      automationScheduleParam168 === undefined &&
        (automationScheduleParam168 = 0),
      automationScheduleParam169 === undefined &&
        (automationScheduleParam169 = 0),
      new Date(
        Date.UTC(
          automationScheduleParam164,
          automationScheduleParam165 - 1,
          automationScheduleParam166,
          automationScheduleParam167,
          automationScheduleParam168,
          automationScheduleParam169,
        ),
      )
    );
  },
  automationScheduleValue17 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  automationScheduleValue19 = automationScheduleValue16(1970, 1, 1),
  automationScheduleValue20 = [6, 0, 1, 2, 3, 4, 5],
  automationScheduleValue21 = function (automationScheduleParam274) {
    return (
      (automationScheduleParam274 % 4 == 0 &&
        automationScheduleParam274 % 100 != 0) ||
      automationScheduleParam274 % 400 == 0
    );
  },
  automationScheduleValue22 = function (automationScheduleParam340) {
    return automationScheduleParam340 instanceof Date;
  },
  automationScheduleValue23 = function (automationScheduleParam315) {
    return (
      automationScheduleValue22(automationScheduleParam315) &&
      !isNaN(automationScheduleParam315.getTime())
    );
  },
  automationScheduleValue24 = function (
    automationScheduleParam257,
    automationScheduleParam258,
  ) {
    var automationScheduleValue448 =
      automationScheduleParam257.getTime() -
      automationScheduleParam258.getTime();
    return Math.round(automationScheduleValue448 / 86400000);
  },
  automationScheduleValue25 = function (automationScheduleParam356) {
    return automationScheduleValue24(
      automationScheduleParam356,
      automationScheduleValue19,
    );
  },
  automationScheduleValue26 = function (automationScheduleParam308) {
    return new Date(
      automationScheduleValue19.getTime() +
        automationScheduleParam308 * 86400000,
    );
  },
  automationScheduleValue27 = function (automationScheduleParam242) {
    var automationScheduleValue441 = automationScheduleParam242.getUTCMonth();
    return automationScheduleValue441 === 1 &&
      automationScheduleValue21(automationScheduleParam242.getUTCFullYear())
      ? 29
      : automationScheduleValue17[automationScheduleValue441];
  },
  automationScheduleValue28 = function (automationScheduleParam341) {
    return automationScheduleValue20[automationScheduleParam341.getUTCDay()];
  },
  automationScheduleValue29 = function (
    automationScheduleParam275,
    automationScheduleParam276,
  ) {
    var automationScheduleValue453 = automationScheduleValue16(
      automationScheduleParam275,
      automationScheduleParam276 + 1,
      1,
    );
    return [
      automationScheduleValue28(automationScheduleValue453),
      automationScheduleValue27(automationScheduleValue453),
    ];
  },
  automationScheduleValue30 = function (
    automationScheduleParam116,
    automationScheduleParam117,
  ) {
    return (
      (automationScheduleParam117 ||= automationScheduleParam116),
      new Date(
        Date.UTC(
          automationScheduleParam116.getUTCFullYear(),
          automationScheduleParam116.getUTCMonth(),
          automationScheduleParam116.getUTCDate(),
          automationScheduleParam117.getHours(),
          automationScheduleParam117.getMinutes(),
          automationScheduleParam117.getSeconds(),
          automationScheduleParam117.getMilliseconds(),
        ),
      )
    );
  },
  automationScheduleValue31 = function (automationScheduleParam329) {
    return new Date(automationScheduleParam329.getTime());
  },
  automationScheduleValue32 = function (automationScheduleParam249) {
    for (
      var automationScheduleValue444 = [], automationScheduleValue445 = 0;
      automationScheduleValue445 < automationScheduleParam249.length;
      automationScheduleValue445++
    )
      automationScheduleValue444.push(
        automationScheduleValue31(
          automationScheduleParam249[automationScheduleValue445],
        ),
      );
    return automationScheduleValue444;
  },
  automationScheduleValue33 = function (automationScheduleParam250) {
    automationScheduleParam250.sort(
      function (automationScheduleParam300, automationScheduleParam301) {
        return (
          automationScheduleParam300.getTime() -
          automationScheduleParam301.getTime()
        );
      },
    );
  },
  automationScheduleValue34 = function (
    automationScheduleParam102,
    automationScheduleParam103,
  ) {
    automationScheduleParam103 === undefined &&
      (automationScheduleParam103 = true);
    var automationScheduleValue329 = new Date(automationScheduleParam102);
    return [
      automationScheduleHelper1(
        automationScheduleValue329.getUTCFullYear().toString(),
        4,
        "0",
      ),
      automationScheduleHelper1(
        automationScheduleValue329.getUTCMonth() + 1,
        2,
        "0",
      ),
      automationScheduleHelper1(
        automationScheduleValue329.getUTCDate(),
        2,
        "0",
      ),
      "T",
      automationScheduleHelper1(
        automationScheduleValue329.getUTCHours(),
        2,
        "0",
      ),
      automationScheduleHelper1(
        automationScheduleValue329.getUTCMinutes(),
        2,
        "0",
      ),
      automationScheduleHelper1(
        automationScheduleValue329.getUTCSeconds(),
        2,
        "0",
      ),
      automationScheduleParam103 ? "Z" : "",
    ].join("");
  },
  automationScheduleValue35 = function (automationScheduleParam92) {
    var automationScheduleValue318 =
      /^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z?)?$/.exec(
        automationScheduleParam92,
      );
    if (!automationScheduleValue318)
      throw Error(`Invalid UNTIL value: ${automationScheduleParam92}`);
    return new Date(
      Date.UTC(
        parseInt(automationScheduleValue318[1], 10),
        parseInt(automationScheduleValue318[2], 10) - 1,
        parseInt(automationScheduleValue318[3], 10),
        parseInt(automationScheduleValue318[5], 10) || 0,
        parseInt(automationScheduleValue318[6], 10) || 0,
        parseInt(automationScheduleValue318[7], 10) || 0,
      ),
    );
  },
  automationScheduleValue36 = function (
    automationScheduleParam247,
    automationScheduleParam248,
  ) {
    return (
      automationScheduleParam247
        .toLocaleString("sv-SE", {
          timeZone: automationScheduleParam248,
        })
        .replace(" ", "T") + "Z"
    );
  },
  automationScheduleValue37 = function (
    automationScheduleParam154,
    automationScheduleParam155,
  ) {
    var automationScheduleValue389 =
        Intl.DateTimeFormat().resolvedOptions().timeZone,
      automationScheduleValue390 = new Date(
        automationScheduleValue36(
          automationScheduleParam154,
          automationScheduleValue389,
        ),
      ),
      automationScheduleValue391 =
        new Date(
          automationScheduleValue36(
            automationScheduleParam154,
            automationScheduleParam155 ?? "UTC",
          ),
        ).getTime() - automationScheduleValue390.getTime();
    return new Date(
      automationScheduleParam154.getTime() - automationScheduleValue391,
    );
  },
  automationScheduleValue38 = (function () {
    function automationScheduleHelper90(
      automationScheduleParam51,
      automationScheduleParam52,
    ) {
      this.minDate = null;
      this.maxDate = null;
      this._result = [];
      this.total = 0;
      this.method = automationScheduleParam51;
      this.args = automationScheduleParam52;
      automationScheduleParam51 === "between"
        ? ((this.maxDate = automationScheduleParam52.inc
            ? automationScheduleParam52.before
            : new Date(automationScheduleParam52.before.getTime() - 1)),
          (this.minDate = automationScheduleParam52.inc
            ? automationScheduleParam52.after
            : new Date(automationScheduleParam52.after.getTime() + 1)))
        : automationScheduleParam51 === "before"
          ? (this.maxDate = automationScheduleParam52.inc
              ? automationScheduleParam52.dt
              : new Date(automationScheduleParam52.dt.getTime() - 1))
          : automationScheduleParam51 === "after" &&
            (this.minDate = automationScheduleParam52.inc
              ? automationScheduleParam52.dt
              : new Date(automationScheduleParam52.dt.getTime() + 1));
    }
    return (
      (automationScheduleHelper90.prototype.accept = function (
        automationScheduleParam88,
      ) {
        ++this.total;
        var automationScheduleValue311 =
            this.minDate && automationScheduleParam88 < this.minDate,
          automationScheduleValue312 =
            this.maxDate && automationScheduleParam88 > this.maxDate;
        if (this.method === "between") {
          if (automationScheduleValue311) return true;
          if (automationScheduleValue312) return false;
        } else if (this.method === "before") {
          if (automationScheduleValue312) return false;
        } else if (this.method === "after")
          return automationScheduleValue311
            ? true
            : (this.add(automationScheduleParam88), false);
        return this.add(automationScheduleParam88);
      }),
      (automationScheduleHelper90.prototype.add = function (
        automationScheduleParam296,
      ) {
        return (this._result.push(automationScheduleParam296), true);
      }),
      (automationScheduleHelper90.prototype.getValue = function () {
        var automationScheduleValue377 = this._result;
        switch (this.method) {
          case "all":
          case "between":
            return automationScheduleValue377;
          default:
            return automationScheduleValue377.length
              ? automationScheduleValue377[
                  automationScheduleValue377.length - 1
                ]
              : null;
        }
      }),
      (automationScheduleHelper90.prototype.clone = function () {
        return new automationScheduleHelper90(this.method, this.args);
      }),
      automationScheduleHelper90
    );
  })(),
  _e = (function (automationScheduleParam109) {
    automationScheduleImport2(
      automationScheduleHelper96,
      automationScheduleParam109,
    );
    function automationScheduleHelper96(
      automationScheduleParam243,
      automationScheduleParam244,
      automationScheduleParam245,
    ) {
      var automationScheduleValue442 =
        automationScheduleParam109.call(
          this,
          automationScheduleParam243,
          automationScheduleParam244,
        ) || this;
      return (
        (automationScheduleValue442.iterator = automationScheduleParam245),
        automationScheduleValue442
      );
    }
    return (
      (automationScheduleHelper96.prototype.add = function (
        automationScheduleParam230,
      ) {
        return this.iterator(automationScheduleParam230, this._result.length)
          ? (this._result.push(automationScheduleParam230), true)
          : false;
      }),
      automationScheduleHelper96
    );
  })(automationScheduleValue38),
  automationScheduleValue39 = {
    dayNames: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    monthNames: [
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
    tokens: {
      SKIP: /^[ \r\n\t]+|^\.$/,
      number: /^[1-9][0-9]*/,
      numberAsText: /^(one|two|three)/i,
      every: /^every/i,
      "day(s)": /^days?/i,
      "weekday(s)": /^weekdays?/i,
      "week(s)": /^weeks?/i,
      "hour(s)": /^hours?/i,
      "minute(s)": /^minutes?/i,
      "month(s)": /^months?/i,
      "year(s)": /^years?/i,
      on: /^(on|in)/i,
      at: /^(at)/i,
      the: /^the/i,
      first: /^first/i,
      second: /^second/i,
      third: /^third/i,
      nth: /^([1-9][0-9]*)(\.|th|nd|rd|st)/i,
      last: /^last/i,
      for: /^for/i,
      "time(s)": /^times?/i,
      until: /^(un)?til/i,
      monday: /^mo(n(day)?)?/i,
      tuesday: /^tu(e(s(day)?)?)?/i,
      wednesday: /^we(d(n(esday)?)?)?/i,
      thursday: /^th(u(r(sday)?)?)?/i,
      friday: /^fr(i(day)?)?/i,
      saturday: /^sa(t(urday)?)?/i,
      sunday: /^su(n(day)?)?/i,
      january: /^jan(uary)?/i,
      february: /^feb(ruary)?/i,
      march: /^mar(ch)?/i,
      april: /^apr(il)?/i,
      may: /^may/i,
      june: /^june?/i,
      july: /^july?/i,
      august: /^aug(ust)?/i,
      september: /^sep(t(ember)?)?/i,
      october: /^oct(ober)?/i,
      november: /^nov(ember)?/i,
      december: /^dec(ember)?/i,
      comma: /^(,\s*|(and|or)\s*)+/i,
    },
  },
  automationScheduleValue40 = function (
    automationScheduleParam327,
    automationScheduleParam328,
  ) {
    return (
      automationScheduleParam327.indexOf(automationScheduleParam328) !== -1
    );
  },
  be = function (automationScheduleParam348) {
    return automationScheduleParam348.toString();
  },
  automationScheduleValue41 = function (
    automationScheduleParam324,
    automationScheduleParam325,
    automationScheduleParam326,
  ) {
    return `${automationScheduleParam325} ${automationScheduleParam326}, ${automationScheduleParam324}`;
  },
  automationScheduleValue42 = (function () {
    function automationScheduleHelper76(
      automationScheduleParam6,
      automationScheduleParam7,
      automationScheduleParam8,
      automationScheduleParam9,
    ) {
      if (
        (automationScheduleParam7 === undefined &&
          (automationScheduleParam7 = be),
        automationScheduleParam8 === undefined &&
          (automationScheduleParam8 = automationScheduleValue39),
        automationScheduleParam9 === undefined &&
          (automationScheduleParam9 = automationScheduleValue41),
        (this.text = []),
        (this.language = automationScheduleParam8 || automationScheduleValue39),
        (this.gettext = automationScheduleParam7),
        (this.dateFormatter = automationScheduleParam9),
        (this.rrule = automationScheduleParam6),
        (this.options = automationScheduleParam6.options),
        (this.origOptions = automationScheduleParam6.origOptions),
        this.origOptions.bymonthday)
      ) {
        var automationScheduleValue99 = [].concat(this.options.bymonthday),
          automationScheduleValue100 = [].concat(this.options.bynmonthday);
        automationScheduleValue99.sort(
          function (automationScheduleParam332, automationScheduleParam333) {
            return automationScheduleParam332 - automationScheduleParam333;
          },
        );
        automationScheduleValue100.sort(
          function (automationScheduleParam318, automationScheduleParam319) {
            return automationScheduleParam319 - automationScheduleParam318;
          },
        );
        this.bymonthday = automationScheduleValue99.concat(
          automationScheduleValue100,
        );
        this.bymonthday.length || (this.bymonthday = null);
      }
      if (automationScheduleValue3(this.origOptions.byweekday)) {
        var automationScheduleValue101 = automationScheduleValue6(
            this.origOptions.byweekday,
          )
            ? this.origOptions.byweekday
            : [this.origOptions.byweekday],
          automationScheduleValue102 = String(automationScheduleValue101);
        this.byweekday = {
          allWeeks: automationScheduleValue101.filter(function (item) {
            return !item.n;
          }),
          someWeeks: automationScheduleValue101.filter(function (item) {
            return !!item.n;
          }),
          isWeekdays:
            automationScheduleValue102.indexOf("MO") !== -1 &&
            automationScheduleValue102.indexOf("TU") !== -1 &&
            automationScheduleValue102.indexOf("WE") !== -1 &&
            automationScheduleValue102.indexOf("TH") !== -1 &&
            automationScheduleValue102.indexOf("FR") !== -1 &&
            automationScheduleValue102.indexOf("SA") === -1 &&
            automationScheduleValue102.indexOf("SU") === -1,
          isEveryDay:
            automationScheduleValue102.indexOf("MO") !== -1 &&
            automationScheduleValue102.indexOf("TU") !== -1 &&
            automationScheduleValue102.indexOf("WE") !== -1 &&
            automationScheduleValue102.indexOf("TH") !== -1 &&
            automationScheduleValue102.indexOf("FR") !== -1 &&
            automationScheduleValue102.indexOf("SA") !== -1 &&
            automationScheduleValue102.indexOf("SU") !== -1,
        };
        var automationScheduleValue103 = function (
          automationScheduleParam294,
          automationScheduleParam295,
        ) {
          return (
            automationScheduleParam294.weekday -
            automationScheduleParam295.weekday
          );
        };
        this.byweekday.allWeeks.sort(automationScheduleValue103);
        this.byweekday.someWeeks.sort(automationScheduleValue103);
        this.byweekday.allWeeks.length || (this.byweekday.allWeeks = null);
        this.byweekday.someWeeks.length || (this.byweekday.someWeeks = null);
      } else this.byweekday = null;
    }
    return (
      (automationScheduleHelper76.isFullyConvertible = function (
        automationScheduleParam91,
      ) {
        if (
          !(
            automationScheduleParam91.options.freq in
            automationScheduleHelper76.IMPLEMENTED
          ) ||
          (automationScheduleParam91.origOptions.until &&
            automationScheduleParam91.origOptions.count)
        )
          return false;
        for (var automationScheduleValue317 in automationScheduleParam91.origOptions) {
          if (
            automationScheduleValue40(
              ["dtstart", "tzid", "wkst", "freq"],
              automationScheduleValue317,
            )
          )
            return true;
          if (
            !automationScheduleValue40(
              automationScheduleHelper76.IMPLEMENTED[
                automationScheduleParam91.options.freq
              ],
              automationScheduleValue317,
            )
          )
            return false;
        }
        return true;
      }),
      (automationScheduleHelper76.prototype.isFullyConvertible = function () {
        return automationScheduleHelper76.isFullyConvertible(this.rrule);
      }),
      (automationScheduleHelper76.prototype.toString = function () {
        var automationScheduleValue188 = this.gettext;
        if (!(this.options.freq in automationScheduleHelper76.IMPLEMENTED))
          return automationScheduleValue188(
            "RRule error: Unable to fully convert this rrule to text",
          );
        if (
          ((this.text = [automationScheduleValue188("every")]),
          this[automationScheduleValue73.FREQUENCIES[this.options.freq]](),
          this.options.until)
        ) {
          this.add(automationScheduleValue188("until"));
          var automationScheduleValue189 = this.options.until;
          this.add(
            this.dateFormatter(
              automationScheduleValue189.getUTCFullYear(),
              this.language.monthNames[
                automationScheduleValue189.getUTCMonth()
              ],
              automationScheduleValue189.getUTCDate(),
            ),
          );
        } else
          this.options.count &&
            this.add(automationScheduleValue188("for"))
              .add(this.options.count.toString())
              .add(
                this.plural(this.options.count)
                  ? automationScheduleValue188("times")
                  : automationScheduleValue188("time"),
              );
        return (
          this.isFullyConvertible() ||
            this.add(automationScheduleValue188("(~ approximate)")),
          this.text.join("")
        );
      }),
      (automationScheduleHelper76.prototype.HOURLY = function () {
        var automationScheduleValue368 = this.gettext;
        this.options.interval !== 1 &&
          this.add(this.options.interval.toString());
        this.add(
          this.plural(this.options.interval)
            ? automationScheduleValue368("hours")
            : automationScheduleValue368("hour"),
        );
      }),
      (automationScheduleHelper76.prototype.MINUTELY = function () {
        var automationScheduleValue366 = this.gettext;
        this.options.interval !== 1 &&
          this.add(this.options.interval.toString());
        this.add(
          this.plural(this.options.interval)
            ? automationScheduleValue366("minutes")
            : automationScheduleValue366("minute"),
        );
      }),
      (automationScheduleHelper76.prototype.DAILY = function () {
        var automationScheduleValue234 = this.gettext;
        this.options.interval !== 1 &&
          this.add(this.options.interval.toString());
        this.byweekday && this.byweekday.isWeekdays
          ? this.add(
              this.plural(this.options.interval)
                ? automationScheduleValue234("weekdays")
                : automationScheduleValue234("weekday"),
            )
          : this.add(
              this.plural(this.options.interval)
                ? automationScheduleValue234("days")
                : automationScheduleValue234("day"),
            );
        this.origOptions.bymonth &&
          (this.add(automationScheduleValue234("in")), this._bymonth());
        this.bymonthday
          ? this._bymonthday()
          : this.byweekday
            ? this._byweekday()
            : this.origOptions.byhour && this._byhour();
      }),
      (automationScheduleHelper76.prototype.WEEKLY = function () {
        var automationScheduleValue186 = this.gettext;
        this.options.interval !== 1 &&
          this.add(this.options.interval.toString()).add(
            this.plural(this.options.interval)
              ? automationScheduleValue186("weeks")
              : automationScheduleValue186("week"),
          );
        this.byweekday && this.byweekday.isWeekdays
          ? this.options.interval === 1
            ? this.add(
                this.plural(this.options.interval)
                  ? automationScheduleValue186("weekdays")
                  : automationScheduleValue186("weekday"),
              )
            : this.add(automationScheduleValue186("on")).add(
                automationScheduleValue186("weekdays"),
              )
          : this.byweekday && this.byweekday.isEveryDay
            ? this.add(
                this.plural(this.options.interval)
                  ? automationScheduleValue186("days")
                  : automationScheduleValue186("day"),
              )
            : (this.options.interval === 1 &&
                this.add(automationScheduleValue186("week")),
              this.origOptions.bymonth &&
                (this.add(automationScheduleValue186("in")), this._bymonth()),
              this.bymonthday
                ? this._bymonthday()
                : this.byweekday && this._byweekday(),
              this.origOptions.byhour && this._byhour());
      }),
      (automationScheduleHelper76.prototype.MONTHLY = function () {
        var automationScheduleValue233 = this.gettext;
        this.origOptions.bymonth
          ? (this.options.interval !== 1 &&
              (this.add(this.options.interval.toString()).add(
                automationScheduleValue233("months"),
              ),
              this.plural(this.options.interval) &&
                this.add(automationScheduleValue233("in"))),
            this._bymonth())
          : (this.options.interval !== 1 &&
              this.add(this.options.interval.toString()),
            this.add(
              this.plural(this.options.interval)
                ? automationScheduleValue233("months")
                : automationScheduleValue233("month"),
            ));
        this.bymonthday
          ? this._bymonthday()
          : this.byweekday && this.byweekday.isWeekdays
            ? this.add(automationScheduleValue233("on")).add(
                automationScheduleValue233("weekdays"),
              )
            : this.byweekday && this._byweekday();
      }),
      (automationScheduleHelper76.prototype.YEARLY = function () {
        var automationScheduleValue187 = this.gettext;
        this.origOptions.bymonth
          ? (this.options.interval !== 1 &&
              (this.add(this.options.interval.toString()),
              this.add(automationScheduleValue187("years"))),
            this._bymonth())
          : (this.options.interval !== 1 &&
              this.add(this.options.interval.toString()),
            this.add(
              this.plural(this.options.interval)
                ? automationScheduleValue187("years")
                : automationScheduleValue187("year"),
            ));
        this.bymonthday
          ? this._bymonthday()
          : this.byweekday && this._byweekday();
        this.options.byyearday &&
          this.add(automationScheduleValue187("on the"))
            .add(
              this.list(
                this.options.byyearday,
                this.nth,
                automationScheduleValue187("and"),
              ),
            )
            .add(automationScheduleValue187("day"));
        this.options.byweekno &&
          this.add(automationScheduleValue187("in"))
            .add(
              this.plural(this.options.byweekno.length)
                ? automationScheduleValue187("weeks")
                : automationScheduleValue187("week"),
            )
            .add(
              this.list(
                this.options.byweekno,
                undefined,
                automationScheduleValue187("and"),
              ),
            );
      }),
      (automationScheduleHelper76.prototype._bymonthday = function () {
        var automationScheduleValue302 = this.gettext;
        this.byweekday && this.byweekday.allWeeks
          ? this.add(automationScheduleValue302("on"))
              .add(
                this.list(
                  this.byweekday.allWeeks,
                  this.weekdaytext,
                  automationScheduleValue302("or"),
                ),
              )
              .add(automationScheduleValue302("the"))
              .add(
                this.list(
                  this.bymonthday,
                  this.nth,
                  automationScheduleValue302("or"),
                ),
              )
          : this.add(automationScheduleValue302("on the")).add(
              this.list(
                this.bymonthday,
                this.nth,
                automationScheduleValue302("and"),
              ),
            );
      }),
      (automationScheduleHelper76.prototype._byweekday = function () {
        var automationScheduleValue299 = this.gettext;
        this.byweekday.allWeeks &&
          !this.byweekday.isWeekdays &&
          this.add(automationScheduleValue299("on")).add(
            this.list(this.byweekday.allWeeks, this.weekdaytext),
          );
        this.byweekday.someWeeks &&
          (this.byweekday.allWeeks &&
            this.add(automationScheduleValue299("and")),
          this.add(automationScheduleValue299("on the")).add(
            this.list(
              this.byweekday.someWeeks,
              this.weekdaytext,
              automationScheduleValue299("and"),
            ),
          ));
      }),
      (automationScheduleHelper76.prototype._byhour = function () {
        var automationScheduleValue416 = this.gettext;
        this.add(automationScheduleValue416("at")).add(
          this.list(
            this.origOptions.byhour,
            undefined,
            automationScheduleValue416("and"),
          ),
        );
      }),
      (automationScheduleHelper76.prototype._bymonth = function () {
        this.add(
          this.list(this.options.bymonth, this.monthtext, this.gettext("and")),
        );
      }),
      (automationScheduleHelper76.prototype.nth = function (
        automationScheduleParam63,
      ) {
        automationScheduleParam63 = parseInt(
          automationScheduleParam63.toString(),
          10,
        );
        var automationScheduleValue274,
          automationScheduleValue275 = this.gettext;
        if (automationScheduleParam63 === -1)
          return automationScheduleValue275("last");
        var automationScheduleValue276 = Math.abs(automationScheduleParam63);
        switch (automationScheduleValue276) {
          case 1:
          case 21:
          case 31:
            automationScheduleValue274 =
              automationScheduleValue276 + automationScheduleValue275("st");
            break;
          case 2:
          case 22:
            automationScheduleValue274 =
              automationScheduleValue276 + automationScheduleValue275("nd");
            break;
          case 3:
          case 23:
            automationScheduleValue274 =
              automationScheduleValue276 + automationScheduleValue275("rd");
            break;
          default:
            automationScheduleValue274 =
              automationScheduleValue276 + automationScheduleValue275("th");
        }
        return automationScheduleParam63 < 0
          ? automationScheduleValue274 +
              " " +
              automationScheduleValue275("last")
          : automationScheduleValue274;
      }),
      (automationScheduleHelper76.prototype.monthtext = function (
        automationScheduleParam287,
      ) {
        return this.language.monthNames[automationScheduleParam287 - 1];
      }),
      (automationScheduleHelper76.prototype.weekdaytext = function (
        automationScheduleParam194,
      ) {
        var automationScheduleValue421 = automationScheduleValue4(
          automationScheduleParam194,
        )
          ? (automationScheduleParam194 + 1) % 7
          : automationScheduleParam194.getJsWeekday();
        return (
          (automationScheduleParam194.n
            ? this.nth(automationScheduleParam194.n) + " "
            : "") + this.language.dayNames[automationScheduleValue421]
        );
      }),
      (automationScheduleHelper76.prototype.plural = function (
        automationScheduleParam334,
      ) {
        return automationScheduleParam334 % 100 != 1;
      }),
      (automationScheduleHelper76.prototype.add = function (
        automationScheduleParam267,
      ) {
        return (
          this.text.push(" "),
          this.text.push(automationScheduleParam267),
          this
        );
      }),
      (automationScheduleHelper76.prototype.list = function (
        automationScheduleParam64,
        automationScheduleParam65,
        automationScheduleParam66,
        automationScheduleParam67,
      ) {
        var automationScheduleValue277 = this;
        automationScheduleParam67 === undefined &&
          (automationScheduleParam67 = ",");
        automationScheduleValue6(automationScheduleParam64) ||
          (automationScheduleParam64 = [automationScheduleParam64]);
        var automationScheduleValue278 = function (
          automationScheduleParam143,
          automationScheduleParam144,
          automationScheduleParam145,
        ) {
          for (
            var automationScheduleValue382 = "", automationScheduleValue383 = 0;
            automationScheduleValue383 < automationScheduleParam143.length;
            automationScheduleValue383++
          ) {
            automationScheduleValue383 !== 0 &&
              (automationScheduleValue383 ===
              automationScheduleParam143.length - 1
                ? (automationScheduleValue382 +=
                    " " + automationScheduleParam145 + " ")
                : (automationScheduleValue382 +=
                    automationScheduleParam144 + " "));
            automationScheduleValue382 +=
              automationScheduleParam143[automationScheduleValue383];
          }
          return automationScheduleValue382;
        };
        automationScheduleParam65 ||= function (automationScheduleParam320) {
          return automationScheduleParam320.toString();
        };
        var automationScheduleValue279 = function (automationScheduleParam314) {
          return (
            automationScheduleParam65 &&
            automationScheduleParam65.call(
              automationScheduleValue277,
              automationScheduleParam314,
            )
          );
        };
        return automationScheduleParam66
          ? automationScheduleValue278(
              automationScheduleParam64.map(automationScheduleValue279),
              automationScheduleParam67,
              automationScheduleParam66,
            )
          : automationScheduleParam64
              .map(automationScheduleValue279)
              .join(automationScheduleParam67 + " ");
      }),
      automationScheduleHelper76
    );
  })(),
  automationScheduleValue43 = (function () {
    function automationScheduleHelper89(automationScheduleParam297) {
      this.done = true;
      this.rules = automationScheduleParam297;
    }
    return (
      (automationScheduleHelper89.prototype.start = function (
        automationScheduleParam251,
      ) {
        return (
          (this.text = automationScheduleParam251),
          (this.done = false),
          this.nextSymbol()
        );
      }),
      (automationScheduleHelper89.prototype.isDone = function () {
        return this.done && this.symbol === null;
      }),
      (automationScheduleHelper89.prototype.nextSymbol = function () {
        var automationScheduleValue223, automationScheduleValue224;
        this.symbol = null;
        this.value = null;
        do {
          if (this.done) return false;
          var automationScheduleValue225 = undefined;
          for (var automationScheduleValue226 in ((automationScheduleValue223 =
            null),
          this.rules)) {
            automationScheduleValue225 = this.rules[automationScheduleValue226];
            var automationScheduleValue227 = automationScheduleValue225.exec(
              this.text,
            );
            automationScheduleValue227 &&
              (automationScheduleValue223 === null ||
                automationScheduleValue227[0].length >
                  automationScheduleValue223[0].length) &&
              ((automationScheduleValue223 = automationScheduleValue227),
              (automationScheduleValue224 = automationScheduleValue226));
          }
          if (
            (automationScheduleValue223 != null &&
              ((this.text = this.text.substr(
                automationScheduleValue223[0].length,
              )),
              this.text === "" && (this.done = true)),
            automationScheduleValue223 == null)
          ) {
            this.done = true;
            this.symbol = null;
            this.value = null;
            return;
          }
        } while (automationScheduleValue224 === "SKIP");
        return (
          (this.symbol = automationScheduleValue224),
          (this.value = automationScheduleValue223),
          true
        );
      }),
      (automationScheduleHelper89.prototype.accept = function (
        automationScheduleParam139,
      ) {
        if (this.symbol === automationScheduleParam139) {
          if (this.value) {
            var automationScheduleValue375 = this.value;
            return (this.nextSymbol(), automationScheduleValue375);
          }
          return (this.nextSymbol(), true);
        }
        return false;
      }),
      (automationScheduleHelper89.prototype.acceptNumber = function () {
        return this.accept("number");
      }),
      (automationScheduleHelper89.prototype.expect = function (
        automationScheduleParam231,
      ) {
        if (this.accept(automationScheduleParam231)) return true;
        throw Error(
          "expected " +
            automationScheduleParam231 +
            " but found " +
            this.symbol,
        );
      }),
      automationScheduleHelper89
    );
  })();
function automationScheduleHelper2(
  automationScheduleParam1,
  automationScheduleParam2,
) {
  automationScheduleParam2 === undefined &&
    (automationScheduleParam2 = automationScheduleValue39);
  var automationScheduleValue86 = {},
    automationScheduleValue87 = new automationScheduleValue43(
      automationScheduleParam2.tokens,
    );
  if (!automationScheduleValue87.start(automationScheduleParam1)) return null;
  return (automationScheduleHelper77(), automationScheduleValue86);
  function automationScheduleHelper77() {
    automationScheduleValue87.expect("every");
    var automationScheduleValue96 = automationScheduleValue87.acceptNumber();
    if (
      (automationScheduleValue96 &&
        (automationScheduleValue86.interval = parseInt(
          automationScheduleValue96[0],
          10,
        )),
      automationScheduleValue87.isDone())
    )
      throw Error("Unexpected end");
    switch (automationScheduleValue87.symbol) {
      case "day(s)":
        automationScheduleValue86.freq = automationScheduleValue73.DAILY;
        automationScheduleValue87.nextSymbol() &&
          (automationScheduleHelper79(), automationScheduleHelper84());
        break;
      case "weekday(s)":
        automationScheduleValue86.freq = automationScheduleValue73.WEEKLY;
        automationScheduleValue86.byweekday = [
          automationScheduleValue73.MO,
          automationScheduleValue73.TU,
          automationScheduleValue73.WE,
          automationScheduleValue73.TH,
          automationScheduleValue73.FR,
        ];
        automationScheduleValue87.nextSymbol();
        automationScheduleHelper79();
        automationScheduleHelper84();
        break;
      case "week(s)":
        automationScheduleValue86.freq = automationScheduleValue73.WEEKLY;
        automationScheduleValue87.nextSymbol() &&
          (automationScheduleHelper78(),
          automationScheduleHelper79(),
          automationScheduleHelper84());
        break;
      case "hour(s)":
        automationScheduleValue86.freq = automationScheduleValue73.HOURLY;
        automationScheduleValue87.nextSymbol() &&
          (automationScheduleHelper78(), automationScheduleHelper84());
        break;
      case "minute(s)":
        automationScheduleValue86.freq = automationScheduleValue73.MINUTELY;
        automationScheduleValue87.nextSymbol() &&
          (automationScheduleHelper78(), automationScheduleHelper84());
        break;
      case "month(s)":
        automationScheduleValue86.freq = automationScheduleValue73.MONTHLY;
        automationScheduleValue87.nextSymbol() &&
          (automationScheduleHelper78(), automationScheduleHelper84());
        break;
      case "year(s)":
        automationScheduleValue86.freq = automationScheduleValue73.YEARLY;
        automationScheduleValue87.nextSymbol() &&
          (automationScheduleHelper78(), automationScheduleHelper84());
        break;
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        if (
          ((automationScheduleValue86.freq = automationScheduleValue73.WEEKLY),
          (automationScheduleValue86.byweekday = [
            automationScheduleValue73[
              automationScheduleValue87.symbol.substr(0, 2).toUpperCase()
            ],
          ]),
          !automationScheduleValue87.nextSymbol())
        )
          return;
        for (; automationScheduleValue87.accept("comma"); ) {
          if (automationScheduleValue87.isDone()) throw Error("Unexpected end");
          var automationScheduleValue97 = automationScheduleHelper81();
          if (!automationScheduleValue97)
            throw Error(
              "Unexpected symbol " +
                automationScheduleValue87.symbol +
                ", expected weekday",
            );
          automationScheduleValue86.byweekday.push(
            automationScheduleValue73[automationScheduleValue97],
          );
          automationScheduleValue87.nextSymbol();
        }
        automationScheduleHelper79();
        automationScheduleHelper83();
        automationScheduleHelper84();
        break;
      case "january":
      case "february":
      case "march":
      case "april":
      case "may":
      case "june":
      case "july":
      case "august":
      case "september":
      case "october":
      case "november":
      case "december":
        if (
          ((automationScheduleValue86.freq = automationScheduleValue73.YEARLY),
          (automationScheduleValue86.bymonth = [automationScheduleHelper80()]),
          !automationScheduleValue87.nextSymbol())
        )
          return;
        for (; automationScheduleValue87.accept("comma"); ) {
          if (automationScheduleValue87.isDone()) throw Error("Unexpected end");
          var automationScheduleValue98 = automationScheduleHelper80();
          if (!automationScheduleValue98)
            throw Error(
              "Unexpected symbol " +
                automationScheduleValue87.symbol +
                ", expected month",
            );
          automationScheduleValue86.bymonth.push(automationScheduleValue98);
          automationScheduleValue87.nextSymbol();
        }
        automationScheduleHelper78();
        automationScheduleHelper84();
        break;
      default:
        throw Error("Unknown symbol");
    }
  }
  function automationScheduleHelper78() {
    var automationScheduleValue136 = automationScheduleValue87.accept("on"),
      automationScheduleValue137 = automationScheduleValue87.accept("the");
    if (automationScheduleValue136 || automationScheduleValue137)
      do {
        var automationScheduleValue138 = automationScheduleHelper82(),
          automationScheduleValue139 = automationScheduleHelper81(),
          automationScheduleValue140 = automationScheduleHelper80();
        if (automationScheduleValue138)
          automationScheduleValue139
            ? (automationScheduleValue87.nextSymbol(),
              (automationScheduleValue86.byweekday ||= []),
              automationScheduleValue86.byweekday.push(
                automationScheduleValue73[automationScheduleValue139].nth(
                  automationScheduleValue138,
                ),
              ))
            : ((automationScheduleValue86.bymonthday ||= []),
              automationScheduleValue86.bymonthday.push(
                automationScheduleValue138,
              ),
              automationScheduleValue87.accept("day(s)"));
        else if (automationScheduleValue139) {
          automationScheduleValue87.nextSymbol();
          automationScheduleValue86.byweekday ||= [];
          automationScheduleValue86.byweekday.push(
            automationScheduleValue73[automationScheduleValue139],
          );
        } else if (automationScheduleValue87.symbol === "weekday(s)") {
          automationScheduleValue87.nextSymbol();
          automationScheduleValue86.byweekday ||= [
            automationScheduleValue73.MO,
            automationScheduleValue73.TU,
            automationScheduleValue73.WE,
            automationScheduleValue73.TH,
            automationScheduleValue73.FR,
          ];
        } else if (automationScheduleValue87.symbol === "week(s)") {
          automationScheduleValue87.nextSymbol();
          var automationScheduleValue141 =
            automationScheduleValue87.acceptNumber();
          if (!automationScheduleValue141)
            throw Error(
              "Unexpected symbol " +
                automationScheduleValue87.symbol +
                ", expected week number",
            );
          for (
            automationScheduleValue86.byweekno = [
              parseInt(automationScheduleValue141[0], 10),
            ];
            automationScheduleValue87.accept("comma");

          ) {
            if (
              ((automationScheduleValue141 =
                automationScheduleValue87.acceptNumber()),
              !automationScheduleValue141)
            )
              throw Error(
                "Unexpected symbol " +
                  automationScheduleValue87.symbol +
                  "; expected monthday",
              );
            automationScheduleValue86.byweekno.push(
              parseInt(automationScheduleValue141[0], 10),
            );
          }
        } else if (automationScheduleValue140) {
          automationScheduleValue87.nextSymbol();
          automationScheduleValue86.bymonth ||= [];
          automationScheduleValue86.bymonth.push(automationScheduleValue140);
        } else return;
      } while (
        automationScheduleValue87.accept("comma") ||
        automationScheduleValue87.accept("the") ||
        automationScheduleValue87.accept("on")
      );
  }
  function automationScheduleHelper79() {
    if (automationScheduleValue87.accept("at"))
      do {
        var automationScheduleValue298 =
          automationScheduleValue87.acceptNumber();
        if (!automationScheduleValue298)
          throw Error(
            "Unexpected symbol " +
              automationScheduleValue87.symbol +
              ", expected hour",
          );
        for (
          automationScheduleValue86.byhour = [
            parseInt(automationScheduleValue298[0], 10),
          ];
          automationScheduleValue87.accept("comma");

        ) {
          if (
            ((automationScheduleValue298 =
              automationScheduleValue87.acceptNumber()),
            !automationScheduleValue298)
          )
            throw Error(
              "Unexpected symbol " +
                automationScheduleValue87.symbol +
                "; expected hour",
            );
          automationScheduleValue86.byhour.push(
            parseInt(automationScheduleValue298[0], 10),
          );
        }
      } while (
        automationScheduleValue87.accept("comma") ||
        automationScheduleValue87.accept("at")
      );
  }
  function automationScheduleHelper80() {
    switch (automationScheduleValue87.symbol) {
      case "january":
        return 1;
      case "february":
        return 2;
      case "march":
        return 3;
      case "april":
        return 4;
      case "may":
        return 5;
      case "june":
        return 6;
      case "july":
        return 7;
      case "august":
        return 8;
      case "september":
        return 9;
      case "october":
        return 10;
      case "november":
        return 11;
      case "december":
        return 12;
      default:
        return false;
    }
  }
  function automationScheduleHelper81() {
    switch (automationScheduleValue87.symbol) {
      case "monday":
      case "tuesday":
      case "wednesday":
      case "thursday":
      case "friday":
      case "saturday":
      case "sunday":
        return automationScheduleValue87.symbol.substr(0, 2).toUpperCase();
      default:
        return false;
    }
  }
  function automationScheduleHelper82() {
    switch (automationScheduleValue87.symbol) {
      case "last":
        return (automationScheduleValue87.nextSymbol(), -1);
      case "first":
        return (automationScheduleValue87.nextSymbol(), 1);
      case "second":
        return (
          automationScheduleValue87.nextSymbol(),
          automationScheduleValue87.accept("last") ? -2 : 2
        );
      case "third":
        return (
          automationScheduleValue87.nextSymbol(),
          automationScheduleValue87.accept("last") ? -3 : 3
        );
      case "nth":
        var automationScheduleValue282 = parseInt(
          automationScheduleValue87.value[1],
          10,
        );
        if (
          automationScheduleValue282 < -366 ||
          automationScheduleValue282 > 366
        )
          throw Error("Nth out of range: " + automationScheduleValue282);
        return (
          automationScheduleValue87.nextSymbol(),
          automationScheduleValue87.accept("last")
            ? -automationScheduleValue282
            : automationScheduleValue282
        );
      default:
        return false;
    }
  }
  function automationScheduleHelper83() {
    automationScheduleValue87.accept("on");
    automationScheduleValue87.accept("the");
    var automationScheduleValue340 = automationScheduleHelper82();
    if (automationScheduleValue340)
      for (
        automationScheduleValue86.bymonthday = [automationScheduleValue340],
          automationScheduleValue87.nextSymbol();
        automationScheduleValue87.accept("comma");

      ) {
        if (
          ((automationScheduleValue340 = automationScheduleHelper82()),
          !automationScheduleValue340)
        )
          throw Error(
            "Unexpected symbol " +
              automationScheduleValue87.symbol +
              "; expected monthday",
          );
        automationScheduleValue86.bymonthday.push(automationScheduleValue340);
        automationScheduleValue87.nextSymbol();
      }
  }
  function automationScheduleHelper84() {
    if (automationScheduleValue87.symbol === "until") {
      var automationScheduleValue348 = Date.parse(
        automationScheduleValue87.text,
      );
      if (!automationScheduleValue348)
        throw Error(
          "Cannot parse until date:" + automationScheduleValue87.text,
        );
      automationScheduleValue86.until = new Date(automationScheduleValue348);
    } else
      automationScheduleValue87.accept("for") &&
        ((automationScheduleValue86.count = parseInt(
          automationScheduleValue87.value[0],
          10,
        )),
        automationScheduleValue87.expect("number"));
  }
}
var automationScheduleValue44;
(function (automationScheduleParam125) {
  automationScheduleParam125[(automationScheduleParam125.YEARLY = 0)] =
    "YEARLY";
  automationScheduleParam125[(automationScheduleParam125.MONTHLY = 1)] =
    "MONTHLY";
  automationScheduleParam125[(automationScheduleParam125.WEEKLY = 2)] =
    "WEEKLY";
  automationScheduleParam125[(automationScheduleParam125.DAILY = 3)] = "DAILY";
  automationScheduleParam125[(automationScheduleParam125.HOURLY = 4)] =
    "HOURLY";
  automationScheduleParam125[(automationScheduleParam125.MINUTELY = 5)] =
    "MINUTELY";
  automationScheduleParam125[(automationScheduleParam125.SECONDLY = 6)] =
    "SECONDLY";
})((automationScheduleValue44 ||= {}));
function automationScheduleHelper3(automationScheduleParam352) {
  return automationScheduleParam352 < automationScheduleValue44.HOURLY;
}
var automationScheduleValue45 = function (
    automationScheduleParam263,
    automationScheduleParam264,
  ) {
    return (
      automationScheduleParam264 === undefined &&
        (automationScheduleParam264 = automationScheduleValue39),
      new automationScheduleValue73(
        automationScheduleHelper2(
          automationScheduleParam263,
          automationScheduleParam264,
        ) || undefined,
      )
    );
  },
  automationScheduleValue46 = [
    "count",
    "until",
    "interval",
    "byweekday",
    "bymonthday",
    "bymonth",
  ];
automationScheduleValue42.IMPLEMENTED = [];
automationScheduleValue42.IMPLEMENTED[automationScheduleValue44.HOURLY] =
  automationScheduleValue46;
automationScheduleValue42.IMPLEMENTED[automationScheduleValue44.MINUTELY] =
  automationScheduleValue46;
automationScheduleValue42.IMPLEMENTED[automationScheduleValue44.DAILY] = [
  "byhour",
].concat(automationScheduleValue46);
automationScheduleValue42.IMPLEMENTED[automationScheduleValue44.WEEKLY] =
  automationScheduleValue46;
automationScheduleValue42.IMPLEMENTED[automationScheduleValue44.MONTHLY] =
  automationScheduleValue46;
automationScheduleValue42.IMPLEMENTED[automationScheduleValue44.YEARLY] = [
  "byweekno",
  "byyearday",
].concat(automationScheduleValue46);
var automationScheduleValue47 = function (
    automationScheduleParam290,
    automationScheduleParam291,
    automationScheduleParam292,
    automationScheduleParam293,
  ) {
    return new automationScheduleValue42(
      automationScheduleParam290,
      automationScheduleParam291,
      automationScheduleParam292,
      automationScheduleParam293,
    ).toString();
  },
  automationScheduleValue48 = automationScheduleValue42.isFullyConvertible,
  automationScheduleValue49 = (function () {
    function automationScheduleHelper95(
      automationScheduleParam217,
      automationScheduleParam218,
      automationScheduleParam219,
      automationScheduleParam220,
    ) {
      this.hour = automationScheduleParam217;
      this.minute = automationScheduleParam218;
      this.second = automationScheduleParam219;
      this.millisecond = automationScheduleParam220 || 0;
    }
    return (
      (automationScheduleHelper95.prototype.getHours = function () {
        return this.hour;
      }),
      (automationScheduleHelper95.prototype.getMinutes = function () {
        return this.minute;
      }),
      (automationScheduleHelper95.prototype.getSeconds = function () {
        return this.second;
      }),
      (automationScheduleHelper95.prototype.getMilliseconds = function () {
        return this.millisecond;
      }),
      (automationScheduleHelper95.prototype.getTime = function () {
        return (
          (this.hour * 60 * 60 + this.minute * 60 + this.second) * 1e3 +
          this.millisecond
        );
      }),
      automationScheduleHelper95
    );
  })(),
  automationScheduleValue50 = (function (automationScheduleParam3) {
    automationScheduleImport2(
      automationScheduleHelper86,
      automationScheduleParam3,
    );
    function automationScheduleHelper86(
      automationScheduleParam210,
      automationScheduleParam211,
      automationScheduleParam212,
      automationScheduleParam213,
      automationScheduleParam214,
      automationScheduleParam215,
      automationScheduleParam216,
    ) {
      var automationScheduleValue428 =
        automationScheduleParam3.call(
          this,
          automationScheduleParam213,
          automationScheduleParam214,
          automationScheduleParam215,
          automationScheduleParam216,
        ) || this;
      return (
        (automationScheduleValue428.year = automationScheduleParam210),
        (automationScheduleValue428.month = automationScheduleParam211),
        (automationScheduleValue428.day = automationScheduleParam212),
        automationScheduleValue428
      );
    }
    return (
      (automationScheduleHelper86.fromDate = function (
        automationScheduleParam131,
      ) {
        return new this(
          automationScheduleParam131.getUTCFullYear(),
          automationScheduleParam131.getUTCMonth() + 1,
          automationScheduleParam131.getUTCDate(),
          automationScheduleParam131.getUTCHours(),
          automationScheduleParam131.getUTCMinutes(),
          automationScheduleParam131.getUTCSeconds(),
          automationScheduleParam131.valueOf() % 1e3,
        );
      }),
      (automationScheduleHelper86.prototype.getWeekday = function () {
        return automationScheduleValue28(new Date(this.getTime()));
      }),
      (automationScheduleHelper86.prototype.getTime = function () {
        return new Date(
          Date.UTC(
            this.year,
            this.month - 1,
            this.day,
            this.hour,
            this.minute,
            this.second,
            this.millisecond,
          ),
        ).getTime();
      }),
      (automationScheduleHelper86.prototype.getDay = function () {
        return this.day;
      }),
      (automationScheduleHelper86.prototype.getMonth = function () {
        return this.month;
      }),
      (automationScheduleHelper86.prototype.getYear = function () {
        return this.year;
      }),
      (automationScheduleHelper86.prototype.addYears = function (
        automationScheduleParam344,
      ) {
        this.year += automationScheduleParam344;
      }),
      (automationScheduleHelper86.prototype.addMonths = function (
        automationScheduleParam127,
      ) {
        if (((this.month += automationScheduleParam127), this.month > 12)) {
          var automationScheduleValue353 = Math.floor(this.month / 12);
          this.month = automationScheduleValue11(this.month, 12);
          this.year += automationScheduleValue353;
          this.month === 0 && ((this.month = 12), --this.year);
        }
      }),
      (automationScheduleHelper86.prototype.addWeekly = function (
        automationScheduleParam156,
        automationScheduleParam157,
      ) {
        automationScheduleParam157 > this.getWeekday()
          ? (this.day +=
              -(this.getWeekday() + 1 + (6 - automationScheduleParam157)) +
              automationScheduleParam156 * 7)
          : (this.day +=
              -(this.getWeekday() - automationScheduleParam157) +
              automationScheduleParam156 * 7);
        this.fixDay();
      }),
      (automationScheduleHelper86.prototype.addDaily = function (
        automationScheduleParam299,
      ) {
        this.day += automationScheduleParam299;
        this.fixDay();
      }),
      (automationScheduleHelper86.prototype.addHours = function (
        automationScheduleParam105,
        automationScheduleParam106,
        automationScheduleParam107,
      ) {
        for (
          automationScheduleParam106 &&
          (this.hour +=
            Math.floor((23 - this.hour) / automationScheduleParam105) *
            automationScheduleParam105);
          ;

        ) {
          this.hour += automationScheduleParam105;
          var automationScheduleValue332 = automationScheduleValue12(
              this.hour,
              24,
            ),
            automationScheduleValue333 = automationScheduleValue332.div,
            automationScheduleValue334 = automationScheduleValue332.mod;
          if (
            (automationScheduleValue333 &&
              ((this.hour = automationScheduleValue334),
              this.addDaily(automationScheduleValue333)),
            automationScheduleValue13(automationScheduleParam107) ||
              automationScheduleValue15(automationScheduleParam107, this.hour))
          )
            break;
        }
      }),
      (automationScheduleHelper86.prototype.addMinutes = function (
        automationScheduleParam75,
        automationScheduleParam76,
        automationScheduleParam77,
        automationScheduleParam78,
      ) {
        for (
          automationScheduleParam76 &&
          (this.minute +=
            Math.floor(
              (1439 - (this.hour * 60 + this.minute)) /
                automationScheduleParam75,
            ) * automationScheduleParam75);
          ;

        ) {
          this.minute += automationScheduleParam75;
          var automationScheduleValue293 = automationScheduleValue12(
              this.minute,
              60,
            ),
            automationScheduleValue294 = automationScheduleValue293.div,
            automationScheduleValue295 = automationScheduleValue293.mod;
          if (
            (automationScheduleValue294 &&
              ((this.minute = automationScheduleValue295),
              this.addHours(
                automationScheduleValue294,
                false,
                automationScheduleParam77,
              )),
            (automationScheduleValue13(automationScheduleParam77) ||
              automationScheduleValue15(
                automationScheduleParam77,
                this.hour,
              )) &&
              (automationScheduleValue13(automationScheduleParam78) ||
                automationScheduleValue15(
                  automationScheduleParam78,
                  this.minute,
                )))
          )
            break;
        }
      }),
      (automationScheduleHelper86.prototype.addSeconds = function (
        automationScheduleParam53,
        automationScheduleParam54,
        automationScheduleParam55,
        automationScheduleParam56,
        automationScheduleParam57,
      ) {
        for (
          automationScheduleParam54 &&
          (this.second +=
            Math.floor(
              (86399 - (this.hour * 3600 + this.minute * 60 + this.second)) /
                automationScheduleParam53,
            ) * automationScheduleParam53);
          ;

        ) {
          this.second += automationScheduleParam53;
          var automationScheduleValue265 = automationScheduleValue12(
              this.second,
              60,
            ),
            automationScheduleValue266 = automationScheduleValue265.div,
            automationScheduleValue267 = automationScheduleValue265.mod;
          if (
            (automationScheduleValue266 &&
              ((this.second = automationScheduleValue267),
              this.addMinutes(
                automationScheduleValue266,
                false,
                automationScheduleParam55,
                automationScheduleParam56,
              )),
            (automationScheduleValue13(automationScheduleParam55) ||
              automationScheduleValue15(
                automationScheduleParam55,
                this.hour,
              )) &&
              (automationScheduleValue13(automationScheduleParam56) ||
                automationScheduleValue15(
                  automationScheduleParam56,
                  this.minute,
                )) &&
              (automationScheduleValue13(automationScheduleParam57) ||
                automationScheduleValue15(
                  automationScheduleParam57,
                  this.second,
                )))
          )
            break;
        }
      }),
      (automationScheduleHelper86.prototype.fixDay = function () {
        if (!(this.day <= 28)) {
          var automationScheduleValue297 = automationScheduleValue29(
            this.year,
            this.month - 1,
          )[1];
          if (!(this.day <= automationScheduleValue297))
            for (; this.day > automationScheduleValue297; ) {
              if (
                ((this.day -= automationScheduleValue297),
                ++this.month,
                this.month === 13 &&
                  ((this.month = 1), ++this.year, this.year > 9999))
              )
                return;
              automationScheduleValue297 = automationScheduleValue29(
                this.year,
                this.month - 1,
              )[1];
            }
        }
      }),
      (automationScheduleHelper86.prototype.add = function (
        automationScheduleParam39,
        automationScheduleParam40,
      ) {
        var automationScheduleValue237 = automationScheduleParam39.freq,
          automationScheduleValue238 = automationScheduleParam39.interval,
          automationScheduleValue239 = automationScheduleParam39.wkst,
          automationScheduleValue240 = automationScheduleParam39.byhour,
          automationScheduleValue241 = automationScheduleParam39.byminute,
          automationScheduleValue242 = automationScheduleParam39.bysecond;
        switch (automationScheduleValue237) {
          case automationScheduleValue44.YEARLY:
            return this.addYears(automationScheduleValue238);
          case automationScheduleValue44.MONTHLY:
            return this.addMonths(automationScheduleValue238);
          case automationScheduleValue44.WEEKLY:
            return this.addWeekly(
              automationScheduleValue238,
              automationScheduleValue239,
            );
          case automationScheduleValue44.DAILY:
            return this.addDaily(automationScheduleValue238);
          case automationScheduleValue44.HOURLY:
            return this.addHours(
              automationScheduleValue238,
              automationScheduleParam40,
              automationScheduleValue240,
            );
          case automationScheduleValue44.MINUTELY:
            return this.addMinutes(
              automationScheduleValue238,
              automationScheduleParam40,
              automationScheduleValue240,
              automationScheduleValue241,
            );
          case automationScheduleValue44.SECONDLY:
            return this.addSeconds(
              automationScheduleValue238,
              automationScheduleParam40,
              automationScheduleValue240,
              automationScheduleValue241,
              automationScheduleValue242,
            );
        }
      }),
      automationScheduleHelper86
    );
  })(automationScheduleValue49);
function automationScheduleHelper4(automationScheduleParam128) {
  for (
    var automationScheduleValue354 = [],
      automationScheduleValue355 = Object.keys(automationScheduleParam128),
      automationScheduleValue356 = 0,
      automationScheduleValue357 = automationScheduleValue355;
    automationScheduleValue356 < automationScheduleValue357.length;
    automationScheduleValue356++
  ) {
    var automationScheduleValue358 =
      automationScheduleValue357[automationScheduleValue356];
    automationScheduleValue15(
      automationScheduleValue72,
      automationScheduleValue358,
    ) || automationScheduleValue354.push(automationScheduleValue358);
    automationScheduleValue22(
      automationScheduleParam128[automationScheduleValue358],
    ) &&
      !automationScheduleValue23(
        automationScheduleParam128[automationScheduleValue358],
      ) &&
      automationScheduleValue354.push(automationScheduleValue358);
  }
  if (automationScheduleValue354.length)
    throw Error("Invalid options: " + automationScheduleValue354.join(", "));
  return automationScheduleImport3({}, automationScheduleParam128);
}
function automationScheduleHelper5(automationScheduleParam4) {
  var automationScheduleValue88 = automationScheduleImport3(
    automationScheduleImport3({}, automationScheduleValue71),
    automationScheduleHelper4(automationScheduleParam4),
  );
  if (
    (automationScheduleValue3(automationScheduleValue88.byeaster) &&
      (automationScheduleValue88.freq = automationScheduleValue73.YEARLY),
    !(
      automationScheduleValue3(automationScheduleValue88.freq) &&
      automationScheduleValue73.FREQUENCIES[automationScheduleValue88.freq]
    ))
  )
    throw Error(
      `Invalid frequency: ${automationScheduleValue88.freq} ${automationScheduleParam4.freq}`,
    );
  if (
    ((automationScheduleValue88.dtstart ||= new Date(
      new Date().setMilliseconds(0),
    )),
    automationScheduleValue3(automationScheduleValue88.wkst)
      ? automationScheduleValue4(automationScheduleValue88.wkst) ||
        (automationScheduleValue88.wkst =
          automationScheduleValue88.wkst.weekday)
      : (automationScheduleValue88.wkst = automationScheduleValue73.MO.weekday),
    automationScheduleValue3(automationScheduleValue88.bysetpos))
  ) {
    automationScheduleValue4(automationScheduleValue88.bysetpos) &&
      (automationScheduleValue88.bysetpos = [
        automationScheduleValue88.bysetpos,
      ]);
    for (
      var automationScheduleValue89 = 0;
      automationScheduleValue89 < automationScheduleValue88.bysetpos.length;
      automationScheduleValue89++
    ) {
      var automationScheduleValue90 =
        automationScheduleValue88.bysetpos[automationScheduleValue89];
      if (
        automationScheduleValue90 === 0 ||
        !(automationScheduleValue90 >= -366 && automationScheduleValue90 <= 366)
      )
        throw Error(
          "bysetpos must be between 1 and 366, or between -366 and -1",
        );
    }
  }
  if (
    !(
      automationScheduleValue88.byweekno ||
      automationScheduleValue14(automationScheduleValue88.byweekno) ||
      automationScheduleValue14(automationScheduleValue88.byyearday) ||
      automationScheduleValue88.bymonthday ||
      automationScheduleValue14(automationScheduleValue88.bymonthday) ||
      automationScheduleValue3(automationScheduleValue88.byweekday) ||
      automationScheduleValue3(automationScheduleValue88.byeaster)
    )
  )
    switch (automationScheduleValue88.freq) {
      case automationScheduleValue73.YEARLY:
        automationScheduleValue88.bymonth ||=
          automationScheduleValue88.dtstart.getUTCMonth() + 1;
        automationScheduleValue88.bymonthday =
          automationScheduleValue88.dtstart.getUTCDate();
        break;
      case automationScheduleValue73.MONTHLY:
        automationScheduleValue88.bymonthday =
          automationScheduleValue88.dtstart.getUTCDate();
        break;
      case automationScheduleValue73.WEEKLY:
        automationScheduleValue88.byweekday = [
          automationScheduleValue28(automationScheduleValue88.dtstart),
        ];
        break;
    }
  if (
    (automationScheduleValue3(automationScheduleValue88.bymonth) &&
      !automationScheduleValue6(automationScheduleValue88.bymonth) &&
      (automationScheduleValue88.bymonth = [automationScheduleValue88.bymonth]),
    automationScheduleValue3(automationScheduleValue88.byyearday) &&
      !automationScheduleValue6(automationScheduleValue88.byyearday) &&
      automationScheduleValue4(automationScheduleValue88.byyearday) &&
      (automationScheduleValue88.byyearday = [
        automationScheduleValue88.byyearday,
      ]),
    !automationScheduleValue3(automationScheduleValue88.bymonthday))
  ) {
    automationScheduleValue88.bymonthday = [];
    automationScheduleValue88.bynmonthday = [];
  } else if (automationScheduleValue6(automationScheduleValue88.bymonthday)) {
    for (
      var automationScheduleValue91 = [],
        automationScheduleValue92 = [],
        automationScheduleValue89 = 0;
      automationScheduleValue89 < automationScheduleValue88.bymonthday.length;
      automationScheduleValue89++
    ) {
      var automationScheduleValue90 =
        automationScheduleValue88.bymonthday[automationScheduleValue89];
      automationScheduleValue90 > 0
        ? automationScheduleValue91.push(automationScheduleValue90)
        : automationScheduleValue90 < 0 &&
          automationScheduleValue92.push(automationScheduleValue90);
    }
    automationScheduleValue88.bymonthday = automationScheduleValue91;
    automationScheduleValue88.bynmonthday = automationScheduleValue92;
  } else
    automationScheduleValue88.bymonthday < 0
      ? ((automationScheduleValue88.bynmonthday = [
          automationScheduleValue88.bymonthday,
        ]),
        (automationScheduleValue88.bymonthday = []))
      : ((automationScheduleValue88.bynmonthday = []),
        (automationScheduleValue88.bymonthday = [
          automationScheduleValue88.bymonthday,
        ]));
  if (
    (automationScheduleValue3(automationScheduleValue88.byweekno) &&
      !automationScheduleValue6(automationScheduleValue88.byweekno) &&
      (automationScheduleValue88.byweekno = [
        automationScheduleValue88.byweekno,
      ]),
    !automationScheduleValue3(automationScheduleValue88.byweekday))
  )
    automationScheduleValue88.bynweekday = null;
  else if (automationScheduleValue4(automationScheduleValue88.byweekday)) {
    automationScheduleValue88.byweekday = [automationScheduleValue88.byweekday];
    automationScheduleValue88.bynweekday = null;
  } else if (automationScheduleValue5(automationScheduleValue88.byweekday)) {
    automationScheduleValue88.byweekday = [
      automationScheduleValue2.fromStr(automationScheduleValue88.byweekday)
        .weekday,
    ];
    automationScheduleValue88.bynweekday = null;
  } else if (
    automationScheduleValue88.byweekday instanceof automationScheduleValue2
  )
    !automationScheduleValue88.byweekday.n ||
    automationScheduleValue88.freq > automationScheduleValue73.MONTHLY
      ? ((automationScheduleValue88.byweekday = [
          automationScheduleValue88.byweekday.weekday,
        ]),
        (automationScheduleValue88.bynweekday = null))
      : ((automationScheduleValue88.bynweekday = [
          [
            automationScheduleValue88.byweekday.weekday,
            automationScheduleValue88.byweekday.n,
          ],
        ]),
        (automationScheduleValue88.byweekday = null));
  else {
    for (
      var automationScheduleValue93 = [],
        automationScheduleValue94 = [],
        automationScheduleValue89 = 0;
      automationScheduleValue89 < automationScheduleValue88.byweekday.length;
      automationScheduleValue89++
    ) {
      var automationScheduleValue95 =
        automationScheduleValue88.byweekday[automationScheduleValue89];
      if (automationScheduleValue4(automationScheduleValue95)) {
        automationScheduleValue93.push(automationScheduleValue95);
        continue;
      } else if (automationScheduleValue5(automationScheduleValue95)) {
        automationScheduleValue93.push(
          automationScheduleValue2.fromStr(automationScheduleValue95).weekday,
        );
        continue;
      }
      !automationScheduleValue95.n ||
      automationScheduleValue88.freq > automationScheduleValue73.MONTHLY
        ? automationScheduleValue93.push(automationScheduleValue95.weekday)
        : automationScheduleValue94.push([
            automationScheduleValue95.weekday,
            automationScheduleValue95.n,
          ]);
    }
    automationScheduleValue88.byweekday = automationScheduleValue14(
      automationScheduleValue93,
    )
      ? automationScheduleValue93
      : null;
    automationScheduleValue88.bynweekday = automationScheduleValue14(
      automationScheduleValue94,
    )
      ? automationScheduleValue94
      : null;
  }
  return (
    automationScheduleValue3(automationScheduleValue88.byhour)
      ? automationScheduleValue4(automationScheduleValue88.byhour) &&
        (automationScheduleValue88.byhour = [automationScheduleValue88.byhour])
      : (automationScheduleValue88.byhour =
          automationScheduleValue88.freq < automationScheduleValue73.HOURLY
            ? [automationScheduleValue88.dtstart.getUTCHours()]
            : null),
    automationScheduleValue3(automationScheduleValue88.byminute)
      ? automationScheduleValue4(automationScheduleValue88.byminute) &&
        (automationScheduleValue88.byminute = [
          automationScheduleValue88.byminute,
        ])
      : (automationScheduleValue88.byminute =
          automationScheduleValue88.freq < automationScheduleValue73.MINUTELY
            ? [automationScheduleValue88.dtstart.getUTCMinutes()]
            : null),
    automationScheduleValue3(automationScheduleValue88.bysecond)
      ? automationScheduleValue4(automationScheduleValue88.bysecond) &&
        (automationScheduleValue88.bysecond = [
          automationScheduleValue88.bysecond,
        ])
      : (automationScheduleValue88.bysecond =
          automationScheduleValue88.freq < automationScheduleValue73.SECONDLY
            ? [automationScheduleValue88.dtstart.getUTCSeconds()]
            : null),
    {
      parsedOptions: automationScheduleValue88,
    }
  );
}
function automationScheduleHelper6(automationScheduleParam115) {
  var automationScheduleValue341 =
    automationScheduleParam115.dtstart.getTime() % 1e3;
  if (!automationScheduleHelper3(automationScheduleParam115.freq)) return [];
  var automationScheduleValue342 = [];
  return (
    automationScheduleParam115.byhour.forEach(function (item) {
      automationScheduleParam115.byminute.forEach(function (_item) {
        automationScheduleParam115.bysecond.forEach(function (__item) {
          automationScheduleValue342.push(
            new automationScheduleValue49(
              item,
              _item,
              __item,
              automationScheduleValue341,
            ),
          );
        });
      });
    }),
    automationScheduleValue342
  );
}
function automationScheduleHelper7(automationScheduleParam182) {
  var automationScheduleValue414 = automationScheduleParam182
    .split("\n")
    .map(automationScheduleHelper9)
    .filter(function (item) {
      return item !== null;
    });
  return automationScheduleImport3(
    automationScheduleImport3({}, automationScheduleValue414[0]),
    automationScheduleValue414[1],
  );
}
function automationScheduleHelper8(automationScheduleParam160) {
  var automationScheduleValue396 = {},
    automationScheduleValue397 =
      /DTSTART(?:;TZID=([^:=]+?))?(?::|=)([^;\s]+)/i.exec(
        automationScheduleParam160,
      );
  if (!automationScheduleValue397) return automationScheduleValue396;
  var automationScheduleValue398 = automationScheduleValue397[1],
    automationScheduleValue399 = automationScheduleValue397[2];
  return (
    automationScheduleValue398 &&
      (automationScheduleValue396.tzid = automationScheduleValue398),
    (automationScheduleValue396.dtstart = automationScheduleValue35(
      automationScheduleValue399,
    )),
    automationScheduleValue396
  );
}
function automationScheduleHelper9(automationScheduleParam95) {
  if (
    ((automationScheduleParam95 = automationScheduleParam95.replace(
      /^\s+|\s+$/,
      "",
    )),
    !automationScheduleParam95.length)
  )
    return null;
  var automationScheduleValue321 = /^([A-Z]+?)[:;]/.exec(
    automationScheduleParam95.toUpperCase(),
  );
  if (!automationScheduleValue321)
    return automationScheduleHelper10(automationScheduleParam95);
  var automationScheduleValue322 = automationScheduleValue321[1];
  switch (automationScheduleValue322.toUpperCase()) {
    case "RRULE":
    case "EXRULE":
      return automationScheduleHelper10(automationScheduleParam95);
    case "DTSTART":
      return automationScheduleHelper8(automationScheduleParam95);
    default:
      throw Error(
        `Unsupported RFC prop ${automationScheduleValue322} in ${automationScheduleParam95}`,
      );
  }
}
function automationScheduleHelper10(automationScheduleParam15) {
  var automationScheduleValue135 = automationScheduleHelper8(
    automationScheduleParam15.replace(/^RRULE:/i, ""),
  );
  return (
    automationScheduleParam15
      .replace(/^(?:RRULE|EXRULE):/i, "")
      .split(";")
      .forEach(function (item) {
        var automationScheduleValue173 = item.split("="),
          automationScheduleValue174 = automationScheduleValue173[0],
          automationScheduleValue175 = automationScheduleValue173[1];
        switch (automationScheduleValue174.toUpperCase()) {
          case "FREQ":
            automationScheduleValue135.freq =
              automationScheduleValue44[
                automationScheduleValue175.toUpperCase()
              ];
            break;
          case "WKST":
            automationScheduleValue135.wkst =
              automationScheduleValue70[
                automationScheduleValue175.toUpperCase()
              ];
            break;
          case "COUNT":
          case "INTERVAL":
          case "BYSETPOS":
          case "BYMONTH":
          case "BYMONTHDAY":
          case "BYYEARDAY":
          case "BYWEEKNO":
          case "BYHOUR":
          case "BYMINUTE":
          case "BYSECOND":
            var automationScheduleValue176 = automationScheduleHelper11(
                automationScheduleValue175,
              ),
              automationScheduleValue177 =
                automationScheduleValue174.toLowerCase();
            automationScheduleValue135[automationScheduleValue177] =
              automationScheduleValue176;
            break;
          case "BYWEEKDAY":
          case "BYDAY":
            automationScheduleValue135.byweekday = automationScheduleHelper13(
              automationScheduleValue175,
            );
            break;
          case "DTSTART":
          case "TZID":
            var automationScheduleValue178 = automationScheduleHelper8(
              automationScheduleParam15,
            );
            automationScheduleValue135.tzid = automationScheduleValue178.tzid;
            automationScheduleValue135.dtstart =
              automationScheduleValue178.dtstart;
            break;
          case "UNTIL":
            automationScheduleValue135.until = automationScheduleValue35(
              automationScheduleValue175,
            );
            break;
          case "BYEASTER":
            automationScheduleValue135.byeaster = Number(
              automationScheduleValue175,
            );
            break;
          default:
            throw Error(
              "Unknown RRULE property '" + automationScheduleValue174 + "'",
            );
        }
      }),
    automationScheduleValue135
  );
}
function automationScheduleHelper11(automationScheduleParam273) {
  return automationScheduleParam273.indexOf(",") === -1
    ? automationScheduleHelper12(automationScheduleParam273)
    : automationScheduleParam273.split(",").map(automationScheduleHelper12);
}
function automationScheduleHelper12(automationScheduleParam298) {
  return /^[+-]?\d+$/.test(automationScheduleParam298)
    ? Number(automationScheduleParam298)
    : automationScheduleParam298;
}
function automationScheduleHelper13(automationScheduleParam114) {
  return automationScheduleParam114.split(",").map(function (item) {
    if (item.length === 2) return automationScheduleValue70[item];
    var automationScheduleValue359 = item.match(/^([+-]?\d{1,2})([A-Z]{2})$/);
    if (!automationScheduleValue359 || automationScheduleValue359.length < 3)
      throw SyntaxError(`Invalid weekday string: ${item}`);
    var automationScheduleValue360 = Number(automationScheduleValue359[1]),
      automationScheduleValue361 =
        automationScheduleValue70[automationScheduleValue359[2]].weekday;
    return new automationScheduleValue2(
      automationScheduleValue361,
      automationScheduleValue360,
    );
  });
}
var automationScheduleValue51 = (function () {
  function automationScheduleHelper94(
    automationScheduleParam195,
    automationScheduleParam196,
  ) {
    if (isNaN(automationScheduleParam195.getTime()))
      throw RangeError("Invalid date passed to DateWithZone");
    this.date = automationScheduleParam195;
    this.tzid = automationScheduleParam196;
  }
  return (
    Object.defineProperty(automationScheduleHelper94.prototype, "isUTC", {
      get: function () {
        return !this.tzid || this.tzid.toUpperCase() === "UTC";
      },
      enumerable: false,
      configurable: true,
    }),
    (automationScheduleHelper94.prototype.toString = function () {
      var automationScheduleValue432 = automationScheduleValue34(
        this.date.getTime(),
        this.isUTC,
      );
      return this.isUTC
        ? `:${automationScheduleValue432}`
        : `;TZID=${this.tzid}:${automationScheduleValue432}`;
    }),
    (automationScheduleHelper94.prototype.getTime = function () {
      return this.date.getTime();
    }),
    (automationScheduleHelper94.prototype.rezonedDate = function () {
      return this.isUTC
        ? this.date
        : automationScheduleValue37(this.date, this.tzid);
    }),
    automationScheduleHelper94
  );
})();
function automationScheduleHelper14(automationScheduleParam14) {
  for (
    var automationScheduleValue124 = [],
      automationScheduleValue125 = "",
      automationScheduleValue126 = Object.keys(automationScheduleParam14),
      automationScheduleValue127 = Object.keys(automationScheduleValue71),
      automationScheduleValue128 = 0;
    automationScheduleValue128 < automationScheduleValue126.length;
    automationScheduleValue128++
  )
    if (
      automationScheduleValue126[automationScheduleValue128] !== "tzid" &&
      automationScheduleValue15(
        automationScheduleValue127,
        automationScheduleValue126[automationScheduleValue128],
      )
    ) {
      var automationScheduleValue129 =
          automationScheduleValue126[automationScheduleValue128].toUpperCase(),
        automationScheduleValue130 =
          automationScheduleParam14[
            automationScheduleValue126[automationScheduleValue128]
          ],
        automationScheduleValue131 = "";
      if (
        !(
          !automationScheduleValue3(automationScheduleValue130) ||
          (automationScheduleValue6(automationScheduleValue130) &&
            !automationScheduleValue130.length)
        )
      ) {
        switch (automationScheduleValue129) {
          case "FREQ":
            automationScheduleValue131 =
              automationScheduleValue73.FREQUENCIES[
                automationScheduleParam14.freq
              ];
            break;
          case "WKST":
            automationScheduleValue131 = automationScheduleValue4(
              automationScheduleValue130,
            )
              ? new automationScheduleValue2(
                  automationScheduleValue130,
                ).toString()
              : automationScheduleValue130.toString();
            break;
          case "BYWEEKDAY":
            automationScheduleValue129 = "BYDAY";
            automationScheduleValue131 = automationScheduleValue9(
              automationScheduleValue130,
            )
              .map(function (item) {
                return item instanceof automationScheduleValue2
                  ? item
                  : automationScheduleValue6(item)
                    ? new automationScheduleValue2(item[0], item[1])
                    : new automationScheduleValue2(item);
              })
              .toString();
            break;
          case "DTSTART":
            automationScheduleValue125 = automationScheduleHelper15(
              automationScheduleValue130,
              automationScheduleParam14.tzid,
            );
            break;
          case "UNTIL":
            automationScheduleValue131 = automationScheduleValue34(
              automationScheduleValue130,
              !automationScheduleParam14.tzid,
            );
            break;
          default:
            if (automationScheduleValue6(automationScheduleValue130)) {
              for (
                var automationScheduleValue132 = [],
                  automationScheduleValue133 = 0;
                automationScheduleValue133 < automationScheduleValue130.length;
                automationScheduleValue133++
              )
                automationScheduleValue132[automationScheduleValue133] = String(
                  automationScheduleValue130[automationScheduleValue133],
                );
              automationScheduleValue131 =
                automationScheduleValue132.toString();
            } else
              automationScheduleValue131 = String(automationScheduleValue130);
        }
        automationScheduleValue131 &&
          automationScheduleValue124.push([
            automationScheduleValue129,
            automationScheduleValue131,
          ]);
      }
    }
  var automationScheduleValue134 = automationScheduleValue124
      .map(function (item) {
        return `${item[0]}=${item[1].toString()}`;
      })
      .join(";"),
    _automationScheduleH = "";
  return (
    automationScheduleValue134 !== "" &&
      (_automationScheduleH = `RRULE:${automationScheduleValue134}`),
    [automationScheduleValue125, _automationScheduleH]
      .filter(function (item) {
        return !!item;
      })
      .join("\n")
  );
}
function automationScheduleHelper15(
  automationScheduleParam265,
  automationScheduleParam266,
) {
  return automationScheduleParam265
    ? "DTSTART" +
        new automationScheduleValue51(
          new Date(automationScheduleParam265),
          automationScheduleParam266,
        ).toString()
    : "";
}
function automationScheduleHelper16(
  automationScheduleParam118,
  automationScheduleParam119,
) {
  return Array.isArray(automationScheduleParam118)
    ? !Array.isArray(automationScheduleParam119) ||
      automationScheduleParam118.length !== automationScheduleParam119.length
      ? false
      : automationScheduleParam118.every(function (item, index) {
          return item.getTime() === automationScheduleParam119[index].getTime();
        })
    : automationScheduleParam118 instanceof Date
      ? automationScheduleParam119 instanceof Date &&
        automationScheduleParam118.getTime() ===
          automationScheduleParam119.getTime()
      : automationScheduleParam118 === automationScheduleParam119;
}
var automationScheduleValue52 = (function () {
    function automationScheduleHelper91() {
      this.all = false;
      this.before = [];
      this.after = [];
      this.between = [];
    }
    return (
      (automationScheduleHelper91.prototype._cacheAdd = function (
        automationScheduleParam187,
        automationScheduleParam188,
        automationScheduleParam189,
      ) {
        automationScheduleParam188 &&=
          automationScheduleParam188 instanceof Date
            ? automationScheduleValue31(automationScheduleParam188)
            : automationScheduleValue32(automationScheduleParam188);
        automationScheduleParam187 === "all"
          ? (this.all = automationScheduleParam188)
          : ((automationScheduleParam189._value = automationScheduleParam188),
            this[automationScheduleParam187].push(automationScheduleParam189));
      }),
      (automationScheduleHelper91.prototype._cacheGet = function (
        automationScheduleParam29,
        automationScheduleParam30,
      ) {
        var automationScheduleValue206 = false,
          automationScheduleValue207 = automationScheduleParam30
            ? Object.keys(automationScheduleParam30)
            : [],
          automationScheduleValue208 = function (automationScheduleParam173) {
            for (
              var automationScheduleValue403 = 0;
              automationScheduleValue403 < automationScheduleValue207.length;
              automationScheduleValue403++
            ) {
              var automationScheduleValue404 =
                automationScheduleValue207[automationScheduleValue403];
              if (
                !automationScheduleHelper16(
                  automationScheduleParam30[automationScheduleValue404],
                  automationScheduleParam173[automationScheduleValue404],
                )
              )
                return true;
            }
            return false;
          },
          automationScheduleValue209 = this[automationScheduleParam29];
        if (automationScheduleParam29 === "all")
          automationScheduleValue206 = this.all;
        else if (automationScheduleValue6(automationScheduleValue209))
          for (
            var automationScheduleValue210 = 0;
            automationScheduleValue210 < automationScheduleValue209.length;
            automationScheduleValue210++
          ) {
            var automationScheduleValue211 =
              automationScheduleValue209[automationScheduleValue210];
            if (
              !(
                automationScheduleValue207.length &&
                automationScheduleValue208(automationScheduleValue211)
              )
            ) {
              automationScheduleValue206 = automationScheduleValue211._value;
              break;
            }
          }
        if (!automationScheduleValue206 && this.all) {
          for (
            var automationScheduleValue212 = new automationScheduleValue38(
                automationScheduleParam29,
                automationScheduleParam30,
              ),
              automationScheduleValue210 = 0;
            automationScheduleValue210 < this.all.length &&
            automationScheduleValue212.accept(
              this.all[automationScheduleValue210],
            );
            automationScheduleValue210++
          );
          automationScheduleValue206 = automationScheduleValue212.getValue();
          this._cacheAdd(
            automationScheduleParam29,
            automationScheduleValue206,
            automationScheduleParam30,
          );
        }
        return automationScheduleValue6(automationScheduleValue206)
          ? automationScheduleValue32(automationScheduleValue206)
          : automationScheduleValue206 instanceof Date
            ? automationScheduleValue31(automationScheduleValue206)
            : automationScheduleValue206;
      }),
      automationScheduleHelper91
    );
  })(),
  automationScheduleValue53 = automationScheduleImport1(
    automationScheduleImport1(
      automationScheduleImport1(
        automationScheduleImport1(
          automationScheduleImport1(
            automationScheduleImport1(
              automationScheduleImport1(
                automationScheduleImport1(
                  automationScheduleImport1(
                    automationScheduleImport1(
                      automationScheduleImport1(
                        automationScheduleImport1(
                          automationScheduleImport1(
                            [],
                            automationScheduleValue8(1, 31),
                            true,
                          ),
                          automationScheduleValue8(2, 28),
                          true,
                        ),
                        automationScheduleValue8(3, 31),
                        true,
                      ),
                      automationScheduleValue8(4, 30),
                      true,
                    ),
                    automationScheduleValue8(5, 31),
                    true,
                  ),
                  automationScheduleValue8(6, 30),
                  true,
                ),
                automationScheduleValue8(7, 31),
                true,
              ),
              automationScheduleValue8(8, 31),
              true,
            ),
            automationScheduleValue8(9, 30),
            true,
          ),
          automationScheduleValue8(10, 31),
          true,
        ),
        automationScheduleValue8(11, 30),
        true,
      ),
      automationScheduleValue8(12, 31),
      true,
    ),
    automationScheduleValue8(1, 7),
    true,
  ),
  automationScheduleValue54 = automationScheduleImport1(
    automationScheduleImport1(
      automationScheduleImport1(
        automationScheduleImport1(
          automationScheduleImport1(
            automationScheduleImport1(
              automationScheduleImport1(
                automationScheduleImport1(
                  automationScheduleImport1(
                    automationScheduleImport1(
                      automationScheduleImport1(
                        automationScheduleImport1(
                          automationScheduleImport1(
                            [],
                            automationScheduleValue8(1, 31),
                            true,
                          ),
                          automationScheduleValue8(2, 29),
                          true,
                        ),
                        automationScheduleValue8(3, 31),
                        true,
                      ),
                      automationScheduleValue8(4, 30),
                      true,
                    ),
                    automationScheduleValue8(5, 31),
                    true,
                  ),
                  automationScheduleValue8(6, 30),
                  true,
                ),
                automationScheduleValue8(7, 31),
                true,
              ),
              automationScheduleValue8(8, 31),
              true,
            ),
            automationScheduleValue8(9, 30),
            true,
          ),
          automationScheduleValue8(10, 31),
          true,
        ),
        automationScheduleValue8(11, 30),
        true,
      ),
      automationScheduleValue8(12, 31),
      true,
    ),
    automationScheduleValue8(1, 7),
    true,
  ),
  automationScheduleValue55 = automationScheduleValue7(1, 29),
  automationScheduleValue56 = automationScheduleValue7(1, 30),
  automationScheduleValue57 = automationScheduleValue7(1, 31),
  automationScheduleValue58 = automationScheduleValue7(1, 32),
  automationScheduleValue59 = automationScheduleImport1(
    automationScheduleImport1(
      automationScheduleImport1(
        automationScheduleImport1(
          automationScheduleImport1(
            automationScheduleImport1(
              automationScheduleImport1(
                automationScheduleImport1(
                  automationScheduleImport1(
                    automationScheduleImport1(
                      automationScheduleImport1(
                        automationScheduleImport1(
                          automationScheduleImport1(
                            [],
                            automationScheduleValue58,
                            true,
                          ),
                          automationScheduleValue56,
                          true,
                        ),
                        automationScheduleValue58,
                        true,
                      ),
                      automationScheduleValue57,
                      true,
                    ),
                    automationScheduleValue58,
                    true,
                  ),
                  automationScheduleValue57,
                  true,
                ),
                automationScheduleValue58,
                true,
              ),
              automationScheduleValue58,
              true,
            ),
            automationScheduleValue57,
            true,
          ),
          automationScheduleValue58,
          true,
        ),
        automationScheduleValue57,
        true,
      ),
      automationScheduleValue58,
      true,
    ),
    automationScheduleValue58.slice(0, 7),
    true,
  ),
  automationScheduleValue60 = automationScheduleImport1(
    automationScheduleImport1(
      automationScheduleImport1(
        automationScheduleImport1(
          automationScheduleImport1(
            automationScheduleImport1(
              automationScheduleImport1(
                automationScheduleImport1(
                  automationScheduleImport1(
                    automationScheduleImport1(
                      automationScheduleImport1(
                        automationScheduleImport1(
                          automationScheduleImport1(
                            [],
                            automationScheduleValue58,
                            true,
                          ),
                          automationScheduleValue55,
                          true,
                        ),
                        automationScheduleValue58,
                        true,
                      ),
                      automationScheduleValue57,
                      true,
                    ),
                    automationScheduleValue58,
                    true,
                  ),
                  automationScheduleValue57,
                  true,
                ),
                automationScheduleValue58,
                true,
              ),
              automationScheduleValue58,
              true,
            ),
            automationScheduleValue57,
            true,
          ),
          automationScheduleValue58,
          true,
        ),
        automationScheduleValue57,
        true,
      ),
      automationScheduleValue58,
      true,
    ),
    automationScheduleValue58.slice(0, 7),
    true,
  ),
  automationScheduleValue61 = automationScheduleValue7(-28, 0),
  automationScheduleValue62 = automationScheduleValue7(-29, 0),
  automationScheduleValue63 = automationScheduleValue7(-30, 0),
  automationScheduleValue64 = automationScheduleValue7(-31, 0),
  automationScheduleValue65 = automationScheduleImport1(
    automationScheduleImport1(
      automationScheduleImport1(
        automationScheduleImport1(
          automationScheduleImport1(
            automationScheduleImport1(
              automationScheduleImport1(
                automationScheduleImport1(
                  automationScheduleImport1(
                    automationScheduleImport1(
                      automationScheduleImport1(
                        automationScheduleImport1(
                          automationScheduleImport1(
                            [],
                            automationScheduleValue64,
                            true,
                          ),
                          automationScheduleValue62,
                          true,
                        ),
                        automationScheduleValue64,
                        true,
                      ),
                      automationScheduleValue63,
                      true,
                    ),
                    automationScheduleValue64,
                    true,
                  ),
                  automationScheduleValue63,
                  true,
                ),
                automationScheduleValue64,
                true,
              ),
              automationScheduleValue64,
              true,
            ),
            automationScheduleValue63,
            true,
          ),
          automationScheduleValue64,
          true,
        ),
        automationScheduleValue63,
        true,
      ),
      automationScheduleValue64,
      true,
    ),
    automationScheduleValue64.slice(0, 7),
    true,
  ),
  automationScheduleValue66 = automationScheduleImport1(
    automationScheduleImport1(
      automationScheduleImport1(
        automationScheduleImport1(
          automationScheduleImport1(
            automationScheduleImport1(
              automationScheduleImport1(
                automationScheduleImport1(
                  automationScheduleImport1(
                    automationScheduleImport1(
                      automationScheduleImport1(
                        automationScheduleImport1(
                          automationScheduleImport1(
                            [],
                            automationScheduleValue64,
                            true,
                          ),
                          automationScheduleValue61,
                          true,
                        ),
                        automationScheduleValue64,
                        true,
                      ),
                      automationScheduleValue63,
                      true,
                    ),
                    automationScheduleValue64,
                    true,
                  ),
                  automationScheduleValue63,
                  true,
                ),
                automationScheduleValue64,
                true,
              ),
              automationScheduleValue64,
              true,
            ),
            automationScheduleValue63,
            true,
          ),
          automationScheduleValue64,
          true,
        ),
        automationScheduleValue63,
        true,
      ),
      automationScheduleValue64,
      true,
    ),
    automationScheduleValue64.slice(0, 7),
    true,
  ),
  $e = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366],
  automationScheduleValue67 = [
    0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365,
  ],
  automationScheduleValue68 = (function () {
    for (
      var automationScheduleValue446 = [], automationScheduleValue447 = 0;
      automationScheduleValue447 < 55;
      automationScheduleValue447++
    )
      automationScheduleValue446 = automationScheduleValue446.concat(
        automationScheduleValue7(7),
      );
    return automationScheduleValue446;
  })();
function automationScheduleHelper17(
  automationScheduleParam12,
  automationScheduleParam13,
) {
  var automationScheduleValue104 = automationScheduleValue16(
      automationScheduleParam12,
      1,
      1,
    ),
    automationScheduleValue105 = automationScheduleValue21(
      automationScheduleParam12,
    )
      ? 366
      : 365,
    automationScheduleValue106 = automationScheduleValue21(
      automationScheduleParam12 + 1,
    )
      ? 366
      : 365,
    automationScheduleValue107 = automationScheduleValue25(
      automationScheduleValue104,
    ),
    automationScheduleValue108 = automationScheduleValue28(
      automationScheduleValue104,
    ),
    automationScheduleValue109 = automationScheduleImport3(
      automationScheduleImport3(
        {
          yearlen: automationScheduleValue105,
          nextyearlen: automationScheduleValue106,
          yearordinal: automationScheduleValue107,
          yearweekday: automationScheduleValue108,
        },
        automationScheduleHelper18(automationScheduleParam12),
      ),
      {
        wnomask: null,
      },
    );
  if (automationScheduleValue13(automationScheduleParam13.byweekno))
    return automationScheduleValue109;
  automationScheduleValue109.wnomask = automationScheduleValue8(
    0,
    automationScheduleValue105 + 7,
  );
  var automationScheduleValue110,
    automationScheduleValue111,
    automationScheduleValue112 = (automationScheduleValue110 =
      automationScheduleValue11(
        7 - automationScheduleValue108 + automationScheduleParam13.wkst,
        7,
      ));
  automationScheduleValue112 >= 4
    ? ((automationScheduleValue112 = 0),
      (automationScheduleValue111 =
        automationScheduleValue109.yearlen +
        automationScheduleValue11(
          automationScheduleValue108 - automationScheduleParam13.wkst,
          7,
        )))
    : (automationScheduleValue111 =
        automationScheduleValue105 - automationScheduleValue112);
  for (
    var _automationScheduleH = Math.floor(automationScheduleValue111 / 7),
      automationScheduleValue113 = automationScheduleValue11(
        automationScheduleValue111,
        7,
      ),
      automationScheduleValue114 = Math.floor(
        _automationScheduleH + automationScheduleValue113 / 4,
      ),
      automationScheduleValue115 = 0;
    automationScheduleValue115 < automationScheduleParam13.byweekno.length;
    automationScheduleValue115++
  ) {
    var automationScheduleValue116 =
      automationScheduleParam13.byweekno[automationScheduleValue115];
    if (
      (automationScheduleValue116 < 0 &&
        (automationScheduleValue116 += automationScheduleValue114 + 1),
      automationScheduleValue116 > 0 &&
        automationScheduleValue116 <= automationScheduleValue114)
    ) {
      var automationScheduleValue117 = undefined;
      automationScheduleValue116 > 1
        ? ((automationScheduleValue117 =
            automationScheduleValue112 + (automationScheduleValue116 - 1) * 7),
          automationScheduleValue112 !== automationScheduleValue110 &&
            (automationScheduleValue117 -= 7 - automationScheduleValue110))
        : (automationScheduleValue117 = automationScheduleValue112);
      for (
        var automationScheduleValue118 = 0;
        automationScheduleValue118 < 7 &&
        ((automationScheduleValue109.wnomask[automationScheduleValue117] = 1),
        automationScheduleValue117++,
        automationScheduleValue109.wdaymask[automationScheduleValue117] !==
          automationScheduleParam13.wkst);
        automationScheduleValue118++
      );
    }
  }
  if (automationScheduleValue15(automationScheduleParam13.byweekno, 1)) {
    var automationScheduleValue117 =
      automationScheduleValue112 + automationScheduleValue114 * 7;
    if (
      (automationScheduleValue112 !== automationScheduleValue110 &&
        (automationScheduleValue117 -= 7 - automationScheduleValue110),
      automationScheduleValue117 < automationScheduleValue105)
    )
      for (
        var automationScheduleValue115 = 0;
        automationScheduleValue115 < 7 &&
        ((automationScheduleValue109.wnomask[automationScheduleValue117] = 1),
        (automationScheduleValue117 += 1),
        automationScheduleValue109.wdaymask[automationScheduleValue117] !==
          automationScheduleParam13.wkst);
        automationScheduleValue115++
      );
  }
  if (automationScheduleValue112) {
    var automationScheduleValue119 = undefined;
    if (automationScheduleValue15(automationScheduleParam13.byweekno, -1))
      automationScheduleValue119 = -1;
    else {
      var automationScheduleValue120 = automationScheduleValue28(
          automationScheduleValue16(automationScheduleParam12 - 1, 1, 1),
        ),
        automationScheduleValue121 = automationScheduleValue11(
          7 -
            automationScheduleValue120.valueOf() +
            automationScheduleParam13.wkst,
          7,
        ),
        automationScheduleValue122 = automationScheduleValue21(
          automationScheduleParam12 - 1,
        )
          ? 366
          : 365,
        automationScheduleValue123 = undefined;
      automationScheduleValue121 >= 4
        ? ((automationScheduleValue121 = 0),
          (automationScheduleValue123 =
            automationScheduleValue122 +
            automationScheduleValue11(
              automationScheduleValue120 - automationScheduleParam13.wkst,
              7,
            )))
        : (automationScheduleValue123 =
            automationScheduleValue105 - automationScheduleValue112);
      automationScheduleValue119 = Math.floor(
        52 + automationScheduleValue11(automationScheduleValue123, 7) / 4,
      );
    }
    if (
      automationScheduleValue15(
        automationScheduleParam13.byweekno,
        automationScheduleValue119,
      )
    )
      for (
        var automationScheduleValue117 = 0;
        automationScheduleValue117 < automationScheduleValue112;
        automationScheduleValue117++
      )
        automationScheduleValue109.wnomask[automationScheduleValue117] = 1;
  }
  return automationScheduleValue109;
}
function automationScheduleHelper18(automationScheduleParam104) {
  var automationScheduleValue330 = automationScheduleValue21(
      automationScheduleParam104,
    )
      ? 366
      : 365,
    automationScheduleValue331 = automationScheduleValue28(
      automationScheduleValue16(automationScheduleParam104, 1, 1),
    );
  return automationScheduleValue330 === 365
    ? {
        mmask: automationScheduleValue53,
        mdaymask: automationScheduleValue60,
        nmdaymask: automationScheduleValue66,
        wdaymask: automationScheduleValue68.slice(automationScheduleValue331),
        mrange: automationScheduleValue67,
      }
    : {
        mmask: automationScheduleValue54,
        mdaymask: automationScheduleValue59,
        nmdaymask: automationScheduleValue65,
        wdaymask: automationScheduleValue68.slice(automationScheduleValue331),
        mrange: $e,
      };
}
function automationScheduleHelper19(
  automationScheduleParam31,
  automationScheduleParam32,
  automationScheduleParam33,
  automationScheduleParam34,
  automationScheduleParam35,
  automationScheduleParam36,
) {
  var automationScheduleValue213 = {
      lastyear: automationScheduleParam31,
      lastmonth: automationScheduleParam32,
      nwdaymask: [],
    },
    automationScheduleValue214 = [];
  if (automationScheduleParam36.freq === automationScheduleValue73.YEARLY) {
    if (automationScheduleValue13(automationScheduleParam36.bymonth))
      automationScheduleValue214 = [[0, automationScheduleParam33]];
    else
      for (
        var automationScheduleValue215 = 0;
        automationScheduleValue215 < automationScheduleParam36.bymonth.length;
        automationScheduleValue215++
      ) {
        automationScheduleParam32 =
          automationScheduleParam36.bymonth[automationScheduleValue215];
        automationScheduleValue214.push(
          automationScheduleParam34.slice(
            automationScheduleParam32 - 1,
            automationScheduleParam32 + 1,
          ),
        );
      }
  } else
    automationScheduleParam36.freq === automationScheduleValue73.MONTHLY &&
      (automationScheduleValue214 = [
        automationScheduleParam34.slice(
          automationScheduleParam32 - 1,
          automationScheduleParam32 + 1,
        ),
      ]);
  if (automationScheduleValue13(automationScheduleValue214))
    return automationScheduleValue213;
  automationScheduleValue213.nwdaymask = automationScheduleValue8(
    0,
    automationScheduleParam33,
  );
  for (
    var automationScheduleValue215 = 0;
    automationScheduleValue215 < automationScheduleValue214.length;
    automationScheduleValue215++
  )
    for (
      var automationScheduleValue216 =
          automationScheduleValue214[automationScheduleValue215],
        automationScheduleValue217 = automationScheduleValue216[0],
        automationScheduleValue218 = automationScheduleValue216[1] - 1,
        _automationScheduleH = 0;
      _automationScheduleH < automationScheduleParam36.bynweekday.length;
      _automationScheduleH++
    ) {
      var automationScheduleValue219 = undefined,
        automationScheduleValue220 =
          automationScheduleParam36.bynweekday[_automationScheduleH],
        automationScheduleValue221 = automationScheduleValue220[0],
        automationScheduleValue222 = automationScheduleValue220[1];
      automationScheduleValue222 < 0
        ? ((automationScheduleValue219 =
            automationScheduleValue218 + (automationScheduleValue222 + 1) * 7),
          (automationScheduleValue219 -= automationScheduleValue11(
            automationScheduleParam35[automationScheduleValue219] -
              automationScheduleValue221,
            7,
          )))
        : ((automationScheduleValue219 =
            automationScheduleValue217 + (automationScheduleValue222 - 1) * 7),
          (automationScheduleValue219 += automationScheduleValue11(
            7 -
              automationScheduleParam35[automationScheduleValue219] +
              automationScheduleValue221,
            7,
          )));
      automationScheduleValue217 <= automationScheduleValue219 &&
        automationScheduleValue219 <= automationScheduleValue218 &&
        (automationScheduleValue213.nwdaymask[automationScheduleValue219] = 1);
    }
  return automationScheduleValue213;
}
function at(automationScheduleParam44, automationScheduleParam45) {
  automationScheduleParam45 === undefined && (automationScheduleParam45 = 0);
  var automationScheduleValue250 = automationScheduleParam44 % 19,
    automationScheduleValue251 = Math.floor(automationScheduleParam44 / 100),
    automationScheduleValue252 = automationScheduleParam44 % 100,
    automationScheduleValue253 = Math.floor(automationScheduleValue251 / 4),
    automationScheduleValue254 = automationScheduleValue251 % 4,
    automationScheduleValue255 = Math.floor(
      (automationScheduleValue251 + 8) / 25,
    ),
    automationScheduleValue256 = Math.floor(
      (automationScheduleValue251 - automationScheduleValue255 + 1) / 3,
    ),
    automationScheduleValue257 =
      Math.floor(
        19 * automationScheduleValue250 +
          automationScheduleValue251 -
          automationScheduleValue253 -
          automationScheduleValue256 +
          15,
      ) % 30,
    automationScheduleValue258 = Math.floor(automationScheduleValue252 / 4),
    automationScheduleValue259 = automationScheduleValue252 % 4,
    _automationScheduleH =
      Math.floor(
        32 +
          2 * automationScheduleValue254 +
          2 * automationScheduleValue258 -
          automationScheduleValue257 -
          automationScheduleValue259,
      ) % 7,
    automationScheduleValue260 = Math.floor(
      (automationScheduleValue250 +
        11 * automationScheduleValue257 +
        22 * _automationScheduleH) /
        451,
    ),
    automationScheduleValue261 = Math.floor(
      (automationScheduleValue257 +
        _automationScheduleH -
        7 * automationScheduleValue260 +
        114) /
        31,
    ),
    automationScheduleValue262 =
      ((automationScheduleValue257 +
        _automationScheduleH -
        7 * automationScheduleValue260 +
        114) %
        31) +
      1,
    automationScheduleValue263 = Date.UTC(
      automationScheduleParam44,
      automationScheduleValue261 - 1,
      automationScheduleValue262 + automationScheduleParam45,
    ),
    automationScheduleValue264 = Date.UTC(automationScheduleParam44, 0, 1);
  return [
    Math.ceil(
      (automationScheduleValue263 - automationScheduleValue264) / 86400000,
    ),
  ];
}
var automationScheduleValue69 = (function () {
  function automationScheduleHelper85(automationScheduleParam353) {
    this.options = automationScheduleParam353;
  }
  return (
    (automationScheduleHelper85.prototype.rebuild = function (
      automationScheduleParam86,
      automationScheduleParam87,
    ) {
      var automationScheduleValue306 = this.options;
      if (
        (automationScheduleParam86 !== this.lastyear &&
          (this.yearinfo = automationScheduleHelper17(
            automationScheduleParam86,
            automationScheduleValue306,
          )),
        automationScheduleValue14(automationScheduleValue306.bynweekday) &&
          (automationScheduleParam87 !== this.lastmonth ||
            automationScheduleParam86 !== this.lastyear))
      ) {
        var automationScheduleValue307 = this.yearinfo,
          automationScheduleValue308 = automationScheduleValue307.yearlen,
          automationScheduleValue309 = automationScheduleValue307.mrange,
          automationScheduleValue310 = automationScheduleValue307.wdaymask;
        this.monthinfo = automationScheduleHelper19(
          automationScheduleParam86,
          automationScheduleParam87,
          automationScheduleValue308,
          automationScheduleValue309,
          automationScheduleValue310,
          automationScheduleValue306,
        );
      }
      automationScheduleValue3(automationScheduleValue306.byeaster) &&
        (this.eastermask = at(
          automationScheduleParam86,
          automationScheduleValue306.byeaster,
        ));
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "lastyear", {
      get: function () {
        return this.monthinfo ? this.monthinfo.lastyear : null;
      },
      enumerable: false,
      configurable: true,
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "lastmonth", {
      get: function () {
        return this.monthinfo ? this.monthinfo.lastmonth : null;
      },
      enumerable: false,
      configurable: true,
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "yearlen", {
      get: function () {
        return this.yearinfo.yearlen;
      },
      enumerable: false,
      configurable: true,
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "yearordinal", {
      get: function () {
        return this.yearinfo.yearordinal;
      },
      enumerable: false,
      configurable: true,
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "mrange", {
      get: function () {
        return this.yearinfo.mrange;
      },
      enumerable: false,
      configurable: true,
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "wdaymask", {
      get: function () {
        return this.yearinfo.wdaymask;
      },
      enumerable: false,
      configurable: true,
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "mmask", {
      get: function () {
        return this.yearinfo.mmask;
      },
      enumerable: false,
      configurable: true,
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "wnomask", {
      get: function () {
        return this.yearinfo.wnomask;
      },
      enumerable: false,
      configurable: true,
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "nwdaymask", {
      get: function () {
        return this.monthinfo ? this.monthinfo.nwdaymask : [];
      },
      enumerable: false,
      configurable: true,
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "nextyearlen", {
      get: function () {
        return this.yearinfo.nextyearlen;
      },
      enumerable: false,
      configurable: true,
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "mdaymask", {
      get: function () {
        return this.yearinfo.mdaymask;
      },
      enumerable: false,
      configurable: true,
    }),
    Object.defineProperty(automationScheduleHelper85.prototype, "nmdaymask", {
      get: function () {
        return this.yearinfo.nmdaymask;
      },
      enumerable: false,
      configurable: true,
    }),
    (automationScheduleHelper85.prototype.ydayset = function () {
      return [automationScheduleValue7(this.yearlen), 0, this.yearlen];
    }),
    (automationScheduleHelper85.prototype.mdayset = function (
      automationScheduleParam141,
      automationScheduleParam142,
    ) {
      for (
        var automationScheduleValue378 =
            this.mrange[automationScheduleParam142 - 1],
          automationScheduleValue379 = this.mrange[automationScheduleParam142],
          automationScheduleValue380 = automationScheduleValue8(
            null,
            this.yearlen,
          ),
          automationScheduleValue381 = automationScheduleValue378;
        automationScheduleValue381 < automationScheduleValue379;
        automationScheduleValue381++
      )
        automationScheduleValue380[automationScheduleValue381] =
          automationScheduleValue381;
      return [
        automationScheduleValue380,
        automationScheduleValue378,
        automationScheduleValue379,
      ];
    }),
    (automationScheduleHelper85.prototype.wdayset = function (
      automationScheduleParam121,
      automationScheduleParam122,
      automationScheduleParam123,
    ) {
      for (
        var automationScheduleValue344 = automationScheduleValue8(
            null,
            this.yearlen + 7,
          ),
          automationScheduleValue345 =
            automationScheduleValue25(
              automationScheduleValue16(
                automationScheduleParam121,
                automationScheduleParam122,
                automationScheduleParam123,
              ),
            ) - this.yearordinal,
          automationScheduleValue346 = automationScheduleValue345,
          automationScheduleValue347 = 0;
        automationScheduleValue347 < 7 &&
        ((automationScheduleValue344[automationScheduleValue345] =
          automationScheduleValue345),
        ++automationScheduleValue345,
        this.wdaymask[automationScheduleValue345] !== this.options.wkst);
        automationScheduleValue347++
      );
      return [
        automationScheduleValue344,
        automationScheduleValue346,
        automationScheduleValue345,
      ];
    }),
    (automationScheduleHelper85.prototype.ddayset = function (
      automationScheduleParam197,
      automationScheduleParam198,
      automationScheduleParam199,
    ) {
      var automationScheduleValue422 = automationScheduleValue8(
          null,
          this.yearlen,
        ),
        automationScheduleValue423 =
          automationScheduleValue25(
            automationScheduleValue16(
              automationScheduleParam197,
              automationScheduleParam198,
              automationScheduleParam199,
            ),
          ) - this.yearordinal;
      return (
        (automationScheduleValue422[automationScheduleValue423] =
          automationScheduleValue423),
        [
          automationScheduleValue422,
          automationScheduleValue423,
          automationScheduleValue423 + 1,
        ]
      );
    }),
    (automationScheduleHelper85.prototype.htimeset = function (
      automationScheduleParam147,
      automationScheduleParam148,
      automationScheduleParam149,
      automationScheduleParam150,
    ) {
      var automationScheduleValue386 = this,
        automationScheduleValue387 = [];
      return (
        this.options.byminute.forEach(function (item) {
          automationScheduleValue387 = automationScheduleValue387.concat(
            automationScheduleValue386.mtimeset(
              automationScheduleParam147,
              item,
              automationScheduleParam149,
              automationScheduleParam150,
            ),
          );
        }),
        automationScheduleValue33(automationScheduleValue387),
        automationScheduleValue387
      );
    }),
    (automationScheduleHelper85.prototype.mtimeset = function (
      automationScheduleParam200,
      automationScheduleParam201,
      automationScheduleParam202,
      automationScheduleParam203,
    ) {
      var automationScheduleValue424 = this.options.bysecond.map(
        function (item) {
          return new automationScheduleValue49(
            automationScheduleParam200,
            automationScheduleParam201,
            item,
            automationScheduleParam203,
          );
        },
      );
      return (
        automationScheduleValue33(automationScheduleValue424),
        automationScheduleValue424
      );
    }),
    (automationScheduleHelper85.prototype.stimeset = function (
      automationScheduleParam302,
      automationScheduleParam303,
      automationScheduleParam304,
      automationScheduleParam305,
    ) {
      return [
        new automationScheduleValue49(
          automationScheduleParam302,
          automationScheduleParam303,
          automationScheduleParam304,
          automationScheduleParam305,
        ),
      ];
    }),
    (automationScheduleHelper85.prototype.getdayset = function (
      automationScheduleParam98,
    ) {
      switch (automationScheduleParam98) {
        case automationScheduleValue44.YEARLY:
          return this.ydayset.bind(this);
        case automationScheduleValue44.MONTHLY:
          return this.mdayset.bind(this);
        case automationScheduleValue44.WEEKLY:
          return this.wdayset.bind(this);
        case automationScheduleValue44.DAILY:
          return this.ddayset.bind(this);
        default:
          return this.ddayset.bind(this);
      }
    }),
    (automationScheduleHelper85.prototype.gettimeset = function (
      automationScheduleParam137,
    ) {
      switch (automationScheduleParam137) {
        case automationScheduleValue44.HOURLY:
          return this.htimeset.bind(this);
        case automationScheduleValue44.MINUTELY:
          return this.mtimeset.bind(this);
        case automationScheduleValue44.SECONDLY:
          return this.stimeset.bind(this);
      }
    }),
    automationScheduleHelper85
  );
})();
function automationScheduleHelper20(
  automationScheduleParam69,
  automationScheduleParam70,
  automationScheduleParam71,
  automationScheduleParam72,
  automationScheduleParam73,
  automationScheduleParam74,
) {
  for (
    var automationScheduleValue283 = [], automationScheduleValue284 = 0;
    automationScheduleValue284 < automationScheduleParam69.length;
    automationScheduleValue284++
  ) {
    var automationScheduleValue285 = undefined,
      automationScheduleValue286 = undefined,
      automationScheduleValue287 =
        automationScheduleParam69[automationScheduleValue284];
    automationScheduleValue287 < 0
      ? ((automationScheduleValue285 = Math.floor(
          automationScheduleValue287 / automationScheduleParam70.length,
        )),
        (automationScheduleValue286 = automationScheduleValue11(
          automationScheduleValue287,
          automationScheduleParam70.length,
        )))
      : ((automationScheduleValue285 = Math.floor(
          (automationScheduleValue287 - 1) / automationScheduleParam70.length,
        )),
        (automationScheduleValue286 = automationScheduleValue11(
          automationScheduleValue287 - 1,
          automationScheduleParam70.length,
        )));
    for (
      var automationScheduleValue288 = [],
        _automationScheduleH = automationScheduleParam71;
      _automationScheduleH < automationScheduleParam72;
      _automationScheduleH++
    ) {
      var automationScheduleValue289 =
        automationScheduleParam74[_automationScheduleH];
      automationScheduleValue3(automationScheduleValue289) &&
        automationScheduleValue288.push(automationScheduleValue289);
    }
    var automationScheduleValue290 = undefined;
    automationScheduleValue290 =
      automationScheduleValue285 < 0
        ? automationScheduleValue288.slice(automationScheduleValue285)[0]
        : automationScheduleValue288[automationScheduleValue285];
    var automationScheduleValue291 =
        automationScheduleParam70[automationScheduleValue286],
      automationScheduleValue292 = automationScheduleValue30(
        automationScheduleValue26(
          automationScheduleParam73.yearordinal + automationScheduleValue290,
        ),
        automationScheduleValue291,
      );
    automationScheduleValue15(
      automationScheduleValue283,
      automationScheduleValue292,
    ) || automationScheduleValue283.push(automationScheduleValue292);
  }
  return (
    automationScheduleValue33(automationScheduleValue283),
    automationScheduleValue283
  );
}
function automationScheduleHelper21(
  automationScheduleParam16,
  automationScheduleParam17,
) {
  var automationScheduleValue142 = automationScheduleParam17.dtstart,
    automationScheduleValue143 = automationScheduleParam17.freq,
    automationScheduleValue144 = automationScheduleParam17.interval,
    automationScheduleValue145 = automationScheduleParam17.until,
    automationScheduleValue146 = automationScheduleParam17.bysetpos,
    automationScheduleValue147 = automationScheduleParam17.count;
  if (automationScheduleValue147 === 0 || automationScheduleValue144 === 0)
    return automationScheduleHelper24(automationScheduleParam16);
  var automationScheduleValue148 = automationScheduleValue50.fromDate(
      automationScheduleValue142,
    ),
    automationScheduleValue149 = new automationScheduleValue69(
      automationScheduleParam17,
    );
  automationScheduleValue149.rebuild(
    automationScheduleValue148.year,
    automationScheduleValue148.month,
  );
  for (
    var automationScheduleValue150 = automationScheduleHelper26(
      automationScheduleValue149,
      automationScheduleValue148,
      automationScheduleParam17,
    );
    ;

  ) {
    var automationScheduleValue151 = automationScheduleValue149.getdayset(
        automationScheduleValue143,
      )(
        automationScheduleValue148.year,
        automationScheduleValue148.month,
        automationScheduleValue148.day,
      ),
      _automationScheduleH = automationScheduleValue151[0],
      automationScheduleValue152 = automationScheduleValue151[1],
      automationScheduleValue153 = automationScheduleValue151[2],
      automationScheduleValue154 = automationScheduleHelper25(
        _automationScheduleH,
        automationScheduleValue152,
        automationScheduleValue153,
        automationScheduleValue149,
        automationScheduleParam17,
      );
    if (automationScheduleValue14(automationScheduleValue146))
      for (
        var automationScheduleValue155 = automationScheduleHelper20(
            automationScheduleValue146,
            automationScheduleValue150,
            automationScheduleValue152,
            automationScheduleValue153,
            automationScheduleValue149,
            _automationScheduleH,
          ),
          automationScheduleValue156 = 0;
        automationScheduleValue156 < automationScheduleValue155.length;
        automationScheduleValue156++
      ) {
        var automationScheduleValue157 =
          automationScheduleValue155[automationScheduleValue156];
        if (
          automationScheduleValue145 &&
          automationScheduleValue157 > automationScheduleValue145
        )
          return automationScheduleHelper24(automationScheduleParam16);
        if (automationScheduleValue157 >= automationScheduleValue142) {
          var automationScheduleValue158 = automationScheduleHelper23(
            automationScheduleValue157,
            automationScheduleParam17,
          );
          if (
            !automationScheduleParam16.accept(automationScheduleValue158) ||
            (automationScheduleValue147 &&
              (--automationScheduleValue147, !automationScheduleValue147))
          )
            return automationScheduleHelper24(automationScheduleParam16);
        }
      }
    else
      for (
        var automationScheduleValue156 = automationScheduleValue152;
        automationScheduleValue156 < automationScheduleValue153;
        automationScheduleValue156++
      ) {
        var automationScheduleValue159 =
          _automationScheduleH[automationScheduleValue156];
        if (automationScheduleValue3(automationScheduleValue159))
          for (
            var automationScheduleValue160 = automationScheduleValue26(
                automationScheduleValue149.yearordinal +
                  automationScheduleValue159,
              ),
              automationScheduleValue161 = 0;
            automationScheduleValue161 < automationScheduleValue150.length;
            automationScheduleValue161++
          ) {
            var automationScheduleValue162 =
                automationScheduleValue150[automationScheduleValue161],
              automationScheduleValue157 = automationScheduleValue30(
                automationScheduleValue160,
                automationScheduleValue162,
              );
            if (
              automationScheduleValue145 &&
              automationScheduleValue157 > automationScheduleValue145
            )
              return automationScheduleHelper24(automationScheduleParam16);
            if (automationScheduleValue157 >= automationScheduleValue142) {
              var automationScheduleValue158 = automationScheduleHelper23(
                automationScheduleValue157,
                automationScheduleParam17,
              );
              if (
                !automationScheduleParam16.accept(automationScheduleValue158) ||
                (automationScheduleValue147 &&
                  (--automationScheduleValue147, !automationScheduleValue147))
              )
                return automationScheduleHelper24(automationScheduleParam16);
            }
          }
      }
    if (
      automationScheduleParam17.interval === 0 ||
      (automationScheduleValue148.add(
        automationScheduleParam17,
        automationScheduleValue154,
      ),
      automationScheduleValue148.year > 9999)
    )
      return automationScheduleHelper24(automationScheduleParam16);
    automationScheduleHelper3(automationScheduleValue143) ||
      (automationScheduleValue150 = automationScheduleValue149.gettimeset(
        automationScheduleValue143,
      )(
        automationScheduleValue148.hour,
        automationScheduleValue148.minute,
        automationScheduleValue148.second,
        0,
      ));
    automationScheduleValue149.rebuild(
      automationScheduleValue148.year,
      automationScheduleValue148.month,
    );
  }
}
function automationScheduleHelper22(
  automationScheduleParam41,
  automationScheduleParam42,
  automationScheduleParam43,
) {
  var automationScheduleValue243 = automationScheduleParam43.bymonth,
    automationScheduleValue244 = automationScheduleParam43.byweekno,
    automationScheduleValue245 = automationScheduleParam43.byweekday,
    automationScheduleValue246 = automationScheduleParam43.byeaster,
    automationScheduleValue247 = automationScheduleParam43.bymonthday,
    automationScheduleValue248 = automationScheduleParam43.bynmonthday,
    automationScheduleValue249 = automationScheduleParam43.byyearday;
  return (
    (automationScheduleValue14(automationScheduleValue243) &&
      !automationScheduleValue15(
        automationScheduleValue243,
        automationScheduleParam41.mmask[automationScheduleParam42],
      )) ||
    (automationScheduleValue14(automationScheduleValue244) &&
      !automationScheduleParam41.wnomask[automationScheduleParam42]) ||
    (automationScheduleValue14(automationScheduleValue245) &&
      !automationScheduleValue15(
        automationScheduleValue245,
        automationScheduleParam41.wdaymask[automationScheduleParam42],
      )) ||
    (automationScheduleValue14(automationScheduleParam41.nwdaymask) &&
      !automationScheduleParam41.nwdaymask[automationScheduleParam42]) ||
    (automationScheduleValue246 !== null &&
      !automationScheduleValue15(
        automationScheduleParam41.eastermask,
        automationScheduleParam42,
      )) ||
    ((automationScheduleValue14(automationScheduleValue247) ||
      automationScheduleValue14(automationScheduleValue248)) &&
      !automationScheduleValue15(
        automationScheduleValue247,
        automationScheduleParam41.mdaymask[automationScheduleParam42],
      ) &&
      !automationScheduleValue15(
        automationScheduleValue248,
        automationScheduleParam41.nmdaymask[automationScheduleParam42],
      )) ||
    (automationScheduleValue14(automationScheduleValue249) &&
      ((automationScheduleParam42 < automationScheduleParam41.yearlen &&
        !automationScheduleValue15(
          automationScheduleValue249,
          automationScheduleParam42 + 1,
        ) &&
        !automationScheduleValue15(
          automationScheduleValue249,
          -automationScheduleParam41.yearlen + automationScheduleParam42,
        )) ||
        (automationScheduleParam42 >= automationScheduleParam41.yearlen &&
          !automationScheduleValue15(
            automationScheduleValue249,
            automationScheduleParam42 + 1 - automationScheduleParam41.yearlen,
          ) &&
          !automationScheduleValue15(
            automationScheduleValue249,
            -automationScheduleParam41.nextyearlen +
              automationScheduleParam42 -
              automationScheduleParam41.yearlen,
          ))))
  );
}
function automationScheduleHelper23(
  automationScheduleParam306,
  automationScheduleParam307,
) {
  return new automationScheduleValue51(
    automationScheduleParam306,
    automationScheduleParam307.tzid,
  ).rezonedDate();
}
function automationScheduleHelper24(automationScheduleParam357) {
  return automationScheduleParam357.getValue();
}
function automationScheduleHelper25(
  automationScheduleParam205,
  automationScheduleParam206,
  automationScheduleParam207,
  automationScheduleParam208,
  automationScheduleParam209,
) {
  for (
    var automationScheduleValue425 = false,
      automationScheduleValue426 = automationScheduleParam206;
    automationScheduleValue426 < automationScheduleParam207;
    automationScheduleValue426++
  ) {
    var automationScheduleValue427 =
      automationScheduleParam205[automationScheduleValue426];
    automationScheduleValue425 = automationScheduleHelper22(
      automationScheduleParam208,
      automationScheduleValue427,
      automationScheduleParam209,
    );
    automationScheduleValue425 &&
      (automationScheduleParam205[automationScheduleValue427] = null);
  }
  return automationScheduleValue425;
}
function automationScheduleHelper26(
  automationScheduleParam99,
  automationScheduleParam100,
  automationScheduleParam101,
) {
  var automationScheduleValue325 = automationScheduleParam101.freq,
    automationScheduleValue326 = automationScheduleParam101.byhour,
    automationScheduleValue327 = automationScheduleParam101.byminute,
    automationScheduleValue328 = automationScheduleParam101.bysecond;
  return automationScheduleHelper3(automationScheduleValue325)
    ? automationScheduleHelper6(automationScheduleParam101)
    : (automationScheduleValue325 >= automationScheduleValue73.HOURLY &&
          automationScheduleValue14(automationScheduleValue326) &&
          !automationScheduleValue15(
            automationScheduleValue326,
            automationScheduleParam100.hour,
          )) ||
        (automationScheduleValue325 >= automationScheduleValue73.MINUTELY &&
          automationScheduleValue14(automationScheduleValue327) &&
          !automationScheduleValue15(
            automationScheduleValue327,
            automationScheduleParam100.minute,
          )) ||
        (automationScheduleValue325 >= automationScheduleValue73.SECONDLY &&
          automationScheduleValue14(automationScheduleValue328) &&
          !automationScheduleValue15(
            automationScheduleValue328,
            automationScheduleParam100.second,
          ))
      ? []
      : automationScheduleParam99.gettimeset(automationScheduleValue325)(
          automationScheduleParam100.hour,
          automationScheduleParam100.minute,
          automationScheduleParam100.second,
          automationScheduleParam100.millisecond,
        );
}
var automationScheduleValue70 = {
    MO: new automationScheduleValue2(0),
    TU: new automationScheduleValue2(1),
    WE: new automationScheduleValue2(2),
    TH: new automationScheduleValue2(3),
    FR: new automationScheduleValue2(4),
    SA: new automationScheduleValue2(5),
    SU: new automationScheduleValue2(6),
  },
  automationScheduleValue71 = {
    freq: automationScheduleValue44.YEARLY,
    dtstart: null,
    interval: 1,
    wkst: automationScheduleValue70.MO,
    count: null,
    until: null,
    tzid: null,
    bysetpos: null,
    bymonth: null,
    bymonthday: null,
    bynmonthday: null,
    byyearday: null,
    byweekno: null,
    byweekday: null,
    bynweekday: null,
    byhour: null,
    byminute: null,
    bysecond: null,
    byeaster: null,
  },
  automationScheduleValue72 = Object.keys(automationScheduleValue71),
  automationScheduleValue73 = (function () {
    function automationScheduleHelper87(
      automationScheduleParam151,
      automationScheduleParam152,
    ) {
      automationScheduleParam151 === undefined &&
        (automationScheduleParam151 = {});
      automationScheduleParam152 === undefined &&
        (automationScheduleParam152 = false);
      this._cache = automationScheduleParam152
        ? null
        : new automationScheduleValue52();
      this.origOptions = automationScheduleHelper4(automationScheduleParam151);
      this.options = automationScheduleHelper5(
        automationScheduleParam151,
      ).parsedOptions;
    }
    return (
      (automationScheduleHelper87.parseText = function (
        automationScheduleParam335,
        automationScheduleParam336,
      ) {
        return automationScheduleHelper2(
          automationScheduleParam335,
          automationScheduleParam336,
        );
      }),
      (automationScheduleHelper87.fromText = function (
        automationScheduleParam337,
        automationScheduleParam338,
      ) {
        return automationScheduleValue45(
          automationScheduleParam337,
          automationScheduleParam338,
        );
      }),
      (automationScheduleHelper87.fromString = function (
        automationScheduleParam281,
      ) {
        return new automationScheduleHelper87(
          automationScheduleHelper87.parseString(automationScheduleParam281) ||
            undefined,
        );
      }),
      (automationScheduleHelper87.prototype._iter = function (
        automationScheduleParam317,
      ) {
        return automationScheduleHelper21(
          automationScheduleParam317,
          this.options,
        );
      }),
      (automationScheduleHelper87.prototype._cacheGet = function (
        automationScheduleParam261,
        automationScheduleParam262,
      ) {
        return this._cache
          ? this._cache._cacheGet(
              automationScheduleParam261,
              automationScheduleParam262,
            )
          : false;
      }),
      (automationScheduleHelper87.prototype._cacheAdd = function (
        automationScheduleParam254,
        automationScheduleParam255,
        automationScheduleParam256,
      ) {
        if (this._cache)
          return this._cache._cacheAdd(
            automationScheduleParam254,
            automationScheduleParam255,
            automationScheduleParam256,
          );
      }),
      (automationScheduleHelper87.prototype.all = function (
        automationScheduleParam132,
      ) {
        if (automationScheduleParam132)
          return this._iter(new _e("all", {}, automationScheduleParam132));
        var automationScheduleValue367 = this._cacheGet("all");
        return (
          automationScheduleValue367 === false &&
            ((automationScheduleValue367 = this._iter(
              new automationScheduleValue38("all", {}),
            )),
            this._cacheAdd("all", automationScheduleValue367)),
          automationScheduleValue367
        );
      }),
      (automationScheduleHelper87.prototype.between = function (
        automationScheduleParam80,
        automationScheduleParam81,
        automationScheduleParam82,
        automationScheduleParam83,
      ) {
        if (
          (automationScheduleParam82 === undefined &&
            (automationScheduleParam82 = false),
          !automationScheduleValue23(automationScheduleParam80) ||
            !automationScheduleValue23(automationScheduleParam81))
        )
          throw Error("Invalid date passed in to RRule.between");
        var automationScheduleValue300 = {
          before: automationScheduleParam81,
          after: automationScheduleParam80,
          inc: automationScheduleParam82,
        };
        if (automationScheduleParam83)
          return this._iter(
            new _e(
              "between",
              automationScheduleValue300,
              automationScheduleParam83,
            ),
          );
        var automationScheduleValue301 = this._cacheGet(
          "between",
          automationScheduleValue300,
        );
        return (
          automationScheduleValue301 === false &&
            ((automationScheduleValue301 = this._iter(
              new automationScheduleValue38(
                "between",
                automationScheduleValue300,
              ),
            )),
            this._cacheAdd(
              "between",
              automationScheduleValue301,
              automationScheduleValue300,
            )),
          automationScheduleValue301
        );
      }),
      (automationScheduleHelper87.prototype.before = function (
        automationScheduleParam93,
        automationScheduleParam94,
      ) {
        if (
          (automationScheduleParam94 === undefined &&
            (automationScheduleParam94 = false),
          !automationScheduleValue23(automationScheduleParam93))
        )
          throw Error("Invalid date passed in to RRule.before");
        var automationScheduleValue319 = {
            dt: automationScheduleParam93,
            inc: automationScheduleParam94,
          },
          automationScheduleValue320 = this._cacheGet(
            "before",
            automationScheduleValue319,
          );
        return (
          automationScheduleValue320 === false &&
            ((automationScheduleValue320 = this._iter(
              new automationScheduleValue38(
                "before",
                automationScheduleValue319,
              ),
            )),
            this._cacheAdd(
              "before",
              automationScheduleValue320,
              automationScheduleValue319,
            )),
          automationScheduleValue320
        );
      }),
      (automationScheduleHelper87.prototype.after = function (
        automationScheduleParam96,
        automationScheduleParam97,
      ) {
        if (
          (automationScheduleParam97 === undefined &&
            (automationScheduleParam97 = false),
          !automationScheduleValue23(automationScheduleParam96))
        )
          throw Error("Invalid date passed in to RRule.after");
        var automationScheduleValue323 = {
            dt: automationScheduleParam96,
            inc: automationScheduleParam97,
          },
          automationScheduleValue324 = this._cacheGet(
            "after",
            automationScheduleValue323,
          );
        return (
          automationScheduleValue324 === false &&
            ((automationScheduleValue324 = this._iter(
              new automationScheduleValue38(
                "after",
                automationScheduleValue323,
              ),
            )),
            this._cacheAdd(
              "after",
              automationScheduleValue324,
              automationScheduleValue323,
            )),
          automationScheduleValue324
        );
      }),
      (automationScheduleHelper87.prototype.count = function () {
        return this.all().length;
      }),
      (automationScheduleHelper87.prototype.toString = function () {
        return automationScheduleHelper14(this.origOptions);
      }),
      (automationScheduleHelper87.prototype.toText = function (
        automationScheduleParam309,
        automationScheduleParam310,
        automationScheduleParam311,
      ) {
        return automationScheduleValue47(
          this,
          automationScheduleParam309,
          automationScheduleParam310,
          automationScheduleParam311,
        );
      }),
      (automationScheduleHelper87.prototype.isFullyConvertibleToText =
        function () {
          return automationScheduleValue48(this);
        }),
      (automationScheduleHelper87.prototype.clone = function () {
        return new automationScheduleHelper87(this.origOptions);
      }),
      (automationScheduleHelper87.FREQUENCIES = [
        "YEARLY",
        "MONTHLY",
        "WEEKLY",
        "DAILY",
        "HOURLY",
        "MINUTELY",
        "SECONDLY",
      ]),
      (automationScheduleHelper87.YEARLY = automationScheduleValue44.YEARLY),
      (automationScheduleHelper87.MONTHLY = automationScheduleValue44.MONTHLY),
      (automationScheduleHelper87.WEEKLY = automationScheduleValue44.WEEKLY),
      (automationScheduleHelper87.DAILY = automationScheduleValue44.DAILY),
      (automationScheduleHelper87.HOURLY = automationScheduleValue44.HOURLY),
      (automationScheduleHelper87.MINUTELY =
        automationScheduleValue44.MINUTELY),
      (automationScheduleHelper87.SECONDLY =
        automationScheduleValue44.SECONDLY),
      (automationScheduleHelper87.MO = automationScheduleValue70.MO),
      (automationScheduleHelper87.TU = automationScheduleValue70.TU),
      (automationScheduleHelper87.WE = automationScheduleValue70.WE),
      (automationScheduleHelper87.TH = automationScheduleValue70.TH),
      (automationScheduleHelper87.FR = automationScheduleValue70.FR),
      (automationScheduleHelper87.SA = automationScheduleValue70.SA),
      (automationScheduleHelper87.SU = automationScheduleValue70.SU),
      (automationScheduleHelper87.parseString = automationScheduleHelper7),
      (automationScheduleHelper87.optionsToString = automationScheduleHelper14),
      automationScheduleHelper87
    );
  })();
function automationScheduleHelper27(
  automationScheduleParam18,
  automationScheduleParam19,
  automationScheduleParam20,
  automationScheduleParam21,
  automationScheduleParam22,
  automationScheduleParam23,
) {
  var automationScheduleValue168 = {},
    automationScheduleValue169 = automationScheduleParam18.accept;
  function automationScheduleHelper92(
    automationScheduleParam221,
    automationScheduleParam222,
  ) {
    automationScheduleParam20.forEach(function (item) {
      item
        .between(automationScheduleParam221, automationScheduleParam222, true)
        .forEach(function (_item) {
          automationScheduleValue168[Number(_item)] = true;
        });
    });
  }
  automationScheduleParam22.forEach(function (item) {
    var automationScheduleValue452 = new automationScheduleValue51(
      item,
      automationScheduleParam23,
    ).rezonedDate();
    automationScheduleValue168[Number(automationScheduleValue452)] = true;
  });
  automationScheduleParam18.accept = function (automationScheduleParam153) {
    var automationScheduleValue388 = Number(automationScheduleParam153);
    return isNaN(automationScheduleValue388)
      ? automationScheduleValue169.call(this, automationScheduleParam153)
      : !automationScheduleValue168[automationScheduleValue388] &&
          (automationScheduleHelper92(
            new Date(automationScheduleValue388 - 1),
            new Date(automationScheduleValue388 + 1),
          ),
          !automationScheduleValue168[automationScheduleValue388])
        ? ((automationScheduleValue168[automationScheduleValue388] = true),
          automationScheduleValue169.call(this, automationScheduleParam153))
        : true;
  };
  automationScheduleParam18.method === "between" &&
    (automationScheduleHelper92(
      automationScheduleParam18.args.after,
      automationScheduleParam18.args.before,
    ),
    (automationScheduleParam18.accept = function (automationScheduleParam241) {
      var automationScheduleValue440 = Number(automationScheduleParam241);
      return automationScheduleValue168[automationScheduleValue440]
        ? true
        : ((automationScheduleValue168[automationScheduleValue440] = true),
          automationScheduleValue169.call(this, automationScheduleParam241));
    }));
  for (
    var automationScheduleValue170 = 0;
    automationScheduleValue170 < automationScheduleParam21.length;
    automationScheduleValue170++
  ) {
    var automationScheduleValue171 = new automationScheduleValue51(
      automationScheduleParam21[automationScheduleValue170],
      automationScheduleParam23,
    ).rezonedDate();
    if (
      !automationScheduleParam18.accept(
        new Date(automationScheduleValue171.getTime()),
      )
    )
      break;
  }
  automationScheduleParam19.forEach(function (item) {
    automationScheduleHelper21(automationScheduleParam18, item.options);
  });
  var automationScheduleValue172 = automationScheduleParam18._result;
  switch (
    (automationScheduleValue33(automationScheduleValue172),
    automationScheduleParam18.method)
  ) {
    case "all":
    case "between":
      return automationScheduleValue172;
    case "before":
      return (
        (automationScheduleValue172.length &&
          automationScheduleValue172[automationScheduleValue172.length - 1]) ||
        null
      );
    default:
      return (
        (automationScheduleValue172.length && automationScheduleValue172[0]) ||
        null
      );
  }
}
var automationScheduleValue74 = {
  dtstart: null,
  cache: false,
  unfold: false,
  forceset: false,
  compatible: false,
  tzid: null,
};
function _t(automationScheduleParam24, automationScheduleParam25) {
  var automationScheduleValue179 = [],
    automationScheduleValue180 = [],
    automationScheduleValue181 = [],
    automationScheduleValue182 = [],
    automationScheduleValue183 = automationScheduleHelper8(
      automationScheduleParam24,
    ),
    automationScheduleValue184 = automationScheduleValue183.dtstart,
    automationScheduleValue185 = automationScheduleValue183.tzid;
  return (
    automationScheduleHelper34(
      automationScheduleParam24,
      automationScheduleParam25.unfold,
    ).forEach(function (item) {
      if (item) {
        var automationScheduleValue191 = automationScheduleHelper33(item),
          automationScheduleValue192 = automationScheduleValue191.name,
          automationScheduleValue193 = automationScheduleValue191.parms,
          automationScheduleValue194 = automationScheduleValue191.value;
        switch (automationScheduleValue192.toUpperCase()) {
          case "RRULE":
            if (automationScheduleValue193.length)
              throw Error(
                `unsupported RRULE parm: ${automationScheduleValue193.join(",")}`,
              );
            automationScheduleValue179.push(automationScheduleHelper7(item));
            break;
          case "RDATE":
            var automationScheduleValue195 = (/RDATE(?:;TZID=([^:=]+))?/i.exec(
              item,
            ) ?? [])[1];
            automationScheduleValue195 &&
              !automationScheduleValue185 &&
              (automationScheduleValue185 = automationScheduleValue195);
            automationScheduleValue180 = automationScheduleValue180.concat(
              automationScheduleHelper36(
                automationScheduleValue194,
                automationScheduleValue193,
              ),
            );
            break;
          case "EXRULE":
            if (automationScheduleValue193.length)
              throw Error(
                `unsupported EXRULE parm: ${automationScheduleValue193.join(",")}`,
              );
            automationScheduleValue181.push(
              automationScheduleHelper7(automationScheduleValue194),
            );
            break;
          case "EXDATE":
            automationScheduleValue182 = automationScheduleValue182.concat(
              automationScheduleHelper36(
                automationScheduleValue194,
                automationScheduleValue193,
              ),
            );
            break;
          case "DTSTART":
            break;
          default:
            throw Error("unsupported property: " + automationScheduleValue192);
        }
      }
    }),
    {
      dtstart: automationScheduleValue184,
      tzid: automationScheduleValue185,
      rrulevals: automationScheduleValue179,
      rdatevals: automationScheduleValue180,
      exrulevals: automationScheduleValue181,
      exdatevals: automationScheduleValue182,
    }
  );
}
function automationScheduleHelper28(
  automationScheduleParam27,
  automationScheduleParam28,
) {
  var automationScheduleValue196 = _t(
      automationScheduleParam27,
      automationScheduleParam28,
    ),
    automationScheduleValue197 = automationScheduleValue196.rrulevals,
    automationScheduleValue198 = automationScheduleValue196.rdatevals,
    automationScheduleValue199 = automationScheduleValue196.exrulevals,
    automationScheduleValue200 = automationScheduleValue196.exdatevals,
    automationScheduleValue201 = automationScheduleValue196.dtstart,
    automationScheduleValue202 = automationScheduleValue196.tzid,
    automationScheduleValue203 = automationScheduleParam28.cache === false;
  if (
    (automationScheduleParam28.compatible &&
      ((automationScheduleParam28.forceset = true),
      (automationScheduleParam28.unfold = true)),
    automationScheduleParam28.forceset ||
      automationScheduleValue197.length > 1 ||
      automationScheduleValue198.length ||
      automationScheduleValue199.length ||
      automationScheduleValue200.length)
  ) {
    var automationScheduleValue204 = new automationScheduleValue75(
      automationScheduleValue203,
    );
    return (
      automationScheduleValue204.dtstart(automationScheduleValue201),
      automationScheduleValue204.tzid(automationScheduleValue202 || undefined),
      automationScheduleValue197.forEach(function (item) {
        automationScheduleValue204.rrule(
          new automationScheduleValue73(
            automationScheduleHelper30(
              item,
              automationScheduleValue201,
              automationScheduleValue202,
            ),
            automationScheduleValue203,
          ),
        );
      }),
      automationScheduleValue198.forEach(function (item) {
        automationScheduleValue204.rdate(item);
      }),
      automationScheduleValue199.forEach(function (item) {
        automationScheduleValue204.exrule(
          new automationScheduleValue73(
            automationScheduleHelper30(
              item,
              automationScheduleValue201,
              automationScheduleValue202,
            ),
            automationScheduleValue203,
          ),
        );
      }),
      automationScheduleValue200.forEach(function (item) {
        automationScheduleValue204.exdate(item);
      }),
      automationScheduleParam28.compatible &&
        automationScheduleParam28.dtstart &&
        automationScheduleValue204.rdate(automationScheduleValue201),
      automationScheduleValue204
    );
  }
  var automationScheduleValue205 = automationScheduleValue197[0] || {};
  return new automationScheduleValue73(
    automationScheduleHelper30(
      automationScheduleValue205,
      automationScheduleValue205.dtstart ||
        automationScheduleParam28.dtstart ||
        automationScheduleValue201,
      automationScheduleValue205.tzid ||
        automationScheduleParam28.tzid ||
        automationScheduleValue202,
    ),
    automationScheduleValue203,
  );
}
function automationScheduleHelper29(
  automationScheduleParam282,
  automationScheduleParam283,
) {
  return (
    automationScheduleParam283 === undefined &&
      (automationScheduleParam283 = {}),
    automationScheduleHelper28(
      automationScheduleParam282,
      automationScheduleHelper31(automationScheduleParam283),
    )
  );
}
function automationScheduleHelper30(
  automationScheduleParam284,
  automationScheduleParam285,
  automationScheduleParam286,
) {
  return automationScheduleImport3(
    automationScheduleImport3({}, automationScheduleParam284),
    {
      dtstart: automationScheduleParam285,
      tzid: automationScheduleParam286,
    },
  );
}
function automationScheduleHelper31(automationScheduleParam136) {
  var automationScheduleValue370 = [],
    automationScheduleValue371 = Object.keys(automationScheduleParam136),
    automationScheduleValue372 = Object.keys(automationScheduleValue74);
  if (
    (automationScheduleValue371.forEach(function (item) {
      automationScheduleValue15(automationScheduleValue372, item) ||
        automationScheduleValue370.push(item);
    }),
    automationScheduleValue370.length)
  )
    throw Error("Invalid options: " + automationScheduleValue370.join(", "));
  return automationScheduleImport3(
    automationScheduleImport3({}, automationScheduleValue74),
    automationScheduleParam136,
  );
}
function automationScheduleHelper32(automationScheduleParam223) {
  if (automationScheduleParam223.indexOf(":") === -1)
    return {
      name: "RRULE",
      value: automationScheduleParam223,
    };
  var automationScheduleValue429 = automationScheduleValue10(
    automationScheduleParam223,
    ":",
    1,
  );
  return {
    name: automationScheduleValue429[0],
    value: automationScheduleValue429[1],
  };
}
function automationScheduleHelper33(automationScheduleParam158) {
  var automationScheduleValue392 = automationScheduleHelper32(
      automationScheduleParam158,
    ),
    automationScheduleValue393 = automationScheduleValue392.name,
    automationScheduleValue394 = automationScheduleValue392.value,
    automationScheduleValue395 = automationScheduleValue393.split(";");
  if (!automationScheduleValue395) throw Error("empty property name");
  return {
    name: automationScheduleValue395[0].toUpperCase(),
    parms: automationScheduleValue395.slice(1),
    value: automationScheduleValue394,
  };
}
function automationScheduleHelper34(
  automationScheduleParam89,
  automationScheduleParam90,
) {
  if (
    (automationScheduleParam90 === undefined &&
      (automationScheduleParam90 = false),
    (automationScheduleParam89 &&= automationScheduleParam89.trim()),
    !automationScheduleParam89)
  )
    throw Error("Invalid empty string");
  if (!automationScheduleParam90) return automationScheduleParam89.split(/\s/);
  for (
    var automationScheduleValue313 = automationScheduleParam89.split("\n"),
      automationScheduleValue314 = 0;
    automationScheduleValue314 < automationScheduleValue313.length;

  ) {
    var automationScheduleValue315 = (automationScheduleValue313[
      automationScheduleValue314
    ] = automationScheduleValue313[automationScheduleValue314].replace(
      /\s+$/g,
      "",
    ));
    automationScheduleValue315
      ? automationScheduleValue314 > 0 && automationScheduleValue315[0] === " "
        ? ((automationScheduleValue313[automationScheduleValue314 - 1] +=
            automationScheduleValue315.slice(1)),
          automationScheduleValue313.splice(automationScheduleValue314, 1))
        : (automationScheduleValue314 += 1)
      : automationScheduleValue313.splice(automationScheduleValue314, 1);
  }
  return automationScheduleValue313;
}
function automationScheduleHelper35(automationScheduleParam186) {
  automationScheduleParam186.forEach(function (item) {
    if (!/(VALUE=DATE(-TIME)?)|(TZID=)/.test(item))
      throw Error("unsupported RDATE/EXDATE parm: " + item);
  });
}
function automationScheduleHelper36(
  automationScheduleParam237,
  automationScheduleParam238,
) {
  return (
    automationScheduleHelper35(automationScheduleParam238),
    automationScheduleParam237.split(",").map(function (item) {
      return automationScheduleValue35(item);
    })
  );
}
function automationScheduleHelper37(automationScheduleParam126) {
  var automationScheduleValue352 = this;
  return function (automationScheduleParam146) {
    if (
      (automationScheduleParam146 !== undefined &&
        (automationScheduleValue352[`_${automationScheduleParam126}`] =
          automationScheduleParam146),
      automationScheduleValue352[`_${automationScheduleParam126}`] !==
        undefined)
    )
      return automationScheduleValue352[`_${automationScheduleParam126}`];
    for (
      var automationScheduleValue384 = 0;
      automationScheduleValue384 < automationScheduleValue352._rrule.length;
      automationScheduleValue384++
    ) {
      var automationScheduleValue385 =
        automationScheduleValue352._rrule[automationScheduleValue384]
          .origOptions[automationScheduleParam126];
      if (automationScheduleValue385) return automationScheduleValue385;
    }
  };
}
var automationScheduleValue75 = (function (automationScheduleParam5) {
  automationScheduleImport2(
    automationScheduleHelper88,
    automationScheduleParam5,
  );
  function automationScheduleHelper88(automationScheduleParam120) {
    automationScheduleParam120 === undefined &&
      (automationScheduleParam120 = false);
    var automationScheduleValue343 =
      automationScheduleParam5.call(this, {}, automationScheduleParam120) ||
      this;
    return (
      (automationScheduleValue343.dtstart = automationScheduleHelper37.apply(
        automationScheduleValue343,
        ["dtstart"],
      )),
      (automationScheduleValue343.tzid = automationScheduleHelper37.apply(
        automationScheduleValue343,
        ["tzid"],
      )),
      (automationScheduleValue343._rrule = []),
      (automationScheduleValue343._rdate = []),
      (automationScheduleValue343._exrule = []),
      (automationScheduleValue343._exdate = []),
      automationScheduleValue343
    );
  }
  return (
    (automationScheduleHelper88.prototype._iter = function (
      automationScheduleParam179,
    ) {
      return automationScheduleHelper27(
        automationScheduleParam179,
        this._rrule,
        this._exrule,
        this._rdate,
        this._exdate,
        this.tzid(),
      );
    }),
    (automationScheduleHelper88.prototype.rrule = function (
      automationScheduleParam345,
    ) {
      automationScheduleHelper38(automationScheduleParam345, this._rrule);
    }),
    (automationScheduleHelper88.prototype.exrule = function (
      automationScheduleParam342,
    ) {
      automationScheduleHelper38(automationScheduleParam342, this._exrule);
    }),
    (automationScheduleHelper88.prototype.rdate = function (
      automationScheduleParam346,
    ) {
      automationScheduleHelper39(automationScheduleParam346, this._rdate);
    }),
    (automationScheduleHelper88.prototype.exdate = function (
      automationScheduleParam343,
    ) {
      automationScheduleHelper39(automationScheduleParam343, this._exdate);
    }),
    (automationScheduleHelper88.prototype.rrules = function () {
      return this._rrule.map(function (item) {
        return automationScheduleHelper29(item.toString());
      });
    }),
    (automationScheduleHelper88.prototype.exrules = function () {
      return this._exrule.map(function (item) {
        return automationScheduleHelper29(item.toString());
      });
    }),
    (automationScheduleHelper88.prototype.rdates = function () {
      return this._rdate.map(function (item) {
        return new Date(item.getTime());
      });
    }),
    (automationScheduleHelper88.prototype.exdates = function () {
      return this._exdate.map(function (item) {
        return new Date(item.getTime());
      });
    }),
    (automationScheduleHelper88.prototype.valueOf = function () {
      var automationScheduleValue190 = [];
      return (
        !this._rrule.length &&
          this._dtstart &&
          (automationScheduleValue190 = automationScheduleValue190.concat(
            automationScheduleHelper14({
              dtstart: this._dtstart,
            }),
          )),
        this._rrule.forEach(function (item) {
          automationScheduleValue190 = automationScheduleValue190.concat(
            item.toString().split("\n"),
          );
        }),
        this._exrule.forEach(function (item) {
          automationScheduleValue190 = automationScheduleValue190.concat(
            item
              .toString()
              .split("\n")
              .map(function (_item) {
                return _item.replace(/^RRULE:/, "EXRULE:");
              })
              .filter(function (_item) {
                return !/^DTSTART/.test(_item);
              }),
          );
        }),
        this._rdate.length &&
          automationScheduleValue190.push(
            automationScheduleHelper40("RDATE", this._rdate, this.tzid()),
          ),
        this._exdate.length &&
          automationScheduleValue190.push(
            automationScheduleHelper40("EXDATE", this._exdate, this.tzid()),
          ),
        automationScheduleValue190
      );
    }),
    (automationScheduleHelper88.prototype.toString = function () {
      return this.valueOf().join("\n");
    }),
    (automationScheduleHelper88.prototype.clone = function () {
      var automationScheduleValue296 = new automationScheduleHelper88(
        !!this._cache,
      );
      return (
        this._rrule.forEach(function (item) {
          return automationScheduleValue296.rrule(item.clone());
        }),
        this._exrule.forEach(function (item) {
          return automationScheduleValue296.exrule(item.clone());
        }),
        this._rdate.forEach(function (item) {
          return automationScheduleValue296.rdate(new Date(item.getTime()));
        }),
        this._exdate.forEach(function (item) {
          return automationScheduleValue296.exdate(new Date(item.getTime()));
        }),
        automationScheduleValue296
      );
    }),
    automationScheduleHelper88
  );
})(automationScheduleValue73);
function automationScheduleHelper38(
  automationScheduleParam224,
  automationScheduleParam225,
) {
  if (!(automationScheduleParam224 instanceof automationScheduleValue73))
    throw TypeError(
      String(automationScheduleParam224) + " is not RRule instance",
    );
  automationScheduleValue15(
    automationScheduleParam225.map(String),
    String(automationScheduleParam224),
  ) || automationScheduleParam225.push(automationScheduleParam224);
}
function automationScheduleHelper39(
  automationScheduleParam184,
  automationScheduleParam185,
) {
  if (!(automationScheduleParam184 instanceof Date))
    throw TypeError(
      String(automationScheduleParam184) + " is not Date instance",
    );
  automationScheduleValue15(
    automationScheduleParam185.map(Number),
    Number(automationScheduleParam184),
  ) ||
    (automationScheduleParam185.push(automationScheduleParam184),
    automationScheduleValue33(automationScheduleParam185));
}
function automationScheduleHelper40(
  automationScheduleParam161,
  automationScheduleParam162,
  automationScheduleParam163,
) {
  var automationScheduleValue400 =
    !automationScheduleParam163 ||
    automationScheduleParam163.toUpperCase() === "UTC";
  return `${automationScheduleValue400 ? `${automationScheduleParam161}:` : `${automationScheduleParam161};TZID=${automationScheduleParam163}:`}${automationScheduleParam162
    .map(function (item) {
      return automationScheduleValue34(
        item.valueOf(),
        automationScheduleValue400,
      );
    })
    .join(",")}`;
}
var automationScheduleValue76 = ["SU", "MO", "TU", "WE", "TH", "FR", "SA"];
function automationScheduleHelper41(automationScheduleParam226) {
  let automationScheduleValue431 = new Map(
    automationScheduleValue76.map((item, index) => [item, index]),
  );
  return [...new Set(automationScheduleParam226)].sort(
    (automationScheduleParam349, automationScheduleParam350) =>
      (automationScheduleValue431.get(automationScheduleParam349) ?? 0) -
      (automationScheduleValue431.get(automationScheduleParam350) ?? 0),
  );
}
function automationScheduleHelper42(
  automationScheduleParam129,
  automationScheduleParam130,
) {
  let [automationScheduleValue362, automationScheduleValue363] =
      automationScheduleParam129.split(":"),
    automationScheduleValue364 = Number(automationScheduleValue362),
    automationScheduleValue365 = Number(automationScheduleValue363);
  return !Number.isFinite(automationScheduleValue364) ||
    !Number.isFinite(automationScheduleValue365)
    ? null
    : automationScheduleParam130.formatTime(
        new Date(
          2024,
          0,
          1,
          automationScheduleValue364,
          automationScheduleValue365,
        ),
        {
          hour: "numeric",
          minute: "2-digit",
        },
      );
}
function automationScheduleHelper43(
  automationScheduleParam10,
  automationScheduleParam11,
) {
  switch (automationScheduleParam10) {
    case "SU":
      return automationScheduleParam11.formatMessage({
        id: "settings.automations.scheduleSummary.sundaysLabel",
        defaultMessage: "Sundays",
        description: "Plural Sunday label for schedule summaries",
      });
    case "MO":
      return automationScheduleParam11.formatMessage({
        id: "settings.automations.scheduleSummary.mondaysLabel",
        defaultMessage: "Mondays",
        description: "Plural Monday label for schedule summaries",
      });
    case "TU":
      return automationScheduleParam11.formatMessage({
        id: "settings.automations.scheduleSummary.tuesdaysLabel",
        defaultMessage: "Tuesdays",
        description: "Plural Tuesday label for schedule summaries",
      });
    case "WE":
      return automationScheduleParam11.formatMessage({
        id: "settings.automations.scheduleSummary.wednesdaysLabel",
        defaultMessage: "Wednesdays",
        description: "Plural Wednesday label for schedule summaries",
      });
    case "TH":
      return automationScheduleParam11.formatMessage({
        id: "settings.automations.scheduleSummary.thursdaysLabel",
        defaultMessage: "Thursdays",
        description: "Plural Thursday label for schedule summaries",
      });
    case "FR":
      return automationScheduleParam11.formatMessage({
        id: "settings.automations.scheduleSummary.fridaysLabel",
        defaultMessage: "Fridays",
        description: "Plural Friday label for schedule summaries",
      });
    case "SA":
      return automationScheduleParam11.formatMessage({
        id: "settings.automations.scheduleSummary.saturdaysLabel",
        defaultMessage: "Saturdays",
        description: "Plural Saturday label for schedule summaries",
      });
  }
}
function automationScheduleHelper44(
  automationScheduleParam46,
  automationScheduleParam47,
  automationScheduleParam48,
  automationScheduleParam49,
  automationScheduleParam50,
) {
  if (automationScheduleParam48)
    return automationScheduleParam47.formatMessage({
      id: "settings.automations.scheduleSummary.weekdaysLabel",
      defaultMessage: "weekdays",
      description: "Weekday label for schedule summaries",
    });
  if (automationScheduleParam49)
    return automationScheduleParam47.formatMessage({
      id: "settings.automations.scheduleSummary.weekendsLabel",
      defaultMessage: "weekends",
      description: "Weekend label for schedule summaries",
    });
  if (
    automationScheduleParam50 === "long" &&
    automationScheduleParam46.length === 1
  ) {
    let automationScheduleValue456 = automationScheduleParam46[0];
    return automationScheduleValue456
      ? automationScheduleHelper43(
          automationScheduleValue456,
          automationScheduleParam47,
        )
      : null;
  }
  return automationScheduleParam46.length > 2 &&
    automationScheduleHelper52(automationScheduleParam46)
    ? automationScheduleHelper51(
        automationScheduleParam46,
        automationScheduleParam47,
      )
    : automationScheduleHelper46(
        automationScheduleParam46,
        automationScheduleParam47,
        automationScheduleParam46.length > 2
          ? "short"
          : automationScheduleParam50,
      );
}
function automationScheduleHelper45(
  automationScheduleParam259,
  automationScheduleParam260,
) {
  return automationScheduleParam259.length === automationScheduleParam260.length
    ? automationScheduleParam260.every((item) =>
        automationScheduleParam259.includes(item),
      )
    : false;
}
function automationScheduleHelper46(
  automationScheduleParam175,
  automationScheduleParam176,
  automationScheduleParam177,
) {
  let automationScheduleValue409 = automationScheduleParam175.map((item) =>
    automationScheduleParam177 === "short"
      ? automationScheduleHelper50(item, automationScheduleParam176)
      : automationScheduleHelper47(item, automationScheduleParam176, "long"),
  );
  return automationScheduleValue409.length === 0
    ? null
    : automationScheduleParam176.formatList(automationScheduleValue409, {
        type: "conjunction",
      });
}
function automationScheduleHelper47(
  automationScheduleParam270,
  automationScheduleParam271,
  automationScheduleParam272,
) {
  let automationScheduleValue451 = automationScheduleHelper48(
    automationScheduleParam270,
  );
  return automationScheduleParam271.formatDate(automationScheduleValue451, {
    weekday: automationScheduleParam272,
  });
}
function automationScheduleHelper48(automationScheduleParam288) {
  let automationScheduleValue455 = automationScheduleHelper49(
    automationScheduleParam288,
  );
  return new Date(2024, 0, 7 + automationScheduleValue455);
}
function automationScheduleHelper49(automationScheduleParam354) {
  return automationScheduleValue76.indexOf(automationScheduleParam354);
}
function automationScheduleHelper50(
  automationScheduleParam192,
  automationScheduleParam193,
) {
  let automationScheduleValue419 = automationScheduleHelper47(
      automationScheduleParam192,
      automationScheduleParam193,
      "short",
    ),
    automationScheduleValue420 = automationScheduleHelper47(
      automationScheduleParam192,
      automationScheduleParam193,
      "long",
    );
  return automationScheduleValue419.length >= automationScheduleValue420.length
    ? automationScheduleParam193.formatDate(
        automationScheduleHelper48(automationScheduleParam192),
        {
          weekday: "narrow",
        },
      )
    : automationScheduleValue419;
}
function automationScheduleHelper51(
  automationScheduleParam111,
  automationScheduleParam112,
) {
  let automationScheduleValue337 = automationScheduleHelper41(
      automationScheduleParam111,
    ),
    automationScheduleValue338 = automationScheduleValue337[0],
    automationScheduleValue339 =
      automationScheduleValue337[automationScheduleValue337.length - 1];
  return !automationScheduleValue338 || !automationScheduleValue339
    ? automationScheduleParam112.formatMessage({
        id: "settings.automations.scheduleSummary.weekdaysLabel",
        defaultMessage: "weekdays",
        description: "Weekday label for schedule summaries",
      })
    : `${automationScheduleHelper50(automationScheduleValue338, automationScheduleParam112)}-${automationScheduleHelper50(automationScheduleValue339, automationScheduleParam112)}`;
}
function automationScheduleHelper52(automationScheduleParam138) {
  if (automationScheduleParam138.length < 2) return false;
  let automationScheduleValue373 = automationScheduleHelper41(
    automationScheduleParam138,
  );
  for (
    let automationScheduleValue411 = 1;
    automationScheduleValue411 < automationScheduleValue373.length;
    automationScheduleValue411 += 1
  ) {
    let automationScheduleValue435 = automationScheduleValue76.indexOf(
        automationScheduleValue373[automationScheduleValue411 - 1] ?? "",
      ),
      automationScheduleValue436 = automationScheduleValue76.indexOf(
        automationScheduleValue373[automationScheduleValue411] ?? "",
      );
    if (
      automationScheduleValue435 < 0 ||
      automationScheduleValue436 < 0 ||
      automationScheduleValue436 !== automationScheduleValue435 + 1
    )
      return false;
  }
  return true;
}
var automationScheduleValue77 = Array.from(automationScheduleValue76),
  automationScheduleValue78 = ["MO", "TU", "WE", "TH", "FR"],
  automationScheduleValue79 = ["SA", "SU"],
  automationScheduleValue82 = new Set(["freq", "interval", "dtstart", "tzid"]),
  automationScheduleValue83 = new Set([
    ...automationScheduleValue82,
    "byweekday",
    "byminute",
  ]),
  automationScheduleValue84 = new Set([...automationScheduleValue83, "byhour"]),
  automationScheduleValue85 = {
    MO: automationScheduleValue73.MO,
    TU: automationScheduleValue73.TU,
    WE: automationScheduleValue73.WE,
    TH: automationScheduleValue73.TH,
    FR: automationScheduleValue73.FR,
    SA: automationScheduleValue73.SA,
    SU: automationScheduleValue73.SU,
  };
function automationScheduleI() {
  return {
    mode: "daily",
    intervalHours: 24,
    intervalMinutes: null,
    weekdays: automationScheduleValue77,
    time: "09:00",
    customRrule: "",
  };
}
function automationScheduleR() {
  return {
    ...automationScheduleI(),
    mode: "hourly",
    intervalHours: 1,
    intervalMinutes: 30,
    weekdays: automationScheduleValue77,
    customRrule: "",
  };
}
function automationScheduleM(automationScheduleParam124) {
  let automationScheduleValue349 = automationScheduleI(),
    automationScheduleValue350 = $(automationScheduleParam124);
  if (!automationScheduleValue350) return automationScheduleValue349;
  let automationScheduleValue351 = automationScheduleHelper59(
    automationScheduleValue350,
  );
  return {
    ...automationScheduleValue349,
    mode: automationScheduleValue351,
    intervalHours: automationScheduleValue350.interval,
    intervalMinutes: null,
    weekdays: automationScheduleValue350.weekdays,
    time: automationScheduleValue350.time,
    customRrule:
      automationScheduleValue351 === "custom"
        ? automationScheduleValue350.rruleText
        : "",
  };
}
function automationScheduleP(automationScheduleParam85) {
  let automationScheduleValue303 = automationScheduleR(),
    automationScheduleValue304 = $(automationScheduleParam85);
  if (!automationScheduleValue304) return automationScheduleValue303;
  let automationScheduleValue305 = automationScheduleHelper56(
    automationScheduleValue304,
  );
  if (automationScheduleValue305 == null) {
    let automationScheduleValue376 = automationScheduleHelper59(
      automationScheduleValue304,
    );
    return automationScheduleValue376 === "daily" ||
      automationScheduleValue376 === "weekdays" ||
      automationScheduleValue376 === "weekly"
      ? {
          ...automationScheduleValue303,
          mode: automationScheduleValue376,
          weekdays: automationScheduleValue304.weekdays,
          time: automationScheduleValue304.time,
        }
      : automationScheduleValue376 === "custom"
        ? {
            ...automationScheduleValue303,
            mode: automationScheduleValue376,
            customRrule: automationScheduleValue304.rruleText,
          }
        : automationScheduleValue303;
  }
  return {
    ...automationScheduleValue303,
    intervalHours: Math.max(1, Math.round(automationScheduleValue305 / 60)),
    intervalMinutes: automationScheduleValue305,
  };
}
function automationScheduleHelper53(automationScheduleParam229) {
  let automationScheduleValue433 = $(automationScheduleParam229);
  if (automationScheduleValue433 == null) return {};
  let automationScheduleValue434 = automationScheduleHelper63(
    automationScheduleValue433.freq,
  );
  return automationScheduleValue434 == null
    ? {}
    : {
        scheduleFreq: automationScheduleValue434,
      };
}
function automationScheduleC(automationScheduleParam60) {
  let automationScheduleValue268 =
      automationScheduleParam60.reasoningEffort == null
        ? undefined
        : _n(automationScheduleParam60.reasoningEffort),
    automationScheduleValue269 = {
      kind: automationScheduleHelper60(automationScheduleParam60.kind),
      ...("status" in automationScheduleParam60
        ? {
            status: automationScheduleHelper61(
              automationScheduleParam60.status,
            ),
          }
        : {}),
      ...automationScheduleHelper53(automationScheduleParam60.rrule),
      hasModel: automationScheduleParam60.model != null,
      ...(automationScheduleValue268 == null
        ? {}
        : {
            reasoningEffort: automationScheduleValue268,
          }),
    };
  if (automationScheduleParam60.kind !== "cron")
    return automationScheduleValue269;
  let automationScheduleValue270 = {
    ...automationScheduleValue269,
    cwdCount: automationScheduleParam60.cwds.length,
    executionEnvironment: automationScheduleHelper62(
      automationScheduleParam60.executionEnvironment,
    ),
  };
  return (
    automationScheduleParam60.localEnvironmentConfigPath !== undefined &&
      (automationScheduleValue270.hasLocalEnvironmentConfig =
        automationScheduleParam60.localEnvironmentConfigPath != null),
    automationScheduleValue270
  );
}
function automationScheduleT(automationScheduleParam84) {
  switch (automationScheduleParam84.mode) {
    case "hourly":
      return automationScheduleParam84.intervalMinutes == null
        ? automationScheduleHelper54(automationScheduleParam84.intervalHours)
        : automationScheduleHelper55(automationScheduleParam84.intervalMinutes);
    case "daily":
      return automationScheduleHelper57({
        time: automationScheduleParam84.time,
        weekdays: automationScheduleValue77,
      });
    case "weekdays":
      return automationScheduleHelper57({
        time: automationScheduleParam84.time,
        weekdays: Array.from(automationScheduleValue78),
      });
    case "weekly":
      return automationScheduleHelper57({
        time: automationScheduleParam84.time,
        weekdays: [
          automationScheduleHelper73(automationScheduleParam84.weekdays),
        ],
      });
    case "custom":
      return automationScheduleParam84.customRrule.trim();
  }
}
function automationScheduleU(automationScheduleParam110) {
  switch (automationScheduleParam110.mode) {
    case "hourly":
      return automationScheduleParam110.intervalMinutes == null
        ? automationScheduleD(automationScheduleParam110.intervalHours) != null
        : automationScheduleF(automationScheduleParam110.intervalMinutes) !=
            null;
    case "daily":
    case "weekdays":
    case "weekly":
      return automationScheduleL(automationScheduleParam110.time) != null;
    case "custom":
      return automationScheduleHelper74(
        automationScheduleParam110.customRrule.trim(),
      );
  }
}
function automationScheduleN(
  automationScheduleParam37,
  automationScheduleParam38,
) {
  return automationScheduleParam38 === "custom"
    ? {
        ...automationScheduleParam37,
        mode: "custom",
        customRrule:
          automationScheduleParam37.mode === "custom" &&
          automationScheduleParam37.customRrule.trim()
            ? automationScheduleParam37.customRrule
            : automationScheduleT(automationScheduleParam37),
      }
    : automationScheduleParam38 === "hourly"
      ? {
          ...automationScheduleParam37,
          mode: "hourly",
          intervalHours:
            automationScheduleParam37.mode === "hourly"
              ? (automationScheduleD(automationScheduleParam37.intervalHours) ??
                1)
              : 1,
          intervalMinutes:
            automationScheduleParam37.intervalMinutes == null
              ? null
              : (automationScheduleF(
                  automationScheduleParam37.intervalMinutes,
                ) ?? 30),
        }
      : automationScheduleParam38 === "daily"
        ? {
            ...automationScheduleParam37,
            mode: "daily",
            weekdays: automationScheduleValue77,
          }
        : automationScheduleParam38 === "weekdays"
          ? {
              ...automationScheduleParam37,
              mode: "weekdays",
              weekdays: Array.from(automationScheduleValue78),
            }
          : {
              ...automationScheduleParam37,
              mode: "weekly",
              weekdays: [
                automationScheduleHelper73(automationScheduleParam37.weekdays),
              ],
            };
}
function on(automationScheduleParam330) {
  return automationScheduleParam330.length > 0
    ? automationScheduleHelper41(automationScheduleParam330)
    : automationScheduleValue77;
}
function automationScheduleA(
  automationScheduleParam321,
  automationScheduleParam322,
) {
  return (
    automationScheduleHelper64(
      $(automationScheduleT(automationScheduleParam321)),
      automationScheduleParam322,
    ) ?? null
  );
}
function automationScheduleO({ rrule, intl, fallbackMessage }) {
  return rrule
    ? (automationScheduleHelper64($(rrule), intl) ?? fallbackMessage)
    : null;
}
function automationScheduleHelper54(automationScheduleParam183) {
  let automationScheduleValue415 =
    automationScheduleD(automationScheduleParam183) ?? 1;
  return new automationScheduleValue73({
    freq: automationScheduleValue73.HOURLY,
    interval: automationScheduleValue415,
    byminute: 0,
    byweekday: automationScheduleValue77.map(
      (item) => automationScheduleValue85[item],
    ),
  }).toString();
}
function automationScheduleHelper55(automationScheduleParam246) {
  let automationScheduleValue443 =
    automationScheduleF(automationScheduleParam246) ?? 30;
  return new automationScheduleValue73({
    freq: automationScheduleValue73.MINUTELY,
    interval: automationScheduleValue443,
  }).toString();
}
function automationScheduleD(automationScheduleParam239) {
  if (!Number.isFinite(automationScheduleParam239)) return null;
  let automationScheduleValue438 = Math.round(automationScheduleParam239);
  return automationScheduleValue438 < 1 ? null : automationScheduleValue438;
}
function automationScheduleF(automationScheduleParam240) {
  if (!Number.isFinite(automationScheduleParam240)) return null;
  let automationScheduleValue439 = Math.round(automationScheduleParam240);
  return automationScheduleValue439 < 1 ? null : automationScheduleValue439;
}
function automationScheduleHelper56(automationScheduleParam113) {
  return automationScheduleParam113.hasMultipleTimeValues
    ? null
    : automationScheduleParam113.freq === automationScheduleValue73.MINUTELY &&
        automationScheduleHelper58(
          automationScheduleParam113,
          automationScheduleValue82,
        )
      ? (automationScheduleF(automationScheduleParam113.interval) ?? 30)
      : automationScheduleParam113.freq === automationScheduleValue73.HOURLY &&
          automationScheduleHelper58(
            automationScheduleParam113,
            automationScheduleValue83,
          ) &&
          (automationScheduleParam113.minute == null ||
            automationScheduleParam113.minute === 0) &&
          automationScheduleHelper45(
            automationScheduleParam113.weekdays,
            automationScheduleValue77,
          )
        ? (automationScheduleD(automationScheduleParam113.interval) ?? 1) * 60
        : null;
}
function automationScheduleHelper57({ time, weekdays }) {
  let automationScheduleValue374 =
    automationScheduleL(time) ?? automationScheduleL("09:00");
  return automationScheduleValue374
    ? new automationScheduleValue73({
        freq: automationScheduleValue73.WEEKLY,
        byhour: automationScheduleValue374.hour,
        byminute: automationScheduleValue374.minute,
        byweekday: automationScheduleHelper41(weekdays).map(
          (item) => automationScheduleValue85[item],
        ),
      }).toString()
    : "";
}
function $(automationScheduleParam26) {
  if (!automationScheduleParam26) return null;
  try {
    let automationScheduleValue228 = automationScheduleHelper29(
        automationScheduleParam26,
        {
          forceset: true,
          tzid: automationScheduleHelper75() ?? undefined,
        },
      ),
      automationScheduleValue229 = automationScheduleValue228.rrules()[0];
    if (!automationScheduleValue229) return null;
    let automationScheduleValue230 = automationScheduleValue229.options,
      automationScheduleValue231 =
        automationScheduleHelper71(automationScheduleValue230.byweekday) ??
        automationScheduleHelper72(automationScheduleParam26) ??
        automationScheduleValue77,
      automationScheduleValue232 = automationScheduleHelper70(
        automationScheduleValue230.byminute,
      );
    return {
      freq: automationScheduleValue230.freq,
      isStandaloneRrule:
        automationScheduleValue229.origOptions.dtstart == null &&
        automationScheduleValue228.rrules().length === 1 &&
        automationScheduleValue228.rdates().length === 0 &&
        automationScheduleValue228.exrules().length === 0 &&
        automationScheduleValue228.exdates().length === 0,
      hasMultipleTimeValues:
        (Array.isArray(automationScheduleValue230.byhour) &&
          automationScheduleValue230.byhour.length > 1) ||
        (Array.isArray(automationScheduleValue230.byminute) &&
          automationScheduleValue230.byminute.length > 1),
      interval: Math.max(
        1,
        Math.round(automationScheduleValue230.interval ?? 1),
      ),
      minute: automationScheduleValue232,
      origOptions: automationScheduleValue229.origOptions,
      rruleText: automationScheduleParam26,
      time: automationScheduleHelper69(
        automationScheduleValue230.byhour,
        automationScheduleValue230.byminute,
        automationScheduleValue230,
      ),
      weekdays: automationScheduleValue231,
    };
  } catch {
    return null;
  }
}
function automationScheduleHelper58(
  automationScheduleParam232,
  automationScheduleParam233,
) {
  return (
    automationScheduleParam232.isStandaloneRrule &&
    Object.keys(automationScheduleParam232.origOptions).every((item) =>
      automationScheduleParam233.has(item),
    )
  );
}
function automationScheduleHelper59(automationScheduleParam79) {
  if (automationScheduleParam79.hasMultipleTimeValues) return "custom";
  if (
    automationScheduleParam79.freq === automationScheduleValue73.HOURLY &&
    automationScheduleHelper58(
      automationScheduleParam79,
      automationScheduleValue83,
    ) &&
    automationScheduleParam79.interval === 1 &&
    automationScheduleParam79.minute === 0 &&
    automationScheduleHelper45(
      automationScheduleParam79.weekdays,
      automationScheduleValue77,
    )
  )
    return "hourly";
  if (
    automationScheduleHelper58(
      automationScheduleParam79,
      automationScheduleValue84,
    ) &&
    automationScheduleParam79.interval === 1 &&
    (automationScheduleParam79.freq === automationScheduleValue73.DAILY ||
      automationScheduleParam79.freq === automationScheduleValue73.WEEKLY)
  ) {
    if (
      automationScheduleHelper45(
        automationScheduleParam79.weekdays,
        automationScheduleValue77,
      )
    )
      return "daily";
    if (
      automationScheduleHelper45(
        automationScheduleParam79.weekdays,
        automationScheduleValue78,
      )
    )
      return "weekdays";
    if (automationScheduleParam79.weekdays.length === 1) return "weekly";
  }
  return "custom";
}
function automationScheduleHelper60(automationScheduleParam178) {
  switch (automationScheduleParam178) {
    case "cron":
      return _r.CODEX_AUTOMATION_KIND_CRON;
    case "heartbeat":
      return _r.CODEX_AUTOMATION_KIND_HEARTBEAT;
  }
}
function automationScheduleHelper61(automationScheduleParam140) {
  switch (automationScheduleParam140) {
    case "ACTIVE":
      return productLoggerU.CODEX_AUTOMATION_STATUS_ACTIVE;
    case "PAUSED":
      return productLoggerU.CODEX_AUTOMATION_STATUS_PAUSED;
    case "DELETED":
      return productLoggerU.CODEX_AUTOMATION_STATUS_DELETED;
  }
}
function _n(automationScheduleParam58) {
  if (REASONING_EFFORTS(automationScheduleParam58))
    switch (automationScheduleParam58) {
      case "none":
        return productLoggerZ.CODEX_AUTOMATION_REASONING_EFFORT_NONE;
      case "minimal":
        return productLoggerZ.CODEX_AUTOMATION_REASONING_EFFORT_MINIMAL;
      case "low":
        return productLoggerZ.CODEX_AUTOMATION_REASONING_EFFORT_LOW;
      case "medium":
        return productLoggerZ.CODEX_AUTOMATION_REASONING_EFFORT_MEDIUM;
      case "high":
        return productLoggerZ.CODEX_AUTOMATION_REASONING_EFFORT_HIGH;
      case "xhigh":
        return productLoggerZ.CODEX_AUTOMATION_REASONING_EFFORT_XHIGH;
      case "max":
        return productLoggerZ.CODEX_AUTOMATION_REASONING_EFFORT_MAX;
    }
}
function automationScheduleHelper62(automationScheduleParam159) {
  switch (automationScheduleParam159) {
    case "worktree":
      return productLoggerI.CODEX_AUTOMATION_EXECUTION_ENVIRONMENT_WORKTREE;
    case "local":
      return productLoggerI.CODEX_AUTOMATION_EXECUTION_ENVIRONMENT_LOCAL;
  }
}
function automationScheduleHelper63(automationScheduleParam59) {
  switch (automationScheduleParam59) {
    case automationScheduleValue73.SECONDLY:
      return productLoggerV.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_SECONDLY;
    case automationScheduleValue73.MINUTELY:
      return productLoggerV.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_MINUTELY;
    case automationScheduleValue73.HOURLY:
      return productLoggerV.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_HOURLY;
    case automationScheduleValue73.DAILY:
      return productLoggerV.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_DAILY;
    case automationScheduleValue73.WEEKLY:
      return productLoggerV.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_WEEKLY;
    case automationScheduleValue73.MONTHLY:
      return productLoggerV.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_MONTHLY;
    case automationScheduleValue73.YEARLY:
      return productLoggerV.CODEX_AUTOMATION_SCHEDULE_FREQUENCY_YEARLY;
  }
}
function automationScheduleHelper64(
  automationScheduleParam61,
  automationScheduleParam62,
) {
  if (
    !automationScheduleParam61 ||
    automationScheduleParam61.hasMultipleTimeValues
  )
    return null;
  let automationScheduleValue271 = on(automationScheduleParam61.weekdays),
    automationScheduleValue272 =
      automationScheduleValue271.length === automationScheduleValue76.length;
  if (automationScheduleParam61.freq === automationScheduleValue73.MINUTELY)
    return automationScheduleHelper66({
      intervalMinutes: automationScheduleParam61.interval,
      intl: automationScheduleParam62,
      isEveryDay: automationScheduleValue272,
      weekdays: automationScheduleValue271,
    });
  if (automationScheduleParam61.freq === automationScheduleValue73.HOURLY)
    return automationScheduleHelper65({
      intervalHours: automationScheduleParam61.interval,
      intl: automationScheduleParam62,
      isEveryDay: automationScheduleValue272,
      weekdays: automationScheduleValue271,
    });
  if (
    automationScheduleParam61.freq !== automationScheduleValue73.DAILY &&
    automationScheduleParam61.freq !== automationScheduleValue73.WEEKLY
  )
    return null;
  let automationScheduleValue273 = automationScheduleHelper42(
    automationScheduleParam61.time,
    automationScheduleParam62,
  );
  return automationScheduleValue273
    ? automationScheduleHelper68({
        intl: automationScheduleParam62,
        isEveryDay: automationScheduleValue272,
        timeLabel: automationScheduleValue273,
        weekdays: automationScheduleValue271,
      })
    : null;
}
function automationScheduleHelper65({
  intervalHours,
  intl,
  isEveryDay,
  weekdays,
}) {
  let automationScheduleValue166 =
    intervalHours === 1
      ? intl.formatMessage({
          id: "settings.automations.scheduleSummary.intervalHourly",
          defaultMessage: "Hourly",
          description: "Automation schedule summary for hourly interval",
        })
      : intl.formatMessage(
          {
            id: "settings.automations.scheduleSummary.interval",
            defaultMessage: "Every {count}h",
            description: "Automation schedule summary for hourly interval",
          },
          {
            count: intervalHours,
          },
        );
  if (isEveryDay) return automationScheduleValue166;
  let automationScheduleValue167 = intl.formatMessage(
    {
      id: "settings.automations.scheduleSummary.intervalDayCount",
      defaultMessage: "{count, plural, one {# day} other {# days}}",
      description:
        "Day count label for interval schedules with selected weekdays",
    },
    {
      count: weekdays.length,
    },
  );
  return intl.formatMessage(
    {
      id: "settings.automations.scheduleSummary.intervalDays",
      defaultMessage: "{interval} on {days}",
      description:
        "Automation schedule summary for interval schedule with weekday selection",
    },
    {
      interval: automationScheduleValue166,
      days: automationScheduleValue167,
    },
  );
}
function automationScheduleHelper66({
  intervalMinutes,
  intl,
  isEveryDay,
  weekdays,
}) {
  let automationScheduleValue235 = automationScheduleHelper67({
    intervalMinutes,
    intl,
  });
  if (isEveryDay) return automationScheduleValue235;
  let automationScheduleValue236 = intl.formatMessage(
    {
      id: "settings.automations.scheduleSummary.intervalDayCount",
      defaultMessage: "{count, plural, one {# day} other {# days}}",
      description:
        "Day count label for interval schedules with selected weekdays",
    },
    {
      count: weekdays.length,
    },
  );
  return intl.formatMessage(
    {
      id: "settings.automations.scheduleSummary.intervalDays",
      defaultMessage: "{interval} on {days}",
      description:
        "Automation schedule summary for interval schedule with weekday selection",
    },
    {
      interval: automationScheduleValue235,
      days: automationScheduleValue236,
    },
  );
}
function automationScheduleHelper67({ intervalMinutes, intl }) {
  return intervalMinutes === 1
    ? intl.formatMessage({
        id: "settings.automations.scheduleSummary.intervalMinute",
        defaultMessage: "Every minute",
        description: "Automation schedule summary for one-minute interval",
      })
    : intervalMinutes === 60
      ? intl.formatMessage({
          id: "settings.automations.scheduleSummary.intervalHourly",
          defaultMessage: "Hourly",
          description: "Automation schedule summary for hourly interval",
        })
      : intervalMinutes === 1440
        ? intl.formatMessage({
            id: "settings.automations.scheduleSummary.intervalDaily",
            defaultMessage: "Daily",
            description: "Automation schedule summary for daily interval",
          })
        : intervalMinutes === 10080
          ? intl.formatMessage({
              id: "settings.automations.scheduleSummary.intervalWeekly",
              defaultMessage: "Weekly",
              description: "Automation schedule summary for weekly interval",
            })
          : intl.formatMessage(
              {
                id: "settings.automations.scheduleSummary.intervalMinutes",
                defaultMessage: "Every {count}m",
                description: "Automation schedule summary for minute interval",
              },
              {
                count: intervalMinutes,
              },
            );
}
function automationScheduleHelper68({ intl, isEveryDay, timeLabel, weekdays }) {
  let automationScheduleValue163 = automationScheduleHelper45(
      weekdays,
      automationScheduleValue78,
    ),
    automationScheduleValue164 = automationScheduleHelper45(
      weekdays,
      automationScheduleValue79,
    );
  if (isEveryDay)
    return intl.formatMessage(
      {
        id: "settings.automations.scheduleSummary.daily",
        defaultMessage: "Daily at {time}",
        description: "Automation schedule summary for daily schedule every day",
      },
      {
        time: timeLabel,
      },
    );
  if (automationScheduleValue163)
    return intl.formatMessage(
      {
        id: "settings.automations.scheduleSummary.weekdays",
        defaultMessage: "Weekdays at {time}",
        description:
          "Automation schedule summary for daily schedule on weekdays",
      },
      {
        time: timeLabel,
      },
    );
  if (automationScheduleValue164)
    return intl.formatMessage(
      {
        id: "settings.automations.scheduleSummary.weekends",
        defaultMessage: "Weekends at {time}",
        description:
          "Automation schedule summary for daily schedule on weekends",
      },
      {
        time: timeLabel,
      },
    );
  let automationScheduleValue165 = automationScheduleHelper44(
    weekdays,
    intl,
    automationScheduleValue163,
    automationScheduleValue164,
    "long",
  );
  return automationScheduleValue165
    ? intl.formatMessage(
        {
          id: "settings.automations.scheduleSummary.weekly",
          defaultMessage: "{days} at {time}",
          description: "Automation schedule summary for weekly schedule",
        },
        {
          days: automationScheduleValue165,
          time: timeLabel,
        },
      )
    : null;
}
function automationScheduleHelper69(
  automationScheduleParam170,
  automationScheduleParam171,
  automationScheduleParam172,
) {
  let automationScheduleValue401 = automationScheduleHelper70(
      automationScheduleParam170,
    ),
    automationScheduleValue402 = automationScheduleHelper70(
      automationScheduleParam171,
    );
  return automationScheduleValue401 != null &&
    automationScheduleValue402 != null
    ? automationScheduleS(
        automationScheduleValue401,
        automationScheduleValue402,
      )
    : automationScheduleParam172.dtstart
      ? automationScheduleS(
          automationScheduleParam172.dtstart.getHours(),
          automationScheduleParam172.dtstart.getMinutes(),
        )
      : "09:00";
}
function automationScheduleHelper70(automationScheduleParam204) {
  return Array.isArray(automationScheduleParam204)
    ? typeof automationScheduleParam204[0] == "number"
      ? automationScheduleParam204[0]
      : null
    : typeof automationScheduleParam204 == "number"
      ? automationScheduleParam204
      : null;
}
function automationScheduleHelper71(automationScheduleParam68) {
  if (!automationScheduleParam68) return null;
  let automationScheduleValue280 = new Map(
      automationScheduleValue76.map((item) => [
        automationScheduleValue85[item].weekday,
        item,
      ]),
    ),
    automationScheduleValue281 = (
      Array.isArray(automationScheduleParam68)
        ? automationScheduleParam68
        : [automationScheduleParam68]
    )
      .map((item) => {
        if (typeof item == "string") {
          let automationScheduleValue450 = item.toUpperCase();
          return automationScheduleValue76.includes(automationScheduleValue450)
            ? automationScheduleValue450
            : null;
        }
        return typeof item == "number"
          ? (automationScheduleValue280.get(item) ?? null)
          : typeof item == "object" && item && typeof item.weekday == "number"
            ? (automationScheduleValue280.get(item.weekday) ?? null)
            : null;
      })
      .filter((item) => item != null);
  return automationScheduleValue281.length === 0
    ? null
    : automationScheduleHelper41(automationScheduleValue281);
}
function automationScheduleHelper72(automationScheduleParam108) {
  let automationScheduleValue335 = automationScheduleParam108
    .split(";")
    .find((item) => item.startsWith("BYDAY="));
  if (!automationScheduleValue335) return null;
  let automationScheduleValue336 = automationScheduleValue335
    .replace("BYDAY=", "")
    .split(",")
    .map((item) => {
      let automationScheduleValue449 = item.trim().toUpperCase();
      return automationScheduleValue76.includes(automationScheduleValue449)
        ? automationScheduleValue449
        : null;
    })
    .filter((item) => item != null);
  return automationScheduleValue336.length === 0
    ? null
    : automationScheduleHelper41(automationScheduleValue336);
}
function automationScheduleHelper73(automationScheduleParam351) {
  return on(automationScheduleParam351)[0] ?? "MO";
}
function automationScheduleL(automationScheduleParam174) {
  let [automationScheduleValue405, automationScheduleValue406] =
      automationScheduleParam174.split(":"),
    automationScheduleValue407 = Number(automationScheduleValue405),
    automationScheduleValue408 = Number(automationScheduleValue406);
  return !Number.isFinite(automationScheduleValue407) ||
    !Number.isFinite(automationScheduleValue408)
    ? null
    : {
        hour: automationScheduleValue407,
        minute: automationScheduleValue408,
      };
}
function automationScheduleHelper74(automationScheduleParam339) {
  return automationScheduleParam339
    ? $(automationScheduleParam339) != null
    : false;
}
function automationScheduleS(
  automationScheduleParam252,
  automationScheduleParam253,
) {
  return `${String(automationScheduleParam252).padStart(2, "0")}:${String(automationScheduleParam253).padStart(2, "0")}`;
}
function automationScheduleHelper75() {
  let automationScheduleValue430 =
    Intl.DateTimeFormat().resolvedOptions().timeZone;
  return typeof automationScheduleValue430 == "string" &&
    automationScheduleValue430.trim().length > 0
    ? automationScheduleValue430
    : null;
}
export {
  automationScheduleA,
  automationScheduleC,
  automationScheduleD,
  automationScheduleF,
  automationScheduleH,
  automationScheduleI,
  automationScheduleL,
  automationScheduleM,
  automationScheduleN,
  automationScheduleO,
  automationScheduleP,
  automationScheduleR,
  automationScheduleS,
  automationScheduleT,
  automationScheduleU,
};
