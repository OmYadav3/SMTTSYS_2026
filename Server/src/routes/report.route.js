import { Router } from 'express'
import { getReports } from '../models/reports.controller.js'

const router = Router();

router.route('/').get(getReports)

export default router;