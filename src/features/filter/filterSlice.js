// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
    name: 'filter', // Tên của slice
    initialState: {
        categories: [],
        colors: [],
        sizes: [],
        tag: '',
    },
    reducers: {
        categoriesFilterChange: (state, action) => {
            // mutation || IMMER
            if (state.categories.includes(action.payload)) {
                // Remove item if it exists
                state.categories = state.categories.filter((existingItem) => existingItem !== action.payload);
            } else {
                // Add item if it doesn't exist
                state.categories.push(action.payload);
            }
        },
        colorsFilterChange: (state, action) => {
            if (state.colors.includes(action.payload)) {
                // Remove item if it exists
                state.colors = state.colors.filter((existingItem) => existingItem !== action.payload);
            } else {
                // Add item if it doesn't exist
                state.colors.push(action.payload);
            }
        },
        sizesFilterChange: (state, action) => {
            state.sizes = action.payload;
        },
        tagFilterChange: (state, action) => {
            state.tag = action.payload;
        },
    },
});

// Export actions và reducer
// export const { categoriesFilterChange, decrement, incrementByAmount } = filterSlice.actions;
// export default counterSlice.reducer;
