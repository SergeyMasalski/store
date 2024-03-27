import { Action, User as State } from './User';

export type FormReducer = (state: State, action: Action) => State;
