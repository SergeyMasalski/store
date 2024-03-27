import classNames from 'classnames';
import { FC, useContext, useReducer, useState } from 'react';
import styles from './styles.module.scss';

import { User as State } from '../../models/types/User';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/routes';
import { reducer } from '../../shared/reducer.function';
import { FormReducer } from '../../models/types/AuthRegistration.Reducer';
import { UserContext } from '../../contexts/UserContext';
import { FormField } from '../../components';

const initialState: State = {
  mail: '',
  password: '',
};

export const Authorization: FC = ({}) => {
  const [form, dispatch] = useReducer<FormReducer>(reducer, initialState);

  const { setUser } = useContext(UserContext);

  const [buttonIsPushed, setButtonIsPushed] = useState<boolean>(false);

  return (
    <form className={classNames(styles.root)}>
      <h3>Добро пожаловать!</h3>
      <h4>
        Войдите в систему, чтобы получить доступ к панели управления, настройкам
        и проектам.
      </h4>

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
        idInput={'readPassword'}
        labelName={'Пароль'}
        placeholderText={'Введите Ваш пароль'}
        typeAction={'readPassword'}
        typeInput={'password'}
        validateField={'password'}
      />

      <button
        onClick={(event) => {
          event.preventDefault();
          setButtonIsPushed(true);

          const hasInvalidFields = Object.values(form).some(
            (item) => item.length === 0
          );

          if (hasInvalidFields) return;

          if (setUser) setUser(form);
        }}>
        Войти
      </button>

      <div className={classNames(styles.hint)}>
        У Вас есть аккаунт?{' '}
        <Link to={ROUTES.REGISTRATION}>
          <a>Регистрация</a>
        </Link>
      </div>
    </form>
  );
};
