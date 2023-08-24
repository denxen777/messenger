import { Box } from '@mui/system';
import { ChatItem } from '../chatItem/ChatItem';
import styles from './ChatList.module.css';
import { useQuery } from 'react-query';
import { getAllChats } from '../../api/api';

export const ChatList = () => {
  const { data: chats, isSuccess } = useQuery({
    queryKey: ['chats'],
    queryFn: getAllChats,
  });

  return (
    <Box minWidth={360}>
      <h3 className={styles.title}>Все чаты</h3>
      <Box height='70vh' overflow='hidden' sx={{ overflowY: 'auto' }}>
        {isSuccess &&
          chats.response.map(chat => <ChatItem key={chat.id} chat={chat} />)}
      </Box>
    </Box>
  );
};
