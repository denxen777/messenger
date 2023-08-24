import { Box } from '@mui/system';
import { ChatItem } from '../../components/chatItem/ChatItem';
import styles from './ChatList.module.css';
import { useQuery } from 'react-query';
import { getAllChats } from '../../api/api';
import { useState } from 'react';

export const ChatList = () => {
  const [activeId, setActiveId] = useState('');

  const { data: chats, isSuccess } = useQuery({
    queryKey: ['chats'],
    queryFn: getAllChats,
  });

  return (
    <Box minWidth={360}>
      <h3 className={styles.title}>Все чаты</h3>
      <Box height='70vh' overflow='hidden' sx={{ overflowY: 'auto' }}>
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
