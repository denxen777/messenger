import { Box, Stack } from '@mui/system';
import { Header } from '../header/Header';
import { Message } from '../message/Message';
import { messagesSelector, titleSelector } from '../../store/selectors';
import { useSelector } from 'react-redux';
import { TRootState } from '../../store/store';
import { Form } from '../form/Form';

export const Messages = () => {
  const messages = useSelector((state: TRootState) => messagesSelector(state));
  const title = useSelector((state: TRootState) => titleSelector(state));

  return (
    <Stack width='100%' borderLeft={2} borderColor='#201F1E04'>
      <Box>
        <Header title={title} />
        <Box height={630} style={{ overflowY: 'auto' }} px={3}>
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
