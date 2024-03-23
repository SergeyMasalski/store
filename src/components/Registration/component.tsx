import classNames from 'classnames';
import { FC } from 'react';
import styles from './styles.module.scss';

interface Props {}

const Registration: FC<Props> = ({}) => {
  return (
    <form className={classNames(styles.root)}>
      <h3>Добро пожаловать!</h3>
      <h4>Зарегистрируйтесь, чтобы получить доступ к панели инструментов, настройкам и проектам.</h4>

      <label htmlFor="readName" className={classNames(styles.readMail)}>
        Имя
      </label>
      <input type="text" id="readName" placeholder="Введите Ваше имя"  className={classNames(styles.input)}/>

      <label htmlFor="readMail" className={classNames(styles.readMail)}>
        Электронная почта
      </label>
      <input type="text" id="readMail" placeholder="Введите Вашу почту"  className={classNames(styles.input)}/>

      <label htmlFor="createPassword" className={classNames(styles.createPassword)}>
        Пароль
      </label>
      <input type="password" id="createPassword" placeholder="Введите Ваш пароль"  className={classNames(styles.input)} />

      <button>Зарегистрироваться</button>

      <div className={classNames(styles.hint)}>
        У Вас есть аккаунт? <a>Войти</a>
      </div>
    </form>
  );
};

export default Registration;
