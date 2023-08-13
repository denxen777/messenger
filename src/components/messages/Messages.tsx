import { Box } from '@mui/system';
import { Header } from '../header/Header';
import { SystemMessage } from '../systemMessage/SystemMessage';
import { Message } from '../message/Message';
import { NewMessage } from '../newMessage/NewMessage';

export const Messages = () => {
  return (
    <Box width='100%' borderLeft={2} borderColor='#201F1E04'>
      <Header />
      <SystemMessage />
      <NewMessage />
      <Message />
    </Box>
  );
};
