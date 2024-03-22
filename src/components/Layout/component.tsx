import { FC } from 'react';
import Header from '../Header/component';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={classNames(styles.root)}>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
