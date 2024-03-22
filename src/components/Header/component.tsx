import { FC } from 'react';
import Logo from '../Logo/component';
import HeaderTabs from '../HeaderTabs/component';
import classNames from 'classnames';
import styles from './styles.module.scss';
import HeaderSearch from '../HeaderSearch/component';

interface Props {}

const Header: FC<Props> = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      <Logo />
      <HeaderSearch />
      <HeaderTabs />
    </div>
  );
};

export default Header;
