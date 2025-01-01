import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkMode: false,
    },
    reducers: {
        toggleTheme: (state) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const themeReducer = themeSlice.reducer;
export const { toggleTheme } = themeSlice.actions;
