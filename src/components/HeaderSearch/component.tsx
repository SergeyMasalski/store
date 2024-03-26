import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

export const HeaderSearch: FC = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      <label className={styles.icon} htmlFor="headerSearch"></label>
      <input type="text" id="headerSearch" className={classNames(styles.headerSearch)} />
    </div>
  );
};
