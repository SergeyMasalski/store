import classNames from 'classnames';
import { FC, useEffect } from 'react';
import styles from './styles.module.scss';
import { Card } from '../Card/component';
import { SearchContainer } from '../Search/container';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { getAllProducts } from '../../features/products/productsSlice';
import { LoadingStage } from '../../models/enums/LoadingStage';
import { stateProducts } from '../../features/selectors';

type Props = {};

const CardsList: FC<Props> = ({}) => {
  const dispatch = useAppDispatch();
  const { products, loadingStages } = useAppSelector(stateProducts);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
    <div className={classNames(styles.root)}>
      <SearchContainer />
      <div className={classNames(styles.cardList)}>
        {loadingStages === LoadingStage.pending ? <h1>Загрузка</h1> : products.map((product: any) => <Card key={product.id} {...product} inBasket={true} liked={false} />)}
      </div>
    </div>
  );
};

export default CardsList;
