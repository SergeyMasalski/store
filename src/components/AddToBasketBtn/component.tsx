import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

type Props = {
  inBasket: boolean;
};

export const AddToBasketBtn: FC<Props> = ({ inBasket }) => {
  return <button className={inBasket ? classNames(styles.alreadyAddedBtn) : classNames(styles.addBtn)}></button>;
};
