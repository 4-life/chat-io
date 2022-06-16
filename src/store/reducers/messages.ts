import { messages as dummyMessages } from 'dummy';
import { UserMessage } from 'types';
import {
  ADD_MESSAGE,
  DELETE_MESSAGE,
  UPDATE_MESSAGE,
  Action,
} from '../actions/messages';

export interface State {
  messages: UserMessage[];
}

const initState: State = {
  messages: [...dummyMessages],
};

export const reducer = (state: State = initState, action: Action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return {
        ...state,
        messages: [...state.messages, action.message],
      };
    }

    case DELETE_MESSAGE: {
      const index = state.messages.findIndex((m) => m.id === action.id);

      if (!index) {
        return state;
      }

      const messages = [...state.messages];
      messages.splice(index, 1);

      return {
        ...state,
        messages,
      };
    }

    case UPDATE_MESSAGE: {
      const index = state.messages.findIndex((m) => m.id === action.id);
      const messages = [...state.messages];

      if (!index) {
        return state;
      }

      const currentMessage = {
        ...messages[index],
        ...action.data,
      };

      messages[index] = currentMessage;

      return {
        ...state,
        messages,
      };
    }

    default:
      return state;
  }
};
