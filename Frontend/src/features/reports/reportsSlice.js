import { createSlice } from '@reduxjs/toolkit'
import { fetchReports } from './reportThunk.js';

const initialState = {
    data: [],
    loading: false,
    error: null,
}

const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchReports.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchReports.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchReports.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload || "Failed to fetch reports "
            })
    }
    
})

export default reportsSlice.reducer;