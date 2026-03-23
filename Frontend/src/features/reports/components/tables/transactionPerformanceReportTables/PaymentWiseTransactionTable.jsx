import React from "react";
import { useSelector } from "react-redux";

export default function PaymentWiseTransactionTable() {

  const {
    data: reportsData,
    loading,
  } = useSelector((state) => state.reports);

  console.log(reportsData, "TABLE COMPONENT");


  /*------------------ Column Config ------------------------*/
  const columns = [
    { key: "paymentType", label: "Payment Type" },
    { key: "transactionCount", label: "transactionCount" },
    { key: "avgTime", label: "AVG TIME (sec / vehicle)" },
  ];

  /*------------------ loading ------------------------*/

  if (loading) {
    return (
      <div className="p-10 text-center text-xl font-semibold">
        Loading Data...
      </div>
    );
  }

  return (
    <>
      <div className="overflow-auto rounded-xl border">

        {/*--------------- TABLE SETUP------------------- */}

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
            {reportsData?.length > 0 ? (
              reportsData.map((row, rowIndex) => (
                <tr key={row.id || rowIndex} className="hover:text-gray-100 ">
                  {columns.map((col) => (
                    <td
                      key={col.key}
                      className="p-2 text-center border-t hover:scale-x-103"
                    >
                      {col.render
                        ? col.render(row[col.key], row)
                        : (row[col.key] ?? "-")}
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
    </>
  );
}


