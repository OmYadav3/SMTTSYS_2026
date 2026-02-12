import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './services/TransactionsSlice';

export const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
    },
})