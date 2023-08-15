import { Stack } from '@mui/system';
import { Time } from '../time/Time';
import styles from './ChatInfo.module.css';
import { ILastMessage } from '../../api/interfaces';
import { FC } from 'react';

interface IChatInfo {
  title: string;
  lastMessage: ILastMessage;
}

export const ChatInfo: FC<IChatInfo> = ({ title, lastMessage }) => {
  return (
    <Stack
      width={265}
      whiteSpace='nowrap'
      justifyContent='center'
      rowGap={0.3}
      py={2}
    >
      <Stack direction='row' justifyContent='space-between'>
        <h4 className={styles.title}>{title}</h4>
        <Time time={lastMessage.created_at} isYou={lastMessage.you} />
      </Stack>
      <p className={styles.lastMessage}>{lastMessage.message}</p>
    </Stack>
  );
};
