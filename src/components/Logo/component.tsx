import { FC } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

export const Logo: FC = ({}) => {
  return (
    <Link to={ROUTES.HOME} className={classnames(styles.root)}>
      <div className={classnames(styles.logoStore)}></div>
      <div className={classnames(styles.container)}>
        <div className={classnames(styles.nameStore)}>React STORE</div>
        <div className={classnames(styles.summary)}>Разрабатываемый магазин</div>
      </div>
    </Link>
  );
};
