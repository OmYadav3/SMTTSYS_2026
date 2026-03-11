import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReportAPI } from "./reportsAPI.js";

export const fetchReports = createAsyncThunk(
    "report/fetchReports",
    async( filters ) => {
        const data = await fetchReportAPI(filters)
        return data;
    }
)