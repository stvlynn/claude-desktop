// @ts-nocheck
// Restored from ref/webview/assets/pdf-preview-panel-KZgIg0w6.js
// PDF.js annotation link service adapter used by the PDF annotation layer.
import React from "react";
import {
  isPdfObjectReference,
  type PdfAnnotationDocument,
  type PdfAnnotationLinkNavigation,
  type PdfAnnotationPage,
  type PdfDestination,
  type PdfObjectReference,
} from "./pdf-annotation-types";

export class PdfAnnotationLinkService {
  readonly isInPresentationMode: boolean;
  private externalLinksEnabled = true;
  private readonly linkNavigation?: PdfAnnotationLinkNavigation | null;
  private readonly pageSelector: string;
  private readonly pdfDocument: PdfAnnotationDocument;
  private readonly scrollRootRef: React.MutableRefObject<HTMLElement | null>;

  constructor({
    linkNavigation,
    pageSelector,
    pdfDocument,
    scrollRootRef,
  }: {
    linkNavigation?: PdfAnnotationLinkNavigation | null;
    pageSelector: string;
    pdfDocument: PdfAnnotationDocument;
    scrollRootRef: React.MutableRefObject<HTMLElement | null>;
  }) {
    this.isInPresentationMode = linkNavigation != null;
    this.linkNavigation = linkNavigation;
    this.pageSelector = pageSelector;
    this.pdfDocument = pdfDocument;
    this.scrollRootRef = scrollRootRef;
  }

  get pagesCount(): number {
    return this.pdfDocument.numPages;
  }

  set page(pageNumber: number) {
    this.scrollToPage(pageNumber);
  }

  get page(): number {
    return 1;
  }

  set rotation(_rotation: number) {}

  get rotation(): number {
    return 0;
  }

  set externalLinkEnabled(enabled: boolean) {
    this.externalLinksEnabled = enabled;
  }

  get externalLinkEnabled(): boolean {
    return this.externalLinksEnabled;
  }

  async goToDestination(destination: string | PdfDestination): Promise<void> {
    const resolvedDestination =
      typeof destination === "string"
        ? await this.pdfDocument.getDestination(destination)
        : destination;
    const pageNumber =
      resolvedDestination == null
        ? null
        : await this.getDestinationPageNumber(resolvedDestination);

    if (pageNumber != null) this.scrollToPage(pageNumber);
  }

  goToPage(pageNumber: number | string): void {
    const parsedPageNumber = Number(pageNumber);
    if (Number.isInteger(parsedPageNumber)) {
      this.scrollToPage(parsedPageNumber);
    }
  }

  goToXY(pageNumber: number): void {
    this.scrollToPage(pageNumber);
  }

  addLinkAttributes(linkElement: HTMLAnchorElement, url?: string | null): void {
    if (!url || !this.externalLinksEnabled) {
      linkElement.href = "";
      linkElement.onclick = null;
      return;
    }

    linkElement.href = url;
    linkElement.title = url;
    linkElement.target = "_blank";
    linkElement.rel = "noopener noreferrer nofollow";
    if (this.linkNavigation?.onExternalLink == null) {
      linkElement.onclick = null;
      return;
    }

    linkElement.onclick = (event) => {
      event.preventDefault();
      event.stopPropagation();
      this.linkNavigation?.onExternalLink?.(url, event);
    };
  }

  getDestinationHash(destination: string): string {
    return typeof destination === "string" && destination.length > 0
      ? this.getAnchorUrl(`#${window.encodeURIComponent(destination)}`)
      : this.getAnchorUrl("");
  }

  getAnchorUrl(anchor: string): string {
    return typeof anchor === "string" ? anchor : "";
  }

  setHash(_hash: string): void {}

  executeNamedAction(_action: string): void {}

  executeSetOCGState(_state: unknown): void {}

  async getDestinationPageNumber(
    destination: PdfDestination,
  ): Promise<number | null> {
    const firstDestinationItem = destination[0];
    if (
      typeof firstDestinationItem === "number" &&
      Number.isInteger(firstDestinationItem)
    ) {
      return firstDestinationItem + 1;
    }
    if (!isPdfObjectReference(firstDestinationItem)) return null;

    const cachedPageNumber =
      this.pdfDocument.cachedPageNumber(firstDestinationItem);
    if (cachedPageNumber != null) return cachedPageNumber;

    try {
      return (await this.pdfDocument.getPageIndex(firstDestinationItem)) + 1;
    } catch {
      return null;
    }
  }

  scrollToPage(pageNumber: number): void {
    if (pageNumber < 1 || pageNumber > this.pdfDocument.numPages) return;

    if (this.linkNavigation?.onPageChange != null) {
      this.linkNavigation.onPageChange(pageNumber);
      return;
    }

    const pageElement =
      this.scrollRootRef.current?.querySelector(
        `${this.pageSelector}[data-page-number="${pageNumber}"]`,
      ) ?? null;
    pageElement?.scrollIntoView({ block: "start", inline: "nearest" });
  }
}
