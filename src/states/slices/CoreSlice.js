import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  isLoggedIn: null,
  errorMessage: "",
  errorIsVisible: false,
  currrentDisplayName: "",
  isQuickViewOpen: false,
  lightBoxCurrentProduct: null,
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
    handleCurrentDisplayName(state, action) {
      state.currrentDisplayName = action.payload;
    },
    setQuickView(state, action) {
      state.isQuickViewOpen = action.payload;
    },
    setLightBoxCurrentProduct(state, action) {
      state.lightBoxCurrentProduct = action.payload;
    },
  },
});

export const selectSearchQuery = (state) => state.core.searchQuery;
export const selectIsLoggedIn = (state) => state.core.isLoggedIn;
export const selectErrorIsVisible = (state) => state.core.errorIsVisible;
export const selectErrorMessage = (state) => state.core.errorMessage;
export const selectCurrentDisplayName = (state) =>
  state.core.currrentDisplayName;
export const selectIsQuickView = (state) => state.core.isQuickViewOpen;

export const {
  searchQueryFn,
  handleIsLoggedIn,
  setErrorMessage,
  setErrorIsVisible,
  handleCancelError,
  handleCurrentDisplayName,
  setQuickView,
  setLightBoxCurrentProduct,
} = CoreSlice.actions;

export default CoreSlice.reducer;
