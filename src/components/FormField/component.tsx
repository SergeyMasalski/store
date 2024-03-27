import { FC } from 'react';
import styles from './styles.module.scss';
import classNames from 'classnames';
import { Action, User } from '../../models/types/User';

type Props = {
  idInput: string;
  typeInput: 'text' | 'password' | 'email';
  form: User;
  placeholderText: string;
  typeAction: Action['type'];
  buttonIsPushed: boolean;
  dispatch: React.Dispatch<Action>;
  labelName: string;
  validateField: keyof User;
};

export const FormField: FC<Props> = ({ idInput, typeInput, form, placeholderText, typeAction, buttonIsPushed, dispatch, labelName, validateField }) => {
  return (
    <div className={classNames(styles.containerField)}>
      <label htmlFor={idInput} className={classNames(styles.labels)}>
        {labelName}
      </label>

      <input
        type={typeInput}
        id={idInput}
        placeholder={placeholderText}
        value={form[validateField]}
        onChange={(event) => dispatch({ type: typeAction, payload: event.target.value })}
      />

      {buttonIsPushed && form[validateField]?.length === 0 && <div className={classNames(styles.validateMassage)}>Поле должно быть заполнено</div>}
    </div>
  );
};
