import { FC } from 'react';
import styles from './style.module.scss';
import classNames from 'classnames';

interface Props {}

const Add: FC<Props> = ({}) => {
  return <div className={classNames(styles.root)}></div>;
};

export default Add;
