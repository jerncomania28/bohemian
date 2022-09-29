import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
};

const CoreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    searchQueryFn(state, action) {
      state.searchQuery = action.payload;
    },
  },
});

export const selectSearchQuery = (state) => state.core.searchQuery;

export const { searchQueryFn } = CoreSlice.actions;

export default CoreSlice.reducer;
