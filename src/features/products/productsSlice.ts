import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_API_URL } from '../../utils/constants.ts';
import axios from 'axios';
import { LoadingStage } from '../../models/enums/LoadingStage.ts';
import { Product } from '../../models/types/Product.ts';
import { ProductsState } from '../../models/interface/ProductsState.ts';


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
  loadingStages: LoadingStage.pending,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.loadingStages = LoadingStage.pending;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      if (!action?.payload || action.payload.length === 0) {
        state.products = [];
        state.loadingStages = LoadingStage.pending;
        return;
      }
      state.loadingStages = LoadingStage.fulfilled;
      state.products = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state) => {
      state.loadingStages = LoadingStage.rejected;
    });
  },
});

export const {} = productsSlice.actions;

export default productsSlice.reducer;
