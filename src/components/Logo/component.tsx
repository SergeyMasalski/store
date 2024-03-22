import { FC } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface Props {}

const Logo: FC<Props> = ({}) => {
  return (
    <div className={classnames(styles.root)}>
      <div className={classnames(styles.logoStore)}></div>
      <div className={classnames(styles.container)}>
        <div className={classnames(styles.nameStore)}>React STORE</div>
        <div className={classnames(styles.summary)}>Разрабатываемый магазин</div>
      </div>
    </div>
  );
};

export default Logo;
