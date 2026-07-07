# Runtime Export Map

Claude's main renderer runtime is bundled as
`ref/.vite/renderer/main_window/assets/main-D-xLCUWh.js`. The page shell
`MainWindowPage-LqDynGsb.js` imports short aliases from it:

| Export | Restored name             | Evidence                                                                   |
| ------ | ------------------------- | -------------------------------------------------------------------------- |
| `r`    | `React`                   | Bound to `Xu()`, the bundled React 18.3.1 CJS runtime.                     |
| `j`    | `jsxRuntime`              | Bound to `uy()`, the bundled `react-jsx-runtime.production.min.js`.        |
| `R`    | `reactDefaultInterop`     | `oy(React)`, a default-interop wrapper around React.                       |
| `_`    | `objectWithoutProperties` | TypeScript `__rest` helper, copies own properties except exclusions.       |
| `s`    | `shallowEqualObjects`     | Compares keys and values for memoized `FormattedMessage` props.            |
| `u`    | `useIntl`                 | Uses the `react-intl` context and validates that an `IntlProvider` exists. |

The public boundary lives at
`src/renderer/shared/runtime/main-window-runtime.ts`. It is intentionally
npm-backed for React and `react-intl`, not a local reimplementation of those
packages. The `j` alias is documented in the map but not exported as a public
runtime object, because restored TSX should compile to normal JSX rather than
carry bundled JSX-runtime residue forward.
