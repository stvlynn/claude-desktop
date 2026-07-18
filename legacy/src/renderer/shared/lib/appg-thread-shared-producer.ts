// Restored from ref/webview/assets/app-initial~app-main~remote-conversation-page~plugin-detail-page~new-thread-panel-page~appg~ijdupmx5-CdYgxe-b.js
export {
  getRouteThreadId,
  normalizeBrowserTabId,
} from "../../features/app-shell/app-view-route-helpers";
export { getLocalThreadConversationIdFromRoute } from "./local-thread-route";
export {
  getScrollDistanceFromBottomPx,
  initReverseScrollUtilities,
} from "./reverse-scroll-distance";
export {
  initWindowZoomContext,
  useWindowZoom,
} from "./window-zoom-context";
export {
  KeyboardShortcutKeycap,
  initKeyboardShortcutKeycap,
} from "../ui/keyboard-shortcut-keycap";
export { ChevronIcon, initChevronDownIcon } from "../icons/chevron-icon";
export { ChevronRightIcon } from "../icons/chevron-right-icon";
export {
  CheckCircleFilledIcon,
  initCheckCircleFilledIcon,
} from "../icons/check-circle-filled-icon";
export { GitBranchIcon, initGitBranchIcon } from "../icons/git-branch-icon";
export { GithubMarkIcon, initGitHubIcon } from "../icons/github-mark-icon";
export { GlobeIcon, initGlobeIcon } from "../icons/globe-icon";
export { CheckMdIcon, initCheckmarkIcon } from "../icons/check-md-icon";
export { initPlusIcon, PlusIcon } from "../icons/plus-icon";
export { RefreshIcon, initRefreshIcon } from "../icons/refresh-icon";
export {
  SettingsGearIcon,
  initSettingsGearIcon,
} from "../icons/settings-gear-icon";
export { DropdownSearchIcon, initSearchIcon } from "../../../main/infrastructure/git-worker-review/search";
export {
  Dropdown,
  DropdownMenu,
  DropdownSeparator,
  DropdownSubmenuItem,
  initDropdownMenuPrimitives,
} from "../ui/dropdown/index";
export {
  initPopoverPrimitives,
  Popover,
  PopoverContent,
  PopoverTitle,
  PopoverTrigger,
} from "../ui/popover";
export {
  initTooltipPrimitives,
  Tooltip,
  TooltipProvider,
} from "../ui/tooltip-b/index";
export {
  DialogBody,
  DialogFooter,
  DialogHeader,
  DialogLayout,
  DialogSection,
  FieldStack,
  initAppDialog,
  initDialogLayoutComponents,
} from "../ui/dialog-layout/index";
export {
  FormattedMessage,
  initIntlRuntime,
  useIntl,
} from "../runtime/react-intl";
export { classNames, initClassNameRuntime } from "./class-names";
export {
  getErrorMessage,
  parseConfigLoadError,
} from "./config-load-error";
export { Button, initButtonComponentPrimitives } from "../ui/button";
export { initSpinnerComponent, Spinner } from "../ui/spinner";
export {
  initUseStableCallback,
  useStableCallback,
} from "./use-stable-callback";
export { scaleCssPxByWindowZoom } from "./window-zoom-scale";
