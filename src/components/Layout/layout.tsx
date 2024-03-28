import { FC } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';
import { Header } from '../../components';

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
