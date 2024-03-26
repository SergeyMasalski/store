import { FC } from 'react';
import { Search } from './component';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const SearchContainer: FC = ({}) => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.text)}>Все товары</div>
      <Search />
    </div>
  );
};
