import { Stack } from '@mui/system';
import { Avatar } from '../avatar/Avatar';
import { ChatInfo } from '../chatInfo/ChatInfo';
import { IChat } from '../../api/interface';
import { FC } from 'react';
import styles from './ChatList.module.css';

interface IChatItem {
  chat: IChat;
}

export const ChatItem: FC<IChatItem> = ({ chat }) => {
  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems='center'
      className={styles.chatList}
      paddingLeft={2}
    >
      <Avatar avatar={chat.avatar} size='small' />
      <ChatInfo title={chat.title} lastMessage={chat.last_message} />
    </Stack>
  );
};
