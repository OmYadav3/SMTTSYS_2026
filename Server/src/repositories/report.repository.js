import { poolPromise, sql } from "../config/db.js";

export const getReports = async (filters) => {
   try {
      const { fromDate, toDate, cursor, limit, ...restFilters } = filters;

      // ✅ Validation
      if (!fromDate || !toDate) {
         throw new Error("Date range required");
      }
      console.log(...restFilters.laneId, "LANE_ID")

      const pool = await poolPromise;
      const request = pool.request();

      // ✅ Base Query
      let query = `
      SELECT TOP (@limit)
        PLAZA_CODE,
        CCH_TRANS_ID,
        LANE_TRANS_ID,
        TAG,
        VEH_PLATE,
        LANE_ID,
        LANE_TYPE,
        DIRECTION,
        VEH_CLASS,
        AVC_CLASS,
        ENCODED_DATE
      FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
      WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
    `;

      // ✅ Required params
      request.input("limit", sql.Int, limit);
      request.input("fromDate", sql.DateTime, fromDate);
      request.input("toDate", sql.DateTime, toDate);

      // 🔥 Cursor Pagination
      if (cursor) {
         query += ` AND ENCODED_DATE < @cursor`;
         request.input("cursor", sql.DateTime, cursor);
      }

      // 🔥 Filter Config
      const filterConfig = {
         cchTxnId: { column: "CCH_TRANS_ID", type: sql.VarChar },
         laneTransId: { column: "LANE_TRANS_ID", type: sql.VarChar },
         laneId: { column: "LANE_ID", type: sql.VarChar },
         laneType: { column: "LANE_TYPE", type: sql.VarChar },
         vehicleClass: { column: "VEH_CLASS", type: sql.Int },
         tagId: { column: "TAG", type: sql.VarChar },
         paymentType: { column: "PAYMENT_TYPE", type: sql.VarChar },
         paymentSubType: { column: "PAYMENT_SUBTYPE", type: sql.VarChar },
         paymentMode: { column: "PAYMENT_MODE", type: sql.VarChar },
         tcId: { column: "TC_ID", type: sql.VarChar },
      };

      // 🔥 Apply filters dynamically
      Object.keys(filterConfig).forEach((key) => {
         if (restFilters[key]) {
            const { column, type } = filterConfig[key];

            query += ` AND ${column} = @${key}`;
            request.input(key, type, restFilters[key]);
         }
      });

      // 🔥 Special LIKE filter
      if (restFilters.plateNumber) {
         query += ` AND VEH_PLATE LIKE @plateNumber`;
         request.input(
            "plateNumber",
            sql.VarChar,
            `%${restFilters.plateNumber}%`
         );
      }

      // ✅ Sorting
      query += ` ORDER BY ENCODED_DATE DESC`;

      // ✅ Execute
      const result = await request.query(query);
      const rows = result.recordset;

      // ✅ Next Cursor
      const nextCursor = rows.length
         ? rows[rows.length - 1].ENCODED_DATE
         : null;

      return {
         data: rows,
         nextCursor,
      };
   } catch (error) {
      console.error("Error in getReports Repository:", error.message);
      throw new Error("Failed to fetch Reports");
   }
};
