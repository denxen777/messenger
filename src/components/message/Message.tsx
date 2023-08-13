import { Box, Stack } from '@mui/system';
import { Avatar } from '../avatar/Avatar';
import { Time } from '../time/Time';

export const Message = () => {
  return (
    <Stack direction='row' spacing={1} px={3}>
      <Avatar avatar='' size='large' />
      <Stack fontSize={15}>
        <h4>Dianne Russell</h4>
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
          <p>
            It is my first time like this. Thank you so mush! More then you
            know. Second line of the message
          </p>
          {/* <Time /> */}
        </Box>
      </Stack>
    </Stack>
  );
};
