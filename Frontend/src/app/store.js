import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import transactionsSlice from '../store/TransactionsSlice';
import vehiclesSlice from '../store/VehiclesSlice';
import ReportsSlice from '../features/reports/reportsSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,        
        transactions: transactionsSlice,
        vehicles: vehiclesSlice,
        reports: ReportsSlice,
    },
})