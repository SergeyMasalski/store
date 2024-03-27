import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

export const CartButton: FC = ({}) => {
  return (
    <button className={classNames(styles.root)}>
      <div className={classNames(styles.icon)}></div>
      <div className={classNames(styles.summ)}>10000 р.</div>
    </button>
  );
};
