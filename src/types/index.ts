import { Socket } from 'socket.io-client';

export interface UserData {
  id: number;
  name: string;
  status: string;
  connectedDate?: string;
  messages?: number;
  online?: boolean;
  avatar: string;
}

export interface UserMessage {
  id: number;
  me?: boolean;
  status?: 'sent' | 'received';
  date: string;
  text: string;
  user: UserData;
}

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  users: (users: UserData[]) => void;
  messages: (messages: UserMessage[]) => void;
}

export enum SocketActions {
  USER_ADD = 'user:add',
  USER_LEAVE = 'user:leave',
  MESSAGE_GET = 'message:get',
  MESSAGE_ADD = 'message:add',
  MESSAGE_REMOVE = 'message:remove',
}

export interface ClientToServerEvents {
  [SocketActions.USER_ADD]: (user: UserData) => void;
  [SocketActions.MESSAGE_GET]: () => void;
  [SocketActions.MESSAGE_ADD]: (message: UserMessage) => void;
  [SocketActions.MESSAGE_REMOVE]: (id: number) => void;
  [SocketActions.USER_LEAVE]: (id: number) => void;
}

export type SocketInstance = Socket<ServerToClientEvents, ClientToServerEvents>;
