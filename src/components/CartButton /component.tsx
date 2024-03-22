import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {}

const CartButton: FC<Props> = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      <div className={classNames(styles.icon)}></div>
      <div className={classNames(styles.summ)}>10000 р.</div>
    </div>
  );
};

export default CartButton;
