import { FC } from 'react';
import Logo from '../Logo/component';
import HeaderTabs from '../HeaderTabs/component';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {}

const Header: FC<Props> = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      <Logo />
      <HeaderTabs />
    </div>
  );
};

export default Header;
