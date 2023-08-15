export interface IChatsData {
  response: IChatData[];
}

export interface IChatData {
  id: string;
  created_at: number;
  title: string;
  avatar: string;
  private: true;
  last_message: ILastMessage;
  users: IUser[];
  count_unread: number;
}

export interface ILastMessage {
  created_at: number;
  user_id: string;
  user_name: string;
  user_surname: string;
  you: boolean;
  message: string;
}

export interface IUser {
  id: string;
  name: string;
  surname: string;
  avatar: string;
  you: boolean;
}

export interface IMessagesData {
  response: IMessageData[];
}

export interface IMessageData {
  id: string;
  created_at: number;
  user: IUser;
  message: string;
  is_new: boolean;
}
