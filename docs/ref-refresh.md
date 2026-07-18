# Refreshing Claude.app Ref

Run:

```bash
make refresh-ref
```

Equivalent direct command:

```bash
node .agents/skills/claude-app-ref-refresh/scripts/refresh-claude-ref.mjs \
  --app Claude \
  --asar /Applications/Claude.app/Contents/Resources/app.asar
```

The command replaces `./ref`, extracts the app asar, formats every extracted
JavaScript and CSS file with Prettier, and verifies JavaScript formatting.

Useful follow-ups:

```bash
make inspect
make deobf-plan
make dev
make pack-ref
```
