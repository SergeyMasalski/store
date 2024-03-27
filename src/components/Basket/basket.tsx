import { FC, useEffect } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { getBasket, clearBasket } from '../../features/basket/basketSlice';
import { stateBasketProducts } from '../../features/selectors';
import { Card } from '../../components';
interface Props {}

export const Basket: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const { productsInBasket } = useAppSelector(stateBasketProducts);
  console.log(productsInBasket);

  return (
    <>
      <button onClick={() => dispatch(clearBasket())}>Очистить корзину</button>
      <div className={classNames(styles.cardList)}>
        {productsInBasket.map((product) => (
          <Card
            key={product.id}
            {...product}
            // inBasket={true}
            // liked={false}
          />
        ))}
      </div>
    </>
  );
};
