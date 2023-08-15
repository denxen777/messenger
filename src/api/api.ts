import { instance } from '../utils/instance';
import { IChatsData, IMessagesData } from './interfaces';

export const getAllChats = async (): Promise<IChatsData> => {
  return await instance
    .get<IChatsData>('chat.get?offset=0&limit=15')
    .then(res => res.data);
};

export const getMessages = async (chatId: string): Promise<IMessagesData> => {
  return await instance
    .get<IMessagesData>(`message.get?chat_id=${chatId}&offset=0&limit=15`)
    .then(res => res.data);
};
