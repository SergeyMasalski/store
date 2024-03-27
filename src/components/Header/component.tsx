import { FC } from 'react';
import { Logo } from '../Logo/component';
import { HeaderTabs } from '../HeaderTabs/component';
import classNames from 'classnames';
import styles from './styles.module.scss';

export const Header: FC = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      <Logo />
      <HeaderTabs />
    </div>
  );
};
