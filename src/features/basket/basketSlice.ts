import { createSlice } from '@reduxjs/toolkit';
import { BasketState } from '../../models/interfaces/BasketState';

const BASKET_STORAGE_KEY = 'basket';


const initialState: BasketState = {
  itemsCount: 0,
  productsInBasket: [],
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    getBasket: (state) => {
      const basket: BasketState = JSON.parse(
        localStorage.getItem(BASKET_STORAGE_KEY) || '{}'
      );

      if (Object.keys(basket).length !== 0) {
        state.itemsCount = basket.itemsCount;
        state.productsInBasket = basket.productsInBasket;
      }
    },

    addItemToBasket: (state, { payload: Product }) => {
      state.productsInBasket = [...state.productsInBasket, Product];
      state.itemsCount++;
      localStorage.setItem(
        'basket',
        JSON.stringify({
          productsInBasket: state.productsInBasket,
          itemsCount: state.itemsCount,
        })
      );
    },
    deleteItemFromBasket: (state, { payload: id }) => {
      state.productsInBasket = state.productsInBasket.filter((product) => {
        return product.id !== id;
      });
      state.itemsCount--;
      localStorage.setItem(
        BASKET_STORAGE_KEY,
        JSON.stringify({
          productsInBasket: state.productsInBasket,
          itemsCount: state.itemsCount,
        })
      );
    },
    clearBasket: (state) => {
      state.productsInBasket = [];
      state.itemsCount = 0;
      localStorage.clear();
    },
  },
});

export default basketSlice.reducer;

export const { getBasket, addItemToBasket, deleteItemFromBasket, clearBasket } =
  basketSlice.actions;
