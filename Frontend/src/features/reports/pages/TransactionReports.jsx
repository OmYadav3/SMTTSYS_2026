import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../reportThunk";
import { OPTIONS_LIST } from "../../../utils/constant";
import { DROPDOWN_FIELD, INPUT_FIELD } from "../reportConstants";

/*------------ REUSABLE COMPONENTS------------*/
import Button from "../../../components/ui/Button";
import Dropdown from "../../../components/ui/Dropdown";
import DateTime from "@/components/ui/DateTime";

/*----------- FORMS IMPORTS -------*/
import TransactionReportForm from "../components/forms/TransactionReportForm";
import ETCReportForm from "../components/forms/ETCReportForm";
import UPITransactionReportForm from "../components/forms/UPITransactionReportForm";
import TCANPRPerformanceReportForm from "../components/forms/TCANPRPerformanceReportForm";
import TransactionPerformanceReportForm from "../components/forms/TransactionPerformanceReportForm";
import AVCClassAccuracyReportForm from "../components/forms/AVCClassAccuracyReportform";
import AVCLanewiseAccuracyReportForm from "../components/forms/AVCLanewiseAccuracyReportForm";
import ExemptionDetailsReportForm from "../components/forms/ExemptionDetailsReportForm";

/*----------- TABLES IMPORTS -------*/
import TransactionReportFormTable from "../components/tables/TransactionReportFormTable";

const TransactionReport = () => {
  
  const initialFilters = {
    reportType: "",
    fromDate: "",
    toDate: "",
    ...Object.fromEntries(DROPDOWN_FIELD.map((field) => [field.name, ""])),
    ...Object.fromEntries(INPUT_FIELD.map((field) => [field.name, ""])),
  };

  const [filters, setFilters] = useState(initialFilters);

  // const [open, setOpen] = useState(false)

  const dispatch = useDispatch();
  const { data, loading } = useSelector((state) => state.reports);

  const reportType = filters.reportType;
  const [tableOpen, setTableOpen] = useState(false);

  const handleInputChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleDropDown = (value) => {
    handleInputChange("reportType", value);
    // setOpen(true)
  };

  const searchTableHandler = async () => {
    if (!filters.reportType || !filters.fromDate || !filters.toDate) {
      alert("Report Type, From Date, To Date are required");
      return;
    }

    dispatch(fetchReports(filters));
    if (reportType === "Toll_Transaction_Details_Report") {
      setTableOpen(true);
    }
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
              onChange={handleDropDown}
            />
          </div>

          {/*--------------- DATE COMPONENT---------------*/}
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

        {/*--------------- FILTER FORMS---------------*/}
        {reportType === "Toll_Transaction_Details_Report" && (
          <TransactionReportForm
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "ETC_Bank_Transaction_Report" && (
          <ETCReportForm
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "UPI_Transaction_Report" && (
          <UPITransactionReportForm
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "TC_ANPR_Performance_Report" && (
          <TCANPRPerformanceReportForm
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "Transaction_Performance_Report" && (
          <TransactionPerformanceReportForm
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "AVC_Class_Accuracy_Report" && (
          <AVCClassAccuracyReportForm
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "AVC_Lanewise_Accuracy_Report" && (
          <AVCLanewiseAccuracyReportForm
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "Exemption_Details_Report" && (
          <ExemptionDetailsReportForm
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

      {/*--------------- TABLE COMPONENT---------------*/}
      {tableOpen && (
        <TransactionReportFormTable data={data} loading={loading} />
      )}
    </div>
  );
};

export default TransactionReport;
