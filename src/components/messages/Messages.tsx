import { Box } from '@mui/system';
import { Header } from '../header/Header';
import { Message } from '../message/Message';

export const Messages = () => {
  return (
    <Box width='100%' borderLeft={2} borderColor='#201F1E04'>
      <Header />
      <Message />
    </Box>
  );
};
