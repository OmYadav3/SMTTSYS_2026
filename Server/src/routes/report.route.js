import { Router } from 'express'
import { getReports } from '../models/reports.model.js'

const router = Router();

router.route('/').get(getReports)

export default router;