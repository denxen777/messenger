export interface IChatsData {
  response: IChat[];
}

export interface IChat {
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
  you?: boolean;
}

export interface IMessagesData {
  response: IMessage[];
}

export interface IMessage {
  id: string;
  created_at: number;
  user: IUser;
  message: string;
  is_new: boolean;
}
