import { poolPromise, sql } from "../config/db.js";

export const getReports = async (filters) => {
   const {
      fromDate,
      toDate,
      reportType,
      laneId,
      plateNumber,
      tagId,
      cursor,
      limit,
   } = filters;

   const pool = await poolPromise;

   let query = `
    SELECT TOP (@limit)
        PLAZA_CODE,
        CCH_TRANS_ID,
        LANE_TRANS_ID,
        TAG,
        VEH_PLATE,
        IS_ANPR,
        ANPR_PLATE,
        LANE_ID,
        DIRECTION,
        VEH_CLASS,
        AVC_CLASS,
        ENCODED_DATE
    FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
    WHERE ENCODED_DATE BETWEEN @fromDate AND @toDate
    AND REPORT_TYPE = @reportType     
    `;

   if (laneId) {
      query += ` AND LANE_ID = @laneId`;
   }
   if (plateNumber) {
      query += ` AND VEH_PLATE = @plateNumber`;
   }
   if (tagId) {
      query += ` AND TAG_ID = @tagId`;
   }
   if (cursor) {
      query += ` AND ENCODED_DATE = @cursor`;
   }

   query += ` ORDER BY ENCODED_DATE DESC `;

   const result = await pool
      .request()
      .input("fromDate", sql.DateTime, fromDate)
      .input("toDate", sql.DateTime, toDate)
      .input("reportType", sql.VarChar, reportType)
      .input("laneId", sql.Int, laneId || null)
      .input("plateNumber", sql.VarChar, plateNumber)
      .input("tagId", sql.VarChar, tagId)
      .query(query);

   const rows = result.recordset;

   const nextCursor = rows.length
      ? {
           cursorDate: rows[rows.length - 1].ENCODED_DATE,
           cusorId: rows[rows.length - 1].LANE_TRANS_ID,
        }
      : null;

   return {
      data: rows,
      nextCursor,
   };
};
