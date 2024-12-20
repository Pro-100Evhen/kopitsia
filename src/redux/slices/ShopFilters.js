import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   productsPerRow: 4,
};

const FiltersSlice = createSlice({
   name: "filters",
   initialState: initialState,
   reducers: {
      setProductsPerRow(state, action) {
         state.productsPerRow = action.payload;
      },
      resetFilters(state) {
         state.productsPerRow = initialState.productsPerRow;
      },
   },
});

export const { setProductsPerRow, resetFilters } = FiltersSlice.actions;

export default FiltersSlice.reducer;
