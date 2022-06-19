import { UserData } from 'types';

export const ADD_USER = 'ADD_USER';
export const EXIT_USER = 'EXIT_USER';

export interface AddUser {
  readonly type: typeof ADD_USER;
  user: UserData;
}

export interface ExitUser {
  readonly type: typeof EXIT_USER;
}

export const CallAddUser: (user: UserData) => AddUser = (user) => ({
  type: ADD_USER,
  user,
});

export const CallExitUser: () => ExitUser = () => ({
  type: EXIT_USER,
});

export type Action = AddUser | ExitUser;
