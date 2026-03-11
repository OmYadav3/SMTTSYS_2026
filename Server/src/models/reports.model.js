// import { poolPromise, sql } from "../config/db.js";

// export const getReports = async (req, res) => {
//    try {
//       const { fromDate, toDate, reportType, laneId, plateNumber, tagId } =
//          req.query;

//       const pool = await poolPromise;

//       let query = `
//          SELECT 
//         PLAZA_CODE,
//         LANE_TRANS_ID,
//         API_TRANS_ID,
//         VEH_PLATE,
//         TAG_ID,
//         LANE_ID,
//         VEH_CLASS,
//         TXN_DATE
//         FROM TRANSACTIONS
//         WHERE TXN_DATE BETWEEN @fromDate AND @toDate
//         AND REPORT_TYPE = @reportType
//         `;

//       if (laneId) {
//          query += `AND LANE_ID = @laneId`;
//       }
//       if (plateNumber) {
//          query += ` AND VEH_PLATE = @plateNumber`;
//       }
//       if (tagId) {
//          query += ` AND TAG_ID = @tagId`;
//       }

//       query += ` ORDER BY TXN_DATE DESC`;

//       const result = await pool
//          .request()
//          .input("fromDate", sql.DateTime, fromDate)
//          .input("toDate", sql.DateTime, toDate)
//          .input("reportType", sql.VarChar, reportType)
//          .input("laneId", sql.Int, laneId || null)
//          .input("plateNumber", sql.VarChar, plateNumber)
//          .input("tagId", sql.VarChar, tagId)
//          .query(query);

//       res.json(result.recordset);
//    } catch (error) {
//       console.log(error);
//       res.status(500).json({ message: "Server error" });
//    }
// };
