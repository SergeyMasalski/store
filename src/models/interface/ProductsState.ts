import { LoadingStage } from '../../models/enums/LoadingStage.ts';
import { Product } from '../../models/types/Product.ts';

export interface ProductsState {
  products: Product[];
  loadingStages: LoadingStage;
}