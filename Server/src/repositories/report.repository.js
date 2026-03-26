import { poolPromise, sql } from "../config/db.js";
import { decodeCursor, encodeCursor } from "../utils/cursor.js";

export const getReports = async (filters) => {
   try {
      const { fromDate, toDate, cursor, limit, ...restFilters } = filters;

      // ✅ Validation
      if (!fromDate || !toDate) {
         throw new Error("Date range required");
      }

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
      WHERE ENCODED_DATE >= @fromDate 
      AND ENCODED_DATE < DATEADD(day, 1, @toDate)
    `;

      // ✅ Required params
      request.input("limit", sql.Int, limit);
      request.input("fromDate", sql.DateTime, fromDate);
      request.input("toDate", sql.DateTime, toDate);

      // 🔥 Cursor Pagination
      if (cursor) {
         const decoded = decodeCursor(cursor);

         query += `
   AND (
      ENCODED_DATE < @cursorDate
      OR (
         ENCODED_DATE = @cursorDate
         AND CCH_TRANS_ID < @cursorId
      )
   )
   `;

         request.input("cursorDate", sql.DateTime, decoded.encodedDate);
         request.input("cursorId", sql.VarChar, decoded.cchTxnId);
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
      query += ` ORDER BY ENCODED_DATE DESC, CCH_TRANS_ID DESC`;

      // ✅ Execute
      const result = await request.query(query);
      const rows = result.recordset;

      // ✅ Create nextCursor (encoded)
      let nextCursor = null;

      if (rows.length) {
         const last = rows[rows.length - 1];

         nextCursor = encodeCursor({
            encodedDate: last.ENCODED_DATE,
            cchTxnId: last.CCH_TRANS_ID,
         });
      }

      const hasMore = rows.length === limit;

      return {
         data: rows,
         pagination: {
            type: "cursor",
            limit,
            nextCursor,
            prevCursor: null,
            hasMore,
            totalCount: null,
         },
      };
   } catch (error) {
      console.error("Error in getReports Repository:", error.message);
      throw new Error("Failed to fetch Reports");
   }
};


export const getSumarryReports = async (filters) => {
   try {
      const { fromDate, toDate, ...restFilters } = filters;

      console.log(filters, "Filters");

      // ✅ Validation
      if (!fromDate || !toDate) {
         throw new Error("Date range required");
      }

      const pool = await poolPromise;
      const request = pool.request();

      let query = `
      SELECT
         PAYMENT_TYPE,

         SUM(CASE WHEN VEH_CLASS = 'CAR' THEN 1 ELSE 0 END) AS [CAR / JEEP / VAN],
         SUM(CASE WHEN VEH_CLASS = 'LCV' THEN 1 ELSE 0 END) AS [LCV / MINIBUS],
         SUM(CASE WHEN VEH_CLASS = 'BUS' THEN 1 ELSE 0 END) AS [BUS (2 AXLES)],
         SUM(CASE WHEN VEH_CLASS = 'TRUCK' THEN 1 ELSE 0 END) AS [TRUCK (2 AXLES)],

         COUNT(*) AS [Total Vehicles]

      FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
      WHERE PASSING_TIME >= @fromDate
      AND PASSING_TIME < DATEADD(DAY, 1, @toDate)
      `;

      // ✅ Required params
      request.input("fromDate", sql.DateTime, fromDate);
      request.input("toDate", sql.DateTime, toDate);

      // ✅ Optional filters
      if (restFilters.laneId?.trim()) {
         query += ` AND LANE_ID = @laneId`;
         request.input("laneId", sql.VarChar, restFilters.laneId);
      }

      if (restFilters.laneType?.trim()) {
         query += ` AND LANE_TYPE = @laneType`;
         request.input("laneType", sql.VarChar, restFilters.laneType);
      }

      if (restFilters.vehClass?.trim()) {
         query += ` AND VEH_CLASS = @vehClass`;
         request.input("vehClass", sql.VarChar, restFilters.vehClass);
      }

      if (restFilters.plate?.trim()) {
         query += ` AND VEH_PLATE LIKE @plate`;
         request.input("plate", sql.VarChar, `%${restFilters.plate}%`);
      }

      if (restFilters.txnId?.trim()) {
         query += ` AND CCH_TRANS_ID = @txnId`;
         request.input("txnId", sql.VarChar, restFilters.txnId);
      }

      // ✅ GROUP BY (NO PAGINATION)
      query += `
      GROUP BY PAYMENT_TYPE
      ORDER BY PAYMENT_TYPE
      `;

      const result = await request.query(query);

      return {
         data: result.recordset
      };

   } catch (error) {
      console.error("Summary Error:", error.message);
      throw new Error("Failed to fetch summary report");
   }
};