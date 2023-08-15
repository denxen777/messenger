import { Box } from '@mui/system';
import { Header } from '../header/Header';
import { Message } from '../message/Message';
import { messagesSelector } from '../../store/selectors';
import { useSelector } from 'react-redux';
import { TRootState } from '../../store/store';

export const Messages = () => {
  const { messages, title } = useSelector((state: TRootState) =>
    messagesSelector(state),
  );

  return (
    <Box width='100%' borderLeft={2} borderColor='#201F1E04'>
      <Header title={title} />
      {messages.map(item => (
        <Message key={item.id} item={item} />
      ))}
    </Box>
  );
};
