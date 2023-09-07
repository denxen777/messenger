import { Stack } from '@mui/system';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './ChatItem.module.css';
import { Avatar } from '../common/avatar/Avatar';
import { ChatInfo } from '../ChatInfo/ChatInfo';
import { IChatData } from '../../api/interfaces';
import { getMessages } from '../../api/api';
import { createMessages } from '../../store/reducer';

interface IChatItem {
  chat: IChatData;
  activeId: string;
  updateActiveId: (id: string) => void;
}

export const ChatItem: FC<IChatItem> = ({ chat, activeId, updateActiveId }) => {
  const dispatch = useDispatch();

  const chatItemClass = classNames({
    [styles.chatItem]: true,
    [styles.active]: activeId === chat.id,
  });

  const { refetch } = useQuery({
    queryKey: ['messages', chat.id],
    queryFn: () => getMessages(chat.id),
    enabled: false,
    onSuccess: data => {
      dispatch(createMessages({ title: chat.title, messages: data.response }));
    },
  });

  const handleClick = async () => {
    updateActiveId(chat.id);
    await refetch();
  };

  return (
    <Stack
      direction='row'
      spacing={2}
      alignItems='center'
      className={chatItemClass}
      px={2}
      py={1.5}
      onClick={handleClick}
    >
      <Avatar avatar={chat.avatar} size='large' />
      <ChatInfo
        title={chat.title}
        lastMessage={chat.last_message}
        countUnread={chat.count_unread}
      />
    </Stack>
  );
};
