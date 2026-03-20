export const DROPDOWN_FIELD = [
  {
    name: "vehicleClass",
    label: "Vehicle Class",
    size: "sm",
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
    name: "laneId",
    label: "Lane ID",
    size: "sm",
    optionList: [
      { value: "LANE01", label: "LANE01" },
      { value: "LANE02", label: "LANE02" },
      { value: "LANE03", label: "LANE03" },
      { value: "LANE04", label: "LANE04" },
      { value: "LANE05", label: "LANE05" },
      { value: "LANE06", label: "LANE06" },
      { value: "LANE07", label: "LANE07" },
      { value: "LANE08", label: "LANE08" },
      { value: "LANE09", label: "LANE09" },
      { value: "LANE10", label: "LANE10" },
      { value: "LANE11", label: "LANE11" },
      { value: "LANE12", label: "LANE12" },
    ],
  },
  {
    name: "laneType",
    label: "Lane Type",
    size: "sm",
    optionList: [
      { value: "EX", label: "EX" },
      { value: "EN", label: "EN" },
    ],
  },
  {
    name: "paymentType",
    label: "Payment Type",
    size: "sm",
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
    name: "paymentSubType",
    label: "P.SubType",
    size: "sm",
    optionList: [
      { value: "1-Single Journey", label: "1-Single Journey" },
      { value: "2-Double Fee", label: "2-Double Fee" },
      { value: "3-Handheld", label: "3-Handheld" },
      { value: "4-CancelPayment", label: "4-Cancel Payment" },
      { value: "5-FastTag", label: "5-FastTag" },
      { value: "6-Exempt", label: "6-Exempt" },
      { value: "8-Convoy", label: "8-Convoy" },
    ],
  },
  {
    name: "paymentMode",
    label: "P.Mode",
    size: "sm",
    optionList: [
      { value: "CASH", label: "CASH" },
      { value: "UPI", label: "UPI" },
      { value: "DEBIT CARD", label: "DEBIT CARD" },
      { value: "CREDIT CARD", label: "CREDIT CARD" },
    ],
  },
  {
    name: "tcId",
    label: "TC ID",
    size: "sm",
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
    name: "freeFlow",   // ✅ consistent
    label: "Free Flow",
    size: "sm",
    optionList: [
      { value: "YES", label: "YES" },
      { value: "NO", label: "NO" },
    ],
  },
  {
    name: "tagInHand",
    label: "Tag in Hand",
    size: "sm",
    optionList: [
      { value: "YES", label: "YES" },
      { value: "NO", label: "NO" },
    ],
  },
  {
    name: "annualPass",   // ✅ FIXED
    label: "Annual Pass",
    size: "sm",
    optionList: [
      { value: "YES", label: "YES" },
      { value: "NO", label: "NO" },
    ],
  },
];

export const INPUT_FIELD = [
  {
    label: "CCH Txn ID",
    name: "cchTxnId",
    type: "text",
    placeholder: "Enter CCH Txn ID",
    color: "primary",
    size: "sm",
  },
  {
    label: "LANE Txn ID",
    name: "laneTxnId",
    type: "text",
    placeholder: "LANE TXN ID",
    color: "primary",
    size: "sm",
  },
  {
    label: "Plate Number",
    name: "plateNumber",
    type: "text",
    placeholder: "Enter Plate Number",
    color: "primary",
    size: "sm",
  },

  {
    label: "Tag ID",
    name: "tagId",
    type: "text",
    placeholder: "Enter Tag ID",
    color: "primary",
    size: "sm",
  },

];