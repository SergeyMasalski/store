import { FC } from 'react';

import classNames from 'classnames';
import styles from './styles.module.scss';
import { HeaderTabs, Logo } from '../../components';



export const Header: FC = () => {
  return (
    <div className={classNames(styles.root)}>
      <Logo />
      <HeaderTabs />
    </div>
  );
};
