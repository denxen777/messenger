import { Box, Stack } from '@mui/system';
import { FC } from 'react';

import { Avatar } from '../common/avatar/Avatar';
import { Time } from '../time/Time';
import { SystemMessage } from '../systemMessage/SystemMessage';
import { NewMessage } from '../newMessage/NewMessage';
import { getDate } from '../../utils/getDate';
import { IMessageData } from '../../api/interfaces';

interface IMessage {
  item: IMessageData;
  newMessageId: undefined | string;
}

export const Message: FC<IMessage> = ({ item, newMessageId }) => {
  const { message, created_at, user, id } = item;
  const { day = '', month = '', year = '' } = getDate(created_at);

  return (
    <>
      {item.created_at !== 0 && (
        <SystemMessage day={day} month={month} year={year} />
      )}
      {newMessageId === id && <NewMessage />}
      <Stack
        direction='row'
        spacing={1}
        justifyContent={user.you ? 'end' : 'start'}
        mt={user.avatar !== '' ? 1.5 : 0}
        px={3}
      >
        {!user.you && <Avatar avatar={user.avatar} size='small' />}
        <Stack fontSize={15}>
          {!user.you && <h4>{user.name + ' ' + user.surname}</h4>}
          <Box
            maxWidth={470}
            display='flex'
            alignItems='flex-end'
            bgcolor={user.you ? '#E0EAF6' : '#F3F3F3'}
            py={1}
            px={1.5}
            mt={0.5}
            borderRadius={1}
          >
            <p>{message}</p>
            <Time time={created_at} incoming={user.you} />
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
