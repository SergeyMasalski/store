import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {}

const Authorization: FC<Props> = ({}) => {
  return (
    <div className={classNames(styles.root)}>
      <h3>Добро пожаловать!</h3>
      <h4>Войдите в систему, чтобы получить доступ к панели управления, настройкам и проектам.</h4>
      <label htmlFor="readMail" className={classNames(styles.readMail)}>
        Электронная почта
      </label>
      <input type="text" id="readMail" placeholder="Введите Вашу почту" />

      <label htmlFor="createPassword" className={classNames(styles.createPassword)}>
        Пароль
      </label>
      <input type="password" id="createPassword" placeholder="Введите Ваш пароль" />

      <button>Войти</button>

      <div className={classNames(styles.hint)}>
        У Вас есть аккаунт? <a>Регистрация</a>
      </div>
    </div>
  );
};

export default Authorization;
