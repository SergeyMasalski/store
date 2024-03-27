import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';

export const MarksButton: FC = ({}) => {
  return (
    <button className={classNames(styles.root)}>
      <div className={classNames(styles.icon)}></div>
      <div className={classNames(styles.text)}>Закладки</div>
    </button>
  );
};
