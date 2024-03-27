import classNames from 'classnames';

import styles from './styles.module.scss';
import { FC, useReducer, useState } from 'react';
import { ROUTES } from '../../utils/routes';
import { Link } from 'react-router-dom';
import { FormReducer } from '../../models/types/AuthRegistration.Reducer';
import { reducer } from '../../shared/reducer.function';
import { User } from '../../models/types/User';
import { FormField } from '../../components';

const initialState: User = {
  name: '',
  mail: '',
  password: '',
};

export const Registration: FC = ({}) => {
  const [form, dispatch] = useReducer<FormReducer>(reducer, initialState);

  const [buttonIsPushed, setButtonIsPushed] = useState<boolean>(false);

  return (
    <form className={classNames(styles.root)}>
      <h3>Добро пожаловать!</h3>
      <h4>
        Зарегистрируйтесь, чтобы получить доступ к панели инструментов,
        настройкам и проектам.
      </h4>

      <FormField
        buttonIsPushed={buttonIsPushed}
        dispatch={dispatch}
        form={form}
        idInput={'readName'}
        labelName={'Ваше имя'}
        placeholderText={'Введите Ваше имя'}
        typeAction={'readName'}
        typeInput={'text'}
        validateField={'name'}
      />

      <FormField
        buttonIsPushed={buttonIsPushed}
        dispatch={dispatch}
        form={form}
        idInput={'readMail'}
        labelName={'Электронная почта'}
        placeholderText={'Введите Вашу почту'}
        typeAction={'readMail'}
        typeInput={'email'}
        validateField={'mail'}
      />

      <FormField
        buttonIsPushed={buttonIsPushed}
        dispatch={dispatch}
        form={form}
        idInput={'createPassword'}
        labelName={'Ваш пароль'}
        placeholderText={'Создайте Ваш пароль'}
        typeAction={'createPassword'}
        typeInput={'password'}
        validateField={'password'}
      />

      <button
        onClick={(event) => {
          event.preventDefault();
          setButtonIsPushed(true);
        }}>
        Зарегистрироваться
      </button>

      <div className={classNames(styles.hint)}>
        У Вас есть аккаунт?{' '}
        <Link to={ROUTES.AUTHORIZATION}>
          <a>Войти</a>
        </Link>
      </div>
    </form>
  );
};
