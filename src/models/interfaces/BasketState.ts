import { Product } from "../types/Product";


export interface BasketState {
  productsInBasket: Product[];
  itemsCount: number;
}
