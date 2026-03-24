import { createSlice } from "@reduxjs/toolkit";
import { fetchReports } from "./reportThunk.js";

const initialState = {
  data: [],
  loading: false,
  error: null,

  nextCursor: null,
  currentCursor: null,   // ✅ track current page cursor
  prevStack: [],  
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

        // ✅ HANDLE STACK LOGIC
        if (isBack) {
          // 👉 Going back → remove last cursor
          state.prevStack.pop();
        } else {
          // 👉 Going forward → store current cursor
          if (state.currentCursor !== null) {
            state.prevStack.push(state.currentCursor);
          }
        }

        // ✅ UPDATE STATE
        state.currentCursor = usedCursor;
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
