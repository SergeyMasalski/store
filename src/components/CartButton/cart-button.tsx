import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';



export const CartButton: FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/basket');
  };

  return (
    <button className={classNames(styles.root)} onClick={handleClick}>
      <div className={classNames(styles.icon)}></div>
      <div className={classNames(styles.summ)}>10000 р.</div>
    </button>
  );
};


