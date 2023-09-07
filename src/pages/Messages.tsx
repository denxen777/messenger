import { Box, Stack } from '@mui/system';
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { animateScroll } from 'react-scroll';

import { Header } from '../components/Header';
import { Message } from '../components/Message';
import { Form } from '../components/Form/Form';
import { messagesSelector, titleSelector } from '../store/selectors';
import { Info } from '../components/Info';
import { useQuery } from 'react-query';
import { getAllChats } from '../api/api';
import { LoadingError } from '../components/LoadingError';

export const Messages = () => {
  const messages = useSelector(messagesSelector);
  const title = useSelector(titleSelector);

  const newMessageFound = useMemo(
    () => messages.find(item => item.is_new),
    [messages],
  );

  const { isLoading, isError } = useQuery({
    queryKey: ['chats'],
    queryFn: getAllChats,
  });

  useEffect(() => {
    animateScroll.scrollToBottom({
      containerId: 'content',
      duration: 0,
    });
  }, [messages]);

  return (
    <Stack width='100%' borderLeft={2} borderColor='#E4E4E4'>
      <Box>
        <Header title={title} />
        <Box id='content' height='77vh' style={{ overflowY: 'auto' }}>
          {messages.map(item => (
            <Message
              key={item.id}
              item={item}
              newMessageId={newMessageFound?.id}
            />
          ))}
          {!isError && !isLoading && !messages.length && <Info />}
          {isError && <LoadingError />}
        </Box>
      </Box>
      <Box px={3}>
        <Form hidden={!messages.length} />
      </Box>
    </Stack>
  );
};
