import classNames from 'classnames';
import { FC, useEffect } from 'react';
import styles from './styles.module.scss';

import { useAppDispatch, useAppSelector } from '../../features/hooks';
import { getBasket } from '../../features/basket/basketSlice';
import { stateBasketProducts } from '../../features/selectors';
import { LikeBtn, AddToBasketBtn } from '../../components';
import { useNavigate } from 'react-router-dom';

type Props = {
  id: number;
  title: string;
  price: number;
  images: string;
};

export const Card: FC<Props> = ({ id, title, price, images }) => {
  const { productsInBasket } = useAppSelector(stateBasketProducts);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getBasket());
  }, [dispatch]);

  const inBasket = productsInBasket.some((el) => {
    return el.id === id;
  });

  const navigate = useNavigate();

  const handleImgClick = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.imgContainer)}>
        <img
          src={images}
          alt={title}
          className={classNames(styles.cardImg)}
          onClick={handleImgClick}
        />
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
