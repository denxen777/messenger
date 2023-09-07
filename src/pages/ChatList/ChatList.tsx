import { Box } from '@mui/system';
import { useQuery } from 'react-query';
import { useState } from 'react';

import styles from './ChatList.module.css';
import { ChatItem } from '../../components/ChatItem/ChatItem';
import { Loading } from '../../components/Loading';
import { getAllChats } from '../../api/api';

export const ChatList = () => {
  const [activeId, setActiveId] = useState('');

  const {
    data: chats,
    isSuccess,
    isLoading,
  } = useQuery({
    queryKey: ['chats'],
    queryFn: getAllChats,
  });

  return (
    <Box minWidth={370}>
      <h3 className={styles.title}>Все чаты</h3>
      <Box height='82vh' sx={{ overflowY: 'auto' }}>
        {isLoading && <Loading />}
        {isSuccess &&
          chats.response.map(chat => (
            <ChatItem
              key={chat.id}
              chat={chat}
              activeId={activeId}
              updateActiveId={(id: string) => setActiveId(id)}
            />
          ))}
      </Box>
    </Box>
  );
};
