import { configureStore } from '@reduxjs/toolkit';
import transactionsReducer from './TransactionsSlice';
import vehiclesReducer from './VehiclesSlice';

export const store = configureStore({
    reducer: {
        transactions: transactionsReducer,
        vehicles: vehiclesReducer,
    },
})