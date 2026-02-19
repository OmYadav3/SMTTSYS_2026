import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice';
import transactionsSlice from './TransactionsSlice';
import vehiclesSlice from './VehiclesSlice';
import ReportsSlice from './ReportsSlice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,        
        transactions: transactionsSlice,
        vehicles: vehiclesSlice,
        reports: ReportsSlice,
    },
})