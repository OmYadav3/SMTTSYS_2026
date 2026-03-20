import * as reportService from "../services/report.service.js";

export const getReports = async (req, res) => {
   try {
      const filters = req.query;

      if (!filters.fromDate || !filters.toDate) {
         return res.status(400).json({
            success: false,
            message: "fromDate and toDate are required",
         });
      }

      console.log("GET /reports called");
      console.log("QUERY:", req.query);

      const result = await reportService.getReports(filters);

      return res.status(200).json({
         success: true,
         ...result,
      });
   } catch (error) {
      console.error("Controller Error:", error.message);

      return res.status(500).json({
         success: false,
         message: "Failed to fetch reports",
      });
   }
};
