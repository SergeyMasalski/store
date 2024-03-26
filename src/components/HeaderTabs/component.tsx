import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { CartButton } from '../CartButton/component';
import { MarksButton } from '../MarksButton/component';
import { ProfileButton } from '../ProfileButton/component';

export const HeaderTabs: FC = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      <CartButton />
      <MarksButton />
      <ProfileButton />
    </div>
  );
};
