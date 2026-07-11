// @ts-nocheck
// Restored from ref/webview/assets/pdf-preview-panel-KZgIg0w6.js
// Shared types and guards for the PDF annotation layer.
import type { PdfDocumentProxyLike, PdfPageProxyLike } from "./pdf-document-loader";

export interface PdfObjectReference {
  gen: number;
  num: number;
}

export type PdfDestination = readonly unknown[];

export interface PdfAnnotationLinkNavigation {
  onExternalLink?: (url: string, event: MouseEvent) => void;
  onPageChange?: (pageNumber: number) => void;
}

export interface PdfAnnotationDocument extends PdfDocumentProxyLike {
  cachedPageNumber(reference: PdfObjectReference): number | null | undefined;
  getDestination(destinationName: string): Promise<PdfDestination | null>;
  getPageIndex(reference: PdfObjectReference): Promise<number>;
}

export interface PdfAnnotationPage extends PdfPageProxyLike {
  getAnnotations(): Promise<unknown[]>;
}

export function isPdfObjectReference(
  value: unknown,
): value is PdfObjectReference {
  return (
    typeof value === "object" &&
    value != null &&
    "num" in value &&
    typeof value.num === "number" &&
    "gen" in value &&
    typeof value.gen === "number"
  );
}
