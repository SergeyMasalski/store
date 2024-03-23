import { FC } from 'react';
import Search from './component';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {}

const SearchContainer: FC<Props> = ({}) => {
  return (
    <div className={classNames(styles.container)}>
      <div className={classNames(styles.text)}>Все товары</div>
      <Search />
    </div>
  );
};

export default SearchContainer;
