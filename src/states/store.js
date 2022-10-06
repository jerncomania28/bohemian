import { configureStore } from "@reduxjs/toolkit";
import CoreSlice from "./slices/CoreSlice";
import CartSlice from "./slices/cartSlice";
import ProductsSlice from "./slices/productSlice";

const Store = configureStore({
  reducer: {
    core: CoreSlice,
    cart: CartSlice,
    products: ProductsSlice,
  },
});

export default Store;
