import { createSlice } from "@reduxjs/toolkit";
import { fetchReports } from "./reportThunk.js";

const initialState = {
  data: [],
  loading: false,
  error: null,

  nextCursor: null,
  prevStack: [], // for back navigation
};

const reportsSlice = createSlice({
  name: "reports",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchReports.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReports.fulfilled, (state, action) => {
        state.loading = false;

        const { data, pagination } = action.payload;
        const usedCursor = action.meta.arg?.cursor;
        const isBack = action.meta.arg?.isBack;

        // 👉 If coming from NEXT → push previous cursor
        if (isBack) {
          state.prevStack.pop(); // ✅ correct place
        } else if (usedCursor) {
          state.prevStack.push(usedCursor);
        }

        state.data = data;
        state.nextCursor = pagination.nextCursor;
      })
      .addCase(fetchReports.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch reports ";
      });
  },
});

export default reportsSlice.reducer;
