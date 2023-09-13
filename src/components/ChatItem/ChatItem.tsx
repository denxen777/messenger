import { Stack } from '@mui/system';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

import styles from './ChatItem.module.css';
import { Avatar } from '../_common/avatar/Avatar';
import { ChatInfo } from '../ChatInfo/ChatInfo';
import { IChatData } from '../../api/interfaces';
import { getMessages } from '../../api/api';
import { addMessages } from '../../store/reducer';

interface IChatItem {
  chat: IChatData;
  activeId: string;
  updateActiveId: (id: string) => void;
}

export const ChatItem: FC<IChatItem> = ({ chat, activeId, updateActiveId }) => {
  const { id, title, avatar, last_message, count_unread } = chat;

  const chatItemClass = classNames({
    [styles.chatItem]: true,
    [styles.active]: activeId === id,
  });

  const dispatch = useDispatch();

  const { refetch } = useQuery({
    queryKey: ['messages', id],
    queryFn: () => getMessages(id),
    enabled: false,
    onSuccess: ({ response: messages }) => {
      dispatch(addMessages({ title, messages }));
    },
    onError: () => {
      alert('Что-то пошло не так...');
    },
  });

  const handleClick = async () => {
    updateActiveId(id);
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
      <Avatar avatar={avatar} size='large' />
      <ChatInfo
        title={title}
        lastMessage={last_message}
        countUnread={count_unread}
      />
    </Stack>
  );
};
