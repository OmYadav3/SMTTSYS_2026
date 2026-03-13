import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import Input from "../../../components/ui/Input";
import {
  INPUT_FIELD,
  DROPDOWN_FIELD,
  OPTIONS_LIST,
} from "../../../utils/constant";
import Dropdown from "../../../components/ui/Dropdown";
import Table from "../components/Table";

import DateTime from "@/components/ui/DateTime";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../reportThunk";

const TransactionReport = () => {
  const [filters, setFilters] = useState({
    reportType: "",
    fromDate: "",
    toDate: "",
    laneId: "",
    plateNumber: "",
    tagId: "",
    cchTxnId: "",
    laneTxnId: "",
  });

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.reports);

  const [tableOpen, setTableOpen] = useState(false);

  const handleInputChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDropDown = (value) => {
    handleInputChange("reportType", value);
  };

  const searchTableHandler = async () => {
    if (!filters.reportType || !filters.fromDate || !filters.toDate) {
      alert("Report Type, From Date, To Date are required");
      return;
    }

    dispatch(fetchReports(filters));
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
              value={filters.reportType}
              onChange={handleDropDown}
            />
          </div>

          {/* From Date */}
          <DateTime
            label={"From Date"}
            value={filters.fromDate}
            onChange={(value) => handleInputChange("fromDate", value)}
            />
          <DateTime
            label={"From Date"}
            value={filters.toDate}
            onChange={(value) => handleInputChange("toDate", value)}
            />
{/* 
          <DateTime label={"From Date:"} />
          <DateTime label={"To Date:"} /> */}
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
              value={filters[input.name]}
              onChange={(e) => handleInputChange(input.name, e.target.value)}
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
      {tableOpen && <Table data={data} loading={loading} />}
    </div>
  );
};

export default TransactionReport;
