
import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { BUTTON } from "../utils/constant";
import Dropdown from "./ui/Dropdown";

const SummaryReport = () => {
  const OPTIONS_LIST = [
    { value: "transaction", label: "Toll Transaction Details Report" },
    { value: "etc", label: "ETC Bank Transaction Report" },
    { value: "upi", label: "UPI Transaction Report" },
    { value: "tc-anpr", label: "TC-ANPR Performance Report" },
    {
      value: "transaction-performance",
      label: "Transaction Performance Report",
    },
    { value: "avc-class-accuracy", label: "AVC Class Accuracy Report" },
    { value: "avc-lanewise-accuracy", label: "AVC Lanewise Accuracy Report" },
    { value: "exemption-details", label: "Exemption Details Report" },
  ];
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
            <Dropdown children="Report Type:" optionList={OPTIONS_LIST} />
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
          <Input
            type="text"
            size="sm"
            color="gray-600"
            placeholder="Enter CCH Txn ID"
            label="CCH Txn ID:"
          />
          <Dropdown
            children="Vehicle Class:"
            size="sm"
            optionList={[
              { value: "V1", label: "V1" },
              { value: "V2", label: "V2" },
              { value: "V3", label: "V3" },
            ]}
          />
          <Dropdown
            children="Lane ID:"
            size="sm"
            optionList={[
              { value: "lane1", label: " lane 1" },
              { value: "lane2", label: " lane 2" },
              { value: "lane3", label: " lane 3" },
            ]}
          />
          <Input
            type="text"
            size="sm"
            color="gray-600"
            placeholder="Vehicle Registration Number"
            label="Plate Number:"
          />
          <Input
            type="text"
            size="sm"
            color="gray-600"
            placeholder="Enter Lane Txn ID"
            label="Lane Txn ID:"
          />
          <Dropdown
            children="Lane Type:"
            size="sm"
            optionList={[
              { value: "lane1", label: " EN LHS" },
              { value: "lane3", label: " EN RHS" },
              { value: "lane2", label: " EX LHS" },
              { value: "lane4", label: " EX RHS" },
            ]}
          />
          <Dropdown
            children="Payment Type:"
            size="sm"
            optionList={[
              { value: "FastTag", label: "FastTag" },
              { value: "Cash", label: "Cash" },
              { value: "UPI", label: "UPI" },
            ]}
          />
         
          <Input
            type="text"
            size="sm"
            color="gray-600"
            placeholder="Enter Tag ID"
            label="TAG ID:"
          />
          <Dropdown
            children="TC ID:"
            size="sm"
            optionList={[
              { value: "FastTag", label: "FastTag" },
              { value: "Cash", label: "Cash" },
              { value: "UPI", label: "UPI" },
            ]}
          />
         
          <Dropdown
            children="Annual Pass:"
            size="sm"
            optionList={[
              { value: "FastTag", label: "FastTag" },
              { value: "Cash", label: "Cash" },
              { value: "UPI", label: "UPI" },
            ]}
          />
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
}

export default SummaryReport