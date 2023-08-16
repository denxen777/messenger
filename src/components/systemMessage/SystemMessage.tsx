import { Box } from '@mui/system';
import styles from './SystemMessage.module.css';
import { FC } from 'react';

interface ISystemMessage {
  day: string;
  month: string;
  year: string;
}

export const SystemMessage: FC<ISystemMessage> = ({ day, month, year }) => {
  return (
    <Box display='flex' justifyContent='center' my={1.5}>
      <Box
        bgcolor='#407EC914'
        py={1}
        px={1.5}
        borderRadius={1}
        width='fit-content'
      >
        <span className={styles.date}>{day + '.' + month + '.' + year}</span>
      </Box>
    </Box>
  );
};
