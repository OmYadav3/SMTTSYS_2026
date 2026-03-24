/*----------- FORMS IMPORTS -------*/
import TransactionForm from "../components/forms/transactionForms/TransactionForm";
import ETCForm from "../components/forms/transactionForms/ETCForm";
import UPIForm from "../components/forms/transactionForms/UPIForm";
import ANPRForm from "../components/forms/transactionForms/ANPRForm";
import TransactionPerformanceForm from "../components/forms/transactionForms/TransactionPerformanceForm";
import AVCClassForm from "../components/forms/transactionForms/AVCClassForm";
import AVCAccuracyForm from "../components/forms/transactionForms/AVCAccuracyForm";
import ExemptionForm from "../components/forms/transactionForms/ExemptionForm";

/*----------- TABLES IMPORTS -------*/
import TransactionTable from "../components/tables/transactionTables/TransactionTable";
import ETCTable from "../components/tables/transactionTables/ETCTable";
import UPITable from "../components/tables/transactionTables/UPITable";
import ANPRTable from "../components/tables/transactionTables/ANPRTable";
import Table from "../components/tables/transactionTables/performanceTable/Table";
import AVCClassTable from "../components/tables/transactionTables/AVCClassTable";
import AVCAccuracyTable from "../components/tables/transactionTables/AVCAccuracyTable";

export const REPORT_CONFIG = {
  Toll_Transaction_Details_Report: {
    form: TransactionForm,
    table: TransactionTable,
  },
  ETC_Bank_Transaction_Report: {
    form: ETCForm,
    table: ETCTable,
  },
  UPI_Transaction_Report: {
    form: UPIForm,
    table: UPITable,
  },
  TC_ANPR_Performance_Report: {
    form: ANPRForm,
    table: ANPRTable,
  },
  Transaction_Performance_Report: {
    form: TransactionPerformanceForm,
    table: Table,
  },
  AVC_Class_Accuracy_Report: {
    form: AVCClassForm,
    table: AVCClassTable,
  },
  AVC_Lanewise_Accuracy_Report: {
    form: AVCAccuracyForm,
    table: AVCAccuracyTable,
  },
  Exemption_Details_Report: {
    form: ExemptionForm,
    table: TransactionTable,
  },
};
