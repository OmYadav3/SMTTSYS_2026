import React, { useState } from "react";
import Button from "../../../components/ui/Button";
import { OPTIONS_LIST } from "../../../utils/constant";
import Dropdown from "../../../components/ui/Dropdown";

import DateTime from "@/components/ui/DateTime";
import { useDispatch, useSelector } from "react-redux";
import { fetchReports } from "../reportThunk";

import TransactionReportForm from "../components/forms/TransactionReportForm";
import ETCReportForm from "../components/forms/ETCReportForm";
import ExemptionDetailsReport from "../components/forms/ExemptionDetailsReport";
import AVCLanewiseAccuracyReport from "../components/forms/AVCLanewiseAccuracyReport";
import AVCClassAccuracyReport from "../components/forms/AVCClassAccuracyReport";
import TransactionPerformanceReport from "../components/forms/TransactionPerformanceReport";
import TCANPRPerformanceReport from "../components/forms/TCANPRPerformanceReport";
import UPITransactionReport from "../components/forms/UPITransactionReport";
import TransactionReportFormTable from "../components/tables/TransactionReportFormTable";

const TransactionReport = () => {
  const [filters, setFilters] = useState({
    reportType: "",
    fromDate: "",
    toDate: "",
    cchTxnId: "",
    laneTxnId: "",
    plateNumber: "",
    tagId: "",
    vehicleClass: "",
    laneId: "",
    laneType: "",
    paymentType: "",
    patmentSubType: "",
    paymentMode: "",
    tcId: "",
    FreeFlow: "",
    tagInHand: "",
    annualPass: "",
  });
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
          <UPITransactionReport
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "TC_ANPR_Performance_Report" && (
          <TCANPRPerformanceReport
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "Transaction_Performance_Report" && (
          <TransactionPerformanceReport
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "AVC_Class_Accuracy_Report" && (
          <AVCClassAccuracyReport
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "AVC_Lanewise_Accuracy_Report" && (
          <AVCLanewiseAccuracyReport
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
        {reportType === "Exemption_Details_Report" && (
          <ExemptionDetailsReport
            filters={filters}
            handleInputChange={handleInputChange}
          />
        )}
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
      {tableOpen && <TransactionReportFormTable data={data} loading={loading} />}
    </div>
  );
};

export default TransactionReport;
