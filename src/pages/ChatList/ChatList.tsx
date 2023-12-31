import { Box } from '@mui/system';
import { useState } from 'react';

import styles from './ChatList.module.css';
import { ChatItem } from '../../components/ChatItem/ChatItem';
import { Loading } from '../../components/Loading';
import { useChats } from '../../hooks/useChats';

export const ChatList = () => {
  const [activeId, setActiveId] = useState('');

  const { data: chats, isSuccess, isLoading } = useChats();

  return (
    <Box minWidth={370} className={styles.chatList}>
      <h3 className={styles.title}>Все чаты</h3>
      <Box height='75vh' sx={{ overflowY: 'auto' }}>
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
