import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';

export const ProfileButton: FC = ({}) => {
  return (
    <button className={classNames(styles.root)}>
      <div className={classNames(styles.icon)}></div>
      <Link to={ROUTES.REGISTRATION} className={classNames(styles.text)}>
        Профиль
      </Link>
    </button>
  );
};
