// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import filterSlice from '../features/filter/filterSlice';

const store = configureStore({
    reducer: {
        filter: filterSlice.reducer, // Tên slice và reducer tương ứng
    },
});

export default store;
