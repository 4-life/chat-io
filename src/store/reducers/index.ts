import { combineReducers } from 'redux';

import { reducer as messagesReducer, State as MessagesState } from './messages';

export interface RootState {
  messages: MessagesState;
}

const appReducer = combineReducers({
  messages: messagesReducer,
});

export default appReducer;
