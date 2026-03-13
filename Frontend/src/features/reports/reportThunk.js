import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReportAPI } from "./reportsAPI.js";

export const fetchReports = createAsyncThunk(
    "reports/fetchReports",
    async (filters, {rejectWithValue}) => {
        try {
            const data = await fetchReportAPI(filters);
            console.log(data, "THUNK")
             return data;

        } catch (error) {
            return rejectWithValue(error.message || "failed to fetch reports");
        }
    }
)