import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import {
  addItemToBasket,
  deleteItemFromBasket,
} from '../../features/basket/basketSlice';
import { useAppDispatch } from '../../features/hooks';

type Props = {
  inBasket: boolean;
  product: {
    id: number;
    title: string;
    price: number;
    images: string;
  };
};
const AddToBasketBtn: FC<Props> = ({ inBasket, product }) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {inBasket && (
        <button
          onClick={() => dispatch(deleteItemFromBasket(product.id))}
          className={classNames(styles.alreadyAddedBtn)}></button>
      )}

      {!inBasket && (
        <button
          onClick={() =>
            dispatch(
              addItemToBasket({
                id: product.id,
                title: product.title,
                price: product.price,
                images: product.images,
              })
            )
          }
          className={classNames(styles.addBtn)}></button>
      )}
    </>
  );
};

export default AddToBasketBtn;
