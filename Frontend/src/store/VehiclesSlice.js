import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    allVehicles: [],
    Loading: false,
}

const vehiclesSlice = createSlice({
    name: 'vehicles',
    initialState,
    reducers: {
        setAllVehicles: (state, actions) => {
            state.Loading = true
            state.allVehicles = actions.payload;
        }
    }
})
export const { setAllVehicles } = vehiclesSlice.actions;
export default vehiclesSlice.reducer;

