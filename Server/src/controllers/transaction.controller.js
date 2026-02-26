import { getTransactionReports } from "../models/transaction.model.js";

export const transactionReportsController = async (req, res) => {
  try {
    /* ⭐ get page from query */
    const page = parseInt(req.query.page) || 1;
    const limit = 25;

    /* ⭐ calculate offset */
    const offset = (page - 1) * limit;

    const data = await getTransactionReports(offset);

    res.status(200).json({
      success: true,
      page,
      limit,
      data
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error"
    });
  }
};