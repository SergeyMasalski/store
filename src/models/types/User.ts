export type User = {
  mail: string;
  password: string;
  name?: string;
};

type RegistrationAction = 'readMail' | 'createPassword' | 'readName';

type AuthorizationAction = 'readMail' | 'readPassword';

export type Action = {
  type: RegistrationAction | AuthorizationAction;
  payload: string;
};
