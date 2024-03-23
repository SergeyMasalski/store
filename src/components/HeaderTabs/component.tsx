import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
// import CartButton from '../CartButton /component';
import MarksButton from '../MarksButton/component';
import ProfileButton from '../ProfileButton/component';

interface Props {}

const HeaderTabs: FC<Props> = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      {/* <CartButton /> */}
      <MarksButton />
      <ProfileButton />
    </div>
  );
};

export default HeaderTabs;
