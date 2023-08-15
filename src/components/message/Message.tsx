import { Box, Stack } from '@mui/system';
import { Avatar } from '../common/avatar/Avatar';
import { Time } from '../time/Time';
import { FC } from 'react';
import { IMessageData } from '../../api/interfaces';

interface IMessage {
  item: IMessageData;
}

export const Message: FC<IMessage> = ({ item }) => {
  const { message, is_new, created_at, user } = item;

  return (
    <Stack
      direction='row'
      spacing={1}
      px={3}
      justifyContent={user.you ? 'end' : 'start'}
    >
      {!user.you && <Avatar avatar={user.avatar} size='small' />}
      <Stack fontSize={15}>
        <h4>{user.name + ' ' + user.surname}</h4>
        <Box
          maxWidth={470}
          display='flex'
          alignItems='flex-end'
          bgcolor='#F3F3F3'
          py={1}
          px={1.5}
          my={0.5}
          borderRadius={1}
        >
          <p>{message}</p>
          <Time time={created_at} isYou={user.you} />
        </Box>
      </Stack>
    </Stack>
  );
};
