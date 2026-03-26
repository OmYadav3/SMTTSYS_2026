import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const exportToExcel = (data, fileName="report.xlsx") => {
    if (!data || data.length === 0) {
        alert("No Data to Export")
        return;
    }

    // convert JSON to worksheet
    const worksheet = XLSX.utils.json_to_sheet(data);

    // create workbook
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Report");

    // Generate - Buffer
    const excelBuffer = XLSX.write(workbook, {
        bookType:"xlsx",
        type:"array",
    });

    // Save File
    const blob = new Blob([excelBuffer], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    });

    saveAs(blob, fileName)
}