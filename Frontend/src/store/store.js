import { configureStore } from '@reduxjs/toolkit';
import transactionsSlice from './TransactionsSlice';
import vehiclesSlice from './VehiclesSlice';
import ReportsSlice from './ReportsSlice';

export const store = configureStore({
    reducer: {
        transactions: transactionsSlice,
        vehicles: vehiclesSlice,
        reports: ReportsSlice,
    },
})