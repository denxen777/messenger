import { Stack } from '@mui/system';
import { Avatar } from '../common/avatar/Avatar';
import { ChatInfo } from '../chatInfo/ChatInfo';
import { IChatData } from '../../api/interfaces';
import { FC } from 'react';
import styles from './ChatList.module.css';
import { getMessages } from '../../api/api';
import { useQuery } from 'react-query';
import { createMessages } from '../../store/reducer';
import { useDispatch } from 'react-redux';
import classNames from 'classnames';

interface IChatItem {
  chat: IChatData;
  activeId: string;
  updateActiveId: (id: string) => void;
}

export const ChatItem: FC<IChatItem> = ({ chat, activeId, updateActiveId }) => {
  const dispatch = useDispatch();

  const chatItemClass = classNames({
    [styles.chatList]: true,
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
      paddingLeft={2}
      onClick={handleClick}
    >
      <Avatar avatar={chat.avatar} size='large' />
      <ChatInfo title={chat.title} lastMessage={chat.last_message} />
    </Stack>
  );
};
