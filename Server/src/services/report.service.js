import * as reportRepo from '../repositories/report.repository.js'

export const getReports = async(filters) => {

    const limit = Math.min(parseInt(filters.limit) || 50, 500); /* USE MIN METHOD FOR NOT CRASH THE APP BY REQUESTING ROW LIKE 100000 */

    const data = await reportRepo.getReports({
        ...filters,
        limit
    });
    return data;
}