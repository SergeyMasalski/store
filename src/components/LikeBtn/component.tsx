import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';
interface Props {
  liked: boolean;
}

const LikeBtn: FC<Props> = ({ liked }) => {
  return (
    <button
      className={
        liked ? classNames(styles.likeBtn) : classNames(styles.notLikeBtn)
      }></button>
  );
};

export default LikeBtn;
