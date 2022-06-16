export enum Avatar {
  a = '/images/avatars/01.png',
  b = '/images/avatars/02.png',
  c = '/images/avatars/03.png',
  d = '/images/avatars/04.png',
  e = '/images/avatars/05.png',
}

export interface UserData {
  id: number;
  name: string;
  status: string;
  connectedDate: string;
  messages: number;
  online: boolean;
  avatar: Avatar;
}

export interface UserMessage {
  id: number;
  me: boolean;
  status?: 'sent' | 'received';
  date: string;
  text: string;
  user: UserData;
}
