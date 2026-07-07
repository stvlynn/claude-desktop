# Main Process Restore

DDD target for Claude Desktop main-process code.

- `domain/` contains business rules and domain models.
- `application/` contains use cases.
- `infrastructure/` contains Electron, native, filesystem, network, and OS
  adapters.
- `interfaces/` contains IPC and preload contracts.

Current source frontier:

- `ref/.vite/build/index.pre.js`
- `ref/.vite/build/index.js`
