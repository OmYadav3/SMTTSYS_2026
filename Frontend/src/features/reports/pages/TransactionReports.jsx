import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/*------------ REUSABLE COMPONENTS------------*/
import { fetchReports } from "../reportThunk";
import { REPORT_CONFIG } from "../config/reportConfig";

/*------------ CONSTANTS------------*/
import { DROPDOWN_FIELD, INPUT_FIELD, OPTIONS_LIST } from "../reportConstants";

/*------------ REUSABLE COMPONENTS------------*/
import Button from "../../../components/ui/Button";
import Dropdown from "../../../components/ui/Dropdown";
import DateTime from "@/components/ui/DateTime";

const TransactionReport = () => {
  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.reports);
  console.log(data)

  const initialFilters = {
    reportType: "",
    fromDate: "",
    toDate: "",
    ...Object.fromEntries(DROPDOWN_FIELD.map((field) => [field.name, ""])),
    ...Object.fromEntries(INPUT_FIELD.map((field) => [field.name, ""])),
  };

  const [filters, setFilters] = useState(initialFilters);

  const isTableVisible = data?.length > 0;

  const reportType = filters.reportType;

  const SelectedForm = REPORT_CONFIG[reportType]?.form;
  const SelectedTable = REPORT_CONFIG[reportType]?.table;

  const handleInputChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSearch = () => {
    if (!filters.reportType || !filters.fromDate || !filters.toDate) {
      alert("Report Type, From Date, To Date are required");
      return;
    }

    dispatch(fetchReports(filters));
  };

  return (
    <div className="mt-4 p-4 rounded border w-full ">
      <div>
        {/*---------------- REPORT TYPES---------------- */}
        <div className="grid grid-cols-4 items-center gap-4 p-2 text border-b border-gray-500">
          <div className="">
            <Dropdown
              children="Report Type:"
              optionList={OPTIONS_LIST}
              size={"sm"}
              value={filters.reportType}
              onChange={(val) => handleInputChange("reportType", val)}
            />
          </div>

          {/*--------------- DATE COMPONENT---------------*/}
          <DateTime
            label={"From Date"}
            value={filters.fromDate}
            onChange={(value) => handleInputChange("fromDate", value)}
          />
          <DateTime
            label={"To Date"}
            value={filters.toDate}
            onChange={(value) => handleInputChange("toDate", value)}
          />
          {/* 
          <DateTime label={"From Date:"} />
          <DateTime label={"To Date:"} /> */}
        </div>

        {/*--------------- FILTER FORMS---------------*/}

        {/* Dynamic Form */}
        {SelectedForm && (
          <SelectedForm
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
      </div>

      {/*--------------- ACTION BUTTONS---------------*/}
      <div className="flex items-center gap-4 justify-center p-4">
        <Button
          color={"outline"}
          size={"md"}
          children={"Search Transactions"}
          icon={"search"}
          onClick={handleSearch}
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

      {/*--------------- DYNAMIC TABLE COMPONENT---------------*/}

      {isTableVisible && SelectedTable && (
        <SelectedTable data={data} filters={filters} loading={loading} />
      )}
    </div>
  );
};

export default TransactionReport;
