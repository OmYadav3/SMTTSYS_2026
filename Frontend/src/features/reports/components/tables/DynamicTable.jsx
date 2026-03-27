import React from "react";

export default function DynamicTable({ columns = [], data = [] }) {
  if (!data || data.length === 0) {
    return (
      <div className="p-10 text-center text-xl font-semibold">
        Data Not Found
      </div>
    );
  }

  return (
    <div className="overflow-auto rounded-xl border">
      <table className="w-full text-sm">
        {/* Header */}
        <thead className="bg-blue-400/60 text-white">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="p-4 border-r whitespace-nowrap">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* Body */}
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={row.id || rowIndex}>
              {columns.map((col) => (
                <td key={col.key} className="p-2 text-center border-t">
                  {col.render
                    ? col.render(row[col.key], row)
                    : row[col.key] ?? "-"}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}