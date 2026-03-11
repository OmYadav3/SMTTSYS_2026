import * as reportRepo from '../repositories/report.repository.js'

export const getReports = async(filters) => {
    const limit = parseInt(filters.limit) || 50;
    const data = await reportRepo.getReports({
        ...filters,
        limit
    });
    return data;
}