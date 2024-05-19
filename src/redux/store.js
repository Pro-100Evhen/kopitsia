import { configureStore, combineReducers } from "@reduxjs/toolkit";

import {
   persistReducer,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

import ProductSlice from "./slices/ProductSlice";
import CartSlice from "./slices/CartSlice";

const rootReducer = combineReducers({
   products: ProductSlice,
   cart: CartSlice,
});

const persistConfig = {
   key: "root",
   storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
});

export const persistor = persistStore(store);
export default store;
