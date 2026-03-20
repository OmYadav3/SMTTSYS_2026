#Backend

```
src
│
├── controllers
│   report.controller.js
│
├── services
│   report.service.js
│
├── repositories
│   report.repository.js
│
├── routes
│   report.routes.js
│
├── config
│   db.js
│
└── utils
    cursor.util.js
``` 

## PENDING

    /* ------ BASED ON REPORT TYPE QUERY ---*/

      // TODO: CHANGE QUERIES ACCORDING TO REPORT_TYPE AND TABLE_NAME

      // switch (reportType) {
      //    case "Toll_Transaction_Details_Report":
      //       query = `
      //     SELECT TOP (@limit)
      //        PLAZA_CODE,
      //        CCH_TRANS_ID,
      //        LANE_TRANS_ID,
      //        TAG,
      //        VEH_PLATE,
      //        LANE_ID,
      //        LANE_TYPE,
      //        DIRECTION,
      //        VEH_CLASS,
      //        AVC_CLASS,
      //        ENCODED_DATE
      //     FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
      //     WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
      //     `;
      //       break;

      //    case "ETC_Bank_Transaction_Report":
      //       query = `
      //     SELECT TOP (@limit)
      //        CCH_TRANS_ID,
      //        LANE_TRANS_ID,
      //        TAG,
      //        VEH_PLATE,
      //        LANE_ID,
      //        VEH_CLASS,
      //        AVC_CLASS,
      //        ENCODED_DATE
      //     FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
      //     WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
      //     `;
      //       break;

      //    case "UPI_Transaction_Report":
      //       query = `
      //     SELECT TOP (@limit)
      //        REQUEST_ID,
      //        PLATE_NUMBER,
      //        VPA,
      //        TERMINAL_ID,
      //        QR_TXN_ID,
      //        TIMESTAMP,
      //        STATUS
      //     FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
      //     WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
      //     `;
      //       break;

      //    case "TC_ANPR_Performance_Report":
      //       query = `
      //     SELECT TOP (@limit)
      //        PLAZA_CODE,
      //        CCH_TRANS_ID,
      //        LANE_TRANS_ID,
      //        TAG,
      //        VEH_PLATE,
      //        LANE_ID,
      //        DIRECTION,
      //        VEH_CLASS,
      //        AVC_CLASS,
      //        ENCODED_DATE
      //     FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
      //     WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
      //     `;
      //       break;

      //    case "Transaction_Performance_Report":
      //       query = `
      //     SELECT TOP (@limit)
      //        PLAZA_CODE,
      //        CCH_TRANS_ID,
      //        LANE_TRANS_ID,
      //        TAG,
      //        VEH_PLATE,
      //        LANE_ID,
      //        DIRECTION,
      //        VEH_CLASS,
      //        AVC_CLASS,
      //        ENCODED_DATE
      //     FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
      //     WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
      //     `;
      //       break;

      //    case "AVC_Class_Accuracy_Report":
      //       query = `
      //     SELECT TOP (@limit)
      //        PLAZA_CODE,
      //        CCH_TRANS_ID,
      //        LANE_TRANS_ID,
      //        TAG,
      //        VEH_PLATE,
      //        LANE_ID,
      //        DIRECTION,
      //        VEH_CLASS,
      //        AVC_CLASS,
      //        ENCODED_DATE
      //     FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
      //     WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
      //     `;
      //       break;

      //    case "AVC_Lanewise_Accuracy_Report":
      //       query = `
      //     SELECT TOP (@limit)
      //        PLAZA_CODE,
      //        CCH_TRANS_ID,
      //        LANE_TRANS_ID,
      //        TAG,
      //        VEH_PLATE,
      //        LANE_ID,
      //        DIRECTION,
      //        VEH_CLASS,
      //        AVC_CLASS,
      //        ENCODED_DATE
      //     FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
      //     WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
      //     `;
      //       break;

      //    case "Exemption_Details_Report":
      //       query = `
      //     SELECT TOP (@limit)
      //        PLAZA_CODE,
      //        CCH_TRANS_ID,
      //        LANE_TRANS_ID,
      //        TAG,
      //        VEH_PLATE,
      //        LANE_ID,
      //        DIRECTION,
      //        VEH_CLASS,
      //        AVC_CLASS,
      //        ENCODED_DATE
      //     FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
      //     WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
      //     `;
      //       break;

      //    default:
      //       throw new Error("Invalid Report Type");
      // }