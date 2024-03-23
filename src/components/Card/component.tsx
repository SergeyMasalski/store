import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

import sneakers from '../../assets/sneakers.jpg';
import LikeBtn from '../LikeBtn/component';
import AddToBasketBtn from '../AddToBasketBtn/component';

interface Props {
  id: number;
  title: string;
  price: number;
  imageSrc: string;
  inBasket: boolean;
  liked: boolean;
}

const Card: FC<Props> = ({ id, title, price, imageSrc, liked, inBasket }) => {
  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.imgContainer)}>
        <img src={imageSrc} alt={title} className={classNames(styles.cardImg)} />
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

export default Card;
