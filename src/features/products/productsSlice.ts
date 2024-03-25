import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_API_URL } from '../../utils/constants.ts';
import { ReactNode } from 'react';

type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

interface ProductsState {
  products: Product[],
  isLoading: boolean;
}

export const getAllProducts = createAsyncThunk<Product[], undefined, { rejectValue: any }>(
  'users/getAllProducts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_API_URL}/products?offset=0&limit=14`);
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState: ProductsState = {
  products: [],
  isLoading: false,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      if (!action?.payload || action.payload.length === 0) {
        state.products = [];
        state.isLoading = false;
        return;
      }
      state.isLoading = true;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
