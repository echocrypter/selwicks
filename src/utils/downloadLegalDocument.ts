import type { LegalDocumentData, LegalBlock, LegalInlineContent } from '../content/legalDocument';

const pageWidth = 210;
const pageHeight = 297;
const marginX = 18;
const contentWidth = pageWidth - marginX * 2;
const contentBottom = 278;

export async function downloadLegalDocument(document: LegalDocumentData, filename: string) {
  const { jsPDF } = await import('jspdf');
  const pdf = new jsPDF({ format: 'a4', unit: 'mm' });
  let cursorY = 35;

  const drawHeader = () => {
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.setTextColor(17, 24, 39);
    pdf.text(document.organization, marginX, 15);
    pdf.setDrawColor(232, 234, 243);
    pdf.line(marginX, 22, pageWidth - marginX, 22);
  };

  const addPage = () => {
    pdf.addPage();
    drawHeader();
    cursorY = 35;
  };

  const ensureSpace = (height: number) => {
    if (cursorY + height > contentBottom) addPage();
  };

  const drawWrappedText = (
    text: string,
    fontSize: number,
    style: 'normal' | 'bold',
    indent = 0,
    gapAfter = 0,
  ) => {
    pdf.setFont('helvetica', style);
    pdf.setFontSize(fontSize);
    pdf.setTextColor(55, 65, 81);
    const lineHeight = fontSize * 0.5;
    const lines = pdf.splitTextToSize(text, contentWidth - indent);

    lines.forEach((line: string) => {
      ensureSpace(lineHeight);
      pdf.text(line, marginX + indent, cursorY);
      cursorY += lineHeight;
    });

    cursorY += gapAfter;
  };

  const textFromInline = (content: LegalInlineContent[]) =>
    content.map((part) => (typeof part === 'string' ? part : part.text)).join('');

  const renderBlock = (block: LegalBlock) => {
    if (block.type === 'subheading') {
      cursorY += 1;
      drawWrappedText(block.text, 10, 'bold', 0, 1.5);
      return;
    }

    if (block.type === 'paragraph') {
      drawWrappedText(textFromInline(block.content), 9.5, 'normal', 0, 3);
      return;
    }

    block.items.forEach((item) => {
      const itemText = textFromInline(item);
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(9.5);
      const lines = pdf.splitTextToSize(itemText, contentWidth - 7);
      const lineHeight = 9.5 * 0.5;
      lines.forEach((line: string, index: number) => {
        ensureSpace(lineHeight);
        if (index === 0) pdf.text('-', marginX + 1, cursorY);
        pdf.setTextColor(55, 65, 81);
        pdf.text(line, marginX + 6, cursorY);
        cursorY += lineHeight;
      });
      cursorY += 1.3;
    });
    cursorY += 2;
  };

  drawHeader();
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(22);
  pdf.setTextColor(17, 24, 39);
  pdf.text(document.title, marginX, cursorY);
  cursorY += 10;

  drawWrappedText(
    `${document.organization} · Effective date: ${document.effectiveDate} · Last updated: ${document.lastUpdated}`,
    9,
    'normal',
    0,
    6,
  );

  document.sections.forEach((section) => {
    ensureSpace(12);
    cursorY += 2;
    drawWrappedText(section.title, 13, 'bold', 0, 2);
    section.blocks.forEach(renderBlock);
  });

  const pageCount = pdf.getNumberOfPages();
  for (let page = 1; page <= pageCount; page += 1) {
    pdf.setPage(page);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.setTextColor(107, 114, 128);
    pdf.text(`Page ${page} of ${pageCount}`, pageWidth - marginX, pageHeight - 10, { align: 'right' });
  }

  pdf.setProperties({ title: `${document.organization} ${document.title}`, author: document.organization });
  pdf.save(filename);
}
