// Restored from ref/webview/assets/channel-ykMIcoPi.js
// Channel chunk restored from the Codex webview bundle.
import { invertC, invertL } from "./color-convert";
export const channel = (_channel, channelParam1) =>
  invertL.lang.round(invertC.parse(_channel)[channelParam1]);
