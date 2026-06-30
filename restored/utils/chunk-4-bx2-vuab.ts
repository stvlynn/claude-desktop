// Restored from ref/webview/assets/chunk-4BX2VUAB-Dutn5tdG.js
// chunk-4BX2VUAB-Dutn5tdG chunk restored from the Codex webview bundle.
export type CommonDiagramMetadata = {
  accDescr?: string;
  accTitle?: string;
  title?: string;
};
export type CommonDiagramDatabase = {
  setAccDescription?: (description: string) => void;
  setAccTitle?: (title: string) => void;
  setDiagramTitle?: (title: string) => void;
};
export function populateCommonDb(
  metadata: CommonDiagramMetadata,
  database: CommonDiagramDatabase,
): void {
  if (metadata.accDescr) database.setAccDescription?.(metadata.accDescr);
  if (metadata.accTitle) database.setAccTitle?.(metadata.accTitle);
  if (metadata.title) database.setDiagramTitle?.(metadata.title);
}

export function initChunk4BX2VUAB(): void {}
