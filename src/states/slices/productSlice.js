import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchAllProducts } from "../../utils/helpers";

const url = "https://fakestoreapi.com/products/";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    return fetchAllProducts(url);
  }
);

const initialState = {
  products: [],
  isLoading: true,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isLoading = true;
    },
    [getAllProducts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.products = action.payload;
    },
    [getAllProducts.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export default ProductsSlice.reducer;
