import { poolPromise, sql } from "../config/db.js";

export const getReports = async (filters) => {
   try {
      const {
         fromDate,
         toDate,
         reportType,
         laneId,
         laneType,
         plateNumber,
         vehicleClass,
         tagId,
         paymentType,
         paymentSubType,
         paymentMode,
         tcId,
         cursor,
         limit,
      } = filters;

      console.log("FILTERS : ",
         fromDate,
         toDate,
         limit)

      if (!fromDate || !toDate) {
         throw new Error("Date range required");
      }

      if (!reportType) {
         throw new Error("reportType is required");
      }

      const pool = await poolPromise;

      /* ------ BASED ON REPORT TYPE QUERY ---*/

      let query = "";

      // TODO: CHANGE QUERIES ACCORDING TO REPORT_TYPE AND TABLE_NAME    

      switch (reportType) {
         case "Toll_Transaction_Details_Report":
            query = `
          SELECT TOP (@limit)
             PLAZA_CODE,
             CCH_TRANS_ID,
             LANE_TRANS_ID,
             TAG,
             VEH_PLATE,
             LANE_ID,
             DIRECTION,
             VEH_CLASS,
             AVC_CLASS,
             ENCODED_DATE
          FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
          WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
          `;
            break;

         case "ETC_Bank_Transaction_Report":
            query = `
          SELECT TOP (@limit)
             CCH_TRANS_ID,
             LANE_TRANS_ID,
             TAG,
             VEH_PLATE,
             LANE_ID,
             VEH_CLASS,
             AVC_CLASS,
             ENCODED_DATE
          FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
          WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
          `;
            break;

         case "UPI_Transaction_Report":
            query = `
          SELECT TOP (@limit)
             REQUEST_ID,
             PLATE_NUMBER,
             VPA,
             TERMINAL_ID,
             QR_TXN_ID,
             TIMESTAMP,
             STATUS
          FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
          WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
          `;
            break;

         case "TC_ANPR_Performance_Report":
            query = `
          SELECT TOP (@limit)
             PLAZA_CODE,
             CCH_TRANS_ID,
             LANE_TRANS_ID,
             TAG,
             VEH_PLATE,
             LANE_ID,
             DIRECTION,
             VEH_CLASS,
             AVC_CLASS,
             ENCODED_DATE
          FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
          WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
          `;
            break;

         case "Transaction_Performance_Report":
            query = `
          SELECT TOP (@limit)
             PLAZA_CODE,
             CCH_TRANS_ID,
             LANE_TRANS_ID,
             TAG,
             VEH_PLATE,
             LANE_ID,
             DIRECTION,
             VEH_CLASS,
             AVC_CLASS,
             ENCODED_DATE
          FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
          WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
          `;
            break;

         case "AVC_Class_Accuracy_Report":
            query = `
          SELECT TOP (@limit)
             PLAZA_CODE,
             CCH_TRANS_ID,
             LANE_TRANS_ID,
             TAG,
             VEH_PLATE,
             LANE_ID,
             DIRECTION,
             VEH_CLASS,
             AVC_CLASS,
             ENCODED_DATE
          FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
          WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
          `;
            break;

         case "AVC_Lanewise_Accuracy_Report":
            query = `
          SELECT TOP (@limit)
             PLAZA_CODE,
             CCH_TRANS_ID,
             LANE_TRANS_ID,
             TAG,
             VEH_PLATE,
             LANE_ID,
             DIRECTION,
             VEH_CLASS,
             AVC_CLASS,
             ENCODED_DATE
          FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
          WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
          `;
            break;

         case "Exemption_Details_Report":
            query = `
          SELECT TOP (@limit)
             PLAZA_CODE,
             CCH_TRANS_ID,
             LANE_TRANS_ID,
             TAG,
             VEH_PLATE,
             LANE_ID,
             DIRECTION,
             VEH_CLASS,
             AVC_CLASS,
             ENCODED_DATE
          FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
          WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
          `;
            break;

         default:
            throw new Error("Invalid Report Type");
      }


      // TODO: CHECK FIELD NAME AND CHANGE AFTER CHECK THE QUERY COLUMN NAME

      if (laneId) {
         query += ` AND LANE_ID = @laneId`;
      }
      if (laneType) {
         query += ` AND LANE_TYPE = @laneType`;
      }
      if (plateNumber) {
         query += ` AND VEH_PLATE = @plateNumber`;
      }
      if (vehicleClass) {
         query += ` AND VEH_CLASS = @vehicleClass`;
      }
      if (tagId) {
         query += ` AND TAG_ID = @tagId`;
      }
      if (paymentType) {
         query += ` AND PAYMENT_TYPE = @paymentType`;
      }
      if (paymentSubType) {
         query += ` AND PAYMENT_SUBTYPE = @paymentSubType`;
      }
      if (paymentMode) {
         query += ` AND PAYMENT_MODE = @paymentMode`;
      }
      if (tcId) {
         query += ` AND TC_ID = @tcId`;
      }
      if (cursor) {
         query += ` AND ENCODED_DATE < @cursor`;
      }

      query += ` ORDER BY ENCODED_DATE DESC `;

      const result = await pool
         .request()
         .input("limit", sql.Int, limit)
         .input("fromDate", sql.DateTime, fromDate)
         .input("toDate", sql.DateTime, toDate)
         .input("laneId", sql.Int, laneId || null)
         .input("plateNumber", sql.VarChar, plateNumber || null)
         .input("tagId", sql.VarChar, tagId || null)
         .input("laneType", sql.VarChar, laneType || null)
         .input("vehicleClass", sql.Int, vehicleClass || null)
         .input("paymentType", sql.VarChar, paymentType || null)
         .input("paymentSubType", sql.VarChar, paymentSubType || null)
         .input("paymentMode", sql.VarChar, paymentMode || null)
         .input("tcId", sql.VarChar, tcId || null)
         .input("cursor", sql.DateTime, cursor || null)
         .query(query);

      const rows = result.recordset;
      console.log(rows, "ROWS OF REPORTS");

      const nextCursor = rows.length
         ? {
              cursorDate: rows[rows.length - 1].ENCODED_DATE,
              cursorId: rows[rows.length - 1].LANE_TRANS_ID,
           }
         : null;

      return {
         data: rows,
         nextCursor,
      };
      
   } catch (error) {
      console.error("Error in getReports Repository: ", error.message);

      throw new Error("Failed to fetch Reports");
   }
};
