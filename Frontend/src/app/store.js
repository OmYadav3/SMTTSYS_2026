import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import transactionsSlice from '../features/transactions/TransactionsSlice';
import ReportsSlice from '../features/reports/reportsSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,        
        transactions: transactionsSlice,
        reports: ReportsSlice,
    },
})