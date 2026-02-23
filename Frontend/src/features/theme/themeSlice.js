import { createSlice } from "@reduxjs/toolkit";
import { themes } from "../../app/theme";

const initialState = {
    currentTheme: "sageAndOlive",
    colors: themes.sageAndOlive
}

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action) => {
            const themeName = action.payload;
            state.currentTheme = themeName;
            state.colors = themes[themeName]
        }
    }
})

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;