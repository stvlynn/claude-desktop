# Routing (react-router) — where it lives in `restored/`

The Codex webview renderer has no real URL bar, so routing is built on
**react-router's `MemoryRouter`** plus the app's own route signals. There is
**no declarative `<Routes><Route path=… element=…>` table** — routes are parsed
from a path string into a `RouteLocation` discriminated union, and pages render
off the resulting route signals. That is why "the route table" wasn't obvious in
the tree; the pieces are listed below.

## Router construction (react-router)

- **`app-shell/app-router-provider.tsx`** — `AppMemoryRouter` / `AppRouterProvider`.
  Mounts the whole UI inside `MemoryRouter` (`unstable_useTransitions: false`).
  This is what the bundle builds as `CodexApp → Xne → HM → MemoryRouter`.
- **`app-shell/codex-app.tsx`** — `CodexApp` root; renders `AppRouterProvider`
  around the shell. (Full window-region panel tree is a follow-up restore.)
- **`vendor/react-router.ts`** — bare re-export shim of `react-router`
  (`MemoryRouter`, `Routes`, `Route`, `matchPath`, `useNavigate`, `useLocation`,
  `useParams`, `matchRoutes`, …).

## Route model + parser

- **`runtime/persisted-signal/routes.ts`** — `parseRouteLocation({pathname, search,
  routeTemplate})`: the central URL→`RouteLocation` resolver. Uses `matchPath`
  against patterns `/local/:conversationId`, `/remote/:taskId`,
  `/hotkey-window/...`, `/projects`, `/`, `/extension/panel/new`, falling back to
  `routeKind: "other"`. Also `getRouteThreadLocationId` / `getRouteThreadId` /
  `getLocalConversationId`.
- **`runtime/persisted-signal/route-ids.ts`** — thread-location id encoders
  (`toLocalThreadLocationId`, `toRemoteThreadLocationId`, `normalizeConversationId`, …).
- **`runtime/persisted-signal/types.ts`** — `RouteLocation`, `routeKind` union
  (`home | new-thread-panel | local-thread | remote-thread | chatgpt-thread |
  other | …`), `ProjectRouteContext`.
- **`runtime/route-scope-provider.tsx`** — per-route React scope + lazy
  route-import status signal.

## Route-derived identity / navigation

- **`app-shell/app-view-route-helpers.ts`** — `getRouteThreadId` / browser-tab id
  from `routeKind`.
- **`app-shell/navigation-history-signals.ts`** — back/forward affordance state.
- Per-feature route modules (path build/parse + constants): `appgen/project-site-routes.ts`,
  `settings/local-environment-create-route.ts`, `settings/settings-navigation/*-route.ts`,
  `sites/routes.ts`, `conversations/*-route*.ts`, `automation/automation-route-runtime.ts`,
  `routes/login-route.tsx`, `routes/open-home-route.ts`, and more (grep `*rout*`).
- **`utils/initial-route-atom.ts`** — reads the boot route from the
  `initial-route` meta tag / `?initialRoute=` query.

Note: `utils/routing-middleware.ts` is **Statsig event routing**, unrelated to URL routing.
