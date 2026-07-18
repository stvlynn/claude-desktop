// Restored from ref/.vite/build/main-Cfnoc8EH.js
// Local plugin to bundled plugin migration constants.
//
// These marketplace identity constants already live in the domain layer;
// this infrastructure module re-exports them so migration helpers can import
// from a co-located constants boundary.

export {
  BROWSER_BUNDLED_PLUGIN_NAME,
  BROWSER_USE_LOCAL_PLUGIN_NAME,
  COMPUTER_USE_APP_NAME,
  COMPUTER_USE_PLUGIN_NAME,
  DEFAULT_BUNDLED_MARKETPLACE_NAME,
  PREVIOUS_NOTIFY_ARG,
} from "../../domain/plugin-marketplace-constants";
