import { instance } from '../utils/instance';
import { IData } from './interface';

export const getAllChats = async (): Promise<IData> => {
  return await instance
    .get<IData>('chat.get?offset=0&limit=8')
    .then(res => res.data);
};
