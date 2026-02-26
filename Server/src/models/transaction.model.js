import { poolPromise, sql } from "../config/db.js";

export const getTransactionReports = async (offset = 0) => {
  const pool = await poolPromise;

  const result = await pool
    .request()
    .input("offset", sql.Int, offset)
    .query(`
      SELECT 
        PLAZA_CODE,
        CCH_TRANS_ID,
        LANE_TRANS_ID,
        TAG,
        PASSAGE_TIME ,
        VEH_PLATE,
        LANE_ID,
        LANE_TYPE,
        DIRECTION,
        VEH_CLASS,
        AVC_CLASS,
        PAYMENT_TYPE,
        PAYMENT_SUBTYPE
      FROM [AFSGantry].[dbo].[TBL_SLAVE_TRANS]
      ORDER BY PASSAGE_TIME DESC
      OFFSET @offset ROWS
      FETCH NEXT 25 ROWS ONLY
    `);

  return result.recordset;
};