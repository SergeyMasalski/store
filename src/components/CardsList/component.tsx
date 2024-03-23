import classNames from 'classnames';
import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import Card from '../Card/component';
import SearchContainer from '../Search/container';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { getProductsAll } from '../../features/products/productsSlice';

interface Props {}

const CardsList: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.products.products);

  useEffect(() => {
    dispatch(getProductsAll());
  }, []);

  return (
    <div className={classNames(styles.root)}>
      <SearchContainer />
      <div className={classNames(styles.cardList)}>
        {products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            imageSrc={product.images[0]}
            inBasket={true}
            liked={false}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsList;
