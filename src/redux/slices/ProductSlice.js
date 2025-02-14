import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
   products: [],
   errorMsg: "",
   isLoading: true,
};

export const fetchProducts = createAsyncThunk(
   "products/fetchProducts",
   async () => {
      const res = await axios.get(
         "https://66058cf12ca9478ea180a19e.mockapi.io/products"
      );
      return res.data;
   }
);

const ProductSlice = createSlice({
   name: "products",
   initialState: initialState,
   reducers: {
      setIsInCart: (state, action) => {
         const productId = action.payload.productId;
         state.products = state.products.map((product) => {
            if (product.id === productId) {
               return { ...product, isInCart: true };
            }
            return product;
         });
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchProducts.pending, (state) => {
            state.isLoading = true;
         })
         .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload;
            state.isLoading = false;
         })
         .addCase(fetchProducts.rejected, (state, action) => {
            state.errorMsg = action.error.message;
            state.isLoading = false;
         });
   },
});

export const { setIsInCart } = ProductSlice.actions;

export const selectorProducts = (state) => state.products;

export default ProductSlice.reducer;
