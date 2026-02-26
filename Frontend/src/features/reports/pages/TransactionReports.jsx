import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import {
  INPUT_FIELD,
  DROPDOWN_FIELD,
  OPTIONS_LIST,
} from "../../../utils/constant";
import Dropdown from "../../../components/ui/Dropdown";
import Calender from "../../../components/ui/Calender";
import Table from "../components/Table";

const TransactionReport = () => {
  const[reportType, setReportType] = useState()
  const [tableOpen, setTableOpen] = useState(false);

  const handleDropDown = (value) => {
    setReportType(value)
  }


  const searchTableHandler = async () => {
    if(!reportType) {
      alert("Please Select report type ")
      return ;
    }
    setTableOpen(true);
  };

  return (
    <div className="mt-4 p-4 rounded border w-full ">
      <div>
        {/* Reproting type */}
        <div className="grid grid-cols-4 items-center gap-4 p-2 text border-b border-gray-500">
          <div className="">
            <Dropdown
              children="Report Type:"
              optionList={OPTIONS_LIST}
              size={"sm"}
              value={reportType}
              onChange={handleDropDown}
            />
          </div>

          {/* From Date */}
          <Calender label={"From Date:"} />
          <Calender label={"To Date:"} />
        </div>

        {/* Filtering Table */}
        <div className="mt-4 grid grid-cols-4 gap-2 border-b pb-4 font-bold ">
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

          {/* DROPDOWN  */}
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
        <Button
          color={"outline"}
          size={"md"}
          children={"Search Transactions"}
          icon={"search"}
          onClick={searchTableHandler}
          
        />
        <Button
          color={"danger"}
          size={"md"}
          children={"Generate PDF Report"}
          icon={"File"}
          // onClick={tableHandler}
        />
        <Button
          color={"success"}
          size={"md"}
          children={"Generate Excel Report"}
          icon={"excel"}
          // onClick={tableHandler}
        />
      </div>

      {/*Table */}
      {tableOpen && <Table/>}
    </div>
  );
};

export default TransactionReport;
