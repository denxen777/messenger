import { Stack } from '@mui/system';
import { FC } from 'react';

import styles from './ChatInfo.module.css';
import { Time } from '../time/Time';
import { ILastMessage } from '../../api/interfaces';

interface IChatInfo {
  title: string;
  lastMessage: ILastMessage;
}

export const ChatInfo: FC<IChatInfo> = ({ title, lastMessage }) => {
  return (
    <Stack width={265} whiteSpace='nowrap' justifyContent='center' rowGap={0.3}>
      <Stack direction='row' justifyContent='space-between'>
        <h4 className={styles.title}>{title}</h4>
        <Time time={lastMessage.created_at} incoming={lastMessage.you} />
      </Stack>
      <p className={styles.lastMessage}>{lastMessage.message}</p>
    </Stack>
  );
};
