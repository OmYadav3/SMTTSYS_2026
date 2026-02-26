import { Router } from "express";
import { transactionReportsController } from "../controllers/transaction.controller.js";

const router = Router()

router.route("/").get(transactionReportsController)

export default router;