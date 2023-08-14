import { instance } from '../utils/instance';
import { IChatsData, IMessagesData } from './interface';

export const getAllChats = async (): Promise<IChatsData> => {
  return await instance
    .get<IChatsData>('chat.get?offset=0&limit=8')
    .then(res => res.data);
};

export const getMessages = async (chatId: string): Promise<IMessagesData> => {
  return await instance
    .get<IMessagesData>(`message.get?chat_id=${chatId}&offset=0&limit=5`)
    .then(res => res.data);
};
