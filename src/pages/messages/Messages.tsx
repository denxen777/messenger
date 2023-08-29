import { Box, Stack } from '@mui/system';
import { Header } from '../../components/header/Header';
import { Message } from '../../components/message/Message';
import { messagesSelector, titleSelector } from '../../store/selectors';
import { useSelector } from 'react-redux';
import { Form } from '../../components/form/Form';
import { useMemo } from 'react';

export const Messages = () => {
  const messages = useSelector(messagesSelector);
  const title = useSelector(titleSelector);

  const newMessageFound = useMemo(
    () => messages.find(item => item.is_new),
    [messages],
  );

  return (
    <Stack width='100%' borderLeft={2} borderColor='#E4E4E4'>
      <Box>
        <Header title={title} />
        <Box height='70vh' style={{ overflowY: 'auto' }}>
          {messages.map(item => (
            <Message
              key={item.id}
              item={item}
              newMessageId={newMessageFound?.id}
            />
          ))}
        </Box>
      </Box>
      <Box px={3}>
        <Form />
      </Box>
    </Stack>
  );
};
