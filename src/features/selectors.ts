import type { RootState } from './store'

export const stateProducts = ((state: RootState) => state.products);
export const stateBasketProducts=((state:RootState)=>state.basket)

