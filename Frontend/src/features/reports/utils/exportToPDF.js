import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportToPDF = (
  data,
  fileName = "report.pdf",
  filters = {}
) => {
  if (!Array.isArray(data) || data.length === 0) {
    alert("No Data to Export");
    return;
  }

  const doc = new jsPDF("landscape"); // 👈 IMPORTANT (wide table)

  // ================= HEADER =================

  // Title
  doc.setFontSize(14);
  doc.text("Toll Transaction Detail Report", 14, 15);

  doc.setFontSize(8);

  // Left side info
  doc.text(`Plaza Name: ${filters.plaza || " "}`, 14, 22);
  doc.text(`From Date: ${filters.fromDate || ""}`, 14, 27);
  doc.text(`To Date: ${filters.toDate || ""}`, 14, 32);

  // Right side info
  doc.text(`Lane No: ${filters.lane || "ALL"}`, 220, 22);
  doc.text(`Lane Type: ${filters.laneType || "ALL"}`, 220, 27);
  doc.text(
    `Generated At: ${new Date().toLocaleString()}`,
    220,
    32
  );

  // Line separator
  doc.line(14, 36, 280, 36);

  // ================= TABLE =================

  const keys = Object.keys(data[0]);

  const columns = keys.map(k => k.replace(/_/g, " "));

  const rows = data.map(item =>
    keys.map(k => item[k] ?? "")
  );

  autoTable(doc, {
    startY: 40,
    head: [columns],
    body: rows,

    styles: {
      fontSize: 6,
      cellPadding: 2,
    },

    headStyles: {
      fillColor: [41, 128, 185], // blue header
      textColor: 255,
    },

    theme: "grid",

    // Auto wrap long text
    columnStyles: {
      0: { cellWidth: "auto" },
    },
  });

  // ================= SAVE =================
  doc.save(fileName);
};