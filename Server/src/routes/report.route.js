import { Router } from 'express'
import { getReports } from '../services/report.service.js'

const router = Router();

router.route('/get').get(getReports)


router.route('/health').get((req, res) => {
  res.send("Server running ✅");
})


export default router;