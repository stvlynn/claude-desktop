// Restored from ref/webview/assets/home-use-cases-data-hIxZSoyH.js
// Also matches ref/webview/assets/home-use-cases-data-BeTzhg1t.js.
// Manual (non-automation) home page use cases.

import { defineMessage } from "react-intl";
import type { HomeUseCaseItem } from "./use-cases-types";

export const MANUAL_HOME_USE_CASES: HomeUseCaseItem[] = [
  {
    id: "snake-game",
    promptMessage: defineMessage({
      id: "home.useCases.snakeGame.prompt",
      defaultMessage:
        "Build a classic Snake game in this repo.\n\nScope & constraints:\n- Implement ONLY the classic Snake loop: grid movement, growing snake, food spawn, score, game-over, restart.\n- Reuse existing project tooling/frameworks; do NOT add new dependencies unless truly required.\n- Keep UI minimal and consistent with the repo’s existing styles (no new design systems, no extra animations).\n\nImplementation plan:\n1) Inspect the repo to find the right place to add a small interactive game (existing pages/routes/components).\n2) Implement game state (snake positions, direction, food, score, tick timer) with deterministic, testable logic.\n3) Render: simple grid + snake + food; support keyboard controls (arrow keys/WASD) and on-screen controls if mobile is present in the repo.\n4) Add basic tests for the core game logic (movement, collisions, growth, food placement) if the repo has a test runner.\n\nDeliverables:\n- A small set of files/changes with clear names.\n- Short run instructions (how to start dev server + where to navigate).\n- A brief checklist of what to manually verify (controls, pause/restart, boundaries).",
      description: "Prompt for creating a classic snake game",
    }),
    iconName: "game-controller",
    mode: "worktree",
  },
  {
    id: "one-page-pdf",
    promptMessage: defineMessage({
      id: "home.useCases.onePagePdf.prompt",
      defaultMessage:
        "Create a one-page $pdf that summarizes this app.\n\nContent requirements (1 page total):\n- What it is: 1–2 sentence description.\n- Who it’s for: primary user/persona.\n- What it does: 5–7 crisp bullets of key features.\n- How it works: a compact architecture overview (components/services/data flow) based ONLY on repo evidence.\n- How to run: the minimal “getting started” steps.\n\nFormatting constraints:\n- Must fit on a single page (no overflow).\n- Prefer a clean, scannable layout: headings + bullets; avoid long paragraphs.\n- If the repo lacks key info, explicitly mark those items as “Not found in repo.”\n\nDeliverable:\n- Output a generated $pdf and include its filename/path.",
      description: "Prompt for creating a one-page PDF summary",
    }),
    iconName: "pdf-document",
    mode: "local",
  },
  {
    id: "create-plan",
    promptMessage: defineMessage({
      id: "home.useCases.createPlan.prompt",
      defaultMessage: "Create a plan to…",
      description: "Prompt for creating a plan before implementation",
    }),
    iconName: "pencil",
    mode: "worktree",
    initialCollaborationMode: "plan",
  },
];
