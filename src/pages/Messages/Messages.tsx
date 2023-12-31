import { Box, Stack } from '@mui/system';
import { useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { animateScroll } from 'react-scroll';

import { Header } from '../../components/Header';
import { Message } from '../../components/Message';
import { Form } from '../../components/Form/Form';
import { messagesSelector } from '../../store/selectors';
import { Info } from '../../components/Info';
import { LoadingError } from '../../components/LoadingError';
import { useChats } from '../../hooks/useChats';
import styles from './Messages.module.css';

export const Messages = () => {
  const messages = useSelector(messagesSelector);

  const newMessageFound = useMemo(
    () => messages.find(item => item.is_new),
    [messages],
  );

  const { isLoading, isError } = useChats();

  useEffect(() => {
    animateScroll.scrollToBottom({
      containerId: 'content',
      duration: 0,
    });
  }, [messages]);

  return (
    <Stack
      width='100%'
      borderLeft={2}
      borderColor='#E4E4E4'
      className={styles.messages}
    >
      <Header />
      <Box id='content' height='77vh' sx={{ overflowY: 'auto' }}>
        {messages.map(item => (
          <Message key={item.id} item={item} foundId={newMessageFound?.id} />
        ))}
        {!isError && !isLoading && !messages.length && <Info />}
        {isError && <LoadingError />}
      </Box>
      <Form hidden={!messages.length} />
    </Stack>
  );
};
