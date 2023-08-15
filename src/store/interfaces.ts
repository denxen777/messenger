import { IMessageData } from '../api/interfaces';

export interface IMessagesState {
  messages: [] | IMessageData[];
  title: string;
}
