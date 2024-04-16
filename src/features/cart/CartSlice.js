import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  stateCart: ""
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const exist = state.cartProducts.find(
        (item) => item.post_id === action.payload.post_id
      );
      if (exist) {
        state.cartProducts = state.cartProducts.map((item) =>
          item.post_id === action.payload.post_id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        state.cartProducts = [
          ...state.cartProducts,
          {
            ...action.payload,
            quantity: 1,
          },
        ];
      }
      state.stateCart = "pending"
    },

    deleteProduct: (state, action) => {
      const exist2 = state.cartProducts.find(
        (item) => item.post_id === action.payload.post_id
      );
      if (exist2.quantity === 1) {
        state.cartProducts = state.cartProducts.filter(
          (item) => item.post_id !== exist2.post_id
        );
      } else {
        state.cartProducts = state.cartProducts.map((item) =>
          item.post_id === action.payload.post_id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
      if (state.cartProducts.length === 0) {
        state.stateCart = ""
      }
    },
    deleteAllProduct: (state, action) => {
      const exist3 = state.cartProducts.find(
        (item) => item.post_id === action.payload.post_id
      );
      state.cartProducts = state.cartProducts.filter(
        (item) => item.post_id !== exist3.post_id
      );
      if (state.cartProducts.length === 0) {
        state.stateCart = ""
      }
    },
    removeAllProduct: (state) => {
      state.cartProducts = []
      state.stateCart = ""
    },
  },
});

export const { addProduct, deleteProduct, deleteAllProduct, removeAllProduct } =
  cartSlice.actions;
export default cartSlice.reducer;
