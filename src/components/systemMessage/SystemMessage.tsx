import { Box } from '@mui/system';
import styles from './SystemMessage.module.css';

export const SystemMessage = () => {
  return (
    <Box display='flex' justifyContent='center' my={1.5}>
      <Box
        bgcolor='#407EC914'
        py={1}
        px={1.5}
        borderRadius={1}
        width='fit-content'
      >
        <span className={styles.date}>11.02.2021</span>
      </Box>
    </Box>
  );
};
