import { Stack } from '@mui/system';
import { Avatar } from '../common/avatar/Avatar';
import { ChatInfo } from '../chatInfo/ChatInfo';
import { IChatData } from '../../api/interfaces';
import { FC } from 'react';
import styles from './ChatList.module.css';
import { getMessages } from '../../api/api';
import { useQuery } from 'react-query';
import { createMessages } from '../../store/messages';
import { useDispatch } from 'react-redux';

interface IChatItem {
  chat: IChatData;
}

export const ChatItem: FC<IChatItem> = ({ chat }) => {
  const dispatch = useDispatch();

  const { refetch } = useQuery({
    queryKey: ['messages', chat.id],
    queryFn: () => getMessages(chat.id),
    enabled: false,
    onSuccess: data => {
      dispatch(createMessages({ title: chat.title, messages: data.response }));
    },
  });

  const handleClick = async () => {
    await refetch();
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
