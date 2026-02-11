import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { INPUT_FIELD, BUTTON } from "../utils/constant";

const TransactionReport = () => {
  const handleClick = () => {
    // Logic to generate the report based on selected filters
    alert("Report generated!");
  };

  return (
    <div className="mt-4  p-4 rounded bg-gray-800 text-gray-200">
      <div>
        {/* Reproting type */}
        <div className="grid grid-cols-4 items-center gap-4 p-4  text-lg border-b border-gray-500">
          <div className="flex items-center gap-2 justify-between px-2 py-2 w-full">
            <label htmlFor="" className="">
              Report Type:{" "}
            </label>
            <select
              name="reports"
              id="report"
              className="sm:text-sm sm:px-4 p-2 border border-gray-600 bg-gray-800 text-gray-200 text-lg rounded "
            >
              <option value="transaction">
                Toll Transaction Details Report
              </option>
              <option value="">ETC Bank Transaction Report</option>
              <option value="transaction">UPI Transaction Report</option>
              <option value="transaction">TC-ANPR Performance Report</option>
              <option value="transaction">
                Transaction Performance Report
              </option>
              <option value="transaction">AVC Class Accuracy Report</option>
              <option value="transaction">AVC Lanewise Accuracy Report</option>
              <option value="transaction">Exemption Details Report</option>
            </select>
          </div>
          <div className="flex items-center gap-2 p-2 justify-between px-2 py-2 w-full ">
            <label htmlFor="" className="mr-16">
              From Date:{" "}
            </label>
            <input
              type="date"
              className="sm:text-sm sm:px-4 p-2 border border-gray-600 bg-gray-800 text-gray-200  rounded"
            />
          </div>
          <div className=" flex items-center gap-2 p-2 justify-between px-2 py-2 w-full">
            <label htmlFor="" className="mr-16">
              To Date:{" "}
            </label>
            <input
              type="date"
              className="sm:text-sm sm:px-4 p-2 border border-gray-600 bg-gray-800 text-gray-200 text-lg rounded"
            />
          </div>
        </div>

        {/* Filtering Table */}
        <div className="mt-4 grid grid-cols-4 gap-4 border-b pb-4 border-gray-500">
          {INPUT_FIELD.map((input, index) => (
            <Input
              key={index}
              type={input.type}
              size={input.size}
              color={input.color}
              placeholder={input.placeholder}
              label={input.label}
            />
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 justify-center p-4">
        {BUTTON.slice(0, 3).map((button, index) => (
          <Button
            key={index}
            to={button.to}
            color={button.color}
            size={button.size}
            children={button.children}
            icon={button.icon}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionReport;
