import { Router } from 'express'
import { getReports } from '../services/report.service.js'

const router = Router();

router.route('/').get(getReports)

export default router;