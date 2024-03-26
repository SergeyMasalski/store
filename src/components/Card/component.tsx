import classNames from 'classnames';
import { FC, useEffect } from 'react';
import styles from './styles.module.scss';

import LikeBtn from '../LikeBtn/component';
import AddToBasketBtn from '../AddToBasketBtn/component';
import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { getBasket } from '../../features/basket/basketSlice';
import { stateBasketProducts } from '../../features/selectors';

type Props = {
  id: number;
  title: string;
  price: number;
  images: string;
  // inBasket: boolean;
  // liked: boolean;
};

const Card: FC<Props> = ({ id, title, price, images }) => {
  const {productsInBasket} = useAppSelector(stateBasketProducts);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const inBasket = productsInBasket.some((el) => {
    return el.id === id;
  });
  console.log(inBasket);

  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.imgContainer)}>
        <img src={images} alt={title} className={classNames(styles.cardImg)} />
        <LikeBtn liked={false} />
      </div>
      <div className={classNames(styles.textContainer)}>
        <p className="">{title}</p>
      </div>

      <div className={classNames(styles.priceContainer)}>
        <div>
          <p className={classNames(styles.priceText)}>ЦЕНА:</p>
          <p className={classNames(styles.price)}>{price} $</p>
        </div>

        <AddToBasketBtn
          product={{ id, title, price, images }}
          inBasket={inBasket}
        />
      </div>
    </div>
  );
};

export default Card;
