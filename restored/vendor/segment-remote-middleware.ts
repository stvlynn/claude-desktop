// Restored from ref/webview/assets/remote-middleware-K7WTYjbM.js
// RemoteMiddleware chunk restored from the Codex webview bundle.
import {
  __generator as remoteMiddlewareImport1,
  __awaiter as remoteMiddlewareImport2,
} from "tslib";
import { loadScriptI, loadScriptT, loadScriptU } from "./segment-load-script";
export function remoteMiddleware(
  _remoteMiddleware,
  remoteMiddlewareParam1,
  remoteMiddlewareParam2,
) {
  return remoteMiddlewareImport2(this, undefined, undefined, function () {
    var remoteMiddlewareValue1,
      remoteMiddlewareValue2,
      remoteMiddlewareValue3,
      remoteMiddlewareValue4,
      remoteMiddlewareValue5,
      remoteMiddlewareValue6 = this;
    return remoteMiddlewareImport1(this, function (remoteMiddlewareParam3) {
      switch (remoteMiddlewareParam3.label) {
        case 0:
          return loadScriptU()
            ? [2, []]
            : ((remoteMiddlewareValue1 = loadScriptI()),
              (remoteMiddlewareValue2 =
                remoteMiddlewareParam1.enabledMiddleware ?? {}),
              (remoteMiddlewareValue3 = Object.entries(remoteMiddlewareValue2)
                .filter(function (item) {
                  return (item[0], item[1]);
                })
                .map(function (item) {
                  return item[0];
                })),
              (remoteMiddlewareValue4 = remoteMiddlewareValue3.map(
                function (item) {
                  return remoteMiddlewareImport2(
                    remoteMiddlewareValue6,
                    undefined,
                    undefined,
                    function () {
                      var remoteMiddlewareValue7,
                        remoteMiddlewareValue8,
                        remoteMiddlewareValue9,
                        remoteMiddlewareValue10;
                      return remoteMiddlewareImport1(
                        this,
                        function (remoteMiddlewareParam4) {
                          switch (remoteMiddlewareParam4.label) {
                            case 0:
                              remoteMiddlewareValue7 = item.replace(
                                "@segment/",
                                "",
                              );
                              remoteMiddlewareValue8 = remoteMiddlewareValue7;
                              remoteMiddlewareParam2 &&
                                (remoteMiddlewareValue8 = btoa(
                                  remoteMiddlewareValue7,
                                ).replace(/=/g, ""));
                              remoteMiddlewareValue9 = `${remoteMiddlewareValue1}/middleware/${remoteMiddlewareValue8}/latest/${remoteMiddlewareValue8}.js.gz`;
                              remoteMiddlewareParam4.label = 1;
                            case 1:
                              return (
                                remoteMiddlewareParam4.trys.push([1, 3, , 4]),
                                [4, loadScriptT(remoteMiddlewareValue9)]
                              );
                            case 2:
                              return (
                                remoteMiddlewareParam4.sent(),
                                [
                                  2,
                                  window[`${remoteMiddlewareValue7}Middleware`],
                                ]
                              );
                            case 3:
                              return (
                                (remoteMiddlewareValue10 =
                                  remoteMiddlewareParam4.sent()),
                                _remoteMiddleware.log(
                                  "error",
                                  remoteMiddlewareValue10,
                                ),
                                _remoteMiddleware.stats.increment(
                                  "failed_remote_middleware",
                                ),
                                [3, 4]
                              );
                            case 4:
                              return [2];
                          }
                        },
                      );
                    },
                  );
                },
              )),
              [4, Promise.all(remoteMiddlewareValue4)]);
        case 1:
          return (
            (remoteMiddlewareValue5 = remoteMiddlewareParam3.sent()),
            (remoteMiddlewareValue5 = remoteMiddlewareValue5.filter(Boolean)),
            [2, remoteMiddlewareValue5]
          );
      }
    });
  });
}
