import { jsPDF } from "jspdf";
import autoTable, { type RowInput } from "jspdf-autotable";

export type PdfTableColumn = {
  header: string;
  dataKey: string;
};

export type PdfTableExportOptions = {
  title: string;
  subtitle?: string;
  columns: PdfTableColumn[];
  rows: RowInput[];
};

export function createTablePdf({
  title,
  subtitle,
  columns,
  rows,
}: PdfTableExportOptions) {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "pt",
    format: "a4",
  });

  doc.setFontSize(16);
  doc.text(title, 40, 40);

  if (subtitle) {
    doc.setFontSize(10);
    doc.text(subtitle, 40, 60);
  }

  autoTable(doc, {
    startY: subtitle ? 80 : 65,
    columns,
    body: rows,
    styles: {
      fontSize: 8,
      cellPadding: 5,
    },
    headStyles: {
      fontStyle: "bold",
    },
  });

  return doc;
}

export function downloadPdf(filename: string, doc: jsPDF) {
  doc.save(filename);
}

export function getPdfArrayBuffer(doc: jsPDF) {
  return doc.output("arraybuffer");
}