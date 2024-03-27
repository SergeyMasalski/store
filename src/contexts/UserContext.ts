import { Dispatch, SetStateAction, createContext } from 'react';

import { User } from '../models/types/User';

type Context = {
  user: User | null;
  setUser?: Dispatch<SetStateAction<User | null>>;
};

export const UserContext = createContext<Context>({ user: null });
