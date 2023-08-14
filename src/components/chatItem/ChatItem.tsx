import { Stack } from '@mui/system';
import { Avatar } from '../avatar/Avatar';
import { ChatInfo } from '../chatInfo/ChatInfo';
import { IChat } from '../../api/interface';
import { FC } from 'react';
import styles from './ChatList.module.css';
import { getMessages } from '../../api/api';
import { useQuery } from 'react-query';

interface IChatItem {
  chat: IChat;
}

export const ChatItem: FC<IChatItem> = ({ chat }) => {
  const { data: messages, refetch } = useQuery({
    queryKey: ['messages', chat.id],
    queryFn: () => getMessages(chat.id),
    enabled: false,
  });

  const handleClick = () => {
    refetch();
  };

  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems='center'
      className={styles.chatList}
      paddingLeft={2}
      onClick={handleClick}
    >
      <Avatar avatar={chat.avatar} size='small' />
      <ChatInfo title={chat.title} lastMessage={chat.last_message} />
    </Stack>
  );
};
