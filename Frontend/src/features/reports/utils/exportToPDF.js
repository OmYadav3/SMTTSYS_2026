import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export const exportToPDF = (data, fileName = "report.pdf") => {
  if (!Array.isArray(data) || data.length === 0) {
    alert("No Data to Export");
    return;
  }

  const doc = new jsPDF();

  // Get column headers
  const columns = Object.keys(data[0]);

  // ✅ FIX 1: return inside map
  const rows = data.map((item) =>
    columns.map(col => item[col] ?? "")
  );

  // ✅ FIX 2: no extra []
  autoTable(doc, {
    head: [columns],
    body: rows,
  });

  doc.save(fileName);
};