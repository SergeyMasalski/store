import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {BASE_API_URL} from "../../utils/constants.ts";


type Product = {
  id: number;
  title: string;
  price: number;
  images: string[];
};

interface ProductsState {
  products: Product[];
}

export const getProductsAll = createAsyncThunk<Product[], undefined, { rejectValue: any }>(
  'users/getProductsAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/products?offset=0&limit=14`,
      );
      return response.data;
    } catch (error) {
      console.error(error);
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductsAll.fulfilled, (state, action) => {
      if (!action?.payload || action.payload.length === 0) {
        state.products = [];
        return;
      }

      state.products = action.payload;
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
