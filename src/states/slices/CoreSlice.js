import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  isLoggedIn: null,
  errorMessage: "",
  errorIsVisible: false,
};

const CoreSlice = createSlice({
  name: "core",
  initialState,
  reducers: {
    searchQueryFn(state, action) {
      state.searchQuery = action.payload;
    },
    handleIsLoggedIn(state, action) {
      state.isLoggedIn = action.payload;
    },
    setErrorMessage(state, action) {
      state.errorMessage = action.payload;
    },
    setErrorIsVisible(state, action) {
      state.errorIsVisible = action.payload;
    },
    handleCancelError(state) {
      state.errorMessage = "";
      state.errorIsVisible = !state.errorIsVisible;
    },
  },
});

export const selectSearchQuery = (state) => state.core.searchQuery;
export const selectIsLoggedIn = (state) => state.core.isLoggedIn;
export const selectErrorIsVisible = (state) => state.core.errorIsVisible;
export const selectErrorMessage = (state) => state.core.errorMessage;

export const {
  searchQueryFn,
  handleIsLoggedIn,
  setCurrentUser,
  setErrorMessage,
  setErrorIsVisible,
  handleCancelError,
} = CoreSlice.actions;

export default CoreSlice.reducer;
