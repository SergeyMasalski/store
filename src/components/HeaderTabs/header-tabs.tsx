import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { CartButton, MarksButton, ProfileButton } from '../../components';

export const HeaderTabs: FC = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      <CartButton />
      <MarksButton />
      <ProfileButton />
    </div>
  );
};
