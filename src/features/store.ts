import { configureStore } from '@reduxjs/toolkit';
import productsSlice from './products/productsSlice';
import  basketSlice  from './basket/basketSlice';

export const store = configureStore({
  reducer: {
    products: productsSlice,
    basket:basketSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
