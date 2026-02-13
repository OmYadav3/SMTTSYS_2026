import { createSlice } from '@reactjs/toolkit'

const initialState = {
    allReports : [],
    loading: false
}

const reportsSlice = createSlice({
    name: 'reports',
    initialState,
    reducers: {
        setAllReports: (state, actions) => {
            state.loading = true;
            state.allReports = actions.payload;
        }
    }
    
})
export const { setAllReports } = reportsSlice.reducers;
export default reportsSlice.reducers;