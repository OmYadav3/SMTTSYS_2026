import * as reportRepo from "../repositories/report.repository.js";

export const getReports = async (filters) => {
   /* 
   Ensure the API does not request too many rows from the database.
   Default limit = 20
   Maximum limit allowed = 500
   */
   try {
      // ✅ Safe limit
      const limit = Math.min(parseInt(filters.limit) || 50, 500);
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
