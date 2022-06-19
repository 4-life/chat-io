import { UserData } from 'types';
import { ADD_USER, Action, EXIT_USER } from './action';

function getUserFromLocalstorage(): UserData | null {
  try {
    const user = window.localStorage.getItem('user');

    if (user) {
      return JSON.parse(user);
    }
  } catch (error) {
    return null;
  }

  return null;
}

export interface State {
  user: UserData | null;
}

const initState: State = {
  user: getUserFromLocalstorage(),
};

export const reducer = (state: State = initState, action: Action) => {
  switch (action.type) {
    case ADD_USER: {
      window.localStorage.setItem('user', JSON.stringify(action.user));
      return {
        ...state,
        user: action.user,
      };
    }

    case EXIT_USER: {
      window.localStorage.removeItem('user');
      return {
        ...state,
        user: null,
      };
    }

    default:
      return state;
  }
};
