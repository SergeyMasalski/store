import classNames from 'classnames';
import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import Card from '../Card/component';
import SearchContainer from '../Search/container';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { getAllProducts } from '../../features/products/productsSlice';

interface Props {}

const CardsList: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const { products, isLoading } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className={classNames(styles.root)}>
      <SearchContainer />
      <div className={classNames(styles.cardList)}>
        {!isLoading ? (
          <h1>Загрузка</h1>
        ) : (
          products.map((product) => (
            <Card key={product.id} {...product} inBasket={true} liked={false} />
          ))
        )}
      </div>
    </div>
  );
};

export default CardsList;
