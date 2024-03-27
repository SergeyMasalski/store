import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

import { LikeBtn } from '../LikeBtn/component';
import { AddToBasketBtn } from '../AddToBasketBtn/component';

type Props = {
  id: number;
  title: string;
  price: number;
  images: string[];
  inBasket: boolean;
  liked: boolean;
};

export const Card: FC<Props> = ({ id, title, price, images, liked, inBasket }) => {
  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.imgContainer)}>
        <img src={images[0]} alt={title} className={classNames(styles.cardImg)} />
        <LikeBtn liked={liked} />
      </div>
      <div className={classNames(styles.textContainer)}>
        <p className="">{title}</p>
      </div>

      <div className={classNames(styles.priceContainer)}>
        <div>
          <p className={classNames(styles.priceText)}>ЦЕНА:</p>
          <p className={classNames(styles.price)}>{price} $</p>
        </div>

        <AddToBasketBtn inBasket={inBasket} />
      </div>
    </div>
  );
};
