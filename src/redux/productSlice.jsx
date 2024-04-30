import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        selectedCategory: "ALLE KATEGORIEN"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const { filterCategory } = productSlice.actions;
export const getSelectedCategory = state => state.products.selectedCategory;
export default productSlice.reducer