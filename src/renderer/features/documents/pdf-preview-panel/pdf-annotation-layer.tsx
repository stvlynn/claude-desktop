// @ts-nocheck
// Restored from ref/webview/assets/pdf-preview-panel-KZgIg0w6.js
// PDF.js AnnotationLayer renderer component.
import React from "react";
import { PdfAnnotationLinkService } from "./pdf-annotation-link-service";
import type {
  LoadPdfJsRuntime,
  PdfDocumentProxyLike,
  PdfPageProxyLike,
} from "./pdf-document-loader";
import type {
  PdfAnnotationDocument,
  PdfAnnotationLinkNavigation,
  PdfAnnotationPage,
} from "./pdf-annotation-types";

interface PdfJsAnnotationLayerRuntime {
  AnnotationLayer?: PdfJsAnnotationLayerConstructor;
}

interface PdfJsAnnotationLayerConstructor {
  new (
    options: PdfJsAnnotationLayerConstructorOptions,
  ): PdfJsAnnotationLayerRenderer;
}

interface PdfJsAnnotationLayerRenderer {
  render(
    options: PdfJsAnnotationLayerRenderOptions,
  ): Promise<unknown> | unknown;
}

interface PdfJsAnnotationLayerConstructorOptions {
  accessibilityManager: undefined;
  annotationCanvasMap: undefined;
  annotationEditorUIManager: undefined;
  annotationStorage: undefined;
  commentManager: undefined;
  div: HTMLDivElement;
  linkService: PdfAnnotationLinkService;
  page: PdfAnnotationPage;
  structTreeLayer: undefined;
  viewport: unknown;
}

interface PdfJsAnnotationLayerRenderOptions {
  annotations: unknown[];
  div: HTMLDivElement;
  linkService: PdfAnnotationLinkService;
  page: PdfAnnotationPage;
  renderForms: boolean;
  viewport: unknown;
}

export interface PdfAnnotationLayerProps {
  deferMs: number;
  linkNavigation?: PdfAnnotationLinkNavigation | null;
  loadPdfJs: LoadPdfJsRuntime;
  page: PdfAnnotationPage;
  pageSelector: string;
  pdfDocument: PdfAnnotationDocument;
  scrollRootRef: React.MutableRefObject<HTMLElement | null>;
}

export function PdfAnnotationLayer({
  deferMs,
  linkNavigation,
  loadPdfJs,
  page,
  pageSelector,
  pdfDocument,
  scrollRootRef,
}: PdfAnnotationLayerProps): React.ReactElement {
  const layerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const layerElement = layerRef.current;
    if (layerElement == null) return;

    layerElement.innerHTML = "";
    let didCancel = false;
    let renderTimeout: ReturnType<typeof setTimeout> | null = null;

    const renderAnnotationLayer = async (): Promise<void> => {
      const pdfjs = (await loadPdfJs()) as PdfJsAnnotationLayerRuntime;
      const annotations = await page.getAnnotations();
      if (didCancel || annotations.length === 0) return;

      const AnnotationLayer = pdfjs.AnnotationLayer;
      if (AnnotationLayer == null) {
        throw new Error("pdf.js AnnotationLayer export is unavailable");
      }

      const viewport = page.getViewport({ scale: 1 });
      const linkService = new PdfAnnotationLinkService({
        linkNavigation,
        pageSelector,
        pdfDocument,
        scrollRootRef,
      });
      const layer = new AnnotationLayer({
        accessibilityManager: undefined,
        annotationCanvasMap: undefined,
        annotationEditorUIManager: undefined,
        annotationStorage: undefined,
        commentManager: undefined,
        div: layerElement,
        linkService,
        page,
        structTreeLayer: undefined,
        viewport,
      });

      await layer.render({
        annotations,
        div: layerElement,
        linkService,
        page,
        renderForms: false,
        viewport,
      });
    };

    renderTimeout = setTimeout(() => {
      void renderAnnotationLayer();
    }, deferMs);

    return () => {
      didCancel = true;
      if (renderTimeout != null) clearTimeout(renderTimeout);
      layerElement.innerHTML = "";
    };
  }, [
    deferMs,
    linkNavigation,
    loadPdfJs,
    page,
    pageSelector,
    pdfDocument,
    scrollRootRef,
  ]);

  return <div ref={layerRef} className="annotationLayer" />;
}
