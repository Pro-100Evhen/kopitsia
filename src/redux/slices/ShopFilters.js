import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   productsPerRow: 4,
   productsPerPage: 12,
   currentPage: 1,
   shopSorting: "default", // cheaper, expensive
   filters: {
      categories: [],
      sizes: [],
   },
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

      setSortingOrder(state, action) {
         state.shopSorting = action.payload;
      },

      addCategorie(state, action) {
         state.filters.categories = [
            ...state.filters.categories,
            action.payload,
         ];
      },
      remoweCategorie(state, action) {
         state.filters.categories = [
            ...state.filters.sizes.filter(
               (category) => category !== action.payload
            ),
         ];
      },
      addSize(state, action) {
         state.filters.sizes = [...state.filters.sizes, action.payload];
      },
      remoweSize(state, action) {
         state.filters.sizes = [
            ...state.filters.sizes.filter((size) => size !== action.payload),
         ];
      },
   },
});

export const {
   setProductsPerRow,
   resetFilters,
   setCurrentPage,
   shopSorting,
   setSortingOrder,
   setProductsPerPage,
   addCategorie,
   remoweCategorie,
   addSize,
   remoweSize,
} = FiltersSlice.actions;
export default FiltersSlice.reducer;
