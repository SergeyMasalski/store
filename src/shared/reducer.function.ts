import { Action, User as State } from '../models/types/User';

export function reducer(state: State, { type, payload }: Action): State {
  switch (type) {
    case 'readPassword':
      return { ...state, password: payload };
    case 'createPassword':
      return { ...state, password: payload };
    case 'readMail':
      return { ...state, mail: payload };
    case 'readName':
      return { ...state, name: payload };

    default:
      return state;
  }
}
