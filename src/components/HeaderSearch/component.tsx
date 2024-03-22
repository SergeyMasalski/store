import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {}

const HeaderSearch: FC<Props> = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      <label className={styles.icon} htmlFor="headerSearch"></label>
      <input type="text" id="headerSearch" className={classNames(styles.headerSearch)} />
    </div>
  );
};

export default HeaderSearch;
