import { createSlice } from "@reduxjs/toolkit";
import { products as productsData } from "../products";

const initialState = {
  products: productsData,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products.products;

export default productsSlice.reducer;
