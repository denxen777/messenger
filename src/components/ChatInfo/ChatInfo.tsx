import { Stack } from '@mui/system';
import { FC } from 'react';

import styles from './ChatInfo.module.css';
import { Time } from '../Time/Time';
import { ILastMessage } from '../../api/interfaces';
import { Sticker } from '../Sticker/Sticker';

interface IChatInfo {
  title: string;
  lastMessage: ILastMessage;
  countUnread: number;
}

export const ChatInfo: FC<IChatInfo> = ({
  title,
  lastMessage,
  countUnread,
}) => {
  return (
    <Stack
      width={265}
      whiteSpace='nowrap'
      justifyContent='center'
      rowGap={0.3}
      position='relative'
    >
      <Stack direction='row' justifyContent='space-between'>
        <h4 className={styles.title}>{title}</h4>
        <Time time={lastMessage.created_at} incoming={lastMessage.you} />
      </Stack>
      <p className={styles.lastMessage}>{lastMessage.message}</p>
      {countUnread > 0 && <Sticker countUnread={countUnread} />}
    </Stack>
  );
};
