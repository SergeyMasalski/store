import { LoadingStage } from '../enums/LoadingStage.ts';
import { Product } from '../types/Product.ts';

export interface ProductsState {
  products: Product[];
  loadingStages: LoadingStage;
}
