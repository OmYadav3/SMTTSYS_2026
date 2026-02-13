import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './services/TransactionsSlice';
import vehiclesReducer from './services/VehiclesSlice';

export const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
        vehicles: vehiclesReducer,
    },
})