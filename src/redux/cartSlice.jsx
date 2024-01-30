import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      } else {
        state.items[id] = { quantity: 1 };
      }
    },
    removeFromCart: (state, action) => {
      delete state.items[action.payload];
    },
    increment: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id].quantity += 1;
      }
    },
    decrement: (state, action) => {
      const id = action.payload;
      if (state.items[id] && state.items[id].quantity > 1) {
        state.items[id].quantity -= 1;
      }
    },
    // Add other reducers for 'save for later' etc.
  },
});

export const { addToCart, removeFromCart, increment, decrement } =
  cartSlice.actions;

export const selectCart = (state) => state.cart.items;

export default cartSlice.reducer;
