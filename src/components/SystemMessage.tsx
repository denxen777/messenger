import { Box, Stack } from '@mui/system';
import { FC } from 'react';

import styles from './SystemMessage.module.css';

interface ISystemMessage {
  day: string;
  month: string;
  year: string;
}

export const SystemMessage: FC<ISystemMessage> = ({ day, month, year }) => {
  return (
    <Stack alignItems='center' my={1.5}>
      <Box
        bgcolor='#407EC914'
        py={1}
        px={1.5}
        borderRadius={1}
        width='fit-content'
        fontSize={12}
      >
        <span>{`${day}.${month}.${year}`}</span>
      </Box>
    </Stack>
  );
};
