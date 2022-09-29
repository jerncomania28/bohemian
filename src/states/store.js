import { configureStore } from "@reduxjs/toolkit";
import CoreSlice from "./slices/CoreSlice";

const Store = configureStore({
  reducer: {
    core: CoreSlice,
  },
});

export default Store;
