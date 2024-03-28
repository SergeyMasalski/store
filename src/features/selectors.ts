import { Product } from '../models/types/Product';
import type { RootState } from './store';

export const stateProducts = (state: RootState) => state.products;
export const stateBasketProducts = (state: RootState) => state.basket;

export const stateProduct = (
  state: RootState,
  index: number
): Product | undefined => {
  return state.products.products.find((product) => {
    return product.id === index;
  });
};

export const stateIsItemInBasket = (state: RootState, index: number): boolean => {
  return state.basket.productsInBasket.some((el) => {
    return el.id === index;
  });
};
