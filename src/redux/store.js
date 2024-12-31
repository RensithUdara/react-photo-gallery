import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './theme/themeSlice';
import { galleryReducer } from './gallery/galleryslice';

const store = configureStore({
    reducer: {
        theme: themeReducer,
        galler: galleryReducer
    }
});

export default store;