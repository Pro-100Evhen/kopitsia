import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   productsPerRow: 4,
   productsPerPage: 12,
   currentPage: 1,
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
         state.productsPerPage = initialState.productsPerPage;
         state.currentPage = initialState.currentPage;
      },

      setCurrentPage(state, action) {
         state.currentPage = action.payload;
      },

      setProductsPerPage(state, action) {
         state.productsPerPage = action.payload;
      },
   },
});

// Експортуємо необхідні екшени
export const {
   setProductsPerRow,
   resetFilters,
   setCurrentPage,
   setProductsPerPage,
} = FiltersSlice.actions;
export default FiltersSlice.reducer;
