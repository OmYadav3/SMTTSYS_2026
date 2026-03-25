import { Router } from 'express'
import { getReports, getSummaryReport  } from '../controllers/report.controller.js'

const router = Router();

router.route('/get').get(getReports)
router.get("/summary", getSummaryReport);


router.route('/health').get((req, res) => {
  res.send("Server running ✅");
})


export default router;