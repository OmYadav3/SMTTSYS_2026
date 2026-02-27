import React from "react";
import { useSelector } from "react-redux";

export default function Table() {
  const reportsData = useSelector((state) => state.reports.allReports) || [];
  console.log(reportsData)

  /* Column Config  */
  const columns = [
    { key: "PLAZA_CODE", label: "PLAZA CODE" },
    { key: "PLAZE_NAME", label: "PLAZA NAME" },
    {
      key: "image",
      label: "IMAGE",
      render: (value) => (
        <img src={value} alt="" className="h-10 w-16 object-cover mx-auto" />
      ),
    },
    { key: "CCH_TRANS_ID", label: "CCH TRANS ID" },
    { key: "LANE_TRANS_ID", label: "LANE TRANS ID" },
    { key: "TAG", label: "TAG" },
    { key: "IS_ANPR", label: "IS ANPR" },
    { key: "ANPR_PLATE", label: "ANPR PLATE" },
    { key: "LANE_ID", label: "LANE TRANS ID" },
    { key: "LANE_TYPE", label: "LANE TYPE" },
    { key: "PASSAGE_TIME", label: "PASSAGE TIME" },
    { key: "DIRECTION", label: "DIRECTION" },
    { key: "VEH_CLASS", label: "VEH CLASS" },
    { key: "AVC_CLASS", label: "AVC CLASS" },
  ];

  return (
    <div className="overflow-auto rounded-xl border">
      <table className="w-full text-sm">
        {/* ⭐ Header */}
        <thead className="bg-blue-400/60 text-white">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="p-4 border-r whitespace-nowrap">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        {/* ⭐ Body */}
        <tbody>
          {reportsData.length > 0 ? (
            reportsData.map((row, rowIndex) => (
              <tr key={row.id || rowIndex} className="hover:text-gray-100 ">
                {columns.map((col) => (
                  <td key={col.key} className="p-3 text-center border-t hover:scale-x-103">
                    {col.render
                      ? col.render(row[col.key], row)
                      : row[col.key] ?? "-"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={columns.length}
                className="p-10 text-center text-xl font-semibold"
              >
                Data Not Found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
