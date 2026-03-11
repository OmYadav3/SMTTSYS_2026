import * as reportService from "../services/report.service.js";

export const getReports = async (req, res) => {
   try {
      const filters = req.query;

      const result = await reportService.getReports(filters);

      return res.status(200).json(result);
   } catch (error) {
      console.log(error);
      res.status(500).json({
         message: "Server error",
      });
   }
};
