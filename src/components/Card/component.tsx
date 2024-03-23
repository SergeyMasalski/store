import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

import sneakers from '../../assets/sneakers.jpg';
import LikeBtn from '../LikeBtn/component';
import AddToBasketBtn from '../AddToBasketBtn/component';
interface Props {
  inBasket: boolean;
  liked: boolean;
}

const Card: FC<Props> = ({liked, inBasket}) => {
  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.imgContainer)}>
        <img src={sneakers} alt="" className={classNames(styles.cardImg)} />
        <LikeBtn liked={liked} />
      </div>
      <div className={classNames(styles.textContainer)}>
        <p className="">Мужские Кроссовки Nike Blazer Mid Suede</p>
      </div>

      <div className={classNames(styles.priceContainer)}>
        <div>
          <p className={classNames(styles.priceText)}>ЦЕНА:</p>
          <p className={classNames(styles.price)}>12999 руб</p>
        </div>

        <AddToBasketBtn inBasket={inBasket} />
      </div>
    </div>
  );
};

export default Card;
