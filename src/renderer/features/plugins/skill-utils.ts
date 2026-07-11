// Restored from ref/webview/assets/plugin-detail-page-B_JVFW0l.js
// @ts-nocheck
// Skill utility helpers.

export function getSkillDisplayName(skill: { name?: string | null }): string {
  return skill.name ?? "";
}

export function formatSkillMention(skill: { name: string; path: string }): string {
  return `@${skill.name}`;
}
// Added to satisfy relative import checks.
export const findSkillByName = undefined as never;
