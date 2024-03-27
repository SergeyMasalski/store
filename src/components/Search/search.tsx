import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

export const Search: FC = ({}) => {
  return (
    <div className={classNames(styles.rootSearch)}>
      <label className={styles.icon} htmlFor="search"></label>
      <input type="text" id="search" className={classNames(styles.search)} placeholder="Поиск..." />
    </div>
  );
};