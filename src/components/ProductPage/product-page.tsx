import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { stateIsItemInBasket, stateProduct } from '../../features/selectors';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { getAllProducts } from '../../features/products/productsSlice';
import { getBasket } from '../../features/basket/basketSlice';
import { Product } from '../../models/types/Product';
import { AddToBasketBtn } from '..';

type Props = {};

export const ProductPage: FC<Props> = ({}) => {
  const { id } = useParams();
  const select = useAppSelector;
  let product: Product | undefined;
  let inBasket: boolean = false;

  if (id) {
    product = select((state) => stateProduct(state, +id));
    inBasket = select((state) => stateIsItemInBasket(state, +id));
  }

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBasket());
    if (!product) {
      dispatch(getAllProducts());
    }
  }, [product, dispatch]);


  return (
    <div className={classNames(styles.containerField)}>
        
      {!product ? (
        <h1>Загрузка</h1>
      ) : (
        <div className={classNames(styles.container)}>
          <img
            src={product.images}
            alt="product-image"
            className={classNames(styles.productImage)}
          />
          <div className={classNames(styles.containerInfo)}>
            <div className={classNames(styles.productDescription)}>
              <h2 className={classNames(styles.productName)}>
                {product.title}
              </h2>
              <p className={classNames(styles.dimText)}>Цена:</p>
              <p className={classNames(styles.producPrice)}>
                {product.price} $
              </p>

              <p className={classNames(styles.dimText)}>Описание:</p>
              <p className={classNames(styles.descriptionText)}>
                {product.description}
              </p>
            </div>

            <AddToBasketBtn product={product} inBasket={inBasket} />
          </div>
        </div>
      )}
    </div>
  );
  
};
