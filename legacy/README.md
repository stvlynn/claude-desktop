# Historical source archive

`legacy/src` preserves source recovered from the earlier Codex application
snapshot that is not reachable from the current Claude Vite entries and is not
part of the transitive closure of any file restored from the current
`ref/.vite` Claude package.

The files are retained for provenance and comparison. They are intentionally
outside the deliverable `src` tree so current Claude completeness checks do not
mistake historical placeholders for active implementation debt.
