import { Box, Stack } from '@mui/system';
import { Header } from '../header/Header';
import { Message } from '../message/Message';
import { messagesSelector, titleSelector } from '../../store/selectors';
import { useSelector } from 'react-redux';
import { Form } from '../form/Form';

export const Messages = () => {
  const messages = useSelector(messagesSelector);
  const title = useSelector(titleSelector);

  return (
    <Stack width='100%' borderLeft={2} borderColor='#d7dbe085'>
      <Box>
        <Header title={title} />
        <Box height='70vh' style={{ overflowY: 'auto' }} px={3}>
          {messages.map(item => (
            <Message key={item.id} item={item} />
          ))}
        </Box>
      </Box>
      <Box px={3}>
        <Form />
      </Box>
    </Stack>
  );
};
