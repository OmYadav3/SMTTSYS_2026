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
import ETCReportFormTable from "../components/tables/ETCReportFormTable";
import UPITransactionReportFormTable from "../components/tables/UPITransactionReportFormTable";
import TCANPRPerformanceReportFormTable from "../components/tables/TCANPRPerformanceReportFormTable";
import Table from "../components/tables/transactionPerformanceReportTables/Table";
import AVCClassAccuracyReportformTable from "../components/tables/AVCClassAccuracyReportformTable";
import AVCLanewiseAccuracyReportFormTable from "../components/tables/AVCLanewiseAccuracyReportFormTable";

export const REPORT_CONFIG = {
  Toll_Transaction_Details_Report: {
    form: TransactionReportForm,
    table: TransactionReportFormTable,
  },
  ETC_Bank_Transaction_Report: {
    form: ETCReportForm,
    table: ETCReportFormTable,
  },
  UPI_Transaction_Report: {
    form: UPITransactionReportForm,
    table: UPITransactionReportFormTable,
  },
  TC_ANPR_Performance_Report: {
    form: TCANPRPerformanceReportForm,
    table: TCANPRPerformanceReportFormTable,
  },
  Transaction_Performance_Report: {
    form: TransactionPerformanceReportForm,
    table: Table,
  },
  AVC_Class_Accuracy_Report: {
    form: AVCClassAccuracyReportForm,
    table: AVCClassAccuracyReportformTable,
  },
  AVC_Lanewise_Accuracy_Report: {
    form: AVCLanewiseAccuracyReportForm,
    table: AVCLanewiseAccuracyReportFormTable,
  },
  Exemption_Details_Report: {
    form: ExemptionDetailsReportForm,
    table: TransactionReportFormTable,
  },
};
