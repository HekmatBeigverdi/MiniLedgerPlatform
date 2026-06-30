export type CsvRow = Record<string, string | number | null | undefined>;

function escapeCsvValue(value: string | number | null | undefined) {
  if (value === null || value === undefined) {
    return "";
  }

  const stringValue = String(value);

  if (
    stringValue.includes(",") ||
    stringValue.includes('"') ||
    stringValue.includes("\n")
  ) {
    return `"${stringValue.replaceAll('"', '""')}"`;
  }

  return stringValue;
}

export function convertRowsToCsv(rows: CsvRow[]) {
  if (rows.length === 0) {
    return "";
  }

  const headers = Object.keys(rows[0]);

  const headerLine = headers.map(escapeCsvValue).join(",");

  const bodyLines = rows.map((row) =>
    headers.map((header) => escapeCsvValue(row[header])).join(",")
  );

  return [headerLine, ...bodyLines].join("\n");
}

export function downloadCsv(filename: string, rows: CsvRow[]) {
  const csv = convertRowsToCsv(rows);
  const blob = new Blob([csv], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = filename;
  anchor.click();

  URL.revokeObjectURL(url);
}