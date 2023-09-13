import { useQuery } from 'react-query';

import { getAllChats } from '../api/api';

export const useChats = () => {
  return useQuery({
    queryKey: ['chats'],
    queryFn: getAllChats,
  });
};
