import { configureStore } from "@reduxjs/toolkit";
import CoreSlice from "./slices/CoreSlice";
import CartSlice from "./slices/cartSlice";
import ProductsSlice from "./slices/productSlice";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducers = combineReducers({
  core: CoreSlice,
  cart: CartSlice,
  products: ProductsSlice,
});

const persistedReducer = persistReducer(persistConfig, rootReducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
