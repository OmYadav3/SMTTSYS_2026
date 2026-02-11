import TransactionReport from "@/components/TransactionReport";
import React from "react";
import { NavLink } from "react-router-dom";
import { REPORT_TYPES } from "../utils/constant";

const ReportsDownloads = () => {
  return (
    <div className=" bg-gray-900 h-screen p-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold p-4 ">Reports & Downloads</h1>
      </div>

      {/* Sub Navigation */}
      <div className="flex items-center gap-4 font-bold text-lg p-4 ">
        {REPORT_TYPES.map((report) => (
          <NavLink
            key={report.id}
            to={report.to}
            end={report.to}
            className={({ isActive }) =>
              isActive
                ? "text-cyan-500 underline underline-offset-20 "
                : "text-gray-300 hover:underline hover:underline-offset-20"
            }
          >
            {report.name}
          </NavLink>
        ))}
      </div>

      {/* Content And Filters*/}
      <div>
        <TransactionReport />
      </div>
    </div>
  );
};

export default ReportsDownloads;
