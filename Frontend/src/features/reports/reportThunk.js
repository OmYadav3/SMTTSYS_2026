import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchReportAPI, fetchSummaryReportAPI } from "./reportsAPI.js";

export const fetchReports = createAsyncThunk(
    "reports/fetchReports",
    async (filters, {rejectWithValue}) => {
        try {
            const data = await fetchReportAPI(filters);
            
             return data;

        } catch (error) {
            return rejectWithValue(error.response?.message || "failed to fetch reports");
        }
    }
)

export const getSummaryReports = createAsyncThunk(
    "/report/getSummary",
    async(filters, { rejectWithValue }) => {
        try {
            const data = await fetchSummaryReportAPI(filters);
            
            return data;
        } catch (error) {
            return rejectWithValue(error.response?.message || "Failed to fetch summary")
        }
    }
)