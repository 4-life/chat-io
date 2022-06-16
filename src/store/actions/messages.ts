import { UserMessage } from 'types';

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export interface AddMessage {
  readonly type: typeof ADD_MESSAGE;
  message: UserMessage;
}

export interface DeleteMessage {
  readonly type: typeof DELETE_MESSAGE;
  id: number;
}

export interface UpdateMessage {
  readonly type: typeof UPDATE_MESSAGE;
  id: number;
  data: Partial<UserMessage>;
}

export const GetAddMessage: (message: UserMessage) => AddMessage = (
  message
) => ({
  type: ADD_MESSAGE,
  message,
});

export const GetDeleteMessage: (id: number) => DeleteMessage = (id) => ({
  type: DELETE_MESSAGE,
  id,
});

export const GetUpdateMessage: (
  id: number,
  data: Partial<UserMessage>
) => UpdateMessage = (id, data) => ({
  type: UPDATE_MESSAGE,
  id,
  data,
});

export type Action = AddMessage | DeleteMessage | UpdateMessage;
