import { combineReducers } from 'redux';

import {
  reducer as messagesReducer,
  State as MessagesState,
} from './messages/reducer';

import { reducer as userReducer, State as UserState } from './user/reducer';

export interface RootState {
  messages: MessagesState;
  user: UserState;
}

const appReducer = combineReducers({
  messages: messagesReducer,
  user: userReducer,
});

export default appReducer;
