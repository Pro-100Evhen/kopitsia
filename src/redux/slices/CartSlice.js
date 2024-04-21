import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
   totalPrice: 0,
   items: [],
   withListItems: [],
};

const CartSlice = createSlice({
   name: "cart",
   initialState: initialState,
   reducers: {
      addProductToCart(state, action) {
         const findProductInCart = state.items.find(
            (product) => product.id === action.payload.id
         );
         if (findProductInCart) {
            findProductInCart.count++;
         } else {
            state.items.push({ ...action.payload, count: 1 });
         }
         state.totalPrice = state.items.reduce((sum, item) => {
            return item.price * item.count + sum;
         }, 0);
      },
      remoweProductFromCart(state, action) {
         state.items = state.items.filter(
            (product) => product.id !== action.payload.id
         );
      },
      minusItemInCartCount(state, action) {
         const findProduct = state.items.find(
            (product) => product.id === action.payload.id
         );
         if (findProduct.count === 1) {
            state.items = state.items.filter(
               (product) => product.id !== action.payload.id
            );
         } else if (findProduct.count > 1) {
            findProduct.count--;
         }
      },
      addProductToWishList(state, action) {
         const findProductInWishList = state.withListItems.find(
            (product) => product.id === action.payload.id
         );
         if (findProductInWishList) {
            findProductInWishList.count++;
         } else {
            state.withListItems.push({ ...action.payload, count: 1 });
         }
         state.totalPrice = state.withListItems.reduce((sum, item) => {
            return item.price * item.count + sum;
         }, 0);
      },
      remoweProductFromWithList(state, action) {
         state.withListItems = state.withListItems.filter(
            (product) => product.id !== action.payload
         );
      },
      clearCart(state) {
         state.items = [];
      },
      clearWithList(state) {
         state.withListItems = [];
      },
   },
});

export const {
   addProductToCart,
   remoweProductFromCart,
   addProductToWishList,
   remoweProductFromWithList,
   clearCart,
   clearWithList,
   minusItemInCartCount,
} = CartSlice.actions;
export default CartSlice.reducer;
