import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allTransactions: [],
    loading: false,
}

const transactionsSlice = createSlice({
    name: 'transactions',
    initialState,
    reducers: {
        setAllTransactions: (state, action) => {
            state.loading = true;
            state.allTransactions = action.payload;  
        },}
})

export const { setAllTransactions } = transactionsSlice.actions;
export default transactionsSlice.reducer;