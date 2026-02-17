
import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { BUTTON, DROPDOWN_FIELD, INPUT_FIELD } from "../utils/constant";
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
    <div className="mt-4  p-4 rounded bg-component text-amber-50/60">
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
           {
            INPUT_FIELD.slice(1, 4).map((input, index) => (
              <Input
                key={index}
                type={input.type}
                size={input.size}
                color={input.color}
                placeholder={input.placeholder}
                label={input.label}
              />
            ))
          }
         { /* DROPDOWN  */}
         {DROPDOWN_FIELD.slice(0, 5).map((dropdown, index) => (
            <Dropdown
              key={index}
              children={dropdown.label}
              size={dropdown.size}
              optionList={dropdown.optionList}
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
}

export default SummaryReport