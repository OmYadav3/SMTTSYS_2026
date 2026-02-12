export const USER_API_END_POINT = "http://localhost:8080/api/v1/users";
export const TRANSACTION_API_END_POINT = "http://localhost:8080/api/v1/transactions";
export const VEHICLE_API_END_POINT = "http://localhost:8080/api/v1/vehicles";




export const INPUT_FIELD = [
  {
    label: "CCH Txn ID",
    type: "text",
    placeholder: "Enter CCH Txn ID",
    color: "primary",
    size: "sm",
  },
  {
    label: "Vehicle Class",
    type: "text",
    placeholder: "Enter Vehicle Class",
    color: "primary",
    size: "sm",
  },
  {
    label: "Lane ID",
    type: "text",
    placeholder: "Enter Lane ID",
    color: "primary",
    size: "sm",
  },
  {
    label: "Plate Number",
    type: "text",
    placeholder: "Enter Plate Number",
    color: "primary",
    size: "sm",
  },
  {
    label: "LANE Txn ID",
    type: "text",
    placeholder: "LANE TXN ID",
    color: "primary",
    size: "sm",
  },
  {
    label: "Lane Type",
    type: "text",
    placeholder: "Enter Lane Type",
    color: "primary",
    size: "sm",
  },
  {
    label: "Payment Type",
    type: "text",
    placeholder: "Enter Payment Type",
    color: "primary",
    size: "sm",
  },
  {
    label: "CCH Sub Type",
    type: "text",
    placeholder: "Enter CCH Sub Type",
    color: "primary",
    size: "sm",
  },
  {
    label: "P.Mode",
    type: "text",
    placeholder: "Enter P.Mode",
    color: "primary",
    size: "sm",
  },
  {
    label: "Tag ID",
    type: "text",
    placeholder: "Enter Tag ID",
    color: "primary",
    size: "sm",
  },
  {
    label: "TC ID",
    type: "text",
    placeholder: "Enter TC ID",
    color: "primary",
    size: "sm",
  },
  {
    label: "FreeFlow",
    type: "text",
    placeholder: "Enter FreeFlow",
    color: "primary",
    size: "sm",
  },
  {
    label: "Tag In Hand",
    type: "text",
    placeholder: "Enter Tag In Hand",
    color: "primary",
    size: "sm",
  },
  {
    label: "Annual Pass",
    type: "text",
    placeholder: "Enter Annual Pass",
    color: "primary",
    size: "sm",
  },
];
export const BUTTON = [
  {
    id: "search",
    children: "Search Transactions",
    color: "primary",
    size: "md",
    icon: "search",
    to: "/transactions",
  },
  {
    id: "excel",
    children: "Generate Excel Report",
    color: "danger",
    size: "md",
    icon: "excel",
    to: "/excel-report",
  },
  {
    id: "pdf",
    children: "Generate PDF Report",
    color: "success",
    size: "md",
    icon: "File",
    to: "/pdf-report",
  },
  {
    id: "reset",
    children: "Reset",
    color: "success",
    size: "md",
    icon: "delete",
  },
];
export const REPORT_TYPES = [
  {id: "transaction", name: "Transaction Details Reports", to: "/transaction-reports"},
  {id: "summary", name: "Summary Reports", to: "/summary-filtered-reports"},
  {id: "download", name: "Download Reports", to: "/downloads-filtered-reports"},
];
export const OPTIONS_LIST = [
  { value: "transaction", label: "Toll Transaction Details Report" },
  { value: "etc", label: "ETC Bank Transaction Report" },
  { value: "upi", label: "UPI Transaction Report" },
  { value: "tc-anpr", label: "TC-ANPR Performance Report" },
  { value: "transaction-performance", label: "Transaction Performance Report" },
  { value: "avc-class-accuracy", label: "AVC Class Accuracy Report" },
  { value: "avc-lanewise-accuracy", label: "AVC Lanewise Accuracy Report" },
  { value: "exemption-details", label: "Exemption Details Report" },
];

