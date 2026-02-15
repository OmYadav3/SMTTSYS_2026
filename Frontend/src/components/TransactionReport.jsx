import React from "react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import { INPUT_FIELD, BUTTON, DROPDOWN_FIELD, OPTIONS_LIST } from "../utils/constant";
import Dropdown from "./ui/Dropdown";
import DateAndTime from "./ui/DateAndTime";

const TransactionReport = () => {

  const handleClick = () => {
    // Logic to generate the report based on selected filters
    alert("Report generated!");
  };

  return (
    <div className="mt-4 p-4 rounded bg-component">
      <div>
        {/* Reproting type */}
        <div className="grid grid-cols-4 items-center gap-4 p-4 text-lg border-b border-gray-500">
          <div className="">
            <Dropdown 
            children="Report Type:" 
            optionList={OPTIONS_LIST}
            size={'sm'} />
          </div>
          
          {/* From Date */}
          <DateAndTime label={'From Date:'}/>
          <DateAndTime label={'To Date:'}/>
        </div>

        {/* Filtering Table */}
        <div className="mt-4 grid grid-cols-4 gap-4 border-b pb-4 border-gray-500">
          {
            INPUT_FIELD.map((input, index) => (
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
         {DROPDOWN_FIELD.map((dropdown, index) => (
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
};

export default TransactionReport;
