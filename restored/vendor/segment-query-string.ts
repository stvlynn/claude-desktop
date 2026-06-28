// Restored from ref/webview/assets/query-string-FsVg0saL.js
// QueryString chunk restored from the Codex webview bundle.
import { helpersI } from "./segment-helpers";
import { gracefulDecodeURIComponent } from "../utils/graceful-decode-uri-component";
function queryStringHelper1(queryStringParam2, queryStringParam3) {
  return Object.keys(queryStringParam3).reduce(function (
    accumulator,
    _QueryString,
  ) {
    if (_QueryString.startsWith(queryStringParam2)) {
      var queryStringValue17 = _QueryString.substr(queryStringParam2.length);
      accumulator[queryStringValue17] = queryStringParam3[_QueryString];
    }
    return accumulator;
  }, {});
}
export function QueryString(_QueryString, queryStringParam1) {
  var queryStringValue1 = document.createElement("a");
  queryStringValue1.href = queryStringParam1;
  var queryStringValue2 = queryStringValue1.search
      .slice(1)
      .split("&")
      .reduce(function (accumulator, current) {
        var __QueryString = current.split("="),
          queryStringValue18 = __QueryString[0],
          queryStringValue19 = __QueryString[1];
        return (
          (accumulator[queryStringValue18] =
            gracefulDecodeURIComponent(queryStringValue19)),
          accumulator
        );
      }, {}),
    queryStringValue3 = [],
    queryStringValue4 = queryStringValue2.ajs_uid,
    queryStringValue5 = queryStringValue2.ajs_event,
    queryStringValue6 = queryStringValue2.ajs_aid,
    queryStringValue7 = helpersI(_QueryString.options.useQueryString)
      ? _QueryString.options.useQueryString
      : {},
    queryStringValue8 = queryStringValue7.aid,
    queryStringValue9 =
      queryStringValue8 === undefined ? /.+/ : queryStringValue8,
    queryStringValue10 = queryStringValue7.uid,
    queryStringValue11 =
      queryStringValue10 === undefined ? /.+/ : queryStringValue10;
  if (queryStringValue6) {
    var queryStringValue12 = Array.isArray(queryStringValue2.ajs_aid)
      ? queryStringValue2.ajs_aid[0]
      : queryStringValue2.ajs_aid;
    queryStringValue9.test(queryStringValue12) &&
      _QueryString.setAnonymousId(queryStringValue12);
  }
  if (queryStringValue4) {
    var queryStringValue13 = Array.isArray(queryStringValue2.ajs_uid)
      ? queryStringValue2.ajs_uid[0]
      : queryStringValue2.ajs_uid;
    if (queryStringValue11.test(queryStringValue13)) {
      var queryStringValue14 = queryStringHelper1(
        "ajs_trait_",
        queryStringValue2,
      );
      queryStringValue3.push(
        _QueryString.identify(queryStringValue13, queryStringValue14),
      );
    }
  }
  if (queryStringValue5) {
    var queryStringValue15 = Array.isArray(queryStringValue2.ajs_event)
        ? queryStringValue2.ajs_event[0]
        : queryStringValue2.ajs_event,
      queryStringValue16 = queryStringHelper1("ajs_prop_", queryStringValue2);
    queryStringValue3.push(
      _QueryString.track(queryStringValue15, queryStringValue16),
    );
  }
  return Promise.all(queryStringValue3);
}
