import * as reportRepo from "../repositories/report.repository.js";
import { getSumarryReports } from "../repositories/report.repository.js";

export const getReports = async (filters) => {
   /* 
   Ensure the API does not request too many rows from the database.
   Default limit = 25
   Maximum limit allowed = 250
   */
   try {
      // ✅ Safe limit
      const limit = Math.min(parseInt(filters.limit) || 25, 50);
      console.log(limit, "SAFER LIMIT VALUE");

      const data = await reportRepo.getReports({
         ...filters,
         limit,
      });

      return data;
   } catch (error) {
      console.error("Service Error:", error.message);

      // ✅ IMPORTANT
      throw error;
   }
};



export const getSummaryReportService = async (filters) => {
   const data = await getSumarryReports(filters);

   return {
      data: data.data,
      pagination: data.pagination
   };
};