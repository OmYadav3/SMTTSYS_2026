import { createSlice } from "@reduxjs/toolkit";
import { fetchReports, getSummaryReports } from "./reportThunk.js";

const initialState = {
  // transaction (pagination)
  transactions: {
    data: [],
    loading: false,
    error: null,

    nextCursor: null,
    currentCursor: null, // ✅ track current page cursor
    prevStack: [],
  },
  // summary (no pagination)
  summary: {
    data: [],
    loading: false,
    error: null,
  },
};

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      // transactions
      .addCase(fetchReports.pending, (state) => {
        state.transactions.loading = true;
        state.transactions.error = null;
      })

      .addCase(fetchReports.fulfilled, (state, action) => {
        state.transactions.loading = false;

        const { data, pagination } = action.payload;
        const usedCursor = action.meta.arg?.cursor;
        const isBack = action.meta.arg?.isBack;

        // ✅ HANDLE STACK LOGIC
        if (isBack) {
          // 👉 Going back → remove last cursor
          state.transactions.prevStack.pop();
        } else {
          // 👉 Going forward → store current cursor
          if (state.transactions.currentCursor !== null) {
            state.transactions.prevStack.push(state.transactions.currentCursor);
          }
        }

        // ✅ UPDATE STATE
        state.transactions.currentCursor = usedCursor;
        state.transactions.data = data;
        state.transactions.nextCursor = pagination?.nextCursor;
      })

      .addCase(fetchReports.rejected, (state, action) => {
        state.transactions.loading = false;
        state.transactions.error = action.payload || action.error.message || "Failed to fetch reports";
      })

      //summary
      .addCase(getSummaryReports.pending, (state) => {
        state.summary.loading = true;
        state.summary.error = null;
      })
      .addCase(getSummaryReports.fulfilled, (state, action) => {
        state.summary.loading = false;
        state.summary.data = action.payload || [];
      })
      .addCase(getSummaryReports.rejected, (state, action) => {
        state.summary.loading = false;
        state.summary.error = action.payload || "Failed to fetch summary";
      });
  },
});

export default reportsSlice.reducer;
