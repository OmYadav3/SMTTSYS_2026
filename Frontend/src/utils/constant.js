export const USER_API_END_POINT = "http://localhost:8080/api/v1/users";
export const TRANSACTION_API_END_POINT = "http://localhost:8080/api/v1/transactions";
export const VEHICLE_API_END_POINT = "http://localhost:8080/api/v1/vehicles";
export const REPORT_API_END_POINT = "http://localhost:8080/api/v1/reports";




export const INPUT_FIELD = [
  {
    label: "CCH Txn ID",
    type: "text",
    placeholder: "Enter CCH Txn ID",
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
    label: "Plate Number",
    type: "text",
    placeholder: "Enter Plate Number",
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

];

export const DROPDOWN_FIELD = [
  {
    label: "Vehicle Class",
    size: "sm",
    color: "primary",
    optionList: [
      { value: "1-CAR/JEEP/VAN", label: "1-CAR/JEEP/VAN" },
      { value: "2-LCV/MINIBUS", label: "2-LCV/MINIBUS" },
      { value: "3-BUS2AXLES", label: "3-BUS2AXLES" },
      { value: "4-TRUCK2AXLES", label: "4-TRUCK2AXLES" },
      { value: "5-MAV3AXLES", label: "5-MAV3AXLES" },
      { value: "6-MAV4to6AXLES", label: "6-MAV4to6AXLES" },
      { value: "7-Oversized Vehicle", label: "7-Oversized Vehicle" },
    ],
  },
  {
    label: "Lane ID",
    size: "sm",
    color: "primary",
    optionList: [
      { value: "LANE01", label: " LANE01" },
      { value: "LANE02", label: " LANE02" },
      { value: "LANE03", label: " LANE03" },
      { value: "LANE04", label: " LANE04" },
      { value: "LANE05", label: " LANE05" },
      { value: "LANE06", label: " LANE06" },
      { value: "LANE07", label: " LANE07" },
      { value: "LANE08", label: " LANE08" },
      { value: "LANE09", label: " LANE09" },
      { value: "LANE10", label: " LANE10" },
      { value: "LANE11", label: " LANE11" },
      { value: "LANE12", label: " LANE12" },
    ],
  },
  {
    label: "Lane Type",
    size: "sm",
    color: "primary",
    optionList: [
      { value: "EX", label: " EN " },
      { value: "EN", label: " Ex " },
    ],
  },
  { 
    label: "Payment Type",
    size: "sm",
    color: "primary",
    optionList: [
      { value: "Violation", label: "Violation" },
      { value: "Exempt", label: "Exempt" },
      { value: "Convoy", label: "Convoy" },
      { value: "CancelPayment", label: "Cancel Payment" },
      { value: "Cash", label: "Cash" },
      { value: "FastTag", label: "FastTag" },
    ],
  },
  { 
    label: "P.SubType",
    size: "sm",
    color: "primary",
    optionList: [
      { value: "1-Single Journey", label: "1-Single Journey" },
      { value: "2-Double Fee", label: "2-DoubleFee" },
      { value: "3-Handheld", label: "3-Handheld" },
      { value: "4-CancelPayment", label: "4-Cancel Payment" },
      { value: "5-FastTag", label: "5-FastTag" },
      { value: "6-Exempt", label: "6-Exempt" },
      { value: "8-Convoy", label: "8-Convoy" },
    ],
  },
  { 
    label: "P.Mode",
    size: "sm",
    color: "primary",
    optionList: [
      { value: "CASH", label: "CASH" },
      { value: "UPI", label: "UPI" },
      { value: "DEBIT CARD", label: "DEBIT CARD" },
      { value: "CREDIT CARD", label: "CREDIT CARD" },
    ],
  },
  { 
    label: "TC ID",
    size: "sm",
    color: "primary",
    optionList: [
      { value: "SDM383", label: "SDM383" },
      { value: "SDM382", label: "SDM382" },
      { value: "SDM374", label: "SDM374" },
      { value: "SDM373", label: "SDM373" },
      { value: "SDM372", label: "SDM372" },
      { value: "SDM371", label: "SDM371" },
    ],
  },
  { 
    label: "FreeFlow",
    size: "sm",
    color: "primary",
    optionList: [
      { value: "YES", label: "YES" },
      { value: "NO", label: "NO" },
   
    ],
  },
  { 
    label: "TAG in Hand",
    size: "sm",
    color: "primary",
    optionList: [
      { value: "YES", label: "YES" },
      { value: "NO", label: "NO" },
   
    ],
  },
  { 
    label: "AnnuaL Pass",
    size: "sm",
    color: "primary",
    optionList: [
      { value: "YES", label: "YES" },
      { value: "NO", label: "NO" },
   
    ],
  },



];

export const BUTTON = [
  {
    id: "search",
    children: "Search Transactions",
    color: "outline",
    size: "sm",
    icon: "search",
    to: "/transactions",
  },
  {
    id: "pdf",
    children: "Generate PDF Report",
    color: "danger",
    size: "sm",
    icon: "File",
    to: "/pdf-report",
  },
  {
    id: "excel",
    children: "Generate Excel Report",
    color: "success",
    size: "sm",
    icon: "excel",
    to: "/excel-report",
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
  {id: "transaction", name: "Transaction Details Reports", to: ""},
  {id: "summary", name: "Summary Reports", to: "summary"},
  {id: "download", name: "Download Reports", to: "downloads"},
];

export const OPTIONS_LIST = [
  { value: "transaction", label: "Toll Transaction Details Report", size: "sm", color: "primary" },
  { value: "etc", label: "ETC Bank Transaction Report", size: "sm", color: "primary" },
  { value: "upi", label: "UPI Transaction Report", size: "sm", color: "primary" },
  { value: "tc-anpr", label: "TC-ANPR Performance Report", size: "sm", color: "primary" },
  { value: "transaction-performance", label: "Transaction Performance Report", size: "sm", color: "primary" },
  { value: "avc-class-accuracy", label: "AVC Class Accuracy Report", size: "sm", color: "primary" },
  { value: "avc-lanewise-accuracy", label: "AVC Lanewise Accuracy Report", size: "sm", color: "primary" },
  { value: "exemption-details", label: "Exemption Details Report", size: "sm", color: "primary" },
];

