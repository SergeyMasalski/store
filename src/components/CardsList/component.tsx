import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
import Card from '../Card/component';
import SearchContainer from '../Search/container';

interface Props {}

const CardsList: FC<Props> = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      <SearchContainer />
      <div className={classNames(styles.cardList)}>
        <Card inBasket={true} liked={false} />
        <Card inBasket={true} liked={true} />
        <Card inBasket={false} liked={false} />
        <Card inBasket={true} liked={false} />
        <Card inBasket={false} liked={true} />
        <Card inBasket={false} liked={true} />
        <Card inBasket={false} liked={true} />
        <Card inBasket={false} liked={false} />
        <Card inBasket={false} liked={false} />
        <Card inBasket={false} liked={false} />
        <Card inBasket={true} liked={true} />
        <Card inBasket={true} liked={false} />
      </div>
    </div>
  );
};

export default CardsList;
