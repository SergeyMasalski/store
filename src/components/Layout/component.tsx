import { FC } from 'react';
import { Header } from '../Header/component';
import classNames from 'classnames';
import styles from './styles.module.scss';

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={classNames(styles.root)}>
      <Header />
      {children}
    </div>
  );
};
