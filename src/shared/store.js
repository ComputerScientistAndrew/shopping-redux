import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { cartReducer } from '../components/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
