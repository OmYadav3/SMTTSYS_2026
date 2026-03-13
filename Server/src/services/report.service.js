import * as reportRepo from "../repositories/report.repository.js";

export const getReports = async (filters) => {
   
    /* 
   Ensure the API does not request too many rows from the database.
   Default limit = 20
   Maximum limit allowed = 500
   */
   try {
      const limit = Math.min(parseInt(filters.limit) || 20, 500);
      console.log(limit, "LIMIT VALUE")

      const data = await reportRepo.getReports({
         ...filters,
         limit,
      });
      
      return data;

   } catch (error) {
      console.log(error, "Error In Service")
   }
};
