import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartList: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, { payload }) => {
      const cartItem = state.cartList.find((item) => item.id === payload.id);
      if (cartItem) {
        cartItem.quantity++;
      } else {
        const newCartItem = { ...payload, quantity: 1 };
        state.cartList.push(newCartItem);
      }
    },
    removeFromCart: (state, { payload }) => {
      const filteredCart = state.cartList.filter((item) => item.id !== payload);
      state.cartList = filteredCart;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const { addToCart, removeFromCart } = cartSlice.actions;

export const getCart = (state) => state.cart.cartList;
export const getCartQuantity = (state) =>
  state.cart.cartList.reduce((acc, item) => acc + item.quantity, 0);
