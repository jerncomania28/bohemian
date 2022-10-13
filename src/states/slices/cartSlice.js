import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0,
  total: 0,
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // calculates the cummulative prices of all products in a cart
    cartTotal: (state) => {
      const cartItems = state.items;

      const total = cartItems.reduce((acc, item) => {
        return acc + item.quantity * item.price;
      }, 0);

      state.total = total;
    },

    // cart count Fn -- total number of items in cart -- start
    cartCount: (state) => {
      const cartItems = state.items;

      const count = cartItems.reduce((acc, item) => {
        return acc + 1;
      }, 0);

      state.count = count;
    },

    // delete product from cart --start
    deleteProductFromCart: (state, action) => {
      const cartItems = state.items;
      const product = action.payload;

      const deleteProduct = (cartItems, product) => {
        return cartItems.filter((item) => item.id !== product.id);
      };

      state.items = deleteProduct(cartItems, product);
    },

    // remove product from cart --start
    removeProductsFromCart: (state, action) => {
      const cartItems = state.items;
      const product = action.payload;

      const removeProduct = (cartItems, product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem.quantity === 1) {
          return cartItems.filter((item) => item.id !== product.id);
        } else {
          return cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity - 1 }
              : item
          );
        }
      };

      state.items = removeProduct(cartItems, product);
    },

    // add products to cart once --start.
    addProductsToCart: (state, action) => {
      const cartItems = state.items;
      const product = action.payload;

      const addProduct = (cartItems, product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (!existingItem) {
          state.items = [...cartItems, { ...product, quantity: 1 }];
        }
      };

      addProduct(cartItems, product);
    },

    // increase quantity of product already in cart --start.
    increaseProductQuantity: (state, action) => {
      const cartItems = state.items;
      const product = action.payload;

      const increaseQuantity = (cartItems, product) => {
        const existingItem = cartItems.find((item) => item.id === product.id);

        if (existingItem) {
          state.items = cartItems.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        }
      };

      increaseQuantity(cartItems, product);
    },
  },
});

export const {
  cartTotal,
  cartCount,
  addProductsToCart,
  removeProductsFromCart,
  deleteProductFromCart,
  increaseProductQuantity,
} = CartSlice.actions;

export default CartSlice.reducer;
