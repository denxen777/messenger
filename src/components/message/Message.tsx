import { Box, Stack } from '@mui/system';
import { Avatar } from '../common/avatar/Avatar';
import { Time } from '../time/Time';
import { FC } from 'react';
import { IMessageData } from '../../api/interfaces';
import { SystemMessage } from '../systemMessage/SystemMessage';
import { NewMessage } from '../newMessage/NewMessage';
import { getDate } from '../../utils/getDate';

interface IMessage {
  item: IMessageData;
}

export const Message: FC<IMessage> = ({ item }) => {
  const { message, is_new, created_at, user } = item;
  const { day = '', month = '', year = '' } = getDate(created_at);

  return (
    <>
      <SystemMessage day={day} month={month} year={year} />
      {is_new && <NewMessage />}
      <Stack
        direction='row'
        spacing={1}
        justifyContent={user.you ? 'end' : 'start'}
      >
        {!user.you && <Avatar avatar={user.avatar} size='small' />}
        <Stack fontSize={15}>
          {!user.you && <h4>{user.name + ' ' + user.surname}</h4>}
          <Box
            maxWidth={470}
            display='flex'
            alignItems='flex-end'
            bgcolor={user.you ? '#407EC929' : '#F3F3F3'}
            py={1}
            px={1.5}
            my={0.5}
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
